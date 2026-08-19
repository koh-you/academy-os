import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { academyReminderRouteSignatures } from "../src/shared/server/academyReminderRouteRegistry.js";
import { appCoreReadRouteSignatures } from "../src/shared/server/appCoreReadRouteRegistry.js";
import { appStateWriteRouteSignatures } from "../src/shared/server/appStateWriteRouteRegistry.js";
import { authLoginRouteSignatures } from "../src/shared/server/authLoginRouteRegistry.js";
import { examAnalysisAiRouteSignatures } from "../src/shared/server/examAnalysisAiRouteRegistry.js";
import { examAnalysisQuestionCountRouteSignatures } from "../src/shared/server/examAnalysisQuestionCountRouteRegistry.js";
import { examAnalysisReadRouteSignatures } from "../src/shared/server/examAnalysisReadRouteRegistry.js";
import { examAnalysisRunWriteRouteSignatures } from "../src/shared/server/examAnalysisRunWriteRouteRegistry.js";
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
import { schoolEventRouteSignatures } from "../src/shared/server/schoolEventRouteRegistry.js";
import { systemRouteSignatures } from "../src/shared/server/systemRouteRegistry.js";
import { teacherAccountRouteSignatures } from "../src/shared/server/teacherAccountRouteRegistry.js";
import { testSessionReadRouteSignatures } from "../src/shared/server/testSessionReadRouteRegistry.js";
import { testSessionWriteRouteSignatures } from "../src/shared/server/testSessionWriteRouteRegistry.js";

const [packageJson, serverSource] = await Promise.all([
  readFile(new URL("../package.json", import.meta.url), "utf8").then(JSON.parse),
  readFile(new URL("../api/server.js", import.meta.url), "utf8")
]);

const signatureOf = ({ method, path }) => `${method} ${path}`;
const registrySignatures = [
  ...systemRouteSignatures,
  ...authLoginRouteSignatures,
  ...portalReadRouteSignatures,
  ...portalWriteRouteSignatures,
  ...examPostConfirmRouteSignatures,
  ...teacherAccountRouteSignatures,
  ...appCoreReadRouteSignatures,
  ...appStateWriteRouteSignatures,
  ...reportSnapshotRouteSignatures,
  ...testSessionReadRouteSignatures,
  ...testSessionWriteRouteSignatures,
  ...integrationStatusRouteSignatures,
  ...examAnalysisReadRouteSignatures,
  ...examAnalysisRunWriteRouteSignatures,
  ...examAnalysisQuestionCountRouteSignatures,
  ...examAnalysisAiRouteSignatures,
  ...schoolEventRouteSignatures,
  ...academyReminderRouteSignatures,
  ...adminAiRouteSignatures,
  ...attendanceRouteSignatures,
  ...classTemplateRouteSignatures,
  ...examPrepRowRouteSignatures,
  ...homeworkRouteSignatures,
  ...lessonRecordRouteSignatures,
  ...lessonRouteSignatures,
  ...makeupTaskRouteSignatures
].map(signatureOf).sort();

assert.equal(registrySignatures.length, 63);
assert.equal(new Set(registrySignatures).size, 63);
assert.deepEqual(registrySignatures, [
  "DELETE /api/academy-reminders",
  "DELETE /api/exam-prep-rows",
  "DELETE /api/lessons",
  "DELETE /api/makeup-tasks",
  "DELETE /api/school-events",
  "DELETE /api/test-sessions",
  "GET /api/academy-reminders",
  "GET /api/app-state",
  "GET /api/classes",
  "GET /api/core/status",
  "GET /api/exam-analysis-runs",
  "GET /api/exam-analysis-ssen-types",
  "GET /api/exam-prep-rows",
  "GET /api/homeworks",
  "GET /api/integrations/status",
  "GET /api/lesson-records",
  "GET /api/lessons",
  "GET /api/lessons/closure-preflight",
  "GET /api/makeup-tasks",
  "GET /api/portal-data",
  "GET /api/school-events",
  "GET /api/special-lecture-guides",
  "GET /api/test-attempts",
  "GET /api/test-sessions",
  "GET /health",
  "POST /api/academy-reminders",
  "POST /api/admin/seed-core-data",
  "POST /api/ai/comment-polish",
  "POST /api/app-state",
  "POST /api/attendance/check",
  "POST /api/attendance/preview",
  "POST /api/auth/login",
  "POST /api/auth/teacher-account",
  "POST /api/client-errors",
  "POST /api/exam-analysis-runs",
  "POST /api/exam-analysis-runs/confirm-question-count",
  "POST /api/exam-analysis-runs/detect-question-boundaries",
  "POST /api/exam-analysis-runs/fill-question-rows",
  "POST /api/exam-analysis-runs/generate-output-draft",
  "POST /api/exam-analysis-runs/refine-question-rows",
  "POST /api/exam-analysis-source-files/vision-check",
  "POST /api/exam-post-submissions/confirm",
  "POST /api/exam-prep-rows",
  "POST /api/exam-prep-rows/bulk",
  "POST /api/homeworks",
  "POST /api/homeworks/bulk",
  "POST /api/lesson-records",
  "POST /api/lesson-records/bulk",
  "POST /api/lesson-records/notification-status",
  "POST /api/lesson-records/prune-stale",
  "POST /api/lessons",
  "POST /api/lessons/bulk",
  "POST /api/lessons/special-lecture-student-schedule",
  "POST /api/makeup-tasks",
  "POST /api/makeup-tasks/bulk",
  "POST /api/portal-exam-post-submissions",
  "POST /api/portal-homeworks/complete",
  "POST /api/portal-questions",
  "POST /api/portal-state",
  "POST /api/report-snapshots",
  "POST /api/school-events",
  "POST /api/school-events/bulk",
  "POST /api/test-sessions"
]);

const directRoutes = [...serverSource.matchAll(
  /if \(request\.method === "(GET|POST|PUT|PATCH|DELETE)" && requestUrl\.pathname === "([^"]+)"\)/g
)].map((match) => `${match[1]} ${match[2]}`);
assert.equal(directRoutes.length, 58);
assert.equal(new Set(directRoutes).size, 58);

const directReadSignatures = directRoutes.filter((signature) => signature.startsWith("GET "));
const directWriteSignatures = directRoutes.filter((signature) => !signature.startsWith("GET "));
assert.equal(directReadSignatures.length, 12);
assert.equal(directWriteSignatures.length, 46);

const externalReadSignatures = [
  "GET /api/exam-analysis-source-files/open",
  "GET /api/exam-post-files/open",
  "GET /api/resource-material-files/open",
  "GET /api/solapi/groups",
  "GET /api/solapi/messages"
].sort();
for (const signature of externalReadSignatures) {
  assert.ok(directReadSignatures.includes(signature), `external read classification drifted: ${signature}`);
}
const externalReadSet = new Set(externalReadSignatures);
const domainSourceReadSignatures = directReadSignatures.filter(
  (signature) => !externalReadSet.has(signature)
);
assert.equal(domainSourceReadSignatures.length, 7);

const externalWriteSignatures = [
  "DELETE /api/exam-analysis-runs",
  "DELETE /api/exam-analysis-source-files",
  "POST /api/exam-analysis-source-files",
  "POST /api/exam-analysis-source-files/extract",
  "POST /api/exam-post-files",
  "POST /api/exam-post-files/cleanup",
  "POST /api/intake/tally",
  "POST /api/notifications/attendance-alimtalk",
  "POST /api/notifications/comment-alimtalk",
  "POST /api/notifications/daily-report-alimtalk",
  "POST /api/notifications/slack-daily-schedule",
  "POST /api/notifications/slack-today-schedule",
  "POST /api/notifications/slack-today-schedule/reserve",
  "POST /api/notifications/student-schedule-reminder",
  "POST /api/solapi/groups/cancel",
  "POST /api/special-lecture-applications/tally"
].sort();
assert.equal(externalWriteSignatures.length, 16);
for (const signature of externalWriteSignatures) {
  assert.ok(directWriteSignatures.includes(signature), `external route classification drifted: ${signature}`);
}

const externalEffectSet = new Set(externalWriteSignatures);
const domainSourceActionSignatures = directWriteSignatures.filter(
  (signature) => !externalEffectSet.has(signature)
);
assert.equal(domainSourceActionSignatures.length, 30);
assert.equal(
  registrySignatures.length
    + domainSourceReadSignatures.length
    + externalReadSignatures.length
    + domainSourceActionSignatures.length
    + externalWriteSignatures.length,
  121
);

for (const [createToken, dispatchToken] of [
  ["createSystemRouteRegistry({", "dispatchSystemRoute({ request, response, requestUrl })"],
  ["createAuthLoginRouteRegistry({", "dispatchAuthLoginRoute({ request, response, requestUrl })"],
  ["createPortalReadRouteRegistry({", "dispatchPortalReadRoute({ request, response, requestUrl })"],
  ["createPortalWriteRouteRegistry({", "dispatchPortalWriteRoute({ request, response, requestUrl })"],
  ["createExamPostConfirmRouteRegistry({", "dispatchExamPostConfirmRoute({ request, response, requestUrl })"],
  ["createTeacherAccountRouteRegistry({", "dispatchTeacherAccountRoute({ request, response, requestUrl })"],
  ["createAppCoreReadRouteRegistry({", "dispatchAppCoreReadRoute({ request, response, requestUrl })"],
  ["createAppStateWriteRouteRegistry({", "dispatchAppStateWriteRoute({ request, response, requestUrl })"],
  ["createReportSnapshotRouteRegistry({", "dispatchReportSnapshotRoute({ request, response, requestUrl })"],
  ["createTestSessionReadRouteRegistry({", "dispatchTestSessionReadRoute({ request, response, requestUrl })"],
  ["createTestSessionWriteRouteRegistry({", "dispatchTestSessionWriteRoute({ request, response, requestUrl })"],
  ["createIntegrationStatusRouteRegistry({", "dispatchIntegrationStatusRoute({ request, response, requestUrl })"],
  ["createExamAnalysisReadRouteRegistry({", "dispatchExamAnalysisReadRoute({ request, response, requestUrl })"],
  ["createExamAnalysisRunWriteRouteRegistry({", "dispatchExamAnalysisRunWriteRoute({ request, response, requestUrl })"],
  ["createExamAnalysisQuestionCountRouteRegistry({", "dispatchExamAnalysisQuestionCountRoute({ request, response, requestUrl })"],
  ["createExamAnalysisAiRouteRegistry({", "dispatchExamAnalysisAiRoute({ request, response, requestUrl })"],
  ["createSchoolEventRouteRegistry({", "dispatchSchoolEventRoute({ request, response, requestUrl })"],
  ["createAcademyReminderRouteRegistry({", "dispatchAcademyReminderRoute({ request, response, requestUrl })"],
  ["createAdminAiRouteRegistry({", "dispatchAdminAiRoute({ request, response, requestUrl })"],
  ["createAttendanceRouteRegistry({", "dispatchAttendanceRoute({ request, response, requestUrl })"],
  ["createClassTemplateRouteRegistry({", "dispatchClassTemplateRoute({ request, response, requestUrl })"],
  ["createExamPrepRowRouteRegistry({", "dispatchExamPrepRowRoute({ request, response, requestUrl })"],
  ["createHomeworkRouteRegistry({", "dispatchHomeworkRoute({ request, response, requestUrl })"],
  ["createLessonRecordRouteRegistry({", "dispatchLessonRecordRoute({ request, response, requestUrl })"],
  ["createLessonRouteRegistry({", "dispatchLessonRoute({ request, response, requestUrl })"],
  ["createMakeupTaskRouteRegistry({", "dispatchMakeupTaskRoute({ request, response, requestUrl })"]
]) {
  assert.ok(serverSource.includes(createToken), `registry construction missing: ${createToken}`);
  assert.ok(serverSource.includes(dispatchToken), `registry dispatch missing: ${dispatchToken}`);
}

assert.equal(
  packageJson.scripts["test:fourth-pass-server-route-closeout"],
  "node scripts/test-fourth-pass-server-route-closeout.mjs"
);
assert.ok(
  packageJson.scripts["test:production"].includes("npm run test:fourth-pass-server-route-closeout")
);

console.log(
  "fourth-pass server route closeout passed · registry 63 · source read 7 · external read 5 · source action 30 · external write 16"
);
