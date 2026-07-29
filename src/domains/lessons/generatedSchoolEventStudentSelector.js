export function createGeneratedSchoolEventStudentSelector({
  isActiveStudent,
  normalizeGradeLabel,
  schoolNamesMatch
}) {
  return function getStudentsForSchoolCalendarEvent(
    students = [],
    event = {}
  ) {
    const eventGrade = normalizeGradeLabel(event.grade || "");
    return students.filter((student) => {
      if (!isActiveStudent(student)) return false;
      const studentSchool = student.schoolName || "";
      const eventSchool = event.schoolName || "";
      if (
        (studentSchool || eventSchool) &&
        !schoolNamesMatch(
          studentSchool,
          eventSchool,
          { allowBlank: false }
        )
      ) {
        return false;
      }
      if (!eventGrade) return true;
      return (
        normalizeGradeLabel(student.grade || "") ===
        eventGrade
      );
    });
  };
}
