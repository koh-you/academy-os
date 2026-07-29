import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createPreExamGeneratedKey } from "../src/domains/lessons/generatedPreExamKeyBuilder.js";

const fixtures = [
  [
    {
      eventId: "event_TARGET_EXPLICIT",
      schoolName: "CONTROL 학교",
      grade: "CONTROL 학년",
      examSubject: "CONTROL 과목",
      date: "2026-08-01"
    },
    "generated:pre_exam:event_TARGET_EXPLICIT"
  ],
  [
    {
      schoolName: "가상고",
      grade: "2",
      examSubject: "미적분",
      subject: "CONTROL 수학",
      date: "2026-08-02"
    },
    "generated:pre_exam:가상고_2_미적분_2026-08-02"
  ],
  [
    {
      schoolName: "가상중",
      grade: "3",
      subject: "대수",
      date: "2026-08-03"
    },
    "generated:pre_exam:가상중_3_대수_2026-08-03"
  ],
  [
    {
      schoolName: "가상학교",
      grade: "1",
      date: "2026-08-04"
    },
    "generated:pre_exam:가상학교_1_math_2026-08-04"
  ]
];
const fixtureSnapshot = structuredClone(fixtures);
for (const [event, expected] of fixtures) {
  assert.equal(createPreExamGeneratedKey(event), expected);
}
assert.equal(
  createPreExamGeneratedKey(),
  "generated:pre_exam:undefined_undefined_math_undefined"
);
assert.deepEqual(fixtures, fixtureSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedPreExamKeyBuilder.js",
    import.meta.url
  ),
  "utf8"
);
const modulePath =
  'from "../domains/lessons/generatedPreExamKeyBuilder.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
assert.equal(
  appSource.split("createPreExamGeneratedKey(").length - 1,
  2
);
assert.equal(
  helperSource.split(
    "export function createPreExamGeneratedKey("
  ).length - 1,
  1
);

const lessonBuilderStart = appSource.indexOf(
  "function createPreExamLessonFromSchoolEvent("
);
const lessonBuilderEnd = appSource.indexOf(
  "function getExamPrepIdFromDerivedMathEvent(",
  lessonBuilderStart
);
assert.ok(
  lessonBuilderStart >= 0 &&
    lessonBuilderEnd > lessonBuilderStart
);
const lessonBuilderSource = appSource.slice(
  lessonBuilderStart,
  lessonBuilderEnd
);
const lessonBoundaries = [
  'if (event.type !== "mathExam" || !event.date) return null',
  "const lessonStudents =",
  "if (lessonStudents.length === 0) return null",
  "const sourceId =",
  "const generatedKey = createPreExamGeneratedKey({ ...event, eventId: sourceId })",
  "return {",
  "generatedKey"
];
let previousLessonIndex = -1;
for (const boundary of lessonBoundaries) {
  const boundaryIndex = lessonBuilderSource.indexOf(
    boundary,
    previousLessonIndex + 1
  );
  assert.ok(
    boundaryIndex > previousLessonIndex,
    `pre-exam lesson key consumer order changed: ${boundary}`
  );
  previousLessonIndex = boundaryIndex;
}

const planStart = appSource.indexOf(
  "function buildGeneratedLessonPlan("
);
const planEnd = appSource.indexOf(
  "function formatKoreanDateTime(",
  planStart
);
assert.ok(planStart >= 0 && planEnd > planStart);
const planSource = appSource.slice(planStart, planEnd);
const planBoundaries = [
  "buildExamCalendarEvents(rows)",
  '.filter((event) => event.type === "mathExam")',
  "const lesson = createPreExamLessonFromSchoolEvent(event, students)",
  "if (!lesson) return",
  "const generatedKey = createPreExamGeneratedKey(event)",
  "candidates.push({",
  "generatedKey,",
  "lesson: { ...lesson, generatedKey }"
];
let previousPlanIndex = -1;
for (const boundary of planBoundaries) {
  const boundaryIndex = planSource.indexOf(
    boundary,
    previousPlanIndex + 1
  );
  assert.ok(
    boundaryIndex > previousPlanIndex,
    `generated plan key consumer order changed: ${boundary}`
  );
  previousPlanIndex = boundaryIndex;
}

for (const helperBoundary of [
  "const sourceId =",
  "event.eventId ||",
  'event.examSubject || event.subject || "math"',
  "return `generated:pre_exam:${sourceId}`"
]) {
  assert.ok(
    helperSource.includes(helperBoundary),
    `missing generated pre-exam key boundary: ${helperBoundary}`
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
  "new Date",
  "Date.now",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `generated pre-exam key closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated pre-exam key builder boundary closeout passed"
);
