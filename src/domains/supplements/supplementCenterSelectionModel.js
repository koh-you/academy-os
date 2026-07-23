export function getSupplementActionKey(task = {}) {
  return [task.taskType, task.studentId, task.sourceId].filter(Boolean).join(":");
}

export function findSupplementTaskForCandidate(tasks = [], candidateTask = {}) {
  return tasks.find(
    (task) =>
      task.studentId === candidateTask.studentId &&
      task.sourceId === candidateTask.sourceId &&
      task.taskType === candidateTask.taskType
  );
}

export function createPendingSupplementTask(
  task = {},
  {
    createdAt = "",
    scheduledDate = "",
    taskId = ""
  } = {}
) {
  return {
    makeupTaskId: taskId,
    status: "draft",
    scheduledDate,
    scheduledTime: "",
    supplementHomeworkNote: task.supplementHomeworkNote || task.sourceLabel || "",
    notificationDraft: "",
    attemptCount: 0,
    childHomeworkIds: [],
    createdAt,
    isLocalDraftTask: true,
    ...task
  };
}

export function createSelectedSupplementTasksViewModel({
  activeTaskType = "",
  hydrateTask = (task) => task,
  pendingTask = null,
  selectedStudentId = "",
  selectedTaskKey = "",
  tasks = []
} = {}) {
  const persistedTasks = tasks
    .filter((task) => task.studentId === selectedStudentId && task.taskType === activeTaskType)
    .map(hydrateTask);
  const focusedPersistedTasks = selectedTaskKey
    ? persistedTasks.filter((task) => getSupplementActionKey(task) === selectedTaskKey && task.status !== "done")
    : [];
  const shouldShowPendingTask =
    pendingTask &&
    pendingTask.studentId === selectedStudentId &&
    pendingTask.taskType === activeTaskType &&
    (!selectedTaskKey || getSupplementActionKey(pendingTask) === selectedTaskKey) &&
    !focusedPersistedTasks.some((task) => getSupplementActionKey(task) === getSupplementActionKey(pendingTask));
  const selectedTasks = pendingTask && shouldShowPendingTask
    ? [pendingTask, ...focusedPersistedTasks]
    : focusedPersistedTasks;

  return {
    focusedPersistedTasks,
    persistedTasks,
    selectedTasks,
    shouldShowPendingTask: Boolean(shouldShowPendingTask)
  };
}
