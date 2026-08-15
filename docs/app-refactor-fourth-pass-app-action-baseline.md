# App/API 4차 리팩터링 4-4 App action 기준선

업데이트: 2026-08-15

## 목적

4-4는 App의 남은 authoritative persistence orchestration을 도메인 action으로 옮긴다. 4-0 기준선(2026-08-04)은 `handle*` 113개, 직접 `fetch`/`postJson*` 36+37회를 기록했지만, 그 뒤 일반 기능 작업으로 수치가 이미 바뀌었다. 이 문서는 4-4 착수 시점에 다시 측정한 정확한 기준선이며, `scripts/test-fourth-pass-app-action-baseline.mjs`가 이 수치를 고정한다. 4-4a는 제품 runtime을 변경하지 않는다.

## 정량 기준선

| 항목 | 4-0(2026-08-04) | 4-4a(2026-08-15) |
| --- | ---: | ---: |
| `src/app/App.jsx` 줄 수 | 10,903 | 11,202 |
| `handle*` 함수 수 | 113 | 116 |
| 직접 `fetch`/`postJson*` 호출 | 73 (36+37) | 66 |

## 핵심 발견: 대부분의 handle*는 이미 얇은 wrapper다

`handle*` 116개 각각의 함수 본문을 brace-matching으로 델리미트한 뒤 본문 안에 `fetch(`/`postJson*(` 직접 호출이 있는지 검사했다.

| 분류 | 개수 | 의미 |
| --- | ---: | --- |
| 직접 호출 포함(4-4 추출 후보) | **15** | 여전히 App.jsx 안에서 API 호출·로컬 draft·CAS를 직접 조립한다 |
| 이미 위임(thin wrapper) | **101** | 이미 도메인 함수(2·3차 리팩터링 산출물)를 호출하고 `set*` state만 갱신한다 |

101개의 thin wrapper를 도메인 action 파일로 그대로 옮기는 건 계획 문서 자체의 경고("의미 없는 wrapper 이동으로 수치를 맞추지 않는다")에 해당한다. 4-4의 실질 대상은 이 **15개**다.

## 4-4 추출 후보 15개

| handler | 줄 수 | 위치(L) | 도메인 클러스터 |
| --- | ---: | --- | --- |
| `handleSendLessonComment` | 162 | 7647-7808 | 수업일지 코멘트 |
| `handleCancelAbsenceMakeupKeepSource` | 155 | 8389-8543 | 결석보강 취소 |
| `handlePolishLessonComment` | 100 | 7546-7645 | 수업일지 코멘트(AI 다듬기) |
| `handleSaveRecord` | 75 | 6880-6954 | 수업기록 저장 |
| `handleOpenMonthlyRegularLessons` | 72 | 4840-4911 | 월 정규수업 열기 |
| `handleDeleteExamPrepRow` | 62 | 5832-5893 | 시험관리 행 삭제 |
| `handleCancelAbsenceMakeupSource` | 52 | 8336-8387 | 결석보강 취소 |
| `handleSyncSpecialLectureStudentSchedules` | 51 | 3898-3948 | 특강 학생 일정 |
| `handleSaveMonthlySettlementMonth` | 47 | 3511-3557 | 월별 정산 |
| `handleSaveSpecialLectureSettlementState` | 40 | 3559-3598 | 특강 정산 |
| `handleSaveSpecialLectureEnrollment` | 36 | 3769-3804 | 특강 수강 |
| `handleUpdateSpecialLectureApplication` | 33 | 3600-3632 | 특강 신청 |
| `handleSaveSpecialLectureEnrollments` | 31 | 3806-3836 | 특강 수강(복수) |
| `handleCreateSpecialLectureLessons` | 29 | 3868-3896 | 특강 수업 생성 |
| `handleDeleteSpecialLectureApplication` | 24 | 3634-3657 | 특강 신청 삭제 |

특강(special lecture) 클러스터가 7개로 가장 크고, 결석보강 취소 2개, 수업일지 코멘트 2개가 뒤를 잇는다. 4-4b 이후는 이 표의 클러스터 단위로 진행하는 것을 제안한다 — 특강 7개를 한 안전 단위로 묶기엔 크므로 2~3개씩 나눈다.

## 남은 축소 목표와의 관계

`docs/app-refactor-fourth-pass-plan.md`의 4-4 종료 목표는 "App 직접 request call 73회와 handle* 113개는 4-4 종료 때 각각 45회 이하, 80개 이하"였다. 4-4a 시점 실측(66회, 116개)을 기준으로 다시 보면:

- 직접 request call 66 → 45 이하 목표는 15개 후보를 모두 옮겨도 산술적으로 달성되지 않을 수 있다(15개 함수가 66회 호출 전부를 차지하지 않는다 — 나머지 호출은 이미 thin wrapper가 호출하는 도메인 함수 내부에 있다). 정확한 잔여 후보는 15개 handler 이동 후 재측정한다.
- `handle*` 116 → 80 이하 목표는 15개만 옮겨서는 달성되지 않는다. 이 목표를 그대로 유지할지, 101개 thin wrapper의 실질 가치가 낮다는 이번 발견을 반영해 목표 자체를 재정의할지는 4-4 종료 감사에서 사람 판단이 필요하다.

## 상태·저장·부작용 경계 (변경 없음)

4-4a는 분석만 수행한다. local draft/authoritative source/provider 소유권은 기존과 동일하며, 이 문서와 fixture는 이후 단위가 대조할 시작점만 고정한다.
