export function upsertNotificationJobList(currentJobs = [], notificationJob) {
  return [
    notificationJob,
    ...currentJobs.filter(
      (job) => job.notificationJobId !== notificationJob.notificationJobId
    )
  ];
}

export function selectValidNotificationJobs(notificationJobs = []) {
  return notificationJobs.filter((job) => job?.notificationJobId);
}

export function mergeNotificationJobLists(currentJobs = [], nextJobs = []) {
  const nextJobIds = new Set(nextJobs.map((job) => job.notificationJobId));
  return [
    ...nextJobs,
    ...currentJobs.filter((job) => !nextJobIds.has(job.notificationJobId))
  ];
}

export function mergeLessonNotificationJobLists({
  canceledJobs = [],
  currentJobs = [],
  isActiveJob = () => false,
  lessonId = "",
  nextJobs = []
} = {}) {
  const replacedJobIds = new Set([
    ...nextJobs.map((job) => job.notificationJobId),
    ...canceledJobs.map((job) => job.notificationJobId)
  ]);
  return [
    ...nextJobs,
    ...canceledJobs,
    ...currentJobs.filter(
      (job) =>
        !replacedJobIds.has(job.notificationJobId) &&
        !(job.lessonId === lessonId && isActiveJob(job))
    )
  ];
}

export function replaceNotificationJobListRows(
  currentJobs = [],
  replacementJobs = []
) {
  return currentJobs.map(
    (job) =>
      replacementJobs.find(
        (replacementJob) =>
          replacementJob.notificationJobId === job.notificationJobId
      ) ?? job
  );
}
