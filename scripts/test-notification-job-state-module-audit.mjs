import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  mergeLessonNotificationJobLists,
  mergeNotificationJobLists,
  replaceNotificationJobListRows,
  selectValidNotificationJobs,
  upsertNotificationJobList
} from "../src/domains/notifications/notificationJobState.js";

const isActiveJob = (job) => job.status === "scheduled";
const currentJobs = [
  {
    notificationJobId: "job_TARGET",
    lessonId: "lesson_TARGET",
    marker: "TARGET_OLD",
    status: "scheduled"
  },
  {
    notificationJobId: "job_CONTROL",
    lessonId: "lesson_CONTROL",
    marker: "CONTROL",
    status: "scheduled"
  },
  {
    notificationJobId: "job_TERMINAL",
    lessonId: "lesson_TARGET",
    marker: "TERMINAL_CONTROL",
    status: "sent"
  }
];
const targetJob = {
  notificationJobId: "job_TARGET",
  lessonId: "lesson_TARGET",
  marker: "TARGET_NEW",
  status: "scheduled"
};
const canceledJob = {
  notificationJobId: "job_CANCELED",
  lessonId: "lesson_TARGET",
  marker: "TARGET_CANCELED",
  status: "canceled"
};
const currentSnapshot = structuredClone(currentJobs);
const targetSnapshot = structuredClone(targetJob);

assert.deepEqual(
  selectValidNotificationJobs([null, targetJob, {}, canceledJob]),
  [targetJob, canceledJob]
);
assert.deepEqual(upsertNotificationJobList(currentJobs, targetJob), [
  targetJob,
  currentJobs[1],
  currentJobs[2]
]);
assert.deepEqual(
  mergeNotificationJobLists(currentJobs, [targetJob, canceledJob]),
  [targetJob, canceledJob, currentJobs[1], currentJobs[2]]
);
assert.deepEqual(
  replaceNotificationJobListRows(currentJobs, [targetJob]),
  [targetJob, currentJobs[1], currentJobs[2]]
);
assert.deepEqual(
  mergeLessonNotificationJobLists({
    canceledJobs: [canceledJob],
    currentJobs,
    isActiveJob,
    lessonId: "lesson_TARGET",
    nextJobs: [targetJob]
  }),
  [targetJob, canceledJob, currentJobs[1], currentJobs[2]]
);
assert.deepEqual(currentJobs, currentSnapshot);
assert.deepEqual(targetJob, targetSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobState.js", import.meta.url),
  "utf8"
);
const refreshControllerSource = await readFile(
  new URL(
    "../src/domains/notifications/notificationJobsRefreshController.js",
    import.meta.url
  ),
  "utf8"
);
const modulePath = 'from "../domains/notifications/notificationJobState.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
for (const helperName of [
  "upsertNotificationJobList",
  "selectValidNotificationJobs",
  "mergeNotificationJobLists",
  "mergeLessonNotificationJobLists",
  "replaceNotificationJobListRows"
]) {
  assert.equal(
    helperSource.split(`export function ${helperName}(`).length - 1,
    1,
    `unexpected export count for ${helperName}`
  );
}
assert.equal((helperSource.match(/export function /g) ?? []).length, 5);
assert.equal(appSource.split("setNotificationJobs(").length - 1, 11);
assert.equal(
  appSource.split("setNotificationJobs(nextJobs)").length - 1,
  1
);
assert.equal(
  appSource.split("selectValidNotificationJobs(nextJobs)").length - 1,
  1
);
assert.equal(
  appSource.split("mergeNotificationJobLists(current, validJobs)").length - 1,
  1
);
assert.equal(
  appSource.split(
    "mergeNotificationJobLists(current, [...nextJobs, ...canceledJobs])"
  ).length - 1,
  1
);
assert.equal(
  appSource.split("mergeLessonNotificationJobLists({").length - 1,
  2
);
assert.equal(
  appSource.split("replaceNotificationJobListRows(current, canceledJobs)")
    .length - 1,
  3
);
assert.equal(
  appSource.split("upsertNotificationJobList(current, notificationJob)")
    .length - 1,
  2
);
assert.equal(
  appSource.split("upsertNotificationJobList(current, failedJob)").length - 1,
  1
);

const adapterStart = appSource.indexOf("function getNotificationJobsRefreshController()");
const adapterEnd = appSource.indexOf(
  "\n  function applyNotificationJobsReconcileResult(",
  adapterStart
);
assert.ok(adapterStart >= 0 && adapterEnd > adapterStart);
const adapterSource = appSource.slice(adapterStart, adapterEnd);
const replaceIndex = adapterSource.indexOf("if (replace)");
const directAssignmentIndex = adapterSource.indexOf(
  "setNotificationJobs(nextJobs)",
  replaceIndex
);
const mergeIndex = adapterSource.indexOf(
  "mergeNotificationJobsIntoState(nextJobs)",
  directAssignmentIndex
);
assert.ok(
    refreshControllerSource.includes("onJobs({") &&
    refreshControllerSource.includes('replace: scope === "active" && !lessonId') &&
    replaceIndex >= 0 &&
    directAssignmentIndex > replaceIndex &&
    mergeIndex > directAssignmentIndex
);

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
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `notification job state module audit found a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job state module aggregate audit passed");
