# Academy OS 저장·새로고침 유지 전수조사

조사일: 2026-07-20

기준 커밋: `6566eb92`

범위: 운영 교사 OS, 학생/학부모 포털, 특강 공개/관리, 저장·등록·수정·확정·반영·완료·삭제·발송 버튼과 자동저장

## 결론

운영 API의 주요 데이터 원천은 실제 Supabase로 연결되어 있다. 그러나 화면의 모든 입력/버튼이 `서버 저장 완료 후 성공 표시` 구조인 것은 아니다. 브라우저 상태와 localStorage를 먼저 바꾸고 API를 기다리지 않는 경로가 있으며, 이 경우 화면에서는 저장된 것처럼 보이지만 실패 후 새로고침하면 되돌아갈 수 있다.

가장 안전한 기준은 아래 다섯 단계를 모두 만족하는 것이다.

1. 입력은 local draft에만 반영한다.
2. 명시적 저장 버튼을 누른다.
3. API/Supabase 응답을 기다린다.
4. 저장 직후 GET 재조회 값과 수정본을 대조한다.
5. 현재 작업 영역에서 `저장 중/완료/실패`를 표시한다.

현재 이 기준을 모두 만족하는 대표 경로는 `시험분석 저장본`과 `특강 학생별 회차 계획`이다. 나머지는 응답 대기까지만 하거나, 자동저장/낙관적 UI/fire-and-forget 구조다.

## 조사 방법

- 프론트 저장 관련 문자열 864곳과 API/storage 호출 108곳을 검색했다.
- 서버 HTTP route 96개와 Supabase row 변환/upsert 함수를 대조했다.
- `useStoredState`, `sharedAppState`, 개별 API state, local draft, 성공/실패 UI를 추적했다.
- 운영 API는 쓰기 없이 GET만 호출해 source와 현재 row 수를 확인했다.
- 실제 운영 학생/수업 데이터는 수정하지 않았다.

## 판정 기준

| 등급 | 의미 |
|---|---|
| A+ | API 저장 후 새로고침과 같은 재조회까지 수행하고 수정본과 대조한다. |
| A | API 완료를 기다리고 서버 반환값으로 화면을 갱신한다. 재조회 대조는 없다. |
| B | Supabase 저장은 연결됐지만 부분 저장, 자동저장 경쟁, 외부 서비스, 떨어진 상태 표시 등 위험이 남는다. |
| C | 화면/localStorage를 먼저 바꾸고 저장 요청을 기다리지 않거나 실패가 콘솔에만 남는다. 새로고침 되돌림 가능성이 있다. |
| D | 버튼이 실제 저장 함수에 연결되지 않았거나 파일 자체가 아닌 표시용 메타데이터만 저장한다. |

## 운영 Supabase 원천 확인

2026-07-20 읽기 전용 운영 조회 결과다.

| 원천 | source | 건수 |
|---|---:|---:|
| app_state | supabase | 19 keys |
| students | supabase | 49 |
| student_intake_applicants | supabase | 10 |
| special_lecture_applications | supabase | 6 |
| special_lecture_enrollments | supabase | 11 |
| class_templates | supabase | 4 |
| lessons | supabase | 101 |
| lesson_student_records | supabase | 235 |
| homeworks | supabase | 387 |
| academy_reminders | supabase | 4 |
| makeup_tasks | supabase | 45 |
| exam_prep_rows | supabase | 26 |
| school_events | supabase | 0 |
| test_sessions / test_attempts | supabase | 0 / 0 |
| resource_materials | supabase | 0 |
| notification_jobs | supabase | 300 |
| exam_analysis_runs | supabase | 0 |

## 화면별 전수조사

| 화면/동작 | 최종 원천 | 현재 구조 | 등급 | 새로고침/실패 위험 |
|---|---|---|---:|---|
| 시험분석 분석 저장/PDF/문항 검수/산출물 | 전용 Supabase v2 tables + Storage | API 완료 후 목록·상세 GET 재조회, 영역별 상태 표시 | A+ | 현재 가장 안전한 구조 |
| 특강 학생별 회차 계획 | `special_lecture_enrollments` | POST 후 `no-store` GET, 회차/시간/상태/메모 대조 | A+ | 불일치 시 완료 처리하지 않음 |
| 교사 계정 저장 | `teacher_accounts` | 폼 draft, API await, 서버 반환 계정 반영, 성공/실패 문구 | A | 비밀번호 변경 후 별도 로그인 재검증은 필요 |
| 출결 키오스크/수동 출결 | attendance API + `lesson_student_records` | API await, 저장된 record 반환 후 화면 반영 | A | 알림톡 포함 선택 시 외부 발송 결과도 함께 확인 필요 |
| 테스트 응시 기록 | `test_sessions`, `test_attempts` | API await, 반환 row 반영, 저장 상태 표시 | A | 즉시 GET 대조는 없음 |
| 운영 알림 | `academy_reminders` | local draft, API await, 반환 row 반영, 가까운 상태 표시 | A | 즉시 GET 대조는 없음 |
| 학생 프로필 기본정보 | `students` | 수정 모드, API await, 반환 row 반영, 저장 상태/오류 표시 | A | 반 변경에 따른 미래 수업 명단 갱신은 별도 C 위험 |
| 학생 성적/학원 테스트/상담 | app_state 개별 key | 명시적 저장, key 단위 API await, 상태 표시 | A | 다중 탭 version 검사는 없음 |
| 특강 안내문 | `app_state.specialLectureGuides` | 명시적 저장, API await, 상태 표시, 공개 링크는 저장본 사용 | A | 즉시 GET 대조는 없음 |
| 특강 신청 연결/상태 | `special_lecture_applications` | 낙관적 화면 갱신 후 API await, 실패 시 이전값 복구 | A | 즉시 GET 대조는 없음 |
| 특강 공식 수업 개설/미래 명단 반영 | `lessons` | bulk API await, 서버 반환 lesson 반영, 잠금 gate | A | 저장 후 전체 lesson GET 대조는 없음 |
| 수동 학사일정 등록/수정 | `school_events` | 모달 draft, API await, 화면 가까운 상태 표시 | A | 시험정보 연동 일정은 별도 B/C 위험 |
| 보충 내용 저장 | `makeup_tasks` | local draft, API await, 행/모달 상태 표시 | A | 즉시 GET 대조는 없음 |
| 수업일지 일괄 저장 | `lesson_student_records`, `homeworks` | 명시적 일괄 저장, API await, dirty/저장중/완료/실패 표시 | B | 여러 record 중 일부 성공 후 하나 실패하는 부분 저장 가능, GET 대조 없음 |
| 최종 알림톡 문구 저장 | `lesson_student_records` | local draft, 명시적 저장, 상태 표시 | B | record 저장과 예약/발송 상태가 별도여서 함께 검수 필요 |
| 공지/수업 알림톡 예약·발송·취소 | `notification_jobs` + Solapi | 단계별 진행/완료/실패와 reconcile 제공 | B | 외부 Solapi 성공과 OS 기록 성공이 분리되며 확인 필요 상태가 정상적으로 존재 |
| 특강 확정 명단 일괄/수동 접수 | `special_lecture_enrollments` | bulk API await, 패널 메시지 | B | 특강 회차 단건과 달리 read-after-write 대조 없음 |
| 오답 교재/problemBooks | app_state 개별 key | 500ms debounce 자동저장, 상태 표시 | B | 탭/브라우저 종료 직전 입력 유실, version 충돌 가능 |
| 설정/알림톡 템플릿/출결 설정 | shared `app_state` snapshot | 입력마다 전체 묶음 자동저장, 페이지 상단 상태 | B | 요청 순서/다중 탭 충돌 시 오래된 전체 snapshot 덮어쓰기 가능 |
| 수업연구 | shared `app_state` snapshot | 입력 즉시 전체 묶음 자동저장, 상태 표시 | B | 현재 항목과 무관한 app_state key까지 함께 전송 |
| 오답 개별 항목/wrongProblems | shared `app_state` snapshot | 입력 즉시 전체 묶음 자동저장 | B | 화면별 version 없음, 전역 save state만 사용 |
| 보고서 스냅샷/모의발송 기록 | shared `app_state.reportSnapshots` | 버튼 즉시 화면 추가 후 전역 자동저장 | C | 버튼 주변 저장 상태 없음, API 실패 시 화면은 남고 새로고침 후 사라질 수 있음 |
| 시험정보 행 자동저장 | `exam_prep_rows` | 입력마다 즉시 upsert, request ID로 UI 상태만 보호 | C | 오래된 요청이 나중에 DB에 도착하면 최신 입력을 덮을 수 있고 실패 시 화면값 유지 |
| 시험정보 연동 학사일정/직전수업 | `exam_prep_rows`, `lessons` | 여러 행/수업 API를 연쇄 실행 | C | 원천 row와 생성 lesson이 부분 저장될 수 있음 |
| 학사일정 날짜 모달의 인라인 수정 | `school_events`/`exam_prep_rows` | 일부 경로가 fire-and-forget | C | 실패가 콘솔에만 남는 경로 존재 |
| 수업 신규 생성/수정 | `lessons` | 화면을 먼저 갱신하고 모달을 닫은 뒤 POST | C | 실패 시 alert만 뜨고 화면 rollback/readback 없음 |
| 수업 복사·붙여넣기 | `lessons`, `homeworks` | 화면/undo stack 먼저 갱신, lesson/homework 저장은 fire-and-forget | C | lesson만 또는 homework만 저장되는 부분 성공 가능 |
| 수업 취소·되돌리기 | `lessons`, records, homeworks, app_state 삭제묶음 | 여러 원천을 비동기 개별 저장 | C | 일부 복원/취소만 성공할 수 있고 실패가 대부분 콘솔에만 남음 |
| 학생 신규 저장 | `students`, 미래 `lessons` | 학생을 화면에 추가하고 모달을 닫은 뒤 POST | C | 학생 저장 실패/미래 명단 저장 실패가 사용자에게 보이지 않음 |
| Tally 후보 정식 학생 등록 | `students`, `student_intake_applicants`, 미래 `lessons` | 세 원천을 화면에서 먼저 변경하고 개별 fire-and-forget | C | 학생만/후보만/수업명단만 저장되는 부분 성공 가능 |
| Tally 후보 입력 자동저장 | `student_intake_applicants` | 키 입력마다 POST, request ID는 상태 표시만 보호 | C | 서버 도착 순서가 뒤바뀌면 오래된 입력이 최종 row가 될 수 있음 |
| 반 명단 저장 | `students`, 미래 `lessons` | 모달 즉시 닫힘, students bulk와 lessons bulk를 기다리지 않음 | C | 학생 반은 저장되고 미래 수업 명단은 실패하는 등 불일치 가능 |
| 학생 목록 행 저장 후 반 변경 | `students`, 미래 `lessons` | student POST는 await하지만 미래 lesson bulk는 fire-and-forget | C | 행은 `저장됨`인데 실제 미래 수업 명단은 실패할 수 있음 |
| 학생 퇴원 처리 | `students`, 미래 `lessons` | 화면에서 즉시 퇴원/제외 후 개별 fire-and-forget | C | 학생 상태와 미래 수업 명단의 부분 성공 가능 |
| 학생/교사 숙제 완료·검사 체크 | `homeworks` | 화면 상태 먼저 변경, POST 실패는 콘솔만 기록 | C | 실패 후 새로고침하면 체크가 되돌아갈 수 있음 |
| 학생 질문 추가/수정/삭제 | portal scoped app_state | 화면 변경 후 effect가 전체 학생 범위 배열을 저장 | C | 버튼 주변 상태 없음, 저장 전 새로고침/로그아웃 및 요청 실패 시 유실 가능 |
| 시험 후 기록지 제출/교사 확인 | portal scoped/shared app_state | 화면 변경 후 자동 effect 저장 | C | 파일 업로드 성공과 제출 row 저장 성공이 분리됨 |
| 자료함 등록/삭제 | `resource_materials` | 폼을 즉시 비우고 목록을 먼저 바꾼 뒤 API | C | 실패는 콘솔에만 남고 새로고침 후 사라지거나 삭제가 복원될 수 있음 |
| 보충 일정 만들기/변경 | `lessons` → `makeup_tasks` → `notification_jobs` | 순차 await와 상세 피드백은 있으나 트랜잭션 없음 | B | 중간 실패 시 lesson만 저장되거나 알림 예약 일부만 성공할 수 있음 |
| 보충 완료/되돌리기 | `makeup_tasks`, notification cancellation | 완료는 task 저장 후 예약 취소, 되돌리기는 fire-and-forget | C | 예약 취소 실패를 완료 상태가 숨길 수 있고 되돌리기 실패가 콘솔에만 남음 |
| 구형 오답관리 보충 숙제 배정 | `homeworks`, `makeup_tasks` | homework는 화면에만 추가하고 task만 POST | C | `homeworks` API 호출이 없어 새로고침 후 배정 숙제가 사라지는 확정 결함 |
| 수업 알림 계획 모드 변경 | app_state + `notification_jobs` | 계획 저장을 기다리지 않고 예약 작업을 별도 시작 | C | 계획/실제 예약이 서로 다른 상태가 될 수 있음 |
| 반 추가 | 없음 | `+ 반 추가` 버튼에 handler 없음 | D | 눌러도 저장 동작 없음 |
| AI 변형문제 `전체 저장` | 없음 | 버튼에 handler 없음 | D | 저장된 것처럼 보일 수 있으나 아무 동작 없음 |
| 자료 파일 선택 | `resource_materials` 메타데이터 | 실제 파일 업로드 없이 브라우저 파일명만 저장 | D | 파일명은 남아도 파일 자체는 다른 기기/새로고침에서 열 수 없음 |

## 공통 구조 문제

### 1. localStorage가 저장 성공처럼 보이게 한다

많은 운영 state가 `useStoredState`로 localStorage에 즉시 기록된다. API가 실패해도 현재 브라우저에서는 값이 남을 수 있어 저장 성공처럼 보인다. 다른 기기, 캐시 삭제, 서버 GET 우선 재조회에서는 사라질 수 있다.

### 2. 일부 서버 빈 목록을 localStorage가 덮는다

초기 로딩에서 `students`, `lessons`, `lesson-records`, `homeworks`, `classes`는 서버 배열이 비어 있으면 localStorage 값을 유지하는 조건이 있다. 운영 테이블을 정상적으로 0건으로 만든 경우에도 오래된 로컬 값이 화면에 남을 수 있다.

### 3. 일반 GET 응답에 no-store 기준이 없다

서버 JSON 응답에 공통 `Cache-Control: no-store`가 없고, 초기 fetch 대부분도 기본 cache 옵션을 쓴다. 특강 회차 재조회만 명시적으로 `cache: no-store`다.

### 4. version/updatedAt 충돌 방지가 없다

app_state와 다수 upsert는 version 조건 없이 마지막 도착 요청을 저장한다. UI request ID는 오래된 응답 표시를 막을 뿐, 오래된 요청이 Supabase에 나중에 도착하는 것은 막지 못한다.

### 5. 다중 원천 저장에 트랜잭션/보상 절차가 없다

학생+미래 수업, 수업+숙제, 보충 task+lesson+notification, 제출 파일+app_state처럼 여러 원천이 함께 움직이는 경로가 개별 API 호출로 구성되어 부분 성공할 수 있다.

## 수정 우선순위

한 번에 하나씩 아래 순서로 진행한다.

1. `수업 생성/수정/복사/취소 저장 gate`
   - 모달/화면을 닫기 전에 API 완료를 기다리고, 실패 시 draft를 유지한다.
   - lesson과 연관 homework/record 변경의 부분 성공을 표시한다.
2. `학생 신규등록/Tally 정식등록/반 명단/퇴원 저장 gate`
   - student와 미래 lesson 명단을 하나의 검토 가능한 결과로 묶는다.
   - 행 `저장됨`은 두 원천이 모두 확인된 뒤에만 표시한다.
3. `app_state key별 dirty 저장 + version`
   - 전체 snapshot 자동저장을 중단하고 변경 key만 저장한다.
   - 서버 updatedAt/version 조건과 충돌 메시지를 추가한다.
4. `exam_prep_rows/Tally 입력 debounce + 최신 요청 보장`
   - 입력마다 POST하지 않고 draft/행 저장 또는 debounce+version을 적용한다.
5. `숙제 체크/포털/자료함/보고서 명시적 상태`
   - 작업 영역 안에 저장 중/완료/실패를 표시하고 실패 시 화면을 복구한다.
6. `보충/알림 다중 원천 reconcile`
   - lesson/task/job별 성공 결과를 분리 표시하고 재조회/재시도 절차를 제공한다.
7. `오작동 버튼 제거 또는 구현`
   - `반 추가`, 변형문제 `전체 저장`, 자료 파일 실제 업로드를 명확히 처리한다.

## 사람 검토 gate

코드 수정 전에는 운영 데이터 쓰기 테스트를 하지 않는다. 각 개선 단위가 끝날 때 삭제 가능한 테스트 학생/수업을 사용해 다음을 확인한다.

1. 입력 후 저장 전 새로고침하면 draft가 사라지는지 또는 미저장 경고가 뜨는지 확인한다.
2. 저장 버튼을 눌러 현재 영역에서 저장 중/완료가 보이는지 확인한다.
3. 같은 페이지 새로고침, 재로그인, 다른 브라우저에서 값이 같은지 확인한다.
4. Supabase 원천 row와 화면 값이 같은지 확인한다.
5. API 실패를 강제로 만들었을 때 완료로 표시되지 않고 draft가 유지되는지 확인한다.
6. 연관 원천(학생-수업명단, task-lesson-job)이 일부만 바뀌지 않는지 확인한다.
7. 알림톡/삭제/운영 데이터 변경이 포함되면 별도 사람 승인 없이는 실행하지 않는다.
