import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [managerSource, overlaysSource] = await Promise.all([
  readFile(new URL("../src/domains/students/StudentManager.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/students/StudentLifecycleOverlays.jsx", import.meta.url), "utf8")
]);

assert.ok(managerSource.includes('import { StudentLifecycleOverlays } from "./StudentLifecycleOverlays.jsx";'));
assert.ok(managerSource.includes("<StudentLifecycleOverlays"));
assert.equal(managerSource.includes('title="학생 퇴원 처리 확인"'), false);
assert.equal(managerSource.includes('title="퇴원 중복 데이터 영구 삭제"'), false);

for (const controllerBoundary of [
  "function confirmDeleteStudent()",
  "async function restoreStudent(student)",
  "async function openPermanentDeleteModal(student)",
  "async function openBatchPermanentDeleteModal(targetStudents)",
  "async function permanentlyDeleteWithdrawnStudent()",
  "async function permanentlyDeleteSelectedWithdrawnStudents()",
  "function printStudentHandover()"
]) {
  assert.ok(managerSource.includes(controllerBoundary), `manager must retain ${controllerBoundary}`);
}

for (const propName of [
  "batchPermanentDeleteAuditState",
  "closeBatchPermanentDeleteModal",
  "closePermanentDeleteModal",
  "confirmDeleteStudent",
  "deleteStudent",
  "handoverStudent",
  "onPermanentlyDeleteWithdrawnStudent",
  "permanentDeleteAudit",
  "permanentlyDeleteSelectedWithdrawnStudents",
  "permanentlyDeleteWithdrawnStudent",
  "printStudentHandover",
  "withdrawalDraft"
]) {
  if (propName === "onPermanentlyDeleteWithdrawnStudent") {
    assert.equal(overlaysSource.includes(propName), false, "overlay must receive controller actions, not App deletion effect");
    continue;
  }
  assert.ok(managerSource.includes(`${propName}={${propName}}`), `manager must inject ${propName}`);
  assert.ok(overlaysSource.includes(propName), `overlay must consume ${propName}`);
}

for (const contract of [
  'title="학생 퇴원 처리 확인"',
  "이미 저장된 수업기록·출결·숙제는 보존하고, 선택한 적용일부터 수업 명단에서 제외",
  "이 코멘트는 이번 PDF에만 포함되며 저장하지 않습니다.",
  'closeDisabled={permanentDeleteAuditState === "saving"}',
  'closeDisabled={batchPermanentDeleteAuditState === "saving"}',
  "onClick={permanentlyDeleteWithdrawnStudent}",
  "선택 학생 영구 삭제"
]) {
  assert.ok(overlaysSource.includes(contract), `overlay must retain ${contract}`);
}

for (const forbidden of ["fetch(", "postJson", "getJsonWithTimeout", "/api/", "localStorage", "useState", "useEffect"]) {
  assert.equal(overlaysSource.toLowerCase().includes(forbidden.toLowerCase()), false, `overlay must not own ${forbidden}`);
}

console.log("student lifecycle overlay boundary fixtures passed");
