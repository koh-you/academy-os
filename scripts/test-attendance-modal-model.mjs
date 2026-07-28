import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  calculateLateMinutesFromLessonTime,
  getManualAttendanceInitialStatus,
  hasAttendanceModalChanges,
  hasTabletAttendanceRecord
} from "../src/domains/lessons/attendanceModalModel.js";

const source = await readFile(
  new URL("../src/domains/lessons/attendanceModalModel.js", import.meta.url),
  "utf8"
);

assert.equal(calculateLateMinutesFromLessonTime({ startTime: "19:00" }, "19:04", 5), 0);
assert.equal(calculateLateMinutesFromLessonTime({ startTime: "19:00" }, "19:10", 5), 5);
assert.equal(calculateLateMinutesFromLessonTime({ startTime: "19:00" }, "19:10", 10), 0);
assert.equal(calculateLateMinutesFromLessonTime({ startTime: "19:00" }, "18:50", 5), 0);
assert.equal(calculateLateMinutesFromLessonTime({ startTime: "19:00" }, "19:10", 0), 5);
assert.equal(calculateLateMinutesFromLessonTime({ startTime: "invalid" }, "19:10", 5), "");
assert.equal(calculateLateMinutesFromLessonTime({ startTime: "19:00" }, "", 5), "");

assert.equal(hasTabletAttendanceRecord({}), false);
for (const record of [
  { checkInAt: "2026-07-28T10:00:00.000Z" },
  { checkInTime: "19:00" },
  { checkOutAt: "2026-07-28T13:00:00.000Z" },
  { checkOutTime: "22:00" },
  { updatedBy: "attendance_kiosk" }
]) {
  assert.equal(hasTabletAttendanceRecord(record), true);
}
assert.equal(hasTabletAttendanceRecord({ updatedBy: "manual_attendance" }), false);

assert.equal(getManualAttendanceInitialStatus({ attendanceStatus: "late" }), "late");
assert.equal(
  getManualAttendanceInitialStatus({
    attendanceStatus: "pending",
    checkOutTime: "22:00"
  }),
  "checkout"
);
assert.equal(getManualAttendanceInitialStatus({ attendanceStatus: "pending" }), "present");
assert.equal(getManualAttendanceInitialStatus(null), "present");

const storedRecord = {
  attendanceStatus: "late",
  lateMinutes: 5,
  checkInAt: "2026-07-28T10:10:00.000Z",
  checkOutAt: "2026-07-28T13:00:00.000Z",
  attendanceReason: " 교통 지연 "
};
const unchangedValues = {
  attendanceStatus: "late",
  lateMinutes: "5",
  checkInTime: "19:10",
  checkOutTime: "22:00",
  attendanceReason: "교통 지연"
};
assert.equal(hasAttendanceModalChanges(storedRecord, unchangedValues), false);

for (const patch of [
  { attendanceStatus: "present" },
  { lateMinutes: "7" },
  { checkInTime: "19:11" },
  { checkOutTime: "22:01" },
  { attendanceReason: "다른 사유" }
]) {
  assert.equal(
    hasAttendanceModalChanges(storedRecord, { ...unchangedValues, ...patch }),
    true,
    `virtual modal change must detect ${Object.keys(patch)[0]}`
  );
}

for (const forbidden of [
  "fetch(",
  "/api/",
  "postJson",
  "getJson",
  "useState",
  "useEffect",
  "localStorage",
  "notification_jobs",
  "Solapi"
]) {
  assert.equal(source.includes(forbidden), false, `attendance modal model must not include ${forbidden}`);
}

console.log("attendance manual modal model passed");
