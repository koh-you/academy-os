import assert from "node:assert/strict";

import { createNotificationSolapiDispatchService } from "../src/shared/server/notificationSolapiDispatchService.js";

const dispatchableNotificationStatuses = new Set(["queued", "pending_send"]);

function createDeps(overrides = {}) {
  const upserts = [];
  const claimCalls = [];
  const sendCalls = [];
  const reconcileCalls = [];

  const deps = {
    claimNotificationJob: async (job, claimId) => {
      claimCalls.push({ claimId, job });
      return { notificationJob: { ...job, provider: "academy-os-dispatching", providerClaimId: claimId } };
    },
    createLessonNotificationDispatchContext: async () => ({ built: true }),
    dispatchableNotificationStatuses,
    getNotificationStatus: () => ({ dryRun: false }),
    getProviderMessageId: (result) => result?.groupId ?? "",
    listNotificationDispatchCandidates: async () => ({ notificationJobs: [], source: "supabase" }),
    reconcileDueSolapiNotificationJobs: async () => ({
      candidateCount: 0,
      checkedCount: 0,
      source: "solapi-auto-reconcile",
      updatedCount: 0
    }),
    refreshLessonCommentJobBeforeSend: (job) => ({ action: "send", job }),
    sendNotificationJob: async (job) => {
      sendCalls.push(job);
      return { dryRun: false, groupId: `group-${job.notificationJobId}` };
    },
    upsertNotificationJob: async (notificationJob) => {
      upserts.push(notificationJob);
      return { notificationJob };
    },
    ...overrides
  };
  return { claimCalls, deps, reconcileCalls, sendCalls, upserts };
}

function osScheduledJob(overrides = {}) {
  return {
    notificationJobId: "job-1",
    notificationType: "notice_parent",
    payload: { osScheduled: true, sendMode: "scheduled" },
    provider: "academy-os",
    scheduledAt: "2026-01-01T00:00:00.000Z",
    status: "scheduled",
    ...overrides
  };
}

const now = "2026-01-01T00:05:00.000Z";

// 1. A due, unclaimed OS-scheduled job gets claimed and sent successfully.
{
  const { claimCalls, deps, sendCalls, upserts } = createDeps({
    listNotificationDispatchCandidates: async () => ({ notificationJobs: [osScheduledJob()], source: "supabase" })
  });
  const service = createNotificationSolapiDispatchService(deps);
  const result = await service.dispatchDueNotificationJobs({ now });
  assert.equal(claimCalls.length, 1);
  assert.equal(sendCalls.length, 1);
  assert.equal(result.processedCount, 1);
  assert.equal(result.processed[0].status, "sent");
  assert.equal(upserts.at(-1).provider, "solapi");
}

// 2. A job scheduled in the future is filtered out entirely.
{
  const { claimCalls, deps } = createDeps({
    listNotificationDispatchCandidates: async () => ({
      notificationJobs: [osScheduledJob({ scheduledAt: "2099-01-01T00:00:00.000Z" })],
      source: "supabase"
    })
  });
  const service = createNotificationSolapiDispatchService(deps);
  const result = await service.dispatchDueNotificationJobs({ now });
  assert.equal(result.processedCount, 0);
  assert.equal(claimCalls.length, 0);
}

// 3. A job already claimed by another dispatcher recently (not stale) is excluded.
{
  const { deps } = createDeps({
    listNotificationDispatchCandidates: async () => ({
      notificationJobs: [osScheduledJob({ provider: "academy-os-dispatching", updatedAt: now })],
      source: "supabase"
    })
  });
  const service = createNotificationSolapiDispatchService(deps);
  const result = await service.dispatchDueNotificationJobs({ now });
  assert.equal(result.processedCount, 0);
}

// 4. A stale claim (>10 minutes old) is reclaimed and dispatched.
{
  const { claimCalls, deps } = createDeps({
    listNotificationDispatchCandidates: async () => ({
      notificationJobs: [osScheduledJob({
        provider: "academy-os-dispatching",
        updatedAt: "2026-01-01T00:00:00.000Z" // 5 minutes before `now`, but claim rule needs >10min at claim-check time
      })],
      source: "supabase"
    })
  });
  // isStaleDispatchClaim compares against nowTime derived from `now`; push now further out to exceed 10 minutes.
  const service = createNotificationSolapiDispatchService(deps);
  const result = await service.dispatchDueNotificationJobs({ now: "2026-01-01T00:11:00.000Z" });
  assert.equal(claimCalls.length, 1);
  assert.equal(result.processedCount, 1);
}

// 5. claimNotificationJob losing the race (returns no notificationJob) is reported, not sent.
{
  const { deps, sendCalls } = createDeps({
    claimNotificationJob: async () => ({ notificationJob: null }),
    listNotificationDispatchCandidates: async () => ({ notificationJobs: [osScheduledJob()], source: "supabase" })
  });
  const service = createNotificationSolapiDispatchService(deps);
  const result = await service.dispatchDueNotificationJobs({ now });
  assert.equal(result.processed[0].status, "skipped_claimed");
  assert.equal(sendCalls.length, 0);
}

// 6. A cancel action from refreshLessonCommentJobBeforeSend short-circuits before sending.
{
  const { deps, sendCalls, upserts } = createDeps({
    listNotificationDispatchCandidates: async () => ({ notificationJobs: [osScheduledJob()], source: "supabase" }),
    refreshLessonCommentJobBeforeSend: (job) => ({ action: "cancel", job: { ...job, error: "학생 제외", status: "canceled" } })
  });
  const service = createNotificationSolapiDispatchService(deps);
  const result = await service.dispatchDueNotificationJobs({ now });
  assert.equal(result.processed[0].status, "canceled");
  assert.equal(sendCalls.length, 0);
  assert.equal(upserts.at(-1).status, "canceled");
}

// 7. A provider send failure is caught, the job is marked failed, and dispatch continues.
{
  const { deps, upserts } = createDeps({
    listNotificationDispatchCandidates: async () => ({ notificationJobs: [osScheduledJob()], source: "supabase" }),
    sendNotificationJob: async () => {
      throw new Error("solapi timeout");
    }
  });
  const service = createNotificationSolapiDispatchService(deps);
  const result = await service.dispatchDueNotificationJobs({ now });
  assert.equal(result.processed[0].status, "failed");
  assert.ok(result.processed[0].error.includes("solapi timeout"));
  assert.equal(upserts.at(-1).status, "failed");
}

// 8. Dry-run results are reported as "dry_run", not "sent".
{
  const { deps } = createDeps({
    listNotificationDispatchCandidates: async () => ({ notificationJobs: [osScheduledJob()], source: "supabase" }),
    sendNotificationJob: async () => ({ dryRun: true, groupId: "dry-group" })
  });
  const service = createNotificationSolapiDispatchService(deps);
  const result = await service.dispatchDueNotificationJobs({ now, forceDryRun: true });
  assert.equal(result.processed[0].status, "dry_run");
}

// 9. automaticSolapiReconcile result is folded into the response.
{
  const { deps } = createDeps({
    reconcileDueSolapiNotificationJobs: async () => ({
      candidateCount: 3,
      checkedCount: 3,
      source: "solapi-auto-reconcile",
      updatedCount: 2
    })
  });
  const service = createNotificationSolapiDispatchService(deps);
  const result = await service.dispatchDueNotificationJobs({ now });
  assert.equal(result.automaticSolapiReconcile.updatedCount, 2);
}

// 10. A reconcile failure is captured without failing the whole dispatch response.
{
  const { deps } = createDeps({
    reconcileDueSolapiNotificationJobs: async () => {
      throw new Error("reconcile down");
    }
  });
  const service = createNotificationSolapiDispatchService(deps);
  const result = await service.dispatchDueNotificationJobs({ now });
  assert.ok(result.automaticSolapiReconcile.error.includes("reconcile down"));
  assert.equal(result.processedCount, 0);
}

// 11. allowManualStatuses lets a "queued" job dispatch even without OS-scheduled markers.
{
  const { deps, sendCalls } = createDeps({
    listNotificationDispatchCandidates: async () => ({
      notificationJobs: [{ notificationJobId: "manual-1", provider: "academy-os", status: "queued" }],
      source: "supabase"
    })
  });
  const service = createNotificationSolapiDispatchService(deps);
  const result = await service.dispatchDueNotificationJobs({ allowManualStatuses: true, now });
  assert.equal(sendCalls.length, 1);
  assert.equal(result.processedCount, 1);
}

console.log("notification Solapi dispatch service behavior passed");
