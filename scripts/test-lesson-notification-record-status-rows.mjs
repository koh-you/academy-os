import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonNotificationRecordStatusRows } from "../src/domains/lessons/lessonNotificationRecordStatusRows.js";

const lesson = {
  lessonId: "lesson_TARGET"
};
const students = [
  {
    studentId: "student_TARGET"
  },
  {
    studentId: "student_CONTROL"
  }
];
const recordsByStudentId = {
  student_CONTROL: {
    lessonId: "stale_lesson_CONTROL",
    lessonStudentRecordId: "stale_record_CONTROL",
    nested: {
      keep: "CONTROL"
    },
    notificationMutedParent: 0,
    notificationMutedStudent: {
      reason: "가상 학생 제외 TARGET"
    },
    studentCommentSendStatus: "이전 학생 상태",
    studentId: "stale_student_CONTROL",
    teacherCommentSendStatus: "이전 학부모 상태",
    updatedAt: "2026-01-01T00:00:00.000Z",
    updatedBy: "legacy_CONTROL"
  },
  student_TARGET: {
    lessonId: "stale_lesson_TARGET",
    lessonStudentRecordId: "stale_record_TARGET",
    nested: {
      keep: "TARGET"
    },
    notificationMutedParent: {
      reason: "가상 학부모 제외 TARGET"
    },
    notificationMutedStudent: false,
    studentCommentSendStatus: "이전 학생 상태",
    studentId: "stale_student_TARGET",
    teacherCommentSendStatus: "이전 학부모 상태",
    updatedAt: "2026-01-01T00:00:00.000Z",
    updatedBy: "legacy_TARGET"
  }
};
const inputSnapshot = structuredClone({
  lesson,
  recordsByStudentId,
  students
});
const calls = [];
const updatedAt = "2026-07-28T09:12:34.000Z";
const rows = createLessonNotificationRecordStatusRows({
  createRecordId(lessonId, studentId) {
    calls.push({
      lessonId,
      studentId,
      type: "id"
    });
    return `record_${lessonId}_${studentId}`;
  },
  getRecord(receivedLesson, student) {
    calls.push({
      lesson: receivedLesson,
      student,
      type: "record"
    });
    return recordsByStudentId[student.studentId];
  },
  lesson,
  statusText: "예약 중 · 18:00",
  students,
  updatedAt
});

assert.deepEqual(
  calls.map((call) => `${call.type}:${call.studentId ?? call.student.studentId}`),
  [
    "id:student_TARGET",
    "record:student_TARGET",
    "id:student_CONTROL",
    "record:student_CONTROL"
  ]
);
assert.strictEqual(calls[1].lesson, lesson);
assert.strictEqual(calls[1].student, students[0]);
assert.strictEqual(calls[3].lesson, lesson);
assert.strictEqual(calls[3].student, students[1]);
assert.deepEqual(rows, [
  {
    ...recordsByStudentId.student_TARGET,
    lessonStudentRecordId: "record_lesson_TARGET_student_TARGET",
    lessonId: "lesson_TARGET",
    studentId: "student_TARGET",
    teacherCommentSendStatus: "알림 제외",
    studentCommentSendStatus: "예약 중 · 18:00",
    updatedBy: "instructor_owner_001",
    updatedAt
  },
  {
    ...recordsByStudentId.student_CONTROL,
    lessonStudentRecordId: "record_lesson_TARGET_student_CONTROL",
    lessonId: "lesson_TARGET",
    studentId: "student_CONTROL",
    teacherCommentSendStatus: "예약 중 · 18:00",
    studentCommentSendStatus: "알림 제외",
    updatedBy: "instructor_owner_001",
    updatedAt
  }
]);
assert.notStrictEqual(rows[0], recordsByStudentId.student_TARGET);
assert.notStrictEqual(rows[1], recordsByStudentId.student_CONTROL);
assert.strictEqual(rows[0].nested, recordsByStudentId.student_TARGET.nested);
assert.strictEqual(rows[1].nested, recordsByStudentId.student_CONTROL.nested);
assert.deepEqual(
  {
    lesson,
    recordsByStudentId,
    students
  },
  inputSnapshot
);

let emptyHelperCalls = 0;
assert.deepEqual(
  createLessonNotificationRecordStatusRows({
    createRecordId() {
      emptyHelperCalls += 1;
    },
    getRecord() {
      emptyHelperCalls += 1;
    },
    lesson,
    statusText: "CONTROL",
    students: [],
    updatedAt
  }),
  []
);
assert.equal(emptyHelperCalls, 0);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const builderSource = await readFile(
  new URL("../src/domains/lessons/lessonNotificationRecordStatusRows.js", import.meta.url),
  "utf8"
);
for (const binding of [
  'import { createLessonNotificationRecordStatusRows } from "../domains/lessons/lessonNotificationRecordStatusRows.js"',
  "const recordsToSave = createLessonNotificationRecordStatusRows({",
  "createRecordId: createLessonStudentRecordId,",
  "getRecord: getLessonStudentRecord,",
  "students: lessonStudentsForRecords,",
  "updatedAt"
]) {
  assert.ok(appSource.includes(binding), `missing record status row binding: ${binding}`);
}
assert.ok(
  !appSource.includes(
    "const recordsToSave = lessonStudentsForRecords.map((student) => {"
  )
);

for (const sourceRule of [
  "export function createLessonNotificationRecordStatusRows({",
  "return students.map((student) => {",
  "const recordId = createRecordId(lesson.lessonId, student.studentId)",
  "const record = getRecord(lesson, student)",
  "...record,",
  "lessonStudentRecordId: recordId,",
  "lessonId: lesson.lessonId,",
  "studentId: student.studentId,",
  'teacherCommentSendStatus: record.notificationMutedParent ? "알림 제외" : statusText',
  'studentCommentSendStatus: record.notificationMutedStudent ? "알림 제외" : statusText',
  'updatedBy: "instructor_owner_001"',
  "updatedAt"
]) {
  assert.ok(builderSource.includes(sourceRule), `missing record status row rule: ${sourceRule}`);
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
  "patchLessonRecordNotificationStatusRequest",
  "Promise.all"
]) {
  assert.ok(
    !builderSource.includes(forbiddenSideEffect),
    `record status row builder crossed a side effect: ${forbiddenSideEffect}`
  );
}

console.log("lesson notification record status row TARGET/CONTROL fixtures passed");
