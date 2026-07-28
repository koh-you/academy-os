import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createLessonJournalReservationAuditModel,
  getLessonJournalStudentReservationStatus,
  lessonJournalReservationInspectLabels
} from "../src/domains/lessons/lessonJournalReservationAuditModel.js";

const students = [
  { studentId: "student-target" },
  { studentId: "student-control" }
];
const jobs = [
  {
    notificationJobId: "job-target-parent",
    notificationType: "parent_comment",
    status: "scheduled",
    studentId: "student-target",
    updatedAt: "2026-07-28T09:00:00.000Z"
  },
  {
    notificationJobId: "job-target-student",
    notificationType: "student_comment",
    status: "scheduled",
    studentId: "student-target"
  },
  {
    notificationJobId: "job-control-parent-sent",
    notificationType: "parent_comment",
    status: "sent",
    studentId: "student-control"
  },
  {
    notificationJobId: "job-control-student-failed",
    notificationType: "student_comment",
    status: "failed",
    studentId: "student-control"
  },
  {
    notificationJobId: "job-canceled",
    notificationType: "parent_comment",
    status: "canceled",
    studentId: "student-control"
  },
  {
    notificationJobId: "job-orphan",
    notificationType: "parent_comment",
    status: "scheduled",
    studentId: "student-outside"
  }
];

const allModel = createLessonJournalReservationAuditModel({
  auditedJobs: jobs,
  lessonStudents: students
});
assert.equal(allModel.scheduledParentCount, 2);
assert.equal(allModel.scheduledStudentCount, 1);
assert.equal(allModel.sentParentCount, 1);
assert.equal(allModel.sentStudentCount, 0);
assert.equal(allModel.canceledJobCount, 1);
assert.equal(allModel.failedJobCount, 1);
assert.deepEqual(
  allModel.orphanScheduledJobs.map((job) => job.notificationJobId),
  ["job-orphan"]
);
assert.deepEqual(
  allModel.issueReservationJobs.map((job) => job.notificationJobId),
  ["job-control-student-failed", "job-canceled"]
);
assert.deepEqual(allModel.visibleReservationStudents, students);
assert.equal(allModel.shouldShowIssueAudit, false);
assert.equal(
  allModel.reservationInspectLabels,
  lessonJournalReservationInspectLabels
);
assert.equal(
  allModel.getStudentReservationStatus(students[0], "parent").notificationJobId,
  "job-target-parent"
);

for (const [mode, expectedStudentIds] of [
  ["parentScheduled", ["student-target"]],
  ["studentScheduled", ["student-target"]],
  ["issues", ["student-control"]],
  ["unknown", ["student-target", "student-control"]]
]) {
  const model = createLessonJournalReservationAuditModel({
    auditedJobs: jobs,
    lessonStudents: students,
    reservationInspectMode: mode
  });
  assert.deepEqual(
    model.visibleReservationStudents.map((student) => student.studentId),
    expectedStudentIds
  );
  assert.equal(model.shouldShowIssueAudit, mode === "issues");
}

assert.equal(
  getLessonJournalStudentReservationStatus(
    [
      {
        notificationJobId: "older-failed",
        notificationType: "parent_comment",
        status: "failed",
        studentId: "student-target"
      },
      {
        notificationJobId: "current-scheduled",
        notificationType: "parent_comment",
        status: "scheduled",
        studentId: "student-target"
      }
    ],
    students[0],
    "parent"
  ).notificationJobId,
  "current-scheduled"
);

const source = await readFile(
  new URL("../src/domains/lessons/lessonJournalReservationAuditModel.js", import.meta.url),
  "utf8"
);
for (const forbidden of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "Supabase",
  "Solapi",
  "solapiGroups",
  "solapiMessages"
]) {
  assert.equal(
    source.includes(forbidden),
    false,
    `reservation audit model must not own ${forbidden}`
  );
}

console.log("lesson journal OS reservation audit model fixtures passed");
