export const appStateWriteRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/app-state" })
]);

export function createAppStateWriteRouteRegistry({
  parseVersionedWriteRequest,
  readJsonBody,
  sendJson,
  upsertAppState
}) {
  async function dispatch({ request, response, requestUrl }) {
    if (request.method !== "POST" || requestUrl.pathname !== "/api/app-state") return false;
    try {
      const payload = parseVersionedWriteRequest(
        request.method,
        requestUrl.pathname,
        await readJsonBody(request)
      );
      const requestedStates = payload.states;
      const expectedUpdatedAt = payload.expectedUpdatedAt ?? null;
      const {
        examPostSubmissions: _examPostSubmissions,
        studentQuestions: _studentQuestions,
        ...safeStates
      } = requestedStates;
      const result = await upsertAppState(safeStates, { expectedUpdatedAt });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, Number(error.statusCode) || 500, {
        ok: false,
        error: error.message,
        ...(error.code ? { code: error.code } : {}),
        ...(error.field ? { field: error.field } : {})
      });
    }
    return true;
  }

  return Object.freeze({ dispatch, routeSignatures: appStateWriteRouteSignatures });
}
