import assert from "node:assert/strict";
import { createExamPrepCenterDisplayModel } from "../src/domains/exams/examPrepCenterModel.js";

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

console.log("exam prep center model fixtures passed");
