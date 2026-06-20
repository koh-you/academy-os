import { sampleData } from "../../src/shared/data/sampleData.js";
import { deleteRows, getSupabaseStatus, isSupabaseConfigured, listRows, upsertRows } from "../lib/supabaseRest.js";

const fallbackSource = "local_sample";
const databaseSource = "supabase";

function compact(value) {
  return value === undefined || value === "" ? null : value;
}

function toStudentRow(student) {
  return {
    student_id: student.studentId,
    name: student.name,
    login_id: student.loginId,
    pin: student.pin ?? "1234",
    status: student.status ?? "active",
    school_name: compact(student.schoolName),
    grade: compact(student.grade),
    birth_year: student.birthYear ? Number(student.birthYear) : null,
    student_phone: compact(student.studentPhone),
    parent_phone: compact(student.parentPhone),
    default_class_template_id: compact(student.defaultClassTemplateId),
    textbook: compact(student.textbook),
    special_note: compact(student.specialNote),
    schedule_override: compact(student.scheduleOverride),
    updated_at: new Date().toISOString()
  };
}

function fromStudentRow(row) {
  return {
    studentId: row.student_id,
    name: row.name,
    loginId: row.login_id,
    pin: row.pin,
    status: row.status,
    schoolName: row.school_name ?? "",
    grade: row.grade ?? "",
    birthYear: row.birth_year ?? "",
    studentPhone: row.student_phone ?? "",
    parentPhone: row.parent_phone ?? "",
    defaultClassTemplateId: row.default_class_template_id ?? "",
    textbook: row.textbook ?? "",
    specialNote: row.special_note ?? "",
    scheduleOverride: row.schedule_override ?? ""
  };
}

function toClassTemplateRow(classTemplate) {
  return {
    class_template_id: classTemplate.classTemplateId,
    name: classTemplate.name,
    days: classTemplate.days ?? [],
    start_time: classTemplate.startTime,
    end_time: classTemplate.endTime,
    color: classTemplate.color ?? "#17213a",
    status: classTemplate.status ?? "active",
    updated_at: new Date().toISOString()
  };
}

function fromClassTemplateRow(row) {
  return {
    classTemplateId: row.class_template_id,
    name: row.name,
    days: row.days ?? [],
    startTime: row.start_time,
    endTime: row.end_time,
    color: row.color,
    status: row.status
  };
}

function toLessonRow(lesson) {
  return {
    lesson_id: lesson.lessonId,
    class_template_id: compact(lesson.classTemplateId),
    class_name: lesson.className,
    lesson_date: lesson.date,
    start_time: lesson.startTime,
    end_time: lesson.endTime,
    color: lesson.color ?? "#17213a",
    student_ids: lesson.studentIds ?? [],
    lesson_type: compact(lesson.lessonType),
    lesson_topic: compact(lesson.lessonTopic),
    source_makeup_task_id: compact(lesson.sourceMakeupTaskId),
    source_school_event_id: compact(lesson.sourceSchoolEventId),
    source_label: compact(lesson.sourceLabel),
    status: lesson.status ?? "scheduled",
    updated_at: new Date().toISOString()
  };
}

function fromLessonRow(row) {
  return {
    lessonId: row.lesson_id,
    classTemplateId: row.class_template_id ?? "",
    className: row.class_name,
    date: row.lesson_date,
    startTime: row.start_time,
    endTime: row.end_time,
    color: row.color,
    studentIds: row.student_ids ?? [],
    lessonType: row.lesson_type ?? "",
    lessonTopic: row.lesson_topic ?? "",
    sourceMakeupTaskId: row.source_makeup_task_id ?? "",
    sourceSchoolEventId: row.source_school_event_id ?? "",
    sourceLabel: row.source_label ?? "",
    status: row.status
  };
}

function toLessonRecordRow(record, { includeExtendedFields = true } = {}) {
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

  return {
    ...baseRow,
    lesson_material: compact(record.lessonMaterial),
    lesson_content: compact(record.lessonContent),
    assignment_status: compact(record.assignmentStatus),
    preparation_memo: compact(record.preparationMemo),
    prep_student_notice: compact(record.prepStudentNotice),
    prep_parent_visible: Boolean(record.prepParentVisible),
    prep_parent_notice: compact(record.prepParentNotice),
    prep_student_ai_status: compact(record.prepStudentAiStatus),
    prep_parent_ai_status: compact(record.prepParentAiStatus)
  };
}

function fromLessonRecordRow(row) {
  return {
    lessonStudentRecordId: row.lesson_student_record_id,
    lessonId: row.lesson_id,
    studentId: row.student_id,
    attendanceStatus: row.attendance_status ?? "pending",
    attendanceReason: row.attendance_reason ?? "",
    lateMinutes: row.late_minutes ?? "",
    previousHomework: row.previous_homework ?? "",
    nextHomework: row.next_homework ?? "",
    incompleteHomework: row.incomplete_homework ?? "",
    lessonMaterial: row.lesson_material ?? "",
    lessonContent: row.lesson_content ?? "",
    assignmentStatus: row.assignment_status ?? "",
    preparationMemo: row.preparation_memo ?? "",
    prepStudentNotice: row.prep_student_notice ?? "",
    prepParentVisible: Boolean(row.prep_parent_visible),
    prepParentNotice: row.prep_parent_notice ?? "",
    prepStudentAiStatus: row.prep_student_ai_status ?? "",
    prepParentAiStatus: row.prep_parent_ai_status ?? "",
    lessonProgress: row.progress_note ?? "",
    progress: row.progress_note ?? "",
    teacherComment: row.teacher_comment ?? "",
    studentComment: row.student_comment ?? "",
    teacherCommentAiStatus: row.teacher_comment_ai_status ?? "",
    studentCommentAiStatus: row.student_comment_ai_status ?? "",
    teacherCommentSendStatus: row.teacher_comment_send_status ?? "",
    studentCommentSendStatus: row.student_comment_send_status ?? ""
  };
}

function toHomeworkRow(homework) {
  const teacherStatusMap = {
    assigned: "unverified",
    overdue: "missing",
    verified: "verified",
    partial: "partial",
    missing: "missing",
    unverified: "unverified"
  };

  return {
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
}

function fromHomeworkRow(row) {
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
    teacherStatus: row.teacher_status ?? "unverified"
  };
}

function parseJsonNote(value) {
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

function toMakeupTaskRow(task) {
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

function fromMakeupTaskRow(row) {
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

function toExamPrepRow(row) {
  return {
    exam_prep_id: row.examPrepId,
    school_name: row.schoolName || "학교 미입력",
    grade: row.grade || "학년 미입력",
    subject: row.subject || "수학",
    textbook: compact(row.textbook),
    publisher: compact(row.publisher),
    exam_term: row.examCycle ?? row.examTerm ?? "2026-1-final",
    exam_period: compact(row.examPeriod),
    math_exam_date: compact(row.mathExamDate),
    scope: compact(row.scope),
    sub_materials: compact(row.subTextbook ?? row.subMaterials),
    review: compact(row.review),
    revised_review: compact(row.revisedReview),
    memo: compact(row.memo),
    exam_cycle: row.examCycle ?? row.examTerm ?? "2026-1-final",
    math_exam_dates: row.mathExamDates ?? [],
    special_note: compact(row.specialNote),
    source: compact(row.source),
    review_ai_status: compact(row.reviewAiStatus),
    updated_at: new Date().toISOString()
  };
}

function fromExamPrepRow(row) {
  return {
    examPrepId: row.exam_prep_id,
    schoolName: row.school_name,
    grade: row.grade,
    subject: row.subject,
    textbook: row.textbook ?? "",
    publisher: row.publisher ?? "",
    examCycle: row.exam_cycle ?? row.exam_term ?? "",
    examTerm: row.exam_term ?? row.exam_cycle ?? "",
    examPeriod: row.exam_period ?? "",
    mathExamDate: row.math_exam_date ?? "",
    mathExamDates: row.math_exam_dates ?? [],
    scope: row.scope ?? "",
    subTextbook: row.sub_textbook ?? row.sub_materials ?? "",
    subMaterials: row.sub_materials ?? "",
    review: row.review ?? "",
    revisedReview: row.revised_review ?? "",
    memo: row.memo ?? "",
    specialNote: row.special_note ?? "",
    source: row.source ?? "",
    reviewAiStatus: row.review_ai_status ?? "",
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

function toSchoolEventType(value = "event") {
  return {
    examPeriod: "exam_period",
    mathExam: "math_exam",
    vacation: "vacation",
    opening: "opening",
    schoolEvent: "event",
    custom: "event",
    preExam: "event"
  }[value] ?? value;
}

function fromSchoolEventType(value = "event") {
  return {
    exam_period: "examPeriod",
    math_exam: "mathExam",
    vacation: "vacation",
    opening: "opening",
    event: "schoolEvent"
  }[value] ?? value;
}

function toSchoolEventRow(event) {
  const payload = {
    ...event,
    type: event.type ?? fromSchoolEventType(event.eventType)
  };
  return {
    school_event_id: event.eventId ?? event.schoolEventId,
    school_name: event.schoolName || "학교 미입력",
    title: event.title,
    event_type: toSchoolEventType(payload.type),
    start_date: event.date ?? event.startDate,
    end_date: compact(event.endDate),
    math_subject_by_date: event.mathSubjectByDate ?? {},
    memo: compact(event.memo),
    app_event_type: payload.type,
    color: compact(event.color),
    grade: compact(event.grade),
    exam_cycle: compact(event.examCycle),
    exam_subject: compact(event.examSubject),
    event_payload: payload,
    updated_at: new Date().toISOString()
  };
}

function fromSchoolEventRow(row) {
  const payload = row.event_payload ?? {};
  const type = payload.type ?? row.app_event_type ?? fromSchoolEventType(row.event_type);
  return {
    ...payload,
    eventId: row.school_event_id,
    schoolEventId: row.school_event_id,
    schoolName: row.school_name,
    title: row.title,
    type,
    eventType: row.event_type,
    date: payload.date ?? row.start_date,
    startDate: row.start_date,
    endDate: payload.endDate ?? row.end_date ?? "",
    memo: payload.memo ?? row.memo ?? "",
    color: payload.color ?? row.color ?? "",
    grade: payload.grade ?? row.grade ?? "",
    examCycle: payload.examCycle ?? row.exam_cycle ?? "",
    examSubject: payload.examSubject ?? row.exam_subject ?? "",
    mathSubjectByDate: row.math_subject_by_date ?? {},
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

function toAppStateRow(key, value) {
  return {
    state_key: key,
    state_value: value ?? null,
    updated_at: new Date().toISOString()
  };
}

function fromAppStateRow(row) {
  return {
    key: row.state_key,
    value: row.state_value,
    updatedAt: row.updated_at
  };
}

function normalizeMaterialVisibility(value) {
  return value === "both" ? "student_parent" : value || "teacher";
}

function fromMaterialVisibility(value) {
  return value === "student_parent" ? "both" : value || "teacher";
}

function toResourceMaterialRow(material) {
  return {
    resource_material_id: material.resourceMaterialId ?? material.materialId,
    title: material.title,
    material_type: material.materialType ?? "link",
    subject: compact(material.subject),
    description: compact(material.description),
    url: compact(material.fileUrl ?? material.url),
    content: compact(material.content ?? material.fileName),
    student_ids: material.studentIds ?? [],
    class_template_ids: material.classTemplateIds ?? (material.classTemplateId ? [material.classTemplateId] : []),
    visibility: normalizeMaterialVisibility(material.visibility),
    notify_by_alimtalk: Boolean(material.notifyByAlimtalk),
    created_by: compact(material.createdBy),
    updated_at: new Date().toISOString()
  };
}

function fromResourceMaterialRow(row) {
  return {
    materialId: row.resource_material_id,
    resourceMaterialId: row.resource_material_id,
    title: row.title,
    materialType: row.material_type ?? "link",
    subject: row.subject ?? "",
    description: row.description ?? "",
    fileUrl: row.url ?? "",
    url: row.url ?? "",
    fileName: row.content ?? "",
    content: row.content ?? "",
    studentIds: row.student_ids ?? [],
    classTemplateIds: row.class_template_ids ?? [],
    classTemplateId: row.class_template_ids?.[0] ?? "",
    visibility: fromMaterialVisibility(row.visibility),
    notifyByAlimtalk: Boolean(row.notify_by_alimtalk),
    createdBy: row.created_by ?? "",
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

function toNotificationJobRow(job) {
  return {
    notification_job_id: job.notificationJobId ?? job.notificationLogId,
    notification_type: job.notificationType ?? (job.target === "student" ? "student_comment" : "parent_comment"),
    student_id: compact(job.studentId),
    lesson_id: compact(job.lessonId),
    lesson_student_record_id: compact(job.lessonStudentRecordId),
    target: job.target ?? "parent",
    recipient: compact(job.recipient),
    scheduled_at: compact(job.scheduledAt ?? job.scheduledDate),
    payload: job.payload ?? {},
    preview_body: compact(job.previewBody ?? job.message),
    status: job.status ?? "draft",
    provider: compact(job.provider),
    provider_message_id: compact(job.providerMessageId),
    result: job.result ?? null,
    error: compact(job.error),
    updated_at: new Date().toISOString()
  };
}

function fromNotificationJobRow(row) {
  return {
    notificationJobId: row.notification_job_id,
    notificationType: row.notification_type,
    studentId: row.student_id ?? "",
    lessonId: row.lesson_id ?? "",
    lessonStudentRecordId: row.lesson_student_record_id ?? "",
    target: row.target,
    recipient: row.recipient ?? "",
    scheduledAt: row.scheduled_at ?? "",
    payload: row.payload ?? {},
    previewBody: row.preview_body ?? "",
    status: row.status,
    provider: row.provider ?? "",
    providerMessageId: row.provider_message_id ?? "",
    result: row.result,
    error: row.error ?? "",
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

export function getCoreDataStatus() {
  return {
    ...getSupabaseStatus(),
    fallbackSource
  };
}

export async function listStudents() {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, students: sampleData.students.filter((student) => (student.status ?? "active") === "active") };
  }

  const rows = await listRows("students", "select=*&status=eq.active&order=name.asc", { requireServiceRole: true });
  return { source: databaseSource, students: rows.map(fromStudentRow) };
}

export async function listClassTemplates() {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, classTemplates: sampleData.classTemplates };
  }

  const rows = await listRows("class_templates", "select=*&order=name.asc", { requireServiceRole: true });
  return { source: databaseSource, classTemplates: rows.map(fromClassTemplateRow) };
}

export async function listLessons({ date } = {}) {
  if (!isSupabaseConfigured()) {
    const activeLessons = sampleData.lessons.filter((lesson) => (lesson.status ?? "scheduled") !== "canceled");
    const lessons = date ? activeLessons.filter((lesson) => lesson.date === date) : activeLessons;
    return { source: fallbackSource, lessons };
  }

  const query = date
    ? `select=*&status=neq.canceled&lesson_date=eq.${encodeURIComponent(date)}&order=lesson_date.asc,start_time.asc`
    : "select=*&status=neq.canceled&order=lesson_date.asc,start_time.asc";
  const rows = await listRows("lessons", query, { requireServiceRole: true });
  return { source: databaseSource, lessons: rows.map(fromLessonRow) };
}

export async function upsertStudent(student) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, student };
  }

  const [row] = await upsertRows("students", [toStudentRow(student)]);
  return { source: databaseSource, student: fromStudentRow(row) };
}

export async function upsertStudents(students) {
  if (!Array.isArray(students) || students.length === 0) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, students: [] };
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, students };
  }

  const rows = await upsertRows("students", students.map(toStudentRow));
  return { source: databaseSource, students: rows.map(fromStudentRow) };
}

export async function upsertLesson(lesson) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, lesson };
  }

  const [row] = await upsertRows("lessons", [toLessonRow(lesson)]);
  return { source: databaseSource, lesson: fromLessonRow(row) };
}

export async function upsertLessons(lessons) {
  if (!Array.isArray(lessons) || lessons.length === 0) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, lessons: [] };
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, lessons };
  }

  const rows = await upsertRows("lessons", lessons.map(toLessonRow));
  return { source: databaseSource, lessons: rows.map(fromLessonRow) };
}

export async function deleteLesson(lessonId) {
  if (!lessonId) throw new Error("삭제할 수업 ID가 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, lessonId };
  }

  const encodedLessonId = encodeURIComponent(lessonId);
  await deleteRows("homeworks", `lesson_id=eq.${encodedLessonId}`);
  await deleteRows("lesson_student_records", `lesson_id=eq.${encodedLessonId}`);
  await deleteRows("lessons", `lesson_id=eq.${encodedLessonId}`);
  return { source: databaseSource, lessonId };
}

export async function deleteLessonsBefore(cutoffDate) {
  if (!cutoffDate) throw new Error("삭제 기준일이 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, cutoffDate, deletedLessonIds: [] };
  }

  const lessonRows = await listRows(
    "lessons",
    `select=lesson_id&lesson_date=lt.${encodeURIComponent(cutoffDate)}`,
    { requireServiceRole: true }
  );
  const deletedLessonIds = lessonRows.map((row) => row.lesson_id).filter(Boolean);
  for (const lessonId of deletedLessonIds) {
    await deleteLesson(lessonId);
  }
  return { source: databaseSource, cutoffDate, deletedLessonIds };
}

export async function listLessonStudentRecords() {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, records: sampleData.lessonStudentRecords };
  }

  const rows = await listRows("lesson_student_records", "select=*&order=lesson_id.asc", { requireServiceRole: true });
  return { source: databaseSource, records: rows.map(fromLessonRecordRow) };
}

export async function listHomeworks() {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, homeworks: sampleData.homeworks };
  }

  const rows = await listRows("homeworks", "select=*&order=assigned_date.asc", { requireServiceRole: true });
  return { source: databaseSource, homeworks: rows.map(fromHomeworkRow) };
}

export async function listMakeupTasks() {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, makeupTasks: [] };
  }

  const rows = await listRows("makeup_tasks", "select=*&order=updated_at.desc", { requireServiceRole: true });
  return { source: databaseSource, makeupTasks: rows.map(fromMakeupTaskRow) };
}

export async function upsertMakeupTask(task) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, makeupTask: task };
  }

  const [row] = await upsertRows("makeup_tasks", [toMakeupTaskRow(task)]);
  return { source: databaseSource, makeupTask: fromMakeupTaskRow(row) };
}

export async function upsertMakeupTasks(makeupTasks) {
  if (!Array.isArray(makeupTasks) || makeupTasks.length === 0) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, makeupTasks: [] };
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, makeupTasks };
  }

  const rows = await upsertRows("makeup_tasks", makeupTasks.map(toMakeupTaskRow));
  return { source: databaseSource, makeupTasks: rows.map(fromMakeupTaskRow) };
}

export async function deleteMakeupTask(makeupTaskId) {
  if (!makeupTaskId) throw new Error("삭제할 보충관리 ID가 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, makeupTaskId };
  }

  const rows = await listRows(
    "makeup_tasks",
    `select=*&makeup_task_id=eq.${encodeURIComponent(makeupTaskId)}&limit=1`,
    { requireServiceRole: true }
  );
  const task = rows[0] ? fromMakeupTaskRow(rows[0]) : null;
  if (task?.linkedLessonId) {
    await deleteLesson(task.linkedLessonId);
  }
  await deleteRows("makeup_tasks", `makeup_task_id=eq.${encodeURIComponent(makeupTaskId)}`);
  return { source: databaseSource, makeupTaskId };
}

export async function deleteAllMakeupTasks() {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, deletedMakeupTaskIds: [] };
  }

  const rows = await listRows("makeup_tasks", "select=makeup_task_id,note", { requireServiceRole: true });
  const tasks = rows.map(fromMakeupTaskRow);
  for (const task of tasks) {
    if (task.linkedLessonId) {
      await deleteLesson(task.linkedLessonId);
    }
    await deleteRows("makeup_tasks", `makeup_task_id=eq.${encodeURIComponent(task.makeupTaskId)}`);
  }
  return { source: databaseSource, deletedMakeupTaskIds: tasks.map((task) => task.makeupTaskId) };
}

export async function listExamPrepRows() {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, examPrepRows: sampleData.examPrepRows ?? [] };
  }

  const rows = await listRows("exam_prep_rows", "select=*&order=school_name.asc,grade.asc,subject.asc", { requireServiceRole: true });
  return { source: databaseSource, examPrepRows: rows.map(fromExamPrepRow) };
}

export async function upsertExamPrepRow(row) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, examPrepRow: row };
  }

  const [savedRow] = await upsertRows("exam_prep_rows", [toExamPrepRow(row)]);
  return { source: databaseSource, examPrepRow: fromExamPrepRow(savedRow) };
}

export async function upsertExamPrepRows(rows) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, examPrepRows: [] };
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, examPrepRows: rows };
  }

  const savedRows = await upsertRows("exam_prep_rows", rows.map(toExamPrepRow));
  return { source: databaseSource, examPrepRows: savedRows.map(fromExamPrepRow) };
}

export async function listSchoolEvents() {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, schoolEvents: [] };
  }

  const rows = await listRows("school_events", "select=*&order=start_date.asc,title.asc", { requireServiceRole: true });
  return { source: databaseSource, schoolEvents: rows.map(fromSchoolEventRow) };
}

export async function upsertSchoolEvent(event) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, schoolEvent: event };
  }

  const [row] = await upsertRows("school_events", [toSchoolEventRow(event)]);
  return { source: databaseSource, schoolEvent: fromSchoolEventRow(row) };
}

export async function upsertSchoolEvents(events) {
  if (!Array.isArray(events) || events.length === 0) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, schoolEvents: [] };
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, schoolEvents: events };
  }

  const rows = await upsertRows("school_events", events.map(toSchoolEventRow));
  return { source: databaseSource, schoolEvents: rows.map(fromSchoolEventRow) };
}

export async function deleteSchoolEvent(eventId) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, schoolEventId: eventId };
  }

  await deleteRows("school_events", `school_event_id=eq.${encodeURIComponent(eventId)}`);
  return { source: databaseSource, schoolEventId: eventId };
}

export async function listAppState() {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, states: {} };
  }

  const rows = await listRows("app_state", "select=*&order=state_key.asc", { requireServiceRole: true });
  return {
    source: databaseSource,
    states: Object.fromEntries(rows.map((row) => [row.state_key, row.state_value])),
    stateRows: rows.map(fromAppStateRow)
  };
}

export async function upsertAppState(states) {
  if (!states || typeof states !== "object" || Array.isArray(states)) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, states: {} };
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, states };
  }

  const rows = Object.entries(states).map(([key, value]) => toAppStateRow(key, value));
  if (rows.length === 0) return { source: databaseSource, states: {} };
  const savedRows = await upsertRows("app_state", rows);
  return {
    source: databaseSource,
    states: Object.fromEntries(savedRows.map((row) => [row.state_key, row.state_value])),
    stateRows: savedRows.map(fromAppStateRow)
  };
}

export async function listResourceMaterials() {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, materials: [] };
  }

  const rows = await listRows("resource_materials", "select=*&order=created_at.desc", { requireServiceRole: true });
  return { source: databaseSource, materials: rows.map(fromResourceMaterialRow) };
}

export async function upsertResourceMaterial(material) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, material };
  }

  const [row] = await upsertRows("resource_materials", [toResourceMaterialRow(material)]);
  return { source: databaseSource, material: fromResourceMaterialRow(row) };
}

export async function deleteResourceMaterial(materialId) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, materialId };
  }

  await deleteRows("resource_materials", `resource_material_id=eq.${encodeURIComponent(materialId)}`);
  return { source: databaseSource, materialId };
}

export async function listNotificationJobs() {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, notificationJobs: [] };
  }

  const rows = await listRows("notification_jobs", "select=*&order=created_at.desc", { requireServiceRole: true });
  return { source: databaseSource, notificationJobs: rows.map(fromNotificationJobRow) };
}

export async function upsertNotificationJob(job) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, notificationJob: job };
  }

  const [row] = await upsertRows("notification_jobs", [toNotificationJobRow(job)]);
  return { source: databaseSource, notificationJob: fromNotificationJobRow(row) };
}

export async function upsertLessonStudentRecord(record) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, record };
  }

  const existingRows = await listRows(
    "lesson_student_records",
    `select=lesson_student_record_id&lesson_id=eq.${encodeURIComponent(record.lessonId)}&student_id=eq.${encodeURIComponent(record.studentId)}&limit=1`,
    { requireServiceRole: true }
  );
  const stableRecord = existingRows[0]
    ? { ...record, lessonStudentRecordId: existingRows[0].lesson_student_record_id }
    : record;
  let row;
  try {
    [row] = await upsertRows("lesson_student_records", [toLessonRecordRow(stableRecord)]);
  } catch (error) {
    const message = String(error?.message ?? "");
    const isPendingMigration =
      message.includes("lesson_material") ||
      message.includes("lesson_content") ||
      message.includes("assignment_status") ||
      message.includes("preparation_memo") ||
      message.includes("prep_student_notice");
    const hasExtendedValues = [
      stableRecord.lessonMaterial,
      stableRecord.lessonContent,
      stableRecord.assignmentStatus,
      stableRecord.preparationMemo,
      stableRecord.prepStudentNotice,
      stableRecord.prepParentNotice,
      stableRecord.prepStudentAiStatus,
      stableRecord.prepParentAiStatus,
      stableRecord.prepStudentVisible,
      stableRecord.prepParentVisible
    ].some((value) => (typeof value === "boolean" ? value : Boolean(String(value ?? "").trim())));
    if (!isPendingMigration) throw error;
    if (hasExtendedValues) {
      throw new Error(
        "Supabase lesson_student_records 확장 컬럼 migration이 필요합니다. supabase/20260617_lesson_prep_resources_notifications.sql을 실행한 뒤 다시 저장하세요."
      );
    }
    [row] = await upsertRows("lesson_student_records", [toLessonRecordRow(stableRecord, { includeExtendedFields: false })]);
  }
  return { source: databaseSource, record: fromLessonRecordRow(row) };
}

export async function upsertHomework(homework) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, homework };
  }

  const [row] = await upsertRows("homeworks", [toHomeworkRow(homework)]);
  return { source: databaseSource, homework: fromHomeworkRow(row) };
}

export async function upsertHomeworks(homeworks) {
  if (!Array.isArray(homeworks) || homeworks.length === 0) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, homeworks: [] };
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, homeworks };
  }

  const rows = await upsertRows("homeworks", homeworks.map(toHomeworkRow));
  return { source: databaseSource, homeworks: rows.map(fromHomeworkRow) };
}

export async function seedCoreData() {
  const classTemplates = sampleData.classTemplates.map(toClassTemplateRow);
  const students = sampleData.students.map(toStudentRow);
  const lessons = sampleData.lessons.map(toLessonRow);
  const lessonRecords = sampleData.lessonStudentRecords.map(toLessonRecordRow);
  const homeworks = sampleData.homeworks.map(toHomeworkRow);

  const result = {
    classTemplates: (await upsertRows("class_templates", classTemplates)).length,
    students: (await upsertRows("students", students)).length,
    lessons: (await upsertRows("lessons", lessons)).length,
    lessonStudentRecords: (await upsertRows("lesson_student_records", lessonRecords)).length,
    homeworks: (await upsertRows("homeworks", homeworks)).length
  };

  return { source: databaseSource, result };
}
