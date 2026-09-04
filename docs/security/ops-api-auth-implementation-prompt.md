# 운영 API 인증 경계 — 구현 핸드오프 프롬프트

브랜치: `codex/ops-api-auth-boundary-20260904` (origin/main 기준)
배경 감사: [ops-api-auth-audit.md](ops-api-auth-audit.md)

새 Codex / Claude Code 세션에 아래 `text` 블록을 그대로 붙여넣으세요. 이 브랜치를 체크아웃한 상태에서 시작해야 합니다.

---

```text
이 프로젝트는 academy-os입니다. 브랜치 codex/ops-api-auth-boundary-20260904 에서 작업합니다.

먼저 읽으세요:
- AGENTS.md
- docs/security/ops-api-auth-audit.md  (이번 작업의 근거 감사 — 라우트별 인증 현황 표 포함)
- docs/security/ops-api-auth-implementation-prompt.md  (이 문서)
- src/shared/server/sessionRouteGuard.js
- src/shared/server/httpRouteAdapter.js
- api/server.js 의 http.createServer 핸들러 (4786~5232행 부근)
- src/shared/contracts/versionedWriteRouteContracts.js

## 목표
배포된 api/server.js 가 사실상 공개 API인 상태를 고쳐서, 인증된 요청만 운영 데이터에
접근·변경하도록 만든다. 그리고 그 위에서 Claude/Codex 가 최소권한 토큰으로만 운영 데이터를
조사·수정할 수 있는 구조를 만든다.

## 절대 하지 말 것 (scope 밖)
- Supabase RLS 정책 재설계, 역할(권한) 세분화(교사 내부 role 나누기), teacher_accounts
  비밀번호 해싱 방식 변경 — 전부 별도 과제. 이번엔 API 인증 경계만.
- 운영 Supabase / 운영 Render 설정을 코드에서 바꾸지 말 것. 환경변수 설정, API_REQUIRE_AUTH
  활성화, 키 로테이션은 전부 사람(사용자) Gate. 필요한 값·절차를 문서로 정리해 사용자에게 요청.
- 실제 알림톡/Slack 발송, 유료 AI 호출, 운영 DB 대량 변경/삭제를 검증 목적으로도 실행하지 말 것.
  ALIMTALK_DRY_RUN 등 기존 안전 스위치 동작을 바꾸지 말 것.
- 비밀키 값을 로그·출력·커밋에 남기지 말 것.

## 크로스 브랜치 조율 (codex/multi-tenant-attendance-prototype-20260904)
멀티테넌트 작업 세션과 아래를 합의함. Phase 1 시작 전 그 브랜치 상태를 확인할 것:
- 교사 세션 토큰 payload에 `tenantId` (string, "tenant_default" | "tenant_<uuid>") 필드가
  추가되고 verify 경로에서 `request.__auth.tenantId` 로 전파된다 — 멀티테넌트 브랜치가 먼저
  넣는다. Phase 1 게이트는 그 payload 모양 위에서 동작.
- ops 토큰(role:"ops") payload 에도 같은 `tenantId` 필드를 넣는다. "전 테넌트, 운영자 전용"
  케이스는 문자열 sentinel 대신 별도 `crossTenant:true` 플래그로 표현하고, `tenantId` 없는
  ops 토큰은 `crossTenant:true` 없으면 게이트가 거절, 있으면 [ops-audit] 에 highrisk급 기록.
- 데이터 소유권(tenant_id 필터/RLS)은 이 작업 범위 밖. 이 작업은 인증(누가 호출 가능한가)만.
  서버는 계속 service-role 로 Supabase 접속(멀티테넌트는 앱 레이어에서 tenant_id 필터).

## 작업 방식
- AGENTS.md 원칙을 따른다: 한 번에 하나의 안전한 단위, worktree 격리, 시작 origin/main 불변,
  fast-forward only, force push 금지.
- 각 Phase 를 독립 PR 로 낸다. Phase 간 순서 의존 있음(0→1→2→3).
- 검증은 재현 fixture → 전용 테스트 → focused smoke → 필요한 build 순서.
- 문서: docs/security/ops-api-auth-audit.md 의 "구현 상태" 절을 갱신하고, docs/STATUS.md 에 한 줄.

────────────────────────────────────────────────────────
## Phase 0 — 전역 인증 게이트 (관찰 모드), 차단 없음
────────────────────────────────────────────────────────
파일: api/server.js (http.createServer 콜백 최상단, dispatchSystemRoute 호출 직전)

1. 단일 게이트 함수를 추가한다. 판정 로직:
   - 공개 허용(항상 통과):
       정확히 "GET /health", "POST /api/auth/login"
       prefix 로 "/api/portal-", "/api/intake/tally",
                "/api/special-lecture-applications/tally", "/api/exam-post-files"
   - dispatch 토큰 허용:
       "POST /api/notification-jobs/dispatch-due",
       "POST /api/notifications/slack-today-schedule/reserve"
       → getDispatchAuthState(request, {}).ok 이면 통과
   - 그 외:
       teacher = getTeacherSession(request)
       ops     = getOpsSession(request)   // Phase 1에서 구현, Phase 0에선 항상 null
       인증 성공이면 request.__auth = { kind, scope? } 세팅
2. process.env.API_REQUIRE_AUTH !== "true" 이면:
   - 절대 차단하지 않는다. 판정만 하고, 인증 실패였을 요청을 구조화 로그로 남긴다:
     console.info("[ops-audit]", JSON.stringify({
       ts, wouldBlock:true, method, path: pathname, hasTeacher, hasOps, hasDispatch,
       origin: request.headers.origin || null
     }))
   - 본문 원문·헤더 토큰 값은 로그 금지. 필요하면 sha256(body).slice(0,16) 만.
3. API_REQUIRE_AUTH === "true" 이면 인증 실패 시 401 { ok:false, error:"인증이 필요합니다." }.

산출물:
- api/server.js 게이트 (~40줄, 단일 지점)
- scripts/test-api-auth-gate.mjs + package.json 에 "test:api-auth-gate"
  · 공개 경로는 토큰 없이 통과
  · 비공개 경로 + API_REQUIRE_AUTH=true + 토큰 없음 → 401
  · 비공개 경로 + API_REQUIRE_AUTH 미설정 → 통과 + wouldBlock 로그 1건
  · 유효 교사 세션 → 통과
  · dispatch 경로 + 유효 dispatch 토큰 → 통과
- docs 에 "관찰 기간에 Render 로그에서 [ops-audit] wouldBlock 경로를 수집하라"는 절차.

완료 기준: 테스트 통과 + build. 이 Phase 는 운영 동작을 바꾸지 않음(플래그 off 기본).

────────────────────────────────────────────────────────
## Phase 1 — ops 토큰 가드 + 프론트 토큰 첨부
────────────────────────────────────────────────────────
### 1a. ops 토큰 (src/shared/server/sessionRouteGuard.js 확장)
- createOpsSessionToken({ scope, label, ttlMs }) 와 verifyOpsSessionToken(token) 추가.
- payload = base64url({ role:"ops", scope, label, exp })
  token   = `${payload}.${HMAC_SHA256(payload, secret)}`
- 서명 secret 은 전용 getter 로 주입: () => process.env.OPS_TOKEN_SIGNING_SECRET
  (없으면 verify 는 항상 null, mint 는 실패). APP_SESSION_SECRET / SUPABASE_SERVICE_ROLE_KEY
  와 분리.
- scope 값: "read" | "cas-write" | "highrisk". exp 지난 토큰은 null.
- api/server.js 에서 getOpsSession(request) = verifyOpsSessionToken(bearer) 를 만들어
  Phase 0 게이트에 연결.

### 1b. 스코프 → 라우트 판정 (게이트 2차 판정)
request.__auth.kind === "ops" 인 경우에만 적용(교사 세션은 종전대로 전체 허용):
- scope "read":   메서드 GET 만 허용. 그 외 403 { code:"scope_forbidden" }.
- scope "cas-write": GET + 아래 허용목록의 POST. 그 외(모든 DELETE, /api/notifications/*,
  /api/notification-jobs/reserve*, /api/notification-jobs/cancel, /api/solapi/groups/cancel,
  /api/ai/*, /api/exam-analysis-*/(vision-check|detect-question-boundaries|fill-question-rows|
  refine-question-rows|generate-output-draft), /api/admin/seed-core-data) → 403.
  · cas-write 허용 POST 목록은 상수 배열로 명시:
    /api/lesson-journal/rows/save, /api/class-rosters/save, /api/school-calendar/derived-save,
    /api/exam-prep-schedule/save, /api/supplement-schedules/save,
    /api/lesson-journal/history-action, /api/lesson-journal/makeup-tasks/save,
    /api/app-state, /api/students, /api/lessons, /api/lesson-records, /api/homeworks,
    /api/makeup-tasks, /api/school-events, /api/exam-prep-rows, /api/notification-jobs
  · cas-write POST 는 본문에 expectedUpdatedAt 또는 해당 versioned 계약의 버전 필드가
    없으면 게이트가 422 { code:"version_required" } 로 거절(라우트 도달 전).
- scope "highrisk": 제한 없음(교사 세션과 동일 범위). 단 게이트가 [ops-audit] 에
  scope:"highrisk", reason(토큰 label) 를 반드시 기록.

### 1c. 프론트 토큰 첨부 (src/shared/utils/apiClient.js)
- getJson/postJson/deleteJson(및 여기서 쓰는 공통 fetch 래퍼) 이 저장된 로그인 세션
  토큰을 Authorization: Bearer 로 자동 첨부. 토큰 위치는 기존 로그인 흐름을 grep 해서
  확인(localStorage 의 account.sessionToken 계열).
- 토큰 없으면(비로그인 포털 경로) 헤더 생략 — 기존 동작 유지.
- 포털(apiClient 를 학생/학부모 화면에서 쓰는 경우)도 포털 세션 토큰을 첨부하는지 확인.

산출물:
- sessionRouteGuard.js 확장 + 단위 테스트(서명 검증, 만료, scope)
- 게이트 2차 판정 + scripts/test-api-auth-matrix.mjs + "test:api-auth-matrix"
  · 각 *RouteSignatures export 를 수집해 매트릭스 자동 생성(새 라우트 누락 시 실패)
  · 토큰 없음 → 401 (공개 제외)
  · read 토큰 + POST/DELETE → 403
  · cas-write 토큰 + 발송/AI/DELETE → 403
  · cas-write 토큰 + 허용 POST + 버전 필드 없음 → 422
  · 만료 토큰 → 401
  · 교사 세션 → 전 경로 통과
- apiClient.js 변경 + dev:safe 브라우저 스모크(교사 로그인 → 수업일지 행 저장 → 재조회)
- 아직 API_REQUIRE_AUTH 는 켜지 않는다.

완료 기준: 위 테스트 전부 통과 + build + dev:safe 스모크에서 화면 정상.

────────────────────────────────────────────────────────
## Phase 2 — 강제 활성화 (사람 Gate)
────────────────────────────────────────────────────────
코드가 아니라 사용자에게 요청할 항목을 문서로 정리한다(docs/security/ops-api-auth-audit.md
"배포 절차" 절):
- Render 백엔드 환경변수 설정:
  APP_SESSION_SECRET (신규, 랜덤 32B+), OPS_TOKEN_SIGNING_SECRET (신규),
  NOTIFICATION_DISPATCH_TOKEN, TALLY_WEBHOOK_SIGNING_SECRET (미설정 시 우회 발생하므로 확인),
  CORS_ALLOWED_ORIGINS = https://academy-os-blue.vercel.app (축소),
  마지막에 API_REQUIRE_AUTH = true
- 배포 순서: Phase 1 까지 배포 → Phase 0 관찰 로그에서 wouldBlock 경로 0 확인 →
  APP_SESSION_SECRET/OPS_TOKEN_SIGNING_SECRET 설정 → API_REQUIRE_AUTH=true → 스모크.
- 롤백: API_REQUIRE_AUTH 제거 → 즉시 이전 동작.

운영 스모크 절차(사용자 실행용 명령을 문서에 적어둘 것, AI 가 직접 실행 금지):
- 토큰 없이 GET /api/students → 401 기대
- 유효 교사 세션으로 GET /api/students → 200 기대
- /health 200, Render 크론(dispatch-due, slack-daily-schedule) 정상

Phase 2 배포는 진짜 고위험으로 분류: 원격 exact-head 전체 검사 1회.

────────────────────────────────────────────────────────
## Phase 3 — 정리 (조건부 우회 제거)
────────────────────────────────────────────────────────
- api/server.js:1612 verifyTallyWebhookSignature: if (!secret) return true → return false
  로 변경(웹훅 서명 필수화). 사전에 TALLY_WEBHOOK_SIGNING_SECRET 설정 확인 요청.
- /api/notification-jobs/dispatch-due 의 "override 필드 없으면 통과" 경로 제거 →
  항상 dispatch 토큰 요구. Render 크론이 토큰을 보내는지 확인(render.yaml / cron 스크립트).
- 인라인 저장 라우트(/api/*/save 7종)가 게이트에 실제로 걸리는지 매트릭스로 재확인.
- api/server.js:291 세션 서명 폴백에서 SUPABASE_SERVICE_ROLE_KEY 제거하고
  APP_SESSION_SECRET 필수화(미설정 시 부팅 경고 or 실패). 배포에 APP_SESSION_SECRET
  들어간 것 확인 후.

────────────────────────────────────────────────────────
## ops 토큰 발급 스크립트 (Phase 1 과 함께)
────────────────────────────────────────────────────────
scripts/ops-mint-token.mjs + package.json "ops:mint-token"
  node scripts/ops-mint-token.mjs --scope read --ttl 2h --label claude-local
  node scripts/ops-mint-token.mjs --scope cas-write --ttl 30m --label codex-fix
  node scripts/ops-mint-token.mjs --scope highrisk --ttl 15m --label "manual: 퇴원버그 정정" --reason "..."
- OPS_TOKEN_SIGNING_SECRET 없으면 즉시 실패.
- highrisk 는 --reason 필수. 발급 시 console.info("[ops-token-issued]", {scope,label,ttl,exp})
  (토큰 문자열 자체는 stdout 한 줄로만, 로그엔 안 남김).
- TTL 파서: 30m / 2h / 900(초) 허용.

TTL/스코프 정책 표는 docs/security/ops-api-auth-audit.md 에 유지:
  read=2h, cas-write=30m, highrisk=15m+명시승인.
  폐기 = OPS_TOKEN_SIGNING_SECRET 로테이트로 전량 무효(개별 블랙리스트 없음, 단기 TTL로 감내).

────────────────────────────────────────────────────────
## AI 로컬 환경 (문서화만, .env 는 사용자가 채움)
────────────────────────────────────────────────────────
AI(Claude/Codex) 머신 .env 에는 Supabase 값 금지. 오직:
  ACADEMY_API_BASE_URL=https://koh-you-math-academy-os-api.onrender.com
  ACADEMY_OPS_TOKEN=<read 스코프 토큰, 운영자가 ops:mint-token 으로 발급>
조사용 호출 예시를 docs 에 적어둘 것(AI 가 실행하는 건 사용자 승인 후):
  curl -H "Authorization: Bearer $ACADEMY_OPS_TOKEN" "$ACADEMY_API_BASE_URL/api/students"

────────────────────────────────────────────────────────
## 완료 기준 (전체)
────────────────────────────────────────────────────────
- test:api-auth-gate, test:api-auth-matrix, sessionRouteGuard 단위 테스트 통과.
- 기존 관련 테스트(test:attendance-api, test:notification-job-api, test:exam-* 등) 회귀 없음.
  가능한 곳에 "인증 없음 → 401" 케이스 추가.
- check:fast 에 test:api-auth-matrix 포함.
- dev:safe 교사 로그인 스모크에서 화면 정상(Phase 1 토큰 첨부가 UI 를 깨지 않음).
- docs/security/ops-api-auth-audit.md 에 구현 상태 + 배포 절차 + 스모크 명령 + 토큰 정책 갱신.
- 각 Phase 별 PR 분리. API_REQUIRE_AUTH 활성화·환경변수·키 로테이션은 사용자 Gate 로 남김.
```

---

## 짧은 다음 작업 프롬프트 템플릿

```text
[다음] codex/ops-api-auth-boundary-20260904
docs/security/ops-api-auth-implementation-prompt.md 의 Phase N 을 진행.
한 Phase = 한 PR. 운영 설정 변경·발송·유료 호출 금지, 비밀값 출력 금지.
```

## 새 세션에 꼭 알려야 할 것

- 이 작업의 근거는 `docs/security/ops-api-auth-audit.md` 의 라우트별 인증 현황 표다. 표에 없는
  새 라우트가 코드에 있으면 먼저 표를 갱신하고 진행.
- "CAS(`parseVersionedWriteRequest`) = 인증" 아님. 버전 검증과 인증을 분리해서 다룰 것.
- 교사 세션은 이번 범위에서 계속 전체 권한. 스코프 제한은 `role:"ops"` 토큰에만 적용.
- 전역 게이트는 단일 지점(api/server.js http.createServer 최상단)에 두고, 레지스트리 35개를
  개별 수정하지 않는다.
- 학원명 표시는 `으뜸수학 고태영T`. 기존 안전 스위치(ALIMTALK_DRY_RUN 등) 동작 불변.
- 운영 URL: Frontend `https://academy-os-blue.vercel.app`, Backend
  `https://koh-you-math-academy-os-api.onrender.com`.
