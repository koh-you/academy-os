import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  attendanceSyncFields,
  mergeRemoteAttendanceRecord
} from "../src/domains/lessons/attendanceSync.js";

const source = await readFile(
  new URL("../src/domains/lessons/attendanceSync.js", import.meta.url),
  "utf8"
);
const localDraft = {
  lessonStudentRecordId: "virtual-record",
  lessonId: "virtual-lesson",
  studentId: "virtual-student",
  attendanceStatus: "pending",
  attendanceReason: "로컬 이전 사유",
  checkInAt: "",
  checkInTime: "",
  checkOutAt: "",
  checkOutTime: "",
  lateMinutes: "",
  updatedBy: "instructor_owner_001",
  lessonContent: "AI가 보존해야 할 로컬 수업내용 draft",
  nextHomework: "AI가 보존해야 할 로컬 숙제 draft",
  teacherComment: "AI가 보존해야 할 로컬 코멘트 draft"
};
const remoteAttendance = {
  lessonStudentRecordId: "virtual-record",
  lessonId: "virtual-lesson",
  studentId: "virtual-student",
  attendanceStatus: "late",
  attendanceReason: "교통 지연",
  checkInAt: "2026-07-28T10:10:00.000Z",
  checkInTime: "19:10",
  checkOutAt: "",
  checkOutTime: "",
  lateMinutes: 5,
  updatedBy: "attendance_kiosk",
  lessonContent: "서버의 이전 수업내용",
  nextHomework: "서버의 이전 숙제",
  teacherComment: "서버의 이전 코멘트"
};

assert.deepEqual(attendanceSyncFields, [
  "attendanceStatus",
  "attendanceReason",
  "checkInAt",
  "checkInTime",
  "checkOutAt",
  "checkOutTime",
  "lateMinutes",
  "updatedBy"
]);

for (const saveState of ["dirty", "saving", "failed"]) {
  const merged = mergeRemoteAttendanceRecord(localDraft, remoteAttendance, saveState);
  for (const field of attendanceSyncFields) {
    assert.equal(merged[field], remoteAttendance[field], `${saveState} must refresh ${field}`);
  }
  assert.equal(merged.lessonContent, localDraft.lessonContent, `${saveState} must preserve lesson content`);
  assert.equal(merged.nextHomework, localDraft.nextHomework, `${saveState} must preserve homework`);
  assert.equal(merged.teacherComment, localDraft.teacherComment, `${saveState} must preserve comment`);
}

assert.equal(
  mergeRemoteAttendanceRecord(null, remoteAttendance, "dirty"),
  remoteAttendance,
  "a new remote row must be used directly"
);
for (const saveState of ["saved", "idle", undefined]) {
  assert.equal(
    mergeRemoteAttendanceRecord(localDraft, remoteAttendance, saveState),
    remoteAttendance,
    `${saveState ?? "default"} must accept the complete remote row`
  );
}

for (const forbidden of [
  "fetch(",
  "/api/",
  "postJson",
  "getJson",
  "useState",
  "useEffect",
  "localStorage",
  "notification_jobs",
  "Solapi"
]) {
  assert.equal(source.includes(forbidden), false, `attendance sync model must not include ${forbidden}`);
}

console.log("attendance remote/local draft merge model passed");
