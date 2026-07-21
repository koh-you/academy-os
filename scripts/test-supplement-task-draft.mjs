import assert from "node:assert/strict";
import {
  areSupplementTaskDraftValuesEqual,
  createPersistableSupplementTask,
  createSupplementTaskDraft,
  getSupplementHomeworkNoteValue,
  getSupplementNotificationDraftConfig,
  getSupplementNotificationDraftFieldForControl,
  getSupplementPersistedEditFingerprint,
  getSupplementTaskDraftDiff,
  getSupplementTaskSourceVersion,
  getSupplementTeacherEditedFields,
  isSupplementTeacherEditedField,
  mergeSupplementTeacherEditedFields,
  supplementNotificationDraftConfigs
} from "../src/domains/supplements/supplementTaskDraft.js";

assert.equal(supplementNotificationDraftConfigs.length, 3);
assert.equal(getSupplementNotificationDraftConfig("notificationDraft").controlType, "studentReminder");
assert.equal(getSupplementNotificationDraftConfig("missing").controlType, "studentSchedule");
assert.equal(getSupplementNotificationDraftFieldForControl("parentSchedule"), "parentScheduleNotificationDraft");
assert.equal(getSupplementNotificationDraftFieldForControl("missing"), "studentScheduleNotificationDraft");

const editedTask = {
  supplementTeacherEditedFields: ["notificationDraft", "invalid", "notificationDraft", "parentScheduleNotificationDraft"]
};
assert.deepEqual(getSupplementTeacherEditedFields(editedTask), ["notificationDraft", "parentScheduleNotificationDraft"]);
assert.equal(isSupplementTeacherEditedField(editedTask, "notificationDraft"), true);
assert.equal(isSupplementTeacherEditedField(editedTask, "invalid"), false);
assert.deepEqual(
  mergeSupplementTeacherEditedFields(editedTask, ["studentScheduleNotificationDraft", "invalid"]),
  ["notificationDraft", "parentScheduleNotificationDraft", "studentScheduleNotificationDraft"]
);

assert.equal(getSupplementHomeworkNoteValue({}, "원천 숙제"), "원천 숙제");
assert.equal(getSupplementHomeworkNoteValue({ supplementHomeworkNote: "" }, "원천 숙제"), "");

const dependencyCalls = [];
const dependencies = {
  buildScheduleNoticeBody: (task, suffix, templates) => {
    dependencyCalls.push(["schedule", task.supplementMethod, suffix, templates.marker]);
    return `일정:${task.supplementMethod}`;
  },
  createNotificationDraft: (task, students, templates) => {
    dependencyCalls.push(["reminder", task.supplementMethod, students.map((student) => student.studentId), templates.marker]);
    return `11시:${task.supplementMethod}`;
  },
  normalizeMethodForTask: (taskType, method) => method || `${taskType}:기본`
};
const student = { studentId: "student-1" };
const sourceTask = {
  taskType: "absence_makeup",
  sourceLabel: "결석 원천",
  scheduledDate: "2026-07-23",
  scheduledTime: "15:00"
};
const generatedDraft = createSupplementTaskDraft(sourceTask, student, { marker: "template" }, dependencies);
assert.deepEqual(generatedDraft, {
  status: "draft",
  supplementHomeworkNote: "결석 원천",
  supplementProgressMemo: "",
  supplementMethod: "absence_makeup:기본",
  scheduledDate: "2026-07-23",
  scheduledTime: "15:00",
  studentScheduleNotificationDraft: "일정:absence_makeup:기본",
  parentScheduleNotificationDraft: "일정:absence_makeup:기본",
  notificationDraft: "11시:absence_makeup:기본"
});
assert.deepEqual(dependencyCalls, [
  ["reminder", "absence_makeup:기본", ["student-1"], "template"],
  ["schedule", "absence_makeup:기본", "", "template"]
]);

const teacherFinalDraft = createSupplementTaskDraft({
  ...sourceTask,
  notificationDraft: "",
  studentScheduleNotificationDraft: "학생 수정",
  parentScheduleNotificationDraft: "",
  supplementTeacherEditedFields: [
    "notificationDraft",
    "studentScheduleNotificationDraft",
    "parentScheduleNotificationDraft"
  ]
}, student, { marker: "template" }, dependencies);
assert.equal(teacherFinalDraft.notificationDraft, "");
assert.equal(teacherFinalDraft.studentScheduleNotificationDraft, "학생 수정");
assert.equal(teacherFinalDraft.parentScheduleNotificationDraft, "");

assert.equal(areSupplementTaskDraftValuesEqual(generatedDraft, { ...generatedDraft, status: "scheduled", ignored: true }), true);
assert.equal(areSupplementTaskDraftValuesEqual(generatedDraft, { ...generatedDraft, scheduledTime: "16:00" }), false);
const diff = getSupplementTaskDraftDiff(sourceTask, { ...generatedDraft, scheduledTime: "", notificationDraft: "수정" }, {
  createTaskDraft: () => generatedDraft
});
assert.deepEqual(diff, [
  { after: "미입력", before: "15:00", field: "scheduledTime", label: "시간" },
  { after: "수정", before: "11시:absence_makeup:기본", field: "notificationDraft", label: "당일 학생 11시 알림톡 문구" }
]);

const fingerprintA = getSupplementPersistedEditFingerprint({
  makeupTaskId: "task-1",
  supplementTeacherEditedFields: ["studentScheduleNotificationDraft", "notificationDraft"]
});
const fingerprintB = getSupplementPersistedEditFingerprint({
  makeupTaskId: "task-1",
  supplementTeacherEditedFields: ["notificationDraft", "studentScheduleNotificationDraft"]
});
assert.equal(fingerprintA, fingerprintB);
assert.notEqual(getSupplementTaskSourceVersion(sourceTask), getSupplementTaskSourceVersion({ ...sourceTask, scheduledTime: "16:00" }));
assert.deepEqual(createPersistableSupplementTask({ makeupTaskId: "task-1", isLocalDraftTask: true, keep: 1 }), {
  makeupTaskId: "task-1",
  keep: 1
});

console.log("supplement task draft: deterministic contract passed");
