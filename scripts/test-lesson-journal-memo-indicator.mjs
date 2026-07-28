import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalMemoIndicatorModel } from "../src/domains/lessons/lessonJournalMemoIndicatorModel.js";

assert.deepEqual(
  createLessonJournalMemoIndicatorModel({
    preparationMemo: "다음 시간에 오답 확인",
    prepParentVisible: true,
    prepStudentVisible: true,
    previousPreparationMemo: "TARGET 직전 메모"
  }),
  {
    hasCurrentMemo: true,
    memoButtonDescription: "현재 메모 작성됨 · 직전 메모 확인 · 학생·학부모 작성창으로 가져오기",
    priorMemoAttentionLabel: "직전 메모 확인",
    priorMemoNeedsAttention: true
  }
);

assert.deepEqual(
  createLessonJournalMemoIndicatorModel({
    prepStudentVisible: true,
    referencePreparationMemo: "반 이동 전 참고 메모"
  }),
  {
    hasCurrentMemo: false,
    memoButtonDescription: "현재 메모 미작성 · 참고 메모 확인 · 학생 작성창으로 가져오기",
    priorMemoAttentionLabel: "참고 메모 확인",
    priorMemoNeedsAttention: true
  }
);

const acknowledgedControl = createLessonJournalMemoIndicatorModel({
  acknowledgedMemoCutoffDate: "2026-07-20",
  prepParentVisible: true
});
assert.equal(acknowledgedControl.memoButtonDescription, "현재 메모 미작성 · 이전 메모 확인 완료 · 학부모 작성창으로 가져오기");
assert.equal(acknowledgedControl.priorMemoNeedsAttention, false);

const emptyControl = createLessonJournalMemoIndicatorModel({});
assert.equal(emptyControl.memoButtonDescription, "현재 메모 미작성 · 이전 메모 없음 · 작성창 가져오기 안 함");
assert.equal(emptyControl.hasCurrentMemo, false);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const modelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalMemoIndicatorModel.js", import.meta.url),
  "utf8"
);
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalPrepMemoButton.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.match(journalSource, /<LessonJournalPrepMemoButton/);
assert.match(journalSource, /acknowledgedMemoCutoffDate=\{previousMemoContext\.acknowledgedMemoCutoffDate\}/);
assert.match(journalSource, /preparationMemo=\{record\.preparationMemo\}/);
assert.match(journalSource, /previousPreparationMemo=\{previousPreparationMemo\}/);
assert.match(journalSource, /referencePreparationMemo=\{referencePreparationMemo\}/);
assert.match(journalSource, /onOpen=\{\(\) => setPrepMemoModal\(\{/);
assert.doesNotMatch(journalSource, /className="prepMemoButton"/);
assert.doesNotMatch(journalSource, /const priorMemoAttentionLabel =/);
for (const componentContract of [
  "createLessonJournalMemoIndicatorModel",
  "aria-label={`${studentName} 수업메모 · ${memoButtonDescription}`}",
  'className="prepMemoButton"',
  'className="prepMemoWrittenMark"',
  'className="prepMemoAttentionMark"',
  "onClick={onOpen}"
]) {
  assert.ok(componentSource.includes(componentContract), `missing prep memo button contract: ${componentContract}`);
}
for (const contract of [
  "현재 메모 작성됨",
  "직전 메모 확인",
  "참고 메모 확인",
  "이전 메모 확인 완료",
  "학생·학부모 작성창으로 가져오기"
]) {
  assert.ok(modelSource.includes(contract), `missing memo indicator contract: ${contract}`);
}
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "useState", "useEffect"]) {
  assert.ok(!modelSource.includes(forbiddenSideEffect), `memo indicator must stay pure: ${forbiddenSideEffect}`);
  assert.ok(!componentSource.includes(forbiddenSideEffect), `prep memo button must stay callback-only: ${forbiddenSideEffect}`);
}

console.log("lesson journal memo indicator TARGET/CONTROL fixtures passed");
