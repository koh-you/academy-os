import assert from "node:assert/strict";
import { createExamAnalysisFinalPreviewModel } from "../src/domains/exams/finalPreview.js";

function reviewedQuestion(questionNumber, partName, unitName, mainType, difficulty = "중") {
  return {
    questionNumber,
    rowStatus: "confirmed",
    teacherFields: {
      partName,
      unitName,
      mainType,
      difficulty
    }
  };
}

const model = createExamAnalysisFinalPreviewModel({
  questions: [
    reviewedQuestion(1, "방정식", "이차방정식", "이차방정식의 근", "중"),
    reviewedQuestion(2, "방정식", "이차방정식", "근과 계수의 관계", "중상"),
    reviewedQuestion(3, "방정식", "복소수", "복소수의 계산", "하"),
    reviewedQuestion(4, "행렬", "행렬과 그 연산", "행렬의 곱셈", "상")
  ]
});

assert.deepEqual(
  model.partDistribution.map(({ label, count }) => ({ label, count })),
  [
    { label: "이차방정식", count: 2 },
    { label: "복소수", count: 1 },
    { label: "행렬과 그 연산", count: 1 }
  ],
  "출제 비중은 쎈 대단원이 아니라 쎈 중단원(unitName)으로 집계해야 합니다."
);
assert.equal(model.partDistribution.some(({ label }) => label === "방정식" || label === "행렬"), false);
assert.deepEqual(
  model.unitBreakdown.find(({ label }) => label === "이차방정식")?.mainTypes.map(({ label, count }) => ({ label, count })),
  [
    { label: "근과 계수의 관계", count: 1 },
    { label: "이차방정식의 근", count: 1 }
  ],
  "중단원 상세에는 해당 쎈 주요유형 분포가 표시되어야 합니다."
);
assert.deepEqual(
  model.difficultyByPart.map(({ label }) => label),
  model.partDistribution.map(({ label }) => label),
  "난이도 분포도 같은 쎈 중단원 기준을 사용해야 합니다."
);

console.log("시험분석 최종 미리보기 쎈 중단원 집계 테스트 통과");
