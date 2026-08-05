import crypto from "node:crypto";

// Row/domain projections plus local ID generation. DB, Storage, and paid AI effects stay in the route.
export const examAnalysisSourceBucket = "exam-analysis-pipeline-sources";

function compact(value) {
  if (value === undefined) return undefined;
  return value === "" ? null : value;
}

function compactExamAnalysisSubject(value) {
  if (value === undefined) return undefined;
  const text = String(value ?? "").trim();
  if (!text || text === "기하") return null;
  return text;
}

function stableJson(value, fallback) {
  if (value === undefined || value === null) return fallback;
  return value;
}

function createId(prefix) {
  return `${prefix}_${Date.now()}_${crypto.randomBytes(6).toString("hex")}`;
}

export function toRunRow(run = {}) {
  return {
    analysis_run_id: run.analysisRunId || createId("exam_analysis_run"),
    exam_prep_id: compact(run.examPrepId),
    title: run.title || undefined,
    school_name: compact(run.schoolName),
    grade: compact(run.grade),
    subject: compactExamAnalysisSubject(run.subject),
    exam_term: compact(run.examTerm),
    exam_cycle: compact(run.examCycle),
    workflow_status: run.workflowStatus || undefined,
    question_count_status: run.questionCountStatus || undefined,
    detected_question_count: run.detectedQuestionCount ? Number(run.detectedQuestionCount) : undefined,
    detected_question_confidence: run.detectedQuestionConfidence === undefined ? undefined : Number(run.detectedQuestionConfidence),
    detected_question_evidence: stableJson(run.detectedQuestionEvidence, undefined),
    confirmed_question_count: run.confirmedQuestionCount ? Number(run.confirmedQuestionCount) : undefined,
    confirmed_by: compact(run.confirmedBy),
    confirmed_at: compact(run.confirmedAt),
    rows_locked: run.rowsLocked === undefined ? undefined : Boolean(run.rowsLocked),
    missing_question_numbers: stableJson(run.missingQuestionNumbers, undefined),
    extraction_summary: stableJson(run.extractionSummary, undefined),
    audit_summary: stableJson(run.auditSummary, undefined),
    created_by: compact(run.createdBy),
    updated_at: new Date().toISOString()
  };
}

export function fromRunRow(row = {}) {
  return {
    analysisRunId: row.analysis_run_id,
    examPrepId: row.exam_prep_id ?? "",
    title: row.title ?? "",
    schoolName: row.school_name ?? "",
    grade: row.grade ?? "",
    subject: row.subject ?? "",
    examTerm: row.exam_term ?? "",
    examCycle: row.exam_cycle ?? "",
    workflowStatus: row.workflow_status ?? "draft",
    questionCountStatus: row.question_count_status ?? "not_started",
    detectedQuestionCount: row.detected_question_count ?? null,
    detectedQuestionConfidence: row.detected_question_confidence ?? null,
    detectedQuestionEvidence: row.detected_question_evidence ?? [],
    confirmedQuestionCount: row.confirmed_question_count ?? null,
    confirmedBy: row.confirmed_by ?? "",
    confirmedAt: row.confirmed_at ?? "",
    rowsLocked: Boolean(row.rows_locked),
    missingQuestionNumbers: row.missing_question_numbers ?? [],
    extractionSummary: row.extraction_summary ?? {},
    auditSummary: row.audit_summary ?? {},
    createdBy: row.created_by ?? "",
    createdAt: row.created_at ?? "",
    updatedAt: row.updated_at ?? ""
  };
}

export function toSourceRow(source = {}) {
  return {
    source_id: source.sourceId || createId("exam_analysis_source"),
    analysis_run_id: source.analysisRunId,
    source_order: Number(source.sourceOrder || 1),
    source_type: source.sourceType || "pdf",
    bucket_id: source.bucketId || examAnalysisSourceBucket,
    storage_path: compact(source.storagePath),
    original_file_name: compact(source.originalFileName || source.fileName),
    mime_type: compact(source.mimeType || source.fileType),
    size_bytes: source.sizeBytes === undefined ? undefined : Number(source.sizeBytes),
    page_count: source.pageCount ? Number(source.pageCount) : undefined,
    extraction_status: source.extractionStatus || "uploaded",
    extracted_text: compact(source.extractedText),
    page_text_ranges: stableJson(source.pageTextRanges, undefined),
    page_image_manifest: stableJson(source.pageImageManifest, undefined),
    error: compact(source.error),
    updated_at: new Date().toISOString()
  };
}

export function toSourcePatchRow(source = {}) {
  return {
    source_id: source.sourceId,
    analysis_run_id: source.analysisRunId,
    source_order: source.sourceOrder === undefined ? undefined : Number(source.sourceOrder),
    source_type: source.sourceType,
    bucket_id: source.bucketId,
    storage_path: source.storagePath === undefined ? undefined : compact(source.storagePath),
    original_file_name: source.originalFileName === undefined && source.fileName === undefined
      ? undefined
      : compact(source.originalFileName || source.fileName),
    mime_type: source.mimeType === undefined && source.fileType === undefined ? undefined : compact(source.mimeType || source.fileType),
    size_bytes: source.sizeBytes === undefined ? undefined : Number(source.sizeBytes),
    page_count: source.pageCount === undefined ? undefined : Number(source.pageCount),
    extraction_status: source.extractionStatus,
    extracted_text: source.extractedText === undefined ? undefined : compact(source.extractedText),
    page_text_ranges: stableJson(source.pageTextRanges, undefined),
    page_image_manifest: stableJson(source.pageImageManifest, undefined),
    error: source.error === undefined ? undefined : compact(source.error),
    updated_at: new Date().toISOString()
  };
}

export function fromSourceRow(row = {}) {
  return {
    sourceId: row.source_id,
    analysisRunId: row.analysis_run_id,
    sourceOrder: row.source_order ?? 1,
    sourceType: row.source_type ?? "pdf",
    bucketId: row.bucket_id ?? examAnalysisSourceBucket,
    storagePath: row.storage_path ?? "",
    originalFileName: row.original_file_name ?? "",
    mimeType: row.mime_type ?? "",
    sizeBytes: row.size_bytes ?? null,
    pageCount: row.page_count ?? null,
    extractionStatus: row.extraction_status ?? "pending",
    extractedText: row.extracted_text ?? "",
    pageTextRanges: row.page_text_ranges ?? [],
    pageImageManifest: row.page_image_manifest ?? [],
    error: row.error ?? "",
    createdAt: row.created_at ?? "",
    updatedAt: row.updated_at ?? ""
  };
}

export function fromQuestionRow(row = {}) {
  return {
    questionRowId: row.question_row_id,
    analysisRunId: row.analysis_run_id,
    questionNumber: row.question_number,
    rowStatus: row.row_status ?? "empty",
    unitName: row.unit_name ?? "",
    mainType: row.main_type ?? "",
    subTypes: row.sub_types ?? [],
    difficulty: row.difficulty ?? "",
    sourcePage: row.source_page ?? null,
    sourceEvidence: row.source_evidence ?? {},
    aiFields: row.ai_fields ?? {},
    teacherFields: row.teacher_fields ?? {},
    finalFields: row.final_fields ?? {},
    teacherOverride: Boolean(row.teacher_override),
    manualEditCount: row.manual_edit_count ?? 0,
    aiProvider: row.ai_provider ?? "",
    aiModel: row.ai_model ?? "",
    aiFilledAt: row.ai_filled_at ?? "",
    teacherEditedAt: row.teacher_edited_at ?? "",
    confirmedAt: row.confirmed_at ?? "",
    createdAt: row.created_at ?? "",
    updatedAt: row.updated_at ?? ""
  };
}

export function fromAiJobRow(row = {}) {
  return {
    aiJobId: row.ai_job_id,
    analysisRunId: row.analysis_run_id,
    jobType: row.job_type,
    targetQuestionNumbers: row.target_question_numbers ?? [],
    status: row.status ?? "queued",
    provider: row.provider ?? "",
    model: row.model ?? "",
    requestSummary: row.request_summary ?? {},
    responseSummary: row.response_summary ?? {},
    error: row.error ?? "",
    startedAt: row.started_at ?? "",
    completedAt: row.completed_at ?? "",
    createdAt: row.created_at ?? "",
    updatedAt: row.updated_at ?? ""
  };
}

export function toEventRow(event = {}) {
  return {
    event_id: event.eventId || createId("exam_analysis_event"),
    analysis_run_id: event.analysisRunId,
    event_type: event.eventType,
    message: compact(event.message),
    payload: event.payload ?? {}
  };
}

export function fromEventRow(row = {}) {
  return {
    eventId: row.event_id,
    analysisRunId: row.analysis_run_id,
    eventType: row.event_type ?? "",
    message: row.message ?? "",
    payload: row.payload ?? {},
    createdAt: row.created_at ?? ""
  };
}
