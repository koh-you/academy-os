import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createNotificationJobReconcilePayload } from "../src/domains/notifications/notificationJobReconcilePayload.js";

const notificationJobIds = ["job_TARGET", "job_CONTROL"];
const input = {
  date: "2026-07-28",
  lessonId: "lesson_TARGET",
  notificationJobIds,
  scheduledFrom: "2026-07-28T00:00:00.000Z",
  scheduledTo: "2026-07-29T00:00:00.000Z"
};
const inputSnapshot = structuredClone(input);
const payload = createNotificationJobReconcilePayload(input);
assert.deepEqual(payload, {
  ...input,
  limit: 500
});
assert.equal(payload.notificationJobIds, notificationJobIds);
assert.deepEqual(input, inputSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobReconcilePayload.js", import.meta.url),
  "utf8"
);
const modulePath =
  'from "../domains/notifications/notificationJobReconcilePayload.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
assert.equal(
  appSource.split("createNotificationJobReconcilePayload({").length - 1,
  1
);
assert.equal(
  helperSource.split("export function createNotificationJobReconcilePayload(")
    .length - 1,
  1
);

const functionStart = appSource.indexOf(
  'async function handleReconcileSolapiNotificationResults({ lessonId = "", date = "", notificationJobIds = [], scheduledFrom = "", scheduledTo = "" } = {})'
);
const functionEnd = appSource.indexOf(
  "\n  async function handleCancelNotificationJob(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
const requestIndex = functionSource.indexOf(
  "const result = await postJsonWithTimeout("
);
const endpointIndex = functionSource.indexOf(
  '"/api/notification-jobs/reconcile-solapi"',
  requestIndex
);
const helperIndex = functionSource.indexOf(
  "createNotificationJobReconcilePayload({",
  endpointIndex
);
const timeoutIndex = functionSource.indexOf("90000", helperIndex);
const jobMergeIndex = functionSource.indexOf(
  "mergeNotificationJobsIntoState(result.notificationJobs ?? [])",
  timeoutIndex
);
const recordGuardIndex = functionSource.indexOf(
  "if (Array.isArray(result.records) && result.records.length)",
  jobMergeIndex
);
const recordReduceIndex = functionSource.indexOf(
  "result.records.reduce(",
  recordGuardIndex
);
const refIndex = functionSource.indexOf(
  "recordsRef.current = nextRecords",
  recordReduceIndex
);
const stateIndex = functionSource.indexOf("setRecords(nextRecords)", refIndex);
const storageIndex = functionSource.indexOf(
  "writeStorageValue(window.localStorage",
  stateIndex
);
const savedStatesIndex = functionSource.indexOf(
  "const savedStates = Object.fromEntries(",
  storageIndex
);
const saveStateSetterIndex = functionSource.indexOf(
  "setSaveStates((currentStates)",
  savedStatesIndex
);
const returnIndex = functionSource.indexOf("return result", saveStateSetterIndex);
assert.ok(
  requestIndex >= 0 &&
    endpointIndex > requestIndex &&
    helperIndex > endpointIndex &&
    timeoutIndex > helperIndex &&
    jobMergeIndex > timeoutIndex &&
    recordGuardIndex > jobMergeIndex &&
    recordReduceIndex > recordGuardIndex &&
    refIndex > recordReduceIndex &&
    stateIndex > refIndex &&
    storageIndex > stateIndex &&
    savedStatesIndex > storageIndex &&
    saveStateSetterIndex > savedStatesIndex &&
    returnIndex > saveStateSetterIndex
);
assert.equal(
  appSource.split(
    "onReconcileSolapiNotificationResults={handleReconcileSolapiNotificationResults}"
  ).length - 1,
  3
);
assert.ok(
  !functionSource.includes(
    "{ date, lessonId, notificationJobIds, scheduledFrom, scheduledTo, limit: 500 }"
  )
);
for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "postJsonWithTimeout",
  "/api/",
  "new Date",
  "Date.now",
  "localStorage",
  "setNotificationJobs",
  "setRecords",
  "setSaveStates",
  "notification_jobs",
  "Solapi",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `notification reconcile payload closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job reconcile payload boundary closeout passed");
