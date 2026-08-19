import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import { reserveNotificationJobsContractRequest } from "../src/domains/notifications/notificationJobContractApi.js";

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

const [appSource, contractApiSource, safeApiSource, serverSource, notificationJobRouteRegistrySource] = await Promise.all([
  readSource("src/app/App.jsx"),
  readSource("src/domains/notifications/notificationJobContractApi.js"),
  readSource("scripts/safe-local-api.mjs"),
  readSource("api/server.js"),
  readSource("src/shared/server/notificationJobRouteRegistry.js")
]);

const routeStart = notificationJobRouteRegistrySource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/reserve-bulk")'
);
const routeEnd = notificationJobRouteRegistrySource.indexOf(
  "return Object.freeze({ dispatch, routeSignatures: notificationJobRouteSignatures })",
  routeStart
);
assert.ok(routeStart >= 0 && routeEnd > routeStart);
const routeSource = notificationJobRouteRegistrySource.slice(routeStart, routeEnd);
for (const expected of [
  "parseVersionedWriteRequest(",
  "await readJsonBody(request)",
  "reserveNotificationJobsInSolapi(payload.notificationJobs",
  "concurrency: payload.concurrency || 4",
  "forceDryRun: Boolean(payload.forceDryRun)",
  'reason: payload.reason || "수업일지 일괄 예약"',
  "Number(error.statusCode) || 500",
  "error.field"
]) {
  assert.ok(routeSource.includes(expected), `bulk reserve route missing ${expected}`);
}
assert.equal(routeSource.includes("payload.notificationJobs ?? payload.jobs"), false);

for (const expected of [
  "export async function reserveNotificationJobsContractRequest",
  'parseVersionedWriteRequest("POST", "/api/notification-jobs/reserve-bulk"',
  'request("/api/notification-jobs/reserve-bulk", payload, ...requestArgs)',
  'parseVersionedWriteResponse("POST", "/api/notification-jobs/reserve-bulk", result)'
]) {
  assert.ok(contractApiSource.includes(expected), `bulk reserve client contract missing ${expected}`);
}
for (const expected of [
  'await import("../domains/notifications/notificationJobContractApi.js")',
  "reserveNotificationJobsContractRequest({",
  "notificationJobs: notificationJobsToReserve",
  "request: postJson",
  "createFailedNotificationJob({",
  "mergeNotificationJobsIntoState(reservedJobs)"
]) {
  assert.ok(appSource.includes(expected), `App bulk provider owner missing ${expected}`);
}
assert.equal(appSource.includes('postJson("/api/notification-jobs/reserve-bulk"'), false);

const requests = [];
const notificationJobs = [
  { notificationJobId: "bulk-safe-1", notificationType: "notice_parent", status: "scheduled" },
  { notificationJobId: "bulk-safe-2", notificationType: "notice_student", status: "scheduled" }
];
const response = {
  failedCount: 0,
  notificationJobs: notificationJobs.map((job) => ({ ...job, provider: "solapi" })),
  reservedCount: 2,
  results: notificationJobs.map((job) => ({ notificationJob: job, reserved: true, source: "solapi" })),
  reusedCount: 0
};
const result = await reserveNotificationJobsContractRequest({
  notificationJobs,
  reason: " bulk contract ",
  request: async (path, payload) => {
    requests.push({ path, payload });
    return response;
  }
});
assert.notEqual(result, response);
assert.equal(requests.length, 1);
assert.equal(requests[0].path, "/api/notification-jobs/reserve-bulk");
assert.deepEqual(requests[0].payload, {
  concurrency: 4,
  notificationJobs,
  reason: "bulk contract"
});
assert.deepEqual(result, response);

await assert.rejects(
  reserveNotificationJobsContractRequest({
    notificationJobs,
    request: async () => ({
      failedCount: 0,
      notificationJobs: [],
      reservedCount: 0,
      results: []
    })
  }),
  (error) => error.field === "reusedCount" && error.statusCode === 400
);

const safeRouteStart = safeApiSource.indexOf('if (pathname === "/api/notification-jobs/reserve-bulk")');
const safeRouteEnd = safeApiSource.indexOf('if (pathname === "/api/resource-materials")', safeRouteStart);
assert.ok(safeRouteStart >= 0 && safeRouteEnd > safeRouteStart);
const safeRouteSource = safeApiSource.slice(safeRouteStart, safeRouteEnd);
for (const expected of [
  'parseVersionedWriteRequest("POST", pathname, payload)',
  "parsedPayload.notificationJobs.filter",
  'provider: "academy-os"',
  'status: "dry_run"',
  "reservedCount: 0",
  "reusedCount: 0"
]) {
  assert.ok(safeRouteSource.includes(expected), `safe bulk reserve route missing ${expected}`);
}
for (const forbidden of ["sendScheduledNotificationJobToSolapi", "reserveNotificationJobsInSolapi", "cancelSolapiReservationGroup"]) {
  assert.equal(safeRouteSource.includes(forbidden), false, `safe bulk reserve owns ${forbidden}`);
}

console.log("notification bulk reserve payload, partial result, and safe provider contract passed");
