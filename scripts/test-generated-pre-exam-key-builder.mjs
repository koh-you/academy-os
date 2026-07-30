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
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedPreExamKeyBuilder.js",
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
assert.equal(
  appSource.split(
    'from "../domains/lessons/generatedPreExamKeyBuilder.js"'
  ).length - 1,
  1
);
assert.equal(
  appSource.split("createPreExamGeneratedKey(").length - 1,
  1
);
assert.equal(
  helperSource.split(
    "export function createPreExamGeneratedKey("
  ).length - 1,
  1
);
for (const consumerBoundary of [
  "createGeneratedPreExamLessonBuilder({",
  "createPreExamGeneratedKey,",
  "function buildGeneratedLessonPlan(",
  "const generatedKey = createPreExamGeneratedKey(event)"
]) {
  assert.ok(
    appSource.includes(consumerBoundary),
    `missing generated pre-exam key App consumer: ${consumerBoundary}`
  );
}
assert.ok(
  lessonBuilderSource.includes(
    "const generatedKey = createPreExamGeneratedKey({"
  )
);
assert.ok(
  lessonBuilderSource.includes("eventId: sourceId")
);
assert.ok(
  !appSource.includes(
    "function createPreExamGeneratedKey(event = {})"
  )
);
for (const helperBoundary of [
  "export function createPreExamGeneratedKey(event = {})",
  "const sourceId =",
  "event.eventId ||",
  'event.examSubject || event.subject || "math"',
  "return `generated:pre_exam:${sourceId}`"
]) {
  assert.ok(
    helperSource.includes(helperBoundary),
    `missing generated pre-exam key helper boundary: ${helperBoundary}`
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
    `generated pre-exam key builder crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated pre-exam key builder TARGET/CONTROL extraction fixtures passed"
);
