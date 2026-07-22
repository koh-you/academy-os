import assert from "node:assert/strict";
import { createExamAnalysisPromptPack } from "../src/domains/exams/examAnalysisPromptPack.js";

const draft = {
  sequence: { schoolLevel: "high", enabledRoleIds: [] },
  roleInputs: {
    common: { schoolName: "상계고", grade: "고1", examName: "1학기 기말고사", subject: "수학", schoolStyle: "남색과 하늘색의 차분한 분석형" },
    examAnalysis: { questionCount: "20", scoreStructure: "객관식 18문항, 서술형 2문항, 100점", scope: "다항식~방정식", unitDistributionNote: "방정식 45%", difficultyNote: "중 12, 중상 6, 상 2", overallReview: "후반 조건 해석에서 체감 난도가 높아짐" },
    keyQuestions: [{ questionNumber: "18번", title: "조건 해석", selectionReason: "변별 문항", concepts: ["방정식"], strategy: "조건을 표로 정리", errorPoint: "조건 누락", sourceAssetId: "sanggye-18-crop.png", solutionAssetId: "sanggye-18-solution.png" }],
    nextPreparation: { actionItems: ["조건 표시", "오답 재풀이", "시간 제한 훈련"] },
    cta: { valueStatement: "학교별 오답을 다음 수업에 연결합니다.", contactOrNextAction: "상담 신청: 02-000-0000" },
  },
};

const pack = createExamAnalysisPromptPack(draft);
assert(pack.masterPrompt.includes("세로형 4:5, 1080×1350px"));
assert(pack.masterPrompt.includes("수식·도형·그래프·필기를 재작성하거나 새로 그리지 않는다"));
assert(pack.masterPrompt.includes("상계고"));
assert.equal(pack.slides.length, pack.sequence.slides.length);
assert.deepEqual(pack.slides.map((slide) => slide.slideNumber), Array.from({ length: pack.slides.length }, (_value, index) => index + 1));
const question = pack.slides.find((slide) => slide.roleGroup === "key_question");
const solution = pack.slides.find((slide) => slide.roleGroup === "solution");
assert(question.prompt.includes("sanggye-18-crop.png"));
assert(question.prompt.includes("문제 이미지를 재작성하지 않는다"));
assert(solution.prompt.includes("sanggye-18-solution.png"));
assert(solution.qaPrompt.includes("원본 문제·손풀이 변형 여부"));
assert(question.revisionPrompt.includes("변경 요청에 없는 요소는 그대로 유지"));
assert(pack.globalRevisionPrompt.includes(`총 ${pack.slides.length}장`));
assert.equal(pack.readyForAllGeneration, true);

const blockedDraft = structuredClone(draft);
blockedDraft.roleInputs.keyQuestions[0].sourceAssetId = "";
const blocked = createExamAnalysisPromptPack(blockedDraft);
const blockedQuestion = blocked.slides.find((slide) => slide.roleGroup === "key_question");
assert.equal(blockedQuestion.generationAllowed, false);
assert(blockedQuestion.prompt.includes("생성 전 입력 필요 (sourceAssetId)"));
assert.equal(blocked.readyForAllGeneration, false);

console.log(JSON.stringify({
  slides: pack.slides.length,
  masterPrompt: Boolean(pack.masterPrompt),
  perSlidePrompts: pack.slides.length,
  revisionPrompts: pack.slides.length,
  qaPrompts: pack.slides.length,
  blockedMissingAsset: true,
}));
