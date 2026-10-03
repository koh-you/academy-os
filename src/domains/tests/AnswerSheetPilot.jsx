import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { useEffect, useRef, useState } from "react";
import { postJsonWithTimeout } from "../../shared/utils/apiClient.js";
import { ANSWER_SHEET_VERSION, answerCellBox, createAnswerRows, gradePilotAnswers, readPilotFile } from "./answerSheetPilotModel.js";
import { downloadBlankAnswerSheet, downloadPilotBlob, loadPilotPages, pilotRecognitionPdf } from "./answerSheetPilotFiles.js";
import "./answerSheetPilot.css";

const labels = { correct: "정답", incorrect: "오답", blank: "무응답", review: "확인 필요", excluded: "제외" };

export function AnswerSheetPilot() {
  const [key, setKey] = useState(createAnswerRows);
  const [keyConfirmed, setKeyConfirmed] = useState(false);
  const [keyImage, setKeyImage] = useState("");
  // 이번 세션에 올린 원본 파일. 판독은 이걸로 보내 재압축을 피한다(실험 파일에는 담지 않는다).
  const [keySource, setKeySource] = useState(null);
  const [sheets, setSheets] = useState([]);
  const [selected, setSelected] = useState("");
  const [mode, setMode] = useState("key");
  const [allowRational, setAllowRational] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [focusNo, setFocusNo] = useState(1);
  const working = useRef(false);
  const sheet = sheets.find((item) => item.id === selected);
  const image = mode === "key" ? keyImage : sheet?.image;
  const rows = mode === "key" ? key : sheet?.rows;
  const grades = keyConfirmed && sheet ? gradePilotAnswers(key, sheet.rows, allowRational) : [];
  const dirty = Boolean(keyImage || sheets.length || key.some((row) => row.answer));
  useEffect(() => {
    if (!dirty) return undefined;
    const warn = (event) => { event.preventDefault(); event.returnValue = ""; };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  async function run(action) {
    if (working.current) return;
    working.current = true; setBusy(true); setError("");
    try { await action(); } catch (failure) { setError(failure.message); }
    finally { working.current = false; setBusy(false); }
  }

  function updateRows(transform) {
    if (mode === "key") { setKey(transform); setKeyConfirmed(false); }
    else setSheets((current) => current.map((item) => item.id === selected ? { ...item, rows: transform(item.rows) } : item));
  }

  async function upload(file, target) {
    if (!file) return;
    await run(async () => {
      const pages = await loadPilotPages(file);
      if (target === "key") {
        if (pages.length !== 1) throw new Error("정답지는 한 쪽짜리 파일로 올려 주세요.");
        if (dirty && !window.confirm("정답지를 바꾸면 기존 정답과 채점 확정을 해제합니다. 계속할까요?")) return;
        setKeyImage(pages[0].image); setKeySource(pages[0].source ?? null); setKey(createAnswerRows()); setKeyConfirmed(false); setMode("key");
      } else {
        if (sheets.length + pages.length > 30) throw new Error("한 실험에서 답안은 최대 30장입니다.");
        const added = pages.map((page) => ({ ...page, id: crypto.randomUUID(), rows: createAnswerRows() }));
        setSheets((current) => [...current, ...added]); setSelected(added[0].id); setMode("student");
      }
    });
  }

  async function recognize() {
    if (!image) return;
    if (!window.confirm("선택한 한 쪽을 외부 AI 서비스로 보내 유료 판독합니다. 현재 입력은 판독 초안으로 교체됩니다. 실행할까요?")) return;
    await run(async () => {
      const pdfBase64 = await pilotRecognitionPdf(mode === "key" ? { image: keyImage, source: keySource } : sheet);
      const result = await postJsonWithTimeout("/api/answer-sheet-pilot/recognize", { pdfBase64, paidConsent: true }, 120000, "판독 응답을 받지 못했습니다. 비용이 발생했을 수 있습니다. 자동 재시도하지 않습니다.");
      updateRows(() => result.rows);
    });
  }

  function changeKey() {
    setKeyConfirmed(false);
    setSheets((current) => current.map((item) => ({ ...item, rows: item.rows.map((row) => ({ ...row, verdict: "" })) })));
  }

  const crop = answerCellBox(focusNo);
  return <section className="panel answerSheetPilot" aria-label="채점 실험">
    <div className="pilotHeading"><div><h2>공통 답안지 채점 실험</h2><p>같은 20칸 양식으로 정답과 학생 답을 비교합니다. 빈 정답 칸은 채점에서 제외합니다.</p></div>
      <button type="button" disabled={busy} onClick={() => run(downloadBlankAnswerSheet)}>공통 답안지 PDF</button></div>
    <p className="pilotNotice">실험 자료는 이 화면에만 있습니다. 새로고침·다른 화면으로 이동하기 전에 ‘실험 파일 내려받기’를 사용하세요. 공식 성적에는 반영되지 않습니다.</p>
    <fieldset disabled={busy} className="pilotControls"><legend>자료 준비</legend>
      <label>정답지 올리기<input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={(e) => { const file = e.target.files[0]; e.target.value = ""; upload(file, "key"); }} /></label>
      <label>학생 답안 올리기<input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={(e) => { const file = e.target.files[0]; e.target.value = ""; upload(file, "student"); }} /></label>
      <button type="button" onClick={() => { const id = crypto.randomUUID(); if (sheets.length >= 30) return; setSheets([...sheets, { id, name: `답안 ${sheets.length + 1}`, image: "", rows: createAnswerRows() }]); setSelected(id); setMode("student"); }}>직접 입력으로 실험</button>
      <button type="button" onClick={() => downloadPilotBlob(new Blob([JSON.stringify({ version: ANSWER_SHEET_VERSION, key, keyConfirmed, allowRational, keyImage, sheets: sheets.map(({ source, ...rest }) => rest) })], { type: "application/json" }), "채점실험.json")}>실험 파일 내려받기</button>
      <label>실험 파일 다시 열기<input type="file" accept=".json" onChange={(e) => { const file = e.target.files[0]; e.target.value = ""; if (!file) return; run(async () => { if (file.size > 80 * 1024 * 1024) throw new Error("실험 파일은 80MB 이하만 열 수 있습니다."); const raw = JSON.parse(await file.text()); const value = readPilotFile(raw); if (dirty && !window.confirm("현재 실험을 파일 내용으로 바꿀까요?")) return; setKey(value.key); setKeyConfirmed(value.keyConfirmed); setAllowRational(value.allowRational); setSheets(value.sheets); setKeyImage(/^data:image\/(png|jpeg);base64,[A-Za-z0-9+/=]+$/.test(raw.keyImage || "") ? raw.keyImage : ""); setKeySource(null); setSelected(value.sheets[0]?.id || ""); setMode("key"); }); }} /></label>
    </fieldset>
    <p>스캔 설정 확인은 후속 작업입니다. 우선 PDF·JPG·PNG를 올리세요. 학생 PDF는 최대 10쪽이며 한 쪽을 한 명의 답안으로 취급합니다.</p>
    {error && <p role="alert" className="pilotError">{error}</p>}
    {busy && <p role="status">처리 중입니다. 판독은 자동으로 재시도하지 않습니다.</p>}
    <fieldset disabled={busy} className="pilotControls"><legend>비교할 답안</legend>
      <button type="button" aria-pressed={mode === "key"} onClick={() => setMode("key")}>정답지 확인</button>
      <label>학생 답안 선택<select value={selected} onChange={(e) => { setSelected(e.target.value); setMode("student"); }}><option value="">답안 선택</option>{sheets.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
      {sheet && <button type="button" onClick={() => setMode("student")}>학생 답안 확인</button>}
      <label><input type="checkbox" checked={allowRational} onChange={(e) => { setAllowRational(e.target.checked); changeKey(); }} />분수·소수의 같은 값 허용</label>
      <button type="button" disabled={!image} onClick={recognize}>선택한 답안 AI 판독 (유료)</button>
    </fieldset>
    <p>AI 판독은 초안입니다. 첫 실험에서는 모든 답을 원본과 대조해 확인하세요. 수식의 동치·서술형 부분점수는 자동 판정하지 않습니다.</p>
    {mode === "key" ? <div className="pilotControls"><strong>{keyConfirmed ? "정답 확정됨" : "정답 확인 중"}</strong><button type="button" disabled={busy || !key.some((row) => row.answer.trim())} onClick={() => { if (window.confirm("입력한 정답을 원본과 대조했나요? 빈 정답 칸은 제외하고 이 정답으로 비교합니다.")) { setKeyConfirmed(true); setSheets((current) => current.map((item) => ({ ...item, rows: item.rows.map((row) => ({ ...row, verdict: "" })) }))); } }}>정답 확정</button></div> : sheet && <label>답안 이름<input disabled={busy} value={sheet.name} onChange={(e) => setSheets((current) => current.map((item) => item.id === selected ? { ...item, name: e.target.value.slice(0, 200) } : item))} /></label>}
    {mode === "student" && keyConfirmed && <p role="status">정답 {grades.filter((g) => g.status === "correct").length} · 오답 {grades.filter((g) => ["incorrect", "blank"].includes(g.status)).length} · 확인 필요 {grades.filter((g) => g.status === "review").length} · 제외 {grades.filter((g) => g.status === "excluded").length}</p>}
    <div className="pilotWorkspace"><DataTableShell className="pilotTableWrap" label="문항별 답안 비교"><table><thead><tr><th>번호</th><th>{mode === "key" ? "정답" : "읽어낸 답"}</th>{mode === "student" && <th>기준 정답</th>}<th>확인</th>{mode === "student" && <th>판정</th>}</tr></thead><tbody>
      {(rows || []).map((row, i) => <tr key={row.no} className={focusNo === row.no ? "pilotSelectedRow" : ""}><th><button type="button" onClick={() => setFocusNo(row.no)}>{row.no}</button></th><td><input aria-label={`${mode === "key" ? "정답" : "학생 답"} ${row.no}번`} disabled={busy} value={row.answer} maxLength={300} onFocus={() => setFocusNo(row.no)} onChange={(e) => updateRows((items) => items.map((item) => item.no === row.no ? { ...item, answer: e.target.value, reviewed: false, verdict: "" } : item))} />{row.uncertain && <small>판독 불확실</small>}</td>{mode === "student" && <td>{key[i].answer || "제외"}</td>}<td><input type="checkbox" aria-label={`${mode === "key" ? "정답" : "학생 답"} ${row.no}번 원본 확인`} checked={row.reviewed} disabled={busy} onChange={(e) => updateRows((items) => items.map((item) => item.no === row.no ? { ...item, reviewed: e.target.checked, verdict: "" } : item))} /></td>{mode === "student" && <td><span>{keyConfirmed ? labels[grades[i]?.status] : "정답 미확정"}</span><select aria-label={`${row.no}번 교사 판정`} disabled={busy || !keyConfirmed || !row.reviewed || !key[i].answer.trim()} value={row.verdict || ""} onChange={(e) => updateRows((items) => items.map((item) => item.no === row.no ? { ...item, verdict: e.target.value } : item))}><option value="">비교 결과 사용</option><option value="correct">정답</option><option value="incorrect">오답</option></select></td>}</tr>)}
    </tbody></table></DataTableShell><aside className="pilotPreview">{image ? <><strong>{focusNo}번 위치 확대 · 전체 원본도 대조하세요</strong><svg viewBox={`${crop.x * 1000} ${crop.y * 1414} ${crop.width * 1000} ${crop.height * 1414}`} role="img" aria-label={`${focusNo}번 답 칸 확대`}><image href={image} width="1000" height="1414" preserveAspectRatio="none" /></svg><a href={image} target="_blank" rel="noreferrer">원본 크게 보기</a><img src={image} alt="선택한 답안 전체 원본" /></> : <p>파일을 올리면 원본을 함께 볼 수 있습니다. 직접 입력만으로 비교 기능도 시험할 수 있습니다.</p>}</aside></div>
  </section>;
}
