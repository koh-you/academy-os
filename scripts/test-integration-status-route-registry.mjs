import assert from "node:assert/strict";
import {
  createIntegrationStatusRouteRegistry,
  integrationStatusRouteSignatures
} from "../src/shared/server/integrationStatusRouteRegistry.js";

const sends = [];
let aiStatusCalls = 0;
let notificationStatusCalls = 0;
const registry = createIntegrationStatusRouteRegistry({
  getAiStatus: () => {
    aiStatusCalls += 1;
    return { provider: "openai", ready: true };
  },
  getNotificationStatus: () => {
    notificationStatusCalls += 1;
    return { solapi: { ready: false }, slack: { ready: true } };
  },
  sendJson: (request, response, statusCode, body) => sends.push({ body, request, response, statusCode })
});

assert.equal(Object.isFrozen(registry), true);
assert.deepEqual(integrationStatusRouteSignatures, [
  { method: "GET", path: "/api/integrations/status" }
]);

function request(path, method = "GET") {
  return {
    request: { method },
    requestUrl: new URL(path, "http://127.0.0.1"),
    response: { path }
  };
}

assert.equal(await registry.dispatch(request("/api/integrations/status", "POST")), false);
assert.equal(await registry.dispatch(request("/unknown")), false);
assert.equal(aiStatusCalls, 0);
assert.equal(notificationStatusCalls, 0);

const routeRequest = request("/api/integrations/status");
assert.equal(await registry.dispatch(routeRequest), true);
assert.equal(aiStatusCalls, 1);
assert.equal(notificationStatusCalls, 1);
assert.deepEqual(sends.at(-1), {
  body: {
    ok: true,
    result: {
      ai: { provider: "openai", ready: true },
      notifications: { solapi: { ready: false }, slack: { ready: true } }
    }
  },
  request: routeRequest.request,
  response: routeRequest.response,
  statusCode: 200
});

console.log("integration status route selector and response contracts passed");
