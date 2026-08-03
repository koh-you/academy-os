export async function applySupplementScheduleNotificationsRequest({
  previousScheduleText = "",
  reserveScheduleNotices,
  reserveStudentReminder,
  shouldReserveScheduleNotice = false,
  shouldUpdateStudentReminder = false,
  student,
  task
} = {}) {
  let supplementReminder;
  try {
    supplementReminder = shouldUpdateStudentReminder
      ? await reserveStudentReminder(task)
      : {
        skipped: true,
        status: "notApplied",
        message: "학생 11시 알림톡 예약은 갱신하지 않았습니다. 예약 확인에서 기존 예약이 맞는지 확인하세요."
      };
  } catch (error) {
    return {
      notificationFailed: true,
      notificationFailureMessage: error?.message || "학생 11시 알림톡 예약에 실패했습니다.",
      notificationFailureStage: "studentReminder",
      notificationRetryScope: "provider",
      parentScheduleChangeNoticeSkipped: !shouldReserveScheduleNotice,
      parentScheduleChangeNoticeStatus: shouldReserveScheduleNotice ? "failed" : "notApplied",
      scheduleChangeNoticeSkipped: !shouldReserveScheduleNotice,
      scheduleChangeNoticeStatus: shouldReserveScheduleNotice ? "failed" : "notApplied",
      supplementReminderSkipped: false,
      supplementReminderStatus: "failed"
    };
  }

  let scheduleNotice;
  try {
    scheduleNotice = shouldReserveScheduleNotice
      ? await reserveScheduleNotices(task, student, previousScheduleText)
      : {
        parent: {
          skipped: true,
          status: "notApplied",
          message: shouldUpdateStudentReminder
            ? "현재 일정의 학부모 보충 안내가 이미 예약 또는 발송되어 중복 예약하지 않았습니다."
            : "학부모 보충 일정 안내 예약은 갱신하지 않았습니다."
        },
        scheduledAt: "",
        student: {
          skipped: true,
          status: "notApplied",
          message: shouldUpdateStudentReminder
            ? "현재 일정의 학생 보충 안내가 이미 예약 또는 발송되어 중복 예약하지 않았습니다."
            : "학생 보충 일정 안내 예약은 갱신하지 않았습니다."
        }
      };
  } catch (error) {
    return {
      notificationFailed: true,
      notificationFailureMessage: error?.message || "학생·학부모 일정 안내 예약에 실패했습니다.",
      notificationFailureStage: "scheduleNotices",
      notificationRetryScope: "provider",
      parentScheduleChangeNoticeSkipped: false,
      parentScheduleChangeNoticeStatus: "failed",
      scheduleChangeNoticeSkipped: false,
      scheduleChangeNoticeStatus: "failed",
      supplementReminderJob: supplementReminder.notificationJob ?? null,
      supplementReminderMessage: supplementReminder.message ?? "",
      supplementReminderSkipped: Boolean(supplementReminder.skipped),
      supplementReminderStatus: shouldUpdateStudentReminder
        ? supplementReminder.status || (supplementReminder.skipped ? "resultDue" : "scheduled")
        : "notApplied"
    };
  }

  const scheduleChangeNotice = scheduleNotice.student;
  const parentScheduleChangeNotice = scheduleNotice.parent;
  const scheduleNoticeKind =
    scheduleChangeNotice.notificationJob?.payload?.noticeKind ||
    scheduleChangeNotice.notificationJob?.result?.noticeKind ||
    "";
  const parentScheduleNoticeKind =
    parentScheduleChangeNotice.notificationJob?.payload?.noticeKind ||
    parentScheduleChangeNotice.notificationJob?.result?.noticeKind ||
    "";
  const scheduleChangeNoticeStatus = scheduleChangeNotice.status || (scheduleChangeNotice.skipped ? "notApplied" : "sent");
  const parentScheduleChangeNoticeStatus = parentScheduleChangeNotice.status || (parentScheduleChangeNotice.skipped ? "notApplied" : "sent");
  const supplementReminderStatus = shouldUpdateStudentReminder
    ? supplementReminder.status || (supplementReminder.skipped ? "resultDue" : "scheduled")
    : "notApplied";
  const notificationFailed = [
    scheduleChangeNoticeStatus,
    parentScheduleChangeNoticeStatus,
    supplementReminderStatus
  ].includes("failed");
  return {
    notificationFailed,
    notificationFailureMessage: notificationFailed
      ? "일부 알림톡 예약 결과가 실패로 확인되었습니다."
      : "",
    notificationFailureStage: notificationFailed ? "providerResult" : "",
    notificationRetryScope: notificationFailed ? "provider" : "none",
    scheduleChangeNoticeJob: scheduleChangeNotice.notificationJob ?? null,
    scheduleChangeNoticeMessage: scheduleChangeNotice.message ?? "",
    scheduleChangeNoticeSkipped: Boolean(scheduleChangeNotice.skipped),
    scheduleChangeNoticeStatus,
    scheduleNoticeKind,
    parentScheduleChangeNoticeJob: parentScheduleChangeNotice.notificationJob ?? null,
    parentScheduleChangeNoticeMessage: parentScheduleChangeNotice.message ?? "",
    parentScheduleChangeNoticeSkipped: Boolean(parentScheduleChangeNotice.skipped),
    parentScheduleChangeNoticeStatus,
    parentScheduleNoticeKind,
    supplementReminderJob: supplementReminder.notificationJob ?? null,
    supplementReminderMessage: supplementReminder.message ?? "",
    supplementReminderSkipped: Boolean(supplementReminder.skipped),
    supplementReminderStatus
  };
}
