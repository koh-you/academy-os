import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalReminderPanelModel } from "../src/domains/lessons/lessonJournalReminderPanelModel.js";

assert.deepEqual(createLessonJournalReminderPanelModel(0), {
  countLabel: "0건",
  isVisible: false
});
assert.deepEqual(createLessonJournalReminderPanelModel(2), {
  countLabel: "2건",
  isVisible: true
});

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalReminderPanel.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.match(journalSource, /<LessonJournalReminderPanel reminderCount=\{lessonAcademyReminders\.length\}>/);
assert.match(
  journalSource,
  /<AcademyReminderList reminders=\{lessonAcademyReminders\} students=\{students\} templates=\{templates\} \/>/
);
assert.doesNotMatch(journalSource, /<section className="panel lessonReminderPanel">/);
assert.match(componentSource, /if \(!model\.isVisible\) return null/);
assert.match(componentSource, /<SectionHeader/);
assert.match(componentSource, /\{children\}/);
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "onClick=", "useState", "useEffect"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `reminder panel shell must stay read-only: ${forbiddenSideEffect}`);
}

console.log("lesson journal reminder panel TARGET/CONTROL fixtures passed");
