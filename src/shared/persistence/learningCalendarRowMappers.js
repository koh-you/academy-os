// Pure DB row/domain projections. Keep source writes, calendar reconciliation, and provider effects outside this module.
function compact(value) {
  return value === undefined || value === "" ? null : value;
}

function normalizeClockTime(value) {
  const text = String(value ?? "").trim();
  const match = text.match(/(\d{1,2}):(\d{2})/);
  if (!match) return "";
  const hour = Math.max(0, Math.min(23, Number(match[1]) || 0));
  const minute = Math.max(0, Math.min(59, Number(match[2]) || 0));
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function sanitizePositiveInteger(value) {
  if (value === "" || value === null || value === undefined) return null;
  const number = Number(value);
  if (!Number.isFinite(number)) return null;
  return Math.max(0, Math.round(number));
}

export function toTestSessionRow(session = {}) {
  return {
    test_session_id: session.testSessionId,
    problem_book_id: compact(session.problemBookId),
    test_date: session.testDate,
    class_template_id: compact(session.classTemplateId),
    class_name: compact(session.className),
    test_kind: session.testKind || "daily",
    test_title: session.testTitle || "시험지명 미입력",
    subject: compact(session.subject),
    unit: compact(session.unit),
    total_questions: sanitizePositiveInteger(session.totalQuestions),
    pass_correct_count: sanitizePositiveInteger(session.passCorrectCount),
    source: session.source || "manual",
    memo: compact(session.memo),
    created_at: session.createdAt ?? new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}

export function fromTestSessionRow(row = {}) {
  return {
    testSessionId: row.test_session_id,
    problemBookId: row.problem_book_id ?? "",
    testDate: row.test_date ?? "",
    classTemplateId: row.class_template_id ?? "",
    className: row.class_name ?? "",
    testKind: row.test_kind ?? "daily",
    testTitle: row.test_title ?? "",
    subject: row.subject ?? "",
    unit: row.unit ?? "",
    totalQuestions: row.total_questions ?? "",
    passCorrectCount: row.pass_correct_count ?? "",
    source: row.source ?? "manual",
    memo: row.memo ?? "",
    createdAt: row.created_at ?? "",
    updatedAt: row.updated_at ?? ""
  };
}

export function toTestAttemptRow(attempt = {}) {
  return {
    test_attempt_id: attempt.testAttemptId,
    test_session_id: attempt.testSessionId,
    student_id: attempt.studentId,
    status: attempt.status === "not_taken" ? "not_taken" : "taken",
    correct_count: attempt.status === "not_taken" ? null : sanitizePositiveInteger(attempt.correctCount),
    not_taken_reason: compact(attempt.notTakenReason),
    pass_status: compact(attempt.passStatus),
    memo: compact(attempt.memo),
    created_at: attempt.createdAt ?? new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}

export function fromTestAttemptRow(row = {}) {
  return {
    testAttemptId: row.test_attempt_id,
    testSessionId: row.test_session_id,
    studentId: row.student_id,
    status: row.status ?? "taken",
    correctCount: row.correct_count ?? "",
    notTakenReason: row.not_taken_reason ?? "",
    passStatus: row.pass_status ?? "",
    memo: row.memo ?? "",
    createdAt: row.created_at ?? "",
    updatedAt: row.updated_at ?? ""
  };
}

function inferExamCycleFromPrepId(examPrepId = "") {
  const id = String(examPrepId);
  const explicitCycle = id.match(/(20\d{2})[-_](1|2)[-_](mid|final)/);
  if (explicitCycle) return `${explicitCycle[1]}-${explicitCycle[2]}-${explicitCycle[3]}`;
  const legacyYear = id.match(/(20\d{2})/);
  const year = legacyYear?.[1] ?? getKoreaDateString().slice(0, 4);
  if (id.includes("_mid_") || id.endsWith("_mid") || id.includes("_mid")) return `${year}-1-mid`;
  if (id.includes("_final_") || id.endsWith("_final") || id.includes("_final")) return `${year}-1-final`;
  return "";
}

export function getDefaultExamCycleForDate(dateString = getKoreaDateString()) {
  const [yearText, monthText] = String(dateString).split("-");
  const year = Number(yearText) || new Date().getFullYear();
  const month = Number(monthText) || 1;
  if (month <= 5) return `${year}-1-mid`;
  if (month <= 7) return `${year}-1-final`;
  if (month <= 10) return `${year}-2-mid`;
  return `${year}-2-final`;
}

function getKoreaDateString(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Seoul",
    year: "numeric"
  }).format(date);
}

export function toExamPrepRow(row) {
  const inferredExamCycle = inferExamCycleFromPrepId(row.examPrepId);
  const examCycle = inferredExamCycle || row.examCycle || row.examTerm || getDefaultExamCycleForDate();
  return {
    exam_prep_id: row.examPrepId,
    school_name: row.schoolName || "학교 미입력",
    grade: row.grade || "학년 미입력",
    subject: row.subject || "수학",
    textbook: compact(row.textbook),
    publisher: compact(row.publisher),
    exam_term: examCycle,
    exam_period: compact(row.examPeriod),
    math_exam_date: compact(row.mathExamDate),
    scope: compact(row.scope),
    sub_materials: compact(row.subTextbook ?? row.subMaterials),
    review: compact(row.review),
    revised_review: compact(row.revisedReview),
    memo: compact(row.memo),
    exam_cycle: examCycle,
    math_exam_dates: row.mathExamDates ?? [],
    special_note: compact(row.specialNote),
    source: compact(row.source),
    review_ai_status: compact(row.reviewAiStatus),
    updated_at: new Date().toISOString()
  };
}

export function fromExamPrepRow(row) {
  const inferredExamCycle = inferExamCycleFromPrepId(row.exam_prep_id);
  const examCycle = inferredExamCycle || row.exam_cycle || row.exam_term || getDefaultExamCycleForDate();
  return {
    examPrepId: row.exam_prep_id,
    schoolName: row.school_name,
    grade: row.grade,
    subject: row.subject,
    textbook: row.textbook ?? "",
    publisher: row.publisher ?? "",
    examCycle,
    examTerm: examCycle,
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

export function toSchoolEventRow(event) {
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

export function fromSchoolEventRow(row) {
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

const academyReminderTypes = new Set([
  "consultation",
  "student_consultation",
  "class_notice",
  "parent_consultation",
  "student_intake",
  "special_note",
  "parent_contact",
  "custom"
]);
const academyReminderStatuses = new Set(["pending", "done", "canceled"]);
const academyReminderPriorities = new Set(["low", "normal", "high"]);

function normalizeAcademyReminderType(value = "custom") {
  const type = String(value || "custom").trim();
  if (type === "student") return "student_consultation";
  if (type === "parent") return "parent_consultation";
  return academyReminderTypes.has(type) ? type : "custom";
}

export function normalizeAcademyReminderStatus(value = "pending") {
  const status = String(value || "pending").trim();
  return academyReminderStatuses.has(status) ? status : "pending";
}

function normalizeAcademyReminderPriority(value = "normal") {
  const priority = String(value || "normal").trim();
  return academyReminderPriorities.has(priority) ? priority : "normal";
}

export function createAcademyReminderId() {
  return `reminder_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function toAcademyReminderRow(reminder = {}, { includeCompletedAt = true } = {}) {
  const reminderDate = reminder.reminderDate ?? reminder.date;
  const title = String(reminder.title ?? "").trim();
  if (!reminderDate) throw new Error("알림 날짜가 필요합니다.");
  if (!title) throw new Error("알림 제목이 필요합니다.");
  const reminderType = normalizeAcademyReminderType(reminder.reminderType ?? reminder.type);
  const sourcePayload = { ...(reminder.sourcePayload ?? {}) };
  // Existing production databases predate class_notice in the DB check constraint.
  // Persist that UI-only type as custom while preserving its semantic type in JSON.
  if (reminderType === "class_notice") sourcePayload.reminderType = "class_notice";
  const row = {
    reminder_id: reminder.reminderId || reminder.id || createAcademyReminderId(),
    reminder_type: reminderType === "class_notice" ? "custom" : reminderType,
    title,
    reminder_date: reminderDate,
    reminder_time: compact(normalizeClockTime(reminder.reminderTime ?? reminder.time)),
    student_id: compact(reminder.studentId),
    lesson_id: compact(reminder.lessonId),
    school_event_id: compact(reminder.schoolEventId),
    content: compact(reminder.content ?? reminder.memo),
    status: normalizeAcademyReminderStatus(reminder.status),
    priority: normalizeAcademyReminderPriority(reminder.priority),
    slack_notify: reminder.slackNotify !== false,
    source: compact(reminder.source),
    source_payload: sourcePayload,
    updated_at: new Date().toISOString()
  };
  if (includeCompletedAt) {
    row.completed_at = compact(reminder.completedAt);
  }
  return row;
}

export function fromAcademyReminderRow(row = {}) {
  const sourcePayload = row.source_payload ?? {};
  const reminderType = sourcePayload.reminderType === "class_notice"
    ? "class_notice"
    : normalizeAcademyReminderType(row.reminder_type);
  const reminderTime = normalizeClockTime(row.reminder_time);
  return {
    reminderId: row.reminder_id,
    id: row.reminder_id,
    reminderType,
    type: reminderType,
    title: row.title ?? "",
    reminderDate: row.reminder_date ?? "",
    date: row.reminder_date ?? "",
    reminderTime,
    time: reminderTime,
    studentId: row.student_id ?? "",
    lessonId: row.lesson_id ?? "",
    schoolEventId: row.school_event_id ?? "",
    content: row.content ?? "",
    memo: row.content ?? "",
    status: normalizeAcademyReminderStatus(row.status),
    priority: normalizeAcademyReminderPriority(row.priority),
    slackNotify: row.slack_notify !== false,
    source: row.source ?? "",
    sourcePayload,
    completedAt: row.completed_at ?? "",
    createdAt: row.created_at ?? "",
    updatedAt: row.updated_at ?? ""
  };
}
