import {
  classificationRowsToInsightItems,
  formatSsenTypeTag,
  getSsenPrimaryTypeText,
  getSsenSecondaryTypeText,
  hasExamQuestionDetailedInsight,
  isExamQuestionInsightRecommended,
  normalizeExamQuestionClassificationRows,
  normalizeExamQuestionItems,
  normalizeSsenTypeTags
} from "./questionClassification.js";

const defaultExamOutputLayoutChoices = Object.freeze({
  teacher: "A",
  student: "A",
  blog: "A",
  instagram: "A"
});

function normalizeFinalDocumentCropBox(box = null) {
  if (!box || typeof box !== "object") return null;
  const x = Math.max(0, Math.min(100, Number(box.x) || 0));
  const y = Math.max(0, Math.min(100, Number(box.y) || 0));
  const width = Math.max(0, Math.min(100 - x, Number(box.width) || 0));
  const height = Math.max(0, Math.min(100 - y, Number(box.height) || 0));
  return width && height ? { x, y, width, height } : null;
}

export function normalizeExamOutputLayoutChoices(choices = {}) {
  const safeChoices = choices && typeof choices === "object" && !Array.isArray(choices) ? choices : {};
  return Object.fromEntries(
    Object.entries(defaultExamOutputLayoutChoices).map(([key, defaultCode]) => {
      const code = String(safeChoices[key] || defaultCode).trim().toUpperCase();
      return [key, ["A", "B", "C"].includes(code) ? code : defaultCode];
    })
  );
}

export function getExamQuestionCommentCount(questionItems = []) {
  return normalizeExamQuestionItems(questionItems).filter((item) =>
    [item.teacherComment, item.variationRelationComment, item.strategyComment].some((value) => String(value || "").trim())
  ).length;
}

export function normalizeExamQuestionComposition(value = null) {
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
    confidence: String(source.confidence || "").trim(),
    confirmedAt: source.confirmedAt || "",
    confirmedBy: source.confirmedBy || ""
  };
}

export function parseExamScoreValue(value = "") {
  const numeric = Number(String(value ?? "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(numeric) && numeric > 0 ? numeric : 0;
}

export function getExamTotalScore(questionItems = [], questionComposition = null) {
  const composition = normalizeExamQuestionComposition(questionComposition);
  const compositionScore = parseExamScoreValue(composition?.totalScore);
  if (compositionScore) return compositionScore;
  const itemSum = normalizeExamQuestionItems(questionItems).reduce((sum, item) => sum + parseExamScoreValue(item.score), 0);
  return itemSum || 100;
}

export function formatQuestionScoreWithWeight(item = {}, questionItems = [], questionComposition = null) {
  const score = parseExamScoreValue(item.score);
  const rawScore = String(item.score || "").trim();
  if (!score) return rawScore || "-";
  const totalScore = getExamTotalScore(questionItems, questionComposition);
  const percent = totalScore ? ((score / totalScore) * 100).toFixed(1).replace(/\.0$/, "") : "";
  const scoreLabel = rawScore ? (/[점%]$/.test(rawScore) ? rawScore : `${rawScore}점`) : `${score}점`;
  return percent ? `${scoreLabel} · ${percent}%` : scoreLabel;
}

export function summarizeQuestionUnits(questionItems = []) {
  const unitMap = new Map();
  normalizeExamQuestionItems(questionItems).forEach((item) => {
    const unit = String(item.unit || "단원 미입력").trim();
    const previous = unitMap.get(unit) || { unit, count: 0, score: 0, hard: 0, questions: [] };
    const score = parseExamScoreValue(item.score);
    previous.count += 1;
    previous.score += Number.isFinite(score) ? score : 0;
    if (["중상", "상"].includes(item.difficulty) || ["준킬러", "킬러", "앞번호 고난도", "서술형 변별"].includes(item.role)) {
      previous.hard += 1;
    }
    previous.questions.push(item.number);
    unitMap.set(unit, previous);
  });
  return Array.from(unitMap.values()).sort((a, b) => b.count - a.count || a.unit.localeCompare(b.unit, "ko"));
}

export function summarizeQuestionSsenTypes(questionItems = []) {
  const typeMap = new Map();
  normalizeExamQuestionItems(questionItems).forEach((item) => {
    normalizeSsenTypeTags(item.ssenTypeTags).forEach((tag) => {
      const label = formatSsenTypeTag(tag) || tag.unitName || "쎈 유형 미입력";
      const previous = typeMap.get(label) || {
        label,
        unitName: tag.unitName || "",
        primary: 0,
        secondary: 0,
        questions: []
      };
      if (tag.role === "secondary") previous.secondary += 1;
      else previous.primary += 1;
      previous.questions.push(item.number);
      typeMap.set(label, previous);
    });
  });
  return Array.from(typeMap.values()).sort((a, b) =>
    (b.primary + b.secondary) - (a.primary + a.secondary) || a.label.localeCompare(b.label, "ko")
  );
}

export function createFinalDocumentId(prefix = "block") {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}

export function getExamStrategyFlowNodes(questionItems = []) {
  const items = normalizeExamQuestionItems(questionItems);
  const sourceCount = items.filter((item) =>
    (item.source && item.source !== "확인 필요") ||
    item.similarProblemNeeded === "필요" ||
    item.similarProblemSource
  ).length;
  const commentCount = getExamQuestionCommentCount(items);
  const hardCount = items.filter((item) => ["준킬러", "킬러", "앞번호 고난도", "서술형 변별"].includes(item.role)).length;
  return [
    { title: "1. 시험 범위 정리", detail: "시험관리 탭 범위와 OCR 원문 확인" },
    { title: "2. 문항별 검수", detail: `${items.length || 0}문항 단원·난이도·역할 확정` },
    { title: "3. 변형 관계 분석", detail: sourceCount ? `출처/유사문항 입력 ${sourceCount}문항` : "교과서/부교재/EBS/모의고사 연계 확인" },
    { title: "4. 변별 문항 훈련", detail: hardCount ? `변별 후보 ${hardCount}문항` : "준킬러/킬러 후보 확정" },
    { title: "5. 코멘트 기반 보강", detail: commentCount ? `강사 코멘트 ${commentCount}개 반영` : "학생별 오답과 수업 전략 입력" }
  ];
}

export function createExamFinalClassificationTableRows(classificationRows = []) {
  return normalizeExamQuestionClassificationRows(classificationRows).map((row) => [
    `${row.number}번${row.page ? ` (${row.page}p)` : ""}`,
    [row.score || "-", row.questionType || "확인 필요"].filter(Boolean).join(" · "),
    row.unit || "확인 필요",
    [
      getSsenPrimaryTypeText(row.ssenTypeTags) || "확인 필요",
      getSsenSecondaryTypeText(row.ssenTypeTags) ? `보조: ${getSsenSecondaryTypeText(row.ssenTypeTags)}` : ""
    ].filter(Boolean).join("\n"),
    [row.difficulty || "확인 필요", row.role || "-"].filter(Boolean).join(" · "),
    row.reviewNote || row.evidence || (row.needsReview ? "확인 필요" : "")
  ]);
}

export function createExamFinalDocumentFromAnalysis(analysis = {}, options = {}) {
  const getReportTitle = typeof options.getReportTitle === "function"
    ? options.getReportTitle
    : () => "시험분석 최종 보고서";
  const getReportSubtitle = typeof options.getReportSubtitle === "function"
    ? options.getReportSubtitle
    : () => "기출 PDF와 AI 분석 기반";
  const getReportMeta = typeof options.getReportMeta === "function"
    ? options.getReportMeta
    : () => [];
  const getQuestionCropImagePayload = typeof options.getQuestionCropImagePayload === "function"
    ? options.getQuestionCropImagePayload
    : () => null;
  const classificationRows = normalizeExamQuestionClassificationRows(analysis.questionClassifications || analysis.classificationRows);
  const classificationItems = classificationRowsToInsightItems(classificationRows);
  const questionItems = classificationItems.length ? classificationItems : normalizeExamQuestionItems(analysis.questionItems);
  const unitRows = summarizeQuestionUnits(questionItems);
  const ssenTypeRows = summarizeQuestionSsenTypes(questionItems);
  const classificationTableRows = createExamFinalClassificationTableRows(classificationRows);
  const sourceRows = questionItems.filter((item) =>
    (String(item.source || "").trim() && item.source !== "확인 필요") ||
    item.similarProblemNeeded === "필요" ||
    String(item.similarProblemSource || "").trim() ||
    (item.similarProblemRelation && item.similarProblemRelation !== "확인 필요")
  );
  const questionSlotItems = questionItems
    .filter((item) => isExamQuestionInsightRecommended(item) || hasExamQuestionDetailedInsight(item))
    .slice(0, 12);
  const slotItems = (questionSlotItems.length ? questionSlotItems : questionItems.slice(0, 6)).map((item) => ({
    id: item.questionId || createFinalDocumentId("slot"),
    number: `${item.number}번`,
    title: [item.unit, item.role].filter(Boolean).join(" · ") || "주요 문항",
    originalSlot: item.cropBox ? "원문항 크롭 이미지 삽입" : "원문항 삽입 영역",
    originalImage: getQuestionCropImagePayload(item, analysis),
    similarSlot: item.similarProblemNeeded === "필요" ? "유사문항 삽입 영역" : "필요 시 유사문항 삽입",
    similarProblemNeeded: item.similarProblemNeeded || "확인 필요",
    similarProblemSource: item.similarProblemSource || "",
    similarProblemRelation: item.similarProblemRelation || "확인 필요",
    comment: item.teacherComment || item.strategyComment || item.variationRelationComment || ""
  }));

  return {
    version: 1,
    generatedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    outputLayoutChoices: normalizeExamOutputLayoutChoices(analysis.outputLayoutChoices),
    blocks: [
      {
        id: createFinalDocumentId("cover"),
        type: "cover",
        title: getReportTitle(analysis),
        subtitle: getReportSubtitle(analysis),
        meta: getReportMeta(analysis)
      },
      {
        id: createFinalDocumentId("text"),
        type: "text",
        title: "기말고사 출제 핵심 분석",
        value: [analysis.oneLineSummary, analysis.examStructure, analysis.aiOverview].filter(Boolean).join("\n\n")
      },
      {
        id: createFinalDocumentId("table"),
        type: "table",
        title: "시험 기본 정보",
        columns: ["항목", "내용"],
        rows: [
          ["학교/학년", [analysis.schoolName, analysis.grade].filter(Boolean).join(" ") || "미입력"],
          ["고사", analysis.examName || "미입력"],
          ["과목", analysis.subject || "미입력"],
          ["문항 구성", analysis.questionComposition?.total ? `${analysis.questionComposition.total}문항` : `${questionItems.length || 0}문항`],
          ["난이도", analysis.oneLineSummary || "강사 검수 후 입력"]
        ]
      },
      ...(classificationTableRows.length ? [{
        id: createFinalDocumentId("table"),
        type: "table",
        title: "문항별 분류표 원본",
        columns: ["문항", "배점/형식", "단원", "쎈 유형", "난이도/역할", "검수 메모"],
        rows: classificationTableRows
      }] : []),
      {
        id: createFinalDocumentId("chart"),
        type: "chart",
        title: "단원별 출제 비율",
        chartType: "bar",
        rows: unitRows.slice(0, 8).map((row) => ({
          label: row.unit,
          value: row.count,
          note: row.score ? `${row.score}점 · ${row.questions.map((number) => `${number}번`).join(", ")}` : row.questions.map((number) => `${number}번`).join(", ")
        }))
      },
      ...(ssenTypeRows.length ? [{
        id: createFinalDocumentId("table"),
        type: "table",
        title: "쎈 유형별 분류",
        columns: ["쎈 유형", "단원", "주유형", "보조유형", "문항"],
        rows: ssenTypeRows.slice(0, 12).map((row) => [
          row.label,
          row.unitName || "-",
          row.primary || "-",
          row.secondary || "-",
          row.questions.map((number) => `${number}번`).join(", ")
        ])
      }] : []),
      {
        id: createFinalDocumentId("table"),
        type: "table",
        title: "난이도 상승 요인 분석",
        columns: ["요인", "해당 문항", "비고"],
        rows: [
          ["킬러/준킬러", questionItems.filter((item) => ["준킬러", "킬러", "1등급 변별문항"].includes(item.role) || item.tags?.includes("1등급 변별문항")).map((item) => `${item.number}번`).join(", ") || "확인 필요", analysis.insightKiller || ""],
          ["고배점 문항", questionItems.filter((item) => parseExamScoreValue(item.score) >= Math.max(4, getExamTotalScore(questionItems, analysis.questionComposition) * 0.05)).map((item) => `${item.number}번(${formatQuestionScoreWithWeight(item, questionItems, analysis.questionComposition)})`).join(", ") || "확인 필요", "문항 수가 달라지면 같은 배점도 전체 대비 비중이 달라집니다."],
          ["조건 해석", questionItems.filter((item) => ["앞번호 고난도", "서술형 변별"].includes(item.role)).map((item) => `${item.number}번`).join(", ") || "확인 필요", analysis.typeClassification || ""]
        ]
      },
      {
        id: createFinalDocumentId("table"),
        type: "table",
        title: "부교재·유사문항 활용",
        columns: ["문항", "출처", "유사문항", "변형 구분", "변형 관계"],
        rows: (sourceRows.length ? sourceRows : questionItems.filter((item) => item.similarProblemNeeded === "필요")).map((item) => [
          `${item.number}번`,
          item.similarProblemSource || item.source || "확인 필요",
          item.similarProblemNeeded || "확인 필요",
          item.similarProblemRelation || "확인 필요",
          item.variationRelationComment || "변형 관계 메모 입력"
        ])
      },
      {
        id: createFinalDocumentId("flow"),
        type: "flow",
        title: "대비전략 흐름도",
        nodes: getExamStrategyFlowNodes(questionItems)
      },
      {
        id: createFinalDocumentId("text"),
        type: "text",
        title: "점수 차이를 만든 결정 요인",
        value: [analysis.killerProblems, analysis.insightStudentErrors].filter(Boolean).join("\n\n")
      },
      {
        id: createFinalDocumentId("questionSlots"),
        type: "questionSlots",
        title: "주요 문항 삽입 슬롯",
        items: slotItems
      },
      {
        id: createFinalDocumentId("text"),
        type: "text",
        title: "TEACHER's COMMENT",
        value: [analysis.insightSummary, analysis.insightDirection, analysis.insightPrediction].filter(Boolean).join("\n\n")
      }
    ]
  };
}

export function normalizeExamFinalDocument(document = null) {
  if (!document || typeof document !== "object" || !Array.isArray(document.blocks)) return null;
  const blocks = document.blocks
    .filter((block) => block && typeof block === "object")
    .map((block, index) => {
      const type = ["cover", "text", "table", "chart", "flow", "questionSlots"].includes(block.type) ? block.type : "text";
      const base = {
        id: block.id || createFinalDocumentId(type),
        type,
        title: String(block.title || (type === "cover" ? "최종 분석지" : "편집 블록")).trim()
      };
      if (type === "cover") {
        return {
          ...base,
          subtitle: String(block.subtitle || "").trim(),
          meta: Array.isArray(block.meta) ? block.meta.map((item) => String(item || "").trim()).filter(Boolean) : []
        };
      }
      if (type === "table") {
        const columns = Array.isArray(block.columns) && block.columns.length
          ? block.columns.map((column) => String(column || "").trim() || "열")
          : ["항목", "내용"];
        const rows = Array.isArray(block.rows)
          ? block.rows.map((row) => {
            const cells = Array.isArray(row) ? row : row?.cells;
            return columns.map((_, cellIndex) => String(cells?.[cellIndex] ?? "").trim());
          })
          : [];
        return { ...base, columns, rows };
      }
      if (type === "chart") {
        const rows = Array.isArray(block.rows) ? block.rows : [];
        return {
          ...base,
          chartType: block.chartType || "bar",
          rows: rows.map((row) => ({
            id: row.id || createFinalDocumentId("chartRow"),
            label: String(row.label || "").trim(),
            value: Number(row.value) || 0,
            note: String(row.note || "").trim()
          })).filter((row) => row.label || row.value || row.note)
        };
      }
      if (type === "flow") {
        const nodes = Array.isArray(block.nodes) ? block.nodes : [];
        return {
          ...base,
          nodes: nodes.map((node) => ({
            id: node.id || createFinalDocumentId("flowNode"),
            title: String(node.title || "").trim(),
            detail: String(node.detail || "").trim()
          })).filter((node) => node.title || node.detail)
        };
      }
      if (type === "questionSlots") {
        const items = Array.isArray(block.items) ? block.items : [];
        return {
          ...base,
          items: items.map((item) => ({
            id: item.id || createFinalDocumentId("slot"),
            number: String(item.number || "").trim() || `${index + 1}번`,
            title: String(item.title || "").trim(),
            originalSlot: String(item.originalSlot || "원문항 삽입 영역").trim(),
            originalImage: item.originalImage && typeof item.originalImage === "object" && String(item.originalImage.sourceUrl || "").trim() && normalizeFinalDocumentCropBox(item.originalImage.cropBox)
              ? {
                  sourceUrl: String(item.originalImage.sourceUrl || "").trim(),
                  cropBox: normalizeFinalDocumentCropBox(item.originalImage.cropBox),
                  alt: String(item.originalImage.alt || "원문항 크롭").trim()
                }
              : null,
            similarSlot: String(item.similarSlot || "유사문항 삽입 영역").trim(),
            similarProblemNeeded: String(item.similarProblemNeeded || "확인 필요").trim(),
            similarProblemSource: String(item.similarProblemSource || "").trim(),
            similarProblemRelation: String(item.similarProblemRelation || "확인 필요").trim(),
            comment: String(item.comment || "").trim()
          }))
        };
      }
      return { ...base, value: String(block.value || "").trim() };
    });
  return {
    version: Number(document.version) || 1,
    generatedAt: document.generatedAt || "",
    updatedAt: document.updatedAt || "",
    outputLayoutChoices: normalizeExamOutputLayoutChoices(document.outputLayoutChoices),
    blocks
  };
}

export function compactFinalClassificationTableBlock(block = {}) {
  if (block?.title !== "문항별 분류표 원본" || !Array.isArray(block.columns) || block.columns.length <= 6) return block;
  const indexOfColumn = (label) => block.columns.findIndex((column) => String(column || "").trim() === label);
  const indexes = {
    number: indexOfColumn("문항"),
    page: indexOfColumn("페이지"),
    score: indexOfColumn("배점"),
    type: indexOfColumn("형식"),
    unit: indexOfColumn("단원"),
    primary: indexOfColumn("쎈 주유형"),
    secondary: indexOfColumn("쎈 보조유형"),
    difficulty: indexOfColumn("난이도"),
    role: indexOfColumn("역할"),
    note: indexOfColumn("검수 메모")
  };
  if (Object.values(indexes).every((index) => index < 0)) return block;
  const cell = (row, index) => index >= 0 ? row[index] : "";
  return {
    ...block,
    columns: ["문항", "배점/형식", "단원", "쎈 유형", "난이도/역할", "검수 메모"],
    rows: (block.rows || []).map((row) => [
      [cell(row, indexes.number), cell(row, indexes.page) ? `(${cell(row, indexes.page)})` : ""].filter(Boolean).join(" "),
      [cell(row, indexes.score), cell(row, indexes.type)].filter(Boolean).join(" · "),
      cell(row, indexes.unit),
      [cell(row, indexes.primary), cell(row, indexes.secondary) && cell(row, indexes.secondary) !== "-" ? `보조: ${cell(row, indexes.secondary)}` : ""].filter(Boolean).join("\n"),
      [cell(row, indexes.difficulty), cell(row, indexes.role)].filter(Boolean).join(" · "),
      cell(row, indexes.note)
    ])
  };
}

export function getClassificationInsightItemsForFinalDocument(analysis = {}) {
  const classificationRows = normalizeExamQuestionClassificationRows(analysis.questionClassifications || analysis.classificationRows);
  return classificationRowsToInsightItems(classificationRows);
}
