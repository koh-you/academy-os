import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import { createNotificationJobsReconcileController } from "../src/domains/notifications/notificationJobsReconcileController.js";

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

const [contractApiSource, controllerSource, safeApiSource, serverSource] = await Promise.all([
  readSource("src/domains/notifications/notificationJobContractApi.js"),
  readSource("src/domains/notifications/notificationJobsReconcileController.js"),
  readSource("scripts/safe-local-api.mjs"),
  readSource("api/server.js")
]);

const routeStart = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/reconcile-solapi")'
);
const routeEnd = serverSource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs")',
  routeStart
);
assert.ok(routeStart >= 0 && routeEnd > routeStart);
const reconcileRoute = serverSource.slice(routeStart, routeEnd);
for (const expected of [
  "parseVersionedWriteRequest(",
  "await readJsonBody(request)",
  "reconcileSolapiNotificationJobs({",
  "notificationJobIds: payload.notificationJobIds",
  "Number(error.statusCode) || 500",
  "error.field"
]) {
  assert.ok(reconcileRoute.includes(expected), `reconcile route missing ${expected}`);
}

for (const expected of [
  "export async function reconcileNotificationJobsContractRequest",
  'parseVersionedWriteRequest(',
  '"/api/notification-jobs/reconcile-solapi"',
  "canonicalPayload",
  "...requestArgs",
  "parseVersionedWriteResponse("
]) {
  assert.ok(contractApiSource.includes(expected), `reconcile client contract missing ${expected}`);
}
for (const expected of [
  'await import("./notificationJobContractApi.js")',
  "reconcileNotificationJobsContractRequest({",
  "payload,",
  "request,",
  "requestArgs: [",
  "90000",
  "if (!disposed) onResult(result)"
]) {
  assert.ok(controllerSource.includes(expected), `reconcile controller missing ${expected}`);
}

const safeRouteStart = safeApiSource.indexOf('if (pathname === "/api/notification-jobs/reconcile-solapi")');
const safeRouteEnd = safeApiSource.indexOf('if (pathname === "/api/resource-materials")', safeRouteStart);
assert.ok(safeRouteStart >= 0 && safeRouteEnd > safeRouteStart);
const safeReconcileRoute = safeApiSource.slice(safeRouteStart, safeRouteEnd);
for (const expected of [
  'parseVersionedWriteRequest("POST", pathname, payload)',
  "notificationJobIds",
  'status: "safe_fixture"',
  'source: "safe-provider"',
  "updatedCount: 0"
]) {
  assert.ok(safeReconcileRoute.includes(expected), `safe reconcile route missing ${expected}`);
}
for (const forbidden of ["listSolapiGroups", "listSolapiMessages", "upsertNotificationJob("]) {
  assert.equal(safeReconcileRoute.includes(forbidden), false, `safe reconcile route owns ${forbidden}`);
}

const requests = [];
const result = {
  checked: [{ notificationJobId: "reconcile-safe-1", status: "sent" }],
  checkedCount: 1,
  notificationJobs: [{ notificationJobId: "reconcile-safe-1", status: "sent" }],
  records: [],
  source: "solapi",
  updatedCount: 1
};
const applied = [];
const controller = createNotificationJobsReconcileController({
  onResult: (value) => applied.push(value),
  request: async (path, payload, timeout, timeoutMessage) => {
    requests.push({ path, payload, timeout, timeoutMessage });
    return result;
  }
});
const reconciledResult = await controller.reconcile({ notificationJobIds: ["reconcile-safe-1"] });
assert.deepEqual(reconciledResult, result);
assert.notEqual(reconciledResult, result);
assert.equal(requests.length, 1);
assert.equal(requests[0].path, "/api/notification-jobs/reconcile-solapi");
assert.equal(requests[0].timeout, 90000);
assert.deepEqual(requests[0].payload.notificationJobIds, ["reconcile-safe-1"]);
assert.deepEqual(applied, [result]);
assert.equal(applied[0], reconciledResult);

await assert.rejects(
  createNotificationJobsReconcileController({
    onResult: () => {},
    request: async () => ({ checked: [], notificationJobs: [], records: [], source: "solapi" })
  }).reconcile({ notificationJobIds: ["invalid-response"] }),
  (error) => error.field === "checkedCount" && error.statusCode === 400
);

console.log("notification reconcile selector, provider read, and source merge contract passed");
