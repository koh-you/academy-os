import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const builderSource = await readFile(
  new URL("../src/domains/lessons/lessonNotificationJobBuilder.js", import.meta.url),
  "utf8"
);
const batchSource = await readFile(
  new URL("../src/domains/lessons/lessonNotificationJobBatch.js", import.meta.url),
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

for (const appOwnedSourceBoundary of [
  "createLessonStudentRecordId(lesson.lessonId, student.studentId)",
  "getLessonStudentRecord(lesson, student)",
  "isLessonRecordNotificationMuted(record, target)",
  'getLessonHomework(homeworks, lesson, student, "previous", lessons, recordsRef.current)',
  'getLessonHomework(homeworks, lesson, student, "next")',
  'target === "student" ? "student" : "parent"',
  "getStudentSupplementSchedules(makeupTasks, student.studentId",
  "getLessonTestResultLines(testSessions, testAttempts, lesson, student)",
  "notificationTemplates: aiSettings.notificationTemplates",
  "nowIso: new Date().toISOString()"
]) {
  assert.ok(
    wrapperSource.includes(appOwnedSourceBoundary),
    `missing App-owned builder source boundary: ${appOwnedSourceBoundary}`
  );
}
assert.equal(
  wrapperSource.split("new Date().toISOString()").length - 1,
  1
);
assert.equal(
  wrapperSource.split("return createLessonNotificationJob({").length - 1,
  1
);

for (const pureBuilderBinding of [
  "academyName: academyBrandName",
  "buildCommentPreview: buildCommentPreviewText",
  "buildPayloadSnapshot: buildLessonReservationPayloadSnapshot",
  "getAssignmentStatus: getAssignmentStatusForMessage",
  "getAssignmentStatusMessage,",
  "getAssignmentStatusParentMessage,",
  "getAssignmentStatusStudentMessage,",
  "getJobId: getLessonNotificationJobId",
  "getLessonContent,",
  "getLessonMaterial,",
  "getPayloadFingerprint: getLessonReservationPayloadFingerprint"
]) {
  assert.ok(
    wrapperSource.includes(pureBuilderBinding),
    `missing pure builder dependency: ${pureBuilderBinding}`
  );
}

for (const forbiddenWrapperEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "setNotificationJobs",
  "persistCanceledNotificationJob",
  "reserveLessonNotificationJobs"
]) {
  assert.ok(
    !wrapperSource.includes(forbiddenWrapperEffect),
    `source wrapper crossed external action: ${forbiddenWrapperEffect}`
  );
}
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
  "setNotificationJobs",
  "persistCanceledNotificationJob",
  "reserveLessonNotificationJobs"
]) {
  assert.ok(
    !builderSource.includes(forbiddenBuilderEffect),
    `pure job builder crossed external boundary: ${forbiddenBuilderEffect}`
  );
}

assert.equal(
  batchSource.split('buildJob(lesson, student, "parent", scheduledDate, mode)').length - 1,
  1
);
assert.equal(
  batchSource.split('buildJob(lesson, student, "student", scheduledDate, mode)').length - 1,
  1
);
for (const appOwnedAction of [
  "async function reserveLessonNotificationJobs(",
  "async function persistCanceledNotificationJob(",
  "async function applyLessonNotificationPlan("
]) {
  assert.equal(
    appSource.split(appOwnedAction).length - 1,
    1,
    `App-owned action must remain once: ${appOwnedAction}`
  );
}

console.log("lesson notification job builder closeout passed");
