import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = [
  await readFile(
    new URL("../src/app/App.jsx", import.meta.url),
    "utf8"
  ),
  await readFile(
    new URL("../src/domains/lessons/generatedLessonPlanBuilder.js", import.meta.url),
    "utf8"
  ),
  await readFile(
    new URL("../src/domains/schoolCalendar/derivedSchoolCalendarPersistence.js", import.meta.url),
    "utf8"
  )
].join("\n").replace(/\r\n/g, "\n");
const identitySource = (await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonIdentityModel.js",
    import.meta.url
  ),
  "utf8"
)).replace(/\r\n/g, "\n");
assert.equal(
  appSource.split(
    "getGeneratedLessonPlanItemKey"
  ).length - 1,
  0
);
assert.equal(
  appSource.split(
    'from "../domains/lessons/generatedLessonIdentityModel.js"'
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "createGeneratedLessonIdentityModel({"
  ).length - 1,
  1
);
assert.equal(
  identitySource.split(
    "export function createGeneratedLessonIdentityModel("
  ).length - 1,
  1
);

const nextHelper = appSource.indexOf(
  "const getStudentsForSchoolCalendarEvent ="
);
const injectionCall = appSource.lastIndexOf(
  "} = createGeneratedLessonIdentityModel({",
  nextHelper
);
const injectionStart = appSource.lastIndexOf(
  "const {",
  injectionCall
);
const injectionEnd = appSource.indexOf(
  "});",
  injectionCall
);
assert.ok(
  injectionStart >= 0 &&
    injectionCall > injectionStart &&
    injectionEnd > injectionCall &&
    nextHelper > injectionEnd
);
assert.equal(
  appSource.slice(injectionEnd + 3, nextHelper).trim(),
  ""
);

const injectionSource = appSource.slice(
  injectionStart,
  injectionEnd + 3
);
const injectionBoundaries = [
  "getGeneratedLessonIdentityKeys,",
  "getGeneratedLessonKey",
  "} = createGeneratedLessonIdentityModel({",
  "addDaysInKorea,",
  "isExamPrepLesson,",
  "normalizeGradeLabel"
];
let previousIndex = -1;
for (const boundary of injectionBoundaries) {
  const boundaryIndex = injectionSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `identity boundary changed after dead helper removal: ${boundary}`
  );
  previousIndex = boundaryIndex;
}

for (const schoolEventBoundary of [
  "const getStudentsForSchoolCalendarEvent =",
  "createGeneratedSchoolEventStudentSelector({",
  "isActiveStudent,",
  "normalizeGradeLabel,",
  "schoolNamesMatch"
]) {
  assert.ok(
    appSource.includes(schoolEventBoundary),
    `school-event boundary changed after dead helper removal: ${schoolEventBoundary}`
  );
}
for (const identityConsumer of [
  "getIdentityKeys: getGeneratedLessonIdentityKeys",
  "const generatedKey = getGeneratedLessonKey(lesson)",
  "const candidateKeys = new Set([candidate.generatedKey, ...getGeneratedLessonIdentityKeys(candidate.lesson)].filter(Boolean))",
  "const identityKeys = new Set(candidates.flatMap((candidate) => getGeneratedLessonIdentityKeys(candidate)))",
  "getGeneratedLessonIdentityKeys(lesson).some((key) => identityKeys.has(key))",
  "const afterIdentityKeys = getGeneratedLessonIdentityKeys(afterCandidate)"
]) {
  assert.ok(
    appSource.includes(identityConsumer),
    `identity consumer changed after dead helper removal: ${identityConsumer}`
  );
}

console.log(
  "generated lesson plan item key dead helper boundary closeout passed"
);
