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
