const notificationHistoryFilterLabels = {
  all: "최근 알림",
  scheduled: "예약",
  sent: "발송 완료",
  pending: "확인 필요",
  failed: "실패",
  draft: "정리함"
};

export function createNotificationHistoryViewModel({
  canCancelJob,
  getDateString,
  getProviderReference,
  historyDate = "",
  isSchedulePast,
  jobFilter = "all",
  localNoticeJobs = [],
  notificationJobs = []
}) {
  const persistedNotificationJobIds = new Set(notificationJobs.map((job) => job.notificationJobId));
  const mergedNotificationJobs = [
    ...localNoticeJobs.filter((job) => !persistedNotificationJobIds.has(job.notificationJobId)),
    ...notificationJobs
  ];
  const managedNotificationJobs = mergedNotificationJobs;
  const historyJobs = historyDate
    ? managedNotificationJobs.filter((job) => {
        const dateSource = job.scheduledAt || job.createdAt;
        return dateSource && getDateString(new Date(dateSource)) === historyDate;
      })
    : managedNotificationJobs;
  const solapiResultTargets = managedNotificationJobs.filter((job) =>
    job.provider === "solapi" &&
    getProviderReference(job) &&
    ["scheduled", "send_unconfirmed"].includes(job.status)
  );
  const pastScheduledJobs = historyJobs.filter((job) =>
    canCancelJob(job) &&
    job.scheduledAt &&
    isSchedulePast(job.scheduledAt)
  );
  const scheduledJobs = historyJobs.filter((job) =>
    canCancelJob(job) &&
    (!job.scheduledAt || !isSchedulePast(job.scheduledAt))
  );
  const sentJobs = historyJobs.filter((job) => job.status === "sent");
  const pendingJobs = historyJobs
    .filter((job) => job.status === "send_unconfirmed")
    .concat(pastScheduledJobs);
  const failedJobs = historyJobs.filter((job) => job.status === "failed");
  const archivedJobs = historyJobs.filter((job) =>
    job.status === "draft" || job.status === "dry_run" || job.status === "canceled"
  );
  const filteredNotificationJobs = {
    all: historyJobs.slice(0, 40),
    scheduled: scheduledJobs,
    sent: sentJobs,
    pending: pendingJobs,
    failed: failedJobs,
    draft: archivedJobs
  }[jobFilter] ?? historyJobs.slice(0, 40);

  return {
    archivedJobs,
    failedJobs,
    filteredNotificationJobs,
    filterLabel: notificationHistoryFilterLabels[jobFilter] ?? notificationHistoryFilterLabels.all,
    managedNotificationJobs,
    pastScheduledJobs,
    pendingJobs,
    scheduledJobs,
    sentJobs,
    solapiResultTargets
  };
}
