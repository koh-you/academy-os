import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import academyMark from "../../../assets/branding/academy-mark.png";
import {
  assignPrintColumns,
  buildPrintEntries,
  buildPrintEntriesFromRows,
  distributeExamPoints,
  flattenPrintItems,
  orderExamRows,
  printWidthMm
} from "./problemBankModel.js";
import { exportWrongAnswerPptx } from "./problemBankPptx.js";

// 인쇄 워터마크는 서버 시험지 워터마크(src/shared/server/testPaperWatermark.js)와 같은 로고·같은 값이다:
// 페이지 중앙 · 폭 50% · 불투명도 0.1 · 회전 없음. 문항 이미지가 흰 바탕이라 뒤에 두면 가려지므로
// 이미지 위에 얹고(mix-blend-mode: multiply) 그 아래 글자가 비치게 한다.
const watermarkOpacity = 0.1;

/**
 * 선택 문항 인쇄지. A4 세로, 1단/2단 선택, 문항마다 출처 줄 + 원문 이미지 + 풀이 공간.
 * 공통 지시문이 있는 문항(교과서문제 정복하기)은 지시문 블록을 한 번 싣고 고른 번호에 강조 상자를 얹는다.
 * 조판 규칙: 세로 우선, 완전 검정, 장식 없음, 안내 문구 없음.
 *
 * variant
 * - "wrong"(기본 · 오답지): 한 교재의 선택 문항을 교재 순서로. book·units·items·selectedItemIds·student 를 받는다.
 * - "exam"(시험지): 여러 교재에서 담은 rows(문항 + 출처)를 시험지 순서(교재순·담은순·섞기)로 싣고, 제목·배점·
 *   수험자 정보 칸을 넣는다. 배점은 총점을 문항 수로 나눈 정수(나머지는 앞 문항부터 +1)이며 문항마다 고칠 수 있다.
 */
export function WrongAnswerPrintSheet({ variant = "wrong", book, units, items, selectedItemIds = [], rows = [], imagesByItem, student, onClose }) {
  const isExam = variant === "exam";
  const [includeAnswers, setIncludeAnswers] = useState(false);
  const [includeSolutions, setIncludeSolutions] = useState(false);
  const [solutionSpace, setSolutionSpace] = useState("normal");
  const [columns, setColumns] = useState(2);
  const [pptxState, setPptxState] = useState({ stage: "idle", message: "" });
  // 시험지 전용 상태 — 제목·순서·배점·출처 표시. 인쇄 미리보기 안에서만 쓰고 저장하지 않는다.
  const [examTitle, setExamTitle] = useState("수학 시험지");
  const [examOrder, setExamOrder] = useState("book");
  const [shuffleSeed, setShuffleSeed] = useState(1);
  const [totalPoints, setTotalPoints] = useState(100);
  const [pointOverrides, setPointOverrides] = useState(() => new Map());
  const [showSource, setShowSource] = useState(!isExam);

  const orderedRows = useMemo(() => (isExam ? orderExamRows(rows, examOrder, shuffleSeed) : []), [isExam, rows, examOrder, shuffleSeed]);
  const entries = useMemo(
    () => (isExam ? buildPrintEntriesFromRows(orderedRows, imagesByItem) : buildPrintEntries({ book, units, items, selectedItemIds, imagesByItem })),
    [isExam, orderedRows, book, units, items, selectedItemIds, imagesByItem]
  );
  const printRows = useMemo(() => flattenPrintItems(entries), [entries]);
  const printColumnSides = useMemo(() => assignPrintColumns(entries), [entries]);
  const defaultPoints = useMemo(() => distributeExamPoints(entries.length, Number(totalPoints) || 0), [entries.length, totalPoints]);
  const pointsOf = (entry, index) => {
    const override = pointOverrides.get(entry.key);
    return Number.isFinite(override) ? override : defaultPoints[index] ?? 0;
  };
  const pointsTotal = entries.reduce((sum, entry, index) => sum + pointsOf(entry, index), 0);
  const answerEntries = printRows.filter((row) => row.answerUrl);
  const solutionEntries = printRows.filter((row) => row.solutionUrl);
  const missingImages = entries.filter((entry) => entry.kind === "item" && !entry.bodyUrl).length;
  const selectedCount = isExam ? rows.length : selectedItemIds.length;
  const title = isExam ? examTitle.trim() || "수학 시험지" : `${book.title} 오답지`;
  const subtitle = isExam
    ? [`${entries.length}문항`, `${pointsTotal}점`, new Date().toLocaleDateString("ko-KR")].join(" · ")
    : [student ? `${student.grade ?? ""} ${student.name}`.trim() : "", `${selectedCount}문항`, new Date().toLocaleDateString("ko-KR")]
      .filter(Boolean)
      .join(" · ");

  // 인쇄 레이어는 body 바로 아래에 둔다. 인쇄할 때 #root 를 통째로 숨겨야 앱 화면이 빈 쪽으로 딸려 나오지 않는다.
  // 공용 Modal 셸은 #root 안에 그려져 인쇄에 같이 숨겨지므로 여기서는 쓰지 않는다(대화상자가 아니라 종이 미리보기 영역).
  useEffect(() => {
    document.body.classList.add("problemBankPrinting");
    return () => document.body.classList.remove("problemBankPrinting");
  }, []);

  function setPoints(entry, value) {
    const points = Number(value);
    setPointOverrides((current) => {
      const next = new Map(current);
      if (value !== "" && Number.isFinite(points) && points >= 0) next.set(entry.key, points);
      else next.delete(entry.key);
      return next;
    });
  }

  async function savePptx() {
    if (pptxState.stage === "running") return;
    setPptxState({ stage: "running", message: "PPT 만드는 중… 0%" });
    try {
      const result = await exportWrongAnswerPptx({
        title,
        subtitle,
        entries,
        includeSolutions,
        watermarkUrl: academyMark,
        onProgress: (done, total) => setPptxState({ stage: "running", message: `PPT 만드는 중… ${Math.round((done / total) * 100)}%` })
      });
      setPptxState({ stage: "done", message: `${result.fileName} 저장 (${result.slideCount}장)` });
    } catch (error) {
      setPptxState({ stage: "error", message: error.message || "PPT 를 만들지 못했습니다." });
    }
  }

  return createPortal(
    <div className="problemBankPrintLayer" role="region" aria-label={isExam ? "시험지 인쇄 미리보기" : "오답지 인쇄 미리보기"}>
      <div className="problemBankPrintToolbar noPrint">
        <div>
          <strong>{title}</strong>
          <small>{subtitle}{missingImages ? ` · 이미지 없는 문항 ${missingImages}개` : ""}</small>
        </div>
        {isExam ? (
          <>
            <label>
              제목
              <input aria-label="시험지 제목" className="problemBankExamTitleInput" onChange={(event) => setExamTitle(event.target.value)} value={examTitle} />
            </label>
            <label>
              문항 순서
              <select aria-label="문항 순서" value={examOrder} onChange={(event) => setExamOrder(event.target.value)}>
                <option value="book">교재 순서</option>
                <option value="added">담은 순서</option>
                <option value="shuffle">섞기</option>
              </select>
            </label>
            {examOrder === "shuffle" ? (
              <button className="softButton" onClick={() => setShuffleSeed((seed) => seed + 1)} type="button">다시 섞기</button>
            ) : null}
            <label>
              총점
              <input aria-label="총점" className="problemBankExamPointsInput" inputMode="numeric" min={0} onChange={(event) => setTotalPoints(event.target.value)} type="number" value={totalPoints} />
            </label>
            <label><input checked={showSource} onChange={(event) => setShowSource(event.target.checked)} type="checkbox" /> 출처 표시</label>
          </>
        ) : null}
        <label>
          단 구성
          <select value={columns} onChange={(event) => setColumns(Number(event.target.value))}>
            <option value={1}>1단</option>
            <option value={2}>2단</option>
          </select>
        </label>
        <label>
          풀이 공간
          <select value={solutionSpace} onChange={(event) => setSolutionSpace(event.target.value)}>
            <option value="compact">좁게</option>
            <option value="normal">보통</option>
            <option value="wide">넓게</option>
          </select>
        </label>
        <label><input checked={includeAnswers} disabled={answerEntries.length === 0} onChange={(event) => setIncludeAnswers(event.target.checked)} type="checkbox" /> 빠른정답 {answerEntries.length === 0 ? "(등록된 정답 없음)" : `(${answerEntries.length}/${printRows.length})`}</label>
        <label><input checked={includeSolutions} disabled={solutionEntries.length === 0} onChange={(event) => setIncludeSolutions(event.target.checked)} type="checkbox" /> 해설 {solutionEntries.length === 0 ? "(등록된 해설 없음)" : `(${solutionEntries.length}/${printRows.length})`}</label>
        <button className="primaryButton" onClick={() => window.print()} type="button">🖨 인쇄</button>
        <button className="softButton" disabled={pptxState.stage === "running"} onClick={savePptx} type="button">PPT 저장</button>
        <button className="softButton" onClick={onClose} type="button">닫기</button>
        {pptxState.message ? <small aria-live="polite" className={`problemBankPptxMessage stage-${pptxState.stage}`}>{pptxState.message}</small> : null}
        {isExam ? <small className="problemBankPptxMessage">배점은 번호 옆 칸에서 문항마다 고칠 수 있습니다 (합계 {pointsTotal}점).</small> : null}
      </div>

      <div className={`problemBankPrintSheet space-${solutionSpace} cols-${columns}${isExam ? " variant-exam" : ""}`}>
        <img alt="" aria-hidden="true" className="problemBankWatermark" src={academyMark} style={{ opacity: watermarkOpacity }} />
        {isExam ? (
          <header className="problemBankPrintHead problemBankExamHead">
            <strong>{title}</strong>
            <span>{subtitle}</span>
            <div className="problemBankExamFields">
              <span>학교 [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</span>
              <span>학년 [ &nbsp;&nbsp;&nbsp;&nbsp; ]</span>
              <span>반 [ &nbsp;&nbsp;&nbsp;&nbsp; ]</span>
              <span>이름 [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</span>
              <span className="problemBankExamScore">점수 [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ] / {pointsTotal}</span>
            </div>
          </header>
        ) : (
          <header className="problemBankPrintHead">
            <strong>{title}</strong>
            <span>{subtitle}</span>
            <span>이름 [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</span>
          </header>
        )}
        <div className="problemBankPrintColumns">
          {entries.map((entry, index) => (
            <article className={`problemBankPrintItem col-${printColumnSides[index]}`} key={entry.key}>
              {!isExam || showSource ? (
                <div className="problemBankPrintSource">
                  <span>{entry.sourceLine}</span>
                  {entry.typeLabel ? <span className="problemBankPrintType">{entry.typeLabel}</span> : null}
                </div>
              ) : null}
              <div className="problemBankPrintNumber">
                {String(index + 1).padStart(2, "0")}
                {isExam ? (
                  <span className="problemBankExamPoints">
                    [<input aria-label={`${index + 1}번 배점`} className="noPrint" inputMode="numeric" min={0} onChange={(event) => setPoints(entry, event.target.value)} type="number" value={pointsOf(entry, index)} />
                    <b className="printOnly">{pointsOf(entry, index)}</b>점]
                  </span>
                ) : null}
              </div>
              {entry.kind === "group" ? (
                <div className="problemBankPrintGroup">
                  <img alt={`${entry.sourceLine} 공통 지시문과 문항`} src={entry.passageUrl} />
                  {entry.members.map((member) => (member.highlight ? (
                    <span
                      aria-hidden="true"
                      className="problemBankPrintHighlight"
                      key={member.item.itemId}
                      style={{ left: `${member.highlight.left}%`, top: `${member.highlight.top}%`, width: `${member.highlight.width}%`, height: `${member.highlight.height}%` }}
                    />
                  ) : null))}
                </div>
              ) : entry.bodyUrl ? (
                <img alt={`${entry.item.numberLabel}번 문항`} src={entry.bodyUrl} />
              ) : (
                <p className="problemBankPrintMissing">{entry.item.numberLabel}번 이미지가 없습니다.</p>
              )}
              <div className="problemBankPrintSpace" />
            </article>
          ))}
        </div>

        {includeAnswers && answerEntries.length ? (
          <section className="problemBankPrintAnswers">
            <h3>{isExam ? "정답" : "빠른정답"}</h3>
            <div className="problemBankPrintAnswerGrid">
              {answerEntries.map((row) => {
                const widthMm = printWidthMm(row.answerRegion);
                return (
                  <div key={row.item.itemId}>
                    <b>{String(row.entryNumber).padStart(2, "0")}</b>
                    <img alt={`${row.item.numberLabel}번 정답`} src={row.answerUrl} style={widthMm ? { width: `${Math.min(widthMm, 60)}mm` } : undefined} />
                    {!isExam || showSource ? <small>{isExam ? row.sourceLine : `${row.item.numberLabel}번`}</small> : null}
                  </div>
                );
              })}
            </div>
          </section>
        ) : null}

        {includeSolutions && solutionEntries.length ? (
          <section className="problemBankPrintSolutions">
            <h3>해설</h3>
            <div className="problemBankPrintColumns">
              {solutionEntries.map((row) => (
                <article className="problemBankPrintItem" key={`${row.item.itemId}-solution`}>
                  {!isExam || showSource ? <div className="problemBankPrintSource"><span>{row.sourceLine}</span></div> : null}
                  <div className="problemBankPrintNumber">{String(row.entryNumber).padStart(2, "0")}</div>
                  <img alt={`${row.item.numberLabel}번 해설`} src={row.solutionUrl} />
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>,
    document.body
  );
}
