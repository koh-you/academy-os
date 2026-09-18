import assert from "node:assert/strict";
import { createExamPrepCalendarCluster } from "../src/domains/exams/examPrepCalendarCluster.js";

// 2026-09-18: 자동 생성의 "이미 있나" 판정은 고사 학기 + 학교 + 학년으로만 한다.
// 과목까지 보던 판정이 창일중 두 줄을, id 만 보던 판정(#365)이 전 학교 두 줄을 만들었다.

const cluster = createExamPrepCalendarCluster("2026-09-18");
const students = [
  { studentId: "s1", status: "active", schoolName: "노곡중", grade: "중3" },
  { studentId: "s2", status: "active", schoolName: "자운고", grade: "고2" },
  { studentId: "s3", status: "active", schoolName: "창북중", grade: "중3" },
  { studentId: "s4", status: "withdrawn", schoolName: "퇴원고", grade: "고1" }
];

// 아무것도 없으면 활성 학생의 학교·학년마다 한 줄. 옛 id 형식 그대로(원장 데이터 불변).
const fresh = cluster.buildExamPrepRowsFromStudents(students, "2026-2-mid", "", []);
assert.deepEqual(fresh.map((row) => row.examPrepId), [
  "exam_prep_2026-2-mid_노곡중_중3_공통수학1",
  "exam_prep_2026-2-mid_자운고_고2_공통수학1",
  "exam_prep_2026-2-mid_창북중_중3_공통수학1"
]);

// 선생님이 과목을 고친 행(중3-2 수학), id 형식이 다른 행(#365 시절), 학교명을 띄어 쓴 행 —
// 전부 "이미 있는 학교·학년" 이라 다시 만들지 않는다.
const existing = [
  { examPrepId: "exam_prep_2026-2-mid_노곡중_중3_공통수학1", examCycle: "2026-2-mid", schoolName: "노곡중", grade: "중3", subject: "중3-2 수학" },
  { examPrepId: "exam_prep_2c572da4_2026-2-mid_자운고_고2_공통수학1", examCycle: "2026-2-mid", schoolName: "자운고", grade: "고2", subject: "미적분1" },
  { examPrepId: "manual-1", examCycle: "2026-2-mid", schoolName: "창북 중", grade: "중 3", subject: "공통수학1" }
];
assert.deepEqual(cluster.buildExamPrepRowsFromStudents(students, "2026-2-mid", "", existing), []);

// 다른 고사의 행은 세지 않는다 — 새 고사가 열리면 다시 만든다.
const otherCycle = existing.map((row) => ({ ...row, examCycle: "2026-1-final" }));
assert.equal(cluster.buildExamPrepRowsFromStudents(students, "2026-2-mid", "", otherCycle).length, 3);

// 제외(isExcluded) 행도 "있는 행" 이다 — 제외했는데 자동 생성이 다시 만들면 안 된다.
const excluded = [{ ...existing[0], isExcluded: true }];
assert.equal(cluster.buildExamPrepRowsFromStudents(students, "2026-2-mid", "", excluded).some((row) => row.schoolName === "노곡중"), false);

console.log("exam prep auto-row dedupe: school+grade per cycle, subject/id-agnostic, excluded rows respected");
