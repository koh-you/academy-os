export const examAnalysisPreviewPalette = {
  units: ["#2f7cff", "#00d9c0", "#ff9f1c", "#ff4fb3", "#9b5cff", "#28e070", "#ffe100", "#25c2ff"],
  difficulties: {
    하: "#25c2ff",
    중하: "#28e070",
    중: "#ffe100",
    중상: "#ff9f1c",
    상: "#ff4f4f",
    미정: "#a1a1aa"
  }
};

const difficultyOrder = ["하", "중하", "중", "중상", "상", "미정"];

function cleanText(value = "") {
  return String(value ?? "").trim();
}

function toArray(value) {
  if (Array.isArray(value)) return value.map(cleanText).filter(Boolean);
  return cleanText(value).split(/[,，]/).map(cleanText).filter(Boolean);
}

function countBy(items = [], selector) {
  const counts = new Map();
  items.forEach((item) => {
    const key = cleanText(selector(item)) || "미입력";
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  return [...counts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "ko"));
}

function withPercent(items = [], total = 0, colorFor = () => "#94a3b8") {
  return items.map((item, index) => ({
    ...item,
    percent: total ? Math.round((item.count / total) * 1000) / 10 : 0,
    color: colorFor(item, index)
  }));
}

function getFinalQuestionFields(question = {}) {
  const finalFields = question.finalFields && typeof question.finalFields === "object" ? question.finalFields : {};
  const teacherFields = question.teacherFields && typeof question.teacherFields === "object" ? question.teacherFields : {};
  const ssenMeta = finalFields.ssenMeta && typeof finalFields.ssenMeta === "object"
    ? finalFields.ssenMeta
    : teacherFields.ssenMeta && typeof teacherFields.ssenMeta === "object"
      ? teacherFields.ssenMeta
      : {};
  const mainTypeMeta = ssenMeta.mainType && typeof ssenMeta.mainType === "object" ? ssenMeta.mainType : {};
  const subTypes = toArray(finalFields.subTypes?.length ? finalFields.subTypes : teacherFields.subTypes?.length ? teacherFields.subTypes : question.subTypes);
  return {
    questionRowId: question.questionRowId,
    questionNumber: Number(question.questionNumber),
    partName: cleanText(finalFields.partName || teacherFields.partName || mainTypeMeta.partName),
    unitNo: cleanText(finalFields.unitNo || teacherFields.unitNo || mainTypeMeta.unitNo),
    unitName: cleanText(finalFields.unitName || teacherFields.unitName || mainTypeMeta.unitName || question.unitName),
    mainType: cleanText(finalFields.mainType || teacherFields.mainType || mainTypeMeta.typeName || question.mainType),
    mainTypeCode: cleanText(finalFields.mainTypeCode || teacherFields.mainTypeCode || mainTypeMeta.typeCode || question.aiFields?.mainTypeCode),
    subTypeCodes: toArray(finalFields.subTypeCodes?.length ? finalFields.subTypeCodes : teacherFields.subTypeCodes?.length ? teacherFields.subTypeCodes : question.aiFields?.subTypeCodes),
    ssenMeta,
    subTypes,
    difficulty: cleanText(finalFields.difficulty || teacherFields.difficulty || question.difficulty) || "미정",
    reviewNote: cleanText(finalFields.reviewNote || teacherFields.reviewNote || ""),
    isImportantQuestion: Boolean(finalFields.isImportantQuestion ?? teacherFields.isImportantQuestion ?? question.isImportantQuestion),
    rowStatus: question.rowStatus || "",
    confirmed: question.rowStatus === "confirmed" || Boolean(question.confirmedAt || finalFields.confirmedAt),
    pageStart: question.sourceEvidence?.boundary?.pageStart || question.sourcePage || null,
    pageEnd: question.sourceEvidence?.boundary?.pageEnd || question.sourceEvidence?.boundary?.pageStart || question.sourcePage || null,
    boundaryNeedsReview: Boolean(question.sourceEvidence?.boundary?.needsReview),
    aiNeedsReview: Boolean(question.aiFields?.needsReview || question.aiFields?.warnings?.length)
  };
}

function getQuestionPartLabel(question = {}) {
  return cleanText(question.partName || question.unitName) || "미입력";
}

function formatPageLabel(question = {}) {
  if (!question.pageStart) return "";
  if (question.pageEnd && question.pageEnd !== question.pageStart) return `${question.pageStart}~${question.pageEnd}p`;
  return `${question.pageStart}p`;
}

function buildImportantQuestions(questions = []) {
  return questions
    .filter((question) => question.isImportantQuestion)
    .map((question) => ({
      ...question,
      reasons: ["선생님 선택"]
    }))
    .sort((a, b) => a.questionNumber - b.questionNumber);
}

export function createExamAnalysisFinalPreviewModel({ analysisRun = {}, questions = [], sourceFiles = [] } = {}) {
  const finalQuestions = (Array.isArray(questions) ? questions : [])
    .map(getFinalQuestionFields)
    .filter((question) => Number.isInteger(question.questionNumber) && question.questionNumber > 0)
    .sort((a, b) => a.questionNumber - b.questionNumber);
  const totalQuestions = finalQuestions.length;
  const partDistribution = withPercent(
    countBy(finalQuestions, getQuestionPartLabel),
    totalQuestions,
    (_item, index) => examAnalysisPreviewPalette.units[index % examAnalysisPreviewPalette.units.length]
  );
  const unitDistribution = withPercent(
    countBy(finalQuestions, (question) => question.unitName),
    totalQuestions,
    (_item, index) => examAnalysisPreviewPalette.units[(index + 1) % examAnalysisPreviewPalette.units.length]
  );
  const unitBreakdown = partDistribution.map((part) => {
    const partQuestions = finalQuestions.filter((question) => getQuestionPartLabel(question) === part.label);
    return {
      ...part,
      units: withPercent(
        countBy(partQuestions, (question) => question.unitName),
        partQuestions.length,
        (_item, index) => examAnalysisPreviewPalette.units[(index + 2) % examAnalysisPreviewPalette.units.length]
      )
    };
  });
  const difficultyCounts = countBy(finalQuestions, (question) => difficultyOrder.includes(question.difficulty) ? question.difficulty : "미정");
  const difficultyDistribution = withPercent(
    difficultyOrder.map((label) => ({ label, count: difficultyCounts.find((item) => item.label === label)?.count || 0 })).filter((item) => item.count > 0),
    totalQuestions,
    (item) => examAnalysisPreviewPalette.difficulties[item.label] || examAnalysisPreviewPalette.difficulties["미정"]
  );
  const difficultyByPart = partDistribution.map((part) => {
    const partQuestions = finalQuestions.filter((question) => getQuestionPartLabel(question) === part.label);
    const partDifficultyCounts = countBy(partQuestions, (question) => difficultyOrder.includes(question.difficulty) ? question.difficulty : "미정");
    return {
      label: part.label,
      count: partQuestions.length,
      percent: part.percent,
      difficulties: withPercent(
        difficultyOrder.map((label) => ({ label, count: partDifficultyCounts.find((item) => item.label === label)?.count || 0 })).filter((item) => item.count > 0),
        partQuestions.length,
        (item) => examAnalysisPreviewPalette.difficulties[item.label] || examAnalysisPreviewPalette.difficulties["미정"]
      )
    };
  });
  const majorTypes = withPercent(
    countBy(finalQuestions, (question) => question.mainType).filter((item) => item.label !== "미입력").slice(0, 10),
    totalQuestions,
    (_item, index) => examAnalysisPreviewPalette.units[(index + 2) % examAnalysisPreviewPalette.units.length]
  );
  const importantQuestions = buildImportantQuestions(finalQuestions);
  const confirmedCount = finalQuestions.filter((question) => question.confirmed).length;
  const reviewedAt = analysisRun?.auditSummary?.teacherReview?.reviewedAt || "";
  const sourceFileName = sourceFiles[0]?.originalFileName || "";

  return {
    meta: {
      title: analysisRun?.title || "시험분석 최종 미리보기",
      schoolName: analysisRun?.schoolName || "",
      grade: analysisRun?.grade || "",
      examCycle: analysisRun?.examCycle || analysisRun?.examTerm || "",
      subject: analysisRun?.subject || "",
      sourceFileName,
      reviewedAt,
      confirmedCount,
      totalQuestions
    },
    questions: finalQuestions.map((question) => ({ ...question, pageLabel: formatPageLabel(question) })),
    partDistribution,
    unitDistribution,
    unitBreakdown,
    difficultyDistribution,
    difficultyByPart,
    majorTypes,
    importantQuestions,
    notes: {
      sourceOfTruth: "선생님 검수 저장본 기준",
      formulaPolicy: "1차 앱 미리보기는 시험지 원문 수식/그래프를 재렌더링하지 않고 분석 데이터만 시각화합니다.",
      publicOutputPolicy: "블로그/인스타 산출물은 선별한 원문 이미지 슬롯과 분석 문장을 함께 쓰는 이미지 중심 구조로 확장합니다."
    }
  };
}
