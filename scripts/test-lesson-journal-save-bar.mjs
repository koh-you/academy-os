import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalSaveBarModel } from "../src/domains/lessons/lessonJournalSaveBarModel.js";

assert.deepEqual(
  createLessonJournalSaveBarModel({
    hasDraftChanges: true,
    isEditMode: true,
    saveState: "idle"
  }),
  {
    buttonDisabled: false,
    buttonLabel: "변경 저장",
    shouldShow: true
  }
);

assert.deepEqual(
  createLessonJournalSaveBarModel({
    hasDraftChanges: false,
    isEditMode: true,
    saveState: "saving"
  }),
  {
    buttonDisabled: true,
    buttonLabel: "저장 중",
    shouldShow: true
  }
);

assert.deepEqual(
  createLessonJournalSaveBarModel({
    hasDraftChanges: true,
    isEditMode: false,
    manualSaveMessage: "TARGET 저장 완료",
    saveState: "saved"
  }),
  {
    buttonDisabled: true,
    buttonLabel: "변경 저장",
    shouldShow: true
  }
);

assert.deepEqual(
  createLessonJournalSaveBarModel({
    hasDraftChanges: true,
    isEditMode: false,
    manualSaveMessage: "",
    saveState: "idle"
  }),
  {
    buttonDisabled: true,
    buttonLabel: "변경 저장",
    shouldShow: false
  }
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalSaveBar.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.match(journalSource, /<LessonJournalSaveBar/);
assert.match(journalSource, /hasDraftChanges=\{hasJournalDraftChanges\}/);
assert.match(journalSource, /isEditMode=\{journalEditMode\}/);
assert.match(journalSource, /manualSaveMessage=\{journalManualSaveMessage\}/);
assert.match(journalSource, /onSave=\{saveJournalDrafts\}/);
assert.doesNotMatch(journalSource, /className="lessonJournalStickySaveBar"/);

for (const contract of [
  "createLessonJournalSaveBarModel",
  'className="lessonJournalStickySaveBar"',
  'label="수업일지"',
  'className="saveDraftButton"',
  "disabled={model.buttonDisabled}",
  "onClick={onSave}",
  "model.buttonLabel"
]) {
  assert.ok(componentSource.includes(contract), `missing lesson journal save bar contract: ${contract}`);
}
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "useState", "useEffect"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `lesson journal save bar must stay controlled: ${forbiddenSideEffect}`);
}

console.log("lesson journal save bar TARGET/CONTROL fixtures passed");
