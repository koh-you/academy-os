// 2026-09-25 · 수동 결석 저장이 예약한 학부모 결석 알림톡을 찾아내는 순수 모델.
// 출결을 '대기'(또는 다른 상태)로 되돌려도 서버는 이미 예약된 알림톡을 취소하지 않으므로,
// 출결 체크 모달의 저장 확인 단계에서 "예약이 남아 있다"는 사실만 사람에게 알린다.
// 여기서 취소하지 않는다 — 실제 발송/예약 취소는 사람이 결정한다(AGENTS.md).
// 2026-09-25 · 취소 진입점은 두 곳이다: 수업일지 ⋮ › 예약 확인 모달의 '출결 결석 알림톡' 구획과
// 알림관리의 알림톡 발송 기록. 경고 문구도 두 경로를 함께 가리킨다.
//
// job 모양의 원천은 api/server.js `buildManualAbsenceAttendanceJob`:
//   notificationJobId: `attendance_absence_${lessonStudentRecordId}_${scheduledHourKey}`
//   notificationType: "attendance", target: "parent", status: "scheduled",
//   result: { attendanceSource: "manual_journal", reservationPending: true }
import { formatKoreaTimeFromIso } from "./attendance.js";

// 2026-09-25 · dry_run 은 발송사에 실제 예약이 걸리지 않고 알림관리에 취소 버튼도 없다(정리함으로 간다).
// 취소할 수 없는 것을 취소하라고 하지 않도록 '남은 예약' 에서 뺀다.
const settledAbsenceAlimtalkStatuses = new Set(["canceled", "failed", "dry_run"]);
const reservedAbsenceAlimtalkStatuses = new Set(["scheduled", "queued", "pending_send"]);
// 이미 학부모에게 나간 것은 취소할 수 없다. 되돌릴 때 사실만 따로 알린다.
const sentAbsenceAlimtalkStatuses = new Set(["sent", "send_unconfirmed"]);

export function isManualAbsenceAlimtalkJob(job = {}) {
  if (String(job?.notificationJobId ?? "").startsWith("attendance_absence_")) return true;
  return job?.notificationType === "attendance" && job?.result?.attendanceSource === "manual_journal";
}

export function isSentAbsenceAlimtalkJob(job = {}) {
  if (!isManualAbsenceAlimtalkJob(job)) return false;
  return sentAbsenceAlimtalkStatuses.has(job?.status);
}

export function isReservedAbsenceAlimtalkJob(job = {}) {
  if (!isManualAbsenceAlimtalkJob(job)) return false;
  if (settledAbsenceAlimtalkStatuses.has(job?.status)) return false;
  if (sentAbsenceAlimtalkStatuses.has(job?.status)) return false;
  // 예약이 아직 확정되지 않은 job(provider "academy-os-reserving")도 남아 있는 예약으로 센다.
  return reservedAbsenceAlimtalkStatuses.has(job?.status) || job?.result?.reservationPending === true;
}

function selectAbsenceAlimtalkJobs({ lessonId, matches, notificationJobs, studentId }) {
  if (!lessonId || !studentId) return [];
  return (Array.isArray(notificationJobs) ? notificationJobs : []).filter(
    (job) => job?.lessonId === lessonId && job?.studentId === studentId && matches(job)
  );
}

export function selectReservedAbsenceAlimtalkJobs({
  lessonId = "",
  notificationJobs = [],
  studentId = ""
} = {}) {
  return selectAbsenceAlimtalkJobs({ lessonId, matches: isReservedAbsenceAlimtalkJob, notificationJobs, studentId });
}

// 2026-09-25 · 수업일지 예약 확인 모달의 '출결 결석 알림톡' 구획용. 학생별 요약과 달리 로스터 안/밖을
// 가리지 않고 이 수업의 출결 결석 알림톡 job 전부를 고른다(취소된 것·나간 것 포함 — 상태를 그대로 보여준다).
// 호출부는 이미 lessonId 로 좁혀진 목록을 넘긴다(LessonJournalDetail auditedLessonNotificationJobs).
export function selectLessonManualAbsenceAlimtalkJobs({ notificationJobs = [] } = {}) {
  return (Array.isArray(notificationJobs) ? notificationJobs : []).filter((job) =>
    isManualAbsenceAlimtalkJob(job)
  );
}

export function selectSentAbsenceAlimtalkJobs({
  lessonId = "",
  notificationJobs = [],
  studentId = ""
} = {}) {
  return selectAbsenceAlimtalkJobs({ lessonId, matches: isSentAbsenceAlimtalkJob, notificationJobs, studentId });
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
  const sentJobs = selectSentAbsenceAlimtalkJobs({
    lessonId: lesson?.lessonId ?? "",
    notificationJobs,
    studentId: student?.studentId ?? ""
  });
  return {
    count: jobs.length,
    sentCount: sentJobs.length,
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
  if (!reservedAbsenceAlimtalk?.count && !reservedAbsenceAlimtalk?.sentCount) return false;
  return nextAttendanceStatus !== "absent";
}

export function createReservedAbsenceAlimtalkWarningText({
  nextAttendanceStatus = "",
  reservedAbsenceAlimtalk = null
} = {}) {
  if (!shouldWarnAboutReservedAbsenceAlimtalk({ nextAttendanceStatus, reservedAbsenceAlimtalk })) {
    return "";
  }
  const parts = [];
  if (reservedAbsenceAlimtalk.sentCount) {
    // 2026-09-25 · 이미 나간 것은 취소할 수 없다. 되돌리기와 별개의 사실로 알린다.
    parts.push(`학부모에게 결석 알림톡 ${reservedAbsenceAlimtalk.sentCount}건이 이미 발송됐습니다. 발송은 되돌릴 수 없으니 학부모에게 따로 안내해 주세요.`);
  }
  if (reservedAbsenceAlimtalk.count) {
    const scheduledLabel = reservedAbsenceAlimtalk.scheduledAtLabels.length
      ? ` (예약 ${reservedAbsenceAlimtalk.scheduledAtLabels.join(", ")})`
      : "";
    // 2026-09-25 · 예약 시각이 지난 job 은 알림관리의 '예약' 이 아니라 '확인 필요' 탭에 들어가므로 탭 이름을 적지 않는다.
    parts.push(`예약된 학부모 결석 알림톡 ${reservedAbsenceAlimtalk.count}건이 남아 있습니다${scheduledLabel}. 출결을 바꿔도 이 예약은 자동으로 취소되지 않습니다. 수업일지 ⋮ › 예약 확인 또는 알림관리의 알림톡 발송 기록에서 [예약 취소] 를 눌러 직접 취소하세요.`);
  }
  return parts.join(" ");
}
