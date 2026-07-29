import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createExamPeriodSundayDateSelector } from "../src/domains/lessons/examPeriodSundayDateSelector.js";

function toExistingKoreaDateString(date) {
  return `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

function getExistingSundayDatesForExamPeriod(
  period = {}
) {
  if (!period.endDate && !period.date) return [];
  const startDate =
    period.startDate ||
    period.date ||
    period.endDate;
  const endDate = period.endDate || period.date;
  const start = new Date(
    `${startDate}T00:00:00+09:00`
  );
  const end = new Date(
    `${endDate}T00:00:00+09:00`
  );
  if (
    Number.isNaN(start.getTime()) ||
    Number.isNaN(end.getTime())
  ) {
    return [];
  }
  const day = end.getDay();
  const lastSunday = new Date(end);
  lastSunday.setDate(end.getDate() - day);
  const prepSundays = [3, 2, 1, 0].map(
    (offset) => {
      const date = new Date(lastSunday);
      date.setDate(
        lastSunday.getDate() - offset * 7
      );
      return toExistingKoreaDateString(date);
    }
  );
  const inPeriodSundays = [];
  const cursor = new Date(start);
  while (cursor <= end) {
    if (cursor.getDay() === 0) {
      inPeriodSundays.push(
        toExistingKoreaDateString(cursor)
      );
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return [
    ...new Set([
      ...prepSundays,
      ...inPeriodSundays
    ])
  ].sort();
}

const extractedSelector =
  createExamPeriodSundayDateSelector({
    toKoreaDateString:
      toExistingKoreaDateString
  });

const fullPeriod = {
  startDate: "2026-08-01",
  endDate: "2026-08-31"
};
const fullPeriodSnapshot =
  structuredClone(fullPeriod);
assert.deepEqual(
  getExistingSundayDatesForExamPeriod(fullPeriod),
  [
    "2026-08-02",
    "2026-08-09",
    "2026-08-16",
    "2026-08-23",
    "2026-08-30"
  ]
);
assert.deepEqual(
  extractedSelector(fullPeriod),
  getExistingSundayDatesForExamPeriod(fullPeriod)
);
assert.deepEqual(
  getExistingSundayDatesForExamPeriod({
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
  extractedSelector({
    date: "2026-08-12"
  }),
  getExistingSundayDatesForExamPeriod({
    date: "2026-08-12"
  })
);
assert.deepEqual(
  getExistingSundayDatesForExamPeriod({
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
  getExistingSundayDatesForExamPeriod({
    startDate: "2026-08-20",
    endDate: "2026-08-10"
  }),
  [
    "2026-07-19",
    "2026-07-26",
    "2026-08-02",
    "2026-08-09"
  ]
);
assert.deepEqual(
  getExistingSundayDatesForExamPeriod({
    startDate: "2026-08-01"
  }),
  []
);
assert.deepEqual(
  getExistingSundayDatesForExamPeriod({
    startDate: "invalid",
    endDate: "invalid"
  }),
  []
);
assert.deepEqual(
  getExistingSundayDatesForExamPeriod(),
  []
);
assert.deepEqual(fullPeriod, fullPeriodSnapshot);

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
const helperBoundaries = [
  "export function createExamPeriodSundayDateSelector({",
  "return function getSundayDatesForExamPeriod(",
  "if (!period.endDate && !period.date) return []",
  "const startDate =",
  "period.startDate ||",
  "period.date ||",
  "period.endDate",
  "const endDate = period.endDate || period.date",
  "const start = new Date(",
  '`${startDate}T00:00:00+09:00`',
  "const end = new Date(",
  '`${endDate}T00:00:00+09:00`',
  "Number.isNaN(start.getTime()) ||",
  "Number.isNaN(end.getTime())",
  "const day = end.getDay()",
  "const lastSunday = new Date(end)",
  "lastSunday.setDate(end.getDate() - day)",
  "const prepSundays = [3, 2, 1, 0].map(",
  "return toKoreaDateString(date)",
  "const inPeriodSundays = []",
  "const cursor = new Date(start)",
  "while (cursor <= end) {",
  "if (cursor.getDay() === 0)",
  "toKoreaDateString(cursor)",
  "cursor.setDate(cursor.getDate() + 1)",
  "...prepSundays,",
  "...inPeriodSundays",
  "].sort()"
];
let previousIndex = -1;
for (const boundary of helperBoundaries) {
  const boundaryIndex = selectorSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `exam period Sunday date order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
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
for (const appBoundary of [
  'from "../domains/lessons/examPeriodSundayDateSelector.js"',
  "const getSundayDatesForExamPeriod =",
  "createExamPeriodSundayDateSelector({",
  "toKoreaDateString",
  "getSundayDatesForExamPeriod,"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing Sunday date selector App boundary: ${appBoundary}`
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
  "exam period Sunday dates inventory TARGET/CONTROL fixtures passed"
);
