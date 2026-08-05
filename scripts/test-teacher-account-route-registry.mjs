import assert from "node:assert/strict";
import {
  createTeacherAccountRouteRegistry,
  teacherAccountRouteSignatures
} from "../src/shared/server/teacherAccountRouteRegistry.js";

const sends = [];
const authCalls = [];
const saveCalls = [];
const configCalls = [];
let configured = true;
let payload = {};
let account = null;
let saveError = null;
const registry = createTeacherAccountRouteRegistry({
  authenticateTeacher: async (...args) => {
    authCalls.push(args);
    return account;
  },
  isSupabaseConfigured: (options) => {
    configCalls.push(options);
    return configured;
  },
  readJsonBody: async () => payload,
  saveTeacherAccount: async (nextAccount) => {
    saveCalls.push(nextAccount);
    if (saveError) throw saveError;
    return {
      teacher_id: nextAccount.teacherId,
      login_id: nextAccount.loginId,
      name: nextAccount.name
    };
  },
  sendJson: (request, response, statusCode, body) => sends.push({ body, request, response, statusCode }),
  toTeacherAccount: (row) => ({
    teacherId: row.teacher_id,
    loginId: row.login_id,
    name: row.name
  })
});

assert.equal(Object.isFrozen(registry), true);
assert.deepEqual(teacherAccountRouteSignatures, [{ method: "POST", path: "/api/auth/teacher-account" }]);

function request(method = "POST", path = "/api/auth/teacher-account") {
  return {
    request: { method },
    requestUrl: new URL(path, "http://127.0.0.1"),
    response: { path }
  };
}

assert.equal(await registry.dispatch(request("GET")), false);
assert.equal(await registry.dispatch(request("POST", "/unknown")), false);
assert.equal(sends.length, 0);

configured = false;
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(configCalls.at(-1), { requireServiceRole: true });
assert.equal(sends.at(-1).statusCode, 503);
assert.equal(authCalls.length, 0);
assert.equal(saveCalls.length, 0);

configured = true;
payload = { currentLoginId: "teacher", currentPassword: "old", loginId: "" };
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "아이디를 입력해주세요." });
assert.equal(sends.at(-1).statusCode, 500);

payload = { currentLoginId: "teacher", currentPassword: "old", loginId: "next", newPassword: "123" };
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "새 비밀번호는 4자리 이상이어야 합니다." });
assert.equal(sends.at(-1).statusCode, 500);

payload = { currentLoginId: " teacher ", currentPassword: "old", loginId: " next ", newPassword: "1234" };
account = null;
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(authCalls.at(-1), ["teacher", "old"]);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "현재 아이디 또는 비밀번호가 맞지 않습니다." });
assert.equal(sends.at(-1).statusCode, 401);
assert.equal(saveCalls.length, 0);

account = { teacherId: "teacher-1", loginId: "teacher", name: "기존 이름" };
payload = {
  currentLoginId: "teacher",
  currentPassword: "old-password",
  loginId: "next-teacher",
  name: "새 이름",
  newPassword: "new-password"
};
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(saveCalls.at(-1), {
  teacherId: "teacher-1",
  loginId: "next-teacher",
  name: "새 이름",
  password: "new-password"
});
assert.deepEqual(sends.at(-1).body, {
  ok: true,
  account: { teacherId: "teacher-1", loginId: "next-teacher", name: "새 이름" }
});
assert.equal(sends.at(-1).statusCode, 200);

payload = {
  currentLoginId: "teacher",
  currentPassword: "old-password",
  loginId: "same-password-teacher",
  newPassword: ""
};
assert.equal(await registry.dispatch(request()), true);
assert.equal(saveCalls.at(-1).password, "old-password");
assert.equal(saveCalls.at(-1).name, "기존 이름");

saveError = new Error("save failed");
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "save failed" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("teacher account configuration, credential, validation, save, password, and failure contracts passed");
