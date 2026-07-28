import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createLessonJournalHomeworkDraft,
  createLessonJournalHomeworkDraftKey,
  getLessonJournalHomeworkDraftTitle
} from "../src/domains/lessons/lessonJournalHomeworkDraft.js";

const recordIdCalls = [];
assert.equal(
  createLessonJournalHomeworkDraftKey({
    createRecordId: (lessonId, studentId) => {
      recordIdCalls.push([lessonId, studentId]);
      return `${lessonId}:${studentId}`;
    },
    homeworkType: "next",
    lessonId: "lesson_TARGET",
    studentId: "student_TARGET"
  }),
  "lesson_TARGET:student_TARGET:next"
);
assert.deepEqual(recordIdCalls, [["lesson_TARGET", "student_TARGET"]]);

const draft = { title: "TARGET 수정 숙제" };
const homework = { title: "CONTROL 저장 숙제" };
const inputSnapshot = structuredClone({ draft, homework });
assert.equal(
  getLessonJournalHomeworkDraftTitle({ draft, homework }),
  "TARGET 수정 숙제"
);
assert.deepEqual({ draft, homework }, inputSnapshot);
assert.equal(
  getLessonJournalHomeworkDraftTitle({
    draft: { title: "" },
    homework
  }),
  ""
);
assert.equal(
  getLessonJournalHomeworkDraftTitle({
    homework
  }),
  "CONTROL 저장 숙제"
);
assert.equal(getLessonJournalHomeworkDraftTitle({}), "");

assert.deepEqual(
  createLessonJournalHomeworkDraft({
    homeworkType: "previous",
    key: "lesson_TARGET:student_TARGET:previous",
    studentId: "student_TARGET",
    title: "오답 정리"
  }),
  {
    homeworkType: "previous",
    key: "lesson_TARGET:student_TARGET:previous",
    studentId: "student_TARGET",
    title: "오답 정리"
  }
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const modelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalHomeworkDraft.js", import.meta.url),
  "utf8"
);
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction PreparationMemoModal(", detailStart);
const detailSource = appSource.slice(detailStart, detailEnd);

for (const binding of [
  "createLessonJournalHomeworkDraft,",
  "createLessonJournalHomeworkDraftKey,",
  "getLessonJournalHomeworkDraftTitle",
  "return createLessonJournalHomeworkDraftKey({",
  "createRecordId: createLessonStudentRecordId,",
  "return getLessonJournalHomeworkDraftTitle({",
  "draft: journalHomeworkDrafts[getHomeworkDraftKey(student, homeworkType)],",
  "if (!journalEditMode) return",
  "[key]: createLessonJournalHomeworkDraft({",
  "setJournalHomeworkDrafts((current) => ({",
  'setJournalManualSaveMessage("수업일지 · 저장 필요")'
]) {
  assert.ok(appSource.includes(binding), `missing homework-draft binding: ${binding}`);
}
assert.ok(!detailSource.includes("?.title ?? homework?.title ?? \"\""));
assert.ok(!detailSource.includes("[key]: { homeworkType, key, studentId: student.studentId, title }"));

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
  "setJournalHomeworkDrafts",
  "setJournalManualSaveMessage"
]) {
  assert.ok(!modelSource.includes(forbiddenSideEffect), `homework draft must stay pure: ${forbiddenSideEffect}`);
}

console.log("lesson journal homework draft TARGET/CONTROL fixtures passed");
