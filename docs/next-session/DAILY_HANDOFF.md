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

- 첫 화면 운영 알림을 입력 폼과 별도로 접고 펼칠 수 있다.
- 보충관리 목록에 요일별·이름 가나다별 정렬을 추가했다.
- 보충 시간은 시/분 선택으로 분리했고 시를 고르면 `00분`이 기본이다.
- 결석보강 알림톡 3종은 한 화면에서 편집·일괄 저장한다. 학생 문구 수정은 학부모·당일 학생 문구에도 연동되어 3종 최종본으로 저장된다.
- Solapi 확인 모달은 학생·학부모·당일 학생 3종을 함께 보여 주고, 취소 가능한 예약을 한 번에 일괄 취소한다. 실제 취소·예약은 수행하지 않았다.
- 저장 상태 3종과 주요 행동은 결석보강 모달 하단 고정바에서 스크롤 위치와 무관하게 확인한다.
- 숨겨진 달력 toolbar 안에 남아 사라졌던 `+ 수업 등록`과 조건부 `정규수업 열기`를 별도 표시 action bar로 긴급 복구했다.
- 숨겨진 달력 제어줄과 분리해 수업일지의 이전·다음 달 탐색을 복구했고 실제 월 단위 이동·말일 보정을 적용했다.
- 8월 1일 수업일지의 빈 교재·강의 내용 원인을 운영 원천에서 확인하고, 같은 반의 최신 비어 있지 않은 과거 기록을 필드별로 월 경계 너머까지 승계하도록 수정했다. 특강 기록은 분리된다.
- safe browser에 월 이동 왕복 회귀를 추가했다.
- safe browser에 직전 빈 기록을 건너뛰는 7월→8월 수업기록 승계 회귀를 추가했다.
- 매일 자동 task는 시작 시 서울 기준 날짜를 제목 앞에 붙이도록 자동화 프롬프트를 갱신했다.
- 최신 검증: 관련 전용 테스트, scenario `809/809`, runtime lint, build `346 modules`, safe browser 사용성 확인, production 전체 묶음 통과.
- 별도 `codex/app-high-risk-boundaries-phase1` worktree에서 App 고위험 5개 경계 inventory와 auth/session hook 분리를 완료했다. main에는 merge하지 않았으며, notification polling 중복/stale 응답과 hydration 전환 fixture가 남은 통합 위험이다.

## 다음 자동 실행 단위

- App 2차 리팩터링의 단계·검수·지연 보고 기준은 `docs/app-refactor-second-pass-plan.md`를 따른다.
- Phase 1 auth/session은 main 통합 완료이며 현재 수동 리팩터링 작업은 별도 Worktree의 Phase 2 출결 polling·동기화다.
- Phase 2에서 kiosk 날짜 rollover lifecycle을 출결 hook으로 이동하고 전용 fixture를 추가했다. safe browser가 TDZ 배치 오류를 발견해 최소 수정했으며 재실행 4/4가 통과했다.

1. `git status --short`가 clean이고 최신 main인지 확인한다.
2. 오늘 branch의 GitHub Actions 결과를 확인한다.
3. 통과했으면 같은 브라우저의 동일 `app_state` key 저장을 직렬화하고 진행 중 변경을 다음 요청으로 합치는 단위만 수행한다.
4. key별 `updated_at` CAS와 저장 뒤 재조회는 직렬화와 섞지 않고 다음 단위로 남긴다.
5. 운영 삭제·발송·예약·유료 AI·SQL 적용이 필요하면 구현을 넓히지 말고 정확한 사람 gate를 남긴다.

## 종료할 때

- 관련 검사와 build를 실행한다.
- `STATUS.md`, `current-worklog.md`, 이 파일을 짧게 갱신한다.
- 의도한 파일만 commit/push한다.
