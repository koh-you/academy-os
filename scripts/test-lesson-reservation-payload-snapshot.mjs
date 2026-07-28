import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonReservationPayloadSnapshot } from "../src/domains/lessons/lessonReservationPayloadSnapshot.js";

const student = {
  name: "가상 TARGET",
  parentPhone: "010-0000-0000",
  studentId: "student_TARGET",
  studentPhone: "010-1234-5678"
};
const record = {
  attendanceReason: "",
  attendanceStatus: "present",
  checkInTime: "13:55",
  checkOutTime: "16:05",
  lateMinutes: 0,
  studentComment: "학생 TARGET\n\n학생 TARGET",
  teacherComment: "학부모 CONTROL"
};
const previousHomework = {
  homeworkId: "homework_PREVIOUS",
  title: "지난 숙제 TARGET"
};
const nextHomework = {
  homeworkId: "homework_NEXT",
  title: "다음 숙제 TARGET"
};
const notificationTemplates = {
  nextLesson: "다음 수업 확인 TARGET"
};
const inputSnapshot = structuredClone({
  nextHomework,
  notificationTemplates,
  previousHomework,
  record,
  student
});
const calls = [];
const studentPayload = createLessonReservationPayloadSnapshot({
  audience: "student",
  compactMessage(value) {
    calls.push(["compact", value]);
    return "학생 TARGET";
  },
  getAssignmentStatus(currentRecord, homework) {
    calls.push(["assignment", currentRecord, homework]);
    return "not_entered";
  },
  getHomeworkFollowupNotice() {
    calls.push(["followup"]);
    throw new Error("unrecorded assignment must omit homework followup");
  },
  getLessonContent(currentRecord) {
    calls.push(["content", currentRecord]);
    return "이차방정식 TARGET";
  },
  getLessonMaterial(currentRecord, currentStudent) {
    calls.push(["material", currentRecord, currentStudent]);
    return "가상 교재 TARGET";
  },
  isAssignmentStatusUnrecorded(status) {
    calls.push(["unrecorded", status]);
    return true;
  },
  lesson: {
    lessonId: "lesson_TARGET"
  },
  mode: "delay30",
  nextHomework,
  notificationTemplates,
  previousHomework,
  record,
  scheduledDate: "2026-07-29T05:30:00.000Z",
  student,
  supplementSchedules: ["7/30 14:00", "8/1 13:00"],
  testResultLines: ["가상시험 90점", "CONTROL시험 80점"]
});
assert.deepEqual(studentPayload, {
  assignmentStatus: "not_entered",
  attendanceReason: "",
  attendanceStatus: "present",
  checkInTime: "13:55",
  checkOutTime: "16:05",
  commentBodyOverride: "학생 TARGET",
  homeworkFollowupNotice: "",
  lateMinutes: 0,
  lessonContent: "이차방정식 TARGET",
  lessonMaterial: "가상 교재 TARGET",
  nextHomework: "다음 숙제 TARGET",
  preparationNotice: "",
  previousHomework: "",
  recipient: "010-1234-5678",
  scheduledDate: "2026-07-29T05:30:00.000Z",
  scheduleMode: "delay30",
  studentId: "student_TARGET",
  supplementSchedule: "7/30 14:00\n8/1 13:00",
  target: "student",
  testResult: "가상시험 90점\nCONTROL시험 80점"
});
assert.deepEqual(calls, [
  ["compact", record.studentComment],
  ["assignment", record, previousHomework],
  ["unrecorded", "not_entered"],
  ["content", record],
  ["material", record, student]
]);

calls.length = 0;
const parentPayload = createLessonReservationPayloadSnapshot({
  audience: "parent",
  compactMessage(value) {
    calls.push(["compact", value]);
    return value;
  },
  getAssignmentStatus(currentRecord, homework) {
    calls.push(["assignment", currentRecord, homework]);
    return "completed";
  },
  getHomeworkFollowupNotice(currentRecord, audience, templates) {
    calls.push(["followup", currentRecord, audience, templates]);
    return "다음 수업 확인 TARGET";
  },
  getLessonContent(currentRecord) {
    calls.push(["content", currentRecord]);
    return "학부모 수업 내용 TARGET";
  },
  getLessonMaterial(currentRecord, currentStudent) {
    calls.push(["material", currentRecord, currentStudent]);
    return "학부모 교재 TARGET";
  },
  isAssignmentStatusUnrecorded(status) {
    calls.push(["unrecorded", status]);
    return false;
  },
  mode: "default",
  nextHomework: null,
  notificationTemplates,
  previousHomework,
  record: {
    ...record,
    attendanceStatus: ""
  },
  scheduledDate: "2026-07-29T05:00:00.000Z",
  student
});
assert.equal(parentPayload.commentBodyOverride, "학부모 CONTROL");
assert.equal(parentPayload.homeworkFollowupNotice, "다음 수업 확인 TARGET");
assert.equal(parentPayload.previousHomework, "지난 숙제 TARGET");
assert.equal(parentPayload.nextHomework, "");
assert.equal(parentPayload.recipient, "010-0000-0000");
assert.equal(parentPayload.target, "parent");
assert.equal(parentPayload.attendanceStatus, "");
assert.equal(parentPayload.supplementSchedule, "");
assert.equal(parentPayload.testResult, "");
assert.deepEqual(calls.slice(0, 4), [
  ["compact", record.teacherComment],
  ["assignment", { ...record, attendanceStatus: "" }, previousHomework],
  ["unrecorded", "completed"],
  ["followup", { ...record, attendanceStatus: "" }, "parent", notificationTemplates]
]);
assert.deepEqual(
  {
    nextHomework,
    notificationTemplates,
    previousHomework,
    record,
    student
  },
  inputSnapshot
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const builderSource = await readFile(
  new URL("../src/domains/lessons/lessonReservationPayloadSnapshot.js", import.meta.url),
  "utf8"
);
const snapshotStart = appSource.indexOf(
  "function buildLessonReservationPayloadSnapshot({"
);
const snapshotEnd = appSource.indexOf(
  "\nfunction getLessonReservationPayloadFingerprint(",
  snapshotStart
);
assert.ok(snapshotStart >= 0 && snapshotEnd > snapshotStart);
const snapshotSource = appSource.slice(snapshotStart, snapshotEnd);
for (const binding of [
  'import { createLessonReservationPayloadSnapshot } from "../domains/lessons/lessonReservationPayloadSnapshot.js"',
  "function buildLessonReservationPayloadSnapshot({",
  "return createLessonReservationPayloadSnapshot({",
  "compactMessage: compactDuplicateMessageBlocks",
  "getAssignmentStatus: getAssignmentStatusForMessage",
  "getHomeworkFollowupNotice: getHomeworkFollowupNoticeForTarget",
  "getLessonContent,",
  "getLessonMaterial,",
  "isAssignmentStatusUnrecorded,"
]) {
  assert.ok(appSource.includes(binding), `missing payload snapshot binding: ${binding}`);
}
assert.ok(!snapshotSource.includes('const sourceField = audience === "student"'));
assert.ok(!snapshotSource.includes("supplementSchedule: supplementSchedules.join"));

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
  "setNotification"
]) {
  assert.ok(
    !builderSource.includes(forbiddenSideEffect),
    `payload snapshot builder must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("lesson reservation payload snapshot TARGET/CONTROL fixtures passed");
