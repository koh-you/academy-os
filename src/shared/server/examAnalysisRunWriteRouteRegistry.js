export const examAnalysisRunWriteRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/exam-analysis-runs" })
]);

export function createExamAnalysisRunWriteRouteRegistry({
  parseExamAnalysisRunWriteRequest,
  readJsonBody,
  sendJson,
  upsertExamAnalysisRun
}) {
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
