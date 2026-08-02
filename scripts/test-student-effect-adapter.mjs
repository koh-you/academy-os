import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createStudentEffectAdapter } from "../src/domains/students/studentEffectAdapter.js";

const actions = new Proxy({}, {
  get(target, property) {
    if (!target[property]) target[property] = () => property;
    return target[property];
  }
});
const adapter = createStudentEffectAdapter({ actions });

const mappings = {
  draft: {
    onUpdateStudent: "handleUpdateStudent"
  },
  persistence: {
    onSaveAcademyReminder: "handleSaveAcademyReminder",
    onSaveAcademyTest: "handleSaveAcademyTest",
    onSaveScore: "handleSaveScoreRecord",
    onSaveStudent: "handleSaveStudent",
    onSaveStudentConsultation: "handleSaveStudentConsultation",
    onSaveStudentProfile: "handleSaveStudentProfile",
    onSaveTeacherOperatingMemo: "handleSaveTeacherOperatingMemo"
  },
  deletion: {
    onDeleteAcademyReminder: "handleDeleteAcademyReminder",
    onDeleteAcademyTest: "handleDeleteAcademyTest",
    onDeleteScore: "handleDeleteScoreRecord",
    onDeleteStudentConsultation: "handleDeleteStudentConsultation",
    onPermanentlyDeleteWithdrawnStudent: "handlePermanentlyDeleteWithdrawnStudent"
  },
  lifecycle: {
    onDeleteStudent: "handleDeleteStudent",
    onRestoreStudent: "handleRestoreStudent"
  },
  audit: {
    onAuditWithdrawnStudentDeletion: "handleAuditWithdrawnStudentDeletion"
  }
};

assert.deepEqual(Object.keys(adapter), Object.keys(mappings));
for (const [surfaceName, surfaceMappings] of Object.entries(mappings)) {
  assert.deepEqual(Object.keys(adapter[surfaceName]), Object.keys(surfaceMappings));
  assert.equal(Object.isFrozen(adapter[surfaceName]), true);
  for (const [propName, actionName] of Object.entries(surfaceMappings)) {
    assert.equal(adapter[surfaceName][propName], actions[actionName], `${surfaceName}.${propName} must preserve ${actionName}`);
  }
}
assert.equal(Object.isFrozen(adapter), true);

const [outletSource, managerSource, adapterSource] = await Promise.all([
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/students/StudentManager.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/students/studentEffectAdapter.js", import.meta.url), "utf8")
]);
assert.ok(outletSource.includes("createStudentEffectAdapter({ actions })"));
assert.ok(outletSource.includes("effects: studentEffects"));
assert.ok(managerSource.includes("effects = {},"));
for (const surfaceName of Object.keys(mappings)) {
  assert.ok(managerSource.includes(`${surfaceName}: {`));
}
for (const flatProp of [
  "onUpdateStudent: actions.",
  "onSaveStudent: actions.",
  "onSaveStudentProfile: actions.",
  "onDeleteStudent: actions.",
  "onRestoreStudent: actions.",
  "onAuditWithdrawnStudentDeletion: actions.",
  "onPermanentlyDeleteWithdrawnStudent: actions."
]) {
  assert.equal(outletSource.includes(flatProp), false, `outlet must not retain flat student callback ${flatProp}`);
}
for (const forbidden of ["fetch(", "postJson", "getJsonWithTimeout", "/api/", "Supabase", "localStorage", "useState", "useEffect"]) {
  assert.equal(adapterSource.includes(forbidden), false, `effect adapter must not own ${forbidden}`);
}

console.log("student draft/persistence/deletion/lifecycle/audit effect adapter fixtures passed");
