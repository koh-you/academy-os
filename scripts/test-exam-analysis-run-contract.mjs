import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import {
  parseExamAnalysisRunWriteRequest,
  saveExamAnalysisRunContractRequest
} from "../src/domains/exams/examAnalysisRunApi.js";

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const [apiSource, componentSource, safeApiSource, serverSource] = await Promise.all([
  readSource("src/domains/exams/examAnalysisRunApi.js"),
  readSource("src/domains/exams/ExamAnalysisPipelineCenter.jsx"),
  readSource("scripts/safe-local-api.mjs"),
  readSource("api/server.js")
]);

const routeStart = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs")'
);
const routeEnd = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs/confirm-question-count")',
  routeStart
);
assert.ok(routeStart >= 0 && routeEnd > routeStart);
const routeSource = serverSource.slice(routeStart, routeEnd);
for (const expected of [
  "parseExamAnalysisRunWriteRequest(await readJsonBody(request))",
  "upsertExamAnalysisRun(payload.analysisRun)",
  "Number(error.statusCode) || 500",
  "error.code",
  "error.field"
]) {
  assert.ok(routeSource.includes(expected), `exam run route missing ${expected}`);
}
assert.equal(routeSource.includes("payload.analysisRun ?? payload.run ?? payload"), false);

for (const expected of [
  "export function parseExamAnalysisRunWriteRequest",
  "Object.prototype.hasOwnProperty.call(payload, \"analysisRun\")",
  "Object.prototype.hasOwnProperty.call(payload, \"run\")",
  "hasContainer ? payload : { analysisRun: payload }",
  "export async function saveExamAnalysisRunContractRequest",
  "parseVersionedWriteRequest(method, path",
  "parseVersionedWriteResponse(method, path, result)"
]) {
  assert.ok(apiSource.includes(expected), `exam run API contract missing ${expected}`);
}
for (const expected of [
  'import { saveExamAnalysisRunContractRequest } from "./examAnalysisRunApi.js"',
  "const result = await saveExamAnalysisRunContractRequest({",
  "analysisRun: buildRunPayload()",
  "request: postJson",
  "await loadRuns(savedRun.analysisRunId)"
]) {
  assert.ok(componentSource.includes(expected), `exam run UI owner missing ${expected}`);
}
assert.equal(
  componentSource.includes('postJson("/api/exam-analysis-runs", { analysisRun: buildRunPayload() })'),
  false
);

const analysisRun = {
  analysisRunId: "safe-exam-run-1",
  examCycle: "2학기 중간",
  grade: "고1",
  schoolName: "안전고",
  subject: "공통수학1",
  title: "안전 시험분석"
};
assert.deepEqual(parseExamAnalysisRunWriteRequest({ analysisRun }), { analysisRun });
assert.deepEqual(parseExamAnalysisRunWriteRequest({ run: analysisRun }), { analysisRun });
assert.deepEqual(parseExamAnalysisRunWriteRequest(analysisRun), { analysisRun });
assert.throws(
  () => parseExamAnalysisRunWriteRequest({ analysisRun, unexpected: true }),
  (error) => error.field === "unexpected" && error.statusCode === 400
);

const requests = [];
const response = { analysisRun: { ...analysisRun, updatedAt: "2099-08-05T00:00:00.000Z" }, source: "supabase" };
const result = await saveExamAnalysisRunContractRequest({
  analysisRun,
  request: async (path, payload) => {
    requests.push({ path, payload });
    return { ...response, ok: true };
  }
});
assert.deepEqual(requests, [{ path: "/api/exam-analysis-runs", payload: { analysisRun } }]);
assert.deepEqual(result, response);
await assert.rejects(
  saveExamAnalysisRunContractRequest({
    analysisRun,
    request: async () => ({ analysisRun })
  }),
  (error) => error.field === "source" && error.statusCode === 400
);

const safeRouteStart = safeApiSource.indexOf('if (pathname === "/api/exam-analysis-runs")');
const safeRouteEnd = safeApiSource.indexOf('if (["/api/attendance/check"', safeRouteStart);
assert.ok(safeRouteStart >= 0 && safeRouteEnd > safeRouteStart);
const safeRouteSource = safeApiSource.slice(safeRouteStart, safeRouteEnd);
for (const expected of [
  "parseExamAnalysisRunWriteRequest(payload)",
  "current.analysisRunId || `safe-exam-analysis-${crypto.randomUUID()}`",
  'workflowStatus: current.workflowStatus || "draft"',
  'upsertById(state.examAnalysisRuns, analysisRun, ["analysisRunId"])',
  'return { analysisRun, ok: true, source: "supabase" }'
]) {
  assert.ok(safeRouteSource.includes(expected), `safe exam run route missing ${expected}`);
}
for (const forbidden of [
  "callOpenAi",
  "generateExamAnalysis",
  "runExamAnalysis",
  "uploadStorageObject",
  "upsertExamAnalysisRun"
]) {
  assert.equal(safeRouteSource.includes(forbidden), false, `safe exam run route owns ${forbidden}`);
}

const safeReadStart = safeApiSource.indexOf(
  'if (request.method === "GET" && requestUrl.pathname === "/api/exam-analysis-runs")'
);
const safeReadEnd = safeApiSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/resource-material-files")',
  safeReadStart
);
assert.ok(safeReadStart >= 0 && safeReadEnd > safeReadStart);
const safeReadSource = safeApiSource.slice(safeReadStart, safeReadEnd);
for (const expected of ["analysisRuns: state.examAnalysisRuns", "analysisRunId", "questions: []", "sources: []"]) {
  assert.ok(safeReadSource.includes(expected), `safe exam run readback missing ${expected}`);
}

console.log("exam analysis run canonical, explicit legacy, source response, and no-paid-action safe contract passed");
