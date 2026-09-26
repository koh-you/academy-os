import assert from "node:assert/strict";
import {
  createLessonModalSubmitPayload,
  getLessonModalRosterNotice,
  getLessonModalValidationError,
  isLessonModalRosterRequired,
  lessonModalRosterRequiredTypes
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

// 2026-09-26(검증 반영) · 푸터의 명단 안내와 저장 검증이 갈라지지 않게 잠근다.
// 예전에는 lessonType 을 보지 않아 저장이 막히는 유형에서도 "포함 학생 0명으로 저장됩니다." 를 띄웠고,
// 같은 aria-live 안에서 "저장 실패 / 신입생 보강 학생을 1명 이상 선택해 주세요." 와 정반대의 말을 했다.
for (const lessonType of lessonModalRosterRequiredTypes) {
  assert.equal(isLessonModalRosterRequired(lessonType), true);
  assert.equal(
    getLessonModalRosterNotice({ lessonType, saveState: "idle", selectedStudentCount: 0 }),
    "학생을 1명 이상 선택해야 저장됩니다.",
    `${lessonType} must not promise a 0-student save`
  );
  // 같은 규칙에서 나온 검증 오류가 실제로 저장을 막는지 함께 확인한다.
  assert.notEqual(
    getLessonModalValidationError({
      ...validDraft,
      lessonType,
      name: "보강",
      studentIds: []
    }),
    "",
    `${lessonType} must block an empty roster save`
  );
}

for (const lessonType of ["class", "preExam", "exam", "makeup", "examPrep", "closure"]) {
  assert.equal(isLessonModalRosterRequired(lessonType), false);
  assert.equal(
    getLessonModalRosterNotice({ lessonType, saveState: "idle", selectedStudentCount: 0 }),
    "포함 학생 0명으로 저장됩니다."
  );
  assert.equal(
    getLessonModalValidationError({ ...validDraft, lessonType, studentIds: [] }),
    "",
    `${lessonType} must still allow an empty roster save`
  );
}

// 1명이라도 고르면 안내는 사라진다.
assert.equal(
  getLessonModalRosterNotice({ lessonType: "class", saveState: "idle", selectedStudentCount: 1 }),
  ""
);
assert.equal(
  getLessonModalRosterNotice({
    lessonType: "newStudentMakeup",
    saveState: "idle",
    selectedStudentCount: 2
  }),
  ""
);

// 저장 중·완료·실패에는 그리지 않는다 — 실패 메시지가 같은 aria-live 에서 이미 같은 말을 한다.
for (const saveState of ["saving", "verifying", "saved", "failed"]) {
  assert.equal(
    getLessonModalRosterNotice({ lessonType: "class", saveState, selectedStudentCount: 0 }),
    ""
  );
  assert.equal(
    getLessonModalRosterNotice({
      lessonType: "newStudentMakeup",
      saveState,
      selectedStudentCount: 0
    }),
    ""
  );
}

console.log("lesson modal validation and submit payload model passed");
