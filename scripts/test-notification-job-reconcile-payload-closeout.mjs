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
const teacherViewOutletSource = await readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8");
const lessonJournalEffectAdapterSource = await readFile(new URL("../src/domains/lessons/lessonJournalEffectAdapter.js", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobReconcilePayload.js", import.meta.url),
  "utf8"
);
const controllerSource = await readFile(
  new URL(
    "../src/domains/notifications/notificationJobsReconcileController.js",
    import.meta.url
  ),
  "utf8"
);
const modulePath =
  'from "../domains/notifications/notificationJobReconcilePayload.js"';
assert.equal(appSource.split(modulePath).length - 1, 0);
assert.equal(
  controllerSource.split('from "./notificationJobReconcilePayload.js"').length - 1,
  1
);
assert.equal(
  controllerSource.split("createNotificationJobReconcilePayload(options)").length - 1,
  1
);
assert.equal(
  helperSource.split("export function createNotificationJobReconcilePayload(")
    .length - 1,
  1
);

const functionStart = controllerSource.indexOf(
  "function reconcile(options = {})"
);
const functionEnd = controllerSource.indexOf(
  "\n  function dispose(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = controllerSource.slice(functionStart, functionEnd);
const helperIndex = functionSource.indexOf(
  "createNotificationJobReconcilePayload(options)"
);
const requestIndex = functionSource.indexOf(
  "const result = await request("
);
const endpointIndex = functionSource.indexOf(
  '"/api/notification-jobs/reconcile-solapi"',
  requestIndex
);
const timeoutIndex = functionSource.indexOf("90000", endpointIndex);
const resultIndex = functionSource.indexOf("onResult(result)", timeoutIndex);
const returnIndex = functionSource.indexOf("return result", resultIndex);
assert.ok(
  helperIndex >= 0 &&
    requestIndex > helperIndex &&
    endpointIndex > requestIndex &&
    timeoutIndex > endpointIndex &&
    resultIndex > timeoutIndex &&
    returnIndex > resultIndex
);

const applyStart = appSource.indexOf("function applyNotificationJobsReconcileResult(result)");
const applyEnd = appSource.indexOf(
  "\n  function getNotificationJobsReconcileController(",
  applyStart
);
assert.ok(applyStart >= 0 && applyEnd > applyStart);
const applySource = appSource.slice(applyStart, applyEnd);
const jobMergeIndex = applySource.indexOf(
  "mergeNotificationJobsIntoState(result.notificationJobs ?? [])"
);
const recordGuardIndex = applySource.indexOf(
  "if (Array.isArray(result.records) && result.records.length)",
  jobMergeIndex
);
const recordReduceIndex = applySource.indexOf(
  "mergeNotificationJobReconcileRecords({",
  recordGuardIndex
);
const refIndex = applySource.indexOf(
  "recordsRef.current = nextRecords",
  recordReduceIndex
);
const stateIndex = applySource.indexOf("setRecords(nextRecords)", refIndex);
const storageIndex = applySource.indexOf(
  "writeStorageValue(window.localStorage",
  stateIndex
);
const savedStatesIndex = applySource.indexOf(
  "const savedStates = createNotificationJobReconcileSavedStates(result.records)",
  storageIndex
);
const saveStateSetterIndex = applySource.indexOf(
  "setSaveStates((currentStates)",
  savedStatesIndex
);
assert.ok(
  jobMergeIndex >= 0 &&
    recordGuardIndex > jobMergeIndex &&
    recordReduceIndex > recordGuardIndex &&
    refIndex > recordReduceIndex &&
    stateIndex > refIndex &&
    storageIndex > stateIndex &&
    savedStatesIndex > storageIndex &&
    saveStateSetterIndex > savedStatesIndex
);
assert.equal(
  `${teacherViewOutletSource}\n${lessonJournalEffectAdapterSource}`.split(
    "onReconcileSolapiNotificationResults: actions.handleReconcileSolapiNotificationResults"
  ).length - 1,
  3
);
assert.ok(
  !controllerSource.includes(
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
