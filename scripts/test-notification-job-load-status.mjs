import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createNotificationJobsReadyStatus } from "../src/domains/notifications/notificationJobLoadStatus.js";

for (const [input, expected] of [
  [
    {
      count: 2,
      lessonId: "lesson_TARGET",
      scope: "active"
    },
    {
      state: "ready",
      message: "현재 수업 알림 2건을 확인했습니다."
    }
  ],
  [
    {
      count: 3,
      lessonId: "lesson_TARGET",
      scope: "history"
    },
    {
      state: "ready",
      message: "현재 수업 알림 3건을 확인했습니다."
    }
  ],
  [
    {
      count: 0,
      lessonId: "",
      scope: "history"
    },
    {
      state: "ready",
      message: "최근 알림 기록 0건을 불러왔습니다."
    }
  ],
  [
    {
      count: 5,
      lessonId: "",
      scope: "active"
    },
    {
      state: "ready",
      message: "처리 중·확인 필요 알림 5건을 불러왔습니다."
    }
  ],
  [
    {
      count: 1,
      lessonId: "",
      scope: "unexpected"
    },
    {
      state: "ready",
      message: "처리 중·확인 필요 알림 1건을 불러왔습니다."
    }
  ]
]) {
  const inputSnapshot = structuredClone(input);
  assert.deepEqual(createNotificationJobsReadyStatus(input), expected);
  assert.deepEqual(input, inputSnapshot);
}
assert.deepEqual(createNotificationJobsReadyStatus(), {
  state: "ready",
  message: "처리 중·확인 필요 알림 0건을 불러왔습니다."
});

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobLoadStatus.js", import.meta.url),
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
  "lessonId,",
  "scope,",
  "silent"
]) {
  assert.ok(
    functionSource.includes(AppAdapterBoundary),
    `notification load adapter missing from App: ${AppAdapterBoundary}`
  );
}
for (const controllerBoundary of [
  "if (!silent)",
  'onStatus({ state: "loading", message: "알림 기록을 불러오는 중입니다." })',
  "createNotificationJobsReadyStatus({",
  "count: result.notificationJobs.length,",
  'onStatus({ state: "failed", message: error.message })'
]) assert.ok(controllerSource.includes(controllerBoundary), `notification status controller missing: ${controllerBoundary}`);
for (const removedInlineRule of [
  "`현재 수업 알림 ${result.notificationJobs.length}건을 확인했습니다.`",
  "`최근 알림 기록 ${result.notificationJobs.length}건을 불러왔습니다.`",
  "`처리 중·확인 필요 알림 ${result.notificationJobs.length}건을 불러왔습니다.`"
]) {
  assert.ok(!controllerSource.includes(removedInlineRule));
}
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
    `notification load status helper crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job load status fixtures passed");
