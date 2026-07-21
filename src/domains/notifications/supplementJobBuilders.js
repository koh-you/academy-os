import { safeIdPart } from "../../shared/utils/id.js";

export function isSupplementStudentReminderTask(task = {}) {
  return ["homework_makeup", "absence_makeup"].includes(task.taskType);
}

export function getSupplementStudentReminderJobId(task = {}) {
  if (!isSupplementStudentReminderTask(task)) return "";
  const taskId = task.makeupTaskId || task.sourceId || "";
  if (!taskId || !task.studentId) return "";
  return `supplement_student_reminder_${safeIdPart(taskId)}_${safeIdPart(task.studentId)}`;
}

export function getSupplementStudentReminderScheduledAt(task = {}) {
  if (!isSupplementStudentReminderTask(task) || !task.scheduledDate) return "";
  const scheduledAt = new Date(`${task.scheduledDate}T11:00:00+09:00`);
  return Number.isNaN(scheduledAt.getTime()) ? "" : scheduledAt.toISOString();
}

export function getNextHourlyAlimtalkReservationAt(now = new Date(), minimumLeadMinutes = 5) {
  const base = new Date(now);
  if (Number.isNaN(base.getTime())) return "";
  const scheduled = new Date(base);
  scheduled.setUTCMinutes(0, 0, 0);
  scheduled.setUTCHours(scheduled.getUTCHours() + 1);
  if (scheduled.getTime() - base.getTime() < Math.max(1, minimumLeadMinutes) * 60 * 1000) {
    scheduled.setUTCHours(scheduled.getUTCHours() + 1);
  }
  return scheduled.toISOString();
}

export function buildSupplementStudentReminderJob({
  academyName = "",
  now = new Date(),
  reminderBody = "",
  scheduledAt = "",
  scheduleTitle = "",
  student = {},
  task = {}
} = {}) {
  const payload = {
    academyName,
    makeupTaskId: task.makeupTaskId,
    notificationType: "student_reminder",
    reminderBody,
    scheduleDate: task.scheduledDate,
    scheduledDate: scheduledAt,
    scheduleTime: task.scheduledTime,
    scheduleTitle,
    scheduleType: "supplement",
    sendMode: "scheduled",
    studentId: student.studentId,
    studentName: student.name,
    studentPhone: student.studentPhone,
    target: "student"
  };
  return {
    notificationJobId: getSupplementStudentReminderJobId(task),
    notificationType: "student_reminder",
    studentId: student.studentId,
    lessonId: task.linkedLessonId || "",
    lessonStudentRecordId: "",
    target: "student",
    recipient: student.studentPhone,
    scheduledAt,
    payload,
    previewBody: reminderBody || `오늘 ${scheduleTitle} 일정이 있습니다. ${task.scheduledDate} ${task.scheduledTime || ""}`.trim(),
    status: "scheduled",
    provider: "academy-os-reserving",
    result: { reservationPending: true, makeupTaskId: task.makeupTaskId },
    error: "",
    createdAt: new Date(now).toISOString()
  };
}

export function buildSupplementScheduleNoticeJob({
  academyName = "",
  now = new Date(),
  previousScheduleText = "",
  reminderBody = "",
  scheduledAt = "",
  scheduleTitle = "",
  student = {},
  target = "student",
  task = {}
} = {}) {
  const createdAt = new Date(now);
  const createdAtMs = createdAt.getTime();
  const isParent = target === "parent";
  const isScheduleChange = Boolean(String(previousScheduleText ?? "").trim());
  const noticeKind = isScheduleChange ? "supplement_schedule_change" : "supplement_schedule_confirm";
  const notificationType = isParent ? "notice_parent" : "schedule_reminder";
  const scheduleNoticeTitle = `${scheduleTitle} 일정 안내`;
  const payload = isParent
    ? {
        academyName,
        commentBodyOverride: reminderBody,
        lessonDate: task.scheduledDate,
        lessonName: scheduleNoticeTitle,
        makeupTaskId: task.makeupTaskId,
        message: reminderBody,
        noticeBody: reminderBody,
        noticeKind,
        noticeTitle: scheduleNoticeTitle,
        notificationType,
        parentPhone: student.parentPhone,
        scheduleDate: task.scheduledDate,
        scheduledDate: scheduledAt,
        scheduleTime: task.scheduledTime,
        scheduleTitle: scheduleNoticeTitle,
        scheduleType: "supplement",
        sendMode: "scheduled",
        studentId: student.studentId,
        studentName: student.name,
        studentPhone: student.studentPhone,
        target: "parent"
      }
    : {
        academyName,
        makeupTaskId: task.makeupTaskId,
        noticeKind,
        notificationType,
        reminderBody,
        scheduleDate: task.scheduledDate,
        scheduledDate: scheduledAt,
        scheduleTime: task.scheduledTime,
        scheduleTitle: scheduleNoticeTitle,
        scheduleType: "supplement",
        sendMode: "scheduled",
        studentId: student.studentId,
        studentName: student.name,
        studentPhone: student.studentPhone,
        target: "student"
      };
  return {
    notificationJobId: `supplement_${target}_schedule_notice_${safeIdPart(task.makeupTaskId || task.sourceId || "task")}_${safeIdPart(student.studentId || "student")}_${createdAtMs}`,
    notificationType,
    studentId: student.studentId,
    lessonId: task.linkedLessonId || "",
    lessonStudentRecordId: "",
    target: isParent ? "parent" : "student",
    recipient: isParent ? student.parentPhone : student.studentPhone,
    scheduledAt,
    payload,
    previewBody: reminderBody,
    status: "scheduled",
    provider: "academy-os-reserving",
    result: {
      makeupTaskId: task.makeupTaskId,
      noticeKind,
      previousScheduleText,
      reservationPending: true,
      scheduleNotice: true
    },
    error: "",
    createdAt: createdAt.toISOString()
  };
}
