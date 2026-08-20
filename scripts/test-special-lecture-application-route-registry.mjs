import assert from "node:assert/strict";
import {
  createSpecialLectureApplicationRouteRegistry,
  specialLectureApplicationRouteSignatures
} from "../src/shared/server/specialLectureApplicationRouteRegistry.js";

const events = [];
const sends = [];
const deleteCalls = [];
let rawBody = {};
let listResult = { source: "supabase", specialLectureApplications: [] };
let upsertResult = { source: "supabase", application: { applicationId: "application-1" } };
let deleteResult = { source: "supabase", deleted: true, applicationId: "application-1" };
let routeError = null;

const registry = createSpecialLectureApplicationRouteRegistry({
  deleteSpecialLectureApplication: async (applicationId) => {
    events.push("delete");
    deleteCalls.push(applicationId);
    if (routeError?.stage === "delete") throw routeError.error;
    return deleteResult;
  },
  listSpecialLectureApplications: async () => {
    events.push("list");
    if (routeError?.stage === "list") throw routeError.error;
    return listResult;
  },
  readJsonBody: async () => {
    events.push("read");
    return rawBody;
  },
  sendJson: (request, response, statusCode, body) => {
    sends.push({ body, request, response, statusCode });
  },
  upsertSpecialLectureApplication: async (application) => {
    events.push("upsert");
    if (routeError?.stage === "upsert") throw routeError.error;
    return upsertResult;
  }
});

function route(method, path, searchParams = {}) {
  const requestUrl = new URL(path, "http://127.0.0.1");
  Object.entries(searchParams).forEach(([key, value]) => requestUrl.searchParams.set(key, value));
  return {
    request: { method },
    response: { path },
    requestUrl
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(specialLectureApplicationRouteSignatures), true);
assert.equal(specialLectureApplicationRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(specialLectureApplicationRouteSignatures, [
  { method: "GET", path: "/api/special-lecture-applications" },
  { method: "POST", path: "/api/special-lecture-applications" },
  { method: "DELETE", path: "/api/special-lecture-applications" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(events, []);

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/special-lecture-applications")), true);
assert.deepEqual(events, ["list"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...listResult });

events.length = 0;
rawBody = { application: { applicationId: "application-1", name: "홍길동" } };
assert.equal(await registry.dispatch(route("POST", "/api/special-lecture-applications")), true);
assert.deepEqual(events, ["read", "upsert"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...upsertResult });

events.length = 0;
assert.equal(await registry.dispatch(route("DELETE", "/api/special-lecture-applications", { id: "application-1" })), true);
assert.deepEqual(events, []);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "특강 신청 원본 삭제 확인값이 필요합니다." });
assert.equal(sends.at(-1).statusCode, 400);

events.length = 0;
deleteCalls.length = 0;
assert.equal(
  await registry.dispatch(route("DELETE", "/api/special-lecture-applications", { id: "application-1", confirm: "true" })),
  true
);
assert.deepEqual(events, ["delete"]);
assert.deepEqual(deleteCalls, ["application-1"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...deleteResult });

deleteResult = { source: "supabase", deleted: true, linkedEnrollmentIds: ["enrollment-1"] };
assert.equal(
  await registry.dispatch(route("DELETE", "/api/special-lecture-applications", { id: "application-1", confirm: "true" })),
  true
);
assert.deepEqual(sends.at(-1).body, {
  ok: false,
  error: "이미 확정 명단에 연결된 신청 원본은 삭제할 수 없습니다. 학생 회차와 수업일지 영향을 먼저 확인해 주세요."
});
assert.equal(sends.at(-1).statusCode, 409);

deleteResult = { source: "supabase", deleted: false };
assert.equal(
  await registry.dispatch(route("DELETE", "/api/special-lecture-applications", { id: "application-1", confirm: "true" })),
  true
);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "삭제할 특강 신청 원본을 찾지 못했습니다." });
assert.equal(sends.at(-1).statusCode, 404);

deleteResult = { source: "local", deleted: false };
assert.equal(
  await registry.dispatch(route("DELETE", "/api/special-lecture-applications", { id: "application-1", confirm: "true" })),
  true
);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "Supabase 연결을 확인하지 못해 신청 원본을 삭제하지 않았습니다." });
assert.equal(sends.at(-1).statusCode, 503);

routeError = { stage: "list", error: new Error("source failed") };
assert.equal(await registry.dispatch(route("GET", "/api/special-lecture-applications")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = { stage: "delete", error: new Error("삭제 실패") };
assert.equal(
  await registry.dispatch(route("DELETE", "/api/special-lecture-applications", { id: "application-1", confirm: "true" })),
  true
);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "삭제 실패" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("special lecture application route registry list, upsert, delete, and error contracts passed");
