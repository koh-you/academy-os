import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createNotificationJobsQueryString } from "../src/domains/notifications/notificationJobLoadQuery.js";

function createExistingNotificationJobsQueryString({
  date = "",
  lessonId = "",
  scope = "active"
} = {}) {
  const query = new URLSearchParams();
  if (lessonId) {
    query.set("lessonId", lessonId);
    query.set("limit", "200");
  } else if (scope === "history") {
    query.set("limit", "300");
    if (date) {
      const dayStart = new Date(`${date}T00:00:00+09:00`);
      const nextDayStart = new Date(`${date}T00:00:00+09:00`);
      nextDayStart.setUTCDate(nextDayStart.getUTCDate() + 1);
      if (!Number.isNaN(dayStart.getTime()) && !Number.isNaN(nextDayStart.getTime())) {
        query.set("scheduledFrom", dayStart.toISOString());
        query.set("scheduledTo", nextDayStart.toISOString());
      }
    }
  } else {
    query.set("limit", "300");
    query.set("status", "draft,scheduled,failed,send_unconfirmed");
  }
  return query.toString();
}

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
      date: "2026-07-29",
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
  assert.equal(createExistingNotificationJobsQueryString(input), expected);
  assert.equal(createNotificationJobsQueryString(input), expected);
  assert.deepEqual(input, inputSnapshot);
}
assert.equal(
  createExistingNotificationJobsQueryString(),
  "limit=300&status=draft%2Cscheduled%2Cfailed%2Csend_unconfirmed"
);

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
const dateRangeStart = controllerSource.indexOf(
  'export function createNotificationJobsDateRange(date = "")'
);
const dateRangeEnd = controllerSource.indexOf(
  "\nexport function getNotificationJobsRefreshChannel(",
  dateRangeStart
);
assert.ok(dateRangeStart >= 0 && dateRangeEnd > dateRangeStart);
const dateRangeSource = controllerSource.slice(dateRangeStart, dateRangeEnd);
for (const dateBoundary of [
  'const dayStart = new Date(`${date}T00:00:00+09:00`)',
  "scheduledFrom: dayStart.toISOString()",
  "scheduledTo: nextDayStart.toISOString()"
]) {
  assert.ok(dateRangeSource.includes(dateBoundary));
}
const functionStart = controllerSource.indexOf(
  'function refresh({ date = "", lessonId = "", scope = "active", silent = false } = {})'
);
const functionEnd = controllerSource.indexOf(
  "\n  function dispose(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = controllerSource.slice(functionStart, functionEnd);
for (const queryBoundary of [
  '!lessonId && scope === "history"',
  "? createNotificationJobsDateRange(date)",
  "const queryString = createNotificationJobsQueryString({",
  "lessonId,",
  "scheduledFrom,",
  "scheduledTo,",
  "scope",
  "`/api/notification-jobs?${queryString}`"
]) {
  assert.ok(
    functionSource.includes(queryBoundary),
    `missing notification load query boundary: ${queryBoundary}`
  );
}
assert.ok(!functionSource.includes("new URLSearchParams()"));
assert.ok(!functionSource.includes("query.set("));
const loadingIndex = functionSource.indexOf(
  'onStatus({ state: "loading", message: "알림 기록을 불러오는 중입니다." })'
);
const queryIndex = functionSource.indexOf(
  "const queryString = createNotificationJobsQueryString({"
);
const requestIndex = functionSource.indexOf(
  "`/api/notification-jobs?${queryString}`",
  queryIndex
);
const resultIndex = functionSource.indexOf(
  "if (!result.ok || !Array.isArray(result.notificationJobs))",
  requestIndex
);
assert.ok(
  functionSource.includes("if (!silent)") &&
    queryIndex >= 0 &&
    loadingIndex > queryIndex &&
    requestIndex > loadingIndex &&
    resultIndex > requestIndex
);
for (const helperRule of [
  "export function createNotificationJobsQueryString({",
  'lessonId = "",',
  'scheduledFrom = "",',
  'scheduledTo = "",',
  'scope = "active"',
  "const query = new URLSearchParams()",
  "if (lessonId)",
  'query.set("lessonId", lessonId)',
  'query.set("limit", "200")',
  '} else if (scope === "history")',
  'query.set("limit", "300")',
  "if (scheduledFrom && scheduledTo)",
  'query.set("scheduledFrom", scheduledFrom)',
  'query.set("scheduledTo", scheduledTo)',
  'query.set("status", "draft,scheduled,failed,send_unconfirmed")',
  "return query.toString()"
]) {
  assert.ok(
    helperSource.includes(helperRule),
    `missing notification load query helper rule: ${helperRule}`
  );
}
assert.equal(helperSource.split('query.set("limit", "300")').length - 1, 2);

console.log("notification job load query inventory fixtures passed");
