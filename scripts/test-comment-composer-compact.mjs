import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const rootDirectory = path.resolve(scriptDirectory, "..");
const appSource = fs.readFileSync(path.join(rootDirectory, "src", "app", "App.jsx"), "utf8");
const cssSource = fs.readFileSync(path.join(rootDirectory, "src", "app", "App.css"), "utf8");
const composerStart = appSource.indexOf("function CommentComposerModal");
const composerEnd = appSource.indexOf("function AttendanceModal", composerStart);
const composerSource = appSource.slice(composerStart, composerEnd);

assert.ok(composerStart >= 0 && composerEnd > composerStart, "comment composer source was not found");

for (const preservedSource of [
  "isNotificationMuted",
  "isManualResendAvailable",
  "canSendNowToRealRecipient",
  "forceTestRecipient",
  'const sendTiming = isManualResendAvailable ? "now"',
  "disabled={hasUnsavedDraft || isNotificationMuted",
  "onSendComment(lesson, student, nextRecord, audience"
]) {
  assert.ok(composerSource.includes(preservedSource), `missing send safety behavior: ${preservedSource}`);
}

for (const removedSource of [
  "currentSchedulePlan",
  "currentPlanLabel",
  "alimtalkSafetyBox",
  "현재 수업 발송 계획",
  "발송 수신 기준:",
  "수신 대상:",
  "displaySendStatus"
]) {
  assert.ok(!composerSource.includes(removedSource), `redundant composer status remains: ${removedSource}`);
}

assert.ok(!cssSource.includes(".currentSchedulePlan"), "unused current plan CSS remains");
assert.ok(!cssSource.includes(".alimtalkSafetyBox"), "unused Alimtalk safety-box CSS remains");
console.log("compact comment composer contract: ok");
