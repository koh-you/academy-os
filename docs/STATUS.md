# Academy OS Current Status

업데이트: 2026-08-02

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
- 수업일지의 교재·강의 내용은 같은 반 과거 기록을 역순으로 확인해 필드별 최신 비어 있지 않은 값을 월 경계 너머에서도 이어받으며, 특강 기록은 정규반에 섞지 않는다.
- 월별 정산의 신규생 회차제는 예정 시간표가 아니라 수업일지의 정산 인정 정규 회차를 사용한다. 휴강은 보강 전에도 1회로 포함하고 연결 보강은 추가 회차로 중복 계산하지 않는다. 퇴원일이 해당 월에 있으면 교사 고정 override가 없는 한 자동 퇴원 정산하며, 출결 달력은 출석·결석·지각·대기를 서로 다른 색으로 구분한다.
- 학생별 정산 행과 출결·수업 상세에는 `휴강 n회 · 정규 회차 포함`, `연결 보강 n회 · 추가 계산 없음`, `대기 n회 · 출결 미확정`처럼 예외 적용 근거를 별도 표기한다.
- 특강 정산은 확정 수강 계획과 실제 특강 수업일지 출결을 분리해 `계획/일지/출결/일지 누락`을 함께 표시한다. 학생 프로파일에서는 선택 월의 정규·특강 출결을 한 화면에서 확인한다.
- 월별 정산의 횟수 버튼을 열면 시스템 계산 횟수를 대조하고 `최종 정규 횟수`를 교사가 확정할 수 있다. 확정 횟수는 수업일지 유무와 관계없이 신입·퇴원 계산과 PDF에 반영되며 월정액 금액은 유지한다. 조정금액 입력 열은 제거했다.
- 최종 정규 횟수 상세 모달에는 Supabase 저장·재조회 확인 버튼이 있다. 저장 후 모달을 닫고 바깥 `횟수·금액 PDF`에서 확정값을 출력하며, 보고서 창에는 브라우저 자동 인쇄와 별도로 `인쇄하기` 버튼이 있다.
- 월별 출결·수업 모달은 데스크톱에서 최대 1320px까지 넓어져 달력 7열을 가로 스크롤 없이 한눈에 확인한다.
- 월별 정산 표에서는 `월별 스케줄`, `정산 처리` 열을 표시하지 않는다. 기존 스케줄·제외 저장 원천과 금액 계산은 보존한다.
- 월별 정산 기본월은 서울 기준 매월 1~2일에는 지난달, 3일부터는 이번 달이다. 정산월·저장 상태·PDF 행동은 한 컨트롤 카드에서 표시한다.
- 월별 정산 PDF는 정산 제외 학생을 뺀 `이름·최종 정규 횟수·금액`을 출력하되 최종 정규 횟수 합계는 표시하지 않고 총 금액만 합산한다. 보강 달력 시간은 학생 정규 스케줄이 아니라 실제 보강 수업일지 시간을 사용한다.
- 2026년 7월 운영 원천을 읽기 전용으로 재계산한 교정 예상은 이채빈 정규 5회, 김형준 11회, 이윤채 11회, 김예나 퇴원 비례 13/14다. 운영 정산 snapshot 저장은 사람 확인 뒤 실행한다.
- 전역 사람 gate는 0건이다.

## 개발환경 상태

- Node 24 기준, `npm ci` 사용.
- `npm run doctor`가 경로·Git·Node·중복 clone을 점검한다.
- VS Code F5는 운영 데이터에 연결하지 않는 안전한 가상 환경을 연다.
- ESLint runtime 검사, 간결한 scenario 요약, client runtime error reporter, Playwright browser smoke가 있다.
- 로컬 browser smoke는 Worktree별 가용 frontend/API 포트를 자동 선택하고 기존 preview를 재사용하지 않는다.
- GitHub Actions는 lint, production test, build, browser smoke를 실행하는 것이 목표다.
- `app_state` 자동저장 12개 key의 요청 역전·CAS/재조회 부재를 재현하는 inventory 검사가 Production checks에 연결됐다.
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

## 폴더 상태

- `C:\Dev\academy-os-refactor`는 main 통합 확인 후 `C:\Dev\_archive\academy-os-refactor-integrated-b0712525-2026-07-31`로 이동했다.
- `C:\Users\PC\Documents\academy os`는 Codex에 등록된 오전 9시 자동 작업 전용 clone으로 유지한다. 사람은 이 폴더를 열거나 수정하지 않고 `C:\Dev\academy-os`만 사용한다.
- 시험분석 독립 작업은 `C:\Dev\academy-os-exam-analysis`에 남긴다.
- 사진 일기장 프로젝트는 Academy OS와 완전히 별도다.

## 다음 우선순위

1. App 2차 리팩터링 Phase 1~5는 완료됐다. 3차 리팩터링은 3-0 기준선 뒤 `App.jsx` 내부 화면 정의의 물리적 분리부터 순서대로 진행한다.
2. 3-7 두 번째 분할로 production main chunk를 약 1.18 MB까지 줄였다. App에 남은 저빈도 teacher 화면을 추가 분리해 700~900 kB 목표와 Babel 500 KB 경고 제거를 이어간다. 화면 동작·저장 경계 변경은 같은 단위에 섞지 않는다.
3. `app_state`에서 독립성이 큰 데이터는 명시 저장 도메인으로 계속 분리한다.
   - 즉시 사람 판단이 필요하지 않은 발견은 queue/worklog에 남기고 AI 검수와 다음 단계를 연쇄 진행한다.

## 자동 작업

- 매일 오전 9시에 독립 task가 열린다.
- 자동 task 제목은 실행 시작 시 서울 기준 `YYYY-MM-DD Academy OS 매일 개발 이어가기`로 바꾼다.
- 자동 작업 전용 clone에서 최신 `origin/main`을 기준으로 날짜별 `codex/` branch를 만들고, 안전한 한 단위만 commit/push한다.
- main 자동 merge, 운영 삭제·발송·유료 호출·SQL 적용은 금지한다.

## 빠른 확인

```powershell
npm run doctor
npm run check:fast
npm run test:browser-smoke
```

세부 검증 선택은 `docs/testing-policy.md`를 따른다.
