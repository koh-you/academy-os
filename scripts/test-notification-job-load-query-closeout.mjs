import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createNotificationJobsQueryString } from "../src/domains/notifications/notificationJobLoadQuery.js";

for (const [input, expected] of [
  [
    { lessonId: "lesson TARGET/1", scope: "history" },
    "lessonId=lesson+TARGET%2F1&limit=200"
  ],
  [{ lessonId: "", scope: "history" }, "limit=300"],
  [
    {
      lessonId: "",
      scheduledFrom: "2026-07-28T15:00:00.000Z",
      scheduledTo: "2026-07-29T15:00:00.000Z",
      scope: "history"
    },
    "limit=300&scheduledFrom=2026-07-28T15%3A00%3A00.000Z&scheduledTo=2026-07-29T15%3A00%3A00.000Z"
  ],
  [
    { lessonId: "", scope: "active" },
    "limit=300&status=draft%2Cscheduled%2Cfailed%2Csend_unconfirmed"
  ]
]) {
  const inputSnapshot = structuredClone(input);
  assert.equal(createNotificationJobsQueryString(input), expected);
  assert.deepEqual(input, inputSnapshot);
}

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobLoadQuery.js", import.meta.url),
  "utf8"
);
const controllerSource = await readFile(
  new URL(
    "../src/domains/notifications/notificationJobsRefreshController.js",
    import.meta.url
  ),
  "utf8"
);
const modulePath = 'from "../domains/notifications/notificationJobLoadQuery.js"';
assert.equal(appSource.split(modulePath).length - 1, 0);
assert.equal(controllerSource.split('from "./notificationJobLoadQuery.js"').length - 1, 1);
assert.equal(
  controllerSource.split("createNotificationJobsQueryString({")
    .length - 1,
  1
);
assert.equal(
  helperSource.split("export function createNotificationJobsQueryString(")
    .length - 1,
  1
);

const functionStart = controllerSource.indexOf(
  'function refresh({ date = "", lessonId = "", scope = "active", silent = false } = {})'
);
const functionEnd = controllerSource.indexOf(
  "\n  function dispose(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = controllerSource.slice(functionStart, functionEnd);
const loadingIndex = functionSource.indexOf(
  'onStatus({ state: "loading", message: "알림 기록을 불러오는 중입니다." })'
);
const helperIndex = functionSource.indexOf(
  "createNotificationJobsQueryString({"
);
const requestIndex = functionSource.indexOf("await request(", helperIndex);
const requestUrlIndex = functionSource.indexOf(
  "`/api/notification-jobs?${queryString}`",
  requestIndex
);
const resultIndex = functionSource.indexOf(
  "if (!result.ok || !Array.isArray(result.notificationJobs))",
  requestUrlIndex
);
const directAssignmentIndex = functionSource.indexOf(
  "onJobs({",
  resultIndex
);
const mergeIndex = functionSource.indexOf(
  "notificationJobs: result.notificationJobs,",
  directAssignmentIndex
);
const readyIndex = functionSource.indexOf(
  "createNotificationJobsReadyStatus({",
  mergeIndex
);
const failedIndex = functionSource.indexOf(
  'onStatus({ state: "failed", message: error.message })',
  readyIndex
);
assert.ok(
  functionSource.includes("if (!silent)") &&
    functionSource.includes("scheduledFrom,") &&
    functionSource.includes("scheduledTo,") &&
    helperIndex >= 0 &&
    loadingIndex > helperIndex &&
    requestIndex > loadingIndex &&
    requestUrlIndex > requestIndex &&
    resultIndex > requestUrlIndex &&
    directAssignmentIndex > resultIndex &&
    mergeIndex > directAssignmentIndex &&
    readyIndex > mergeIndex &&
    failedIndex > readyIndex
);
assert.ok(!functionSource.includes("new URLSearchParams()"));
assert.ok(!functionSource.includes("query.set("));
for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "/api/",
  "new Date",
  "Date.now",
  "localStorage",
  "setNotificationJobs",
  "setNotificationJobsStatus",
  "notification_jobs",
  "Solapi",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `notification load query closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job load query boundary closeout passed");
