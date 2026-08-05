export const integrationStatusRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/integrations/status" })
]);

export function createIntegrationStatusRouteRegistry({
  getAiStatus,
  getNotificationStatus,
  sendJson
}) {
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
