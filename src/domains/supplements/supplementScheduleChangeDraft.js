export function getSupplementScheduleTargetLabel(task = {}) {
  return task.taskType === "homework_makeup"
    ? task.supplementHomeworkNote || task.sourceLabel || task.reason || "보충 항목"
    : task.sourceLabel || task.reason || "보충 항목";
}

export function createSupplementScheduleChangeDraft({ getDetailSeed, task } = {}) {
  const targetLabel = getSupplementScheduleTargetLabel(task);
  return {
    scheduleChangeDetail: getDetailSeed(task) || targetLabel,
    scheduleChangeReason: ""
  };
}

export function createSupplementScheduleChangePatch(draft = {}) {
  return {
    scheduleChangeDetail: draft.scheduleChangeDetail,
    scheduleChangeReason: draft.scheduleChangeReason
  };
}
