import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const settingsSource = await readFile(new URL("../src/domains/settings/SettingsCenter.jsx", import.meta.url), "utf8");
const appBoundarySource = `${appSource}\n${settingsSource}`;

function section(source, start, end) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert.ok(startIndex >= 0, `missing section start: ${start}`);
  assert.ok(endIndex > startIndex, `missing section end: ${end}`);
  return source.slice(startIndex, endIndex);
}

for (const extractedBoundary of [
  'from "../domains/lessons/attendance.js"',
  'from "../domains/lessons/attendanceApi.js"',
  'from "../domains/lessons/AttendanceKiosk.jsx"',
  'from "../domains/lessons/attendanceKioskCheckController.js"',
  'from "../domains/lessons/attendanceKioskPreviewController.js"',
  'from "../domains/lessons/AttendanceModal.jsx"',
  'from "../domains/lessons/attendanceSettings.js"',
  'from "../domains/lessons/useAttendanceRecordSync.js"',
  'from "../domains/lessons/manualAttendancePayload.js"',
  'from "../domains/lessons/manualAttendanceSaveController.js"',
  'from "../domains/notifications/notificationMessageRenderer.js"'
]) {
  assert.ok(appSource.includes(extractedBoundary), `missing extracted attendance boundary: ${extractedBoundary}`);
}

for (const extractedImplementation of [
  "function mergeRemoteAttendanceRecord(",
  "function normalizeAttendanceSettings(",
  "function createManualAttendanceRequestPayload(",
  "function saveManualAttendanceAction(",
  "function createAttendanceKioskDisplayModel(",
  "function getManualAttendanceInitialStatus("
]) {
  assert.equal(
    appSource.includes(extractedImplementation),
    false,
    `App must not re-own extracted attendance implementation: ${extractedImplementation}`
  );
}

const previewAdapter = section(
  appSource,
  "async function handleAttendancePinPreview",
  "async function handleAttendancePinCheck"
);
for (const required of [
  "previewKioskAttendanceAction({",
  "attendanceLoadedDateRef.current",
  "onDateChanged: requestAttendanceReload",
  "request: previewAttendanceRequest"
]) {
  assert.ok(previewAdapter.includes(required), `preview adapter must preserve ${required}`);
}

const checkAdapter = section(
  appSource,
  "async function handleAttendancePinCheck",
  "const sessionSurface = selectAppSessionSurface({"
);
for (const required of [
  "checkKioskAttendanceAction({",
  "onAttendanceEvent:",
  "onLesson:",
  "onRecord:",
  "request: checkAttendanceRequest"
]) {
  assert.ok(checkAdapter.includes(required), `check adapter must preserve ${required}`);
}

const manualSaveAdapter = section(
  appSource,
  "async function saveAttendanceRecord",
  "function handleChangeRecord"
);
for (const required of [
  "createManualAttendanceRequestPayload({",
  "saveManualAttendanceAction({",
  "onLesson:",
  "onNotificationJob: upsertNotificationJobState",
  "onRecord:",
  "request: checkAttendanceRequest"
]) {
  assert.ok(manualSaveAdapter.includes(required), `manual adapter must preserve ${required}`);
}

for (const adapter of [previewAdapter, checkAdapter, manualSaveAdapter]) {
  for (const forbidden of [
    '"/api/attendance/check"',
    '"/api/attendance/preview"',
    "fetch(",
    "postJson(",
    "notification_jobs",
    "Supabase",
    "Solapi"
  ]) {
    assert.equal(adapter.includes(forbidden), false, `App adapter must not own ${forbidden}`);
  }
}

assert.ok(
  appSource.includes("useAttendanceDateRollover({") &&
    appSource.includes("useAttendanceRecordSync({") &&
    appSource.includes("setStatus: setAttendanceSyncStatus") &&
    appSource.includes("syncDate: attendanceOnlyMode ? getKoreaDateString() : selectedDate"),
  "App must keep only the attendance sync hook adapter"
);
for (const movedLifecycle of [
  "async function syncAttendanceRecords()",
  "window.setInterval(syncAttendanceRecords",
  'window.addEventListener("focus", syncAttendanceRecords)',
  'document.addEventListener("visibilitychange", syncAttendanceRecords)',
  "function refreshAttendanceDataIfDateChanged()",
  "setAttendanceReloadKey((current) => current + 1)"
]) {
  assert.equal(appSource.includes(movedLifecycle), false, `App must not re-own ${movedLifecycle}`);
}

assert.ok(
  appSource.includes("<AttendanceKiosk") &&
    appSource.includes("onAttendanceCheck={handleAttendancePinCheck}") &&
    appSource.includes("onAttendancePreview={handleAttendancePinPreview}") &&
    appSource.includes("<AttendanceModal") &&
    appSource.includes("onSave={async (lesson, student, values, options = {}) =>"),
  "App must preserve controlled kiosk and manual modal composition"
);

const attendanceOnlyLoadStart = appSource.indexOf("if (attendanceOnlyMode) {");
const portalLoadStart = appSource.indexOf(
  'if (session && ["student", "parent"].includes(session.role))',
  attendanceOnlyLoadStart
);
const attendanceOnlyLoad = appSource.slice(attendanceOnlyLoadStart, portalLoadStart);
assert.ok(
  attendanceOnlyLoad.includes('fetch(apiUrl("/api/students"))') &&
    attendanceOnlyLoad.includes("/api/lessons?date=") &&
    attendanceOnlyLoad.includes("/api/lesson-records?date="),
  "attendance-only initial data adapter must remain visible for the security/maintenance gate"
);
assert.equal(
  attendanceOnlyLoad.includes("states.attendanceSettings"),
  false,
  "attendance-only server settings diagnostic must remain visible until maintenance fixes it"
);

for (const reservedOtherRoadmapBoundary of [
  "function isAttendanceOnlyRoute()",
  "function SettingsCenter(",
  "function LessonJournalDetail("
]) {
  assert.ok(
    appBoundarySource.includes(reservedOtherRoadmapBoundary),
    `cross-roadmap boundary must remain explicit: ${reservedOtherRoadmapBoundary}`
  );
}

assert.equal(appSource.includes("function formatAttendanceStatusForMessage("), false);
assert.equal(appSource.includes("function createAttendanceNotificationText("), false);
assert.equal(appSource.includes("function formatAttendanceForMessage("), false);

console.log("attendance roadmap 16 closeout boundary passed");
