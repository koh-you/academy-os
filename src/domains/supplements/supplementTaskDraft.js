export const supplementDraftFieldLabels = {
  supplementMethod: "처리 방법",
  scheduledDate: "배정일",
  scheduledTime: "시간",
  studentScheduleNotificationDraft: "학생 알림톡 문구",
  parentScheduleNotificationDraft: "학부모 알림톡 문구",
  notificationDraft: "당일 학생 11시 알림톡 문구"
};

export const supplementNotificationDraftConfigs = [
  { controlType: "studentSchedule", field: "studentScheduleNotificationDraft", label: "학생 알림톡", target: "student" },
  { controlType: "parentSchedule", field: "parentScheduleNotificationDraft", label: "학부모 알림톡", target: "parent" },
  { controlType: "studentReminder", field: "notificationDraft", label: "당일 학생 11시 알림톡", target: "student" }
];

export const supplementTeacherFinalFields = new Set(supplementNotificationDraftConfigs.map((config) => config.field));

export function getSupplementNotificationDraftConfig(field = "") {
  return supplementNotificationDraftConfigs.find((config) => config.field === field) ?? supplementNotificationDraftConfigs[0];
}

export function getSupplementNotificationDraftFieldForControl(controlType = "studentSchedule") {
  return supplementNotificationDraftConfigs.find((config) => config.controlType === controlType)?.field ?? "studentScheduleNotificationDraft";
}

export function getSupplementTeacherEditedFields(task = {}) {
  return [...new Set(
    (Array.isArray(task.supplementTeacherEditedFields) ? task.supplementTeacherEditedFields : [])
      .filter((field) => supplementTeacherFinalFields.has(field))
  )];
}

export function isSupplementTeacherEditedField(task = {}, field = "") {
  return getSupplementTeacherEditedFields(task).includes(field);
}

export function mergeSupplementTeacherEditedFields(task = {}, editedFields = []) {
  return [...new Set([
    ...getSupplementTeacherEditedFields(task),
    ...editedFields.filter((field) => supplementTeacherFinalFields.has(field))
  ])];
}

export function getSupplementHomeworkNoteValue(task = {}, fallback = "") {
  const hasSavedValue =
    Object.prototype.hasOwnProperty.call(task, "supplementHomeworkNote") ||
    isSupplementTeacherEditedField(task, "supplementHomeworkNote");
  return hasSavedValue
    ? String(task.supplementHomeworkNote ?? "")
    : String(fallback ?? "");
}

export function getSupplementPersistedEditFingerprint(task = {}) {
  return JSON.stringify({
    makeupTaskId: task.makeupTaskId || "",
    notificationDraft: String(task.notificationDraft ?? ""),
    parentScheduleNotificationDraft: String(task.parentScheduleNotificationDraft ?? ""),
    scheduledDate: String(task.scheduledDate ?? ""),
    scheduledTime: String(task.scheduledTime ?? ""),
    status: String(task.status ?? "draft"),
    studentScheduleNotificationDraft: String(task.studentScheduleNotificationDraft ?? ""),
    supplementHomeworkNote: String(task.supplementHomeworkNote ?? ""),
    supplementMethod: String(task.supplementMethod ?? ""),
    supplementProgressMemo: String(task.supplementProgressMemo ?? ""),
    supplementTeacherEditedFields: getSupplementTeacherEditedFields(task).sort()
  });
}

export function normalizeSupplementDraftValue(value) {
  return String(value ?? "");
}

export function formatSupplementDraftDiffValue(value) {
  const text = normalizeSupplementDraftValue(value).trim();
  return text || "미입력";
}

export function getSupplementTaskSourceVersion(task = {}) {
  return [
    task.updatedAt,
    task.touchedAt,
    task.lastScheduledAt,
    task.status,
    task.supplementHomeworkNote,
    task.supplementProgressMemo,
    task.supplementMethod,
    task.scheduledDate,
    task.scheduledTime,
    task.studentScheduleNotificationDraft,
    task.parentScheduleNotificationDraft,
    task.notificationDraft,
    getSupplementTeacherEditedFields(task).join(",")
  ].map((value) => normalizeSupplementDraftValue(value)).join("|");
}

export function createSupplementTaskDraft(task = {}, student = null, notificationTemplates = {}, dependencies = {}) {
  const { buildScheduleNoticeBody, createNotificationDraft, normalizeMethodForTask } = dependencies;
  const taskWithDefaultMethod = {
    ...task,
    supplementMethod: normalizeMethodForTask(task.taskType, task.supplementMethod)
  };
  const generatedNotificationDraft = createNotificationDraft(taskWithDefaultMethod, student ? [student] : [], notificationTemplates);
  const notificationDraft = isSupplementTeacherEditedField(task, "notificationDraft")
    ? String(task.notificationDraft ?? "")
    : task.notificationDraft || generatedNotificationDraft;
  const generatedScheduleNotificationDraft = buildScheduleNoticeBody(taskWithDefaultMethod, "", notificationTemplates);
  const studentScheduleNotificationDraft = isSupplementTeacherEditedField(task, "studentScheduleNotificationDraft")
    ? String(task.studentScheduleNotificationDraft ?? "")
    : generatedScheduleNotificationDraft;
  const parentScheduleNotificationDraft = isSupplementTeacherEditedField(task, "parentScheduleNotificationDraft")
    ? String(task.parentScheduleNotificationDraft ?? "")
    : generatedScheduleNotificationDraft;
  return {
    status: task.status || "draft",
    supplementHomeworkNote: task.supplementHomeworkNote ?? task.sourceLabel ?? "",
    supplementProgressMemo: task.supplementProgressMemo ?? "",
    supplementMethod: taskWithDefaultMethod.supplementMethod,
    scheduledDate: task.scheduledDate || "",
    scheduledTime: task.scheduledTime || "",
    studentScheduleNotificationDraft,
    parentScheduleNotificationDraft,
    notificationDraft
  };
}

export function areSupplementTaskDraftValuesEqual(left = {}, right = {}) {
  return Object.keys(supplementDraftFieldLabels).every(
    (field) => normalizeSupplementDraftValue(left[field]) === normalizeSupplementDraftValue(right[field])
  );
}

export function getSupplementTaskDraftDiff(task = {}, draft = {}, options = {}) {
  const source = options.createTaskDraft(task);
  return Object.entries(supplementDraftFieldLabels).flatMap(([field, label]) => {
    const beforeValue = normalizeSupplementDraftValue(source[field]);
    const afterValue = normalizeSupplementDraftValue(draft[field]);
    if (beforeValue === afterValue) return [];
    return [{
      after: formatSupplementDraftDiffValue(afterValue),
      before: formatSupplementDraftDiffValue(beforeValue),
      field,
      label
    }];
  });
}

export function createPersistableSupplementTask(task = {}) {
  const { isLocalDraftTask, ...persistableTask } = task;
  return persistableTask;
}
