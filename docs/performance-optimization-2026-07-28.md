# Academy OS 저장·새로고침·출결·외부연동 최적화

## 사용자 불편을 시스템 문제로 번역한 결과

| 불편 | 확인한 병목 | 이번 구현 |
| --- | --- | --- |
| Slack 09:00 알림이 11시 전후 도착 | Incoming Webhook은 cron이 실행된 시점에 즉시 발송하므로 늦은 cron을 보정하지 못함 | Slack Bot `chat.scheduleMessage` 예약 API와 보호된 OS 예약 endpoint 추가 |
| 저장 버튼이 오래 걸림 | 수업일지 학생별 POST와 저장 뒤 전체 테이블 재조회 | 수업기록 한 번의 bulk POST, 변경 ID만 Supabase 재조회·대조 |
| 새로고침이 오래 걸림 | 알림 1,000건과 중복 app_state payload, 변경 없는 app_state 전체 재저장 | 활성 알림 300건 범위 조회, 기록 화면에서만 이력 로드, app_state 중복 row 생략 및 변경 key만 저장 |
| 출결이 바로 보이지 않음 | 최초 로드 이후 다른 화면/기기의 DB 변경을 받지 않음 | 교사 수업 화면·출결 전용 화면에서 선택 날짜만 7초 증분 확인, focus 즉시 확인 |
| Solapi 예약 업데이트가 느림 | 학생·대상별 브라우저 요청, 매 요청마다 같은 수업 맥락 재조회, 예약 직후 provider 메시지 재조회 | 반 전체 한 번의 bulk 요청, 공통 맥락 한 번 생성, 동시성 4, provider 결과는 기존 결과대조 단계에서 확인 |

## 출결 동기화 계약

이번 단계는 브라우저가 Supabase 서비스 키를 직접 보유하지 않는 `API 경유 증분 동기화`다.

1. 교사 수업 화면 또는 출결 전용 화면이 열린 동안만 실행한다.
2. 현재 선택 날짜의 `lesson_student_records`만 조회한다.
3. 화면 focus 시 즉시, 이후 7초 간격으로 확인한다.
4. 서버 출결 필드만 합친다.
5. 로컬 상태가 `dirty`, `saving`, `failed`인 수업일지의 다른 입력은 서버 응답으로 덮어쓰지 않는다.
6. 화면에는 최신 확인 시각 또는 연결 지연 상태를 표시한다.

진짜 Supabase Realtime은 `lesson_student_records`의 Postgres Changes를 구독하면 된다. 다만 Academy OS는 교사 bearer 서명과 RLS 소유권 gate가 아직 남아 있어, 브라우저에 publishable key를 넣고 구독을 열기 전에 인증·권한을 먼저 확정해야 한다. 그 gate 뒤에는 날짜/lesson 범위로 좁힌 채널을 열고, UPDATE payload를 같은 병합 함수에 전달하며, channel 오류 시 현재 7초 동기화로 자동 fallback하는 순서가 안전하다.

## 저장 신뢰성 계약

- 수업기록은 bulk upsert 전에 모든 학생이 해당 수업 명단에 있는지 검사한다.
- 출결 및 숙제 후속 상태 보존 규칙은 기존 단건 저장과 동일하게 적용한다.
- 저장 후 변경한 lesson/student 행을 Supabase에서 다시 읽고 필드 일치 여부를 검사한 뒤에만 저장 완료로 표시한다.
- 숙제와 보충 task도 변경한 ID만 다시 읽는다.
- 실패하면 화면 draft와 실패 상태를 유지한다.

## Slack 예약 활성화 전 사람 gate

코드는 준비됐지만 실제 Slack 예약이나 발송은 실행하지 않았다. 아래는 외부 side effect가 생기는 운영 gate다.

1. Slack App Bot Scope `chat:write`와 대상 채널 초대를 확인한다.
2. Render API에 `SLACK_BOT_TOKEN`, `SLACK_CHANNEL_ID`, `NOTIFICATION_DISPATCH_TOKEN`을 설정한다.
3. `/api/integrations/status`에서 `slackSchedulingConfigured=true`를 확인한다.
4. 미래 시각 dry-run, 실제 예약 한 건, Slack 예약 목록과 `notification_jobs` 예약 ID를 대조한다.
5. 통과 후에만 기존 09:00 즉시 Webhook cron을 전날 `npm run slack:reserve-daily-schedule`로 교체한다.
6. 기존 즉시 cron과 예약 cron을 동시에 활성화하지 않는다.

## 외부 side effect 경계

이번 코드 검증에서는 Supabase 운영 데이터 쓰기, Slack 실제 예약/발송, Solapi 실제 예약/발송, Tally, Storage, AI 호출을 실행하지 않는다. Solapi 특강 템플릿 연결·시험 발송도 기존 사람 gate 통과 전에는 실행하지 않는다.
