// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const examAnalysisRunWriteRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/exam-analysis-runs" })
]);

/**
 * @param {Object} deps
 * @param {(body: *) => *} deps.parseExamAnalysisRunWriteRequest
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(analysisRun: *) => Promise<*>} deps.upsertExamAnalysisRun
 * @returns {RouteRegistry}
 */
export function createExamAnalysisRunWriteRouteRegistry({
  parseExamAnalysisRunWriteRequest,
  readJsonBody,
  sendJson,
  upsertExamAnalysisRun
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method !== "POST" || requestUrl.pathname !== "/api/exam-analysis-runs") {
      return false;
    }

    try {
      const payload = parseExamAnalysisRunWriteRequest(await readJsonBody(request));
      const result = await upsertExamAnalysisRun(payload.analysisRun);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, Number(error.statusCode) || 500, {
        ok: false,
        error: error.message,
        ...(error.code ? { code: error.code } : {}),
        ...(error.field !== undefined ? { field: error.field } : {})
      });
    }
    return true;
  }

  return Object.freeze({ dispatch, routeSignatures: examAnalysisRunWriteRouteSignatures });
}
