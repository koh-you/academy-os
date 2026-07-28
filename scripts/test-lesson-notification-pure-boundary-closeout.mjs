import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const pureModelUrls = [
  "../src/domains/lessons/lessonJournalCommentSendStatus.js",
  "../src/domains/lessons/lessonJournalCommentStatusModel.js",
  "../src/domains/notifications/notificationJobStatusFormatter.js",
  "../src/domains/notifications/notificationJobDisplaySelectors.js",
  "../src/domains/notifications/notificationProviderReference.js",
  "../src/domains/lessons/lessonReservationPayloadFingerprint.js",
  "../src/domains/lessons/lessonReservationPayloadSnapshot.js",
  "../src/domains/lessons/lessonNotificationJobSelectors.js"
];
const pureModelSources = await Promise.all(
  pureModelUrls.map((url) => readFile(new URL(url, import.meta.url), "utf8"))
);

for (const pureBinding of [
  "getLessonJournalEffectiveCommentSendStatus",
  "getLessonJournalDisplayCommentSendStatus",
  "getLessonJournalCommentSendState",
  "getLessonJournalCommentButtonState",
  "getLessonJournalCommentStatusLabel",
  "formatNotificationJobStatusLabel",
  "canDeleteNotificationJobForDisplay",
  "getNotificationJobProviderReferenceForDisplay",
  "getNotificationProviderReference",
  "createLessonReservationPayloadFingerprint",
  "createLessonReservationPayloadSnapshot",
  "createLessonNotificationJobId",
  "isActiveNotificationJobStatus",
  "isLessonRecordNotificationMuted"
]) {
  assert.ok(appSource.includes(pureBinding), `missing pure notification binding: ${pureBinding}`);
}

const exportedFunctionCount = pureModelSources.reduce(
  (count, source) =>
    count + (source.match(/\bexport function\s+\w+\s*\(/g) ?? []).length,
  0
);
assert.equal(exportedFunctionCount, 14);

for (const modelSource of pureModelSources) {
  for (const forbiddenSideEffect of [
    "useState",
    "useEffect",
    "fetch(",
    "postJson",
    "getJsonWithTimeout",
    "Date.now",
    "/api/",
    "Supabase",
    "Solapi",
    "localStorage",
    "setNotificationJobs",
    "setJournal",
    "onReconcileSolapiNotificationResults"
  ]) {
    assert.ok(
      !modelSource.includes(forbiddenSideEffect),
      `pure notification boundary owns a side effect: ${forbiddenSideEffect}`
    );
  }
}

for (const appOwnedProviderAction of [
  "async function refreshNotificationJobs(",
  "async function handleReconcileSolapiNotificationResults(",
  "async function handleCancelNotificationJob(",
  "async function reserveLessonNotificationJobs(",
  "async function persistCanceledNotificationJob(",
  "async function applyLessonNotificationPlan(",
  "async function refreshReservationAudit()",
  "async function cancelReservationJob(job)",
  "async function applySolapiReservationPlan()",
  "async function refreshSolapiSendResults()"
]) {
  assert.equal(
    appSource.split(appOwnedProviderAction).length - 1,
    1,
    `provider action must remain once in App: ${appOwnedProviderAction}`
  );
}

for (const appOwnedExternalBoundary of [
  'postJson("/api/notification-jobs/reserve-bulk"',
  "onCancelNotificationJob?.(",
  "onReconcileSolapiNotificationResults?.(",
  "onApplyLessonNotificationPlan(lesson.lessonId)",
  "setNotificationJobs(",
  "setReservationAudit(",
  "setJournalManualSaveMessage("
]) {
  assert.ok(
    appSource.includes(appOwnedExternalBoundary),
    `external notification boundary moved out of App: ${appOwnedExternalBoundary}`
  );
}

for (const removedRawProviderBoundary of [
  "async function cancelSolapiGroup(",
  'postJson("/api/solapi/groups/cancel"',
  "cancelingSolapiGroupId",
  "solapiGroupsPath",
  "solapiMessagesPath"
]) {
  assert.ok(
    !appSource.includes(removedRawProviderBoundary),
    `raw provider audit must stay absent from App: ${removedRawProviderBoundary}`
  );
}

console.log("lesson notification pure boundary closeout passed");
