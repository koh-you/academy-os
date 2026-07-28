export function upsertNotificationJobList(currentJobs = [], notificationJob) {
  return [
    notificationJob,
    ...currentJobs.filter(
      (job) => job.notificationJobId !== notificationJob.notificationJobId
    )
  ];
}
