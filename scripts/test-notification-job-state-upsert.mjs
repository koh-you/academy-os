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

assert.deepEqual(upsertNotificationJobList(currentJobs, targetJob), [
  targetJob,
  currentJobs[1]
]);
assert.deepEqual(upsertNotificationJobList(currentJobs, newJob), [
  newJob,
  ...currentJobs
]);
assert.deepEqual(upsertNotificationJobList([], newJob), [newJob]);
assert.deepEqual(currentJobs, currentSnapshot);
assert.deepEqual(targetJob, targetSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobState.js", import.meta.url),
  "utf8"
);
const functionStart = appSource.indexOf(
  "function upsertNotificationJobState(notificationJob)"
);
const functionEnd = appSource.indexOf(
  "\n  async function reserveNotificationJob(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);

assert.equal(
  appSource.split(
    'import { upsertNotificationJobList } from "../domains/notifications/notificationJobState.js"'
  ).length - 1,
  1
);
assert.ok(functionSource.includes("if (!notificationJob?.notificationJobId) return"));
assert.ok(
  functionSource.includes(
    "setNotificationJobs((current) => upsertNotificationJobList(current, notificationJob))"
  )
);
assert.ok(
  !functionSource.includes(
    "current.filter((job) => job.notificationJobId !== notificationJob.notificationJobId)"
  )
);
assert.ok(appSource.includes("onNotificationJob: upsertNotificationJobState"));

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
  "Solapi"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `notification job state helper crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job state upsert TARGET/CONTROL fixtures passed");
