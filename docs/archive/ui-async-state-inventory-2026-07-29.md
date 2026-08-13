# UI Async Operation State Inventory — 2026-07-29

## 범위

- 읽기 전용 source loading/error는 UI-4의 `EmptyState` 계약을 유지한다.
- 저장 상태는 UI-6A의 `InlineSaveStatus`, 자동저장 경고는 UI-6B의 `AutosaveRiskNotice` 계약을 유지한다.
- 이 문서는 그 밖의 쓰기·외부 동작·다중 원천 처리 상태를 전체·영역·행 단위로 분류한다.
- API 호출 순서, 재시도 callback, 운영 데이터, Supabase, notification_jobs/Solapi를 변경하거나 실행하지 않는다.

## 상태 범위별 inventory

| 범위 | 대표 흐름 | 현재 상태 모델 | 재시도/다음 행동 | 판정 |
| --- | --- | --- | --- | --- |
| 전체 source | 시험분석 프롬프트 초기 조회, 기출문제 iframe | loading/error `EmptyState` | 실제 callback이 있을 때만 action | UI-4 완료 계약 유지 |
| 영역 source | 알림 기록 조회 | `loading/ready/failed` + `onRefresh` | 실패 시 `다시 시도` | 현재 범위가 명확함 |
| 영역 action | 알림 예약 취소/기록 삭제 | `notificationJobAction`의 `saving/saved/failed` | 같은 행 action을 다시 실행 | 공통 operation notice 후보 |
| 영역 provider | Solapi 결과 대조 | `loading/saved/partial/failed` | 결과 확인 callback 재실행 | 부분 실패를 별도 tone으로 유지 |
| 영역 action | 공지 AI 수정·예약·즉시발송 | boolean + `dispatchMessage` 문자열 | 버튼 재실행 | 상태와 message가 분리되지 않아 후속 필요 |
| 모달 다중 원천 | 특강 회차 계획 → 미래 수업일지 | `saving/saved/failed` + `1/2`, `2/2` message | 저장본 기준 재시도 | 부분 성공을 실패와 구분할 표현 필요 |
| 영역 다중 원천 | 수업일지 숙제·보충·수업기록 | 반환 `{ok,message}`, message 안의 `부분 저장` | 실패 draft 유지 후 명시 저장 재실행 | 완료 원천과 실패 원천을 보존 |
| 영역/행 | 학생 신규/Tally, 학생 프로필, 시험정보 | 대상별 `saving/saved/failed` | 대상 행의 저장 callback | `InlineSaveStatus` 유지 |
| 행 외부 상태 | notification job 각 row | OS job 상태 + provider 참조/오류 | 취소·결과 확인은 별도 action | UI-6D로 분리 |
| 배경 동기화 | 출결 증분 동기화 | `idle/syncing/synced/failed` | 다음 polling/focus 동기화 | 사용자 입력 저장과 합치지 않음 |

## 공통 규칙

1. 전체 화면 오류는 하위 영역까지 사용할 수 없을 때만 사용한다.
2. 한 영역의 실패는 그 영역 안에 표시하고 다른 화면 행동을 막지 않는다.
3. 행 실패는 대상 ID 옆에 표시하고 전체 목록 실패로 승격하지 않는다.
4. `partial`은 성공한 원천과 실패한 원천을 모두 적으며 전체 실패나 완료로 바꾸지 않는다.
5. 재시도 버튼은 실제 재시도 callback이 있을 때만 표시한다. 새로고침 안내를 callback처럼 보이게 만들지 않는다.
6. OS 저장과 외부 provider 결과는 한 상태로 합치지 않는다.

## 다음 순서

1. `UI-6C-2` 완료: `idle/loading/success/partial/error`, `role=status/alert`, action slot과 모바일 규칙을 가진 공통 `AsyncOperationStatus`를 추가했다.
2. `UI-6C-3` 완료: 알림 예약 취소/기록 삭제 상태와 Solapi 결과 대조 상태를 공통 component로 옮기고 callback을 보존했다.
3. 공지 발송 문자열 상태와 특강·수업일지 부분 성공은 원천별 상태 계약 변경이 필요한 후속 단위로 남긴다. 기존 상세 문구를 단순 UI 치환으로 잃지 않는다.
4. provider 행 상태는 UI-6D에서 OS 저장과 외부 결과를 분리한다.
