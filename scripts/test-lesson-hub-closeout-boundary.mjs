import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [rawAppSource, teacherLessonHubSource, lessonJournalDetailSource, lessonModalSource, historyActionSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/TeacherLessonHubV2.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/LessonJournalDetail.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/LessonModal.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/lessonJournalHistoryAction.js", import.meta.url), "utf8")
]);
const appSource = await readAppWithLessonJournalSource(import.meta.url);
const saveControllerSource = await readFile(
  new URL("../src/domains/lessons/lessonModalSaveController.js", import.meta.url),
  "utf8"
);
const attendanceSyncHookSource = await readFile(
  new URL("../src/domains/lessons/useAttendanceRecordSync.js", import.meta.url),
  "utf8"
);
const lazyTeacherViewSource = await readFile(
  new URL("../src/app/lazyTeacherViewComponents.js", import.meta.url),
  "utf8"
);
const appAndLazyViewSource = `${appSource}\n${lazyTeacherViewSource}`;

function section(source, start, end) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert.ok(startIndex >= 0, `missing section start: ${start}`);
  assert.ok(endIndex > startIndex, `missing section end: ${end}`);
  return source.slice(startIndex, endIndex);
}

for (const extractedBoundary of [
  'from "../domains/lessons/lessonCalendarModel.js"',
  'import("../domains/lessons/TeacherLessonHubV2.jsx")',
  'from "../domains/lessons/lessonModalPayloadBuilders.js"',
  'from "../domains/lessons/lessonModalSaveController.js"',
  'from "../domains/lessons/lessonModalSaveSnapshot.js"',
  'from "../domains/lessons/LessonModal.jsx"',
  'from "../domains/lessons/AttendanceKiosk.jsx"'
]) {
  assert.ok(appAndLazyViewSource.includes(extractedBoundary), `missing extracted boundary: ${extractedBoundary}`);
}

for (const lessonModalBoundary of [
  'from "./lessonModalDraftModel.js"',
  'from "./lessonModalDraftTransitions.js"',
  'from "./lessonModalInitialDraft.js"',
  'from "./lessonModalSaveState.js"',
  'from "./lessonModalStudentModel.js"',
  'from "./LessonModalActions.jsx"',
  'from "./LessonModalBasics.jsx"',
  'from "./LessonModalClosurePanel.jsx"',
  'from "./LessonModalStudentPicker.jsx"'
]) {
  assert.ok(lessonModalSource.includes(lessonModalBoundary), `missing lesson modal boundary: ${lessonModalBoundary}`);
}
assert.equal(rawAppSource.includes("function LessonModal("), false);

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
  "runLessonJournalHistoryAction({",
  'action: "copy"',
  'action: "undo_copy"',
  "function handleUndoLessonAction()",
  "function confirmDeleteLesson(lessonId)",
  'action: "cancel"',
  'action: "undo_cancel"',
  "lessonHistoryActionRequestRef.current"
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
  "function loadLessonJournalReservationAudit({ date, lessonId })"
]) {
  assert.ok(
    rawAppSource.includes(reservedAppBoundary),
    `high-risk transport boundary must remain in App: ${reservedAppBoundary}`
  );
}
for (const forbidden of ['postJson("/api/homeworks/bulk"', 'postJson("/api/lesson-records"', 'postJson("/api/lessons"']) {
  assert.equal(riskyCalendarActions.includes(forbidden), false, `calendar history action must not split persistence: ${forbidden}`);
}
for (const required of [
  '"/api/lesson-journal/history-action"',
  "createLessonJournalHistoryPlan({",
  'result?.source !== "supabase"',
  "result?.verified !== true"
]) {
  assert.ok(historyActionSource.includes(required), `history action must preserve ${required}`);
}
assert.equal(rawAppSource.includes("function LessonJournalDetail("), false);
assert.ok(teacherLessonHubSource.includes('from "./LessonJournalDetail.jsx"'));
assert.ok(lessonJournalDetailSource.includes("export function LessonJournalDetail("));
for (const forbidden of ["/api/", "fetch(", "postJson", "getJsonWithTimeout", "localStorage"]) {
  assert.equal(
    lessonJournalDetailSource.includes(forbidden),
    false,
    `lesson journal screen must not own ${forbidden}`
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
