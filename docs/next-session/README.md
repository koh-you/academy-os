# Next Session Handoff

이 폴더 하나만 다음 Codex 세션에 넘기면 됩니다. 새 세션은 이 파일을 먼저 읽고, 이어서 `AGENTS.md`, `docs/current-worklog.md`, `git status --short`, `git log -1 --oneline`을 확인한 뒤 이어가세요.

## 바로 붙여넣을 프롬프트

```text
E:\academy-os 작업을 이어가겠습니다.

먼저 아래 파일과 상태를 확인해주세요.
1. AGENTS.md
2. docs/current-worklog.md
3. docs/next-session/README.md
4. git status --short
5. git log -1 --oneline

현재 실제 최신 커밋은 반드시 `git log -1 --oneline`으로 확인해주세요.
이 handoff는 리팩터링 1번 커밋/푸시 이후 상태를 기준으로 합니다.

중요: 리팩터링 1번은 사람 검수 gate 통과, gate 후 검증 재실행, 커밋/푸시까지 완료된 상태입니다.
다음 세션은 코드를 바로 더 고치지 말고, 먼저 `git status --short`가 예상 범위인지 확인한 뒤 리팩터링 2번 후보를 사용자에게 제안해주세요.

리팩터링 1번 커밋 포함 항목:
- `src/domains/specialLectures/specialLectureGuideUtils.js` 신규
- `src/app/App.jsx` 수정
- `scripts/scenario-tests-production.cjs` 수정
- `docs/current-worklog.md` 수정
- `AGENTS.md` 수정
- `docs/next-session/README.md` 수정

계속 커밋하지 말 것:
- `.codex-temp/`
- `.env`
- PDF/HWP/HWPX/ZIP/대용량 자료
- Slack/Supabase/Solapi/Tally/OpenAI 등 비밀값

작업 시작 즉시 할 일:
1. `git status --short`와 `git log -1 --oneline`으로 현재 상태를 확인합니다.
2. 예상하지 못한 변경 파일이 있으면 코드 수정 전에 사용자에게 먼저 알립니다.
3. 리팩터링 2번 후보를 사용자에게 제안하고, 사용자가 승인하면 진행합니다.
4. 리팩터링 2번도 `원천/동작 보존 -> 파일 분리 -> 검증 명령 -> 사람 검수 gate -> 커밋/푸시` 순서를 지킵니다.

리팩터링 1번에서 이미 통과한 사람 검수 gate:
1. `운영 > 특강관리`에 들어갑니다.
2. 기존 특강 카드가 그대로 보이는지 확인합니다.
3. 특강 안내문 하나를 선택하고 오른쪽 공개 안내문 미리보기가 정상인지 확인합니다.
4. `일정 계산`을 펼쳐 기간/요일/시간을 바꿨을 때 회차, 시수, 수강료가 이전처럼 계산되는지 확인합니다.
5. `회차별 일정`에서 회차 카드 날짜/시간/주제를 수정했을 때 오른쪽 미리보기에 반영되는지 확인합니다.
6. `링크 복사`와 `특강 신청하기` URL에 Tally 링크가 유지되는지 확인합니다.
7. `알림톡 발송 준비`를 눌렀을 때 공지 발송 화면으로만 넘어가고, 실제 발송/예약이 생기지 않는지 확인합니다.
8. 새로고침 후 저장된 특강 안내문이 유지되는지 확인합니다.

리팩터링 1번 중단 조건:
- 특강 안내문 저장본이 새로고침 후 사라짐
- 일정 계산 결과가 이전과 다름
- Tally 신청 URL query가 빠짐
- `알림톡 발송 준비`만으로 `notification_jobs`가 생성됨
- 특강 신청자가 신입생 접수와 섞임

리팩터링 1번에서 gate 통과 후 재실행한 검증:
- 특강 helper 단독 import smoke check 통과
- `node --check api/server.js` 통과
- `node --check api/routes/coreData.js` 통과
- `node --check api/routes/notifications.js` 통과
- `node --check scripts/scenario-tests-production.cjs` 통과
- `npm run test:production` 289개 통과
- `npm run build` 통과
- `git diff --check` 통과
- 로컬 서버 `http://127.0.0.1:5173` HTTP 200 확인

리팩터링 2번 이상에서 기본으로 다시 실행할 검증 명령:
node --check api/server.js
node --check api/routes/coreData.js
node --check api/routes/notifications.js
node --check scripts/scenario-tests-production.cjs
npm run test:production
npm run build
git diff --check

리팩터링 1번 커밋 대상:
- `AGENTS.md`
- `docs/current-worklog.md`
- `docs/next-session/README.md`
- `scripts/scenario-tests-production.cjs`
- `src/app/App.jsx`
- `src/domains/specialLectures/specialLectureGuideUtils.js`

커밋하지 말 것:
- `.codex-temp/`
- `.env`
- PDF/HWP/HWPX/ZIP/대용량 자료
- Slack/Supabase/Solapi/Tally/OpenAI 등 비밀값

리팩터링 운영 원칙:
- 리팩터링은 유지보수 개발과 같이 진행합니다.
- 새 기능을 만들 때도 저장 원천, side effect, 나중에 분리할 후보 파일명을 같이 봅니다.
- 각 리팩터링 단위는 실제 변경 범위에 맞는 사람 검수 gate를 그때그때 새로 제공합니다.
- 사람 gate 통과 전에는 커밋/푸시하지 않습니다.
- gate 통과 후 검증 명령을 다시 실행하고, 통과하면 커밋/푸시한 뒤 다음 리팩터링으로 넘어갑니다.

다음 리팩터링 후보:
1. 리팩터링 2번: common UI components
   - 후보: 공통 Modal, InlineSaveStatus, EmptyState, CandidatePanel 같은 반복 UI
   - 주의: 수업일지/Solapi/보충관리 고위험 화면의 동작을 바꾸지 말고 작은 컴포넌트부터 분리
2. 리팩터링 3번: API client wrappers
   - 후보: fetchJson, apiGet/apiPost/apiPatch 계열
   - 주의: 인증, 에러 메시지, Supabase/app_state 저장 경로 변경 금지

마무리 안 된 운영 워크플로:
1. 운영 Supabase SQL editor에서 `supabase/20260715_special_lecture_applications.sql` 적용 여부를 사람이 확인해야 합니다.
2. Tally 특강 신청폼 Webhook을 `/api/special-lecture-applications/tally`로 연결하고 테스트 제출 1건을 확인해야 합니다.
3. 운영 배포 후 `운영 > 특강관리 > 특강 신청자`에서 신청자 카드/상태 저장/새로고침 유지 검수가 필요합니다.
4. Solapi 예약 첫 클릭/null 오류와 예약 시각 지난 수업의 `솔라피 발송결과` 버튼 노출은 별도 후속 검수로 남아 있습니다.
5. 보충 완료 처리 후 active 목록 재등장 여부, 결석보강 완료 시 과거 숙제 자동 완료 여부는 계속 회귀 gate로 봅니다.

작업 원칙:
- 한 번에 하나의 우선순위 작업만 구현합니다.
- 구현 전 저장 원천을 먼저 확인합니다.
- UI 변경 전 원본 row, 파생 표시값, local draft, 저장본을 구분합니다.
- 특강 안내문은 `local draft -> 안내문 저장 -> app_state.specialLectureGuides -> 공개 링크/공지 발송 준비` 흐름입니다.
- Tally 특강 신청자는 `special_lecture_applications` 원천을 사용하고, 신입생/상담 `student_intake_applicants`와 섞지 않습니다.
- 완료 답변에는 `사람 검토 절차`와 `AI 자기검토`를 반드시 포함합니다.
```

## 현재 최신 기준

- 작성일: 2026-07-15
- 실제 최신 커밋: 다음 세션에서 `git log -1 --oneline`으로 확인
- 현재 리팩터링 1번은 사람 gate 통과 후 커밋/푸시 완료 상태
- 브랜치: `main`
- 운영 프론트: https://academy-os-blue.vercel.app
- 운영 API: https://koh-you-math-academy-os-api.onrender.com

## 이번 세션에서 완료한 작업

### 1. 리팩터링 운영 원칙 정리

- 리팩터링은 별도 프로젝트가 아니라 앞으로의 유지보수 개발 방식으로 정했습니다.
- 새 기능 개발 시에도 저장 원천, side effect, 나중에 분리할 후보 파일을 같이 봅니다.
- 각 리팩터링 단위 종료 시 실제 변경 범위에 맞는 사람 검수 gate를 제공합니다.
- 사람 gate 통과 전에는 커밋/푸시하지 않고, 통과 후 검증 명령 재실행 -> 커밋/푸시 -> 다음 리팩터링 순서로 갑니다.
- 이 원칙을 `AGENTS.md`에 추가했습니다.

### 2. 리팩터링 1번 - 특강 helper 분리

- `App.jsx`에 있던 특강 안내문/일정 계산/회차 normalize/공개 URL/Tally URL/신청자 normalize helper를 `src/domains/specialLectures/specialLectureGuideUtils.js`로 분리했습니다.
- `App.jsx`는 새 모듈을 import해 기존 `SpecialLectureNoticePanel`, `SpecialLectureApplicationPanel`, `SpecialLecturePublicPage` 동작을 그대로 사용합니다.
- UI 컴포넌트 분리는 하지 않았습니다. 이것은 다음 리팩터링 후보입니다.
- production scenario 테스트가 새 특강 helper 모듈도 검사하도록 갱신했습니다.

### 3. 리팩터링 1번 검증

- 특강 helper 단독 import smoke check 통과
- `node --check api/server.js` 통과
- `node --check api/routes/coreData.js` 통과
- `node --check api/routes/notifications.js` 통과
- `node --check scripts/scenario-tests-production.cjs` 통과
- `npm run test:production` 289개 통과
- `npm run build` 통과
- `git diff --check` 통과
- 로컬 서버 `http://127.0.0.1:5173` HTTP 200 확인

## 저장 원천 요약

- 특강 안내문: Supabase `app_state.specialLectureGuides`
- 특강 공개 안내문: `/special-lecture?guide=...`가 저장본을 읽음
- 특강 신청자: Supabase `special_lecture_applications`
- 신입생/상담 Tally 접수: Supabase `student_intake_applicants`
- 공지 발송/예약: Supabase `notification_jobs` + Solapi
- 시험기간: Supabase `exam_prep_rows.exam_period`
- 수학시험 날짜: Supabase `exam_prep_rows.math_exam_dates/math_exam_date`
- 수동 학사일정: Supabase `school_events`
- 보충관리 task: Supabase `makeup_tasks`
- 수업일지/알림톡 최종 문구: Supabase `lesson_student_records`

## 마무리 안 된 워크플로

1. `supabase/20260715_special_lecture_applications.sql` 운영 Supabase SQL editor 수동 적용
2. Tally 특강 신청폼 Webhook 연결
3. Tally 테스트 제출 1건이 `special_lecture_applications`에 들어오는지 확인
4. 운영 배포 후 `운영 > 특강관리` 화면 검수
5. Solapi 예약 첫 클릭/null 오류 후속 분석
6. 예약 시각 지난 수업의 `솔라피 발송결과` 버튼 노출 확인
7. 보충 완료 처리/결석보강 회귀 검수

## 중단 조건

- `.env`, API key, Slack webhook URL, Supabase service role key, Solapi key/secret, Tally API key가 Git diff/문서/로그에 평문으로 남음
- 리팩터링 2번부터도 사람 gate 통과 전 커밋/푸시를 시도함
- `알림톡 발송 준비` 클릭만으로 실제 발송/예약이 생성됨
- 특강 안내문 저장만으로 `notification_jobs`나 Tally API 호출이 발생함
- Tally 신청자가 신입생 접수 후보와 특강 신청자로 구분 없이 섞임
- `안내문 저장` 전 공개 링크 저장본이 바뀐 것처럼 동작함
- 수업일지 저장이 Solapi 예약/취소를 자동으로 건드림
- 같은 학생/같은 대상/같은 예약시각의 Solapi 예약이 2건 이상 생김
- 선생님 저장본이 AI/템플릿/자동 매핑값으로 덮어써짐

## 참조 파일

- `AGENTS.md`
- `docs/current-worklog.md`
- `docs/next-session/README.md`
- `src/app/App.jsx`
- `src/domains/specialLectures/specialLectureGuideUtils.js`
- `scripts/scenario-tests-production.cjs`
- `api/server.js`
- `api/routes/coreData.js`
- `api/routes/notifications.js`
- `supabase/20260715_special_lecture_applications.sql`

## 자주 쓰는 명령

```powershell
git status --short
git log -1 --oneline
node --check api/server.js
node --check api/routes/coreData.js
node --check api/routes/notifications.js
node --check scripts/scenario-tests-production.cjs
npm run test:production
npm run build
git diff --check
```
