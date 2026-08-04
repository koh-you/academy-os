import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

const [contractApiSource, jobApiSource, safeApiSource, serverSource] = await Promise.all([
  readSource("src/domains/notifications/notificationJobContractApi.js"),
  readSource("src/domains/notifications/notificationJobApi.js"),
  readSource("scripts/safe-local-api.mjs"),
  readSource("api/server.js")
]);

const routeStart = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/reserve")'
);
const routeEnd = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/reconcile-solapi")',
  routeStart
);
assert.ok(routeStart >= 0 && routeEnd > routeStart);
const reserveRoute = serverSource.slice(routeStart, routeEnd);

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

const reservationStart = serverSource.indexOf("async function reserveNotificationJobInSolapi(");
const reservationEnd = serverSource.indexOf("async function reserveNotificationJobsInSolapi(", reservationStart);
assert.ok(reservationStart >= 0 && reservationEnd > reservationStart);
const reservationSource = serverSource.slice(reservationStart, reservationEnd);
for (const expected of [
  "getNotificationJob(nextJob.notificationJobId)",
  "isSameSolapiReservation(existingJob, nextJob)",
  "isSameSolapiReservationPending(existingJob, nextJob)",
  "cancelSolapiReservationGroup(existingProviderGroupId)",
  "await upsertNotificationJob(reservingJob)",
  "sendScheduledNotificationJobToSolapi(reservingJob, { forceDryRun })",
  "reservationCanceledAfterTeacherCancel: true",
  "await upsertNotificationJob(updatedJob)",
  'source: "solapi"'
]) {
  assert.ok(reservationSource.includes(expected), `reservation orchestration missing ${expected}`);
}

for (const expected of [
  "export async function reserveNotificationJobProviderRequest",
  'await import("./notificationJobContractApi.js")',
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
