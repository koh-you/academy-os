import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import academyMark from "../../../assets/branding/academy-mark.png";
import { buildPrintEntries } from "./problemBankModel.js";

// 인쇄 워터마크는 서버 시험지 워터마크(src/shared/server/testPaperWatermark.js)와 같은 로고·같은 값이다:
// 페이지 중앙 · 폭 50% · 불투명도 0.1 · 회전 없음.
const watermarkOpacity = 0.1;

/**
 * 선택 문항 오답지. A4 세로 2단, 문항마다 출처 줄 + 원문 이미지 + 풀이 공간.
 * 조판 규칙: 세로 우선(왼쪽 단 위→아래, 오른쪽 단), 완전 검정, 장식 없음, 안내 문구 없음.
 */
export function WrongAnswerPrintSheet({ book, units, items, selectedItemIds, imagesByItem, student, onClose }) {
  const [includeAnswers, setIncludeAnswers] = useState(false);
  const [includeSolutions, setIncludeSolutions] = useState(false);
  const [solutionSpace, setSolutionSpace] = useState("normal");
  const entries = useMemo(
    () => buildPrintEntries({ book, units, items, selectedItemIds, imagesByItem }),
    [book, units, items, selectedItemIds, imagesByItem]
  );
  const answerEntries = entries.filter((entry) => entry.item.answer);
  const solutionEntries = entries.filter((entry) => entry.solutionUrl);
  const missingImages = entries.filter((entry) => !entry.bodyUrl).length;
  const title = `${book.title} 오답지`;
  const subtitle = [student ? `${student.grade ?? ""} ${student.name}`.trim() : "", `${entries.length}문항`, new Date().toLocaleDateString("ko-KR")]
    .filter(Boolean)
    .join(" · ");

  // 인쇄 레이어는 body 바로 아래에 둔다. 인쇄할 때 #root 를 통째로 숨겨야 앱 화면이 빈 쪽으로 딸려 나오지 않는다.
  // 공용 Modal 셸은 #root 안에 그려져 인쇄에 같이 숨겨지므로 여기서는 쓰지 않는다(대화상자가 아니라 종이 미리보기 영역).
  useEffect(() => {
    document.body.classList.add("problemBankPrinting");
    return () => document.body.classList.remove("problemBankPrinting");
  }, []);

  return createPortal(
    <div className="problemBankPrintLayer" role="region" aria-label="오답지 인쇄 미리보기">
      <div className="problemBankPrintToolbar noPrint">
        <div>
          <strong>{title}</strong>
          <small>{subtitle}{missingImages ? ` · 이미지 없는 문항 ${missingImages}개` : ""}</small>
        </div>
        <label><input checked={includeAnswers} disabled={answerEntries.length === 0} onChange={(event) => setIncludeAnswers(event.target.checked)} type="checkbox" /> 빠른정답 {answerEntries.length === 0 ? "(등록된 정답 없음)" : `(${answerEntries.length})`}</label>
        <label><input checked={includeSolutions} disabled={solutionEntries.length === 0} onChange={(event) => setIncludeSolutions(event.target.checked)} type="checkbox" /> 해설 {solutionEntries.length === 0 ? "(등록된 해설 없음)" : `(${solutionEntries.length})`}</label>
        <label>
          풀이 공간
          <select value={solutionSpace} onChange={(event) => setSolutionSpace(event.target.value)}>
            <option value="compact">좁게</option>
            <option value="normal">보통</option>
            <option value="wide">넓게</option>
          </select>
        </label>
        <button className="primaryButton" onClick={() => window.print()} type="button">🖨 인쇄</button>
        <button className="softButton" onClick={onClose} type="button">닫기</button>
      </div>

      <div className={`problemBankPrintSheet space-${solutionSpace}`}>
        <img alt="" aria-hidden="true" className="problemBankWatermark" src={academyMark} style={{ opacity: watermarkOpacity }} />
        <header className="problemBankPrintHead">
          <strong>{title}</strong>
          <span>{subtitle}</span>
          <span>이름 [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</span>
        </header>
        <div className="problemBankPrintColumns">
          {entries.map((entry, index) => (
            <article className="problemBankPrintItem" key={entry.item.itemId}>
              <div className="problemBankPrintSource">
                <span>{entry.sourceLine}</span>
                {entry.typeLabel ? <span className="problemBankPrintType">{entry.typeLabel}</span> : null}
              </div>
              <div className="problemBankPrintNumber">{String(index + 1).padStart(2, "0")}</div>
              {entry.passageUrl ? <img alt={`${entry.item.numberLabel}번 공통 지시문`} src={entry.passageUrl} /> : null}
              {entry.bodyUrl ? (
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
            <h3>빠른정답</h3>
            <div className="problemBankPrintAnswerGrid">
              {answerEntries.map((entry) => (
                <div key={entry.item.itemId}>
                  <b>{String(entries.indexOf(entry) + 1).padStart(2, "0")}</b>
                  <span>{entry.item.answer}</span>
                  <small>{entry.item.numberLabel}번</small>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {includeSolutions && solutionEntries.length ? (
          <section className="problemBankPrintSolutions">
            <h3>해설</h3>
            <div className="problemBankPrintColumns">
              {solutionEntries.map((entry) => (
                <article className="problemBankPrintItem" key={`${entry.item.itemId}-solution`}>
                  <div className="problemBankPrintSource"><span>{entry.sourceLine}</span></div>
                  <img alt={`${entry.item.numberLabel}번 해설`} src={entry.solutionUrl} />
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
