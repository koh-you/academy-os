# Academy OS Current Worklog

이 파일은 최근 작업만 유지한다. 2026-07-31 이전의 전체 이력은 `docs/archive/current-worklog-through-2026-07-31.md`에 있다.

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
