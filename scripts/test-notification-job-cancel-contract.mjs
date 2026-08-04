import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import { cancelNotificationJobRequest } from "../src/domains/notifications/notificationJobApi.js";

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

const [contractApiSource, jobApiSource, safeApiSource, serverSource] = await Promise.all([
  readSource("src/domains/notifications/notificationJobContractApi.js"),
  readSource("src/domains/notifications/notificationJobApi.js"),
  readSource("scripts/safe-local-api.mjs"),
  readSource("api/server.js")
]);

const routeStart = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/cancel")'
);
const routeEnd = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/reserve")',
  routeStart
);
assert.ok(routeStart >= 0 && routeEnd > routeStart);
const cancelRoute = serverSource.slice(routeStart, routeEnd);

for (const expected of [
  "parseVersionedWriteRequest(",
  "await readJsonBody(request)",
  "payload.notificationJobId",
  "payload.cancelSolapi !== false",
  "cancelSolapiReservationGroup(providerGroupId)",
  "cancelNotificationJob(notificationJobId, reason)",
  "solapiCancellation",
  "Number(error.statusCode) || 500",
  "error.field"
]) {
  assert.ok(cancelRoute.includes(expected), `cancel route missing ${expected}`);
}
assert.equal(cancelRoute.includes("payload.notificationJobId || payload.id"), false);

for (const expected of [
  "export async function cancelNotificationJobRequest",
  "loadNotificationJobContractApi()",
  "cancelNotificationJobContractRequest({",
  "onNotificationJob(result.notificationJob)"
]) {
  assert.ok(jobApiSource.includes(expected), `cancel client boundary missing ${expected}`);
}
for (const expected of [
  "export async function cancelNotificationJobContractRequest",
  'parseVersionedWriteRequest("POST", "/api/notification-jobs/cancel"',
  'request("/api/notification-jobs/cancel", payload, ...requestArgs)',
  'parseVersionedWriteResponse("POST", "/api/notification-jobs/cancel", result)',
  "...result"
]) {
  assert.ok(contractApiSource.includes(expected), `cancel client contract missing ${expected}`);
}

const safeRouteStart = safeApiSource.indexOf('if (pathname === "/api/notification-jobs/cancel")');
const safeRouteEnd = safeApiSource.indexOf('if (pathname === "/api/resource-materials")', safeRouteStart);
assert.ok(safeRouteStart >= 0 && safeRouteEnd > safeRouteStart);
const safeCancelRoute = safeApiSource.slice(safeRouteStart, safeRouteEnd);
for (const expected of [
  'parseVersionedWriteRequest("POST", pathname, payload)',
  "parsedPayload.notificationJobId",
  'status: "canceled"',
  "solapiCancellation: null"
]) {
  assert.ok(safeCancelRoute.includes(expected), `safe cancel route missing ${expected}`);
}
assert.equal(safeCancelRoute.includes("cancelSolapiReservationGroup"), false);

const canceledJob = { notificationJobId: "contract-cancel-1", status: "canceled" };
const requestCalls = [];
const result = await cancelNotificationJobRequest({
  cancelSolapi: false,
  notificationJob: { notificationJobId: "contract-cancel-1", status: "scheduled" },
  reason: " contract cancel ",
  request: async (path, body, marker) => {
    requestCalls.push({ body, marker, path });
    return {
      notificationJob: canceledJob,
      solapiCancellation: null,
      source: "supabase"
    };
  },
  requestArgs: ["contract-marker"]
});
assert.deepEqual(requestCalls, [{
  body: {
    cancelSolapi: false,
    notificationJobId: "contract-cancel-1",
    reason: "contract cancel"
  },
  marker: "contract-marker",
  path: "/api/notification-jobs/cancel"
}]);
assert.equal(result.notificationJob, canceledJob);
assert.equal(result.solapiCancellation, null);
assert.equal(result.source, "supabase");

console.log("notification cancel payload, source persistence, and provider separation contract passed");
