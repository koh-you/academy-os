import assert from "node:assert/strict";
import {
  createAttendanceRouteRegistry,
  attendanceRouteSignatures
} from "../src/shared/server/attendanceRouteRegistry.js";

const events = [];
const sends = [];
const attendanceCalls = [];
let rawBody = {};
let attendanceResult = { source: "supabase", attendance: { status: "checked_in" } };
let routeError = null;

const registry = createAttendanceRouteRegistry({
  handleAttendanceCheck: async (payload) => {
    events.push("check");
    attendanceCalls.push(payload);
    if (routeError) throw routeError;
    return attendanceResult;
  },
  parseVersionedWriteRequest: (method, pathname, body) => {
    events.push("parse");
    return { ...body, method, pathname };
  },
  readJsonBody: async () => {
    events.push("read");
    return rawBody;
  },
  sendJson: (request, response, statusCode, body) => {
    sends.push({ body, request, response, statusCode });
  }
});

function route(method, path) {
  const requestUrl = new URL(path, "http://127.0.0.1");
  return {
    request: { method },
    response: { path },
    requestUrl
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(attendanceRouteSignatures), true);
assert.equal(attendanceRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(attendanceRouteSignatures, [
  { method: "POST", path: "/api/attendance/check" },
  { method: "POST", path: "/api/attendance/preview" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(events, []);

events.length = 0;
attendanceCalls.length = 0;
rawBody = { studentId: "student-1", lessonId: "lesson-1" };
assert.equal(await registry.dispatch(route("POST", "/api/attendance/check")), true);
assert.deepEqual(events, ["read", "parse", "check"]);
assert.deepEqual(attendanceCalls.at(-1), {
  studentId: "student-1",
  lessonId: "lesson-1",
  method: "POST",
  pathname: "/api/attendance/check"
});
assert.deepEqual(sends.at(-1).body, { ok: true, ...attendanceResult });

events.length = 0;
attendanceCalls.length = 0;
rawBody = { studentId: "student-1", lessonId: "lesson-1" };
assert.equal(await registry.dispatch(route("POST", "/api/attendance/preview")), true);
assert.deepEqual(events, ["read", "check"]);
assert.deepEqual(attendanceCalls.at(-1), {
  studentId: "student-1",
  lessonId: "lesson-1",
  previewOnly: true,
  sendAlimtalk: false
});
assert.deepEqual(sends.at(-1).body, { ok: true, ...attendanceResult });

routeError = Object.assign(new Error("확인 실패"), { code: "ATTENDANCE_CONFLICT", field: "studentId", statusCode: 409 });
assert.equal(await registry.dispatch(route("POST", "/api/attendance/check")), true);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  error: "확인 실패",
  code: "ATTENDANCE_CONFLICT",
  field: "studentId"
});
assert.equal(sends.at(-1).statusCode, 409);

routeError = new Error("미리보기 실패");
assert.equal(await registry.dispatch(route("POST", "/api/attendance/preview")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "미리보기 실패" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("attendance route registry check, preview, and error contracts passed");
