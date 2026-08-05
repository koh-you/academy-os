# App/API 4차 리팩터링 계획

업데이트: 2026-08-04
4-0 기준 commit: `4d351314293fc6b0a030f37c2a4b0c5fdd60be2e` (`origin/main`)

## 목표

3차 리팩터링은 큰 화면을 도메인 component로 옮기고 lazy loading을 적용해 초기 main JS를 크게 줄였다. 그러나 운영 기능을 수정할 때는 아직 `App.jsx -> api/server.js -> api/routes/coreData.js -> Supabase row -> provider`를 함께 추적해야 하는 경우가 많다. 4차 리팩터링은 기능을 다시 구현하지 않고 다음 변경 반경을 줄이는 단계다.

1. API 요청·응답 shape를 endpoint 옆의 pure contract로 고정한다.
2. DB row와 제품 domain model 사이의 변환 owner를 공개된 pure mapper로 분리한다.
3. 120개 HTTP dispatch를 auth·portal·core data·exam·notification/provider route registry로 나눈다.
4. App에 남은 authoritative persistence orchestration을 도메인 action으로 옮긴다.
5. 저장과 Solapi·Slack·AI·Storage 같은 외부 side effect를 구조적으로 분리한다.
6. 2만 줄 CSS와 단일 대형 browser spec의 변경 반경을 도메인 단위로 줄인다.

줄 수 감소는 결과 지표일 뿐이다. 각 단위는 `local draft -> API contract -> authoritative source -> readback -> UI source replacement`와 provider 실패 복구 의미를 보존해야 완료다.

## 4-0 기준선

### 코드 규모와 집중도

| 경계 | 현재 값 | 해석 |
| --- | ---: | --- |
| `src/app/App.jsx` | 10,903줄 · 474,401 bytes | `handle*` 함수 113개, 직접 `fetch` 36회, `postJson*` 37회 |
| `api/server.js` | 7,806줄 · 323,037 bytes | named function 264개, 직접 method/path dispatch 120개 |
| `api/routes/coreData.js` | 5,798줄 · 240,388 bytes | named function 224개, export function 78개 |
| DB row mapper | 44개 | 대부분 `coreData.js`와 `examAnalysisPipeline.js` 내부 private 함수 |
| `src/app/App.css` | 21,727줄 · 403,741 bytes | rule opening 약 3,173개, media query 17개 |
| safe browser | 2개 spec · 47개 test | 주 spec 한 파일이 1,817줄 · 98,282 bytes |
| API runtime inventory | JS 12개 | Vercel Hobby serverless 후보 상한 12개를 이미 사용 |
| 테스트 파일 | `scripts/test-*.mjs` 346개 | 전체 production은 많은 child process를 직렬 실행 |

HTTP dispatch 120개는 GET 31, POST 76, DELETE 13이다. 큰 묶음은 시험분석 core 17, 알림 job/provider 19, lesson·record·homework·attendance·makeup 26, 학생·특강 16이다. route 파일을 추가할 때는 Vercel 함수 후보 수를 늘리지 않도록 `api/routes` 아래의 내부 module로만 분리한다.

### 검증 시간과 번들

동일 commit, Node 24, 현재 Worktree에서 순차 측정했다.

| 검사 | 결과 | 시간 |
| --- | --- | ---: |
| runtime lint | 통과 | 4.45초 |
| domain all | 62/62 | 1.63초 |
| scenario summary | 827/827 | 3.25초 |
| production build | 414 modules · lazy 12/12 | 4.28초 |
| full production | 827/827 | 80.88초 |
| isolated safe browser | 47/47 | 114.80초 |

빌드 기준은 main JS 942.25 kB, gzip 234.31 kB, main CSS 325.87 kB, gzip 51.96 kB다. 빠른 개발 피드백은 이미 1~5초지만 전체 신뢰 확인은 약 196초다. 4차에서는 전체 검사를 없애지 않고, 변경 중 endpoint/row/provider contract를 10초 이내 집중 검사로 먼저 실패하게 만드는 것이 속도 목표다.

## 현재 소유권 지도

| 영역 | local draft·파생값 | client action·payload | HTTP·인증 | DB row·원천 | provider·오류 복구 |
| --- | --- | --- | --- | --- | --- |
| auth/session | `useAppSession` | App 주입 request | `api/server.js` teacher/student bearer | `teacher_accounts`, session token | provider 없음; logout cleanup은 hook |
| lesson/attendance | lesson domain controller | 일부 domain API/action, 일부 App handler | server 직접 dispatch | `coreData.js` lesson/record/homework mapper와 CAS plan | 출결 알림은 server notification orchestration |
| supplement | Supplement controller | schedule persistence/action | server의 source save route | lesson + makeup task versioned plan | 원천 검증 뒤 App/server가 notification provider 호출 |
| student/class | Student 화면/controller | student/class roster API와 App handler 혼재 | server 직접 dispatch | student/lesson roster mapper와 CAS plan | provider 없음; rollback/readback은 persistence module |
| notification | notice controller와 persisted final | notification API/action + App effect | server job/provider route 혼재 | notification_jobs mapper·claim/reconcile | `api/routes/notifications.js`, server scheduler, App callback |
| app state/report | hook local recovery | App autosave/report action | server 직접 dispatch·teacher auth | app_state CAS/readback | report mock은 provider 없음 |
| resource | 화면 draft | resource action/API | server auth·Storage route | resource row + private Storage | Storage upload/delete rollback |
| exam analysis | 화면 draft는 lazy screen | App runtime request 13개 | server dispatch·AI orchestration | exam pipeline row mapper | OpenAI/Anthropic/Storage는 명시 행동 Gate |
| settlement | controller local recovery·selector | App `onSaveMonth` | app-state route | monthly settlement app_state | provider 없음 |

의도적인 현재 예외는 Notification Center의 직접 timeout transport, Settings의 주입 `postJson`, 시험분석 App runtime request다. 4차에서 이 예외를 이동할 때도 화면이 provider나 DB owner가 되지 않는다.

## 회귀 inventory

| 경계 | 반드시 보존할 계약 | 작업 중 빠른 검사 | 종료 Gate |
| --- | --- | --- | --- |
| API payload | 누락/잘못된 shape는 쓰기 전 4xx, legacy alias는 명시적으로만 허용 | 새 `test:contract:*` 묶음, 관련 domain | full production, exact-head CI |
| DB mapper | round-trip, null/legacy 필드, `updated_at` CAS token, 미지 필드 보존 정책 | mapper pure fixture | source API fixture + browser readback |
| source save | insert-only/CAS, idempotent retry, 역순 보상, 최신 변경 보호 | 관련 persistence fixture | full production + 집중 browser/API |
| App action | 저장 중 후속 draft 보존, stale response 격리, verified source만 UI 교체 | domain action/controller fixture | 관련 safe browser |
| provider | source save와 send/reserve/cancel 결과 분리, provider-only retry | notification/provider fixture | dry-run safe API; 실제 발송 금지 |
| auth | teacher/student/parent 범위, bearer 재확인, 무권한 401/403 | auth/portal contract fixture | safe login/portal smoke |
| CSS | modal/table/sticky save 상태, tablet/mobile breakpoint | CSS inventory + build | 관련 screenshot/DOM smoke |
| E2E | 핵심 저장·충돌·reload 동선, 테스트 간 state 격리 | domain별 grep | full safe browser |

## 정량 종료 목표

- endpoint별 payload/response contract가 요청 call site와 server route에서 같은 pure module을 사용한다.
- 핵심 Supabase 표의 row mapper가 domain별 module로 이동하고 round-trip/legacy/CAS fixture를 가진다.
- `api/server.js`의 120개 직접 method/path chain은 route registry가 소유하고 server는 공통 CORS/body/error/dispatch 조립만 담당한다.
- App 직접 request call 73회와 `handle*` 113개는 4-4 종료 때 각각 45회 이하, 80개 이하를 목표로 한다. 의미 없는 wrapper 이동으로 수치를 맞추지 않는다.
- provider module은 DB row mapper나 React state를 import하지 않고, source persistence module은 Solapi·Slack·AI SDK를 import하지 않는다.
- `App.css`는 15,000줄 이하, initial main CSS는 250 kB 이하를 목표로 하되 시각 회귀가 있으면 수치보다 동작 보존을 우선한다.
- safe browser는 domain spec으로 나누고, 전체 47개 이상의 사용자 동작을 유지한다. 고위험 domain의 집중 실행은 30초 이내를 목표로 한다.
- endpoint/row/provider별 작업 중 contract 묶음은 10초 이내를 목표로 하며 full production·full browser는 PR/main Gate로 유지한다.

## 단계와 안전 단위

### 4-1 API payload 계약

1. 공통 contract helper와 route inventory를 만든다.
2. lesson journal·supplement·attendance versioned write payload를 고정한다.
3. student·class roster·app-state·report·resource payload를 고정한다.
4. notification/provider와 exam analysis payload를 고정한다. 유료 AI나 실제 알림은 호출하지 않는다.

### 4-2 DB row와 domain model 경계

1. student/class/lesson mapper를 pure module로 분리한다.
2. lesson record/homework/makeup mapper를 분리한다.
3. app_state/resource/notification mapper를 분리한다.
4. exam pipeline mapper를 분리하고 legacy migration contract를 고정한다.

### 4-3 API server route 분리

1. 공통 request context·body·response·auth guard를 고정한다.
2. auth/portal/core read route registry를 분리한다.
3. student/lesson/supplement versioned write route registry를 분리한다.
4. exam analysis route registry를 분리한다.
5. notification job/provider registry와 scheduler 조립을 분리한다.

### 4-4 App persistence action 추출

1. App module-level request binding을 domain API로 옮긴다.
2. student/lesson/supplement/app-state orchestration을 domain action으로 옮긴다.
3. stale response, draft revision, readback, rollback contract를 각 action 옆에 둔다.

### 4-5 provider 외부 side-effect 경계

1. notification source persistence와 Solapi/Slack execution을 분리한다.
2. Storage/AI execution을 명시적 effect surface로 고정한다.
3. source saved/provider failed, retry scope, audit result를 공통 결과 shape로 고정한다.

### 4-6 CSS domain entry 분리

1. shared token/layout/modal/table/state CSS를 먼저 분리한다.
2. lesson/student/supplement/notification domain entry를 lazy screen과 연결한다.
3. responsive·print·portal/attendance entry를 분리하고 main CSS budget을 고정한다.

### 4-7 safe E2E 확대

1. 단일 spec을 auth/lesson/student/supplement/notification/settlement/resource로 나눈다.
2. endpoint contract 실패, source conflict, provider failure의 사용자 복구 동선을 추가한다.
3. grep 가능한 domain 명령과 전체 격리 runner를 함께 유지한다.

### 4-8 종료 감사

- 상태 owner, local draft, payload, DB row, authoritative source, provider, 오류 복구를 다시 대조한다.
- 4-0 수치와 종료 수치를 비교하고 유지보수 피드백 시간·변경 반경 개선을 보고한다.
- 미완료 후보는 별도 차수로 넘기고 4차 범위를 닫는다.

예상 안전 단위는 20~25개다. 한 PR에 API contract, row mapper, route 이동, App action, CSS를 함께 섞지 않는다.

## 연쇄 진행 규칙

- 매 단위는 최신 `origin/main` 기반 별도 `codex/` branch에서 시작한다.
- 관련 fast/전용 검사, runtime lint, build를 통과한 뒤 고위험이면 local full production과 집중 safe browser를 실행한다.
- exact-head CI와 검토가 성공하고 동시 main owner·충돌이 없을 때만 force 없이 main에 통합한다.
- 정확한 main CI와 영향받은 Vercel/Render 배포·안전 smoke가 닫힌 뒤 다음 단위를 시작한다.
- AI로 검증 가능한 리뷰 지적은 최소 수정 후 재검증하고 다음 단위로 이어간다.
- 운영 데이터 쓰기·삭제, 실제 알림 발송/예약/취소, 운영 SQL, 유료 AI, 새 로그인·관리자 승인이 필요한 순간만 사람 Gate로 남긴다.

## 4-0 종료 상태

- 두 선행 작업 종료와 `origin/main` `4d351314`의 Production checks·Vercel 성공을 대조했다.
- 코드·검증 시간·소유권·회귀 inventory와 4-1~4-8 안전 단위를 확정했다.
- 제품 runtime과 운영 데이터는 변경하지 않았다.
- PR #74 merge `0a9a5ff4`의 main Production checks와 Vercel 배포를 확인해 4-0을 닫았다.

## 4-1 진행 상태

- 4-1a: `apiPayloadContract.js`에 object·array·string·boolean·number field, canonical/legacy alias 충돌, 미지 field, 공통 400 오류를 다루는 pure parser를 추가했다.
- 수업일지 makeup/rows/history, 보충 일정, 반 명단, 학사일정 파생 저장의 6개 route를 `versionedWriteRouteContracts.js`에 등록했다. source table과 공통 verified response를 명시하되 runtime route에는 아직 연결하지 않아 기능 의미를 바꾸지 않았다.
- `npm run test:contract:versioned-write`를 전체 production gate에 포함했다. 4-1b는 lesson journal·supplement·attendance부터 client/server가 같은 parser를 사용하도록 작은 단위로 연결한다.
- 4-1b 첫 단위: `/api/lesson-journal/rows/save`의 client outbound/server inbound와 client verified response 검증을 공통 contract에 연결했다. record/homework draft, Supabase CAS/readback/rollback 및 App 오류 복구 owner는 유지했다.
- 4-1c: `/api/lesson-journal/history-action`의 canonical payload와 verified response를 공통 contract에 연결했다. stable pending copy, undo stack, Supabase CAS/readback/rollback 및 App 오류 복구 owner는 유지했다.
- 4-1d: `/api/lesson-journal/makeup-tasks/save`의 canonical/legacy payload와 verified response를 공통 contract에 연결했다. contract registry는 저장 시점 dynamic chunk로 유지해 initial main 예산을 보존하고 stable ID·CAS/readback·부분 저장 복구 owner는 유지했다.
- 4-1e: `/api/supplement-schedules/save`의 atomic lesson/task payload와 verified response를 공통 contract에 연결했다. 결과 불명 최신 draft 수렴, Supabase CAS/readback/rollback과 provider 분리 owner는 유지했다.
- 4-1f: `/api/attendance/check`의 수동·키오스크 공용 payload와 원천 저장 결과 response를 공통 contract에 연결했다. 연속 방문 기록·attendance event·수동 예약·키오스크 queue는 기존 server orchestration owner에 유지하고, source 결과와 provider 상태는 `record`와 `alimtalk`으로 계속 분리한다.
- 4-1g: `/api/class-rosters/save`의 학생·미래 수업 변경 payload와 verified response를 공통 contract에 연결했다. 학생/수업 CAS·재조회·rollback, cleanup과 App의 conflict draft 보존 owner는 유지했다.
- 4-1h: `/api/school-calendar/derived-save`의 시험정보·연결 직전수업 변경 payload와 verified response를 공통 contract에 연결했다. 두 source의 CAS·재조회·rollback과 수동 보호 owner는 유지했다.
- 4-1i: `/api/app-state`의 canonical `{ states, expectedUpdatedAt? }` payload와 `{ source, states }` response를 공통 contract에 연결했다. 공용 저장과 강사 운영 메모는 같은 client builder를 사용하며 key별 직렬화·CAS·Supabase 재조회·후속 입력 보존 owner는 기존 controller에 유지했다.
- 4-1j: teacher auth가 필요한 `/api/report-snapshots`의 snapshot payload와 recovered/readback response를 공통 contract에 연결했다. stable ID 재시도, `app_state.reportSnapshots` CAS·Supabase 재조회와 UI draft 보존 owner는 기존 action/persistence에 유지했다.
- 4-1k: 파일 없는 `/api/resource-materials` POST의 metadata payload와 verified row response를 공통 contract에 연결했다. stable ID, insert-only/CAS, 결과 불명 최신 draft 수렴·Supabase 목록 재조회와 UI 복구 owner는 기존 API/action에 유지했다.
- 4-1l: teacher auth가 필요한 `/api/resource-material-files` POST/DELETE의 file/material payload와 Storage+row verified response를 공통 contract에 연결했다. stable path, upload rollback, delete backup/restore, CAS·재조회와 UI 보존 owner는 기존 operation/API/action에 유지했다.
- 4-1m: provider 실행이 없는 `POST /api/notification-jobs`의 canonical job payload와 source response를 공통 contract에 연결했다. notification source helper는 App·공지·실패 기록이 공유하고 Solapi reserve/cancel/reconcile owner는 별도 route에 유지했다.
- 4-1n: `POST /api/notification-jobs/reserve`의 canonical job/reason/dry-run payload와 source/provider 결과를 공통 contract에 연결했다. pending/reuse/old-group cancel/teacher-cancel race와 실패 source 기록 owner는 유지하고 safe API dry-run만 실행했다.
- 4-1o: `POST /api/notification-jobs/cancel`의 canonical job ID/reason/provider flag와 source response를 공통 contract에 연결했다. 기존 `id` alias는 명시적으로 보존하고 provider cancellation nullable 결과도 유지하며 safe API source 변경만 실행했다.
- 4-1p: `POST /api/notification-jobs/reconcile-solapi`의 selector payload와 checked/job/record/count response를 공통 contract에 연결했다. single-flight와 App source merge owner는 유지하고 safe provider read만 실행했다.
- 4-1q: `POST /api/notification-jobs/reserve-bulk`의 canonical batch payload와 per-job/count response를 공통 contract에 연결했다. 기존 `jobs` alias, 부분 실패·재사용·App batch merge를 유지하고 safe API dry-run만 실행했다.
- 4-1r: `POST /api/notification-jobs/readiness-check`의 clock/window/Slack flag와 source issue response를 공통 contract에 연결했다. source 누락 판정과 선택적 Slack owner는 유지하고 safe API는 Slack 요청을 거부했다.
- 4-1s: `POST /api/notification-jobs/dispatch-due`의 token/dry-run/limit/clock payload와 processed/source/reconcile response를 공통 contract에 연결했다. 인증 선판정과 server source/provider orchestration은 유지하고 safe API는 0건/no-write와 민감 override 차단만 검증했다.
- 4-1t: `POST /api/exam-analysis-runs`의 run metadata payload와 source/run response를 공통 contract에 연결했다. `{ run }`·root 직접 legacy 입력은 명시적으로 보존하고 safe API는 가상 row 저장·재조회만 수행했다.
- 4-1u: `POST /api/exam-analysis-runs/confirm-question-count`의 교사 확정 문항 수·판독 근거 payload와 run/question rows/event response를 공통 contract에 연결했다. 실제 1~N row RPC와 event owner는 server에 유지하고 safe API는 가상 row·reload만 검증했다.
- 4-1v: `POST /api/exam-analysis-runs/save-question-reviews`의 교사 문항별 검수 payload와 run/question rows/event/teacher review response를 공통 contract에 연결했다. 실제 row patch·재조회와 run audit/event owner는 server에 유지하고 safe API는 가상 teacher/final fields와 reload 지속성만 검증했다.
- 4-1w: `POST /api/exam-analysis-runs/save-prompt-studio`의 run/revision/교사 작업본 payload와 authoritative run/draft/source/verification response를 공통 contract에 연결했다. 실제 revision CAS·audit summary 병합·재조회/event owner는 server에 유지하고 safe API는 정상 저장·stale 409·reload만 검증했다.
- 4-1x: `POST /api/exam-analysis-runs/save-output-drafts`의 run/output input/블로그·인스타 교사 수정본 payload와 authoritative run/event/source response를 공통 contract에 연결했다. 실제 audit summary 병합·입력 정규화·Supabase 재조회/event owner는 server에 유지하고 safe API는 명시 저장·reload만 검증해 AI 생성 route와 분리했다.
- 4-1 종료 감사: 공통 contract 24개와 server 직접 mutation route 89개를 대조했다. 미연결 65개는 4-2/4-3 row·route 경계 42개와 4-5 Storage·Tally·AI·provider·seed 경계 23개로 명시 분류하고 새 route drift를 production fixture로 차단했다. 기준은 `docs/app-refactor-fourth-pass-api-contract-closeout.md`다.

## 4-2 진행 상태

- 4-2a 기준선: core row mapper 36개/18쌍과 exam pipeline mapper 9개, 합계 45개를 exact inventory로 고정했다. 4-0의 44개 집계는 구조 감사로 교정했다.
- null/default, schema fallback option, legacy alias, `updated_at` token, exam source patch undefined와 unknown-field drop 정책을 production fixture가 검사한다. 제품 runtime과 DB/provider owner는 변경하지 않았다.
- 후속은 한 단위씩 4-2b Student/ClassTemplate/Lesson 6개, 4-2c intake/special lecture 6개, 4-2d lesson activity 8개, 4-2e learning/calendar 10개, 4-2f platform source 6개, 4-2g exam pipeline 9개 순으로 진행한다.
- 4-2b: Student/ClassTemplate/Lesson 6개와 특강 학생별 시간 helper를 import 없는 `src/shared/persistence/coreIdentityRowMappers.js`로 옮겼다. helper/mapper 본문 9/9 exact, 공개 `toLessonRow` 재수출, round-trip/null/legacy/version/unknown-field fixture를 유지한다. `api/domain` 배치가 Vercel 함수 수를 13으로 만든 문제는 `src` 경계로 교정해 12-file budget을 보존했다.
- 4-2c: StudentIntakeApplicant/SpecialLectureApplication/SpecialLectureEnrollment 6개와 ID/status/session helper를 import 없는 `src/shared/persistence/intakeSpecialLectureRowMappers.js`로 옮겼다. 본문 15/15 exact, Tally·Supabase·schema fallback owner를 유지하고 null/legacy/version/unknown-field fixture를 production에 연결했다.
- 4-2d: LessonRecord/Homework/MakeupTask/AttendanceEvent 8개와 JSON/status helper를 import 없는 `src/shared/persistence/lessonActivityRowMappers.js`로 옮겼다. 본문 12/12 exact, source write/CAS/readback/출결 orchestration/provider owner를 유지하고 MakeupTask note metadata 보존 예외를 동작 fixture로 고정했다.
- 4-2e: TestSession/TestAttempt/ExamPrep/SchoolEvent/AcademyReminder 10개와 순수 normalize helper를 import 없는 `src/shared/persistence/learningCalendarRowMappers.js`로 옮겼다. 본문 22/22 exact, source write/CAS/readback·파생 일정·Slack owner를 유지하고 event payload metadata 보존 예외를 고정했다.
- 4-2f: AppState/ResourceMaterial/NotificationJob 6개와 자료 visibility helper를 import 없는 `src/shared/persistence/platformSourceRowMappers.js`로 옮겼다. 본문 9/9 exact이며 `coreData` mapper 36/36을 pure module로 분리하고 DB·Storage·provider owner를 유지했다.
- 4-2g/종료: 시험분석 Run/Source/Question/AI job/Event 9개와 local ID helper를 `src/shared/persistence/examAnalysisPipelineRowMappers.js`로 옮겼다. 본문 13/13 exact, 유일 import는 `node:crypto`이며 DB·Storage·유료 AI owner를 유지했다. core 36 + exam 9, 총 45/45 mapper 추출 감사로 4-2를 닫는다.

## 4-3 진행 상태

- 4-3a 기준선: `api/server.js` 7,941줄의 direct exact-path route 120개를 GET 31/POST 76/DELETE 13과 9개 registry family로 분류했다. method/path/order hash, credential/session 15개, dispatch token 2개 guard 의미와 common body/response·core/exam/provider owner를 production fixture에 고정했다.
- 4-3b: header lookup, allowed origins, JSON body parser, CORS selector와 JSON response를 frozen HTTP adapter로 옮겼다. route 120개/order hash와 auth/session·DB/provider owner는 유지하며 body/limit/error/preflight를 동작 fixture로 고정했다.
- 4-3c: HMAC token 생성·expiry·timing-safe 검증과 request bearer→portal/teacher/mixed session guard를 frozen adapter로 옮겼다. 13개 session route guard와 credential DB owner는 유지했다.
- 4-3d: OPTIONS와 health/client-errors/core-status 3개 route를 첫 frozen registry로 이동했다. registry 3개 + server 직접 117개의 전역 method/path/order hash와 client-error 64 KiB·429/202/400 계약을 고정했다.
- 4-3e: login route의 teacher/student/parent role→credential action→HMAC session token/account 응답 조립을 단일-route registry로 이동했다. credential DB 함수와 token codec owner는 주입 상태로 유지했다.
- 4-3f: teacher-account route의 Supabase configuration gate, current credential, input validation, password 선택과 저장 응답을 단일-route registry로 이동했다. hash/DB action은 server owner를 유지한다.
- 4-3g: portal-data read route의 session guard→scoped source read→role 응답과 401/404/500을 단일-route registry로 이동했다. 실제 filtering은 server action owner를 유지한다.
- 4-3h: portal-state/homework/question/exam submission POST 4개의 session guard→body→source action→응답 조립을 frozen registry로 이동했다. Supabase 저장·재조회, mutation lock, local draft owner는 이동하지 않았다.
- 4-3i: teacher-account보다 앞선 교사 시험 후 제출 확인 POST의 teacher guard→body→source action→응답 조립을 frozen registry로 이동했다. AppState source 저장·재조회 action은 server owner를 유지한다.
- 4-3j: app-state와 special-lecture-guides GET 두 개의 source read→summary/fallback 응답을 frozen registry로 이동했다. `listAppState`와 Supabase owner는 server에 유지한다.
- 4-3k: app-state POST의 versioned parser→protected portal key filter→CAS source write 응답을 frozen registry로 이동했다. `upsertAppState`의 Supabase CAS/readback owner는 server에 유지한다.
- 4-3l: report snapshot POST의 teacher guard→versioned parser→verified persistence service→응답 조립을 frozen registry로 이동했다. AppState read/CAS/readback과 retry owner는 기존 domain/server에 유지한다.
- 4-3m: test session/attempt GET 두 개의 query alias/filter→source read→응답 조립을 frozen registry로 이동했다. Supabase read owner는 core data에 유지한다.
- 4-3n: test session POST/DELETE의 canonical·legacy payload/selector→core data action→응답 조립을 frozen registry로 이동했다. DB write/readback/delete owner는 core data에 유지한다.
- 4-3o: integrations status GET의 method/path와 AI·알림 status response 조립을 frozen registry로 분리했다. 실제 status 계산과 provider 설정 owner는 기존 integration module에 유지한다.
- 다음 4-3p는 4-3o main·배포가 닫힌 뒤 시험분석 read route 경계를 분리한다.
