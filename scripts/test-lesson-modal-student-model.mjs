import assert from "node:assert/strict";
import {
  createLessonModalStudentSelectionModel,
  lessonModalStudentGradeOrder
} from "../src/domains/lessons/lessonModalStudentModel.js";

const students = [
  { studentId: "middle-1", name: "가나다", grade: "중1", schoolName: "한빛중", status: "active" },
  { studentId: "high-3", name: "라마바", grade: "고3", schoolName: "한빛고", status: "active" },
  { studentId: "custom", name: "사아자", grade: "초6", schoolName: "한빛초", status: "active" },
  { studentId: "missing", name: "차카타", grade: "", schoolName: "", status: "active" },
  { studentId: "withdrawn", name: "퇴원생", grade: "고2", schoolName: "한빛고", status: "withdrawn" }
];
const isActiveStudent = (student) => student.status === "active";

assert.deepEqual(
  lessonModalStudentGradeOrder,
  ["고3", "고2", "고1", "중3", "중2", "중1"]
);

const allModel = createLessonModalStudentSelectionModel({ isActiveStudent, students });
assert.deepEqual(
  allModel.activeStudents.map((student) => student.studentId),
  ["middle-1", "high-3", "custom", "missing"]
);
assert.deepEqual(
  allModel.groupedStudents.map((group) => group.grade),
  ["고3", "중1", "초6", "학년 미입력"]
);
assert.deepEqual(
  allModel.groupedStudents.flatMap((group) => group.students.map((student) => student.studentId)),
  ["high-3", "middle-1", "custom", "missing"]
);

const nameSearchModel = createLessonModalStudentSelectionModel({
  isActiveStudent,
  search: "가나다",
  students
});
assert.deepEqual(
  nameSearchModel.filteredStudents.map((student) => student.studentId),
  ["middle-1"]
);

const gradeSearchModel = createLessonModalStudentSelectionModel({
  isActiveStudent,
  search: "고3",
  students
});
assert.deepEqual(
  gradeSearchModel.filteredStudents.map((student) => student.studentId),
  ["high-3"]
);

const schoolSearchModel = createLessonModalStudentSelectionModel({
  isActiveStudent,
  search: "한빛초",
  students
});
assert.deepEqual(
  schoolSearchModel.filteredStudents.map((student) => student.studentId),
  ["custom"]
);
assert.equal(
  nameSearchModel.activeStudents.some((student) => student.studentId === "withdrawn"),
  false
);

console.log("lesson modal active student search and grade grouping model passed");
