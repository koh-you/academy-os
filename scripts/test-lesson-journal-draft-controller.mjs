import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createLessonJournalDraftSaveStateTransition,
  resolveLessonJournalDraftSave
} from "../src/domains/lessons/useLessonJournalDraftController.js";

assert.deepEqual(
  createLessonJournalDraftSaveStateTransition(),
  {
    message: "수업일지 · 저장 실패 · 수정본 유지",
    shouldClearDrafts: false
  }
);
assert.deepEqual(
  createLessonJournalDraftSaveStateTransition({
    message: "수업일지 · 부분 저장 · 숙제 1건 · 저장 실패",
    ok: false
  }),
  {
    message: "수업일지 · 부분 저장 · 숙제 1건 · 저장 실패",
    shouldClearDrafts: false
  }
);

assert.deepEqual(
  resolveLessonJournalDraftSave({
    currentLessonId: "lesson-a",
    currentRevision: 3,
    saved: { message: "수업일지 · 저장 완료 · 수업기록 1건", ok: true },
    saveLessonId: "lesson-a",
    saveRevision: 3
  }),
  {
    message: "수업일지 · 저장 완료 · 수업기록 1건",
    shouldApply: true,
    shouldClearDrafts: true
  }
);
assert.deepEqual(
  resolveLessonJournalDraftSave({
    currentLessonId: "lesson-a",
    currentRevision: 4,
    saved: { ok: true },
    saveLessonId: "lesson-a",
    saveRevision: 3
  }),
  {
    message: "수업일지 · 저장 완료 · 이후 변경 저장 필요",
    shouldApply: true,
    shouldClearDrafts: false
  },
  "a successful older request must preserve edits made while it was in flight"
);
assert.deepEqual(
  resolveLessonJournalDraftSave({
    currentLessonId: "lesson-b",
    currentRevision: 5,
    saved: { ok: true },
    saveLessonId: "lesson-a",
    saveRevision: 3
  }),
  {
    message: "수업일지 · 저장 완료",
    shouldApply: false,
    shouldClearDrafts: false
  },
  "a response for another lesson must not mutate the active lesson draft state"
);
assert.deepEqual(
  resolveLessonJournalDraftSave({
    currentLessonId: "lesson-a",
    currentRevision: 4,
    saved: { message: "수업일지 · 저장 실패 · 수정본 유지", ok: false },
    saveLessonId: "lesson-a",
    saveRevision: 3
  }),
  {
    message: "수업일지 · 저장 실패 · 수정본 유지",
    shouldApply: true,
    shouldClearDrafts: false
  }
);
assert.deepEqual(
  createLessonJournalDraftSaveStateTransition({ ok: true }),
  {
    message: "수업일지 · 저장 완료",
    shouldClearDrafts: true
  }
);
assert.deepEqual(
  createLessonJournalDraftSaveStateTransition({
    message: "수업일지 · 저장 완료 · 수업기록 2건",
    ok: true
  }),
  {
    message: "수업일지 · 저장 완료 · 수업기록 2건",
    shouldClearDrafts: true
  }
);

const [appSource, detailSource, controllerSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/LessonJournalDetail.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/useLessonJournalDraftController.js", import.meta.url), "utf8")
]);

for (const contract of [
  "useLessonJournalDraftController({",
  "onSaveLessonJournalDrafts,",
  "saveJournalDrafts: saveJournalDraftChanges",
  "const saved = await saveJournalDraftChanges()",
  'if (saved?.ok) setReservationApplyState("idle")'
]) {
  assert.ok(detailSource.includes(contract), `missing detail/controller contract: ${contract}`);
}
for (const contract of [
  "export function useLessonJournalDraftController({",
  "useLessonJournalDraftLifecycle(lesson.lessonId)",
  "const saved = await onSaveLessonJournalDrafts?.(",
  "draftRevisionRef.current += 1",
  "const saveLessonId = lesson.lessonId",
  "const saveRevision = draftRevisionRef.current",
  "if (saveInFlightRef.current) return saveInFlightRef.current",
  "resolveLessonJournalDraftSave({",
  "if (!resolution.shouldApply) return saved",
  "if (!resolution.shouldClearDrafts)",
  "setJournalRecordDrafts({})",
  "setJournalHomeworkDrafts({})",
  "setJournalMakeupTaskDrafts({})"
]) {
  assert.ok(controllerSource.includes(contract), `missing draft controller contract: ${contract}`);
}
assert.ok(appSource.includes("async function handleSaveLessonJournalDrafts("));
assert.ok(appSource.includes("executeLessonJournalDraftPersistence({"));
for (const forbidden of [
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "/api/",
  "Supabase",
  "localStorage",
  "notificationJobs",
  "Solapi"
]) {
  assert.equal(controllerSource.includes(forbidden), false, `draft controller must not own ${forbidden}`);
}

console.log("lesson journal draft controller TARGET/CONTROL fixtures passed");
