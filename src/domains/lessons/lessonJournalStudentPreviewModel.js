export function createLessonJournalStudentPreviewModel({
  studentPreviewId = "",
  students = []
} = {}) {
  const isOpen = Boolean(studentPreviewId);

  return {
    isOpen,
    previewStudents: isOpen
      ? students.filter((student) => student.studentId === studentPreviewId)
      : []
  };
}
