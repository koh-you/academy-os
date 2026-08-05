# App/API 4차 리팩터링 4-2 row mapper 기준선

업데이트: 2026-08-05

## 목적

4-2는 DB snake_case row와 Academy OS camelCase domain model 사이의 변환을 route 파일에서 pure module로 옮긴다. 4-2a는 제품 runtime을 바꾸지 않고 현재 변환기 전체, 저장 토큰, null·legacy 처리, 미지 필드 정책과 첫 추출 범위를 고정한다.

## 현재 소유권

| 현재 파일 | 변환기 | 구조 | 현재 역할 |
| --- | ---: | --- | --- |
| `api/routes/coreData.js` | 36 | 18개 `to`/`from` 쌍 | 학생·수업·출결·일정·자료·알림 원천 row 변환과 route persistence가 한 파일에 공존 |
| `api/routes/examAnalysisPipeline.js` | 9 | 3개 양방향 쌍 + source patch 1개 + read-only 2개 | 시험분석 run/source/event write와 question/AI job read projection |
| 합계 | 45 | core 18쌍, exam 9개 | 4-0의 정규식 기반 44개 집계를 구조 감사로 45개로 교정 |

4-2a 감사 fixture는 위 45개를 아래 후속 단위에 중복 없이 모두 분류한다.

| 후속 단위 | 대상 | 개수 |
| --- | --- | ---: |
| 4-2b | Student, ClassTemplate, Lesson | 6 |
| 4-2c | StudentIntakeApplicant, SpecialLectureApplication, SpecialLectureEnrollment | 6 |
| 4-2d | LessonRecord, Homework, MakeupTask, AttendanceEvent | 8 |
| 4-2e | TestSession, TestAttempt, ExamPrep, SchoolEvent, AcademyReminder | 10 |
| 4-2f | AppState, ResourceMaterial, NotificationJob | 6 |
| 4-2g | exam analysis run/source/question/AI job/event | 9 |

## 보존할 변환 계약

- DB row는 snake_case, domain model은 camelCase다. mapper는 명시한 필드만 투영한다.
- `compact`는 core에서 `undefined`와 빈 문자열을 `null`로 바꾸지만 시험분석에서는 `undefined`를 보존한다. 두 의미를 합치지 않는다.
- core write mapper 17개와 시험분석 write/patch mapper 3개가 내부에서 새 `updated_at`을 만든다. 이 값은 API의 `expectedUpdatedAt`과 구분되는 새 source version이며 추출 후에도 호출당 한 번만 생성돼야 한다.
- AttendanceEvent와 exam Event는 append-only라 같은 `updated_at` 규칙을 쓰지 않는다.
- `toStudentRow`, `toLessonRow`, `toLessonRecordRow`, `toHomeworkRow`, `toAcademyReminderRow`는 아직 적용되지 않은 DB column을 피하는 schema fallback option을 가진다. 추출 과정에서 option을 기본 활성화하거나 제거하지 않는다.
- special lecture requested/session/student schedule은 camelCase와 legacy snake_case 입력을 함께 정규화한다. 원천 alias를 묵시적으로 더 늘리지 않는다.
- 시험분석 `toSourcePatchRow`는 미입력 필드를 `undefined`로 보존해 부분 patch에서 기존 값을 지우지 않는다.
- unknown DB/domain field는 현재 mapper가 보존하지 않고 명시 projection에서 버린다. round-trip 검증은 전체 object 동일성이 아니라 canonical 필드, null/default, legacy alias, version token 정책을 검사한다.

## 상태·저장·부작용 경계

| 구분 | 4-2 owner |
| --- | --- |
| 원본 데이터 | Supabase table row; mapper가 원천 자체를 소유하지 않음 |
| local draft | React/App controller에 유지; row mapper로 이동하지 않음 |
| API/DB 저장 | 기존 route persistence와 CAS/readback owner에 유지 |
| 파생 화면값 | 기존 domain selector와 화면 owner에 유지 |
| provider side effect | Solapi·Slack·Storage·AI module에 유지; mapper import 금지 |
| 오류 복구 | insert-only/CAS/rollback/readback action에 유지; mapper는 오류를 삼키지 않음 |

## 첫 추출: 4-2b

`Student`, `ClassTemplate`, `Lesson`의 6개 변환기와 필요한 pure helper만 `src/shared/persistence`의 단방향 모듈로 옮긴다. `api/` 아래 JavaScript 파일은 Vercel serverless 함수 수에 포함되므로 새 mapper 파일을 그 경로에 추가하지 않는다. 이 여섯 변환기 본문에는 Supabase/API/Storage/provider 호출이 없다.

4-2b fixture는 다음을 동작으로 고정한다.

1. canonical domain → row → domain의 의미 보존.
2. 빈 문자열→`null`, DB `null`→화면 기본값의 현재 규칙.
3. clock time 정규화와 special lecture student schedule legacy alias.
4. 호출마다 생성되는 `updated_at`과 반환 `updatedAt`의 분리.
5. withdrawal/schedule metadata fallback option.
6. unknown field drop 정책과 mapper에 I/O가 없다는 import 경계.

4-2a에서는 파일 이동, route import, DB 쓰기, provider 행동을 하지 않는다.

## 4-2b 완료 상태

- Student/ClassTemplate/Lesson 6개 mapper와 `normalizeSpecialLectureStudentSchedules`를 `src/shared/persistence/coreIdentityRowMappers.js`로 옮겼다.
- 기존 main의 `compact`, `normalizeClockTime`, 특강 schedule helper와 6개 mapper 본문은 export 선언을 제외하고 문자 단위 `9/9` 동일하다.
- `coreData`는 기존 외부 사용자를 위해 `toLessonRow`를 재수출하며 모든 저장·재조회 호출은 같은 함수 identity를 사용한다.
- 최초 `api/domain` 배치는 Vercel serverless JavaScript file inventory를 12개에서 13개로 늘려 실패했다. 함수 entry가 아닌 pure mapper는 `src/shared/persistence`에 두어 `12/12` 배포 한도를 유지한다.
- 전용 fixture가 round-trip, null/default, time normalization, 특강 snake_case alias, schema fallback, 새 version token, unknown field drop과 I/O 부재를 검사한다.
- Supabase source, CAS/readback/rollback, App draft, provider side effect는 이동하거나 실행하지 않았다.

## 4-2c 완료 상태

- StudentIntakeApplicant/SpecialLectureApplication/SpecialLectureEnrollment 6개 mapper와 ID/status/session helper 7개를 `src/shared/persistence/intakeSpecialLectureRowMappers.js`로 옮겼다.
- 기존 main의 `compact`, `normalizeClockTime`을 포함한 helper/mapper 본문은 export 선언을 제외하고 문자 단위 `15/15` 동일하다.
- 전용 fixture는 intake desired-class, null/default, 생성 ID, status fallback, session dedupe, camel/snake legacy plan, conditional plan review, 생성/갱신 token과 unknown field drop을 검사한다.
- `coreData`는 Tally payload 조립, Supabase CAS/readback, schema fallback 재시도와 source 오류를 계속 소유한다. 실제 Tally·운영 DB·provider는 실행하지 않았다.
