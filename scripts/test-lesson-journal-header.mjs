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
// 2026-09-14 · 주제가 없으면 "수업일지" 자리채움 글씨 대신 아무것도 보이지 않는다.
assert.equal(
  createLessonJournalHeaderModel({
    formatLessonTimeRange,
    lesson: { ...lesson, lessonTopic: "" },
    studentCount: 0
  }).topic,
  ""
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
  "<NavigationHeader",
  // 2026-09-14 · 저장·발송 상태 pill 묶음은 헤더 우상단(actions 슬롯)에 들어간다. 주제가 없으면 context 를 그리지 않는다.
  "statusPills = null",
  "{statusPills}",
  'context={model.topic ? <span className="shortcutHint">{model.topic}</span> : null}'
]) {
  assert.ok(componentSource.includes(contract), `missing controlled header contract: ${contract}`);
}
assert.match(journalSource, /statusPills=\{\(\s*<LessonJournalNotificationBar/);
// 2026-09-12 · 수업 수정·수업 취소는 하단 고정바로 옮겼다. 헤더에는 조작 버튼을 두지 않는다.
for (const movedToBottomBar of ["onEditLesson", "onDeleteLesson", "수업 수정", "수업 취소", '"수업일지"']) {
  assert.ok(!componentSource.includes(movedToBottomBar), `header must not keep ${movedToBottomBar}`);
}

console.log("lesson journal header model and controlled component fixtures passed");
