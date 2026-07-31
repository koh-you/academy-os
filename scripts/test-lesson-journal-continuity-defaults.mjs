import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { resolveLessonJournalEditableText } from "../src/domains/lessons/lessonJournalEditableFieldsModel.js";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const source = fs.readFileSync(path.join(scriptDir, "..", "src", "app", "App.jsx"), "utf8");
const editableFieldsModelSource = fs.readFileSync(
  path.join(scriptDir, "..", "src", "domains", "lessons", "lessonJournalEditableFieldsModel.js"),
  "utf8",
);

assert.match(
  source,
  /function getLessonRecordWithPreviousDefaults\(record = \{\}, previousRecord = null\) \{[\s\S]*?const lessonMaterial = resolveLessonJournalEditableText\(\{[\s\S]*?currentValues: \[record\?\.lessonMaterial\],[\s\S]*?fallbackValues: \[previousRecord\?\.lessonMaterial\][\s\S]*?const lessonContent = resolveLessonJournalEditableText\(\{[\s\S]*?currentValues: \[record\?\.lessonProgress, record\?\.progress, record\?\.lessonContent\],[\s\S]*?fallbackValues: \[previousRecord\?\.lessonProgress, previousRecord\?\.progress, previousRecord\?\.lessonContent\]/,
  "현재 수업의 강의 교재·내용을 우선하고 비어 있을 때만 이전 수업 기록을 기본값으로 사용해야 합니다.",
);
assert.equal(
  resolveLessonJournalEditableText({
    currentValues: ["개념원리 "],
    fallbackValues: ["직전 교재"]
  }),
  "개념원리 ",
  "현재 입력값 끝의 공백은 다음 단어를 계속 입력할 수 있도록 보존해야 합니다.",
);
assert.equal(
  resolveLessonJournalEditableText({
    currentValues: ["", "도형의 이동 "],
    fallbackValues: ["직전 진도"]
  }),
  "도형의 이동 ",
  "레거시 현재 진도 필드도 끝 공백을 보존해야 합니다.",
);
assert.equal(
  resolveLessonJournalEditableText({
    currentValues: ["   "],
    fallbackValues: [" 직전 교재 "]
  }),
  "직전 교재",
  "현재 입력이 비어 있으면 기존처럼 정리된 이전 기록을 기본값으로 사용해야 합니다.",
);
assert.match(
  source,
  /const editableRecord = getEditableRecord\(recordId, persistedRecord\);[\s\S]*?const previousRecord = previousMemoContext\.previousRecord;[\s\S]*?const record = getLessonRecordWithPreviousDefaults\(editableRecord, previousRecord\);[\s\S]*?const attendanceDisplay = isClosureLesson[\s\S]*?getAttendanceDisplay\(record, attendanceLesson, attendanceSettings\.lateGraceMinutes\);/,
  "학생별 수업일지 행은 출결을 계산하기 전에 이전 기록으로 보완한 현재 record를 만들어야 합니다.",
);
assert.match(
  editableFieldsModelSource,
  /ariaLabel: `\$\{student\.name\} 오늘 강의 내용`[\s\S]*?value: record\.lessonProgress \?\? record\.progress \?\? ""/,
  "강의 내용 입력칸은 이전 기록으로 보완된 현재 값을 표시해야 합니다.",
);

console.log("lesson journal continuity defaults: passed");
