import assert from "node:assert/strict";
import {
  applySupplementScheduleAction,
  cancelSupplementAbsenceSourceAction,
  passSupplementTaskAction,
  saveSupplementTaskContentAction
} from "../src/domains/supplements/supplementTaskActions.js";

const task = { makeupTaskId: "task-1" };
const taskWithDraft = { ...task, notificationDraft: "최종 문구" };
const successEvents = [];
const savedTask = { ...taskWithDraft, linkedLessonId: "lesson-1", needsLessonResync: true };
const result = await saveSupplementTaskContentAction({
  currentLessonStatus: "synced",
  onFeedback: (value) => successEvents.push(["feedback", value]),
  onMarkSaved: (value) => successEvents.push(["mark", value]),
  onSaveStatus: (value) => successEvents.push(["status", value]),
  saveTask: async (payload) => {
    successEvents.push(["save", payload]);
    return savedTask;
  },
  task,
  taskWithDraft
});
assert.equal(result, savedTask);
assert.deepEqual(successEvents.map(([type]) => type), ["status", "feedback", "save", "mark", "status", "feedback"]);
assert.deepEqual(successEvents[0][1], { makeupTask: "saving", notificationDraft: "saving" });
assert.deepEqual(successEvents[4][1], { lesson: "changed", makeupTask: "saved", notificationDraft: "saved" });
assert.equal(successEvents[5][1].tone, "success");

const fallbackEvents = [];
const fallbackResult = await saveSupplementTaskContentAction({
  currentLessonStatus: "ready",
  onFeedback: (value) => fallbackEvents.push(["feedback", value]),
  onMarkSaved: (value) => fallbackEvents.push(["mark", value]),
  onSaveStatus: (value) => fallbackEvents.push(["status", value]),
  saveTask: async () => undefined,
  task,
  taskWithDraft
});
assert.equal(fallbackResult, taskWithDraft);
assert.deepEqual(fallbackEvents[3][1], { lesson: "ready", makeupTask: "saved", notificationDraft: "saved" });

const failedEvents = [];
await assert.rejects(() => saveSupplementTaskContentAction({
  currentLessonStatus: "",
  onFeedback: (value) => failedEvents.push(["feedback", value]),
  onMarkSaved: () => failedEvents.push(["mark"]),
  onSaveStatus: (value) => failedEvents.push(["status", value]),
  saveTask: async () => { throw new Error("재조회 불일치"); },
  task,
  taskWithDraft
}), /재조회 불일치/);
assert.deepEqual(failedEvents.map(([type]) => type), ["status", "feedback", "status", "feedback"]);
assert.deepEqual(failedEvents[2][1], { makeupTask: "failed", notificationDraft: "failed" });
assert.deepEqual(failedEvents[3][1], { message: "재조회 불일치", title: "보충 저장 실패", tone: "failed" });

const passEvents = [];
const completedTask = { ...taskWithDraft, status: "done" };
const passResult = await passSupplementTaskAction({
  onClose: () => passEvents.push(["close"]),
  onFeedback: (value) => passEvents.push(["feedback", value]),
  onResetConfirmation: () => passEvents.push(["reset"]),
  passTask: async (payload) => {
    passEvents.push(["pass", payload]);
    return completedTask;
  },
  studentName: "고태영",
  taskWithDraft
});
assert.equal(passResult, completedTask);
assert.deepEqual(passEvents.map(([type]) => type), ["feedback", "pass", "feedback", "reset", "close"]);
assert.deepEqual(passEvents[0][1], {
  message: "고태영 학생의 보충 항목을 완료 처리하고 있습니다.",
  title: "보충 완료 처리 중",
  tone: "saving"
});
assert.equal(passEvents[2][1].tone, "success");

const passFailureEvents = [];
await assert.rejects(() => passSupplementTaskAction({
  onClose: () => passFailureEvents.push(["close"]),
  onFeedback: (value) => passFailureEvents.push(["feedback", value]),
  onResetConfirmation: () => passFailureEvents.push(["reset"]),
  passTask: async () => {
    passFailureEvents.push(["pass"]);
    throw new Error("완료 재조회 불일치");
  },
  studentName: "고태영",
  taskWithDraft
}), /완료 재조회 불일치/);
assert.deepEqual(passFailureEvents.map(([type]) => type), ["feedback", "pass", "feedback"]);
assert.deepEqual(passFailureEvents[2][1], {
  message: "완료 재조회 불일치",
  title: "보충 완료 처리 실패",
  tone: "failed"
});

const absenceCancelEvents = [];
const sourceRecord = { attendanceStatus: "pending", lessonStudentRecordId: "record-1" };
const absenceCancelResult = await cancelSupplementAbsenceSourceAction({
  cancelSource: async (payload) => {
    absenceCancelEvents.push(["cancel", payload]);
    return sourceRecord;
  },
  onClose: () => absenceCancelEvents.push(["close"]),
  onFeedback: (value) => absenceCancelEvents.push(["feedback", value]),
  task
});
assert.equal(absenceCancelResult, sourceRecord);
assert.deepEqual(absenceCancelEvents.map(([type]) => type), ["feedback", "cancel", "feedback", "close"]);
assert.equal(absenceCancelEvents[0][1].tone, "saving");
assert.equal(absenceCancelEvents[2][1].tone, "success");

const absenceCancelFailureEvents = [];
await assert.rejects(() => cancelSupplementAbsenceSourceAction({
  cancelSource: async () => {
    absenceCancelFailureEvents.push(["cancel"]);
    throw new Error("출결 재조회 불일치");
  },
  onClose: () => absenceCancelFailureEvents.push(["close"]),
  onFeedback: (value) => absenceCancelFailureEvents.push(["feedback", value]),
  task
}), /출결 재조회 불일치/);
assert.deepEqual(absenceCancelFailureEvents.map(([type]) => type), ["feedback", "cancel", "feedback"]);
assert.deepEqual(absenceCancelFailureEvents[2][1], {
  message: "출결 재조회 불일치",
  title: "결석 처리 취소 실패",
  tone: "failed"
});

const scheduleEvents = [];
const scheduledTask = { ...taskWithDraft, scheduledDate: "2026-08-31", scheduledTime: "14:00" };
const scheduleResult = {
  makeupTask: { ...scheduledTask, linkedLessonId: "lesson-supplement" },
  parentScheduleChangeNoticeStatus: "scheduled",
  scheduleChangeNoticeStatus: "scheduled",
  supplementReminderStatus: "scheduled",
  scheduleChangeNoticeMessage: "학생 안내 예약 완료",
  parentScheduleChangeNoticeMessage: "학부모 안내 예약 완료",
  supplementReminderMessage: "학생 11시 예약 완료"
};
const returnedScheduleResult = await applySupplementScheduleAction({
  getImmediateNoticeStatus: (status, skipped) => skipped ? "notApplied" : status || "idle",
  onFeedback: (value) => scheduleEvents.push(["feedback", value]),
  onMarkSaved: (value) => scheduleEvents.push(["mark", value]),
  onResetConfirmation: () => scheduleEvents.push(["reset"]),
  onSaveStatus: (value) => scheduleEvents.push(["status", value]),
  scheduleTask: async (payload) => {
    scheduleEvents.push(["schedule", payload]);
    return scheduleResult;
  },
  task,
  taskWithDraft: scheduledTask
});
assert.equal(returnedScheduleResult, scheduleResult);
assert.deepEqual(scheduleEvents.map(([type]) => type), ["status", "feedback", "schedule", "mark", "status", "reset", "feedback"]);
assert.equal(scheduleEvents[0][1].lesson, "saving");
assert.deepEqual(scheduleEvents[4][1], {
  lesson: "synced",
  makeupTask: "saved",
  notificationDraft: "saved",
  parentChangeNotice: "scheduled",
  parentScheduleNoticeLabel: "학부모 확정 안내",
  studentChangeNotice: "scheduled",
  studentScheduleNoticeLabel: "학생 확정 안내",
  studentReminder: "scheduled"
});
assert.equal(scheduleEvents[6][1].title, "수업일지 일정 만들기 완료");

const scheduleFailureEvents = [];
await assert.rejects(() => applySupplementScheduleAction({
  getImmediateNoticeStatus: (status) => status || "idle",
  onFeedback: (value) => scheduleFailureEvents.push(["feedback", value]),
  onMarkSaved: () => scheduleFailureEvents.push(["mark"]),
  onResetConfirmation: () => scheduleFailureEvents.push(["reset"]),
  onSaveStatus: (value) => scheduleFailureEvents.push(["status", value]),
  scheduleTask: async () => {
    scheduleFailureEvents.push(["schedule"]);
    throw new Error("일정 저장 불일치");
  },
  task,
  taskWithDraft: scheduledTask
}), /일정 저장 불일치/);
assert.deepEqual(scheduleFailureEvents.map(([type]) => type), ["status", "feedback", "schedule", "status", "feedback"]);
assert.equal(scheduleFailureEvents[3][1].studentReminder, "failed");
assert.deepEqual(scheduleFailureEvents[4][1], {
  message: "일정 저장 불일치",
  title: "수업일지 일정 저장 실패",
  tone: "failed"
});

console.log("supplement task actions: deterministic contract passed");
