// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const portalReadRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/portal-data" })
]);

/**
 * @param {Object} deps
 * @param {(session: *) => Promise<*>} deps.getPortalData
 * @param {(request: *) => *} deps.getPortalSession
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @returns {RouteRegistry}
 */
export function createPortalReadRouteRegistry({ getPortalData, getPortalSession, sendJson }) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method !== "GET" || requestUrl.pathname !== "/api/portal-data") return false;
    try {
      const portalSession = getPortalSession(request);
      if (!portalSession) {
        sendJson(request, response, 401, { ok: false, error: "학생 세션 인증이 필요합니다." });
        return true;
      }
      const data = await getPortalData(portalSession);
      if (!data) {
        sendJson(request, response, 404, { ok: false, error: "학생 정보를 찾지 못했습니다." });
        return true;
      }
      sendJson(request, response, 200, { ok: true, role: portalSession.role, ...data });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return true;
  }

  return Object.freeze({ dispatch, routeSignatures: portalReadRouteSignatures });
}
