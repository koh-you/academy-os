import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const teacherViewOutletSource = await readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8");
const teacherLessonHubSource = await readFile(
  new URL("../src/domains/lessons/TeacherLessonHubV2.jsx", import.meta.url),
  "utf8"
);
const viewSource = await readFile(
  new URL("../src/domains/lessons/LessonCalendarView.jsx", import.meta.url),
  "utf8"
);
const cssSource = await readFile(new URL("../src/app/App.css", import.meta.url), "utf8");

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
  'aria-label="수업일지 달력 월 이동"',
  "onShiftMonth(-1)",
  "onShiftMonth(1)",
  "onAddLesson",
  'aria-label="수업일지 생성"',
  'className="lessonCalendarPrimaryActions"',
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
  appSource.includes('import { TeacherLessonHubV2 } from "../domains/lessons/TeacherLessonHubV2.jsx";') &&
    teacherLessonHubSource.includes('import { LessonCalendarView } from "./LessonCalendarView.jsx";'),
  "App lesson route must reach the extracted calendar view through the teacher lesson hub"
);
assert.ok(teacherLessonHubSource.includes("<LessonCalendarView"), "teacher lesson hub must render the extracted calendar view");
assert.ok(
  teacherLessonHubSource.includes("onLessonTypeFilterChange={setLessonTypeFilter}"),
  "teacher lesson hub must retain ownership of its local filter state"
);
assert.ok(
  teacherLessonHubSource.includes("viewModel={lessonCalendarViewModel}"),
  "teacher lesson hub must pass the pure calendar view model to the view"
);
assert.ok(
  teacherLessonHubSource.includes("attendanceSyncStatus={attendanceSyncStatus}") &&
    teacherLessonHubSource.includes("selectedCalendarDayRef={selectedCalendarDayRef}") &&
    teacherLessonHubSource.includes("showMonthlyRegularLessonOpen={!isMonthlyRegularLessonOpened") &&
    teacherViewOutletSource.includes("onShiftMonth: actions.handleCalendarMonthShift"),
  "lesson route must preserve attendance sync, local focus ownership, and monthly regular opening controls"
);
assert.ok(cssSource.includes(".lessonCalendarMonthNavigation"));
assert.ok(!cssSource.includes(".lessonCalendarMonthNavigation {\n  display: none"));
assert.ok(cssSource.includes(".lessonCalendarPrimaryActions"));
assert.ok(!cssSource.includes(".lessonCalendarPrimaryActions {\n  display: none"));

console.log("lesson calendar presentational component boundary passed");
