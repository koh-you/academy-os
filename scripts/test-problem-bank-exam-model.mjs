// 시험지 제작 모델 fixture 검사 — 배점 분배 · 문항 순서 · 여러 교재 행에서 인쇄 항목 만들기 · 유형 라벨 목록.
import assert from "node:assert/strict";
import {
  buildPrintEntriesFromRows,
  distributeExamPoints,
  flattenPrintItems,
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

console.log("problem bank exam model fixtures passed");
