import {
  supplementNotificationDraftConfigs,
  supplementTeacherFinalFields
} from "./supplementTaskDraft.js";

export function createSupplementNotificationDraftTabConfigs({
  configs = supplementNotificationDraftConfigs,
  notificationJobs = [],
  task = {}
} = {}, {
  getControlDisplay,
  getControlJob
} = {}) {
  return configs.map((config) => ({
    ...config,
    display: getControlDisplay(getControlJob(task, notificationJobs, config.controlType))
  }));
}

export function createSupplementTaskCardViewModel({
  draftDiff = [],
  draftValues = {},
  getMethodLabel,
  methodOptions = [],
  saveStatus = {},
  task = {}
} = {}) {
  const supplementHomeworkNote = draftValues.supplementHomeworkNote ?? "";
  const showMethodOptions = methodOptions.length > 1;
  const hasScheduleDraft = Boolean(draftValues.scheduledDate && draftValues.scheduledTime);
  const hasScheduleDiff = draftDiff.some((item) => ["scheduledDate", "scheduledTime"].includes(item.field));
  const hasNotificationDiff = draftDiff.some((item) => supplementTeacherFinalFields.has(item.field));
  const hasAnyNotificationDraft = supplementNotificationDraftConfigs.some((config) => draftValues[config.field]);
  const isScheduleChangeMode = Boolean(task.linkedLessonId);
  const taskMetaParts = [
    task.reason,
    showMethodOptions ? getMethodLabel({ ...task, supplementMethod: draftValues.supplementMethod }) : "",
    `배정 ${task.attemptCount ?? 0}회`
  ].filter(Boolean);
  const scheduleGateBody = isScheduleChangeMode
    ? hasScheduleDiff
      ? "수업일지 일정 변경을 누르면 학생·학부모 변경 안내를 다음 정각에 예약하고, 보강 당일 학생 11시 예약을 갱신합니다."
      : "날짜나 시간이 바뀌지 않으면 변경 안내 예약은 새로 만들지 않습니다. 일정만 다시 저장됩니다."
    : hasScheduleDraft
      ? "수업일지 일정 만들기를 누르면 학생·학부모 확정 안내를 다음 정각에 예약하고, 보강 당일 학생 11시 예약을 만듭니다."
      : "시간까지 입력하면 수업일지 일정 만들기 버튼으로 확정 안내 예약을 만들 수 있습니다.";

  return {
    hasScheduleDraft,
    hasSavedNotificationDrafts: supplementNotificationDraftConfigs.every(
      (config) => String(task[config.field] ?? "").trim()
    ),
    saveSummaryProps: {
      draftDiff,
      lessonStatus: saveStatus.lesson || (
        hasScheduleDiff ? "changed" : task.linkedLessonId ? "synced" : hasScheduleDraft ? "ready" : "empty"
      ),
      makeupStatus: saveStatus.makeupTask || (draftDiff.length ? "changed" : "saved"),
      notificationStatus: saveStatus.notificationDraft || (
        hasNotificationDiff ? "changed" : hasAnyNotificationDraft ? "saved" : "empty"
      )
    },
    scheduleEditorProps: {
      methodOptions,
      scheduledDate: draftValues.scheduledDate,
      scheduledTime: draftValues.scheduledTime,
      selectedMethod: draftValues.supplementMethod,
      showMethodOptions
    },
    scheduleGateProps: {
      body: scheduleGateBody,
      isScheduleChangeMode,
      title: isScheduleChangeMode ? "기존 일정 변경" : "최초 일정 확정"
    },
    sourceContextProps: {
      absenceLessonContent: task.sourceLessonContent || "",
      absenceLessonMaterial: task.sourceLessonMaterial || "",
      absenceNextHomework: task.sourceNextHomework || "",
      absencePreviousHomework: task.sourcePreviousHomework || supplementHomeworkNote || "",
      absenceSourceDate: task.sourceDate || task.lessonDate || "",
      absenceSourceLabel: task.sourceLessonLabel || task.sourceLabel || "원 결석 수업",
      sourceDate: task.sourceDate || task.sourceAssignedDate || task.lessonDate || "",
      sourceDueDate: task.sourceDueDate || task.homeworkDueDate || "",
      sourceHomeworkTitle: task.sourceLabel || task.title || task.reason || "기록 없음",
      supplementHomeworkNote,
      taskType: task.taskType
    },
    taskMeta: taskMetaParts.join(" · ")
  };
}
