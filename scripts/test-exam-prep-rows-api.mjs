import assert from "node:assert/strict";
import {
  deleteExamPrepRowRequest,
  saveExamPrepRowsRequest
} from "../src/domains/exams/examPrepRowsApi.js";
import {
  areExamPrepRowTimestampsEqual,
  createExamPrepRowConflict,
  createExamPrepRowVersionFilter,
  createNextExamPrepRowUpdatedAt,
  isExamPrepRowInsertConflict
} from "../api/domain/examPrepRowPersistence.js";

const rows = [
  { examPrepId: "exam-row-1", schoolName: "테스트중" },
  { examPrepId: "exam-row-2", schoolName: "테스트고" }
];
let savedRequest = null;
const saveResult = await saveExamPrepRowsRequest({
  examPrepRows: rows,
  request: async (path, payload) => {
    savedRequest = { path, payload };
    return {
      conflicts: [],
      examPrepRows: rows.map((row) => ({ ...row, updatedAt: "2026-08-03T00:00:00.001Z" })),
      failures: [],
      ok: true,
      source: "supabase",
      verified: true
    };
  }
});
assert.deepEqual(savedRequest, {
  path: "/api/exam-prep-rows/bulk",
  payload: { examPrepRows: rows }
});
assert.equal(saveResult.verified, true);
assert.equal(saveResult.examPrepRows.length, 2);
await assert.rejects(
  saveExamPrepRowsRequest({ examPrepRows: rows }),
  /시험정보 저장 request가 필요합니다/
);

let restorePayload = null;
await saveExamPrepRowsRequest({
  allowRestore: true,
  examPrepRows: rows,
  request: async (_path, payload) => {
    restorePayload = payload;
    return { examPrepRows: rows, source: "supabase", verified: true };
  }
});
assert.deepEqual(restorePayload, { allowRestore: true, examPrepRows: rows });
await assert.rejects(
  saveExamPrepRowsRequest({
    allowRestore: true,
    examPrepRows: rows,
    request: async () => ({
      conflicts: [{ examPrepId: "exam-row-1" }],
      examPrepRows: [],
      source: "supabase",
      verified: false
    })
  }),
  /삭제 복구를 Supabase 재조회로 확인하지 못했습니다/
);
await assert.rejects(
  saveExamPrepRowsRequest({
    examPrepRows: rows,
    request: async () => ({ examPrepRows: rows, source: "local_sample" })
  }),
  /Supabase 저장 결과/
);

assert.equal(
  createExamPrepRowVersionFilter("시험 row/1", "2026-08-03T00:00:00.000+00:00"),
  "exam_prep_id=eq.%EC%8B%9C%ED%97%98%20row%2F1&updated_at=eq.2026-08-03T00%3A00%3A00.000%2B00%3A00"
);
assert.equal(isExamPrepRowInsertConflict(new Error("23505 duplicate key")), true);
assert.equal(createExamPrepRowConflict("row-1").code, "EXAM_PREP_ROW_CONFLICT");
assert.equal(
  createNextExamPrepRowUpdatedAt("2026-08-03T00:00:00.000Z", new Date("2026-08-02T00:00:00.000Z").getTime()),
  "2026-08-03T00:00:00.001Z"
);
assert.equal(
  areExamPrepRowTimestampsEqual("2026-08-03T00:00:00.001Z", "2026-08-03T09:00:00.001+09:00"),
  true
);

const originalEnv = {
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_URL: process.env.SUPABASE_URL
};
const originalFetch = globalThis.fetch;
process.env.SUPABASE_URL = "https://exam-prep-fixture.supabase.test";
process.env.SUPABASE_ANON_KEY = "fixture-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "fixture-service-key";

let storedRows = [{
  created_at: "2026-08-01T00:00:00.000Z",
  exam_cycle: "2026-2-mid",
  exam_period: null,
  exam_prep_id: "row-existing",
  exam_term: "2026-2-mid",
  grade: "고1",
  math_exam_date: null,
  math_exam_dates: [],
  memo: null,
  publisher: "테스트 출판사",
  review: null,
  review_ai_status: null,
  revised_review: null,
  school_name: "테스트고",
  scope: "기존 범위",
  source: "manual",
  special_note: null,
  sub_materials: null,
  subject: "공통수학1",
  textbook: null,
  updated_at: "2026-08-03T00:00:00.000Z"
}];
const mutationRequests = [];
globalThis.fetch = async (url, options = {}) => {
  const requestUrl = new URL(url);
  const tablePath = requestUrl.pathname.split("/rest/v1/")[1];
  assert.equal(tablePath, "exam_prep_rows");
  const method = options.method || "GET";
  if (method === "GET") {
    return new Response(JSON.stringify(storedRows), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });
  }

  const body = JSON.parse(options.body || "null");
  mutationRequests.push({ body, method, search: requestUrl.search });
  if (method === "PATCH") {
    const examPrepId = requestUrl.searchParams.get("exam_prep_id")?.replace(/^eq\./, "");
    const expectedUpdatedAt = requestUrl.searchParams.get("updated_at")?.replace(/^eq\./, "");
    const matchingIndex = storedRows.findIndex((row) =>
      row.exam_prep_id === examPrepId && row.updated_at === expectedUpdatedAt
    );
    if (matchingIndex < 0) {
      return new Response("[]", { headers: { "Content-Type": "application/json" }, status: 200 });
    }
    storedRows[matchingIndex] = { ...storedRows[matchingIndex], ...body };
    return new Response(JSON.stringify([storedRows[matchingIndex]]), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });
  }

  if (method === "POST") {
    const insertedRows = Array.isArray(body) ? body : [body];
    if (insertedRows.some((row) => storedRows.some((stored) => stored.exam_prep_id === row.exam_prep_id))) {
      return new Response(JSON.stringify({ message: "duplicate key 23505" }), {
        headers: { "Content-Type": "application/json" },
        status: 409
      });
    }
    storedRows.push(...insertedRows.map((row) => ({
      created_at: row.created_at || "2026-08-03T00:00:00.000Z",
      ...row
    })));
    return new Response(JSON.stringify(insertedRows), {
      headers: { "Content-Type": "application/json" },
      status: 201
    });
  }

  assert.fail(`unexpected Supabase fixture method: ${method}`);
};

try {
  const { listExamPrepRows, upsertExamPrepRows } = await import("../api/routes/coreData.js");
  const existingRow = (await listExamPrepRows()).examPrepRows[0];
  const saved = await upsertExamPrepRows([{ ...existingRow, scope: "CAS 저장 범위" }]);
  assert.equal(saved.verified, true);
  assert.equal(saved.examPrepRows[0].scope, "CAS 저장 범위");
  assert.notEqual(saved.examPrepRows[0].updatedAt, existingRow.updatedAt);
  assert.match(mutationRequests[0].search, /updated_at=eq\./);

  const stale = await upsertExamPrepRows([{ ...existingRow, scope: "구버전 덮어쓰기" }]);
  assert.equal(stale.verified, false);
  assert.equal(stale.conflicts[0].code, "EXAM_PREP_ROW_CONFLICT");
  assert.equal(storedRows[0].scope, "CAS 저장 범위");

  const deletedVersion = "2026-08-02T00:00:00.000Z";
  const deletedDraft = {
    ...existingRow,
    examPrepId: "row-deleted",
    scope: "복구 입력",
    updatedAt: deletedVersion
  };
  const deletedConflict = await upsertExamPrepRows([deletedDraft]);
  assert.equal(deletedConflict.conflicts[0].currentRow, null);
  assert.equal(storedRows.some((row) => row.exam_prep_id === "row-deleted"), false);

  const restored = await upsertExamPrepRows([deletedDraft], { allowRestore: true });
  assert.equal(restored.verified, true);
  assert.equal(restored.examPrepRows[0].scope, "복구 입력");
} finally {
  globalThis.fetch = originalFetch;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

let deletedRequest = null;
const deleteResult = await deleteExamPrepRowRequest({
  auditId: "audit-시험/1",
  examPrepId: "시험 row/1",
  fetchImpl: async (url, options) => {
    deletedRequest = { url, options };
    return {
      ok: true,
      json: async () => ({ ok: true, examPrepId: "시험 row/1" })
    };
  },
  resolveApiUrl: (path) => `https://academy.test${path}`
});
assert.deepEqual(deletedRequest, {
  url: "https://academy.test/api/exam-prep-rows?id=%EC%8B%9C%ED%97%98%20row%2F1&confirm=true&auditId=audit-%EC%8B%9C%ED%97%98%2F1",
  options: { method: "DELETE" }
});
assert.deepEqual(deleteResult, { ok: true, examPrepId: "시험 row/1" });

await assert.rejects(
  deleteExamPrepRowRequest({
    auditId: "audit-failed",
    examPrepId: "exam-row-1",
    fetchImpl: async () => ({
      ok: false,
      json: async () => ({ ok: false, error: "삭제 차단" })
    })
  }),
  /삭제 차단/
);
await assert.rejects(
  deleteExamPrepRowRequest({
    auditId: "audit-fallback",
    examPrepId: "exam-row-1",
    fetchImpl: async () => ({
      ok: false,
      json: async () => ({})
    })
  }),
  /시험정보 삭제 실패/
);

console.log("exam prep rows API fixtures passed");
