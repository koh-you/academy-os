# Supplement Center / Modals Refactoring Inventory — 2026-07-21

## 범위와 원칙

- 11번 보충 알림 builder/API/orchestration 분리 뒤 12번 `supplement center/modals`를 시작한다.
- `makeup_tasks`, 연결 `lessons`, `lesson_student_records`, `notification_jobs`와 Solapi는 기존 원천·순서를 유지한다.
- 화면 표시 또는 순수 plan부터 분리하고, 저장·출결·예약·취소 callback은 App이 계속 소유해 새 사람 gate 없이 이동 가능한 단위부터 진행한다.

## 화면·원천·side effect inventory

| 의미 단위 | 현재 위치 | 읽는 원천 | 쓰기/외부 side effect | 첫 분리 판단 |
| --- | --- | --- | --- | --- |
| `SupplementCenter` | `App.jsx` | students, homeworks, records, lessons, makeupTasks, notificationJobs | 상위 save/schedule/pass/undo/open callback 호출 | 후보 파생과 행 action이 섞여 있어 후순위 |
| `SupplementStudentModal` | `App.jsx` | 선택 task/student, notification templates/jobs, 연결 lesson/record | local draft, makeup task 저장, lesson 일정 반영, 완료 처리, 개별 Solapi 예약·취소 | 매우 높음. 내부 presentational 조각부터 분리 |
| `SupplementPassConfirmModal` | `App.jsx` | task/studentName/error/busy | confirm/cancel callback만 호출 | 낮음. 독립 표시 컴포넌트 후보 |
| `SupplementScheduleChangeConfirmModal` | `App.jsx` | task, 이전·다음 일정, local reason/detail | confirm/cancel callback만 호출 | 중간. local draft 초기화 계약 fixture 필요 |
| `SupplementHistoryModal` | `App.jsx` | 완료 task, students, query | undo callback 호출 | 읽기 중심. 검색/표시 helper와 함께 후보 |
| `SupplementMakeupLessonDetail` | `App.jsx` | 연결 lesson/task/student/attendance record | 출결 모달·보충 상세 열기 | 출결 gate와 닿아 후순위 |
| 일정 알림 plan | notification orchestration module | task flags, notificationJobs | 없음 | 11B-13 완료 |
| lesson/task persistence plan | `supplementSchedulePlan.js` | task, students, lessons, 주입된 표시 helper | 없음. 객체 생성과 중복 차단만 수행 | 12A 완료 |
| 실제 일정 저장 | `handleScheduleSupplementTask` | persistence plan | `/api/lessons`, `/api/makeup-tasks`, React state | 고위험. 저장 신뢰성 세션과 섞지 않음 |
| 완료 처리 | `handlePassSupplementTask` | task | makeup task 저장 후 학생 11시 취소 | 고위험. 기존 순서 유지 |

## 12A 구현 결과 — lesson/task persistence plan

- 학생·필수 ID·일시 검증, 같은 원천 또는 같은 학생/일시의 중복 lesson 차단, 연결 lesson과 저장할 makeup task 객체 생성을 `createSupplementSchedulePersistencePlan`으로 분리했다.
- 함수는 API, React state, notification/Solapi를 호출하지 않는다. 시각, 색상, 이름, 학생 ID 해석 helper는 App에서 주입한다.
- 기존 lesson 저장 후 task 저장, React 상태 반영 후 알림 적용 순서는 `handleScheduleSupplementTask`에 그대로 남아 있다.
- deterministic fixture는 신규/기존 lesson ID, 필수값 오류, 원천 중복, 학생·일시 중복, 취소·정규·자기 lesson 제외를 고정한다.

## 다음 안전 단위

1. 완료: `SupplementPassConfirmModal`을 callback-only 표시 컴포넌트로 별도 파일에 옮겼다.
2. 완료: `SupplementScheduleChangeConfirmModal`과 local reason/detail 초기화·confirm patch helper를 분리했다.
3. 완료: 읽기 중심 `SupplementHistoryModal`의 query 필터와 표시 경계를 분리했다.
4. 완료: 저장 pill·예약 control·학생 11시·즉시 안내 상태 helper를 분리했다.
5. 완료: `SupplementStudentModal` 내부의 알림 draft workspace 표시 조각을 분리했다.
6. 완료: 개별 Solapi 예약·취소 확인 모달의 표시 JSX를 callback-only 컴포넌트로 분리했다.
7. 완료: task 카드의 원 숙제·원 결석 수업 맥락과 확인용 숙제 읽기 카드를 분리했다.
8. 완료: 방법·날짜·시간 local draft controlled editor를 분리했다.
9. 완료: 변경 diff·저장 상태·저장/일정 gate 안내 표시를 분리했다.
10. 완료: task 카드 상단 메타를 읽기 전용 컴포넌트로 분리했다.
11. 완료: task 카드 하단 action bar를 callback-only 표시로 분리했다.
12. 완료: 분리된 일곱 조각을 감싸는 `SupplementTaskCard` 조립 경계를 만들었다.
13. 완료: 알림 draft config·선생님 최종본 판정·task→draft·dirty/diff·source version/fingerprint·persistable 변환을 순수 모델로 분리했다.
14. 완료: task 카드 원천 props·editor 값·메타·diff 기반 저장 상태·일정 gate 문구를 순수 view-model로 분리했다.
15. 완료: 알림 control config·예약 차단·과거 preview 차단·대상·예약/취소 가능 여부를 순수 view-model로 분리했다.
16. 완료: `SupplementStudentModal`의 바깥 Modal·feedback·빈 상태·task stack·overlay slot을 presentational shell로 분리했다.
17. 다음 12R: local draft state와 task/lesson 저장, notification/Solapi action 소유권 이동. 코드 이동 후 고태영 운영 검증 사람 gate가 필요하다.
18. 완료 12R-1: local draft field transition, 자동 문구 재생성, 저장 payload와 lesson resync 판정을 순수 모델로 분리했다.
19. 다음: draft collection sync/state 경계를 분리한 뒤 실제 action 소유권 이동으로 진행한다.
20. 완료 12R-2: draft collection의 dirty 보존·원천 reseed·동일 entry 재사용·삭제 정리를 순수 sync 함수로 분리했다.
21. 다음: local draft React state controller 또는 실제 저장 action 소유권을 분리한다.
22. 완료 12R-3: draft 전용 React state/effect와 get/update/mark/build controller를 분리했다.
23. 다음: 보충 내용 저장 action을 첫 실제 action 소유권 단위로 분리하고 고태영 저장·재조회 gate를 진행한다.
24. 진행 12R-4: 저장 action 코드·fixture·고태영 API 저장/재조회/삭제 AI 검증 완료. 사람 화면 gate 전 uncommitted 상태다.

## 12B 구현 결과 — 완료 확인 모달

- `SupplementPassConfirmModal`은 task/studentName/error/busy와 유형 라벨·confirm/cancel callback만 받는다.
- 숙제보충 항목 fallback과 완료 후 최근 내역 복귀 안내, busy 버튼 상태를 그대로 유지했다.
- 새 production check는 hook, API, notification/Solapi 참조가 이 표시 파일에 들어오지 못하게 고정한다.

## 12C 구현 결과 — 일정 변경 확인 모달

- 초기 `scheduleChangeDetail`은 기존 원 수업/숙제 seed를 우선하고 없으면 현재 보충 항목을 사용하며, `scheduleChangeReason`은 빈 값으로 시작한다.
- 두 confirm 버튼은 각각 기존 App callback을 호출하되 같은 현재 local draft의 두 필드만 patch로 전달한다.
- 모달 파일은 local `useState`만 소유하고 API, notification jobs, Solapi를 소유하지 않는다.

## 12D 구현 결과 — 최근 보충내역 모달

- task 입력 순서를 유지한 채 학생·학교·학년·유형·방법·원천·상태를 소문자 검색 haystack으로 필터한다.
- 완료/일정 확정/진행 중 label과 tone, 완료일→통과일→마지막 일정일→수정일→배정일→생성일 날짜 fallback을 순수 helper로 고정했다.
- 모달은 query callback과 완료 항목 복귀 callback만 호출하며 API·알림 side effect를 소유하지 않는다.

## 12E 구현 결과 — 저장·예약 상태 helper

- 저장 pill label과 예약 control label/tone을 순수 상태 mapping으로 옮겼다.
- 학생 11시 deterministic job의 scheduled/dry-run/sent/unconfirmed/failed/canceled/과거시각 상태와 즉시 안내 mapping을 fixture로 고정했다.
- App은 기존 공통 시각 판정과 일반 job status formatter만 작은 adapter로 주입하며 job 원천과 callback을 계속 소유한다.

## 12F 구현 결과 — 알림 draft workspace 표시

- 세 알림 문구 탭, active textarea, 자동 초안/선생님 최종본 안내, 현재 예약 상태와 control 진입 버튼을 `SupplementNotificationDraftWorkspace.jsx`로 옮겼다.
- App이 각 control의 현재 job을 선택하고 display를 계산해 config에 붙이며 local draft와 활성 필드 state도 계속 소유한다.
- 새 컴포넌트는 편집·탭 선택·control 열기 callback만 호출하고 API, hook, Supabase, `notification_jobs`, Solapi를 직접 참조하지 않는다.
- 저장하지 않은 변경이 하나라도 있으면 `수정본 저장 후 예약 확인`으로 막히고, 저장된 선생님 최종본이 자동 초안보다 우선하는 기존 계약을 production check로 유지한다.

## 12G 구현 결과 — 개별 알림 control 모달 표시

- 수신 대상, 예약시각, Solapi 상태, preview, 차단·피드백, 예약·취소 action UI를 `SupplementNotificationControlModal.jsx`로 옮겼다.
- App이 task/job/config와 마스킹 번호·시각·job status·preview label을 계산해 전달하고 실제 action callback과 busy/feedback state도 계속 소유한다.
- 취소·실패 이력은 현재 저장 문구로 다시 만들고, 현재 예약 문구와 저장 수정본이 다르면 취소 후 재예약 안내를 표시하는 기존 계약을 유지한다.
- 새 모달은 hook/API/`notification_jobs`/Supabase state를 직접 소유하지 않는다.

## 12H 구현 결과 — task 원천 맥락 읽기 카드

- 숙제보충 원 숙제의 배정일·마감·제목, 결석보강 원 수업의 날짜·교재·수업 내용·지난/다음 숙제를 `SupplementTaskSourceContext.jsx`로 옮겼다.
- 하단의 보강/등원 때 확인할 숙제 카드와 유형별 읽기 전용 안내도 같은 원천 표시 경계에 포함했다.
- App이 기존에 계산하던 값을 그대로 전달하고, 새 컴포넌트는 input·callback·hook·API·알림 side effect 없이 표시만 한다.

## 12I 구현 결과 — 방법·일정 controlled editor

- 보충 처리 방법 옵션과 배정일·시간 입력을 `SupplementTaskScheduleEditor.jsx`로 옮겼다.
- App의 현재 local draft를 controlled value로 전달하고 세 변경은 기존 `updateTaskDraft`로 되돌려 보내므로 draft 우선순위와 dirty 계산은 바뀌지 않는다.
- editor는 자체 state/API/저장/알림 side effect를 소유하지 않는다.

## 12J 구현 결과 — 변경 diff·저장 상태·gate 안내

- 저장 전 field diff와 세 원천 상태 pill을 `SupplementTaskSaveSummary`로 옮기고 상태 문구는 분리된 `supplementStatus.js` helper를 재사용한다.
- 저장과 수업일지 일정 반영의 실제 범위를 설명하는 안내는 같은 파일의 `SupplementTaskScheduleGateNote`로 옮겼다.
- App에서 기존 계산값을 전달하며 표시 순서를 `diff/status -> 알림 문구 편집 -> 일정 gate 안내`로 유지했다.
- 두 컴포넌트 모두 callback, hook, API, 알림 side effect를 소유하지 않는다.

## 12K 구현 결과 — task 카드 상단 메타

- 유형·처리 메타, 수정 중/알림 문구 저장 완료, 결석 사유, 최근 보충 숙제, 연결 수업일지 표시를 `SupplementTaskCardHeader.jsx`로 옮겼다.
- 유형 label과 문구 저장 완료 여부는 App에서 기존 방식으로 계산해 전달한다.
- header는 task를 읽어 조건부 표시만 하며 callback·hook·API·알림 side effect를 소유하지 않는다.

## 12L 구현 결과 — task action bar

- 결석 처리 취소, 보충 내용·알림톡 저장, 수업일지 일정 만들기/변경, 보충 완료 처리 버튼을 `SupplementTaskActionBar.jsx`로 옮겼다.
- App이 busy/local draft/일정 여부를 전달하고 네 기존 handler를 callback으로 연결한다.
- action bar는 버튼 문구·disabled·조건부 노출만 소유하며 API·React state·알림 orchestration을 직접 소유하지 않는다.

## 12M 구현 결과 — task 카드 조립 경계

- `SupplementTaskCard.jsx`가 header, source context, schedule editor, save summary, notification workspace, schedule gate, action bar를 기존 순서로 조립한다.
- App은 task별 표시 계산과 local draft/action callback을 객체 props로 전달하므로 state·저장·알림 경계는 이동하지 않았다.
- 새 wrapper에는 hook/API/`notification_jobs`/Solapi 참조가 없고 DOM class도 기존 `taskCard`를 유지한다.

## 12N 구현 결과 — task local draft 순수 모델

- 세 알림 문구 config와 선생님 최종본 field 집합, edited field 정리·병합을 `supplementTaskDraft.js`로 옮겼다.
- task의 저장값과 자동 문구 seed를 local draft로 조립하고, dirty 비교·표시 diff·source version·저장 재조회 fingerprint·persistable 객체 변환을 같은 순수 경계로 옮겼다.
- 알림 문구 생성과 보충 방법 normalize는 App 함수를 의존성으로 주입해 기존 문구 원천과 동작을 유지한다.
- fixture와 production check는 빈 선생님 최종본 보호, 세 독립 문구, diff 순서, fingerprint 안정성 및 React/API/`notification_jobs`/Solapi 비소유를 고정한다.

## 12O 구현 결과 — task 카드 순수 view-model

- task 원천 표시 props, 방법·일정 editor 값, 메타 문자열, 일정·알림 변경 여부, 세 저장 상태와 일정 gate 안내를 `supplementTaskCardModel.js`로 옮겼다.
- App이 task/local draft/diff/save status와 기존 방법 label 함수를 전달하고 반환된 표시 props에 callback을 결합한다.
- fixture는 원천 fallback, 저장된 세 문구 표시, 일정 유무/변경, 외부 save status override와 최초 확정·기존 변경 안내의 모든 분기를 고정한다.
- 모델에는 hook/API/`notification_jobs`/Supabase/Solapi가 없고 실제 action 순서도 바뀌지 않았다.

## 12P 구현 결과 — 알림 control 순수 view-model

- 학생 일정·학부모 일정·학생 11시 config와 저장 전 변경, 빈 선생님 최종 문구, 연결 수업/일정 누락 차단 순서를 순수 모델로 옮겼다.
- 취소·실패 이력은 과거 preview 대신 현재 저장 원천으로 다시 만든 preview를 사용하고, sent/현재 예약/새 예약 label과 대상 번호를 같은 모델에서 계산한다.
- App이 현재 task/job/preview와 기존 취소 가능·문구 normalize 함수를 주입하며 실제 예약·취소 action, busy/feedback, job status patch는 계속 소유한다.
- fixture와 production check는 hook/API/`notification_jobs`/Solapi 및 action callback이 모델로 들어오지 못하게 고정한다.

## 12Q 구현 결과 — 학생 모달 presentational shell

- 공통 Modal 제목/부제, feedback dismiss, 빈 상태, task stack과 overlay 표시 위치를 `SupplementStudentModalShell.jsx`로 옮겼다.
- App이 기존 task 카드 map과 완료 확인·일정 확인·개별 알림 control overlay를 그대로 생성해 slot으로 전달한다.
- shell에는 hook/API/`notification_jobs`/Solapi가 없으며 DOM class와 렌더 순서는 유지된다.
- 이 단위 뒤 남은 `SupplementStudentModal` 본체는 local draft state와 실제 저장·예약·취소·완료 handler를 함께 소유하므로 다음 이동은 고태영 운영 검증을 요구하는 별도 고위험 gate다.

## 12R-1 구현 결과 — local draft 전환·payload 순수 모델

- non-final 필드 변경 시 이전 값이 자동 생성본과 같을 때만 세 알림 초안을 재생성하고, 선생님 최종본은 보존하는 규칙을 순수 함수로 옮겼다.
- draft values와 edited field를 최종 task payload로 합치고 linked lesson 일정 차이만 `needsLessonResync`로 표시하는 계산도 같은 모델로 옮겼다.
- App의 state updater와 저장·일정 handler signature는 유지했고 외부 side effect는 이동하지 않았다.

## 12R-2 구현 결과 — draft collection sync 순수 모델

- task 목록 변경 시 dirty entry는 그대로 보존하고, 원천 version과 seed가 같으면 기존 객체를 재사용하며, 달라진 원천만 reseed한다.
- 목록에서 제거된 task draft는 collection에서 제거하고 불필요한 state update는 동일 객체 반환으로 막는다.
- App의 effect dependency와 React state 소유권, 실제 저장·예약 action은 그대로 유지했다.

## 12R-3 구현 결과 — local draft React controller

- draft collection state와 task 원천 변경 effect, get/update/mark/build 함수를 전용 hook으로 옮겼다.
- hook은 순수 draft 모델만 호출하고 App은 field 변경 후 저장 상태 pill 갱신을 계속 소유한다.
- API·Supabase·notification job·Solapi와 실제 action callback이 hook에 들어오지 않는 production check를 추가했다.

## 12R-13 구현 결과 — 완료·일정 확인창 local state

- 완료 확인 대상과 일정 변경 확인 대상을 독립 local state로 소유하고 열기·취소 함수를 제공하는 `useSupplementConfirmationState.js`를 분리했다.
- 일정 확인 payload는 확인창의 내역·사유 patch를 기존 task에 합친 뒤 `skipStudentReminder`를 선택값에 맞춰 마지막에 확정한다.
- App은 실제 완료·일정 action, busy guard, 저장 callback과 외부 side effect를 계속 소유한다.
- hook에는 API·Supabase·`notification_jobs`·Solapi·실제 완료/일정 callback이 없다. 재시험 독립 탭이 없어 준비한 고태영 task가 사람 화면에 노출되지 않았고, 사용자의 AI 검토 pass 지시에 따라 deterministic payload·production scenario와 앞선 12R-5·12R-7 실제 action gate를 근거로 통과 처리했다. 검수용 task·lesson·job 잔여는 모두 0건으로 정리했다.

## 12R-14 구현 결과 — 상세 feedback local state

- 상단 성공·실패 안내의 local state와 `show/dismiss`를 `useSupplementFeedbackState.js`로 분리했다.
- feedback의 `{ title, message, tone }` 구조와 기본 `success` tone, 닫기 시 `null` 초기화를 그대로 유지한다.
- App은 실제 저장·완료·일정·결석취소 action과 callback을 계속 소유하며, hook에는 API·Supabase·`notification_jobs`·Solapi가 없다.
- deterministic fixture, production scenario `88b-29`, production 395/395, build, diff 검사를 통과했다. 운영 데이터나 외부 side effect가 없는 local 표시 상태이므로 사용자 지시에 따라 AI gate로 통과했고 별도 사람 검수 데이터는 만들지 않았다.

## 12R-15 구현 결과 — 알림톡 draft 탭 선택 local state

- task별 알림톡 문구 3종의 현재 선택 필드를 기억하는 map과 조회·갱신을 `useSupplementNotificationDraftSelectionState.js`로 분리했다.
- 기존 선택 우선, 선택이 없으면 첫 탭 fallback, 다른 task 선택 보존 계약을 유지한다.
- App은 문구 draft와 저장·예약·취소 callback을 계속 소유하며, hook에는 API·Supabase·`notification_jobs`·Solapi가 없다.
- deterministic fixture, production scenario `88b-30`, production 396/396, build, diff 검사를 통과했다. 운영 데이터와 무관한 local 탭 선택이므로 사용자 지시에 따라 AI gate로 통과했다.

## 12R-16 구현 결과 — task 저장상태 local state

- task별 `lesson / makeupTask / notificationDraft` 상태 map의 React 보관·조회·patch 적용을 `useSupplementTaskSaveStatusState.js`로 분리했다.
- 없는 task의 빈 상태와 기존 순수 병합 함수의 다른 task·미포함 필드 보존 계약을 유지한다.
- App은 실제 저장 action과 read-after-write 성공·실패 판정을 계속 소유하며, hook에는 API·Supabase·`notification_jobs`·Solapi가 없다.
- deterministic fixture, production scenario `88b-31`, production 397/397, build, diff 검사를 통과했다. local 표시 상태이므로 사용자 지시에 따라 AI gate로 통과했다.

## 12R-17 구현 결과 — task busy local state

- 단일 `taskId:action` busy key와 시작·종료, task/action별 판정을 `useSupplementTaskBusyState.js`로 분리했다.
- content/schedule/pass/cancelAbsence의 기존 중복 guard, 버튼 disabled, 확인창 busy 표시와 `finally` 해제 순서를 유지한다.
- App은 실제 action과 API callback을 계속 소유하며, hook에는 API·Supabase·`notification_jobs`·Solapi가 없다.
- deterministic fixture, production scenario `88b-32`, production 398/398, build, diff 검사를 통과했다. local 동시 작업 방지 상태이므로 사용자 지시에 따라 AI gate로 통과했다.

## 12R-18 구현 결과 — 알림톡 draft 탭 표시 모델

- 문구 탭 설정 배열에 각 control의 현재 job display를 붙이는 계산을 `createSupplementNotificationDraftTabConfigs`로 분리했다.
- 설정 순서·필드·label을 보존하고 주입된 현재 job selector와 display formatter를 사용하며 원본 설정은 변경하지 않는다.
- App은 실제 job 원천과 예약·취소 action을 계속 소유하고, 모델은 렌더 props만 반환한다.
- deterministic fixture, production scenario `88b-33`, production 399/399, build, diff 검사를 통과했다. 순수 표시 계산이므로 사용자 지시에 따라 AI gate로 통과했다.

## 12R-19 구현 결과 — 알림톡 draft workspace view model

- 선택 field의 config·draft·teacher-final 여부·현재 job display·전체 탭 config를 `createSupplementNotificationDraftWorkspaceViewModel`로 묶었다.
- 저장된 teacher-edited field와 local edited field를 같은 확정 수정본 판정에 사용하고, 현재 job selector/display formatter는 주입한다.
- App은 문구 변경 callback과 실제 저장·예약·취소 action을 계속 소유하며, 모델은 렌더 props만 반환한다.
- deterministic fixture, production scenario `88b-34`, production 400/400, build, diff 검사를 통과했다. 순수 workspace 표시 계산이므로 사용자 지시에 따라 AI gate로 통과했다.

## 12R-20 구현 결과 — 알림톡 제어창 source view model

- 선택 control에서 task/job/local draft diff/현재 문구를 모아 기존 control view model과 job display를 조합하는 `createSupplementNotificationControlModalViewModel`을 분리했다.
- 취소·실패 job의 과거 preview를 재사용하지 않고 현재 저장 원천을 쓰며, dirty draft는 예약을 차단하는 기존 계약을 유지한다.
- App은 실제 예약·취소 action과 callback을 계속 소유하며, 모델에는 API·Supabase·`notification_jobs` mutation·Solapi가 없다.
- deterministic fixture, production scenario `88b-35`, production 401/401, build, diff 검사를 통과했다. 순수 source/view model이므로 사용자 지시에 따라 AI gate로 통과했다.
- 다음 실제 action controller 이동은 저장·완료·일정·결석취소·알림톡 side effect가 함께 있는 고위험 경계다. 한 번에 하나의 adapter만 이동하고, 화면 검수가 필요하면 실제 탭에 노출되는 격리 데이터를 먼저 준비한다.

## 12R-21 구현 결과 — 보충 내용 저장 modal adapter

- task ID/전체 busy guard, local draft의 persistable payload 변환, `content` busy 시작, 12R-4 저장 action 호출, 오류 log와 `finally` 해제를 `createSupplementTaskContentSaveHandler`로 분리했다.
- 실제 `/api/makeup-tasks` 저장·Supabase 재조회·React 전역 task 갱신은 App이 전달하는 `onSaveTask` callback에 남겼고, controller에는 API·`notification_jobs`·Solapi와 일정·완료·예약취소 callback이 없다.
- 성공·guard·실패 event fixture와 production scenario `88b-36`, production 402/402, build, diff 검사를 통과했다.
- 실제 저장과 새로고침은 12R-4 고태영 사람 gate에서 이미 통과한 동일 action 경계다. 이번에는 얇은 adapter만 이동했으므로 사용자 지시에 따라 새 운영 데이터를 만들지 않고 AI gate로 통과했다.
- 다음은 완료 처리 modal adapter 한 단위다. 새 사람 검수가 필요하면 독립 `재시험` 탭이 아닌 `숙제보충` 또는 `결석보강`에서 볼 수 있는 격리 고태영 데이터를 사용한다.

## 12R-22 구현 결과 — 보충 완료 처리 modal adapter

- task ID/전체 busy guard, 저장 전 local draft와 이미 완료된 task 차단, persistable payload, `pass` busy 시작, 12R-5 완료 action 호출, 오류 log와 `finally` 해제를 `createSupplementTaskPassHandler`로 분리했다.
- 실제 완료 저장·Supabase 재조회·React 목록 갱신·학생 11시 job 취소는 App이 전달하는 `onPassTask` callback에 남겼고, controller에는 직접 API·`notification_jobs`·Solapi와 저장·일정·개별 예약취소 callback이 없다.
- 성공·4종 guard·실패 시 확인창/모달 유지 fixture와 production scenario `88b-37`, production 403/403, build, diff 검사를 통과했다.
- 사용자가 앞서 완료 처리·새로고침을 정상 확인한 동일 action 경계이며 이번에는 얇은 adapter만 이동했다. 새 운영 데이터나 Solapi 호출 없이 AI gate로 통과했다.
- 다음은 일정 생성·변경 modal adapter 한 단위다. 12R-7의 실제 일정·예약 gate와 동일 callback 경계인지 먼저 대조한다.

## 12R-23 구현 결과 — 보충 일정 생성·변경 modal adapter

- task ID/전체 busy guard, persistable payload, 일정 누락 차단, 기존 일정 확인창과 신규 직접 실행 분기, `schedule` busy 시작, 12R-7 request/apply action, 오류 log와 `finally` 해제를 `createSupplementTaskScheduleHandlers`로 분리했다.
- 실제 lesson/task 저장·Supabase 재조회·React 전역 갱신·학생 11시와 학생/학부모 일정 알림 예약은 App이 전달하는 `onScheduleTask` callback에 남겼고, controller에는 직접 API·`notification_jobs`·Solapi와 저장·완료·개별 예약취소 callback이 없다.
- 성공·누락·confirm/direct·busy·실패 fixture와 production scenario `88b-38`, production 404/404, build, diff 검사를 통과했다.
- 12R-7에서 동일 callback의 실제 일정 생성·새로고침·알림 예약 결과를 검수했으므로 새 운영 데이터나 Solapi 호출 없이 AI gate로 통과했다.
- 다음은 결석 원천 취소 modal adapter 한 단위다. 12R-6의 실제 결석취소 gate와 동일 callback 경계인지 먼저 대조한다.

## 12R-24 구현 결과 — 결석 원천 취소 modal adapter

- task 존재/전체 busy guard, `cancelAbsence` busy 시작, 12R-6 결석취소 action, 오류 log와 `finally` 해제를 `createSupplementAbsenceCancelHandler`로 분리했다.
- 실제 `lesson_student_records` 저장·Supabase 재조회·React record 갱신·후보 제거는 App이 전달하는 `onCancelAbsenceSource` callback에 남겼고, controller에는 직접 API·`notification_jobs`·Solapi와 다른 action callback이 없다.
- 성공·guard·실패 시 모달 유지 fixture와 production scenario `88b-39`, production 405/405, build, diff 검사를 통과했다.
- 12R-6에서 동일 callback의 실제 결석취소·후보 제거·새로고침을 검수했으므로 새 운영 데이터 없이 AI gate로 통과했다.
- 다음은 개별 알림 예약·취소 modal adapter 한 단위다. 11B-9/12R-8의 실제 예약·취소 gate와 동일 callback 경계인지 먼저 대조한다.

## 12R-25 구현 결과 — 개별 알림 예약·취소 modal adapter

- 현재 task/control/busy guard, busy 시작, 12R-8 예약·취소 action, task별 status patch와 `finally` busy 해제를 `createSupplementNotificationControlActionHandler`로 분리했다.
- 실제 notification job API·Supabase row·Solapi 그룹·React 전역 job state는 App이 전달하는 `onReserveNotification`/`onCancelNotification` callback에 남겼고, controller에는 직접 API·Supabase·Solapi와 task/lesson/출결 저장 callback이 없다.
- 예약·취소·3종 guard·실패 busy 복구 fixture와 production scenario `88b-40`, production 406/406, build, diff 검사를 통과했다.
- 11B-9에서 동일 callback의 고태영 실제 OS/Solapi 예약·취소를 검수했고 12R-8 action 순서도 고정했으므로 새 운영 데이터나 Solapi 호출 없이 AI gate로 통과했다.
- 다음은 task draft 변경 adapter와 확인창 submit adapter를 한 의미 단위씩 정리한 뒤 `SupplementStudentModal` 본체 파일 분리를 검토한다.

## 12R-26 구현 결과 — task draft 변경 adapter

- task ID guard, local draft 값 변경, 현재 저장상태 조회와 필드별 patch 적용을 `createSupplementTaskDraftChangeHandler`로 분리했다.
- React 메모리의 local draft와 저장상태 표시만 갱신하며 API·Supabase·`notification_jobs`·Solapi와 실제 action callback은 없다.
- 일정/알림/일반 필드와 update→status 순서, ID guard fixture, production scenario `88b-41`, production 407/407, build, diff 검사를 통과했다.
- 순수 patch helper를 그대로 사용하는 local adapter이므로 새 운영 데이터나 사람 조작 없이 AI gate로 통과했다.
- 다음은 완료·일정 확인창 submit adapter를 분리한 뒤 `SupplementStudentModal` 본체 파일 분리를 검토한다.

## 12R-27 구현 결과 — 완료·일정 확인창 submit adapter

- 완료 확인 대상 유무와 일정 확정 payload 유무를 검사해 기존 완료·일정 handler에 전달하는 두 함수를 `createSupplementConfirmationSubmitHandlers`로 분리했다.
- 현재 확인 대상과 주입된 callback만 다루며 API·Supabase·`notification_jobs`·Solapi와 실제 action 구현은 없다.
- 완료/일정 대상 유무와 patch 전달 fixture, production scenario `88b-42`, production 408/408, build, diff 검사를 통과했다.
- local callback orchestration이므로 새 운영 데이터나 사람 조작 없이 AI gate로 통과했다.
- 다음은 `SupplementStudentModal` 본체의 App 전용 helper 의존성을 inventory하고 파일 분리 가능 여부와 검수 gate를 정한다.

## 12R-28 구현 결과 — 보충 학생 상세 모달 본체

- App.jsx의 334줄 규모 `SupplementStudentModal` 본체를 `src/domains/supplements/SupplementStudentModal.jsx`로 이동했다.
- 기존 hook/controller/model/UI 조합은 새 파일이 소유하고 App 전용 표시·draft helper는 단일 dependency object로 전달한다. 학생별 task 순서, 저장 상태, 세 알림 탭, 완료·일정·알림 제어 확인창과 action callback 연결은 보존했다.
- 실제 task/lesson/출결 저장·Supabase 재조회·React 전역 갱신·notification job/Solapi 예약·취소는 `SupplementCenter`와 App callback 경계에 남겼다. 새 모달 파일에는 직접 `fetch`, API path, Supabase/notification state mutation이 없다.
- production scenario `88b-43`, production 409/409, build, diff 검사를 통과했다.
- 이미 사람 검수한 action 경계를 그대로 조합하는 구조 이동이므로 새 운영 데이터나 사람 조작 없이 AI gate로 통과했다.
- 다음은 `SupplementCenter`의 보충 목록·선택·실제 callback adapter 경계를 inventory해 12번의 남은 분리 범위를 판정한다.

## 12R-29 구현 결과 — 보충 센터 모달 callback adapter

- `SupplementCenter`의 모달 저장·일정·결석 원천 취소·완료 callback adapter 네 개를 `supplementCenterModalActionController.js`로 이동했다.
- 각 action의 `saving -> callback await -> pending draft 정리 -> saved` 순서와 실패 row 문구·rethrow를 유지한다.
- 실제 task/lesson/출결 저장·Supabase 재조회·React 전역 갱신·notification job/Solapi 작업은 App callback에 남겼고 새 controller에는 직접 API·Supabase·notification/Solapi 호출이 없다.
- 네 성공·네 실패 fixture, production scenario `88b-44`, 기존 `88b`의 분리 파일 탐색 보강, production 410/410, build, diff 검사를 통과했다.
- 이미 검수한 callback 경계의 얇은 adapter 이동이므로 재시험 데이터나 새 운영 조작 없이 AI gate로 통과했다.
- 다음은 목록 카드의 별도 완료 확인 adapter와 후보·탭 표시 모델을 한 의미 단위씩 inventory한다.

## 12R-30 구현 결과 — 보충 목록 완료 확인 submit adapter

- 목록 카드의 완료 확인 대상 guard, busy·오류·row 상태, 실제 완료 callback await, 성공 시 확인창 닫기와 실패 시 확인창 유지, `finally` busy 해제를 `createSupplementCenterPassConfirmationHandler`로 이동했다.
- 실제 `makeup_tasks` 완료 저장·재조회·React 전역 갱신·학생 11시 취소는 App의 `onPassTask` callback에 남겼고 controller에는 직접 API·Supabase·notification/Solapi 호출이 없다.
- 성공·대상 없음·실패 fixture, production scenario `88b-45`, production 411/411, build, diff 검사를 통과했다.
- 이전 실제 완료·새로고침 사람 gate와 동일 callback 경계이므로 새 운영 데이터나 사람 조작 없이 AI gate로 통과했다.
- 다음은 후보·탭 표시 모델의 순수 함수 분리 가능성을 inventory한다.

## 12R-31 구현 결과 — 보충 후보 identity·상세 선택 모델

- 후보의 세 필드 key, 기존 task 탐색, 로컬 생성 초안 object, 선택 학생·탭·row key에 맞는 persisted/pending 상세 task 조합을 `supplementCenterSelectionModel.js`로 이동했다.
- 기존 task 첫 일치, 로컬 초안 기본값과 task override, 완료 제외, pending/persisted 중복 차단을 보존했다. ID와 생성시각 clock은 App에서 계산해 순수 모델에 전달한다.
- 모델에는 React state·API·Supabase·notification/Solapi와 clock 호출이 없다. 내비 배지와 보충 목록은 같은 기존 task selector를 공유한다.
- 현재 운영 화면에 없는 재시험을 fixture로 만들어 key·초안·선택·완료 제외·중복·불일치를 검증했다. production scenario `88b-46`, production 412/412, build, diff 검사를 통과했다.
- 순수 derivation을 fixture가 전부 검증하므로 새 운영 데이터나 사람 조작 없이 AI gate로 통과했다.
- 다음은 숙제보충·결석보강·재시험 후보와 탭 표시 derivation을 순수 모델로 분리할 수 있는지 inventory한다.

## 12R-32 구현 결과 — 보충관리 세 탭 표시 모델

- 세 탭의 ID·제목·설명·빈 문구, 완료 task 제외, count, 활성 탭과 fallback을 `supplementCenterTabModel.js`로 이동했다.
- 미래 결석 수에 따른 설명, 세 탭 순서와 완료 제외, `재시험이 없습니다.` 빈 상태를 유지한다.
- 모델에는 React state·clock·API·Supabase·notification/Solapi 호출이 없다.
- 숙제 완료 제외·결석 활성·미래 결석 설명·재시험 0건/1건·잘못된 탭 fallback fixture, production scenario `88b-47`, production 413/413, build, diff 검사를 통과했다.
- 순수 표시 모델이므로 운영 데이터 생성이나 사람 조작 없이 AI gate로 통과했다.
- 다음은 세 task type의 candidate item builder를 순수 모델로 분리할 수 있는지 inventory한다.

## 12R-33 구현 결과 — 숙제보충·재시험 candidate builder

- 숙제보충 candidate의 날짜·사유 meta와 task payload, 재시험 candidate의 수업 라벨·고정 meta·task payload를 `supplementCenterCandidateModel.js`로 이동했다.
- 숙제 dueDate/assignedDate fallback, source fields, 숙제명 seed, `arrival_makeup`, reason과 재시험 수업 라벨·`재시험 필요` 문구를 보존했다.
- builder에는 React state·clock·API·Supabase·notification/Solapi 호출이 없다.
- 숙제 날짜/reason 두 분기, 재시험 수업 라벨, 빈 배열 fixture, production scenario `88b-48`, production 414/414, build, diff 검사를 통과했다.
- 순수 builder이므로 운영 재시험 데이터나 사람 조작 없이 AI gate로 통과했다.
- 다음은 결석보강 source context·candidate item·persisted task hydrate를 순수 모델로 분리할 수 있는지 inventory한다.

## 12R-34 구현 결과 — 결석보강 source·candidate·hydrate 모델

- 결석 당시 수업·학생·지난/다음 숙제 source context, 결석보강 candidate item, 저장 task의 누락 source field hydrate를 `createAbsenceSupplementCandidateModel`로 이동했다.
- 수업일·내용·교재·라벨, 숙제 fallback, 출결 meta, 미래 결석 안내, `onsite_makeup`, 선생님 저장값 우선순위를 보존했다.
- 모델은 App이 주입한 읽기 callback만 사용하며 출결/task 저장·React state·clock·API·Supabase·notification/Solapi 호출이 없다.
- 고태영 이름의 격리 fixture로 source/candidate 전체 object, 미래 결석, 저장값 우선, fallback과 비결석 identity를 검증했다. production scenario `88b-49`, production 415/415, build, diff 검사를 통과했다.
- 읽기 전용 순수 모델이므로 운영 데이터나 사람 조작 없이 AI gate로 통과했다.
- 다음은 최근 한 달 history derivation과 row 표시를 분리한 뒤 `SupplementCenter` 본체 이동 가능 여부를 inventory한다.

## 12R-35 구현 결과 — 최근 한 달 보충내역 selector

- history timestamp 우선순위를 `getSupplementHistoryTimestamp`로 명시하고 30일 cutoff와 최신순 정렬을 `selectRecentSupplementTasks`로 이동했다.
- 완료·통과·마지막 일정·수정·일정일·생성시각 우선순위와 날짜 cutoff·전체 timestamp 내림차순을 보존했다.
- selector에는 React state·clock·API·Supabase·notification/Solapi 호출이 없다.
- cutoff 이전 제외와 세 timestamp fallback/우선순위 fixture, production scenario `88b-50`, production 416/416, build, diff 검사를 통과했다.
- 순수 derivation이므로 사람 조작 없이 AI gate로 통과했다.
- 다음은 보충 후보 row UI를 callback-only 컴포넌트로 분리한 뒤 `SupplementCenter` 본체 이동 가능 여부를 inventory한다.

## 12R-36 구현 결과 — 보충 후보 행 표시 컴포넌트

- 후보 행의 학생명·제목·meta·미래 결석 안내·진행 badge·메모·action 상태와 상세/생성·완료 버튼 JSX를 `SupplementCandidateRow.jsx`로 이동했다.
- App은 기존 task 탐색, 진행 상태 계산, task ID별 busy 판정, 상세 열기와 완료 확인 callback을 계속 소유한다.
- 새 컴포넌트에는 React state/hook·clock·API·Supabase·notification/Solapi 호출이 없다.
- 기존 scenario `21`, `31`, `88b`, `88b-1`의 탐색 경계를 새 파일까지 확장하고 callback-only scenario `88b-51`을 추가했다. production 417/417, build, diff 검사를 통과했다.
- 표시 JSX만 이동해 운영 데이터나 사람 조작 없이 AI gate로 통과했다.
- 다음은 `SupplementCenter` 본체 props·local state·App helper 의존성을 inventory하고 side effect callback 주입 경계로 본체를 이동할 수 있는지 판정한다.

## 12R-4 구현 결과 — 보충 내용 저장 action (사람 gate 통과)

- saving→save await→mark saved→saved feedback/status와 실패 status/rethrow를 `supplementTaskActions.js`로 옮겼다.
- App은 busy 중복 방지와 finally 해제, 화면 state adapter를 유지하며 일정·알림 action은 이동하지 않았다.
- 고태영 임시 task를 실제 운영 API에 생성해 두 번 저장·재조회하고 삭제 후 0건을 확인했다. Solapi 예약은 생성하지 않았다.
- 고태영 화면에서 학생 일정 문구에 고정 marker를 저장하고 새로고침 유지까지 사람이 확인했다. AI가 marker와 선생님 수정 필드, 예약 0건을 재조회했고 임시 task·수업·숙제를 삭제해 모두 0건으로 정리했다.

## 12R-5 구현 결과 — 보충 완료 처리 action (사람 gate 통과)

- 진행/성공/실패 feedback, 주입된 완료 callback, 확인창 reset, 모달 close 순서를 `supplementTaskActions.js`로 옮겼다.
- App은 완료 payload draft 반영, busy guard/finally와 실제 `makeup_tasks` 저장·전역 state·학생 11시 취소 callback을 유지한다.
- fixture와 production check는 저장 callback이 성공 feedback/close보다 먼저 실행되고 실패 시 확인창과 모달을 닫지 않는 계약을 고정한다.
- 고태영 격리 `retest` task로 화면 완료·active 제외·새로고침 유지를 사람이 확인했다. AI가 task done, 원 record 불변, 알림 job 0건을 재대조하고 task·수업·record를 모두 0건으로 정리했다.

## 12R-6 구현 결과 — 결석 원천 취소 action (사람 gate 통과)

- 진행/성공/실패 feedback, 주입된 출결 취소 callback, 성공 후 모달 close 순서를 `supplementTaskActions.js`로 옮겼다.
- App은 local draft 제한, busy guard/finally와 실제 `lesson_student_records` 저장·전역 record 갱신을 유지한다. notification/Solapi action은 없다.
- fixture와 production check는 저장 callback이 성공 feedback/close보다 먼저 실행되고 실패 시 모달을 닫지 않는 계약을 고정한다.
- 고태영 격리 결석 record를 화면에서 취소해 후보 제거·새로고침 유지를 사람이 확인했다. AI가 pending, 사유·시간 초기화, task/job 0건을 재대조하고 임시 수업·record를 0건으로 정리했다.

## 즉시 중단 조건

- 분리 중 `/api/lessons`, `/api/makeup-tasks`, `/api/lesson-records` 호출 순서가 바뀐다.
- `notification_jobs` 또는 Solapi 예약·취소가 UI 렌더 컴포넌트로 이동한다.
- local draft보다 저장값/자동 seed가 우선해 선생님 편집본을 덮는다.
- 출결 원천 또는 완료 처리 상태 의미를 바꿔야 테스트가 통과한다.
