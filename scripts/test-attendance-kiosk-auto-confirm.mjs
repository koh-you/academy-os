import assert from "node:assert/strict";
import {
  attendanceKioskAutoConfirmSeconds,
  createAttendanceKioskDisplayModel
} from "../src/domains/lessons/attendanceKioskModel.js";

assert.equal(attendanceKioskAutoConfirmSeconds, 5);
assert.equal(createAttendanceKioskDisplayModel({
  pendingPreview: { ok: true, mode: "selectLesson", requiresLessonSelection: true }
}).previewRequiresLessonSelection, true);
assert.equal(createAttendanceKioskDisplayModel({
  pendingPreview: { ok: true, mode: "checkin" }
}).previewRequiresLessonSelection, false);

console.log("attendance kiosk auto-confirm model passed");
