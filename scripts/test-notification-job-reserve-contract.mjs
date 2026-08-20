import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

const [contractApiSource, jobApiSource, safeApiSource, serverSource, notificationJobRouteRegistrySource] = await Promise.all([
  readSource("src/domains/notifications/notificationJobContractApi.js"),
  readSource("src/domains/notifications/notificationJobApi.js"),
  readSource("scripts/safe-local-api.mjs"),
  readSource("api/server.js"),
  readSource("src/shared/server/notificationJobRouteRegistry.js")
]);

const routeStart = notificationJobRouteRegistrySource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/reserve")'
);
const routeEnd = notificationJobRouteRegistrySource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/reconcile-solapi")',
  routeStart
);
assert.ok(routeStart >= 0 && routeEnd > routeStart);
const reserveRoute = notificationJobRouteRegistrySource.slice(routeStart, routeEnd);

for (const expected of [
  "parseVersionedWriteRequest(",
  "await readJsonBody(request)",
  "reserveNotificationJobInSolapi(payload.notificationJob",
  "forceDryRun: Boolean(payload.forceDryRun)",
  'reason: payload.reason || "수업일지 예약"',
  "Number(error.statusCode) || 500",
  "error.field"
]) {
  assert.ok(reserveRoute.includes(expected), `reserve route missing ${expected}`);
}
assert.equal(reserveRoute.includes("payload.notificationJob ?? payload"), false);

// MV-2b moved the reserve orchestration body out of api/server.js into
// notificationSolapiReserveService.js (behavior verified by
// test-notification-solapi-reserve-service.mjs, not by source-slicing here).
// server.js keeps thin hoisted-function wrappers with the same names so the
// route registry wiring above (evaluated before the service is constructed)
// keeps working; this only checks that ownership move is deliberate and wired.
assert.ok(serverSource.includes("function reserveNotificationJobInSolapi(job, options)"));
assert.ok(serverSource.includes("function reserveNotificationJobsInSolapi(jobs, options)"));
assert.ok(serverSource.includes('from "../src/shared/server/notificationSolapiReserveService.js"'));
assert.ok(serverSource.includes("createNotificationSolapiReserveService({"));

for (const expected of [
  "export async function reserveNotificationJobProviderRequest",
  "loadNotificationJobContractApi()",
  "reserveNotificationJobContractRequest({",
  "const result = await reserveNotificationJobProviderRequest({"
]) {
  assert.ok(jobApiSource.includes(expected), `provider client boundary missing ${expected}`);
}
for (const expected of [
  "export async function reserveNotificationJobContractRequest",
  'parseVersionedWriteRequest("POST", "/api/notification-jobs/reserve"',
  'request("/api/notification-jobs/reserve", payload, ...requestArgs)',
  'parseVersionedWriteResponse("POST", "/api/notification-jobs/reserve", result)'
]) {
  assert.ok(contractApiSource.includes(expected), `provider client contract missing ${expected}`);
}

assert.ok(safeApiSource.includes('if (pathname === "/api/notification-jobs/reserve")'));
assert.ok(safeApiSource.includes('parseVersionedWriteRequest("POST", pathname, payload)'));
assert.ok(safeApiSource.includes("reserved: !parsedPayload.forceDryRun"));

console.log("notification reserve payload and source/provider orchestration contract passed");
