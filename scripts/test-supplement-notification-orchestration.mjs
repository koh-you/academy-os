import assert from "node:assert/strict";
import {
  cancelActiveSupplementScheduleNoticesRequest,
  cancelSupplementNotificationControlRequest,
  cancelSupplementStudentReminderRequest,
  reserveSupplementNotificationControlRequest,
  reserveSupplementScheduleNoticeJobRequest,
  reserveSupplementScheduleNoticesRequest,
  reserveSupplementStudentReminderJobRequest
} from "../src/domains/notifications/supplementNotificationOrchestration.js";

const reminderTask = {
  makeupTaskId: "makeup-1",
  studentId: "student-1",
  taskType: "absence_makeup",
  scheduledDate: "2026-07-23",
  scheduledTime: "15:00",
  notificationDraft: "저장된 11시 최종 문구"
};
const reminderStudent = {
  studentId: "student-1",
  name: "고태영",
  studentPhone: "01011112222"
};
const reminderReserveCalls = [];
const reminderResult = await reserveSupplementStudentReminderJobRequest({
  academyName: "으뜸수학",
  formatScheduledAt: (value) => `KST:${value}`,
  getScheduleTitle: () => "결석보강",
  isSchedulePast: () => false,
  normalizeMessage: (value) => value.trim(),
  reserveNotificationJob: async (job, reason) => {
    reminderReserveCalls.push({ job, reason });
    return { ...job, status: "scheduled" };
  },
  student: reminderStudent,
  task: reminderTask
});
assert.equal(reminderResult.status, "scheduled");
assert.equal(reminderResult.message, "학생 11시 알림톡 예약 완료 · KST:2026-07-23T02:00:00.000Z");
assert.equal(reminderReserveCalls[0].reason, "보충관리 학생 11시 알림톡 예약");
assert.equal(reminderReserveCalls[0].job.payload.reminderBody, "저장된 11시 최종 문구");

assert.equal((await reserveSupplementStudentReminderJobRequest({ task: { taskType: "retest" } })).skipped, true);
assert.equal((await reserveSupplementStudentReminderJobRequest({
  task: { ...reminderTask, notificationDraft: "" },
  teacherEditedDraft: true
})).status, "notApplied");
assert.match((await reserveSupplementStudentReminderJobRequest({ task: reminderTask })).message, /학생 정보를 찾지 못해/);
assert.match((await reserveSupplementStudentReminderJobRequest({
  isSchedulePast: () => false,
  student: reminderStudent,
  task: { ...reminderTask, scheduledDate: "" }
})).message, /배정일이 없어/);
assert.match((await reserveSupplementStudentReminderJobRequest({
  isSchedulePast: () => true,
  student: reminderStudent,
  task: reminderTask
})).message, /11:00이 이미 지나/);

const pairEvents = [];
const pairResult = await reserveSupplementScheduleNoticesRequest({
  academyName: "으뜸수학",
  cancelActiveNotices: async (task) => pairEvents.push(["cancel", task.makeupTaskId]),
  getNoticeDraft: (_task, target, previous) => `${target}:${previous}`,
  getScheduleTitle: () => "결석보강",
  getScheduledAt: () => "2026-07-22T06:00:00.000Z",
  notificationTemplates: { fixture: true },
  previousScheduleText: "7/21 15:00",
  reserveScheduleNoticeJob: async (job, prefix) => {
    pairEvents.push(["reserve", job.target, prefix]);
    return { notificationJob: job, status: "scheduled" };
  },
  student: reminderStudent,
  task: reminderTask
});
assert.deepEqual(pairEvents, [
  ["cancel", "makeup-1"],
  ["reserve", "student", "학생 보충 일정 안내 예약 실패"],
  ["reserve", "parent", "학부모 보충 일정 안내 예약 실패"]
]);
assert.equal(pairResult.scheduledAt, "2026-07-22T06:00:00.000Z");
assert.equal(pairResult.student.notificationJob.payload.reminderBody, "student:7/21 15:00");
assert.equal(pairResult.parent.notificationJob.payload.commentBodyOverride, "parent:7/21 15:00");
assert.equal(pairResult.parent.notificationJob.payload.message, "parent:7/21 15:00");
assert.equal(pairResult.student.notificationJob.scheduledAt, pairResult.parent.notificationJob.scheduledAt);

assert.equal((await reserveSupplementScheduleNoticesRequest({ task: { taskType: "retest" } })).student.status, "notApplied");
assert.equal((await reserveSupplementScheduleNoticesRequest({ task: reminderTask })).parent.status, "failed");

const controlCancelCalls = [];
const controlCancelResult = await cancelSupplementNotificationControlRequest({
  canCancelNotificationJob: (job) => job.status === "scheduled",
  cancelNotificationJob: async (job, reason) => {
    controlCancelCalls.push({ job, reason });
    return { notificationJob: { ...job, status: "canceled" } };
  },
  notificationJob: { notificationJobId: "control-1", status: "scheduled" }
});
assert.deepEqual(controlCancelCalls, [{
  job: { notificationJobId: "control-1", status: "scheduled" },
  reason: "보충관리 개별 알림톡 예약 취소"
}]);
assert.equal(controlCancelResult.status, "canceled");
assert.equal(controlCancelResult.message, "Solapi 예약을 취소했습니다.");
await assert.rejects(
  cancelSupplementNotificationControlRequest({
    canCancelNotificationJob: () => false,
    notificationJob: { status: "sent" }
  }),
  /현재 취소할 수 있는 Solapi 예약이 없습니다/
);

const reminderCancellationJob = {
  notificationJobId: "supplement_student_reminder_makeup-1_student-1",
  status: "scheduled"
};

const activeScheduleCancellationEvents = [];
const activeScheduleCancellationResult = await cancelActiveSupplementScheduleNoticesRequest({
  cancelNotificationJob: async () => ({}),
  cancelNotificationJobs: async ({ cancelNotificationJob, notificationJobs, reason }) => {
    activeScheduleCancellationEvents.push([typeof cancelNotificationJob, notificationJobs.map((job) => job.notificationJobId), reason]);
    return notificationJobs;
  },
  notificationJobs: [
    { notificationJobId: "student-current", notificationType: "schedule_reminder", status: "scheduled", payload: { makeupTaskId: "makeup-1", scheduleType: "supplement" } },
    { notificationJobId: "parent-current", notificationType: "notice_parent", status: "queued", payload: { makeupTaskId: "makeup-1", scheduleType: "supplement" } },
    { notificationJobId: "parent-legacy", notificationType: "parent_comment", status: "pending_send", payload: { makeupTaskId: "makeup-1", scheduleType: "supplement" } },
    { notificationJobId: "other-task", notificationType: "schedule_reminder", status: "scheduled", payload: { makeupTaskId: "makeup-2", scheduleType: "supplement" } },
    { notificationJobId: "already-sent", notificationType: "schedule_reminder", status: "sent", payload: { makeupTaskId: "makeup-1", scheduleType: "supplement" } }
  ],
  reason: "일정 변경",
  task: reminderTask
});
assert.deepEqual(activeScheduleCancellationEvents, [[
  "function",
  ["student-current", "parent-current", "parent-legacy"],
  "일정 변경"
]]);
assert.deepEqual(activeScheduleCancellationResult.map((job) => job.notificationJobId), ["student-current", "parent-current", "parent-legacy"]);
const reminderCancellationCalls = [];
const canceledReminder = await cancelSupplementStudentReminderRequest({
  cancelNotificationJob: async (job, reason) => {
    reminderCancellationCalls.push([job, reason]);
    return { notificationJob: { ...job, status: "canceled" } };
  },
  isActiveNotificationJob: (job) => job.status === "scheduled",
  notificationJobs: [reminderCancellationJob],
  reason: "완료 취소",
  task: reminderTask
});
assert.deepEqual(reminderCancellationCalls, [[reminderCancellationJob, "완료 취소"]]);
assert.equal(canceledReminder.status, "canceled");

const inactiveReminderJob = { ...reminderCancellationJob, status: "sent" };
assert.equal(await cancelSupplementStudentReminderRequest({
  cancelNotificationJob: () => assert.fail("inactive history must not be canceled"),
  isActiveNotificationJob: () => false,
  notificationJobs: [inactiveReminderJob],
  task: reminderTask
}), inactiveReminderJob);

let fallbackJobId = "";
await cancelSupplementStudentReminderRequest({
  cancelNotificationJob: async (job) => {
    fallbackJobId = job.notificationJobId;
    return { notificationJob: { ...job, status: "canceled" } };
  },
  isActiveNotificationJob: () => true,
  task: reminderTask
});
assert.equal(fallbackJobId, reminderCancellationJob.notificationJobId);

const cancellationError = new Error("fixture cancel failure");
let capturedCancellationError = null;
assert.equal(await cancelSupplementStudentReminderRequest({
  cancelNotificationJob: async () => { throw cancellationError; },
  isActiveNotificationJob: () => true,
  onError: (error) => { capturedCancellationError = error; },
  task: reminderTask
}), null);
assert.equal(capturedCancellationError, cancellationError);
assert.equal(await cancelSupplementStudentReminderRequest({ task: { taskType: "retest" } }), null);

const controlTask = { ...reminderTask, studentScheduleNotificationDraft: "학생 일정 최종본" };
const controlEvents = [];
const controlReserveResult = await reserveSupplementNotificationControlRequest({
  academyName: "으뜸수학",
  cancelNotificationJob: async () => ({}),
  cancelNotificationJobs: async ({ notificationJobs, reason }) => controlEvents.push(["cancel", notificationJobs.length, reason]),
  controlType: "studentSchedule",
  getDraftField: () => "studentScheduleNotificationDraft",
  getNoticeDraft: (task) => task.studentScheduleNotificationDraft,
  getScheduleTitle: () => "결석보강",
  getScheduledAt: () => "2026-07-22T06:00:00.000Z",
  isTeacherEditedField: () => true,
  notificationJobs: [{
    notificationJobId: "old-student",
    notificationType: "schedule_reminder",
    status: "scheduled",
    payload: { makeupTaskId: controlTask.makeupTaskId, scheduleType: "supplement", scheduleDate: "2026-07-20", scheduleTime: "14:00" }
  }],
  reserveScheduleNoticeJob: async (job, prefix) => {
    controlEvents.push(["reserve", job.target, prefix]);
    return { notificationJob: job, status: "scheduled" };
  },
  reserveStudentReminder: () => assert.fail("schedule control must not reserve the 11am job"),
  student: reminderStudent,
  task: controlTask
});
assert.deepEqual(controlEvents, [
  ["cancel", 1, "보충관리 개별 알림톡 재예약"],
  ["reserve", "student", "학생 보충 일정 안내 예약 실패"]
]);
assert.equal(controlReserveResult.status, "scheduled");
assert.equal(controlReserveResult.notificationJob.payload.reminderBody, "학생 일정 최종본");

const existingControlJob = {
  notificationJobId: "existing-parent",
  notificationType: "notice_parent",
  status: "scheduled",
  payload: {
    makeupTaskId: controlTask.makeupTaskId,
    scheduleDate: controlTask.scheduledDate,
    scheduleTime: controlTask.scheduledTime,
    scheduleType: "supplement"
  }
};
const existingControlResult = await reserveSupplementNotificationControlRequest({
  controlType: "parentSchedule",
  getDraftField: () => "parentScheduleNotificationDraft",
  isTeacherEditedField: () => false,
  notificationJobs: [existingControlJob],
  student: reminderStudent,
  task: controlTask
});
assert.equal(existingControlResult.notificationJob, existingControlJob);
assert.equal(existingControlResult.message, "학부모 알림톡이 이미 예약되어 있습니다.");

const reminderControlResult = await reserveSupplementNotificationControlRequest({
  controlType: "studentReminder",
  getDraftField: () => "notificationDraft",
  isTeacherEditedField: () => false,
  reserveStudentReminder: async () => ({ skipped: false, status: "scheduled", message: "11시 완료" }),
  student: reminderStudent,
  task: reminderTask
});
assert.equal(reminderControlResult.message, "11시 완료");

await assert.rejects(reserveSupplementNotificationControlRequest({ task: {} }), /예약할 보충 일정 정보를 찾지 못했습니다/);
await assert.rejects(reserveSupplementNotificationControlRequest({ task: reminderTask }), /학생 정보를 찾지 못했습니다/);
await assert.rejects(reserveSupplementNotificationControlRequest({
  controlType: "studentSchedule",
  getDraftField: () => "studentScheduleNotificationDraft",
  isTeacherEditedField: () => true,
  student: reminderStudent,
  task: { ...controlTask, studentScheduleNotificationDraft: "" }
}), /선생님 최종 알림톡 문구가 비어 있습니다/);

const baseJob = {
  notificationJobId: "student-schedule",
  recipient: "010-1111-2222",
  scheduledAt: "2026-07-22T06:00:00.000Z",
  target: "student",
  payload: { noticeKind: "supplement_schedule_confirm" }
};

const reserveCalls = [];
const scheduledResult = await reserveSupplementScheduleNoticeJobRequest({
  formatScheduledAt: (value) => `KST:${value}`,
  missingMessagePrefix: "학생 보충 일정 안내 예약 실패",
  normalizeRecipient: (value) => value.replace(/\D/g, ""),
  notificationJob: baseJob,
  persistFailure: () => assert.fail("valid recipient must not persist a local failure"),
  reserveNotificationJob: async (job, reason) => {
    reserveCalls.push({ job, reason });
    return { ...job, status: "scheduled" };
  }
});

assert.deepEqual(reserveCalls, [{
  job: baseJob,
  reason: "보충관리 학생·학부모 다음 정각 안내 예약"
}]);
assert.equal(scheduledResult.status, "scheduled");
assert.equal(scheduledResult.message, "학생 보충 일정 확정 안내 예약 완료 · KST:2026-07-22T06:00:00.000Z");

const parentChangeResult = await reserveSupplementScheduleNoticeJobRequest({
  formatScheduledAt: () => "7/22 15:00",
  missingMessagePrefix: "학부모 보충 일정 안내 예약 실패",
  normalizeRecipient: (value) => value,
  notificationJob: {
    ...baseJob,
    target: "parent",
    payload: { noticeKind: "supplement_schedule_change" }
  },
  persistFailure: () => assert.fail("valid recipient must not persist a local failure"),
  reserveNotificationJob: async (job) => ({ ...job, status: "dry_run" })
});
assert.equal(parentChangeResult.status, "scheduled");
assert.equal(parentChangeResult.message, "학부모 보충 일정 변경 안내 예약 완료 · 7/22 15:00");

const providerFailure = await reserveSupplementScheduleNoticeJobRequest({
  formatScheduledAt: () => "",
  missingMessagePrefix: "학생 보충 일정 안내 예약 실패",
  normalizeRecipient: (value) => value,
  notificationJob: baseJob,
  persistFailure: () => assert.fail("valid recipient must not persist a local failure"),
  reserveNotificationJob: async (job) => ({ ...job, status: "failed", error: "provider failure" })
});
assert.equal(providerFailure.status, "failed");
assert.equal(providerFailure.message, "provider failure");

const missingRecipientResult = await reserveSupplementScheduleNoticeJobRequest({
  formatScheduledAt: () => "",
  missingMessagePrefix: "학생 보충 일정 안내 예약 실패",
  normalizeRecipient: () => "",
  notificationJob: { ...baseJob, recipient: "" },
  persistFailure: (job, prefix, error) => ({ job, prefix, error }),
  reserveNotificationJob: () => assert.fail("missing recipient must not reserve")
});
assert.equal(missingRecipientResult.prefix, "학생 보충 일정 안내 예약 실패");
assert.equal(missingRecipientResult.error, "수신 연락처가 없습니다.");

console.log("supplement notification orchestration: deterministic contract passed");
