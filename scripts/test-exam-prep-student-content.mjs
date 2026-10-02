import assert from "node:assert/strict";
import {
  createExamPrepStudentContentDrafts,
  createExamPrepStudentContentSaveItems,
  examPrepStudentContentFields,
  getExamPrepLegacyCommonContent
} from "../src/domains/lessons/examPrepStudentContent.js";

const lesson = { lessonId: "lesson_exam", lessonTopic: "시험대비" };
const studentRows = [
  { studentId: "a", name: "가학생" },
  { studentId: "b", name: "나학생" }
];
const records = [{
  lessonId: "lesson_exam",
  studentId: "a",
  lessonStudentRecordId: "record_a",
  lessonProgress: "함수 오답",
  teacherComment: "학부모용 기존 코멘트"
}];

// 2026-10-02 · 초안은 학생당 세 칸이다 — 강의 내용과 학부모·학생 코멘트.
// 시험대비 알림톡에 실제로 채워지는 블록이 출결·강의 내용·코멘트뿐이라, 그 셋을 이 화면에서
// 다 적게 했다(전에는 알림톡 코멘트를 쓰려면 화면을 일반 수업일지로 바꿔야 했다).
const drafts = createExamPrepStudentContentDrafts({ lesson, records, studentRows });
assert.deepEqual(drafts, {
  a: { lessonProgress: "함수 오답", studentComment: "", teacherComment: "학부모용 기존 코멘트" },
  b: { lessonProgress: "", studentComment: "", teacherComment: "" }
});
assert.deepEqual(
  examPrepStudentContentFields.map((entry) => entry.field),
  ["lessonProgress", "teacherComment", "studentComment"]
);
assert.equal(getExamPrepLegacyCommonContent(lesson), "");
assert.equal(getExamPrepLegacyCommonContent({ lessonTopic: "기존 공통 기록" }), "기존 공통 기록");

const createRecord = (student) => ({
  lessonId: lesson.lessonId,
  studentId: student.studentId,
  lessonStudentRecordId: `record_${student.studentId}`
});

// 바꾸지 않은 학생은 저장 대상이 아니다.
const singleChange = createExamPrepStudentContentSaveItems({
  createRecord,
  drafts: {
    a: drafts.a,
    b: { ...drafts.b, lessonProgress: " 경우의 수 보충 " }
  },
  lesson,
  records,
  savedDrafts: drafts,
  studentRows
});
assert.equal(singleChange.length, 1);
assert.equal(singleChange[0].student.studentId, "b");
assert.equal(singleChange[0].record.lessonProgress, "경우의 수 보충");
assert.deepEqual(singleChange[0].changedFields, ["lessonProgress"]);

// 코멘트만 바꿔도 저장 대상이고, 바꾼 칸만 payload 에 들어간다. 건드리지 않은 칸은 서버 값을
// 그대로 둔다 — 수업일지에서 먼저 적은 코멘트를 이 화면이 빈 값으로 덮으면 안 된다.
const commentOnly = createExamPrepStudentContentSaveItems({
  createRecord,
  drafts: {
    a: { ...drafts.a, studentComment: "학생용 코멘트" },
    b: drafts.b
  },
  lesson,
  records,
  savedDrafts: drafts,
  studentRows
});
assert.equal(commentOnly.length, 1);
assert.deepEqual(commentOnly[0].changedFields, ["studentComment"]);
assert.equal(commentOnly[0].record.studentComment, "학생용 코멘트");
assert.equal(
  commentOnly[0].record.teacherComment,
  "학부모용 기존 코멘트",
  "건드리지 않은 학부모 코멘트는 원본 값 그대로 실려 나간다"
);
assert.equal(commentOnly[0].record.lessonProgress, "함수 오답");

// 여러 칸을 함께 바꾸면 전부 들어간다.
const multiChange = createExamPrepStudentContentSaveItems({
  createRecord,
  drafts: {
    a: { lessonProgress: "미적분 오답", studentComment: "학생 코멘트", teacherComment: "학부모 코멘트" },
    b: drafts.b
  },
  lesson,
  records,
  savedDrafts: drafts,
  studentRows
});
assert.deepEqual(multiChange[0].changedFields, ["lessonProgress", "teacherComment", "studentComment"]);
assert.equal(multiChange[0].record.lessonProgress, "미적분 오답");
assert.equal(multiChange[0].record.teacherComment, "학부모 코멘트");
assert.equal(multiChange[0].record.studentComment, "학생 코멘트");

// 공백만 다른 입력은 바뀐 것으로 치지 않는다.
assert.deepEqual(
  createExamPrepStudentContentSaveItems({
    createRecord,
    drafts: { a: { ...drafts.a, lessonProgress: "  함수 오답  " }, b: drafts.b },
    lesson,
    records,
    savedDrafts: drafts,
    studentRows
  }),
  []
);

console.log("exam prep student content tests passed");
