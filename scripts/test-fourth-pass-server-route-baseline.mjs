import assert from "node:assert/strict";
import crypto from "node:crypto";
import { readFile } from "node:fs/promises";

const [packageJson, serverSource] = await Promise.all([
  readFile(new URL("../package.json", import.meta.url), "utf8").then(JSON.parse),
  readFile(new URL("../api/server.js", import.meta.url), "utf8")
]);

const routePattern = /if \(request\.method === "(GET|POST|PUT|PATCH|DELETE)" && requestUrl\.pathname === "([^"]+)"\)/g;
const routeMatches = [...serverSource.matchAll(routePattern)];
const routes = routeMatches.map((match, index) => ({
  index,
  method: match[1],
  path: match[2],
  signature: `${match[1]} ${match[2]}`,
  source: serverSource.slice(match.index, routeMatches[index + 1]?.index ?? serverSource.indexOf(
    "sendJson(request, response, 404",
    match.index
  ))
}));

assert.equal(routes.length, 120);
assert.equal(new Set(routes.map(({ signature }) => signature)).size, 120);
assert.deepEqual(
  Object.fromEntries(["DELETE", "GET", "POST"].map((method) => [
    method,
    routes.filter((route) => route.method === method).length
  ])),
  { DELETE: 13, GET: 31, POST: 76 }
);

const routeOrderHash = crypto
  .createHash("sha256")
  .update(routes.map(({ signature }) => signature).join("\n"))
  .digest("hex");
assert.equal(routeOrderHash, "118af79fe1f39d177d9f8cdec227392e06c76483a043332cde44227507b99de5");

function getRouteFamily(path) {
  if (
    path === "/health" ||
    path === "/api/client-errors" ||
    path === "/api/core/status" ||
    path.startsWith("/api/auth/") ||
    path.startsWith("/api/portal-") ||
    path === "/api/exam-post-submissions/confirm"
  ) return "system-auth-portal";
  if (
    path === "/api/app-state" ||
    path === "/api/special-lecture-guides" ||
    path === "/api/report-snapshots" ||
    path.startsWith("/api/test-") ||
    path === "/api/integrations/status"
  ) return "app-core";
  if (path.startsWith("/api/exam-analysis") || path.startsWith("/api/exam-post-files")) {
    return "exam-analysis";
  }
  if (
    path.startsWith("/api/students") ||
    path.startsWith("/api/student-intake") ||
    path.startsWith("/api/intake/") ||
    path.startsWith("/api/special-lecture-applications") ||
    path.startsWith("/api/special-lecture-enrollments")
  ) return "student-intake-special";
  if (
    path.startsWith("/api/classes") ||
    path.startsWith("/api/lessons") ||
    path.startsWith("/api/lesson-records") ||
    path.startsWith("/api/lesson-journal") ||
    path.startsWith("/api/homeworks") ||
    path.startsWith("/api/attendance") ||
    path.startsWith("/api/academy-reminders") ||
    path.startsWith("/api/makeup-tasks") ||
    path.startsWith("/api/supplement-schedules") ||
    path.startsWith("/api/class-rosters")
  ) return "lesson-attendance-supplement";
  if (
    path.startsWith("/api/exam-prep") ||
    path.startsWith("/api/school-calendar") ||
    path.startsWith("/api/school-events")
  ) return "calendar-planning";
  if (path.startsWith("/api/resource-material")) return "resource";
  if (
    path.startsWith("/api/notification") ||
    path.startsWith("/api/notifications") ||
    path.startsWith("/api/solapi") ||
    path.startsWith("/api/admin/seed")
  ) return "notification-provider";
  if (path.startsWith("/api/ai/")) return "ai";
  return "unclassified";
}

const familyCounts = Object.fromEntries(
  [...new Set(routes.map(({ path }) => getRouteFamily(path)))].sort().map((family) => [
    family,
    routes.filter(({ path }) => getRouteFamily(path) === family).length
  ])
);
assert.deepEqual(familyCounts, {
  ai: 1,
  "app-core": 9,
  "calendar-planning": 9,
  "exam-analysis": 20,
  "lesson-attendance-supplement": 29,
  "notification-provider": 20,
  resource: 6,
  "student-intake-special": 15,
  "system-auth-portal": 11
});

const expectedAuthRoutes = {
  credential: ["POST /api/auth/login", "POST /api/auth/teacher-account"],
  dispatchConditional: ["POST /api/notification-jobs/dispatch-due"],
  dispatchRequired: ["POST /api/notifications/slack-today-schedule/reserve"],
  portal: [
    "GET /api/portal-data",
    "POST /api/exam-post-files",
    "POST /api/exam-post-files/cleanup",
    "POST /api/portal-exam-post-submissions",
    "POST /api/portal-homeworks/complete",
    "POST /api/portal-questions",
    "POST /api/portal-state"
  ],
  teacher: [
    "DELETE /api/resource-material-files",
    "POST /api/exam-post-submissions/confirm",
    "POST /api/report-snapshots",
    "POST /api/resource-material-files"
  ],
  teacherOrPortal: [
    "GET /api/exam-post-files/open",
    "GET /api/resource-material-files/open"
  ]
};

function routeSource(signature) {
  const route = routes.find((candidate) => candidate.signature === signature);
  assert.ok(route, `route is missing: ${signature}`);
  return route.source;
}

for (const signature of expectedAuthRoutes.portal) {
  const source = routeSource(signature);
  assert.ok(source.includes("verifyPortalSessionToken"), `${signature} lost its portal guard`);
  assert.ok(source.indexOf("verifyPortalSessionToken") < source.indexOf("await readJsonBody") || !source.includes("await readJsonBody"));
}
for (const signature of expectedAuthRoutes.teacher) {
  const source = routeSource(signature);
  assert.ok(source.includes("verifyTeacherSessionToken"), `${signature} lost its teacher guard`);
  assert.ok(source.indexOf("verifyTeacherSessionToken") < source.indexOf("await readJsonBody") || !source.includes("await readJsonBody"));
}
for (const signature of expectedAuthRoutes.teacherOrPortal) {
  const source = routeSource(signature);
  assert.ok(source.includes("verifyTeacherSessionToken"));
  assert.ok(source.includes("verifyPortalSessionToken"));
}
for (const signature of expectedAuthRoutes.dispatchConditional) {
  const source = routeSource(signature);
  assert.ok(source.includes("getDispatchAuthState"));
  assert.ok(source.includes("hasSensitiveOverride"));
}
for (const signature of expectedAuthRoutes.dispatchRequired) {
  const source = routeSource(signature);
  assert.ok(source.includes("getDispatchAuthState"));
  assert.ok(source.includes("!dispatchAuth.configured || !dispatchAuth.ok"));
}
for (const signature of expectedAuthRoutes.credential) {
  assert.ok(routeSource(signature).includes("authenticate"));
}

assert.equal((serverSource.match(/function readJsonBody\(/g) ?? []).length, 1);
assert.equal((serverSource.match(/function sendJson\(/g) ?? []).length, 1);
assert.equal((serverSource.match(/const server = http\.createServer/g) ?? []).length, 1);
assert.equal((serverSource.match(/server\.listen\(/g) ?? []).length, 1);
assert.ok(serverSource.includes('from "./routes/coreData.js"'));
assert.ok(serverSource.includes('from "./routes/examAnalysisPipeline.js"'));
assert.ok(serverSource.includes('from "./routes/notifications.js"'));
assert.ok(serverSource.includes('from "./routes/commentPolish.js"'));

for (const providerOwner of [
  "reserveNotificationJobInSolapi",
  "reconcileSolapiNotificationJobs",
  "dispatchDueNotificationJobs",
  "checkNotificationReadiness",
  "sendTodayTeacherScheduleSlack",
  "reserveTodayTeacherScheduleSlack"
]) {
  assert.ok(serverSource.includes(`function ${providerOwner}`), `server provider owner moved without audit: ${providerOwner}`);
}

assert.equal(packageJson.scripts["test:fourth-pass-server-route-baseline"], "node scripts/test-fourth-pass-server-route-baseline.mjs");
assert.ok(packageJson.scripts["test:production"].includes("npm run test:fourth-pass-server-route-baseline"));

console.log(
  "fourth-pass server route baseline passed · 120 routes · GET 31/POST 76/DELETE 13 · session/credential 15 + dispatch 2"
);
