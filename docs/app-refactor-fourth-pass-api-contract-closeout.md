# App/API 4차 리팩터링 4-1 종료 감사

업데이트: 2026-08-05

## 종료 범위

- 공통 API payload contract는 24개다: lesson 4, supplement 1, student/class 1, school calendar 1, app state 1, report 1, resource 3, notification 7, exam analysis 5.
- 모든 contract는 canonical request field, 명시된 legacy alias, response shape, source 목록을 frozen registry로 소유한다.
- 24개 route는 client request/response와 server inbound parser에 연결되고 Production checks의 `test:contract:versioned-write`에서 실행된다.
- provider source를 선언한 contract는 notification reserve/cancel/reconcile/bulk/readiness/dispatch 6개다. source 저장과 provider 결과의 분리 의미는 각 전용 fixture가 보완한다.

## 남은 직접 write route 분류

`api/server.js`의 직접 `POST/PUT/PATCH/DELETE` route는 89개다. 4-1은 이 수치를 24개로 축소하는 단계가 아니라, 가장 위험한 versioned/source/provider 저장 payload 24개를 공통 contract에 연결하는 단계다.

- 24개: 4-1 공통 contract 연결 완료.
- 42개: 기존 auth/portal/student/lesson/basic CRUD 등 row mapper와 route registration이 섞인 경계. 4-2 DB row/domain model, 4-3 server route registry에서 작은 단위로 다룬다.
- 23개: Storage, Tally, AI, 직접 Solapi/Slack, admin seed 경계. 4-5 외부 side-effect 단계로 미루고 실제 provider·유료 AI·운영 seed는 실행하지 않는다.

정확한 signature allowlist와 분류는 `scripts/test-fourth-pass-api-contract-closeout.mjs`가 고정한다. 새 직접 write route가 추가되거나 분류 없이 이동하면 Production checks가 실패한다.

## 소유권과 오류 복구

- contract는 payload shape만 소유한다. DB CAS, insert-only, 재조회, rollback, local draft 보존은 기존 persistence/action owner에 남는다.
- provider contract는 provider 실행 owner를 옮기지 않는다. safe API는 dry-run/가상 source만 사용한다.
- exam analysis의 Storage·Vision·AI 생성 route는 4-1에서 호출하지 않았고 4-5 분류로 남겼다.
- 4-2 시작점은 direct route 변경이 아니라 row↔domain mapper의 round-trip, null/legacy, `updated_at` token inventory다.
