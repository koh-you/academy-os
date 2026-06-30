import { normalizeExamQuestionComposition } from "./finalDocument.js";
import {
  createExamQuestionItem,
  formatSsenTypeTags,
  normalizeExamQuestionItems
} from "./questionClassification.js";

export function normalizeAiQuestionDrafts(items = []) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => {
      if (!item || typeof item !== "object") return null;
      const number = Number(item.number || item.questionNumber || item.no) || index + 1;
      return createExamQuestionItem({
        number,
        page: item.page || 1,
        score: item.score || item.points || "",
        questionType: item.questionType || item.type || "확인 필요",
        unit: item.unit || item.chapter || item.topic || "",
        difficulty: item.difficulty || "확인 필요",
        role: item.role || "기본",
        source: item.source || "확인 필요",
        correctRate: item.correctRate || item.expectedCorrectRate || "",
        similarProblemNeeded: item.similarProblemNeeded || item.needsSimilarProblem || item.similarProblemRequired || "확인 필요",
        similarProblemSource: item.similarProblemSource || item.similarSource || item.linkedProblemSource || "",
        similarProblemRelation: item.similarProblemRelation || item.similarRelation || item.variationType || "",
        cropSourceId: item.cropSourceId || item.sourceId || "",
        cropSourceUrl: item.cropSourceUrl || item.sourceUrl || "",
        ocrText: item.ocrText || item.questionSummary || item.summary || "",
        teacherComment: item.teacherComment || item.instructorComment || "",
        variationRelationComment: item.variationRelationComment || item.sourceNote || "",
        strategyComment: item.strategyComment || item.comment || item.teacherCheckPoint || item.reviewPoint || "",
        ssenTypeTags: item.ssenTypeTags || item.ssenTypes || item.ssenType || item.ssenTypeTag,
        tags: Array.isArray(item.tags) ? item.tags : String(item.tags || "").split(/[,/·]/).map((tag) => tag.trim()).filter(Boolean)
      }, index);
    })
    .filter(Boolean)
    .sort((a, b) => Number(a.page || 1) - Number(b.page || 1) || Number(a.number || 0) - Number(b.number || 0));
}

export function formatExamQuestionComposition(composition = null) {
  const normalized = normalizeExamQuestionComposition(composition);
  if (!normalized) return "";
  const sectionText = normalized.sections.length
    ? normalized.sections.map((section) => {
        const range = section.start && section.end ? ` ${section.start}~${section.end}번` : "";
        const score = section.score ? ` ${section.score}` : "";
        return `${section.label}${range} ${section.count}문항${score}`;
      }).join(" + ")
    : `총 ${normalized.total}문항`;
  return `${sectionText} = 총 ${normalized.total}문항`;
}

export function getExamQuestionMaxNumber(items = []) {
  return normalizeExamQuestionItems(items).reduce((max, item) => Math.max(max, Number(item.number) || 0), 0);
}

export function hasExamQuestionNumberSequence(items = [], count = 0) {
  const safeCount = Math.max(0, Number(count) || 0);
  if (!safeCount) return true;
  const numbers = new Set(normalizeExamQuestionItems(items).map((item) => Number(item.number)).filter((number) => number > 0));
  for (let number = 1; number <= safeCount; number += 1) {
    if (!numbers.has(number)) return false;
  }
  return true;
}

export function getMissingExamQuestionNumbers(items = [], count = 0) {
  const safeCount = Math.max(0, Number(count) || 0);
  if (!safeCount) return [];
  const numbers = new Set(normalizeExamQuestionItems(items).map((item) => Number(item.number)).filter((number) => number > 0));
  return Array.from({ length: safeCount }, (_, index) => index + 1).filter((number) => !numbers.has(number));
}

export function createExamQuestionItemsFromCount(count, existingItems = []) {
  const safeCount = Math.max(1, Math.min(80, Number(count) || 20));
  const normalizedExisting = normalizeExamQuestionItems(existingItems);
  const byQuestionNumber = new Map();
  normalizedExisting.forEach((item) => {
    const number = Number(item.number);
    if (number > 0 && !byQuestionNumber.has(number)) byQuestionNumber.set(number, item);
  });
  return Array.from({ length: safeCount }, (_, index) => {
    const number = index + 1;
    const existing = byQuestionNumber.get(number);
    return createExamQuestionItem(existing || { number: index + 1 }, index);
  });
}

export function mergeAiQuestionDrafts(existingItems = [], aiItems = [], options = {}) {
  const existing = normalizeExamQuestionItems(existingItems);
  const targetSourceId = String(options.sourceId || "").trim();
  const targetSourceUrl = String(options.sourceUrl || "").trim();
  const defaultSourceId = String(options.defaultSourceId || targetSourceId || "").trim();
  const targetCount = Math.max(0, Math.min(80, Number(options.targetCount) || 0));
  const belongsToTargetSource = (item) => {
    if (!targetSourceId) return true;
    return (item.cropSourceId || defaultSourceId) === targetSourceId;
  };
  const withTargetSource = (item) => ({
    ...item,
    cropSourceId: targetSourceId || item.cropSourceId,
    cropSourceUrl: targetSourceUrl || item.cropSourceUrl
  });
  const drafts = normalizeAiQuestionDrafts(aiItems).map(withTargetSource);
  if (!drafts.length) return existing;
  let workingExisting = existing;
  if (targetSourceId && targetCount) {
    const targetExisting = workingExisting.filter(belongsToTargetSource);
    if (targetExisting.length < targetCount || !hasExamQuestionNumberSequence(targetExisting, targetCount)) {
      const expandedTargetItems = createExamQuestionItemsFromCount(targetCount, targetExisting).map(withTargetSource);
      workingExisting = [
        ...workingExisting.filter((item) => !belongsToTargetSource(item)),
        ...expandedTargetItems
      ];
    }
  }
  const isBlank = (value) => !String(value ?? "").trim() || ["-", "확인 필요", "단원 미입력"].includes(String(value ?? "").trim());
  const mergeWhenBlank = (currentValue, draftValue, defaultValue = "") => {
    const normalizedDraft = String(draftValue ?? "").trim();
    if (!normalizedDraft || normalizedDraft === "확인 필요") return currentValue || defaultValue;
    return isBlank(currentValue) ? normalizedDraft : currentValue;
  };
  const mergeDefaultRole = (currentValue, draftValue) => {
    const normalizedDraft = String(draftValue ?? "").trim();
    if (!normalizedDraft || normalizedDraft === "확인 필요") return currentValue || "기본";
    return !currentValue || currentValue === "기본" || currentValue === "확인 필요" ? normalizedDraft : currentValue;
  };
  const byNumber = new Map(workingExisting.filter(belongsToTargetSource).map((item) => [Number(item.number), item]));
  const usedDraftIds = new Set();
  const merged = workingExisting.map((item) => {
    if (!belongsToTargetSource(item)) return item;
    const draft = drafts.find((candidate) => Number(candidate.number) === Number(item.number) && !usedDraftIds.has(candidate.questionId));
    if (!draft) return item;
    usedDraftIds.add(draft.questionId);
    return {
      ...item,
      page: item.page || draft.page || 1,
      score: mergeWhenBlank(item.score, draft.score),
      questionType: mergeWhenBlank(item.questionType, draft.questionType, "확인 필요"),
      unit: mergeWhenBlank(item.unit, draft.unit),
      difficulty: mergeWhenBlank(item.difficulty, draft.difficulty, "확인 필요"),
      role: mergeDefaultRole(item.role, draft.role),
      source: mergeWhenBlank(item.source, draft.source, "확인 필요"),
      correctRate: mergeWhenBlank(item.correctRate, draft.correctRate),
      similarProblemNeeded: mergeWhenBlank(item.similarProblemNeeded, draft.similarProblemNeeded, "확인 필요"),
      similarProblemSource: mergeWhenBlank(item.similarProblemSource, draft.similarProblemSource),
      similarProblemRelation: mergeWhenBlank(item.similarProblemRelation, draft.similarProblemRelation, "확인 필요"),
      cropSourceId: item.cropSourceId || draft.cropSourceId,
      cropSourceUrl: item.cropSourceUrl || draft.cropSourceUrl,
      ocrText: item.ocrText || draft.ocrText,
      teacherComment: item.teacherComment || draft.teacherComment,
      variationRelationComment: item.variationRelationComment || draft.variationRelationComment,
      strategyComment: item.strategyComment || draft.strategyComment,
      ssenTypeTags: item.ssenTypeTags?.length ? item.ssenTypeTags : draft.ssenTypeTags,
      tags: Array.from(new Set([...(item.tags ?? []), ...(draft.tags ?? [])]))
    };
  });
  const additions = drafts.filter((draft) => {
    const number = Number(draft.number);
    return targetCount > 0 && number > 0 && number <= targetCount && !byNumber.has(number) && !usedDraftIds.has(draft.questionId);
  });
  return normalizeExamQuestionItems([...merged, ...additions]);
}

export function normalizeExamOcrTextForQuestionParsing(value = "") {
  return String(value ?? "")
    .replace(/\r/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function cleanExamQuestionSnippet(value = "") {
  return normalizeExamOcrTextForQuestionParsing(value)
    .replace(/\n+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim()
    .slice(0, 900);
}

export function extractExamQuestionScore(text = "") {
  const source = String(text ?? "");
  const bracketMatch = source.match(/[\[(（]\s*(\d+(?:\.\d+)?)\s*점\s*[\])）]/);
  const pointMatch = bracketMatch || source.match(/(?:배점|점수)?\s*(\d+(?:\.\d+)?)\s*점/);
  return pointMatch?.[1] ? `${pointMatch[1]}점` : "";
}

export function inferExamQuestionType({ number, text = "", composition = null } = {}) {
  const normalizedComposition = normalizeExamQuestionComposition(composition);
  const questionNumber = Number(number) || 0;
  const section = normalizedComposition?.sections?.find((item) =>
    Number(item.start) && Number(item.end) && questionNumber >= Number(item.start) && questionNumber <= Number(item.end)
  );
  const sectionLabel = String(section?.label || "");
  if (/서술|논술|주관/.test(sectionLabel)) return "서술형";
  if (/선택|객관/.test(sectionLabel)) return "객관식";

  const source = String(text ?? "");
  if (/[①②③④⑤]/.test(source)) return "객관식";
  if (/서술형|논술형/.test(source)) return "서술형";
  if (/단답형/.test(source)) return "단답형";
  return "";
}

export function scoreExamQuestionSnippet(snippet = "", number = 0) {
  const source = String(snippet ?? "");
  let score = 0;
  if (extractExamQuestionScore(source)) score += 4;
  if (/[①②③④⑤]/.test(source)) score += 3;
  if (/[\[(（]\s*\d+(?:\.\d+)?\s*점/.test(source)) score += 2;
  if (/[=<>±√∑]/.test(source) || /함수|방정식|부등식|그래프|집합|확률|수열|극한|미분|적분/.test(source)) score += 2;
  if (new RegExp(`^\\s*${Number(number) || ""}\\s*[.)]`).test(source)) score += 1;
  return score;
}

export function extractExamQuestionOcrSnippets(rawText = "", targetCount = 0) {
  const text = normalizeExamOcrTextForQuestionParsing(rawText);
  const safeCount = Math.max(0, Math.min(80, Number(targetCount) || 0));
  if (!text || !safeCount) return {};

  const matches = [];
  const pattern = /(?:^|\n)\s*(\d{1,2})\s*[.)]\s*/g;
  let match = null;
  while ((match = pattern.exec(text))) {
    const number = Number(match[1]);
    if (number >= 1 && number <= safeCount) {
      matches.push({ number, index: match.index });
    }
  }

  const candidatesByNumber = new Map();
  matches.forEach((entry, index) => {
    const next = matches.slice(index + 1).find((candidate) => candidate.number !== entry.number);
    const endIndex = next?.index ?? Math.min(text.length, entry.index + 1400);
    const snippet = cleanExamQuestionSnippet(text.slice(entry.index, endIndex));
    if (!snippet) return;
    const candidates = candidatesByNumber.get(entry.number) || [];
    candidates.push(snippet);
    candidatesByNumber.set(entry.number, candidates);
  });

  return Object.fromEntries(
    Array.from(candidatesByNumber.entries()).map(([number, candidates]) => {
      const best = candidates
        .slice()
        .sort((a, b) => scoreExamQuestionSnippet(b, number) - scoreExamQuestionSnippet(a, number) || b.length - a.length)[0];
      return [number, best];
    })
  );
}

export function applyHeuristicQuestionInfoDrafts(items = [], rawText = "", composition = null) {
  const normalizedItems = normalizeExamQuestionItems(items);
  const targetCount = getExamQuestionMaxNumber(normalizedItems) || normalizedItems.length;
  const snippets = extractExamQuestionOcrSnippets(rawText, targetCount);
  return normalizedItems.map((item) => {
    const snippet = snippets[Number(item.number)] || item.ocrText || "";
    const score = extractExamQuestionScore(snippet);
    const questionType = inferExamQuestionType({ number: item.number, text: snippet, composition });
    return createExamQuestionItem({
      ...item,
      score: item.score || score,
      questionType: item.questionType && item.questionType !== "확인 필요" ? item.questionType : questionType || item.questionType,
      ocrText: item.ocrText || snippet
    });
  });
}

export function buildQuestionInsightText(questionItems = []) {
  const items = normalizeExamQuestionItems(questionItems).filter((item) =>
    [
      item.unit,
      item.role,
      formatSsenTypeTags(item.ssenTypeTags),
      item.teacherComment,
      item.variationRelationComment,
      item.strategyComment,
      item.similarProblemNeeded && item.similarProblemNeeded !== "확인 필요" ? item.similarProblemNeeded : "",
      item.similarProblemSource,
      item.similarProblemRelation && item.similarProblemRelation !== "확인 필요" ? item.similarProblemRelation : ""
    ].some((value) => String(value || "").trim())
  );
  if (!items.length) return "";
  return items.map((item) => {
    const header = `${item.number}번${item.score ? ` · ${item.score}점` : ""}${item.unit ? ` · ${item.unit}` : ""}`;
    return [
      `- ${header}`,
      item.role ? `  역할: ${item.role}` : "",
      item.difficulty ? `  난이도: ${item.difficulty}` : "",
      formatSsenTypeTags(item.ssenTypeTags) ? `  쎈 유형: ${formatSsenTypeTags(item.ssenTypeTags)}` : "",
      item.tags?.length ? `  태그: ${item.tags.join(", ")}` : "",
      item.similarProblemNeeded && item.similarProblemNeeded !== "확인 필요" ? `  유사문항 필요: ${item.similarProblemNeeded}` : "",
      item.similarProblemSource ? `  유사문항 출처: ${item.similarProblemSource}` : "",
      item.similarProblemRelation && item.similarProblemRelation !== "확인 필요" ? `  유사문항 유형: ${item.similarProblemRelation}` : "",
      item.teacherComment ? `  강사 코멘트: ${item.teacherComment}` : "",
      item.variationRelationComment ? `  변형 관계: ${item.variationRelationComment}` : "",
      item.strategyComment ? `  대비 전략: ${item.strategyComment}` : ""
    ].filter(Boolean).join("\n");
  }).join("\n");
}
