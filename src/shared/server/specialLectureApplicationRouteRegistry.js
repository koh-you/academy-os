// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const specialLectureApplicationRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/special-lecture-applications" }),
  Object.freeze({ method: "POST", path: "/api/special-lecture-applications" }),
  Object.freeze({ method: "DELETE", path: "/api/special-lecture-applications" })
]);

/**
 * @param {Object} deps
 * @param {(applicationId: string) => Promise<*>} deps.deleteSpecialLectureApplication
 * @param {() => Promise<*>} deps.listSpecialLectureApplications
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(application: *) => Promise<*>} deps.upsertSpecialLectureApplication
 * @returns {RouteRegistry}
 */
export function createSpecialLectureApplicationRouteRegistry({
  deleteSpecialLectureApplication,
  listSpecialLectureApplications,
  readJsonBody,
  sendJson,
  upsertSpecialLectureApplication
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "GET" && requestUrl.pathname === "/api/special-lecture-applications") {
      try {
        const result = await listSpecialLectureApplications();
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/special-lecture-applications") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertSpecialLectureApplication(payload.application ?? payload);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "DELETE" && requestUrl.pathname === "/api/special-lecture-applications") {
      try {
        const applicationId = requestUrl.searchParams.get("id");
        if (requestUrl.searchParams.get("confirm") !== "true") {
          sendJson(request, response, 400, { ok: false, error: "특강 신청 원본 삭제 확인값이 필요합니다." });
          return true;
        }
        const result = await deleteSpecialLectureApplication(applicationId);
        if (result.linkedEnrollmentIds?.length) {
          sendJson(request, response, 409, {
            ok: false,
            error: "이미 확정 명단에 연결된 신청 원본은 삭제할 수 없습니다. 학생 회차와 수업일지 영향을 먼저 확인해 주세요."
          });
          return true;
        }
        if (!result.deleted) {
          sendJson(request, response, result.source === "supabase" ? 404 : 503, {
            ok: false,
            error: result.source === "supabase"
              ? "삭제할 특강 신청 원본을 찾지 못했습니다."
              : "Supabase 연결을 확인하지 못해 신청 원본을 삭제하지 않았습니다."
          });
          return true;
        }
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: specialLectureApplicationRouteSignatures });
}
