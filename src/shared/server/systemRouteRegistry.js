export const systemRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/health" }),
  Object.freeze({ method: "POST", path: "/api/client-errors" }),
  Object.freeze({ method: "GET", path: "/api/core/status" })
]);

export function createSystemRouteRegistry({
  allowClientRuntimeError,
  getCoreDataStatus,
  normalizeClientRuntimeErrorReport,
  readJsonBody,
  reportClientRuntimeError,
  sendJson
}) {
  const routeHandlers = new Map([
    ["GET /health", async ({ request, response }) => {
      sendJson(request, response, 200, {
        features: {
          lessonJournalNotificationFollowup: "result_reconciled_unrecorded_preserve_next",
          lessonMemoSaveVerification: "memo_flags_ack_requery",
          manualAbsenceAttendanceDelivery: "next_available_hour"
        },
        ok: true,
        service: "academy-os-api"
      });
    }],
    ["POST /api/client-errors", async ({ request, response }) => {
      try {
        const remoteAddress = request.socket?.remoteAddress || "unknown";
        if (!allowClientRuntimeError(remoteAddress)) {
          sendJson(request, response, 429, { ok: false, error: "client error report rate limit" });
          return;
        }
        const payload = await readJsonBody(request, { limitBytes: 64 * 1024 });
        const report = normalizeClientRuntimeErrorReport(payload.report);
        reportClientRuntimeError(report);
        sendJson(request, response, 202, { errorId: report.errorId, ok: true });
      } catch (error) {
        sendJson(request, response, 400, { ok: false, error: error.message });
      }
    }],
    ["GET /api/core/status", async ({ request, response }) => {
      sendJson(request, response, 200, { ok: true, result: getCoreDataStatus() });
    }]
  ]);

  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "OPTIONS") {
      sendJson(request, response, 204, {});
      return true;
    }
    const handler = routeHandlers.get(`${request.method} ${requestUrl.pathname}`);
    if (!handler) return false;
    await handler({ request, response });
    return true;
  }

  return Object.freeze({ dispatch, routeSignatures: systemRouteSignatures });
}
