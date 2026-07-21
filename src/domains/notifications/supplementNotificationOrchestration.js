import {
  buildSupplementScheduleNoticeJob,
  buildSupplementStudentReminderJob,
  getNextHourlyAlimtalkReservationAt,
  getSupplementStudentReminderJobId,
  getSupplementStudentReminderScheduledAt,
  isSupplementStudentReminderTask
} from "./supplementJobBuilders.js";
import {
  canCancelNotificationJob,
  getCancelableSupplementTargetJobs,
  getSupplementScheduleNoticeJob
} from "./notificationJobSelectors.js";

export async function reserveSupplementNotificationControlRequest({
  academyName,
  cancelNotificationJob,
  cancelNotificationJobs,
  controlType,
  getDraftField,
  getNoticeDraft,
  getScheduleTitle,
  getScheduledAt = getNextHourlyAlimtalkReservationAt,
  isTeacherEditedField,
  notificationJobs = [],
  notificationTemplates = {},
  reserveScheduleNoticeJob,
  reserveStudentReminder,
  student,
  task
} = {}) {
  if (!task?.makeupTaskId || !isSupplementStudentReminderTask(task)) {
    throw new Error("예약할 보충 일정 정보를 찾지 못했습니다.");
  }
  if (!student) throw new Error("학생 정보를 찾지 못했습니다.");

  const notificationDraftField = getDraftField(controlType);
  if (isTeacherEditedField(task, notificationDraftField) && !String(task[notificationDraftField] ?? "").trim()) {
    throw new Error("선생님 최종 알림톡 문구가 비어 있습니다. 문구를 입력하고 저장한 뒤 예약해 주세요.");
  }

  if (controlType === "studentReminder") {
    const result = await reserveStudentReminder(task);
    if (result.skipped || result.status !== "scheduled") {
      throw new Error(result.message || "당일 학생 11시 알림톡을 예약하지 못했습니다.");
    }
    return result;
  }

  const target = controlType === "parentSchedule" ? "parent" : "student";
  const existingJob = getSupplementScheduleNoticeJob(task, notificationJobs, target);
  if (existingJob?.status === "sent") {
    throw new Error("현재 일정 안내는 이미 발송 완료되어 다시 예약하지 않습니다.");
  }
  if (existingJob && canCancelNotificationJob(existingJob)) {
    return {
      notificationJob: existingJob,
      skipped: false,
      status: "scheduled",
      message: `${target === "parent" ? "학부모" : "학생"} 알림톡이 이미 예약되어 있습니다.`
    };
  }

  const activeTargetJobs = getCancelableSupplementTargetJobs(task, notificationJobs, target);
  await cancelNotificationJobs({
    cancelNotificationJob,
    notificationJobs: activeTargetJobs,
    reason: "보충관리 개별 알림톡 재예약"
  });

  const scheduledAt = getScheduledAt();
  const notificationJob = buildSupplementScheduleNoticeJob({
    academyName,
    previousScheduleText: "",
    reminderBody: getNoticeDraft(task, target, "", notificationTemplates),
    scheduledAt,
    scheduleTitle: getScheduleTitle(task),
    student,
    target,
    task
  });
  const result = await reserveScheduleNoticeJob(
    notificationJob,
    `${target === "parent" ? "학부모" : "학생"} 보충 일정 안내 예약 실패`
  );
  if (result.status !== "scheduled") throw new Error(result.message || "알림톡을 예약하지 못했습니다.");
  return result;
}

export async function cancelSupplementStudentReminderRequest({
  cancelNotificationJob,
  isActiveNotificationJob,
  notificationJobs = [],
  onError = () => {},
  reason = "보충 완료 처리",
  task
} = {}) {
  if (!isSupplementStudentReminderTask(task)) return null;
  const notificationJobId = getSupplementStudentReminderJobId(task);
  if (!notificationJobId) return null;
  const existingJob = notificationJobs.find((job) => job.notificationJobId === notificationJobId);
  if (existingJob && !isActiveNotificationJob(existingJob)) return existingJob;
  try {
    const result = await cancelNotificationJob(existingJob || { notificationJobId }, reason);
    return result.notificationJob ?? null;
  } catch (error) {
    onError(error);
    return null;
  }
}

export async function cancelSupplementNotificationControlRequest({
  canCancelNotificationJob,
  cancelNotificationJob,
  notificationJob
} = {}) {
  if (!notificationJob || !canCancelNotificationJob(notificationJob)) {
    throw new Error("현재 취소할 수 있는 Solapi 예약이 없습니다.");
  }
  const result = await cancelNotificationJob(notificationJob, "보충관리 개별 알림톡 예약 취소");
  return {
    notificationJob: result.notificationJob,
    status: result.notificationJob?.status || "canceled",
    message: "Solapi 예약을 취소했습니다."
  };
}

export async function reserveSupplementScheduleNoticesRequest({
  academyName,
  cancelActiveNotices,
  getNoticeDraft,
  getScheduleTitle,
  getScheduledAt = getNextHourlyAlimtalkReservationAt,
  notificationTemplates = {},
  previousScheduleText = "",
  reserveScheduleNoticeJob,
  student,
  task
} = {}) {
  if (!isSupplementStudentReminderTask(task)) {
    return {
      parent: { skipped: true, status: "notApplied", message: "학부모 보충 일정 안내 대상이 아닙니다." },
      scheduledAt: "",
      student: { skipped: true, status: "notApplied", message: "학생 보충 일정 안내 대상이 아닙니다." }
    };
  }
  if (!student) {
    return {
      parent: { skipped: true, status: "failed", message: "학생 정보를 찾지 못해 학부모 보충 일정 안내를 예약하지 않았습니다." },
      scheduledAt: "",
      student: { skipped: true, status: "failed", message: "학생 정보를 찾지 못해 학생 보충 일정 안내를 예약하지 않았습니다." }
    };
  }

  await cancelActiveNotices(task);
  const scheduledAt = getScheduledAt();
  const scheduleTitle = getScheduleTitle(task);
  const studentJob = buildSupplementScheduleNoticeJob({
    academyName,
    previousScheduleText,
    reminderBody: getNoticeDraft(task, "student", previousScheduleText, notificationTemplates),
    scheduledAt,
    scheduleTitle,
    student,
    target: "student",
    task
  });
  const parentJob = buildSupplementScheduleNoticeJob({
    academyName,
    previousScheduleText,
    reminderBody: getNoticeDraft(task, "parent", previousScheduleText, notificationTemplates),
    scheduledAt,
    scheduleTitle,
    student,
    target: "parent",
    task
  });
  const [studentNotice, parentNotice] = await Promise.all([
    reserveScheduleNoticeJob(studentJob, "학생 보충 일정 안내 예약 실패"),
    reserveScheduleNoticeJob(parentJob, "학부모 보충 일정 안내 예약 실패")
  ]);
  return { parent: parentNotice, scheduledAt, student: studentNotice };
}

export async function reserveSupplementStudentReminderJobRequest({
  academyName,
  formatScheduledAt,
  getScheduleTitle,
  isSchedulePast,
  normalizeMessage,
  reserveNotificationJob,
  student,
  task,
  teacherEditedDraft = false
} = {}) {
  if (!isSupplementStudentReminderTask(task)) {
    return { skipped: true, message: "학생 11시 알림톡 대상이 아닙니다." };
  }
  if (teacherEditedDraft && !String(task.notificationDraft ?? "").trim()) {
    return {
      skipped: true,
      status: "notApplied",
      message: "선생님 최종 알림톡 문구가 비어 있어 학생 11시 알림톡을 예약하지 않았습니다."
    };
  }

  const scheduledAt = getSupplementStudentReminderScheduledAt(task);
  if (!student) {
    return { skipped: true, message: "학생 정보를 찾지 못해 11시 알림톡을 예약하지 않았습니다." };
  }
  if (!scheduledAt) {
    return { skipped: true, message: "배정일이 없어 11시 알림톡을 예약하지 않았습니다." };
  }
  if (isSchedulePast(scheduledAt, 0)) {
    return { skipped: true, message: "보강 당일 11:00이 이미 지나 새 예약을 만들지 않았습니다." };
  }

  const notificationJob = buildSupplementStudentReminderJob({
    academyName,
    reminderBody: normalizeMessage(task.notificationDraft),
    scheduledAt,
    scheduleTitle: getScheduleTitle(task),
    student,
    task
  });
  const reservedJob = await reserveNotificationJob(notificationJob, "보충관리 학생 11시 알림톡 예약");
  const isReserved = reservedJob?.status === "scheduled" || reservedJob?.status === "dry_run";
  return {
    notificationJob: reservedJob,
    skipped: false,
    status: isReserved ? "scheduled" : reservedJob?.status || "resultDue",
    message: isReserved
      ? `학생 11시 알림톡 예약 완료 · ${formatScheduledAt(reservedJob.scheduledAt)}`
      : reservedJob?.error || "학생 11시 알림톡 예약 상태를 확인하세요."
  };
}

export async function reserveSupplementScheduleNoticeJobRequest({
  formatScheduledAt,
  missingMessagePrefix,
  normalizeRecipient,
  notificationJob,
  persistFailure,
  reserveNotificationJob
} = {}) {
  const recipient = normalizeRecipient(notificationJob?.recipient || "");
  if (!recipient) {
    return persistFailure(notificationJob, missingMessagePrefix, "수신 연락처가 없습니다.");
  }

  const reservedJob = await reserveNotificationJob(
    notificationJob,
    "보충관리 학생·학부모 다음 정각 안내 예약"
  );
  const scheduledLabel = formatScheduledAt(reservedJob?.scheduledAt || notificationJob.scheduledAt);
  const isReserved = reservedJob?.status === "scheduled" || reservedJob?.status === "dry_run";
  const isScheduleChange = notificationJob.payload?.noticeKind === "supplement_schedule_change";
  const noticeKindLabel = isScheduleChange ? "변경 안내" : "확정 안내";
  const noticeLabel = `${notificationJob.target === "parent" ? "학부모 보충 일정" : "학생 보충 일정"} ${noticeKindLabel}`;

  return {
    notificationJob: reservedJob,
    skipped: false,
    status: isReserved ? "scheduled" : reservedJob?.status || "resultDue",
    message: isReserved
      ? `${noticeLabel} 예약 완료 · ${scheduledLabel}`
      : reservedJob?.error || `${noticeLabel} 예약 상태를 확인하세요.`
  };
}
