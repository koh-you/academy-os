// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const examAnalysisReadRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/exam-analysis-runs" }),
  Object.freeze({ method: "GET", path: "/api/exam-analysis-ssen-types" })
]);

/**
 * @param {Object} deps
 * @param {(analysisRunId: string) => Promise<*>} deps.getExamAnalysisRun
 * @param {(query: *) => *} deps.getSsenTypeCatalogForExamAnalysis
 * @param {(query: *) => Promise<*>} deps.listExamAnalysisRuns
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @returns {RouteRegistry}
 */
export function createExamAnalysisReadRouteRegistry({
  getExamAnalysisRun,
  getSsenTypeCatalogForExamAnalysis,
  listExamAnalysisRuns,
  sendJson
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method !== "GET") return false;

    if (requestUrl.pathname === "/api/exam-analysis-runs") {
      try {
        const analysisRunId = requestUrl.searchParams.get("id")
          || requestUrl.searchParams.get("analysisRunId");
        const result = analysisRunId
          ? await getExamAnalysisRun(analysisRunId)
          : await listExamAnalysisRuns({
              examPrepId: requestUrl.searchParams.get("examPrepId"),
              workflowStatus: requestUrl.searchParams.get("workflowStatus"),
              limit: requestUrl.searchParams.get("limit")
            });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (requestUrl.pathname === "/api/exam-analysis-ssen-types") {
      try {
        const analysisRunId = requestUrl.searchParams.get("analysisRunId") || "";
        const detail = analysisRunId ? await getExamAnalysisRun(analysisRunId) : null;
        const result = getSsenTypeCatalogForExamAnalysis({
          subject: requestUrl.searchParams.get("subject") || "",
          scope: requestUrl.searchParams.get("scope") || "",
          analysisRun: detail?.analysisRun ?? null,
          sourceFiles: detail?.sources ?? [],
          questions: detail?.questions ?? []
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: examAnalysisReadRouteSignatures });
}
