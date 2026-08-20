// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const studentIntakeApplicantRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/student-intake-applicants" }),
  Object.freeze({ method: "POST", path: "/api/student-intake-applicants" })
]);

/**
 * @param {Object} deps
 * @param {() => Promise<*>} deps.listStudentIntakeApplicants
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(applicant: *, options: { expectedUpdatedAt: * }) => Promise<*>} deps.upsertStudentIntakeApplicant
 * @returns {RouteRegistry}
 */
export function createStudentIntakeApplicantRouteRegistry({
  listStudentIntakeApplicants,
  readJsonBody,
  sendJson,
  upsertStudentIntakeApplicant
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "GET" && requestUrl.pathname === "/api/student-intake-applicants") {
      try {
        const result = await listStudentIntakeApplicants();
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/student-intake-applicants") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertStudentIntakeApplicant(
          payload.applicant ?? payload,
          { expectedUpdatedAt: payload.expectedUpdatedAt }
        );
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          code: error.code,
          currentApplicant: error.currentApplicant,
          error: error.message
        });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: studentIntakeApplicantRouteSignatures });
}
