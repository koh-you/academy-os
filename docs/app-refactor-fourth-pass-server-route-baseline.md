# App/API 4차 리팩터링 4-3 server route 기준선

업데이트: 2026-08-05

## 목적

4-3은 `api/server.js`의 route registration, 인증, core data 조립, notification/provider 조립을 작은 registry로 나눈다. 이 문서는 이동 전에 route 순서와 현재 guard 의미, 원천 저장과 provider 부작용의 owner를 고정한다. 4-3a에서는 제품 runtime, API 응답, 운영 DB·Storage·알림·AI를 변경하거나 실행하지 않는다.

## 정량 기준선

| 항목 | 현재 값 |
| --- | ---: |
| `api/server.js` 물리 줄 수 | 7,941 |
| 직접 exact-path route | 120 |
| GET / POST / DELETE | 31 / 76 / 13 |
| `readJsonBody` 호출 표면 | 77 route/helper call + 정의 1 |
| `sendJson` 호출 표면 | 269 call + 정의 1 |
| session 또는 credential 의미가 있는 route | 15 |
| dispatch token 의미가 있는 route | 2 |

route signature의 현재 등록 순서는 SHA-256 `118af79f…de5`로 fixture에 고정한다. route를 registry로 옮길 때도 method/path, 첫 일치 우선순위, OPTIONS 선처리, 마지막 404 의미를 유지한다.

## route family inventory

| 후속 registry 후보 | route 수 | 현재 owner |
| --- | ---: | --- |
| system/auth/portal | 11 | server callback + session helper |
| app/core | 9 | server callback + `coreData` |
| exam analysis | 20 | server callback + exam pipeline + Storage/AI helper |
| student/intake/special lecture | 15 | server callback + `coreData` + Tally 조립 |
| lesson/attendance/supplement | 29 | server callback + `coreData` + attendance/provider 조립 |
| calendar/planning | 9 | server callback + `coreData` |
| resource | 6 | server callback + `coreData` + private Storage operation |
| notification/provider/admin seed | 20 | server callback + notification source/provider helper |
| comment AI | 1 | server callback + `commentPolish` |

합계는 120이다. `notification/provider/admin seed`는 향후 하나의 module로 합치라는 뜻이 아니라 현재 인접 route 구간을 나타낸다. source persistence, provider 실행, admin seed는 4-3/4-5에서 다시 분리한다.

## 인증 의미

| guard 종류 | route 수 | 계약 |
| --- | ---: | --- |
| login/current credential | 2 | 로그인 또는 교사 계정 변경 시 현재 credential 확인 |
| portal session | 7 | 학생·학부모 bearer 확인 뒤 portal source 접근 |
| teacher session | 4 | 교사 bearer 확인 뒤 보고서/자료 파일 변경 |
| teacher 또는 portal session | 2 | 등록된 시험 제출 파일·자료 파일만 signed URL 발급 |
| dispatch token 조건부 | 1 | dispatch override만 token 없이는 거부 |
| dispatch token 필수 | 1 | Slack 예약은 configured+valid token 필수 |

현재 여러 내부 운영 API는 route 자체의 session guard가 없다. 4-3은 이를 무조건 일괄 강화하지 않는다. 먼저 기존 App·safe API 호출 계약을 보존해 registry로 옮기고, 권한 정책 확대가 필요하면 별도 보안 기능 변경과 E2E로 다룬다.

## 상태·저장·부작용 경계

| 구분 | 4-3 owner |
| --- | --- |
| 원본 데이터 | Supabase row/Storage object; route registry가 소유하지 않음 |
| local draft | App/domain controller; server route 이동 대상 아님 |
| request context/body/response | `src/shared/server/httpRouteAdapter.js`; server가 allowed origins를 주입 |
| 인증/session | credential/session/dispatch helper; route action보다 먼저 실행 |
| API/DB 저장 | `coreData`, exam pipeline, versioned persistence operation의 CAS/readback/rollback |
| 파생 화면값 | client selector/view owner 유지 |
| provider side effect | Solapi·Slack·Tally·Storage·AI 호출; source 저장 성공과 별도 결과로 유지 |
| 오류 복구 | route의 status/code/current source 응답 + domain action의 draft/rollback 보존 |

## 연쇄 안전 단위

1. 4-3a: 이 기준선과 production fixture만 추가한다.
2. 4-3b: request context, JSON body, response와 CORS adapter를 pure module로 고정한다.
3. 4-3c: bearer/session token과 기존 teacher/portal guard adapter를 고정한다.
4. 4-3d: health/auth/portal/core read route registry를 이동한다.
5. 4-3e: student/lesson/supplement versioned write registry를 domain별로 이동한다.
6. 4-3f: exam analysis route registry를 이동한다.
7. 4-3g: notification source/job route와 provider/scheduler 조립을 분리한다.
8. 4-3h: route 120/120, auth 17/17, source/provider/error recovery 종료 감사를 수행한다.

각 runtime 이동은 route signature·order hash, 관련 contract/도메인 fixture, local full production, 필요한 safe browser를 통과한 뒤 exact-head CI와 main 배포까지 닫고 다음 단위로 넘어간다.

## 4-3b 완료 상태

- header lookup, allowed-origin parsing, JSON body parsing, CORS 선택과 JSON response를 `src/shared/server/httpRouteAdapter.js`로 이동했다.
- server는 allowed origins를 한 번 주입한 frozen adapter의 `getRequestHeader`·`readJsonBody`·`sendJson`을 사용한다. signed URL redirect도 같은 `getCorsOrigin`을 사용해 기존 fallback을 유지한다.
- 빈 body, chunked JSON, malformed JSON, 기본/개별 body limit와 connection destroy, wildcard/allowlist/첫 origin fallback, OPTIONS 204의 header/body를 전용 fixture로 고정했다.
- server는 7,902줄이 됐고 route 120개 signature/order, auth 17개 의미, source persistence와 provider owner는 이동하지 않았다. 다음은 session guard adapter다.

## 4-3c 완료 상태

- HMAC session token 생성, 8시간 교사/14일 portal expiry, timing-safe signature·role 검증과 request Authorization 해석을 `src/shared/server/sessionRouteGuard.js`로 이동했다.
- portal 7개, teacher 4개, teacher-or-portal 2개 route는 각각 `getPortalSession`, `getTeacherSession`, `getTeacherOrPortalSession`을 body parsing·source action 전에 호출한다.
- token 변조, secret 교체, 만료 직전/직후, raw/Bearer token과 mixed guard의 teacher 우선순위를 동작 fixture로 고정했다.
- teacher credential bootstrap과 Supabase 계정 조회, route 120개 order, DB/Storage/provider owner는 server에 유지했다. server는 7,842줄이며 다음은 첫 route registry다.

## 4-3d 완료 상태

- OPTIONS preflight와 `GET /health`, `POST /api/client-errors`, `GET /api/core/status`를 `src/shared/server/systemRouteRegistry.js`로 이동했다.
- registry가 route를 처리했는지 boolean으로 반환하고, 미일치 route만 기존 server 순서로 내려간다. 전역 inventory는 registry 3개 + server 직접 117개, 총 120개와 기존 order hash를 유지한다.
- client runtime error의 remote-address rate limit, 64 KiB body limit, normalize→report→202와 429/400 응답을 동작 fixture로 고정했다.
- 인증·DB write·Storage/provider owner는 이동하지 않았다. server는 7,811줄이며 다음은 auth/portal registry다.

## 4-3e 완료 상태

- `POST /api/auth/login`을 `src/shared/server/authLoginRouteRegistry.js`로 이동했다. system registry 다음·portal route 전에 dispatch해 기존 전역 순서를 유지한다.
- teacher/student/parent role 검증, loginId trim, credential action 선택, portal/teacher token과 account response, 미지원 403·예외 500을 동작 fixture로 고정했다.
- credential Supabase 조회/bootstrap과 password hash, HMAC token codec은 server/session guard owner로 유지했다. server는 7,775줄이며 다음은 teacher-account route다.

## 4-3f 완료 상태

- `POST /api/auth/teacher-account`를 `src/shared/server/teacherAccountRouteRegistry.js`로 이동하고 exam-post teacher 확인 뒤·app-core 전에 dispatch해 기존 order를 유지했다.
- Supabase service-role gate, current credential, login/password validation, 새 비밀번호/기존 비밀번호 선택, 저장 성공·401·503·500을 동작 fixture로 고정했다.
- PBKDF2 hash, teacher_accounts 조회/bootstrap/upsert와 반환 mapper는 server owner로 유지했다. server는 7,750줄이며 다음은 portal read route다.

## 4-3g 완료 상태

- `GET /api/portal-data`를 `src/shared/server/portalReadRouteRegistry.js`로 이동하고 login 다음·portal write 전에 dispatch해 기존 order를 유지했다.
- portal guard 선행, scoped source action, student/parent role 응답, 인증 없음 401·학생 없음 404·source 실패 500을 동작 fixture로 고정했다.
- 학생/수업/기록/숙제 filtering과 Supabase read owner는 server `getPortalData`에 유지했다. server는 7,738줄이며 다음은 portal write route다.

## 4-3h 완료 상태

- `POST /api/portal-state`, `/api/portal-homeworks/complete`, `/api/portal-questions`, `/api/portal-exam-post-submissions`를 `src/shared/server/portalWriteRouteRegistry.js`로 이동하고 portal read 다음·교사 제출 확인 전에 dispatch해 기존 순서를 유지했다.
- portal guard를 body 파싱·source action보다 먼저 실행하고 route별 payload mapping, 성공 응답, portal-state의 고정 500과 나머지 route의 `statusCode || 500` 의미를 동작 fixture로 고정했다.
- AppState·Homework·Question·ExamPost의 Supabase 저장·재조회, mutation lock과 오류 생성 owner는 server action에 유지했다. server는 7,685줄이며 다음은 교사 시험 후 제출 확인 route다.

## 4-3i 완료 상태

- `POST /api/exam-post-submissions/confirm`을 `src/shared/server/examPostConfirmRouteRegistry.js`로 이동하고 portal write 다음·teacher-account 전에 dispatch해 기존 순서를 유지했다.
- teacher guard를 body 파싱·source action보다 먼저 실행하고 payload identity, verified source 응답, 401과 `statusCode || 500` 의미를 동작 fixture로 고정했다.
- AppState의 시험 제출 확인 저장·전체 목록 재조회, mutation lock과 오류 생성 owner는 server `confirmExamPostSubmission`에 유지했다. server는 7,676줄이며 다음은 app/core read route다.

## 4-3j 완료 상태

- `GET /api/app-state`와 `GET /api/special-lecture-guides`를 `src/shared/server/appCoreReadRouteRegistry.js`로 이동하고 teacher-account 다음·app-state write 전에 dispatch해 기존 순서를 유지했다.
- app-state의 `includeRows=true` 선택 응답, guide 존재 flag·빈 배열 fallback, source 실패 500을 동작 fixture로 고정했다.
- Supabase AppState read와 민감 key filtering owner는 server `listAppState`에 유지했다. server는 7,648줄이며 다음은 app-state versioned write route다.

## 4-3k 완료 상태

- `POST /api/app-state`를 `src/shared/server/appStateWriteRouteRegistry.js`로 이동하고 app/core read 다음·report snapshot 전에 dispatch해 기존 순서를 유지했다.
- 공통 versioned parser, portal 전용 `examPostSubmissions`·`studentQuestions` 제외, `expectedUpdatedAt` CAS option, 성공과 code/field/status 오류를 동작 fixture로 고정했다.
- Supabase CAS/insert/readback·conflict owner는 server에 유지한 `upsertAppState`에 있다. server는 7,629줄이며 다음은 teacher-authenticated report snapshot write route다.

## 4-3l 완료 상태

- `POST /api/report-snapshots`를 `src/shared/server/reportSnapshotRouteRegistry.js`로 이동하고 app-state write 다음·test session read 전에 dispatch해 기존 순서를 유지했다.
- teacher guard 선행, 공통 versioned parser, `saveReportSnapshotWithVerification` 조립과 200/401/statusCode 오류를 동작 fixture로 고정했다.
- AppState source read/CAS/readback과 unknown-result retry owner는 기존 domain/server에 유지했다. server는 7,610줄이며 다음은 test session/attempt read route다.

## 4-3m 완료 상태

- `GET /api/test-sessions`와 `GET /api/test-attempts`를 `src/shared/server/testSessionReadRouteRegistry.js`로 이동하고 report snapshot 다음·test session write 전에 dispatch해 기존 순서를 유지했다.
- session의 `date` 우선·`testDate` alias와 class filter, attempt의 session/student filter, source success와 500을 동작 fixture로 고정했다.
- Supabase read owner는 core data의 `listTestSessions/listTestAttempts`에 유지했다. server는 7,591줄이며 다음은 test session write/delete route다.
