import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { replaceNotificationJobListRows } from "../src/domains/notifications/notificationJobState.js";

const currentJobs = [
  {
    notificationJobId: "job_TARGET",
    marker: "TARGET_OLD_A"
  },
  {
    notificationJobId: "job_CONTROL",
    marker: "CONTROL"
  },
  {
    notificationJobId: "job_TARGET",
    marker: "TARGET_OLD_B"
  }
];
const replacementJobs = [
  {
    notificationJobId: "job_TARGET",
    marker: "TARGET_NEW_FIRST"
  },
  {
    notificationJobId: "job_TARGET",
    marker: "TARGET_NEW_SECOND"
  }
];
const currentSnapshot = structuredClone(currentJobs);
const replacementSnapshot = structuredClone(replacementJobs);

assert.deepEqual(
  replaceNotificationJobListRows(currentJobs, replacementJobs),
  [replacementJobs[0], currentJobs[1], replacementJobs[0]]
);
assert.deepEqual(currentJobs, currentSnapshot);
assert.deepEqual(replacementJobs, replacementSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobState.js", import.meta.url),
  "utf8"
);
const modulePath = 'from "../domains/notifications/notificationJobState.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
const importEnd = appSource.indexOf(modulePath);
const importStart = appSource.lastIndexOf("import {", importEnd);
assert.ok(importStart >= 0 && importEnd > importStart);
const importSource = appSource.slice(importStart, importEnd + modulePath.length);
assert.equal(importSource.split("replaceNotificationJobListRows").length - 1, 1);
assert.equal(
  helperSource.split("export function replaceNotificationJobListRows(").length - 1,
  1
);
assert.equal(
  appSource.split("replaceNotificationJobListRows(current, canceledJobs)").length - 1,
  3
);
assert.equal(
  appSource.split(
    "current.map((job) => canceledJobs.find((canceledJob) => canceledJob.notificationJobId === job.notificationJobId) ?? job)"
  ).length - 1,
  0
);

for (const [functionStartText, functionEndText, guardText, persistText] of [
  [
    "function cancelActiveLessonNotificationJobs(lesson, reason =",
    "\n  function refreshLessonNotificationJobsForRecord(",
    "if (canceledJobs.length === 0) return []",
    "persistCanceledNotificationJob(notificationJob, reason)"
  ],
  [
    "function cancelNotificationJobs(jobIds, reason =",
    "\n  function isActiveNotificationJob(",
    "if (!canceledJobs.length) return []",
    "persistCanceledNotificationJob(notificationJob, reason)"
  ]
]) {
  const functionStart = appSource.indexOf(functionStartText);
  const functionEnd = appSource.indexOf(functionEndText, functionStart);
  assert.ok(functionStart >= 0 && functionEnd > functionStart);
  const functionSource = appSource.slice(functionStart, functionEnd);
  const guardIndex = functionSource.indexOf(guardText);
  const setterIndex = functionSource.indexOf("setNotificationJobs((current) =>");
  const helperIndex = functionSource.indexOf(
    "replaceNotificationJobListRows(current, canceledJobs)"
  );
  const persistIndex = functionSource.indexOf(persistText);
  assert.ok(
    guardIndex >= 0 &&
      setterIndex > guardIndex &&
      helperIndex > setterIndex &&
      persistIndex > helperIndex
  );
}

const applyPlanStart = appSource.indexOf(
  "async function applyLessonNotificationPlan(lessonId, mode)"
);
const applyPlanEnd = appSource.indexOf("\n  async function ", applyPlanStart + 1);
assert.ok(applyPlanStart >= 0 && applyPlanEnd > applyPlanStart);
const applyPlanSource = appSource.slice(applyPlanStart, applyPlanEnd);
const noneModeIndex = applyPlanSource.indexOf('if (effectiveMode === "none")');
const guardIndex = applyPlanSource.indexOf("if (canceledJobs.length)");
const setterIndex = applyPlanSource.indexOf(
  "setNotificationJobs((current) =>",
  guardIndex
);
const helperIndex = applyPlanSource.indexOf(
  "replaceNotificationJobListRows(current, canceledJobs)",
  setterIndex
);
const recordStatusIndex = applyPlanSource.indexOf(
  'updateLessonNotificationRecordStatuses(lesson, "알림톡 없음")',
  helperIndex
);
const persistIndex = applyPlanSource.indexOf(
  'persistCanceledNotificationJob(notificationJob, "알림톡 없음")',
  recordStatusIndex
);
assert.ok(
  noneModeIndex >= 0 &&
    guardIndex > noneModeIndex &&
    setterIndex > guardIndex &&
    helperIndex > setterIndex &&
    recordStatusIndex > helperIndex &&
    persistIndex > recordStatusIndex
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
    `notification job replacement closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job state replacement boundary closeout passed");
