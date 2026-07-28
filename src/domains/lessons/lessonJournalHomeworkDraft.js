export function createLessonJournalHomeworkDraftKey({
  createRecordId,
  homeworkType,
  lessonId,
  studentId
}) {
  return `${createRecordId(lessonId, studentId)}:${homeworkType}`;
}

export function getLessonJournalHomeworkDraftTitle({
  draft,
  homework
}) {
  return draft?.title ?? homework?.title ?? "";
}

export function createLessonJournalHomeworkDraft({
  homeworkType,
  key,
  studentId,
  title
}) {
  return {
    homeworkType,
    key,
    studentId,
    title
  };
}
