import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

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
assert.deepEqual(createExistingNotificationJobReconcilePayload(), {
  date: "",
  lessonId: "",
  notificationJobIds: [],
  scheduledFrom: "",
  scheduledTo: "",
  limit: 500
});

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const functionStart = appSource.indexOf(
  'async function handleReconcileSolapiNotificationResults({ lessonId = "", date = "", notificationJobIds = [], scheduledFrom = "", scheduledTo = "" } = {})'
);
const functionEnd = appSource.indexOf(
  "\n  async function handleCancelNotificationJob(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
for (const requestBoundary of [
  "const result = await postJsonWithTimeout(",
  '"/api/notification-jobs/reconcile-solapi"',
  "{ date, lessonId, notificationJobIds, scheduledFrom, scheduledTo, limit: 500 }",
  "90000",
  '"Solapi 발송결과 조회가 90초를 넘었습니다. 예약 확인에서 다시 시도해 주세요."',
  "mergeNotificationJobsIntoState(result.notificationJobs ?? [])",
  "if (Array.isArray(result.records) && result.records.length)",
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
const mergeJobsIndex = functionSource.indexOf(
  "mergeNotificationJobsIntoState(result.notificationJobs ?? [])",
  requestIndex
);
const mergeRecordsIndex = functionSource.indexOf(
  "if (Array.isArray(result.records) && result.records.length)",
  mergeJobsIndex
);
const returnIndex = functionSource.indexOf("return result", mergeRecordsIndex);
assert.ok(
  requestIndex >= 0 &&
    mergeJobsIndex > requestIndex &&
    mergeRecordsIndex > mergeJobsIndex &&
    returnIndex > mergeRecordsIndex
);
assert.equal(
  appSource.split(
    "onReconcileSolapiNotificationResults={handleReconcileSolapiNotificationResults}"
  ).length - 1,
  3
);
assert.ok(!appSource.includes("createNotificationJobReconcilePayload"));

console.log("notification job reconcile payload inventory fixtures passed");
