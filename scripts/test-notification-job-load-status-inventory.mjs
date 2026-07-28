import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

function createExistingNotificationJobsReadyStatus({
  count,
  lessonId,
  scope
}) {
  return {
    state: "ready",
    message: lessonId
      ? `현재 수업 알림 ${count}건을 확인했습니다.`
      : scope === "history"
        ? `최근 알림 기록 ${count}건을 불러왔습니다.`
        : `처리 중·확인 필요 알림 ${count}건을 불러왔습니다.`
  };
}

assert.deepEqual(
  createExistingNotificationJobsReadyStatus({
    count: 2,
    lessonId: "lesson_TARGET",
    scope: "active"
  }),
  {
    state: "ready",
    message: "현재 수업 알림 2건을 확인했습니다."
  }
);
assert.deepEqual(
  createExistingNotificationJobsReadyStatus({
    count: 3,
    lessonId: "lesson_TARGET",
    scope: "history"
  }),
  {
    state: "ready",
    message: "현재 수업 알림 3건을 확인했습니다."
  }
);
assert.deepEqual(
  createExistingNotificationJobsReadyStatus({
    count: 0,
    lessonId: "",
    scope: "history"
  }),
  {
    state: "ready",
    message: "최근 알림 기록 0건을 불러왔습니다."
  }
);
assert.deepEqual(
  createExistingNotificationJobsReadyStatus({
    count: 5,
    lessonId: "",
    scope: "active"
  }),
  {
    state: "ready",
    message: "처리 중·확인 필요 알림 5건을 불러왔습니다."
  }
);
assert.deepEqual(
  createExistingNotificationJobsReadyStatus({
    count: 1,
    lessonId: "",
    scope: "unexpected"
  }),
  {
    state: "ready",
    message: "처리 중·확인 필요 알림 1건을 불러왔습니다."
  }
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

for (const statusBoundary of [
  "if (!silent)",
  'setNotificationJobsStatus({ state: "loading", message: "알림 기록을 불러오는 중입니다." })',
  "if (result.ok && Array.isArray(result.notificationJobs))",
  "setNotificationJobsStatus({",
  'state: "ready"',
  "message: lessonId",
  "? `현재 수업 알림 ${result.notificationJobs.length}건을 확인했습니다.`",
  ': scope === "history"',
  "? `최근 알림 기록 ${result.notificationJobs.length}건을 불러왔습니다.`",
  ": `처리 중·확인 필요 알림 ${result.notificationJobs.length}건을 불러왔습니다.`",
  'setNotificationJobsStatus({ state: "failed", message: error.message })'
]) {
  assert.ok(
    functionSource.includes(statusBoundary),
    `missing notification load status boundary: ${statusBoundary}`
  );
}
const resultIndex = functionSource.indexOf(
  "if (result.ok && Array.isArray(result.notificationJobs))"
);
const assignmentIndex = functionSource.indexOf(
  "setNotificationJobs(result.notificationJobs)",
  resultIndex
);
const mergeIndex = functionSource.indexOf(
  "mergeNotificationJobsIntoState(result.notificationJobs)",
  assignmentIndex
);
const readyStatusIndex = functionSource.indexOf(
  "setNotificationJobsStatus({",
  mergeIndex
);
assert.ok(
  resultIndex >= 0 &&
    assignmentIndex > resultIndex &&
    mergeIndex > assignmentIndex &&
    readyStatusIndex > mergeIndex
);
assert.ok(!appSource.includes("createNotificationJobsReadyStatus"));

console.log("notification job load status inventory fixtures passed");
