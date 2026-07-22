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

export function createSupplementDraftSaveStatusPatch(field = "", currentStatus = {}) {
  return {
    lesson: ["scheduledDate", "scheduledTime"].includes(field) ? "changed" : currentStatus.lesson,
    makeupTask: "changed",
    notificationDraft: supplementTeacherFinalFields.has(field) ? "changed" : currentStatus.notificationDraft
  };
}

export function mergeSupplementTaskSaveStatus(current = {}, taskId = "", patch = {}) {
  return {
    ...current,
    [taskId]: {
      ...(current[taskId] ?? {}),
      ...patch
    }
  };
}

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

export function updateSupplementTaskDraftEntry({
  existing = null,
  field = "",
  notificationTemplates = {},
  student = null,
  task = {},
  value
} = {}, dependencies = {}) {
  const previousValues = existing?.values ?? createSupplementTaskDraft(task, student, notificationTemplates, dependencies);
  const values = { ...previousValues, [field]: value };
  const editedFields = supplementTeacherFinalFields.has(field)
    ? [...new Set([...(existing?.editedFields ?? []), field])]
    : existing?.editedFields ?? [];

  if (!supplementTeacherFinalFields.has(field)) {
    const normalizeTime = dependencies.normalizeTime;
    const previousTaskValues = {
      ...task,
      ...previousValues,
      scheduledTime: normalizeTime(previousValues.scheduledTime) || previousValues.scheduledTime
    };
    const nextTaskValues = {
      ...task,
      ...values,
      scheduledTime: normalizeTime(values.scheduledTime) || values.scheduledTime
    };
    supplementNotificationDraftConfigs.forEach((config) => {
      const isTeacherFinal = isSupplementTeacherEditedField(task, config.field) || editedFields.includes(config.field);
      if (isTeacherFinal) return;
      const previousGeneratedDraft = config.controlType === "studentReminder"
        ? dependencies.createNotificationDraft(previousTaskValues, student ? [student] : [], notificationTemplates)
        : dependencies.buildScheduleNoticeBody(previousTaskValues, "", notificationTemplates);
      if (normalizeSupplementDraftValue(previousValues[config.field]) !== normalizeSupplementDraftValue(previousGeneratedDraft)) return;
      values[config.field] = config.controlType === "studentReminder"
        ? dependencies.createNotificationDraft(nextTaskValues, student ? [student] : [], notificationTemplates)
        : dependencies.buildScheduleNoticeBody(nextTaskValues, "", notificationTemplates);
    });
  }

  const diff = getSupplementTaskDraftDiff(task, values, {
    createTaskDraft: (sourceTask) => createSupplementTaskDraft(sourceTask, student, notificationTemplates, dependencies)
  });
  return {
    ...(existing ?? { sourceVersion: getSupplementTaskSourceVersion(task) }),
    dirty: diff.length > 0,
    editedFields,
    values
  };
}

export function buildSupplementTaskWithDraft({
  notificationTemplates = {},
  student = null,
  task = {},
  taskDraftState = {}
} = {}, dependencies = {}) {
  const draftValues = taskDraftState.values ?? {};
  const supplementTeacherEditedFields = mergeSupplementTeacherEditedFields(task, taskDraftState.editedFields ?? []);
  const normalizedScheduledTime = dependencies.normalizeTime(draftValues.scheduledTime) || draftValues.scheduledTime;
  const taskWithDraftValues = { ...task, ...draftValues, scheduledTime: normalizedScheduledTime };
  const resolvedNotificationDrafts = supplementNotificationDraftConfigs.reduce((result, config) => {
    const generatedDraft = config.controlType === "studentReminder"
      ? dependencies.createNotificationDraft(taskWithDraftValues, student ? [student] : [], notificationTemplates)
      : dependencies.buildScheduleNoticeBody(taskWithDraftValues, "", notificationTemplates);
    result[config.field] = supplementTeacherEditedFields.includes(config.field)
      ? String(draftValues[config.field] ?? "")
      : generatedDraft;
    return result;
  }, {});
  const nextTask = {
    ...taskWithDraftValues,
    ...resolvedNotificationDrafts,
    supplementTeacherEditedFields
  };

  if (
    task.linkedLessonId &&
    (nextTask.scheduledDate !== task.linkedLessonDate ||
      dependencies.normalizeTime(nextTask.scheduledTime) !== dependencies.normalizeTime(task.linkedLessonTime))
  ) {
    nextTask.needsLessonResync = true;
  }
  return nextTask;
}

export function syncSupplementTaskDraftEntries({
  current = {},
  notificationTemplates = {},
  student = null,
  tasks = []
} = {}, dependencies = {}) {
  const next = {};
  let changed = Object.keys(current).length !== tasks.filter((task) => task.makeupTaskId).length;

  tasks.forEach((task) => {
    if (!task.makeupTaskId) return;
    const existing = current[task.makeupTaskId];
    if (existing?.dirty) {
      next[task.makeupTaskId] = existing;
      return;
    }

    const sourceVersion = getSupplementTaskSourceVersion(task);
    const seededValues = createSupplementTaskDraft(task, student, notificationTemplates, dependencies);
    if (
      existing &&
      existing.sourceVersion === sourceVersion &&
      areSupplementTaskDraftValuesEqual(existing.values, seededValues)
    ) {
      next[task.makeupTaskId] = existing;
      return;
    }

    changed = true;
    next[task.makeupTaskId] = {
      dirty: false,
      editedFields: [],
      sourceVersion,
      values: seededValues
    };
  });

  const nextIds = Object.keys(next);
  if (!changed && nextIds.every((taskId) => current[taskId] === next[taskId])) return current;
  return next;
}
