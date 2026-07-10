import { attendanceLabels } from "./labels.js";

function getKoreaDateString(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export function formatKoreaTimeFromIso(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);
}

function getKoreaDateStringFromIso(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return getKoreaDateString(date);
}

export function formatShortDateLabel(dateString) {
  const [year, month, day] = String(dateString ?? "").split("-");
  return year && month && day ? `${month}.${day}` : String(dateString ?? "");
}

export function normalizeTimeInput(value) {
  const text = String(value ?? "").trim();
  const match = text.match(/(\d{1,2}):(\d{2})/);
  if (!match) return "";
  const hour = Math.max(0, Math.min(23, Number(match[1]) || 0));
  const minute = Math.max(0, Math.min(59, Number(match[2]) || 0));
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function getAttendanceClockMinutes(value = "") {
  const time = normalizeTimeInput(value);
  if (!time) return null;
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function normalizeLateGraceMinutes(value = 5) {
  const minutes = Number(value);
  return Number.isFinite(minutes) && minutes > 0 ? minutes : 5;
}

function isLateWithinGrace(record = {}, lesson = null, lateGraceMinutes = 5) {
  if ((record?.attendanceStatus ?? "") !== "late") return false;
  const startMinutes = getAttendanceClockMinutes(lesson?.startTime);
  const checkInMinutes = getAttendanceClockMinutes(record.checkInTime || formatKoreaTimeFromIso(record.checkInAt));
  if (startMinutes === null || checkInMinutes === null) return false;
  return checkInMinutes - startMinutes <= normalizeLateGraceMinutes(lateGraceMinutes);
}

export function addMinutesToAttendanceTime(timeValue, minutesToAdd = 0) {
  const time = normalizeTimeInput(timeValue);
  if (!time) return "";
  const [hour, minute] = time.split(":").map(Number);
  const totalMinutes = hour * 60 + minute + (Number(minutesToAdd) || 0);
  const normalizedMinutes = ((totalMinutes % (24 * 60)) + (24 * 60)) % (24 * 60);
  return `${String(Math.floor(normalizedMinutes / 60)).padStart(2, "0")}:${String(normalizedMinutes % 60).padStart(2, "0")}`;
}

export function createKoreaIsoFromDateAndTime(dateValue, timeValue, fallbackIso = new Date().toISOString()) {
  const time = normalizeTimeInput(timeValue);
  if (!dateValue || !time) return fallbackIso;
  const date = new Date(`${dateValue}T${time}:00+09:00`);
  return Number.isNaN(date.getTime()) ? fallbackIso : date.toISOString();
}

export function getAttendanceDateMismatch(record = {}, lesson = null) {
  record = record ?? {};
  const lessonDate = lesson?.date;
  if (!lessonDate) return null;
  const attendanceDates = [record.checkInAt, record.checkOutAt]
    .map(getKoreaDateStringFromIso)
    .filter(Boolean);
  const mismatchedDates = [...new Set(attendanceDates.filter((date) => date !== lessonDate))];
  if (mismatchedDates.length === 0) return null;
  return {
    attendanceDates: [...new Set(attendanceDates)],
    lessonDate,
    mismatchedDates
  };
}

export function clearAttendanceFields(record = {}) {
  return {
    ...(record ?? {}),
    attendanceStatus: "pending",
    attendanceReason: "",
    checkInAt: "",
    checkInTime: "",
    checkOutAt: "",
    checkOutTime: "",
    lateMinutes: "",
    updatedBy: record?.updatedBy === "attendance_kiosk" ? "" : record?.updatedBy
  };
}

export function getAttendanceDisplay(record = {}, lesson = null, lateGraceMinutes = 5) {
  record = record ?? {};
  const dateMismatch = getAttendanceDateMismatch(record, lesson);
  if (dateMismatch) {
    return {
      dateMismatch,
      detail: `출결 ${dateMismatch.mismatchedDates.map(formatShortDateLabel).join(", ")} · 수업 ${formatShortDateLabel(dateMismatch.lessonDate)}`,
      label: "일자 불일치",
      statusClass: "mismatch"
    };
  }
  const status = record.attendanceStatus ?? "pending";
  const effectiveStatus = isLateWithinGrace(record, lesson, lateGraceMinutes) ? "present" : status;
  const isArrivalStatus = ["checkin", "present", "late"].includes(status);
  const checkInTime = record.checkInTime || formatKoreaTimeFromIso(record.checkInAt);
  const checkOutTime = record.checkOutTime || formatKoreaTimeFromIso(record.checkOutAt);
  const label = checkOutTime && !["absent", "excused", "pending"].includes(status)
    ? "하원"
    : isArrivalStatus || checkInTime
      ? effectiveStatus === "late" ? "지각" : "등원"
      : attendanceLabels[status] ?? status ?? "대기";
  const detail = [
    checkInTime ? `등원 ${checkInTime}` : "",
    checkOutTime ? `하원 ${checkOutTime}` : ""
  ].filter(Boolean).join(" · ");
  return { label, detail, statusClass: effectiveStatus };
}

export function hasMissingCheckOut(record = {}, lesson = null) {
  record = record ?? {};
  if (getAttendanceDateMismatch(record, lesson)) return false;
  const status = record.attendanceStatus ?? "pending";
  const hasCheckIn = Boolean(record.checkInAt || record.checkInTime);
  const hasCheckOut = Boolean(record.checkOutAt || record.checkOutTime);
  return hasCheckIn && !hasCheckOut && ["checkin", "present", "late"].includes(status);
}

export function applyManualAttendanceTimeFields(existingRecord = {}, values = {}, nowIso = new Date().toISOString(), lesson = null) {
  existingRecord = existingRecord ?? {};
  const nowTime = formatKoreaTimeFromIso(nowIso);
  const manualCheckInTime = normalizeTimeInput(values.checkInTime);
  const manualCheckOutTime = normalizeTimeInput(values.checkOutTime);
  const derivedLateCheckInTime =
    values.attendanceStatus === "late" && values.lateMinutes && lesson?.startTime
      ? addMinutesToAttendanceTime(lesson.startTime, values.lateMinutes)
      : "";
  const nextCheckInTime = manualCheckInTime || derivedLateCheckInTime || existingRecord.checkInTime || nowTime;
  const nextCheckInAt = createKoreaIsoFromDateAndTime(lesson?.date, nextCheckInTime, existingRecord.checkInAt || nowIso);
  const nextCheckOutTime = manualCheckOutTime || existingRecord.checkOutTime || nowTime;
  const nextCheckOutAt = createKoreaIsoFromDateAndTime(lesson?.date, nextCheckOutTime, existingRecord.checkOutAt || nowIso);
  if (["present", "late", "checkin"].includes(values.attendanceStatus)) {
    return {
      ...values,
      checkInAt: nextCheckInAt,
      checkInTime: nextCheckInTime,
      checkOutAt: "",
      checkOutTime: ""
    };
  }
  if (values.attendanceStatus === "checkout") {
    return {
      ...values,
      checkInAt: manualCheckInTime ? nextCheckInAt : existingRecord.checkInAt || nextCheckInAt,
      checkInTime: manualCheckInTime || existingRecord.checkInTime || nextCheckInTime,
      checkOutAt: nextCheckOutAt,
      checkOutTime: nextCheckOutTime
    };
  }
  if (["absent", "excused", "pending"].includes(values.attendanceStatus)) {
    return {
      ...values,
      checkInAt: "",
      checkInTime: "",
      checkOutAt: "",
      checkOutTime: ""
    };
  }
  return values;
}
