import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [appSource, detailSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/LessonJournalDetail.jsx", import.meta.url), "utf8")
]);

const pureModelPaths = [
  "../src/domains/lessons/lessonJournalExpectedReservationItems.js",
  "../src/domains/lessons/lessonJournalReservationAuditResult.js",
  "../src/domains/lessons/lessonJournalReservationAuditTransitions.js",
  "../src/domains/lessons/lessonJournalReservationControlModel.js",
  "../src/domains/lessons/lessonJournalReservationSyncModel.js"
];
const pureModelSources = await Promise.all(
  pureModelPaths.map((path) => readFile(new URL(path, import.meta.url), "utf8"))
);

const detailAsyncFunctionNames = [
  ...detailSource.matchAll(/\basync function\s+([A-Za-z0-9_]+)\s*\(/g)
].map((match) => match[1]);
assert.deepEqual(detailAsyncFunctionNames, [
  "refreshReservationAudit",
  "cancelReservationJob",
  "saveJournalDrafts",
  "applySolapiReservationPlan",
  "refreshSolapiSendResults"
]);

for (const binding of [
  "createLessonJournalExpectedReservationItems({",
  "createLessonJournalReservationSyncStatus({",
  "createLessonJournalReservationControlModel({",
  "createLessonJournalReservationAuditResult(result)",
  "applyCanceledLessonJournalReservationJob({"
]) {
  assert.ok(detailSource.includes(binding), `missing extracted reservation binding: ${binding}`);
}

for (const appOwnedBoundary of [
  "loadLessonJournalReservationAudit({",
  "OS 예약 기록 조회 실패:",
  "window.confirm(\"이 알림톡 예약 1건을 취소할까요?",
  "onCancelNotificationJob?.(job,",
  "onApplyLessonNotificationPlan(lesson.lessonId)",
  "onReconcileSolapiNotificationResults?.(",
  'setReservationApplyState("applying")',
  'setSolapiResultRefreshState("loading")'
]) {
  assert.ok(detailSource.includes(appOwnedBoundary), `reservation boundary must remain in App: ${appOwnedBoundary}`);
}
assert.ok(appSource.includes("function loadLessonJournalReservationAudit({ date, lessonId })"));
assert.ok(appSource.includes("return getJsonWithTimeout(path, 12000,"));

for (const removedProviderBoundary of [
  "cancelSolapiGroup",
  "cancelingSolapiGroupId",
  "solapiGroupsPath",
  "solapiMessagesPath",
  "/api/solapi/groups/cancel",
  "applyCanceledLessonJournalSolapiGroup"
]) {
  assert.ok(!detailSource.includes(removedProviderBoundary), `raw provider boundary must stay removed: ${removedProviderBoundary}`);
}

for (const [index, modelSource] of pureModelSources.entries()) {
  for (const forbiddenSideEffect of [
    "useState",
    "useEffect",
    "fetch(",
    "postJson",
    "getJsonWithTimeout",
    "Promise.allSettled",
    "window.confirm",
    "new Date",
    "/api/",
    "Supabase",
    "localStorage"
  ]) {
    assert.ok(!modelSource.includes(forbiddenSideEffect), `${pureModelPaths[index]} must stay pure: ${forbiddenSideEffect}`);
  }
}

const reservationHookSource = await readFile(
  new URL("../src/domains/lessons/useLessonJournalReservationState.js", import.meta.url),
  "utf8"
);
for (const localStateName of [
  "reservationModalOpen",
  "reservationAudit",
  "reservationInspectMode",
  "cancelingReservationJobId",
  "reservationApplyState",
  "solapiResultRefreshState"
]) {
  assert.ok(reservationHookSource.includes(localStateName), `missing reservation local state: ${localStateName}`);
}
for (const removedHookState of ["cancelingSolapiGroupId", "solapiGroups", "solapiMessages"]) {
  assert.ok(!reservationHookSource.includes(removedHookState), `removed provider state must stay absent: ${removedHookState}`);
}

console.log("lesson journal OS reservation closeout boundary passed");
