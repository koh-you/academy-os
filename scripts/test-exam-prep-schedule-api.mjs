import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { saveExamPrepSchedulePlanRequest } from "../src/domains/lessons/examPrepScheduleApi.js";
import { parseVersionedWriteRequest } from "../src/shared/contracts/versionedWriteRouteContracts.js";

const changes = [{
  before: null,
  after: { lessonId: "lesson_exam_prep_2026-09-06", lessonType: "examPrep", studentIds: ["student_1"] }
}];
const payload = parseVersionedWriteRequest("POST", "/api/exam-prep-schedule/save", { auditId: "audit-1", changes });
assert.deepEqual(payload, { auditId: "audit-1", changes });

let captured = null;
const result = await saveExamPrepSchedulePlanRequest({
  auditId: "audit-1",
  changes,
  request: async (path, body) => {
    captured = { path, body };
    return { source: "supabase", verified: true, lessons: [changes[0].after] };
  }
});
assert.deepEqual(captured, { path: "/api/exam-prep-schedule/save", body: { auditId: "audit-1", changes } });
assert.equal(result.verified, true);

const [serverSource, coreDataSource] = await Promise.all([
  readFile(new URL("../api/server.js", import.meta.url), "utf8"),
  readFile(new URL("../api/routes/coreData.js", import.meta.url), "utf8")
]);
assert.ok(serverSource.includes('requestUrl.pathname === "/api/exam-prep-schedule/save"'));
assert.ok(serverSource.includes("saveExamPrepSchedulePlan({"));
for (const boundary of [
  "export async function saveExamPrepSchedulePlan(",
  "preflightExamPrepRosterRemovals(changes)",
  "persistLessonJournalHistoryLessonChange(change)",
  "rollbackLessonJournalHistoryLesson(entry)",
  'source: "supabase", verified: true'
]) assert.ok(coreDataSource.includes(boundary), `missing schedule API boundary: ${boundary}`);

console.log("exam prep schedule API contract tests passed");
