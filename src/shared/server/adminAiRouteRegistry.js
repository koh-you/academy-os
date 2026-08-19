// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const adminAiRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/admin/seed-core-data" }),
  Object.freeze({ method: "POST", path: "/api/ai/comment-polish" })
]);

/**
 * @param {Object} deps
 * @param {(payload: *) => Promise<*>} deps.polishLessonComment
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {() => Promise<*>} deps.seedCoreData
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @returns {RouteRegistry}
 */
export function createAdminAiRouteRegistry({
  polishLessonComment,
  readJsonBody,
  seedCoreData,
  sendJson
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "POST" && requestUrl.pathname === "/api/admin/seed-core-data") {
      try {
        const result = await seedCoreData();
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/ai/comment-polish") {
      try {
        const payload = await readJsonBody(request);
        const result = await polishLessonComment(payload);
        sendJson(request, response, 200, { ok: true, result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: adminAiRouteSignatures });
}
