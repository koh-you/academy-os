import assert from "node:assert/strict";
import { createSupplementSourceReconcileModel } from "../src/domains/supplements/supplementSourceReconcileModel.js";

const baseTask = {
  linkedLessonDate: "2026-08-05",
  linkedLessonId: "lesson-1",
  linkedLessonTime: "15:30",
  makeupTaskId: "makeup-1",
  scheduledDate: "2026-08-05",
  scheduledTime: "15:30",
  studentId: "student-1"
};
const baseLesson = {
  date: "2026-08-05",
  lessonId: "lesson-1",
  lessonType: "makeup",
  sourceMakeupTaskId: "makeup-1",
  startTime: "15:30:00",
  status: "scheduled",
  studentIds: ["student-1"]
};
const buildJob = ({
  date = "2026-08-05",
  id = "job-1",
  status = "scheduled",
  time = "15:30"
} = {}) => ({
  notificationJobId: id,
  notificationType: "schedule_reminder",
  payload: {
    makeupTaskId: "makeup-1",
    scheduleDate: date,
    scheduleTime: time,
    scheduleType: "supplement"
  },
  status
});

const unlinked = createSupplementSourceReconcileModel({
  task: {
    makeupTaskId: "makeup-1",
    scheduledDate: "2026-08-05",
    scheduledTime: "15:30"
  }
});
assert.equal(unlinked.state, "unlinked");
assert.equal(unlinked.canApplySchedule, true);
assert.equal(unlinked.canReserveNotifications, false);
assert.equal(unlinked.scheduleActionLabel, "수업일지 일정 만들기");
assert.equal(unlinked.lessonStatus, "ready");

const synced = createSupplementSourceReconcileModel({
  lessons: [baseLesson],
  notificationJobs: [buildJob()],
  task: baseTask
});
assert.equal(synced.state, "synced");
assert.equal(synced.authoritativeLesson, baseLesson);
assert.equal(synced.canApplySchedule, true);
assert.equal(synced.canReserveNotifications, true);
assert.equal(synced.staleNotificationJobs.length, 0);
assert.equal(synced.statusLabel, "수업일지 연결 확인 완료");

const missingLesson = createSupplementSourceReconcileModel({
  notificationJobs: [buildJob()],
  task: baseTask
});
assert.equal(missingLesson.state, "missing_lesson");
assert.equal(missingLesson.canApplySchedule, false);
assert.equal(missingLesson.canReserveNotifications, false);
assert.equal(missingLesson.staleNotificationJobs.length, 1);
assert.match(missingLesson.detail, /연결 ID\(lesson-1\)/);

const reverseOnlyLesson = { ...baseLesson, lessonId: "lesson-reverse" };
const missingTaskLink = createSupplementSourceReconcileModel({
  lessons: [reverseOnlyLesson],
  task: { ...baseTask, linkedLessonId: "", linkedLessonDate: "", linkedLessonTime: "" }
});
assert.equal(missingTaskLink.state, "missing_task_link");
assert.equal(missingTaskLink.authoritativeLesson.lessonId, "lesson-reverse");
assert.equal(missingTaskLink.canApplySchedule, false);

const staleTaskLink = createSupplementSourceReconcileModel({
  lessons: [reverseOnlyLesson],
  task: baseTask
});
assert.equal(staleTaskLink.state, "stale_task_link");
assert.equal(staleTaskLink.canApplySchedule, false);

const duplicateLessons = createSupplementSourceReconcileModel({
  lessons: [baseLesson, { ...baseLesson, lessonId: "lesson-2" }],
  task: baseTask
});
assert.equal(duplicateLessons.state, "duplicate_lessons");
assert.equal(duplicateLessons.reverseLinkedLessons.length, 2);
assert.equal(duplicateLessons.canApplySchedule, false);

const sourceMismatch = createSupplementSourceReconcileModel({
  lessons: [{ ...baseLesson, sourceMakeupTaskId: "makeup-other" }],
  task: baseTask
});
assert.equal(sourceMismatch.state, "source_mismatch");
assert.equal(sourceMismatch.canApplySchedule, false);

const pendingResync = createSupplementSourceReconcileModel({
  lessons: [baseLesson],
  task: {
    ...baseTask,
    needsLessonResync: true,
    scheduledDate: "2026-08-06",
    scheduledTime: "16:00"
  }
});
assert.equal(pendingResync.state, "pending_resync");
assert.equal(pendingResync.canApplySchedule, true);
assert.equal(pendingResync.canReserveNotifications, false);
assert.equal(pendingResync.lessonStatus, "changed");

const unexpectedScheduleMismatch = createSupplementSourceReconcileModel({
  lessons: [{ ...baseLesson, date: "2026-08-07" }],
  task: baseTask
});
assert.equal(unexpectedScheduleMismatch.state, "schedule_mismatch");
assert.equal(unexpectedScheduleMismatch.canApplySchedule, false);

const staleNotification = createSupplementSourceReconcileModel({
  lessons: [baseLesson],
  notificationJobs: [buildJob({ date: "2026-08-04", time: "14:00" })],
  task: baseTask
});
assert.equal(staleNotification.state, "stale_notifications");
assert.equal(staleNotification.canApplySchedule, true);
assert.equal(staleNotification.canReserveNotifications, false);
assert.equal(staleNotification.staleNotificationJobs.length, 1);
assert.match(staleNotification.detail, /미발송 예약 1건/);

const historicalNotification = createSupplementSourceReconcileModel({
  lessons: [baseLesson],
  notificationJobs: [buildJob({ date: "2026-08-04", status: "sent" })],
  task: baseTask
});
assert.equal(historicalNotification.state, "synced");
assert.equal(historicalNotification.canReserveNotifications, true);

const orphanNotification = createSupplementSourceReconcileModel({
  notificationJobs: [buildJob()],
  task: { ...baseTask, linkedLessonId: "", linkedLessonDate: "", linkedLessonTime: "" }
});
assert.equal(orphanNotification.state, "orphan_notifications");
assert.equal(orphanNotification.canApplySchedule, false);
assert.equal(orphanNotification.canReserveNotifications, false);

console.log("supplement source reconcile model: multi-source decision contract passed");
