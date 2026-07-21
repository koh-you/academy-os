export function persistFailedNotificationJobRequest({
  errorMessage,
  notificationJob,
  onNotificationJob = () => {},
  request,
  now = () => new Date().toISOString()
} = {}) {
  const failedJob = {
    ...notificationJob,
    error: errorMessage,
    provider: "academy-os",
    status: "failed",
    updatedAt: now()
  };
  onNotificationJob(failedJob);
  request("/api/notification-jobs", { notificationJob: failedJob }).catch((persistError) => console.error(persistError));
  return failedJob;
}

export async function reserveNotificationJobRequest({
  notificationJob,
  reason = "알림톡 예약",
  onNotificationJob = () => {},
  request,
  now = () => new Date().toISOString()
} = {}) {
  try {
    const result = await request("/api/notification-jobs/reserve", { notificationJob, reason });
    if (result.notificationJob) onNotificationJob(result.notificationJob);
    return result.notificationJob ?? notificationJob;
  } catch (error) {
    return persistFailedNotificationJobRequest({
      errorMessage: `Solapi 예약 실패: ${error.message}`,
      notificationJob,
      onNotificationJob,
      request,
      now
    });
  }
}

export async function cancelNotificationJobRequest({
  notificationJob,
  reason = "선생님 예약 취소",
  onNotificationJob = () => {},
  request
} = {}) {
  if (!notificationJob?.notificationJobId) throw new Error("취소할 알림톡 예약 ID가 없습니다.");
  const result = await request("/api/notification-jobs/cancel", {
    notificationJobId: notificationJob.notificationJobId,
    reason
  });
  if (result.notificationJob) onNotificationJob(result.notificationJob);
  return result;
}

export async function cancelNotificationJobsRequest({
  cancelNotificationJob,
  notificationJobs = [],
  reason = "알림톡 예약 취소"
} = {}) {
  if (notificationJobs.length === 0) return [];
  const results = await Promise.all(notificationJobs.map((job) => cancelNotificationJob(job, reason)));
  return results.map((result) => result.notificationJob).filter(Boolean);
}
