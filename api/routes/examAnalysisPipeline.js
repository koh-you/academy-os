import crypto from "node:crypto";
import { deleteRows, isSupabaseConfigured, listRows, patchRows, upsertRows } from "../lib/supabaseRest.js";

const fallbackSource = "local_sample";
const databaseSource = "supabase";

export const examAnalysisSourceBucket = "exam-analysis-pipeline-sources";

function compact(value) {
  return value === undefined || value === "" ? null : value;
}

function stableJson(value, fallback) {
  if (value === undefined || value === null) return fallback;
  return value;
}

function createId(prefix) {
  return `${prefix}_${Date.now()}_${crypto.randomBytes(6).toString("hex")}`;
}

function toRunRow(run = {}) {
  return {
    analysis_run_id: run.analysisRunId || createId("exam_analysis_run"),
    exam_prep_id: compact(run.examPrepId),
    title: run.title || undefined,
    school_name: compact(run.schoolName),
    grade: compact(run.grade),
    subject: compact(run.subject),
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

function fromRunRow(row = {}) {
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

function toSourceRow(source = {}) {
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

function fromSourceRow(row = {}) {
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

function fromQuestionRow(row = {}) {
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

function fromAiJobRow(row = {}) {
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

function toEventRow(event = {}) {
  return {
    event_id: event.eventId || createId("exam_analysis_event"),
    analysis_run_id: event.analysisRunId,
    event_type: event.eventType,
    message: compact(event.message),
    payload: event.payload ?? {}
  };
}

function fromEventRow(row = {}) {
  return {
    eventId: row.event_id,
    analysisRunId: row.analysis_run_id,
    eventType: row.event_type ?? "",
    message: row.message ?? "",
    payload: row.payload ?? {},
    createdAt: row.created_at ?? ""
  };
}

function requireServiceRole() {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    throw new Error("시험분석 v2 저장에는 Supabase service role 설정이 필요합니다.");
  }
}

async function nextSourceOrder(analysisRunId) {
  const rows = await listRows(
    "exam_analysis_sources",
    `select=source_order&analysis_run_id=eq.${encodeURIComponent(analysisRunId)}&order=source_order.desc&limit=1`,
    { requireServiceRole: true }
  );
  return Number(rows[0]?.source_order || 0) + 1;
}

export async function listExamAnalysisRuns(filters = {}) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, analysisRuns: [] };
  }

  const query = ["select=*", "order=updated_at.desc", `limit=${Math.max(1, Math.min(200, Number(filters.limit) || 100))}`];
  if (filters.examPrepId) query.push(`exam_prep_id=eq.${encodeURIComponent(filters.examPrepId)}`);
  if (filters.workflowStatus) query.push(`workflow_status=eq.${encodeURIComponent(filters.workflowStatus)}`);
  const rows = await listRows("exam_analysis_runs", query.join("&"), { requireServiceRole: true });
  return { source: databaseSource, analysisRuns: rows.map(fromRunRow) };
}

export async function getExamAnalysisRun(analysisRunId) {
  if (!analysisRunId) throw new Error("analysisRunId가 필요합니다.");
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    return { source: fallbackSource, analysisRun: null, sources: [], questions: [], aiJobs: [], events: [] };
  }

  const encodedId = encodeURIComponent(analysisRunId);
  const [runs, sources, questions, aiJobs, events] = await Promise.all([
    listRows("exam_analysis_runs", `select=*&analysis_run_id=eq.${encodedId}&limit=1`, { requireServiceRole: true }),
    listRows("exam_analysis_sources", `select=*&analysis_run_id=eq.${encodedId}&order=source_order.asc`, { requireServiceRole: true }),
    listRows("exam_analysis_questions", `select=*&analysis_run_id=eq.${encodedId}&order=question_number.asc`, { requireServiceRole: true }),
    listRows("exam_analysis_ai_jobs", `select=*&analysis_run_id=eq.${encodedId}&order=created_at.desc`, { requireServiceRole: true }),
    listRows("exam_analysis_events", `select=*&analysis_run_id=eq.${encodedId}&order=created_at.desc&limit=100`, { requireServiceRole: true })
  ]);

  return {
    source: databaseSource,
    analysisRun: runs[0] ? fromRunRow(runs[0]) : null,
    sources: sources.map(fromSourceRow),
    questions: questions.map(fromQuestionRow),
    aiJobs: aiJobs.map(fromAiJobRow),
    events: events.map(fromEventRow)
  };
}

export async function upsertExamAnalysisRun(run = {}) {
  requireServiceRole();
  const [savedRow] = await upsertRows("exam_analysis_runs", [toRunRow(run)]);
  const analysisRun = fromRunRow(savedRow);
  if (!run.skipEvent) {
    await recordExamAnalysisEvent({
      analysisRunId: analysisRun.analysisRunId,
      eventType: "run_saved",
      message: "시험분석 작업이 저장되었습니다.",
      payload: { workflowStatus: analysisRun.workflowStatus }
    });
  }
  return { source: databaseSource, analysisRun };
}

export async function updateExamAnalysisRun(analysisRunId, patch = {}) {
  if (!analysisRunId) throw new Error("analysisRunId가 필요합니다.");
  requireServiceRole();
  const rows = await patchRows(
    "exam_analysis_runs",
    `analysis_run_id=eq.${encodeURIComponent(analysisRunId)}`,
    toRunRow({ ...patch, analysisRunId })
  );
  return { source: databaseSource, analysisRun: rows[0] ? fromRunRow(rows[0]) : null };
}

export async function deleteExamAnalysisRun(analysisRunId) {
  if (!analysisRunId) throw new Error("analysisRunId가 필요합니다.");
  requireServiceRole();
  const detail = await getExamAnalysisRun(analysisRunId);
  const deletedRows = await deleteRows(
    "exam_analysis_runs",
    `analysis_run_id=eq.${encodeURIComponent(analysisRunId)}`
  );
  return {
    source: databaseSource,
    deletedAnalysisRun: deletedRows[0] ? fromRunRow(deletedRows[0]) : detail.analysisRun,
    deletedSources: detail.sources ?? []
  };
}

export async function recordExamAnalysisEvent(event = {}) {
  if (!event.analysisRunId) throw new Error("analysisRunId가 필요합니다.");
  if (!event.eventType) throw new Error("eventType이 필요합니다.");
  requireServiceRole();
  const [savedRow] = await upsertRows("exam_analysis_events", [toEventRow(event)]);
  return { source: databaseSource, event: fromEventRow(savedRow) };
}

export async function recordExamAnalysisSourceUpload({ analysisRunId, sourceFile = {} } = {}) {
  if (!analysisRunId) throw new Error("analysisRunId가 필요합니다.");
  requireServiceRole();

  const sourceOrder = sourceFile.sourceOrder || await nextSourceOrder(analysisRunId);
  const [sourceRow] = await upsertRows("exam_analysis_sources", [
    toSourceRow({
      ...sourceFile,
      analysisRunId,
      sourceOrder,
      sourceType: "pdf",
      extractionStatus: "uploaded"
    })
  ]);

  const runRows = await patchRows(
    "exam_analysis_runs",
    `analysis_run_id=eq.${encodeURIComponent(analysisRunId)}`,
    {
      workflow_status: "source_uploaded",
      updated_at: new Date().toISOString()
    }
  );

  await recordExamAnalysisEvent({
    analysisRunId,
    eventType: "source_uploaded",
    message: "PDF 원본이 저장되었습니다.",
    payload: {
      sourceId: sourceRow.source_id,
      sourceOrder,
      originalFileName: sourceRow.original_file_name,
      sizeBytes: sourceRow.size_bytes
    }
  });

  return {
    source: databaseSource,
    analysisRun: runRows[0] ? fromRunRow(runRows[0]) : null,
    sourceFile: fromSourceRow(sourceRow)
  };
}
