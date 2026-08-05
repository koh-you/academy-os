import assert from "node:assert/strict";
import {
  createIntegrationStatusRouteRegistry,
  integrationStatusRouteSignatures
} from "../src/shared/server/integrationStatusRouteRegistry.js";

const calls = [];
const sends = [];
let statusError = null;
const registry = createIntegrationStatusRouteRegistry({
  getAiStatus: () => {
    calls.push("ai");
    if (statusError === "ai") throw new Error("ai status failed");
    return { configured: false, provider: "none" };
  },
  getNotificationStatus: () => {
    calls.push("notifications");
    if (statusError === "notifications") throw new Error("notification status failed");
    return { dryRun: true, provider: "solapi" };
  },
  sendJson: (request, response, statusCode, body) => sends.push({ body, request, response, statusCode })
});

function route(method = "GET", path = "/api/integrations/status") {
  return {
    request: { method },
    requestUrl: new URL(path, "http://127.0.0.1"),
    response: { path }
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(integrationStatusRouteSignatures), true);
assert.equal(Object.isFrozen(integrationStatusRouteSignatures[0]), true);
assert.deepEqual(integrationStatusRouteSignatures, [
  { method: "GET", path: "/api/integrations/status" }
]);

assert.equal(await registry.dispatch(route("POST")), false);
assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(calls, []);
assert.deepEqual(sends, []);

const integrationRoute = route();
assert.equal(await registry.dispatch(integrationRoute), true);
assert.deepEqual(calls, ["ai", "notifications"]);
assert.deepEqual(sends.at(-1), {
  body: {
    ok: true,
    result: {
      ai: { configured: false, provider: "none" },
      notifications: { dryRun: true, provider: "solapi" }
    }
  },
  request: integrationRoute.request,
  response: integrationRoute.response,
  statusCode: 200
});

statusError = "ai";
await assert.rejects(registry.dispatch(route()), /ai status failed/);
assert.deepEqual(calls.slice(-1), ["ai"]);

statusError = "notifications";
await assert.rejects(registry.dispatch(route()), /notification status failed/);
assert.deepEqual(calls.slice(-2), ["ai", "notifications"]);

console.log("integration status method, provider summary, and source failure contracts passed");
