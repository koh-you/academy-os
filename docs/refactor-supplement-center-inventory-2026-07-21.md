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

## 즉시 중단 조건

- 분리 중 `/api/lessons`, `/api/makeup-tasks`, `/api/lesson-records` 호출 순서가 바뀐다.
- `notification_jobs` 또는 Solapi 예약·취소가 UI 렌더 컴포넌트로 이동한다.
- local draft보다 저장값/자동 seed가 우선해 선생님 편집본을 덮는다.
- 출결 원천 또는 완료 처리 상태 의미를 바꿔야 테스트가 통과한다.
