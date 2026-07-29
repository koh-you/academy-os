import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { getExamPrepIdFromDerivedMathEvent } from "../src/domains/lessons/derivedMathEventExamPrepIdSelector.js";

const rows = [
  { examPrepId: "exam" },
  { examPrepId: "exam_prep_TARGET" },
  { examPrepId: "exam_prep_CONTROL" }
];
const rowsSnapshot = structuredClone(rows);
const sourceId =
  "derived_math_exam_prep_TARGET_math_0";
assert.equal(
  getExamPrepIdFromDerivedMathEvent(sourceId, rows),
  "exam"
);
assert.equal(
  getExamPrepIdFromDerivedMathEvent(
    sourceId,
    [rows[1], rows[0], rows[2]]
  ),
  "exam_prep_TARGET"
);
assert.equal(
  getExamPrepIdFromDerivedMathEvent(
    "derived_math_exam_prep_CONTROL_math_0",
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
    "school_event_exam_prep_TARGET_math_0",
    rows
  ),
  ""
);
assert.equal(
  getExamPrepIdFromDerivedMathEvent(
    "derived_math_missing_math_0",
    rows
  ),
  ""
);
assert.deepEqual(rows, rowsSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const selectorSource = await readFile(
  new URL(
    "../src/domains/lessons/derivedMathEventExamPrepIdSelector.js",
    import.meta.url
  ),
  "utf8"
);
const repairSource = await readFile(
  new URL(
    "../src/domains/lessons/persistedPreExamRowRepair.js",
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
  selectorSource.split(
    "export function getExamPrepIdFromDerivedMathEvent("
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "getExamPrepIdFromDerivedMathEvent("
  ).length - 1,
  0
);
assert.equal(
  repairSource.split(
    "getExamPrepIdFromDerivedMathEvent("
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "function getExamPrepIdFromDerivedMathEvent("
  ).length - 1,
  0
);
const repairBoundaries = [
  "return function repairExamPrepRowsFromPersistedPreExamLessons(",
  "return rows.map((row) => {",
  "getExamPrepIdFromDerivedMathEvent(",
  "lesson.sourceSchoolEventId,",
  "[row]",
  ") === row.examPrepId",
  "if (!sourceLessons.length) return row",
  "let didRepair = false"
];
let previousIndex = -1;
for (const boundary of repairBoundaries) {
  const boundaryIndex = repairSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `derived math repair boundary order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
for (const selectorBoundary of [
  "export function getExamPrepIdFromDerivedMathEvent(",
  "const sourceId = String(sourceSchoolEventId || \"\")",
  'if (!sourceId.startsWith("derived_math_")) return ""',
  "const sourceTail = sourceId.replace(",
  "/^derived_math_/",
  "rows.find((row) =>",
  "sourceTail.startsWith(`${row.examPrepId}_`)",
  '?.examPrepId || ""'
]) {
  assert.ok(
    selectorSource.includes(selectorBoundary),
    `missing derived math selector closeout boundary: ${selectorBoundary}`
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
    !selectorSource.includes(forbiddenEffect),
    `derived math selector closeout crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "derived math event examPrep ID selector boundary closeout passed"
);
