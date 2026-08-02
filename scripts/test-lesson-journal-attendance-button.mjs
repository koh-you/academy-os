import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalAttendanceButtonModel } from "../src/domains/lessons/lessonJournalAttendanceButtonModel.js";

assert.deepEqual(
  createLessonJournalAttendanceButtonModel({
    attendanceDisplay: {
      dateMismatch: true,
      detail: "등원 18:55",
      label: "등원",
      statusClass: "present"
    },
    checkoutMissing: true,
    record: { attendanceStatus: "late" }
  }),
  {
    className: "attendanceBadge attendance-present",
    detail: "등원 18:55",
    disabled: false,
    label: "등원",
    showCheckoutMissing: true,
    showDateMismatch: true
  }
);

assert.deepEqual(
  createLessonJournalAttendanceButtonModel({
    attendanceDisplay: { detail: "", label: "휴강", statusClass: "pending" },
    isClosureLesson: true,
    record: { attendanceStatus: "present" }
  }),
  {
    className: "attendanceBadge attendance-pending",
    detail: "",
    disabled: true,
    label: "휴강",
    showCheckoutMissing: false,
    showDateMismatch: false
  }
);

const recordFallbackControl = createLessonJournalAttendanceButtonModel({
  attendanceDisplay: { label: "미정" },
  record: { attendanceStatus: "late" }
});
assert.equal(recordFallbackControl.className, "attendanceBadge attendance-late");

const emptyControl = createLessonJournalAttendanceButtonModel({});
assert.equal(emptyControl.className, "attendanceBadge attendance-pending");
assert.equal(emptyControl.disabled, false);

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalAttendanceButton.jsx", import.meta.url),
  "utf8"
);
const rowSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalStudentRow.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.match(journalSource, /<LessonJournalStudentRow/);
assert.match(rowSource, /<LessonJournalAttendanceButton/);
assert.match(journalSource, /onOpenAttendance,/);
assert.doesNotMatch(journalSource, /className=\{`attendanceBadge attendance-/);
assert.match(componentSource, /onOpenAttendance\(\{ lesson: attendanceLesson, record, student \}\)/);
for (const contract of [
  "attendanceMismatchText",
  "checkoutMissingText",
  "model.disabled",
  "model.className"
]) {
  assert.ok(componentSource.includes(contract), `missing attendance button contract: ${contract}`);
}
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "useState", "useEffect"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `attendance button must stay callback-only: ${forbiddenSideEffect}`);
}

console.log("lesson journal attendance button TARGET/CONTROL fixtures passed");
