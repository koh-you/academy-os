import assert from "node:assert/strict";
import {
  createClassTemplateRouteRegistry,
  classTemplateRouteSignatures
} from "../src/shared/server/classTemplateRouteRegistry.js";

const events = [];
const sends = [];
let listResult = { source: "supabase", classTemplates: [] };
let routeError = null;

const registry = createClassTemplateRouteRegistry({
  listClassTemplates: async () => {
    events.push("list");
    if (routeError) throw routeError;
    return listResult;
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
assert.equal(Object.isFrozen(classTemplateRouteSignatures), true);
assert.equal(classTemplateRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(classTemplateRouteSignatures, [{ method: "GET", path: "/api/classes" }]);

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

console.log("class template route registry list and error contracts passed");
