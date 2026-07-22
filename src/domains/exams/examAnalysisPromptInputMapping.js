export const EXAM_ANALYSIS_INPUT_MAPPING_VERSION = 1;

export const EXAM_ANALYSIS_VALUE_STATUS = Object.freeze({
  CONFIRMED: "confirmed",
  TEACHER_SAVED: "teacher_saved",
  DERIVED_CONFIRMED: "derived_confirmed",
  AI_CANDIDATE: "ai_candidate",
  SOURCE_REFERENCE: "source_reference",
  MISSING: "missing",
});

export const EXAM_ANALYSIS_PROMPT_ROLE_FIELDS = Object.freeze({
  common: Object.freeze(["schoolName", "grade", "examName", "subject", "schoolStyle"]),
  examAnalysis: Object.freeze([
    "questionCount",
    "scoreStructure",
    "scope",
    "unitDistribution",
    "difficultyDistribution",
    "overallReview",
  ]),
  keyQuestion: Object.freeze([
    "questionNumber",
    "selectionReason",
    "concepts",
    "strategy",
    "errorPoint",
    "sourceAsset",
    "solutionAsset",
  ]),
  nextPreparation: Object.freeze(["actionItems"]),
  cta: Object.freeze(["valueStatement", "contactOrNextAction"]),
});

const cleanText = (value) => String(value ?? "").trim();
const hasOwn = (value, key) => Boolean(value && typeof value === "object" && Object.prototype.hasOwnProperty.call(value, key));
const hasValue = (value) => Array.isArray(value) ? value.length > 0 : Boolean(cleanText(value));

function valueState(value, status, sourcePath, extra = {}) {
  const { present: explicitPresent, ...rest } = extra;
  const present = explicitPresent ?? hasValue(value);
  return {
    value: present ? value : Array.isArray(value) ? [] : "",
    status: present ? status : EXAM_ANALYSIS_VALUE_STATUS.MISSING,
    sourcePath: present ? sourcePath : "",
    promptEligible: present && [
      EXAM_ANALYSIS_VALUE_STATUS.CONFIRMED,
      EXAM_ANALYSIS_VALUE_STATUS.TEACHER_SAVED,
      EXAM_ANALYSIS_VALUE_STATUS.DERIVED_CONFIRMED,
    ].includes(status),
    ...rest,
  };
}

function missingState(reason, extra = {}) {
  return {
    value: "",
    status: EXAM_ANALYSIS_VALUE_STATUS.MISSING,
    sourcePath: "",
    promptEligible: false,
    reason,
    ...extra,
  };
}

function savedRunValue(value, sourcePath) {
  return valueState(value, EXAM_ANALYSIS_VALUE_STATUS.TEACHER_SAVED, sourcePath);
}

function getQuestionFieldState(question = {}, field, structuralField = field) {
  const finalFields = question.finalFields && typeof question.finalFields === "object" ? question.finalFields : {};
  const teacherFields = question.teacherFields && typeof question.teacherFields === "object" ? question.teacherFields : {};
  const aiFields = question.aiFields && typeof question.aiFields === "object" ? question.aiFields : {};

  if (hasOwn(finalFields, field) && hasValue(finalFields[field])) {
    return valueState(finalFields[field], EXAM_ANALYSIS_VALUE_STATUS.CONFIRMED, `questions[].finalFields.${field}`);
  }
  if (hasOwn(teacherFields, field) && hasValue(teacherFields[field])) {
    return valueState(teacherFields[field], EXAM_ANALYSIS_VALUE_STATUS.TEACHER_SAVED, `questions[].teacherFields.${field}`);
  }
  if (hasOwn(aiFields, field) && hasValue(aiFields[field])) {
    return valueState(aiFields[field], EXAM_ANALYSIS_VALUE_STATUS.AI_CANDIDATE, `questions[].aiFields.${field}`);
  }
  if (hasValue(question[structuralField])) {
    return valueState(
      question[structuralField],
      question.rowStatus === "confirmed" ? EXAM_ANALYSIS_VALUE_STATUS.CONFIRMED : EXAM_ANALYSIS_VALUE_STATUS.AI_CANDIDATE,
      `questions[].${structuralField}`,
    );
  }
  return missingState(`${field} 저장값 없음`);
}

function getOutputInputs(analysisRun = {}) {
  const inputs = analysisRun?.auditSummary?.outputDrafts?.inputs;
  return inputs && typeof inputs === "object" ? inputs : {};
}

function savedOutputValue(inputs, keys, label) {
  for (const key of keys) {
    if (hasValue(inputs[key])) {
      return valueState(inputs[key], EXAM_ANALYSIS_VALUE_STATUS.TEACHER_SAVED, `analysisRun.auditSummary.outputDrafts.inputs.${key}`);
    }
  }
  return missingState(`${label} 선생님 저장값 없음`);
}

function countDistribution(questions, fieldStateKey) {
  const counts = new Map();
  questions.forEach((question) => {
    const state = question.fields[fieldStateKey];
    if (!state?.promptEligible) return;
    const values = Array.isArray(state.value) ? state.value : [state.value];
    values.map(cleanText).filter(Boolean).forEach((label) => counts.set(label, (counts.get(label) || 0) + 1));
  });
  const total = [...counts.values()].reduce((sum, count) => sum + count, 0);
  return [...counts.entries()]
    .map(([label, count]) => ({ label, count, percent: total ? Math.round((count / total) * 1000) / 10 : 0 }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "ko"));
}

function normalizeQuestionNumber(value) {
  const match = cleanText(value).match(/\d+/);
  return match ? Number(match[0]) : null;
}

function createQuestionSnapshot(question = {}, questionCountConfirmed = false) {
  const questionNumber = Number(question.questionNumber);
  const confirmed = question.rowStatus === "confirmed" && Boolean(
    question.confirmedAt || question.finalFields?.confirmedAt || Object.keys(question.finalFields ?? {}).length,
  );
  const boundary = question.sourceEvidence?.boundary ?? {};
  return {
    questionRowId: cleanText(question.questionRowId),
    questionNumber,
    confirmed,
    rowStatus: cleanText(question.rowStatus) || "empty",
    fields: {
      questionNumber: valueState(
        Number.isInteger(questionNumber) && questionNumber > 0 ? questionNumber : "",
        questionCountConfirmed ? EXAM_ANALYSIS_VALUE_STATUS.CONFIRMED : EXAM_ANALYSIS_VALUE_STATUS.AI_CANDIDATE,
        "questions[].questionNumber",
      ),
      unitName: getQuestionFieldState(question, "unitName"),
      mainType: getQuestionFieldState(question, "mainType"),
      subTypes: getQuestionFieldState(question, "subTypes"),
      difficulty: getQuestionFieldState(question, "difficulty"),
      reviewNote: getQuestionFieldState(question, "reviewNote"),
      isImportantQuestion: hasOwn(question.finalFields, "isImportantQuestion")
        ? valueState(Boolean(question.finalFields.isImportantQuestion), EXAM_ANALYSIS_VALUE_STATUS.CONFIRMED, "questions[].finalFields.isImportantQuestion", { present: true })
        : hasOwn(question.teacherFields, "isImportantQuestion")
          ? valueState(Boolean(question.teacherFields.isImportantQuestion), EXAM_ANALYSIS_VALUE_STATUS.TEACHER_SAVED, "questions[].teacherFields.isImportantQuestion", { present: true })
          : missingState("주요문항 선택값 없음"),
      sourcePage: valueState(
        boundary.pageStart || question.sourcePage || "",
        EXAM_ANALYSIS_VALUE_STATUS.SOURCE_REFERENCE,
        boundary.pageStart ? "questions[].sourceEvidence.boundary.pageStart" : "questions[].sourcePage",
        { promptEligible: false, reason: "PDF 페이지 참조이며 검수된 문제 crop이 아님" },
      ),
    },
  };
}

function createSourceSnapshot(source = {}) {
  const pageManifest = Array.isArray(source.pageImageManifest) ? source.pageImageManifest : [];
  return {
    sourceId: cleanText(source.sourceId),
    sourceType: cleanText(source.sourceType) || "pdf",
    bucketId: cleanText(source.bucketId),
    storagePath: cleanText(source.storagePath),
    originalFileName: cleanText(source.originalFileName),
    extractionStatus: cleanText(source.extractionStatus),
    pageCount: Number(source.pageCount) || pageManifest.length || null,
    pageReferences: pageManifest.map((page) => ({
      pageNumber: Number(page.pageNumber) || null,
      width: Number(page.width) || null,
      height: Number(page.height) || null,
      rotation: Number(page.rotation) || 0,
    })),
    assetKind: "source_pdf",
    isQuestionCrop: false,
    isVerifiedSolution: false,
    promptEligibleAsImage: false,
    reason: "pageImageManifest는 페이지 치수 목록이며 실제 crop 또는 검증된 손풀이 파일이 아님",
  };
}

function createKeyQuestionSnapshot(block, questions) {
  const questionNumber = normalizeQuestionNumber(block.questionNumber);
  const matchedQuestion = questions.find((question) => question.questionNumber === questionNumber);
  const concepts = matchedQuestion?.fields.mainType.promptEligible
    ? [
      matchedQuestion.fields.mainType.value,
      ...(matchedQuestion.fields.subTypes.promptEligible
        ? Array.isArray(matchedQuestion.fields.subTypes.value)
          ? matchedQuestion.fields.subTypes.value
          : [matchedQuestion.fields.subTypes.value]
        : []),
    ]
      .map(cleanText).filter(Boolean)
    : [];
  return {
    blockId: cleanText(block.blockId),
    matchedQuestionRowId: matchedQuestion?.questionRowId || "",
    fields: {
      questionNumber: questionNumber
        ? valueState(questionNumber, EXAM_ANALYSIS_VALUE_STATUS.TEACHER_SAVED, "analysisRun.auditSummary.outputDrafts.inputs.keyQuestionBlocks[].questionNumber")
        : missingState("주요문항 번호 없음"),
      title: valueState(block.title, EXAM_ANALYSIS_VALUE_STATUS.TEACHER_SAVED, "analysisRun.auditSummary.outputDrafts.inputs.keyQuestionBlocks[].title"),
      selectionReason: valueState(block.selectionReason, EXAM_ANALYSIS_VALUE_STATUS.TEACHER_SAVED, "analysisRun.auditSummary.outputDrafts.inputs.keyQuestionBlocks[].selectionReason"),
      concepts: concepts.length
        ? valueState(concepts, EXAM_ANALYSIS_VALUE_STATUS.DERIVED_CONFIRMED, "questions[].finalFields.mainType/subTypes")
        : missingState("확정 문항의 핵심 개념 없음"),
      strategy: valueState(block.solutionMemo, EXAM_ANALYSIS_VALUE_STATUS.TEACHER_SAVED, "analysisRun.auditSummary.outputDrafts.inputs.keyQuestionBlocks[].solutionMemo"),
      errorPoint: valueState(block.mistakePoint, EXAM_ANALYSIS_VALUE_STATUS.TEACHER_SAVED, "analysisRun.auditSummary.outputDrafts.inputs.keyQuestionBlocks[].mistakePoint"),
      similarTypeEvidence: valueState(block.similarTypeEvidence, EXAM_ANALYSIS_VALUE_STATUS.TEACHER_SAVED, "analysisRun.auditSummary.outputDrafts.inputs.keyQuestionBlocks[].similarTypeEvidence"),
      sourceAsset: missingState("실제 문제 crop 저장 필드가 현재 스키마에 없음", { requiredAssetKind: "question_crop" }),
      solutionAsset: missingState("검증된 손풀이 파일 저장 필드가 현재 스키마에 없음", { requiredAssetKind: "verified_solution" }),
      imageSlotMemo: valueState(block.imageSlotMemo, EXAM_ANALYSIS_VALUE_STATUS.TEACHER_SAVED, "analysisRun.auditSummary.outputDrafts.inputs.keyQuestionBlocks[].imageSlotMemo"),
    },
  };
}

function summarizeReadiness(snapshot) {
  const entries = [];
  Object.entries(snapshot.roles.common).forEach(([field, state]) => entries.push({ role: "common", field, state }));
  Object.entries(snapshot.roles.examAnalysis).forEach(([field, state]) => entries.push({ role: "examAnalysis", field, state }));
  snapshot.roles.keyQuestions.forEach((question, index) => {
    Object.entries(question.fields).forEach(([field, state]) => entries.push({ role: `keyQuestions[${index}]`, field, state }));
  });
  Object.entries(snapshot.roles.nextPreparation).forEach(([field, state]) => entries.push({ role: "nextPreparation", field, state }));
  Object.entries(snapshot.roles.cta).forEach(([field, state]) => entries.push({ role: "cta", field, state }));
  const missing = entries.filter(({ state }) => state.status === EXAM_ANALYSIS_VALUE_STATUS.MISSING);
  const candidates = entries.filter(({ state }) => state.status === EXAM_ANALYSIS_VALUE_STATUS.AI_CANDIDATE);
  return {
    promptEligibleCount: entries.filter(({ state }) => state.promptEligible).length,
    missing: missing.map(({ role, field, state }) => ({ role, field, reason: state.reason || "값 없음" })),
    aiCandidates: candidates.map(({ role, field }) => ({ role, field })),
    readyForPromptComposition: missing.length === 0 && candidates.length === 0,
  };
}

export function createExamAnalysisPromptInputSnapshot({ analysisRun = {}, questions = [], sourceFiles = [] } = {}) {
  const outputInputs = getOutputInputs(analysisRun);
  const questionCountConfirmed = analysisRun.questionCountStatus === "teacher_confirmed" && Boolean(analysisRun.rowsLocked);
  const questionSnapshots = (Array.isArray(questions) ? questions : [])
    .map((question) => createQuestionSnapshot(question, questionCountConfirmed))
    .filter((question) => Number.isInteger(question.questionNumber) && question.questionNumber > 0)
    .sort((a, b) => a.questionNumber - b.questionNumber);
  const confirmedQuestions = questionSnapshots.filter((question) => question.confirmed);
  const unitDistribution = countDistribution(confirmedQuestions, "unitName");
  const difficultyDistribution = countDistribution(confirmedQuestions, "difficulty");
  const keyQuestionBlocks = Array.isArray(outputInputs.keyQuestionBlocks) ? outputInputs.keyQuestionBlocks : [];

  const snapshot = {
    schemaVersion: EXAM_ANALYSIS_INPUT_MAPPING_VERSION,
    analysisRunId: cleanText(analysisRun.analysisRunId),
    sourceOfTruth: "final_fields > teacher_fields/outputDrafts.inputs > ai_fields; prompt에는 확정/선생님 저장값만 자동 사용",
    roles: {
      common: {
        schoolName: savedRunValue(analysisRun.schoolName, "analysisRun.schoolName"),
        grade: savedRunValue(analysisRun.grade, "analysisRun.grade"),
        examName: savedRunValue(analysisRun.examCycle || analysisRun.examTerm || analysisRun.title, analysisRun.examCycle ? "analysisRun.examCycle" : analysisRun.examTerm ? "analysisRun.examTerm" : "analysisRun.title"),
        subject: savedRunValue(analysisRun.subject, "analysisRun.subject"),
        schoolStyle: missingState("학교 스타일 저장 필드가 현재 스키마에 없음"),
      },
      examAnalysis: {
        questionCount: questionCountConfirmed
          ? valueState(Number(analysisRun.confirmedQuestionCount), EXAM_ANALYSIS_VALUE_STATUS.CONFIRMED, "analysisRun.confirmedQuestionCount")
          : missingState("문항 수가 교사 확정 및 행 잠금 상태가 아님"),
        scoreStructure: missingState("문항별 배점/객관식·서술형 구조의 정규화 저장 필드가 현재 스키마에 없음"),
        scope: savedOutputValue(outputInputs, ["checklistExamRange"], "시험 범위"),
        unitDistribution: unitDistribution.length
          ? valueState(unitDistribution, EXAM_ANALYSIS_VALUE_STATUS.DERIVED_CONFIRMED, "confirmed questions finalFields.unitName")
          : missingState("확정 문항의 단원 데이터 없음"),
        difficultyDistribution: difficultyDistribution.length
          ? valueState(difficultyDistribution, EXAM_ANALYSIS_VALUE_STATUS.DERIVED_CONFIRMED, "confirmed questions finalFields.difficulty")
          : missingState("확정 문항의 난이도 데이터 없음"),
        overallReview: savedOutputValue(outputInputs, ["blogBlockOverallReview", "flowReview", "oneLineReview"], "총평"),
      },
      keyQuestions: keyQuestionBlocks
        .filter((block) => [
          "questionNumber",
          "title",
          "selectionReason",
          "similarTypeEvidence",
          "questionMemo",
          "mistakePoint",
          "solutionMemo",
          "imageSlotMemo",
        ].some((field) => hasValue(block?.[field])))
        .map((block) => createKeyQuestionSnapshot(block, questionSnapshots)),
      nextPreparation: {
        actionItems: savedOutputValue(outputInputs, ["blogBlockNextStudy", "nextStudyPlan"], "다음 대비 행동"),
      },
      cta: {
        valueStatement: savedOutputValue(outputInputs, ["blogBlockAcademyTrust", "schoolVariationNotes"], "학원 가치 문장"),
        contactOrNextAction: savedOutputValue(outputInputs, ["blogBlockCta"], "연락 및 다음 행동"),
      },
    },
    questions: questionSnapshots,
    sources: (Array.isArray(sourceFiles) ? sourceFiles : []).map(createSourceSnapshot),
  };
  snapshot.readiness = summarizeReadiness(snapshot);
  return snapshot;
}
