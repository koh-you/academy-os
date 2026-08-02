import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  authenticateAppSession,
  persistTeacherSession,
  readStoredTeacherSession
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
  teacherId: "teacher_001"
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
  teacherId: "teacher_server"
});
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

console.log("app auth/session ownership and transition fixtures passed");
