import {
  formatKoreaTimeFromIso,
  normalizeTimeInput
} from "./attendance.js";

function getAttendanceClockMinutes(value = "") {
  const time = normalizeTimeInput(value);
  if (!time) return null;
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

export function calculateLateMinutesFromLessonTime(
  lesson = {},
  checkInTime = "",
  graceMinutes = 5
) {
  const startMinutes = getAttendanceClockMinutes(lesson.startTime);
  const checkInMinutes = getAttendanceClockMinutes(checkInTime);
  if (startMinutes === null || checkInMinutes === null) return "";
  const normalizedGraceMinutes = Number(graceMinutes);
  return Math.max(
    0,
    checkInMinutes -
      startMinutes -
      (Number.isFinite(normalizedGraceMinutes) && normalizedGraceMinutes > 0
        ? normalizedGraceMinutes
        : 5)
  );
}

export function hasTabletAttendanceRecord(record = {}) {
  return Boolean(
    record.checkInAt ||
    record.checkInTime ||
    record.checkOutAt ||
    record.checkOutTime ||
    record.updatedBy === "attendance_kiosk"
  );
}

export function getManualAttendanceInitialStatus(record = {}) {
  const status = record?.attendanceStatus;
  if (status && status !== "pending") return status;
  if (record?.checkOutAt || record?.checkOutTime) return "checkout";
  return "present";
}

function normalizeAttendanceField(value) {
  return String(value ?? "").trim();
}

export function hasAttendanceModalChanges(record = {}, values = {}) {
  return (
    normalizeAttendanceField(record.attendanceStatus ?? "present") !==
      normalizeAttendanceField(values.attendanceStatus ?? "present") ||
    normalizeAttendanceField(record.lateMinutes) !==
      normalizeAttendanceField(values.lateMinutes) ||
    normalizeAttendanceField(
      record.checkInTime || formatKoreaTimeFromIso(record.checkInAt)
    ) !== normalizeAttendanceField(values.checkInTime) ||
    normalizeAttendanceField(
      record.checkOutTime || formatKoreaTimeFromIso(record.checkOutAt)
    ) !== normalizeAttendanceField(values.checkOutTime) ||
    normalizeAttendanceField(record.attendanceReason) !==
      normalizeAttendanceField(values.attendanceReason)
  );
}
