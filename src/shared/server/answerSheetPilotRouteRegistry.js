export const answerSheetPilotRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/answer-sheet-pilot/recognize" })
]);

export function createAnswerSheetPilotRouteRegistry({ readJsonBody, sendJson, recognize, getTeacherSession }) {
  const busy = new Set();
  async function dispatch({ request, response, requestUrl }) {
    if (request.method !== "POST" || requestUrl.pathname !== "/api/answer-sheet-pilot/recognize") return false;
    // Always enforce even when the legacy global auth gate runs in audit mode.
    const session = getTeacherSession(request);
    if (!session || session.teacherRole !== "owner") {
      sendJson(request, response, session ? 403 : 401, { ok: false, error: "원장 계정으로 로그인한 뒤 판독해 주세요." });
      return true;
    }
    const scope = session.tenantId || session.teacherId;
    if (busy.has(scope)) {
      sendJson(request, response, 409, { ok: false, error: "진행 중인 판독이 있습니다. 완료될 때까지 기다려 주세요." });
      return true;
    }
    busy.add(scope);
    try {
      const payload = await readJsonBody(request, { limitBytes: 13 * 1024 * 1024 });
      const result = await recognize(payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, error.statusCode || 502, { ok: false, error: error.message });
    } finally { busy.delete(scope); }
    return true;
  }
  return Object.freeze({ dispatch, routeSignatures: answerSheetPilotRouteSignatures });
}
