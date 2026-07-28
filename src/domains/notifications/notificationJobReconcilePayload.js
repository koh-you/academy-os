export function createNotificationJobReconcilePayload({
  date = "",
  lessonId = "",
  notificationJobIds = [],
  scheduledFrom = "",
  scheduledTo = ""
} = {}) {
  return {
    date,
    lessonId,
    notificationJobIds,
    scheduledFrom,
    scheduledTo,
    limit: 500
  };
}
