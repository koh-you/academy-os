import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { versionedWriteRouteContracts } from "../src/shared/contracts/versionedWriteRouteContracts.js";
import { academyReminderRouteSignatures } from "../src/shared/server/academyReminderRouteRegistry.js";
import { appStateWriteRouteSignatures } from "../src/shared/server/appStateWriteRouteRegistry.js";
import { authLoginRouteSignatures } from "../src/shared/server/authLoginRouteRegistry.js";
import { examAnalysisAiRouteSignatures } from "../src/shared/server/examAnalysisAiRouteRegistry.js";
import { examAnalysisQuestionCountRouteSignatures } from "../src/shared/server/examAnalysisQuestionCountRouteRegistry.js";
import { examAnalysisRunWriteRouteSignatures } from "../src/shared/server/examAnalysisRunWriteRouteRegistry.js";
import { examPostConfirmRouteSignatures } from "../src/shared/server/examPostConfirmRouteRegistry.js";
import { examPrepRowRouteSignatures } from "../src/shared/server/examPrepRowRouteRegistry.js";
import { makeupTaskRouteSignatures } from "../src/shared/server/makeupTaskRouteRegistry.js";
import { resourceMaterialRouteSignatures } from "../src/shared/server/resourceMaterialRouteRegistry.js";
import { portalWriteRouteSignatures } from "../src/shared/server/portalWriteRouteRegistry.js";
import { reportSnapshotRouteSignatures } from "../src/shared/server/reportSnapshotRouteRegistry.js";
import { adminAiRouteSignatures } from "../src/shared/server/adminAiRouteRegistry.js";
import { attendanceRouteSignatures } from "../src/shared/server/attendanceRouteRegistry.js";
import { homeworkRouteSignatures } from "../src/shared/server/homeworkRouteRegistry.js";
import { lessonRecordRouteSignatures } from "../src/shared/server/lessonRecordRouteRegistry.js";
import { lessonRouteSignatures } from "../src/shared/server/lessonRouteRegistry.js";
import { notificationJobRouteSignatures } from "../src/shared/server/notificationJobRouteRegistry.js";
import { notificationProviderRouteSignatures } from "../src/shared/server/notificationProviderRouteRegistry.js";
import { schoolEventRouteSignatures } from "../src/shared/server/schoolEventRouteRegistry.js";
import { solapiRouteSignatures } from "../src/shared/server/solapiRouteRegistry.js";
import { specialLectureApplicationRouteSignatures } from "../src/shared/server/specialLectureApplicationRouteRegistry.js";
import { systemRouteSignatures } from "../src/shared/server/systemRouteRegistry.js";
import { teacherAccountRouteSignatures } from "../src/shared/server/teacherAccountRouteRegistry.js";
import { testSessionWriteRouteSignatures } from "../src/shared/server/testSessionWriteRouteRegistry.js";

const [appStateWriteRouteSource, examAnalysisQuestionCountRouteSource, examAnalysisRunWriteRouteSource, packageJson, reportSnapshotRouteSource, attendanceRouteRegistrySource, notificationJobRouteRegistrySource, resourceMaterialRouteRegistrySource, serverSource] = await Promise.all([
  readFile(new URL("../src/shared/server/appStateWriteRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/examAnalysisQuestionCountRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/examAnalysisRunWriteRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../package.json", import.meta.url), "utf8").then(JSON.parse),
  readFile(new URL("../src/shared/server/reportSnapshotRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/attendanceRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/notificationJobRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/resourceMaterialRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../api/server.js", import.meta.url), "utf8")
]);

const signatureOf = ({ method, path }) => `${method} ${path}`;
const expectedContractSignatures = [
  "DELETE /api/resource-material-files",
  "POST /api/app-state",
  "POST /api/attendance/check",
  "POST /api/class-rosters/save",
  "POST /api/exam-analysis-runs",
  "POST /api/exam-analysis-runs/confirm-question-count",
  "POST /api/exam-analysis-runs/save-output-drafts",
  "POST /api/exam-analysis-runs/save-prompt-studio",
  "POST /api/exam-analysis-runs/save-question-reviews",
  "POST /api/exam-prep-schedule/save",
  "POST /api/lesson-journal/history-action",
  "POST /api/lesson-journal/makeup-tasks/save",
  "POST /api/lesson-journal/rows/save",
  "POST /api/notification-jobs",
  "POST /api/notification-jobs/cancel",
  "POST /api/notification-jobs/dispatch-due",
  "POST /api/notification-jobs/readiness-check",
  "POST /api/notification-jobs/reconcile-solapi",
  "POST /api/notification-jobs/reserve",
  "POST /api/notification-jobs/reserve-bulk",
  "POST /api/report-snapshots",
  "POST /api/resource-material-files",
  "POST /api/resource-materials",
  "POST /api/school-calendar/derived-save",
  "POST /api/supplement-schedules/save"
];

const deferredExternalSignatures = [
  "DELETE /api/exam-analysis-runs",
  "DELETE /api/exam-analysis-source-files",
  "POST /api/admin/seed-core-data",
  "POST /api/ai/comment-polish",
  "POST /api/exam-analysis-runs/detect-question-boundaries",
  "POST /api/exam-analysis-runs/fill-question-rows",
  "POST /api/exam-analysis-runs/generate-output-draft",
  "POST /api/exam-analysis-runs/refine-question-rows",
  "POST /api/exam-analysis-source-files",
  "POST /api/exam-analysis-source-files/extract",
  "POST /api/exam-analysis-source-files/vision-check",
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
];

const deferredRouteMapperSignatures = [
  "DELETE /api/academy-reminders",
  "DELETE /api/exam-prep-rows",
  "DELETE /api/lessons",
  "DELETE /api/makeup-tasks",
  "DELETE /api/notification-jobs",
  "DELETE /api/resource-materials",
  "DELETE /api/school-events",
  "DELETE /api/special-lecture-applications",
  "DELETE /api/students",
  "DELETE /api/test-sessions",
  "POST /api/academy-reminders",
  "POST /api/attendance/preview",
  "POST /api/auth/login",
  "POST /api/auth/teacher-account",
  "POST /api/client-errors",
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
  "POST /api/school-events",
  "POST /api/school-events/bulk",
  "POST /api/special-lecture-applications",
  "POST /api/special-lecture-enrollments",
  "POST /api/special-lecture-enrollments/bulk",
  "POST /api/student-intake-applicants",
  "POST /api/students",
  "POST /api/students/bulk",
  "POST /api/test-sessions"
];

const contractSignatures = versionedWriteRouteContracts.map(signatureOf).sort();
assert.deepEqual(contractSignatures, expectedContractSignatures);
assert.equal(versionedWriteRouteContracts.length, 25);

const domainCounts = Object.fromEntries(
  [...new Set(versionedWriteRouteContracts.map(({ domain }) => domain))]
    .sort()
    .map((domain) => [domain, versionedWriteRouteContracts.filter((contract) => contract.domain === domain).length])
);
assert.deepEqual(domainCounts, {
  appState: 1,
  examAnalysis: 5,
  lesson: 5,
  notification: 7,
  report: 1,
  resource: 3,
  schoolCalendar: 1,
  student: 1,
  supplement: 1
});

const providerContracts = versionedWriteRouteContracts
  .filter(({ sources }) => sources.some((source) => source.startsWith("provider.")))
  .map(signatureOf)
  .sort();
assert.deepEqual(providerContracts, [
  "POST /api/notification-jobs/cancel",
  "POST /api/notification-jobs/dispatch-due",
  "POST /api/notification-jobs/readiness-check",
  "POST /api/notification-jobs/reconcile-solapi",
  "POST /api/notification-jobs/reserve",
  "POST /api/notification-jobs/reserve-bulk"
]);

const directWriteSignatures = [
  ...[...serverSource.matchAll(
    /if \(request\.method === "(POST|PUT|PATCH|DELETE)" && requestUrl\.pathname === "([^"]+)"\)/g
  )].map((match) => `${match[1]} ${match[2]}`),
  ...systemRouteSignatures
    .filter(({ method }) => ["POST", "PUT", "PATCH", "DELETE"].includes(method))
    .map(signatureOf),
  ...authLoginRouteSignatures.map(signatureOf),
  ...adminAiRouteSignatures
    .filter(({ method }) => ["POST", "PUT", "PATCH", "DELETE"].includes(method))
    .map(signatureOf),
  ...appStateWriteRouteSignatures.map(signatureOf),
  ...examAnalysisAiRouteSignatures.map(signatureOf),
  ...examAnalysisQuestionCountRouteSignatures.map(signatureOf),
  ...examAnalysisRunWriteRouteSignatures.map(signatureOf),
  ...examPostConfirmRouteSignatures.map(signatureOf),
  ...portalWriteRouteSignatures.map(signatureOf),
  ...reportSnapshotRouteSignatures.map(signatureOf),
  ...schoolEventRouteSignatures
    .filter(({ method }) => ["POST", "PUT", "PATCH", "DELETE"].includes(method))
    .map(signatureOf),
  ...academyReminderRouteSignatures
    .filter(({ method }) => ["POST", "PUT", "PATCH", "DELETE"].includes(method))
    .map(signatureOf),
  ...attendanceRouteSignatures
    .filter(({ method }) => ["POST", "PUT", "PATCH", "DELETE"].includes(method))
    .map(signatureOf),
  ...examPrepRowRouteSignatures
    .filter(({ method }) => ["POST", "PUT", "PATCH", "DELETE"].includes(method))
    .map(signatureOf),
  ...homeworkRouteSignatures
    .filter(({ method }) => ["POST", "PUT", "PATCH", "DELETE"].includes(method))
    .map(signatureOf),
  ...lessonRecordRouteSignatures
    .filter(({ method }) => ["POST", "PUT", "PATCH", "DELETE"].includes(method))
    .map(signatureOf),
  ...lessonRouteSignatures
    .filter(({ method }) => ["POST", "PUT", "PATCH", "DELETE"].includes(method))
    .map(signatureOf),
  ...makeupTaskRouteSignatures
    .filter(({ method }) => ["POST", "PUT", "PATCH", "DELETE"].includes(method))
    .map(signatureOf),
  ...notificationJobRouteSignatures
    .filter(({ method }) => ["POST", "PUT", "PATCH", "DELETE"].includes(method))
    .map(signatureOf),
  ...notificationProviderRouteSignatures
    .filter(({ method }) => ["POST", "PUT", "PATCH", "DELETE"].includes(method))
    .map(signatureOf),
  ...resourceMaterialRouteSignatures
    .filter(({ method }) => ["POST", "PUT", "PATCH", "DELETE"].includes(method))
    .map(signatureOf),
  ...solapiRouteSignatures
    .filter(({ method }) => ["POST", "PUT", "PATCH", "DELETE"].includes(method))
    .map(signatureOf),
  ...specialLectureApplicationRouteSignatures
    .filter(({ method }) => ["POST", "PUT", "PATCH", "DELETE"].includes(method))
    .map(signatureOf),
  ...teacherAccountRouteSignatures.map(signatureOf),
  ...testSessionWriteRouteSignatures.map(signatureOf)
].sort();
assert.equal(directWriteSignatures.length, 90);
assert.equal(new Set(directWriteSignatures).size, 90);

const classifiedSignatures = [
  ...expectedContractSignatures,
  ...deferredExternalSignatures,
  ...deferredRouteMapperSignatures
].sort();
assert.equal(deferredExternalSignatures.length, 23);
assert.equal(deferredRouteMapperSignatures.length, 42);
assert.deepEqual(classifiedSignatures, directWriteSignatures);

const specializedParserBySignature = new Map([
  ["POST /api/exam-analysis-runs", "parseExamAnalysisRunWriteRequest"],
  ["POST /api/exam-analysis-runs/confirm-question-count", "parseExamAnalysisQuestionCountConfirmRequest"],
  ["POST /api/exam-analysis-runs/save-output-drafts", "parseExamAnalysisOutputDraftsSaveRequest"],
  ["POST /api/exam-analysis-runs/save-prompt-studio", "parseExamAnalysisPromptStudioSaveRequest"],
  ["POST /api/exam-analysis-runs/save-question-reviews", "parseExamAnalysisQuestionReviewsSaveRequest"]
]);
const extractedRouteSourceBySignature = new Map([
  ["POST /api/app-state", appStateWriteRouteSource],
  ["POST /api/exam-analysis-runs/confirm-question-count", examAnalysisQuestionCountRouteSource],
  ["POST /api/exam-analysis-runs", examAnalysisRunWriteRouteSource],
  ["POST /api/report-snapshots", reportSnapshotRouteSource],
  ["POST /api/attendance/check", attendanceRouteRegistrySource],
  ["POST /api/notification-jobs", notificationJobRouteRegistrySource],
  ["POST /api/notification-jobs/cancel", notificationJobRouteRegistrySource],
  ["POST /api/notification-jobs/dispatch-due", notificationJobRouteRegistrySource],
  ["POST /api/notification-jobs/readiness-check", notificationJobRouteRegistrySource],
  ["POST /api/notification-jobs/reconcile-solapi", notificationJobRouteRegistrySource],
  ["POST /api/notification-jobs/reserve", notificationJobRouteRegistrySource],
  ["POST /api/notification-jobs/reserve-bulk", notificationJobRouteRegistrySource],
  ["DELETE /api/resource-material-files", resourceMaterialRouteRegistrySource],
  ["POST /api/resource-material-files", resourceMaterialRouteRegistrySource],
  ["POST /api/resource-materials", resourceMaterialRouteRegistrySource]
]);
for (const signature of expectedContractSignatures) {
  const separator = signature.indexOf(" ");
  const method = signature.slice(0, separator);
  const path = signature.slice(separator + 1);
  const extractedRouteSource = extractedRouteSourceBySignature.get(signature);
  const start = extractedRouteSource ? -1 : serverSource.indexOf(
    `if (request.method === "${method}" && requestUrl.pathname === "${path}")`
  );
  const end = extractedRouteSource ? -1 : serverSource.indexOf("\n  if (request.method ===", start + 1);
  assert.ok(extractedRouteSource || start >= 0, `server route is missing ${signature}`);
  const routeSource = extractedRouteSource ?? serverSource.slice(start, end > start ? end : undefined);
  const parserToken = specializedParserBySignature.get(signature) ?? "parseVersionedWriteRequest";
  assert.ok(routeSource.includes(parserToken), `${signature} is not bound to ${parserToken}`);
}

assert.ok(
  packageJson.scripts["test:contract:versioned-write"].includes("npm run test:fourth-pass-api-contract-closeout")
);
assert.equal(
  packageJson.scripts["test:production"].startsWith("npm run test:contract:versioned-write"),
  true
);

console.log(
  "fourth-pass API contract closeout passed · direct writes 90 · contracted 25 · route/mapper deferred 42 · external gated 23"
);
