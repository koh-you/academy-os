import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { previewKioskAttendanceAction } from "../src/domains/lessons/attendanceKioskPreviewController.js";

let dateChangeCount = 0;
let requestCount = 0;
const dateMismatchResult = await previewKioskAttendanceAction({
  attendanceOnlyMode: true,
  currentDate: "2026-07-29",
  lateGraceMinutes: 5,
  loadedDate: "2026-07-28",
  onDateChanged: () => {
    dateChangeCount += 1;
  },
  phoneLast4: "1234",
  request: async () => {
    requestCount += 1;
  }
});
assert.deepEqual(dateMismatchResult, {
  ok: false,
  message: "날짜가 바뀌어 출결 데이터를 다시 불러오는 중입니다. 잠시 후 다시 입력해 주세요."
});
assert.equal(dateChangeCount, 1);
assert.equal(requestCount, 0);

const invalidPinResult = await previewKioskAttendanceAction({
  attendanceOnlyMode: true,
  currentDate: "2026-07-28",
  lateGraceMinutes: 5,
  loadedDate: "2026-07-28",
  onDateChanged: () => {},
  phoneLast4: "12",
  request: async () => {
    requestCount += 1;
  }
});
assert.deepEqual(invalidPinResult, {
  ok: false,
  message: "휴대폰 번호 뒤 4자리를 입력해 주세요."
});
assert.equal(requestCount, 0);

let receivedPayload = null;
const successResult = await previewKioskAttendanceAction({
  attendanceOnlyMode: true,
  currentDate: "2026-07-28",
  lateGraceMinutes: 7,
  loadedDate: "2026-07-28",
  onDateChanged: () => {},
  options: {
    lessonId: "lesson-virtual-target",
    studentId: "student-virtual-control"
  },
  phoneLast4: "010-12ab34",
  request: async (payload) => {
    receivedPayload = payload;
    return {
      lesson: { lessonId: payload.lessonId },
      mode: "confirm",
      student: { studentId: payload.studentId }
    };
  }
});
assert.deepEqual(receivedPayload, {
  phoneLast4: "1234",
  lateGraceMinutes: 7,
  lessonId: "lesson-virtual-target",
  source: "kiosk",
  studentId: "student-virtual-control"
});
assert.deepEqual(successResult, {
  ok: true,
  lesson: { lessonId: "lesson-virtual-target" },
  mode: "confirm",
  student: { studentId: "student-virtual-control" }
});

const nonStandaloneResult = await previewKioskAttendanceAction({
  attendanceOnlyMode: false,
  currentDate: "2026-07-29",
  lateGraceMinutes: 5,
  loadedDate: "2026-07-28",
  onDateChanged: () => {
    throw new Error("non-standalone preview must not reload");
  },
  phoneLast4: "5678",
  request: async () => ({ mode: "confirm" })
});
assert.deepEqual(nonStandaloneResult, { ok: true, mode: "confirm" });

assert.deepEqual(
  await previewKioskAttendanceAction({
    attendanceOnlyMode: true,
    currentDate: "2026-07-28",
    lateGraceMinutes: 5,
    loadedDate: "2026-07-28",
    onDateChanged: () => {},
    phoneLast4: "1234",
    request: async () => {
      throw new Error("가상 preview 실패");
    }
  }),
  { ok: false, message: "가상 preview 실패" }
);

const source = await readFile(
  new URL("../src/domains/lessons/attendanceKioskPreviewController.js", import.meta.url),
  "utf8"
);
for (const forbidden of [
  "useState",
  "useEffect",
  "setRecords",
  "setLessons",
  "setNotificationLogs",
  "localStorage",
  "notification_jobs",
  "Supabase",
  "Solapi"
]) {
  assert.equal(source.includes(forbidden), false, `preview controller must not own ${forbidden}`);
}

console.log("attendance kiosk preview controller fixtures passed");
