import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createPreExamGeneratedKey } from "../src/domains/lessons/generatedPreExamKeyBuilder.js";

function createExistingPreExamGeneratedKey(event = {}) {
  const sourceId =
    event.eventId ||
    `${event.schoolName}_${event.grade}_${
      event.examSubject || event.subject || "math"
    }_${event.date}`;
  return `generated:pre_exam:${sourceId}`;
}

const explicitEvent = {
  eventId: "event_TARGET_EXPLICIT",
  schoolName: "CONTROL 학교",
  grade: "CONTROL 학년",
  examSubject: "CONTROL 과목",
  date: "2026-08-01"
};
const examSubjectFallbackEvent = {
  schoolName: "가상고",
  grade: "2",
  examSubject: "미적분",
  subject: "CONTROL 수학",
  date: "2026-08-02"
};
const subjectFallbackEvent = {
  schoolName: "가상중",
  grade: "3",
  subject: "대수",
  date: "2026-08-03"
};
const mathFallbackEvent = {
  schoolName: "가상학교",
  grade: "1",
  date: "2026-08-04"
};
const fixtures = [
  [
    explicitEvent,
    "generated:pre_exam:event_TARGET_EXPLICIT"
  ],
  [
    examSubjectFallbackEvent,
    "generated:pre_exam:가상고_2_미적분_2026-08-02"
  ],
  [
    subjectFallbackEvent,
    "generated:pre_exam:가상중_3_대수_2026-08-03"
  ],
  [
    mathFallbackEvent,
    "generated:pre_exam:가상학교_1_math_2026-08-04"
  ]
];
const fixtureSnapshot = structuredClone(fixtures);

for (const [event, expected] of fixtures) {
  assert.equal(
    createExistingPreExamGeneratedKey(event),
    expected
  );
  assert.equal(
    createPreExamGeneratedKey(event),
    expected
  );
}
assert.equal(
  createExistingPreExamGeneratedKey(),
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
const builderBoundaries = [
  "export function createPreExamGeneratedKey(event = {})",
  "const sourceId =",
  "event.eventId ||",
  'event.examSubject || event.subject || "math"',
  "return `generated:pre_exam:${sourceId}`"
];
let previousIndex = -1;
for (const boundary of builderBoundaries) {
  const boundaryIndex = helperSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `generated pre-exam key builder order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.equal(
  appSource.split("createPreExamGeneratedKey(").length - 1,
  1
);
assert.ok(
  appSource.includes(
    'from "../domains/lessons/generatedPreExamKeyBuilder.js"'
  )
);
assert.equal(
  lessonBuilderSource.split(
    "createPreExamGeneratedKey("
  ).length - 1,
  1
);
assert.ok(
  lessonBuilderSource.includes(
    "const generatedKey = createPreExamGeneratedKey({"
  )
);
assert.ok(
  lessonBuilderSource.includes("eventId: sourceId")
);
assert.ok(
  appSource.includes(
    "const generatedKey = createPreExamGeneratedKey(event)"
  )
);
assert.ok(!helperSource.includes("fetch("));
assert.ok(!helperSource.includes("/api/"));
assert.ok(!helperSource.includes("postJson"));
assert.ok(!helperSource.includes("setLessons"));

console.log(
  "generated pre-exam key builder inventory TARGET/CONTROL fixtures passed"
);
