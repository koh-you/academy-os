const deletableNotificationJobStatuses = new Set([
  "failed",
  "draft",
  "dry_run",
  "canceled"
]);

export function canDeleteNotificationJobForDisplay({
  isSchedulePast,
  job
}) {
  const isNoticeDraft =
    String(job?.notificationType ?? "").startsWith("notice_") &&
    deletableNotificationJobStatuses.has(job?.status);
  const isPastUnconfirmed =
    job?.status === "send_unconfirmed" &&
    Boolean(job?.scheduledAt) &&
    isSchedulePast(job.scheduledAt, 0);
  return isNoticeDraft || isPastUnconfirmed;
}

export function getNotificationJobProviderReferenceForDisplay({
  getProviderReference,
  job = {}
}) {
  return job.providerMessageId || getProviderReference(job.result);
}
