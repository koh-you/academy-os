import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createPreExamMathLabelInference } from "../src/domains/lessons/preExamMathLabelInference.js";

const normalizationInputs = [];
const inferMathExamLabelFromPreExamLesson =
  createPreExamMathLabelInference({
    normalizeGradeLabel(grade = "") {
      normalizationInputs.push(grade);
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
  className:
    "가상여자고등학교 고2 미적분 직전수업"
};
const row = {
  schoolName: "가상여자고등학교",
  grade: "2학년",
  subject: "수학"
};
const lessonSnapshot = structuredClone(lesson);
const rowSnapshot = structuredClone(row);
assert.equal(
  inferMathExamLabelFromPreExamLesson(lesson, row),
  "미적분"
);
assert.equal(normalizationInputs.at(-1), "2학년");
assert.equal(
  inferMathExamLabelFromPreExamLesson(
    {
      className:
        "가상중학교 중3 대수   직전수업   "
    },
    {
      schoolName: "가상중학교",
      grade: "중등 3학년",
      subject: "수학"
    }
  ),
  "대수"
);
for (const [className, subject] of [
  ["가상여자고등학교 고2 수학 직전수업", "수학"],
  [
    "가상여자고등학교 고2 수학시험 직전수업",
    "수학"
  ],
  [
    "가상여자고등학교 고2 확률과 통계 직전수업",
    "확률과 통계"
  ],
  ["가상여자고등학교 고2 2026 직전수업", "수학"],
  ["", "수학"]
]) {
  assert.equal(
    inferMathExamLabelFromPreExamLesson(
      { className },
      {
        schoolName: "가상여자고등학교",
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
const inferenceSource = await readFile(
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
  inferenceSource.split(
    "export function createPreExamMathLabelInference("
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "inferMathExamLabelFromPreExamLesson("
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "function inferMathExamLabelFromPreExamLesson("
  ).length - 1,
  0
);
const appBoundaries = [
  "const inferMathExamLabelFromPreExamLesson =",
  "createPreExamMathLabelInference({",
  "normalizeGradeLabel",
  "function repairExamPrepRowsFromPersistedPreExamLessons(",
  "label: previousEntry?.label || inferMathExamLabelFromPreExamLesson(lesson, row)"
];
let previousIndex = -1;
for (const boundary of appBoundaries) {
  const boundaryIndex = appSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `preExam label closeout order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
for (const inferenceBoundary of [
  "return function inferMathExamLabelFromPreExamLesson(",
  "normalizeGradeLabel(row.grade || \"\")",
  '.replace(/\\s*직전수업\\s*$/, "")',
  '.replace(schoolName, "")',
  '.replace(grade, "")',
  'if (!text || /^\\d+$/.test(text)) return ""',
  '["수학", "수학시험", row.subject].includes(text)',
  "return text"
]) {
  assert.ok(
    inferenceSource.includes(inferenceBoundary),
    `missing preExam label closeout boundary: ${inferenceBoundary}`
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
    !inferenceSource.includes(forbiddenEffect),
    `preExam label closeout crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "preExam math label inference boundary closeout passed"
);
