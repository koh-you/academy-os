import { useMemo } from "react";

import {
  similarProblemNeedOptions,
  similarProblemRelationOptions
} from "./questionClassification.js";
import {
  compactFinalClassificationTableBlock,
  createExamFinalDocumentFromAnalysis as createFallbackExamFinalDocumentFromAnalysis,
  createFinalDocumentId,
  getExamFinalDocumentBlockGuide,
  normalizeExamFinalDocument
} from "./finalDocument.js";
import { FinalQuestionCropImage } from "./questionCropView.jsx";
import {
  ExamAnalysisReportSection,
  ExamAnalysisReportText
} from "./reportPreview.jsx";

const saveStateLabels = {
  idle: "저장 전",
  dirty: "변경됨",
  saving: "저장 중",
  saved: "저장 완료",
  failed: "저장 실패"
};

function FinalDocumentSaveStatus({ saveState = "idle" }) {
  const normalizedSaveState = Object.prototype.hasOwnProperty.call(saveStateLabels, saveState) ? saveState : "idle";
  return (
    <small className={`saveState save-${normalizedSaveState} inlineSaveStatus`}>
      최종편집본 · {saveStateLabels[normalizedSaveState]}
    </small>
  );
}

export function ExamFinalDocumentPrint({ document }) {
  const normalizedDocument = normalizeExamFinalDocument(document);
  if (!normalizedDocument?.blocks?.length) return null;
  return (
    <article className="examAnalysisPrintableReport finalDocumentPrint">
      {normalizedDocument.blocks.map((block) => {
        const printBlock = block.type === "table" ? compactFinalClassificationTableBlock(block) : block;
        if (block.type === "cover") {
          return (
            <header className="examAnalysisReportCover" key={block.id}>
              <p>{block.subtitle}</p>
              <h1>{block.title}</h1>
              <div className="examAnalysisReportMeta">
                {block.meta.length ? block.meta.map((item) => <span key={item}>{item}</span>) : <span>최종 편집본</span>}
              </div>
            </header>
          );
        }
        if (block.type === "table") {
          return (
            <ExamAnalysisReportSection key={block.id} title={printBlock.title}>
              <div className="analysisPreviewTableWrap">
                <table className={`analysisPreviewTable ${printBlock.title === "문항별 분류표 원본" ? "finalClassificationTable" : ""}`}>
                  <thead>
                    <tr>{printBlock.columns.map((column, index) => <th key={`${column}_${index}`}>{column}</th>)}</tr>
                  </thead>
                  <tbody>
                    {printBlock.rows.length ? printBlock.rows.map((row, rowIndex) => (
                      <tr key={`${block.id}_row_${rowIndex}`}>
                        {printBlock.columns.map((_, cellIndex) => <td key={`${block.id}_${rowIndex}_${cellIndex}`}>{row[cellIndex]}</td>)}
                      </tr>
                    )) : (
                      <tr><td colSpan={printBlock.columns.length}>입력된 행이 없습니다.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </ExamAnalysisReportSection>
          );
        }
        if (block.type === "chart") {
          const maxValue = Math.max(1, ...block.rows.map((row) => Number(row.value) || 0));
          return (
            <ExamAnalysisReportSection key={block.id} title={block.title}>
              <div className="finalDocumentChart">
                {block.rows.map((row) => (
                  <div className="finalDocumentChartRow" key={row.id}>
                    <span>{row.label}</span>
                    <div><i style={{ width: `${Math.max(6, ((Number(row.value) || 0) / maxValue) * 100)}%` }} /></div>
                    <strong>{row.value}</strong>
                    {row.note ? <em>{row.note}</em> : null}
                  </div>
                ))}
              </div>
            </ExamAnalysisReportSection>
          );
        }
        if (block.type === "flow") {
          return (
            <ExamAnalysisReportSection key={block.id} title={block.title}>
              <div className="analysisStrategyFlow finalDocumentFlow">
                {block.nodes.map((node, index) => (
                  <div className="analysisStrategyNode" key={node.id}>
                    <strong>{node.title}</strong>
                    <span>{node.detail}</span>
                    {index < block.nodes.length - 1 ? <i aria-hidden="true">→</i> : null}
                  </div>
                ))}
              </div>
            </ExamAnalysisReportSection>
          );
        }
        if (block.type === "questionSlots") {
          return (
            <ExamAnalysisReportSection key={block.id} title={block.title}>
              <div className="finalQuestionSlotGrid">
                {block.items.map((item) => (
                  <article className="finalQuestionSlotCard" key={item.id}>
                    <div>
                      <strong>{item.number}</strong>
                      <span>{item.title || "주요 문항"}</span>
                    </div>
                    <div className="finalQuestionSlotBoxes">
                      <p>
                        {item.originalImage ? <FinalQuestionCropImage image={item.originalImage} /> : item.originalSlot}
                        {item.originalImage ? <span>{item.originalSlot}</span> : null}
                      </p>
                      <p>{item.similarSlot}</p>
                    </div>
                    <small>{[item.similarProblemNeeded, item.similarProblemSource, item.similarProblemRelation].filter(Boolean).join(" · ")}</small>
                    {item.comment ? <p>{item.comment}</p> : null}
                  </article>
                ))}
              </div>
            </ExamAnalysisReportSection>
          );
        }
        return (
          <ExamAnalysisReportSection key={block.id} title={block.title}>
            <ExamAnalysisReportText value={block.value} />
          </ExamAnalysisReportSection>
        );
      })}
    </article>
  );
}

export function ExamFinalDocumentBuilder({
  analysis,
  createDocumentFromAnalysis = createFallbackExamFinalDocumentFromAnalysis,
  document,
  onChange,
  onRegenerate,
  saveState = "idle"
}) {
  const fallbackDocument = useMemo(
    () => createDocumentFromAnalysis(analysis),
    [analysis, createDocumentFromAnalysis]
  );
  const normalizedDocument = normalizeExamFinalDocument(document) || fallbackDocument;

  function commit(nextDocument) {
    onChange({
      ...nextDocument,
      updatedAt: new Date().toISOString()
    });
  }

  function updateBlock(blockId, updater) {
    commit({
      ...normalizedDocument,
      blocks: normalizedDocument.blocks.map((block) =>
        block.id === blockId ? updater(block) : block
      )
    });
  }

  function removeBlock(blockId) {
    commit({
      ...normalizedDocument,
      blocks: normalizedDocument.blocks.filter((block) => block.id !== blockId)
    });
  }

  function addBlock(type) {
    const blockMap = {
      text: { id: createFinalDocumentId("text"), type: "text", title: "새 문단", value: "" },
      table: { id: createFinalDocumentId("table"), type: "table", title: "새 표", columns: ["항목", "내용"], rows: [["", ""]] },
      chart: { id: createFinalDocumentId("chart"), type: "chart", title: "새 차트", chartType: "bar", rows: [{ id: createFinalDocumentId("chartRow"), label: "항목", value: 1, note: "" }] },
      flow: { id: createFinalDocumentId("flow"), type: "flow", title: "새 흐름도", nodes: [{ id: createFinalDocumentId("flowNode"), title: "1단계", detail: "" }] },
      questionSlots: { id: createFinalDocumentId("slotBlock"), type: "questionSlots", title: "문항 삽입 슬롯", items: [] }
    };
    commit({ ...normalizedDocument, blocks: [...normalizedDocument.blocks, blockMap[type]] });
  }

  function isBlockOpen(block, defaultOpen = false) {
    return typeof block.collapsed === "boolean" ? !block.collapsed : defaultOpen;
  }

  function toggleBlock(block, defaultOpen = false) {
    const currentlyOpen = isBlockOpen(block, defaultOpen);
    updateBlock(block.id, (current) => ({ ...current, collapsed: currentlyOpen }));
  }

  return (
    <article className="panel analysisFinalDocumentBuilder">
      <div className="sectionHeader slim">
        <div>
          <p className="eyebrow">EDITABLE REPORT</p>
          <h2>최종 편집본</h2>
          <p className="muted">글은 바로 수정하고, 표는 셀 수정, 차트·흐름도는 원본 데이터를 고치면 렌더링이 함께 바뀝니다.</p>
        </div>
        <div className="analysisFinalReportActions">
          <FinalDocumentSaveStatus saveState={saveState} />
          <button
            className="softButton"
            onClick={() => {
              if (window.confirm("현재 편집본을 지우고 AI/문항 데이터 기준 초안으로 다시 만들까요?")) onRegenerate();
            }}
            type="button"
          >
            현재 데이터로 다시 생성
          </button>
        </div>
      </div>
      <div className="finalDocumentAddBar">
        <button type="button" onClick={() => addBlock("text")}>문단 추가</button>
        <button type="button" onClick={() => addBlock("table")}>표 추가</button>
        <button type="button" onClick={() => addBlock("chart")}>차트 추가</button>
        <button type="button" onClick={() => addBlock("flow")}>흐름도 추가</button>
        <button type="button" onClick={() => addBlock("questionSlots")}>문항 슬롯 추가</button>
      </div>
      <div className="finalDocumentBlocks">
        {normalizedDocument.blocks.map((block, index) => (
          <ExamFinalDocumentBlockEditor
            block={block}
            isOpen={isBlockOpen(block, index < 2)}
            key={block.id}
            onToggle={() => toggleBlock(block, index < 2)}
            removeBlock={removeBlock}
            updateBlock={updateBlock}
          />
        ))}
      </div>
    </article>
  );
}

function ExamFinalDocumentBlockEditor({ block, isOpen = false, updateBlock, onToggle, removeBlock }) {
  const updateField = (field, value) => updateBlock(block.id, (current) => ({ ...current, [field]: value }));
  const blockGuide = getExamFinalDocumentBlockGuide(block);
  const blockLabel = {
    cover: "표지",
    text: "문단",
    table: "표",
    chart: "차트 데이터",
    flow: "흐름도",
    questionSlots: "문항 삽입 슬롯"
  }[block.type] || "블록";
  const blockTitle = block.type === "cover" ? block.title : block.title || blockLabel;

  function runHeaderAction(event, action) {
    event.stopPropagation();
    action();
  }

  return (
    <section className={`finalDocumentBlock ${block.type}${isOpen ? " open" : ""}`}>
      <div className="finalDocumentBlockHeader">
        <div className="finalDocumentBlockTitle">
          <div className="finalDocumentBlockTitleLine">
            <span className="finalDocumentBlockType">{blockLabel}</span>
            <strong>{blockTitle}</strong>
            <i className={`finalDocumentSourceBadge ${blockGuide.sourceTone}`}>{blockGuide.sourceLabel}</i>
          </div>
          <p>{blockGuide.description}</p>
          <small>연결: {blockGuide.outputLink}</small>
        </div>
        <div className="finalDocumentBlockActions">
          <button onClick={(event) => runHeaderAction(event, () => removeBlock(block.id))} type="button">삭제</button>
        </div>
        <button
          aria-expanded={isOpen}
          className="finalDocumentBlockToggle"
          onClick={onToggle}
          type="button"
        >
          {isOpen ? "접기" : "펼치기"}
        </button>
      </div>

      {isOpen ? <div className="finalDocumentBlockBody">
        {block.type === "cover" ? (
          <div className="fieldGrid">
            <label className="wideLabel">제목<input value={block.title} onChange={(event) => updateField("title", event.target.value)} /></label>
            <label className="wideLabel">부제<input value={block.subtitle} onChange={(event) => updateField("subtitle", event.target.value)} /></label>
            <label className="wideLabel">메타데이터<textarea rows={3} value={block.meta.join("\n")} onChange={(event) => updateField("meta", event.target.value.split("\n").map((item) => item.trim()).filter(Boolean))} /></label>
          </div>
        ) : null}

        {block.type === "text" ? (
          <div className="fieldGrid">
            <label className="wideLabel">섹션 제목<input value={block.title} onChange={(event) => updateField("title", event.target.value)} /></label>
            <label className="wideLabel">본문<textarea rows={7} value={block.value} onChange={(event) => updateField("value", event.target.value)} /></label>
          </div>
        ) : null}

        {block.type === "table" ? (
          <ExamFinalTableEditor block={block} updateBlock={updateBlock} />
        ) : null}

        {block.type === "chart" ? (
          <ExamFinalChartEditor block={block} updateBlock={updateBlock} />
        ) : null}

        {block.type === "flow" ? (
          <ExamFinalFlowEditor block={block} updateBlock={updateBlock} />
        ) : null}

        {block.type === "questionSlots" ? (
          <ExamFinalQuestionSlotEditor block={block} updateBlock={updateBlock} />
        ) : null}
      </div> : null}
    </section>
  );
}

function ExamFinalTableEditor({ block, updateBlock }) {
  const updateTable = (patch) => updateBlock(block.id, (current) => ({ ...current, ...patch }));
  const updateColumn = (columnIndex, value) => {
    updateTable({ columns: block.columns.map((column, index) => index === columnIndex ? value : column) });
  };
  const updateCell = (rowIndex, cellIndex, value) => {
    updateTable({
      rows: block.rows.map((row, index) =>
        index === rowIndex ? row.map((cell, currentCellIndex) => currentCellIndex === cellIndex ? value : cell) : row
      )
    });
  };
  return (
    <div className="finalDocumentTableEditor">
      <label>표 제목<input value={block.title} onChange={(event) => updateTable({ title: event.target.value })} /></label>
      <div className="analysisPreviewTableWrap">
        <table className="analysisPreviewTable editable">
          <thead>
            <tr>
              {block.columns.map((column, columnIndex) => (
                <th key={`${block.id}_column_${columnIndex}`}>
                  <input value={column} onChange={(event) => updateColumn(columnIndex, event.target.value)} />
                </th>
              ))}
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={`${block.id}_row_${rowIndex}`}>
                {block.columns.map((_, cellIndex) => (
                  <td key={`${block.id}_${rowIndex}_${cellIndex}`}>
                    <textarea rows={2} value={row[cellIndex] ?? ""} onChange={(event) => updateCell(rowIndex, cellIndex, event.target.value)} />
                  </td>
                ))}
                <td><button onClick={() => updateTable({ rows: block.rows.filter((_, index) => index !== rowIndex) })} type="button">행 삭제</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="finalDocumentInlineActions">
        <button onClick={() => updateTable({ rows: [...block.rows, block.columns.map(() => "")] })} type="button">행 추가</button>
        <button onClick={() => updateTable({ columns: [...block.columns, "새 열"], rows: block.rows.map((row) => [...row, ""]) })} type="button">열 추가</button>
      </div>
    </div>
  );
}

function ExamFinalChartEditor({ block, updateBlock }) {
  const maxValue = Math.max(1, ...block.rows.map((row) => Number(row.value) || 0));
  const updateChart = (patch) => updateBlock(block.id, (current) => ({ ...current, ...patch }));
  const updateRow = (rowId, patch) => {
    updateChart({ rows: block.rows.map((row) => row.id === rowId ? { ...row, ...patch } : row) });
  };
  return (
    <div className="finalDocumentChartEditor">
      <label>차트 제목<input value={block.title} onChange={(event) => updateChart({ title: event.target.value })} /></label>
      <div className="finalDocumentChart">
        {block.rows.map((row) => (
          <div className="finalDocumentChartRow" key={row.id}>
            <span>{row.label || "항목"}</span>
            <div><i style={{ width: `${Math.max(6, ((Number(row.value) || 0) / maxValue) * 100)}%` }} /></div>
            <strong>{row.value}</strong>
          </div>
        ))}
      </div>
      <div className="finalDocumentDataRows">
        {block.rows.map((row) => (
          <div className="finalDocumentDataRow" key={row.id}>
            <input value={row.label} onChange={(event) => updateRow(row.id, { label: event.target.value })} placeholder="항목" />
            <input inputMode="decimal" value={row.value} onChange={(event) => updateRow(row.id, { value: Number(event.target.value) || 0 })} placeholder="값" />
            <input value={row.note} onChange={(event) => updateRow(row.id, { note: event.target.value })} placeholder="비고" />
            <button onClick={() => updateChart({ rows: block.rows.filter((item) => item.id !== row.id) })} type="button">삭제</button>
          </div>
        ))}
      </div>
      <button onClick={() => updateChart({ rows: [...block.rows, { id: createFinalDocumentId("chartRow"), label: "", value: 0, note: "" }] })} type="button">데이터 추가</button>
    </div>
  );
}

function ExamFinalFlowEditor({ block, updateBlock }) {
  const updateFlow = (patch) => updateBlock(block.id, (current) => ({ ...current, ...patch }));
  const updateNode = (nodeId, patch) => {
    updateFlow({ nodes: block.nodes.map((node) => node.id === nodeId ? { ...node, ...patch } : node) });
  };
  return (
    <div className="finalDocumentFlowEditor">
      <label>흐름도 제목<input value={block.title} onChange={(event) => updateFlow({ title: event.target.value })} /></label>
      <div className="analysisStrategyFlow finalDocumentFlow">
        {block.nodes.map((node, index) => (
          <div className="analysisStrategyNode" key={node.id}>
            <input value={node.title} onChange={(event) => updateNode(node.id, { title: event.target.value })} />
            <textarea rows={3} value={node.detail} onChange={(event) => updateNode(node.id, { detail: event.target.value })} />
            <button onClick={() => updateFlow({ nodes: block.nodes.filter((item) => item.id !== node.id) })} type="button">삭제</button>
            {index < block.nodes.length - 1 ? <i aria-hidden="true">→</i> : null}
          </div>
        ))}
      </div>
      <button onClick={() => updateFlow({ nodes: [...block.nodes, { id: createFinalDocumentId("flowNode"), title: `${block.nodes.length + 1}단계`, detail: "" }] })} type="button">노드 추가</button>
    </div>
  );
}

function ExamFinalQuestionSlotEditor({ block, updateBlock }) {
  const updateSlots = (patch) => updateBlock(block.id, (current) => ({ ...current, ...patch }));
  const updateItem = (itemId, patch) => {
    updateSlots({ items: block.items.map((item) => item.id === itemId ? { ...item, ...patch } : item) });
  };
  return (
    <div className="finalQuestionSlotEditor">
      <label>슬롯 제목<input value={block.title} onChange={(event) => updateSlots({ title: event.target.value })} /></label>
      <div className="finalQuestionSlotGrid editable">
        {block.items.map((item) => (
          <article className="finalQuestionSlotCard" key={item.id}>
            {item.originalImage ? (
              <FinalQuestionCropImage image={item.originalImage} />
            ) : null}
            <div className="fieldGrid two">
              <label>문항<input value={item.number} onChange={(event) => updateItem(item.id, { number: event.target.value })} /></label>
              <label>제목<input value={item.title} onChange={(event) => updateItem(item.id, { title: event.target.value })} /></label>
              <label>유사문항 필요
                <select value={item.similarProblemNeeded} onChange={(event) => updateItem(item.id, { similarProblemNeeded: event.target.value })}>
                  {similarProblemNeedOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label>변형 구분
                <select value={item.similarProblemRelation} onChange={(event) => updateItem(item.id, { similarProblemRelation: event.target.value })}>
                  {similarProblemRelationOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label className="wideLabel">유사문항 출처<input value={item.similarProblemSource} onChange={(event) => updateItem(item.id, { similarProblemSource: event.target.value })} /></label>
              <label className="wideLabel">원문항 슬롯<input value={item.originalSlot} onChange={(event) => updateItem(item.id, { originalSlot: event.target.value })} /></label>
              <label className="wideLabel">유사문항 슬롯<input value={item.similarSlot} onChange={(event) => updateItem(item.id, { similarSlot: event.target.value })} /></label>
              <label className="wideLabel">문항 코멘트<textarea rows={4} value={item.comment} onChange={(event) => updateItem(item.id, { comment: event.target.value })} /></label>
            </div>
            <button onClick={() => updateSlots({ items: block.items.filter((candidate) => candidate.id !== item.id) })} type="button">슬롯 삭제</button>
          </article>
        ))}
      </div>
      <button
        onClick={() => updateSlots({
          items: [...block.items, {
            id: createFinalDocumentId("slot"),
            number: `${block.items.length + 1}번`,
            title: "",
            originalSlot: "원문항 삽입 영역",
            originalImage: null,
            similarSlot: "유사문항 삽입 영역",
            similarProblemNeeded: "확인 필요",
            similarProblemSource: "",
            similarProblemRelation: "확인 필요",
            comment: ""
          }]
        })}
        type="button"
      >
        슬롯 추가
      </button>
    </div>
  );
}
