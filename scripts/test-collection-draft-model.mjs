// 자체 교재 초안 편집 모델 fixture. 화면 없이 「담았다 뺐다 자리 바꾸기」가 맞는지 본다.
import assert from "node:assert/strict";
import {
  addItemsToSection,
  addSection,
  collectionItemLimit,
  createEmptyDraft,
  draftFromServer,
  draftHasItem,
  draftItemCount,
  draftSaveProblem,
  draftToPayload,
  moveItem,
  moveSection,
  numberedDraftItems,
  removeItem,
  removeSection,
  updateSection
} from "../src/domains/problems/collectionDraftModel.js";

const item = (itemId, numberLabel) => ({ itemId, bookId: "pbk_1", bookTitle: "쎈B 대수", numberLabel, includeVariants: false });

let draft = createEmptyDraft();
assert.equal(draft.sections.length, 1, "빈 초안도 구획 하나는 있다 — 담을 자리가 없으면 아무것도 못 한다");
assert.equal(draftItemCount(draft), 0);

draft = addItemsToSection(draft, 0, [item("a", "10-19"), item("b", "10-20")]);
assert.deepEqual(draft.sections[0].items.map((entry) => entry.itemId), ["a", "b"]);

// 같은 문항을 또 담아도 한 번만 들어간다 — 번호만 다른 같은 문제가 두 번 나오면 학생이 먼저 눈치챈다.
draft = addItemsToSection(draft, 0, [item("a", "10-19"), item("c", "10-21")]);
assert.deepEqual(draft.sections[0].items.map((entry) => entry.itemId), ["a", "b", "c"]);
assert.equal(draftHasItem(draft, "a"), true);
assert.equal(draftHasItem(draft, "zz"), false);

// 다른 구획에 이미 있어도 중복이다(구획이 달라도 같은 교재 안이다).
draft = addSection(draft, "2. 로그");
draft = addItemsToSection(draft, 1, [item("a", "10-19"), item("d", "11-01")]);
assert.deepEqual(draft.sections[1].items.map((entry) => entry.itemId), ["d"]);

// 자리 바꾸기는 구획 안에서만. 끝에서 더 가면 그대로 둔다(버튼을 눌러도 아무 일이 없어야 한다).
draft = moveItem(draft, 0, "c", -1);
assert.deepEqual(draft.sections[0].items.map((entry) => entry.itemId), ["a", "c", "b"]);
assert.deepEqual(moveItem(draft, 0, "a", -1).sections[0].items.map((entry) => entry.itemId), ["a", "c", "b"]);
assert.deepEqual(moveItem(draft, 0, "b", 1).sections[0].items.map((entry) => entry.itemId), ["a", "c", "b"]);

draft = removeItem(draft, 0, "c");
assert.deepEqual(draft.sections[0].items.map((entry) => entry.itemId), ["a", "b"]);

// 구획 순서. 문항도 같이 따라간다.
draft = moveSection(draft, 1, -1);
assert.deepEqual(draft.sections.map((section) => section.items.map((entry) => entry.itemId)), [["d"], ["a", "b"]]);
assert.deepEqual(moveSection(draft, 0, -1).sections[0].items.map((entry) => entry.itemId), ["d"], "맨 위에서 더 올리면 그대로");

// 마지막 구획은 지우지 않는다 — 담을 자리가 사라진다.
draft = updateSection(draft, 0, { title: "1. 로그" });
assert.equal(draft.sections[0].title, "1. 로그");
assert.equal(removeSection(createEmptyDraft(), 0).sections.length, 1);
assert.equal(removeSection(draft, 0).sections.length, 1);

// 제작하면 받을 번호 — 구획을 넘어 1부터 이어진다.
const numbered = numberedDraftItems(draft);
assert.deepEqual(numbered.flatMap((group) => group.items.map((entry) => `${entry.itemId}:${entry.number}`)), ["d:1", "a:2", "b:3"]);

// 저장 payload: 문항은 구획의 **자리**로 간다(화면은 새 구획의 서버 id 를 아직 모른다).
const payload = draftToPayload({ ...draft, title: "내신대비" });
// 구획을 옮기고 이름을 바꾼 결과가 그대로 간다(「2. 로그」가 위로 와 「1. 로그」가 됐다).
assert.deepEqual(payload.sections.map((section) => section.title), ["1. 로그", "1. 새 구획"]);
assert.deepEqual(payload.items, [
  { itemId: "d", sectionIndex: 0, includeVariants: false },
  { itemId: "a", sectionIndex: 1, includeVariants: false },
  { itemId: "b", sectionIndex: 1, includeVariants: false }
]);
assert.equal("collectionId" in payload, false, "새 초안은 id 를 보내지 않는다 — 서버가 만든다");

// 서버가 돌려준 모양 → 편집용. 문항 정보는 교재에서 찾아 채운다.
const restored = draftFromServer({
  collection: { collectionId: "pbc_1", title: "내신대비", printSettings: { sourceLabel: "none" } },
  sections: [{ sectionId: "s1", title: "1. 로그", note: "" }, { sectionId: "s2", title: "2. 지수", note: "" }],
  items: [
    { sectionId: "s2", itemId: "a", includeVariants: true },
    { sectionId: "s1", itemId: "d", includeVariants: false },
    { sectionId: "없는구획", itemId: "x", includeVariants: false }
  ]
}, (itemId) => ({ bookId: "pbk_1", bookTitle: "쎈B 대수", numberLabel: itemId }));
assert.deepEqual(restored.sections.map((section) => section.items.map((entry) => entry.itemId)), [["d"], ["a"]]);
assert.equal(restored.sections[1].items[0].includeVariants, true);
assert.equal(restored.sections[1].items[0].bookTitle, "쎈B 대수");
assert.equal(restored.printSettings.sourceLabel, "none", "저장한 제작 설정을 되살린다");
assert.equal(restored.printSettings.showTypeHeading, true, "안 적힌 설정은 기본값으로 채운다");

// 구획이 하나도 없이 돌아와도 담을 자리를 만든다.
assert.equal(draftFromServer({ collection: {}, sections: [], items: [] }).sections.length, 1);

// 저장 가능 여부
assert.equal(draftSaveProblem({ ...draft, title: "내신대비" }), "");
assert.match(draftSaveProblem({ ...draft, title: "  " }), /교재 이름/);
const big = { ...createEmptyDraft(), title: "큰 교재" };
big.sections = [{ title: "x", note: "", items: Array.from({ length: collectionItemLimit + 1 }, (_, index) => item(`i${index}`, `${index}`)) }];
assert.match(draftSaveProblem(big), /300문항/);

console.log("자체 교재 초안 모델 fixture 통과");
