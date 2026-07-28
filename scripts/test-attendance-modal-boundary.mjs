import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const modalSource = await readFile(
  new URL("../src/domains/lessons/AttendanceModal.jsx", import.meta.url),
  "utf8"
);

for (const required of [
  "export function AttendanceModal(",
  "useState(getManualAttendanceInitialStatus(editableRecord))",
  "calculateLateMinutesFromLessonTime(",
  "hasTabletAttendanceRecord(record)",
  "hasAttendanceModalChanges(editableRecord, values)",
  "태블릿 출결 기록을 변경하시겠습니까?",
  "출결을 어떻게 저장할까요?",
  "finishConfirmedSave(false)",
  "finishConfirmedSave(true)",
  "await onSave(lesson, student, nextSave.values",
  "결석 출결은 저장됐지만",
  "저장 후 다음 정각 알림톡 예약",
  "저장 후 출결 알림톡 즉시 발송"
]) {
  assert.ok(modalSource.includes(required), `attendance modal must preserve ${required}`);
}

for (const forbidden of [
  "fetch(",
  "/api/",
  "postJson",
  "getJson",
  "setRecords",
  "setLessons",
  "localStorage",
  "notification_jobs",
  "Supabase",
  "Solapi"
]) {
  assert.equal(modalSource.includes(forbidden), false, `attendance modal must not include ${forbidden}`);
}

assert.ok(
  appSource.includes('import { AttendanceModal } from "../domains/lessons/AttendanceModal.jsx"'),
  "App must import the extracted attendance modal"
);
assert.equal(
  appSource.includes("function AttendanceModal("),
  false,
  "App must not retain the attendance modal implementation"
);
for (const appBoundary of [
  "<AttendanceModal",
  "const { saved } = await saveAttendanceRecord(",
  "sendAlimtalk: Boolean(options.sendAlimtalk)",
  "setAttendanceModal(null)"
]) {
  assert.ok(appSource.includes(appBoundary), `App must retain save adapter: ${appBoundary}`);
}

console.log("attendance modal callback boundary passed");
