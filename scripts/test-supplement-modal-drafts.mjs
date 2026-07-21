import assert from "node:assert/strict";
import {
  createSupplementScheduleChangeDraft,
  createSupplementScheduleChangePatch,
  getSupplementScheduleTargetLabel
} from "../src/domains/supplements/supplementScheduleChangeDraft.js";

const homeworkTask = {
  taskType: "homework_makeup",
  supplementHomeworkNote: "쎈 C단계",
  sourceLabel: "이전 숙제"
};
assert.equal(getSupplementScheduleTargetLabel(homeworkTask), "쎈 C단계");
assert.equal(getSupplementScheduleTargetLabel({ taskType: "absence_makeup", sourceLabel: "7월 20일 결석" }), "7월 20일 결석");
assert.equal(getSupplementScheduleTargetLabel({ taskType: "absence_makeup" }), "보충 항목");

assert.deepEqual(createSupplementScheduleChangeDraft({
  getDetailSeed: () => "원 수업·숙제 seed",
  task: homeworkTask
}), {
  scheduleChangeDetail: "원 수업·숙제 seed",
  scheduleChangeReason: ""
});
assert.deepEqual(createSupplementScheduleChangeDraft({
  getDetailSeed: () => "",
  task: homeworkTask
}), {
  scheduleChangeDetail: "쎈 C단계",
  scheduleChangeReason: ""
});

const localDraft = { scheduleChangeDetail: "선생님 수정 내역", scheduleChangeReason: "학생 요청", ignored: "제외" };
const patch = createSupplementScheduleChangePatch(localDraft);
assert.deepEqual(patch, { scheduleChangeDetail: "선생님 수정 내역", scheduleChangeReason: "학생 요청" });
localDraft.scheduleChangeDetail = "나중 변경";
assert.equal(patch.scheduleChangeDetail, "선생님 수정 내역");

console.log("supplement modal drafts: deterministic contract passed");
