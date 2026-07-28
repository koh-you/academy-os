import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  defaultAttendanceSettings,
  normalizeAttendanceSettings
} from "../src/domains/lessons/attendanceSettings.js";

assert.deepEqual(defaultAttendanceSettings, { lateGraceMinutes: 5 });
assert.deepEqual(normalizeAttendanceSettings(), { lateGraceMinutes: 5 });
assert.deepEqual(normalizeAttendanceSettings(null), { lateGraceMinutes: 5 });
assert.deepEqual(normalizeAttendanceSettings({ lateGraceMinutes: "7" }), {
  lateGraceMinutes: 7
});
assert.deepEqual(
  normalizeAttendanceSettings({
    deviceLabel: "가상 출결기",
    lateGraceMinutes: 9
  }),
  {
    deviceLabel: "가상 출결기",
    lateGraceMinutes: 9
  }
);
for (const lateGraceMinutes of [0, -1, "", "invalid", Number.NaN, Number.POSITIVE_INFINITY]) {
  assert.equal(
    normalizeAttendanceSettings({ lateGraceMinutes }).lateGraceMinutes,
    5
  );
}

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const source = await readFile(
  new URL("../src/domains/lessons/attendanceSettings.js", import.meta.url),
  "utf8"
);
assert.equal(
  appSource.includes(
    'from "../domains/lessons/attendanceSettings.js"'
  ),
  true
);
assert.equal(appSource.includes("function normalizeAttendanceSettings("), false);
assert.equal(appSource.includes("const defaultAttendanceSettings = {"), false);
for (const forbidden of [
  "useState",
  "useEffect",
  "localStorage",
  "fetch(",
  "/api/",
  "notification_jobs",
  "Supabase",
  "Solapi"
]) {
  assert.equal(source.includes(forbidden), false, `attendance settings must not own ${forbidden}`);
}

console.log("attendance settings normalization fixtures passed");
