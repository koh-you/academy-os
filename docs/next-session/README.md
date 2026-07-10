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

오늘까지의 핵심 흐름:
- 수업일지/수업알림톡은 자동저장과 Solapi 예약을 분리하는 방향으로 정리 중입니다. 수업일지 저장은 Supabase `lesson_student_records` 저장이고, Solapi 예약/취소/발송결과 확인은 별도 버튼/별도 API 흐름이어야 합니다.
- `솔라피 발송결과` 버튼과 `/api/notification-jobs/reconcile-solapi`가 추가되어, 이미 Solapi에서 발송된 결과를 OS `notification_jobs`와 `lesson_student_records`에 반영할 수 있습니다.
- 시험분석은 웹앱에서 `GPT 대화세션 체크리스트`와 `GPT 기획 패킷 복사`를 만들고, 실제 카드 이미지는 GPT Image 프로젝트에서 한 장씩 생성하는 방향입니다.
- 인앱 HTML/CSS/JS 카드 렌더러였던 `블로그형 카드 디자인 Gate 3`는 완전히 삭제했습니다. 앞으로 웹앱은 체크리스트/기획 패킷/ZIP 텍스트까지 담당하고, 카드 이미지 렌더링은 GPT Image 프로젝트가 담당합니다.
- 운영 알림 원본은 Supabase `academy_reminders`로 분리했고, 대시보드/학생프로필/수업일지/학사일정이 같은 원본을 읽는 방향입니다. Slack 오전 9시 요약 API와 cron은 구현되어 있지만, 실제 Slack webhook 비밀값 설정과 실발송 검수는 아직 진행하지 않았습니다.

먼저 정리해야 할 남은 후속/주의:
1. Slack 실제 연동은 다음 우선순위입니다.
   - 가이드: `docs/slack-integration-guide.md`
   - Slack 앱에서 Incoming Webhook URL을 만들고, 이 URL은 절대 Git/문서/채팅에 그대로 남기지 않습니다.
   - Render API 서비스 `koh-you-math-academy-os-api` 환경변수에 `SLACK_WEBHOOK_URL`과 `SLACK_DRY_RUN=false`를 설정합니다.
   - API 재시작/재배포 후 `/api/integrations/status`에서 `slackConfigured: true`를 확인합니다.
   - 수동 테스트는 `/api/notifications/slack-today-schedule`에 `{"notifyEmpty":true,"force":true}`를 POST해 확인합니다.
   - 오전 9시 자동 발송은 KST 09:00 = UTC 00:00, cron `0 0 * * *` 기준입니다.
2. 운영 알림 원본은 운영 SQL 적용이 필요합니다.
   - 파일: `supabase/20260710_academy_reminders.sql`
   - SQL 적용은 사용자가 Supabase SQL editor에서 직접 합니다.
3. 자동저장 위험 붉은 UI는 1차 구현했습니다.
   - 설정, 시험정보/시험 후 기록지, 학사일정, 수업연구, 오답관리, 시험지관리, 보충관리, 학생 프로파일에 `자동저장 위험` 배지와 `왜 위험한가` 버튼이 붙었습니다.
   - 이 UI는 위험을 제거한 것이 아니라 저장 원천/부작용/중단 조건/권장 방향을 화면에 노출한 1차 조치입니다.
   - 전역 `app_state` snapshot 저장, 입력마다 API를 호출하는 화면, 수업일지/수업알림톡의 운영 안정성은 계속 검수해야 합니다.
4. 수업메모 이전 메모 확인 기능은 운영 SQL 적용이 필요합니다.
   - 파일: `supabase/20260708_prep_memo_acknowledgements.sql`
   - SQL 적용은 사용자가 Supabase SQL editor에서 직접 합니다.
5. Solapi 발송결과 반영은 운영 배포 후 실제 수업에서 검수해야 합니다.
   - affected lesson에서 `솔라피 발송결과`를 눌렀을 때 Solapi 원천 `statusCode 4000`이 OS에 `발송 완료`로 반영되는지 확인하세요.
   - 이 버튼은 새 예약 생성 버튼이 아니라 원천 발송결과 반영 버튼입니다.
6. 시험분석 GPT Image 워크플로우는 아직 최종 이미지 파일을 웹앱으로 다시 가져오는 저장 UI까지 구현된 것은 아닙니다.
   - 현재 원본은 `exam_analysis_runs.audit_summary.outputDrafts.inputs`에 저장되는 선생님 체크리스트/기획 입력입니다.
   - GPT Image 결과물은 프로젝트 대화세션에서 생성하고, 필요하면 다음 단계에서 최종 이미지/문구 역반영 UI를 설계하세요.
7. Vision AI raw 결과는 `.codex-temp/benchmark-vision-results`에 있고 Git에는 올리지 않습니다.
   - 지속 가능한 참고는 커밋된 docs 요약 파일을 우선 사용하세요.

운영 검수 우선순위:
1. `docs/slack-integration-guide.md`를 보며 Slack Incoming Webhook과 Render 환경변수를 설정합니다.
2. `/api/integrations/status`에서 `slackConfigured: true`가 나오는지 확인합니다.
3. `/api/notifications/slack-today-schedule` 수동 테스트로 선택한 Slack 채널에 오늘 운영 요약이 도착하는지 확인합니다.
4. Supabase SQL editor에서 `supabase/20260710_academy_reminders.sql` 적용 여부를 확인하고, 대시보드 `운영 알림 원본` 저장/새로고침 유지를 검수합니다.
5. 수업일지에서 저장 버튼과 Solapi 버튼이 분리되어 있는지 확인합니다.
6. 이미 예약 시간이 지난 수업에서 `솔라피 발송결과` 버튼을 눌러 OS 상태가 Solapi 원천과 맞게 갱신되는지 확인합니다.
7. 시험분석 탭 진입이 정상인지 확인합니다.
8. 시험분석 산출물 패널에서 `GPT 대화세션 체크리스트`, `GPT 기획 패킷 복사`, `산출물 ZIP`이 보이고, `블로그형 카드 디자인 Gate 3`/카드 미리보기 렌더러가 보이지 않는지 확인합니다.
9. 웹앱 체크리스트에 입력한 선생님 확정값이 `산출물 저장` 후 새로고침해도 유지되는지 확인합니다.
10. 자동저장 위험 후보 화면에서 `자동저장 위험` 배지와 `왜 위험한가` 버튼을 눌러 저장 원천/중단 조건이 보이는지 확인합니다.

중단 조건:
- Slack webhook URL이 Git diff, 문서, 로그에 평문으로 남음
- Slack 설정 후에도 `slackConfigured: false`가 계속 나옴
- Slack 수동 테스트가 새 운영 알림 원본을 읽지 못하거나 같은 날짜 요약을 중복 발송함
- 수업일지 저장이 다시 Solapi 예약/취소를 자동으로 건드림
- Solapi 발송결과 버튼이 새 예약을 만들거나 기존 예약을 취소함
- 시험분석 탭이 다시 접속 불가
- Gate 3 카드 렌더러 UI가 다시 보임
- 선생님 체크리스트 저장값이 AI/템플릿 값으로 덮어써짐
- 자동저장 위험 배지가 보이지 않거나 `왜 위험한가` 설명에 저장 원천/중단 조건이 빠짐
- 자동저장 문제를 필터/표시 보정으로만 숨기려는 상황

작업 원칙:
- `AI 초안 -> 선생님 검수/수정 -> 선생님 저장본 원본화`
- 저장 원천을 먼저 확인하고 화면 필터로만 맞아 보이게 하지 않습니다.
- 선생님이 수정/저장한 값은 이후 AI/템플릿/자동 매핑이 덮어쓰면 안 됩니다.
- 완료 시 `사람 검토 절차`와 `AI 자기검토`를 반드시 포함하고, 가능한 변경은 검증 후 커밋/푸시까지 진행하세요.
```

## 오늘 작업 요약

### 수업일지 / 알림톡

- 최종 알림톡 문구는 선생님이 저장한 `lesson_student_records.teacher_comment` / `student_comment`를 새 원본으로 보게 정리했다.
- 수동 하원 시각 저장, 반이동 stale record 삭제/방지, 지각 유예시간 보정, 저장 점멸 방지, 수업일지 저장과 Solapi 예약 분리 흐름을 정리했다.
- `솔라피 발송결과` 버튼과 `/api/notification-jobs/reconcile-solapi`를 추가해 Solapi 원천 발송 결과를 OS 상태에 반영할 수 있게 했다.

### 시험분석 / GPT Image

- 네이버 벤치마킹 글 12개를 Vision AI로 분석해 반복 키워드/구조를 문서화했다.
- GPT Image 프로젝트용 소스, 프로젝트 모듈, 체크리스트 구조, 웹앱 입력 패킷 흐름을 정리했다.
- 시험분석 산출물 패널에 `GPT 대화세션 체크리스트`와 `GPT 기획 패킷 복사` 흐름을 붙였다.
- 시험분석 탭 초기 렌더 오류를 수정했다.
- 인앱 카드 렌더러였던 `블로그형 카드 디자인 Gate 3`는 삭제했다. 이제 웹앱은 카드 이미지 자체를 렌더링하지 않는다.

### 시험지관리 / 수업연구

- 시험지관리 유형트리는 전체 유형 원천을 읽고 기본 접힘 상태로 시작한다.
- 수업연구는 같은 유형 원천에서 세부유형별 교안 항목을 만들 수 있다.
- 운영 SQL이 필요한 항목은 수업메모 이전 메모 확인 기능과 운영 알림 원본 `academy_reminders`다.

### 운영 알림 / Slack

- 운영 알림 원본은 대시보드에서 입력하고, 학생프로필/수업일지/학사일정이 같은 Supabase `academy_reminders` 데이터를 읽는다.
- Slack 오전 9시 요약 API와 cron은 구현되어 있다.
- 실제 Slack Incoming Webhook 생성, Render `SLACK_WEBHOOK_URL`/`SLACK_DRY_RUN=false` 설정, 수동 실발송 검수는 다음 작업으로 남겼다.

### 자동저장 위험 UI

- `src/shared/components/AutosaveRiskNotice.jsx`를 추가했다.
- 설정, 시험정보/시험 후 기록지, 학사일정, 수업연구, 오답관리, 시험지관리, 보충관리, 학생 프로파일에 붉은 `자동저장 위험` UI를 붙였다.
- 저장 구조 자체를 바꾼 것은 아니므로, 후속 작업은 여전히 `app_state` key별 dirty 저장, 행 단위 저장, 서버 updatedAt/version 확인이다.

## 현재 저장 원천

- 수업일지/알림톡 최종 문구: Supabase `lesson_student_records`
- 수업 알림 예약/발송 상태: Supabase `notification_jobs` + Solapi 원천 groups/messages
- 시험분석 산출물 체크리스트: `exam_analysis_runs.audit_summary.outputDrafts.inputs`
- 시험분석 PDF/문항 분석: `exam_analysis_runs`, `exam_analysis_sources`, `exam_analysis_questions`, Storage `exam-analysis-pipeline-sources`
- 운영 알림 원본: Supabase `academy_reminders`
- Slack 오전 요약 발송 이력: Supabase `notification_jobs`
- 시험지관리: `app_state.problemBooks`
- 수업연구: `app_state.lessonResearchItems`

## 참조 파일

- `AGENTS.md`
- `docs/current-worklog.md`
- `docs/exam-analysis-gpt-checklist-project-source-2026-07-09.md`
- `docs/exam-analysis-gpt-image-project-module-2026-07-09.md`
- `docs/exam-analysis-gpt-image-source-2026-07-09.md`
- `docs/exam-analysis-blog-vision-all-posts-2026-07-09.md`
- `docs/exam-analysis-canva-workflow.md`
- `docs/slack-integration-guide.md`
- `supabase/20260710_academy_reminders.sql`
- `supabase/20260708_prep_memo_acknowledgements.sql`

## 자주 쓰는 명령

```powershell
git status --short
git log --oneline -8
node --check api/server.js
node --check scripts/scenario-tests-production.cjs
npm run test:production
npm run build
git diff --check
```
