import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonReservationPayloadFingerprint } from "../src/domains/lessons/lessonReservationPayloadFingerprint.js";

const normalizeMessageCalls = [];
const normalizePhoneCalls = [];
const normalizeMessage = (value) => {
  normalizeMessageCalls.push(value);
  return String(value ?? "").trim().replaceAll(/\s+/g, " ");
};
const normalizePhone = (value) => {
  normalizePhoneCalls.push(value);
  return String(value ?? "").replaceAll(/\D/g, "");
};

const targetPayload = {
  assignmentStatus: "completed",
  attendanceReason: "",
  attendanceStatus: "present",
  checkInTime: "13:55",
  checkOutTime: "16:05",
  commentBodyOverride: "  가상   TARGET 코멘트  ",
  homeworkFollowupNotice: "  보충   확인  ",
  lateMinutes: 0,
  lessonContent: "  이차방정식  ",
  lessonMaterial: "  가상   교재  ",
  message: "사용되면 안 되는 CONTROL",
  nextHomework: "  다음 숙제  ",
  parentPhone: "010-0000-0000",
  preparationNotice: "  준비물  ",
  previousHomework: "  지난 숙제  ",
  reason: "빈 attendanceReason보다 뒤인 CONTROL",
  scheduledDate: " 2026-07-29T14:00:00+09:00 ",
  scheduleMode: "default",
  studentId: 123,
  studentPhone: "010-1234-5678",
  supplementSchedule: "  7/30   14:00  ",
  target: "student",
  testResult: "  90점  "
};
const targetSnapshot = structuredClone(targetPayload);
const fingerprint = createLessonReservationPayloadFingerprint({
  normalizeMessage,
  normalizePhone,
  payload: targetPayload
});
assert.equal(
  fingerprint,
  JSON.stringify({
    assignmentStatus: "completed",
    attendanceReason: "",
    attendanceStatus: "present",
    checkInTime: "13:55",
    commentBodyOverride: "가상 TARGET 코멘트",
    homeworkFollowupNotice: "보충 확인",
    lateMinutes: "0",
    lessonContent: "이차방정식",
    lessonMaterial: "가상 교재",
    nextHomework: "다음 숙제",
    preparationNotice: "준비물",
    previousHomework: "지난 숙제",
    recipient: "01012345678",
    scheduledDate: "2026-07-29T05:00:00.000Z",
    scheduleMode: "default",
    studentId: "123",
    supplementSchedule: "7/30 14:00",
    testResult: "90점",
    target: "student"
  })
);
assert.deepEqual(normalizePhoneCalls, ["010-1234-5678"]);
assert.deepEqual(normalizeMessageCalls, [
  "  가상   TARGET 코멘트  ",
  "  보충   확인  ",
  "  이차방정식  ",
  "  가상   교재  ",
  "  다음 숙제  ",
  "  준비물  ",
  "  지난 숙제  ",
  "  7/30   14:00  ",
  "  90점  "
]);
assert.deepEqual(targetPayload, targetSnapshot);

const fallbackPayload = {
  message: "  legacy message TARGET  ",
  parentPhone: "010-9876-5432",
  reason: "legacy reason TARGET",
  scheduledDate: " invalid-date CONTROL ",
  target: "parent"
};
const fallbackFingerprint = JSON.parse(
  createLessonReservationPayloadFingerprint({
    normalizeMessage,
    normalizePhone,
    payload: fallbackPayload
  })
);
assert.equal(fallbackFingerprint.attendanceReason, "legacy reason TARGET");
assert.equal(fallbackFingerprint.commentBodyOverride, "legacy message TARGET");
assert.equal(fallbackFingerprint.recipient, "01098765432");
assert.equal(fallbackFingerprint.scheduledDate, "invalid-date CONTROL");

const emptyFingerprint = JSON.parse(
  createLessonReservationPayloadFingerprint({
    normalizeMessage,
    normalizePhone
  })
);
assert.deepEqual(emptyFingerprint, {
  assignmentStatus: "",
  attendanceReason: "",
  attendanceStatus: "",
  checkInTime: "",
  commentBodyOverride: "",
  homeworkFollowupNotice: "",
  lateMinutes: "",
  lessonContent: "",
  lessonMaterial: "",
  nextHomework: "",
  preparationNotice: "",
  previousHomework: "",
  recipient: "",
  scheduledDate: "",
  scheduleMode: "",
  studentId: "",
  supplementSchedule: "",
  testResult: "",
  target: ""
});

const changedCheckOutFingerprint = createLessonReservationPayloadFingerprint({
  normalizeMessage,
  normalizePhone,
  payload: { ...targetPayload, checkOutTime: "18:30" }
});
assert.equal(
  changedCheckOutFingerprint,
  fingerprint,
  "하원 시각은 데일리 알림톡 본문에 쓰이지 않으므로 예약 내용을 stale로 만들면 안 됩니다."
);

const changedLessonContentFingerprint = createLessonReservationPayloadFingerprint({
  normalizeMessage,
  normalizePhone,
  payload: { ...targetPayload, lessonContent: "삼차방정식" }
});
assert.notEqual(
  changedLessonContentFingerprint,
  fingerprint,
  "실제 발송 본문에 포함되는 강의 내용 변경은 계속 stale로 판정해야 합니다."
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const modelSource = await readFile(
  new URL("../src/domains/lessons/lessonReservationPayloadFingerprint.js", import.meta.url),
  "utf8"
);
for (const binding of [
  'import { createLessonReservationPayloadFingerprint } from "../domains/lessons/lessonReservationPayloadFingerprint.js"',
  "function getLessonReservationPayloadFingerprint(payload = {})",
  "return createLessonReservationPayloadFingerprint({",
  "normalizeMessage: normalizeMessageText",
  "normalizePhone: normalizePhoneNumber",
  "payload"
]) {
  assert.ok(appSource.includes(binding), `missing payload fingerprint binding: ${binding}`);
}
assert.ok(!appSource.includes("const scheduledDateSource = String(payload.scheduledDate"));
assert.ok(!appSource.includes("commentBodyOverride: normalizeMessageText(payload.commentBodyOverride"));

for (const requiredField of [
  "assignmentStatus:",
  "attendanceReason:",
  "attendanceStatus:",
  "checkInTime:",
  "commentBodyOverride:",
  "homeworkFollowupNotice:",
  "lateMinutes:",
  "lessonContent:",
  "lessonMaterial:",
  "nextHomework:",
  "preparationNotice:",
  "previousHomework:",
  "recipient:",
  "scheduledDate:",
  "scheduleMode:",
  "studentId:",
  "supplementSchedule:",
  "testResult:",
  "target:"
]) {
  assert.ok(modelSource.includes(requiredField), `missing fingerprint field: ${requiredField}`);
}
assert.ok(!modelSource.includes("checkOutTime:"), "checkout-only changes must be excluded from the reservation fingerprint");
for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "Date.now",
  "/api/",
  "Supabase",
  "Solapi",
  "localStorage",
  "setNotification"
]) {
  assert.ok(
    !modelSource.includes(forbiddenSideEffect),
    `payload fingerprint model must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("lesson reservation payload fingerprint TARGET/CONTROL fixtures passed");
