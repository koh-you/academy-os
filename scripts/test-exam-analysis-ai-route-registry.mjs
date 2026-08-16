import assert from "node:assert/strict";
import {
  createExamAnalysisAiRouteRegistry,
  examAnalysisAiRouteSignatures
} from "../src/shared/server/examAnalysisAiRouteRegistry.js";

const calls = {
  detect: [],
  fill: [],
  generate: [],
  refine: [],
  verify: []
};
const sends = [];
let operationSequence = 0;
let routeError = null;

function record(name, payload, result) {
  calls[name].push(payload);
  if (routeError === name) throw new Error(`${name} failed`);
  return result;
}

const registry = createExamAnalysisAiRouteRegistry({
  createExamAnalysisStorageOperations: () => ({ operationId: ++operationSequence }),
  detectExamAnalysisQuestionBoundaries: async (payload) => record("detect", payload, { boundaryCount: 2 }),
  fillExamAnalysisQuestionRowsWithAi: async (payload) => record("fill", payload, { filledCount: 3 }),
  generateExamAnalysisOutputDraft: async (payload) => record("generate", payload, { outputType: payload.outputType }),
  readJsonBody: async (request) => request.body,
  refineExamAnalysisQuestionRowsWithAi: async (payload) => record("refine", payload, { refinedCount: 1 }),
  sendJson: (request, response, statusCode, body) => {
    sends.push({ body, request, response, statusCode });
  },
  verifyExamAnalysisSourceFileWithAi: async (sourceId, options) => record(
    "verify",
    { options, sourceId },
    { provider: "fixture", sourceId }
  )
});

function route(path, body = {}, method = "POST") {
  return {
    request: { body, method },
    response: { path },
    requestUrl: new URL(path, "http://127.0.0.1")
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(examAnalysisAiRouteSignatures), true);
assert.equal(examAnalysisAiRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(examAnalysisAiRouteSignatures, [
  { method: "POST", path: "/api/exam-analysis-source-files/vision-check" },
  { method: "POST", path: "/api/exam-analysis-runs/detect-question-boundaries" },
  { method: "POST", path: "/api/exam-analysis-runs/fill-question-rows" },
  { method: "POST", path: "/api/exam-analysis-runs/refine-question-rows" },
  { method: "POST", path: "/api/exam-analysis-runs/generate-output-draft" }
]);

assert.equal(await registry.dispatch(route("/api/exam-analysis-runs/detect-question-boundaries", {}, "GET")), false);
assert.equal(await registry.dispatch(route("/api/unknown")), false);
assert.equal(operationSequence, 0);
assert.equal(sends.length, 0);

const verifyRoute = route("/api/exam-analysis-source-files/vision-check", { sourceId: "source-1" });
assert.equal(await registry.dispatch(verifyRoute), true);
assert.deepEqual(calls.verify.at(-1), {
  options: { operations: { operationId: 1 } },
  sourceId: "source-1"
});
assert.deepEqual(sends.at(-1), {
  body: { ok: true, provider: "fixture", sourceId: "source-1" },
  request: verifyRoute.request,
  response: verifyRoute.response,
  statusCode: 200
});

const detectRoute = route("/api/exam-analysis-runs/detect-question-boundaries", {
  analysisRunId: "run-1",
  sourceId: "source-2"
});
assert.equal(await registry.dispatch(detectRoute), true);
assert.deepEqual(calls.detect.at(-1), {
  analysisRunId: "run-1",
  operations: { operationId: 2 },
  sourceId: "source-2"
});
assert.deepEqual(sends.at(-1).body, { boundaryCount: 2, ok: true });
assert.equal(sends.at(-1).statusCode, 200);

const fillRoute = route("/api/exam-analysis-runs/fill-question-rows", {
  analysisRunId: "run-2",
  sourceId: "source-3"
});
assert.equal(await registry.dispatch(fillRoute), true);
assert.deepEqual(calls.fill.at(-1), {
  analysisRunId: "run-2",
  operations: { operationId: 3 },
  sourceId: "source-3"
});
assert.deepEqual(sends.at(-1).body, { filledCount: 3, ok: true });

const refineRoute = route("/api/exam-analysis-runs/refine-question-rows", {
  analysisRunId: "run-3",
  sourceId: "source-4",
  targetQuestionNumbers: [2, 5]
});
assert.equal(await registry.dispatch(refineRoute), true);
assert.deepEqual(calls.refine.at(-1), {
  analysisRunId: "run-3",
  operations: { operationId: 4 },
  sourceId: "source-4",
  targetQuestionNumbers: [2, 5]
});
assert.deepEqual(sends.at(-1).body, { ok: true, refinedCount: 1 });

const generateRoute = route("/api/exam-analysis-runs/generate-output-draft", {
  analysisRunId: "run-4",
  outputInputs: { schoolName: "fixture school" },
  outputType: "blog"
});
assert.equal(await registry.dispatch(generateRoute), true);
assert.deepEqual(calls.generate.at(-1), {
  analysisRunId: "run-4",
  outputInputs: { schoolName: "fixture school" },
  outputType: "blog"
});
assert.deepEqual(sends.at(-1).body, { ok: true, outputType: "blog" });
assert.equal(operationSequence, 4);

routeError = "generate";
assert.equal(await registry.dispatch(route("/api/exam-analysis-runs/generate-output-draft", {
  analysisRunId: "run-error",
  outputType: "instagram"
})), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "generate failed" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("exam analysis AI route registry dispatch, storage injection, response, and error contracts passed");
