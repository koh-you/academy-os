import {
  canCancelNotificationJob,
  sortNotificationJobsForCurrentStatus
} from "../notifications/notificationJobSelectors.js";

export const lessonJournalReservationInspectLabels = {
  all: "전체 예약",
  issues: "취소/실패",
  parentScheduled: "OS 학부모 예약",
  studentScheduled: "OS 학생 예약"
};

export function getLessonJournalStudentReservationStatus(
  auditedJobs = [],
  student = {},
  target = "parent"
) {
  const notificationType =
    target === "student" ? "student_comment" : "parent_comment";
  return (
    auditedJobs
      .filter(
        (job) =>
          job.studentId === student.studentId &&
          job.notificationType === notificationType
      )
      .sort(sortNotificationJobsForCurrentStatus)[0] ?? null
  );
}

export function createLessonJournalReservationAuditModel({
  auditedJobs = [],
  lessonStudents = [],
  reservationInspectMode = "all"
} = {}) {
  const lessonStudentIdSet = new Set(
    lessonStudents.map((student) => student.studentId)
  );
  const getStudentReservationStatus = (student, target) =>
    getLessonJournalStudentReservationStatus(auditedJobs, student, target);
  const scheduledParentCount = auditedJobs.filter(
    (job) =>
      job.notificationType === "parent_comment" && job.status === "scheduled"
  ).length;
  const scheduledStudentCount = auditedJobs.filter(
    (job) =>
      job.notificationType === "student_comment" && job.status === "scheduled"
  ).length;
  const sentParentCount = auditedJobs.filter(
    (job) => job.notificationType === "parent_comment" && job.status === "sent"
  ).length;
  const sentStudentCount = auditedJobs.filter(
    (job) => job.notificationType === "student_comment" && job.status === "sent"
  ).length;
  const canceledJobCount = auditedJobs.filter(
    (job) => job.status === "canceled"
  ).length;
  const failedJobCount = auditedJobs.filter(
    (job) => job.status === "failed"
  ).length;
  const orphanScheduledJobs = auditedJobs
    .filter(
      (job) =>
        canCancelNotificationJob(job) &&
        job.studentId &&
        !lessonStudentIdSet.has(job.studentId)
    )
    .sort(sortNotificationJobsForCurrentStatus);
  const issueReservationJobs = auditedJobs
    .filter((job) => job.status === "canceled" || job.status === "failed")
    .sort(sortNotificationJobsForCurrentStatus);
  const visibleReservationStudents =
    reservationInspectMode === "all"
      ? lessonStudents
      : lessonStudents.filter((student) => {
          const parentJob = getStudentReservationStatus(student, "parent");
          const studentJob = getStudentReservationStatus(student, "student");
          if (reservationInspectMode === "parentScheduled") {
            return parentJob?.status === "scheduled";
          }
          if (reservationInspectMode === "studentScheduled") {
            return studentJob?.status === "scheduled";
          }
          if (reservationInspectMode === "issues") {
            return (
              parentJob?.status === "canceled" ||
              parentJob?.status === "failed" ||
              studentJob?.status === "canceled" ||
              studentJob?.status === "failed"
            );
          }
          return true;
        });

  return {
    canceledJobCount,
    failedJobCount,
    getStudentReservationStatus,
    issueReservationJobs,
    orphanScheduledJobs,
    reservationInspectLabels: lessonJournalReservationInspectLabels,
    scheduledParentCount,
    scheduledStudentCount,
    sentParentCount,
    sentStudentCount,
    shouldShowIssueAudit: reservationInspectMode === "issues",
    visibleReservationStudents
  };
}
