import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

const [appSource, contractApiSource, jobApiSource, safeApiSource, serverSource] = await Promise.all([
  readSource("src/app/App.jsx"),
  readSource("src/domains/notifications/notificationJobContractApi.js"),
  readSource("src/domains/notifications/notificationJobApi.js"),
  readSource("scripts/safe-local-api.mjs"),
  readSource("api/server.js")
]);

const routeStart = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs")'
);
const routeEnd = serverSource.indexOf(
  'if (request.method === "GET" && requestUrl.pathname === "/api/solapi/messages")',
  routeStart
);
assert.ok(routeStart >= 0 && routeEnd > routeStart);
const sourceWriteRoute = serverSource.slice(routeStart, routeEnd);

for (const expected of [
  "parseVersionedWriteRequest(",
  "await readJsonBody(request)",
  "upsertNotificationJob(payload.notificationJob)",
  "Number(error.statusCode) || 500",
  "error.field"
]) {
  assert.ok(sourceWriteRoute.includes(expected), `source write route missing ${expected}`);
}
for (const forbidden of [
  "reserveNotificationJobInSolapi",
  "cancelSolapiReservationGroup",
  "reconcileSolapiNotificationJobs",
  "sendScheduledNotificationJobToSolapi"
]) {
  assert.equal(sourceWriteRoute.includes(forbidden), false, `source write route owns provider effect ${forbidden}`);
}

for (const expected of [
  "export async function persistNotificationJobRequest",
  'await import("./notificationJobContractApi.js")',
  "persistNotificationJobContractRequest({ notificationJob, request, requestArgs })",
  "persistNotificationJobRequest({ notificationJob: failedJob, request })"
]) {
  assert.ok(jobApiSource.includes(expected), `client source boundary missing ${expected}`);
}
for (const expected of [
  "export async function persistNotificationJobContractRequest",
  'parseVersionedWriteRequest("POST", "/api/notification-jobs"',
  'request("/api/notification-jobs", payload, ...requestArgs)',
  'parseVersionedWriteResponse("POST", "/api/notification-jobs", result)'
]) {
  assert.ok(contractApiSource.includes(expected), `client source contract missing ${expected}`);
}

assert.equal(appSource.includes('postJson("/api/notification-jobs"'), false);
assert.ok((appSource.match(/persistNotificationJobRequest\(\{/g) ?? []).length >= 3);
assert.ok(safeApiSource.includes('if (pathname === "/api/notification-jobs")'));
assert.ok(safeApiSource.includes('parseVersionedWriteRequest("POST", pathname, payload)'));
assert.ok(safeApiSource.includes("state.notificationJobs = upsertById("));

console.log("notification job source payload contract and provider separation passed");
