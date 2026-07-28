import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonNotificationRecordStatusPayload } from "../src/domains/lessons/lessonNotificationRecordStatusPayload.js";

const virtualRecords = [
  {
    lessonId: "lesson_TARGET",
    lessonStudentRecordId: "record_TARGET",
    studentId: "student_TARGET",
    teacherCommentSendStatus: "TARGET_PARENT_STATUS",
    studentCommentSendStatus: "TARGET_STUDENT_STATUS",
    updatedBy: "teacher_TARGET",
    ignoredField: "TARGET_MUST_NOT_CROSS"
  },
  {
    lessonId: "lesson_CONTROL",
    lessonStudentRecordId: "record_CONTROL",
    studentId: "student_CONTROL",
    teacherCommentSendStatus: "CONTROL_PARENT_STATUS",
    studentCommentSendStatus: "CONTROL_STUDENT_STATUS",
    updatedBy: "teacher_CONTROL",
    ignoredField: "CONTROL_MUST_NOT_CROSS"
  }
];
const virtualRecordsSnapshot = structuredClone(virtualRecords);

assert.deepEqual(
  virtualRecords.map(createLessonNotificationRecordStatusPayload),
  [
    {
      lessonId: "lesson_TARGET",
      lessonStudentRecordId: "record_TARGET",
      studentId: "student_TARGET",
      teacherCommentSendStatus: "TARGET_PARENT_STATUS",
      studentCommentSendStatus: "TARGET_STUDENT_STATUS",
      updatedBy: "teacher_TARGET"
    },
    {
      lessonId: "lesson_CONTROL",
      lessonStudentRecordId: "record_CONTROL",
      studentId: "student_CONTROL",
      teacherCommentSendStatus: "CONTROL_PARENT_STATUS",
      studentCommentSendStatus: "CONTROL_STUDENT_STATUS",
      updatedBy: "teacher_CONTROL"
    }
  ]
);
assert.deepEqual(virtualRecords, virtualRecordsSnapshot);
assert.deepEqual(createLessonNotificationRecordStatusPayload(), {
  lessonId: undefined,
  lessonStudentRecordId: undefined,
  studentId: undefined,
  teacherCommentSendStatus: undefined,
  studentCommentSendStatus: undefined,
  updatedBy: undefined
});

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
  functionSource.split(
    "patchLessonRecordNotificationStatusRequest(createLessonNotificationRecordStatusPayload(record))"
  ).length - 1,
  1
);
for (const removedInlineField of [
  "lessonId: record.lessonId",
  "lessonStudentRecordId: record.lessonStudentRecordId",
  "studentId: record.studentId",
  "teacherCommentSendStatus: record.teacherCommentSendStatus",
  "studentCommentSendStatus: record.studentCommentSendStatus",
  "updatedBy: record.updatedBy"
]) {
  assert.ok(
    !functionSource.includes(removedInlineField),
    `inline record status payload field remained in App: ${removedInlineField}`
  );
}
for (const appOwnedEffect of [
  "Promise.all(recordsToSave.map((record) =>",
  "patchLessonRecordNotificationStatusRequest(",
  "setSaveStates((currentStates) => ({ ...currentStates, ...savingStates }))",
  "setSaveStates((currentStates) => ({ ...currentStates, ...savedStates }))",
  "setSaveStates((currentStates) => ({ ...currentStates, ...failedStates }))"
]) {
  assert.ok(
    functionSource.includes(appOwnedEffect),
    `record status API or React effect moved from App: ${appOwnedEffect}`
  );
}
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
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `record status payload helper crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("lesson notification record API payload TARGET/CONTROL fixtures passed");
