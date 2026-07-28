export function createLessonJournalRecordDraft({
  baseRecord,
  createEmptyRecord,
  createRecordId,
  currentDrafts = {},
  lesson,
  patch = {},
  student,
  updatedAt,
  updatedBy = "instructor_owner_001"
}) {
  const recordId = createRecordId(lesson.lessonId, student.studentId);
  const record = {
    ...createEmptyRecord(lesson, student),
    ...(currentDrafts[recordId] ?? baseRecord ?? {}),
    lessonStudentRecordId: recordId,
    lessonId: lesson.lessonId,
    studentId: student.studentId,
    ...patch,
    updatedBy,
    updatedAt
  };

  return {
    record,
    recordId
  };
}

export function createLessonJournalRecordFieldPatch({
  field,
  value
}) {
  return {
    [field]: value,
    ...(field === "assignmentStatus" ? { incompleteHomework: value } : {}),
    ...(field === "teacherComment" ? { teacherCommentSendStatus: "" } : {}),
    ...(field === "studentComment" ? { studentCommentSendStatus: "" } : {})
  };
}
