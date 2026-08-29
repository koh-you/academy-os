import { safeIdPart } from "../../shared/utils/id.js";
import {
  closureMakeupClassName,
  isClosureMakeupLesson
} from "../lessons/newStudentMakeup.js";
import {
  buildSupplementScheduleNoticeJob,
  buildSupplementStudentReminderJob,
  getNextHourlyAlimtalkReservationAt
} from "./supplementJobBuilders.js";

export function formatClosureMakeupSchedule(lesson = {}) {
  return `${lesson.date || "날짜 미정"} ${lesson.startTime || ""}~${lesson.endTime || ""}`.trim();
}

export function buildClosureMakeupNoticeBody({ academyName = "", lesson = {}, student = {}, target = "parent" } = {}) {
  const schedule = formatClosureMakeupSchedule(lesson);
  if (target === "student") {
    return `${student.name || "학생"} 학생 휴강 보충 안내입니다.\n\n일정: ${schedule}\n시간에 맞춰 등원해 주세요.`;
  }
  return `안녕하세요. ${academyName || "으뜸수학 고태영T"}입니다.\n\n${student.name || "학생"} 학생의 휴강 보충 일정을 안내드립니다.\n일정: ${schedule}\n확인 부탁드립니다.`;
}

export function buildClosureMakeupNotificationJobs({
  academyName = "",
  audiences = [],
  includeStudentReminder = true,
  lesson = {},
  now = new Date(),
  students = []
} = {}) {
  if (!isClosureMakeupLesson(lesson)) return [];
  const scheduleNoticeAt = getNextHourlyAlimtalkReservationAt(now);
  const selectedAudienceSet = new Set(audiences);
  const selectedStudentIds = new Set(lesson.studentIds || []);
  return students
    .filter((student) => selectedStudentIds.has(student.studentId))
    .flatMap((student) => {
      const task = {
        linkedLessonId: lesson.lessonId,
        makeupTaskId: `closure_makeup_${lesson.lessonId}_${student.studentId}`,
        scheduledDate: lesson.date,
        scheduledTime: lesson.startTime,
        sourceId: lesson.lessonId,
        taskType: "manual_makeup"
      };
      const scheduleJobs = ["parent", "student"]
        .filter((target) => selectedAudienceSet.has(target))
        .map((target) => {
          const job = buildSupplementScheduleNoticeJob({
            academyName,
            now,
            reminderBody: buildClosureMakeupNoticeBody({ academyName, lesson, student, target }),
            scheduledAt: scheduleNoticeAt,
            scheduleTitle: closureMakeupClassName,
            student,
            target,
            task
          });
          return {
            ...job,
            notificationJobId: `closure_makeup_${target}_${safeIdPart(lesson.lessonId)}_${safeIdPart(student.studentId)}`,
            result: { ...job.result, closureMakeup: true }
          };
        });
      if (!includeStudentReminder || !student.studentPhone) return scheduleJobs;
      const reminderAt = new Date(`${lesson.date}T11:00:00+09:00`);
      if (Number.isNaN(reminderAt.getTime()) || reminderAt.getTime() <= new Date(now).getTime()) return scheduleJobs;
      const reminder = buildSupplementStudentReminderJob({
        academyName,
        now,
        reminderBody: `${student.name || "학생"} 학생, 오늘 ${lesson.startTime || ""} 휴강 보충 수업이 있습니다. 시간에 맞춰 등원해 주세요.`,
        scheduledAt: reminderAt.toISOString(),
        scheduleTitle: closureMakeupClassName,
        student,
        task
      });
      return [...scheduleJobs, {
        ...reminder,
        notificationJobId: `closure_makeup_student_reminder_${safeIdPart(lesson.lessonId)}_${safeIdPart(student.studentId)}`,
        result: { ...reminder.result, closureMakeup: true }
      }];
    });
}

export function formatClosureMakeupReservationSummary(reservedJobs = []) {
  const scheduledCount = reservedJobs.filter((job) => ["scheduled", "sent"].includes(job.status)).length;
  const dryRunCount = reservedJobs.filter((job) => job.status === "dry_run").length;
  const failedCount = reservedJobs.length - scheduledCount - dryRunCount;
  if (failedCount) return ` · 휴강 보충 알림 ${scheduledCount}건 예약, ${failedCount}건 확인 필요`;
  if (dryRunCount) return ` · 휴강 보충 알림 ${dryRunCount}건 안전 모드 기록 완료`;
  return ` · 휴강 보충 알림 ${scheduledCount}건 예약 완료`;
}

export async function reserveClosureMakeupNoticesAction({
  academyName,
  formValues,
  lesson,
  reserveJobs,
  students
} = {}) {
  const jobs = buildClosureMakeupNotificationJobs({
    academyName,
    audiences: formValues.notificationAudiences,
    includeStudentReminder: formValues.includeStudentReminder,
    lesson,
    students
  });
  if (!jobs.length) return " · 알림톡 대상 없음";
  return formatClosureMakeupReservationSummary(await reserveJobs(jobs));
}
