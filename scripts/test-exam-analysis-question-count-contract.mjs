import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import {
  confirmExamQuestionCount,
  parseExamAnalysisQuestionCountConfirmRequest
} from "../src/domains/exams/examAnalysisRunApi.js";

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const [apiSource, appSource, routeSource, safeApiSource, serverSource] = await Promise.all([
  readSource("src/domains/exams/examAnalysisRunApi.js"),
  readSource("src/app/App.jsx"),
  readSource("api/routes/examAnalysisPipeline.js"),
  readSource("scripts/safe-local-api.mjs"),
  readSource("api/server.js")
]);

const requestPayload = {
  analysisRunId: " safe-exam-run-1 ",
  detectedQuestionConfidence: 0.75,
  detectedQuestionEvidence: ["1~12번 확인"],
  missingQuestionNumbers: [7],
  questionCount: 12
};
assert.deepEqual(parseExamAnalysisQuestionCountConfirmRequest(requestPayload), {
  analysisRunId: "safe-exam-run-1",
  confirmedBy: "teacher",
  detectedQuestionConfidence: 0.75,
  detectedQuestionEvidence: ["1~12번 확인"],
  missingQuestionNumbers: [7],
  questionCount: 12
});
for (const questionCount of [0, 201, 1.5]) {
  assert.throws(
    () => parseExamAnalysisQuestionCountConfirmRequest({ analysisRunId: "safe-exam-run-1", questionCount }),
    (error) => error.code === "INVALID_API_PAYLOAD" && error.field === "questionCount" && error.statusCode === 400
  );
}
assert.throws(
  () => parseExamAnalysisQuestionCountConfirmRequest({
    analysisRunId: "safe-exam-run-1",
    questionCount: 12,
    unexpected: true
  }),
  (error) => error.code === "INVALID_API_PAYLOAD" && error.field === "unexpected"
);

const requests = [];
const response = {
  analysisRun: { analysisRunId: "safe-exam-run-1", confirmedQuestionCount: 12 },
  events: [{ eventType: "question_count_confirmed" }],
  insertedQuestionCount: 12,
  questions: Array.from({ length: 12 }, (_, index) => ({ questionNumber: index + 1 })),
  source: "supabase"
};
const result = await confirmExamQuestionCount(
  async (path, payload, timeoutMs, timeoutMessage) => {
    requests.push({ path, payload, timeoutMessage, timeoutMs });
    return { ...response, ok: true };
  },
  requestPayload
);
assert.equal(requests[0].path, "/api/exam-analysis-runs/confirm-question-count");
assert.deepEqual(requests[0].payload, parseExamAnalysisQuestionCountConfirmRequest(requestPayload));
assert.equal(requests[0].timeoutMs, 30000);
assert.equal(requests[0].timeoutMessage, "문항 수 저장이 늦습니다.");
assert.deepEqual(result, response);
await assert.rejects(
  confirmExamQuestionCount(
    async () => ({ ...response, source: undefined }),
    requestPayload
  ),
  (error) => error.field === "source" && error.statusCode === 400
);

for (const expected of [
  "export function parseExamAnalysisQuestionCountConfirmRequest",
  "export async function confirmExamQuestionCount",
  "parseVersionedWriteRequest(method, questionCountPath, payload)",
  "parseVersionedWriteResponse(method, questionCountPath, result)"
]) {
  assert.ok(apiSource.includes(expected), `question count API contract missing ${expected}`);
}
for (const expected of [
  "async function confirmExamAnalysisQuestionCountRequest(payload)",
  'return (await import("../domains/exams/examAnalysisRunApi.js")).confirmExamQuestionCount(',
  "postJsonWithTimeout,"
]) {
  assert.ok(appSource.includes(expected), `App question count transport missing ${expected}`);
}

const serverRouteStart = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs/confirm-question-count")'
);
const serverRouteEnd = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs/detect-question-boundaries")',
  serverRouteStart
);
assert.ok(serverRouteStart >= 0 && serverRouteEnd > serverRouteStart);
const serverRoute = serverSource.slice(serverRouteStart, serverRouteEnd);
for (const expected of [
  "parseExamAnalysisQuestionCountConfirmRequest(await readJsonBody(request))",
  "confirmExamAnalysisQuestionCount(payload)",
  "Number(error.statusCode) || 500",
  "error.code",
  "error.field"
]) {
  assert.ok(serverRoute.includes(expected), `server question count route missing ${expected}`);
}
assert.equal(serverRoute.includes("payload.confirmedBy || \"teacher\""), false);

for (const expected of [
  "ensure_exam_analysis_question_rows",
  'workflowStatus: "rows_created"',
  'questionCountStatus: "teacher_confirmed"',
  'eventType: "question_count_confirmed"',
  "const nextDetail = await getExamAnalysisRun(analysisRunId)",
  "insertedQuestionCount: Number(insertedQuestionCount || 0)"
]) {
  assert.ok(routeSource.includes(expected), `DB question count owner missing ${expected}`);
}

const safeRouteStart = safeApiSource.indexOf(
  'if (pathname === "/api/exam-analysis-runs/confirm-question-count")'
);
const safeRouteEnd = safeApiSource.indexOf(
  'if (pathname === "/api/exam-analysis-runs/save-question-reviews")',
  safeRouteStart
);
assert.ok(safeRouteStart >= 0 && safeRouteEnd > safeRouteStart);
const safeRoute = safeApiSource.slice(safeRouteStart, safeRouteEnd);
for (const expected of [
  "parseExamAnalysisQuestionCountConfirmRequest(payload)",
  "confirmedQuestionCount: parsedPayload.questionCount",
  'questionCountStatus: "teacher_confirmed"',
  'workflowStatus: "rows_created"',
  'eventType: "question_count_confirmed"',
  'source: "supabase"'
]) {
  assert.ok(safeRoute.includes(expected), `safe question count route missing ${expected}`);
}
for (const forbidden of ["callOpenAi", "runAnthropic", "runPdf", "uploadStorageObject", "Solapi"]) {
  assert.equal(safeRoute.includes(forbidden), false, `safe question count route owns ${forbidden}`);
}

console.log("exam analysis question count teacher confirmation contract and no-paid-action safe boundary passed");
