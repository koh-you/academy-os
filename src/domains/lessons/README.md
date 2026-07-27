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
