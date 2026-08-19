import assert from "node:assert/strict";
import crypto from "node:crypto";
import { readFile } from "node:fs/promises";
import { academyReminderRouteSignatures } from "../src/shared/server/academyReminderRouteRegistry.js";
import { appCoreReadRouteSignatures } from "../src/shared/server/appCoreReadRouteRegistry.js";
import { appStateWriteRouteSignatures } from "../src/shared/server/appStateWriteRouteRegistry.js";
import { authLoginRouteSignatures } from "../src/shared/server/authLoginRouteRegistry.js";
import { examAnalysisAiRouteSignatures } from "../src/shared/server/examAnalysisAiRouteRegistry.js";
import { examAnalysisReadRouteSignatures } from "../src/shared/server/examAnalysisReadRouteRegistry.js";
import { examAnalysisRunWriteRouteSignatures } from "../src/shared/server/examAnalysisRunWriteRouteRegistry.js";
import { examAnalysisQuestionCountRouteSignatures } from "../src/shared/server/examAnalysisQuestionCountRouteRegistry.js";
import { examPostConfirmRouteSignatures } from "../src/shared/server/examPostConfirmRouteRegistry.js";
import { examPrepRowRouteSignatures } from "../src/shared/server/examPrepRowRouteRegistry.js";
import { integrationStatusRouteSignatures } from "../src/shared/server/integrationStatusRouteRegistry.js";
import { portalReadRouteSignatures } from "../src/shared/server/portalReadRouteRegistry.js";
import { portalWriteRouteSignatures } from "../src/shared/server/portalWriteRouteRegistry.js";
import { makeupTaskRouteSignatures } from "../src/shared/server/makeupTaskRouteRegistry.js";
import { reportSnapshotRouteSignatures } from "../src/shared/server/reportSnapshotRouteRegistry.js";
import { adminAiRouteSignatures } from "../src/shared/server/adminAiRouteRegistry.js";
import { attendanceRouteSignatures } from "../src/shared/server/attendanceRouteRegistry.js";
import { classTemplateRouteSignatures } from "../src/shared/server/classTemplateRouteRegistry.js";
import { homeworkRouteSignatures } from "../src/shared/server/homeworkRouteRegistry.js";
import { lessonRecordRouteSignatures } from "../src/shared/server/lessonRecordRouteRegistry.js";
import { lessonRouteSignatures } from "../src/shared/server/lessonRouteRegistry.js";
import { notificationJobRouteSignatures } from "../src/shared/server/notificationJobRouteRegistry.js";
import { notificationProviderRouteSignatures } from "../src/shared/server/notificationProviderRouteRegistry.js";
import { schoolEventRouteSignatures } from "../src/shared/server/schoolEventRouteRegistry.js";
import { systemRouteSignatures } from "../src/shared/server/systemRouteRegistry.js";
import { teacherAccountRouteSignatures } from "../src/shared/server/teacherAccountRouteRegistry.js";
import { testSessionReadRouteSignatures } from "../src/shared/server/testSessionReadRouteRegistry.js";
import { testSessionWriteRouteSignatures } from "../src/shared/server/testSessionWriteRouteRegistry.js";

const [academyReminderRouteRegistrySource, adapterSource, appCoreReadRouteRegistrySource, appStateWriteRouteRegistrySource, authLoginRouteRegistrySource, examAnalysisAiRouteRegistrySource, examAnalysisReadRouteRegistrySource, examAnalysisRunWriteRouteRegistrySource, examAnalysisQuestionCountRouteRegistrySource, examPostConfirmRouteRegistrySource, examPrepRowRouteRegistrySource, integrationStatusRouteRegistrySource, makeupTaskRouteRegistrySource, packageJson, portalReadRouteRegistrySource, portalWriteRouteRegistrySource, reportSnapshotRouteRegistrySource, schoolEventRouteRegistrySource, serverSource, sessionGuardSource, systemRouteRegistrySource, teacherAccountRouteRegistrySource, testSessionReadRouteRegistrySource, testSessionWriteRouteRegistrySource, adminAiRouteRegistrySource, attendanceRouteRegistrySource, classTemplateRouteRegistrySource, homeworkRouteRegistrySource, lessonRecordRouteRegistrySource, lessonRouteRegistrySource, notificationJobRouteRegistrySource, notificationProviderRouteRegistrySource] = await Promise.all([
  readFile(new URL("../src/shared/server/academyReminderRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/httpRouteAdapter.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/appCoreReadRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/appStateWriteRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/authLoginRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/examAnalysisAiRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/examAnalysisReadRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/examAnalysisRunWriteRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/examAnalysisQuestionCountRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/examPostConfirmRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/examPrepRowRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/integrationStatusRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/makeupTaskRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../package.json", import.meta.url), "utf8").then(JSON.parse),
  readFile(new URL("../src/shared/server/portalReadRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/portalWriteRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/reportSnapshotRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/schoolEventRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../api/server.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/sessionRouteGuard.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/systemRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/teacherAccountRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/testSessionReadRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/testSessionWriteRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/adminAiRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/attendanceRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/classTemplateRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/homeworkRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/lessonRecordRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/lessonRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/notificationJobRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/notificationProviderRouteRegistry.js", import.meta.url), "utf8")
]);

const routePattern = /if \(request\.method === "(GET|POST|PUT|PATCH|DELETE)" && requestUrl\.pathname === "([^"]+)"\)/g;
const directRouteMatches = [...serverSource.matchAll(routePattern)];
const directRoutes = directRouteMatches.map((match, index) => ({
  method: match[1],
  path: match[2],
  signature: `${match[1]} ${match[2]}`,
  source: serverSource.slice(match.index, directRouteMatches[index + 1]?.index ?? serverSource.indexOf(
    "sendJson(request, response, 404",
    match.index
  ))
}));
const orderedRoutes = [
  ...systemRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: systemRouteRegistrySource
  })),
  ...authLoginRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: authLoginRouteRegistrySource
  })),
  ...portalReadRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: portalReadRouteRegistrySource
  })),
  ...portalWriteRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: portalWriteRouteRegistrySource
  })),
  ...examPostConfirmRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: examPostConfirmRouteRegistrySource
  })),
  ...teacherAccountRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: teacherAccountRouteRegistrySource
  })),
  ...appCoreReadRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: appCoreReadRouteRegistrySource
  })),
  ...appStateWriteRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: appStateWriteRouteRegistrySource
  })),
  ...reportSnapshotRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: reportSnapshotRouteRegistrySource
  })),
  ...testSessionReadRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: testSessionReadRouteRegistrySource
  })),
  ...testSessionWriteRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: testSessionWriteRouteRegistrySource
  })),
  ...integrationStatusRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: integrationStatusRouteRegistrySource
  })),
  ...examAnalysisReadRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: examAnalysisReadRouteRegistrySource
  })),
  ...examAnalysisRunWriteRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: examAnalysisRunWriteRouteRegistrySource
  })),
  ...examAnalysisQuestionCountRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: examAnalysisQuestionCountRouteRegistrySource
  })),
  ...examAnalysisAiRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: examAnalysisAiRouteRegistrySource
  })),
  ...schoolEventRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: schoolEventRouteRegistrySource
  })),
  ...academyReminderRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: academyReminderRouteRegistrySource
  })),
  ...adminAiRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: adminAiRouteRegistrySource
  })),
  ...attendanceRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: attendanceRouteRegistrySource
  })),
  ...classTemplateRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: classTemplateRouteRegistrySource
  })),
  ...examPrepRowRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: examPrepRowRouteRegistrySource
  })),
  ...homeworkRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: homeworkRouteRegistrySource
  })),
  ...lessonRecordRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: lessonRecordRouteRegistrySource
  })),
  ...lessonRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: lessonRouteRegistrySource
  })),
  ...makeupTaskRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: makeupTaskRouteRegistrySource
  })),
  ...notificationJobRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: notificationJobRouteRegistrySource
  })),
  ...notificationProviderRouteSignatures.map(({ method, path }) => ({
    method,
    path,
    signature: `${method} ${path}`,
    source: notificationProviderRouteRegistrySource
  })),
  ...directRoutes
];
const routes = orderedRoutes.map((route, index) => ({ ...route, index }));

assert.equal(routes.length, 121);
assert.equal(directRouteMatches.length, 42);
assert.equal(new Set(routes.map(({ signature }) => signature)).size, 121);
assert.deepEqual(
  Object.fromEntries(["DELETE", "GET", "POST"].map((method) => [
    method,
    routes.filter((route) => route.method === method).length
  ])),
  { DELETE: 13, GET: 31, POST: 77 }
);

const routeOrderHash = crypto
  .createHash("sha256")
  .update(routes.map(({ signature }) => signature).join("\n"))
  .digest("hex");
assert.equal(routeOrderHash, "107685bf6c086a0172af1407783279c2dfdaecdf170dd8c9cb7ac6fc113bd69b");

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
  "calendar-planning": 10,
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
  assert.ok(source.includes("getPortalSession(request)"), `${signature} lost its portal guard`);
  assert.ok(source.indexOf("getPortalSession(request)") < source.indexOf("await readJsonBody") || !source.includes("await readJsonBody"));
}
for (const signature of expectedAuthRoutes.teacher) {
  const source = routeSource(signature);
  assert.ok(source.includes("getTeacherSession(request)"), `${signature} lost its teacher guard`);
  assert.ok(source.indexOf("getTeacherSession(request)") < source.indexOf("await readJsonBody") || !source.includes("await readJsonBody"));
}
for (const signature of expectedAuthRoutes.teacherOrPortal) {
  const source = routeSource(signature);
  assert.ok(source.includes("getTeacherOrPortalSession(request)"));
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

assert.equal((serverSource.match(/function readJsonBody\(/g) ?? []).length, 0);
assert.equal((serverSource.match(/function sendJson\(/g) ?? []).length, 0);
assert.equal((adapterSource.match(/function readJsonBody\(/g) ?? []).length, 1);
assert.equal((adapterSource.match(/function sendJson\(/g) ?? []).length, 1);
assert.ok(serverSource.includes("createHttpRouteAdapter({ allowedOrigins })"));
assert.ok(serverSource.includes("createSessionRouteGuard({"));
assert.ok(serverSource.includes("createSystemRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchSystemRoute({ request, response, requestUrl })"));
assert.ok(serverSource.includes("createAuthLoginRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchAuthLoginRoute({ request, response, requestUrl })"));
assert.ok(authLoginRouteRegistrySource.includes('requestUrl.pathname !== "/api/auth/login"'));
assert.ok(authLoginRouteRegistrySource.includes("authenticateStudentOrParent"));
assert.ok(authLoginRouteRegistrySource.includes("authenticateTeacher"));
assert.ok(serverSource.includes("createPortalReadRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchPortalReadRoute({ request, response, requestUrl })"));
assert.ok(portalReadRouteRegistrySource.includes('requestUrl.pathname !== "/api/portal-data"'));
assert.ok(portalReadRouteRegistrySource.includes("getPortalSession(request)"));
assert.ok(portalReadRouteRegistrySource.includes("getPortalData(portalSession)"));
assert.ok(serverSource.includes("createPortalWriteRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchPortalWriteRoute({ request, response, requestUrl })"));
assert.ok(portalWriteRouteRegistrySource.includes("getPortalSession(request)"));
assert.ok(portalWriteRouteRegistrySource.includes("completePortalHomework"));
assert.ok(portalWriteRouteRegistrySource.includes("mutatePortalQuestion"));
assert.ok(portalWriteRouteRegistrySource.includes("savePortalExamPostSubmission"));
assert.ok(serverSource.includes("createExamPostConfirmRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchExamPostConfirmRoute({ request, response, requestUrl })"));
assert.ok(examPostConfirmRouteRegistrySource.includes("getTeacherSession(request)"));
assert.ok(examPostConfirmRouteRegistrySource.includes("confirmExamPostSubmission(teacherSession, payload)"));
assert.ok(serverSource.includes("createTeacherAccountRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchTeacherAccountRoute({ request, response, requestUrl })"));
assert.ok(teacherAccountRouteRegistrySource.includes('requestUrl.pathname !== "/api/auth/teacher-account"'));
assert.ok(serverSource.includes("createAppCoreReadRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchAppCoreReadRoute({ request, response, requestUrl })"));
assert.ok(appCoreReadRouteRegistrySource.includes('requestUrl.pathname === "/api/app-state"'));
assert.ok(appCoreReadRouteRegistrySource.includes('requestUrl.pathname === "/api/special-lecture-guides"'));
assert.ok(appCoreReadRouteRegistrySource.includes('requestUrl.searchParams.get("includeRows") === "true"'));
assert.ok(serverSource.includes("createAppStateWriteRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchAppStateWriteRoute({ request, response, requestUrl })"));
assert.ok(appStateWriteRouteRegistrySource.includes("parseVersionedWriteRequest("));
assert.ok(appStateWriteRouteRegistrySource.includes("upsertAppState(safeStates, { expectedUpdatedAt })"));
assert.ok(serverSource.includes("createReportSnapshotRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchReportSnapshotRoute({ request, response, requestUrl })"));
assert.ok(reportSnapshotRouteRegistrySource.includes("getTeacherSession(request)"));
assert.ok(reportSnapshotRouteRegistrySource.includes("saveReportSnapshotWithVerification({"));
assert.ok(serverSource.includes("createTestSessionReadRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchTestSessionReadRoute({ request, response, requestUrl })"));
assert.ok(testSessionReadRouteRegistrySource.includes('requestUrl.pathname === "/api/test-sessions"'));
assert.ok(testSessionReadRouteRegistrySource.includes('requestUrl.pathname === "/api/test-attempts"'));
assert.ok(serverSource.includes("createTestSessionWriteRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchTestSessionWriteRoute({ request, response, requestUrl })"));
assert.ok(testSessionWriteRouteRegistrySource.includes("upsertTestSessionWithAttempts("));
assert.ok(testSessionWriteRouteRegistrySource.includes("deleteTestSession(testSessionId)"));
assert.ok(serverSource.includes("createIntegrationStatusRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchIntegrationStatusRoute({ request, response, requestUrl })"));
assert.ok(integrationStatusRouteRegistrySource.includes("getAiStatus()"));
assert.ok(integrationStatusRouteRegistrySource.includes("getNotificationStatus()"));
assert.ok(serverSource.includes("createExamAnalysisReadRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchExamAnalysisReadRoute({ request, response, requestUrl })"));
assert.ok(examAnalysisReadRouteRegistrySource.includes('requestUrl.pathname === "/api/exam-analysis-runs"'));
assert.ok(examAnalysisReadRouteRegistrySource.includes('requestUrl.pathname === "/api/exam-analysis-ssen-types"'));
assert.ok(examAnalysisReadRouteRegistrySource.includes("listExamAnalysisRuns({"));
assert.ok(examAnalysisReadRouteRegistrySource.includes("getSsenTypeCatalogForExamAnalysis({"));
assert.ok(serverSource.includes("createExamAnalysisRunWriteRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchExamAnalysisRunWriteRoute({ request, response, requestUrl })"));
assert.ok(examAnalysisRunWriteRouteRegistrySource.includes('requestUrl.pathname !== "/api/exam-analysis-runs"'));
assert.ok(examAnalysisRunWriteRouteRegistrySource.includes("parseExamAnalysisRunWriteRequest(await readJsonBody(request))"));
assert.ok(examAnalysisRunWriteRouteRegistrySource.includes("upsertExamAnalysisRun(payload.analysisRun)"));
assert.ok(serverSource.includes("createExamAnalysisQuestionCountRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchExamAnalysisQuestionCountRoute({ request, response, requestUrl })"));
assert.ok(examAnalysisQuestionCountRouteRegistrySource.includes('requestUrl.pathname !== "/api/exam-analysis-runs/confirm-question-count"'));
assert.ok(examAnalysisQuestionCountRouteRegistrySource.includes("parseExamAnalysisQuestionCountConfirmRequest(await readJsonBody(request))"));
assert.ok(examAnalysisQuestionCountRouteRegistrySource.includes("confirmExamAnalysisQuestionCount(payload)"));
assert.ok(teacherAccountRouteRegistrySource.includes("saveTeacherAccount"));
assert.ok(sessionGuardSource.includes("function verifySignedSessionToken"));
assert.ok(sessionGuardSource.includes("function getTeacherOrPortalSession"));
assert.ok(systemRouteRegistrySource.includes('"GET /health"'));
assert.ok(systemRouteRegistrySource.includes('"POST /api/client-errors"'));
assert.ok(systemRouteRegistrySource.includes('"GET /api/core/status"'));
assert.ok(systemRouteRegistrySource.includes("limitBytes: 64 * 1024"));
assert.equal((serverSource.match(/request\.headers\.authorization/g) ?? []).length, 0);
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
assert.ok(packageJson.scripts["test:production"].includes("npm run test:session-route-guard"));
assert.ok(packageJson.scripts["test:production"].includes("npm run test:system-route-registry"));
assert.ok(packageJson.scripts["test:production"].includes("npm run test:auth-login-route-registry"));
assert.ok(packageJson.scripts["test:production"].includes("npm run test:teacher-account-route-registry"));
assert.ok(packageJson.scripts["test:production"].includes("npm run test:portal-read-route-registry"));
assert.ok(packageJson.scripts["test:production"].includes("npm run test:portal-write-route-registry"));
assert.ok(packageJson.scripts["test:production"].includes("npm run test:exam-post-confirm-route-registry"));
assert.ok(packageJson.scripts["test:production"].includes("npm run test:app-core-read-route-registry"));
assert.ok(packageJson.scripts["test:production"].includes("npm run test:app-state-write-route-registry"));
assert.ok(packageJson.scripts["test:production"].includes("npm run test:report-snapshot-route-registry"));
assert.ok(packageJson.scripts["test:production"].includes("npm run test:test-session-read-route-registry"));
assert.ok(packageJson.scripts["test:production"].includes("npm run test:test-session-write-route-registry"));
assert.ok(packageJson.scripts["test:production"].includes("npm run test:exam-analysis-read-route-registry"));
assert.ok(packageJson.scripts["test:production"].includes("npm run test:exam-analysis-run-write-route-registry"));
assert.ok(packageJson.scripts["test:production"].includes("npm run test:exam-analysis-question-count-route-registry"));

console.log(
  "fourth-pass server route baseline passed · 121 routes · GET 31/POST 77/DELETE 13 · session/credential 15 + dispatch 2"
);
