import crypto from "node:crypto";
import { callRpc, deleteRows, isSupabaseConfigured, listRows, patchRows, upsertRows } from "../lib/supabaseRest.js";
import {
  areExamAnalysisPromptStudioDraftsEqual,
  getExamAnalysisPromptStudioDraftFromRun,
  normalizeExamAnalysisPromptStudioDraft
} from "../../src/domains/exams/examAnalysisPromptStudioDraft.js";

const fallbackSource = "local_sample";
const databaseSource = "supabase";

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

function toRunRow(run = {}) {
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

function toSourcePatchRow(source = {}) {
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

function normalizeQuestionBoundary(boundary = {}) {
  const questionNumber = Number(boundary.questionNumber ?? boundary.question_number);
  if (!Number.isInteger(questionNumber) || questionNumber < 1 || questionNumber > 200) return null;
  const pageStart = Number(boundary.pageStart ?? boundary.page_start ?? boundary.page ?? boundary.sourcePage);
  const pageEnd = Number(boundary.pageEnd ?? boundary.page_end ?? pageStart);
  return {
    questionNumber,
    pageStart: Number.isInteger(pageStart) && pageStart > 0 ? pageStart : null,
    pageEnd: Number.isInteger(pageEnd) && pageEnd > 0 ? pageEnd : Number.isInteger(pageStart) && pageStart > 0 ? pageStart : null,
    positionHint: String(boundary.positionHint ?? boundary.position_hint ?? "").slice(0, 120),
    startEvidence: String(boundary.startEvidence ?? boundary.start_evidence ?? "").slice(0, 300),
    endEvidence: String(boundary.endEvidence ?? boundary.end_evidence ?? "").slice(0, 300),
    needsReview: Boolean(boundary.needsReview ?? boundary.needs_review),
    warnings: Array.isArray(boundary.warnings) ? boundary.warnings.map(String).slice(0, 5) : []
  };
}

function normalizeQuestionRowFill(row = {}) {
  const questionNumber = Number(row.questionNumber ?? row.question_number);
  if (!Number.isInteger(questionNumber) || questionNumber < 1 || questionNumber > 200) return null;
  return {
    questionNumber,
    unitName: String(row.unitName ?? row.unit_name ?? "").slice(0, 120),
    mainType: String(row.mainType ?? row.main_type ?? "").slice(0, 160),
    mainTypeCode: String(row.mainTypeCode ?? row.main_type_code ?? "").slice(0, 60),
    subTypes: Array.isArray(row.subTypes ?? row.sub_types)
      ? (row.subTypes ?? row.sub_types).map(String).filter(Boolean).slice(0, 3)
      : [],
    subTypeCodes: Array.isArray(row.subTypeCodes ?? row.sub_type_codes)
      ? (row.subTypeCodes ?? row.sub_type_codes).map(String).filter(Boolean).slice(0, 3)
      : [],
    difficulty: String(row.difficulty ?? "").slice(0, 40),
    reasoningSummary: String(row.reasoningSummary ?? row.reasoning_summary ?? "").slice(0, 500),
    conceptTags: Array.isArray(row.conceptTags ?? row.concept_tags)
      ? (row.conceptTags ?? row.concept_tags).map(String).filter(Boolean).slice(0, 10)
      : [],
    confidence: row.confidence === undefined || row.confidence === null ? null : Number(row.confidence),
    needsReview: Boolean(row.needsReview ?? row.needs_review),
    warnings: Array.isArray(row.warnings) ? row.warnings.map(String).slice(0, 6) : []
  };
}

function normalizeSsenTypeMeta(value = {}) {
  if (!value || typeof value !== "object") return {};
  return {
    subject: String(value.subject ?? "").trim().slice(0, 40),
    typeCode: String(value.typeCode ?? value.type_code ?? "").trim().slice(0, 60),
    partName: String(value.partName ?? value.part_name ?? "").trim().slice(0, 120),
    unitNo: String(value.unitNo ?? value.unit_no ?? "").trim().slice(0, 20),
    unitName: String(value.unitName ?? value.unit_name ?? "").trim().slice(0, 120),
    typeNo: String(value.typeNo ?? value.type_no ?? "").trim().slice(0, 20),
    typeName: String(value.typeName ?? value.type_name ?? "").trim().slice(0, 160)
  };
}

function normalizeSsenMeta(value = {}) {
  if (!value || typeof value !== "object") return {};
  const mainType = normalizeSsenTypeMeta(value.mainType ?? value.main_type ?? {});
  const subTypes = Array.isArray(value.subTypes ?? value.sub_types)
    ? (value.subTypes ?? value.sub_types).map(normalizeSsenTypeMeta).filter((item) => item.typeCode || item.typeName).slice(0, 3)
    : [];
  return {
    source: String(value.source ?? "teacher_review").trim().slice(0, 60),
    matchStatus: String(value.matchStatus ?? value.match_status ?? "").trim().slice(0, 60),
    mainType,
    subTypes
  };
}

function normalizeQuestionTeacherReview(review = {}) {
  const questionNumber = Number(review.questionNumber ?? review.question_number);
  if (!Number.isInteger(questionNumber) || questionNumber < 1 || questionNumber > 200) return null;
  const subTypesValue = review.subTypes ?? review.sub_types ?? [];
  const subTypes = Array.isArray(subTypesValue)
    ? subTypesValue
    : String(subTypesValue || "").split(/[,，]/);
  const unitName = String(review.unitName ?? review.unit_name ?? "").trim().slice(0, 120);
  const mainType = String(review.mainType ?? review.main_type ?? "").trim().slice(0, 160);
  return {
    questionNumber,
    unitName,
    mainType,
    subTypes: subTypes.map((item) => String(item).trim()).filter(Boolean).slice(0, 3),
    mainTypeCode: String(review.mainTypeCode ?? review.main_type_code ?? "").trim().slice(0, 60),
    subTypeCodes: Array.isArray(review.subTypeCodes ?? review.sub_type_codes)
      ? (review.subTypeCodes ?? review.sub_type_codes).map((item) => String(item).trim()).filter(Boolean).slice(0, 3)
      : [],
    ssenMeta: normalizeSsenMeta(review.ssenMeta ?? review.ssen_meta ?? {}),
    difficulty: String(review.difficulty ?? "").trim().slice(0, 40),
    reviewNote: String(review.reviewNote ?? review.review_note ?? "").trim().slice(0, 500),
    isImportantQuestion: Boolean(review.isImportantQuestion ?? review.is_important_question ?? review.importantQuestion),
    confirmed: Boolean(review.confirmed) && Boolean(unitName) && Boolean(mainType)
  };
}

function requireServiceRole() {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    throw new Error("시험분석 v2 저장에는 Supabase service role 설정이 필요합니다.");
  }
}

function normalizePositiveNumbers(numbers = []) {
  return [...new Set((Array.isArray(numbers) ? numbers : [])
    .map(Number)
    .filter((number) => Number.isInteger(number) && number > 0 && number <= 200))]
    .sort((a, b) => a - b);
}

function hasQuestionRowContent(question = {}) {
  const hasObjectContent = (value) => Boolean(value && typeof value === "object" && Object.keys(value).length);
  return (
    question.rowStatus !== "empty" ||
    Boolean(question.teacherOverride) ||
    Number(question.manualEditCount || 0) > 0 ||
    hasObjectContent(question.aiFields) ||
    hasObjectContent(question.teacherFields) ||
    hasObjectContent(question.finalFields)
  );
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

export async function saveExamAnalysisPromptStudioDraft({
  analysisRunId,
  promptStudioDraft = {},
  expectedRevision = 0
} = {}) {
  if (!analysisRunId) throw new Error("analysisRunId가 필요합니다.");
  requireServiceRole();
  const detail = await getExamAnalysisRun(analysisRunId);
  if (!detail.analysisRun?.analysisRunId) throw new Error("시험분석 작업을 찾지 못했습니다.");

  const previousDraft = getExamAnalysisPromptStudioDraftFromRun(detail.analysisRun);
  const expected = Math.max(0, Number.parseInt(expectedRevision, 10) || 0);
  if (previousDraft.revision !== expected) {
    const error = new Error(`다른 화면에서 프롬프트 작업본이 변경되었습니다. 현재 revision ${previousDraft.revision}을 다시 불러와 주세요.`);
    error.statusCode = 409;
    throw error;
  }

  const savedAt = new Date().toISOString();
  const nextDraft = normalizeExamAnalysisPromptStudioDraft({
    ...promptStudioDraft,
    revision: previousDraft.revision + 1,
    savedAt
  });
  await updateExamAnalysisRun(analysisRunId, {
    auditSummary: {
      ...(detail.analysisRun.auditSummary ?? {}),
      promptStudio: nextDraft
    }
  });

  const reread = await getExamAnalysisRun(analysisRunId);
  const rereadDraft = getExamAnalysisPromptStudioDraftFromRun(reread.analysisRun);
  const verified = areExamAnalysisPromptStudioDraftsEqual(nextDraft, rereadDraft)
    && rereadDraft.revision === nextDraft.revision
    && rereadDraft.savedAt === nextDraft.savedAt
    && rereadDraft.savedBy === nextDraft.savedBy;
  if (!verified) throw new Error("프롬프트 작업본 저장 후 Supabase 재조회 검증에 실패했습니다.");

  await recordExamAnalysisEvent({
    analysisRunId,
    eventType: "exam_analysis_prompt_studio_saved",
    message: `시험분석 프롬프트 작업본 revision ${nextDraft.revision} 저장을 확인했습니다.`,
    payload: {
      revision: nextDraft.revision,
      keyQuestionCount: nextDraft.roleInputs.keyQuestions.length,
      assetCount: nextDraft.assets.length
    }
  });

  return {
    ...reread,
    promptStudioDraft: rereadDraft,
    saveVerification: { verified: true, revision: rereadDraft.revision, verifiedAt: new Date().toISOString() }
  };
}

export async function getExamAnalysisSource(sourceId) {
  if (!sourceId) throw new Error("sourceId가 필요합니다.");
  requireServiceRole();
  const rows = await listRows(
    "exam_analysis_sources",
    `select=*&source_id=eq.${encodeURIComponent(sourceId)}&limit=1`,
    { requireServiceRole: true }
  );
  return { source: databaseSource, sourceFile: rows[0] ? fromSourceRow(rows[0]) : null };
}

export async function updateExamAnalysisSource(sourceId, patch = {}) {
  if (!sourceId) throw new Error("sourceId가 필요합니다.");
  requireServiceRole();
  const rows = await patchRows(
    "exam_analysis_sources",
    `source_id=eq.${encodeURIComponent(sourceId)}`,
    toSourcePatchRow({ ...patch, sourceId })
  );
  return { source: databaseSource, sourceFile: rows[0] ? fromSourceRow(rows[0]) : null };
}

export async function saveExamAnalysisSourceExtraction(sourceId, extraction = {}) {
  if (!sourceId) throw new Error("sourceId가 필요합니다.");
  requireServiceRole();
  const { sourceFile } = await updateExamAnalysisSource(sourceId, {
    extractionStatus: "extracted",
    pageCount: extraction.pageCount,
    extractedText: extraction.extractedText,
    pageTextRanges: extraction.pageTextRanges ?? [],
    pageImageManifest: extraction.pageImageManifest ?? [],
    error: ""
  });
  if (!sourceFile?.analysisRunId) {
    return { source: databaseSource, sourceFile, analysisRun: null };
  }
  const runRows = await patchRows(
    "exam_analysis_runs",
    `analysis_run_id=eq.${encodeURIComponent(sourceFile.analysisRunId)}`,
    {
      workflow_status: "source_extracted",
      extraction_summary: {
        sourceId,
        pageCount: extraction.pageCount ?? null,
        textBytes: extraction.textBytes ?? null,
        textLength: extraction.extractedText?.length ?? 0,
        quality: extraction.quality ?? {},
        extractedAt: new Date().toISOString()
      },
      updated_at: new Date().toISOString()
    }
  );
  await recordExamAnalysisEvent({
    analysisRunId: sourceFile.analysisRunId,
    eventType: "source_extracted",
    message: "PDF 텍스트와 페이지 정보가 추출되었습니다.",
    payload: {
      sourceId,
      pageCount: extraction.pageCount ?? null,
      textBytes: extraction.textBytes ?? null
    }
  });
  return {
    source: databaseSource,
    analysisRun: runRows[0] ? fromRunRow(runRows[0]) : null,
    sourceFile
  };
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

export async function deleteExamAnalysisSource(sourceId) {
  if (!sourceId) throw new Error("sourceId가 필요합니다.");
  requireServiceRole();
  const { sourceFile } = await getExamAnalysisSource(sourceId);
  if (!sourceFile?.sourceId) throw new Error("PDF 원본 정보를 찾지 못했습니다.");
  const deletedRows = await deleteRows(
    "exam_analysis_sources",
    `source_id=eq.${encodeURIComponent(sourceId)}`
  );
  await patchRows(
    "exam_analysis_runs",
    `analysis_run_id=eq.${encodeURIComponent(sourceFile.analysisRunId)}`,
    {
      updated_at: new Date().toISOString()
    }
  );
  await recordExamAnalysisEvent({
    analysisRunId: sourceFile.analysisRunId,
    eventType: "source_deleted",
    message: "PDF 원본 1건이 삭제되었습니다.",
    payload: {
      sourceId,
      originalFileName: sourceFile.originalFileName,
      storagePath: sourceFile.storagePath
    }
  });
  return {
    source: databaseSource,
    deletedSource: deletedRows[0] ? fromSourceRow(deletedRows[0]) : sourceFile
  };
}

export async function confirmExamAnalysisQuestionCount({
  analysisRunId,
  questionCount,
  detectedQuestionEvidence = [],
  detectedQuestionConfidence = 1,
  missingQuestionNumbers = [],
  confirmedBy = "teacher"
} = {}) {
  if (!analysisRunId) throw new Error("analysisRunId가 필요합니다.");
  const confirmedCount = Number(questionCount);
  if (!Number.isInteger(confirmedCount) || confirmedCount < 1 || confirmedCount > 200) {
    throw new Error("확정 문항 수는 1~200 사이의 정수여야 합니다.");
  }
  requireServiceRole();

  const detail = await getExamAnalysisRun(analysisRunId);
  if (!detail.analysisRun?.analysisRunId) throw new Error("시험분석 작업을 찾지 못했습니다.");

  const rowsAboveConfirmedCount = (detail.questions ?? []).filter((question) => Number(question.questionNumber) > confirmedCount);
  const protectedRows = rowsAboveConfirmedCount.filter(hasQuestionRowContent);
  if (protectedRows.length) {
    throw new Error("이미 내용이 들어간 문항 행이 있어 문항 수를 줄일 수 없습니다. 테스트 분석을 삭제하고 다시 만들어 주세요.");
  }
  if (rowsAboveConfirmedCount.length) {
    await deleteRows(
      "exam_analysis_questions",
      `analysis_run_id=eq.${encodeURIComponent(analysisRunId)}&question_number=gt.${confirmedCount}`
    );
  }

  const confirmedAt = new Date().toISOString();
  const evidence = Array.isArray(detectedQuestionEvidence)
    ? detectedQuestionEvidence.map(String).filter(Boolean).slice(0, 20)
    : [];
  const missingNumbers = normalizePositiveNumbers(missingQuestionNumbers);
  const insertedQuestionCount = await callRpc(
    "ensure_exam_analysis_question_rows",
    {
      p_analysis_run_id: analysisRunId,
      p_question_count: confirmedCount
    },
    { timeoutMs: 20000 }
  );

  await updateExamAnalysisRun(analysisRunId, {
    workflowStatus: "rows_created",
    questionCountStatus: "teacher_confirmed",
    detectedQuestionCount: confirmedCount,
    detectedQuestionConfidence,
    detectedQuestionEvidence: evidence,
    confirmedQuestionCount: confirmedCount,
    confirmedBy,
    confirmedAt,
    rowsLocked: true,
    missingQuestionNumbers: missingNumbers
  });

  await recordExamAnalysisEvent({
    analysisRunId,
    eventType: "question_count_confirmed",
    message: `문항 수 ${confirmedCount}개를 확정하고 1~${confirmedCount}번 빈 행을 생성했습니다.`,
    payload: {
      questionCount: confirmedCount,
      insertedQuestionCount: Number(insertedQuestionCount || 0),
      missingQuestionNumbers: missingNumbers
    }
  });

  const nextDetail = await getExamAnalysisRun(analysisRunId);
  return {
    ...nextDetail,
    source: databaseSource,
    insertedQuestionCount: Number(insertedQuestionCount || 0)
  };
}

export async function saveExamAnalysisQuestionBoundaries({
  analysisRunId,
  sourceId,
  boundaryResult = {}
} = {}) {
  if (!analysisRunId) throw new Error("analysisRunId가 필요합니다.");
  if (!sourceId) throw new Error("sourceId가 필요합니다.");
  requireServiceRole();

  const detail = await getExamAnalysisRun(analysisRunId);
  if (!detail.analysisRun?.analysisRunId) throw new Error("시험분석 작업을 찾지 못했습니다.");
  const questionNumbers = new Set((detail.questions ?? []).map((question) => Number(question.questionNumber)));
  if (!questionNumbers.size) throw new Error("고정 문항 행을 먼저 생성해 주세요.");

  const detectedAt = new Date().toISOString();
  const boundaries = (Array.isArray(boundaryResult.questionBoundaries) ? boundaryResult.questionBoundaries : [])
    .map(normalizeQuestionBoundary)
    .filter((boundary) => boundary && questionNumbers.has(boundary.questionNumber));

  for (const boundary of boundaries) {
    await patchRows(
      "exam_analysis_questions",
      `analysis_run_id=eq.${encodeURIComponent(analysisRunId)}&question_number=eq.${boundary.questionNumber}`,
      {
        source_page: boundary.pageStart,
        source_evidence: {
          sourceId,
          detectedAt,
          provider: boundaryResult.provider || "",
          model: boundaryResult.model || "",
          boundary
        },
        updated_at: detectedAt
      }
    );
  }

  const detectedNumbers = new Set(boundaries.map((boundary) => boundary.questionNumber));
  const missingQuestionNumbers = [...questionNumbers]
    .filter((questionNumber) => !detectedNumbers.has(questionNumber))
    .sort((a, b) => a - b);
  const needsReviewNumbers = boundaries
    .filter((boundary) => boundary.needsReview || boundary.warnings.length || !boundary.pageStart)
    .map((boundary) => boundary.questionNumber)
    .sort((a, b) => a - b);
  const status = missingQuestionNumbers.length || needsReviewNumbers.length ? "needs_review" : "detected";

  await updateExamAnalysisRun(analysisRunId, {
    auditSummary: {
      ...(detail.analysisRun.auditSummary ?? {}),
      boundaryDetection: {
        sourceId,
        status,
        detectedAt,
        provider: boundaryResult.provider || "",
        model: boundaryResult.model || "",
        detectedCount: boundaries.length,
        totalQuestionCount: questionNumbers.size,
        missingQuestionNumbers,
        needsReviewNumbers,
        overlapWarnings: Array.isArray(boundaryResult.overlapWarnings) ? boundaryResult.overlapWarnings.map(String).slice(0, 20) : [],
        summary: String(boundaryResult.summary || "").slice(0, 500)
      }
    }
  });

  await recordExamAnalysisEvent({
    analysisRunId,
    eventType: "question_boundary_detected",
    message: `문항 경계를 ${boundaries.length}/${questionNumbers.size}개 탐지했습니다.`,
    payload: {
      sourceId,
      status,
      detectedCount: boundaries.length,
      totalQuestionCount: questionNumbers.size,
      missingQuestionNumbers,
      needsReviewNumbers
    }
  });

  const nextDetail = await getExamAnalysisRun(analysisRunId);
  return {
    ...nextDetail,
    source: databaseSource,
    boundaryDetection: nextDetail.analysisRun?.auditSummary?.boundaryDetection ?? null
  };
}

export async function saveExamAnalysisQuestionRowFill({
  analysisRunId,
  sourceId,
  rowFillResult = {}
} = {}) {
  if (!analysisRunId) throw new Error("analysisRunId가 필요합니다.");
  if (!sourceId) throw new Error("sourceId가 필요합니다.");
  requireServiceRole();

  const detail = await getExamAnalysisRun(analysisRunId);
  if (!detail.analysisRun?.analysisRunId) throw new Error("시험분석 작업을 찾지 못했습니다.");
  const questions = detail.questions ?? [];
  if (!questions.length) throw new Error("고정 문항 행을 먼저 생성해 주세요.");

  const questionMap = new Map(questions.map((question) => [Number(question.questionNumber), question]));
  const isRefineMode = rowFillResult.mode === "refine";
  const targetQuestionNumbers = normalizePositiveNumbers(rowFillResult.targetQuestionNumbers);
  const effectiveQuestionNumbers = targetQuestionNumbers.length
    ? targetQuestionNumbers.filter((questionNumber) => questionMap.has(questionNumber))
    : questions.map((question) => Number(question.questionNumber));
  const effectiveQuestionSet = new Set(effectiveQuestionNumbers);
  const filledAt = new Date().toISOString();
  const rows = (Array.isArray(rowFillResult.rows) ? rowFillResult.rows : [])
    .map(normalizeQuestionRowFill)
    .filter((row) => row && questionMap.has(row.questionNumber) && effectiveQuestionSet.has(row.questionNumber));

  let filledCount = 0;
  const skippedTeacherOverrideNumbers = [];
  const needsReviewNumbers = [];
  for (const row of rows) {
    const question = questionMap.get(row.questionNumber);
    if (question?.teacherOverride || question?.rowStatus === "teacher_edited" || question?.rowStatus === "confirmed") {
      skippedTeacherOverrideNumbers.push(row.questionNumber);
      continue;
    }
    const rowStatus = row.unitName && row.mainType && !row.needsReview ? "ai_filled" : "missing";
    if (rowStatus === "missing" || row.warnings.length) needsReviewNumbers.push(row.questionNumber);
    await patchRows(
      "exam_analysis_questions",
      `analysis_run_id=eq.${encodeURIComponent(analysisRunId)}&question_number=eq.${row.questionNumber}`,
      {
        row_status: rowStatus,
        unit_name: row.unitName || null,
        main_type: row.mainType || null,
        sub_types: row.subTypes,
        difficulty: row.difficulty || null,
        ai_fields: {
          sourceId,
          filledAt,
          provider: rowFillResult.provider || "",
          model: rowFillResult.model || "",
          mainTypeCode: row.mainTypeCode,
          subTypeCodes: row.subTypeCodes,
          reasoningSummary: row.reasoningSummary,
          conceptTags: row.conceptTags,
          confidence: Number.isFinite(row.confidence) ? row.confidence : null,
          needsReview: row.needsReview,
          warnings: row.warnings
        },
        ai_provider: rowFillResult.provider || null,
        ai_model: rowFillResult.model || null,
        ai_filled_at: filledAt,
        updated_at: filledAt
      }
    );
    if (rowStatus === "ai_filled") filledCount += 1;
  }

  const returnedNumbers = new Set(rows.map((row) => row.questionNumber));
  const missingQuestionNumbers = effectiveQuestionNumbers
    .filter((questionNumber) => !returnedNumbers.has(questionNumber))
    .sort((a, b) => a - b);
  const uniqueNeedsReviewNumbers = normalizePositiveNumbers([...needsReviewNumbers, ...missingQuestionNumbers]);
  const status = uniqueNeedsReviewNumbers.length || skippedTeacherOverrideNumbers.length ? "needs_review" : "filled";
  const previousRowFill = detail.analysisRun.auditSummary?.rowFill ?? {};
  const successfulNumbers = rows
    .filter((row) => row.unitName && row.mainType && !row.needsReview && !row.warnings.length)
    .map((row) => row.questionNumber);
  const remainingNeedsReviewNumbers = isRefineMode
    ? normalizePositiveNumbers([
        ...(previousRowFill.needsReviewNumbers ?? []).filter((number) => !successfulNumbers.includes(Number(number))),
        ...uniqueNeedsReviewNumbers
      ])
    : uniqueNeedsReviewNumbers;
  const workflowStatus = remainingNeedsReviewNumbers.length ? "missing_audit_needed" : "ai_filled";
  const auditSummary = {
    ...(detail.analysisRun.auditSummary ?? {}),
    rowFill: isRefineMode
      ? {
          ...previousRowFill,
          status: remainingNeedsReviewNumbers.length ? "needs_review" : "filled",
          needsReviewNumbers: remainingNeedsReviewNumbers,
          lastRefinedAt: filledAt
        }
      : {
          sourceId,
          status,
          filledAt,
          provider: rowFillResult.provider || "",
          model: rowFillResult.model || "",
          filledCount,
          returnedCount: rows.length,
          totalQuestionCount: questions.length,
          missingQuestionNumbers,
          needsReviewNumbers: uniqueNeedsReviewNumbers,
          skippedTeacherOverrideNumbers,
          ssenSubject: rowFillResult.ssenSubject || "",
          summary: String(rowFillResult.summary || "").slice(0, 500)
        }
  };
  if (isRefineMode) {
    auditSummary.rowRefine = {
      sourceId,
      status,
      refinedAt: filledAt,
      provider: rowFillResult.provider || "",
      model: rowFillResult.model || "",
      targetQuestionNumbers: effectiveQuestionNumbers,
      updatedCount: filledCount,
      returnedCount: rows.length,
      missingQuestionNumbers,
      needsReviewNumbers: uniqueNeedsReviewNumbers,
      skippedTeacherOverrideNumbers: normalizePositiveNumbers([
        ...skippedTeacherOverrideNumbers,
        ...(rowFillResult.skippedLockedNumbers ?? [])
      ]),
      summary: String(rowFillResult.summary || "").slice(0, 500)
    };
  }

  await updateExamAnalysisRun(analysisRunId, {
    workflowStatus,
    auditSummary
  });

  await recordExamAnalysisEvent({
    analysisRunId,
    eventType: isRefineMode ? "question_rows_ai_refined" : "question_rows_ai_filled",
    message: isRefineMode
      ? `AI가 재확인 문항을 ${filledCount}/${effectiveQuestionNumbers.length}개 2차 수정했습니다.`
      : `AI가 문항 행을 ${filledCount}/${questions.length}개 채웠습니다.`,
    payload: {
      sourceId,
      status,
      filledCount,
      returnedCount: rows.length,
      totalQuestionCount: isRefineMode ? effectiveQuestionNumbers.length : questions.length,
      targetQuestionNumbers: isRefineMode ? effectiveQuestionNumbers : undefined,
      missingQuestionNumbers,
      needsReviewNumbers: uniqueNeedsReviewNumbers
    }
  });

  const nextDetail = await getExamAnalysisRun(analysisRunId);
  return {
    ...nextDetail,
    source: databaseSource,
    rowFill: nextDetail.analysisRun?.auditSummary?.rowFill ?? null
  };
}

export async function saveExamAnalysisQuestionTeacherReviews({
  analysisRunId,
  reviews = []
} = {}) {
  if (!analysisRunId) throw new Error("analysisRunId가 필요합니다.");
  requireServiceRole();

  const detail = await getExamAnalysisRun(analysisRunId);
  if (!detail.analysisRun?.analysisRunId) throw new Error("시험분석 작업을 찾지 못했습니다.");
  const questions = detail.questions ?? [];
  if (!questions.length) throw new Error("고정 문항 행을 먼저 생성해 주세요.");

  const questionMap = new Map(questions.map((question) => [Number(question.questionNumber), question]));
  const normalizedReviews = (Array.isArray(reviews) ? reviews : [])
    .map(normalizeQuestionTeacherReview)
    .filter((review) => review && questionMap.has(review.questionNumber));
  if (!normalizedReviews.length) throw new Error("저장할 검수 문항이 없습니다.");

  const reviewedAt = new Date().toISOString();
  for (const review of normalizedReviews) {
    const question = questionMap.get(review.questionNumber);
    const teacherFields = {
      source: "teacher_review",
      reviewedAt,
      unitName: review.unitName,
      mainType: review.mainType,
      subTypes: review.subTypes,
      mainTypeCode: review.mainTypeCode,
      subTypeCodes: review.subTypeCodes,
      ssenMeta: review.ssenMeta,
      difficulty: review.difficulty,
      reviewNote: review.reviewNote,
      isImportantQuestion: review.isImportantQuestion
    };
    const patch = {
      row_status: review.confirmed ? "confirmed" : "teacher_edited",
      unit_name: review.unitName || null,
      main_type: review.mainType || null,
      sub_types: review.subTypes,
      difficulty: review.difficulty || null,
      teacher_fields: teacherFields,
      final_fields: review.confirmed ? { ...teacherFields, confirmedAt: reviewedAt } : {},
      teacher_override: true,
      manual_edit_count: Number(question?.manualEditCount || 0) + 1,
      teacher_edited_at: reviewedAt,
      confirmed_at: review.confirmed ? reviewedAt : null,
      updated_at: reviewedAt
    };
    await patchRows(
      "exam_analysis_questions",
      `analysis_run_id=eq.${encodeURIComponent(analysisRunId)}&question_number=eq.${review.questionNumber}`,
      patch
    );
  }

  const rowsAfterReview = await listRows(
    "exam_analysis_questions",
    `select=*&analysis_run_id=eq.${encodeURIComponent(analysisRunId)}&order=question_number.asc`,
    { requireServiceRole: true }
  );
  const nextQuestions = rowsAfterReview.map(fromQuestionRow);
  const totalQuestionCount = nextQuestions.length;
  const confirmedCount = nextQuestions.filter((question) => question.rowStatus === "confirmed").length;
  const editedCount = nextQuestions.filter((question) => question.teacherOverride).length;
  const importantQuestionNumbers = nextQuestions
    .filter((question) => Boolean(question.finalFields?.isImportantQuestion ?? question.teacherFields?.isImportantQuestion))
    .map((question) => Number(question.questionNumber))
    .filter((number) => Number.isInteger(number))
    .sort((a, b) => a - b);
  const unconfirmedNumbers = nextQuestions
    .filter((question) => question.rowStatus !== "confirmed")
    .map((question) => Number(question.questionNumber))
    .filter((number) => Number.isInteger(number))
    .sort((a, b) => a - b);
  const status = confirmedCount === totalQuestionCount ? "completed" : "in_progress";

  await updateExamAnalysisRun(analysisRunId, {
    workflowStatus: status === "completed" ? "completed" : "teacher_review",
    auditSummary: {
      ...(detail.analysisRun.auditSummary ?? {}),
      teacherReview: {
        status,
        reviewedAt,
        reviewedCount: normalizedReviews.length,
        editedCount,
        confirmedCount,
        importantQuestionNumbers,
        totalQuestionCount,
        unconfirmedNumbers
      }
    }
  });

  await recordExamAnalysisEvent({
    analysisRunId,
    eventType: "question_teacher_review_saved",
    message: `선생님 검수 결과를 저장했습니다. 확정 ${confirmedCount}/${totalQuestionCount}개.`,
    payload: {
      status,
      reviewedCount: normalizedReviews.length,
      editedCount,
      confirmedCount,
      importantQuestionNumbers,
      totalQuestionCount,
      unconfirmedNumbers
    }
  });

  const nextDetail = await getExamAnalysisRun(analysisRunId);
  return {
    ...nextDetail,
    source: databaseSource,
    teacherReview: nextDetail.analysisRun?.auditSummary?.teacherReview ?? null
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
