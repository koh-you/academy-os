export const EXAM_ANALYSIS_PROMPT_STUDIO_SCHEMA_VERSION = 1;

export const EXAM_ANALYSIS_PROMPT_SAVE_STATUS = Object.freeze({
  SAVED: "saved",
  DIRTY: "dirty",
  SAVING: "saving",
  VERIFYING: "verifying",
  VERIFIED: "verified",
  FAILED: "failed",
});

const cleanText = (value, maxLength = 4000) => String(value ?? "").trim().slice(0, maxLength);
const cleanStringArray = (value, maxItems = 20, maxLength = 500) => (Array.isArray(value) ? value : [])
  .map((item) => cleanText(item, maxLength))
  .filter(Boolean)
  .slice(0, maxItems);

function createEmptyRoleInputs() {
  return {
    common: {
      schoolName: "",
      grade: "",
      examName: "",
      subject: "",
      schoolStyle: "",
    },
    examAnalysis: {
      questionCount: "",
      scoreStructure: "",
      scope: "",
      unitDistributionNote: "",
      difficultyNote: "",
      overallReview: "",
    },
    keyQuestions: [],
    nextPreparation: { actionItems: [] },
    cta: { valueStatement: "", contactOrNextAction: "" },
  };
}

function normalizeKeyQuestion(block = {}, index = 0) {
  return {
    blockId: cleanText(block.blockId || `key-question-${index + 1}`, 120),
    questionNumber: cleanText(block.questionNumber, 40),
    title: cleanText(block.title, 240),
    selectionReason: cleanText(block.selectionReason, 1600),
    concepts: cleanStringArray(block.concepts, 12, 240),
    strategy: cleanText(block.strategy, 2000),
    errorPoint: cleanText(block.errorPoint, 1600),
    similarTypeEvidence: cleanText(block.similarTypeEvidence, 1600),
    sourceAssetId: cleanText(block.sourceAssetId, 200),
    solutionAssetId: cleanText(block.solutionAssetId, 200),
    sourceCaption: cleanText(block.sourceCaption, 500),
  };
}

function normalizeAssetReference(asset = {}, index = 0) {
  return {
    assetId: cleanText(asset.assetId || `prompt-asset-${index + 1}`, 200),
    kind: ["question_crop", "verified_solution", "data_table", "source_reference"].includes(asset.kind)
      ? asset.kind
      : "source_reference",
    sourceId: cleanText(asset.sourceId, 200),
    bucketId: cleanText(asset.bucketId, 200),
    storagePath: cleanText(asset.storagePath, 1200),
    originalFileName: cleanText(asset.originalFileName, 500),
    pageNumber: Number.isInteger(Number(asset.pageNumber)) && Number(asset.pageNumber) > 0 ? Number(asset.pageNumber) : null,
    cropLabel: cleanText(asset.cropLabel, 300),
    verifiedByTeacher: Boolean(asset.verifiedByTeacher),
  };
}

export function normalizeExamAnalysisPromptStudioDraft(draft = {}) {
  const roleInputs = draft.roleInputs && typeof draft.roleInputs === "object" ? draft.roleInputs : {};
  const empty = createEmptyRoleInputs();
  const common = roleInputs.common ?? {};
  const examAnalysis = roleInputs.examAnalysis ?? {};
  const nextPreparation = roleInputs.nextPreparation ?? {};
  const cta = roleInputs.cta ?? {};
  const phraseSelections = draft.phraseSelections && typeof draft.phraseSelections === "object" && !Array.isArray(draft.phraseSelections)
    ? Object.fromEntries(Object.entries(draft.phraseSelections)
      .map(([path, phraseId]) => [cleanText(path, 300), cleanText(phraseId, 200)])
      .filter(([path, phraseId]) => path && phraseId)
      .slice(0, 100))
    : {};

  return {
    schemaVersion: EXAM_ANALYSIS_PROMPT_STUDIO_SCHEMA_VERSION,
    revision: Math.max(0, Number.parseInt(draft.revision, 10) || 0),
    sequence: {
      schoolLevel: ["middle", "high"].includes(draft.sequence?.schoolLevel) ? draft.sequence.schoolLevel : "high",
      presetId: cleanText(draft.sequence?.presetId || "default", 120),
      enabledRoleIds: cleanStringArray(draft.sequence?.enabledRoleIds, 30, 120),
    },
    roleInputs: {
      common: Object.fromEntries(Object.keys(empty.common).map((key) => [key, cleanText(common[key], 800)])),
      examAnalysis: Object.fromEntries(Object.keys(empty.examAnalysis).map((key) => [key, cleanText(examAnalysis[key], 2400)])),
      keyQuestions: (Array.isArray(roleInputs.keyQuestions) ? roleInputs.keyQuestions : []).slice(0, 12).map(normalizeKeyQuestion),
      nextPreparation: { actionItems: cleanStringArray(nextPreparation.actionItems, 5, 800) },
      cta: {
        valueStatement: cleanText(cta.valueStatement, 1600),
        contactOrNextAction: cleanText(cta.contactOrNextAction, 1600),
      },
    },
    phraseSelections,
    assets: (Array.isArray(draft.assets) ? draft.assets : []).slice(0, 40).map(normalizeAssetReference),
    sourceSnapshotUpdatedAt: cleanText(draft.sourceSnapshotUpdatedAt, 80),
    savedAt: cleanText(draft.savedAt, 80),
    savedBy: cleanText(draft.savedBy, 160),
  };
}

export function getExamAnalysisPromptStudioDraftFromRun(analysisRun = {}) {
  return normalizeExamAnalysisPromptStudioDraft(analysisRun?.auditSummary?.promptStudio ?? {});
}

function comparableDraft(draft = {}) {
  const normalized = normalizeExamAnalysisPromptStudioDraft(draft);
  return { ...normalized, savedAt: "", savedBy: "" };
}

export function areExamAnalysisPromptStudioDraftsEqual(left, right) {
  return JSON.stringify(comparableDraft(left)) === JSON.stringify(comparableDraft(right));
}

export function createExamAnalysisPromptStudioLocalState(analysisRun = {}) {
  const savedDraft = getExamAnalysisPromptStudioDraftFromRun(analysisRun);
  return {
    draft: savedDraft,
    savedDraft,
    status: EXAM_ANALYSIS_PROMPT_SAVE_STATUS.SAVED,
    error: "",
    verifiedAt: "",
  };
}

function snapshotValue(state, fallback = "") {
  return state?.promptEligible ? state.value : fallback;
}

export function seedExamAnalysisPromptStudioDraftFromSnapshot(snapshot = {}, savedDraft = {}) {
  const saved = normalizeExamAnalysisPromptStudioDraft(savedDraft);
  if (saved.revision > 0) return saved;
  const common = snapshot.roles?.common ?? {};
  const examAnalysis = snapshot.roles?.examAnalysis ?? {};
  const keyQuestions = Array.isArray(snapshot.roles?.keyQuestions) ? snapshot.roles.keyQuestions : [];
  const nextPreparation = snapshot.roles?.nextPreparation ?? {};
  const cta = snapshot.roles?.cta ?? {};
  const schoolText = `${snapshotValue(common.schoolName)} ${snapshotValue(common.grade)}`;
  const inferredSchoolLevel = /중학교|중\d|중등/.test(schoolText) ? "middle" : "high";
  const actionValue = snapshotValue(nextPreparation.actionItems, "");
  const actions = Array.isArray(actionValue)
    ? actionValue
    : cleanText(actionValue, 4000).split(/\r?\n|[•·]\s*/).map((item) => item.trim()).filter(Boolean);
  return normalizeExamAnalysisPromptStudioDraft({
    ...saved,
    sequence: { ...saved.sequence, schoolLevel: inferredSchoolLevel },
    sourceSnapshotUpdatedAt: cleanText(snapshot.sourceUpdatedAt, 80),
    roleInputs: {
      common: {
        schoolName: snapshotValue(common.schoolName),
        grade: snapshotValue(common.grade),
        examName: snapshotValue(common.examName),
        subject: snapshotValue(common.subject),
        schoolStyle: snapshotValue(common.schoolStyle),
      },
      examAnalysis: {
        questionCount: snapshotValue(examAnalysis.questionCount),
        scoreStructure: snapshotValue(examAnalysis.scoreStructure),
        scope: snapshotValue(examAnalysis.scope),
        unitDistributionNote: Array.isArray(snapshotValue(examAnalysis.unitDistribution, []))
          ? snapshotValue(examAnalysis.unitDistribution, []).map((item) => `${item.label} ${item.count}문항(${item.percent}%)`).join(", ")
          : "",
        difficultyNote: Array.isArray(snapshotValue(examAnalysis.difficultyDistribution, []))
          ? snapshotValue(examAnalysis.difficultyDistribution, []).map((item) => `${item.label} ${item.count}문항(${item.percent}%)`).join(", ")
          : "",
        overallReview: snapshotValue(examAnalysis.overallReview),
      },
      keyQuestions: keyQuestions.map((question, index) => ({
        blockId: question.blockId || `key-question-${index + 1}`,
        questionNumber: snapshotValue(question.fields?.questionNumber),
        title: snapshotValue(question.fields?.title),
        selectionReason: snapshotValue(question.fields?.selectionReason),
        concepts: snapshotValue(question.fields?.concepts, []),
        strategy: snapshotValue(question.fields?.strategy),
        errorPoint: snapshotValue(question.fields?.errorPoint),
        similarTypeEvidence: snapshotValue(question.fields?.similarTypeEvidence),
        sourceAssetId: snapshotValue(question.fields?.sourceAsset),
        solutionAssetId: snapshotValue(question.fields?.solutionAsset),
        sourceCaption: "",
      })),
      nextPreparation: { actionItems: actions.slice(0, 5) },
      cta: {
        valueStatement: snapshotValue(cta.valueStatement),
        contactOrNextAction: snapshotValue(cta.contactOrNextAction),
      },
    },
  });
}

export function updateExamAnalysisPromptStudioLocalDraft(localState, updater) {
  const current = localState?.draft ?? normalizeExamAnalysisPromptStudioDraft();
  const candidate = typeof updater === "function" ? updater(current) : updater;
  const draft = normalizeExamAnalysisPromptStudioDraft(candidate);
  return {
    ...localState,
    draft,
    status: areExamAnalysisPromptStudioDraftsEqual(draft, localState?.savedDraft)
      ? EXAM_ANALYSIS_PROMPT_SAVE_STATUS.SAVED
      : EXAM_ANALYSIS_PROMPT_SAVE_STATUS.DIRTY,
    error: "",
  };
}

export function createExamAnalysisPromptStudioSavePayload(analysisRunId, localState, savedBy = "") {
  if (!cleanText(analysisRunId)) throw new Error("analysisRunId가 필요합니다.");
  return {
    analysisRunId: cleanText(analysisRunId, 200),
    expectedRevision: normalizeExamAnalysisPromptStudioDraft(localState?.savedDraft).revision,
    promptStudioDraft: {
      ...normalizeExamAnalysisPromptStudioDraft(localState?.draft),
      savedBy: cleanText(savedBy, 160),
    },
  };
}

export function verifyExamAnalysisPromptStudioSave(localDraft, response = {}) {
  const rereadDraft = response?.analysisRun
    ? getExamAnalysisPromptStudioDraftFromRun(response.analysisRun)
    : normalizeExamAnalysisPromptStudioDraft(response?.promptStudioDraft ?? {});
  const expected = normalizeExamAnalysisPromptStudioDraft(localDraft);
  const expectedWithServerMeta = { ...expected, revision: rereadDraft.revision, savedAt: rereadDraft.savedAt, savedBy: rereadDraft.savedBy };
  const matches = areExamAnalysisPromptStudioDraftsEqual(expectedWithServerMeta, rereadDraft);
  const serverVerified = response?.saveVerification?.verified !== false;
  return {
    matches,
    rereadDraft,
    status: matches && serverVerified
      ? EXAM_ANALYSIS_PROMPT_SAVE_STATUS.VERIFIED
      : EXAM_ANALYSIS_PROMPT_SAVE_STATUS.FAILED,
    error: !matches
      ? "Supabase 재조회값이 local draft와 일치하지 않습니다."
      : serverVerified
        ? ""
        : "서버가 Supabase 재조회 검증을 완료하지 못했습니다.",
  };
}

export function applyExamAnalysisPromptStudioSaveVerification(localState, response = {}) {
  const verification = verifyExamAnalysisPromptStudioSave(localState?.draft, response);
  if (!verification.matches || verification.status !== EXAM_ANALYSIS_PROMPT_SAVE_STATUS.VERIFIED) {
    return { ...localState, status: EXAM_ANALYSIS_PROMPT_SAVE_STATUS.FAILED, error: verification.error };
  }
  return {
    ...localState,
    draft: verification.rereadDraft,
    savedDraft: verification.rereadDraft,
    status: EXAM_ANALYSIS_PROMPT_SAVE_STATUS.VERIFIED,
    error: "",
    verifiedAt: cleanText(response?.saveVerification?.verifiedAt || new Date().toISOString(), 80),
  };
}
