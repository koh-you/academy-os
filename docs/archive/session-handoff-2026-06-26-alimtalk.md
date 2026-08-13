# Session Handoff - 2026-06-26 Alimtalk Stabilization

이 문서는 다음 Codex 세션이 알림톡 MVP 안정화 작업을 바로 이어받기 위한 인수인계입니다.

## Read First

1. `docs/current-worklog.md`
2. `docs/session-handoff-2026-06-26-alimtalk.md`
3. 알림톡 관련 코드:
   - `api/routes/notifications.js`
   - `api/server.js`
   - `src/app/App.jsx`
   - `.github/workflows/dispatch-notifications.yml`
   - `scripts/scenario-tests-production.cjs`

## Current Production State

- GitHub `main` 최신 확인 커밋: `18c4d17 Tighten Alimtalk readiness checks`
- Render API 최신 live 확인: `18c4d17d8e88e4b34f09be60b00a7c6c1640f30b`
- API health 확인: `https://koh-you-math-academy-os-api.onrender.com/health` -> 200
- Frontend: `https://academy-os-blue.vercel.app`
- Backend API: `https://koh-you-math-academy-os-api.onrender.com`
- SQL edit 자동화는 사용하지 않는다. 최근 알림톡 작업은 SQL 변경 없음.

## Key Commits In This Alimtalk Run

- `69958ad Include attendance detail in Alimtalk messages`
  - 지각/결석 알림톡에 사유와 시간 표시.
- `f2f012b Show missing checkout in lesson journal`
  - 하원 미체크 학생을 수업일지에 표시.
- `0547215 Harden scheduled notification dispatch`
  - dispatch token, due job claim, GitHub Actions fallback 추가.
- `ba05114 Add internal notification dispatch loop`
  - Render 웹 서비스가 깨어 있는 동안 60초마다 due job 자동 처리.
- `314a907 Suppress duplicate attendance Alimtalk sends`
  - 김재연 출결 알림톡 중복 원인 확인 후 프론트/서버 중복 차단.
- `475bfb7 Preserve structured lesson comment Alimtalk body`
  - 학생 알림톡이 코멘트 단문만 발송되던 `commentBodyOverride` 해석 버그 수정.
- `18c4d17 Tighten Alimtalk readiness checks`
  - 발송 전 점검 로직을 구조화 본문 기준으로 수정.

## Alimtalk Workflow Summary

### 1. 출결 알림톡

- Entry:
  - 태블릿/수기 출결 -> `handleSendAttendanceAlimtalk`
  - API: `POST /api/notifications/attendance-alimtalk`
- Server:
  - `sendAttendanceAlimtalkOnce`
  - `sendAttendanceAlimtalk`
  - `sendKakaoAlimtalk`
- Recipient:
  - 학부모 번호만 사용한다.
- Storage:
  - 즉시 발송 경로라 `notification_jobs`에 저장되지 않는다.
  - 화면 `notificationLogs`는 app state/local state 성격이라 권위 있는 발송 로그가 아니다.
  - 실제 발송 여부는 Solapi 메시지 조회가 가장 확실하다.
- Recent fix:
  - 동일 학부모 번호 + 학생 + 수업 + 출결상태 조합이 2분 안에 다시 들어오면 Solapi 재호출 없이 `duplicateSuppressed`로 응답한다.
  - 프론트도 `attendanceNotificationLocksRef`로 중복 요청을 막는다.

### 2. 수업일지 학부모/학생 알림톡

- Entry:
  - 수업일지 저장/예약 계획 -> `buildLessonNotificationJob`
  - `notification_jobs`에 `status=scheduled`, `payload.osScheduled=true`로 저장.
- Schedule:
  - 평일 기본 예약: 22:30 KST
  - 토요일 기본 예약: 18:30 KST
  - 30분 지연 예약 가능
  - 개별 학생/대상별 알림 제외 가능
- Dispatch:
  - `dispatchDueNotificationJobs`
  - `claimNotificationJob`
  - `sendNotificationJob`
  - `sendLessonCommentAlimtalk`
- Body:
  - 수업일지 context가 있으면 항상 아래 구조로 발송된다.
  - `출결 -> 과제 상태 -> 강의 교재 -> 강의 내용 -> 지난 과제 -> 다음 과제 -> 코멘트`
- Recent fix:
  - `commentBodyOverride`는 전체 본문 대체가 아니라 `💬 코멘트` 내용으로만 들어간다.
  - 공지처럼 수업일지 context가 없는 경우에만 override 본문이 그대로 발송된다.

### 3. 공지/개별 발송

- Entry:
  - 알림관리 -> `buildNoticePayload`, `buildNoticeJob`
  - API: `POST /api/notifications/comment-alimtalk`
- Job types:
  - `notice_parent`
  - `notice_student`
- Behavior:
  - 수업일지 context가 없으므로 공지 본문은 구조화 수업일지 본문으로 바뀌지 않는다.
  - 즉시 발송은 발송 후 `notification_jobs`에 결과 저장.
  - 예약 발송은 `notification_jobs`에 저장 후 dispatch 흐름을 탄다.

### 4. 기타 알림톡 API

- Daily report:
  - `POST /api/notifications/daily-report-alimtalk`
  - `sendDailyReportAlimtalk`
- Student schedule reminder:
  - `POST /api/notifications/student-schedule-reminder`
  - `sendStudentScheduleReminderAlimtalk`
- Slack:
  - `SLACK_WEBHOOK_URL` 기준. 현재 production status에서는 Slack configured=false.

## Automatic Dispatch Structure

- Render cron 서비스는 실제로 생성되지 않았다.
  - 이유: Render API cron 생성 시 `402 Payment information is required`.
- 현재 fallback 구조:
  - Render web service 내부 루프:
    - `runInternalNotificationDispatch`
    - 기본 활성화. `NOTIFICATION_INTERNAL_DISPATCH_LOOP !== "false"`이면 서버 startup 후 60초마다 due job 확인.
  - GitHub Actions:
    - `.github/workflows/dispatch-notifications.yml`
    - `*/5 * * * *`
    - 운영 API `/api/notification-jobs/dispatch-due` 호출.
- Safety:
  - `NOTIFICATION_DISPATCH_TOKEN`이 Render에 설정되어 있다.
  - `now`, `forceDryRun`, `dispatchToken` 같은 민감 override는 토큰이 맞을 때만 허용된다.
  - 토큰 없는 `forceDryRun` dispatch 호출은 401로 차단 확인됨.
- Important warning:
  - 운영 `dispatch-due`에 인증된 `forceDryRun=true`를 쓰면 due job 상태를 `dry_run`으로 바꿀 수 있다.
  - production 검증 때는 실제 예약 job을 훼손하지 않도록 직접 발송 API dry-run과 readiness-check만 사용한다.

## Production Configuration Verified

Render 환경 기준:

- `ALIMTALK_DRY_RUN=false`
- `ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=true`
- `ALIMTALK_ALLOW_REAL_STUDENT_NUMBERS=true`
- `ALIMTALK_ALLOW_LIVE_TEST_SEND=true`
- `SOLAPI_API_KEY` exists
- `SOLAPI_API_SECRET` exists
- `SOLAPI_PFID` exists
- `SOLAPI_ATTENDANCE_TEMPLATE_ID` exists
- `SOLAPI_DAILY_REPORT_TEMPLATE_ID` exists
- `SOLAPI_STUDENT_COMMENT_TEMPLATE_ID` exists
- `SOLAPI_DISABLE_SMS=true`
- `NOTIFICATION_DISPATCH_TOKEN` exists
- `SOLAPI_FROM` does not exist in Render, but current Solapi ATA sends have been working without it.

Production API status:

- `/api/integrations/status`
  - `notifications.dryRun=false`
  - `notifications.allowRealParentRecipients=true`
  - `notifications.allowRealStudentRecipients=true`
  - `notifications.solapiConfigured=true`
  - `notifications.templatesConfigured.attendance=true`
  - `notifications.templatesConfigured.dailyReport=true`
  - `notifications.templatesConfigured.studentComment=true`
  - `notifications.missing=[]`

Solapi SDK:

- Render env 값을 메모리에서만 사용해 `getBalance()` 조회 성공.
- 로컬 `.env`의 `SOLAPI_API_SECRET`은 Render 운영값과 다르다. 로컬 값으로 Solapi 메시지 조회 시 `SignatureDoesNotMatch`가 난다.
- 비밀값은 출력/커밋하지 않는다.

## Dry-Run Verification Completed

Production API에 `forceDryRun:true`로 직접 호출했다. 실제 발송은 하지 않았다.

통과한 케이스:

- `attendance`
  - route: `/api/notifications/attendance-alimtalk`
  - `dryRun=true`
  - 지각 상세: `지각 (사유: 학교 청소 · 등원 19:10)` 형식 확인.
- `parent_comment`
  - route: `/api/notifications/comment-alimtalk`
  - `dryRun=true`
  - 구조화 본문 유지 확인.
- `student_comment`
  - route: `/api/notifications/comment-alimtalk`
  - `dryRun=true`
  - 구조화 본문 + `💬 코멘트` 유지 확인.
- `notice_student`
  - route: `/api/notifications/comment-alimtalk`
  - `dryRun=true`
  - 공지 본문만 유지 확인.
- `daily_report`
  - route: `/api/notifications/daily-report-alimtalk`
  - `dryRun=true`
  - 구조화 리포트 본문 확인.
- `schedule_reminder`
  - route: `/api/notifications/student-schedule-reminder`
  - `dryRun=true`
  - 중요 일정 안내 본문 확인.

Dry-run 해석:

- `forceDryRun:true`는 Solapi 실제 send를 호출하지 않고, 발송 직전 `variables`, 수신자 해석, 템플릿 env 이름을 반환한다.
- 현재 live 설정상 dry-run을 제거하면 등록된 실제 번호로 발송될 상태다.

## Confirmed Incidents And Resolutions

### 김재연 출결 알림톡 중복

- Solapi 실제 발송내역:
  - 2026-06-26 15:20~15:35 KST: 김재연 출결 알림톡 없음.
  - 2026-06-26 15:38:58 KST: 동일 학부모 번호로 같은 출결 알림톡 2건 발송 완료.
- 원인:
  - 출결 즉시발송 API에 중복 억제가 없었다.
- 해결:
  - 서버 `sendAttendanceAlimtalkOnce`.
  - 프론트 `attendanceNotificationLocksRef`.

### 2026-06-25 22:30 이후 학생 알림톡 코멘트 단문 발송

- Solapi 실제 발송:
  - 총 30건.
  - 학생용 15건.
  - 학부모용 15건.
  - 학생별 중복 발송 없음.
- 문제:
  - 학생용 15건 중 8건은 실제 발송에서 구조화 본문 없이 코멘트 문장 중심으로 나감.
  - `notification_jobs.preview_body`에는 구조화 본문이 있었으므로 미리보기와 실제 발송이 어긋났다.
- 원인:
  - 서버가 `commentBodyOverride`를 전체 본문 대체값으로 해석했다.
- 해결:
  - `resolveLessonCommentBody`.
  - 수업일지 context가 있으면 override를 `💬 코멘트`로만 사용.

## Current Attention Item

Production readiness-check 결과, 현재 기준 앞으로 24시간 내 예약 중 다음 2건이 누락으로 잡힌다.

- 학생: 박지현
- 수업: `월수금 7-10반`
- 예정: 2026-06-26 22:30 KST
- jobs:
  - `lesson_comment_lesson_2026-06-26_월수금-7-10반_1781764954300_student_mwf710_004_parent`
  - `lesson_comment_lesson_2026-06-26_월수금-7-10반_1781764954300_student_mwf710_004_student`
- missing:
  - `강의 내용`

상태:

- 발송 실패 상태는 아니다.
- 현재 로직상 발송은 가능하지만 `강의 내용` 줄이 빠진 채 나간다.
- 다음 세션에서 사용자에게 확인하거나 수업일지에서 박지현 행의 강의 내용을 채우는 것이 좋다.

## Commands Already Run

- `node --check api/routes/notifications.js`
- `node --check api/server.js`
- `node --check scripts/scenario-tests-production.cjs`
- `npm run test:production`
  - latest count after readiness check change: 189 checks, all passed.
- `npm run build`
  - passed.
  - Vite chunk size warning remains existing/non-blocking.
- Render deploy checks:
  - `314a907` live 확인.
  - `475bfb7` live 확인.
  - `18c4d17` live 확인.

## Next Recommended Steps

1. 운영 수업일지에서 박지현 `강의 내용` 누락을 보정한다.
2. 오늘 22:30 이후 `notification_jobs`와 Solapi 실제 발송내역을 한 번 더 대조한다.
3. 학생별 알림톡 제외 기능 운영 검수:
   - 학부모 제외
   - 학생 제외
   - 예약 확인 모달 반영
   - 기본예약/30분 지연 재생성 시 제외 유지
   - 제외 해제 후 예약 재생성
4. 알림관리 개별 발송 운영 검수:
   - 선택/전체/학부모/학생 수신 범위
   - 공지/교재/보강 템플릿
   - 즉시/예약 발송 기록이 `notification_jobs`에 저장되는지 확인
5. Render 유료 cron 등록은 결제 정보가 있어야 가능하다. 현재는 web internal loop + GitHub Actions fallback 구조다.

## Do Not Forget

- SQL edit 자동화는 하지 않는다. 사용자가 직접 SQL Editor에서 처리한다.
- 비밀값은 출력하거나 커밋하지 않는다.
- 로컬 `.env`의 Solapi secret은 운영값과 다르므로 Solapi 조회가 필요하면 Render 환경값을 메모리에서만 사용한다.
- 운영 dispatch dry-run은 실제 예약 상태를 바꿀 수 있으므로 조심한다.
- 알림톡은 MVP 중 MVP로 취급한다. 화면 개선보다 발송 정확성, 중복 방지, 실제 발송 로그 대조를 우선한다.
