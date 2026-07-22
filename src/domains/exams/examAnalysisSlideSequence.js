export const EXAM_ANALYSIS_SLIDE_SEQUENCE_VERSION = 1;

const clean = (value) => String(value ?? "").trim();
const has = (value) => Array.isArray(value) ? value.length > 0 : Boolean(clean(value));

export const EXAM_ANALYSIS_SLIDE_ROLE_CATALOG = Object.freeze({
  cover: Object.freeze({ label: "표지", fixed: true }),
  exam_structure: Object.freeze({ label: "시험 구조", fixed: true }),
  unit_distribution: Object.freeze({ label: "단원 비중", fixed: false }),
  difficulty_flow: Object.freeze({ label: "난이도 흐름", fixed: false }),
  overall_review: Object.freeze({ label: "총평", fixed: false }),
  score_gap: Object.freeze({ label: "점수 갈림 포인트", fixed: false, schoolLevels: Object.freeze(["high"]) }),
  key_questions: Object.freeze({ label: "주요문항+손풀이 반복", fixed: false }),
  next_preparation: Object.freeze({ label: "다음 대비", fixed: false }),
  closing: Object.freeze({ label: "마무리 CTA", fixed: true }),
});

export const EXAM_ANALYSIS_SEQUENCE_PRESETS = Object.freeze({
  middle: Object.freeze({
    id: "middle_core",
    label: "중학교 기본 분석",
    roleIds: Object.freeze(["cover", "exam_structure", "unit_distribution", "difficulty_flow", "overall_review", "key_questions", "next_preparation", "closing"]),
  }),
  high: Object.freeze({
    id: "high_core",
    label: "고등학교 심화 분석",
    roleIds: Object.freeze(["cover", "exam_structure", "unit_distribution", "difficulty_flow", "overall_review", "score_gap", "key_questions", "next_preparation", "closing"]),
  }),
});

export function getExamAnalysisSequenceRoleOptions(schoolLevel = "high") {
  const normalizedLevel = schoolLevel === "middle" ? "middle" : "high";
  return EXAM_ANALYSIS_SEQUENCE_PRESETS[normalizedLevel].roleIds.map((roleId) => ({
    roleId,
    ...EXAM_ANALYSIS_SLIDE_ROLE_CATALOG[roleId],
  }));
}

export function getExamAnalysisEffectiveRoleIds(sequence = {}) {
  const schoolLevel = sequence.schoolLevel === "middle" ? "middle" : "high";
  const available = EXAM_ANALYSIS_SEQUENCE_PRESETS[schoolLevel].roleIds;
  const selected = Array.isArray(sequence.enabledRoleIds) && sequence.enabledRoleIds.length
    ? sequence.enabledRoleIds.filter((roleId) => available.includes(roleId))
    : [...available];
  const fixed = available.filter((roleId) => EXAM_ANALYSIS_SLIDE_ROLE_CATALOG[roleId].fixed);
  return available.filter((roleId) => selected.includes(roleId) || fixed.includes(roleId));
}

function missingFields(entries) {
  return entries.filter(([, value]) => !has(value)).map(([field]) => field);
}

function slide(roleId, title, source, requiredEntries = [], extra = {}) {
  const missing = missingFields(requiredEntries);
  return {
    roleId,
    roleGroup: roleId.replace(/-\d+$/, ""),
    title,
    source,
    status: missing.length ? "needs_input" : "ready",
    missingFields: missing,
    ...extra,
  };
}

export function buildExamAnalysisSlideSequence(promptStudioDraft = {}) {
  const schoolLevel = promptStudioDraft.sequence?.schoolLevel === "middle" ? "middle" : "high";
  const preset = EXAM_ANALYSIS_SEQUENCE_PRESETS[schoolLevel];
  const enabledRoleIds = getExamAnalysisEffectiveRoleIds(promptStudioDraft.sequence);
  const inputs = promptStudioDraft.roleInputs ?? {};
  const common = inputs.common ?? {};
  const exam = inputs.examAnalysis ?? {};
  const keyQuestions = Array.isArray(inputs.keyQuestions) ? inputs.keyQuestions : [];
  const next = inputs.nextPreparation ?? {};
  const cta = inputs.cta ?? {};
  const slides = [];
  const skipped = [];
  const enabled = (roleId) => enabledRoleIds.includes(roleId);

  if (enabled("cover")) slides.push(slide("cover", `${clean(common.schoolName) || "학교"} ${clean(common.examName) || "시험"} 분석`, "common", [
    ["schoolName", common.schoolName], ["grade", common.grade], ["examName", common.examName], ["subject", common.subject], ["schoolStyle", common.schoolStyle],
  ]));

  if (enabled("exam_structure")) slides.push(slide("exam_structure", "시험 구조", "examAnalysis", [
    ["questionCount", exam.questionCount], ["scoreStructure", exam.scoreStructure], ["scope", exam.scope],
  ]));

  const conditional = (roleId, include, create, reason) => {
    if (!enabled(roleId)) return skipped.push({ roleId, reason: "교사가 역할을 제외함" });
    if (!include) return skipped.push({ roleId, reason });
    slides.push(create());
    return null;
  };

  conditional("unit_distribution", has(exam.unitDistributionNote), () => slide("unit_distribution", "단원별 출제 비중", "examAnalysis", [["unitDistributionNote", exam.unitDistributionNote]]), "단원 비중 입력 없음");
  conditional("difficulty_flow", has(exam.difficultyNote), () => slide("difficulty_flow", "난이도와 시험 흐름", "examAnalysis", [["difficultyNote", exam.difficultyNote]]), "난이도 근거 입력 없음");
  conditional("overall_review", has(exam.overallReview), () => slide("overall_review", "이번 시험 총평", "examAnalysis", [["overallReview", exam.overallReview]]), "총평 입력 없음");
  conditional("score_gap", schoolLevel === "high" && keyQuestions.length > 0, () => slide("score_gap", "점수 갈림 포인트", "keyQuestions", [["keyQuestions", keyQuestions]]), schoolLevel === "middle" ? "중학교 기본 시퀀스에서 제외" : "주요문항 입력 없음");

  if (enabled("key_questions")) {
    const usableQuestions = keyQuestions.filter((question) => [question.questionNumber, question.title, question.selectionReason, question.strategy, question.errorPoint].some(has));
    if (!usableQuestions.length) skipped.push({ roleId: "key_questions", reason: "주요문항 입력 없음" });
    usableQuestions.forEach((question, index) => {
      const questionLabel = clean(question.questionNumber) || `${index + 1}`;
      slides.push(slide(`key_question-${index + 1}`, `주요문항 ${questionLabel}`, `keyQuestions[${index}]`, [
        ["questionNumber", question.questionNumber], ["selectionReason", question.selectionReason], ["concepts", question.concepts], ["sourceAssetId", question.sourceAssetId],
      ], { questionIndex: index, assetMode: "question_crop" }));
      if (has(question.strategy) || has(question.solutionAssetId)) {
        slides.push(slide(`solution-${index + 1}`, `풀이 전략 ${questionLabel}`, `keyQuestions[${index}]`, [
          ["strategy", question.strategy], ["errorPoint", question.errorPoint], ["solutionAssetId", question.solutionAssetId],
        ], { questionIndex: index, assetMode: "verified_solution" }));
      } else {
        skipped.push({ roleId: `solution-${index + 1}`, reason: "풀이 전략과 검증 손풀이 자산이 모두 없음" });
      }
    });
  } else skipped.push({ roleId: "key_questions", reason: "교사가 역할을 제외함" });

  conditional("next_preparation", has(next.actionItems), () => slide("next_preparation", "다음 시험 대비", "nextPreparation", [["actionItems", next.actionItems]], { itemCount: next.actionItems.length }), "학습 행동 입력 없음");

  if (enabled("closing")) slides.push(slide("closing", "학원 관리와 다음 행동", "cta", [
    ["valueStatement", cta.valueStatement], ["contactOrNextAction", cta.contactOrNextAction],
  ]));

  return {
    version: EXAM_ANALYSIS_SLIDE_SEQUENCE_VERSION,
    schoolLevel,
    presetId: preset.id,
    presetLabel: preset.label,
    enabledRoleIds,
    slides: slides.map((item, index) => ({ ...item, slideNumber: index + 1 })),
    skipped,
    readyCount: slides.filter((item) => item.status === "ready").length,
    needsInputCount: slides.filter((item) => item.status === "needs_input").length,
  };
}

