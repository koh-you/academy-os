import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { verifyLessonModalSaveResults } from "../src/domains/lessons/lessonModalSaveVerification.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const coreDataSource = fs.readFileSync(path.join(root, "api", "routes", "coreData.js"), "utf8");

for (const contract of [
  'const pendingNotificationJobStatuses = ["scheduled", "queued", "pending_send"]',
  "const allowedStudentIds = new Set(Array.isArray(lesson.studentIds) ? lesson.studentIds : [])",
  "rows.filter((row) => row.notification_job_id && !allowedStudentIds.has(row.student_id))",
  "rows.filter((row) => row.lesson_student_record_id && !allowedStudentIds.has(row.student_id))",
  'cancelPendingNotificationJobsForRemovedLessonStudents(savedLesson, "수업 명단에서 제외됨")',
  "deleteLessonStudentRecordsForRemovedLessonStudents(savedLesson)"
]) {
  assert.equal(coreDataSource.includes(contract), true, `server cleanup contract missing: ${contract}`);
}

const targetStudentId = "virtual-target";
const controlStudentId = "virtual-control";
const affectedLessonId = "virtual-lesson-affected";
const unrelatedLessonId = "virtual-lesson-unrelated";
const pendingStatuses = new Set(["scheduled", "queued", "pending_send"]);
const state = {
  lessons: [{
    className: "가상 격리 수업",
    date: "2099-01-01",
    endTime: "20:00",
    lessonId: affectedLessonId,
    lessonType: "regular",
    startTime: "18:00",
    status: "scheduled",
    studentIds: [targetStudentId, controlStudentId]
  }],
  notificationJobs: [
    { lessonId: affectedLessonId, notificationJobId: "job-target-scheduled", status: "scheduled", studentId: targetStudentId },
    { lessonId: affectedLessonId, notificationJobId: "job-target-queued", status: "queued", studentId: targetStudentId },
    { lessonId: affectedLessonId, notificationJobId: "job-target-pending", status: "pending_send", studentId: targetStudentId },
    { lessonId: affectedLessonId, notificationJobId: "job-target-sent", status: "sent", studentId: targetStudentId },
    { lessonId: affectedLessonId, notificationJobId: "job-control-scheduled", status: "scheduled", studentId: controlStudentId },
    { lessonId: unrelatedLessonId, notificationJobId: "job-target-unrelated", status: "scheduled", studentId: targetStudentId }
  ],
  records: [
    { lessonId: affectedLessonId, lessonStudentRecordId: "record-target", studentId: targetStudentId },
    { lessonId: affectedLessonId, lessonStudentRecordId: "record-control", studentId: controlStudentId },
    { lessonId: unrelatedLessonId, lessonStudentRecordId: "record-target-unrelated", studentId: targetStudentId }
  ]
};

function saveVirtualLesson(nextLesson) {
  const lessonIndex = state.lessons.findIndex((lesson) => lesson.lessonId === nextLesson.lessonId);
  state.lessons.splice(lessonIndex, 1, structuredClone(nextLesson));
  const allowedStudentIds = new Set(nextLesson.studentIds);

  state.notificationJobs = state.notificationJobs.map((job) =>
    job.lessonId === nextLesson.lessonId &&
    pendingStatuses.has(job.status) &&
    !allowedStudentIds.has(job.studentId)
      ? { ...job, error: "수업 명단에서 제외됨", status: "canceled" }
      : job
  );
  state.records = state.records.filter((record) =>
    record.lessonId !== nextLesson.lessonId || allowedStudentIds.has(record.studentId)
  );
}

const expectedLesson = {
  ...state.lessons[0],
  studentIds: [controlStudentId]
};
saveVirtualLesson(expectedLesson);

const persistedLessons = structuredClone(state.lessons);
assert.deepEqual(
  verifyLessonModalSaveResults({
    expectedLessons: [expectedLesson],
    persistedLessons
  }),
  persistedLessons
);

for (const jobId of ["job-target-scheduled", "job-target-queued", "job-target-pending"]) {
  const job = state.notificationJobs.find((candidate) => candidate.notificationJobId === jobId);
  assert.equal(job.status, "canceled", `${jobId} must be canceled`);
  assert.equal(job.error, "수업 명단에서 제외됨");
}
assert.equal(
  state.notificationJobs.find((job) => job.notificationJobId === "job-target-sent").status,
  "sent",
  "already sent TARGET history must stay unchanged"
);
assert.equal(
  state.notificationJobs.find((job) => job.notificationJobId === "job-control-scheduled").status,
  "scheduled",
  "CONTROL reservation must stay active"
);
assert.equal(
  state.notificationJobs.find((job) => job.notificationJobId === "job-target-unrelated").status,
  "scheduled",
  "TARGET reservation for another lesson must stay active"
);
assert.equal(state.records.some((record) => record.lessonStudentRecordId === "record-target"), false);
assert.equal(state.records.some((record) => record.lessonStudentRecordId === "record-control"), true);
assert.equal(state.records.some((record) => record.lessonStudentRecordId === "record-target-unrelated"), true);
assert.deepEqual(state.lessons[0].studentIds, [controlStudentId]);

console.log("virtual TARGET cleanup and CONTROL preservation gate passed");
