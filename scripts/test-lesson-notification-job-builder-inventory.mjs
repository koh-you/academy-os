import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const builderStart = appSource.indexOf(
  "function buildLessonNotificationJob(lesson, student, target, scheduledDate, mode)"
);
const builderEnd = appSource.indexOf(
  "\n  function updateLessonNotificationRecordStatuses(",
  builderStart
);
assert.ok(builderStart >= 0 && builderEnd > builderStart);
const builderSource = appSource.slice(builderStart, builderEnd);

for (const sourceBinding of [
  "createLessonStudentRecordId(lesson.lessonId, student.studentId)",
  "getLessonStudentRecord(lesson, student)",
  "isRecordNotificationMuted(record, target)",
  'getLessonHomework(homeworks, lesson, student, "previous", lessons)',
  'getLessonHomework(homeworks, lesson, student, "next")',
  'target === "student" ? "student" : "parent"',
  "getStudentSupplementSchedules(makeupTasks, student.studentId",
  "getLessonTestResultLines(testSessions, testAttempts, lesson, student)",
  "buildLessonReservationPayloadSnapshot({",
  "notificationTemplates: aiSettings.notificationTemplates",
  "getAssignmentStatusForMessage(record, previousHomework)",
  "getLessonReservationPayloadFingerprint(payloadSnapshot)",
  "getLessonNotificationJobId(lesson.lessonId, student.studentId, audience)",
  "buildCommentPreviewText({",
  "createdAt: new Date().toISOString()"
]) {
  assert.ok(builderSource.includes(sourceBinding), `missing builder source: ${sourceBinding}`);
}

for (const outputField of [
  "notificationJobId:",
  "notificationType:",
  "studentId:",
  "lessonId:",
  "lessonStudentRecordId:",
  "target:",
  "recipient:",
  "scheduledAt:",
  "payload,",
  "previewBody:",
  "status:",
  "provider:",
  "result:",
  "error:",
  "createdAt:"
]) {
  assert.ok(builderSource.includes(outputField), `missing job output: ${outputField}`);
}

for (const payloadField of [
  "academyName:",
  "assignmentStatus,",
  "assignmentStatusMessage:",
  "assignmentStatusParentMessage:",
  "assignmentStatusStudentMessage:",
  "attendanceStatus:",
  "attendanceReason:",
  "checkInTime:",
  "checkOutTime:",
  "checkedAt:",
  "lateMinutes:",
  "commentBodyOverride:",
  "homeworkFollowupNotice:",
  "lessonContent:",
  "lessonDate:",
  "lessonId:",
  "lessonMaterial:",
  "lessonName:",
  "message:",
  "nextHomework:",
  "osScheduled: true",
  "parentPhone:",
  "preparationNotice:",
  "previousHomework:",
  "reservationFingerprint:",
  "scheduledDate,",
  "scheduleMode:",
  'sendMode: "scheduled"',
  "studentId:",
  "studentName:",
  "studentPhone:",
  "supplementSchedule:",
  "testResult:",
  "target:"
]) {
  assert.ok(builderSource.includes(payloadField), `missing payload output: ${payloadField}`);
}

assert.equal(
  builderSource.split("new Date().toISOString()").length - 1,
  1,
  "builder clock boundary must remain singular"
);
assert.equal(
  appSource.split('buildLessonNotificationJob(lesson, student, "parent", scheduledDate, mode)').length - 1,
  1
);
assert.equal(
  appSource.split('buildLessonNotificationJob(lesson, student, "student", scheduledDate, mode)').length - 1,
  1
);

for (const forbiddenSideEffect of [
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
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
    `builder inventory crossed an external boundary: ${forbiddenSideEffect}`
  );
}

for (const appOwnedAction of [
  "async function reserveLessonNotificationJobs(",
  "async function persistCanceledNotificationJob(",
  "async function applyLessonNotificationPlan("
]) {
  assert.ok(appSource.includes(appOwnedAction), `missing App-owned action: ${appOwnedAction}`);
}

console.log("lesson notification job builder inventory boundary passed");
