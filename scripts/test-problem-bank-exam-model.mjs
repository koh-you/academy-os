// 시험지 제작 모델 fixture 검사 — 배점 분배 · 문항 순서 · 여러 교재 행에서 인쇄 항목 만들기 · 유형 라벨 목록.
import assert from "node:assert/strict";
import { prettifyMathLabel } from "../src/domains/problems/mathLabelText.js";
import {
  buildPrintEntriesFromRows,
  splitBankItemId,
  splitBooksBySource,
  withNumberVariants,
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

// 유형 제목 속 수식을 읽을 수 있는 글자로 바꾼다. 교재 제목에는 전사본 LaTeX 이 그대로 들어 있고
// (등록 교재 3,865개 제목 중 433개), 2026-10-03 에 단원 안 구획 머리줄을 넣으면서 화면에 드러났다.
// 아래는 전부 실제 등록 교재의 제목에서 가져온 것이다.
assert.equal(prettifyMathLabel(String.raw`유형 02 이차함수 $y=ax^2+bx+c$의 그래프`), "유형 02 이차함수 y=ax²+bx+c의 그래프");
assert.equal(prettifyMathLabel(String.raw`유형 08 $\sqrt{a^2}$의 성질`), "유형 08 √(a²)의 성질");
assert.equal(prettifyMathLabel(String.raw`유형 08 $30^\circ$, $45^\circ$의 삼각비의 값`), "유형 08 30°, 45°의 삼각비의 값");
// 이 제목은 `${` 를 담고 있어 템플릿 문자열로 못 쓴다(빈 보간으로 읽힌다).
assert.equal(prettifyMathLabel("유형 01 ${}_n\\mathrm{C}_r$의 계산"), "유형 01 ₙCᵣ의 계산");
assert.equal(prettifyMathLabel(String.raw`유형 03 $\sum\limits_{k=1}^{n} r^k$의 꼴의 계산`), "유형 03 Σ_(k=1)ⁿ rᵏ의 꼴의 계산");
assert.equal(prettifyMathLabel(String.raw`유형 10 $\dfrac{a^x-a^{-x}}{a^x+a^{-x}}$의 꼴`), "유형 10 (aˣ-a⁻ˣ)/(aˣ+a⁻ˣ)의 꼴");
assert.equal(
  prettifyMathLabel(String.raw`유형 041 확률의 곱셈정리; $\mathrm{P}(B)=\mathrm{P}(A\cap B)+\mathrm{P}(\comp{A}\cap B)$`),
  "유형 041 확률의 곱셈정리; P(B)=P(A∩B)+P(Aᶜ∩B)"
);
// 유니코드에 없는 지수는 사라지게 두지 말고 `^(…)` 로 편다. 안쪽도 다시 변환한다.
assert.equal(prettifyMathLabel(String.raw`유형 030 $y=a^{px+q}+r$ 꼴`), "유형 030 y=a^(px+q)+r 꼴");
assert.equal(prettifyMathLabel(String.raw`유형 03 $\lim\limits_{h\to 0}\frac{f(a+h)-f(a)}{h}$의 꼴`), "유형 03 lim_(h→0)(f(a+h)-f(a))/h의 꼴");
// 수식이 없으면 손대지 않는다.
assert.equal(prettifyMathLabel("개념 01 두 점 사이의 거리"), "개념 01 두 점 사이의 거리");
assert.equal(prettifyMathLabel(""), "");
assert.equal(prettifyMathLabel(null), "");
// `$` 가 홀수면 전사가 깨진 것이다. 더 깨뜨리지 말고 원문을 그대로 둔다.
assert.equal(prettifyMathLabel(String.raw`유형 05 $x^2 의 값`), String.raw`유형 05 $x^2 의 값`);

console.log("유형 제목 수식 변환 fixture 통과");

// ── 숫자변형: 고른 문항 뒤에 변형이 서고, 변형 없는 문항은 혼자 선다 ────────────────────────
const variantRows = [
  { item: { itemId: "b-19", numberLabel: "10-19" }, bookTitle: "쎈B 대수", unitTitle: "지수" },
  { item: { itemId: "b-20", numberLabel: "10-20" }, bookTitle: "쎈B 대수", unitTitle: "지수" }
];
const variantMap = new Map([
  ["b-19", [
    { itemId: "b-19v1", numberLabel: "10-19v1", variantOf: "b-19", variantLevel: 1 },
    { itemId: "b-19v2", numberLabel: "10-19v2", variantOf: "b-19", variantLevel: 2 }
  ]]
]);
assert.deepEqual(
  withNumberVariants(variantRows, variantMap).map((row) => row.item.itemId),
  ["b-19", "b-19v1", "b-19v2", "b-20"]
);
// 변형이 하나도 없으면 순서도 개수도 그대로다(토글을 켜도 아무 일이 없어야 한다).
assert.deepEqual(withNumberVariants(variantRows, new Map()).map((row) => row.item.itemId), ["b-19", "b-20"]);
assert.deepEqual(withNumberVariants(variantRows, null).map((row) => row.item.itemId), ["b-19", "b-20"]);
// 변형은 교재·단원 출처를 원본에서 물려받는다 — 원본과 같은 자리에서 나온 문항이다.
assert.equal(withNumberVariants(variantRows, variantMap)[1].bookTitle, "쎈B 대수");
assert.equal(withNumberVariants(variantRows, variantMap)[1].unitTitle, "지수");

// 출처 줄은 변형 번호표(`10-19v1`)가 아니라 **원본 번호**로 읽어야 원본을 찾아갈 수 있다.
const variantEntries = buildPrintEntriesFromRows(withNumberVariants(variantRows, variantMap), new Map());
assert.equal(variantEntries[0].sourceLine, "쎈B 대수 · 지수 · 10-19번");
assert.equal(variantEntries[1].sourceLine, "쎈B 대수 · 지수 · 10-19번 숫자변형");
assert.equal(variantEntries[2].sourceLine, "쎈B 대수 · 지수 · 10-19번 숫자변형");
assert.equal(variantEntries[3].sourceLine, "쎈B 대수 · 지수 · 10-20번");

console.log("숫자변형 fixture 통과");

// ── 시중 교재 / 자체 교재 ────────────────────────────────────────────────────
// 배지로 표시만 하는 게 아니라 목록부터 가른다 — 고치는 법이 서로 다르다.
const split = splitBooksBySource([
  { bookId: "a", sourceKind: "pdf_scan" },
  { bookId: "b", sourceKind: "composed" },
  { bookId: "c", sourceKind: "pdf_text" },
  { bookId: "d" }
]);
assert.deepEqual(split.market.map((book) => book.bookId), ["a", "c", "d"], "sourceKind 가 없으면 시중 교재로 본다");
assert.deepEqual(split.composed.map((book) => book.bookId), ["b"]);
assert.deepEqual(splitBooksBySource(null), { market: [], composed: [] });

console.log("교재 구분 fixture 통과");

// 문항 id 는 교재와 번호표를 품고 있다 — 자체 교재가 교재를 다 불러오지 않고도 「쎈B 대수 10-19」를 보여 준다.
assert.deepEqual(splitBankItemId("pbk_7a575d05a2-10-19"), { bookId: "pbk_7a575d05a2", numberLabel: "10-19" });
assert.deepEqual(splitBankItemId("pbk_7a575d05a2-10-19v1"), { bookId: "pbk_7a575d05a2", numberLabel: "10-19v1" });
assert.deepEqual(splitBankItemId("pbk_abc123-0001"), { bookId: "pbk_abc123", numberLabel: "0001" });
assert.equal(splitBankItemId("이상한-id"), null);
assert.equal(splitBankItemId(null), null);

console.log("문항 id 분해 fixture 통과");
