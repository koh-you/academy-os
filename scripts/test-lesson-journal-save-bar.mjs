import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
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
    message: "",
    saveState: "idle",
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
    message: "",
    saveState: "saving",
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
    message: "",
    saveState: "saved",
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
    message: "",
    saveState: "idle",
    shouldShow: false
  }
);

assert.deepEqual(
  createLessonJournalSaveBarModel({
    hasDraftChanges: false,
    isEditMode: false,
    manualSaveMessage: "Solapi 예약 반영 완료",
    message: "Solapi 예약 반영 완료",
    reservationSyncStatus: {
      detail: "누락 0건 · 남은 예약 0건 · 내용 변경 2건",
      label: "Solapi 예약 업데이트 필요",
      state: "needs"
    },
    saveState: "saved"
  }),
  {
    buttonDisabled: true,
    buttonLabel: "변경 저장",
    message: "Solapi 예약 업데이트 필요",
    saveState: "dirty",
    shouldShow: true
  },
  "실시간 예약 상태가 needs이면 하단바가 이전의 반영 완료 문구를 계속 보여주면 안 됩니다."
);

const appSource = await readAppWithLessonJournalSource(import.meta.url);
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
assert.match(journalSource, /reservationSyncStatus=\{solapiReservationSyncStatus\}/);
assert.doesNotMatch(journalSource, /className="lessonJournalStickySaveBar"/);

for (const contract of [
  "createLessonJournalSaveBarModel",
  'className="lessonJournalStickySaveBar"',
  'label="수업일지"',
  'className="primaryButton"',
  "disabled={model.buttonDisabled}",
  "message={model.message}",
  "onClick={onSave}",
  "model.buttonLabel",
  "saveState={model.saveState}"
]) {
  assert.ok(componentSource.includes(contract), `missing lesson journal save bar contract: ${contract}`);
}
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "useState", "useEffect"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `lesson journal save bar must stay controlled: ${forbiddenSideEffect}`);
}

console.log("lesson journal save bar TARGET/CONTROL fixtures passed");
