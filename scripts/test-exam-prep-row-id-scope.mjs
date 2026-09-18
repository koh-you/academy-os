import assert from "node:assert/strict";
import { createExamPrepCalendarCluster } from "../src/domains/exams/examPrepCalendarCluster.js";
import { createExamPrepRowIdScope, createStudentExamPrepRowId } from "../src/domains/exams/examPrepRowIdScope.js";
import { safeIdPart } from "../src/shared/utils/id.js";

// 2026-09-18: 협력 교사 tenant 의 자동 생성 시험정보 id 가 원장 것과 겹쳐(PK 는 exam_prep_id
// 하나) insert 가 충돌 → "저장 실패", 삭제도 0건. tenant 조각을 id 에 넣는다.

// 원장 tenant 는 기존 id 그대로 — 운영 데이터 불변.
assert.equal(createExamPrepRowIdScope("tenant_default"), "");
assert.equal(createExamPrepRowIdScope(""), "");
assert.equal(createExamPrepRowIdScope(undefined), "");
// 다른 tenant 는 짧은 조각. 같은 tenant 면 항상 같은 값(id 안정성).
const scope = createExamPrepRowIdScope("tenant_2c572da4-0786-4181-a4c8-90a64ec26ac3");
assert.equal(scope, "2c572da4");
assert.equal(createExamPrepRowIdScope("tenant_2c572da4-0786-4181-a4c8-90a64ec26ac3"), scope);

const base = { examCycle: "2026-2-mid", schoolName: "창북중", grade: "중3", subject: "공통수학1", safeIdPart };
assert.equal(createStudentExamPrepRowId(base), "exam_prep_2026-2-mid_창북중_중3_공통수학1");
assert.equal(createStudentExamPrepRowId({ ...base, idScope: scope }), "exam_prep_2c572da4_2026-2-mid_창북중_중3_공통수학1");

// 자동 생성 경로가 실제로 조각을 쓴다.
const cluster = createExamPrepCalendarCluster("2026-09-18");
const students = [{ studentId: "s1", status: "active", schoolName: "창북중", grade: "중3", defaultClassTemplateId: "tpl" }];
const [ownerRow] = cluster.buildExamPrepRowsFromStudents(students, "2026-2-mid", "", []);
const [assistantRow] = cluster.buildExamPrepRowsFromStudents(students, "2026-2-mid", "", [], scope);
assert.equal(ownerRow.examPrepId, "exam_prep_2026-2-mid_창북중_중3_공통수학1");
assert.equal(assistantRow.examPrepId, "exam_prep_2c572da4_2026-2-mid_창북중_중3_공통수학1");
assert.notEqual(ownerRow.examPrepId, assistantRow.examPrepId, "같은 학교·학년이라도 tenant 가 다르면 id 가 달라야 한다");

console.log("exam prep row id scope: owner ids unchanged, other tenants get a tenant fragment");
