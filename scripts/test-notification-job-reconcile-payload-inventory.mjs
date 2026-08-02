import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createNotificationJobReconcilePayload } from "../src/domains/notifications/notificationJobReconcilePayload.js";

function createExistingNotificationJobReconcilePayload({
  date = "",
  lessonId = "",
  notificationJobIds = [],
  scheduledFrom = "",
  scheduledTo = ""
} = {}) {
  return {
    date,
    lessonId,
    notificationJobIds,
    scheduledFrom,
    scheduledTo,
    limit: 500
  };
}

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
const payload = createExistingNotificationJobReconcilePayload(input);
const extractedPayload = createNotificationJobReconcilePayload(input);

assert.deepEqual(payload, {
  date: "2026-07-28",
  lessonId: "lesson_TARGET",
  notificationJobIds,
  scheduledFrom: "2026-07-28T00:00:00.000Z",
  scheduledTo: "2026-07-29T00:00:00.000Z",
  limit: 500
});
assert.equal(payload.notificationJobIds, notificationJobIds);
assert.deepEqual(extractedPayload, payload);
assert.equal(extractedPayload.notificationJobIds, notificationJobIds);
assert.deepEqual(input, inputSnapshot);
assert.deepEqual(createExistingNotificationJobReconcilePayload(), {
  date: "",
  lessonId: "",
  notificationJobIds: [],
  scheduledFrom: "",
  scheduledTo: "",
  limit: 500
});

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const teacherViewOutletSource = await readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobReconcilePayload.js", import.meta.url),
  "utf8"
);
const controllerSource = await readFile(
  new URL(
    "../src/domains/notifications/notificationJobsReconcileController.js",
    import.meta.url
  ),
  "utf8"
);
const functionStart = controllerSource.indexOf(
  "function reconcile(options = {})"
);
const functionEnd = controllerSource.indexOf(
  "\n  function dispose(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = controllerSource.slice(functionStart, functionEnd);
for (const requestBoundary of [
  "const payload = createNotificationJobReconcilePayload(options)",
  "const result = await request(",
  '"/api/notification-jobs/reconcile-solapi"',
  "payload,",
  "90000",
  '"Solapi 발송결과 조회가 90초를 넘었습니다. 예약 확인에서 다시 시도해 주세요."',
  "if (!disposed) onResult(result)",
  "return result"
]) {
  assert.ok(
    functionSource.includes(requestBoundary),
    `missing reconcile request boundary: ${requestBoundary}`
  );
}
const requestIndex = functionSource.indexOf(
  '"/api/notification-jobs/reconcile-solapi"'
);
const resultIndex = functionSource.indexOf(
  "if (!disposed) onResult(result)",
  requestIndex
);
const returnIndex = functionSource.indexOf("return result", resultIndex);
assert.ok(
  requestIndex >= 0 &&
    resultIndex > requestIndex &&
    returnIndex > resultIndex
);
assert.ok(
  appSource.includes("onResult: applyNotificationJobsReconcileResult") &&
    appSource.includes("mergeNotificationJobsIntoState(result.notificationJobs ?? [])") &&
    appSource.includes("if (Array.isArray(result.records) && result.records.length)")
);
assert.equal(
  teacherViewOutletSource.split(
    "onReconcileSolapiNotificationResults: actions.handleReconcileSolapiNotificationResults"
  ).length - 1,
  3
);
for (const helperRule of [
  "export function createNotificationJobReconcilePayload({",
  'date = "",',
  'lessonId = "",',
  "notificationJobIds = [],",
  'scheduledFrom = "",',
  'scheduledTo = ""',
  "return {",
  "date,",
  "lessonId,",
  "notificationJobIds,",
  "scheduledFrom,",
  "scheduledTo,",
  "limit: 500"
]) {
  assert.ok(
    helperSource.includes(helperRule),
    `missing reconcile payload helper rule: ${helperRule}`
  );
}

console.log("notification job reconcile payload inventory fixtures passed");
