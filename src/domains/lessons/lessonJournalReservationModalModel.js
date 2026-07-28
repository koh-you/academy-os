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
