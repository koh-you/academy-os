import { safeIdPart } from "../../shared/utils/id.js";
import {
  buildSupplementScheduleNoticeJob,
  getNextHourlyAlimtalkReservationAt
} from "../notifications/supplementJobBuilders.js";
import {
  isNewStudentMakeupLesson,
  newStudentMakeupClassName
} from "./newStudentMakeup.js";

export function formatNewStudentMakeupSchedule(lesson = {}) {
  return `${lesson.date || "날짜 미정"} ${lesson.startTime || ""}~${lesson.endTime || ""}`.trim();
}

export function buildNewStudentMakeupNoticeBody({ academyName = "", lesson = {}, student = {}, target = "parent" } = {}) {
  const schedule = formatNewStudentMakeupSchedule(lesson);
  if (target === "student") {
    return `${student.name || "학생"} 학생 신입생 보강 안내입니다.\n\n일정: ${schedule}\n확인 후 시간에 맞춰 등원해 주세요.`;
  }
  return `안녕하세요. ${academyName || "으뜸수학 고태영T"}입니다.\n\n${student.name || "학생"} 학생의 신입생 보강 일정을 안내드립니다.\n일정: ${schedule}\n확인 부탁드립니다.`;
}

export function formatNewStudentMakeupReservationSummary(reservedJobs = []) {
  const scheduledCount = reservedJobs.filter((job) => ["scheduled", "sent"].includes(job.status)).length;
  const dryRunCount = reservedJobs.filter((job) => job.status === "dry_run").length;
  const failedCount = reservedJobs.length - scheduledCount - dryRunCount;
  return failedCount > 0
    ? ` · 알림톡 ${scheduledCount}건 예약, ${failedCount}건 확인 필요`
    : dryRunCount > 0
      ? ` · 알림톡 ${dryRunCount}건 안전 모드 기록 완료`
      : ` · 알림톡 ${scheduledCount}건 다음 정각 예약 완료`;
}

export function buildNewStudentMakeupNotificationJobs({
  academyName = "",
  audiences = [],
  lesson = {},
  now = new Date(),
  students = []
} = {}) {
  if (!isNewStudentMakeupLesson(lesson)) return [];
  const scheduledAt = getNextHourlyAlimtalkReservationAt(now);
  const selectedAudienceSet = new Set(audiences);
  const selectedStudentIds = new Set(lesson.studentIds || []);
  return students
    .filter((student) => selectedStudentIds.has(student.studentId))
    .flatMap((student) => ["parent", "student"]
      .filter((target) => selectedAudienceSet.has(target))
      .map((target) => {
        const task = {
          linkedLessonId: lesson.lessonId,
          makeupTaskId: `new_student_makeup_${lesson.lessonId}`,
          scheduledDate: lesson.date,
          scheduledTime: lesson.startTime,
          sourceId: lesson.lessonId
        };
        const reminderBody = buildNewStudentMakeupNoticeBody({ academyName, lesson, student, target });
        const job = buildSupplementScheduleNoticeJob({
          academyName,
          now,
          reminderBody,
          scheduledAt,
          scheduleTitle: newStudentMakeupClassName,
          student,
          target,
          task
        });
        return {
          ...job,
          notificationJobId: `new_student_makeup_${target}_${safeIdPart(lesson.lessonId)}_${safeIdPart(student.studentId)}`,
          result: { ...job.result, newStudentMakeup: true }
        };
      }));
}
