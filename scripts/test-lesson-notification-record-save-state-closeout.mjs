import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalRecordSaveStates } from "../src/domains/lessons/lessonJournalDraftPersistenceState.js";

const virtualRecords = [
  {
    lessonStudentRecordId: "record_TARGET",
    untouched: "TARGET"
  },
  {
    lessonStudentRecordId: "record_CONTROL",
    untouched: "CONTROL"
  }
];
const virtualRecordsSnapshot = structuredClone(virtualRecords);
for (const status of ["saving", "saved", "failed"]) {
  assert.deepEqual(createLessonJournalRecordSaveStates(virtualRecords, status), {
    record_TARGET: status,
    record_CONTROL: status
  });
}
assert.deepEqual(virtualRecords, virtualRecordsSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
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

assert.equal(
  functionSource.split("createLessonJournalRecordSaveStates(recordsToSave,").length - 1,
  3
);
assert.equal(
  functionSource.split("setSaveStates((currentStates) =>").length - 1,
  3
);
assert.equal(
  functionSource.split(
    "patchLessonRecordNotificationStatusRequest(createLessonNotificationRecordStatusPayload(record))"
  ).length - 1,
  1
);
assert.ok(!functionSource.includes("Object.fromEntries(recordsToSave.map("));

const orderedBoundaries = [
  'const savingStates = createLessonJournalRecordSaveStates(recordsToSave, "saving")',
  "setSaveStates((currentStates) => ({ ...currentStates, ...savingStates }))",
  "Promise.all(recordsToSave.map((record) =>",
  "patchLessonRecordNotificationStatusRequest(createLessonNotificationRecordStatusPayload(record))",
  ".then(() => {",
  'const savedStates = createLessonJournalRecordSaveStates(recordsToSave, "saved")',
  "setSaveStates((currentStates) => ({ ...currentStates, ...savedStates }))",
  ".catch((error) => {",
  "console.error(error)",
  'const failedStates = createLessonJournalRecordSaveStates(recordsToSave, "failed")',
  "setSaveStates((currentStates) => ({ ...currentStates, ...failedStates }))"
].map((token) => functionSource.indexOf(token));
assert.ok(orderedBoundaries.every((index) => index >= 0));
for (let index = 1; index < orderedBoundaries.length; index += 1) {
  assert.ok(
    orderedBoundaries[index - 1] < orderedBoundaries[index],
    "notification record save-state effect order must stay stable"
  );
}

for (const forbiddenHelperEffect of [
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
  "patchLessonRecordNotificationStatusRequest",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `record save-state helper crossed closeout boundary: ${forbiddenHelperEffect}`
  );
}

for (const forbiddenProviderAction of [
  "/api/notification-jobs",
  "/api/solapi",
  "reserveLessonNotificationJobs(",
  "persistCanceledNotificationJob(",
  "setNotificationJobs("
]) {
  assert.ok(
    !functionSource.includes(forbiddenProviderAction),
    `record save-state boundary crossed provider orchestration: ${forbiddenProviderAction}`
  );
}

console.log("lesson notification record save-state boundary closeout passed");
