import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { upsertNotificationJobList } from "../src/domains/notifications/notificationJobState.js";

const virtualJobs = [
  {
    notificationJobId: "job_TARGET",
    marker: "TARGET_OLD_A"
  },
  {
    notificationJobId: "job_CONTROL",
    marker: "CONTROL"
  },
  {
    notificationJobId: "job_TARGET",
    marker: "TARGET_OLD_B"
  }
];
const targetJob = {
  notificationJobId: "job_TARGET",
  marker: "TARGET_NEW"
};
const virtualSnapshot = structuredClone(virtualJobs);
assert.deepEqual(upsertNotificationJobList(virtualJobs, targetJob), [
  targetJob,
  virtualJobs[1]
]);
assert.deepEqual(virtualJobs, virtualSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobState.js", import.meta.url),
  "utf8"
);
const functionStart = appSource.indexOf(
  "function upsertNotificationJobState(notificationJob)"
);
const functionEnd = appSource.indexOf(
  "\n  async function reserveNotificationJob(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);

assert.equal(
  appSource.split(
    'from "../domains/notifications/notificationJobState.js"'
  ).length - 1,
  1
);
assert.ok(appSource.includes("upsertNotificationJobList"));
assert.equal(
  helperSource.split("export function upsertNotificationJobList(").length - 1,
  1
);
assert.equal(
  functionSource.split("upsertNotificationJobList(current, notificationJob)").length - 1,
  1
);

const guardIndex = functionSource.indexOf(
  "if (!notificationJob?.notificationJobId) return"
);
const setterIndex = functionSource.indexOf(
  "setNotificationJobs((current) => upsertNotificationJobList(current, notificationJob))"
);
assert.ok(guardIndex >= 0 && setterIndex > guardIndex);
assert.equal(
  appSource.split("onNotificationJob: upsertNotificationJobState").length - 1,
  4
);
for (const appOwnedCallbackBoundary of [
  "cancelNotificationJobRequest({",
  "saveManualAttendanceAction({",
  "reserveNotificationJobRequest({",
  "persistFailedNotificationJobRequest({"
]) {
  assert.ok(
    appSource.includes(appOwnedCallbackBoundary),
    `missing App-owned notification callback boundary: ${appOwnedCallbackBoundary}`
  );
}

for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "new Date",
  "Date.now",
  "localStorage",
  "setNotificationJobs",
  "notification_jobs",
  "Solapi",
  "reserveNotificationJobRequest",
  "cancelNotificationJobRequest"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `notification job upsert helper crossed closeout boundary: ${forbiddenHelperEffect}`
  );
}

console.log("notification job state upsert boundary closeout passed");
