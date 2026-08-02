import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalReservationControlModel } from "../src/domains/lessons/lessonJournalReservationControlModel.js";

const createModel = (overrides = {}) =>
  createLessonJournalReservationControlModel({
    defaultScheduleHintText: "기본 예약 · 오늘 22:30",
    delayedScheduleLabel: "오늘 23:00",
    formatManualScheduledAt: (value) => `KST(${value})`,
    notificationPlanMode: "default",
    reservationApplyState: "idle",
    resultRefreshState: "idle",
    syncStatus: { state: "synced" },
    ...overrides
  });

assert.deepEqual(createModel(), {
  canApplySolapiReservation: false,
  canRefreshSolapiResults: false,
  notificationPlanSummaryText: "기본 예약 · 오늘 22:30",
  solapiApplyButtonLabel: "Solapi 예약 반영",
  solapiResultRefreshTitle: "지난 예약의 Solapi 발송결과를 OS 상태에 반영합니다."
});

assert.equal(
  createModel({ notificationPlanMode: "delay30" }).notificationPlanSummaryText,
  "30분 지연 · 오늘 23:00"
);
assert.equal(
  createModel({
    isDelayedScheduleExpired: true,
    notificationPlanMode: "delay30"
  }).notificationPlanSummaryText,
  "30분 지연 시간 지남 · 오늘 23:00"
);

let manualFormatterCallCount = 0;
assert.equal(
  createModel({
    formatManualScheduledAt: (value) => {
      manualFormatterCallCount += 1;
      return `한국시각(${value})`;
    },
    notificationPlanMode: "manual",
    notificationPlanScheduledAt: "2026-07-29T05:00:00.000Z"
  }).notificationPlanSummaryText,
  "수동 예약 · 한국시각(2026-07-29T05:00:00.000Z)"
);
assert.equal(manualFormatterCallCount, 1);
assert.equal(
  createModel({
    formatManualScheduledAt: () => {
      throw new Error("시각이 없으면 formatter를 호출하지 않아야 합니다.");
    },
    notificationPlanMode: "manual"
  }).notificationPlanSummaryText,
  "수동 예약 · 시각 미정"
);

assert.equal(
  createModel({ notificationPlanMode: "none" }).notificationPlanSummaryText,
  "알림톡 없음"
);
assert.equal(
  createModel({ notificationPlanMode: "none" }).solapiApplyButtonLabel,
  "Solapi 취소 반영"
);
assert.equal(
  createModel({ reservationApplyState: "applying" }).solapiApplyButtonLabel,
  "Solapi 반영 중"
);
assert.equal(
  createModel({ syncStatus: { state: "needs" } }).solapiApplyButtonLabel,
  "Solapi 예약 업데이트"
);

assert.equal(
  createModel({
    hasApplyHandler: true,
    syncStatus: { state: "needs" }
  }).canApplySolapiReservation,
  true
);
assert.equal(
  createModel({
    hasApplyHandler: true,
    reservationApplyState: "failed",
    syncStatus: { state: "failed" }
  }).canApplySolapiReservation,
  true
);
for (const [label, overrides] of [
  ["no handler", { syncStatus: { state: "needs" } }],
  ["draft", { hasApplyHandler: true, hasDraftChanges: true, syncStatus: { state: "needs" } }],
  ["applying", { hasApplyHandler: true, reservationApplyState: "applying", syncStatus: { state: "needs" } }],
  ["result due", { hasApplyHandler: true, reservationApplyState: "failed", syncStatus: { state: "resultDue" } }],
  ["already synced", { hasApplyHandler: true, syncStatus: { state: "synced" } }]
]) {
  assert.equal(createModel(overrides).canApplySolapiReservation, false, label);
}

assert.equal(
  createModel({
    hasRefreshHandler: true,
    resultRefreshTargetCount: 2
  }).canRefreshSolapiResults,
  true
);
assert.equal(
  createModel({ resultRefreshTargetCount: 2 }).canRefreshSolapiResults,
  false
);
assert.equal(
  createModel({
    hasDraftChanges: true,
    hasRefreshHandler: true,
    resultRefreshTargetCount: 2
  }).canRefreshSolapiResults,
  false
);
assert.equal(
  createModel({
    hasRefreshHandler: true,
    resultRefreshState: "loading",
    resultRefreshTargetCount: 2
  }).canRefreshSolapiResults,
  false
);
assert.equal(
  createModel({
    hasRefreshHandler: true,
    resultRefreshTargetCount: 0
  }).canRefreshSolapiResults,
  false
);
assert.equal(
  createModel({ resultRefreshTargetCount: 2 }).solapiResultRefreshTitle,
  "Solapi 발송 원천 2건을 OS 상태에 반영합니다."
);

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const modelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalReservationControlModel.js", import.meta.url),
  "utf8"
);
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction PreparationMemoModal(", detailStart);
const detailSource = appSource.slice(detailStart, detailEnd);

for (const binding of [
  'import { createLessonJournalReservationControlModel } from "../domains/lessons/lessonJournalReservationControlModel.js"',
  "createLessonJournalReservationControlModel({",
  "defaultScheduleHintText,",
  "delayedScheduleLabel: delayedAlimtalkTimeLabel,",
  "formatManualScheduledAt: formatKoreaTimeLabel,",
  "hasApplyHandler: Boolean(onApplyLessonNotificationPlan),",
  "hasRefreshHandler: Boolean(onReconcileSolapiNotificationResults),",
  "resultRefreshTargetCount: solapiResultRefreshTargetJobs.length,",
  "syncStatus: solapiReservationSyncStatus"
]) {
  assert.ok(appSource.includes(binding), `missing App control-model binding: ${binding}`);
}
assert.ok(!detailSource.includes('const notificationPlanSummaryText = notificationPlanMode === "none"'));
assert.ok(!detailSource.includes("const canApplySolapiReservation ="));
assert.ok(!detailSource.includes("const canRefreshSolapiResults ="));

for (const appOwnedAction of [
  "async function refreshReservationAudit()",
  "async function cancelReservationJob(job)",
  "async function applySolapiReservationPlan()",
  "async function refreshSolapiSendResults()",
  "onApplyLessonNotificationPlan(lesson.lessonId)",
  "onReconcileSolapiNotificationResults?.("
]) {
  assert.ok(detailSource.includes(appOwnedAction), `reservation action must remain in App: ${appOwnedAction}`);
  assert.ok(!modelSource.includes(appOwnedAction), `control model must not own action: ${appOwnedAction}`);
}
assert.ok(!detailSource.includes("async function cancelSolapiGroup("));
assert.ok(!detailSource.includes("/api/solapi/groups/cancel"));
for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "/api/",
  "Supabase",
  "localStorage",
  "notificationJobs"
]) {
  assert.ok(!modelSource.includes(forbiddenSideEffect), `control model must stay pure: ${forbiddenSideEffect}`);
}

console.log("lesson journal reservation control model TARGET/CONTROL fixtures passed");
