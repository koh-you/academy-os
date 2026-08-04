import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import {
  parseExamAnalysisPromptStudioSaveRequest,
  saveExamPromptStudio
} from "../src/domains/exams/examAnalysisRunApi.js";

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const [apiSource, panelSource, routeSource, safeApiSource, serverSource] = await Promise.all([
  readSource("src/domains/exams/examAnalysisRunApi.js"),
  readSource("src/domains/exams/ExamAnalysisPromptStudioPanel.jsx"),
  readSource("api/routes/examAnalysisPipeline.js"),
  readSource("scripts/safe-local-api.mjs"),
  readSource("api/server.js")
]);

const requestPayload = {
  analysisRunId: " safe-exam-run-1 ",
  expectedRevision: 2,
  promptStudioDraft: {
    revision: 2,
    roleInputs: { examAnalysis: { scoreStructure: "객관식 12문항" } },
    savedBy: "teacher"
  }
};
assert.deepEqual(parseExamAnalysisPromptStudioSaveRequest(requestPayload), {
  ...requestPayload,
  analysisRunId: "safe-exam-run-1"
});
assert.deepEqual(
  parseExamAnalysisPromptStudioSaveRequest({
    analysisRunId: "safe-exam-run-1",
    promptStudioDraft: {}
  }),
  { analysisRunId: "safe-exam-run-1", expectedRevision: 0, promptStudioDraft: {} }
);
for (const expectedRevision of [-1, 1.5]) {
  assert.throws(
    () => parseExamAnalysisPromptStudioSaveRequest({
      analysisRunId: "safe-exam-run-1",
      expectedRevision,
      promptStudioDraft: {}
    }),
    (error) => error.code === "INVALID_API_PAYLOAD" && error.field === "expectedRevision" && error.statusCode === 400
  );
}
assert.throws(
  () => parseExamAnalysisPromptStudioSaveRequest({
    analysisRunId: "safe-exam-run-1",
    expectedRevision: "2",
    promptStudioDraft: {}
  }),
  (error) => error.code === "INVALID_API_PAYLOAD" && error.field === "expectedRevision"
);
assert.throws(
  () => parseExamAnalysisPromptStudioSaveRequest({
    analysisRunId: "safe-exam-run-1",
    promptStudioDraft: {},
    unexpected: true
  }),
  (error) => error.code === "INVALID_API_PAYLOAD" && error.field === "unexpected"
);

const requests = [];
const response = {
  analysisRun: { analysisRunId: "safe-exam-run-1", auditSummary: { promptStudio: { revision: 3 } } },
  promptStudioDraft: { revision: 3 },
  saveVerification: { revision: 3, verified: true, verifiedAt: "2026-08-05T00:00:00.000Z" },
  source: "supabase"
};
const result = await saveExamPromptStudio(
  async (path, payload, timeoutMs, timeoutMessage) => {
    requests.push({ path, payload, timeoutMessage, timeoutMs });
    return { ...response, ok: true };
  },
  requestPayload
);
assert.equal(requests[0].path, "/api/exam-analysis-runs/save-prompt-studio");
assert.deepEqual(requests[0].payload, parseExamAnalysisPromptStudioSaveRequest(requestPayload));
assert.equal(requests[0].timeoutMs, 20000);
assert.equal(requests[0].timeoutMessage, "프롬프트 작업본 저장이 지연되고 있습니다.");
assert.deepEqual(result, response);
for (const field of ["source", "promptStudioDraft", "saveVerification"]) {
  await assert.rejects(
    saveExamPromptStudio(async () => ({ ...response, [field]: undefined }), requestPayload),
    (error) => error.field === field && error.statusCode === 400
  );
}

for (const expected of [
  "export function parseExamAnalysisPromptStudioSaveRequest",
  "export async function saveExamPromptStudio",
  "parseVersionedWriteRequest(method, promptStudioPath, payload)",
  "parseVersionedWriteResponse(method, promptStudioPath, result)"
]) {
  assert.ok(apiSource.includes(expected), `prompt studio API contract missing ${expected}`);
}
for (const expected of [
  'import { saveExamPromptStudio } from "./examAnalysisRunApi.js"',
  "const result = await saveExamPromptStudio(postJsonWithTimeout, payload)",
  "applyExamAnalysisPromptStudioSaveVerification(current, result)"
]) {
  assert.ok(panelSource.includes(expected), `Prompt Studio client binding missing ${expected}`);
}
assert.equal(panelSource.includes('postJsonWithTimeout("/api/exam-analysis-runs/save-prompt-studio"'), false);

const serverRouteStart = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs/save-prompt-studio")'
);
const serverRouteEnd = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs/save-output-drafts")',
  serverRouteStart
);
assert.ok(serverRouteStart >= 0 && serverRouteEnd > serverRouteStart);
const serverRoute = serverSource.slice(serverRouteStart, serverRouteEnd);
for (const expected of [
  "parseExamAnalysisPromptStudioSaveRequest(await readJsonBody(request))",
  "saveExamAnalysisPromptStudioDraft(payload)",
  "Number(error.statusCode) || 500",
  "error.code",
  "error.field"
]) {
  assert.ok(serverRoute.includes(expected), `server Prompt Studio route missing ${expected}`);
}

const routeOwnerStart = routeSource.indexOf("export async function saveExamAnalysisPromptStudioDraft");
const routeOwnerEnd = routeSource.indexOf("export async function getExamAnalysisSource", routeOwnerStart);
assert.ok(routeOwnerStart >= 0 && routeOwnerEnd > routeOwnerStart);
const routeOwner = routeSource.slice(routeOwnerStart, routeOwnerEnd);
for (const expected of [
  "getExamAnalysisPromptStudioDraftFromRun",
  "previousDraft.revision !== expected",
  "statusCode = 409",
  "normalizeExamAnalysisPromptStudioDraft",
  "updateExamAnalysisRun(analysisRunId",
  "const reread = await getExamAnalysisRun(analysisRunId)",
  "areExamAnalysisPromptStudioDraftsEqual",
  'eventType: "exam_analysis_prompt_studio_saved"',
  "saveVerification: { verified: true"
]) {
  assert.ok(routeOwner.includes(expected), `DB Prompt Studio owner missing ${expected}`);
}

const safeRouteStart = safeApiSource.indexOf(
  'if (pathname === "/api/exam-analysis-runs/save-prompt-studio")'
);
const safeRouteEnd = safeApiSource.indexOf('if (["/api/attendance/check"', safeRouteStart);
assert.ok(safeRouteStart >= 0 && safeRouteEnd > safeRouteStart);
const safeRoute = safeApiSource.slice(safeRouteStart, safeRouteEnd);
for (const expected of [
  "parseExamAnalysisPromptStudioSaveRequest(payload)",
  "previousDraft.revision !== parsedPayload.expectedRevision",
  "statusCode: 409",
  "normalizeExamAnalysisPromptStudioDraft",
  'eventType: "exam_analysis_prompt_studio_saved"',
  "saveVerification:",
  'source: "supabase"'
]) {
  assert.ok(safeRoute.includes(expected), `safe Prompt Studio route missing ${expected}`);
}
for (const forbidden of ["callOpenAi", "runAnthropic", "runPdf", "uploadStorageObject", "Solapi"]) {
  assert.equal(safeRoute.includes(forbidden), false, `safe Prompt Studio route owns ${forbidden}`);
}

console.log("exam analysis Prompt Studio revision CAS, verified source response, and no-paid-action safe boundary passed");
