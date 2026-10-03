import { useCallback, useEffect, useMemo, useState } from "react";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import {
  deleteProblemBankCollection,
  fetchProblemBankBook,
  fetchProblemBankCollection,
  fetchProblemBankCollections,
  saveProblemBankCollection
} from "./problemBankApi.js";
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
  sourceLabelOptions,
  updateSection
} from "./collectionDraftModel.js";
import { groupItemsByTypeSection, groupItemsByUnit, itemDisplayNumber, splitBooksBySource } from "./problemBankModel.js";
import { prettifyMathLabel } from "./mathLabelText.js";

/**
 * 자체 교재 편집 — 여러 교재에서 문항을 뽑아 구획을 짜고, 몇 번이고 고치며 중간저장한다.
 *
 * 세 칸: ① 고르기(교재 → 단원 → 구획 → 문항) ② 담을 구획 고르기 ③ 짜기(구획·순서·번호).
 * 저장은 통째 저장이고, 저장 뒤 서버가 돌려준 것을 다시 원천으로 삼는다 — 낙관적 상태를 들고 있지 않는다.
 *
 * 제작(조판·등록)은 여기서 하지 않는다. 조판에 XeLaTeX 이 필요해 서버에서 돌 수 없고,
 * 지금 34권이 등록된 것과 같은 로컬 경로로 돈다(기획: docs/problem-bank-composed-book-plan.md).
 */
export function CollectionComposer({ books = [] }) {
  const marketBooks = useMemo(() => splitBooksBySource(books).market, [books]);
  const [collections, setCollections] = useState([]);
  const [draft, setDraft] = useState(() => createEmptyDraft());
  const [targetSection, setTargetSection] = useState(0);
  const [pickedBookId, setPickedBookId] = useState("");
  const [bookDetail, setBookDetail] = useState(null);
  const [openUnits, setOpenUnits] = useState(() => new Set());
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [dirty, setDirty] = useState(false);

  const reloadCollections = useCallback(async () => {
    try {
      setCollections(await fetchProblemBankCollections());
    } catch (loadError) {
      setError(loadError?.message || "초안 목록을 불러오지 못했습니다.");
    }
  }, []);

  useEffect(() => { reloadCollections(); }, [reloadCollections]);

  useEffect(() => {
    if (!pickedBookId) { setBookDetail(null); return undefined; }
    let alive = true;
    setBookDetail(null);
    fetchProblemBankBook(pickedBookId)
      .then((detail) => { if (alive) setBookDetail(detail); })
      .catch((loadError) => { if (alive) setError(loadError?.message || "교재를 불러오지 못했습니다."); });
    return () => { alive = false; };
  }, [pickedBookId]);

  // 저장 안 한 변경을 들고 화면을 떠나지 않게 막는다. 초안 편집은 며칠에 걸쳐 이어지므로
  // 실수로 날리면 그 며칠이 사라진다.
  useEffect(() => {
    if (!dirty) return undefined;
    const warn = (event) => { event.preventDefault(); event.returnValue = ""; };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function edit(next) {
    setDraft(next);
    setDirty(true);
    setMessage("");
  }

  // 교재의 문항은 숫자변형을 뺀 것만 고른다 — 변형은 원본을 담으면 「숫자변형 함께」로 따라온다.
  const bookItems = useMemo(() => (bookDetail?.items ?? []).filter((item) => !item.variantOf), [bookDetail]);
  const unitGroups = useMemo(
    () => groupItemsByUnit(bookDetail?.units ?? [], bookItems),
    [bookDetail, bookItems]
  );
  const numberedSections = useMemo(() => numberedDraftItems(draft), [draft]);
  const itemCount = draftItemCount(draft);
  const saveProblem = draftSaveProblem(draft);

  async function openCollection(collectionId) {
    setBusy(true);
    setError("");
    try {
      const detail = await fetchProblemBankCollection(collectionId);
      // 문항의 교재·번호는 목록에 없다. 지금 열어 둔 교재에서 찾고, 없으면 id 만 보여 준다.
      const lookup = new Map(bookItems.map((item) => [item.itemId, item]));
      setDraft(draftFromServer(detail, (itemId) => {
        const known = lookup.get(itemId);
        return known ? { bookId: known.bookId, bookTitle: bookDetail?.book?.title ?? "", numberLabel: known.numberLabel } : null;
      }));
      setTargetSection(0);
      setDirty(false);
      setMessage("");
    } catch (openError) {
      setError(openError?.message || "초안을 열지 못했습니다.");
    } finally {
      setBusy(false);
    }
  }

  async function save() {
    if (saveProblem) { setError(saveProblem); return; }
    setBusy(true);
    setError("");
    try {
      const result = await saveProblemBankCollection(draftToPayload(draft));
      const lookup = new Map(bookItems.map((item) => [item.itemId, item]));
      // 저장 뒤 서버가 돌려준 것을 원천으로 삼는다 — 화면이 들고 있던 모양이 아니라.
      setDraft(draftFromServer(result, (itemId) => {
        const known = lookup.get(itemId);
        return known ? { bookId: known.bookId, bookTitle: bookDetail?.book?.title ?? "", numberLabel: known.numberLabel } : null;
      }));
      setDirty(false);
      setMessage(`저장했습니다 · ${new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" })}`);
      await reloadCollections();
    } catch (saveError) {
      setError(saveError?.message || "저장하지 못했습니다.");
    } finally {
      setBusy(false);
    }
  }

  async function discard(collectionId) {
    setBusy(true);
    try {
      await deleteProblemBankCollection(collectionId);
      if (draft.collectionId === collectionId) { setDraft(createEmptyDraft()); setDirty(false); }
      await reloadCollections();
      setMessage("초안을 지웠습니다.");
    } catch (deleteError) {
      setError(deleteError?.message || "초안을 지우지 못했습니다.");
    } finally {
      setBusy(false);
    }
  }

  function toggleUnit(unitId) {
    setOpenUnits((current) => {
      const next = new Set(current);
      if (next.has(unitId)) next.delete(unitId);
      else next.add(unitId);
      return next;
    });
  }

  function addItems(items) {
    if (!items.length) return;
    const fresh = items.filter((item) => !draftHasItem(draft, item.itemId));
    if (!fresh.length) { setMessage("이미 담은 문항입니다."); return; }
    edit(addItemsToSection(draft, targetSection, fresh.map((item) => ({
      itemId: item.itemId,
      bookId: item.bookId,
      bookTitle: bookDetail?.book?.title ?? "",
      numberLabel: item.numberLabel,
      includeVariants: draft.printSettings.includeVariants
    }))));
  }

  return (
    <div className="problemBankComposer">
      <section className="panel problemBankComposerDrafts">
        <h2>편집 중</h2>
        <button className="softButton" disabled={busy} onClick={() => { setDraft(createEmptyDraft()); setTargetSection(0); setDirty(false); setMessage(""); }} type="button">
          새 교재 만들기
        </button>
        {collections.length === 0 ? (
          <EmptyState className="emptyState">아직 만든 자체 교재가 없습니다. 오른쪽에서 문항을 담아 저장하세요.</EmptyState>
        ) : (
          <ul className="problemBankDraftList">
            {collections.map((entry) => (
              <li className={entry.collectionId === draft.collectionId ? "picked" : ""} key={entry.collectionId}>
                <button disabled={busy} onClick={() => openCollection(entry.collectionId)} type="button">
                  <strong>{entry.title}</strong>
                  <small>{entry.itemCount}문항 · {entry.status === "published" ? "제작 완료" : "초안"}</small>
                </button>
                <button aria-label={`${entry.title} 지우기`} className="problemBankDraftDelete" disabled={busy} onClick={() => discard(entry.collectionId)} type="button">×</button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="panel problemBankComposerPick">
        <h2>고르기</h2>
        <label className="problemBankComposerBookPick">
          교재
          <select aria-label="교재" disabled={busy} onChange={(event) => setPickedBookId(event.target.value)} value={pickedBookId}>
            <option value="">교재를 고르세요</option>
            {marketBooks.map((book) => (
              <option key={book.bookId} value={book.bookId}>{book.title}</option>
            ))}
          </select>
        </label>
        {pickedBookId && !bookDetail ? <p className="problemBankStatus">불러오는 중…</p> : null}
        {bookDetail ? (
          <div className="problemBankComposerUnits">
            {unitGroups.map((group) => {
              const open = openUnits.has(group.unit.unitId);
              const picked = group.items.filter((item) => draftHasItem(draft, item.itemId)).length;
              return (
                <div className="problemBankComposerUnit" key={group.unit.unitId || "기타"}>
                  <button aria-expanded={open} className="problemBankUnitToggle" onClick={() => toggleUnit(group.unit.unitId)} type="button">
                    <span>{open ? "▾" : "▸"} {group.unit.title}</span>
                    <small>{picked}/{group.items.length}</small>
                  </button>
                  {open ? groupItemsByTypeSection(group.items).map((section, index) => (
                    <div className="problemBankComposerSection" key={`${group.unit.unitId}-${index}`}>
                      <div className="problemBankComposerSectionHead">
                        <span>{prettifyMathLabel(section.label) || "구획 없음"}</span>
                        <button className="softButton compact" disabled={busy} onClick={() => addItems(section.items)} type="button">
                          구획째 담기 {section.items.length}
                        </button>
                      </div>
                      <div className="problemBankComposerNumbers">
                        {section.items.map((item) => (
                          <button
                            aria-label={`${item.numberLabel}번 담기`}
                            className={`problemBankUnitChip${draftHasItem(draft, item.itemId) ? " picked" : ""}`}
                            disabled={busy}
                            key={item.itemId}
                            onClick={() => addItems([item])}
                            type="button"
                          >
                            {itemDisplayNumber(item.numberLabel)}
                          </button>
                        ))}
                      </div>
                    </div>
                  )) : null}
                </div>
              );
            })}
          </div>
        ) : null}
      </section>

      <section className="panel problemBankComposerDraft">
        <h2>짜기</h2>
        <div className="problemBankComposerFields">
          <label>교재 이름<input disabled={busy} onChange={(event) => edit({ ...draft, title: event.target.value })} placeholder="예: 내신대비 지수·로그" type="text" value={draft.title} /></label>
          <label>폴더<input disabled={busy} onChange={(event) => edit({ ...draft, folderPath: event.target.value })} placeholder="예: 고2 / 내신대비" type="text" value={draft.folderPath} /></label>
        </div>

        <fieldset className="problemBankPrintOptions problemBankComposerSettings">
          <legend>제작 설정</legend>
          <label>
            <span>출처 표기</span>
            <select aria-label="출처 표기" disabled={busy} onChange={(event) => edit({ ...draft, printSettings: { ...draft.printSettings, sourceLabel: event.target.value } })} value={draft.printSettings.sourceLabel}>
              {sourceLabelOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label} — {option.hint}</option>
              ))}
            </select>
          </label>
          <label><input checked={draft.printSettings.showTypeHeading} disabled={busy} onChange={(event) => edit({ ...draft, printSettings: { ...draft.printSettings, showTypeHeading: event.target.checked } })} type="checkbox" /><span>구획 머리줄에 유형 이름</span></label>
          <label><input checked={draft.printSettings.includeVariants} disabled={busy} onChange={(event) => edit({ ...draft, printSettings: { ...draft.printSettings, includeVariants: event.target.checked } })} type="checkbox" /><span>숫자변형 함께</span></label>
          <label><input checked={draft.printSettings.includeAnswers} disabled={busy} onChange={(event) => edit({ ...draft, printSettings: { ...draft.printSettings, includeAnswers: event.target.checked } })} type="checkbox" /><span>빠른정답 맨 뒤에</span></label>
          <label><input checked={draft.printSettings.includeSolutions} disabled={busy} onChange={(event) => edit({ ...draft, printSettings: { ...draft.printSettings, includeSolutions: event.target.checked } })} type="checkbox" /><span>해설</span></label>
          <label><input checked={draft.printSettings.includeCover} disabled={busy} onChange={(event) => edit({ ...draft, printSettings: { ...draft.printSettings, includeCover: event.target.checked } })} type="checkbox" /><span>표지·목차</span></label>
          <p className="problemBankComposerHint">출처는 조판할 때 이미지 안에 들어갑니다. 바꾸려면 다시 제작해야 합니다.</p>
        </fieldset>

        <div className="problemBankComposerSections">
          {numberedSections.map(({ section, sectionIndex, items }) => (
            <div className={`problemBankComposerDraftSection${targetSection === sectionIndex ? " target" : ""}`} key={sectionIndex}>
              <div className="problemBankComposerSectionHead">
                <input
                  aria-label={`구획 ${sectionIndex + 1} 이름`}
                  disabled={busy}
                  onChange={(event) => edit(updateSection(draft, sectionIndex, { title: event.target.value }))}
                  type="text"
                  value={section.title}
                />
                <button aria-label={`구획 ${sectionIndex + 1} 위로`} disabled={busy || sectionIndex === 0} onClick={() => edit(moveSection(draft, sectionIndex, -1))} type="button">↑</button>
                <button aria-label={`구획 ${sectionIndex + 1} 아래로`} disabled={busy || sectionIndex === draft.sections.length - 1} onClick={() => edit(moveSection(draft, sectionIndex, 1))} type="button">↓</button>
                <button aria-label={`구획 ${sectionIndex + 1} 지우기`} disabled={busy || draft.sections.length <= 1} onClick={() => edit(removeSection(draft, sectionIndex))} type="button">×</button>
                <button
                  aria-pressed={targetSection === sectionIndex}
                  className="softButton compact"
                  disabled={busy}
                  onClick={() => setTargetSection(sectionIndex)}
                  type="button"
                >
                  {targetSection === sectionIndex ? "여기에 담는 중" : "여기에 담기"}
                </button>
              </div>
              {items.length === 0 ? (
                <p className="problemBankComposerHint">왼쪽에서 문항을 눌러 담으세요.</p>
              ) : (
                <ol className="problemBankComposerItems">
                  {items.map((item) => (
                    <li key={item.itemId}>
                      <strong>{item.number}</strong>
                      <span>{item.bookTitle || item.bookId} {item.numberLabel || item.itemId}</span>
                      <button aria-label={`${item.number}번 위로`} disabled={busy} onClick={() => edit(moveItem(draft, sectionIndex, item.itemId, -1))} type="button">↑</button>
                      <button aria-label={`${item.number}번 아래로`} disabled={busy} onClick={() => edit(moveItem(draft, sectionIndex, item.itemId, 1))} type="button">↓</button>
                      <button aria-label={`${item.number}번 빼기`} disabled={busy} onClick={() => edit(removeItem(draft, sectionIndex, item.itemId))} type="button">×</button>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}
          <button className="softButton" disabled={busy} onClick={() => edit(addSection(draft))} type="button">+ 구획 추가</button>
        </div>

        <div className="problemBankComposerBar">
          <span className="problemBankSelectionCount">{itemCount}문항 · {draft.sections.length}구획{itemCount > collectionItemLimit ? ` · ${collectionItemLimit}문항을 넘었습니다` : ""}</span>
          {dirty ? <span className="problemBankComposerHint">저장 안 함</span> : null}
          <button className="primaryButton" disabled={busy || Boolean(saveProblem)} onClick={save} type="button">중간저장</button>
        </div>
        {error ? <p className="problemBankError">{error}</p> : null}
        {message ? <p className="problemBankStatus" role="status">{message}</p> : null}
      </section>
    </div>
  );
}
