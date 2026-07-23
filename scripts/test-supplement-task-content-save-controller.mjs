import assert from "node:assert/strict";
import { createSupplementTaskContentSaveHandler } from "../src/domains/supplements/supplementTaskContentSaveController.js";

function createHarness(overrides = {}) {
  const events = [];
  const savedTask = {
    linkedLessonId: "lesson-1",
    makeupTaskId: "task-1",
    notificationDraft: "저장할 문구",
    supplementTeacherEditedFields: ["notificationDraft"]
  };
  const handleSaveTask = createSupplementTaskContentSaveHandler({
    beginTaskAction: (taskId, action) => events.push(["begin", taskId, action]),
    buildTaskWithDraft: (task) => ({ ...task, notificationDraft: "저장할 문구" }),
    finishTaskAction: () => events.push(["finish"]),
    getTaskSaveStatus: () => ({ lesson: "synced" }),
    hasBusyTask: false,
    logError: (...args) => events.push(["error", ...args]),
    markTaskDraftSaved: (taskId, task) => events.push(["mark", taskId, task]),
    onSaveTask: async (task) => {
      events.push(["save", task]);
      return savedTask;
    },
    setTaskSaveStatusPatch: (taskId, patch) => events.push(["status", taskId, patch]),
    showFeedback: (...args) => events.push(["feedback", ...args]),
    ...overrides
  });
  return { events, handleSaveTask, savedTask };
}

const success = createHarness();
const result = await success.handleSaveTask({ makeupTaskId: "task-1" });
assert.equal(result, success.savedTask);
assert.deepEqual(success.events.map(([type]) => type), [
  "begin",
  "status",
  "feedback",
  "save",
  "mark",
  "status",
  "feedback",
  "finish"
]);
assert.deepEqual(success.events[0], ["begin", "task-1", "content"]);
assert.equal(success.events[3][1].notificationDraft, "저장할 문구");
assert.deepEqual(success.events[4].slice(0, 2), ["mark", "task-1"]);
assert.deepEqual(success.events[5], [
  "status",
  "task-1",
  {
    lesson: "synced",
    makeupTask: "saved",
    notificationDraft: "saved"
  }
]);

const busy = createHarness({ hasBusyTask: true });
assert.equal(await busy.handleSaveTask({ makeupTaskId: "task-1" }), undefined);
assert.deepEqual(busy.events, []);

const missing = createHarness();
assert.equal(await missing.handleSaveTask({}), undefined);
assert.deepEqual(missing.events, []);

const failed = createHarness({
  onSaveTask: async () => {
    throw new Error("Supabase 재조회 불일치");
  }
});
assert.equal(await failed.handleSaveTask({ makeupTaskId: "task-1" }), undefined);
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

console.log("supplement task content save controller fixture passed");
