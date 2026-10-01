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

// 2026-10-01 · 기준이 시험 종료일에서 **시험 첫날** 로 바뀌었다. 첫날(08-01 토) 직전 일요일
// 07-26 이 마지막 회차가 되고 거기서 3주를 거슬러 올라간다. 시험기간 안의 일요일은 이미
// 시험이 시작된 뒤라 더 이상 만들지 않는다(창동고 10/11 사례).
const period = {
  startDate: "2026-08-01",
  endDate: "2026-08-31"
};
const periodSnapshot = structuredClone(period);
assert.deepEqual(
  getSundayDatesForExamPeriod(period),
  [
    "2026-07-05",
    "2026-07-12",
    "2026-07-19",
    "2026-07-26"
  ]
);
assert.equal(formattedDates.length, 4);

// 종료일이 주말을 넘겨도 회차는 그대로다 — 창동고 보고의 핵심 회귀.
assert.deepEqual(
  getSundayDatesForExamPeriod({
    startDate: "2026-10-07",
    endDate: "2026-10-13"
  }),
  [
    "2026-09-13",
    "2026-09-20",
    "2026-09-27",
    "2026-10-04"
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
