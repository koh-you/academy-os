export function createLessonRetestStatusPayload(record = {}) {
  return {
    lessonId: record.lessonId,
    lessonStudentRecordId: record.lessonStudentRecordId,
    studentId: record.studentId,
    needsRetest: Boolean(record.needsRetest),
    updatedBy: record.updatedBy
  };
}
