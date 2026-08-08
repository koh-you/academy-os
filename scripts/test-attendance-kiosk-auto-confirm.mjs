import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createAttendanceKioskDisplayModel } from "../src/domains/lessons/attendanceKioskModel.js";

const kioskSource = await readFile(new URL("../src/domains/lessons/AttendanceKiosk.jsx", import.meta.url), "utf8");
assert.ok(kioskSource.includes("const attendanceKioskAutoConfirmDelayMs = 3_000;"));
assert.ok(kioskSource.includes('"3초 뒤 자동 확인"'));
assert.equal(kioskSource.includes('"5초 뒤 자동 확인"'), false);
assert.equal(createAttendanceKioskDisplayModel({
  pendingPreview: { ok: true, mode: "selectLesson", requiresLessonSelection: true }
}).previewRequiresLessonSelection, true);
assert.equal(createAttendanceKioskDisplayModel({
  pendingPreview: { ok: true, mode: "checkin" }
}).previewRequiresLessonSelection, false);

console.log("attendance kiosk auto-confirm model passed");
