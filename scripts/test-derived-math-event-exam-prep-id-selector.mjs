import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { getExamPrepIdFromDerivedMathEvent } from "../src/domains/lessons/derivedMathEventExamPrepIdSelector.js";

const rows = [
  { examPrepId: "exam" },
  { examPrepId: "exam_prep_TARGET" },
  { examPrepId: "exam_prep_CONTROL" }
];
const rowsSnapshot = structuredClone(rows);
assert.equal(
  getExamPrepIdFromDerivedMathEvent(
    "derived_math_exam_prep_TARGET_math_0",
    rows
  ),
  "exam"
);
assert.equal(
  getExamPrepIdFromDerivedMathEvent(
    "derived_math_exam_prep_TARGET_math_0",
    [rows[1], rows[0], rows[2]]
  ),
  "exam_prep_TARGET"
);
assert.equal(
  getExamPrepIdFromDerivedMathEvent(
    "derived_math_exam_prep_CONTROL_math_1",
    rows.slice(1)
  ),
  "exam_prep_CONTROL"
);
assert.equal(
  getExamPrepIdFromDerivedMathEvent(
    "derived_math_examination_TARGET_math_0",
    rows
  ),
  ""
);
assert.equal(
  getExamPrepIdFromDerivedMathEvent(
    "event_exam_prep_TARGET_math_0",
    rows
  ),
  ""
);
assert.equal(
  getExamPrepIdFromDerivedMathEvent(),
  ""
);
assert.deepEqual(rows, rowsSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/derivedMathEventExamPrepIdSelector.js",
    import.meta.url
  ),
  "utf8"
);
assert.equal(
  appSource.split(
    'from "../domains/lessons/derivedMathEventExamPrepIdSelector.js"'
  ).length - 1,
  1
);
assert.equal(
  helperSource.split(
    "export function getExamPrepIdFromDerivedMathEvent("
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "function getExamPrepIdFromDerivedMathEvent("
  ).length - 1,
  0
);
assert.equal(
  appSource.split(
    "getExamPrepIdFromDerivedMathEvent("
  ).length - 1,
  1
);
assert.ok(
  appSource.includes(
    "getExamPrepIdFromDerivedMathEvent(lesson.sourceSchoolEventId, [row]) === row.examPrepId"
  )
);
for (const helperBoundary of [
  "const sourceId = String(sourceSchoolEventId || \"\")",
  'if (!sourceId.startsWith("derived_math_")) return ""',
  "const sourceTail = sourceId.replace(",
  "/^derived_math_/",
  "rows.find((row) =>",
  "sourceTail.startsWith(`${row.examPrepId}_`)",
  '?.examPrepId || ""'
]) {
  assert.ok(
    helperSource.includes(helperBoundary),
    `missing derived math examPrep selector boundary: ${helperBoundary}`
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
    !helperSource.includes(forbiddenEffect),
    `derived math examPrep selector crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "derived math event examPrep ID selector extraction TARGET/CONTROL fixtures passed"
);
