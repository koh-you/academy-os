import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import {
  parseExamAnalysisQuestionReviewsSaveRequest,
  saveExamQuestionReviews
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
  reviews: [
    {
      confirmed: true,
      mainType: "함수 그래프",
      questionNumber: 1,
      reviewNote: "교사 확인",
      unitName: "함수"
    },
    {
      confirmed: false,
      mainType: "방정식",
      question_number: 2,
      unitName: "방정식"
    }
  ]
};
assert.deepEqual(parseExamAnalysisQuestionReviewsSaveRequest(requestPayload), {
  analysisRunId: "safe-exam-run-1",
  reviews: requestPayload.reviews
});
for (const payload of [
  { analysisRunId: "safe-exam-run-1", reviews: [] },
  { analysisRunId: "safe-exam-run-1", reviews: [null] },
  { analysisRunId: "safe-exam-run-1", reviews: [{ questionNumber: 0 }] },
  { analysisRunId: "safe-exam-run-1", reviews: [{ questionNumber: 1.5 }] },
  { analysisRunId: "safe-exam-run-1", reviews: [{ questionNumber: 201 }] },
  { analysisRunId: "safe-exam-run-1", reviews: [{ questionNumber: 1 }, { question_number: 1 }] }
]) {
  assert.throws(
    () => parseExamAnalysisQuestionReviewsSaveRequest(payload),
    (error) => error.code === "INVALID_API_PAYLOAD" && error.statusCode === 400 && String(error.field).startsWith("reviews")
  );
}
assert.throws(
  () => parseExamAnalysisQuestionReviewsSaveRequest({
    analysisRunId: "safe-exam-run-1",
    reviews: [{ questionNumber: 1 }],
    unexpected: true
  }),
  (error) => error.code === "INVALID_API_PAYLOAD" && error.field === "unexpected"
);

const requests = [];
const response = {
  analysisRun: { analysisRunId: "safe-exam-run-1", workflowStatus: "teacher_review" },
  events: [{ eventType: "question_teacher_review_saved" }],
  questions: [{ questionNumber: 1, rowStatus: "confirmed" }],
  source: "supabase",
  teacherReview: { confirmedCount: 1, reviewedCount: 2, totalQuestionCount: 2 }
};
const result = await saveExamQuestionReviews(
  async (path, payload, timeoutMs, timeoutMessage) => {
    requests.push({ path, payload, timeoutMessage, timeoutMs });
    return { ...response, ok: true };
  },
  requestPayload
);
assert.equal(requests[0].path, "/api/exam-analysis-runs/save-question-reviews");
assert.deepEqual(requests[0].payload, parseExamAnalysisQuestionReviewsSaveRequest(requestPayload));
assert.equal(requests[0].timeoutMs, 30000);
assert.equal(requests[0].timeoutMessage, "문항 검수 저장이 지연되고 있습니다.");
assert.deepEqual(result, response);
for (const field of ["source", "teacherReview"]) {
  await assert.rejects(
    saveExamQuestionReviews(async () => ({ ...response, [field]: undefined }), requestPayload),
    (error) => error.field === field && error.statusCode === 400
  );
}

for (const expected of [
  "export function parseExamAnalysisQuestionReviewsSaveRequest",
  "export async function saveExamQuestionReviews",
  "parseVersionedWriteRequest(method, questionReviewsPath, payload)",
  "parseVersionedWriteResponse(method, questionReviewsPath, result)"
]) {
  assert.ok(apiSource.includes(expected), `question review API contract missing ${expected}`);
}
for (const expected of [
  "async function saveExamAnalysisQuestionReviewsRequest(payload)",
  'return (await import("../domains/exams/examAnalysisRunApi.js")).saveExamQuestionReviews(',
  "postJsonWithTimeout,"
]) {
  assert.ok(appSource.includes(expected), `App question review transport missing ${expected}`);
}

const serverRouteStart = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs/save-question-reviews")'
);
const serverRouteEnd = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs/save-prompt-studio")',
  serverRouteStart
);
assert.ok(serverRouteStart >= 0 && serverRouteEnd > serverRouteStart);
const serverRoute = serverSource.slice(serverRouteStart, serverRouteEnd);
for (const expected of [
  "parseExamAnalysisQuestionReviewsSaveRequest(await readJsonBody(request))",
  "saveExamAnalysisQuestionTeacherReviews(payload)",
  "Number(error.statusCode) || 500",
  "error.code",
  "error.field"
]) {
  assert.ok(serverRoute.includes(expected), `server question review route missing ${expected}`);
}

const routeOwnerStart = routeSource.indexOf("export async function saveExamAnalysisQuestionTeacherReviews");
const routeOwnerEnd = routeSource.indexOf("export async function recordExamAnalysisEvent", routeOwnerStart);
assert.ok(routeOwnerStart >= 0 && routeOwnerEnd > routeOwnerStart);
const routeOwner = routeSource.slice(routeOwnerStart, routeOwnerEnd);
for (const expected of [
  "normalizeQuestionTeacherReview",
  "await patchRows(",
  '"exam_analysis_questions"',
  "teacher_fields: teacherFields",
  "final_fields: review.confirmed",
  "const rowsAfterReview = await listRows(",
  'eventType: "question_teacher_review_saved"',
  "const nextDetail = await getExamAnalysisRun(analysisRunId)",
  "teacherReview: nextDetail.analysisRun?.auditSummary?.teacherReview"
]) {
  assert.ok(routeOwner.includes(expected), `DB question review owner missing ${expected}`);
}

const safeRouteStart = safeApiSource.indexOf(
  'if (pathname === "/api/exam-analysis-runs/save-question-reviews")'
);
const safeRouteEnd = safeApiSource.indexOf(
  'if (pathname === "/api/exam-analysis-runs/save-prompt-studio")',
  safeRouteStart
);
assert.ok(safeRouteStart >= 0 && safeRouteEnd > safeRouteStart);
const safeRoute = safeApiSource.slice(safeRouteStart, safeRouteEnd);
for (const expected of [
  "parseExamAnalysisQuestionReviewsSaveRequest(payload)",
  "teacherFields",
  "finalFields",
  "teacherReview",
  'eventType: "question_teacher_review_saved"',
  'source: "supabase"'
]) {
  assert.ok(safeRoute.includes(expected), `safe question review route missing ${expected}`);
}
for (const forbidden of ["callOpenAi", "runAnthropic", "runPdf", "uploadStorageObject", "Solapi"]) {
  assert.equal(safeRoute.includes(forbidden), false, `safe question review route owns ${forbidden}`);
}

console.log("exam analysis teacher question review contract, source readback, and no-paid-action safe boundary passed");
