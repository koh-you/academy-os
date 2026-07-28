import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { getLessonJournalEffectiveCommentSendStatus } from "../src/domains/lessons/lessonJournalCommentSendStatus.js";

const targetStudent = {
  name: "가상 TARGET",
  studentId: "student_TARGET"
};
const targetRecord = {
  studentCommentSendStatus: "학생 저장 상태",
  teacherCommentSendStatus: "학부모 저장 상태"
};
const targetSnapshot = structuredClone({
  record: targetRecord,
  student: targetStudent
});
const calls = [];
const scheduledJob = {
  notificationJobId: "job_TARGET",
  status: "scheduled"
};

const scheduledStatus = getLessonJournalEffectiveCommentSendStatus({
  formatJobStatus(job) {
    calls.push(["format", job]);
    return "예약 중 · 7. 29. 14:00";
  },
  getDisplayStatus(status) {
    calls.push(["display", status]);
    return `표시 · ${status}`;
  },
  getReservationStatus(student, target) {
    calls.push(["reservation", student, target]);
    return scheduledJob;
  },
  record: targetRecord,
  student: targetStudent,
  target: "parent"
});
assert.equal(scheduledStatus, "예약 중 · 7. 29. 14:00");
assert.deepEqual(calls, [
  ["reservation", targetStudent, "parent"],
  ["format", scheduledJob]
]);

calls.length = 0;
const parentFallback = getLessonJournalEffectiveCommentSendStatus({
  formatJobStatus(job) {
    calls.push(["format", job]);
    return "없음";
  },
  getDisplayStatus(status) {
    calls.push(["display", status]);
    return `표시 · ${status}`;
  },
  getReservationStatus(student, target) {
    calls.push(["reservation", student, target]);
    return null;
  },
  record: targetRecord,
  student: targetStudent,
  target: "parent"
});
assert.equal(parentFallback, "표시 · 학부모 저장 상태");
assert.deepEqual(calls, [
  ["reservation", targetStudent, "parent"],
  ["format", null],
  ["display", "학부모 저장 상태"]
]);

calls.length = 0;
const studentFallback = getLessonJournalEffectiveCommentSendStatus({
  formatJobStatus() {
    calls.push(["format"]);
    return "";
  },
  getDisplayStatus(status) {
    calls.push(["display", status]);
    return status;
  },
  getReservationStatus(student, target) {
    calls.push(["reservation", student, target]);
    return undefined;
  },
  record: targetRecord,
  student: targetStudent,
  target: "student"
});
assert.equal(studentFallback, "학생 저장 상태");
assert.deepEqual(calls, [
  ["reservation", targetStudent, "student"],
  ["format"],
  ["display", "학생 저장 상태"]
]);

const otherTargetFallback = getLessonJournalEffectiveCommentSendStatus({
  formatJobStatus: () => "없음",
  getDisplayStatus: (status) => status,
  getReservationStatus: () => null,
  record: targetRecord,
  student: targetStudent,
  target: "control"
});
assert.equal(otherTargetFallback, "학부모 저장 상태");
assert.deepEqual(
  {
    record: targetRecord,
    student: targetStudent
  },
  targetSnapshot
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const selectorSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalCommentSendStatus.js", import.meta.url),
  "utf8"
);
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction PreparationMemoModal(", detailStart);
const detailSource = appSource.slice(detailStart, detailEnd);

for (const binding of [
  "getLessonJournalEffectiveCommentSendStatus",
  "formatJobStatus: formatNotificationJobStatus",
  "getDisplayStatus: getDisplayCommentSendStatus",
  "getReservationStatus: getStudentReservationStatus",
  "record,",
  "student,",
  "target"
]) {
  assert.ok(detailSource.includes(binding), `missing comment status binding: ${binding}`);
}
assert.ok(!detailSource.includes('if (jobStatus && jobStatus !== "없음")'));
assert.ok(!detailSource.includes("record.studentCommentSendStatus : record.teacherCommentSendStatus"));

for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "new Date",
  "Date.now",
  "/api/",
  "Supabase",
  "Solapi",
  "localStorage",
  "setJournal"
]) {
  assert.ok(
    !selectorSource.includes(forbiddenSideEffect),
    `comment status selector must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("lesson journal comment send status TARGET/CONTROL fixtures passed");
