import assert from "node:assert/strict";
import {
  getDefaultTallyStudentId,
  getTallyStudentMergeCandidates,
  getTallyStudentMergeChanges,
  getTallyStudentReplacementChanges,
  mergeTallyStudentValues,
  replaceTallyStudentValues,
  specialLectureTallyStudentFields
} from "../src/domains/students/tallyStudentMerge.js";
import { buildTallyEnrollmentReplacement } from "../src/domains/specialLectures/tallyEnrollmentReplacement.js";

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

const fullyReplaced = replaceTallyStudentValues(
  {
    ...assignedStudent,
    birthYear: "2010",
    studentPhone: "01099998888",
    parentPhone: "01077776666",
    specialNote: "기존 메모"
  },
  {
    name: "김연우",
    schoolName: "선덕중학교",
    grade: "중3",
    studentPhone: "",
    parentPhone: "",
    specialNote: "",
    defaultClassTemplateId: ""
  }
);
assert.equal(fullyReplaced.studentId, manualStudent.studentId);
assert.equal(fullyReplaced.loginId, manualStudent.loginId);
assert.equal(fullyReplaced.pin, manualStudent.pin);
assert.equal(fullyReplaced.textbook, manualStudent.textbook);
assert.equal(fullyReplaced.scheduleOverride, manualStudent.scheduleOverride);
assert.equal(fullyReplaced.birthYear, "");
assert.equal(fullyReplaced.studentPhone, "");
assert.equal(fullyReplaced.parentPhone, "");
assert.equal(fullyReplaced.specialNote, "");
assert.equal(fullyReplaced.defaultClassTemplateId, "");
assert.deepEqual(
  getTallyStudentReplacementChanges(assignedStudent, tallySource)
    .filter((change) => change.clearsExistingValue)
    .map((change) => change.field),
  ["defaultClassTemplateId"]
);

const specialLectureReplaced = replaceTallyStudentValues(
  {
    ...assignedStudent,
    birthYear: "2010",
    studentPhone: "01099998888",
    specialNote: "기존 특강 메모"
  },
  {
    studentName: "김연우",
    schoolName: "선덕중학교",
    grade: "중3",
    studentPhone: "",
    parentPhone: "",
    specialNote: ""
  },
  { fields: specialLectureTallyStudentFields }
);
assert.equal(specialLectureReplaced.studentPhone, "");
assert.equal(specialLectureReplaced.specialNote, "");
assert.equal(specialLectureReplaced.birthYear, "2010");
assert.equal(specialLectureReplaced.defaultClassTemplateId, "template_existing");

const preservedEnrollment = buildTallyEnrollmentReplacement({
  application: { selectedSession: "", memo: "" },
  existingEnrollment: {
    enrollmentId: "enrollment_existing",
    memo: "선생님 수기 메모",
    planReviewedAt: "2026-07-22T00:00:00.000Z",
    planSource: "manual",
    sessionIds: ["session_1"],
    sessionPlans: [
      {
        sessionId: "session_1",
        status: "active",
        effectiveStartTime: "13:00",
        effectiveEndTime: "15:00",
        overrideReason: "수기 확정"
      },
      {
        sessionId: "session_2",
        status: "excluded",
        effectiveStartTime: "",
        effectiveEndTime: "",
        overrideReason: ""
      }
    ]
  },
  guideSessions: [{ sessionId: "session_1" }, { sessionId: "session_2" }],
  requestedPlans: []
});
assert.deepEqual(preservedEnrollment.sessionIds, ["session_1"]);
assert.equal(preservedEnrollment.sessionPlans[0].status, "active");
assert.equal(preservedEnrollment.sessionPlans[0].effectiveStartTime, "13:00");
assert.equal(preservedEnrollment.sessionPlans[0].effectiveEndTime, "15:00");
assert.equal(preservedEnrollment.memo, "선생님 수기 메모");
assert.equal(preservedEnrollment.planSource, "manual");
assert.equal(preservedEnrollment.planReviewedAt, "2026-07-22T00:00:00.000Z");

const missingRequestEnrollment = buildTallyEnrollmentReplacement({
  application: {},
  guideSessions: [{ sessionId: "session_1" }],
  requestedPlans: null
});
assert.deepEqual(missingRequestEnrollment.sessionPlans, [{
  sessionId: "session_1",
  status: "excluded",
  effectiveStartTime: "",
  effectiveEndTime: "",
  overrideReason: ""
}]);

console.log("Tally existing-student merge contract passed.");
