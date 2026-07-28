import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createNotificationJobReconcilePayload } from "../src/domains/notifications/notificationJobReconcilePayload.js";
import {
  createNotificationJobReconcileSavedStates,
  mergeNotificationJobReconcileRecords
} from "../src/domains/notifications/notificationJobReconcileRecordState.js";

const notificationJobIds = ["job_TARGET", "job_CONTROL"];
const payloadInput = {
  date: "2026-07-28",
  lessonId: "lesson_TARGET",
  notificationJobIds,
  scheduledFrom: "2026-07-28T00:00:00.000Z",
  scheduledTo: "2026-07-29T00:00:00.000Z"
};
const currentRecords = [
  { lessonStudentRecordId: "record_TARGET", marker: "TARGET_OLD" },
  { lessonStudentRecordId: "record_CONTROL", marker: "CONTROL" }
];
const responseRecords = [
  { lessonStudentRecordId: "record_TARGET", marker: "TARGET_NEW" },
  { lessonStudentRecordId: "record_NEW", marker: "NEW" }
];
const inputSnapshot = structuredClone({
  currentRecords,
  payloadInput,
  responseRecords
});

const payload = createNotificationJobReconcilePayload(payloadInput);
const nextRecords = mergeNotificationJobReconcileRecords({
  currentRecords,
  records: responseRecords,
  upsertRecord(records, record) {
    const matchingIndex = records.findIndex(
      (item) =>
        item.lessonStudentRecordId === record.lessonStudentRecordId
    );
    return matchingIndex < 0
      ? [...records, record]
      : records.map((item, index) => (index === matchingIndex ? record : item));
  }
});
const savedStates =
  createNotificationJobReconcileSavedStates(responseRecords);

assert.deepEqual(payload, {
  ...payloadInput,
  limit: 500
});
assert.equal(payload.notificationJobIds, notificationJobIds);
assert.deepEqual(nextRecords, [
  responseRecords[0],
  currentRecords[1],
  responseRecords[1]
]);
assert.equal(nextRecords[1], currentRecords[1]);
assert.deepEqual(savedStates, {
  record_TARGET: "saved",
  record_NEW: "saved"
});
assert.deepEqual(
  { currentRecords, payloadInput, responseRecords },
  inputSnapshot
);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const payloadSource = await readFile(
  new URL(
    "../src/domains/notifications/notificationJobReconcilePayload.js",
    import.meta.url
  ),
  "utf8"
);
const recordStateSource = await readFile(
  new URL(
    "../src/domains/notifications/notificationJobReconcileRecordState.js",
    import.meta.url
  ),
  "utf8"
);

for (const modulePath of [
  'from "../domains/notifications/notificationJobReconcilePayload.js"',
  'from "../domains/notifications/notificationJobReconcileRecordState.js"'
]) {
  assert.equal(appSource.split(modulePath).length - 1, 1);
}
assert.equal(payloadSource.split("export function ").length - 1, 1);
assert.equal(recordStateSource.split("export function ").length - 1, 2);
assert.equal(
  appSource.split("createNotificationJobReconcilePayload({").length - 1,
  1
);
assert.equal(
  appSource.split("mergeNotificationJobReconcileRecords({").length - 1,
  1
);
assert.equal(
  appSource.split(
    "createNotificationJobReconcileSavedStates(result.records)"
  ).length - 1,
  1
);

const functionStart = appSource.indexOf(
  'async function handleReconcileSolapiNotificationResults({ lessonId = "", date = "", notificationJobIds = [], scheduledFrom = "", scheduledTo = "" } = {})'
);
const functionEnd = appSource.indexOf(
  "\n  async function handleCancelNotificationJob(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
const orderedBoundaries = [
  "const result = await postJsonWithTimeout(",
  '"/api/notification-jobs/reconcile-solapi"',
  "createNotificationJobReconcilePayload({",
  "90000",
  "mergeNotificationJobsIntoState(result.notificationJobs ?? [])",
  "if (Array.isArray(result.records) && result.records.length)",
  "const nextRecords = mergeNotificationJobReconcileRecords({",
  "upsertRecord: upsertLessonStudentRecord",
  "recordsRef.current = nextRecords",
  "setRecords(nextRecords)",
  "writeStorageValue(window.localStorage",
  "const savedStates = createNotificationJobReconcileSavedStates(result.records)",
  "if (Object.keys(savedStates).length)",
  "setSaveStates((currentStates)",
  "return result"
];
let previousIndex = -1;
for (const boundary of orderedBoundaries) {
  const boundaryIndex = functionSource.indexOf(boundary, previousIndex + 1);
  assert.ok(
    boundaryIndex > previousIndex,
    `reconcile aggregate boundary order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.equal(
  appSource.split(
    "onReconcileSolapiNotificationResults={handleReconcileSolapiNotificationResults}"
  ).length - 1,
  3
);
assert.ok(!functionSource.includes("new URLSearchParams()"));
assert.ok(!functionSource.includes("result.records.reduce("));
assert.ok(!functionSource.includes("Object.fromEntries("));

for (const helperSource of [payloadSource, recordStateSource]) {
  for (const forbiddenHelperEffect of [
    "useState",
    "useEffect",
    "fetch(",
    "postJson",
    "/api/",
    "localStorage",
    "setNotificationJobs",
    "setRecords",
    "setSaveStates",
    "notification_jobs",
    "Solapi",
    "new Date",
    "Date.now",
    "Promise.all"
  ]) {
    assert.ok(
      !helperSource.includes(forbiddenHelperEffect),
      `reconcile aggregate audit found a helper side effect: ${forbiddenHelperEffect}`
    );
  }
}

const nextCandidateStart = appSource.indexOf(
  "function saveGeneratedLessonsFromPlan(planItems)"
);
const nextCandidateEnd = appSource.indexOf(
  "\n  function handleApplyGeneratedLessons()",
  nextCandidateStart
);
assert.ok(nextCandidateStart >= 0 && nextCandidateEnd > nextCandidateStart);
const nextCandidateSource = appSource.slice(
  nextCandidateStart,
  nextCandidateEnd
);
for (const candidateRule of [
  "const lessonsToSave = planItems",
  '.filter((item) => item.status === "create" || item.status === "update")',
  ".map((item) => item.lesson)",
  "saveGeneratedLessons(lessonsToSave)"
]) {
  assert.ok(
    nextCandidateSource.includes(candidateRule),
    `next pure candidate changed: ${candidateRule}`
  );
}

console.log("notification job reconcile boundary aggregate audit passed");
