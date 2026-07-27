import assert from "node:assert/strict";
import {
  getDefaultTallyStudentId,
  getTallyStudentMergeCandidates,
  getTallyStudentMergeChanges,
  mergeTallyStudentValues
} from "../src/domains/students/tallyStudentMerge.js";

const manualStudent = {
  studentId: "student_manual_1",
  loginId: "04김연우",
  name: "김연우",
  pin: "4821",
  schoolName: "",
  grade: "중3",
  studentPhone: "",
  parentPhone: "",
  defaultClassTemplateId: "",
  textbook: "기존 교재",
  scheduleOverride: "월수 19:00-22:00",
  status: "active"
};
const tallySource = {
  name: "김연우",
  schoolName: "선덕중학교",
  grade: "중3",
  studentPhone: "01011112222",
  parentPhone: "01033334444",
  defaultClassTemplateId: ""
};
const merged = mergeTallyStudentValues(manualStudent, tallySource);

assert.equal(merged.studentId, manualStudent.studentId);
assert.equal(merged.loginId, manualStudent.loginId);
assert.equal(merged.pin, manualStudent.pin);
assert.equal(merged.textbook, manualStudent.textbook);
assert.equal(merged.scheduleOverride, manualStudent.scheduleOverride);
assert.equal(merged.defaultClassTemplateId, "");
assert.equal(merged.schoolName, "선덕중학교");
assert.equal(merged.studentPhone, "01011112222");
assert.deepEqual(
  getTallyStudentMergeChanges(manualStudent, tallySource).map((change) => change.field),
  ["schoolName", "studentPhone", "parentPhone"]
);

const otherStudent = { ...manualStudent, studentId: "student_other", name: "박수빈", defaultClassTemplateId: "template_a" };
const withdrawnDuplicate = { ...manualStudent, studentId: "student_paused", status: "paused" };
assert.equal(getDefaultTallyStudentId(tallySource, [otherStudent, withdrawnDuplicate, manualStudent]), manualStudent.studentId);
assert.equal(
  getDefaultTallyStudentId(tallySource, [{ ...manualStudent, schoolName: "다른중학교" }]),
  ""
);
assert.deepEqual(
  getTallyStudentMergeCandidates(tallySource, [otherStudent, withdrawnDuplicate, manualStudent]).map((student) => student.studentId),
  [manualStudent.studentId, otherStudent.studentId]
);

const assignedStudent = { ...manualStudent, defaultClassTemplateId: "template_existing" };
assert.equal(
  mergeTallyStudentValues(assignedStudent, { ...tallySource, defaultClassTemplateId: "" }).defaultClassTemplateId,
  "template_existing"
);
assert.equal(
  mergeTallyStudentValues(assignedStudent, { ...tallySource, defaultClassTemplateId: "template_new" }).defaultClassTemplateId,
  "template_new"
);

console.log("Tally existing-student merge contract passed.");
