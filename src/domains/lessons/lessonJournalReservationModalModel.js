import {
  canCancelNotificationJob,
  sortNotificationJobsForCurrentStatus
} from "../notifications/notificationJobSelectors.js";
import { formatKoreaTimeFromIso } from "./attendance.js";
import { selectLessonManualAbsenceAlimtalkJobs } from "./reservedAbsenceAlimtalkModel.js";

export function createLessonJournalReservationModalModel({
  auditedJobCount = 0,
  canceledJobCount = 0,
  failedJobCount = 0,
  inspectLabel = "전체 예약",
  reservationAudit = {},
  reservationInspectMode = "all",
  scheduledParentCount = 0,
  scheduledStudentCount = 0,
  solapiResultRefreshState = "idle"
}) {
  return {
    auditMessage: reservationAudit.message || "예약 기준: Academy OS 예약 기록",
    auditRefreshLabel: reservationAudit.state === "loading" ? "조회 중" : "OS 새로고침",
    inspectSummary: `OS 예약 ${auditedJobCount}건`,
    inspectTitle: inspectLabel,
    resultRefreshLabel: solapiResultRefreshState === "loading" ? "확인 중" : "솔라피 발송결과",
    showAllViewAction: reservationInspectMode !== "all",
    summaryCards: [
      { count: scheduledParentCount, label: "OS 학부모 예약", mode: "parentScheduled" },
      { count: scheduledStudentCount, label: "OS 학생 예약", mode: "studentScheduled" },
      { count: canceledJobCount + failedJobCount, label: "취소/실패", mode: "issues" }
    ]
  };
}

// 2026-09-25 · 수업일지 예약 확인 모달의 '출결 결석 알림톡' 구획.
// 출결 체크 모달에서 결석을 저장할 때 예약된 학부모 알림톡(attendance_absence_*)은 학생별
// parent_comment/student_comment 칸(notificationType 으로 고른다)에 한 번도 나오지 않아서,
// 교사가 실수를 알아차리는 자리에서 취소할 수가 없었다. 여기서 행만 만들고 취소는 기존
// onCancelReservationJob 경로가 그대로 한다 — 이 모델은 API 를 부르지 않는다.
export function createLessonJournalAbsenceAlimtalkSectionModel({
  auditedJobs = [],
  cancelingReservationJobId = "",
  lessonStudents = [],
  students = []
} = {}) {
  const absenceJobs = selectLessonManualAbsenceAlimtalkJobs({ notificationJobs: auditedJobs });
  // 로스터 순서를 먼저 따르고, 로스터 밖 학생은 이름순으로 뒤에 붙인다.
  const rosterOrderByStudentId = new Map(
    (Array.isArray(lessonStudents) ? lessonStudents : []).map((student, index) => [student?.studentId, index])
  );
  const nameByStudentId = new Map(
    (Array.isArray(students) ? students : []).map((student) => [student?.studentId, student?.name])
  );
  const resolveStudentName = (job) =>
    job?.payload?.studentName || nameByStudentId.get(job?.studentId) || job?.studentId || "학생";
  const rosterRank = (job) =>
    rosterOrderByStudentId.has(job?.studentId)
      ? rosterOrderByStudentId.get(job.studentId)
      : Number.MAX_SAFE_INTEGER;

  const rows = absenceJobs
    .slice()
    .sort((left, right) => {
      const rankDiff = rosterRank(left) - rosterRank(right);
      if (rankDiff) return rankDiff;
      const nameDiff = resolveStudentName(left).localeCompare(resolveStudentName(right));
      if (nameDiff) return nameDiff;
      return sortNotificationJobsForCurrentStatus(left, right);
    })
    .map((job) => ({
      canCancel: canCancelNotificationJob(job),
      isCanceling: Boolean(cancelingReservationJobId) && cancelingReservationJobId === job.notificationJobId,
      job,
      key: job.notificationJobId,
      // 로스터 밖 예약은 '명단 밖 예약' 상자에서 빠졌으므로(중복 방지) 그 사실을 행에 남긴다.
      outsideRoster: !rosterOrderByStudentId.has(job?.studentId),
      scheduledAtLabel: formatKoreaTimeFromIso(job?.scheduledAt),
      // 공용 상태 문구(formatNotificationJobStatusLabel)는 status "scheduled" 일 때만 예약 시각을
      // 함께 찍는다("예약 중 · 09. 25. 21:00"). 그때 시각을 또 쓰면 한 행에 같은 값이 두 번 나온다.
      // 취소·발송 완료·실패는 시각이 빠지므로 "어느 예약이었는지" 알 수 있게 그때만 덧붙인다.
      showScheduledAtLabel: job?.status !== "scheduled" && Boolean(formatKoreaTimeFromIso(job?.scheduledAt)),
      studentName: resolveStudentName(job)
    }));
  const cancelableCount = rows.filter((row) => row.canCancel).length;

  return {
    cancelableCount,
    // 빈 구획은 렌더하지 않는다.
    countLabel: `전체 ${rows.length}건 · 취소 가능 ${cancelableCount}건`,
    description: "출결 저장이 예약한 학부모 결석 알림톡입니다. 출결을 바꿔도 이 예약은 자동으로 취소되지 않습니다.",
    rows,
    title: "출결 결석 알림톡",
    visible: rows.length > 0
  };
}
