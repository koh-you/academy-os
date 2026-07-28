import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createNotificationJobsReadyStatus } from "../src/domains/notifications/notificationJobLoadStatus.js";

for (const [input, expectedMessage] of [
  [
    { count: 2, lessonId: "lesson_TARGET", scope: "history" },
    "현재 수업 알림 2건을 확인했습니다."
  ],
  [
    { count: 0, lessonId: "", scope: "history" },
    "최근 알림 기록 0건을 불러왔습니다."
  ],
  [
    { count: 4, lessonId: "", scope: "active" },
    "처리 중·확인 필요 알림 4건을 불러왔습니다."
  ]
]) {
  const inputSnapshot = structuredClone(input);
  assert.deepEqual(createNotificationJobsReadyStatus(input), {
    state: "ready",
    message: expectedMessage
  });
  assert.deepEqual(input, inputSnapshot);
}

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobLoadStatus.js", import.meta.url),
  "utf8"
);
const modulePath = 'from "../domains/notifications/notificationJobLoadStatus.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
assert.equal(
  appSource.split("createNotificationJobsReadyStatus({").length - 1,
  1
);
assert.equal(
  helperSource.split("export function createNotificationJobsReadyStatus(")
    .length - 1,
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
const loadingIndex = functionSource.indexOf(
  'setNotificationJobsStatus({ state: "loading", message: "알림 기록을 불러오는 중입니다." })'
);
const queryIndex = functionSource.indexOf("const query = new URLSearchParams()");
const requestIndex = functionSource.indexOf("getJsonWithTimeout(", queryIndex);
const resultIndex = functionSource.indexOf(
  "if (result.ok && Array.isArray(result.notificationJobs))",
  requestIndex
);
const directAssignmentIndex = functionSource.indexOf(
  "setNotificationJobs(result.notificationJobs)",
  resultIndex
);
const mergeIndex = functionSource.indexOf(
  "mergeNotificationJobsIntoState(result.notificationJobs)",
  directAssignmentIndex
);
const readySetterIndex = functionSource.indexOf(
  "setNotificationJobsStatus(",
  mergeIndex
);
const helperIndex = functionSource.indexOf(
  "createNotificationJobsReadyStatus({",
  readySetterIndex
);
const failedIndex = functionSource.indexOf(
  'setNotificationJobsStatus({ state: "failed", message: error.message })',
  helperIndex
);
assert.ok(
  functionSource.includes("if (!silent)") &&
  loadingIndex >= 0 &&
    queryIndex > loadingIndex &&
    requestIndex > queryIndex &&
    resultIndex > requestIndex &&
    directAssignmentIndex > resultIndex &&
    mergeIndex > directAssignmentIndex &&
    readySetterIndex > mergeIndex &&
    helperIndex > readySetterIndex &&
    failedIndex > helperIndex
);
for (const helperArgument of [
  "count: result.notificationJobs.length,",
  "lessonId,",
  "scope"
]) {
  assert.ok(
    functionSource.includes(helperArgument),
    `missing notification load status argument: ${helperArgument}`
  );
}
for (const removedInlineRule of [
  "`현재 수업 알림 ${result.notificationJobs.length}건을 확인했습니다.`",
  "`최근 알림 기록 ${result.notificationJobs.length}건을 불러왔습니다.`",
  "`처리 중·확인 필요 알림 ${result.notificationJobs.length}건을 불러왔습니다.`"
]) {
  assert.ok(!functionSource.includes(removedInlineRule));
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
    `notification load status closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job load status boundary closeout passed");
