import assert from "node:assert/strict";
import {
  createHomeworkSupplementItems,
  createRetestSupplementItems
} from "../src/domains/supplements/supplementCenterCandidateModel.js";

const homeworkItems = createHomeworkSupplementItems(
  [
    {
      assignedDate: "2026-07-20",
      dueDate: "2026-07-22",
      homeworkId: "homework-1",
      studentId: "student-1",
      title: "교재 10~12쪽"
    },
    {
      assignedDate: "2026-07-21",
      dueDate: "",
      homeworkId: "homework-2",
      studentId: "student-2",
      title: "오답 정리"
    }
  ],
  {
    getReason: (homework) => homework.homeworkId === "homework-1" ? "숙제 미완료" : "숙제 부분완료"
  }
);
assert.deepEqual(homeworkItems, [
  {
    id: "homework-1",
    meta: "2026-07-22 기준 · 숙제 미완료",
    studentId: "student-1",
    task: {
      reason: "숙제 미완료",
      sourceDate: "2026-07-20",
      sourceDueDate: "2026-07-22",
      sourceId: "homework-1",
      sourceLabel: "교재 10~12쪽",
      studentId: "student-1",
      supplementHomeworkNote: "교재 10~12쪽",
      supplementMethod: "arrival_makeup",
      taskType: "homework_makeup"
    },
    title: "교재 10~12쪽"
  },
  {
    id: "homework-2",
    meta: "2026-07-21 기준 · 숙제 부분완료",
    studentId: "student-2",
    task: {
      reason: "숙제 부분완료",
      sourceDate: "2026-07-21",
      sourceDueDate: "",
      sourceId: "homework-2",
      sourceLabel: "오답 정리",
      studentId: "student-2",
      supplementHomeworkNote: "오답 정리",
      supplementMethod: "arrival_makeup",
      taskType: "homework_makeup"
    },
    title: "오답 정리"
  }
]);

const retestItems = createRetestSupplementItems(
  [
    {
      lessonId: "lesson-1",
      lessonStudentRecordId: "record-1",
      studentId: "student-1"
    }
  ],
  {
    getLessonLabel: (lessonId) => lessonId === "lesson-1"
      ? "2026-07-23 중3A"
      : "연결 수업 없음"
  }
);
assert.deepEqual(retestItems, [
  {
    id: "record-1",
    meta: "재시험 필요",
    studentId: "student-1",
    task: {
      reason: "재시험 필요",
      sourceId: "record-1",
      sourceLabel: "2026-07-23 중3A",
      studentId: "student-1",
      taskType: "retest"
    },
    title: "2026-07-23 중3A"
  }
]);

assert.deepEqual(createHomeworkSupplementItems(), []);
assert.deepEqual(createRetestSupplementItems(), []);

console.log("supplement center candidate model fixture passed");
