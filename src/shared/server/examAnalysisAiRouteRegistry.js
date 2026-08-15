// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const examAnalysisAiRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/exam-analysis-source-files/vision-check" }),
  Object.freeze({ method: "POST", path: "/api/exam-analysis-runs/detect-question-boundaries" }),
  Object.freeze({ method: "POST", path: "/api/exam-analysis-runs/fill-question-rows" }),
  Object.freeze({ method: "POST", path: "/api/exam-analysis-runs/refine-question-rows" }),
  Object.freeze({ method: "POST", path: "/api/exam-analysis-runs/generate-output-draft" })
]);

/**
 * @param {Object} deps
 * @param {() => *} deps.createExamAnalysisStorageOperations
 * @param {(sourceId: string, options?: { operations?: * }) => Promise<*>} deps.verifyExamAnalysisSourceFileWithAi
 * @param {(params: { analysisRunId: string, operations?: *, sourceId?: string }) => Promise<*>} deps.detectExamAnalysisQuestionBoundaries
 * @param {(params: { analysisRunId: string, operations?: *, sourceId?: string }) => Promise<*>} deps.fillExamAnalysisQuestionRowsWithAi
 * @param {(params: { analysisRunId: string, operations?: *, sourceId?: string, targetQuestionNumbers?: number[] }) => Promise<*>} deps.refineExamAnalysisQuestionRowsWithAi
 * @param {(params: { analysisRunId: string, outputType?: string, outputInputs?: * }) => Promise<*>} deps.generateExamAnalysisOutputDraft
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @returns {RouteRegistry}
 */
export function createExamAnalysisAiRouteRegistry({
  createExamAnalysisStorageOperations,
  detectExamAnalysisQuestionBoundaries,
  fillExamAnalysisQuestionRowsWithAi,
  generateExamAnalysisOutputDraft,
  readJsonBody,
  refineExamAnalysisQuestionRowsWithAi,
  sendJson,
  verifyExamAnalysisSourceFileWithAi
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method !== "POST") return false;

    if (requestUrl.pathname === "/api/exam-analysis-source-files/vision-check") {
      try {
        const payload = await readJsonBody(request);
        const result = await verifyExamAnalysisSourceFileWithAi(payload.sourceId, {
          operations: createExamAnalysisStorageOperations()
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (requestUrl.pathname === "/api/exam-analysis-runs/detect-question-boundaries") {
      try {
        const payload = await readJsonBody(request);
        const result = await detectExamAnalysisQuestionBoundaries({
          analysisRunId: payload.analysisRunId,
          operations: createExamAnalysisStorageOperations(),
          sourceId: payload.sourceId
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (requestUrl.pathname === "/api/exam-analysis-runs/fill-question-rows") {
      try {
        const payload = await readJsonBody(request);
        const result = await fillExamAnalysisQuestionRowsWithAi({
          analysisRunId: payload.analysisRunId,
          operations: createExamAnalysisStorageOperations(),
          sourceId: payload.sourceId
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (requestUrl.pathname === "/api/exam-analysis-runs/refine-question-rows") {
      try {
        const payload = await readJsonBody(request);
        const result = await refineExamAnalysisQuestionRowsWithAi({
          analysisRunId: payload.analysisRunId,
          operations: createExamAnalysisStorageOperations(),
          sourceId: payload.sourceId,
          targetQuestionNumbers: payload.targetQuestionNumbers
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (requestUrl.pathname === "/api/exam-analysis-runs/generate-output-draft") {
      try {
        const payload = await readJsonBody(request);
        const result = await generateExamAnalysisOutputDraft({
          analysisRunId: payload.analysisRunId,
          outputType: payload.outputType,
          outputInputs: payload.outputInputs
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: examAnalysisAiRouteSignatures });
}
