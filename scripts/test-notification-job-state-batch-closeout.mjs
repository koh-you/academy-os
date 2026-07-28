import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  mergeNotificationJobLists,
  selectValidNotificationJobs
} from "../src/domains/notifications/notificationJobState.js";

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
const incomingJobs = [
  null,
  {
    notificationJobId: "job_TARGET",
    marker: "TARGET_NEW_A"
  },
  {
    notificationJobId: "job_TARGET",
    marker: "TARGET_NEW_B"
  },
  {
    marker: "INVALID"
  }
];
const currentSnapshot = structuredClone(currentJobs);
const incomingSnapshot = structuredClone(incomingJobs);
const validJobs = selectValidNotificationJobs(incomingJobs);

assert.deepEqual(validJobs, [incomingJobs[1], incomingJobs[2]]);
assert.deepEqual(mergeNotificationJobLists(currentJobs, validJobs), [
  incomingJobs[1],
  incomingJobs[2],
  currentJobs[1]
]);
assert.deepEqual(selectValidNotificationJobs([]), []);
assert.deepEqual(currentJobs, currentSnapshot);
assert.deepEqual(incomingJobs, incomingSnapshot);

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
for (const importedHelper of [
  "mergeNotificationJobLists",
  "selectValidNotificationJobs",
  "upsertNotificationJobList"
]) {
  assert.equal(
    importSource.split(importedHelper).length - 1,
    1,
    `unexpected import count for ${importedHelper}`
  );
}
assert.equal(
  helperSource.split("export function selectValidNotificationJobs(").length - 1,
  1
);
assert.equal(
  helperSource.split("export function mergeNotificationJobLists(").length - 1,
  1
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
assert.equal(
  functionSource.split("selectValidNotificationJobs(nextJobs)").length - 1,
  1
);
assert.equal(
  functionSource.split("mergeNotificationJobLists(current, validJobs)").length - 1,
  1
);
const selectionIndex = functionSource.indexOf(
  "const validJobs = selectValidNotificationJobs(nextJobs)"
);
const guardIndex = functionSource.indexOf("if (!validJobs.length) return");
const setterIndex = functionSource.indexOf(
  "setNotificationJobs((current) => mergeNotificationJobLists(current, validJobs))"
);
assert.ok(selectionIndex >= 0 && guardIndex > selectionIndex && setterIndex > guardIndex);
assert.equal(appSource.split("mergeNotificationJobsIntoState(").length - 1, 5);
for (const AppOwnedCallSite of [
  "mergeNotificationJobsIntoState(result.notificationJobs);",
  "mergeNotificationJobsIntoState(result.notificationJobs ?? []);",
  "mergeNotificationJobsIntoState(reservedJobs);",
  "mergeNotificationJobsIntoState(failedJobs);"
]) {
  assert.equal(
    appSource.split(AppOwnedCallSite).length - 1,
    1,
    `unexpected App-owned batch merge call count: ${AppOwnedCallSite}`
  );
}
for (const removedInlineCalculation of [
  "nextJobs.filter(",
  "new Set(",
  "current.filter("
]) {
  assert.ok(
    !functionSource.includes(removedInlineCalculation),
    `inline batch calculation remained in App: ${removedInlineCalculation}`
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
    `notification job batch closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job state batch boundary closeout passed");
