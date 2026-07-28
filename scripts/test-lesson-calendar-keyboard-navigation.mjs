import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dispatchLessonCalendarKeyboardAction } from "../src/domains/lessons/useLessonCalendarKeyboardNavigation.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appSource = fs.readFileSync(path.join(root, "src", "app", "App.jsx"), "utf8");
const hookSource = fs.readFileSync(
  path.join(root, "src", "domains", "lessons", "useLessonCalendarKeyboardNavigation.js"),
  "utf8"
);

const calls = [];
const callbacks = {
  onCopyLesson: () => calls.push(["copy"]),
  onDeleteSelectedLesson: () => calls.push(["delete"]),
  onMoveDate: (dayOffset) => calls.push(["move", dayOffset]),
  onOpenLessonJournal: (lessonId) => calls.push(["open", lessonId]),
  onPasteLesson: () => calls.push(["paste"]),
  onUndoLessonAction: () => calls.push(["undo"])
};

assert.equal(dispatchLessonCalendarKeyboardAction(null, callbacks), false);
for (const action of [
  { type: "copy" },
  { type: "paste" },
  { type: "undo" },
  { type: "delete" },
  { lessonId: "lesson-1", type: "open" },
  { dayOffset: 7, type: "move" }
]) {
  assert.equal(dispatchLessonCalendarKeyboardAction(action, callbacks), true);
}
assert.deepEqual(calls, [
  ["copy"],
  ["paste"],
  ["undo"],
  ["delete"],
  ["open", "lesson-1"],
  ["move", 7]
]);

for (const expected of [
  "useLessonCalendarKeyboardNavigation({",
  "getLessonCalendarKeyboardAction({",
  'event.preventDefault()',
  'window.addEventListener("keydown", handleKeyDown)',
  'window.removeEventListener("keydown", handleKeyDown)',
  "dispatchLessonCalendarKeyboardAction(action"
]) {
  assert.equal(hookSource.includes(expected), true, `missing hook boundary: ${expected}`);
}
assert.equal(appSource.includes("useLessonCalendarKeyboardNavigation({"), true);
assert.equal(appSource.includes('window.addEventListener("keydown", handleKeyDown)'), false);
for (const forbidden of [
  "fetch(",
  "postJson",
  "apiUrl",
  "/api/",
  "supabase",
  "notification_jobs",
  "Solapi"
]) {
  assert.equal(hookSource.includes(forbidden), false, `keyboard hook must not include ${forbidden}`);
}

console.log("lesson calendar keyboard navigation hook boundary passed");
