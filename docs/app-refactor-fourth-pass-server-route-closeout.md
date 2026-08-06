# App/API 4차 리팩터링 4-3 종료 감사

업데이트: 2026-08-06

## 종료 범위

- 공통 HTTP body/CORS/response adapter와 HMAC session guard를 `api/server.js` 밖의 frozen 경계로 분리했다.
- system/auth/portal/app-state/report/test-session/integrations/exam-analysis의 15개 registry가 route 24개를 소유한다.
- 전역 route는 120개, method 분포는 GET 31/POST 76/DELETE 13이며 4-3a의 exact 순서 hash를 유지한다.
- registry는 method/path, request parsing, auth/action 주입과 response 조립만 소유한다. DB mapper·CAS·재조회·rollback과 provider 실행 owner는 이동하지 않았다.

## 종료 수치와 남은 경계

4-3의 종료 목표는 `api/server.js`의 모든 business action을 한 번에 옮기는 것이 아니라, 공통 route infrastructure와 고위험 경계의 registry 패턴을 확정하고 남은 owner를 다음 단계와 겹치지 않게 분류하는 것이다.

- 24개: frozen registry로 분리 완료.
- 21개: read-only direct route. DB/source read 16개와 Storage/Solapi 등 외부 read 5개로 나뉘며, selector/action 또는 provider read owner를 먼저 작게 분리한 뒤 같은 registry 패턴을 적용한다.
- 52개: DB/source mutation direct route. App·domain persistence action과 server source action을 4-4에서 분리한 뒤 route shell을 얇게 만든다.
- 23개: Storage, Tally, 유료 AI, Solapi/Slack, admin seed 등 외부 side effect route. 4-5에서 source 저장과 provider execution/retry scope를 먼저 분리한다.

정확한 signature와 `24 + (16 + 5) + 52 + 23 = 120` 분류는 `scripts/test-fourth-pass-server-route-closeout.mjs`가 Production checks에서 고정한다. 분류되지 않은 route가 추가되거나 외부 read/write route가 source action으로 섞이면 감사에 실패한다.

## 소유권과 재개 기준

- local draft와 화면 오류 복구는 App/domain controller owner에 남는다.
- authoritative API/DB 저장, version token, readback과 rollback은 기존 persistence owner에 남는다.
- 알림·Storage·AI는 실제 provider를 호출하지 않았고 4-5 사람 gate 규칙을 유지한다.
- 4-4는 사용자 요청에 따라 지금 시작하지 않는다. 2026-08-12 이후 명시적으로 재개할 때 최신 main·동시 owner·배포 상태를 다시 확인하고 새 branch에서 시작한다.
