import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  checkAttendanceRequest,
  createAttendanceRequestBindings,
  previewAttendanceRequest
} from "../src/domains/lessons/attendanceApi.js";

const calls = [];
const request = async (...args) => {
  calls.push(args);
  return args[0] === "/api/attendance/check"
    ? {
        action: "checkin",
        alimtalk: { status: "queued" },
        mode: "checkIn",
        ok: true,
        record: { lessonStudentRecordId: "record-1" },
        requestNumber: calls.length
      }
    : { ok: true, requestNumber: calls.length };
};
const checkPayload = {
  action: "checkin",
  phoneLast4: "1234",
  sendAlimtalk: true,
  source: "kiosk"
};
const previewPayload = {
  lessonId: "lesson-virtual-1",
  phoneLast4: "1234",
  source: "kiosk"
};

assert.deepEqual(await checkAttendanceRequest({ payload: checkPayload, request }), {
  action: "checkin",
  alimtalk: { status: "queued" },
  mode: "checkIn",
  ok: true,
  record: { lessonStudentRecordId: "record-1" },
  requestNumber: 1
});
assert.deepEqual(calls[0], [
  "/api/attendance/check",
  checkPayload,
  30000,
  "출결 저장과 알림톡 처리가 지연되고 있습니다."
]);

assert.deepEqual(await previewAttendanceRequest({ payload: previewPayload, request }), {
  ok: true,
  requestNumber: 2
});
assert.deepEqual(calls[1], [
  "/api/attendance/preview",
  previewPayload,
  30000,
  "출결 확인이 지연되고 있습니다."
]);

const expectedError = new Error("virtual timeout");
await assert.rejects(
  checkAttendanceRequest({
    payload: checkPayload,
    request: async () => {
      throw expectedError;
    }
  }),
  (error) => error === expectedError
);

const bindings = createAttendanceRequestBindings({ request });
assert.deepEqual(await bindings.checkAttendanceRequest(checkPayload), {
  action: "checkin",
  alimtalk: { status: "queued" },
  mode: "checkIn",
  ok: true,
  record: { lessonStudentRecordId: "record-1" },
  requestNumber: 3
});
assert.deepEqual(await bindings.previewAttendanceRequest(previewPayload), {
  ok: true,
  requestNumber: 4
});

await assert.rejects(
  checkAttendanceRequest({
    payload: { ...checkPayload, unexpected: true },
    request
  }),
  (error) => error.code === "INVALID_API_PAYLOAD" && error.field === "unexpected"
);
await assert.rejects(
  checkAttendanceRequest({
    payload: checkPayload,
    request: async () => ({ ok: true })
  }),
  (error) => error.code === "INVALID_API_PAYLOAD" && error.field === "action"
);

const source = await readFile(
  new URL("../src/domains/lessons/attendanceApi.js", import.meta.url),
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
  assert.equal(source.includes(forbidden), false, `attendance API must not own ${forbidden}`);
}

console.log("attendance API request adapters passed");
