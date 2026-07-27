import assert from "node:assert/strict";
import { buildStudentHandoverPdfModel } from "../src/domains/students/studentHandoverPdf.js";

const student = { studentId: "student_1", name: "김테스트", studentPhone: "010-1111-2222", parentPhone: "010-3333-4444", withdrawnAt: "2026-07-27T10:00:00.000Z" };
const model = buildStudentHandoverPdfModel({
  student,
  templates: [{ classTemplateId: "class_1", name: "월수금 7반" }],
  lessons: [
    { lessonId: "lesson_past", date: "2026-07-27", className: "정규 수업", studentIds: ["student_1"] },
    { lessonId: "lesson_future", date: "2026-07-28", className: "미래 수업", studentIds: ["student_1"] }
  ],
  records: [{ lessonId: "lesson_past", studentId: "student_1", attendanceStatus: "present", assignmentStatus: "complete", lessonMaterial: "수능완성", lessonContent: "수열" }],
  homeworks: [{ lessonId: "lesson_past", studentId: "student_1", homeworkType: "next", title: "오답 10문제" }],
  intakeApplicants: [{ name: "김테스트", studentPhone: "01011112222", formName: "일반 Tally", currentLearningProcess: "수열 진행", memo: "복습 필요" }],
  specialLectureApplications: [{ studentName: "김테스트", parentPhone: "01033334444", formName: "특강 Tally", selectedSession: "1~3회차", memo: "시간 협의" }],
  comment: "재등록 시 진도 확인"
});

assert.equal(model.lessonRows.length, 1, "퇴원일 이후 수업은 인수인계서에 포함하지 않아야 합니다.");
assert.equal(model.lessonRows[0].attendance, "출석");
assert.equal(model.lessonRows[0].homework, "완료");
assert.equal(model.lessonRows[0].nextHomework, "오답 10문제");
assert.equal(model.tally.length, 2, "일반 및 특강 Tally 정보를 포함해야 합니다.");
assert.equal(model.comment, "재등록 시 진도 확인");

console.log("student handover PDF model tests passed");
