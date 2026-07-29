import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createExamPeriodSundayDateSelector } from "../src/domains/lessons/examPeriodSundayDateSelector.js";

const getSundayDatesForExamPeriod =
  createExamPeriodSundayDateSelector({
    toKoreaDateString(date) {
      return `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}-${String(
        date.getDate()
      ).padStart(2, "0")}`;
    }
  });

const period = {
  startDate: "2026-08-01",
  endDate: "2026-08-31"
};
const periodSnapshot = structuredClone(period);
assert.deepEqual(
  getSundayDatesForExamPeriod(period),
  [
    "2026-08-02",
    "2026-08-09",
    "2026-08-16",
    "2026-08-23",
    "2026-08-30"
  ]
);
assert.deepEqual(
  getSundayDatesForExamPeriod({
    date: "2026-08-12"
  }),
  [
    "2026-07-19",
    "2026-07-26",
    "2026-08-02",
    "2026-08-09"
  ]
);
assert.deepEqual(
  getSundayDatesForExamPeriod({
    endDate: "2026-08-16"
  }),
  [
    "2026-07-26",
    "2026-08-02",
    "2026-08-09",
    "2026-08-16"
  ]
);
assert.deepEqual(
  getSundayDatesForExamPeriod({
    startDate: "2026-08-01"
  }),
  []
);
assert.deepEqual(
  getSundayDatesForExamPeriod({
    endDate: "invalid"
  }),
  []
);
assert.deepEqual(period, periodSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const selectorSource = await readFile(
  new URL(
    "../src/domains/lessons/examPeriodSundayDateSelector.js",
    import.meta.url
  ),
  "utf8"
);
assert.equal(
  appSource.split(
    'from "../domains/lessons/examPeriodSundayDateSelector.js"'
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "createExamPeriodSundayDateSelector({"
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "getSundayDatesForExamPeriod("
  ).length - 1,
  1
);
assert.equal(
  selectorSource.split(
    "export function createExamPeriodSundayDateSelector("
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "function getSundayDatesForExamPeriod("
  ).length - 1,
  0
);
const appBoundaries = [
  "const getSundayDatesForExamPeriod =",
  "createExamPeriodSundayDateSelector({",
  "toKoreaDateString",
  "function toKoreaDateString(date)",
  "getSundayDatesForExamPeriod(period).forEach((date) => {"
];
let previousIndex = -1;
for (const boundary of appBoundaries) {
  const boundaryIndex = appSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `Sunday selector App order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
for (const selectorBoundary of [
  "return function getSundayDatesForExamPeriod(",
  "if (!period.endDate && !period.date) return []",
  "const prepSundays = [3, 2, 1, 0].map(",
  "toKoreaDateString(date)",
  "const inPeriodSundays = []",
  "while (cursor <= end) {",
  "toKoreaDateString(cursor)",
  "...prepSundays,",
  "...inPeriodSundays",
  "].sort()"
]) {
  assert.ok(
    selectorSource.includes(selectorBoundary),
    `missing Sunday selector closeout boundary: ${selectorBoundary}`
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
    `Sunday selector closeout crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "exam period Sunday dates boundary closeout passed"
);
