import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [centerSource, controllerSource] = await Promise.all([
  readFile(new URL("../src/domains/notifications/NotificationCenter.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/notifications/useNotificationNoticeController.js", import.meta.url), "utf8")
]);

for (const marker of [
  'import { useNotificationNoticeController } from "./useNotificationNoticeController.js";',
  "useNotificationNoticeController({",
  "composeWorkspaceProps={composeWorkspaceProps}",
  "historyPanelProps={historyPanelProps}",
  "noticeWorkspaceTabsProps={noticeWorkspaceTabsProps}",
  "onApplyToNotice={applySpecialLectureGuideToNotice}"
]) {
  assert.ok(centerSource.includes(marker), `NotificationCenter must keep render contract: ${marker}`);
}
for (const removedOwner of [
  "useNotificationComposerState(",
  "useNotificationHistoryState(",
  "useNotificationRecipientState(",
  "createNotificationNoticeJobRequestBindings(",
  "createReconcileNoticeResultsBinding(",
  "createCancelNoticeJobBinding(",
  "deleteNoticeJobRequest(",
  "postJsonWithTimeout("
]) {
  assert.equal(centerSource.includes(removedOwner), false, `NotificationCenter must not retain controller owner: ${removedOwner}`);
}

for (const marker of [
  "export function useNotificationNoticeController({",
  "useNotificationHistoryState({",
  "useNotificationRecipientState({",
  "useNotificationComposerState({",
  "createNotificationNoticeJobRequestBindings({",
  "createReconcileNoticeResultsBinding({",
  "createCancelNoticeJobBinding({",
  "deleteNoticeJobRequest({",
  "polishNoticeMessageRequest({",
  '"/api/notifications/comment-alimtalk"',
  "applySpecialLectureGuideToNotice",
  "composeWorkspaceProps:",
  "historyPanelProps:",
  "noticeWorkspaceTabsProps:",
  "refreshHistoryForDate"
]) {
  assert.ok(controllerSource.includes(marker), `notice controller must preserve owner: ${marker}`);
}
for (const forbidden of ["../app/App", "../../app/App", "localStorage", "<NotificationNoticeWorkspace", "<NotificationHistoryPanel"]) {
  assert.equal(controllerSource.includes(forbidden), false, `notice controller crossed boundary: ${forbidden}`);
}
assert.ok(centerSource.split("\n").length < 180, "NotificationCenter must stay a compact render owner");

console.log("notification notice controller and render ownership boundary fixtures passed");
