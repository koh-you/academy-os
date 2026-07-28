import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const functionStart = appSource.indexOf(
  "function updateLessonNotificationRecordStatuses(lesson, statusText)"
);
const functionEnd = appSource.indexOf(
  "\n  function upsertNotificationJobState(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);

assert.equal(
  appSource.split("updateLessonNotificationRecordStatuses(").length - 1,
  5,
  "one definition and four reservation-plan consumers must remain"
);

for (const rowRule of [
  "const lessonStudentsForRecords = getActiveLessonStudents(lesson, students)",
  "const updatedAt = new Date().toISOString()",
  "const recordsToSave = createLessonNotificationRecordStatusRows({",
  "createRecordId: createLessonStudentRecordId,",
  "getRecord: getLessonStudentRecord,",
  "lesson,",
  "statusText,",
  "students: lessonStudentsForRecords,",
  "updatedAt"
]) {
  assert.ok(functionSource.includes(rowRule), `missing status row rule: ${rowRule}`);
}

const rowPlanEnd = functionSource.indexOf("\n    if (recordsToSave.length === 0) return;");
assert.ok(rowPlanEnd > 0);
const rowPlanSource = functionSource.slice(0, rowPlanEnd);
for (const forbiddenRowEffect of [
  "Promise.all",
  "patchLessonRecordNotificationStatusRequest",
  "recordsRef.current =",
  "setRecords(",
  "setSaveStates(",
  "fetch(",
  "postJson",
  "/api/",
  "Solapi"
]) {
  assert.ok(
    !rowPlanSource.includes(forbiddenRowEffect),
    `row plan crossed a persistence effect: ${forbiddenRowEffect}`
  );
}

for (const persistenceRule of [
  "if (recordsToSave.length === 0) return",
  "const nextRecords = recordsToSave.reduce(",
  "upsertLessonStudentRecord(currentRecords, record)",
  "recordsRef.current",
  "recordsRef.current = nextRecords",
  "setRecords(nextRecords)",
  'createLessonJournalRecordSaveStates(recordsToSave, "saving")',
  "Promise.all(recordsToSave.map((record) =>",
  "patchLessonRecordNotificationStatusRequest(createLessonNotificationRecordStatusPayload(record))",
  'createLessonJournalRecordSaveStates(recordsToSave, "saved")',
  'createLessonJournalRecordSaveStates(recordsToSave, "failed")'
]) {
  assert.ok(
    functionSource.includes(persistenceRule),
    `missing App-owned status persistence rule: ${persistenceRule}`
  );
}

const persistenceOrder = [
  "if (recordsToSave.length === 0) return",
  "recordsRef.current = nextRecords",
  "setRecords(nextRecords)",
  'createLessonJournalRecordSaveStates(recordsToSave, "saving")',
  "Promise.all(",
  'createLessonJournalRecordSaveStates(recordsToSave, "saved")',
  'createLessonJournalRecordSaveStates(recordsToSave, "failed")'
].map((token) => functionSource.indexOf(token));
assert.ok(persistenceOrder.every((index) => index >= 0));
for (let index = 1; index < persistenceOrder.length; index += 1) {
  assert.ok(
    persistenceOrder[index - 1] < persistenceOrder[index],
    "status persistence order must stay stable"
  );
}

for (const callStatus of [
  'updateLessonNotificationRecordStatuses(lesson, "알림톡 없음")',
  'updateLessonNotificationRecordStatuses(lesson, "예약 시간 지남")',
  "updateLessonNotificationRecordStatuses(lesson, `예약 중 · ${scheduledLabel}`)"
]) {
  assert.ok(appSource.includes(callStatus), `missing status consumer: ${callStatus}`);
}
assert.equal(
  appSource.split(
    "updateLessonNotificationRecordStatuses(lesson, `예약 중 · ${scheduledLabel}`)"
  ).length - 1,
  2
);

console.log("lesson notification record status inventory passed");
