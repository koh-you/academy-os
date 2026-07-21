import { sampleData } from "../../src/shared/data/sampleData.js";
import { deleteRows, getSupabaseStatus, isSupabaseConfigured, listRows, patchRows, upsertRows } from "../lib/supabaseRest.js";

const fallbackSource = "local_sample";
const databaseSource = "supabase";
const canceledLessonRetentionMs = 7 * 24 * 60 * 60 * 1000;
const pendingNotificationJobStatuses = ["scheduled", "queued", "pending_send"];
const sensitiveAppStateKeys = new Set(["teacherAccountSettings"]);
const deprecatedAppStateKeys = new Set(["examAnalyses", "examAnalysisFolders"]);
const hiddenAppStateKeys = new Set([...sensitiveAppStateKeys, ...deprecatedAppStateKeys]);
const lessonScheduleMetadataColumns = ["lesson_type", "lesson_topic", "source_makeup_task_id", "source_school_event_id", "source_label"];
const specialLectureLessonTrackColumns = [
  "lesson_track_id",
  "lesson_track_type",
  "special_lecture_guide_id",
  "special_lecture_session_id",
  "special_lecture_session_index",
  "special_lecture_student_schedules"
];

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

function errorMentionsAnyColumn(error, columns = []) {
  const message = String(error?.message ?? "");
  return columns.some((column) => message.includes(column));
}

function isSpecialLectureTrackedLesson(lesson = {}) {
  return Boolean(
    lesson.lessonType === "specialLecture" ||
    lesson.lessonTrackType === "specialLecture" ||
    lesson.specialLectureGuideId ||
    lesson.lessonTrackId
  );
}

function throwSpecialLectureLessonTrackSchemaError() {
  throw new Error("특강 수업일지 반영을 위해 supabase/20260715_special_lecture_lesson_tracks.sql과 supabase/20260718_special_lecture_enrollment_session_plans.sql 적용이 필요합니다.");
}

function throwSpecialLectureTallySessionRequestSchemaError() {
  throw new Error("Tally 특강 회차/시간 신청을 저장하려면 supabase/20260718_special_lecture_tally_session_requests.sql 적용이 필요합니다.");
}

function hasMeaningfulValue(value) {
  if (typeof value === "boolean") return value;
  return Boolean(String(value ?? "").trim());
}

function toStudentRow(student, { includeWithdrawalDetails = true, includeWithdrawnAt = true } = {}) {
  const row = {
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

  if (includeWithdrawnAt) {
    row.withdrawn_at = compact(student.withdrawnAt);
  }

  if (includeWithdrawalDetails) {
    row.withdrawal_reason = compact(student.withdrawalReason);
    row.withdrawal_comment = compact(student.withdrawalComment);
  }

  return row;
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
    scheduleOverride: row.schedule_override ?? "",
    withdrawalComment: row.withdrawal_comment ?? "",
    withdrawalReason: row.withdrawal_reason ?? "",
    withdrawnAt: row.withdrawn_at ?? ""
  };
}

function toStudentIntakeApplicantRow(applicant) {
  return {
    applicant_id: applicant.applicantId,
    source: applicant.source ?? "manual",
    source_submission_id: compact(applicant.sourceSubmissionId),
    form_id: compact(applicant.formId),
    form_name: compact(applicant.formName),
    status: applicant.status ?? "received",
    name: applicant.name,
    birth_year: applicant.birthYear ? Number(applicant.birthYear) : null,
    grade: compact(applicant.grade),
    school_name: compact(applicant.schoolName),
    student_phone: compact(applicant.studentPhone),
    parent_phone: compact(applicant.parentPhone),
    desired_class: compact(applicant.desiredClass),
    enrollment_status: compact(applicant.enrollmentStatus),
    current_learning_process: compact(applicant.currentLearningProcess),
    previous_semester_score: compact(applicant.previousSemesterScore),
    special_note: compact(applicant.specialNote),
    memo: compact(applicant.memo),
    raw_payload: applicant.rawPayload ?? null,
    created_at: applicant.createdAt ?? new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}

function fromStudentIntakeApplicantRow(row) {
  return {
    applicantId: row.applicant_id,
    source: row.source ?? "manual",
    sourceSubmissionId: row.source_submission_id ?? "",
    formId: row.form_id ?? "",
    formName: row.form_name ?? "",
    status: row.status ?? "received",
    name: row.name ?? "",
    birthYear: row.birth_year ?? "",
    grade: row.grade ?? "",
    schoolName: row.school_name ?? "",
    studentPhone: row.student_phone ?? "",
    parentPhone: row.parent_phone ?? "",
    desiredClass: row.desired_class ?? "",
    enrollmentStatus: row.enrollment_status ?? "",
    currentLearningProcess: row.current_learning_process ?? "",
    previousSemesterScore: row.previous_semester_score ?? "",
    specialNote: row.special_note ?? "",
    memo: row.memo ?? "",
    rawPayload: row.raw_payload ?? null,
    createdAt: row.created_at ?? "",
    updatedAt: row.updated_at ?? ""
  };
}

function createSpecialLectureApplicationId() {
  return `special_lecture_application_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeSpecialLectureApplicationStatus(value = "received") {
  const status = compact(value || "received");
  return ["received", "confirmed", "contacted", "waiting", "canceled"].includes(status) ? status : "received";
}

function createSpecialLectureEnrollmentId() {
  return `special_lecture_enrollment_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeSpecialLectureEnrollmentStatus(value = "active") {
  const status = compact(value || "active");
  return ["active", "canceled"].includes(status) ? status : "active";
}

function normalizeSpecialLectureRequestedSessionPlans(value) {
  const source = Array.isArray(value) ? value : [];
  return source
    .map((plan) => ({
      sessionIndex: Number(plan?.sessionIndex ?? plan?.session_index),
      requestedStartTime: compact(normalizeClockTime(plan?.requestedStartTime ?? plan?.requested_start_time)),
      requestedEndTime: compact(normalizeClockTime(plan?.requestedEndTime ?? plan?.requested_end_time)),
      overrideReason: compact(plan?.overrideReason ?? plan?.override_reason)
    }))
    .filter((plan) => Number.isInteger(plan.sessionIndex) && plan.sessionIndex >= 0);
}

function toSpecialLectureApplicationRow(application) {
  return {
    application_id: application.applicationId || application.id || createSpecialLectureApplicationId(),
    special_lecture_guide_id: compact(application.specialLectureGuideId),
    guide_slug: compact(application.guideSlug),
    campaign: compact(application.campaign),
    source: compact(application.source) || "manual",
    source_submission_id: compact(application.sourceSubmissionId),
    form_id: compact(application.formId),
    form_name: compact(application.formName),
    status: normalizeSpecialLectureApplicationStatus(application.status),
    student_name: compact(application.studentName || application.name),
    school_name: compact(application.schoolName),
    grade: compact(application.grade),
    student_phone: compact(application.studentPhone),
    parent_phone: compact(application.parentPhone),
    selected_session: compact(application.selectedSession),
    ...(application.requestedSessionPlans?.length
      ? { requested_session_plans: normalizeSpecialLectureRequestedSessionPlans(application.requestedSessionPlans) }
      : {}),
    memo: compact(application.memo),
    raw_payload: application.rawPayload ?? null,
    created_at: application.createdAt ?? new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}

function fromSpecialLectureApplicationRow(row) {
  return {
    applicationId: row.application_id,
    specialLectureGuideId: row.special_lecture_guide_id ?? "",
    guideSlug: row.guide_slug ?? "",
    campaign: row.campaign ?? "",
    source: row.source ?? "manual",
    sourceSubmissionId: row.source_submission_id ?? "",
    formId: row.form_id ?? "",
    formName: row.form_name ?? "",
    status: normalizeSpecialLectureApplicationStatus(row.status),
    studentName: row.student_name ?? "",
    schoolName: row.school_name ?? "",
    grade: row.grade ?? "",
    studentPhone: row.student_phone ?? "",
    parentPhone: row.parent_phone ?? "",
    selectedSession: row.selected_session ?? "",
    ...(row.requested_session_plans !== undefined
      ? { requestedSessionPlans: normalizeSpecialLectureRequestedSessionPlans(row.requested_session_plans) }
      : {}),
    memo: row.memo ?? "",
    rawPayload: row.raw_payload ?? null,
    createdAt: row.created_at ?? "",
    updatedAt: row.updated_at ?? ""
  };
}

function normalizeSpecialLectureEnrollmentSessionIds(value) {
  const source = Array.isArray(value) ? value : [];
  return [...new Set(source.map((sessionId) => compact(sessionId)).filter(Boolean))];
}

function normalizeSpecialLectureEnrollmentSessionPlans(value) {
  const source = Array.isArray(value) ? value : [];
  return source
    .map((plan) => ({
      sessionId: compact(plan?.sessionId ?? plan?.session_id),
      status: plan?.status === "excluded" ? "excluded" : "active",
      effectiveStartTime: compact(normalizeClockTime(plan?.effectiveStartTime ?? plan?.effective_start_time)),
      effectiveEndTime: compact(normalizeClockTime(plan?.effectiveEndTime ?? plan?.effective_end_time)),
      overrideReason: compact(plan?.overrideReason ?? plan?.override_reason)
    }))
    .filter((plan) => plan.sessionId);
}

function normalizeSpecialLectureStudentSchedules(value) {
  const source = Array.isArray(value) ? value : [];
  return source
    .map((schedule) => ({
      studentId: compact(schedule?.studentId ?? schedule?.student_id),
      startTime: compact(normalizeClockTime(schedule?.startTime ?? schedule?.start_time)),
      endTime: compact(normalizeClockTime(schedule?.endTime ?? schedule?.end_time)),
      scheduleType: schedule?.scheduleType === "adjusted" || schedule?.schedule_type === "adjusted" ? "adjusted" : "official",
      overrideReason: compact(schedule?.overrideReason ?? schedule?.override_reason)
    }))
    .filter((schedule) => schedule.studentId && schedule.startTime && schedule.endTime);
}

function toSpecialLectureEnrollmentRow(enrollment) {
  return {
    enrollment_id: enrollment.enrollmentId || enrollment.id || createSpecialLectureEnrollmentId(),
    special_lecture_guide_id: compact(enrollment.specialLectureGuideId),
    guide_slug: compact(enrollment.guideSlug),
    application_id: compact(enrollment.applicationId),
    student_id: compact(enrollment.studentId),
    status: normalizeSpecialLectureEnrollmentStatus(enrollment.status),
    session_ids: normalizeSpecialLectureEnrollmentSessionIds(enrollment.sessionIds),
    session_plans: normalizeSpecialLectureEnrollmentSessionPlans(enrollment.sessionPlans),
    ...(enrollment.planSource || enrollment.planReviewedAt
      ? {
          plan_source: compact(enrollment.planSource),
          plan_reviewed_at: compact(enrollment.planReviewedAt)
        }
      : {}),
    memo: compact(enrollment.memo),
    created_at: enrollment.createdAt ?? new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}

function fromSpecialLectureEnrollmentRow(row) {
  return {
    enrollmentId: row.enrollment_id,
    specialLectureGuideId: row.special_lecture_guide_id ?? "",
    guideSlug: row.guide_slug ?? "",
    applicationId: row.application_id ?? "",
    studentId: row.student_id ?? "",
    status: normalizeSpecialLectureEnrollmentStatus(row.status),
    sessionIds: Array.isArray(row.session_ids) ? row.session_ids : [],
    sessionPlans: normalizeSpecialLectureEnrollmentSessionPlans(row.session_plans),
    ...(row.plan_source !== undefined || row.plan_reviewed_at !== undefined
      ? {
          planSource: row.plan_source ?? "",
          planReviewedAt: row.plan_reviewed_at ?? ""
        }
      : {}),
    memo: row.memo ?? "",
    createdAt: row.created_at ?? "",
    updatedAt: row.updated_at ?? ""
  };
}

function toClassTemplateRow(classTemplate) {
  return {
    class_template_id: classTemplate.classTemplateId,
    name: classTemplate.name,
    days: classTemplate.days ?? [],
    start_time: compact(normalizeClockTime(classTemplate.startTime)),
    end_time: compact(normalizeClockTime(classTemplate.endTime)),
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
    startTime: normalizeClockTime(row.start_time),
    endTime: normalizeClockTime(row.end_time),
    color: row.color,
    status: row.status
  };
}

function toLessonRow(lesson, { includeScheduleMetadata = true } = {}) {
  const row = {
    lesson_id: lesson.lessonId,
    class_template_id: compact(lesson.classTemplateId),
    class_name: lesson.className,
    lesson_date: lesson.date,
    start_time: compact(normalizeClockTime(lesson.startTime)),
    end_time: compact(normalizeClockTime(lesson.endTime)),
    color: lesson.color ?? "#17213a",
    student_ids: lesson.studentIds ?? [],
    status: lesson.status ?? "scheduled",
    updated_at: new Date().toISOString()
  };
  if (includeScheduleMetadata) {
    row.lesson_type = compact(lesson.lessonType);
    row.lesson_topic = compact(lesson.lessonTopic);
    row.source_makeup_task_id = compact(lesson.sourceMakeupTaskId);
    row.source_school_event_id = compact(lesson.sourceSchoolEventId);
    row.source_label = compact(lesson.sourceLabel);
    row.lesson_track_id = compact(lesson.lessonTrackId);
    row.lesson_track_type = compact(lesson.lessonTrackType);
    row.special_lecture_guide_id = compact(lesson.specialLectureGuideId);
    row.special_lecture_session_id = compact(lesson.specialLectureSessionId);
    row.special_lecture_session_index = lesson.specialLectureSessionIndex === undefined || lesson.specialLectureSessionIndex === ""
      ? null
      : Number(lesson.specialLectureSessionIndex);
    if (lesson.specialLectureStudentSchedules !== undefined) {
      row.special_lecture_student_schedules = normalizeSpecialLectureStudentSchedules(lesson.specialLectureStudentSchedules);
    }
  }
  return row;
}

function fromLessonRow(row) {
  return {
    lessonId: row.lesson_id,
    classTemplateId: row.class_template_id ?? "",
    className: row.class_name,
    date: row.lesson_date,
    startTime: normalizeClockTime(row.start_time),
    endTime: normalizeClockTime(row.end_time),
    color: row.color,
    studentIds: row.student_ids ?? [],
    lessonType: row.lesson_type ?? "",
    lessonTopic: row.lesson_topic ?? "",
    sourceMakeupTaskId: row.source_makeup_task_id ?? "",
    sourceSchoolEventId: row.source_school_event_id ?? "",
    sourceLabel: row.source_label ?? "",
    lessonTrackId: row.lesson_track_id ?? "",
    lessonTrackType: row.lesson_track_type ?? "",
    specialLectureGuideId: row.special_lecture_guide_id ?? "",
    specialLectureSessionId: row.special_lecture_session_id ?? "",
    specialLectureSessionIndex: row.special_lecture_session_index ?? null,
    ...(row.special_lecture_student_schedules !== undefined
      ? { specialLectureStudentSchedules: normalizeSpecialLectureStudentSchedules(row.special_lecture_student_schedules) }
      : {}),
    status: row.status
  };
}

function toLessonRecordRow(record, { includeExtendedFields = true, includeAttendanceTimeFields = true } = {}) {
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

function fromLessonRecordRow(row) {
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

function toHomeworkRow(homework, { includeExtendedFields = true } = {}) {
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
    teacherStatus: row.teacher_status ?? "unverified",
    status: row.status ?? (row.teacher_status === "verified" ? "verified" : "assigned"),
    totalProblems: row.total_problems ?? null,
    assignmentStatus: row.assignment_status ?? "",
    incompleteHomework: row.incomplete_homework ?? "",
    checkedAt: row.checked_at ?? "",
    verifiedAt: row.verified_at ?? "",
    linkedFromLessonId: row.linked_from_lesson_id ?? "",
    linkedFromDate: row.linked_from_date ?? ""
  };
}

function sanitizePositiveInteger(value) {
  if (value === "" || value === null || value === undefined) return null;
  const number = Number(value);
  if (!Number.isFinite(number)) return null;
  return Math.max(0, Math.round(number));
}

function toTestSessionRow(session = {}) {
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

function fromTestSessionRow(row = {}) {
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

function toTestAttemptRow(attempt = {}) {
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

function fromTestAttemptRow(row = {}) {
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

function fromExamPrepRow(row) {
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

function getDefaultExamCycleForDate(dateString = getKoreaDateString()) {
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

function compactExamPrepKeyPart(value = "") {
  return String(value || "").replace(/\s+/g, "");
}

function normalizeSchoolName(value = "") {
  return String(value || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[·ㆍ.,_/\\-]/g, "")
    .replace(/여자고등학교/g, "여고")
    .replace(/여자고/g, "여고")
    .replace(/남자고등학교/g, "남고")
    .replace(/남자고/g, "남고")
    .replace(/고등학교/g, "고")
    .replace(/중학교/g, "중");
}

function normalizeExamEntries(row = {}) {
  return Array.isArray(row.mathExamDates) ? row.mathExamDates : [];
}

function getPrimaryMathExamDate(entries = []) {
  return entries.find((entry) => entry?.date)?.date || "";
}

function hasDatedMathExamEntries(row = {}) {
  return normalizeExamEntries(row).some((entry) => String(entry?.date ?? "").trim());
}

function mergeExamPrepScheduleFields(row = {}, existingRow = null) {
  if (!existingRow) return row;
  const nextRow = { ...row };
  const existingEntries = normalizeExamEntries(existingRow);
  if (!String(nextRow.examPeriod ?? "").trim() && existingRow.examPeriod) {
    nextRow.examPeriod = existingRow.examPeriod;
  }
  if (!hasDatedMathExamEntries(nextRow) && hasDatedMathExamEntries(existingRow)) {
    nextRow.mathExamDates = existingEntries;
  }
  if (!String(nextRow.mathExamDate ?? "").trim()) {
    nextRow.mathExamDate = getPrimaryMathExamDate(normalizeExamEntries(nextRow)) || existingRow.mathExamDate || "";
  }
  return nextRow;
}

async function getExistingExamPrepRowMap(examPrepIds = []) {
  const idSet = new Set(examPrepIds.filter(Boolean));
  if (!idSet.size) return new Map();
  const rows = await listRows("exam_prep_rows", "select=*", { requireServiceRole: true });
  return new Map(
    rows
      .map(fromExamPrepRow)
      .filter((row) => idSet.has(row.examPrepId))
      .map((row) => [row.examPrepId, row])
  );
}

function getExamPrepLogicalKey(row = {}) {
  return [
    row.examCycle || getDefaultExamCycleForDate(),
    normalizeSchoolName(row.schoolName || "") || compactExamPrepKeyPart(row.schoolName || "학교 미입력"),
    compactExamPrepKeyPart(row.grade || "학년 미입력"),
    compactExamPrepKeyPart(row.subject || "공통수학1")
  ].join("|");
}

function getExamPrepRowCompleteness(row = {}) {
  return [
    row.publisher,
    row.examPeriod,
    row.mathExamDate,
    row.scope,
    row.subTextbook,
    row.review,
    row.revisedReview,
    row.specialNote,
    row.memo,
    ...normalizeExamEntries(row).flatMap((entry) => [entry.date, entry.subject, entry.label])
  ].filter((value) => String(value ?? "").trim()).length;
}

function isPlaceholderExamPrepRow(row = {}) {
  return String(row.examPrepId || "").endsWith("_textbook") || !String(row.publisher || "").trim();
}

function chooseRepresentativeExamPrepRow(currentRow, candidateRow) {
  const currentScore = getExamPrepRowCompleteness(currentRow);
  const candidateScore = getExamPrepRowCompleteness(candidateRow);
  if (candidateScore !== currentScore) return candidateScore > currentScore ? candidateRow : currentRow;
  const currentPlaceholder = isPlaceholderExamPrepRow(currentRow);
  const candidatePlaceholder = isPlaceholderExamPrepRow(candidateRow);
  if (currentPlaceholder !== candidatePlaceholder) return candidatePlaceholder ? currentRow : candidateRow;
  return String(candidateRow.updatedAt || "") > String(currentRow.updatedAt || "") ? candidateRow : currentRow;
}

function findDuplicateExamPrepRows(rows = []) {
  const grouped = new Map();
  rows.forEach((row) => {
    const key = getExamPrepLogicalKey(row);
    const previous = grouped.get(key);
    grouped.set(key, previous ? chooseRepresentativeExamPrepRow(previous, row) : row);
  });
  const representativeIds = new Set([...grouped.values()].map((row) => row.examPrepId));
  return rows.filter((row) => !representativeIds.has(row.examPrepId));
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

function normalizeAcademyReminderStatus(value = "pending") {
  const status = String(value || "pending").trim();
  return academyReminderStatuses.has(status) ? status : "pending";
}

function normalizeAcademyReminderPriority(value = "normal") {
  const priority = String(value || "normal").trim();
  return academyReminderPriorities.has(priority) ? priority : "normal";
}

function createAcademyReminderId() {
  return `reminder_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function isMissingAcademyRemindersTable(error) {
  const message = String(error?.message ?? "").toLowerCase();
  return message.includes("academy_reminders") || message.includes("schema cache");
}

function toAcademyReminderRow(reminder = {}, { includeCompletedAt = true } = {}) {
  const reminderDate = reminder.reminderDate ?? reminder.date;
  const title = String(reminder.title ?? "").trim();
  if (!reminderDate) throw new Error("알림 날짜가 필요합니다.");
  if (!title) throw new Error("알림 제목이 필요합니다.");
  const row = {
    reminder_id: reminder.reminderId || reminder.id || createAcademyReminderId(),
    reminder_type: normalizeAcademyReminderType(reminder.reminderType ?? reminder.type),
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
    source_payload: reminder.sourcePayload ?? {},
    updated_at: new Date().toISOString()
  };
  if (includeCompletedAt) {
    row.completed_at = compact(reminder.completedAt);
  }
  return row;
}

function fromAcademyReminderRow(row = {}) {
  const reminderType = normalizeAcademyReminderType(row.reminder_type);
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
    sourcePayload: row.source_payload ?? {},
    completedAt: row.completed_at ?? "",
    createdAt: row.created_at ?? "",
    updatedAt: row.updated_at ?? ""
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

async function cancelPendingNotificationJobsForLesson(lessonId, reason = "수업 변경") {
  if (!lessonId || !isSupabaseConfigured({ requireServiceRole: true })) return [];
  const encodedLessonId = encodeURIComponent(lessonId);
  const statusFilter = pendingNotificationJobStatuses.join(",");
  const rows = await listRows(
    "notification_jobs",
    `select=notification_job_id&lesson_id=eq.${encodedLessonId}&status=in.(${statusFilter})`,
    { requireServiceRole: true }
  );
  const nowIso = new Date().toISOString();
  for (const row of rows) {
    if (!row.notification_job_id) continue;
    await patchRows(
      "notification_jobs",
      `notification_job_id=eq.${encodeURIComponent(row.notification_job_id)}&status=in.(${statusFilter})`,
      {
        error: reason,
        status: "canceled",
        updated_at: nowIso
      }
    );
  }
  return rows.map((row) => row.notification_job_id).filter(Boolean);
}

async function cancelPendingNotificationJobsForRemovedLessonStudents(lesson = {}, reason = "수업 명단에서 제외됨") {
  if (!lesson.lessonId || !isSupabaseConfigured({ requireServiceRole: true })) return [];
  const allowedStudentIds = new Set(Array.isArray(lesson.studentIds) ? lesson.studentIds : []);
  const encodedLessonId = encodeURIComponent(lesson.lessonId);
  const statusFilter = pendingNotificationJobStatuses.join(",");
  const rows = await listRows(
    "notification_jobs",
    `select=notification_job_id,student_id&lesson_id=eq.${encodedLessonId}&status=in.(${statusFilter})`,
    { requireServiceRole: true }
  );
  const removedRows = rows.filter((row) => row.notification_job_id && !allowedStudentIds.has(row.student_id));
  const nowIso = new Date().toISOString();
  for (const row of removedRows) {
    await patchRows(
      "notification_jobs",
      `notification_job_id=eq.${encodeURIComponent(row.notification_job_id)}&status=in.(${statusFilter})`,
      {
        error: reason,
        status: "canceled",
        updated_at: nowIso
      }
    );
  }
  return removedRows.map((row) => row.notification_job_id).filter(Boolean);
}

async function deleteLessonStudentRecordsForRemovedLessonStudents(lesson = {}) {
  if (!lesson.lessonId || !isSupabaseConfigured({ requireServiceRole: true })) return [];
  const allowedStudentIds = new Set(Array.isArray(lesson.studentIds) ? lesson.studentIds : []);
  const encodedLessonId = encodeURIComponent(lesson.lessonId);
  const rows = await listRows(
    "lesson_student_records",
    `select=lesson_student_record_id,student_id&lesson_id=eq.${encodedLessonId}`,
    { requireServiceRole: true }
  );
  const removedRows = rows.filter((row) => row.lesson_student_record_id && !allowedStudentIds.has(row.student_id));
  for (const row of removedRows) {
    await deleteRows(
      "lesson_student_records",
      `lesson_student_record_id=eq.${encodeURIComponent(row.lesson_student_record_id)}`
    );
  }
  return removedRows.map((row) => row.lesson_student_record_id).filter(Boolean);
}

function filterLessonRecordsToCurrentRosters(records = [], lessons = []) {
  const allowedStudentIdsByLesson = new Map(
    lessons.map((lesson) => [
      lesson.lessonId,
      new Set(Array.isArray(lesson.studentIds) ? lesson.studentIds : [])
    ])
  );
  return records.filter((record) => {
    const allowedStudentIds = allowedStudentIdsByLesson.get(record.lessonId);
    if (!allowedStudentIds) return false;
    return allowedStudentIds.has(record.studentId);
  });
}

async function assertLessonStudentRecordBelongsToLesson(lessonId, studentId) {
  if (!lessonId || !studentId || !isSupabaseConfigured({ requireServiceRole: true })) return;
  const rows = await listRows(
    "lessons",
    `select=lesson_id,student_ids&lesson_id=eq.${encodeURIComponent(lessonId)}&limit=1`,
    { requireServiceRole: true }
  );
  const [lesson] = rows;
  if (!lesson) throw new Error("수업을 찾지 못했습니다.");
  const studentIds = Array.isArray(lesson.student_ids) ? lesson.student_ids : [];
  if (!studentIds.includes(studentId)) {
    throw new Error("수업 명단에 없는 학생의 수업일지는 저장할 수 없습니다.");
  }
}

function toAttendanceEventRow(event = {}) {
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

function fromAttendanceEventRow(row) {
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

  const rows = await listRows("students", "select=*&order=name.asc", { requireServiceRole: true });
  return { source: databaseSource, students: rows.map(fromStudentRow) };
}

export async function listAttendanceCandidateStudents({ phoneLast4 = "", studentId = "" } = {}) {
  const digits = String(phoneLast4 ?? "").replace(/\D/g, "").slice(-4);
  if (!isSupabaseConfigured()) {
    const students = sampleData.students.filter((student) => {
      if (studentId) return student.studentId === studentId;
      if ((student.status ?? "active") !== "active") return false;
      return String(student.studentPhone ?? "").replace(/\D/g, "").slice(-4) === digits;
    });
    return { source: fallbackSource, students };
  }

  if (studentId) {
    const rows = await listRows(
      "students",
      `select=*&student_id=eq.${encodeURIComponent(studentId)}&limit=1`,
      { requireServiceRole: true }
    );
    return { source: databaseSource, students: rows.map(fromStudentRow) };
  }

  if (digits.length !== 4) {
    return { source: databaseSource, students: [] };
  }

  const rows = await listRows(
    "students",
    `select=*&status=eq.active&student_phone=like.${encodeURIComponent(`*${digits}`)}&limit=10`,
    { requireServiceRole: true }
  );
  const students = rows.map(fromStudentRow).filter((student) => (
    String(student.studentPhone ?? "").replace(/\D/g, "").slice(-4) === digits
  ));
  if (students.length > 0) return { source: databaseSource, students };

  const fallbackRows = await listRows(
    "students",
    "select=*&status=eq.active&limit=1000",
    { requireServiceRole: true }
  );
  return {
    source: databaseSource,
    students: fallbackRows.map(fromStudentRow).filter((student) => (
      String(student.studentPhone ?? "").replace(/\D/g, "").slice(-4) === digits
    ))
  };
}

export async function listStudentIntakeApplicants() {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, applicants: [] };
  }

  try {
    const rows = await listRows("student_intake_applicants", "select=*&order=created_at.desc", {
      requireServiceRole: true
    });
    return { source: databaseSource, applicants: rows.map(fromStudentIntakeApplicantRow) };
  } catch (error) {
    if (String(error?.message ?? "").includes("student_intake_applicants")) {
      return { source: databaseSource, applicants: [], warning: "student_intake_applicants table is not ready" };
    }
    throw error;
  }
}

export async function listSpecialLectureApplications() {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, applications: [] };
  }

  try {
    const rows = await listRows("special_lecture_applications", "select=*&order=created_at.desc", {
      requireServiceRole: true
    });
    return { source: databaseSource, applications: rows.map(fromSpecialLectureApplicationRow) };
  } catch (error) {
    if (String(error?.message ?? "").includes("special_lecture_applications")) {
      return { source: databaseSource, applications: [], warning: "special_lecture_applications table is not ready" };
    }
    throw error;
  }
}

export async function listSpecialLectureEnrollments() {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, enrollments: [] };
  }

  try {
    const rows = await listRows("special_lecture_enrollments", "select=*&order=created_at.desc", {
      requireServiceRole: true
    });
    return { source: databaseSource, enrollments: rows.map(fromSpecialLectureEnrollmentRow) };
  } catch (error) {
    if (String(error?.message ?? "").includes("special_lecture_enrollments")) {
      return { source: databaseSource, enrollments: [], warning: "special_lecture_enrollments table is not ready" };
    }
    throw error;
  }
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

  await deleteExpiredCanceledLessons();
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

  let row;
  try {
    [row] = await upsertRows("students", [toStudentRow(student)]);
  } catch (error) {
    if (errorMentionsAnyColumn(error, ["withdrawal_reason", "withdrawal_comment"])) {
      if (student.withdrawalReason || student.withdrawalComment) {
        throw new Error("Supabase students.withdrawal_reason/withdrawal_comment migration이 필요합니다. supabase/20260701_student_withdrawal_reason.sql을 실행한 뒤 다시 저장하세요.");
      }
      [row] = await upsertRows("students", [toStudentRow(student, { includeWithdrawalDetails: false })]);
    } else if (errorMentionsAnyColumn(error, ["withdrawn_at"])) {
      if (student.withdrawnAt) {
        throw new Error("Supabase students.withdrawn_at migration이 필요합니다. supabase/20260624_persist_frontend_fields.sql을 실행한 뒤 다시 저장하세요.");
      }
      [row] = await upsertRows("students", [toStudentRow(student, { includeWithdrawnAt: false })]);
    } else {
      throw error;
    }
  }
  return { source: databaseSource, student: fromStudentRow(row) };
}

export async function upsertStudents(students) {
  if (!Array.isArray(students) || students.length === 0) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, students: [] };
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, students };
  }

  let rows;
  try {
    rows = await upsertRows("students", students.map(toStudentRow));
  } catch (error) {
    if (errorMentionsAnyColumn(error, ["withdrawal_reason", "withdrawal_comment"])) {
      if (students.some((student) => student.withdrawalReason || student.withdrawalComment)) {
        throw new Error("Supabase students.withdrawal_reason/withdrawal_comment migration이 필요합니다. supabase/20260701_student_withdrawal_reason.sql을 실행한 뒤 다시 저장하세요.");
      }
      rows = await upsertRows("students", students.map((student) => toStudentRow(student, { includeWithdrawalDetails: false })));
    } else if (errorMentionsAnyColumn(error, ["withdrawn_at"])) {
      if (students.some((student) => student.withdrawnAt)) {
        throw new Error("Supabase students.withdrawn_at migration이 필요합니다. supabase/20260624_persist_frontend_fields.sql을 실행한 뒤 다시 저장하세요.");
      }
      rows = await upsertRows("students", students.map((student) => toStudentRow(student, { includeWithdrawnAt: false })));
    } else {
      throw error;
    }
  }
  return { source: databaseSource, students: rows.map(fromStudentRow) };
}

export async function upsertStudentIntakeApplicant(applicant) {
  const now = new Date().toISOString();
  const normalizedApplicant = {
    ...applicant,
    applicantId: applicant.applicantId || `intake_${Date.now()}`,
    status: applicant.status || "received",
    createdAt: applicant.createdAt || now,
    updatedAt: now
  };
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, applicant: normalizedApplicant };
  }

  const [row] = await upsertRows("student_intake_applicants", [toStudentIntakeApplicantRow(normalizedApplicant)]);
  return { source: databaseSource, applicant: fromStudentIntakeApplicantRow(row) };
}

export async function upsertSpecialLectureApplication(application) {
  const now = new Date().toISOString();
  const normalizedApplication = {
    ...application,
    applicationId: application.applicationId || application.id || createSpecialLectureApplicationId(),
    status: normalizeSpecialLectureApplicationStatus(application.status),
    createdAt: application.createdAt || now,
    updatedAt: now
  };
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, application: normalizedApplication };
  }

  let row;
  try {
    [row] = await upsertRows("special_lecture_applications", [toSpecialLectureApplicationRow(normalizedApplication)], {
      onConflict: "application_id"
    });
  } catch (error) {
    if (errorMentionsAnyColumn(error, ["requested_session_plans"])) throwSpecialLectureTallySessionRequestSchemaError();
    throw error;
  }
  return { source: databaseSource, application: fromSpecialLectureApplicationRow(row) };
}

export async function deleteSpecialLectureApplication(applicationId) {
  const normalizedApplicationId = String(applicationId ?? "").trim();
  if (!normalizedApplicationId) throw new Error("삭제할 특강 신청 원본 ID가 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, applicationId: normalizedApplicationId, deleted: false, linkedEnrollmentIds: [] };
  }

  const encodedApplicationId = encodeURIComponent(normalizedApplicationId);
  const linkedEnrollmentRows = await listRows(
    "special_lecture_enrollments",
    `select=enrollment_id&application_id=eq.${encodedApplicationId}`,
    { requireServiceRole: true }
  );
  const linkedEnrollmentIds = linkedEnrollmentRows.map((row) => row.enrollment_id).filter(Boolean);
  if (linkedEnrollmentIds.length) {
    return { source: databaseSource, applicationId: normalizedApplicationId, deleted: false, linkedEnrollmentIds };
  }

  const existingRows = await listRows(
    "special_lecture_applications",
    `select=application_id&application_id=eq.${encodedApplicationId}`,
    { requireServiceRole: true }
  );
  if (!existingRows.length) {
    return { source: databaseSource, applicationId: normalizedApplicationId, deleted: false, linkedEnrollmentIds: [] };
  }

  await deleteRows("special_lecture_applications", `application_id=eq.${encodedApplicationId}`);
  const remainingRows = await listRows(
    "special_lecture_applications",
    `select=application_id&application_id=eq.${encodedApplicationId}`,
    { requireServiceRole: true }
  );
  return {
    source: databaseSource,
    applicationId: normalizedApplicationId,
    deleted: remainingRows.length === 0,
    linkedEnrollmentIds: []
  };
}

export async function upsertSpecialLectureEnrollment(enrollment) {
  const now = new Date().toISOString();
  const normalizedEnrollment = {
    ...enrollment,
    enrollmentId: enrollment.enrollmentId || enrollment.id || createSpecialLectureEnrollmentId(),
    status: normalizeSpecialLectureEnrollmentStatus(enrollment.status),
    createdAt: enrollment.createdAt || now,
    updatedAt: now
  };
  if (!normalizedEnrollment.specialLectureGuideId) throw new Error("특강 안내문 ID가 필요합니다.");
  if (!normalizedEnrollment.studentId) throw new Error("특강 수강 학생 ID가 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, enrollment: normalizedEnrollment };
  }

  let row;
  try {
    [row] = await upsertRows("special_lecture_enrollments", [toSpecialLectureEnrollmentRow(normalizedEnrollment)], {
      onConflict: "enrollment_id"
    });
  } catch (error) {
    if (errorMentionsAnyColumn(error, ["plan_source", "plan_reviewed_at"])) throwSpecialLectureTallySessionRequestSchemaError();
    throw error;
  }
  return { source: databaseSource, enrollment: fromSpecialLectureEnrollmentRow(row) };
}

export async function upsertSpecialLectureEnrollments(enrollments) {
  if (!Array.isArray(enrollments) || enrollments.length === 0) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, enrollments: [] };
  }
  const now = new Date().toISOString();
  const normalizedEnrollments = enrollments.map((enrollment) => ({
    ...enrollment,
    enrollmentId: enrollment.enrollmentId || enrollment.id || createSpecialLectureEnrollmentId(),
    status: normalizeSpecialLectureEnrollmentStatus(enrollment.status),
    createdAt: enrollment.createdAt || now,
    updatedAt: now
  }));
  const invalidEnrollment = normalizedEnrollments.find((enrollment) => !enrollment.specialLectureGuideId || !enrollment.studentId);
  if (invalidEnrollment) throw new Error("특강 수강명단 저장에는 안내문 ID와 학생 ID가 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, enrollments: normalizedEnrollments };
  }

  let rows;
  try {
    rows = await upsertRows(
      "special_lecture_enrollments",
      normalizedEnrollments.map(toSpecialLectureEnrollmentRow),
      { onConflict: "enrollment_id" }
    );
  } catch (error) {
    if (errorMentionsAnyColumn(error, ["plan_source", "plan_reviewed_at"])) throwSpecialLectureTallySessionRequestSchemaError();
    throw error;
  }
  return { source: databaseSource, enrollments: rows.map(fromSpecialLectureEnrollmentRow) };
}

export async function upsertLesson(lesson) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, lesson };
  }

  let row;
  try {
    [row] = await upsertRows("lessons", [toLessonRow(lesson)], { onConflict: "lesson_id" });
  } catch (error) {
    if (
      isSpecialLectureTrackedLesson(lesson) &&
      errorMentionsAnyColumn(error, [...lessonScheduleMetadataColumns, ...specialLectureLessonTrackColumns])
    ) {
      throwSpecialLectureLessonTrackSchemaError();
    }
    if (!errorMentionsAnyColumn(error, lessonScheduleMetadataColumns)) throw error;
    [row] = await upsertRows("lessons", [toLessonRow(lesson, { includeScheduleMetadata: false })], { onConflict: "lesson_id" });
  }
  const savedLesson = fromLessonRow(row);
  await cancelPendingNotificationJobsForRemovedLessonStudents(savedLesson, "수업 명단에서 제외됨");
  await deleteLessonStudentRecordsForRemovedLessonStudents(savedLesson);
  return { source: databaseSource, lesson: savedLesson };
}

export async function upsertLessons(lessons) {
  if (!Array.isArray(lessons) || lessons.length === 0) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, lessons: [] };
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, lessons };
  }

  let rows;
  try {
    rows = await upsertRows("lessons", lessons.map((lesson) => toLessonRow(lesson)), { onConflict: "lesson_id" });
  } catch (error) {
    if (
      lessons.some(isSpecialLectureTrackedLesson) &&
      errorMentionsAnyColumn(error, [...lessonScheduleMetadataColumns, ...specialLectureLessonTrackColumns])
    ) {
      throwSpecialLectureLessonTrackSchemaError();
    }
    if (!errorMentionsAnyColumn(error, lessonScheduleMetadataColumns)) throw error;
    rows = await upsertRows(
      "lessons",
      lessons.map((lesson) => toLessonRow(lesson, { includeScheduleMetadata: false })),
      { onConflict: "lesson_id" }
    );
  }
  const savedLessons = rows.map(fromLessonRow);
  for (const savedLesson of savedLessons) {
    await cancelPendingNotificationJobsForRemovedLessonStudents(savedLesson, "수업 명단에서 제외됨");
    await deleteLessonStudentRecordsForRemovedLessonStudents(savedLesson);
  }
  return { source: databaseSource, lessons: savedLessons };
}

export async function deleteLesson(lessonId) {
  if (!lessonId) throw new Error("삭제할 수업 ID가 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, lessonId };
  }

  const encodedLessonId = encodeURIComponent(lessonId);
  await cancelPendingNotificationJobsForLesson(lessonId, "수업 삭제");
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

export async function deleteExpiredCanceledLessons() {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, deletedLessonIds: [] };
  }

  const cutoff = new Date(Date.now() - canceledLessonRetentionMs).toISOString();
  const lessonRows = await listRows(
    "lessons",
    `select=lesson_id&status=eq.canceled&updated_at=lt.${encodeURIComponent(cutoff)}`,
    { requireServiceRole: true }
  );
  const deletedLessonIds = lessonRows.map((row) => row.lesson_id).filter(Boolean);
  for (const lessonId of deletedLessonIds) {
    await deleteLesson(lessonId);
  }
  return { source: databaseSource, cutoff, deletedLessonIds };
}

export async function listLessonStudentRecords() {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, records: sampleData.lessonStudentRecords };
  }

  const [recordRows, lessonRows] = await Promise.all([
    listRows("lesson_student_records", "select=*&order=lesson_id.asc", { requireServiceRole: true }),
    listRows("lessons", "select=lesson_id,student_ids", { requireServiceRole: true })
  ]);
  const lessons = lessonRows.map((row) => ({
    lessonId: row.lesson_id,
    studentIds: Array.isArray(row.student_ids) ? row.student_ids : []
  }));
  const records = filterLessonRecordsToCurrentRosters(recordRows.map(fromLessonRecordRow), lessons);
  return { source: databaseSource, records };
}

export async function listLessonStudentRecordsForLessons(lessons = []) {
  const lessonRows = lessons
    .filter((lesson) => lesson?.lessonId)
    .map((lesson) => ({
      lessonId: lesson.lessonId,
      studentIds: Array.isArray(lesson.studentIds) ? lesson.studentIds : []
    }));
  const lessonIds = [...new Set(lessonRows.map((lesson) => lesson.lessonId))];
  if (lessonIds.length === 0) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, records: [] };
  }
  if (!isSupabaseConfigured()) {
    const lessonIdSet = new Set(lessonIds);
    return {
      source: fallbackSource,
      records: filterLessonRecordsToCurrentRosters(
        sampleData.lessonStudentRecords.filter((record) => lessonIdSet.has(record.lessonId)),
        lessonRows
      )
    };
  }

  const lessonIdFilter = lessonIds.map((lessonId) => encodeURIComponent(lessonId)).join(",");
  const recordRows = await listRows(
    "lesson_student_records",
    `select=*&lesson_id=in.(${lessonIdFilter})&order=lesson_id.asc`,
    { requireServiceRole: true }
  );
  const records = filterLessonRecordsToCurrentRosters(recordRows.map(fromLessonRecordRow), lessonRows);
  return { source: databaseSource, records };
}

export async function getLessonStudentRecordForAttendance(lessonId, studentId) {
  if (!lessonId || !studentId) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, record: null };
  }
  if (!isSupabaseConfigured()) {
    return {
      source: fallbackSource,
      record: sampleData.lessonStudentRecords.find((record) => (
        record.lessonId === lessonId && record.studentId === studentId
      )) ?? null
    };
  }

  const rows = await listRows(
    "lesson_student_records",
    `select=*&lesson_id=eq.${encodeURIComponent(lessonId)}&student_id=eq.${encodeURIComponent(studentId)}&limit=1`,
    { requireServiceRole: true }
  );
  return { source: databaseSource, record: rows[0] ? fromLessonRecordRow(rows[0]) : null };
}

export async function pruneStaleLessonStudentRecords(lessonId) {
  if (!lessonId) throw new Error("정리할 수업 ID가 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, deletedLessonStudentRecordIds: [], lessonId };
  }
  const rows = await listRows(
    "lessons",
    `select=*&lesson_id=eq.${encodeURIComponent(lessonId)}&limit=1`,
    { requireServiceRole: true }
  );
  if (!rows[0]) throw new Error("수업을 찾지 못했습니다.");
  const lesson = fromLessonRow(rows[0]);
  await cancelPendingNotificationJobsForRemovedLessonStudents(lesson, "수업 명단에서 제외됨");
  const deletedLessonStudentRecordIds = await deleteLessonStudentRecordsForRemovedLessonStudents(lesson);
  return { source: databaseSource, deletedLessonStudentRecordIds, lessonId };
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

export async function deleteExamPrepRow(examPrepId) {
  if (!examPrepId) throw new Error("삭제할 시험정보 ID가 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, deletedExamPrepRowIds: [examPrepId] };
  }

  await deleteRows("exam_prep_rows", `exam_prep_id=eq.${encodeURIComponent(examPrepId)}`);
  return { source: databaseSource, deletedExamPrepRowIds: [examPrepId] };
}

export async function deleteDuplicateExamPrepRows() {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, deletedExamPrepRowIds: [] };
  }

  const rows = await listRows("exam_prep_rows", "select=*&order=school_name.asc,grade.asc,subject.asc", { requireServiceRole: true });
  const examPrepRows = rows.map(fromExamPrepRow);
  const duplicateRows = findDuplicateExamPrepRows(examPrepRows);
  for (const row of duplicateRows) {
    await deleteRows("exam_prep_rows", `exam_prep_id=eq.${encodeURIComponent(row.examPrepId)}`);
  }
  return { source: databaseSource, deletedExamPrepRowIds: duplicateRows.map((row) => row.examPrepId) };
}

export async function upsertExamPrepRow(row) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, examPrepRow: row };
  }

  const existingRows = await getExistingExamPrepRowMap([row.examPrepId]);
  const safeRow = mergeExamPrepScheduleFields(row, existingRows.get(row.examPrepId));
  const [savedRow] = await upsertRows("exam_prep_rows", [toExamPrepRow(safeRow)]);
  return { source: databaseSource, examPrepRow: fromExamPrepRow(savedRow) };
}

export async function upsertExamPrepRows(rows) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, examPrepRows: [] };
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, examPrepRows: rows };
  }

  const existingRows = await getExistingExamPrepRowMap(rows.map((row) => row.examPrepId));
  const safeRows = rows.map((row) => mergeExamPrepScheduleFields(row, existingRows.get(row.examPrepId)));
  const savedRows = await upsertRows("exam_prep_rows", safeRows.map(toExamPrepRow));
  return { source: databaseSource, examPrepRows: savedRows.map(fromExamPrepRow) };
}

export async function listTestSessions(filters = {}) {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, testSessions: [] };
  }

  const query = ["select=*", "order=test_date.desc,updated_at.desc"];
  if (filters.testDate) query.push(`test_date=eq.${encodeURIComponent(filters.testDate)}`);
  if (filters.classTemplateId) query.push(`class_template_id=eq.${encodeURIComponent(filters.classTemplateId)}`);
  const rows = await listRows("test_sessions", query.join("&"), { requireServiceRole: true });
  return { source: databaseSource, testSessions: rows.map(fromTestSessionRow) };
}

export async function listTestAttempts(filters = {}) {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, testAttempts: [] };
  }

  const query = ["select=*", "order=updated_at.desc"];
  if (filters.testSessionId) query.push(`test_session_id=eq.${encodeURIComponent(filters.testSessionId)}`);
  if (filters.studentId) query.push(`student_id=eq.${encodeURIComponent(filters.studentId)}`);
  const rows = await listRows("test_attempts", query.join("&"), { requireServiceRole: true });
  return { source: databaseSource, testAttempts: rows.map(fromTestAttemptRow) };
}

export async function upsertTestSessionWithAttempts(session, attempts = []) {
  if (!session?.testSessionId) throw new Error("저장할 테스트 회차 ID가 필요합니다.");
  if (!session?.testDate) throw new Error("테스트 날짜가 필요합니다.");
  if (!session?.testTitle) throw new Error("시험지명이 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, testSession: session, testAttempts: attempts };
  }

  let savedSessionRows;
  try {
    savedSessionRows = await upsertRows("test_sessions", [toTestSessionRow(session)], { onConflict: "test_session_id" });
  } catch (error) {
    throw new Error(`Supabase 테스트 응시 기록 SQL이 필요합니다. supabase/20260713_test_sessions.sql을 실행한 뒤 다시 저장하세요. (${error.message})`);
  }

  const normalizedAttempts = attempts
    .filter((attempt) => attempt?.studentId && ["taken", "not_taken"].includes(attempt.status))
    .map((attempt) => ({
      ...attempt,
      testSessionId: session.testSessionId,
      testAttemptId: attempt.testAttemptId || `test_attempt_${session.testSessionId}_${attempt.studentId}`
    }));
  let savedAttemptRows = [];
  if (normalizedAttempts.length > 0) {
    try {
      savedAttemptRows = await upsertRows(
        "test_attempts",
        normalizedAttempts.map(toTestAttemptRow),
        { onConflict: "test_session_id,student_id" }
      );
      const existingAttemptRows = await listRows(
        "test_attempts",
        `select=test_attempt_id,student_id&test_session_id=eq.${encodeURIComponent(session.testSessionId)}`,
        { requireServiceRole: true }
      );
      const keptStudentIds = new Set(normalizedAttempts.map((attempt) => attempt.studentId));
      for (const existingAttempt of existingAttemptRows) {
        if (!keptStudentIds.has(existingAttempt.student_id)) {
          await deleteRows("test_attempts", `test_attempt_id=eq.${encodeURIComponent(existingAttempt.test_attempt_id)}`);
        }
      }
    } catch (error) {
      throw new Error(`Supabase 테스트 응시 결과 SQL이 필요합니다. supabase/20260713_test_sessions.sql을 실행한 뒤 다시 저장하세요. (${error.message})`);
    }
  }

  return {
    source: databaseSource,
    testSession: fromTestSessionRow(savedSessionRows[0]),
    testAttempts: savedAttemptRows.map(fromTestAttemptRow)
  };
}

export async function deleteTestSession(testSessionId) {
  if (!testSessionId) throw new Error("삭제할 테스트 회차 ID가 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, deletedTestSessionId: testSessionId };
  }

  await deleteRows("test_sessions", `test_session_id=eq.${encodeURIComponent(testSessionId)}`);
  return { source: databaseSource, deletedTestSessionId: testSessionId };
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

export async function listAcademyReminders({ date = "", from = "", to = "", includeDone = false, status = "" } = {}) {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, academyReminders: [] };
  }

  const filters = ["select=*"];
  if (date) filters.push(`reminder_date=eq.${encodeURIComponent(date)}`);
  if (from) filters.push(`reminder_date=gte.${encodeURIComponent(from)}`);
  if (to) filters.push(`reminder_date=lte.${encodeURIComponent(to)}`);
  if (status) {
    filters.push(`status=eq.${encodeURIComponent(normalizeAcademyReminderStatus(status))}`);
  } else if (!includeDone) {
    filters.push("status=neq.done", "status=neq.canceled");
  }
  filters.push("order=reminder_date.asc,reminder_time.asc,title.asc");

  try {
    const rows = await listRows("academy_reminders", filters.join("&"), { requireServiceRole: true });
    return { source: databaseSource, academyReminders: rows.map(fromAcademyReminderRow) };
  } catch (error) {
    if (isMissingAcademyRemindersTable(error)) {
      return { source: "supabase_missing_table", academyReminders: [], missingTable: true };
    }
    throw error;
  }
}

export async function upsertAcademyReminder(reminder) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, academyReminder: { ...reminder, reminderId: reminder.reminderId || reminder.id || createAcademyReminderId() } };
  }

  let row;
  try {
    [row] = await upsertRows("academy_reminders", [toAcademyReminderRow(reminder)]);
  } catch (error) {
    if (!errorMentionsAnyColumn(error, ["completed_at"])) throw error;
    [row] = await upsertRows("academy_reminders", [toAcademyReminderRow(reminder, { includeCompletedAt: false })]);
  }
  return { source: databaseSource, academyReminder: fromAcademyReminderRow(row) };
}

export async function deleteAcademyReminder(reminderId) {
  if (!reminderId) throw new Error("삭제할 운영 알림 ID가 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, academyReminderId: reminderId };
  }

  await deleteRows("academy_reminders", `reminder_id=eq.${encodeURIComponent(reminderId)}`);
  return { source: databaseSource, academyReminderId: reminderId };
}

export async function listAppState() {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, states: {} };
  }

  const rows = (await listRows("app_state", "select=*&order=state_key.asc", { requireServiceRole: true }))
    .filter((row) => !hiddenAppStateKeys.has(row.state_key));
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

  for (const key of hiddenAppStateKeys) {
    await deleteRows("app_state", `state_key=eq.${encodeURIComponent(key)}`);
  }
  const rows = Object.entries(states)
    .filter(([key]) => !hiddenAppStateKeys.has(key))
    .map(([key, value]) => toAppStateRow(key, value));
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

export async function listNotificationJobs({ lessonId = "", limit = 1000, scheduledFrom = "", scheduledTo = "", status = "" } = {}) {
  if (!isSupabaseConfigured()) {
    return { source: fallbackSource, notificationJobs: [] };
  }

  const safeLimit = Math.max(1, Math.min(1000, Number(limit) || 1000));
  const filters = ["select=*"];
  if (lessonId) filters.push(`lesson_id=eq.${encodeURIComponent(lessonId)}`);
  if (scheduledFrom) filters.push(`scheduled_at=gte.${encodeURIComponent(scheduledFrom)}`);
  if (scheduledTo) filters.push(`scheduled_at=lt.${encodeURIComponent(scheduledTo)}`);
  if (status) {
    const statuses = String(status)
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
      .join(",");
    if (statuses) filters.push(`status=in.(${statuses})`);
  }
  filters.push("order=created_at.desc", `limit=${safeLimit}`);
  const query = filters.join("&");
  const rows = await listRows("notification_jobs", query, { requireServiceRole: true });
  return { source: databaseSource, notificationJobs: rows.map(fromNotificationJobRow) };
}

export async function getNotificationJob(notificationJobId) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, notificationJob: null };
  }

  const rows = await listRows(
    "notification_jobs",
    `select=*&notification_job_id=eq.${encodeURIComponent(notificationJobId)}&limit=1`,
    { requireServiceRole: true }
  );
  return { source: databaseSource, notificationJob: rows[0] ? fromNotificationJobRow(rows[0]) : null };
}

export async function upsertNotificationJob(job) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, notificationJob: job };
  }

  const [row] = await upsertRows("notification_jobs", [toNotificationJobRow(job)]);
  return { source: databaseSource, notificationJob: fromNotificationJobRow(row) };
}

export async function recordAttendanceEvent(event) {
  const normalizedEvent = {
    ...event,
    attendanceEventId: event.attendanceEventId || `attendance_event_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  };
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, attendanceEvent: normalizedEvent };
  }

  const [row] = await upsertRows("attendance_events", [toAttendanceEventRow(normalizedEvent)], { onConflict: "attendance_event_id" });
  return { source: databaseSource, attendanceEvent: fromAttendanceEventRow(row) };
}

export async function patchLessonStudentRecordNotificationStatus({
  lessonId,
  lessonStudentRecordId,
  studentId,
  teacherCommentSendStatus,
  studentCommentSendStatus,
  updatedBy = "instructor_owner_001"
} = {}) {
  if (!lessonId || !studentId) throw new Error("알림톡 상태를 저장할 수업/학생 ID가 필요합니다.");
  const nowIso = new Date().toISOString();
  const patch = { updated_at: nowIso };
  if (teacherCommentSendStatus !== undefined) {
    patch.teacher_comment_send_status = compact(teacherCommentSendStatus);
  }
  if (studentCommentSendStatus !== undefined) {
    patch.student_comment_send_status = compact(studentCommentSendStatus);
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return {
      source: fallbackSource,
      record: {
        lessonStudentRecordId,
        lessonId,
        studentId,
        teacherCommentSendStatus: teacherCommentSendStatus ?? "",
        studentCommentSendStatus: studentCommentSendStatus ?? "",
        updatedBy,
        updatedAt: nowIso
      }
    };
  }

  await assertLessonStudentRecordBelongsToLesson(lessonId, studentId);
  const encodedLessonId = encodeURIComponent(lessonId);
  const encodedStudentId = encodeURIComponent(studentId);
  const rows = await patchRows(
    "lesson_student_records",
    `lesson_id=eq.${encodedLessonId}&student_id=eq.${encodedStudentId}`,
    patch
  );
  if (rows[0]) return { source: databaseSource, record: fromLessonRecordRow(rows[0]) };

  const record = {
    lessonStudentRecordId: lessonStudentRecordId || `lsr_${lessonId.replace("lesson_", "")}_${studentId}`,
    lessonId,
    studentId,
    attendanceStatus: "pending",
    teacherCommentSendStatus: teacherCommentSendStatus ?? "",
    studentCommentSendStatus: studentCommentSendStatus ?? "",
    updatedBy,
    updatedAt: nowIso
  };
  return upsertLessonStudentRecord(record);
}

export async function claimNotificationJob(job, claimId) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, notificationJob: job };
  }

  const encodedId = encodeURIComponent(job.notificationJobId);
  const provider = job.provider || "";
  const providerFilter = provider ? `provider=eq.${encodeURIComponent(provider)}` : "provider=is.null";
  const result = {
    ...(job.result && typeof job.result === "object" ? job.result : {}),
    dispatchClaimedAt: new Date().toISOString(),
    dispatchClaimId: claimId
  };
  const rows = await patchRows(
    "notification_jobs",
    `notification_job_id=eq.${encodedId}&status=eq.scheduled&${providerFilter}`,
    {
      provider: "academy-os-dispatching",
      result
    }
  );
  const [row] = rows;
  return { source: databaseSource, notificationJob: row ? fromNotificationJobRow(row) : null };
}

export async function deleteNotificationJob(notificationJobId) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, deletedNotificationJobIds: [notificationJobId] };
  }

  const existing = await getNotificationJob(notificationJobId);
  const notificationJob = existing.notificationJob;
  const standardDeletableStatuses = new Set(["failed", "draft", "dry_run", "canceled"]);
  const scheduledTime = notificationJob?.scheduledAt ? new Date(notificationJob.scheduledAt).getTime() : NaN;
  const isPastUnconfirmed = notificationJob?.status === "send_unconfirmed" &&
    Number.isFinite(scheduledTime) &&
    scheduledTime < Date.now();
  if (!notificationJob || (!standardDeletableStatuses.has(notificationJob.status) && !isPastUnconfirmed)) {
    return { source: databaseSource, deletedNotificationJobIds: [] };
  }

  const encodedId = encodeURIComponent(notificationJobId);
  const statusFilter = isPastUnconfirmed
    ? "status=eq.send_unconfirmed"
    : `status=in.(${[...standardDeletableStatuses].join(",")})`;
  const rows = await deleteRows(
    "notification_jobs",
    `notification_job_id=eq.${encodedId}&${statusFilter}`
  );
  return {
    source: databaseSource,
    deletedNotificationJobIds: rows.map((row) => row.notification_job_id).filter(Boolean)
  };
}

export async function cancelNotificationJob(notificationJobId, reason = "선생님 예약 취소") {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return {
      source: fallbackSource,
      notificationJob: {
        notificationJobId,
        status: "canceled",
        error: reason,
        updatedAt: new Date().toISOString()
      }
    };
  }

  const nowIso = new Date().toISOString();
  const rows = await patchRows(
    "notification_jobs",
    `notification_job_id=eq.${encodeURIComponent(notificationJobId)}&status=in.(${pendingNotificationJobStatuses.join(",")})`,
    {
      error: reason,
      result: {
        canceledAt: nowIso,
        canceledBy: "teacher",
        canceledReason: reason
      },
      status: "canceled",
      updated_at: nowIso
    }
  );
  return { source: databaseSource, notificationJob: rows[0] ? fromNotificationJobRow(rows[0]) : null };
}

function hasAttendanceState(record = {}) {
  return Boolean(
    record.checkInAt ||
    record.checkInTime ||
    record.checkOutAt ||
    record.checkOutTime ||
    (record.attendanceStatus && record.attendanceStatus !== "pending")
  );
}

function hasExplicitAttendanceTime(record = {}) {
  return Boolean(record.checkInAt || record.checkInTime || record.checkOutAt || record.checkOutTime);
}

function mergeExistingAttendanceForNonAttendanceSave(nextRecord = {}, existingRecord = null) {
  if (!existingRecord || !hasAttendanceState(existingRecord)) return nextRecord;
  const source = String(nextRecord.updatedBy || "");
  const isAttendanceSource = source.includes("attendance") || source.includes("kiosk");
  if (isAttendanceSource || hasExplicitAttendanceTime(nextRecord)) return nextRecord;
  return {
    ...nextRecord,
    attendanceStatus: existingRecord.attendanceStatus || nextRecord.attendanceStatus || "pending",
    attendanceReason: existingRecord.attendanceReason ?? nextRecord.attendanceReason ?? "",
    lateMinutes: existingRecord.lateMinutes ?? nextRecord.lateMinutes ?? "",
    checkInAt: existingRecord.checkInAt ?? "",
    checkInTime: existingRecord.checkInTime ?? "",
    checkOutAt: existingRecord.checkOutAt ?? "",
    checkOutTime: existingRecord.checkOutTime ?? ""
  };
}

function mergeExistingHomeworkFollowupForSave(nextRecord = {}, existingRecord = null) {
  if (!existingRecord) return nextRecord;
  const fields = ["homeworkFollowupMethod", "homeworkFollowupText", "homeworkFollowupSourceHomeworkId"];
  return fields.reduce((record, field) => (
    Object.prototype.hasOwnProperty.call(nextRecord, field)
      ? record
      : { ...record, [field]: existingRecord[field] ?? "" }
  ), nextRecord);
}

function normalizeLessonRecordVerificationValue(value) {
  return String(value ?? "").trim();
}

async function requeryVerifiedLessonStudentRecord(expectedRecord = {}) {
  const rows = await listRows(
    "lesson_student_records",
    `select=*&lesson_id=eq.${encodeURIComponent(expectedRecord.lessonId)}&student_id=eq.${encodeURIComponent(expectedRecord.studentId)}&limit=1`,
    { requireServiceRole: true }
  );
  if (!rows[0]) throw new Error("수업기록 저장 후 Supabase 재조회에서 행을 찾지 못했습니다.");
  const savedRecord = fromLessonRecordRow(rows[0]);
  const fields = ["homeworkFollowupMethod", "homeworkFollowupText", "homeworkFollowupSourceHomeworkId"];
  const mismatch = fields.find((field) => (
    normalizeLessonRecordVerificationValue(savedRecord[field]) !==
    normalizeLessonRecordVerificationValue(expectedRecord[field])
  ));
  if (mismatch) {
    throw new Error(`수업기록 저장 후 Supabase 재조회 값이 일치하지 않습니다: ${mismatch}`);
  }
  return savedRecord;
}

export async function upsertLessonStudentRecord(record) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, record };
  }

  await assertLessonStudentRecordBelongsToLesson(record.lessonId, record.studentId);
  const existingRows = await listRows(
    "lesson_student_records",
    `select=*&lesson_id=eq.${encodeURIComponent(record.lessonId)}&student_id=eq.${encodeURIComponent(record.studentId)}&limit=1`,
    { requireServiceRole: true }
  );
  const existingRecord = existingRows[0] ? fromLessonRecordRow(existingRows[0]) : null;
  const stableRecord = existingRows[0]
    ? { ...record, lessonStudentRecordId: existingRows[0].lesson_student_record_id }
    : record;
  const attendanceStableRecord = mergeExistingAttendanceForNonAttendanceSave(stableRecord, existingRecord);
  const recordToSave = mergeExistingHomeworkFollowupForSave(attendanceStableRecord, existingRecord);
  let row;
  try {
    [row] = await upsertRows("lesson_student_records", [toLessonRecordRow(recordToSave)], { onConflict: "lesson_id,student_id" });
  } catch (error) {
    const message = String(error?.message ?? "");
    const isAttendanceTimeMigration =
      message.includes("check_in_at") ||
      message.includes("check_in_time") ||
      message.includes("check_out_at") ||
      message.includes("check_out_time");
    const isPendingMigration =
      message.includes("lesson_material") ||
      message.includes("lesson_content") ||
      message.includes("assignment_status") ||
      message.includes("homework_followup_method") ||
      message.includes("homework_followup_text") ||
      message.includes("homework_followup_source_homework_id") ||
      message.includes("behavior_tag") ||
      message.includes("homework_status") ||
      message.includes("needs_makeup") ||
      message.includes("needs_retest") ||
      message.includes("notification_muted_parent") ||
      message.includes("notification_muted_student") ||
      message.includes("notification_muted_reason") ||
      message.includes("preparation_memo") ||
      message.includes("prep_memo_checked_at") ||
      message.includes("prep_memo_checked_source_date") ||
      message.includes("prep_memo_checked_source_record_id") ||
      message.includes("prep_student_notice") ||
      message.includes("prep_student_visible") ||
      isAttendanceTimeMigration;
    const hasExtendedValues = [
      recordToSave.lessonMaterial,
      recordToSave.lessonContent,
      recordToSave.assignmentStatus,
      recordToSave.homeworkFollowupMethod,
      recordToSave.homeworkFollowupText,
      recordToSave.homeworkFollowupSourceHomeworkId,
      recordToSave.preparationMemo,
      recordToSave.prepMemoCheckedAt,
      recordToSave.prepMemoCheckedSourceDate,
      recordToSave.prepMemoCheckedSourceRecordId,
      recordToSave.prepStudentNotice,
      recordToSave.prepParentNotice,
      recordToSave.prepStudentAiStatus,
      recordToSave.prepParentAiStatus,
      recordToSave.behaviorTag,
      recordToSave.homeworkStatus && recordToSave.homeworkStatus !== "not_started" ? recordToSave.homeworkStatus : "",
      Boolean(recordToSave.needsMakeup),
      Boolean(recordToSave.needsRetest),
      Boolean(recordToSave.notificationMutedParent),
      Boolean(recordToSave.notificationMutedStudent),
      recordToSave.notificationMutedReason,
      recordToSave.prepStudentVisible,
      recordToSave.prepParentVisible
    ].some((value) => (typeof value === "boolean" ? value : Boolean(String(value ?? "").trim())));
    if (!isPendingMigration) throw error;
    if (isAttendanceTimeMigration) {
      [row] = await upsertRows(
        "lesson_student_records",
        [toLessonRecordRow(recordToSave, { includeAttendanceTimeFields: false })],
        { onConflict: "lesson_id,student_id" }
      );
      return { source: databaseSource, record: await requeryVerifiedLessonStudentRecord(recordToSave) };
    }
    if (hasExtendedValues) {
      throw new Error(
        "Supabase lesson_student_records 확장 컬럼 migration이 필요합니다. 수업메모 확인 컬럼은 supabase/20260708_prep_memo_acknowledgements.sql, 숙제 후속처리 컬럼은 supabase/20260721_lesson_homework_followup_fields.sql을 실행한 뒤 다시 저장하세요."
      );
    }
    [row] = await upsertRows(
      "lesson_student_records",
      [toLessonRecordRow(recordToSave, { includeExtendedFields: false })],
      { onConflict: "lesson_id,student_id" }
    );
  }
  return { source: databaseSource, record: await requeryVerifiedLessonStudentRecord(recordToSave) };
}

export async function upsertHomework(homework) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, homework };
  }

  let row;
  try {
    [row] = await upsertRows("homeworks", [toHomeworkRow(homework)], { onConflict: "homework_id" });
  } catch (error) {
    if (errorMentionsAnyColumn(error, [
      "status",
      "total_problems",
      "assignment_status",
      "incomplete_homework",
      "checked_at",
      "verified_at",
      "linked_from_lesson_id",
      "linked_from_date"
    ])) {
      const hasExtendedHomeworkValues = [
        homework.status,
        homework.totalProblems,
        homework.assignmentStatus,
        homework.incompleteHomework,
        homework.checkedAt,
        homework.verifiedAt,
        homework.linkedFromLessonId,
        homework.linkedFromDate
      ].some(hasMeaningfulValue);
      if (hasExtendedHomeworkValues) {
        throw new Error("Supabase homeworks 확장 컬럼 migration이 필요합니다. supabase/20260624_persist_frontend_fields.sql을 실행한 뒤 다시 저장하세요.");
      }
      [row] = await upsertRows("homeworks", [toHomeworkRow(homework, { includeExtendedFields: false })], { onConflict: "homework_id" });
    } else {
      throw error;
    }
  }
  return { source: databaseSource, homework: fromHomeworkRow(row) };
}

export async function upsertHomeworks(homeworks) {
  if (!Array.isArray(homeworks) || homeworks.length === 0) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, homeworks: [] };
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, homeworks };
  }

  let rows;
  try {
    rows = await upsertRows("homeworks", homeworks.map(toHomeworkRow), { onConflict: "homework_id" });
  } catch (error) {
    if (errorMentionsAnyColumn(error, [
      "status",
      "total_problems",
      "assignment_status",
      "incomplete_homework",
      "checked_at",
      "verified_at",
      "linked_from_lesson_id",
      "linked_from_date"
    ])) {
      const hasExtendedHomeworkValues = homeworks.some((homework) => [
        homework.status,
        homework.totalProblems,
        homework.assignmentStatus,
        homework.incompleteHomework,
        homework.checkedAt,
        homework.verifiedAt,
        homework.linkedFromLessonId,
        homework.linkedFromDate
      ].some(hasMeaningfulValue));
      if (hasExtendedHomeworkValues) {
        throw new Error("Supabase homeworks 확장 컬럼 migration이 필요합니다. supabase/20260624_persist_frontend_fields.sql을 실행한 뒤 다시 저장하세요.");
      }
      rows = await upsertRows(
        "homeworks",
        homeworks.map((homework) => toHomeworkRow(homework, { includeExtendedFields: false })),
        { onConflict: "homework_id" }
      );
    } else {
      throw error;
    }
  }
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
