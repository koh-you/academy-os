import assert from "node:assert/strict";
import { createSupplementTaskScheduleHandlers } from "../src/domains/supplements/supplementTaskScheduleController.js";

function createHarness(overrides = {}) {
  const events = [];
  const scheduleResult = {
    makeupTask: {
      makeupTaskId: "task-1",
      scheduledDate: "2026-08-31",
      scheduledTime: "14:00"
    },
    parentScheduleChangeNoticeStatus: "scheduled",
    scheduleChangeNoticeStatus: "scheduled",
    supplementReminderStatus: "scheduled"
  };
  const handlers = createSupplementTaskScheduleHandlers({
    beginTaskAction: (taskId, action) => events.push(["begin", taskId, action]),
    buildTaskWithDraft: (task) => ({
      ...task,
      scheduledDate: task.scheduledDate ?? "2026-08-31",
      scheduledTime: task.scheduledTime ?? "14:00"
    }),
    closeScheduleConfirmation: () => events.push(["reset"]),
    finishTaskAction: () => events.push(["finish"]),
    getImmediateNoticeStatus: (status, skipped) => skipped ? "notApplied" : status,
    hasBusyTask: false,
    logError: (...args) => events.push(["error", ...args]),
    markTaskDraftSaved: (taskId, task) => events.push(["mark", taskId, task]),
    onScheduleTask: async (task) => {
      events.push(["schedule", task]);
      return scheduleResult;
    },
    openScheduleConfirmation: (task) => events.push(["confirm", task]),
    setTaskSaveStatusPatch: (taskId, patch) => events.push(["status", taskId, patch]),
    showFeedback: (...args) => events.push(["feedback", ...args]),
    ...overrides
  });
  return { events, handlers, scheduleResult };
}

const success = createHarness();
const result = await success.handlers.handleApplyScheduleTask({ makeupTaskId: "task-1" });
assert.equal(result, success.scheduleResult);
assert.deepEqual(success.events.map(([type]) => type), [
  "begin",
  "status",
  "feedback",
  "schedule",
  "mark",
  "status",
  "reset",
  "feedback",
  "finish"
]);
assert.deepEqual(success.events[0], ["begin", "task-1", "schedule"]);
assert.equal(success.events[3][1].scheduledDate, "2026-08-31");

const invalid = createHarness({
  buildTaskWithDraft: (task) => ({ ...task, scheduledDate: "", scheduledTime: "" })
});
assert.equal(await invalid.handlers.handleApplyScheduleTask({ makeupTaskId: "task-1" }), undefined);
assert.deepEqual(invalid.events, [
  ["feedback", "수업일지 일정 만들기 실패", "배정일과 시간을 먼저 입력해야 합니다.", "failed"],
  ["status", "task-1", { lesson: "failed" }]
]);

const linked = createHarness();
linked.handlers.requestApplyScheduleTask({ linkedLessonId: "lesson-1", makeupTaskId: "task-1" });
assert.deepEqual(linked.events.map(([type]) => type), ["confirm"]);
assert.equal(linked.events[0][1].scheduledTime, "14:00");

const requestInvalid = createHarness({
  buildTaskWithDraft: (task) => ({ ...task, scheduledDate: "", scheduledTime: "" })
});
requestInvalid.handlers.requestApplyScheduleTask({ makeupTaskId: "task-1" });
assert.deepEqual(requestInvalid.events.map(([type]) => type), ["feedback", "status"]);

const requestSuccess = createHarness();
requestSuccess.handlers.requestApplyScheduleTask({ makeupTaskId: "task-1" });
await new Promise((resolve) => setTimeout(resolve, 0));
assert.deepEqual(requestSuccess.events.map(([type]) => type), [
  "begin",
  "status",
  "feedback",
  "schedule",
  "mark",
  "status",
  "reset",
  "feedback",
  "finish"
]);

const busy = createHarness({ hasBusyTask: true });
busy.handlers.requestApplyScheduleTask({ makeupTaskId: "task-1" });
assert.equal(await busy.handlers.handleApplyScheduleTask({ makeupTaskId: "task-1" }), undefined);
assert.deepEqual(busy.events, []);

const failed = createHarness({
  onScheduleTask: async () => {
    throw new Error("일정 재조회 불일치");
  }
});
assert.equal(await failed.handlers.handleApplyScheduleTask({ makeupTaskId: "task-1" }), undefined);
assert.deepEqual(failed.events.map(([type]) => type), [
  "begin",
  "status",
  "feedback",
  "status",
  "feedback",
  "error",
  "finish"
]);
assert.match(failed.events[5][2].message, /재조회 불일치/);
assert.equal(failed.events.some(([type]) => type === "reset"), false);

console.log("supplement task schedule controller fixture passed");
