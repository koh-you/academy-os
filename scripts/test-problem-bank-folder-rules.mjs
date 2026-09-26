// 교재 제목 -> 과목 폴더 규칙. 실제 등록된 27권 제목을 그대로 넣어 확인한다.
// 제목 표기가 「미적분Ⅰ」·「미적분1」·「중학 3-2」·「중3-2」처럼 갈려도 같은 폴더로 모여야 한다.
import assert from "node:assert/strict";
import { folderForTitle } from "./problem-bank/set-folders.mjs";

const cases = [
  ["100발100중 3-1 기말", "3-1"],
  ["100발100중 3-2 기말", "3-2"],
  ["100발100중 3-2 중간", "3-2"],
  ["RPM 공통수학1", "공통수학1"],
  ["RPM 공통수학2", "공통수학2"],
  ["RPM 기하", "기하"],
  ["RPM 대수", "대수"],
  ["RPM 미적분Ⅰ", "미적분1"],
  ["RPM 미적분Ⅱ", "미적분2"],
  ["RPM 중학 3-1", "3-1"],
  ["RPM 중학 3-2", "3-2"],
  ["RPM 중3-2 수학", "3-2"],
  ["RPM 확률과 통계", "확률과통계"],
  ["개념원리 공통수학1", "공통수학1"],
  ["개념원리 공통수학2", "공통수학2"],
  ["개념원리 기하", "기하"],
  ["개념원리 대수", "대수"],
  ["개념원리 미적분Ⅰ", "미적분1"],
  ["개념원리 미적분Ⅱ", "미적분2"],
  ["개념원리 중학 3-1", "3-1"],
  ["개념원리 중학 3-2", "3-2"],
  ["개념원리 확률과 통계", "확률과통계"],
  ["라이트쎈 공통수학1", "공통수학1"],
  ["라이트쎈 공통수학2", "공통수학2"],
  ["베이직쎈 공통수학1", "공통수학1"],
  ["베이직쎈 공통수학2", "공통수학2"],
  ["쎈 중3-2 수학", "3-2"]
];

for (const [title, expected] of cases) {
  assert.equal(folderForTitle(title), expected, `${title} 는 ${expected} 폴더여야 한다`);
}

// 과목을 못 읽는 제목은 규칙에 걸리지 않아야 한다(폴더를 임의로 정하지 않는다).
assert.equal(folderForTitle("정의여고 1-2 중간 프린트"), null);
assert.equal(folderForTitle(""), null);
assert.equal(folderForTitle(undefined), null);

// 「대수」·「기하」는 낱말 경계를 본다. 「이차함수의 대수적 성질」 같은 제목이 섞여도
// 앞에 한글이 붙어 있으면 과목으로 읽지 않는다.
assert.equal(folderForTitle("RPM 대수"), "대수");
assert.equal(folderForTitle("고등 기하"), "기하");

console.log(`problem bank folder rules · ${cases.length}건 통과`);
