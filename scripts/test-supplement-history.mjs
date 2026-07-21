import assert from "node:assert/strict";
import {
  createSupplementHistoryItems,
  getSupplementHistoryDate,
  getSupplementHistoryStatus
} from "../src/domains/supplements/supplementHistory.js";

const students = [
  { studentId: "student-1", name: "고태영", schoolName: "창동고", grade: "고1" },
  { studentId: "student-2", name: "김학생", schoolName: "을지중", grade: "중2" }
];
const tasks = [
  { makeupTaskId: "done-1", studentId: "student-1", taskType: "absence_makeup", status: "done", sourceLabel: "7월 20일 결석", completedAt: "2026-07-21T12:00:00.000Z", scheduledDate: "2026-07-23", scheduledTime: "15:00" },
  { makeupTaskId: "scheduled-1", studentId: "student-2", taskType: "homework_makeup", status: "scheduled", reason: "숙제 미완료", lastScheduledAt: "2026-07-20T12:00:00.000Z" },
  { makeupTaskId: "draft-1", studentId: "missing", taskType: "retest", status: "draft", createdAt: "" }
];
const dependencies = {
  getMethodLabel: (task) => task.taskType === "homework_makeup" ? "등원보충" : "현장보강",
  getTypeLabel: (type) => ({ absence_makeup: "결석보강", homework_makeup: "숙제보충", retest: "재시험" })[type],
  students,
  tasks
};

const allItems = createSupplementHistoryItems(dependencies);
assert.deepEqual(allItems.map((item) => item.task.makeupTaskId), ["done-1", "scheduled-1", "draft-1"]);
assert.deepEqual(allItems.map((item) => item.status), [
  { label: "보충 완료", tone: "done" },
  { label: "일정 확정", tone: "scheduled" },
  { label: "진행 중", tone: "draft" }
]);
assert.equal(allItems[0].historyDate, "2026-07-21");
assert.equal(allItems[1].sourceLabel, "숙제 미완료");
assert.equal(allItems[2].sourceLabel, "보충 항목");
assert.equal(allItems[2].student, undefined);

assert.deepEqual(createSupplementHistoryItems({ ...dependencies, query: " 창동고 " }).map((item) => item.task.makeupTaskId), ["done-1"]);
assert.deepEqual(createSupplementHistoryItems({ ...dependencies, query: "등원보충" }).map((item) => item.task.makeupTaskId), ["scheduled-1"]);
assert.deepEqual(createSupplementHistoryItems({ ...dependencies, query: "RETEST" }).map((item) => item.task.makeupTaskId), []);
assert.equal(getSupplementHistoryDate({ passedAt: "2026-07-19T01:00:00Z" }), "2026-07-19");
assert.equal(getSupplementHistoryDate({}), "-");
assert.deepEqual(getSupplementHistoryStatus({ status: "other" }), { label: "진행 중", tone: "draft" });

console.log("supplement history: deterministic contract passed");
