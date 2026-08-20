// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const studentRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/students" }),
  Object.freeze({ method: "GET", path: "/api/students/delete-audit" }),
  Object.freeze({ method: "DELETE", path: "/api/students" }),
  Object.freeze({ method: "POST", path: "/api/students" }),
  Object.freeze({ method: "POST", path: "/api/students/bulk" })
]);

/**
 * @param {Object} deps
 * @param {(studentId: string) => Promise<*>} deps.auditWithdrawnStudentDeletion
 * @param {(studentId: string, confirmationName: string, forceDeleteWithReferences: boolean, expectedReferenceFingerprint: *) => Promise<*>} deps.deleteWithdrawnStudent
 * @param {() => Promise<*>} deps.listStudents
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(student: *, options: { createOnly: boolean, expectedUpdatedAt: * }) => Promise<*>} deps.upsertStudent
 * @param {(students: *[]) => Promise<*>} deps.upsertStudents
 * @returns {RouteRegistry}
 */
export function createStudentRouteRegistry({
  auditWithdrawnStudentDeletion,
  deleteWithdrawnStudent,
  listStudents,
  readJsonBody,
  sendJson,
  upsertStudent,
  upsertStudents
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "GET" && requestUrl.pathname === "/api/students") {
      try {
        const result = await listStudents();
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "GET" && requestUrl.pathname === "/api/students/delete-audit") {
      try {
        const result = await auditWithdrawnStudentDeletion(requestUrl.searchParams.get("studentId") || "");
        sendJson(request, response, 200, { ok: true, audit: result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.audit ? { audit: error.audit } : {})
        });
      }
      return true;
    }

    if (request.method === "DELETE" && requestUrl.pathname === "/api/students") {
      try {
        const payload = await readJsonBody(request);
        const result = await deleteWithdrawnStudent(
          payload.studentId,
          payload.confirmationName,
          payload.forceDeleteWithReferences === true,
          payload.expectedReferenceFingerprint
        );
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.audit ? { audit: error.audit } : {})
        });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/students") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertStudent(payload.student ?? payload, {
          createOnly: payload.student ? payload.createOnly === true : false,
          expectedUpdatedAt: payload.student && Object.prototype.hasOwnProperty.call(payload, "expectedUpdatedAt")
            ? payload.expectedUpdatedAt
            : undefined
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, {
          ok: false,
          error: error.message,
          ...(error.code ? { code: error.code } : {}),
          ...(error.currentStudent !== undefined ? { currentStudent: error.currentStudent } : {})
        });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/students/bulk") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertStudents(payload.students ?? []);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: studentRouteSignatures });
}
