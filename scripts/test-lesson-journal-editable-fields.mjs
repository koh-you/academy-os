import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalEditableFieldsModel } from "../src/domains/lessons/lessonJournalEditableFieldsModel.js";

assert.deepEqual(
  createLessonJournalEditableFieldsModel({
    nextHomeworkTitle: "TARGET 다음 숙제",
    previousHomeworkTitle: "TARGET 지난 숙제",
    previousLessonContent: "직전 진도",
    previousLessonMaterial: "직전 교재",
    record: {
      lessonMaterial: "현재 교재",
      lessonProgress: "현재 진도"
    },
    recordId: "record_target",
    student: { currentTextbook: "학생 현재 교재", name: "TARGET 학생", textbook: "학생 교재" }
  }),
  [
    {
      ariaLabel: "TARGET 학생 강의 교재",
      editKey: "record_target:lessonMaterial",
      field: "lessonMaterial",
      placeholder: "직전 교재",
      source: "record",
      value: "현재 교재"
    },
    {
      ariaLabel: "TARGET 학생 오늘 강의 내용",
      editKey: "record_target:lessonProgress",
      field: "lessonProgress",
      placeholder: "직전 진도",
      source: "record",
      value: "현재 진도"
    },
    {
      ariaLabel: "TARGET 학생 지난 숙제",
      editKey: "record_target:previousHomework",
      field: "previous",
      placeholder: "지난 숙제",
      source: "homework",
      value: "TARGET 지난 숙제"
    },
    {
      ariaLabel: "TARGET 학생 다음 숙제",
      editKey: "record_target:nextHomework",
      field: "next",
      placeholder: "다음 숙제",
      source: "homework",
      value: "TARGET 다음 숙제"
    }
  ]
);

const fallbackControl = createLessonJournalEditableFieldsModel({
  record: { progress: "legacy 진도" },
  recordId: "record_control",
  student: { currentTextbook: "현재 교재 fallback" }
});
assert.equal(fallbackControl[0].placeholder, "현재 교재 fallback");
assert.equal(fallbackControl[0].value, "");
assert.equal(fallbackControl[1].placeholder, "오늘 강의 내용");
assert.equal(fallbackControl[1].value, "legacy 진도");
assert.deepEqual(fallbackControl.map((field) => field.source), ["record", "record", "homework", "homework"]);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalEditableFields.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.match(journalSource, /<LessonJournalEditableFields/);
assert.match(journalSource, /updateJournalRecordDraft\(student, record, field, value\)/);
assert.match(journalSource, /updateJournalHomeworkDraft\(student, homeworkType, value\)/);
assert.equal((journalSource.match(/<LessonJournalEditableMemoCard/g) ?? []).length, 0);
assert.match(componentSource, /field\.source === "record"/);
assert.match(componentSource, /onUpdateRecordDraft\(field\.field, value\)/);
assert.match(componentSource, /onUpdateHomeworkDraft\(field\.field, value\)/);
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "useState", "useEffect"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `editable fields must stay callback-only: ${forbiddenSideEffect}`);
}

console.log("lesson journal editable fields TARGET/CONTROL fixtures passed");
