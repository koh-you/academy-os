import assert from "node:assert/strict";
import { createSupplementTaskCardViewModel } from "../src/domains/supplements/supplementTaskCardModel.js";

const baseTask = {
  attemptCount: 2,
  homeworkDueDate: "2026-07-20",
  notificationDraft: "11시 저장본",
  parentScheduleNotificationDraft: "학부모 저장본",
  reason: "결석",
  sourceAssignedDate: "2026-07-18",
  sourceLabel: "지난 숙제",
  sourceLessonContent: "연립방정식",
  sourceLessonLabel: "7월 18일 수업",
  sourceLessonMaterial: "교재 12쪽",
  sourceNextHomework: "13쪽",
  sourcePreviousHomework: "11쪽",
  studentScheduleNotificationDraft: "학생 저장본",
  taskType: "absence_makeup"
};
const baseDraft = {
  notificationDraft: "11시 초안",
  parentScheduleNotificationDraft: "학부모 초안",
  scheduledDate: "2026-07-24",
  scheduledTime: "15:30",
  studentScheduleNotificationDraft: "학생 초안",
  supplementHomeworkNote: "확인 메모",
  supplementMethod: "after_class"
};
const methodOptions = [{ id: "visit" }, { id: "after_class" }];
const model = createSupplementTaskCardViewModel({
  draftDiff: [
    { field: "scheduledTime" },
    { field: "notificationDraft" }
  ],
  draftValues: baseDraft,
  getMethodLabel: (task) => `방법:${task.supplementMethod}`,
  methodOptions,
  task: baseTask
});

assert.equal(model.hasScheduleDraft, true);
assert.equal(model.hasSavedNotificationDrafts, true);
assert.equal(model.taskMeta, "결석 · 방법:after_class · 배정 2회");
assert.deepEqual(model.saveSummaryProps, {
  draftDiff: [{ field: "scheduledTime" }, { field: "notificationDraft" }],
  lessonStatus: "changed",
  makeupStatus: "changed",
  notificationStatus: "changed"
});
assert.deepEqual(model.scheduleEditorProps, {
  methodOptions,
  scheduledDate: "2026-07-24",
  scheduledTime: "15:30",
  selectedMethod: "after_class",
  showMethodOptions: true
});
assert.deepEqual(model.scheduleGateProps, {
  body: "수업일지 일정 만들기를 누르면 학생·학부모 확정 안내를 다음 정각에 예약하고, 보강 당일 학생 11시 예약을 만듭니다.",
  isScheduleChangeMode: false,
  title: "최초 일정 확정"
});
assert.deepEqual(model.sourceContextProps, {
  absenceLessonContent: "연립방정식",
  absenceLessonMaterial: "교재 12쪽",
  absenceNextHomework: "13쪽",
  absencePreviousHomework: "11쪽",
  absenceSourceDate: "",
  absenceSourceLabel: "7월 18일 수업",
  sourceDate: "2026-07-18",
  sourceDueDate: "2026-07-20",
  sourceHomeworkTitle: "지난 숙제",
  supplementHomeworkNote: "확인 메모",
  taskType: "absence_makeup"
});

const linkedModel = createSupplementTaskCardViewModel({
  draftDiff: [],
  draftValues: baseDraft,
  getMethodLabel: () => "사용 안 함",
  methodOptions: [{ id: "only" }],
  saveStatus: { lesson: "failed", makeupTask: "saving", notificationDraft: "resultDue" },
  task: { ...baseTask, linkedLessonId: "lesson-1", parentScheduleNotificationDraft: "" }
});
assert.equal(linkedModel.hasSavedNotificationDrafts, false);
assert.equal(linkedModel.taskMeta, "결석 · 배정 2회");
assert.deepEqual(linkedModel.saveSummaryProps, {
  draftDiff: [],
  lessonStatus: "failed",
  makeupStatus: "saving",
  notificationStatus: "resultDue"
});
assert.deepEqual(linkedModel.scheduleGateProps, {
  body: "날짜나 시간이 바뀌지 않으면 변경 안내 예약은 새로 만들지 않습니다. 일정만 다시 저장됩니다.",
  isScheduleChangeMode: true,
  title: "기존 일정 변경"
});

const linkedChangedModel = createSupplementTaskCardViewModel({
  draftDiff: [{ field: "scheduledDate" }],
  draftValues: baseDraft,
  getMethodLabel: () => "",
  task: { ...baseTask, linkedLessonId: "lesson-1" }
});
assert.equal(linkedChangedModel.saveSummaryProps.lessonStatus, "changed");
assert.equal(
  linkedChangedModel.scheduleGateProps.body,
  "수업일지 일정 변경을 누르면 학생·학부모 변경 안내를 다음 정각에 예약하고, 보강 당일 학생 11시 예약을 갱신합니다."
);

const emptyModel = createSupplementTaskCardViewModel({
  draftValues: {},
  getMethodLabel: () => "",
  task: { taskType: "homework_makeup" }
});
assert.equal(emptyModel.hasScheduleDraft, false);
assert.equal(emptyModel.saveSummaryProps.lessonStatus, "empty");
assert.equal(emptyModel.saveSummaryProps.makeupStatus, "saved");
assert.equal(emptyModel.saveSummaryProps.notificationStatus, "empty");
assert.equal(emptyModel.scheduleGateProps.body, "시간까지 입력하면 수업일지 일정 만들기 버튼으로 확정 안내 예약을 만들 수 있습니다.");
assert.equal(emptyModel.sourceContextProps.sourceHomeworkTitle, "기록 없음");
assert.equal(emptyModel.sourceContextProps.absenceSourceLabel, "원 결석 수업");

console.log("supplement task card model: deterministic contract passed");
