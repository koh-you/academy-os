# Academy OS Current Worklog

이 파일은 최근 작업만 유지한다. 2026-07-31 이전의 전체 이력은 `docs/archive/current-worklog-through-2026-07-31.md`에 있다.

## 2026-08-03 시험정보 행 자동저장 직렬화

- 분류는 3번 기능·개선이다. 운영 회귀 발생을 확인한 것은 아니지만, 입력마다 실행되는 `exam_prep_rows` bulk 요청이 역순 도착하면 최신값을 덮을 수 있는 P1 저장 위험을 한 단위로 줄였다.
- 시험정보 저장 controller는 브라우저 전체에서 요청을 하나씩 처리한다. 진행 중 같은 행에 들어온 여러 변경은 row ID별 최신값만 보존해 다음 bulk 요청으로 보내고, 이전 요청 성공·실패가 최신 입력의 `저장 중` 상태를 덮지 않는다.
- 안전 API fixture에 시험정보 row와 bulk 저장 원천을 추가했다. Playwright에서 첫 요청을 지연한 채 같은 행을 세 번 편집해 동시 요청이 없고 마지막 값만 후속 저장되며 `저장 완료`가 표시되는지 확인한다.
- 범위 밖인 다중 탭·기기 `updated_at` CAS와 저장 뒤 Supabase 재조회는 다음 독립 단위로 남긴다. 운영 Supabase·알림·Storage·유료 AI·SQL side effect는 실행하지 않았다.
- 검증: controller·API 전용 fixture, runtime lint, scenario·production `821/821`, build `380 modules`·lazy chunk `12/12`, Worktree 격리 safe browser `19/19` 통과.

## 2026-08-02 App 3차 리팩터링 3-8 종료 감사

- `docs/app-refactor-third-pass-closeout.md`에 session과 6개 핵심 도메인, exam/settings의 화면·local draft·authoritative 저장 원천·provider side effect·오류 복구 owner를 재대조했다.
- 정산 `localStorage` recovery, notification controller의 공지 API 조립, 시험분석 도메인 request, 설정 transport 주입을 의도적 예외로 명시했다. 네 effect adapter가 function identity 외 API·Storage·React state를 소유하지 않고 21개 lazy 화면과 App의 고위험 handler owner가 유지되는지 `test:third-pass-closeout`으로 고정했다.
- 3-0 대비 App source bytes 52.9%, production main 43.1%, gzip 45.3% 감소와 App Babel 500 KB 경고 제거를 종료 근거로 확정했다. CSS/API server/type/safe E2E는 별도 투자 후보이며 4차 리팩터링을 자동 시작하지 않는다.
- 검증: `git diff --check`, runtime lint, 5도메인 fast 39/39, teacher/closeout 경계, scenario·production 821/821, `check:fast`, build 380 modules·lazy physical chunk 12/12, Worktree 격리 safe browser 18/18을 통과했다. 운영 데이터·실제 알림·유료 AI·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-7 중첩 수업 화면 lazy loading closeout

- `App.jsx`의 `SupplementMakeupLessonDetail`과 `PreparationMemoModal`을 `src/domains/lessons/LessonNestedPanels.jsx`로 옮겨, 이미 lazy인 수업 화면 내부에서 필요할 때만 내려받는 22.40 kB shared chunk로 연결했다. runtime 주입을 제거한 두 함수 본문 22,026자·6,236자는 기준 main과 문자 단위로 동일하다.
- 화면이 쓰는 pure helper 13개는 frozen `lessonNestedPanelRuntime`으로 App owner를 유지한다. 일정 저장·다음 정각/11시 알림 예약·보충 완료와 수업메모 저장은 기존 callback을 직접 호출하며 새 화면은 API·Storage·Supabase·Solapi transport를 소유하지 않는다.
- production main JS는 `956.13 kB / gzip 237.03 kB`에서 `934.69 kB / gzip 231.48 kB`로 줄었다. 3-0 대비 main 43.1%, gzip 45.3% 감소, 12개 물리 lazy chunk·21개 lazy component 경로, App 전용 Babel 500 KB 경고 제거를 종료 근거로 고정한다. App은 11,000줄·476,602 bytes다.
- 검증: 두 함수 exact 대조, runtime lint, teacher/nested 경계, 5도메인 fast 39/39, scenario·production 821/821, `check:fast`, build 380 modules·lazy physical chunk 12/12, Worktree 격리 safe browser 18/18. 이동으로 드러난 lesson inventory·준비 메모 모델/뷰의 App 위치 결합 3곳은 새 화면 source를 읽도록만 교정했다. 운영 데이터·실제 알림·유료 AI·SQL은 사용하지 않았다.
- 학생 로그인 화면과 핵심 학생 modal의 추가 지연화는 초기 main 34.69 kB 절감을 위해 사용자 핵심 경로를 복잡하게 만드는 위험이 더 커 이번 범위에 포함하지 않는다.

## 2026-08-02 App 3차 리팩터링 3-7 시험 대비·설정 화면 lazy loading

- `App.jsx`의 `ExamPrepCenter`, `SettingsCenter`, `NotificationSettingsSection`, `StatusDot`을 도메인 파일로 옮기고, 함께 있던 `EvaluationCenter`·`StudentSelect`는 교사 화면 파일로 분리했다. runtime 주입을 제거한 6개 함수 본문은 기준 main과 문자 단위로 동일하다.
- 시험 계산·표시 helper 22개와 설정 원천·정규화·API transport 12개는 frozen runtime으로 App owner를 유지한다. 설정의 알림 템플릿 테스트와 계정 저장은 기존 `postJson` 주입 경계를 유지하며 안전 브라우저에서는 버튼을 실행하지 않았다.
- 두 top-level 화면은 별도 lazy chunk로 연결했다. production main JS는 `999.16 kB / gzip 248.14 kB`에서 `956.13 kB / gzip 237.03 kB`로 줄었고 시험 대비 26.47 kB, 설정 18.33 kB chunk가 생겼다. App은 10,855줄·507,358 bytes가 되어 Babel의 App 500 KB 경고가 사라졌다.
- 검증: 원문 함수 6개 exact 대조, runtime lint, teacher/core/lazy 경계, 5도메인 fast 38/38, scenario·production 821/821, `check:fast`, build 379 modules·lazy physical chunk 11/11, Worktree 격리 safe browser 17/17. 운영 데이터·실제 알림·유료 AI·SQL은 사용하지 않았다.
- 초기 main의 일반 500 kB 경고와 700~900 kB 종료 목표 상단 초과는 남아 있다. 다음 최신 main 단위에서 저빈도 중첩 화면의 안전한 lazy 분리를 검토한다.

## 2026-08-02 App 3차 리팩터링 3-7 보조 대시보드 화면 lazy loading

- `App.jsx`의 특강 안내문과 첫 화면·수업일지 운영 알림 목록/편집 화면 1,029줄을 `src/domains/teacher/DashboardAuxiliaryPanels.jsx`로 물리 분리했다. export와 운영 알림 runtime 주입을 제거한 화면 본문 42,078자는 기준 main과 문자 단위로 동일하다.
- 운영 알림 selector·표시 helper 15개는 frozen `academyReminderPanelRuntime`으로 App owner를 유지하고, 저장·삭제·특강 학생/안내문 callback은 기존 App→Outlet→화면 identity를 보존한다. 새 화면은 API·Storage·Solapi owner가 없다.
- `React.lazy` binding은 함수가 아닌 React element type이어서 기존 Notification Center의 함수형 guard가 정상 화면을 거부하는 문제를 safe browser가 발견했다. binding 존재 여부를 검사하는 최소 수정과 전용 fixture로 알림·특강 화면 전환을 복구했다.
- production main JS는 `1,092.41 kB / gzip 272.16 kB`에서 `999.16 kB / gzip 248.14 kB`로 줄었고 shared chunk는 `94.24 kB / gzip 24.63 kB`다. App은 11,836줄·551,722 bytes로 줄었으나 Babel 500 KB와 main 500 kB 경고는 남아 있다.
- 검증: runtime lint, teacher/dashboard 경계, 5도메인 fast 38/38, scenario·production 821/821, `check:fast`, build 376 modules·lazy physical chunk 9/9, Worktree 격리 safe browser 16/16. 운영 데이터·실제 알림·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-7 계획 도구 화면 lazy loading

- `App.jsx`의 학사일정과 반관리·수업연구·AI 도구 화면 1,509줄을 `src/domains/teacher/PlanningToolCenters.jsx`로 물리 분리했다. 서로 떨어진 두 원본 구간을 합친 62,963자는 export/runtime 주입을 제거하고 기준 main과 줄바꿈 정규화 후 문자 단위로 동일하다.
- 화면이 사용하던 학사일정 selector·시험행 동기화 helper·수업연구 catalog·기준일 등 24개 binding은 frozen `planningToolRuntime`으로 App owner를 유지한다. 일정 저장/삭제·시험행 갱신·반 명단·수업연구 callback identity는 `TeacherViewOutlet`에서 그대로 전달한다. 새 화면에는 fetch/API/Storage/Supabase/Solapi owner가 없고 AI 도구의 기존 local 파일 읽기·blob 다운로드만 유지한다.
- production main JS는 `1,142.78 kB / gzip 285.71 kB`에서 `1,092.41 kB / gzip 272.16 kB`로 줄었고 shared chunk는 `51.98 kB / gzip 15.10 kB`다. App은 595,886 bytes로 줄었으나 dev Babel 500 KB와 main 500 kB 경고는 남아 있다.
- safe browser는 계획 도구 module을 400ms 지연해 학사일정 로딩→화면 진입→수업연구 전환을 확인하며 일정 등록·명단 저장·AI 파일 행동은 실행하지 않는다. 검증: runtime lint, teacher/planning 경계, 5도메인 fast 38/38, scenario·production 821/821, build 375 modules·lazy physical chunk 8/8, Worktree 격리 safe browser 15/15. 운영 데이터·실제 알림·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-7 학습지원 화면 lazy loading

- `App.jsx`의 오답관리·시험지관리·자료함·숙제현황 화면과 전용 하위 view 1,335줄을 `src/domains/teacher/LearningSupportCenters.jsx`로 물리 분리했다. 기준 main의 화면 본문 53,378자와 문제 상태 pure model 977자를 줄바꿈 정규화 뒤 문자 단위로 대조했다.
- 4개 화면은 함께 쓰이는 저빈도 학습지원 shared chunk로 lazy 연결했다. 학생 화면 component, 숙제 판정 helper, 날짜·과목 원천 등 10개 binding은 frozen `learningSupportRuntime`으로 App owner를 유지하며, 저장·삭제·교사 확인 callback identity도 `TeacherViewOutlet`에서 그대로 전달한다. 새 화면에는 fetch/API/Storage/Supabase/Solapi owner가 없다.
- production main JS는 `1,181.41 kB / gzip 296.06 kB`에서 `1,142.78 kB / gzip 285.71 kB`로 줄었고 shared chunk는 `39.49 kB / gzip 11.66 kB`다. App은 15,176줄·663,337 bytes로 줄었으나 dev Babel 500 KB와 main 500 kB 경고는 남아 있다.
- safe browser는 학습지원 module 응답을 400ms 지연해 오답관리 로딩→화면 진입→같은 chunk의 자료함 이동을 확인하며 등록·저장·삭제는 실행하지 않는다. 검증: runtime lint, teacher/learning-support 경계, 5도메인 fast 38/38, scenario·production 821/821, build 374 modules·lazy chunk 7/7, Worktree 격리 safe browser 14/14. 운영 데이터·실제 알림·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-7 시험분석 화면 lazy loading

- `App.jsx`에 남아 있던 시험분석 helper와 `ExamAnalysisPipelineCenter` 4,612줄을 `src/domains/exams/ExamAnalysisPipelineCenter.jsx`로 물리 분리해 여섯 번째 teacher lazy chunk로 연결했다. 추출 전후 helper 91,259자와 화면 104,145자를 줄바꿈 정규화 뒤 문자 단위로 대조했다.
- 시험분석 source 조회·추출·문항 탐지·검수 저장·최종 초안 저장 등 13개 request 함수는 `examAnalysisPipelineRuntime`으로 직접 주입하며 App owner를 유지한다. 새 화면은 request 구현을 소유하거나 App/Outlet을 역참조하지 않는다.
- production main JS는 `1,379.15 kB / gzip 351.03 kB`에서 `1,181.41 kB / gzip 296.06 kB`로 줄었고 시험분석은 `198.00 kB / gzip 54.94 kB` 별도 chunk가 됐다. build 예산을 1.25 MB와 6/6 lazy chunk로 강화했다. `App.jsx`는 16,513줄·721,795 bytes로 줄었지만 Babel 500 KB 경고와 main 500 kB 경고는 남아 있다.
- safe browser는 Vite 시험분석 module 응답을 지연해 로딩 표시와 화면 진입·선생님 검수 탭을 확인하며 유료 AI·파일 업로드·저장 행동은 실행하지 않는다. 검증: runtime lint, teacher/exam 경계, 5도메인 fast 38/38, scenario·production 821/821, `check:fast`, build 372 modules, Worktree 격리 safe browser 13/13. 운영 데이터·실제 알림·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-7 교사 화면 lazy loading 1차

- 이미 물리 분리된 수업일지·보충관리·학생관리·알림관리·정산 5개 top-level 화면을 `lazyTeacherViewComponents`의 동적 import로 연결했다. `App`의 상태와 저장·삭제·Supabase 재조회·Solapi callback 조립은 바꾸지 않고 component 참조만 lazy component로 교체했다.
- `TeacherViewOutlet`에 Suspense 로딩 상태와 view별 오류 경계를 추가했다. chunk 실패는 기존 client runtime error reporter로 오류 번호를 남기며, 운영 입력을 변경하지 않았다는 안내와 안전 새로고침 복구를 제공한다. `apiClient`의 Vite env 판독은 Node 전용 boundary fixture에서도 안전하도록 optional access로 좁게 보강했다.
- production main JS는 `1,656.92 kB / gzip 427.24 kB`에서 `1,379.15 kB / gzip 351.03 kB`로 각각 16.8%·17.8% 줄었다. 5개 view는 38.62~66.30 kB 별도 chunk로 분리됐고 1.50 MB 초기 main 예산과 5/5 chunk 존재 검사를 모든 build에 연결했다.
- safe browser는 첫 lesson chunk를 500ms 지연해 로딩 안내를 확인하고, StudentManager chunk를 1회 실패시켜 오류 기록→안전 새로고침→학생관리 재진입을 검증한다. 검증: runtime lint, 5도메인 fast 38/38, teacher lazy/boundary, scenario·production 821/821, `check:fast`, build 371 modules, Worktree 격리 safe browser 12/12. 운영 데이터·실제 알림·AI 호출·SQL은 사용하지 않았다.
- App source 자체의 Babel 500 KB 경고와 1.38 MB main chunk는 남아 있다. 3-7 다음 단위는 App에 남은 저빈도 teacher 화면을 물리 분리·lazy 연결해 700~900 kB 종료 목표에 접근한다.

## 2026-08-02 App 3차 리팩터링 3-6 정산 view closeout

- `MonthlySettlementPanel.jsx`의 출결·수업 달력/최종 횟수 편집을 `MonthlySettlementCalendar.jsx`, 정규 정산 표/제외 행 복원을 `MonthlySettlementRegularTable.jsx`로 물리 분리했다. 원본 JSX를 줄바꿈 정규화 후 직접 대조해 달력 6,304자와 표 9,847자가 각각 문자 단위로 동일함을 확인했다.
- Panel은 controller 반환값과 header·규칙·summary·save bar를 조립하는 184줄·8,027 bytes owner가 됐다. 새 달력은 161줄·7,343 bytes, 표는 232줄·11,544 bytes이며 둘 다 React state/effect·API·Storage를 소유하지 않고 기존 callback identity를 직접 전달받는다.
- view exact-prop·callback·금지 의존성과 App의 app_state/Supabase 저장·재조회 owner를 확인하는 전용 fixture를 settlement fast 및 production에 연결했다. 검증: runtime lint, settlement fast 7/7, scenario/production 821/821, `check:fast`, build 368 modules, 지연 저장·응답 전 월 이동·초안 복구·PDF를 포함한 Worktree 격리 safe browser 10/10. 운영 데이터·실제 알림·AI 호출·SQL은 사용하지 않았다.
- 월별 화면 조립·계산 selector·교사 확정값 저장 경계를 대조해 3-6을 닫는다. 다음 단계는 별도 최신 main branch의 3-7 lazy loading/chunk 분리다.

## 2026-08-02 App 3차 리팩터링 3-6 월별 정산 controller 경계

- `MonthlySettlementPanel.jsx`의 선택 월, localStorage recovery draft, 학생 설정 변경, 계산 row/summary, PDF model 호출과 교사 확정값 저장 조립을 `useMonthlySettlementController.js`로 이동했다. 화면은 달력과 정산 표 render를 유지하며 787줄·35,527 bytes에서 541줄·26,442 bytes로 줄었다.
- App의 `handleSaveMonthlySettlementMonth`가 기존대로 현재 app_state 조회, Supabase 저장, 재조회 snapshot 대조와 App 상태 반영을 소유한다. 금액·횟수·신입·퇴원·휴강·연결 보강 계산 함수는 변경하지 않았다.
- 저장 중에도 입력 가능한 기존 화면에서 오래된 성공 응답이 후속 수정본을 지우는 회귀를 확인했다. 요청 월과 draft revision이 같은 성공만 persisted 값으로 교체하고, 이후 변경은 local draft와 dirty 상태를 보존해 `저장 완료 · 이후 변경 저장 필요`로 재저장을 안내한다. 서버 기준시각이 갱신되면 최신 후속 draft를 그 기준으로 local recovery에 다시 기록하며, 다른 월 응답과 오래된 실패도 활성 draft/local recovery에 적용하지 않는다.
- 전용 TARGET/CONTROL fixture를 settlement fast와 production에 연결하고, 안전 API의 app_state 응답을 지연시켜 `4회 저장 → 저장 중 5회 수정 → 응답 전 8월 이동 → 7월 복귀 시 5회 복구 → 재저장 → PDF 5회`를 브라우저에서 확인했다. 검증: runtime lint, settlement fast 6/6, scenario/production 821/821, `check:fast`, build 366 modules, Worktree 격리 safe browser 10/10. 운영 데이터·실제 알림·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-5 알림 controller 경계

- `NotificationCenter.jsx`에 남아 있던 공지 수신자 선택, local 작성 draft, 이력 필터·삭제, Solapi 취소/reconcile, API request binding과 compose/history/tab prop 조립을 `useNotificationNoticeController.js`로 물리 이동했다. 화면은 특강 callback 조립과 render만 소유한다.
- 기존 `useNotificationRecipientState`·`useNotificationComposerState`·`useNotificationHistoryState`, 순수 action/API adapter, 15/45초 timeout, 확인창·오류 문구·refresh 순서와 두 App effect identity는 바꾸지 않았다. 새 controller는 App·Storage·JSX를 역참조하지 않으며 `NotificationCenter.jsx`는 469줄·17,234 bytes에서 144줄·5,324 bytes로 줄었다.
- source-string fixture는 새 controller source를 화면 경계에 합성하고 inline object 표기 대신 반환 prop 계약을 확인하도록 교정했다. 전용 fixture는 화면의 API/controller owner 제거, controller의 세 hook·request·취소/reconcile owner, render prop 연결을 고정한다.
- 검증: runtime lint, notification fast 7/7, notice action/effect/controller·refresh/reconcile·teacher 전용 fixture, scenario/production 821/821, `check:fast`, build 365 modules, 이력 탭 전환·local draft 미리보기·특강관리 이동을 포함한 Worktree 격리 safe browser 10/10을 통과했다. 운영 데이터·실제 알림 발송/예약/취소·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-5 알림 effect 경계

- App→`TeacherViewOutlet`→`NotificationCenter` 두 진입 경로에 낱개로 전달되던 callback 13개를 동결된 `notificationEffectAdapter`로 교체했다. 이력 취소·reconcile 2개는 `historyProvider`, route별 재조회 1개는 `historyTransport`, 특강 저장 7개·삭제 1개·수업 저장 뒤 선택적 화면 이동까지 조정하는 orchestration 1개·화면 이동 1개는 각각 명시적 표면으로 분류했다.
- 알림 이력의 `handleRefreshNotificationHistory`와 특강관리의 `handleRefreshActiveNotificationJobs` identity는 각각 유지한다. adapter는 API·Storage·React state를 소유하지 않으며 실제 저장·Supabase 재조회·Solapi 예약/취소/reconcile 함수는 App에, 공지 local draft·발송/예약/삭제 request 조립은 기존 Notification Center 도메인 hook/action에 그대로 남는다.
- 기존 reconcile inventory가 `TeacherViewOutlet`의 flat callback 출현 횟수에 결합돼 전체 production 첫 실행에서 중단됐다. 새 notification/lesson effect adapter 두 표면을 직접 확인하도록 4개 fixture와 scenario 위치 계약만 교정했고, 전용 재실행으로 의미 보존을 확인했다.
- 검증: runtime lint, notification fast 6/6, teacher/effect/reconcile 전용 fixture, scenario·production 821/821, `check:fast`, build 364 modules, 알림관리·특강관리 경로가 포함된 Worktree 격리 safe browser 10/10을 통과했다. 운영 데이터·실제 알림 발송/예약/취소·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-4 퇴원생 목록 경계

- 퇴원생 표·정렬·선택 toolbar JSX와 날짜 표시 helper를 `src/domains/students/StudentWithdrawnList.jsx`로 물리 이동했다. 기준 commit의 목록 본문 5,273자를 직접 대조해 문자 단위 동일함을 확인했다.
- 호출부·시그니처의 20개 prop은 모두 `prop={prop}` 직접 전달이다. dirty row, 선택 집합, 선택 저장, 퇴원 취소, 인계 PDF, 단일/일괄 영구삭제 controller는 `StudentManager`가 계속 소유하며 새 목록은 API·Storage·React state/effect를 갖지 않는다.
- scenario inventory는 Manager/profile/lifecycle overlay/withdrawn list source를 합성해 기존 사용자 계약을 유지하고, SelectionToolbar import 검사는 실제 새 raw source를 읽도록 위치 결합만 교정했다. 전용 exact-prop fixture를 student fast와 production 학생 묶음에 연결했다.
- 구조 결과: `StudentManager.jsx`는 826줄·40,802 bytes에서 755줄·36,371 bytes, 새 `StudentWithdrawnList.jsx`는 121줄·6,485 bytes다. profile·퇴원 목록·lifecycle overlay/인계 화면이 분리되고 App effect owner가 유지되어 3-4를 닫는다.
- 검증: runtime lint, student fast 9/9, scenario/production 820/820, build 363 modules, 퇴원생 표·선택 toolbar를 직접 여는 Worktree 격리 safe browser 10/10을 통과했다. 운영 데이터·실제 삭제·알림·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-4 학생 lifecycle overlay 경계

- 퇴원 확인, 읽기 전용 인수인계 PDF, 단일 영구삭제, 일괄 영구삭제 4개 overlay를 `src/domains/students/StudentLifecycleOverlays.jsx`로 물리 이동했다. 기준 commit의 조건부 JSX 11,029자를 직접 대조해 문자 단위 동일함을 확인했다.
- 새 overlay는 draft setter와 Manager controller만 주입받는다. 퇴원·복원, 영구삭제 전 audit, fingerprint 재확인, 단일/일괄 삭제 순서, PDF model 생성·인쇄는 기존 `StudentManager` 함수에 그대로 있고 App의 실제 저장·Supabase 재조회 callback도 이동하지 않았다.
- 기존 footer·삭제 확인 source 검사는 새 raw overlay source를 직접 보도록 위치 결합만 교정했다. 전용 fixture는 4개 overlay 문구·busy close gate·controller 주입과 API/Storage/React state 부재를 student fast 및 production 학생 묶음에서 확인한다.
- 구조 결과: `StudentManager.jsx`는 994줄·51,334 bytes에서 826줄·40,802 bytes, 새 `StudentLifecycleOverlays.jsx`는 244줄·13,689 bytes다. 다음 단위는 퇴원생 목록과 선택 toolbar 조립을 분리한다.

## 2026-08-02 App 3차 리팩터링 3-4 학생 프로필 화면 경계

- `StudentManager.jsx` 후반에 있던 `StudentProfileModal`, 프로필 오류 경계, 기본정보·시간표·상담·성적·테스트·운영알림 local draft/표시 helper를 `src/domains/students/StudentProfileModal.jsx`로 물리 이동했다. 기존 프로필 component 본문은 기준 commit과 문자 단위로 동일하다.
- `StudentManager`는 선택 학생과 조회 모델을 조립해 기존 callback 10개를 새 화면에 직접 주입한다. 새 화면에는 fetch·API client·Supabase·localStorage가 없으며, 학생 기본정보 저장·교사 메모·상담·성적·테스트·운영알림 저장/삭제 및 재조회·오류 복구 owner는 App에 그대로 남는다.
- scenario source inventory는 목록 shell과 프로필 화면을 명시적으로 합성하되 import 선언은 중복 파싱하지 않도록 조정했다. 전용 physical-boundary fixture를 student fast와 production 학생 묶음에 연결했다.
- 구조 결과: `StudentManager.jsx` 2,168줄·112,396 bytes에서 994줄·51,334 bytes, 새 `StudentProfileModal.jsx` 1,180줄·59,491 bytes로 분리됐다. lazy loading은 3-7까지 적용하지 않는다.

## 2026-08-02 App 3차 리팩터링 3-4 학생관리 effect 경계

- App→`TeacherViewOutlet`→`StudentManager`에 평면 전달되던 16개 상태 변경 callback을 동결된 `studentEffectAdapter` 하나로 교체했다. 화면 local row edit 1개는 `draft`, 저장 7개는 `persistence`, 삭제 5개는 `deletion`, 퇴원·복구 2개는 `lifecycle`, 영구 삭제 전 Supabase 읽기 점검 1개는 `audit`으로 구분했다.
- adapter는 직접 함수 identity만 보존하며 API·Storage·React state를 사용하지 않는다. App의 학생 기본정보 저장·Supabase 재조회, 성적·테스트·상담·운영알림 저장, 퇴원 roster 반영, 복구 재조회, 영구 삭제 감사·재조회 및 기존 오류 복구 순서는 이동하지 않았다.
- exact key·identity·동결·금지 의존성을 확인하는 전용 fixture를 student fast와 production withdrawal 묶음에 연결했다. Teacher adapter와 scenario도 새 경계를 직접 읽으며, `StudentManager` 내부 callback 이름과 프로필·퇴원 controller 연결은 유지한다.
- 검증: runtime lint, student fast 6/6, effect adapter·teacher boundary 전용 fixture, scenario 817/817, `check:fast`, production 817/817 79.7초, build 360 modules, Worktree 격리 safe browser 9/9를 통과했다. 운영 데이터·실제 알림·AI 호출·운영 SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-3 보충관리 effect 경계

- 기존 보충관리에는 task draft, 내용 저장, 일정 적용, 결석보강 취소, 완료 처리, 알림 3종 제어 controller가 이미 도메인 파일로 분리되어 있었다. 남아 있던 App→`TeacherViewOutlet`→`SupplementCenter`의 flat side-effect callback 8개를 동결된 `supplementEffectAdapter` 한 개로 교체했다.
- `handleSaveMakeupTask` 등 순수 저장 3개는 `persistence`, 실제 알림 예약·취소 2개는 `provider`, 수업·task 저장과 provider 취소·예약을 함께 조정하는 취소·완료·일정 행동 3개는 `orchestration`으로 분류했다. 실제 함수 identity와 실행 순서는 바꾸지 않았고 API·Supabase 재조회·Solapi owner는 App에 유지한다.
- exact key·App action identity·동결 여부·금지된 API/Storage/React state 부재를 확인하는 전용 fixture를 supplement fast와 production 묶음에 연결했다. 교사 화면 adapter와 scenario도 새 경계를 직접 읽으며, 화면 내부의 기존 callback 이름과 controller 연결은 유지한다.
- 검증: runtime lint, supplement fast 7/7, effect adapter·teacher boundary·notification orchestration·task actions·modal action 전용 fixture, scenario 816/816, `check:fast`, production 816/816 83.4초, build 359 modules, Worktree 격리 safe browser 9/9를 통과했다. 운영 데이터·실제 알림·AI 호출·운영 SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-2 수업 등록·수정 모달 경계

- App 내부의 수업 등록·수정 `LessonModal` local controller 328줄을 `src/domains/lessons/LessonModal.jsx`로 물리 이동했다. 모달은 draft·validation·저장 진행 표시와 하위 controlled component 조립만 소유한다.
- App은 순수 날짜·시간·색상 resolver를 동결 runtime으로 주입하고, 실제 `/api/lessons/bulk` 저장·Supabase 재조회 대조·휴강 preflight·상태 반영은 기존 `handleAddLesson`/`handleUpdateLesson`/`saveLessonModalLessons` owner를 유지한다.
- 이전 App controller와 새 controller의 runtime destructuring 이후 본문을 문자 단위로 대조해 동일함을 확인했다. 위치에 결합된 7개 boundary fixture와 scenario는 App의 단일 import, 새 local owner, App persistence owner를 각각 직접 검사하도록 교정했다.
- `App.jsx`는 21,116줄·938,765 bytes로 줄었고 새 `LessonModal.jsx`는 379줄·12,709 bytes다. lazy loading 전이라 main JS는 1,649.42 kB, gzip 424.93 kB로 유지되어 chunk 절감은 3-7 대상이다.
- 검증: runtime lint, lesson fast 9/9, 수업 모달 전용 14개와 저장·명단·정규수업 전용 fixture, scenario 816/816, `check:fast`, production 816/816 82.0초, build 358 modules, Worktree 격리 safe browser 9/9를 통과했다. 운영 데이터·실제 알림·AI 호출·운영 SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-2 수업일지 effect adapter 경계

- Teacher Lesson Hub에서 Lesson Journal Detail로 낱개 전달되던 persistence callback 10개와 provider/transport callback 7개를 `lessonJournalEffectAdapter`의 `persistence`·`provider` 두 표면으로 묶었다. 실제 Solapi 예약·취소까지 조정하는 알림 계획 적용은 provider 표면에 분류했다. Hub의 직접 callback 표면은 11개 줄었고 25줄 순수 adapter 한 개로 대체됐다.
- App의 `handleSaveLessonJournalDrafts`, record/homework/makeup 저장, 수업 삭제, AI 코멘트, Solapi 예약·취소·reconcile 구현은 이동하거나 다시 작성하지 않았다. 12초 OS 예약 조회 transport도 App이 소유한 `lessonJournalTransport`에서 기존 함수 참조만 adapter에 주입한다.
- 독립 검토에서 알림 계획 적용이 저장만 하는 동작이 아니라 실제 Solapi 예약·취소까지 조정한다는 분류 오류를 찾았다. 함수 identity와 실행 흐름은 그대로 두고 해당 callback만 provider 표면으로 옮겨 persistence 10개/provider·transport 7개 계약으로 교정했다.
- exact key·App handler identity·transport identity·동결 여부를 확인하는 전용 fixture를 lesson fast와 production lifecycle에 연결했다. Teacher adapter와 scenario도 새 경계를 직접 읽도록 갱신했다.
- 검증: lesson fast 9/9, notification fast 5/5, 수업일지 전용 60/60, teacher boundary, runtime lint, scenario 815/815, `check:fast`, production 815/815 84.2초, build 357 modules, Worktree 격리 safe browser 9/9를 통과했다. 운영 데이터·실제 알림·AI 호출·운영 SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-2 수업일지 draft/persisted 경계

- `LessonJournalDetail`에 남아 있던 record·homework·makeup local draft 조작, 편집 상태, 저장 결과 처리를 `useLessonJournalDraftController`로 이동했다. 상세 화면은 948줄에서 775줄로 줄었고 revision guard를 포함한 새 controller는 320줄이다.
- controller는 API·Supabase·localStorage를 직접 사용하지 않고 App의 `handleSaveLessonJournalDrafts`를 주입받는다. App은 ordered persistence와 서버 재조회 대조를 계속 소유한다.
- 독립 검토에서 `A 저장 요청 -> 요청 중 B 입력 -> A 성공` 순서일 때 오래된 성공 handler가 B까지 비우는 회귀를 발견했다. 요청 lesson과 draft revision을 캡처해 같은 revision의 성공만 비우고, 후속 입력은 편집 모드와 함께 유지해 `저장 완료 · 이후 변경 저장 필요`로 재저장을 안내한다. 다른 수업으로 이동한 뒤 도착한 응답도 활성 draft에 적용하지 않는다.
- 순수 save transition·in-flight resolution TARGET/CONTROL fixture를 lesson fast에 연결했다. 위치 결합 closeout은 상세 화면, draft controller, App persistence owner를 각각 직접 읽도록 바꿨다.
- 안전 브라우저의 가상 lesson record bulk API를 지연시켜 `A 입력 -> 저장 -> 저장 중 B 입력 -> B 보존 안내 -> B 재저장 -> 저장 완료`를 재현했다.
- 검증: lesson fast 8/8, 수업일지 전용 59/59, runtime lint, scenario 814/814, `check:fast`, production 814/814 84.9초, build 356 modules, Worktree 격리 safe browser 9/9를 통과했다. 운영 데이터·실제 알림·운영 SQL·유료 호출은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-1 Lesson Journal Detail 화면 분리

- `App.jsx` 내부의 수업일지 상세 화면 846줄을 `src/domains/lessons/LessonJournalDetail.jsx`로 이동했다. 상세 화면은 기존 draft·overlay·예약 표시 hook과 파생 view model만 조립하며 API·localStorage를 직접 사용하지 않는다.
- 수업일지 저장·수업 삭제·알림 예약/취소/발송/reconcile callback은 기존 App/teacher adapter owner를 유지했다. 화면 안에 있던 OS 예약 기록 GET만 `loadLessonJournalReservationAudit` App transport로 옮겨 주입했다.
- `App.jsx`는 22,251줄·985,836 bytes에서 21,455줄·950,993 bytes로 줄었다. 새 상세 화면은 948줄·39,995 bytes다. lazy loading 전이라 main JS는 1,646.67 kB, gzip 424.14 kB로 유지되어 chunk 절감은 3-7 대상이다.
- 구현 위치에 결합된 수업일지 source fixture는 공통 소스 helper로 연결하고, 새 화면의 물리 분리·App transport·저장/알림 callback 계약을 scenario에 추가했다. 과거 구조를 우연히 통과하던 closeout 문구도 새 경계를 직접 검사하도록 교정했다.
- 검증: lesson fast 7/7, 수업일지 관련 전용 fixture, teacher view boundary, runtime lint, scenario 814/814, `check:fast`, production 814/814 84.3초, build 355 modules, Worktree 격리 safe browser 9/9를 통과했다. 운영 데이터·실제 알림·운영 SQL·유료 호출은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-1 Teacher Lesson Hub 화면 분리

- `App.jsx` 내부의 Teacher Lesson Hub 화면 조립 260줄을 `src/domains/lessons/TeacherLessonHubV2.jsx`로 이동했다. 달력 filter·focus·keyboard navigation은 화면 local state로 유지하고, 수업일지 상세·보충 상세·시험대비 상세와 날짜 helper는 명시적 `teacherLessonHubRuntime`으로 주입한다.
- App과 `TeacherViewOutlet`은 수업일지 저장, 수업 삭제, 알림 예약·취소·발송·reconcile callback의 기존 owner를 유지한다. 새 화면에는 API·localStorage 직접 접근이 없으며 저장 완료·오류 복구 의미를 바꾸지 않았다.
- `App.jsx`는 22,497줄·995,166 bytes에서 22,251줄·985,836 bytes로 줄었다. 새 화면은 285줄·10,189 bytes이며 lazy loading 전이라 main JS는 1,644.17 kB, gzip 423.00 kB로 실질적으로 유지된다.
- 기존 전용 fixture 3건이 구현 위치를 App에 고정하고 있어, 활성 허브 1개·달력 view 계약·keyboard 연결이라는 사용자 동작 계약을 새 파일 경계에서 검사하도록 갱신했다.
- 검증: lesson fast 7/7, teacher view adapter, lesson hub/calendar/keyboard 전용 fixture, runtime lint, scenario 813/813, `check:fast`, production 813/813 85.0초, build 354 modules, Worktree 격리 safe browser 9/9를 통과했다. 운영 데이터·실제 알림·운영 SQL·유료 호출은 사용하지 않았다.

## 2026-08-02 browser smoke Worktree 격리 기본화

- `npm run test:browser-smoke`가 Worktree 경로에서 안정적으로 파생한 가용 frontend/API 포트를 선택하고 기존 preview를 재사용하지 않도록 격리 runner를 추가했다.
- 명시 포트, 포트 범위, Worktree path hash 계약을 fixture로 확인한다. 직접 Playwright 실행은 runner 진단용 `test:browser-smoke:direct`로 남겼다.
- 검증: runner contract, `check:fast` scenario 812/812·build 353 modules, 기본 명령의 자동 격리 포트 safe browser 9/9를 통과했다. 단순 test tooling 변경의 로컬 full production 반복은 정책대로 생략하고 exact-head/main CI에서 확인한다.
- 운영 데이터·실제 알림·운영 SQL·유료 호출은 사용하지 않는다.

## 2026-08-02 App 3차 리팩터링 3-1 Notification Center 화면 분리

- `App.jsx` 내부의 Notification Center top-level 405줄을 `src/domains/notifications/NotificationCenter.jsx`로 이동했다. App은 명시적 `runtimeBindings`로 기존 날짜·표시 helper와 특강 panel을 주입하며 저장·예약·취소·reconcile 계약은 바꾸지 않았다.
- `App.jsx`는 22,912줄·1,011,179 bytes에서 22,497줄·995,166 bytes로 줄었다. 새 도메인 component는 456줄·16,909 bytes다. 아직 lazy loading 전이므로 main JS 크기는 약 1.64 MB로 유지된다.
- 검증: notification fast 5/5, teacher view adapter, runtime lint, scenario 812/812, `check:fast`, production 812/812 84.3초, build 353 modules, Notification Center·특강관리 동선을 추가한 Worktree 격리 safe browser 9/9를 통과했다. 기본 5173 포트의 기존 preview를 재사용한 최초 smoke는 오래된 bundle 때문에 4건 실패했고 새 격리 포트 재실행으로 코드 회귀가 아님을 확인했다.
- 운영 데이터 쓰기·실제 알림 발송/예약/취소·운영 SQL·유료 호출은 없다.

## 2026-08-02 App 3차 리팩터링 3-0 기준선·검증 경로

- 최신 main `16f8c4ca`에서 `App.jsx` 22,912줄·1,011,179 bytes, main JS 1,642.41 kB, 전체 production 86.19초를 기준선으로 측정했다.
- lesson·supplement·student·notification·settlement 대표 pure fixture를 npm 중첩 없이 병렬 실행하는 `test:domain:*` 명령을 추가했다. 기존 `check:fast`와 전체 `test:production`의 의미는 보존한다.
- 검증 source of truth는 `docs/testing-policy.md`, 3차 단계와 종료 기준은 `docs/app-refactor-third-pass-plan.md`다.
- 검증: runner contract, 5개 domain 각 0.62초 이하·통합 27/27 0.94초, runtime lint, `check:fast` scenario 811/811, build 352 modules, 전체 production 811/811 84.3초를 통과했다. UI 동작 변경이 없어 브라우저 재실행은 생략했고 같은 기준 commit의 격리 smoke 8/8을 기준선에 기록했다.
- 운영 데이터 쓰기·실제 알림·운영 SQL·유료 호출은 없다.

## 2026-08-02 정산 기본월·상단 컨트롤 정리

- 서울 기준 매월 1~2일에는 지난달, 3일부터는 이번 달을 월별 정산 기본월로 선택한다. 초기 진입에만 적용하며 사용자가 직접 선택한 월은 바꾸지 않는다.
- 분리되어 있던 정산월, 저장 상태, `횟수·금액 PDF`를 하나의 반응형 컨트롤 카드에 배치했다. 좁은 화면에서는 월 입력과 상태·PDF 행동을 두 줄로 정돈한다.
- 날짜 경계 fixture는 1일·2일·3일과 1월→전년 12월 전환을 포함한다.
- 검증: runtime lint, 정산 전용 fixture, production scenario `811/811`, build `352 modules`, 격리 safe browser `8/8` 통과. 운영 쓰기·알림 side effect는 없다.

## 2026-08-02 월별 정산 표·PDF 항목 간소화

- 월별 정산 표에서 `월별 스케줄`, `정산 처리` 열과 새 제외 버튼을 제거했다. 기존 스케줄·제외 저장값과 계산 원천은 삭제하지 않으며, 과거 제외 행은 복원할 수 있다.
- PDF는 학생별 `최종 정규 횟수`를 유지하되 상단·합계행의 최종 정규 횟수 합산을 제거하고 총 금액만 합산한다.
- 검증: runtime lint, 정산 전용 fixture, production scenario `810/810`, build `352 modules`, 격리 safe browser `8/8` 통과. 운영 쓰기·알림 side effect는 없다.

## 2026-08-02 월별 정산 PDF 인쇄 복구

- 운영에서 월별 정산 모달의 PDF 버튼이 비활성화되어 있던 동선과 보고서 창의 자동 인쇄만 의존하던 경계를 확인했다.
- 사용자 확정 동선에 맞춰 모달은 최종 정규 횟수 저장·재조회만 담당하고, 저장 후 모달을 닫아 바깥 `횟수·금액 PDF`에서 보고서를 연다. 보고서에는 자동 인쇄가 동작하지 않아도 누를 수 있는 `인쇄하기` 버튼을 추가했다.
- 안전 브라우저에서 `4회 입력 -> 저장 완료 -> 모달 닫기 -> 바깥 PDF -> 4회 유지 -> 인쇄하기 노출`을 검증했다.
- 검증: runtime lint, 정산 전용 fixture, production `810/810`, build `352 modules`, Worktree 격리 safe browser `8/8` 통과.

## 2026-08-02 수업 등록 배치·월별 출결 달력 가독성

- `+ 수업 등록`과 조건부 `정규수업 열기`를 별도 상단 줄에서 월 이동 박스 안 오른쪽으로 옮겼다. 작은 화면에서는 월 이동과 생성 행동을 두 줄로 쌓는다.
- 공통 모달의 720px 규칙에 덮이던 월별 출결·수업 전용 폭을 높은 우선순위로 교정하고 최대 폭을 1320px로 늘렸다. 1280px 안전 화면에서 달력 7열이 가로 스크롤 없이 표시된다.
- 검증: runtime lint, 수업 달력 view boundary, 정산 전용 fixture, production `810/810`, build `352 modules`, Worktree 격리 safe browser `8/8` 통과.

## 2026-08-02 최종 정규 횟수 모달 저장·PDF 출력 복구

- 상세 모달에서 숫자는 초안에 반영되지만 실제 저장 버튼이 배경 화면에만 있어 저장할 수 없던 동선을 확인했다.
- 모달 하단에 `최종 정규 횟수 저장 및 확인`을 추가해 Supabase 저장·재조회 완료를 바로 표시한다. 저장 뒤 모달을 유지해 확정값을 대조한다.
- 안전 브라우저에서 `4회 입력 -> 저장 완료 -> 닫고 다시 열어 4회 유지`를 검증했다.
- 검증: runtime lint, 정산 전용 fixture, production `810/810`, build `352 modules`, Worktree 격리 safe browser `8/8` 통과. 운영 데이터 쓰기·알림 side effect는 없다.

## 2026-08-02 정산 특강 출결·학생 통합 출결·간결 PDF·보강 시간 교정

- 특강 정산의 확정 계획 회차와 실제 특강 수업일지를 대조해 학생별 일지 수, 출석·지각·결석·대기, 일지 누락 수를 표시한다. 금액 계산 원천은 기존 확정 수강 계획을 유지한다.
- 학생 프로파일에 월 선택형 정규·특강 출결 요약을 추가했다.
- 횟수·시수 버튼의 달력 모달에서 시스템 계산 횟수와 교사 확정 `최종 정규 횟수`를 함께 보여 준다. 확정값은 월별 정산 원천에 저장해 신입 회당·퇴원 비례 계산 및 PDF에 사용하고, 월정액 학생은 금액을 유지한다.
- 표의 요청 차감·추가 입력 열을 제거했다. 기존 저장 조정값은 유실하지 않고 금액에만 계속 반영한다.
- 월별 정산 PDF는 필터나 출결 세부내역 없이 정산 제외 행의 `이름·최종 정규 횟수·금액`과 합계만 출력한다.
- 보강·휴강 보충은 학생의 정규 프로필 시간표로 시간을 덮지 않고 실제 수업일지 시작·종료 시간을 사용한다. 이윤채 7월 30일 보강과 같은 14:00 수업이 16:00으로 보이던 원인을 이 경계에서 차단했다.
- 최신 main의 Phase 5 adapter와 통합하면서 정적 시나리오 충돌은 새 outlet 계약을 유지하고 정산 항목만 합쳤다. AI 리뷰에서 수업일지 0건일 때 교사 확정 횟수가 금액 계산을 통과하지 못하는 경계를 발견해, 자동 계산 0원 규칙은 유지하고 명시적 확정값만 계산하도록 최소 보정했다.
- 검증: 정산 전용 fixture, Phase 5 전용 fixture, runtime lint, `check:fast` scenario `810/810`, production `810/810`, build `352 modules`, Worktree 격리 safe browser `8/8` 통과. 운영 쓰기·알림 side effect는 없다.

## 2026-08-02 App 2차 리팩터링 Phase 5 — teacher view callback·화면 조립

- 17개 교사 화면의 component/props/callback 조립을 `src/app/TeacherViewOutlet.js`의 명시적 contract와 adapter로 옮겼다. `App`은 상태, local draft, API 저장·삭제, 알림 예약·취소·발송·재대조 handler를 계속 소유한다.
- outlet은 active view 하나만 렌더하며 네트워크/API/Storage를 직접 호출하지 않는다. 학생 포털과 보고서 화면은 기존 별도 경계를 유지한다.
- 기존 17개 JSX의 component와 prop 이름 inventory가 새 adapter와 정확히 같은지 자동 대조했다. 저장·삭제·예약·취소·발송·재대조 고위험 callback과 App 주입 누락을 확인하는 전용 fixture를 Production checks에 연결했다.
- AI 리뷰에서 새 모달 표시 callback이 기존 월 정규수업 Supabase 저장 함수와 같은 이름을 사용한 중복 선언을 발견했다. 모달 표시 callback 이름만 분리하고 App-owned 함수 선언 179개에 다른 중복이 없음을 확인했다.
- 정적 시나리오와 notification/lesson 전용 검사는 JSX 파일 위치 대신 새 adapter 계약을 확인하도록 갱신했다. 기능·저장 원천·오류 복구 의미는 바꾸지 않았다.
- 검증: runtime lint, Phase 5 전용 fixture, 17개 기존 prop inventory 대조, `check:fast` scenario `810/810`, production `810/810`, 독립 build `350 modules`, Worktree 격리 safe browser `7/7` 통과. 운영 데이터 쓰기·실제 알림 발송/예약/취소·운영 SQL·유료 호출은 없었다.
- production JS chunk 약 1.63 MB와 Babel의 `App.jsx >500KB` 경고는 남아 있다. 다음 대형 단위는 화면 정의의 실제 파일 분리와 lazy loading/code splitting이다.
- commit `ce73d37e`, PR #9를 merge commit `254cd0b1`로 main에 통합했다. exact-head와 main Production checks, Vercel preview·production 배포가 모두 성공했다.

## 2026-08-02 수업일지·보충관리 최신 main 통합 검증

- 수업 생성 action, 운영 알림 접기, 보충 정렬·시간 입력, 결석보강 알림톡 3종 편집·저장·취소 UI의 5개 커밋을 정산 수정이 포함된 최신 main 위에 순서대로 재배치했다. 코드 충돌은 없었고 문서 충돌은 두 작업 기록을 모두 보존했다.
- Phase 3 notification refresh/reconcile controller와 Phase 4 app_state 직렬화·CAS·재조회 전용 검사를 함께 통과해 겹친 lifecycle·저장 경계가 유지됨을 확인했다.
- AI 리뷰에서 modal이 열린 뒤 task가 사라질 때 3종 selector가 null task를 읽을 수 있는 경계를 발견해 빈 controls로 닫히는 guard와 fixture를 추가했다.
- Windows CRLF checkout에서도 app_state CAS 정적 계약을 확인하도록 전용 assertion을 줄바꿈 독립적으로 바꿨다. Playwright·Vite·safe API는 Worktree별 격리 포트를 공유해 다른 작업의 기존 preview를 재사용하지 않는다.
- 검증: 관련 전용 테스트, runtime lint, `check:fast`, production `810/810`, 독립 build `349 modules`, 격리 safe browser `7/7` 통과. 운영 데이터 쓰기와 실제 알림 발송·예약·취소는 실행하지 않았다.

## 2026-08-02 보충관리·첫 화면 사용성 보강

- 첫 화면 운영 알림에 독립적인 `알림 접기/펼치기`를 추가했다.
- 보충관리 목록에 월요일 우선 요일별·이름 가나다별 정렬을 추가했다.
- 보충 시간 입력을 시/분 선택으로 분리해 시를 고르면 `00분`으로 시작하고, 분은 5분 단위로 따로 변경한다.
- 결석보강 알림톡 3종을 한 화면에서 편집·일괄 저장하도록 바꾸고, 학생 문구 수정 시 학부모·당일 학생 문구에 연동해 3종을 선생님 최종본으로 고정한다.
- Solapi 예약 확인 모달은 학생·학부모·당일 학생 상태를 동시에 보여 주며 취소 가능한 예약만 한 번에 일괄 취소한다. 실제 예약·취소는 실행하지 않았다.
- 보충 내용·수업일지 일정·알림톡 저장 상태와 주요 행동을 모달 하단 고정바에 배치했다.
- 검증: 보충 전용 모델·controller, runtime lint, production `809/809`, build `346 modules`, safe browser에서 정렬·`14:00` 기본 분·3종 연동·통합 확인·고정 상태바를 통과했다.

## 2026-08-02 수업일지 생성 버튼 긴급 복구

- 점멸 방지 목적으로 숨긴 기존 달력 toolbar 안에 `+ 수업 등록`과 조건부 `정규수업 열기`가 함께 남아 화면에서 사라진 회귀를 확인했다.
- 숨김 toolbar는 유지하고 두 생성 action만 별도의 표시 bar로 분리했다. 태블릿·모바일에서는 버튼이 세로 전체 너비로 보인다.
- safe browser에서 생성 action 표시와 `수업 등록` 모달 진입을 확인했다.
- 검증: 달력 view boundary, runtime lint, production `809/809`, build `346 modules`, safe browser `5/5` 통과.

## 2026-08-02 7월 월별 정산 회차·퇴원·출결 색상 교정

- 운영 API를 읽기 전용으로 대조해 신규생 정산이 수업일지 회차와 예정 시간표 회차를 섞는 원인을 확인했다. 김형준은 실제 정규 10회와 보강 예정 휴강 1회, 이윤채는 저장 시간표 밖 첫 수업을 포함한 실제 정규 11회가 정산 근거다.
- 신규생 회차제는 수업일지의 정산 인정 정규 회차를 사용한다. 휴강은 보강 전에도 1회로 포함하고 연결된 `휴강 보충`은 추가 회차로 중복 계산하지 않는다. 이채빈은 정규 4회+휴강 1회로 5회이며 연결 보강은 금액을 추가하지 않는다.
- 해당 월 퇴원일이 있고 교사가 고정 요금을 명시하지 않은 기존생은 자동 퇴원 비례로 바꿨다. 김예나는 7/29 퇴원 기준 13/14 비례이며 교사 override는 유지된다.
- 월별 출결·수업 달력에 출석·결석·지각·공결·대기 색상을 적용했다. 대기는 수업일지는 있으나 출결이 확정되지 않은 상태로 파란색 표시하며, 휴강과 연결 보강은 점선 테두리로 구분했다.
- 학생별 행과 상세 요약에 휴강 포함 회수, 연결 보강의 추가 계산 제외, 대기 출결 미확정 근거를 각각 별도 문구로 표시한다.
- 운영 원천 재계산: 이채빈 5회·187,500원, 김형준 11회·412,500원, 이윤채 11회·385,000원, 김예나 13/14·417,857원. 운영 snapshot 저장은 하지 않았다.
- 검증: 정산 전용 fixture, runtime lint, production `810/810`, build `349 modules`, safe browser `5/5` 통과. 운영 쓰기·알림 발송·예약·취소는 0건이다.

## 2026-08-02 App 2차 리팩터링 Phase 4 — app_state 저장·복구·재조회

- Phase 3를 PR #4, merge commit `7fb366f9`로 main에 통합했고 main Production checks와 Vercel 배포가 성공했다.
- 공통 app_state 12개 key는 500ms debounce 뒤 controller가 key별로 직렬 저장한다. 진행 중 같은 값은 중복 제거하고 새 값은 이전 저장·재조회가 끝난 다음 저장한다.
- 서버는 기존 `updated_at`을 예상 version으로 조건부 PATCH하고, 없는 row는 충돌 감지 INSERT한다. 다른 탭/기기 선저장으로 version이 달라지면 409로 중단하며 클라이언트 입력은 유지한다. 운영 SQL이나 스키마 변경은 없다.
- POST 성공만으로 완료하지 않고 `includeRows=true` GET으로 Supabase 값과 새 `updated_at`을 재조회한 뒤에만 persisted snapshot과 저장 완료 상태를 갱신한다. `lessonNotificationPlans`의 즉시 저장도 같은 controller를 사용한다.
- 검증: app_state inventory/controller 전용 fixture, runtime lint, `check:fast` scenario `809/809`, production 전체 `809/809`, 독립 build `349 modules`, safe browser smoke `4/4` 통과. 운영 데이터 쓰기·실제 알림·운영 SQL·유료 호출은 없었다.
- AI 코드 리뷰에서 local draft 보존, 같은 key 직렬화, CAS 신규/기존 row 분기, 재조회 완료 판정, session cleanup을 확인했고 병합을 막는 발견은 없었다. 기존 1.6 MB chunk와 Babel `App.jsx >500KB` 경고는 후속 분할 부채다.

## 2026-08-02 App 2차 리팩터링 Phase 3 — notification refresh/reconcile

- Phase 2를 PR #3, merge commit `a20c10cd`로 main에 통합했고 main Production checks와 Vercel 배포가 성공했다.
- main 병합은 AI 코드 리뷰·전체 자동검증·PR CI·배포가 성공하고 의미 변경/운영 side effect가 없으면 AI가 판단해 진행하도록 공통 지침을 갱신했다.
- notification refresh의 겹친 초기/interval/focus 요청, lesson/history 전환 stale 응답, reconcile 동일 요청 double-click을 Phase 3 자동검증 대상으로 잡았다. 실제 Solapi 조회·예약·취소·발송은 실행하지 않는다.
- refresh는 scope별 latest request와 exact-query single-flight를 소유하는 controller로, reconcile은 동일 payload single-flight controller로 분리했다. React state·record 저장 반영은 App adapter에 남겼다.
- 검증: 알림 API 전용 묶음, Phase 3 controller fixture, runtime lint, `check:fast` scenario `809/809`, production 전체 `809/809`, 독립 build `348 modules`, safe browser smoke `4/4` 통과. 실제 Solapi·운영 데이터·운영 side effect는 사용하지 않았다.
- AI 코드 리뷰에서 상태 owner, stale 응답, cleanup, 오류 복구, 조회와 예약/취소/발송 분리를 확인했고 병합을 막는 발견은 없었다. 기존 1.6 MB production chunk 경고는 후속 번들 분리 부채로 유지한다.

## 2026-08-02 App 2차 리팩터링 연쇄 진행 기준

- Phase 1 auth/session을 PR #2, merge commit `28519782`로 main에 통합했고 main Production checks와 Vercel 배포가 성공했다.
- Phase 1~5를 2차 리팩터링으로 묶고 사용자 의도, 단계 순서, AI 검수, 지연 보고, 사람 gate 기준을 `docs/app-refactor-second-pass-plan.md`에 고정했다.
- 즉시 사람 판단이 필요하지 않은 발견은 queue/worklog에 남긴 채 자동검증·AI 리뷰·다음 단계 검수를 이어간다. main 병합과 운영 side effect만 필요한 순간에 중단한다.
- Phase 2는 최신 main의 별도 `codex/app-refactor-phase2-attendance` Worktree에서 시작한다.

## 2026-08-02 App 2차 리팩터링 Phase 2 — 출결 polling·동기화

- 기존 7초 출결 record sync hook/controller는 그대로 유지하고 `App.jsx`에 남아 있던 kiosk 날짜 rollover의 loaded-date ref, reload key, 30초 interval, focus/visibility listener를 `useAttendanceDateRollover`로 이동했다.
- 날짜 변경 시 hydration reload, 같은 날짜 hydration 실패 후 재시도, cleanup 뒤 무실행, kiosk preview/check의 날짜 변경 차단을 전용 fixture와 scenario에 고정했다. 저장 중 `dirty/saving/failed` record를 polling이 덮지 않는 기존 계약도 재검증했다.
- 첫 safe browser에서 hook 호출이 route mode 선언보다 앞서 TDZ 오류가 발생한 것을 발견했다. 호출 위치만 최소 수정했고 재실행 4/4가 통과했다. 정적검사만으로 닫지 않고 safe browser까지 수행해야 한다는 연쇄 검수 원칙의 근거로 남긴다.
- 운영 출결 입력, Supabase 쓰기, 알림 발송·예약·취소는 실행하지 않았다.

## 2026-08-01 App 고위험 경계 phase 1

- hydration/persistence, auth/session, attendance polling, notification_jobs/Solapi reconcile, 17개 teacher 화면 callback 조립의 owner·원천·draft·lifecycle·side effect·재시도·중복 위험을 inventory했다.
- session state, mount 1회 teacher 저장소 판독, 역할별 auth 결과, teacher 3채널 저장과 logout cleanup을 `useAppSession`으로 분리했다. App은 session 전환 뒤 화면 ready/active view만 조정한다.
- 저장 source 우선순위·저장 필드 제한·teacher/student/parent 로그인·실패·logout cleanup fixture를 추가하고 Production checks에 연결했다. 기존 출결 polling fixture의 in-flight 차단과 cleanup도 대조했다.
- notification refresh의 in-flight/stale 응답 보호 부재와 app_state CAS 부재는 원인을 숨기지 않고 후속 위험으로 남겼다. 운영 로그인·출결·알림 발송/예약/취소·SQL·유료 AI는 실행하지 않았다.
- 검증: auth/session·surface·security·attendance lifecycle 전용 검사, runtime lint, check:fast, production `809/809`, build `346 modules`, safe browser `4/4` 통과.

## 2026-08-01 수업일지 과거 기록 월 경계 연동 복구

- 운영 원천을 읽기 전용으로 대조해 8월 1일 수업과 7월 수업의 반 식별자·학생 명단·지난 숙제 연결은 정상임을 확인했다.
- 실제 원인은 7월 30일 교재·강의 내용이 빈 기록인데 화면이 그 직전 기록에서 탐색을 멈춰, 값이 남은 7월 28일까지 되짚지 못한 것이었다.
- 같은 정규반의 과거 기록을 최신순으로 보며 교재와 강의 내용을 각각 가장 최근의 비어 있지 않은 값으로 승계한다. 직전 기록의 메모·숙제 후속처리 의미는 유지하고 특강 기록은 제외한다.
- 월 경계 빈 기록 fixture와 safe browser 회귀를 추가했다. 운영 Supabase 쓰기, 알림 예약·발송·취소는 실행하지 않았다.
- 검증: 전용 연속성/selector 테스트, runtime lint, production `809/809`, build `345 modules`, safe browser `4/4` 통과.

## 2026-08-01 수업일지 월 이동 복구·자동 task 날짜 제목

- 7월 28일 점멸 방지 목적으로 전체 숨김 처리된 달력 상단 제어줄 안에 월 이동 버튼도 함께 사라진 원인을 확인했다.
- 기존 제어줄은 숨김 상태로 유지하고 달력 바로 위에 월 제목·이전 달·다음 달만 독립 탐색줄로 복구했다.
- ±30일 이동 대신 실제 월 이동으로 바꾸고 31일에서 짧은 달로 이동할 때 해당 달 말일로 보정한다.
- safe browser에 다음 달 이동 후 이전 달로 복귀하는 회귀 검사를 추가했다. 수업·출결·알림 원천 저장과 Solapi side effect는 없다.
- 오전 9시 자동화는 실행 시작 시 현재 task 제목을 서울 기준 `YYYY-MM-DD Academy OS 매일 개발 이어가기`로 바꾸도록 갱신했다.
- 검증: 달력 model/view 전용 테스트, scenario `809/809`, runtime lint, build `345 modules`, safe browser smoke `3/3`, 전체 production 묶음을 통과했다.

## 2026-08-01 app_state 자동저장 경쟁 조건 inventory

- 공통 자동저장 대상 12개 key, 500ms 변경-key debounce, API upsert, 선택적 row metadata 경계를 정적 대조했다.
- 클라이언트 request ID가 UI 상태만 보호하고 DB 요청 역전, CAS, 저장 후 재조회는 보호하지 않는다는 점을 deterministic fixture로 재현했다.
- 전용 `test:app-state-autosave-inventory`를 추가하고 GitHub Actions Production checks에 연결했다.
- 운영 Supabase·Storage·notification_jobs·Solapi 쓰기, 실제 발송, SQL 적용은 0건이다.
- 검증: 전용 inventory, runtime lint, production `809/809`, build `345 modules`, safe browser smoke `2/2`를 통과했다. 브라우저와 build 첫 병렬 실행에서는 cold Vite 변환이 10초를 넘어 로그인 smoke 1건이 실패했으나 단독 재실행에서 2/2 통과했다.
- 다음 단위는 같은 브라우저 동일 key 저장 직렬화이며, key별 `updated_at` CAS와 재조회는 그 다음 단위로 분리한다.

## 2026-07-31 개발환경·자동검증 보강

- 표준 경로를 `C:\Dev\academy-os`로 고정하고 통합 완료된 refactor clone을 recoverable archive로 이동했다.
- Documents clone은 최신 main·clean 상태로 맞추고, Codex 오전 9시 자동 작업 전용으로 격리했다. 사람은 canonical repo만 사용한다.
- VS Code F5를 운영 원천에 연결하지 않는 안전한 가상 API/fixture 실행으로 변경했다.
- Node 24 기준 `.nvmrc`, `npm run doctor`, VS Code 경로 표시를 추가했다.
- ESLint runtime 규칙을 도입해 실제 잠복 `no-undef` 5건을 발견하고 수정했다.
- 브라우저 blank screen 대신 오류 ID를 보여주는 error boundary와 민감정보 없는 client runtime error 보고를 추가했다.
- Playwright smoke가 로그인과 `퇴원생 결석보강 -> 보강만 취소`를 가상 데이터로 자동 검사한다.
- scenario 출력은 실패와 총계만 보여주는 요약 runner를 추가했다.
- 전체 production test도 기본 출력은 `scenario 809/809`와 소요시간만 남기고, 실패할 때만 원인 주변 로그를 보여준다.
- 장문 지침과 worklog/handoff는 archive로 옮기고 현재 상태·큐·개발 계약으로 분리했다.
- 매일 오전 9시 독립 task가 전날 handoff를 읽고 안전한 한 단위를 날짜별 `codex/` branch에 commit/push하도록 등록했다.
- 운영 Supabase·Storage·notification_jobs·Solapi 쓰기와 실제 발송은 0건이다.
- 검증: runtime lint, client error contract, scenario `809/809`, production 전체 묶음, build 345 modules, browser smoke 2/2, production dependency audit 0건을 통과했다. 강제 downgrade가 필요한 개발 전용 audit 경고는 적용하지 않았다.

## 최근 완료 기준

- 퇴원생 결석보강 보강만 취소: 운영 사람 gate 완료.
- 수업일지 끝 공백 입력: 수정·전체 회귀 완료.
- 보충 상세 null provider 오류: 수정·전체 회귀 완료.
- UI-0~UI-9와 App 안전범위 1~18: main 통합 완료.

## 다음 기록 규칙

- 이 파일은 최근 10개 작업 또는 약 200줄 이내로 유지한다.
- 오래된 완료 항목은 월별 archive로 이동한다.
- 미룬 작업은 여기 복제하지 않고 `docs/deferred-work-queue.md`만 갱신한다.
