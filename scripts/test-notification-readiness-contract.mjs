import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import {
  parseVersionedWriteRequest,
  parseVersionedWriteResponse
} from "../src/shared/contracts/versionedWriteRouteContracts.js";

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const [safeApiSource, serverSource, notificationJobRouteRegistrySource] = await Promise.all([
  readSource("scripts/safe-local-api.mjs"),
  readSource("api/server.js"),
  readSource("src/shared/server/notificationJobRouteRegistry.js")
]);

const routeStart = notificationJobRouteRegistrySource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/readiness-check")'
);
const routeEnd = notificationJobRouteRegistrySource.indexOf(
  'if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/reserve-bulk")',
  routeStart
);
assert.ok(routeStart >= 0 && routeEnd > routeStart);
const routeSource = notificationJobRouteRegistrySource.slice(routeStart, routeEnd);
for (const expected of [
  "parseVersionedWriteRequest(",
  "await readJsonBody(request)",
  "checkNotificationReadiness({",
  "notifySlack: payload.notifySlack",
  "now: payload.now",
  "windowMinutes: payload.windowMinutes",
  "Number(error.statusCode) || 500",
  "error.field"
]) {
  assert.ok(routeSource.includes(expected), `readiness route missing ${expected}`);
}

const readinessStart = serverSource.indexOf("async function checkNotificationReadiness(");
const readinessEnd = serverSource.indexOf("async function sendNotificationJob(", readinessStart);
assert.ok(readinessStart >= 0 && readinessEnd > readinessStart);
const readinessSource = serverSource.slice(readinessStart, readinessEnd);
for (const expected of [
  "await listNotificationJobs()",
  "readinessCheckStatuses.has(job.status)",
  "getReadinessMissingFields(job)",
  "if (notifySlack && issues.length > 0)",
  "sendSlackDailyScheduleSummary({",
  "checkedCount: dueSoonJobs.length",
  "issueCount: issues.length",
  "source: listed.source"
]) {
  assert.ok(readinessSource.includes(expected), `readiness owner missing ${expected}`);
}

assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/notification-jobs/readiness-check", {}),
  { notifySlack: false, windowMinutes: 15 }
);
assert.throws(
  () => parseVersionedWriteRequest("POST", "/api/notification-jobs/readiness-check", {
    notifySlack: "false"
  }),
  (error) => error.field === "notifySlack" && error.statusCode === 400
);
assert.throws(
  () => parseVersionedWriteResponse("POST", "/api/notification-jobs/readiness-check", {
    checkedCount: 0,
    issues: [],
    source: "supabase",
    windowMinutes: 15
  }),
  (error) => error.field === "issueCount" && error.statusCode === 400
);

const safeRouteStart = safeApiSource.indexOf('if (pathname === "/api/notification-jobs/readiness-check")');
const safeRouteEnd = safeApiSource.indexOf('if (pathname === "/api/resource-materials")', safeRouteStart);
assert.ok(safeRouteStart >= 0 && safeRouteEnd > safeRouteStart);
const safeRouteSource = safeApiSource.slice(safeRouteStart, safeRouteEnd);
for (const expected of [
  'parseVersionedWriteRequest("POST", pathname, payload)',
  "if (parsedPayload.notifySlack)",
  "안전 fixture에서는 Slack 알림을 보낼 수 없습니다.",
  '!["queued", "pending_send", "scheduled"].includes(job.status)',
  '["notice_parent", "notice_student"].includes(job.notificationType)',
  '!["queued", "pending_send", "scheduled"].includes(job.status)',
  '?["공지 본문"]',
  "checkedCount: dueSoonJobs.length",
  "slack: null"
]) {
  assert.ok(safeRouteSource.replace(/\s+/g, "").includes(expected.replace(/\s+/g, "")), `safe readiness route missing ${expected}`);
}
for (const forbidden of ["sendSlackDailyScheduleSummary", "sendScheduledNotificationJobToSolapi", "dispatchDueNotificationJobs"]) {
  assert.equal(safeRouteSource.includes(forbidden), false, `safe readiness route owns ${forbidden}`);
}

console.log("notification readiness payload, source read, and optional Slack boundary contract passed");
