export async function saveSupplementTaskContentAction({
  currentLessonStatus = "",
  onFeedback,
  onMarkSaved,
  onSaveStatus,
  saveTask,
  task,
  taskWithDraft
}) {
  onSaveStatus({ makeupTask: "saving", notificationDraft: "saving" });
  onFeedback({
    message: "원 숙제 카드와 알림톡 문구 3종을 저장합니다. 수업일지 일정과 Solapi 예약은 아직 변경하지 않습니다.",
    title: "보충 내용·알림톡 저장 중",
    tone: "saving"
  });

  try {
    const savedTask = await saveTask(taskWithDraft);
    const nextTask = savedTask ?? taskWithDraft;
    onMarkSaved(nextTask);
    onSaveStatus({
      lesson: nextTask.linkedLessonId && nextTask.needsLessonResync ? "changed" : currentLessonStatus,
      makeupTask: "saved",
      notificationDraft: "saved"
    });
    onFeedback({
      message: "원 숙제 카드와 알림톡 문구 3종을 저장하고 Supabase 재확인까지 마쳤습니다. Solapi 예약은 별도 확인 버튼으로 진행합니다.",
      title: "보충 내용·알림톡 저장 완료",
      tone: "success"
    });
    return nextTask;
  } catch (error) {
    onSaveStatus({ makeupTask: "failed", notificationDraft: "failed" });
    onFeedback({
      message: error?.message || "알 수 없는 오류가 발생했습니다.",
      title: "보충 저장 실패",
      tone: "failed"
    });
    throw error;
  }
}

export async function passSupplementTaskAction({
  onClose,
  onFeedback,
  onResetConfirmation,
  passTask,
  studentName,
  taskWithDraft
}) {
  onFeedback({
    message: `${studentName} 학생의 보충 항목을 완료 처리하고 있습니다.`,
    title: "보충 완료 처리 중",
    tone: "saving"
  });

  try {
    const savedTask = await passTask(taskWithDraft);
    onFeedback({
      message: `${studentName} 학생의 보충 항목을 완료 처리했습니다.`,
      title: "보충 완료 처리 완료",
      tone: "success"
    });
    onResetConfirmation();
    onClose();
    return savedTask ?? taskWithDraft;
  } catch (error) {
    onFeedback({
      message: error?.message || "알 수 없는 오류가 발생했습니다.",
      title: "보충 완료 처리 실패",
      tone: "failed"
    });
    throw error;
  }
}

export async function cancelSupplementAbsenceSourceAction({
  cancelSource,
  onClose,
  onFeedback,
  task
}) {
  onFeedback({
    message: "원 수업일지 출결을 대기 상태로 되돌리고 보충 생성 후보를 정리합니다.",
    title: "결석 처리 취소 중",
    tone: "saving"
  });

  try {
    const savedRecord = await cancelSource(task);
    onFeedback({
      message: "원 수업일지 출결이 대기 상태로 돌아갔습니다. 이 결석보강 후보는 목록에서 사라집니다.",
      title: "결석 처리 취소 완료",
      tone: "success"
    });
    onClose();
    return savedRecord;
  } catch (error) {
    onFeedback({
      message: error?.message || "원 수업일지 출결을 되돌리지 못했습니다.",
      title: "결석 처리 취소 실패",
      tone: "failed"
    });
    throw error;
  }
}

export async function applySupplementScheduleAction({
  getImmediateNoticeStatus,
  onFeedback,
  onMarkSaved,
  onResetConfirmation,
  onSaveStatus,
  scheduleTask,
  task,
  taskWithDraft
}) {
  const isScheduleChange = Boolean(task.linkedLessonId);
  const shouldUpdateStudentReminder = !taskWithDraft.skipStudentReminder && !taskWithDraft.suppressStudentReminder;
  onSaveStatus({
    lesson: "saving",
    makeupTask: "saving",
    notificationDraft: "saving",
    parentChangeNotice: "saving",
    studentChangeNotice: "saving",
    studentReminder: "saving"
  });
  onFeedback({
    message: shouldUpdateStudentReminder
      ? isScheduleChange
        ? "보충관리 저장 후 학생·학부모에게 다음 정각 일정 안내를 예약하고, 보강 당일 11시 학생 알림톡 예약도 함께 갱신합니다."
        : "보충관리 저장 후 수업일지 일정을 만들고, 학생·학부모 다음 정각 안내와 보강 당일 11시 학생 예약을 함께 확인합니다."
      : "보충관리 저장 후 수업일지 일정만 저장합니다. 학생 11시 알림톡 예약은 변경하지 않습니다.",
    title: "수업일지 일정 저장 중",
    tone: "saving"
  });

  try {
    const result = await scheduleTask(taskWithDraft);
    const nextTask = result?.makeupTask ?? taskWithDraft;
    const scheduleNoticeLabel = isScheduleChange ? "변경 안내" : "확정 안내";
    onMarkSaved(nextTask);
    onSaveStatus({
      lesson: "synced",
      makeupTask: "saved",
      notificationDraft: "saved",
      parentChangeNotice: getImmediateNoticeStatus(result?.parentScheduleChangeNoticeStatus, result?.parentScheduleChangeNoticeSkipped),
      parentScheduleNoticeLabel: `학부모 ${scheduleNoticeLabel}`,
      studentChangeNotice: getImmediateNoticeStatus(result?.scheduleChangeNoticeStatus, result?.scheduleChangeNoticeSkipped),
      studentScheduleNoticeLabel: `학생 ${scheduleNoticeLabel}`,
      studentReminder: result?.supplementReminderStatus || (result?.supplementReminderSkipped ? "resultDue" : "scheduled")
    });
    onResetConfirmation();
    onFeedback({
      message: [
        `${nextTask.scheduledDate} ${nextTask.scheduledTime} 보충 일정이 수업일지에 반영되었습니다.`,
        result?.scheduleChangeNoticeSkipped ? "" : result?.scheduleChangeNoticeMessage,
        result?.parentScheduleChangeNoticeSkipped ? "" : result?.parentScheduleChangeNoticeMessage,
        result?.supplementReminderMessage || "학생 11시 알림톡 예약 상태를 확인하세요."
      ].filter(Boolean).join(" "),
      title: isScheduleChange ? "수업일지 일정 변경 완료" : "수업일지 일정 만들기 완료",
      tone: "success"
    });
    return result;
  } catch (error) {
    onSaveStatus({
      lesson: "failed",
      makeupTask: "failed",
      notificationDraft: "failed",
      parentChangeNotice: "failed",
      studentChangeNotice: "failed",
      studentReminder: "failed"
    });
    onFeedback({
      message: error?.message || "알 수 없는 오류가 발생했습니다.",
      title: "수업일지 일정 저장 실패",
      tone: "failed"
    });
    throw error;
  }
}
