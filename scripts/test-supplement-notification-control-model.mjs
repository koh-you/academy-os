import assert from "node:assert/strict";
import {
  createSupplementNotificationControlModalViewModel,
  createSupplementNotificationControlViewModel,
  supplementNotificationControlConfigs
} from "../src/domains/supplements/supplementNotificationControlModel.js";
import { createSupplementNotificationControlSelection } from "../src/domains/supplements/useSupplementNotificationControlState.js";

const dependencies = {
  canCancelJob: (job) => ["scheduled", "queued"].includes(job?.status),
  normalizeMessage: (value) => String(value ?? "").replace(/\s+/g, " ").trim()
};
const student = { studentPhone: "01011112222", parentPhone: "01033334444" };
const task = {
  linkedLessonId: "lesson-1",
  scheduledDate: "2026-07-24",
  scheduledTime: "15:30"
};

assert.deepEqual(createSupplementNotificationControlSelection({ makeupTaskId: "task-1" }, "parentSchedule"), {
  controlType: "parentSchedule",
  taskId: "task-1"
});

assert.equal(supplementNotificationControlConfigs.studentReminder.statusField, "studentReminder");
assert.deepEqual(
  createSupplementNotificationControlViewModel({ controlType: "studentSchedule", student, task: null }, dependencies),
  {
    blockReason: "수업일지 일정을 먼저 만들어야 알림톡을 예약할 수 있습니다.",
    canCancel: false,
    canReserve: false,
    config: supplementNotificationControlConfigs.studentSchedule,
    hasHistoricalJob: false,
    preview: "",
    previewLabel: "예약할 현재 문구",
    recipient: "",
    savedDraftDiffers: false
  }
);

const unsavedModel = createSupplementNotificationControlViewModel({
  controlType: "studentSchedule",
  currentPreview: "현재 문구",
  hasUnsavedChanges: true,
  student,
  task
}, dependencies);
assert.equal(unsavedModel.blockReason, "수정 중인 보충 내용·일정을 먼저 저장해야 현재 원본으로 알림톡을 예약할 수 있습니다.");
assert.equal(unsavedModel.canReserve, false);

const emptyFinalModel = createSupplementNotificationControlViewModel({
  controlType: "parentSchedule",
  student,
  task: {
    ...task,
    parentScheduleNotificationDraft: "",
    supplementTeacherEditedFields: ["parentScheduleNotificationDraft"]
  }
}, dependencies);
assert.equal(emptyFinalModel.blockReason, "선생님 최종 알림톡 문구가 비어 있습니다. 문구를 입력하고 저장한 뒤 예약해 주세요.");
assert.equal(emptyFinalModel.recipient, "01033334444");

const missingScheduleModel = createSupplementNotificationControlViewModel({
  controlType: "studentReminder",
  student,
  task: { ...task, scheduledTime: "" }
}, dependencies);
assert.equal(missingScheduleModel.blockReason, "저장된 보충 날짜와 시간이 없습니다.");

const scheduledModel = createSupplementNotificationControlViewModel({
  controlType: "studentSchedule",
  currentPreview: "현재  문구",
  job: { status: "scheduled", previewBody: "예약 문구" },
  student,
  task
}, dependencies);
assert.equal(scheduledModel.blockReason, "");
assert.equal(scheduledModel.canCancel, true);
assert.equal(scheduledModel.canReserve, false);
assert.equal(scheduledModel.preview, "예약 문구");
assert.equal(scheduledModel.previewLabel, "현재 예약 문구");
assert.equal(scheduledModel.recipient, "01011112222");
assert.equal(scheduledModel.savedDraftDiffers, true);

const samePreviewModel = createSupplementNotificationControlViewModel({
  controlType: "studentSchedule",
  currentPreview: "같은  문구",
  job: { status: "queued", previewBody: "같은 문구" },
  student,
  task
}, dependencies);
assert.equal(samePreviewModel.savedDraftDiffers, false);

for (const status of ["canceled", "failed"]) {
  const historicalModel = createSupplementNotificationControlViewModel({
    controlType: "studentReminder",
    currentPreview: "다시 만들 현재 문구",
    job: { status, previewBody: "과거 문구" },
    student,
    task
  }, dependencies);
  assert.equal(historicalModel.hasHistoricalJob, true);
  assert.equal(historicalModel.preview, "다시 만들 현재 문구");
  assert.equal(historicalModel.previewLabel, "다시 예약할 현재 문구");
  assert.equal(historicalModel.canReserve, true);
}

const sentModel = createSupplementNotificationControlViewModel({
  controlType: "studentReminder",
  currentPreview: "현재 문구",
  job: { status: "sent", previewBody: "발송 문구" },
  student,
  task
}, dependencies);
assert.equal(sentModel.preview, "발송 문구");
assert.equal(sentModel.previewLabel, "발송된 문구");
assert.equal(sentModel.canCancel, false);
assert.equal(sentModel.canReserve, false);

const modalModel = createSupplementNotificationControlModalViewModel({
  notificationControl: { controlType: "studentSchedule", taskId: "task-1" },
  notificationJobs: [{ makeupTaskId: "task-1", status: "scheduled" }],
  student,
  tasks: [{ ...task, makeupTaskId: "task-1" }]
}, {
  ...dependencies,
  getControlDisplay: (job) => ({ status: job?.status ?? "none" }),
  getControlJob: (_task, jobs) => jobs[0] ?? null,
  getCurrentPreview: (_task, controlType) => `${controlType} 현재 문구`,
  getTaskDraftDiff: () => [],
  getTaskDraftState: () => ({ values: { scheduledDate: "2026-07-24" } })
});
assert.equal(modalModel.task.makeupTaskId, "task-1");
assert.equal(modalModel.job.status, "scheduled");
assert.deepEqual(modalModel.display, { status: "scheduled" });
assert.equal(modalModel.preview, "studentSchedule 현재 문구");
assert.equal(modalModel.canCancel, true);

const dirtyModalModel = createSupplementNotificationControlModalViewModel({
  notificationControl: { controlType: "parentSchedule", taskId: "task-1" },
  student,
  tasks: [{ ...task, makeupTaskId: "task-1" }]
}, {
  ...dependencies,
  getControlDisplay: (job) => ({ status: job?.status ?? "none" }),
  getControlJob: () => null,
  getCurrentPreview: () => "학부모 현재 문구",
  getTaskDraftDiff: () => [{ field: "scheduledTime" }],
  getTaskDraftState: () => ({ values: { scheduledTime: "16:00" } })
});
assert.equal(dirtyModalModel.blockReason, "수정 중인 보충 내용·일정을 먼저 저장해야 현재 원본으로 알림톡을 예약할 수 있습니다.");
assert.equal(dirtyModalModel.canReserve, false);
assert.deepEqual(dirtyModalModel.display, { status: "none" });

console.log("supplement notification control model: deterministic contract passed");
