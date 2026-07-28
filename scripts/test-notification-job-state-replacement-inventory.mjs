import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

function applyExistingNotificationJobReplacement(currentJobs, replacementJobs) {
  return currentJobs.map(
    (job) =>
      replacementJobs.find(
        (replacementJob) =>
          replacementJob.notificationJobId === job.notificationJobId
      ) ?? job
  );
}

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
  },
  {
    notificationJobId: "job_OTHER",
    marker: "OTHER"
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
  },
  {
    notificationJobId: "job_NOT_PRESENT",
    marker: "NOT_PRESENT"
  }
];
const currentSnapshot = structuredClone(currentJobs);
const replacementSnapshot = structuredClone(replacementJobs);

assert.deepEqual(
  applyExistingNotificationJobReplacement(currentJobs, replacementJobs),
  [
    replacementJobs[0],
    currentJobs[1],
    replacementJobs[0],
    currentJobs[3]
  ]
);
const emptyReplacementResult = applyExistingNotificationJobReplacement(
  currentJobs,
  []
);
assert.deepEqual(emptyReplacementResult, currentJobs);
assert.notEqual(emptyReplacementResult, currentJobs);
assert.deepEqual(currentJobs, currentSnapshot);
assert.deepEqual(replacementJobs, replacementSnapshot);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const inlineReplacement =
  "current.map((job) => canceledJobs.find((canceledJob) => canceledJob.notificationJobId === job.notificationJobId) ?? job)";
assert.equal(appSource.split(inlineReplacement).length - 1, 3);

const cancelLessonStart = appSource.indexOf(
  "function cancelActiveLessonNotificationJobs(lesson, reason ="
);
const cancelLessonEnd = appSource.indexOf(
  "\n  function refreshLessonNotificationJobsForRecord(",
  cancelLessonStart
);
const cancelByIdsStart = appSource.indexOf(
  "function cancelNotificationJobs(jobIds, reason ="
);
const cancelByIdsEnd = appSource.indexOf(
  "\n  function isActiveNotificationJob(",
  cancelByIdsStart
);
const applyPlanStart = appSource.indexOf(
  "async function applyLessonNotificationPlan(lessonId, mode)"
);
const applyPlanEnd = appSource.indexOf(
  "\n  async function ",
  applyPlanStart + 1
);
assert.ok(cancelLessonStart >= 0 && cancelLessonEnd > cancelLessonStart);
assert.ok(cancelByIdsStart >= 0 && cancelByIdsEnd > cancelByIdsStart);
assert.ok(applyPlanStart >= 0 && applyPlanEnd > applyPlanStart);
const cancelLessonSource = appSource.slice(cancelLessonStart, cancelLessonEnd);
const cancelByIdsSource = appSource.slice(cancelByIdsStart, cancelByIdsEnd);
const applyPlanSource = appSource.slice(applyPlanStart, applyPlanEnd);

for (const [label, functionSource] of [
  ["lesson cancellation", cancelLessonSource],
  ["ID cancellation", cancelByIdsSource]
]) {
  const guardIndex = functionSource.indexOf(
    label === "lesson cancellation"
      ? "if (canceledJobs.length === 0) return []"
      : "if (!canceledJobs.length) return []"
  );
  const setterIndex = functionSource.indexOf("setNotificationJobs((current) =>");
  const persistIndex = functionSource.indexOf(
    "persistCanceledNotificationJob(notificationJob, reason)"
  );
  assert.ok(
    guardIndex >= 0 && setterIndex > guardIndex && persistIndex > setterIndex,
    `${label} guard, state, persistence order changed`
  );
  assert.ok(functionSource.includes(inlineReplacement));
}
const noneModeIndex = applyPlanSource.indexOf('if (effectiveMode === "none")');
const noneModeGuardIndex = applyPlanSource.indexOf("if (canceledJobs.length)");
const noneModeSetterIndex = applyPlanSource.indexOf(
  "setNotificationJobs((current) =>",
  noneModeGuardIndex
);
const noneModePersistIndex = applyPlanSource.indexOf(
  'persistCanceledNotificationJob(notificationJob, "알림톡 없음")',
  noneModeSetterIndex
);
assert.ok(
  noneModeIndex >= 0 &&
    noneModeGuardIndex > noneModeIndex &&
    noneModeSetterIndex > noneModeGuardIndex &&
    noneModePersistIndex > noneModeSetterIndex
);
assert.ok(applyPlanSource.includes(inlineReplacement));
assert.ok(!appSource.includes("replaceNotificationJobListRows"));

console.log(
  "notification job state replacement inventory TARGET/CONTROL fixtures passed"
);
