# Lessons Domain

Lesson Hub의 중심 도메인입니다.

MVP 기준:

- 날짜별 수업 목록을 보여줍니다.
- 수업을 클릭하면 해당 반 학생 목록을 보여줍니다.
- `LessonStudentRecord`가 출결, 숙제 상태, 강사 코멘트의 원천입니다.
- `lessonCalendarModel.js`는 수업 유형 필터, 월별 건수, 날짜별 정렬과 pill 표시값만 계산하며 저장 side effect를 갖지 않습니다.
