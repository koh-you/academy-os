import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [appSource, modalSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/students/StudentModal.jsx", import.meta.url), "utf8")
]);

assert.match(appSource, /import \{ StudentModal \} from "\.\.\/domains\/students\/StudentModal\.jsx";/);
assert.doesNotMatch(appSource, /function StudentModal\s*\(/);
assert.match(modalSource, /export function StudentModal\s*\(/);

for (const binding of [
  "intakeApplicants={studentIntakeApplicants}",
  "applicantSaveStates={studentIntakeSaveStates}",
  "applicantRegistrationMessages={studentIntakeRegistrationMessages}",
  "applicantRegistrationStates={studentIntakeRegistrationStates}",
  "students={students}",
  "templates={classTemplates}",
  "inferGradeFromBirthYear={inferGradeFromBirthYear}",
  "onRegisterApplicant={handleRegisterStudentIntakeApplicant}",
  "onSubmit={handleAddStudent}",
  "onUpdateApplicant={handleUpdateStudentIntakeApplicant}"
]) {
  assert.ok(appSource.includes(binding), `App must preserve StudentModal binding: ${binding}`);
}

for (const behavior of [
  "await onSubmit(submissionForm)",
  "await onRegisterApplicant(applicant.applicantId, registerValues",
  "onUpdateApplicant(applicantId, { [field]: value })",
  "closeDisabled={singleSaveState === \"saving\"}",
  "학생 저장 실패",
  "Tally 접수·등록 후보 목록",
  "기존 정보에 Tally 내용 추가",
  "Tally 내용으로 기본정보 교체"
]) {
  assert.ok(modalSource.includes(behavior), `StudentModal must preserve behavior: ${behavior}`);
}

for (const forbiddenOwner of [
  "fetch(",
  "postJson",
  "localStorage",
  "Supabase",
  "Solapi"
]) {
  assert.ok(!modalSource.includes(forbiddenOwner), `StudentModal must not own transport/provider boundary: ${forbiddenOwner}`);
}

console.log("student modal extraction boundary passed · App persistence callbacks preserved");
