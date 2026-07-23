import assert from "node:assert/strict";
import {
  createSupplementAbsenceCancelHandler,
  createSupplementCancellationHandler
} from "../src/domains/supplements/supplementAbsenceCancelController.js";

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

const confirmationSourceRecord = { attendanceStatus: "pending", lessonStudentRecordId: "record-confirm" };

function createConfirmationHarness(mode, overrides = {}) {
  const events = [];
  const task = { makeupTaskId: "task-confirm", sourceRecordId: "record-confirm" };
  const result = { canceledNotificationJobCount: 2 };
  const handleConfirmSupplementCancellation = createSupplementCancellationHandler({
    beginTaskAction: (taskId, action) => events.push(["begin", taskId, action]),
    clearConfirmation: () => events.push(["clear"]),
    finishTaskAction: () => events.push(["finish"]),
    getCancellation: () => ({ mode, task }),
    hasBusyTask: false,
    logError: (...args) => events.push(["error", ...args]),
    onCancelAbsenceMakeup: async (payload) => {
      events.push(["cancelMakeup", payload]);
      return result;
    },
    onCancelAbsenceSource: async (payload) => {
      events.push(["cancelSource", payload]);
      return confirmationSourceRecord;
    },
    onClose: () => events.push(["close"]),
    showFeedback: (...args) => events.push(["feedback", ...args]),
    ...overrides
  });
  return { events, handleConfirmSupplementCancellation, result, task };
}

const keepAbsence = createConfirmationHarness("cancelMakeupKeepAbsence");
assert.equal(await keepAbsence.handleConfirmSupplementCancellation(), keepAbsence.result);
assert.deepEqual(keepAbsence.events.map(([type]) => type), [
  "begin",
  "feedback",
  "cancelMakeup",
  "clear",
  "feedback",
  "close",
  "finish"
]);
assert.deepEqual(keepAbsence.events[0], ["begin", "task-confirm", "cancelMakeup"]);
assert.match(keepAbsence.events[4][2], /2건/);

const cancelSource = createConfirmationHarness("cancelAbsenceSource");
assert.equal(await cancelSource.handleConfirmSupplementCancellation(), confirmationSourceRecord);
assert.deepEqual(cancelSource.events.map(([type]) => type), [
  "begin",
  "feedback",
  "cancelSource",
  "feedback",
  "clear",
  "close",
  "finish"
]);
assert.deepEqual(cancelSource.events[0], ["begin", "task-confirm", "cancelAbsence"]);

const keepAbsenceFailure = createConfirmationHarness("cancelMakeupKeepAbsence", {
  onCancelAbsenceMakeup: async () => {
    throw new Error("보강 취소 재조회 불일치");
  }
});
assert.equal(await keepAbsenceFailure.handleConfirmSupplementCancellation(), undefined);
assert.deepEqual(keepAbsenceFailure.events.map(([type]) => type), [
  "begin",
  "feedback",
  "error",
  "feedback",
  "finish"
]);
assert.equal(keepAbsenceFailure.events.some(([type]) => type === "clear"), false);
assert.equal(keepAbsenceFailure.events.some(([type]) => type === "close"), false);

console.log("supplement absence cancel controller fixture passed");
