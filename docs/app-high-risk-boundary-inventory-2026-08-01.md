# App 고위험 경계 inventory — 2026-08-01

범위는 `src/app/App.jsx`의 orchestration이다. 이 문서는 줄 수가 아니라 상태 owner, 서버 원천, lifecycle과 side effect를 고정한다. 모든 검사는 가상 fixture와 정적 계약만 사용하며 운영 로그인·출결·알림 발송/예약/취소를 실행하지 않는다.

## Hydration / persistence

| 항목 | 현재 계약 |
| --- | --- |
| 현재 상태 owner | `App`: 도메인별 `useStoredState`, `isAppStateReady`, `isPortalDataReady`, 저장 상태와 request/timer ref. 공통 12개 key는 `sharedAppState`/`persistedSharedAppStateRef`가 변경 여부를 소유한다. |
| 초기화 시점과 종료/cleanup | session/전용 route/`attendanceReloadKey` 변화 때 core load effect 실행. `isMounted=false`로 늦은 응답의 state 반영을 막는다. app_state debounce 및 문제집/record timer는 effect cleanup에서 해제한다. |
| 읽는 원천 | 교사: `/api/students`, classes, lessons, records, homeworks, makeup-tasks, reminders, exam rows, school events, tests, `/api/app-state`, materials. 학생/학부모: bearer `/api/portal-data`. 출결 route: 당일 students/lessons/records. |
| local draft | `useStoredState`가 localStorage seed/cache를 제공하고 App state가 화면 draft를 소유한다. 이 값만으로 서버 저장 성공을 판정하지 않는다. |
| 저장 API와 Supabase 원천 | 개별 도메인 API 및 `/api/app-state`; 서버의 Supabase tables/app_state가 지속 원천이다. 일부 수업일지 저장은 API 응답과 재조회 필드 일치까지 검사한다. app_state는 현재 응답 후 대상 key 재조회/CAS가 없다. |
| timer, polling, event listener | app_state 500ms debounce, 도메인별 autosave timer map. hydration 자체에는 interval/listener 없음. |
| 외부 side effect | fetch/post로 서버 저장. hydration 중 lesson/calendar 및 exam row 정규화 차이가 있으면 API write가 발생할 수 있다. |
| 실패와 재시도 방식 | core load 실패는 info log 후 기존 local state 유지; 출결 route는 ready를 false로 유지. 저장별 failed state와 사용자의 재시도 버튼/다음 변경 debounce가 혼재한다. |
| 중복 실행 위험 | effect dependency 변화로 core load 재실행 가능. `isMounted`는 stale commit만 막고 요청 취소는 하지 않는다. app_state 동일 key 요청 역전/CAS 부재는 별도 P1 위험이다. |
| 현재 자동검사 | app_state concurrency inventory, lesson save verification, 다수 API/controller fixture, production scenario. |
| 분리 전 추가해야 할 자동검사 | hydration 역할별 1회 초기화, unmount/session 전환 stale 응답 차단, teacher→logout→portal ready reset, timer cleanup, 빈/부분 API 응답에서 서버 원천을 local seed로 오인하지 않는 계약. |

## Auth / session

| 항목 | phase 1 계약 |
| --- | --- |
| 현재 상태 owner | `useAppSession`이 `session` state와 login/logout mutation을 단독 소유한다. `App`은 accepted/logout 후 화면 ready와 active view만 조정한다. 변경 전에는 이 모두가 `App` 소유였다. |
| 초기화 시점과 종료/cleanup | hook mount의 lazy `useState` initializer에서 teacher session을 정확히 한 번 읽는다. timer/listener가 없어 별도 cleanup은 없다. logout은 세 저장 채널을 지우고 session을 null로 전환한다. |
| 읽는 원천 | teacher만 localStorage → sessionStorage → cookie 우선순위로 복구. 실제 인증은 `/api/auth/login`. 학생/학부모는 저장 복구하지 않는다. |
| local draft | 로그인 폼 입력은 `RoleLoginScreen` local state. 인증 완료 전 session state에 반영하지 않는다. |
| 저장 API와 Supabase 원천 | 인증 성공의 원천은 `/api/auth/login` 응답/서버 account. teacher session token snapshot만 브라우저 저장소에 유지하며 데이터 저장 성공 원천으로 취급하지 않는다. |
| timer, polling, event listener | 없음. |
| 외부 side effect | auth POST, teacher 성공 시 localStorage/sessionStorage/cookie write, logout 시 세 채널 삭제. |
| 실패와 재시도 방식 | 역할별 동일 오류 문구를 반환하고 session을 바꾸지 않는다. 사용자가 폼에서 다시 제출한다. |
| 중복 실행 위험 | 로그인 버튼의 동시 submit 방지는 화면의 submitting state에 의존한다. hook 자체 request dedupe는 없다. |
| 현재 자동검사 | `test:app-session-boundary`, session surface selector inventory, teacher token/server security contract, safe browser fixture login. |
| 분리 전 추가해야 할 자동검사 | 이번 단계에서 lazy 1회 owner, 저장 source 우선순위, 저장 필드 제한, teacher/student/parent 성공, 실패 무변경, logout 3채널 cleanup을 추가했다. 후속 provider 전환 전에는 동시 로그인 요청과 만료 token 전환을 추가한다. |

## Attendance polling

| 항목 | 현재 계약 |
| --- | --- |
| 현재 상태 owner | records/saveStates는 `App`; polling lifecycle은 `useAttendanceRecordSync`; 병합/상태 전이는 `attendanceSyncController`. 출결 전용 route의 날짜 reload key는 아직 `App`. |
| 초기화 시점과 종료/cleanup | ready이며 출결 route 또는 teacher lessons view일 때 즉시 1회 sync. effect 종료 시 disposed flag, interval, focus/visibility listener를 모두 정리한다. 날짜 변경 감시는 출결 route에서 별도 30초 lifecycle로 cleanup한다. |
| 읽는 원천 | `/api/lesson-records?date=...`; 출결 route hydration은 students/당일 lessons/records. |
| local draft | 수업기록 `recordsRef`; `saving`/`dirty` record는 원격 polling 결과로 덮지 않는다. |
| 저장 API와 Supabase 원천 | 수기/키오스크 출결 API와 lesson_records Supabase row가 원천. polling은 read-only. |
| timer, polling, event listener | sync 7초 + focus + visibilitychange. 날짜 rollover 30초 + focus + visibilitychange. |
| 외부 side effect | polling GET과 state merge. kiosk/manual action만 별도 POST/알림 흐름을 호출한다. |
| 실패와 재시도 방식 | failed status 후 다음 interval/focus에서 재시도. hidden document에서는 실행하지 않는다. |
| 중복 실행 위험 | `startAttendanceSyncLifecycle`의 `inFlight`가 겹친 interval/focus/visibility trigger를 차단한다. 날짜 rollover는 동기 reload-key 변경이며 ready false로 반복을 막는다. |
| 현재 자동검사 | attendance sync controller/hook fixture가 즉시 1회, hidden skip, in-flight dedupe, cleanup 뒤 무실행을 검사한다. kiosk/manual/closeout fixtures도 있다. |
| 분리 전 추가해야 할 자동검사 | teacher 로그인/로그아웃으로 enabled가 바뀔 때 이전 lifecycle cleanup 후 단 하나만 재생성되는 통합 fixture; 날짜 rollover 중 hydration 실패 후 재시도 계약. |

## notification_jobs / Solapi reconcile

| 항목 | 현재 계약 |
| --- | --- |
| 현재 상태 owner | `App`의 `notificationJobs`, status, refresh/reconcile handlers; 순수 query/payload/merge/status는 notifications 도메인 모듈. |
| 초기화 시점과 종료/cleanup | teacher+ready에서 active load, notifications view에서 history load, lesson journal open에서 lesson load. visible view polling effect는 종료 시 60초 interval과 focus listener를 정리한다. |
| 읽는 원천 | `/api/notification-jobs`가 OS/Supabase `notification_jobs` 원천. reconcile 응답은 Solapi provider 결과와 서버가 대조한 jobs/records. |
| local draft | notification plan과 화면 filter/date. job list는 서버 응답 cache이며 저장 원천이 아니다. |
| 저장 API와 Supabase 원천 | 예약/취소/job 기록 API, `/api/notification-jobs/reconcile-solapi`; Supabase notification_jobs 및 관련 lesson records가 원천. |
| timer, polling, event listener | visible journal/notifications에서 60초 interval + window focus. hidden이면 skip. |
| 외부 side effect | refresh는 GET. reconcile은 Solapi 조회와 OS row 갱신을 일으키는 명시적 버튼 POST. 예약/취소/발송과 분리되어 있다. |
| 실패와 재시도 방식 | non-silent refresh는 failed status, silent polling은 info log; 다음 poll/focus 또는 수동 refresh. reconcile timeout은 90초 안내 후 사용자가 다시 시도한다. |
| 중복 실행 위험 | refresh에는 현재 in-flight guard가 없어 interval/focus/초기 effect가 겹칠 수 있다. reconcile 버튼 중복 방지는 하위 화면 loading state에 의존한다. 이 위험을 숨기지 않고 후속 분리 전 필수 항목으로 둔다. |
| 현재 자동검사 | notification query/load/status/state merge, reconcile payload/record merge, API contract, Solapi auto reconcile fixtures. |
| 분리 전 추가해야 할 자동검사 | scope별 단일 in-flight 또는 최신 request ownership, cleanup 뒤 state 무변경, lesson/history 전환 stale 응답 차단, reconcile double-click 차단과 실패 후 안전한 재시도. |

## 17개 teacher 화면 callback 조립

17개 sidebar 화면은 lessons, specialLectureManagement, overdue, followups, supplements, materials, resources, students, classes, examPrep, examAnalysisPipeline, schoolCalendar, lessonResearch, aiVariants, settlements, notifications, settings다.

| 항목 | 현재 계약 |
| --- | --- |
| 현재 상태 owner | `App`이 active view와 모든 공유 도메인 state/handler를 소유하고 각 화면 JSX에서 props/callback을 직접 조립한다. 각 화면은 폼·modal draft만 로컬 소유한다. |
| 초기화 시점과 종료/cleanup | teacher surface render 후 activeView 조건으로 한 화면 mount. 화면 local effect는 component unmount에서 정리되지만 App handler closure는 App lifetime 동안 유지된다. |
| 읽는 원천 | App hydration 결과와 도메인별 API handler; 17개 화면은 전달된 props를 읽는다. |
| local draft | 각 manager/center의 form, filter, modal draft. App setter를 직접 받은 화면도 있어 persisted human value와 draft 경계가 화면별로 다르다. |
| 저장 API와 Supabase 원천 | handler별 API가 Supabase 원천에 저장. inline callback 중 일부는 optimistic set 후 API를 호출하므로 화면별 검증 계약이 일관되지 않다. |
| timer, polling, event listener | 화면 조립 자체는 없음. notifications/lesson view 선택이 App polling lifecycle을 활성화한다. |
| 외부 side effect | save/delete/reserve/cancel/reconcile/file open을 App handlers가 실행. 버튼 문구와 side effect 범위는 각 도메인 계약에 의존한다. |
| 실패와 재시도 방식 | save state prop, throw/return boolean, modal error 등 화면별 방식. |
| 중복 실행 위험 | inline callback 재생성보다 mutation ref/request id가 없는 저장·삭제 handler의 중복 클릭이 핵심 위험이다. |
| 현재 자동검사 | app view change/session surface/sidebar inventory, 각 도메인 controller/API/boundary fixture, safe browser 핵심 경로. |
| 분리 전 추가해야 할 자동검사 | 17개 id와 component/callback contract snapshot, mutation callback별 server verification 여부, 화면 전환 뒤 stale callback 차단, 발송/예약/취소 callback이 저장 callback과 섞이지 않는 정적 계약. |

## Phase 1 결정

- auth/session만 hook으로 분리했다. session state, 초기 저장소 판독, auth 결과 shape, teacher 저장과 logout cleanup의 owner가 한 파일로 모였다.
- hydration/persistence, notification polling/reconcile, teacher callback 조립은 위의 추가 검사가 먼저다. 특히 notification refresh의 in-flight/stale response 위험과 app_state CAS 부재를 normalize/fallback으로 덮지 않는다.
- attendance polling은 기존 hook의 lifecycle fixture가 이미 cleanup과 중복 trigger 차단을 검증하므로 이번 단계에서 동작을 바꾸지 않는다.
