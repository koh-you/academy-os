// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const attendanceRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/attendance/check" }),
  Object.freeze({ method: "POST", path: "/api/attendance/preview" })
]);

/**
 * @param {Object} deps
 * @param {(payload: *) => Promise<*>} deps.handleAttendanceCheck
 * @param {(method: string, pathname: string, body: *) => *} deps.parseVersionedWriteRequest
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @returns {RouteRegistry}
 */
export function createAttendanceRouteRegistry({
  handleAttendanceCheck,
  parseVersionedWriteRequest,
  readJsonBody,
  sendJson
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "POST" && requestUrl.pathname === "/api/attendance/check") {
      try {
        const payload = parseVersionedWriteRequest(
          request.method,
          requestUrl.pathname,
          await readJsonBody(request)
        );
        const result = await handleAttendanceCheck(payload);
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

    if (request.method === "POST" && requestUrl.pathname === "/api/attendance/preview") {
      try {
        const payload = await readJsonBody(request);
        const result = await handleAttendanceCheck({
          ...payload,
          previewOnly: true,
          sendAlimtalk: false
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: attendanceRouteSignatures });
}
