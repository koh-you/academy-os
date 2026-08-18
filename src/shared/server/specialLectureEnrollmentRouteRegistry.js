// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const specialLectureEnrollmentRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/special-lecture-enrollments" }),
  Object.freeze({ method: "POST", path: "/api/special-lecture-enrollments" }),
  Object.freeze({ method: "POST", path: "/api/special-lecture-enrollments/bulk" })
]);

/**
 * @param {Object} deps
 * @param {() => Promise<*>} deps.listSpecialLectureEnrollments
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(enrollment: *) => Promise<*>} deps.upsertSpecialLectureEnrollment
 * @param {(enrollments: *[]) => Promise<*>} deps.upsertSpecialLectureEnrollments
 * @returns {RouteRegistry}
 */
export function createSpecialLectureEnrollmentRouteRegistry({
  listSpecialLectureEnrollments,
  readJsonBody,
  sendJson,
  upsertSpecialLectureEnrollment,
  upsertSpecialLectureEnrollments
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "GET" && requestUrl.pathname === "/api/special-lecture-enrollments") {
      try {
        const result = await listSpecialLectureEnrollments();
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/special-lecture-enrollments") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertSpecialLectureEnrollment(payload.enrollment ?? payload);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/special-lecture-enrollments/bulk") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertSpecialLectureEnrollments(payload.enrollments ?? []);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: specialLectureEnrollmentRouteSignatures });
}
