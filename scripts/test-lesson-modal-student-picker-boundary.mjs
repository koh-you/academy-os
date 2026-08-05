import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const pickerSource = await readFile(
  new URL("../src/domains/lessons/LessonModalStudentPicker.jsx", import.meta.url),
  "utf8"
);
const modalSource = await readFile(
  new URL("../src/domains/lessons/LessonModal.jsx", import.meta.url),
  "utf8"
);

for (const requiredSource of [
  "export function LessonModalStudentPicker({",
  'import { EmptyState } from "../../shared/components/EmptyState.jsx";',
  'import { SearchField } from "../../shared/components/SearchField.jsx";',
  'import { SectionHeader } from "../../shared/components/SectionHeader.jsx";',
  "selectedStudentIds.length",
  "onChange={onSearchChange}",
  'label="포함 학생 검색"',
  "result={`${filteredStudents.length}명`}",
  "onSelectVisible",
  "groupedStudents.map",
  "onSelectGroup(group.students)",
  "onDeselectGroup(group.students)",
  "selectedStudentIds.includes(student.studentId)",
  "onToggleStudent(student.studentId, isSelected)",
  "휴강 전환 중에는 기존 명단",
  "보이는 학생 선택",
  "검색 결과가 없습니다.",
  "선택 가능한 학생이 없습니다.",
  'onClick={() => onSearchChange("")}'
]) {
  assert.ok(
    pickerSource.includes(requiredSource),
    `student picker must preserve ${requiredSource}`
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
    pickerSource.includes(forbiddenSource),
    false,
    `student picker must stay controlled without ${forbiddenSource}`
  );
}

assert.ok(
  modalSource.includes(
    'import { LessonModalStudentPicker } from "./LessonModalStudentPicker.jsx";'
  ),
  "LessonModal must import the controlled student picker"
);
assert.ok(
  modalSource.includes("<LessonModalStudentPicker"),
  "LessonModal must render the controlled student picker"
);
for (const modalOwnedHandler of [
  "function selectVisibleLessonModalStudents()",
  "function selectLessonModalStudentGroup(groupStudents)",
  "function deselectLessonModalStudentGroup(groupStudents)",
  "function toggleLessonModalStudent(studentId, isSelected)"
]) {
  assert.ok(
    modalSource.includes(modalOwnedHandler),
    `LessonModal must retain selection state ownership through ${modalOwnedHandler}`
  );
}

assert.ok(appSource.includes('import("../domains/lessons/LessonModal.jsx")'));

console.log("lesson modal student picker controlled boundary passed");
