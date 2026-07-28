import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { mergeLessonNotificationJobLists } from "../src/domains/notifications/notificationJobState.js";

const isActiveJob = (job) => ["pending", "scheduled"].includes(job.status);
const currentJobs = [
  {
    notificationJobId: "job_TARGET_NEXT",
    lessonId: "lesson_TARGET",
    marker: "TARGET_NEXT_OLD",
    status: "scheduled"
  },
  {
    notificationJobId: "job_TARGET_STALE",
    lessonId: "lesson_TARGET",
    marker: "TARGET_STALE",
    status: "pending"
  },
  {
    notificationJobId: "job_CONTROL_TERMINAL",
    lessonId: "lesson_TARGET",
    marker: "CONTROL_TERMINAL",
    status: "sent"
  },
  {
    notificationJobId: "job_CONTROL_OTHER",
    lessonId: "lesson_CONTROL",
    marker: "CONTROL_OTHER",
    status: "scheduled"
  }
];
const nextJobs = [
  {
    notificationJobId: "job_TARGET_NEXT",
    lessonId: "lesson_TARGET",
    marker: "TARGET_NEXT_NEW_A",
    status: "scheduled"
  },
  {
    notificationJobId: "job_TARGET_NEXT",
    lessonId: "lesson_TARGET",
    marker: "TARGET_NEXT_NEW_B",
    status: "scheduled"
  }
];
const canceledJobs = [
  {
    notificationJobId: "job_TARGET_CANCELED",
    lessonId: "lesson_TARGET",
    marker: "TARGET_CANCELED",
    status: "canceled"
  }
];
const currentSnapshot = structuredClone(currentJobs);
const nextSnapshot = structuredClone(nextJobs);
const canceledSnapshot = structuredClone(canceledJobs);

assert.deepEqual(
  mergeLessonNotificationJobLists({
    canceledJobs,
    currentJobs,
    isActiveJob,
    lessonId: "lesson_TARGET",
    nextJobs
  }),
  [
    nextJobs[0],
    nextJobs[1],
    canceledJobs[0],
    currentJobs[2],
    currentJobs[3]
  ]
);
assert.deepEqual(currentJobs, currentSnapshot);
assert.deepEqual(nextJobs, nextSnapshot);
assert.deepEqual(canceledJobs, canceledSnapshot);

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
assert.equal(importSource.split("mergeLessonNotificationJobLists").length - 1, 1);
assert.equal(
  helperSource.split("export function mergeLessonNotificationJobLists(").length - 1,
  1
);
assert.equal(
  appSource.split("mergeLessonNotificationJobLists({").length - 1,
  2
);
assert.equal(
  appSource.split(
    "!(job.lessonId === lesson.lessonId && isActiveNotificationJob(job))"
  ).length - 1,
  0
);

const applyPlanStart = appSource.indexOf(
  "async function applyLessonNotificationPlan(lessonId, mode)"
);
const applyPlanEnd = appSource.indexOf(
  "\n  function scheduleLessonNotificationsAt(",
  applyPlanStart
);
const scheduleStart = appSource.indexOf(
  "function scheduleLessonNotificationsAt(lesson, scheduledDate, mode ="
);
const scheduleEnd = appSource.indexOf(
  "\n  function handleScheduleLessonNotificationsAt(",
  scheduleStart
);
assert.ok(applyPlanStart >= 0 && applyPlanEnd > applyPlanStart);
assert.ok(scheduleStart >= 0 && scheduleEnd > scheduleStart);
const applyPlanSource = appSource.slice(applyPlanStart, applyPlanEnd);
const scheduleSource = appSource.slice(scheduleStart, scheduleEnd);

for (const functionSource of [applyPlanSource, scheduleSource]) {
  assert.equal(
    functionSource.split("mergeLessonNotificationJobLists({").length - 1,
    1
  );
  for (const AppOwnedArgument of [
    "canceledJobs,",
    "currentJobs: current,",
    "isActiveJob: isActiveNotificationJob,",
    "lessonId: lesson.lessonId,",
    "nextJobs"
  ]) {
    assert.ok(
      functionSource.includes(AppOwnedArgument),
      `missing App-owned lesson merge argument: ${AppOwnedArgument}`
    );
  }
  assert.ok(!functionSource.includes("const replacedJobIds = new Set("));
}
const applySetterIndex = applyPlanSource.indexOf(
  "setNotificationJobs((current) =>"
);
const applyHelperIndex = applyPlanSource.indexOf(
  "mergeLessonNotificationJobLists({",
  applySetterIndex
);
const applyStatusIndex = applyPlanSource.indexOf(
  "updateLessonNotificationRecordStatuses(",
  applyHelperIndex
);
const applyReserveIndex = applyPlanSource.indexOf(
  "await reserveLessonNotificationJobs(",
  applyStatusIndex
);
const applyCancelIndex = applyPlanSource.indexOf(
  "persistCanceledNotificationJob(notificationJob,",
  applyReserveIndex
);
assert.ok(
  applySetterIndex >= 0 &&
    applyHelperIndex > applySetterIndex &&
    applyStatusIndex > applyHelperIndex &&
    applyReserveIndex > applyStatusIndex &&
    applyCancelIndex > applyReserveIndex
);
const scheduleSetterIndex = scheduleSource.indexOf(
  "setNotificationJobs((current) =>"
);
const scheduleHelperIndex = scheduleSource.indexOf(
  "mergeLessonNotificationJobLists({",
  scheduleSetterIndex
);
const scheduleReserveIndex = scheduleSource.indexOf(
  "reserveLessonNotificationJobs(nextJobs,",
  scheduleHelperIndex
);
const scheduleCancelIndex = scheduleSource.indexOf(
  "persistCanceledNotificationJob(notificationJob,",
  scheduleReserveIndex
);
const scheduleStatusIndex = scheduleSource.indexOf(
  "updateLessonNotificationRecordStatuses(",
  scheduleCancelIndex
);
assert.ok(
  scheduleSetterIndex >= 0 &&
    scheduleHelperIndex > scheduleSetterIndex &&
    scheduleReserveIndex > scheduleHelperIndex &&
    scheduleCancelIndex > scheduleReserveIndex &&
    scheduleStatusIndex > scheduleCancelIndex
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
    `lesson notification merge closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job lesson merge boundary closeout passed");
