import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createNotificationJobReconcilePayload } from "../src/domains/notifications/notificationJobReconcilePayload.js";

const notificationJobIds = ["job_TARGET", "job_CONTROL"];
const input = {
  date: "2026-07-28",
  lessonId: "lesson_TARGET",
  notificationJobIds,
  scheduledFrom: "2026-07-28T00:00:00.000Z",
  scheduledTo: "2026-07-29T00:00:00.000Z",
  ignored: "IGNORED"
};
const inputSnapshot = structuredClone(input);
const payload = createNotificationJobReconcilePayload(input);

assert.deepEqual(payload, {
  date: "2026-07-28",
  lessonId: "lesson_TARGET",
  notificationJobIds,
  scheduledFrom: "2026-07-28T00:00:00.000Z",
  scheduledTo: "2026-07-29T00:00:00.000Z",
  limit: 500
});
assert.equal(payload.notificationJobIds, notificationJobIds);
assert.deepEqual(input, inputSnapshot);
assert.deepEqual(createNotificationJobReconcilePayload(), {
  date: "",
  lessonId: "",
  notificationJobIds: [],
  scheduledFrom: "",
  scheduledTo: "",
  limit: 500
});

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const contractApiSource = await readFile(
  new URL("../src/domains/notifications/notificationJobContractApi.js", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobReconcilePayload.js", import.meta.url),
  "utf8"
);
const controllerSource = await readFile(
  new URL("../src/domains/notifications/notificationJobsReconcileController.js", import.meta.url),
  "utf8"
);
const functionStart = appSource.indexOf(
  'async function handleReconcileSolapiNotificationResults({ lessonId = "", date = "", notificationJobIds = [], scheduledFrom = "", scheduledTo = "" } = {})'
);
const functionEnd = appSource.indexOf(
  "\n  async function handleCancelNotificationJob(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
for (const controllerBoundary of [
  "createNotificationJobReconcilePayload(options)",
  "inFlightByPayload.get(signature)",
  "reconcileNotificationJobsContractRequest({",
  "90000",
  "if (!disposed) onResult(result)",
  "return result"
]) {
  assert.ok(
    controllerSource.includes(controllerBoundary),
    `reconcile controller missing: ${controllerBoundary}`
  );
}
for (const contractBoundary of [
  '"/api/notification-jobs/reconcile-solapi"',
  "parseVersionedWriteRequest(",
  "parseVersionedWriteResponse("
]) {
  assert.ok(
    contractApiSource.includes(contractBoundary),
    `reconcile contract missing: ${contractBoundary}`
  );
}
for (const appAdapterBoundary of [
  "getNotificationJobsReconcileController().reconcile({",
  "date,",
  "lessonId,",
  "notificationJobIds,",
  "scheduledFrom,",
  "scheduledTo"
]) assert.ok(functionSource.includes(appAdapterBoundary), `reconcile App adapter missing: ${appAdapterBoundary}`);
assert.ok(
  !functionSource.includes(
    "{ date, lessonId, notificationJobIds, scheduledFrom, scheduledTo, limit: 500 }"
  )
);
for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "postJsonWithTimeout",
  "/api/",
  "new Date",
  "Date.now",
  "localStorage",
  "setNotificationJobs",
  "setRecords",
  "setSaveStates",
  "notification_jobs",
  "Solapi",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `notification reconcile payload helper crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job reconcile payload fixtures passed");
