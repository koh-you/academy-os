import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  resolveMonthlySettlementSave
} from "../src/domains/settlements/useMonthlySettlementController.js";

assert.deepEqual(
  resolveMonthlySettlementSave({
    currentMonthKey: "2026-07",
    currentRevision: 4,
    persistedMonth: { monthKey: "2026-07", updatedAt: "saved-a" },
    saveMonthKey: "2026-07",
    saveRevision: 4
  }),
  {
    message: "Supabase 재조회 값이 현재 월별 정산과 일치합니다.",
    shouldApply: true,
    shouldClearLocalDraft: true,
    shouldRebaseRecovery: false,
    shouldReplaceDraft: true,
    shouldWriteRecovery: false
  }
);

assert.deepEqual(
  resolveMonthlySettlementSave({
    currentMonthKey: "2026-07",
    currentRevision: 5,
    persistedMonth: { monthKey: "2026-07", updatedAt: "saved-a" },
    saveMonthKey: "2026-07",
    saveRevision: 4
  }),
  {
    message: "Supabase 저장 완료 · 이후 변경 저장 필요",
    shouldApply: true,
    shouldClearLocalDraft: false,
    shouldRebaseRecovery: true,
    shouldReplaceDraft: false,
    shouldWriteRecovery: false
  },
  "an older successful save must preserve edits made while it was in flight"
);

assert.deepEqual(
  resolveMonthlySettlementSave({
    currentMonthKey: "2026-08",
    currentRevision: 4,
    persistedMonth: { monthKey: "2026-07", updatedAt: "saved-a" },
    saveMonthKey: "2026-07",
    saveRevision: 4
  }),
  {
    message: "",
    shouldApply: false,
    shouldClearLocalDraft: true,
    shouldRebaseRecovery: false,
    shouldReplaceDraft: false,
    shouldWriteRecovery: false
  },
  "a completed unchanged save must clear its recovery without mutating the active month"
);

assert.deepEqual(
  resolveMonthlySettlementSave({
    currentMonthKey: "2026-08",
    currentRevision: 5,
    persistedMonth: { monthKey: "2026-07", updatedAt: "saved-a" },
    saveMonthKey: "2026-07",
    saveRevision: 4
  }),
  {
    message: "",
    shouldApply: false,
    shouldClearLocalDraft: false,
    shouldRebaseRecovery: true,
    shouldReplaceDraft: false,
    shouldWriteRecovery: false
  },
  "a completed stale save must rebase its month recovery without mutating the active month"
);

assert.deepEqual(
  resolveMonthlySettlementSave({
    currentMonthKey: "2026-07",
    currentRevision: 5,
    error: new Error("TARGET 저장 실패"),
    saveMonthKey: "2026-07",
    saveRevision: 4
  }),
  {
    message: "TARGET 저장 실패",
    shouldApply: true,
    shouldClearLocalDraft: false,
    shouldRebaseRecovery: false,
    shouldReplaceDraft: false,
    shouldWriteRecovery: false
  },
  "an older failed save must not overwrite the newer local recovery draft"
);

assert.deepEqual(
  resolveMonthlySettlementSave({
    currentMonthKey: "2026-07",
    currentRevision: 4,
    error: new Error("TARGET 저장 실패"),
    saveMonthKey: "2026-07",
    saveRevision: 4
  }),
  {
    message: "TARGET 저장 실패",
    shouldApply: true,
    shouldClearLocalDraft: false,
    shouldRebaseRecovery: false,
    shouldReplaceDraft: false,
    shouldWriteRecovery: true
  }
);

const [appSource, panelSource, controllerSource, monthlySettlementMonthSaveApiSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/settlements/MonthlySettlementPanel.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/settlements/useMonthlySettlementController.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/settlements/monthlySettlementMonthSaveApi.js", import.meta.url), "utf8")
]);

for (const contract of [
  "useMonthlySettlementController({",
  "onSaveMonth,",
  "handleSave,",
  "updateStudentSetting"
]) {
  assert.ok(panelSource.includes(contract), `missing panel/controller contract: ${contract}`);
}
for (const contract of [
  "draftRevisionByMonthRef.current.set(",
  "if (saveInFlightRef.current) return saveInFlightRef.current.promise",
  "const saveMonthKey = selectedMonth",
  "const saveRevision = draftRevisionByMonthRef.current.get(saveMonthKey) ?? 0",
  "resolveMonthlySettlementSave({",
  "if (resolution.shouldRebaseRecovery)",
  "const latestDraft = draftByMonthRef.current.get(saveMonthKey)",
  "writeLocalDraft(latestDraft, persistedMonth.updatedAt || baseUpdatedAt)",
  "if (!resolution.shouldApply) return persistedMonth",
  "if (resolution.shouldReplaceDraft)",
  "preservedSourceRef.current = {",
  "if (resolution.shouldWriteRecovery) writeLocalDraft(nextMonth, baseUpdatedAt)"
]) {
  assert.ok(controllerSource.includes(contract), `missing settlement controller contract: ${contract}`);
}
assert.ok(appSource.includes("async function handleSaveMonthlySettlementMonth(month)"));
assert.ok(monthlySettlementMonthSaveApiSource.includes("getMonthlySettlementMonthSaveSnapshot(persistedMonth)"));
for (const forbidden of [
  "fetch(",
  "postAppState",
  "/api/",
  "notification_jobs",
  "Solapi"
]) {
  assert.equal(controllerSource.includes(forbidden), false, `settlement controller must not own ${forbidden}`);
}

console.log("monthly settlement controller TARGET/CONTROL fixtures passed");
