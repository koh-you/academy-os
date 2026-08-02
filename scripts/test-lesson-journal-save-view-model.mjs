import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalSaveViewModel } from "../src/domains/lessons/lessonJournalSaveViewModel.js";
import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";

assert.deepEqual(createLessonJournalSaveViewModel(), {
  draftChangeCount: 0,
  hasDraftChanges: false,
  homeworkDraftCount: 0,
  lessonJournalSaveStatus: { label: "", tone: "idle" },
  makeupTaskDraftCount: 0,
  recordDraftCount: 0,
  stickySaveMessage: "편집을 시작하면 변경 내용이 여기에 표시됩니다.",
  stickySaveState: "idle"
});

for (const [recordSaveStates, expected] of [
  [["saved"], { label: "저장 완료", tone: "saved" }],
  [["failed", "saved"], { label: "저장 실패", tone: "failed" }],
  [["dirty", "failed", "saved"], { label: "저장 대기...", tone: "dirty" }],
  [["saving", "dirty", "failed"], { label: "저장 중...", tone: "saving" }]
]) {
  assert.deepEqual(
    createLessonJournalSaveViewModel({ recordSaveStates }).lessonJournalSaveStatus,
    expected
  );
}

const draftModel = createLessonJournalSaveViewModel({
  homeworkDrafts: { "record-1:previous": {}, "record-1:next": {} },
  makeupTaskDrafts: { "record-1": {} },
  manualSaveMessage: "수업일지 · 저장 완료",
  recordDrafts: { "record-1": {}, "record-2": {} },
  recordSaveStates: ["saved"]
});
assert.deepEqual(draftModel, {
  draftChangeCount: 5,
  hasDraftChanges: true,
  homeworkDraftCount: 2,
  lessonJournalSaveStatus: { label: "저장 완료", tone: "saved" },
  makeupTaskDraftCount: 1,
  recordDraftCount: 2,
  stickySaveMessage: "저장 전 변경 5건",
  stickySaveState: "dirty"
});

assert.deepEqual(
  createLessonJournalSaveViewModel({
    manualSaveMessage: "수업일지 · 저장 중",
    recordDrafts: { target: {} }
  }),
  {
    draftChangeCount: 1,
    hasDraftChanges: true,
    homeworkDraftCount: 0,
    lessonJournalSaveStatus: { label: "", tone: "idle" },
    makeupTaskDraftCount: 0,
    recordDraftCount: 1,
    stickySaveMessage: "저장 전 변경 1건",
    stickySaveState: "saving"
  }
);

assert.equal(
  createLessonJournalSaveViewModel({
    manualSaveMessage: "수업일지 · 부분 저장 · 숙제 1건 · 저장 실패 · 수정본 유지",
    recordDrafts: { target: {} }
  }).stickySaveState,
  "failed"
);
assert.equal(
  createLessonJournalSaveViewModel({
    manualSaveMessage: "수업일지 · 저장 완료"
  }).stickySaveState,
  "saved"
);
assert.equal(
  createLessonJournalSaveViewModel({
    manualSaveMessage: "Solapi 예약 반영 완료",
    recordSaveStates: ["failed"]
  }).stickySaveState,
  "failed",
  "non-journal messages must preserve the record save-state fallback"
);
assert.equal(
  createLessonJournalSaveViewModel({
    manualSaveMessage: "직접 안내"
  }).stickySaveMessage,
  "직접 안내"
);

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const source = await readFile(
  new URL("../src/domains/lessons/lessonJournalSaveViewModel.js", import.meta.url),
  "utf8"
);
assert.equal(appSource.includes("createLessonJournalSaveViewModel({"), true);
for (const movedImplementation of [
  "const lessonJournalSaveStatus = (() =>",
  "const journalRecordDraftCount = Object.keys(",
  "const journalStickySaveState = journalManualSaveMessage.includes("
]) {
  assert.equal(appSource.includes(movedImplementation), false);
}
for (const forbidden of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "notification_jobs",
  "Supabase",
  "Solapi"
]) {
  assert.equal(source.includes(forbidden), false, `journal save model must not own ${forbidden}`);
}

console.log("lesson journal save view-model fixtures passed");
