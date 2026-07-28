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
const functionStart = appSource.indexOf(
  'async function refreshNotificationJobs({ date = "", lessonId = "", scope = "active", silent = false } = {})'
);
const functionEnd = appSource.indexOf(
  "\n  function mergeNotificationJobsIntoState(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
for (const AppOwnedBoundary of [
  "if (!silent)",
  'setNotificationJobsStatus({ state: "loading", message: "알림 기록을 불러오는 중입니다." })',
  'if (!lessonId && scope === "history" && date)',
  'const dayStart = new Date(`${date}T00:00:00+09:00`)',
  "const queryString = createNotificationJobsQueryString({",
  "scheduledFrom,",
  "scheduledTo,",
  "getJsonWithTimeout(",
  "`/api/notification-jobs?${queryString}`",
  "setNotificationJobs(result.notificationJobs)",
  "mergeNotificationJobsIntoState(result.notificationJobs)",
  "createNotificationJobsReadyStatus({",
  'setNotificationJobsStatus({ state: "failed", message: error.message })'
]) {
  assert.ok(
    functionSource.includes(AppOwnedBoundary),
    `notification query effect moved from App: ${AppOwnedBoundary}`
  );
}
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
