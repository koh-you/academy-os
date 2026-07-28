import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

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
  assert.deepEqual(input, inputSnapshot);
}
assert.equal(
  createExistingNotificationJobsQueryString(),
  "limit=300&status=draft%2Cscheduled%2Cfailed%2Csend_unconfirmed"
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const functionStart = appSource.indexOf(
  'async function refreshNotificationJobs({ date = "", lessonId = "", scope = "active", silent = false } = {})'
);
const functionEnd = appSource.indexOf(
  "\n  function mergeNotificationJobsIntoState(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
for (const queryBoundary of [
  "const query = new URLSearchParams()",
  "if (lessonId)",
  'query.set("lessonId", lessonId)',
  'query.set("limit", "200")',
  '} else if (scope === "history")',
  'query.set("limit", "300")',
  "if (date)",
  'const dayStart = new Date(`${date}T00:00:00+09:00`)',
  'query.set("scheduledFrom", dayStart.toISOString())',
  'query.set("scheduledTo", nextDayStart.toISOString())',
  'query.set("status", "draft,scheduled,failed,send_unconfirmed")',
  "`/api/notification-jobs?${query.toString()}`"
]) {
  assert.ok(
    functionSource.includes(queryBoundary),
    `missing notification load query boundary: ${queryBoundary}`
  );
}
assert.equal(functionSource.split('query.set("limit", "300")').length - 1, 2);
const loadingIndex = functionSource.indexOf(
  'setNotificationJobsStatus({ state: "loading", message: "알림 기록을 불러오는 중입니다." })'
);
const queryIndex = functionSource.indexOf("const query = new URLSearchParams()");
const requestIndex = functionSource.indexOf(
  "`/api/notification-jobs?${query.toString()}`",
  queryIndex
);
const resultIndex = functionSource.indexOf(
  "if (result.ok && Array.isArray(result.notificationJobs))",
  requestIndex
);
assert.ok(
  functionSource.includes("if (!silent)") &&
    loadingIndex >= 0 &&
    queryIndex > loadingIndex &&
    requestIndex > queryIndex &&
    resultIndex > requestIndex
);
assert.ok(!appSource.includes("createNotificationJobsQueryString"));

console.log("notification job load query inventory fixtures passed");
