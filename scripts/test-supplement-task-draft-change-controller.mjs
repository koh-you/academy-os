import assert from "node:assert/strict";
import { createSupplementTaskDraftChangeHandler } from "../src/domains/supplements/supplementTaskDraftChangeController.js";

function runChange(field, currentStatus = { lesson: "saved", notificationDraft: "saved" }) {
  const events = [];
  const task = { makeupTaskId: "task-1" };
  const updateTaskDraft = createSupplementTaskDraftChangeHandler({
    getTaskSaveStatus: (taskId) => {
      events.push(["getStatus", taskId]);
      return currentStatus;
    },
    setTaskSaveStatusPatch: (taskId, patch) => events.push(["setStatus", taskId, patch]),
    updateTaskDraftValues: (...args) => events.push(["update", ...args])
  });
  updateTaskDraft(task, field, "변경값");
  return { events, task, updateTaskDraft };
}

const schedule = runChange("scheduledDate");
assert.deepEqual(schedule.events, [
  ["update", schedule.task, "scheduledDate", "변경값"],
  ["getStatus", "task-1"],
  ["setStatus", "task-1", {
    lesson: "changed",
    makeupTask: "changed",
    notificationDraft: "saved"
  }]
]);

const notification = runChange("notificationDraft");
assert.deepEqual(notification.events[2], [
  "setStatus",
  "task-1",
  {
    lesson: "saved",
    makeupTask: "changed",
    notificationDraft: "changed"
  }
]);

const method = runChange("supplementMethod");
assert.deepEqual(method.events[2], [
  "setStatus",
  "task-1",
  {
    lesson: "saved",
    makeupTask: "changed",
    notificationDraft: "saved"
  }
]);

const missing = runChange("scheduledTime");
missing.events.length = 0;
missing.updateTaskDraft({}, "scheduledTime", "15:00");
assert.deepEqual(missing.events, []);

console.log("supplement task draft change controller fixture passed");
