import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const draftStateSource = await readFile(
  new URL("../src/domains/lessons/useLessonJournalDraftLifecycle.js", import.meta.url),
  "utf8"
);
const reservationStateSource = await readFile(
  new URL("../src/domains/lessons/useLessonJournalReservationState.js", import.meta.url),
  "utf8"
);
const overlayStateSource = await readFile(
  new URL("../src/domains/lessons/useLessonJournalOverlayState.js", import.meta.url),
  "utf8"
);
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction PreparationMemoModal(", detailStart);
const detailSource = appSource.slice(detailStart, detailEnd);

assert.ok(detailStart >= 0 && detailEnd > detailStart, "LessonJournalDetail boundary must stay discoverable");
assert.equal((detailSource.match(/\buseState\s*\(/g) ?? []).length, 0);
assert.equal((detailSource.match(/\buseEffect\s*\(/g) ?? []).length, 1);

for (const stateHook of [
  "useLessonJournalDraftLifecycle(lesson.lessonId)",
  "useLessonJournalReservationState({",
  "useLessonJournalOverlayState()"
]) {
  assert.ok(detailSource.includes(stateHook), `missing LessonJournalDetail state hook: ${stateHook}`);
}

const remainingAsyncFunctions = [...detailSource.matchAll(/\basync function\s+([A-Za-z0-9_]+)/g)]
  .map((match) => match[1]);
assert.deepEqual(remainingAsyncFunctions, [
  "refreshReservationAudit",
  "cancelReservationJob",
  "saveJournalDrafts",
  "applySolapiReservationPlan",
  "refreshSolapiSendResults"
]);

for (const AppOwnedBoundary of [
  "if (!reservationModalOpen) return;",
  "refreshReservationAudit().catch((error) => {",
  "}, [lesson.date, lesson.lessonId, reservationModalOpen]);",
  "getJsonWithTimeout(osPath,",
  "onSaveLessonJournalDrafts?.(",
  "onApplyLessonNotificationPlan(lesson.lessonId)",
  "onReconcileSolapiNotificationResults?.("
]) {
  assert.ok(detailSource.includes(AppOwnedBoundary), `missing remaining App-owned boundary: ${AppOwnedBoundary}`);
}

for (const extractedSource of [draftStateSource, reservationStateSource, overlayStateSource]) {
  for (const forbiddenSideEffect of [
    "fetch(",
    "postJson",
    "getJsonWithTimeout",
    "/api/",
    "Supabase",
    "localStorage",
    "notificationJobs",
    "cancelingSolapiGroupId",
    "solapiGroups",
    "solapiMessages"
  ]) {
    assert.ok(!extractedSource.includes(forbiddenSideEffect), `local state hook must not own side effect: ${forbiddenSideEffect}`);
  }
}

assert.ok(!detailSource.includes("async function cancelSolapiGroup("));
assert.ok(!detailSource.includes('/api/solapi/groups/cancel'));

for (const nextPureBoundary of [
  "function getExpectedSolapiReservationItems()",
  "function getSolapiReservationSyncStatus()",
  "const solapiReservationSyncStatus = getSolapiReservationSyncStatus();"
]) {
  assert.ok(detailSource.includes(nextPureBoundary), `missing next pure reservation boundary: ${nextPureBoundary}`);
}

console.log("LessonJournalDetail local state closeout boundary passed");
