import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalRecordSaveStates } from "../src/domains/lessons/lessonJournalDraftPersistenceState.js";

const records = [
  {
    lessonStudentRecordId: "record_TARGET",
    untouched: "TARGET"
  },
  {
    lessonStudentRecordId: "record_CONTROL",
    untouched: "CONTROL"
  },
  {
    lessonStudentRecordId: "record_TARGET",
    untouched: "TARGET_DUPLICATE"
  }
];
const snapshot = structuredClone(records);
assert.deepEqual(createLessonJournalRecordSaveStates(records, "saving"), {
  record_TARGET: "saving",
  record_CONTROL: "saving"
});
assert.deepEqual(createLessonJournalRecordSaveStates(records, "saved"), {
  record_TARGET: "saved",
  record_CONTROL: "saved"
});
assert.deepEqual(createLessonJournalRecordSaveStates(records, "failed"), {
  record_TARGET: "failed",
  record_CONTROL: "failed"
});
assert.deepEqual(createLessonJournalRecordSaveStates([], "saved"), {});
assert.deepEqual(records, snapshot);

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

for (const sharedState of [
  'const savingStates = createLessonJournalRecordSaveStates(recordsToSave, "saving")',
  'const savedStates = createLessonJournalRecordSaveStates(recordsToSave, "saved")',
  'const failedStates = createLessonJournalRecordSaveStates(recordsToSave, "failed")'
]) {
  assert.ok(
    functionSource.includes(sharedState),
    `missing reused notification save-state helper: ${sharedState}`
  );
}
assert.equal(
  functionSource.split("createLessonJournalRecordSaveStates(recordsToSave,").length - 1,
  3
);
assert.ok(!functionSource.includes("Object.fromEntries(recordsToSave.map("));
for (const AppOwnedBoundary of [
  "setSaveStates((currentStates) => ({ ...currentStates, ...savingStates }))",
  "Promise.all(recordsToSave.map((record) =>",
  "patchLessonRecordNotificationStatusRequest(createLessonNotificationRecordStatusPayload(record))",
  "setSaveStates((currentStates) => ({ ...currentStates, ...savedStates }))",
  "console.error(error)",
  "setSaveStates((currentStates) => ({ ...currentStates, ...failedStates }))"
]) {
  assert.ok(
    functionSource.includes(AppOwnedBoundary),
    `notification save-state effect moved from App: ${AppOwnedBoundary}`
  );
}

console.log("lesson notification record save-state reuse TARGET/CONTROL fixtures passed");
