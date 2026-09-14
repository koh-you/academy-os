const routePath = "/api/lesson-records/realtime";
const koreaDatePattern = /^\d{4}-\d{2}-\d{2}$/;

function writeEvent(response, event, payload) {
  response.write(`event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`);
}

export function createAttendanceRealtimeRouteRegistry({
  heartbeatMs = 25_000,
  subscribeToAttendanceChanges
} = {}) {
  async function dispatch({ request, response, requestUrl }) {
    if (request.method !== "GET" || requestUrl.pathname !== routePath) return false;
    if (request.__auth?.kind !== "teacher") {
      response.writeHead(403, { "Content-Type": "application/json; charset=utf-8" });
      response.end(JSON.stringify({ ok: false, error: "teacher_required" }));
      return true;
    }
    const tenantId = String(request.__auth.tenantId || "").trim();
    const date = String(requestUrl.searchParams.get("date") || "").trim();
    if (!tenantId || !koreaDatePattern.test(date)) {
      response.writeHead(422, { "Content-Type": "application/json; charset=utf-8" });
      response.end(JSON.stringify({ ok: false, error: "invalid_realtime_scope" }));
      return true;
    }
    if (typeof subscribeToAttendanceChanges !== "function") {
      response.writeHead(503, { "Content-Type": "application/json; charset=utf-8" });
      response.end(JSON.stringify({ ok: false, error: "realtime_unavailable" }));
      return true;
    }

    response.writeHead(200, {
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "Content-Type": "text/event-stream; charset=utf-8",
      "X-Accel-Buffering": "no"
    });
    writeEvent(response, "ready", { date, ok: true });
    const unsubscribe = await subscribeToAttendanceChanges({
      date,
      onChange(change = {}) {
        writeEvent(response, "change", {
          eventType: change.eventType,
          table: "lesson_student_records"
        });
      },
      tenantId
    });
    const heartbeatId = setInterval(() => writeEvent(response, "heartbeat", { ok: true }), heartbeatMs);
    heartbeatId.unref?.();
    request.once("close", () => {
      clearInterval(heartbeatId);
      unsubscribe?.();
    });
    return true;
  }

  return { dispatch, routePath };
}
