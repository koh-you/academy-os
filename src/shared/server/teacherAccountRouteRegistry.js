// @ts-check

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const teacherAccountRouteSignatures = Object.freeze([
  Object.freeze({ method: "POST", path: "/api/auth/teacher-account" })
]);

/**
 * @param {Object} deps
 * @param {(loginId: string, password: string) => Promise<*>} deps.authenticateTeacher
 * @param {(options?: { requireServiceRole?: boolean }) => boolean} deps.isSupabaseConfigured
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(account: *) => Promise<*>} deps.saveTeacherAccount
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @param {(account: *) => *} deps.toTeacherAccount
 * @returns {RouteRegistry}
 */
export function createTeacherAccountRouteRegistry({
  authenticateTeacher,
  isSupabaseConfigured,
  readJsonBody,
  saveTeacherAccount,
  sendJson,
  toTeacherAccount
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (request.method !== "POST" || requestUrl.pathname !== "/api/auth/teacher-account") return false;
    try {
      if (!isSupabaseConfigured({ requireServiceRole: true })) {
        sendJson(request, response, 503, {
          ok: false,
          error: "Supabase service role 또는 teacher_accounts 테이블 설정이 필요합니다."
        });
        return true;
      }
      const payload = await readJsonBody(request);
      const currentLoginId = String(payload.currentLoginId ?? "").trim();
      const currentPassword = String(payload.currentPassword ?? "");
      const nextLoginId = String(payload.loginId ?? "").trim();
      const nextPassword = String(payload.newPassword ?? "");
      if (!nextLoginId) throw new Error("아이디를 입력해주세요.");
      if (nextPassword && nextPassword.length < 4) throw new Error("새 비밀번호는 4자리 이상이어야 합니다.");

      const account = await authenticateTeacher(currentLoginId, currentPassword);
      if (!account) {
        sendJson(request, response, 401, { ok: false, error: "현재 아이디 또는 비밀번호가 맞지 않습니다." });
        return true;
      }

      const saved = await saveTeacherAccount({
        teacherId: account.teacherId,
        loginId: nextLoginId,
        name: payload.name ?? account.name,
        password: nextPassword || currentPassword
      });
      sendJson(request, response, 200, { ok: true, account: toTeacherAccount(saved) });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return true;
  }

  return Object.freeze({ dispatch, routeSignatures: teacherAccountRouteSignatures });
}
