import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalHeaderModel } from "../src/domains/lessons/lessonJournalHeaderModel.js";

const lesson = {
  className: "월수금 4–7",
  date: "2026-07-28",
  endTime: "21:00",
  lessonId: "lesson_target",
  lessonTopic: "이차함수",
  startTime: "18:00"
};
const formatLessonTimeRange = (targetLesson) => `${targetLesson.startTime}~${targetLesson.endTime}`;

assert.deepEqual(
  createLessonJournalHeaderModel({
    formatLessonTimeRange,
    lesson,
    studentCount: 3
  }),
  {
    className: "월수금 4–7",
    metaText: "2026-07-28 · 18:00~21:00 · 3명",
    topic: "이차함수"
  }
);
assert.equal(
  createLessonJournalHeaderModel({
    formatLessonTimeRange,
    lesson: { ...lesson, lessonTopic: "" },
    studentCount: 0
  }).topic,
  "수업일지"
);

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalHeader.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.match(journalSource, /<LessonJournalHeader/);
assert.match(journalSource, /studentCount=\{lessonStudents\.length\}/);
assert.doesNotMatch(journalSource, /<header className="pageTop lessonJournalHeader">/);
for (const contract of [
  "onClick={onBack}",
  "onClick={onOpenExamPrep}",
  'aria-label="수업 목록으로 돌아가기"',
  "<NavigationHeader"
]) {
  assert.ok(componentSource.includes(contract), `missing controlled header contract: ${contract}`);
}
// 2026-09-12 · 수업 수정·수업 취소는 하단 고정바로 옮겼다. 헤더는 길찾기(뒤로·시험대비 열기)만 담당한다.
for (const movedToBottomBar of ["onEditLesson", "onDeleteLesson", "수업 수정", "수업 취소"]) {
  assert.ok(!componentSource.includes(movedToBottomBar), `header must not keep ${movedToBottomBar}`);
}

console.log("lesson journal header model and controlled component fixtures passed");
