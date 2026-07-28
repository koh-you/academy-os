import { formatKoreaTimeFromIso } from "./attendance.js";

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
