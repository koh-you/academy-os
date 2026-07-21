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
10. 다음: task 카드 상단 메타 또는 하단 action bar를 callback-only 표시로 분리한다.
11. `SupplementStudentModal` 전체와 실제 저장·예약 orchestration은 위 조각 분리 이후 별도 gate로 판단한다.

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

## 즉시 중단 조건

- 분리 중 `/api/lessons`, `/api/makeup-tasks`, `/api/lesson-records` 호출 순서가 바뀐다.
- `notification_jobs` 또는 Solapi 예약·취소가 UI 렌더 컴포넌트로 이동한다.
- local draft보다 저장값/자동 seed가 우선해 선생님 편집본을 덮는다.
- 출결 원천 또는 완료 처리 상태 의미를 바꿔야 테스트가 통과한다.
