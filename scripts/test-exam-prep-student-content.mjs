import assert from "node:assert/strict";
import {
  createExamPrepStudentContentDrafts,
  createExamPrepStudentContentSaveItems,
  getExamPrepLegacyCommonContent
} from "../src/domains/lessons/examPrepStudentContent.js";

const lesson = { lessonId: "lesson_exam", lessonTopic: "시험대비" };
const studentRows = [
  { studentId: "a", name: "가학생" },
  { studentId: "b", name: "나학생" }
];
const records = [{ lessonId: "lesson_exam", studentId: "a", lessonStudentRecordId: "record_a", lessonProgress: "함수 오답" }];
const drafts = createExamPrepStudentContentDrafts({ lesson, records, studentRows });
assert.deepEqual(drafts, { a: "함수 오답", b: "" });
assert.equal(getExamPrepLegacyCommonContent(lesson), "");
assert.equal(getExamPrepLegacyCommonContent({ lessonTopic: "기존 공통 기록" }), "기존 공통 기록");

const saveItems = createExamPrepStudentContentSaveItems({
  createRecord: (student) => ({ lessonId: lesson.lessonId, studentId: student.studentId, lessonStudentRecordId: `record_${student.studentId}` }),
  drafts: { a: "함수 오답", b: " 경우의 수 보충 " },
  lesson,
  records,
  savedDrafts: drafts,
  studentRows
});
assert.equal(saveItems.length, 1);
assert.equal(saveItems[0].student.studentId, "b");
assert.equal(saveItems[0].record.lessonProgress, "경우의 수 보충");

console.log("exam prep student content tests passed");
