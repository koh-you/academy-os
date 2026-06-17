import { sampleData } from "../../src/shared/data/sampleData.js";
import { getSupabaseStatus, isSupabaseConfigured, listRows, upsertRows } from "../lib/supabaseRest.js";

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
    progress_note: compact(record.progress),
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
    if (!isPendingMigration) throw error;
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
