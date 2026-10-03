// 「시험지 제작」 탭이 어느 메뉴에 붙어 있는지 고정한다.
//
// 2026-10-03 · 제작이 오답관리 하위 탭에 있었다. 만들고 -> 시험지 목록에 넣고 -> 응시를 기록하는
// 흐름이 한 메뉴 안에서 이어져야 하는데 제작만 떨어져 있었고, 오답관리라는 이름과도 맞지 않았다.
// 오답은 시험지를 풀어서도, 학생이 문제지를 직접 풀어서도 생기므로 시험지 하위가 아니라
// 두 출처가 합류하는 자리다(problem_bank_attempts 는 item_id·round 만 쓰고 시험지 개념이 없다).
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const centersSource = await readFile(
  new URL("../src/domains/teacher/LearningSupportCenters.jsx", import.meta.url),
  "utf8"
);
const tabsSource = await readFile(
  new URL("../src/domains/tests/TestManagerPanels.jsx", import.meta.url),
  "utf8"
);

// 오답관리 탭은 둘뿐이다.
const followUpTabs = centersSource
  .slice(centersSource.indexOf('<WorkspaceTabs label="오답관리 작업 구분">'), centersSource.indexOf("</WorkspaceTabs>", centersSource.indexOf('<WorkspaceTabs label="오답관리 작업 구분">')))
  .match(/\["(\w+)", "([^"]+)"\]/g);
assert.deepEqual(
  followUpTabs,
  ['["bookWrong", "교재별 오답"]', '["studentWrong", "학생별 오답"]'],
  "오답관리에는 오답 탭만 남는다 — 시험지 제작은 시험지관리로 옮겼다"
);

// 시험지관리 탭 목록의 첫 탭이 시험지 제작이다(만들고 → 목록 → 응시 순서).
const testManagerTabIds = [...tabsSource.matchAll(/onChange\?\.\("(\w+)"\)/g)].map((match) => match[1]);
assert.deepEqual(
  testManagerTabIds,
  ["examPaper", "attempts", "history", "library", "watermark"],
  "시험지관리 탭 순서: 제작 → 응시 기록 → 학생 이력 → 시험지 목록 → 워터마크"
);
assert.ok(tabsSource.includes("시험지 제작"), "시험지관리 탭에 제작 라벨이 있다");

// 제작 패널은 시험지관리 쪽에서만 mode="exam" 으로 마운트된다.
const examMounts = [...centersSource.matchAll(/<BookWrongAnswerBoard mode="(\w+)"/g)].map((match) => match[1]);
assert.deepEqual(
  examMounts,
  ["class", "student", "exam"],
  "교재별(class)·학생별(student)은 오답관리, 제작(exam)은 시험지관리 한 곳씩만"
);
assert.ok(
  centersSource.indexOf('activeTab === "examPaper"') > centersSource.indexOf('title="시험지관리"'),
  "examPaper 분기는 시험지관리 화면 안에 있다"
);

// 보드는 그대로 공유한다 — 화면만 나누고 교재 트리·문항 격자·이미지 로딩·인쇄 시트는 한 벌이다.
const boardImports = [...centersSource.matchAll(/import \{ BookWrongAnswerBoard \}/g)];
assert.equal(boardImports.length, 1, "보드는 한 번만 import 한다(복제하지 않는다)");

console.log("exam paper tab placement: 오답관리 2탭 · 시험지관리 5탭 · 보드 공유 확인");
