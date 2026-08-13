# Code Review Through Day 23

## Scope

This review checks the current MVP code from a product-risk perspective, focused on:

- data source confusion
- permission gaps
- save failure handling
- duplicate status values
- test coverage gaps

## Priority Findings

### P0 - Student portal can view every student

Location: `src/app/App.jsx`, `StudentPortalV2`

The student screen receives the full `students` array and renders a `학생 선택` dropdown. This means a student-facing screen can switch to another student's data, homework, reports, and profile.

Risk:

- Student privacy breach
- Parent/student role boundaries become impossible to validate later
- Any future external login would expose cross-student data unless this is fixed first

Recommended fix:

- Introduce `currentActor` or `sessionUser` state.
- Student portal should receive only `currentStudentId` and filtered student data.
- Remove student selector from the real student view. Keep it only in a teacher-only preview mode.

Test:

- Log in as `student_004`.
- Confirm no UI path can view `student_001`, `student_002`, or `student_003`.

### P0 - No role/permission gate around views and actions

Location: `src/app/App.jsx`, `Sidebar`, `App` view routing

Every view is reachable from the same sidebar: Lesson Hub, student screen, overdue homework, student manager, follow-up center, reports. Action handlers also do not check actor role.

Risk:

- Student or parent could access teacher-only functions if routing is exposed later.
- Parent read-only rule is not enforceable yet.
- "No real delete/send/reset" is a UI convention, not a permission rule.

Recommended fix:

- Add `role` values: `instructor_owner`, `student`, `parent`.
- Define `canView`, `canCreate`, `canUpdate`, `canMockSend` helpers.
- Filter sidebar items by role.
- Guard handlers, not just buttons.

Test:

- Parent role should see only read-only parent pages.
- Student role should only see own homework, own stats, and allowed self-check/homework check actions.
- Instructor owner should see all MVP management screens.

### P1 - Data source confusion: sampleData, localStorage, UI state, and snapshots overlap

Location: `src/app/App.jsx`, `storageKeys`, `useStoredState`, `reportSnapshots`, `recordsRef`

The app currently uses `sampleData` as fallback, `localStorage` as persistence, React state as live source, and snapshots for reports. Several storage key versions have changed (`homeworks.v3`, `records.v3`), which resets older local data.

Risk:

- User thinks data was lost after storage key version change.
- Report snapshots can drift from the current lesson/homework record.
- Follow-up tasks may refer to homework or lesson records that were reset or changed.

Recommended fix:

- Document a single source of truth per entity.
- Add migration rules before changing storage keys.
- Keep snapshots explicitly immutable and label them as snapshots.
- Store `sourceRecordIds`, `sourceHomeworkIds`, and `sourceVersion` on generated reports/follow-up tasks.

Test:

- Create a homework, reload browser, confirm it persists.
- Change source homework status, confirm existing report snapshot does not silently change.
- Create follow-up from overdue homework, reload, confirm source link still resolves.

### P1 - Persistence failure is not consistently handled

Location: `src/app/App.jsx`, `useStoredState`, `handleSaveRecord`

`handleSaveRecord` catches localStorage write errors for lesson records only. `useStoredState` writes every entity to localStorage in `useEffect` without try/catch or UI error state.

Risk:

- Storage quota or browser restriction can break persistence without clear UI feedback.
- State may appear saved but disappear after reload.
- Different entities have different save semantics.

Recommended fix:

- Wrap `useStoredState` writes in try/catch.
- Return `saveStatus` and `saveError` from the hook.
- Show a global "저장 실패" banner if persistence fails.
- Remove duplicate manual localStorage write in `handleSaveRecord` or centralize it.

Test:

- Mock localStorage `setItem` failure.
- Confirm user sees save failure.
- Confirm app does not mark record as saved when persistence fails.

### P1 - Homework status is duplicated and can conflict

Location: `src/app/App.jsx`, `handleStudentCheckHomework`, `handleTeacherVerifyHomework`, `isHomeworkOverdue`

Homework uses at least three related fields:

- `status`
- `studentStatus`
- `teacherStatus`

These can become inconsistent. For example, student check sets `status = submitted`, while teacher verification later sets `status = verified` or `partial`. Overdue logic checks `status` and `teacherStatus`, but not `studentStatus` consistently.

Risk:

- A homework can be `submitted` and `missing` depending on which field is read.
- Student and teacher screens may disagree.
- Follow-up candidates may include or exclude the wrong homework.

Recommended fix:

- Treat `studentStatus` and `teacherStatus` as source fields.
- Derive display status with a helper like `getHomeworkDisplayStatus(homework)`.
- Avoid mutating a generic `status` unless it has one clear domain meaning.

Test:

- Student checks homework.
- Teacher marks it partial.
- Confirm today tab, overdue tab, follow-up center, and report draft all show the same final interpretation.

### P2 - Follow-up task status values differ from earlier data model language

Location: `src/app/App.jsx`, `FollowUpCenter`, `docs/day-17-23-data-model.md`, existing `docs/data-model.md`

The new follow-up status values are `draft`, `scheduled`, `done`. Earlier documentation referenced values like `open`, `scheduled`, `resolved`, `canceled`.

Risk:

- Backend/API implementation may choose a different enum.
- UI filters and reports may break once integrated.

Recommended fix:

- Decide one canonical enum.
- Suggested: `draft`, `scheduled`, `completed`, `canceled`.
- Update all docs and UI labels to match.

Test:

- Create each task type.
- Change status through all allowed values.
- Confirm no invalid value is saved.

### P2 - "Mock send" can be mistaken for real send

Location: `src/app/App.jsx`, `ReportModal`, `handleLogNotification`

The code uses `mock_sent` and "모의 로그", which is directionally right, but the UI still has report/send concepts close to actual send semantics.

Risk:

- Operator may misunderstand whether a parent/student actually received a message.
- Later real integration may accidentally reuse mock paths.

Recommended fix:

- Rename UI button/status to `초안 저장`, `발송 모의 기록`.
- Keep real send behind a separate unavailable permission and integration flag.

Test:

- Click every report/notification action.
- Confirm no external network call is made.
- Confirm resulting status says mock/draft clearly.

### P2 - Duplicate task creation is allowed

Location: `src/app/App.jsx`, `handleCreateMakeupTask`, `FollowUpCenter`

Clicking "보충 생성" repeatedly creates multiple tasks for the same source homework/record.

Risk:

- Same overdue homework may produce several makeup tasks.
- Parent/student report may duplicate follow-up instructions.

Recommended fix:

- Before creating a task, check `(taskType, sourceId, studentId)` uniqueness.
- If a task exists, focus/open it instead of creating another.

Test:

- Click `보충 생성` twice on the same homework.
- Confirm only one follow-up task exists.

### P3 - UI text encoding appears unstable in PowerShell output

Location: multiple files, especially `src/app/App.jsx`

PowerShell output shows mojibake for Korean strings. The Vite build succeeds, so the browser may still render correctly, but source review is currently difficult.

Risk:

- Future edits may corrupt Korean labels.
- Review and debugging become error-prone.

Recommended fix:

- Ensure all source files are UTF-8.
- Set editor/terminal encoding to UTF-8.
- Consider moving UI labels into a small constants file for easier review.

Test:

- Open app in browser and confirm all Korean labels render correctly.
- Open source in UTF-8 editor and confirm text is not corrupted.

## Test Coverage Gaps

- No automated tests exist yet.
- No role-based permission test exists.
- No persistence/reload test exists.
- No storage failure test exists.
- No end-to-end scenario test exists for Lesson Hub -> homework -> follow-up -> report.
- No invariant tests exist for shared IDs such as `StudentId`, `LessonId`, `HomeworkId`, `ReportId`.

## Recommended Next Engineering Step

Before adding Day 24 features, add a small test layer:

- manual scenario checklist for current validation
- automated unit tests for pure helpers
- Playwright or browser E2E tests for the core user flows

