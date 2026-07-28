import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const builderSource = await readFile(
  new URL("../src/domains/lessons/lessonNotificationRecordStatusRows.js", import.meta.url),
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
  appSource.split(
    'import { createLessonNotificationRecordStatusRows } from "../domains/lessons/lessonNotificationRecordStatusRows.js"'
  ).length - 1,
  1
);
assert.equal(
  appSource.split("createLessonNotificationRecordStatusRows({").length - 1,
  1
);
assert.equal(
  builderSource.split("export function createLessonNotificationRecordStatusRows(").length - 1,
  1
);

for (const AppOwnedBoundary of [
  "const lessonStudentsForRecords = getActiveLessonStudents(lesson, students)",
  "const updatedAt = new Date().toISOString()",
  "const recordsToSave = createLessonNotificationRecordStatusRows({",
  "createRecordId: createLessonStudentRecordId,",
  "getRecord: getLessonStudentRecord,",
  "students: lessonStudentsForRecords,",
  "if (recordsToSave.length === 0) return",
  "const nextRecords = recordsToSave.reduce(",
  "recordsRef.current = nextRecords",
  "setRecords(nextRecords)",
  'createLessonJournalRecordSaveStates(recordsToSave, "saving")',
  "setSaveStates((currentStates) => ({ ...currentStates, ...savingStates }))",
  "Promise.all(recordsToSave.map((record) =>",
  "patchLessonRecordNotificationStatusRequest(createLessonNotificationRecordStatusPayload(record))",
  'createLessonJournalRecordSaveStates(recordsToSave, "saved")',
  'createLessonJournalRecordSaveStates(recordsToSave, "failed")',
  "console.error(error)"
]) {
  assert.ok(
    functionSource.includes(AppOwnedBoundary),
    `missing App-owned record status boundary: ${AppOwnedBoundary}`
  );
}

const orderedBoundaries = [
  "getActiveLessonStudents(lesson, students)",
  "new Date().toISOString()",
  "createLessonNotificationRecordStatusRows({",
  "if (recordsToSave.length === 0) return",
  "recordsRef.current = nextRecords",
  "setRecords(nextRecords)",
  'createLessonJournalRecordSaveStates(recordsToSave, "saving")',
  "Promise.all(",
  'createLessonJournalRecordSaveStates(recordsToSave, "saved")',
  'createLessonJournalRecordSaveStates(recordsToSave, "failed")'
].map((token) => functionSource.indexOf(token));
assert.ok(orderedBoundaries.every((index) => index >= 0));
for (let index = 1; index < orderedBoundaries.length; index += 1) {
  assert.ok(
    orderedBoundaries[index - 1] < orderedBoundaries[index],
    "record status closeout order must stay stable"
  );
}

assert.ok(!functionSource.includes("/api/notification-jobs"));
assert.ok(!functionSource.includes("/api/solapi"));
assert.ok(!functionSource.includes("reserveLessonNotificationJobs("));
assert.ok(!functionSource.includes("persistCanceledNotificationJob("));
assert.ok(!functionSource.includes("setNotificationJobs("));

for (const forbiddenBuilderEffect of [
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
    !builderSource.includes(forbiddenBuilderEffect),
    `record status row builder crossed closeout boundary: ${forbiddenBuilderEffect}`
  );
}

assert.equal(
  appSource.split("updateLessonNotificationRecordStatuses(").length - 1,
  5
);
assert.equal(
  appSource.split(
    "updateLessonNotificationRecordStatuses(lesson, `예약 중 · ${scheduledLabel}`)"
  ).length - 1,
  2
);

console.log("lesson notification record status boundary closeout passed");
