import assert from "node:assert/strict";
import {
  createSupplementCenterTabViewModel,
  sortSupplementCenterItems,
  supplementCenterSortOptions
} from "../src/domains/supplements/supplementCenterTabModel.js";

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
const manualItem = candidate("manual_makeup", "manual-1");
const canceledRetestItem = candidate("retest", "retest-canceled");
const withRetest = createSupplementCenterTabViewModel({
  absenceItems: [absenceItem],
  activeDeferredAbsenceCount: 2,
  activeTabId: "retest",
  homeworkItems: [homeworkItem],
  manualItems: [manualItem],
  retestItems: [retestItem, canceledRetestItem],
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
    },
    {
      ...canceledRetestItem.task,
      makeupTaskId: "task-retest-canceled",
      status: "canceled"
    }
  ]
});
assert.deepEqual(withRetest.tabs.map(({ count, id, title }) => ({ count, id, title })), [
  { count: 0, id: "homework_makeup", title: "숙제보충" },
  { count: 1, id: "absence_makeup", title: "결석보강" },
  { count: 1, id: "retest", title: "재시험" },
  { count: 1, id: "manual_makeup", title: "수동 보충" }
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

const manualTab = createSupplementCenterTabViewModel({
  activeTabId: "manual_makeup",
  manualItems: [manualItem]
});
assert.equal(manualTab.activeTab.id, "manual_makeup");
assert.equal(manualTab.activeTab.subtitle, "자동 후보가 아닌 보충을 직접 작성해 수업일지와 알림톡에 연결합니다.");

const fallback = createSupplementCenterTabViewModel({
  activeTabId: "unknown",
  homeworkItems: [homeworkItem]
});
assert.equal(fallback.activeTab.id, "homework_makeup");
assert.equal(fallback.activeTab.count, 1);
assert.equal(fallback.tabs[1].subtitle, "결석 기록을 보강 일정으로 전환합니다.");

const sortItems = [
  { id: "sunday", studentId: "student-na", task: { sourceDate: "2026-08-02" } },
  { id: "monday-na", studentId: "student-na", task: { sourceDate: "2026-08-03" } },
  { id: "monday-ga", studentId: "student-ga", task: { sourceDate: "2026-08-03" } }
];
const names = { "student-ga": "가학생", "student-na": "나학생" };
assert.deepEqual(supplementCenterSortOptions.map((option) => option.label), ["요일별", "이름 가나다별"]);
assert.deepEqual(
  sortSupplementCenterItems(sortItems, { getStudentName: (studentId) => names[studentId], sortMode: "weekday" })
    .map((item) => item.id),
  ["monday-ga", "monday-na", "sunday"]
);
assert.deepEqual(
  sortSupplementCenterItems(sortItems, { getStudentName: (studentId) => names[studentId], sortMode: "name" })
    .map((item) => item.id),
  ["monday-ga", "sunday", "monday-na"]
);

console.log("supplement center tab model fixture passed");
