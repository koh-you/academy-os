import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createNotificationJobReconcileSavedStates,
  mergeNotificationJobReconcileRecords
} from "../src/domains/notifications/notificationJobReconcileRecordState.js";

function createExistingNotificationJobReconcileRecordState({
  currentRecords = [],
  records = [],
  upsertRecord
} = {}) {
  const nextRecords = records.reduce(
    (accumulatedRecords, record) => upsertRecord(accumulatedRecords, record),
    currentRecords
  );
  const savedStates = Object.fromEntries(
    records
      .filter((record) => record?.lessonStudentRecordId)
      .map((record) => [record.lessonStudentRecordId, "saved"])
  );
  return {
    nextRecords,
    savedStates
  };
}

function upsertFixtureRecord(records, nextRecord) {
  const matchingIndex = records.findIndex(
    (record) =>
      (nextRecord.lessonStudentRecordId &&
        record.lessonStudentRecordId === nextRecord.lessonStudentRecordId) ||
      (record.lessonId === nextRecord.lessonId &&
        record.studentId === nextRecord.studentId)
  );
  if (matchingIndex < 0) return [...records, nextRecord];
  return records.map((record, index) =>
    index === matchingIndex ? nextRecord : record
  );
}

const currentRecords = [
  {
    lessonStudentRecordId: "record_TARGET",
    lessonId: "lesson_TARGET",
    studentId: "student_TARGET",
    marker: "TARGET_OLD"
  },
  {
    lessonStudentRecordId: "record_CONTROL",
    lessonId: "lesson_CONTROL",
    studentId: "student_CONTROL",
    marker: "CONTROL"
  }
];
const responseRecords = [
  {
    lessonStudentRecordId: "record_TARGET",
    lessonId: "lesson_TARGET",
    studentId: "student_TARGET",
    marker: "TARGET_NEW"
  },
  {
    lessonStudentRecordId: "record_NEW",
    lessonId: "lesson_NEW",
    studentId: "student_NEW",
    marker: "NEW"
  },
  {
    lessonId: "lesson_WITHOUT_ID",
    studentId: "student_WITHOUT_ID",
    marker: "WITHOUT_ID"
  },
  {
    lessonStudentRecordId: "record_TARGET",
    lessonId: "lesson_TARGET",
    studentId: "student_TARGET",
    marker: "TARGET_FINAL"
  }
];
const currentSnapshot = structuredClone(currentRecords);
const responseSnapshot = structuredClone(responseRecords);
const calls = [];
const result = createExistingNotificationJobReconcileRecordState({
  currentRecords,
  records: responseRecords,
  upsertRecord(records, record) {
    calls.push(record);
    return upsertFixtureRecord(records, record);
  }
});
const extractedCalls = [];
const extractedNextRecords = mergeNotificationJobReconcileRecords({
  currentRecords,
  records: responseRecords,
  upsertRecord(records, record) {
    extractedCalls.push(record);
    return upsertFixtureRecord(records, record);
  }
});
const extractedSavedStates =
  createNotificationJobReconcileSavedStates(responseRecords);

assert.deepEqual(result.nextRecords, [
  responseRecords[3],
  currentRecords[1],
  responseRecords[1],
  responseRecords[2]
]);
assert.equal(result.nextRecords[1], currentRecords[1]);
assert.deepEqual(result.savedStates, {
  record_TARGET: "saved",
  record_NEW: "saved"
});
assert.deepEqual(extractedNextRecords, result.nextRecords);
assert.deepEqual(extractedSavedStates, result.savedStates);
assert.deepEqual(calls, responseRecords);
assert.deepEqual(extractedCalls, responseRecords);
assert.deepEqual(currentRecords, currentSnapshot);
assert.deepEqual(responseRecords, responseSnapshot);

const emptyResult = createExistingNotificationJobReconcileRecordState({
  currentRecords,
  records: [],
  upsertRecord: upsertFixtureRecord
});
assert.equal(emptyResult.nextRecords, currentRecords);
assert.deepEqual(emptyResult.savedStates, {});

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/notifications/notificationJobReconcileRecordState.js",
    import.meta.url
  ),
  "utf8"
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

for (const calculationBoundary of [
  "if (Array.isArray(result.records) && result.records.length)",
  "const nextRecords = mergeNotificationJobReconcileRecords({",
  "currentRecords: recordsRef.current",
  "records: result.records",
  "upsertRecord: upsertLessonStudentRecord",
  "const savedStates = createNotificationJobReconcileSavedStates(result.records)",
  "if (Object.keys(savedStates).length)"
]) {
  assert.ok(
    functionSource.includes(calculationBoundary),
    `missing reconcile record calculation boundary: ${calculationBoundary}`
  );
}

const reduceIndex = functionSource.indexOf(
  "const nextRecords = mergeNotificationJobReconcileRecords({"
);
const refIndex = functionSource.indexOf(
  "recordsRef.current = nextRecords",
  reduceIndex
);
const stateIndex = functionSource.indexOf("setRecords(nextRecords)", refIndex);
const storageIndex = functionSource.indexOf(
  "writeStorageValue(window.localStorage",
  stateIndex
);
const savedStatesIndex = functionSource.indexOf(
  "const savedStates = createNotificationJobReconcileSavedStates(result.records)",
  storageIndex
);
const saveStateSetterIndex = functionSource.indexOf(
  "setSaveStates((currentStates)",
  savedStatesIndex
);
assert.ok(
  reduceIndex >= 0 &&
    refIndex > reduceIndex &&
    stateIndex > refIndex &&
    storageIndex > stateIndex &&
    savedStatesIndex > storageIndex &&
    saveStateSetterIndex > savedStatesIndex
);
for (const helperRule of [
  "export function mergeNotificationJobReconcileRecords({",
  "return records.reduce(",
  "(accumulatedRecords, record) => upsertRecord(accumulatedRecords, record)",
  "currentRecords",
  "export function createNotificationJobReconcileSavedStates(records = [])",
  "return Object.fromEntries(",
  ".filter((record) => record?.lessonStudentRecordId)",
  '.map((record) => [record.lessonStudentRecordId, "saved"])'
]) {
  assert.ok(
    helperSource.includes(helperRule),
    `missing extracted reconcile record calculation: ${helperRule}`
  );
}

console.log(
  "notification job reconcile record state inventory TARGET/CONTROL fixtures passed"
);
