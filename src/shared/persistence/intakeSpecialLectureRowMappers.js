// Pure DB row/domain projections. Keep Tally, source reads, writes, and provider effects outside this module.
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

export function toStudentIntakeApplicantRow(applicant) {
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

export function fromStudentIntakeApplicantRow(row) {
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

export function createSpecialLectureApplicationId() {
  return `special_lecture_application_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function normalizeSpecialLectureApplicationStatus(value = "received") {
  const status = compact(value || "received");
  return ["received", "confirmed", "contacted", "waiting", "canceled"].includes(status) ? status : "received";
}

export function createSpecialLectureEnrollmentId() {
  return `special_lecture_enrollment_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function normalizeSpecialLectureEnrollmentStatus(value = "active") {
  const status = compact(value || "active");
  return ["active", "canceled"].includes(status) ? status : "active";
}

export function normalizeSpecialLectureRequestedSessionPlans(value) {
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

export function toSpecialLectureApplicationRow(application) {
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

export function fromSpecialLectureApplicationRow(row) {
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

export function normalizeSpecialLectureEnrollmentSessionIds(value) {
  const source = Array.isArray(value) ? value : [];
  return [...new Set(source.map((sessionId) => compact(sessionId)).filter(Boolean))];
}

export function normalizeSpecialLectureEnrollmentSessionPlans(value) {
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

export function toSpecialLectureEnrollmentRow(enrollment) {
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

export function fromSpecialLectureEnrollmentRow(row) {
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
