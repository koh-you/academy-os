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
- 전역 사람 gate는 0건이다.

## 개발환경 상태

- Node 24 기준, `npm ci` 사용.
- `npm run doctor`가 경로·Git·Node·중복 clone을 점검한다.
- VS Code F5는 운영 데이터에 연결하지 않는 안전한 가상 환경을 연다.
- ESLint runtime 검사, 간결한 scenario 요약, client runtime error reporter, Playwright browser smoke가 있다.
- GitHub Actions는 lint, production test, build, browser smoke를 실행하는 것이 목표다.
- `app_state` 자동저장 12개 key의 요청 역전·CAS/재조회 부재를 재현하는 inventory 검사가 Production checks에 연결됐다.
- App 2차 리팩터링 Phase 1 auth/session은 PR #2로 main 통합됐다. session state·초기 저장소 판독·login/logout·teacher 저장 cleanup은 `useAppSession`이 소유하며 전용 fixture가 Production checks에 연결됐다.
- Phase 2~5와 AI 연쇄 검수·지연 보고·사람 gate 원칙은 `docs/app-refactor-second-pass-plan.md`가 기준이다.
- Phase 2 branch에서 출결 kiosk 날짜 rollover의 ref·reload key·interval/listener를 출결 hook 경계로 이동하고 cleanup·동일 날짜 hydration 실패 재시도 fixture를 추가했다.

## 폴더 상태

- `C:\Dev\academy-os-refactor`는 main 통합 확인 후 `C:\Dev\_archive\academy-os-refactor-integrated-b0712525-2026-07-31`로 이동했다.
- `C:\Users\PC\Documents\academy os`는 Codex에 등록된 오전 9시 자동 작업 전용 clone으로 유지한다. 사람은 이 폴더를 열거나 수정하지 않고 `C:\Dev\academy-os`만 사용한다.
- 시험분석 독립 작업은 `C:\Dev\academy-os-exam-analysis`에 남긴다.
- 사진 일기장 프로젝트는 Academy OS와 완전히 별도다.

## 다음 우선순위

1. `app_state` 동일 key 저장을 브라우저 안에서 직렬화하고 진행 중 변경을 다음 요청으로 합친다.
2. key별 `updated_at` CAS와 저장 뒤 대상 key 재조회는 별도 단위로 이어간다.
3. App 2차 리팩터링 Phase 2 출결 polling·동기화를 전체 검증하고 PR/CI로 닫는다.
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
