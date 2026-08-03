import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createConsecutiveAttendanceVisitRecord,
  findConsecutiveAbsenceMakeupVisit,
  getConsecutiveAttendanceVisitLabel,
  loadConsecutiveAttendanceVisit,
  saveConsecutiveAttendanceVisitRecords,
  shouldApplyConsecutiveAttendanceVisit
} from "../src/domains/lessons/attendanceVisitContinuity.js";

const absenceTask = {
  linkedLessonId: "lesson-makeup",
  makeupTaskId: "task-absence",
  taskType: "absence_makeup"
};
const lessons = [
  {
    className: "김룡기 결석보강",
    date: "2026-08-03",
    endTime: "16:00",
    lessonId: "lesson-makeup",
    lessonType: "makeup",
    sourceMakeupTaskId: "task-absence",
    startTime: "15:00"
  },
  {
    className: "고1 정규수업",
    date: "2026-08-03",
    endTime: "19:00",
    lessonId: "lesson-regular",
    lessonType: "class",
    startTime: "16:00"
  }
];

const visitFromMakeup = findConsecutiveAbsenceMakeupVisit({
  lessons,
  makeupTasks: [absenceTask],
  selectedLessonId: "lesson-makeup"
});
assert.deepEqual(visitFromMakeup.lessonIds, ["lesson-makeup", "lesson-regular"]);
assert.equal(visitFromMakeup.gapMinutes, 0);
assert.equal(visitFromMakeup.visitType, "absence_makeup_then_regular");
assert.equal(shouldApplyConsecutiveAttendanceVisit({ eventType: "checkin", selectedLessonId: "lesson-makeup", visit: visitFromMakeup }), true);
assert.equal(shouldApplyConsecutiveAttendanceVisit({ eventType: "checkout", selectedLessonId: "lesson-makeup", visit: visitFromMakeup }), false);
assert.equal(getConsecutiveAttendanceVisitLabel(visitFromMakeup), "김룡기 결석보강 → 고1 정규수업");

const thirtyMinuteVisit = findConsecutiveAbsenceMakeupVisit({
  lessons: [lessons[0], { ...lessons[1], startTime: "16:30" }],
  makeupTasks: [absenceTask],
  selectedLessonId: "lesson-makeup"
});
assert.equal(thirtyMinuteVisit.gapMinutes, 30, "정확히 30분 간격은 연속 방문에 포함한다");

let manualMakeupQueryCount = 0;
assert.equal(await loadConsecutiveAttendanceVisit({
  lessons,
  listMakeupTasks: async () => {
    manualMakeupQueryCount += 1;
    throw new Error("manual attendance must not query makeup tasks");
  },
  selectedLessonId: "lesson-makeup",
  source: "manual"
}), null);
assert.equal(manualMakeupQueryCount, 0, "수동 출결은 보강 task 조회에 새로 의존하지 않는다");

let kioskMakeupQueryCount = 0;
assert.deepEqual((await loadConsecutiveAttendanceVisit({
  lessons,
  listMakeupTasks: async () => {
    kioskMakeupQueryCount += 1;
    return { makeupTasks: [absenceTask] };
  },
  selectedLessonId: "lesson-makeup",
  source: "kiosk"
})).lessonIds, ["lesson-makeup", "lesson-regular"]);
assert.equal(kioskMakeupQueryCount, 1);

const recordDependencies = {
  calculateLateMinutes: (lesson, checkedTime) => lesson.lessonId === "lesson-regular" && checkedTime === "16:07" ? 2 : 0,
  createAttendanceIso: (date, time) => `${date}T${time}:00+09:00`,
  createRecordId: (lessonId, studentId) => `record_${lessonId}_${studentId}`,
  hasArrival: (record) => Boolean(record?.checkInTime),
  hasCheckout: (record) => Boolean(record?.checkOutTime)
};
const regularCheckin = createConsecutiveAttendanceVisitRecord({
  ...recordDependencies,
  currentTime: "16:07",
  eventType: "checkin",
  lateGraceMinutes: 5,
  lesson: lessons[1],
  nowIso: "2026-08-03T07:07:00.000Z",
  studentId: "student-kim"
});
assert.equal(regularCheckin.attendanceStatus, "late");
assert.equal(regularCheckin.lateMinutes, 2);
assert.equal(regularCheckin.checkInTime, "16:07");
assert.equal(regularCheckin.checkOutTime, "");

const regularCheckout = createConsecutiveAttendanceVisitRecord({
  ...recordDependencies,
  currentTime: "18:52",
  eventType: "checkout",
  existingRecord: regularCheckin,
  lesson: lessons[1],
  nowIso: "2026-08-03T09:52:00.000Z",
  studentId: "student-kim"
});
assert.equal(regularCheckout.checkInTime, "16:07");
assert.equal(regularCheckout.checkOutTime, "18:52");
assert.equal(regularCheckout.attendanceStatus, "late");
assert.equal(createConsecutiveAttendanceVisitRecord({
  ...recordDependencies,
  currentTime: "18:53",
  eventType: "checkout",
  existingRecord: regularCheckout,
  lesson: lessons[1],
  studentId: "student-kim"
}), null, "완료된 수업일지는 재하원으로 덮지 않는다");

const originalMakeupRecord = { lessonId: "lesson-makeup", studentId: "student-kim", updatedAt: "before-makeup" };
const originalRegularRecord = { lessonId: "lesson-regular", studentId: "student-kim", updatedAt: "before-regular" };
let receivedSavePlan = null;
const persistedVisitRecords = await saveConsecutiveAttendanceVisitRecords({
  auditId: "attendance-visit-audit",
  recordBeforeByLessonId: new Map([
    ["lesson-makeup", originalMakeupRecord],
    ["lesson-regular", originalRegularRecord]
  ]),
  records: [
    { ...originalMakeupRecord, checkOutTime: "18:52" },
    { ...originalRegularRecord, checkOutTime: "18:52" }
  ],
  savePlan: async (plan) => {
    receivedSavePlan = plan;
    return { records: plan.recordChanges.map((change) => ({ ...change.after, updatedAt: `${change.after.lessonId}-saved` })) };
  }
});
assert.equal(receivedSavePlan.auditId, "attendance-visit-audit");
assert.equal(receivedSavePlan.recordChanges.length, 2);
assert.equal(receivedSavePlan.recordChanges[0].before, originalMakeupRecord);
assert.equal(receivedSavePlan.recordChanges[1].before, originalRegularRecord);
assert.deepEqual(persistedVisitRecords.map((record) => record.updatedAt), ["lesson-makeup-saved", "lesson-regular-saved"]);
assert.deepEqual(await saveConsecutiveAttendanceVisitRecords({
  auditId: "local-fallback",
  records: [{ lessonId: "lesson-makeup" }, { lessonId: "lesson-regular" }],
  savePlan: async () => ({ records: [], source: "local_sample" })
}), [{ lessonId: "lesson-makeup" }, { lessonId: "lesson-regular" }]);
await assert.rejects(
  () => saveConsecutiveAttendanceVisitRecords({
    auditId: "mismatch",
    records: [{ lessonId: "lesson-makeup" }, { lessonId: "lesson-regular" }],
    savePlan: async () => ({ records: [{ lessonId: "lesson-makeup" }], source: "supabase" })
  }),
  /두 수업일지 재조회가 일치하지 않습니다/
);

const visitFromRegular = findConsecutiveAbsenceMakeupVisit({
  lessons: [...lessons].reverse(),
  makeupTasks: [absenceTask],
  selectedLessonId: "lesson-regular"
});
assert.equal(shouldApplyConsecutiveAttendanceVisit({ eventType: "checkout", selectedLessonId: "lesson-regular", visit: visitFromRegular }), true);

assert.equal(findConsecutiveAbsenceMakeupVisit({
  lessons: [lessons[0], { ...lessons[1], startTime: "16:31" }],
  makeupTasks: [absenceTask],
  selectedLessonId: "lesson-makeup"
}), null, "31분 이상 떨어진 수업은 한 방문으로 묶지 않는다");

assert.equal(findConsecutiveAbsenceMakeupVisit({
  lessons,
  makeupTasks: [{ ...absenceTask, taskType: "homework_makeup" }],
  selectedLessonId: "lesson-makeup"
}), null, "숙제보충은 결석보강 연속 출결에 포함하지 않는다");

assert.equal(findConsecutiveAbsenceMakeupVisit({
  lessons: [lessons[0], { ...lessons[1], lessonType: "specialLecture" }],
  makeupTasks: [absenceTask],
  selectedLessonId: "lesson-makeup"
}), null, "특강은 정규수업 연속 출결로 오인하지 않는다");

assert.equal(findConsecutiveAbsenceMakeupVisit({
  lessons: [
    lessons[0],
    { ...lessons[0], lessonId: "lesson-intervening-makeup", sourceMakeupTaskId: "task-homework", startTime: "16:00", endTime: "16:30" },
    { ...lessons[1], startTime: "16:30" }
  ],
  makeupTasks: [absenceTask, { makeupTaskId: "task-homework", taskType: "homework_makeup" }],
  selectedLessonId: "lesson-makeup"
}), null, "중간에 다른 수업이 있으면 뒤 정규수업을 건너뛰어 묶지 않는다");

const source = await readFile(new URL("../src/domains/lessons/attendanceVisitContinuity.js", import.meta.url), "utf8");
const serverSource = await readFile(new URL("../api/server.js", import.meta.url), "utf8");
for (const forbidden of ["fetch(", "/api/", "useState", "useEffect", "localStorage", "Supabase", "Solapi", "new Date"] ) {
  assert.equal(source.includes(forbidden), false, `continuity model must not own ${forbidden}`);
}
assert.equal(serverSource.match(/tryRecordAttendanceEvent\(attendanceEventPayload\)/g)?.length, 1, "한 visit action은 출결 이벤트를 한 번만 기록한다");
assert.equal(serverSource.match(/queueKioskAttendanceAlimtalk\(attendanceEventPayload, alimtalkPayload\)/g)?.length, 1, "한 visit action은 키오스크 알림을 한 번만 queue한다");

console.log("consecutive absence-makeup attendance visit fixtures passed");
