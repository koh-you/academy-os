export function createLessonJournalReservationAuditResult(result = {}) {
  const osJobs = result.notificationJobs ?? [];
  return {
    message: `OS 예약 ${osJobs.length}건`,
    osJobs,
    state: "ready"
  };
}
