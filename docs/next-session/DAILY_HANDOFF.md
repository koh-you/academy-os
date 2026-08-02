# Daily Development Handoff

업데이트: 2026-08-02

## 어제까지 완료

- 개발 canonical 경로와 중복 clone 경고를 자동 진단한다.
- 안전한 가상 로컬 실행, runtime lint, client error reporter, browser smoke, 요약형 production test를 추가했다.
- 장문 지침은 archive하고 현재 상태·큐·계약 문서로 분리했다.
- 매일 오전 9시 독립 자동 task를 등록했다. 자동 작업은 전용 clone과 날짜별 `codex/` branch만 사용한다.

## 오늘 자동 작업

- 3차 리팩터링 3-0 기준선을 최신 main에서 측정하고 5개 핵심 도메인의 10초 이내 fast fixture 경로와 검증 정책을 추가했다.
- 3-1 첫 단위로 Notification Center top-level 화면을 도메인 파일로 옮겼다. 저장·발송 handler와 특강 panel owner는 유지하고 App runtime binding을 teacher view adapter로 명시했다.
- 로컬 browser smoke의 Worktree 격리 runner를 기본 명령으로 추가했다. 다음 단위는 Teacher Lesson Hub 또는 Lesson Journal Detail을 한 화면씩 이동한다.

- `app_state` 자동저장 12개 key의 500ms debounce, request ID, API upsert, `updated_at` 경계를 inventory했다.
- 역순 도착 시 오래된 요청이 최신값을 덮는 fixture를 추가하고 Production checks에 연결했다.
- 전용 inventory, runtime lint, production `809/809`, build `345 modules`, safe browser smoke `2/2`를 통과했다.
- 운영 쓰기·발송·예약·취소·유료 호출·SQL 적용은 없었다.

## 사용자 후속 수정

- 월별 정산은 서울 기준 1~2일에 지난달, 3일부터 이번 달을 기본 선택하며, 정산월·저장 상태·PDF 버튼은 한 반응형 카드에 표시한다.
- 월별 정산 표의 `월별 스케줄`, `정산 처리` 열은 제거했다. 기존 저장 원천·계산은 보존하고, PDF에서는 학생별 최종 정규 횟수만 남기며 그 횟수의 합산은 제거했다.
- 최종 정규 횟수 상세 모달에는 명시적 저장·Supabase 재조회 확인만 둔다. 저장 후 모달을 닫고 바깥 `횟수·금액 PDF`를 열며, 보고서의 `인쇄하기` 버튼으로 브라우저 인쇄를 실행한다. 안전 브라우저에서 입력·저장·모달 닫기·PDF 값·인쇄 버튼까지 검증했다.
- 후속 UI 요청도 별도 기능·개선 단위로 완료했다. 수업 등록 행동은 월 이동 박스 안 오른쪽으로 이동했고, 월별 출결·수업 모달은 데스크톱 최대 1320px로 넓혀 1280px 안전 화면에서 달력 가로 스크롤이 없음을 검증했다.

- 특강 정산 탭은 수강 계획과 실제 특강 수업일지를 대조해 출결과 일지 누락을 표시하고, 학생 프로파일은 월별 정규·특강 출결을 함께 보여준다.
- 횟수·시수 달력 모달에서 시스템 계산 횟수와 교사 확정 최종 정규 횟수를 대조한다. 확정값은 수업일지가 없는 경우에도 신입·퇴원 금액과 PDF에 사용하고 월정액 금액은 유지하며, 요청 차감·추가 입력 열은 제거했다.
- 월별 정산 보고서는 `이름·최종 정규 횟수·금액` 및 합계만 PDF 인쇄하며 세부 출결·필터는 제외한다.
- 보강 시간은 정규 프로필 스케줄 대신 실제 보강 수업일지 시간을 사용하도록 교정했다. 최신 Phase 5 main 통합 뒤 정산·teacher-view 전용 fixture, runtime lint, scenario `810/810`, production `810/810`, build `352 modules`, 격리 safe browser `8/8`을 통과했고 운영 쓰기는 없었다.
- 7월 정산 운영 원천을 읽기 전용으로 분석해 신규생 회차제의 예정 시간표 의존과 해당 월 퇴원생의 고정 요금 유지가 원인임을 확인했다.
- 신규생은 수업일지의 정산 인정 정규 회차를 사용한다. 휴강은 보강 전에도 1회로 포함하고 연결 보강은 중복 계산하지 않으며, 기존 퇴원생은 교사 override가 없으면 자동 퇴원 비례로 계산한다. 출결 달력은 출석·결석·지각·공결·대기를 서로 다른 색으로 구분하고 대기는 미확정 상태로 표시한다.
- 학생별 행과 상세에는 휴강 포함, 연결 보강 추가 계산 제외, 대기 출결 미확정의 적용 회수를 별도 표기한다.
- 재계산 예상: 이채빈 5회·187,500원, 김형준 11회·412,500원, 이윤채 11회·385,000원, 김예나 13/14·417,857원.
- 정산 전용 fixture, runtime lint, production `810/810`, build `349 modules`, safe browser `5/5` 통과. 운영 snapshot은 저장하지 않았으므로 배포 뒤 사용자가 7월 화면을 확인하고 `월별 정산 저장`을 눌러야 한다.
- 첫 화면 운영 알림을 입력 폼과 별도로 접고 펼칠 수 있다.
- 보충관리 목록에 요일별·이름 가나다별 정렬을 추가했다.
- 보충 시간은 시/분 선택으로 분리했고 시를 고르면 `00분`이 기본이다.
- 결석보강 알림톡 3종은 한 화면에서 편집·일괄 저장한다. 학생 문구 수정은 학부모·당일 학생 문구에도 연동되어 3종 최종본으로 저장된다.
- Solapi 확인 모달은 학생·학부모·당일 학생 3종을 함께 보여 주고, 취소 가능한 예약을 한 번에 일괄 취소한다. 실제 취소·예약은 수행하지 않았다.
- 저장 상태 3종과 주요 행동은 결석보강 모달 하단 고정바에서 스크롤 위치와 무관하게 확인한다.
- 위 5개 사용자 수정은 정산 수정이 포함된 최신 main에 재배치해 관련 전용 테스트, notification/app_state 경계, production `810/810`, build `349 modules`, Worktree 격리 safe browser `7/7`을 통과했다.
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
- Phase 1 auth/session과 Phase 2 출결 polling·동기화는 main 통합 완료다.
- Phase 2에서 kiosk 날짜 rollover lifecycle을 출결 hook으로 이동하고 전용 fixture를 추가했다. safe browser가 TDZ 배치 오류를 발견해 최소 수정했으며 재실행 4/4가 통과했다.
- Phase 3는 PR #4로 main 통합 및 CI/배포 성공했다. Phase 4 app_state 동일 key 직렬화·`updated_at` CAS·Supabase 재조회 완료 판정을 구현하고 전체 자동검증을 통과했다.
- Phase 4와 사용자 수업일지·보충관리 수정은 main 통합과 CI·Vercel 배포가 완료됐다. Phase 5도 17개 teacher 화면 callback 조립을 `TeacherViewOutlet` adapter로 분리해 PR #9, merge commit `254cd0b1`로 main 통합했고 main CI·Vercel production이 성공했다.
- main 병합은 의미 변경·운영 side effect 없이 AI 리뷰와 전체 검사·PR CI·배포가 성공하면 AI가 판단해 진행한다.

1. `git status --short`가 clean이고 최신 main인지 확인한다.
2. 오늘 branch의 GitHub Actions 결과를 확인한다.
3. App 2차 리팩터링 Phase 1~5는 완료 상태로 유지하고 자동 재개하지 않는다.
4. 다음 대형 단위는 최신 main의 별도 Worktree에서 `App.jsx` 내부 화면 정의 물리 분리와 teacher 화면 lazy loading/code splitting 중 하나만 시작한다.
5. 운영 삭제·발송·예약·유료 AI·SQL 적용이 필요하면 구현을 넓히지 말고 정확한 사람 gate를 남긴다.

## 종료할 때

- 관련 검사와 build를 실행한다.
- `STATUS.md`, `current-worklog.md`, 이 파일을 짧게 갱신한다.
- 의도한 파일만 commit/push한다.
