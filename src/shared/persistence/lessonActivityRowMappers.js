// Pure DB row/domain projections. Keep source writes, attendance orchestration, and provider effects outside this module.
function compact(value) {
  return value === undefined || value === "" ? null : value;
}

export function toLessonRecordRow(record, { includeExtendedFields = true, includeAttendanceTimeFields = true } = {}) {
  const baseRow = {
    lesson_student_record_id: record.lessonStudentRecordId,
    lesson_id: record.lessonId,
    student_id: record.studentId,
    attendance_status: record.attendanceStatus ?? "pending",
    attendance_reason: compact(record.attendanceReason),
    late_minutes: record.lateMinutes ? Number(record.lateMinutes) : null,
    previous_homework: compact(record.previousHomework),
    next_homework: compact(record.nextHomework),
    incomplete_homework: compact(record.incompleteHomework),
    progress_note: compact(record.lessonProgress ?? record.progress),
    teacher_comment: compact(record.teacherComment),
    student_comment: compact(record.studentComment),
    teacher_comment_ai_status: compact(record.teacherCommentAiStatus),
    student_comment_ai_status: compact(record.studentCommentAiStatus),
    teacher_comment_send_status: compact(record.teacherCommentSendStatus),
    student_comment_send_status: compact(record.studentCommentSendStatus),
    updated_at: new Date().toISOString()
  };

  if (!includeExtendedFields) return baseRow;

  const extendedRow = {
    ...baseRow,
    lesson_material: compact(record.lessonMaterial),
    lesson_content: compact(record.lessonContent),
    assignment_status: compact(record.assignmentStatus),
    homework_followup_method: compact(record.homeworkFollowupMethod),
    homework_followup_text: compact(record.homeworkFollowupText),
    homework_followup_source_homework_id: compact(record.homeworkFollowupSourceHomeworkId),
    preparation_memo: compact(record.preparationMemo),
    prep_student_notice: compact(record.prepStudentNotice),
    prep_student_visible: Boolean(record.prepStudentVisible),
    prep_parent_visible: Boolean(record.prepParentVisible),
    prep_parent_notice: compact(record.prepParentNotice),
    prep_student_ai_status: compact(record.prepStudentAiStatus),
    prep_parent_ai_status: compact(record.prepParentAiStatus),
    behavior_tag: compact(record.behaviorTag),
    homework_status: compact(record.homeworkStatus),
    needs_makeup: Boolean(record.needsMakeup),
    needs_retest: Boolean(record.needsRetest),
    notification_muted_parent: Boolean(record.notificationMutedParent),
    notification_muted_student: Boolean(record.notificationMutedStudent),
    notification_muted_reason: compact(record.notificationMutedReason)
  };
  if (record.prepMemoCheckedAt || record.prepMemoCheckedSourceDate || record.prepMemoCheckedSourceRecordId) {
    extendedRow.prep_memo_checked_at = compact(record.prepMemoCheckedAt);
    extendedRow.prep_memo_checked_source_date = compact(record.prepMemoCheckedSourceDate);
    extendedRow.prep_memo_checked_source_record_id = compact(record.prepMemoCheckedSourceRecordId);
  }

  if (!includeAttendanceTimeFields) return extendedRow;

  return {
    ...extendedRow,
    check_in_at: compact(record.checkInAt),
    check_in_time: compact(record.checkInTime),
    check_out_at: compact(record.checkOutAt),
    check_out_time: compact(record.checkOutTime)
  };
}

export function fromLessonRecordRow(row) {
  return {
    lessonStudentRecordId: row.lesson_student_record_id,
    lessonId: row.lesson_id,
    studentId: row.student_id,
    attendanceStatus: row.attendance_status ?? "pending",
    attendanceReason: row.attendance_reason ?? "",
    lateMinutes: row.late_minutes ?? "",
    checkInAt: row.check_in_at ?? "",
    checkInTime: row.check_in_time ?? "",
    checkOutAt: row.check_out_at ?? "",
    checkOutTime: row.check_out_time ?? "",
    previousHomework: row.previous_homework ?? "",
    nextHomework: row.next_homework ?? "",
    incompleteHomework: row.incomplete_homework ?? "",
    lessonMaterial: row.lesson_material ?? "",
    lessonContent: row.lesson_content ?? "",
    assignmentStatus: row.assignment_status ?? "",
    homeworkFollowupMethod: row.homework_followup_method ?? "",
    homeworkFollowupText: row.homework_followup_text ?? "",
    homeworkFollowupSourceHomeworkId: row.homework_followup_source_homework_id ?? "",
    preparationMemo: row.preparation_memo ?? "",
    prepMemoCheckedAt: row.prep_memo_checked_at ?? "",
    prepMemoCheckedSourceDate: row.prep_memo_checked_source_date ?? "",
    prepMemoCheckedSourceRecordId: row.prep_memo_checked_source_record_id ?? "",
    prepStudentNotice: row.prep_student_notice ?? "",
    prepStudentVisible: Boolean(row.prep_student_visible),
    prepParentVisible: Boolean(row.prep_parent_visible),
    prepParentNotice: row.prep_parent_notice ?? "",
    prepStudentAiStatus: row.prep_student_ai_status ?? "",
    prepParentAiStatus: row.prep_parent_ai_status ?? "",
    behaviorTag: row.behavior_tag ?? "",
    homeworkStatus: row.homework_status ?? "not_started",
    needsMakeup: Boolean(row.needs_makeup),
    needsRetest: Boolean(row.needs_retest),
    lessonProgress: row.progress_note ?? "",
    progress: row.progress_note ?? "",
    teacherComment: row.teacher_comment ?? "",
    studentComment: row.student_comment ?? "",
    teacherCommentAiStatus: row.teacher_comment_ai_status ?? "",
    studentCommentAiStatus: row.student_comment_ai_status ?? "",
    teacherCommentSendStatus: row.teacher_comment_send_status ?? "",
    studentCommentSendStatus: row.student_comment_send_status ?? "",
    notificationMutedParent: Boolean(row.notification_muted_parent),
    notificationMutedStudent: Boolean(row.notification_muted_student),
    notificationMutedReason: row.notification_muted_reason ?? "",
    updatedAt: row.updated_at ?? ""
  };
}

export function toHomeworkRow(homework, { includeExtendedFields = true } = {}) {
  const teacherStatusMap = {
    assigned: "unverified",
    overdue: "missing",
    verified: "verified",
    partial: "partial",
    missing: "missing",
    unverified: "unverified"
  };

  const row = {
    homework_id: homework.homeworkId,
    lesson_id: compact(homework.lessonId),
    student_id: homework.studentId,
    homework_type: homework.homeworkType ?? "direct",
    title: homework.title,
    subject: compact(homework.subject),
    assigned_date: compact(homework.assignedDate),
    due_date: compact(homework.dueDate),
    student_status: homework.studentStatus ?? "not_started",
    teacher_status: teacherStatusMap[homework.teacherStatus] ?? "unverified",
    updated_at: new Date().toISOString()
  };

  if (!includeExtendedFields) return row;

  return {
    ...row,
    status: compact(homework.status),
    total_problems: homework.totalProblems === null || homework.totalProblems === undefined || homework.totalProblems === "" ? null : Number(homework.totalProblems),
    assignment_status: compact(homework.assignmentStatus),
    incomplete_homework: compact(homework.incompleteHomework),
    checked_at: compact(homework.checkedAt),
    verified_at: compact(homework.verifiedAt),
    linked_from_lesson_id: compact(homework.linkedFromLessonId),
    linked_from_date: compact(homework.linkedFromDate)
  };
}

export function fromHomeworkRow(row) {
  return {
    homeworkId: row.homework_id,
    lessonId: row.lesson_id ?? "",
    studentId: row.student_id,
    homeworkType: row.homework_type ?? "direct",
    title: row.title,
    subject: row.subject ?? "",
    assignedDate: row.assigned_date ?? "",
    dueDate: row.due_date ?? "",
    studentStatus: row.student_status ?? "not_started",
    teacherStatus: row.teacher_status ?? "unverified",
    status: row.status ?? (row.teacher_status === "verified" ? "verified" : "assigned"),
    totalProblems: row.total_problems ?? null,
    assignmentStatus: row.assignment_status ?? "",
    incompleteHomework: row.incomplete_homework ?? "",
    checkedAt: row.checked_at ?? "",
    verifiedAt: row.verified_at ?? "",
    linkedFromLessonId: row.linked_from_lesson_id ?? "",
    linkedFromDate: row.linked_from_date ?? "",
    updatedAt: row.updated_at ?? ""
  };
}

export function parseJsonNote(value) {
  if (!value) return {};
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function normalizeMakeupTaskStatusForDb(status = "draft") {
  if (status === "done" || status === "resolved") return "resolved";
  if (status === "scheduled") return "scheduled";
  if (status === "canceled") return "canceled";
  return "open";
}

function normalizeMakeupTaskStatusFromDb(status = "open") {
  if (status === "resolved") return "done";
  if (status === "scheduled") return "scheduled";
  if (status === "canceled") return "canceled";
  return "draft";
}

export function toMakeupTaskRow(task) {
  const metadata = {
    ...task,
    taskType: task.taskType ?? task.type,
    sourceId: task.sourceId ?? task.sourceHomeworkId ?? task.sourceLessonId,
    sourceLabel: task.sourceLabel ?? task.title,
    scheduledDate: task.scheduledDate ?? task.dueDate,
    scheduledTime: task.scheduledTime ?? "",
    status: task.status ?? "draft"
  };
  return {
    makeup_task_id: task.makeupTaskId,
    type: metadata.taskType ?? "homework_makeup",
    student_id: task.studentId,
    source_lesson_id: compact(task.sourceLessonId),
    source_homework_id: compact(task.sourceHomeworkId ?? (metadata.taskType === "homework_makeup" ? metadata.sourceId : "")),
    title: metadata.sourceLabel ?? metadata.reason ?? "보충관리",
    due_date: compact(metadata.scheduledDate),
    status: normalizeMakeupTaskStatusForDb(metadata.status),
    note: JSON.stringify(metadata),
    updated_at: new Date().toISOString()
  };
}

export function fromMakeupTaskRow(row) {
  const metadata = parseJsonNote(row.note);
  const taskType = metadata.taskType ?? row.type;
  return {
    ...metadata,
    makeupTaskId: row.makeup_task_id,
    taskType,
    studentId: row.student_id,
    sourceId: metadata.sourceId ?? row.source_homework_id ?? row.source_lesson_id ?? "",
    sourceHomeworkId: metadata.sourceHomeworkId ?? row.source_homework_id ?? "",
    sourceLessonId: metadata.sourceLessonId ?? row.source_lesson_id ?? "",
    sourceLabel: metadata.sourceLabel ?? row.title ?? "",
    title: metadata.title ?? row.title ?? "",
    scheduledDate: metadata.scheduledDate ?? row.due_date ?? "",
    dueDate: metadata.dueDate ?? row.due_date ?? "",
    status: normalizeMakeupTaskStatusFromDb(row.status),
    createdAt: metadata.createdAt ?? row.created_at,
    updatedAt: row.updated_at
  };
}

export function toAttendanceEventRow(event = {}) {
  return {
    attendance_event_id: event.attendanceEventId,
    lesson_id: compact(event.lessonId),
    student_id: compact(event.studentId),
    lesson_student_record_id: compact(event.lessonStudentRecordId),
    event_type: event.eventType ?? "checkin",
    source: event.source ?? "unknown",
    attendance_status: compact(event.attendanceStatus),
    checked_at: compact(event.checkedAt),
    check_in_at: compact(event.checkInAt),
    check_in_time: compact(event.checkInTime),
    check_out_at: compact(event.checkOutAt),
    check_out_time: compact(event.checkOutTime),
    attendance_reason: compact(event.attendanceReason),
    late_minutes: event.lateMinutes === "" || event.lateMinutes === undefined || event.lateMinutes === null ? null : Number(event.lateMinutes),
    actor_id: compact(event.actorId),
    record_before: event.recordBefore ?? null,
    record_after: event.recordAfter ?? null,
    alimtalk_status: compact(event.alimtalkStatus),
    alimtalk_result: event.alimtalkResult ?? null,
    error: compact(event.error)
  };
}

export function fromAttendanceEventRow(row) {
  return {
    attendanceEventId: row.attendance_event_id,
    lessonId: row.lesson_id ?? "",
    studentId: row.student_id ?? "",
    lessonStudentRecordId: row.lesson_student_record_id ?? "",
    eventType: row.event_type ?? "",
    source: row.source ?? "",
    attendanceStatus: row.attendance_status ?? "",
    checkedAt: row.checked_at ?? "",
    checkInAt: row.check_in_at ?? "",
    checkInTime: row.check_in_time ?? "",
    checkOutAt: row.check_out_at ?? "",
    checkOutTime: row.check_out_time ?? "",
    attendanceReason: row.attendance_reason ?? "",
    lateMinutes: row.late_minutes ?? "",
    actorId: row.actor_id ?? "",
    recordBefore: row.record_before ?? null,
    recordAfter: row.record_after ?? null,
    alimtalkStatus: row.alimtalk_status ?? "",
    alimtalkResult: row.alimtalk_result ?? null,
    error: row.error ?? "",
    createdAt: row.created_at
  };
}
