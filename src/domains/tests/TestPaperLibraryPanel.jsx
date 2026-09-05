import { useEffect, useMemo, useRef, useState } from "react";

import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { getJsonWithTimeout, postJson } from "../../shared/utils/apiClient.js";
import {
  TEST_PAPER_DIFFICULTIES,
  TEST_PAPER_LIBRARY_KINDS,
  TEST_PAPER_STATUSES,
  TEST_PAPER_SUBJECTS,
  buildExpectedPaperCatalog,
  buildLibraryCoverage,
  defaultPassCorrectCount,
  getTestPaperKindLabel,
  getTestPaperStatusLabel,
  normalizeTestPaperEntry,
  normalizeTestPaperLibrary
} from "./testPaperLibraryModel.js";
import { SSEN_UNIT_ROWS } from "./ssenUnitCatalog.js";

const STATUS_FILTERS = [
  { id: "all", label: "전체" },
  { id: "ready", label: "준비완료" },
  { id: "inProgress", label: "진행중" },
  { id: "missing", label: "미등록" }
];

function rowStatusBucket(row) {
  if (row.isReady) return "ready";
  if (row.entry) return "inProgress";
  return "missing";
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(reader.error ?? new Error("파일을 읽지 못했습니다."));
    reader.readAsDataURL(file);
  });
}

function isExternalFileLink(value = "") {
  return /^https?:\/\//i.test(String(value).trim());
}

function TestPaperFileField({
  label,
  note,
  onChangeValue,
  onOpen,
  onUploadFile,
  placeholder,
  uploadError,
  uploadStatus = "idle",
  value
}) {
  const fileInputRef = useRef(null);
  return (
    <label className="wideField">
      {label}
      <div className="testPaperFileFieldRow">
        <input
          onChange={(event) => onChangeValue(event.target.value)}
          placeholder={placeholder}
          value={value ?? ""}
        />
        <input
          accept="application/pdf"
          className="visuallyHiddenInput"
          onChange={(event) => {
            const file = event.target.files?.[0] ?? null;
            event.target.value = "";
            if (file) onUploadFile(file);
          }}
          ref={fileInputRef}
          type="file"
        />
        <button
          className="softButton"
          disabled={uploadStatus === "uploading"}
          onClick={() => fileInputRef.current?.click()}
          type="button"
        >
          {uploadStatus === "uploading" ? "업로드 중" : "PDF 업로드"}
        </button>
        {value ? (
          <button className="softButton" onClick={() => onOpen(value)} type="button">열기</button>
        ) : null}
      </div>
      {note ? <span className="fieldHint">{note}</span> : null}
      {uploadStatus === "error" ? <span className="fieldHint fieldHintError">{uploadError}</span> : null}
      {uploadStatus === "done" ? <span className="fieldHint">업로드 완료 · 저장을 눌러야 반영됩니다.</span> : null}
    </label>
  );
}

export function TestPaperLibraryPanel({
  library = [],
  saveState = "idle",
  onSave
}) {
  const catalog = useMemo(() => buildExpectedPaperCatalog(SSEN_UNIT_ROWS), []);
  const normalizedLibrary = useMemo(() => normalizeTestPaperLibrary(library), [library]);
  const coverage = useMemo(
    () => buildLibraryCoverage(catalog, normalizedLibrary),
    [catalog, normalizedLibrary]
  );

  const catalogSubjects = useMemo(() => {
    const present = new Set(catalog.map((row) => row.subject));
    return TEST_PAPER_SUBJECTS.filter((subject) => present.has(subject));
  }, [catalog]);

  const [subject, setSubject] = useState(catalogSubjects[0] ?? TEST_PAPER_SUBJECTS[0]);
  const [kind, setKind] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedId, setSelectedId] = useState("");
  const [draft, setDraft] = useState(null);
  const [copiedPath, setCopiedPath] = useState("");
  const [fileUploadState, setFileUploadState] = useState({});

  useEffect(() => {
    if (catalogSubjects.length && !catalogSubjects.includes(subject)) {
      setSubject(catalogSubjects[0]);
    }
  }, [catalogSubjects, subject]);

  const scopeRows = useMemo(
    () =>
      coverage.rows.filter((row) => {
        if (row.subject !== subject) return false;
        if (kind !== "all" && row.testKind !== kind) return false;
        if (difficulty !== "all" && String(row.difficulty) !== difficulty) return false;
        return true;
      }),
    [coverage.rows, subject, kind, difficulty]
  );

  const scopeSummary = useMemo(() => {
    const summary = { total: scopeRows.length, ready: 0, inProgress: 0, missing: 0 };
    for (const row of scopeRows) summary[rowStatusBucket(row)] += 1;
    return summary;
  }, [scopeRows]);

  const visibleRows = useMemo(
    () => scopeRows.filter((row) => statusFilter === "all" || rowStatusBucket(row) === statusFilter),
    [scopeRows, statusFilter]
  );

  const selectedRow = coverage.rows.find((row) => row.testPaperId === selectedId) ?? null;

  function openRow(row) {
    setSelectedId(row.testPaperId);
    const base = row.entry ?? {};
    setDraft({
      totalQuestions: base.totalQuestions ?? "",
      passCorrectCount: base.passCorrectCount ?? "",
      status: base.status ?? "draft",
      source: base.source ?? row.source ?? "",
      questionFileUrl: base.questionFileUrl ?? "",
      answerFileUrl: base.answerFileUrl ?? "",
      watermarked: Boolean(base.watermarked),
      note: base.note ?? ""
    });
    setCopiedPath("");
    setFileUploadState({});
  }

  function updateDraft(field, value) {
    setDraft((current) => {
      const next = { ...(current ?? {}), [field]: value };
      // 총 문항 수를 넣고 통과 기준이 비어 있으면 80% 기본값을 채운다.
      if (field === "totalQuestions" && (next.passCorrectCount ?? "") === "") {
        const suggested = defaultPassCorrectCount(value);
        if (suggested !== "") next.passCorrectCount = String(suggested);
      }
      return next;
    });
  }

  async function uploadTestPaperFile(field, file) {
    if (!file) return;
    if (!/\.pdf$/i.test(file.name)) {
      setFileUploadState((current) => ({ ...current, [field]: { error: "PDF 파일만 업로드할 수 있습니다.", status: "error" } }));
      return;
    }
    setFileUploadState((current) => ({ ...current, [field]: { error: "", status: "uploading" } }));
    try {
      const dataUrl = await readFileAsDataUrl(file);
      const watermark = field === "questionFileUrl";
      const result = await postJson("/api/test-paper-files", { file: { dataUrl, fileName: file.name }, watermark });
      updateDraft(field, result.fileReference);
      if (watermark) updateDraft("watermarked", true);
      setFileUploadState((current) => ({ ...current, [field]: { error: "", status: "done" } }));
    } catch (error) {
      setFileUploadState((current) => ({ ...current, [field]: { error: error.message, status: "error" } }));
    }
  }

  async function openTestPaperFile(fileUrl) {
    if (!fileUrl) return;
    if (isExternalFileLink(fileUrl)) {
      window.open(fileUrl, "_blank", "noopener");
      return;
    }
    // 서명 URL은 fetch 이후에 나오는데, 클릭 시점에 미리 탭을 열어 두지 않으면
    // 팝업 차단(브라우저가 그 사이 사용자 제스처가 끊겼다고 판단)에 걸릴 수 있다.
    const openedTab = window.open("", "_blank");
    try {
      const result = await getJsonWithTimeout(`/api/test-paper-files/open?ref=${encodeURIComponent(fileUrl)}`);
      if (result.signedUrl && openedTab) {
        openedTab.location.href = result.signedUrl;
      } else {
        openedTab?.close();
      }
    } catch (error) {
      openedTab?.close();
      window.alert(`시험지 파일을 열지 못했습니다: ${error.message}`);
    }
  }

  function handleSave() {
    if (!selectedRow || !draft || typeof onSave !== "function") return;
    const nowIso = new Date().toISOString();
    const passCorrectCount =
      (draft.passCorrectCount ?? "") === ""
        ? defaultPassCorrectCount(draft.totalQuestions)
        : draft.passCorrectCount;
    const merged = normalizeTestPaperEntry({
      testPaperId: selectedRow.testPaperId,
      subject: selectedRow.subject,
      testKind: selectedRow.testKind,
      unitNo: selectedRow.unitNo,
      unitName: selectedRow.unitName,
      partName: selectedRow.partName,
      difficulty: selectedRow.difficulty,
      folderPath: selectedRow.folderPath,
      createdAt: selectedRow.entry?.createdAt || nowIso,
      updatedAt: nowIso,
      ...draft,
      source: (draft.source ?? "").trim() || selectedRow.source,
      passCorrectCount
    });
    const next = [
      ...normalizedLibrary.filter((entry) => entry.testPaperId !== merged.testPaperId),
      merged
    ];
    Promise.resolve(onSave(next)).catch(() => {});
  }

  function copyFolderPath(path) {
    if (!path) return;
    setCopiedPath(path);
    navigator.clipboard?.writeText?.(path).catch(() => {});
  }

  const savingDisabled = saveState === "saving" || !selectedRow || !draft;

  return (
    <section className="panel materialPanel testPaperLibraryPanel">
      <SectionHeader
        description="미리 만든 단원별 평가 시험지를 등록·관리합니다. 시험지는 한 번 만들면 여러 학생·시점에 재사용합니다."
        meta={<InlineSaveStatus label="시험지 목록" saveState={saveState} />}
        title="시험지 목록"
        titleAs="h1"
      />

      <div className="testPaperCoverage">
        <span>전체 {coverage.summary.total}</span>
        <span className="pass-passed">준비완료 {coverage.summary.ready}</span>
        <span className="pass-pending">진행중 {coverage.summary.inProgress}</span>
        <span className="pass-failed">미등록 {coverage.summary.missing}</span>
      </div>

      <div className="testAttemptFormGrid">
        <label>
          과목
          <select value={subject} onChange={(event) => setSubject(event.target.value)}>
            {(catalogSubjects.length ? catalogSubjects : TEST_PAPER_SUBJECTS).map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          종류
          <select value={kind} onChange={(event) => setKind(event.target.value)}>
            <option value="all">전체</option>
            {TEST_PAPER_LIBRARY_KINDS.map((option) => (
              <option key={option.id} value={option.id}>{option.label}</option>
            ))}
          </select>
        </label>
        <label>
          난이도
          <select value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
            <option value="all">전체</option>
            {TEST_PAPER_DIFFICULTIES.map((value) => (
              <option key={value} value={String(value)}>난이도{value}</option>
            ))}
          </select>
        </label>
        <label>
          상태
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
            {STATUS_FILTERS.map((option) => (
              <option key={option.id} value={option.id}>{option.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="testAttemptMeta">
        <span>{subject} 범위 {scopeSummary.total}</span>
        <span>준비완료 {scopeSummary.ready}</span>
        <span>진행중 {scopeSummary.inProgress}</span>
        <span>미등록 {scopeSummary.missing}</span>
      </div>

      {visibleRows.length ? (
        <div className="testAttemptTable">
          <div className="testPaperLibraryRow head">
            <span>단원</span>
            <span>종류</span>
            <span>난이도</span>
            <span>출처</span>
            <span>문항</span>
            <span>상태</span>
            <span>파일</span>
          </div>
          {visibleRows.map((row) => (
            <button
              className={row.testPaperId === selectedId ? "testPaperLibraryRow selected" : "testPaperLibraryRow"}
              key={row.testPaperId}
              onClick={() => openRow(row)}
              type="button"
            >
              <strong>{row.unitNo}. {row.unitName}</strong>
              <span>{getTestPaperKindLabel(row.testKind)}</span>
              <span>난이도{row.difficulty}</span>
              <span>{row.entry?.source || row.source}</span>
              <span>{row.entry?.totalQuestions || "-"}</span>
              <span className={`testAttemptPass pass-${rowStatusBucket(row) === "ready" ? "passed" : rowStatusBucket(row) === "inProgress" ? "pending" : "failed"}`}>
                {row.entry ? getTestPaperStatusLabel(row.entry.status) : "미등록"}
              </span>
              <span>{row.hasQuestionFile ? "문제" : "-"}{row.hasAnswerFile ? " · 정답" : ""}{row.entry?.watermarked ? " · WM" : ""}</span>
            </button>
          ))}
        </div>
      ) : (
        <EmptyState
          className="examPrepEmptyState"
          description="필터를 바꿔 다른 과목·종류·난이도를 확인해 주세요."
          title="표시할 시험지가 없습니다."
        />
      )}

      {selectedRow ? (
        <section className="panel testPaperEditPanel">
          <SectionHeader
            density="slim"
            title={`${selectedRow.subject} · ${selectedRow.unitNo}. ${selectedRow.unitName}`}
            titleAs="h2"
          />
          <div className="testAttemptMeta">
            <span>{getTestPaperKindLabel(selectedRow.testKind)}</span>
            <span>난이도{selectedRow.difficulty}</span>
          </div>
          <div className="testAttemptFormGrid">
            <label>
              출처 교재
              <input
                value={draft?.source ?? ""}
                onChange={(event) => updateDraft("source", event.target.value)}
                placeholder={selectedRow.source}
              />
            </label>
            <label>
              총 문항 수
              <input
                min="1"
                type="number"
                value={draft?.totalQuestions ?? ""}
                onChange={(event) => updateDraft("totalQuestions", event.target.value)}
                placeholder="예: 12"
              />
            </label>
            <label>
              통과 기준 정답 수
              <input
                min="0"
                type="number"
                value={draft?.passCorrectCount ?? ""}
                onChange={(event) => updateDraft("passCorrectCount", event.target.value)}
                placeholder={
                  defaultPassCorrectCount(draft?.totalQuestions) === ""
                    ? "예: 10"
                    : `기본 ${defaultPassCorrectCount(draft?.totalQuestions)} (80%)`
                }
              />
              <span className="fieldHint">비우면 총 문항의 80%(올림)를 씁니다.</span>
            </label>
            <label>
              상태
              <select value={draft?.status ?? "draft"} onChange={(event) => updateDraft("status", event.target.value)}>
                {TEST_PAPER_STATUSES.map((option) => (
                  <option key={option.id} value={option.id}>{option.label}</option>
                ))}
              </select>
            </label>
            <label className="testPaperCheckLabel">
              <input
                checked={Boolean(draft?.watermarked)}
                onChange={(event) => updateDraft("watermarked", event.target.checked)}
                type="checkbox"
              />
              워터마크 삽입 완료
            </label>
            <TestPaperFileField
              label="문제 파일"
              note="PDF 업로드 시 대각선 반투명 워터마크가 자동으로 찍힙니다."
              onChangeValue={(value) => updateDraft("questionFileUrl", value)}
              onOpen={openTestPaperFile}
              onUploadFile={(file) => uploadTestPaperFile("questionFileUrl", file)}
              placeholder="Drive 링크를 붙여넣거나 PDF를 업로드하세요"
              uploadError={fileUploadState.questionFileUrl?.error}
              uploadStatus={fileUploadState.questionFileUrl?.status ?? "idle"}
              value={draft?.questionFileUrl}
            />
            <TestPaperFileField
              label="정답 파일"
              onChangeValue={(value) => updateDraft("answerFileUrl", value)}
              onOpen={openTestPaperFile}
              onUploadFile={(file) => uploadTestPaperFile("answerFileUrl", file)}
              placeholder="Drive 링크를 붙여넣거나 PDF를 업로드하세요"
              uploadError={fileUploadState.answerFileUrl?.error}
              uploadStatus={fileUploadState.answerFileUrl?.status ?? "idle"}
              value={draft?.answerFileUrl}
            />
            <label className="wideField">
              메모
              <input
                value={draft?.note ?? ""}
                onChange={(event) => updateDraft("note", event.target.value)}
                placeholder="예: 쎈B 뒤쪽 3문항 제외"
              />
            </label>
          </div>
          <div className="testPaperFolderPath">
            <code>{selectedRow.folderPath}</code>
            <button className="softButton" onClick={() => copyFolderPath(selectedRow.folderPath)} type="button">
              폴더 경로 복사
            </button>
            {copiedPath === selectedRow.folderPath ? <span className="testAttemptRetestHint">복사됨</span> : null}
          </div>
          <div className="testAttemptActions">
            <button className="saveDraftButton" disabled={savingDisabled} onClick={handleSave} type="button">
              {saveState === "saving" ? "저장 중" : "시험지 정보 저장"}
            </button>
          </div>
        </section>
      ) : null}
    </section>
  );
}
