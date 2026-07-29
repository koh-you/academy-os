import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { lessonCalendarColors } from "../src/app/appConfig.js";
import { createPreExamGeneratedKey } from "../src/domains/lessons/generatedPreExamKeyBuilder.js";
import { createGeneratedSchoolEventStudentSelector } from "../src/domains/lessons/generatedSchoolEventStudentSelector.js";
import {
  safeIdPart,
  shortStableHash
} from "../src/shared/utils/id.js";

function normalizeExistingGradeLabel(grade = "") {
  const value = String(grade).trim();
  if (value.includes("1")) return value.includes("중") ? "중1" : "고1";
  if (value.includes("2")) return value.includes("중") ? "중2" : "고2";
  if (value.includes("3")) return value.includes("중") ? "중3" : "고3";
  return value;
}

function normalizeExistingSchoolName(value = "") {
  return String(value)
    .trim()
    .replaceAll(/\s+/g, "")
    .replace(/여자고등학교$/, "여고")
    .replace(/고등학교$/, "고")
    .replace(/중학교$/, "중");
}

function existingSchoolNamesMatch(
  firstSchool = "",
  secondSchool = "",
  { allowBlank = true } = {}
) {
  if (!firstSchool || !secondSchool) return allowBlank;
  const firstText = normalizeExistingSchoolName(firstSchool);
  const secondText = normalizeExistingSchoolName(secondSchool);
  if (!firstText || !secondText) return allowBlank;
  return (
    firstText === secondText ||
    firstText.includes(secondText) ||
    secondText.includes(firstText)
  );
}

function isExistingActiveStudent(student = {}) {
  return Boolean(
    student &&
      (student.status ?? "active") === "active" &&
      !student.withdrawnAt
  );
}

function addExistingDaysInKorea(dateString, days) {
  const base = new Date(`${dateString}T00:00:00+09:00`);
  base.setUTCDate(base.getUTCDate() + days);
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(base);
}

function getExistingDayKey(date) {
  return ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][
    new Date(`${date}T00:00:00+09:00`).getDay()
  ];
}

function getExistingStandardLessonColor(lesson = {}) {
  return lesson.lessonType === "preExam"
    ? lessonCalendarColors.preExam
    : lessonCalendarColors.regular;
}

function createExistingPreExamLessonId(sourceId = "") {
  return `lesson_pre_exam_${safeIdPart(sourceId)}_${shortStableHash(sourceId)}`;
}

const getExistingStudentsForSchoolCalendarEvent =
  createGeneratedSchoolEventStudentSelector({
    isActiveStudent: isExistingActiveStudent,
    normalizeGradeLabel: normalizeExistingGradeLabel,
    schoolNamesMatch: existingSchoolNamesMatch
  });

function createExistingPreExamLessonFromSchoolEvent(
  event = {},
  students = []
) {
  if (event.type !== "mathExam" || !event.date) return null;
  const lessonStudents =
    getExistingStudentsForSchoolCalendarEvent(students, event);
  if (lessonStudents.length === 0) return null;
  const subject = event.examSubject || event.subject || "수학";
  const gradeLabel = event.grade ? `${event.grade} ` : "";
  const sourceId =
    event.eventId ||
    `${event.schoolName}_${event.grade}_${subject}_${event.date}`;
  const generatedKey = createPreExamGeneratedKey({
    ...event,
    eventId: sourceId
  });
  return {
    lessonId: createExistingPreExamLessonId(sourceId),
    classTemplateId: "",
    className: `${event.schoolName || "학교 미입력"} ${gradeLabel}${subject} 직전수업`,
    lessonType: "preExam",
    lessonTopic: "직전대비",
    sourceSchoolEventId: sourceId,
    sourceExamDate: event.date,
    examCycle: event.examCycle || "",
    date: addExistingDaysInKorea(event.date, -1),
    dayOfWeek: getExistingDayKey(
      addExistingDaysInKorea(event.date, -1)
    ),
    startTime: "19:00",
    endTime: "21:00",
    color: getExistingStandardLessonColor({
      lessonType: "preExam"
    }),
    teacherId: "instructor_owner_001",
    studentIds: lessonStudents.map(
      (student) => student.studentId
    ),
    status: "scheduled",
    generatedKey
  };
}

const students = [
  {
    studentId: "student_TARGET_EXACT",
    status: "active",
    schoolName: "가상여자고등학교",
    grade: "고2"
  },
  {
    studentId: "student_CONTROL_INACTIVE",
    status: "withdrawn",
    schoolName: "가상여고",
    grade: "고2"
  },
  {
    studentId: "student_TARGET_ALIAS",
    status: "active",
    schoolName: "가상여고",
    grade: "2학년"
  },
  {
    studentId: "student_CONTROL_OTHER_GRADE",
    status: "active",
    schoolName: "가상여고",
    grade: "고1"
  }
];
const event = {
  type: "mathExam",
  eventId: "event_TARGET_PRE_EXAM",
  schoolName: "가상여자고등학교",
  grade: "고2",
  examSubject: "미적분",
  examCycle: "2026-2-mid",
  date: "2026-08-05"
};
const studentsSnapshot = structuredClone(students);
const eventSnapshot = structuredClone(event);

assert.deepEqual(
  createExistingPreExamLessonFromSchoolEvent(event, students),
  {
    lessonId:
      "lesson_pre_exam_event_TARGET_PRE_EXAM_blzmw4",
    classTemplateId: "",
    className: "가상여자고등학교 고2 미적분 직전수업",
    lessonType: "preExam",
    lessonTopic: "직전대비",
    sourceSchoolEventId: "event_TARGET_PRE_EXAM",
    sourceExamDate: "2026-08-05",
    examCycle: "2026-2-mid",
    date: "2026-08-04",
    dayOfWeek: "tue",
    startTime: "19:00",
    endTime: "21:00",
    color: "#fed7aa",
    teacherId: "instructor_owner_001",
    studentIds: [
      "student_TARGET_EXACT",
      "student_TARGET_ALIAS"
    ],
    status: "scheduled",
    generatedKey:
      "generated:pre_exam:event_TARGET_PRE_EXAM"
  }
);

const fallbackEvent = {
  type: "mathExam",
  schoolName: "가상중",
  grade: "중3",
  date: "2026-08-07"
};
assert.deepEqual(
  createExistingPreExamLessonFromSchoolEvent(
    fallbackEvent,
    [
      {
        studentId: "student_TARGET_FALLBACK",
        status: "active",
        schoolName: "가상중학교",
        grade: "중3"
      }
    ]
  ),
  {
    lessonId:
      "lesson_pre_exam_가상중_중3_수학_2026-08-07_xel9r",
    classTemplateId: "",
    className: "가상중 중3 수학 직전수업",
    lessonType: "preExam",
    lessonTopic: "직전대비",
    sourceSchoolEventId:
      "가상중_중3_수학_2026-08-07",
    sourceExamDate: "2026-08-07",
    examCycle: "",
    date: "2026-08-06",
    dayOfWeek: "thu",
    startTime: "19:00",
    endTime: "21:00",
    color: "#fed7aa",
    teacherId: "instructor_owner_001",
    studentIds: ["student_TARGET_FALLBACK"],
    status: "scheduled",
    generatedKey:
      "generated:pre_exam:가상중_중3_수학_2026-08-07"
  }
);

assert.equal(
  createExistingPreExamLessonFromSchoolEvent(
    { ...event, type: "holiday" },
    students
  ),
  null
);
assert.equal(
  createExistingPreExamLessonFromSchoolEvent(
    { ...event, date: "" },
    students
  ),
  null
);
assert.equal(
  createExistingPreExamLessonFromSchoolEvent(event, [
    students[1],
    students[3]
  ]),
  null
);
assert.deepEqual(students, studentsSnapshot);
assert.deepEqual(event, eventSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const builderBoundaries = [
  "function createPreExamLessonFromSchoolEvent(event = {}, students = [])",
  'if (event.type !== "mathExam" || !event.date) return null',
  "const lessonStudents = getStudentsForSchoolCalendarEvent(students, event)",
  "if (lessonStudents.length === 0) return null",
  'const subject = event.examSubject || event.subject || "수학"',
  'const gradeLabel = event.grade ? `${event.grade} ` : ""',
  "const sourceId = event.eventId ||",
  "const generatedKey = createPreExamGeneratedKey({ ...event, eventId: sourceId })",
  "lessonId: createPreExamLessonId(sourceId)",
  'classTemplateId: ""',
  'className: `${event.schoolName || "학교 미입력"} ${gradeLabel}${subject} 직전수업`',
  'lessonType: "preExam"',
  'lessonTopic: "직전대비"',
  "sourceSchoolEventId: sourceId",
  "sourceExamDate: event.date",
  'examCycle: event.examCycle || ""',
  "date: addDaysInKorea(event.date, -1)",
  "dayOfWeek: getDayKey(addDaysInKorea(event.date, -1))",
  'startTime: "19:00"',
  'endTime: "21:00"',
  'color: getStandardLessonColor({ lessonType: "preExam" })',
  'teacherId: "instructor_owner_001"',
  "studentIds: lessonStudents.map((student) => student.studentId)",
  'status: "scheduled"',
  "generatedKey"
];
let previousIndex = -1;
for (const boundary of builderBoundaries) {
  const boundaryIndex = appSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `preExam lesson builder order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.equal(
  appSource.split(
    "function createPreExamLessonFromSchoolEvent("
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "createPreExamLessonFromSchoolEvent("
  ).length - 1,
  3
);

console.log(
  "generated preExam lesson builder inventory TARGET/CONTROL fixtures passed"
);
