import assert from "node:assert/strict";
import {
  createTenantIdScope,
  getTenantIdScope,
  scopeDeterministicId,
  setTenantIdScope
} from "../src/shared/utils/tenantIdScope.js";
import { createPreExamLessonId } from "../src/domains/lessons/generatedPreExamLessonIdBuilder.js";
import { createTestSessionIdForPaper } from "../src/domains/tests/testManagerUtils.js";
import { getExamPrepIdFromDerivedMathEvent } from "../src/domains/lessons/derivedMathEventExamPrepIdSelector.js";

// 2026-09-19 감사: 결정적 id 가 tenant 를 몰라 협력 교사와 원장이 같은 id 를 만들었다.
// 원장 tenant 는 그대로, 다른 tenant 는 `_t<조각>` 접미.

assert.equal(createTenantIdScope("tenant_default"), "");
assert.equal(createTenantIdScope(""), "");
assert.equal(createTenantIdScope("tenant_2c572da4-0786-4181-a4c8-90a64ec26ac3"), "2c572da4");

// 기본(원장)에서는 아무것도 안 붙는다 — 운영 데이터의 id 불변.
setTenantIdScope("tenant_default");
assert.equal(getTenantIdScope(), "");
assert.equal(scopeDeterministicId("lesson_exam_prep_2026-10-05"), "lesson_exam_prep_2026-10-05");
const ownerPreExam = createPreExamLessonId("derived_math_exam_prep_2026-2-mid_상계고_고1_공통수학1_0");
assert.match(ownerPreExam, /^lesson_pre_exam_/);
assert.doesNotMatch(ownerPreExam, /_t[0-9a-f]{8}$/);

// 협력 교사 tenant 에서는 접미가 붙고, 접두어 판별은 그대로 된다.
setTenantIdScope("tenant_2c572da4-0786-4181-a4c8-90a64ec26ac3");
assert.equal(scopeDeterministicId("lesson_exam_prep_2026-10-05"), "lesson_exam_prep_2026-10-05_t2c572da4");
assert.equal(scopeDeterministicId("lesson_exam_prep_2026-10-05_t2c572da4"), "lesson_exam_prep_2026-10-05_t2c572da4", "두 번 붙이지 않는다");
const assistantPreExam = createPreExamLessonId("derived_math_exam_prep_2026-2-mid_상계고_고1_공통수학1_0");
assert.notEqual(assistantPreExam, ownerPreExam, "같은 입력이라도 tenant 가 다르면 id 가 달라야 한다");
assert.match(assistantPreExam, /^lesson_pre_exam_.*_t2c572da4$/);
const sessionId = createTestSessionIdForPaper({ testDate: "2026-10-05", classTemplateId: "", testTitle: "데일리" });
assert.equal(sessionId, "test_session_2026-10-05_all_데일리_t2c572da4");

// derived_math_<examPrepId>_<entry> 접두 파싱은 접미가 있어도 examPrepId 를 찾는다.
const derived = scopeDeterministicId("derived_math_exam_prep_2026-2-mid_상계고_고1_공통수학1_0");
assert.equal(
  getExamPrepIdFromDerivedMathEvent(derived, [{ examPrepId: "exam_prep_2026-2-mid_상계고_고1_공통수학1" }]),
  "exam_prep_2026-2-mid_상계고_고1_공통수학1"
);

setTenantIdScope("");
assert.equal(scopeDeterministicId("x"), "x");

console.log("tenant id scope: owner ids unchanged, other tenants suffixed, prefix parsing intact");
