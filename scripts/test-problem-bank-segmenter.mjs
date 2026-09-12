// 텍스트 PDF 문항 경계 — RPM 중3-2 실제 글자 좌표 픽스처로 검증한다(비전 AI 없이).
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  checkNumberContinuity,
  detectBadgeHeight,
  readFooterUnit,
  segmentPage
} from "../src/domains/problems/textPdfSegmenter.js";
import {
  buildFolderTree,
  computeBoardMetrics,
  computeItemStats,
  studentWrongItemIds,
  wrongRateBand
} from "../src/domains/problems/problemBankModel.js";

const fixture = JSON.parse(await readFile(new URL("../tests/fixtures/problem-bank/rpm-m3-2-text-tokens.json", import.meta.url), "utf8"));
const badgeHeight = detectBadgeHeight([fixture.p11.tokens, fixture.p13.tokens]);
assert.equal(badgeHeight, 13, "RPM 번호 배지는 13pt 글자다");

// 유형 페이지(13쪽): 두 컬럼 · 8문항 · 유형 헤더가 유형명을 준다.
const page13 = segmentPage(fixture.p13.tokens, { badgeHeight, pageWidth: fixture.p13.pageWidth, pageHeight: fixture.p13.pageHeight });
assert.deepEqual(page13.segments.map((segment) => segment.number), ["0061", "0062", "0063", "0064", "0065", "0066", "0067", "0068"]);
assert.equal(page13.columns.length, 2);
assert.deepEqual(page13.segments.map((segment) => segment.column), [0, 0, 0, 0, 1, 1, 1, 1]);
assert.equal(page13.segments[0].typeTitle, "한 변의 길이와 삼각비의 값을 알 때, 삼각형의 변의 길이 구하기");
assert.equal(page13.segments[4].typeTitle, "한 삼각비의 값을 알 때, 다른 삼각비의 값 구하기");
for (let index = 1; index < 4; index += 1) {
  assert.ok(page13.segments[index].y0 >= page13.segments[index - 1].y1 - 0.01, "같은 컬럼 문항은 겹치지 않는다");
}
// 마지막 문항은 바닥글(쪽번호·단원명) 위에서 끝난다.
assert.ok(page13.segments[7].y1 < fixture.p13.pageHeight * 0.93);
assert.deepEqual(readFooterUnit(fixture.p13.tokens, fixture.p13.pageHeight, badgeHeight), { code: "01", title: "삼각비", level: "unit" });

// 교과서문제 페이지(11쪽): 소단원 헤더 · 공통 지시문 그룹 · 같은 행 두 문항.
const page11 = segmentPage(fixture.p11.tokens, { badgeHeight, pageWidth: fixture.p11.pageWidth, pageHeight: fixture.p11.pageHeight });
const numbers11 = page11.segments.map((segment) => Number.parseInt(segment.number, 10)).sort((a, b) => a - b);
assert.deepEqual(numbers11, Array.from({ length: 29 }, (_, index) => 25 + index));
assert.deepEqual(page11.groups.map((group) => group.key).sort(), ["0025-0029", "0030-0034", "0035-0039", "0040-0044", "0045-0050", "0051-0053"]);
const bySeg = new Map(page11.segments.map((segment) => [segment.number, segment]));
assert.equal(bySeg.get("0027").groupKey, "0025-0029");
assert.equal(bySeg.get("0027").typeTitle, "01-3 예각의 삼각비의 값");
assert.equal(bySeg.get("0036").typeTitle, "01-4 0ù 와 90ù 의 삼각비의 값");
// 같은 행의 0045·0046 은 가로로 나뉜다.
assert.ok(Math.abs(bySeg.get("0045").y0 - bySeg.get("0046").y0) < 0.01);
assert.ok(bySeg.get("0045").x1 <= bySeg.get("0046").x0 + 0.01);
assert.ok(bySeg.get("0046").x1 > bySeg.get("0045").x1);
// 그룹은 지시문 줄 위에서 시작해 마지막 문항 아래에서 끝난다.
const group25 = page11.groups.find((group) => group.key === "0025-0029");
assert.ok(group25.y0 < bySeg.get("0025").y0);
assert.ok(group25.y1 >= bySeg.get("0029").y1);
// 0029 는 다음 그룹 지시문 앞에서 잘린다.
const group30 = page11.groups.find((group) => group.key === "0030-0034");
assert.ok(bySeg.get("0029").y1 <= group30.y0 + 0.01);

assert.deepEqual(checkNumberContinuity(["0061", "0062", "0064"]).gaps, [{ after: 62, before: 64 }]);
assert.deepEqual(checkNumberContinuity(["0001", "0002", "0002"]).duplicates, [2]);

// 화면 모델: 오답률 띠·지표·트리.
const attempts = [
  { studentId: "s1", itemId: "i1", round: 1, result: "wrong" },
  { studentId: "s2", itemId: "i1", round: 1, result: "correct" },
  { studentId: "s1", itemId: "i1", round: 2, result: "correct" },
  { studentId: "s1", itemId: "i2", round: 1, result: "wrong" },
  { studentId: "s3", itemId: "i3", round: 1, result: "correct" }
];
const stats = computeItemStats(attempts);
assert.deepEqual(stats.get("i1"), { attempted: 2, wrong: 1, currentWrong: 0, recovered: 1 });
assert.equal(wrongRateBand(stats.get("i1")).key, "band3");
assert.equal(wrongRateBand(stats.get("i3")).key, "allCorrect");
assert.equal(wrongRateBand(undefined).key, "none");
assert.deepEqual(computeBoardMetrics(stats, 10, 3), {
  studentCount: 3, recordedItems: 3, totalItems: 10, firstWrongRate: 50, currentWrongRate: 25, recoveryRate: 50
});
assert.deepEqual(studentWrongItemIds(attempts, "s1"), ["i2"]);
const tree = buildFolderTree([
  { bookId: "a", title: "RPM", folderPath: "중3 / RPM" },
  { bookId: "b", title: "쎈", folderPath: "중3" },
  { bookId: "c", title: "루트", folderPath: "" }
]);
assert.deepEqual([...tree.folders.keys()], ["중3"]);
assert.deepEqual(tree.books.map((book) => book.bookId), ["c"]);
assert.deepEqual([...tree.folders.get("중3").folders.keys()], ["RPM"]);

console.log("problem bank segmenter · model fixtures passed");
