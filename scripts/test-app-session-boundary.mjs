import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  authenticateAppSession,
  createSessionDataIdentity,
  isSessionRefreshDue,
  persistTeacherSession,
  readStoredTeacherSession,
  sessionRefreshMinimumIntervalMs
} from "../src/app/useAppSession.js";

class FakeStorage {
  constructor(initial = {}) {
    this.values = new Map(Object.entries(initial));
    this.removed = [];
  }

  getItem(key) { return this.values.get(key) ?? null; }
  removeItem(key) { this.removed.push(key); this.values.delete(key); }
  setItem(key, value) { this.values.set(key, value); }
}

const storageKey = "academy-os.teacherSession.v1";
const storedTeacher = {
  actorId: "teacher_actor",
  name: "교사",
  role: "teacher",
  sessionToken: "fixture-token",
  teacherId: "teacher_001",
  tenantId: "tenant_default",
  teacherRole: "owner"
};
const localStorage = new FakeStorage({ [storageKey]: JSON.stringify(storedTeacher) });
const sessionStorage = new FakeStorage();
const windowTarget = { localStorage, sessionStorage };
const documentTarget = { cookie: "" };

assert.deepEqual(
  readStoredTeacherSession({ documentTarget, storageKey, windowTarget }),
  storedTeacher,
  "teacher session must initialize from the first valid persistence source"
);

persistTeacherSession({
  documentTarget,
  session: { ...storedTeacher, studentId: "must-not-persist", unrelated: true },
  storageKey,
  windowTarget
});
for (const storage of [localStorage, sessionStorage]) {
  assert.deepEqual(
    JSON.parse(storage.getItem(storageKey)),
    storedTeacher,
    "teacher persistence must keep only the session contract"
  );
}
assert.match(documentTarget.cookie, /max-age=2592000/);

persistTeacherSession({ documentTarget, session: null, storageKey, windowTarget });
assert.equal(localStorage.getItem(storageKey), null);
assert.equal(sessionStorage.getItem(storageKey), null);
assert.deepEqual(localStorage.removed, [storageKey]);
assert.deepEqual(sessionStorage.removed, [storageKey]);
assert.match(documentTarget.cookie, /max-age=0/);

const requests = [];
const teacherResult = await authenticateAppSession({
  loginId: "teacher",
  password: "fixture-password",
  request: async (path, body) => {
    requests.push([path, body]);
    return {
      authenticated: true,
      account: { name: "서버 교사", sessionToken: "server-token", teacherId: "teacher_server" }
    };
  },
  role: "teacher",
  teacherAccount: { name: "설정 교사" }
});
assert.equal(teacherResult.ok, true);
assert.deepEqual(teacherResult.session, {
  actorId: "instructor_owner_001",
  name: "서버 교사",
  role: "teacher",
  sessionToken: "server-token",
  teacherId: "teacher_server",
  tenantId: "tenant_default",
  teacherRole: "owner"
});

// 서버가 tenantId / teacherRole 을 주면 세션에 그대로 반영된다.
const scopedTeacherResult = await authenticateAppSession({
  loginId: "assistant",
  password: "fixture-password",
  request: async () => ({
    authenticated: true,
    account: {
      name: "협력 교사",
      sessionToken: "assistant-token",
      teacherId: "teacher_assistant",
      tenantId: "tenant_abc123",
      teacherRole: "assistant"
    }
  }),
  role: "teacher",
  teacherAccount: { name: "설정 교사" }
});
assert.equal(scopedTeacherResult.session.tenantId, "tenant_abc123");
assert.equal(scopedTeacherResult.session.teacherRole, "assistant");
assert.deepEqual(requests, [["/api/auth/login", {
  loginId: "teacher",
  password: "fixture-password",
  role: "teacher"
}]]);

for (const role of ["student", "parent"]) {
  const result = await authenticateAppSession({
    loginId: `${role}-id`,
    password: "fixture-password",
    request: async () => ({
      authenticated: true,
      account: {
        actorId: `${role}_actor`,
        name: `${role} fixture`,
        sessionToken: `${role}-token`,
        studentId: "student_001"
      }
    }),
    role,
    teacherAccount: { name: "unused" }
  });
  assert.equal(result.ok, true);
  assert.equal(result.session.role, role);
  assert.equal(result.session.studentId, "student_001");
}

const failedStudent = await authenticateAppSession({
  loginId: "student",
  password: "wrong",
  request: async () => ({ authenticated: false }),
  role: "student",
  teacherAccount: { name: "unused" }
});
assert.deepEqual(failedStudent, { ok: false, message: "학생 아이디 또는 비밀번호가 맞지 않습니다." });

const [appSource, hookSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/useAppSession.js", import.meta.url), "utf8")
]);
assert.equal(appSource.includes("useAppSession({"), true);
assert.equal(appSource.includes("setSession("), false, "App must no longer mutate session state directly");
assert.equal(appSource.includes("persistTeacherSession("), false, "App must not own session persistence");
assert.equal(
  hookSource.includes("const [session, setSession] = useState(() =>"),
  true,
  "session initialization must be lazy and run once per mount"
);
assert.equal(hookSource.includes("onSessionAccepted(result.session)"), true);
assert.equal(hookSource.includes("onLogout()"), true);
assert.equal(hookSource.includes('request("/api/auth/login"'), true);

// 부트스트랩 경계: 토큰만 바뀌면 같은 자료, 계정·역할·테넌트·보는 선생님이 바뀌면 다른 자료.
// 2026-09-09~19 에는 effect 가 session 객체 자체를 의존성으로 써서 활동 중 갱신 한 번에
// 16개 조회가 다시 돌고 화면 상태를 서버 값으로 덮어썼다(갱신이 실제로 나갔다면).
{
  const identity = createSessionDataIdentity(storedTeacher, "");
  assert.equal(identity, "teacher|teacher_001|||tenant_default|");
  assert.equal(createSessionDataIdentity({ ...storedTeacher, sessionToken: "rotated" }, ""), identity);
  assert.notEqual(createSessionDataIdentity(storedTeacher, "tenant_b"), identity);
  assert.notEqual(createSessionDataIdentity({ ...storedTeacher, teacherId: "teacher_002" }, ""), identity);
  assert.notEqual(createSessionDataIdentity({ ...storedTeacher, teacherRole: "assistant", tenantId: "tenant_x" }, ""), identity);
  assert.equal(createSessionDataIdentity(null, "tenant_b"), "");
  assert.equal(createSessionDataIdentity({ role: "student", studentId: "s1", sessionToken: "a" }), "student||s1|||");
  const bootstrapDependencies = appSource.slice(
    appSource.indexOf("    setWrongProblems,"),
    appSource.indexOf("    attendanceReloadKey")
  );
  assert.ok(
    bootstrapDependencies.includes("sessionDataIdentity,") && !bootstrapDependencies.includes("    session,"),
    "부트스트랩은 세션 객체가 아니라 자료 정체성에 묶여야 한다"
  );
}

// 활동 중 세션 연장: 30분 전에는 안 하고, 30분이 지나면 한다. App 은 마지막 갱신 시각을
// ref 에 두어야 한다 — effect 지역 변수에 두면 렌더마다 되돌아가 영영 30분이 차지 않는다.
{
  const start = 1_000_000;
  assert.equal(sessionRefreshMinimumIntervalMs, 30 * 60 * 1000);
  assert.equal(isSessionRefreshDue(start, start + sessionRefreshMinimumIntervalMs - 1), false);
  assert.equal(isSessionRefreshDue(start, start + sessionRefreshMinimumIntervalMs), true);
  assert.equal(isSessionRefreshDue(0, sessionRefreshMinimumIntervalMs), true);
  assert.equal(isSessionRefreshDue(undefined, sessionRefreshMinimumIntervalMs), true);
  const refreshHookSource = await readFile(new URL("../src/app/useSessionActivityRefresh.js", import.meta.url), "utf8");
  assert.ok(refreshHookSource.includes("const lastRefreshAtRef = useRef(0);"));
  assert.ok(refreshHookSource.includes("refreshSessionRef.current();"));
  assert.ok(refreshHookSource.includes("}, [documentTarget, enabled, sessionToken]);"));
  assert.ok(
    !refreshHookSource.includes("refreshSession]") && !appSource.includes("refreshSession, session?.role"),
    "렌더마다 새로 만들어지는 refreshSession 을 effect 의존성에 넣으면 안 된다"
  );
  assert.ok(appSource.includes("useSessionActivityRefresh({"), "App 은 활동 중 세션 연장 hook 을 써야 한다");
}

console.log("app auth/session ownership and transition fixtures passed");
