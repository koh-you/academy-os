import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createTeacherHomeworkStatusDraft,
  saveTeacherHomeworkStatusAction,
  teacherHomeworkStatuses
} from "../src/domains/lessons/teacherHomeworkStatusSave.js";

const version0 = "2026-08-03T00:00:00.000Z";
const version1 = "2026-08-03T00:00:01.000Z";
const verifiedAt = "2026-08-03T00:00:00.500Z";
const homework = {
  assignedDate: "2026-08-01",
  checkedAt: "2026-08-02T09:00:00.000Z",
  dueDate: "2026-08-03",
  homeworkId: "homework_TEACHER_STATUS_TARGET",
  homeworkType: "next",
  lessonId: "lesson_TEACHER_STATUS_TARGET",
  status: "submitted",
  studentId: "student_TEACHER_STATUS_TARGET",
  studentStatus: "checked_done",
  teacherStatus: "unverified",
  title: "TARGET 교사 확인 숙제",
  updatedAt: version0,
  verifiedAt: ""
};

assert.deepEqual(teacherHomeworkStatuses, ["unverified", "verified", "partial", "missing"]);
const draft = createTeacherHomeworkStatusDraft(homework, "verified", () => verifiedAt);
assert.equal(draft.status, "verified");
assert.equal(draft.teacherStatus, "verified");
assert.equal(draft.verifiedAt, verifiedAt);
assert.equal(draft.updatedAt, version0);
assert.equal(homework.teacherStatus, "unverified", "status draft must not mutate the Supabase source snapshot");

let capturedPlan;
const savedHomework = await saveTeacherHomeworkStatusAction({
  homework,
  now: () => verifiedAt,
  request: async (path, plan, timeoutMs, timeoutMessage) => {
    assert.equal(path, "/api/lesson-journal/rows/save");
    assert.equal(timeoutMs, 30000);
    assert.match(timeoutMessage, /수정본을 유지/);
    capturedPlan = plan;
    return {
      auditId: plan.auditId,
      homeworks: [{ ...plan.homeworkChanges[0].after, updatedAt: version1 }],
      records: [],
      source: "supabase",
      verified: true
    };
  },
  teacherStatus: "verified"
});

assert.equal(capturedPlan.homeworkChanges.length, 1);
assert.deepEqual(capturedPlan.homeworkChanges[0].before, homework);
assert.equal(capturedPlan.homeworkChanges[0].after.teacherStatus, "verified");
assert.equal(capturedPlan.homeworkChanges[0].after.studentStatus, "checked_done");
assert.equal(capturedPlan.recordChanges.length, 0);
assert.equal(savedHomework.updatedAt, version1);

await assert.rejects(
  () => saveTeacherHomeworkStatusAction({ homework, request: async () => ({}), teacherStatus: "unknown" }),
  /지원하지 않는/
);
await assert.rejects(
  () => saveTeacherHomeworkStatusAction({
    homework,
    request: async (_path, plan) => ({
      auditId: plan.auditId,
      homeworks: [],
      records: [],
      source: "supabase",
      verified: true
    }),
    teacherStatus: "partial"
  }),
  /Supabase 재조회로 확인하지 못했습니다/
);

const [appSource, outletSource, learningSupportSource, cssSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/teacher/LearningSupportCenters.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/App.css", import.meta.url), "utf8")
]);

for (const binding of [
  "teacherHomeworkSavingIdsRef.current.has(homeworkId)",
  "await saveTeacherHomeworkStatusAction({",
  "request: postJsonWithTimeout",
  "homeworksRef.current = nextHomeworks",
  "Supabase 저장 및 재조회 확인 완료",
  "state: \"failed\"",
  "teacherHomeworkSavingIdsRef.current.delete(homeworkId)"
]) {
  assert.ok(appSource.includes(binding), `missing App teacher homework save binding: ${binding}`);
}
assert.ok(!appSource.includes('postJson("/api/homeworks", { homework: nextHomework }).catch'));
for (const binding of [
  "teacherHomeworkSaveStates: models.teacherHomeworkSaveStates",
  "teacherHomeworkSaveStates = {}",
  "disabled={saveState.state === \"saving\"}",
  "InlineSaveStatus label=\"교사 숙제 확인\"",
  "teacherHomeworkSaveFeedback"
]) {
  assert.ok(`${outletSource}\n${learningSupportSource}\n${cssSource}`.includes(binding), `missing teacher homework save UI binding: ${binding}`);
}

console.log("teacher homework status versioned save TARGET/CONTROL fixtures passed");
