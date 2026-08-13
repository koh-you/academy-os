import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalStudentIdentityModel } from "../src/domains/lessons/lessonJournalStudentIdentityModel.js";

assert.deepEqual(
  createLessonJournalStudentIdentityModel({
    attendanceLesson: {
      endTime: "18:00",
      startTime: "16:00",
      studentScheduleType: "official"
    },
    student: { grade: "고2", schoolName: "TARGET고" }
  }),
  {
    gradeSchoolLabel: "고2 · TARGET고",
    scheduleTimeAriaLabel: "",
    scheduleTimeClassName: "specialLectureStudentTime",
    scheduleTimeLabel: "16:00-18:00",
    showScheduleTime: true
  }
);

const adjustedTarget = createLessonJournalStudentIdentityModel({
  attendanceLesson: { endTime: "20:00", startTime: "18:30", studentScheduleType: "adjusted" },
  student: { grade: "중3", schoolName: "TARGET중" }
});
assert.equal(adjustedTarget.scheduleTimeClassName, "specialLectureStudentTime adjusted");
assert.equal(adjustedTarget.showScheduleTime, true);

const profileTarget = createLessonJournalStudentIdentityModel({
  attendanceLesson: { endTime: "22:00", startTime: "19:00", studentScheduleType: "profile" },
  student: {}
});
assert.equal(profileTarget.gradeSchoolLabel, "고1 · 학교 미입력");
assert.equal(profileTarget.scheduleTimeClassName, "specialLectureStudentTime profile");
assert.equal(profileTarget.scheduleTimeLabel, "개별시간표");
assert.equal(profileTarget.scheduleTimeAriaLabel, "개별 시간표 적용");

const regularControl = createLessonJournalStudentIdentityModel({
  attendanceLesson: { endTime: "22:30", startTime: "19:00", studentScheduleType: "" },
  student: { grade: "고1", schoolName: "CONTROL고" }
});
assert.equal(regularControl.showScheduleTime, false);

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalStudentIdentity.jsx", import.meta.url),
  "utf8"
);
const rowSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalStudentRow.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.match(journalSource, /<LessonJournalStudentRow/);
assert.match(rowSource, /<LessonJournalStudentIdentity/);
assert.match(journalSource, /onOpenStudentPreview: setStudentPreviewId/);
assert.doesNotMatch(journalSource, /className="studentCell compact"/);
for (const contract of [
  "studentPortalPreviewButton",
  "onOpenStudentPreview(student.studentId)",
  "model.gradeSchoolLabel",
  "model.scheduleTimeClassName",
  "model.scheduleTimeAriaLabel"
]) {
  assert.ok(componentSource.includes(contract), `missing student identity contract: ${contract}`);
}
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "useState", "useEffect"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `student identity must stay presentational: ${forbiddenSideEffect}`);
}

console.log("lesson journal student identity TARGET/CONTROL fixtures passed");
