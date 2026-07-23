import assert from "node:assert/strict";
import {
  createNotificationHistoryViewModel,
  createNotificationRecipientViewModel,
  filterNoticeSelectedStudentIds,
  selectAllNoticeStudentIds,
  toggleNoticeSelectedStudentId,
  upsertLocalNoticeJobList
} from "../src/domains/notifications/notificationCenterModel.js";
import {
  getNotificationJobLabel,
  getNotificationStatusLabel,
  noticeMessageTemplates,
  resolveNotificationJobStatusClass
} from "../src/domains/notifications/notificationCenterConfig.js";

assert.deepEqual(
  noticeMessageTemplates,
  [
    {
      id: "material",
      label: "교재문자",
      title: "교재 안내",
      body: "안녕하세요. 으뜸수학 고태영T입니다.\n\n다음 수업부터 사용할 교재를 안내드립니다.\n학생이 수업에 필요한 교재와 필기구를 준비할 수 있도록 확인 부탁드립니다.\n\n감사합니다."
    },
    {
      id: "makeup",
      label: "보강문자",
      title: "보강 안내",
      body: "안녕하세요. 으뜸수학 고태영T입니다.\n\n보강 수업 일정을 안내드립니다.\n가능한 시간 확인 후 회신 부탁드립니다.\n\n감사합니다."
    },
    {
      id: "notice",
      label: "공지문자",
      title: "공지 안내",
      body: "안녕하세요. 으뜸수학 고태영T입니다.\n\n학원 공지사항을 안내드립니다.\n내용 확인 부탁드립니다.\n\n감사합니다."
    },
    {
      id: "specialLecture",
      label: "특강문자",
      title: "특강 안내",
      body: "#{학원명} 재원생 보호자님께 드리는 특강 안내입니다.\n\n안녕하세요. #{학원명}입니다.\n#{학생명} 학생 보호자님께 특강 일정을 안내드립니다.\n\n특강명: #{특강명}\n대상: #{대상}\n요일: #{요일}\n시간: #{시간}\n\n세부 시수와 수강료, 회차별 일정은 아래 버튼에서 확인해 주세요.\n수강을 원하시거나 문의사항이 있으신 경우 아래 버튼을 눌러 안내문에서 신청해 주세요."
    }
  ]
);
assert.equal(getNotificationJobLabel("attendance"), "출결 알림톡");
assert.equal(getNotificationJobLabel("unknown_type"), "unknown_type");
assert.equal(getNotificationJobLabel(), "알림톡");
assert.equal(getNotificationStatusLabel("send_unconfirmed"), "확인 필요");
assert.equal(getNotificationStatusLabel("unknown_status"), "unknown_status");
assert.equal(getNotificationStatusLabel(), "대기");
assert.equal(resolveNotificationJobStatusClass(null, () => false), "draft");
assert.equal(
  resolveNotificationJobStatusClass(
    { scheduledAt: "past", status: "scheduled" },
    (scheduledAt) => scheduledAt === "past"
  ),
  "send_unconfirmed"
);
assert.equal(
  resolveNotificationJobStatusClass(
    { scheduledAt: "future", status: "scheduled" },
    () => false
  ),
  "scheduled"
);
assert.equal(resolveNotificationJobStatusClass({ status: "" }, () => false), "draft");

const selectionStudents = [
  { studentId: "student-a" },
  { studentId: "student-b" }
];
assert.deepEqual(
  filterNoticeSelectedStudentIds(
    ["student-b", "outside", "student-a"],
    selectionStudents
  ),
  ["student-b", "student-a"]
);
assert.deepEqual(
  toggleNoticeSelectedStudentId(["student-a"], "student-b"),
  ["student-a", "student-b"]
);
assert.deepEqual(
  toggleNoticeSelectedStudentId(["student-a", "student-b", "student-a"], "student-a"),
  ["student-b"]
);
assert.deepEqual(
  selectAllNoticeStudentIds(selectionStudents),
  ["student-a", "student-b"]
);

const currentLocalJobs = Array.from({ length: 85 }, (_, index) => ({
  notificationJobId: `notice-${index}`,
  status: "draft"
}));
const updatedLocalJob = {
  notificationJobId: "notice-40",
  status: "scheduled"
};
const upsertedLocalJobs = upsertLocalNoticeJobList(
  currentLocalJobs,
  updatedLocalJob
);
assert.equal(upsertedLocalJobs.length, 80);
assert.equal(upsertedLocalJobs[0], updatedLocalJob);
assert.equal(
  upsertedLocalJobs.filter(
    (job) => job.notificationJobId === updatedLocalJob.notificationJobId
  ).length,
  1
);
assert.deepEqual(
  upsertLocalNoticeJobList(
    [{ notificationJobId: "existing" }],
    { notificationJobId: "new" },
    2
  ).map((job) => job.notificationJobId),
  ["new", "existing"]
);

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
