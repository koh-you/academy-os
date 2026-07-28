import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createNotificationJobReconcileSavedStates,
  mergeNotificationJobReconcileRecords
} from "../src/domains/notifications/notificationJobReconcileRecordState.js";

const currentRecords = [
  { lessonStudentRecordId: "record_TARGET", marker: "TARGET_OLD" },
  { lessonStudentRecordId: "record_CONTROL", marker: "CONTROL" }
];
const responseRecords = [
  { lessonStudentRecordId: "record_TARGET", marker: "TARGET_NEW" },
  { lessonStudentRecordId: "record_NEW", marker: "NEW" },
  { marker: "WITHOUT_ID" },
  { lessonStudentRecordId: "record_TARGET", marker: "TARGET_FINAL" }
];
const currentSnapshot = structuredClone(currentRecords);
const responseSnapshot = structuredClone(responseRecords);
const calls = [];
const nextRecords = mergeNotificationJobReconcileRecords({
  currentRecords,
  records: responseRecords,
  upsertRecord(records, record) {
    calls.push(record);
    const matchingIndex = records.findIndex(
      (item) =>
        item.lessonStudentRecordId === record.lessonStudentRecordId &&
        Boolean(record.lessonStudentRecordId)
    );
    return matchingIndex < 0
      ? [...records, record]
      : records.map((item, index) => (index === matchingIndex ? record : item));
  }
});

assert.deepEqual(nextRecords, [
  responseRecords[3],
  currentRecords[1],
  responseRecords[1],
  responseRecords[2]
]);
assert.equal(nextRecords[1], currentRecords[1]);
assert.deepEqual(calls, responseRecords);
assert.deepEqual(createNotificationJobReconcileSavedStates(responseRecords), {
  record_TARGET: "saved",
  record_NEW: "saved"
});
assert.equal(
  mergeNotificationJobReconcileRecords({
    currentRecords,
    records: [],
    upsertRecord() {
      throw new Error("empty records must not call upsert");
    }
  }),
  currentRecords
);
assert.deepEqual(createNotificationJobReconcileSavedStates(), {});
assert.deepEqual(currentRecords, currentSnapshot);
assert.deepEqual(responseRecords, responseSnapshot);

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
for (const appBoundary of [
  "mergeNotificationJobReconcileRecords({",
  "currentRecords: recordsRef.current",
  "records: result.records",
  "upsertRecord: upsertLessonStudentRecord",
  "recordsRef.current = nextRecords",
  "setRecords(nextRecords)",
  "writeStorageValue(window.localStorage",
  "createNotificationJobReconcileSavedStates(result.records)",
  "setSaveStates((currentStates)"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing App-owned reconcile record boundary: ${appBoundary}`
  );
}
assert.ok(!appSource.includes("const nextRecords = result.records.reduce("));
assert.ok(
  !appSource.includes(
    '.map((record) => [record.lessonStudentRecordId, "saved"])'
  )
);
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
    `reconcile record state helper crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "notification job reconcile record state TARGET/CONTROL fixtures passed"
);
