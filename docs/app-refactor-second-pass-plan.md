# App 2차 리팩터링 계획

업데이트: 2026-08-02

## 사용자 의도

현재 기능은 구현되어 있지만 `src/app/App.jsx`에 상태, 초기 로딩, 저장, polling, 외부 side effect, 화면 조립이 집중되어 유지보수 개발과 회귀 확인에 시간이 오래 걸린다. 2차 리팩터링은 줄 수 감소 자체가 아니라 상태 owner, 서버 저장 원천, 외부 side effect, 실패 복구를 명확한 모듈 경계로 분리해 기능 변경 시간을 줄이는 작업이다.

## 단계

1. **Phase 1 — auth/session 경계**: `useAppSession`이 session state, 초기 teacher session 판독, 역할별 로그인, teacher 저장, logout cleanup을 소유한다. 2026-08-02 main 통합 완료.
2. **Phase 2 — 출결 polling·동기화 경계**: 로그인/로그아웃·화면 전환·날짜 rollover의 lifecycle owner를 분명히 하고, in-flight 중복, stale 응답, 저장 중 draft 보호, cleanup과 재시도를 통합 fixture로 고정한다. 2026-08-02 main 통합 완료.
3. **Phase 3 — 알림톡 reconcile·외부 부작용 경계**: refresh와 reconcile owner를 분리하고 scope별 in-flight, stale 응답, 중복 클릭, 실패 재시도를 고정한다. 조회·저장·예약·취소·발송은 별도 행동으로 유지한다. 2026-08-02 main 통합 완료.
4. **Phase 4 — hydration·저장·복구·서버 재조회 경계**: 역할별 hydration, local draft와 서버 원천, debounce/직렬화, CAS, 저장 뒤 재조회, 늦은 응답 차단과 cleanup을 분리한다. 2026-08-02 main 통합 완료.
5. **Phase 5 — teacher view callback·화면 조립 경계**: 17개 교사 화면의 props/callback 조립을 `TeacherViewOutlet` adapter로 분리하고 저장·삭제·예약·취소·발송·재대조 callback 계약을 고정했다. outlet은 네트워크·Storage side effect를 갖지 않고 `App` handler를 주입받는다. 2026-08-02 구현·전체 자동검증 완료.

각 단계는 최신 main 기반 별도 Worktree와 `codex/` branch, 독립 PR·CI로 완료한다. 이전 단계 Worktree에 다음 단계 변경을 섞지 않는다.

## 연쇄 진행과 검수 기본 지침

1. 단계 시작 전 owner, 원본/서버 원천, local draft, 파생 화면값, timer/listener, 외부 side effect, 실패·재시도·중복 위험을 inventory한다.
2. 구현 AI가 전용 fixture, `npm run lint:runtime`, `npm run check:fast`, `npm run test:production`, `npm run build`, 필요한 `npm run test:browser-smoke`를 수행한다.
3. 구현 뒤 AI 코드 리뷰로 상태 소유권, 저장 원천, stale 응답, cleanup, 오류 복구, 외부 side effect 회귀를 다시 확인한다.
4. 자동검증 가능한 문제는 AI가 최소 범위로 수정하고 전체 검증을 반복한다. 운영 데이터·실제 알림·운영 SQL·유료 호출은 사용하지 않는다.
5. 발견 사항이 당장 사람 판단을 요구하지 않으면 작업을 멈추지 않는다. `docs/deferred-work-queue.md`와 단계 worklog에 근거, 영향, 후속 조건을 남기고 현재 단계와 다음 단계 검수를 연쇄 진행한다.
6. 운영 데이터 삭제·대량 변경, 실제 알림 발송/예약/취소, 운영 SQL 적용, 유료 호출, 로그인/UAC, 제품 의미를 바꾸는 선택처럼 사람 승인이 꼭 필요한 순간에만 중단하고 최소 질문을 한다.
7. 각 단계는 AI 코드 리뷰, 전체 자동검증, PR CI와 배포 검사가 성공하고 의미 변경·운영 side effect가 없으면 AI가 main 병합을 판단해 진행한다. 병합 후 다음 단계는 새 Worktree에서 시작한다.

## 완료 기준

- `App.jsx` 줄 수보다 각 책임의 owner와 입출력 계약이 명확해야 한다.
- 브라우저 cache/localStorage만으로 저장 성공을 판정하지 않는다.
- 저장과 알림/예약/취소/삭제/유료 실행이 섞이지 않는다.
- session·화면·날짜 전환 뒤 늦은 응답이 새 상태를 덮지 않는다.
- timer, polling, listener가 cleanup 뒤 실행되지 않는다.
- 기능 회귀가 사람의 운영 확인 전에 fixture 또는 safe browser 검사에서 발견된다.

## 2차 완료 뒤 후속 대형 단위

1. `App.jsx`에 남은 화면·모달·도메인 컴포넌트 정의를 실제 도메인 파일로 이동한다.
2. teacher 화면을 lazy load하고 vendor/domain chunk를 분리해 현재 약 1.63 MB production chunk와 Babel 500 KB 경고를 줄인다.
3. hydration 뒤의 도메인별 상태/action controller를 분리하고 `app_state` 중 독립성이 큰 값은 명시 저장 API로 옮긴다.
4. `api/server.js`의 route registration, auth, core data, notification/provider 서비스를 계약 테스트와 함께 분리한다.
5. CSS를 화면/도메인 entry로 나누고 시각 회귀·핵심 safe E2E를 확대한다.
6. API payload와 Supabase row부터 JSDoc/checkJs 또는 schema 기반 타입 계약을 도입한다.
