import assert from "node:assert/strict";
import {
  buildNoticeJob,
  buildNoticePayload
} from "../src/domains/notifications/notificationNoticeBuilders.js";

const parentRecipient = {
  audience: "parent",
  phone: "010-1111-1111",
  student: {
    studentId: "student-1",
    name: "고정학생",
    parentPhone: "010-1111-1111",
    studentPhone: "010-2222-2222"
  }
};
const commonSource = {
  academyName: "으뜸수학",
  noticeBody: "공지 본문",
  noticeKind: "general",
  noticeSpecialLectureMeta: null,
  noticeText: "[공지 제목]\n\n공지 본문",
  noticeTitle: "공지 제목",
  scheduledAt: "2026-07-30T09:00:00.000Z",
  today: "2026-07-23"
};

const immediatePayload = buildNoticePayload({
  ...commonSource,
  mode: "immediate",
  recipient: parentRecipient
});

assert.deepEqual(immediatePayload, {
  academyName: "으뜸수학",
  commentBodyOverride: "[공지 제목]\n\n공지 본문",
  forceDryRun: false,
  lessonDate: "2026-07-23",
  lessonName: "공지 제목",
  message: "[공지 제목]\n\n공지 본문",
  noticeKind: "general",
  noticeAudience: "parent",
  noticeBody: "공지 본문",
  noticeTitle: "공지 제목",
  osScheduled: false,
  parentPhone: "010-1111-1111",
  scheduledDate: "",
  sendMode: "immediate",
  studentId: "student-1",
  studentName: "고정학생",
  studentPhone: "010-2222-2222",
  target: "parent"
});

const studentRecipient = {
  ...parentRecipient,
  audience: "student",
  phone: "010-2222-2222"
};
const specialLectureMeta = {
  audience: "중3",
  days: "월·수",
  guideId: "guide-1",
  guideUrl: "https://example.com/guide",
  time: "18:00",
  title: "여름 특강"
};
const scheduledJob = buildNoticeJob({
  ...commonSource,
  createdAt: "2026-07-23T10:00:00.000Z",
  idSuffix: "abc12",
  idTimestamp: 1784800800000,
  mode: "scheduled",
  noticeKind: "special_lecture",
  noticeSpecialLectureMeta: specialLectureMeta,
  noticeTitle: "",
  recipient: studentRecipient
});

assert.deepEqual(scheduledJob, {
  notificationJobId: "notice_1784800800000_student-1_student_abc12",
  notificationType: "notice_student",
  studentId: "student-1",
  target: "student",
  recipient: "010-2222-2222",
  scheduledAt: "2026-07-30T09:00:00.000Z",
  payload: {
    academyName: "으뜸수학",
    commentBodyOverride: "[공지 제목]\n\n공지 본문",
    forceDryRun: false,
    lessonDate: "2026-07-23",
    lessonName: "학생 공지",
    message: "[공지 제목]\n\n공지 본문",
    noticeKind: "special_lecture",
    noticeAudience: "student",
    noticeBody: "공지 본문",
    noticeTitle: "",
    osScheduled: true,
    parentPhone: "010-1111-1111",
    scheduledDate: "2026-07-30T09:00:00.000Z",
    sendMode: "scheduled",
    studentId: "student-1",
    studentName: "고정학생",
    studentPhone: "010-2222-2222",
    target: "student",
    specialLectureAudience: "중3",
    specialLectureDays: "월·수",
    specialLectureGuideId: "guide-1",
    specialLectureTime: "18:00",
    specialLectureTitle: "여름 특강",
    specialLectureUrl: "https://example.com/guide"
  },
  previewBody: "[공지 제목]\n\n공지 본문",
  status: "scheduled",
  provider: "academy-os",
  error: "",
  createdAt: "2026-07-23T10:00:00.000Z"
});

const parentJob = buildNoticeJob({
  ...commonSource,
  createdAt: "2026-07-23T10:01:00.000Z",
  idSuffix: "def34",
  idTimestamp: 1784800860000,
  mode: "immediate",
  recipient: parentRecipient
});

assert.equal(parentJob.notificationType, "notice_parent");
assert.equal(parentJob.status, "draft");
assert.equal(parentJob.scheduledAt, "");
assert.equal(parentJob.payload.sendMode, "immediate");

console.log("notification notice payload and job builders fixture passed");
