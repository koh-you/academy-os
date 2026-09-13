import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { isActiveStudent } from "../students/lessonRosterSelectors.js";
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
  rectWithin,
  studentItemState,
  studentResultMap,
  studentStateLegend,
  studentWrongItemIds,
  wrongRateBand,
  wrongRateLegend
} from "./problemBankModel.js";
import { WrongAnswerPrintSheet } from "./WrongAnswerPrintSheet.jsx";
import "./problemBank.css";

const gradeOptions = ["전체", "중1", "중2", "중3", "고1", "고2", "고3"];
const classPickThresholds = [30, 50, 70];

/**
 * 오답관리의 교재 보드. 교재 폴더 → 단원별 번호 그리드 → 선택 인쇄·PPT.
 *
 * mode
 * - "class"(교재별 오답): 학생과 무관하게 반 전체 기록을 집계한다. 번호 색은 반 오답률 띠(미풀이 / 전원 정답 / 1~20% … 81%~).
 *   번호를 누르면 인쇄·PPT 선택이다. 「오답률 N% 이상 선택」으로 많이 틀린 문항을 한 번에 고른다.
 * - "student"(학생별 오답): 고른 학생 기준 색 — 기록 없음(회색) / 오답(빨강) / 정답(초록) / 재풀이 정답(점선 초록 · 재).
 *   번호를 누를 때마다 기록 없음 → 오답 → 정답 → 기록 없음 순으로 돌고, 화면이 먼저 바뀐 뒤 서버 저장을 맞춘다.
 *   학생은 부모(FilterBar)가 studentId 로 넘기거나, 없으면 보드 안 드롭다운으로 고른다.
 * 문항 본문은 서버 서명 URL 로 그때그때 받는다.
 */
export function BookWrongAnswerBoard({ students = [], mode = "student", studentId: controlledStudentId = "" }) {
  const isClassMode = mode === "class";
  const [books, setBooks] = useState([]);
  const [booksError, setBooksError] = useState("");
  const [folderPath, setFolderPath] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState("");
  const [bookDetail, setBookDetail] = useState(null);
  const [bookLoading, setBookLoading] = useState(false);
  const [attempts, setAttempts] = useState([]);
  const [gradeFilter, setGradeFilter] = useState("전체");
  const [pickedStudentId, setPickedStudentId] = useState("");
  const selectedStudentId = isClassMode ? "" : controlledStudentId || pickedStudentId;
  const [round, setRound] = useState(1);
  const [clickMode, setClickMode] = useState(isClassMode ? "select" : "record");
  const [pickThreshold, setPickThreshold] = useState(50);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [brokenImages, setBrokenImages] = useState(() => new Set());
  const [selectedItemIds, setSelectedItemIds] = useState(() => new Set());
  const [previewItemId, setPreviewItemId] = useState("");
  const [imagesByItem, setImagesByItem] = useState(() => new Map());
  const [showSolutionPreview, setShowSolutionPreview] = useState(false);
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
  // 퇴원생은 오답을 기록할 대상이 아니다. 과거 기록은 표(반 오답률)에는 남는다.
  const activeStudents = useMemo(() => students.filter((student) => isActiveStudent(student)), [students]);
  const filteredStudents = useMemo(
    () => activeStudents.filter((student) => gradeFilter === "전체" || student.grade === gradeFilter),
    [activeStudents, gradeFilter]
  );
  const studentFilter = useMemo(() => new Set(filteredStudents.map((student) => student.studentId)), [filteredStudents]);
  const selectedStudent = activeStudents.find((student) => student.studentId === selectedStudentId) ?? null;
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
  const studentStates = useMemo(() => {
    const map = new Map();
    if (!selectedStudentId) return map;
    for (const item of items) map.set(item.itemId, studentItemState(attempts, selectedStudentId, item.itemId));
    return map;
  }, [attempts, selectedStudentId, items]);
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
      setSaveMessage("먼저 학생을 선택해 주세요. 학생을 고르면 번호를 눌러 오답을 기록할 수 있습니다.");
      return;
    }
    const matches = (attempt) =>
      attempt.studentId === selectedStudent.studentId && attempt.itemId === item.itemId && attempt.round === round;
    const current = attempts.find(matches);
    const currentIndex = current ? attemptClickCycle.indexOf(current.result) : -1;
    const nextResult = attemptClickCycle[(currentIndex + 1) % attemptClickCycle.length];
    const entry = { studentId: selectedStudent.studentId, bookId: selectedBookId, itemId: item.itemId, round, result: nextResult };
    const optimistic = nextResult === "clear"
      ? null
      : { attemptId: `${entry.studentId}__${entry.itemId}__r${round}`, ...entry, recordedAt: new Date().toISOString(), note: "", pending: true };
    // 화면을 먼저 바꾼다. 저장이 끝나면 서버가 돌려준 행으로 바꾸고, 실패하면 되돌린다.
    setAttempts((previous) => [...previous.filter((attempt) => !matches(attempt)), ...(optimistic ? [optimistic] : [])]);
    setSaveMessage(
      nextResult === "clear"
        ? `${item.numberLabel}번 기록을 지우는 중…`
        : `${selectedStudent.name} · ${item.numberLabel}번 ${attemptResultMeta[nextResult].label} 저장 중…`
    );
    try {
      const result = await saveProblemBankAttempts([entry]);
      setAttempts((previous) => [...previous.filter((attempt) => !matches(attempt)), ...(result.attempts ?? [])]);
      setSaveMessage(
        nextResult === "clear"
          ? `${item.numberLabel}번 기록을 지웠습니다.`
          : `${selectedStudent.name} · ${item.numberLabel}번 ${attemptResultMeta[nextResult].label} 저장됨 (${round}회차)`
      );
    } catch (error) {
      setAttempts((previous) => [...previous.filter((attempt) => !matches(attempt)), ...(current ? [current] : [])]);
      setSaveMessage(`${item.numberLabel}번 저장 실패 — ${error.message || "다시 눌러 주세요."}`);
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
    const wantsSelection = isClassMode || clickMode === "select" || event.ctrlKey || event.metaKey || event.shiftKey;
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
    const wrongIds = studentWrongItemIds(attempts, selectedStudentId);
    setSelectedItemIds(new Set(wrongIds));
    setSaveMessage(wrongIds.length ? `${selectedStudent.name}의 오답 ${wrongIds.length}개를 골랐습니다.` : `${selectedStudent.name}의 오답 기록이 아직 없습니다.`);
  }

  /** 반 모드: 반 전체 풀이 오답률이 기준 이상인 문항을 고른다. */
  function selectFrequentlyWrongItems() {
    const picked = items.filter((item) => {
      const stat = itemStats.get(item.itemId);
      return stat && stat.attempted > 0 && Math.round((stat.wrong / stat.attempted) * 100) >= pickThreshold;
    });
    setSelectedItemIds(new Set(picked.map((item) => item.itemId)));
    setSaveMessage(picked.length ? `오답률 ${pickThreshold}% 이상 문항 ${picked.length}개를 골랐습니다.` : `오답률 ${pickThreshold}% 이상인 문항이 아직 없습니다. 학생별 오답에서 기록이 쌓이면 여기 집계됩니다.`);
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
  const previewPassage = previewRegions.find((region) => region.kind === "passage");
  const previewBody = previewRegions.find((region) => region.kind === "body");
  const previewAnswer = previewRegions.find((region) => region.kind === "answer");
  const previewSolution = previewRegions.find((region) => region.kind === "solution");
  const previewHighlight = previewPassage && previewBody ? rectWithin(previewPassage.bboxNormalized, previewBody.bboxNormalized) : null;

  function markBroken(region) {
    if (!region?.storagePath) return;
    setBrokenImages((current) => new Set(current).add(region.storagePath));
  }

  useEffect(() => {
    if (!zoomOpen) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setZoomOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomOpen]);

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
            <h2>{isClassMode ? "교재별 오답 · 반 전체" : "학생별 오답 · 유형분석"}</h2>
            <small>{bookDetail ? [bookDetail.book.folderPath, bookDetail.book.title].filter(Boolean).join(" / ") : "교재를 선택하세요"}</small>
          </div>
          {isClassMode ? (
            <small className="problemBankModeHint">학생별 오답에서 쌓인 기록을 반 전체로 집계합니다. 번호를 누르면 인쇄·PPT 대상으로 고릅니다.</small>
          ) : (
            <div className="problemBankModeSwitch" role="group" aria-label="클릭 동작">
              <button aria-pressed={clickMode === "record"} className={clickMode === "record" ? "active" : ""} onClick={() => setClickMode("record")} type="button">오답 입력</button>
              <button aria-pressed={clickMode === "select"} className={clickMode === "select" ? "active" : ""} onClick={() => setClickMode("select")} type="button">인쇄 선택</button>
            </div>
          )}
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
          {isClassMode || !controlledStudentId ? (
            <div className="problemBankGradeChips" role="group" aria-label="학년 필터">
              {gradeOptions.map((grade) => (
                <button aria-pressed={gradeFilter === grade} className={gradeFilter === grade ? "active" : ""} key={grade} onClick={() => setGradeFilter(grade)} type="button">
                  {grade}
                </button>
              ))}
            </div>
          ) : null}
          {!isClassMode && !controlledStudentId ? (
            <label className={`problemBankStudentPick${selectedStudent ? "" : " attention"}`}>
              학생
              <select value={selectedStudentId} onChange={(event) => setPickedStudentId(event.target.value)}>
                <option value="">학생 선택</option>
                {filteredStudents.map((student) => (
                  <option key={student.studentId} value={student.studentId}>{student.name} ({student.grade})</option>
                ))}
              </select>
            </label>
          ) : null}
          {!isClassMode ? (
            <label className="problemBankRoundPick">
              회차
              <select value={round} onChange={(event) => setRound(Number(event.target.value))}>
                <option value={1}>1회차 (첫 풀이)</option>
                <option value={2}>2회차 (재풀이)</option>
                <option value={3}>3회차</option>
              </select>
            </label>
          ) : (
            <label className="problemBankRoundPick">
              기준
              <select aria-label="오답률 기준" value={pickThreshold} onChange={(event) => setPickThreshold(Number(event.target.value))}>
                {classPickThresholds.map((threshold) => (
                  <option key={threshold} value={threshold}>오답률 {threshold}% 이상</option>
                ))}
              </select>
            </label>
          )}
          <div className="problemBankSelectionActions">
            <span className="problemBankSelectionCount">선택 {selectedItemIds.size}개</span>
            {isClassMode ? (
              <button onClick={selectFrequentlyWrongItems} type="button">많이 틀린 문항 선택</button>
            ) : (
              <button onClick={selectStudentWrongItems} type="button">오답 전체 선택</button>
            )}
            <button onClick={() => setSelectedItemIds(new Set())} type="button">선택 해제</button>
            <button className="primaryButton" disabled={selectedItemIds.size === 0} onClick={openPrint} type="button">인쇄 · PPT</button>
          </div>
        </div>

        <div className="problemBankLegend" aria-label="번호 색 뜻">
          {selectedStudent ? (
            <>
              <strong>{selectedStudent.name} 기준</strong>
              {studentStateLegend.map((state) => (
                <span key={state.key}><i className={`problemBankBand mine-${state.key}`} />{state.label}</span>
              ))}
              <span className="problemBankLegendHint">테두리 = 인쇄 선택 · Ctrl+클릭으로 고르기</span>
            </>
          ) : (
            <>
              <strong>반 전체 오답률</strong>
              {wrongRateLegend.map((band) => (
                <span key={band.key}><i className={`problemBankBand band-${band.key}`} />{band.label}</span>
              ))}
              <span className="problemBankLegendHint">{isClassMode ? "번호를 누르면 인쇄·PPT 대상으로 고릅니다 (Ctrl 없이도 됩니다)" : "학생을 고르면 그 학생 기준 색으로 바뀌고 번호를 눌러 기록합니다"}</span>
            </>
          )}
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
              const myWrongInUnit = selectedStudent ? group.items.filter((item) => studentStates.get(item.itemId) === "wrong").length : 0;
              const percent = (numerator, denominator) => (denominator ? Math.round((numerator / denominator) * 100) : 0);
              return (
                <section className="problemBankUnitCard" key={group.unit.unitId || "orphan"}>
                  <header className="problemBankUnitHead">
                    <div>
                      <strong>{bookDetail.book.title} {group.unit.title}</strong>
                      <small>{[bookDetail.book.folderPath, bookDetail.book.title, group.unit.title].filter(Boolean).join(" / ")}</small>
                    </div>
                    <div className="problemBankUnitStats">
                      {selectedStudent ? <span className="problemBankPill mine">{selectedStudent.name} 오답 {myWrongInUnit}</span> : null}
                      <span className="problemBankPill">{recordedInUnit}/{group.items.length}</span>
                      <span className="problemBankPill warn">풀이오답 {percent(unitWrong, unitAttempted)}%</span>
                      <span className="problemBankPill danger">현재 {percent(unitCurrentWrong, unitAttempted)}%</span>
                      <button className="problemBankUnitSelect" onClick={() => selectUnitItems(group)} type="button">단원 전체 선택</button>
                    </div>
                  </header>
                  <div className="problemBankNumberGrid">
                    {group.items.map((item) => {
                      const band = wrongRateBand(itemStats.get(item.itemId));
                      const studentState = studentStates.get(item.itemId) ?? "none";
                      const studentResult = studentResults.get(item.itemId);
                      const classes = [
                        "problemBankNumber",
                        selectedStudent ? `mine-${studentState}` : `band-${band.key}`,
                        selectedItemIds.has(item.itemId) ? "selected" : "",
                        previewItemId === item.itemId ? "previewing" : "",
                        studentResult?.pending ? "pending" : "",
                        item.reviewStatus === "flagged" ? "flagged" : ""
                      ].filter(Boolean).join(" ");
                      const stateLabel = selectedStudent
                        ? studentStateLegend.find((state) => state.key === studentState)?.label.split(" (")[0] ?? ""
                        : band.label;
                      return (
                        <button
                          aria-label={`${item.numberLabel}번 · ${stateLabel}`}
                          aria-pressed={selectedItemIds.has(item.itemId)}
                          className={classes}
                          key={item.itemId}
                          onClick={(event) => handleItemClick(item, event)}
                          title={item.typeLabel || undefined}
                          type="button"
                        >
                          {Number.parseInt(item.numberLabel, 10) || item.numberLabel}
                          {selectedStudent && studentState !== "none" ? (
                            <i className="problemBankStudentMark">{studentState === "wrong" ? "✕" : "○"}</i>
                          ) : null}
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
                {previewPassage || previewBody ? (
                  <button aria-label="문항 이미지 크게 보기" className="problemBankZoomButton" onClick={() => setZoomOpen(true)} type="button">
                    {previewPassage ? (
                      <div className="problemBankPrintGroup">
                        <img alt={`${previewItem.numberLabel}번 공통 지시문과 문항`} onError={() => markBroken(previewPassage)} src={previewPassage.url} />
                        {previewHighlight ? (
                          <span
                            aria-hidden="true"
                            className="problemBankPrintHighlight"
                            style={{ left: `${previewHighlight.left}%`, top: `${previewHighlight.top}%`, width: `${previewHighlight.width}%`, height: `${previewHighlight.height}%` }}
                          />
                        ) : null}
                      </div>
                    ) : (
                      <img alt={`${previewItem.numberLabel}번 문항`} onError={() => markBroken(previewBody)} src={previewBody.url} />
                    )}
                  </button>
                ) : null}
                {previewRegions.length > 0 && !previewPassage && !previewBody ? (
                  <p className="problemBankError">이 문항의 본문 영역이 등록돼 있지 않습니다. 교재관리에서 패키지를 다시 등록해 주세요.</p>
                ) : null}
                {[previewPassage, previewBody].some((region) => region && brokenImages.has(region.storagePath)) ? (
                  <p className="problemBankError">이미지 파일을 불러오지 못했습니다 (Storage 에 없음). 교재관리 › 교재 상세 › 「이미지 누락 검사」로 확인한 뒤 패키지를 다시 등록해 주세요.</p>
                ) : null}
                {previewPassage || previewBody ? <p className="problemBankZoomHint">이미지를 누르면 크게 봅니다.</p> : null}
                <p className="problemBankPreviewMeta">
                  원본 {previewItem.printedPage}쪽 · {previewItem.reviewStatus === "flagged" ? "경계 확인 필요" : "경계 자동 확인"}
                  {previewPassage ? " · 공통 지시문 문항 (인쇄 때 지시문과 함께 나가고 이 번호에 강조 상자가 붙습니다)" : ""}
                  {previewRegions.length && !previewSolution ? " · 해설 없음" : ""}
                </p>
                {previewAnswer ? (
                  <div className="problemBankPreviewAnswer">
                    <strong>정답</strong>
                    <img alt={`${previewItem.numberLabel}번 정답`} src={previewAnswer.url} />
                  </div>
                ) : null}
                {previewSolution ? (
                  <div className="problemBankPreviewAnswer">
                    <button aria-pressed={showSolutionPreview} className="problemBankLinkButton" onClick={() => setShowSolutionPreview((current) => !current)} type="button">
                      {showSolutionPreview ? "해설 접기" : "해설 보기"}
                    </button>
                    {showSolutionPreview ? <img alt={`${previewItem.numberLabel}번 해설`} src={previewSolution.url} /> : null}
                  </div>
                ) : null}
              </div>
            ) : null}
          </aside>
        </div>
      </div>

      {zoomOpen && previewItem && (previewPassage || previewBody) ? (
        <div aria-label="문항 이미지 확대" className="problemBankZoomLayer" onClick={() => setZoomOpen(false)} role="region">
          <div className="problemBankZoomCard" onClick={(event) => event.stopPropagation()}>
            <header>
              <strong>{[bookDetail?.book.title, unitTitleById.get(previewItem.unitId), `${previewItem.numberLabel}번`].filter(Boolean).join(" · ")}</strong>
              <button onClick={() => setZoomOpen(false)} type="button">닫기 (Esc)</button>
            </header>
            {previewPassage ? (
              <div className="problemBankPrintGroup">
                <img alt={`${previewItem.numberLabel}번 공통 지시문과 문항 확대`} src={previewPassage.url} />
                {previewHighlight ? (
                  <span
                    aria-hidden="true"
                    className="problemBankPrintHighlight"
                    style={{ left: `${previewHighlight.left}%`, top: `${previewHighlight.top}%`, width: `${previewHighlight.width}%`, height: `${previewHighlight.height}%` }}
                  />
                ) : null}
              </div>
            ) : (
              <img alt={`${previewItem.numberLabel}번 문항 확대`} src={previewBody.url} />
            )}
          </div>
        </div>
      ) : null}

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
