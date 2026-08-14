// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const appStateWriteRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/app-state" })
]);

/**
 * @param {Object} deps
 * @param {(method: string, path: string, body: *) => *} deps.parseVersionedWriteRequest
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(states: *, options?: { expectedUpdatedAt?: * }) => Promise<*>} deps.upsertAppState
 * @returns {RouteRegistry}
 */
export function createAppStateWriteRouteRegistry({
  parseVersionedWriteRequest,
  readJsonBody,
  sendJson,
  upsertAppState
}) {
  /** @param {RouteDispatchContext} context */
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
