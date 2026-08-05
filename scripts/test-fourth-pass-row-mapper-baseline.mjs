import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [
  coreDataSource,
  coreIdentityMapperSource,
  intakeSpecialLectureMapperSource,
  lessonActivityMapperSource,
  learningCalendarMapperSource,
  examPipelineSource,
  packageJson
] = await Promise.all([
  readFile(new URL("../api/routes/coreData.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/persistence/coreIdentityRowMappers.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/persistence/intakeSpecialLectureRowMappers.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/persistence/lessonActivityRowMappers.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/persistence/learningCalendarRowMappers.js", import.meta.url), "utf8"),
  readFile(new URL("../api/routes/examAnalysisPipeline.js", import.meta.url), "utf8"),
  readFile(new URL("../package.json", import.meta.url), "utf8").then(JSON.parse)
]);

const expectedCoreMapperNames = [
  "toStudentRow",
  "fromStudentRow",
  "toStudentIntakeApplicantRow",
  "fromStudentIntakeApplicantRow",
  "toSpecialLectureApplicationRow",
  "fromSpecialLectureApplicationRow",
  "toSpecialLectureEnrollmentRow",
  "fromSpecialLectureEnrollmentRow",
  "toClassTemplateRow",
  "fromClassTemplateRow",
  "toLessonRow",
  "fromLessonRow",
  "toLessonRecordRow",
  "fromLessonRecordRow",
  "toHomeworkRow",
  "fromHomeworkRow",
  "toTestSessionRow",
  "fromTestSessionRow",
  "toTestAttemptRow",
  "fromTestAttemptRow",
  "toMakeupTaskRow",
  "fromMakeupTaskRow",
  "toExamPrepRow",
  "fromExamPrepRow",
  "toSchoolEventRow",
  "fromSchoolEventRow",
  "toAcademyReminderRow",
  "fromAcademyReminderRow",
  "toAppStateRow",
  "fromAppStateRow",
  "toResourceMaterialRow",
  "fromResourceMaterialRow",
  "toNotificationJobRow",
  "fromNotificationJobRow",
  "toAttendanceEventRow",
  "fromAttendanceEventRow"
];

const expectedExamMapperNames = [
  "toRunRow",
  "fromRunRow",
  "toSourceRow",
  "toSourcePatchRow",
  "fromSourceRow",
  "fromQuestionRow",
  "fromAiJobRow",
  "toEventRow",
  "fromEventRow"
];

const expectedExtractedCoreMapperNames = [
  "toStudentRow",
  "fromStudentRow",
  "toClassTemplateRow",
  "fromClassTemplateRow",
  "toLessonRow",
  "fromLessonRow"
];

const expectedExtractedIntakeSpecialMapperNames = [
  "toStudentIntakeApplicantRow",
  "fromStudentIntakeApplicantRow",
  "toSpecialLectureApplicationRow",
  "fromSpecialLectureApplicationRow",
  "toSpecialLectureEnrollmentRow",
  "fromSpecialLectureEnrollmentRow"
];

const expectedExtractedLessonActivityMapperNames = [
  "toLessonRecordRow",
  "fromLessonRecordRow",
  "toHomeworkRow",
  "fromHomeworkRow",
  "toMakeupTaskRow",
  "fromMakeupTaskRow",
  "toAttendanceEventRow",
  "fromAttendanceEventRow"
];

const expectedExtractedLearningCalendarMapperNames = [
  "toTestSessionRow",
  "fromTestSessionRow",
  "toTestAttemptRow",
  "fromTestAttemptRow",
  "toExamPrepRow",
  "fromExamPrepRow",
  "toSchoolEventRow",
  "fromSchoolEventRow",
  "toAcademyReminderRow",
  "fromAcademyReminderRow"
];

const expectedExtractedMapperNames = [
  ...expectedExtractedCoreMapperNames,
  ...expectedExtractedIntakeSpecialMapperNames,
  ...expectedExtractedLessonActivityMapperNames,
  ...expectedExtractedLearningCalendarMapperNames
];

const mapperGroups = {
  "4-2b-student-class-lesson": [
    "toStudentRow",
    "fromStudentRow",
    "toClassTemplateRow",
    "fromClassTemplateRow",
    "toLessonRow",
    "fromLessonRow"
  ],
  "4-2c-student-intake-special-lecture": [
    "toStudentIntakeApplicantRow",
    "fromStudentIntakeApplicantRow",
    "toSpecialLectureApplicationRow",
    "fromSpecialLectureApplicationRow",
    "toSpecialLectureEnrollmentRow",
    "fromSpecialLectureEnrollmentRow"
  ],
  "4-2d-lesson-activity": [
    "toLessonRecordRow",
    "fromLessonRecordRow",
    "toHomeworkRow",
    "fromHomeworkRow",
    "toMakeupTaskRow",
    "fromMakeupTaskRow",
    "toAttendanceEventRow",
    "fromAttendanceEventRow"
  ],
  "4-2e-learning-calendar": [
    "toTestSessionRow",
    "fromTestSessionRow",
    "toTestAttemptRow",
    "fromTestAttemptRow",
    "toExamPrepRow",
    "fromExamPrepRow",
    "toSchoolEventRow",
    "fromSchoolEventRow",
    "toAcademyReminderRow",
    "fromAcademyReminderRow"
  ],
  "4-2f-platform-source": [
    "toAppStateRow",
    "fromAppStateRow",
    "toResourceMaterialRow",
    "fromResourceMaterialRow",
    "toNotificationJobRow",
    "fromNotificationJobRow"
  ],
  "4-2g-exam-pipeline": expectedExamMapperNames
};

function listMapperNames(source) {
  return [...source.matchAll(/^(?:export\s+)?function\s+((?:to|from)[A-Za-z0-9_]*Row)\s*\(/gm)]
    .map((match) => match[1]);
}

function getFunctionSource(source, name) {
  const pattern = new RegExp(`^(?:export\\s+)?function\\s+${name}\\s*\\(`, "m");
  const match = source.match(pattern);
  assert.ok(match, `${name} is missing`);
  const start = match.index;
  let signatureCursor = start + match[0].length;
  let parenthesisDepth = 1;
  while (signatureCursor < source.length && parenthesisDepth > 0) {
    if (source[signatureCursor] === "(") parenthesisDepth += 1;
    if (source[signatureCursor] === ")") parenthesisDepth -= 1;
    signatureCursor += 1;
  }
  assert.equal(parenthesisDepth, 0, `${name} signature is not closed`);
  const openingBrace = source.indexOf("{", signatureCursor);
  assert.ok(openingBrace >= 0, `${name} opening brace is missing`);
  let depth = 1;
  let cursor = openingBrace + 1;
  while (cursor < source.length && depth > 0) {
    if (source[cursor] === "{") depth += 1;
    if (source[cursor] === "}") depth -= 1;
    cursor += 1;
  }
  assert.equal(depth, 0, `${name} closing brace is missing`);
  return source.slice(start, cursor);
}

const coreRouteMapperNames = listMapperNames(coreDataSource);
const extractedCoreMapperNames = listMapperNames(coreIdentityMapperSource);
const extractedIntakeSpecialMapperNames = listMapperNames(intakeSpecialLectureMapperSource);
const extractedLessonActivityMapperNames = listMapperNames(lessonActivityMapperSource);
const extractedLearningCalendarMapperNames = listMapperNames(learningCalendarMapperSource);
const coreMapperNames = [
  ...coreRouteMapperNames,
  ...extractedCoreMapperNames,
  ...extractedIntakeSpecialMapperNames,
  ...extractedLessonActivityMapperNames,
  ...extractedLearningCalendarMapperNames
];
const examMapperNames = listMapperNames(examPipelineSource);
assert.deepEqual(extractedCoreMapperNames, expectedExtractedCoreMapperNames);
assert.deepEqual(extractedIntakeSpecialMapperNames, expectedExtractedIntakeSpecialMapperNames);
assert.deepEqual(extractedLessonActivityMapperNames, expectedExtractedLessonActivityMapperNames);
assert.deepEqual(extractedLearningCalendarMapperNames, expectedExtractedLearningCalendarMapperNames);
assert.deepEqual(
  coreRouteMapperNames,
  expectedCoreMapperNames.filter((name) => !expectedExtractedMapperNames.includes(name))
);
assert.deepEqual([...coreMapperNames].sort(), [...expectedCoreMapperNames].sort());
assert.deepEqual(examMapperNames, expectedExamMapperNames);
assert.equal(coreMapperNames.length, 36);
assert.equal(examMapperNames.length, 9);
assert.equal(coreMapperNames.length + examMapperNames.length, 45);

function getCoreMapperSource(name) {
  if (expectedExtractedCoreMapperNames.includes(name)) {
    return getFunctionSource(coreIdentityMapperSource, name);
  }
  if (expectedExtractedIntakeSpecialMapperNames.includes(name)) {
    return getFunctionSource(intakeSpecialLectureMapperSource, name);
  }
  if (expectedExtractedLessonActivityMapperNames.includes(name)) {
    return getFunctionSource(lessonActivityMapperSource, name);
  }
  if (expectedExtractedLearningCalendarMapperNames.includes(name)) {
    return getFunctionSource(learningCalendarMapperSource, name);
  }
  return getFunctionSource(coreDataSource, name);
}

const pairedCoreFamilies = expectedCoreMapperNames
  .filter((name) => name.startsWith("to"))
  .map((name) => name.slice(2, -3));
assert.equal(pairedCoreFamilies.length, 18);
for (const family of pairedCoreFamilies) {
  assert.ok(expectedCoreMapperNames.includes(`from${family}Row`), `${family} row mapper is one-way`);
}

const classifiedMapperNames = Object.values(mapperGroups).flat();
assert.equal(new Set(classifiedMapperNames).size, 45);
assert.deepEqual(
  [...classifiedMapperNames].sort(),
  [...expectedCoreMapperNames, ...expectedExamMapperNames].sort()
);

const coreUpdatedAtWriters = expectedCoreMapperNames.filter((name) =>
  getCoreMapperSource(name).includes("updated_at: new Date().toISOString()")
);
assert.deepEqual(coreUpdatedAtWriters, [
  "toStudentRow",
  "toStudentIntakeApplicantRow",
  "toSpecialLectureApplicationRow",
  "toSpecialLectureEnrollmentRow",
  "toClassTemplateRow",
  "toLessonRow",
  "toLessonRecordRow",
  "toHomeworkRow",
  "toTestSessionRow",
  "toTestAttemptRow",
  "toMakeupTaskRow",
  "toExamPrepRow",
  "toSchoolEventRow",
  "toAcademyReminderRow",
  "toAppStateRow",
  "toResourceMaterialRow",
  "toNotificationJobRow"
]);
assert.deepEqual(
  expectedExamMapperNames.filter((name) =>
    getFunctionSource(examPipelineSource, name).includes("updated_at: new Date().toISOString()")
  ),
  ["toRunRow", "toSourceRow", "toSourcePatchRow"]
);

const optionBearingMappers = [
  "toStudentRow",
  "toLessonRow",
  "toLessonRecordRow",
  "toHomeworkRow",
  "toAcademyReminderRow"
];
for (const name of optionBearingMappers) {
  assert.match(getCoreMapperSource(name), /include[A-Z]/, `${name} lost a schema fallback option`);
}

assert.match(getCoreMapperSource("toStudentRow"), /includeWithdrawalDetails/);
assert.match(getCoreMapperSource("toStudentRow"), /includeWithdrawnAt/);
assert.match(getCoreMapperSource("toLessonRow"), /includeScheduleMetadata/);
assert.match(getCoreMapperSource("toLessonRecordRow"), /includeExtendedFields/);
assert.match(getCoreMapperSource("toLessonRecordRow"), /includeAttendanceTimeFields/);
assert.match(getCoreMapperSource("toHomeworkRow"), /includeExtendedFields/);
assert.match(getCoreMapperSource("toAcademyReminderRow"), /includeCompletedAt/);
assert.match(getFunctionSource(examPipelineSource, "toSourcePatchRow"), /=== undefined \? undefined/);

for (const name of expectedCoreMapperNames.filter((mapperName) => mapperName.startsWith("from"))) {
  assert.doesNotMatch(getCoreMapperSource(name), /\.\.\.row\b/, `${name} started preserving unknown DB fields`);
}
for (const name of expectedExamMapperNames.filter((mapperName) => mapperName.startsWith("from"))) {
  assert.doesNotMatch(getFunctionSource(examPipelineSource, name), /\.\.\.row\b/, `${name} started preserving unknown DB fields`);
}

const firstExtractionSource = mapperGroups["4-2b-student-class-lesson"]
  .map((name) => getCoreMapperSource(name))
  .join("\n");
assert.doesNotMatch(
  firstExtractionSource,
  /\b(?:listRows|insertRows|patchRows|upsertRows|deleteRows|fetch|postJson|Solapi|localStorage)\b/,
  "first extraction candidate owns I/O"
);
assert.equal(/^import\s/m.test(coreIdentityMapperSource), false, "pure mapper module must not import I/O or route state");
assert.equal(
  /^import\s/m.test(intakeSpecialLectureMapperSource),
  false,
  "intake/special mapper module must not import I/O, Tally, or route state"
);
assert.equal(
  /^import\s/m.test(lessonActivityMapperSource),
  false,
  "lesson activity mapper module must not import I/O, attendance orchestration, or provider state"
);
assert.equal(
  /^import\s/m.test(learningCalendarMapperSource),
  false,
  "learning/calendar mapper module must not import I/O, reconciliation, AI, or provider state"
);
assert.deepEqual(
  [...coreIdentityMapperSource.matchAll(/^export function ((?:to|from)[A-Za-z0-9_]*Row)\s*\(/gm)]
    .map((match) => match[1]),
  expectedExtractedCoreMapperNames
);
assert.deepEqual(
  [...intakeSpecialLectureMapperSource.matchAll(/^export function ((?:to|from)[A-Za-z0-9_]*Row)\s*\(/gm)]
    .map((match) => match[1]),
  expectedExtractedIntakeSpecialMapperNames
);
assert.deepEqual(
  [...lessonActivityMapperSource.matchAll(/^export function ((?:to|from)[A-Za-z0-9_]*Row)\s*\(/gm)]
    .map((match) => match[1]),
  expectedExtractedLessonActivityMapperNames
);
assert.deepEqual(
  [...learningCalendarMapperSource.matchAll(/^export function ((?:to|from)[A-Za-z0-9_]*Row)\s*\(/gm)]
    .map((match) => match[1]),
  expectedExtractedLearningCalendarMapperNames
);
assert.match(coreDataSource, /from "\.\.\/\.\.\/src\/shared\/persistence\/coreIdentityRowMappers\.js";/);
assert.match(coreDataSource, /from "\.\.\/\.\.\/src\/shared\/persistence\/intakeSpecialLectureRowMappers\.js";/);
assert.match(coreDataSource, /from "\.\.\/\.\.\/src\/shared\/persistence\/lessonActivityRowMappers\.js";/);
assert.match(coreDataSource, /from "\.\.\/\.\.\/src\/shared\/persistence\/learningCalendarRowMappers\.js";/);
assert.match(coreDataSource, /export \{ toLessonRow \};/);
assert.match(coreIdentityMapperSource, /export function normalizeSpecialLectureStudentSchedules/);
assert.doesNotMatch(coreDataSource, /function normalizeSpecialLectureStudentSchedules/);
for (const name of expectedExtractedMapperNames) {
  assert.doesNotMatch(coreDataSource, new RegExp(`function\\s+${name}\\s*\\(`));
}
assert.match(lessonActivityMapperSource, /export function parseJsonNote/);
assert.doesNotMatch(coreDataSource, /function parseJsonNote\s*\(/);
assert.match(getCoreMapperSource("fromMakeupTaskRow"), /\.\.\.metadata/);
assert.match(getCoreMapperSource("fromSchoolEventRow"), /\.\.\.payload/);
for (const helperName of ["getDefaultExamCycleForDate", "normalizeAcademyReminderStatus", "createAcademyReminderId"]) {
  assert.match(learningCalendarMapperSource, new RegExp(`export function\\s+${helperName}\\s*\\(`));
  assert.doesNotMatch(coreDataSource, new RegExp(`function\\s+${helperName}\\s*\\(`));
}
for (const helperName of [
  "createSpecialLectureApplicationId",
  "normalizeSpecialLectureApplicationStatus",
  "createSpecialLectureEnrollmentId",
  "normalizeSpecialLectureEnrollmentStatus",
  "normalizeSpecialLectureRequestedSessionPlans",
  "normalizeSpecialLectureEnrollmentSessionIds",
  "normalizeSpecialLectureEnrollmentSessionPlans"
]) {
  assert.match(intakeSpecialLectureMapperSource, new RegExp(`export function\\s+${helperName}\\s*\\(`));
  assert.doesNotMatch(coreDataSource, new RegExp(`function\\s+${helperName}\\s*\\(`));
}

assert.ok(
  packageJson.scripts["test:production"].includes("npm run test:fourth-pass-row-mapper-baseline"),
  "production gate is missing the mapper baseline"
);
assert.ok(
  packageJson.scripts["test:production"].includes("npm run test:core-identity-row-mappers"),
  "production gate is missing the extracted mapper behavior contract"
);
assert.ok(
  packageJson.scripts["test:production"].includes("npm run test:intake-special-row-mappers"),
  "production gate is missing the intake/special mapper behavior contract"
);
assert.ok(
  packageJson.scripts["test:production"].includes("npm run test:lesson-activity-row-mappers"),
  "production gate is missing the lesson activity mapper behavior contract"
);
assert.ok(
  packageJson.scripts["test:production"].includes("npm run test:learning-calendar-row-mappers"),
  "production gate is missing the learning/calendar mapper behavior contract"
);

console.log(
  "fourth-pass row mapper boundary passed · core 36/18 pairs · extracted 30 · exam 9 · total 45"
);
