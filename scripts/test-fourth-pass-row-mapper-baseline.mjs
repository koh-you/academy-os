import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [coreDataSource, examPipelineSource, packageJson] = await Promise.all([
  readFile(new URL("../api/routes/coreData.js", import.meta.url), "utf8"),
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

const coreMapperNames = listMapperNames(coreDataSource);
const examMapperNames = listMapperNames(examPipelineSource);
assert.deepEqual(coreMapperNames, expectedCoreMapperNames);
assert.deepEqual(examMapperNames, expectedExamMapperNames);
assert.equal(coreMapperNames.length, 36);
assert.equal(examMapperNames.length, 9);
assert.equal(coreMapperNames.length + examMapperNames.length, 45);

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
  getFunctionSource(coreDataSource, name).includes("updated_at: new Date().toISOString()")
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
  assert.match(getFunctionSource(coreDataSource, name), /include[A-Z]/, `${name} lost a schema fallback option`);
}

assert.match(getFunctionSource(coreDataSource, "toStudentRow"), /includeWithdrawalDetails/);
assert.match(getFunctionSource(coreDataSource, "toStudentRow"), /includeWithdrawnAt/);
assert.match(getFunctionSource(coreDataSource, "toLessonRow"), /includeScheduleMetadata/);
assert.match(getFunctionSource(coreDataSource, "toLessonRecordRow"), /includeExtendedFields/);
assert.match(getFunctionSource(coreDataSource, "toLessonRecordRow"), /includeAttendanceTimeFields/);
assert.match(getFunctionSource(coreDataSource, "toHomeworkRow"), /includeExtendedFields/);
assert.match(getFunctionSource(coreDataSource, "toAcademyReminderRow"), /includeCompletedAt/);
assert.match(getFunctionSource(examPipelineSource, "toSourcePatchRow"), /=== undefined \? undefined/);

for (const name of expectedCoreMapperNames.filter((mapperName) => mapperName.startsWith("from"))) {
  assert.doesNotMatch(getFunctionSource(coreDataSource, name), /\.\.\.row\b/, `${name} started preserving unknown DB fields`);
}
for (const name of expectedExamMapperNames.filter((mapperName) => mapperName.startsWith("from"))) {
  assert.doesNotMatch(getFunctionSource(examPipelineSource, name), /\.\.\.row\b/, `${name} started preserving unknown DB fields`);
}

const firstExtractionSource = mapperGroups["4-2b-student-class-lesson"]
  .map((name) => getFunctionSource(coreDataSource, name))
  .join("\n");
assert.doesNotMatch(
  firstExtractionSource,
  /\b(?:listRows|insertRows|patchRows|upsertRows|deleteRows|fetch|postJson|Solapi|localStorage)\b/,
  "first extraction candidate owns I/O"
);
assert.deepEqual(
  [...coreDataSource.matchAll(/^export function ((?:to|from)[A-Za-z0-9_]*Row)\s*\(/gm)].map((match) => match[1]),
  ["toLessonRow"]
);

assert.ok(
  packageJson.scripts["test:production"].includes("npm run test:fourth-pass-row-mapper-baseline"),
  "production gate is missing the mapper baseline"
);

console.log(
  "fourth-pass row mapper baseline passed · core 36/18 pairs · exam 9 · total 45 · first extraction 6"
);
