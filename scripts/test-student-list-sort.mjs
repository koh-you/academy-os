import assert from "node:assert/strict";
import { sortWithdrawnStudents } from "../src/domains/students/studentListSort.js";

const students = [
  { studentId: "student_c", name: "최다", withdrawnAt: "2026-07-03T09:00:00.000Z" },
  { studentId: "student_a", name: "가나", withdrawnAt: "2026-07-01T09:00:00.000Z" },
  { studentId: "student_b", name: "나다", withdrawnAt: "2026-07-05T09:00:00.000Z" }
];

assert.deepEqual(sortWithdrawnStudents(students, "name").map((student) => student.studentId), ["student_a", "student_b", "student_c"]);
assert.deepEqual(sortWithdrawnStudents(students, "withdrawn_date").map((student) => student.studentId), ["student_b", "student_c", "student_a"]);

console.log("student list sort tests passed");
