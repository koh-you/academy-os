import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createGeneratedPreExamLessonBuilder } from "../src/domains/lessons/generatedPreExamLessonBuilder.js";

const targetStudent = {
  studentId: "student_TARGET_CLOSEOUT"
};
const aliasTargetStudent = {
  studentId: "student_TARGET_ALIAS_CLOSEOUT"
};
const calls = [];
const builder = createGeneratedPreExamLessonBuilder({
  addDaysInKorea(date, days) {
    calls.push(["addDaysInKorea", date, days]);
    return "2026-08-10";
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
    return `lesson_pre_exam_${sourceId}`;
  },
  getDayKey(date) {
    calls.push(["getDayKey", date]);
    return "mon";
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
    return [targetStudent, aliasTargetStudent];
  }
});

const event = {
  type: "mathExam",
  eventId: "event_TARGET_CLOSEOUT",
  schoolName: "가상여고",
  grade: "고2",
  examSubject: "확률과 통계",
  examCycle: "2026-2-mid",
  date: "2026-08-11"
};
const students = [
  targetStudent,
  aliasTargetStudent,
  {
    studentId: "student_CONTROL_CLOSEOUT"
  }
];
const eventSnapshot = structuredClone(event);
const studentsSnapshot = structuredClone(students);

assert.deepEqual(builder(event, students), {
  lessonId:
    "lesson_pre_exam_event_TARGET_CLOSEOUT",
  classTemplateId: "",
  className: "가상여고 고2 확률과 통계 직전수업",
  lessonType: "preExam",
  lessonTopic: "직전대비",
  sourceSchoolEventId: "event_TARGET_CLOSEOUT",
  sourceExamDate: "2026-08-11",
  examCycle: "2026-2-mid",
  date: "2026-08-10",
  dayOfWeek: "mon",
  startTime: "19:00",
  endTime: "21:00",
  color: "#fed7aa",
  teacherId: "instructor_owner_001",
  studentIds: [
    "student_TARGET_CLOSEOUT",
    "student_TARGET_ALIAS_CLOSEOUT"
  ],
  status: "scheduled",
  generatedKey:
    "generated:pre_exam:event_TARGET_CLOSEOUT"
});
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
assert.deepEqual(event, eventSnapshot);
assert.deepEqual(students, studentsSnapshot);

let guardSelectorCalls = 0;
const guardedBuilder = createGeneratedPreExamLessonBuilder({
  addDaysInKorea() {
    throw new Error("date helper crossed empty target guard");
  },
  createPreExamGeneratedKey() {
    throw new Error("key helper crossed empty target guard");
  },
  createPreExamLessonId() {
    throw new Error("id helper crossed empty target guard");
  },
  getDayKey() {
    throw new Error("day helper crossed empty target guard");
  },
  getStandardLessonColor() {
    throw new Error("color helper crossed empty target guard");
  },
  getStudentsForSchoolCalendarEvent() {
    guardSelectorCalls += 1;
    return [];
  }
});
assert.equal(
  guardedBuilder(
    { type: "holiday", date: "2026-08-11" },
    students
  ),
  null
);
assert.equal(guardSelectorCalls, 0);
assert.equal(
  guardedBuilder(
    { type: "mathExam", date: "2026-08-11" },
    students
  ),
  null
);
assert.equal(guardSelectorCalls, 1);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
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
  appSource.split(
    "createPreExamLessonFromSchoolEvent("
  ).length - 1,
  2
);
assert.equal(
  builderSource.split(
    "export function createGeneratedPreExamLessonBuilder("
  ).length - 1,
  1
);

const injectionBoundaries = [
  "const createPreExamLessonFromSchoolEvent =",
  "createGeneratedPreExamLessonBuilder({",
  "addDaysInKorea,",
  "createPreExamGeneratedKey,",
  "createPreExamLessonId,",
  "getDayKey,",
  "getStandardLessonColor,",
  "getStudentsForSchoolCalendarEvent"
];
let previousInjectionIndex = -1;
for (const boundary of injectionBoundaries) {
  const boundaryIndex = appSource.indexOf(
    boundary,
    previousInjectionIndex + 1
  );
  assert.ok(
    boundaryIndex > previousInjectionIndex,
    `generated preExam builder injection order changed: ${boundary}`
  );
  previousInjectionIndex = boundaryIndex;
}
for (const consumerBoundary of [
  "function handleSyncPreExamLessonFromSchoolEvent(event)",
  "const lesson = createPreExamLessonFromSchoolEvent(event, students)",
  'setLessons((current) => upsertById(current, nextLesson, "lessonId"))',
  'postJson("/api/lessons", { lesson: nextLesson })',
  "function buildGeneratedLessonPlan(",
  "lesson: { ...lesson, generatedKey }"
]) {
  assert.ok(
    appSource.includes(consumerBoundary),
    `missing App-owned preExam builder consumer: ${consumerBoundary}`
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
    `generated preExam builder closeout crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "generated preExam lesson builder boundary closeout passed"
);
