import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createExamPeriodSundayDateSelector } from "../src/domains/lessons/examPeriodSundayDateSelector.js";

const formattedDates = [];
const getSundayDatesForExamPeriod =
  createExamPeriodSundayDateSelector({
    toKoreaDateString(date) {
      const value = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}-${String(
        date.getDate()
      ).padStart(2, "0")}`;
      formattedDates.push(value);
      return value;
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
assert.ok(formattedDates.length > 4);
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
const candidateSource = await readFile(
  new URL(
    "../src/domains/lessons/examPrepLessonCandidateBuilder.js",
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
assert.equal(
  appSource.split(
    "getSundayDatesForExamPeriod("
  ).length - 1,
  0
);
assert.equal(
  candidateSource.split(
    "getSundayDatesForExamPeriod("
  ).length - 1,
  1
);
for (const appBoundary of [
  "const getSundayDatesForExamPeriod =",
  "createExamPeriodSundayDateSelector({",
  "toKoreaDateString",
  "getSundayDatesForExamPeriod,"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing extracted Sunday date App boundary: ${appBoundary}`
  );
}
assert.ok(
  candidateSource.includes(
    "getSundayDatesForExamPeriod("
  )
);
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
    `exam period Sunday selector crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "exam period Sunday dates extraction TARGET/CONTROL fixtures passed"
);
