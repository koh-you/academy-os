import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { applyCanceledLessonJournalReservationJob } from "../src/domains/lessons/lessonJournalReservationAuditTransitions.js";

const currentAudit = {
  marker: "CONTROL_FIELD",
  message: "기존 메시지",
  osJobs: [
    { notificationJobId: "job_CONTROL", status: "scheduled" },
    { notificationJobId: "job_TARGET", status: "scheduled" },
    { notificationJobId: "job_TARGET", status: "duplicate" }
  ],
  state: "idle"
};
const canceledJob = {
  notificationJobId: "job_TARGET",
  status: "canceled"
};
const currentSnapshot = structuredClone(currentAudit);
const canceledSnapshot = structuredClone(canceledJob);

assert.deepEqual(
  applyCanceledLessonJournalReservationJob({
    currentAudit,
    notificationJob: canceledJob
  }),
  {
    marker: "CONTROL_FIELD",
    message: "예약 1건을 취소했습니다.",
    osJobs: [
      canceledJob,
      { notificationJobId: "job_CONTROL", status: "scheduled" }
    ],
    state: "ready"
  }
);
assert.deepEqual(currentAudit, currentSnapshot);
assert.deepEqual(canceledJob, canceledSnapshot);
assert.deepEqual(
  applyCanceledLessonJournalReservationJob({
    currentAudit: { message: "", osJobs: null, state: "failed" },
    notificationJob: canceledJob
  }),
  {
    message: "예약 1건을 취소했습니다.",
    osJobs: null,
    state: "failed"
  }
);

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const modelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalReservationAuditTransitions.js", import.meta.url),
  "utf8"
);
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction PreparationMemoModal(", detailStart);
const detailSource = appSource.slice(detailStart, detailEnd);

for (const binding of [
  'import { applyCanceledLessonJournalReservationJob } from "../domains/lessons/lessonJournalReservationAuditTransitions.js"',
  "async function cancelReservationJob(job)",
  "onCancelNotificationJob?.(job,",
  "applyCanceledLessonJournalReservationJob({",
  "notificationJob: result.notificationJob",
  'setCancelingReservationJobId("")'
]) {
  assert.ok(appSource.includes(binding), `missing OS audit-transition boundary: ${binding}`);
}
for (const removedProviderBoundary of [
  "applyCanceledLessonJournalSolapiGroup",
  "async function cancelSolapiGroup(",
  "/api/solapi/groups/cancel",
  "cancelingSolapiGroupId"
]) {
  assert.ok(!detailSource.includes(removedProviderBoundary), `raw provider cancel must stay removed: ${removedProviderBoundary}`);
}
for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "window.confirm",
  "new Date",
  "/api/",
  "Supabase",
  "localStorage",
  "solapiGroups"
]) {
  assert.ok(!modelSource.includes(forbiddenSideEffect), `audit transition must stay pure: ${forbiddenSideEffect}`);
}

console.log("lesson journal OS reservation audit transition TARGET/CONTROL fixtures passed");
