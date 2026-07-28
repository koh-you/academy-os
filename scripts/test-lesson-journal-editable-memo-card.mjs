import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalEditableMemoCardModel } from "../src/domains/lessons/lessonJournalEditableMemoCardModel.js";

assert.deepEqual(
  createLessonJournalEditableMemoCardModel({
    className: "TARGET",
    editKey: "record:lessonMaterial",
    editingKey: "record:lessonMaterial",
    placeholder: "직전 교재",
    value: "수학의 정석"
  }),
  {
    displayText: "수학의 정석",
    inputClassName: "journalMemoCardInput TARGET",
    isEditable: true,
    readClassName: "journalMemoCardRead   TARGET",
    shouldFocus: true
  }
);

assert.deepEqual(
  createLessonJournalEditableMemoCardModel({
    disabled: true,
    editKey: "record:nextHomework",
    placeholder: "다음 숙제",
    value: ""
  }),
  {
    displayText: "다음 숙제",
    inputClassName: "journalMemoCardInput",
    isEditable: false,
    readClassName: "journalMemoCardRead empty locked",
    shouldFocus: false
  }
);

const whitespaceControl = createLessonJournalEditableMemoCardModel({
  disabled: true,
  placeholder: "CONTROL placeholder",
  value: "   "
});
assert.equal(whitespaceControl.displayText, "CONTROL placeholder");
assert.equal(whitespaceControl.readClassName, "journalMemoCardRead empty locked");

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalEditableMemoCard.jsx", import.meta.url),
  "utf8"
);

assert.equal((appSource.match(/<LessonJournalEditableMemoCard/g) ?? []).length, 4);
assert.doesNotMatch(appSource, /function EditableMemoCard\(/);
for (const contract of [
  "aria-label={ariaLabel}",
  "textarea.style.height = \"auto\"",
  "textarea.scrollHeight",
  "if (model.shouldFocus) textarea.focus()",
  "event.key === \"Escape\"",
  "event.ctrlKey || event.metaKey",
  "onFocus={() => onEdit(editKey)}"
]) {
  assert.ok(componentSource.includes(contract), `missing editable memo card contract: ${contract}`);
}
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `editable memo card must stay local-only: ${forbiddenSideEffect}`);
}

console.log("lesson journal editable memo card TARGET/CONTROL fixtures passed");
