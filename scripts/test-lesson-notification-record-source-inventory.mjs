import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const selectorStart = appSource.indexOf(
  "function getLessonStudentRecord(lesson, student)"
);
const selectorEnd = appSource.indexOf(
  "\n  function buildLessonNotificationJob(",
  selectorStart
);
assert.ok(selectorStart >= 0 && selectorEnd > selectorStart);
const selectorSource = appSource.slice(selectorStart, selectorEnd);

assert.ok(
  selectorSource.includes(
    "return selectLessonStudentRecord({"
  )
);
assert.equal(
  selectorSource.split("recordsRef.current").length - 1,
  1
);
assert.equal(
  appSource.split("getLessonStudentRecord(lesson, student)").length - 1,
  4,
  "definition and three current-record consumers must remain"
);
for (const selectorBinding of [
  "createEmptyRecord,",
  "findRecord: findLessonStudentRecord,",
  "lesson,",
  "records: recordsRef.current,",
  "student"
]) {
  assert.ok(
    selectorSource.includes(selectorBinding),
    `missing current record selector binding: ${selectorBinding}`
  );
}
assert.ok(
  !appSource.includes(
    "findLessonStudentRecord(recordsRef.current, lesson, student) ?? createEmptyRecord(lesson, student)"
  )
);

const builderStart = appSource.indexOf(
  "function buildLessonNotificationJob(lesson, student, target, scheduledDate, mode)"
);
const builderEnd = appSource.indexOf(
  "\n  function updateLessonNotificationRecordStatuses(",
  builderStart
);
const builderWrapperSource = appSource.slice(builderStart, builderEnd);
assert.ok(
  builderWrapperSource.includes(
    "const record = getLessonStudentRecord(lesson, student)"
  )
);

const notificationMuteStart = appSource.indexOf(
  "function handleToggleStudentNotificationMute(lesson, student, target, reason = \"\")"
);
const notificationMuteEnd = appSource.indexOf(
  "\n  function syncPreviousHomeworkStatusFromAssignment(",
  notificationMuteStart
);
assert.ok(
  notificationMuteStart >= 0 &&
    notificationMuteEnd > notificationMuteStart
);
const notificationMuteSource = appSource.slice(
  notificationMuteStart,
  notificationMuteEnd
);
assert.ok(
  notificationMuteSource.includes(
    "const existingRecord = getLessonStudentRecord(lesson, student)"
  )
);

for (const forbiddenSideEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "setRecords",
  "setNotificationJobs",
  "localStorage",
  "persist",
  "reserve"
]) {
  assert.ok(
    !selectorSource.includes(forbiddenSideEffect),
    `record source selector crossed a side effect: ${forbiddenSideEffect}`
  );
}

console.log("lesson notification current record source inventory passed");
