import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { upsertLocalNoticeJobList } from "../src/domains/notifications/notificationCenterModel.js";
import { upsertNotificationJobList } from "../src/domains/notifications/notificationJobState.js";

function applyExistingInlineUpsert(currentJobs, notificationJob) {
  return [
    notificationJob,
    ...currentJobs.filter(
      (job) => job.notificationJobId !== notificationJob.notificationJobId
    )
  ];
}

const currentJobs = Array.from({ length: 82 }, (_, index) => ({
  notificationJobId: index === 40 ? "job_TARGET" : `job_${index}`,
  marker: index === 40 ? "TARGET_OLD" : index === 41 ? "CONTROL" : `ROW_${index}`
}));
const targetJob = {
  notificationJobId: "job_TARGET",
  marker: "TARGET_NEW"
};
const newJob = {
  notificationJobId: "job_NEW",
  marker: "NEW"
};
const currentSnapshot = structuredClone(currentJobs);
const targetSnapshot = structuredClone(targetJob);

const replacedJobs = applyExistingInlineUpsert(currentJobs, targetJob);
assert.deepEqual(upsertNotificationJobList(currentJobs, targetJob), replacedJobs);
assert.equal(replacedJobs.length, 82);
assert.deepEqual(replacedJobs[0], targetJob);
assert.equal(
  replacedJobs.filter((job) => job.notificationJobId === "job_TARGET").length,
  1
);
assert.deepEqual(
  replacedJobs.find((job) => job.marker === "CONTROL"),
  currentJobs.find((job) => job.marker === "CONTROL")
);

const insertedJobs = applyExistingInlineUpsert(currentJobs, newJob);
assert.deepEqual(upsertNotificationJobList(currentJobs, newJob), insertedJobs);
assert.equal(insertedJobs.length, 83);
assert.deepEqual(insertedJobs[0], newJob);
assert.deepEqual(currentJobs, currentSnapshot);
assert.deepEqual(targetJob, targetSnapshot);

assert.equal(upsertLocalNoticeJobList(currentJobs, targetJob).length, 80);
assert.deepEqual(
  upsertLocalNoticeJobList(currentJobs, targetJob, currentJobs.length),
  replacedJobs
);
assert.deepEqual(
  upsertLocalNoticeJobList(currentJobs, newJob, currentJobs.length + 1),
  insertedJobs
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const functionStart = appSource.indexOf(
  "function upsertNotificationJobState(notificationJob)"
);
const functionEnd = appSource.indexOf(
  "\n  async function reserveNotificationJob(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);

for (const existingBoundary of [
  "if (!notificationJob?.notificationJobId) return",
  "setNotificationJobs((current) => upsertNotificationJobList(current, notificationJob))"
]) {
  assert.ok(
    functionSource.includes(existingBoundary),
    `missing existing notification job state upsert boundary: ${existingBoundary}`
  );
}
assert.ok(appSource.includes("onNotificationJob: upsertNotificationJobState"));

console.log("notification job state upsert inventory TARGET/CONTROL fixtures passed");
