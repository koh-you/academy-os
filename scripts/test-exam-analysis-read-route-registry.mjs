import assert from "node:assert/strict";
import {
  createExamAnalysisReadRouteRegistry,
  examAnalysisReadRouteSignatures
} from "../src/shared/server/examAnalysisReadRouteRegistry.js";

const calls = [];
const sends = [];
let sourceError = "";
const detail = {
  analysisRun: { analysisRunId: "run-1", subject: "공통수학1" },
  sources: [{ sourceId: "source-1" }],
  questions: [{ questionId: "question-1" }]
};
const registry = createExamAnalysisReadRouteRegistry({
  getExamAnalysisRun: async (analysisRunId) => {
    calls.push(["get", analysisRunId]);
    if (sourceError === "get") throw new Error("run read failed");
    return detail;
  },
  getSsenTypeCatalogForExamAnalysis: (input) => {
    calls.push(["catalog", input]);
    if (sourceError === "catalog") throw new Error("catalog failed");
    return { status: "scope_matched", types: [{ typeCode: "A01" }] };
  },
  listExamAnalysisRuns: async (filters) => {
    calls.push(["list", filters]);
    if (sourceError === "list") throw new Error("run list failed");
    return { analysisRuns: [{ analysisRunId: "run-list-1" }], source: "supabase" };
  },
  sendJson: (request, response, statusCode, body) => {
    sends.push({ body, request, response, statusCode });
  }
});

function route(path, method = "GET") {
  return {
    request: { method },
    response: { path },
    requestUrl: new URL(path, "http://127.0.0.1")
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(examAnalysisReadRouteSignatures), true);
assert.equal(examAnalysisReadRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(examAnalysisReadRouteSignatures, [
  { method: "GET", path: "/api/exam-analysis-runs" },
  { method: "GET", path: "/api/exam-analysis-ssen-types" }
]);

assert.equal(await registry.dispatch(route("/api/exam-analysis-runs", "POST")), false);
assert.equal(await registry.dispatch(route("/api/unknown")), false);
assert.deepEqual(calls, []);
assert.deepEqual(sends, []);

const listRoute = route(
  "/api/exam-analysis-runs?examPrepId=prep-1&workflowStatus=review&limit=12"
);
assert.equal(await registry.dispatch(listRoute), true);
assert.deepEqual(calls.at(-1), ["list", {
  examPrepId: "prep-1",
  workflowStatus: "review",
  limit: "12"
}]);
assert.deepEqual(sends.at(-1), {
  body: {
    ok: true,
    analysisRuns: [{ analysisRunId: "run-list-1" }],
    source: "supabase"
  },
  request: listRoute.request,
  response: listRoute.response,
  statusCode: 200
});

const detailRoute = route("/api/exam-analysis-runs?id=preferred&analysisRunId=fallback");
assert.equal(await registry.dispatch(detailRoute), true);
assert.deepEqual(calls.at(-1), ["get", "preferred"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...detail });

const fallbackDetailRoute = route("/api/exam-analysis-runs?analysisRunId=fallback");
assert.equal(await registry.dispatch(fallbackDetailRoute), true);
assert.deepEqual(calls.at(-1), ["get", "fallback"]);

const catalogWithoutRun = route(
  "/api/exam-analysis-ssen-types?subject=%EA%B3%B5%ED%86%B5%EC%88%98%ED%95%991&scope=1%EB%8B%A8%EC%9B%90"
);
assert.equal(await registry.dispatch(catalogWithoutRun), true);
assert.deepEqual(calls.at(-1), ["catalog", {
  subject: "공통수학1",
  scope: "1단원",
  analysisRun: null,
  sourceFiles: [],
  questions: []
}]);

const catalogWithRun = route(
  "/api/exam-analysis-ssen-types?analysisRunId=run-1&subject=override&scope=2%EB%8B%A8%EC%9B%90"
);
assert.equal(await registry.dispatch(catalogWithRun), true);
assert.deepEqual(calls.slice(-2), [
  ["get", "run-1"],
  ["catalog", {
    subject: "override",
    scope: "2단원",
    analysisRun: detail.analysisRun,
    sourceFiles: detail.sources,
    questions: detail.questions
  }]
]);
assert.deepEqual(sends.at(-1).body, {
  ok: true,
  status: "scope_matched",
  types: [{ typeCode: "A01" }]
});

sourceError = "list";
const listFailureRoute = route("/api/exam-analysis-runs");
assert.equal(await registry.dispatch(listFailureRoute), true);
assert.deepEqual(sends.at(-1), {
  body: { ok: false, error: "run list failed" },
  request: listFailureRoute.request,
  response: listFailureRoute.response,
  statusCode: 500
});

sourceError = "get";
const catalogReadFailureRoute = route(
  "/api/exam-analysis-ssen-types?analysisRunId=missing"
);
assert.equal(await registry.dispatch(catalogReadFailureRoute), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "run read failed" });
assert.equal(sends.at(-1).statusCode, 500);
assert.notEqual(calls.at(-1)[0], "catalog");

sourceError = "catalog";
const catalogFailureRoute = route("/api/exam-analysis-ssen-types");
assert.equal(await registry.dispatch(catalogFailureRoute), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "catalog failed" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("exam analysis read aliases, source selection, catalog inputs, and 500 contracts passed");
