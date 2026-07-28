export function createLessonNotificationRecordStatusPayload(record = {}) {
  return {
    lessonId: record.lessonId,
    lessonStudentRecordId: record.lessonStudentRecordId,
    studentId: record.studentId,
    teacherCommentSendStatus: record.teacherCommentSendStatus,
    studentCommentSendStatus: record.studentCommentSendStatus,
    updatedBy: record.updatedBy
  };
}
