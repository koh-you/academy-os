// @ts-nocheck -- verbatim server-side catalog helpers; Node fs types are not part of the frontend TS project.
import fs from "node:fs";

const ssenTypeIndex = JSON.parse(
  fs.readFileSync(new URL("../../../api/data/ssenTypeIndex.json", import.meta.url), "utf8")
);
const ssenSubjectNames = [...new Set(ssenTypeIndex
  .map((row) => String(row.subject || "").trim())
  .filter(Boolean))];
const ssenSubjectNameSet = new Set(ssenSubjectNames);
const ssenSubjectByTypeCode = new Map(ssenTypeIndex
  .filter((row) => row.typeCode && row.subject)
  .map((row) => [String(row.typeCode).trim(), String(row.subject).trim()]));

export function inferExamAnalysisSubjectFromText(value = "") {
  const text = String(value || "").replace(/\s+/g, "");
  const candidates = [
    [/공통수학1|공수1|공통수학Ⅰ|공통수학I/i, "공통수학1"],
    [/공통수학2|공수2|공통수학Ⅱ|공통수학II/i, "공통수학2"],
    [/미적분2|미적분Ⅱ|미적분II/i, "미적분2"],
    [/미적분1|미적분Ⅰ|미적분I/i, "미적분1"],
    [/확률과통계|확통/i, "확률과 통계"],
    [/기하/i, "기하"],
    [/대수/i, "대수"]
  ];
  const inferredSubject = candidates.find(([pattern]) => pattern.test(text))?.[1] ?? "";
  return inferredSubject && ssenSubjectNameSet.has(inferredSubject) ? inferredSubject : "";
}

export function sanitizeExamAnalysisSubject(value = "") {
  const text = String(value || "").trim().replace(/\s+/g, " ");
  if (!text) return "";
  const compactText = text.replace(/\s+/g, "");
  if (["수학", "수학영역", "수학과"].includes(compactText)) return "";
  const inferredSubject = inferExamAnalysisSubjectFromText(text);
  if (inferredSubject && ssenSubjectNameSet.has(inferredSubject)) return inferredSubject;
  return ssenSubjectNames.find((subject) => subject.replace(/\s+/g, "") === compactText) || "";
}

function collectExamAnalysisQuestionTypeCodes(questions = []) {
  const codes = [];
  const addCode = (value) => {
    const code = String(value || "").trim();
    if (code) codes.push(code);
  };
  const addCodes = (values) => {
    if (Array.isArray(values)) values.forEach(addCode);
  };
  (Array.isArray(questions) ? questions : []).forEach((question) => {
    addCode(question.mainTypeCode ?? question.main_type_code);
    addCodes(question.subTypeCodes ?? question.sub_type_codes);
    [question.finalFields, question.teacherFields, question.aiFields, question.final_fields, question.teacher_fields, question.ai_fields]
      .filter((fields) => fields && typeof fields === "object")
      .forEach((fields) => {
        addCode(fields.mainTypeCode ?? fields.main_type_code);
        addCodes(fields.subTypeCodes ?? fields.sub_type_codes);
        addCode(fields.ssenMeta?.mainType?.typeCode ?? fields.ssen_meta?.main_type?.type_code);
        addCodes(Array.isArray(fields.ssenMeta?.subTypes)
          ? fields.ssenMeta.subTypes.map((item) => item?.typeCode)
          : []);
        addCodes(Array.isArray(fields.ssen_meta?.sub_types)
          ? fields.ssen_meta.sub_types.map((item) => item?.type_code)
          : []);
      });
  });
  return [...new Set(codes)];
}

function inferExamAnalysisSubjectFromTypeCodes(typeCodes = []) {
  const subjectCounts = new Map();
  (Array.isArray(typeCodes) ? typeCodes : []).forEach((typeCode) => {
    const subject = ssenSubjectByTypeCode.get(String(typeCode || "").trim());
    if (subject) subjectCounts.set(subject, (subjectCounts.get(subject) ?? 0) + 1);
  });
  return [...subjectCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "";
}

export function getExamAnalysisSsenSubject({ sourceFile = {}, analysisRun = {}, sourceFiles = [], questions = [] } = {}) {
  const inferredSubject = inferExamAnalysisSubjectFromText([
    analysisRun.subject,
    analysisRun.extractionSummary?.visionCheck?.subject,
    analysisRun.extractionSummary?.visionCheck?.firstPageEvidence,
    analysisRun.extractionSummary?.visionCheck?.lastPageEvidence,
    sourceFile.originalFileName,
    ...(Array.isArray(sourceFiles) ? sourceFiles.map((source) => source.originalFileName) : []),
    analysisRun.title
  ].filter(Boolean).join("\n"));
  if (inferredSubject) return inferredSubject;
  const typeCodeSubject = inferExamAnalysisSubjectFromTypeCodes(collectExamAnalysisQuestionTypeCodes(questions));
  if (typeCodeSubject) return typeCodeSubject;
  return sanitizeExamAnalysisSubject(analysisRun.subject);
}

export function getSsenTypesForExamAnalysis({ sourceFile = {}, analysisRun = {}, questions = [] } = {}) {
  const subject = getExamAnalysisSsenSubject({ sourceFile, analysisRun, questions });
  const types = subject
    ? ssenTypeIndex.filter((item) => item.subject === subject)
    : [];
  return {
    subject,
    types: types.length ? types : ssenTypeIndex.slice(0, 240)
  };
}

function compactSsenScopeText(value = "") {
  return String(value || "").replace(/[\s.,，/|·:;()[\]{}~\-–—_]+/g, "");
}

function getSsenScopeTokens(scopeText = "") {
  return String(scopeText || "")
    .split(/[\n,，/|·:;()[\]{}]+|부터|까지|~/g)
    .map(compactSsenScopeText)
    .filter((token) => token.length >= 2);
}

function getSsenScopeSegments(scopeText = "") {
  return String(scopeText || "")
    .split(/[\n,，/|·:;()[\]{}]+/g)
    .map((segment) => segment.trim())
    .filter(Boolean);
}

function getSsenUnitKey(row = {}) {
  return [row.partName, row.unitNo, row.unitName].map((item) => String(item ?? "").trim()).join("|");
}

function getSsenUnitNumber(row = {}) {
  const unitNo = Number(row.unitNo);
  return Number.isInteger(unitNo) ? unitNo : null;
}

function addSsenUnitRange(unitKeys, rows = [], startUnitNo, endUnitNo) {
  if (!Number.isInteger(startUnitNo) || !Number.isInteger(endUnitNo)) return;
  const minUnitNo = Math.min(startUnitNo, endUnitNo);
  const maxUnitNo = Math.max(startUnitNo, endUnitNo);
  rows.forEach((row) => {
    const unitNo = getSsenUnitNumber(row);
    if (Number.isInteger(unitNo) && unitNo >= minUnitNo && unitNo <= maxUnitNo) {
      unitKeys.add(getSsenUnitKey(row));
    }
  });
}

function ssenRowMatchesScope(row = {}, scopeText = "") {
  const compactScope = compactSsenScopeText(scopeText);
  const tokens = getSsenScopeTokens(scopeText);
  const partName = compactSsenScopeText(row.partName);
  const unitName = compactSsenScopeText(row.unitName);
  const typeName = compactSsenScopeText(row.typeName);
  if (!compactScope) return false;
  if ([partName, unitName].filter(Boolean).some((label) => compactScope.includes(label))) return true;
  return tokens.some((token) => (
    (partName && (partName.includes(token) || token.includes(partName))) ||
    (unitName && (unitName.includes(token) || token.includes(unitName))) ||
    (typeName && typeName.includes(token))
  ));
}

function getSsenUnitLabelMatchedKeys(rows = [], scopeText = "") {
  const compactScope = compactSsenScopeText(scopeText);
  if (!compactScope) return new Set();
  const tokens = getSsenScopeTokens(scopeText);
  const exactLabelKeys = new Set(rows
    .filter((row) => [row.partName, row.unitName]
      .map(compactSsenScopeText)
      .filter(Boolean)
      .some((label) => tokens.includes(label)))
    .map(getSsenUnitKey));
  if (exactLabelKeys.size) return exactLabelKeys;

  const unitNameKeys = new Set(rows
    .filter((row) => {
      const unitName = compactSsenScopeText(row.unitName);
      return unitName && compactScope.includes(unitName);
    })
    .map(getSsenUnitKey));
  if (unitNameKeys.size) return unitNameKeys;

  return new Set(rows
    .filter((row) => {
      const partName = compactSsenScopeText(row.partName);
      return partName && compactScope.includes(partName);
    })
    .map(getSsenUnitKey));
}

function getSsenScopeMatchedUnitKeys(rows = [], scopeText = "") {
  const segments = getSsenScopeSegments(scopeText);
  const matchedUnitKeys = new Set();
  const sortedUnitNumbers = [...new Set(rows.map(getSsenUnitNumber).filter((number) => Number.isInteger(number)))]
    .sort((a, b) => a - b);
  const firstUnitNo = sortedUnitNumbers[0] ?? null;

  segments.forEach((segment) => {
    const unitLabelMatchedKeys = getSsenUnitLabelMatchedKeys(rows, segment);
    const segmentMatchedUnitKeys = unitLabelMatchedKeys.size
      ? unitLabelMatchedKeys
      : new Set(rows.filter((row) => ssenRowMatchesScope(row, segment)).map(getSsenUnitKey));
    const segmentUnitNumbers = [...segmentMatchedUnitKeys]
      .map((key) => Number(key.split("|")[1]))
      .filter((number) => Number.isInteger(number));
    const scopeHasRange = /[~\-–—]|부터|까지/.test(segment);
    if (scopeHasRange && segmentUnitNumbers.length >= 2) {
      addSsenUnitRange(matchedUnitKeys, rows, Math.min(...segmentUnitNumbers), Math.max(...segmentUnitNumbers));
      return;
    }
    if (
      scopeHasRange
      && segmentUnitNumbers.length === 1
      && Number.isInteger(firstUnitNo)
      && (/^\s*[~\-–—]/.test(segment) || /까지/.test(segment))
    ) {
      addSsenUnitRange(matchedUnitKeys, rows, firstUnitNo, segmentUnitNumbers[0]);
      return;
    }
    segmentMatchedUnitKeys.forEach((key) => matchedUnitKeys.add(key));
  });

  return matchedUnitKeys;
}

function normalizeSsenTypeIndexRow(row = {}, scopeText = "") {
  const partName = String(row.partName ?? "").trim();
  const unitName = String(row.unitName ?? "").trim();
  return {
    bookCode: row.bookCode || "",
    bookTitle: row.bookTitle || "",
    subject: row.subject || "",
    typeCode: row.typeCode || "",
    partName,
    unitNo: row.unitNo || "",
    unitName,
    typeNo: row.typeNo || "",
    typeName: row.typeName || "",
    scopeMatched: ssenRowMatchesScope(row, scopeText)
  };
}

export function getSsenTypeCatalogForExamAnalysis({
  subject = "",
  scope = "",
  analysisRun = null,
  sourceFiles = [],
  questions = []
} = {}) {
  const inferredSubject = inferExamAnalysisSubjectFromText([
    subject,
    scope,
    analysisRun?.subject,
    analysisRun?.extractionSummary?.visionCheck?.subject,
    analysisRun?.extractionSummary?.visionCheck?.firstPageEvidence,
    analysisRun?.extractionSummary?.visionCheck?.lastPageEvidence,
    analysisRun?.title,
    ...(Array.isArray(sourceFiles) ? sourceFiles.map((source) => source.originalFileName) : [])
  ].filter(Boolean).join("\n"));
  const typeCodeSubject = inferExamAnalysisSubjectFromTypeCodes(collectExamAnalysisQuestionTypeCodes(questions));
  const normalizedSubject = inferredSubject
    || typeCodeSubject
    || sanitizeExamAnalysisSubject(subject)
    || sanitizeExamAnalysisSubject(analysisRun?.subject);
  const subjectTypes = normalizedSubject
    ? ssenTypeIndex.filter((item) => item.subject === normalizedSubject)
    : [];
  const normalizedTypes = subjectTypes.map((row) => normalizeSsenTypeIndexRow(row, scope));
  const matchedUnitKeys = getSsenScopeMatchedUnitKeys(normalizedTypes, scope);
  const scopeMatchedTypes = matchedUnitKeys.size
    ? normalizedTypes
        .filter((row) => matchedUnitKeys.has(getSsenUnitKey(row)))
        .map((row) => ({ ...row, scopeMatched: true }))
    : [];
  const visibleTypes = scopeMatchedTypes.length ? scopeMatchedTypes : normalizedTypes;
  const unitMap = new Map();
  visibleTypes.forEach((row) => {
    const key = [row.partName, row.unitNo, row.unitName].join("|");
    if (!unitMap.has(key)) {
      unitMap.set(key, {
        key,
        partName: row.partName,
        unitNo: row.unitNo,
        unitName: row.unitName,
        typeCount: 0
      });
    }
    unitMap.get(key).typeCount += 1;
  });
  return {
    subject: normalizedSubject,
    scope: String(scope || "").trim(),
    status: !normalizedSubject
      ? "subject_missing"
      : scope && !scopeMatchedTypes.length
        ? "scope_not_matched"
        : scopeMatchedTypes.length
          ? "scope_matched"
          : "subject_all",
    subjectTypeCount: subjectTypes.length,
    scopeMatchedCount: scopeMatchedTypes.length,
    types: visibleTypes,
    units: [...unitMap.values()]
  };
}

export function formatSsenTypeCandidatesForPrompt(types = []) {
  return (Array.isArray(types) ? types : [])
    .slice(0, 240)
    .map((item) => `${item.typeCode} | ${item.unitName} | ${item.typeName}`)
    .join("\n");
}
