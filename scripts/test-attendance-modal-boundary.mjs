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
  "<ModalFooter>",
  // 2026-09-25 · 잘못 누른 출결을 '대기'(미체크)로 되돌리는 출구. 탭 맨 앞에 있고, 저장값에서 시각·사유를
  // 비우며(서버 pending 분기와 같은 결과), 보낼 알림이 없으므로 발송 버튼은 그리지 않는다.
  '["pending", "대기"]',
  'const isPendingRevert = effectiveAttendanceStatus === "pending"',
  'checkInTime: isPendingRevert ? "" : checkInTime',
  'checkOutTime: isPendingRevert ? "" : checkOutTime',
  'attendanceReason: isPendingRevert ? "" : attendanceReason',
  "대기로 저장하면 등원·하원 시각과 사유가 지워지고",
  "출결을 대기로 되돌릴까요?",
  "대기로 되돌리기",
  "{isPendingRevert ? null : (",
  // 2026-09-25 · 되돌려도 이미 예약된 결석 알림톡은 서버가 취소하지 않는다. 확인 단계에서 남은 예약만 알린다.
  "createReservedAbsenceAlimtalkSummary({ lesson, notificationJobs, student })",
  "createReservedAbsenceAlimtalkWarningText({",
  "attendanceReservedAbsenceWarning",
  // 2026-09-28 · 상시 노출하던 등·하원 시각 안내와 저장 방식 설명을 공용 HelpTip(물음표) 뒤로 옮겼다.
  // 문구는 지운 게 아니라 자리만 바뀌었으므로 text prop 에서 그대로 잠근다.
  'label="등원 시각"',
  'text="출결을 못 찍은 학생은 실제 등원 시각을 입력하세요. 지각 분은 수업 시작 기준으로 자동 계산됩니다."',
  '<HelpTip label="하원 시각" text="하원 처리를 못 찍은 학생은 실제 하원 시각을 입력하세요." />',
  'label="저장 방식"',
  "결석 기록만 저장하거나, 저장 후 학부모 결석 알림톡을 다음 예약 가능한 정각에 예약할 수 있습니다.",
  "출결 기록만 저장하거나, 저장 후 학부모에게 출결 알림톡까지 즉시 발송할 수 있습니다.",
  // 2026-09-28 · 물음표 <button> 을 <label> 안에 두면 label 의 연결 대상이 버튼으로 바뀌어 입력칸이
  // 접근 가능한 이름을 잃는다. 제목 줄을 <label> 밖으로 빼고 htmlFor/id 로 명시 연결한 것을 잠근다.
  "const checkInFieldId = useId()",
  "const checkOutFieldId = useId()",
  "<label htmlFor={checkInFieldId}>등원 시각</label>",
  "<label htmlFor={checkOutFieldId}>하원 시각</label>",
  "id={checkInFieldId}",
  "id={checkOutFieldId}"
]) {
  assert.ok(modalSource.includes(required), `attendance modal must preserve ${required}`);
}
// 2026-09-25 · 4 -> 1 + 3: 상태 탭만 isConfirming 으로 잠그고, 입력 3개는 확인 단계와 대기 되돌리기
// (저장되지 않는 값) 둘 다에서 잠기므로 isFieldLocked 를 쓴다.
assert.equal((modalSource.match(/disabled=\{isConfirming\}/g) ?? []).length, 1, "상태 탭이 확인 단계에 잠긴다");
assert.equal(
  (modalSource.match(/disabled=\{isFieldLocked\}/g) ?? []).length,
  3,
  "등원·하원·사유 입력은 확인 단계와 대기 되돌리기에서 잠긴다"
);
assert.ok(
  modalSource.includes("const isFieldLocked = isConfirming || isPendingRevert"),
  "입력 잠금 조건은 확인 단계와 대기 되돌리기를 함께 본다"
);
// 2026-09-28 · 물음표는 제목(출결 체크) + 등원 시각 + 하원 시각 + 저장 방식 = 4개다.
// 같은 섹션(.fieldGrid)에는 2개까지만 둔다(ui-principles §9 · 한 섹션 3개 이상 금지).
assert.equal((modalSource.match(/<HelpTip/g) ?? []).length, 4, "출결 모달의 물음표는 4개다");
// 옮긴 문구를 안 쓰는 자리에 남겨 두지 않는다 — 모달에 상시 노출 <small> 안내는 더 없다.
assert.equal(modalSource.includes("</small>"), false, "상시 노출 small 안내를 남겨 두지 않는다");
// 대기로 되돌릴 때의 안내는 시각·사유가 지워진다는 실행 직전 경고라 상시 노출을 유지한다.
assert.ok(
  modalSource.includes("<p>출결 기록을 미체크(대기)로 되돌립니다."),
  "대기 되돌리기 경고는 물음표 뒤로 숨기지 않는다"
);
// 예약 취소는 사람이 알림관리에서 한다. 출결 모달이 예약을 자동으로 취소하지 않는다.
assert.equal(modalSource.includes("onCancelNotificationJob"), false, "출결 모달은 예약을 자동 취소하지 않는다");
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
  "setAttendanceModal(null)",
  // 2026-09-25 · 예약 판정은 도메인 순수 모델이 한다. App 은 이미 들고 있는 job 목록만 넘긴다.
  "notificationJobs={notificationJobs}"
]) {
  assert.ok(appSource.includes(appBoundary), `App must retain save adapter: ${appBoundary}`);
}

console.log("attendance modal callback boundary passed");
