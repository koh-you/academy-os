import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createAttendanceKioskDisplayModel,
  getAttendanceActionLabel
} from "../src/domains/lessons/attendanceKioskModel.js";

const source = await readFile(
  new URL("../src/domains/lessons/attendanceKioskModel.js", import.meta.url),
  "utf8"
);

assert.equal(getAttendanceActionLabel({ mode: "completed" }), "이미 하원");
assert.equal(getAttendanceActionLabel({ mode: "checkOut" }), "하원");
assert.equal(getAttendanceActionLabel({ record: { attendanceStatus: "late" } }), "지각 등원");
assert.equal(getAttendanceActionLabel({ record: { attendanceStatus: "absent" } }), "결석");
assert.equal(getAttendanceActionLabel({ record: { attendanceStatus: "excused" } }), "인정결석");
assert.equal(getAttendanceActionLabel({ record: { attendanceStatus: "present" } }), "등원");

const formatLesson = (lesson = {}) => `${lesson.className} · ${lesson.startTime}-${lesson.endTime}`;
assert.deepEqual(
  createAttendanceKioskDisplayModel({
    formatLessonDisplayName: formatLesson,
    result: {
      checkedTime: "19:10",
      lesson: { className: "가상 반", startTime: "19:00", endTime: "22:00" },
      ok: true,
      record: { attendanceStatus: "late" },
      student: { name: "가상 학생" }
    }
  }),
  {
    previewActionLabel: "",
    previewDetail: "",
    previewLessonCandidates: [],
    previewRequiresLessonSelection: false,
    resultDetail: "가상 학생 · 가상 반 · 19:00-22:00 · 19:10",
    resultTitle: "지각 등원"
  }
);

const candidates = [
  { lesson: { lessonId: "virtual-a" } },
  { lesson: { lessonId: "virtual-b" } }
];
const selection = createAttendanceKioskDisplayModel({
  formatLessonDisplayName: formatLesson,
  pendingPreview: {
    checkedTime: "19:00",
    lessonCandidates: candidates,
    mode: "selectLesson",
    ok: true,
    student: { name: "가상 학생" }
  }
});
assert.equal(selection.previewRequiresLessonSelection, true);
assert.equal(selection.previewActionLabel, "수업 선택");
assert.equal(selection.previewDetail, "가상 학생 · 수업 선택 · 19:00");
assert.equal(selection.previewLessonCandidates, candidates);

assert.deepEqual(
  createAttendanceKioskDisplayModel({
    result: { ok: false, message: "가상 실패" }
  }),
  {
    previewActionLabel: "",
    previewDetail: "",
    previewLessonCandidates: [],
    previewRequiresLessonSelection: false,
    resultDetail: "가상 실패",
    resultTitle: "출결 체크 실패"
  }
);

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
  assert.equal(source.includes(forbidden), false, `attendance kiosk model must not include ${forbidden}`);
}

console.log("attendance kiosk display model passed");
