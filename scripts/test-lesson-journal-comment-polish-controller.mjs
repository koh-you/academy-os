import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { polishLessonJournalCommentDraft } from "../src/domains/lessons/lessonJournalCommentPolishController.js";

const calls = [];
const normalizeText = (value) => String(value ?? "").trim();
const record = {
  lessonStudentRecordId: "lsr_target",
  teacherComment: "저장 CONTROL"
};
const success = await polishLessonJournalCommentDraft({
  aiModel: "gpt-target",
  aiProvider: "openai",
  audience: "parent",
  draftComment: "  최종 draft TARGET  ",
  generatedPreviewText: "preview CONTROL",
  lesson: { lessonId: "lesson_target" },
  normalizeText,
  record,
  requestPolish: async (...args) => {
    calls.push(args);
    return {
      ok: true,
      polishedText: "AI 수정 TARGET",
      provider: "openai"
    };
  },
  sourceText: "source CONTROL",
  student: { studentId: "student_target" }
});

assert.deepEqual(success, {
  ok: true,
  polishedText: "AI 수정 TARGET",
  statusLabel: "완료 · openai"
});
assert.equal(calls.length, 1);
assert.equal(calls[0][2].teacherComment, "  최종 draft TARGET  ");
assert.equal(calls[0][2].lessonStudentRecordId, "lsr_target");
assert.equal(calls[0][3], "parent");
assert.equal(calls[0][4], "openai");
assert.equal(calls[0][5], "gpt-target");
assert.deepEqual(calls[0][6], {
  persist: false,
  rawText: "최종 draft TARGET"
});
assert.equal(record.teacherComment, "저장 CONTROL");

let fallbackOptions = null;
await polishLessonJournalCommentDraft({
  audience: "student",
  draftComment: " ",
  generatedPreviewText: "preview CONTROL",
  lesson: {},
  normalizeText,
  record: { studentComment: "" },
  requestPolish: async (...args) => {
    fallbackOptions = args[6];
    return {
      error: "가상 실패",
      ok: false
    };
  },
  sourceText: " source TARGET ",
  student: {}
});
assert.deepEqual(fallbackOptions, {
  persist: false,
  rawText: "source TARGET"
});

const failure = await polishLessonJournalCommentDraft({
  audience: "student",
  draftComment: "",
  generatedPreviewText: " preview TARGET ",
  lesson: {},
  normalizeText,
  record: {},
  requestPolish: async (...args) => {
    assert.equal(args[2].studentComment, "");
    assert.equal(args[6].rawText, "preview TARGET");
    return null;
  },
  sourceText: "",
  student: {}
});
assert.deepEqual(failure, {
  error: "AI 수정 실패",
  ok: false,
  polishedText: "",
  statusLabel: "실패 · AI 수정 실패"
});

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const controllerSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalCommentPolishController.js", import.meta.url),
  "utf8"
);
const modalStart = appSource.indexOf("function CommentComposerModal({");
const modalEnd = appSource.indexOf("function ReportModal({", modalStart);
const modalSource = appSource.slice(modalStart, modalEnd);

for (const binding of [
  "polishLessonJournalCommentDraft({",
  "normalizeText: normalizeMessageText",
  "requestPolish: onPolishComment",
  'setLocalAiStatus("AI 수정 중")',
  'setDraftSaveState("dirty")',
  "setLocalAiStatus(result.statusLabel)"
]) {
  assert.ok(modalSource.includes(binding), `missing comment polish controller binding: ${binding}`);
}
for (const retainedAction of [
  "async function handleSaveDraftClick()",
  "function handleSendClick()",
  "saveRecord: onSaveRecord",
  "onSendComment("
]) {
  assert.ok(modalSource.includes(retainedAction), `non-polish action must remain in App: ${retainedAction}`);
}
assert.ok(
  !modalSource.includes("const rawText = normalizeMessageText(draftComment)"),
  "CommentComposerModal must not retain the extracted polish request payload"
);
for (const forbiddenDependency of [
  "fetch(",
  "postJson",
  "/api/",
  "notification_jobs",
  "Solapi",
  "useState",
  "useEffect",
  "onSaveRecord",
  "onSendComment"
]) {
  assert.ok(
    !controllerSource.includes(forbiddenDependency),
    `comment polish controller must stay injected and isolated: ${forbiddenDependency}`
  );
}

console.log("lesson journal comment polish controller TARGET/CONTROL fixtures passed");
