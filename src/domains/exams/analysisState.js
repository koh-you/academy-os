import {
  getExamQuestionCommentCount,
  normalizeExamFinalDocument,
  normalizeExamQuestionComposition
} from "./finalDocument.js";
import {
  normalizeExamQuestionClassificationRows,
  normalizeExamQuestionItems
} from "./questionClassification.js";

export const examAnalysisFieldKeys = [
  "oneLineSummary",
  "examStructure",
  "aiOverview",
  "unitDistribution",
  "typeClassification",
  "killerProblems",
  "fiveCorePatterns",
  "sourceCheckNotes",
  "studentAnalysisDraft",
  "blogDraft",
  "instagramDraft"
];

export function normalizeExamSourceCompositions(value = {}) {
  if (!value) return {};
  const entries = Array.isArray(value)
    ? value.map((item) => [
        String(item?.sourceId || item?.fileName || item?.sourceName || "").trim(),
        item
      ])
    : Object.entries(value);
  return Object.fromEntries(
    entries
      .map(([sourceId, composition]) => {
        const key = String(sourceId || "").trim();
        const normalized = normalizeExamQuestionComposition(composition);
        return key && normalized ? [key, normalized] : null;
      })
      .filter(Boolean)
  );
}

export function normalizeExamSourceTargetCounts(value = {}) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value)
      .map(([sourceId, count]) => {
        const safeCount = Math.max(0, Math.min(80, Number(count) || 0));
        return sourceId && safeCount ? [sourceId, safeCount] : null;
      })
      .filter(Boolean)
  );
}

export function parseStructuredAnalysisText(text) {
  const trimmed = String(text ?? "").trim();
  if (!trimmed) return null;
  const candidates = [
    trimmed,
    trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1]?.trim(),
    trimmed.slice(trimmed.indexOf("{"), trimmed.lastIndexOf("}") + 1)
  ].filter(Boolean);

  for (const candidate of candidates) {
    try {
      const parsed = JSON.parse(candidate);
      if (parsed && typeof parsed === "object" && examAnalysisFieldKeys.some((key) => parsed[key])) return parsed;
    } catch {
      // Try the next candidate.
    }
  }
  return null;
}

export function parseLooseStructuredAnalysisText(text) {
  const source = String(text ?? "");
  if (!source.includes('"')) return null;
  const result = {};
  for (const key of examAnalysisFieldKeys) {
    const pattern = new RegExp(`"${key}"\\s*:\\s*"([\\s\\S]*?)(?:"\\s*,\\s*"${examAnalysisFieldKeys.join('"|"')}"\\s*:|"\\s*\\})`, "m");
    const match = source.match(pattern);
    if (!match?.[1]) continue;
    const rawValue = match[1]
      .replaceAll('\\"', '"')
      .replaceAll("\\n", "\n")
      .replaceAll("\\t", "\t")
      .trim();
    if (rawValue) result[key] = rawValue;
  }
  return Object.keys(result).length ? result : null;
}

export function cleanAnalysisFieldText(key, value) {
  let text = String(value ?? "").trim();
  const extracted = parseLooseStructuredAnalysisText(text);
  if (extracted?.[key]) text = extracted[key];
  const nextFieldPattern = new RegExp(`",?\\s*"(${examAnalysisFieldKeys.filter((fieldKey) => fieldKey !== key).join("|")})"\\s*:`, "m");
  text = text.split(nextFieldPattern)[0] ?? text;
  return text
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/i, "")
    .replace(/^[{,\s"]+/, "")
    .replace(/[}",\s]+$/, "")
    .trim();
}

export function normalizeExamAnalysisAiFields(fields = {}) {
  const next = { ...fields };
  const combinedText = examAnalysisFieldKeys.map((key) => next[key]).filter(Boolean).join("\n\n");
  const combinedParsed = parseStructuredAnalysisText(combinedText) ?? parseLooseStructuredAnalysisText(combinedText);
  if (combinedParsed) {
    for (const fieldKey of examAnalysisFieldKeys) {
      if (combinedParsed[fieldKey]) next[fieldKey] = String(combinedParsed[fieldKey]).trim();
    }
  }
  for (const key of examAnalysisFieldKeys) {
    const parsed = parseStructuredAnalysisText(next[key]) ?? parseLooseStructuredAnalysisText(next[key]);
    if (!parsed) continue;
    for (const fieldKey of examAnalysisFieldKeys) {
      if (parsed[fieldKey]) next[fieldKey] = String(parsed[fieldKey]).trim();
    }
  }
  for (const key of examAnalysisFieldKeys) {
    next[key] = cleanAnalysisFieldText(key, next[key]);
  }
  next.questionComposition = normalizeExamQuestionComposition(next.questionComposition);
  next.sourceCompositions = normalizeExamSourceCompositions(next.sourceCompositions);
  next.questionCompositionsBySource = normalizeExamSourceCompositions(next.questionCompositionsBySource);
  next.questionTargetCountsBySource = normalizeExamSourceTargetCounts(next.questionTargetCountsBySource);
  next.questionClassifications = normalizeExamQuestionClassificationRows(next.questionClassifications || next.classificationRows);
  return next;
}

export function removeFailedAttachmentBlocks(text) {
  return String(text ?? "")
    .split(/\n{2,}/)
    .filter((block) => !block.trim().startsWith("[첨부 실패]"))
    .join("\n\n")
    .trim();
}

export function inferExamAnalysisMetadataFromFileName(fileName = "") {
  const baseName = String(fileName).replace(/\.[^.]+$/, "");
  const bracketSchool = baseName.match(/\[([^\]]+)\]/)?.[1]?.trim() ?? "";
  const schoolMatch = bracketSchool || baseName.match(/([가-힣A-Za-z0-9]+고)/)?.[1] || "";
  const gradeMatch = baseName.match(/고\s*([123])/);
  const subjectMatch = baseName.match(/(공통수학\s*[12]|수학\s*[ⅠⅡI1-2]|미적분|확률과\s*통계|확통|기하)/);
  const termMatch = baseName.match(/(20\d{2})\s*[-년 ]\s*([12])\s*[-학기 ]\s*([12])?\s*(중간|기말)/);
  const examName = termMatch
    ? `${termMatch[1]} ${termMatch[2]}학기 ${termMatch[4]}고사`
    : baseName.includes("중간")
      ? "중간고사"
      : baseName.includes("기말")
        ? "기말고사"
        : "";

  return {
    schoolName: schoolMatch,
    grade: gradeMatch ? `고${gradeMatch[1]}` : "",
    subject: subjectMatch ? subjectMatch[1].replace(/\s+/g, "") : "",
    examName
  };
}

export function getDisconnectedExamAnalysisRunPatch(analysis = {}, options = {}) {
  if (analysis.aiStatus !== "분석 중") return null;
  if (analysis.aiRunSessionId && analysis.aiRunSessionId === options.runtimeSessionId) return null;
  return {
    aiStatus: "실패",
    aiError: "이전 브라우저 세션에서 시작한 AI 분석의 결과를 더 이상 받을 수 없어 대기 상태를 해제했습니다. 다시 실행해 주세요.",
    aiRunRequestId: "",
    aiRunSessionId: "",
    aiRunStartedAt: ""
  };
}

export function repairDisconnectedExamAnalysisRuns(analyses = [], options = {}) {
  let changed = false;
  const repaired = (Array.isArray(analyses) ? analyses : []).map((analysis) => {
    const patch = getDisconnectedExamAnalysisRunPatch(analysis, options);
    if (!patch) return analysis;
    changed = true;
    return { ...analysis, ...patch, updatedAt: new Date().toISOString() };
  });
  return { changed, analyses: repaired };
}

export function normalizeExamAnalysisForDisplay(analysis = {}, options = {}) {
  const firstSourceFile = Array.isArray(analysis.sourceFiles) ? analysis.sourceFiles[0] : null;
  const inferredMetadata = inferExamAnalysisMetadataFromFileName(firstSourceFile?.fileName || analysis.sourceFileUrl || "");
  const disconnectedRunPatch = getDisconnectedExamAnalysisRunPatch(analysis, options) ?? {};
  const createDefaultPrompt = typeof options.createDefaultExamAnalysisPrompt === "function"
    ? options.createDefaultExamAnalysisPrompt
    : () => "";
  const isLegacyDefaultPrompt = typeof options.isLegacyDefaultExamAnalysisPrompt === "function"
    ? options.isLegacyDefaultExamAnalysisPrompt
    : () => false;
  const defaultPrompt = createDefaultPrompt();
  return {
    ...normalizeExamAnalysisAiFields({
      ...analysis,
      ...disconnectedRunPatch,
      schoolName: analysis.schoolName || inferredMetadata.schoolName,
      grade: analysis.grade || inferredMetadata.grade,
      subject: analysis.subject || inferredMetadata.subject,
      examName: analysis.examName || inferredMetadata.examName,
      aiPrompt: isLegacyDefaultPrompt(analysis.aiPrompt)
        ? defaultPrompt
        : analysis.aiPrompt || defaultPrompt,
      rawExamText: removeFailedAttachmentBlocks(analysis.rawExamText)
    }),
    questionItems: normalizeExamQuestionItems(analysis.questionItems),
    questionClassifications: normalizeExamQuestionClassificationRows(analysis.questionClassifications || analysis.classificationRows),
    finalDocument: normalizeExamFinalDocument(analysis.finalDocument)
  };
}

export function getExamAnalysisRunStartedAt(analysis = {}) {
  return analysis.aiRunStartedAt || analysis.updatedAt || "";
}

export function getExamAnalysisElapsedSeconds(analysis = {}, now = Date.now()) {
  const startedAt = getExamAnalysisRunStartedAt(analysis);
  const startedTime = startedAt ? new Date(startedAt).getTime() : 0;
  if (!startedTime || Number.isNaN(startedTime)) return 0;
  return Math.max(0, Math.floor((now - startedTime) / 1000));
}

export function formatElapsedSeconds(seconds = 0) {
  const safeSeconds = Math.max(0, Number(seconds) || 0);
  const minutes = Math.floor(safeSeconds / 60);
  const rest = safeSeconds % 60;
  return minutes ? `${minutes}분 ${String(rest).padStart(2, "0")}초` : `${rest}초`;
}

export function getExamAnalysisWaitMessage(seconds = 0) {
  if (seconds >= 180) return "3분 이상 응답 대기 중입니다. 서버가 응답하면 결과는 그대로 반영됩니다. 새로고침 후에도 계속 같으면 이전 요청이 끊긴 상태일 수 있습니다.";
  if (seconds >= 60) return "1분 이상 걸리고 있습니다. PDF 원문과 쎈 유형 매칭이 길면 정상적으로 오래 걸릴 수 있습니다.";
  return "AI가 원문과 문항 메타데이터를 분석하고 있습니다.";
}

export function getExamAnalysisStatusMeta(analysis = {}) {
  const status = analysis.aiStatus || "대기";
  if (status === "완료") {
    return { label: "분석 완료", tone: "done", detail: analysis.aiLastRunAt ? `최근 실행 ${analysis.aiLastRunAt}` : "AI 구조화 결과가 있습니다." };
  }
  if (status === "분석 중") {
    return { label: "분석 중", tone: "running", detail: "AI가 시험지를 분석하고 있습니다. 오래 걸려도 응답이 오면 결과를 반영합니다." };
  }
  if (status === "실패") {
    return { label: "분석 실패", tone: "failed", detail: analysis.aiError || "오류 내용을 확인해 주세요." };
  }
  const hasUpload = Array.isArray(analysis.sourceFiles) && analysis.sourceFiles.length > 0;
  return { label: hasUpload ? "분석 전" : "원본 대기", tone: hasUpload ? "ready" : "idle", detail: hasUpload ? "PDF 업로드가 완료되었습니다. AI 분석을 시작하세요." : "PDF를 업로드해 주세요." };
}

export function getTextPreview(value = "", fallback = "아직 내용 없음") {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  if (!text) return fallback;
  return text.length > 110 ? `${text.slice(0, 110)}...` : text;
}

export function getExamAnalysisReportTitle(analysis = {}) {
  const parts = [analysis.schoolName, analysis.grade, analysis.subject, analysis.examName].filter(Boolean);
  return parts.length ? `${parts.join(" ")} 최종 분석` : "시험분석 최종 보고서";
}

export function getExamAnalysisReportSubtitle(analysis = {}, options = {}) {
  const fileYears = (analysis.sourceFiles ?? [])
    .map((file) => String(file.fileName ?? "").match(/20\d{2}/)?.[0])
    .filter(Boolean);
  const uniqueYears = [...new Set(fileYears)].sort();
  const yearRange = uniqueYears.length >= 2 ? `${uniqueYears[0]}~${uniqueYears.at(-1)}` : uniqueYears[0] || "";
  const base = yearRange ? `${yearRange} 기출 기반` : "기출 PDF와 AI 분석 기반";
  return `${base} · ${options.academyBrandName || ""}`.trim();
}

export function getExamAnalysisReportMeta(analysis = {}) {
  const sourceCount = Array.isArray(analysis.sourceFiles) ? analysis.sourceFiles.length : 0;
  return [
    analysis.examDate ? `시험일 ${analysis.examDate}` : "",
    sourceCount ? `첨부 ${sourceCount}개` : "",
    analysis.aiLastRunAt ? `AI 분석 ${analysis.aiLastRunAt}` : "",
    analysis.aiStatus ? `상태 ${analysis.aiStatus}` : ""
  ].filter(Boolean);
}

export function splitReportLines(value = "") {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

export function getExamAnalysisInitialFields(analysis = {}) {
  const snapshot = analysis.aiInitialFields && typeof analysis.aiInitialFields === "object"
    ? analysis.aiInitialFields
    : null;
  return normalizeExamAnalysisAiFields(snapshot ?? {
    oneLineSummary: analysis.oneLineSummary,
    examStructure: analysis.examStructure,
    aiOverview: analysis.aiOverview,
    unitDistribution: analysis.unitDistribution,
    typeClassification: analysis.typeClassification,
    killerProblems: analysis.killerProblems,
    fiveCorePatterns: analysis.fiveCorePatterns,
    sourceCheckNotes: analysis.sourceCheckNotes,
    studentAnalysisDraft: analysis.studentAnalysisDraft,
    blogDraft: analysis.blogDraft,
    instagramDraft: analysis.instagramDraft
  });
}

export function hasExamAnalysisTeacherInsight(analysis = {}) {
  if (getExamQuestionCommentCount(analysis.questionItems) > 0) return true;
  return ["insightSummary", "insightUnits", "insightKiller", "insightStudentErrors", "insightPrediction", "insightDirection"].some((field) => {
    const value = String(analysis[field] ?? "").trim();
    return value && !value.endsWith("부연:");
  });
}
