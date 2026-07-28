import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

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

assert.deepEqual(applyExistingBatchMerge(currentJobs, nextJobs), {
  nextJobs: [
    nextJobs[1],
    nextJobs[3],
    nextJobs[4],
    currentJobs[1],
    currentJobs[3]
  ],
  skipped: false
});
const invalidOnlyJobs = [null, {}, { notificationJobId: "" }];
const invalidResult = applyExistingBatchMerge(currentJobs, invalidOnlyJobs);
assert.equal(invalidResult.skipped, true);
assert.equal(invalidResult.nextJobs, currentJobs);
assert.deepEqual(currentJobs, currentSnapshot);
assert.deepEqual(nextJobs, nextSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
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
  "const validJobs = nextJobs.filter((job) => job?.notificationJobId)",
  "if (!validJobs.length) return",
  "const nextJobIds = new Set(validJobs.map((job) => job.notificationJobId))",
  "setNotificationJobs((current) => [",
  "...validJobs,",
  "...current.filter((job) => !nextJobIds.has(job.notificationJobId))"
]) {
  assert.ok(
    functionSource.includes(existingBoundary),
    `missing batch notification state boundary: ${existingBoundary}`
  );
}
for (const AppOwnedCallSite of [
  "mergeNotificationJobsIntoState(result.notificationJobs)",
  "mergeNotificationJobsIntoState(result.notificationJobs ?? [])",
  "mergeNotificationJobsIntoState(reservedJobs)",
  "mergeNotificationJobsIntoState(failedJobs)"
]) {
  assert.ok(
    appSource.includes(AppOwnedCallSite),
    `missing App-owned batch merge call site: ${AppOwnedCallSite}`
  );
}
assert.ok(!appSource.includes("mergeNotificationJobLists"));
assert.ok(!appSource.includes("selectValidNotificationJobs"));

console.log("notification job state batch inventory TARGET/CONTROL fixtures passed");
