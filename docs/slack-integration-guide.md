# Slack 연동 가이드

Academy OS의 강사용 운영 알림은 두 경로를 지원한다.

- `Incoming Webhook`: API가 호출된 시점에 즉시 발송한다. cron 실행이 늦으면 Slack 도착도 늦어진다.
- `Slack Bot API`: OS가 `chat.scheduleMessage`로 Slack 서버에 먼저 예약한다. 예약이 접수된 뒤에는 Render/GitHub cron이 정확한 발송 시각에 다시 실행될 필요가 없다.

## 현재 앱에서 쓰는 값

Render API 서비스 환경변수:

```text
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
SLACK_BOT_TOKEN=xoxb-...
SLACK_CHANNEL_ID=C...
SLACK_DRY_RUN=false
NOTIFICATION_DISPATCH_TOKEN=긴_임의_비밀값
```

- `SLACK_WEBHOOK_URL`: Slack 채널별 webhook URL이다. 비밀값이므로 Git에 커밋하지 않는다.
- `SLACK_BOT_TOKEN`: `chat:write` 권한을 가진 Slack App Bot Token이다. 비밀값이므로 Git에 커밋하지 않는다.
- `SLACK_CHANNEL_ID`: 예약 메시지를 받을 채널 ID다. Bot을 해당 채널에 초대한다.
- `SLACK_DRY_RUN=false`: 실제 Slack 발송을 켠다. 이 값이 없으면 코드 기본값은 dry-run이다.
- `NOTIFICATION_DISPATCH_TOKEN`: 예약 API를 외부 호출로부터 보호한다. API 서비스와 예약 cron에 같은 값을 넣는다.

상태 확인:

```powershell
Invoke-RestMethod `
  -Uri "https://koh-you-math-academy-os-api.onrender.com/api/integrations/status" `
  -Method Get
```

기대값:

```json
{
  "result": {
    "notifications": {
      "slackConfigured": true,
      "slackSchedulingConfigured": true
    }
  }
}
```

## Slack에서 Webhook URL 만들기

1. Slack API의 `Your Apps`에서 새 앱을 만든다.
2. 앱 설정에서 `Incoming Webhooks`를 켠다.
3. `Add New Webhook to Workspace`를 누른다.
4. 메시지를 받을 채널을 선택하고 승인한다.
5. `Webhook URLs for Your Workspace`에 생성된 URL을 복사한다.

참고: Slack 공식 문서는 Incoming Webhook URL을 비밀값으로 취급하라고 안내한다. 공개 저장소, 문서, 채팅에 그대로 붙이지 않는다.

## Render에 환경변수 넣기

1. Render 대시보드에서 `koh-you-math-academy-os-api` 서비스를 연다.
2. `Environment` 또는 `Environment Variables` 메뉴로 이동한다.
3. 아래 값을 추가한다.

```text
SLACK_WEBHOOK_URL=복사한 Slack webhook URL
SLACK_DRY_RUN=false
```

4. 저장 후 API 서비스를 재시작하거나 재배포한다.
5. `/api/integrations/status`에서 `slackConfigured: true`를 확인한다.

## 수동 발송 테스트

중복 방지 때문에 같은 날짜는 한 번 보내면 기본적으로 다시 보내지 않는다. 테스트할 때만 `force: true`를 쓴다.

```powershell
Invoke-RestMethod `
  -Uri "https://koh-you-math-academy-os-api.onrender.com/api/notifications/slack-today-schedule" `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"notifyEmpty":true,"force":true}'
```

정상이라면 선택한 Slack 채널에 오늘 운영 일정 요약이 온다.

## Slack 서버 예약

Slack App의 OAuth & Permissions에서 Bot Token Scope `chat:write`를 추가하고 앱을 Workspace에 설치한다. Bot을 대상 채널에 초대한 뒤 Render API 서비스에 `SLACK_BOT_TOKEN`, `SLACK_CHANNEL_ID`, `NOTIFICATION_DISPATCH_TOKEN`을 저장한다.

Academy OS 예약 API:

```text
POST /api/notifications/slack-today-schedule/reserve
X-Dispatch-Token: NOTIFICATION_DISPATCH_TOKEN
```

요청 예:

```json
{
  "date": "2026-07-29",
  "scheduledAt": "2026-07-29T00:00:00.000Z",
  "notifyEmpty": true
}
```

`scheduledAt`은 UTC ISO 시각이며 위 값은 KST 09:00이다. 성공하면 `notification_jobs`의 `slack_daily_summary_YYYY-MM-DD` 행에 `provider=slack_bot`, `status=scheduled`, Slack 예약 ID가 저장된다. 같은 날짜를 다시 예약하면 중복을 건너뛴다. `force: true`는 기존 Slack 예약을 취소한 뒤 다시 예약할 때만 사용한다.

저장소의 `npm run slack:reserve-daily-schedule`은 기본적으로 다음 날 KST 09:00을 예약한다. 이 명령은 `ACADEMY_API_URL`과 `NOTIFICATION_DISPATCH_TOKEN`이 필요하다. 예를 들어 KST 21:00에 매일 한 번 실행하면 다음 날 메시지가 Slack 서버에 약 12시간 먼저 등록된다.

## 기존 즉시 자동 발송

운영 자동 발송 시간은 KST 09:00이다.

```text
KST 09:00 = UTC 00:00
cron: 0 0 * * *
```

연결 위치:

- Render cron: `koh-you-math-academy-os-slack-daily-schedule`
- GitHub Actions 백업: `.github/workflows/slack-daily-schedule.yml`

둘이 동시에 호출될 수 있으므로 API는 `notification_jobs`에 `slack_daily_summary_YYYY-MM-DD` 기록을 남겨 같은 날짜 중복 발송을 건너뛴다.

현재 Render cron과 GitHub Actions는 기존 Webhook 즉시발송 경로다. Bot Token과 채널 ID를 설정하고 예약 dry-run/실제 예약을 사람이 확인하기 전에는 이 경로를 자동 교체하지 않는다. 검수 후 기존 09:00 cron 하나를 전날 예약 명령으로 교체하고, GitHub 백업도 같은 예약 API를 호출하도록 바꾼다. 두 방식을 동시에 켜지 않는다.

## 문제 해결

- `slackConfigured: false`: `SLACK_WEBHOOK_URL`이 Render API 서비스에 없다.
- `slackSchedulingConfigured: false`: `SLACK_BOT_TOKEN` 또는 `SLACK_CHANNEL_ID`가 없다.
- 호출 결과가 dry-run: `SLACK_DRY_RUN=false`가 없거나 API 서비스가 재시작되지 않았다.
- Slack 채널에 메시지가 없음: Webhook URL이 다른 채널용이거나, Slack 앱이 채널에 승인되지 않았거나, webhook이 비활성화됐다.
- 같은 날짜 재테스트가 안 됨: `force: true`를 넣어서 수동 테스트한다.
