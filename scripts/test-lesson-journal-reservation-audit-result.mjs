import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalReservationAuditResult } from "../src/domains/lessons/lessonJournalReservationAuditResult.js";

const targetJobs = [
  { notificationJobId: "job_TARGET" },
  { notificationJobId: "job_CONTROL" }
];
const result = { notificationJobs: targetJobs };
const snapshot = structuredClone(result);
const audit = createLessonJournalReservationAuditResult(result);

assert.deepEqual(audit, {
  message: "OS 예약 2건",
  osJobs: targetJobs,
  state: "ready"
});
assert.equal(audit.osJobs, targetJobs);
assert.deepEqual(result, snapshot);
assert.deepEqual(createLessonJournalReservationAuditResult({}), {
  message: "OS 예약 0건",
  osJobs: [],
  state: "ready"
});

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const modelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalReservationAuditResult.js", import.meta.url),
  "utf8"
);
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction PreparationMemoModal(", detailStart);
const detailSource = appSource.slice(detailStart, detailEnd);

for (const binding of [
  'import { createLessonJournalReservationAuditResult } from "../domains/lessons/lessonJournalReservationAuditResult.js"',
  "async function refreshReservationAudit()",
  "getJsonWithTimeout(osPath, 12000,",
  "setReservationAudit(createLessonJournalReservationAuditResult(result))",
  "OS 예약 기록 조회 실패:"
]) {
  assert.ok(detailSource.includes(binding) || appSource.includes(binding), `missing audit-result binding: ${binding}`);
}
for (const removedProviderBoundary of [
  "solapiGroupsPath",
  "solapiMessagesPath",
  "Promise.allSettled",
  "/api/solapi/groups",
  "/api/solapi/messages"
]) {
  assert.ok(!detailSource.includes(removedProviderBoundary), `raw provider audit must stay removed: ${removedProviderBoundary}`);
}
for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "Promise.allSettled",
  "/api/",
  "Supabase",
  "localStorage",
  "solapiGroups",
  "solapiMessages"
]) {
  assert.ok(!modelSource.includes(forbiddenSideEffect), `audit result must stay pure: ${forbiddenSideEffect}`);
}

console.log("lesson journal OS reservation audit result TARGET/CONTROL fixtures passed");
