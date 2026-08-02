import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const teacherLessonHubSource = await readFile(
  new URL("../src/domains/lessons/TeacherLessonHubV2.jsx", import.meta.url),
  "utf8"
);
const saveControllerSource = await readFile(
  new URL("../src/domains/lessons/lessonModalSaveController.js", import.meta.url),
  "utf8"
);
const attendanceSyncHookSource = await readFile(
  new URL("../src/domains/lessons/useAttendanceRecordSync.js", import.meta.url),
  "utf8"
);

function section(source, start, end) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert.ok(startIndex >= 0, `missing section start: ${start}`);
  assert.ok(endIndex > startIndex, `missing section end: ${end}`);
  return source.slice(startIndex, endIndex);
}

for (const extractedBoundary of [
  'from "../domains/lessons/lessonCalendarModel.js"',
  'from "../domains/lessons/TeacherLessonHubV2.jsx"',
  'from "../domains/lessons/lessonModalDraftModel.js"',
  'from "../domains/lessons/lessonModalDraftTransitions.js"',
  'from "../domains/lessons/lessonModalPayloadBuilders.js"',
  'from "../domains/lessons/lessonModalSaveController.js"',
  'from "../domains/lessons/lessonModalSaveSnapshot.js"',
  'from "../domains/lessons/LessonModalActions.jsx"',
  'from "../domains/lessons/LessonModalBasics.jsx"',
  'from "../domains/lessons/LessonModalClosurePanel.jsx"',
  'from "../domains/lessons/LessonModalStudentPicker.jsx"',
  'from "../domains/lessons/AttendanceKiosk.jsx"'
]) {
  assert.ok(appSource.includes(extractedBoundary), `missing extracted boundary: ${extractedBoundary}`);
}

for (const lessonHubBoundary of [
  'from "./LessonCalendarView.jsx"',
  'from "./lessonCalendarModel.js"',
  'from "./useLessonCalendarKeyboardNavigation.js"'
]) {
  assert.ok(teacherLessonHubSource.includes(lessonHubBoundary), `missing lesson hub boundary: ${lessonHubBoundary}`);
}

const calendarHub = teacherLessonHubSource;
for (const required of [
  "useLessonCalendarKeyboardNavigation({",
  "createLessonCalendarViewModel({",
  "<LessonCalendarView",
  "<LessonJournalErrorBoundary",
  "<LessonJournalDetail"
]) {
  assert.ok(calendarHub.includes(required), `calendar hub must preserve ${required}`);
}
for (const forbidden of ["/api/", "fetch(", "postJson", "localStorage", "notification_jobs"]) {
  assert.equal(calendarHub.includes(forbidden), false, `calendar hub must stay side-effect free: ${forbidden}`);
}

const riskyCalendarActions = section(
  appSource,
  "function handleCopySelectedLesson()",
  "function handleOpenLessonJournal("
);
for (const required of [
  "function handlePasteLessonToSelectedDate()",
  'postJson("/api/homeworks/bulk"',
  'postJson("/api/lessons"',
  "function handleUndoLessonAction()",
  'postJson("/api/lesson-records"',
  "function confirmDeleteLesson(lessonId)",
  "lessonCancelRequestsRef.current.set"
]) {
  assert.ok(
    riskyCalendarActions.includes(required),
    `high-risk calendar action must remain App-owned: ${required}`
  );
}

const saveAdapter = section(
  appSource,
  "async function saveLessonModalLessons",
  "async function handleOpenMonthlyRegularLessons"
);
for (const required of [
  "saveLessonModalLessonsWithVerification({",
  '"/api/lessons/bulk"',
  "`/api/lessons?verify=lesson-modal-${Date.now()}`",
  "setLessons(filterActiveLessons(persistedLessons))"
]) {
  assert.ok(saveAdapter.includes(required), `App save adapter must preserve ${required}`);
}

const updateAdapter = section(
  appSource,
  "async function handleUpdateLesson",
  "function handleDeleteLesson"
);
for (const required of [
  "isLessonClosureConversion(",
  "`/api/lessons/closure-preflight?lessonId=",
  "getLessonClosureSourceSnapshot(",
  "getLessonClosureRoster(",
  "markGeneratedLessonManualOverride("
]) {
  assert.ok(updateAdapter.includes(required), `closure boundary must remain App-owned: ${required}`);
}

for (const reservedAppBoundary of [
  "async function handleAttendancePinPreview(",
  "async function handleAttendancePinCheck(",
  "function LessonJournalDetail("
]) {
  assert.ok(
    appSource.includes(reservedAppBoundary),
    `next roadmap boundary must remain in App: ${reservedAppBoundary}`
  );
}
assert.ok(
  appSource.includes("useAttendanceRecordSync({") &&
    attendanceSyncHookSource.includes("async function syncAttendanceRecords()"),
  "attendance polling must remain connected through its extracted hook boundary"
);

for (const forbidden of [
  "/api/",
  "fetch(",
  "postJson",
  "getJson",
  "setLessons",
  "useState",
  "useEffect",
  "notification_jobs",
  "Solapi"
]) {
  assert.equal(
    saveControllerSource.includes(forbidden),
    false,
    `injected save controller must stay transport/state-free: ${forbidden}`
  );
}

console.log("lesson hub roadmap 15 closeout boundary passed");
