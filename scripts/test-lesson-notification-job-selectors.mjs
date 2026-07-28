import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createLessonNotificationJobId,
  isActiveNotificationJobStatus
} from "../src/domains/lessons/lessonNotificationJobSelectors.js";

assert.equal(
  createLessonNotificationJobId(
    "lesson_TARGET",
    "student_TARGET",
    "parent"
  ),
  "lesson_comment_lesson_TARGET_student_TARGET_parent"
);
assert.equal(
  createLessonNotificationJobId("lesson_CONTROL", 123, "student"),
  "lesson_comment_lesson_CONTROL_123_student"
);
assert.equal(
  createLessonNotificationJobId(undefined, null, ""),
  "lesson_comment_undefined_null_"
);

for (const status of ["sent", "dry_run", "failed", "canceled"]) {
  const job = {
    notificationJobId: `job_${status}`,
    status
  };
  const snapshot = structuredClone(job);
  assert.equal(isActiveNotificationJobStatus(job), false, `${status} must be inactive`);
  assert.deepEqual(job, snapshot);
}

for (const status of [
  "scheduled",
  "queued",
  "pending_send",
  "send_unconfirmed",
  "draft",
  ""
]) {
  assert.equal(
    isActiveNotificationJobStatus({
      status
    }),
    true,
    `${status || "empty"} must stay active`
  );
}
assert.equal(isActiveNotificationJobStatus({}), true);
assert.equal(isActiveNotificationJobStatus(), true);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const selectorSource = await readFile(
  new URL("../src/domains/lessons/lessonNotificationJobSelectors.js", import.meta.url),
  "utf8"
);
for (const binding of [
  "createLessonNotificationJobId,",
  "isActiveNotificationJobStatus",
  "return createLessonNotificationJobId(lessonId, studentId, target)",
  "return isActiveNotificationJobStatus(job)",
  "lessonNotificationJobs.filter(isActiveNotificationJobStatus)",
  "createNotificationJobId: createLessonNotificationJobId"
]) {
  assert.ok(appSource.includes(binding), `missing lesson job selector binding: ${binding}`);
}
assert.ok(!appSource.includes("function createLessonNotificationJobId("));
assert.ok(!appSource.includes("function isActiveNotificationJobStatus("));

for (const sourceToken of [
  "const inactiveLessonNotificationJobStatuses",
  "export function createLessonNotificationJobId(",
  "`lesson_comment_${lessonId}_${studentId}_${target}`",
  "export function isActiveNotificationJobStatus(job = {})",
  "!inactiveLessonNotificationJobStatuses.has(job.status)"
]) {
  assert.ok(selectorSource.includes(sourceToken), `missing lesson job rule: ${sourceToken}`);
}

for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "new Date",
  "Date.now",
  "/api/",
  "Supabase",
  "Solapi",
  "localStorage",
  "setNotification"
]) {
  assert.ok(
    !selectorSource.includes(forbiddenSideEffect),
    `lesson notification job selector must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("lesson notification job selector TARGET/CONTROL fixtures passed");
