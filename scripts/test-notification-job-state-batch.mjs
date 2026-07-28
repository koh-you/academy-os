import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  mergeNotificationJobLists,
  selectValidNotificationJobs
} from "../src/domains/notifications/notificationJobState.js";

const currentJobs = [
  {
    notificationJobId: "job_TARGET",
    marker: "TARGET_OLD"
  },
  {
    notificationJobId: "job_CONTROL_A",
    marker: "CONTROL_A"
  },
  {
    notificationJobId: "job_DUPLICATE",
    marker: "DUPLICATE_OLD"
  },
  {
    notificationJobId: "job_CONTROL_B",
    marker: "CONTROL_B"
  }
];
const nextJobs = [
  null,
  {
    notificationJobId: "job_TARGET",
    marker: "TARGET_NEW"
  },
  {
    marker: "INVALID"
  },
  {
    notificationJobId: "job_DUPLICATE",
    marker: "DUPLICATE_NEW_A"
  },
  {
    notificationJobId: "job_DUPLICATE",
    marker: "DUPLICATE_NEW_B"
  }
];
const currentSnapshot = structuredClone(currentJobs);
const nextSnapshot = structuredClone(nextJobs);

const validJobs = selectValidNotificationJobs(nextJobs);
assert.deepEqual(validJobs, [nextJobs[1], nextJobs[3], nextJobs[4]]);
assert.deepEqual(mergeNotificationJobLists(currentJobs, validJobs), [
  nextJobs[1],
  nextJobs[3],
  nextJobs[4],
  currentJobs[1],
  currentJobs[3]
]);
assert.deepEqual(selectValidNotificationJobs([null, {}, { notificationJobId: "" }]), []);
assert.deepEqual(mergeNotificationJobLists([], validJobs), validJobs);
assert.deepEqual(currentJobs, currentSnapshot);
assert.deepEqual(nextJobs, nextSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobState.js", import.meta.url),
  "utf8"
);
const functionStart = appSource.indexOf(
  "function mergeNotificationJobsIntoState(nextJobs = [])"
);
const functionEnd = appSource.indexOf(
  "\n  async function handleReconcileSolapiNotificationResults(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);

for (const AppOwnedBoundary of [
  "const validJobs = selectValidNotificationJobs(nextJobs)",
  "if (!validJobs.length) return",
  "setNotificationJobs((current) => mergeNotificationJobLists(current, validJobs))"
]) {
  assert.ok(
    functionSource.includes(AppOwnedBoundary),
    `batch notification React boundary moved from App: ${AppOwnedBoundary}`
  );
}
assert.ok(!functionSource.includes("nextJobs.filter("));
assert.ok(!functionSource.includes("new Set("));
assert.ok(!functionSource.includes("current.filter("));
for (const AppOwnedCallSite of [
  "mergeNotificationJobsIntoState(result.notificationJobs)",
  "mergeNotificationJobsIntoState(result.notificationJobs ?? [])",
  "mergeNotificationJobsIntoState(reservedJobs)",
  "mergeNotificationJobsIntoState(failedJobs)"
]) {
  assert.ok(
    appSource.includes(AppOwnedCallSite),
    `batch notification call site moved from App: ${AppOwnedCallSite}`
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
  "Solapi"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `notification job batch helper crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job state batch TARGET/CONTROL fixtures passed");
