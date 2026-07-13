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
이 handoff의 기존 기능 기준 커밋은 `1d764a1 Focus supplement modal on selected source`였고, 이후 Solapi 예약 첫 클릭/null 오류와 발송결과 버튼 보강이 추가됐습니다.
handoff 문서 갱신 커밋이 그 뒤에 있을 수 있으므로, 실제 최신 커밋은 `git log -1 --oneline` 결과를 우선하세요.

현재 미추적 로컬 항목:
- `.codex-temp/`
- 이 폴더는 Git에 올리지 말고, 작업 중 임시 산출물로만 봅니다.

최근 완료된 핵심 작업:
1. 보충관리 결석/숙제 흐름 정리
   - `미검사(not_checked)`는 숙제보충 후보에서 제외했습니다.
   - 실제 숙제보충 후보는 `not_done`, `partial_80`, `partial_50`입니다.
   - 결석/인정결석/무단결석 보강 후보는 해당 수업의 지난 숙제를 `함께 확인할 지난 숙제`로 품습니다.
   - 결석보강 완료는 과거 숙제 상태를 자동 완료로 바꾸지 않습니다.
   - 원본 분리:
     - 결석/수업 기록: `lesson_student_records`
     - 지난 숙제 기록: `homeworks`
     - 보충관리 task: `makeup_tasks`

2. 보충관리 상세 모달 source 단위 고정
   - 최원석처럼 2026-07-08, 2026-07-10 이틀 결석보강이 있는 경우, 7/10 상세에 7/8 카드가 섞이던 문제를 수정했습니다.
   - 상세 모달은 이제 `taskType + studentId + sourceId` 기준으로 선택한 row 1건만 표시합니다.
   - 모달 안 `보충 완료 처리` 성공 시 모달을 닫고 active 목록에서 빠지게 했습니다.
   - 회귀 테스트: `88b-1 supplement detail modal is focused to the selected source row`

3. 보충 일정 알림톡 문구 정리
   - 최종 코멘트 초안에는 자동으로 `보충 일정:` 블록을 넣지 않습니다.
   - 보충 일정은 미리보기/발송 구조의 `보충 일정` 섹션에서만 보여줍니다.
   - `일정 확정`, `일정 미확정`, 가운데 점 나열 같은 내부 상태 문구를 학부모/학생용 문구에서 제거했습니다.
   - 결석보강 문구에는 `지난 숙제 ...도 함께 확인하겠습니다.`가 자연문으로 붙습니다.

4. 보충 완료 처리 원본 보존
   - `보충 완료 처리`는 `makeup_tasks.status = done`, `completedAt/passedAt`, `supplementProcessStatus = completed`만 저장합니다.
   - 연결된 과거 `homeworks.teacherStatus/status/verifiedAt`는 바꾸지 않습니다.

5. 태블릿 출결 UX
   - 출결 저장 성공 후 `출결 저장 완료 · 알림톡 처리 중` 배너를 화면에 띄우지 않게 했습니다.
   - 알림톡 처리는 서버 백그라운드 큐로 유지합니다.

6. 운영 알림 / Slack
   - 운영 알림 원본은 Supabase `academy_reminders`입니다.
   - 운영 알림 수정 버튼과 완료 즉시 목록 반영을 구현했습니다.
   - Slack Incoming Webhook/Render 환경변수 설정 및 수동 테스트는 사용자가 진행했고, Slack 테스트 알림은 성공했습니다.
   - Slack URL 같은 비밀값은 문서/로그/Git diff에 절대 남기지 않습니다.

7. 화목토 반 시간 자동 보정
   - 화목토 앞반: 화목 `16:00-19:00`, 토 `10:00-13:00`
   - 화목토 뒷반: 화목 `19:00-22:00`, 토 `13:00-16:00`
   - 토요일 수업 생성/보정 시 위 시간이 적용됩니다.

8. Solapi 예약 첫 클릭/null 오류와 발송결과 버튼 보강
   - 신규 예약 row가 아직 없는 첫 `Solapi 예약 반영`에서도 `Cannot read properties of null (reading 'status')`가 나지 않도록 서버 예약 비교를 null-safe로 보강했습니다.
   - 예약 시각이 지나면 10분 grace를 기다리지 않고 `솔라피 발송결과` 버튼이 보이도록 했습니다.
   - `솔라피 발송결과`는 새 예약 생성이 아니라 Solapi 원천 발송결과를 OS `notification_jobs`/수업일지 상태에 반영하는 버튼입니다.

최근 검증 결과:
- `node --check api/server.js`
- `node --check api/routes/coreData.js`
- `node --check scripts/scenario-tests-production.cjs`
- `npm run test:production` 통과, 276개
- `npm run build` 통과
- `git diff --check` 통과

다음 세션 최우선 운영 검수:
1. 운영 배포 최신 커밋 확인
   - 기능 기준: 보충관리 source 모달 고정 이후 Solapi 예약 첫 클릭/null 오류와 발송결과 버튼 보강까지 포함합니다.
   - 실제 최신 커밋은 `git log -1 --oneline`으로 다시 확인합니다.
   - 운영 프론트: https://academy-os-blue.vercel.app
   - 운영 API: https://koh-you-math-academy-os-api.onrender.com
   - 운영 화면에서 아직 이전 증상이 보이면 코드 문제가 아니라 배포/캐시 지연인지 먼저 구분합니다.

2. Solapi 예약반영 첫 클릭/null 오류와 발송결과 버튼 최우선 검수
   - 2026-07-14 22:00 KST 리마인더를 걸어 두었습니다.
   - 수업일지 작성 후 먼저 `변경 저장`을 눌러 `수업일지 · 저장 완료`를 확인합니다.
   - 저장본 확인 후 `Solapi 예약 반영`을 한 번만 누르고, 첫 클릭에서 `Cannot read properties of null (reading 'status')`가 뜨지 않는지 확인합니다.
   - 예약 확인에서 학생별 학부모/학생 job이 중복 없이 1건씩인지 확인합니다.
   - 예약 시각 22:30이 지나면 10분 grace 없이 `솔라피 발송결과` 버튼이 보여야 합니다.
   - `솔라피 발송결과`를 누르면 새 예약 생성/취소가 아니라 Solapi 원천 결과를 OS 상태에 반영해야 합니다.
   - 중단 조건: null 오류 재발, 같은 학생/대상/예약시각 Solapi 예약 2건 이상, 22:30 이후 버튼 미노출, Solapi 원천 `statusCode 4000`인데 OS가 계속 `예약 중`.

3. 최원석 결석보강 실제 검수
   - 보충관리 > 결석보강에서 최원석 2026-07-10 상세를 엽니다.
   - 모달에는 2026-07-10 카드 1건만 보여야 합니다.
   - 2026-07-08 카드가 같이 보이면 중단합니다.
   - `보충 완료 처리`를 누르면 모달이 닫히고 active 결석보강 목록에서 빠져야 합니다.
   - 새로고침 후에도 완료한 항목이 active 목록에 다시 나타나면 중단합니다.
   - 최근 한 달 보충 내역에서는 완료 이력으로 확인되어야 합니다.

4. 결석보강 + 지난 숙제 확인 검수
   - 결석으로 숙제를 검사하지 못한 학생은 `숙제보충`이 아니라 `결석보강` 1건으로 관리되어야 합니다.
   - 결석보강 상세 안에 `함께 확인할 지난 숙제`가 보여야 합니다.
   - 알림톡 미리보기에는 `결석 보강`과 `지난 숙제 ...도 함께 확인하겠습니다.`가 자연문으로 보여야 합니다.
   - 결석보강 완료 후 과거 숙제 상태가 자동 완료로 바뀌면 중단합니다.

5. 실제 수업일지 / Solapi 검수
   - 수업일지 작성 후 먼저 `변경 저장`을 눌러 `수업일지 · 저장 완료`를 확인합니다.
   - 새로고침 후 강의 교재/강의 내용/지난 숙제/다음 숙제와 학부모/학생 알림톡 초안이 선생님 저장본 그대로 유지되는지 확인합니다.
   - 토요일 수업 기본 예약은 `16:30`, 30분 지연은 `17:00`, 알림톡 없음은 무발송 계획이어야 합니다.
   - 저장본 확인 후에만 `Solapi 예약 반영`을 누릅니다.
   - `예약 확인`에서 학생별 학부모/학생 job이 중복 없이 1건씩인지 봅니다.
   - 예약 시각이 지난 수업은 새 예약 생성이 아니라 `솔라피 발송결과` 버튼으로 OS 상태를 Solapi 원천에 맞춥니다.

6. Supabase SQL 적용 상태 확인
   - 운영 SQL 자동 적용은 하지 않습니다. 사용자가 Supabase SQL editor에서 직접 적용합니다.
   - 확인 대상 파일:
     - `supabase/20260710_academy_reminders.sql`
     - `supabase/20260708_prep_memo_acknowledgements.sql`
   - 적용 여부가 불확실하면 Supabase에서 테이블/컬럼 존재를 확인하거나, 화면에서 새로고침 유지로 검수합니다.
   - SQL 비밀값이나 접속 자격을 문서/Git에 남기지 않습니다.

중단 조건:
- `.env`, API key, Slack webhook URL, Supabase service role key, Solapi key/secret이 Git diff/문서/로그에 평문으로 남음
- 결석 학생의 미검사 숙제가 숙제보충과 결석보강에 동시에 뜸
- 결석보강 상세에서 다른 날짜 task가 같은 모달에 섞임
- 보충 완료 처리 후 active 목록/새로고침에서 다시 나타남
- 보충 완료 처리로 과거 숙제 상태가 자동 완료로 바뀜
- 수업일지 저장이 Solapi 예약/취소를 자동으로 건드림
- 같은 학생/같은 대상/같은 예약시각의 Solapi 예약이 2건 이상 생김
- 예약 시각이 지난 수업에서 `솔라피 발송결과` 버튼 대신 새 예약 흐름만 보임
- Solapi 원천 `statusCode 4000`인데 OS가 계속 `예약 중`으로 남음
- 선생님이 저장한 최종 코멘트/알림톡 문구가 AI/템플릿/자동 매핑값으로 덮어써짐
- 화면 필터나 표시 보정으로 원천 데이터 꼬임을 숨기려는 상황

작업 원칙:
- 한 번에 하나의 우선순위 작업만 구현합니다.
- 구현 전 저장 원천을 먼저 확인합니다.
- 보충관리/수업일지/알림톡은 `local draft -> 명시 저장 -> Supabase 저장 완료 -> 별도 발송/예약 검수` 흐름을 지킵니다.
- AI/자동 초안은 선생님 저장본을 덮어쓰면 안 됩니다.
- 완료 답변에는 `사람 검토 절차`와 `AI 자기검토`를 반드시 포함합니다.
- 검증 가능하면 `node --check`, `npm run test:production`, `npm run build`, `git diff --check` 후 커밋/푸시까지 진행합니다.
```

## 현재 최신 기준

- 작성일: 2026-07-13
- 기능 기준 최신 커밋: `1d764a1 Focus supplement modal on selected source`
- 실제 최신 커밋: `git log -1 --oneline` 결과를 우선
- 브랜치: `main`
- 운영 프론트: https://academy-os-blue.vercel.app
- 운영 API: https://koh-you-math-academy-os-api.onrender.com
- 마지막 검증: `node --check api/server.js`, `node --check api/routes/coreData.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 276개 통과, `npm run build`, `git diff --check`

## 저장 원천 요약

- 수업일지/알림톡 최종 문구: Supabase `lesson_student_records`
- 수업 알림 예약/발송 상태: Supabase `notification_jobs` + Solapi groups/messages
- 보충관리 task: Supabase `makeup_tasks`
- 과거 숙제 검사 이력: Supabase `homeworks`
- 운영 알림 원본: Supabase `academy_reminders`
- Slack 오전 요약 발송 이력: Supabase `notification_jobs`
- 시험분석 산출물 체크리스트: `exam_analysis_runs.audit_summary.outputDrafts.inputs`
- 시험지관리: `app_state.problemBooks`
- 수업연구: `app_state.lessonResearchItems`

## 참조 파일

- `AGENTS.md`
- `docs/current-worklog.md`
- `docs/home-codex-setup.md`
- `docs/slack-integration-guide.md`
- `supabase/20260710_academy_reminders.sql`
- `supabase/20260708_prep_memo_acknowledgements.sql`
- `src/app/App.jsx`
- `src/domains/lessons/assignmentStatus.js`
- `api/server.js`
- `api/routes/coreData.js`
- `scripts/scenario-tests-production.cjs`

## 자주 쓰는 명령

```powershell
git status --short
git log -1 --oneline
git log --oneline -8
node --check api/server.js
node --check api/routes/coreData.js
node --check scripts/scenario-tests-production.cjs
npm run test:production
npm run build
git diff --check
```
