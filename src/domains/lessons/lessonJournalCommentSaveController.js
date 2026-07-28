export async function saveLessonJournalCommentDraft({
  createEmptyRecord,
  createRecordId,
  draftComment = "",
  field,
  lesson,
  now = () => new Date().toISOString(),
  record = {},
  saveRecord,
  student,
  updatedBy = "instructor_owner_001"
}) {
  const recordId = createRecordId(lesson.lessonId, student.studentId);
  const recordToSave = {
    ...createEmptyRecord(lesson, student),
    ...record,
    lessonStudentRecordId: recordId,
    lessonId: lesson.lessonId,
    studentId: student.studentId,
    [field]: draftComment,
    ...(field === "teacherComment" ? { teacherCommentSendStatus: "" } : {}),
    ...(field === "studentComment" ? { studentCommentSendStatus: "" } : {}),
    updatedBy,
    updatedAt: now()
  };
  const saved = await saveRecord?.(
    recordId,
    lesson,
    student,
    recordToSave,
    {
      skipNotificationRefresh: true,
      skipRelatedHomeworks: true,
      verifyFields: [field]
    }
  );

  return {
    ok: saved !== false,
    recordId,
    recordToSave
  };
}
