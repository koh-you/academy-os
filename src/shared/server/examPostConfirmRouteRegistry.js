export const examPostConfirmRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/exam-post-submissions/confirm" })
]);

export function createExamPostConfirmRouteRegistry({
  confirmExamPostSubmission,
  getTeacherSession,
  readJsonBody,
  sendJson
}) {
  async function dispatch({ request, response, requestUrl }) {
    if (request.method !== "POST" || requestUrl.pathname !== "/api/exam-post-submissions/confirm") {
      return false;
    }
    try {
      const teacherSession = getTeacherSession(request);
      if (!teacherSession) {
        sendJson(request, response, 401, {
          ok: false,
          error: "교사 세션 인증이 필요합니다. 다시 로그인해 주세요."
        });
        return true;
      }
      const payload = await readJsonBody(request);
      const result = await confirmExamPostSubmission(teacherSession, payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, Number(error.statusCode) || 500, {
        ok: false,
        error: error.message
      });
    }
    return true;
  }

  return Object.freeze({ dispatch, routeSignatures: examPostConfirmRouteSignatures });
}
