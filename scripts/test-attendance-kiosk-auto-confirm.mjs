import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createAttendanceKioskDisplayModel } from "../src/domains/lessons/attendanceKioskModel.js";

const kioskSource = await readFile(new URL("../src/domains/lessons/AttendanceKiosk.jsx", import.meta.url), "utf8");
assert.ok(kioskSource.includes("const attendanceKioskAutoConfirmDelayMs = 5_000;"));
assert.equal(createAttendanceKioskDisplayModel({
  pendingPreview: { ok: true, mode: "selectLesson", requiresLessonSelection: true }
}).previewRequiresLessonSelection, true);
assert.equal(createAttendanceKioskDisplayModel({
  pendingPreview: { ok: true, mode: "checkin" }
}).previewRequiresLessonSelection, false);

console.log("attendance kiosk auto-confirm model passed");
