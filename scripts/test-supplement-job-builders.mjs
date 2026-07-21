import assert from "node:assert/strict";
import {
  buildSupplementScheduleNoticeJob,
  buildSupplementStudentReminderJob,
  getNextHourlyAlimtalkReservationAt,
  getSupplementStudentReminderJobId,
  getSupplementStudentReminderScheduledAt,
  isSupplementStudentReminderTask
} from "../src/domains/notifications/supplementJobBuilders.js";
import {
  canCancelNotificationJob,
  getCancelableSupplementScheduleNoticeJobs,
  getCancelableSupplementTargetJobs,
  getCurrentSupplementScheduleNoticeTargets,
  getNotificationJobPriority,
  getSupplementNotificationControlJob,
  getSupplementScheduleNoticeJob,
  getSupplementStudentReminderJob,
  sortNotificationJobsForCurrentStatus
} from "../src/domains/notifications/notificationJobSelectors.js";

const now = new Date("2026-07-21T05:12:34.000Z");
const scheduledAt = "2026-07-22T02:00:00.000Z";
const task = {
  makeupTaskId: "makeup 1/결석",
  studentId: "student 1",
  taskType: "absence_makeup",
  scheduledDate: "2026-07-22",
  scheduledTime: "13:00",
  linkedLessonId: "lesson-1"
};
const student = {
  studentId: "student 1",
  name: "김예나",
  studentPhone: "01027119764",
  parentPhone: "01099998888"
};

assert.equal(isSupplementStudentReminderTask(task), true);
assert.equal(isSupplementStudentReminderTask({ taskType: "retest" }), false);
assert.equal(getSupplementStudentReminderJobId(task), "supplement_student_reminder_makeup-1결석_student-1");
assert.equal(getSupplementStudentReminderJobId({ ...task, studentId: "" }), "");
assert.equal(getSupplementStudentReminderScheduledAt(task), scheduledAt);
assert.equal(getSupplementStudentReminderScheduledAt({ ...task, scheduledDate: "" }), "");

assert.equal(getNextHourlyAlimtalkReservationAt("2026-07-21T04:52:00.000Z"), "2026-07-21T05:00:00.000Z");
assert.equal(getNextHourlyAlimtalkReservationAt("2026-07-21T04:58:00.000Z"), "2026-07-21T06:00:00.000Z");
assert.equal(getNextHourlyAlimtalkReservationAt("invalid"), "");

const studentReminderJob = buildSupplementStudentReminderJob({
  academyName: "으뜸수학 고태영T",
  now,
  reminderBody: "저장된 학생 11시 문구",
  scheduledAt,
  scheduleTitle: "결석보강 · 7/15 결석 수업",
  student,
  task
});

assert.deepEqual(studentReminderJob, {
  notificationJobId: "supplement_student_reminder_makeup-1결석_student-1",
  notificationType: "student_reminder",
  studentId: "student 1",
  lessonId: "lesson-1",
  lessonStudentRecordId: "",
  target: "student",
  recipient: "01027119764",
  scheduledAt,
  payload: {
    academyName: "으뜸수학 고태영T",
    makeupTaskId: "makeup 1/결석",
    notificationType: "student_reminder",
    reminderBody: "저장된 학생 11시 문구",
    scheduleDate: "2026-07-22",
    scheduledDate: scheduledAt,
    scheduleTime: "13:00",
    scheduleTitle: "결석보강 · 7/15 결석 수업",
    scheduleType: "supplement",
    sendMode: "scheduled",
    studentId: "student 1",
    studentName: "김예나",
    studentPhone: "01027119764",
    target: "student"
  },
  previewBody: "저장된 학생 11시 문구",
  status: "scheduled",
  provider: "academy-os-reserving",
  result: { reservationPending: true, makeupTaskId: "makeup 1/결석" },
  error: "",
  createdAt: "2026-07-21T05:12:34.000Z"
});

const emptyFinalReminderJob = buildSupplementStudentReminderJob({
  academyName: "으뜸수학 고태영T",
  now,
  reminderBody: "",
  scheduledAt,
  scheduleTitle: "결석보강 · 7/15 결석 수업",
  student,
  task
});
assert.equal(emptyFinalReminderJob.payload.reminderBody, "");
assert.equal(emptyFinalReminderJob.previewBody, "오늘 결석보강 · 7/15 결석 수업 일정이 있습니다. 2026-07-22 13:00");

const studentScheduleJob = buildSupplementScheduleNoticeJob({
  academyName: "으뜸수학 고태영T",
  now,
  previousScheduleText: "",
  reminderBody: "학생 확정 안내 최종본",
  scheduledAt: "2026-07-21T06:00:00.000Z",
  scheduleTitle: "결석보강 · 7/15 결석 수업",
  student,
  target: "student",
  task
});

assert.equal(studentScheduleJob.notificationJobId, "supplement_student_schedule_notice_makeup-1결석_student-1_1784610754000");
assert.equal(studentScheduleJob.notificationType, "schedule_reminder");
assert.equal(studentScheduleJob.target, "student");
assert.equal(studentScheduleJob.recipient, "01027119764");
assert.equal(studentScheduleJob.payload.noticeKind, "supplement_schedule_confirm");
assert.equal(studentScheduleJob.payload.reminderBody, "학생 확정 안내 최종본");
assert.equal(studentScheduleJob.payload.scheduleTitle, "결석보강 · 7/15 결석 수업 일정 안내");
assert.equal(studentScheduleJob.result.previousScheduleText, "");
assert.equal(studentScheduleJob.createdAt, "2026-07-21T05:12:34.000Z");

const parentScheduleJob = buildSupplementScheduleNoticeJob({
  academyName: "으뜸수학 고태영T",
  now,
  previousScheduleText: "2026-07-21 13:00",
  reminderBody: "",
  scheduledAt: "2026-07-21T06:00:00.000Z",
  scheduleTitle: "결석보강 · 7/15 결석 수업",
  student,
  target: "parent",
  task
});

assert.equal(parentScheduleJob.notificationJobId, "supplement_parent_schedule_notice_makeup-1결석_student-1_1784610754000");
assert.equal(parentScheduleJob.notificationType, "notice_parent");
assert.equal(parentScheduleJob.target, "parent");
assert.equal(parentScheduleJob.recipient, "01099998888");
assert.equal(parentScheduleJob.payload.noticeKind, "supplement_schedule_change");
assert.equal(parentScheduleJob.payload.commentBodyOverride, "");
assert.equal(parentScheduleJob.payload.message, "");
assert.equal(parentScheduleJob.payload.noticeBody, "");
assert.equal(parentScheduleJob.payload.parentPhone, "01099998888");
assert.equal(parentScheduleJob.result.previousScheduleText, "2026-07-21 13:00");

const reminderHistory = [
  { notificationJobId: "other", status: "scheduled" },
  { ...studentReminderJob, status: "canceled" }
];
assert.equal(getSupplementStudentReminderJob(task, reminderHistory)?.status, "canceled");
assert.equal(getSupplementStudentReminderJob({ ...task, taskType: "retest" }, reminderHistory), null);

const scheduleHistory = [
  {
    notificationJobId: "student-canceled-newer",
    notificationType: "schedule_reminder",
    status: "canceled",
    updatedAt: "2026-07-21T08:00:00.000Z",
    payload: {
      makeupTaskId: task.makeupTaskId,
      scheduleDate: task.scheduledDate,
      scheduleTime: "13:00",
      scheduleType: "supplement"
    }
  },
  {
    notificationJobId: "student-scheduled-older",
    notificationType: "schedule_reminder",
    status: "scheduled",
    updatedAt: "2026-07-21T06:00:00.000Z",
    payload: {
      makeupTaskId: task.makeupTaskId,
      scheduleDate: task.scheduledDate,
      scheduleTime: "13:00:00",
      scheduleType: "supplement"
    }
  },
  {
    notificationJobId: "parent-sent",
    notificationType: "parent_comment",
    status: "sent",
    updatedAt: "2026-07-21T07:00:00.000Z",
    payload: {
      scheduleDate: task.scheduledDate,
      scheduleTime: "13:00",
      scheduleType: "supplement"
    },
    result: { makeupTaskId: task.makeupTaskId }
  },
  {
    notificationJobId: "wrong-date",
    notificationType: "schedule_reminder",
    status: "scheduled",
    payload: {
      makeupTaskId: task.makeupTaskId,
      scheduleDate: "2026-07-23",
      scheduleTime: "13:00",
      scheduleType: "supplement"
    }
  }
];

assert.equal(getNotificationJobPriority({ status: "scheduled" }), 0);
assert.equal(getNotificationJobPriority({ status: "canceled" }), 4);
assert.equal(sortNotificationJobsForCurrentStatus(scheduleHistory[0], scheduleHistory[1]) > 0, true);
assert.equal(getSupplementScheduleNoticeJob(task, scheduleHistory, "student")?.notificationJobId, "student-scheduled-older");
assert.equal(getSupplementScheduleNoticeJob(task, scheduleHistory, "parent")?.notificationJobId, "parent-sent");
assert.equal(getSupplementScheduleNoticeJob({ ...task, scheduledTime: "" }, scheduleHistory, "student"), null);
assert.equal(getSupplementNotificationControlJob(task, reminderHistory, "studentReminder")?.status, "canceled");
assert.equal(getSupplementNotificationControlJob(task, scheduleHistory, "studentSchedule")?.notificationJobId, "student-scheduled-older");
assert.equal(getSupplementNotificationControlJob(task, scheduleHistory, "parentSchedule")?.notificationJobId, "parent-sent");

const activeScheduleHistory = [
  ...scheduleHistory,
  {
    notificationJobId: "parent-queued",
    notificationType: "notice_parent",
    status: "queued",
    payload: { makeupTaskId: task.makeupTaskId, scheduleType: "supplement" }
  },
  {
    notificationJobId: "legacy-parent-comment",
    notificationType: "parent_comment",
    status: "scheduled",
    payload: { makeupTaskId: task.makeupTaskId, scheduleType: "lesson" }
  },
  {
    notificationJobId: "other-task-student",
    notificationType: "schedule_reminder",
    status: "scheduled",
    payload: { makeupTaskId: "other-task", scheduleType: "supplement" }
  }
];

assert.equal(canCancelNotificationJob({ status: "scheduled" }), true);
assert.equal(canCancelNotificationJob({ status: "sent" }), false);
assert.equal(canCancelNotificationJob(null), false);
assert.deepEqual(
  getCancelableSupplementScheduleNoticeJobs(task, activeScheduleHistory).map((job) => job.notificationJobId).sort(),
  ["parent-queued", "student-scheduled-older", "wrong-date"].sort()
);
assert.deepEqual(
  [...getCurrentSupplementScheduleNoticeTargets(task, activeScheduleHistory)].sort(),
  ["parent", "student"]
);
assert.deepEqual(
  getCancelableSupplementTargetJobs(task, activeScheduleHistory, "student").map((job) => job.notificationJobId),
  ["student-scheduled-older", "wrong-date"]
);
assert.deepEqual(
  getCancelableSupplementTargetJobs(task, activeScheduleHistory, "parent").map((job) => job.notificationJobId),
  ["parent-queued"]
);

console.log("supplement job builders and selectors: deterministic contract passed");
