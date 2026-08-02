import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createLessonJournalDraftSaveStateTransition
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
  "createLessonJournalDraftSaveStateTransition(saved)",
  "if (!transition.shouldClearDrafts)",
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
