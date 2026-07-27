import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const viewSource = await readFile(
  new URL("../src/domains/lessons/LessonCalendarView.jsx", import.meta.url),
  "utf8"
);

for (const requiredSource of [
  "export function LessonCalendarView({",
  'import { FilterBar } from "../../shared/components/FilterBar.jsx";',
  'import { NavigationHeader } from "../../shared/components/NavigationHeader.jsx";',
  "viewModel.filterOptions.map",
  "viewModel.visibleLessonCount",
  "viewModel.calendarDays.map",
  "onLessonTypeFilterChange(option.id)",
  "onDateSelect(day.date)",
  "onOpenLessonJournal(pill.lesson.lessonId)",
  "onMoveDate(-30)",
  "onMoveDate(30)",
  "onAddLesson",
  "attendanceSyncPill",
  "attendanceSyncLabel",
  "showMonthlyRegularLessonOpen",
  "onOpenMonthlyRegularLessons",
  "monthlyRegularLessonOpenLabel",
  'aria-label="월간 수업 일정"',
  'role="grid"',
  'role="columnheader"',
  "aria-selected={day.isSelected}",
  "ref={day.isSelected ? selectedCalendarDayRef : null}",
  'role="gridcell"',
  "tabIndex={day.isSelected ? 0 : -1}"
]) {
  assert.ok(viewSource.includes(requiredSource), `calendar view must preserve ${requiredSource}`);
}

for (const forbiddenSource of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "apiUrl",
  "supabase",
  "notification_jobs",
  "Solapi"
]) {
  assert.equal(
    viewSource.includes(forbiddenSource),
    false,
    `calendar view must stay presentational without ${forbiddenSource}`
  );
}

assert.ok(
  appSource.includes('import { LessonCalendarView } from "../domains/lessons/LessonCalendarView.jsx";'),
  "App must import the extracted calendar view"
);
assert.ok(appSource.includes("<LessonCalendarView"), "App must render the extracted calendar view");
assert.ok(
  appSource.includes("onLessonTypeFilterChange={setLessonTypeFilter}"),
  "App must retain ownership of the filter state"
);
assert.ok(
  appSource.includes("viewModel={lessonCalendarViewModel}"),
  "App must pass the pure calendar view model to the view"
);
assert.ok(
  appSource.includes("attendanceSyncStatus={attendanceSyncStatus}") &&
    appSource.includes("selectedCalendarDayRef={selectedCalendarDayRef}") &&
    appSource.includes("showMonthlyRegularLessonOpen={!isMonthlyRegularLessonOpened"),
  "App must preserve attendance sync, focus ownership, and monthly regular opening controls"
);

console.log("lesson calendar presentational component boundary passed");
