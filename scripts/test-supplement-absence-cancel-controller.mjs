import assert from "node:assert/strict";
import { createSupplementAbsenceCancelHandler } from "../src/domains/supplements/supplementAbsenceCancelController.js";

function createHarness(overrides = {}) {
  const events = [];
  const savedRecord = { attendanceStatus: "pending", lessonStudentRecordId: "record-1" };
  const handleCancelAbsenceSourceTask = createSupplementAbsenceCancelHandler({
    beginTaskAction: (taskId, action) => events.push(["begin", taskId, action]),
    finishTaskAction: () => events.push(["finish"]),
    hasBusyTask: false,
    logError: (...args) => events.push(["error", ...args]),
    onCancelAbsenceSource: async (task) => {
      events.push(["cancel", task]);
      return savedRecord;
    },
    onClose: () => events.push(["close"]),
    showFeedback: (...args) => events.push(["feedback", ...args]),
    ...overrides
  });
  return { events, handleCancelAbsenceSourceTask, savedRecord };
}

const task = { makeupTaskId: "task-1", sourceRecordId: "record-1" };
const success = createHarness();
const result = await success.handleCancelAbsenceSourceTask(task);
assert.equal(result, success.savedRecord);
assert.deepEqual(success.events.map(([type]) => type), [
  "begin",
  "feedback",
  "cancel",
  "feedback",
  "close",
  "finish"
]);
assert.deepEqual(success.events[0], ["begin", "task-1", "cancelAbsence"]);
assert.equal(success.events[2][1], task);

const busy = createHarness({ hasBusyTask: true });
assert.equal(await busy.handleCancelAbsenceSourceTask(task), undefined);
assert.deepEqual(busy.events, []);

const missing = createHarness();
assert.equal(await missing.handleCancelAbsenceSourceTask(null), undefined);
assert.deepEqual(missing.events, []);

const failed = createHarness({
  onCancelAbsenceSource: async () => {
    throw new Error("출결 재조회 불일치");
  }
});
assert.equal(await failed.handleCancelAbsenceSourceTask(task), undefined);
assert.deepEqual(failed.events.map(([type]) => type), [
  "begin",
  "feedback",
  "feedback",
  "error",
  "finish"
]);
assert.match(failed.events[3][2].message, /재조회 불일치/);
assert.equal(failed.events.some(([type]) => type === "close"), false);

console.log("supplement absence cancel controller fixture passed");
