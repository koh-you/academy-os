// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const schoolEventRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/school-events" }),
  Object.freeze({ method: "POST", path: "/api/school-events" }),
  Object.freeze({ method: "POST", path: "/api/school-events/bulk" }),
  Object.freeze({ method: "DELETE", path: "/api/school-events" })
]);

/**
 * @param {Object} deps
 * @param {(eventId: string, options?: { expectedUpdatedAt?: string }) => Promise<*>} deps.deleteSchoolEvent
 * @param {() => Promise<*>} deps.listSchoolEvents
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(event: *) => Promise<*>} deps.upsertSchoolEvent
 * @param {(events: *[]) => Promise<*>} deps.upsertSchoolEvents
 * @returns {RouteRegistry}
 */
export function createSchoolEventRouteRegistry({
  deleteSchoolEvent,
  listSchoolEvents,
  readJsonBody,
  sendJson,
  upsertSchoolEvent,
  upsertSchoolEvents
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "GET" && requestUrl.pathname === "/api/school-events") {
      try {
        const result = await listSchoolEvents();
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/school-events") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertSchoolEvent(payload.schoolEvent ?? payload.event ?? payload);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.code ? { code: error.code } : {}),
          ...(error.currentSchoolEvent !== undefined ? { currentSchoolEvent: error.currentSchoolEvent } : {})
        });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/school-events/bulk") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertSchoolEvents(payload.schoolEvents ?? payload.events ?? []);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "DELETE" && requestUrl.pathname === "/api/school-events") {
      try {
        const eventId = requestUrl.searchParams.get("id");
        if (!eventId) throw new Error("삭제할 학사일정 ID가 필요합니다.");
        const result = await deleteSchoolEvent(eventId, {
          expectedUpdatedAt: requestUrl.searchParams.get("expectedUpdatedAt") || ""
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.code ? { code: error.code } : {}),
          ...(error.currentSchoolEvent !== undefined ? { currentSchoolEvent: error.currentSchoolEvent } : {})
        });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: schoolEventRouteSignatures });
}
