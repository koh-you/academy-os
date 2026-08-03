import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const shellSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalCommentComposer.jsx", import.meta.url),
  "utf8"
);
const wrapperStart = appSource.indexOf("function CommentComposerModal({ ...props })");
const wrapperEnd = appSource.indexOf("function parseCsvRows", wrapperStart);
assert.ok(wrapperStart >= 0, "missing App comment composer wrapper");
assert.ok(wrapperEnd > wrapperStart, "missing App comment composer wrapper end");
const wrapperSource = appSource.slice(wrapperStart, wrapperEnd);

for (const wrapperContract of [
  "<LessonJournalCommentComposer",
  "{...props}",
  "buildPreviewText: buildCommentPreviewText",
  "buildSourceText: buildCommentSourceText",
  "createEmptyRecord,",
  "createRecordId: createLessonStudentRecordId",
  "formatTimeLabel: formatKoreaTimeLabel",
  "getAudienceStatus: getAlimtalkAudienceStatus",
  "getDisplaySendStatus: getDisplayCommentSendStatus",
  "getSafetyText: getAlimtalkSafetyText",
  "getSafetyTone: getAlimtalkSafetyTone",
  "getScheduledDate: getLessonAlimtalkScheduledDate",
  "isLessonScheduleExpired: isLessonAlimtalkScheduleExpired",
  "normalizeSaveState,",
  "normalizeText: normalizeMessageText"
]) {
  assert.ok(wrapperSource.includes(wrapperContract), `missing App shell dependency: ${wrapperContract}`);
}
for (const movedAppContract of [
  "useLessonJournalCommentComposerDraft({",
  "async function handlePolishClick()",
  "async function handleSaveDraftClick()",
  "function handleSendClick()",
  "<LessonJournalCommentComposerView"
]) {
  assert.ok(
    !wrapperSource.includes(movedAppContract),
    `App wrapper must not retain moved shell contract: ${movedAppContract}`
  );
}

for (const shellContract of [
  "export function LessonJournalCommentComposer({",
  "initialSendTiming = \"default\"",
  "notificationTemplates = {}",
  "saveState = \"idle\"",
  "supplementSchedules = []",
  "testResultLines = []",
  "useLessonJournalCommentComposerDraft({",
  "createLessonJournalCommentComposerModel({",
  "buildSourceText({",
  "buildPreviewText({",
  "window.confirm(\"저장하지 않은 최종 문구가 있습니다. 닫을까요?\")",
  "polishLessonJournalCommentDraft({",
  "saveLessonJournalCommentDraft({",
  "createLessonJournalCommentSendPayload({",
  "onSendComment(lesson, student, payload.record, audience, payload.options)",
  "<LessonJournalCommentComposerView"
]) {
  assert.ok(shellSource.includes(shellContract), `missing domain comment shell contract: ${shellContract}`);
}
for (const forbiddenDirectSideEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "notification_jobs",
  "Solapi"
]) {
  assert.ok(
    !shellSource.includes(forbiddenDirectSideEffect),
    `domain comment shell must use injected callbacks: ${forbiddenDirectSideEffect}`
  );
}

console.log("lesson journal comment composer domain shell boundary passed");
