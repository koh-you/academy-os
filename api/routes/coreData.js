import { sampleData } from "../../src/shared/data/sampleData.js";
import {
  getSpecialLectureStudentSyncOperation,
  getSpecialLectureStudentSyncProtectionReasons,
  isSpecialLectureStudentScheduleSynced,
  mergeSpecialLectureStudentSchedule
} from "../../src/domains/specialLectures/specialLecturePlanSync.js";
import {
  getLessonClosureBlockingNotificationJobs,
  isLessonClosureConversion
} from "../../src/domains/lessons/lessonClosure.js";
import { deleteExamPrepRowWithAudit } from "../domain/examPrepDeletion.js";
import {
  createAppStateConflictError,
  createAppStateVersionFilter,
  isAppStateInsertConflict
} from "../domain/appStatePersistence.js";
import {
  areExamPrepRowTimestampsEqual,
  createExamPrepRowConflict,
  createExamPrepRowVersionFilter,
  createNextExamPrepRowUpdatedAt,
  isExamPrepRowInsertConflict
} from "../../src/domains/exams/examPrepRowPersistence.js";
import {
  areStudentIntakeApplicantsPersistedEqual,
  areStudentIntakeApplicantTimestampsEqual,
  createNextStudentIntakeApplicantUpdatedAt,
  createStudentIntakeApplicantConflict,
  createStudentIntakeApplicantVersionFilter
} from "../../src/domains/students/studentIntakeApplicantPersistence.js";
import {
  areStudentsPersistedEqual,
  areStudentTimestampsEqual,
  createNextStudentUpdatedAt,
  createStudentConflict,
  createStudentVersionFilter,
  isStudentInsertConflict
} from "../../src/domains/students/studentPersistence.js";
import {
  areRosterStudentIdsEqual,
  areRosterTimestampsEqual,
  createLessonRosterVersionFilter,
  createNextRosterUpdatedAt
} from "../../src/domains/students/classRosterPersistence.js";
import {
  areSchoolEventsPersistedEqual,
  areSchoolEventTimestampsEqual,
  createNextSchoolEventUpdatedAt,
  createSchoolEventConflict,
  createSchoolEventVersionFilter,
  isSchoolEventInsertConflict
} from "../../src/domains/schoolCalendar/schoolEventPersistence.js";
import {
  areResourceMaterialsPersistedEqual,
  areResourceMaterialTimestampsEqual,
  createNextResourceMaterialUpdatedAt,
  createResourceMaterialConflict,
  createResourceMaterialVersionFilter,
  isResourceMaterialInsertConflict,
  isSameResourceMaterialDraft
} from "../../src/domains/resources/resourceMaterialPersistence.js";
import {
  areDerivedExamPrepNonScheduleFieldsEqual,
  areDerivedExamPrepRowsEqual,
  areDerivedLessonsEqual,
  areDerivedLessonTimestampsEqual
} from "../../src/domains/schoolCalendar/derivedSchoolCalendarPersistence.js";
import {
  areLessonJournalHistoryHomeworksEqual,
  areLessonJournalHistoryLessonsEqual,
  areLessonJournalHistoryTimestampsEqual,
  verifyLessonJournalHistoryPlan
} from "../../src/domains/lessons/lessonJournalHistoryPersistence.js";
import {
  areLessonJournalRecordsEqual,
  verifyLessonJournalRowsSavePlan
} from "../../src/domains/lessons/lessonJournalRowsPersistence.js";
import {
  createLessonJournalMakeupTaskPersistenceSnapshot,
  createNextLessonJournalMakeupTaskUpdatedAt
} from "../../src/domains/lessons/lessonJournalMakeupTaskPersistence.js";
import {
  areSupplementScheduleTasksEqual,
  createSupplementScheduleSavePlan
} from "../../src/domains/supplements/supplementSchedulePersistence.js";
import { deleteRows, getSupabaseStatus, insertRows, isSupabaseConfigured, listRows, patchRows, upsertRows } from "../lib/supabaseRest.js";

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
    withdrawnAt: row.withdrawn_at ?? "",
    updatedAt: row.updated_at ?? ""
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
    desired_class: compact(applicant.defaultClassTemplateId || applicant.desiredClass),
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
    defaultClassTemplateId: String(row.desired_class ?? "").startsWith("template_") ? row.desired_class : "",
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

export function toLessonRow(lesson, { includeScheduleMetadata = true } = {}) {
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
    row.special_lecture_session_index = lesson.specialLectureSessionIndex === undefined || lesson.specialLectureSessionIndex === null || lesson.specialLectureSessionIndex === ""
      ? null
      : Number(lesson.specialLectureSessionIndex);
    row.special_lecture_student_schedules = normalizeSpecialLectureStudentSchedules(
      lesson.specialLectureStudentSchedules
    );
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
    status: row.status,
    updatedAt: row.updated_at ?? ""
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
    linkedFromDate: row.linked_from_date ?? "",
    updatedAt: row.updated_at ?? ""
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

function areExamPrepRowsPersistedEqual(requestedRow = {}, verifiedRow = {}) {
  const requestedDbRow = toExamPrepRow(requestedRow);
  const verifiedDbRow = toExamPrepRow(verifiedRow);
  delete requestedDbRow.updated_at;
  delete verifiedDbRow.updated_at;
  return JSON.stringify(requestedDbRow) === JSON.stringify(verifiedDbRow);
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

function fromAcademyReminderRow(row = {}) {
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
    created_at: material.createdAt,
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

const withdrawnStudentDeletionDirectSources = [
  { table: "lesson_student_records", idColumn: "lesson_student_record_id", label: "수업일지 학생 기록" },
  { table: "attendance_events", idColumn: "attendance_event_id", label: "출결 변경 이력" },
  { table: "homeworks", idColumn: "homework_id", label: "숙제" },
  { table: "makeup_tasks", idColumn: "makeup_task_id", label: "보충·재시험" },
  { table: "wrong_problem_statuses", idColumn: "wrong_problem_status_id", label: "오답 기록" },
  { table: "score_records", idColumn: "score_record_id", label: "성적 기록" },
  { table: "test_attempts", idColumn: "test_attempt_id", label: "테스트 응시 기록" },
  { table: "academy_reminders", idColumn: "reminder_id", label: "운영 알림" },
  { table: "notification_logs", idColumn: "notification_log_id", label: "발송 이력" },
  { table: "notification_jobs", idColumn: "notification_job_id", label: "알림 예약·작업" },
  { table: "exam_post_submissions", idColumn: "submission_id", label: "시험 후 제출", optional: true },
  { table: "exam_submission_files", idColumn: "file_id", label: "시험 제출 파일", optional: true },
  { table: "special_lecture_enrollments", idColumn: "enrollment_id", label: "특강 수강 등록", optional: true }
];

function valueContainsStudentId(value, studentId) {
  if (value === studentId) return true;
  if (Array.isArray(value)) return value.some((item) => valueContainsStudentId(item, studentId));
  if (value && typeof value === "object") {
    return Object.values(value).some((item) => valueContainsStudentId(item, studentId));
  }
  return false;
}

const removedStudentReference = Symbol("removedStudentReference");

export function removeStudentIdFromValue(value, studentId) {
  if (value === studentId) return removedStudentReference;
  if (Array.isArray(value)) {
    return value
      .map((item) => removeStudentIdFromValue(item, studentId))
      .filter((item) => item !== removedStudentReference);
  }
  if (value && typeof value === "object") {
    if (value.studentId === studentId || value.student_id === studentId) {
      return removedStudentReference;
    }
    return Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => key !== studentId)
        .map(([key, item]) => [key, removeStudentIdFromValue(item, studentId)])
        .filter(([, item]) => item !== removedStudentReference)
    );
  }
  return value;
}

function createWithdrawnStudentDeletionError(message, statusCode = 400, audit = null) {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.audit = audit;
  return error;
}

function createStudentReferenceFingerprint(references = []) {
  return references
    .filter((reference) => reference.count > 0)
    .map((reference) => (
      `${reference.table}:${reference.count}:${(reference.matchedKeys ?? []).slice().sort().join(",")}`
    ))
    .sort()
    .join("|");
}

function isMissingSupabaseTableError(error, table) {
  const message = String(error?.message ?? "");
  return (
    message.includes(`table 'public.${table}'`) ||
    message.includes(`relation "public.${table}" does not exist`) ||
    message.includes(`relation "${table}" does not exist`)
  );
}

async function collectWithdrawnStudentReferences(studentId) {
  const encodedStudentId = encodeURIComponent(studentId);
  const [directSourceRows, lessonRows, resourceRows, appStateRows] = await Promise.all([
    Promise.all(withdrawnStudentDeletionDirectSources.map(async (source) => {
      try {
        const rows = await listRows(
          source.table,
          `select=${source.idColumn}&student_id=eq.${encodedStudentId}&limit=1000`,
          { requireServiceRole: true }
        );
        return { ...source, count: rows.length };
      } catch (error) {
        if (source.optional && isMissingSupabaseTableError(error, source.table)) {
          return { ...source, count: 0, unavailable: true };
        }
        throw error;
      }
    })),
    listRows(
      "lessons",
      "select=lesson_id,student_ids,special_lecture_student_schedules&limit=10000",
      { requireServiceRole: true }
    ),
    listRows(
      "resource_materials",
      "select=resource_material_id,student_ids&limit=10000",
      { requireServiceRole: true }
    ),
    listRows(
      "app_state",
      "select=state_key,state_value&limit=1000",
      { requireServiceRole: true }
    )
  ]);

  const matchedLessonRows = lessonRows.filter((row) => (
    (Array.isArray(row.student_ids) && row.student_ids.includes(studentId)) ||
    valueContainsStudentId(row.special_lecture_student_schedules, studentId)
  ));
  const matchedResourceRows = resourceRows
    .filter((row) => Array.isArray(row.student_ids) && row.student_ids.includes(studentId));
  const matchedAppStateRows = appStateRows
    .filter((row) => valueContainsStudentId(row.state_value, studentId));
  const references = [
    ...directSourceRows,
    { table: "lessons", label: "수업 명단·특강 회차", count: matchedLessonRows.length },
    { table: "resource_materials", label: "학생 지정 자료", count: matchedResourceRows.length },
    {
      table: "app_state",
      label: "상담·질문·정산 등 운영 저장 데이터",
      count: matchedAppStateRows.length,
      matchedKeys: matchedAppStateRows.map((row) => row.state_key)
    }
  ];

  return {
    directSourceRows,
    references,
    blockingReferences: references.filter((reference) => reference.count > 0),
    matchedLessonRows,
    matchedResourceRows,
    matchedAppStateRows
  };
}

async function removeWithdrawnStudentReferences(studentId, referenceRows) {
  for (const row of referenceRows.matchedLessonRows) {
    const nextSchedules = removeStudentIdFromValue(row.special_lecture_student_schedules ?? [], studentId);
    await patchRows("lessons", `lesson_id=eq.${encodeURIComponent(row.lesson_id)}`, {
      student_ids: (row.student_ids ?? []).filter((id) => id !== studentId),
      special_lecture_student_schedules: nextSchedules === removedStudentReference ? [] : nextSchedules,
      updated_at: new Date().toISOString()
    });
  }

  for (const row of referenceRows.matchedResourceRows) {
    await patchRows("resource_materials", `resource_material_id=eq.${encodeURIComponent(row.resource_material_id)}`, {
      student_ids: (row.student_ids ?? []).filter((id) => id !== studentId),
      updated_at: new Date().toISOString()
    });
  }

  if (referenceRows.matchedAppStateRows.length > 0) {
    await upsertRows(
      "app_state",
      referenceRows.matchedAppStateRows.map((row) => {
        const nextValue = removeStudentIdFromValue(row.state_value, studentId);
        return {
          state_key: row.state_key,
          state_value: nextValue === removedStudentReference ? null : nextValue,
          updated_at: new Date().toISOString()
        };
      }),
      { onConflict: "state_key" }
    );
  }

  const specialLectureReference = referenceRows.directSourceRows
    .find((reference) => reference.table === "special_lecture_enrollments");
  if (specialLectureReference?.count > 0) {
    await deleteRows("special_lecture_enrollments", `student_id=eq.${encodeURIComponent(studentId)}`);
  }
}

export async function auditWithdrawnStudentDeletion(studentId) {
  if (!studentId) throw createWithdrawnStudentDeletionError("삭제 점검할 학생 ID가 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    throw createWithdrawnStudentDeletionError("Supabase 원천을 확인할 수 없어 학생 삭제를 진행할 수 없습니다.", 503);
  }

  const encodedStudentId = encodeURIComponent(studentId);
  const studentRows = await listRows(
    "students",
    `select=*&student_id=eq.${encodedStudentId}&limit=1`,
    { requireServiceRole: true }
  );
  const studentRow = studentRows[0];
  if (!studentRow) throw createWithdrawnStudentDeletionError("Supabase에서 삭제 점검할 학생을 찾지 못했습니다.", 404);
  if ((studentRow.status ?? "active") === "active" && !studentRow.withdrawn_at) {
    throw createWithdrawnStudentDeletionError("재원 학생은 영구 삭제할 수 없습니다. 먼저 퇴원 처리해 주세요.", 409);
  }

  const referenceRows = await collectWithdrawnStudentReferences(studentId);

  return {
    source: databaseSource,
    allowed: referenceRows.blockingReferences.length === 0,
    student: fromStudentRow(studentRow),
    references: referenceRows.references,
    blockingReferences: referenceRows.blockingReferences,
    referenceFingerprint: createStudentReferenceFingerprint(referenceRows.references),
    checkedAt: new Date().toISOString()
  };
}

export async function deleteWithdrawnStudent(
  studentId,
  confirmationName,
  forceDeleteWithReferences = false,
  expectedReferenceFingerprint = ""
) {
  const audit = await auditWithdrawnStudentDeletion(studentId);
  if (!audit.allowed && forceDeleteWithReferences !== true) {
    throw createWithdrawnStudentDeletionError(
      "연결된 운영 기록이 있습니다. 영향을 확인한 뒤 '그래도 삭제' 확인을 선택해야 합니다.",
      409,
      audit
    );
  }
  if (String(confirmationName ?? "").trim() !== String(audit.student.name ?? "").trim()) {
    throw createWithdrawnStudentDeletionError("삭제 확인을 위해 학생 이름을 정확히 입력해 주세요.", 400, audit);
  }
  if (
    !audit.allowed &&
    String(expectedReferenceFingerprint ?? "") !== audit.referenceFingerprint
  ) {
    throw createWithdrawnStudentDeletionError(
      "확인 뒤 연결 기록이 달라졌습니다. 새 영향 범위를 다시 확인한 뒤 삭제해 주세요.",
      409,
      audit
    );
  }

  if (!audit.allowed) {
    const referenceRows = await collectWithdrawnStudentReferences(studentId);
    await removeWithdrawnStudentReferences(studentId, referenceRows);
  }
  await deleteRows("students", `student_id=eq.${encodeURIComponent(studentId)}`);
  const remainingRows = await listRows(
    "students",
    `select=student_id&student_id=eq.${encodeURIComponent(studentId)}&limit=1`,
    { requireServiceRole: true }
  );
  if (remainingRows.length > 0) {
    throw createWithdrawnStudentDeletionError("삭제 응답 후 Supabase 재조회에서 학생이 남아 있어 완료하지 않았습니다.", 500, audit);
  }
  const remainingReferences = await collectWithdrawnStudentReferences(studentId);
  if (remainingReferences.blockingReferences.length > 0) {
    throw createWithdrawnStudentDeletionError(
      "학생 원천은 삭제됐지만 일부 연결 데이터가 남았습니다. 같은 삭제를 반복하지 말고 관리자 확인이 필요합니다.",
      500,
      { ...audit, blockingReferences: remainingReferences.blockingReferences }
    );
  }

  return {
    source: databaseSource,
    deletedStudentId: studentId,
    deletedStudentName: audit.student.name,
    forced: !audit.allowed,
    verified: true
  };
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

async function getStudentIntakeApplicant(applicantId) {
  const rows = await listRows(
    "student_intake_applicants",
    `select=*&applicant_id=eq.${encodeURIComponent(applicantId)}&limit=1`,
    { requireServiceRole: true }
  );
  return rows[0] ? fromStudentIntakeApplicantRow(rows[0]) : null;
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

export async function listLessons({ date, includeCanceled = false } = {}) {
  if (!isSupabaseConfigured()) {
    const sourceLessons = includeCanceled
      ? sampleData.lessons
      : sampleData.lessons.filter((lesson) => (lesson.status ?? "scheduled") !== "canceled");
    const lessons = date ? sourceLessons.filter((lesson) => lesson.date === date) : sourceLessons;
    return { source: fallbackSource, lessons };
  }

  await deleteExpiredCanceledLessons();
  const statusFilter = includeCanceled ? "" : "&status=neq.canceled";
  const query = date
    ? `select=*${statusFilter}&lesson_date=eq.${encodeURIComponent(date)}&order=lesson_date.asc,start_time.asc`
    : `select=*${statusFilter}&order=lesson_date.asc,start_time.asc`;
  const rows = await listRows("lessons", query, { requireServiceRole: true });
  return { source: databaseSource, lessons: rows.map(fromLessonRow) };
}

export async function getLessonClosurePreflight(lessonId = "") {
  const normalizedLessonId = String(lessonId || "").trim();
  if (!normalizedLessonId) throw new Error("휴강 전환을 확인할 수업 ID가 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    const lesson = sampleData.lessons.find((item) => item.lessonId === normalizedLessonId) ?? null;
    return {
      source: fallbackSource,
      blockingNotificationJobs: [],
      canConvert: true,
      isConversion: Boolean(lesson && lesson.lessonType !== "closure"),
      lesson,
      recordCount: 0,
      recordStatuses: {}
    };
  }

  const encodedLessonId = encodeURIComponent(normalizedLessonId);
  const [lessonRows, recordRows, notificationRows] = await Promise.all([
    listRows(
      "lessons",
      `select=*&lesson_id=eq.${encodedLessonId}&limit=1`,
      { requireServiceRole: true }
    ),
    listRows(
      "lesson_student_records",
      `select=lesson_student_record_id,student_id,attendance_status&lesson_id=eq.${encodedLessonId}`,
      { requireServiceRole: true }
    ),
    listRows(
      "notification_jobs",
      `select=notification_job_id,lesson_id,status,provider,provider_message_id,scheduled_at&lesson_id=eq.${encodedLessonId}`,
      { requireServiceRole: true }
    )
  ]);
  const lesson = lessonRows[0] ? fromLessonRow(lessonRows[0]) : null;
  const notificationJobs = notificationRows.map(fromNotificationJobRow);
  const blockingNotificationJobs = getLessonClosureBlockingNotificationJobs(notificationJobs, normalizedLessonId);
  const isConversion = Boolean(lesson && lesson.lessonType !== "closure");
  return {
    source: databaseSource,
    blockingNotificationJobs,
    canConvert: !isConversion || blockingNotificationJobs.length === 0,
    isConversion,
    lesson,
    recordCount: recordRows.length,
    recordStatuses: recordRows.reduce((counts, row) => {
      const status = row.attendance_status || "pending";
      counts[status] = (counts[status] || 0) + 1;
      return counts;
    }, {})
  };
}

async function assertLessonClosureConversionAllowed(lesson = {}) {
  if (lesson.lessonType !== "closure" || !lesson.lessonId) return null;
  const preflight = await getLessonClosurePreflight(lesson.lessonId);
  if (!isLessonClosureConversion(preflight.lesson, lesson.lessonType)) return preflight;
  if (!preflight.canConvert) {
    throw new Error(
      `휴강 전환 전에 발송 가능하거나 결과 확인이 필요한 알림 ${preflight.blockingNotificationJobs.length}건을 예약 확인에서 정리해 주세요.`
    );
  }
  return preflight;
}

async function getStudent(studentId) {
  const rows = await listRows(
    "students",
    `select=*&student_id=eq.${encodeURIComponent(studentId)}&limit=1`,
    { requireServiceRole: true }
  );
  return rows[0] ? fromStudentRow(rows[0]) : null;
}

function throwStudentConflict(studentId, currentStudent, reason = "updated") {
  const conflict = createStudentConflict(studentId, currentStudent, reason);
  const error = new Error(conflict.message);
  Object.assign(error, conflict, { statusCode: 409 });
  throw error;
}

async function verifyStudentSave(student, expectedUpdatedAt) {
  const verifiedStudent = await getStudent(student.studentId);
  if (
    !verifiedStudent ||
    !areStudentsPersistedEqual(student, verifiedStudent) ||
    !areStudentTimestampsEqual(expectedUpdatedAt, verifiedStudent.updatedAt)
  ) {
    const error = new Error(`학생 ${student.studentId}의 Supabase 저장값을 재조회로 확인하지 못했습니다.`);
    error.code = "STUDENT_VERIFICATION_FAILED";
    throw error;
  }
  return verifiedStudent;
}

export async function upsertStudent(student, { createOnly = false, expectedUpdatedAt } = {}) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, student, verified: false };
  }

  if (createOnly) {
    const dbRow = toStudentRow(student);
    dbRow.updated_at = createNextStudentUpdatedAt();
    try {
      await insertRows("students", [dbRow]);
    } catch (error) {
      if (isStudentInsertConflict(error)) {
        throwStudentConflict(student.studentId, await getStudent(student.studentId), "duplicate");
      }
      throw error;
    }
    const verifiedStudent = await verifyStudentSave(student, dbRow.updated_at);
    return { source: databaseSource, student: verifiedStudent, verified: true };
  }

  if (expectedUpdatedAt !== undefined) {
    const currentStudent = await getStudent(student.studentId);
    if (!currentStudent) throwStudentConflict(student.studentId, null, "deleted");
    if (!areStudentTimestampsEqual(currentStudent.updatedAt, expectedUpdatedAt)) {
      throwStudentConflict(student.studentId, currentStudent);
    }

    const dbRow = toStudentRow(student);
    dbRow.updated_at = createNextStudentUpdatedAt(currentStudent.updatedAt);
    const savedRows = await patchRows(
      "students",
      createStudentVersionFilter(student.studentId, currentStudent.updatedAt),
      dbRow
    );
    if (!savedRows.length) {
      throwStudentConflict(student.studentId, await getStudent(student.studentId));
    }
    const verifiedStudent = await verifyStudentSave(student, dbRow.updated_at);
    return { source: databaseSource, student: verifiedStudent, verified: true };
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

export async function upsertStudentIntakeApplicant(applicant, { expectedUpdatedAt } = {}) {
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

  if (expectedUpdatedAt !== undefined) {
    const existingApplicant = await getStudentIntakeApplicant(normalizedApplicant.applicantId);
    if (!existingApplicant) {
      const conflict = createStudentIntakeApplicantConflict(
        normalizedApplicant.applicantId,
        null,
        "deleted"
      );
      const error = new Error(conflict.message);
      Object.assign(error, conflict, { statusCode: 409 });
      throw error;
    }
    if (!areStudentIntakeApplicantTimestampsEqual(existingApplicant.updatedAt, expectedUpdatedAt)) {
      const conflict = createStudentIntakeApplicantConflict(
        normalizedApplicant.applicantId,
        existingApplicant
      );
      const error = new Error(conflict.message);
      Object.assign(error, conflict, { statusCode: 409 });
      throw error;
    }

    const dbRow = toStudentIntakeApplicantRow(normalizedApplicant);
    dbRow.updated_at = createNextStudentIntakeApplicantUpdatedAt(existingApplicant.updatedAt);
    const savedRows = await patchRows(
      "student_intake_applicants",
      createStudentIntakeApplicantVersionFilter(normalizedApplicant.applicantId, existingApplicant.updatedAt),
      dbRow
    );
    if (!savedRows.length) {
      const currentApplicant = await getStudentIntakeApplicant(normalizedApplicant.applicantId);
      const conflict = createStudentIntakeApplicantConflict(
        normalizedApplicant.applicantId,
        currentApplicant,
        currentApplicant ? "updated" : "deleted"
      );
      const error = new Error(conflict.message);
      Object.assign(error, conflict, { statusCode: 409 });
      throw error;
    }

    const verifiedApplicant = await getStudentIntakeApplicant(normalizedApplicant.applicantId);
    if (
      !verifiedApplicant ||
      !areStudentIntakeApplicantsPersistedEqual(normalizedApplicant, verifiedApplicant) ||
      !areStudentIntakeApplicantTimestampsEqual(dbRow.updated_at, verifiedApplicant.updatedAt)
    ) {
      const error = new Error(`Tally 후보 ${normalizedApplicant.applicantId}의 Supabase 저장값을 재조회로 확인하지 못했습니다.`);
      error.code = "STUDENT_INTAKE_APPLICANT_VERIFICATION_FAILED";
      throw error;
    }
    return { source: databaseSource, applicant: verifiedApplicant, verified: true };
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

async function getLessonForRosterSave(lessonId) {
  const rows = await listRows(
    "lessons",
    `select=*&lesson_id=eq.${encodeURIComponent(lessonId)}&limit=1`,
    { requireServiceRole: true }
  );
  return rows[0] ? fromLessonRow(rows[0]) : null;
}

function createClassRosterConflict(message, details = {}) {
  const error = new Error(message);
  Object.assign(error, details, { code: "CLASS_ROSTER_CONFLICT", statusCode: 409 });
  return error;
}

async function persistClassRosterStudentChange(change = {}) {
  const after = change.after ?? null;
  const before = change.before ?? null;
  if (!after?.studentId) throw createClassRosterConflict("반 명단에 반영할 학생 ID가 없습니다.");
  const currentStudent = await getStudent(after.studentId);
  if (currentStudent && areStudentsPersistedEqual(after, currentStudent)) {
    return { mutated: false, student: currentStudent };
  }
  if (!before) {
    if (currentStudent) {
      throw createClassRosterConflict(
        `학생 ${after.studentId}가 다른 화면에서 먼저 생성되었습니다.`,
        { currentStudent, studentId: after.studentId }
      );
    }
    const result = await upsertStudent(after, { createOnly: true });
    return { mutated: true, student: result.student };
  }
  if (
    !currentStudent ||
    !before.updatedAt ||
    !areRosterTimestampsEqual(currentStudent.updatedAt, before.updatedAt)
  ) {
    throw createClassRosterConflict(
      `학생 ${after.studentId}의 반 배정 원천이 다른 화면에서 먼저 변경되었습니다.`,
      { currentStudent, studentId: after.studentId }
    );
  }
  const result = await upsertStudent(after, { expectedUpdatedAt: before.updatedAt });
  return { beforeStudent: currentStudent, mutated: true, student: result.student };
}

async function persistLessonRosterChange(change = {}) {
  const lessonId = String(change.lessonId ?? "").trim();
  if (!lessonId) throw createClassRosterConflict("반 명단에 반영할 수업 ID가 없습니다.");
  const currentLesson = await getLessonForRosterSave(lessonId);
  if (!currentLesson) {
    throw createClassRosterConflict(
      `미래 수업 ${lessonId}가 다른 화면에서 먼저 삭제되었습니다.`,
      { currentLesson: null, lessonId }
    );
  }
  if (areRosterStudentIdsEqual(currentLesson.studentIds, change.afterStudentIds)) {
    return { lesson: currentLesson, mutated: false };
  }
  if (
    !change.expectedUpdatedAt ||
    !areRosterTimestampsEqual(currentLesson.updatedAt, change.expectedUpdatedAt) ||
    !areRosterStudentIdsEqual(currentLesson.studentIds, change.beforeStudentIds)
  ) {
    throw createClassRosterConflict(
      `미래 수업 ${lessonId}의 명단이 다른 화면에서 먼저 변경되었습니다.`,
      { currentLesson, lessonId }
    );
  }
  const nextUpdatedAt = createNextRosterUpdatedAt(currentLesson.updatedAt);
  const rows = await patchRows(
    "lessons",
    createLessonRosterVersionFilter(lessonId, currentLesson.updatedAt),
    {
      student_ids: change.afterStudentIds ?? [],
      updated_at: nextUpdatedAt
    }
  );
  if (!rows.length) {
    throw createClassRosterConflict(
      `미래 수업 ${lessonId}의 명단 저장 직전에 서버 버전이 변경되었습니다.`,
      { currentLesson: await getLessonForRosterSave(lessonId), lessonId }
    );
  }
  const verifiedLesson = await getLessonForRosterSave(lessonId);
  if (
    !verifiedLesson ||
    !areRosterStudentIdsEqual(verifiedLesson.studentIds, change.afterStudentIds) ||
    !areRosterTimestampsEqual(verifiedLesson.updatedAt, nextUpdatedAt)
  ) {
    const error = new Error(`미래 수업 ${lessonId}의 명단 저장 후 Supabase 재조회가 일치하지 않습니다.`);
    Object.assign(error, { code: "CLASS_ROSTER_VERIFICATION_FAILED", lessonId, statusCode: 409 });
    throw error;
  }
  return { lesson: verifiedLesson, mutated: true };
}

async function rollbackClassRosterStudentChange(entry) {
  if (!entry.mutated) return { studentId: entry.change.after.studentId, verified: true };
  const studentId = entry.change.after.studentId;
  if (!entry.change.before) {
    const deletedRows = await deleteRows(
      "students",
      createStudentVersionFilter(studentId, entry.student.updatedAt)
    );
    const currentStudent = await getStudent(studentId);
    return { deleted: deletedRows.length > 0, studentId, verified: !currentStudent };
  }
  const rollbackRows = await patchRows(
    "students",
    createStudentVersionFilter(studentId, entry.student.updatedAt),
    {
      ...toStudentRow(entry.beforeStudent),
      updated_at: entry.beforeStudent.updatedAt
    }
  );
  const rollbackStudent = await getStudent(studentId);
  return {
    studentId,
    verified: rollbackRows.length > 0 &&
      areStudentsPersistedEqual(entry.beforeStudent, rollbackStudent) &&
      areRosterTimestampsEqual(entry.beforeStudent.updatedAt, rollbackStudent?.updatedAt)
  };
}

async function rollbackClassRosterLessonChange(entry) {
  if (!entry.mutated) return { lessonId: entry.change.lessonId, verified: true };
  const rollbackRows = await patchRows(
    "lessons",
    createLessonRosterVersionFilter(entry.change.lessonId, entry.lesson.updatedAt),
    {
      student_ids: entry.change.beforeStudentIds ?? [],
      updated_at: entry.change.expectedUpdatedAt
    }
  );
  const rollbackLesson = await getLessonForRosterSave(entry.change.lessonId);
  return {
    lessonId: entry.change.lessonId,
    verified: rollbackRows.length > 0 &&
      areRosterStudentIdsEqual(rollbackLesson?.studentIds, entry.change.beforeStudentIds) &&
      areRosterTimestampsEqual(rollbackLesson?.updatedAt, entry.change.expectedUpdatedAt)
  };
}

export async function saveClassRosterPlan({ auditId = "", lessonChanges = [], studentChanges = [] } = {}) {
  const normalizedAuditId = String(auditId || "").trim();
  if (!normalizedAuditId) throw new Error("반 명단 저장 audit ID가 필요합니다.");
  if (!Array.isArray(studentChanges) || !Array.isArray(lessonChanges)) {
    throw new Error("반 명단 저장 계획 형식이 올바르지 않습니다.");
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return {
      auditId: normalizedAuditId,
      cleanup: { errors: [], verified: true },
      lessons: lessonChanges.map((change) => ({ lessonId: change.lessonId, studentIds: change.afterStudentIds })),
      source: fallbackSource,
      students: studentChanges.map((change) => change.after),
      verified: false
    };
  }

  const appliedStudents = [];
  const appliedLessons = [];
  let failedStage = "students";
  try {
    for (const change of studentChanges) {
      const result = await persistClassRosterStudentChange(change);
      appliedStudents.push({ change, ...result });
    }
    failedStage = "lessons";
    for (const change of lessonChanges) {
      const result = await persistLessonRosterChange(change);
      appliedLessons.push({ change, ...result });
    }
  } catch (error) {
    const rollbackResults = [];
    const rollbackErrors = [];
    for (const entry of [...appliedLessons].reverse()) {
      try {
        rollbackResults.push({ kind: "lesson", ...(await rollbackClassRosterLessonChange(entry)) });
      } catch (rollbackError) {
        rollbackErrors.push({ id: entry.change.lessonId, kind: "lesson", message: rollbackError.message });
      }
    }
    for (const entry of [...appliedStudents].reverse()) {
      try {
        rollbackResults.push({ kind: "student", ...(await rollbackClassRosterStudentChange(entry)) });
      } catch (rollbackError) {
        rollbackErrors.push({ id: entry.change.after?.studentId, kind: "student", message: rollbackError.message });
      }
    }
    const rollbackVerified = rollbackErrors.length === 0 && rollbackResults.every((result) => result.verified);
    error.statusCode = Number(error.statusCode) || 409;
    error.code = rollbackVerified ? "CLASS_ROSTER_SAVE_FAILED" : "CLASS_ROSTER_PARTIAL_FAILURE";
    error.audit = {
      auditId: normalizedAuditId,
      failedStage,
      rollback: {
        errors: rollbackErrors,
        results: rollbackResults,
        verified: rollbackVerified
      }
    };
    throw error;
  }

  const cleanupErrors = [];
  for (const entry of appliedLessons) {
    try {
      await cancelPendingNotificationJobsForRemovedLessonStudents(entry.lesson, "반 명단에서 제외됨");
      await deleteLessonStudentRecordsForRemovedLessonStudents(entry.lesson);
    } catch (error) {
      cleanupErrors.push({ lessonId: entry.lesson.lessonId, message: error.message });
    }
  }

  return {
    auditId: normalizedAuditId,
    cleanup: { errors: cleanupErrors, verified: cleanupErrors.length === 0 },
    lessons: appliedLessons.map((entry) => entry.lesson),
    source: databaseSource,
    students: appliedStudents.map((entry) => entry.student),
    verified: true
  };
}

function createDerivedSchoolCalendarConflict(message, details = {}) {
  const error = new Error(message);
  Object.assign(error, details, { code: "SCHOOL_CALENDAR_DERIVED_CONFLICT", statusCode: 409 });
  return error;
}

async function persistDerivedExamPrepChange(change = {}) {
  const after = change.after ?? null;
  const before = change.before ?? null;
  const examPrepId = String(after?.examPrepId || before?.examPrepId || "").trim();
  if (!examPrepId || !after || !before) {
    throw createDerivedSchoolCalendarConflict("학사일정에 연결할 시험관리 행 계획이 올바르지 않습니다.");
  }
  if (!areDerivedExamPrepNonScheduleFieldsEqual(before, after)) {
    throw createDerivedSchoolCalendarConflict("파생 학사일정 저장은 시험기간과 수학시험 날짜 필드만 변경할 수 있습니다.", { examPrepId });
  }
  const current = (await getExistingExamPrepRowMap([examPrepId])).get(examPrepId) ?? null;
  if (current && areDerivedExamPrepRowsEqual(after, current)) {
    return { examPrepRow: current, mutated: false };
  }
  if (
    !current ||
    !before.updatedAt ||
    !areExamPrepRowTimestampsEqual(current.updatedAt, before.updatedAt) ||
    !areDerivedExamPrepRowsEqual(before, current)
  ) {
    throw createDerivedSchoolCalendarConflict(
      `시험관리 ${examPrepId} 원본이 다른 화면에서 먼저 변경되었습니다.`,
      { currentExamPrepRow: current, examPrepId }
    );
  }
  const nextUpdatedAt = createNextExamPrepRowUpdatedAt(current.updatedAt);
  const savedRows = await patchRows(
    "exam_prep_rows",
    createExamPrepRowVersionFilter(examPrepId, current.updatedAt),
    { ...toExamPrepRow(after), updated_at: nextUpdatedAt }
  );
  if (savedRows.length !== 1) {
    throw createDerivedSchoolCalendarConflict(
      `시험관리 ${examPrepId} 저장 직전에 서버 버전이 변경되었습니다.`,
      { currentExamPrepRow: (await getExistingExamPrepRowMap([examPrepId])).get(examPrepId) ?? null, examPrepId }
    );
  }
  const verified = (await getExistingExamPrepRowMap([examPrepId])).get(examPrepId) ?? null;
  if (
    !verified ||
    !areDerivedExamPrepRowsEqual(after, verified) ||
    !areExamPrepRowTimestampsEqual(nextUpdatedAt, verified.updatedAt)
  ) {
    const error = new Error(`시험관리 ${examPrepId} 저장 후 Supabase 재조회가 일치하지 않습니다.`);
    Object.assign(error, { code: "SCHOOL_CALENDAR_DERIVED_VERIFICATION_FAILED", examPrepId, statusCode: 409 });
    error.appliedResult = {
      beforeExamPrepRow: current,
      examPrepRow: verified ?? fromExamPrepRow(savedRows[0]),
      mutated: true
    };
    throw error;
  }
  return { beforeExamPrepRow: current, examPrepRow: verified, mutated: true };
}

async function assertDerivedLessonDeleteAllowed(lesson = {}) {
  if (lesson.lessonType !== "preExam") {
    throw createDerivedSchoolCalendarConflict("파생 학사일정에서는 자동 생성 직전수업만 삭제할 수 있습니다.", {
      lessonId: lesson.lessonId
    });
  }
  const encodedLessonId = encodeURIComponent(lesson.lessonId);
  const [recordRows, homeworkRows, notificationRows] = await Promise.all([
    listRows("lesson_student_records", `select=lesson_student_record_id&lesson_id=eq.${encodedLessonId}`, { requireServiceRole: true }),
    listRows("homeworks", `select=homework_id&lesson_id=eq.${encodedLessonId}`, { requireServiceRole: true }),
    listRows("notification_jobs", `select=notification_job_id&lesson_id=eq.${encodedLessonId}`, { requireServiceRole: true })
  ]);
  const protectionCounts = {
    homeworks: homeworkRows.length,
    notificationJobs: notificationRows.length,
    records: recordRows.length
  };
  if (Object.values(protectionCounts).some((count) => count > 0)) {
    throw createDerivedSchoolCalendarConflict(
      "직전수업에 수업기록·숙제·알림 작업이 연결되어 수학시험 일정 삭제를 중단했습니다.",
      { lessonId: lesson.lessonId, protectionCounts }
    );
  }
}

async function assertDerivedLessonRosterChangeAllowed(before = {}, after = {}) {
  const afterStudentIds = new Set(after.studentIds ?? []);
  const removedStudentIds = (before.studentIds ?? []).filter((studentId) => !afterStudentIds.has(studentId));
  if (!removedStudentIds.length) return;
  const encodedLessonId = encodeURIComponent(before.lessonId);
  const [recordRows, notificationRows] = await Promise.all([
    listRows("lesson_student_records", `select=student_id&lesson_id=eq.${encodedLessonId}`, { requireServiceRole: true }),
    listRows("notification_jobs", `select=student_id&lesson_id=eq.${encodedLessonId}`, { requireServiceRole: true })
  ]);
  const removedIds = new Set(removedStudentIds);
  const connectedStudentIds = [...new Set([
    ...recordRows.map((row) => row.student_id),
    ...notificationRows.map((row) => row.student_id)
  ].filter((studentId) => removedIds.has(studentId)))];
  if (connectedStudentIds.length) {
    throw createDerivedSchoolCalendarConflict(
      "직전수업 명단에 수업기록 또는 알림 작업이 연결되어 학사일정 저장 중 자동 제외를 중단했습니다.",
      { connectedStudentIds, lessonId: before.lessonId }
    );
  }
}

async function persistDerivedLessonChange(change = {}) {
  const after = change.after ?? null;
  const before = change.before ?? null;
  const lessonId = String(after?.lessonId || before?.lessonId || "").trim();
  if (!lessonId || (!after && !before)) {
    throw createDerivedSchoolCalendarConflict("학사일정에 연결할 직전수업 계획이 올바르지 않습니다.");
  }
  if ((before && before.lessonType !== "preExam") || (after && after.lessonType !== "preExam")) {
    throw createDerivedSchoolCalendarConflict("파생 학사일정 저장은 자동 생성 직전수업만 변경할 수 있습니다.", { lessonId });
  }
  const current = await getLessonForRosterSave(lessonId);
  if (after && current && areDerivedLessonsEqual(after, current)) {
    return { lesson: current, mutated: false, operation: "unchanged" };
  }
  if (!after && !current) {
    return { lesson: null, mutated: false, operation: "unchanged" };
  }
  if (!before) {
    if (current) {
      throw createDerivedSchoolCalendarConflict(
        `직전수업 ${lessonId}가 다른 화면에서 먼저 생성되었습니다.`,
        { currentLesson: current, lessonId }
      );
    }
    const nextUpdatedAt = createNextRosterUpdatedAt();
    let savedRows;
    try {
      savedRows = await insertRows("lessons", [{ ...toLessonRow(after), updated_at: nextUpdatedAt }]);
    } catch (error) {
      throw createDerivedSchoolCalendarConflict(
        `직전수업 ${lessonId} 신규 저장이 다른 화면의 변경과 충돌했습니다.`,
        { cause: error, currentLesson: await getLessonForRosterSave(lessonId), lessonId }
      );
    }
    const verified = await getLessonForRosterSave(lessonId);
    if (
      savedRows.length !== 1 ||
      !verified ||
      !areDerivedLessonsEqual(after, verified) ||
      !areDerivedLessonTimestampsEqual(nextUpdatedAt, verified.updatedAt)
    ) {
      const error = new Error(`직전수업 ${lessonId} 신규 저장 후 Supabase 재조회가 일치하지 않습니다.`);
      Object.assign(error, { code: "SCHOOL_CALENDAR_DERIVED_VERIFICATION_FAILED", lessonId, statusCode: 409 });
      error.appliedResult = {
        lesson: verified ?? (savedRows[0] ? fromLessonRow(savedRows[0]) : { ...after, updatedAt: nextUpdatedAt }),
        mutated: true,
        operation: "create"
      };
      throw error;
    }
    return { lesson: verified, mutated: true, operation: "create" };
  }
  if (
    !current ||
    !before.updatedAt ||
    !areDerivedLessonTimestampsEqual(current.updatedAt, before.updatedAt) ||
    !areDerivedLessonsEqual(before, current)
  ) {
    throw createDerivedSchoolCalendarConflict(
      `직전수업 ${lessonId} 원본이 다른 화면에서 먼저 변경되었습니다.`,
      { currentLesson: current, lessonId }
    );
  }
  if (!after) {
    await assertDerivedLessonDeleteAllowed(current);
    const deletedRows = await deleteRows("lessons", createLessonRosterVersionFilter(lessonId, current.updatedAt));
    const verified = await getLessonForRosterSave(lessonId);
    if (deletedRows.length !== 1 || verified) {
      const error = new Error(`직전수업 ${lessonId} 삭제 후 Supabase 재조회가 일치하지 않습니다.`);
      Object.assign(error, { code: "SCHOOL_CALENDAR_DERIVED_VERIFICATION_FAILED", lessonId, statusCode: 409 });
      error.appliedResult = { beforeLesson: current, lesson: null, mutated: true, operation: "delete" };
      throw error;
    }
    return { beforeLesson: current, lesson: null, mutated: true, operation: "delete" };
  }
  await assertDerivedLessonRosterChangeAllowed(current, after);
  const nextUpdatedAt = createNextRosterUpdatedAt(current.updatedAt);
  const savedRows = await patchRows(
    "lessons",
    createLessonRosterVersionFilter(lessonId, current.updatedAt),
    { ...toLessonRow(after), updated_at: nextUpdatedAt }
  );
  if (savedRows.length !== 1) {
    throw createDerivedSchoolCalendarConflict(
      `직전수업 ${lessonId} 저장 직전에 서버 버전이 변경되었습니다.`,
      { currentLesson: await getLessonForRosterSave(lessonId), lessonId }
    );
  }
  const verified = await getLessonForRosterSave(lessonId);
  if (
    !verified ||
    !areDerivedLessonsEqual(after, verified) ||
    !areDerivedLessonTimestampsEqual(nextUpdatedAt, verified.updatedAt)
  ) {
    const error = new Error(`직전수업 ${lessonId} 저장 후 Supabase 재조회가 일치하지 않습니다.`);
    Object.assign(error, { code: "SCHOOL_CALENDAR_DERIVED_VERIFICATION_FAILED", lessonId, statusCode: 409 });
    error.appliedResult = {
      beforeLesson: current,
      lesson: verified ?? fromLessonRow(savedRows[0]),
      mutated: true,
      operation: "update"
    };
    throw error;
  }
  return { beforeLesson: current, lesson: verified, mutated: true, operation: "update" };
}

async function rollbackDerivedExamPrepChange(entry) {
  if (!entry.mutated) return { examPrepId: entry.change.after.examPrepId, verified: true };
  const before = entry.beforeExamPrepRow;
  const saved = entry.examPrepRow;
  const rollbackRows = await patchRows(
    "exam_prep_rows",
    createExamPrepRowVersionFilter(before.examPrepId, saved.updatedAt),
    { ...toExamPrepRow(before), updated_at: before.updatedAt }
  );
  const current = (await getExistingExamPrepRowMap([before.examPrepId])).get(before.examPrepId) ?? null;
  return {
    examPrepId: before.examPrepId,
    verified: rollbackRows.length === 1 &&
      areDerivedExamPrepRowsEqual(before, current ?? {}) &&
      areExamPrepRowTimestampsEqual(before.updatedAt, current?.updatedAt)
  };
}

async function rollbackDerivedLessonChange(entry) {
  const lessonId = entry.change.after?.lessonId || entry.change.before?.lessonId || "";
  if (!entry.mutated) return { lessonId, verified: true };
  if (entry.operation === "create") {
    const deletedRows = await deleteRows("lessons", createLessonRosterVersionFilter(lessonId, entry.lesson.updatedAt));
    return { lessonId, verified: deletedRows.length === 1 && !(await getLessonForRosterSave(lessonId)) };
  }
  if (entry.operation === "delete") {
    const restoredRows = await insertRows("lessons", [{ ...toLessonRow(entry.beforeLesson), updated_at: entry.beforeLesson.updatedAt }]);
    const restored = await getLessonForRosterSave(lessonId);
    return {
      lessonId,
      verified: restoredRows.length === 1 &&
        areDerivedLessonsEqual(entry.beforeLesson, restored ?? {}) &&
        areDerivedLessonTimestampsEqual(entry.beforeLesson.updatedAt, restored?.updatedAt)
    };
  }
  const rollbackRows = await patchRows(
    "lessons",
    createLessonRosterVersionFilter(lessonId, entry.lesson.updatedAt),
    { ...toLessonRow(entry.beforeLesson), updated_at: entry.beforeLesson.updatedAt }
  );
  const restored = await getLessonForRosterSave(lessonId);
  return {
    lessonId,
    verified: rollbackRows.length === 1 &&
      areDerivedLessonsEqual(entry.beforeLesson, restored ?? {}) &&
      areDerivedLessonTimestampsEqual(entry.beforeLesson.updatedAt, restored?.updatedAt)
  };
}

export async function saveDerivedSchoolCalendarPlan({ auditId = "", examPrepChanges = [], lessonChanges = [] } = {}) {
  const normalizedAuditId = String(auditId || "").trim();
  if (!normalizedAuditId) throw new Error("학사일정 연동 저장 audit ID가 필요합니다.");
  if (!Array.isArray(examPrepChanges) || !Array.isArray(lessonChanges)) {
    throw new Error("학사일정 연동 저장 계획 형식이 올바르지 않습니다.");
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return {
      auditId: normalizedAuditId,
      examPrepRows: [],
      lessonIdsToDelete: [],
      lessons: [],
      source: fallbackSource,
      verified: false
    };
  }

  const appliedRows = [];
  const appliedLessons = [];
  let failedStage = "exam-prep-rows";
  try {
    for (const change of examPrepChanges) {
      try {
        appliedRows.push({ change, ...(await persistDerivedExamPrepChange(change)) });
      } catch (error) {
        if (error.appliedResult) appliedRows.push({ change, ...error.appliedResult });
        throw error;
      }
    }
    failedStage = "pre-exam-lessons";
    for (const change of lessonChanges) {
      try {
        appliedLessons.push({ change, ...(await persistDerivedLessonChange(change)) });
      } catch (error) {
        if (error.appliedResult) appliedLessons.push({ change, ...error.appliedResult });
        throw error;
      }
    }
  } catch (error) {
    const rollbackResults = [];
    const rollbackErrors = [];
    for (const entry of [...appliedLessons].reverse()) {
      try {
        rollbackResults.push({ kind: "lesson", ...(await rollbackDerivedLessonChange(entry)) });
      } catch (rollbackError) {
        rollbackErrors.push({ id: entry.change.after?.lessonId || entry.change.before?.lessonId, kind: "lesson", message: rollbackError.message });
      }
    }
    for (const entry of [...appliedRows].reverse()) {
      try {
        rollbackResults.push({ kind: "examPrepRow", ...(await rollbackDerivedExamPrepChange(entry)) });
      } catch (rollbackError) {
        rollbackErrors.push({ id: entry.change.after?.examPrepId, kind: "examPrepRow", message: rollbackError.message });
      }
    }
    const rollbackVerified = rollbackErrors.length === 0 && rollbackResults.every((result) => result.verified);
    error.statusCode = Number(error.statusCode) || 409;
    error.code = rollbackVerified ? "SCHOOL_CALENDAR_DERIVED_SAVE_FAILED" : "SCHOOL_CALENDAR_DERIVED_PARTIAL_FAILURE";
    error.audit = {
      auditId: normalizedAuditId,
      failedStage,
      rollback: { errors: rollbackErrors, results: rollbackResults, verified: rollbackVerified }
    };
    throw error;
  }

  return {
    auditId: normalizedAuditId,
    examPrepRows: appliedRows.map((entry) => entry.examPrepRow),
    lessonIdsToDelete: appliedLessons.filter((entry) => !entry.lesson).map((entry) => entry.change.before?.lessonId).filter(Boolean),
    lessons: appliedLessons.map((entry) => entry.lesson).filter(Boolean),
    source: databaseSource,
    verified: true
  };
}

function createLessonJournalHistoryConflict(message, details = {}) {
  const error = new Error(message);
  Object.assign(error, details, { code: "LESSON_JOURNAL_HISTORY_CONFLICT", statusCode: 409 });
  return error;
}

async function getLessonJournalHistoryHomework(homeworkId) {
  const rows = await listRows(
    "homeworks",
    `select=*&homework_id=eq.${encodeURIComponent(homeworkId)}&limit=1`,
    { requireServiceRole: true }
  );
  return rows[0] ? fromHomeworkRow(rows[0]) : null;
}

function validateLessonJournalHistoryPlan({ action, homeworkChanges = [], lessonChange = {} } = {}) {
  if (!["copy", "cancel", "undo_copy", "undo_cancel"].includes(action)) {
    throw createLessonJournalHistoryConflict("지원하지 않는 수업 복사·되돌리기 행동입니다.");
  }
  const before = lessonChange.before ?? null;
  const after = lessonChange.after ?? null;
  const lessonId = String(after?.lessonId || before?.lessonId || "").trim();
  if (!lessonId || (before && after && before.lessonId !== after.lessonId)) {
    throw createLessonJournalHistoryConflict("수업 복사·되돌리기 계획의 수업 ID가 올바르지 않습니다.");
  }
  if (action === "copy" && (before || !after || after.status === "canceled")) {
    throw createLessonJournalHistoryConflict("수업 복사는 새 활성 수업만 생성할 수 있습니다.", { lessonId });
  }
  if (action === "undo_copy" && (!before || after)) {
    throw createLessonJournalHistoryConflict("복사 되돌리기는 생성된 수업만 삭제할 수 있습니다.", { lessonId });
  }
  if (["cancel", "undo_cancel"].includes(action)) {
    if (!before || !after || homeworkChanges.length > 0) {
      throw createLessonJournalHistoryConflict("수업 취소·복구 계획에는 수업 한 건만 포함할 수 있습니다.", { lessonId });
    }
    const expectedStatus = action === "cancel" ? "canceled" : "scheduled";
    if (after.status !== expectedStatus || before.status === after.status) {
      throw createLessonJournalHistoryConflict("수업 취소·복구 상태 전이가 올바르지 않습니다.", { lessonId });
    }
    if (!areLessonJournalHistoryLessonsEqual({ ...before, status: after.status }, after)) {
      throw createLessonJournalHistoryConflict("수업 취소·복구는 상태 외 수업 원천을 변경할 수 없습니다.", { lessonId });
    }
  }
  for (const change of homeworkChanges) {
    const homeworkBefore = change.before ?? null;
    const homeworkAfter = change.after ?? null;
    if (action === "copy" && (homeworkBefore || !homeworkAfter)) {
      throw createLessonJournalHistoryConflict("수업 복사는 새 숙제 행만 생성할 수 있습니다.", { lessonId });
    }
    if (action === "undo_copy" && (!homeworkBefore || homeworkAfter)) {
      throw createLessonJournalHistoryConflict("복사 되돌리기는 복사로 만든 숙제 행만 삭제할 수 있습니다.", { lessonId });
    }
    const homework = homeworkAfter ?? homeworkBefore;
    if (!homework?.homeworkId || homework.lessonId !== lessonId) {
      throw createLessonJournalHistoryConflict("복사 숙제의 수업 연결이 올바르지 않습니다.", { lessonId });
    }
  }
  if (!["copy", "undo_copy"].includes(action) && homeworkChanges.length > 0) {
    throw createLessonJournalHistoryConflict("이 행동에는 숙제 변경을 포함할 수 없습니다.", { lessonId });
  }
  return lessonId;
}

async function preflightLessonJournalUndoCopy(lessonId, homeworkChanges = []) {
  const plannedHomeworkIds = new Set(homeworkChanges.map((change) => change.before?.homeworkId).filter(Boolean));
  const encodedLessonId = encodeURIComponent(lessonId);
  const [recordRows, homeworkRows, notificationRows] = await Promise.all([
    listRows("lesson_student_records", `select=lesson_student_record_id&lesson_id=eq.${encodedLessonId}`, { requireServiceRole: true }),
    listRows("homeworks", `select=*&lesson_id=eq.${encodedLessonId}`, { requireServiceRole: true }),
    listRows("notification_jobs", `select=notification_job_id&lesson_id=eq.${encodedLessonId}`, { requireServiceRole: true })
  ]);
  const unexpectedHomeworkIds = homeworkRows
    .map((row) => row.homework_id)
    .filter((homeworkId) => !plannedHomeworkIds.has(homeworkId));
  if (recordRows.length || notificationRows.length || unexpectedHomeworkIds.length) {
    throw createLessonJournalHistoryConflict(
      "복사된 수업에 새 수업기록·숙제·알림 작업이 연결되어 되돌리기를 중단했습니다.",
      {
        lessonId,
        protectionCounts: {
          notificationJobs: notificationRows.length,
          records: recordRows.length,
          unexpectedHomeworks: unexpectedHomeworkIds.length
        },
        unexpectedHomeworkIds
      }
    );
  }
}

async function persistLessonJournalHistoryLessonChange(change = {}) {
  const after = change.after ?? null;
  const before = change.before ?? null;
  const lessonId = String(after?.lessonId || before?.lessonId || "").trim();
  const current = await getLessonForRosterSave(lessonId);
  if (after && current && areLessonJournalHistoryLessonsEqual(after, current)) {
    return { lesson: current, mutated: false, operation: "unchanged" };
  }
  if (!after && !current) return { lesson: null, mutated: false, operation: "unchanged" };
  if (!before) {
    if (current) {
      throw createLessonJournalHistoryConflict("같은 ID의 수업이 이미 다른 내용으로 존재합니다.", { currentLesson: current, lessonId });
    }
    const nextUpdatedAt = createNextRosterUpdatedAt();
    let savedRows;
    try {
      savedRows = await insertRows("lessons", [{ ...toLessonRow(after), updated_at: nextUpdatedAt }]);
    } catch (error) {
      throw createLessonJournalHistoryConflict("복사 수업 신규 저장이 다른 화면과 충돌했습니다.", {
        cause: error,
        currentLesson: await getLessonForRosterSave(lessonId),
        lessonId
      });
    }
    const verified = await getLessonForRosterSave(lessonId);
    if (
      savedRows.length !== 1 ||
      !verified ||
      !areLessonJournalHistoryLessonsEqual(after, verified) ||
      !areLessonJournalHistoryTimestampsEqual(nextUpdatedAt, verified.updatedAt)
    ) {
      const error = createLessonJournalHistoryConflict("복사 수업 저장 후 Supabase 재조회가 일치하지 않습니다.", { lessonId });
      error.appliedResult = {
        lesson: verified ?? (savedRows[0] ? fromLessonRow(savedRows[0]) : { ...after, updatedAt: nextUpdatedAt }),
        mutated: true,
        operation: "create"
      };
      throw error;
    }
    return { lesson: verified, mutated: true, operation: "create" };
  }
  if (
    !current ||
    !before.updatedAt ||
    !areLessonJournalHistoryTimestampsEqual(current.updatedAt, before.updatedAt) ||
    !areLessonJournalHistoryLessonsEqual(before, current)
  ) {
    throw createLessonJournalHistoryConflict("수업 원본이 다른 화면에서 먼저 변경되었습니다.", { currentLesson: current, lessonId });
  }
  if (!after) {
    const deletedRows = await deleteRows("lessons", createLessonRosterVersionFilter(lessonId, current.updatedAt));
    const verified = await getLessonForRosterSave(lessonId);
    if (deletedRows.length !== 1 || verified) {
      const error = createLessonJournalHistoryConflict("복사 수업 삭제 후 Supabase 재조회가 일치하지 않습니다.", { lessonId });
      error.appliedResult = { beforeLesson: current, lesson: null, mutated: true, operation: "delete" };
      throw error;
    }
    return { beforeLesson: current, lesson: null, mutated: true, operation: "delete" };
  }
  const nextUpdatedAt = createNextRosterUpdatedAt(current.updatedAt);
  const savedRows = await patchRows(
    "lessons",
    createLessonRosterVersionFilter(lessonId, current.updatedAt),
    { ...toLessonRow(after), updated_at: nextUpdatedAt }
  );
  if (savedRows.length !== 1) {
    throw createLessonJournalHistoryConflict("수업 상태 저장 직전에 서버 버전이 변경되었습니다.", {
      currentLesson: await getLessonForRosterSave(lessonId),
      lessonId
    });
  }
  const verified = await getLessonForRosterSave(lessonId);
  if (
    !verified ||
    !areLessonJournalHistoryLessonsEqual(after, verified) ||
    !areLessonJournalHistoryTimestampsEqual(nextUpdatedAt, verified.updatedAt)
  ) {
    const error = createLessonJournalHistoryConflict("수업 상태 저장 후 Supabase 재조회가 일치하지 않습니다.", { lessonId });
    error.appliedResult = { beforeLesson: current, lesson: verified ?? fromLessonRow(savedRows[0]), mutated: true, operation: "update" };
    throw error;
  }
  return { beforeLesson: current, lesson: verified, mutated: true, operation: "update" };
}

async function persistLessonJournalHistoryHomeworkChange(change = {}) {
  const after = change.after ?? null;
  const before = change.before ?? null;
  const homeworkId = String(after?.homeworkId || before?.homeworkId || "").trim();
  const current = await getLessonJournalHistoryHomework(homeworkId);
  if (after && current && areLessonJournalHistoryHomeworksEqual(after, current)) {
    return { homework: current, mutated: false, operation: "unchanged" };
  }
  if (!after && !current) return { homework: null, mutated: false, operation: "unchanged" };
  if (!before) {
    if (current) {
      throw createLessonJournalHistoryConflict("같은 ID의 숙제가 이미 다른 내용으로 존재합니다.", { currentHomework: current, homeworkId });
    }
    const nextUpdatedAt = createNextRosterUpdatedAt();
    let savedRows;
    try {
      savedRows = await insertRows("homeworks", [{ ...toHomeworkRow(after), updated_at: nextUpdatedAt }]);
    } catch (error) {
      throw createLessonJournalHistoryConflict("복사 숙제 신규 저장이 다른 화면과 충돌했습니다.", {
        cause: error,
        currentHomework: await getLessonJournalHistoryHomework(homeworkId),
        homeworkId
      });
    }
    const verified = await getLessonJournalHistoryHomework(homeworkId);
    if (
      savedRows.length !== 1 ||
      !verified ||
      !areLessonJournalHistoryHomeworksEqual(after, verified) ||
      !areLessonJournalHistoryTimestampsEqual(nextUpdatedAt, verified.updatedAt)
    ) {
      const error = createLessonJournalHistoryConflict("복사 숙제 저장 후 Supabase 재조회가 일치하지 않습니다.", { homeworkId });
      error.appliedResult = {
        homework: verified ?? (savedRows[0] ? fromHomeworkRow(savedRows[0]) : { ...after, updatedAt: nextUpdatedAt }),
        mutated: true,
        operation: "create"
      };
      throw error;
    }
    return { homework: verified, mutated: true, operation: "create" };
  }
  if (
    !current ||
    !before.updatedAt ||
    !areLessonJournalHistoryTimestampsEqual(current.updatedAt, before.updatedAt) ||
    !areLessonJournalHistoryHomeworksEqual(before, current)
  ) {
    throw createLessonJournalHistoryConflict("숙제 원본이 다른 화면에서 먼저 변경되었습니다.", { currentHomework: current, homeworkId });
  }
  if (!after) {
    const deletedRows = await deleteRows(
      "homeworks",
      `homework_id=eq.${encodeURIComponent(homeworkId)}&updated_at=eq.${encodeURIComponent(current.updatedAt)}`
    );
    const verified = await getLessonJournalHistoryHomework(homeworkId);
    if (deletedRows.length !== 1 || verified) {
      const error = createLessonJournalHistoryConflict("복사 숙제 삭제 후 Supabase 재조회가 일치하지 않습니다.", { homeworkId });
      error.appliedResult = { beforeHomework: current, homework: null, mutated: true, operation: "delete" };
      throw error;
    }
    return { beforeHomework: current, homework: null, mutated: true, operation: "delete" };
  }
  throw createLessonJournalHistoryConflict("수업 복사·되돌리기에서는 기존 숙제를 수정할 수 없습니다.", { homeworkId });
}

async function rollbackLessonJournalHistoryLesson(entry) {
  const lessonId = entry.change.after?.lessonId || entry.change.before?.lessonId || "";
  if (!entry.mutated) return { lessonId, verified: true };
  if (entry.operation === "create") {
    const deletedRows = await deleteRows("lessons", createLessonRosterVersionFilter(lessonId, entry.lesson.updatedAt));
    return { lessonId, verified: deletedRows.length === 1 && !(await getLessonForRosterSave(lessonId)) };
  }
  if (entry.operation === "delete") {
    const restoredRows = await insertRows("lessons", [{ ...toLessonRow(entry.beforeLesson), updated_at: entry.beforeLesson.updatedAt }]);
    const restored = await getLessonForRosterSave(lessonId);
    return {
      lessonId,
      verified: restoredRows.length === 1 &&
        areLessonJournalHistoryLessonsEqual(entry.beforeLesson, restored ?? {}) &&
        areLessonJournalHistoryTimestampsEqual(entry.beforeLesson.updatedAt, restored?.updatedAt)
    };
  }
  const rollbackRows = await patchRows(
    "lessons",
    createLessonRosterVersionFilter(lessonId, entry.lesson.updatedAt),
    { ...toLessonRow(entry.beforeLesson), updated_at: entry.beforeLesson.updatedAt }
  );
  const restored = await getLessonForRosterSave(lessonId);
  return {
    lessonId,
    verified: rollbackRows.length === 1 &&
      areLessonJournalHistoryLessonsEqual(entry.beforeLesson, restored ?? {}) &&
      areLessonJournalHistoryTimestampsEqual(entry.beforeLesson.updatedAt, restored?.updatedAt)
  };
}

async function rollbackLessonJournalHistoryHomework(entry) {
  const homeworkId = entry.change.after?.homeworkId || entry.change.before?.homeworkId || "";
  if (!entry.mutated) return { homeworkId, verified: true };
  if (entry.operation === "create") {
    const deletedRows = await deleteRows(
      "homeworks",
      `homework_id=eq.${encodeURIComponent(homeworkId)}&updated_at=eq.${encodeURIComponent(entry.homework.updatedAt)}`
    );
    return { homeworkId, verified: deletedRows.length === 1 && !(await getLessonJournalHistoryHomework(homeworkId)) };
  }
  if (entry.operation === "delete") {
    const restoredRows = await insertRows("homeworks", [{ ...toHomeworkRow(entry.beforeHomework), updated_at: entry.beforeHomework.updatedAt }]);
    const restored = await getLessonJournalHistoryHomework(homeworkId);
    return {
      homeworkId,
      verified: restoredRows.length === 1 &&
        areLessonJournalHistoryHomeworksEqual(entry.beforeHomework, restored ?? {}) &&
        areLessonJournalHistoryTimestampsEqual(entry.beforeHomework.updatedAt, restored?.updatedAt)
    };
  }
  return { homeworkId, verified: false };
}

export async function saveLessonJournalHistoryPlan({
  action = "",
  auditId = "",
  homeworkChanges = [],
  lessonChange = {}
} = {}) {
  const normalizedAuditId = String(auditId || "").trim();
  if (!normalizedAuditId) throw new Error("수업 복사·되돌리기 audit ID가 필요합니다.");
  if (!Array.isArray(homeworkChanges)) throw new Error("수업 복사·되돌리기 숙제 계획 형식이 올바르지 않습니다.");
  const lessonId = validateLessonJournalHistoryPlan({ action, homeworkChanges, lessonChange });
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { auditId: normalizedAuditId, homeworks: [], lesson: null, source: fallbackSource, verified: false };
  }
  if (action === "undo_copy") await preflightLessonJournalUndoCopy(lessonId, homeworkChanges);

  const appliedHomeworks = [];
  let appliedLesson = null;
  let failedStage = action === "undo_copy" ? "copied-homeworks" : "lesson";
  try {
    if (action === "undo_copy") {
      for (const change of homeworkChanges) {
        try {
          appliedHomeworks.push({ change, ...(await persistLessonJournalHistoryHomeworkChange(change)) });
        } catch (error) {
          if (error.appliedResult) appliedHomeworks.push({ change, ...error.appliedResult });
          throw error;
        }
      }
      failedStage = "copied-lesson";
      try {
        appliedLesson = { change: lessonChange, ...(await persistLessonJournalHistoryLessonChange(lessonChange)) };
      } catch (error) {
        if (error.appliedResult) appliedLesson = { change: lessonChange, ...error.appliedResult };
        throw error;
      }
    } else {
      try {
        appliedLesson = { change: lessonChange, ...(await persistLessonJournalHistoryLessonChange(lessonChange)) };
      } catch (error) {
        if (error.appliedResult) appliedLesson = { change: lessonChange, ...error.appliedResult };
        throw error;
      }
      failedStage = "copied-homeworks";
      for (const change of homeworkChanges) {
        try {
          appliedHomeworks.push({ change, ...(await persistLessonJournalHistoryHomeworkChange(change)) });
        } catch (error) {
          if (error.appliedResult) appliedHomeworks.push({ change, ...error.appliedResult });
          throw error;
        }
      }
    }
  } catch (error) {
    const rollbackResults = [];
    const rollbackErrors = [];
    const rollbackLesson = async () => {
      if (!appliedLesson) return;
      try {
        rollbackResults.push({ kind: "lesson", ...(await rollbackLessonJournalHistoryLesson(appliedLesson)) });
      } catch (rollbackError) {
        rollbackErrors.push({ id: lessonId, kind: "lesson", message: rollbackError.message });
      }
    };
    const rollbackHomeworks = async () => {
      for (const entry of [...appliedHomeworks].reverse()) {
        try {
          rollbackResults.push({ kind: "homework", ...(await rollbackLessonJournalHistoryHomework(entry)) });
        } catch (rollbackError) {
          rollbackErrors.push({ id: entry.change.after?.homeworkId || entry.change.before?.homeworkId, kind: "homework", message: rollbackError.message });
        }
      }
    };
    if (action === "undo_copy") {
      await rollbackLesson();
      await rollbackHomeworks();
    } else {
      await rollbackHomeworks();
      await rollbackLesson();
    }
    const rollbackVerified = rollbackErrors.length === 0 && rollbackResults.every((result) => result.verified);
    error.statusCode = Number(error.statusCode) || 409;
    error.code = rollbackVerified ? "LESSON_JOURNAL_HISTORY_SAVE_FAILED" : "LESSON_JOURNAL_HISTORY_PARTIAL_FAILURE";
    error.audit = {
      action,
      auditId: normalizedAuditId,
      failedStage,
      rollback: { errors: rollbackErrors, results: rollbackResults, verified: rollbackVerified }
    };
    throw error;
  }

  const persistedLesson = appliedLesson?.lesson ?? null;
  const persistedHomeworks = appliedHomeworks.map((entry) => entry.homework).filter(Boolean);
  const verification = verifyLessonJournalHistoryPlan({ homeworkChanges, lessonChange }, {
    homeworks: persistedHomeworks,
    lesson: persistedLesson
  });
  if (!verification.verified) {
    throw createLessonJournalHistoryConflict("수업 복사·되돌리기 최종 원천 대조가 일치하지 않습니다.", {
      audit: { action, auditId: normalizedAuditId, verification }
    });
  }
  let relatedHomeworks;
  let relatedRecords;
  if (action === "undo_cancel") {
    const encodedLessonId = encodeURIComponent(lessonId);
    const [homeworkRows, recordRows] = await Promise.all([
      listRows("homeworks", `select=*&lesson_id=eq.${encodedLessonId}`, { requireServiceRole: true }),
      listRows("lesson_student_records", `select=*&lesson_id=eq.${encodedLessonId}`, { requireServiceRole: true })
    ]);
    relatedHomeworks = homeworkRows.map(fromHomeworkRow);
    relatedRecords = recordRows.map(fromLessonRecordRow);
  }
  return {
    action,
    auditId: normalizedAuditId,
    homeworks: persistedHomeworks,
    lesson: persistedLesson,
    ...(relatedHomeworks ? { relatedHomeworks, relatedRecords } : {}),
    source: databaseSource,
    verified: true
  };
}

function createLessonJournalRowsConflict(message, details = {}) {
  const error = new Error(message);
  Object.assign(error, details, { code: "LESSON_JOURNAL_ROWS_CONFLICT", statusCode: 409 });
  return error;
}

async function getLessonJournalRecordForRowsSave(lessonId, studentId) {
  const rows = await listRows(
    "lesson_student_records",
    `select=*&lesson_id=eq.${encodeURIComponent(lessonId)}&student_id=eq.${encodeURIComponent(studentId)}&limit=1`,
    { requireServiceRole: true }
  );
  return rows[0] ? fromLessonRecordRow(rows[0]) : null;
}

function validateLessonJournalRowsPlan({ homeworkChanges = [], recordChanges = [] } = {}) {
  if (!Array.isArray(homeworkChanges) || !Array.isArray(recordChanges)) {
    throw createLessonJournalRowsConflict("수업기록·숙제 저장 계획 형식이 올바르지 않습니다.");
  }
  const homeworkIds = new Set();
  for (const change of homeworkChanges) {
    const after = change?.after;
    if (!after?.homeworkId || !after?.studentId || !after?.lessonId) {
      throw createLessonJournalRowsConflict("저장할 숙제의 ID·수업·학생 원천이 필요합니다.");
    }
    if (change.before && change.before.homeworkId !== after.homeworkId) {
      throw createLessonJournalRowsConflict("숙제 저장 계획의 이전·이후 ID가 일치하지 않습니다.");
    }
    if (homeworkIds.has(after.homeworkId)) {
      throw createLessonJournalRowsConflict(`중복된 숙제 저장 계획입니다: ${after.homeworkId}`);
    }
    homeworkIds.add(after.homeworkId);
  }
  const recordIds = new Set();
  for (const change of recordChanges) {
    const after = change?.after;
    if (!after?.lessonStudentRecordId || !after?.lessonId || !after?.studentId) {
      throw createLessonJournalRowsConflict("저장할 수업기록의 ID·수업·학생 원천이 필요합니다.");
    }
    const identity = `${after.lessonId}::${after.studentId}`;
    if (
      change.before &&
      (change.before.lessonId !== after.lessonId || change.before.studentId !== after.studentId)
    ) {
      throw createLessonJournalRowsConflict("수업기록 저장 계획의 이전·이후 대상이 일치하지 않습니다.");
    }
    if (recordIds.has(identity)) {
      throw createLessonJournalRowsConflict(`중복된 수업기록 저장 계획입니다: ${identity}`);
    }
    recordIds.add(identity);
  }
}

async function persistLessonJournalRowsHomeworkChange(change = {}) {
  const after = change.after;
  const before = change.before ?? null;
  const homeworkId = after.homeworkId;
  const current = await getLessonJournalHistoryHomework(homeworkId);
  if (current && areLessonJournalHistoryHomeworksEqual(after, current)) {
    return { homework: current, mutated: false, operation: "unchanged" };
  }
  if (!before) {
    if (current) {
      throw createLessonJournalRowsConflict("숙제가 다른 화면에서 먼저 생성되었습니다.", { currentHomework: current, homeworkId });
    }
    const nextUpdatedAt = createNextRosterUpdatedAt();
    let savedRows;
    try {
      savedRows = await insertRows("homeworks", [{ ...toHomeworkRow(after), updated_at: nextUpdatedAt }]);
    } catch (error) {
      const recovered = await getLessonJournalHistoryHomework(homeworkId);
      if (recovered && areLessonJournalHistoryHomeworksEqual(after, recovered)) {
        return {
          homework: recovered,
          mutated: areLessonJournalHistoryTimestampsEqual(nextUpdatedAt, recovered.updatedAt),
          operation: "create"
        };
      }
      throw createLessonJournalRowsConflict("숙제 신규 저장이 다른 화면과 충돌했습니다.", {
        cause: error,
        currentHomework: recovered,
        homeworkId
      });
    }
    const verified = await getLessonJournalHistoryHomework(homeworkId);
    if (
      savedRows.length !== 1 ||
      !verified ||
      !areLessonJournalHistoryHomeworksEqual(after, verified) ||
      !areLessonJournalHistoryTimestampsEqual(nextUpdatedAt, verified.updatedAt)
    ) {
      const error = createLessonJournalRowsConflict("숙제 저장 후 Supabase 재조회가 일치하지 않습니다.", { homeworkId });
      error.appliedResult = {
        homework: verified ?? (savedRows[0] ? fromHomeworkRow(savedRows[0]) : { ...after, updatedAt: nextUpdatedAt }),
        mutated: true,
        operation: "create"
      };
      throw error;
    }
    return { homework: verified, mutated: true, operation: "create" };
  }
  if (
    !current ||
    !before.updatedAt ||
    !areLessonJournalHistoryTimestampsEqual(current.updatedAt, before.updatedAt) ||
    !areLessonJournalHistoryHomeworksEqual(before, current)
  ) {
    throw createLessonJournalRowsConflict("숙제 원본이 다른 화면에서 먼저 변경되었습니다.", { currentHomework: current, homeworkId });
  }
  const nextUpdatedAt = createNextRosterUpdatedAt(current.updatedAt);
  let savedRows;
  try {
    savedRows = await patchRows(
      "homeworks",
      `homework_id=eq.${encodeURIComponent(homeworkId)}&updated_at=eq.${encodeURIComponent(current.updatedAt)}`,
      { ...toHomeworkRow(after), updated_at: nextUpdatedAt }
    );
  } catch (error) {
    const recovered = await getLessonJournalHistoryHomework(homeworkId);
    if (recovered && areLessonJournalHistoryHomeworksEqual(after, recovered)) {
      return {
        beforeHomework: current,
        homework: recovered,
        mutated: areLessonJournalHistoryTimestampsEqual(nextUpdatedAt, recovered.updatedAt),
        operation: "update"
      };
    }
    throw error;
  }
  if (savedRows.length !== 1) {
    throw createLessonJournalRowsConflict("숙제 저장 직전에 서버 버전이 변경되었습니다.", {
      currentHomework: await getLessonJournalHistoryHomework(homeworkId),
      homeworkId
    });
  }
  const verified = await getLessonJournalHistoryHomework(homeworkId);
  if (
    !verified ||
    !areLessonJournalHistoryHomeworksEqual(after, verified) ||
    !areLessonJournalHistoryTimestampsEqual(nextUpdatedAt, verified.updatedAt)
  ) {
    const error = createLessonJournalRowsConflict("숙제 저장 후 Supabase 재조회가 일치하지 않습니다.", { homeworkId });
    error.appliedResult = { beforeHomework: current, homework: verified ?? fromHomeworkRow(savedRows[0]), mutated: true, operation: "update" };
    throw error;
  }
  return { beforeHomework: current, homework: verified, mutated: true, operation: "update" };
}

async function persistLessonJournalRowsRecordChange(change = {}) {
  const after = change.after;
  const before = change.before ?? null;
  const { lessonId, studentId } = after;
  await assertLessonStudentRecordBelongsToLesson(lessonId, studentId);
  const current = await getLessonJournalRecordForRowsSave(lessonId, studentId);
  const stableAfter = current
    ? { ...after, lessonStudentRecordId: current.lessonStudentRecordId }
    : after;
  const attendanceStableRecord = mergeExistingAttendanceForNonAttendanceSave(stableAfter, current);
  const effectiveAfter = mergeExistingHomeworkFollowupForSave(attendanceStableRecord, current);
  if (current && areLessonJournalRecordsEqual(effectiveAfter, current)) {
    return { record: current, mutated: false, operation: "unchanged" };
  }
  if (!before) {
    if (current) {
      throw createLessonJournalRowsConflict("수업기록이 다른 화면에서 먼저 생성되었습니다.", { currentRecord: current, lessonId, studentId });
    }
    const nextUpdatedAt = createNextRosterUpdatedAt();
    let savedRows;
    try {
      savedRows = await insertRows("lesson_student_records", [{ ...toLessonRecordRow(effectiveAfter), updated_at: nextUpdatedAt }]);
    } catch (error) {
      const recovered = await getLessonJournalRecordForRowsSave(lessonId, studentId);
      if (recovered && areLessonJournalRecordsEqual(effectiveAfter, recovered)) {
        return {
          record: recovered,
          mutated: areLessonJournalHistoryTimestampsEqual(nextUpdatedAt, recovered.updatedAt),
          operation: "create"
        };
      }
      throw createLessonJournalRowsConflict("수업기록 신규 저장이 다른 화면과 충돌했습니다.", {
        cause: error,
        currentRecord: recovered,
        lessonId,
        studentId
      });
    }
    const verified = await getLessonJournalRecordForRowsSave(lessonId, studentId);
    if (
      savedRows.length !== 1 ||
      !verified ||
      !areLessonJournalRecordsEqual(effectiveAfter, verified) ||
      !areLessonJournalHistoryTimestampsEqual(nextUpdatedAt, verified.updatedAt)
    ) {
      const error = createLessonJournalRowsConflict("수업기록 저장 후 Supabase 재조회가 일치하지 않습니다.", { lessonId, studentId });
      error.appliedResult = {
        record: verified ?? (savedRows[0] ? fromLessonRecordRow(savedRows[0]) : { ...effectiveAfter, updatedAt: nextUpdatedAt }),
        mutated: true,
        operation: "create"
      };
      throw error;
    }
    return { record: verified, mutated: true, operation: "create" };
  }
  if (
    !current ||
    !before.updatedAt ||
    !areLessonJournalHistoryTimestampsEqual(current.updatedAt, before.updatedAt) ||
    !areLessonJournalRecordsEqual(before, current)
  ) {
    throw createLessonJournalRowsConflict("수업기록 원본이 다른 화면에서 먼저 변경되었습니다.", { currentRecord: current, lessonId, studentId });
  }
  const nextUpdatedAt = createNextRosterUpdatedAt(current.updatedAt);
  const versionFilter = `lesson_id=eq.${encodeURIComponent(lessonId)}&student_id=eq.${encodeURIComponent(studentId)}&updated_at=eq.${encodeURIComponent(current.updatedAt)}`;
  let savedRows;
  try {
    savedRows = await patchRows(
      "lesson_student_records",
      versionFilter,
      { ...toLessonRecordRow(effectiveAfter), updated_at: nextUpdatedAt }
    );
  } catch (error) {
    const recovered = await getLessonJournalRecordForRowsSave(lessonId, studentId);
    if (recovered && areLessonJournalRecordsEqual(effectiveAfter, recovered)) {
      return {
        beforeRecord: current,
        record: recovered,
        mutated: areLessonJournalHistoryTimestampsEqual(nextUpdatedAt, recovered.updatedAt),
        operation: "update"
      };
    }
    throw error;
  }
  if (savedRows.length !== 1) {
    throw createLessonJournalRowsConflict("수업기록 저장 직전에 서버 버전이 변경되었습니다.", {
      currentRecord: await getLessonJournalRecordForRowsSave(lessonId, studentId),
      lessonId,
      studentId
    });
  }
  const verified = await getLessonJournalRecordForRowsSave(lessonId, studentId);
  if (
    !verified ||
    !areLessonJournalRecordsEqual(effectiveAfter, verified) ||
    !areLessonJournalHistoryTimestampsEqual(nextUpdatedAt, verified.updatedAt)
  ) {
    const error = createLessonJournalRowsConflict("수업기록 저장 후 Supabase 재조회가 일치하지 않습니다.", { lessonId, studentId });
    error.appliedResult = { beforeRecord: current, record: verified ?? fromLessonRecordRow(savedRows[0]), mutated: true, operation: "update" };
    throw error;
  }
  return { beforeRecord: current, record: verified, mutated: true, operation: "update" };
}

async function rollbackLessonJournalRowsHomework(entry) {
  const homeworkId = entry.change.after.homeworkId;
  if (!entry.mutated) return { homeworkId, verified: true };
  if (entry.operation === "create") {
    const deletedRows = await deleteRows(
      "homeworks",
      `homework_id=eq.${encodeURIComponent(homeworkId)}&updated_at=eq.${encodeURIComponent(entry.homework.updatedAt)}`
    );
    return { homeworkId, verified: deletedRows.length === 1 && !(await getLessonJournalHistoryHomework(homeworkId)) };
  }
  const rollbackRows = await patchRows(
    "homeworks",
    `homework_id=eq.${encodeURIComponent(homeworkId)}&updated_at=eq.${encodeURIComponent(entry.homework.updatedAt)}`,
    { ...toHomeworkRow(entry.beforeHomework), updated_at: entry.beforeHomework.updatedAt }
  );
  const restored = await getLessonJournalHistoryHomework(homeworkId);
  return {
    homeworkId,
    verified: rollbackRows.length === 1 &&
      areLessonJournalHistoryHomeworksEqual(entry.beforeHomework, restored ?? {}) &&
      areLessonJournalHistoryTimestampsEqual(entry.beforeHomework.updatedAt, restored?.updatedAt)
  };
}

async function rollbackLessonJournalRowsRecord(entry) {
  const { lessonId, studentId } = entry.change.after;
  if (!entry.mutated) return { lessonId, studentId, verified: true };
  const versionFilter = `lesson_id=eq.${encodeURIComponent(lessonId)}&student_id=eq.${encodeURIComponent(studentId)}&updated_at=eq.${encodeURIComponent(entry.record.updatedAt)}`;
  if (entry.operation === "create") {
    const deletedRows = await deleteRows("lesson_student_records", versionFilter);
    return {
      lessonId,
      studentId,
      verified: deletedRows.length === 1 && !(await getLessonJournalRecordForRowsSave(lessonId, studentId))
    };
  }
  const rollbackRows = await patchRows(
    "lesson_student_records",
    versionFilter,
    { ...toLessonRecordRow(entry.beforeRecord), updated_at: entry.beforeRecord.updatedAt }
  );
  const restored = await getLessonJournalRecordForRowsSave(lessonId, studentId);
  return {
    lessonId,
    studentId,
    verified: rollbackRows.length === 1 &&
      areLessonJournalRecordsEqual(entry.beforeRecord, restored ?? {}) &&
      areLessonJournalHistoryTimestampsEqual(entry.beforeRecord.updatedAt, restored?.updatedAt)
  };
}

export async function saveLessonJournalRowsPlan({
  auditId = "",
  homeworkChanges = [],
  recordChanges = []
} = {}) {
  const normalizedAuditId = String(auditId || "").trim();
  if (!normalizedAuditId) throw new Error("수업기록·숙제 저장 audit ID가 필요합니다.");
  validateLessonJournalRowsPlan({ homeworkChanges, recordChanges });
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { auditId: normalizedAuditId, homeworks: [], records: [], source: fallbackSource, verified: false };
  }

  const appliedHomeworks = [];
  const appliedRecords = [];
  let failedStage = "homeworks";
  try {
    for (const change of homeworkChanges) {
      try {
        appliedHomeworks.push({ change, ...(await persistLessonJournalRowsHomeworkChange(change)) });
      } catch (error) {
        if (error.appliedResult) appliedHomeworks.push({ change, ...error.appliedResult });
        throw error;
      }
    }
    failedStage = "records";
    for (const change of recordChanges) {
      try {
        appliedRecords.push({ change, ...(await persistLessonJournalRowsRecordChange(change)) });
      } catch (error) {
        if (error.appliedResult) appliedRecords.push({ change, ...error.appliedResult });
        throw error;
      }
    }
  } catch (error) {
    const rollbackResults = [];
    const rollbackErrors = [];
    for (const entry of [...appliedRecords].reverse()) {
      try {
        rollbackResults.push({ kind: "record", ...(await rollbackLessonJournalRowsRecord(entry)) });
      } catch (rollbackError) {
        rollbackErrors.push({ id: entry.change.after?.lessonStudentRecordId, kind: "record", message: rollbackError.message });
      }
    }
    for (const entry of [...appliedHomeworks].reverse()) {
      try {
        rollbackResults.push({ kind: "homework", ...(await rollbackLessonJournalRowsHomework(entry)) });
      } catch (rollbackError) {
        rollbackErrors.push({ id: entry.change.after?.homeworkId, kind: "homework", message: rollbackError.message });
      }
    }
    const rollbackVerified = rollbackErrors.length === 0 && rollbackResults.every((result) => result.verified);
    error.statusCode = Number(error.statusCode) || 409;
    error.code = rollbackVerified ? "LESSON_JOURNAL_ROWS_SAVE_FAILED" : "LESSON_JOURNAL_ROWS_PARTIAL_FAILURE";
    error.audit = {
      auditId: normalizedAuditId,
      failedStage,
      rollback: { errors: rollbackErrors, results: rollbackResults, verified: rollbackVerified }
    };
    throw error;
  }

  const persistedHomeworks = appliedHomeworks.map((entry) => entry.homework);
  const persistedRecords = appliedRecords.map((entry) => entry.record);
  const verification = verifyLessonJournalRowsSavePlan(
    { homeworkChanges, recordChanges },
    { homeworks: persistedHomeworks, records: persistedRecords }
  );
  if (!verification.verified) {
    throw createLessonJournalRowsConflict("수업기록·숙제 최종 원천 대조가 일치하지 않습니다.", {
      audit: { auditId: normalizedAuditId, verification }
    });
  }
  return {
    auditId: normalizedAuditId,
    homeworks: persistedHomeworks,
    records: persistedRecords,
    source: databaseSource,
    verified: true
  };
}

export async function upsertLesson(lesson) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, lesson };
  }

  await assertLessonClosureConversionAllowed(lesson);
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

  for (const lesson of lessons) {
    await assertLessonClosureConversionAllowed(lesson);
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

export async function syncSpecialLectureLessonStudentSchedule(payload = {}) {
  const lessonId = String(payload.lessonId || "").trim();
  const studentId = String(payload.studentId || "").trim();
  if (!lessonId || !studentId) throw new Error("특강 학생별 시간 반영에 수업 ID와 학생 ID가 필요합니다.");
  const expectedSchedule = payload.expectedSchedule
    ? {
        ...payload.expectedSchedule,
        studentId,
        startTime: normalizeClockTime(payload.expectedSchedule.startTime),
        endTime: normalizeClockTime(payload.expectedSchedule.endTime),
        scheduleType: payload.expectedSchedule.scheduleType === "adjusted" ? "adjusted" : "official",
        overrideReason: String(payload.expectedSchedule.overrideReason || "")
      }
    : null;
  if (
    expectedSchedule &&
    (
      !expectedSchedule.startTime ||
      !expectedSchedule.endTime ||
      expectedSchedule.startTime >= expectedSchedule.endTime
    )
  ) {
    throw new Error("특강 학생별 시작·종료 시간을 확인해 주세요.");
  }

  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    const lesson = sampleData.lessons.find((item) => item.lessonId === lessonId);
    if (!lesson) throw new Error("특강 수업을 찾지 못했습니다.");
    return {
      source: fallbackSource,
      lesson: mergeSpecialLectureStudentSchedule({ lesson, studentId, expectedSchedule }),
      operation: getSpecialLectureStudentSyncOperation({ lesson, studentId, expectedSchedule })
    };
  }

  const encodedLessonId = encodeURIComponent(lessonId);
  const lessonRows = await listRows(
    "lessons",
    `select=*&lesson_id=eq.${encodedLessonId}&limit=1`,
    { requireServiceRole: true }
  );
  const lessonRow = lessonRows[0];
  if (!lessonRow) throw new Error("특강 수업을 찾지 못했습니다.");
  if (!lessonRow.updated_at) throw new Error("특강 수업의 저장 버전을 확인할 수 없어 변경을 중단했습니다.");
  const lesson = fromLessonRow(lessonRow);
  if (!isSpecialLectureTrackedLesson(lesson)) throw new Error("특강 수업만 학생별 시간 반영을 사용할 수 있습니다.");

  const encodedStudentId = encodeURIComponent(studentId);
  const [recordRows, notificationRows] = await Promise.all([
    listRows(
      "lesson_student_records",
      `select=lesson_student_record_id,lesson_id,student_id&lesson_id=eq.${encodedLessonId}&student_id=eq.${encodedStudentId}`,
      { requireServiceRole: true }
    ),
    listRows(
      "notification_jobs",
      `select=notification_job_id,lesson_id,student_id,status&lesson_id=eq.${encodedLessonId}&status=in.(draft,queued,scheduled,pending_send)`,
      { requireServiceRole: true }
    )
  ]);
  const protectionReasons = getSpecialLectureStudentSyncProtectionReasons({
    lesson,
    lessonDate: lesson.date,
    studentId,
    expectedSchedule,
    records: recordRows.map((row) => ({ lessonId: row.lesson_id, studentId: row.student_id })),
    notificationJobs: notificationRows.map((row) => ({
      lessonId: row.lesson_id,
      studentId: row.student_id,
      status: row.status
    })),
    pendingNotificationStatuses: new Set(["draft", "queued", "scheduled", "pending_send"]),
    todayDateKey: getKoreaDateString()
  });
  if (protectionReasons.length) {
    throw new Error(`특강 학생별 시간 자동 반영 보호: ${protectionReasons.join(", ")}`);
  }

  const operation = getSpecialLectureStudentSyncOperation({ lesson, studentId, expectedSchedule });
  if (operation === "none") return { source: databaseSource, lesson, operation };
  const nextLesson = mergeSpecialLectureStudentSchedule({ lesson, studentId, expectedSchedule });
  const nextUpdatedAt = new Date().toISOString();
  const savedRows = await patchRows(
    "lessons",
    `lesson_id=eq.${encodedLessonId}&updated_at=eq.${encodeURIComponent(lessonRow.updated_at)}`,
    {
      special_lecture_student_schedules: normalizeSpecialLectureStudentSchedules(
        nextLesson.specialLectureStudentSchedules
      ),
      student_ids: nextLesson.studentIds,
      updated_at: nextUpdatedAt
    }
  );
  if (savedRows.length !== 1) {
    throw new Error("다른 화면에서 특강 수업이 먼저 변경되어 학생별 시간 반영을 중단했습니다. 새로고침 후 다시 확인해 주세요.");
  }
  const savedLesson = fromLessonRow(savedRows[0]);
  if (!isSpecialLectureStudentScheduleSynced({ lesson: savedLesson, studentId, expectedSchedule })) {
    throw new Error("특강 학생별 시간 저장 후 Supabase 값이 계획과 일치하지 않습니다.");
  }
  return { source: databaseSource, lesson: savedLesson, operation };
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

export async function deleteExamPrepLessonForReconcile(lessonId, { auditId = "" } = {}) {
  if (!lessonId) throw new Error("삭제할 시험대비 수업 ID가 필요합니다.");
  const audit = {
    auditId,
    operation: "delete_exam_prep_lesson",
    targetLessonId: lessonId,
    stage: "before-read",
    beforeLessonIds: [],
    afterLessonIds: [],
    deletedLessonIds: [],
    protectionCounts: {
      studentIds: 0,
      records: 0,
      homeworks: 0,
      notificationJobs: 0
    },
    failureStage: "",
    rollback: {
      attempted: false,
      restoredLessonIds: [],
      verified: false
    }
  };
  const throwAuditedError = (message, cause) => {
    const error = new Error(message, cause ? { cause } : undefined);
    error.audit = audit;
    throw error;
  };

  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    audit.stage = "fallback";
    audit.deletedLessonIds = [lessonId];
    audit.rollback.verified = true;
    return { source: fallbackSource, lessonId, audit };
  }

  let beforeRows = [];
  try {
    beforeRows = await listRows("lessons", "select=*", { requireServiceRole: true });
    audit.beforeLessonIds = beforeRows.map((row) => row.lesson_id).filter(Boolean);
    const targetRow = beforeRows.find((row) => row.lesson_id === lessonId);
    if (!targetRow) throwAuditedError("삭제할 시험대비 수업을 Supabase에서 찾지 못했습니다.");
    const isGeneratedExamPrepLesson = (
      targetRow.lesson_type === "examPrep" &&
      (
        String(targetRow.source_school_event_id || "").startsWith("generated:exam_prep:") ||
        String(targetRow.lesson_id || "").startsWith("lesson_exam_prep_")
      )
    );
    if (!isGeneratedExamPrepLesson) {
      throwAuditedError("자동 생성 시험대비 수업만 시험정보 삭제와 함께 정리할 수 있습니다.");
    }

    audit.stage = "protection-read";
    const encodedLessonId = encodeURIComponent(lessonId);
    const [recordRows, homeworkRows, notificationRows] = await Promise.all([
      listRows(
        "lesson_student_records",
        `select=lesson_student_record_id&lesson_id=eq.${encodedLessonId}`,
        { requireServiceRole: true }
      ),
      listRows(
        "homeworks",
        `select=homework_id&lesson_id=eq.${encodedLessonId}`,
        { requireServiceRole: true }
      ),
      listRows(
        "notification_jobs",
        `select=notification_job_id&lesson_id=eq.${encodedLessonId}`,
        { requireServiceRole: true }
      )
    ]);
    audit.protectionCounts = {
      studentIds: Array.isArray(targetRow.student_ids) ? targetRow.student_ids.length : 0,
      records: recordRows.length,
      homeworks: homeworkRows.length,
      notificationJobs: notificationRows.length
    };
    if (Object.values(audit.protectionCounts).some((count) => count > 0)) {
      throwAuditedError("시험대비 수업에 학생·수업기록·숙제·알림 예약 중 하나가 연결되어 자동 삭제를 중단했습니다.");
    }

    audit.stage = "delete-target";
    await deleteRows("lessons", `lesson_id=eq.${encodedLessonId}`);
    audit.stage = "after-read";
    const afterRows = await listRows("lessons", "select=*", { requireServiceRole: true });
    audit.afterLessonIds = afterRows.map((row) => row.lesson_id).filter(Boolean);
    const afterIds = new Set(audit.afterLessonIds);
    audit.deletedLessonIds = audit.beforeLessonIds.filter((id) => !afterIds.has(id));
    if (
      afterIds.has(lessonId) ||
      audit.deletedLessonIds.length !== 1 ||
      audit.deletedLessonIds[0] !== lessonId
    ) {
      throwAuditedError("시험대비 수업 단일 삭제 범위가 일치하지 않습니다.");
    }

    audit.stage = "completed";
    audit.rollback.verified = true;
    return { source: databaseSource, lessonId, audit };
  } catch (error) {
    if (!audit.failureStage) audit.failureStage = audit.stage;
    if (beforeRows.length > 0 && audit.stage !== "completed") {
      try {
        audit.stage = "rollback-read";
        const currentRows = await listRows("lessons", "select=*", { requireServiceRole: true });
        const currentIds = new Set(currentRows.map((row) => row.lesson_id).filter(Boolean));
        const missingRows = beforeRows.filter((row) => !currentIds.has(row.lesson_id));
        audit.rollback.attempted = missingRows.length > 0;
        if (missingRows.length > 0) {
          audit.stage = "rollback-restore";
          await upsertRows("lessons", missingRows, { onConflict: "lesson_id" });
          audit.rollback.restoredLessonIds = missingRows.map((row) => row.lesson_id);
        }
        audit.stage = "rollback-verify";
        const verifiedRows = await listRows("lessons", "select=lesson_id", { requireServiceRole: true });
        const verifiedIds = new Set(verifiedRows.map((row) => row.lesson_id).filter(Boolean));
        audit.rollback.verified = beforeRows.every((row) => verifiedIds.has(row.lesson_id));
      } catch (rollbackError) {
        audit.rollback.error = rollbackError.message;
        audit.rollback.verified = false;
      }
    }
    if (error?.audit === audit) throw error;
    throwAuditedError(error.message || "시험대비 수업 삭제에 실패했습니다.", error);
  }
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
  const makeupTaskIds = [...new Set(makeupTasks.map((task) => task.makeupTaskId).filter(Boolean))];
  const makeupTaskIdFilter = makeupTaskIds.map((makeupTaskId) => encodeURIComponent(makeupTaskId)).join(",");
  const verifiedRows = makeupTaskIdFilter
    ? await listRows(
        "makeup_tasks",
        `select=*&makeup_task_id=in.(${makeupTaskIdFilter})`,
        { requireServiceRole: true }
      )
    : rows;
  return { source: databaseSource, makeupTasks: verifiedRows.map(fromMakeupTaskRow) };
}

function createLessonJournalMakeupTaskConflict(taskId, currentTask = null) {
  const error = new Error(`등원보충 ${taskId}가 다른 화면에서 먼저 변경되었습니다.`);
  error.code = "LESSON_JOURNAL_MAKEUP_TASK_CONFLICT";
  error.currentTask = currentTask;
  error.statusCode = 409;
  return error;
}

function createMakeupTaskRowPersistenceSnapshot(row = {}) {
  return {
    due_date: row.due_date ?? null,
    makeup_task_id: row.makeup_task_id ?? "",
    note: createLessonJournalMakeupTaskPersistenceSnapshot(parseJsonNote(row.note)),
    source_homework_id: row.source_homework_id ?? null,
    source_lesson_id: row.source_lesson_id ?? null,
    status: row.status ?? "open",
    student_id: row.student_id ?? "",
    title: row.title ?? "",
    type: row.type ?? "homework_makeup"
  };
}

function areMakeupTaskRowsPersistedEqual(left = {}, right = {}) {
  return JSON.stringify(createMakeupTaskRowPersistenceSnapshot(left)) ===
    JSON.stringify(createMakeupTaskRowPersistenceSnapshot(right));
}

async function readMakeupTaskRow(makeupTaskId) {
  const rows = await listRows(
    "makeup_tasks",
    `select=*&makeup_task_id=eq.${encodeURIComponent(makeupTaskId)}&limit=1`,
    { requireServiceRole: true }
  );
  return rows[0] ?? null;
}

async function persistLessonJournalMakeupTask(requestedTask = {}) {
  const makeupTaskId = String(requestedTask.makeupTaskId ?? "").trim();
  if (!makeupTaskId || !requestedTask.studentId || !requestedTask.taskType) {
    const error = new Error("등원보충 저장에 task ID·학생·유형이 필요합니다.");
    error.code = "LESSON_JOURNAL_MAKEUP_TASK_INVALID";
    error.statusCode = 400;
    throw error;
  }

  const desiredRow = toMakeupTaskRow({ ...requestedTask, makeupTaskId });
  let currentRow = await readMakeupTaskRow(makeupTaskId);
  if (currentRow && areMakeupTaskRowsPersistedEqual(currentRow, desiredRow)) {
    return fromMakeupTaskRow(currentRow);
  }

  if (!currentRow) {
    desiredRow.updated_at = createNextLessonJournalMakeupTaskUpdatedAt();
    try {
      await insertRows("makeup_tasks", [desiredRow]);
    } catch (error) {
      currentRow = await readMakeupTaskRow(makeupTaskId);
      if (currentRow && areMakeupTaskRowsPersistedEqual(currentRow, desiredRow)) {
        return fromMakeupTaskRow(currentRow);
      }
      if (currentRow) throw createLessonJournalMakeupTaskConflict(makeupTaskId, fromMakeupTaskRow(currentRow));
      throw error;
    }
  } else {
    const expectedUpdatedAt = String(requestedTask.updatedAt ?? "").trim();
    if (!expectedUpdatedAt || currentRow.updated_at !== expectedUpdatedAt) {
      throw createLessonJournalMakeupTaskConflict(makeupTaskId, fromMakeupTaskRow(currentRow));
    }
    desiredRow.updated_at = createNextLessonJournalMakeupTaskUpdatedAt(expectedUpdatedAt);
    try {
      const updatedRows = await patchRows(
        "makeup_tasks",
        `makeup_task_id=eq.${encodeURIComponent(makeupTaskId)}&updated_at=eq.${encodeURIComponent(expectedUpdatedAt)}`,
        desiredRow
      );
      if (!updatedRows.length) {
        currentRow = await readMakeupTaskRow(makeupTaskId);
        if (currentRow && areMakeupTaskRowsPersistedEqual(currentRow, desiredRow)) {
          return fromMakeupTaskRow(currentRow);
        }
        throw createLessonJournalMakeupTaskConflict(
          makeupTaskId,
          currentRow ? fromMakeupTaskRow(currentRow) : null
        );
      }
    } catch (error) {
      if (error?.code === "LESSON_JOURNAL_MAKEUP_TASK_CONFLICT") throw error;
      currentRow = await readMakeupTaskRow(makeupTaskId);
      if (currentRow && areMakeupTaskRowsPersistedEqual(currentRow, desiredRow)) {
        return fromMakeupTaskRow(currentRow);
      }
      if (currentRow && currentRow.updated_at !== expectedUpdatedAt) {
        throw createLessonJournalMakeupTaskConflict(makeupTaskId, fromMakeupTaskRow(currentRow));
      }
      throw error;
    }
  }

  const verifiedRow = await readMakeupTaskRow(makeupTaskId);
  if (!verifiedRow || !areMakeupTaskRowsPersistedEqual(verifiedRow, desiredRow)) {
    const error = new Error(`등원보충 ${makeupTaskId} 저장 후 Supabase 재조회 값이 일치하지 않습니다.`);
    error.code = "LESSON_JOURNAL_MAKEUP_TASK_VERIFY_FAILED";
    error.statusCode = 500;
    error.appliedTask = fromMakeupTaskRow(desiredRow);
    throw error;
  }
  return fromMakeupTaskRow(verifiedRow);
}

export async function saveLessonJournalMakeupTasks(makeupTasks = [], { auditId = "" } = {}) {
  if (!Array.isArray(makeupTasks)) {
    const error = new Error("등원보충 저장 목록 형식이 올바르지 않습니다.");
    error.code = "LESSON_JOURNAL_MAKEUP_TASK_INVALID";
    error.statusCode = 400;
    throw error;
  }
  const taskIds = makeupTasks.map((task) => String(task?.makeupTaskId ?? "").trim());
  if (new Set(taskIds).size !== taskIds.length) {
    const error = new Error("같은 등원보충 요청 ID가 저장 목록에 중복되었습니다.");
    error.code = "LESSON_JOURNAL_MAKEUP_TASK_INVALID";
    error.statusCode = 400;
    throw error;
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { auditId, source: fallbackSource, makeupTasks, verified: false };
  }

  const persistedTasks = [];
  try {
    for (const task of makeupTasks) {
      persistedTasks.push(await persistLessonJournalMakeupTask(task));
    }
  } catch (error) {
    error.audit = {
      auditId,
      persistedMakeupTaskIds: persistedTasks.map((task) => task.makeupTaskId)
    };
    throw error;
  }
  return {
    auditId,
    makeupTasks: persistedTasks,
    source: databaseSource,
    verified: persistedTasks.length === makeupTasks.length
  };
}

function createSupplementScheduleConflict(message, details = {}) {
  const error = new Error(message);
  Object.assign(error, details, { code: "SUPPLEMENT_SCHEDULE_CONFLICT", statusCode: 409 });
  return error;
}

async function persistSupplementScheduleLessonChange(change = {}) {
  const after = change.after ?? null;
  const before = change.before ?? null;
  const lessonId = String(after?.lessonId ?? "").trim();
  if (!lessonId) throw createSupplementScheduleConflict("저장할 보충 수업일지 ID가 없습니다.");
  let current = await getLessonForRosterSave(lessonId);
  if (current && areLessonJournalHistoryLessonsEqual(after, current)) {
    return { beforeLesson: before, lesson: current, mutated: false, operation: "unchanged" };
  }

  if (!before) {
    if (current) {
      throw createSupplementScheduleConflict("같은 ID의 수업일지가 이미 다른 내용으로 존재합니다.", {
        currentLesson: current,
        lessonId
      });
    }
    const nextUpdatedAt = createNextRosterUpdatedAt();
    let savedRows;
    try {
      savedRows = await insertRows("lessons", [{ ...toLessonRow(after), updated_at: nextUpdatedAt }]);
    } catch (error) {
      current = await getLessonForRosterSave(lessonId);
      if (current && areLessonJournalHistoryLessonsEqual(after, current)) {
        return { beforeLesson: null, lesson: current, mutated: true, operation: "create" };
      }
      if (current) {
        throw createSupplementScheduleConflict("보충 수업일지 신규 저장이 다른 화면과 충돌했습니다.", {
          cause: error,
          currentLesson: current,
          lessonId
        });
      }
      throw error;
    }
    const verified = await getLessonForRosterSave(lessonId);
    if (
      savedRows.length !== 1 ||
      !verified ||
      !areLessonJournalHistoryLessonsEqual(after, verified) ||
      !areLessonJournalHistoryTimestampsEqual(nextUpdatedAt, verified.updatedAt)
    ) {
      const error = new Error("보충 수업일지 저장 후 Supabase 재조회가 일치하지 않습니다.");
      error.code = "SUPPLEMENT_SCHEDULE_VERIFY_FAILED";
      error.appliedResult = {
        beforeLesson: null,
        lesson: { ...after, updatedAt: nextUpdatedAt },
        mutated: true,
        operation: "create"
      };
      throw error;
    }
    return { beforeLesson: null, lesson: verified, mutated: true, operation: "create" };
  }

  if (
    !current ||
    !before.updatedAt ||
    !areLessonJournalHistoryTimestampsEqual(current.updatedAt, before.updatedAt) ||
    !areLessonJournalHistoryLessonsEqual(before, current)
  ) {
    throw createSupplementScheduleConflict("보충 수업일지가 다른 화면에서 먼저 변경되었습니다.", {
      currentLesson: current,
      lessonId
    });
  }
  const nextUpdatedAt = createNextRosterUpdatedAt(current.updatedAt);
  let savedRows;
  try {
    savedRows = await patchRows(
      "lessons",
      createLessonRosterVersionFilter(lessonId, current.updatedAt),
      { ...toLessonRow(after), updated_at: nextUpdatedAt }
    );
  } catch (error) {
    const recovered = await getLessonForRosterSave(lessonId);
    if (recovered && areLessonJournalHistoryLessonsEqual(after, recovered)) {
      return { beforeLesson: current, lesson: recovered, mutated: true, operation: "update" };
    }
    if (recovered && !areLessonJournalHistoryTimestampsEqual(current.updatedAt, recovered.updatedAt)) {
      throw createSupplementScheduleConflict("보충 수업일지 저장 응답 확인 중 더 최신 변경을 발견했습니다.", {
        cause: error,
        currentLesson: recovered,
        lessonId
      });
    }
    throw error;
  }
  if (savedRows.length !== 1) {
    const recovered = await getLessonForRosterSave(lessonId);
    if (recovered && areLessonJournalHistoryLessonsEqual(after, recovered)) {
      return { beforeLesson: current, lesson: recovered, mutated: false, operation: "unchanged" };
    }
    throw createSupplementScheduleConflict("보충 수업일지 저장 직전에 서버 버전이 변경되었습니다.", {
      currentLesson: recovered,
      lessonId
    });
  }
  const verified = await getLessonForRosterSave(lessonId);
  if (
    !verified ||
    !areLessonJournalHistoryLessonsEqual(after, verified) ||
    !areLessonJournalHistoryTimestampsEqual(nextUpdatedAt, verified.updatedAt)
  ) {
    const error = new Error("보충 수업일지 변경 후 Supabase 재조회가 일치하지 않습니다.");
    error.code = "SUPPLEMENT_SCHEDULE_VERIFY_FAILED";
    error.appliedResult = {
      beforeLesson: current,
      lesson: { ...after, updatedAt: nextUpdatedAt },
      mutated: true,
      operation: "update"
    };
    throw error;
  }
  return { beforeLesson: current, lesson: verified, mutated: true, operation: "update" };
}

async function persistSupplementScheduleTaskChange(change = {}) {
  const after = change.after ?? null;
  const before = change.before ?? null;
  const taskId = String(after?.makeupTaskId ?? "").trim();
  if (!taskId) throw createSupplementScheduleConflict("저장할 보충관리 ID가 없습니다.");
  const currentRow = await readMakeupTaskRow(taskId);
  const current = currentRow ? fromMakeupTaskRow(currentRow) : null;
  if (current && areSupplementScheduleTasksEqual(after, current)) {
    return { beforeTask: before, makeupTask: current, mutated: false, operation: "unchanged" };
  }
  if (!before && current) {
    throw createSupplementScheduleConflict("같은 ID의 보충 항목이 이미 다른 내용으로 존재합니다.", {
      currentTask: current,
      taskId
    });
  }
  if (before && (
    !current ||
    !before.updatedAt ||
    !areLessonJournalHistoryTimestampsEqual(current.updatedAt, before.updatedAt) ||
    !areSupplementScheduleTasksEqual(before, current)
  )) {
    throw createSupplementScheduleConflict("보충 항목이 다른 화면에서 먼저 변경되었습니다.", {
      currentTask: current,
      taskId
    });
  }
  try {
    const makeupTask = await persistLessonJournalMakeupTask(after);
    return {
      beforeTask: before,
      makeupTask,
      mutated: true,
      operation: before ? "update" : "create"
    };
  } catch (error) {
    if (error.appliedTask) {
      error.appliedResult = {
        beforeTask: before,
        makeupTask: error.appliedTask,
        mutated: true,
        operation: before ? "update" : "create"
      };
    }
    throw error;
  }
}

async function rollbackSupplementScheduleLesson(entry) {
  if (!entry?.mutated) return { lessonId: entry?.lesson?.lessonId || "", verified: true };
  const lessonId = entry.lesson.lessonId;
  if (entry.operation === "create") {
    const rows = await deleteRows("lessons", createLessonRosterVersionFilter(lessonId, entry.lesson.updatedAt));
    return { lessonId, verified: rows.length === 1 && !(await getLessonForRosterSave(lessonId)) };
  }
  const rows = await patchRows(
    "lessons",
    createLessonRosterVersionFilter(lessonId, entry.lesson.updatedAt),
    { ...toLessonRow(entry.beforeLesson), updated_at: entry.beforeLesson.updatedAt }
  );
  const restored = await getLessonForRosterSave(lessonId);
  return {
    lessonId,
    verified: rows.length === 1 &&
      areLessonJournalHistoryLessonsEqual(entry.beforeLesson, restored ?? {}) &&
      areLessonJournalHistoryTimestampsEqual(entry.beforeLesson.updatedAt, restored?.updatedAt)
  };
}

async function rollbackSupplementScheduleTask(entry) {
  if (!entry?.mutated) return { makeupTaskId: entry?.makeupTask?.makeupTaskId || "", verified: true };
  const makeupTaskId = entry.makeupTask.makeupTaskId;
  if (entry.operation === "create") {
    const rows = await deleteRows(
      "makeup_tasks",
      `makeup_task_id=eq.${encodeURIComponent(makeupTaskId)}&updated_at=eq.${encodeURIComponent(entry.makeupTask.updatedAt)}`
    );
    return { makeupTaskId, verified: rows.length === 1 && !(await readMakeupTaskRow(makeupTaskId)) };
  }
  const rows = await patchRows(
    "makeup_tasks",
    `makeup_task_id=eq.${encodeURIComponent(makeupTaskId)}&updated_at=eq.${encodeURIComponent(entry.makeupTask.updatedAt)}`,
    { ...toMakeupTaskRow(entry.beforeTask), updated_at: entry.beforeTask.updatedAt }
  );
  const restoredRow = await readMakeupTaskRow(makeupTaskId);
  const restored = restoredRow ? fromMakeupTaskRow(restoredRow) : null;
  return {
    makeupTaskId,
    verified: rows.length === 1 &&
      areSupplementScheduleTasksEqual(entry.beforeTask, restored ?? {}) &&
      areLessonJournalHistoryTimestampsEqual(entry.beforeTask.updatedAt, restored?.updatedAt)
  };
}

export async function saveSupplementSchedulePlan({
  auditId = "",
  lessonChange = {},
  taskChange = {}
} = {}) {
  const normalizedAuditId = String(auditId || "").trim();
  if (!normalizedAuditId) {
    const error = new Error("보충 일정 저장 audit ID가 필요합니다.");
    error.code = "SUPPLEMENT_SCHEDULE_INVALID";
    error.statusCode = 400;
    throw error;
  }
  try {
    createSupplementScheduleSavePlan({
      afterLesson: lessonChange.after,
      afterTask: taskChange.after,
      beforeLesson: lessonChange.before,
      beforeTask: taskChange.before
    });
  } catch (error) {
    error.code = "SUPPLEMENT_SCHEDULE_INVALID";
    error.statusCode = 400;
    throw error;
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return {
      auditId: normalizedAuditId,
      lesson: lessonChange.after ?? null,
      makeupTask: taskChange.after ?? null,
      source: fallbackSource,
      verified: false
    };
  }

  let appliedLesson = null;
  let appliedTask = null;
  let failedStage = "lesson";
  try {
    try {
      appliedLesson = await persistSupplementScheduleLessonChange(lessonChange);
    } catch (error) {
      appliedLesson = error.appliedResult ?? null;
      throw error;
    }
    failedStage = "makeupTask";
    try {
      appliedTask = await persistSupplementScheduleTaskChange(taskChange);
    } catch (error) {
      appliedTask = error.appliedResult ?? null;
      throw error;
    }
    return {
      auditId: normalizedAuditId,
      lesson: appliedLesson.lesson,
      makeupTask: appliedTask.makeupTask,
      source: databaseSource,
      verified: true
    };
  } catch (error) {
    const rollbackResults = [];
    const rollbackErrors = [];
    for (const [kind, rollback] of [
      ["makeupTask", () => rollbackSupplementScheduleTask(appliedTask)],
      ["lesson", () => rollbackSupplementScheduleLesson(appliedLesson)]
    ]) {
      try {
        const result = await rollback();
        if (result) rollbackResults.push({ kind, ...result });
      } catch (rollbackError) {
        rollbackErrors.push({ kind, message: rollbackError.message });
      }
    }
    const rollbackVerified = rollbackErrors.length === 0 && rollbackResults.every((result) => result.verified);
    const originalCode = error.code;
    error.code = rollbackVerified
      ? originalCode || "SUPPLEMENT_SCHEDULE_SAVE_FAILED"
      : "SUPPLEMENT_SCHEDULE_PARTIAL_FAILURE";
    error.statusCode = rollbackVerified && error.statusCode === 409 ? 409 : 500;
    error.audit = {
      auditId: normalizedAuditId,
      failedStage,
      rollback: { errors: rollbackErrors, results: rollbackResults, verified: rollbackVerified }
    };
    throw error;
  }
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

export async function deleteExamPrepRow(examPrepId, { auditId = "" } = {}) {
  if (!examPrepId) throw new Error("삭제할 시험정보 ID가 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return {
      source: fallbackSource,
      deletedExamPrepRowIds: [examPrepId],
      audit: {
        auditId,
        operation: "delete_exam_prep_row",
        targetExamPrepId: examPrepId,
        stage: "fallback",
        beforeRowIds: [],
        afterRowIds: [],
        deletedRowIds: [examPrepId],
        rollback: { attempted: false, verified: true }
      }
    };
  }

  const result = await deleteExamPrepRowWithAudit({
    auditId,
    examPrepId,
    listRows: () => listRows("exam_prep_rows", "select=*", { requireServiceRole: true }),
    deleteTargetRow: (targetId) => deleteRows(
      "exam_prep_rows",
      `exam_prep_id=eq.${encodeURIComponent(targetId)}`
    ),
    restoreRows: (rows) => upsertRows(
      "exam_prep_rows",
      rows,
      { onConflict: "exam_prep_id" }
    )
  });
  return { source: databaseSource, ...result };
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

export async function upsertExamPrepRow(row, options = {}) {
  const result = await upsertExamPrepRows([row], options);
  const conflict = result.conflicts?.[0];
  if (conflict) {
    const error = new Error(conflict.message);
    error.code = conflict.code;
    error.statusCode = 409;
    throw error;
  }
  const failure = result.failures?.[0];
  if (failure) throw new Error(failure.message);
  return {
    source: result.source,
    verified: result.verified,
    examPrepRow: result.examPrepRows?.[0] ?? row
  };
}

export async function upsertExamPrepRows(rows, { allowRestore = false } = {}) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return {
      conflicts: [],
      examPrepRows: [],
      failures: [],
      source: isSupabaseConfigured() ? databaseSource : fallbackSource,
      verified: true
    };
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return {
      conflicts: [],
      examPrepRows: [],
      failures: rows.map((row) => ({
        code: "EXAM_PREP_ROW_NOT_PERSISTED",
        examPrepId: row?.examPrepId ?? "",
        message: "Supabase가 연결되지 않아 시험정보 저장을 확인하지 못했습니다."
      })),
      source: fallbackSource,
      verified: false
    };
  }

  const requestedRows = [...new Map(
    rows.filter((row) => row?.examPrepId).map((row) => [row.examPrepId, row])
  ).values()];
  const existingRows = await getExistingExamPrepRowMap(requestedRows.map((row) => row.examPrepId));
  const conflicts = [];
  const failures = [];
  const persistedIntents = [];

  for (const row of requestedRows) {
    const existingRow = existingRows.get(row.examPrepId) ?? null;
    if (existingRow && (!row.updatedAt || row.updatedAt !== existingRow.updatedAt)) {
      conflicts.push(createExamPrepRowConflict(row.examPrepId, existingRow));
      continue;
    }
    if (!existingRow && row.updatedAt && !allowRestore) {
      conflicts.push(createExamPrepRowConflict(row.examPrepId, null, "deleted"));
      continue;
    }

    const safeRow = mergeExamPrepScheduleFields(row, existingRow);
    const dbRow = toExamPrepRow(safeRow);
    dbRow.updated_at = createNextExamPrepRowUpdatedAt(existingRow?.updatedAt);
    try {
      let savedRows;
      if (existingRow) {
        savedRows = await patchRows(
          "exam_prep_rows",
          createExamPrepRowVersionFilter(row.examPrepId, existingRow.updatedAt),
          dbRow
        );
        if (!savedRows.length) {
          conflicts.push(createExamPrepRowConflict(row.examPrepId, existingRow));
          continue;
        }
      } else {
        try {
          savedRows = await insertRows("exam_prep_rows", [dbRow]);
        } catch (error) {
          if (isExamPrepRowInsertConflict(error)) {
            const latestRows = await getExistingExamPrepRowMap([row.examPrepId]);
            conflicts.push(createExamPrepRowConflict(row.examPrepId, latestRows.get(row.examPrepId) ?? null));
            continue;
          }
          throw error;
        }
      }
      persistedIntents.push({ requestedRow: safeRow, updatedAt: dbRow.updated_at });
    } catch (error) {
      failures.push({
        code: "EXAM_PREP_ROW_SAVE_FAILED",
        examPrepId: row.examPrepId,
        message: error.message || "시험정보 저장에 실패했습니다."
      });
    }
  }

  const verifiedRows = await getExistingExamPrepRowMap(
    persistedIntents.map(({ requestedRow }) => requestedRow.examPrepId)
  );
  const examPrepRows = [];
  for (const intent of persistedIntents) {
    const examPrepId = intent.requestedRow.examPrepId;
    const verifiedRow = verifiedRows.get(examPrepId);
    if (
      !verifiedRow ||
      !areExamPrepRowsPersistedEqual(intent.requestedRow, verifiedRow) ||
      !areExamPrepRowTimestampsEqual(intent.updatedAt, verifiedRow.updatedAt)
    ) {
      failures.push({
        code: "EXAM_PREP_ROW_VERIFICATION_FAILED",
        examPrepId,
        message: `시험정보 ${examPrepId}의 Supabase 저장값을 재조회로 확인하지 못했습니다.`
      });
      continue;
    }
    examPrepRows.push(verifiedRow);
  }

  return {
    conflicts,
    examPrepRows,
    failures,
    source: databaseSource,
    verified: examPrepRows.length === requestedRows.length && conflicts.length === 0 && failures.length === 0
  };
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

async function getSchoolEvent(eventId) {
  const rows = await listRows(
    "school_events",
    `select=*&school_event_id=eq.${encodeURIComponent(eventId)}&limit=1`,
    { requireServiceRole: true }
  );
  return rows[0] ? fromSchoolEventRow(rows[0]) : null;
}

function throwSchoolEventConflict(eventId, currentSchoolEvent, reason = "updated") {
  const conflict = createSchoolEventConflict(eventId, currentSchoolEvent, reason);
  const error = new Error(conflict.message);
  Object.assign(error, conflict, { statusCode: 409 });
  throw error;
}

async function verifySchoolEventSave(event, expectedUpdatedAt) {
  const verifiedSchoolEvent = await getSchoolEvent(event.eventId);
  if (
    !verifiedSchoolEvent ||
    !areSchoolEventsPersistedEqual(event, verifiedSchoolEvent) ||
    !areSchoolEventTimestampsEqual(expectedUpdatedAt, verifiedSchoolEvent.updatedAt)
  ) {
    const error = new Error(`학사일정 ${event.eventId}의 Supabase 저장값을 재조회로 확인하지 못했습니다.`);
    error.code = "SCHOOL_EVENT_VERIFICATION_FAILED";
    throw error;
  }
  return verifiedSchoolEvent;
}

export async function upsertSchoolEvent(event) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, schoolEvent: event, verified: false };
  }

  const eventId = event?.eventId ?? event?.schoolEventId;
  if (!eventId) throw new Error("저장할 학사일정 ID가 필요합니다.");
  const requestedEvent = { ...event, eventId };
  const currentSchoolEvent = await getSchoolEvent(eventId);

  if (!currentSchoolEvent) {
    if (requestedEvent.updatedAt) throwSchoolEventConflict(eventId, null, "deleted");
    const dbRow = toSchoolEventRow(requestedEvent);
    dbRow.updated_at = createNextSchoolEventUpdatedAt();
    try {
      await insertRows("school_events", [dbRow]);
    } catch (error) {
      if (isSchoolEventInsertConflict(error)) {
        const concurrentSchoolEvent = await getSchoolEvent(eventId);
        if (concurrentSchoolEvent && areSchoolEventsPersistedEqual(requestedEvent, concurrentSchoolEvent)) {
          return { source: databaseSource, schoolEvent: concurrentSchoolEvent, verified: true };
        }
        throwSchoolEventConflict(eventId, concurrentSchoolEvent, "duplicate");
      }
      throw error;
    }
    const verifiedSchoolEvent = await verifySchoolEventSave(requestedEvent, dbRow.updated_at);
    return { source: databaseSource, schoolEvent: verifiedSchoolEvent, verified: true };
  }

  if (areSchoolEventsPersistedEqual(requestedEvent, currentSchoolEvent)) {
    return { source: databaseSource, schoolEvent: currentSchoolEvent, verified: true };
  }
  if (!requestedEvent.updatedAt) throwSchoolEventConflict(eventId, currentSchoolEvent, "duplicate");
  if (!areSchoolEventTimestampsEqual(currentSchoolEvent.updatedAt, requestedEvent.updatedAt)) {
    throwSchoolEventConflict(eventId, currentSchoolEvent);
  }

  const dbRow = toSchoolEventRow(requestedEvent);
  dbRow.updated_at = createNextSchoolEventUpdatedAt(currentSchoolEvent.updatedAt);
  const savedRows = await patchRows(
    "school_events",
    createSchoolEventVersionFilter(eventId, currentSchoolEvent.updatedAt),
    dbRow
  );
  if (!savedRows.length) throwSchoolEventConflict(eventId, await getSchoolEvent(eventId));
  const verifiedSchoolEvent = await verifySchoolEventSave(requestedEvent, dbRow.updated_at);
  return { source: databaseSource, schoolEvent: verifiedSchoolEvent, verified: true };
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

export async function deleteSchoolEvent(eventId, { expectedUpdatedAt } = {}) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, schoolEventId: eventId, verified: false };
  }

  if (!eventId) throw new Error("삭제할 학사일정 ID가 필요합니다.");
  if (!expectedUpdatedAt) throw new Error("삭제할 학사일정의 서버 버전이 필요합니다.");
  const currentSchoolEvent = await getSchoolEvent(eventId);
  if (!currentSchoolEvent) throwSchoolEventConflict(eventId, null, "deleted");
  if (!areSchoolEventTimestampsEqual(currentSchoolEvent.updatedAt, expectedUpdatedAt)) {
    throwSchoolEventConflict(eventId, currentSchoolEvent);
  }

  const deletedRows = await deleteRows(
    "school_events",
    createSchoolEventVersionFilter(eventId, currentSchoolEvent.updatedAt)
  );
  if (deletedRows.length !== 1) throwSchoolEventConflict(eventId, await getSchoolEvent(eventId));
  if (await getSchoolEvent(eventId)) {
    const error = new Error(`학사일정 ${eventId} 삭제를 Supabase 재조회로 확인하지 못했습니다.`);
    error.code = "SCHOOL_EVENT_VERIFICATION_FAILED";
    throw error;
  }
  return { source: databaseSource, schoolEventId: eventId, verified: true };
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

export async function upsertAppState(states, { expectedUpdatedAt = null } = {}) {
  if (!states || typeof states !== "object" || Array.isArray(states)) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, states: {} };
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, states };
  }

  for (const key of hiddenAppStateKeys) {
    await deleteRows("app_state", `state_key=eq.${encodeURIComponent(key)}`);
  }
  const entries = Object.entries(states)
    .filter(([key]) => !hiddenAppStateKeys.has(key))
    .map(([key, value]) => [key, toAppStateRow(key, value)]);
  if (entries.length === 0) return { source: databaseSource, states: {} };

  const savedRows = [];
  for (const [key, row] of entries) {
    const hasExpectedVersion = Boolean(
      expectedUpdatedAt && Object.prototype.hasOwnProperty.call(expectedUpdatedAt, key)
    );
    if (!hasExpectedVersion) {
      const [savedRow] = await upsertRows("app_state", [row]);
      if (savedRow) savedRows.push(savedRow);
      continue;
    }

    const expectedVersion = expectedUpdatedAt[key];
    if (expectedVersion === null) {
      try {
        const [savedRow] = await insertRows("app_state", [row]);
        if (savedRow) savedRows.push(savedRow);
      } catch (error) {
        if (isAppStateInsertConflict(error)) throw createAppStateConflictError(key);
        throw error;
      }
      continue;
    }

    const patchedRows = await patchRows(
      "app_state",
      createAppStateVersionFilter(key, expectedVersion),
      row
    );
    if (!patchedRows.length) throw createAppStateConflictError(key);
    savedRows.push(...patchedRows);
  }
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

async function getResourceMaterial(materialId) {
  const rows = await listRows(
    "resource_materials",
    `select=*&resource_material_id=eq.${encodeURIComponent(materialId)}&limit=1`,
    { requireServiceRole: true }
  );
  return rows[0] ? fromResourceMaterialRow(rows[0]) : null;
}

function throwResourceMaterialConflict(materialId, currentMaterial, reason = "updated") {
  const conflict = createResourceMaterialConflict(materialId, currentMaterial, reason);
  const error = new Error(conflict.message);
  Object.assign(error, conflict, { statusCode: 409 });
  throw error;
}

async function verifyResourceMaterialSave(material, expectedUpdatedAt) {
  const verifiedMaterial = await getResourceMaterial(material.materialId);
  if (
    !verifiedMaterial ||
    !areResourceMaterialsPersistedEqual(material, verifiedMaterial) ||
    !areResourceMaterialTimestampsEqual(expectedUpdatedAt, verifiedMaterial.updatedAt)
  ) {
    const error = new Error(`자료 ${material.materialId}의 Supabase 저장값을 재조회로 확인하지 못했습니다.`);
    error.code = "RESOURCE_MATERIAL_VERIFICATION_FAILED";
    throw error;
  }
  return verifiedMaterial;
}

async function convergeResourceMaterialDraft(requestedMaterial, currentMaterial) {
  const materialId = requestedMaterial.materialId;
  if (currentMaterial && areResourceMaterialsPersistedEqual(requestedMaterial, currentMaterial)) {
    return { source: databaseSource, material: currentMaterial, verified: true };
  }
  if (!currentMaterial || !isSameResourceMaterialDraft(requestedMaterial, currentMaterial)) {
    throwResourceMaterialConflict(materialId, currentMaterial, "duplicate");
  }
  const updatedRow = toResourceMaterialRow(requestedMaterial);
  updatedRow.updated_at = createNextResourceMaterialUpdatedAt(currentMaterial.updatedAt);
  const patchedRows = await patchRows(
    "resource_materials",
    createResourceMaterialVersionFilter(materialId, currentMaterial.updatedAt),
    updatedRow
  );
  if (patchedRows.length !== 1) {
    throwResourceMaterialConflict(materialId, await getResourceMaterial(materialId));
  }
  const verifiedMaterial = await verifyResourceMaterialSave(requestedMaterial, updatedRow.updated_at);
  return { recoveredDraft: true, source: databaseSource, material: verifiedMaterial, verified: true };
}

export async function upsertResourceMaterial(material) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, material, verified: false };
  }

  const materialId = material?.materialId ?? material?.resourceMaterialId;
  if (!materialId) throw new Error("저장할 자료 ID가 필요합니다.");
  const requestedMaterial = { ...material, materialId, resourceMaterialId: materialId };
  if (!requestedMaterial.createdAt) throw new Error("자료 초안의 생성 토큰이 필요합니다.");
  const currentMaterial = await getResourceMaterial(materialId);
  if (currentMaterial) {
    return convergeResourceMaterialDraft(requestedMaterial, currentMaterial);
  }

  const row = toResourceMaterialRow(requestedMaterial);
  row.updated_at = createNextResourceMaterialUpdatedAt();
  try {
    await insertRows("resource_materials", [row]);
  } catch (error) {
    if (isResourceMaterialInsertConflict(error)) {
      return convergeResourceMaterialDraft(requestedMaterial, await getResourceMaterial(materialId));
    }
    throw error;
  }
  const verifiedMaterial = await verifyResourceMaterialSave(requestedMaterial, row.updated_at);
  return { source: databaseSource, material: verifiedMaterial, verified: true };
}

export async function deleteResourceMaterial(materialId, { expectedUpdatedAt } = {}) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, materialId, verified: false };
  }

  if (!materialId) throw new Error("삭제할 자료 ID가 필요합니다.");
  if (!expectedUpdatedAt) throw new Error("삭제할 자료의 서버 버전이 필요합니다.");
  const currentMaterial = await getResourceMaterial(materialId);
  if (!currentMaterial) {
    return { source: databaseSource, materialId, verified: true };
  }
  if (!areResourceMaterialTimestampsEqual(currentMaterial.updatedAt, expectedUpdatedAt)) {
    throwResourceMaterialConflict(materialId, currentMaterial);
  }
  const deletedRows = await deleteRows(
    "resource_materials",
    createResourceMaterialVersionFilter(materialId, currentMaterial.updatedAt)
  );
  if (deletedRows.length !== 1) {
    throwResourceMaterialConflict(materialId, await getResourceMaterial(materialId));
  }
  if (await getResourceMaterial(materialId)) {
    const error = new Error(`자료 ${materialId} 삭제를 Supabase 재조회로 확인하지 못했습니다.`);
    error.code = "RESOURCE_MATERIAL_VERIFICATION_FAILED";
    throw error;
  }
  return { source: databaseSource, materialId, verified: true };
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
  const fields = ["homeworkFollowupMethod", "homeworkFollowupText", "homeworkFollowupSourceHomeworkId", "preparationMemo"];
  return fields.reduce((record, field) => (
    Object.prototype.hasOwnProperty.call(nextRecord, field)
      ? record
      : { ...record, [field]: existingRecord[field] ?? "" }
  ), nextRecord);
}

const lessonRecordRequeryVerificationFields = [
  "homeworkFollowupMethod",
  "homeworkFollowupText",
  "homeworkFollowupSourceHomeworkId",
  "preparationMemo",
  "prepStudentVisible",
  "prepParentVisible",
  "prepMemoCheckedAt",
  "prepMemoCheckedSourceDate",
  "prepMemoCheckedSourceRecordId"
];

function normalizeLessonRecordVerificationValue(field, value) {
  if (["prepStudentVisible", "prepParentVisible"].includes(field)) {
    return Boolean(value) ? "true" : "false";
  }
  if (field === "prepMemoCheckedAt" && value) {
    const timestamp = Date.parse(value);
    if (Number.isFinite(timestamp)) return new Date(timestamp).toISOString();
  }
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
  assertVerifiedLessonStudentRecord(expectedRecord, savedRecord);
  return savedRecord;
}

function assertVerifiedLessonStudentRecord(expectedRecord = {}, savedRecord = {}) {
  const fields = lessonRecordRequeryVerificationFields.filter((field) => (
    Object.prototype.hasOwnProperty.call(expectedRecord, field)
  ));
  const mismatch = fields.find((field) => (
    normalizeLessonRecordVerificationValue(field, savedRecord[field]) !==
    normalizeLessonRecordVerificationValue(field, expectedRecord[field])
  ));
  if (mismatch) {
    throw new Error(`수업기록 저장 후 Supabase 재조회 값이 일치하지 않습니다: ${mismatch}`);
  }
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

export async function upsertLessonStudentRecords(records = []) {
  const requestedRecords = Array.isArray(records)
    ? records.filter((record) => record?.lessonId && record?.studentId)
    : [];
  if (requestedRecords.length === 0) {
    return { source: isSupabaseConfigured() ? databaseSource : fallbackSource, records: [] };
  }
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, records: requestedRecords };
  }

  const lessonIds = [...new Set(requestedRecords.map((record) => record.lessonId))];
  const lessonIdFilter = lessonIds.map((lessonId) => encodeURIComponent(lessonId)).join(",");
  const [lessonRows, existingRows] = await Promise.all([
    listRows(
      "lessons",
      `select=lesson_id,student_ids&lesson_id=in.(${lessonIdFilter})`,
      { requireServiceRole: true }
    ),
    listRows(
      "lesson_student_records",
      `select=*&lesson_id=in.(${lessonIdFilter})`,
      { requireServiceRole: true }
    )
  ]);
  const lessonStudentIds = new Map(lessonRows.map((row) => [
    row.lesson_id,
    new Set(Array.isArray(row.student_ids) ? row.student_ids : [])
  ]));
  const existingByIdentity = new Map(existingRows.map((row) => [
    `${row.lesson_id}::${row.student_id}`,
    fromLessonRecordRow(row)
  ]));

  const recordsToSave = requestedRecords.map((record) => {
    const rosterStudentIds = lessonStudentIds.get(record.lessonId);
    if (!rosterStudentIds) throw new Error(`수업기록 저장 대상 수업을 찾지 못했습니다: ${record.lessonId}`);
    if (!rosterStudentIds.has(record.studentId)) {
      throw new Error("수업 명단에 없는 학생의 수업일지는 저장할 수 없습니다.");
    }
    const existingRecord = existingByIdentity.get(`${record.lessonId}::${record.studentId}`) ?? null;
    const stableRecord = existingRecord
      ? { ...record, lessonStudentRecordId: existingRecord.lessonStudentRecordId }
      : record;
    const attendanceStableRecord = mergeExistingAttendanceForNonAttendanceSave(stableRecord, existingRecord);
    return mergeExistingHomeworkFollowupForSave(attendanceStableRecord, existingRecord);
  });

  await upsertRows(
    "lesson_student_records",
    recordsToSave.map(toLessonRecordRow),
    { onConflict: "lesson_id,student_id" }
  );
  const verifiedRows = await listRows(
    "lesson_student_records",
    `select=*&lesson_id=in.(${lessonIdFilter})`,
    { requireServiceRole: true }
  );
  const verifiedByIdentity = new Map(verifiedRows.map((row) => [
    `${row.lesson_id}::${row.student_id}`,
    fromLessonRecordRow(row)
  ]));
  const verifiedRecords = recordsToSave.map((record) => {
    const verifiedRecord = verifiedByIdentity.get(`${record.lessonId}::${record.studentId}`);
    if (!verifiedRecord) {
      throw new Error(`수업기록 저장 후 Supabase 재조회에서 행을 찾지 못했습니다: ${record.lessonStudentRecordId}`);
    }
    assertVerifiedLessonStudentRecord(record, verifiedRecord);
    return verifiedRecord;
  });
  return { source: databaseSource, records: verifiedRecords };
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
  const homeworkIds = [...new Set(homeworks.map((homework) => homework.homeworkId).filter(Boolean))];
  const homeworkIdFilter = homeworkIds.map((homeworkId) => encodeURIComponent(homeworkId)).join(",");
  const verifiedRows = homeworkIdFilter
    ? await listRows(
        "homeworks",
        `select=*&homework_id=in.(${homeworkIdFilter})`,
        { requireServiceRole: true }
      )
    : rows;
  return { source: databaseSource, homeworks: verifiedRows.map(fromHomeworkRow) };
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
