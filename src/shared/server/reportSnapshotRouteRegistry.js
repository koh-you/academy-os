export const reportSnapshotRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/report-snapshots" })
]);

export function createReportSnapshotRouteRegistry({
  getTeacherSession,
  listAppState,
  parseVersionedWriteRequest,
  readJsonBody,
  saveReportSnapshotWithVerification,
  sendJson,
  upsertAppState
}) {
  async function dispatch({ request, response, requestUrl }) {
    if (request.method !== "POST" || requestUrl.pathname !== "/api/report-snapshots") return false;
    try {
      if (!getTeacherSession(request)) {
        sendJson(request, response, 401, {
          ok: false,
          error: "보고서 저장 세션 인증이 필요합니다. 다시 로그인해 주세요."
        });
        return true;
      }
      const payload = parseVersionedWriteRequest(
        request.method,
        requestUrl.pathname,
        await readJsonBody(request)
      );
      const result = await saveReportSnapshotWithVerification({
        operations: {
          read: listAppState,
          write: (states, options) => upsertAppState(states, options)
        },
        snapshot: payload.snapshot
      });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, Number(error.statusCode) || 500, {
        code: error.code,
        error: error.message,
        ...(error.field ? { field: error.field } : {}),
        ok: false
      });
    }
    return true;
  }

  return Object.freeze({ dispatch, routeSignatures: reportSnapshotRouteSignatures });
}
