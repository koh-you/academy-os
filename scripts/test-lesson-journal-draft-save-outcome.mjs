import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalDraftSaveOutcome } from "../src/domains/lessons/lessonJournalDraftSaveOutcome.js";

assert.deepEqual(
  createLessonJournalDraftSaveOutcome(),
  {
    ok: true,
    message: "수업일지 · 저장 완료 · 변경 없음"
  }
);
assert.deepEqual(
  createLessonJournalDraftSaveOutcome({
    completedSources: ["숙제 2건", "등원보충 1건", "수업기록 2건"]
  }),
  {
    ok: true,
    message: "수업일지 · 저장 완료 · 숙제 2건 · 등원보충 1건 · 수업기록 2건"
  }
);
assert.deepEqual(
  createLessonJournalDraftSaveOutcome({
    error: new Error("숙제 TARGET 실패")
  }),
  {
    ok: false,
    message: "수업일지 · 저장 실패 · 숙제 TARGET 실패"
  }
);
assert.deepEqual(
  createLessonJournalDraftSaveOutcome({
    completedSources: ["숙제 2건"],
    error: new Error("등원보충 TARGET 실패")
  }),
  {
    ok: false,
    message: "수업일지 · 부분 저장 · 숙제 2건 · 저장 실패 · 등원보충 TARGET 실패"
  }
);
assert.deepEqual(
  createLessonJournalDraftSaveOutcome({
    completedSources: ["숙제 2건", "등원보충 1건"],
    error: new Error("수업기록 TARGET 실패")
  }),
  {
    ok: false,
    message: "수업일지 · 부분 저장 · 숙제 2건 · 등원보충 1건 · 저장 실패 · 수업기록 TARGET 실패"
  }
);
assert.deepEqual(
  createLessonJournalDraftSaveOutcome({
    completedSources: ["숙제 1건"],
    error: "문자열 CONTROL"
  }),
  {
    ok: false,
    message: "수업일지 · 부분 저장 · 숙제 1건 · 저장 실패 · 수정본 유지"
  }
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const outcomeSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalDraftSaveOutcome.js", import.meta.url),
  "utf8"
);
const controllerSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalDraftPersistenceController.js", import.meta.url),
  "utf8"
);
const handlerStart = appSource.indexOf("async function handleSaveLessonJournalDrafts(");
const handlerEnd = appSource.indexOf("async function handleSaveRecord(", handlerStart);
const handlerSource = appSource.slice(handlerStart, handlerEnd);
const detailStart = appSource.indexOf("function LessonJournalDetail({");
const detailEnd = appSource.indexOf("function CommentComposerModal({", detailStart);
const detailSource = appSource.slice(detailStart, detailEnd);

for (const outcomeBinding of [
  "createLessonJournalDraftSaveOutcome({ completedSources })",
  "createLessonJournalDraftSaveOutcome({",
  "completedSources,",
  "error"
]) {
  assert.ok(controllerSource.includes(outcomeBinding), `missing save outcome binding: ${outcomeBinding}`);
}
assert.ok(
  controllerSource.indexOf("await persistHomeworks()") <
    controllerSource.indexOf("await persistMakeupTasks()"),
  "homework save must remain before makeup save"
);
assert.ok(
  controllerSource.indexOf("await persistMakeupTasks()") <
    controllerSource.indexOf("await persistRecords()"),
  "makeup save must remain before record save"
);
assert.ok(
  handlerSource.includes("executeLessonJournalDraftPersistence({"),
  "App must delegate outcome composition to the persistence controller"
);

const failedGuardIndex = detailSource.indexOf("if (!saved?.ok)");
const recordDraftClearIndex = detailSource.indexOf("setJournalRecordDrafts({})", failedGuardIndex);
const homeworkDraftClearIndex = detailSource.indexOf("setJournalHomeworkDrafts({})", failedGuardIndex);
const makeupDraftClearIndex = detailSource.indexOf("setJournalMakeupTaskDrafts({})", failedGuardIndex);
assert.ok(failedGuardIndex >= 0, "missing failed save guard");
assert.ok(recordDraftClearIndex > failedGuardIndex, "record drafts must clear only after the failed guard");
assert.ok(homeworkDraftClearIndex > failedGuardIndex, "homework drafts must clear only after the failed guard");
assert.ok(makeupDraftClearIndex > failedGuardIndex, "makeup drafts must clear only after the failed guard");
assert.ok(
  !handlerSource.includes("completedSourceIds") &&
    !detailSource.includes("completedSourceIds"),
  "current retry contract must continue replaying every retained draft"
);

for (const outcomeContract of [
  "completedSources.join(\" · \")",
  "부분 저장",
  "저장 실패",
  'error?.message || "수정본 유지"'
]) {
  assert.ok(outcomeSource.includes(outcomeContract), `missing save outcome contract: ${outcomeContract}`);
}
for (const forbiddenSideEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "notification_jobs",
  "Solapi",
  "useState",
  "useEffect"
]) {
  assert.ok(
    !outcomeSource.includes(forbiddenSideEffect),
    `draft save outcome must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("lesson journal partial-save outcome TARGET/CONTROL fixtures passed");
