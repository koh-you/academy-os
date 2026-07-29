import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { normalizeSchoolName } from "../src/domains/schoolCalendar/schoolCalendarUtils.js";
import { createGeneratedSchoolEventStudentSelector } from "../src/domains/lessons/generatedSchoolEventStudentSelector.js";

function normalizeGradeLabel(grade = "") {
  const value = String(grade).trim();
  if (value.includes("1")) {
    return value.includes("중") ? "중1" : "고1";
  }
  if (value.includes("2")) {
    return value.includes("중") ? "중2" : "고2";
  }
  if (value.includes("3")) {
    return value.includes("중") ? "중3" : "고3";
  }
  return value;
}

function isActiveStudent(student = {}) {
  return Boolean(
    student &&
      (student.status ?? "active") === "active" &&
      !student.withdrawnAt
  );
}

function schoolNamesMatch(
  firstSchool = "",
  secondSchool = "",
  { allowBlank = true } = {}
) {
  if (!firstSchool || !secondSchool) return allowBlank;
  const firstText = normalizeSchoolName(firstSchool);
  const secondText = normalizeSchoolName(secondSchool);
  if (!firstText || !secondText) return allowBlank;
  return (
    firstText === secondText ||
    firstText.includes(secondText) ||
    secondText.includes(firstText)
  );
}

const selector =
  createGeneratedSchoolEventStudentSelector({
    isActiveStudent,
    normalizeGradeLabel,
    schoolNamesMatch
  });
const exactTarget = {
  studentId: "student_TARGET_EXACT",
  status: "active",
  schoolName: "가상여자고등학교",
  grade: "고2"
};
const aliasTarget = {
  studentId: "student_TARGET_ALIAS",
  status: "active",
  schoolName: "가상여고",
  grade: "2학년"
};
const inactiveControl = {
  studentId: "student_CONTROL_INACTIVE",
  status: "withdrawn",
  schoolName: "가상여고",
  grade: "고2"
};
const otherSchoolControl = {
  studentId: "student_CONTROL_OTHER_SCHOOL",
  status: "active",
  schoolName: "다른고",
  grade: "고2"
};
const otherGradeControl = {
  studentId: "student_CONTROL_OTHER_GRADE",
  status: "active",
  schoolName: "가상여고",
  grade: "고1"
};
const students = [
  exactTarget,
  inactiveControl,
  aliasTarget,
  otherSchoolControl,
  otherGradeControl
];
const event = {
  schoolName: "가상여자고등학교",
  grade: "고등 2학년"
};
const studentsSnapshot = structuredClone(students);
const eventSnapshot = structuredClone(event);
const selected = selector(students, event);

assert.deepEqual(selected, [exactTarget, aliasTarget]);
assert.equal(selected[0], exactTarget);
assert.equal(selected[1], aliasTarget);
assert.deepEqual(selector(), []);
assert.deepEqual(students, studentsSnapshot);
assert.deepEqual(event, eventSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedSchoolEventStudentSelector.js",
    import.meta.url
  ),
  "utf8"
);
assert.equal(
  appSource.split(
    'from "../domains/lessons/generatedSchoolEventStudentSelector.js"'
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "createGeneratedSchoolEventStudentSelector({"
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "getStudentsForSchoolCalendarEvent("
  ).length - 1,
  1
);
assert.equal(
  helperSource.split(
    "export function createGeneratedSchoolEventStudentSelector("
  ).length - 1,
  1
);
for (const appBoundary of [
  "const getStudentsForSchoolCalendarEvent =",
  "isActiveStudent,",
  "normalizeGradeLabel,",
  "schoolNamesMatch",
  "const lessonStudents = getStudentsForSchoolCalendarEvent(students, event)",
  "studentIds: lessonStudents.map((student) => student.studentId)"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing school-event student selector App boundary: ${appBoundary}`
  );
}
for (const helperBoundary of [
  "return function getStudentsForSchoolCalendarEvent(",
  "if (!isActiveStudent(student)) return false",
  "!schoolNamesMatch(",
  "{ allowBlank: false }",
  "if (!eventGrade) return true",
  "normalizeGradeLabel(student.grade || \"\") ==="
]) {
  assert.ok(
    helperSource.includes(helperBoundary),
    `missing school-event student selector boundary: ${helperBoundary}`
  );
}
for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "setLessons",
  "setExamPrepRows",
  "persistExamPrepRows",
  "localStorage",
  "Supabase",
  "Solapi",
  "Date.now",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `school-event student selector crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated school-event student selector TARGET/CONTROL extraction fixtures passed"
);
