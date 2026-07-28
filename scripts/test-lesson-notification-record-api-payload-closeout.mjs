import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonNotificationRecordStatusPayload } from "../src/domains/lessons/lessonNotificationRecordStatusPayload.js";

const targetRecord = {
  lessonId: "lesson_TARGET",
  lessonStudentRecordId: "record_TARGET",
  studentId: "student_TARGET",
  teacherCommentSendStatus: "TARGET_PARENT_STATUS",
  studentCommentSendStatus: "TARGET_STUDENT_STATUS",
  updatedBy: "teacher_TARGET",
  ignored: "TARGET_ONLY"
};
const controlRecord = {
  lessonId: "lesson_CONTROL",
  lessonStudentRecordId: "record_CONTROL",
  studentId: "student_CONTROL",
  teacherCommentSendStatus: "CONTROL_PARENT_STATUS",
  studentCommentSendStatus: "CONTROL_STUDENT_STATUS",
  updatedBy: "teacher_CONTROL",
  ignored: "CONTROL_ONLY"
};
const virtualRecords = [targetRecord, controlRecord];
const virtualSnapshot = structuredClone(virtualRecords);
const payloads = virtualRecords.map(createLessonNotificationRecordStatusPayload);

assert.deepEqual(payloads.map((payload) => Object.keys(payload)), [
  [
    "lessonId",
    "lessonStudentRecordId",
    "studentId",
    "teacherCommentSendStatus",
    "studentCommentSendStatus",
    "updatedBy"
  ],
  [
    "lessonId",
    "lessonStudentRecordId",
    "studentId",
    "teacherCommentSendStatus",
    "studentCommentSendStatus",
    "updatedBy"
  ]
]);
assert.equal(payloads[0].studentId, "student_TARGET");
assert.equal(payloads[0].teacherCommentSendStatus, "TARGET_PARENT_STATUS");
assert.equal(payloads[1].studentId, "student_CONTROL");
assert.equal(payloads[1].studentCommentSendStatus, "CONTROL_STUDENT_STATUS");
assert.ok(!("ignored" in payloads[0]));
assert.ok(!("ignored" in payloads[1]));
assert.deepEqual(virtualRecords, virtualSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/lessons/lessonNotificationRecordStatusPayload.js", import.meta.url),
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
    'import { createLessonNotificationRecordStatusPayload } from "../domains/lessons/lessonNotificationRecordStatusPayload.js"'
  ).length - 1,
  1
);
assert.equal(
  helperSource.split("export function createLessonNotificationRecordStatusPayload(").length - 1,
  1
);
assert.equal(
  functionSource.split("createLessonNotificationRecordStatusPayload(record)").length - 1,
  1
);

const orderedBoundaries = [
  'const savingStates = createLessonJournalRecordSaveStates(recordsToSave, "saving")',
  "setSaveStates((currentStates) => ({ ...currentStates, ...savingStates }))",
  "Promise.all(recordsToSave.map((record) =>",
  "patchLessonRecordNotificationStatusRequest(",
  "createLessonNotificationRecordStatusPayload(record)",
  ".then(() => {",
  'const savedStates = createLessonJournalRecordSaveStates(recordsToSave, "saved")',
  ".catch((error) => {",
  'const failedStates = createLessonJournalRecordSaveStates(recordsToSave, "failed")'
].map((token) => functionSource.indexOf(token));
assert.ok(orderedBoundaries.every((index) => index >= 0));
for (let index = 1; index < orderedBoundaries.length; index += 1) {
  assert.ok(
    orderedBoundaries[index - 1] < orderedBoundaries[index],
    "record status payload closeout order must stay stable"
  );
}

assert.ok(appSource.includes("function patchLessonRecordNotificationStatusRequest(record)"));
assert.ok(
  appSource.includes('postJson("/api/lesson-records/notification-status", { record })')
);
for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "new Date",
  "Date.now",
  "localStorage",
  "setSaveStates",
  "Promise.all",
  "notification_jobs",
  "Solapi"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `record status payload helper crossed closeout boundary: ${forbiddenHelperEffect}`
  );
}

console.log("lesson notification record API payload boundary closeout passed");
