export const testSessionReadRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/test-sessions" }),
  Object.freeze({ method: "GET", path: "/api/test-attempts" })
]);

export function createTestSessionReadRouteRegistry({
  listTestAttempts,
  listTestSessions,
  sendJson
}) {
  async function dispatch({ request, response, requestUrl }) {
    if (request.method !== "GET") return false;
    try {
      if (requestUrl.pathname === "/api/test-sessions") {
        const result = await listTestSessions({
          testDate: requestUrl.searchParams.get("date") || requestUrl.searchParams.get("testDate") || "",
          classTemplateId: requestUrl.searchParams.get("classTemplateId") || ""
        });
        sendJson(request, response, 200, { ok: true, ...result });
        return true;
      }
      if (requestUrl.pathname === "/api/test-attempts") {
        const result = await listTestAttempts({
          testSessionId: requestUrl.searchParams.get("testSessionId") || "",
          studentId: requestUrl.searchParams.get("studentId") || ""
        });
        sendJson(request, response, 200, { ok: true, ...result });
        return true;
      }
      return false;
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
      return true;
    }
  }

  return Object.freeze({ dispatch, routeSignatures: testSessionReadRouteSignatures });
}
