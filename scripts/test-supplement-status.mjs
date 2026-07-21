import assert from "node:assert/strict";
import {
  getSupplementImmediateNoticeSaveStatus,
  getSupplementNotificationControlDisplay,
  getSupplementSaveStatusLabel,
  getSupplementStudentReminderSaveStatus
} from "../src/domains/supplements/supplementStatus.js";

assert.equal(getSupplementSaveStatusLabel("changed"), "저장 필요");
assert.equal(getSupplementSaveStatusLabel("unknown"), "대기");

const displayOptions = { formatJobStatus: (job) => `기타:${job.status}`, isSchedulePast: (value) => value === "past" };
assert.deepEqual(getSupplementNotificationControlDisplay(null, displayOptions), { label: "예약 없음", tone: "off" });
assert.deepEqual(getSupplementNotificationControlDisplay({ status: "scheduled", scheduledAt: "future" }, displayOptions), { label: "예약됨", tone: "on" });
assert.deepEqual(getSupplementNotificationControlDisplay({ status: "queued", scheduledAt: "past" }, displayOptions), { label: "예약 시각 확인", tone: "warning" });
assert.deepEqual(getSupplementNotificationControlDisplay({ status: "sent" }, displayOptions), { label: "발송 완료", tone: "done" });
assert.deepEqual(getSupplementNotificationControlDisplay({ status: "canceled" }, displayOptions), { label: "취소됨", tone: "off" });
assert.deepEqual(getSupplementNotificationControlDisplay({ status: "failed" }, displayOptions), { label: "예약 실패", tone: "failed" });
assert.deepEqual(getSupplementNotificationControlDisplay({ status: "dry_run" }, displayOptions), { label: "확인 필요", tone: "warning" });
assert.deepEqual(getSupplementNotificationControlDisplay({ status: "other" }, displayOptions), { label: "기타:other", tone: "off" });

const task = { makeupTaskId: "makeup-1", studentId: "student-1", taskType: "absence_makeup", scheduledDate: "2026-07-23" };
const reminderId = "supplement_student_reminder_makeup-1_student-1";
const reminderStatus = (status, scheduledAt = "future") => getSupplementStudentReminderSaveStatus(task, [{ notificationJobId: reminderId, status, scheduledAt }], displayOptions);
assert.equal(getSupplementStudentReminderSaveStatus({ taskType: "retest" }, [], displayOptions), "notApplied");
assert.equal(getSupplementStudentReminderSaveStatus({ ...task, scheduledDate: "" }, [], displayOptions), "empty");
assert.equal(reminderStatus("scheduled"), "scheduled");
assert.equal(reminderStatus("scheduled", "past"), "resultDue");
assert.equal(reminderStatus("dry_run"), "scheduled");
assert.equal(reminderStatus("sent"), "synced");
assert.equal(reminderStatus("send_unconfirmed"), "resultDue");
assert.equal(reminderStatus("failed"), "failed");
assert.equal(reminderStatus("canceled"), "canceled");
assert.equal(getSupplementStudentReminderSaveStatus(task, [], { isSchedulePast: () => false }), "ready");
assert.equal(getSupplementStudentReminderSaveStatus(task, [], { isSchedulePast: () => true }), "resultDue");

assert.equal(getSupplementImmediateNoticeSaveStatus("sent"), "synced");
assert.equal(getSupplementImmediateNoticeSaveStatus("dry_run"), "synced");
assert.equal(getSupplementImmediateNoticeSaveStatus("send_unconfirmed"), "resultDue");
assert.equal(getSupplementImmediateNoticeSaveStatus("failed"), "failed");
assert.equal(getSupplementImmediateNoticeSaveStatus("scheduled"), "scheduled");
assert.equal(getSupplementImmediateNoticeSaveStatus("", true), "notApplied");
assert.equal(getSupplementImmediateNoticeSaveStatus(""), "idle");

console.log("supplement status: deterministic contract passed");
