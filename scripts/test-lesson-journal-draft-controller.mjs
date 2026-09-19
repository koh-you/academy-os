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
  'if (saved?.ok) setReservationApplyState("idle")',
  // 2026-09-19 · 편집 취소 출구. 저장 전 변경이 있으면 window.confirm 으로만 묻는다(별도 확인 모달 없음).
  "discardJournalDrafts: discardJournalDraftChanges",
  "function cancelJournalEditMode()",
  "journalDraftChangeCount > 0 &&",
  "window.confirm(`저장하지 않은 변경 ${journalDraftChangeCount}건을 버릴까요?`)",
  "discardJournalDraftChanges();",
  'setEditingMemoKey("");'
]) {
  assert.ok(detailSource.includes(contract), `missing detail/controller contract: ${contract}`);
}
assert.ok(!detailSource.includes("<Modal title=\"편집 취소"), "편집 취소는 confirm 만 쓰고 확인 모달을 새로 두지 않는다");
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
  "setJournalMakeupTaskDrafts({})",
  // 2026-09-19 · discardJournalDrafts: 로컬 draft 3종 초기화 + 편집 모드 종료 + 수동 메시지. 저장 중이면 무시.
  "function discardJournalDrafts()",
  'setJournalManualSaveMessage("수업일지 · 변경 취소")'
]) {
  assert.ok(controllerSource.includes(contract), `missing draft controller contract: ${contract}`);
}
{
  const discardStart = controllerSource.indexOf("function discardJournalDrafts()");
  const discardEnd = controllerSource.indexOf("async function saveJournalDrafts()", discardStart);
  const discardSource = controllerSource.slice(discardStart, discardEnd);
  for (const step of [
    "if (saveInFlightRef.current) return;",
    "setJournalRecordDrafts({});",
    "setJournalHomeworkDrafts({});",
    "setJournalMakeupTaskDrafts({});",
    "setJournalEditMode(false);"
  ]) {
    assert.ok(discardSource.includes(step), `discardJournalDrafts must ${step}`);
  }
  assert.ok(!discardSource.includes("onSaveLessonJournalDrafts"), "편집 취소는 저장을 호출하지 않는다");
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
