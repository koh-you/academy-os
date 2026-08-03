# P2 modal shell·footer·상태 follow-up inventory — 2026-08-03

## 목적과 기준선

UI-5에서 공통 dialog 의미와 일부 footer를 도입한 뒤 추가된 화면을 최신 main에서 다시 대조한다. 이 문서는 P2 후속 작업의 현재 기준선이며, 과거 완료 기록은 `docs/ui-modal-inventory-2026-07-29.md`를 참고한다.

- dialog 표면: 41개
- 공통 `Modal` 직접 사용: 34개
- App → `TeacherViewOutlet`의 공통 `Modal` 주입 사용: 6개
- 공통 shell을 쓰지 않는 직접 `role="dialog"`: 1개
- 공통 `ModalFooter`: 9개
- 기존 `modalActions` wrapper: 8개
- 공통 저장 상태 vocabulary: `idle`, `dirty`, `saving`, `verifying`, `saved`, `failed`

숫자는 구조를 파악하기 위한 기준선이다. 실제 변경에서는 callback identity, 저장 원천, 외부 side effect, 닫기/오류 복구 계약을 성공 조건으로 삼는다.

## 공통 shell 예외

| 화면 | 현재 구조 | 원천·side effect | 안전한 후속 범위 |
| --- | --- | --- | --- |
| `SupplementNotificationControlModal` | 자체 backdrop/header/dialog/action wrapper | 읽기 모델은 Academy OS `notification_jobs`와 Solapi 참조를 대조하고, `onReserve`·`onCancelAll`은 실제 provider 예약·취소 callback | 공통 `Modal`/`ModalFooter`로 shell만 교체한다. `isBusy` 닫기 차단, 3개 카드, 개별 예약, 일괄 취소, safe-area·wide layout, callback identity를 그대로 둔다. provider 동작과 상태 전이는 바꾸지 않는다. |

학생 lifecycle/profile의 `ModalComponent` 6개는 예외가 아니다. App의 `Modal` identity가 `createTeacherViewAdapters`와 `TeacherViewOutlet`을 거쳐 주입되는 공통 shell 경로다.

## 기존 action wrapper 8개 분류

| 분류 | 화면 | 판단 |
| --- | --- | --- |
| 낮은 위험 footer 후보 | `ReportModal` | snapshot 저장은 전용 인증·CAS·재조회 뒤에만 완료하고 실제 알림은 없다. 첫 footer 공통화 후보다. |
| 독립 shell 후보 | `SupplementNotificationControlModal` | raw dialog 예외를 없애되 provider callback은 그대로 유지한다. 전용 fixture와 safe browser 뒤 별도 단위로 진행한다. |
| 다중 원천 확인 footer | 월 정규수업 열기, 보충 통과 확인, 보충 일정 변경 확인, 수업일지 보충 완료 확인 | 저장·재조회·알림 후속 단계와 닫기 의미가 다르다. 각 controller 결과 계약과 함께 한 화면씩 처리한다. |
| 모달 내부 작업 바 | `SupplementTaskActionBar`, 보충 상세의 split action bar | 본문 문맥에서 여러 독립 저장·예약 행동을 제공한다. 단순 footer로 이동하지 않는다. |

`modalActions`라는 class 이름만 보고 공통 footer로 바꾸지 않는다. 최종 행동 영역인지, 본문 안 작업 바인지 먼저 구분한다.

## 상태 모델 분류

- `InlineSaveStatus`의 여섯 상태가 공통 표시 vocabulary다.
- 서버 재조회 전 `saved`를 표시해서는 안 된다. 저장 요청과 재조회 사이를 구분할 필요가 있는 화면은 `verifying`을 사용한다.
- Solapi 제어창의 `feedback.tone`(`saving`, `success`, `failed`)은 provider orchestration의 화면 결과다. 이를 DB 저장 상태와 합치지 않고, shell 공통화 뒤 별도 상태 모델 단위에서 `success → saved` 표시 매핑만 검토한다.
- 보충 일정처럼 source 저장 성공과 provider 실패가 동시에 가능한 화면은 단일 aggregate `failed`로 축약하지 않는다. `sourceSaved`, `notificationFailed`, `retryScope=provider` 계약을 유지한다.
- local draft, API/DB 원천, Supabase 재조회, provider side effect를 각각 다른 owner로 유지한다.

## 연쇄 진행 순서

1. P2-0: 이 inventory와 자동 경계 검사를 고정한다. 코드 동작은 바꾸지 않는다.
2. P2-1: `ReportModal`의 낮은 위험 action wrapper만 `ModalFooter`로 옮기고 snapshot 저장·실패·재시도 동작을 재검증한다.
3. P2-2: `SupplementNotificationControlModal`의 bespoke shell을 공통 `Modal`/`ModalFooter`로 교체한다. 실제 예약·취소는 실행하지 않고 callback key/identity, busy close guard, safe browser 표시만 검증한다.
4. P2-3: 보충 통과/일정 변경/완료 확인과 월 정규수업 열기를 한 화면씩 검토한다. 저장·재조회·provider 의미가 함께 바뀌는 경우 shell 단위에서 제외한다.
5. P2-4: modal save state를 여섯 공통 표시 상태와 대조하되 source/provider 복합 결과는 별도 표시를 유지한다.

AI fixture와 안전 가상 데이터로 확인 가능한 shell 변경에는 사람 gate가 없다. 실제 Solapi 예약·취소, 운영 데이터 변경, 운영 SQL, 유료 호출은 실행하지 않는다.

## 진행 상태

- P2-1 완료: `ReportModal`의 버튼 두 개를 DOM 순서·문구·disabled·callback 그대로 공통 `ModalFooter`로 옮겼다.
- P2-2 완료: `SupplementNotificationControlModal`을 공통 `Modal`/`ModalFooter`로 옮기고 busy 닫기 차단·접근성 이름·wide/safe-area layout을 보존했다. 3개 카드와 개별 예약·일괄 취소 callback은 그대로다.
- P2-3a 완료: `SupplementPassConfirmModal`의 취소·완료 처리 wrapper만 공통 `ModalFooter`로 옮겼다. 완료 callback의 보충 원천 저장 후 학생 11시 예약 취소 orchestration과 busy/button 계약은 변경하지 않았다.
- 현재 수치: 공통 shell 41/41, bespoke dialog 0개, 공통 `ModalFooter` 12개, 기존 `modalActions` wrapper 5개.
- 다음 단위: 보충 일정 변경 확인 footer를 검토한다. 일정 원천 저장과 알림 예약 결과 분리 의미는 shell 작업과 함께 바꾸지 않는다.
