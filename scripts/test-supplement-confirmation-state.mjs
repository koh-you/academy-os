import assert from "node:assert/strict";
import {
  createConfirmedSupplementScheduleTask
} from "../src/domains/supplements/useSupplementConfirmationState.js";

const task = {
  makeupTaskId: "makeup-confirmation-fixture",
  scheduleChangeDetail: "기존 내역",
  scheduleChangeReason: "기존 사유",
  scheduledDate: "2026-08-31",
  scheduledTime: "14:00",
  skipStudentReminder: false
};

const withReminder = createConfirmedSupplementScheduleTask(task, true, {
  scheduleChangeDetail: "수정 내역",
  scheduleChangeReason: "학생 요청"
});
assert.deepEqual(withReminder, {
  ...task,
  scheduleChangeDetail: "수정 내역",
  scheduleChangeReason: "학생 요청",
  skipStudentReminder: false
});

const withoutReminder = createConfirmedSupplementScheduleTask(task, false, {
  scheduledTime: "15:00",
  skipStudentReminder: false
});
assert.deepEqual(withoutReminder, {
  ...task,
  scheduledTime: "15:00",
  skipStudentReminder: true
});

assert.equal(createConfirmedSupplementScheduleTask(null, true, {}), null);
assert.deepEqual(task, {
  makeupTaskId: "makeup-confirmation-fixture",
  scheduleChangeDetail: "기존 내역",
  scheduleChangeReason: "기존 사유",
  scheduledDate: "2026-08-31",
  scheduledTime: "14:00",
  skipStudentReminder: false
});

console.log("supplement confirmation state: deterministic contract passed");
