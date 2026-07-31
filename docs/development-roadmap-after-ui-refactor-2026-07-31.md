# UI 통일·안전범위 리팩터링 이후 개발 로드맵

## 왜 App.jsx가 아직 큰가

기존 리팩터링은 helper, selector, UI shell처럼 동작을 보존한 채 옮길 수 있는 경계를 우선했다. 남은 코드는 hydration, 인증, 출결 polling, 저장, 알림 reconcile, 17개 화면 callback처럼 상태 소유권과 외부 side effect가 얽힌 부분이다. UI 통일은 보이는 규칙을 맞춘 작업이므로 데이터 흐름 분해와는 다른 축이다.

## 권장 순서

1. **P0 개발 안전망 — 이번 작업**
   - canonical 경로 doctor, 안전한 가상 실행, runtime lint, client error reporter, browser smoke, CI.
2. **P1 저장 신뢰성**
   - 학생/반/Tally, `app_state` version 경쟁, 보충·알림 reconcile, 오작동 버튼.
3. **P1 관찰 가능성 확대**
   - blank screen/error ID, 서버 client-error 로그, 핵심 경로별 browser test를 축적한다.
4. **P1 API server 분리**
   - `api/server.js`에서 route registration, auth, core data, notification/provider service를 계약 테스트와 함께 분리한다.
5. **P2 App orchestration 분리**
   - hydration/persistence hook, auth/session provider, attendance sync, notification reconcile, teacher view callback assembly를 하나씩 분리한다.
6. **P2 CSS·번들 구조**
   - 2만 줄 CSS를 화면/도메인별 entry로 나누고, teacher 화면을 lazy load해 초기 bundle을 줄인다. 시각 회귀를 먼저 고정한다.
7. **P2 핵심 E2E 확대**
   - 로그인, 수업일지 draft/save, 출결, 보충 생성·취소, 알림 미리보기·예약 전 단계, 학생/반 저장을 안전 fixture로 자동화한다.
8. **P3 점진적 타입 계약**
   - 전면 TypeScript 전환보다 JSDoc/checkJs 또는 경계 schema부터 시작해 API payload·Supabase row의 shape 오류를 막는다.
9. **P3 문서 수명주기 자동화**
   - STATUS·queue·daily handoff는 짧게 유지하고 오래된 worklog는 월별 archive한다.

## 완료 기준

- App.jsx 줄 수 감소 자체가 목표가 아니다. 각 분리 뒤 상태 owner, 저장 원천, side effect, 오류 복구가 더 명확해야 한다.
- 새 기능은 사용자가 먼저 눌러 오류를 찾기 전에 lint·contract test·browser smoke가 실패해야 한다.
- 운영 권한 없이도 대부분의 흐름을 safe fixture로 재현할 수 있어야 한다.
