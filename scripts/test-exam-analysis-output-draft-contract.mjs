import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  parseExamAnalysisOutputDraftsSaveRequest,
  saveExamOutputDrafts
} from "../src/domains/exams/examAnalysisRunApi.js";

const [apiSource, appSource, contractSource, safeApiSource, serverSource] = await Promise.all([
  readFile(new URL("../src/domains/exams/examAnalysisRunApi.js", import.meta.url), "utf8"),
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/contracts/versionedWriteRouteContracts.js", import.meta.url), "utf8"),
  readFile(new URL("./safe-local-api.mjs", import.meta.url), "utf8"),
  readFile(new URL("../api/server.js", import.meta.url), "utf8")
]);

const requestPayload = {
  analysisRunId: " exam-run-safe-1 ",
  blogTeacherDraft: "선생님 블로그 수정본",
  blogTeacherDraftEdited: true,
  instagramTeacherDraft: "",
  instagramTeacherDraftEdited: false,
  outputInputs: { oneLineReview: "안전 산출물 총평", visibility: "blog_instagram" }
};
assert.deepEqual(parseExamAnalysisOutputDraftsSaveRequest(requestPayload), {
  ...requestPayload,
  analysisRunId: "exam-run-safe-1"
});

for (const [payload, field] of [
  [{ ...requestPayload, analysisRunId: "" }, "analysisRunId"],
  [{ ...requestPayload, outputInputs: [] }, "outputInputs"],
  [{ ...requestPayload, blogTeacherDraftEdited: "true" }, "blogTeacherDraftEdited"],
  [{ ...requestPayload, unexpected: true }, "unexpected"]
]) {
  assert.throws(
    () => parseExamAnalysisOutputDraftsSaveRequest(payload),
    (error) => error.field === field && error.statusCode === 400
  );
}

const response = {
  aiJobs: [],
  analysisRun: {
    analysisRunId: "exam-run-safe-1",
    auditSummary: { outputDrafts: { inputs: { oneLineReview: "안전 산출물 총평" } } }
  },
  events: [{ eventType: "exam_analysis_output_draft_saved" }],
  questions: [{ questionNumber: 1 }],
  sources: [],
  source: "supabase"
};
const requests = [];
const result = await saveExamOutputDrafts(
  async (path, payload, timeoutMs, timeoutMessage) => {
    requests.push({ path, payload, timeoutMessage, timeoutMs });
    return { ...response, ok: true };
  },
  requestPayload
);
assert.equal(requests[0].path, "/api/exam-analysis-runs/save-output-drafts");
assert.deepEqual(requests[0].payload, parseExamAnalysisOutputDraftsSaveRequest(requestPayload));
assert.equal(requests[0].timeoutMs, 30000);
assert.equal(requests[0].timeoutMessage, "시험분석 산출물 저장이 지연되고 있습니다.");
assert.deepEqual(result, response);
for (const field of ["aiJobs", "analysisRun", "events", "questions", "sources", "source"]) {
  await assert.rejects(
    saveExamOutputDrafts(async () => ({ ...response, [field]: undefined }), requestPayload),
    (error) => error.field === field && error.statusCode === 400
  );
}

for (const expected of [
  "export function parseExamAnalysisOutputDraftsSaveRequest",
  "export async function saveExamOutputDrafts",
  "parseVersionedWriteRequest(method, outputDraftsPath, payload)",
  "parseVersionedWriteResponse(method, outputDraftsPath, result)"
]) {
  assert.ok(apiSource.includes(expected), `output draft API contract missing ${expected}`);
}
assert.ok(contractSource.includes('key: "examAnalysisOutputDraftsSave"'));
assert.ok(contractSource.includes('sources: ["exam_analysis_runs", "exam_analysis_events"]'));

const appOwnerStart = appSource.indexOf("async function saveExamAnalysisOutputDraftsRequest");
const appOwnerEnd = appSource.indexOf("function generateExamAnalysisOutputDraftRequest", appOwnerStart);
assert.ok(appOwnerStart >= 0 && appOwnerEnd > appOwnerStart);
const appOwner = appSource.slice(appOwnerStart, appOwnerEnd);
assert.ok(appSource.includes('function loadExamAnalysisRunApi()'));
assert.ok(appSource.includes('return import("../domains/exams/examAnalysisRunApi.js")'));
assert.ok(appOwner.includes("await loadExamAnalysisRunApi()"));
assert.ok(appOwner.includes("saveExamOutputDrafts("));
assert.equal(appOwner.includes("generate-output-draft"), false);

const dbOwnerStart = serverSource.indexOf("async function saveExamAnalysisOutputDrafts");
const dbOwnerEnd = serverSource.indexOf("async function generateExamAnalysisOutputDraft", dbOwnerStart);
assert.ok(dbOwnerStart >= 0 && dbOwnerEnd > dbOwnerStart);
const dbOwner = serverSource.slice(dbOwnerStart, dbOwnerEnd);
for (const expected of [
  "getExamAnalysisRun(analysisRunId)",
  "normalizeExamAnalysisOutputInputs",
  "updateExamAnalysisRun(analysisRunId",
  'eventType: "exam_analysis_output_draft_saved"',
  "return getExamAnalysisRun(analysisRunId)"
]) {
  assert.ok(dbOwner.includes(expected), `DB output draft owner missing ${expected}`);
}
assert.equal(dbOwner.includes("runExamAnalysisOutputDraftAi"), false);

const serverRouteStart = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs/save-output-drafts")'
);
const serverRouteEnd = serverSource.indexOf(
  'if (request.method === "DELETE" && requestUrl.pathname === "/api/exam-analysis-runs")',
  serverRouteStart
);
assert.ok(serverRouteStart >= 0 && serverRouteEnd > serverRouteStart);
const serverRoute = serverSource.slice(serverRouteStart, serverRouteEnd);
for (const expected of [
  "parseExamAnalysisOutputDraftsSaveRequest(await readJsonBody(request))",
  "saveExamAnalysisOutputDrafts(payload)",
  "Number(error.statusCode) || 500",
  "error.code",
  "error.field"
]) {
  assert.ok(serverRoute.includes(expected), `server output draft route missing ${expected}`);
}

const safeRouteStart = safeApiSource.indexOf(
  'if (pathname === "/api/exam-analysis-runs/save-output-drafts")'
);
const safeRouteEnd = safeApiSource.indexOf('if (["/api/attendance/check"', safeRouteStart);
assert.ok(safeRouteStart >= 0 && safeRouteEnd > safeRouteStart);
const safeRoute = safeApiSource.slice(safeRouteStart, safeRouteEnd);
for (const expected of [
  "parseExamAnalysisOutputDraftsSaveRequest(payload)",
  "auditSummary: { ...(currentRun.auditSummary ?? {}), outputDrafts }",
  'eventType: "exam_analysis_output_draft_saved"',
  'source: "supabase"'
]) {
  assert.ok(safeRoute.includes(expected), `safe output draft route missing ${expected}`);
}
for (const forbidden of ["generateExamAnalysisOutputDraft", "runExamAnalysisOutputDraftAi", "localStorage", "Solapi"]) {
  assert.equal(safeRoute.includes(forbidden), false, `safe output save must not run ${forbidden}`);
}

console.log("exam analysis output draft request, authoritative reread, and safe non-AI contract passed");
