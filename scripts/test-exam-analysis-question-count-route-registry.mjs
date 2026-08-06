import assert from "node:assert/strict";
import {
  createExamAnalysisQuestionCountRouteRegistry,
  examAnalysisQuestionCountRouteSignatures
} from "../src/shared/server/examAnalysisQuestionCountRouteRegistry.js";

const confirmCalls = [];
const events = [];
const parseCalls = [];
const sends = [];
let rawBody = {};
let parsedPayload = {
  analysisRunId: "run-1",
  confirmedBy: "teacher",
  questionCount: 12
};
let routeError = null;
const registry = createExamAnalysisQuestionCountRouteRegistry({
  confirmExamAnalysisQuestionCount: async (payload) => {
    events.push("confirm");
    confirmCalls.push(payload);
    if (routeError?.stage === "confirm") throw routeError.error;
    return {
      analysisRun: { analysisRunId: payload.analysisRunId, confirmedQuestionCount: payload.questionCount },
      events: [{ eventType: "question_count_confirmed" }],
      insertedQuestionCount: payload.questionCount,
      questions: [{ questionNumber: 1 }],
      source: "supabase"
    };
  },
  parseExamAnalysisQuestionCountConfirmRequest: (body) => {
    events.push("parse");
    parseCalls.push(body);
    if (routeError?.stage === "parse") throw routeError.error;
    return parsedPayload;
  },
  readJsonBody: async () => {
    events.push("read");
    return rawBody;
  },
  sendJson: (request, response, statusCode, body) => {
    sends.push({ body, request, response, statusCode });
  }
});

function route(method = "POST", path = "/api/exam-analysis-runs/confirm-question-count") {
  return {
    request: { method },
    response: { path },
    requestUrl: new URL(path, "http://127.0.0.1")
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(examAnalysisQuestionCountRouteSignatures), true);
assert.equal(examAnalysisQuestionCountRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(examAnalysisQuestionCountRouteSignatures, [
  { method: "POST", path: "/api/exam-analysis-runs/confirm-question-count" }
]);

assert.equal(await registry.dispatch(route("GET")), false);
assert.equal(await registry.dispatch(route("POST", "/unknown")), false);
assert.deepEqual(events, []);
assert.deepEqual(sends, []);

rawBody = { analysisRunId: " run-1 ", questionCount: 12 };
events.length = 0;
const requestRoute = route();
assert.equal(await registry.dispatch(requestRoute), true);
assert.deepEqual(events, ["read", "parse", "confirm"]);
assert.deepEqual(parseCalls.at(-1), rawBody);
assert.deepEqual(confirmCalls.at(-1), parsedPayload);
assert.deepEqual(sends.at(-1), {
  body: {
    ok: true,
    analysisRun: { analysisRunId: "run-1", confirmedQuestionCount: 12 },
    events: [{ eventType: "question_count_confirmed" }],
    insertedQuestionCount: 12,
    questions: [{ questionNumber: 1 }],
    source: "supabase"
  },
  request: requestRoute.request,
  response: requestRoute.response,
  statusCode: 200
});

routeError = {
  stage: "parse",
  error: Object.assign(new Error("invalid question count"), {
    code: "INVALID_API_PAYLOAD",
    field: "questionCount",
    statusCode: 400
  })
};
assert.equal(await registry.dispatch(route()), true);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  error: "invalid question count",
  code: "INVALID_API_PAYLOAD",
  field: "questionCount"
});
assert.equal(sends.at(-1).statusCode, 400);

routeError = { stage: "confirm", error: new Error("source failed") };
assert.equal(await registry.dispatch(route()), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("exam analysis question count parser, source action, response, and error contracts passed");
