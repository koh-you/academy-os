import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

function normalizeExistingGradeLabel(grade = "") {
  const value = String(grade).trim();
  if (value.includes("1")) {
    return value.includes("중") ? "중1" : "고1";
  }
  if (value.includes("2")) {
    return value.includes("중") ? "중2" : "고2";
  }
  if (value.includes("3")) {
    return value.includes("중") ? "중3" : "고3";
  }
  return value;
}

function inferExistingMathExamLabelFromPreExamLesson(
  lesson = {},
  row = {}
) {
  const schoolName = String(
    row.schoolName || ""
  ).trim();
  const grade = normalizeExistingGradeLabel(
    row.grade || ""
  );
  const text = String(lesson.className || "")
    .replace(/\s*직전수업\s*$/, "")
    .replace(schoolName, "")
    .replace(grade, "")
    .trim();
  if (!text || /^\d+$/.test(text)) return "";
  if (
    ["수학", "수학시험", row.subject].includes(text)
  ) {
    return "";
  }
  return text;
}

const lesson = {
  lessonId: "lesson_TARGET_LABEL",
  className:
    "가상여자고등학교 고2 미적분 직전수업"
};
const row = {
  examPrepId: "exam_prep_TARGET_LABEL",
  schoolName: "가상여자고등학교",
  grade: "2학년",
  subject: "수학"
};
const lessonSnapshot = structuredClone(lesson);
const rowSnapshot = structuredClone(row);
assert.equal(
  inferExistingMathExamLabelFromPreExamLesson(
    lesson,
    row
  ),
  "미적분"
);
assert.equal(
  inferExistingMathExamLabelFromPreExamLesson(
    {
      className:
        "가상여자고등학교 고2 수학 직전수업"
    },
    row
  ),
  ""
);
assert.equal(
  inferExistingMathExamLabelFromPreExamLesson(
    {
      className:
        "가상여자고등학교 고2 수학시험 직전수업"
    },
    row
  ),
  ""
);
assert.equal(
  inferExistingMathExamLabelFromPreExamLesson(
    {
      className:
        "가상여자고등학교 고2 확률과 통계 직전수업"
    },
    { ...row, subject: "확률과 통계" }
  ),
  ""
);
assert.equal(
  inferExistingMathExamLabelFromPreExamLesson(
    {
      className:
        "가상여자고등학교 고2 2026 직전수업"
    },
    row
  ),
  ""
);
assert.equal(
  inferExistingMathExamLabelFromPreExamLesson(
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
assert.equal(
  inferExistingMathExamLabelFromPreExamLesson(),
  ""
);
assert.deepEqual(lesson, lessonSnapshot);
assert.deepEqual(row, rowSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperBoundaries = [
  "function inferMathExamLabelFromPreExamLesson(lesson = {}, row = {})",
  'const schoolName = String(row.schoolName || "").trim()',
  'const grade = normalizeGradeLabel(row.grade || "")',
  'const text = String(lesson.className || "")',
  '.replace(/\\s*직전수업\\s*$/, "")',
  '.replace(schoolName, "")',
  '.replace(grade, "")',
  ".trim()",
  'if (!text || /^\\d+$/.test(text)) return ""',
  'if (["수학", "수학시험", row.subject].includes(text)) return ""',
  "return text"
];
let previousIndex = -1;
for (const boundary of helperBoundaries) {
  const boundaryIndex = appSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `preExam math label inference order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.equal(
  appSource.split(
    "function inferMathExamLabelFromPreExamLesson("
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "inferMathExamLabelFromPreExamLesson("
  ).length - 1,
  2
);
assert.ok(
  appSource.includes(
    "label: previousEntry?.label || inferMathExamLabelFromPreExamLesson(lesson, row)"
  )
);

console.log(
  "preExam math label inference inventory TARGET/CONTROL fixtures passed"
);
