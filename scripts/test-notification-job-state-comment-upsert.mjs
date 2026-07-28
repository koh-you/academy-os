import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { upsertNotificationJobList } from "../src/domains/notifications/notificationJobState.js";

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

assert.deepEqual(upsertNotificationJobList(currentJobs, successfulJob), [
  successfulJob,
  currentJobs[1]
]);
assert.deepEqual(upsertNotificationJobList(currentJobs, failedJob), [
  failedJob,
  currentJobs[1]
]);
assert.deepEqual(currentJobs, currentSnapshot);
assert.deepEqual(successfulJob, successfulSnapshot);
assert.deepEqual(failedJob, failedSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobState.js", import.meta.url),
  "utf8"
);
const functionStart = appSource.indexOf(
  "async function handleSendLessonComment(lesson, student, record, target, options = {})"
);
const functionEnd = appSource.indexOf(
  "\n  async function handleStudentCheckHomework(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
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
assert.ok(
  !functionSource.includes(
    "[notificationJob, ...current.filter((job) => job.notificationJobId !== notificationJob.notificationJobId)]"
  )
);
assert.ok(
  !functionSource.includes(
    "[failedJob, ...current.filter((job) => job.notificationJobId !== failedJob.notificationJobId)]"
  )
);

for (const [
  logText,
  jobText,
  helperText,
  persistPayloadText,
  statusText
] of [
  [
    "setNotificationLogs((current) => [notificationLog, ...current])",
    "const notificationJob = {",
    "upsertNotificationJobList(current, notificationJob)",
    "notificationJob",
    "applySendStatus(completeStatus, { persist: true })"
  ],
  [
    "setNotificationLogs((current) => [failedLog, ...current])",
    "const failedJob = {",
    "upsertNotificationJobList(current, failedJob)",
    "notificationJob: failedJob",
    "applySendStatus(`실패 · ${error.message}`, { persist: true })"
  ]
]) {
  const logIndex = functionSource.indexOf(logText);
  const jobIndex = functionSource.indexOf(jobText, logIndex);
  const setterIndex = functionSource.indexOf(
    "setNotificationJobs((current) =>",
    jobIndex
  );
  const helperIndex = functionSource.indexOf(helperText, setterIndex);
  const persistIndex = functionSource.indexOf(
    'postJson("/api/notification-jobs", {',
    helperIndex
  );
  const persistPayloadIndex = functionSource.indexOf(
    persistPayloadText,
    persistIndex
  );
  const statusIndex = functionSource.indexOf(statusText, persistPayloadIndex);
  assert.ok(
    logIndex >= 0 &&
      jobIndex > logIndex &&
      setterIndex > jobIndex &&
      helperIndex > setterIndex &&
      persistIndex > helperIndex &&
      persistPayloadIndex > persistIndex &&
      statusIndex > persistPayloadIndex
  );
}

for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "new Date",
  "Date.now",
  "localStorage",
  "setNotificationJobs",
  "notification_jobs",
  "Solapi",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `lesson comment upsert helper crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job comment upsert TARGET/CONTROL fixtures passed");
