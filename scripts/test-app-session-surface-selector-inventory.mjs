import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

function selectExistingAppSessionSurface({
  attendanceOnlyMode = false,
  specialLectureOnlyMode = false,
  session = null
} = {}) {
  if (attendanceOnlyMode) return "attendance";
  if (specialLectureOnlyMode) return "specialLecture";
  if (!session) return "login";
  if (session.role === "student") return "student";
  if (session.role === "parent") return "parent";
  return "teacher";
}

const fixtures = [
  {
    input: {
      attendanceOnlyMode: true,
      specialLectureOnlyMode: true,
      session: { role: "teacher" }
    },
    expected: "attendance"
  },
  {
    input: {
      specialLectureOnlyMode: true,
      session: { role: "student" }
    },
    expected: "specialLecture"
  },
  { input: {}, expected: "login" },
  { input: { session: { role: "student" } }, expected: "student" },
  { input: { session: { role: "parent" } }, expected: "parent" },
  { input: { session: { role: "teacher" } }, expected: "teacher" }
];
for (const fixture of fixtures) {
  assert.equal(
    selectExistingAppSessionSurface(fixture.input),
    fixture.expected
  );
}

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const start = appSource.indexOf("if (attendanceOnlyMode) {");
const end = appSource.indexOf("\n  function handleDateSelect(", start);
assert.ok(start >= 0 && end > start);
const surfaceSource = appSource.slice(start, end);
let previousIndex = -1;
for (const boundary of [
  "if (attendanceOnlyMode)",
  "<AttendanceKiosk",
  "if (specialLectureOnlyMode)",
  "<SpecialLecturePublicPage",
  "if (!session)",
  "<RoleLoginScreen",
  'session.role === "student"',
  "<StudentPortalV2",
  'session.role === "parent"',
  "<ParentPortal"
]) {
  const boundaryIndex = surfaceSource.indexOf(boundary, previousIndex + 1);
  assert.ok(
    boundaryIndex > previousIndex,
    `app session surface order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}

console.log("app session surface selector inventory TARGET/CONTROL fixtures passed");
