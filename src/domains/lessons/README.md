# Lessons Domain

Lesson Hub의 중심 도메인입니다.

MVP 기준:

- 날짜별 수업 목록을 보여줍니다.
- 수업을 클릭하면 해당 반 학생 목록을 보여줍니다.
- `LessonStudentRecord`가 출결, 숙제 상태, 강사 코멘트의 원천입니다.
- `lessonCalendarModel.js`는 수업 유형 필터, 월별 건수, 날짜별 정렬과 pill 표시값만 계산하며 저장 side effect를 갖지 않습니다.
- `LessonCalendarView.jsx`는 계산된 달력 모델을 그리고 App이 주입한 탐색 callback만 호출합니다.
- `lessonModalStudentModel.js`는 수업 등록·수정 모달의 재원 학생 검색과 학년 그룹만 계산합니다.
- `lessonModalDraftModel.js`는 수업 등록·수정 모달의 입력 validation과 submit payload만 계산하며 API나 React 저장 상태를 소유하지 않습니다.
- `lessonModalDraftTransitions.js`는 반 템플릿·수업 유형·날짜 변경에 따른 local draft patch와 색상 선택지만 계산합니다.
- `lessonModalInitialDraft.js`는 최초 입력값과 mount 시 한 번 생성할 수업·휴강 보충 ID 인자를 계산합니다. 실제 시간 기반 ID source는 App이 주입합니다.
- `lessonModalSaveState.js`는 모달 local 저장 상태의 초기 안내, 실패 후 dirty 복귀, 저장 중·완료·실패 표시값만 계산합니다.
- `LessonModal.jsx`는 수업 등록·수정의 local React draft, validation, 저장 진행 표시와 controlled component 조립만 소유합니다. App의 순수 날짜·색상 resolver와 저장 `onSubmit`을 주입받으며 API·Supabase·localStorage를 직접 사용하지 않습니다.
- `LessonModalStudentPicker.jsx`는 `LessonModal`이 소유한 검색·선택값과 callback으로 학생 검색, 학년 그룹, 선택 chip만 렌더링합니다.
- `LessonModalClosurePanel.jsx`는 `LessonModal`이 계산한 기존 명단·수업기록·알림 상태와 local callback으로 휴강 안내와 선택형 보충 입력만 렌더링합니다.
- `LessonModalBasics.jsx`는 `LessonModal`이 소유한 수업 유형·반 템플릿·색상·이름·날짜·시간 값과 callback을 렌더링하며 휴강 panel의 DOM 순서를 children으로 보존합니다.
- `LessonModalActions.jsx`는 `LessonModal`이 소유한 저장 표시 상태와 submit·close callback으로 저장 안내와 하단 action만 렌더링합니다.
- `lessonCalendarKeyboardModel.js`는 편집 대상·수업일지 열림 예외와 달력 keyboard action만 순수하게 판정합니다.
- `useLessonCalendarKeyboardNavigation.js`는 window keydown 등록·해제, 기본 동작 차단과 기존 달력 callback dispatch만 소유합니다.
- `lessonModalSaveSnapshot.js`는 수업 modal 저장 후 Supabase 재조회 값을 비교할 필드·시간·명단·학생별 특강 일정을 순수 정규화합니다.
- `lessonModalPayloadBuilders.js`는 신규·수정 수업과 선택형 휴강 보충의 저장 payload를 주입된 요일·색상 resolver로 순수 조립합니다.
- `lessonModalSaveVerification.js`는 Supabase 재조회 결과에서 예상 수업을 찾아 snapshot 일치 여부를 순수 판정합니다.
- `useLessonJournalDraftController.js`는 수업일지 local draft 조작과 저장 성공/실패 전이를 소유합니다. App 저장 callback을 주입받으며 요청 lesson·draft revision이 같은 성공에서만 draft를 비웁니다. 저장 중 후속 입력과 다른 수업의 draft는 보존하고 API·Supabase·localStorage는 직접 사용하지 않습니다.
- `lessonJournalEffectAdapter.js`는 수업일지의 persistence callback과 provider/transport callback 표면을 분리해 App handler 참조만 조립합니다. API·Storage·React state를 소유하지 않으며 실제 effect는 App에 남습니다.
