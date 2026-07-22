import assert from "node:assert/strict";
import {
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

console.log("supplement task actions: deterministic contract passed");
