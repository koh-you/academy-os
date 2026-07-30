import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createGeneratedPreExamLessonBuilder } from "../src/domains/lessons/generatedPreExamLessonBuilder.js";

const calls = [];
const targetStudent = {
  studentId: "student_TARGET_EXTRACTED"
};
const createPreExamLessonFromSchoolEvent =
  createGeneratedPreExamLessonBuilder({
    addDaysInKorea(date, days) {
      calls.push(["addDaysInKorea", date, days]);
      return "2026-08-04";
    },
    createPreExamGeneratedKey(event) {
      calls.push([
        "createPreExamGeneratedKey",
        structuredClone(event)
      ]);
      return `generated:pre_exam:${event.eventId}`;
    },
    createPreExamLessonId(sourceId) {
      calls.push(["createPreExamLessonId", sourceId]);
      return `lesson_${sourceId}`;
    },
    getDayKey(date) {
      calls.push(["getDayKey", date]);
      return "tue";
    },
    getStandardLessonColor(lesson) {
      calls.push([
        "getStandardLessonColor",
        structuredClone(lesson)
      ]);
      return "#fed7aa";
    },
    getStudentsForSchoolCalendarEvent(students, event) {
      calls.push([
        "getStudentsForSchoolCalendarEvent",
        students,
        event
      ]);
      return [targetStudent];
    }
  });

const event = {
  type: "mathExam",
  eventId: "event_TARGET_EXTRACTED",
  schoolName: "가상고",
  grade: "고2",
  subject: "수학Ⅱ",
  examCycle: "2026-2-mid",
  date: "2026-08-05"
};
const students = [
  targetStudent,
  {
    studentId: "student_CONTROL_EXTRACTED"
  }
];
const eventSnapshot = structuredClone(event);
const studentsSnapshot = structuredClone(students);

assert.deepEqual(
  createPreExamLessonFromSchoolEvent(event, students),
  {
    lessonId: "lesson_event_TARGET_EXTRACTED",
    classTemplateId: "",
    className: "가상고 고2 수학Ⅱ 직전수업",
    lessonType: "preExam",
    lessonTopic: "직전대비",
    sourceSchoolEventId: "event_TARGET_EXTRACTED",
    sourceExamDate: "2026-08-05",
    examCycle: "2026-2-mid",
    date: "2026-08-04",
    dayOfWeek: "tue",
    startTime: "19:00",
    endTime: "21:00",
    color: "#fed7aa",
    teacherId: "instructor_owner_001",
    studentIds: ["student_TARGET_EXTRACTED"],
    status: "scheduled",
    generatedKey:
      "generated:pre_exam:event_TARGET_EXTRACTED"
  }
);
assert.deepEqual(
  calls.map(([name]) => name),
  [
    "getStudentsForSchoolCalendarEvent",
    "createPreExamGeneratedKey",
    "createPreExamLessonId",
    "addDaysInKorea",
    "addDaysInKorea",
    "getDayKey",
    "getStandardLessonColor"
  ]
);
assert.equal(calls[0][1], students);
assert.equal(calls[0][2], event);
assert.deepEqual(calls[1][1], {
  ...event,
  eventId: "event_TARGET_EXTRACTED"
});
assert.deepEqual(students, studentsSnapshot);
assert.deepEqual(event, eventSnapshot);

let guardedSelectorCalls = 0;
const guardedBuilder =
  createGeneratedPreExamLessonBuilder({
    addDaysInKorea() {
      throw new Error("date helper crossed guard");
    },
    createPreExamGeneratedKey() {
      throw new Error("key helper crossed guard");
    },
    createPreExamLessonId() {
      throw new Error("id helper crossed guard");
    },
    getDayKey() {
      throw new Error("day helper crossed guard");
    },
    getStandardLessonColor() {
      throw new Error("color helper crossed guard");
    },
    getStudentsForSchoolCalendarEvent() {
      guardedSelectorCalls += 1;
      return [];
    }
  });
assert.equal(
  guardedBuilder(
    { type: "holiday", date: "2026-08-05" },
    students
  ),
  null
);
assert.equal(
  guardedBuilder(
    { type: "mathExam", date: "" },
    students
  ),
  null
);
assert.equal(guardedSelectorCalls, 0);
assert.equal(
  guardedBuilder(
    { type: "mathExam", date: "2026-08-05" },
    students
  ),
  null
);
assert.equal(guardedSelectorCalls, 1);

const appSource = [
  await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
  ),
  await readFile(
    new URL("../src/domains/lessons/generatedLessonPlanBuilder.js", import.meta.url),
    "utf8"
  )
].join("\n");
const builderSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedPreExamLessonBuilder.js",
    import.meta.url
  ),
  "utf8"
);
assert.equal(
  appSource.split(
    'from "../domains/lessons/generatedPreExamLessonBuilder.js"'
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "createGeneratedPreExamLessonBuilder({"
  ).length - 1,
  1
);
assert.equal(
  builderSource.split(
    "export function createGeneratedPreExamLessonBuilder("
  ).length - 1,
  1
);
assert.ok(
  appSource.includes(
    "const createPreExamLessonFromSchoolEvent ="
  )
);
for (const dependency of [
  "addDaysInKorea,",
  "createPreExamGeneratedKey,",
  "createPreExamLessonId,",
  "getDayKey,",
  "getStandardLessonColor,",
  "getStudentsForSchoolCalendarEvent"
]) {
  assert.ok(
    appSource.includes(dependency),
    `missing generated preExam builder dependency: ${dependency}`
  );
}
for (const forbiddenEffect of [
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
    !builderSource.includes(forbiddenEffect),
    `generated preExam lesson builder crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "generated preExam lesson builder extraction TARGET/CONTROL fixtures passed"
);
