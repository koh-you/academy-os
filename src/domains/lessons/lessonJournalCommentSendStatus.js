export function getLessonJournalEffectiveCommentSendStatus({
  formatJobStatus,
  getDisplayStatus,
  getReservationStatus,
  record,
  student,
  target
}) {
  const jobStatus = formatJobStatus(getReservationStatus(student, target));
  if (jobStatus && jobStatus !== "없음") return jobStatus;
  const persistedStatus =
    target === "student"
      ? record.studentCommentSendStatus
      : record.teacherCommentSendStatus;
  return getDisplayStatus(persistedStatus);
}
