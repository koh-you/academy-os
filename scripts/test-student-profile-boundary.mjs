import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [managerSource, profileSource] = await Promise.all([
  readFile(new URL("../src/domains/students/StudentManager.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/students/StudentProfileModal.jsx", import.meta.url), "utf8")
]);

assert.ok(managerSource.includes('import { StudentProfileErrorBoundary, StudentProfileModal } from "./StudentProfileModal.jsx";'));
assert.equal(managerSource.includes("function StudentProfileModal("), false);
assert.equal(managerSource.includes("class StudentProfileErrorBoundary"), false);
assert.ok(managerSource.includes("<StudentProfileErrorBoundary"));
assert.ok(managerSource.includes("<StudentProfileModal"));

assert.ok(profileSource.includes("export class StudentProfileErrorBoundary extends Component"));
assert.ok(profileSource.includes("export function StudentProfileModal({"));
assert.ok(profileSource.includes("createStudentProfileDraft"));
assert.ok(profileSource.includes("createStudentScheduleRows"));
assert.ok(profileSource.includes("getTallySubmissionFieldRows"));
assert.ok(profileSource.includes('className="studentProfileStickySaveBar"'));

for (const callbackName of [
  "onDeleteAcademyReminder",
  "onDeleteAcademyTest",
  "onDeleteScore",
  "onDeleteStudentConsultation",
  "onSaveAcademyReminder",
  "onSaveAcademyTest",
  "onSaveScore",
  "onSaveStudentConsultation",
  "onSaveStudentProfile",
  "onSaveTeacherOperatingMemo"
]) {
  assert.ok(managerSource.includes(`${callbackName}={${callbackName}}`), `manager must inject ${callbackName}`);
  assert.ok(profileSource.includes(callbackName), `profile must consume ${callbackName}`);
}

for (const forbidden of ["fetch(", "postJson", "getJsonWithTimeout", "/api/", "localStorage", "supabase"]) {
  assert.equal(profileSource.toLowerCase().includes(forbidden.toLowerCase()), false, `profile view must not own ${forbidden}`);
}

console.log("student profile physical boundary fixtures passed");
