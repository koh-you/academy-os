# Academy OS Current Status

업데이트: 2026-08-03

## 현재 기준

- canonical repo: `C:\Dev\academy-os`, `main`, `origin/main`
- 최신 commit은 `git log -1 --oneline`을 source of truth로 사용한다.
- UI 통일 UI-0~UI-9와 기존 안전범위 App 리팩터링은 main 통합 완료다.
- 퇴원생 결석보강 `보강만 취소`, 수업일지 끝 공백 입력, 보충 상세 null 오류는 수정·운영 확인 완료다.
- 수업일지 달력은 숨겨진 제어줄과 분리된 이전·다음 달 탐색줄을 다시 표시하며 실제 월 단위로 이동한다.
- 수업일지의 `+ 수업 등록`과 조건부 `정규수업 열기`는 월 이동 하단 박스 안 오른쪽에 표시한다.
- 첫 화면 운영 알림은 입력 폼과 별도로 전체 목록을 접고 펼칠 수 있다.
- 보충관리는 요일별 또는 이름 가나다별 정렬을 지원하고, 시간은 시 선택 시 `00분`으로 시작해 분을 별도로 바꾼다.
- 결석보강 알림톡은 3종을 동시에 편집·확인하며 학생 문구 수정본을 학부모·당일 문구에 연동해 최종본으로 저장한다. 취소 가능한 Solapi 예약은 한 번에 취소하고 저장 상태·행동은 모달 하단 고정바에서 확인한다.
- 달력에서 결석보강 수업을 열면 일반 수업일지와 같은 헤더·출결·교재·수업내용·숙제·코멘트·저장·알림 구조를 사용한다. 차이는 헤더 아래에 원 결석 수업의 날짜·반·시간·결석 사유를 읽기 전용으로 한 줄 추가하는 것뿐이며, 숙제보충 전용 상세는 유지한다.
- 같은 학생의 결석보강 종료 뒤 정규수업이 30분 이내에 바로 이어지면 키오스크는 이를 한 번의 방문으로 처리한다. 보강 등원 때 두 수업일지에 같은 실제 등원시각을 저장하고 수업별 지각 여부는 따로 계산하며, 마지막 정규수업 하원 때 두 일지에 같은 최종 하원시각을 저장한다. 출결 알림 이벤트는 최초 등원과 최종 하원에만 각각 한 건 생성한다.
- 수업일지의 교재·강의 내용은 같은 반 과거 기록을 역순으로 확인해 필드별 최신 비어 있지 않은 값을 월 경계 너머에서도 이어받으며, 특강 기록은 정규반에 섞지 않는다.
- 월별 정산의 신규생 회차제는 예정 시간표가 아니라 수업일지의 정산 인정 정규 회차를 사용한다. 휴강은 보강 전에도 1회로 포함하고 연결 보강은 추가 회차로 중복 계산하지 않는다. 퇴원일이 해당 월에 있으면 교사 고정 override가 없는 한 자동 퇴원 정산하며, 출결 달력은 출석·결석·지각·대기를 서로 다른 색으로 구분한다.
- 학생별 정산 행과 출결·수업 상세에는 `휴강 n회 · 정규 회차 포함`, `연결 보강 n회 · 추가 계산 없음`, `대기 n회 · 출결 미확정`처럼 예외 적용 근거를 별도 표기한다.
- 특강 정산은 확정 수강 계획과 실제 특강 수업일지 출결을 분리해 `계획/일지/출결/일지 누락`을 함께 표시한다. 학생 프로파일에서는 선택 월의 정규·특강 출결을 한 화면에서 확인한다.
- 월별 정산의 횟수 버튼을 열면 시스템 계산 횟수를 대조하고 `최종 정규 횟수`를 교사가 확정할 수 있다. 확정 횟수는 수업일지 유무와 관계없이 신입·퇴원 계산과 PDF에 반영되며 월정액 금액은 유지한다. 조정금액 입력 열은 제거했다.
- 최종 정규 횟수 상세 모달에는 Supabase 저장·재조회 확인 버튼이 있다. 저장 후 모달을 닫고 바깥 `횟수·금액 PDF`에서 확정값을 출력하며, 보고서 창에는 브라우저 자동 인쇄와 별도로 `인쇄하기` 버튼이 있다.
- 학생 신규 저장은 중복 ID/로그인을 덮어쓰지 않는 insert-only이고, 목록 행·프로필·Tally/특강 반영·퇴원 취소는 학생별 `updated_at` CAS 뒤 Supabase 재조회까지 일치해야 완료한다. 저장 중 후속 입력과 충돌 입력은 화면에 남겨 새 서버 버전으로 다시 저장하며 신규 모달은 확인 전 닫히지 않는다.
- 학생 추가·반 이동·반관리·퇴원은 학생 반 필드와 미래 수업 `studentIds`를 하나의 versioned save plan으로 저장한다. 중간 충돌은 이미 반영한 직접 원천을 역순 보상하고 원래 버전까지 재조회하며, 성공도 두 원천의 Supabase 재조회가 모두 일치해야 화면에 반영한다. 과거 수업과 변경 대상 밖 수동 명단은 보존한다.
- 수동 학사일정 등록·수정·삭제는 일정별 `updated_at` CAS·insert-only·Supabase 재조회 대조 뒤에만 화면 목록을 교체한다. 결과 불명 신규 저장은 같은 ID로 안전하게 재시도하고, 충돌·실패에서는 모달 입력을 유지하며 저장 중 편집·닫기를 잠근다.
- 시험관리에서 파생된 시험기간·수학시험 일정은 `exam_prep_rows`와 연결 `preExam lessons`를 한 versioned plan으로 저장한다. 행·수업별 CAS와 Supabase 재조회, 동일 요청 재시도, 중간 실패의 역순 보상 뒤에만 화면을 교체하며 수동 보호·자동생성 제외 수업과 연결 기록·알림 작업은 자동 덮어쓰기·삭제하지 않는다.
- 수업 달력의 복사·취소·되돌리기는 하나의 versioned history action으로 `lessons`와 복사 숙제를 저장한다. 행별 CAS/insert-only·Supabase 재조회·중간 실패 역순 보상 뒤에만 UI와 undo stack을 바꾸며, 결과 불명 복사는 같은 수업 ID와 계획으로 재시도한다. 복사 뒤 새 기록·숙제·알림 작업이 연결되면 자동 되돌리기를 막고, 취소 복구는 현재 서버 기록·숙제를 다시 읽어 화면에 반영한다.
- 수업일지의 `lesson_student_records`와 숙제 다중 행은 하나의 versioned save plan으로 저장한다. 기존 행은 `updated_at` CAS, 신규 행은 insert-only를 사용하고 모든 행의 Supabase 재조회가 일치해야 화면 원천을 갱신한다. 동일 저장 재시도는 추가 쓰기 없이 성공하며 중간 실패는 역순 보상한다. 보상 중 더 최신 행이 발견되면 덮지 않고 부분 실패로 표시하며, 충돌·실패와 저장 중 후속 입력의 draft를 유지한다.
- 교사 `숙제현황`의 확인 상태는 더 이상 화면에 먼저 반영한 뒤 실패를 console로만 남기지 않는다. 기존 versioned 숙제 행 저장을 사용해 `updated_at` CAS와 Supabase 재조회가 확인된 뒤에만 App 원천을 교체하며, 저장 중 행을 잠그고 충돌·실패에서는 이전 상태와 행별 실패 표시를 유지한다.
- 자료함은 stable ID·생성 토큰의 insert-only/CAS 메타데이터 row와 private Storage 파일을 함께 관리한다. 파일은 생성 토큰·내용 해시 경로에 업로드하고 row 저장 실패 시 새 객체를 정리한다. 삭제는 파일 백업·Storage 삭제 뒤 row CAS를 실행하며 충돌 시 정확한 경로로 파일을 복구한다. 교사 또는 해당 학생·학부모 bearer를 서버에서 다시 확인한 뒤에만 외부 링크나 서명 URL을 발급하고, 포털 초기 payload도 공개 범위로 제한한다. 성공은 Supabase 목록 재조회 뒤에만 화면에 반영한다.
- 보고서 snapshot은 공용 `app_state` 자동저장에서 분리했다. 교사 bearer가 필요한 전용 API가 최신 `reportSnapshots`와 `updated_at`을 읽고 CAS append한 뒤 Supabase 재조회가 일치해야 화면에 완료를 표시한다. 결과 불명 재시도는 같은 stable report ID를 회수해 중복을 만들지 않으며, `모의 발송`은 실제 알림 없이 저장 상태만 기록한다.
- 수업일지에서 만드는 등원보충 초안은 학생·원 숙제·task 유형으로 고정한 요청 ID를 사용한다. 신규 `makeup_tasks`는 insert-only, 기존 항목은 `updated_at` CAS로 저장하고 Supabase 재조회가 일치해야 완료한다. 저장 응답만 유실된 재시도는 같은 항목 한 건으로 회수하며 다른 화면의 최신 수정은 덮지 않고 수업일지 draft를 유지한다.
- 보충관리 상세는 `makeup_tasks.linkedLessonId`, `lessons.sourceMakeupTaskId`, 실제 일정, 미발송 `notification_jobs`를 함께 대조한다. 연결 수업 누락·역연결 ID 불일치·중복·다른 원천·예상 밖 일정 차이에서는 더 이상 반영 완료로 표시하지 않고 일정 저장과 새 알림 예약을 막는다. 기존 예약 확인·취소 화면은 원인 확인을 위해 유지하며 자동 복구나 provider 행동은 실행하지 않는다.
- 보충 일정 생성·변경은 연결 `lessons`와 `makeup_tasks`를 하나의 versioned save plan으로 저장한다. 신규 insert-only·기존 `updated_at` CAS·Supabase 재조회가 모두 일치해야 화면 원천을 갱신하고 그 뒤에만 기존 알림 orchestration을 호출한다. 결과 불명 뒤 날짜·시간·메모가 바뀌어도 logical task의 최초 audit를 먼저 회수하고 확인된 새 버전에 최신 draft를 CAS 저장한다. provider 실패는 원천 저장 실패로 되돌리지 않고 `일정 저장 완료 · 알림 예약 실패`와 provider-only 재시도 범위로 분리한다. 두 번째 원천 실패의 역순 보상과 최신 변경 보호도 유지한다.
- 월별 출결·수업 모달은 데스크톱에서 최대 1320px까지 넓어져 달력 7열을 가로 스크롤 없이 한눈에 확인한다.
- 월별 정산 표에서는 `월별 스케줄`, `정산 처리` 열을 표시하지 않는다. 기존 스케줄·제외 저장 원천과 금액 계산은 보존한다.
- 월별 정산 기본월은 서울 기준 매월 1~2일에는 지난달, 3일부터는 이번 달이다. 정산월·저장 상태·PDF 행동은 한 컨트롤 카드에서 표시한다.
- 월별 정산 PDF는 정산 제외 학생을 뺀 `이름·최종 정규 횟수·금액`을 출력하되 최종 정규 횟수 합계는 표시하지 않고 총 금액만 합산한다. 보강 달력 시간은 학생 정규 스케줄이 아니라 실제 보강 수업일지 시간을 사용한다.
- 2026년 7월 운영 원천을 읽기 전용으로 재계산한 교정 예상은 이채빈 정규 5회, 김형준 11회, 이윤채 11회, 김예나 퇴원 비례 13/14다. 운영 정산 snapshot 저장은 사람 확인 뒤 실행한다.
- 전역 사람 gate는 0건이다.

## 개발환경 상태

- Node 24 기준, `npm ci` 사용.
- Vercel Hobby 배포를 위해 `api/**/*.js` Serverless Function 후보는 12개 이하로 유지하며 production inventory가 초과를 차단한다.
- `npm run doctor`가 경로·Git·Node·중복 clone을 점검한다.
- VS Code F5는 운영 데이터에 연결하지 않는 안전한 가상 환경을 연다.
- ESLint runtime 검사, 간결한 scenario 요약, client runtime error reporter, Playwright browser smoke가 있다.
- 로컬 browser smoke는 Worktree별 가용 frontend/API 포트를 자동 선택하고 기존 preview를 재사용하지 않는다.
- GitHub Actions는 lint, production test, build, browser smoke를 실행하는 것이 목표다.
- `app_state` 자동저장 11개 key의 요청 역전·CAS/재조회 경계를 검사하는 inventory가 Production checks에 연결됐다. 보고서 snapshot은 전용 명시 저장 계약을 사용한다.
- 시험정보 행 자동저장은 같은 브라우저에서 요청을 하나씩 직렬 처리하고 행별 `updated_at` CAS 뒤 Supabase 재조회가 일치해야 저장 완료로 처리한다. 저장 중 들어온 최신 입력은 첫 성공 행의 새 버전으로 재기준화해 보존하고, 다중 탭·기기 충돌은 자동 병합하지 않은 채 현재 입력과 `저장 실패` 상태를 유지한다. 삭제 감사 rollback만 명시적 `allowRestore`로 행 재생성을 허용한다.
- Tally 신규생 후보 입력은 후보별로 요청을 직렬 처리하고 `updated_at` CAS와 Supabase 재조회가 일치해야 저장 완료로 처리한다. 저장 중 후속 입력은 첫 성공 버전으로 재기준화해 최신값만 이어서 저장하며, 충돌·결과 불명 실패는 자동 재전송하지 않고 현재 입력과 실패 상태를 유지한다. 정식 등록은 해당 후보 입력 저장이 끝난 뒤 시작한다.
- App 2차 리팩터링 Phase 1 auth/session은 PR #2로 main 통합됐다. session state·초기 저장소 판독·login/logout·teacher 저장 cleanup은 `useAppSession`이 소유하며 전용 fixture가 Production checks에 연결됐다.
- Phase 2~5와 AI 연쇄 검수·지연 보고·사람 gate 원칙은 `docs/app-refactor-second-pass-plan.md`가 기준이다.
- Phase 2 branch에서 출결 kiosk 날짜 rollover의 ref·reload key·interval/listener를 출결 hook 경계로 이동하고 cleanup·동일 날짜 hydration 실패 재시도 fixture를 추가했다.
- Phase 2는 PR #3으로 main 통합됐고 main Production checks·Vercel이 성공했다.
- Phase 3 notification refresh/reconcile은 PR #4, merge commit `7fb366f9`로 main 통합됐고 main Production checks·Vercel이 성공했다.
- Phase 4 app_state persistence는 변경 key를 브라우저에서 직렬화하고 기존 `updated_at` CAS와 Supabase 재조회가 일치한 뒤에만 저장 완료로 판정한다. 충돌 시 입력을 유지하고 자동 반복하지 않으며 전체 자동검증을 통과했다.
- 수업일지 생성 action, 첫 화면 알림 접기, 보충 정렬·시간 입력·알림톡 3종 통합 수정은 최신 main 위에서 재검증했다. safe browser는 Worktree별 격리 포트를 지원해 다른 작업의 미리보기를 재사용하지 않는다.
- Phase 5는 PR #9, merge commit `254cd0b1`로 main 통합됐다. 17개 교사 화면의 component/props/callback 조립은 `TeacherViewOutlet` adapter가 담당하고, `App`은 상태와 저장·삭제·예약·취소·발송·재대조 handler를 계속 소유한다. main Production checks와 Vercel production 배포가 성공했다.
- App 3차 리팩터링 3-0은 `docs/app-refactor-third-pass-plan.md`의 크기·시간 기준선을 사용한다. 검증 선택은 `docs/testing-policy.md`가 기준이며 lesson·supplement·student·notification·settlement fast 묶음을 제공한다.
- 3-1 첫 단위에서 Notification Center top-level 화면을 notification 도메인 파일로 물리 분리했다. App-level 알림 조회·취소·reconcile callback과 특강 panel binding은 유지하고, 화면의 기존 공지 발송·예약·삭제 request binding도 의미 변경 없이 함께 이동했다.
- 3-1 두 번째 단위에서 Teacher Lesson Hub 화면 조립을 `src/domains/lessons/TeacherLessonHubV2.jsx`로 물리 분리했다. 달력 local filter·focus·키보드 navigation은 새 화면이 소유하고, 수업일지 저장·알림 예약/취소/발송/reconcile handler와 상세 화면은 App runtime binding을 통해 기존 owner를 유지한다.
- 3-1 세 번째 단위에서 Lesson Journal Detail 화면을 `src/domains/lessons/LessonJournalDetail.jsx`로 물리 분리했다. 화면 local draft·overlay·예약 표시 상태는 도메인 화면에 두고, 저장·삭제·알림 예약/취소/발송/reconcile callback과 OS 예약 조회 transport는 App owner를 유지한다.
- 3-2 첫 단위에서 수업일지 record·homework·makeup local draft 조작과 저장 성공/실패 전이를 `useLessonJournalDraftController`로 묶었다. App의 Supabase 저장·재조회 callback은 유지한다. 성공 때도 요청 중 후속 입력이 있으면 최신 draft와 편집 모드를 보존해 재저장을 안내하고, 실패·부분저장 때도 수정본을 유지한다.
- 3-2 두 번째 단위에서 수업일지의 persistence callback 10개와 provider/transport callback 7개를 `lessonJournalEffectAdapter` 계약으로 묶었다. 실제 Solapi 예약·취소까지 조정하는 알림 계획 적용은 provider 표면에 두고, App의 실제 저장·삭제·AI·Solapi·재대조 함수는 이동하지 않았다. Teacher Lesson Hub는 개별 고위험 callback 대신 adapter 하나를 상세 화면에 전달한다.
- 3-2 세 번째 단위에서 수업 등록·수정 `LessonModal` local controller를 lesson 도메인 파일로 옮겼다. local draft·validation·저장 표시는 새 화면이 소유하고, 실제 bulk 저장·Supabase 재조회·휴강 preflight·상태 반영은 App callback owner를 유지한다. 달력·수업일지·수업 모달 경계를 모두 대조해 3-2를 닫는다.
- 3-3에서 보충관리의 기존 draft·일정·취소·알림 제어 controller 분리를 재대조하고, App에서 화면으로 전달하던 8개 callback을 `supplementEffectAdapter`의 persistence 3개·provider 2개·orchestration 3개 표면으로 묶었다. 실제 저장·Supabase 재조회·Solapi 예약·취소 owner는 App에 유지하며 3-3을 닫는다.
- 3-4 첫 단위에서 학생관리의 16개 변경 callback을 `studentEffectAdapter`의 draft 1개·persistence 7개·deletion 5개·lifecycle 2개·audit 1개 표면으로 묶었다. App의 학생 저장·재조회·퇴원·복구·영구 삭제 구현은 그대로 유지하며 다음 학생 프로필 물리 분리의 고정 계약으로 사용한다.
- 3-4 두 번째 단위에서 `StudentManager` 후반의 학생 프로필 화면·오류 경계·전용 helper를 `StudentProfileModal.jsx`로 옮겼다. 기존 프로필 본문과 callback 10개의 의미는 그대로이며, 실제 저장·Supabase 재조회·오류 복구는 App owner를 유지한다. `StudentManager.jsx`는 2,168줄에서 994줄로 줄었다.
- 3-4 세 번째 단위에서 퇴원 확인·인계 PDF·단일/일괄 영구삭제 4개 overlay를 `StudentLifecycleOverlays.jsx`로 옮겼다. 화면 JSX 11,029자는 기준 commit과 동일하며, audit·복원·삭제 controller 및 App의 Supabase 재조회 owner는 이동하지 않았다. `StudentManager.jsx`는 826줄로 줄었다.
- 3-4 마지막 단위에서 퇴원생 목록·정렬·선택 toolbar를 `StudentWithdrawnList.jsx`로 옮겼다. 20개 prop은 직접 identity를 유지하고 local dirty/선택 및 lifecycle controller는 Manager에 남겼다. `StudentManager.jsx`는 755줄로 줄었으며 profile·퇴원 목록·lifecycle overlay 경계를 대조해 3-4를 닫는다.
- 3-5 첫 단위에서 알림 이력·특강관리 화면에 전달되던 13개 callback을 `notificationEffectAdapter`의 history provider/transport와 특강 persistence/deletion/orchestration/navigation 표면으로 묶었다. 두 화면의 refresh identity와 App의 저장·재조회·Solapi effect owner, Notification Center 내부 공지 draft/request controller는 유지한다.
- 3-5 두 번째 단위에서 공지 수신자·작성·이력·취소·reconcile 조립을 `useNotificationNoticeController`로 옮겼다. `NotificationCenter`는 469줄에서 144줄 render owner가 됐으며 local draft, 저장된 알림 이력, provider 상태와 실제 발송/예약/취소 경계를 유지한 채 3-5를 닫는다.
- 3-6 첫 단위에서 월별 정산의 선택 월, local recovery draft, row/summary selector와 교사 확정값 저장 조립을 `useMonthlySettlementController`로 옮겼다. `MonthlySettlementPanel`은 787줄에서 541줄로 줄었고 App의 app_state 저장·Supabase 재조회 대조 owner는 유지한다. 저장 중 후속 입력은 month/revision guard로 보존해 재저장을 안내한다.
- 3-6 closeout에서 월별 출결·수업 달력과 정규 정산 표를 `MonthlySettlementCalendar`·`MonthlySettlementRegularTable`로 분리했다. 두 JSX 본문은 기준 main과 문자 단위로 같고 state/effect/API/Storage가 없다. `MonthlySettlementPanel`은 184줄 화면 조립 owner가 됐으며 계산 controller와 App 저장·재조회 owner를 분리한 상태로 Settlement 경계를 닫는다.
- 3-7 첫 단위에서 이미 분리된 Lesson·Supplement·Student·Notification·Settlement top-level 화면을 동적 import로 연결했다. 초기 main JS는 1,656.92 kB에서 1,379.15 kB, gzip은 427.24 kB에서 351.03 kB로 줄었고, 5개 화면은 별도 chunk다. 로딩 표시와 chunk 실패 오류 번호·안전 새로고침은 safe browser로 검증했다.
- 3-7 두 번째 단위에서 `App.jsx` 안의 시험분석 helper·화면 4,612줄을 `ExamAnalysisPipelineCenter.jsx`로 물리 분리하고 여섯 번째 lazy 화면으로 연결했다. 13개 API request owner는 App runtime에 유지했다. 초기 main JS는 1,181.41 kB, gzip 296.06 kB로 줄었고 유료 AI·업로드·저장은 실행하지 않은 안전 브라우저로 chunk 진입을 검증했다.
- 3-7 세 번째 단위에서 오답관리·시험지관리·자료함·숙제현황 4개 화면 1,335줄을 `LearningSupportCenters.jsx`로 분리해 하나의 저빈도 shared lazy chunk로 연결했다. 저장·삭제·교사 확인 callback과 학생 화면 owner는 App runtime에 유지했다. 초기 main JS는 1,142.78 kB, gzip 285.71 kB이며 App은 15,176줄·663,337 bytes다.
- 3-7 네 번째 단위에서 학사일정·반관리·수업연구·AI 도구 화면 1,509줄을 `PlanningToolCenters.jsx`로 분리해 shared lazy chunk로 연결했다. 일정 저장·시험행 동기화·반 명단·수업연구 callback은 App owner를 유지했다. 초기 main JS는 1,092.41 kB, gzip 272.16 kB이며 App은 595,886 bytes다.
- 3-7 다섯 번째 단위에서 첫 화면·수업일지 운영 알림과 특강 안내문 보조 화면 3개를 `DashboardAuxiliaryPanels.jsx`로 분리해 shared lazy chunk로 연결했다. 화면 본문 42,078자는 runtime 주입을 제외하면 기준 main과 동일하고, 알림 저장·삭제와 특강 저장·삭제 callback owner는 유지했다. 초기 main JS는 999.16 kB, gzip 248.14 kB이며 App은 11,836줄·551,722 bytes다.
- 3-7 여섯 번째 단위에서 시험 대비와 설정 화면을 각각 `ExamPrepCenter.jsx`, `SettingsCenter.jsx`로 분리해 별도 lazy chunk로 연결했다. helper와 설정 transport는 frozen runtime으로 App owner를 유지하며 화면 본문 6개 함수는 기준 main과 문자 단위로 동일하다. 초기 main JS는 956.13 kB, gzip 237.03 kB이며 App은 10,855줄·507,358 bytes로 줄어 Babel의 App 500 KB 경고가 사라졌다.
- 3-7 마지막 단위에서 보충 전용 수업 상세와 수업 준비 메모를 `LessonNestedPanels.jsx`의 22.40 kB shared nested lazy chunk로 분리했다. 두 함수 본문은 runtime 주입을 제외하면 기준 main과 문자 단위로 동일하고 실제 일정 저장·알림 예약·보충 완료·메모 저장 callback owner는 유지했다. 초기 main은 934.69 kB, gzip 231.48 kB다. 3-0 대비 각각 43.1%·45.3% 감소하고 12개 물리 chunk·21개 lazy component 경로와 App Babel 경고 제거를 고정해 3-7을 닫는다.
- 3-8 종료 감사에서 session·lesson·supplement·student·notification·settlement·exam/settings의 화면/draft owner, authoritative 저장 원천, provider side effect와 오류 복구를 재대조했다. 정산 local recovery, notification/exam transport 예외, effect adapter 순수성을 전용 fixture로 고정하고 3차 리팩터링 3-0~3-8을 완료 상태로 닫는다.

## 폴더 상태

- `C:\Dev\academy-os-refactor`는 main 통합 확인 후 `C:\Dev\_archive\academy-os-refactor-integrated-b0712525-2026-07-31`로 이동했다.
- `C:\Users\PC\Documents\academy os`는 Codex에 등록된 오전 9시 자동 작업 전용 clone으로 유지한다. 사람은 이 폴더를 열거나 수정하지 않고 `C:\Dev\academy-os`만 사용한다.
- 시험분석 독립 작업은 `C:\Dev\academy-os-exam-analysis`에 남긴다.
- 사진 일기장 프로젝트는 Academy OS와 완전히 별도다.

## 다음 우선순위

1. App 2차 Phase 1~5와 3차 3-0~3-8, P1 운영 저장 신뢰성, P2 modal 통일 후속은 완료됐다. P3-0 알림톡 문구 원천 inventory는 설정 key 6개, 제품 경로 9개, Solapi provider template 4개와 preview/live 분리 위험을 고정했다. 다음 P3-1은 기존 6개 default·변수 metadata·normalize를 pure notification catalog로 이동한다.
2. App 3차 리팩터링 3-0~3-8은 production main 43.1%·gzip 45.3% 감소, 12개 물리 lazy chunk, App Babel 500 KB 경고 제거와 종료 소유권 감사까지 완료했다. 자동으로 다음 리팩터링 차수를 시작하지 않고 P1~P3 제품·저장 신뢰성 우선순위로 돌아간다.
3. `app_state`에서 독립성이 큰 데이터는 명시 저장 도메인으로 계속 분리한다.
   - 즉시 사람 판단이 필요하지 않은 발견은 queue/worklog에 남기고 AI 검수와 다음 단계를 연쇄 진행한다.

## 자동 작업

- 매일 오전 9시에 독립 task가 열린다.
- 자동 task 제목은 실행 시작 시 다른 작업보다 먼저 서울 기준 `YYYY-MM-DD Academy OS 매일 개발 이어가기`로 바꾸고, 실패하거나 완료 응답이 없으면 한 번 재시도해 결과에 확인 여부를 남긴다.
- 자동 작업 전용 clone에서 최신 `origin/main`을 기준으로 날짜별 `codex/` branch를 만들고, 안전한 한 단위만 commit/push한다.
- 1~3번 작업은 사람 Gate가 없고 시작 기준 main 불변·동시 통합 owner 없음·exact-head 원격 검사 통과·fast-forward 가능 조건을 모두 만족할 때 AI가 main 통합, main CI, 배포 commit 대조와 안전한 smoke까지 수행한다.
- main이 바뀌었거나 충돌·동시 통합 징후가 있으면 자동 rebase나 force push 없이 중단한다. 4번 사람 Gate와 운영 삭제·발송·유료 호출·SQL 적용은 자동 수행하지 않는다.

## 빠른 확인

```powershell
npm run doctor
npm run check:fast
npm run test:browser-smoke
```

세부 검증 선택은 `docs/testing-policy.md`를 따른다.
