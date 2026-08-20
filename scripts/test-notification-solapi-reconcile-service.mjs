import assert from "node:assert/strict";

import { createNotificationSolapiReconcileService } from "../src/shared/server/notificationSolapiReconcileService.js";

const lessonCommentNotificationTypes = new Set(["daily_report", "parent_comment", "student_comment"]);

function createDeps(overrides = {}) {
  const upserts = [];
  const patchCalls = [];
  const groupLookups = [];
  const messageLookups = [];

  const deps = {
    defaultSolapiAutoReconcileGraceMs: 5 * 60 * 1000,
    defaultSolapiAutoReconcileLookbackMs: 60 * 60 * 1000,
    defaultSolapiAutoReconcileRetryMs: 60 * 1000,
    getKoreaDayUtcRange: (date) => ({ startIso: `${date}T00:00:00.000Z`, endIso: `${date}T23:59:59.999Z` }),
    getPositiveNumberEnv: (name, fallbackValue) => fallbackValue,
    getProviderMessageId: (result) => result?.groupId ?? "",
    getSolapiProviderReference: (job) => job.providerMessageId ?? "",
    lessonCommentNotificationTypes,
    listNotificationJobs: async () => ({ notificationJobs: [], source: "supabase" }),
    listNotificationJobsByIds: async () => [],
    listSolapiGroups: async ({ groupId }) => {
      groupLookups.push(groupId);
      return { groups: [{ groupId, status: "COMPLETE" }] };
    },
    listSolapiMessages: async ({ groupId }) => {
      messageLookups.push(groupId);
      return { messages: [{ statusCode: "4000", status: "SUCCESS", to: "01000000000" }] };
    },
    patchLessonStudentRecordNotificationStatus: async (args) => {
      patchCalls.push(args);
      return { record: { lessonStudentRecordId: args.lessonStudentRecordId } };
    },
    selectDueSolapiAutoReconcileJobs: (jobs) => jobs,
    upsertNotificationJob: async (notificationJob) => {
      upserts.push(notificationJob);
      return { notificationJob };
    },
    ...overrides
  };
  return { deps, groupLookups, messageLookups, patchCalls, upserts };
}

function solapiJob(overrides = {}) {
  return {
    notificationJobId: "job-1",
    notificationType: "parent_comment",
    provider: "solapi",
    providerMessageId: "group-1",
    status: "scheduled",
    ...overrides
  };
}

// 1. Sent status (statusCode 4000) updates the job and, for a lesson-comment
// type with lessonId/studentId, patches the lesson record status too.
{
  const { deps, patchCalls, upserts } = createDeps();
  const service = createNotificationSolapiReconcileService(deps);
  const job = solapiJob({ lessonId: "lesson-1", lessonStudentRecordId: "record-1", studentId: "student-1" });
  const result = await service.reconcileSolapiNotificationJobs({ candidateJobs: [job] });
  assert.equal(result.checkedCount, 1);
  assert.equal(result.checked[0].status, "sent");
  assert.equal(result.updatedCount, 1);
  assert.equal(upserts[0].status, "sent");
  assert.equal(patchCalls.length, 1);
  assert.equal(patchCalls[0].teacherCommentSendStatus, "발송 완료");
  assert.equal("studentCommentSendStatus" in patchCalls[0], false);
}

// 2. student_comment type routes to studentCommentSendStatus, not teacherCommentSendStatus.
{
  const { deps, patchCalls } = createDeps();
  const service = createNotificationSolapiReconcileService(deps);
  const job = solapiJob({
    lessonId: "lesson-1",
    lessonStudentRecordId: "record-1",
    notificationType: "student_comment",
    studentId: "student-1"
  });
  await service.reconcileSolapiNotificationJobs({ candidateJobs: [job] });
  assert.equal(patchCalls[0].studentCommentSendStatus, "발송 완료");
  assert.equal("teacherCommentSendStatus" in patchCalls[0], false);
}

// 3. No status change and not an automatic pass -> no upsert, no group lookup skipped
// (still checked once), but nothing persisted.
{
  const { deps, upserts } = createDeps({
    listSolapiGroups: async ({ groupId }) => ({ groups: [{ groupId, status: "SCHEDULED" }] }),
    listSolapiMessages: async () => ({ messages: [] })
  });
  const service = createNotificationSolapiReconcileService(deps);
  const job = solapiJob({ scheduledAt: "2099-01-01T00:00:00.000Z" });
  const result = await service.reconcileSolapiNotificationJobs({ candidateJobs: [job] });
  assert.equal(result.checked[0].updated, false);
  assert.equal(upserts.length, 0);
}

// 4. Same reconciliation pass with reconciledSource "automatic-after-5-minutes"
// persists even when nothing changed (explicit re-stamp behavior).
{
  const { deps, upserts } = createDeps({
    listSolapiGroups: async ({ groupId }) => ({ groups: [{ groupId, status: "SCHEDULED" }] }),
    listSolapiMessages: async () => ({ messages: [] })
  });
  const service = createNotificationSolapiReconcileService(deps);
  const job = solapiJob({ scheduledAt: "2099-01-01T00:00:00.000Z" });
  await service.reconcileSolapiNotificationJobs({
    candidateJobs: [job],
    reconciledSource: "automatic-after-5-minutes"
  });
  assert.equal(upserts.length, 1);
  assert.equal(upserts[0].result.solapiReconciledSource, "automatic-after-5-minutes");
}

// 5. Group lookup is cached per groupId even when multiple candidate jobs share one.
{
  const { deps, groupLookups, messageLookups } = createDeps();
  const service = createNotificationSolapiReconcileService(deps);
  const jobs = [
    solapiJob({ notificationJobId: "job-a" }),
    solapiJob({ notificationJobId: "job-b" })
  ];
  await service.reconcileSolapiNotificationJobs({ candidateJobs: jobs });
  assert.equal(groupLookups.length, 1);
  assert.equal(messageLookups.length, 1);
}

// 6. A per-job lookup failure is isolated: marked failed_to_check, other jobs still process.
{
  const { deps } = createDeps({
    listSolapiGroups: async ({ groupId }) => {
      if (groupId === "group-broken") throw new Error("solapi unavailable");
      return { groups: [{ groupId, status: "COMPLETE" }] };
    }
  });
  const service = createNotificationSolapiReconcileService(deps);
  const jobs = [
    solapiJob({ notificationJobId: "job-ok", providerMessageId: "group-ok" }),
    solapiJob({ notificationJobId: "job-broken", providerMessageId: "group-broken" })
  ];
  const result = await service.reconcileSolapiNotificationJobs({ candidateJobs: jobs });
  assert.equal(result.checkedCount, 2);
  const broken = result.checked.find((entry) => entry.notificationJobId === "job-broken");
  assert.equal(broken.status, "failed_to_check");
  assert.ok(broken.error.includes("solapi unavailable"));
  const ok = result.checked.find((entry) => entry.notificationJobId === "job-ok");
  assert.equal(ok.status, "sent");
}

// 7. A lesson-record patch failure is captured per-job without failing the whole pass.
{
  const { deps, upserts } = createDeps({
    patchLessonStudentRecordNotificationStatus: async () => {
      throw new Error("record patch failed");
    }
  });
  const service = createNotificationSolapiReconcileService(deps);
  const job = solapiJob({ lessonId: "lesson-1", lessonStudentRecordId: "record-1", studentId: "student-1" });
  const result = await service.reconcileSolapiNotificationJobs({ candidateJobs: [job] });
  assert.equal(upserts.length, 1);
  assert.ok(result.checked[0].recordError.includes("record patch failed"));
}

// 8. reconcileDueSolapiNotificationJobs: no due candidates short-circuits before
// calling reconcileSolapiNotificationJobs at all (no group lookups happen).
{
  const { deps, groupLookups } = createDeps({
    listNotificationJobs: async () => ({ notificationJobs: [solapiJob()], source: "supabase" }),
    selectDueSolapiAutoReconcileJobs: () => []
  });
  const service = createNotificationSolapiReconcileService(deps);
  const result = await service.reconcileDueSolapiNotificationJobs({ now: new Date("2026-01-01T00:10:00.000Z") });
  assert.equal(result.candidateCount, 0);
  assert.equal(groupLookups.length, 0);
}

// 9. reconcileDueSolapiNotificationJobs delegates matched candidates through the
// same reconcile path with reconciledSource "automatic-after-5-minutes".
{
  const { deps, upserts } = createDeps({
    listNotificationJobs: async () => ({ notificationJobs: [solapiJob()], source: "supabase" }),
    selectDueSolapiAutoReconcileJobs: (jobs) => jobs
  });
  const service = createNotificationSolapiReconcileService(deps);
  const result = await service.reconcileDueSolapiNotificationJobs({ now: new Date("2026-01-01T00:10:00.000Z") });
  assert.equal(result.candidateCount, 1);
  assert.equal(upserts[0].result.solapiReconciledSource, "automatic-after-5-minutes");
}

// 10. Single-flight guard: a second concurrent call while one is in flight is skipped,
// not queued or run twice.
{
  let releaseFirstLookup;
  const gate = new Promise((resolve) => {
    releaseFirstLookup = resolve;
  });
  const { deps } = createDeps({
    listNotificationJobs: async () => {
      await gate;
      return { notificationJobs: [], source: "supabase" };
    },
    selectDueSolapiAutoReconcileJobs: () => []
  });
  const service = createNotificationSolapiReconcileService(deps);
  const firstCall = service.reconcileDueSolapiNotificationJobs({});
  await Promise.resolve(); // let the first call enter its in-flight state
  const secondResult = await service.reconcileDueSolapiNotificationJobs({});
  assert.equal(secondResult.skipped, "already_running");
  releaseFirstLookup();
  const firstResult = await firstCall;
  assert.notEqual(firstResult.skipped, "already_running");
}

console.log("notification Solapi reconcile service behavior passed");
