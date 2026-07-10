# Slack 연동 가이드

Academy OS의 강사용 운영 알림은 Slack Incoming Webhook을 사용한다.

## 현재 앱에서 쓰는 값

Render API 서비스 환경변수:

```text
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
SLACK_DRY_RUN=false
```

- `SLACK_WEBHOOK_URL`: Slack 채널별 webhook URL이다. 비밀값이므로 Git에 커밋하지 않는다.
- `SLACK_DRY_RUN=false`: 실제 Slack 발송을 켠다. 이 값이 없으면 코드 기본값은 dry-run이다.

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
      "slackConfigured": true
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

## 자동 발송

운영 자동 발송 시간은 KST 09:00이다.

```text
KST 09:00 = UTC 00:00
cron: 0 0 * * *
```

연결 위치:

- Render cron: `koh-you-math-academy-os-slack-daily-schedule`
- GitHub Actions 백업: `.github/workflows/slack-daily-schedule.yml`

둘이 동시에 호출될 수 있으므로 API는 `notification_jobs`에 `slack_daily_summary_YYYY-MM-DD` 기록을 남겨 같은 날짜 중복 발송을 건너뛴다.

## 문제 해결

- `slackConfigured: false`: `SLACK_WEBHOOK_URL`이 Render API 서비스에 없다.
- 호출 결과가 dry-run: `SLACK_DRY_RUN=false`가 없거나 API 서비스가 재시작되지 않았다.
- Slack 채널에 메시지가 없음: Webhook URL이 다른 채널용이거나, Slack 앱이 채널에 승인되지 않았거나, webhook이 비활성화됐다.
- 같은 날짜 재테스트가 안 됨: `force: true`를 넣어서 수동 테스트한다.
