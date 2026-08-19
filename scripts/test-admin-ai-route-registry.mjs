import assert from "node:assert/strict";
import {
  createAdminAiRouteRegistry,
  adminAiRouteSignatures
} from "../src/shared/server/adminAiRouteRegistry.js";

const events = [];
const sends = [];
let rawBody = {};
let seedResult = { source: "supabase", seeded: true };
let polishResult = { polishedText: "다듬어진 코멘트" };
let routeError = null;

const registry = createAdminAiRouteRegistry({
  polishLessonComment: async (payload) => {
    events.push("polish");
    if (routeError?.stage === "polish") throw routeError.error;
    return polishResult;
  },
  readJsonBody: async () => {
    events.push("read");
    return rawBody;
  },
  seedCoreData: async () => {
    events.push("seed");
    if (routeError?.stage === "seed") throw routeError.error;
    return seedResult;
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
assert.equal(Object.isFrozen(adminAiRouteSignatures), true);
assert.equal(adminAiRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(adminAiRouteSignatures, [
  { method: "POST", path: "/api/admin/seed-core-data" },
  { method: "POST", path: "/api/ai/comment-polish" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(events, []);

events.length = 0;
assert.equal(await registry.dispatch(route("POST", "/api/admin/seed-core-data")), true);
assert.deepEqual(events, ["seed"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...seedResult });

events.length = 0;
rawBody = { rawText: "원본 코멘트" };
assert.equal(await registry.dispatch(route("POST", "/api/ai/comment-polish")), true);
assert.deepEqual(events, ["read", "polish"]);
assert.deepEqual(sends.at(-1).body, { ok: true, result: polishResult });

routeError = { stage: "seed", error: new Error("시드 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/admin/seed-core-data")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "시드 실패" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = { stage: "polish", error: new Error("수정 실패") };
assert.equal(await registry.dispatch(route("POST", "/api/ai/comment-polish")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "수정 실패" });
assert.equal(sends.at(-1).statusCode, 500);

console.log("admin/ai route registry seed, polish, and error contracts passed");
