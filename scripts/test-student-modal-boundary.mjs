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

// 반이 하나도 없는 새 계정에서도 학생 등록 창이 열려야 한다.
// 2026-09-12 협력 교사 첫 로그인에서 templates[0].classTemplateId 로 창을 여는 순간 죽었다.
// 이전에는 샘플 반이 항상 있어서 드러나지 않았다. 선택지에 "미배정" 이 이미 있으므로
// 초기값은 빈 문자열이면 된다.
assert.ok(
  modalSource.includes('defaultClassTemplateId: templates[0]?.classTemplateId ?? ""'),
  "학생 등록 초기 반은 templates 가 비어 있어도 안전해야 한다"
);
assert.ok(
  !modalSource.includes("templates[0].classTemplateId"),
  "templates[0] 을 무조건 있다고 가정하면 안 된다"
);

console.log("student modal extraction boundary passed · App persistence callbacks preserved · empty-template safe");
