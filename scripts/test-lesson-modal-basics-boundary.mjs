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
const modalSource = await readFile(
  new URL("../src/domains/lessons/LessonModal.jsx", import.meta.url),
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
  // 2026-09-26 · 「큰 수업 틀」 select 은 포함 학생 영역의 「반 불러오기」 로 옮겨졌다(LessonModalStudentPicker).
  // 이 컴포넌트는 이제 유형·색상·기본 필드만 가진다.
  "lessonColorOptions.map",
  "isLessonTypeChoiceDisabled(item.lessonType)",
  "onColorOptionClick(item)",
  "onNameChange(event.target.value)",
  "onDateChange(event.target.value)",
  "onStartTimeChange(event.target.value)",
  "onEndTimeChange(event.target.value)",
  // 2026-09-26(검증 반영) · 힌트 문구가 실제 동작과 갈라지지 않게 잠근다.
  // 신규 등록은 항상 +3시간, 기존 수업 편집은 사람이 정해 둔 종료를 유지한다.
  "isEditingExistingLesson",
  "시작 시간을 바꾸면 3시간짜리 수업일 때만 종료가 따라 움직입니다. 직접 정해 둔 종료 시간은 그대로 둡니다.",
  "시작 시간을 바꾸면 종료 시간이 3시간 뒤로 맞추어집니다. 종료 시간은 직접 고칠 수 있습니다."
]) {
  assert.ok(
    basicsSource.includes(requiredSource),
    `lesson modal basics must preserve ${requiredSource}`
  );
}

const typeTabsIndex = basicsSource.indexOf('className="typeTabs"');
const childrenIndex = basicsSource.indexOf("{children}");
const colorPaletteIndex = basicsSource.indexOf('className="lessonColorPalette"');
assert.ok(
  typeTabsIndex < childrenIndex && childrenIndex < colorPaletteIndex,
  "closure children must remain between type tabs and the colour/field block"
);
// 2026-09-26 · 반 선택(수업명·시간·색상·명단 일괄 채우기)은 학생 선택 바로 옆에서만 노출한다.
for (const movedSource of ["큰 수업 틀", "onClassTemplateChange", "templates.map"]) {
  assert.equal(
    basicsSource.includes(movedSource),
    false,
    `class template entry point must not come back to the basics form: ${movedSource}`
  );
}

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
  modalSource.includes(
    'import { LessonModalBasics } from "./LessonModalBasics.jsx";'
  ),
  "LessonModal must import the controlled basics component"
);
assert.ok(
  modalSource.includes("<LessonModalBasics"),
  "LessonModal must render the controlled basics component"
);
for (const modalOwnedSource of [
  "lessonType={lessonType}",
  "onLessonTypeChange={handleLessonTypeChange}",
  "onColorOptionClick={handleColorOptionClick}",
  "onDateChange={handleDateChange}",
  "onNameChange={setName}",
  "onStartTimeChange={handleStartTimeChange}",
  "onEndTimeChange={setEndTime}"
]) {
  assert.ok(
    modalSource.includes(modalOwnedSource),
    `LessonModal must retain local draft ownership through ${modalOwnedSource}`
  );
}

assert.ok(appSource.includes('import("../domains/lessons/LessonModal.jsx")'));

console.log("lesson modal basics controlled boundary passed");
