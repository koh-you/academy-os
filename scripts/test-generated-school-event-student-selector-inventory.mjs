import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { normalizeSchoolName } from "../src/domains/schoolCalendar/schoolCalendarUtils.js";

function normalizeExistingGradeLabel(grade = "") {
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

function isExistingActiveStudent(student = {}) {
  return Boolean(
    student &&
      (student.status ?? "active") === "active" &&
      !student.withdrawnAt
  );
}

function existingSchoolNamesMatch(
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

function getExistingStudentsForSchoolCalendarEvent(
  students = [],
  event = {}
) {
  const eventGrade = normalizeExistingGradeLabel(
    event.grade || ""
  );
  return students.filter((student) => {
    if (!isExistingActiveStudent(student)) return false;
    const studentSchool = student.schoolName || "";
    const eventSchool = event.schoolName || "";
    if (
      (studentSchool || eventSchool) &&
      !existingSchoolNamesMatch(
        studentSchool,
        eventSchool,
        { allowBlank: false }
      )
    ) {
      return false;
    }
    if (!eventGrade) return true;
    return (
      normalizeExistingGradeLabel(student.grade || "") ===
      eventGrade
    );
  });
}

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
const blankSchoolControl = {
  studentId: "student_CONTROL_BLANK_SCHOOL",
  status: "active",
  schoolName: "",
  grade: "고2"
};
const students = [
  exactTarget,
  inactiveControl,
  aliasTarget,
  withdrawnAtControl,
  otherSchoolControl,
  otherGradeControl,
  blankSchoolControl
];
const studentsSnapshot = structuredClone(students);
const event = {
  schoolName: "가상여자고등학교",
  grade: "고등 2학년"
};
const eventSnapshot = structuredClone(event);
const selected =
  getExistingStudentsForSchoolCalendarEvent(
    students,
    event
  );

assert.deepEqual(selected, [exactTarget, aliasTarget]);
assert.equal(selected[0], exactTarget);
assert.equal(selected[1], aliasTarget);
assert.deepEqual(
  getExistingStudentsForSchoolCalendarEvent(
    [
      {
        studentId: "student_TARGET_BLANK_BOTH",
        status: "active",
        schoolName: "",
        grade: "중3"
      }
    ],
    {
      schoolName: "",
      grade: "중3"
    }
  ).map((student) => student.studentId),
  ["student_TARGET_BLANK_BOTH"]
);
assert.deepEqual(
  getExistingStudentsForSchoolCalendarEvent(
    [exactTarget, otherGradeControl],
    {
      schoolName: "가상여고",
      grade: ""
    }
  ),
  [exactTarget, otherGradeControl]
);
assert.deepEqual(
  getExistingStudentsForSchoolCalendarEvent(),
  []
);
assert.deepEqual(students, studentsSnapshot);
assert.deepEqual(event, eventSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const selectorStart = appSource.indexOf(
  "function getStudentsForSchoolCalendarEvent(students = [], event = {})"
);
const selectorEnd = appSource.indexOf(
  "function createPreExamLessonFromSchoolEvent(",
  selectorStart
);
assert.ok(
  selectorStart >= 0 &&
    selectorEnd > selectorStart
);
const selectorSource = appSource.slice(
  selectorStart,
  selectorEnd
);
const selectorBoundaries = [
  "const eventGrade = normalizeGradeLabel(event.grade || \"\")",
  "return students.filter((student) => {",
  "if (!isActiveStudent(student)) return false",
  "const studentSchool = student.schoolName ||",
  "const eventSchool = event.schoolName ||",
  "(studentSchool || eventSchool) && !schoolNamesMatch(studentSchool, eventSchool, { allowBlank: false })",
  "if (!eventGrade) return true",
  "return normalizeGradeLabel(student.grade || \"\") === eventGrade"
];
let previousIndex = -1;
for (const boundary of selectorBoundaries) {
  const boundaryIndex = selectorSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `school-event student selector order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.equal(
  appSource.split(
    "getStudentsForSchoolCalendarEvent("
  ).length - 1,
  2
);
assert.ok(
  appSource.includes(
    "const lessonStudents = getStudentsForSchoolCalendarEvent(students, event)"
  )
);
for (const forbiddenEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "setLessons",
  "setExamPrepRows",
  "persistExamPrepRows",
  "localStorage",
  "Supabase",
  "Solapi"
]) {
  assert.ok(
    !selectorSource.includes(forbiddenEffect),
    `school-event student selector crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "generated school-event student selector inventory TARGET/CONTROL fixtures passed"
);
