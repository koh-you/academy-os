// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const homeworkRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/homeworks" }),
  Object.freeze({ method: "POST", path: "/api/homeworks" }),
  Object.freeze({ method: "POST", path: "/api/homeworks/bulk" })
]);

/**
 * @param {Object} deps
 * @param {() => Promise<*>} deps.listHomeworks
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(homework: *) => Promise<*>} deps.upsertHomework
 * @param {(homeworks: *[]) => Promise<*>} deps.upsertHomeworks
 * @returns {RouteRegistry}
 */
export function createHomeworkRouteRegistry({
  listHomeworks,
  readJsonBody,
  sendJson,
  upsertHomework,
  upsertHomeworks
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "GET" && requestUrl.pathname === "/api/homeworks") {
      try {
        const result = await listHomeworks();
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/homeworks") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertHomework(payload.homework ?? payload);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/homeworks/bulk") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertHomeworks(payload.homeworks ?? []);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: homeworkRouteSignatures });
}
