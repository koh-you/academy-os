import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  mergeNotificationJobLists,
  selectValidNotificationJobs
} from "../src/domains/notifications/notificationJobState.js";

function applyExistingBatchMerge(currentJobs, nextJobs) {
  const validJobs = nextJobs.filter((job) => job?.notificationJobId);
  if (!validJobs.length) {
    return {
      nextJobs: currentJobs,
      skipped: true
    };
  }
  const nextJobIds = new Set(validJobs.map((job) => job.notificationJobId));
  return {
    nextJobs: [
      ...validJobs,
      ...currentJobs.filter((job) => !nextJobIds.has(job.notificationJobId))
    ],
    skipped: false
  };
}

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

const existingResult = applyExistingBatchMerge(currentJobs, nextJobs);
assert.deepEqual(existingResult, {
  nextJobs: [
    nextJobs[1],
    nextJobs[3],
    nextJobs[4],
    currentJobs[1],
    currentJobs[3]
  ],
  skipped: false
});
const validJobs = selectValidNotificationJobs(nextJobs);
assert.deepEqual(validJobs, [nextJobs[1], nextJobs[3], nextJobs[4]]);
assert.deepEqual(
  mergeNotificationJobLists(currentJobs, validJobs),
  existingResult.nextJobs
);
const invalidOnlyJobs = [null, {}, { notificationJobId: "" }];
const invalidResult = applyExistingBatchMerge(currentJobs, invalidOnlyJobs);
assert.equal(invalidResult.skipped, true);
assert.equal(invalidResult.nextJobs, currentJobs);
assert.deepEqual(selectValidNotificationJobs(invalidOnlyJobs), []);
assert.deepEqual(currentJobs, currentSnapshot);
assert.deepEqual(nextJobs, nextSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobState.js", import.meta.url),
  "utf8"
);
const refreshControllerSource = await readFile(
  new URL(
    "../src/domains/notifications/notificationJobsRefreshController.js",
    import.meta.url
  ),
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

for (const existingBoundary of [
  "const validJobs = selectValidNotificationJobs(nextJobs)",
  "if (!validJobs.length) return",
  "setNotificationJobs((current) => mergeNotificationJobLists(current, validJobs))"
]) {
  assert.ok(
    functionSource.includes(existingBoundary),
    `missing batch notification state boundary: ${existingBoundary}`
  );
}
for (const AppOwnedCallSite of [
  "mergeNotificationJobsIntoState(nextJobs)",
  "mergeNotificationJobsIntoState(result.notificationJobs ?? [])",
  "mergeNotificationJobsIntoState(reservedJobs)",
  "mergeNotificationJobsIntoState(failedJobs)"
]) {
  assert.ok(
    appSource.includes(AppOwnedCallSite),
    `missing App-owned batch merge call site: ${AppOwnedCallSite}`
  );
}
assert.ok(
  refreshControllerSource.includes("onJobs({") &&
    refreshControllerSource.includes("notificationJobs: result.notificationJobs,") &&
    refreshControllerSource.includes('replace: scope === "active" && !lessonId')
);
for (const helperRule of [
  "export function selectValidNotificationJobs(notificationJobs = [])",
  "return notificationJobs.filter((job) => job?.notificationJobId)",
  "export function mergeNotificationJobLists(currentJobs = [], nextJobs = [])",
  "const nextJobIds = new Set(nextJobs.map((job) => job.notificationJobId))",
  "...nextJobs,",
  "...currentJobs.filter((job) => !nextJobIds.has(job.notificationJobId))"
]) {
  assert.ok(
    helperSource.includes(helperRule),
    `missing extracted batch notification state rule: ${helperRule}`
  );
}

console.log("notification job state batch inventory TARGET/CONTROL fixtures passed");
