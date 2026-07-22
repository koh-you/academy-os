import assert from "node:assert/strict";
import fs from "node:fs";
import {
  EXAM_ANALYSIS_FACTUAL_ONLY_FIELDS,
  getExamAnalysisPhraseOptions,
} from "../src/domains/exams/examAnalysisPhraseLibrary.js";

const component = fs.readFileSync(new URL("../src/domains/exams/ExamAnalysisPromptStudioPanel.jsx", import.meta.url), "utf8");
const finalPanel = fs.readFileSync(new URL("../src/domains/exams/ExamAnalysisFinalPreviewPanel.jsx", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("../src/domains/exams/examAnalysisPromptStudio.css", import.meta.url), "utf8");

[
  "GPT Image 슬라이드 프롬프트 제작실",
  "공통 정보",
  "시험 분석",
  "주요문항",
  "다음 대비",
  "CTA",
  "중학교",
  "고등학교",
  "벤치마크 문구 사례 선택",
  "선택만으로는 바뀌지 않습니다.",
  "프롬프트 작업본 저장",
  "Supabase 재조회 확인",
  "문제 crop 자산 ID",
  "검증 손풀이 자산 ID",
  "입력 유무에 따라 조건부 역할을 건너뛰고 번호를 다시 계산합니다.",
  "제외된 조건부 역할",
  "복붙용 프롬프트",
  "프로젝트 마스터 프롬프트",
  "마스터+상세 복사",
  "수정 프롬프트",
  "QA 프롬프트",
  "전체 시리즈 수정 프롬프트",
  "TXT",
  "JSON",
].forEach((text) => assert(component.includes(text), `UI 계약 누락: ${text}`));

assert(finalPanel.includes("ExamAnalysisPromptStudioPanel"));
assert(component.includes("createExamAnalysisPromptInputSnapshot"));
assert(component.includes("createExamAnalysisPromptStudioSavePayload"));
assert(component.includes("applyExamAnalysisPromptStudioSaveVerification"));
assert(component.includes("getExamAnalysisPhraseOptions"));
assert(component.includes("createExamAnalysisPhraseDraft"));
assert(component.includes("disabled={!selectedId}"));
assert(component.includes("schoolLevel={schoolLevel}"));
assert(component.includes("buildExamAnalysisSlideSequence"));
assert(component.includes("createExamAnalysisPromptPack"));
assert(component.includes("disabled={!promptPack.readyForAllGeneration}"));
assert(css.includes(".examPromptSaveBadge.failed"));
assert(css.includes("@media (max-width: 900px)"));

for (const factualField of EXAM_ANALYSIS_FACTUAL_ONLY_FIELDS) {
  assert.equal(getExamAnalysisPhraseOptions({ field: factualField }).length, 0, `사실 필드에 문구 옵션 노출 금지: ${factualField}`);
}
assert(getExamAnalysisPhraseOptions({ field: "reviewPoints", schoolLevel: "middle" }).length > 0);
assert(getExamAnalysisPhraseOptions({ field: "reviewPoints", schoolLevel: "high" }).length > 0);
assert(getExamAnalysisPhraseOptions({ field: "selectionReason", schoolLevel: "high" }).length > 0);

console.log(JSON.stringify({
  mounted: true,
  responsive: true,
  factualPhraseFields: 0,
  middleReviewOptions: getExamAnalysisPhraseOptions({ field: "reviewPoints", schoolLevel: "middle" }).length,
  highReviewOptions: getExamAnalysisPhraseOptions({ field: "reviewPoints", schoolLevel: "high" }).length,
}));
