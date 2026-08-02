import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createNotificationJobsQueryString } from "../src/domains/notifications/notificationJobLoadQuery.js";

for (const [input, expected] of [
  [
    {
      lessonId: "lesson TARGET/1",
      scope: "history"
    },
    "lessonId=lesson+TARGET%2F1&limit=200"
  ],
  [
    {
      lessonId: "",
      scope: "history"
    },
    "limit=300"
  ],
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
    {
      lessonId: "",
      scope: "active"
    },
    "limit=300&status=draft%2Cscheduled%2Cfailed%2Csend_unconfirmed"
  ],
  [
    {
      lessonId: "",
      scope: "unexpected"
    },
    "limit=300&status=draft%2Cscheduled%2Cfailed%2Csend_unconfirmed"
  ]
]) {
  const inputSnapshot = structuredClone(input);
  assert.equal(createNotificationJobsQueryString(input), expected);
  assert.deepEqual(input, inputSnapshot);
}
assert.equal(
  createNotificationJobsQueryString(),
  "limit=300&status=draft%2Cscheduled%2Cfailed%2Csend_unconfirmed"
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobLoadQuery.js", import.meta.url),
  "utf8"
);
const controllerSource = await readFile(
  new URL("../src/domains/notifications/notificationJobsRefreshController.js", import.meta.url),
  "utf8"
);
const functionStart = appSource.indexOf(
  'async function refreshNotificationJobs({ date = "", lessonId = "", scope = "active", silent = false } = {})'
);
const functionEnd = appSource.indexOf(
  "\n  function mergeNotificationJobsIntoState(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
for (const AppAdapterBoundary of [
  "getNotificationJobsRefreshController().refresh({",
  "date,",
  "lessonId,",
  "scope,",
  "silent"
]) {
  assert.ok(
    functionSource.includes(AppAdapterBoundary),
    `notification query adapter missing from App: ${AppAdapterBoundary}`
  );
}
for (const controllerBoundary of [
  'const dayStart = new Date(`${date}T00:00:00+09:00`)',
  "const queryString = createNotificationJobsQueryString({",
  "scheduledFrom,",
  "scheduledTo,",
  "`/api/notification-jobs?${queryString}`",
  "onJobs({",
  "createNotificationJobsReadyStatus({"
]) assert.ok(controllerSource.includes(controllerBoundary), `notification query controller missing: ${controllerBoundary}`);
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
    `notification load query helper crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job load query fixtures passed");
