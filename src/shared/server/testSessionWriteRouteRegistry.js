// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const testSessionWriteRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/test-sessions" }),
  Object.freeze({ method: "DELETE", path: "/api/test-sessions" })
]);

/**
 * @param {Object} deps
 * @param {(testSessionId: string) => Promise<*>} deps.deleteTestSession
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(testSession: *, testAttempts: *[]) => Promise<*>} deps.upsertTestSessionWithAttempts
 * @returns {RouteRegistry}
 */
export function createTestSessionWriteRouteRegistry({
  deleteTestSession,
  readJsonBody,
  sendJson,
  upsertTestSessionWithAttempts
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    const isPost = request.method === "POST" && requestUrl.pathname === "/api/test-sessions";
    const isDelete = request.method === "DELETE" && requestUrl.pathname === "/api/test-sessions";
    if (!isPost && !isDelete) return false;
    try {
      if (isPost) {
        const payload = await readJsonBody(request);
        const result = await upsertTestSessionWithAttempts(
          payload.testSession ?? payload.session ?? payload,
          payload.testAttempts ?? payload.attempts ?? []
        );
        sendJson(request, response, 200, { ok: true, ...result });
        return true;
      }
      const testSessionId = requestUrl.searchParams.get("testSessionId") || requestUrl.searchParams.get("id") || "";
      const result = await deleteTestSession(testSessionId);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return true;
  }

  return Object.freeze({ dispatch, routeSignatures: testSessionWriteRouteSignatures });
}
