export function createLessonNotificationRecordStatusRows({
  createRecordId,
  getRecord,
  lesson,
  statusText,
  students,
  updatedAt
}) {
  return students.map((student) => {
    const recordId = createRecordId(lesson.lessonId, student.studentId);
    const record = getRecord(lesson, student);
    return {
      ...record,
      lessonStudentRecordId: recordId,
      lessonId: lesson.lessonId,
      studentId: student.studentId,
      teacherCommentSendStatus: record.notificationMutedParent ? "알림 제외" : statusText,
      studentCommentSendStatus: record.notificationMutedStudent ? "알림 제외" : statusText,
      updatedBy: "instructor_owner_001",
      updatedAt
    };
  });
}
