// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const notificationProviderRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/notifications/attendance-alimtalk" }),
  Object.freeze({ method: "POST", path: "/api/notifications/comment-alimtalk" }),
  Object.freeze({ method: "POST", path: "/api/notifications/daily-report-alimtalk" }),
  Object.freeze({ method: "POST", path: "/api/notifications/student-schedule-reminder" }),
  Object.freeze({ method: "POST", path: "/api/notifications/slack-daily-schedule" }),
  Object.freeze({ method: "POST", path: "/api/notifications/slack-today-schedule" }),
  Object.freeze({ method: "POST", path: "/api/notifications/slack-today-schedule/reserve" })
]);

/**
 * @param {Object} deps
 * @param {(request: *, payload: *) => { configured: boolean, ok: boolean }} deps.getDispatchAuthState
 * @param {(value?: *) => string} deps.getKoreaDateString
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(options: *) => Promise<*>} deps.reserveTodayTeacherScheduleSlack
 * @param {(payload: *) => Promise<*>} deps.sendAttendanceAlimtalkOnce
 * @param {(payload: *) => Promise<*>} deps.sendDailyReportAlimtalk
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(payload: *) => Promise<*>} deps.sendLessonCommentAlimtalk
 * @param {(payload: *) => Promise<*>} deps.sendSlackDailyScheduleSummary
 * @param {(payload: *) => Promise<*>} deps.sendStudentScheduleReminderAlimtalk
 * @param {(options: *) => Promise<*>} deps.sendTodayTeacherScheduleSlack
 * @returns {RouteRegistry}
 */
export function createNotificationProviderRouteRegistry({
  getDispatchAuthState,
  getKoreaDateString,
  readJsonBody,
  reserveTodayTeacherScheduleSlack,
  sendAttendanceAlimtalkOnce,
  sendDailyReportAlimtalk,
  sendJson,
  sendLessonCommentAlimtalk,
  sendSlackDailyScheduleSummary,
  sendStudentScheduleReminderAlimtalk,
  sendTodayTeacherScheduleSlack
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "POST" && requestUrl.pathname === "/api/notifications/attendance-alimtalk") {
      try {
        const payload = await readJsonBody(request);
        const result = await sendAttendanceAlimtalkOnce(payload);
        sendJson(request, response, 200, { ok: true, provider: "solapi", result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/notifications/comment-alimtalk") {
      try {
        const payload = await readJsonBody(request);
        if (payload.sendMode === "scheduled" && !payload.scheduledDate) {
          throw new Error("scheduledDate is required for scheduled comment Alimtalk sends.");
        }
        const result = await sendLessonCommentAlimtalk(payload);
        sendJson(request, response, 200, { ok: true, provider: "solapi", result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/notifications/daily-report-alimtalk") {
      try {
        const payload = await readJsonBody(request);
        const result = await sendDailyReportAlimtalk(payload);
        sendJson(request, response, 200, { ok: true, provider: "solapi", result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/notifications/student-schedule-reminder") {
      try {
        const payload = await readJsonBody(request);
        const result = await sendStudentScheduleReminderAlimtalk(payload);
        sendJson(request, response, 200, { ok: true, provider: "solapi", result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/notifications/slack-daily-schedule") {
      try {
        const payload = await readJsonBody(request);
        const result = await sendSlackDailyScheduleSummary(payload);
        sendJson(request, response, 200, { ok: true, provider: "slack", result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/notifications/slack-today-schedule") {
      try {
        const payload = await readJsonBody(request);
        const result = await sendTodayTeacherScheduleSlack({
          date: payload.date || getKoreaDateString(payload.now || new Date()),
          force: payload.force === true,
          notifyEmpty: payload.notifyEmpty !== false
        });
        sendJson(request, response, 200, { ok: true, provider: "slack", result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/notifications/slack-today-schedule/reserve") {
      try {
        const payload = await readJsonBody(request);
        const dispatchAuth = getDispatchAuthState(request, payload);
        if (!dispatchAuth.configured || !dispatchAuth.ok) {
          sendJson(request, response, dispatchAuth.configured ? 401 : 503, {
            ok: false,
            error: dispatchAuth.configured
              ? "Invalid notification dispatch token."
              : "NOTIFICATION_DISPATCH_TOKEN is required for Slack scheduling."
          });
          return true;
        }
        const date = payload.date || getKoreaDateString(payload.now || new Date());
        const result = await reserveTodayTeacherScheduleSlack({
          date,
          force: payload.force === true,
          notifyEmpty: payload.notifyEmpty !== false,
          scheduledAt: payload.scheduledAt || `${date}T00:00:00.000Z`
        });
        sendJson(request, response, 200, { ok: true, provider: "slack_bot", result });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: notificationProviderRouteSignatures });
}
