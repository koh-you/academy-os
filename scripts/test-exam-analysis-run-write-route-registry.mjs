import assert from "node:assert/strict";
import {
  createExamAnalysisRunWriteRouteRegistry,
  examAnalysisRunWriteRouteSignatures
} from "../src/shared/server/examAnalysisRunWriteRouteRegistry.js";

const events = [];
const parseCalls = [];
const sends = [];
const upsertCalls = [];
let rawBody = {};
let parseResult = { analysisRun: { analysisRunId: "run-1", title: "안전 시험분석" } };
let routeError = null;
const registry = createExamAnalysisRunWriteRouteRegistry({
  parseExamAnalysisRunWriteRequest: (body) => {
    events.push("parse");
    parseCalls.push(body);
    if (routeError?.stage === "parse") throw routeError.error;
    return parseResult;
  },
  readJsonBody: async () => {
    events.push("read");
    return rawBody;
  },
  sendJson: (request, response, statusCode, body) => {
    sends.push({ body, request, response, statusCode });
  },
  upsertExamAnalysisRun: async (analysisRun) => {
    events.push("upsert");
    upsertCalls.push(analysisRun);
    if (routeError?.stage === "upsert") throw routeError.error;
    return {
      analysisRun: { ...analysisRun, updatedAt: "2099-08-06T00:00:00.000Z" },
      source: "supabase"
    };
  }
});

function route(method = "POST", path = "/api/exam-analysis-runs") {
  return {
    request: { method },
    response: { path },
    requestUrl: new URL(path, "http://127.0.0.1")
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(examAnalysisRunWriteRouteSignatures), true);
assert.equal(examAnalysisRunWriteRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(examAnalysisRunWriteRouteSignatures, [
  { method: "POST", path: "/api/exam-analysis-runs" }
]);

assert.equal(await registry.dispatch(route("GET")), false);
assert.equal(await registry.dispatch(route("POST", "/unknown")), false);
assert.deepEqual(events, []);
assert.deepEqual(sends, []);

rawBody = { analysisRun: { analysisRunId: "run-1", title: "안전 시험분석" } };
events.length = 0;
const requestRoute = route();
assert.equal(await registry.dispatch(requestRoute), true);
assert.deepEqual(events, ["read", "parse", "upsert"]);
assert.deepEqual(parseCalls.at(-1), rawBody);
assert.deepEqual(upsertCalls.at(-1), parseResult.analysisRun);
assert.deepEqual(sends.at(-1), {
  body: {
    ok: true,
    analysisRun: {
      ...parseResult.analysisRun,
      updatedAt: "2099-08-06T00:00:00.000Z"
    },
    source: "supabase"
  },
  request: requestRoute.request,
  response: requestRoute.response,
  statusCode: 200
});

routeError = {
  stage: "parse",
  error: Object.assign(new Error("invalid field"), {
    code: "invalid_payload",
    field: "analysisRun.title",
    statusCode: 400
  })
};
assert.equal(await registry.dispatch(route()), true);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  error: "invalid field",
  code: "invalid_payload",
  field: "analysisRun.title"
});
assert.equal(sends.at(-1).statusCode, 400);

routeError = { stage: "upsert", error: new Error("source failed") };
assert.equal(await registry.dispatch(route()), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("exam analysis run write parser, source readback, and structured error contracts passed");
