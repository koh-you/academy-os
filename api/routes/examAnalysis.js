import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";
const ANTHROPIC_MESSAGES_URL = "https://api.anthropic.com/v1/messages";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SSEN_TYPE_INDEX_PATH = path.join(__dirname, "..", "data", "ssenTypeIndex.json");
const EXAM_ANALYSIS_RAW_TEXT_LIMIT = 16000;
const EXAM_QUESTION_CLASSIFICATION_TEXT_LIMIT = 24000;
const SSEN_TYPE_PROMPT_ROW_LIMIT = 420;
const QUESTION_CLASSIFICATION_IMAGE_LIMIT = 8;

const fallbackModels = {
  anthropic: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-5",
  mock: "local-mock",
  openai: process.env.OPENAI_MODEL || "gpt-4.1-mini"
};

const examAnalysisModels = {
  anthropic: process.env.ANTHROPIC_EXAM_ANALYSIS_MODEL || "claude-opus-4-8",
  mock: "local-mock",
  openai: process.env.OPENAI_EXAM_ANALYSIS_MODEL || "gpt-5.5"
};

const examQuestionClassificationModels = {
  anthropic: process.env.ANTHROPIC_EXAM_CLASSIFICATION_MODEL || fallbackModels.anthropic,
  mock: "local-mock",
  openai: process.env.OPENAI_EXAM_CLASSIFICATION_MODEL || fallbackModels.openai
};

function isRetryableAiProviderError(error) {
  const message = String(error?.message || "").toLowerCase();
  return [
    "quota",
    "billing",
    "rate limit",
    "429",
    "model",
    "not found",
    "overloaded",
    "temporarily",
    "timeout"
  ].some((keyword) => message.includes(keyword));
}

function loadSsenTypeIndex() {
  try {
    const rows = JSON.parse(fs.readFileSync(SSEN_TYPE_INDEX_PATH, "utf8"));
    return Array.isArray(rows)
      ? rows.filter((row) => row && typeof row === "object" && row.typeCode && row.typeName)
      : [];
  } catch {
    return [];
  }
}

const ssenTypeIndex = loadSsenTypeIndex();
const ssenTypeByCode = new Map(ssenTypeIndex.map((row) => [String(row.typeCode).trim().toUpperCase(), row]));
const ssenTypeByNameKey = new Map();
ssenTypeIndex.forEach((row) => {
  const key = normalizeCompactText([row.subject, row.unitName, row.typeName].filter(Boolean).join(" "));
  if (key && !ssenTypeByNameKey.has(key)) ssenTypeByNameKey.set(key, row);
});

function normalizeCompactText(value = "") {
  return String(value ?? "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[·ㆍ]/g, "")
    .replace(/[(){}\[\],.]/g, "");
}

function getSsenSearchText(payload = {}) {
  const examPrepContext = payload.examPrepContext && typeof payload.examPrepContext === "object" ? payload.examPrepContext : {};
  return [
    payload.subject,
    payload.grade,
    payload.examName,
    examPrepContext.scope,
    examPrepContext.subTextbook,
    Array.isArray(payload.sourceFiles) ? payload.sourceFiles.map((file) => file.fileName || file.storagePath || "").join(" ") : "",
    Array.isArray(payload.questionItems) ? payload.questionItems.map((item) => [item.unit, item.questionType].filter(Boolean).join(" ")).join(" ") : "",
    String(payload.rawExamText || "").slice(0, 3000)
  ].filter(Boolean).join(" ");
}

function inferSsenBookCodesFromGradeAndTerm(payload = {}) {
  const text = [
    payload.grade,
    payload.subject,
    payload.examName,
    payload.examDate,
    Array.isArray(payload.sourceFiles) ? payload.sourceFiles.map((file) => file.fileName || file.storagePath || "").join(" ") : ""
  ].filter(Boolean).join(" ");
  const compact = normalizeCompactText(text.replace(/[-_/]/g, ""));
  const hasHigh1 = /고\s*1|1학년/.test(text) || compact.includes("고1");
  if (!hasHigh1) return [];
  const hasFirstTerm = /1\s*학기|1[-_/\s]?1|중간|기말/.test(text) || compact.includes("1학기");
  const hasSecondTerm = /2\s*학기|1[-_/\s]?2/.test(text) || compact.includes("2학기");
  if (hasSecondTerm && !hasFirstTerm) return ["SSEN-CM2"];
  if (hasFirstTerm && !hasSecondTerm) return ["SSEN-CM1"];
  return ["SSEN-CM1", "SSEN-CM2"];
}

function resolveSsenBookCodes(payload = {}) {
  const text = normalizeCompactText(getSsenSearchText(payload));
  const candidates = [
    { code: "SSEN-CM1", keywords: ["공통수학1", "공통수학Ⅰ", "공통수학i", "공수1"] },
    { code: "SSEN-CM2", keywords: ["공통수학2", "공통수학Ⅱ", "공통수학ii", "공수2"] },
    { code: "SSEN-ALG-2022", keywords: ["대수", "쎈수학대수"] },
    { code: "SSEN-CALC1", keywords: ["미적분1", "미적분Ⅰ", "미적분i", "미적분"] },
    { code: "SSEN-PROB-STAT", keywords: ["확률과통계", "확통", "경우의수", "통계"] },
    { code: "SSEN-GEOM-2022", keywords: ["기하", "쎈수학기하"] }
  ];
  const matchedCodes = candidates
    .filter((candidate) => candidate.keywords.some((keyword) => text.includes(normalizeCompactText(keyword))))
    .map((candidate) => candidate.code);
  return matchedCodes.length ? matchedCodes : inferSsenBookCodesFromGradeAndTerm(payload);
}

function resolveSsenTypeRowsForPrompt(payload = {}) {
  const bookCodes = resolveSsenBookCodes(payload);
  if (bookCodes.length) return ssenTypeIndex.filter((row) => bookCodes.includes(row.bookCode));
  const text = normalizeCompactText(getSsenSearchText(payload));
  if (!text) return ssenTypeIndex;
  const matchedRows = ssenTypeIndex.filter((row) => {
    const unitName = normalizeCompactText(row.unitName);
    const partName = normalizeCompactText(row.partName);
    return (unitName && text.includes(unitName)) || (partName && text.includes(partName));
  });
  return matchedRows.length ? matchedRows : ssenTypeIndex;
}

function buildSsenTypePromptSection(payload = {}) {
  if (!ssenTypeIndex.length) {
    return "[쎈 유형 기준표]\n서버에 쎈 유형 기준표가 없어 이번 분석에서는 단원/유형명을 원본 기준으로만 초안 작성한다.";
  }
  const rows = resolveSsenTypeRowsForPrompt(payload);
  const uniqueRows = Array.from(new Map(rows.map((row) => [row.typeCode, row])).values());
  const promptRows = uniqueRows.slice(0, SSEN_TYPE_PROMPT_ROW_LIMIT);
  const truncatedCount = Math.max(0, uniqueRows.length - promptRows.length);
  const bookSummary = Array.from(
    ssenTypeIndex.reduce((map, row) => {
      const previous = map.get(row.bookCode) || { bookTitle: row.bookTitle, count: 0 };
      previous.count += 1;
      map.set(row.bookCode, previous);
      return map;
    }, new Map())
  ).map(([bookCode, row]) => `${bookCode} ${row.bookTitle} ${row.count}개`).join(" / ");

  if (!uniqueRows.length) {
    return [
      "[쎈 유형 기준표]",
      "과목/범위에서 특정 쎈 교재를 확정하지 못했다. 그래도 문항별 분류 행의 ssenTypeTags는 비워두지 말고 지원 교재 범위 안에서 가장 가까운 쎈 유형 후보를 자동 매칭한다.",
      `지원 교재: ${bookSummary}`
    ].join("\n");
  }

  return [
    "[쎈 유형 기준표]",
    uniqueRows.length === ssenTypeIndex.length
      ? "과목/범위를 좁히지 못해 전체 쎈 유형 기준표에서 후보를 선별 제공한다. 문항 조건, 단원명, 풀이 행동을 비교해 가장 가까운 쎈 유형을 자동 후보로 매칭한다."
      : "아래 기준표는 문항별 쎈 유형 분류에만 사용한다. 문제 원문이나 해설을 만들지 말고 typeCode, bookTitle, unitName, typeName 메타데이터만 참조한다.",
    truncatedCount ? `요청 속도를 위해 기준표는 상위 ${promptRows.length}개 후보만 제공한다. 제공된 후보 안에서 먼저 자동 매칭하고, 부족하면 단원/유형명은 확인 필요로 둔다.` : "",
    "문항별 분류 행의 ssenTypeTags에는 반드시 아래 typeCode 중 하나를 사용한다. 단순 문항은 primary 1개, 복합 문항은 primary 1개와 secondary 1~2개까지 넣는다.",
    "확신이 낮으면 confidence를 '중' 또는 '하'로 낮추고 reason에 강사 확인 포인트를 짧게 쓴다. 정말 판별이 불가능한 경우에만 ssenTypeTags를 빈 배열로 둔다.",
    "형식: typeCode | bookTitle | unitName | typeName",
    promptRows.map((row) => `${row.typeCode} | ${row.bookTitle} | ${row.unitName} | ${row.typeName}`).join("\n")
  ].filter(Boolean).join("\n");
}

function limitPromptText(value = "", limit = EXAM_ANALYSIS_RAW_TEXT_LIMIT) {
  const text = String(value ?? "").trim();
  if (text.length <= limit) return text;
  return `${text.slice(0, limit)}\n\n[이하 원문/OCR 생략: 요청 속도를 위해 ${text.length - limit}자를 잘랐습니다. 필요한 경우 현재 PDF를 선택해 문항별 AI 분석을 다시 실행하세요.]`;
}

function normalizeSsenTypeRole(value = "") {
  const text = String(value || "").trim().toLowerCase();
  if (["secondary", "sub", "보조", "보조유형", "결합", "복합"].some((keyword) => text.includes(keyword))) return "secondary";
  return "primary";
}

function normalizeSsenConfidence(value = "") {
  const text = String(value || "").trim();
  return ["상", "중", "하", "확인 필요"].includes(text) ? text : "확인 필요";
}

function normalizeSsenTypeTags(value = []) {
  const rawItems = Array.isArray(value)
    ? value
    : String(value || "").split(/[,/·]/).map((text) => text.trim()).filter(Boolean);
  const seen = new Set();
  const tags = rawItems
    .map((tag, index) => {
      const source = tag && typeof tag === "object" ? tag : { typeName: String(tag || "") };
      const rawCode = String(source.typeCode || source.code || source.ssenTypeCode || "").trim();
      const codeFromText = rawCode || String(source.typeName || source.name || source.label || "").match(/SSEN-[A-Z0-9-]+-\d{2}-\d{2}/i)?.[0] || "";
      const typeCode = codeFromText.toUpperCase();
      const matchedByCode = typeCode ? ssenTypeByCode.get(typeCode) : null;
      const rawTypeName = String(source.typeName || source.name || source.label || "").replace(/SSEN-[A-Z0-9-]+-\d{2}-\d{2}/i, "").trim();
      const rawUnitName = String(source.unitName || source.unit || source.chapter || "").trim();
      const matchedByName = !matchedByCode && rawTypeName
        ? ssenTypeByNameKey.get(normalizeCompactText([source.subject, rawUnitName, rawTypeName].filter(Boolean).join(" ")))
        : null;
      const matched = matchedByCode || matchedByName || null;
      const nextTypeCode = matched?.typeCode || typeCode;
      const nextTypeName = matched?.typeName || rawTypeName;
      if (!nextTypeCode && !nextTypeName) return null;
      const dedupeKey = nextTypeCode || normalizeCompactText([rawUnitName, nextTypeName].join(" "));
      if (!dedupeKey || seen.has(dedupeKey)) return null;
      seen.add(dedupeKey);
      return {
        role: index === 0 ? "primary" : normalizeSsenTypeRole(source.role || source.typeRole || source.kind),
        typeCode: nextTypeCode,
        typeName: nextTypeName,
        unitName: matched?.unitName || rawUnitName,
        subject: matched?.subject || String(source.subject || "").trim(),
        confidence: normalizeSsenConfidence(source.confidence || source.certainty),
        reason: String(source.reason || source.note || source.comment || "").trim()
      };
    })
    .filter(Boolean)
    .slice(0, 3);
  if (tags.length) tags[0] = { ...tags[0], role: "primary" };
  return tags;
}

function formatSsenTypeTagsForPrompt(tags = []) {
  const normalized = normalizeSsenTypeTags(tags);
  return normalized.map((tag) => [tag.role === "secondary" ? "보조" : "주", tag.typeCode, tag.typeName].filter(Boolean).join(" ")).join(", ");
}

function formatClassificationRowsForPrompt(rows = []) {
  const normalizedRows = normalizeClassificationRowsFromAi(rows);
  if (!normalizedRows.length) return "";
  return normalizedRows.slice(0, 80).map((row) => {
    const ssenText = formatSsenTypeTagsForPrompt(row.ssenTypeTags);
    return [
      `${row.number}번`,
      `p.${row.page || 1}`,
      row.score ? `배점 ${row.score}` : "",
      row.questionType ? `형식 ${row.questionType}` : "",
      row.unit ? `단원 ${row.unit}` : "",
      ssenText ? `쎈 ${ssenText}` : "",
      row.difficulty ? `난이도 ${row.difficulty}` : "",
      row.role ? `역할 ${row.role}` : "",
      row.evidence || row.reviewNote ? `검수 ${row.reviewNote || row.evidence}` : ""
    ].filter(Boolean).join(" · ");
  }).join("\n");
}

function formatTeacherInsightsForPrompt(payload = {}) {
  const rows = [
    ["A. 강사 총평", payload.insightSummary],
    ["B. 단원별 인사이트", payload.insightUnits],
    ["C. 킬러문항 분석", payload.insightKiller],
    ["D. 실제 학생 오답", payload.insightStudentErrors],
    ["E. 다음 시험 예측", payload.insightPrediction],
    ["F. 학습 방향", payload.insightDirection]
  ];
  return rows
    .map(([label, value]) => {
      const text = String(value || "").trim();
      return text ? `${label}\n${text}` : "";
    })
    .filter(Boolean)
    .join("\n\n");
}

function envValue(name) {
  const value = process.env[name];
  return value && !value.startsWith("your_") ? value : "";
}

function requiredEnv(name) {
  const value = envValue(name);
  if (!value) {
    throw new Error(`${name} 환경변수가 필요합니다.`);
  }
  return value;
}

export function getAiStatus() {
  const defaultProviderName = defaultProvider();
  return {
    defaultProvider: defaultProviderName,
    defaultModel: fallbackModels[defaultProviderName] || fallbackModels.mock,
    providers: {
      anthropic: Boolean(envValue("ANTHROPIC_API_KEY")),
      mock: true,
      openai: Boolean(envValue("OPENAI_API_KEY"))
    },
    fallbackModels,
    examAnalysisModels,
    examQuestionClassificationModels
  };
}

function defaultProvider() {
  const requested = (process.env.AI_DEFAULT_PROVIDER || "").toLowerCase();
  if (["anthropic", "mock", "openai"].includes(requested)) return requested;
  if (envValue("OPENAI_API_KEY")) return "openai";
  if (envValue("ANTHROPIC_API_KEY")) return "anthropic";
  return "mock";
}

function selectedProvider(payload) {
  const provider = (payload.aiProvider || "auto").toLowerCase();
  if (provider !== "auto") return provider;
  const requestedModel = String(payload.aiModel || "").toLowerCase();
  if (requestedModel.startsWith("claude-")) return "anthropic";
  if (requestedModel.startsWith("gpt-")) return "openai";
  return defaultProvider();
}

function selectedModel(payload, useCase = "default") {
  const provider = selectedProvider(payload);
  const requestedModel = payload.aiModel;
  if (!requestedModel || requestedModel === "server-default") {
    if (useCase === "examAnalysis") return examAnalysisModels[provider] || fallbackModels[provider] || fallbackModels.mock;
    if (useCase === "questionClassification") return examQuestionClassificationModels[provider] || fallbackModels[provider] || fallbackModels.mock;
    return fallbackModels[provider] || fallbackModels.mock;
  }
  return requestedModel;
}

function defaultExamAnalysisPromptForServer() {
  return [
    "역할: 으뜸수학 고태영T의 학교별 내신 시험분석 협업 AI",
    "",
    "[웹앱의 목적]",
    "이 웹앱의 목적은 시험지를 한 번에 요약하는 것이 아니라, 학교별·학년별·고사별 분석지를 누적하고 AI 1차 분석 → 강사 검수 → 문항별 코멘트 → 표/다이어그램 → 최종 산출물로 이어지는 업무 흐름을 만드는 것이다.",
    "AI는 최종 판단자가 아니라 1차 구조화 담당자다. 최종 산출물은 AI 분석과 강사 인사이트가 결합된 결과여야 한다.",
    "",
    "[분기 규칙]",
    "입력 자료가 1개년 기출이면 해당 시험 1회분을 깊게 분석한다. 문항분석표, 단원별 출제, 킬러·준킬러, 변형·연계 문항, 학생 대비 전략을 우선 만든다.",
    "입력 자료가 3개년 기출이면 연도별 변화와 반복 패턴을 우선 분석한다. 반복/증가/감소/변화/예외를 구분하고, 문항 수 변화 때문에 같은 배점의 의미가 달라질 수 있음을 문장으로 설명한다.",
    "22 개정교육과정 때문에 달라질 수 있는 부분은 변화 가능성 또는 추가 확인 필요로 구분한다.",
    "",
    "[문항별 분석 기준]",
    "시험지 첫 페이지 또는 상단의 문항 구성표를 먼저 읽고 questionComposition에 총 문항 수와 선택형/서술형 구성을 정리한다.",
    "시험지 원본이 2개 이상이면 각 원본 첫 장 기준 문항 메타데이터를 sourceCompositions에 sourceId별로 따로 정리한다.",
    "questionComposition은 문항 카드 생성 전 강사가 확인하는 초안이다. questionItems 배열 길이와 별개로 총 문항 수의 근거를 분리해서 쓴다.",
    "각 문항은 문항 번호, 페이지, 배점, 단원, 유형, 난이도, 역할, 태그, 출처 가능성, OCR/문항 조건 요약, 학생이 틀릴 만한 지점, 강사가 확인해야 할 점, 대비 전략 후보를 가능한 범위에서 정리한다.",
    "AI 1차 분석 단계에서 문항 번호, 페이지, 배점, 쎈 기준 유형, 난이도, 단원 초안을 반드시 questionItems 배열에 넣는다. 모르면 빈칸 대신 '확인 필요'를 쓴다.",
    "여러 해 시험지가 함께 들어온 경우 questionItems는 웹앱에서 현재 선택한 시험지/연도 1회분의 전체 문항 수만큼 작성하고, 3개년 반복/증감/변화는 unitDistribution, typeClassification, killerProblems, sourceCheckNotes에 정리한다.",
    "일부 페이지만 보이거나 OCR 일부만 있더라도 확인 가능한 전체 문항 수를 기준으로 questionItems를 만들고, 모르는 값은 '확인 필요'로 둔다.",
    "문항 태그 기준: 기본문항, 실수문항, 주요문항, 1등급 변별문항, 2등급 변별문항, 숫자변형문항, 조건변형문항, 유사유형문항, 교과서 연계, 부교재 연계, EBS 연계, 모의고사 연계.",
    "쎈 유형은 강사가 수동 입력하기 전에 AI가 먼저 자동 매칭한다. 쎈 유형 기준표가 제공되면 문항 조건, 단원, 풀이 행동을 기준표와 비교해 questionItems.ssenTypeTags에 주유형(primary) 1개와 필요 시 보조유형(secondary) 1~2개를 typeCode/typeName/unitName으로 넣는다.",
    "정확히 확정하기 어렵더라도 가장 가까운 후보를 confidence '중' 또는 '하'로 제안하고, 정말 판별 불가능한 경우에만 빈 배열로 둔다.",
    "",
    "[작성 원칙]",
    "시험관리 탭 데이터가 있으면 특이사항, 시험 범위, 부교재, 시험 일정, 시험 후 총평을 반영한다.",
    "시험관리 데이터가 없거나 신규 학교이면 학교·학년·과목·시험명 메타데이터와 시험지 원본만 사용한다.",
    "확인되지 않은 문항번호, 배점, 단원명, 출처를 지어내지 않는다.",
    "별도 상대배점 차트는 만들지 않는다. 중요도 변화는 문장으로 설명한다.",
    "블로그나 인스타 초안은 AI 홍보문처럼 쓰지 말고, 학교별 시험을 실제로 본 강사의 판단이 들어갈 수 있는 구조로 쓴다."
  ].join("\n");
}

function buildExamAnalysisPrompt(payload) {
  const examPrepContext = payload.examPrepContext && typeof payload.examPrepContext === "object" ? payload.examPrepContext : null;
  const scopedRawExamText = limitPromptText(payload.rawExamText || "");
  const reviewedClassificationText = formatClassificationRowsForPrompt(payload.questionClassifications || payload.classificationRows);
  const teacherInsightText = formatTeacherInsightsForPrompt(payload);
  const reviewRegenerationOnly = Boolean(payload.reviewRegenerationOnly);
  const sourceFileLines = Array.isArray(payload.sourceFiles)
    ? payload.sourceFiles.map((file, index) => {
        const sourceId = file.sourceId || file.storagePath || file.signedUrl || file.fileName || `source_${index}`;
        return `${index + 1}. sourceId=${sourceId} · ${file.fileName || file.storagePath || "원본"}`;
      }).join(" / ")
    : "";
  return [
    payload.aiPrompt || defaultExamAnalysisPromptForServer(),
    "",
    "[시험 기본정보]",
    `학교: ${payload.schoolName ?? ""}`,
    `학년: ${payload.grade ?? ""}`,
    `과목: ${payload.subject ?? ""}`,
    `시험명: ${payload.examName ?? ""}`,
    `시험일: ${payload.examDate ?? ""}`,
    `원본 링크: ${payload.sourceFileUrl ?? ""}`,
    `업로드 원본: ${sourceFileLines}`,
    "",
    "[시험관리 탭 입력정보]",
    examPrepContext
      ? [
          `시험기간: ${examPrepContext.examPeriod ?? ""}`,
          `수학시험 일정: ${Array.isArray(examPrepContext.mathExamDates) ? examPrepContext.mathExamDates.map((entry) => [entry.date, entry.subject || entry.label].filter(Boolean).join(" ")).filter(Boolean).join(", ") : examPrepContext.mathExamDate ?? ""}`,
          `특이사항: ${examPrepContext.specialNote ?? ""}`,
          `시험 범위: ${examPrepContext.scope ?? ""}`,
          `부교재: ${examPrepContext.subTextbook ?? ""}`,
          `시험 후 총평: ${examPrepContext.review ?? ""}`
        ].join("\n")
      : "연결된 시험관리 데이터가 없습니다. 학교/학년/과목 메타데이터와 시험 원본만 기준으로 초안을 만드세요.",
    "",
    "[시험 원본/OCR/메모]",
    scopedRawExamText ||
      "아직 원본 텍스트가 없습니다. 입력된 기본정보와 강사 메모를 기준으로 분석 필드 초안을 만들어 주세요.",
    "",
    "[문항 검수 확정 데이터]",
    reviewedClassificationText ||
      "아직 문항별 분류표 검수 데이터가 없습니다. OCR과 현재 문항 카드를 기준으로만 작성하세요.",
    "",
    "[강사 인사이트]",
    teacherInsightText ||
      "강사 인사이트가 아직 비어 있습니다. AI 초안 문체로 단정하지 말고 확인 필요 항목을 분리하세요.",
    "",
    "[현재 문항 카드]",
    `목표 문항 수: ${payload.questionTargetCount || "원본에서 확인"}`,
    Array.isArray(payload.questionItems) && payload.questionItems.length
      ? payload.questionItems.map((item) => `${item.number || item.questionNumber}번 · 페이지 ${item.page || 1} · 기존 배점 ${item.score || "미입력"} · 기존 단원 ${item.unit || "미입력"} · 기존 난이도 ${item.difficulty || "확인 필요"} · 기존 쎈유형 ${formatSsenTypeTagsForPrompt(item.ssenTypeTags) || "미입력"}`).join("\n")
      : "아직 문항 카드가 없습니다. OCR에서 확인 가능한 문항번호 기준으로 questionItems 초안을 생성하세요.",
    "",
    buildSsenTypePromptSection(payload),
    "",
    reviewRegenerationOnly
      ? [
          "[검수 후 재작성 모드]",
          "- 이번 요청은 초안 OCR 분석이 아니라, 강사가 검수한 문항별 분류표와 강사 인사이트를 합쳐 분석지를 다시 쓰는 단계다.",
          "- [문항 검수 확정 데이터]를 OCR보다 우선한다. 배점/단원/쎈유형/난이도/역할은 검수표 값을 기준으로 총평, 단원 분포, 유형 분류, 킬러/준킬러, 학생 분석지를 갱신한다.",
          "- [강사 인사이트]의 표현과 판단을 최종 분석의 중심으로 삼고, AI는 문장 구조화와 누락 연결만 보조한다.",
          "- 출력은 웹앱의 보고서/PDF 미리보기 카드에 들어갈 문단형 JSON 필드다. textarea 편집용 내부 메모처럼 쓰지 말고 한눈에 읽히는 분석 문장으로 쓴다."
        ].join("\n")
      : "",
    "[작성 규칙]",
    "- 시험지를 설명하지 말고 학생·강사가 다음 행동을 결정할 수 있게 분석한다.",
    "- 각 항목은 가능하면 사실 근거 → 점수에 미친 영향 → 다음 학습 행동 순서로 쓴다.",
    "- 반드시 시험 원본/OCR에 있는 사실을 우선한다.",
    "- 문항 검수 확정 데이터가 있으면 OCR보다 검수표를 우선하고, 분류표의 쎈 유형·단원·난이도를 요약과 산출물에 반영한다.",
    "- 강사 인사이트가 있으면 AI 초안보다 강사 인사이트를 우선한다. 강사 인사이트와 충돌하는 AI 판단은 확인 필요로 낮춘다.",
    "- 시험지 첫 페이지의 문항 수 및 배점 표가 보이면 questionComposition에 먼저 정리한다.",
    "- 업로드 원본이 2개 이상이면 각 원본의 첫 장 문항 구성표를 sourceCompositions에 sourceId별로 따로 정리한다.",
    "- sourceCompositions의 sourceId는 [시험 기본정보]의 업로드 원본에 적힌 sourceId를 그대로 사용한다.",
    "- questionComposition.total은 선택형/서술형/단답형 등 모든 문항 수를 합산한 전체 문항 수다.",
    "- questionComposition.evidence에는 AI가 읽은 근거 문구를 짧게 적는다.",
    "- 문항번호, 배점, 단원명, 유형, 핵심 함정, 예상 오답을 가능한 한 구분해서 쓴다.",
    "- 배점은 절대 점수로만 판단하지 말고 해당 시험 안에서 어느 문항군이 중요했는지 설명한다. 별도 상대배점 차트는 만들지 않는다.",
    "- 여러 해 시험지가 있으면 문항수 변화 때문에 같은 배점의 의미가 달라질 수 있음을 반영해 중요도 변화를 문장으로 설명한다.",
    "- 부교재, 학교 프린트, 모의고사, 수능/평가원 원문항과 실제 출제 문항의 변형 관계가 보이면 반드시 sourceCheckNotes와 관련 분석에 적는다.",
    "- 강사가 문항별 코멘트를 붙일 수 있도록 앞번호 고난도, 변별 이유, 연계 출처, 변형 관계 후보를 구체적으로 제안한다.",
    "- 원문에서 확인되지 않는 문항번호/배점/단원명은 지어내지 말고 '확인 필요'라고 쓴다.",
    "- OCR 깨짐 문자, 의미 없는 한글 조합, 특수문자 잡음은 산출물에 그대로 쓰지 말고 sourceCheckNotes에 모은다.",
    "- '어려웠다', '중요하다', '복습이 필요하다' 같은 추상 문장으로 끝내지 않는다.",
    "- unitDistribution은 단원별 문항번호/문항수/배점/난이도/대표 유형을 포함하고 문항수 합계를 자체 점검한다.",
    "- typeClassification은 기본/준킬러/킬러를 분리하고 점수 영향과 학습 순서를 포함한다.",
    "- killerProblems는 킬러와 준킬러 후보를 나누고, 문항별 함정과 필요한 개념을 포함한다.",
    "- 문항별 태그 후보는 기본문항, 실수문항, 주요문항, 1등급 변별문항, 2등급 변별문항, 숫자변형문항, 조건변형문항, 유사유형문항, 교과서 연계, 부교재 연계, EBS 연계, 모의고사 연계 중에서 제안한다.",
    "- questionItems는 웹앱 문항분석표에 바로 반영된다. 각 문항의 number, page, score, ssenTypeTags, difficulty, unit은 가능한 범위에서 반드시 채운다.",
    "- questionItems의 difficulty는 확인 필요, 하, 중하, 중, 중상, 상 중 하나로 쓴다.",
    "- questionItems의 role은 기본, 실수유도, 앞번호 고난도, 준킬러, 킬러, 서술형 변별, 확인 필요 중 하나로 쓴다.",
    "- questionItems의 questionType은 객관식, 단답형, 서술형, 논술형, 확인 필요 중 하나로 쓴다.",
    "- questionItems의 similarProblemNeeded는 확인 필요, 필요, 불필요 중 하나로 쓴다.",
    "- questionItems의 similarProblemRelation은 확인 필요, 숫자변형, 조건변형, 유사유형, 기타 중 하나로 쓴다.",
    "- questionItems의 similarProblemSource에는 유사문항 분석지, 나만의DB, 부교재, 모의고사 등 출처 메모 후보를 쓴다.",
    "- 쎈 유형은 AI가 먼저 자동 매칭한다. 문항 조건, 단원명, 풀이 행동을 기준표와 비교해 가장 가까운 후보를 고른다.",
    "- questionItems의 ssenTypeTags는 쎈 유형 기준표 기반 태그 배열이다. 각 항목은 role(primary/secondary), typeCode, typeName, unitName, confidence(상/중/하/확인 필요), reason을 포함한다.",
    "- 단순 문항은 ssenTypeTags에 primary 1개만 넣고, 여러 개념이 결합된 문항은 primary 1개와 secondary 1~2개를 넣는다.",
    "- ssenTypeTags.typeCode는 제공된 쎈 유형 기준표에 있는 코드만 사용한다. 확신이 낮으면 빈 배열로 두지 말고 confidence를 낮추고 reason에 확인 포인트를 적는다. 정말 판별 불가능한 경우에만 빈 배열로 둔다.",
    "- 유사문항 본문 전체를 questionItems에 넣지 않는다. 웹앱에는 유사문항 필요 여부, 출처, 변형 구분 메타데이터만 넣는다.",
    "- 유사문항 분석지나 교과서/부교재/EBS/모의고사 연계가 확인되면 해당 내용을 questionItems.tags에도 태그로 기록한다.",
    "- 문항 카드는 강사가 웹앱 문항 검수 단계에서 확정한다. AI는 배점/단원/난이도/역할/태그/검수 포인트의 1차 초안을 만든다.",
    "- 여러 해 시험지가 함께 있으면 questionItems에는 웹앱에서 현재 선택한 시험지/연도 1회분의 전체 문항을 넣는다. 한 페이지에 보이는 일부 문항만 반환하지 않는다.",
    "- 3개년 비교는 텍스트 분석 필드에 반복/증감/변화를 정리한다.",
    "- blogDraft는 시험 기본 정보, 올해 총평, 단원별 현황, 킬러 문항, 다음 시험 예측 TOP 5, 공부 방향, CTA 순서로 쓴다.",
    "- instagramDraft는 7장 카드뉴스 구조로 쓴다: 표지, 시험 구성, 난이도 총평, 유형 TOP3, 킬러 포인트, 다음 시험 예측, 공부 방향/CTA.",
    "",
    "반드시 아래 JSON 형식만 반환하세요.",
    "{",
    '  "oneLineSummary": "이번 시험의 핵심 성격 한 문장",',
    '  "questionComposition": {',
    '    "total": 22,',
    '    "sections": [',
    '      { "label": "선택형", "start": 1, "end": 18, "count": 18, "score": "80점" },',
    '      { "label": "서술형", "start": 1, "end": 4, "count": 4, "score": "20점" }',
    '    ],',
    '    "totalScore": "100점",',
    '    "evidence": "시험지 상단 문항 수 및 배점 표 기준",',
    '    "confidence": "상"',
    '  },',
    '  "sourceCompositions": [',
    '    { "sourceId": "업로드 원본 sourceId", "total": 22, "sections": [{ "label": "전체", "start": 1, "end": 22, "count": 22, "score": "100점" }], "totalScore": "100점", "evidence": "해당 원본 첫 장 기준", "confidence": "상" }',
    '  ],',
    '  "examStructure": "문항수, 객관식/서술형, 배점, 시간 압박, 변화 포인트",',
    '  "aiOverview": "시험 개요",',
    '  "unitDistribution": "단원별 출제 분포",',
    '  "typeClassification": "기본/준킬러/킬러 유형 분류",',
    '  "killerProblems": "킬러/준킬러 문항 분석",',
    '  "fiveCorePatterns": "시험 전 확인할 5대 핵심 패턴",',
    '  "sourceCheckNotes": "OCR/문항번호/배점 확인 필요 항목",',
    '  "studentAnalysisDraft": "학생 분석지 초안",',
    '  "blogDraft": "블로그 초안",',
    '  "instagramDraft": "인스타 카드뉴스 7장 초안",',
    '  "questionItems": [',
    '    {',
    '      "number": 1,',
    '      "page": 1,',
    '      "score": "4.4점",',
    '      "questionType": "객관식",',
    '      "unit": "이차함수의 최대최소",',
    '      "difficulty": "중",',
    '      "role": "기본",',
    '      "source": "확인 필요",',
    '      "correctRate": "확인 필요",',
    '      "similarProblemNeeded": "확인 필요",',
    '      "similarProblemSource": "",',
    '      "similarProblemRelation": "확인 필요",',
    '      "variationRelationComment": "변형 관계 메모",',
    '      "ocrText": "문항 조건 요약",',
    '      "strategyComment": "AI가 본 오답 가능성과 검수 포인트",',
    '      "ssenTypeTags": [',
    '        { "role": "primary", "typeCode": "SSEN-CM1-01-01", "typeName": "다항식의 덧셈과 뺄셈", "unitName": "다항식의 연산", "confidence": "중", "reason": "조건 구조가 기준 유형과 유사함" }',
    '      ],',
    '      "tags": ["기본문항"]',
    '    }',
    '  ]',
    "}"
  ].join("\n");
}

function buildQuestionItemsPrompt(payload) {
  const examPrepContext = payload.examPrepContext && typeof payload.examPrepContext === "object" ? payload.examPrepContext : null;
  const scopedRawExamText = limitPromptText(payload.rawExamText || "");
  const targetCount = Math.max(
    1,
    Math.min(
      80,
      Number(payload.questionTargetCount) ||
        (Array.isArray(payload.questionItems) ? payload.questionItems.length : 0) ||
        20
    )
  );
  const sourceFileLines = Array.isArray(payload.sourceFiles)
    ? payload.sourceFiles.map((file, index) => {
        const sourceId = file.sourceId || file.storagePath || file.signedUrl || file.fileName || `source_${index}`;
        return `${index + 1}. sourceId=${sourceId} · ${file.fileName || file.storagePath || "원본"}`;
      }).join(" / ")
    : "";
  const currentItems = Array.isArray(payload.questionItems) && payload.questionItems.length
    ? payload.questionItems.map((item) => `${item.number || item.questionNumber}번 · 현재 페이지 ${item.page || 1} · 현재 배점 ${item.score || "미입력"} · 현재 단원 ${item.unit || "미입력"} · 현재 난이도 ${item.difficulty || "확인 필요"} · 현재 쎈유형 ${formatSsenTypeTagsForPrompt(item.ssenTypeTags) || "미입력"}`).join("\n")
    : "문항 카드가 아직 없습니다.";

  return [
    "역할: 으뜸수학 고태영T의 내신 시험 문항분석표 구조화 AI",
    "",
    "[작업 목표]",
    "아래 현재 선택된 시험지/연도 원본만 기준으로 웹앱 questionItems 배열을 채운다.",
    "총평, 블로그, 인스타 초안은 작성하지 말고 문항별 번호, 페이지, 배점, 문항 형식, 단원, 난이도, 역할, 쎈 유형 태그만 우선 구조화한다.",
    "",
    "[시험 기본정보]",
    `학교: ${payload.schoolName ?? ""}`,
    `학년: ${payload.grade ?? ""}`,
    `과목: ${payload.subject ?? ""}`,
    `시험명: ${payload.examName ?? ""}`,
    `시험일: ${payload.examDate ?? ""}`,
    `목표 문항 수: ${targetCount}`,
    `업로드 원본: ${sourceFileLines}`,
    "",
    "[시험관리 탭 입력정보]",
    examPrepContext
      ? [
          `시험범위: ${examPrepContext.scope ?? ""}`,
          `부교재: ${examPrepContext.subTextbook ?? ""}`,
          `특이사항: ${examPrepContext.specialNote ?? ""}`,
          `시험 후 총평: ${examPrepContext.review ?? ""}`
        ].join("\n")
      : "연결된 시험관리 데이터가 없습니다.",
    "",
    "[현재 선택된 시험지 OCR/원문]",
    scopedRawExamText || "OCR 원문이 없습니다. 현재 문항 카드와 시험 기본정보 기준으로 확인 가능한 값만 채우세요.",
    "",
    "[현재 문항 카드]",
    currentItems,
    "",
    buildSsenTypePromptSection(payload),
    "",
    "[작성 규칙]",
    `- questionItems는 반드시 1번부터 ${targetCount}번까지 총 ${targetCount}개를 반환한다.`,
    "- OCR에 보이는 첫 장 문항 구성표의 배점/문항 수를 우선 반영한다.",
    "- 한 문항의 상세 조건을 OCR에서 못 읽어도 해당 번호를 생략하지 말고, 모르는 값은 '확인 필요'로 둔다.",
    "- page는 현재 PDF 페이지 추정값을 넣는다. 모르면 현재 카드의 page 또는 1을 쓴다.",
    "- score는 문항 배점이다. 예: '4.2점', '5점', '확인 필요'.",
    "- questionType은 객관식, 단답형, 서술형, 논술형, 확인 필요 중 하나다.",
    "- difficulty는 확인 필요, 하, 중하, 중, 중상, 상 중 하나다.",
    "- role은 기본, 실수유도, 앞번호 고난도, 준킬러, 킬러, 서술형 변별, 확인 필요 중 하나다.",
    "- 쎈 유형 기준표가 있으면 단원명, 문항 조건, 풀이 행동을 비교해 ssenTypeTags에 primary 1개를 최대한 넣는다.",
    "- 복합 문항이면 secondary를 1~2개 추가한다. 확신이 낮아도 빈 배열로 두기보다 confidence를 '중' 또는 '하'로 낮추고 reason에 확인 포인트를 쓴다.",
    "- ssenTypeTags.typeCode는 제공된 기준표의 typeCode만 사용한다.",
    "- 원문 문제 본문 전체를 저장하지 말고 ocrText에는 짧은 조건 요약만 쓴다.",
    "",
    "반드시 아래 JSON 형식만 반환하세요. 설명 문장, markdown, 코드블록은 쓰지 마세요.",
    "{",
    '  "questionComposition": {',
    `    "total": ${targetCount},`,
    `    "sections": [{ "label": "전체", "start": 1, "end": ${targetCount}, "count": ${targetCount}, "score": "확인 필요" }],`,
    '    "totalScore": "100점",',
    '    "evidence": "시험지 상단 문항 수 및 배점 표 기준",',
    '    "confidence": "상"',
    "  },",
    '  "questionItems": [',
    "    {",
    '      "number": 1,',
    '      "page": 1,',
    '      "score": "확인 필요",',
    '      "questionType": "객관식",',
    '      "unit": "확인 필요",',
    '      "difficulty": "확인 필요",',
    '      "role": "기본",',
    '      "source": "확인 필요",',
    '      "correctRate": "확인 필요",',
    '      "similarProblemNeeded": "확인 필요",',
    '      "similarProblemSource": "",',
    '      "similarProblemRelation": "확인 필요",',
    '      "variationRelationComment": "",',
    '      "ocrText": "문항 조건 짧은 요약",',
    '      "strategyComment": "검수 포인트",',
    '      "ssenTypeTags": [',
    '        { "role": "primary", "typeCode": "SSEN-CM1-01-01", "typeName": "다항식의 덧셈과 뺄셈", "unitName": "다항식의 연산", "confidence": "중", "reason": "판단 근거" }',
    '      ],',
    '      "tags": ["기본문항"]',
    "    }",
    "  ]",
    "}"
  ].join("\n");
}

function buildQuestionInfoTextPrompt(payload) {
  const examPrepContext = payload.examPrepContext && typeof payload.examPrepContext === "object" ? payload.examPrepContext : null;
  const targetCount = Math.max(1, Math.min(80, Number(payload.questionTargetCount) || (Array.isArray(payload.questionItems) ? payload.questionItems.length : 0) || 20));
  const currentItems = Array.isArray(payload.questionItems) ? payload.questionItems : [];
  const currentItemLines = currentItems
    .slice(0, targetCount)
    .map((item, index) => {
      const number = Number(item.number || item.questionNumber || index + 1) || index + 1;
      const snippet = String(item.ocrText || item.questionSummary || "").replace(/\s+/g, " ").trim().slice(0, 700);
      return [
        `문항 ${number}`,
        `page=${item.page || 1}`,
        `score=${item.score || "미입력"}`,
        `questionType=${item.questionType || "확인 필요"}`,
        `unit=${item.unit || "미입력"}`,
        `difficulty=${item.difficulty || "확인 필요"}`,
        `role=${item.role || "기본"}`,
        `ssen=${formatSsenTypeTagsForPrompt(item.ssenTypeTags) || "미입력"}`,
        `ocr=${snippet || "문항별 OCR 없음"}`
      ].join(" | ");
    })
    .join("\n");

  return [
    "역할: 으뜸수학 고태영T의 내신 수학 문항카드 초안 작성 AI",
    "목표: 앱이 이미 만든 문항카드 배열을 기준으로 단원, 난이도, 쎈 유형, 검수 포인트만 보강한다.",
    "이미 앱이 추출한 배점/문항형식/OCR 조각이 있으므로 문항 번호를 새로 만들거나 생략하지 않는다.",
    "",
    "[시험 기본정보]",
    `학교: ${payload.schoolName ?? ""}`,
    `학년: ${payload.grade ?? ""}`,
    `과목: ${payload.subject ?? ""}`,
    `시험명: ${payload.examName ?? ""}`,
    `목표 문항 수: ${targetCount}`,
    "",
    "[시험관리 탭 입력정보]",
    examPrepContext
      ? [
          `시험범위: ${examPrepContext.scope ?? ""}`,
          `부교재: ${examPrepContext.subTextbook ?? ""}`,
          `특이사항: ${examPrepContext.specialNote ?? ""}`,
          `시험 후 총평: ${examPrepContext.review ?? ""}`
        ].join("\n")
      : "연결된 시험관리 데이터가 없습니다.",
    "",
    "[문항별 현재 카드와 OCR 조각]",
    currentItemLines || "문항별 OCR 조각이 없습니다.",
    "",
    buildSsenTypePromptSection(payload),
    "",
    "[작성 규칙]",
    `- questionItems는 반드시 1번부터 ${targetCount}번까지 반환한다. 문항을 생략하지 않는다.`,
    "- 앱이 이미 넣은 score, questionType이 있으면 그대로 유지한다. 명백히 틀린 경우에만 수정한다.",
    "- unit은 OCR 조각과 시험범위를 보고 실제 단원명으로 짧게 쓴다.",
    "- difficulty는 확인 필요, 하, 중하, 중, 중상, 상 중 하나다.",
    "- role은 기본, 실수유도, 앞번호 고난도, 준킬러, 킬러, 서술형 변별, 확인 필요 중 하나다.",
    "- 쎈 유형 기준표에서 가장 가까운 primary 1개를 우선 넣고, 복합 문항이면 secondary 1~2개를 추가한다.",
    "- OCR 조각만으로 판별이 어려운 문항은 unit/difficulty를 '확인 필요'로 두고 tags에 'vision 필요'를 넣는다.",
    "- 원문 문제 본문 전체를 재작성하지 말고 ocrText는 기존 짧은 요약을 유지하거나 80자 이내로 더 짧게 정리한다.",
    "",
    "반드시 아래 JSON 형식만 반환하세요. 설명 문장, markdown, 코드블록은 쓰지 마세요.",
    "{",
    '  "questionItems": [',
    "    {",
    '      "number": 1,',
    '      "page": 1,',
    '      "score": "기존값 또는 확인 필요",',
    '      "questionType": "객관식",',
    '      "unit": "확인 필요",',
    '      "difficulty": "확인 필요",',
    '      "role": "기본",',
    '      "source": "확인 필요",',
    '      "ocrText": "문항 조건 짧은 요약",',
    '      "strategyComment": "검수 포인트",',
    '      "ssenTypeTags": [],',
    '      "tags": ["기본문항"]',
    "    }",
    "  ]",
    "}"
  ].join("\n");
}

function normalizeClassificationSeedRows(payload = {}) {
  const rows = Array.isArray(payload.classificationRows)
    ? payload.classificationRows
    : Array.isArray(payload.questionClassifications)
      ? payload.questionClassifications
      : [];
  return rows.filter((row) => row && typeof row === "object");
}

function normalizeClassificationRequestedNumbers(value = []) {
  const rawNumbers = Array.isArray(value)
    ? value
    : String(value || "").split(/[,/\s]+/);
  return Array.from(new Set(
    rawNumbers
      .map((number) => Math.max(0, Number(number) || 0))
      .filter((number) => Number.isInteger(number) && number > 0 && number <= 80)
  )).sort((a, b) => a - b);
}

function buildQuestionClassificationPrompt(payload) {
  const examPrepContext = payload.examPrepContext && typeof payload.examPrepContext === "object" ? payload.examPrepContext : null;
  const seedRows = normalizeClassificationSeedRows(payload);
  const requestedNumbers = normalizeClassificationRequestedNumbers(payload.missingQuestionNumbers || payload.repairQuestionNumbers);
  const isRepairOnly = requestedNumbers.length > 0 || Boolean(payload.repairOnly);
  const targetCount = Math.max(1, Math.min(80, requestedNumbers.length || Number(payload.classificationTargetCount) || Number(payload.questionTargetCount) || seedRows.length || 20));
  const targetDescription = isRepairOnly && requestedNumbers.length
    ? `${requestedNumbers.join(", ")}번 ${requestedNumbers.length}개`
    : `1번부터 ${targetCount}번까지 ${targetCount}개`;
  const sourceFiles = Array.isArray(payload.sourceFiles) ? payload.sourceFiles : [];
  const sourceFileLines = sourceFiles.map((file, index) => {
    const sourceId = file.sourceId || file.storagePath || file.signedUrl || file.fileName || `source_${index}`;
    return `${index + 1}. sourceId=${sourceId} · ${file.fileName || file.storagePath || "원본"} · extractedText=${String(file.extractedText || "").trim() ? "있음" : "없음"}`;
  }).join("\n");
  const currentRows = seedRows.length
    ? seedRows.slice(0, isRepairOnly ? seedRows.length : targetCount).map((item, index) => {
        const number = Number(item.number || item.questionNumber || index + 1) || index + 1;
        const snippet = String(item.evidence || item.reviewNote || item.ocrText || item.questionSummary || "").replace(/\s+/g, " ").trim().slice(0, 500);
        return `${number}번 | page=${item.page || 1} | score=${item.score || "미입력"} | type=${item.questionType || "확인 필요"} | unit=${item.unit || ""} | note=${snippet}`;
      }).join("\n")
    : "아직 문항별 분류 행이 없습니다.";
  const rawText = limitPromptText(payload.rawExamText || "", EXAM_QUESTION_CLASSIFICATION_TEXT_LIMIT);
  const pageImageCount = Array.isArray(payload.pageImages) ? payload.pageImages.length : 0;
  const pageImageNumbers = Array.isArray(payload.pageImages)
    ? payload.pageImages.map((entry, index) => Number(entry?.pageNumber) || index + 1).filter(Boolean)
    : [];

  return [
    "역할: 학교 내신 수학 시험지를 읽고 분석지 생성을 위한 문항별 분류표를 만드는 AI",
    `목표: 최종 분석지의 표와 예측을 만들 수 있도록 classificationRows ${targetDescription} 행을 만든다.`,
    isRepairOnly && requestedNumbers.length
      ? `가장 중요한 출력 조건: 이번 요청은 누락 문항 재요청이다. classificationRows 배열에는 반드시 ${requestedNumbers.join(", ")}번만 넣고, number를 1번부터 다시 매기지 않는다.`
      : `가장 중요한 출력 조건: classificationRows 배열을 반드시 1번부터 ${targetCount}번까지 ${targetCount}개 채운다.`,
    "출력 예산이 부족하면 classificationSummary/unitDistribution/typeClassification/killerProblems/sourceCheckNotes는 빈 문자열로 두고, classificationRows는 절대 줄이지 않는다.",
    isRepairOnly
      ? "누락 문항만 재분류하되, page는 첨부 페이지 번호와 원문 지면 기준의 실제 페이지로 채운다. 알 수 없으면 기존 page를 유지하고 reviewNote에 확인 필요를 남긴다."
      : "특히 마지막 2~4개 서술형/단답형 문항을 먼저 별도로 확인한 뒤 1번부터 마지막 번호까지 빠짐없이 채운다.",
    "문항을 읽기 어렵거나 단원/유형을 확정할 수 없어도 행을 생략하지 말고 unit/difficulty/role/source/detailType/reviewNote를 '확인 필요' 중심으로 채운다.",
    "classificationSummary, unitDistribution 같은 요약만 반환하면 실패다. 요약은 짧게 쓰고 classificationRows를 우선 완성한다.",
    "",
    "[입력 해석 우선순위]",
    "1. 첨부된 PDF/이미지 페이지가 있으면 실제 문항, 수식, 보기, 도형 배치를 직접 읽는다.",
    "2. PDF 텍스트 추출 원문이 있으면 문항번호와 수식/조건을 보조 근거로 사용한다.",
    "3. 현재 문항별 분류 행은 번호, 배점, 페이지를 보존하기 위한 골격이며 최종 판단 근거가 아니다.",
    "4. 단원/쎈유형을 확정할 근거가 부족한 문항도 행은 반드시 반환하고, needsReview 태그와 reason에 확인 포인트를 남긴다.",
    "",
    "[시험 기본정보]",
    `학교: ${payload.schoolName ?? ""}`,
    `학년: ${payload.grade ?? ""}`,
    `과목: ${payload.subject ?? ""}`,
    `시험명: ${payload.examName ?? ""}`,
    `시험일: ${payload.examDate ?? ""}`,
    `목표 문항 수: ${isRepairOnly && requestedNumbers.length ? requestedNumbers.length : targetCount}`,
    isRepairOnly && requestedNumbers.length ? `재요청 문항 번호: ${requestedNumbers.join(", ")}` : "",
    `첨부 페이지 이미지 수: ${pageImageCount}`,
    `첨부 페이지 번호: ${pageImageNumbers.length ? pageImageNumbers.join(", ") : "없음"}`,
    "",
    "[업로드 원본]",
    sourceFileLines || "원본 정보 없음",
    "",
    "[시험관리 탭 입력정보]",
    examPrepContext
      ? [
          `시험기간: ${examPrepContext.examPeriod ?? ""}`,
          `수학시험 일정: ${Array.isArray(examPrepContext.mathExamDates) ? examPrepContext.mathExamDates.map((entry) => [entry.date, entry.subject || entry.label].filter(Boolean).join(" ")).filter(Boolean).join(", ") : examPrepContext.mathExamDate ?? ""}`,
          `시험범위: ${examPrepContext.scope ?? ""}`,
          `부교재: ${examPrepContext.subTextbook ?? ""}`,
          `특이사항: ${examPrepContext.specialNote ?? ""}`,
          `시험 후 총평: ${examPrepContext.review ?? ""}`
        ].join("\n")
      : "연결된 시험관리 데이터가 없습니다.",
    "",
    "[현재 문항별 분류 행 골격]",
    currentRows,
    "",
    "[PDF 텍스트 추출 원문]",
    rawText || "텍스트 추출 원문이 없거나 매우 부족합니다. 첨부 페이지 이미지를 우선 읽으세요.",
    "",
    buildSsenTypePromptSection(payload),
    "",
    "[분류 규칙]",
    isRepairOnly && requestedNumbers.length
      ? `- classificationRows는 ${requestedNumbers.join(", ")}번만 반드시 모두 반환한다. 확신이 낮아도 요청 번호 행을 누락하지 않는다.`
      : `- classificationRows는 1번부터 ${targetCount}번까지 반드시 모두 반환한다. 확신이 낮아도 행을 누락하지 않는다.`,
    "- 각 문항의 number, page, score, questionType은 기존 행 값이 있으면 보존한다.",
    "- unit은 최종 분석지에서 단원별 출제표에 바로 쓸 수 있는 단원명으로 쓴다.",
    "- source는 교과서, 부교재, EBS, 모의고사, 확인 필요 중 하나로만 억지 선택하지 말고 근거가 없으면 확인 필요로 둔다.",
    "- difficulty는 확인 필요, 하, 중하, 중, 중상, 상 중 하나다.",
    "- role은 기본, 실수유도, 앞번호 고난도, 준킬러, 킬러, 서술형 변별, 확인 필요 중 하나다.",
    "- ssenTypeTags는 쎈 유형 기준표에서 가장 가까운 primary 1개를 우선 넣고, 복합 문항이면 secondary 1~2개까지 추가한다.",
    "- typeCode는 반드시 제공된 쎈 기준표 안의 코드만 사용한다.",
    "- evidence에는 원문 전체가 아니라 분류 근거가 되는 조건/풀이행동 요약만 100자 이내로 쓴다.",
    "- reviewNote에는 왜 그 단원/쎈유형으로 분류했는지 또는 사람이 확인할 포인트를 쓴다.",
    "- 전체 분석지에 쓸 unitDistribution, typeClassification, killerProblems, sourceCheckNotes는 classificationRows 뒤를 보조하는 짧은 요약이다.",
    "",
    "반드시 순수 JSON 하나만 반환하세요. markdown 코드블록과 설명 문장은 쓰지 마세요.",
    "{",
    '  "classificationRows": [',
    "    {",
    '      "number": 1,',
    '      "page": 1,',
    '      "score": "4점",',
    '      "questionType": "객관식",',
    '      "unit": "다항식의 연산",',
    '      "difficulty": "중",',
    '      "role": "기본",',
    '      "source": "확인 필요",',
    '      "detailType": "곱셈공식 변형",',
    '      "evidence": "분류 근거가 되는 조건 요약",',
    '      "reviewNote": "분류 근거와 검수 포인트",',
    '      "needsReview": true,',
    '      "confidence": "중",',
    '      "ssenTypeTags": [',
    '        { "role": "primary", "typeCode": "SSEN-CM1-01-03", "typeName": "곱셈 공식을 이용한 다항식의 전개", "unitName": "다항식의 연산", "confidence": "중", "reason": "풀이 행동이 기준 유형과 일치" }',
    '      ],',
    '      "tags": ["기본문항"]',
    "    }",
    "  ],",
    '  "classificationSummary": "시험 전체 개요와 분류 결과 요약 또는 빈 문자열",',
    '  "unitDistribution": "단원별 문항번호/문항수/배점/특징 요약 또는 빈 문자열",',
    '  "typeClassification": "기본/준킬러/킬러와 반복 유형 요약 또는 빈 문자열",',
    '  "killerProblems": "킬러·준킬러 후보 문항과 이유 또는 빈 문자열",',
    '  "sourceCheckNotes": "OCR/이미지 판독 한계, 확인 필요 문항, 연계 출처 후보 또는 빈 문자열"',
    "}"
  ].join("\n");
}

function buildCommentPrompt(payload) {
  const isSpellingOnly = payload.polishMode === "spellingOnly";
  if (isSpellingOnly) {
    const basePrompt = String(payload.aiPrompt ?? "").trim() || [
      "역할: 시험 후 총평 맞춤법 교정자",
      "목표: 입력된 시험 후 총평의 맞춤법, 띄어쓰기, 명백한 오탈자만 고친다.",
      "작성 원칙:",
      "- 문장 구조, 어휘, 말투, 분량, 번호, 줄바꿈은 유지한다.",
      "- 사실, 날짜, 점수, 난이도, 과목명, 학교명, 교재명은 바꾸지 않는다.",
      "- 내용을 요약하거나 더 자연스럽게 다시 쓰지 않는다.",
      "- 새 문장이나 설명을 추가하지 않는다.",
      "- 수정할 곳이 없으면 원문을 그대로 반환한다.",
      "- 최종 교정문만 반환한다."
    ].join("\n");

    return [
      basePrompt,
      "",
      "[원문]",
      payload.rawText || "원문 없음"
    ].join("\n");
  }

  const audienceLabel = payload.audience === "student" ? "학생" : payload.audience === "teacher" ? "강사" : "학부모";
  const audienceRule =
    payload.audience === "student"
      ? "학생이 직접 읽는 짧고 분명한 안내문으로 작성한다. 조언은 하되 과하게 압박하지 않는다."
      : payload.audience === "teacher"
        ? "강사가 수정해서 사용할 수 있는 명료한 총평 문장으로 작성한다."
        : "학부모님께 보내는 정중한 알림톡 문장으로 작성한다. 과장하지 않고 구체적인 관찰과 다음 행동을 담는다.";
  const basePrompt = String(payload.aiPrompt ?? "").trim() || [
    "역할: 으뜸수학 고태영T의 수업 코멘트 편집자",
    "목표: 강사가 대강 적은 메모를 실제 발송 가능한 자연스러운 문장으로 다듬는다.",
    "작성 원칙:",
    "- 입력된 사실만 사용하고 없는 내용은 만들지 않는다.",
    "- 강사 원문의 핵심 의도와 표현의 사실은 반드시 반영한다.",
    "- 학생을 비난하거나 단정하지 않고, 다음 행동 중심으로 쓴다.",
    "- 알림톡에 바로 붙여 넣을 수 있게 최종 문장만 반환한다.",
    "- 제목, 마크다운, 구분선, 설명 문구는 쓰지 않는다.",
    "- 2~5문장 안에서 간결하게 작성한다."
  ].join("\n");

  return [
    basePrompt,
    `대상: ${audienceLabel}`,
    `대상별 추가 원칙: ${audienceRule}`,
    "",
    "[수업 정보]",
    `학생: ${payload.studentName ?? ""}`,
    `학교/학년: ${payload.schoolName ?? ""} ${payload.grade ?? ""}`,
    `수업: ${payload.lessonName ?? ""}`,
    `날짜: ${payload.lessonDate ?? ""}`,
    `강의 교재: ${payload.lessonMaterial ?? ""}`,
    `강의 내용: ${payload.lessonContent ?? ""}`,
    `출결: ${payload.attendanceStatus ?? ""}`,
    `숙제 상태: ${payload.homeworkStatus ?? ""}`,
    `과제 상태 안내: ${payload.assignmentStatus ?? ""}`,
    "",
    "[강사 원문]",
    payload.rawText || "원문 없음"
  ].join("\n");
}

function parseJsonText(text) {
  const trimmed = String(text ?? "").trim();
  if (!trimmed) throw new Error("AI 응답이 비어 있습니다.");

  try {
    return JSON.parse(trimmed);
  } catch (error) {
    const match = trimmed.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("AI 응답에서 JSON을 찾지 못했습니다.");
    return JSON.parse(match[0]);
  }
}

function safeParseJsonText(text) {
  const trimmed = String(text ?? "").trim();
  if (!trimmed) return null;

  try {
    return JSON.parse(trimmed);
  } catch (error) {
    const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
    if (fenced?.[1]) {
      try {
        return JSON.parse(fenced[1].trim());
      } catch (fencedError) {
        // Continue to broad object extraction.
      }
    }

    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start === -1 || end === -1 || end <= start) return null;

    try {
      return JSON.parse(trimmed.slice(start, end + 1));
    } catch (jsonError) {
      return null;
    }
  }
}

function getValueAtPath(source, path = "") {
  if (!source || typeof source !== "object" || !path) return undefined;
  return path.split(".").reduce((current, key) => current?.[key], source);
}

function summarizeParseCandidate(value) {
  if (Array.isArray(value)) {
    return {
      type: "array",
      length: value.length,
      firstKeys: value[0] && typeof value[0] === "object" ? Object.keys(value[0]).slice(0, 12) : []
    };
  }
  if (value && typeof value === "object") {
    const values = Object.values(value);
    return {
      type: "object",
      keys: Object.keys(value).slice(0, 12),
      objectValueCount: values.filter((item) => item && typeof item === "object").length,
      valueCount: values.length
    };
  }
  return {
    type: value === undefined ? "missing" : typeof value,
    valuePreview: String(value ?? "").slice(0, 120)
  };
}

function countCharacterBalance(text = "", openChar = "{", closeChar = "}") {
  let balance = 0;
  let inString = false;
  let escaped = false;
  for (const char of String(text ?? "")) {
    if (escaped) {
      escaped = false;
      continue;
    }
    if (char === "\\") {
      escaped = true;
      continue;
    }
    if (char === "\"") {
      inString = !inString;
      continue;
    }
    if (inString) continue;
    if (char === openChar) balance += 1;
    if (char === closeChar) balance -= 1;
  }
  return balance;
}

function detectJsonKeysFromText(text = "") {
  const keys = [];
  const seen = new Set();
  const regex = /"([^"\\]*(?:\\.[^"\\]*)*)"\s*:/g;
  let match = regex.exec(String(text ?? ""));
  while (match && keys.length < 40) {
    const key = match[1].replace(/\\"/g, "\"");
    if (!seen.has(key)) {
      seen.add(key);
      keys.push(key);
    }
    match = regex.exec(String(text ?? ""));
  }
  return keys;
}

function parseJsonTextWithDiagnostics(text = "") {
  const trimmed = String(text ?? "").trim();
  const detectedKeys = detectJsonKeysFromText(trimmed);
  const diagnostics = {
    rawTextLength: trimmed.length,
    rawTextPreview: trimmed.slice(0, 900),
    parseMode: "empty",
    parseError: "",
    jsonStart: trimmed.indexOf("{"),
    jsonEnd: trimmed.lastIndexOf("}"),
    braceBalance: countCharacterBalance(trimmed, "{", "}"),
    squareBracketBalance: countCharacterBalance(trimmed, "[", "]"),
    hasFencedJson: /```(?:json)?\s*[\s\S]*?```/i.test(trimmed),
    detectedKeys,
    containsClassificationRowsKey: /"classificationRows"\s*:/i.test(trimmed),
    containsQuestionClassificationsKey: /"questionClassifications"\s*:/i.test(trimmed),
    containsClassificationSummaryKey: /"classificationSummary"\s*:/i.test(trimmed),
    likelyTruncated: Boolean(trimmed) && (countCharacterBalance(trimmed, "{", "}") > 0 || countCharacterBalance(trimmed, "[", "]") > 0 || trimmed.lastIndexOf("}") < trimmed.indexOf("{"))
  };
  if (!trimmed) return { parsed: null, diagnostics };

  try {
    return {
      parsed: JSON.parse(trimmed),
      diagnostics: { ...diagnostics, parseMode: "direct" }
    };
  } catch (directError) {
    diagnostics.parseError = `direct: ${directError.message}`;
  }

  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced?.[1]) {
    try {
      return {
        parsed: JSON.parse(fenced[1].trim()),
        diagnostics: { ...diagnostics, parseMode: "fenced" }
      };
    } catch (fencedError) {
      diagnostics.parseError = `${diagnostics.parseError} / fenced: ${fencedError.message}`;
    }
  }

  if (diagnostics.jsonStart !== -1 && diagnostics.jsonEnd > diagnostics.jsonStart) {
    try {
      return {
        parsed: JSON.parse(trimmed.slice(diagnostics.jsonStart, diagnostics.jsonEnd + 1)),
        diagnostics: { ...diagnostics, parseMode: "object-slice" }
      };
    } catch (sliceError) {
      diagnostics.parseError = `${diagnostics.parseError} / object-slice: ${sliceError.message}`;
    }
  }

  return { parsed: null, diagnostics: { ...diagnostics, parseMode: "failed" } };
}

function normalizeQuestionInfoAiItemsFromText(text) {
  const parsed = safeParseJsonText(text);
  const parsedItems = normalizeQuestionItemsFromAi(extractQuestionItemsFromParsed(parsed));
  if (parsedItems.length) return parsedItems;
  return normalizeQuestionItemsFromAi(extractQuestionItemsFromLooseText(text));
}

function buildQuestionInfoRepairPrompt(payload, aiText) {
  const targetCount = Math.max(1, Math.min(80, Number(payload.questionTargetCount) || (Array.isArray(payload.questionItems) ? payload.questionItems.length : 0) || 20));
  const currentItems = Array.isArray(payload.questionItems) ? payload.questionItems : [];
  return [
    "아래 AI 응답을 웹앱이 읽을 수 있는 순수 JSON으로만 복구하세요.",
    `questionItems는 반드시 1번부터 ${targetCount}번까지 포함합니다.`,
    "추론을 새로 길게 하지 말고 기존 응답과 현재 문항카드의 값을 구조화합니다.",
    "단원/난이도/쎈 유형을 응답에서 찾지 못한 문항은 확인 필요로 둡니다.",
    "",
    "[현재 문항카드]",
    currentItems.slice(0, targetCount).map((item, index) => {
      const number = Number(item.number || item.questionNumber || index + 1) || index + 1;
      const snippet = String(item.ocrText || "").replace(/\s+/g, " ").trim().slice(0, 300);
      return `${number}번 | page=${item.page || 1} | score=${item.score || ""} | questionType=${item.questionType || "확인 필요"} | ocr=${snippet}`;
    }).join("\n") || "현재 문항카드 없음",
    "",
    "[복구할 AI 응답]",
    String(aiText || "").slice(0, 12000),
    "",
    "반환 형식은 아래 JSON 하나뿐입니다.",
    "{",
    '  "questionItems": [',
    '    { "number": 1, "page": 1, "score": "기존값 또는 확인 필요", "questionType": "객관식", "unit": "확인 필요", "difficulty": "확인 필요", "role": "기본", "source": "확인 필요", "ocrText": "짧은 요약", "strategyComment": "검수 포인트", "ssenTypeTags": [], "tags": [] }',
    "  ]",
    "}"
  ].join("\n");
}

function outputTextFromOpenAi(data) {
  if (data.output_text) return data.output_text;
  const texts = [];
  if (Array.isArray(data.output)) {
    data.output.forEach((item) => {
      if (typeof item?.content === "string") texts.push(item.content);
      if (Array.isArray(item?.content)) {
        item.content.forEach((block) => {
          const text = block?.text || block?.output_text || block?.content;
          if (typeof text === "string") texts.push(text);
        });
      }
    });
  }
  return texts.join("\n").trim();
}

function outputTextFromAnthropic(data) {
  return data.content?.map((block) => block.text ?? "").join("\n") ?? "";
}

function parseImageDataUrl(dataUrl = "") {
  const match = String(dataUrl).match(/^data:([^;,]+);base64,(.*)$/);
  if (!match) throw new Error("이미지 데이터 형식이 올바르지 않습니다.");
  return {
    base64: match[2],
    mediaType: match[1]
  };
}

function normalizeVisionCropBox(box = {}) {
  const x = Math.max(0, Math.min(100, Number(box.x) || 0));
  const y = Math.max(0, Math.min(100, Number(box.y) || 0));
  const width = Math.max(0, Math.min(100 - x, Number(box.width) || 0));
  const height = Math.max(0, Math.min(100 - y, Number(box.height) || 0));
  if (width < 1 || height < 1) return null;
  return { x, y, width, height };
}

function normalizeQuestionCropBoxes(parsed, payload = {}) {
  const rawBoxes = Array.isArray(parsed)
    ? parsed
    : Array.isArray(parsed?.boxes)
      ? parsed.boxes
      : [];
  return rawBoxes
    .map((box, index) => {
      const cropBox = normalizeVisionCropBox(box);
      if (!cropBox) return null;
      return {
        ...cropBox,
        confidence: Math.max(0, Math.min(1, Number(box.confidence) || 0.5)),
        note: String(box.note || "").slice(0, 160),
        page: Math.max(1, Number(box.page || payload.pageNumber) || 1),
        questionNumber: Number(box.questionNumber || box.number || payload.questionNumbers?.[index] || index + 1) || index + 1
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.page - b.page || a.questionNumber - b.questionNumber);
}

function buildQuestionCropPrompt(payload = {}) {
  const numbers = Array.isArray(payload.questionNumbers) && payload.questionNumbers.length
    ? payload.questionNumbers.join(", ")
    : "이미지에서 보이는 문항 전체";
  return [
    "너는 수학 시험지 이미지에서 문항별 크롭 영역을 잡는 vision 보조 AI다.",
    "목표는 사람이 바로 수정할 수 있는 1차 크롭 초안을 만드는 것이다.",
    "",
    "[작업]",
    `현재 페이지: ${payload.pageNumber || 1}`,
    `대상 문항 번호: ${numbers}`,
    "이미지 안에서 각 문항의 문제 번호, 발문, 보기/선택지/조건, 풀이에 필요한 도형이나 표를 포함하는 사각형 영역을 찾는다.",
    "상단 학교명/시험명/안내문/여백은 문항 영역에서 제외한다. 단, 특정 문항 바로 위의 조건 박스가 해당 문항에 필요하면 포함한다.",
    "문항이 두 단으로 배치되어 있으면 왼쪽 위에서 아래로, 그다음 오른쪽 위에서 아래 순서가 아니라 실제 문항 번호를 기준으로 번호를 붙인다.",
    "이미지에 문항이 일부만 보이면 보이는 영역 기준으로 최대한 포함하되 note에 '일부만 보임'이라고 적는다.",
    "",
    "[좌표 규칙]",
    "x, y, width, height는 이미지 전체를 기준으로 한 퍼센트 값이다. 모두 0~100 사이 숫자로 반환한다.",
    "",
    "반드시 JSON만 반환한다.",
    "{",
    '  "boxes": [',
    '    { "questionNumber": 1, "page": 1, "x": 6, "y": 18, "width": 42, "height": 24, "confidence": 0.8, "note": "선택지 포함" }',
    "  ]",
    "}"
  ].join("\n");
}

function normalizeQuestionCompositionFromAi(value = null) {
  if (!value) return null;
  const source = typeof value === "number" || typeof value === "string" ? { total: value } : value;
  if (!source || typeof source !== "object" || Array.isArray(source)) return null;
  const rawSections = Array.isArray(source.sections)
    ? source.sections
    : [
        Number(source.choiceCount ?? source.objectiveCount ?? source.multipleChoiceCount) > 0
          ? {
              label: "선택형",
              start: source.choiceStart || 1,
              end: source.choiceEnd || source.choiceCount || source.objectiveCount || source.multipleChoiceCount,
              count: source.choiceCount || source.objectiveCount || source.multipleChoiceCount,
              score: source.choiceScore || source.objectiveScore || source.multipleChoiceScore || ""
            }
          : null,
        Number(source.writtenCount ?? source.subjectiveCount ?? source.descriptiveCount) > 0
          ? {
              label: "서술형",
              start: source.writtenStart || 1,
              end: source.writtenEnd || source.writtenCount || source.subjectiveCount || source.descriptiveCount,
              count: source.writtenCount || source.subjectiveCount || source.descriptiveCount,
              score: source.writtenScore || source.subjectiveScore || source.descriptiveScore || ""
            }
          : null
      ].filter(Boolean);
  const sections = rawSections
    .map((section) => {
      if (!section || typeof section !== "object") return null;
      const count = Math.max(0, Math.min(80, Number(section.count) || 0));
      const start = Math.max(0, Math.min(80, Number(section.start) || 0));
      const end = Math.max(0, Math.min(80, Number(section.end) || 0));
      const inferredCount = count || (start > 0 && end >= start ? end - start + 1 : 0);
      if (!inferredCount) return null;
      return {
        label: String(section.label || section.type || "문항").trim(),
        start: start || "",
        end: end || "",
        count: inferredCount,
        score: String(section.score || section.points || "").trim()
      };
    })
    .filter(Boolean);
  const total = Math.max(0, Math.min(80, Number(
    source.total ??
    source.totalQuestions ??
    source.questionCount ??
    source.count ??
    source.targetCount
  ) || sections.reduce((sum, section) => sum + section.count, 0)));
  if (!total) return null;
  return {
    total,
    sections,
    totalScore: String(source.totalScore || source.scoreTotal || "").trim(),
    evidence: String(source.evidence || source.reason || source.note || "").trim(),
    confidence: String(source.confidence || "").trim()
  };
}

function createMockAnalysis(payload) {
  const school = payload.schoolName || "학교";
  const subject = payload.subject || "수학";
  const sourceItems = Array.isArray(payload.questionItems) && payload.questionItems.length
    ? payload.questionItems
    : Array.from({ length: 5 }, (_, index) => ({ number: index + 1, page: 1 }));
  return {
    oneLineSummary: `${school} ${subject} 시험은 조건 해석과 풀이 근거 정리가 점수 차이를 만들 가능성이 큽니다.`,
    questionComposition: {
      total: sourceItems.length,
      sections: [{ label: "전체", start: 1, end: sourceItems.length, count: sourceItems.length, score: "" }],
      totalScore: "",
      evidence: "mock 분석: 현재 문항 카드 수 기준",
      confidence: "확인 필요"
    },
    examStructure: "문항수/객관식/서술형/배점은 원본 확인 필요입니다. 시험지가 들어오면 시간 압박, 고배점 문항, 작년 대비 변화 가능성을 분리해 정리합니다.",
    aiOverview: `${school} ${subject} 시험은 기본 개념 확인과 조건 해석을 함께 요구하는 구조로 정리됩니다. 원본 시험지를 넣으면 문항 번호, 배점, 난이도 흐름까지 구체화합니다.`,
    unitDistribution: "1. 핵심 단원: 조건 해석형 문항\n2. 보조 단원: 계산형 문항\n3. 서술형 대비 과정 감점 가능성 확인 필요",
    typeClassification: "기본: 빠르게 맞혀야 할 계산/개념 확인 유형\n준킬러: 조건 2개 이상을 결합하는 유형\n킬러: 서술형 근거와 경우 분류가 필요한 유형",
    killerProblems: "킬러 후보: 조건을 여러 단계로 연결하는 문항\n준킬러 후보: 계산보다 이해와 식 변형에서 차이가 나는 문항\n강사 확인 필요: 실제 문항 번호와 배점",
    fiveCorePatterns: "1. 조건을 식으로 바꾸기\n2. 범위 제한 확인\n3. 경우 분류 누락 방지\n4. 고배점 서술형 근거 작성\n5. 시간 안배",
    sourceCheckNotes: "원본 시험지/OCR을 넣으면 깨진 문자, 문항번호, 배점 확인 필요 항목을 따로 표시합니다.",
    studentAnalysisDraft: `${school} 학생들은 이번 시험에서 조건 해석과 풀이 과정 정리가 중요했습니다. 다음 시험 전에는 핵심 유형 반복과 서술형 근거 작성 훈련이 필요합니다.`,
    blogDraft: `# ${school} ${subject} 시험 분석\n\n## 1. 시험 기본 정보\n원본 확인 후 문항수와 배점 구조를 정리합니다.\n\n## 2. 올해 총평\n이번 시험은 단순 계산보다 조건을 읽고 식으로 연결하는 힘이 중요했습니다.\n\n## 3. 공부 방향\n${academyNameForServer()}에서는 학생별 오답과 학교별 출제 흐름을 연결해 다음 시험 대비 방향을 잡습니다.`,
    instagramDraft: `1장 표지: ${school} ${subject} 시험분석\n2장 시험 구성: 문항수/배점 원문 확인 필요\n3장 난이도 총평: 조건 해석 중심\n4장 유형 TOP3: 원본 분석 후 확정\n5장 킬러 포인트: 고배점 문항 확인 필요\n6장 다음 시험 예측: 반복 유형 중심\n7장 공부 방향/CTA: ${academyNameForServer()}`,
    questionItems: sourceItems.map((item, index) => ({
      number: Number(item.number || item.questionNumber) || index + 1,
      page: Number(item.page) || 1,
      score: item.score || "확인 필요",
      questionType: item.questionType || "확인 필요",
      unit: item.unit || "확인 필요",
      difficulty: item.difficulty || "확인 필요",
      role: item.role || "기본",
      source: item.source || "확인 필요",
      correctRate: item.correctRate || "확인 필요",
      similarProblemNeeded: item.similarProblemNeeded || "확인 필요",
      similarProblemSource: item.similarProblemSource || "",
      similarProblemRelation: item.similarProblemRelation || "확인 필요",
      ocrText: item.ocrText || "AI 초안: 문항 조건 확인 필요",
      strategyComment: item.strategyComment || "AI 초안: 배점·단원·난이도 검수 후 보완",
      ssenTypeTags: normalizeSsenTypeTags(item.ssenTypeTags || item.ssenTypes || item.ssenType),
      tags: Array.isArray(item.tags) && item.tags.length ? item.tags : ["주요문항"]
    }))
  };
}

function academyNameForServer() {
  return "으뜸수학 고태영T";
}

function normalizeQuestionItemsFromAi(items = []) {
  if (!Array.isArray(items)) return [];
  const difficultyOptions = new Set(["확인 필요", "하", "중하", "중", "중상", "상"]);
  const roleOptions = new Set(["기본", "실수유도", "앞번호 고난도", "준킬러", "킬러", "서술형 변별", "확인 필요"]);
  const questionTypeOptions = new Set(["객관식", "단답형", "서술형", "논술형", "확인 필요"]);
  const sourceOptions = new Set(["확인 필요", "교과서", "부교재", "EBS", "학교 프린트", "모의고사", "수능/평가원", "자체 변형", "기타"]);
  const similarProblemNeedOptions = new Set(["확인 필요", "필요", "불필요"]);
  const similarProblemRelationOptions = new Set(["확인 필요", "숫자변형", "조건변형", "유사유형", "기타"]);
  const tagAliases = {
    "기본 문항": "기본문항",
    "기본문항": "기본문항",
    "실수 유도": "실수문항",
    "실수유도": "실수문항",
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
  const derivedTagsFor = (source, similarProblemNeeded, similarProblemSource, similarProblemRelation) => {
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
    if (relationTagMap[similarProblemRelation]) tags.push(relationTagMap[similarProblemRelation]);
    if (similarProblemNeeded === "필요" && !relationTagMap[similarProblemRelation]) tags.push("유사유형문항");
    if (sourceTagMap[source]) tags.push(sourceTagMap[source]);
    for (const sourceText of [similarProblemSource, source]) {
      const text = String(sourceText || "");
      if (text.includes("교과서")) tags.push("교과서 연계");
      if (text.includes("부교재")) tags.push("부교재 연계");
      if (/EBS/i.test(text)) tags.push("EBS 연계");
      if (text.includes("모의고사")) tags.push("모의고사 연계");
    }
    return tags;
  };

  return items
    .map((item, index) => {
      if (!item || typeof item !== "object") return null;
      const number = Number(item.number || item.questionNumber || item.no) || index + 1;
      const difficulty = String(item.difficulty || "확인 필요").trim();
      const role = String(item.role || "기본").trim();
      const questionType = String(item.questionType || item.type || "확인 필요").trim();
      const source = String(item.source || "확인 필요").trim();
      const similarProblemNeeded = String(item.similarProblemNeeded || item.needsSimilarProblem || item.similarProblemRequired || "확인 필요").trim();
      const similarProblemSource = String(item.similarProblemSource || item.similarSource || item.linkedProblemSource || "").trim();
      const similarProblemRelation = String(item.similarProblemRelation || item.similarRelation || item.variationType || "확인 필요").trim();
      const ssenTypeTags = normalizeSsenTypeTags(item.ssenTypeTags || item.ssenTypes || item.ssenType || item.ssenTypeTag);
      const rawTags = Array.isArray(item.tags) ? item.tags : String(item.tags || "").split(/[,/·]/);

      return {
        number,
        page: Math.max(1, Number(item.page) || 1),
        score: String(item.score || item.points || "").trim(),
        questionType: questionTypeOptions.has(questionType) ? questionType : "확인 필요",
        unit: String(item.unit || item.chapter || item.topic || "").trim(),
        difficulty: difficultyOptions.has(difficulty) ? difficulty : "확인 필요",
        role: roleOptions.has(role) ? role : "확인 필요",
        source: sourceOptions.has(source) ? source : "확인 필요",
        correctRate: String(item.correctRate || item.expectedCorrectRate || "").trim(),
        similarProblemNeeded: similarProblemNeedOptions.has(similarProblemNeeded) ? similarProblemNeeded : "확인 필요",
        similarProblemSource,
        similarProblemRelation: similarProblemRelationOptions.has(similarProblemRelation) ? similarProblemRelation : "확인 필요",
        ocrText: String(item.ocrText || item.questionSummary || item.summary || "").trim(),
        variationRelationComment: String(item.variationRelationComment || item.sourceNote || "").trim(),
        strategyComment: String(item.strategyComment || item.comment || item.teacherCheckPoint || item.reviewPoint || "").trim(),
        ssenTypeTags,
        tags: Array.from(new Set([
          ...rawTags.map((tag) => tagAliases[String(tag).trim()] || "").filter(Boolean),
          ...derivedTagsFor(source, similarProblemNeeded, similarProblemSource, similarProblemRelation)
        ]))
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.page - b.page || a.number - b.number);
}

function extractQuestionItemsFromParsed(parsed) {
  if (Array.isArray(parsed)) return parsed;
  if (!parsed || typeof parsed !== "object") return [];
  const directCandidates = [
    parsed.questionItems,
    parsed.question_items,
    parsed.questions,
    parsed.items,
    parsed.questionItemDrafts,
    parsed.questionCards,
    parsed.analysis?.questionItems,
    parsed.answer?.questionItems,
    parsed.response?.questionItems,
    parsed.output?.questionItems,
    parsed["문항정보"],
    parsed["문항카드"],
    parsed["문항별정보"],
    parsed["문항목록"],
    parsed.result?.questionItems,
    parsed.result?.questions,
    parsed.result?.items,
    parsed.data?.questionItems,
    parsed.data?.questions,
    parsed.data?.items
  ];
  for (const candidate of directCandidates) {
    if (Array.isArray(candidate)) return candidate;
    if (candidate && typeof candidate === "object" && !Array.isArray(candidate)) {
      const values = Object.values(candidate);
      if (values.length && values.every((value) => value && typeof value === "object")) return values;
    }
  }
  if (parsed.questionItem && typeof parsed.questionItem === "object") return [parsed.questionItem];
  return [];
}

function extractQuestionItemsFromLooseText(text = "") {
  const lines = String(text ?? "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
  const itemsByNumber = new Map();

  lines.forEach((line) => {
    const numberMatch = line.match(/(?:^|[\s|,])(?:문항\s*)?(\d{1,2})\s*(?:번|[.)])/);
    if (!numberMatch) return;
    const number = Number(numberMatch[1]);
    if (!number || number > 80) return;

    const scoreMatch = line.match(/(?:배점|score|points)\s*[:：]?\s*([0-9]+(?:\.[0-9]+)?\s*점?)/i) || line.match(/[\[(（]\s*([0-9]+(?:\.[0-9]+)?\s*점)\s*[\])）]/);
    const unitMatch = line.match(/(?:단원|unit|chapter|topic)\s*[:：]\s*([^|,/，]+?)(?=\s*(?:난이도|difficulty|쎈|ssen|역할|role|태그|tags|$))/i);
    const difficultyMatch = line.match(/(?:난이도|difficulty)\s*[:：]?\s*(확인\s*필요|중상|중하|상|중|하)/i);
    const roleMatch = line.match(/(?:역할|role)\s*[:：]?\s*(기본|실수유도|앞번호\s*고난도|준킬러|킬러|서술형\s*변별|확인\s*필요)/i);
    const questionTypeMatch = line.match(/(?:문항\s*형식|형식|questionType|type)\s*[:：]?\s*(객관식|단답형|서술형|논술형|확인\s*필요)/i);
    const ssenCodeMatch = line.match(/\bSSEN-[A-Z0-9-]+/i);
    const ssenRow = ssenCodeMatch ? ssenTypeByCode.get(ssenCodeMatch[0].toUpperCase()) : null;

    const nextItem = {
      number,
      score: scoreMatch?.[1] ? String(scoreMatch[1]).replace(/\s+/g, "") : "",
      questionType: questionTypeMatch?.[1]?.replace(/\s+/g, " ") || "",
      unit: unitMatch?.[1]?.trim() || ssenRow?.unitName || "",
      difficulty: difficultyMatch?.[1]?.replace(/\s+/g, " ") || "",
      role: roleMatch?.[1]?.replace(/\s+/g, " ") || "",
      strategyComment: line.slice(0, 240),
      ssenTypeTags: ssenRow
        ? [{
            role: "primary",
            typeCode: ssenRow.typeCode,
            typeName: ssenRow.typeName,
            unitName: ssenRow.unitName,
            confidence: "중",
            reason: "AI 응답 텍스트의 쎈 유형 코드에서 복구"
          }]
        : []
    };

    if ([nextItem.unit, nextItem.difficulty, nextItem.role, nextItem.ssenTypeTags.length].some(Boolean)) {
      itemsByNumber.set(number, { ...(itemsByNumber.get(number) || {}), ...nextItem });
    }
  });

  return Array.from(itemsByNumber.values()).sort((a, b) => Number(a.number) - Number(b.number));
}

function normalizeClassificationRowsFromAi(rows = []) {
  if (!Array.isArray(rows)) return [];
  const difficultyOptions = new Set(["확인 필요", "하", "중하", "중", "중상", "상"]);
  const roleOptions = new Set(["기본", "실수유도", "앞번호 고난도", "준킬러", "킬러", "서술형 변별", "확인 필요"]);
  const questionTypeOptions = new Set(["객관식", "단답형", "서술형", "논술형", "확인 필요"]);
  const sourceOptions = new Set(["확인 필요", "교과서", "부교재", "EBS", "학교 프린트", "모의고사", "수능/평가원", "자체 변형", "기타"]);

  return rows
    .map((row, index) => {
      if (!row || typeof row !== "object") return null;
      const number = Number(row.number || row.questionNumber || row.no) || index + 1;
      const difficulty = String(row.difficulty || "확인 필요").trim();
      const role = String(row.role || "기본").trim();
      const questionType = String(row.questionType || row.type || "확인 필요").trim();
      const source = String(row.source || "확인 필요").trim();
      const rawTags = Array.isArray(row.tags) ? row.tags : String(row.tags || "").split(/[,/·]/);
      const needsReview = row.needsReview === false
        ? false
        : ["확인 필요", "", "-", "하"].includes(String(row.confidence || "").trim()) ||
          !String(row.unit || row.chapter || row.topic || "").trim() ||
          !normalizeSsenTypeTags(row.ssenTypeTags || row.ssenTypes || row.ssenType || row.ssenTypeTag).length;

      return {
        number,
        page: Math.max(1, Number(row.page) || 1),
        score: String(row.score || row.points || "").trim(),
        questionType: questionTypeOptions.has(questionType) ? questionType : "확인 필요",
        unit: String(row.unit || row.chapter || row.topic || "").trim(),
        detailType: String(row.detailType || row.subtype || row.typeName || "").trim(),
        difficulty: difficultyOptions.has(difficulty) ? difficulty : "확인 필요",
        role: roleOptions.has(role) ? role : "확인 필요",
        source: sourceOptions.has(source) ? source : "확인 필요",
        evidence: String(row.evidence || row.summary || row.questionSummary || row.ocrText || "").trim().slice(0, 240),
        reviewNote: String(row.reviewNote || row.strategyComment || row.comment || row.teacherCheckPoint || row.reason || "").trim().slice(0, 500),
        ssenTypeTags: normalizeSsenTypeTags(row.ssenTypeTags || row.ssenTypes || row.ssenType || row.ssenTypeTag),
        tags: rawTags.map((tag) => String(tag || "").trim()).filter(Boolean),
        sourceId: String(row.sourceId || row.questionSourceId || row.cropSourceId || "").trim(),
        sourceUrl: String(row.sourceUrl || row.questionSourceUrl || row.cropSourceUrl || "").trim(),
        needsReview,
        confidence: String(row.confidence || (needsReview ? "확인 필요" : "중")).trim()
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.page - b.page || a.number - b.number);
}

function extractClassificationRowsFromParsed(parsed) {
  if (Array.isArray(parsed)) return parsed;
  if (!parsed || typeof parsed !== "object") return [];
  const candidates = [
    parsed.classificationRows,
    parsed.questionClassifications,
    parsed.classifications,
    parsed.rows,
    parsed.items,
    parsed.result?.classificationRows,
    parsed.result?.questionClassifications,
    parsed.data?.classificationRows,
    parsed.data?.questionClassifications,
    parsed.analysis?.classificationRows,
    parsed.output?.classificationRows,
    parsed["문항분류표"],
    parsed["문항별분류"],
    parsed["분류표"]
  ];
  for (const candidate of candidates) {
    if (Array.isArray(candidate)) return candidate;
    if (candidate && typeof candidate === "object" && !Array.isArray(candidate)) {
      const values = Object.values(candidate);
      if (values.length && values.every((value) => value && typeof value === "object")) return values;
    }
  }
  return [];
}

const classificationRowCandidatePaths = [
  "classificationRows",
  "questionClassifications",
  "classifications",
  "rows",
  "items",
  "fields.classificationRows",
  "fields.questionClassifications",
  "result.classificationRows",
  "result.questionClassifications",
  "result.fields.classificationRows",
  "result.fields.questionClassifications",
  "data.classificationRows",
  "data.questionClassifications",
  "data.fields.classificationRows",
  "analysis.classificationRows",
  "output.classificationRows",
  "문항분류표",
  "문항별분류",
  "분류표"
];

function extractCompleteJsonObjectsFromArrayText(text = "", arrayStartIndex = -1) {
  const source = String(text ?? "");
  if (arrayStartIndex < 0 || source[arrayStartIndex] !== "[") return [];
  const objects = [];
  let inString = false;
  let escaped = false;
  let depth = 0;
  let objectStart = -1;

  for (let index = arrayStartIndex + 1; index < source.length; index += 1) {
    const char = source[index];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (char === "\\") {
      escaped = true;
      continue;
    }
    if (char === "\"") {
      inString = !inString;
      continue;
    }
    if (inString) continue;
    if (char === "{") {
      if (depth === 0) objectStart = index;
      depth += 1;
      continue;
    }
    if (char === "}") {
      if (depth > 0) depth -= 1;
      if (depth === 0 && objectStart >= 0) {
        objects.push(source.slice(objectStart, index + 1));
        objectStart = -1;
      }
    }
    if (char === "]" && depth === 0) break;
  }

  return objects;
}

function extractLooseClassificationRowsFromText(text = "") {
  const source = String(text ?? "");
  const keys = [
    "classificationRows",
    "questionClassifications",
    "classifications",
    "rows",
    "items",
    "문항분류표",
    "문항별분류",
    "분류표"
  ];
  for (const key of keys) {
    const keyRegex = new RegExp(`"${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"\\s*:\\s*\\[`, "i");
    const match = keyRegex.exec(source);
    if (!match) continue;
    const arrayStartIndex = source.indexOf("[", match.index);
    const objectTexts = extractCompleteJsonObjectsFromArrayText(source, arrayStartIndex);
    const rows = objectTexts.map((objectText) => {
      try {
        return JSON.parse(objectText);
      } catch {
        return null;
      }
    }).filter(Boolean);
    return {
      key,
      arrayStartIndex,
      objectTextCount: objectTexts.length,
      rows
    };
  }
  return {
    key: "",
    arrayStartIndex: -1,
    objectTextCount: 0,
    rows: []
  };
}

function extractJsonStringFieldFromText(text = "", fieldName = "") {
  if (!fieldName) return "";
  const source = String(text ?? "");
  const regex = new RegExp(`"${fieldName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"\\s*:\\s*"((?:\\\\.|[^"\\\\])*)`, "i");
  const match = regex.exec(source);
  if (!match?.[1]) return "";
  try {
    return JSON.parse(`"${match[1].replace(/"$/, "")}"`);
  } catch {
    return match[1].replace(/\\"/g, "\"").replace(/\\n/g, "\n").trim();
  }
}

function buildClassificationParseDiagnostics(text = "", parsed = null, rows = [], baseDiagnostics = {}, looseExtraction = null) {
  const parsedObject = parsed && typeof parsed === "object" ? parsed : null;
  const candidateSummaries = classificationRowCandidatePaths.map((path) => ({
    path,
    ...summarizeParseCandidate(getValueAtPath(parsedObject, path))
  }));
  const populatedCandidates = candidateSummaries.filter((candidate) =>
    candidate.type !== "missing" &&
    (candidate.type !== "array" || candidate.length > 0)
  );
  return {
    ...baseDiagnostics,
    parsedType: Array.isArray(parsed) ? "array" : parsedObject ? "object" : parsed === null ? "null" : typeof parsed,
    topLevelKeys: parsedObject ? Object.keys(parsedObject).slice(0, 20) : [],
    candidateSummaries,
    populatedCandidates,
    detectedKeys: Array.isArray(baseDiagnostics.detectedKeys) ? baseDiagnostics.detectedKeys : detectJsonKeysFromText(text),
    looseRowKey: looseExtraction?.key || "",
    looseRowCount: Array.isArray(looseExtraction?.rows) ? looseExtraction.rows.length : 0,
    looseRowObjectTextCount: Number(looseExtraction?.objectTextCount) || 0,
    looseArrayStartIndex: Number(looseExtraction?.arrayStartIndex) || -1,
    normalizedRowCount: rows.length,
    rawTextPreview: String(text ?? "").trim().slice(0, 1200)
  };
}

function normalizeQuestionClassificationResult(text = "") {
  const { parsed, diagnostics: jsonDiagnostics } = parseJsonTextWithDiagnostics(text);
  const parsedRows = normalizeClassificationRowsFromAi(extractClassificationRowsFromParsed(parsed));
  const looseExtraction = parsedRows.length ? null : extractLooseClassificationRowsFromText(text);
  const looseRows = parsedRows.length ? [] : normalizeClassificationRowsFromAi(looseExtraction.rows);
  const rows = parsedRows.length ? parsedRows : looseRows;
  const classificationSummary = String(parsed?.classificationSummary || parsed?.summary || "").trim() || extractJsonStringFieldFromText(text, "classificationSummary");
  const parseDiagnostics = buildClassificationParseDiagnostics(text, parsed, rows, jsonDiagnostics, looseExtraction);
  return {
    fields: {
      classificationSummary,
      unitDistribution: String(parsed?.unitDistribution || "").trim() || extractJsonStringFieldFromText(text, "unitDistribution"),
      typeClassification: String(parsed?.typeClassification || "").trim() || extractJsonStringFieldFromText(text, "typeClassification"),
      killerProblems: String(parsed?.killerProblems || "").trim() || extractJsonStringFieldFromText(text, "killerProblems"),
      sourceCheckNotes: String(parsed?.sourceCheckNotes || "").trim() || extractJsonStringFieldFromText(text, "sourceCheckNotes"),
      classificationRows: rows,
      questionClassifications: rows
    },
    rowCount: rows.length,
    parseDiagnostics
  };
}

function normalizeAnalysisFields(fields, payload, rawText = "") {
  const fallback = createMockAnalysis(payload);
  const parsed = fields && typeof fields === "object" ? fields : {};
  const cleanText = String(rawText ?? "").trim();
  const questionItems = normalizeQuestionItemsFromAi(extractQuestionItemsFromParsed(parsed));
  const questionClassifications = normalizeClassificationRowsFromAi(extractClassificationRowsFromParsed(parsed));
  const questionComposition = normalizeQuestionCompositionFromAi(parsed.questionComposition);

  const normalized = {
    oneLineSummary: parsed.oneLineSummary || fallback.oneLineSummary,
    examStructure: parsed.examStructure || fallback.examStructure,
    aiOverview: parsed.aiOverview || cleanText || fallback.aiOverview,
    unitDistribution: parsed.unitDistribution || fallback.unitDistribution,
    typeClassification: parsed.typeClassification || fallback.typeClassification,
    killerProblems: parsed.killerProblems || fallback.killerProblems,
    fiveCorePatterns: parsed.fiveCorePatterns || fallback.fiveCorePatterns,
    sourceCheckNotes: parsed.sourceCheckNotes || fallback.sourceCheckNotes,
    studentAnalysisDraft: parsed.studentAnalysisDraft || fallback.studentAnalysisDraft,
    blogDraft: parsed.blogDraft || fallback.blogDraft,
    instagramDraft: parsed.instagramDraft || fallback.instagramDraft
  };
  normalized.questionComposition = questionComposition || normalizeQuestionCompositionFromAi(fallback.questionComposition);
  const rawSourceCompositions = Array.isArray(parsed.sourceCompositions)
    ? parsed.sourceCompositions
    : parsed.sourceCompositions && typeof parsed.sourceCompositions === "object"
      ? Object.entries(parsed.sourceCompositions).map(([sourceId, composition]) => ({ sourceId, ...(composition || {}) }))
      : [];
  const sourceCompositions = rawSourceCompositions
    .map((composition) => {
        const normalizedComposition = normalizeQuestionCompositionFromAi(composition);
        const sourceId = String(composition?.sourceId || composition?.fileName || composition?.sourceName || "").trim();
        return sourceId && normalizedComposition ? { sourceId, ...normalizedComposition } : null;
      }).filter(Boolean);
  if (sourceCompositions.length) normalized.sourceCompositions = sourceCompositions;
  if (questionItems.length) normalized.questionItems = questionItems;
  if (questionClassifications.length) normalized.questionClassifications = questionClassifications;
  return normalized;
}

function createMockComment(payload) {
  const name = payload.studentName || "학생";
  const rawText = payload.rawText?.trim();
  if (payload.polishMode === "spellingOnly") {
    return rawText || "";
  }

  if (payload.audience === "student") {
    return rawText
      ? `${name}, 오늘 확인한 내용은 다음 시간에 이어서 같이 보겠습니다. ${rawText}`
      : `${name}, 오늘 배운 내용을 차분히 복습하고 다음 과제를 계획대로 진행해 주세요.`;
  }

  if (payload.audience === "teacher") {
    return rawText
      ? `시험 총평 초안입니다. ${rawText}`
      : "시험의 주요 출제 흐름과 학생들이 어려워할 지점을 중심으로 총평을 작성해 주세요.";
  }

  return rawText
    ? `${name} 학생은 오늘 수업에서 ${rawText} 부분을 중심으로 확인했습니다. 다음 수업까지 해당 내용을 다시 점검할 수 있도록 지도하겠습니다.`
    : `${name} 학생은 오늘 수업에 참여했습니다. 과제와 수업 내용을 이어서 확인하며 다음 수업에서 보완하겠습니다.`;
}

async function runOpenAiText(prompt, model, maxOutputTokens = 0) {
  const response = await fetch(OPENAI_RESPONSES_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${requiredEnv("OPENAI_API_KEY")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      input: prompt,
      ...(maxOutputTokens ? { max_output_tokens: maxOutputTokens } : {})
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "OpenAI 요청에 실패했습니다.");
  }

  return outputTextFromOpenAi(data);
}

async function runOpenAiVision(prompt, imageDataUrl, model) {
  const response = await fetch(OPENAI_RESPONSES_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${requiredEnv("OPENAI_API_KEY")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      max_output_tokens: 1800,
      model,
      input: [
        {
          role: "user",
          content: [
            { type: "input_text", text: prompt },
            { type: "input_image", image_url: imageDataUrl }
          ]
        }
      ]
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "OpenAI vision 요청에 실패했습니다.");
  }

  return outputTextFromOpenAi(data);
}

async function runAnthropicText(prompt, model, maxTokens = 4000) {
  const response = await fetch(ANTHROPIC_MESSAGES_URL, {
    method: "POST",
    headers: {
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
      "x-api-key": requiredEnv("ANTHROPIC_API_KEY")
    },
    body: JSON.stringify({
      model,
      max_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "Claude 요청에 실패했습니다.");
  }

  return outputTextFromAnthropic(data);
}

async function runAnthropicVision(prompt, imageDataUrl, model) {
  const image = parseImageDataUrl(imageDataUrl);
  const response = await fetch(ANTHROPIC_MESSAGES_URL, {
    method: "POST",
    headers: {
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
      "x-api-key": requiredEnv("ANTHROPIC_API_KEY")
    },
    body: JSON.stringify({
      model,
      max_tokens: 1800,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            {
              type: "image",
              source: {
                type: "base64",
                media_type: image.mediaType,
                data: image.base64
              }
            }
          ]
        }
      ]
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "Claude vision 요청에 실패했습니다.");
  }

  return outputTextFromAnthropic(data);
}

function normalizeClassificationPageImages(pageImages = []) {
  if (!Array.isArray(pageImages)) return [];
  return pageImages
    .map((entry, index) => ({
      pageNumber: Math.max(1, Number(entry?.pageNumber || index + 1) || index + 1),
      imageDataUrl: String(entry?.imageDataUrl || entry?.dataUrl || "").trim()
    }))
    .filter((entry) => entry.imageDataUrl.startsWith("data:image/"))
    .slice(0, QUESTION_CLASSIFICATION_IMAGE_LIMIT);
}

async function runOpenAiQuestionClassification(prompt, pageImages, model) {
  const content = [
    { type: "input_text", text: prompt },
    ...pageImages.flatMap((entry) => [
      { type: "input_text", text: `[첨부 이미지] 원본 PDF/이미지 ${entry.pageNumber}페이지` },
      {
        type: "input_image",
        image_url: entry.imageDataUrl
      }
    ])
  ];
  const response = await fetch(OPENAI_RESPONSES_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${requiredEnv("OPENAI_API_KEY")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      max_output_tokens: 9000,
      input: [{ role: "user", content }]
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "OpenAI 문항 분류 요청에 실패했습니다.");
  }

  return outputTextFromOpenAi(data);
}

async function runAnthropicQuestionClassification(prompt, pageImages, model) {
  const imageBlocks = pageImages.flatMap((entry) => {
    const image = parseImageDataUrl(entry.imageDataUrl);
    return [
      { type: "text", text: `[첨부 이미지] 원본 PDF/이미지 ${entry.pageNumber}페이지` },
      {
        type: "image",
        source: {
          type: "base64",
          media_type: image.mediaType,
          data: image.base64
        }
      }
    ];
  });
  const response = await fetch(ANTHROPIC_MESSAGES_URL, {
    method: "POST",
    headers: {
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
      "x-api-key": requiredEnv("ANTHROPIC_API_KEY")
    },
    body: JSON.stringify({
      model,
      max_tokens: 9000,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            ...imageBlocks
          ]
        }
      ]
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "Claude 문항 분류 요청에 실패했습니다.");
  }

  return outputTextFromAnthropic(data);
}

async function runQuestionClassificationWithProvider(provider, prompt, model, pageImages = []) {
  if (provider === "openai") {
    return pageImages.length
      ? runOpenAiQuestionClassification(prompt, pageImages, model)
      : runOpenAiText(prompt, model, 9000);
  }
  if (provider === "anthropic") {
    return pageImages.length
      ? runAnthropicQuestionClassification(prompt, pageImages, model)
      : runAnthropicText(prompt, model, 9000);
  }
  throw new Error(`지원하지 않는 AI 제공자입니다: ${provider}`);
}

async function runQuestionClassificationWithFallback(prompt, provider, model, pageImages = []) {
  try {
    return { provider, model, text: await runQuestionClassificationWithProvider(provider, prompt, model, pageImages), fallbackReason: "" };
  } catch (error) {
    const fallbackProvider = provider === "openai" && envValue("ANTHROPIC_API_KEY")
      ? "anthropic"
      : provider === "anthropic" && envValue("OPENAI_API_KEY")
        ? "openai"
        : "";
    if (!fallbackProvider || !isRetryableAiProviderError(error)) throw error;

    const fallbackModel = fallbackProvider === "anthropic"
      ? examQuestionClassificationModels.anthropic || fallbackModels.anthropic
      : examQuestionClassificationModels.openai || fallbackModels.openai;
    try {
      return {
        provider: fallbackProvider,
        model: fallbackModel,
        text: await runQuestionClassificationWithProvider(fallbackProvider, prompt, fallbackModel, pageImages),
        fallbackReason: `${provider} 실패 후 ${fallbackProvider}로 자동 전환: ${error.message}`
      };
    } catch (fallbackError) {
      throw new Error(`${provider} 실패: ${error.message} / ${fallbackProvider} 재시도 실패: ${fallbackError.message}`);
    }
  }
}

async function runQuestionInfoTextWithProvider(provider, prompt, model) {
  if (provider === "openai") return runOpenAiText(prompt, model, 6000);
  if (provider === "anthropic") return runAnthropicText(prompt, model, 6000);
  throw new Error(`지원하지 않는 AI 제공자입니다: ${provider}`);
}

async function runQuestionInfoTextWithFallback(payload, prompt, provider, model) {
  try {
    return { provider, model, text: await runQuestionInfoTextWithProvider(provider, prompt, model), fallbackReason: "" };
  } catch (error) {
    const fallbackProvider = provider === "openai" && envValue("ANTHROPIC_API_KEY")
      ? "anthropic"
      : provider === "anthropic" && envValue("OPENAI_API_KEY")
        ? "openai"
        : "";
    if (!fallbackProvider || !isRetryableAiProviderError(error)) throw error;

    const fallbackModel = fallbackProvider === "anthropic"
      ? examAnalysisModels.anthropic || fallbackModels.anthropic
      : examAnalysisModels.openai || fallbackModels.openai;
    try {
      return {
        provider: fallbackProvider,
        model: fallbackModel,
        text: await runQuestionInfoTextWithProvider(fallbackProvider, prompt, fallbackModel),
        fallbackReason: `${provider} 실패 후 ${fallbackProvider}로 자동 전환: ${error.message}`
      };
    } catch (fallbackError) {
      throw new Error(`${provider} 실패: ${error.message} / ${fallbackProvider} 재시도 실패: ${fallbackError.message}`);
    }
  }
}

export async function runExamAnalysis(payload) {
  const provider = selectedProvider(payload);
  const questionInfoOnly = Boolean(payload.questionInfoOnly);
  const model = selectedModel(payload, questionInfoOnly ? "questionClassification" : "examAnalysis");

  if (provider === "mock") {
    if (questionInfoOnly) {
      throw new Error("문항정보 채우기는 실제 AI 제공자가 필요합니다. 설정에서 문항분류·누락보정 AI 제공자를 Anthropic 또는 OpenAI로 선택해 주세요.");
    }
    return { provider, model, fields: createMockAnalysis(payload) };
  }

  if (provider === "openai") {
    const text = await runOpenAiText(questionInfoOnly ? buildQuestionItemsPrompt(payload) : buildExamAnalysisPrompt(payload), model, questionInfoOnly ? 8000 : 0);
    const fields = normalizeAnalysisFields(safeParseJsonText(text), payload, text);
    if (questionInfoOnly && !fields.questionItems?.length) throw new Error("AI 응답에 문항정보(questionItems)가 없습니다. 다시 실행하거나 원본 OCR 상태를 확인해 주세요.");
    return { provider, model, fields, rawText: text };
  }

  if (provider === "anthropic") {
    const text = await runAnthropicText(questionInfoOnly ? buildQuestionItemsPrompt(payload) : buildExamAnalysisPrompt(payload), model, questionInfoOnly ? 8000 : 4000);
    const fields = normalizeAnalysisFields(safeParseJsonText(text), payload, text);
    if (questionInfoOnly && !fields.questionItems?.length) throw new Error("AI 응답에 문항정보(questionItems)가 없습니다. 다시 실행하거나 원본 OCR 상태를 확인해 주세요.");
    return { provider, model, fields, rawText: text };
  }

  throw new Error(`지원하지 않는 AI 제공자입니다: ${provider}`);
}

export async function runExamQuestionInfoText(payload) {
  let provider = selectedProvider(payload);
  let model = selectedModel(payload, "questionClassification");
  const fallbackItems = normalizeQuestionItemsFromAi(Array.isArray(payload.questionItems) ? payload.questionItems : []);

  if (provider === "mock") {
    return {
      provider,
      model,
      fields: { questionItems: fallbackItems },
      rawText: "",
      aiItemCount: 0,
      repaired: false,
      warning: "mock AI 설정이라 OCR 기반 기본정보만 저장했습니다."
    };
  }

  const prompt = buildQuestionInfoTextPrompt(payload);
  const runResult = await runQuestionInfoTextWithFallback(payload, prompt, provider, model);
  provider = runResult.provider;
  model = runResult.model;
  const text = runResult.text;
  let questionItems = normalizeQuestionInfoAiItemsFromText(text);
  let repairText = "";
  let repaired = false;
  if (!questionItems.length) {
    try {
      const repairPrompt = buildQuestionInfoRepairPrompt(payload, text);
      repairText = await runQuestionInfoTextWithProvider(provider, repairPrompt, model);
      const repairedItems = normalizeQuestionInfoAiItemsFromText(repairText);
      if (repairedItems.length) {
        questionItems = repairedItems;
        repaired = true;
      }
    } catch (repairError) {
      repairText = `복구 요청 실패: ${repairError.message}`;
    }
  }
  const targetCount = Math.max(1, Math.min(80, Number(payload.questionTargetCount) || fallbackItems.length || 20));
  const warning = questionItems.length < targetCount
    ? `AI 응답 문항정보가 ${questionItems.length}/${targetCount}개라 OCR 기반 기본정보를 함께 유지했습니다.`
    : "";

  return {
    provider,
    model,
    fields: { questionItems: questionItems.length ? questionItems : fallbackItems },
    rawText: repairText ? `${text}\n\n[repair]\n${repairText}` : text,
    aiItemCount: questionItems.length,
    repaired,
    ...(runResult.fallbackReason ? { fallbackReason: runResult.fallbackReason } : {}),
    ...(warning || runResult.fallbackReason ? { warning: [runResult.fallbackReason, warning].filter(Boolean).join(" · ") } : {})
  };
}

export async function runExamQuestionClassification(payload) {
  let provider = selectedProvider(payload);
  let model = selectedModel(payload, "questionClassification");
  const seedRows = normalizeClassificationRowsFromAi(normalizeClassificationSeedRows(payload));
  const requestedNumbers = normalizeClassificationRequestedNumbers(payload.missingQuestionNumbers || payload.repairQuestionNumbers);
  const targetCount = Math.max(1, Math.min(80, requestedNumbers.length || Number(payload.classificationTargetCount) || Number(payload.questionTargetCount) || seedRows.length || 20));
  const expectedQuestionNumbers = requestedNumbers.length
    ? requestedNumbers
    : Array.from({ length: targetCount }, (_, index) => index + 1);

  if (provider === "mock") {
    return {
      provider,
      model,
      fields: {
        classificationRows: seedRows,
        questionClassifications: seedRows
      },
      rawText: "",
      classificationRowCount: 0,
      expectedQuestionNumbers,
      warning: "mock AI 설정이라 분류표 골격만 저장했습니다. 설정에서 실제 문항분류·누락보정 AI 제공자를 선택해 주세요."
    };
  }

  const pageImages = normalizeClassificationPageImages(payload.pageImages);
  const prompt = buildQuestionClassificationPrompt(payload);
  const runResult = await runQuestionClassificationWithFallback(prompt, provider, model, pageImages);
  provider = runResult.provider;
  model = runResult.model;
  const normalized = normalizeQuestionClassificationResult(runResult.text);
  const parsedRows = normalized.fields.classificationRows;
  const parsedRowNumbers = new Set(
    parsedRows
      .map((row) => Number(row.number))
      .filter((number) => Number.isInteger(number) && expectedQuestionNumbers.includes(number))
  );
  const missingRowNumbers = expectedQuestionNumbers
    .filter((number) => !parsedRowNumbers.has(number));
  const parseDiagnostics = {
    ...normalized.parseDiagnostics,
    provider,
    model,
    targetCount,
    expectedQuestionNumbers,
    missingRowNumbers,
    pageImageCount: pageImages.length,
    seedRowCount: seedRows.length,
    sourceFileCount: Array.isArray(payload.sourceFiles) ? payload.sourceFiles.length : 0,
    rawTextLength: String(runResult.text || "").length
  };
  const fallbackRows = seedRows.length ? seedRows : normalizeClassificationRowsFromAi(
    Array.from({ length: targetCount }, (_, index) => ({ number: index + 1, page: 1 }))
  );
  const rows = parsedRows.length ? parsedRows : fallbackRows;
  const missingRowText = missingRowNumbers.length
    ? ` 누락 문항: ${missingRowNumbers.slice(0, 12).map((number) => `${number}번`).join(", ")}${missingRowNumbers.length > 12 ? ` 외 ${missingRowNumbers.length - 12}개` : ""}`
    : "";
  const warning = parsedRows.length < targetCount || missingRowNumbers.length
    ? `AI 응답 분류 행이 ${parsedRows.length}/${targetCount}개라 기존 분류표 골격을 함께 유지했습니다.${missingRowText}`
    : "";

  return {
    provider,
    model,
    fields: {
      ...normalized.fields,
      classificationRows: rows,
      questionClassifications: rows
    },
    rawText: runResult.text,
    rawTextPreview: String(runResult.text || "").trim().slice(0, 4000),
    classificationRowCount: parsedRows.length,
    expectedQuestionNumbers,
    pageImageCount: pageImages.length,
    parseDiagnostics,
    ...(runResult.fallbackReason ? { fallbackReason: runResult.fallbackReason } : {}),
    ...(warning || runResult.fallbackReason ? { warning: [runResult.fallbackReason, warning].filter(Boolean).join(" · ") } : {})
  };
}

export async function draftQuestionCrops(payload) {
  const provider = selectedProvider(payload);
  const model = selectedModel(payload, "questionClassification");
  const imageDataUrl = String(payload.imageDataUrl || "");
  if (!imageDataUrl.startsWith("data:image/")) {
    throw new Error("문항 크롭 초안에는 페이지 이미지가 필요합니다.");
  }
  const prompt = buildQuestionCropPrompt(payload);

  if (provider === "mock") {
    return { provider, model, boxes: [], rawText: "" };
  }

  const text = provider === "openai"
    ? await runOpenAiVision(prompt, imageDataUrl, model)
    : provider === "anthropic"
      ? await runAnthropicVision(prompt, imageDataUrl, model)
      : "";

  if (!text) throw new Error(`지원하지 않는 vision 제공자입니다: ${provider}`);
  const parsed = safeParseJsonText(text);
  return {
    provider,
    model,
    boxes: normalizeQuestionCropBoxes(parsed, payload),
    rawText: text
  };
}

export async function polishLessonComment(payload) {
  const provider = selectedProvider(payload);
  const model = selectedModel(payload);

  if (provider === "mock") {
    return { provider, model, polishedText: createMockComment(payload) };
  }

  const prompt = buildCommentPrompt(payload);
  if (provider === "openai") {
    return { provider, model, polishedText: (await runOpenAiText(prompt, model)).trim() };
  }

  if (provider === "anthropic") {
    return { provider, model, polishedText: (await runAnthropicText(prompt, model)).trim() };
  }

  throw new Error(`지원하지 않는 AI 제공자입니다: ${provider}`);
}
