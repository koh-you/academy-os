# LessonJournalDetail refactor inventory — 2026-07-28

## 범위

로드맵 17에서 `LessonJournalDetail`을 옮기기 전에 정규 수업일지의 표시·local draft·다중 원천 저장과 알림톡 예약/취소 경계를 고정한다. 결석보충·숙제보충 상세는 `SupplementMakeupLessonDetail`, 시험대비 상세는 `ExamPrepLessonDetail`로 이미 조기 분기되므로 이번 inventory의 주 대상은 정규·특강 수업일지다.

이 inventory와 fixture는 소스만 읽는다. 운영 API, Supabase, `notification_jobs`, Solapi 발송·예약·취소를 호출하지 않는다.

## 입력·읽기 원천

| 영역 | 컴포넌트 입력·직접 읽기 | 용도 | 쓰기 여부 |
| --- | --- | --- | --- |
| 수업·학생 | `lesson`, `lessons`, `students`, `templates` | 현재 수업 명단, 이전 수업, 반/특강 경계, 학생별 표시 | 컴포넌트 내부 쓰기 없음 |
| 수업기록 | `records`, `allRecords`, `saveStates` | 교재·진도·출결·과제상태·준비메모·학생/학부모 코멘트, 이전 메모 | local draft 후 상위 callback |
| 숙제 | `homeworks` | 지난/다음 숙제, 연결 원천, 숙제 확인 상태 | local draft 후 상위 callback |
| 보충 | `makeupTasks` | 학생별 확정 일정 문구, 등원보충 초안, 연결 보충 상세 | local draft 또는 상위 callback |
| 시험·자료·리마인더 | `testSessions`, `testAttempts`, `materials`, `academyTests`, `academyReminders` | 시험 결과 문구, 자료/시험/학원 할 일 표시 | 읽기 전용 |
| 알림 계획·OS 작업 | `lessonNotificationPlan`, `notificationJobs` | 예약 모드, 학생/학부모 현재 job, 누락·잔여·내용변경 판정 | 상위 callback 또는 OS job audit |
| provider 결과 | `notificationJobs`의 provider reference와 상위 reconcile callback | 발송결과 확인 대상·완료·실패 표시 | 컴포넌트가 Solapi 원시 group/message를 직접 읽지 않음 |

## local draft와 UI state

| state 묶음 | 필드 | 완료·초기화 계약 |
| --- | --- | --- |
| 수업일지 편집 | `journalEditMode`, `journalRecordDrafts`, `journalHomeworkDrafts`, `journalMakeupTaskDrafts`, `journalManualSaveMessage`, `editingMemoKey` | lesson ID 변경 시 모두 초기화. 저장 성공 때만 draft를 비우고, 실패·부분 저장이면 수정본 유지 |
| 코멘트·준비메모 | `commentModal`, `prepMemoModal`, `studentPreviewId` | 학생·대상별 현재 record를 다시 읽고 상위 저장/AI/발송 callback 사용 |
| 예약 audit | `reservationModalOpen`, `reservationAudit`, `reservationInspectMode` | 모달을 열 때 OS job을 조회하고 전체·예약·취소/실패를 구분 |
| 외부 반영 진행 | `reservationApplyState`, `solapiResultRefreshState`, `cancelingReservationJobId` | 중복 클릭을 막고 성공·실패 문구와 OS job 표시를 갱신 |

## 저장 원천과 side effect

| 동작 | 직접 원천·호출 | 성공 판정 | 외부 side effect·위험 |
| --- | --- | --- | --- |
| 수업일지 변경 저장 | `onSaveLessonJournalDrafts` → App `handleSaveLessonJournalDrafts` | 숙제·등원보충·수업기록을 각각 Supabase 재조회 대조. 성공한 원천 수를 메시지에 남김 | `homeworks`, `makeup_tasks`, `lesson_student_records`의 순차 다중 원천 저장. 앞 원천 성공 뒤 뒤 원천 실패가 가능 |
| 수업기록 단건 저장 | `onSaveRecord` → App `handleSaveRecord` | 반환 record와 필요 필드 재조회 대조 | 연결 숙제 bulk 저장 가능. 옵션에 따라 알림 예약 refresh 가능 |
| 숙제 수정 | `onUpdateHomework` | 상위 저장 adapter 판정 | `homeworks` 변경 |
| 등원보충 상태·일정·완료 | `onUpdateMakeupTask`, `onScheduleMakeupTask`, `onPassMakeupTask` | 상위 보충 controller 판정 | `makeup_tasks`, 연결 lesson, 예약 알림 가능 |
| 코멘트 AI/저장/발송 | `onPolishComment`, `onSaveRecord`, `onSendComment` | 저장된 최종 record를 기준으로 상위 adapter 판정 | AI API, record 저장, Solapi 즉시/예약 발송 가능 |
| 학생별 알림 제외 | `onToggleStudentNotificationMute` | record 저장·재조회 | 현재 예약 갱신/취소와 연결 가능 |
| 알림 모드·수동 시각 | `onUpdateLessonNotificationPlan`, `onScheduleLessonNotificationsAt` | app_state 계획 저장 후 별도 실제 반영 | 계획 저장과 실제 `notification_jobs`/Solapi 반영은 분리 |
| 실제 예약 반영 | `onApplyLessonNotificationPlan` | 기대 job ID·payload fingerprint와 활성 provider reference 대조 | `notification_jobs` 생성/갱신/취소와 Solapi 예약/취소 |
| 발송결과 reconcile | `onReconcileSolapiNotificationResults` | provider 결과를 OS job 상태에 반영 | Solapi 조회와 `notification_jobs` 상태 쓰기 |
| OS job 취소 | `onCancelNotificationJob` | 반환 job 또는 audit 재조회 | OS job·Solapi 예약 취소 |

상위 저장 handler는 성공한 숙제·등원보충을 되돌리지 않고 `부분 저장`으로 보고한다. 이 보상 없는 순차 계약은 기능 변경 없이 그대로 보존해야 하며, 이동 전에 TARGET/CONTROL과 각 단계 실패 fixture가 필요하다.

## 첫 안전 분리 순서

1. `17A-1` 완료: 수업일지 draft 수·저장 상태·하단 고정바 문구를 `lessonJournalSaveViewModel.js` 순수 모델로 분리했다.
2. `17A-2` 완료: 예약 audit count/filter/display를 `lessonJournalReservationAuditModel.js` 순수 모델로 분리했다.
3. `17A-3` 완료: 이전 준비메모의 같은 반 직전 record, 반 이동 fallback, 확인 완료 cutoff, 최근 참고 record 선택을 `lessonJournalPreviousMemoSelector.js` 순수 selector로 분리했다.
4. `17B-1` 완료: 수업명·일시·학생 수·주제와 뒤로가기/시험대비/수정/취소 callback만 갖는 상단 `LessonJournalHeader` controlled component를 분리했다.
5. `17B-2` 완료: 휴강·휴강 보충의 설명, 연결 보충/원 휴강 표시와 알림 미발송 안내를 `LessonJournalClosureNotice` 표시 component로 분리했다.
6. `17B-3` 완료: 현재 수업 관련 운영 알림의 표시 조건·제목·설명·count와 기존 읽기 전용 목록 child를 `LessonJournalReminderPanel` shell로 분리했다.
7. `17B-4` 완료: 발송 상태, 하원 미체크, 예약 모드 select, 수정/예약 확인/발송 결과/Solapi 반영 버튼을 callback-only `LessonJournalNotificationBar`로 분리했다.
8. `17B-5` 완료: 예약 확인 modal의 요약·학생/학부모 상태·OS 이슈 표시를 callback-only `LessonJournalReservationModal`로 분리하고 조회·예약·취소 orchestration은 App에 유지했다.
9. `17C-1` 완료: 학생별 수업메모 버튼의 현재 메모·직전/참고 메모·확인 완료·작성창 가져오기 표시 계산을 `lessonJournalMemoIndicatorModel.js`로 분리했다.
10. `17C-2` 완료: 학생 이름·학년·학교·특강/프로필 개별 시간과 학생 포털 미리보기 callback을 `LessonJournalStudentIdentity`로 분리했다.
11. `17C-3` 완료: 출결 상태·날짜 불일치·하원 미체크·휴강 비활성 표시와 기존 `onOpenAttendance` callback을 `LessonJournalAttendanceButton`으로 분리했다.
12. `17C-4` 완료: textarea 자동 높이·초점·키보드 blur와 읽기 전용 fallback을 가진 공통 `EditableMemoCard`를 `LessonJournalEditableMemoCard`로 분리했다.
13. `17C-5` 완료: 교재·진도·지난/다음 숙제 네 입력을 App-owned record/homework draft callback만 받는 `LessonJournalEditableFields`로 묶었다.
14. `17C-6` 완료: 과제 상태 select, 숙제보충 방법 버튼, 다음 수업 확인 숙제 표시를 기존 assignment/homework followup callback만 받는 `LessonJournalAssignmentStatusCell`로 분리했다.
15. `17C-7` 완료: 학부모·학생 알림의 작성/발송 상태, 수업 계획·개별 제외 표시와 composer/알림 제외 callback을 `LessonJournalNotificationCommentCell`로 분리했다.
16. `17C-8` 완료: 수업메모 표시 모델과 기존 modal open callback을 조합하는 `LessonJournalPrepMemoButton`을 분리했다.
17. `17C-9` 완료: 학생 정보·메모·출결·편집·과제·학부모/학생 알림 cell의 기존 DOM 순서를 `LessonJournalStudentRow` presentational shell로 묶었다.
18. `17D-1` 완료: 하단 고정 저장 bar의 표시, 버튼 disabled, 저장 중 문구를 순수 모델과 `LessonJournalSaveBar`로 분리했다.
19. `17D-2` 완료: 학생 표 panel, 읽기/편집 class, 10개 고정 열 제목을 순수 모델과 `LessonJournalTable` shell로 분리했다.
20. `17D-3` 완료: 학생 화면 미리보기의 학생 ID 격리 모델과 modal/portal prop shell을 `LessonJournalStudentPreviewModal`로 분리했다.
21. `17D-4` 완료: preparation memo의 직전/참고 원천, 확인 cutoff, 숨김·제목·날짜 계산을 순수 view model로 분리했다.
22. `17D-5` 완료: preparation memo의 이전 메모·draft·공개 flag·저장 상태 JSX를 callback-only view로 분리했다.
23. `17E-1` 완료: comment composer의 audience·예약 계획·안전 상태·버튼/저장 상태 문구를 순수 view model로 분리했다.
24. `17E-2` 완료: comment composer의 최종 문구·원천 메모·저장/발송 버튼·미리보기 JSX를 callback-only view로 분리했다.
25. `17E-3` 완료: comment composer의 원천 토글, local draft·저장 기준 ref·AI 결과 동기화 effect를 외부 side effect 없는 전용 hook으로 분리했다.
26. `17E-4` 완료: comment composer의 AI 수정 원천 우선순위·`persist: false` request·성공/실패 결과 정규화를 주입형 controller로 분리했다.
27. `17E-5` 완료: comment composer의 최종 문구 record payload·현재 audience 발송상태 초기화·단건 저장/재조회 option을 주입형 controller로 분리했다.
28. `17E-6` 완료: comment composer의 발송 record·delay·dry-run/test recipient·미리보기·수동 재발송 사유 option을 순수 payload builder로 분리했다.
29. `17E-7` 완료: comment composer의 model·local hook·AI/저장 controller·발송 payload·view 조합 shell을 domain component로 이동하고 App에는 기존 helper 주입 wrapper만 남겼다.
30. `17F-1` 완료: `LessonJournalDetail`의 record/homework/makeup draft map을 안정된 배열 request로 직렬화하는 순수 모델을 분리하고 현재 다중 원천 저장 순서를 고정했다.
31. `17F-2` 완료: App 상위 `handleSaveLessonJournalDrafts`의 명시 homework draft, record 저장본, 과제 판정에 연결된 previous/source homework 변경 집합을 순수 persistence plan으로 분리했다.
32. `17F-3` 완료: homework/makeup/record 단계별 성공·부분 성공·실패 문구를 순수 outcome 모델로 분리하고, 실패 시 전체 draft를 유지해 모든 원천을 재요청하는 현재 재시도 contract를 fixture로 고정했다.
33. `17F-4` 완료: 다중 원천 저장의 순차 실행과 단계별 부분 성공 outcome 조합을 주입형 controller로 분리했다.
34. 단계별 Supabase 재조회·React 반영 callback은 App에 유지했다.
35. `17F-5` 완료: 수업기록 bulk 저장·Supabase 재조회 대조를 주입형 API adapter로 분리했다.
36. 수업기록 React ref/state·localStorage·저장 상태 반영은 App에 유지했다.
37. `17F-6` 완료: 수업일지 숙제 bulk 저장 fingerprint·Supabase 재조회 대조를 주입형 API adapter로 분리했다.
38. 숙제 검증 결과의 App ref/state 반영은 기존 callback에 유지했다.
39. `17F-7` 완료: 등원보충 draft의 기존 task 병합·신규 ID/기본값 request builder를 순수 모델로 분리했다.
40. 실제 `makeup_tasks` 저장·재조회 검증과 React 반영은 App에 유지했다.
41. `17F-8` 완료: 등원보충 requested task 저장·Supabase identity 재조회 대조를 주입형 API adapter로 분리했다.
42. 검증된 `makeup_tasks`의 React 상태 반영은 App에 유지했다.
43. `17F-9` 완료: 검증된 homework/makeup/record 응답의 state merge와 record save-state map을 순수 모델로 분리했다.
44. React setter·ref·localStorage 반영은 App에 유지했다.
45. `17G-1` 완료: 수업일지 edit/draft/manual message의 lesson 전환 초기화 lifecycle을 전용 hook으로 분리했다.
46. `17G-2` 완료: 예약 modal/audit의 local React 상태와 reset effect를 전용 hook으로 분리했다.
47. `17G-3` 완료: comment/preparation modal, 편집 memo key, 학생 미리보기 ID의 local overlay 선택 상태를 전용 hook으로 분리했다.
48. `17G-4` 완료: `LessonJournalDetail`의 local `useState` 0개와 남은 effect 1개·async side-effect 함수 5개 경계를 closeout audit으로 고정했다.
49. `17H-1` 완료: 외부 호출 없이 예약 동기화 상태만 계산하는 `getSolapiReservationSyncStatus`를 순수 모델로 분리했다.
50. `17H-2` 완료: 학생·학부모 예상 예약 ID/fingerprint item 생성을 순수 builder로 분리했다.
51. `17H-3` 완료: 예약 계획 요약·버튼 문구·적용/결과조회 가능 여부를 순수 view model로 분리했다.
52. `17H-4` 완료: OS 예약 조회 성공 응답을 audit 배열·문구·상태로 바꾸는 순수 정규화 모델을 분리했다.
53. `17H-5` 완료: OS 예약 1건 취소 성공 뒤 audit 배열을 갱신하는 순수 state transition을 분리했다.
54. `17H-6` 완료: 예약 순수 모델과 App-owned action 4개 경계를 closeout audit으로 고정했다.
55. `17I-1` 완료: record draft의 base/draft/patch 병합과 timestamp/ID metadata 생성을 순수 builder로 분리했다.
56. `17I-2` 완료: homework draft key·표시 title fallback·업데이트 row 조합을 순수 모델로 분리했다.
57. `17I-3` 완료: 등원보충/다음 정규수업 확인/수업 후 보충 선택의 record patch·makeup task·안내 메시지 plan을 순수 모델로 분리했다.
58. `17I-4` 완료: 과제 상태 변경의 미검사 자동 후속·후속 선택 유지·후속 제거 record patch plan을 순수 모델로 분리했다.
59. `17I-5` 완료: 현재 record draft 선택과 makeup draft 제거의 map selector/transition을 순수 모델로 분리했다.
60. `17I-6` 완료: record 단일 field 변경의 과제 상태 동기화와 comment 발송상태 초기화 patch를 순수 builder로 분리했다.
61. `17I-7` 완료: record/homework/makeup local draft action과 App-owned React/저장 경계를 closeout audit으로 고정했다.
62. `17J-1` 완료: 예약 job 상태 우선·저장 comment 상태 fallback 표시를 순수 selector로 분리했다.
63. `17J-2` 완료: comment 발송상태의 표시 정규화·버튼 상태·라벨 계산을 시각 판정 주입형 순수 모델로 분리했다.
64. `17J-3` 완료: notification job 자체의 상태 표시 formatter를 시간·시각 formatter 주입형 순수 모델로 분리했다.
65. `17J-4` 완료: notification job 삭제 가능·provider reference 표시 selector를 분리하고 기존 취소 가능 selector·상태 class 모델과 함께 순수 표시 경계를 고정했다.
66. `17J-5` 완료: 중첩 provider 응답에서 group/message reference를 읽는 순수 selector를 분리했다.
67. `17J-6` 완료: lesson 예약 payload fingerprint 정규화·직렬화를 순수 모델로 분리했다.
68. `17J-7` 완료: lesson 예약 payload snapshot 조합을 helper 주입형 순수 builder로 분리했다.
69. `17J-8` 완료: lesson notification job ID와 active 상태 판정을 순수 selector로 분리했다.
70. `17J-9` 완료: comment/job 표시·payload 8개 순수 경계와 App-owned provider action을 closeout audit으로 고정했다.
71. `17K-1` 완료: lesson notification job builder의 입력·출력·시계·외부 action 경계를 별도 inventory로 고정했다.
72. `17K-2` 완료: 조회 완료 입력과 `nowIso`를 받는 최종 notification job 순수 builder를 분리했다.
73. `17K-3` 완료: App 원천 조회·알림 제외 guard·builder 주입과 외부 action 경계를 closeout audit으로 고정했다.
74. 다음 `17L-1`: 휴강 제외와 학생별 학부모→학생 job 목록 조합을 순수 batch model로 분리한다.
75. `notification_jobs` 조회·OS job 취소·provider 예약 반영·발송결과 reconcile orchestration은 App callback에 남기고 순수 표시·판정만 분리

## 학생별 수업일지 행 경계

| 표시 열 | 직접 읽기·계산 | 변경 경계 | 이번 단계 |
| --- | --- | --- | --- |
| 학생 | 학생 이름·학년·학교, 특강/프로필 개별 시간 | 학생 포털 미리보기 open callback | `17C-2` read-only shell 완료 |
| 수업메모 | 현재 record, 직전/참고 record selector, 확인 cutoff, 작성창 가져오기 flag | 메모 modal open callback | `17C-1` 모델 + `17C-8` 버튼 완료 |
| 출결 | 적용된 학생별 수업시간, 출결 record, 휴강 여부 | `onOpenAttendance` callback 뒤 별도 저장/알림 선택 | `17C-3` callback-only 버튼 완료 |
| 교재·진도 | record와 직전 수업 fallback | `journalRecordDrafts`, `editingMemoKey` | `17C-4~5` 표시·callback 분리 완료 |
| 지난·다음 숙제 | `homeworks`, 연결 수업, homework draft | `journalHomeworkDrafts` | `17C-4~5` 표시·callback 분리 완료 |
| 과제 상태·보충 | record 상태, 지난 숙제, 보충 방법·대기 확인 | record/homework/makeup task draft controller | `17C-6` 표시·선택 callback 분리 완료 |
| 학부모·학생 알림 | 저장 문구, job status, 수업 계획·개별 제외 | composer open, notification mute callback | `17C-7` 표시·callback 분리 완료 |

## AI 자동검증과 사람 gate

- inventory gate: 정적 source fixture로 입력, local state, 저장 callback, 직접 API, 상위 Supabase 저장 handler를 확인한다.
- 다음 저위험 모델: deterministic 가상 draft/save-state로 자동 판정한다.
- `17A-3` gate: 가상 TARGET/CONTROL 수업·학생·record로 같은 반 직전 메모, 확인 완료 cutoff, 최근 참고 메모, 정규 반 이동 fallback, 특강 격리, 취소·휴강 제외, `allRecords` 우선 원천을 판정한다.
- `17B-1` gate: 가상 lesson의 수업명·날짜·시간·학생 수·주제 fallback과 `NavigationHeader` 접근성 경계를 판정하고, extracted header가 기존 4개 callback에만 연결되는지 정적으로 검사한다.
- `17B-2` gate: 일반 수업 숨김, 휴강의 연결 보충 있음/없음, 휴강 보충의 원 휴강 있음/없음 5개 가상 상태와 display-only 경계를 판정한다.
- `17B-3` gate: 가상 운영 알림 0건/2건의 숨김·count를 판정하고, 기존 `AcademyReminderList`가 children으로 그대로 연결되며 shell은 `SectionHeader`와 읽기 전용 표시만 소유하는지 검사한다.
- `17B-4` gate: 가상 edit/refresh/apply/하원 미체크 상태로 버튼 노출·라벨·명단 title과 두 action region의 접근성 경계를 판정하고, 실제 예약·결과 조회는 App callback으로만 연결되는지 검사한다.
- `17B-5` gate: 가상 OS 학부모/학생 예약, 취소/실패, loading/빈 CONTROL 상태로 요약·필터·버튼 문구를 판정하고 실제 조회·예약·OS 취소는 App callback으로만 연결되는지 검사한다.
- `17C-1` gate: 가상 현재 메모, 직전/참고 메모, 확인 cutoff, 학생/학부모 작성창 flag 조합으로 수업메모 버튼 설명과 주의 표시를 판정한다.
- `17C-2` gate: 가상 official/adjusted/profile/일반 수업시간과 학생 기본정보 누락 조합으로 학년·학교 fallback, 시간 표시·class를 판정하고 포털 미리보기는 callback으로만 연결되는지 검사한다.
- `17C-3` gate: 가상 정상 출결+날짜 불일치+하원 미체크 TARGET, 휴강 CONTROL, record status fallback, 빈 CONTROL로 class·상세·비활성·경고 표시를 판정하고 출결 저장은 기존 callback 뒤에 유지되는지 검사한다.
- `17C-4` gate: 가상 편집·초점 TARGET, 잠긴 빈 CONTROL, 공백 값 CONTROL로 input/read class·placeholder fallback을 판정하고 자동 높이·Escape/Ctrl+Enter blur·local callback 계약을 정적으로 검사한다.
- `17C-5` gate: 가상 현재/직전 교재·진도와 지난/다음 숙제 TARGET, legacy 진도·학생 교재 fallback CONTROL로 네 field 순서·value·placeholder·aria label·record/homework callback 라우팅을 판정한다.
- `17C-6` gate: 가상 편집 모드+지난 숙제+다음 수업 확인 TARGET, 읽기 모드+수업 후 보충 CONTROL, 지난 숙제 없음 CONTROL로 보충 버튼·선택 상태·확인 숙제 표시와 select aria label을 판정하고 상태 변경·보충 적용은 App callback에 유지되는지 검사한다.
- `17C-7` gate: 가상 발송 완료, 작성됨, 실패, 수업 전체 알림 없음, 학생별 제외 조합으로 작성 버튼·상태·알림 제외 class/문구를 판정하고 composer 열기와 알림 제외 저장은 App callback에 유지되는지 검사한다.
- `17C-8` gate: 가상 현재 메모·직전/참고 메모·확인 cutoff·학생/학부모 공개 flag 조합을 기존 `17C-1` fixture로 다시 판정하고, 버튼이 계산 모델과 modal open callback만 사용하는지 정적으로 검사한다.
- `17C-9` gate: `17C-1~8`의 TARGET/CONTROL fixture를 모두 재실행하고 학생 정보→메모→출결→4개 편집칸→과제 상태→학부모→학생 알림의 DOM 순서와 App-owned callback 인자를 정적으로 대조한다.
- `17D-1` gate: 가상 편집 중 변경 있음/없음, 저장 중, 편집 종료 뒤 완료 메시지, 완전 숨김 상태로 표시·disabled·버튼 문구를 판정하고 실제 save callback은 App에 유지되는지 검사한다.
- `17D-2` gate: 읽기/편집 TARGET·CONTROL로 table class를 판정하고 10개 열 제목 순서, 학생 map children 전달, App-owned 계산·callback 유지 여부를 검사한다.
- `17D-3` gate: 가상 TARGET·CONTROL 학생 목록과 preview ID로 선택 학생 한 명·닫힘·없는 ID를 판정하고, App-owned preview state와 주입된 포털 component, 읽기 전용 callback 경계를 정적으로 검사한다.
- `17D-4` gate: 가상 직전 메모 TARGET, 참고 메모 TARGET, 확인 완료 CONTROL, 빈 CONTROL로 원천 우선순위·record ID/날짜·숨김·확인 가능·표시 제목을 판정하고 저장/닫기 callback이 App에 남는지 검사한다.
- `17D-5` gate: `17D-4` TARGET·CONTROL을 재사용해 이전 메모/확인 완료/빈 표시 분기와 메모·학생 공개·학부모 공개 callback 라우팅, 저장 disabled·문구·오류 표시를 정적으로 대조한다.
- `17E-1` gate: 가상 학부모 기본 예약 TARGET, 학생 30분 지연 시각 경과 TARGET, 발송 안 함 CONTROL로 field·실제/테스트 수신·sendTiming·버튼·저장 상태를 판정하고 AI/저장/발송 action이 App에 남는지 검사한다.
- `17E-2` gate: `17E-1`의 실제 수신 TARGET·발송 안 함 CONTROL을 재사용하고 원천 토글·draft 변경·AI·저장·발송 callback, 저장/발송 disabled, 미리보기 표시 순서를 정적으로 대조한다.
- `17E-3` gate: 가져온 초기 메모 TARGET·저장 문구 CONTROL, AI 수정 중→완료 TARGET과 무변경 CONTROL, 저장본 대비 변경/동일 draft로 초기화·동기화·dirty 판정을 대조하고 hook에 외부 request callback이 없는지 검사한다.
- `17E-4` gate: draft 우선 TARGET, source fallback TARGET, preview fallback CONTROL, AI 성공·명시 실패·빈 결과를 가상 request로 실행해 field·원천·`persist: false`·상태 문구를 대조하고 저장/발송 action이 App에 남는지 검사한다.
- `17E-5` gate: 학부모 저장 성공 TARGET, 학생 저장 실패 TARGET, callback 없음 CONTROL을 가상 실행해 record ID·현재 field·현재 발송상태 초기화·다른 audience 보존·재조회 option·입력 불변과 App save 상태 전환을 대조한다.
- `17E-6` gate: 학부모 30분 예약 TARGET, 학생 dry-run 수동 재발송 TARGET, 기본 CONTROL로 record field·delay·실제/테스트 수신 flag·최종/미리보기 문구·재발송 사유·sendTiming과 입력 불변을 대조하고 실제 callback은 App에 남는지 검사한다.
- `17E-7` gate: App wrapper가 13개 legacy helper를 주입하고 domain shell이 model·hook·controller·payload·view를 조합하는지, App wrapper에 action이 남지 않는지, shell에 직접 API/Solapi 경로가 없는지 정적으로 대조한다. 하위 TARGET/CONTROL fixture 전체를 함께 재실행한다.
- `17F-1` gate: record 2건·homework 1건·makeup 1건 TARGET, 빈 CONTROL, `hasDraftChanges=false`이지만 draft를 보존하는 CONTROL로 key 순서·원본 불변·changeCount·저장 차단 여부를 대조한다.
- 현재 실제 다중 원천 저장 순서는 `homeworks bulk+재조회 -> makeup_tasks+재조회 -> lesson_records bulk+재조회`다. 뒤 단계 실패 시 앞 단계는 이미 저장되어 `부분 저장`으로 반환되므로, controller 이동 전 각 단계 성공/실패 조합과 재시도 중복 방지 fixture가 필요하다.
- `17F-2` gate: 명시 homework 변경 TARGET, record의 과제 판정으로 previous/source 두 homework를 함께 갱신하는 TARGET, `not_entered`·학생 없음·record ID 없음 CONTROL을 가상 실행해 변경 순서·status/teacherStatus·checkedAt/updatedAt·dueDate·원본 불변을 대조한다.
- `17F-3` gate: 변경 없음 성공, 3원천 전체 성공, homework 첫 단계 실패, homework 성공 후 makeup 실패, homework+makeup 성공 후 record 실패를 대조한다. 현재는 실패 시 완료 원천 ID를 저장하지 않고 모든 draft를 보존하므로 재시도 시 성공했던 원천도 다시 요청한다. 이 동작은 리팩터링에서 바꾸지 않고 별도 저장 신뢰성 개선 후보로 기록한다.
- `17F-4` gate: 숙제·등원보충·수업기록 전체 성공 TARGET, 변경 없는 CONTROL, 1·2·3단계 각각의 실패 TARGET을 가상 callback으로 실행해 호출 순서·후속 단계 중단·부분 성공 문구·failure callback error를 대조한다. 실제 API·Supabase·React 반영은 controller가 직접 참조하지 않고 App callback으로 주입하는지 정적으로 검사한다.
- `17F-5` gate: 가상 record 2건과 Supabase 재조회 응답으로 endpoint payload·반환 순서·원본 불변을 대조하고, 빈 CONTROL 무호출, Supabase source 불일치, 누락 row, 필드 불일치, 네트워크 실패를 각각 판정한다. React ref/state·localStorage 반영은 App에 남는지 정적으로 검사한다.
- `17F-6` gate: 가상 homework 2건과 역순·추가 row Supabase 응답으로 요청 payload·요청 순서 반환·원본 불변을 대조하고, fingerprint 8개 필드 각각의 불일치, 누락 row, source 불일치, 빈 CONTROL 무호출, 네트워크 실패를 판정한다. App은 검증 결과의 ref/state 반영만 소유하는지 정적으로 검사한다.
- `17F-7` gate: 완료된 기존 task, draft 기존 task, 신규 task, 명시 override 신규 CONTROL을 고정 ID seed·날짜·개별 timestamp로 생성해 기존 ID·상태 승계, `done -> scheduled`, 신규 기본값, spread 우선순위, 입력 불변을 대조한다. source가 다른 동일 학생 CONTROL은 신규 task가 되는지 확인하고 builder에서 시계·API·Supabase 참조가 없는지 검사한다.
- `17F-8` gate: 가상 requested task 2건과 역순·추가 row Supabase 응답으로 request 인자·요청 순서 반환·원본 불변을 대조하고, identity 6개 필드 각각의 불일치, 누락 row, source 불일치, 빈 CONTROL 무호출, 네트워크 실패를 판정한다. 누락 row가 기존 로직상 첫 identity mismatch인 `studentId`로 보고되는 동작도 기능 변경 없이 고정한다.
- `17F-9` gate: 계획 homework와 중복 verified homework, 기존·신규 makeup task, 기존·신규 record를 가상 upsert dependency로 병합해 순서·추가 row 격리·마지막 verified 우선·호출 순서·입력 불변을 대조한다. 중복 record ID의 save-state map과 빈 CONTROL을 판정하고 React setter·ref·localStorage는 App에 남는지 검사한다.
- `17G-1` gate: 가상 수업 A에 record/homework/makeup draft와 저장 필요 메시지를 만든 뒤 수업 B의 편집 종료·빈 draft·빈 메시지 초기 상태, 새 객체 identity, 수업 A 원본 불변을 대조한다. 예약 modal/audit와 Solapi 반영·결과 조회 state는 App에 남고 hook에 API·Supabase·localStorage·알림/Solapi 참조가 없는지 정적으로 검사한다.
- `17G-2` gate: 가상 OS job이 있는 TARGET audit와 빈 CONTROL로 초기값·객체 격리·입력 불변을 대조한다. 수업 전환 시 적용·결과조회 상태, 예약계획 전환 시 적용 상태만 reset하는 기존 effect를 고정하고 OS 조회·취소·예약 반영·결과 reconcile action과 직접 API가 App에 남는지 검사한다. 최신 main에서 제거한 raw Solapi group/message·group cancel 상태는 다시 도입하지 않는다.
- `17G-3` gate: 서로 다른 TARGET/CONTROL 학생으로 comment modal, preparation modal, 편집 memo key, 학생 미리보기 ID를 구성해 초기값·입력 불변을 대조한다. 수업 전환 reset을 새로 추가하지 않으며 draft 생성·최신 record 선택·modal prop 조합·AI/저장/발송 callback은 App에 남고 hook에 effect나 외부 side effect가 없는지 검사한다.
- `17G-4` gate: `LessonJournalDetail` 함수 범위를 추출해 local `useState` 0개, 예약 modal 조회 effect 1개, 남은 async 함수 5개를 정확히 대조한다. 세 local state hook에는 직접 API가 없고 예약 조회·OS job 취소·draft 저장·예약 반영·결과 reconcile은 계속 App에 남는지 검사한다. 최신 main에서 제거한 raw Solapi group/message·group cancel 상태와 API는 다시 도입하지 않는다.
- `17H-1` gate: 적용 중/실패/미저장/알림 없음/수동 시각 없음/예약 시각 경과 후 결과 대기·실패·완료/대상 없음/누락·초과·fingerprint 변경/완전 일치 전 분기를 가상 OS job으로 판정한다. 조기 분기에서는 예상 item builder를 호출하지 않고, 실제 조회·OS job 취소·provider 예약 반영·결과 reconcile action은 App에 남는지 검사한다. raw Solapi group/message UI와 group cancel API는 다시 도입하지 않는다.
- `17H-2` gate: TARGET 학생의 학생 알림 제외, CONTROL 학생의 record fallback+학부모 제외를 함께 구성해 학생별 이전/다음 숙제·보충·시험결과 payload와 parent/student item 순서, deterministic ID/fingerprint, 30분 예약시각을 대조한다. 알림 없음·수동시각 없음 무호출, 수동시각 직접 사용, 기본 0분 CONTROL과 입력 불변도 검사한다.
- `17H-3` gate: 기본·30분 지연·경과·수동 시각 있음/없음·알림 없음 계획, applying/needs/failed/resultDue/draft 예약 적용 상태, 결과조회 대상 0/2건과 loading/handler 없음 TARGET·CONTROL을 가상 입력으로 대조한다. formatter 조기 호출 여부와 App-owned 조회·OS job 취소·예약 반영·결과 reconcile action 4개, 모델의 외부 side effect 부재도 정적으로 검사한다. raw Solapi group/message UI와 group cancel API는 다시 도입하지 않는다.
- `17H-4` gate: 2개 OS job 성공 TARGET과 필드 없는 빈 성공 CONTROL로 배열 identity·문구·`ready`·입력 불변을 대조한다. 단일 OS timeout 요청·실패 catch·effect·setter·OS job 취소 action은 App에 남고, raw Solapi group/message 조회와 group cancel API가 다시 생기지 않는지 검사한다.
- `17H-5` gate: 중복 TARGET OS job과 CONTROL job, `osJobs=null` 실패 상태를 가상 audit로 구성해 교체 순서·상태 유지·객체 identity·입력 불변을 대조한다. 확인창·OS 취소 callback·busy/finally는 App에 남고 모델에 시계·네트워크·React side effect가 없는지 검사한다. raw Solapi group transition과 group cancel API는 다시 도입하지 않는다.
- `17H-6` gate: `LessonJournalDetail` 내부 async 함수가 예약 조회·OS 취소·다중 draft 저장·예약 반영·결과 reconcile 5개인지, 그중 예약 action 4개가 정확히 한 번씩 App에 남는지 검사한다. 예상 item/동기화/제어/OS 조회 응답/OS 취소 전환 5개 모델은 네트워크·시계·React·Supabase/localStorage를 소유하지 않고 reservation hook은 OS audit local state만 소유하는지 함께 대조한다. raw provider group 상태·조회·취소는 0개여야 한다.
- `17I-1` gate: 빈 기본 record, base record, 현재 TARGET draft, identity field patch와 고정 timestamp를 조합해 `empty -> currentDraft ?? base -> identity -> patch -> updated metadata` 우선순위를 대조한다. base fallback·빈 CONTROL과 helper 호출 횟수·입력 불변을 확인하고 편집 guard·현재시각·React setter·저장 메시지는 App에 남는지 검사한다.
- `17I-2` gate: deterministic lesson/student/homework type key와 현재 draft title TARGET, 빈 문자열 draft TARGET, 저장 homework CONTROL, 빈 CONTROL, 최종 row를 대조한다. record ID helper 호출 횟수·입력 불변을 확인하고 편집 guard·React map merge·저장 메시지는 App에 남는지 검사한다.
- `17I-3` gate: 등원보충 TARGET, 원천 ID·날짜·숙제 제목 fallback TARGET, 다음 정규수업 CONTROL, 수업 후 보충 CONTROL로 makeup task·record patch·안내 메시지와 helper 호출 순서·입력 불변을 대조한다. 편집/이전 숙제 guard와 React draft map 추가·삭제, record patch·메시지 setter는 App에 남고 모델에 외부 side effect가 없는지 검사한다.
- `17I-4` gate: 미검사+제목 TARGET, source label fallback TARGET, 숙제 없음 CONTROL, 후속 선택지 없음 CONTROL, 후속 선택지 있음 TARGET으로 patch/field action, helper 호출 순서·조기 종료, 입력 불변을 대조한다. makeup draft 제거와 record patch/field·메시지 React setter는 App에 남고 모델에 외부 side effect가 없는지 검사한다.
- `17I-5` gate: 현재 TARGET record draft/base CONTROL/null/false 선택, TARGET makeup draft 삭제와 CONTROL 보존, 없는/falsy row의 map identity를 대조한다. 입력 map·row identity 불변과 App-owned record ID 생성·React setter, 모델의 외부 side effect 부재를 검사한다.
- `17I-6` gate: assignment status TARGET, 학부모 comment TARGET, 학생 comment CONTROL, 일반 field 빈 문자열 CONTROL로 단일 field patch와 추가 동기화/초기화 field를 대조한다. 편집 guard·전체 record 병합·현재시각·React setter는 App에 남고 builder에 외부 side effect가 없는지 검사한다.
- `17I-7` gate: local draft action 10개와 순수 binding 9개가 `LessonJournalDetail`에 한 번씩 있는지, 현재시각·세 draft map setter·저장 메시지·상위 저장 callback이 App에 남는지 검사한다. 다섯 순수 모델에 React·네트워크·시계·API/localStorage가 없고 전체 async 6개 중 local draft 저장이 1개인지 고정한다.
- `17J-1` gate: 가상 예약 job TARGET, 저장된 학부모·학생 상태 CONTROL, `"없음"`·빈 job 표시 fallback, 기타 target을 대조한다. job 조회→format의 호출 순서, job 우선 시 저장 상태 formatter 미호출, 입력 불변과 selector의 네트워크·시계·React side effect 부재를 검사한다.
- `17J-2` gate: 일반·잘못된 예약시각·미래·경과 예약상태와 빈/내용 없음/확인 필요/실패/발송 중/예약 중/완료/기록됨/draft를 가상 입력으로 판정한다. comment 유무의 버튼 상태와 상태 라벨, 조기 반환 시 normalize 미호출, formatter 호출 순서, 시간 판정 주입과 모델 side effect 부재를 검사한다.
- `17J-3` gate: null, 미래·경과 scheduled, sent/dry_run/send_unconfirmed/pending_send/failed/canceled/draft/unknown job을 가상 입력으로 판정한다. scheduled에서 시각 formatter→경과 판정 호출 순서, 비예약 상태의 dependency 미호출, 입력 불변과 formatter의 시계·네트워크·React side effect 부재를 검사한다.
- `17J-4` gate: 삭제 가능한 notice 4상태, 비 notice CONTROL, 과거·미래·시각 없는 send_unconfirmed, null job을 가상 입력으로 판정한다. 직접 providerMessageId 우선과 중첩 result fallback의 조기 반환·입력 불변을 대조하고 취소 가능·상태 class가 이미 순수 domain 경계인지 함께 검사한다.
- `17J-5` gate: provider 응답의 response groupInfo 2경로, 성공/실패 message list, camel/snake message/group, 이중 result response 3경로, root group/message와 빈 CONTROL을 가상 입력으로 대조한다. 모든 값이 있을 때의 우선순위와 입력 불변, selector의 외부 side effect 부재를 검사한다.
- `17J-6` gate: 전체 TARGET payload, legacy reason/message·학부모 번호·잘못된 날짜 CONTROL, 빈 payload를 가상 입력으로 대조한다. 20개 fingerprint 필드 순서와 nullish fallback, 유효 시각 UTC ISO/잘못된 시각 trim, message/phone normalizer 호출 순서·입력 불변을 검사한다.
- `17J-7` gate: 학생 미기재 TARGET과 학부모 완료 CONTROL payload를 가상 입력으로 대조한다. 학생/학부모 comment·번호 선택, 미기재 때 이전 숙제·보충 안내만 제거하고 다음 숙제 유지, 출결 nullish 기본값, 일정/시험 줄바꿈, helper 호출 순서·입력 불변을 검사한다.
- `17J-8` gate: 문자·숫자·nullish lesson/student/target의 deterministic ID와 inactive 4상태, active 6상태·빈 job을 가상 입력으로 대조한다. 입력 불변과 selector의 외부 side effect 부재, App의 전역/화면 wrapper와 예상 item 연결을 검사한다.
- `17J-9` gate: 8개 순수 파일의 export 함수 13개와 App binding을 대조하고 네트워크·React·현재시각·Supabase/Solapi side effect 부재를 검사한다. 예약 조회·결과 reconcile·OS job 취소·bulk 예약·취소 저장·plan 적용 10개 action과 API/setter가 App에 한 번씩 남고 raw provider group audit는 없는지 고정한다.
- `17K-1` gate: builder의 직접 인자와 record/homework/supplement/test/settings 원천, payload/job 필드, 단일 현재시각, 학부모→학생 호출 순서를 정적으로 고정한다. builder 내부에 API·Supabase·Solapi·React setter·persist/reserve action이 없고 실제 action 3개가 App에 남는지 검사한다.
- `17K-2` gate: 학생 TARGET과 학부모 CONTROL job을 고정 `nowIso`로 생성해 payload/job 전체 shape, 대상별 type·번호, nullish 출결 기본값, helper 호출 순서, snapshot·preview 인자와 입력 불변을 대조한다. App에는 원천 조회·알림 제외 guard·현재시각 생성이 남고 순수 builder에는 외부 side effect가 없는지 검사한다.
- `17K-3` gate: App wrapper의 record ID/record/homework/supplement/test/settings/현재시각 원천과 11개 순수 dependency 주입을 고정한다. wrapper와 builder의 API·setter·persist/reserve 부재, 학부모→학생 호출 순서와 App-owned reserve/cancel/plan action 3개가 한 번씩 남는지 검사한다.
- `17J-9` gate: 8개 순수 파일의 export 함수 13개와 App binding을 대조하고 네트워크·React·현재시각·Supabase/Solapi side effect 부재를 검사한다. 예약 조회·결과 reconcile·OS job 취소·bulk 예약·취소 저장·plan 적용 10개 action과 API/setter가 App에 한 번씩 남고 raw provider group audit는 없는지 고정한다.
- `17I-7` gate: local draft action 10개와 순수 binding 9개가 `LessonJournalDetail`에 한 번씩 있는지, 현재시각·세 draft map setter·저장 메시지·상위 저장 callback이 App에 남는지 검사한다. 다섯 순수 모델에 React·네트워크·시계·API/localStorage가 없고 전체 async 5개 중 local draft 저장이 1개인지 고정한다.
- 현재 사람 gate는 0건이다. 이미 완료한 11B 실제 예약·취소 검수를 반복하지 않는다.
- recipient·notificationType·scheduledAt·message·fingerprint 또는 reserve/cancel 상태 계약이 바뀌지 않는 한 정적 fixture로 계속 판정한다.
- 학생 포털 실제 쓰기와 Solapi 특강 템플릿 검수는 사용자 지시로 목록에서 제거됐고, 교사 bearer/Storage 소유권 보안은 구현·배포 검증 완료다.
