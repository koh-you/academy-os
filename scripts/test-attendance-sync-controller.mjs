import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  mergeRemoteAttendanceRecords,
  syncAttendanceRecordsAction
} from "../src/domains/lessons/attendanceSyncController.js";

let records = [
  {
    lessonStudentRecordId: "record-target",
    attendanceStatus: "pending",
    checkInTime: "",
    lessonContent: "TARGET 미저장 수업내용",
    teacherComment: "TARGET 미저장 코멘트"
  },
  {
    lessonStudentRecordId: "record-control",
    attendanceStatus: "present",
    checkInTime: "17:00",
    lessonContent: "CONTROL 유지"
  }
];
let status = {
  lastSyncedAt: "2026-07-28T08:00:00.000Z",
  message: "이전 상태",
  state: "synced"
};
const applyOrder = [];
let receivedRequest = null;

function applyRecords(updater) {
  applyOrder.push("records");
  records = updater(records);
}

function applyStatus(updater) {
  const nextStatus = updater(status);
  applyOrder.push(`status:${nextStatus.state}`);
  status = nextStatus;
}

const success = await syncAttendanceRecordsAction({
  getNowIso: () => "2026-07-28T09:00:00.000Z",
  getSaveState: (recordId) => (recordId === "record-target" ? "dirty" : "saved"),
  onRecords: applyRecords,
  onStatus: applyStatus,
  request: async (...args) => {
    applyOrder.push("request");
    receivedRequest = args;
    return {
      records: [
        {
          lessonStudentRecordId: "record-target",
          attendanceStatus: "late",
          checkInTime: "18:07",
          lessonContent: "서버 수업내용",
          teacherComment: "서버 코멘트"
        },
        {
          lessonStudentRecordId: "record-new",
          attendanceStatus: "absent",
          lessonContent: "신규 서버 row"
        }
      ]
    };
  },
  syncDate: "2026-07-28"
});

assert.deepEqual(receivedRequest, [
  "/api/lesson-records?date=2026-07-28",
  8000,
  "출결 동기화가 지연되고 있습니다."
]);
assert.deepEqual(applyOrder, [
  "status:syncing",
  "request",
  "records",
  "status:synced"
]);
assert.deepEqual(success, {
  lastSyncedAt: "2026-07-28T09:00:00.000Z",
  ok: true,
  remoteRecordCount: 2
});
assert.deepEqual(status, {
  lastSyncedAt: "2026-07-28T09:00:00.000Z",
  message: "출결 최신 상태",
  state: "synced"
});
assert.deepEqual(records, [
  {
    lessonStudentRecordId: "record-target",
    attendanceStatus: "late",
    checkInTime: "18:07",
    lessonContent: "TARGET 미저장 수업내용",
    teacherComment: "TARGET 미저장 코멘트",
    attendanceReason: undefined,
    checkInAt: undefined,
    checkOutAt: undefined,
    checkOutTime: undefined,
    lateMinutes: undefined,
    updatedBy: undefined
  },
  {
    lessonStudentRecordId: "record-control",
    attendanceStatus: "present",
    checkInTime: "17:00",
    lessonContent: "CONTROL 유지"
  },
  {
    lessonStudentRecordId: "record-new",
    attendanceStatus: "absent",
    lessonContent: "신규 서버 row"
  }
]);

const unchangedRecords = records;
assert.equal(
  mergeRemoteAttendanceRecords(
    unchangedRecords,
    [records[1]],
    () => "saved"
  ),
  unchangedRecords,
  "unchanged remote records must preserve the collection reference"
);

let disposed = false;
const disposedOrder = [];
const disposedResult = await syncAttendanceRecordsAction({
  getSaveState: () => "saved",
  isDisposed: () => disposed,
  onRecords: () => {
    disposedOrder.push("records");
  },
  onStatus: (updater) => {
    const nextStatus = updater({ lastSyncedAt: "keep", state: "synced" });
    disposedOrder.push(`status:${nextStatus.state}`);
  },
  request: async () => {
    disposedOrder.push("request");
    disposed = true;
    return { records: [{ lessonStudentRecordId: "record-target" }] };
  },
  syncDate: "2026-07-29"
});
assert.deepEqual(disposedResult, { disposed: true, ok: false });
assert.deepEqual(disposedOrder, ["status:syncing", "request"]);

let failureStatus = {
  lastSyncedAt: "2026-07-28T08:00:00.000Z",
  message: "이전 성공",
  state: "synced"
};
const failureResult = await syncAttendanceRecordsAction({
  getSaveState: () => "saved",
  onRecords: () => {
    throw new Error("failed request must not apply records");
  },
  onStatus: (updater) => {
    failureStatus = updater(failureStatus);
  },
  request: async () => {
    throw new Error("가상 동기화 실패");
  },
  syncDate: "2026-07-28"
});
assert.equal(failureResult.ok, false);
assert.equal(failureResult.message, "가상 동기화 실패");
assert.deepEqual(failureStatus, {
  lastSyncedAt: "2026-07-28T08:00:00.000Z",
  message: "가상 동기화 실패",
  state: "failed"
});

let malformedRecords = [{ lessonStudentRecordId: "record-control" }];
const malformedResult = await syncAttendanceRecordsAction({
  getNowIso: () => "2026-07-28T10:00:00.000Z",
  getSaveState: () => "saved",
  onRecords: (updater) => {
    malformedRecords = updater(malformedRecords);
  },
  onStatus: () => {},
  request: async () => ({ records: null }),
  syncDate: "2026-07-28"
});
assert.equal(malformedResult.ok, true);
assert.equal(malformedResult.remoteRecordCount, 0);
assert.deepEqual(malformedRecords, [{ lessonStudentRecordId: "record-control" }]);

const source = await readFile(
  new URL("../src/domains/lessons/attendanceSyncController.js", import.meta.url),
  "utf8"
);
for (const forbidden of [
  "useState",
  "useEffect",
  "setRecords",
  "setAttendanceSyncStatus",
  "window.",
  "document.",
  "setInterval",
  "addEventListener",
  "Supabase",
  "Solapi"
]) {
  assert.equal(source.includes(forbidden), false, `sync controller must not own ${forbidden}`);
}

console.log("attendance sync controller virtual fixtures passed");
