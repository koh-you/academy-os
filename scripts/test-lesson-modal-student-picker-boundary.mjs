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
  // 2026-09-26 · 학년 그룹마다 있던 전체 선택/해제 두 버튼 대신 헤더의 토글 하나로 모았다.
  "isEverySelected ? onClearAll : onSelectAll",
  // 2026-09-26(검증 반영) · 토글 대상이 "화면에 보이는 목록" 이 아니라 재원생 전체임을 라벨이 드러낸다.
  "isEverySelected ? `전체 ${activeStudentCount}명 해제` : `전체 ${activeStudentCount}명 선택`",
  // 2026-09-26 · 옆 폼에 있던 「큰 수업 틀」 select 을 명단 바로 위의 「반 불러오기」 로 옮겼다.
  "반 불러오기",
  "onClassTemplateChange(event.target.value)",
  '<option value="">직접 입력 일정</option>',
  "templates.map",
  "<HelpTip",
  "selectedStudentIds.includes(student.studentId)",
  "onToggleStudent(student.studentId, isSelected)",
  "휴강 전환 중에는 기존 명단",
  // 2026-09-26(검증 반영) · 검색 중에는 헤더 토글을 숨긴다. 대상이 재원생 전체라 화면에 보이지 않는 학생까지 해제한다.
  "const isSearching = Boolean(search.trim());",
  "{isSearching ? null : (",
  // 검색 중일 때만 렌더한다 — 검색어가 없으면 헤더의 「전체 선택」 과 같은 일을 한다.
  "{isSearching ? (",
  "검색 결과 {filteredStudents.length}명만 선택",
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
  "function selectAllLessonModalStudents()",
  "function clearAllLessonModalStudents()",
  "function toggleLessonModalStudent(studentId, isSelected)",
  "onClassTemplateChange={handleTemplateChange}"
]) {
  assert.ok(
    modalSource.includes(modalOwnedHandler),
    `LessonModal must retain selection state ownership through ${modalOwnedHandler}`
  );
}

assert.ok(appSource.includes('import("../domains/lessons/LessonModal.jsx")'));

console.log("lesson modal student picker controlled boundary passed");
