export const authLoginRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/auth/login" })
]);

export function createAuthLoginRouteRegistry({
  authenticateStudentOrParent,
  authenticateTeacher,
  createPortalSessionToken,
  createTeacherSessionToken,
  readJsonBody,
  sendJson
}) {
  async function dispatch({ request, response, requestUrl }) {
    if (request.method !== "POST" || requestUrl.pathname !== "/api/auth/login") return false;
    try {
      const payload = await readJsonBody(request);
      if (!["teacher", "student", "parent"].includes(payload.role)) {
        sendJson(request, response, 403, { ok: false, error: "지원하지 않는 로그인 역할입니다." });
        return true;
      }
      const loginId = String(payload.loginId ?? "").trim();
      const password = String(payload.password ?? "");
      if (payload.role !== "teacher") {
        const student = await authenticateStudentOrParent(payload.role, loginId, password);
        sendJson(request, response, 200, {
          ok: true,
          authenticated: Boolean(student),
          account: student
            ? {
                role: payload.role,
                actorId: payload.role === "student" ? student.studentId : `parent_${student.studentId}`,
                studentId: student.studentId,
                loginId: student.loginId,
                name: student.name,
                sessionToken: createPortalSessionToken({ ...student, role: payload.role })
              }
            : null
        });
        return true;
      }
      const account = await authenticateTeacher(loginId, password);
      sendJson(request, response, 200, {
        ok: true,
        authenticated: Boolean(account),
        account: account
          ? {
              loginId: account.loginId,
              name: account.name,
              teacherId: account.teacherId,
              sessionToken: createTeacherSessionToken(account)
            }
          : null
      });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return true;
  }

  return Object.freeze({ dispatch, routeSignatures: authLoginRouteSignatures });
}
