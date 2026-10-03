/**
 * 자체 교재 초안의 순수 모델. React state·fetch·Supabase 를 갖지 않는다.
 *
 * 교재 제작은 한 번에 끝나지 않는다 — 담았다 뺐다, 자리 바꾸기, 교체를 며칠에 걸쳐 한다.
 * 그 편집을 여기서 하고, 화면은 결과만 그린다. 저장은 **통째 저장**이라 서버가 돌려준 모양을
 * 다시 이 모양으로 바꿔 쓴다(낙관적 상태를 들고 있지 않는다).
 *
 * 초안 모양:
 *   { collectionId, title, folderPath, subject, grade, printSettings,
 *     sections: [{ title, note, items: [{ itemId, bookId, bookTitle, numberLabel, includeVariants }] }] }
 *
 * 저장 payload 는 문항을 **구획의 자리(sectionIndex)** 로 보낸다 — 화면이 아직 서버 id 를 모르는
 * 새 구획도 같은 요청에서 만들어지기 때문이다.
 */

/** 제작 설정 기본값. 출처는 조판 시점에 이미지 안에 들어가므로 **제작 전에** 정한다. */
export const defaultPrintSettings = Object.freeze({
  sourceLabel: "full", // none | book | full
  showTypeHeading: true,
  includeVariants: true,
  includeAnswers: true,
  includeSolutions: false,
  includeCover: true
});

export const sourceLabelOptions = Object.freeze([
  { value: "full", label: "교재·쪽·번호", hint: "쎈B 대수 10쪽 19번" },
  { value: "book", label: "교재 이름만", hint: "쎈B 대수" },
  { value: "none", label: "표기 안 함", hint: "시험·평가용" }
]);

/** 한 권의 상한. 넘으면 막지 말고 화면이 미리 알린다(조판 시간에서 온 수다). */
export const collectionItemLimit = 300;

export function createEmptyDraft() {
  return {
    collectionId: "",
    title: "",
    folderPath: "",
    subject: "",
    grade: "",
    printSettings: { ...defaultPrintSettings },
    sections: [{ title: "1. 새 구획", note: "", items: [] }]
  };
}

/** 서버가 돌려준 초안(구획·문항이 평평한 목록)을 편집용 모양으로 세운다. */
export function draftFromServer(detail, itemLookup = () => null) {
  const collection = detail?.collection ?? {};
  const sections = (detail?.sections ?? []).map((section) => ({
    sectionId: section.sectionId,
    title: section.title ?? "",
    note: section.note ?? "",
    items: []
  }));
  const bySectionId = new Map(sections.map((section) => [section.sectionId, section]));
  for (const entry of detail?.items ?? []) {
    const section = bySectionId.get(entry.sectionId);
    if (!section) continue;
    const known = itemLookup(entry.itemId) ?? {};
    section.items.push({
      itemId: entry.itemId,
      bookId: known.bookId ?? "",
      bookTitle: known.bookTitle ?? "",
      numberLabel: known.numberLabel ?? "",
      includeVariants: Boolean(entry.includeVariants)
    });
  }
  return {
    collectionId: collection.collectionId ?? "",
    title: collection.title ?? "",
    folderPath: collection.folderPath ?? "",
    subject: collection.subject ?? "",
    grade: collection.grade ?? "",
    printSettings: { ...defaultPrintSettings, ...(collection.printSettings ?? {}) },
    sections: sections.length ? sections : createEmptyDraft().sections
  };
}

/** 저장 payload. 문항은 구획의 **자리**로 보낸다. */
export function draftToPayload(draft) {
  return {
    ...(draft.collectionId ? { collectionId: draft.collectionId } : {}),
    title: draft.title,
    folderPath: draft.folderPath,
    subject: draft.subject,
    grade: draft.grade,
    printSettings: draft.printSettings,
    sections: draft.sections.map((section) => ({ title: section.title, note: section.note })),
    items: draft.sections.flatMap((section, sectionIndex) =>
      section.items.map((item) => ({ itemId: item.itemId, sectionIndex, includeVariants: item.includeVariants }))
    )
  };
}

export function draftItemCount(draft) {
  return draft.sections.reduce((sum, section) => sum + section.items.length, 0);
}

/** 이 문항이 이미 이 초안에 있나. 한 권에 같은 문항을 두 번 담지 않는다. */
export function draftHasItem(draft, itemId) {
  return draft.sections.some((section) => section.items.some((item) => item.itemId === itemId));
}

/**
 * 문항들을 한 구획에 담는다. 이미 담긴 것은 건너뛴다 —
 * 번호만 다른 같은 문제가 한 교재에 두 번 나오면 학생이 먼저 눈치챈다.
 */
export function addItemsToSection(draft, sectionIndex, items) {
  const section = draft.sections[sectionIndex];
  if (!section) return draft;
  const fresh = items.filter((item) => !draftHasItem(draft, item.itemId));
  if (!fresh.length) return draft;
  const sections = draft.sections.map((entry, index) => (
    index === sectionIndex ? { ...entry, items: [...entry.items, ...fresh] } : entry
  ));
  return { ...draft, sections };
}

export function removeItem(draft, sectionIndex, itemId) {
  const sections = draft.sections.map((section, index) => (
    index === sectionIndex ? { ...section, items: section.items.filter((item) => item.itemId !== itemId) } : section
  ));
  return { ...draft, sections };
}

/** 문항을 한 칸 위·아래로. 구획 안에서만 움직인다(구획을 넘기려면 빼고 다시 담는다). */
export function moveItem(draft, sectionIndex, itemId, delta) {
  const section = draft.sections[sectionIndex];
  if (!section) return draft;
  const at = section.items.findIndex((item) => item.itemId === itemId);
  const to = at + delta;
  if (at < 0 || to < 0 || to >= section.items.length) return draft;
  const items = [...section.items];
  [items[at], items[to]] = [items[to], items[at]];
  return { ...draft, sections: draft.sections.map((entry, index) => (index === sectionIndex ? { ...entry, items } : entry)) };
}

export function addSection(draft, title = "") {
  const next = draft.sections.length + 1;
  return { ...draft, sections: [...draft.sections, { title: title || `${next}. 새 구획`, note: "", items: [] }] };
}

export function removeSection(draft, sectionIndex) {
  if (draft.sections.length <= 1) return draft;
  return { ...draft, sections: draft.sections.filter((_, index) => index !== sectionIndex) };
}

export function updateSection(draft, sectionIndex, patch) {
  return { ...draft, sections: draft.sections.map((section, index) => (index === sectionIndex ? { ...section, ...patch } : section)) };
}

/** 구획을 한 칸 위·아래로. */
export function moveSection(draft, sectionIndex, delta) {
  const to = sectionIndex + delta;
  if (to < 0 || to >= draft.sections.length) return draft;
  const sections = [...draft.sections];
  [sections[sectionIndex], sections[to]] = [sections[to], sections[sectionIndex]];
  return { ...draft, sections };
}

/**
 * 제작했을 때 각 문항이 받을 **새 번호**. 구획을 넘어 1부터 이어진다.
 * 화면에서 미리 보여 줘야 「3번 자리에 뭐가 오는지」를 알고 자리를 바꾼다.
 */
export function numberedDraftItems(draft) {
  let number = 0;
  return draft.sections.map((section, sectionIndex) => ({
    sectionIndex,
    section,
    items: section.items.map((item) => ({ ...item, number: (number += 1) }))
  }));
}

/** 저장할 수 있나. 못 하면 왜인지 한 줄로 돌려준다(버튼 옆에 그대로 쓴다). */
export function draftSaveProblem(draft) {
  if (!String(draft.title ?? "").trim()) return "교재 이름을 적어 주세요.";
  const count = draftItemCount(draft);
  if (count > collectionItemLimit) return `한 권에 ${collectionItemLimit}문항까지 담습니다(지금 ${count}문항).`;
  return "";
}
