import assert from "node:assert/strict";
import {
  createNotificationHistoryViewModel,
  createNotificationRecipientViewModel
} from "../src/domains/notifications/notificationCenterModel.js";

const futureAt = "2026-08-01T09:00:00.000Z";
const pastAt = "2026-07-01T09:00:00.000Z";
const localNoticeJobs = [
  { notificationJobId: "local-only", status: "draft" },
  { notificationJobId: "remote-wins", status: "failed" }
];
const notificationJobs = [
  { notificationJobId: "remote-wins", status: "sent" },
  { notificationJobId: "future", status: "scheduled", scheduledAt: futureAt },
  { notificationJobId: "past", status: "scheduled", scheduledAt: pastAt },
  {
    notificationJobId: "confirm",
    provider: "solapi",
    providerGroupId: "group-confirm",
    status: "send_unconfirmed"
  },
  { notificationJobId: "failed", status: "failed" },
  { notificationJobId: "canceled", status: "canceled" }
];
const dependencies = {
  canCancelJob: (job) => job.status === "scheduled",
  getProviderReference: (job) => job.providerGroupId || "",
  isSchedulePast: (value) => value === pastAt
};

const pendingModel = createNotificationHistoryViewModel({
  ...dependencies,
  jobFilter: "pending",
  localNoticeJobs,
  notificationJobs
});

assert.deepEqual(
  pendingModel.managedNotificationJobs.map((job) => job.notificationJobId),
  ["local-only", "remote-wins", "future", "past", "confirm", "failed", "canceled"]
);
assert.deepEqual(pendingModel.scheduledJobs.map((job) => job.notificationJobId), ["future"]);
assert.deepEqual(pendingModel.pastScheduledJobs.map((job) => job.notificationJobId), ["past"]);
assert.deepEqual(pendingModel.pendingJobs.map((job) => job.notificationJobId), ["confirm", "past"]);
assert.deepEqual(pendingModel.filteredNotificationJobs, pendingModel.pendingJobs);
assert.deepEqual(pendingModel.solapiResultTargets.map((job) => job.notificationJobId), ["confirm"]);
assert.equal(pendingModel.filterLabel, "확인 필요");

const fallbackModel = createNotificationHistoryViewModel({
  ...dependencies,
  jobFilter: "unknown",
  localNoticeJobs: Array.from({ length: 45 }, (_, index) => ({
    notificationJobId: `local-${index}`,
    status: "draft"
  }))
});

assert.equal(fallbackModel.filteredNotificationJobs.length, 40);
assert.equal(fallbackModel.filterLabel, "최근 알림");
assert.deepEqual(pendingModel.sentJobs.map((job) => job.notificationJobId), ["remote-wins"]);
assert.deepEqual(pendingModel.failedJobs.map((job) => job.notificationJobId), ["failed"]);
assert.deepEqual(pendingModel.archivedJobs.map((job) => job.notificationJobId), ["local-only", "canceled"]);

const recipientStudents = [
  {
    studentId: "active-by-id",
    name: "김활동",
    schoolName: "가학교",
    defaultClassTemplateId: "class-a",
    parentPhone: "010-1111-1111",
    studentPhone: "010-2222-2222"
  },
  {
    studentId: "active-by-name",
    name: "이검색",
    schoolName: "나학교",
    className: "B반",
    parentPhone: "",
    studentPhone: "010-3333-3333"
  },
  {
    studentId: "paused",
    name: "박휴원",
    status: "paused",
    parentPhone: "010-4444-4444"
  },
  {
    studentId: "withdrawn-at",
    name: "최퇴원",
    withdrawnAt: "2026-07-01T00:00:00.000Z",
    studentPhone: "010-5555-5555"
  }
];
const recipientDependencies = {
  classTemplates: [
    { classTemplateId: "class-a", name: "A반" },
    { classTemplateId: "class-b", name: "B반" }
  ],
  normalizePhoneNumber: (value) => String(value ?? "").replace(/\D/g, ""),
  normalizeSearchText: (value) => String(value ?? "").trim(),
  noticeWithdrawnClassFilterId: "withdrawn_students",
  students: recipientStudents
};

const allRecipientModel = createNotificationRecipientViewModel({
  ...recipientDependencies,
  classFilter: "all",
  noticeRecipientMode: "selected",
  selectedStudentIds: ["active-by-id", "paused"]
});

assert.deepEqual(
  allRecipientModel.classFilteredStudents.map((student) => student.studentId),
  ["active-by-id", "active-by-name"]
);
assert.deepEqual(allRecipientModel.targetStudents.map((student) => student.studentId), ["active-by-id"]);
assert.deepEqual(allRecipientModel.targetAudiences, ["parent", "student"]);
assert.deepEqual(
  allRecipientModel.noticeRecipients.map((recipient) => `${recipient.student.studentId}:${recipient.audience}`),
  ["active-by-id:parent", "active-by-id:student"]
);
assert.equal(allRecipientModel.parentRecipientCount, 1);
assert.equal(allRecipientModel.studentRecipientCount, 1);
assert.equal(allRecipientModel.withdrawnStudents.length, 2);

const classAndSearchModel = createNotificationRecipientViewModel({
  ...recipientDependencies,
  classFilter: "class-b",
  noticeRecipientMode: "parent",
  searchText: " 나학교 ",
  selectedStudentIds: ["active-by-name", "active-by-id"]
});

assert.deepEqual(
  classAndSearchModel.visibleNoticeStudents.map((student) => student.studentId),
  ["active-by-name"]
);
assert.deepEqual(classAndSearchModel.targetStudents.map((student) => student.studentId), ["active-by-name"]);
assert.deepEqual(classAndSearchModel.targetAudiences, ["parent"]);
assert.deepEqual(classAndSearchModel.noticeRecipients, []);

const withdrawnRecipientModel = createNotificationRecipientViewModel({
  ...recipientDependencies,
  classFilter: "withdrawn_students",
  noticeRecipientMode: "student",
  selectedStudentIds: ["paused", "withdrawn-at", "active-by-id"]
});

assert.deepEqual(
  withdrawnRecipientModel.visibleNoticeStudents.map((student) => student.studentId),
  ["paused", "withdrawn-at"]
);
assert.deepEqual(
  withdrawnRecipientModel.noticeRecipients.map((recipient) => recipient.student.studentId),
  ["withdrawn-at"]
);
assert.equal(withdrawnRecipientModel.parentRecipientCount, 0);
assert.equal(withdrawnRecipientModel.studentRecipientCount, 1);

console.log("notification center history and recipient model fixtures passed");
