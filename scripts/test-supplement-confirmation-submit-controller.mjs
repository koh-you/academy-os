import assert from "node:assert/strict";
import { createSupplementConfirmationSubmitHandlers } from "../src/domains/supplements/supplementConfirmationSubmitController.js";

function createHarness(overrides = {}) {
  const events = [];
  const confirmedScheduleTask = { makeupTaskId: "task-1", skipStudentReminder: false };
  const handlers = createSupplementConfirmationSubmitHandlers({
    getConfirmedScheduleTask: (updateStudentReminder, noticePatch) => {
      events.push(["getSchedule", updateStudentReminder, noticePatch]);
      return confirmedScheduleTask;
    },
    handleApplyScheduleTask: (task) => events.push(["schedule", task]),
    handlePassTask: (task) => events.push(["pass", task]),
    passConfirmTask: { makeupTaskId: "task-1" },
    ...overrides
  });
  return { confirmedScheduleTask, events, handlers };
}

const pass = createHarness();
pass.handlers.confirmPassTask();
assert.deepEqual(pass.events, [["pass", { makeupTaskId: "task-1" }]]);

const noPass = createHarness({ passConfirmTask: null });
noPass.handlers.confirmPassTask();
assert.deepEqual(noPass.events, []);

const schedule = createHarness();
const noticePatch = { scheduleChangeReason: "시간 변경" };
schedule.handlers.confirmScheduleTask(true, noticePatch);
assert.deepEqual(schedule.events, [
  ["getSchedule", true, noticePatch],
  ["schedule", schedule.confirmedScheduleTask]
]);

const scheduleWithoutPatch = createHarness();
scheduleWithoutPatch.handlers.confirmScheduleTask(false);
assert.deepEqual(scheduleWithoutPatch.events[0], ["getSchedule", false, {}]);

const noSchedule = createHarness({
  getConfirmedScheduleTask: (updateStudentReminder, noticePatch) => {
    noSchedule.events.push(["getSchedule", updateStudentReminder, noticePatch]);
    return null;
  }
});
noSchedule.handlers.confirmScheduleTask(true, noticePatch);
assert.deepEqual(noSchedule.events, [["getSchedule", true, noticePatch]]);

console.log("supplement confirmation submit controller fixture passed");
