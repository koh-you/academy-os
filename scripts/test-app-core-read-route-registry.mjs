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
const listOptions = [];
const registry = createAppCoreReadRouteRegistry({
  listAppState: async (options) => {
    listCalls += 1;
    listOptions.push(options);
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
// keys 가 없으면 전체 읽기(부트스트랩) — listAppState 에 옵션을 넘기지 않는다.
assert.deepEqual(listOptions, [undefined, undefined]);

// 저장 뒤 재조회는 저장한 키만 읽는다. 표 전체(알림 기록·보고서 스냅샷·성적 …)를 한 키 확인에
// 다시 받지 않도록 keys=a,b 를 그대로 listAppState 에 넘긴다. 응답 모양은 같다.
assert.equal(await registry.dispatch(request("/api/app-state?includeRows=true&verify=autosave-1&keys=aiSettings,notificationLogs")), true);
assert.deepEqual(listOptions.at(-1), { keys: ["aiSettings", "notificationLogs"] });
assert.deepEqual(sends.at(-1).body.stateRows, { monthlySettlements: { updatedAt: "v1" } });
assert.equal(await registry.dispatch(request("/api/app-state?keys=%20wrongProblems%20,,")), true);
assert.deepEqual(listOptions.at(-1), { keys: ["wrongProblems"] });

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
