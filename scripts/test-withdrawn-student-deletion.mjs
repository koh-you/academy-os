import assert from "node:assert/strict";
import { removeStudentIdFromValue } from "../api/routes/coreData.js";

const duplicateStudentId = "student_duplicate";
const preservedStudentId = "student_keep";
const source = {
  scoreRecords: [
    { scoreRecordId: "score_duplicate", studentId: duplicateStudentId, score: 90 },
    { scoreRecordId: "score_keep", studentId: preservedStudentId, score: 95 }
  ],
  lesson: {
    studentIds: [duplicateStudentId, preservedStudentId],
    specialLectureStudentSchedules: [
      { studentId: duplicateStudentId, startTime: "13:00" },
      { studentId: preservedStudentId, startTime: "15:00" }
    ]
  },
  selectedStudentId: duplicateStudentId,
  studentOverrides: {
    [duplicateStudentId]: { amount: 100000 },
    [preservedStudentId]: { amount: 200000 }
  },
  unrelatedText: `memo-${duplicateStudentId}`
};

const cleaned = removeStudentIdFromValue(source, duplicateStudentId);

assert.deepEqual(cleaned.scoreRecords, [
  { scoreRecordId: "score_keep", studentId: preservedStudentId, score: 95 }
]);
assert.deepEqual(cleaned.lesson.studentIds, [preservedStudentId]);
assert.deepEqual(cleaned.lesson.specialLectureStudentSchedules, [
  { studentId: preservedStudentId, startTime: "15:00" }
]);
assert.equal(Object.hasOwn(cleaned, "selectedStudentId"), false);
assert.equal(Object.hasOwn(cleaned.studentOverrides, duplicateStudentId), false);
assert.deepEqual(cleaned.studentOverrides[preservedStudentId], { amount: 200000 });
assert.equal(cleaned.unrelatedText, `memo-${duplicateStudentId}`);

console.log("withdrawn student reference cleanup contract passed");
