# AI 운영 읽기 인증 기준

확인일: 2026-09-12

이 문서는 Codex와 Claude Code가 Academy OS 운영 데이터를 **읽기 전용**으로 조사할 때 쓰는 공통 기준이다. 비밀값 자체는 이 문서, 저장소, 명령 기록, AI 대화에 남기지 않는다.

## 결론

1. 운영 API는 현재 무인증 조회를 거부한다. `GET /api/notification-jobs?limit=1` 실측 결과는 `401 auth_required`였다.
2. 로그인된 Academy OS 교사 화면은 같은 읽기 API를 정상 사용한다. Codex가 Chrome의 기존 로그인 세션에서 알림관리 기록을 새로 불러와 `전체 기록 323건`으로 완료되는 것을 확인했다. Render나 Supabase service-role 키는 사용하지 않았다.
3. 브라우저 화면에 보이는 정보만 확인할 때는 로그인된 교사 화면을 사용한다. 브라우저 저장소에서 세션 토큰을 추출하거나 대화·로그로 복사하지 않는다.
4. 원시 payload처럼 화면에 없는 필드를 조회해야 할 때 Codex와 Claude Code가 공통으로 쓰는 표준은 짧게 만료되는 `read` 범위의 `ACADEMY_OPS_TOKEN`이다.
5. 현재 이 PC의 일반 셸에는 `ACADEMY_OPS_TOKEN`과 `OPS_TOKEN_SIGNING_SECRET`이 없으므로, **완전 무인 터미널 인증은 아직 준비되지 않았다.** 이 상태에서 service-role 키를 Render 화면에서 꺼내는 방식으로 우회하지 않는다.

## 인증 경로 우선순위

### 1. 로그인된 교사 화면

다음 조건을 모두 만족할 때 사용한다.

- 브라우저 도구가 기존 Academy OS 로그인 탭에 접근할 수 있다.
- 필요한 근거가 화면에서 확인 가능하다.
- 저장, 발송, 예약, 취소 버튼을 누를 필요가 없다.

화면을 열고 해당 목록의 `새로고침` 또는 조회 동작을 실행한다. 로그인 만료 오류가 없고 최신 목록이 표시되면 인증된 조회가 성공한 것이다. 토큰을 브라우저 저장소에서 꺼내지 않는다.

이 경로는 Codex의 browser/computer-use와, 브라우저 MCP가 실제로 연결된 Claude Code에서 사용할 수 있다. 브라우저 도구가 없는 Claude Code는 이 경로를 사용할 수 있다고 가정하지 않는다.

### 2. 단기 read ops 토큰 — 터미널 공통 표준

셸에 `ACADEMY_OPS_TOKEN`이 이미 안전하게 주입되어 있으면 Codex와 Claude Code 모두 같은 방식으로 읽기 API를 호출한다.

PowerShell에서 값은 출력하지 않고 존재 여부만 확인한다.

```powershell
if (Test-Path Env:ACADEMY_OPS_TOKEN) { "available" } else { "missing" }
```

읽기 요청 예시:

```powershell
$headers = @{ Authorization = "Bearer $env:ACADEMY_OPS_TOKEN" }
Invoke-RestMethod `
  -Method Get `
  -Headers $headers `
  -Uri "https://koh-you-math-academy-os-api.onrender.com/api/notification-jobs?limit=1"
```

Git Bash/WSL에서는 토큰을 command argument로 넘기지 않고 Node 프로세스의 환경변수에서 읽는다.

```bash
test -n "${ACADEMY_OPS_TOKEN:-}" && echo available || echo missing
node --input-type=module -e '
  const token = process.env.ACADEMY_OPS_TOKEN;
  if (!token) throw new Error("ACADEMY_OPS_TOKEN missing");
  const response = await fetch(
    "https://koh-you-math-academy-os-api.onrender.com/api/notification-jobs?limit=1",
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  console.log(JSON.stringify(await response.json(), null, 2));
'
```

토큰은 `read`, `tenant_default`, 기본 2시간처럼 필요한 최소 범위와 수명으로 발급한다. `cas-write`, `highrisk`, `--cross-tenant`는 읽기 조사에 사용하지 않는다.

`OPS_TOKEN_SIGNING_SECRET`이 이미 주입된 운영자 통제 환경에서만 다음 발급기를 쓴다.

```powershell
$opsToken = node scripts/ops-mint-token.mjs --scope read --tenant tenant_default --ttl 2h --label local-read
try {
  $headers = @{ Authorization = "Bearer $opsToken" }
  Invoke-RestMethod -Method Get -Headers $headers -Uri "https://koh-you-math-academy-os-api.onrender.com/api/notification-jobs?limit=1"
} finally {
  Remove-Variable opsToken -ErrorAction SilentlyContinue
}
```

발급 명령의 stdout은 토큰이므로 AI 도구 출력이나 공유 로그에 노출하지 않는다. 에이전트가 서명 비밀을 Render에서 복사하거나 로컬에 상주시켜서는 안 된다. 서명 비밀이 없는 경우 운영자가 별도 보안 터미널에서 단기 read 토큰을 발급해 해당 작업 프로세스에만 주입하는 것이 사람 Gate다.

## 사용하지 않는 경로

- 무인증 운영 API: 현재 `401 auth_required`이며 과거 기록은 폐기한다.
- 저장소 `.env` 또는 commit된 토큰: 금지한다.
- 임시 `sb.env`에 `SUPABASE_SERVICE_ROLE_KEY` 복사: 원시 DB 긴급 복구가 별도로 승인된 경우가 아니면 사용하지 않는다.
- 브라우저 localStorage, 개발자 도구, Chrome 프로필 파일에서 교사 세션 토큰 추출: 사용하지 않는다.
- `NOTIFICATION_DISPATCH_TOKEN`: 발송 cron 전용이며 운영 데이터 읽기 권한으로 사용하지 않는다.
- 키오스크 토큰: 태블릿 출결용이며 AI 운영 조회 자격 증명으로 재사용하지 않는다.

## 에이전트 시작 절차

1. `CLAUDE.md` 또는 `AGENTS.md`를 통해 이 문서를 읽는다.
2. 필요한 데이터가 화면에 보이는지 판단한다. 보이면 기존 로그인 교사 화면에서 읽기 전용으로 확인한다.
3. 원시 API 조회가 필요하면 환경변수 **이름의 존재만** 확인한다. 값을 출력하지 않는다.
4. `ACADEMY_OPS_TOKEN`이 있으면 GET만 호출하고, 학생명·전화번호·메시지 본문 등 불필요한 개인정보 출력은 줄인다.
5. 토큰이 없으면 사람에게 `tenant_default`, `read`, 2시간 토큰을 요청한다. service-role 또는 signing secret 자체를 요청하지 않는다.
6. `401`은 인증 부재/만료, `403`은 범위 부족으로 구분한다. 이를 데이터 없음이나 기능 오류로 해석하지 않는다.
7. 실제 저장·삭제·알림 발송/예약/취소가 필요하면 이 읽기 절차와 분리하고 기존 사람 Gate를 적용한다.

## 코드 근거

- `src/shared/server/apiAccessPolicy.js`: 교사와 ops scope의 route 허용 범위. ops `read`는 GET만 허용한다.
- `src/shared/server/sessionRouteGuard.js`: Bearer 교사·ops 토큰 검증.
- `src/shared/utils/apiClient.js`: 교사 화면의 공용 Authorization 헤더 첨부.
- `scripts/ops-mint-token.mjs`: `OPS_TOKEN_SIGNING_SECRET`이 있을 때만 최소 권한 ops 토큰 발급.
- `docs/security/ops-api-auth-current-handoff.md`: 운영 인증의 현재 인계 기준.

2026-09-04의 운영 인증 인계에는 허가된 ops `read` 토큰이 실제 운영 GET을 통과한 선행 실측이 기록되어 있다. 이번 확인에서는 유효 토큰이 현재 셸에 없으므로 그 운영 요청을 반복하지 않았다.

## 2026-09-12 실측 범위

- 실행: 무인증 운영 GET 1회, 결과 `401 auth_required`.
- 실행: 로그인된 교사 화면에서 알림 기록 새로고침 1회, 로딩 완료와 전체 건수 갱신 확인.
- 미실행: 운영 DB 쓰기, 알림 발송·예약·취소, SQL, 키 생성·변경, service-role 직접 조회.
- 확인: 현재 셸에는 Academy/OPS/Supabase/Render 관련 인증 환경변수가 없고, `ops-mint-token.mjs`는 존재하지만 서명 비밀이 없어 여기서 운영 토큰을 발급할 수 없다.
