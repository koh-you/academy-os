import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { upsertNotificationJobList } from "../src/domains/notifications/notificationJobState.js";

function applyExistingCommentJobUpsert(currentJobs, notificationJob) {
  return [
    notificationJob,
    ...currentJobs.filter(
      (job) => job.notificationJobId !== notificationJob.notificationJobId
    )
  ];
}

const currentJobs = [
  {
    notificationJobId: "job_TARGET",
    marker: "TARGET_OLD_A"
  },
  {
    notificationJobId: "job_CONTROL",
    marker: "CONTROL"
  },
  {
    notificationJobId: "job_TARGET",
    marker: "TARGET_OLD_B"
  }
];
const successfulJob = {
  notificationJobId: "job_TARGET",
  marker: "TARGET_SUCCESS"
};
const failedJob = {
  notificationJobId: "job_TARGET",
  marker: "TARGET_FAILED"
};
const currentSnapshot = structuredClone(currentJobs);
const successfulSnapshot = structuredClone(successfulJob);
const failedSnapshot = structuredClone(failedJob);

assert.deepEqual(
  applyExistingCommentJobUpsert(currentJobs, successfulJob),
  [successfulJob, currentJobs[1]]
);
assert.deepEqual(
  upsertNotificationJobList(currentJobs, successfulJob),
  applyExistingCommentJobUpsert(currentJobs, successfulJob)
);
assert.deepEqual(
  applyExistingCommentJobUpsert(currentJobs, failedJob),
  [failedJob, currentJobs[1]]
);
assert.deepEqual(
  upsertNotificationJobList(currentJobs, failedJob),
  applyExistingCommentJobUpsert(currentJobs, failedJob)
);
assert.deepEqual(currentJobs, currentSnapshot);
assert.deepEqual(successfulJob, successfulSnapshot);
assert.deepEqual(failedJob, failedSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const functionStart = appSource.indexOf(
  "async function handleSendLessonComment(lesson, student, record, target, options = {})"
);
const functionEnd = appSource.indexOf(
  "\n  async function handleStudentCheckHomework(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
const successInline =
  "setNotificationJobs((current) => [notificationJob, ...current.filter((job) => job.notificationJobId !== notificationJob.notificationJobId)])";
const failureInline =
  "setNotificationJobs((current) => [failedJob, ...current.filter((job) => job.notificationJobId !== failedJob.notificationJobId)])";
assert.equal(functionSource.split(successInline).length - 1, 0);
assert.equal(functionSource.split(failureInline).length - 1, 0);
assert.equal(
  functionSource.split("upsertNotificationJobList(current, notificationJob)")
    .length - 1,
  1
);
assert.equal(
  functionSource.split("upsertNotificationJobList(current, failedJob)").length -
    1,
  1
);

const successLogIndex = functionSource.indexOf(
  "setNotificationLogs((current) => [notificationLog, ...current])"
);
const successJobIndex = functionSource.indexOf(
  "const notificationJob = {",
  successLogIndex
);
const successSetterIndex = functionSource.indexOf(
  "setNotificationJobs((current) =>",
  successJobIndex
);
const successHelperIndex = functionSource.indexOf(
  "upsertNotificationJobList(current, notificationJob)",
  successSetterIndex
);
const successPersistIndex = functionSource.indexOf(
  'postJson("/api/notification-jobs", {',
  successHelperIndex
);
const successStatusIndex = functionSource.indexOf(
  "applySendStatus(completeStatus, { persist: true })",
  successPersistIndex
);
assert.ok(
    successLogIndex >= 0 &&
    successJobIndex > successLogIndex &&
    successSetterIndex > successJobIndex &&
    successHelperIndex > successSetterIndex &&
    successPersistIndex > successHelperIndex &&
    successStatusIndex > successPersistIndex
);
const failureLogIndex = functionSource.indexOf(
  "setNotificationLogs((current) => [failedLog, ...current])"
);
const failureJobIndex = functionSource.indexOf(
  "const failedJob = {",
  failureLogIndex
);
const failureSetterIndex = functionSource.indexOf(
  "setNotificationJobs((current) =>",
  failureJobIndex
);
const failureHelperIndex = functionSource.indexOf(
  "upsertNotificationJobList(current, failedJob)",
  failureSetterIndex
);
const failurePersistIndex = functionSource.indexOf(
  'postJson("/api/notification-jobs", {',
  failureHelperIndex
);
const failureStatusIndex = functionSource.indexOf(
  "applySendStatus(`실패 · ${error.message}`, { persist: true })",
  failurePersistIndex
);
assert.ok(
    failureLogIndex >= 0 &&
    failureJobIndex > failureLogIndex &&
    failureSetterIndex > failureJobIndex &&
    failureHelperIndex > failureSetterIndex &&
    failurePersistIndex > failureHelperIndex &&
    failureStatusIndex > failurePersistIndex
);

console.log(
  "notification job comment upsert inventory TARGET/CONTROL fixtures passed"
);
