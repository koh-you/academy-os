import assert from "node:assert/strict";
import {
  getLessonCalendarKeyboardAction,
  isLessonCalendarEditableTarget
} from "../src/domains/lessons/lessonCalendarKeyboardModel.js";

for (const tagName of ["INPUT", "textarea", "Select", "BUTTON", "a", "SUMMARY"]) {
  assert.equal(isLessonCalendarEditableTarget({ tagName }), true);
}
assert.equal(isLessonCalendarEditableTarget({ tagName: "DIV", isContentEditable: true }), true);
assert.equal(
  isLessonCalendarEditableTarget({
    closest: (selector) => selector === "[role=\"button\"]" ? {} : null,
    tagName: "DIV"
  }),
  true
);
assert.equal(isLessonCalendarEditableTarget(null), false);

const resolve = (event, options = {}) =>
  getLessonCalendarKeyboardAction({
    event: {
      target: { tagName: "DIV" },
      ...event
    },
    isLessonJournalOpen: false,
    selectedLessonId: "lesson-1",
    ...options
  });

assert.deepEqual(resolve({ ctrlKey: true, key: "c" }), { type: "copy" });
assert.deepEqual(resolve({ metaKey: true, key: "C" }), { type: "copy" });
assert.deepEqual(resolve({ ctrlKey: true, key: "v" }), { type: "paste" });
assert.deepEqual(resolve({ metaKey: true, key: "z" }), { type: "undo" });
assert.deepEqual(resolve({ key: "Delete" }), { type: "delete" });
assert.deepEqual(resolve({ key: "Enter" }), {
  lessonId: "lesson-1",
  type: "open"
});
assert.equal(resolve({ key: "Enter" }, { selectedLessonId: "" }), null);
assert.deepEqual(resolve({ key: "ArrowLeft" }), { dayOffset: -1, type: "move" });
assert.deepEqual(resolve({ key: "ArrowRight" }), { dayOffset: 1, type: "move" });
assert.deepEqual(resolve({ key: "ArrowUp" }), { dayOffset: -7, type: "move" });
assert.deepEqual(resolve({ key: "ArrowDown" }), { dayOffset: 7, type: "move" });
assert.equal(resolve({ key: "Escape" }), null);
assert.equal(resolve({ key: "c" }), null, "plain c must not copy a lesson");
assert.equal(
  resolve({ key: "Delete", target: { tagName: "INPUT" } }),
  null,
  "editable targets must keep native key behavior"
);
assert.equal(
  resolve({ key: "ArrowRight" }, { isLessonJournalOpen: true }),
  null,
  "calendar shortcuts must stay disabled while a journal is open"
);

console.log("lesson calendar keyboard action model passed");
