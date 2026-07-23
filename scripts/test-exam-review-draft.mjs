import assert from "node:assert/strict";
import {
  buildExamReviewBlogSourceText,
  createExamReviewDraft,
  defaultExamReviewDraft,
  examReviewChecklistSections,
  getExamReviewSectionValue,
  isExamReviewDraftLike,
  normalizeExamPrepRowReviewDraft,
  normalizeExamReviewDraftText,
  normalizeExamReviewDraftValue,
  setExamReviewSectionValue,
  syncExamReviewDraftWithExamPrepRow
} from "../src/domains/exams/examReviewDraft.js";

assert.equal(examReviewChecklistSections.length, 10);
assert.deepEqual(examReviewChecklistSections.map((section) => section.number), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.equal(normalizeExamReviewDraftValue(" 첫 줄 \r\n첫 줄\r\n\r\n 둘째 줄 "), "첫 줄\n둘째 줄");
assert.equal(isExamReviewDraftLike(defaultExamReviewDraft), true);

const row = {
  schoolName: "테스트고",
  scope: "다항식\n방정식",
  subTextbook: "교과서",
  specialNote: "조건 해석형"
};
const draft = createExamReviewDraft(row);
assert.equal(draft.startsWith("[테스트고 시험지 총평]"), true);
assert.equal(getExamReviewSectionValue(draft, examReviewChecklistSections[0]), "다항식\n방정식");
assert.equal(getExamReviewSectionValue(draft, examReviewChecklistSections[2]), "교과서");
assert.equal(getExamReviewSectionValue(draft, examReviewChecklistSections[3]), "조건 해석형");

const scoreSplitSection = examReviewChecklistSections[5];
const mistakeSection = examReviewChecklistSections[6];
const lessonSection = examReviewChecklistSections[8];
const withScoreSplit = setExamReviewSectionValue(draft, scoreSplitSection, "18~21번\n시간 관리");
assert.equal(getExamReviewSectionValue(withScoreSplit, scoreSplitSection), "18~21번\n시간 관리");
const clearedScoreSplit = setExamReviewSectionValue(withScoreSplit, scoreSplitSection, "");
assert.equal(getExamReviewSectionValue(clearedScoreSplit, scoreSplitSection), "");

const difficultySection = examReviewChecklistSections[1];
assert.equal(difficultySection.title, "난이도/체감");
assert.equal(draft.includes("2. 난이도 :"), true);
assert.equal(getExamReviewSectionValue(draft, difficultySection), "");

let blogDraft = setExamReviewSectionValue(draft, scoreSplitSection, "18~21번");
blogDraft = setExamReviewSectionValue(blogDraft, mistakeSection, "부호와 계산 실수");
blogDraft = setExamReviewSectionValue(blogDraft, lessonSection, "오답 보충에서 재확인");
assert.equal(
  buildExamReviewBlogSourceText(blogDraft),
  [
    "변별 포인트: 18~21번",
    "자주 틀릴 이유: 부호와 계산 실수",
    "수업/보충 연결: 오답 보충에서 재확인"
  ].join("\n\n")
);

const synced = syncExamReviewDraftWithExamPrepRow(blogDraft, {
  schoolName: "변경고",
  scope: "새 범위",
  subTextbook: "새 부교재"
});
assert.equal(synced.startsWith("[변경고 시험지 총평]"), true);
assert.equal(getExamReviewSectionValue(synced, examReviewChecklistSections[0]), "새 범위");
assert.equal(getExamReviewSectionValue(synced, examReviewChecklistSections[2]), "새 부교재");
assert.equal(getExamReviewSectionValue(synced, scoreSplitSection), "18~21번");

const customReview = "선생님 자유 형식 총평";
assert.equal(syncExamReviewDraftWithExamPrepRow(customReview, row), customReview);
assert.equal(normalizeExamReviewDraftText(customReview, row), customReview);
const customRow = { review: customReview, schoolName: "테스트고" };
assert.equal(normalizeExamPrepRowReviewDraft(customRow), customRow);

const duplicateDraft = draft.replace("방정식", "방정식\n방정식");
const normalizedRow = normalizeExamPrepRowReviewDraft({ ...row, review: duplicateDraft });
assert.notEqual(normalizedRow.review, duplicateDraft);
assert.equal(normalizedRow.review.includes("방정식\n방정식"), false);

console.log("exam review draft fixtures passed");
