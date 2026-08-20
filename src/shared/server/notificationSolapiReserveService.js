// @ts-check

/**
 * @param {Object} deps
 * @param {(jobs: Object[]) => Promise<*>} deps.createLessonNotificationDispatchContext
 * @param {(job: Object, context: *) => { action: string, job: Object }} deps.refreshLessonCommentJobBeforeSend
 * @param {(notificationJobId: string) => Promise<{ notificationJob: Object|null, source: string }>} deps.getNotificationJob
 * @param {(notificationJob: Object) => Promise<{ notificationJob: Object }>} deps.upsertNotificationJob
 * @param {(existingJob: Object, nextJob: Object) => boolean} deps.isSameSolapiReservation
 * @param {(existingJob: Object, nextJob: Object, now?: Date) => boolean} deps.isSameSolapiReservationPending
 * @param {(result: *) => string} deps.getProviderMessageId
 * @param {(groupId: string) => Promise<*>} deps.cancelSolapiReservationGroup
 * @param {(job: Object, options: { forceDryRun?: boolean }) => Promise<*>} deps.sendScheduledNotificationJobToSolapi
 * @param {Set<string>} deps.lessonCommentNotificationTypes
 */
export function createNotificationSolapiReserveService({
  createLessonNotificationDispatchContext,
  refreshLessonCommentJobBeforeSend,
  getNotificationJob,
  upsertNotificationJob,
  isSameSolapiReservation,
  isSameSolapiReservationPending,
  getProviderMessageId,
  cancelSolapiReservationGroup,
  sendScheduledNotificationJobToSolapi,
  lessonCommentNotificationTypes
}) {
  async function reserveNotificationJobInSolapi(
    job,
    { dispatchContext = null, forceDryRun = false, reason = "Solapi 예약 갱신" } = {}
  ) {
    if (!job?.notificationJobId) throw new Error("예약할 알림톡 job ID가 필요합니다.");
    const context = lessonCommentNotificationTypes.has(job.notificationType)
      ? dispatchContext ?? await createLessonNotificationDispatchContext([job])
      : null;
    const prepared = refreshLessonCommentJobBeforeSend(job, context);
    if (prepared.action === "cancel") {
      await upsertNotificationJob(prepared.job);
      return { notificationJob: prepared.job, reserved: false, source: "supabase" };
    }

    const nextJob = prepared.job;
    const existing = await getNotificationJob(nextJob.notificationJobId);
    const existingJob = existing.notificationJob;
    if (isSameSolapiReservation(existingJob, nextJob) || isSameSolapiReservationPending(existingJob, nextJob)) {
      return { notificationJob: existingJob, reserved: false, reused: true, source: existing.source };
    }

    const existingProviderGroupId =
      existingJob?.provider === "solapi"
        ? existingJob.providerMessageId || getProviderMessageId(existingJob.result)
        : "";
    let solapiCancellation = null;
    if (existingProviderGroupId && existingJob?.status === "scheduled") {
      solapiCancellation = await cancelSolapiReservationGroup(existingProviderGroupId);
    }

    const reservationStartedAt = new Date().toISOString();
    const reservingJob = {
      ...nextJob,
      provider: "academy-os-reserving",
      result: {
        ...(nextJob.result && typeof nextJob.result === "object" ? nextJob.result : {}),
        reservationPending: true,
        reservationReason: reason,
        reservationStartedAt
      },
      status: "scheduled",
      updatedAt: reservationStartedAt
    };
    await upsertNotificationJob(reservingJob);

    const result = await sendScheduledNotificationJobToSolapi(reservingJob, { forceDryRun });
    const status = result?.dryRun ? "dry_run" : "scheduled";
    const providerPreviewBody = "";
    const latest = await getNotificationJob(nextJob.notificationJobId);
    if (latest.notificationJob?.status === "canceled") {
      const reservedGroupId = getProviderMessageId(result);
      let canceledReservedGroup = null;
      if (reservedGroupId && !result?.dryRun) {
        canceledReservedGroup = await cancelSolapiReservationGroup(reservedGroupId);
      }
      const canceledJob = {
        ...latest.notificationJob,
        provider: reservedGroupId ? "solapi" : latest.notificationJob.provider,
        providerMessageId: reservedGroupId || latest.notificationJob.providerMessageId || "",
        result: {
          ...(latest.notificationJob.result && typeof latest.notificationJob.result === "object" ? latest.notificationJob.result : {}),
          canceledReservedGroup,
          reservationCanceledAfterTeacherCancel: true
        }
      };
      await upsertNotificationJob(canceledJob);
      return { notificationJob: canceledJob, reserved: false, canceledAfterReserve: true, source: "solapi" };
    }
    const updatedJob = {
      ...reservingJob,
      error: "",
      previewBody: providerPreviewBody || reservingJob.previewBody,
      payload: {
        ...(reservingJob.payload ?? {}),
        scheduledDate: reservingJob.scheduledAt,
        sendMode: "scheduled"
      },
      provider: "solapi",
      providerMessageId: getProviderMessageId(result),
      result: {
        ...(nextJob.result && typeof nextJob.result === "object" ? nextJob.result : {}),
        ...(result && typeof result === "object" ? result : {}),
        reservationPending: false,
        reservedAt: new Date().toISOString(),
        reservationReason: reason
      },
      status,
      updatedAt: new Date().toISOString()
    };
    await upsertNotificationJob(updatedJob);
    return {
      notificationJob: updatedJob,
      reserved: status === "scheduled",
      solapiCancellation,
      source: "solapi"
    };
  }

  async function reserveNotificationJobsInSolapi(
    jobs = [],
    { concurrency = 4, forceDryRun = false, reason = "Solapi 일괄 예약 갱신" } = {}
  ) {
    const requestedJobs = Array.isArray(jobs) ? jobs.filter((job) => job?.notificationJobId) : [];
    if (requestedJobs.length === 0) {
      return { failedCount: 0, notificationJobs: [], reservedCount: 0, reusedCount: 0, results: [] };
    }
    const contextJobs = requestedJobs.filter((job) => lessonCommentNotificationTypes.has(job.notificationType));
    const dispatchContext = contextJobs.length > 0
      ? await createLessonNotificationDispatchContext(contextJobs)
      : null;
    const results = new Array(requestedJobs.length);
    let cursor = 0;
    const workerCount = Math.max(1, Math.min(6, Number(concurrency) || 4, requestedJobs.length));
    await Promise.all(Array.from({ length: workerCount }, async () => {
      while (cursor < requestedJobs.length) {
        const index = cursor;
        cursor += 1;
        try {
          results[index] = await reserveNotificationJobInSolapi(requestedJobs[index], {
            dispatchContext,
            forceDryRun,
            reason
          });
        } catch (error) {
          const failedJob = {
            ...requestedJobs[index],
            error: error.message,
            provider: "academy-os",
            status: "failed",
            updatedAt: new Date().toISOString()
          };
          await upsertNotificationJob(failedJob);
          results[index] = {
            error: error.message,
            notificationJob: failedJob,
            reserved: false,
            source: "supabase"
          };
        }
      }
    }));
    const notificationJobs = results.map((result) => result.notificationJob).filter(Boolean);
    return {
      failedCount: notificationJobs.filter((job) => job.status === "failed").length,
      notificationJobs,
      reservedCount: results.filter((result) => result.reserved).length,
      reusedCount: results.filter((result) => result.reused).length,
      results
    };
  }

  return Object.freeze({ reserveNotificationJobInSolapi, reserveNotificationJobsInSolapi });
}
