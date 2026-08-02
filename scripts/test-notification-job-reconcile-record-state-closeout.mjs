import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createNotificationJobReconcileSavedStates,
  mergeNotificationJobReconcileRecords
} from "../src/domains/notifications/notificationJobReconcileRecordState.js";

const targetRecord = {
  lessonStudentRecordId: "record_TARGET",
  marker: "TARGET"
};
const controlRecord = {
  lessonStudentRecordId: "record_CONTROL",
  marker: "CONTROL"
};
const currentRecords = [controlRecord];
const nextRecords = mergeNotificationJobReconcileRecords({
  currentRecords,
  records: [targetRecord],
  upsertRecord(records, record) {
    return [...records, record];
  }
});
assert.deepEqual(nextRecords, [controlRecord, targetRecord]);
assert.equal(nextRecords[0], controlRecord);
assert.equal(nextRecords[1], targetRecord);
assert.deepEqual(
  createNotificationJobReconcileSavedStates([
    targetRecord,
    { marker: "WITHOUT_ID" },
    targetRecord
  ]),
  { record_TARGET: "saved" }
);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const teacherViewOutletSource = await readFile(
  new URL("../src/app/TeacherViewOutlet.js", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/notifications/notificationJobReconcileRecordState.js",
    import.meta.url
  ),
  "utf8"
);
const modulePath =
  'from "../domains/notifications/notificationJobReconcileRecordState.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
assert.equal(
  helperSource.split("export function mergeNotificationJobReconcileRecords(")
    .length - 1,
  1
);
assert.equal(
  helperSource.split(
    "export function createNotificationJobReconcileSavedStates("
  ).length - 1,
  1
);
assert.equal(
  appSource.split("mergeNotificationJobReconcileRecords({").length - 1,
  1
);
assert.equal(
  appSource.split(
    "createNotificationJobReconcileSavedStates(result.records)"
  ).length - 1,
  1
);

const functionStart = appSource.indexOf(
  "function applyNotificationJobsReconcileResult(result)"
);
const functionEnd = appSource.indexOf(
  "\n  function getNotificationJobsReconcileController(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
const jobMergeIndex = functionSource.indexOf(
  "mergeNotificationJobsIntoState(result.notificationJobs ?? [])"
);
const recordGuardIndex = functionSource.indexOf(
  "if (Array.isArray(result.records) && result.records.length)",
  jobMergeIndex
);
const recordMergeIndex = functionSource.indexOf(
  "const nextRecords = mergeNotificationJobReconcileRecords({",
  recordGuardIndex
);
const upsertDependencyIndex = functionSource.indexOf(
  "upsertRecord: upsertLessonStudentRecord",
  recordMergeIndex
);
const refIndex = functionSource.indexOf(
  "recordsRef.current = nextRecords",
  upsertDependencyIndex
);
const stateIndex = functionSource.indexOf("setRecords(nextRecords)", refIndex);
const storageIndex = functionSource.indexOf(
  "writeStorageValue(window.localStorage",
  stateIndex
);
const savedStateIndex = functionSource.indexOf(
  "const savedStates = createNotificationJobReconcileSavedStates(result.records)",
  storageIndex
);
const savedStateGuardIndex = functionSource.indexOf(
  "if (Object.keys(savedStates).length)",
  savedStateIndex
);
const savedStateSetterIndex = functionSource.indexOf(
  "setSaveStates((currentStates)",
  savedStateGuardIndex
);
assert.ok(
  jobMergeIndex >= 0 &&
    recordGuardIndex > jobMergeIndex &&
    recordMergeIndex > recordGuardIndex &&
    upsertDependencyIndex > recordMergeIndex &&
    refIndex > upsertDependencyIndex &&
    stateIndex > refIndex &&
    storageIndex > stateIndex &&
    savedStateIndex > storageIndex &&
    savedStateGuardIndex > savedStateIndex &&
    savedStateSetterIndex > savedStateGuardIndex
);
assert.equal(
  teacherViewOutletSource.split(
    "onReconcileSolapiNotificationResults: actions.handleReconcileSolapiNotificationResults"
  ).length - 1,
  3
);
assert.ok(!functionSource.includes("const nextRecords = result.records.reduce("));
assert.ok(!functionSource.includes("const savedStates = Object.fromEntries("));

for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "localStorage",
  "setRecords",
  "setSaveStates",
  "notification_jobs",
  "Solapi",
  "new Date",
  "Date.now",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `reconcile record state closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job reconcile record state boundary closeout passed");
