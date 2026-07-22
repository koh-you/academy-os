import assert from "node:assert/strict";
import {
  applyExamAnalysisPromptStudioSaveVerification,
  createExamAnalysisPromptStudioLocalState,
  createExamAnalysisPromptStudioSavePayload,
  EXAM_ANALYSIS_PROMPT_SAVE_STATUS,
  getExamAnalysisPromptStudioDraftFromRun,
  normalizeExamAnalysisPromptStudioDraft,
  seedExamAnalysisPromptStudioDraftFromSnapshot,
  updateExamAnalysisPromptStudioLocalDraft,
  verifyExamAnalysisPromptStudioSave,
} from "../src/domains/exams/examAnalysisPromptStudioDraft.js";

const originalRun = {
  analysisRunId: "run-fixture",
  auditSummary: {
    teacherReview: { confirmedCount: 20 },
    promptStudio: {
      schemaVersion: 1,
      revision: 2,
      sequence: { schoolLevel: "high", presetId: "default", enabledRoleIds: ["cover", "exam_analysis"] },
      roleInputs: {
        common: { schoolName: "상계고", grade: "고1", examName: "1학기 기말", subject: "수학", schoolStyle: "차분한 분석형" },
        examAnalysis: { scope: "다항식~방정식", overallReview: "조건 해석이 중요했습니다." },
        keyQuestions: [],
        nextPreparation: { actionItems: ["조건 표시", "오답 재풀이"] },
        cta: { valueStatement: "학교별 오답 관리", contactOrNextAction: "상담 신청" },
      },
      phraseSelections: {},
      assets: [],
      savedAt: "2026-07-22T00:00:00.000Z",
      savedBy: "teacher",
    },
  },
};

const local = createExamAnalysisPromptStudioLocalState(originalRun);
assert.equal(local.status, EXAM_ANALYSIS_PROMPT_SAVE_STATUS.SAVED);
assert.equal(local.draft.revision, 2);

const edited = updateExamAnalysisPromptStudioLocalDraft(local, (draft) => ({
  ...draft,
  roleInputs: {
    ...draft.roleInputs,
    examAnalysis: { ...draft.roleInputs.examAnalysis, scoreStructure: "객관식 20문항, 100점" },
  },
  phraseSelections: { "roleInputs.examAnalysis.overallReview": "overall-flow-01" },
}));
assert.equal(edited.status, EXAM_ANALYSIS_PROMPT_SAVE_STATUS.DIRTY);
assert.equal(local.draft.roleInputs.examAnalysis.scoreStructure, "");

const payload = createExamAnalysisPromptStudioSavePayload("run-fixture", edited, "teacher-1");
assert.equal(payload.expectedRevision, 2);
assert.equal(payload.promptStudioDraft.savedBy, "teacher-1");

const serverDraft = normalizeExamAnalysisPromptStudioDraft({
  ...payload.promptStudioDraft,
  revision: 3,
  savedAt: "2026-07-22T01:00:00.000Z",
});
const response = {
  analysisRun: {
    auditSummary: {
      teacherReview: originalRun.auditSummary.teacherReview,
      promptStudio: serverDraft,
    },
  },
  saveVerification: { verified: true, revision: 3 },
};
const verified = verifyExamAnalysisPromptStudioSave(payload.promptStudioDraft, response);
assert.equal(verified.matches, true);
assert.equal(verified.status, EXAM_ANALYSIS_PROMPT_SAVE_STATUS.VERIFIED);
assert.equal(verified.rereadDraft.revision, 3);
const applied = applyExamAnalysisPromptStudioSaveVerification(edited, response);
assert.equal(applied.status, EXAM_ANALYSIS_PROMPT_SAVE_STATUS.VERIFIED);
assert.equal(applied.savedDraft.revision, 3);

const mismatchResponse = structuredClone(response);
mismatchResponse.analysisRun.auditSummary.promptStudio.roleInputs.examAnalysis.scoreStructure = "서버의 다른 값";
const mismatch = verifyExamAnalysisPromptStudioSave(payload.promptStudioDraft, mismatchResponse);
assert.equal(mismatch.matches, false);
assert.equal(mismatch.status, EXAM_ANALYSIS_PROMPT_SAVE_STATUS.FAILED);
const failedLocalState = applyExamAnalysisPromptStudioSaveVerification(edited, mismatchResponse);
assert.equal(failedLocalState.status, EXAM_ANALYSIS_PROMPT_SAVE_STATUS.FAILED);
assert.equal(failedLocalState.draft.roleInputs.examAnalysis.scoreStructure, "객관식 20문항, 100점");

const reread = getExamAnalysisPromptStudioDraftFromRun(response.analysisRun);
assert.deepEqual(reread.roleInputs.nextPreparation.actionItems, ["조건 표시", "오답 재풀이"]);
assert.deepEqual(response.analysisRun.auditSummary.teacherReview, originalRun.auditSummary.teacherReview);

const limited = normalizeExamAnalysisPromptStudioDraft({
  roleInputs: { nextPreparation: { actionItems: ["1", "2", "3", "4", "5", "6"] } },
  assets: [{ kind: "unknown", storagePath: "x" }],
});
assert.equal(limited.roleInputs.nextPreparation.actionItems.length, 5);
assert.equal(limited.assets[0].kind, "source_reference");

const seededMiddle = seedExamAnalysisPromptStudioDraftFromSnapshot({
  sourceUpdatedAt: "2026-07-22T02:00:00.000Z",
  roles: {
    common: {
      schoolName: { value: "창일중", promptEligible: true },
      grade: { value: "중3", promptEligible: true },
      examName: { value: "기말고사", promptEligible: true },
      subject: { value: "수학", promptEligible: true },
      schoolStyle: { value: "", promptEligible: false },
    },
    examAnalysis: {},
    keyQuestions: [],
    nextPreparation: {},
    cta: {},
  },
});
assert.equal(seededMiddle.sequence.schoolLevel, "middle");
assert.equal(seededMiddle.roleInputs.common.schoolName, "창일중");

console.log(JSON.stringify({
  initialRevision: local.draft.revision,
  savedRevision: verified.rereadDraft.revision,
  dirtyStatus: edited.status,
  verifiedStatus: verified.status,
  mismatchStatus: mismatch.status,
}));
