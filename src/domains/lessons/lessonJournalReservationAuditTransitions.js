export function applyCanceledLessonJournalReservationJob({
  currentAudit,
  notificationJob
}) {
  return {
    ...currentAudit,
    message: "예약 1건을 취소했습니다.",
    osJobs: Array.isArray(currentAudit.osJobs)
      ? [
          notificationJob,
          ...currentAudit.osJobs.filter(
            (item) =>
              item.notificationJobId !== notificationJob.notificationJobId
          )
        ]
      : currentAudit.osJobs,
    state: currentAudit.state === "idle" ? "ready" : currentAudit.state
  };
}
