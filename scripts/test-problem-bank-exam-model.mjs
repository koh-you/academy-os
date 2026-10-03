// 시험지 제작 모델 fixture 검사 — 배점 분배 · 문항 순서 · 여러 교재 행에서 인쇄 항목 만들기 · 유형 라벨 목록.
import assert from "node:assert/strict";
import {
  buildPrintEntriesFromRows,
  distributeExamPoints,
  flattenPrintItems,
  groupItemsByTypeSection,
  itemDisplayNumber,
  listTypeLabels,
  orderExamRows
} from "../src/domains/problems/problemBankModel.js";

// 배점: 총점을 정수로 나누고 나머지는 앞 문항부터.
assert.deepEqual(distributeExamPoints(25, 100), Array(25).fill(4));
assert.deepEqual(distributeExamPoints(3, 100), [34, 33, 33]);
assert.deepEqual(distributeExamPoints(0, 100), []);
assert.equal(distributeExamPoints(7, 100).reduce((sum, value) => sum + value, 0), 100);

const item = (itemId, numberSort, extra = {}) => ({ itemId, numberLabel: String(numberSort), numberSort, unitId: "u", regions: [{ kind: "body", bboxNormalized: [0, 0, 0.45, 0.2] }], ...extra });
const rows = [
  { item: item("b-3", 3), bookTitle: "쎈", unitTitle: "02 직선", unitPosition: 1, addedAt: 3 },
  { item: item("a-9", 9), bookTitle: "베이직쎈", unitTitle: "01 평면좌표", unitPosition: 0, addedAt: 1 },
  { item: item("a-2", 2), bookTitle: "베이직쎈", unitTitle: "03 원", unitPosition: 2, addedAt: 2 }
];

// 교재 순서: 교재명 → 단원 위치 → 번호. 담은 순서: addedAt. 섞기: 같은 seed 면 같은 순서, 원소는 보존.
assert.deepEqual(orderExamRows(rows, "book").map((row) => row.item.itemId), ["a-9", "a-2", "b-3"]);
assert.deepEqual(orderExamRows(rows, "added").map((row) => row.item.itemId), ["a-9", "a-2", "b-3"]);
const shuffledOnce = orderExamRows(rows, "shuffle", 7).map((row) => row.item.itemId);
assert.deepEqual(orderExamRows(rows, "shuffle", 7).map((row) => row.item.itemId), shuffledOnce);
assert.deepEqual([...shuffledOnce].sort(), ["a-2", "a-9", "b-3"]);
assert.equal(rows[0].item.itemId, "b-3", "원본 배열은 바뀌지 않는다");

// 여러 교재 행 → 인쇄 항목: 순서를 그대로 지키고 출처 줄은 행의 교재·단원을 쓴다. 이미지는 itemId 로 찾는다.
const images = new Map([
  ["a-9", [{ itemId: "a-9", kind: "body", url: "https://img/a-9" }, { itemId: "a-9", kind: "answer", url: "https://img/a-9-ans" }]],
  ["b-3", [{ itemId: "b-3", kind: "body", url: "https://img/b-3" }]]
]);
const entries = buildPrintEntriesFromRows(orderExamRows(rows, "book"), images);
assert.deepEqual(entries.map((entry) => entry.key), ["a-9", "a-2", "b-3"]);
assert.equal(entries[0].sourceLine, "베이직쎈 · 01 평면좌표 · 9번");
assert.equal(entries[2].sourceLine, "쎈 · 02 직선 · 3번");
assert.equal(entries[0].bodyUrl, "https://img/a-9");
assert.equal(entries[1].bodyUrl, "", "이미지가 없는 문항은 빈 URL");
const flat = flattenPrintItems(entries);
assert.deepEqual(flat.map((row) => row.entryNumber), [1, 2, 3]);
assert.equal(flat[0].answerUrl, "https://img/a-9-ans");

// 유형 라벨 목록: 등장 순서 · 빈 값 제외 · 중복 없음.
assert.deepEqual(
  listTypeLabels([{ typeLabel: "유형 002" }, { typeLabel: "" }, { typeLabel: "개념 01" }, { typeLabel: "유형 002" }]),
  ["유형 002", "개념 01"]
);

// 화면에 찍는 문항 번호: 「인쇄쪽-번호」에서 **번호**를 뽑는다. 쪽을 뽑으면 한 쪽의 문항이 전부 같은 숫자가 된다
// (2026-10-03 전까지 Number.parseInt("8-01") → 8 이라 베이직쎈 공통수학2 화면이 8 8 8 8 … 로 보였다).
assert.equal(itemDisplayNumber("8-01"), "1");
assert.equal(itemDisplayNumber("8-10"), "10");
assert.equal(itemDisplayNumber("9-11"), "11", "번호는 쪽을 넘어 이어진다");
assert.equal(itemDisplayNumber("60-21"), "21");
assert.equal(itemDisplayNumber("0001"), "1", "책 전체 연속 번호(RPM)");
assert.equal(itemDisplayNumber("1133"), "1133");
assert.equal(itemDisplayNumber("16-e1"), "예1", "예제");
assert.equal(itemDisplayNumber("12-h1"), "핵1", "핵심문제");
assert.equal(itemDisplayNumber("12-c1"), "확1", "확인");
assert.equal(itemDisplayNumber("34-u1"), "유1", "유제");
assert.equal(itemDisplayNumber(""), "");
assert.equal(itemDisplayNumber(null), "");

// 단원 안 구획: 이웃한 같은 라벨끼리만 묶는다(교재 순서 보존 — 같은 이름이 떨어져 나오면 구획도 둘).
const sections = groupItemsByTypeSection([
  { itemId: "a", typeLabel: "개념 01" },
  { itemId: "b", typeLabel: "개념 01" },
  { itemId: "c", typeLabel: "유형 001" },
  { itemId: "d", typeLabel: "개념 01" }
]);
assert.deepEqual(sections.map((s) => [s.label, s.items.length]), [["개념 01", 2], ["유형 001", 1], ["개념 01", 1]]);
assert.deepEqual(groupItemsByTypeSection([]).length, 0);
// 라벨이 없는 교재는 구획 하나로 묶여 머리줄 없이 예전처럼 보인다.
assert.deepEqual(groupItemsByTypeSection([{ itemId: "a" }, { itemId: "b" }]).map((s) => [s.label, s.items.length]), [["", 2]]);

console.log("problem bank exam model fixtures passed");
