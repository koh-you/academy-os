import assert from "node:assert/strict";
import {
  appCoreReadRouteSignatures,
  createAppCoreReadRouteRegistry
} from "../src/shared/server/appCoreReadRouteRegistry.js";

const sends = [];
let listResult = {
  source: "supabase",
  stateRows: { monthlySettlements: { updatedAt: "v1" } },
  states: { specialLectureGuides: [{ guideId: "guide-1" }] }
};
let listError = null;
let listCalls = 0;
const registry = createAppCoreReadRouteRegistry({
  listAppState: async () => {
    listCalls += 1;
    if (listError) throw listError;
    return listResult;
  },
  sendJson: (request, response, statusCode, body) => sends.push({ body, request, response, statusCode })
});

assert.equal(Object.isFrozen(registry), true);
assert.deepEqual(appCoreReadRouteSignatures, [
  { method: "GET", path: "/api/app-state" },
  { method: "GET", path: "/api/special-lecture-guides" }
]);

function request(path, method = "GET") {
  return {
    request: { method },
    requestUrl: new URL(path, "http://127.0.0.1"),
    response: { path }
  };
}

assert.equal(await registry.dispatch(request("/api/app-state", "POST")), false);
assert.equal(await registry.dispatch(request("/unknown")), false);
assert.equal(listCalls, 0);

assert.equal(await registry.dispatch(request("/api/app-state")), true);
assert.equal(listCalls, 1);
assert.equal(sends.at(-1).statusCode, 200);
assert.deepEqual(sends.at(-1).body, {
  ok: true,
  source: "supabase",
  states: { specialLectureGuides: [{ guideId: "guide-1" }] }
});
assert.equal("stateRows" in sends.at(-1).body, false);

assert.equal(await registry.dispatch(request("/api/app-state?includeRows=true")), true);
assert.deepEqual(sends.at(-1).body.stateRows, {
  monthlySettlements: { updatedAt: "v1" }
});

assert.equal(await registry.dispatch(request("/api/special-lecture-guides")), true);
assert.deepEqual(sends.at(-1).body, {
  hasSpecialLectureGuides: true,
  ok: true,
  source: "supabase",
  specialLectureGuides: [{ guideId: "guide-1" }]
});

listResult = { source: "supabase", stateRows: {}, states: {} };
assert.equal(await registry.dispatch(request("/api/special-lecture-guides")), true);
assert.deepEqual(sends.at(-1).body, {
  hasSpecialLectureGuides: false,
  ok: true,
  source: "supabase",
  specialLectureGuides: []
});

listError = new Error("source failed");
for (const { path } of appCoreReadRouteSignatures) {
  assert.equal(await registry.dispatch(request(path)), true);
  assert.equal(sends.at(-1).statusCode, 500);
  assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
}

console.log("app core read route query, source summary, guide fallback, and failure contracts passed");
