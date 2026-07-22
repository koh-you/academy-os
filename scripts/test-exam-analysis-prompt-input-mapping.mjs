import assert from "node:assert/strict";
import {
  createExamAnalysisPromptInputSnapshot,
  EXAM_ANALYSIS_VALUE_STATUS,
} from "../src/domains/exams/examAnalysisPromptInputMapping.js";

const run = {
  analysisRunId: "run-fixture",
  schoolName: "상계고",
  grade: "고1",
  subject: "수학",
  examCycle: "1학기 기말고사",
  questionCountStatus: "teacher_confirmed",
  confirmedQuestionCount: 2,
  rowsLocked: true,
  auditSummary: {
    outputDrafts: {
      inputs: {
        checklistExamRange: "다항식부터 방정식까지",
        blogBlockOverallReview: "후반부 조건 해석에서 체감 난도가 높아졌습니다.",
        blogBlockNextStudy: "조건을 식으로 바꾸는 훈련을 3회 반복합니다.",
        blogBlockAcademyTrust: "학교별 오답 지점을 다음 수업에 연결합니다.",
        blogBlockCta: "내신 대비 상담 신청",
        keyQuestionBlocks: [{
          blockId: "key-question-1",
          questionNumber: "2번",
          title: "조건 해석",
          selectionReason: "점수 차이가 난 대표 문항",
          similarTypeEvidence: "교사 확인 학습지 유사 유형",
          questionMemo: "조건을 먼저 분리해야 합니다.",
          mistakePoint: "조건 하나를 빠뜨리기 쉽습니다.",
          solutionMemo: "조건을 표로 정리한 뒤 식을 세웁니다.",
          imageSlotMemo: "문제 crop과 손풀이 필요",
        }],
      },
    },
  },
};

const questions = [
  {
    questionRowId: "q1",
    questionNumber: 1,
    rowStatus: "teacher_edited",
    unitName: "AI 구조 필드",
    aiFields: { unitName: "AI 단원", mainType: "AI 유형", difficulty: "중" },
    teacherFields: { unitName: "교사 단원", mainType: "교사 유형", difficulty: "중상", isImportantQuestion: false },
    finalFields: {},
  },
  {
    questionRowId: "q2",
    questionNumber: 2,
    rowStatus: "confirmed",
    sourcePage: 3,
    sourceEvidence: { boundary: { pageStart: 3, pageEnd: 4 } },
    aiFields: { unitName: "AI 단원", mainType: "AI 유형", subTypes: ["AI 세부"], difficulty: "상" },
    teacherFields: { unitName: "교사 단원", mainType: "교사 유형", subTypes: ["교사 세부"], difficulty: "중상" },
    finalFields: {
      unitName: "확정 단원",
      mainType: "확정 유형",
      subTypes: ["확정 세부"],
      difficulty: "중",
      isImportantQuestion: true,
      confirmedAt: "2026-07-22T00:00:00.000Z",
    },
  },
];

const sourceFiles = [{
  sourceId: "source-1",
  sourceType: "pdf",
  bucketId: "exam-analysis-pipeline-sources",
  storagePath: "run-fixture/exam.pdf",
  originalFileName: "exam.pdf",
  extractionStatus: "extracted",
  pageCount: 4,
  pageImageManifest: [{ pageNumber: 3, width: 595, height: 842, rotation: 0 }],
}];

const snapshot = createExamAnalysisPromptInputSnapshot({ analysisRun: run, questions, sourceFiles });

assert.equal(snapshot.roles.examAnalysis.questionCount.status, EXAM_ANALYSIS_VALUE_STATUS.CONFIRMED);
assert.equal(snapshot.roles.examAnalysis.questionCount.value, 2);
assert.equal(snapshot.questions[1].fields.unitName.value, "확정 단원");
assert.equal(snapshot.questions[1].fields.unitName.status, EXAM_ANALYSIS_VALUE_STATUS.CONFIRMED);
assert.equal(snapshot.questions[0].fields.unitName.value, "교사 단원");
assert.equal(snapshot.questions[0].fields.unitName.status, EXAM_ANALYSIS_VALUE_STATUS.TEACHER_SAVED);
assert.equal(snapshot.questions[0].fields.isImportantQuestion.value, false);
assert.equal(snapshot.questions[0].fields.isImportantQuestion.status, EXAM_ANALYSIS_VALUE_STATUS.TEACHER_SAVED);
assert.deepEqual(snapshot.roles.examAnalysis.unitDistribution.value, [{ label: "확정 단원", count: 1, percent: 100 }]);
assert.deepEqual(snapshot.roles.keyQuestions[0].fields.concepts.value, ["확정 유형", "확정 세부"]);
assert.equal(snapshot.roles.keyQuestions[0].fields.sourceAsset.status, EXAM_ANALYSIS_VALUE_STATUS.MISSING);
assert.equal(snapshot.roles.keyQuestions[0].fields.solutionAsset.status, EXAM_ANALYSIS_VALUE_STATUS.MISSING);
assert.equal(snapshot.sources[0].isQuestionCrop, false);
assert.equal(snapshot.sources[0].promptEligibleAsImage, false);
assert.equal(snapshot.questions[1].fields.sourcePage.promptEligible, false);
assert.equal(snapshot.roles.common.schoolStyle.status, EXAM_ANALYSIS_VALUE_STATUS.MISSING);
assert.equal(snapshot.roles.examAnalysis.scoreStructure.status, EXAM_ANALYSIS_VALUE_STATUS.MISSING);
assert.equal(snapshot.readiness.readyForPromptComposition, false);
assert(snapshot.readiness.missing.some((item) => item.field === "sourceAsset"));
assert(!snapshot.roles.examAnalysis.unitDistribution.value.some((item) => item.label === "교사 단원"));

const unconfirmedCount = createExamAnalysisPromptInputSnapshot({
  analysisRun: { ...run, questionCountStatus: "ai_detected", rowsLocked: false },
  questions,
  sourceFiles,
});
assert.equal(unconfirmedCount.roles.examAnalysis.questionCount.status, EXAM_ANALYSIS_VALUE_STATUS.MISSING);

console.log(JSON.stringify({
  schemaVersion: snapshot.schemaVersion,
  promptEligibleCount: snapshot.readiness.promptEligibleCount,
  missingCount: snapshot.readiness.missing.length,
  confirmedQuestionCount: snapshot.questions.filter((question) => question.confirmed).length,
}));
