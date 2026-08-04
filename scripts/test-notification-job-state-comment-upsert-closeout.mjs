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
const modulePath = 'from "../domains/notifications/notificationJobState.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
const importEnd = appSource.indexOf(modulePath);
const importStart = appSource.lastIndexOf("import {", importEnd);
assert.ok(importStart >= 0 && importEnd > importStart);
const importSource = appSource.slice(importStart, importEnd + modulePath.length);
assert.equal(importSource.split("upsertNotificationJobList").length - 1, 1);
assert.equal(
  helperSource.split("export function upsertNotificationJobList(").length - 1,
  1
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
assert.ok(!functionSource.includes("current.filter((job) => job.notificationJobId !=="));

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
    "persistNotificationJobRequest({",
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
for (const AppOwnedEffect of [
  'fetch(apiUrl("/api/notifications/comment-alimtalk"), {',
  "persistNotificationJobRequest({",
  "setNotificationLogs((current) =>",
  "setNotificationJobs((current) =>",
  "applySendStatus("
]) {
  assert.ok(
    functionSource.includes(AppOwnedEffect),
    `lesson comment effect moved from App: ${AppOwnedEffect}`
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
    `lesson comment upsert closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job comment upsert boundary closeout passed");
