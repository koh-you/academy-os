import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { mergeNotificationJobLists } from "../src/domains/notifications/notificationJobState.js";

function applyExistingStudentNotificationJobMerge({
  canceledJobs,
  currentJobs,
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
      (job) => !replacedJobIds.has(job.notificationJobId)
    )
  ];
}

const currentJobs = [
  {
    notificationJobId: "job_TARGET_NEXT",
    lessonId: "lesson_TARGET",
    studentId: "student_TARGET",
    marker: "TARGET_NEXT_OLD"
  },
  {
    notificationJobId: "job_TARGET_CANCELED",
    lessonId: "lesson_TARGET",
    studentId: "student_TARGET",
    marker: "TARGET_CANCELED_OLD"
  },
  {
    notificationJobId: "job_CONTROL_SAME_LESSON",
    lessonId: "lesson_TARGET",
    studentId: "student_CONTROL",
    marker: "CONTROL_SAME_LESSON_ACTIVE"
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
    marker: "TARGET_CANCELED_NEW"
  }
];
const currentSnapshot = structuredClone(currentJobs);
const nextSnapshot = structuredClone(nextJobs);
const canceledSnapshot = structuredClone(canceledJobs);
const incomingJobs = [...nextJobs, ...canceledJobs];

const existingResult = applyExistingStudentNotificationJobMerge({
  canceledJobs,
  currentJobs,
  nextJobs
});
assert.deepEqual(existingResult, [
  nextJobs[0],
  nextJobs[1],
  canceledJobs[0],
  currentJobs[2],
  currentJobs[3]
]);
assert.deepEqual(
  mergeNotificationJobLists(currentJobs, incomingJobs),
  existingResult
);
assert.deepEqual(currentJobs, currentSnapshot);
assert.deepEqual(nextJobs, nextSnapshot);
assert.deepEqual(canceledJobs, canceledSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const functionStart = appSource.indexOf(
  "function refreshLessonNotificationJobsForRecord(record, lessonForRecord = null)"
);
const functionEnd = appSource.indexOf(
  "\n  function cancelNotificationJobs(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
for (const existingBoundary of [
  "const nextJobs = buildLessonNotificationJobs(lesson, [student], scheduledDate, planMode)",
  "const nextJobIds = new Set(nextJobs.map((job) => job.notificationJobId))",
  "job.lessonId === lesson.lessonId && job.studentId === student.studentId && !nextJobIds.has(job.notificationJobId)",
  ".filter(isActiveNotificationJob)",
  "updatedAt: new Date().toISOString()",
  "const replacedJobIds = new Set([...nextJobIds, ...canceledJobs.map((job) => job.notificationJobId)])",
  "setNotificationJobs((current) => [",
  "...nextJobs,",
  "...canceledJobs,",
  "...current.filter((job) => !replacedJobIds.has(job.notificationJobId))"
]) {
  assert.ok(
    functionSource.includes(existingBoundary),
    `missing student notification merge boundary: ${existingBoundary}`
  );
}
const setterIndex = functionSource.indexOf("setNotificationJobs((current) => [");
const reserveIndex = functionSource.indexOf(
  'reserveLessonNotificationJob(notificationJob, "수업일지 학생별 예약 갱신")',
  setterIndex
);
const cancelIndex = functionSource.indexOf(
  'persistCanceledNotificationJob(notificationJob, "알림 제외")',
  reserveIndex
);
assert.ok(
  setterIndex >= 0 && reserveIndex > setterIndex && cancelIndex > reserveIndex
);
assert.equal(
  appSource.split(
    "mergeNotificationJobLists(current, [...nextJobs, ...canceledJobs])"
  ).length - 1,
  0
);

console.log(
  "notification job student merge inventory TARGET/CONTROL fixtures passed"
);
