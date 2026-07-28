import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

function createExistingInlinePayload(record) {
  return {
    lessonId: record.lessonId,
    lessonStudentRecordId: record.lessonStudentRecordId,
    studentId: record.studentId,
    teacherCommentSendStatus: record.teacherCommentSendStatus,
    studentCommentSendStatus: record.studentCommentSendStatus,
    updatedBy: record.updatedBy
  };
}

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
const virtualPayloads = virtualRecords.map(createExistingInlinePayload);

assert.deepEqual(virtualPayloads, [
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
]);
assert.deepEqual(virtualRecords, virtualRecordsSnapshot);
assert.equal(Object.keys(virtualPayloads[0]).length, 6);
assert.equal(Object.keys(virtualPayloads[1]).length, 6);
assert.ok(!("ignoredField" in virtualPayloads[0]));
assert.ok(!("ignoredField" in virtualPayloads[1]));

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

const inlinePayloadBoundary = [
  "Promise.all(recordsToSave.map((record) => patchLessonRecordNotificationStatusRequest({",
  "lessonId: record.lessonId,",
  "lessonStudentRecordId: record.lessonStudentRecordId,",
  "studentId: record.studentId,",
  "teacherCommentSendStatus: record.teacherCommentSendStatus,",
  "studentCommentSendStatus: record.studentCommentSendStatus,",
  "updatedBy: record.updatedBy"
];
for (const token of inlinePayloadBoundary) {
  assert.ok(
    functionSource.includes(token),
    `missing existing record status payload field: ${token}`
  );
}
assert.equal(
  functionSource.split("patchLessonRecordNotificationStatusRequest({").length - 1,
  1
);
assert.ok(appSource.includes("function patchLessonRecordNotificationStatusRequest(record)"));
assert.ok(
  appSource.includes('postJson("/api/lesson-records/notification-status", { record })')
);
assert.ok(!appSource.includes("createLessonNotificationRecordStatusPayload"));

console.log("lesson notification record API payload inventory TARGET/CONTROL fixtures passed");
