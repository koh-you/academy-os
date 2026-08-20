// @ts-check
import crypto from "node:crypto";

/**
 * @param {Object} deps
 * @param {(options: Object) => Promise<{ notificationJobs: Object[], source: string }>} deps.listNotificationDispatchCandidates
 * @param {Set<string>} deps.dispatchableNotificationStatuses
 * @param {(jobs: Object[]) => Promise<*>} deps.createLessonNotificationDispatchContext
 * @param {(job: Object, claimId: string) => Promise<{ notificationJob: Object|null }>} deps.claimNotificationJob
 * @param {(job: Object, context: *) => { action: string, job: Object }} deps.refreshLessonCommentJobBeforeSend
 * @param {(job: Object, options: { forceDryRun?: boolean }) => Promise<*>} deps.sendNotificationJob
 * @param {(result: *) => string} deps.getProviderMessageId
 * @param {(notificationJob: Object) => Promise<{ notificationJob: Object }>} deps.upsertNotificationJob
 * @param {() => { dryRun: boolean }} deps.getNotificationStatus
 * @param {(options: Object) => Promise<*>} deps.reconcileDueSolapiNotificationJobs
 */
export function createNotificationSolapiDispatchService({
  listNotificationDispatchCandidates,
  dispatchableNotificationStatuses,
  createLessonNotificationDispatchContext,
  claimNotificationJob,
  refreshLessonCommentJobBeforeSend,
  sendNotificationJob,
  getProviderMessageId,
  upsertNotificationJob,
  getNotificationStatus,
  reconcileDueSolapiNotificationJobs
}) {
  function isNoticeNotificationType(type = "") {
    return type === "notice_parent" || type === "notice_student";
  }

  function isOsScheduledNotificationJob(job) {
    if (job.provider === "solapi") return false;
    if (job.provider === "academy-os-reserving" || job.result?.reservationPending) return false;
    if (job.payload?.osScheduled === true) return true;
    return (
      isNoticeNotificationType(job.notificationType) &&
      job.provider === "academy-os" &&
      job.payload?.sendMode === "scheduled"
    );
  }

  function isStaleDispatchClaim(job, nowTime) {
    if (job.provider !== "academy-os-dispatching") return false;
    const updatedTime = new Date(job.updatedAt || job.createdAt || 0).getTime();
    return Number.isFinite(updatedTime) && nowTime - updatedTime > 10 * 60 * 1000;
  }

  async function dispatchDueNotificationJobs({
    allowManualStatuses = false,
    forceDryRun = false,
    limit = 20,
    now = new Date().toISOString()
  } = {}) {
    const listed = await listNotificationDispatchCandidates({
      allowManualStatuses,
      limit: 1000,
      now
    });
    const nowTime = new Date(now).getTime();
    if (Number.isNaN(nowTime)) throw new Error("now must be a valid date string.");

    const jobs = (listed.notificationJobs ?? [])
      .filter((job) => {
        if (allowManualStatuses && dispatchableNotificationStatuses.has(job.status)) return true;
        if (job.status !== "scheduled" || !isOsScheduledNotificationJob(job)) return false;
        return job.provider !== "academy-os-dispatching" || isStaleDispatchClaim(job, nowTime);
      })
      .filter((job) => {
        if (!job.scheduledAt) return true;
        const scheduledTime = new Date(job.scheduledAt).getTime();
        return !Number.isNaN(scheduledTime) && scheduledTime <= nowTime;
      })
      .slice(0, Math.max(1, Number(limit) || 20));
    const lessonNotificationContext = await createLessonNotificationDispatchContext(jobs);

    const processed = [];
    for (const job of jobs) {
      const shouldClaim = job.status === "scheduled" && isOsScheduledNotificationJob(job);
      const claimId = `dispatch_${Date.now()}_${crypto.randomBytes(6).toString("hex")}`;
      const claim = shouldClaim ? await claimNotificationJob(job, claimId) : { notificationJob: job };
      const claimedJob = claim.notificationJob;
      if (!claimedJob) {
        processed.push({ notificationJobId: job.notificationJobId, status: "skipped_claimed" });
        continue;
      }

      try {
        const prepared = refreshLessonCommentJobBeforeSend(claimedJob, lessonNotificationContext);
        if (prepared.action === "cancel") {
          await upsertNotificationJob(prepared.job);
          processed.push({
            error: prepared.job.error,
            notificationJobId: claimedJob.notificationJobId,
            status: "canceled"
          });
          continue;
        }

        const result = await sendNotificationJob(prepared.job, { forceDryRun });
        const status = result?.dryRun ? "dry_run" : "sent";
        const updatedJob = {
          ...prepared.job,
          status,
          result,
          provider: "solapi",
          providerMessageId: getProviderMessageId(result),
          error: ""
        };
        await upsertNotificationJob(updatedJob);
        processed.push({ notificationJobId: claimedJob.notificationJobId, status, result });
      } catch (error) {
        const failedJob = {
          ...claimedJob,
          status: "failed",
          error: error.message
        };
        await upsertNotificationJob(failedJob);
        processed.push({ error: error.message, notificationJobId: claimedJob.notificationJobId, status: "failed" });
      }
    }

    let automaticSolapiReconcile = {
      checkedCount: 0,
      candidateCount: 0,
      source: "solapi-auto-reconcile",
      updatedCount: 0
    };
    try {
      automaticSolapiReconcile = await reconcileDueSolapiNotificationJobs({ now });
    } catch (error) {
      automaticSolapiReconcile = {
        ...automaticSolapiReconcile,
        error: error.message
      };
      console.error("[solapi_auto_reconcile_failed]", error);
    }

    return {
      automaticSolapiReconcile,
      dryRun: forceDryRun || getNotificationStatus().dryRun,
      processed,
      processedCount: processed.length,
      source: listed.source
    };
  }

  return Object.freeze({ dispatchDueNotificationJobs });
}
