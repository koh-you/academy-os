import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import {
  fetchProblemBankAttempts,
  fetchProblemBankBook,
  fetchProblemBankBooks,
  fetchProblemBankItemImages,
  saveProblemBankAttempts
} from "./problemBankApi.js";
import {
  attemptClickCycle,
  attemptResultMeta,
  buildFolderTree,
  computeBoardMetrics,
  computeItemStats,
  findFolderNode,
  groupItemsByUnit,
  studentResultMap,
  studentWrongItemIds,
  wrongRateBand,
  wrongRateLegend
} from "./problemBankModel.js";
import { WrongAnswerPrintSheet } from "./WrongAnswerPrintSheet.jsx";
import "./problemBank.css";

const gradeOptions = ["전체", "중1", "중2", "중3", "고1", "고2", "고3"];

/**
 * 오답관리 › 교재별 오답. 교재 폴더 → 단원별 번호 그리드 → 학생별 정오답 기록 → 선택 인쇄.
 * 문항 본문은 서버 서명 URL 로 그때그때 받는다.
 */
export function BookWrongAnswerBoard({ students = [] }) {
  const [books, setBooks] = useState([]);
  const [booksError, setBooksError] = useState("");
  const [folderPath, setFolderPath] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState("");
  const [bookDetail, setBookDetail] = useState(null);
  const [bookLoading, setBookLoading] = useState(false);
  const [attempts, setAttempts] = useState([]);
  const [gradeFilter, setGradeFilter] = useState("전체");
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [round, setRound] = useState(1);
  const [mode, setMode] = useState("record");
  const [selectedItemIds, setSelectedItemIds] = useState(() => new Set());
  const [previewItemId, setPreviewItemId] = useState("");
  const [imagesByItem, setImagesByItem] = useState(() => new Map());
  const [saveMessage, setSaveMessage] = useState("");
  const [isPrintOpen, setIsPrintOpen] = useState(false);
  const imageRequestsRef = useRef(new Set());

  useEffect(() => {
    let cancelled = false;
    fetchProblemBankBooks()
      .then((list) => {
        if (cancelled) return;
        setBooks(list);
        setBooksError("");
        if (!selectedBookId && list[0]) {
          setFolderPath(String(list[0].folderPath ?? "").split(" / ").map((part) => part.trim()).filter(Boolean));
          setSelectedBookId(list[0].bookId);
        }
      })
      .catch((error) => {
        if (!cancelled) setBooksError(error.message || "교재 목록을 불러오지 못했습니다.");
      });
    return () => {
      cancelled = true;
    };
    // 최초 1회만 불러온다. 교재 등록은 교재관리 화면에서 하고 여기서는 새로고침으로 반영한다.
  }, []);

  useEffect(() => {
    if (!selectedBookId) return undefined;
    let cancelled = false;
    setBookLoading(true);
    setSelectedItemIds(new Set());
    setPreviewItemId("");
    Promise.all([fetchProblemBankBook(selectedBookId), fetchProblemBankAttempts({ bookId: selectedBookId })])
      .then(([detail, attemptRows]) => {
        if (cancelled) return;
        setBookDetail({ book: detail.book, units: detail.units ?? [], items: detail.items ?? [] });
        setAttempts(attemptRows);
      })
      .catch((error) => {
        if (!cancelled) setSaveMessage(error.message || "교재를 불러오지 못했습니다.");
      })
      .finally(() => {
        if (!cancelled) setBookLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [selectedBookId]);

  const tree = useMemo(() => buildFolderTree(books), [books]);
  const folderNode = useMemo(() => findFolderNode(tree, folderPath), [tree, folderPath]);
  const filteredStudents = useMemo(
    () => students.filter((student) => gradeFilter === "전체" || student.grade === gradeFilter),
    [students, gradeFilter]
  );
  const studentFilter = useMemo(() => new Set(filteredStudents.map((student) => student.studentId)), [filteredStudents]);
  const selectedStudent = students.find((student) => student.studentId === selectedStudentId) ?? null;
  const items = bookDetail?.items ?? [];
  const units = bookDetail?.units ?? [];
  const itemStats = useMemo(() => computeItemStats(attempts, studentFilter), [attempts, studentFilter]);
  const metrics = useMemo(
    () => computeBoardMetrics(itemStats, items.length, filteredStudents.length),
    [itemStats, items.length, filteredStudents.length]
  );
  const unitGroups = useMemo(() => groupItemsByUnit(units, items), [units, items]);
  const studentResults = useMemo(
    () => (selectedStudentId ? studentResultMap(attempts, selectedStudentId) : new Map()),
    [attempts, selectedStudentId]
  );
  const itemById = useMemo(() => new Map(items.map((item) => [item.itemId, item])), [items]);
  const unitTitleById = useMemo(() => new Map(units.map((unit) => [unit.unitId, unit.title])), [units]);

  const ensureImages = useCallback(async (itemIds) => {
    const missing = itemIds.filter((itemId) => !imagesByItem.has(itemId) && !imageRequestsRef.current.has(itemId));
    if (missing.length === 0) return;
    missing.forEach((itemId) => imageRequestsRef.current.add(itemId));
    try {
      const regions = await fetchProblemBankItemImages(missing);
      setImagesByItem((current) => {
        const next = new Map(current);
        for (const itemId of missing) next.set(itemId, regions.filter((region) => region.itemId === itemId));
        return next;
      });
    } catch (error) {
      setSaveMessage(error.message || "문항 이미지를 불러오지 못했습니다.");
    } finally {
      missing.forEach((itemId) => imageRequestsRef.current.delete(itemId));
    }
  }, [imagesByItem]);

  useEffect(() => {
    if (previewItemId) ensureImages([previewItemId]);
  }, [previewItemId, ensureImages]);

  async function recordAttempt(item) {
    if (!selectedStudent) {
      setSaveMessage("먼저 학생을 선택해 주세요.");
      return;
    }
    const current = attempts.find(
      (attempt) => attempt.studentId === selectedStudent.studentId && attempt.itemId === item.itemId && attempt.round === round
    );
    const currentIndex = current ? attemptClickCycle.indexOf(current.result) : -1;
    const nextResult = attemptClickCycle[(currentIndex + 1) % attemptClickCycle.length];
    const entry = { studentId: selectedStudent.studentId, bookId: selectedBookId, itemId: item.itemId, round, result: nextResult };
    try {
      const result = await saveProblemBankAttempts([entry]);
      setAttempts((previous) => {
        const withoutCurrent = previous.filter(
          (attempt) => !(attempt.studentId === entry.studentId && attempt.itemId === entry.itemId && attempt.round === entry.round)
        );
        return [...withoutCurrent, ...(result.attempts ?? [])];
      });
      setSaveMessage(
        nextResult === "clear"
          ? `${item.numberLabel}번 기록을 지웠습니다.`
          : `${selectedStudent.name} · ${item.numberLabel}번 ${attemptResultMeta[nextResult].label} 저장됨 (${round}회차)`
      );
    } catch (error) {
      setSaveMessage(error.message || "정오답을 저장하지 못했습니다.");
    }
  }

  function toggleSelection(itemId) {
    setSelectedItemIds((current) => {
      const next = new Set(current);
      if (next.has(itemId)) next.delete(itemId);
      else next.add(itemId);
      return next;
    });
  }

  function handleItemClick(item, event) {
    setPreviewItemId(item.itemId);
    const wantsSelection = mode === "select" || event.ctrlKey || event.metaKey || event.shiftKey;
    if (wantsSelection) {
      toggleSelection(item.itemId);
      return;
    }
    recordAttempt(item);
  }

  function selectStudentWrongItems() {
    if (!selectedStudentId) {
      setSaveMessage("먼저 학생을 선택해 주세요.");
      return;
    }
    setSelectedItemIds(new Set(studentWrongItemIds(attempts, selectedStudentId)));
  }

  function selectUnitItems(group) {
    setSelectedItemIds((current) => {
      const next = new Set(current);
      group.items.forEach((item) => next.add(item.itemId));
      return next;
    });
  }

  async function openPrint() {
    if (selectedItemIds.size === 0) return;
    await ensureImages([...selectedItemIds]);
    setIsPrintOpen(true);
  }

  const previewItem = previewItemId ? itemById.get(previewItemId) : null;
  const previewRegions = previewItem ? imagesByItem.get(previewItem.itemId) ?? [] : [];
  const previewStat = previewItem ? itemStats.get(previewItem.itemId) : null;

  return (
    <section className="problemBankBoard">
      <aside className="problemBankSidebar">
        <div className="problemBankSidebarHead">
          <strong>교재 선택</strong>
          <small>폴더를 따라 들어가서 교재를 선택하세요.</small>
        </div>
        <nav aria-label="교재 폴더 경로" className="problemBankBreadcrumb">
          <button onClick={() => setFolderPath([])} type="button">교재 폴더</button>
          {folderPath.map((segment, index) => (
            <button key={`${segment}-${index}`} onClick={() => setFolderPath(folderPath.slice(0, index + 1))} type="button">
              / {segment}
            </button>
          ))}
        </nav>
        {folderPath.length > 0 ? (
          <button className="problemBankUpButton" onClick={() => setFolderPath(folderPath.slice(0, -1))} type="button">
            ← 상위 폴더
          </button>
        ) : null}
        {booksError ? <p className="problemBankError">{booksError}</p> : null}
        <ul className="problemBankFolderList">
          {[...folderNode.folders.values()].map((folder) => (
            <li key={folder.path.join("/")}>
              <button className="problemBankFolderItem" onClick={() => setFolderPath(folder.path)} type="button">
                <strong>📁 {folder.name}</strong>
                <small>{countBooks(folder)}개 교재</small>
              </button>
            </li>
          ))}
          {folderNode.books.map((book) => (
            <li key={book.bookId}>
              <button
                aria-pressed={book.bookId === selectedBookId}
                className={`problemBankBookItem${book.bookId === selectedBookId ? " active" : ""}`}
                onClick={() => setSelectedBookId(book.bookId)}
                type="button"
              >
                <strong>{book.title}</strong>
                <small>{book.subject || book.grade || ""} · {book.itemCount}문제</small>
              </button>
            </li>
          ))}
          {folderNode.folders.size === 0 && folderNode.books.length === 0 && !booksError ? (
            <li><EmptyState className="emptyState">등록된 교재가 없습니다. 교재관리에서 패키지를 올려 주세요.</EmptyState></li>
          ) : null}
        </ul>
      </aside>

      <div className="problemBankMain">
        <header className="problemBankHeader">
          <div>
            <h2>교재별 오답 · 유형분석</h2>
            <small>{bookDetail ? [bookDetail.book.folderPath, bookDetail.book.title].filter(Boolean).join(" / ") : "교재를 선택하세요"}</small>
          </div>
          <div className="problemBankModeSwitch" role="group" aria-label="클릭 동작">
            <button aria-pressed={mode === "record"} className={mode === "record" ? "active" : ""} onClick={() => setMode("record")} type="button">오답 입력</button>
            <button aria-pressed={mode === "select"} className={mode === "select" ? "active" : ""} onClick={() => setMode("select")} type="button">인쇄 선택</button>
          </div>
        </header>

        <div className="problemBankMetrics">
          <MetricCard density="compact" label="대상 학생" value={`${metrics.studentCount}명`} />
          <MetricCard density="compact" label="분석 교재" value={bookDetail ? "1개" : "0개"} />
          <MetricCard density="compact" label="기록 문제" value={`${metrics.recordedItems}/${metrics.totalItems}`} />
          <MetricCard density="compact" label="풀이 오답률" tone="warning" value={`${metrics.firstWrongRate}%`} />
          <MetricCard density="compact" label="현재 오답률" tone="danger" value={`${metrics.currentWrongRate}%`} />
          <MetricCard density="compact" label="회복률" tone="success" value={`${metrics.recoveryRate}%`} />
        </div>

        <div className="problemBankToolbar">
          <div className="problemBankGradeChips" role="group" aria-label="학년 필터">
            {gradeOptions.map((grade) => (
              <button aria-pressed={gradeFilter === grade} className={gradeFilter === grade ? "active" : ""} key={grade} onClick={() => setGradeFilter(grade)} type="button">
                {grade}
              </button>
            ))}
          </div>
          <label className="problemBankStudentPick">
            학생
            <select value={selectedStudentId} onChange={(event) => setSelectedStudentId(event.target.value)}>
              <option value="">학생 선택</option>
              {filteredStudents.map((student) => (
                <option key={student.studentId} value={student.studentId}>{student.name} ({student.grade})</option>
              ))}
            </select>
          </label>
          <label className="problemBankRoundPick">
            회차
            <select value={round} onChange={(event) => setRound(Number(event.target.value))}>
              <option value={1}>1회차 (첫 풀이)</option>
              <option value={2}>2회차 (재풀이)</option>
              <option value={3}>3회차</option>
            </select>
          </label>
          <div className="problemBankSelectionActions">
            <span className="problemBankSelectionCount">선택 {selectedItemIds.size}개</span>
            <button onClick={selectStudentWrongItems} type="button">오답 전체 선택</button>
            <button onClick={() => setSelectedItemIds(new Set())} type="button">선택 해제</button>
            <button className="primaryButton" disabled={selectedItemIds.size === 0} onClick={openPrint} type="button">선택 인쇄</button>
          </div>
        </div>

        <div className="problemBankLegend" aria-label="오답률 범례">
          {wrongRateLegend.map((band) => (
            <span key={band.key}><i className={`problemBankBand band-${band.key}`} />{band.label}</span>
          ))}
          <span className="problemBankLegendHint">
            {selectedStudent ? `${selectedStudent.name} 기준 · 클릭: 오답 → 정답 → 지움 · Ctrl+클릭: 인쇄 선택` : "학생을 선택하면 번호를 눌러 오답을 기록합니다"}
          </span>
        </div>
        {saveMessage ? <p aria-live="polite" className="problemBankSaveMessage">{saveMessage}</p> : null}

        <div className="problemBankBody">
          <div className="problemBankUnits">
            {bookLoading ? <EmptyState className="emptyState">교재를 불러오는 중입니다…</EmptyState> : null}
            {!bookLoading && bookDetail && unitGroups.map((group) => {
              const recordedInUnit = group.items.filter((item) => (itemStats.get(item.itemId)?.attempted ?? 0) > 0).length;
              const unitWrong = group.items.reduce((sum, item) => sum + (itemStats.get(item.itemId)?.wrong ?? 0), 0);
              const unitAttempted = group.items.reduce((sum, item) => sum + (itemStats.get(item.itemId)?.attempted ?? 0), 0);
              const unitCurrentWrong = group.items.reduce((sum, item) => sum + (itemStats.get(item.itemId)?.currentWrong ?? 0), 0);
              const percent = (numerator, denominator) => (denominator ? Math.round((numerator / denominator) * 100) : 0);
              return (
                <section className="problemBankUnitCard" key={group.unit.unitId || "orphan"}>
                  <header className="problemBankUnitHead">
                    <div>
                      <strong>{bookDetail.book.title} {group.unit.title}</strong>
                      <small>{[bookDetail.book.folderPath, bookDetail.book.title, group.unit.title].filter(Boolean).join(" / ")}</small>
                    </div>
                    <div className="problemBankUnitStats">
                      <span className="problemBankPill">{recordedInUnit}/{group.items.length}</span>
                      <span className="problemBankPill warn">풀이오답 {percent(unitWrong, unitAttempted)}%</span>
                      <span className="problemBankPill danger">현재 {percent(unitCurrentWrong, unitAttempted)}%</span>
                      <button className="problemBankUnitSelect" onClick={() => selectUnitItems(group)} type="button">단원 전체 선택</button>
                    </div>
                  </header>
                  <div className="problemBankNumberGrid">
                    {group.items.map((item) => {
                      const band = wrongRateBand(itemStats.get(item.itemId));
                      const studentResult = studentResults.get(item.itemId);
                      const classes = [
                        "problemBankNumber",
                        `band-${band.key}`,
                        selectedItemIds.has(item.itemId) ? "selected" : "",
                        previewItemId === item.itemId ? "previewing" : "",
                        studentResult ? `student-${studentResult.result}` : "",
                        item.reviewStatus === "flagged" ? "flagged" : ""
                      ].filter(Boolean).join(" ");
                      return (
                        <button
                          aria-label={`${item.numberLabel}번 · ${band.label}${studentResult ? ` · ${selectedStudent?.name ?? ""} ${attemptResultMeta[studentResult.result].label}` : ""}`}
                          aria-pressed={selectedItemIds.has(item.itemId)}
                          className={classes}
                          key={item.itemId}
                          onClick={(event) => handleItemClick(item, event)}
                          title={item.typeLabel || undefined}
                          type="button"
                        >
                          {Number.parseInt(item.numberLabel, 10) || item.numberLabel}
                          {studentResult ? <i className="problemBankStudentMark">{attemptResultMeta[studentResult.result].shortLabel}</i> : null}
                        </button>
                      );
                    })}
                  </div>
                </section>
              );
            })}
            {!bookLoading && !bookDetail && !booksError ? (
              <EmptyState className="emptyState">왼쪽에서 교재를 선택하면 단원별 문항 번호가 나타납니다.</EmptyState>
            ) : null}
          </div>

          <aside className="problemBankPreview">
            <header>
              <strong>문제 이미지 미리보기</strong>
              {previewItem ? (
                <small>{[bookDetail?.book.title, unitTitleById.get(previewItem.unitId), `${previewItem.numberLabel}번`].filter(Boolean).join(" · ")}</small>
              ) : <small>번호를 누르면 문항이 나타납니다.</small>}
              {previewStat ? (
                <span className={`problemBankPill ${previewStat.attempted ? "danger" : ""}`}>
                  오답률 {previewStat.attempted ? Math.round((previewStat.wrong / previewStat.attempted) * 100) : 0}%
                </span>
              ) : null}
            </header>
            {previewItem ? (
              <div className="problemBankPreviewBody">
                {previewItem.typeLabel ? <p className="problemBankTypeLabel">{previewItem.typeLabel}</p> : null}
                {previewRegions.length === 0 ? <p className="muted">이미지를 불러오는 중…</p> : null}
                {previewRegions
                  .filter((region) => region.kind === "passage" || region.kind === "body")
                  .sort((a, b) => (a.kind === "passage" ? -1 : 1) - (b.kind === "passage" ? -1 : 1))
                  .map((region) => (
                    <img alt={`${previewItem.numberLabel}번 ${region.kind === "passage" ? "공통 지시문" : "문항"}`} key={region.regionId} src={region.url} />
                  ))}
                <p className="problemBankPreviewMeta">
                  원본 {previewItem.printedPage}쪽 · {previewItem.reviewStatus === "flagged" ? "경계 확인 필요" : "경계 자동 확인"}
                  {previewItem.hasSubquestions ? " · 공통 지시문 포함" : ""}
                </p>
              </div>
            ) : null}
          </aside>
        </div>
      </div>

      {isPrintOpen && bookDetail ? (
        <WrongAnswerPrintSheet
          book={bookDetail.book}
          imagesByItem={imagesByItem}
          items={items}
          selectedItemIds={[...selectedItemIds]}
          student={selectedStudent}
          units={units}
          onClose={() => setIsPrintOpen(false)}
        />
      ) : null}
    </section>
  );
}

function countBooks(folder) {
  let count = folder.books.length;
  for (const child of folder.folders.values()) count += countBooks(child);
  return count;
}
