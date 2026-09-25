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

// 2026-09-25 · 출결 결석 알림톡(attendance_absence_*)은 예약 확인 모달의 전용 구획에서만 그린다.
// '명단 밖 예약' 상자와 '취소/실패' 목록은 notificationType 을 보지 않아 같은 job 을 두 번 그렸다 —
// 카드 개수도 그 목록과 같은 기준이어야 "취소/실패 1건" 인데 목록이 비는 일이 없다.
const absenceJobs = [
  {
    notificationJobId: "attendance_absence_record-inside_2026092521",
    notificationType: "attendance",
    result: { attendanceSource: "manual_journal" },
    status: "scheduled",
    studentId: "student-target"
  },
  {
    notificationJobId: "attendance_absence_record-outside_2026092521",
    notificationType: "attendance",
    result: { attendanceSource: "manual_journal" },
    status: "scheduled",
    studentId: "student-outside"
  },
  {
    notificationJobId: "attendance_absence_record-canceled_2026092521",
    notificationType: "attendance",
    result: { attendanceSource: "manual_journal" },
    status: "canceled",
    studentId: "student-control"
  },
  {
    notificationJobId: "attendance_absence_record-failed_2026092521",
    notificationType: "attendance",
    result: { attendanceSource: "manual_journal" },
    status: "failed",
    studentId: "student-control"
  }
];
const absenceMixedModel = createLessonJournalReservationAuditModel({
  auditedJobs: [...jobs, ...absenceJobs],
  lessonStudents: students
});
assert.deepEqual(
  absenceMixedModel.orphanScheduledJobs.map((job) => job.notificationJobId),
  ["job-orphan"],
  "로스터 밖 출결 결석 예약은 '명단 밖 예약' 상자가 아니라 전용 구획에만 나온다"
);
assert.deepEqual(
  absenceMixedModel.issueReservationJobs.map((job) => job.notificationJobId),
  ["job-control-student-failed", "job-canceled"],
  "취소·실패한 출결 결석 알림톡도 전용 구획이 상태를 그대로 보여준다"
);
assert.equal(absenceMixedModel.canceledJobCount, 1, "카드 개수는 취소/실패 목록과 같은 기준으로 센다");
assert.equal(absenceMixedModel.failedJobCount, 1);
// 학생별 학부모/학생 칸은 notificationType 으로 고르므로 출결 job 이 섞이지 않는다(원래 계약).
assert.equal(
  absenceMixedModel.getStudentReservationStatus(students[0], "parent").notificationJobId,
  "job-target-parent"
);
assert.equal(absenceMixedModel.scheduledParentCount, 2, "출결 알림톡은 학부모 댓글 예약 개수에 섞이지 않는다");

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
