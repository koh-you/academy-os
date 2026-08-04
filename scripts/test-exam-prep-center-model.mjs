import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createExamPrepCenterDisplayModel } from "../src/domains/exams/examPrepCenterModel.js";
import { createStudentExamPrepRow } from "../src/domains/exams/studentExamPrepRow.js";

const rows = [
  {
    examPrepId: "row-visible",
    examCycle: "2026-1-final",
    schoolGradeKey: "school-a_high-1",
    schoolName: "학교A",
    grade: "고1",
    subject: "공통수학",
    publisher: "출판사",
    scope: "다항식",
    mathExamDates: [{ date: "2026-07-01", grade: "고1", subject: "수학", label: "1차" }]
  },
  {
    examPrepId: "row-fallback-cycle",
    schoolGradeKey: "school-a_high-1",
    schoolName: "학교A",
    grade: "고1",
    subject: "기하",
    specialNote: "검색 marker"
  },
  {
    examPrepId: "row-other-class",
    examCycle: "2026-1-final",
    schoolGradeKey: "school-b_high-2",
    schoolName: "학교B",
    grade: "고2",
    subject: "수학"
  },
  {
    examPrepId: "row-other-cycle",
    examCycle: "2026-2-mid",
    schoolGradeKey: "school-a_high-1",
    schoolName: "학교A",
    grade: "고1",
    subject: "수학"
  },
  {
    examPrepId: "row-deduped",
    examCycle: "2026-1-final",
    schoolGradeKey: "school-a_high-1",
    schoolName: "학교A",
    grade: "고1",
    subject: "삭제될 중복"
  }
];
const students = [
  {
    studentId: "student-active",
    defaultClassTemplateId: "class-a",
    schoolGradeKey: "school-a_high-1",
    status: "active"
  },
  {
    studentId: "student-default-active",
    defaultClassTemplateId: "class-a",
    schoolGradeKey: "school-a_high-1"
  },
  {
    studentId: "student-withdrawn",
    defaultClassTemplateId: "class-a",
    schoolGradeKey: "school-b_high-2",
    status: "withdrawn"
  },
  {
    studentId: "student-other-class",
    defaultClassTemplateId: "class-b",
    schoolGradeKey: "school-b_high-2",
    status: "active"
  }
];
const observedSaveStates = [];
const model = createExamPrepCenterDisplayModel({
  currentExamCycle: "2026-1-final",
  dedupeRows: (sourceRows) => sourceRows.filter((row) => row.examPrepId !== "row-deduped"),
  editingExamPrepId: "row-visible",
  getAggregateSaveState: (saveStates) => {
    observedSaveStates.push(saveStates);
    return saveStates.includes("failed") ? "failed" : "saved";
  },
  getMathExamEntries: (row) => row.mathExamDates ?? [],
  getRowSchoolGradeKey: (row) => row.schoolGradeKey,
  getStudentSchoolGradeKey: (student) => student.schoolGradeKey,
  query: "1차",
  reviewModalRowId: "row-fallback-cycle",
  rowSaveStates: {
    "row-visible": "failed",
    "row-fallback-cycle": "saved",
    "row-other-class": "saving"
  },
  rows,
  selectedClassTemplateId: "class-a",
  selectedExamCycle: "2026-1-final",
  students,
  templates: [
    { classTemplateId: "class-a", name: "A반" },
    { classTemplateId: "class-b", name: "B반" }
  ]
});

assert.deepEqual(model.classStudents.map((student) => student.studentId), [
  "student-active",
  "student-default-active"
]);
assert.deepEqual(model.displayRows.map((row) => row.examPrepId), [
  "row-visible",
  "row-fallback-cycle",
  "row-other-class",
  "row-other-cycle"
]);
assert.deepEqual(model.visibleRows.map((row) => row.examPrepId), [
  "row-visible",
  "row-fallback-cycle"
]);
assert.deepEqual(model.filteredRows.map((row) => row.examPrepId), ["row-visible"]);
assert.equal(model.editingExamPrepRow?.examPrepId, "row-visible");
assert.equal(model.reviewModalRow?.examPrepId, "row-fallback-cycle");
assert.equal(model.selectedClass?.name, "A반");
assert.equal(model.examPrepSaveState, "failed");
assert.deepEqual(observedSaveStates, [["failed"]]);

const textSearchModel = createExamPrepCenterDisplayModel({
  currentExamCycle: "2026-1-final",
  dedupeRows: (sourceRows) => sourceRows,
  editingExamPrepId: "row-other-class",
  getAggregateSaveState: (saveStates) => saveStates.length ? "saved" : "idle",
  getMathExamEntries: (row) => row.mathExamDates ?? [],
  getRowSchoolGradeKey: (row) => row.schoolGradeKey,
  getStudentSchoolGradeKey: (student) => student.schoolGradeKey,
  query: "MARKER",
  reviewModalRowId: "missing",
  rowSaveStates: {},
  rows,
  selectedClassTemplateId: "class-a",
  selectedExamCycle: "2026-1-final",
  students,
  templates: []
});

assert.deepEqual(textSearchModel.filteredRows.map((row) => row.examPrepId), ["row-fallback-cycle"]);
assert.equal(textSearchModel.editingExamPrepRow, null);
assert.equal(textSearchModel.reviewModalRow, null);
assert.equal(textSearchModel.selectedClass, undefined);

const allClassesModel = createExamPrepCenterDisplayModel({
  currentExamCycle: "2026-1-final",
  dedupeRows: (sourceRows) => sourceRows.filter((row) => row.examPrepId !== "row-deduped"),
  getAggregateSaveState: (saveStates) => saveStates.length ? "saved" : "idle",
  getMathExamEntries: (row) => row.mathExamDates ?? [],
  getRowSchoolGradeKey: (row) => row.schoolGradeKey,
  getStudentSchoolGradeKey: (student) => student.schoolGradeKey,
  rows,
  selectedClassTemplateId: "",
  selectedExamCycle: "2026-1-final",
  students,
  templates: [
    { classTemplateId: "class-a", name: "A반" },
    { classTemplateId: "class-b", name: "B반" }
  ]
});

assert.deepEqual(allClassesModel.classStudents.map((student) => student.studentId), [
  "student-active",
  "student-default-active",
  "student-other-class"
]);
assert.deepEqual(allClassesModel.visibleRows.map((row) => row.examPrepId), [
  "row-visible",
  "row-fallback-cycle",
  "row-other-class"
]);
assert.equal(allClassesModel.selectedClass?.name, "전체 반");

const centerSource = await readFile(new URL("../src/domains/exams/ExamPrepCenter.jsx", import.meta.url), "utf8");
assert.match(centerSource, /<strong>전체 반<\/strong>/);
assert.match(centerSource, /onEnsureExamCycleRows\(examCycle, selectedClassTemplateId\)/);
assert.match(centerSource, /onEnsureExamCycleRows\(selectedExamCycle, classTemplateId\)/);
assert.match(centerSource, /<span>상세<\/span>/);
assert.match(centerSource, /<strong>상세 관리<\/strong>/);
assert.doesNotMatch(centerSource, /<span>시험 후 총평<\/span>/);
assert.doesNotMatch(centerSource, /<span>관리<\/span>/);

const editModalSource = await readFile(new URL("../src/domains/exams/ExamPrepEditModal.jsx", import.meta.url), "utf8");
assert.match(editModalSource, /시험 후 총평 보기\/수정/);
assert.match(editModalSource, /시험정보 삭제/);

const generatedStudentRow = createStudentExamPrepRow({
  examCycle: "2026-2-mid",
  examPrepId: "exam_prep_2026-2-mid_창동중_중3_공통수학1",
  grade: "중3",
  publisher: "출판사",
  schoolName: "창동중"
});
assert.equal(generatedStudentRow.schoolName, "창동중");
assert.equal(generatedStudentRow.grade, "중3");
assert.equal(generatedStudentRow.examPeriod, "");
assert.equal(generatedStudentRow.mathExamDate, "");
assert.deepEqual(generatedStudentRow.mathExamDates, []);
assert.equal(generatedStudentRow.source, "학생DB 자동생성");
const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
assert.doesNotMatch(appSource, /return \{ \.\.\.row, examPeriod: getDefaultExamPeriodText\(row\.examCycle\) \}/);

console.log("exam prep center model fixtures passed");
