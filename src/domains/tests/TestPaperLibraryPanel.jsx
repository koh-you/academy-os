import { useEffect, useMemo, useState } from "react";

import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
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
            <label className="wideField">
              문제 파일 링크
              <input
                value={draft?.questionFileUrl ?? ""}
                onChange={(event) => updateDraft("questionFileUrl", event.target.value)}
                placeholder="Drive / Storage 링크"
              />
            </label>
            <label className="wideField">
              정답 파일 링크
              <input
                value={draft?.answerFileUrl ?? ""}
                onChange={(event) => updateDraft("answerFileUrl", event.target.value)}
                placeholder="Drive / Storage 링크"
              />
            </label>
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
