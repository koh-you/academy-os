import { useEffect, useState } from "react";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { rectWithin, studentItemState } from "../problems/problemBankModel.js";
import { fetchStudentWrongAnswerImages, fetchStudentWrongAnswers } from "./studentPortalApi.js";
import "./studentWrongAnswers.css";

/**
 * 학생 포털 › 오답. 선생님이 학생별 오답에 기록한 문항을 교재·단원별로 보여 준다.
 * 번호를 누르면 그 문항 이미지(공통 지시문이 있으면 지시문 블록 + 강조 상자)를 받아 보여 준다.
 * 읽기 전용이다 — 기록은 선생님 화면에서만 바뀐다.
 */
export function StudentWrongAnswersTab({ previewMode = false, sessionToken = "", studentId = "" }) {
  const [state, setState] = useState({ loading: true, error: "", books: [], attempts: [] });
  const [openItemId, setOpenItemId] = useState("");
  const [imagesByItem, setImagesByItem] = useState(() => new Map());
  const [imageError, setImageError] = useState("");

  useEffect(() => {
    if (previewMode || !sessionToken) {
      setState({ loading: false, error: "", books: [], attempts: [] });
      return undefined;
    }
    let cancelled = false;
    fetchStudentWrongAnswers(sessionToken)
      .then((result) => {
        if (!cancelled) setState({ loading: false, error: "", books: result.books ?? [], attempts: result.attempts ?? [] });
      })
      .catch((error) => {
        if (!cancelled) setState({ loading: false, error: error.message || "오답 목록을 불러오지 못했습니다.", books: [], attempts: [] });
      });
    return () => {
      cancelled = true;
    };
  }, [previewMode, sessionToken]);

  async function openItem(itemId) {
    setOpenItemId((current) => (current === itemId ? "" : itemId));
    if (imagesByItem.has(itemId)) return;
    try {
      const regions = await fetchStudentWrongAnswerImages(sessionToken, [itemId]);
      setImagesByItem((current) => new Map(current).set(itemId, regions.filter((region) => region.itemId === itemId)));
      setImageError("");
    } catch (error) {
      setImageError(error.message || "문항 이미지를 불러오지 못했습니다.");
    }
  }

  if (previewMode) {
    return <EmptyState className="emptyPortalPanel" title="학생이 로그인하면 선생님이 기록한 오답 문항이 여기 나타납니다." />;
  }
  if (state.loading) return <EmptyState className="emptyPortalPanel" title="오답 목록을 불러오는 중…" />;
  if (state.error) return <EmptyState className="emptyPortalPanel" title={state.error} />;

  const books = state.books
    .map((book) => {
      const items = book.items
        .map((item) => ({ ...item, state: studentItemState(state.attempts, studentId, item.itemId) }))
        .filter((item) => item.state === "wrong" || item.state === "recovered");
      return { ...book, wrongItems: items };
    })
    .filter((book) => book.wrongItems.length > 0);

  if (books.length === 0) return <EmptyState className="emptyPortalPanel" title="아직 기록된 오답이 없습니다." />;

  return (
    <div className="studentWrongAnswers">
      {imageError ? <p className="problemBankError">{imageError}</p> : null}
      {books.map((book) => {
        const unitTitle = new Map(book.units.map((unit) => [unit.unitId, unit.title]));
        const remaining = book.wrongItems.filter((item) => item.state === "wrong").length;
        return (
          <section className="studentWrongBook" key={book.bookId}>
            <header>
              <strong>{book.title}</strong>
              <small>아직 틀린 문항 {remaining}개 · 다시 풀어 맞힌 문항 {book.wrongItems.length - remaining}개</small>
            </header>
            <ul className="studentWrongList">
              {book.wrongItems.map((item) => {
                const regions = imagesByItem.get(item.itemId) ?? [];
                const passage = regions.find((region) => region.kind === "passage");
                const body = regions.find((region) => region.kind === "body");
                const highlight = passage && body ? rectWithin(passage.bboxNormalized, body.bboxNormalized) : null;
                const isOpen = openItemId === item.itemId;
                return (
                  <li className={`studentWrongItem state-${item.state}`} key={item.itemId}>
                    <button aria-expanded={isOpen} onClick={() => openItem(item.itemId)} type="button">
                      <span className="studentWrongNumber">{item.numberLabel}번</span>
                      <span className="studentWrongUnit">{unitTitle.get(item.unitId) ?? ""}{item.typeLabel ? ` · ${item.typeLabel}` : ""}</span>
                      <span className={`studentWrongState state-${item.state}`}>{item.state === "wrong" ? "틀림" : "재풀이 정답"}</span>
                    </button>
                    {isOpen ? (
                      <div className="studentWrongImage">
                        {regions.length === 0 ? <p className="muted">이미지를 불러오는 중…</p> : null}
                        {passage ? (
                          <div className="problemBankPrintGroup">
                            <img alt={`${item.numberLabel}번 공통 지시문과 문항`} src={passage.url} />
                            {highlight ? (
                              <span
                                aria-hidden="true"
                                className="problemBankPrintHighlight"
                                style={{ left: `${highlight.left}%`, top: `${highlight.top}%`, width: `${highlight.width}%`, height: `${highlight.height}%` }}
                              />
                            ) : null}
                          </div>
                        ) : body ? (
                          <img alt={`${item.numberLabel}번 문항`} src={body.url} />
                        ) : null}
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
