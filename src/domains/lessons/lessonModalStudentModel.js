export const lessonModalStudentGradeOrder = ["고3", "고2", "고1", "중3", "중2", "중1"];

export function createLessonModalStudentSelectionModel({
  isActiveStudent,
  search = "",
  students = []
}) {
  const activeStudents = students.filter(isActiveStudent);
  const normalizedSearch = search.toLowerCase();
  const filteredStudents = activeStudents.filter((student) =>
    [student.name, student.grade, student.schoolName]
      .join(" ")
      .toLowerCase()
      .includes(normalizedSearch)
  );
  const studentGrades = Array.from(
    new Set(filteredStudents.map((student) => student.grade || "학년 미입력"))
  );
  const orderedStudentGrades = [
    ...lessonModalStudentGradeOrder.filter((grade) => studentGrades.includes(grade)),
    ...studentGrades
      .filter((grade) => !lessonModalStudentGradeOrder.includes(grade))
      .sort()
  ];
  const groupedStudents = orderedStudentGrades
    .map((grade) => ({
      grade,
      students: filteredStudents.filter(
        (student) => (student.grade || "학년 미입력") === grade
      )
    }))
    .filter((group) => group.students.length > 0);

  return {
    activeStudents,
    filteredStudents,
    groupedStudents
  };
}
