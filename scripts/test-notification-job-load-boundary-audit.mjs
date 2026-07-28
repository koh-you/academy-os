import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createNotificationJobsQueryString } from "../src/domains/notifications/notificationJobLoadQuery.js";
import { createNotificationJobsReadyStatus } from "../src/domains/notifications/notificationJobLoadStatus.js";

const lessonInput = {
  count: 2,
  lessonId: "lesson TARGET/1",
  scope: "history"
};
const historyInput = {
  count: 0,
  lessonId: "",
  scheduledFrom: "2026-07-28T15:00:00.000Z",
  scheduledTo: "2026-07-29T15:00:00.000Z",
  scope: "history"
};
const activeInput = {
  count: 4,
  lessonId: "",
  scope: "active"
};
const inputsSnapshot = structuredClone([
  lessonInput,
  historyInput,
  activeInput
]);

assert.equal(
  createNotificationJobsQueryString(lessonInput),
  "lessonId=lesson+TARGET%2F1&limit=200"
);
assert.deepEqual(createNotificationJobsReadyStatus(lessonInput), {
  state: "ready",
  message: "현재 수업 알림 2건을 확인했습니다."
});
assert.equal(
  createNotificationJobsQueryString(historyInput),
  "limit=300&scheduledFrom=2026-07-28T15%3A00%3A00.000Z&scheduledTo=2026-07-29T15%3A00%3A00.000Z"
);
assert.deepEqual(createNotificationJobsReadyStatus(historyInput), {
  state: "ready",
  message: "최근 알림 기록 0건을 불러왔습니다."
});
assert.equal(
  createNotificationJobsQueryString(activeInput),
  "limit=300&status=draft%2Cscheduled%2Cfailed%2Csend_unconfirmed"
);
assert.deepEqual(createNotificationJobsReadyStatus(activeInput), {
  state: "ready",
  message: "처리 중·확인 필요 알림 4건을 불러왔습니다."
});
assert.deepEqual(
  [lessonInput, historyInput, activeInput],
  inputsSnapshot
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const querySource = await readFile(
  new URL("../src/domains/notifications/notificationJobLoadQuery.js", import.meta.url),
  "utf8"
);
const statusSource = await readFile(
  new URL("../src/domains/notifications/notificationJobLoadStatus.js", import.meta.url),
  "utf8"
);
assert.equal(
  appSource.split(
    'from "../domains/notifications/notificationJobLoadQuery.js"'
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    'from "../domains/notifications/notificationJobLoadStatus.js"'
  ).length - 1,
  1
);
assert.equal(
  querySource.split("export function createNotificationJobsQueryString(")
    .length - 1,
  1
);
assert.equal(
  statusSource.split("export function createNotificationJobsReadyStatus(")
    .length - 1,
  1
);
assert.equal(
  appSource.split("createNotificationJobsQueryString({")
    .length - 1,
  1
);
assert.equal(
  appSource.split("createNotificationJobsReadyStatus({").length - 1,
  1
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
  "const queryString = createNotificationJobsQueryString({",
  "scheduledFrom,",
  "scheduledTo,",
  "getJsonWithTimeout(",
  "`/api/notification-jobs?${queryString}`",
  "if (result.ok && Array.isArray(result.notificationJobs))",
  'if (scope === "active" && !lessonId)',
  "setNotificationJobs(result.notificationJobs)",
  "mergeNotificationJobsIntoState(result.notificationJobs)",
  "createNotificationJobsReadyStatus({",
  "count: result.notificationJobs.length,",
  'setNotificationJobsStatus({ state: "failed", message: error.message })'
]) {
  assert.ok(
    functionSource.includes(AppOwnedBoundary),
    `notification load audit lost App boundary: ${AppOwnedBoundary}`
  );
}
assert.ok(!functionSource.includes("new URLSearchParams()"));
assert.ok(!functionSource.includes("query.set("));
assert.ok(
  !functionSource.includes(
    "`현재 수업 알림 ${result.notificationJobs.length}건을 확인했습니다.`"
  )
);
for (const helperSource of [querySource, statusSource]) {
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
      `notification load aggregate audit found a side effect: ${forbiddenHelperEffect}`
    );
  }
}

console.log("notification job load boundary aggregate audit passed");
