import {
  getExamAnalysisInitialFields,
  splitReportLines
} from "./analysisState.js";
import {
  cleanPreviewText,
  copyTextToClipboard,
  parseReadablePreviewDocument,
  parseInstagramSlides,
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

function PreviewTable({ rows }) {
  return (
    <div className="analysisPreviewTableWrap">
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

export function ExamAnalysisReadablePreview({ value, fallback = "아직 내용이 없습니다." }) {
  const document = parseReadablePreviewDocument(value);
  if (!document.lead && !document.sections.length && document.title === "산출물 미리보기") return <p className="muted">{fallback}</p>;
  return (
    <article className="analysisReadablePreview rich">
      <header className="analysisReadableHero">
        <span>문서 초안</span>
        <h3>{document.title}</h3>
        {document.lead ? <p>{document.lead}</p> : null}
      </header>
      {document.sections.length ? (
        <div className="analysisReadableSectionGrid">
          {document.sections.map((section, sectionIndex) => (
            <section className="analysisReadableSection" key={`${section.title}_${sectionIndex}`}>
              <h4>{section.title}</h4>
              {section.paragraphs.map((paragraph, index) => <p key={`${paragraph}_${index}`}>{paragraph}</p>)}
              {section.bullets.length ? (
                <ul>
                  {section.bullets.map((item, index) => <li key={`${item}_${index}`}>{item}</li>)}
                </ul>
              ) : null}
              {section.tables.map((rows, index) => <PreviewTable key={`${section.title}_table_${index}`} rows={rows} />)}
            </section>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export function ExamAnalysisInstagramPreview({ value }) {
  const slides = parseInstagramSlides(value);
  return (
    <div className="analysisInstagramPreview" style={{ "--slide-count": slides.length }}>
      {slides.map((slide, slideIndex) => (
        <article className="analysisInstagramSlide" key={`${slide.number}_${slide.title}`}>
          <div className="analysisInstagramSlideTop">
            <span>{String(slide.number || slideIndex + 1).padStart(2, "0")}</span>
            <small>{slideIndex === 0 ? "표지" : slideIndex === slides.length - 1 ? "CTA" : "분석"}</small>
          </div>
          <strong>{slide.title}</strong>
          <div className="analysisInstagramSlideBody">
            {slide.lines.map((line, index) => <p key={`${line}_${index}`}>{cleanPreviewText(line)}</p>)}
          </div>
          <footer>으뜸수학 고태영T</footer>
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
