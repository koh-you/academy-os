import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { mergeNotificationJobLists } from "../src/domains/notifications/notificationJobState.js";

const currentJobs = [
  {
    notificationJobId: "job_TARGET_NEXT",
    lessonId: "lesson_TARGET",
    studentId: "student_TARGET",
    marker: "TARGET_NEXT_OLD"
  },
  {
    notificationJobId: "job_CONTROL_SAME_LESSON",
    lessonId: "lesson_TARGET",
    studentId: "student_CONTROL",
    marker: "CONTROL_SAME_LESSON"
  },
  {
    notificationJobId: "job_CONTROL_OTHER_LESSON",
    lessonId: "lesson_CONTROL",
    studentId: "student_TARGET",
    marker: "CONTROL_OTHER_LESSON"
  }
];
const nextJobs = [
  {
    notificationJobId: "job_TARGET_NEXT",
    lessonId: "lesson_TARGET",
    studentId: "student_TARGET",
    marker: "TARGET_NEXT_NEW_A"
  },
  {
    notificationJobId: "job_TARGET_NEXT",
    lessonId: "lesson_TARGET",
    studentId: "student_TARGET",
    marker: "TARGET_NEXT_NEW_B"
  }
];
const canceledJobs = [
  {
    notificationJobId: "job_TARGET_CANCELED",
    lessonId: "lesson_TARGET",
    studentId: "student_TARGET",
    marker: "TARGET_CANCELED"
  }
];
const currentSnapshot = structuredClone(currentJobs);
const nextSnapshot = structuredClone(nextJobs);
const canceledSnapshot = structuredClone(canceledJobs);

assert.deepEqual(
  mergeNotificationJobLists(currentJobs, [...nextJobs, ...canceledJobs]),
  [
    nextJobs[0],
    nextJobs[1],
    canceledJobs[0],
    currentJobs[1],
    currentJobs[2]
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
assert.equal(importSource.split("mergeNotificationJobLists").length - 1, 1);
assert.equal(
  helperSource.split("export function mergeNotificationJobLists(").length - 1,
  1
);
assert.equal(
  appSource.split(
    "mergeNotificationJobLists(current, [...nextJobs, ...canceledJobs])"
  ).length - 1,
  1
);

const functionStart = appSource.indexOf(
  "function refreshLessonNotificationJobsForRecord(record, lessonForRecord = null)"
);
const functionEnd = appSource.indexOf(
  "\n  function cancelNotificationJobs(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
for (const AppOwnedBoundary of [
  "job.lessonId === lesson.lessonId && job.studentId === student.studentId && !nextJobIds.has(job.notificationJobId)",
  ".filter(isLessonCommentNotificationJob)",
  ".filter(isActiveNotificationJob)",
  "updatedAt: new Date().toISOString()",
  "setNotificationJobs((current) =>",
  "mergeNotificationJobLists(current, [...nextJobs, ...canceledJobs])",
  'reserveLessonNotificationJob(notificationJob, "수업일지 학생별 예약 갱신")',
  'persistCanceledNotificationJob(notificationJob, "알림 제외")'
]) {
  assert.ok(
    functionSource.includes(AppOwnedBoundary),
    `missing student merge closeout boundary: ${AppOwnedBoundary}`
  );
}
assert.ok(!functionSource.includes("const replacedJobIds = new Set("));
assert.ok(!functionSource.includes("current.filter("));
const setterIndex = functionSource.indexOf("setNotificationJobs((current) =>");
const helperIndex = functionSource.indexOf(
  "mergeNotificationJobLists(current, [...nextJobs, ...canceledJobs])",
  setterIndex
);
const reserveIndex = functionSource.indexOf(
  'reserveLessonNotificationJob(notificationJob, "수업일지 학생별 예약 갱신")',
  helperIndex
);
const cancelIndex = functionSource.indexOf(
  'persistCanceledNotificationJob(notificationJob, "알림 제외")',
  reserveIndex
);
assert.ok(
  setterIndex >= 0 &&
    helperIndex > setterIndex &&
    reserveIndex > helperIndex &&
    cancelIndex > reserveIndex
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
    `student notification merge closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("notification job student merge boundary closeout passed");
