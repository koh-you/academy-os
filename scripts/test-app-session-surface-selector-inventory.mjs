import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { selectAppSessionSurface } from "../src/app/appSessionSurfaceSelector.js";

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
  assert.equal(
    selectAppSessionSurface(fixture.input),
    fixture.expected
  );
}

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const start = appSource.indexOf("const sessionSurface = selectAppSessionSurface({");
const end = appSource.indexOf("\n  function handleDateSelect(", start);
assert.ok(start >= 0 && end > start);
const surfaceSource = appSource.slice(start, end);
let previousIndex = -1;
for (const boundary of [
  "selectAppSessionSurface({",
  "attendanceOnlyMode,",
  "specialLectureOnlyMode,",
  "session",
  'if (sessionSurface === "attendance")',
  "<AttendanceKiosk",
  'if (sessionSurface === "specialLecture")',
  "<SpecialLecturePublicPage",
  'if (sessionSurface === "login")',
  "<RoleLoginScreen",
  'if (sessionSurface === "student")',
  "<StudentPortalV2",
  'if (sessionSurface === "parent")',
  "<ParentPortal"
]) {
  const boundaryIndex = surfaceSource.indexOf(boundary, previousIndex + 1);
  assert.ok(
    boundaryIndex > previousIndex,
    `app session surface order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
const moduleSource = await readFile(
  new URL("../src/app/appSessionSurfaceSelector.js", import.meta.url),
  "utf8"
);
assert.equal(
  moduleSource.split("export function selectAppSessionSurface(").length - 1,
  1
);
assert.equal(
  appSource.split('from "./appSessionSurfaceSelector.js"').length - 1,
  1
);
assert.equal(
  appSource.split("selectAppSessionSurface({").length - 1,
  1
);
for (const appOwnedSurfaceBoundary of [
  "<AttendanceKiosk",
  "onAttendanceCheck={handleAttendancePinCheck}",
  "<SpecialLecturePublicPage",
  "<RoleLoginScreen",
  "onLogin={handleLogin}",
  "<StudentPortalV2",
  "onLogout={handleLogout}",
  "<ParentPortal"
]) {
  assert.ok(
    surfaceSource.includes(appOwnedSurfaceBoundary),
    `App-owned session surface moved: ${appOwnedSurfaceBoundary}`
  );
}
for (const forbiddenEffect of [
  "useState",
  "useEffect",
  "window",
  "document",
  "fetch(",
  "postJson",
  "/api/",
  "setSession",
  "Supabase",
  "Solapi",
  "notification_jobs"
]) {
  assert.ok(
    !moduleSource.includes(forbiddenEffect),
    `app session surface selector crossed a side effect: ${forbiddenEffect}`
  );
}

console.log("app session surface selector inventory TARGET/CONTROL fixtures passed");
