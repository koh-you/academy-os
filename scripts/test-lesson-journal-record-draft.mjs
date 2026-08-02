import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createLessonJournalRecordDraft,
  createLessonJournalRecordFieldPatch
} from "../src/domains/lessons/lessonJournalRecordDraft.js";

const lesson = {
  lessonId: "lesson_TARGET",
  title: "TARGET 수업"
};
const student = {
  studentId: "student_TARGET"
};
const baseRecord = {
  baseOnly: "BASE",
  lessonContent: "base content"
};
const currentDrafts = {
  "lesson_TARGET:student_TARGET": {
    draftOnly: "DRAFT",
    lessonContent: "draft content"
  }
};
const patch = {
  lessonContent: "patch content",
  lessonId: "lesson_PATCH",
  lessonStudentRecordId: "record_PATCH",
  studentId: "student_PATCH",
  updatedAt: "patch timestamp",
  updatedBy: "patch teacher"
};
const inputSnapshot = structuredClone({
  baseRecord,
  currentDrafts,
  lesson,
  patch,
  student
});
const calls = {
  empty: [],
  recordId: []
};
const dependencies = {
  createEmptyRecord: (targetLesson, targetStudent) => {
    calls.empty.push([targetLesson.lessonId, targetStudent.studentId]);
    return {
      defaultOnly: "DEFAULT",
      lessonContent: "empty content"
    };
  },
  createRecordId: (lessonId, studentId) => {
    calls.recordId.push([lessonId, studentId]);
    return `${lessonId}:${studentId}`;
  }
};

assert.deepEqual(
  createLessonJournalRecordDraft({
    baseRecord,
    ...dependencies,
    currentDrafts,
    lesson,
    patch,
    student,
    updatedAt: "2026-07-29T02:03:04.000Z"
  }),
  {
    record: {
      defaultOnly: "DEFAULT",
      draftOnly: "DRAFT",
      lessonContent: "patch content",
      lessonId: "lesson_PATCH",
      lessonStudentRecordId: "record_PATCH",
      studentId: "student_PATCH",
      updatedAt: "2026-07-29T02:03:04.000Z",
      updatedBy: "instructor_owner_001"
    },
    recordId: "lesson_TARGET:student_TARGET"
  }
);
assert.deepEqual(calls, {
  empty: [["lesson_TARGET", "student_TARGET"]],
  recordId: [["lesson_TARGET", "student_TARGET"]]
});
assert.deepEqual(
  { baseRecord, currentDrafts, lesson, patch, student },
  inputSnapshot
);

assert.deepEqual(
  createLessonJournalRecordDraft({
    baseRecord,
    ...dependencies,
    currentDrafts: {},
    lesson,
    patch: {},
    student,
    updatedAt: "2026-07-29T03:00:00.000Z",
    updatedBy: "teacher_CONTROL"
  }).record,
  {
    baseOnly: "BASE",
    defaultOnly: "DEFAULT",
    lessonContent: "base content",
    lessonId: "lesson_TARGET",
    lessonStudentRecordId: "lesson_TARGET:student_TARGET",
    studentId: "student_TARGET",
    updatedAt: "2026-07-29T03:00:00.000Z",
    updatedBy: "teacher_CONTROL"
  }
);

assert.deepEqual(
  createLessonJournalRecordDraft({
    ...dependencies,
    currentDrafts: {},
    lesson,
    student,
    updatedAt: "2026-07-29T04:00:00.000Z"
  }).record,
  {
    defaultOnly: "DEFAULT",
    lessonContent: "empty content",
    lessonId: "lesson_TARGET",
    lessonStudentRecordId: "lesson_TARGET:student_TARGET",
    studentId: "student_TARGET",
    updatedAt: "2026-07-29T04:00:00.000Z",
    updatedBy: "instructor_owner_001"
  }
);

assert.deepEqual(
  createLessonJournalRecordFieldPatch({
    field: "assignmentStatus",
    value: "not_done"
  }),
  {
    assignmentStatus: "not_done",
    incompleteHomework: "not_done"
  }
);
assert.deepEqual(
  createLessonJournalRecordFieldPatch({
    field: "teacherComment",
    value: "TARGET 학부모 문구"
  }),
  {
    teacherComment: "TARGET 학부모 문구",
    teacherCommentSendStatus: ""
  }
);
assert.deepEqual(
  createLessonJournalRecordFieldPatch({
    field: "studentComment",
    value: "CONTROL 학생 문구"
  }),
  {
    studentComment: "CONTROL 학생 문구",
    studentCommentSendStatus: ""
  }
);
assert.deepEqual(
  createLessonJournalRecordFieldPatch({
    field: "progressText",
    value: ""
  }),
  {
    progressText: ""
  }
);

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const modelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalRecordDraft.js", import.meta.url),
  "utf8"
);
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction PreparationMemoModal(", detailStart);
const detailSource = appSource.slice(detailStart, detailEnd);

for (const binding of [
  "createLessonJournalRecordDraft,",
  "createLessonJournalRecordFieldPatch",
  "function updateJournalRecordDraft(student, baseRecord, field, value)",
  "createLessonJournalRecordFieldPatch({",
  "field,",
  "value",
  "function updateJournalRecordDraftPatch(student, baseRecord, patch = {})",
  "if (!journalEditMode) return",
  "const nowIso = new Date().toISOString()",
  "createLessonJournalRecordDraft({",
  "createRecordId: createLessonStudentRecordId,",
  "currentDrafts: journalRecordDrafts,",
  "updatedAt: nowIso",
  "setJournalRecordDrafts((current) => ({ ...current, [recordId]: record }))",
  'setJournalManualSaveMessage("수업일지 · 저장 필요")'
]) {
  assert.ok(appSource.includes(binding), `missing record-draft binding: ${binding}`);
}
assert.ok(!detailSource.includes("const nextRecord = {"));
assert.ok(!detailSource.includes("...(journalRecordDrafts[recordId] ?? baseRecord ?? {})"));
assert.ok(!detailSource.includes('...(field === "assignmentStatus" ? { incompleteHomework: value } : {})'));

for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "new Date",
  "/api/",
  "Supabase",
  "localStorage",
  "setJournalRecordDrafts",
  "setJournalManualSaveMessage"
]) {
  assert.ok(!modelSource.includes(forbiddenSideEffect), `record draft must stay pure: ${forbiddenSideEffect}`);
}

console.log("lesson journal record draft TARGET/CONTROL fixtures passed");
