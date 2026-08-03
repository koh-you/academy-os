import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const attendanceApiSource = await readFile(
  new URL("../src/domains/lessons/attendanceApi.js", import.meta.url),
  "utf8"
);
const attendanceSyncControllerSource = await readFile(
  new URL("../src/domains/lessons/attendanceSyncController.js", import.meta.url),
  "utf8"
);
const attendanceSyncHookSource = await readFile(
  new URL("../src/domains/lessons/useAttendanceRecordSync.js", import.meta.url),
  "utf8"
);
const attendanceSettingsSource = await readFile(
  new URL("../src/domains/lessons/attendanceSettings.js", import.meta.url),
  "utf8"
);
const manualAttendanceSaveControllerSource = await readFile(
  new URL("../src/domains/lessons/manualAttendanceSaveController.js", import.meta.url),
  "utf8"
);
const serverSource = await readFile(new URL("../api/server.js", import.meta.url), "utf8");
const coreDataSource = await readFile(new URL("../api/routes/coreData.js", import.meta.url), "utf8");
const schemaSource = await readFile(new URL("../supabase/schema.sql", import.meta.url), "utf8");

function assertOrdered(source, values) {
  let cursor = -1;
  for (const value of values) {
    const next = source.indexOf(value, cursor + 1);
    assert.ok(next > cursor, `missing or out-of-order attendance contract: ${value}`);
    cursor = next;
  }
}

assert.ok(
  attendanceSyncControllerSource.includes(
    '`/api/lesson-records?date=${encodeURIComponent(syncDate)}`'
  ),
  "missing date-scoped attendance sync request"
);
for (const request of ['"/api/attendance/check"', '"/api/attendance/preview"']) {
  assert.ok(attendanceApiSource.includes(request), `missing attendance API request: ${request}`);
}

assertOrdered(appSource, [
  "useAttendanceDateRollover,",
  "useAttendanceRecordSync",
  'from "../domains/lessons/useAttendanceRecordSync.js"',
  "useAttendanceDateRollover({",
  "useAttendanceRecordSync({"
]);
assert.equal(
  appSource.includes("mergeRemoteAttendanceRecord("),
  false,
  "attendance sync merge and orchestration must stay outside App"
);
assert.ok(
  appSource.includes('from "../domains/lessons/attendanceSettings.js"') &&
    attendanceSettingsSource.includes("function normalizeAttendanceSettings"),
  "attendance settings normalization must stay in its extracted model"
);
assert.equal(
  appSource.includes("function normalizeAttendanceSettings("),
  false,
  "App must not own attendance settings normalization"
);
for (const lifecycleContract of [
  "attendanceSyncIntervalMs = 7_000",
  "attendanceDateRolloverIntervalMs = 30_000",
  "startAttendanceDateRolloverLifecycle({",
  "async function syncAttendanceRecords()",
  "syncAttendanceRecordsAction({",
  "windowTarget.setInterval(",
  'windowTarget.addEventListener("focus"',
  'documentTarget.addEventListener("visibilitychange"'
]) {
  assert.ok(
    attendanceSyncHookSource.includes(lifecycleContract),
    `missing attendance sync lifecycle: ${lifecycleContract}`
  );
}

assertOrdered(serverSource, [
  "async function handleAttendanceCheck(payload = {})",
  "const previewOnly = payload.previewOnly === true",
  "if (!(lesson.studentIds ?? []).includes(student.studentId))",
  "if (!previewOnly) await upsertLesson(lesson)",
  "if (previewOnly) {",
  "const savedRecords = appliedAttendanceVisit",
  "savePlan: saveLessonJournalRowsPlan",
  "(await upsertLessonStudentRecord(nextRecord)).record",
  "const shouldQueueKioskAlimtalk = sendAlimtalk && source === \"kiosk\"",
  "const shouldReserveManualAbsenceAlimtalk = sendAlimtalk && source === \"manual\" && nextStatus === \"absent\"",
  "reserveNotificationJobInSolapi(notificationJob",
  "const eventResult = await tryRecordAttendanceEvent(attendanceEventPayload)",
  "queueKioskAttendanceAlimtalk(attendanceEventPayload, alimtalkPayload)"
]);

for (const persistenceContract of [
  'listRows("lesson_student_records"',
  'upsertRows("lesson_student_records"',
  "mergeExistingAttendanceForNonAttendanceSave(stableRecord, existingRecord)",
  'upsertRows("attendance_events"',
  'upsertRows("notification_jobs"'
]) {
  assert.ok(coreDataSource.includes(persistenceContract), `missing attendance persistence: ${persistenceContract}`);
}

for (const tableContract of [
  "create table if not exists lesson_student_records",
  "create table if not exists attendance_events",
  "create table if not exists notification_jobs",
  "unique (lesson_id, student_id)"
]) {
  assert.ok(schemaSource.includes(tableContract), `missing attendance schema: ${tableContract}`);
}

assert.ok(
  appSource.includes("saveManualAttendanceAction({") &&
    /options\.sendAlimtalk\s*&&\s*nextAttendanceStatus === "absent"/.test(
      manualAttendanceSaveControllerSource
    ),
  "manual absence partial failure must remain explicitly surfaced"
);
assert.ok(
  appSource.includes('fetch(apiUrl("/api/students"))') &&
    !appSource.slice(
      appSource.indexOf("if (attendanceOnlyMode) {"),
      appSource.indexOf("if (session && [\"student\", \"parent\"].includes(session.role))")
    ).includes("states.attendanceSettings"),
  "kiosk settings/source diagnostic must remain visible until maintenance fixes it"
);

console.log("attendance roadmap inventory boundary passed");
