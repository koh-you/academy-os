import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonNotificationJob } from "../src/domains/lessons/lessonNotificationJobBuilder.js";

const lesson = {
  className: "가상 TARGET 반",
  date: "2026-07-29",
  lessonId: "lesson_TARGET"
};
const student = {
  name: "가상 TARGET",
  parentPhone: "010-0000-0000",
  studentId: "student_TARGET",
  studentPhone: "010-1234-5678"
};
const record = {
  attendanceReason: "",
  attendanceStatus: "",
  checkInAt: "",
  checkInTime: "13:55",
  checkOutAt: "2026-07-29T07:05:00.000Z",
  checkOutTime: "16:05",
  lateMinutes: 0
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
  parent: "학부모 template TARGET",
  student: "학생 template TARGET"
};
const supplementSchedules = ["7/30 14:00", "8/1 13:00"];
const testResultLines = ["가상시험 90점", "CONTROL시험 80점"];
const payloadSnapshot = {
  commentBodyOverride: "학생 코멘트 TARGET",
  homeworkFollowupNotice: "다음 수업 확인 TARGET",
  preparationNotice: "",
  previousHomework: "지난 숙제 TARGET"
};
const inputSnapshot = structuredClone({
  lesson,
  nextHomework,
  notificationTemplates,
  payloadSnapshot,
  previousHomework,
  record,
  student,
  supplementSchedules,
  testResultLines
});
const calls = [];
const scheduledDate = "2026-07-29T05:00:00.000Z";
const nowIso = "2026-07-28T10:00:00.000Z";

const studentJob = createLessonNotificationJob({
  academyName: "가상 학원",
  audience: "student",
  buildCommentPreview(args) {
    calls.push(["preview", args]);
    return "학생 미리보기 TARGET";
  },
  buildPayloadSnapshot(args) {
    calls.push(["snapshot", args]);
    return payloadSnapshot;
  },
  getAssignmentStatus(currentRecord, homework) {
    calls.push(["assignment", currentRecord, homework]);
    return "completed";
  },
  getAssignmentStatusMessage(audience, status) {
    calls.push(["message", audience, status]);
    return "학생 과제 상태 TARGET";
  },
  getAssignmentStatusParentMessage(status) {
    calls.push(["parentMessage", status]);
    return "학부모 과제 문구 TARGET";
  },
  getAssignmentStatusStudentMessage(status) {
    calls.push(["studentMessage", status]);
    return "학생 과제 문구 TARGET";
  },
  getJobId(lessonId, studentId, audience) {
    calls.push(["jobId", lessonId, studentId, audience]);
    return "job_TARGET";
  },
  getLessonContent(currentRecord) {
    calls.push(["content", currentRecord]);
    return "이차방정식 TARGET";
  },
  getLessonMaterial(currentRecord, currentStudent) {
    calls.push(["material", currentRecord, currentStudent]);
    return "가상 교재 TARGET";
  },
  getPayloadFingerprint(snapshot) {
    calls.push(["fingerprint", snapshot]);
    return "fingerprint_TARGET";
  },
  lesson,
  mode: "default",
  nextHomework,
  notificationTemplates,
  nowIso,
  previousHomework,
  record,
  recordId: "record_TARGET",
  scheduledDate,
  student,
  supplementSchedules,
  testResultLines
});

assert.deepEqual(studentJob, {
  createdAt: nowIso,
  error: "",
  lessonId: "lesson_TARGET",
  lessonStudentRecordId: "record_TARGET",
  notificationJobId: "job_TARGET",
  notificationType: "student_comment",
  payload: {
    academyName: "가상 학원",
    assignmentStatus: "completed",
    assignmentStatusMessage: "학생 과제 상태 TARGET",
    assignmentStatusParentMessage: "학부모 과제 문구 TARGET",
    assignmentStatusStudentMessage: "학생 과제 문구 TARGET",
    attendanceReason: "",
    attendanceStatus: "",
    checkInTime: "13:55",
    checkOutTime: "16:05",
    checkedAt: "2026-07-29T07:05:00.000Z",
    commentBodyOverride: "학생 코멘트 TARGET",
    homeworkFollowupNotice: "다음 수업 확인 TARGET",
    lateMinutes: 0,
    lessonContent: "이차방정식 TARGET",
    lessonDate: "2026-07-29",
    lessonId: "lesson_TARGET",
    lessonMaterial: "가상 교재 TARGET",
    lessonName: "가상 TARGET 반",
    message: "학생 코멘트 TARGET",
    nextHomework: "다음 숙제 TARGET",
    osScheduled: true,
    parentPhone: "010-0000-0000",
    preparationNotice: "",
    previousHomework: "지난 숙제 TARGET",
    reservationFingerprint: "fingerprint_TARGET",
    scheduledDate,
    scheduleMode: "default",
    sendMode: "scheduled",
    studentId: "student_TARGET",
    studentName: "가상 TARGET",
    studentPhone: "010-1234-5678",
    supplementSchedule: "7/30 14:00\n8/1 13:00",
    target: "student",
    testResult: "가상시험 90점\nCONTROL시험 80점"
  },
  previewBody: "학생 미리보기 TARGET",
  provider: "academy-os-reserving",
  recipient: "010-1234-5678",
  result: {
    reservationPending: true
  },
  scheduledAt: scheduledDate,
  status: "scheduled",
  studentId: "student_TARGET",
  target: "student"
});

assert.deepEqual(calls.map(([name]) => name), [
  "snapshot",
  "assignment",
  "message",
  "parentMessage",
  "studentMessage",
  "content",
  "material",
  "fingerprint",
  "jobId",
  "preview"
]);
assert.deepEqual(calls[0][1], {
  audience: "student",
  lesson,
  mode: "default",
  nextHomework,
  notificationTemplates,
  previousHomework,
  record,
  scheduledDate,
  student,
  supplementSchedules,
  testResultLines
});
assert.deepEqual(calls.at(-1)[1], {
  audience: "student",
  comment: "학생 코멘트 TARGET",
  lesson,
  nextHomework,
  notificationTemplates,
  previousHomework,
  record,
  student,
  supplementSchedules,
  testResultLines
});

const parentJob = createLessonNotificationJob({
  academyName: "가상 학원",
  audience: "parent",
  buildCommentPreview: () => "학부모 미리보기 CONTROL",
  buildPayloadSnapshot: () => payloadSnapshot,
  getAssignmentStatus: () => "not_entered",
  getAssignmentStatusMessage: () => "미기재",
  getAssignmentStatusParentMessage: () => "학부모 미기재",
  getAssignmentStatusStudentMessage: () => "학생 미기재",
  getJobId: () => "job_CONTROL",
  getLessonContent: () => "",
  getLessonMaterial: () => "",
  getPayloadFingerprint: () => "fingerprint_CONTROL",
  lesson,
  mode: "delay30",
  nextHomework: null,
  nowIso,
  previousHomework: null,
  record: null,
  recordId: "record_CONTROL",
  scheduledDate,
  student
});
assert.equal(parentJob.notificationType, "parent_comment");
assert.equal(parentJob.recipient, "010-0000-0000");
assert.equal(parentJob.payload.attendanceStatus, "pending");
assert.equal(parentJob.payload.checkedAt, "");
assert.equal(parentJob.payload.nextHomework, "");
assert.equal(parentJob.payload.scheduleMode, "delay30");
assert.equal(parentJob.target, "parent");
assert.deepEqual(
  {
    lesson,
    nextHomework,
    notificationTemplates,
    payloadSnapshot,
    previousHomework,
    record,
    student,
    supplementSchedules,
    testResultLines
  },
  inputSnapshot
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const builderSource = await readFile(
  new URL("../src/domains/lessons/lessonNotificationJobBuilder.js", import.meta.url),
  "utf8"
);
const wrapperStart = appSource.indexOf(
  "function buildLessonNotificationJob(lesson, student, target, scheduledDate, mode)"
);
const wrapperEnd = appSource.indexOf(
  "\n  function updateLessonNotificationRecordStatuses(",
  wrapperStart
);
assert.ok(wrapperStart >= 0 && wrapperEnd > wrapperStart);
const wrapperSource = appSource.slice(wrapperStart, wrapperEnd);

for (const wrapperBinding of [
  "createLessonStudentRecordId(lesson.lessonId, student.studentId)",
  "getLessonStudentRecord(lesson, student)",
  "isRecordNotificationMuted(record, target)",
  'getLessonHomework(homeworks, lesson, student, "previous", lessons)',
  'getLessonHomework(homeworks, lesson, student, "next")',
  "getStudentSupplementSchedules(makeupTasks, student.studentId",
  "getLessonTestResultLines(testSessions, testAttempts, lesson, student)",
  "return createLessonNotificationJob({",
  "academyName: academyBrandName",
  "buildCommentPreview: buildCommentPreviewText",
  "buildPayloadSnapshot: buildLessonReservationPayloadSnapshot",
  "getPayloadFingerprint: getLessonReservationPayloadFingerprint",
  "nowIso: new Date().toISOString()"
]) {
  assert.ok(wrapperSource.includes(wrapperBinding), `missing App wrapper binding: ${wrapperBinding}`);
}
assert.ok(!wrapperSource.includes("const payload = {"));
assert.ok(!wrapperSource.includes('provider: "academy-os-reserving"'));

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
  "setNotificationJobs",
  "persistCanceledNotificationJob",
  "reserveLessonNotificationJobs"
]) {
  assert.ok(
    !builderSource.includes(forbiddenSideEffect),
    `final job builder must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("lesson notification job builder TARGET/CONTROL fixtures passed");
