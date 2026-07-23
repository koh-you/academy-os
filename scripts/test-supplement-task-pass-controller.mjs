import assert from "node:assert/strict";
import { createSupplementTaskPassHandler } from "../src/domains/supplements/supplementTaskPassController.js";

function createHarness(overrides = {}) {
  const events = [];
  const completedTask = { makeupTaskId: "task-1", status: "done" };
  const handlePassTask = createSupplementTaskPassHandler({
    beginTaskAction: (taskId, action) => events.push(["begin", taskId, action]),
    buildTaskWithDraft: (task) => ({ ...task, notificationDraft: "최종 문구" }),
    closePassConfirmation: () => events.push(["reset"]),
    finishTaskAction: () => events.push(["finish"]),
    hasBusyTask: false,
    logError: (...args) => events.push(["error", ...args]),
    onClose: () => events.push(["close"]),
    onPassTask: async (task) => {
      events.push(["pass", task]);
      return completedTask;
    },
    showFeedback: (...args) => events.push(["feedback", ...args]),
    studentName: "고태영",
    ...overrides
  });
  return { completedTask, events, handlePassTask };
}

const success = createHarness();
const result = await success.handlePassTask({ makeupTaskId: "task-1", status: "scheduled" });
assert.equal(result, success.completedTask);
assert.deepEqual(success.events.map(([type]) => type), [
  "begin",
  "feedback",
  "pass",
  "feedback",
  "reset",
  "close",
  "finish"
]);
assert.deepEqual(success.events[0], ["begin", "task-1", "pass"]);
assert.equal(success.events[2][1].notificationDraft, "최종 문구");
assert.match(success.events[1][2], /고태영/);

const busy = createHarness({ hasBusyTask: true });
assert.equal(await busy.handlePassTask({ makeupTaskId: "task-1" }), undefined);
assert.deepEqual(busy.events, []);

const missing = createHarness();
assert.equal(await missing.handlePassTask({}), undefined);
assert.deepEqual(missing.events, []);

const localDraft = createHarness();
assert.equal(await localDraft.handlePassTask({ isLocalDraftTask: true, makeupTaskId: "task-1" }), undefined);
assert.deepEqual(localDraft.events, [[
  "feedback",
  "보충 완료 처리 전 저장 필요",
  "보충 생성 화면에서는 먼저 보충 내용 저장을 눌러 보충 항목을 생성해야 합니다.",
  "failed"
]]);

const alreadyDone = createHarness();
assert.equal(await alreadyDone.handlePassTask({ makeupTaskId: "task-1", status: "done" }), undefined);
assert.deepEqual(alreadyDone.events, [[
  "feedback",
  "이미 보충 완료 처리됨",
  "이미 완료된 보충 항목입니다. 목록에서 새로고침 후에도 제외됩니다."
]]);

const failed = createHarness({
  onPassTask: async () => {
    throw new Error("완료 재조회 불일치");
  }
});
assert.equal(await failed.handlePassTask({ makeupTaskId: "task-1" }), undefined);
assert.deepEqual(failed.events.map(([type]) => type), [
  "begin",
  "feedback",
  "feedback",
  "error",
  "finish"
]);
assert.match(failed.events[3][2].message, /재조회 불일치/);
assert.equal(failed.events.some(([type]) => type === "reset"), false);
assert.equal(failed.events.some(([type]) => type === "close"), false);

console.log("supplement task pass controller fixture passed");
