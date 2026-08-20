import assert from "node:assert/strict";

import { createNotificationSolapiReserveService } from "../src/shared/server/notificationSolapiReserveService.js";

const lessonCommentNotificationTypes = new Set(["daily_report", "parent_comment", "student_comment"]);

function createDeps(overrides = {}) {
  const jobStore = new Map();
  const upserts = [];
  const cancellations = [];
  const providerCalls = [];
  const dispatchContextCalls = [];

  const deps = {
    cancelSolapiReservationGroup: async (groupId) => {
      cancellations.push(groupId);
      return { canceled: true, groupId };
    },
    createLessonNotificationDispatchContext: async (jobs) => {
      dispatchContextCalls.push(jobs);
      return { built: true };
    },
    getNotificationJob: async (notificationJobId) => {
      const notificationJob = jobStore.get(notificationJobId) ?? null;
      return { notificationJob, source: "supabase" };
    },
    getProviderMessageId: (result) => result?.groupId ?? "",
    isSameSolapiReservation: (existingJob, nextJob) =>
      Boolean(existingJob) &&
      existingJob.status === "scheduled" &&
      existingJob.provider === "solapi" &&
      existingJob.fingerprint === nextJob.fingerprint,
    isSameSolapiReservationPending: () => false,
    lessonCommentNotificationTypes,
    refreshLessonCommentJobBeforeSend: (job) => ({ action: "send", job }),
    sendScheduledNotificationJobToSolapi: async (job) => {
      providerCalls.push(job);
      return { dryRun: false, groupId: `group-${job.notificationJobId}` };
    },
    upsertNotificationJob: async (notificationJob) => {
      upserts.push(notificationJob);
      jobStore.set(notificationJob.notificationJobId, notificationJob);
      return { notificationJob };
    },
    ...overrides
  };
  return { cancellations, deps, dispatchContextCalls, jobStore, providerCalls, upserts };
}

// 1. Normal reserve: no existing job, calls provider once, saves scheduled status.
{
  const { deps, providerCalls, upserts } = createDeps();
  const service = createNotificationSolapiReserveService(deps);
  const job = { notificationJobId: "job-1", notificationType: "notice_parent", fingerprint: "a" };
  const result = await service.reserveNotificationJobInSolapi(job, { reason: "test reserve" });
  assert.equal(providerCalls.length, 1);
  assert.equal(result.reserved, true);
  assert.equal(result.source, "solapi");
  assert.equal(result.notificationJob.status, "scheduled");
  assert.equal(result.notificationJob.provider, "solapi");
  assert.equal(result.notificationJob.providerMessageId, "group-job-1");
  // reserving (pending) upsert, then final upsert
  assert.equal(upserts.length, 2);
  assert.equal(upserts[0].result.reservationPending, true);
  assert.equal(upserts[1].result.reservationPending, false);
}

// 2. Dedup: an identical scheduled solapi reservation already exists -> reused, no provider call.
{
  const { deps, jobStore, providerCalls } = createDeps();
  jobStore.set("job-2", { notificationJobId: "job-2", status: "scheduled", provider: "solapi", fingerprint: "b" });
  const service = createNotificationSolapiReserveService(deps);
  const job = { notificationJobId: "job-2", notificationType: "notice_parent", fingerprint: "b" };
  const result = await service.reserveNotificationJobInSolapi(job, {});
  assert.equal(result.reused, true);
  assert.equal(result.reserved, false);
  assert.equal(providerCalls.length, 0);
}

// 3. Cancel action from refreshLessonCommentJobBeforeSend short-circuits before any provider call.
{
  const { deps, providerCalls, upserts } = createDeps({
    refreshLessonCommentJobBeforeSend: (job) => ({ action: "cancel", job: { ...job, status: "canceled" } })
  });
  const service = createNotificationSolapiReserveService(deps);
  const job = { notificationJobId: "job-3", notificationType: "notice_parent" };
  const result = await service.reserveNotificationJobInSolapi(job, {});
  assert.equal(result.reserved, false);
  assert.equal(result.source, "supabase");
  assert.equal(providerCalls.length, 0);
  assert.equal(upserts.length, 1);
  assert.equal(upserts[0].status, "canceled");
}

// 4. Re-reserving over an existing scheduled solapi job cancels the old provider group first.
{
  const { cancellations, deps, jobStore } = createDeps();
  jobStore.set("job-4", {
    notificationJobId: "job-4",
    providerMessageId: "old-group",
    provider: "solapi",
    status: "scheduled",
    fingerprint: "old"
  });
  const service = createNotificationSolapiReserveService(deps);
  const job = { notificationJobId: "job-4", notificationType: "notice_parent", fingerprint: "new" };
  await service.reserveNotificationJobInSolapi(job, {});
  assert.deepEqual(cancellations, ["old-group"]);
}

// 5. Teacher-cancel race: job gets canceled by another request while the Solapi call is in flight.
{
  const { cancellations, deps, jobStore, upserts } = createDeps();
  const originalUpsert = deps.upsertNotificationJob;
  let sendCallCount = 0;
  const service = createNotificationSolapiReserveService({
    ...deps,
    sendScheduledNotificationJobToSolapi: async (job) => {
      sendCallCount += 1;
      // Simulate a concurrent teacher-cancel landing in Supabase mid-flight.
      jobStore.set(job.notificationJobId, { ...job, status: "canceled" });
      return { dryRun: false, groupId: "race-group" };
    },
    upsertNotificationJob: originalUpsert
  });
  const job = { notificationJobId: "job-5", notificationType: "notice_parent" };
  const result = await service.reserveNotificationJobInSolapi(job, {});
  assert.equal(sendCallCount, 1);
  assert.equal(result.canceledAfterReserve, true);
  assert.equal(result.notificationJob.provider, "solapi");
  assert.equal(result.notificationJob.result.reservationCanceledAfterTeacherCancel, true);
  assert.deepEqual(cancellations, ["race-group"]);
  assert.equal(upserts.at(-1).result.reservationCanceledAfterTeacherCancel, true);
}

// 6. Dry-run result is preserved as a distinct status, not treated as "scheduled".
{
  const { deps } = createDeps({
    sendScheduledNotificationJobToSolapi: async () => ({ dryRun: true, groupId: "dry-group" })
  });
  const service = createNotificationSolapiReserveService(deps);
  const job = { notificationJobId: "job-6", notificationType: "notice_parent" };
  const result = await service.reserveNotificationJobInSolapi(job, { forceDryRun: true });
  assert.equal(result.notificationJob.status, "dry_run");
  assert.equal(result.reserved, false);
}

// 7. Bulk: partial provider failure is isolated per job and reported, not thrown.
{
  const { deps, providerCalls } = createDeps({
    sendScheduledNotificationJobToSolapi: async (job) => {
      if (job.notificationJobId === "bulk-fail") throw new Error("provider down");
      providerCalls.push(job);
      return { dryRun: false, groupId: `group-${job.notificationJobId}` };
    }
  });
  const service = createNotificationSolapiReserveService(deps);
  const jobs = [
    { notificationJobId: "bulk-ok", notificationType: "notice_parent" },
    { notificationJobId: "bulk-fail", notificationType: "notice_parent" }
  ];
  const result = await service.reserveNotificationJobsInSolapi(jobs, { concurrency: 2 });
  assert.equal(result.reservedCount, 1);
  assert.equal(result.failedCount, 1);
  assert.equal(providerCalls.length, 1);
  const failed = result.results.find((entry) => entry.notificationJob.notificationJobId === "bulk-fail");
  assert.equal(failed.notificationJob.status, "failed");
  assert.ok(failed.error.includes("provider down"));
}

// 8. lessonCommentNotificationTypes gates whether a dispatch context is built at all.
{
  const { deps, dispatchContextCalls } = createDeps();
  const service = createNotificationSolapiReserveService(deps);
  await service.reserveNotificationJobInSolapi(
    { notificationJobId: "job-8", notificationType: "attendance" },
    {}
  );
  assert.equal(dispatchContextCalls.length, 0);
  await service.reserveNotificationJobInSolapi(
    { notificationJobId: "job-8b", notificationType: "daily_report" },
    {}
  );
  assert.equal(dispatchContextCalls.length, 1);
}

console.log("notification Solapi reserve service behavior passed");
