# Deferred Work Queue

이 문서만 현재 미룬 작업의 source of truth다. 과거 완료 이력은 `docs/archive/`에 있다. 사용자에게 더 급한 요청이 있으면 그 요청을 먼저 처리하고 큐를 통째로 반복하지 않는다.

## P1. 운영 저장 신뢰성

- 학생 신규/Tally·학생/반 명단 저장 gate.
- `app_state` key별 dirty 저장·500ms debounce·동일 key 직렬화·`updated_at` CAS·저장 뒤 Supabase 재조회는 완료. 독립성이 큰 데이터는 명시 저장 도메인으로 계속 분리한다.
- exam prep/Tally 입력 경쟁 방지.
- 숙제·포털·자료함·보고서 저장 계약.
- 보충·알림 다중 원천 reconcile과 미연결/오작동 버튼 정리.
- 기준: `docs/save-persistence-audit-2026-07-20.md`, `docs/save-persistence-audit-2026-07-28.md`.

## P2. 모달 통일 후속

- 전체 modal inventory에서 아직 공통 shell·footer·상태 모델을 쓰지 않는 화면을 찾는다.
- 수업일지 저장과 Solapi side effect 버튼은 계속 분리한다.
- 출결·알림·저장 원천이 함께 바뀌면 별도 작업으로 쪼갠다.

## P3. 알림톡 템플릿 설정 관리

- 출결·수업일지·숙제보충·결석보강·재시험·공지·특강·일정 변경·11시 reminder의 문구 원천과 변수를 inventory한다.
- 숨은 하드코딩을 `설정 > 알림톡`의 같은 원천으로 옮긴다.
- 실제 발송·예약은 별도 사람 gate다.

## P4. 고위험 App/API 경계 리팩터링

- App 2차 리팩터링은 `docs/app-refactor-second-pass-plan.md`의 Phase 1~5를 기준으로 한다.
- Phase 1 auth/session, Phase 2 출결 polling·동기화, Phase 3 notification/Solapi reconcile, Phase 4 hydration/persistence, Phase 5 teacher 화면 callback 조립은 main 통합·CI·배포 완료다. App 2차 리팩터링 Phase 1~5는 닫는다.
- App 3차 리팩터링 3-0~3-8은 `docs/app-refactor-third-pass-plan.md`와 `docs/app-refactor-third-pass-closeout.md`를 기준으로 화면·draft/controller·adapter 분리, teacher 화면 lazy loading, 종료 소유권 감사를 완료했다. 3차 리팩터링은 닫고 자동 재개하지 않는다.
- 후속 대형 후보는 CSS domain entry 분리, safe E2E 확대, API payload/DB row 타입 계약이다. 남은 학생 로그인·핵심 modal·보고서 화면은 실제 변경 속도나 번들 병목 근거가 생길 때만 별도 계획으로 검토한다.
- API 후보는 `api/server.js`의 route registration, auth, core data, notification/provider service 분리다. App 3차 범위와 섞지 않고 별도 기준선·회귀 inventory를 먼저 만든다.
- AI가 안전하게 검증 가능한 문제는 해당 제품 작업에서 처리하되, 위 후보를 이유로 4차 리팩터링을 자동 시작하지 않는다. 운영 side effect나 제품 의미 결정이 필요한 항목만 사람 gate로 올린다.
- 기준: `docs/development-roadmap-after-ui-refactor-2026-07-31.md`.

## P5. 시험분석 상세 프롬프트 시스템

- 독립 branch `codex/exam-analysis-gpt-image`에서 계속한다.
- 다음 gate는 교사가 역할·장수·검수 데이터를 확정하는 입력 화면과 `final_fields > teacher_fields > ai_fields` 저장 계약이다.
- 별도 승인 전 이미지 생성 API·버전 DB·Storage 자동 제작은 하지 않는다.

## P6. 정산 후속

- 사용자가 새 시수별 단가를 제공하면 새 월/빈 단가에만 적용한다.
- 저장된 과거 월 snapshot과 수동 수정 금액을 자동 덮어쓰지 않는다.

## 완료되어 자동 재개하지 않는 것

- 전체 UI 통일 UI-0~UI-9.
- 기존 App 리팩터링 1~18 안전범위.
- 2026-07-31 조소현 보강만 취소 gate.
- 2026-07-28 교사 bearer·Storage 소유권 gate.
