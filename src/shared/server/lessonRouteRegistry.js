// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const lessonRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/lessons" }),
  Object.freeze({ method: "POST", path: "/api/lessons" }),
  Object.freeze({ method: "POST", path: "/api/lessons/bulk" }),
  Object.freeze({ method: "GET", path: "/api/lessons/closure-preflight" }),
  Object.freeze({ method: "POST", path: "/api/lessons/special-lecture-student-schedule" }),
  Object.freeze({ method: "DELETE", path: "/api/lessons" })
]);

/**
 * @param {Object} deps
 * @param {() => string} deps.createAuditId
 * @param {(lessonId: string) => Promise<*>} deps.deleteLesson
 * @param {(lessonId: string, options: { auditId: string }) => Promise<*>} deps.deleteExamPrepLessonForReconcile
 * @param {(beforeDate: string) => Promise<*>} deps.deleteLessonsBefore
 * @param {(lessonId: string) => Promise<*>} deps.getLessonClosurePreflight
 * @param {(message: string, payload: *, options?: { isError?: boolean }) => void} deps.logAudit
 * @param {(options: { date: *, includeCanceled: boolean }) => Promise<*>} deps.listLessons
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(payload: *) => Promise<*>} deps.syncSpecialLectureLessonStudentSchedule
 * @param {(lesson: *) => Promise<*>} deps.upsertLesson
 * @param {(lessons: *[]) => Promise<*>} deps.upsertLessons
 * @returns {RouteRegistry}
 */
export function createLessonRouteRegistry({
  createAuditId,
  deleteLesson,
  deleteExamPrepLessonForReconcile,
  deleteLessonsBefore,
  getLessonClosurePreflight,
  logAudit,
  listLessons,
  readJsonBody,
  sendJson,
  syncSpecialLectureLessonStudentSchedule,
  upsertLesson,
  upsertLessons
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "GET" && requestUrl.pathname === "/api/lessons") {
      try {
        const result = await listLessons({
          date: requestUrl.searchParams.get("date"),
          includeCanceled: requestUrl.searchParams.get("includeCanceled") === "true"
        });
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/lessons") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertLesson(payload.lesson ?? payload);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/lessons/bulk") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertLessons(payload.lessons ?? []);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "GET" && requestUrl.pathname === "/api/lessons/closure-preflight") {
      try {
        const lessonId = requestUrl.searchParams.get("lessonId") || "";
        const result = await getLessonClosurePreflight(lessonId);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 400, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/lessons/special-lecture-student-schedule") {
      try {
        const payload = await readJsonBody(request);
        const result = await syncSpecialLectureLessonStudentSchedule(payload);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 409, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "DELETE" && requestUrl.pathname === "/api/lessons") {
      try {
        const lessonId = requestUrl.searchParams.get("id");
        const beforeDate = requestUrl.searchParams.get("before");
        const mode = requestUrl.searchParams.get("mode");
        const auditId = requestUrl.searchParams.get("auditId") || createAuditId();
        const result = beforeDate
          ? await deleteLessonsBefore(beforeDate)
          : mode === "exam-prep-reconcile"
            ? await deleteExamPrepLessonForReconcile(lessonId, { auditId })
            : await deleteLesson(lessonId);
        if (mode === "exam-prep-reconcile") {
          logAudit("[exam-prep-delete-audit]", result.audit);
        }
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        if (error.audit?.operation === "delete_exam_prep_lesson") {
          logAudit("[exam-prep-delete-audit]", error.audit, { isError: true });
        }
        sendJson(request, response, error.audit ? 409 : 500, {
          ok: false,
          error: error.message,
          ...(error.audit ? { audit: error.audit } : {})
        });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: lessonRouteSignatures });
}
