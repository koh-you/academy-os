import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const basicsSource = await readFile(
  new URL("../src/domains/lessons/LessonModalBasics.jsx", import.meta.url),
  "utf8"
);

for (const requiredSource of [
  "export function LessonModalBasics({",
  '["class", "🏹 수업"]',
  '["examPrep", "🗓 시험대비"]',
  '["closure", "⏸ 휴강"]',
  "isLessonTypeChoiceDisabled(value)",
  "onLessonTypeChange(value)",
  "{children}",
  "큰 수업 틀",
  '<option value="">직접 입력 일정</option>',
  "templates.map",
  "lessonColorOptions.map",
  "isLessonTypeChoiceDisabled(item.lessonType)",
  "onColorOptionClick(item)",
  "onClassTemplateChange(event.target.value)",
  "onNameChange(event.target.value)",
  "onDateChange(event.target.value)",
  "onStartTimeChange(event.target.value)",
  "onEndTimeChange(event.target.value)"
]) {
  assert.ok(
    basicsSource.includes(requiredSource),
    `lesson modal basics must preserve ${requiredSource}`
  );
}

const typeTabsIndex = basicsSource.indexOf('className="typeTabs"');
const childrenIndex = basicsSource.indexOf("{children}");
const templateIndex = basicsSource.indexOf("큰 수업 틀");
assert.ok(
  typeTabsIndex < childrenIndex && childrenIndex < templateIndex,
  "closure children must remain between type tabs and the template fields"
);

for (const forbiddenSource of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "apiUrl",
  "supabase",
  "notification_jobs",
  "Solapi",
  "onSubmit"
]) {
  assert.equal(
    basicsSource.includes(forbiddenSource),
    false,
    `lesson modal basics must stay controlled without ${forbiddenSource}`
  );
}

assert.ok(
  appSource.includes(
    'import { LessonModalBasics } from "../domains/lessons/LessonModalBasics.jsx";'
  ),
  "App must import the extracted basics component"
);
assert.ok(
  appSource.includes("<LessonModalBasics"),
  "App must render the extracted basics component"
);
for (const appOwnedSource of [
  "lessonType={lessonType}",
  "onLessonTypeChange={handleLessonTypeChange}",
  "onClassTemplateChange={handleTemplateChange}",
  "onColorOptionClick={handleColorOptionClick}",
  "onDateChange={handleDateChange}",
  "onNameChange={setName}",
  "onStartTimeChange={setStartTime}",
  "onEndTimeChange={setEndTime}"
]) {
  assert.ok(
    appSource.includes(appOwnedSource),
    `App must retain draft ownership through ${appOwnedSource}`
  );
}

console.log("lesson modal basics controlled boundary passed");
