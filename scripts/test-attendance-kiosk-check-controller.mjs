import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { checkKioskAttendanceAction } from "../src/domains/lessons/attendanceKioskCheckController.js";

function upsertById(items, nextItem, idKey) {
  return items.some((item) => item[idKey] === nextItem[idKey])
    ? items.map((item) => (item[idKey] === nextItem[idKey] ? nextItem : item))
    : [...items, nextItem];
}

let lessons = [
  { lessonId: "lesson-target", className: "TARGET 이전" },
  { lessonId: "lesson-control", className: "CONTROL 유지" }
];
let records = [
  { lessonStudentRecordId: "record-target", attendanceStatus: "pending" },
  { lessonStudentRecordId: "record-control", attendanceStatus: "present" }
];
let logs = [{ notificationLogId: "log-control", message: "CONTROL 유지" }];
let receivedPayload = null;
const applyOrder = [];
const successResult = await checkKioskAttendanceAction({
  attendanceOnlyMode: true,
  currentDate: "2026-07-28",
  lateGraceMinutes: 7,
  loadedDate: "2026-07-28",
  onAttendanceEvent: (log) => {
    applyOrder.push("event");
    logs = [log, ...logs];
  },
  onDateChanged: () => {},
  onLesson: (lesson) => {
    applyOrder.push("lesson");
    lessons = upsertById(lessons, lesson, "lessonId");
  },
  onRecord: (record) => {
    applyOrder.push("record");
    records = upsertById(records, record, "lessonStudentRecordId");
  },
  options: {
    action: "checkin",
    attendanceStatus: "late",
    checkInTime: "18:07",
    checkOutTime: "",
    lateMinutes: 2,
    lessonId: "lesson-target",
    studentId: "student-target"
  },
  phoneLast4: "010-12ab34",
  request: async (payload) => {
    applyOrder.push("request");
    receivedPayload = payload;
    return {
      alimtalk: { status: "queued" },
      attendanceEvent: {
        attendanceEventId: "event-target",
        createdAt: "2026-07-28T09:07:00.000Z"
      },
      checkedTime: "18:07",
      lesson: { lessonId: "lesson-target", className: "TARGET 갱신" },
      message: "등원 처리",
      record: {
        lessonStudentRecordId: "record-target",
        attendanceStatus: "late"
      },
      student: { studentId: "student-target" }
    };
  }
});

assert.deepEqual(receivedPayload, {
  action: "checkin",
  attendanceStatus: "late",
  checkInTime: "18:07",
  checkOutTime: "",
  phoneLast4: "1234",
  lateMinutes: 2,
  lateGraceMinutes: 7,
  lessonId: "lesson-target",
  sendAlimtalk: true,
  source: "kiosk",
  studentId: "student-target"
});
assert.deepEqual(applyOrder, ["request", "lesson", "record", "event"]);
assert.equal(successResult.ok, true);
assert.deepEqual(lessons, [
  { lessonId: "lesson-target", className: "TARGET 갱신" },
  { lessonId: "lesson-control", className: "CONTROL 유지" }
]);
assert.deepEqual(records, [
  { lessonStudentRecordId: "record-target", attendanceStatus: "late" },
  { lessonStudentRecordId: "record-control", attendanceStatus: "present" }
]);
assert.deepEqual(logs, [
  {
    notificationLogId: "event-target",
    channel: "attendance_kiosk",
    createdAt: "2026-07-28T09:07:00.000Z",
    lessonId: "lesson-target",
    message: "[출결체크] 등원 처리 · 18:07",
    provider: "academy-os",
    status: "queued",
    studentId: "student-target",
    target: "parent"
  },
  { notificationLogId: "log-control", message: "CONTROL 유지" }
]);

const beforeBlockedState = JSON.stringify({ lessons, logs, records });
let reloadCount = 0;
let blockedRequestCount = 0;
assert.deepEqual(
  await checkKioskAttendanceAction({
    attendanceOnlyMode: true,
    currentDate: "2026-07-29",
    lateGraceMinutes: 5,
    loadedDate: "2026-07-28",
    onAttendanceEvent: () => {},
    onDateChanged: () => {
      reloadCount += 1;
    },
    onLesson: () => {},
    onRecord: () => {},
    phoneLast4: "1234",
    request: async () => {
      blockedRequestCount += 1;
    }
  }),
  {
    ok: false,
    message: "날짜가 바뀌어 출결 데이터를 다시 불러오는 중입니다. 잠시 후 다시 입력해 주세요."
  }
);
assert.equal(reloadCount, 1);
assert.equal(blockedRequestCount, 0);
assert.equal(JSON.stringify({ lessons, logs, records }), beforeBlockedState);

assert.deepEqual(
  await checkKioskAttendanceAction({
    attendanceOnlyMode: true,
    currentDate: "2026-07-28",
    lateGraceMinutes: 5,
    loadedDate: "2026-07-28",
    onAttendanceEvent: () => {},
    onDateChanged: () => {},
    onLesson: () => {},
    onRecord: () => {},
    phoneLast4: "12",
    request: async () => {
      blockedRequestCount += 1;
    }
  }),
  { ok: false, message: "휴대폰 번호 뒤 4자리를 입력해 주세요." }
);
assert.equal(blockedRequestCount, 0);

const beforeFailureState = JSON.stringify({ lessons, logs, records });
assert.deepEqual(
  await checkKioskAttendanceAction({
    attendanceOnlyMode: true,
    currentDate: "2026-07-28",
    lateGraceMinutes: 5,
    loadedDate: "2026-07-28",
    onAttendanceEvent: () => {
      throw new Error("failure must not apply event");
    },
    onDateChanged: () => {},
    onLesson: () => {
      throw new Error("failure must not apply lesson");
    },
    onRecord: () => {
      throw new Error("failure must not apply record");
    },
    phoneLast4: "1234",
    request: async () => {
      throw new Error("가상 저장 실패");
    }
  }),
  { ok: false, message: "가상 저장 실패" }
);
assert.equal(JSON.stringify({ lessons, logs, records }), beforeFailureState);

let fallbackLog = null;
await checkKioskAttendanceAction({
  attendanceOnlyMode: false,
  currentDate: "2026-07-29",
  getNowIso: () => "2026-07-28T10:00:00.000Z",
  getNowTimestamp: () => 123456789,
  lateGraceMinutes: 5,
  loadedDate: "2026-07-28",
  onAttendanceEvent: (log) => {
    fallbackLog = log;
  },
  onDateChanged: () => {
    throw new Error("non-standalone check must not reload");
  },
  onLesson: () => {},
  onRecord: () => {},
  phoneLast4: "5678",
  request: async () => ({
    attendanceEvent: {},
    checkedTime: "",
    message: "하원 처리",
    student: {}
  })
});
assert.equal(
  fallbackLog.notificationLogId,
  "attendance_kiosk_123456789_student"
);
assert.equal(fallbackLog.createdAt, "2026-07-28T10:00:00.000Z");
assert.equal(fallbackLog.status, "saved");

const source = await readFile(
  new URL("../src/domains/lessons/attendanceKioskCheckController.js", import.meta.url),
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
  assert.equal(source.includes(forbidden), false, `check controller must not own ${forbidden}`);
}

console.log("attendance kiosk check TARGET/CONTROL controller fixtures passed");
