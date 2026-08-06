# Daily Development Handoff

업데이트: 2026-08-06

## 2026-08-06 App/API 4차 리팩터링 4-3p exam analysis read registry

- 시험분석 run 목록/상세와 쎈 catalog GET의 query·source 선택·응답 조립을 `examAnalysisReadRouteRegistry`로 이동했다. Supabase read와 쎈 분류 owner는 유지한다.
- 운영 쓰기·Storage·AI/provider 없이 domain `70/70`, production `827/827`, build, 실제 local API catalog GET을 통과했다. registry 22 + 직접 route 98 = 전역 120이다.
- 다음 4-3q는 유료 AI·Storage와 분리된 시험분석 run metadata POST route다.

## 2026-08-06 수업일정표 출력 간소화

- 미리보기·복사·PDF에서 `출결 미입력`을 제외하고 상단 예정 수업·출결 확인·변동사항 요약표를 제거했다.
- 입력된 출결과 수업·변동 데이터는 유지하며 집중 safe browser `1/1`까지 통과했다.

## 2026-08-05 App/API 4차 리팩터링 4-3o integrations status registry

- `GET /api/integrations/status`의 route match와 AI·알림 status response 조립을 frozen registry로 이동했다. status 계산과 provider 설정 owner는 기존 integration module에 유지한다.
- 운영 원천·Storage·AI·알림 provider를 실행하지 않고 pure fixture와 전체 검증을 통과했다: domain `70/70`, production `827/827`, build `421 modules`·main `928.62 kB`·lazy `12/12`.
- 4-3o는 통합 commit `3079e685`로 main에 반영됐고 최신 main `95d0b1f1`의 CI·Vercel·읽기 전용 smoke가 성공했다.

## 2026-08-05 체크박스 표시 보정

- 오늘 추가된 수업일정표 PDF 옵션과 신입생 보강 알림 체크박스를 화면 범위 CSS로 `16×16px`에 고정했다.
- 저장·API·알림 경계는 바꾸지 않았고, 격리 safe browser에서 두 화면의 계산된 크기를 검증했다.

## 2026-08-05 신입생 보강 등록·알림

- 운영 8월 수업일지의 기존 신입생 보강 3건은 `makeup`, 수업명 `신입생 보강`, 학생 1명, `sourceMakeupTaskId` 없음이었다.
- 전용 탭은 학생을 빈 명단에서 직접 선택하고 기존 데이터와 같은 저장 모양을 만든다. 알림 선택 시 저장·재조회 성공 뒤 학부모/학생 일정을 다음 정각에 예약한다.
- 운영 쓰기·알림 예약/발송은 0건이다. 전체 production `827/827`, build main `928.62 kB`, safe browser 저장·가상 알림 `1/1`을 통과했다.
- branch exact-head CI 통과와 main/Vercel exact commit·읽기 전용 smoke 확인 후 완료한다.

## 2026-08-05 App/API 4차 리팩터링 4-3n test session write registry

- `/api/test-sessions` POST/DELETE의 payload alias/delete selector와 source response를 `testSessionWriteRouteRegistry`로 이동했다.
- DB write/readback/delete는 core data owner다. pure fixture만 실행했고 운영 DB·Storage·provider는 사용하지 않았다.
- 전체 검증은 domain 69/69, scenario·production 827/827, build 418 modules·main 944.65 kB·lazy 12/12를 통과했다. registry 19 + 직접 route 101 = 전역 120이다.
- 4-3n은 main `f270f2cc`에 반영됐다.
- 다음은 4-3p 이후 시험분석 run metadata POST route를 별도 registry로 분리한다.

## 2026-08-05 App/API 4차 리팩터링 4-3m test session read registry

- `/api/test-sessions`와 `/api/test-attempts` GET의 query filter/source response를 `testSessionReadRouteRegistry`로 이동했다.
- Supabase read owner는 core data에 유지했다. pure fixture만 실행했고 운영 원천·Storage·provider는 사용하지 않았다.
- 전체 검증은 domain 69/69, scenario·production 827/827, build 418 modules·main 944.65 kB·lazy 12/12를 통과했다. registry 17 + 직접 route 103 = 전역 120이다.
- 다음은 최신 main에서 test session POST/DELETE route를 별도 registry로 분리한다.

## 2026-08-05 App/API 4차 리팩터링 4-3l report snapshot registry

- `/api/report-snapshots` POST의 teacher guard, versioned parser, verified persistence service와 error shape를 `reportSnapshotRouteRegistry`로 이동했다.
- AppState read/CAS/readback·retry는 기존 domain/server owner다. 인증 없는 local 401만 실행했고 운영 원천·Storage·provider는 사용하지 않았다.
- 전체 검증은 domain 69/69, scenario·production 827/827, build 418 modules·main 944.65 kB·lazy 12/12를 통과했다. registry 15 + 직접 route 105 = 전역 120이다.
- 다음은 최신 main에서 test session/attempt GET route를 별도 registry로 분리한다.

## 2026-08-05 App/API 4차 리팩터링 4-3k app-state write registry

- `/api/app-state` POST의 공통 parser, portal key filter, CAS option과 error shape를 `appStateWriteRouteRegistry`로 이동했다.
- DB CAS/readback은 server action owner다. invalid payload 400 local smoke만 실행했고 운영 원천·Storage·provider는 사용하지 않았다.
- 전체 검증은 domain 69/69, scenario·production 827/827, build 418 modules·main 944.65 kB·lazy 12/12를 통과했다. route 총수 120과 등록 순서는 유지됐다.
- 다음은 최신 main에서 teacher-authenticated report snapshot POST를 별도 registry로 분리한다.

## 2026-08-05 App/API 4차 리팩터링 4-3j app/core read registry

- `/api/app-state`와 `/api/special-lecture-guides` GET을 `appCoreReadRouteRegistry`로 이동했다. includeRows query와 guide fallback 응답을 보존한다.
- Supabase read owner는 server에 유지했고 local read-only 200 smoke만 수행했다. 운영 쓰기·Storage·provider는 사용하지 않았다.
- route/API closeout, domain `69/69`, lint, scenario·production `827/827`, build `418`·main `944.65 kB`·lazy `12/12` 통과. registry 13 + server 직접 107 = 전역 120 route다.
- 첫 exact-head CI의 autosave inventory 위치 결합은 registry GET/server POST를 각각 확인하도록 최소 교정했고 관련 inventory·production을 재통과했다.
- 다음은 최신 main에서 app-state POST의 versioned parser/safe key filter/source write 응답을 한 단위로 분리한다.
## 2026-08-05 출결 키오스크 5초 자동 확인

- 수업이 확정된 미리보기는 5초 뒤 기존 확인 경로로 자동 저장하고, 복수 수업 선택 화면은 학생이 수업을 고를 때까지 유지한다.
- 수동 확인과 타이머의 동시 실행은 잠금으로 한 번만 처리한다. API·Supabase·알림 생성 계약은 변경하지 않았고 운영 출결이나 실제 알림은 실행하지 않았다.
- 전용/lesson `21/21`, runtime lint, build `418`·main `945.00 kB`, production `827/827`, 집중 safe browser `1/1` 통과.
- 첫 main Vercel 실패는 rate limit이 아니라 배포 Node에서 번들 예산을 48 bytes 넘은 것이었다. 안내를 확인 버튼과 단일 timeout으로 합쳐 번들 크기를 낮춘 뒤 재배포한다.
## 2026-08-05 수업일정표 달력·표·PDF 선택

- 수업일정표 화면은 달력 → 하단 수업·출결 표 → 변동사항으로 표시한다. 상단 대상별 간단본/상세본 문구를 없애고 `상세 정보 표시`만 남겼다.
- PDF 포함 항목은 달력·표·변동사항 세 체크박스로 독립 선택한다. 비저장 메모·복사·인쇄만 사용하며 운영 데이터와 알림 side effect는 없다.
- monthly report·student `15/15`·modal inventory·lint·scenario `827/827`·build와 focused safe browser `1/1` 통과. 다음 확인은 exact branch CI와 frontend 배포 smoke다.

## 2026-08-05 App/API 4차 리팩터링 4-3i exam post confirm registry

- `/api/exam-post-submissions/confirm`의 teacher guard→body→source action과 verified/error 응답을 `examPostConfirmRouteRegistry`로 이동했다.
- AppState 저장·재조회와 mutation lock은 server owner다. local invalid-bearer 401만 실행했고 운영 원천·Storage·provider는 사용하지 않았다.
- 위치 결합 teacher-session fixture를 새 owner 기준으로 교정한 뒤 domain `69/69`, lint, scenario·production `827/827`, build `418`·main `944.65 kB`·lazy `12/12`를 통과했다. registry 11개 + server 직접 109개로 전역 120개를 유지한다.
- 다음은 최신 main에서 app-state와 special-lecture-guides GET 두 개를 read-only registry로 분리한다.

## 2026-08-05 App/API 4차 리팩터링 4-3h portal write registry

- portal-state/homework/question/exam submission POST 4개를 `portalWriteRouteRegistry`로 이동했다. portal guard→body→source action과 기존 오류 status 의미를 보존한다.
- Supabase 저장·재조회, question/exam mutation lock과 UI draft owner는 server/App에 유지했다. local invalid-bearer 401만 실행했고 운영 원천·Storage·provider는 사용하지 않았다.
- route/API closeout, domain `69/69`, lint, scenario·production `827/827`, build `418`·main `944.65 kB`·lazy `12/12` 통과. registry 10개 + server 직접 110개로 전역 120개를 유지한다.
- 다음은 최신 main에서 teacher exam post confirm route를 기존 teacher-account 앞 순서 그대로 한 단위로 분리한다.

## 2026-08-05 App/API 4차 리팩터링 4-3g portal read registry

- `/api/portal-data`의 portal guard, scoped read와 role 응답을 `src/shared/server/portalReadRouteRegistry.js`로 이동했다. source filter/DB read는 server owner다.
- 인증 없음·학생 없음·성공·source 실패를 fixture로 고정하고 무효 token 401 local smoke만 사용했다.
- runtime lint, portal/session 전용, domain 69/69, production 827/827, build 418·main 944.65 kB·lazy 12/12를 통과했다.
- 다음은 portal write 4개이며 운영 학생/학부모 로그인이나 데이터 쓰기는 실행하지 않는다.

## 2026-08-05 App/API 4차 리팩터링 4-3f teacher-account registry

- `/api/auth/teacher-account`의 service-role gate, current credential, 입력 검증과 save 응답을 `src/shared/server/teacherAccountRouteRegistry.js`로 이동했다.
- password hash와 teacher_accounts DB action/mapper owner는 server에 유지했다. 실제 계정 변경 없이 fixture와 비설정 503 smoke만 사용했다.
- runtime lint, auth/settings 전용, domain 69/69, production 827/827, build 418·main 944.65 kB·lazy 12/12를 통과했다.
- 다음은 portal-data read route이며 운영 학생/학부모 로그인이나 데이터 쓰기는 실행하지 않는다.

## 2026-08-05 App/API 4차 리팩터링 4-3e auth login registry

- `/api/auth/login`의 role→credential action→session token/account response 조립을 `src/shared/server/authLoginRouteRegistry.js`로 이동했다.
- credential DB와 bootstrap, password hash, HMAC codec owner는 바꾸지 않았고 login/portal 전역 route 순서도 유지했다.
- runtime lint, auth/session 전용, domain 69/69, production 827/827, build 418·main 944.65 kB·lazy 12/12를 통과했다.
- 다음은 teacher-account credential 변경 route이며 운영 로그인·계정 변경 없이 fixture와 무자격 403 smoke만 사용한다.

## 2026-08-05 App/API 4차 리팩터링 4-3d system route registry

- OPTIONS + health/client-errors/core-status를 `src/shared/server/systemRouteRegistry.js`로 이동했다. registry 3 + server 117 = 기존 120 route와 order hash를 유지한다.
- client error rate limit/body limit/normalize/log 응답과 health/core payload는 동작 fixture로 고정했고 local server 200 smoke도 통과했다.
- runtime lint, domain 69/69, production 827/827, build 418·main 944.65 kB·lazy 12/12를 통과했다.
- 다음은 credential auth와 portal session route registry이며 운영 로그인·계정 변경·운영 데이터는 사용하지 않는다.

## 2026-08-05 App/API 4차 리팩터링 4-3c session route guard

- session token codec과 request→teacher/portal/mixed session guard를 `src/shared/server/sessionRouteGuard.js`로 이동했다. 8시간/14일 expiry, HMAC, timing-safe 비교와 role 판정은 동일하다.
- portal 7·teacher 4·mixed 2 route는 공통 guard를 body/source action 전에 호출한다. credential DB 조회, route 응답, source/provider owner는 바꾸지 않았다.
- runtime lint, domain 69/69, production 827/827, build 418·main 944.65 kB·lazy 12/12, safe browser session 경로 3/3을 통과했다.
- 다음은 health/auth/portal/core read 첫 route registry이며 운영 로그인이나 계정 변경은 실행하지 않는다.

## 2026-08-05 App/API 4차 리팩터링 4-3b HTTP route adapter

- 공통 header/body/CORS/JSON response 구현을 `src/shared/server/httpRouteAdapter.js`로 이동하고 server가 allowed origins를 주입한 frozen adapter를 사용한다.
- 전용 fixture는 body/default·limit·오류, CORS wildcard/allowlist/fallback, 응답 header/body와 preflight를 고정한다. direct route 120개와 session/provider/persistence 의미는 그대로다.
- 다음은 bearer/session 검증과 teacher/portal guard 결과 adapter이며, 권한 정책 자체는 바꾸지 않는다.

## 2026-08-05 App/API 4차 리팩터링 4-3a server route 기준선

- server 직접 route 120개(GET 31/POST 76/DELETE 13)의 signature/order와 9개 family를 fixture로 고정했다. credential/session 15개, dispatch token 2개의 기존 guard 의미와 route action 전 선행 여부도 감사한다.
- source persistence·local draft·DB readback·provider·오류 복구 owner는 변경하지 않았다. 다음 4-3b는 공통 request/body/response/CORS/auth adapter를 작은 단위로 고정하고, 이후 auth/portal/core registry를 옮긴다.
- 기준 문서는 `docs/app-refactor-fourth-pass-server-route-baseline.md`이며 운영 DB·Storage·실제 알림·유료 AI는 사용하지 않았다.

## 2026-08-05 App/API 4차 리팩터링 4-2g exam pipeline mapper·4-2 closeout

- 시험분석 run/source/question/AI job/event 9개 mapper와 local ID helper를 `src/shared/persistence/examAnalysisPipelineRowMappers.js`로 이동했다. 이전 main 대비 함수 본문 13/13 exact이며 Storage bucket export identity를 유지한다.
- 유일 import는 `node:crypto`이고 Supabase·Storage·유료 AI·event orchestration은 route/server owner에 남았다. 4-2 종료 inventory는 core 36 + exam 9 = 45/45 추출을 production에서 감사한다.
- 시험분석 계약·prompt studio, lint, scenario·production `827/827`, build `418`·main `944.65 kB`·lazy `12/12`, non-paid safe browser `2/2` 통과. 다음은 최신 main 기반 4-3 server route/auth/core/provider 기준선이다.

## 2026-08-05 App/API 4차 리팩터링 4-2f platform source mapper

- AppState·자료함·알림 작업 6개 mapper와 visibility helper를 `src/shared/persistence/platformSourceRowMappers.js`로 이동했다. 이전 main 대비 함수 본문 9/9 exact, core 추출 inventory 36/36이다.
- AppState CAS/requery, private Storage, 알림 source/provider orchestration은 기존 owner에 유지했다. 새 module은 DB·Storage·Solapi·Slack import가 없고 실제 provider 행동을 실행하지 않았다.
- notification `18/18`, 관련 persistence, lint, scenario·production `827/827`, build `418`·main `944.65 kB`·lazy `12/12`, safe browser `5/5` 통과. 다음은 시험분석 9개 mapper 경계와 4-2 종료 감사다.

## 2026-08-05 App/API 4차 리팩터링 4-2e learning/calendar mapper

- 시험 session/attempt, 시험정보, 학사일정, 운영 알림 10개 mapper와 순수 helper를 `src/shared/persistence/learningCalendarRowMappers.js`로 이동했다. 이전 main 대비 함수 본문 22/22 exact, 추출 inventory 30/45다.
- Supabase source write/CAS/readback, 시험·학사일정 reconcile, App draft와 Slack side effect는 기존 owner에 유지했다. SchoolEvent payload 확장 metadata 보존과 미지 DB column drop을 별도 계약으로 고정했다.
- domain `69/69`, 관련 시험·일정 전용, lint, scenario·production `827/827`, build `418`·main `944.65 kB`·lazy `12/12`, safe browser `5/5` 통과. 다음은 최신 main 기반 AppState/ResourceMaterial/NotificationJob 6개다.

## 2026-08-05 App/API 4차 리팩터링 4-2d lesson activity mapper

- 수업일지 record·숙제·보충 task·출결 event 8개 mapper와 JSON/status helper를 `src/shared/persistence/lessonActivityRowMappers.js`로 이동했다. 이전 main 대비 helper/mapper 본문 12/12 exact다.
- source write/CAS/readback/rollback, 연속 출결 방문 orchestration과 provider 알림 경계는 기존 owner에 유지했다. MakeupTask note의 확장 domain metadata 보존 예외와 unknown DB column drop을 별도 fixture로 고정했다.
- lesson `20/20`, supplement `10/10`, 관련 persistence, lint, scenario·production `827/827`, build `418`·main `944.65 kB`·lazy `12/12`, safe browser `4/4` 통과. 다음은 최신 main 기반 learning/calendar mapper 10개다.

## 2026-08-05 App/API 4차 리팩터링 4-2c intake/special lecture mapper

- intake·특강 신청·특강 수강 6개 mapper와 관련 ID/status/session helper를 `src/shared/persistence/intakeSpecialLectureRowMappers.js`로 이동했다. 이전 main 대비 helper/mapper 본문 15/15 exact다.
- Tally 입력 조립, source write/CAS/readback, schema fallback과 provider 경계는 `coreData`/server에 유지했다. 전용 null/legacy/version/unknown-field fixture와 45개 inventory는 현재 추출 12개를 감사한다.
- intake CAS·특강 저장/동기화, lint, scenario·production `827/827`, build `418`·main `944.65 kB`·lazy `12/12`, safe browser `4/4` 통과. 다음은 최신 main 기반 LessonRecord/Homework/MakeupTask/AttendanceEvent 8개다.

## 2026-08-05 App/API 4차 리팩터링 4-2b core identity mapper

- Student/ClassTemplate/Lesson 6개와 특강 학생별 시간 helper를 `src/shared/persistence/coreIdentityRowMappers.js`로 이동했다. 기존 helper/mapper 본문 9/9 exact, `coreData`의 공개 `toLessonRow` 재수출과 모든 호출 identity를 유지한다.
- `api/domain` 신규 파일이 Vercel serverless file `13/12`를 만든 문제는 구현 초기에 발견해 `src/shared/persistence`로 옮겼고 scenario 827/827과 build에서 `12/12`를 재확인했다.
- 전용 round-trip/null/legacy/version/unknown-field, student `15/15`, lesson `20/20`, 관련 persistence, production `827/827`, build `418`·main `944.65 kB`·lazy `12/12`, safe browser `4/4` 통과. 다음은 최신 main 기반 intake/special-lecture mapper 6개다.

## 2026-08-05 App/API 4차 리팩터링 4-2a row mapper 기준선

- core 36개/18쌍과 exam pipeline 9개, 총 45개 row mapper의 현재 owner와 후속 4-2b~g 분류를 고정했다. 4-0의 44개 수치는 exact function inventory로 45개로 교정한다.
- null/default, schema fallback option, legacy alias, 새 `updated_at`, exam patch undefined, unknown-field drop 정책을 `test:fourth-pass-row-mapper-baseline`에서 감사하고 전체 production gate에 연결했다.
- 제품 runtime·DB·provider는 바꾸지 않았다. 다음은 최신 main 기반 Student/ClassTemplate/Lesson 6개 pure mapper 추출이며 운영 데이터·Storage·AI·Solapi·Slack은 실행하지 않는다.
- mapper baseline, domain all `69/69`, lint, scenario·production `827/827`, build `418 modules`·main `944.65 kB`·lazy `12/12` 통과. exact-head CI의 전체 safe browser까지 확인한 뒤 통합한다.

## 2026-08-05 App/API 4차 리팩터링 4-1 closeout

- 4-1은 공통 contract 24개로 종료했다. server 직접 mutation 89개 중 나머지 65개는 4-2/4-3 row·route 42개와 4-5 external/provider/seed 23개로 exact allowlist 분류했다.
- `test:fourth-pass-api-contract-closeout`이 route 수·domain count·provider source 6개·server parser 연결·남은 분류를 검사하며 전체 production gate에 포함된다.
- 제품 runtime과 운영 원천은 바꾸지 않았다. 다음은 최신 main 기반 4-2 DB row/domain model 변환 기준선부터 시작하며 실제 Storage/Tally/AI/Solapi/Slack/admin seed는 실행하지 않는다.
- closeout·contract `24 routes`, domain all `69/69`, lint, scenario·production `827/827`, build `418 modules`·main `944.65 kB`·lazy `12/12` 통과. 전체 safe browser는 exact-head CI gate로 남긴다.

## 2026-08-05 App/API 4차 리팩터링 4-1x exam output drafts

- `POST /api/exam-analysis-runs/save-output-drafts`의 run/output input/교사 수정본 request와 authoritative run/event/source response를 24번째 공통 contract에 연결했다. 잘못된 object·boolean·미지 field는 DB 쓰기 전에 400으로 차단한다.
- Supabase audit summary 병합·입력 정규화·event·전체 run 재조회 owner는 server에 유지하고 safe API는 가상 run만 갱신한다. UI 명시 저장, API readback과 reload 복구를 확인했으며 AI 생성 route는 실행하지 않았다.
- contract `24 routes`, output/Prompt Studio·teacher/lazy 전용, lint, scenario·production `827/827`, build `418 modules`·main `944.65 kB`·lazy `12/12`, 격리 browser `1/1` 통과. 다음은 4-1 종료 감사를 거쳐 4-2 DB row/domain model 변환 기준선을 시작한다. 운영 데이터·업로드·Storage·유료 AI·실제 알림은 사용하지 않았다.

## 2026-08-05 App/API 4차 리팩터링 4-1w exam Prompt Studio

- `POST /api/exam-analysis-runs/save-prompt-studio`의 run/revision/교사 작업본 request와 authoritative run/draft/source/verification response를 23번째 공통 contract에 연결했다. invalid revision은 source 쓰기 전에 400, stale revision은 409로 차단한다.
- Supabase revision CAS·audit summary 병합·재조회·event owner는 server에 유지하고 safe API는 가상 run만 갱신한다. 화면 명시 저장, API readback, stale 충돌 보존과 reload 복구를 확인했다.
- contract `23 routes`, Prompt Studio·teacher/lazy 전용, lint, scenario·production `827/827`, build `418 modules`·main `944.93 kB`·lazy `12/12`, 격리 browser `1/1` 통과. 다음은 비-AI output draft 저장을 고정한 뒤 4-1 종료 범위를 감사한다. 운영 데이터·업로드·Storage·유료 AI·실제 알림은 사용하지 않았다.

## 2026-08-05 App/API 4차 리팩터링 4-1v exam question review

- `POST /api/exam-analysis-runs/save-question-reviews`의 교사 문항별 검수 request와 run/question rows/event/teacher review response를 22번째 공통 contract에 연결했다. 빈 목록·잘못된 문항 번호·중복 번호는 DB 쓰기 전에 400으로 차단한다.
- Supabase question row patch·재조회, run audit와 event owner는 server에 유지하고 safe API는 가상 teacher/final fields만 저장한다. UI에서 메모·확정·주요문항을 저장하고 API 재조회·reload 뒤 복구되는 동선을 검증했다.
- contract `22 routes`, prompt studio·teacher/lazy 전용, lint, scenario·production `827/827`, build `418 modules`·main `944.93 kB`·lazy `12/12`, 격리 browser `1/1` 통과. 다음은 prompt studio/output draft 중 비-AI 저장 route를 한 단위씩 고정한다. 운영 데이터·업로드·Storage·유료 AI·실제 알림은 사용하지 않았다.

## 2026-08-05 App/API 4차 리팩터링 4-1u exam question count

- `POST /api/exam-analysis-runs/confirm-question-count`의 교사 확정 request와 run/question rows/event/source response를 21번째 공통 contract에 연결했다. 1~200 정수와 미지 field는 DB 쓰기 전에 400으로 차단한다.
- Supabase RPC·run/event 저장·재조회 owner는 server에 유지하고 safe API는 가상 1~N rows와 reload 지속성만 검증한다. contract registry는 행동 시 dynamic chunk로 불러 initial main 예산을 보존했다.
- 첫 Preview의 Node 24.15 build가 main 예산을 35 bytes 넘긴 뒤 endpoint timeout을 lazy helper로 이동해 local main을 `944.84 kB`로 낮췄다. contract `21 routes`, prompt studio·teacher/lazy 전용, lint, scenario·production `827/827`, build `418 modules`·lazy `12/12`, 격리 browser `1/1` 통과. 다음은 문항 검수/prompt/output draft 등 비-AI 저장 route를 한 단위씩 고정하고 Storage·AI route는 실행하지 않는다.

## 2026-08-05 App/API 4차 리팩터링 4-1t exam analysis run

- `POST /api/exam-analysis-runs`의 canonical run metadata request와 source/run response를 공통 contract에 연결했다. 기존 `{ run }`·root 직접 payload는 명시적 legacy normalization으로 보존하고 실제 DB/event owner는 server pipeline에 둔다.
- safe API와 화면은 가상 run 저장·목록 재조회·reload 지속성만 검증한다. contract `20 routes`, prompt studio·teacher/lazy 전용, lint, scenario·production `827/827`, build `418 modules`·main `944.70 kB`·lazy `12/12`, 격리 browser `1/1` 통과.
- 다음 단위는 AI를 호출하지 않는 문항 수 사람 확정 payload/row response를 고정한다. 운영 데이터·업로드·Storage·유료 AI·실제 알림은 사용하지 않았다.

## 2026-08-05 App/API 4차 리팩터링 4-1s notification dispatch

- `POST /api/notification-jobs/dispatch-due`의 token/dry-run/limit/clock request와 processed/source/reconcile response를 공통 contract에 연결했다. 인증 선판정과 source claim·Solapi 실행·결과 저장 owner는 server에 유지한다.
- cron client도 같은 request/response parser를 사용하고 safe API는 0건/no-write 응답만 허용하며 모든 민감 override를 401로 막는다. contract `19 routes`, notification `18/18`, lint, scenario·production `827/827`, build `417 modules`·main `944.71 kB`·lazy `12/12`, 격리 browser `1/1` 통과.
- 다음 단위는 유료 실행 없이 exam analysis request/response inventory를 고정해 4-1 종료 범위를 확정한다. 운영 데이터·실제 Slack/Solapi·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1r notification readiness

- `POST /api/notification-jobs/readiness-check`의 clock/window/Slack flag와 source issue response를 공통 contract에 연결했다. notification source read와 누락 판정, 선택적 Slack owner는 server에 유지한다.
- safe API는 누락 issue만 반환하고 Slack 요청은 400으로 막는다. contract `18 routes`, notification `17/17`, lint, scenario·production `827/827`, build `417 modules`·main `944.71 kB`·lazy `12/12`, 격리 browser `1/1` 통과.
- 다음 단위는 인증된 `/api/notification-jobs/dispatch-due` 요청·응답과 override 권한을 실제 job 처리 없이 고정한다. 운영 데이터·실제 Slack/Solapi·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1q notification bulk reserve

- `POST /api/notification-jobs/reserve-bulk`의 canonical batch request와 per-job/count response를 client·실서버·safe server 공통 contract에 연결했다. 기존 `jobs` alias와 concurrency default는 contract가 소유한다.
- 실서버의 부분 실패·재사용·source 저장과 App batch merge는 유지했고 safe API는 dry-run만 수행한다. contract `17 routes`, notification `16/16`, lint, scenario·production `827/827`, build `417 modules`·main `944.71 kB`·lazy `12/12`, 격리 browser `1/1` 통과.
- 다음 단위는 dispatch/readiness 또는 남은 notification provider write route를 inventory해 한 route씩 고정한다. 운영 데이터·실제 알림 예약·취소·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1p notification reconcile

- `POST /api/notification-jobs/reconcile-solapi`의 6개 selector request와 provider checked/source job/record response를 client·실서버·safe server 공통 contract에 연결했다.
- 기존 90초 single-flight, App source merge·record cache/save-state owner는 유지했다. safe API는 provider를 조회하거나 source job을 바꾸지 않는다. contract `16 routes`, notification `15/15`, reconcile 전용 감사, lint, scenario·production `827/827`, build `417 modules`·main `944.90 kB`·lazy `12/12`, 격리 browser `1/1` 통과.
- 다음 단위는 notification bulk reserve 또는 남은 provider write route를 inventory해 한 route씩 고정한다. 운영 데이터·실제 알림 조회·예약·취소·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1o notification cancel

- `POST /api/notification-jobs/cancel`의 canonical request와 source/provider 결과 response를 client·실서버·safe server 공통 contract에 연결했다. 기존 `id` 호환은 선언된 alias로만 허용한다.
- 실서버의 Solapi group 취소와 source canceled 저장 순서는 유지하고, safe API는 `cancelSolapi:false`로 source만 변경해 실제 provider 행동이 없음을 고정했다. contract `15 routes`, notification `14/14`, lint, scenario·production `827/827`, build `417 modules`·main `944.66 kB`·lazy `12/12`, 격리 browser `1/1` 통과.
- 다음 단위는 `/api/notification-jobs/reconcile-solapi`의 selector payload와 provider read/source merge response를 실제 provider 조회 없이 고정한다. 운영 데이터·실제 알림 예약·취소·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1n notification reserve

- `POST /api/notification-jobs/reserve`의 canonical request와 source/provider 결과 response를 client·실서버·safe server 공통 contract에 연결했다. 공지와 보충/수업 예약은 저장 시점 dynamic contract helper를 공유한다.
- 예약 pending source, 동일 예약 재사용, 이전 group 취소, 교사 취소 경합, 최종 provider 결과/실패 source 저장 owner는 유지했다. contract `14 routes`, notification `13/13`, lint, scenario·production `827/827`, build `417 modules`·main `944.39 kB`·lazy `12/12`, safe dry-run browser `1/1` 통과.
- 다음 단위는 `/api/notification-jobs/cancel` request/response와 provider 취소/source 상태 분리를 실제 취소 없이 고정한다. 운영 데이터·실제 알림 예약·취소·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1m notification source

- `POST /api/notification-jobs`의 canonical source payload/response를 client·실서버·safe server 공통 contract에 연결했다. DB `notification_jobs` upsert만 이 경계가 소유하고 Solapi 예약·취소·reconcile은 별도 route에 그대로 남겼다.
- App/공지/실패 기록의 직접 source POST는 공통 helper를 사용하고 dynamic contract chunk로 initial main 예산을 보존했다. contract `13 routes`, notification `12/12`, lint, scenario·production `827/827`, build `416 modules`·main `944.07 kB`·lazy `12/12`, provider 없는 browser `2/2` 통과.
- 다음 단위는 `/api/notification-jobs/reserve` request/response와 source saved/provider result 분리를 실제 발송 없이 고정한다. 운영 데이터·실제 알림·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1l resource private file

- 인증된 `/api/resource-material-files` POST/DELETE의 upload/delete request와 Storage+row verified response를 공통 contract에 연결했다. teacher auth는 parser보다 먼저, 28MB body limit와 기존 file validation은 parser 뒤에 유지한다.
- stable Storage path, row CAS/readback, upload rollback, delete backup/restore, 목록 재조회와 UI draft/list 보존 owner는 기존 operation/API/action에 유지했다. contract/Storage/metadata fixture, lint, scenario·production `827/827`, build `416 modules`·main `943.62 kB`·lazy `12/12`, 격리 browser `1/1` 통과.
- 4-1의 student/app-state/report/resource 묶음은 닫혔다. 다음은 notification/provider payload를 한 route씩 inventory한다. 운영 데이터·실제 파일·알림·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1k resource metadata

- `/api/resource-materials` POST의 `{ material }` request와 `material/source/verified/recoveredDraft?` response를 client·실서버·safe server 공통 contract에 연결했다. direct-object fallback은 내부 사용처가 없어 persistence 전 400으로 닫았다.
- insert-only/CAS·unknown-result 최신 draft 수렴·Supabase 목록 재조회·form/list 복구 owner는 기존 API/action에 유지했다. contract/resource fixture, lint, scenario·production `827/827`, build `416 modules`·main `943.62 kB`·lazy `12/12`, 격리 browser `1/1` 통과.
- 다음 4-1 단위는 인증된 private Storage 파일 upload/delete payload contract다. 운영 데이터·실제 알림·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1j report snapshot

- `/api/report-snapshots`의 `{ snapshot }` request와 `recovered/reportSnapshots/snapshot/source/verified` response를 client·실서버·safe server 공통 contract에 연결했다. teacher auth는 payload parsing보다 먼저 유지한다.
- stable ID retry, app_state key CAS·Supabase 재조회·기존 snapshot 보존과 UI draft/상태 owner는 기존 action/persistence에 유지했다. contract/report fixture, lint, scenario·production `827/827`, build `416 modules`·main `943.61 kB`·lazy `12/12`, 격리 browser `1/1` 통과.
- 다음 4-1 단위는 resource material payload contract다. 운영 데이터·실제 알림·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1i app state

- 공용 app-state 저장과 강사 운영 메모가 같은 canonical `{ states, expectedUpdatedAt? }` request와 `{ source, states }` response contract를 사용한다. server는 legacy direct-object를 persistence 전에 400으로 거부한다.
- local draft·key별 직렬화·CAS·Supabase 재조회·충돌/후속 입력 보존 owner는 기존 controller에 유지했다. contract/app-state fixture, lint, scenario·production `827/827`, build `416 modules`·main `943.55 kB`·lazy `12/12`, 격리 browser `1/1` 통과.
- 다음 4-1 단위는 report snapshot 전용 payload contract다. 운영 데이터·실제 알림·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1h derived school calendar

- 시험정보와 연결 직전수업 atomic route의 canonical request/verified response를 공통 contract에 연결했다. invalid payload는 두 source persistence 전에 field 포함 400으로 차단한다.
- 행·수업 CAS/readback/rollback, retry, 수동 보호와 App 성공 반영은 유지했다. contract/persistence, domain all `62/62`, lint, scenario·production `827/827`, build `416 modules`·main `942.75 kB`·lazy `12/12`, browser `1/1` 통과.
- 다음 4-1 단위는 app-state 전용 payload contract다. 운영 데이터·실제 알림·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1g class roster

- 학생 반 배정과 미래 정규수업 명단을 함께 저장하는 `/api/class-rosters/save`의 canonical request/verified response를 공통 contract에 연결했다. invalid payload는 persistence 전에 field 포함 400으로 차단한다.
- 학생·수업 CAS/readback/rollback, cleanup, App의 최종 Supabase 재조회와 conflict draft 보존은 유지했다. contract/persistence, student `15/15`, lint, scenario·production `827/827`, build `416 modules`·main `942.68 kB`·lazy `12/12`, browser `1/1` 통과.
- 다음은 registry의 derived school calendar payload를 한 route로 연결한다. 운영 데이터·실제 알림·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1f attendance check

- 수동 출결과 키오스크 저장이 공유하는 `/api/attendance/check` request 및 `record/action/mode/alimtalk` response를 공통 contract에 연결했다. initial bundle을 지키기 위해 client contract는 저장 시점 dynamic import다.
- 출결 원천 저장과 attendance event, 수동 결석 예약·키오스크 알림 queue는 server 기존 orchestration에 남아 있으며 provider 실패를 원천 저장 실패로 바꾸지 않는다.
- 첫 CI가 하원 저장 응답 전 readback하는 browser race를 찾아 POST 200·UI 재활성화 대기를 추가했다. contract/attendance controller, lesson `20/20`, lint, scenario·production `827/827`, build `416 modules`·main `942.62 kB`·lazy `12/12`, 전체 browser `47/47` 통과. 다음은 registry에 이미 있는 class roster payload를 client/server에 한 route로 연결한다. 운영 데이터·실제 알림·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1e supplement schedule

- 보충 일정 atomic save route의 canonical request/verified response를 공통 contract에 연결했다. invalid payload는 DB action 전에 field 포함 400으로 차단한다.
- stable logical key, 결과 불명 3요청 수렴, lesson/task CAS·재조회·rollback과 source saved/provider failed 분리는 유지했다.
- contract/schedule persistence, supplement `10/10`, lint, scenario·production `827/827`, build `416 modules`·main `942.27 kB`·lazy `12/12`, 집중 browser `1/1` 통과. 다음은 attendance versioned write payload inventory를 한 route 단위로 추가·연결한다. 운영 데이터·실제 알림·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1d lesson makeup

- 등원보충 task 저장 route의 canonical/legacy request와 verified response를 공통 contract에 연결했다. stable ID·insert-only/CAS·재조회·부분 저장 draft 복구 owner는 유지했다.
- contract 정적 연결로 initial main이 948.34 kB까지 늘어난 build budget 실패를 발견해 저장 시점 dynamic import로 바꿨고 main 942.27 kB로 복귀했다.
- contract/bulk/CAS/controller, lesson `20/20`, lint, scenario·production `827/827`, build `416 modules`·lazy `12/12`, 집중 browser `1/1` 통과. 다음 supplement route는 이 handoff 상단의 4-1e에서 완료 상태를 이어 기록한다. 운영 데이터·실제 알림·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1c lesson history

- 수업 복사·취소·되돌리기 route 하나에 공통 request/response contract를 연결했다. client는 canonical payload와 verified response를 검사하고 server는 persistence 전에 invalid payload를 field 포함 400으로 반환한다.
- stable pending copy, undo stack, Supabase CAS·재조회·rollback, App 성공 반영·실패 보존은 유지했다. contract/history, lesson `20/20`, lint, scenario·production `827/827`, build `416 modules`·lazy `12/12`, 집중 browser `2/2` 통과.
- 다음 단위는 lesson journal makeup task route이며 이 handoff 상단의 4-1d에서 완료 상태를 이어 기록한다. 운영 데이터·실제 알림·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1b lesson journal rows

- 수업일지 record/homework 저장 route 하나에 공통 request/response contract를 연결했다. client는 canonical payload만 전송하고 verified Supabase response type을 검사하며, server는 persistence 전 invalid payload를 field가 포함된 400으로 반환한다.
- 기존 local draft, Supabase CAS·재조회·rollback, App 성공 반영·실패 보존 owner는 그대로다. contract/rows/교사 숙제, lesson `20/20`, lint, scenario·production `827/827`, build `416 modules`·lazy `12/12`, 집중 browser `3/3` 통과.
- 다음 단위는 lesson history action route이며 이 handoff 상단의 4-1c에서 완료 상태를 이어 기록한다. 운영 데이터·실제 알림·SQL·유료 호출은 없었다.

## 2026-08-05 App/API 4차 리팩터링 4-1a

- 공통 pure payload parser와 6개 직접 versioned write route inventory를 추가했다. legacy alias는 선언된 `makeupTasks <- tasks`만 허용하고 canonical+alias 동시 입력, 미지 field, 잘못된 type은 400 contract error로 판정한다.
- runtime route와 client call site는 아직 바꾸지 않았다. 다음 4-1b에서 수업일지 rows/history/makeup, 보충 일정, 출결 request를 같은 contract에 한 경계씩 연결한다.
- 첫 exact-head CI에서 날짜가 지난 고정 fixture 2건을 발견해 해당 테스트 시계를 한국 시간 2026-08-03으로 고정하고 대상 수업만 개수 비종속으로 검증했다. 집중 browser `2/2`, 전체 browser `47/47`을 다시 통과했다.
- contract fixture, domain all `62/62`, lint, scenario·production `827/827`, build `414 modules`·main `942.25 kB`·lazy `12/12` 통과. 운영 데이터·실제 알림·SQL·유료 호출은 없었다.

## 2026-08-04 App/API 4차 리팩터링 4-0

- 사용자가 4차 연쇄 진행을 승인했고 두 선행 작업이 모두 final/completed라 최신 main `4d351314`에서 시작했다. 재개 heartbeat `academy-os-4`는 4-0 시작 후 비활성화했다.
- 기준선은 App 10,903줄·request 73회·handler 113개, server 7,806줄·route 120개, coreData 5,798줄·row mapper 44개, App.css 21,727줄, safe browser 47개다.
- 시간 기준은 domain all 1.63초, lint 4.45초, scenario 3.25초, build 4.28초, full production 80.88초, full browser 114.80초다.
- 계획·소유권·회귀 inventory는 `docs/app-refactor-fourth-pass-plan.md`가 source of truth다. 다음 단위는 4-1a 공통 API contract helper와 versioned write route inventory이며 실제 운영 쓰기·알림·AI 호출 없이 진행한다.

## 2026-08-04 학생별 월간 제출 기능

- 학생 프로필의 월별 출결 영역에서 `수업일정표`를 연다. 선택한 한 달의 예정 수업, 실제 출결, 보강·특강·휴강·취소·개별 시간 등의 변동사항을 별도 구역으로 표시한다.
- 학부모용 간단본과 원장님용 상세본을 전환하고, 화면에서 확인한 동일 내용을 클립보드로 복사하거나 PDF 인쇄한다. 메모는 이번 결과물에만 포함되며 저장·실제 발송·알림 예약은 하지 않는다.
- 개별 스케줄 요일이 기본 반보다 우선하므로 강민준처럼 월금인 학생의 수요일 정규수업은 빠지지만, 8월 26일에 별도 보강을 만들면 변동사항과 예정 수업에 포함된다.
- 검증: 전용 모델, student `15/15`, runtime lint, production·scenario `827/827`, build `414 modules`·main `942.25 kB`·lazy `12/12`, focused safe browser `1/1` 통과.

## 2026-08-04 개별 스케줄 우선 명단

- 기본 반은 장기 소속으로 남기고 학생 개별 스케줄의 선택 요일을 같은 반 정규수업·휴강 명단보다 우선한다. 강민준의 현재 `월금 17:00-19:00`은 수요일 정규수업에서 제외되며, 나중에 `월수금 17:00-19:00`으로 직접 수정하면 미래 수요일 명단이 다시 포함된다. 별도 적용 시작일은 없다.
- 보강·시험대비·특강처럼 직접 정한 명단은 유지한다. 수업일지·달력 인원수·출결 kiosk·학생 포털·알림 발송 직전·정산·숙제 연결이 같은 요일 판정을 사용한다.
- 프로필 개별 스케줄 저장은 기존 학생+미래 명단 versioned save plan과 Supabase 재조회 확인을 사용한다. 운영 학생/수업 데이터, 메모, 알림, SQL은 이번 실행에서 변경하지 않았다.
- 검증: 관련 domain `51/51`, scenario/production `827/827`, runtime lint, build `412 modules`·main `942.07 kB`·lazy `12/12`, focused safe browser `1/1` 통과.

## 2026-08-04 달력 특수수업 정렬과 학생 저장 표시

- 월간 달력은 시작시각이 같으면 특강·클리닉을 보충수업보다 위에 묶고, 보충수업끼리는 이름순으로 표시한다. 서로 다른 시작시각의 시간순은 유지한다.
- 강민준의 개별 스케줄 `월금 17:00-19:00`은 운영 원천에 저장되어 있다. 변경 없음으로 비활성화된 저장 버튼의 `wait` 커서가 오해를 만들었으며, 실제 저장 중에만 대기 커서를 쓰도록 교정했다.
- 당시 제안한 학생별 월간 일정/출결 제출은 후속 단위에서 구현했다. 한 학생·한 달의 계획/실제/변동사유를 같은 파생 원천에서 만들며 실제 발송은 별도다.
- lesson `20/20`, production `827/827`, runtime lint, build `412 modules`·main `944.72 kB`·lazy `12/12`, focused safe browser `2/2`가 통과했다.

## 2026-08-04 열린 탭 수업일지 저장 모듈 선행 로드

- 배포 전부터 열려 있던 운영 탭이 저장 순간 이전 hash의 `lessonJournalRowsSaveAction`을 요청해 Vercel HTML fallback/MIME 오류로 실패했다. 서버 요청 전 실패라 수정본은 화면에 남고 운영 원천은 변경되지 않았다.
- 핵심 저장 모듈을 앱 시작 때 선행 요청하고 handler가 같은 module promise를 사용한다. 실패 시에는 원인 상세와 남은 변경 건수를 하단 바에서 같이 보여 준다.
- lesson 20/20, 전용 fixture, runtime lint, build main 944.72kB와 safe browser 선행 요청·검증 저장 동선이 통과했다. 배포 뒤 기존 탭의 이윤채 다음 숙제 수정본을 다시 저장·재조회해야 한다.

## 2026-08-04 2학기 중간 누락과 행별 관리 정리

- 원본 메모와 활성 학생 학교·학년을 다시 대조해 선덕중 중3 `10/14~10/16`, 창북중 중3 `10/19~10/21`, 창동고 고1 `10/7~10/14`를 운영 `exam_prep_rows`에 저장·재조회했다. 중3 근거가 없는 중학교와 기록 없는 고교는 빈칸을 유지한다.
- 시험정보 표에서 반복되던 `시험 후 총평`·`관리` 두 열을 없애고 `상세` 한 열로 통합했다. 수정·총평·삭제는 `상세 관리` 모달 안에 있다.
- 재학생 7명과 시험정보 긴 이름 8행을 `선덕중·창동고·창일중`으로 통합했다. 시험행 내용은 짧은 이름 행에 먼저 보존한 뒤 별칭을 감사 삭제했으며 학생·시험정보 긴 이름 잔존은 0건이다.
- 학생 persistence·시험정보 fixture·runtime lint·가상 브라우저 상세/총평 동선이 통과했다. 알림 계약은 변경하지 않았다.

## 2026-08-04 보충 상태 안내 하단 고정

- 보충관리 학생 상세의 성공·진행·실패 안내를 화면 하단 고정 바로 변경했다. 문구·저장·알림 callback과 닫기 행동은 바꾸지 않았다.
- 바는 모달 본문 폭에 맞추고 모바일 좌우 16px·safe-area를 지키며, 긴 문구는 제한 높이 안에서 스크롤한다. 중첩 확인창보다 아래에 표시한다.
- supplement action, runtime lint, production `827/827`, build `411 modules`·main `944.80 kB`·lazy `12/12`, 데스크톱·390×844 가상 브라우저 검증을 통과했다.

## 2026-08-04 시험정보 재학생 행과 확인 날짜 분리

- `시험정보`의 `전체 반`은 모든 활성 학생의 학교·학년 행을 보여 주고, 시험 후 제출 탭은 기존 반별 흐름을 유지한다. 반·고사를 바꾸면 빠진 재학생 학교 행을 생성한다.
- 자동생성 행의 시험기간·수학 시험일은 기본값을 넣지 않고 `미입력`으로 둔다. 빈 시험기간을 임의 고사 기간으로 채우던 App effect도 제거했다.
- 앞선 실행에서 잘못 삭제한 미확인 2학기 자동생성 행 12건은 같은 ID로 복구하고 날짜만 빈칸으로 되돌린다. 사용자가 확인한 일정 11건은 변경하지 않는다.
- 전용 fixture·runtime lint·production `827/827`·build `411 modules`·main `944.80 kB`·lazy `12/12`, 가상 브라우저의 재학생 중학교 행/API 빈 날짜 재조회가 통과했다.

## 2026-08-04 학생별 오답 명시 저장

- `wrongProblems`를 공용 app_state 자동저장 11개 key에서 분리해 10개로 줄였다. 오답관리의 `학생별 오답 저장`이 해당 key만 CAS·Supabase 재조회하며, 저장 전 local draft와 충돌·실패 입력을 보존한다.
- 저장 중 후속 편집은 첫 응답 뒤 다시 `변경됨`으로 표시한다. safe browser는 자동저장 부재→첫 snapshot 저장→후속 수정 보존→두 번째 저장→새로고침 지속성을 확인한다.
- runtime lint, 전용/app_state/teacher 경계, scenario·production `827/827`, build `410 modules`·main `944.86 kB`·lazy `12/12`, safe browser `42/42` 통과. 다음 후보는 `lessonResearchItems` 명시 저장이며 새 실행에서 다시 범위를 좁힌다.

## 2026-08-04 P3-4 알림톡 template 종료 감사

- 자동 closeout이 9개 제품 경로의 seed→draft→persisted human final→provider 변수, 설정 key 10개, provider template 4개를 고정한다. 재시험은 독립 11시 job 대상이 아니며 연결 수업 schedule line만 유지한다.
- runtime 동작은 변경하지 않았다. Settings safe browser는 10개 관리 항목·재시험 11시 항목 부재·CAS/readback·새로고침 뒤 지속성을 확인하며 실제 발송·예약·취소는 실행하지 않는다.
- runtime lint, notification `11/11`, scenario·production `827/827`, build `410 modules`·main `943.65 kB`·lazy `12/12`, safe browser `41/41`이 통과했다. P3는 닫고 4차 리팩터링은 자동 시작하지 않는다.

## 2026-08-03 P3-3b 알림톡 Settings seed 확장

- 일반 공지 preset 3개와 특강 guide seed를 기존 `app_state.aiSettings.notificationTemplates`에 연결했다. 새 draft의 seed만 바뀌며 현재 composer draft·기존 job·보충 교사 최종본은 보존한다.
- 재시험 11시 항목과 provider template ID/변수는 건드리지 않았다. Settings 행 metadata는 lazy chunk로 분리해 build budget을 상향하지 않았다. safe API의 `app_state` key별 `updated_at` CAS/readback을 보강해 설정값이 새로고침 뒤에도 유지되는지 확인한다.
- runtime lint, notification `10/10`, teacher runtime 경계, scenario·production `827/827`, build `410 modules`·main `943.65 kB`·lazy `12/12`, safe browser `41/41`이 통과했다. 실제 알림과 운영 데이터는 사용하지 않았다.
- 다음 P3-4는 9개 제품 경로의 seed→draft→persisted final→provider variables 종료 감사다.

## 2026-08-03 P3-3a 알림톡 template transport 계약

- 일반 공지·특강은 code seed→composer local draft→교사 최종 notification job→provider 경로다. 특강 provider template이 없으면 대상별 comment template fallback을 유지한다.
- 재시험은 저장 가능한 보충 task draft와 연결 수업의 수업일지 schedule line만 있고 독립 학생 11시 job 대상은 아니다. 이를 전용 가상 fixture로 고정했으며 실제 API·알림은 실행하지 않았다.
- runtime lint, notification `10/10`, scenario·production `827/827`, build `409 modules`·main `944.94 kB`·lazy `12/12`가 통과했다. 런타임 동작은 변경하지 않았다.
- 다음 P3-3b는 일반 공지 preset 3개와 특강 guide seed만 catalog/Settings에 연결한다. 재시험 11시 항목은 만들지 않고 현재 local draft·기존 job·`makeup_tasks` 교사 최종본을 보존한다.

## 2026-08-03 P3-2 알림톡 preview/live renderer 경계

- 출결·수업일지 client preview와 server live body를 `notificationMessageRenderer.js`에 연결했다. provider template/수신자/예약·발송 경계와 persisted human final은 그대로다.
- 전용 동일성 fixture, lesson `20/20`, notification `9/9`, scenario·production `827/827`, build `409 modules`·main `944.94 kB`·lazy `12/12`, safe browser `40/40`이 통과했다. 실제 알림과 운영 데이터는 사용하지 않았다.
- 다음 P3-3은 공지 preset·특강 guide·재시험의 transport 범위를 먼저 고정하고 Settings 확장을 진행한다.

## 2026-08-03 P3-1 알림톡 template catalog 경계

- 기존 default 6개·Settings metadata·legacy 변환·normalize를 pure notification catalog로 이동했다. App과 server의 숙제 follow-up 기본값이 같은 원천을 읽으며 저장 key·문구·빈 사용자 값 의미는 그대로다.
- 전용 catalog fixture, notification `8/8`, teacher runtime 경계, scenario·production `827/827`, build `408 modules`·main `944.35 kB`·lazy `12/12`가 통과했다. persisted 교사 최종본과 provider callback에는 변경이 없다.
- 다음 P3-2는 출결·수업일지 client preview와 server 실제 문구의 renderer 동일성 fixture다. 설정 확장과 실제 발송·예약은 아직 실행하지 않는다.

## 2026-08-03 P3-0 알림톡 문구 원천 inventory

- 9개 제품 경로를 대조한 결과 Settings 관리 key는 6개, Solapi provider template은 4개다. 출결·수업 리포트 구조·공지 preset·특강 guide·재시험 fallback은 아직 code-owned다.
- 보충 알림은 template seed 뒤 교사 최종본을 `makeup_tasks`에 저장하므로 catalog 변경이 persisted human value를 덮으면 안 된다. 수업일지는 client preview와 server live 조립 동일성을 먼저 고정한다.
- 검증은 lint, notification `7/7`, scenario·production `827/827`, build `407 modules`·main `944.34 kB`·lazy `12/12`를 통과했다. 런타임 UI와 provider 행동 변경은 없다.
- 다음 P3-1은 기존 6개 default·변수 metadata·normalize를 pure notification catalog로 옮긴다. 실제 발송·예약·취소는 실행하지 않는다.

## 2026-08-03 P2-4 modal 저장 상태 감사

- DB/API 저장 표면을 여섯 공통 상태와 대조했고 잘못된 매핑은 없어 런타임 동작을 바꾸지 않았다. provider/process 복합 결과 세 종류는 의미 보존을 위해 별도 표시한다.
- `test:modal-save-state-audit`가 공통 상태·복합 예외·본문 작업 바를 고정한다. P2는 공통 shell 41/41, bespoke 0, 공통 footer 15개로 종료한다.
- 검증은 lint, domain `56/56`, scenario·production `827/827`, build `407 modules`·main `944.34 kB`·lazy `12/12`를 통과했다. 런타임 UI 변경은 없다.
- 다음 P3는 출결·수업일지·보충·재시험·공지·특강·일정 변경·11시 reminder의 문구 원천을 읽기 전용으로 inventory한다. 실제 발송·예약은 사람 gate 전까지 실행하지 않는다.

## 2026-08-03 P2-3d 월 정규수업 열기 footer

- `MonthlyRegularLessonOpenModal`의 최종 버튼 wrapper만 공통 `ModalFooter`로 옮겼다. App-owned bulk save/requery와 버튼 조건은 그대로다.
- safe browser는 빈 다음 달 확인창의 footer와 닫기만 실행하며 수업 생성은 없다.
- 공통 footer는 15개다. 남은 `modalActions` 2개는 보충 상세 내부 작업 바로 유지한다. P2-3은 종료하고 다음 P2-4는 저장 상태 vocabulary 대조다.

## 2026-08-03 P2-3c 수업일지 내부 보충 완료 확인 footer

- `LessonNestedPanels`의 보충 완료/추가 보충 확인 wrapper만 공통 `ModalFooter`로 옮겼다. local state, 취소/완료 callback, busy guard는 그대로다.
- 전용 nested panel fixture가 footer와 callback identity, App-owned persistence 주입을 고정한다. 실제 저장·예약 취소는 실행하지 않는다.
- 공통 footer는 14개, 기존 action wrapper는 3개다. 다음은 App의 월 정규수업 열기 footer를 별도 단위로 검토한다.

## 2026-08-03 P2-3b 보충 일정 변경 확인 footer

- `SupplementScheduleChangeConfirmModal`의 세 버튼 wrapper만 공통 `ModalFooter`로 옮겼다. local draft, 일정만 저장/알림 예약 갱신 callback payload, busy 잠금은 그대로다.
- safe browser는 기존 가상 일정 원천의 저장·재확인 후 확인창을 열고 취소만 한다. 이 footer 검증으로 추가 저장이나 provider 행동은 없다.
- 공통 footer는 13개, 기존 action wrapper는 4개다. 다음은 `LessonNestedPanels`의 수업일지 내부 보충 완료 확인 footer를 별도 단위로 검토한다.

## 2026-08-03 P2-3a 보충 완료 확인 footer

- `SupplementPassConfirmModal`의 버튼 wrapper만 공통 `ModalFooter`로 옮겼다. 취소/완료 callback, `isBusy`, 문구·순서는 그대로다.
- 완료 callback은 보충 원천 저장과 학생 11시 예약 취소를 조립하지만 이번 변경은 화면 wrapper뿐이다. safe browser는 확인창을 열고 취소만 하며 실제 저장/provider 행동은 없다.
- 공통 footer는 12개, 기존 action wrapper는 5개다. 다음은 일정 저장과 알림 예약 결과가 함께 보이는 `SupplementScheduleChangeConfirmModal`을 별도 단위로 검토한다.

## 2026-08-03 P2-2 Solapi 제어창 공통 shell

- `SupplementNotificationControlModal`을 공통 `Modal`/`ModalFooter`로 옮겨 모든 dialog 41개가 공통 shell을 사용한다. 기존 접근성 이름, busy X/Escape 차단, 3개 카드, wide/safe-area class를 보존했다.
- 개별 예약·일괄 취소 callback과 provider feedback은 바꾸지 않았다. safe browser는 알림 행동이 차단된 가상 fixture에서 모바일 viewport와 하단 닫기만 확인한다. 실제 Solapi 행동은 없다.
- 공통 footer는 11개, 기존 action wrapper는 6개다. 다음은 다중 원천 확인 footer를 한 화면씩 검토한다.

## 2026-08-03 P2-1 ReportModal footer

- 보고서의 `스냅샷 저장`·`모의 발송` 버튼을 공통 `ModalFooter`로 옮겼다. 문구·순서·saving 잠금·callback과 인증/CAS/재조회 저장 계약은 그대로다.
- 공통 footer는 10개, 기존 action wrapper는 7개다. 다음 P2-2는 Solapi 예약·취소 제어창의 shell만 공통화하고 provider 행동은 실행하거나 변경하지 않는다.

## 2026-08-03 P2 modal follow-up inventory

- dialog 41개 중 공통 `Modal` 경로는 40개(직접 34, 주입 6)다. bespoke 예외는 실제 Solapi 예약·취소 callback을 받는 `SupplementNotificationControlModal` 1개다.
- 공통 footer는 9개이고 기존 `modalActions` wrapper 8개가 남았다. 본문 다중 작업 바와 다중 원천 확인창을 footer 이름만 보고 일괄 이동하지 않는다. 공통 상태 vocabulary는 `idle/dirty/saving/verifying/saved/failed`로 고정했다.
- 다음 P2-1은 실제 알림이 없는 `ReportModal` footer다. P2-2에서 Solapi 제어창의 shell만 공통화하고 callback identity·busy 닫기 차단·3개 카드·safe-area layout을 보존한다. 실제 provider 행동은 실행하지 않는다.

## 2026-08-03 보고서 snapshot 명시 저장 신뢰성

- 보고서 snapshot은 공용 자동저장에서 빠졌고, 교사 인증 전용 API가 `app_state.reportSnapshots`의 `updated_at` CAS와 Supabase 재조회를 완료한 뒤에만 App 원천을 교체한다. 기존 snapshot ID도 함께 보존되는지 확인한다.
- 결과 불명 재시도는 stable report ID로 기존 한 건을 회수한다. 충돌·검증 실패는 modal draft와 실패 표시를 유지하고 저장 중 닫기·중복 행동을 잠근다. `모의 발송`은 실제 알림을 실행하지 않고 저장 상태만 기록한다.
- 검증: lesson `20/20`, runtime lint, `check:fast`, production `827/827`, build `407 modules`·main `944.35 kB`·lazy `12/12`, safe browser `40/40`. 운영 데이터·실제 알림·SQL·유료 호출은 사용하지 않았다.
- P1 저장 신뢰성 목록은 이 단위로 닫는다. 다음 순서는 P2 modal inventory이며 저장·출결·알림 callback 의미는 inventory와 섞지 않는다.

## 2026-08-03 자료함 private Storage 저장 신뢰성

- 자료 파일은 private bucket의 stable ID·생성 토큰·내용 해시 경로로 업로드하고 검증된 메타데이터 row에 Storage 참조를 저장한다. 같은 파일 재시도는 중복 생성하지 않고, 새 파일은 별도 해시 경로로 수렴한다.
- 업로드 뒤 row 실패는 새 객체를 정리한다. 삭제는 파일 백업 뒤 Storage와 row CAS를 순서대로 처리하며 row 충돌 시 파일을 원경로에 복구한다. 파일 열기는 교사 또는 공개 대상 학생·학부모 bearer와 서버 공개범위 검사를 통과해야 서명 URL을 받는다.
- 저장 조립 모듈은 Vercel이 별도 함수로 세지 않는 `src/domains/resources`에 두고, production inventory가 `api/**/*.js` 12개 한도를 고정한다.
- 검증: lesson `19/19`, runtime lint, teacher owner audit, `check:fast`, scenario·production `827/827`, build `403 modules`·main 예산 통과·lazy `12/12`, 집중 browser `2/2`, 전체 safe browser `39/39`. 안전 fixture만 사용했고 운영 Supabase·Storage·실제 알림·SQL·유료 호출은 없었다.
- 다음 P1은 보고서 snapshot의 명시 저장·CAS·실패 복구다.

## 2026-08-03 자료함 메타데이터 저장 신뢰성

- 자료 등록은 stable ID·생성 토큰 insert-only와 Supabase readback 뒤에만 목록에 표시한다. 응답 유실 뒤 초안을 수정해 다시 저장하면 첫 행을 회수한 새 버전에 최신 초안을 CAS 반영하며, 생성 토큰이 다른 중복 ID는 충돌로 남긴다.
- 삭제는 행의 `updated_at` CAS와 삭제 후 전체 목록 재조회 뒤에만 UI에서 제거한다. 저장 중 폼·삭제를 잠그고 실패 시 등록 초안과 기존 행을 유지하며 saving/saved/failed 상태를 표시한다.
- 현재 파일 선택은 파일명을 적는 단계일 뿐 파일 내용 업로드가 아님을 화면에 표시했다. 다음 P1은 실제 파일 Storage 업로드·열기·삭제의 부분실패 복구이고, 그 뒤 보고서 snapshot 명시 저장을 진행한다.
- 검증: lesson `18/18`, runtime lint, scenario·production `826/826`, build `402 modules`·main `944.43 kB`·lazy `12/12`, 집중 browser `1/1`, 전체 safe browser `38/38`. 운영 데이터·실제 알림·Storage·SQL·유료 호출은 사용하지 않았다.

## 2026-08-03 결석보강·정규수업 연속 출결

- 같은 학생의 결석보강 종료 뒤 정규수업이 30분 이내에 바로 이어지면 키오스크가 한 방문으로 묶는다. 보강 등원 한 번과 정규수업 뒤 최종 하원 한 번만 누르고, 확인 모달에서 묶이는 두 수업을 먼저 보여준다.
- 두 수업일지는 versioned rows plan으로 함께 저장·재조회한다. 등원/하원시각은 같지만 지각 여부는 각 수업 시작시각으로 계산한다. 중간의 다른 수업, 31분 이상 간격, 숙제보충·특강은 묶지 않는다.
- 출결 이벤트와 알림 큐는 최초 등원·최종 하원 각각 한 건만 만든다. 실제 Solapi 발송은 실행하지 않았고 safe browser에서 가상 이벤트 2건과 두 기록의 최종 상태를 확인했다.
- 검증: lesson `17/17`, runtime lint, `check:fast`, production `825/825`, build `399 modules`·main `943.52 kB`·lazy `12/12`, 집중 browser `2/2`, 전체 safe browser `37/37`.

## 2026-08-03 교사 숙제 확인 상태 저장 신뢰성

- `숙제현황` 확인 상태는 기존 versioned 숙제 행 API로 저장한다. `updated_at` CAS와 Supabase 재조회 성공 뒤에만 App 원천을 교체하고, 그 전에는 이전 select 값을 유지한다.
- 행별 저장 중 잠금과 saving/saved/failed 피드백을 추가했다. 충돌·실패는 서버 원천을 낙관적으로 덮지 않으며 성공은 안전 브라우저 새로고침으로 지속성을 확인한다.
- 학생 포털 관련 저장은 기존 인증·readback 계약을 재확인했으며 변경하지 않았다. `확인할 숙제` 별도 요청은 사용자 직접 해결로 처리해 닫힌 PR #54를 통합하지 않는다. 다음 P1은 자료함 등록·삭제·파일 원천, 이후 보고서 snapshot 저장이다.
- 검증: lesson `16/16`, runtime lint, `check:fast`, scenario·production `824/824`, build `399 modules`·main `943.16 kB`·lazy `12/12`, safe browser `36/36`.

## 2026-08-03 결석보강 수업일지 통일 + 보충 일정 source save

- 결석보강은 일반 수업일지와 같은 modal shell·학생 기록 표·수정/저장·알림 구조로 연다. 헤더 아래에는 원 결석 수업 날짜·반·시간·사유만 추가하며 숙제보충 전용 상세는 그대로다.

- `lessons + makeup_tasks` 보충 일정 저장을 단일 API 계획으로 묶었다. 각 원천의 insert-only/CAS와 Supabase 재조회가 모두 성공해야 화면을 갱신하고, 그 뒤에만 기존 notification orchestration을 실행한다.
- 응답 유실 뒤 날짜·시간·메모가 바뀌어도 logical task key로 최초 audit를 회수한 뒤 최신 draft를 새 version에 후속 CAS 저장한다. 중간 실패는 역순 CAS 보상하고 최신 변경을 보호한다. provider 실패는 source saved·notification failed·provider-only 재시도로 분리한다.
- Vercel Node에서 초기 main 예산을 52 bytes 넘긴 알림 적용 함수를 저장 뒤 동적 chunk로 옮겨 예산을 올리지 않고 main을 `942.19 kB`로 낮췄다. 검증: supplement `10/10`, nested lesson boundary, lint, `check:fast`, production `823/823`, build `396 modules`·lazy `12/12`, safe browser `34/34`. 운영 데이터·실제 알림·SQL·유료 호출은 사용하지 않았다.
- 저장 단위 main 통합 뒤 UI branch에 exact main을 merge했다. 결합 검증은 lesson `15/15`, supplement `10/10`, lint, production `823/823`, build `398 modules`·main `942.19 kB`·lazy `12/12`, 집중 browser `1/1`, 전체 safe browser `35/35`다. PR exact-head CI·Vercel을 확인한 뒤 main 통합·배포한다.

## 2026-08-03 보충·알림 원천 reconcile inventory

- 보충 상세는 `makeup_tasks` 정방향 링크, `lessons` 역방향 원천과 실제 일정, 미발송 `notification_jobs`를 함께 대조한다. 누락·오래된 링크·중복·다른 원천·일정 불일치·이전 일정 예약은 경고로 표시하고 일정 저장/새 예약을 막는다.
- 정상 연결과 의도적인 `needsLessonResync`는 기존 일정 생성·변경 흐름을 유지한다. 기존 예약 확인·취소 화면은 열 수 있지만 자동 복구·Solapi 행동은 실행하지 않았다.
- 검증: supplement `8/8`, notification `7/7`, runtime lint, `check:fast`, production `823/823`, build `394 modules`·main `944.45 kB`·lazy `12/12`, safe browser `33/33`.
- 다음 단위는 `lessons + makeup_tasks` 일정 저장의 versioned CAS·Supabase 재조회·부분실패 복구와 provider 후속 단계 분리다.

## 2026-08-03 수업일지 등원보충 재시도 신뢰성

- 등원보충 초안은 학생·원 숙제·task 유형 기반 stable ID를 사용한다. 전용 API가 신규 insert-only·기존 `updated_at` CAS·Supabase 재조회를 수행하며, 응답 유실 재시도는 같은 항목 한 건을 회수한다.
- 타 화면 최신 변경은 409로 보호하고 수업일지 draft를 유지한다. 기록·숙제 저장과 보충 저장은 계속 별도 stage이며 실제 수업일지 일정·`notification_jobs`·Solapi 예약/취소/발송은 이 단위에서 실행하지 않았다.
- 검증: lesson `15/15`, runtime lint, `check:fast`, production `823/823`, build `393 modules`·main `944.45 kB`·lazy `12/12`, safe browser `32/32`.
- 다음 단위는 `makeup_tasks`·연결 `lessons`·`notification_jobs` 읽기/판정 reconcile과 미연결·오작동 버튼 inventory다. 실제 provider 행동은 사람 gate다.

## 2026-08-03 수업일지 기록·숙제 다중 행 저장 신뢰성

- `lesson_student_records`와 숙제 변경을 `/api/lesson-journal/rows/save`의 한 versioned plan으로 저장한다. 행별 CAS/insert-only·Supabase 재조회·동일 결과 재시도·중간 실패 역순 보상 뒤에만 App 원천을 갱신한다.
- stale 화면은 덮어쓰지 않고 draft를 유지한다. rollback 중 더 최신 행도 보호하며, 기록·숙제 완료 뒤 별도 등원보충 단계가 실패해도 이미 검증된 기록 save state는 유지한다.
- 검증: lesson `14/14`, runtime lint, `check:fast`, production `823/823`, build `392 modules`·main `944.10 kB`·lazy `12/12`, safe browser `31/31`. 운영 side effect는 실행하지 않았다.
- 다음 단위는 등원보충 초안 stable request identity와 보충·알림 다중 원천 reconcile이다.

## 2026-08-03 수업 복사·취소·되돌리기 저장 신뢰성

- 수업 복사·취소·복구·복사 되돌리기는 `lessons`와 복사 숙제를 하나의 versioned action으로 저장한다. CAS/insert-only·Supabase 재조회·중간 실패 역순 보상 뒤에만 UI/undo를 갱신한다.
- 결과 불명 복사는 최초 lesson ID·숙제 계획으로 재시도한다. 복사 후 record·예상 밖 homework·notification job이 연결되면 자동 undo를 막고, 취소 복구는 현재 서버 record·homework를 다시 읽는다. provider side effect는 없다.
- 검증: lesson `13/13`, runtime lint, `check:fast`, production `823/823`, build `392 modules`·main `944.90 kB`·lazy `12/12`, safe browser `30/30`.
- 다음 단위는 수업일지 record·homework 다중 행 저장의 행별 CAS·부분성공 복구다.

## 2026-08-03 학사일정 파생 시험행·직전수업 저장 신뢰성

- 시험관리 파생 일정은 `exam_prep_rows`와 연결 `preExam lessons`를 한 versioned plan으로 저장한다. CAS·insert-only·Supabase 재조회·동일 요청 재시도·중간 실패 역순 보상 뒤에만 UI를 갱신한다.
- 충돌·결과 불명·복구 불일치에서는 모달과 입력을 유지한다. 수동 보호/자동생성 제외 수업, 연결 record·homework·notification job은 자동 변경·삭제하지 않으며 provider side effect도 실행하지 않는다.
- 검증: lesson `12/12`, runtime lint, `check:fast`, production `823/823`, build `390 modules`·main `944.84 kB`·lazy `12/12`, safe browser `28/28`.
- 다음 단위는 수업일지 다중 행·복사·되돌리기 저장 gate다.

## 2026-08-03 수동 학사일정 저장 신뢰성

- 수동 학사일정 등록은 고정 ID insert-only, 수정·삭제는 일정별 `updated_at` CAS를 사용한다. 서버와 App의 후속 GET이 Supabase 원천과 일치해야 화면 목록을 갱신한다.
- 결과 불명 신규 저장은 같은 ID로 idempotent 재시도한다. 충돌·실패에서는 draft와 모달을 유지하고 저장 중 편집·닫기를 막는다.
- 검증: lesson `11/11`, runtime lint, `check:fast`, production `823/823`, build `388 modules`·main `944.93 kB`·lazy `12/12`, safe browser `27/27`. 운영 side effect는 실행하지 않았다.
- 다음 단위는 시험관리 행과 파생 직전수업의 학사일정 연동 저장 gate다. 수업일지 다중 행·복사·되돌리기는 그 뒤 별도 단위로 진행한다.

## 2026-08-03 반 명단 저장 신뢰성

- 학생 추가·반 이동·반관리·퇴원은 학생 원천과 미래 수업 명단을 한 versioned save plan으로 저장한다. 기존 행 CAS·신규 insert-only, 중간 실패의 역순 보상, 성공/복구의 Supabase 재조회 대조 뒤에만 UI를 갱신한다.
- 실패·timeout·cleanup 불일치에서는 현재 입력과 모달을 유지한다. 새 학생은 재시도에서도 같은 ID를 사용하고, 과거 수업과 변경 대상 밖 수동 명단은 보존한다.
- 검증: student `13/13`, runtime lint, `check:fast`, production `823/823`, build `386 modules`·main `944.91 kB`·lazy `12/12`, safe browser `26/26`. 운영 데이터·실제 알림·SQL·유료 호출은 사용하지 않았다.
- 다음 단위는 학사일정 파생 저장과 수업일지 다중 행·복사·되돌리기의 다중 원천 저장 gate다.

## 2026-08-03 개별 학생 저장 신뢰성

- 신규 수동/Tally/특강 학생은 insert-only, 기존 목록 행·프로필·Tally/특강 반영·퇴원 취소는 `updated_at` CAS와 Supabase 재조회 일치 뒤에만 완료한다. 중복 ID/로그인, 다른 화면 변경·삭제, 결과 불명 응답은 현재 입력을 보존한 채 실패한다.
- 목록 행과 프로필은 저장 중 후속 입력을 새 서버 버전으로 재기준화하고 재저장을 안내한다. 신규 학생은 실패 시 모달 form을 유지하며 저장 확인 전 닫기나 탭 전환이 차단된다.
- 검증: student `12/12`, runtime lint, scenario/production `823/823`, build `384 modules`·lazy `12/12`, safe browser `25/25`. 운영 데이터·실제 알림·SQL·유료 호출은 사용하지 않았다.
- 다음 단위는 반 명단 저장 gate다. 학생 추가·반 이동·반관리·퇴원에서 미래 수업 명단과 학생 반 필드가 함께 바뀌는 ordered persistence와 부분실패 복구를 별도로 점검한다.

## 2026-08-03 Tally 후보 입력 저장 신뢰성

- Tally 신규생 후보 입력은 후보별 요청 직렬화·최신 draft coalesce·`updated_at` CAS·Supabase 재조회 확인을 거쳐 저장 완료로 처리한다. 첫 저장 중 후속 입력은 성공 응답의 새 버전으로 재기준화해 최신값을 이어서 저장한다.
- 다중 탭·기기 충돌, 삭제, 결과 불명 실패는 자동 병합·재전송하지 않고 현재 입력과 실패 상태를 유지한다. 정식 학생 등록은 후보 입력 저장 완료를 기다리며 진행 중 입력을 잠근다.
- 전용 API/controller와 Supabase REST 모형, 안전 브라우저의 빠른 연속 입력·충돌 입력 보존을 확인했다. 검증은 student `11/11`, runtime lint, `check:fast`, production `823/823`, build `382 modules`·lazy `12/12`, safe browser `22/22`다.
- 학생 원천 저장·미래 수업 명단 로직은 변경하지 않았다. 다음 단위는 학생 저장 gate이며 이후 반 명단 저장 gate를 별도로 점검한다.

## 2026-08-03 시험정보 저장 신뢰성 후속

- 시험정보 행 저장은 브라우저 직렬화·최신값 coalesce에 더해 행별 `updated_at` CAS와 Supabase 저장 후 재조회를 완료했다. 성공 응답 중 들어온 최신 입력은 새 버전만 합쳐 보존하며, 충돌 시 자동 병합·재전송하지 않고 화면 입력과 실패 상태를 유지한다.
- 일반 자동저장은 삭제된 기존 행을 재생성하지 않는다. 시험정보 삭제 orchestration의 감사 rollback만 `allowRestore`를 명시해 복구할 수 있다.
- Supabase REST 모형과 안전 브라우저에서 정상 CAS, 구버전 차단, 삭제 행 차단/감사 복구, 빠른 후속 입력 재기준화, 충돌 입력 보존을 확인했다.
- 첫 Vercel preview가 새 `api/domain` helper까지 서버리스 함수로 집계해 Hobby 12개 제한으로 실패한 것을 확인하고, 순수 helper를 `src/domains/exams`로 이동해 API runtime 파일을 12개로 복원했다.
- 검증: 전용 fixture, runtime lint, `check:fast`, production `822/822`, build `380 modules`·lazy `12/12`, 격리 safe browser `20/20`. 운영 side effect는 실행하지 않았다.
- 다음 단위는 학생 신규/Tally 후보 입력 경쟁 방지다. 그 뒤 학생 저장과 반 명단 저장 gate를 별도 단위로 진행한다.

## 2026-08-03 자동 작업

- 자동화 설정은 실행 시작 시 서울 날짜 제목을 우선 적용하고 실패/응답 부재 때 한 번 재시도하도록 고정했다. 1~3번 작업은 사람 Gate가 없고 main 불변·동시 owner 없음·exact-head green·fast-forward 조건을 모두 만족하면 AI가 main CI·배포·안전 smoke까지 자동 완료한다.
- main 변경·충돌·동시 통합 징후가 있으면 자동 rebase/force 없이 branch에서 멈춘다. 4번 사람 Gate와 운영 side effect는 기존처럼 자동 실행하지 않는다.
- 3번 기능·개선으로 시험정보 행 자동저장 요청을 브라우저 전체에서 직렬화했다. 진행 중 같은 행의 후속 입력은 최신 row만 남겨 다음 bulk 요청으로 보내며, 최신 입력이 끝날 때까지 행 상태를 `저장 중`으로 유지한다.
- 전용 controller fixture는 중복값 생략, bulk 내부 최신 row 선택, 요청 비중첩, 진행 중 coalesce, 실패 중 최신 입력 보존과 최종 실패 상태를 검증한다.
- 안전 API에 시험정보 row·bulk 저장 fixture를 추가하고, 첫 요청 지연 중 3회 입력 후 마지막 값만 두 번째 요청으로 저장되는 브라우저 경로를 확인했다.
- 다음 저장 신뢰성 단위는 시험정보 row의 `updated_at` CAS와 저장 뒤 Supabase 재조회다. Tally 후보 입력 경쟁 방지는 그와 분리한다.
- 운영 Supabase 쓰기, 알림 발송·예약·취소, Storage, 유료 AI, 운영 SQL은 실행하지 않았다.
- 검증: controller·API 전용 fixture, runtime lint, scenario·production `821/821`, build `380 modules`·lazy chunk `12/12`, 격리 safe browser `19/19` 통과.

## 어제까지 완료

- 개발 canonical 경로와 중복 clone 경고를 자동 진단한다.
- 안전한 가상 로컬 실행, runtime lint, client error reporter, browser smoke, 요약형 production test를 추가했다.
- 장문 지침은 archive하고 현재 상태·큐·계약 문서로 분리했다.
- 매일 오전 9시 독립 자동 task를 등록했다. 자동 작업은 전용 clone과 날짜별 `codex/` branch만 사용한다.

## 오늘 자동 작업

- 3차 리팩터링 3-0 기준선을 최신 main에서 측정하고 5개 핵심 도메인의 10초 이내 fast fixture 경로와 검증 정책을 추가했다.
- 3-1 첫 단위로 Notification Center top-level 화면을 도메인 파일로 옮겼다. 저장·발송 handler와 특강 panel owner는 유지하고 App runtime binding을 teacher view adapter로 명시했다.
- 3-1 두 번째 단위로 Teacher Lesson Hub 화면 조립을 lesson 도메인 파일로 옮겼다. 달력 local state만 화면이 소유하고 수업일지 저장·알림 side-effect callback 및 상세 화면 owner는 App에 유지했다.
- 3-1 세 번째 단위로 Lesson Journal Detail 화면을 lesson 도메인 파일로 옮겼다. 화면 local draft·overlay·예약 표시 상태만 새 파일에서 조립하고, 저장·삭제·알림 side effect callback과 OS 예약 조회 transport는 App에 유지했다.
- 3-2 첫 단위로 수업일지 record·homework·makeup local draft와 성공/실패 전이를 전용 controller hook으로 묶었다. App 저장·Supabase 재조회 owner는 유지한다. 저장 중 후속 입력은 revision guard로 보존하고 재저장을 안내하며, 실패·부분저장 수정본 보존과 다른 수업 응답 격리를 TARGET/CONTROL 및 지연 API 안전 브라우저 동선으로 확인했다.
- 3-2 두 번째 단위로 수업일지 persistence 10개와 provider/transport 7개 callback을 순수 effect adapter 계약으로 묶었다. 독립 검토에서 실제 Solapi 예약·취소까지 조정하는 알림 계획 적용의 분류를 바로잡아 provider 표면으로 옮겼다. App의 실제 저장·삭제·AI·Solapi·재조회 owner는 유지하고 Hub는 adapter 하나만 상세 화면에 전달한다.
- 3-2 세 번째 단위로 수업 등록·수정 모달의 local draft·validation·저장 표시 controller를 lesson 도메인 파일로 옮겼다. App의 bulk 저장·Supabase 재조회·휴강 preflight callback은 유지했고 이전 controller 본문과 문자 단위로 대조했다.
- 3-3에서 기존 보충 draft·일정·취소·알림 제어 controller 분리를 재대조하고, 화면에 낱개로 전달되던 8개 effect callback을 persistence 3개·provider 2개·orchestration 3개 adapter 표면으로 묶었다. 실제 저장·Supabase 재조회·Solapi effect는 App owner를 유지한다.
- 3-4 첫 단위로 학생관리의 16개 callback을 draft·persistence·deletion·lifecycle·audit adapter 표면으로 묶었다. 실제 학생 저장·Supabase 재조회·퇴원·복구·영구 삭제·오류 복구는 App owner를 유지한다.
- 3-4 두 번째 단위로 학생 프로필 화면·오류 경계·전용 helper를 `StudentProfileModal.jsx`로 물리 분리했다. 프로필 본문은 기준 commit과 동일하고 callback 저장 의미도 유지한다. `StudentManager.jsx`는 994줄로 줄었다.
- 3-4 세 번째 단위로 퇴원 확인·인계 PDF·단일/일괄 영구삭제 overlay를 `StudentLifecycleOverlays.jsx`로 물리 분리했다. 11,029자 JSX는 기존과 동일하고 audit·복원·삭제·PDF controller는 Manager owner를 유지한다.
- 3-4 마지막 단위로 퇴원생 목록·정렬·선택 toolbar를 `StudentWithdrawnList.jsx`로 물리 분리했다. 20개 prop identity와 local dirty/선택/lifecycle controller owner를 유지하며 3-4 Student 경계를 닫았다.
- 3-5 첫 단위로 Notification Center 두 진입 경로의 flat callback 13개를 history provider/transport와 특강 persistence/deletion/orchestration/navigation effect 표면으로 묶었다. 두 refresh identity와 App의 실제 저장·재조회·Solapi effect owner, 화면 내부 공지 draft/request controller는 유지한다.
- 3-5 두 번째 단위로 공지 수신자·작성·이력·취소·reconcile 조립을 `useNotificationNoticeController`로 이동했다. `NotificationCenter`는 144줄 render owner가 됐고 이력 탭·local draft 미리보기·특강관리 이동 safe browser를 추가해 Notification 경계를 닫았다.
- 3-6 첫 단위로 월별 정산 선택 월·local recovery draft·계산 selector·교사 확정값 저장 조립을 `useMonthlySettlementController`로 이동했다. App의 Supabase 저장·재조회 owner와 정산 계산 규칙은 유지하고, 저장 중 후속 입력을 month/revision guard와 지연 safe browser로 보존했다.
- 3-6 closeout으로 월별 출결·수업 달력과 정규 정산 표를 순수 view component로 분리했다. 기준 main JSX와 문자 단위 동일하고 기존 controller·callback·App Supabase owner를 유지한다. Panel은 184줄 조립 owner가 되어 Settlement 경계를 닫았다.
- 3-7 첫 단위로 이미 분리된 Lesson·Supplement·Student·Notification·Settlement 5개 화면을 lazy component로 연결했다. main JS는 1,656.92→1,379.15 kB, gzip은 427.24→351.03 kB로 줄었고 build가 1.50 MB 예산과 5개 chunk를 고정한다. safe browser는 chunk 지연 로딩과 1회 실패→오류 번호→안전 새로고침 복구를 포함해 12/12 통과했다.
- 3-7 두 번째 단위로 시험분석 helper·화면 4,612줄을 도메인 파일로 분리해 여섯 번째 lazy chunk로 연결했다. 13개 request owner는 App에 유지했다. main JS는 1,181.41 kB, gzip은 296.06 kB로 줄었고 build는 1.25 MB 예산·6/6 chunk를 검사한다. 유료 행동 없는 시험분석 지연 진입을 포함해 safe browser 13/13을 통과했다.
- 3-7 세 번째 단위로 오답관리·시험지관리·자료함·숙제현황 4개 화면 1,335줄을 39.49 kB shared lazy chunk로 분리했다. App runtime 10개와 저장 callback owner를 유지했고 main JS는 1,142.78 kB, gzip은 285.71 kB다. 안전한 지연 진입을 포함해 browser 14/14를 통과했다.
- 3-7 네 번째 단위로 학사일정·반관리·수업연구·AI 도구 4개 화면 1,509줄을 51.98 kB shared lazy chunk로 분리했다. App runtime 24개와 저장 callback owner를 유지했고 main JS는 1,092.41 kB, gzip은 272.16 kB다. 안전한 지연 진입을 포함해 browser 15/15를 통과했다.
- 3-7 다섯 번째 단위로 특강 안내문과 첫 화면·수업일지 운영 알림 화면 1,029줄을 94.24 kB shared lazy chunk로 분리했다. App runtime 15개와 저장·삭제 callback owner를 유지했고 main JS는 999.16 kB, gzip은 248.14 kB다. lazy element type guard 회귀를 safe browser에서 발견해 최소 교정했고 지연 진입을 포함해 browser 16/16을 통과했다.
- 3-7 여섯 번째 단위로 시험 대비·설정 화면을 각각 lazy chunk로 분리했다. helper/설정 transport App owner와 화면 본문을 보존했고 main JS는 956.13 kB, gzip은 237.03 kB, App은 507,358 bytes다. Babel의 App 500 KB 경고가 사라졌고 부작용 없는 지연 진입을 포함해 browser 17/17을 통과했다.
- 3-7 마지막 단위로 보충 전용 수업 상세와 수업 준비 메모를 22.40 kB shared nested lazy chunk로 분리했다. pure helper 13개와 실제 저장·알림 callback owner를 유지했고 main JS는 934.69 kB, gzip은 231.48 kB다. 3-0 대비 main 43.1%·gzip 45.3% 감소와 App Babel 경고 제거를 수치로 고정했으며 production 821/821·safe browser 18/18로 3-7을 닫는다.
- 3-8에서 도메인별 상태 owner·저장 원천·외부 side effect·오류 복구와 의도적 transport 예외를 `docs/app-refactor-third-pass-closeout.md` 및 전용 fixture로 고정했다. 3차 리팩터링 3-0~3-8은 완료 상태로 닫고 자동 재개하지 않는다.
- 종료 검증은 runtime lint, 도메인 fast 39/39, teacher/closeout 경계, scenario·production 821/821, build 380 modules·lazy chunk 12/12, 격리 safe browser 18/18을 통과했다. 운영 side effect는 실행하지 않았다.
- 로컬 browser smoke의 Worktree 격리 runner를 기본 명령으로 사용한다. 다음 작업은 deferred queue의 제품·저장 신뢰성 우선순위에서 별도로 선택한다.

- `app_state` 자동저장 12개 key의 500ms debounce, request ID, API upsert, `updated_at` 경계를 inventory했다.
- 역순 도착 시 오래된 요청이 최신값을 덮는 fixture를 추가하고 Production checks에 연결했다.
- 전용 inventory, runtime lint, production `809/809`, build `345 modules`, safe browser smoke `2/2`를 통과했다.
- 운영 쓰기·발송·예약·취소·유료 호출·SQL 적용은 없었다.

## 사용자 후속 수정

- 월별 정산은 서울 기준 1~2일에 지난달, 3일부터 이번 달을 기본 선택하며, 정산월·저장 상태·PDF 버튼은 한 반응형 카드에 표시한다.
- 월별 정산 표의 `월별 스케줄`, `정산 처리` 열은 제거했다. 기존 저장 원천·계산은 보존하고, PDF에서는 학생별 최종 정규 횟수만 남기며 그 횟수의 합산은 제거했다.
- 최종 정규 횟수 상세 모달에는 명시적 저장·Supabase 재조회 확인만 둔다. 저장 후 모달을 닫고 바깥 `횟수·금액 PDF`를 열며, 보고서의 `인쇄하기` 버튼으로 브라우저 인쇄를 실행한다. 안전 브라우저에서 입력·저장·모달 닫기·PDF 값·인쇄 버튼까지 검증했다.
- 후속 UI 요청도 별도 기능·개선 단위로 완료했다. 수업 등록 행동은 월 이동 박스 안 오른쪽으로 이동했고, 월별 출결·수업 모달은 데스크톱 최대 1320px로 넓혀 1280px 안전 화면에서 달력 가로 스크롤이 없음을 검증했다.

- 특강 정산 탭은 수강 계획과 실제 특강 수업일지를 대조해 출결과 일지 누락을 표시하고, 학생 프로파일은 월별 정규·특강 출결을 함께 보여준다.
- 횟수·시수 달력 모달에서 시스템 계산 횟수와 교사 확정 최종 정규 횟수를 대조한다. 확정값은 수업일지가 없는 경우에도 신입·퇴원 금액과 PDF에 사용하고 월정액 금액은 유지하며, 요청 차감·추가 입력 열은 제거했다.
- 월별 정산 보고서는 `이름·최종 정규 횟수·금액` 및 합계만 PDF 인쇄하며 세부 출결·필터는 제외한다.
- 보강 시간은 정규 프로필 스케줄 대신 실제 보강 수업일지 시간을 사용하도록 교정했다. 최신 Phase 5 main 통합 뒤 정산·teacher-view 전용 fixture, runtime lint, scenario `810/810`, production `810/810`, build `352 modules`, 격리 safe browser `8/8`을 통과했고 운영 쓰기는 없었다.
- 7월 정산 운영 원천을 읽기 전용으로 분석해 신규생 회차제의 예정 시간표 의존과 해당 월 퇴원생의 고정 요금 유지가 원인임을 확인했다.
- 신규생은 수업일지의 정산 인정 정규 회차를 사용한다. 휴강은 보강 전에도 1회로 포함하고 연결 보강은 중복 계산하지 않으며, 기존 퇴원생은 교사 override가 없으면 자동 퇴원 비례로 계산한다. 출결 달력은 출석·결석·지각·공결·대기를 서로 다른 색으로 구분하고 대기는 미확정 상태로 표시한다.
- 학생별 행과 상세에는 휴강 포함, 연결 보강 추가 계산 제외, 대기 출결 미확정의 적용 회수를 별도 표기한다.
- 재계산 예상: 이채빈 5회·187,500원, 김형준 11회·412,500원, 이윤채 11회·385,000원, 김예나 13/14·417,857원.
- 정산 전용 fixture, runtime lint, production `810/810`, build `349 modules`, safe browser `5/5` 통과. 운영 snapshot은 저장하지 않았으므로 배포 뒤 사용자가 7월 화면을 확인하고 `월별 정산 저장`을 눌러야 한다.
- 첫 화면 운영 알림을 입력 폼과 별도로 접고 펼칠 수 있다.
- 보충관리 목록에 요일별·이름 가나다별 정렬을 추가했다.
- 보충 시간은 시/분 선택으로 분리했고 시를 고르면 `00분`이 기본이다.
- 결석보강 알림톡 3종은 한 화면에서 편집·일괄 저장한다. 학생 문구 수정은 학부모·당일 학생 문구에도 연동되어 3종 최종본으로 저장된다.
- Solapi 확인 모달은 학생·학부모·당일 학생 3종을 함께 보여 주고, 취소 가능한 예약을 한 번에 일괄 취소한다. 실제 취소·예약은 수행하지 않았다.
- 저장 상태 3종과 주요 행동은 결석보강 모달 하단 고정바에서 스크롤 위치와 무관하게 확인한다.
- 위 5개 사용자 수정은 정산 수정이 포함된 최신 main에 재배치해 관련 전용 테스트, notification/app_state 경계, production `810/810`, build `349 modules`, Worktree 격리 safe browser `7/7`을 통과했다.
- 숨겨진 달력 toolbar 안에 남아 사라졌던 `+ 수업 등록`과 조건부 `정규수업 열기`를 별도 표시 action bar로 긴급 복구했다.
- 숨겨진 달력 제어줄과 분리해 수업일지의 이전·다음 달 탐색을 복구했고 실제 월 단위 이동·말일 보정을 적용했다.
- 8월 1일 수업일지의 빈 교재·강의 내용 원인을 운영 원천에서 확인하고, 같은 반의 최신 비어 있지 않은 과거 기록을 필드별로 월 경계 너머까지 승계하도록 수정했다. 특강 기록은 분리된다.
- safe browser에 월 이동 왕복 회귀를 추가했다.
- safe browser에 직전 빈 기록을 건너뛰는 7월→8월 수업기록 승계 회귀를 추가했다.
- 매일 자동 task는 시작 시 서울 기준 날짜를 제목 앞에 붙이도록 자동화 프롬프트를 갱신했다.
- 최신 검증: 관련 전용 테스트, scenario `809/809`, runtime lint, build `346 modules`, safe browser 사용성 확인, production 전체 묶음 통과.
- 별도 `codex/app-high-risk-boundaries-phase1` worktree에서 App 고위험 5개 경계 inventory와 auth/session hook 분리를 완료했다. main에는 merge하지 않았으며, notification polling 중복/stale 응답과 hydration 전환 fixture가 남은 통합 위험이다.

## 다음 자동 실행 단위

- App 2차 리팩터링의 단계·검수·지연 보고 기준은 `docs/app-refactor-second-pass-plan.md`를 따른다.
- Phase 1 auth/session과 Phase 2 출결 polling·동기화는 main 통합 완료다.
- Phase 2에서 kiosk 날짜 rollover lifecycle을 출결 hook으로 이동하고 전용 fixture를 추가했다. safe browser가 TDZ 배치 오류를 발견해 최소 수정했으며 재실행 4/4가 통과했다.
- Phase 3는 PR #4로 main 통합 및 CI/배포 성공했다. Phase 4 app_state 동일 key 직렬화·`updated_at` CAS·Supabase 재조회 완료 판정을 구현하고 전체 자동검증을 통과했다.
- Phase 4와 사용자 수업일지·보충관리 수정은 main 통합과 CI·Vercel 배포가 완료됐다. Phase 5도 17개 teacher 화면 callback 조립을 `TeacherViewOutlet` adapter로 분리해 PR #9, merge commit `254cd0b1`로 main 통합했고 main CI·Vercel production이 성공했다.
- main 병합은 의미 변경·운영 side effect 없이 AI 리뷰와 전체 검사·PR CI·배포가 성공하면 AI가 판단해 진행한다.

1. `git status --short`가 clean이고 최신 main인지 확인한다.
2. 오늘 branch의 GitHub Actions 결과를 확인한다.
3. App 2차 리팩터링 Phase 1~5는 완료 상태로 유지하고 자동 재개하지 않는다.
4. App 3차 리팩터링 3-0~3-8은 완료 상태를 유지한다. 별도 제품 근거 없이 4차 리팩터링이나 남은 App 화면 분리를 자동 시작하지 않는다.
5. 운영 삭제·발송·예약·유료 AI·SQL 적용이 필요하면 구현을 넓히지 말고 정확한 사람 gate를 남긴다.

## 종료할 때

- 관련 검사와 build를 실행한다.
- `STATUS.md`, `current-worklog.md`, 이 파일을 짧게 갱신한다.
- 의도한 파일만 commit/push한다.

## 2026-08-04 긴급 handoff

- 4-7반 22:30 Solapi 예약 8건이 Render UTC 요일 오판으로 전부 명단 제외 취소됐다. 날짜-only 요일 계산과 UTC 회귀 fixture를 추가했다.
- 코드 배포 뒤 실제 예약은 교사가 `Solapi 예약 업데이트` 1회로 실행하고, 상단 `Solapi 반영 완료` 및 예약 확인의 학부모 4건·학생 4건을 대조한다.
