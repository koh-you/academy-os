import assert from "node:assert/strict";
import { createSupplementCenterModalActionHandlers } from "../src/domains/supplements/supplementCenterModalActionController.js";

function taskKey(task = {}) {
  return [task.taskType, task.studentId, task.sourceId].filter(Boolean).join(":");
}

function createHarness(overrides = {}) {
  const events = [];
  const task = {
    makeupTaskId: "task-1",
    sourceId: "source-1",
    studentId: "student-1",
    taskType: "homework_makeup"
  };
  const savedTask = { ...task, status: "scheduled" };
  const savedRecord = { lessonStudentRecordId: "record-1", attendanceStatus: "pending" };
  let pendingCandidateTask = task;
  const handlers = createSupplementCenterModalActionHandlers({
    clearPendingCandidateTask: (nextTask) => events.push(["clear", nextTask]),
    getSupplementActionKey: taskKey,
    onCancelAbsenceSource: async (nextTask) => {
      events.push(["cancel", nextTask]);
      return savedRecord;
    },
    onPassTask: async (nextTask) => {
      events.push(["pass", nextTask]);
      return savedTask;
    },
    onSaveTask: async (nextTask) => {
      events.push(["save", nextTask]);
      return savedTask;
    },
    onScheduleTask: async (nextTask) => {
      events.push(["schedule", nextTask]);
      return { makeupTask: savedTask, lesson: { lessonId: "lesson-1" } };
    },
    setPendingCandidateTask: (updater) => {
      pendingCandidateTask = updater(pendingCandidateTask);
      events.push(["pending", pendingCandidateTask]);
    },
    setSupplementRowAction: (...args) => events.push(["row", ...args]),
    ...overrides
  });
  return {
    events,
    getPendingCandidateTask: () => pendingCandidateTask,
    handlers,
    savedRecord,
    savedTask,
    task
  };
}

const saved = createHarness();
assert.equal(await saved.handlers.handleSaveSupplementTaskFromModal(saved.task), saved.savedTask);
assert.deepEqual(saved.events.map(([type]) => type), ["row", "save", "clear", "row"]);
assert.deepEqual(saved.events.at(-1), ["row", saved.savedTask, "saved", "보충 내용 저장 완료"]);

const scheduled = createHarness();
const scheduleResult = await scheduled.handlers.handleScheduleSupplementTaskFromModal(scheduled.task);
assert.equal(scheduleResult.makeupTask, scheduled.savedTask);
assert.deepEqual(scheduled.events.map(([type]) => type), ["row", "schedule", "clear", "row"]);
assert.deepEqual(scheduled.events.at(-1), ["row", scheduled.savedTask, "saved", "수업일지 일정 저장 완료"]);

const canceled = createHarness();
assert.equal(await canceled.handlers.handleCancelAbsenceSourceFromModal(canceled.task), canceled.savedRecord);
assert.equal(canceled.getPendingCandidateTask(), null);
assert.deepEqual(canceled.events.map(([type]) => type), ["row", "cancel", "pending", "row"]);
assert.deepEqual(canceled.events.at(-1), ["row", canceled.task, "saved", "결석 처리 취소 완료"]);

const passed = createHarness();
assert.equal(await passed.handlers.handlePassSupplementTaskFromModal(passed.task), passed.savedTask);
assert.deepEqual(passed.events.map(([type]) => type), ["row", "pass", "clear", "row"]);
assert.deepEqual(passed.events.at(-1), ["row", passed.savedTask, "saved", "보충 완료 처리 완료"]);

for (const [handlerName, callbackName, failureMessage] of [
  ["handleSaveSupplementTaskFromModal", "onSaveTask", "저장 재조회 실패"],
  ["handleScheduleSupplementTaskFromModal", "onScheduleTask", "일정 재조회 실패"],
  ["handleCancelAbsenceSourceFromModal", "onCancelAbsenceSource", "결석 취소 실패"],
  ["handlePassSupplementTaskFromModal", "onPassTask", "완료 저장 실패"]
]) {
  const failed = createHarness({
    [callbackName]: async () => {
      throw new Error(failureMessage);
    }
  });
  await assert.rejects(
    () => failed.handlers[handlerName](failed.task),
    new RegExp(failureMessage)
  );
  assert.deepEqual(failed.events.map(([type]) => type), ["row", "row"]);
  assert.deepEqual(failed.events.at(-1), ["row", failed.task, "failed", failureMessage]);
}

console.log("supplement center modal action controller fixture passed");
