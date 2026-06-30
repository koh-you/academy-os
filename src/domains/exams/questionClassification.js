import ssenTypeIndex from "../../../api/data/ssenTypeIndex.json";

export const examQuestionDifficultyOptions = ["확인 필요", "하", "중하", "중", "중상", "상"];
export const examQuestionRoleOptions = ["기본", "실수유도", "앞번호 고난도", "준킬러", "킬러", "서술형 변별", "확인 필요"];
export const examQuestionSourceOptions = ["확인 필요", "교과서", "부교재", "EBS", "학교 프린트", "모의고사", "수능/평가원", "자체 변형", "기타"];
export const examQuestionTypeOptions = ["객관식", "단답형", "서술형", "논술형", "확인 필요"];
export const similarProblemNeedOptions = ["확인 필요", "필요", "불필요"];
export const similarProblemRelationOptions = ["확인 필요", "숫자변형", "조건변형", "유사유형", "기타"];
export const examQuestionTagOptions = [
  "기본문항",
  "실수문항",
  "주요문항",
  "1등급 변별문항",
  "2등급 변별문항",
  "숫자변형문항",
  "조건변형문항",
  "유사유형문항",
  "교과서 연계",
  "부교재 연계",
  "EBS 연계",
  "모의고사 연계"
];

const examQuestionInsightTags = ["주요문항", "1등급 변별문항", "2등급 변별문항"];

export function normalizeExamQuestionTag(tag = "") {
  const text = String(tag ?? "").trim();
  if (!text) return "";
  const aliases = {
    "기본 문항": "기본문항",
    "기본문항": "기본문항",
    "실수 유도": "실수문항",
    "실수유도": "실수문항",
    "실수 많음": "실수문항",
    "실수문항": "실수문항",
    "분석 필요": "주요문항",
    "디벨럽 가능": "주요문항",
    "출처 비교": "주요문항",
    "수업 확장": "주요문항",
    "주요문항": "주요문항",
    "변별 문항": "1등급 변별문항",
    "킬러": "1등급 변별문항",
    "1등급 변별문항": "1등급 변별문항",
    "준킬러": "2등급 변별문항",
    "2등급 변별문항": "2등급 변별문항",
    "숫자변형": "숫자변형문항",
    "숫자변형문항": "숫자변형문항",
    "조건변형": "조건변형문항",
    "조건변형문항": "조건변형문항",
    "유사유형": "유사유형문항",
    "유사문항": "유사유형문항",
    "유사유형문항": "유사유형문항",
    "교과서": "교과서 연계",
    "교과서 연계": "교과서 연계",
    "부교재": "부교재 연계",
    "부교재 연계": "부교재 연계",
    "EBS": "EBS 연계",
    "EBS 연계": "EBS 연계",
    "모의고사": "모의고사 연계",
    "모의고사 연계": "모의고사 연계"
  };
  return aliases[text] || (examQuestionTagOptions.includes(text) ? text : "");
}

export function normalizeExamQuestionTags(tags = []) {
  const rawTags = Array.isArray(tags) ? tags : String(tags || "").split(/[,/·]/);
  return Array.from(new Set(rawTags.map(normalizeExamQuestionTag).filter(Boolean)));
}

function getDerivedExamQuestionMetadataTags(seed = {}) {
  const tags = [];
  const relationTagMap = {
    "숫자변형": "숫자변형문항",
    "조건변형": "조건변형문항",
    "유사유형": "유사유형문항"
  };
  const sourceTagMap = {
    "교과서": "교과서 연계",
    "부교재": "부교재 연계",
    "EBS": "EBS 연계",
    "모의고사": "모의고사 연계"
  };
  if (relationTagMap[seed.similarProblemRelation]) tags.push(relationTagMap[seed.similarProblemRelation]);
  if (seed.similarProblemNeeded === "필요" && !relationTagMap[seed.similarProblemRelation]) tags.push("유사유형문항");
  if (sourceTagMap[seed.source]) tags.push(sourceTagMap[seed.source]);
  for (const sourceText of [seed.similarProblemSource, seed.source]) {
    const text = String(sourceText || "");
    if (text.includes("교과서")) tags.push("교과서 연계");
    if (text.includes("부교재")) tags.push("부교재 연계");
    if (/EBS/i.test(text)) tags.push("EBS 연계");
    if (text.includes("모의고사")) tags.push("모의고사 연계");
  }
  return tags;
}

export function isExamQuestionInsightRecommended(item = {}) {
  const safeItem = item || {};
  const tags = normalizeExamQuestionTags(safeItem.tags);
  return (
    tags.some((tag) => examQuestionInsightTags.includes(tag)) ||
    safeItem.similarProblemNeeded === "필요" ||
    ["준킬러", "킬러", "앞번호 고난도", "서술형 변별"].includes(safeItem.role) ||
    ["중상", "상"].includes(safeItem.difficulty)
  );
}

export function hasExamQuestionDetailedInsight(item = {}) {
  const safeItem = item || {};
  return [
    safeItem.teacherComment,
    safeItem.variationRelationComment,
    safeItem.strategyComment,
    formatSsenTypeTags(safeItem.ssenTypeTags),
    safeItem.similarProblemSource,
    safeItem.similarProblemRelation && safeItem.similarProblemRelation !== "확인 필요" ? safeItem.similarProblemRelation : "",
    safeItem.similarProblemNeeded && safeItem.similarProblemNeeded !== "확인 필요" ? safeItem.similarProblemNeeded : ""
  ].some((value) => String(value || "").trim());
}

function normalizeSsenTypeRole(value = "") {
  const text = String(value || "").trim().toLowerCase();
  if (["secondary", "sub", "보조", "보조유형", "결합", "복합"].some((keyword) => text.includes(keyword))) return "secondary";
  return "primary";
}

function normalizeSsenTypeConfidence(value = "") {
  const text = String(value || "").trim();
  return ["상", "중", "하", "확인 필요"].includes(text) ? text : "확인 필요";
}

function createSsenTypeTagFromText(text = "", role = "primary", unitName = "") {
  const value = String(text || "").trim();
  if (!value) return null;
  const code = value.match(/SSEN-[A-Z0-9-]+-\d{2}-\d{2}/i)?.[0]?.toUpperCase() || "";
  const labelWithoutCode = value.replace(/SSEN-[A-Z0-9-]+-\d{2}-\d{2}/i, "").replace(/^[\s|:·-]+/, "").trim();
  return {
    role: normalizeSsenTypeRole(role),
    typeCode: code,
    typeName: code ? labelWithoutCode : labelWithoutCode || value,
    unitName: String(unitName || "").trim(),
    confidence: "확인 필요",
    reason: ""
  };
}

export function normalizeSsenTypeTags(value = []) {
  const rawItems = Array.isArray(value)
    ? value
    : String(value || "").split(/[,/·\n]/).map((text) => text.trim()).filter(Boolean);
  const seen = new Set();
  const tags = rawItems
    .map((tag, index) => {
      const source = tag && typeof tag === "object" ? tag : createSsenTypeTagFromText(tag, index === 0 ? "primary" : "secondary");
      if (!source) return null;
      const typeCode = String(source.typeCode || source.code || source.ssenTypeCode || "").trim().toUpperCase();
      const typeName = String(source.typeName || source.name || source.label || "").replace(/SSEN-[A-Z0-9-]+-\d{2}-\d{2}/i, "").trim();
      const unitName = String(source.unitName || source.unit || source.chapter || "").trim();
      if (!typeCode && !typeName) return null;
      const key = typeCode || [unitName, typeName].filter(Boolean).join("|");
      if (!key || seen.has(key)) return null;
      seen.add(key);
      return {
        role: index === 0 ? "primary" : normalizeSsenTypeRole(source.role || source.typeRole || source.kind),
        typeCode,
        typeName,
        unitName,
        subject: String(source.subject || "").trim(),
        confidence: normalizeSsenTypeConfidence(source.confidence || source.certainty),
        reason: String(source.reason || source.note || source.comment || "").trim()
      };
    })
    .filter(Boolean)
    .slice(0, 3);
  if (tags.length) tags[0] = { ...tags[0], role: "primary" };
  return tags;
}

export function formatSsenTypeTag(tag = {}) {
  return [tag.typeCode, tag.typeName].filter(Boolean).join(" ");
}

export function getSsenCompactTypeCode(tag = {}) {
  const code = String(tag?.typeCode || tag?.code || tag?.ssenTypeCode || "").trim().toUpperCase();
  if (!code) return "";
  const numericTail = code.match(/(\d{2}-\d{2})$/)?.[1];
  return numericTail || code;
}

export function formatSsenTypeTagForDisplay(tag = {}, options = {}) {
  const compactCode = getSsenCompactTypeCode(tag);
  const typeName = String(tag?.typeName || tag?.name || tag?.label || "").replace(/SSEN-[A-Z0-9-]+-\d{2}-\d{2}/i, "").trim();
  const unitName = String(tag?.unitName || "").trim();
  const label = typeName || unitName;
  if (options.multiline && compactCode && label) return `${compactCode}\n${label}`;
  return [compactCode, label].filter(Boolean).join(" ");
}

export function formatSsenTypeTagsForDisplay(tags = [], options = {}) {
  const separator = options.multiline ? "\n" : ", ";
  return normalizeSsenTypeTags(tags).map((tag) => {
    const prefix = tag.role === "secondary" ? "보조" : "주";
    const label = formatSsenTypeTagForDisplay(tag, options) || tag.unitName;
    return `${prefix}: ${label}`.trim();
  }).join(separator);
}

function normalizeSsenSearchText(value = "") {
  return String(value ?? "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[·ㆍ|:()[\]{}.,-]/g, "");
}

export function formatSsenTypeTags(tags = []) {
  return normalizeSsenTypeTags(tags).map((tag) => {
    const prefix = tag.role === "secondary" ? "보조" : "주";
    return `${prefix}: ${formatSsenTypeTag(tag) || tag.unitName}`.trim();
  }).join(", ");
}

export function getSsenPrimaryTypeText(tags = []) {
  const normalized = normalizeSsenTypeTags(tags);
  const tag = normalized.find((item) => item.role === "primary") || normalized[0];
  return tag ? formatSsenTypeTag(tag) : "";
}

export function getSsenSecondaryTypeText(tags = []) {
  return normalizeSsenTypeTags(tags)
    .filter((tag, index) => tag.role === "secondary" || index > 0)
    .map(formatSsenTypeTag)
    .filter(Boolean)
    .join(", ");
}

export function updateSsenPrimaryTypeTags(tags = [], value = "", unitName = "") {
  const secondaryTags = normalizeSsenTypeTags(tags).filter((tag) => tag.role === "secondary");
  const primary = createSsenTypeTagFromText(value, "primary", unitName);
  return normalizeSsenTypeTags(primary ? [primary, ...secondaryTags] : secondaryTags);
}

export function updateSsenSecondaryTypeTags(tags = [], value = "", unitName = "") {
  const normalized = normalizeSsenTypeTags(tags);
  const primary = normalized.find((tag) => tag.role === "primary") || normalized[0] || null;
  const secondaryTags = String(value || "")
    .split(/[,/·\n]/)
    .map((text) => createSsenTypeTagFromText(text, "secondary", unitName))
    .filter(Boolean);
  return normalizeSsenTypeTags([primary, ...secondaryTags].filter(Boolean));
}

export function getSsenTypeSuggestions({ query = "", subject = "", unit = "", limit = 8 } = {}) {
  const normalizedQuery = normalizeSsenSearchText(query);
  const normalizedSubject = normalizeSsenSearchText(subject);
  const normalizedUnit = normalizeSsenSearchText(unit);
  const hasQuery = normalizedQuery.length >= 2;
  const scored = ssenTypeIndex
    .map((row) => {
      const subjectText = normalizeSsenSearchText(row.subject);
      const unitText = normalizeSsenSearchText(row.unitName);
      const typeText = normalizeSsenSearchText(row.typeName);
      const codeText = normalizeSsenSearchText(row.typeCode);
      const subjectScore = normalizedSubject && subjectText.includes(normalizedSubject) ? 5 : 0;
      const unitScore = normalizedUnit && unitText.includes(normalizedUnit) ? 4 : 0;
      const queryScore = hasQuery && (typeText.includes(normalizedQuery) || codeText.includes(normalizedQuery) || unitText.includes(normalizedQuery)) ? 8 : 0;
      const score = subjectScore + unitScore + queryScore;
      return score ? { row, score } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || a.row.typeCode.localeCompare(b.row.typeCode));
  return scored.slice(0, limit).map((item) => item.row);
}

export function createExamQuestionItem(seed = {}, index = 0) {
  const number = seed.number || index + 1;
  return {
    questionId: seed.questionId || `exam_question_${Date.now()}_${index + 1}_${Math.random().toString(36).slice(2, 6)}`,
    number,
    page: seed.page || 1,
    score: seed.score || "",
    questionType: seed.questionType || "확인 필요",
    unit: seed.unit || "",
    difficulty: seed.difficulty || "확인 필요",
    role: seed.role || "기본",
    source: seed.source || "확인 필요",
    correctRate: seed.correctRate || "",
    similarProblemNeeded: similarProblemNeedOptions.includes(seed.similarProblemNeeded) ? seed.similarProblemNeeded : "확인 필요",
    similarProblemSource: seed.similarProblemSource || "",
    similarProblemRelation: similarProblemRelationOptions.includes(seed.similarProblemRelation) ? seed.similarProblemRelation : "확인 필요",
    cropSourceId: seed.cropSourceId || "",
    cropSourceUrl: seed.cropSourceUrl || "",
    cropBox: seed.cropBox || null,
    ocrText: seed.ocrText || "",
    teacherComment: seed.teacherComment || "",
    variationRelationComment: seed.variationRelationComment || "",
    strategyComment: seed.strategyComment || "",
    ssenTypeTags: normalizeSsenTypeTags(seed.ssenTypeTags || seed.ssenTypes || seed.ssenType),
    tags: normalizeExamQuestionTags([...(Array.isArray(seed.tags) ? seed.tags : String(seed.tags || "").split(/[,/·]/)), ...getDerivedExamQuestionMetadataTags(seed)])
  };
}

export function normalizeExamQuestionItems(items = []) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => createExamQuestionItem(item, index))
    .sort((a, b) => Number(a.number || 0) - Number(b.number || 0));
}

export function createExamQuestionClassificationRow(seed = {}, index = 0) {
  const number = Number(seed.number || seed.questionNumber || seed.no) || index + 1;
  const confidence = String(seed.confidence || "").trim();
  const ssenTypeTags = normalizeSsenTypeTags(seed.ssenTypeTags || seed.ssenTypes || seed.ssenType || seed.ssenTypeTag);
  const needsReview = seed.needsReview === false
    ? false
    : Boolean(seed.needsReview) ||
      !String(seed.unit || "").trim() ||
      !ssenTypeTags.length ||
      ["", "-", "확인 필요", "하"].includes(confidence);
  return {
    classificationId: seed.classificationId || `exam_classification_${Date.now()}_${index + 1}_${Math.random().toString(36).slice(2, 6)}`,
    number,
    page: Math.max(1, Number(seed.page) || 1),
    score: String(seed.score || seed.points || "").trim(),
    questionType: examQuestionTypeOptions.includes(seed.questionType || seed.type) ? (seed.questionType || seed.type) : "확인 필요",
    unit: String(seed.unit || seed.chapter || seed.topic || "").trim(),
    detailType: String(seed.detailType || seed.subtype || seed.typeName || "").trim(),
    difficulty: examQuestionDifficultyOptions.includes(seed.difficulty) ? seed.difficulty : "확인 필요",
    role: examQuestionRoleOptions.includes(seed.role) ? seed.role : "기본",
    source: examQuestionSourceOptions.includes(seed.source) ? seed.source : "확인 필요",
    evidence: String(seed.evidence || seed.summary || seed.questionSummary || seed.ocrText || "").trim(),
    reviewNote: String(seed.reviewNote || seed.strategyComment || seed.teacherComment || seed.comment || "").trim(),
    ssenTypeTags,
    tags: normalizeExamQuestionTags(Array.isArray(seed.tags) ? seed.tags : String(seed.tags || "").split(/[,/·]/)),
    sourceId: String(seed.sourceId || seed.questionSourceId || seed.cropSourceId || "").trim(),
    sourceUrl: String(seed.sourceUrl || seed.questionSourceUrl || seed.cropSourceUrl || "").trim(),
    needsReview,
    confidence: confidence || (needsReview ? "확인 필요" : "중")
  };
}

export function normalizeExamQuestionClassificationRows(rows = []) {
  if (!Array.isArray(rows)) return [];
  return rows
    .map((row, index) => createExamQuestionClassificationRow(row, index))
    .sort((a, b) => Number(a.page || 1) - Number(b.page || 1) || Number(a.number || 0) - Number(b.number || 0));
}

export function createExamQuestionClassificationRowsFromCount(count, existingRows = []) {
  const safeCount = Math.max(1, Math.min(80, Number(count) || 20));
  const normalizedExisting = normalizeExamQuestionClassificationRows(existingRows);
  const byNumber = new Map();
  normalizedExisting.forEach((row) => {
    const number = Number(row.number);
    if (number > 0 && !byNumber.has(number)) byNumber.set(number, row);
  });
  return Array.from({ length: safeCount }, (_, index) => {
    const number = index + 1;
    return createExamQuestionClassificationRow(byNumber.get(number) || { number }, index);
  });
}

export function isExamQuestionClassificationRowMissingDraft(row = {}) {
  const safeRow = createExamQuestionClassificationRow(row);
  const hasUnit = Boolean(String(safeRow.unit || "").trim());
  const hasDetail = Boolean(String(safeRow.detailType || "").trim());
  const hasEvidence = Boolean(String(safeRow.evidence || safeRow.reviewNote || "").trim());
  const hasSsenType = normalizeSsenTypeTags(safeRow.ssenTypeTags).length > 0;
  const hasMeaningfulDifficulty = safeRow.difficulty && safeRow.difficulty !== "확인 필요";
  return !hasUnit && !hasDetail && !hasEvidence && !hasSsenType && !hasMeaningfulDifficulty;
}

export function getMissingExamQuestionClassificationNumbers(rows = [], targetCount = 0) {
  const normalizedRows = normalizeExamQuestionClassificationRows(rows);
  const count = Math.max(
    normalizedRows.length,
    Math.min(80, Math.max(0, Number(targetCount) || 0))
  );
  if (!count) return [];
  const byNumber = new Map(normalizedRows.map((row) => [Number(row.number), row]));
  return Array.from({ length: count }, (_, index) => index + 1).filter((number) => {
    const row = byNumber.get(number);
    return !row || isExamQuestionClassificationRowMissingDraft(row);
  });
}

export function mergeExamQuestionClassificationDrafts(existingRows = [], aiRows = [], options = {}) {
  const existing = normalizeExamQuestionClassificationRows(existingRows);
  const drafts = normalizeExamQuestionClassificationRows(aiRows);
  const targetCount = Math.max(0, Math.min(80, Number(options.targetCount) || 0));
  const baseRows = targetCount && existing.length < targetCount
    ? createExamQuestionClassificationRowsFromCount(targetCount, existing)
    : existing;
  const draftByNumber = new Map(drafts.map((row) => [Number(row.number), row]));
  const isBlank = (value) => !String(value ?? "").trim() || ["-", "확인 필요", "단원 미입력"].includes(String(value ?? "").trim());
  const mergeValue = (currentValue, draftValue, defaultValue = "") => {
    const next = String(draftValue ?? "").trim();
    if (!next || next === "확인 필요") return currentValue || defaultValue;
    return isBlank(currentValue) ? next : currentValue;
  };
  const mergePageValue = (currentValue, draftValue) => {
    const currentPage = Math.max(1, Number(currentValue) || 1);
    const draftPage = Math.max(0, Number(draftValue) || 0);
    if (!draftPage) return currentPage;
    return currentPage <= 1 && draftPage > 1 ? draftPage : currentPage;
  };
  const merged = baseRows.map((row) => {
    const draft = draftByNumber.get(Number(row.number));
    if (!draft) return row;
    return createExamQuestionClassificationRow({
      ...row,
      page: mergePageValue(row.page, draft.page),
      score: mergeValue(row.score, draft.score),
      questionType: mergeValue(row.questionType, draft.questionType, "확인 필요"),
      unit: mergeValue(row.unit, draft.unit),
      detailType: mergeValue(row.detailType, draft.detailType),
      difficulty: mergeValue(row.difficulty, draft.difficulty, "확인 필요"),
      role: (!row.role || row.role === "기본" || row.role === "확인 필요") && draft.role && draft.role !== "확인 필요" ? draft.role : row.role,
      source: mergeValue(row.source, draft.source, "확인 필요"),
      evidence: row.evidence || draft.evidence,
      reviewNote: row.reviewNote || draft.reviewNote,
      ssenTypeTags: row.ssenTypeTags?.length ? row.ssenTypeTags : draft.ssenTypeTags,
      tags: Array.from(new Set([...(row.tags ?? []), ...(draft.tags ?? [])])),
      sourceId: row.sourceId || draft.sourceId || options.sourceId || "",
      sourceUrl: row.sourceUrl || draft.sourceUrl || options.sourceUrl || "",
      needsReview: row.needsReview || draft.needsReview,
      confidence: draft.confidence || row.confidence
    });
  });
  const existingNumbers = new Set(merged.map((row) => Number(row.number)));
  const additions = drafts.filter((row) => {
    const number = Number(row.number);
    return number > 0 && (!targetCount || number <= targetCount) && !existingNumbers.has(number);
  });
  return normalizeExamQuestionClassificationRows([...merged, ...additions]);
}

export function classificationRowsToInsightItems(rows = []) {
  return normalizeExamQuestionClassificationRows(rows).map((row, index) => createExamQuestionItem({
    questionId: row.classificationId,
    number: row.number,
    page: row.page,
    score: row.score,
    questionType: row.questionType,
    unit: row.unit,
    difficulty: row.difficulty,
    role: row.role,
    source: row.source,
    ocrText: row.evidence,
    strategyComment: row.reviewNote,
    ssenTypeTags: row.ssenTypeTags,
    tags: row.tags
  }, index));
}

export function formatQuestionClassificationParseDiagnostics(diagnostics = {}, rawTextPreview = "") {
  const populatedCandidates = Array.isArray(diagnostics.populatedCandidates) ? diagnostics.populatedCandidates : [];
  const candidateText = populatedCandidates.length
    ? populatedCandidates.slice(0, 4).map((candidate) => {
        const size = candidate.type === "array"
          ? `${candidate.length}개`
          : candidate.type === "object"
            ? `${candidate.valueCount || candidate.objectValueCount || 0}값`
            : candidate.type;
        return `${candidate.path}:${size}`;
      }).join(", ")
    : "없음";
  const topKeys = Array.isArray(diagnostics.topLevelKeys) && diagnostics.topLevelKeys.length
    ? diagnostics.topLevelKeys.slice(0, 8).join(", ")
    : "없음";
  const detectedKeys = Array.isArray(diagnostics.detectedKeys) && diagnostics.detectedKeys.length
    ? diagnostics.detectedKeys.slice(0, 10).join(", ")
    : "";
  const previewSource = String(rawTextPreview || diagnostics.rawTextPreview || "");
  const preview = previewSource
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 320);
  const diagnosticRawLength = Number(diagnostics.rawTextLength);
  const rawTextLength = Number.isFinite(diagnosticRawLength) && diagnosticRawLength > 0
    ? diagnosticRawLength
    : previewSource.length;
  const rowsKeyStatus = diagnostics.containsClassificationRowsKey
    ? "classificationRows 있음"
    : diagnostics.containsQuestionClassificationsKey
      ? "questionClassifications 있음"
      : "행 배열 키 없음";
  const missingRows = Array.isArray(diagnostics.missingRowNumbers) && diagnostics.missingRowNumbers.length
    ? `누락 문항: ${diagnostics.missingRowNumbers.slice(0, 20).map((number) => `${number}번`).join(", ")}${diagnostics.missingRowNumbers.length > 20 ? ` 외 ${diagnostics.missingRowNumbers.length - 20}개` : ""}`
    : "";
  const jsonShape = [
    diagnostics.jsonStart !== undefined ? `start=${diagnostics.jsonStart}` : "",
    diagnostics.jsonEnd !== undefined ? `end=${diagnostics.jsonEnd}` : "",
    diagnostics.braceBalance !== undefined ? `brace=${diagnostics.braceBalance}` : "",
    diagnostics.squareBracketBalance !== undefined ? `bracket=${diagnostics.squareBracketBalance}` : ""
  ].filter(Boolean).join(", ");
  const looseText = diagnostics.looseRowCount || diagnostics.looseRowObjectTextCount
    ? `부분 행 복구: ${diagnostics.looseRowCount || 0}행 (${diagnostics.looseRowKey || "키 미확인"})`
    : "";
  const diagnosis = diagnostics.containsClassificationSummaryKey && !diagnostics.containsClassificationRowsKey && !diagnostics.containsQuestionClassificationsKey
    ? "판정: AI가 분류표 행 없이 요약 JSON만 반환했습니다."
    : diagnostics.likelyTruncated
      ? "판정: AI JSON 응답이 끝까지 닫히지 않았을 가능성이 큽니다."
      : "";
  return [
    `JSON 파싱: ${diagnostics.parseMode || "확인 불가"}`,
    diagnostics.parseError ? `파싱 오류: ${diagnostics.parseError}` : "",
    `AI 원문: ${rawTextLength}자`,
    `이미지 입력: ${diagnostics.pageImageCount ?? "?"}장`,
    `행 배열 키: ${rowsKeyStatus}`,
    missingRows,
    jsonShape ? `JSON 형태: ${jsonShape}` : "",
    `상위 키: ${topKeys}`,
    detectedKeys && topKeys === "없음" ? `감지 키: ${detectedKeys}` : "",
    `분류 후보 경로: ${candidateText}`,
    looseText,
    diagnosis,
    preview ? `원문 시작: ${preview}` : ""
  ].filter(Boolean).join("\n");
}
