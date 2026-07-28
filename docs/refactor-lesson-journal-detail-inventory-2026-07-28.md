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
23. 다음: comment composer의 audience·예약 계획·안전 상태 계산을 순수 view model로 분리
24. 다중 원천 저장은 TARGET/CONTROL·부분 성공 fixture 뒤 주입형 controller로 분리
25. `notification_jobs`/Solapi 예약·취소·발송결과 orchestration은 App callback에 남기고 순수 표시·판정만 분리

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
- 현재 사람 gate는 0건이다. 이미 완료한 11B 실제 예약·취소 검수를 반복하지 않는다.
- recipient·notificationType·scheduledAt·message·fingerprint 또는 reserve/cancel 상태 계약이 바뀌지 않는 한 정적 fixture로 계속 판정한다.
- 학생 포털 실제 쓰기와 Solapi 특강 템플릿 검수는 사용자 지시로 목록에서 제거됐고, 교사 bearer/Storage 소유권 보안은 구현·배포 검증 완료다.
