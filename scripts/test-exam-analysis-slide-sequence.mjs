import assert from "node:assert/strict";
import {
  buildExamAnalysisSlideSequence,
  getExamAnalysisEffectiveRoleIds,
  getExamAnalysisSequenceRoleOptions,
} from "../src/domains/exams/examAnalysisSlideSequence.js";

const base = {
  sequence: { schoolLevel: "high", enabledRoleIds: [] },
  roleInputs: {
    common: { schoolName: "상계고", grade: "고1", examName: "1학기 기말", subject: "수학", schoolStyle: "남색 분석형" },
    examAnalysis: {
      questionCount: "20",
      scoreStructure: "객관식 18문항, 서술형 2문항, 100점",
      scope: "다항식~방정식",
      unitDistributionNote: "방정식 45%",
      difficultyNote: "중 12문항, 중상 6문항, 상 2문항",
      overallReview: "후반 조건 해석에서 난도가 높아짐",
    },
    keyQuestions: [
      { questionNumber: "18번", title: "조건 해석", selectionReason: "변별 문항", concepts: ["방정식"], strategy: "조건 표 작성", errorPoint: "조건 누락", sourceAssetId: "crop-18", solutionAssetId: "solution-18" },
      { questionNumber: "20번", title: "고난도", selectionReason: "최상위 변별", concepts: ["경우의 수"], strategy: "", errorPoint: "", sourceAssetId: "", solutionAssetId: "" },
    ],
    nextPreparation: { actionItems: ["조건 표시", "오답 재풀이", "시간 제한 훈련"] },
    cta: { valueStatement: "학교별 오답 관리", contactOrNextAction: "상담 신청" },
  },
};

const high = buildExamAnalysisSlideSequence(base);
assert.equal(high.presetId, "high_core");
assert(high.slides.some((slide) => slide.roleId === "score_gap"));
assert(high.slides.some((slide) => slide.roleId === "key_question-1"));
assert(high.slides.some((slide) => slide.roleId === "solution-1"));
assert(high.slides.some((slide) => slide.roleId === "key_question-2"));
assert(!high.slides.some((slide) => slide.roleId === "solution-2"));
assert.deepEqual(high.slides.map((slide) => slide.slideNumber), Array.from({ length: high.slides.length }, (_value, index) => index + 1));
assert.equal(high.slides.find((slide) => slide.roleId === "key_question-2").status, "needs_input");
assert(high.skipped.some((item) => item.roleId === "solution-2"));

const middle = buildExamAnalysisSlideSequence({ ...base, sequence: { schoolLevel: "middle", enabledRoleIds: [] } });
assert.equal(middle.presetId, "middle_core");
assert(!middle.slides.some((slide) => slide.roleId === "score_gap"));
assert.equal(getExamAnalysisSequenceRoleOptions("middle").some((role) => role.roleId === "score_gap"), false);

const reduced = buildExamAnalysisSlideSequence({
  ...base,
  sequence: { schoolLevel: "high", enabledRoleIds: ["cover", "exam_structure", "key_questions", "closing"] },
});
assert(!reduced.slides.some((slide) => slide.roleId === "unit_distribution"));
assert(reduced.slides.some((slide) => slide.roleId === "cover"));
assert(reduced.slides.some((slide) => slide.roleId === "closing"));
assert(getExamAnalysisEffectiveRoleIds(reduced).includes("cover"));

console.log(JSON.stringify({
  highSlides: high.slides.length,
  middleSlides: middle.slides.length,
  reducedSlides: reduced.slides.length,
  sequential: true,
  conditionalSolutionSkipped: true,
}));
