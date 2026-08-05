import assert from "node:assert/strict";
import {
  createPortalReadRouteRegistry,
  portalReadRouteSignatures
} from "../src/shared/server/portalReadRouteRegistry.js";

const sends = [];
const dataCalls = [];
let session = null;
let data = null;
let dataError = null;
const registry = createPortalReadRouteRegistry({
  getPortalData: async (currentSession) => {
    dataCalls.push(currentSession);
    if (dataError) throw dataError;
    return data;
  },
  getPortalSession: () => session,
  sendJson: (request, response, statusCode, body) => sends.push({ body, request, response, statusCode })
});

assert.equal(Object.isFrozen(registry), true);
assert.deepEqual(portalReadRouteSignatures, [{ method: "GET", path: "/api/portal-data" }]);

function request(method = "GET", path = "/api/portal-data") {
  return {
    request: { method },
    requestUrl: new URL(path, "http://127.0.0.1"),
    response: { path }
  };
}

assert.equal(await registry.dispatch(request("POST")), false);
assert.equal(await registry.dispatch(request("GET", "/unknown")), false);
assert.equal(sends.length, 0);

assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "학생 세션 인증이 필요합니다." });
assert.equal(sends.at(-1).statusCode, 401);
assert.equal(dataCalls.length, 0);

session = { role: "student", studentId: "student-1" };
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(dataCalls.at(-1), session);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "학생 정보를 찾지 못했습니다." });
assert.equal(sends.at(-1).statusCode, 404);

data = { lessons: [{ lessonId: "lesson-1" }], student: { studentId: "student-1" } };
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(sends.at(-1).body, {
  ok: true,
  role: "student",
  lessons: [{ lessonId: "lesson-1" }],
  student: { studentId: "student-1" }
});
assert.equal(sends.at(-1).statusCode, 200);

session = { role: "parent", studentId: "student-1" };
assert.equal(await registry.dispatch(request()), true);
assert.equal(sends.at(-1).body.role, "parent");

dataError = new Error("portal read failed");
assert.equal(await registry.dispatch(request()), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "portal read failed" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("portal read guard, role, source result, not-found, and failure contracts passed");
