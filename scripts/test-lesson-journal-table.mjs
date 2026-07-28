import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createLessonJournalTableModel,
  lessonJournalTableColumns
} from "../src/domains/lessons/lessonJournalTableModel.js";

assert.deepEqual(createLessonJournalTableModel(), {
  className: "journalTable",
  columns: lessonJournalTableColumns
});
assert.deepEqual(createLessonJournalTableModel({ isEditMode: true }), {
  className: "journalTable editing",
  columns: lessonJournalTableColumns
});
assert.deepEqual([...lessonJournalTableColumns], [
  "학생",
  "수업메모",
  "출결",
  "강의 교재",
  "강의 내용",
  "지난 숙제",
  "다음 숙제",
  "과제 상태",
  "학부모 알림톡",
  "학생 알림톡"
]);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalTable.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.match(journalSource, /<LessonJournalTable isEditMode=\{journalEditMode\}>/);
assert.match(journalSource, /lessonStudents\.map\(\(student\) => \{/);
assert.doesNotMatch(journalSource, /className="journalRow journalHead"/);
for (const contract of [
  "createLessonJournalTableModel",
  'className="panel journalTablePanel"',
  "DataTableShell",
  'label="수업일지 학생 기록"',
  'className="journalRow journalHead"',
  "model.columns.map",
  "{children}"
]) {
  assert.ok(componentSource.includes(contract), `missing lesson journal table contract: ${contract}`);
}
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "useState", "useEffect"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `lesson journal table must stay presentational: ${forbiddenSideEffect}`);
}

console.log("lesson journal table TARGET/CONTROL fixtures passed");
