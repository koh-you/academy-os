import assert from "node:assert/strict";
import {
  createClassTemplateRouteRegistry,
  classTemplateRouteSignatures
} from "../src/shared/server/classTemplateRouteRegistry.js";

const events = [];
const sends = [];
let listResult = { source: "supabase", classTemplates: [] };
let routeError = null;
let saveResult = { source: "supabase", classTemplate: { classTemplateId: "template_x" }, verified: true };
let saveError = null;

const registry = createClassTemplateRouteRegistry({
  listClassTemplates: async () => {
    events.push("list");
    if (routeError) throw routeError;
    return listResult;
  },
  readJsonBody: async (request) => request.body ?? {},
  saveClassTemplate: async (input) => {
    events.push(["save", input]);
    if (saveError) throw saveError;
    return saveResult;
  },
  sendJson: (request, response, statusCode, body) => {
    sends.push({ body, request, response, statusCode });
  }
});

function route(method, path, body) {
  const requestUrl = new URL(path, "http://127.0.0.1");
  return {
    request: { method, body },
    response: { path },
    requestUrl
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(classTemplateRouteSignatures), true);
assert.equal(classTemplateRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(classTemplateRouteSignatures, [
  { method: "GET", path: "/api/classes" },
  { method: "POST", path: "/api/classes" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(events, []);

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/classes")), true);
assert.deepEqual(events, ["list"]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...listResult });
assert.equal(sends.at(-1).statusCode, 200);

routeError = new Error("source failed");
assert.equal(await registry.dispatch(route("GET", "/api/classes")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "source failed" });
assert.equal(sends.at(-1).statusCode, 500);

// 반 개설·수정: { classTemplate } 로 감싼 본문과 맨 본문 둘 다 받는다.
events.length = 0;
const input = { name: "화목 5-7반", days: ["tue", "thu"], startTime: "17:00", endTime: "19:00" };
assert.equal(await registry.dispatch(route("POST", "/api/classes", { classTemplate: input })), true);
assert.deepEqual(events, [["save", input]]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...saveResult });
assert.equal(sends.at(-1).statusCode, 200);

events.length = 0;
assert.equal(await registry.dispatch(route("POST", "/api/classes", input)), true);
assert.deepEqual(events, [["save", input]]);

// 입력 오류는 statusCode·code 를 그대로 내려서 화면이 문장을 보여줄 수 있게 한다.
saveError = Object.assign(new Error("반 이름을 입력해 주세요."), { statusCode: 400, code: "invalid_class_template" });
assert.equal(await registry.dispatch(route("POST", "/api/classes", {})), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "반 이름을 입력해 주세요.", code: "invalid_class_template" });
assert.equal(sends.at(-1).statusCode, 400);
saveError = null;

console.log("class template route registry list/save and error contracts passed");
