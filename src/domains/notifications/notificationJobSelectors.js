import { normalizeTimeInput } from "../lessons/attendance.js";
import { getSupplementStudentReminderJobId } from "./supplementJobBuilders.js";

export function getNotificationJobPriority(job = {}) {
  if (job.status === "scheduled") return 0;
  if (job.status === "queued" || job.status === "pending_send") return 1;
  if (job.status === "sent" || job.status === "send_unconfirmed") return 2;
  if (job.status === "failed") return 3;
  if (job.status === "canceled") return 4;
  return 5;
}

export function sortNotificationJobsForCurrentStatus(left = {}, right = {}) {
  const priorityDiff = getNotificationJobPriority(left) - getNotificationJobPriority(right);
  if (priorityDiff) return priorityDiff;
  return String(right.updatedAt || right.createdAt || right.scheduledAt || "").localeCompare(
    String(left.updatedAt || left.createdAt || left.scheduledAt || "")
  );
}

export function getSupplementStudentReminderJob(task = {}, notificationJobs = []) {
  const notificationJobId = getSupplementStudentReminderJobId(task);
  if (!notificationJobId) return null;
  return notificationJobs.find((job) => job.notificationJobId === notificationJobId) ?? null;
}

export function getSupplementScheduleNoticeJob(task = {}, notificationJobs = [], target = "student") {
  const makeupTaskId = task.makeupTaskId || "";
  const scheduleTime = normalizeTimeInput(task.scheduledTime);
  if (!makeupTaskId || !task.scheduledDate || !scheduleTime) return null;
  return notificationJobs
    .filter((job) => {
      const payload = job.payload ?? {};
      const result = job.result && typeof job.result === "object" ? job.result : {};
      const jobMakeupTaskId = payload.makeupTaskId || result.makeupTaskId || "";
      if (jobMakeupTaskId !== makeupTaskId || payload.scheduleType !== "supplement") return false;
      if (payload.scheduleDate !== task.scheduledDate || normalizeTimeInput(payload.scheduleTime) !== scheduleTime) return false;
      if (target === "parent") return ["notice_parent", "parent_comment"].includes(job.notificationType);
      return job.notificationType === "schedule_reminder";
    })
    .sort(sortNotificationJobsForCurrentStatus)[0] ?? null;
}

export function getSupplementNotificationControlJob(task = {}, notificationJobs = [], controlType = "studentSchedule") {
  if (controlType === "studentReminder") return getSupplementStudentReminderJob(task, notificationJobs);
  return getSupplementScheduleNoticeJob(task, notificationJobs, controlType === "parentSchedule" ? "parent" : "student");
}
