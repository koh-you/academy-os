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
    notificationJobId: "job_TARGET_CANCELED",
    lessonId: "lesson_TARGET",
    marker: "TARGET_CANCELED_OLD",
    status: "pending"
  },
  {
    notificationJobId: "job_TARGET_STALE",
    lessonId: "lesson_TARGET",
    marker: "TARGET_STALE_ACTIVE",
    status: "scheduled"
  },
  {
    notificationJobId: "job_CONTROL_TERMINAL",
    lessonId: "lesson_TARGET",
    marker: "CONTROL_SAME_LESSON_TERMINAL",
    status: "sent"
  },
  {
    notificationJobId: "job_CONTROL_OTHER_ACTIVE",
    lessonId: "lesson_CONTROL",
    marker: "CONTROL_OTHER_LESSON_ACTIVE",
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
    marker: "TARGET_CANCELED_NEW",
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
    currentJobs[3],
    currentJobs[4]
  ]
);
assert.deepEqual(
  mergeLessonNotificationJobLists({
    currentJobs,
    isActiveJob,
    lessonId: "lesson_TARGET"
  }),
  [currentJobs[3], currentJobs[4]]
);
assert.deepEqual(currentJobs, currentSnapshot);
assert.deepEqual(nextJobs, nextSnapshot);
assert.deepEqual(canceledJobs, canceledSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobState.js", import.meta.url),
  "utf8"
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
for (const functionStartText of [
  "async function applyLessonNotificationPlan(lessonId, mode)",
  "function scheduleLessonNotificationsAt(lesson, scheduledDate, mode ="
]) {
  const functionStart = appSource.indexOf(functionStartText);
  const functionEnd = appSource.indexOf(
    functionStartText.startsWith("async")
      ? "\n  function scheduleLessonNotificationsAt("
      : "\n  function handleScheduleLessonNotificationsAt(",
    functionStart
  );
  assert.ok(functionStart >= 0 && functionEnd > functionStart);
  const functionSource = appSource.slice(functionStart, functionEnd);
  for (const AppOwnedBoundary of [
    "const nextJobIds = new Set(nextJobs.map((job) => job.notificationJobId))",
    ".filter(isActiveNotificationJob)",
    "updatedAt: new Date().toISOString()",
    "setNotificationJobs((current) =>",
    "mergeLessonNotificationJobLists({",
    "isActiveJob: isActiveNotificationJob,",
    "lessonId: lesson.lessonId,"
  ]) {
    assert.ok(
      functionSource.includes(AppOwnedBoundary),
      `lesson merge boundary moved from App: ${AppOwnedBoundary}`
    );
  }
  assert.ok(!functionSource.includes("const replacedJobIds = new Set("));
}
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
    `lesson notification merge helper crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job lesson merge TARGET/CONTROL fixtures passed");
