# User Scenario Tests Through Day 23

## How To Use

Run the app at:

`http://127.0.0.1:5173`

Before each scenario, use a fresh browser profile or clear localStorage if you want a clean baseline:

```js
localStorage.clear()
location.reload()
```

These are manual acceptance tests for now. Each scenario can later become a Playwright E2E test.

## Priority 0 Scenarios

### S01 - Student can only see their own data

Status: currently expected to fail until role gating is added.

Given:

- The current actor is `student_004` / TestS12.

When:

- The user opens the student screen.

Then:

- The screen shows only TestS12 data.
- There is no student selector that allows switching to another student.
- Homework, reports, stats, and profile all belong to TestS12.

Current risk:

- The current MVP student screen includes a student selector. This should be teacher-preview only.

### S02 - Parent is read-only

Status: pending parent portal implementation.

Given:

- The current actor is a parent.

When:

- The parent opens report, homework, attendance, or curriculum screens.

Then:

- Parent can read data only.
- Parent cannot create homework.
- Parent cannot edit homework.
- Parent cannot delete homework.
- Parent cannot create follow-up tasks.
- Parent cannot mock-send or send reports.

### S03 - Teacher owner can access management screens

Given:

- The current actor is `instructor_owner`.

When:

- The user opens sidebar views.

Then:

- Lesson Hub is visible.
- Student management is visible.
- Overdue homework is visible.
- Follow-up center is visible.
- Report center is visible.

## Lesson Hub Scenarios

### S04 - Teacher selects a date and lesson

Given:

- A date has at least two lessons.

When:

- Teacher clicks the date in the calendar.
- Teacher selects one lesson pill.

Then:

- The lesson detail table shows only the students assigned to that lesson.
- The selected lesson header shows correct date, time, and class name.
- Student rows include school, grade, textbook, and special note context.

### S05 - Teacher edits a lesson record and saves

Given:

- Teacher is in Lesson Hub.
- A lesson has at least one student.

When:

- Teacher changes attendance, behavior tag, daily comment, homework status, or follow-up flags.
- Teacher clicks save for that row.

Then:

- Row status changes from changed to saving to saved.
- After refresh, the edited record remains.

Failure case:

- If localStorage save fails, the row must show save failed and must not claim saved.

## Student Homework Scenarios

### S06 - Student checks today's homework

Given:

- Student has a homework with `assignedDate = 2026-06-06`.

When:

- Student opens `학생 화면 > 오늘`.
- Student clicks `완료 체크`.

Then:

- Homework becomes checked by student.
- Button becomes disabled or shows completed state.
- Teacher verification remains pending until teacher confirms.

Expected data:

- `studentStatus = checked_done`
- `teacherStatus = unverified`

### S07 - Student directly registers homework

Given:

- Student is on `학생 화면`.

When:

- Student opens `등록`.
- Student selects type `현행`.
- Student enters title, subject, total problem count, start date, and due date.
- Student clicks register.

Then:

- New homework appears in `전체`.
- New homework belongs only to the current student.
- New homework has no real external submission.

Expected data:

- `createdByRole = student`
- `studentStatus = not_started`
- `teacherStatus = unverified`

### S08 - Student cannot actually delete homework

Given:

- Student is on `학생 화면 > 전체`.

When:

- Student sees the delete-related button.

Then:

- The button is disabled or locked.
- No homework is removed.
- No destructive action is performed.

## Overdue Homework Scenarios

### S09 - Teacher sees overdue homework

Given:

- A homework has `dueDate < 2026-06-06`.
- The homework is not teacher-verified.

When:

- Teacher opens `밀린 숙제`.

Then:

- The homework appears in the overdue list.
- Student name, title, assigned date, due date, student status, and teacher status are visible.

### S10 - Teacher verifies homework

Given:

- A homework is unverified.

When:

- Teacher changes teacher status to verified.

Then:

- The homework no longer appears as unresolved overdue.
- Student statistics update consistently.

Potential invariant:

- `teacherStatus = verified` should be the source of truth for teacher confirmation.

## Follow-Up Center Scenarios

### S11 - Teacher creates homework makeup from overdue homework

Given:

- An overdue homework exists.

When:

- Teacher opens `후속조치`.
- Teacher clicks `보충 생성` for an overdue homework.

Then:

- A MakeupTask is created.
- It links to the original homework through `sourceId`.
- It has `taskType = homework_makeup`.
- It does not send any notification.

### S12 - Duplicate makeup task is prevented

Status: currently expected to fail until uniqueness guard is added.

Given:

- A MakeupTask already exists for the same student, task type, and source homework.

When:

- Teacher clicks `보충 생성` again for the same homework.

Then:

- No duplicate task is created.
- Existing task is highlighted or reused.

### S13 - Teacher schedules follow-up task

Given:

- A MakeupTask exists.

When:

- Teacher enters scheduled date and time.
- Teacher changes status to scheduled.

Then:

- Task persists after refresh.
- Task keeps studentId, sourceId, scheduledDate, scheduledTime, and status.

### S14 - Teacher creates notification draft only

Given:

- A MakeupTask exists.

When:

- Teacher clicks `문구 생성`.

Then:

- A notification draft appears.
- No real message is sent.
- No external API call is made.

### S15 - Teacher records mock notification log

Given:

- A notification draft exists.

When:

- Teacher clicks `모의 로그`.

Then:

- A NotificationLog entry is created.
- `channel = mock`.
- `status = draft_logged`.
- No real external delivery happens.

## Report Scenarios

### S16 - Teacher opens daily report draft

Given:

- A lesson has a student record and homework bundle.

When:

- Teacher clicks report for a student.

Then:

- Report draft includes student, school, grade, textbook, special note, lesson, attendance, previous homework, today homework, behavior tag, and teacher comment.
- Report is clearly marked as draft/mock.

### S17 - Report snapshot is immutable

Given:

- A report snapshot has been saved.

When:

- Teacher changes the underlying lesson comment or homework status.

Then:

- Existing snapshot should not silently change.
- A new snapshot should be needed to reflect new data.

## Data Integrity Scenarios

### S18 - Common ID links are present

Given:

- A lesson, homework, report, and follow-up task exist.

When:

- The data is inspected.

Then:

- Lesson data has `lessonId`.
- Student data has `studentId`.
- Homework data has `homeworkId` and `studentId`.
- Lesson student record has `lessonId` and `studentId`.
- Report snapshot has `reportId`, `studentId`, and `lessonId`.
- MakeupTask has `makeupTaskId`, `studentId`, and `sourceId`.

### S19 - Reload persistence

Given:

- Teacher creates a lesson/student/homework/follow-up task.

When:

- Browser is refreshed.

Then:

- Data remains visible.
- Data IDs remain the same.

### S20 - Storage failure handling

Status: currently expected to fail until central save error handling is added.

Given:

- Browser storage write fails.

When:

- User edits lesson record or creates homework/follow-up task.

Then:

- App shows save failure.
- App does not say saved.
- User knows refresh may lose changes.

## Regression Checklist

- No real deletion occurs.
- No real reset occurs.
- No real parent/student notification is sent.
- No real external integration is called.
- Student cannot access another student's data.
- Parent cannot edit anything.
- Teacher owner can complete MVP management flows.
- Homework status is interpreted consistently across all screens.
- Follow-up tasks do not duplicate for the same source.

