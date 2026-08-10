# Academy OS Agent Guide

이 파일은 새 Codex 작업의 짧은 공통 규칙이다. 완료 이력과 상세 설계는 여기 넣지 않는다.

## 최우선 검증 원칙 · 2026-08-10

- 위험도는 기능의 중요성이나 `저장`이라는 단어가 아니라 **이번 diff가 실제로 바꾼 경계와 blast radius**로 정한다. 기존 API·DB·CAS 계약을 그대로 사용하는 frontend 입력·표시 수정은 중위험이며 자동으로 고위험이 되지 않는다.
- 검증은 `재현 fixture -> 관련 전용 테스트 -> 집중 browser/API -> 필요한 build` 순서로 가장 가까운 신호를 먼저 사용한다. 테스트 총량보다 실제 사용자 동작과 서버 원천 대조를 우선한다.
- 같은 commit의 전체 production·전체 safe browser를 로컬, branch, main에서 반복하지 않는다. 전체 검사는 진짜 고위험 branch에서 원격으로 한 번만 수행하고, 로컬 전체검사는 원격 실패 원인 규명이나 환경 차이 확인 때만 추가한다.
- 저·중위험은 관련 검사와 focused smoke가 통과하면 exact-head 전체 branch CI를 필수 Gate로 삼지 않는다. main의 전체 CI는 백그라운드 회귀 monitor이며 완료를 막지 않고, 배포 commit과 변경 기능 smoke를 완료 기준으로 삼는다.
- 문서·테스트 전용 변경은 링크·명령·diff만 확인하고 production build·배포·운영 smoke를 생략한다. 전체 회귀는 매 commit이 아니라 scheduled 일일 검사 또는 진짜 고위험 변경에서 수행한다.
- Worktree 격리, 시작 main 불변, fast-forward only, force push 금지, 운영 side effect 사람 Gate, 저장 후 서버 재조회 원칙은 그대로 유지한다.

## 시작할 때 읽기

1. `docs/STATUS.md`
2. `docs/deferred-work-queue.md`
3. `git status --short`, `git log -1 --oneline`
4. 요청과 직접 관련된 코드·도메인 문서만 선택해서 읽기

`docs/archive/`와 과거 handoff는 문제의 역사나 근거가 필요할 때만 읽는다. 새 사용자 요청이 있으면 장기 큐 전체를 반복하지 말고, 요청과 충돌하는 우선순위만 짧게 알린다.

## 현재 사람 Gate

- 전역 필수 gate는 없다.
- AI가 정적검사·fixture·안전한 가상 데이터로 확인할 수 있는 작업은 먼저 완료한다.
- 운영 데이터 삭제·대량 변경, 실제 알림 발송/예약/취소, 유료 AI 호출, 운영 SQL 적용, 계정 로그인/관리자 승인이 필요한 순간에만 최소한의 사람 gate를 요청한다.
- 완료된 gate는 `docs/STATUS.md`에 한 줄만 남기고 상세 내용은 worklog/archive로 보낸다.

## 작업 원칙

1. 사용자의 현재 요청을 우선하되 한 번에 하나의 안전한 단위로 구현한다.
2. 코드 변경 전 원본 데이터, local draft, API/DB 저장 원천, 파생 화면값, 외부 side effect를 구분한다.
3. 운영 입력은 가능하면 `local draft -> 명시적 저장 또는 안전한 debounce -> API 성공 -> Supabase 재조회·대조 -> 저장 완료 표시`를 따른다.
4. localStorage나 낙관적 UI만으로 저장 완료 처리하지 않는다. 새로고침·재로그인·다른 기기에서도 유지되어야 하는 값은 서버 원천에 저장한다.
5. 사용자 입력은 렌더 중 파생값·AI 초안·template가 덮어쓰지 않는다. `seed -> local draft -> persisted human value` 순서를 지킨다.
6. 저장과 알림 발송/예약, 삭제, 유료 AI 실행은 별도 행동으로 분리한다. 실제 범위가 버튼 문구와 일치해야 한다.
7. 오류를 감추는 filter/fallback/normalize가 겹치면 패치를 중단하고 원천 데이터·저장 경계·마이그레이션을 재검토한다.
8. 요청과 무관한 대규모 리팩터링을 섞지 않는다. 기능 수정이 먼저 main에 들어간 뒤 별도 리팩터링이 따라간다.

## 검증과 완료

- 검증 명령 선택의 source of truth는 `docs/testing-policy.md`다.
- 일반 코드 변경: 관련 `test:domain:*`·전용 테스트와 영향받은 runtime lint/build만 실행한다.
- 빠른 일반 검증은 `npm run check:fast`를 사용한다. 전체 production은 진짜 고위험 branch의 원격 exact-head에서 한 번 실행하고, 저·중위험과 동일 SHA main에서는 반복하지 않는다.
- 새 UI 핵심 경로는 운영 계정 대신 `npm run dev:safe` 가상 환경에서 자동 브라우저 검사를 먼저 만든다.
- 테스트를 파일 위치나 정확한 내부 개수에 과도하게 결합하지 않는다. 사용자 동작과 저장 계약을 검증한다.
- 작업 완료 시 `docs/STATUS.md`, `docs/current-worklog.md`, `docs/next-session/DAILY_HANDOFF.md`를 짧게 갱신한다.
- AI가 검증할 수 없는 실제 화면·운영 원천이 남을 때만 사람 확인 절차를 제시한다. 문서 변경이나 완전 자동검증 작업에 형식적인 7단계 gate를 강요하지 않는다.

## Git·폴더 소유권

- canonical main 작업 폴더: `C:\Dev\academy-os`.
- `C:\Users\PC\Documents\academy os`는 오전 9시 자동 작업 전용 clone이며 사람 작업에 사용하지 않는다.
- 시험분석 독립 작업: `C:\Dev\academy-os-exam-analysis`의 전용 branch.
- 동시 작업은 같은 worktree/index를 공유하지 않는다. 별도 `codex/` branch와 worktree를 사용하고 main 통합 owner는 한 세션만 둔다.
- 사용자 소유 변경을 임의로 stage/revert하지 않는다. 예상 밖 변경이나 충돌이 있으면 중단하고 보고한다.
- 검증이 끝난 AI 변경은 별도 지시가 없어도 의도적으로 commit하고 GitHub에 push한다.
- 매일 9시 자동 task의 1~3번 작업은 사람 Gate가 없고 시작 기준 `origin/main` 불변·동시 통합 owner 없음·fast-forward 가능 조건을 만족하면 AI가 force 없이 main까지 통합한다. 정확한 branch HEAD 전체 검사는 진짜 고위험에서만 필수이며, 저·중위험은 관련 검사·focused smoke를 Gate로 사용한다. main CI는 백그라운드 monitor로 두고 배포 commit·변경 smoke를 확인한다.
- 비밀값, `.env`, PDF/HWP/HWPX/ZIP, 대용량 운영 자료는 commit하지 않는다. API key 값은 출력하지 않는다.

## 배포·운영 경계

- GitHub: `https://github.com/koh-you/academy-os`
- Frontend: `https://academy-os-blue.vercel.app`
- Backend: `https://koh-you-math-academy-os-api.onrender.com`
- main push 뒤 exact 배포 commit과 변경 기능 smoke가 통과해야 반영 완료로 본다. 동일 SHA의 main 전체 CI는 백그라운드 회귀 monitor이며 저·중위험 완료를 막지 않는다.
- Supabase SQL은 파일로 준비하고 사용자가 SQL Editor에서 적용한다.
- 화면만 맞아 보이는 수정이 아니라 API 응답과 필요한 서버 재조회를 성공 기준으로 삼는다.

## 제품 핵심 규칙

- 중심 화면은 Lesson Hub / 수업일지이며 표시명은 `으뜸수학 고태영T`다.
- 학생 화면은 태블릿 우선, 학부모 화면은 모바일 우선이다.
- AI 기능은 `AI 초안 -> 사람이 편집·확정 -> 확정본 원본화 -> 산출물 반영`을 따른다.
- 시험분석은 v2 파이프라인만 사용하며 AI가 문항 수·행 개수·사람 확정값을 임의로 바꾸지 않는다.
- 알림 미리보기와 실제 발송 문구는 같은 설정 원천을 사용한다.

상세 큐는 `docs/deferred-work-queue.md`, 개발 계약은 `docs/engineering-contracts.md`, 과거 완전 이력은 `docs/archive/`를 기준으로 한다.
