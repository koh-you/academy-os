import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [managerSource, listSource] = await Promise.all([
  readFile(new URL("../src/domains/students/StudentManager.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/students/StudentWithdrawnList.jsx", import.meta.url), "utf8")
]);

const expectedProps = [
  "dirtyStudentIds",
  "getSingleSelectedWithdrawnStudent",
  "getStudentClassName",
  "openBatchPermanentDeleteModal",
  "openHandoverModal",
  "openPermanentDeleteModal",
  "restoreStudent",
  "saveSelectedWithdrawnStudents",
  "selectAllVisibleWithdrawnStudents",
  "selectedStudentId",
  "selectedWithdrawnStudentIds",
  "selectedWithdrawnStudents",
  "setSelectedStudentId",
  "setSelectedWithdrawnStudentIds",
  "setWithdrawnStudentSort",
  "toggleWithdrawnStudentSelection",
  "updateStudentField",
  "visibleStudents",
  "withdrawalReasonOptions",
  "withdrawnStudentSort"
];

const invocation = managerSource.match(/<StudentWithdrawnList([\s\S]*?)\/>/)?.[1] ?? "";
const signature = listSource.match(/export function StudentWithdrawnList\(\{([\s\S]*?)\}\) \{/)?.[1] ?? "";
const passedProps = [...invocation.matchAll(/^\s+(\w+)=\{\1\}$/gm)].map((match) => match[1]);
const consumedProps = signature.split(",").map((value) => value.trim()).filter(Boolean);
assert.deepEqual(passedProps, expectedProps);
assert.deepEqual(consumedProps, expectedProps);

for (const controllerBoundary of [
  "const [selectedWithdrawnStudentIds, setSelectedWithdrawnStudentIds]",
  "async function saveSelectedWithdrawnStudents()",
  "async function restoreStudent(student)",
  "async function openPermanentDeleteModal(student)",
  "async function openBatchPermanentDeleteModal(targetStudents)"
]) {
  assert.ok(managerSource.includes(controllerBoundary), `manager must retain ${controllerBoundary}`);
}

for (const viewContract of [
  'label="퇴원생 목록"',
  'aria-label="퇴원생 정렬"',
  "withdrawnStudentRow",
  'label="퇴원생 선택"',
  "onClick={saveSelectedWithdrawnStudents}",
  "getSingleSelectedWithdrawnStudent(\"퇴원 취소\")",
  "영구 삭제"
]) {
  assert.ok(listSource.includes(viewContract), `list must retain ${viewContract}`);
}

for (const forbidden of ["fetch(", "postJson", "getJsonWithTimeout", "/api/", "localStorage", "useState", "useEffect"]) {
  assert.equal(listSource.toLowerCase().includes(forbidden.toLowerCase()), false, `list must not own ${forbidden}`);
}

console.log("student withdrawn list physical boundary fixtures passed");
