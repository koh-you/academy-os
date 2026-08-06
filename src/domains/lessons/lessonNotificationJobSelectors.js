const inactiveLessonNotificationJobStatuses = new Set([
  "sent",
  "dry_run",
  "failed",
  "canceled"
]);
const lessonCommentNotificationTypes = new Set([
  "parent_comment",
  "student_comment"
]);

export function createLessonNotificationJobId(
  lessonId,
  studentId,
  target
) {
  return `lesson_comment_${lessonId}_${studentId}_${target}`;
}

export function isActiveNotificationJobStatus(job = {}) {
  return !inactiveLessonNotificationJobStatuses.has(job.status);
}

export function isLessonCommentNotificationJob(job = {}) {
  return lessonCommentNotificationTypes.has(job.notificationType);
}

export function isLessonRecordNotificationMuted(record, target) {
  return target === "student"
    ? Boolean(record?.notificationMutedStudent)
    : Boolean(record?.notificationMutedParent);
}

export function selectLessonStudentRecord({
  createEmptyRecord,
  findRecord,
  lesson,
  records,
  student
}) {
  return findRecord(records, lesson, student) ?? createEmptyRecord(lesson, student);
}
