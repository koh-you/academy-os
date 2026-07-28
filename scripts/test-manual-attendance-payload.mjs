import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createManualAttendanceRequestPayload } from "../src/domains/lessons/manualAttendancePayload.js";

const lesson = { date: "2026-07-28", lessonId: "lesson-virtual-target" };
const student = { studentId: "student-virtual-target" };

function build(attendanceStatus, overrides = {}) {
  return createManualAttendanceRequestPayload({
    lateGraceMinutes: 7,
    lesson,
    options: { sendAlimtalk: overrides.sendAlimtalk },
    student,
    updatedBy: overrides.updatedBy,
    values: {
      attendanceReason: overrides.attendanceReason ?? "",
      attendanceStatus,
      checkInTime: overrides.checkInTime ?? "",
      checkOutTime: overrides.checkOutTime ?? "",
      lateMinutes: overrides.lateMinutes ?? 0
    }
  });
}

for (const [attendanceStatus, expectedAction] of [
  ["present", "checkin"],
  ["late", "checkin"],
  ["absent", "status"],
  ["excused", "status"],
  ["pending", "status"],
  ["checkout", "checkout"]
]) {
  const result = build(attendanceStatus);
  assert.equal(result.nextAttendanceStatus, attendanceStatus);
  assert.equal(result.payload.action, expectedAction);
}

for (const attendanceStatus of ["present", "late"]) {
  const result = build(attendanceStatus, { checkOutTime: "20:05" });
  assert.equal(result.nextAttendanceStatus, "checkout");
  assert.equal(result.payload.action, "checkout");
  assert.equal(result.payload.checkOutTime, "20:05");
}

for (const attendanceStatus of ["absent", "excused", "pending"]) {
  const result = build(attendanceStatus, { checkOutTime: "20:05" });
  assert.equal(result.nextAttendanceStatus, attendanceStatus);
  assert.equal(result.payload.action, "status");
}

assert.deepEqual(
  build("late", {
    attendanceReason: "가상 사유",
    checkInTime: "18:07",
    lateMinutes: 2,
    sendAlimtalk: true,
    updatedBy: "teacher-virtual"
  }),
  {
    nextAttendanceStatus: "late",
    payload: {
      action: "checkin",
      actorId: "teacher-virtual",
      attendanceReason: "가상 사유",
      attendanceStatus: "late",
      checkInTime: "18:07",
      checkOutTime: "",
      date: "2026-07-28",
      lateMinutes: 2,
      lateGraceMinutes: 7,
      lessonId: "lesson-virtual-target",
      sendAlimtalk: true,
      source: "manual",
      studentId: "student-virtual-target"
    }
  }
);
assert.equal(build("present").payload.actorId, "instructor_owner_001");
assert.equal(build("present").payload.sendAlimtalk, false);

const source = await readFile(
  new URL("../src/domains/lessons/manualAttendancePayload.js", import.meta.url),
  "utf8"
);
for (const forbidden of [
  "fetch(",
  "/api/",
  "postJson",
  "useState",
  "setRecords",
  "setLessons",
  "notification_jobs",
  "Supabase",
  "Solapi"
]) {
  assert.equal(source.includes(forbidden), false, `manual payload must not own ${forbidden}`);
}

console.log("manual attendance payload fixtures passed");
