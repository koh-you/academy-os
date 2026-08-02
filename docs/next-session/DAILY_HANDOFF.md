# Daily Development Handoff

업데이트: 2026-08-02

## 어제까지 완료

- 개발 canonical 경로와 중복 clone 경고를 자동 진단한다.
- 안전한 가상 로컬 실행, runtime lint, client error reporter, browser smoke, 요약형 production test를 추가했다.
- 장문 지침은 archive하고 현재 상태·큐·계약 문서로 분리했다.
- 매일 오전 9시 독립 자동 task를 등록했다. 자동 작업은 전용 clone과 날짜별 `codex/` branch만 사용한다.

## 오늘 자동 작업

- `app_state` 자동저장 12개 key의 500ms debounce, request ID, API upsert, `updated_at` 경계를 inventory했다.
- 역순 도착 시 오래된 요청이 최신값을 덮는 fixture를 추가하고 Production checks에 연결했다.
- 전용 inventory, runtime lint, production `809/809`, build `345 modules`, safe browser smoke `2/2`를 통과했다.
- 운영 쓰기·발송·예약·취소·유료 호출·SQL 적용은 없었다.

## 사용자 후속 수정

- 7월 정산 운영 원천을 읽기 전용으로 분석해 신규생 회차제의 예정 시간표 의존과 해당 월 퇴원생의 고정 요금 유지가 원인임을 확인했다.
- 신규생은 수업일지의 정산 인정 정규 회차를 사용한다. 휴강은 보강 전에도 1회로 포함하고 연결 보강은 중복 계산하지 않으며, 기존 퇴원생은 교사 override가 없으면 자동 퇴원 비례로 계산한다. 출결 달력은 출석·결석·지각·공결·대기를 서로 다른 색으로 구분하고 대기는 미확정 상태로 표시한다.
- 학생별 행과 상세에는 휴강 포함, 연결 보강 추가 계산 제외, 대기 출결 미확정의 적용 회수를 별도 표기한다.
- 재계산 예상: 이채빈 5회·187,500원, 김형준 11회·412,500원, 이윤채 11회·385,000원, 김예나 13/14·417,857원.
- 정산 전용 fixture, runtime lint, production `810/810`, build `349 modules`, safe browser `5/5` 통과. 운영 snapshot은 저장하지 않았으므로 배포 뒤 사용자가 7월 화면을 확인하고 `월별 정산 저장`을 눌러야 한다.
- 숨겨진 달력 toolbar 안에 남아 사라졌던 `+ 수업 등록`과 조건부 `정규수업 열기`를 별도 표시 action bar로 긴급 복구했다.
- 숨겨진 달력 제어줄과 분리해 수업일지의 이전·다음 달 탐색을 복구했고 실제 월 단위 이동·말일 보정을 적용했다.
- 8월 1일 수업일지의 빈 교재·강의 내용 원인을 운영 원천에서 확인하고, 같은 반의 최신 비어 있지 않은 과거 기록을 필드별로 월 경계 너머까지 승계하도록 수정했다. 특강 기록은 분리된다.
- safe browser에 월 이동 왕복 회귀를 추가했다.
- safe browser에 직전 빈 기록을 건너뛰는 7월→8월 수업기록 승계 회귀를 추가했다.
- 매일 자동 task는 시작 시 서울 기준 날짜를 제목 앞에 붙이도록 자동화 프롬프트를 갱신했다.
- 검증: 달력·수업기록 연속성 전용 테스트, scenario `809/809`, runtime lint, build `345 modules`, safe browser `4/4`, production 전체 묶음 통과.
- 별도 `codex/app-high-risk-boundaries-phase1` worktree에서 App 고위험 5개 경계 inventory와 auth/session hook 분리를 완료했다. main에는 merge하지 않았으며, notification polling 중복/stale 응답과 hydration 전환 fixture가 남은 통합 위험이다.

## 다음 자동 실행 단위

- App 2차 리팩터링의 단계·검수·지연 보고 기준은 `docs/app-refactor-second-pass-plan.md`를 따른다.
- Phase 1 auth/session과 Phase 2 출결 polling·동기화는 main 통합 완료다.
- Phase 2에서 kiosk 날짜 rollover lifecycle을 출결 hook으로 이동하고 전용 fixture를 추가했다. safe browser가 TDZ 배치 오류를 발견해 최소 수정했으며 재실행 4/4가 통과했다.
- Phase 3는 PR #4로 main 통합 및 CI/배포 성공했다. Phase 4 app_state 동일 key 직렬화·`updated_at` CAS·Supabase 재조회 완료 판정을 구현하고 전체 자동검증을 통과했다.
- Phase 4 검증은 app_state 전용 2종, runtime lint, scenario·production `809/809`, build `349 modules`, safe browser `4/4`이며 운영 데이터 쓰기·운영 SQL은 없었다. PR/CI 뒤 Phase 5를 최신 main 별도 Worktree에서 시작한다.
- main 병합은 의미 변경·운영 side effect 없이 AI 리뷰와 전체 검사·PR CI·배포가 성공하면 AI가 판단해 진행한다.

1. `git status --short`가 clean이고 최신 main인지 확인한다.
2. 오늘 branch의 GitHub Actions 결과를 확인한다.
3. 통과했으면 최신 main의 별도 Worktree에서 Phase 5 teacher view callback·화면 조립을 한 화면군씩 분리한다.
4. Phase 5 뒤 `App.jsx`와 production chunk의 후속 분할 순서를 남긴다.
5. 운영 삭제·발송·예약·유료 AI·SQL 적용이 필요하면 구현을 넓히지 말고 정확한 사람 gate를 남긴다.

## 종료할 때

- 관련 검사와 build를 실행한다.
- `STATUS.md`, `current-worklog.md`, 이 파일을 짧게 갱신한다.
- 의도한 파일만 commit/push한다.
