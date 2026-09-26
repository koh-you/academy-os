// POST /api/lessons/bulk 의 명단 정리는 수업 수와 무관하게 묶음 왕복으로 끝난다.
//
// 2026-09-19 까지 upsertLessons 는 수업을 한 번의 upsert 로 저장하고도 수업마다 (대기 예약 조회 +
// 기록 조회) 를 순차로 돌렸다 — N 수업이면 1 + 2N 왕복(월 정규수업 52개면 105). 여기서는
// (1) 왕복 수가 N 에 비례하지 않는지, (2) 판정 규칙이 수업별 정리와 같은지(명단에 없는 학생의
// 대기 예약만 취소 · 그 학생의 기록만 삭제 · 사유·상태 집합 동일), (3) 정리할 것이 없으면 쓰기가
// 없는지 고정한다.
import assert from "node:assert/strict";

process.env.SUPABASE_URL = "https://safe-fixture.supabase.co";
process.env.SUPABASE_ANON_KEY = "safe-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "safe-service-role-key";
const { upsertLessons } = await import("../api/routes/coreData.js");

const originalFetch = globalThis.fetch;
async function withFetch(handler, run) {
  globalThis.fetch = handler;
  try {
    return await run();
  } finally {
    globalThis.fetch = originalFetch;
  }
}

function decodeInList(searchParams, column) {
  const raw = searchParams.get(column) ?? "";
  assert.ok(raw.startsWith("in.("), `${column} must use an in.() list: ${raw}`);
  return raw.slice(4, -1).split(",").map((part) => decodeURIComponent(part));
}

function createLesson(index, studentIds) {
  return {
    className: `반${index}`,
    date: `2026-10-${String((index % 28) + 1).padStart(2, "0")}`,
    endTime: "20:00",
    lessonId: `lesson-${index}`,
    lessonType: "regular",
    startTime: "18:00",
    status: "scheduled",
    studentIds
  };
}

// 12개 수업. 짝수 수업에서는 "s-removed" 가 명단에서 빠졌고, 홀수 수업은 그대로다.
const lessons = Array.from({ length: 12 }, (_, index) =>
  createLesson(index, index % 2 === 0 ? ["s-keep"] : ["s-keep", "s-removed"])
);
const pendingJobs = lessons.flatMap((lesson, index) => [
  { lesson_id: lesson.lessonId, notification_job_id: `job-${index}-keep`, status: "scheduled", student_id: "s-keep" },
  { lesson_id: lesson.lessonId, notification_job_id: `job-${index}-removed`, status: index % 3 === 0 ? "queued" : "scheduled", student_id: "s-removed" }
]);
const records = lessons.flatMap((lesson, index) => [
  { lesson_id: lesson.lessonId, lesson_student_record_id: `record-${index}-keep`, student_id: "s-keep" },
  { lesson_id: lesson.lessonId, lesson_student_record_id: `record-${index}-removed`, student_id: "s-removed" }
]);

function createServer(requests) {
  return async (url, options = {}) => {
    const method = options.method ?? "GET";
    const parsed = new URL(url);
    const table = parsed.pathname.split("/").pop();
    requests.push({ body: options.body ? JSON.parse(options.body) : null, method, table, url: parsed });
    if (method === "POST" && table === "lessons") {
      const rows = JSON.parse(options.body);
      return { ok: true, text: async () => JSON.stringify(rows) };
    }
    if (method === "GET" && table === "notification_jobs") {
      const lessonIds = new Set(decodeInList(parsed.searchParams, "lesson_id"));
      const statuses = new Set(decodeInList(parsed.searchParams, "status"));
      return { ok: true, text: async () => JSON.stringify(pendingJobs.filter((row) => lessonIds.has(row.lesson_id) && statuses.has(row.status))) };
    }
    if (method === "GET" && table === "lesson_student_records") {
      const lessonIds = new Set(decodeInList(parsed.searchParams, "lesson_id"));
      return { ok: true, text: async () => JSON.stringify(records.filter((row) => lessonIds.has(row.lesson_id))) };
    }
    if (method === "PATCH" || method === "DELETE") {
      return { ok: true, text: async () => JSON.stringify([]) };
    }
    throw new Error(`unexpected request ${method} ${parsed.pathname}${parsed.search}`);
  };
}

// 1. 12개 수업 저장 = upsert 1 + 조회 2(예약·기록) + 취소 PATCH 1 + 삭제 DELETE 1 = 5 왕복.
//    이전 구현은 1 + 2N = 25 왕복에 제외 학생 행마다 PATCH/DELETE 가 더 붙었다.
{
  const requests = [];
  const result = await withFetch(createServer(requests), () => upsertLessons(lessons));
  assert.equal(result.source, "supabase");
  assert.equal(result.lessons.length, 12);
  const shape = requests.map((request) => `${request.method} ${request.table}`);
  assert.deepEqual(
    shape,
    ["POST lessons", "GET notification_jobs", "GET lesson_student_records", "PATCH notification_jobs", "DELETE lesson_student_records"],
    `bulk save must not scale round trips with lesson count: ${JSON.stringify(shape)}`
  );

  const jobsRead = requests[1];
  assert.deepEqual(decodeInList(jobsRead.url.searchParams, "lesson_id"), lessons.map((lesson) => lesson.lessonId));
  assert.deepEqual(decodeInList(jobsRead.url.searchParams, "status"), ["scheduled", "queued", "pending_send"], "대기 예약 상태 집합은 수업별 정리와 같다");

  // 취소: 명단에서 빠진 학생(s-removed, 짝수 수업)의 대기 예약만. 사유·상태 그대로.
  const cancel = requests[3];
  const canceledIds = decodeInList(cancel.url.searchParams, "notification_job_id");
  assert.deepEqual(canceledIds, [0, 2, 4, 6, 8, 10].map((index) => `job-${index}-removed`));
  assert.deepEqual(decodeInList(cancel.url.searchParams, "status"), ["scheduled", "queued", "pending_send"], "취소는 여전히 대기 상태일 때만 걸린다");
  assert.equal(cancel.body.status, "canceled");
  assert.equal(cancel.body.error, "수업 명단에서 제외됨");
  assert.ok(cancel.body.updated_at);

  // 삭제: 그 학생의 기록만. 남은 학생(s-keep)과 홀수 수업의 기록은 건드리지 않는다.
  const remove = requests[4];
  assert.deepEqual(decodeInList(remove.url.searchParams, "lesson_student_record_id"), [0, 2, 4, 6, 8, 10].map((index) => `record-${index}-removed`));
}

// 2. 명단이 그대로면 조회 2회만 하고 쓰기는 없다.
{
  const requests = [];
  const unchanged = lessons.map((lesson) => ({ ...lesson, studentIds: ["s-keep", "s-removed"] }));
  await withFetch(createServer(requests), () => upsertLessons(unchanged));
  assert.deepEqual(requests.map((request) => `${request.method} ${request.table}`), ["POST lessons", "GET notification_jobs", "GET lesson_student_records"]);
}

// 3. 빈 배열은 아무 요청도 내지 않는다(기존 동작).
{
  const requests = [];
  const result = await withFetch(createServer(requests), () => upsertLessons([]));
  assert.deepEqual(result.lessons, []);
  assert.equal(requests.length, 0);
}

console.log("lesson bulk roster cleanup: 12 lessons in 5 round trips · removed-only cancel/delete · no writes when roster unchanged");
