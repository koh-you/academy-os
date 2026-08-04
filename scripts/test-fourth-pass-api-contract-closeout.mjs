import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { versionedWriteRouteContracts } from "../src/shared/contracts/versionedWriteRouteContracts.js";

const [packageJson, serverSource] = await Promise.all([
  readFile(new URL("../package.json", import.meta.url), "utf8").then(JSON.parse),
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
assert.equal(versionedWriteRouteContracts.length, 24);

const domainCounts = Object.fromEntries(
  [...new Set(versionedWriteRouteContracts.map(({ domain }) => domain))]
    .sort()
    .map((domain) => [domain, versionedWriteRouteContracts.filter((contract) => contract.domain === domain).length])
);
assert.deepEqual(domainCounts, {
  appState: 1,
  examAnalysis: 5,
  lesson: 4,
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

const directWriteSignatures = [...serverSource.matchAll(
  /if \(request\.method === "(POST|PUT|PATCH|DELETE)" && requestUrl\.pathname === "([^"]+)"\)/g
)].map((match) => `${match[1]} ${match[2]}`).sort();
assert.equal(directWriteSignatures.length, 89);
assert.equal(new Set(directWriteSignatures).size, 89);

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
for (const signature of expectedContractSignatures) {
  const separator = signature.indexOf(" ");
  const method = signature.slice(0, separator);
  const path = signature.slice(separator + 1);
  const start = serverSource.indexOf(
    `if (request.method === "${method}" && requestUrl.pathname === "${path}")`
  );
  const end = serverSource.indexOf("\n  if (request.method ===", start + 1);
  assert.ok(start >= 0, `server route is missing ${signature}`);
  const routeSource = serverSource.slice(start, end > start ? end : undefined);
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
  "fourth-pass API contract closeout passed · direct writes 89 · contracted 24 · route/mapper deferred 42 · external gated 23"
);
