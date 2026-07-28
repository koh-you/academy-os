import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { mergeLessonNotificationJobLists } from "../src/domains/notifications/notificationJobState.js";

function applyExistingLessonNotificationJobMerge({
  canceledJobs,
  currentJobs,
  isActiveJob,
  lessonId,
  nextJobs
}) {
  const nextJobIds = new Set(nextJobs.map((job) => job.notificationJobId));
  const replacedJobIds = new Set([
    ...nextJobIds,
    ...canceledJobs.map((job) => job.notificationJobId)
  ]);
  return [
    ...nextJobs,
    ...canceledJobs,
    ...currentJobs.filter(
      (job) =>
        !replacedJobIds.has(job.notificationJobId) &&
        !(job.lessonId === lessonId && isActiveJob(job))
    )
  ];
}

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
  },
  {
    notificationJobId: "job_CONTROL",
    lessonId: "lesson_CONTROL",
    marker: "CONTROL",
    status: "failed"
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

const existingResult = applyExistingLessonNotificationJobMerge({
  canceledJobs,
  currentJobs,
  isActiveJob,
  lessonId: "lesson_TARGET",
  nextJobs
});
assert.deepEqual(existingResult, [
  nextJobs[0],
  nextJobs[1],
  canceledJobs[0],
  currentJobs[3],
  currentJobs[4],
  currentJobs[5]
]);
assert.deepEqual(
  mergeLessonNotificationJobLists({
    canceledJobs,
    currentJobs,
    isActiveJob,
    lessonId: "lesson_TARGET",
    nextJobs
  }),
  existingResult
);
assert.deepEqual(currentJobs, currentSnapshot);
assert.deepEqual(nextJobs, nextSnapshot);
assert.deepEqual(canceledJobs, canceledSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const helperSource = await readFile(
  new URL("../src/domains/notifications/notificationJobState.js", import.meta.url),
  "utf8"
);
const fullLessonFilter =
  "!(job.lessonId === lesson.lessonId && isActiveNotificationJob(job))";
assert.equal(appSource.split(fullLessonFilter).length - 1, 0);
assert.equal(
  appSource.split(
    "const replacedJobIds = new Set([...nextJobIds, ...canceledJobs.map((job) => job.notificationJobId)])"
  ).length - 1,
  1
);
assert.equal(
  appSource.split("mergeLessonNotificationJobLists({").length - 1,
  2
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

for (const [label, functionSource] of [
  ["apply plan", applyPlanSource],
  ["manual schedule", scheduleSource]
]) {
  for (const mergeBoundary of [
    "const nextJobIds = new Set(nextJobs.map((job) => job.notificationJobId))",
    "setNotificationJobs((current) =>",
    "mergeLessonNotificationJobLists({",
    "canceledJobs,",
    "currentJobs: current,",
    "isActiveJob: isActiveNotificationJob,",
    "lessonId: lesson.lessonId,",
    "nextJobs"
  ]) {
    assert.ok(
      functionSource.includes(mergeBoundary),
      `missing ${label} merge boundary: ${mergeBoundary}`
    );
  }
}
const applySetterIndex = applyPlanSource.indexOf(
  "setNotificationJobs((current) =>"
);
const applyStatusIndex = applyPlanSource.indexOf(
  "updateLessonNotificationRecordStatuses(",
  applySetterIndex
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
    applyStatusIndex > applySetterIndex &&
    applyReserveIndex > applyStatusIndex &&
    applyCancelIndex > applyReserveIndex
);
const scheduleSetterIndex = scheduleSource.indexOf(
  "setNotificationJobs((current) =>"
);
const scheduleReserveIndex = scheduleSource.indexOf(
  "reserveLessonNotificationJobs(nextJobs,",
  scheduleSetterIndex
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
    scheduleReserveIndex > scheduleSetterIndex &&
    scheduleCancelIndex > scheduleReserveIndex &&
    scheduleStatusIndex > scheduleCancelIndex
);
for (const helperRule of [
  "export function mergeLessonNotificationJobLists({",
  "canceledJobs = [],",
  "currentJobs = [],",
  "isActiveJob = () => false,",
  'lessonId = "",',
  "nextJobs = []",
  "const replacedJobIds = new Set([",
  "...nextJobs.map((job) => job.notificationJobId)",
  "...canceledJobs.map((job) => job.notificationJobId)",
  "...currentJobs.filter(",
  "!(job.lessonId === lessonId && isActiveJob(job))"
]) {
  assert.ok(
    helperSource.includes(helperRule),
    `missing lesson merge helper rule: ${helperRule}`
  );
}

console.log(
  "notification job lesson merge inventory TARGET/CONTROL fixtures passed"
);
