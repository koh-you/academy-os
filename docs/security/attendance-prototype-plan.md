# 출결 프로토타입 — 통합 계획

브랜치: `codex/multi-tenant-impl-20260904` (여기서 통합 진행)
작성: 2026-09-04

## 이게 뭐냐

사용자(고태영T)가 쓰는 기능 중 **출결 관련 기능만 떼어내어**, 같은 학원의 **다른 교사가
로그인해서 출결 체크 + 출결 알림톡 발송**만 할 수 있는 프로토타입을 만든다. 멀티테넌트 SaaS의
1번째 슬라이스. 데이터는 tenant 단위로 완전 격리.

목표 3가지:
1. **운영 API 통일** — 배포 API의 인증을 하나로. Codex든 Claude든 사람 교사든 같은 인증 경로.
   → `docs/security/ops-api-auth-implementation-prompt.md` Phase 0~2.
2. **협력 교사(assistant) 로그인 환경** — 별도 교사 계정으로 로그인 → 출결 화면 + 출결 알림톡.
   나머지(수업일지 상세·교재·숙제·시험·정산·운영 알림)는 화면에서 숨기고 서버에서 403.
3. **tenant 데이터 격리** — assistant 는 자기 학원(tenant) 데이터만.
   → `docs/security/multi-tenant-phase1-plan.md`.

세 문서 관계: (1) "누가 호출하나" · (3) "어느 학원 데이터냐" · 이 문서 = (2) "assistant 는 무엇을
할 수 있나" + 셋을 하나의 게이트로 합침.

## 안전 경계 (변하지 않음)

- 운영 Supabase 스키마·Render 설정은 코드로 바꾸지 않는다. 마이그레이션·환경변수·`API_REQUIRE_AUTH`·
  키 로테이션·실제 교사 계정 생성은 전부 사람 Gate.
- 검증 중 실제 알림톡/Slack 발송 금지. `ALIMTALK_DRY_RUN` 등 안전 스위치 불변.
- 비밀값 로그·출력·커밋 금지.
- 새 코드는 전부 플래그 뒤 (`API_REQUIRE_AUTH` OFF, `MULTITENANT_SCOPING` OFF, `teacherRole` 기본
  "owner") → main 에 들어가도 동작 변화 없음.

## assistant 가 할 수 있는 것 (기능 표면)

| 기능 | 화면 | API |
|---|---|---|
| 로그인 | 기존 교사 로그인 화면 | `POST /api/auth/login` (role="teacher") |
| 오늘 수업 목록·학생 배정 보기 | 수업 캘린더(간소화) | `GET /api/lessons`, `GET /api/lesson-records` |
| 학생 명단 보기 | 학생 명단(읽기) | `GET /api/students`, `GET /api/classes` |
| 출결 체크인/체크아웃/상태변경 | 출결 패널 | `POST /api/attendance/check`, `POST /api/attendance/preview`, `POST /api/lesson-records` (출결 필드) |
| 출결 알림톡 발송 | 출결 패널 버튼 | `POST /api/notifications/attendance-alimtalk`, `GET /api/notification-jobs` (상태 확인) |

assistant 가 **못 하는 것**: 수업일지 상세 저장, 숙제/보충/시험/시험분석, 코멘트 알림톡·일일리포트·
Slack, 정산·리포트, 학생 생성/수정/삭제, 반 관리, 운영 알림, 유료 AI, 삭제 계열 전부.

## 라우트 → 역할/스코프 정책 (게이트 2차 판정)

`src/shared/server/apiAccessPolicy.js` (신규, 순수·테스트 대상):

- **공개**: `GET /health`, `POST /api/auth/login`, prefix `/api/portal-`, `/api/intake/tally`,
  `/api/special-lecture-applications/tally`, `/api/exam-post-files`.
- **dispatch 토큰**: `POST /api/notification-jobs/dispatch-due`, `POST /api/notifications/slack-today-schedule/reserve`.
- **teacher owner**: 전체 허용 (종전과 동일).
- **teacher assistant**: 위 "기능 표면" 표의 API 만 허용. 그 외 403 `{code:"role_forbidden"}`.
  - assistant 허용 목록 상수: `ASSISTANT_API_ALLOW` (method+path, 접두 매칭 일부).
- **ops read**: GET 만. **ops cas-write**: GET + 지정 versioned POST + 버전필드 필수(없으면 422).
  **ops highrisk**: 제한 없음 + `[api-auth-audit]` 기록. (ops-api-auth-implementation-prompt.md §1b)
- 인증 없음: 공개/ dispatch 외 전부 401 `{code:"auth_required"}`.

게이트는 `API_REQUIRE_AUTH !== "true"` 이면 **관찰 모드**: 판정만 하고 차단하지 않고
`console.info("[api-auth-audit]", {method,path,authKind,verdict})` 로 로깅.

## 구현 단계 (상태)

| # | 단계 | 상태 |
|---|---|---|
| 1 | `sessionRouteGuard`: `createOpsSessionToken`/`verifyOpsSessionToken` (scope read/cas-write/highrisk, `OPS_TOKEN_SIGNING_SECRET` 전용, tenantId/crossTenant) | 진행 중 |
| 2 | `apiAccessPolicy.js` + 단위 테스트 (공개/역할/스코프 판정) | 대기 |
| 3 | `api/server.js` 전역 게이트: teacher/ops/dispatch 인증 → `request.__auth` → `enterTenantContext` → `evaluateApiAccess`. `API_REQUIRE_AUTH` OFF=관찰 | 대기 |
| 4 | `scripts/test-api-auth-matrix.mjs` — `*RouteSignatures` 자동 수집, 토큰없음→401 / assistant→비허용403 / ops read→POST403 / 버전없음→422 / 만료→401 | 대기 |
| 5 | `src/shared/utils/apiClient.js` — 저장된 세션 토큰을 `Authorization: Bearer` 자동 첨부 | 대기 |
| 6 | `scripts/ops-mint-token.mjs` + `npm run ops:mint-token` (`--scope --ttl --label --reason`, tenantId/crossTenant) | 대기 |
| 7 | 프론트 assistant 출결 화면: 수업 캘린더+출결 패널+출결 알림톡만. 나머지 숨김(메뉴 필터 기존) + 진입 가드 | 대기 |
| 8 | `scripts/seed-assistant-teacher.mjs` — 신규 tenant + `teacher_accounts` row (사용자가 실행) | 대기 |
| 9 | tenantId 배관은 `codex/multi-tenant-impl` 에 이미 있음 (`enterTenantContext`, `tenantScope.js`) | 완료 |

## 사람 Gate (사용자 실행)

1. `supabase/20260904_tenant_id_phase1.sql` 실행 — `tenant_id` 컬럼 + `teacher_accounts.role text default 'owner'`.
2. Render 환경변수: `APP_SESSION_SECRET`, `OPS_TOKEN_SIGNING_SECRET` (신규), `NOTIFICATION_DISPATCH_TOKEN`·
   `TALLY_WEBHOOK_SIGNING_SECRET` 확인, `CORS_ALLOWED_ORIGINS` 축소, 마지막에 `MULTITENANT_SCOPING=true`
   → 관찰 로그 확인 → `API_REQUIRE_AUTH=true`.
3. `node scripts/seed-assistant-teacher.mjs` 로 신규 교사 계정 생성 (또는 SQL). tenant id 기록.
4. 스모크: 고태영T 로그인 전체 기능 회귀 없음 / 신규 교사는 출결·알림톡만, 나머지 401·403.
5. ops 토큰: `npm run ops:mint-token -- --scope read --ttl 2h` → AI `.env` 의 `ACADEMY_OPS_TOKEN`.
