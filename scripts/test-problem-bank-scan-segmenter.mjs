// 스캔 PDF 문항 경계 — EBS 올림포스 공통수학1 실제 OCR 토큰 픽스처(코드·숫자 토큰만)로 검증한다(비전 AI 없이).
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  alignSegmentsToItems,
  buildItemBoxes,
  checkCodeContinuity,
  estimateSkewDegrees,
  filterPlausibleCodes,
  findItemCodes,
  groupCodesByColumn,
  isSameUnitTitle,
  normalizeUnitTitle,
  parseTesseractTsv,
  readFooterPage,
  readFooterUnit,
  readHeaderUnit,
  readSectionLabel,
  rotatePoint,
  sectionFromBadgeColor
} from "../src/domains/problems/scanPdfSegmenter.js";
import { assignPrintColumns, buildPrintEntries } from "../src/domains/problems/problemBankModel.js";

const fixture = JSON.parse(await readFile(new URL("../tests/fixtures/problem-bank/olympos-cm1-scan-tokens.json", import.meta.url), "utf8"));

// tsv 파싱: px → pt
const tsv = "level\tpage_num\tblock_num\tpar_num\tline_num\tword_num\tleft\ttop\twidth\theight\tconf\ttext\n5\t1\t1\t1\t1\t1\t1480\t667\t117\t16\t96.5\t25445-0017\n5\t1\t1\t1\t1\t2\t0\t0\t0\t0\t-1\t\n";
const parsed = parseTesseractTsv(tsv, 220 / 72);
assert.equal(parsed.length, 1, "빈 토큰은 버린다");
assert.equal(parsed[0].text, "25445-0017");
assert.ok(Math.abs(parsed[0].x - 484.4) < 0.2 && Math.abs(parsed[0].h - 5.2) < 0.2);

// 유형 확인(2단 6문항): 두 OCR 모드가 같은 코드를 두 번 주어도 하나로 합친다.
const p12 = findItemCodes(fixture.p12.tokens);
assert.equal(p12.prefix, "25445");
assert.deepEqual(p12.codes.map((code) => code.number).sort(), ["0005", "0006", "0007", "0008", "0009", "0010"]);
const p12Columns = groupCodesByColumn(p12.codes);
assert.equal(p12Columns.length, 2, "코드 오른쪽 끝이 두 자리에 모인다");
assert.deepEqual(p12Columns[0].codes.map((code) => code.number), ["0005", "0006", "0007"]);
assert.deepEqual(p12Columns[1].codes.map((code) => code.number), ["0008", "0009", "0010"]);

// 접두 한 자리 오독(26445-0113)은 같은 책 코드로 받되 신뢰도를 낮춘다.
const p45 = findItemCodes(fixture.p45.tokens, { prefix: "25445" });
assert.deepEqual(p45.codes.map((code) => code.number), ["0111", "0112", "0113"]);
assert.ok(p45.codes.every((code) => code.prefix === "25445"));

// 고난도(전폭 3문항)·서술형(오른쪽 컬럼만 3문항) 상자
function boxesFor(page, { badgeLeft, gutterX = -1 }) {
  const { codes } = findItemCodes(page.tokens, { prefix: "25445" });
  return buildItemBoxes(groupCodesByColumn(codes), {
    pageWidth: page.pageWidth,
    pageHeight: page.pageHeight,
    gutterX,
    findBadgeLeft: (band) => badgeLeft(band),
    findContentBottom: (box) => Math.min(box.y1, box.y0 + 60),
    fallbackLeft: () => 40
  });
}
const p15 = boxesFor(fixture.p15, { badgeLeft: () => 81 });
assert.deepEqual(p15.map((box) => box.number), ["0020", "0021", "0022"]);
assert.ok(p15.every((box) => box.layout === "wide"), "고난도 문항은 쪽 폭의 62% 를 넘는 전폭이다");
assert.ok(p15.every((box) => box.x1 > fixture.p15.pageWidth * 0.9 && box.x0 < 80));
assert.ok(p15[0].y1 <= p15[1].y0, "같은 컬럼의 다음 코드 위에서 끝난다");

const p14 = boxesFor(fixture.p14, { badgeLeft: (band) => (band.x0 > 250 ? 298 : 44), gutterX: 293 });
assert.deepEqual(p14.map((box) => box.number), ["0017", "0018", "0019"]);
assert.ok(p14.every((box) => box.layout === "column" && box.x0 > 290), "서술형 연습장은 점선 오른쪽 컬럼만 문항이다(왼쪽은 풀이 예시)");

// 배지를 못 찾은 상자는 같은 컬럼의 다른 상자 왼쪽을 쓰고, 그것도 없으면 fallback + 표시
const noBadge = boxesFor(fixture.p14, { badgeLeft: () => null, gutterX: 293 });
assert.ok(noBadge.every((box) => box.flags.includes("left_fallback")));

// 책 순서 밖 코드(0805)는 버린다.
const plausible = filterPlausibleCodes([{ number: "0305" }, { number: "0805" }, { number: "0303" }], 302);
assert.deepEqual(plausible.kept.map((code) => code.number), ["0305", "0303"]);
assert.deepEqual(plausible.dropped.map((code) => code.number), ["0805"]);
assert.deepEqual(filterPlausibleCodes([{ number: "0001" }], null).dropped, []);

// 연속성
assert.deepEqual(checkCodeContinuity(["0001", "0002", "0004", "0004"]), { gaps: [["0003", "0003"]], duplicates: ["0004"], first: 1, last: 4 });

// 구역·단원·쪽 번호 읽기(실제 OCR 결과 문자열)
assert.equal(readSectionLabel("정답과 풀이 6쪽\n스\n= < 내신\n능 고난도 문항 00"), "내신·수능 고난도");
assert.equal(readSectionLabel("래 서술형 연습징"), "서술형 연습장");
assert.equal(readSectionLabel("01 다항식의연산 유형 확인"), "유형 확인");
assert.equal(readSectionLabel("서술형 문제\n대단원 종합문제 33"), "대단원 종합문제", "종합문제 안의 서술형 소제목보다 종합문제가 우선");
assert.equal(readSectionLabel("수랭평가 95"), "", "OCR 이 깨진 구역 이름은 모른다고 답한다");
assert.deepEqual(readFooterUnit("이 다항식의 연산 13"), { code: "", title: "다항식의 연산" });
assert.deepEqual(readFooterUnit("나 0 2 6 2 세 22 조에 04 복소수와 이치방정식 37"), { code: "04", title: "복소수와 이치방정식" });
assert.equal(readFooterUnit("12 올림포스ㆍ공통수학1"), null);
assert.equal(readFooterUnit("대단원 종합문제 33"), null);
assert.deepEqual(readHeaderUnit("01 다항식의연산 유형 확인"), { code: "01", title: "다항식의연산" });
assert.equal(readFooterPage("12 올림포스ㆍ공통수학1"), 12);
assert.equal(readFooterPage("이 다항식의 연산 13"), 13);
assert.equal(readFooterPage("정답과 풀이"), null);
assert.ok(isSameUnitTitle("복소수와 이치방정식", "복소수와 이차방정식"));
assert.ok(isSameUnitTitle("경우의수", "경우의 수"));
assert.ok(!isSameUnitTitle("다항식의 연산", "행렬과 그 연산"));
assert.equal(normalizeUnitTitle("복소수와 이치방정식"), "복소수와 이차방정식");
assert.equal(normalizeUnitTitle("이치방정식과 이치함수"), "이차방정식과 이차함수");
assert.equal(normalizeUnitTitle("행렬과 그연산"), "행렬과 그연산", "아는 오독만 고친다");

// 배지 색 → 구역 (빨강 고난도 · 초록 유형/기본 · 파랑은 앞 구역에 따라)
assert.equal(sectionFromBadgeColor([220, 90, 80]), "내신·수능 고난도");
assert.equal(sectionFromBadgeColor([70, 160, 120], { allWide: true }), "기본 유형 익히기");
assert.equal(sectionFromBadgeColor([70, 160, 120]), "유형 확인");
assert.equal(sectionFromBadgeColor([60, 130, 200], { previous: "기본 유형 익히기" }), "유형 확인");
assert.equal(sectionFromBadgeColor([60, 130, 200], { previous: "유형 확인" }), "");
assert.equal(sectionFromBadgeColor(null), "");

// 기울기: 0.8° 기울인 가로줄 점들에서 각도를 되찾는다.
const points = [];
for (let line = 0; line < 30; line += 1) {
  for (let x = 0; x < 400; x += 2) points.push([x, 40 + line * 12 + x * Math.tan((0.8 * Math.PI) / 180)]);
}
const skew = estimateSkewDegrees(points, 500);
assert.ok(Math.abs(skew - 0.8) <= 0.15, `기울기 0.8° 를 ${skew}° 로 쟀다`);
assert.equal(estimateSkewDegrees(points.slice(0, 50), 500), 0, "점이 적으면 0");
const turned = rotatePoint(100, 100, 0, 50, 50);
assert.deepEqual([Math.round(turned.x), Math.round(turned.y)], [100, 100]);

// 인쇄: 전폭 항목은 두 열을 차지하고 다음 항목은 왼쪽 열에서 다시 시작한다.
const wideBook = { bookId: "b", title: "올림포스" };
const wideItems = [
  { itemId: "i1", numberLabel: "0001", numberSort: 1, typeLabel: "기본 유형 익히기 01", regions: [{ kind: "body", bboxNormalized: [0.2, 0.4, 0.86, 0.5] }] },
  { itemId: "i2", numberLabel: "0005", numberSort: 5, typeLabel: "유형 확인 01", regions: [{ kind: "body", bboxNormalized: [0.07, 0.27, 0.45, 0.4] }] },
  { itemId: "i3", numberLabel: "0006", numberSort: 6, typeLabel: "유형 확인 02", regions: [{ kind: "body", bboxNormalized: [0.07, 0.5, 0.45, 0.6] }] }
];
const imagesByItem = new Map(wideItems.map((item) => [item.itemId, [{ kind: "body", url: `https://img/${item.itemId}` }]]));
const entries = buildPrintEntries({ book: wideBook, units: [], items: wideItems, selectedItemIds: ["i1", "i2", "i3"], imagesByItem });
assert.deepEqual(entries.map((entry) => entry.wide), [true, false, false]);
assert.deepEqual(assignPrintColumns(entries), ["wide", "left", "right"]);
assert.deepEqual(assignPrintColumns([{ wide: false }, { wide: true }, { wide: false }, { wide: false }]), ["left", "wide", "left", "right"]);

// 해설 조각 ↔ 문항 정렬: 구역마다 번호가 1 부터 다시 시작하고, 못 읽은 번호(null)·오독·빠진 풀이·군더더기 조각이 섞여도 순서로 맞춘다.
const locals = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 1, 2, 3];
const aligned = alignSegmentsToItems([1, 2, 3, 4, 1, null, 3, 4, 5, 6, 1, 2, 3], locals);
assert.deepEqual(aligned.pairs.map(([, item]) => item), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
assert.equal(aligned.cost, 0.3);
// 풀이 하나가 빠졌다(유형 확인 3 없음) → 그 문항만 비고 나머지는 제자리.
const skipped = alignSegmentsToItems([1, 2, 3, 4, 1, 2, 4, 5, 6, 1, 2, 3], locals);
assert.deepEqual(skipped.pairs.map(([, item]) => item), [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12]);
// 머리글의 외딴 숫자(72)가 조각으로 잡혔다 → 그 조각만 버린다.
const spurious = alignSegmentsToItems([72, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 1, 2, 3], locals);
assert.deepEqual(spurious.pairs[0], [0, null]);
assert.deepEqual(spurious.pairs.slice(1).map(([, item]) => item), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
// 해설 쪽 일부만 돌렸을 때 뒤쪽 문항은 비용 없이 남는다.
const partial = alignSegmentsToItems([1, 2, 3, 4, 1, 2], locals);
assert.deepEqual(partial.pairs.map(([, item]) => item), [0, 1, 2, 3, 4, 5]);
assert.equal(partial.cost, 0);

console.log("problem-bank scan segmenter: ok");
