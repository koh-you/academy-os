import { useState } from "react";
import { ExamPrepEditModal } from "./ExamPrepEditModal.jsx";
import { ExamPrepPastPaperPanel } from "./ExamPrepPastPaperPanel.jsx";
import { createExamPrepCenterDisplayModel } from "./examPrepCenterModel.js";
import { ExamPostSubmissionManager } from "./ExamPostSubmissionManager.jsx";
import { ExamReviewComposerModal } from "./ExamReviewComposerModal.jsx";
import { areExamPrepDraftsEqual, cloneExamPrepDraft, updateExamPrepDraft } from "./examPrepDraft.js";
import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { FilterBar } from "../../shared/components/FilterBar.jsx";
import { getAggregateSaveState, InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SearchField } from "../../shared/components/SearchField.jsx";
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";

export function ExamPrepCenter({
  runtime,
  aiSettings = runtime.defaultAiSettings,
  examPostConfirmSaveStates = {},
  examPostSubmissions = [],
  examPostTargetStudentIds = {},
  rowSaveStates = {},
  tallySubmissions = [],
  tallySummaries = {},
  rows,
  students,
  templates,
  onConfirmExamPostSubmission,
  onOpenExamPostFile,
  onEnsureExamCycleRows,
  onSetExamPostTargetStudentIds,
  onSetTallySubmissions,
  onSetTallySummaries,
  onSaveRow,
  onUpdateRow,
  onDeleteRow
}) {
  const {
    buildExamPostTargetsForStudent,
    buildTallySubmission,
    createMathExamEntry,
    currentExamCycle,
    dedupeExamPrepRowsForDisplay,
    defaultAiSettings,
    examCycleLabel,
    examPrepAutosaveRisk,
    formatKoreanDateTime,
    formatMathExamEntryLabel,
    formatShortDate,
    getAiPrompt,
    getExamPrepSchoolGradeKey,
    getStudentSchoolGradeKey,
    gradeMatchesStudent,
    normalizeMathExamEntries,
    parseCsvRows,
    safeIdPart,
    schoolMatchesStudent,
    summarizeTallySubmissions,
    syncPrimaryMathExamDate,
    today
  } = runtime;
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTabState] = useState("info");
  const [selectedClassTemplateId, setSelectedClassTemplateId] = useState("template_mwf_7_10");
  const [selectedExamCycle, setSelectedExamCycle] = useState(currentExamCycle);
  const [editingExamPrepId, setEditingExamPrepId] = useState("");
  const [editingExamPrepDraft, setEditingExamPrepDraft] = useState(null);
  const [editingExamPrepSavedDraft, setEditingExamPrepSavedDraft] = useState(null);
  const [showExcluded, setShowExcluded] = useState(false);
  const [reviewModalRowId, setReviewModalRowId] = useState("");
  const [tallyImportStatus, setTallyImportStatus] = useState("");
  const [pastPaperFrameKey, setPastPaperFrameKey] = useState(0);
  const [pastPaperLoadState, setPastPaperLoadState] = useState("loading");
  const setTallySubmissions = onSetTallySubmissions ?? (() => {});
  const setTallySummaries = onSetTallySummaries ?? (() => {});
  const pastPaperArchiveUrl =
    "https://script.google.com/macros/s/AKfycbyYi-NUHHzb9vrBl4Adj6Pq9zXIZJ9oR97g-uQyAf7up7AGVzeRdBUqfVcUZ1zjQiug/exec";
  const {
    classStudents,
    editingExamPrepRow,
    examPrepSaveState,
    excludedRows,
    filteredRows,
    reviewModalRow,
    selectedClass
  } = createExamPrepCenterDisplayModel({
    currentExamCycle,
    dedupeRows: dedupeExamPrepRowsForDisplay,
    editingExamPrepId,
    getAggregateSaveState,
    getMathExamEntries: normalizeMathExamEntries,
    getRowSchoolGradeKey: getExamPrepSchoolGradeKey,
    getStudentSchoolGradeKey,
    query,
    reviewModalRowId,
    rowSaveStates,
    rows,
    showExcluded,
    selectedClassTemplateId,
    selectedExamCycle,
    students,
    templates
  });
  const visibleTallySubmissions = tallySubmissions.filter(
    (submission) => submission.examCycle === selectedExamCycle && submission.classTemplateId === selectedClassTemplateId
  );
  const tallyDifficultyValues = visibleTallySubmissions.map((item) => item.difficulty).filter(Number.isFinite);
  const tallyPreparationValues = visibleTallySubmissions.map((item) => item.preparation).filter(Number.isFinite);
  const tallyAverageLabel = (values) => {
    if (!values.length) return "-";
    return (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1);
  };
  const tallySummaryKey = `${selectedClassTemplateId}_${selectedExamCycle}`;
  const tallySummary = tallySummaries[tallySummaryKey] ?? summarizeTallySubmissions(visibleTallySubmissions);
  const examManagementTabs = [
    {
      id: "info",
      label: "시험정보"
    },
    {
      id: "postSubmit",
      label: "시험 후 제출"
    },
    {
      id: "pastPapers",
      label: "기출문제"
    }
  ];
  const hasEditingExamPrepChanges = !areExamPrepDraftsEqual(editingExamPrepDraft, editingExamPrepSavedDraft);
  const persistedEditingExamPrepSaveState = rowSaveStates[editingExamPrepId] ?? "idle";
  const editingExamPrepSaveState = ["saving", "verifying", "failed"].includes(persistedEditingExamPrepSaveState)
    ? persistedEditingExamPrepSaveState
    : (hasEditingExamPrepChanges ? "dirty" : persistedEditingExamPrepSaveState);

  function setActiveTab(tabId) {
    if (tabId !== "info" && !selectedClassTemplateId) {
      setSelectedClassTemplateId(templates[0]?.classTemplateId ?? "template_mwf_7_10");
    }
    setActiveTabState(tabId);
  }

  function changeExamCycle(examCycle) {
    setSelectedExamCycle(examCycle);
    onEnsureExamCycleRows(examCycle, selectedClassTemplateId);
  }

  function changeClassTemplate(classTemplateId) {
    setSelectedClassTemplateId(classTemplateId);
    onEnsureExamCycleRows(selectedExamCycle, classTemplateId);
  }

  async function importTallyCsv(file) {
    if (!file) return;
    setTallyImportStatus("파일을 읽는 중입니다.");
    try {
      const text = await file.text();
      const parsedRows = parseCsvRows(text);
      const nextSubmissions = parsedRows.map((row, index) =>
        buildTallySubmission(row, index, {
          classTemplateId: selectedClassTemplateId,
          examCycle: selectedExamCycle,
          students
        })
      );
      setTallySubmissions((current) => [
        ...nextSubmissions,
        ...current.filter(
          (submission) =>
            !(submission.examCycle === selectedExamCycle && submission.classTemplateId === selectedClassTemplateId)
        )
      ]);
      setTallySummaries((current) => ({
        ...current,
        [tallySummaryKey]: summarizeTallySubmissions(nextSubmissions)
      }));
      setTallyImportStatus(`${file.name} · ${nextSubmissions.length}명 제출을 불러왔습니다.`);
    } catch (error) {
      setTallyImportStatus(`CSV 읽기 실패 · ${error.message}`);
    }
  }

  function refreshTallySummary() {
    setTallySummaries((current) => ({
      ...current,
      [tallySummaryKey]: summarizeTallySubmissions(visibleTallySubmissions)
    }));
  }

  function getEditableMathExamEntries(row) {
    const entries = normalizeMathExamEntries(row, { includeBlank: true });
    return entries.length ? entries : [{ ...createMathExamEntry(row, 0), date: "" }];
  }

  function commitMathExamEntries(row, entries) {
    setEditingExamPrepDraft((current) => {
      const withEntries = updateExamPrepDraft(current, row.examPrepId, "mathExamDates", entries);
      return updateExamPrepDraft(withEntries, row.examPrepId, "mathExamDate", syncPrimaryMathExamDate(entries));
    });
  }

  function updateMathExamEntry(row, entryIndex, field, value) {
    const entries = getEditableMathExamEntries(row).map((entry, index) =>
      index === entryIndex ? { ...entry, [field]: value } : entry
    );
    commitMathExamEntries(row, entries);
  }

  function addMathExamEntry(row) {
    const entries = getEditableMathExamEntries(row);
    const uniqueIndex = Date.now();
    commitMathExamEntries(row, [
      ...entries,
      {
        ...createMathExamEntry(row, uniqueIndex),
        id: `math_${safeIdPart(row.examPrepId || "exam")}_${uniqueIndex}`,
        date: ""
      }
    ]);
  }

  function removeMathExamEntry(row, entryIndex) {
    const entries = getEditableMathExamEntries(row).filter((_, index) => index !== entryIndex);
    commitMathExamEntries(row, entries);
  }

  function openExamPrepEditor(row) {
    const draft = cloneExamPrepDraft(row);
    setEditingExamPrepId(row.examPrepId);
    setEditingExamPrepDraft(draft);
    setEditingExamPrepSavedDraft(cloneExamPrepDraft(draft));
  }

  function updateEditingExamPrepRow(examPrepId, field, value) {
    setEditingExamPrepDraft((current) => updateExamPrepDraft(current, examPrepId, field, value));
  }

  async function saveEditingExamPrepDraft() {
    if (!editingExamPrepDraft || !hasEditingExamPrepChanges) return { ok: true };
    const exclusionChanged = Boolean(editingExamPrepDraft.isExcluded) !== Boolean(editingExamPrepSavedDraft?.isExcluded);
    const result = await onSaveRow(editingExamPrepDraft);
    if (result?.ok) {
      if (exclusionChanged) {
        closeExamPrepEditor();
        return result;
      }
      const savedDraft = cloneExamPrepDraft(editingExamPrepDraft);
      setEditingExamPrepSavedDraft(savedDraft);
    }
    return result;
  }

  function closeExamPrepEditor() {
    setEditingExamPrepId("");
    setEditingExamPrepDraft(null);
    setEditingExamPrepSavedDraft(null);
  }

  return (
    <section className="panel fullPanel examPrepCenter">
      <PageHeader
        actions={(
          <>
          {activeTab === "info" ? (
            <SearchField
              className="examPrepSearchField"
              inputClassName="searchInput"
              label="시험관리 검색"
              onChange={setQuery}
              value={query}
              placeholder="학교, 과목, 출판사 검색"
              result={`${filteredRows.length}건`}
            />
          ) : null}
          </>
        )}
        actionsClassName="examPrepHeaderActions"
        as="div"
        className="domainPanelHeader examPrepHeader"
        description={[selectedClass?.name, examCycleLabel(selectedExamCycle)].filter(Boolean).join(" · ")}
        title="시험관리"
      />

      <WorkspaceTabs className="examManagementTabs" label="시험관리 하위 탭">
        {examManagementTabs.map((tab) => (
          <button
            aria-selected={activeTab === tab.id}
            className={activeTab === tab.id ? "active" : ""}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </WorkspaceTabs>

      {activeTab !== "pastPapers" ? (
        <FilterBar className="classTabList" label="시험관리 반 필터">
          {activeTab === "info" ? (
            <button
              aria-pressed={!selectedClassTemplateId}
              className={`filterBarOption${!selectedClassTemplateId ? " active" : ""}`}
              onClick={() => changeClassTemplate("")}
              type="button"
            >
              <strong>전체 반</strong>
            </button>
          ) : null}
          {templates.map((template) => (
            <button
              aria-pressed={selectedClassTemplateId === template.classTemplateId}
              className={`filterBarOption${selectedClassTemplateId === template.classTemplateId ? " active" : ""}`}
              key={template.classTemplateId}
              onClick={() => changeClassTemplate(template.classTemplateId)}
              type="button"
            >
              <strong>{template.name}</strong>
            </button>
          ))}
        </FilterBar>
      ) : null}

      {activeTab === "info" ? (
        <>
          <p className="examPrepExplicitSaveNotice" role="note">
            시험정보는 <strong>상세 관리</strong>에서 수정한 뒤 <strong>변경 저장</strong>을 눌러야 Supabase에 반영됩니다.
          </p>
          <FilterBar
            className="examCycleBar"
            label="시험관리 고사 필터"
            result={(
              <>
                <span>{filteredRows.length}개 시험정보 · {classStudents.length}명</span>
                {examPrepSaveState !== "idle" ? (
                  <InlineSaveStatus className="examCycleSaveStatus" label="시험정보" saveState={examPrepSaveState} />
                ) : null}
              </>
            )}
          >
            <label className="filterBarField">
              <span>현재 고사</span>
              <select value={selectedExamCycle} onChange={(event) => changeExamCycle(event.target.value)}>
                <option value="2026-1-mid">2026 1학기 중간</option>
                <option value="2026-1-final">2026 1학기 기말</option>
                <option value="2026-2-mid">2026 2학기 중간</option>
                <option value="2026-2-final">2026 2학기 기말</option>
              </select>
            </label>
            <button
              aria-pressed={showExcluded}
              className={`softButton compact${showExcluded ? " active" : ""}`}
              onClick={() => setShowExcluded((current) => !current)}
              type="button"
            >
              {showExcluded ? "시험정보 보기" : `내신 제외 보기 (${excludedRows.length})`}
            </button>
          </FilterBar>
          <DataTableShell className="examPrepTable" label="시험정보 목록">
            <div className="examPrepRow examPrepHead">
              <span>학교명</span>
              <span>특이사항</span>
              <span>학년</span>
              <span>과목</span>
              <span>출판사</span>
              <span>시험기간</span>
              <span>수학 시험 일정</span>
              <span>시험 범위</span>
              <span>부교재</span>
              <span>상세</span>
            </div>
            {filteredRows.map((row) => {
              const specialNote = row.specialNote ?? row.memo ?? "";
              const hasReview = Boolean(row.review || row.revisedReview);

              return (
                <div className={`examPrepRow${row.isExcluded ? " excluded" : ""}`} key={row.examPrepId}>
                  <div className="examReadCell strong">{row.schoolName || "-"}</div>
                  <div className="examReadCell multiline">{specialNote || "특이사항 없음"}</div>
                  <div className="examReadCell">{row.grade || "-"}</div>
                  <div className="examReadCell">{row.subject || "-"}</div>
                  <div className="examReadCell">{row.publisher || "-"}</div>
                  <div className="examReadCell examPeriodReadCell">{row.examPeriod || "미입력"}</div>
                  <div className="examReadCell mathExamEntryList">
                    {normalizeMathExamEntries(row).length ? (
                      normalizeMathExamEntries(row).map((entry, index) => (
                        <span className="mathExamEntryChip" key={entry.id || index}>
                          <strong>{formatShortDate(entry.date)}</strong>
                          {formatMathExamEntryLabel(row, entry)}
                        </span>
                      ))
                    ) : (
                      "미입력"
                    )}
                  </div>
                  <div className="examReadCell multiline">{row.scope || "미입력"}</div>
                  <div className="examReadCell multiline">{row.subTextbook || "미입력"}</div>
                  <div className="examPrepRowActions">
                    {rowSaveStates[row.examPrepId] ? <InlineSaveStatus saveState={rowSaveStates[row.examPrepId]} /> : null}
                    <button className={hasReview ? "examPrepDetailButton filled" : "examPrepDetailButton"} onClick={() => openExamPrepEditor(row)} type="button">
                      <strong>상세 관리</strong>
                      {hasReview ? <span>총평 있음</span> : null}
                    </button>
                  </div>
                </div>
              );
            })}
            {filteredRows.length === 0 ? (
              <EmptyState
                action={query.trim() ? (
                  <button className="softButton compact" onClick={() => setQuery("")} type="button">검색어 지우기</button>
                ) : null}
                className="examPrepEmptyState"
                description={query.trim()
                  ? "학교·과목·출판사를 다시 확인하세요."
                  : "조회 범위 또는 고사를 바꾸면 해당 조건의 시험정보가 표시됩니다."}
                title={query.trim() ? "검색 결과가 없습니다." : "표시할 시험정보가 없습니다."}
              />
            ) : null}
          </DataTableShell>
        </>
      ) : null}

      {activeTab === "postSubmit" ? (
        <ExamPostSubmissionManager
          buildExamPostTargetsForStudent={buildExamPostTargetsForStudent}
          confirmSaveStates={examPostConfirmSaveStates}
          examCycleLabel={examCycleLabel}
          examPostTargetStudentIds={examPostTargetStudentIds}
          formatKoreanDateTime={formatKoreanDateTime}
          formatMathExamEntryLabel={formatMathExamEntryLabel}
          gradeMatchesStudent={gradeMatchesStudent}
          normalizeMathExamEntries={normalizeMathExamEntries}
          onUpdateRow={onUpdateRow}
          rows={filteredRows}
          schoolMatchesStudent={schoolMatchesStudent}
          selectedClass={selectedClass}
          selectedExamCycle={selectedExamCycle}
          submissions={examPostSubmissions}
          students={classStudents}
          onConfirmExamPostSubmission={onConfirmExamPostSubmission}
          onOpenExamPostFile={onOpenExamPostFile}
          onSetExamPostTargetStudentIds={onSetExamPostTargetStudentIds}
        />
      ) : null}

      {activeTab === "pastPapers" ? (
        <ExamPrepPastPaperPanel
          archiveUrl={pastPaperArchiveUrl}
          frameKey={pastPaperFrameKey}
          loadState={pastPaperLoadState}
          onFrameLoad={() => setPastPaperLoadState("loaded")}
          onReload={() => {
            setPastPaperLoadState("loading");
            setPastPaperFrameKey((current) => current + 1);
          }}
        />
      ) : null}

      {reviewModalRow ? (
        <ExamReviewComposerModal
          aiModel={aiSettings.commentModel ?? defaultAiSettings.commentModel}
          aiPrompt={getAiPrompt(aiSettings, "examReviewSpelling")}
          aiProvider={aiSettings.commentProvider ?? defaultAiSettings.commentProvider}
          autosaveRisk={examPrepAutosaveRisk}
          currentDate={today}
          saveState={rowSaveStates[reviewModalRow.examPrepId] ?? "idle"}
          row={reviewModalRow}
          onClose={() => setReviewModalRowId("")}
          onUpdateRow={onUpdateRow}
        />
      ) : null}
      {editingExamPrepRow && editingExamPrepDraft ? (
        <ExamPrepEditModal
          hasChanges={hasEditingExamPrepChanges}
          row={editingExamPrepDraft}
          saveState={editingExamPrepSaveState}
          getEditableMathExamEntries={getEditableMathExamEntries}
          onAddMathExamEntry={addMathExamEntry}
          onClose={closeExamPrepEditor}
          onDeleteRow={onDeleteRow}
          onOpenReview={() => {
            setEditingExamPrepId("");
            setEditingExamPrepDraft(null);
            setEditingExamPrepSavedDraft(null);
            setReviewModalRowId(editingExamPrepRow.examPrepId);
          }}
          onRemoveMathExamEntry={removeMathExamEntry}
          onSave={saveEditingExamPrepDraft}
          onToggleExcluded={() => updateEditingExamPrepRow(editingExamPrepDraft.examPrepId, "isExcluded", !editingExamPrepDraft.isExcluded)}
          onUpdateMathExamEntry={updateMathExamEntry}
          onUpdateRow={updateEditingExamPrepRow}
        />
      ) : null}
    </section>
  );
}
