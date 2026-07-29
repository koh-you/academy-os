import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createPreExamMathLabelInference } from "../src/domains/lessons/preExamMathLabelInference.js";

const normalizedGrades = [];
const inferMathExamLabelFromPreExamLesson =
  createPreExamMathLabelInference({
    normalizeGradeLabel(grade = "") {
      normalizedGrades.push(grade);
      const value = String(grade).trim();
      if (value.includes("3")) {
        return value.includes("중") ? "중3" : "고3";
      }
      if (value.includes("2")) {
        return value.includes("중") ? "중2" : "고2";
      }
      return value;
    }
  });

const lesson = {
  className: "가상고 고2 미적분 직전수업"
};
const row = {
  schoolName: "가상고",
  grade: "2학년",
  subject: "수학"
};
const lessonSnapshot = structuredClone(lesson);
const rowSnapshot = structuredClone(row);
assert.equal(
  inferMathExamLabelFromPreExamLesson(lesson, row),
  "미적분"
);
assert.equal(normalizedGrades.at(-1), "2학년");
assert.equal(
  inferMathExamLabelFromPreExamLesson(
    {
      className:
        "가상중 중3 대수   직전수업   "
    },
    {
      schoolName: "가상중",
      grade: "중등 3학년",
      subject: "수학"
    }
  ),
  "대수"
);
for (const [className, subject] of [
  ["가상고 고2 수학 직전수업", "수학"],
  ["가상고 고2 수학시험 직전수업", "수학"],
  ["가상고 고2 확률과 통계 직전수업", "확률과 통계"],
  ["가상고 고2 2026 직전수업", "수학"],
  ["", "수학"]
]) {
  assert.equal(
    inferMathExamLabelFromPreExamLesson(
      { className },
      {
        schoolName: "가상고",
        grade: "고2",
        subject
      }
    ),
    ""
  );
}
assert.deepEqual(lesson, lessonSnapshot);
assert.deepEqual(row, rowSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/preExamMathLabelInference.js",
    import.meta.url
  ),
  "utf8"
);
assert.equal(
  appSource.split(
    'from "../domains/lessons/preExamMathLabelInference.js"'
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "createPreExamMathLabelInference({"
  ).length - 1,
  1
);
assert.equal(
  helperSource.split(
    "export function createPreExamMathLabelInference("
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "function inferMathExamLabelFromPreExamLesson("
  ).length - 1,
  0
);
assert.equal(
  appSource.split(
    "inferMathExamLabelFromPreExamLesson("
  ).length - 1,
  1
);
for (const appBoundary of [
  "const inferMathExamLabelFromPreExamLesson =",
  "createPreExamMathLabelInference({",
  "normalizeGradeLabel",
  "label: previousEntry?.label || inferMathExamLabelFromPreExamLesson(lesson, row)"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing extracted preExam label App boundary: ${appBoundary}`
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
    `preExam label inference crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "preExam math label inference extraction TARGET/CONTROL fixtures passed"
);
