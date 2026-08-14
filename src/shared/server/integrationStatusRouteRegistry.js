// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const integrationStatusRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/integrations/status" })
]);

/**
 * @param {Object} deps
 * @param {() => *} deps.getAiStatus
 * @param {() => *} deps.getNotificationStatus
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @returns {RouteRegistry}
 */
export function createIntegrationStatusRouteRegistry({
  getAiStatus,
  getNotificationStatus,
  sendJson
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method !== "GET" || requestUrl.pathname !== "/api/integrations/status") {
      return false;
    }

    sendJson(request, response, 200, {
      ok: true,
      result: {
        ai: getAiStatus(),
        notifications: getNotificationStatus()
      }
    });
    return true;
  }

  return Object.freeze({ dispatch, routeSignatures: integrationStatusRouteSignatures });
}
