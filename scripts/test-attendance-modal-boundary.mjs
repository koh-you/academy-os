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
  "저장 후 출결 알림톡 즉시 발송",
  // 2026-09-19 · 확인 단계 동안 상태 탭·등원/하원/사유 입력을 잠그고, 저장될 값 요약을 한 줄로 보여준다.
  // pendingSave 는 [출결 저장] 시점 값을 캡처하므로 화면과 저장값이 어긋나지 않게 한다.
  "const isConfirming = Boolean(confirmStep)",
  "disabled={isConfirming}",
  "attendanceConfirmSummary",
  "저장될 값 · {confirmSummaryText}",
  // 2026-09-19 · 2단계는 [취소][저장만(primary)][저장 후 발송(soft)]. 1단계 [출결 저장] 은 ModalFooter.
  'onClick={() => setConfirmStep("")}',
  'title="학부모에게 실제 발송"',
  "<ModalFooter>"
]) {
  assert.ok(modalSource.includes(required), `attendance modal must preserve ${required}`);
}
assert.equal((modalSource.match(/disabled=\{isConfirming\}/g) ?? []).length, 4, "상태 탭 1곳 + 입력 3개가 확인 단계에 잠긴다");
assert.equal((modalSource.match(/className="primaryButton full"/g) ?? []).length, 0, "데스크톱 모달에서 primaryButton full 을 쓰지 않는다");
{
  const saveModeStart = modalSource.indexOf('confirmStep === "saveMode"');
  const saveModeSource = modalSource.slice(saveModeStart, modalSource.indexOf("<ModalFooter>", saveModeStart));
  assert.match(
    saveModeSource,
    /className="softButton"[^>]*onClick=\{\(\) => setConfirmStep\(""\)\}[\s\S]*className="primaryButton"[^>]*onClick=\{\(\) => finishConfirmedSave\(false\)\}[\s\S]*className="softButton"[\s\S]*onClick=\{\(\) => finishConfirmedSave\(true\)\}/,
    "2단계 순서와 톤: [취소 soft][저장만 primary][저장 후 발송 soft]"
  );
  assert.equal((saveModeSource.match(/className="primaryButton"/g) ?? []).length, 1);
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
