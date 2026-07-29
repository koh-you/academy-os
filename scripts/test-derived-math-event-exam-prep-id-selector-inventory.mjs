import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

function getExistingExamPrepIdFromDerivedMathEvent(
  sourceSchoolEventId = "",
  rows = []
) {
  const sourceId = String(sourceSchoolEventId || "");
  if (!sourceId.startsWith("derived_math_")) return "";
  const sourceTail = sourceId.replace(
    /^derived_math_/,
    ""
  );
  return (
    rows.find((row) =>
      sourceTail.startsWith(`${row.examPrepId}_`)
    )?.examPrepId || ""
  );
}

const targetRows = [
  {
    examPrepId: "exam_prep_TARGET"
  },
  {
    examPrepId: "exam_prep_CONTROL"
  }
];
const targetRowsSnapshot = structuredClone(targetRows);
assert.equal(
  getExistingExamPrepIdFromDerivedMathEvent(
    "derived_math_exam_prep_TARGET_math_0",
    targetRows
  ),
  "exam_prep_TARGET"
);
assert.equal(
  getExistingExamPrepIdFromDerivedMathEvent(
    "school_event_exam_prep_TARGET_math_0",
    targetRows
  ),
  ""
);
assert.equal(
  getExistingExamPrepIdFromDerivedMathEvent(
    "derived_math_missing_math_0",
    targetRows
  ),
  ""
);
assert.equal(
  getExistingExamPrepIdFromDerivedMathEvent(
    "derived_math_examination_TARGET_math_0",
    [{ examPrepId: "exam" }]
  ),
  ""
);

const overlappingRows = [
  { examPrepId: "exam" },
  { examPrepId: "exam_prep_TARGET" }
];
assert.equal(
  getExistingExamPrepIdFromDerivedMathEvent(
    "derived_math_exam_prep_TARGET_math_0",
    overlappingRows
  ),
  "exam"
);
assert.equal(
  getExistingExamPrepIdFromDerivedMathEvent(
    "derived_math_exam_prep_TARGET_math_0",
    [...overlappingRows].reverse()
  ),
  "exam_prep_TARGET"
);
assert.equal(
  getExistingExamPrepIdFromDerivedMathEvent(),
  ""
);
assert.deepEqual(targetRows, targetRowsSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperBoundaries = [
  "function getExamPrepIdFromDerivedMathEvent(sourceSchoolEventId = \"\", rows = [])",
  "const sourceId = String(sourceSchoolEventId || \"\")",
  'if (!sourceId.startsWith("derived_math_")) return ""',
  'const sourceTail = sourceId.replace(/^derived_math_/, "")',
  "return rows.find((row) => sourceTail.startsWith(`${row.examPrepId}_`))?.examPrepId || \"\""
];
let previousIndex = -1;
for (const boundary of helperBoundaries) {
  const boundaryIndex = appSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `derived math examPrep ID selector order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.equal(
  appSource.split(
    "function getExamPrepIdFromDerivedMathEvent("
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "getExamPrepIdFromDerivedMathEvent("
  ).length - 1,
  2
);
assert.ok(
  appSource.includes(
    "getExamPrepIdFromDerivedMathEvent(lesson.sourceSchoolEventId, [row]) === row.examPrepId"
  )
);

console.log(
  "derived math event examPrep ID selector inventory TARGET/CONTROL fixtures passed"
);
