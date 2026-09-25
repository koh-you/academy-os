// 2026-09-25 · 수동 결석 저장이 예약한 학부모 결석 알림톡을 찾아내는 순수 모델.
// 출결을 '대기'(또는 다른 상태)로 되돌려도 서버는 이미 예약된 알림톡을 취소하지 않으므로,
// 출결 체크 모달의 저장 확인 단계에서 "예약이 남아 있다"는 사실만 사람에게 알린다.
// 여기서 취소하지 않는다 — 실제 발송/예약 취소는 사람이 알림관리에서 결정한다(AGENTS.md).
//
// job 모양의 원천은 api/server.js `buildManualAbsenceAttendanceJob`:
//   notificationJobId: `attendance_absence_${lessonStudentRecordId}_${scheduledHourKey}`
//   notificationType: "attendance", target: "parent", status: "scheduled",
//   result: { attendanceSource: "manual_journal", reservationPending: true }
import { formatKoreaTimeFromIso } from "./attendance.js";

const settledAbsenceAlimtalkStatuses = new Set(["sent", "canceled", "failed"]);
const reservedAbsenceAlimtalkStatuses = new Set(["scheduled", "queued", "pending_send", "dry_run"]);

export function isManualAbsenceAlimtalkJob(job = {}) {
  if (String(job?.notificationJobId ?? "").startsWith("attendance_absence_")) return true;
  return job?.notificationType === "attendance" && job?.result?.attendanceSource === "manual_journal";
}

export function isReservedAbsenceAlimtalkJob(job = {}) {
  if (!isManualAbsenceAlimtalkJob(job)) return false;
  if (settledAbsenceAlimtalkStatuses.has(job?.status)) return false;
  // 예약이 아직 확정되지 않은 job(provider "academy-os-reserving")도 남아 있는 예약으로 센다.
  return reservedAbsenceAlimtalkStatuses.has(job?.status) || job?.result?.reservationPending === true;
}

export function selectReservedAbsenceAlimtalkJobs({
  lessonId = "",
  notificationJobs = [],
  studentId = ""
} = {}) {
  if (!lessonId || !studentId) return [];
  return (Array.isArray(notificationJobs) ? notificationJobs : []).filter(
    (job) =>
      job?.lessonId === lessonId &&
      job?.studentId === studentId &&
      isReservedAbsenceAlimtalkJob(job)
  );
}

export function createReservedAbsenceAlimtalkSummary({
  lesson = null,
  notificationJobs = [],
  student = null
} = {}) {
  const jobs = selectReservedAbsenceAlimtalkJobs({
    lessonId: lesson?.lessonId ?? "",
    notificationJobs,
    studentId: student?.studentId ?? ""
  });
  return {
    count: jobs.length,
    notificationJobIds: jobs.map((job) => job.notificationJobId),
    scheduledAtLabels: [
      ...new Set(jobs.map((job) => formatKoreaTimeFromIso(job.scheduledAt)).filter(Boolean))
    ].sort()
  };
}

// 결석을 그대로 유지하는 저장에는 경고가 필요 없다. 결석이 아닌 상태로 저장하는 순간
// 예약된 결석 알림톡이 화면과 어긋나므로 그때만 알린다.
export function shouldWarnAboutReservedAbsenceAlimtalk({
  nextAttendanceStatus = "",
  reservedAbsenceAlimtalk = null
} = {}) {
  if (!reservedAbsenceAlimtalk?.count) return false;
  return nextAttendanceStatus !== "absent";
}

export function createReservedAbsenceAlimtalkWarningText({
  nextAttendanceStatus = "",
  reservedAbsenceAlimtalk = null
} = {}) {
  if (!shouldWarnAboutReservedAbsenceAlimtalk({ nextAttendanceStatus, reservedAbsenceAlimtalk })) {
    return "";
  }
  const scheduledLabel = reservedAbsenceAlimtalk.scheduledAtLabels.length
    ? ` (예약 ${reservedAbsenceAlimtalk.scheduledAtLabels.join(", ")})`
    : "";
  return `이미 예약된 학부모 결석 알림톡 ${reservedAbsenceAlimtalk.count}건이 남아 있습니다${scheduledLabel}. 출결을 바꿔도 이 예약은 자동으로 취소되지 않습니다. 알림관리 › 예약 탭의 알림톡 발송 기록에서 [예약 취소] 를 눌러 직접 취소하세요.`;
}
