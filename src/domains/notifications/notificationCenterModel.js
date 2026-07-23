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
  getProviderReference,
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
  const solapiResultTargets = managedNotificationJobs.filter((job) =>
    job.provider === "solapi" &&
    getProviderReference(job) &&
    ["scheduled", "send_unconfirmed"].includes(job.status)
  );
  const pastScheduledJobs = managedNotificationJobs.filter((job) =>
    canCancelJob(job) &&
    job.scheduledAt &&
    isSchedulePast(job.scheduledAt)
  );
  const scheduledJobs = managedNotificationJobs.filter((job) =>
    canCancelJob(job) &&
    (!job.scheduledAt || !isSchedulePast(job.scheduledAt))
  );
  const sentJobs = managedNotificationJobs.filter((job) => job.status === "sent");
  const pendingJobs = managedNotificationJobs
    .filter((job) => job.status === "send_unconfirmed")
    .concat(pastScheduledJobs);
  const failedJobs = managedNotificationJobs.filter((job) => job.status === "failed");
  const archivedJobs = managedNotificationJobs.filter((job) =>
    job.status === "draft" || job.status === "dry_run" || job.status === "canceled"
  );
  const filteredNotificationJobs = {
    all: managedNotificationJobs.slice(0, 40),
    scheduled: scheduledJobs,
    sent: sentJobs,
    pending: pendingJobs,
    failed: failedJobs,
    draft: archivedJobs
  }[jobFilter] ?? managedNotificationJobs.slice(0, 40);

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
