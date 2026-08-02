# Academy OS Current Status

업데이트: 2026-08-02

## 현재 기준

- canonical repo: `C:\Dev\academy-os`, `main`, `origin/main`
- 최신 commit은 `git log -1 --oneline`을 source of truth로 사용한다.
- UI 통일 UI-0~UI-9와 기존 안전범위 App 리팩터링은 main 통합 완료다.
- 퇴원생 결석보강 `보강만 취소`, 수업일지 끝 공백 입력, 보충 상세 null 오류는 수정·운영 확인 완료다.
- 수업일지 달력은 숨겨진 제어줄과 분리된 이전·다음 달 탐색줄을 다시 표시하며 실제 월 단위로 이동한다.
- 수업일지의 `+ 수업 등록`과 조건부 `정규수업 열기`는 숨겨진 기존 제어줄과 분리된 생성 action bar에 표시한다.
- 첫 화면 운영 알림은 입력 폼과 별도로 전체 목록을 접고 펼칠 수 있다.
- 보충관리는 요일별 또는 이름 가나다별 정렬을 지원하고, 시간은 시 선택 시 `00분`으로 시작해 분을 별도로 바꾼다.
- 결석보강 알림톡은 3종을 동시에 편집·확인하며 학생 문구 수정본을 학부모·당일 문구에 연동해 최종본으로 저장한다. 취소 가능한 Solapi 예약은 한 번에 취소하고 저장 상태·행동은 모달 하단 고정바에서 확인한다.
- 수업일지의 교재·강의 내용은 같은 반 과거 기록을 역순으로 확인해 필드별 최신 비어 있지 않은 값을 월 경계 너머에서도 이어받으며, 특강 기록은 정규반에 섞지 않는다.
- 월별 정산의 신규생 회차제는 예정 시간표가 아니라 수업일지의 정산 인정 정규 회차를 사용한다. 휴강은 보강 전에도 1회로 포함하고 연결 보강은 추가 회차로 중복 계산하지 않는다. 퇴원일이 해당 월에 있으면 교사 고정 override가 없는 한 자동 퇴원 정산하며, 출결 달력은 출석·결석·지각·대기를 서로 다른 색으로 구분한다.
- 학생별 정산 행과 출결·수업 상세에는 `휴강 n회 · 정규 회차 포함`, `연결 보강 n회 · 추가 계산 없음`, `대기 n회 · 출결 미확정`처럼 예외 적용 근거를 별도 표기한다.
- 특강 정산은 확정 수강 계획과 실제 특강 수업일지 출결을 분리해 `계획/일지/출결/일지 누락`을 함께 표시한다. 학생 프로파일에서는 선택 월의 정규·특강 출결을 한 화면에서 확인한다.
- 월별 정산의 횟수 버튼을 열면 시스템 계산 횟수를 대조하고 `최종 정규 횟수`를 교사가 확정할 수 있다. 확정 횟수는 수업일지 유무와 관계없이 신입·퇴원 계산과 PDF에 반영되며 월정액 금액은 유지한다. 조정금액 입력 열은 제거했다.
- 월별 정산 PDF는 정산 제외 학생을 뺀 `이름·최종 정규 횟수·금액`과 합계만 출력한다. 보강 달력 시간은 학생 정규 스케줄이 아니라 실제 보강 수업일지 시간을 사용한다.
- 2026년 7월 운영 원천을 읽기 전용으로 재계산한 교정 예상은 이채빈 정규 5회, 김형준 11회, 이윤채 11회, 김예나 퇴원 비례 13/14다. 운영 정산 snapshot 저장은 사람 확인 뒤 실행한다.
- 전역 사람 gate는 0건이다.

## 개발환경 상태

- Slack 예약 알림 전용 작업은 최신 `origin/main`에서 시작했다. 즉시 Webhook, Bot 예약, GitHub Actions, Render dispatcher/cron 역할을 분리했고 Bot provider의 dry-run 무호출·예약/취소 payload·오류 전파 fixture가 통과했다. 운영 Bot/OAuth·채널·Render 환경변수는 아직 사람 Gate다.
- Node 24 기준, `npm ci` 사용.
- `npm run doctor`가 경로·Git·Node·중복 clone을 점검한다.
- VS Code F5는 운영 데이터에 연결하지 않는 안전한 가상 환경을 연다.
- ESLint runtime 검사, 간결한 scenario 요약, client runtime error reporter, Playwright browser smoke가 있다.
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

## 폴더 상태

- `C:\Dev\academy-os-refactor`는 main 통합 확인 후 `C:\Dev\_archive\academy-os-refactor-integrated-b0712525-2026-07-31`로 이동했다.
- `C:\Users\PC\Documents\academy os`는 Codex에 등록된 오전 9시 자동 작업 전용 clone으로 유지한다. 사람은 이 폴더를 열거나 수정하지 않고 `C:\Dev\academy-os`만 사용한다.
- 시험분석 독립 작업은 `C:\Dev\academy-os-exam-analysis`에 남긴다.
- 사진 일기장 프로젝트는 Academy OS와 완전히 별도다.

## 다음 우선순위

1. 전용 `codex/slack-scheduling-realtime` 작업에서 Slack 예약 API의 서버 orchestration·재예약 실패 안전성을 fixture로 고정한 뒤 운영 사람 Gate로 넘긴다.
2. Slack 안전 단위가 끝나면 교사 bearer·소유권 RLS·구독 범위·polling fallback 계약을 고정하고 Supabase Realtime을 점진 전환한다.
3. App 2차 리팩터링 Phase 1~5는 완료됐다. 대형 `App.jsx` 내부 화면 정의의 물리적 분리와 teacher 화면 lazy loading은 위 전용 작업과 섞지 않는다.
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

운영 동작 변경은 추가로 `npm run test:production`을 실행한다.
