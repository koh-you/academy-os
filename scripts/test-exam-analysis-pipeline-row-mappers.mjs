import assert from "node:assert/strict";
import {
  examAnalysisSourceBucket,
  fromAiJobRow,
  fromEventRow,
  fromQuestionRow,
  fromRunRow,
  fromSourceRow,
  toEventRow,
  toRunRow,
  toSourcePatchRow,
  toSourceRow
} from "../src/shared/persistence/examAnalysisPipelineRowMappers.js";

const isoPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
assert.equal(examAnalysisSourceBucket, "exam-analysis-pipeline-sources");

const runRow = toRunRow({
  analysisRunId: "run-1",
  examPrepId: "prep-1",
  title: "시험분석",
  schoolName: "창동고",
  grade: "고1",
  subject: "공통수학",
  examTerm: "2학기 기말",
  examCycle: "2026-2-final",
  workflowStatus: "review",
  questionCountStatus: "confirmed",
  detectedQuestionCount: "20",
  detectedQuestionConfidence: "0.9",
  detectedQuestionEvidence: [{ page: 1 }],
  confirmedQuestionCount: "20",
  confirmedBy: "teacher-1",
  confirmedAt: "2026-08-05T01:00:00.000Z",
  rowsLocked: true,
  missingQuestionNumbers: [3],
  extractionSummary: { pages: 5 },
  auditSummary: { verified: true },
  createdBy: "teacher-1"
});
assert.equal(runRow.analysis_run_id, "run-1");
assert.equal(runRow.detected_question_count, 20);
assert.equal(runRow.detected_question_confidence, 0.9);
assert.equal(runRow.rows_locked, true);
assert.match(runRow.updated_at, isoPattern);
assert.equal(toRunRow({ subject: "기하" }).subject, null);
assert.equal(toRunRow({}).subject, undefined);
assert.match(toRunRow({}).analysis_run_id, /^exam_analysis_run_\d+_[a-f0-9]{12}$/);

const mappedRun = fromRunRow({ ...runRow, unknown_db_column: "drop-me" });
assert.equal(mappedRun.analysisRunId, "run-1");
assert.equal(mappedRun.workflowStatus, "review");
assert.equal(mappedRun.unknown_db_column, undefined);
assert.equal(fromRunRow({ analysis_run_id: "r" }).workflowStatus, "draft");

const sourceRow = toSourceRow({
  sourceId: "source-1",
  analysisRunId: "run-1",
  sourceOrder: "2",
  sourceType: "image",
  storagePath: "runs/run-1/source.pdf",
  fileName: "시험지.pdf",
  fileType: "application/pdf",
  sizeBytes: "1200",
  pageCount: "5",
  extractionStatus: "extracted",
  extractedText: "본문",
  pageTextRanges: [{ page: 1 }],
  pageImageManifest: [{ page: 1, path: "p1.png" }],
  error: ""
});
assert.equal(sourceRow.bucket_id, examAnalysisSourceBucket);
assert.equal(sourceRow.original_file_name, "시험지.pdf");
assert.equal(sourceRow.mime_type, "application/pdf");
assert.equal(sourceRow.size_bytes, 1200);
assert.equal(sourceRow.page_count, 5);
assert.equal(sourceRow.error, null);
assert.match(sourceRow.updated_at, isoPattern);
assert.match(toSourceRow({ analysisRunId: "run-1" }).source_id, /^exam_analysis_source_\d+_[a-f0-9]{12}$/);

const sourcePatch = toSourcePatchRow({
  sourceId: "source-1",
  analysisRunId: "run-1",
  storagePath: "",
  pageCount: 0,
  extractedText: "",
  error: ""
});
assert.equal(sourcePatch.storage_path, null);
assert.equal(sourcePatch.page_count, 0);
assert.equal(sourcePatch.extracted_text, null);
assert.equal(sourcePatch.error, null);
const emptyPatch = toSourcePatchRow({ sourceId: "source-1" });
assert.equal(emptyPatch.storage_path, undefined);
assert.equal(emptyPatch.original_file_name, undefined);
assert.equal(emptyPatch.mime_type, undefined);
assert.equal(emptyPatch.page_count, undefined);

const mappedSource = fromSourceRow({ ...sourceRow, unknown_db_column: "drop-me" });
assert.equal(mappedSource.sourceId, "source-1");
assert.equal(mappedSource.bucketId, examAnalysisSourceBucket);
assert.equal(mappedSource.unknown_db_column, undefined);
assert.equal(fromSourceRow({ source_id: "s" }).extractionStatus, "pending");

const mappedQuestion = fromQuestionRow({
  question_row_id: "question-1",
  analysis_run_id: "run-1",
  question_number: 1,
  teacher_override: 1,
  manual_edit_count: 2,
  ai_fields: { mainType: "함수" },
  teacher_fields: { difficulty: "중" },
  final_fields: { confirmed: true },
  unknown_db_column: "drop-me"
});
assert.equal(mappedQuestion.rowStatus, "empty");
assert.equal(mappedQuestion.teacherOverride, true);
assert.equal(mappedQuestion.manualEditCount, 2);
assert.equal(mappedQuestion.unknown_db_column, undefined);

const mappedAiJob = fromAiJobRow({
  ai_job_id: "ai-job-1",
  analysis_run_id: "run-1",
  job_type: "row_fill",
  provider: "safe",
  request_summary: { count: 2 },
  response_summary: { count: 2 },
  unknown_db_column: "drop-me"
});
assert.equal(mappedAiJob.status, "queued");
assert.equal(mappedAiJob.provider, "safe");
assert.equal(mappedAiJob.unknown_db_column, undefined);

const eventRow = toEventRow({ analysisRunId: "run-1", eventType: "saved", message: "", payload: { revision: 1 } });
assert.match(eventRow.event_id, /^exam_analysis_event_\d+_[a-f0-9]{12}$/);
assert.equal(eventRow.message, null);
assert.deepEqual(eventRow.payload, { revision: 1 });
const mappedEvent = fromEventRow({ ...eventRow, created_at: "2026-08-05T01:30:00.000Z", unknown_db_column: "drop-me" });
assert.equal(mappedEvent.analysisRunId, "run-1");
assert.equal(mappedEvent.createdAt, "2026-08-05T01:30:00.000Z");
assert.equal(mappedEvent.unknown_db_column, undefined);

console.log("exam analysis pipeline row mappers passed · run/source/question/AI job/event 9 mappers");
