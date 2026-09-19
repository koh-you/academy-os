import assert from "node:assert/strict";
import { filterStudentsBySearch, sortActiveStudents, sortWithdrawnStudents } from "../src/domains/students/studentListSort.js";

const students = [
  { studentId: "student_c", name: "최다", withdrawnAt: "2026-07-03T09:00:00.000Z" },
  { studentId: "student_a", name: "가나", withdrawnAt: "2026-07-01T09:00:00.000Z" },
  { studentId: "student_b", name: "나다", withdrawnAt: "2026-07-05T09:00:00.000Z" }
];

assert.deepEqual(sortWithdrawnStudents(students, "name").map((student) => student.studentId), ["student_a", "student_b", "student_c"]);
assert.deepEqual(sortWithdrawnStudents(students, "withdrawn_date").map((student) => student.studentId), ["student_b", "student_c", "student_a"]);

// 2026-09-19 · UI U8: 재원생 목록 검색(이름·학교·전화 부분 일치)·정렬(이름/학년/반).
const templates = [
  { classTemplateId: "template_b", name: "B반" },
  { classTemplateId: "template_a", name: "A반" }
];
const activeStudents = [
  { studentId: "s1", name: "다현", grade: "고1", schoolName: "한빛고", studentPhone: "010-1111-2222", parentPhone: "", defaultClassTemplateId: "template_a" },
  { studentId: "s2", name: "가온", grade: "중3", schoolName: "샘물중", studentPhone: "", parentPhone: "010-3333-4444", defaultClassTemplateId: "" },
  { studentId: "s3", name: "나래", grade: "초6", schoolName: "한빛초", studentPhone: "", parentPhone: "", defaultClassTemplateId: "template_b" },
  { studentId: "s4", name: "라온", grade: "고3", schoolName: "샘물고", studentPhone: "", parentPhone: "", defaultClassTemplateId: "template_a" }
];
const ids = (list) => list.map((student) => student.studentId);

assert.equal(filterStudentsBySearch(activeStudents, "   "), activeStudents, "빈 검색어는 원본 배열 그대로");
assert.deepEqual(ids(filterStudentsBySearch(activeStudents, "한빛")), ["s1", "s3"], "학교 부분 일치");
assert.deepEqual(ids(filterStudentsBySearch(activeStudents, "가온")), ["s2"], "이름 일치");
assert.deepEqual(ids(filterStudentsBySearch(activeStudents, "3333")), ["s2"], "학부모 전화 일치");
assert.deepEqual(ids(filterStudentsBySearch(activeStudents, "01011112222")), ["s1"], "전화번호는 하이픈 무시");
assert.deepEqual(ids(filterStudentsBySearch(activeStudents, "없는학생")), []);

assert.deepEqual(ids(sortActiveStudents(activeStudents, "name", templates)), ["s2", "s3", "s1", "s4"]);
assert.deepEqual(ids(sortActiveStudents(activeStudents, "grade", templates)), ["s3", "s2", "s1", "s4"], "초 → 중 → 고, 같은 학년은 이름순");
assert.deepEqual(ids(sortActiveStudents(activeStudents, "class", templates)), ["s3", "s1", "s4", "s2"], "반관리 순서(B반 → A반), 미배정은 마지막, 같은 반은 이름순");
assert.notEqual(sortActiveStudents(activeStudents, "name", templates), activeStudents, "원본 배열은 바뀌지 않는다");

console.log("student list sort tests passed");
