// @ts-check
// 원장(owner)이 협력 교사 계정을 직접 만들고 관리하는 라우트.
//
// 왜 필요한가: 계정을 만들 방법이 OS 안에 없어서, 선생님이 늘 때마다 DB 에 직접
// 행을 넣어야 했다. 기존 /api/auth/teacher-account 는 "내 아이디·비밀번호 바꾸기"라
// 새 계정을 만들지 못한다.
//
// 권한: 전역 게이트가 owner 만 통과시킨다(assistant 는 허용 목록에 없어 403).
// 이 파일에서 역할을 다시 검사하지 않는 이유는 정책이 한 곳(apiAccessPolicy)에만
// 있어야 하기 때문이다.

/** @typedef {import("./routeRegistryTypes.js").RouteDispatchContext} RouteDispatchContext */
/** @typedef {import("./routeRegistryTypes.js").RouteRegistry} RouteRegistry */

export const teacherAccountAdminRouteSignatures = Object.freeze([
  Object.freeze({ method: "GET", path: "/api/teacher-accounts" }),
  Object.freeze({ method: "POST", path: "/api/teacher-accounts" }),
  Object.freeze({ method: "POST", path: "/api/teacher-accounts/status" })
]);

export function validateNewTeacherAccountInput({ loginId = "", name = "", password = "" } = {}) {
  const nextLoginId = String(loginId).trim();
  const nextName = String(name).trim();
  const nextPassword = String(password);
  if (!nextLoginId) return { ok: false, error: "아이디를 입력해주세요." };
  if (!/^[A-Za-z0-9_.-]{3,32}$/.test(nextLoginId)) {
    return { ok: false, error: "아이디는 영문·숫자·(_ . -) 3~32자로 입력해주세요." };
  }
  if (!nextName) return { ok: false, error: "선생님 이름을 입력해주세요." };
  if (nextPassword.length < 4) return { ok: false, error: "초기 비밀번호는 4자리 이상이어야 합니다." };
  return { ok: true, loginId: nextLoginId, name: nextName, password: nextPassword };
}

/**
 * @param {Object} deps
 * @param {() => Promise<*[]>} deps.listTeacherAccounts 모든 테넌트의 교사 계정
 * @param {(loginId: string) => Promise<*>} deps.findTeacherAccountByLoginId
 * @param {(input: *) => Promise<*>} deps.createTeacherAccount
 * @param {(teacherId: string, isActive: boolean) => Promise<*>} deps.setTeacherAccountActive
 * @param {(options?: { requireServiceRole?: boolean }) => boolean} deps.isSupabaseConfigured
 * @param {(request: *) => Promise<Record<string, *>>} deps.readJsonBody
 * @param {(request: *, response: *, statusCode: number, data: *) => void} deps.sendJson
 * @returns {RouteRegistry}
 */
export function createTeacherAccountAdminRouteRegistry({
  createTeacherAccount,
  findTeacherAccountByLoginId,
  isSupabaseConfigured,
  listTeacherAccounts,
  readJsonBody,
  sendJson,
  setTeacherAccountActive
}) {
  /** @param {RouteDispatchContext} context */
  async function dispatch({ request, response, requestUrl }) {
    if (!requestUrl.pathname.startsWith("/api/teacher-accounts")) return false;

    if (!isSupabaseConfigured({ requireServiceRole: true })) {
      sendJson(request, response, 503, {
        ok: false,
        error: "Supabase service role 설정이 필요합니다."
      });
      return true;
    }

    if (request.method === "GET" && requestUrl.pathname === "/api/teacher-accounts") {
      try {
        sendJson(request, response, 200, { ok: true, accounts: await listTeacherAccounts() });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/teacher-accounts") {
      try {
        const validated = validateNewTeacherAccountInput(await readJsonBody(request));
        if (!validated.ok) {
          sendJson(request, response, 400, { ok: false, error: validated.error });
          return true;
        }
        if (await findTeacherAccountByLoginId(validated.loginId)) {
          sendJson(request, response, 409, { ok: false, error: "이미 쓰이고 있는 아이디입니다." });
          return true;
        }
        const account = await createTeacherAccount(validated);
        sendJson(request, response, 200, { ok: true, account });
      } catch (error) {
        sendJson(request, response, 500, { ok: false, error: error.message });
      }
      return true;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/teacher-accounts/status") {
      try {
        const payload = await readJsonBody(request);
        const teacherId = String(payload.teacherId ?? "").trim();
        if (!teacherId) {
          sendJson(request, response, 400, { ok: false, error: "teacherId 가 필요합니다." });
          return true;
        }
        const account = await setTeacherAccountActive(teacherId, payload.isActive !== false);
        sendJson(request, response, 200, { ok: true, account });
      } catch (error) {
        sendJson(request, response, Number(error.statusCode) || 500, { ok: false, error: error.message });
      }
      return true;
    }

    return false;
  }

  return Object.freeze({ dispatch, routeSignatures: teacherAccountAdminRouteSignatures });
}
