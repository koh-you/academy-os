# Academy OS Current Worklog

이 파일은 최근 작업만 유지한다. 2026-07-31 이전의 전체 이력은 `docs/archive/current-worklog-through-2026-07-31.md`에 있다.

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
