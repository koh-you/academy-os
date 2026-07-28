import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalRecordSaveStates } from "../src/domains/lessons/lessonJournalDraftPersistenceState.js";

const records = [
  {
    lessonStudentRecordId: "record_TARGET"
  },
  {
    lessonStudentRecordId: "record_CONTROL"
  },
  {
    lessonStudentRecordId: "record_TARGET"
  }
];
const recordsSnapshot = structuredClone(records);
for (const status of ["saving", "saved", "failed"]) {
  const existingInlineResult = Object.fromEntries(
    records.map((record) => [record.lessonStudentRecordId, status])
  );
  assert.deepEqual(
    createLessonJournalRecordSaveStates(records, status),
    existingInlineResult
  );
}
assert.deepEqual(createLessonJournalRecordSaveStates([], "saving"), {});
assert.deepEqual(records, recordsSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const stateModelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalDraftPersistenceState.js", import.meta.url),
  "utf8"
);
const functionStart = appSource.indexOf(
  "function updateLessonNotificationRecordStatuses(lesson, statusText)"
);
const functionEnd = appSource.indexOf(
  "\n  function upsertNotificationJobState(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);

for (const inlineState of [
  'const savingStates = Object.fromEntries(recordsToSave.map((record) => [record.lessonStudentRecordId, "saving"]))',
  'const savedStates = Object.fromEntries(recordsToSave.map((record) => [record.lessonStudentRecordId, "saved"]))',
  'const failedStates = Object.fromEntries(recordsToSave.map((record) => [record.lessonStudentRecordId, "failed"]))'
]) {
  assert.ok(
    functionSource.includes(inlineState),
    `missing current inline save-state map: ${inlineState}`
  );
}
assert.equal(
  functionSource.split("Object.fromEntries(recordsToSave.map(").length - 1,
  3
);

for (const reusableBoundary of [
  "createLessonJournalRecordSaveStates,",
  'createLessonJournalRecordSaveStates(recordsToSave, "saving")',
  'createLessonJournalRecordSaveStates(recordsToSave, "saved")',
  'createLessonJournalRecordSaveStates(recordsToSave, "failed")'
]) {
  assert.ok(
    appSource.includes(reusableBoundary),
    `missing existing reusable save-state boundary: ${reusableBoundary}`
  );
}
for (const helperRule of [
  "export function createLessonJournalRecordSaveStates(records = [], status = \"\")",
  "return Object.fromEntries(",
  "records.map((record) => [record.lessonStudentRecordId, status])"
]) {
  assert.ok(
    stateModelSource.includes(helperRule),
    `missing reusable save-state rule: ${helperRule}`
  );
}
for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "new Date",
  "Date.now",
  "/api/",
  "Supabase",
  "Solapi",
  "localStorage",
  "recordsRef",
  "setRecords",
  "setSaveStates",
  "Promise.all"
]) {
  assert.ok(
    !stateModelSource.includes(forbiddenSideEffect),
    `reusable save-state helper crossed a side effect: ${forbiddenSideEffect}`
  );
}

console.log("lesson notification record save-state inventory passed");
