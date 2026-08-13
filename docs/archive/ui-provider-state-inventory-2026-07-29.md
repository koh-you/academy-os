# UI 알림 provider 상태 inventory — 2026-07-29

## 상태 원천 정의

- `notification_jobs.status`는 Academy OS가 해석하고 저장한 알림 작업 상태다.
- `provider`와 `providerMessageId`는 외부 provider의 종류와 예약·발송 그룹 참조를 식별한다.
- `scheduled`는 Academy OS에 예약 작업이 있고 아직 결과를 기다리는 상태다. Solapi 그룹 참조가 함께 있어야 실제 Solapi 예약 연결을 표시할 수 있다.
- `sent`는 provider 결과 대조가 완료돼 Academy OS 작업 상태가 발송 완료로 갱신된 경우다.
- `send_unconfirmed`는 발송 결과를 아직 확정할 수 없는 상태이며 성공으로 표시하지 않는다.
- `academy-os-reserving`과 `academy-os-dispatching`은 예약·발송 처리 중 사용하는 내부 claim이다. 외부 provider 성공이 아니다.

## 화면별 대조

| 화면 | 현재 표시 | 판정 | 후속 |
| --- | --- | --- | --- |
| 알림관리 발송 기록 | Academy OS 상태 pill과 `Solapi {group}` 참조를 별도 줄로 표시 | 원천 분리됨 | 문구 위계만 UI-6D-3에서 정리 |
| 수업일지 예약 상태 | Academy OS 상태 문구와 `Solapi {group}` 참조를 별도 줄로 표시 | 원천 보존됨 | label 위계를 UI-6D-3에서 정리 |
| 수업일지 예약 audit | `OS 취소/실패`와 `Solapi 그룹`을 별도 영역으로 표시 | 원천 분리됨 | 유지 |
| 보충 알림 제어 모달 | `Solapi 상태` label 아래 `notification_jobs.status`를 표시 | 잘못된 label | UI-6D-2에서 `Academy OS 상태`와 `Solapi 예약 그룹`으로 분리 |
| 보충 목록·당일 11시 상태 | 유효한 Academy OS 작업 상태를 요약 | 허용 | provider 성공으로 부르지 않는 현재 문구 유지 |
| 수업 코멘트 발송 상태 | Academy OS 작업 상태와 수업기록 fallback을 요약 | 허용 | provider 상세는 예약 확인 영역에서 유지 |

## 잘못 합치면 안 되는 경우

- Academy OS row 저장 성공을 Solapi 예약·발송 성공으로 표시하지 않는다.
- Solapi group ID가 없으면 `Solapi 예약됨` 또는 `Solapi 발송 완료`라고 표시하지 않는다.
- `send_unconfirmed`는 `확인 필요`로 남기고 성공 tone을 사용하지 않는다.
- provider 조회 일부 실패를 전체 성공이나 전체 실패로 뭉개지 않는다.
- 예약 취소 결과는 Solapi 그룹 취소 결과와 Academy OS row의 `canceled` 상태를 함께 보존한다.

## 다음 순서

1. UI-6D-2: 보충 알림 제어 모달의 잘못된 label을 원천별로 분리한다.
2. UI-6D-3: 알림관리와 수업일지의 상태·provider 참조 label 위계를 통일한다.
3. 실제 notification job 조회·예약·취소·발송과 Solapi API는 실행하지 않는다.
