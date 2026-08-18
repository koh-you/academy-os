// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const academyReminderRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/academy-reminders" }),
  Object.freeze({ method: "POST", path: "/api/academy-reminders" }),
  Object.freeze({ method: "DELETE", path: "/api/academy-reminders" })
]);

/**
 * @param {Object} deps
 * @param {(reminderId: string) => Promise<*>} deps.deleteAcademyReminder
 * @param {(filters: Object) => Promise<*>} deps.listAcademyReminders
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(reminder: *) => Promise<*>} deps.upsertAcademyReminder
 * @returns {RouteRegistry}
 */
export function createAcademyReminderRouteRegistry({
  deleteAcademyReminder,
  listAcademyReminders,
  readJsonBody,
  sendJson,
  upsertAcademyReminder
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "GET" && requestUrl.pathname === "/api/academy-reminders") {
      try {
        const result = await listAcademyReminders({
          date: requestUrl.searchParams.get("date") ?? "",
          from: requestUrl.searchParams.get("from") ?? "",
          to: requestUrl.searchParams.get("to") ?? "",
          includeDone: requestUrl.searchParams.get("includeDone") === "true",
          status: requestUrl.searchParams.get("status") ?? ""
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/academy-reminders") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertAcademyReminder(payload.academyReminder ?? payload.reminder ?? payload);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "DELETE" && requestUrl.pathname === "/api/academy-reminders") {
      try {
        const result = await deleteAcademyReminder(requestUrl.searchParams.get("id"));
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: academyReminderRouteSignatures });
}
