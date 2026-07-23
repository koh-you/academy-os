import assert from "node:assert/strict";
import {
  createPendingSupplementTask,
  createSelectedSupplementTasksViewModel,
  findSupplementTaskForCandidate,
  getSupplementActionKey
} from "../src/domains/supplements/supplementCenterSelectionModel.js";

const candidate = {
  sourceId: "record-retest",
  studentId: "student-1",
  taskType: "retest"
};
const persistedRetest = {
  ...candidate,
  makeupTaskId: "task-retest",
  status: "draft"
};
const otherSource = {
  ...candidate,
  makeupTaskId: "task-other-source",
  sourceId: "record-other",
  status: "draft"
};
assert.equal(getSupplementActionKey(candidate), "retest:student-1:record-retest");
assert.equal(findSupplementTaskForCandidate([otherSource, persistedRetest], candidate), persistedRetest);
assert.equal(findSupplementTaskForCandidate([otherSource], candidate), undefined);

const pendingRetest = createPendingSupplementTask(
  {
    ...candidate,
    sourceLabel: "7월 평가 재시험"
  },
  {
    createdAt: "2026-07-23T09:00:00.000Z",
    scheduledDate: "2026-07-23",
    taskId: "makeup-fixture-retest"
  }
);
assert.deepEqual(pendingRetest, {
  attemptCount: 0,
  childHomeworkIds: [],
  createdAt: "2026-07-23T09:00:00.000Z",
  isLocalDraftTask: true,
  makeupTaskId: "makeup-fixture-retest",
  notificationDraft: "",
  scheduledDate: "2026-07-23",
  scheduledTime: "",
  sourceId: "record-retest",
  sourceLabel: "7월 평가 재시험",
  status: "draft",
  studentId: "student-1",
  supplementHomeworkNote: "7월 평가 재시험",
  taskType: "retest"
});

const hydrated = [];
const focusedPersisted = createSelectedSupplementTasksViewModel({
  activeTaskType: "retest",
  hydrateTask: (task) => {
    hydrated.push(task.makeupTaskId);
    return { ...task, hydrated: true };
  },
  pendingTask: pendingRetest,
  selectedStudentId: "student-1",
  selectedTaskKey: getSupplementActionKey(candidate),
  tasks: [
    persistedRetest,
    { ...persistedRetest, makeupTaskId: "task-done", status: "done" },
    { ...persistedRetest, makeupTaskId: "task-other-student", studentId: "student-2" },
    { ...persistedRetest, makeupTaskId: "task-homework", taskType: "homework_makeup" }
  ]
});
assert.deepEqual(hydrated, ["task-retest", "task-done"]);
assert.equal(focusedPersisted.shouldShowPendingTask, false);
assert.deepEqual(
  focusedPersisted.selectedTasks.map((task) => task.makeupTaskId),
  ["task-retest"]
);
assert.equal(focusedPersisted.selectedTasks[0].hydrated, true);

const pendingOnly = createSelectedSupplementTasksViewModel({
  activeTaskType: "retest",
  pendingTask: pendingRetest,
  selectedStudentId: "student-1",
  selectedTaskKey: getSupplementActionKey(candidate),
  tasks: []
});
assert.equal(pendingOnly.shouldShowPendingTask, true);
assert.deepEqual(pendingOnly.selectedTasks, [pendingRetest]);

const mismatchedPending = createSelectedSupplementTasksViewModel({
  activeTaskType: "absence_makeup",
  pendingTask: pendingRetest,
  selectedStudentId: "student-1",
  selectedTaskKey: getSupplementActionKey(candidate),
  tasks: []
});
assert.equal(mismatchedPending.shouldShowPendingTask, false);
assert.deepEqual(mismatchedPending.selectedTasks, []);

console.log("supplement center selection model fixture passed");
