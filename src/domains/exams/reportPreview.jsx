import {
  getExamAnalysisInitialFields,
  splitReportLines
} from "./analysisState.js";
import {
  cleanPreviewText,
  copyTextToClipboard,
  isMarkdownTableDivider,
  isMarkdownTableLine,
  parseInstagramSlides,
  parseMarkdownTableRow
} from "./outputPreview.js";

export function ExamAnalysisInitialView({ analysis }) {
  const initialFields = getExamAnalysisInitialFields(analysis);
  return (
    <div className="analysisInitialView">
      <div className="analysisInitialMeta">
        <strong>AI 최초 분석 초안</strong>
        <span>{analysis.aiInitialGeneratedAt ? `생성 시각 ${analysis.aiInitialGeneratedAt}` : "현재 AI 필드를 기준으로 표시합니다."}</span>
      </div>
      {[
        ["oneLineSummary", "한 줄 총평"],
        ["examStructure", "시험 구조"],
        ["aiOverview", "시험 개요"],
        ["unitDistribution", "단원별 출제 분포"],
        ["typeClassification", "유형 분류"],
        ["killerProblems", "킬러/준킬러 문항"],
        ["fiveCorePatterns", "5대 핵심 패턴"],
        ["sourceCheckNotes", "확인 필요 항목"],
        ["studentAnalysisDraft", "학생 분석지 초안"],
        ["blogDraft", "블로그 초안"],
        ["instagramDraft", "인스타 카드뉴스 초안"]
      ].map(([field, title]) => (
        <article className="analysisInitialBlock" key={field}>
          <h3>{title}</h3>
          <ExamAnalysisReportText value={initialFields[field]} />
        </article>
      ))}
    </div>
  );
}

export function ExamAnalysisReportSection({ title, children }) {
  return (
    <section className="examAnalysisReportSection">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export function ExamAnalysisReportText({ value, fallback = "아직 내용이 없습니다." }) {
  const lines = splitReportLines(value);
  if (!lines.length) return <p className="muted">{fallback}</p>;
  return (
    <div className="examAnalysisReportText">
      {lines.map((line, index) => <p key={`${line}_${index}`}>{line}</p>)}
    </div>
  );
}

export function ExamAnalysisReadablePreview({ value, fallback = "아직 내용이 없습니다." }) {
  const lines = String(value ?? "").replace(/\r\n/g, "\n").split("\n");
  const nodes = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = cleanPreviewText(lines[index]);
    if (!line) continue;

    if (isMarkdownTableLine(line)) {
      const tableLines = [];
      while (index < lines.length && isMarkdownTableLine(lines[index])) {
        if (!isMarkdownTableDivider(lines[index])) tableLines.push(lines[index]);
        index += 1;
      }
      index -= 1;
      const rows = tableLines.map(parseMarkdownTableRow).filter((row) => row.some(Boolean));
      if (rows.length) {
        nodes.push(
          <div className="analysisPreviewTableWrap" key={`table_${index}`}>
            <table className="analysisPreviewTable">
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={`${row.join("_")}_${rowIndex}`}>
                    {row.map((cell, cellIndex) => rowIndex === 0 ? (
                      <th key={`${cell}_${cellIndex}`}>{cell}</th>
                    ) : (
                      <td key={`${cell}_${cellIndex}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    if (/^#{1,4}\s+/.test(line)) {
      nodes.push(<h4 key={`${line}_${index}`}>{line.replace(/^#{1,4}\s+/, "")}</h4>);
      continue;
    }

    if (/^[-*]\s+/.test(line) || /^\d+[.)]\s+/.test(line)) {
      nodes.push(<p className="analysisPreviewListLine" key={`${line}_${index}`}>{line.replace(/^[-*]\s+/, "").replace(/^\d+[.)]\s+/, "")}</p>);
      continue;
    }

    nodes.push(<p key={`${line}_${index}`}>{line}</p>);
  }

  if (!nodes.length) return <p className="muted">{fallback}</p>;
  return <div className="analysisReadablePreview">{nodes}</div>;
}

export function ExamAnalysisInstagramPreview({ value }) {
  const slides = parseInstagramSlides(value);
  return (
    <div className="analysisInstagramPreview">
      {slides.map((slide) => (
        <article className="analysisInstagramSlide" key={`${slide.number}_${slide.title}`}>
          <span>{slide.number}장</span>
          <strong>{slide.title}</strong>
          {slide.lines.map((line, index) => <p key={`${line}_${index}`}>{line}</p>)}
        </article>
      ))}
    </div>
  );
}

export function AnalysisOutputPreviewCard({ title, tone = "", value = "", onEdit, onOpen, children }) {
  return (
    <article className={["panel", "outputPreviewCard", tone].filter(Boolean).join(" ")}>
      <div className="sectionHeader slim">
        <h2>{title}</h2>
        <div className="analysisPreviewActions">
          {onOpen ? <button className="primaryButton" onClick={onOpen} type="button">보기</button> : null}
          <button className="softButton" onClick={() => copyTextToClipboard(value)} type="button">복사</button>
          {onEdit ? <button className="softButton" onClick={onEdit} type="button">수정</button> : null}
        </div>
      </div>
      <div
        className={onOpen ? "outputPreviewBody clickable" : "outputPreviewBody"}
        onClick={onOpen}
        onKeyDown={(event) => {
          if (!onOpen) return;
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpen();
          }
        }}
        role={onOpen ? "button" : undefined}
        tabIndex={onOpen ? 0 : undefined}
      >
        {children}
      </div>
    </article>
  );
}
