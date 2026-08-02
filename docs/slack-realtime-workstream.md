# Slack 예약 알림 및 Supabase Realtime 작업 기준

업데이트: 2026-08-02

이 문서는 Slack 예약 알림을 먼저 닫고 Supabase Realtime을 점진 전환하는 전용 작업의 현재 기준이다. 실제 Slack 발송·예약·취소, 운영 SQL 적용, 유료 cron 생성은 사람 승인 전 수행하지 않는다.

## Slack 실행 경로와 현재 상태

| 경로 | 책임 | 현재 코드·검증 상태 | 운영 미설정 또는 위험 |
| --- | --- | --- | --- |
| Incoming Webhook | 호출 시점에 오늘 일정 요약을 즉시 발송 | `sendSlackDailyScheduleSummary`, `POST /api/notifications/slack-today-schedule` 구현 | cron이 늦게 시작하면 도착도 늦음 |
| Slack Bot API | `chat.scheduleMessage`로 Slack 서버에 미래 메시지를 예약하고 강제 재예약 때 기존 예약 취소 | 예약·취소 구현, provider fixture가 dry-run 무호출·요청 payload·오류 전파를 검증 | Bot 설치/OAuth `chat:write`, 채널 초대, `SLACK_BOT_TOKEN`, `SLACK_CHANNEL_ID` 미확인 |
| GitHub Actions | 현재 KST 09:00에 즉시 Webhook endpoint를 호출하는 백업 | `.github/workflows/slack-daily-schedule.yml` 구현 | 예약 경로가 아니며 GitHub schedule 지연 가능 |
| Render 내부 알림 dispatcher | 5분마다 저장된 일반 `notification_jobs`를 dispatch | `koh-you-math-academy-os-notification-dispatch` 설계 존재 | Slack 일일 요약 예약 실행기가 아님 |
| Render Slack cron | 현재 KST 09:00에 즉시 Webhook 스크립트 실행 | `koh-you-math-academy-os-slack-daily-schedule` 설계 존재 | 과거 생성 시 결제정보/HTTP 402; 운영 생성 여부 미확인 |
| 전날 예약 스크립트 | 보호된 reserve endpoint를 호출해 다음 날 KST 09:00 메시지 예약 | `npm run slack:reserve-daily-schedule`, dispatch token 계약 구현 | 어떤 scheduler도 아직 이 명령으로 전환되지 않음 |

환경변수 계약은 `.env.example`과 `docs/slack-integration-guide.md`를 따른다. 비밀값은 문서·로그·Git에 남기지 않는다. 운영 상태의 마지막 확인값은 `slackSchedulingConfigured=false`이며, 새 읽기 전용 확인 전까지 활성화된 것으로 간주하지 않는다.

## 활성화 순서와 사람 Gate

1. fixture와 API dry-run 검증을 끝낸다. 운영 endpoint 호출이나 DB 쓰기 없이 로컬 가상 데이터만 사용한다.
2. 사람이 Slack App에 `chat:write`를 승인하고 대상 채널에 Bot을 초대한다.
3. 사람이 Render API에 `SLACK_BOT_TOKEN`, `SLACK_CHANNEL_ID`, `NOTIFICATION_DISPATCH_TOKEN`을 입력한다.
4. 읽기 전용 상태 endpoint에서 `slackSchedulingConfigured=true`를 확인한다.
5. 별도 승인 후 미래 시각 실제 예약 한 건과 Slack 예약 목록·`notification_jobs`를 대조한다.
6. 통과 후 즉시 Webhook scheduler 하나만 전날 Bot 예약 scheduler로 교체한다. 즉시 경로와 예약 경로를 동시에 활성화하지 않는다.

## Supabase Realtime 후속 기준

Slack 안전 단위가 끝난 뒤 `lesson_student_records`의 필요한 event/table/filter만 구독한다. 교사 bearer 인증과 학원/교사 소유권 RLS를 먼저 확정하고, 운영 SQL은 파일로만 준비한다. 중복 이벤트, 재연결, 탭 focus 복귀, 오프라인과 channel 오류를 테스트하며 검증 전까지 기존 선택 날짜 7초 polling을 fallback으로 유지한다.
