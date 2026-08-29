import assert from "node:assert/strict";
import {
  createLessonModalSubmitPayload,
  getLessonModalValidationError
} from "../src/domains/lessons/lessonModalDraftModel.js";

const normalizeTimeInput = (value) => (/^\d{2}:\d{2}$/.test(value) ? value : "");
const validDraft = {
  closureMakeupDate: "2026-07-22",
  closureMakeupEnabled: false,
  closureMakeupEndTime: "19:00",
  closureMakeupStartTime: "18:00",
  date: "2026-07-15",
  endTime: "17:00",
  lessonType: "class",
  name: "정규 수업",
  normalizeTimeInput,
  startTime: "16:00"
};

assert.equal(getLessonModalValidationError(validDraft), "");
assert.equal(
  getLessonModalValidationError({ ...validDraft, name: "  " }),
  "수업명을 입력해 주세요."
);
assert.equal(
  getLessonModalValidationError({ ...validDraft, date: "" }),
  "수업 날짜를 입력해 주세요."
);
assert.equal(
  getLessonModalValidationError({ ...validDraft, startTime: "" }),
  "수업 시작·종료 시간을 올바르게 입력해 주세요."
);
assert.equal(
  getLessonModalValidationError({ ...validDraft, endTime: "16:00" }),
  "수업 시작·종료 시간을 올바르게 입력해 주세요."
);
assert.equal(
  getLessonModalValidationError({
    ...validDraft,
    closureMakeupDate: "",
    closureMakeupEnabled: true,
    lessonType: "closure"
  }),
  "휴강 보충 날짜를 입력해 주세요."
);
assert.equal(
  getLessonModalValidationError({
    ...validDraft,
    closureMakeupEnabled: true,
    closureMakeupEndTime: "18:00",
    lessonType: "closure"
  }),
  "휴강 보충 시작·종료 시간을 올바르게 입력해 주세요."
);
assert.equal(
  getLessonModalValidationError({
    ...validDraft,
    closureMakeupDate: "",
    closureMakeupEnabled: true,
    lessonType: "class"
  }),
  "",
  "non-closure lessons must ignore dormant closure makeup fields"
);
assert.equal(
  getLessonModalValidationError({
    ...validDraft,
    lessonType: "newStudentMakeup",
    name: "신입생 보강",
    studentIds: []
  }),
  "신입생 보강 학생을 1명 이상 선택해 주세요."
);
assert.equal(
  getLessonModalValidationError({
    ...validDraft,
    lessonType: "newStudentMakeup",
    name: "신입생 보강",
    notificationEnabled: true,
    studentIds: ["student-1"]
  }),
  "알림톡을 받을 학부모 또는 학생을 선택해 주세요."
);
assert.equal(
  getLessonModalValidationError({
    ...validDraft,
    lessonType: "closureMakeup",
    name: "월수금 4-7반 · 휴강 보충",
    studentIds: []
  }),
  "휴강 보충 학생을 1명 이상 선택해 주세요."
);

const payloadBase = {
  classTemplateId: "template-1",
  closureMakeupDate: "2026-07-22",
  closureMakeupEnabled: true,
  closureMakeupEndTime: "19:00",
  closureMakeupLessonId: "lesson-closure-makeup",
  closureMakeupStartTime: "18:00",
  color: "#e2e8f0",
  date: "2026-07-15",
  endTime: "17:00",
  lessonId: "lesson-main",
  lessonType: "closure",
  name: "  휴강 수업  ",
  startTime: "16:00",
  studentIds: ["student-1"]
};

const newClosurePayload = createLessonModalSubmitPayload({
  ...payloadBase,
  isPersistedClosure: false
});
assert.deepEqual(newClosurePayload, {
  classTemplateId: "template-1",
  closureMakeupDate: "2026-07-22",
  closureMakeupEnabled: true,
  closureMakeupEndTime: "19:00",
  closureMakeupLessonId: "lesson-closure-makeup",
  closureMakeupStartTime: "18:00",
  color: "#e2e8f0",
  date: "2026-07-15",
  endTime: "17:00",
  lessonType: "closure",
  lessonId: "lesson-main",
  name: "휴강 수업",
  startTime: "16:00",
  studentIds: ["student-1"]
});
assert.equal(
  createLessonModalSubmitPayload({ ...payloadBase, isPersistedClosure: true })
    .closureMakeupEnabled,
  false,
  "editing a persisted closure must not create another linked makeup lesson"
);
const closureMakeupPayload = createLessonModalSubmitPayload({
  ...payloadBase,
  includeStudentReminder: true,
  isPersistedClosure: false,
  lessonType: "closureMakeup",
  name: " 월수금 4-7반 · 휴강 보충 ",
  notificationAudiences: ["parent", "student"],
  notificationEnabled: true
});
assert.equal(closureMakeupPayload.lessonType, "closureMakeup");
assert.equal(closureMakeupPayload.closureMakeupEnabled, false);
assert.equal(closureMakeupPayload.includeStudentReminder, true);
assert.deepEqual(closureMakeupPayload.notificationAudiences, ["parent", "student"]);

assert.deepEqual(
  createLessonModalSubmitPayload({
    ...payloadBase,
    isPersistedClosure: false,
    lessonType: "newStudentMakeup",
    name: " 신입생 보강 ",
    notificationAudiences: ["parent", "student"],
    notificationEnabled: true
  }),
  {
    ...newClosurePayload,
    closureMakeupEnabled: false,
    lessonType: "newStudentMakeup",
    name: "신입생 보강",
    notificationAudiences: ["parent", "student"],
    notificationEnabled: true
  }
);
assert.equal(
  createLessonModalSubmitPayload({
    ...payloadBase,
    isPersistedClosure: false,
    lessonType: "class"
  }).closureMakeupEnabled,
  false,
  "non-closure lessons must not submit closure makeup creation"
);

console.log("lesson modal validation and submit payload model passed");
