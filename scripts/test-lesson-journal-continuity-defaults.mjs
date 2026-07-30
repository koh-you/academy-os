import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const source = fs.readFileSync(path.join(scriptDir, "..", "src", "app", "App.jsx"), "utf8");

assert.match(
  source,
  /function getLessonRecordWithPreviousDefaults\(record = \{\}, previousRecord = null\) \{[\s\S]*?const lessonMaterial = record\?\.lessonMaterial\?\.trim\(\) \|\| previousRecord\?\.lessonMaterial\?\.trim\(\) \|\| "";[\s\S]*?const lessonContent = getLessonContent\(record\) \|\| getLessonContent\(previousRecord\);/,
  "현재 수업의 강의 교재·내용을 우선하고 비어 있을 때만 이전 수업 기록을 기본값으로 사용해야 합니다.",
);
assert.match(
  source,
  /const editableRecord = getEditableRecord\(recordId, persistedRecord\);[\s\S]*?const previousRecord = previousMemoContext\.previousRecord;[\s\S]*?const record = getLessonRecordWithPreviousDefaults\(editableRecord, previousRecord\);/,
  "학생별 수업일지 행에서 이전 수업 기록을 현재 기록 기본값에 연결해야 합니다.",
);
assert.match(
  source,
  /ariaLabel=\{`\$\{student\.name\} 오늘 강의 내용`\}[\s\S]*?value=\{getLessonContent\(record\)\}/,
  "강의 내용 입력칸은 이전 기록으로 보완된 현재 값을 표시해야 합니다.",
);

console.log("lesson journal continuity defaults: passed");
