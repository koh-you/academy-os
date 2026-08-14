// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const examAnalysisQuestionCountRouteSignatures = Object.freeze([
  Object.freeze({
    method: "POST",
    path: "/api/exam-analysis-runs/confirm-question-count"
  })
]);

/**
 * @param {Object} deps
 * @param {(payload: *) => Promise<*>} deps.confirmExamAnalysisQuestionCount
 * @param {(body: *) => *} deps.parseExamAnalysisQuestionCountConfirmRequest
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @returns {RouteRegistry}
 */
export function createExamAnalysisQuestionCountRouteRegistry({
  confirmExamAnalysisQuestionCount,
  parseExamAnalysisQuestionCountConfirmRequest,
  readJsonBody,
  sendJson
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (
      request.method !== "POST"
      || requestUrl.pathname !== "/api/exam-analysis-runs/confirm-question-count"
    ) {
      return false;
    }

    try {
      const payload = parseExamAnalysisQuestionCountConfirmRequest(await readJsonBody(request));
      const result = await confirmExamAnalysisQuestionCount(payload);
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

  return Object.freeze({ dispatch, routeSignatures: examAnalysisQuestionCountRouteSignatures });
}
