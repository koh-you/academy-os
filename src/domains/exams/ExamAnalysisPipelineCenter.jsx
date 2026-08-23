import { useEffect, useMemo, useRef, useState } from "react";
import "./examAnalysisPipelineCenter.css";
import { createExamAnalysisFinalPreviewModel } from "./finalPreview.js";
import {
  createEmptyExamAnalysisKeyQuestionBlock,
  createEmptyExamAnalysisOutputDrafts,
  examAnalysisKeyQuestionBlockFields,
  examAnalysisOutputAllInputFields,
  formatExamAnalysisEventTime,
  getExamAnalysisOutputDraftsFromRun,
  getExamAnalysisOutputSaveMismatches,
  mergeExamAnalysisOutputDraftsPreservingLocalEdits,
  normalizeExamAnalysisKeyQuestionBlocks
} from "./examAnalysisOutputModel.js";
import {
  downloadExamAnalysisOutputPackageZip,
  downloadExamAnalysisOutputTextFile
} from "./examAnalysisOutputPackageBuilder.js";
import { ExamAnalysisOutputDraftPanel } from "./ExamAnalysisOutputDraftPanel.jsx";
import { ExamAnalysisFinalPreviewPanel } from "./ExamAnalysisFinalPreviewPanel.jsx";
import { copyTextToClipboard } from "./outputPreview.js";
import { saveExamAnalysisRunContractRequest } from "./examAnalysisRunApi.js";
import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { Disclosure, DisclosureChevron } from "../../shared/components/Disclosure.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";
import { apiUrl, getJsonWithTimeout, postJson, postJsonWithTimeout } from "../../shared/utils/apiClient.js";
import { readFileAsDataUrl } from "../../shared/utils/file.js";

function getExamAnalysisSourceOpenUrl(file) {
  if (file?.signedUrl) return file.signedUrl;
  if (!file?.storagePath) return "";
  return apiUrl(`/api/exam-analysis-source-files/open?bucket=${encodeURIComponent(file.bucketId || "exam-analysis-pipeline-sources")}&path=${encodeURIComponent(file.storagePath)}`);
}

function formatBytes(sizeBytes) {
  const value = Number(sizeBytes || 0);
  if (!value) return "-";
  if (value < 1024) return `${value}B`;
  if (value < 1024 * 1024) return `${Math.round(value / 1024)}KB`;
  return `${(value / 1024 / 1024).toFixed(1)}MB`;
}

function detectExamAnalysisQuestionNumberCandidates(text = "") {
  const candidates = new Set();
  const pattern = /(?:^|\n)\s*(\d{1,3})\s*[.)]/g;
  let match = pattern.exec(String(text || ""));
  while (match) {
    const number = Number(match[1]);
    if (number > 0 && number <= 200) candidates.add(number);
    match = pattern.exec(String(text || ""));
  }
  return [...candidates].sort((a, b) => a - b);
}

function buildExamAnalysisExtractionCheck(file = {}) {
  const pageRanges = Array.isArray(file.pageTextRanges) ? file.pageTextRanges : [];
  const questionNumbers = detectExamAnalysisQuestionNumberCandidates(file.extractedText);
  const maxQuestionNumber = questionNumbers.at(-1) ?? null;
  const missingQuestionNumbers = maxQuestionNumber
    ? Array.from({ length: maxQuestionNumber }, (_, index) => index + 1).filter((number) => !questionNumbers.includes(number))
    : [];
  const emptyPageNumbers = pageRanges
    .filter((page) => Number(page.textLength || 0) === 0)
    .map((page) => page.pageNumber);
  const shortPageNumbers = pageRanges
    .filter((page) => Number(page.textLength || 0) > 0 && Number(page.textLength || 0) < 80)
    .map((page) => page.pageNumber);
  const textBytes = file.extractedText ? new Blob([file.extractedText]).size : 0;
  const warnings = [
    file.extractionStatus === "extracted" && !file.extractedText ? "추출된 텍스트가 없습니다." : "",
    emptyPageNumbers.length ? `빈 페이지 ${emptyPageNumbers.join(", ")}` : "",
    shortPageNumbers.length ? `짧은 페이지 ${shortPageNumbers.join(", ")}` : "",
    file.extractionStatus === "extracted" && questionNumbers.length === 0 ? "문항번호 후보 없음" : "",
    missingQuestionNumbers.length ? `누락 후보 ${missingQuestionNumbers.join(", ")}` : ""
  ].filter(Boolean);
  return {
    textBytes,
    pageCount: file.pageCount || pageRanges.length || 0,
    questionNumbers,
    maxQuestionNumber,
    missingQuestionNumbers,
    emptyPageNumbers,
    shortPageNumbers,
    warnings,
    status: warnings.length ? "needsReview" : "ok"
  };
}

function formatExamAnalysisPageTextLengthSummary(pageRanges = []) {
  const ranges = Array.isArray(pageRanges) ? pageRanges : [];
  if (!ranges.length) return "";
  const shown = ranges
    .slice(0, 8)
    .map((page) => `${page.pageNumber}p ${Number(page.textLength || 0).toLocaleString("ko-KR")}자`)
    .join(" · ");
  return ranges.length > 8 ? `${shown} · ...` : shown;
}

function getExamAnalysisVisionCheck(run = {}, sourceId = "") {
  const check = run?.extractionSummary?.visionCheck;
  if (!check || check.sourceId !== sourceId) return null;
  return check;
}

function getExamAnalysisExtractionSummary(run = {}, sourceId = "") {
  const summary = run?.extractionSummary;
  if (!summary || summary.sourceId !== sourceId) return null;
  return summary;
}

function normalizeExamAnalysisPositiveNumbers(numbers = []) {
  return [...new Set((Array.isArray(numbers) ? numbers : [])
    .map(Number)
    .filter((number) => Number.isInteger(number) && number > 0 && number <= 200))]
    .sort((a, b) => a - b);
}

function getExamAnalysisQuestionBoundary(question = {}) {
  return question?.sourceEvidence?.boundary ?? null;
}

function formatExamAnalysisBoundaryPage(boundary = {}) {
  if (!boundary?.pageStart) return "페이지 확인 필요";
  if (boundary.pageEnd && boundary.pageEnd !== boundary.pageStart) {
    return `${boundary.pageStart}~${boundary.pageEnd}p`;
  }
  return `${boundary.pageStart}p`;
}

function normalizeExamAnalysisSsenCodeList(value = []) {
  return (Array.isArray(value) ? value : [])
    .map((item) => String(item ?? "").trim())
    .filter(Boolean)
    .slice(0, 3);
}

function createExamAnalysisSsenUnitKey(value = {}) {
  return [value.partName, value.unitNo, value.unitName].map((item) => String(item ?? "").trim()).join("|");
}

function createExamAnalysisReviewSsenMeta({
  catalog = {},
  mainTypeCode = "",
  subTypeCodes = []
} = {}) {
  const types = Array.isArray(catalog.types) ? catalog.types : [];
  const findType = (typeCode) => types.find((item) => item.typeCode === typeCode) ?? null;
  const mainType = findType(mainTypeCode);
  const subTypes = normalizeExamAnalysisSsenCodeList(subTypeCodes)
    .map(findType)
    .filter(Boolean);
  return {
    source: "ssen_type_index",
    matchStatus: mainType ? "matched" : "needs_mapping",
    mainType: mainType
      ? {
          subject: mainType.subject,
          typeCode: mainType.typeCode,
          partName: mainType.partName,
          unitNo: mainType.unitNo,
          unitName: mainType.unitName,
          typeNo: mainType.typeNo,
          typeName: mainType.typeName
        }
      : {},
    subTypes: subTypes.map((item) => ({
      subject: item.subject,
      typeCode: item.typeCode,
      partName: item.partName,
      unitNo: item.unitNo,
      unitName: item.unitName,
      typeNo: item.typeNo,
      typeName: item.typeName
    }))
  };
}

function enrichExamAnalysisReviewDraftWithSsenCatalog(draftValue = {}, catalog = {}) {
  if (!draftValue?.mainTypeCode) return draftValue;
  const meta = createExamAnalysisReviewSsenMeta({
    catalog,
    mainTypeCode: draftValue.mainTypeCode,
    subTypeCodes: draftValue.subTypeCodes
  });
  if (meta.matchStatus !== "matched") return draftValue;
  return {
    ...draftValue,
    unitKey: createExamAnalysisSsenUnitKey(meta.mainType),
    partName: meta.mainType.partName,
    unitNo: meta.mainType.unitNo,
    unitName: draftValue.unitName || meta.mainType.unitName,
    mainType: draftValue.mainType || meta.mainType.typeName,
    ssenMeta: meta
  };
}

function createEmptyExamAnalysisSsenCatalog() {
  return {
    subject: "",
    scope: "",
    status: "idle",
    subjectTypeCount: 0,
    scopeMatchedCount: 0,
    types: [],
    units: []
  };
}

function createExamAnalysisReviewDraft(question = {}) {
  const finalFields = question.finalFields ?? {};
  const teacherFields = question.teacherFields ?? {};
  const sourceFields = { ...question, ...teacherFields, ...finalFields };
  const subTypes = Array.isArray(sourceFields.subTypes) ? sourceFields.subTypes : [];
  const aiFields = question.aiFields ?? {};
  const ssenMeta = sourceFields.ssenMeta && typeof sourceFields.ssenMeta === "object" ? sourceFields.ssenMeta : {};
  const mainTypeMeta = ssenMeta.mainType && typeof ssenMeta.mainType === "object" ? ssenMeta.mainType : {};
  const mainTypeCode = sourceFields.mainTypeCode ?? mainTypeMeta.typeCode ?? aiFields.mainTypeCode ?? "";
  const subTypeCodes = normalizeExamAnalysisSsenCodeList(sourceFields.subTypeCodes ?? aiFields.subTypeCodes ?? []);
  const partName = sourceFields.partName ?? mainTypeMeta.partName ?? "";
  const unitNo = sourceFields.unitNo ?? mainTypeMeta.unitNo ?? "";
  const unitName = sourceFields.unitName ?? mainTypeMeta.unitName ?? "";
  return {
    unitKey: sourceFields.unitKey ?? createExamAnalysisSsenUnitKey({ partName, unitNo, unitName }),
    partName,
    unitNo,
    unitName,
    mainType: sourceFields.mainType ?? "",
    mainTypeCode,
    subTypesText: subTypes.join(", "),
    subTypeCodes,
    ssenMeta,
    difficulty: sourceFields.difficulty ?? "",
    reviewNote: sourceFields.reviewNote ?? "",
    isImportantQuestion: Boolean(sourceFields.isImportantQuestion),
    confirmed: question.rowStatus === "confirmed" || Boolean(question.confirmedAt || finalFields.confirmedAt)
  };
}

function buildExamAnalysisReviewDrafts(questions = []) {
  return Object.fromEntries(
    (Array.isArray(questions) ? questions : [])
      .filter((question) => Number.isInteger(Number(question.questionNumber)))
      .map((question) => [String(question.questionNumber), createExamAnalysisReviewDraft(question)])
  );
}

function getExamAnalysisReviewSaveMismatches(reviews = [], questions = []) {
  const persistedByNumber = new Map(
    (Array.isArray(questions) ? questions : []).map((question) => [Number(question.questionNumber), createExamAnalysisReviewDraft(question)])
  );
  return (Array.isArray(reviews) ? reviews : []).filter((review) => {
    const persisted = persistedByNumber.get(Number(review.questionNumber));
    if (!persisted) return true;
    return (
      String(persisted.unitName || "") !== String(review.unitName || "") ||
      String(persisted.mainType || "") !== String(review.mainType || "") ||
      parseExamAnalysisReviewSubTypes(persisted.subTypesText).join("|") !== parseExamAnalysisReviewSubTypes(review.subTypes).join("|") ||
      String(persisted.mainTypeCode || "") !== String(review.mainTypeCode || "") ||
      normalizeExamAnalysisSsenCodeList(persisted.subTypeCodes).join("|") !== normalizeExamAnalysisSsenCodeList(review.subTypeCodes).join("|") ||
      String(persisted.difficulty || "") !== String(review.difficulty || "") ||
      String(persisted.reviewNote || "") !== String(review.reviewNote || "") ||
      Boolean(persisted.isImportantQuestion) !== Boolean(review.isImportantQuestion) ||
      Boolean(persisted.confirmed) !== Boolean(review.confirmed)
    );
  }).map((review) => Number(review.questionNumber));
}

function isSameExamAnalysisReviewDraft(left = {}, right = {}) {
  return (
    String(left.unitName ?? "") === String(right.unitName ?? "") &&
    String(left.mainType ?? "") === String(right.mainType ?? "") &&
    String(left.subTypesText ?? "") === String(right.subTypesText ?? "") &&
    String(left.mainTypeCode ?? "") === String(right.mainTypeCode ?? "") &&
    normalizeExamAnalysisSsenCodeList(left.subTypeCodes).join("|") === normalizeExamAnalysisSsenCodeList(right.subTypeCodes).join("|") &&
    String(left.partName ?? "") === String(right.partName ?? "") &&
    String(left.unitNo ?? "") === String(right.unitNo ?? "") &&
    String(left.difficulty ?? "") === String(right.difficulty ?? "") &&
    String(left.reviewNote ?? "") === String(right.reviewNote ?? "") &&
    Boolean(left.isImportantQuestion) === Boolean(right.isImportantQuestion) &&
    Boolean(left.confirmed) === Boolean(right.confirmed)
  );
}

function mergeExamAnalysisReviewDraftsFromSeed(currentDrafts = {}, previousSeedDrafts = {}, nextSeedDrafts = {}) {
  return Object.fromEntries(
    Object.entries(nextSeedDrafts).map(([questionNumber, nextSeedDraft]) => {
      const currentDraft = currentDrafts[questionNumber];
      if (!currentDraft) return [questionNumber, nextSeedDraft];
      const previousSeedDraft = previousSeedDrafts[questionNumber];
      if (previousSeedDraft && isSameExamAnalysisReviewDraft(currentDraft, previousSeedDraft)) {
        return [questionNumber, nextSeedDraft];
      }
      return [questionNumber, currentDraft];
    })
  );
}

function parseExamAnalysisReviewSubTypes(value = "") {
  return String(value ?? "")
    .split(/[,，]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 3);
}

function isExamAnalysisQuestionAiReviewTarget(question = {}) {
  return Boolean(
    question.rowStatus === "missing" ||
    question.aiFields?.needsReview ||
    question.aiFields?.warnings?.length
  );
}

function isExamAnalysisQuestionRefineTarget(question = {}, draftValue = {}) {
  return isExamAnalysisQuestionAiReviewTarget(question);
}

const examAnalysisDifficultyOptions = ["하", "중하", "중", "중상", "상"];

function applyExamAnalysisReviewDraftsToQuestions(questions = [], reviewDrafts = {}, ssenCatalog = {}) {
  return (Array.isArray(questions) ? questions : []).map((question) => {
    const draftValue = enrichExamAnalysisReviewDraftWithSsenCatalog(reviewDrafts[String(question.questionNumber)], ssenCatalog);
    if (!draftValue) return question;
    const subTypes = parseExamAnalysisReviewSubTypes(draftValue.subTypesText);
    const fields = {
      unitName: draftValue.unitName ?? "",
      mainType: draftValue.mainType ?? "",
      subTypes,
      partName: draftValue.partName ?? "",
      unitNo: draftValue.unitNo ?? "",
      unitKey: draftValue.unitKey ?? "",
      mainTypeCode: draftValue.mainTypeCode ?? "",
      subTypeCodes: normalizeExamAnalysisSsenCodeList(draftValue.subTypeCodes),
      ssenMeta: draftValue.ssenMeta ?? {},
      difficulty: draftValue.difficulty ?? "",
      reviewNote: draftValue.reviewNote ?? "",
      isImportantQuestion: Boolean(draftValue.isImportantQuestion)
    };
    return {
      ...question,
      unitName: fields.unitName,
      mainType: fields.mainType,
      subTypes,
      difficulty: fields.difficulty,
      isImportantQuestion: fields.isImportantQuestion,
      teacherFields: {
        ...(question.teacherFields ?? {}),
        ...fields
      },
      finalFields: {
        ...(question.finalFields ?? {}),
        ...fields
      },
      rowStatus: draftValue.confirmed ? "confirmed" : question.rowStatus
    };
  });
}

function getExamAnalysisQuestionCountCandidate(run = {}, sourceFiles = []) {
  const files = Array.isArray(sourceFiles) ? sourceFiles : [];
  const visionChecks = files
    .map((file) => getExamAnalysisVisionCheck(run, file.sourceId))
    .filter(Boolean);
  const visionCheck = visionChecks.find((check) => (
    Number(check.questionCountCandidate || 0) > 0 ||
    normalizeExamAnalysisPositiveNumbers(check.questionNumberCandidates).length > 0
  ));
  if (visionCheck) {
    const questionNumbers = normalizeExamAnalysisPositiveNumbers(visionCheck.questionNumberCandidates);
    const count = Number(visionCheck.questionCountCandidate || questionNumbers.at(-1) || questionNumbers.length || 0);
    if (count > 0) {
      return {
        count,
        sourceLabel: "AI 원본 검증",
        confidence: visionCheck.readable ? 0.95 : 0.75,
        missingQuestionNumbers: normalizeExamAnalysisPositiveNumbers(visionCheck.missingQuestionNumbers),
        detectedQuestionEvidence: [
          visionCheck.firstPageEvidence,
          visionCheck.lastPageEvidence,
          visionCheck.provider ? `provider: ${visionCheck.provider}` : "",
          questionNumbers.length ? `문항번호 후보 ${questionNumbers[0]}~${questionNumbers.at(-1)} (${questionNumbers.length}개)` : ""
        ].filter(Boolean),
        detailLabel: visionCheck.readable ? "PDF 원본 페이지 기준 후보" : "AI 검증 읽기 상태 확인 필요"
      };
    }
  }

  const summaryQuality = run?.extractionSummary?.quality;
  if (Number(summaryQuality?.maxQuestionNumber || 0) > 0) {
    return {
      count: Number(summaryQuality.maxQuestionNumber),
      sourceLabel: "텍스트 검증",
      confidence: summaryQuality.status === "ok" ? 0.8 : 0.6,
      missingQuestionNumbers: normalizeExamAnalysisPositiveNumbers(summaryQuality.missingQuestionNumbers),
      detectedQuestionEvidence: [
        `텍스트 추출 ${formatBytes(summaryQuality.textBytes)} · ${summaryQuality.pageCount || "-"}쪽`,
        `문항번호 후보 1~${summaryQuality.maxQuestionNumber} (${summaryQuality.questionNumberCandidates?.length || 0}개)`
      ],
      detailLabel: summaryQuality.status === "ok" ? "텍스트 후보 기준" : "텍스트 후보 검토 필요"
    };
  }

  const extractedFile = files.find((file) => file.extractionStatus === "extracted" && file.extractedText);
  if (extractedFile) {
    const extractionCheck = buildExamAnalysisExtractionCheck(extractedFile);
    if (extractionCheck.maxQuestionNumber) {
      return {
        count: extractionCheck.maxQuestionNumber,
        sourceLabel: "텍스트 검증",
        confidence: extractionCheck.status === "ok" ? 0.8 : 0.6,
        missingQuestionNumbers: extractionCheck.missingQuestionNumbers,
        detectedQuestionEvidence: [
          `텍스트 추출 ${formatBytes(extractionCheck.textBytes)} · ${extractionCheck.pageCount || "-"}쪽`,
          `문항번호 후보 1~${extractionCheck.maxQuestionNumber} (${extractionCheck.questionNumbers.length}개)`
        ],
        detailLabel: extractionCheck.status === "ok" ? "텍스트 후보 기준" : "텍스트 후보 검토 필요"
      };
    }
  }

  return {
    count: 0,
    sourceLabel: "",
    confidence: 0,
    missingQuestionNumbers: [],
    detectedQuestionEvidence: [],
    detailLabel: "텍스트 추출 또는 AI 검증을 먼저 실행해 주세요."
  };
}

function workflowStatusLabel(status = "") {
  const labels = {
    draft: "초안",
    source_uploaded: "PDF 저장 완료",
    source_extracted: "추출 완료",
    question_count_detected: "문항 수 판독 완료",
    question_count_confirmed: "문항 수 확정",
    rows_created: "1~N 행 생성",
    ai_fill_running: "AI 행 채움 중",
    ai_filled: "AI 행 채움 완료",
    missing_audit_needed: "누락 검수 필요",
    missing_retry_running: "누락 재요청 중",
    teacher_review: "선생님 검토",
    completed: "완료",
    failed: "실패",
    archived: "보관"
  };
  return labels[status] ?? status ?? "초안";
}

function examAnalysisSourceStatusLabel(status = "") {
  const labels = {
    uploaded: "PDF 저장 완료",
    extracting: "텍스트 추출 중",
    extracted: "텍스트 추출 완료",
    failed: "텍스트 추출 실패"
  };
  return labels[status] ?? status ?? "PDF 저장 완료";
}

function getExamAnalysisRunTitle(run = {}) {
  return run.title || [run.schoolName, run.grade, run.subject, run.examCycle].filter(Boolean).join(" · ") || "새 시험분석";
}

const examAnalysisSchools = ["상계고", "자운고", "창동고", "용화여고", "정의여고"];
const examAnalysisGrades = ["고1", "고2", "고3"];
const examAnalysisExamCycles = ["1학기 중간", "1학기 기말", "2학기 중간", "2학기 기말"];
const defaultExamAnalysisSubject = "";

function inferExamAnalysisSubject(value = "") {
  const text = String(value || "").replace(/\s+/g, "");
  const candidates = [
    [/공통수학1|공수1|공통수학Ⅰ|공통수학I/i, "공통수학1"],
    [/공통수학2|공수2|공통수학Ⅱ|공통수학II/i, "공통수학2"],
    [/미적분2|미적분Ⅱ|미적분II/i, "미적분2"],
    [/미적분1|미적분Ⅰ|미적분I/i, "미적분1"],
    [/확률과통계|확통/i, "확률과통계"],
    [/대수/i, "대수"]
  ];
  return candidates.find(([pattern]) => pattern.test(text))?.[1] ?? "";
}

function getDefaultExamAnalysisSubject(row = {}) {
  const detailSubject = inferExamAnalysisSubject(`${row.scope ?? ""} ${row.subTextbook ?? ""} ${row.title ?? ""}`);
  if (detailSubject) return detailSubject;
  const rawSubject = String(row.subject ?? "").trim();
  if (rawSubject && rawSubject !== "기하") return rawSubject;
  return defaultExamAnalysisSubject;
}

function normalizeExamAnalysisSchoolName(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return examAnalysisSchools.find((school) => text.includes(school.replace("고", "")) || text.includes(school)) || text;
}

function normalizeExamAnalysisGrade(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  if (/고?\s*1|1\s*학년/.test(text)) return "고1";
  if (/고?\s*2|2\s*학년/.test(text)) return "고2";
  if (/고?\s*3|3\s*학년/.test(text)) return "고3";
  return text;
}

function normalizeExamAnalysisExamCycle(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  const semester = text.includes("2학기") ? "2학기" : text.includes("1학기") ? "1학기" : "";
  const cycle = text.includes("기말") ? "기말" : text.includes("중간") ? "중간" : "";
  return semester && cycle ? `${semester} ${cycle}` : text.replace(/고사/g, "").trim();
}

function formatExamAnalysisExamCycleTitle(value) {
  const normalized = normalizeExamAnalysisExamCycle(value);
  if (!normalized) return "고사";
  return normalized.endsWith("고사") ? normalized : `${normalized}고사`;
}

function buildExamAnalysisTitle({ schoolName, grade, examCycle } = {}) {
  return `${new Date().getFullYear()} ${schoolName || "학교"} ${grade || "학년"} ${formatExamAnalysisExamCycleTitle(examCycle)} 시험분석`;
}

export function ExamAnalysisPipelineCenter({ examPrepRows = [], runtime }) {
  const {
    confirmExamAnalysisQuestionCountRequest,
    deleteExamAnalysisRunRequest,
    deleteExamAnalysisSourceRequest,
    detectExamAnalysisQuestionBoundariesRequest,
    extractExamAnalysisSourceRequest,
    fetchExamAnalysisSsenTypesRequest,
    fillExamAnalysisQuestionRowsRequest,
    formatKoreaTimeLabel,
    generateExamAnalysisOutputDraftRequest,
    refineExamAnalysisQuestionRowsRequest,
    saveExamAnalysisOutputDraftsRequest,
    saveExamAnalysisQuestionReviewsRequest,
    verifyExamAnalysisSourceWithAiRequest
  } = runtime;
  const fileInputRef = useRef(null);
  const didAutoSelectExamPrepRef = useRef(Boolean(examPrepRows[0]?.examPrepId));
  const reviewDraftRunIdRef = useRef("");
  const reviewSeedDraftsRef = useRef({});
  const outputDraftRunIdRef = useRef("");
  const [analysisRuns, setAnalysisRuns] = useState([]);
  const [selectedRunId, setSelectedRunId] = useState("");
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [selectedExamPrepId, setSelectedExamPrepId] = useState(examPrepRows[0]?.examPrepId ?? "");
  const [selectedSchoolName, setSelectedSchoolName] = useState(normalizeExamAnalysisSchoolName(examPrepRows[0]?.schoolName) || examAnalysisSchools[0]);
  const [selectedGrade, setSelectedGrade] = useState(normalizeExamAnalysisGrade(examPrepRows[0]?.grade) || examAnalysisGrades[0]);
  const [selectedExamCycle, setSelectedExamCycle] = useState(normalizeExamAnalysisExamCycle(examPrepRows[0]?.examCycle || examPrepRows[0]?.examTerm) || examAnalysisExamCycles[0]);
  const [draft, setDraft] = useState(() => {
    const row = examPrepRows[0] ?? {};
    const schoolName = normalizeExamAnalysisSchoolName(row.schoolName) || examAnalysisSchools[0];
    const grade = normalizeExamAnalysisGrade(row.grade) || examAnalysisGrades[0];
    const examCycle = normalizeExamAnalysisExamCycle(row.examCycle || row.examTerm) || examAnalysisExamCycles[0];
    return {
      title: buildExamAnalysisTitle({ schoolName, grade, examCycle }),
      schoolName,
      grade,
      subject: getDefaultExamAnalysisSubject(row),
      examTerm: row.examTerm ?? "",
      examCycle
    };
  });
  const [loadStatus, setLoadStatus] = useState({ state: "idle", message: "" });
  const [saveStatus, setSaveStatus] = useState({ state: "idle", message: "" });
  const [uploadStatus, setUploadStatus] = useState({ state: "idle", message: "" });
  const [deleteStatus, setDeleteStatus] = useState({ state: "idle", message: "" });
  const [deletingRunId, setDeletingRunId] = useState("");
  const [sourceDeleteStatus, setSourceDeleteStatus] = useState({ state: "idle", message: "" });
  const [deletingSourceId, setDeletingSourceId] = useState("");
  const [extractStatus, setExtractStatus] = useState({ state: "idle", message: "" });
  const [extractingSourceId, setExtractingSourceId] = useState("");
  const [visionStatus, setVisionStatus] = useState({ state: "idle", message: "" });
  const [checkingSourceId, setCheckingSourceId] = useState("");
  const [confirmStatus, setConfirmStatus] = useState({ state: "idle", message: "" });
  const [questionCountDraft, setQuestionCountDraft] = useState("");
  const [isConfirmingQuestionCount, setIsConfirmingQuestionCount] = useState(false);
  const [boundaryStatus, setBoundaryStatus] = useState({ state: "idle", message: "" });
  const [isDetectingBoundaries, setIsDetectingBoundaries] = useState(false);
  const [rowFillStatus, setRowFillStatus] = useState({ state: "idle", message: "" });
  const [isFillingRows, setIsFillingRows] = useState(false);
  const [rowRefineStatus, setRowRefineStatus] = useState({ state: "idle", message: "" });
  const [isRefiningRows, setIsRefiningRows] = useState(false);
  const [reviewStatus, setReviewStatus] = useState({ state: "idle", message: "" });
  const [reviewDrafts, setReviewDrafts] = useState({});
  const [isSavingReviews, setIsSavingReviews] = useState(false);
  const [editingSsenQuestionNumber, setEditingSsenQuestionNumber] = useState("");
  const [examAnalysisStageCollapseOverrides, setExamAnalysisStageCollapseOverrides] = useState({});
  const [examAnalysisWorkspaceTab, setExamAnalysisWorkspaceTab] = useState("source");
  const [isPdfDropActive, setIsPdfDropActive] = useState(false);
  const [ssenCatalog, setSsenCatalog] = useState(() => createEmptyExamAnalysisSsenCatalog());
  const [ssenCatalogStatus, setSsenCatalogStatus] = useState({ state: "idle", message: "" });
  const [outputDrafts, setOutputDrafts] = useState(() => createEmptyExamAnalysisOutputDrafts());
  const [outputStatus, setOutputStatus] = useState({ state: "idle", message: "" });
  const [isSavingOutputDrafts, setIsSavingOutputDrafts] = useState(false);
  const [generatingOutputType, setGeneratingOutputType] = useState("");
  const [exportingOutputType, setExportingOutputType] = useState("");

  const selectedExamPrepRow = useMemo(
    () => examPrepRows.find((row) => row.examPrepId === selectedExamPrepId) ?? null,
    [examPrepRows, selectedExamPrepId]
  );
  const selectedDetailRun = selectedDetail?.analysisRun?.analysisRunId === selectedRunId ? selectedDetail.analysisRun : null;
  const activeRun = selectedDetailRun ?? analysisRuns.find((run) => run.analysisRunId === selectedRunId) ?? null;
  const sourceFiles = selectedDetailRun ? selectedDetail?.sources ?? [] : [];
  const questionRows = selectedDetailRun ? selectedDetail?.questions ?? [] : [];
  const events = selectedDetailRun ? selectedDetail?.events ?? [] : [];
  const ssenCatalogQuery = useMemo(() => {
    const scope = selectedExamPrepRow?.scope ?? "";
    const subject = getDefaultExamAnalysisSubject({
      subject: draft.subject || activeRun?.subject || selectedExamPrepRow?.subject || "",
      scope,
      title: draft.title || activeRun?.title || ""
    });
    return {
      analysisRunId: activeRun?.analysisRunId || "",
      subject,
      scope
    };
  }, [activeRun?.analysisRunId, activeRun?.subject, activeRun?.title, draft.subject, draft.title, selectedExamPrepRow?.scope, selectedExamPrepRow?.subject]);
  const questionCountCandidate = useMemo(
    () => getExamAnalysisQuestionCountCandidate(activeRun, sourceFiles),
    [activeRun, sourceFiles]
  );
  const boundaryDetection = activeRun?.auditSummary?.boundaryDetection ?? null;
  const rowFill = activeRun?.auditSummary?.rowFill ?? null;
  const rowRefine = activeRun?.auditSummary?.rowRefine ?? null;
  const teacherReview = activeRun?.auditSummary?.teacherReview ?? null;
  const previewQuestionRows = useMemo(
    () => applyExamAnalysisReviewDraftsToQuestions(questionRows, reviewDrafts, ssenCatalog),
    [questionRows, reviewDrafts, ssenCatalog]
  );
  const finalPreviewModel = useMemo(
    () => createExamAnalysisFinalPreviewModel({
      analysisRun: activeRun ?? {},
      questions: previewQuestionRows,
      sourceFiles
    }),
    [activeRun, previewQuestionRows, sourceFiles]
  );
  const reviewSeedKey = useMemo(
    () => questionRows
      .map((question) => [
        question.questionNumber,
        question.rowStatus,
        question.teacherEditedAt,
        question.confirmedAt,
        question.updatedAt
      ].join(":"))
      .join("|"),
    [questionRows]
  );
  const schoolCards = useMemo(() => {
    const customSchools = [...new Set([
      ...examPrepRows.map((row) => normalizeExamAnalysisSchoolName(row.schoolName)),
      ...analysisRuns.map((run) => normalizeExamAnalysisSchoolName(run.schoolName))
    ].filter(Boolean))]
      .filter((schoolName) => !examAnalysisSchools.includes(schoolName))
      .sort((a, b) => a.localeCompare(b, "ko"));
    return [...examAnalysisSchools, ...customSchools].map((schoolName) => ({
      name: schoolName,
      gradeCount: examAnalysisGrades.length,
      examCount: examAnalysisExamCycles.length,
      runCount: analysisRuns.filter((run) => normalizeExamAnalysisSchoolName(run.schoolName) === schoolName).length
    }));
  }, [analysisRuns, examPrepRows]);
  const gradeCards = useMemo(() => {
    return examAnalysisGrades.map((grade) => ({
      name: grade,
      examCount: examAnalysisExamCycles.length,
      runCount: analysisRuns.filter((run) => (
        normalizeExamAnalysisSchoolName(run.schoolName) === selectedSchoolName
        && normalizeExamAnalysisGrade(run.grade) === grade
      )).length
    }));
  }, [analysisRuns, selectedSchoolName]);
  const examCycleCards = useMemo(() => examAnalysisExamCycles.map((examCycle) => ({
    name: examCycle,
    runCount: analysisRuns.filter((run) => (
      normalizeExamAnalysisSchoolName(run.schoolName) === selectedSchoolName
      && normalizeExamAnalysisGrade(run.grade) === selectedGrade
      && normalizeExamAnalysisExamCycle(run.examCycle || run.examTerm) === examCycle
    )).length
  })), [analysisRuns, selectedExamCycle, selectedGrade, selectedSchoolName]);
  const scopedRuns = useMemo(
    () => analysisRuns.filter((run) => (
      normalizeExamAnalysisSchoolName(run.schoolName) === selectedSchoolName
      && normalizeExamAnalysisGrade(run.grade) === selectedGrade
      && normalizeExamAnalysisExamCycle(run.examCycle || run.examTerm) === selectedExamCycle
    )),
    [analysisRuns, selectedExamCycle, selectedGrade, selectedSchoolName]
  );

  useEffect(() => {
    if (!ssenCatalogQuery.analysisRunId && !ssenCatalogQuery.subject && !ssenCatalogQuery.scope) {
      setSsenCatalog(createEmptyExamAnalysisSsenCatalog());
      setSsenCatalogStatus({ state: "idle", message: "" });
      return;
    }
    let canceled = false;
    setSsenCatalogStatus({ state: "saving", message: "시험분석 · 쎈 기준표 조회 중" });
    fetchExamAnalysisSsenTypesRequest(ssenCatalogQuery)
      .then((result) => {
        if (canceled) return;
        setSsenCatalog({
          subject: result.subject || "",
          scope: result.scope || "",
          status: result.status || "",
          subjectTypeCount: result.subjectTypeCount || 0,
          scopeMatchedCount: result.scopeMatchedCount || 0,
          types: Array.isArray(result.types) ? result.types : [],
          units: Array.isArray(result.units) ? result.units : []
        });
        const count = result.scopeMatchedCount || result.subjectTypeCount || 0;
        setSsenCatalogStatus({
          state: result.status === "subject_missing" ? "failed" : "success",
          message: result.status === "scope_not_matched"
            ? `시험분석 · 쎈 기준표 과목 전체 · ${count}개`
            : result.status === "subject_missing"
              ? "시험분석 · 쎈 기준표 과목 확인 필요"
              : `시험분석 · 쎈 기준표 준비 · ${count}개`
        });
      })
      .catch((error) => {
        if (canceled) return;
        setSsenCatalog(createEmptyExamAnalysisSsenCatalog());
        setSsenCatalogStatus({ state: "failed", message: `시험분석 · 쎈 기준표 조회 실패 · ${error.message}` });
      });
    return () => {
      canceled = true;
    };
  }, [ssenCatalogQuery]);

  useEffect(() => {
    if (!didAutoSelectExamPrepRef.current && !selectedExamPrepId && examPrepRows[0]?.examPrepId) {
      didAutoSelectExamPrepRef.current = true;
      setSelectedExamPrepId(examPrepRows[0].examPrepId);
      applyExamPrepRow(examPrepRows[0]);
    }
  }, [examPrepRows, selectedExamPrepId]);

  useEffect(() => {
    if (!didAutoSelectExamPrepRef.current && !selectedSchoolName && !draft.schoolName && schoolCards[0]?.name) {
      didAutoSelectExamPrepRef.current = true;
      setSelectedSchoolName(schoolCards[0].name);
      setDraft((current) => ({
        ...current,
        schoolName: schoolCards[0].name,
        grade: selectedGrade,
        examCycle: selectedExamCycle,
        title: buildExamAnalysisTitle({ schoolName: schoolCards[0].name, grade: selectedGrade, examCycle: selectedExamCycle })
      }));
    }
  }, [draft.schoolName, schoolCards, selectedExamCycle, selectedGrade, selectedSchoolName]);

  useEffect(() => {
    loadRuns();
  }, []);

  useEffect(() => {
    if (!selectedRunId) {
      setSelectedDetail(null);
      return;
    }
    loadRunDetail(selectedRunId);
  }, [selectedRunId]);

  useEffect(() => {
    const nextCount = Number(activeRun?.confirmedQuestionCount || questionCountCandidate.count || 0);
    setQuestionCountDraft(nextCount ? String(nextCount) : "");
  }, [activeRun?.analysisRunId, activeRun?.confirmedQuestionCount, questionCountCandidate.count]);

  useEffect(() => {
    const runId = activeRun?.analysisRunId || "";
    if (!runId || !questionRows.length) {
      reviewDraftRunIdRef.current = runId;
      reviewSeedDraftsRef.current = {};
      setEditingSsenQuestionNumber("");
      setReviewDrafts({});
      return;
    }
    const seededDrafts = buildExamAnalysisReviewDrafts(questionRows);
    if (reviewDraftRunIdRef.current !== runId) {
      reviewDraftRunIdRef.current = runId;
      reviewSeedDraftsRef.current = seededDrafts;
      setEditingSsenQuestionNumber("");
      setReviewDrafts(seededDrafts);
      return;
    }
    const previousSeedDrafts = reviewSeedDraftsRef.current;
    setReviewDrafts((current) => {
      return mergeExamAnalysisReviewDraftsFromSeed(current, previousSeedDrafts, seededDrafts);
    });
    reviewSeedDraftsRef.current = seededDrafts;
  }, [activeRun?.analysisRunId, questionRows.length, reviewSeedKey]);

  useEffect(() => {
    const runId = activeRun?.analysisRunId || "";
    const nextDrafts = getExamAnalysisOutputDraftsFromRun(activeRun);
    const shouldPreserveLocalDraft = Boolean(runId)
      && outputDraftRunIdRef.current === runId
      && outputStatus.state === "dirty";
    setOutputDrafts((current) => (
      shouldPreserveLocalDraft
        ? mergeExamAnalysisOutputDraftsPreservingLocalEdits(nextDrafts, current)
        : nextDrafts
    ));
    if (outputDraftRunIdRef.current !== runId) {
      outputDraftRunIdRef.current = runId;
      setOutputStatus({ state: "idle", message: "" });
    }
  }, [activeRun?.analysisRunId, activeRun?.auditSummary?.outputDrafts]);

  function applyExamPrepRow(row) {
    if (!row) return;
    const schoolName = normalizeExamAnalysisSchoolName(row.schoolName) || selectedSchoolName;
    const grade = normalizeExamAnalysisGrade(row.grade) || selectedGrade;
    const examCycle = normalizeExamAnalysisExamCycle(row.examCycle || row.examTerm) || selectedExamCycle;
    setSelectedSchoolName(schoolName);
    setSelectedGrade(grade);
    setSelectedExamCycle(examCycle);
    setDraft({
      title: buildExamAnalysisTitle({ schoolName, grade, examCycle }),
      schoolName,
      grade,
      subject: getDefaultExamAnalysisSubject(row),
      examTerm: row.examTerm ?? "",
      examCycle
    });
  }

  function applyRunToDraft(run) {
    if (!run) return;
    const schoolName = normalizeExamAnalysisSchoolName(run.schoolName) || selectedSchoolName;
    const grade = normalizeExamAnalysisGrade(run.grade) || selectedGrade;
    const examCycle = normalizeExamAnalysisExamCycle(run.examCycle || run.examTerm) || selectedExamCycle;
    didAutoSelectExamPrepRef.current = true;
    setSelectedExamPrepId(run.examPrepId || "");
    setSelectedSchoolName(schoolName);
    setSelectedGrade(grade);
    setSelectedExamCycle(examCycle);
    setDraft({
      title: run.title || buildExamAnalysisTitle({ schoolName, grade, examCycle }),
      schoolName,
      grade,
      subject: getDefaultExamAnalysisSubject(run),
      examTerm: run.examTerm ?? "",
      examCycle
    });
  }

  function getFirstExamPrepRow(schoolName = selectedSchoolName, grade = selectedGrade, examCycle = selectedExamCycle) {
    return examPrepRows.find((row) => (
      normalizeExamAnalysisSchoolName(row.schoolName) === schoolName
      && normalizeExamAnalysisGrade(row.grade) === grade
      && normalizeExamAnalysisExamCycle(row.examCycle || row.examTerm) === examCycle
    )) ?? null;
  }

  function selectSchoolCard(school) {
    const nextSchoolName = school?.name || examAnalysisSchools[0];
    const nextGrade = selectedGrade || examAnalysisGrades[0];
    const nextExamCycle = selectedExamCycle || examAnalysisExamCycles[0];
    const row = getFirstExamPrepRow(nextSchoolName, nextGrade, nextExamCycle);
    setSelectedRunId("");
    setSelectedDetail(null);
    setSelectedSchoolName(nextSchoolName);
    setSelectedGrade(nextGrade);
    setSelectedExamCycle(nextExamCycle);
    setSelectedExamPrepId(row?.examPrepId || "");
    if (row) {
      applyExamPrepRow(row);
      return;
    }
    setDraft((current) => ({
      ...current,
      title: buildExamAnalysisTitle({ schoolName: nextSchoolName, grade: nextGrade, examCycle: nextExamCycle }),
      schoolName: nextSchoolName,
      grade: nextGrade,
      examCycle: nextExamCycle
    }));
  }

  function selectGradeCard(grade) {
    const nextGrade = grade?.name || examAnalysisGrades[0];
    const row = getFirstExamPrepRow(selectedSchoolName, nextGrade, selectedExamCycle);
    setSelectedRunId("");
    setSelectedDetail(null);
    setSelectedGrade(nextGrade);
    setSelectedExamPrepId(row?.examPrepId || "");
    if (row) {
      applyExamPrepRow(row);
      return;
    }
    setDraft((current) => ({
      ...current,
      title: buildExamAnalysisTitle({ schoolName: selectedSchoolName || current.schoolName, grade: nextGrade, examCycle: selectedExamCycle || current.examCycle }),
      schoolName: selectedSchoolName || current.schoolName,
      grade: nextGrade,
      examCycle: selectedExamCycle || current.examCycle
    }));
  }

  function selectExamCycleCard(examCycle) {
    const nextExamCycle = examCycle?.name || examAnalysisExamCycles[0];
    const row = getFirstExamPrepRow(selectedSchoolName, selectedGrade, nextExamCycle);
    setSelectedRunId("");
    setSelectedDetail(null);
    setSelectedExamCycle(nextExamCycle);
    setSelectedExamPrepId(row?.examPrepId || "");
    if (row) {
      applyExamPrepRow(row);
      return;
    }
    setDraft((current) => ({
      ...current,
      title: buildExamAnalysisTitle({ schoolName: selectedSchoolName || current.schoolName, grade: selectedGrade || current.grade, examCycle: nextExamCycle }),
      schoolName: selectedSchoolName || current.schoolName,
      grade: selectedGrade || current.grade,
      examCycle: nextExamCycle
    }));
  }

  function buildRunPayload() {
    return {
      analysisRunId: selectedRunId || undefined,
      examPrepId: selectedExamPrepId || "",
      title: draft.title.trim() || "새 시험분석",
      schoolName: draft.schoolName.trim(),
      grade: draft.grade.trim(),
      subject: draft.subject.trim() || defaultExamAnalysisSubject,
      examTerm: draft.examTerm.trim(),
      examCycle: draft.examCycle.trim()
    };
  }

  async function loadRuns(nextSelectedRunId) {
    setLoadStatus({ state: "loading", message: "시험분석 · 불러오는 중" });
    try {
      const result = await getJsonWithTimeout("/api/exam-analysis-runs", 12000, "시험분석 목록 조회가 지연되고 있습니다.");
      const runs = result.analysisRuns ?? [];
      setAnalysisRuns(runs);
      const nextId = nextSelectedRunId !== undefined ? nextSelectedRunId : selectedRunId || runs[0]?.analysisRunId || "";
      setSelectedRunId(nextId);
      setLoadStatus({ state: "success", message: "시험분석 · 불러오기 완료" });
    } catch (error) {
      setLoadStatus({ state: "failed", message: `시험분석 · 불러오기 실패 · ${error.message}` });
    }
  }

  async function loadRunDetail(analysisRunId) {
    setLoadStatus({ state: "loading", message: "시험분석 상세 · 불러오는 중" });
    try {
      const result = await getJsonWithTimeout(
        `/api/exam-analysis-runs?id=${encodeURIComponent(analysisRunId)}`,
        12000,
        "시험분석 상세 조회가 지연되고 있습니다."
      );
      setSelectedDetail(result);
      applyRunToDraft(result.analysisRun);
      setLoadStatus({ state: "success", message: "시험분석 상세 · 불러오기 완료" });
    } catch (error) {
      setLoadStatus({ state: "failed", message: `시험분석 상세 · 불러오기 실패 · ${error.message}` });
    }
  }

  async function saveRun() {
    setSaveStatus({ state: "saving", message: "시험분석 · 저장 중" });
    try {
      const result = await saveExamAnalysisRunContractRequest({
        analysisRun: buildRunPayload(),
        request: postJson
      });
      const savedRun = result.analysisRun;
      setSaveStatus({ state: "success", message: "시험분석 · 저장 완료" });
      if (savedRun?.analysisRunId) {
        await loadRuns(savedRun.analysisRunId);
      }
    } catch (error) {
      setSaveStatus({ state: "failed", message: `시험분석 · 저장 실패 · ${error.message}` });
    }
  }

  async function deleteSelectedAnalysisRun() {
    const targetRun = activeRun;
    if (!targetRun?.analysisRunId) return;
    const confirmMessage = `${getExamAnalysisRunTitle(targetRun)} 분석과 연결된 PDF 원본을 삭제할까요?`;
    if (!window.confirm(confirmMessage)) return;
    setDeletingRunId(targetRun.analysisRunId);
    setDeleteStatus({ state: "saving", message: "시험분석 · 삭제 중" });
    try {
      await deleteExamAnalysisRunRequest(targetRun.analysisRunId);
      setAnalysisRuns((current) => current.filter((run) => run.analysisRunId !== targetRun.analysisRunId));
      setSelectedRunId("");
      setSelectedDetail(null);
      setDeleteStatus({ state: "success", message: "시험분석 · 삭제 완료" });
      await loadRuns("");
    } catch (error) {
      setDeleteStatus({ state: "failed", message: `시험분석 · 삭제 실패 · ${error.message}` });
    } finally {
      setDeletingRunId("");
    }
  }

  async function uploadPdf(file) {
    if (!file) return;
    const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name);
    if (!isPdf) {
      setUploadStatus({ state: "failed", message: "시험분석 PDF · PDF 파일만 업로드할 수 있습니다." });
      return;
    }

    setUploadStatus({ state: "saving", message: "시험분석 PDF · 업로드 중" });
    try {
      const dataUrl = await readFileAsDataUrl(file);
      const result = await postJsonWithTimeout(
        "/api/exam-analysis-source-files",
        {
          ...buildRunPayload(),
          analysisRunId: selectedRunId || undefined,
          analysisRun: buildRunPayload(),
          dataUrl,
          fileName: file.name,
          fileType: file.type
        },
        90000,
        "시험분석 PDF 업로드가 지연되고 있습니다."
      );
      const nextRunId = result.analysisRun?.analysisRunId || selectedRunId;
      setUploadStatus({ state: "success", message: "시험분석 PDF · 업로드 완료" });
      if (nextRunId) {
        await loadRuns(nextRunId);
        await loadRunDetail(nextRunId);
      }
    } catch (error) {
      setUploadStatus({ state: "failed", message: `시험분석 PDF · 업로드 실패 · ${error.message}` });
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  async function deleteSourceFile(sourceFile) {
    if (!sourceFile?.sourceId) return;
    const isLastSource = sourceFiles.length <= 1;
    const confirmMessage = isLastSource
      ? `${sourceFile.originalFileName || "PDF 원본"} 파일을 삭제할까요?\n마지막 PDF 원본입니다. 문항 행과 검수 저장본은 유지되지만 이후 PDF 확인/AI 실행에는 원본이 필요합니다.`
      : `${sourceFile.originalFileName || "PDF 원본"} 파일 1건을 삭제할까요?\n문항 행과 검수 저장본은 유지됩니다.`;
    if (!window.confirm(confirmMessage)) return;
    setDeletingSourceId(sourceFile.sourceId);
    setSourceDeleteStatus({ state: "saving", message: "시험분석 PDF · 삭제 중" });
    try {
      await deleteExamAnalysisSourceRequest(sourceFile.sourceId);
      setSourceDeleteStatus({ state: "success", message: "시험분석 PDF · 삭제 완료" });
      if (activeRun?.analysisRunId) {
        await loadRuns(activeRun.analysisRunId);
        await loadRunDetail(activeRun.analysisRunId);
      } else {
        await loadRuns(selectedRunId);
      }
    } catch (error) {
      setSourceDeleteStatus({ state: "failed", message: `시험분석 PDF · 삭제 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setDeletingSourceId("");
    }
  }

  function handlePdfDragEvent(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function handlePdfDragEnter(event) {
    handlePdfDragEvent(event);
    setIsPdfDropActive(true);
  }

  function handlePdfDragLeave(event) {
    handlePdfDragEvent(event);
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPdfDropActive(false);
    }
  }

  async function handlePdfDrop(event) {
    handlePdfDragEvent(event);
    setIsPdfDropActive(false);
    const file = [...(event.dataTransfer?.files ?? [])].find((item) => (
      item.type === "application/pdf" || /\.pdf$/i.test(item.name)
    ));
    if (!file) {
      setUploadStatus({ state: "failed", message: "시험분석 PDF · PDF 파일만 드롭할 수 있습니다." });
      return;
    }
    await uploadPdf(file);
  }

  async function extractSourceText(sourceFile) {
    if (!sourceFile?.sourceId) return;
    setExtractingSourceId(sourceFile.sourceId);
    setExtractStatus({ state: "saving", message: "시험분석 PDF · 텍스트 추출 중" });
    try {
      const result = await extractExamAnalysisSourceRequest(sourceFile.sourceId);
      const textBytes = result.extraction?.textBytes ?? result.sourceFile?.extractedText?.length ?? 0;
      setExtractStatus({
        state: "success",
        message: `시험분석 PDF · 텍스트 추출 완료 · ${result.sourceFile?.pageCount || result.extraction?.pageCount || 0}쪽 · ${formatBytes(textBytes)}`
      });
      if (result.analysisRun?.analysisRunId) {
        await loadRuns(result.analysisRun.analysisRunId);
        await loadRunDetail(result.analysisRun.analysisRunId);
      } else if (selectedRunId) {
        await loadRunDetail(selectedRunId);
      }
    } catch (error) {
      setExtractStatus({ state: "failed", message: `시험분석 PDF · 텍스트 추출 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setExtractingSourceId("");
    }
  }

  async function verifySourceWithAi(sourceFile) {
    if (!sourceFile?.sourceId) return;
    setCheckingSourceId(sourceFile.sourceId);
    setVisionStatus({ state: "saving", message: "시험분석 PDF · AI 검증 중" });
    try {
      const result = await verifyExamAnalysisSourceWithAiRequest(sourceFile.sourceId);
      const questionCount = result.visionCheck?.questionCountCandidate || result.visionCheck?.questionNumberCandidates?.length || 0;
      const providerLabel = result.visionCheck?.provider === "anthropic" ? "Claude" : result.visionCheck?.provider === "openai" ? "OpenAI" : "AI";
      setVisionStatus({
        state: "success",
        message: `시험분석 PDF · ${providerLabel} 검증 완료 · ${result.visionCheck?.pageCount || 0}쪽 · 문항 후보 ${questionCount}개`
      });
      if (result.analysisRun?.analysisRunId) {
        await loadRuns(result.analysisRun.analysisRunId);
        await loadRunDetail(result.analysisRun.analysisRunId);
      } else if (selectedRunId) {
        await loadRunDetail(selectedRunId);
      }
    } catch (error) {
      setVisionStatus({ state: "failed", message: `시험분석 PDF · AI 검증 실패 · ${error.message}` });
    } finally {
      setCheckingSourceId("");
    }
  }

  async function confirmQuestionCount() {
    if (!activeRun?.analysisRunId) {
      setConfirmStatus({ state: "failed", message: "시험분석 · 분석을 먼저 저장해 주세요." });
      return;
    }
    const questionCount = Number(questionCountDraft);
    if (!Number.isInteger(questionCount) || questionCount < 1 || questionCount > 200) {
      setConfirmStatus({ state: "failed", message: "시험분석 · 문항 수는 1~200 사이의 정수로 입력해 주세요." });
      return;
    }

    setIsConfirmingQuestionCount(true);
    setConfirmStatus({ state: "saving", message: "시험분석 · 문항 수 확정 중" });
    try {
      const result = await confirmExamAnalysisQuestionCountRequest({
        analysisRunId: activeRun.analysisRunId,
        questionCount,
        detectedQuestionConfidence: questionCountCandidate.confidence,
        detectedQuestionEvidence: questionCountCandidate.detectedQuestionEvidence,
        missingQuestionNumbers: questionCountCandidate.missingQuestionNumbers,
        confirmedBy: "teacher"
      });
      const rowCount = result.questions?.length || questionCount;
      setSelectedDetail(result);
      setConfirmStatus({
        state: "success",
        message: `시험분석 · 문항 수 확정 완료 · ${questionCount}문항 · ${rowCount}행`
      });
      await loadRuns(activeRun.analysisRunId);
      await loadRunDetail(activeRun.analysisRunId);
    } catch (error) {
      setConfirmStatus({ state: "failed", message: `시험분석 · 문항 수 확정 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setIsConfirmingQuestionCount(false);
    }
  }

  async function detectQuestionBoundaries() {
    if (!activeRun?.analysisRunId) {
      setBoundaryStatus({ state: "failed", message: "시험분석 · 분석을 먼저 저장해 주세요." });
      return;
    }
    if (!questionRows.length) {
      setBoundaryStatus({ state: "failed", message: "시험분석 · 문항 수를 먼저 확정해 주세요." });
      return;
    }
    const sourceFile = sourceFiles[0];
    if (!sourceFile?.sourceId) {
      setBoundaryStatus({ state: "failed", message: "시험분석 · PDF 원본이 필요합니다." });
      return;
    }

    setIsDetectingBoundaries(true);
    setBoundaryStatus({ state: "saving", message: "시험분석 · 문항 경계 탐지 중" });
    try {
      const result = await detectExamAnalysisQuestionBoundariesRequest({
        analysisRunId: activeRun.analysisRunId,
        sourceId: sourceFile.sourceId
      });
      const detectedCount = result.boundaryDetection?.detectedCount || result.boundaryResult?.detectedCount || 0;
      const totalCount = result.boundaryDetection?.totalQuestionCount || questionRows.length;
      setSelectedDetail(result);
      setBoundaryStatus({
        state: "success",
        message: `시험분석 · 문항 경계 탐지 완료 · ${detectedCount}/${totalCount}개`
      });
      await loadRuns(activeRun.analysisRunId);
      await loadRunDetail(activeRun.analysisRunId);
    } catch (error) {
      setBoundaryStatus({ state: "failed", message: `시험분석 · 문항 경계 탐지 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setIsDetectingBoundaries(false);
    }
  }

  async function fillQuestionRowsWithAi() {
    if (!activeRun?.analysisRunId) {
      setRowFillStatus({ state: "failed", message: "시험분석 · 분석을 먼저 저장해 주세요." });
      return;
    }
    if (!questionRows.length) {
      setRowFillStatus({ state: "failed", message: "시험분석 · 문항 수를 먼저 확정해 주세요." });
      return;
    }
    if (!boundaryDetectedCount) {
      setRowFillStatus({ state: "failed", message: "시험분석 · 문항 경계를 먼저 탐지해 주세요." });
      return;
    }
    const sourceFile = sourceFiles[0];
    if (!sourceFile?.sourceId) {
      setRowFillStatus({ state: "failed", message: "시험분석 · PDF 원본이 필요합니다." });
      return;
    }

    setIsFillingRows(true);
    setRowFillStatus({ state: "saving", message: "시험분석 · AI 행 채움 중" });
    try {
      const result = await fillExamAnalysisQuestionRowsRequest({
        analysisRunId: activeRun.analysisRunId,
        sourceId: sourceFile.sourceId
      });
      const filledCount = result.rowFill?.filledCount || result.questions?.filter((question) => question.rowStatus === "ai_filled").length || 0;
      const totalCount = result.rowFill?.totalQuestionCount || questionRows.length;
      setSelectedDetail(result);
      setRowFillStatus({
        state: "success",
        message: `시험분석 · AI 행 채움 완료 · ${filledCount}/${totalCount}개`
      });
      await loadRuns(activeRun.analysisRunId);
      await loadRunDetail(activeRun.analysisRunId);
    } catch (error) {
      setRowFillStatus({ state: "failed", message: `시험분석 · AI 행 채움 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setIsFillingRows(false);
    }
  }

  function getSsenTypeByCode(typeCode = "") {
    return (ssenCatalog.types ?? []).find((item) => item.typeCode === typeCode) ?? null;
  }

  function getSsenUnitByKey(unitKey = "") {
    return (ssenCatalog.units ?? []).find((item) => item.key === unitKey) ?? null;
  }

  function getReviewDraftUnitKey(draftValue = {}) {
    if (draftValue.unitKey && getSsenUnitByKey(draftValue.unitKey)) return draftValue.unitKey;
    const mainType = getSsenTypeByCode(draftValue.mainTypeCode);
    if (mainType) return createExamAnalysisSsenUnitKey(mainType);
    const unit = (ssenCatalog.units ?? []).find((item) => item.unitName === draftValue.unitName);
    return unit?.key ?? "";
  }

  function getSsenTypesForReviewDraft(draftValue = {}) {
    const unitKey = getReviewDraftUnitKey(draftValue);
    const types = Array.isArray(ssenCatalog.types) ? ssenCatalog.types : [];
    if (!unitKey) return types;
    const unit = getSsenUnitByKey(unitKey);
    if (!unit) return types;
    return types.filter((item) => createExamAnalysisSsenUnitKey(item) === unit.key);
  }

  function selectReviewSsenUnit(questionNumber, unitKey) {
    const unit = getSsenUnitByKey(unitKey);
    updateReviewDraft(questionNumber, {
      unitKey: unit?.key ?? "",
      partName: unit?.partName ?? "",
      unitNo: unit?.unitNo ?? "",
      unitName: unit?.unitName ?? "",
      mainType: "",
      mainTypeCode: "",
      subTypesText: "",
      subTypeCodes: [],
      ssenMeta: { source: "ssen_type_index", matchStatus: "unit_selected", mainType: {}, subTypes: [] }
    });
  }

  function selectReviewMainType(questionNumber, typeCode) {
    const type = getSsenTypeByCode(typeCode);
    if (!type) {
      updateReviewDraft(questionNumber, {
        mainType: "",
        mainTypeCode: "",
        ssenMeta: { source: "ssen_type_index", matchStatus: "needs_mapping", mainType: {}, subTypes: [] }
      });
      return;
    }
    const nextSubTypeCodes = [];
    updateReviewDraft(questionNumber, {
      unitKey: createExamAnalysisSsenUnitKey(type),
      partName: type.partName,
      unitNo: type.unitNo,
      unitName: type.unitName,
      mainType: type.typeName,
      mainTypeCode: type.typeCode,
      subTypesText: "",
      subTypeCodes: nextSubTypeCodes,
      ssenMeta: createExamAnalysisReviewSsenMeta({ catalog: ssenCatalog, mainTypeCode: type.typeCode, subTypeCodes: nextSubTypeCodes })
    });
  }

  function addReviewSubType(questionNumber, draftValue = {}, typeCode = "") {
    const type = getSsenTypeByCode(typeCode);
    if (!type) return;
    const nextSubTypeCodes = [...new Set([...normalizeExamAnalysisSsenCodeList(draftValue.subTypeCodes), type.typeCode])]
      .filter((code) => code !== draftValue.mainTypeCode)
      .slice(0, 3);
    const nextSubTypes = nextSubTypeCodes.map(getSsenTypeByCode).filter(Boolean);
    updateReviewDraft(questionNumber, {
      subTypeCodes: nextSubTypeCodes,
      subTypesText: nextSubTypes.map((item) => item.typeName).join(", "),
      ssenMeta: createExamAnalysisReviewSsenMeta({
        catalog: ssenCatalog,
        mainTypeCode: draftValue.mainTypeCode,
        subTypeCodes: nextSubTypeCodes
      })
    });
  }

  function removeReviewSubType(questionNumber, draftValue = {}, typeCode = "") {
    const nextSubTypeCodes = normalizeExamAnalysisSsenCodeList(draftValue.subTypeCodes).filter((code) => code !== typeCode);
    const nextSubTypes = nextSubTypeCodes.map(getSsenTypeByCode).filter(Boolean);
    updateReviewDraft(questionNumber, {
      subTypeCodes: nextSubTypeCodes,
      subTypesText: nextSubTypes.map((item) => item.typeName).join(", "),
      ssenMeta: createExamAnalysisReviewSsenMeta({
        catalog: ssenCatalog,
        mainTypeCode: draftValue.mainTypeCode,
        subTypeCodes: nextSubTypeCodes
      })
    });
  }

  function updateReviewDraft(questionNumber, patch) {
    const key = String(questionNumber);
    const question = questionRows.find((row) => String(row.questionNumber) === key);
    const seededDraft = question ? createExamAnalysisReviewDraft(question) : {};
    setReviewDrafts((current) => ({
      ...current,
      [key]: {
        ...seededDraft,
        ...(current[key] ?? {}),
        ...patch
      }
    }));
    setReviewStatus({ state: "dirty", message: "시험분석 · 수정됨 · 저장 필요" });
  }

  function markAllQuestionReviewsConfirmed() {
    setReviewDrafts((current) => {
      const seededDrafts = buildExamAnalysisReviewDrafts(questionRows);
      return Object.fromEntries(
        questionRows.map((question) => {
          const key = String(question.questionNumber);
          return [
            key,
            {
              ...(seededDrafts[key] ?? {}),
              ...(current[key] ?? {}),
              confirmed: true
            }
          ];
        })
      );
    });
    setReviewStatus({ state: "dirty", message: "시험분석 · 확정 변경됨 · 저장 필요" });
  }

  function buildQuestionReviewPayload() {
    return questionRows.map((question) => {
      const key = String(question.questionNumber);
      const draftValue = enrichExamAnalysisReviewDraftWithSsenCatalog(
        reviewDrafts[key] ?? createExamAnalysisReviewDraft(question),
        ssenCatalog
      );
      const subTypeCodes = normalizeExamAnalysisSsenCodeList(draftValue.subTypeCodes);
      const ssenMeta = draftValue.ssenMeta?.matchStatus === "matched"
        ? draftValue.ssenMeta
        : createExamAnalysisReviewSsenMeta({
            catalog: ssenCatalog,
            mainTypeCode: draftValue.mainTypeCode,
            subTypeCodes
          });
      return {
        questionNumber: Number(question.questionNumber),
        unitName: draftValue.unitName ?? "",
        mainType: draftValue.mainType ?? "",
        subTypes: parseExamAnalysisReviewSubTypes(draftValue.subTypesText),
        mainTypeCode: draftValue.mainTypeCode ?? "",
        subTypeCodes,
        ssenMeta,
        difficulty: draftValue.difficulty ?? "",
        reviewNote: draftValue.reviewNote ?? "",
        isImportantQuestion: Boolean(draftValue.isImportantQuestion),
        confirmed: Boolean(draftValue.confirmed)
      };
    });
  }

  function getQuestionReviewRefineTargetNumbers() {
    return questionRows
      .filter((question) => {
        const draftValue = reviewDrafts[String(question.questionNumber)] ?? createExamAnalysisReviewDraft(question);
        return isExamAnalysisQuestionRefineTarget(question, draftValue);
      })
      .map((question) => Number(question.questionNumber))
      .filter((number) => Number.isInteger(number) && number > 0)
      .sort((a, b) => a - b);
  }

  async function refineQuestionRowsWithAi() {
    if (!activeRun?.analysisRunId) {
      setRowRefineStatus({ state: "failed", message: "시험분석 · 분석을 먼저 저장해 주세요." });
      return;
    }
    const targetQuestionNumbers = getQuestionReviewRefineTargetNumbers();
    if (!targetQuestionNumbers.length) {
      setRowRefineStatus({ state: "failed", message: "시험분석 · AI 2차 수정 대상 문항이 없습니다." });
      return;
    }
    const sourceFile = sourceFiles[0];
    if (!sourceFile?.sourceId) {
      setRowRefineStatus({ state: "failed", message: "시험분석 · PDF 원본이 필요합니다." });
      return;
    }

    setIsRefiningRows(true);
    setRowRefineStatus({ state: "saving", message: `시험분석 · AI 2차 수정 중 · ${targetQuestionNumbers.join(", ")}번` });
    try {
      const result = await refineExamAnalysisQuestionRowsRequest({
        analysisRunId: activeRun.analysisRunId,
        sourceId: sourceFile.sourceId,
        targetQuestionNumbers
      });
      const updatedCount = result.analysisRun?.auditSummary?.rowRefine?.updatedCount || result.rowRefine?.updatedCount || result.rowRefineResult?.returnedCount || 0;
      const targetCount = result.analysisRun?.auditSummary?.rowRefine?.targetQuestionNumbers?.length || targetQuestionNumbers.length;
      setSelectedDetail(result);
      setRowRefineStatus({
        state: "success",
        message: `시험분석 · AI 2차 수정 완료 · ${updatedCount}/${targetCount}개`
      });
      await loadRuns(activeRun.analysisRunId);
      await loadRunDetail(activeRun.analysisRunId);
    } catch (error) {
      setRowRefineStatus({ state: "failed", message: `시험분석 · AI 2차 수정 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setIsRefiningRows(false);
    }
  }

  async function saveQuestionReviews() {
    if (!activeRun?.analysisRunId) {
      setReviewStatus({ state: "failed", message: "시험분석 · 분석을 먼저 저장해 주세요." });
      return;
    }
    if (!questionRows.length) {
      setReviewStatus({ state: "failed", message: "시험분석 · 검수할 문항 행이 없습니다." });
      return;
    }

    setIsSavingReviews(true);
    setReviewStatus({ state: "saving", message: "시험분석 · 검수 저장 중" });
    try {
      const requestedReviews = buildQuestionReviewPayload();
      const result = await saveExamAnalysisQuestionReviewsRequest({
        analysisRunId: activeRun.analysisRunId,
        reviews: requestedReviews
      });
      if (result.source !== "supabase") throw new Error("문항 검수 저장 후 Supabase 재조회 결과가 없습니다.");
      const reviewMismatches = getExamAnalysisReviewSaveMismatches(requestedReviews, result.questions);
      if (reviewMismatches.length) {
        throw new Error(`Supabase 재조회 값이 문항 검수 요청과 다릅니다: ${reviewMismatches.join(", ")}번`);
      }
      const totalCount = result.teacherReview?.totalQuestionCount || result.questions?.length || questionRows.length;
      const confirmedCount = result.teacherReview?.confirmedCount || result.questions?.filter((question) => question.rowStatus === "confirmed").length || 0;
      setSelectedDetail(result);
      setReviewDrafts(buildExamAnalysisReviewDrafts(result.questions ?? []));
      setEditingSsenQuestionNumber("");
      setReviewStatus({
        state: "success",
        message: `시험분석 · 검수 저장 완료 · ${confirmedCount}/${totalCount}개 확정`
      });
      await loadRuns(activeRun.analysisRunId);
      await loadRunDetail(activeRun.analysisRunId);
    } catch (error) {
      setReviewStatus({ state: "failed", message: `시험분석 · 검수 저장 실패 · ${error.message}` });
    } finally {
      setIsSavingReviews(false);
    }
  }

  function updateOutputInput(key, value) {
    setOutputDrafts((current) => ({
      ...current,
      inputs: {
        ...current.inputs,
        [key]: value
      }
    }));
    setOutputStatus({ state: "dirty", message: "시험분석 산출물 · 수정됨 · 저장 필요" });
  }

  function updateOutputKeyQuestionBlock(blockId, fieldKey, value) {
    setOutputDrafts((current) => {
      const currentBlocks = normalizeExamAnalysisKeyQuestionBlocks(current.inputs);
      return {
        ...current,
        inputs: {
          ...current.inputs,
          keyQuestionBlocks: currentBlocks.map((block) => (
            block.blockId === blockId ? { ...block, [fieldKey]: value } : block
          ))
        }
      };
    });
    setOutputStatus({ state: "dirty", message: "시험분석 산출물 · 주요문항 수정됨 · 저장 필요" });
  }

  function addOutputKeyQuestionBlock() {
    setOutputDrafts((current) => {
      const currentBlocks = normalizeExamAnalysisKeyQuestionBlocks(current.inputs);
      const nextIndex = currentBlocks.length + 1;
      const nextBlock = {
        ...createEmptyExamAnalysisKeyQuestionBlock(nextIndex),
        blockId: `key-question-${Date.now()}-${nextIndex}`
      };
      return {
        ...current,
        inputs: {
          ...current.inputs,
          keyQuestionBlocks: [...currentBlocks, nextBlock]
        }
      };
    });
    setOutputStatus({ state: "dirty", message: "시험분석 산출물 · 주요문항 추가됨 · 저장 필요" });
  }

  function removeOutputKeyQuestionBlock(blockId) {
    setOutputDrafts((current) => {
      const currentBlocks = normalizeExamAnalysisKeyQuestionBlocks(current.inputs);
      const nextBlocks = currentBlocks.length > 1
        ? currentBlocks.filter((block) => block.blockId !== blockId)
        : currentBlocks;
      return {
        ...current,
        inputs: {
          ...current.inputs,
          keyQuestionBlocks: nextBlocks
        }
      };
    });
    setOutputStatus({ state: "dirty", message: "시험분석 산출물 · 주요문항 삭제됨 · 저장 필요" });
  }

  function updateOutputTeacherDraft(outputType, value) {
    setOutputDrafts((current) => ({
      ...current,
      [outputType]: {
        ...current[outputType],
        teacherDraft: value,
        teacherTouched: true,
        teacherUpdatedAt: current[outputType]?.teacherUpdatedAt || new Date().toISOString()
      }
    }));
    setOutputStatus({ state: "dirty", message: "시험분석 산출물 · 수정됨 · 저장 필요" });
  }

  async function saveOutputDrafts() {
    if (!activeRun?.analysisRunId) {
      setOutputStatus({ state: "failed", message: "시험분석 산출물 · 분석을 먼저 저장해 주세요." });
      return;
    }
    setIsSavingOutputDrafts(true);
    setOutputStatus({ state: "saving", message: "시험분석 산출물 · 저장 중" });
    try {
      const requestedDrafts = outputDrafts;
      const result = await saveExamAnalysisOutputDraftsRequest({
        analysisRunId: activeRun.analysisRunId,
        outputInputs: requestedDrafts.inputs,
        blogTeacherDraft: requestedDrafts.blog.teacherDraft,
        instagramTeacherDraft: requestedDrafts.instagram.teacherDraft,
        blogTeacherDraftEdited: Boolean(requestedDrafts.blog.teacherTouched),
        instagramTeacherDraftEdited: Boolean(requestedDrafts.instagram.teacherTouched)
      });
      if (result.source !== "supabase") throw new Error("산출물 저장 후 Supabase 재조회 결과가 없습니다.");
      const persistedDrafts = getExamAnalysisOutputDraftsFromRun(result.analysisRun);
      const outputMismatches = getExamAnalysisOutputSaveMismatches(requestedDrafts, persistedDrafts);
      if (outputMismatches.length) {
        throw new Error(`Supabase 재조회 값이 산출물 저장 요청과 다릅니다: ${outputMismatches.join(", ")}`);
      }
      setSelectedDetail(result);
      setOutputDrafts(persistedDrafts);
      setOutputStatus({ state: "success", message: "시험분석 산출물 · 저장 완료" });
      await loadRuns(activeRun.analysisRunId);
      await loadRunDetail(activeRun.analysisRunId);
    } catch (error) {
      setOutputStatus({ state: "failed", message: `시험분석 산출물 · 저장 실패 · ${error.message}` });
    } finally {
      setIsSavingOutputDrafts(false);
    }
  }

  async function generateOutputDraft(outputType) {
    if (!activeRun?.analysisRunId) {
      setOutputStatus({ state: "failed", message: "시험분석 산출물 · 분석을 먼저 저장해 주세요." });
      return;
    }
    const keyQuestionValues = normalizeExamAnalysisKeyQuestionBlocks(outputDrafts.inputs)
      .flatMap((block) => examAnalysisKeyQuestionBlockFields.map((field) => block[field.key]));
    const inputValues = [
      ...examAnalysisOutputAllInputFields.map((field) => outputDrafts.inputs[field.key]),
      ...keyQuestionValues
    ];
    if (!inputValues.some((value) => String(value || "").trim())) {
      setOutputStatus({ state: "failed", message: "시험분석 산출물 · 먼저 기본 메모 또는 블로그 흐름 블록 중 하나 이상을 작성해 주세요." });
      return;
    }
    const section = outputDrafts[outputType] ?? {};
    const hasTeacherDraft = Boolean(section.teacherTouched || section.teacherUpdatedAt || section.teacherDraft);
    const hasUnsavedTeacherDraft = Boolean(section.teacherTouched);
    if (hasTeacherDraft && !window.confirm("선생님 수정본은 유지하고 AI 초안만 다시 생성할까요?")) {
      return;
    }
    setGeneratingOutputType(outputType);
    setOutputStatus({
      state: "saving",
      message: outputType === "blog" ? "시험분석 산출물 · 블로그 초안 생성 중" : "시험분석 산출물 · 인스타 카드 초안 생성 중"
    });
    try {
      const result = await generateExamAnalysisOutputDraftRequest({
        analysisRunId: activeRun.analysisRunId,
        outputType,
        outputInputs: outputDrafts.inputs
      });
      const generatedDrafts = getExamAnalysisOutputDraftsFromRun(result.analysisRun);
      setSelectedDetail(result);
      setOutputDrafts(hasUnsavedTeacherDraft
        ? mergeExamAnalysisOutputDraftsPreservingLocalEdits(generatedDrafts, outputDrafts)
        : generatedDrafts);
      setOutputStatus({
        state: hasUnsavedTeacherDraft ? "dirty" : "success",
        message: hasUnsavedTeacherDraft
          ? (outputType === "blog"
              ? "시험분석 산출물 · 블로그 초안 생성 완료 · 선생님 수정본 저장 필요"
              : "시험분석 산출물 · 인스타 카드 초안 생성 완료 · 선생님 수정본 저장 필요")
          : (outputType === "blog" ? "시험분석 산출물 · 블로그 초안 생성 완료" : "시험분석 산출물 · 인스타 카드 초안 생성 완료")
      });
      await loadRuns(activeRun.analysisRunId);
      await loadRunDetail(activeRun.analysisRunId);
    } catch (error) {
      setOutputStatus({ state: "failed", message: `시험분석 산출물 · 초안 생성 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setGeneratingOutputType("");
    }
  }

  async function copyOutputDraft(outputType, text) {
    const copied = await copyTextToClipboard(text);
    const label = outputType === "instagram" ? "인스타 카드 초안" : "블로그 초안";
    setOutputStatus({
      state: copied ? "success" : "failed",
      message: copied ? `시험분석 산출물 · ${label} 복사 완료` : `시험분석 산출물 · ${label} 복사 실패`
    });
  }

  async function copyOutputText(label, text) {
    const copied = await copyTextToClipboard(text);
    setOutputStatus({
      state: copied ? "success" : "failed",
      message: copied ? `시험분석 산출물 · ${label} 복사 완료` : `시험분석 산출물 · ${label} 복사 실패`
    });
  }

  function downloadOutputDraft(outputType, text) {
    const label = outputType === "instagram" ? "인스타 카드 초안" : "블로그 초안";
    const downloaded = downloadExamAnalysisOutputTextFile({
      activeRun: activeRun ?? {},
      outputType,
      text
    });
    setOutputStatus({
      state: downloaded ? "success" : "failed",
      message: downloaded ? `시험분석 산출물 · ${label} TXT 내보내기 완료` : `시험분석 산출물 · ${label} 내보낼 내용이 없습니다.`
    });
  }

  async function downloadOutputPackageZip() {
    if (!activeRun?.analysisRunId) {
      setOutputStatus({ state: "failed", message: "시험분석 산출물 · 분석을 먼저 저장해 주세요." });
      return;
    }
    if (!finalPreviewModel?.questions?.length) {
      setOutputStatus({ state: "failed", message: "시험분석 산출물 · 패키지에 넣을 검수 저장본이 없습니다." });
      return;
    }
    setExportingOutputType("package");
    setOutputStatus({ state: "saving", message: "시험분석 산출물 · 산출물 ZIP 생성 중 · 현재 화면 수정본 기준" });
    try {
      const result = await downloadExamAnalysisOutputPackageZip({
        activeRun,
        model: finalPreviewModel,
        outputDrafts
      });
      setOutputStatus({
        state: "success",
        message: `시험분석 산출물 · 산출물 ZIP 완료 · 텍스트 ${result.textCount}개 · PNG ${result.chartCount}개 · SVG ${result.svgCount}개`
      });
    } catch (error) {
      setOutputStatus({ state: "failed", message: `시험분석 산출물 · 산출물 ZIP 실패 · ${error.message}` });
    } finally {
      setExportingOutputType("");
    }
  }

  const confirmedQuestionCount = Number(activeRun?.confirmedQuestionCount || 0);
  const questionRowNumbers = questionRows
    .map((question) => Number(question.questionNumber))
    .filter((number) => Number.isInteger(number) && number > 0)
    .sort((a, b) => a - b);
  const shownQuestionRowNumbers = questionRowNumbers.slice(0, 60);
  const boundaryRows = questionRows.map((question) => ({
    question,
    boundary: getExamAnalysisQuestionBoundary(question)
  }));
  const boundaryDetectedCount = boundaryRows.filter(({ boundary }) => Boolean(boundary?.pageStart)).length;
  const aiFilledRows = questionRows.filter((question) => question.rowStatus === "ai_filled" || question.unitName || question.mainType);
  const aiNeedsReviewRows = questionRows.filter(isExamAnalysisQuestionAiReviewTarget);
  const reviewRowsReady = questionRows.length > 0 && (Boolean(rowFill) || aiFilledRows.length > 0 || Boolean(teacherReview));
  const confirmedReviewCount = questionRows.filter((question) => {
    const draftValue = reviewDrafts[String(question.questionNumber)] ?? createExamAnalysisReviewDraft(question);
    return Boolean(draftValue.confirmed);
  }).length;
  const refineTargetCount = questionRows.filter((question) => {
    const draftValue = reviewDrafts[String(question.questionNumber)] ?? createExamAnalysisReviewDraft(question);
    return isExamAnalysisQuestionRefineTarget(question, draftValue);
  }).length;
  const questionCountButtonLabel = isConfirmingQuestionCount
    ? "확정 중"
    : questionCountDraft
      ? `${questionCountDraft}문항 확정`
      : "문항 수 확정";
  const ssenCatalogLabel = ssenCatalog.status === "scope_matched"
    ? `${ssenCatalog.subject} · 범위 후보 ${ssenCatalog.scopeMatchedCount}개`
    : ssenCatalog.status === "scope_not_matched"
      ? `${ssenCatalog.subject || "과목 미정"} · 범위 매칭 없음 · 과목 전체 ${ssenCatalog.subjectTypeCount}개`
      : ssenCatalog.status === "subject_all"
        ? `${ssenCatalog.subject} · 과목 전체 ${ssenCatalog.subjectTypeCount}개`
        : "과목 확인 필요";
  const examAnalysisStageCollapseKey = activeRun?.analysisRunId || selectedRunId || "draft";
  const questionCountStageComplete = confirmedQuestionCount > 0;
  const boundaryStageComplete = Boolean(boundaryDetection && boundaryDetection.status !== "needs_review");
  const rowFillStageComplete = Boolean(rowFill && rowFill.status !== "needs_review");
  const reviewStageComplete = teacherReview?.status === "completed";
  const examAnalysisWorkspaceTabs = [
    {
      id: "source",
      label: "원본·PDF",
      meta: sourceFiles.length > 0 ? `${sourceFiles.length}개 저장` : "준비",
      tone: sourceFiles.length > 0 ? "complete" : "idle"
    },
    {
      id: "structure",
      label: "문항 구조",
      meta: boundaryStageComplete ? `${confirmedQuestionCount}문항` : questionCountStageComplete ? "경계 확인" : "대기",
      tone: boundaryStageComplete ? "complete" : questionCountStageComplete ? "attention" : "idle"
    },
    {
      id: "analysis",
      label: "AI 분석",
      meta: rowFillStageComplete ? `${aiFilledRows.length}/${questionRows.length}` : "대기",
      tone: rowFillStageComplete ? (aiNeedsReviewRows.length > 0 ? "attention" : "complete") : "idle"
    },
    {
      id: "review",
      label: "선생님 검수",
      meta: reviewStageComplete ? "완료" : reviewRowsReady ? `${confirmedReviewCount}/${questionRows.length}` : "대기",
      tone: reviewStageComplete ? "complete" : reviewRowsReady ? "attention" : "idle"
    },
    {
      id: "preview",
      label: "최종 미리보기",
      meta: reviewStageComplete ? "확인 가능" : "검수 후",
      tone: reviewStageComplete ? "complete" : "idle"
    },
    {
      id: "output",
      label: "산출물",
      meta: outputStatus.state === "dirty" ? "저장 필요" : outputStatus.state === "success" ? "저장 완료" : "초안",
      tone: outputStatus.state === "dirty" ? "attention" : outputStatus.state === "success" ? "complete" : "idle"
    },
    {
      id: "history",
      label: "기록",
      meta: events.length > 0 ? `${events.length}건` : "없음",
      tone: events.length > 0 ? "complete" : "idle"
    }
  ];
  const questionCountStageCollapsed = isExamAnalysisStageCollapsed("question-count", questionCountStageComplete);
  const boundaryStageCollapsed = isExamAnalysisStageCollapsed("boundary", boundaryStageComplete);
  const rowFillStageCollapsed = isExamAnalysisStageCollapsed("row-fill", rowFillStageComplete);
  const reviewStageCollapsed = isExamAnalysisStageCollapsed("review", reviewStageComplete);

  function getExamAnalysisStageCollapseOverrideKey(stageKey) {
    return `${examAnalysisStageCollapseKey}:${stageKey}`;
  }

  function isExamAnalysisStageCollapsed(stageKey, defaultCollapsed) {
    const overrideKey = getExamAnalysisStageCollapseOverrideKey(stageKey);
    const overrideValue = examAnalysisStageCollapseOverrides[overrideKey];
    return typeof overrideValue === "boolean" ? overrideValue : Boolean(defaultCollapsed);
  }

  function toggleExamAnalysisStage(stageKey, defaultCollapsed) {
    const overrideKey = getExamAnalysisStageCollapseOverrideKey(stageKey);
    setExamAnalysisStageCollapseOverrides((current) => {
      const currentCollapsed = typeof current[overrideKey] === "boolean"
        ? current[overrideKey]
        : Boolean(defaultCollapsed);
      return {
        ...current,
        [overrideKey]: !currentCollapsed
      };
    });
  }

  function selectExamAnalysisWorkspaceTab(tabId) {
    setExamAnalysisWorkspaceTab(tabId);
    const stagesByTab = {
      structure: ["question-count", "boundary"],
      analysis: ["row-fill"],
      review: ["review"]
    };
    const stageKeys = stagesByTab[tabId] ?? [];
    if (stageKeys.length === 0) return;
    setExamAnalysisStageCollapseOverrides((current) => {
      const next = { ...current };
      stageKeys.forEach((stageKey) => {
        next[`${examAnalysisStageCollapseKey}:${stageKey}`] = false;
      });
      return next;
    });
  }

  function renderExamAnalysisStageCollapsedHint(title, isComplete) {
    return (
      <div className="examAnalysisStageCollapsedHint">
        <strong>{isComplete ? `${title} 완료` : `${title} 접힘`}</strong>
        <span>
          {isComplete
            ? "완료된 작업입니다. 펼쳐서 세부 내용과 재실행 버튼을 확인할 수 있습니다."
            : "펼쳐서 입력과 실행 영역을 확인할 수 있습니다."}
        </span>
      </div>
    );
  }

  return (
    <section className="examAnalysisPipelinePage">
      <PageHeader
        actions={(
          <>
          <button className="ghostButton" onClick={() => loadRuns(selectedRunId)} type="button">새로고침</button>
          <button className="primaryButton" onClick={saveRun} type="button">분석 저장</button>
          </>
        )}
        description="PDF 원본 저장과 분석 작업 관리"
        title="시험분석"
      />

      <div className="examAnalysisStatusBar">
        {[loadStatus, saveStatus, uploadStatus, sourceDeleteStatus, extractStatus, visionStatus, confirmStatus, boundaryStatus, rowFillStatus, rowRefineStatus, reviewStatus, outputStatus, deleteStatus].filter((item) => item.message).map((item, index) => (
          <span className={`saveStateBadge ${item.state}`} key={`${item.message}-${index}`}>{item.message}</span>
        ))}
      </div>

      <WorkspaceTabs as="nav" className="examAnalysisWorkspaceTabs" label="시험분석 작업 단계">
        {examAnalysisWorkspaceTabs.map((tab) => (
          <button
            aria-selected={examAnalysisWorkspaceTab === tab.id}
            className={examAnalysisWorkspaceTab === tab.id ? "active" : ""}
            key={tab.id}
            onClick={() => selectExamAnalysisWorkspaceTab(tab.id)}
            role="tab"
            type="button"
          >
            <span>{tab.label}</span>
            <small className={tab.tone}>{tab.meta}</small>
          </button>
        ))}
      </WorkspaceTabs>

      <div className="examAnalysisGrid">
        <section className="examAnalysisLibraryPanel panel">
          <div className="examAnalysisColumnBoard">
            <div className="examAnalysisColumn">
              <div className="examAnalysisColumnHeader">
                <div>
                  <strong>학교</strong>
                  <span>{schoolCards.length}개</span>
                </div>
              </div>
              <div aria-label="시험분석 학교 목록" className="examAnalysisColumnList" role="region" tabIndex={0}>
                {schoolCards.length === 0 ? (
                  <EmptyState className="emptyState compact">학교 없음</EmptyState>
                ) : schoolCards.map((school) => (
                  <button
                    className={selectedSchoolName === school.name ? "examAnalysisColumnCard active" : "examAnalysisColumnCard"}
                    key={school.name}
                    onClick={() => selectSchoolCard(school)}
                    type="button"
                  >
                    <strong>{school.name}</strong>
                    <span>{school.gradeCount}학년 · {school.examCount}고사 · {school.runCount}건</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="examAnalysisColumn">
              <div className="examAnalysisColumnHeader">
                <div>
                  <strong>학년</strong>
                  <span>{gradeCards.length}개</span>
                </div>
              </div>
              <div aria-label="시험분석 학년 목록" className="examAnalysisColumnList" role="region" tabIndex={0}>
                {gradeCards.length === 0 ? (
                  <EmptyState className="emptyState compact">학년 없음</EmptyState>
                ) : gradeCards.map((grade) => (
                  <button
                    className={selectedGrade === grade.name ? "examAnalysisColumnCard active" : "examAnalysisColumnCard"}
                    key={grade.name}
                    onClick={() => selectGradeCard(grade)}
                    type="button"
                  >
                    <strong>{grade.name}</strong>
                    <span>{grade.examCount}고사 · {grade.runCount}건</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="examAnalysisColumn">
              <div className="examAnalysisColumnHeader">
                <div>
                  <strong>고사</strong>
                  <span>{examCycleCards.length}개</span>
                </div>
              </div>
              <div aria-label="시험분석 고사 목록" className="examAnalysisColumnList" role="region" tabIndex={0}>
                {examCycleCards.map((examCycle) => (
                  <button
                    className={selectedExamCycle === examCycle.name ? "examAnalysisColumnCard active" : "examAnalysisColumnCard"}
                    key={examCycle.name}
                    onClick={() => selectExamCycleCard(examCycle)}
                    type="button"
                  >
                    <strong>{examCycle.name}</strong>
                    <span>{examCycle.runCount}건</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="examAnalysisColumn">
              <div className="examAnalysisColumnHeader">
                <div>
                  <strong>분석</strong>
                  <span>{scopedRuns.length}건</span>
                </div>
                <div className="examAnalysisColumnHeaderActions">
                  <button
                    className="dangerSoftButton compact"
                    disabled={!activeRun?.analysisRunId || deletingRunId === activeRun?.analysisRunId}
                    onClick={deleteSelectedAnalysisRun}
                    type="button"
                  >
                    {deletingRunId === activeRun?.analysisRunId ? "삭제 중" : "삭제"}
                  </button>
                </div>
              </div>
              <div aria-label="시험분석 분석본 목록" className="examAnalysisColumnList" role="region" tabIndex={0}>
                {scopedRuns.length === 0 ? (
                  <EmptyState className="emptyState compact">PDF를 업로드하면 분석이 생성됩니다.</EmptyState>
                ) : scopedRuns.map((run) => (
                  <button
                    className={selectedRunId === run.analysisRunId ? "examAnalysisColumnCard active" : "examAnalysisColumnCard"}
                    key={run.analysisRunId}
                    onClick={() => setSelectedRunId(run.analysisRunId)}
                    type="button"
                  >
                    <strong>{getExamAnalysisRunTitle(run)}</strong>
                    <span>{[run.createdAt?.slice(0, 4), workflowStatusLabel(run.workflowStatus), getDefaultExamAnalysisSubject(run)].filter(Boolean).join(" · ")}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="examAnalysisWorkPanel" data-active-tab={examAnalysisWorkspaceTab}>
          <div className="panel examAnalysisFormPanel">
            <SectionHeader
              density="slim"
              description={activeRun ? workflowStatusLabel(activeRun.workflowStatus) : "새 분석"}
              title="기본정보"
              titleAs="strong"
            />
            <div className="examAnalysisFormGrid">
              <label>
                <span>연결 시험정보</span>
                <select
                  value={selectedExamPrepId}
                  onChange={(event) => {
                    const nextId = event.target.value;
                    setSelectedExamPrepId(nextId);
                    if (!nextId) return;
                    applyExamPrepRow(examPrepRows.find((row) => row.examPrepId === nextId));
                  }}
                >
                  <option value="">직접 입력</option>
                  {examPrepRows.map((row) => (
                    <option key={row.examPrepId} value={row.examPrepId}>
                      {[row.schoolName, row.grade, row.subject, row.examCycle || row.examTerm].filter(Boolean).join(" · ")}
                    </option>
                  ))}
                </select>
              </label>
              <label className="span2">
                <span>분석명</span>
                <input value={draft.title} onChange={(event) => setDraft((current) => ({ ...current, title: event.target.value }))} />
              </label>
              <label>
                <span>학교</span>
                <input value={draft.schoolName} onChange={(event) => setDraft((current) => ({ ...current, schoolName: event.target.value }))} />
              </label>
              <label>
                <span>학년</span>
                <input value={draft.grade} onChange={(event) => setDraft((current) => ({ ...current, grade: event.target.value }))} />
              </label>
              <label>
                <span>과목</span>
                <input value={draft.subject} onChange={(event) => setDraft((current) => ({ ...current, subject: event.target.value }))} />
              </label>
              <label>
                <span>고사</span>
                <input value={draft.examCycle || draft.examTerm} onChange={(event) => setDraft((current) => ({ ...current, examCycle: event.target.value }))} />
              </label>
            </div>
            {selectedExamPrepRow ? (
              <div className="examAnalysisLinkedInfo">
                <span>시험기간 {selectedExamPrepRow.examPeriod || "-"}</span>
                <span>수학 시험일 {selectedExamPrepRow.mathExamDate || selectedExamPrepRow.mathExamDates?.[0]?.date || "-"}</span>
                <span>범위 {selectedExamPrepRow.scope || "미입력"}</span>
              </div>
            ) : null}
          </div>

          <div
            className={isPdfDropActive ? "panel examAnalysisUploadPanel dropActive" : "panel examAnalysisUploadPanel"}
            onDragEnter={handlePdfDragEnter}
            onDragLeave={handlePdfDragLeave}
            onDragOver={handlePdfDragEvent}
            onDrop={handlePdfDrop}
          >
            <SectionHeader
              actions={(
                <>
                <input
                  accept="application/pdf,.pdf"
                  aria-label="시험분석 PDF 원본 선택"
                  className="visuallyHiddenInput"
                  onChange={(event) => uploadPdf(event.target.files?.[0])}
                  ref={fileInputRef}
                  type="file"
                />
                <button className="softButton" onClick={() => fileInputRef.current?.click()} type="button">PDF 업로드</button>
                </>
              )}
              actionsClassName="headerActions"
              density="slim"
              description={`${sourceFiles.length}개`}
              title="PDF 원본"
              titleAs="strong"
            />
            <div
              className="examAnalysisDropZone"
              onClick={() => fileInputRef.current?.click()}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  fileInputRef.current?.click();
                }
              }}
              role="button"
              tabIndex={0}
            >
              <strong>PDF 파일을 여기에 드롭</strong>
              <span>또는 PDF 업로드 버튼으로 선택</span>
            </div>
            <div className="examAnalysisSourceList">
              {sourceFiles.length === 0 ? (
                <EmptyState className="emptyState compact">PDF 원본 없음</EmptyState>
              ) : sourceFiles.map((file) => {
                const extractionCheck = buildExamAnalysisExtractionCheck(file);
                const extractionSummary = getExamAnalysisExtractionSummary(activeRun, file.sourceId);
                const extractionWarnings = extractionSummary?.quality?.warnings?.length
                  ? extractionSummary.quality.warnings
                  : extractionCheck.warnings;
                const extractionStatusClass = extractionSummary?.quality?.status === "ok"
                  ? "ok"
                  : extractionWarnings.length
                    ? "needsReview"
                    : extractionCheck.status;
                const visionCheck = getExamAnalysisVisionCheck(activeRun, file.sourceId);
                return (
                  <div className="examAnalysisSourceItem" key={file.sourceId}>
                    <div>
                      <strong>{file.originalFileName || "PDF 원본"}</strong>
                      <span>
                        {examAnalysisSourceStatusLabel(file.extractionStatus)}
                        {" · "}파일 {formatBytes(file.sizeBytes)}
                        {" · "}{file.extractedText ? `추출 ${formatBytes(extractionCheck.textBytes)}` : "텍스트 추출 전"}
                        {file.pageCount ? ` · ${file.pageCount}쪽` : ""}
                        {" · "}{file.createdAt ? file.createdAt.slice(0, 10) : "-"}
                      </span>
                      {file.extractionStatus === "extracted" ? (
                        <div className={`examAnalysisExtractionCheck ${extractionStatusClass}`}>
                          <strong>텍스트 검증</strong>
                          <span>
                            {extractionCheck.pageCount}쪽 · {formatBytes(extractionCheck.textBytes)}
                            {extractionCheck.maxQuestionNumber
                              ? ` · 문항번호 후보 1~${extractionCheck.maxQuestionNumber} (${extractionCheck.questionNumbers.length}개)`
                              : " · 문항번호 후보 없음"}
                          </span>
                          {extractionWarnings.length ? <small>{extractionWarnings.join(" · ")}</small> : <small>빈 페이지와 번호 누락 후보 없음</small>}
                          {formatExamAnalysisPageTextLengthSummary(file.pageTextRanges) ? (
                            <small>{formatExamAnalysisPageTextLengthSummary(file.pageTextRanges)}</small>
                          ) : null}
                        </div>
                      ) : null}
                      {visionCheck ? (
                        <div className={`examAnalysisExtractionCheck ${visionCheck.readable ? "ok" : "needsReview"}`}>
                          <strong>AI 원본 검증</strong>
                          <span>
                            {visionCheck.pageCount || "-"}쪽 · 문항 후보 {visionCheck.questionCountCandidate || visionCheck.questionNumberCandidates?.length || 0}개
                            {visionCheck.answerKeyDetected ? " · 빠른 정답 감지" : ""}
                            {visionCheck.provider ? ` · ${visionCheck.provider}` : ""}
                          </span>
                          {visionCheck.warnings?.length ? <small>{visionCheck.warnings.join(" · ")}</small> : <small>{visionCheck.firstPageEvidence || "원본 PDF를 페이지 이미지 포함으로 검증했습니다."}</small>}
                        </div>
                      ) : null}
                    </div>
                    <div className="examAnalysisSourceActions">
                      <button
                        className="ghostButton"
                        disabled={extractingSourceId === file.sourceId}
                        onClick={() => extractSourceText(file)}
                        type="button"
                      >
                        {extractingSourceId === file.sourceId ? "추출 중" : file.extractionStatus === "extracted" ? "재추출" : "텍스트 추출"}
                      </button>
                      <button
                        className="ghostButton"
                        disabled={checkingSourceId === file.sourceId}
                        onClick={() => verifySourceWithAi(file)}
                        type="button"
                      >
                        {checkingSourceId === file.sourceId ? "검증 중" : "원본 AI 검증"}
                      </button>
                      {getExamAnalysisSourceOpenUrl(file) ? (
                        <a className="ghostButton linkButton" href={getExamAnalysisSourceOpenUrl(file)} rel="noreferrer" target="_blank">열기</a>
                      ) : null}
                      <button
                        className="dangerSoftButton compact"
                        disabled={deletingSourceId === file.sourceId || extractingSourceId === file.sourceId || checkingSourceId === file.sourceId}
                        onClick={() => deleteSourceFile(file)}
                        type="button"
                      >
                        {deletingSourceId === file.sourceId ? "삭제 중" : "삭제"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={questionCountStageCollapsed ? "panel examAnalysisQuestionCountPanel examAnalysisStagePanel collapsed" : "panel examAnalysisQuestionCountPanel examAnalysisStagePanel"} id="exam-analysis-question-count-stage">
            <SectionHeader
              actions={(
                <>
                  {confirmStatus.message ? <span className={`saveStateBadge ${confirmStatus.state}`}>{confirmStatus.message}</span> : null}
                  <button
                    aria-controls="exam-analysis-question-count-stage"
                    aria-expanded={!questionCountStageCollapsed}
                    className="ghostButton"
                    onClick={() => toggleExamAnalysisStage("question-count", questionCountStageComplete)}
                    type="button"
                  >
                    {questionCountStageCollapsed ? "펼치기" : "접기"}
                    <DisclosureChevron open={!questionCountStageCollapsed} />
                  </button>
                </>
              )}
              actionsClassName="headerActions"
              density="slim"
              descriptionNode={(
                <span>
                  {confirmedQuestionCount
                    ? `${confirmedQuestionCount}문항 확정`
                    : questionCountCandidate.count
                      ? `${questionCountCandidate.count}문항 후보`
                      : "대기"}
                </span>
              )}
              title="문항 수 확인"
              titleAs="strong"
            />
            <Disclosure
              hideTrigger
              open={!questionCountStageCollapsed}
              collapsedContent={renderExamAnalysisStageCollapsedHint("문항 수 확인", questionCountStageComplete)}
            >
                <div className="examAnalysisQuestionCountGrid">
                  <div className="examAnalysisQuestionCountCard">
                    <strong>{questionCountCandidate.count ? `${questionCountCandidate.count}문항 후보` : "문항 후보 없음"}</strong>
                    <span>{questionCountCandidate.sourceLabel || "PDF 검증 대기"}</span>
                    <small>{questionCountCandidate.detailLabel}</small>
                    {questionCountCandidate.detectedQuestionEvidence?.length ? (
                      <small>{questionCountCandidate.detectedQuestionEvidence.slice(0, 3).join(" · ")}</small>
                    ) : null}
                    {questionCountCandidate.missingQuestionNumbers?.length ? (
                      <small>누락 후보 {questionCountCandidate.missingQuestionNumbers.join(", ")}</small>
                    ) : null}
                  </div>
                  <div className="examAnalysisQuestionCountConfirm">
                    <label>
                      <span>선생님 확정 문항 수</span>
                      <input
                        inputMode="numeric"
                        max="200"
                        min="1"
                        onChange={(event) => setQuestionCountDraft(event.target.value)}
                        placeholder="예: 24"
                        type="number"
                        value={questionCountDraft}
                      />
                    </label>
                    <button
                      className="softButton"
                      disabled={!activeRun?.analysisRunId || isConfirmingQuestionCount}
                      onClick={confirmQuestionCount}
                      type="button"
                    >
                      {questionCountButtonLabel}
                    </button>
                  </div>
                </div>
                <div className="questionRowsPreview">
                  <div>
                    <strong>고정 문항 행</strong>
                    <span>
                      {questionRowNumbers.length
                        ? `${questionRowNumbers[0]}~${questionRowNumbers.at(-1)}번 · ${questionRowNumbers.length}행`
                        : "문항 수를 확정하면 1~N 빈 행이 생성됩니다."}
                    </span>
                  </div>
                  {questionRowNumbers.length ? (
                    <div className="questionRowsPreviewChips">
                      {shownQuestionRowNumbers.map((number) => <span key={number}>{number}</span>)}
                      {questionRowNumbers.length > shownQuestionRowNumbers.length ? <span>+{questionRowNumbers.length - shownQuestionRowNumbers.length}</span> : null}
                    </div>
                  ) : null}
                </div>
            </Disclosure>
          </div>

          <div className={boundaryStageCollapsed ? "panel examAnalysisBoundaryPanel examAnalysisStagePanel collapsed" : "panel examAnalysisBoundaryPanel examAnalysisStagePanel"} id="exam-analysis-boundary-stage">
            <SectionHeader
              actions={(
                <>
                  {boundaryStatus.message ? <span className={`saveStateBadge ${boundaryStatus.state}`}>{boundaryStatus.message}</span> : null}
                  <button
                    className="ghostButton"
                    disabled={!questionRows.length || !sourceFiles.length || isDetectingBoundaries}
                    onClick={detectQuestionBoundaries}
                    type="button"
                  >
                    {isDetectingBoundaries ? "탐지 중" : "문항 경계 탐지"}
                  </button>
                  <button
                    aria-controls="exam-analysis-boundary-stage"
                    aria-expanded={!boundaryStageCollapsed}
                    className="ghostButton"
                    onClick={() => toggleExamAnalysisStage("boundary", boundaryStageComplete)}
                    type="button"
                  >
                    {boundaryStageCollapsed ? "펼치기" : "접기"}
                    <DisclosureChevron open={!boundaryStageCollapsed} />
                  </button>
                </>
              )}
              actionsClassName="headerActions"
              density="slim"
              descriptionNode={(
                <span>
                  {boundaryRows.length
                    ? `${boundaryDetectedCount}/${boundaryRows.length}개`
                    : "대기"}
                </span>
              )}
              title="문항 경계 탐지"
              titleAs="strong"
            />
            <Disclosure
              hideTrigger
              open={!boundaryStageCollapsed}
              collapsedContent={renderExamAnalysisStageCollapsedHint("문항 경계 탐지", boundaryStageComplete)}
            >
                {boundaryDetection ? (
                  <div className={boundaryDetection.status === "needs_review" ? "examAnalysisBoundarySummary needsReview" : "examAnalysisBoundarySummary ok"}>
                    <strong>{boundaryDetection.status === "needs_review" ? "검토 필요" : "탐지 완료"}</strong>
                    <span>
                      {boundaryDetection.detectedCount || 0}/{boundaryDetection.totalQuestionCount || questionRows.length || 0}개
                      {boundaryDetection.provider ? ` · ${boundaryDetection.provider}` : ""}
                      {boundaryDetection.detectedAt ? ` · ${formatExamAnalysisEventTime(boundaryDetection.detectedAt)}` : ""}
                    </span>
                    {boundaryDetection.missingQuestionNumbers?.length ? <small>누락 {boundaryDetection.missingQuestionNumbers.join(", ")}</small> : null}
                    {boundaryDetection.needsReviewNumbers?.length ? <small>재확인 {boundaryDetection.needsReviewNumbers.join(", ")}</small> : null}
                    {boundaryDetection.overlapWarnings?.length ? <small>{boundaryDetection.overlapWarnings.join(" · ")}</small> : null}
                  </div>
                ) : null}
                {boundaryRows.length ? (
                  <div className="examAnalysisBoundaryGrid">
                    {boundaryRows.map(({ question, boundary }) => (
                      <div className={boundary?.needsReview || !boundary?.pageStart ? "examAnalysisBoundaryCard needsReview" : "examAnalysisBoundaryCard"} key={question.questionRowId || question.questionNumber}>
                        <strong>{question.questionNumber}</strong>
                        <span>{formatExamAnalysisBoundaryPage(boundary)}</span>
                        <small>{boundary?.positionHint || "위치 대기"}</small>
                      </div>
                    ))}
                  </div>
                ) : (
                  <EmptyState className="emptyState compact">고정 문항 행 없음</EmptyState>
                )}
            </Disclosure>
          </div>

          <div className={rowFillStageCollapsed ? "panel examAnalysisRowFillPanel examAnalysisStagePanel collapsed" : "panel examAnalysisRowFillPanel examAnalysisStagePanel"} id="exam-analysis-row-fill-stage">
            <SectionHeader
              actions={(
                <>
                {rowFillStatus.message ? <span className={`saveStateBadge ${rowFillStatus.state}`}>{rowFillStatus.message}</span> : null}
                <button
                  className="ghostButton"
                  disabled={!questionRows.length || !boundaryDetectedCount || isFillingRows}
                  onClick={fillQuestionRowsWithAi}
                  type="button"
                >
                  {isFillingRows ? "채움 중" : "AI 행 채움"}
                </button>
                <button
                  aria-controls="exam-analysis-row-fill-stage"
                  aria-expanded={!rowFillStageCollapsed}
                  className="ghostButton"
                  onClick={() => toggleExamAnalysisStage("row-fill", rowFillStageComplete)}
                  type="button"
                >
                  {rowFillStageCollapsed ? "펼치기" : "접기"}
                  <DisclosureChevron open={!rowFillStageCollapsed} />
                </button>
                </>
              )}
              actionsClassName="headerActions"
              density="slim"
              description={questionRows.length ? `${aiFilledRows.length}/${questionRows.length}개` : "대기"}
              title="AI 행 채움"
              titleAs="strong"
            />
            <Disclosure
              hideTrigger
              open={!rowFillStageCollapsed}
              collapsedContent={renderExamAnalysisStageCollapsedHint("AI 행 채움", rowFillStageComplete)}
            >
                {rowFill ? (
                  <div className={rowFill.status === "needs_review" ? "examAnalysisRowFillSummary needsReview" : "examAnalysisRowFillSummary ok"}>
                    <strong>{rowFill.status === "needs_review" ? "검토 필요" : "채움 완료"}</strong>
                    <span>
                      {rowFill.filledCount || 0}/{rowFill.totalQuestionCount || questionRows.length || 0}개
                      {rowFill.provider ? ` · ${rowFill.provider}` : ""}
                      {rowFill.filledAt ? ` · ${formatExamAnalysisEventTime(rowFill.filledAt)}` : ""}
                    </span>
                    {rowFill.needsReviewNumbers?.length ? <small>재확인 {rowFill.needsReviewNumbers.join(", ")}</small> : null}
                    {rowFill.missingQuestionNumbers?.length ? <small>누락 {rowFill.missingQuestionNumbers.join(", ")}</small> : null}
                  </div>
                ) : null}
                {questionRows.length ? (
                  <div className="examAnalysisRowFillGrid">
                    {questionRows.map((question) => {
                      const needsReview = isExamAnalysisQuestionAiReviewTarget(question);
                      return (
                        <div className={needsReview ? "examAnalysisRowFillCard needsReview" : "examAnalysisRowFillCard"} key={question.questionRowId || question.questionNumber}>
                          <strong>{question.questionNumber}</strong>
                          <span>{question.unitName || "단원 대기"}</span>
                          <small>{question.mainType || "유형 대기"}</small>
                          {question.difficulty ? <em>{question.difficulty}</em> : null}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <EmptyState className="emptyState compact">고정 문항 행 없음</EmptyState>
                )}
                {aiNeedsReviewRows.length ? (
                  <p className="examAnalysisReviewNotice">재확인 문항 {aiNeedsReviewRows.map((question) => question.questionNumber).join(", ")}번은 다음 검수 단계에서 확인해야 합니다.</p>
                ) : null}
            </Disclosure>
          </div>

          <div className={reviewStageCollapsed ? "panel examAnalysisReviewPanel examAnalysisStagePanel collapsed" : "panel examAnalysisReviewPanel examAnalysisStagePanel"} id="exam-analysis-review-stage">
            <SectionHeader
              actions={(
                <>
                {rowRefineStatus.message ? <span className={`saveStateBadge ${rowRefineStatus.state}`}>{rowRefineStatus.message}</span> : null}
                <button
                  className="ghostButton"
                  disabled={!reviewRowsReady || isSavingReviews || isRefiningRows || !refineTargetCount}
                  onClick={refineQuestionRowsWithAi}
                  type="button"
                >
                  {isRefiningRows ? "2차 수정 중" : `AI 2차 수정${refineTargetCount ? ` · ${refineTargetCount}개` : ""}`}
                </button>
                <button
                  className="ghostButton"
                  disabled={!reviewRowsReady || isSavingReviews || isRefiningRows}
                  onClick={markAllQuestionReviewsConfirmed}
                  type="button"
                >
                  모두 확정
                </button>
                <button
                  aria-controls="exam-analysis-review-stage"
                  aria-expanded={!reviewStageCollapsed}
                  className="ghostButton"
                  onClick={() => toggleExamAnalysisStage("review", reviewStageComplete)}
                  type="button"
                >
                  {reviewStageCollapsed ? "펼치기" : "접기"}
                  <DisclosureChevron open={!reviewStageCollapsed} />
                </button>
                </>
              )}
              actionsClassName="headerActions"
              density="slim"
              description={questionRows.length ? `${confirmedReviewCount}/${questionRows.length}개 확정` : "대기"}
              title="AI 결과 검수"
              titleAs="strong"
            />
            <Disclosure
              hideTrigger
              open={!reviewStageCollapsed}
              collapsedContent={renderExamAnalysisStageCollapsedHint("AI 결과 검수", reviewStageComplete)}
            >
                {teacherReview ? (
                  <div className={teacherReview.status === "completed" ? "examAnalysisReviewSummary ok" : "examAnalysisReviewSummary needsReview"}>
                    <strong>{teacherReview.status === "completed" ? "검수 완료" : "검수 진행 중"}</strong>
                    <span>
                      {teacherReview.confirmedCount || 0}/{teacherReview.totalQuestionCount || questionRows.length || 0}개
                      {teacherReview.reviewedAt ? ` · ${formatExamAnalysisEventTime(teacherReview.reviewedAt)}` : ""}
                    </span>
                    {teacherReview.unconfirmedNumbers?.length ? <small>미확정 {teacherReview.unconfirmedNumbers.join(", ")}</small> : null}
                  </div>
                ) : null}
                {rowRefine ? (
                  <div className={rowRefine.status === "needs_review" ? "examAnalysisReviewSummary needsReview" : "examAnalysisReviewSummary ok"}>
                    <strong>AI 2차 수정</strong>
                    <span>
                      {rowRefine.updatedCount || 0}/{rowRefine.targetQuestionNumbers?.length || 0}개
                      {rowRefine.provider ? ` · ${rowRefine.provider}` : ""}
                      {rowRefine.refinedAt ? ` · ${formatExamAnalysisEventTime(rowRefine.refinedAt)}` : ""}
                    </span>
                    {rowRefine.needsReviewNumbers?.length ? <small>재확인 {rowRefine.needsReviewNumbers.join(", ")}</small> : null}
                    {rowRefine.skippedTeacherOverrideNumbers?.length ? <small>선생님 수정본 보호 {rowRefine.skippedTeacherOverrideNumbers.join(", ")}</small> : null}
                  </div>
                ) : null}
                <div className={ssenCatalog.status === "scope_not_matched" || ssenCatalog.status === "subject_missing" ? "examAnalysisSsenGate needsReview" : "examAnalysisSsenGate"}>
                  <strong>쎈 기준표</strong>
                  <span>{ssenCatalogStatus.message || ssenCatalogLabel}</span>
                  <small>{ssenCatalogLabel}</small>
                </div>
                {reviewRowsReady ? (
                  <DataTableShell className="examAnalysisReviewTableWrap" label="시험분석 문항 검수">
                    <table className="examAnalysisReviewTable">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>확정</th>
                          <th>주요</th>
                          <th>단원</th>
                          <th>주유형</th>
                          <th>보조유형</th>
                          <th>난이도</th>
                          <th>검수 메모</th>
                          <th>기준표</th>
                          <th>상태</th>
                        </tr>
                      </thead>
                      <tbody>
                        {questionRows.map((question) => {
                          const draftValue = enrichExamAnalysisReviewDraftWithSsenCatalog(
                            reviewDrafts[String(question.questionNumber)] ?? createExamAnalysisReviewDraft(question),
                            ssenCatalog
                          );
                          const needsReview = isExamAnalysisQuestionAiReviewTarget(question);
                          const unitKey = getReviewDraftUnitKey(draftValue);
                          const ssenTypeOptions = getSsenTypesForReviewDraft(draftValue);
                          const selectedSubTypeCodes = normalizeExamAnalysisSsenCodeList(draftValue.subTypeCodes);
                          const selectedSubTypes = selectedSubTypeCodes.map(getSsenTypeByCode).filter(Boolean);
                          const mainTypeMeta = getSsenTypeByCode(draftValue.mainTypeCode);
                          const isSsenEditing = editingSsenQuestionNumber === String(question.questionNumber);
                          const unitLabel = mainTypeMeta?.unitName || draftValue.unitName || "단원 선택 필요";
                          const mainTypeLabel = mainTypeMeta?.typeName || draftValue.mainType || "주유형 선택 필요";
                          const subTypeLabels = selectedSubTypes.length
                            ? selectedSubTypes.map((type) => type.typeName)
                            : parseExamAnalysisReviewSubTypes(draftValue.subTypesText);
                          const reviewClassName = [
                            needsReview ? "needsReview" : "",
                            draftValue.confirmed ? "confirmed" : "",
                            isSsenEditing ? "editingSsen" : ""
                          ].filter(Boolean).join(" ");
                          return (
                            <tr className={reviewClassName} key={question.questionRowId || question.questionNumber}>
                              <td className="questionNo">{question.questionNumber}</td>
                              <td className="confirmCell">
                                <input
                                  aria-label={`${question.questionNumber}번 확정`}
                                  checked={Boolean(draftValue.confirmed)}
                                  onChange={(event) => updateReviewDraft(question.questionNumber, { confirmed: event.target.checked })}
                                  type="checkbox"
                                />
                              </td>
                              <td className="importantCell">
                                <input
                                  aria-label={`${question.questionNumber}번 주요문항`}
                                  checked={Boolean(draftValue.isImportantQuestion)}
                                  onChange={(event) => updateReviewDraft(question.questionNumber, { isImportantQuestion: event.target.checked })}
                                  type="checkbox"
                                />
                              </td>
                              <td>
                                {isSsenEditing ? (
                                  <select
                                    aria-label={`${question.questionNumber}번 쎈 단원`}
                                    value={unitKey}
                                    onChange={(event) => selectReviewSsenUnit(question.questionNumber, event.target.value)}
                                  >
                                    <option value="">단원 선택</option>
                                    {(ssenCatalog.units ?? []).map((unit) => (
                                      <option key={unit.key} value={unit.key}>
                                        {[unit.partName, unit.unitName].filter(Boolean).join(" · ")}
                                      </option>
                                    ))}
                                  </select>
                                ) : (
                                  <div className="examAnalysisSubTypeChips readonly compact">
                                    <span>{unitLabel}</span>
                                  </div>
                                )}
                              </td>
                              <td>
                                {isSsenEditing ? (
                                  <div className="examAnalysisReviewEditCell withAction">
                                    <select
                                      aria-label={`${question.questionNumber}번 주유형`}
                                      value={draftValue.mainTypeCode}
                                      onChange={(event) => selectReviewMainType(question.questionNumber, event.target.value)}
                                    >
                                      <option value="">주유형 선택</option>
                                      {ssenTypeOptions.map((type) => (
                                        <option key={type.typeCode} value={type.typeCode}>
                                          {`${type.typeNo}. ${type.typeName}`}
                                        </option>
                                      ))}
                                    </select>
                                    <button
                                      className="softTinyButton square"
                                      onClick={() => setEditingSsenQuestionNumber("")}
                                      type="button"
                                    >
                                      닫기
                                    </button>
                                  </div>
                            ) : (
                              <div className="examAnalysisReviewTypeCell">
                                <div className="examAnalysisSubTypeChips readonly compact">
                                  <span>{mainTypeLabel}</span>
                                </div>
                                <button
                                  className="softTinyButton"
                                  onClick={() => setEditingSsenQuestionNumber(String(question.questionNumber))}
                                  type="button"
                                >
                                  수정
                                </button>
                              </div>
                            )}
                          </td>
                          <td>
                            {isSsenEditing ? (
                              <div className="examAnalysisSubTypePicker">
                                <select
                                  aria-label={`${question.questionNumber}번 보조유형 추가`}
                                  onChange={(event) => {
                                    addReviewSubType(question.questionNumber, draftValue, event.target.value);
                                    event.target.value = "";
                                  }}
                                  value=""
                                >
                                  <option value="">보조유형 추가</option>
                                  {ssenTypeOptions
                                    .filter((type) => type.typeCode !== draftValue.mainTypeCode && !selectedSubTypeCodes.includes(type.typeCode))
                                    .map((type) => (
                                      <option key={type.typeCode} value={type.typeCode}>
                                        {`${type.typeNo}. ${type.typeName}`}
                                      </option>
                                    ))}
                                </select>
                                <div className="examAnalysisSubTypeChips">
                                  {selectedSubTypes.length ? selectedSubTypes.map((type) => (
                                    <button
                                      aria-label={`${type.typeName} 제거`}
                                      key={type.typeCode}
                                      onClick={() => removeReviewSubType(question.questionNumber, draftValue, type.typeCode)}
                                      type="button"
                                    >
                                      {type.typeName}
                                    </button>
                                  )) : <span>없음</span>}
                                </div>
                              </div>
                            ) : (
                              <div className="examAnalysisSubTypeChips readonly">
                                {subTypeLabels.length ? subTypeLabels.map((label) => (
                                  <span key={label}>{label}</span>
                                )) : <span>없음</span>}
                              </div>
                            )}
                          </td>
                          <td>
                            {isSsenEditing ? (
                              <select
                                aria-label={`${question.questionNumber}번 난이도`}
                                value={draftValue.difficulty}
                                onChange={(event) => updateReviewDraft(question.questionNumber, { difficulty: event.target.value })}
                              >
                                <option value="">선택</option>
                                <option value="하">하</option>
                                <option value="중하">중하</option>
                                <option value="중">중</option>
                                <option value="중상">중상</option>
                                <option value="상">상</option>
                              </select>
                            ) : (
                              <span className="examAnalysisReviewPill">{draftValue.difficulty || "미정"}</span>
                            )}
                          </td>
                          <td>
                            <input
                              aria-label={`${question.questionNumber}번 재확인 근거`}
                              value={draftValue.reviewNote}
                              onChange={(event) => updateReviewDraft(question.questionNumber, { reviewNote: event.target.value })}
                              placeholder="재확인 근거 또는 수정 이유"
                            />
                          </td>
                          <td className="ssenMetaCell">
                            <strong>{mainTypeMeta?.partName || draftValue.partName || "매칭 필요"}</strong>
                            <span>{mainTypeMeta ? `${mainTypeMeta.unitNo}. ${mainTypeMeta.unitName}` : draftValue.unitName || "-"}</span>
                            <small>{draftValue.mainTypeCode || "typeCode 없음"}</small>
                          </td>
                          <td className="reviewStateCell">
                            {needsReview ? "2차 수정 필요" : draftValue.confirmed ? "확정" : "미확정"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </DataTableShell>
                ) : (
                  <EmptyState className="emptyState compact">AI 행 채움 후 검수할 수 있습니다.</EmptyState>
                )}
                <StickySaveBar
                  className="examAnalysisReviewStickySaveBar"
                  label="문항 검수"
                  message={reviewStatus.message || `${confirmedReviewCount}/${questionRows.length}개 확정 · AI 2차 수정과 모두 확정은 별도 작업입니다.`}
                  saveState={reviewStatus.state === "success" ? "saved" : reviewStatus.state}
                >
                  <button
                    className="softButton"
                    disabled={!reviewRowsReady || isSavingReviews || isRefiningRows}
                    onClick={saveQuestionReviews}
                    type="button"
                  >
                    {isSavingReviews ? "저장 중" : "문항 검수본 저장"}
                  </button>
                </StickySaveBar>
            </Disclosure>
          </div>

          <ExamAnalysisFinalPreviewPanel
            model={finalPreviewModel}
          />

          <ExamAnalysisOutputDraftPanel
            activeRun={activeRun}
            exportingOutputType={exportingOutputType}
            generatingOutputType={generatingOutputType}
            isSavingOutputDrafts={isSavingOutputDrafts}
            model={finalPreviewModel}
            onGenerateOutputDraft={generateOutputDraft}
            onAddKeyQuestionBlock={addOutputKeyQuestionBlock}
            onCopyOutputDraft={copyOutputDraft}
            onCopyText={copyOutputText}
            onDownloadOutputDraft={downloadOutputDraft}
            onDownloadOutputPackageZip={downloadOutputPackageZip}
            onRemoveKeyQuestionBlock={removeOutputKeyQuestionBlock}
            onSaveOutputDrafts={saveOutputDrafts}
            onUpdateInput={updateOutputInput}
            onUpdateKeyQuestionBlock={updateOutputKeyQuestionBlock}
            onUpdateTeacherDraft={updateOutputTeacherDraft}
            outputDrafts={outputDrafts}
            outputStatus={outputStatus}
          />

          <div className="panel examAnalysisStepPanel">
            <SectionHeader
              density="slim"
              description={activeRun ? workflowStatusLabel(activeRun.workflowStatus) : "대기"}
              title="진행 단계"
              titleAs="strong"
            />
            <div className="examAnalysisSteps">
              {[
                ["source_uploaded", "PDF 저장"],
                ["source_extracted", "텍스트/페이지 추출"],
                ["question_count_detected", "문항 수 판독"],
                ["question_count_confirmed", "선생님 확인"],
                ["rows_created", "1~N 행 고정"],
                ["boundary_detected", "문항 경계"],
                ["ai_filled", "AI 행 채움"],
                ["teacher_review", "선생님 검수"],
                ["completed", "최종 확정"]
              ].map(([status, label]) => (
                <span
                  className={
                    activeRun?.workflowStatus === status ||
                    (status === "boundary_detected" && boundaryDetection) ||
                    (status === "ai_filled" && rowFill) ||
                    (status === "teacher_review" && teacherReview)
                      ? "active"
                      : ""
                  }
                  key={status}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="panel examAnalysisEventPanel">
            <SectionHeader
              density="slim"
              description={`${events.length}건`}
              title="저장 이벤트"
              titleAs="strong"
            />
            <div className="examAnalysisEventList">
              {events.length === 0 ? (
                <EmptyState className="emptyState compact">이벤트 없음</EmptyState>
              ) : events.slice(0, 8).map((event) => (
                <div className="examAnalysisEventItem" key={event.eventId}>
                  <strong>{event.message || event.eventType}</strong>
                  <span title={event.createdAt ? formatKoreaTimeLabel(event.createdAt) : ""}>{formatExamAnalysisEventTime(event.createdAt)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
