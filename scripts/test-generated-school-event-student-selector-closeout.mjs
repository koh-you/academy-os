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
const withdrawnAtControl = {
  studentId: "student_CONTROL_WITHDRAWN_AT",
  status: "active",
  withdrawnAt: "2026-07-01T00:00:00.000Z",
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
  withdrawnAtControl,
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
assert.deepEqual(
  selector(
    [exactTarget, otherGradeControl],
    {
      schoolName: "가상여고",
      grade: ""
    }
  ),
  [exactTarget, otherGradeControl]
);
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
const lessonBuilderSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedPreExamLessonBuilder.js",
    import.meta.url
  ),
  "utf8"
);
const modulePath =
  'from "../domains/lessons/generatedSchoolEventStudentSelector.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
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
  0
);
assert.equal(
  lessonBuilderSource.split(
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

const injectionStart = appSource.indexOf(
  "const getStudentsForSchoolCalendarEvent ="
);
const injectionEnd = appSource.indexOf(
  "const createPreExamLessonFromSchoolEvent =",
  injectionStart
);
assert.ok(
  injectionStart >= 0 &&
    injectionEnd > injectionStart
);
const injectionSource = appSource.slice(
  injectionStart,
  injectionEnd
);
const injectionBoundaries = [
  "const getStudentsForSchoolCalendarEvent =",
  "createGeneratedSchoolEventStudentSelector({",
  "isActiveStudent,",
  "normalizeGradeLabel,",
  "schoolNamesMatch"
];
let previousInjectionIndex = -1;
for (const boundary of injectionBoundaries) {
  const boundaryIndex = injectionSource.indexOf(
    boundary,
    previousInjectionIndex + 1
  );
  assert.ok(
    boundaryIndex > previousInjectionIndex,
    `school-event selector injection order changed: ${boundary}`
  );
  previousInjectionIndex = boundaryIndex;
}

const lessonBoundaries = [
  'if (event.type !== "mathExam" || !event.date) return null',
  "getStudentsForSchoolCalendarEvent(students, event)",
  "if (lessonStudents.length === 0) return null",
  "studentIds: lessonStudents.map(",
  "(student) => student.studentId"
];
let previousLessonIndex = -1;
for (const boundary of lessonBoundaries) {
  const boundaryIndex = lessonBuilderSource.indexOf(
    boundary,
    previousLessonIndex + 1
  );
  assert.ok(
    boundaryIndex > previousLessonIndex,
    `preExam lesson student consumer order changed: ${boundary}`
  );
  previousLessonIndex = boundaryIndex;
}

const helperBoundaries = [
  "return function getStudentsForSchoolCalendarEvent(",
  "const eventGrade = normalizeGradeLabel(event.grade || \"\")",
  "return students.filter((student) => {",
  "if (!isActiveStudent(student)) return false",
  "(studentSchool || eventSchool) &&",
  "!schoolNamesMatch(",
  "{ allowBlank: false }",
  "if (!eventGrade) return true",
  "normalizeGradeLabel(student.grade || \"\") ===",
  "eventGrade"
];
let previousHelperIndex = -1;
for (const boundary of helperBoundaries) {
  const boundaryIndex = helperSource.indexOf(
    boundary,
    previousHelperIndex + 1
  );
  assert.ok(
    boundaryIndex > previousHelperIndex,
    `school-event student selector order changed: ${boundary}`
  );
  previousHelperIndex = boundaryIndex;
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
    `school-event student selector closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated school-event student selector boundary closeout passed"
);
