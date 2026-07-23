import assert from "node:assert/strict";
import { createSupplementCenterTabViewModel } from "../src/domains/supplements/supplementCenterTabModel.js";

function candidate(taskType, sourceId) {
  return {
    id: sourceId,
    studentId: "student-1",
    task: {
      sourceId,
      studentId: "student-1",
      taskType
    },
    title: sourceId
  };
}

const homeworkItem = candidate("homework_makeup", "homework-1");
const absenceItem = candidate("absence_makeup", "absence-1");
const retestItem = candidate("retest", "retest-1");
const withRetest = createSupplementCenterTabViewModel({
  absenceItems: [absenceItem],
  activeDeferredAbsenceCount: 2,
  activeTabId: "retest",
  homeworkItems: [homeworkItem],
  retestItems: [retestItem],
  tasks: [
    {
      ...homeworkItem.task,
      makeupTaskId: "task-homework-done",
      status: "done"
    },
    {
      ...absenceItem.task,
      makeupTaskId: "task-absence-active",
      status: "scheduled"
    }
  ]
});
assert.deepEqual(withRetest.tabs.map(({ count, id, title }) => ({ count, id, title })), [
  { count: 0, id: "homework_makeup", title: "숙제보충" },
  { count: 1, id: "absence_makeup", title: "결석보강" },
  { count: 1, id: "retest", title: "재시험" }
]);
assert.equal(withRetest.tabs[1].subtitle, "7일 초과 미래 결석 2건은 접어두었습니다.");
assert.equal(withRetest.activeTab.id, "retest");
assert.deepEqual(withRetest.activeTab.items, [retestItem]);

const emptyRetest = createSupplementCenterTabViewModel({
  activeTabId: "retest"
});
assert.equal(emptyRetest.activeTab.id, "retest");
assert.equal(emptyRetest.activeTab.count, 0);
assert.equal(emptyRetest.activeTab.emptyText, "재시험이 없습니다.");
assert.deepEqual(emptyRetest.activeTab.items, []);

const fallback = createSupplementCenterTabViewModel({
  activeTabId: "unknown",
  homeworkItems: [homeworkItem]
});
assert.equal(fallback.activeTab.id, "homework_makeup");
assert.equal(fallback.activeTab.count, 1);
assert.equal(fallback.tabs[1].subtitle, "결석 기록을 보강 일정으로 전환합니다.");

console.log("supplement center tab model fixture passed");
