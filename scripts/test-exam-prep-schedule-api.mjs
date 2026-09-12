import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  saveExamPrepSchedulePlanRequest,
  saveExamPrepScheduleWithConflictRecovery
} from "../src/domains/lessons/examPrepScheduleApi.js";
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

// 버전 충돌 복구. 서버가 "수업 원본이 다른 화면에서 먼저 변경되었습니다" 와 함께 최신 수업을
// 돌려주면, 그 위에 같은 편집을 다시 얹어 한 번만 재시도한다(2026-09-12 "자주 발생" 보고).
function createConflictError(currentLesson) {
  const error = new Error("수업 원본이 다른 화면에서 먼저 변경되었습니다.");
  error.statusCode = 409;
  error.result = { ok: false, code: "EXAM_PREP_SCHEDULE_SAVE_FAILED", currentLesson, lessonId: currentLesson?.lessonId };
  return error;
}
const staleLesson = {
  lessonId: "lesson_exam_prep_2026-09-13", lessonType: "examPrep", date: "2026-09-13",
  studentIds: ["s1", "s2"], specialLectureStudentSchedules: [], updatedAt: "2026-09-11T00:00:00.000Z"
};
const serverLesson = {
  ...staleLesson,
  // 그 사이 태블릿 출결이 s3 를 명단에 넣었고, 다른 화면이 s2 의 시간을 바꿨다.
  studentIds: ["s1", "s2", "s3"],
  specialLectureStudentSchedules: [{ studentId: "s2", startTime: "09:00", endTime: "10:00", scheduleType: "adjusted" }],
  updatedAt: "2026-09-12T01:26:13.521Z"
};
const plan = {
  changes: [{ before: staleLesson, after: { ...staleLesson, specialLectureStudentSchedules: [{ studentId: "s1", startTime: "12:00", endTime: "14:00", scheduleType: "adjusted" }] } }],
  endTime: "14:00", startTime: "12:00", targetStudentIds: ["s1"]
};

// 첫 요청은 충돌, 재시도는 성공. 재시도 본문의 before 가 서버 최신본이어야 CAS 를 통과한다.
{
  const calls = [];
  const refreshed = [];
  const result = await saveExamPrepScheduleWithConflictRecovery({
    createAuditId: () => "audit-retry",
    onLessonRefreshed: (lesson) => refreshed.push(lesson),
    plan,
    request: async (path, body) => {
      calls.push(body);
      if (calls.length === 1) throw createConflictError(serverLesson);
      return { source: "supabase", verified: true, lessons: body.changes.map((change) => change.after) };
    }
  });
  assert.equal(calls.length, 2);
  assert.equal(calls[1].changes[0].before, serverLesson);
  // 최신 명단(s3)과 다른 화면의 s2 시간은 살리고, 편집 대상 s1 만 새 시간.
  assert.deepEqual(calls[1].changes[0].after.studentIds, ["s1", "s2", "s3"]);
  assert.deepEqual(
    calls[1].changes[0].after.specialLectureStudentSchedules.map((schedule) => [schedule.studentId, schedule.startTime]),
    [["s2", "09:00"], ["s1", "12:00"]]
  );
  assert.deepEqual(refreshed, [serverLesson]);
  assert.equal(result.verified, true);
}

// 재시도도 충돌하면 그 최신본을 반영해 두고, 다시 저장을 누르라고 안내한다. 세 번째 시도는 없다.
{
  const calls = [];
  const refreshed = [];
  const secondServerLesson = { ...serverLesson, updatedAt: "2026-09-12T01:30:00.000Z" };
  await assert.rejects(
    saveExamPrepScheduleWithConflictRecovery({
      onLessonRefreshed: (lesson) => refreshed.push(lesson),
      plan,
      request: async () => {
        calls.push(1);
        throw createConflictError(calls.length === 1 ? serverLesson : secondServerLesson);
      }
    }),
    /수업 원본이 다른 화면에서 먼저 변경되었습니다\. 최신 원본을 불러왔습니다\. 이후 일정에 저장을 다시 눌러 주세요\./
  );
  assert.equal(calls.length, 2);
  assert.deepEqual(refreshed, [serverLesson, secondServerLesson]);
}

// 충돌이 아닌 실패(최신본 없음)는 그대로 던진다. 재시도하지 않는다.
{
  const calls = [];
  await assert.rejects(
    saveExamPrepScheduleWithConflictRecovery({
      plan,
      request: async () => {
        calls.push(1);
        throw new Error("Supabase 연결 실패");
      }
    }),
    /Supabase 연결 실패/
  );
  assert.equal(calls.length, 1);
}

// 최신 명단에 대상 학생이 없으면 재시도할 게 없다 — 최신본만 반영하고 대상을 다시 고르게 한다.
{
  const refreshed = [];
  await assert.rejects(
    saveExamPrepScheduleWithConflictRecovery({
      onLessonRefreshed: (lesson) => refreshed.push(lesson),
      plan,
      request: async () => { throw createConflictError({ ...serverLesson, studentIds: ["s2", "s3"] }); }
    }),
    /최신 수업 명단에는 선택한 학생이 없습니다/
  );
  assert.equal(refreshed.length, 1);
}

// 서버 라우트가 충돌 응답에 currentLesson 을 싣지 않으면 위 복구는 전부 무력하다.
assert.ok(
  serverSource.includes("...(error.currentLesson ? { currentLesson: error.currentLesson } : {})"),
  "exam-prep-schedule/save 충돌 응답에 currentLesson 이 실려야 한다"
);

console.log("exam prep schedule API contract + conflict recovery tests passed");
