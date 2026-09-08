// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const authLoginRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/auth/login" }),
  Object.freeze({ method: "POST", path: "/api/auth/refresh" })
]);

/**
 * @param {Object} deps
 * @param {(role: string, loginId: string, password: string) => Promise<*>} deps.authenticateStudentOrParent
 * @param {(loginId: string, password: string) => Promise<*>} deps.authenticateTeacher
 * @param {(account: *) => string} deps.createPortalSessionToken
 * @param {(account: *) => string} deps.createTeacherSessionToken
 * @param {(request: *) => *} deps.getTeacherSession
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @returns {RouteRegistry}
 */
export function createAuthLoginRouteRegistry({
  authenticateStudentOrParent,
  authenticateTeacher,
  createPortalSessionToken,
  createTeacherSessionToken,
  getTeacherSession,
  readJsonBody,
  sendJson
}) {
  /**
   * 아직 살아 있는 교사 세션을 같은 내용의 새 토큰으로 바꿔준다.
   *
   * 교사 토큰은 8시간짜리인데 학원 하루는 그보다 길다. 예전에는 수업 도중 토큰이 끊기면
   * 모든 요청이 401 이 됐고, 브라우저에는 로그인 정보가 30일짜리로 남아 있어서 새로고침해도
   * 같은 만료 토큰을 다시 보냈다(2026-09-08 수업일지·출결 장애).
   *
   * 만료된 토큰은 여기서도 갱신하지 않는다 — 그러면 8시간 제한이 무의미해진다. 화면이
   * 활동 중일 때만 부르므로, 켜두기만 한 탭이 세션을 무한정 연장하지도 않는다.
   *
   * @param {RouteDispatchContext} context
   */
  function refreshTeacherSession({ request, response }) {
    const teacherSession = getTeacherSession(request);
    if (!teacherSession) {
      sendJson(request, response, 401, {
        ok: false,
        code: "auth_required",
        error: "로그인 세션이 만료되었습니다. 다시 로그인해 주세요."
      });
      return true;
    }
    sendJson(request, response, 200, {
      ok: true,
      authenticated: true,
      account: {
        name: teacherSession.name,
        teacherId: teacherSession.teacherId,
        tenantId: teacherSession.tenantId || "tenant_default",
        teacherRole: teacherSession.teacherRole || "owner",
        sessionToken: createTeacherSessionToken(teacherSession)
      }
    });
    return true;
  }

  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method === "POST" && requestUrl.pathname === "/api/auth/refresh") {
      return refreshTeacherSession({ request, response, requestUrl });
    }
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
              tenantId: account.tenantId || "tenant_default",
              teacherRole: account.teacherRole || "owner",
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
