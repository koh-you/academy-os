import {
  canCancelNotificationJob,
  sortNotificationJobsForCurrentStatus
} from "../notifications/notificationJobSelectors.js";
import { isManualAbsenceAlimtalkJob } from "./reservedAbsenceAlimtalkModel.js";

// 2026-09-25 · 출결 결석 알림톡(attendance_absence_*)은 예약 확인 모달의 전용 구획에서만 그린다.
// 학생별 칸은 notificationType 으로 parent_comment/student_comment 만 고르니 원래 겹치지 않지만,
// '명단 밖 예약' 상자와 '취소/실패' 목록은 notificationType 을 보지 않아 같은 job 을 두 번 그렸다.
// 카드 개수도 그 목록과 같은 기준으로 세야 "취소/실패 1건" 인데 목록이 비는 일이 없다.
const isNonAbsenceJob = (job) => !isManualAbsenceAlimtalkJob(job);

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
    (job) => job.status === "canceled" && isNonAbsenceJob(job)
  ).length;
  const failedJobCount = auditedJobs.filter(
    (job) => job.status === "failed" && isNonAbsenceJob(job)
  ).length;
  const orphanScheduledJobs = auditedJobs
    .filter(
      (job) =>
        canCancelNotificationJob(job) &&
        job.studentId &&
        !lessonStudentIdSet.has(job.studentId) &&
        isNonAbsenceJob(job)
    )
    .sort(sortNotificationJobsForCurrentStatus);
  const issueReservationJobs = auditedJobs
    .filter(
      (job) => (job.status === "canceled" || job.status === "failed") && isNonAbsenceJob(job)
    )
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
