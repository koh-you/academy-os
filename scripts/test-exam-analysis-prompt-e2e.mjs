import assert from "node:assert/strict";
import fs from "node:fs";
import { createExamAnalysisPromptInputSnapshot } from "../src/domains/exams/examAnalysisPromptInputMapping.js";
import {
  applyExamAnalysisPromptStudioSaveVerification,
  createExamAnalysisPromptStudioLocalState,
  createExamAnalysisPromptStudioSavePayload,
  EXAM_ANALYSIS_PROMPT_SAVE_STATUS,
  normalizeExamAnalysisPromptStudioDraft,
  seedExamAnalysisPromptStudioDraftFromSnapshot,
  updateExamAnalysisPromptStudioLocalDraft,
} from "../src/domains/exams/examAnalysisPromptStudioDraft.js";
import { createExamAnalysisPhraseDraft, getExamAnalysisPhraseOptions } from "../src/domains/exams/examAnalysisPhraseLibrary.js";
import { buildExamAnalysisSlideSequence } from "../src/domains/exams/examAnalysisSlideSequence.js";
import { createExamAnalysisPromptPack } from "../src/domains/exams/examAnalysisPromptPack.js";

const fixture = JSON.parse(fs.readFileSync(new URL("./fixtures/exam-analysis-sanggye-high1.json", import.meta.url), "utf8"));
const snapshot = createExamAnalysisPromptInputSnapshot({
  analysisRun: fixture.analysisRun,
  questions: fixture.questions,
  sourceFiles: fixture.sources,
});
snapshot.sourceUpdatedAt = fixture.analysisRun.updatedAt;

assert.equal(snapshot.roles.examAnalysis.questionCount.value, 22);
assert.equal(snapshot.questions.every((question) => question.confirmed), true);
assert.equal(snapshot.sources[0].isQuestionCrop, false);
assert(snapshot.readiness.missing.some((item) => item.field === "schoolStyle"));

const initial = createExamAnalysisPromptStudioLocalState(fixture.analysisRun);
const seeded = seedExamAnalysisPromptStudioDraftFromSnapshot(snapshot, initial.savedDraft);
let local = updateExamAnalysisPromptStudioLocalDraft(initial, seeded);
assert.equal(local.status, EXAM_ANALYSIS_PROMPT_SAVE_STATUS.DIRTY);
assert.equal(local.draft.roleInputs.keyQuestions.length, 2);

const reviewPhrase = getExamAnalysisPhraseOptions({ field: "reviewPoints", schoolLevel: "high" })[0];
assert(reviewPhrase);
local = updateExamAnalysisPromptStudioLocalDraft(local, (draft) => ({
  ...draft,
  sequence: { ...draft.sequence, schoolLevel: "high", presetId: "high_core" },
  phraseSelections: { ...draft.phraseSelections, "roleInputs.examAnalysis.overallReview": reviewPhrase.id },
  roleInputs: {
    ...draft.roleInputs,
    common: { ...draft.roleInputs.common, schoolStyle: "남색·하늘색 기반의 차분한 데이터 분석형, 둥근 카드와 얇은 선" },
    examAnalysis: {
      ...draft.roleInputs.examAnalysis,
      scoreStructure: "객관식 18문항, 서술형 4문항, 100점",
      overallReview: `${draft.roleInputs.examAnalysis.overallReview}\n${createExamAnalysisPhraseDraft(reviewPhrase.id)}`,
    },
    keyQuestions: draft.roleInputs.keyQuestions.map((question, index) => ({
      ...question,
      sourceAssetId: `sanggye-high1-q${index === 0 ? 18 : 22}-crop.png`,
      solutionAssetId: `sanggye-high1-q${index === 0 ? 18 : 22}-solution.png`,
    })),
  },
}));

const savePayload = createExamAnalysisPromptStudioSavePayload(fixture.analysisRun.analysisRunId, local, "fixture-teacher");
assert.equal(savePayload.expectedRevision, 0);
const rereadDraft = normalizeExamAnalysisPromptStudioDraft({
  ...savePayload.promptStudioDraft,
  revision: 1,
  savedAt: "2026-07-22T04:00:00.000Z",
});
const simulatedApiResponse = {
  analysisRun: {
    ...fixture.analysisRun,
    auditSummary: { ...fixture.analysisRun.auditSummary, promptStudio: rereadDraft },
  },
  saveVerification: { verified: true, revision: 1, verifiedAt: "2026-07-22T04:00:01.000Z" },
};
assert.deepEqual(simulatedApiResponse.analysisRun.auditSummary.teacherReview, fixture.analysisRun.auditSummary.teacherReview);
local = applyExamAnalysisPromptStudioSaveVerification(local, simulatedApiResponse);
assert.equal(local.status, EXAM_ANALYSIS_PROMPT_SAVE_STATUS.VERIFIED);
assert.equal(local.savedDraft.revision, 1);

const sequence = buildExamAnalysisSlideSequence(local.draft);
const pack = createExamAnalysisPromptPack(local.draft);
assert.equal(sequence.schoolLevel, "high");
assert.equal(sequence.slides.length, 12);
assert.deepEqual(sequence.slides.map((slide) => slide.slideNumber), Array.from({ length: 12 }, (_value, index) => index + 1));
assert.equal(sequence.needsInputCount, 0);
assert.equal(pack.readyForAllGeneration, true);
assert.equal(pack.slides.length, 12);
assert.equal(pack.slides.filter((slide) => slide.roleGroup === "key_question").length, 2);
assert.equal(pack.slides.filter((slide) => slide.roleGroup === "solution").length, 2);
assert(pack.text.includes("상계고"));
assert(pack.text.includes("sanggye-high1-q18-crop.png"));
assert(pack.text.includes("sanggye-high1-q22-solution.png"));
assert(!pack.text.includes("fixture-source-pdf'을 크게 배치"));

console.log(JSON.stringify({
  fixture: "상계고 고1 2026 1학기 기말",
  sourceQuestions: fixture.questions.length,
  promptQuestions: local.draft.roleInputs.keyQuestions.length,
  revision: local.savedDraft.revision,
  slides: pack.slides.length,
  promptTypes: ["master", "per-slide", "revision", "qa", "global-revision"],
  readyForAllGeneration: pack.readyForAllGeneration,
  productionWrites: 0,
  paidAiCalls: 0,
}));
