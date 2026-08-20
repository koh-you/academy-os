import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import http from "node:http";
import { promisify } from "node:util";
import { readFile } from "node:fs/promises";

import {
  parseVersionedWriteRequest,
  parseVersionedWriteResponse
} from "../src/shared/contracts/versionedWriteRouteContracts.js";
import { createNotificationDispatchCandidateQuery } from "../api/lib/supabaseRest.js";

const execFileAsync = promisify(execFile);
const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const [dispatchScriptSource, safeApiSource, serverSource, notificationJobRouteRegistrySource] = await Promise.all([
  readSource("scripts/dispatch-due-notifications.cjs"),
  readSource("scripts/safe-local-api.mjs"),
  readSource("api/server.js"),
  readSource("src/shared/server/notificationJobRouteRegistry.js")
]);

const routeStart = notificationJobRouteRegistrySource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/dispatch-due")'
);
const routeEnd = notificationJobRouteRegistrySource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/readiness-check")',
  routeStart
);
assert.ok(routeStart >= 0 && routeEnd > routeStart);
const routeSource = notificationJobRouteRegistrySource.slice(routeStart, routeEnd);
for (const expected of [
  "const rawPayload = await readJsonBody(request)",
  "getDispatchAuthState(request, rawPayload)",
  "rawPayload.now || rawPayload.dispatchToken || rawPayload.forceDryRun",
  "Invalid notification dispatch token.",
  "parseVersionedWriteRequest(request.method, requestUrl.pathname, rawPayload)",
  "allowManualStatuses: dispatchAuth.ok",
  "forceDryRun: dispatchAuth.ok ? payload.forceDryRun : false",
  "limit: payload.limit",
  "dispatchAuth.ok && payload.now ? payload.now : new Date().toISOString()",
  "Number(error.statusCode) || 500",
  "error.field"
]) {
  assert.ok(routeSource.includes(expected), `dispatch route missing ${expected}`);
}
assert.ok(
  routeSource.indexOf("if (dispatchAuth.configured && hasSensitiveOverride && !dispatchAuth.ok)") <
    routeSource.indexOf("parseVersionedWriteRequest(request.method, requestUrl.pathname, rawPayload)"),
  "dispatch auth must reject sensitive overrides before payload normalization"
);

// MV-2d moved the dispatch orchestration body out of api/server.js into
// notificationSolapiDispatchService.js (behavior verified by
// test-notification-solapi-dispatch-service.mjs, not by source-slicing here).
// server.js keeps a thin hoisted-function wrapper so the route registry wiring
// and runInternalNotificationDispatch's 60s loop (both evaluated before the
// service is constructed) keep working.
assert.ok(serverSource.includes("function dispatchDueNotificationJobs(options)"));
assert.ok(serverSource.includes('from "../src/shared/server/notificationSolapiDispatchService.js"'));
assert.ok(serverSource.includes("createNotificationSolapiDispatchService({"));
assert.ok(serverSource.includes("setInterval(() => runInternalNotificationDispatch(\"interval\"), 60 * 1000)"));

const scheduledQuery = new URLSearchParams(createNotificationDispatchCandidateQuery({
  now: "2026-08-10T06:00:00.000Z"
}));
assert.equal(scheduledQuery.get("select"), "*");
assert.equal(scheduledQuery.get("status"), "in.(scheduled)");
assert.equal(
  scheduledQuery.get("or"),
  "(scheduled_at.is.null,scheduled_at.lte.2026-08-10T06:00:00.000Z)"
);
assert.equal(scheduledQuery.get("order"), "created_at.desc");
assert.equal(scheduledQuery.get("limit"), "1000");

const authenticatedQuery = new URLSearchParams(createNotificationDispatchCandidateQuery({
  allowManualStatuses: true,
  limit: 50,
  now: new Date("2026-08-10T06:00:00.000Z")
}));
assert.equal(authenticatedQuery.get("status"), "in.(scheduled,queued,pending_send)");
assert.equal(authenticatedQuery.get("limit"), "50");
assert.throws(
  () => createNotificationDispatchCandidateQuery({ now: "not-a-date" }),
  /now must be a valid date value/
);

assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/notification-jobs/dispatch-due", {}),
  { forceDryRun: false, limit: 20 }
);
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/notification-jobs/dispatch-due", {
    dispatchToken: " safe-token ",
    forceDryRun: true,
    limit: 7,
    now: " 2099-08-05T12:00:00.000Z "
  }),
  {
    dispatchToken: "safe-token",
    forceDryRun: true,
    limit: 7,
    now: "2099-08-05T12:00:00.000Z"
  }
);
assert.throws(
  () => parseVersionedWriteRequest("POST", "/api/notification-jobs/dispatch-due", { limit: "7" }),
  (error) => error.field === "limit" && error.statusCode === 400
);
assert.throws(
  () => parseVersionedWriteResponse("POST", "/api/notification-jobs/dispatch-due", {
    automaticSolapiReconcile: {},
    dryRun: true,
    processed: [],
    source: "supabase"
  }),
  (error) => error.field === "processedCount" && error.statusCode === 400
);

for (const expected of [
  'await import("../src/shared/contracts/versionedWriteRouteContracts.js")',
  'parseVersionedWriteRequest("POST", "/api/notification-jobs/dispatch-due"',
  "body: JSON.stringify(payload)",
  'parseVersionedWriteResponse(',
  '"/api/notification-jobs/dispatch-due"',
  "processedCount: parsedResult.processedCount"
]) {
  assert.ok(dispatchScriptSource.includes(expected), `dispatch script missing ${expected}`);
}

let capturedRequest = null;
const mockServer = http.createServer((request, response) => {
  const chunks = [];
  request.on("data", (chunk) => chunks.push(chunk));
  request.on("end", () => {
    capturedRequest = {
      body: JSON.parse(Buffer.concat(chunks).toString("utf8")),
      dispatchToken: request.headers["x-dispatch-token"],
      method: request.method,
      url: request.url
    };
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({
      automaticSolapiReconcile: { checkedCount: 2, updatedCount: 1 },
      dryRun: true,
      ok: true,
      processed: [{ notificationJobId: "safe-dispatch-job", status: "dry_run" }],
      processedCount: 1,
      source: "safe-mock"
    }));
  });
});
await new Promise((resolve) => mockServer.listen(0, "127.0.0.1", resolve));
try {
  const address = mockServer.address();
  const { stdout } = await execFileAsync(process.execPath, ["scripts/dispatch-due-notifications.cjs"], {
    cwd: new URL("..", import.meta.url),
    env: {
      ...process.env,
      ACADEMY_API_URL: `http://127.0.0.1:${address.port}`,
      ALIMTALK_DRY_RUN: "true",
      NOTIFICATION_DISPATCH_LIMIT: "7",
      NOTIFICATION_DISPATCH_TOKEN: "safe-token"
    }
  });
  assert.deepEqual(capturedRequest, {
    body: { forceDryRun: true, limit: 7 },
    dispatchToken: "safe-token",
    method: "POST",
    url: "/api/notification-jobs/dispatch-due"
  });
  assert.deepEqual(JSON.parse(stdout), {
    automaticSolapiCheckedCount: 2,
    automaticSolapiUpdatedCount: 1,
    ok: true,
    processedCount: 1
  });
} finally {
  await new Promise((resolve, reject) => mockServer.close((error) => error ? reject(error) : resolve()));
}

const safeRouteStart = safeApiSource.indexOf('if (pathname === "/api/notification-jobs/dispatch-due")');
const safeRouteEnd = safeApiSource.indexOf('if (pathname === "/api/resource-materials")', safeRouteStart);
assert.ok(safeRouteStart >= 0 && safeRouteEnd > safeRouteStart);
const safeRouteSource = safeApiSource.slice(safeRouteStart, safeRouteEnd);
for (const expected of [
  'parseVersionedWriteRequest("POST", pathname, payload)',
  "parsedPayload.dispatchToken || parsedPayload.forceDryRun || parsedPayload.now",
  "안전 fixture에서는 알림 자동 처리 override를 사용할 수 없습니다.",
  "automaticSolapiReconcile:",
  'source: "safe-provider"',
  "processed: []",
  "processedCount: 0"
]) {
  assert.ok(safeRouteSource.includes(expected), `safe dispatch route missing ${expected}`);
}
for (const forbidden of [
  "sendNotificationJob",
  "sendScheduledNotificationJobToSolapi",
  "dispatchDueNotificationJobs",
  "reconcileDueSolapiNotificationJobs",
  "upsertNotificationJob"
]) {
  assert.equal(safeRouteSource.includes(forbidden), false, `safe dispatch route owns ${forbidden}`);
}

console.log("notification dispatch auth, payload, response, cron client, and no-provider safe contract passed");
