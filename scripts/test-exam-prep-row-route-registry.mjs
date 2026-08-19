import assert from "node:assert/strict";
import {
  createExamPrepRowRouteRegistry,
  examPrepRowRouteSignatures
} from "../src/shared/server/examPrepRowRouteRegistry.js";

const events = [];
const sends = [];
const auditLogs = [];
const upsertCalls = [];
const upsertBulkCalls = [];
const deleteCalls = [];
let rawBody = {};
let listResult = { source: "supabase", examPrepRows: [] };
let upsertResult = { source: "supabase", examPrepRow: { examPrepId: "row-1" }, verified: true };
let upsertBulkResult = { source: "supabase", examPrepRows: [] };
let deleteResult = { source: "supabase", examPrepId: "row-1", audit: { operation: "delete_exam_prep_row" }, verified: true };
let deleteDuplicatesResult = { source: "supabase", deletedCount: 2 };
let routeError = null;

const registry = createExamPrepRowRouteRegistry({
  createAuditId: () => "generated-audit-id",
  deleteDuplicateExamPrepRows: async () => {
    events.push("deleteDuplicates");
    if (routeError?.stage === "deleteDuplicates") throw routeError.error;
    return deleteDuplicatesResult;
  },
  deleteExamPrepRow: async (examPrepId, options) => {
    events.push("delete");
    deleteCalls.push({ examPrepId, options });
    if (routeError?.stage === "delete") throw routeError.error;
    return deleteResult;
  },
  listExamPrepRows: async () => {
    events.push("list");
    if (routeError?.stage === "list") throw routeError.error;
    return listResult;
  },
  logAudit: (tag, audit, options) => {
    auditLogs.push({ audit, options, tag });
  },
  readJsonBody: async () => {
    events.push("read");
    return rawBody;
  },
  sendJson: (request, response, statusCode, body) => {
    sends.push({ body, request, response, statusCode });
  },
  upsertExamPrepRow: async (row, options) => {
    events.push("upsert");
    upsertCalls.push({ options, row });
    if (routeError?.stage === "upsert") throw routeError.error;
    return upsertResult;
  },
  upsertExamPrepRows: async (rows, options) => {
    events.push("upsertBulk");
    upsertBulkCalls.push({ options, rows });
    if (routeError?.stage === "upsertBulk") throw routeError.error;
    return upsertBulkResult;
  }
});

function route(method, path, searchParams = {}) {
  const requestUrl = new URL(path, "http://127.0.0.1");
  Object.entries(searchParams).forEach(([key, value]) => requestUrl.searchParams.set(key, value));
  return {
    request: { method },
    response: { path },
    requestUrl
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(examPrepRowRouteSignatures), true);
assert.equal(examPrepRowRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(examPrepRowRouteSignatures, [
  { method: "GET", path: "/api/exam-prep-rows" },
  { method: "POST", path: "/api/exam-prep-rows" },
  { method: "POST", path: "/api/exam-prep-rows/bulk" },
  { method: "DELETE", path: "/api/exam-prep-rows" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.equal(await registry.dispatch(route("PATCH", "/api/exam-prep-rows")), false);
assert.deepEqual(events, []);

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/exam-prep-rows")), true);
assert.deepEqual(events, ["list"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...listResult });

events.length = 0;
upsertCalls.length = 0;
rawBody = { allowRestore: true, examPrepRow: { examPrepId: "row-1", title: "중간고사" } };
assert.equal(await registry.dispatch(route("POST", "/api/exam-prep-rows")), true);
assert.deepEqual(events, ["read", "upsert"]);
assert.deepEqual(upsertCalls.at(-1), { options: { allowRestore: true }, row: rawBody.examPrepRow });
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertResult });

events.length = 0;
upsertBulkCalls.length = 0;
rawBody = { examPrepRows: [{ examPrepId: "row-1" }, { examPrepId: "row-2" }] };
assert.equal(await registry.dispatch(route("POST", "/api/exam-prep-rows/bulk")), true);
assert.deepEqual(events, ["read", "upsertBulk"]);
assert.deepEqual(upsertBulkCalls.at(-1), { options: { allowRestore: false }, rows: rawBody.examPrepRows });
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertBulkResult });

events.length = 0;
deleteCalls.length = 0;
auditLogs.length = 0;
assert.equal(
  await registry.dispatch(route("DELETE", "/api/exam-prep-rows", { confirm: "true", id: "row-1" })),
  true
);
assert.deepEqual(events, ["delete"]);
assert.deepEqual(deleteCalls.at(-1), { examPrepId: "row-1", options: { auditId: "generated-audit-id" } });
assert.deepEqual(sends.at(-1).body, { ok: true, ...deleteResult });
assert.equal(auditLogs.length, 1);
assert.deepEqual(auditLogs[0].audit, deleteResult.audit);

events.length = 0;
assert.equal(
  await registry.dispatch(route("DELETE", "/api/exam-prep-rows", { confirm: "true", duplicates: "true" })),
  true
);
assert.deepEqual(events, ["deleteDuplicates"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...deleteDuplicatesResult });

assert.equal(await registry.dispatch(route("DELETE", "/api/exam-prep-rows")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "시험정보 삭제는 confirm=true가 필요합니다." });
assert.equal(sends.at(-1).statusCode, 500);

assert.equal(
  await registry.dispatch(route("DELETE", "/api/exam-prep-rows", { confirm: "true", duplicates: "true", id: "row-1" })),
  true
);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  error: "단일 시험정보 삭제와 중복 일괄 삭제를 같은 요청에서 실행할 수 없습니다."
});

auditLogs.length = 0;
routeError = {
  stage: "delete",
  error: Object.assign(new Error("삭제 실패"), { audit: { operation: "delete_exam_prep_row", reason: "conflict" } })
};
assert.equal(
  await registry.dispatch(route("DELETE", "/api/exam-prep-rows", { confirm: "true", id: "row-1" })),
  true
);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "삭제 실패", audit: routeError.error.audit });
assert.equal(sends.at(-1).statusCode, 409);
assert.equal(auditLogs.length, 1);
assert.equal(auditLogs[0].options?.isError, true);

routeError = { stage: "list", error: new Error("source failed") };
assert.equal(await registry.dispatch(route("GET", "/api/exam-prep-rows")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("exam prep row route registry list, upsert, bulk, delete, deleteDuplicates, and error contracts passed");
