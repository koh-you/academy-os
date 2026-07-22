import assert from "node:assert/strict";
import { saveSupplementTaskContentAction } from "../src/domains/supplements/supplementTaskActions.js";

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

console.log("supplement task actions: deterministic contract passed");
