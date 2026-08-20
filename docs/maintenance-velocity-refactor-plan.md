# Maintenance Velocity Refactor 계획

이 문서는 App/API 4차 리팩터링(4-0~4-8) 이후 다음 안전 단위의 source of truth다. `docs/app-refactor-fourth-pass-plan.md`는 4차의 역사적 기록으로 남기고 4-9 이후 번호를 연장하지 않는다. 새 단위는 MV-0부터 시작한다.

## 배경 — 2026-08-20 종합 감사에서 확인된 것

- 4-0 기준선(`4d351314`, 2026-08-04) 이후 main은 줄 수·route 수 기준으로는 크게 개선됐다: `api/server.js` 직접 route 120→20, App.jsx 10,903→10,463줄, server.js 7,806→5,762줄.
- 하지만 실제 기능/버그수정 commit 14건 중 App.jsx와 server.js를 동시에 수정한 건 1건(7%)뿐이고, route registry 파일을 건드린 기능 commit은 0건이었다. 기계적 추출 작업과 실제 기능 개발은 서로 다른 commit 모집단이다.
- 상태 문서(STATUS/current-worklog/DAILY_HANDOFF)는 제품 코드(App.jsx+server.js, 4-0 이후 125회 commit 터치)보다 4.3배 더 자주(534회) 수정됐다.
- `test:production`은 70개 체인·83개 리프 스크립트이며, 그중 상당수가 순수 문자열 슬라이싱(예: `scripts/test-notification-job-reconcile-contract.mjs`)이거나 이미 다른 계층(behavior fixture, browser spec)과 중복 검증한다. `test:production:verbose`(306 리프)는 CI 어디서도 참조되지 않는 죽은 스크립트다.
- 4-5h(notification/Solapi route registry)는 2026-08-20 closeout으로 "완료" 처리됐지만, 이는 route registry·fixture 소유권 확인이며 **orchestration 함수 자체(`reserveNotificationJobInSolapi` `api/server.js:2951`, `reconcileSolapiNotificationJobs` `api/server.js:3219`, `dispatchDueNotificationJobs` `api/server.js:5023`)는 여전히 `api/server.js`에 있다.** HTTP shell 이동과 orchestration 소유권 이전은 별개이며, 후자는 MV-2로 남는다.
- `providerResultContract.js`(4-5e에서 정의)는 `src/`·`api/` 어디서도 실제 참조되지 않는다(테스트 제외 0건). 채택 또는 삭제를 MV-2f에서 명시적으로 결정한다.
- `App.css`(22,244줄)는 `src/main.jsx:8`에서 여전히 단일 blocking import이며 4-0 기준선보다 오히려 늘었다.

목표는 줄 수·handler 개수·route 개수·테스트 개수가 아니라, 일반적인 기능 수정에 필요한 파일 탐색·검증 시간을 줄이는 것이다.

## MV-0 · 상태와 브랜치 정리

제품 코드는 변경하지 않는다.

- STATUS/deferred-work-queue의 4-5h/i, 4-4, 4-6, 4-7 서술을 실제 상태로 교정한다.
- 원격 브랜치 279개 중 263개는 `git merge-base --is-ancestor`로 main의 ancestor임이 확인돼 안전 삭제 대상이다. 나머지 16개는 개별 diff했고 5개(`codex/slack-scheduling-realtime`, `codex/daily-20260802-app-state-write-serialization`, `codex/daily-20260803-homework-followup-clear`, `codex/attendance-auto-confirm`, `codex/refactor-supplement-11b`)만 재적용 검토 가치가 있다. 삭제·재적용은 사용자 승인 후 개별 실행한다.

## MV-1 · 검증 비용 축소 (최우선)

- `docs/testing-policy.md` 본문과 AGENTS.md 최상단 위험도 원칙(2026-08-10, blast-radius 기준)을 나란히 diff해 모순 지점을 특정한다.
- `test:production:verbose` 삭제 또는 사용처 명시.
- 순수 문자열 슬라이싱 계약 테스트를 behavior/export 계약 테스트로 교체하거나, 이미 동일 계약을 검증하는 browser spec과 완전히 중복되면 정리한다. `test-wrong-problem-explicit-save.mjs`(100% source-slicing, `tests/browser/lesson-journal.spec.js:336`가 자동저장 없음·명시 저장·in-flight 보존·서버 재조회까지 더 강하게 커버)는 MV-1c에서 삭제했다. `test-notification-job-reconcile-contract.mjs`는 재검증 결과 순수 슬라이싱이 아니라(실제 controller 동작 테스트 포함) real Solapi를 호출할 수 없어 대체 불가능한 route wiring drift 감지도 겸하고 있어 유지한다 — 후보로만 보이는 파일도 삭제 전 반드시 직접 재확인한다. 기존 assertion을 느슨하게 만들지 않는다.
- 변경 종류별 최소 검증표를 testing-policy.md에 명시한다: 문서 전용(diff만) / pure helper 이동(가장 가까운 fixture+lint) / route shell 이동(registry fixture+lint, 전체 production 불필요) / 저장 API 사용 UI(domain test+focused browser) / provider orchestration(pure fixture+exact-head 원격 전체검사 cluster당 1회) / E2E flake(해당 spec만 격리 반복).

## MV-2 · 알림 provider 소유권 완성

높은 위험도. 별도 owner, 실제 provider 호출 금지.

- MV-2a: 현재 notification source/provider call graph 문서화 (코드 변경 없음).
- MV-2b: `reserveNotificationJobInSolapi`(`api/server.js:2951`) orchestration을 DI 가능한 server-side service로 분리. 기존 응답/재시도 의미 보존.
- MV-2c: `reconcileSolapiNotificationJobs`(`api/server.js:3219`) 분리, provider read와 source 상태 변경 구분.
- MV-2d: `dispatchDueNotificationJobs`(`api/server.js:5023`) 분리, claim/send/reconcile 단계별 결과 표현. 부분 성공을 전체 성공으로 숨기지 않는다.
- MV-2e: Slack scheduling 경계 검토. `codex/slack-scheduling-realtime`의 dry-run fixture(`test-slack-scheduling-provider.mjs`)를 최신 `api/routes/notifications.js` 기준으로 재작성 — main은 현재 이 계약을 문자열 매칭으로만 검사한다.
- MV-2f: `providerResultContract` 삭제로 결정하고 완료했다. MV-2b~d에서 실제로 만든 3개 서비스의 반환 shape(reserve의 `reserved`/`reused`/`canceledAfterReserve`, reconcile의 `checked`/`checkedCount`/`updatedCount`, dispatch의 `processed`/`processedCount`/`automaticSolapiReconcile`)가 서로 전혀 다르고, 억지로 공통 envelope에 맞추면 registry·App의 필드 접근이 전부 깨진다는 게 실제 코드로 확인됐다.

## MV-3 · App의 고빈도 도메인 응집

- MV-3a: `normalizeGradeLabel`/`schoolNamesMatch` App.jsx↔server.js 중복 여부 확인 후 정답 위치로 통합 (의미가 같을 때만).
- MV-3b: 시험관리 순수 함수(`dedupeExamPrepRowsForDisplay` `App.jsx:1796`, `ExamPrepLessonDetail` `App.jsx:8227` 등)를 `src/domains/exams/`로 추출.
- MV-3c: `codex/refactor-supplement-11b`의 5개 후보(lesson continuity/roster selector `App.jsx:623-661`, homework continuity `App.jsx:9301,9318` 등)는 merge/cherry-pick하지 않고 최신 main 기준 재구현 스펙으로만 사용한다.
- MV-3d: `src/app/TeacherViewOutlet.js`의 17개 화면 조립 중 최근 변경 빈도가 높은 화면 1개를 골라 화면 전용 facade/hook으로 응집. 저장 owner·CAS/readback 의미는 변경하지 않는다.
- MV-3e: 미통합 모듈(`lessonJournalRecordBulkApi.js`, `lessonJournalHomeworkBulkApi.js`, `useSupplementNotificationDraftSelectionState.js`) orphan 상태 재확인 후 통합 또는 명시적 삭제.

## 하지 말 것

direct route 숫자를 0으로 만들기 위한 일괄 이동, handler 개수 축소용 wrapper 추출, App.css 전체 선제적 분리, 모든 provider에 억지 envelope 통합, 오래된 branch 전체 merge/cherry-pick, 동일 SHA 반복 전체검사, 매 commit마다 상태 문서 3종 갱신, 줄 수·테스트 수만으로 성공 판정, 실제 알림 발송·운영 SQL·유료 AI 자동 실행.

## 완료 지표 (baseline, 2026-08-20)

기능 commit당 변경 파일 수(중앙값) 3 · App.jsx+server.js 동시 수정 비율 7%(1/14) · 상태 문서 commit당 갱신 빈도 109~111/339 · test:production 70구간/83리프 · 알려진 browser flake 1건(resource-material disabled-fieldset timing). 목표는 절대 수치가 아니라 이 baseline 대비 감소율이다.
