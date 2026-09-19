// 시험대비 중복 정리(DELETE /api/exam-prep-rows?duplicates=true)의 대표 행 선택이 화면과 같은지.
//
// 2026-08-11 화면(examPrepCalendarCluster.chooseRepresentativeExamPrepRow)에 "사용자가 제외(isExcluded)한 행이
// 대표" 규칙이 붙었지만 서버(api/routes/coreData.js)에는 같은 함수의 사본이 남아 그 규칙이 없었다. 그 상태로
// 정리를 돌리면 제외한 행이 지워지고 보이는 행이 남아, 사용자가 제외한 시험이 화면에 다시 나타난다.
// 2026-09-19 서버 사본을 지우고 같은 모듈을 쓰게 했다. 여기서는 (1) 서버 findDuplicateExamPrepRows 가 화면
// dedupe 가 고른 대표 행을 그대로 남기는지, (2) 제외 우선·완성도·placeholder·updatedAt 순서의 규칙을 고정한다.
import assert from "node:assert/strict";
import { createExamPrepCalendarCluster } from "../src/domains/exams/examPrepCalendarCluster.js";
import { findDuplicateExamPrepRows } from "../api/routes/coreData.js";

const today = "2026-09-19";
const { dedupeExamPrepRowsForDisplay } = createExamPrepCalendarCluster(today);

function row(examPrepId, overrides = {}) {
  return {
    examPrepId,
    examCycle: "2026-2-mid",
    schoolName: "정의여고",
    grade: "고1",
    subject: "공통수학1",
    publisher: "",
    updatedAt: "2026-09-01T00:00:00.000Z",
    ...overrides
  };
}

function survivors(rows) {
  const duplicateIds = new Set(findDuplicateExamPrepRows(rows, today).map((item) => item.examPrepId));
  return rows.filter((item) => !duplicateIds.has(item.examPrepId)).map((item) => item.examPrepId).sort();
}

function displayed(rows) {
  return dedupeExamPrepRowsForDisplay(rows, { includeExcluded: true }).map((item) => item.examPrepId).sort();
}

// 1. 제외한 행(정보 2칸)과 보이는 행(정보 5칸·더 최신)이 같은 논리 키 → 둘 다 제외한 행을 대표로 고른다.
{
  const rows = [
    row("ep_excluded", { isExcluded: true, publisher: "미래엔", scope: "1단원" }),
    row("ep_visible", {
      publisher: "미래엔", scope: "1~3단원", examPeriod: "10/12~10/14", review: "복습", memo: "메모",
      updatedAt: "2026-09-10T00:00:00.000Z"
    })
  ];
  assert.deepEqual(displayed(rows), ["ep_excluded"]);
  assert.deepEqual(survivors(rows), ["ep_excluded"], "server cleanup must keep the row the user excluded, like the screen does");
  assert.deepEqual(findDuplicateExamPrepRows(rows, today).map((item) => item.examPrepId), ["ep_visible"]);
}

// 2. 제외 여부가 같으면 정보가 더 많은 행이 대표.
{
  const rows = [
    row("ep_sparse", { publisher: "미래엔" }),
    row("ep_full", { publisher: "미래엔", scope: "1~3단원", examPeriod: "10/12~10/14" })
  ];
  assert.deepEqual(displayed(rows), ["ep_full"]);
  assert.deepEqual(survivors(rows), ["ep_full"]);
}

// 3. 정보 수가 같으면 placeholder(_textbook · 출판사 없음)가 아닌 행이 대표.
{
  const rows = [
    row("정의여고_고1_textbook", { publisher: "", scope: "1단원", memo: "메모" }),
    row("ep_real", { publisher: "미래엔", scope: "1단원" })
  ];
  assert.equal(
    createExamPrepCalendarCluster(today).getExamPrepRowCompleteness(rows[0]),
    createExamPrepCalendarCluster(today).getExamPrepRowCompleteness(rows[1]),
    "fixture rows must tie on completeness for the placeholder rule to decide"
  );
  assert.deepEqual(displayed(rows), ["ep_real"]);
  assert.deepEqual(survivors(rows), ["ep_real"]);
}

// 4. 그것도 같으면 updatedAt 이 더 최신인 행이 대표.
{
  const rows = [
    row("ep_old", { publisher: "미래엔", updatedAt: "2026-09-01T00:00:00.000Z" }),
    row("ep_new", { publisher: "미래엔", updatedAt: "2026-09-15T00:00:00.000Z" })
  ];
  assert.deepEqual(displayed(rows), ["ep_new"]);
  assert.deepEqual(survivors(rows), ["ep_new"]);
}

// 5. 논리 키가 다르면(학교·학년·과목·회차) 어느 것도 중복이 아니다. 학교명 공백·정규화는 화면과 같은 함수를 쓴다.
{
  const rows = [
    row("ep_a", { publisher: "미래엔" }),
    row("ep_b", { publisher: "미래엔", grade: "고2" }),
    row("ep_c", { publisher: "미래엔", schoolName: "정의 여고" })
  ];
  // "정의 여고" 는 normalizeSchoolName 으로 "정의여고" 와 같은 키가 되어 ep_a 와 중복이다
  // (정보 수·placeholder 동률 → updatedAt 동률 → 먼저 온 행 유지).
  assert.deepEqual(findDuplicateExamPrepRows(rows, today).map((item) => item.examPrepId), ["ep_c"]);
  assert.deepEqual(survivors(rows), ["ep_a", "ep_b"]);
}

// 6. 서버에 사본이 다시 생기지 않게 소스도 고정한다.
import { readFileSync } from "node:fs";
const coreDataSource = readFileSync(new URL("../api/routes/coreData.js", import.meta.url), "utf8");
assert.ok(coreDataSource.includes('from "../../src/domains/exams/examPrepCalendarCluster.js"'), "coreData.js must import the shared cluster");
for (const copied of ["function chooseRepresentativeExamPrepRow", "function getExamPrepLogicalKey", "function getExamPrepRowCompleteness", "function isPlaceholderExamPrepRow"]) {
  assert.ok(!coreDataSource.includes(copied), `${copied} must not be copied back into coreData.js — the screen owns the rule`);
}

console.log("exam prep duplicate representative parity: excluded-first · completeness · placeholder · updatedAt · logical key all agree between screen and server cleanup");
