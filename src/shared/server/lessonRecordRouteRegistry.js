// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const lessonRecordRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/lesson-records" }),
  Object.freeze({ method: "POST", path: "/api/lesson-records" }),
  Object.freeze({ method: "POST", path: "/api/lesson-records/notification-status" }),
  Object.freeze({ method: "POST", path: "/api/lesson-records/prune-stale" }),
  Object.freeze({ method: "POST", path: "/api/lesson-records/bulk" })
]);

/**
 * @param {Object} deps
 * @param {(options: { date: * }) => Promise<*>} deps.listLessons
 * @param {() => Promise<*>} deps.listLessonStudentRecords
 * @param {(lessons: *[]) => Promise<*>} deps.listLessonStudentRecordsForLessons
 * @param {(lessonId: string) => Promise<*>} deps.pruneStaleLessonStudentRecords
 * @param {(record: *) => Promise<*>} deps.patchLessonStudentRecordNotificationStatus
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(record: *) => Promise<*>} deps.upsertLessonStudentRecord
 * @param {(records: *[]) => Promise<*>} deps.upsertLessonStudentRecords
 * @returns {RouteRegistry}
 */
export function createLessonRecordRouteRegistry({
  listLessons,
  listLessonStudentRecords,
  listLessonStudentRecordsForLessons,
  pruneStaleLessonStudentRecords,
  patchLessonStudentRecordNotificationStatus,
  readJsonBody,
  sendJson,
  upsertLessonStudentRecord,
  upsertLessonStudentRecords
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "GET" && requestUrl.pathname === "/api/lesson-records") {
      try {
        const date = requestUrl.searchParams.get("date");
        const result = date
          ? await listLessonStudentRecordsForLessons((await listLessons({ date })).lessons ?? [])
          : await listLessonStudentRecords();
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/lesson-records") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertLessonStudentRecord(payload.record ?? payload);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/lesson-records/notification-status") {
      try {
        const payload = await readJsonBody(request);
        const result = await patchLessonStudentRecordNotificationStatus(payload.record ?? payload);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/lesson-records/prune-stale") {
      try {
        const payload = await readJsonBody(request);
        const result = await pruneStaleLessonStudentRecords(payload.lessonId);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/lesson-records/bulk") {
      try {
        const payload = await readJsonBody(request);
        const result = await upsertLessonStudentRecords(payload.records ?? []);
        sendJson(request, response, 200, { ok: true, ...result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: lessonRecordRouteSignatures });
}
