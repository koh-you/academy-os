import { useEffect, useMemo, useRef, useState } from "react";
import {
  createTestAttemptId,
  createTestSessionIdForPaper,
  getTestPaperKindLabel
} from "../tests/testManagerUtils.js";
import {
  RecentTestSessionList,
  StudentTestHistoryPanel,
  TestAttemptActions,
  TestAttemptFormGrid,
  TestAttemptMeta,
  TestAttemptPanelHeader,
  TestAttemptTable,
  TestManagerTabs
} from "../tests/TestManagerPanels.jsx";
import { AutosaveRiskNotice } from "../../shared/components/AutosaveRiskNotice.jsx";
import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { FilterBar } from "../../shared/components/FilterBar.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { Modal, ModalFooter } from "../../shared/components/Modal.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { SelectionToolbar } from "../../shared/components/SelectionToolbar.jsx";
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";
import {
  testAttemptStatusOptions,
  testPaperKindOptions
} from "../../app/appConfig.js";
import {
  countProblemStatuses,
  problemClickCycle,
  problemStatusMeta
} from "./learningSupportModel.js";
import { createResourceMaterialDraftId } from "../resources/resourceMaterialPersistence.js";

export function FollowUpCenter({
  runtime,
  appStateSaveState = "idle",
  homeworks,
  lessons,
  notificationLogs,
  problemBooks,
  records,
  students,
  tasks,
  wrongProblems,
  onAddProblemBook,
  onAddWrongProblem,
  onAssignHomework,
  onCreateTask,
  onLogNotification,
  onUpdateProblemBook,
  onUpdateProblemMeta,
  onUpdateTask,
  onUpdateWrongProblem
}) {
  const { appStateAutosaveRisk } = runtime;
  return (
    <section className="followUpPage">
      <PageHeader
        actions={(
          <>
          <InlineSaveStatus label="오답관리 자동저장" saveState={appStateSaveState} />
          <span className="countBadge">{tasks.length}개 진행</span>
          </>
        )}
        actionsClassName="followUpTopActions"
        description="교재 PDF를 원본으로 등록하고, 단원별 문항 상태와 학생별 오답 흐름을 관리합니다."
        title="오답관리"
      />

      <AutosaveRiskNotice className="autosaveRiskNoticeInline" {...appStateAutosaveRisk} />

      <WrongProblemBoard
        problemBooks={problemBooks}
        students={students}
        wrongProblems={wrongProblems}
        onAddProblemBook={onAddProblemBook}
        onAddWrongProblem={onAddWrongProblem}
        onUpdateProblemBook={onUpdateProblemBook}
        onUpdateProblemMeta={onUpdateProblemMeta}
        onUpdateWrongProblem={onUpdateWrongProblem}
      />
    </section>
  );
}
function WrongProblemBoard({
  problemBooks,
  students,
  wrongProblems,
  onAddProblemBook,
  onAddWrongProblem,
  onUpdateProblemBook,
  onUpdateProblemMeta,
  onUpdateWrongProblem
}) {
  const [activeTab, setActiveTab] = useState("current");
  const [gradeFilter, setGradeFilter] = useState("전체");
  const [selectedStudentId, setSelectedStudentId] = useState(students[0]?.studentId ?? "");
  const [selectedProblemRef, setSelectedProblemRef] = useState(null);
  const [isPickedProblemModalOpen, setIsPickedProblemModalOpen] = useState(false);
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(true);
  const selectedStudent = students.find((student) => student.studentId === selectedStudentId) ?? students[0];
  const filteredBooks = problemBooks.filter((book) => gradeFilter === "전체" || book.grade === gradeFilter);
  const totalProblems = filteredBooks.reduce((sum, book) => sum + (book.problems?.length ?? book.totalProblems ?? 0), 0);
  const pickedProblems = problemBooks.flatMap((book) =>
    (book.problems ?? [])
      .filter((problem) => problem.isPicked || problem.status === "selected")
      .map((problem) => ({ book, problem }))
  );
  const selectedProblem =
    selectedProblemRef
      ? problemBooks
          .find((book) => book.problemBookId === selectedProblemRef.problemBookId)
          ?.problems.find((problem) => problem.problemId === selectedProblemRef.problemId)
      : null;
  const selectedBook = selectedProblemRef
    ? problemBooks.find((book) => book.problemBookId === selectedProblemRef.problemBookId)
    : null;

  const selectedProblemsCount = pickedProblems.length;

  function handleFileUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    onAddProblemBook(file.name);
    event.target.value = "";
  }

  function handleProblemClick(book, problem, event) {
    setSelectedProblemRef({ problemBookId: book.problemBookId, problemId: problem.problemId });
    if (event.ctrlKey || event.metaKey) {
      onUpdateProblemMeta(book.problemBookId, problem.problemId, "isPicked", !problem.isPicked);
      return;
    }

    const currentStatus = problem.status === "selected" ? "first" : problem.status;
    const currentIndex = problemClickCycle.indexOf(currentStatus);
    const nextStatus = problemClickCycle[(currentIndex + 1) % problemClickCycle.length];
    onUpdateProblemMeta(book.problemBookId, problem.problemId, "status", nextStatus);
  }

  return (
    <section className="wrongProblemBoard">
      <WorkspaceTabs className="wrongBoardTabs" label="오답관리 작업 구분" variant="secondary">
        {[
          ["current", "현행"],
          ["extra1", "추가1"],
          ["extra2", "추가2"],
          ["bookWrong", "교재별 오답"],
          ["studentWrong", "학생별 오답"]
        ].map(([tab, label]) => (
          <button
            aria-selected={activeTab === tab}
            className={activeTab === tab ? "active" : ""}
            key={tab}
            onClick={() => setActiveTab(tab)}
            role="tab"
            type="button"
          >
            {label}
          </button>
        ))}
      </WorkspaceTabs>

      <FilterBar
        actions={(
          <>
            <label className="pdfUploadButton">
              PDF 교재 등록
              <input accept="application/pdf,image/*" onChange={handleFileUpload} type="file" />
            </label>
            <button
              className="softButton"
              disabled={selectedProblemsCount === 0}
              onClick={() => setIsPickedProblemModalOpen(true)}
              type="button"
            >
              수업용 화면 ({selectedProblemsCount})
            </button>
            <button
              className="primaryButton"
              disabled={selectedProblemsCount === 0}
              onClick={() => setIsPickedProblemModalOpen(true)}
              type="button"
            >
              선택 문제 보기 ({selectedProblemsCount})
            </button>
          </>
        )}
        className="wrongBoardFilterPanel"
        label="오답관리 학년과 학생 필터"
        result={<span>연결 교재 {filteredBooks.length}개 · 총 {totalProblems}문제</span>}
      >
        {["전체", "고1", "고2", "중1", "중2"].map((grade) => (
          <button
            aria-pressed={gradeFilter === grade}
            className={`filterBarOption${gradeFilter === grade ? " active" : ""}`}
            key={grade}
            onClick={() => setGradeFilter(grade)}
            type="button"
          >
            {grade}
          </button>
        ))}
        <label className="filterBarField">
          <span>학생</span>
          <select value={selectedStudent?.studentId ?? ""} onChange={(event) => setSelectedStudentId(event.target.value)}>
            {students.map((student) => (
              <option key={student.studentId} value={student.studentId}>
                {student.name} ({student.grade})
              </option>
            ))}
          </select>
        </label>
      </FilterBar>

      <button
        aria-controls="wrong-board-diagnosis-content"
        aria-expanded={isDiagnosisOpen}
        className="wrongBoardDiagnosis"
        onClick={() => setIsDiagnosisOpen((current) => !current)}
        type="button"
      >
        <span>🔍 커리큘럼 진단 | 보드 {filteredBooks.length}개 · 이 학생 연결: {selectedStudent ? 1 : 0}개 · 표시 교재: {filteredBooks.length}개</span>
        <span>{isDiagnosisOpen ? "▲ 접기" : "▼ 펼치기"}</span>
      </button>

      {isDiagnosisOpen ? (
        <div className="wrongBoardNotice" id="wrong-board-diagnosis-content">
          <strong>{selectedStudent?.name ?? "학생"} 기준 오답 보드</strong>
          <p>
            {activeTab === "studentWrong"
              ? "학생 프로파일에 있던 교재오답 기록은 이 탭에서 별도로 관리합니다."
              : "PDF 자동 크롭 전 단계에서는 파일명, 단원, 문항 번호, 상태, 풀이 메모를 먼저 저장합니다. 서버 크롭이 붙으면 이 미리보기 영역에 실제 문항 이미지가 표시됩니다."}
          </p>
        </div>
      ) : null}

      {activeTab === "studentWrong" ? (
        <StudentWrongProblemBoard
          selectedStudent={selectedStudent}
          wrongProblems={wrongProblems.filter((item) => item.studentId === selectedStudent?.studentId)}
          onAddWrongProblem={onAddWrongProblem}
          onUpdateWrongProblem={onUpdateWrongProblem}
        />
      ) : (
        <div className="wrongBookStack">
          {filteredBooks.map((book) => (
            <WrongBookCard
              book={book}
              key={book.problemBookId}
              selectedProblemRef={selectedProblemRef}
              onSelectProblem={(problem, event) => handleProblemClick(book, problem, event)}
              onUpdateBook={(field, value) => onUpdateProblemBook(book.problemBookId, field, value)}
              onUpdateProblem={(problemId, field, value) => onUpdateProblemMeta(book.problemBookId, problemId, field, value)}
            />
          ))}
        </div>
      )}

      {activeTab !== "studentWrong" && selectedProblem && selectedBook ? (
        <div className="floatingProblemInspector">
          <SectionHeader
            actions={<button aria-label="문항 상세 닫기" className="iconButton" onClick={() => setSelectedProblemRef(null)} type="button">×</button>}
            description="문항 원문, 상태, 해설 메모를 계속 업데이트합니다."
            title={`${selectedBook.title} · ${selectedProblem.number}번`}
          />
          <div className="problemInspectorGrid">
            <ProblemPreview book={selectedBook} problem={selectedProblem} />
            <div className="problemEditPanel">
              <label>
                문항 상태
                <select
                  value={selectedProblem.status}
                  onChange={(event) =>
                    onUpdateProblemMeta(selectedBook.problemBookId, selectedProblem.problemId, "status", event.target.value)
                  }
                >
                  {Object.entries(problemStatusMeta).map(([status, meta]) => (
                    <option key={status} value={status}>{meta.label}</option>
                  ))}
                </select>
              </label>
              <label>
                문항 내용/OCR
                <textarea
                  value={selectedProblem.text}
                  onChange={(event) =>
                    onUpdateProblemMeta(selectedBook.problemBookId, selectedProblem.problemId, "text", event.target.value)
                  }
                  placeholder="PDF 크롭 후 OCR 또는 직접 입력"
                />
              </label>
              <label>
                해설/메모
                <textarea
                  value={selectedProblem.note}
                  onChange={(event) =>
                    onUpdateProblemMeta(selectedBook.problemBookId, selectedProblem.problemId, "note", event.target.value)
                  }
                  placeholder="학생이 자주 틀리는 포인트, 수업 설명 메모"
                />
              </label>
            </div>
          </div>
        </div>
      ) : null}

      {isPickedProblemModalOpen ? (
        <PickedProblemModal
          pickedProblems={pickedProblems}
          selectedStudent={selectedStudent}
          onClose={() => setIsPickedProblemModalOpen(false)}
        />
      ) : null}
    </section>
  );
}

function StudentWrongProblemBoard({ selectedStudent, wrongProblems, onAddWrongProblem, onUpdateWrongProblem }) {
  if (!selectedStudent) {
    return <section className="panel emptyPortalPanel">학생을 선택해 주세요.</section>;
  }

  return (
    <section className="panel studentWrongBoard">
      <SectionHeader
        actions={(
          <button className="primaryButton" onClick={() => onAddWrongProblem(selectedStudent.studentId)} type="button">
            + 오답 추가
          </button>
        )}
        description="학생 프로파일에서 분리한 교재오답 기록입니다. 교재/범위/상태/후속 메모를 여기서 관리합니다."
        title={`${selectedStudent.name} 학생별 오답`}
      />
      <DataTableShell className="managementTable studentWrongTable" label="학생별 오답 목록">
        <div className="managementRow wrongProblemProfileRow managementHead">
          <span>교재/출처</span>
          <span>문항/범위</span>
          <span>상태</span>
          <span>메모</span>
        </div>
        {wrongProblems.length === 0 ? (
          <EmptyState className="emptyState">아직 입력된 학생별 오답이 없습니다.</EmptyState>
        ) : (
          wrongProblems.map((item) => (
            <div className="managementRow wrongProblemProfileRow" key={item.wrongProblemId}>
              <input
                aria-label={`${selectedStudent.name} ${item.problemRange || "새 오답"} 교재 또는 출처`}
                value={item.source}
                onChange={(event) => onUpdateWrongProblem(item.wrongProblemId, "source", event.target.value)}
                placeholder="예: 쎈, GRIP"
              />
              <input
                aria-label={`${selectedStudent.name} ${item.source || "새 오답"} 문항 또는 범위`}
                value={item.problemRange}
                onChange={(event) => onUpdateWrongProblem(item.wrongProblemId, "problemRange", event.target.value)}
                placeholder="예: 643-647"
              />
              <select
                aria-label={`${selectedStudent.name} ${item.problemRange || "새 오답"} 상태`}
                value={item.status}
                onChange={(event) => onUpdateWrongProblem(item.wrongProblemId, "status", event.target.value)}
              >
                <option value="open">미해결</option>
                <option value="reviewing">재풀이중</option>
                <option value="done">완료</option>
              </select>
              <input
                aria-label={`${selectedStudent.name} ${item.problemRange || "새 오답"} 메모`}
                value={item.note}
                onChange={(event) => onUpdateWrongProblem(item.wrongProblemId, "note", event.target.value)}
                placeholder="오답 원인/보충 메모"
              />
            </div>
          ))
        )}
      </DataTableShell>
    </section>
  );
}

function PickedProblemModal({ pickedProblems, selectedStudent, onClose }) {
  const sortedProblems = [...pickedProblems].sort((a, b) => {
    const bookCompare = a.book.title.localeCompare(b.book.title);
    return bookCompare || Number(a.problem.number) - Number(b.problem.number);
  });

  return (
    <Modal
      className="pickedProblemModal"
      title={`뽑은 문제 — ${sortedProblems.length}문제`}
      subtitle={`${selectedStudent?.name ?? "학생"} 오답/보충 출력용`}
      onClose={onClose}
    >
      <ModalFooter className="pickedProblemActions noPrint">
        <button className="primaryButton" onClick={() => window.print()} type="button">🖨 인쇄</button>
        <button className="softButton" onClick={onClose} type="button">닫기</button>
      </ModalFooter>
      <div className="printProblemSheet">
        <div className="printSheetHeader">
          <strong>{selectedStudent?.grade ?? ""} {selectedStudent?.name ?? "학생"}</strong>
          <span>오답 문제 ({sortedProblems.length}문제)</span>
        </div>
        <div className="printProblemGrid">
          {sortedProblems.map(({ book, problem }, index) => (
            <article className="printProblemCard" key={`${book.problemBookId}_${problem.problemId}`}>
              <div className="printProblemTitle">
                <strong>{book.title} {problem.number}번</strong>
                <span>{problemStatusMeta[problem.status]?.shortLabel ?? "미체크"}</span>
              </div>
              <ProblemPreview book={book} problem={problem} />
              <small>{index + 1}/{sortedProblems.length}</small>
            </article>
          ))}
        </div>
      </div>
    </Modal>
  );
}

function WrongBookCard({ book, selectedProblemRef, onSelectProblem, onUpdateBook, onUpdateProblem }) {
  const counts = countProblemStatuses(book.problems ?? []);
  const selectedProblem =
    selectedProblemRef?.problemBookId === book.problemBookId
      ? book.problems.find((problem) => problem.problemId === selectedProblemRef.problemId)
      : null;

  return (
    <article className="wrongBookCard">
      <div className="wrongBookHeader">
        <div>
          <div className="wrongBookTitleRow">
            <input
              aria-label="교재명"
              value={book.title}
              onChange={(event) => onUpdateBook("title", event.target.value)}
            />
            <span>전체 {book.problems?.length ?? book.totalProblems ?? 0}개</span>
          </div>
          <small>{book.sourceFileName} · {book.grade} · {book.subject} · {book.unit}</small>
        </div>
        <div className="problemLegend">
          {["first", "retry", "wrong", "mistake", "second", "question", "outOfScope", "unchecked"].map((status) => (
            <span key={status}>
              <i className={`legendDot ${problemStatusMeta[status].className}`} />
              {problemStatusMeta[status].shortLabel} {counts[status] ?? 0}
            </span>
          ))}
        </div>
      </div>
      <div className="wrongBookHint">클릭: 맞음→한번 틀림→두번 틀림→실수/확실히 앎 · Ctrl+클릭: 여러 문제 선택</div>
      <div className="wrongBookBody">
        <div className="problemNumberGrid">
          {(book.problems ?? []).map((problem) => (
            <button
              className={`problemNumberButton ${problemStatusMeta[problem.status]?.className ?? "unchecked"} ${
                selectedProblem?.problemId === problem.problemId ? "active" : ""
              } ${problem.isPicked || problem.status === "selected" ? "picked" : ""}`}
              key={problem.problemId}
              onClick={(event) => onSelectProblem(problem, event)}
              type="button"
            >
              {problem.number}
            </button>
          ))}
        </div>
        <div className="problemPreviewBox">
          {selectedProblem ? (
            <>
              <ProblemPreview book={book} problem={selectedProblem} />
              <select
                aria-label={`${book.title} ${selectedProblem.number}번 상태`}
                value={selectedProblem.status}
                onChange={(event) => onUpdateProblem(selectedProblem.problemId, "status", event.target.value)}
              >
                {Object.entries(problemStatusMeta).map(([status, meta]) => (
                  <option key={status} value={status}>{meta.label}</option>
                ))}
              </select>
            </>
          ) : (
            <span>문제를 클릭하면 미리보기</span>
          )}
        </div>
      </div>
    </article>
  );
}

function ProblemPreview({ book, problem }) {
  return (
    <div className="problemPreviewCard">
      <div className="problemPreviewTop">
        <strong>{problem.number}번</strong>
        <span>{problemStatusMeta[problem.status]?.label ?? "미체크"}</span>
      </div>
      {problem.cropImageUrl ? (
        <img alt={`${book.title} ${problem.number}번`} src={problem.cropImageUrl} />
      ) : (
        <div className="mockProblemCrop">
          <small>{book.unit}</small>
          <strong>{String(problem.number).padStart(3, "0")}</strong>
          <p>{problem.text || "PDF 크롭 이미지가 등록되면 이 영역에 문항이 표시됩니다."}</p>
          <ol>
            <li>보기 또는 조건 1</li>
            <li>보기 또는 조건 2</li>
            <li>보기 또는 조건 3</li>
          </ol>
        </div>
      )}
    </div>
  );
}

function createEmptyResourceMaterialForm() {
  return {
    materialId: createResourceMaterialDraftId({
      randomUUID: () => globalThis.crypto?.randomUUID?.() ?? ""
    }),
    createdAt: new Date().toISOString(),
    title: "",
    description: "",
    fileName: "",
    fileUrl: "",
    visibility: "student",
    classTemplateId: "",
    studentIds: [],
    notifyByAlimtalk: false
  };
}

export function ResourceLibraryCenter({
  materials = [],
  resourceMaterialBusy = false,
  resourceMaterialDeleteStates = {},
  resourceMaterialSaveState = { message: "", state: "idle" },
  onAddMaterial,
  onDeleteMaterial,
  students = [],
  templates = []
}) {
  const fileInputRef = useRef(null);
  const [form, setForm] = useState(createEmptyResourceMaterialForm);
  const [openResourceClassIds, setOpenResourceClassIds] = useState(() =>
    templates.slice(0, 1).map((template) => template.classTemplateId)
  );
  const resourceStudentGroups = useMemo(() => {
    const groups = templates.map((template) => ({
      id: template.classTemplateId,
      name: template.name,
      students: students.filter((student) => student.defaultClassTemplateId === template.classTemplateId)
    }));
    const assignedTemplateIds = new Set(templates.map((template) => template.classTemplateId));
    const unassignedStudents = students.filter((student) => !assignedTemplateIds.has(student.defaultClassTemplateId));
    if (unassignedStudents.length > 0) {
      groups.push({ id: "unassigned", name: "미배정", students: unassignedStudents });
    }
    return groups.filter((group) => group.students.length > 0);
  }, [students, templates]);
  const resourceMaterialHasDraft = Boolean(
    form.title.trim() ||
    form.description.trim() ||
    form.fileName.trim() ||
    form.fileUrl.trim() ||
    form.visibility !== "student" ||
    form.classTemplateId ||
    form.studentIds.length > 0 ||
    form.notifyByAlimtalk
  );
  const visibleResourceMaterialSaveState = (
    resourceMaterialSaveState.state === "saving" || resourceMaterialSaveState.state === "failed"
      ? resourceMaterialSaveState
      : resourceMaterialHasDraft
        ? { message: "현재 초안은 아직 서버에 저장되지 않았습니다.", state: "dirty" }
        : resourceMaterialSaveState
  );

  function updateForm(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function attachFiles(files) {
    const selectedFiles = Array.from(files ?? []);
    if (selectedFiles.length === 0) return;
    updateForm("fileName", selectedFiles.map((file) => file.name).join(", "));
  }

  function toggleStudent(studentId) {
    setForm((current) => ({
      ...current,
      studentIds: current.studentIds.includes(studentId)
        ? current.studentIds.filter((id) => id !== studentId)
        : [...current.studentIds, studentId]
    }));
  }

  function toggleResourceGroup(groupId) {
    setOpenResourceClassIds((current) =>
      current.includes(groupId) ? current.filter((id) => id !== groupId) : [...current, groupId]
    );
  }

  function selectResourceGroup(studentIds) {
    setForm((current) => ({ ...current, studentIds: Array.from(new Set([...current.studentIds, ...studentIds])) }));
  }

  function clearResourceGroup(studentIds) {
    const studentIdSet = new Set(studentIds);
    setForm((current) => ({ ...current, studentIds: current.studentIds.filter((studentId) => !studentIdSet.has(studentId)) }));
  }

  function selectAllResourceStudents() {
    setForm((current) => ({ ...current, studentIds: students.map((student) => student.studentId) }));
  }

  function clearAllResourceStudents() {
    setForm((current) => ({ ...current, studentIds: [] }));
  }

  async function submitMaterial(event) {
    event.preventDefault();
    if (!form.title.trim() || resourceMaterialBusy) return;
    const result = await onAddMaterial(form);
    if (result?.ok) setForm(createEmptyResourceMaterialForm());
  }

  return (
    <section className="resourceLibraryPage">
      <PageHeader
        actions={<span className="countBadge">{materials.length}건</span>}
        description="학생별 자료, 반별 자료, 학부모 공개 자료를 한 곳에서 관리합니다."
        eyebrow="RESOURCE LIBRARY"
        title="자료함"
      />

      <div className="resourceLibraryLayout">
        <form aria-busy={resourceMaterialBusy} className="panel resourceForm" onSubmit={submitMaterial}>
          <fieldset className="resourceFormFields" disabled={resourceMaterialBusy}>
          <h2>자료 등록</h2>
          <label>
            자료명
            <input value={form.title} onChange={(event) => updateForm("title", event.target.value)} placeholder="예: 정의여고 직전대비 프린트" />
          </label>
          <label>
            설명
            <textarea value={form.description} onChange={(event) => updateForm("description", event.target.value)} placeholder="학생이 자료를 받을 때 함께 볼 안내문" />
          </label>
          <button
            aria-describedby="resource-file-boundary-notice"
            className="resourceDropZone"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              event.preventDefault();
              attachFiles(event.dataTransfer.files);
            }}
            type="button"
          >
            <strong>자료 파일 드래그 앤 드롭</strong>
            <span>{form.fileName || "파일을 여기에 놓거나 클릭해서 선택하세요."}</span>
          </button>
          <input
            aria-label="자료 파일 선택"
            hidden
            multiple
            onChange={(event) => attachFiles(event.target.files)}
            ref={fileInputRef}
            type="file"
          />
          <p className="resourceFileBoundaryNotice" id="resource-file-boundary-notice">
            현재는 파일 내용이 업로드되지 않고 파일명만 저장됩니다. 공유하려면 접근 가능한 링크를 함께 입력하세요.
          </p>
          <div className="fieldGrid two">
            <label>
              파일명
              <input value={form.fileName} onChange={(event) => updateForm("fileName", event.target.value)} placeholder="파일명 또는 카톡에서 보낸 자료명" />
            </label>
            <label>
              링크
              <input value={form.fileUrl} onChange={(event) => updateForm("fileUrl", event.target.value)} placeholder="https://..." />
            </label>
          </div>
          <div className="fieldGrid two">
            <label>
              공개범위
              <select value={form.visibility} onChange={(event) => updateForm("visibility", event.target.value)}>
                <option value="student">학생만</option>
                <option value="parent">학부모만</option>
                <option value="both">학생+학부모</option>
              </select>
            </label>
            <label>
              반
              <select value={form.classTemplateId} onChange={(event) => updateForm("classTemplateId", event.target.value)}>
                <option value="">전체 반</option>
                {templates.map((template) => (
                  <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="resourceStudentPicker">
            <SelectionToolbar
              actions={(
                <>
                  <button onClick={selectAllResourceStudents} type="button">전체 선택</button>
                  <button onClick={clearAllResourceStudents} type="button">전체 해제</button>
                </>
              )}
              className="resourceStudentPickerTop resourceBulkActions"
              label="개별 학생 공개"
              selectedCount={form.studentIds.length}
            />
            <div
              aria-label="자료 공개 학생 반별 목록"
              className="resourceClassGroups"
              role="region"
              tabIndex={0}
            >
              {resourceStudentGroups.map((group) => {
                const groupStudentIds = group.students.map((student) => student.studentId);
                const selectedCount = groupStudentIds.filter((studentId) => form.studentIds.includes(studentId)).length;
                const isOpen = openResourceClassIds.includes(group.id);
                return (
                  <section className="resourceClassGroup" key={group.id}>
                    <button className="resourceClassGroupHeader" onClick={() => toggleResourceGroup(group.id)} type="button">
                      <span>{isOpen ? "⌄" : "›"} {group.name}</span>
                      <b>{selectedCount}/{group.students.length}명</b>
                    </button>
                    {isOpen ? (
                      <div className="resourceClassGroupBody">
                        <div className="resourceGroupActions">
                          <button onClick={() => selectResourceGroup(groupStudentIds)} type="button">반 전체 선택</button>
                          <button onClick={() => clearResourceGroup(groupStudentIds)} type="button">반 선택 해제</button>
                        </div>
                        <div className="resourceStudentButtons">
                          {group.students.map((student) => (
                            <button
                              className={form.studentIds.includes(student.studentId) ? "active" : ""}
                              key={student.studentId}
                              onClick={() => toggleStudent(student.studentId)}
                              type="button"
                            >
                              {student.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </section>
                );
              })}
            </div>
          </div>
          <label className="checkboxLine">
            <input checked={form.notifyByAlimtalk} onChange={(event) => updateForm("notifyByAlimtalk", event.target.checked)} type="checkbox" />
            등록 후 알림톡 안내 대상으로 표시
          </label>
          <button className="primaryButton full" type="submit">
            {resourceMaterialSaveState.state === "saving" ? "자료 등록 중..." : "자료 등록"}
          </button>
          </fieldset>
          {visibleResourceMaterialSaveState.state !== "idle" ? (
            <div className={`resourceMaterialSaveFeedback ${visibleResourceMaterialSaveState.state}`} aria-live="polite" role="status">
              <InlineSaveStatus label="자료 등록" saveState={visibleResourceMaterialSaveState.state} />
              {visibleResourceMaterialSaveState.message ? <span>{visibleResourceMaterialSaveState.message}</span> : null}
            </div>
          ) : null}
        </form>

        <section className="panel resourceList">
          <h2>등록 자료</h2>
          {materials.length === 0 ? <div className="emptyPortalPanel">등록된 자료가 없습니다.</div> : null}
          {materials.map((material) => {
            const deleteState = resourceMaterialDeleteStates[material.materialId] ?? { message: "", state: "idle" };
            return (
            <article className="resourceListItem" key={material.materialId}>
              <div>
                <strong>{material.title}</strong>
                <p>{material.description || "설명 없음"}</p>
                <small>
                  {material.visibility === "both" ? "학생+학부모" : material.visibility === "parent" ? "학부모" : "학생"}
                  {" · "}
                  {material.fileName || material.fileUrl || "파일/링크 미입력"}
                </small>
              </div>
              <div className="resourceMaterialDeleteActions">
                <button
                  className="dangerButton mini"
                  disabled={resourceMaterialBusy}
                  onClick={() => onDeleteMaterial(material.materialId)}
                  type="button"
                >
                  {deleteState.state === "saving" ? "삭제 중..." : "삭제"}
                </button>
                {deleteState.state !== "idle" ? (
                  <div className={`resourceMaterialSaveFeedback ${deleteState.state}`} aria-live="polite" role="status">
                    <InlineSaveStatus label="자료 삭제" saveState={deleteState.state} />
                    {deleteState.message ? <span>{deleteState.message}</span> : null}
                  </div>
                ) : null}
              </div>
            </article>
            );
          })}
        </section>
      </div>
    </section>
  );
}

export function MaterialManager({
  runtime,
  students,
  testAttempts = [],
  testResultSaveState = "idle",
  testSessions = [],
  templates = [],
  onDeleteTestSession,
  onSaveTestSession
}) {
  const { isActiveStudent, testPaperSubjectOptions, today } = runtime;
  const [activeTab, setActiveTab] = useState("attempts");
  const [attemptDate, setAttemptDate] = useState(today);
  const [attemptClassTemplateId, setAttemptClassTemplateId] = useState("all");
  const [attemptTestKind, setAttemptTestKind] = useState(testPaperKindOptions[0].id);
  const [attemptTitle, setAttemptTitle] = useState("");
  const [attemptSubject, setAttemptSubject] = useState(testPaperSubjectOptions[0]);
  const [attemptUnit, setAttemptUnit] = useState("");
  const [attemptTotalQuestions, setAttemptTotalQuestions] = useState("");
  const [attemptMemo, setAttemptMemo] = useState("");
  const [attemptDrafts, setAttemptDrafts] = useState({});
  const [attemptError, setAttemptError] = useState("");
  const [editingTestSessionId, setEditingTestSessionId] = useState("");
  const [selectedHistoryStudentId, setSelectedHistoryStudentId] = useState("");
  const activeStudents = students.filter(isActiveStudent);
  const selectedAttemptTemplate = templates.find((template) => template.classTemplateId === attemptClassTemplateId) ?? null;
  const attemptStudents = attemptClassTemplateId === "all"
    ? activeStudents
    : activeStudents.filter((student) => student.defaultClassTemplateId === attemptClassTemplateId);
  const normalizedAttemptTitle = attemptTitle.trim();
  const currentTestSessionId = editingTestSessionId || (normalizedAttemptTitle
    ? createTestSessionIdForPaper({
        classTemplateId: attemptClassTemplateId === "all" ? "" : attemptClassTemplateId,
        subject: attemptSubject,
        testDate: attemptDate,
        testKind: attemptTestKind,
        testTitle: normalizedAttemptTitle
      })
    : "");
  const currentTestSession = testSessions.find((session) => session.testSessionId === currentTestSessionId) ?? null;
  const currentTestAttempts = testAttempts.filter((attempt) => attempt.testSessionId === currentTestSessionId);
  const historyStudent = activeStudents.find((student) => student.studentId === selectedHistoryStudentId) ?? activeStudents[0] ?? null;
  const recentTestSessions = [...testSessions]
    .sort((a, b) =>
      String(b.testDate || "").localeCompare(String(a.testDate || "")) ||
      String(b.updatedAt || b.createdAt || "").localeCompare(String(a.updatedAt || a.createdAt || ""))
    );
  const historyRows = historyStudent
    ? testAttempts
        .filter((attempt) => attempt.studentId === historyStudent.studentId)
        .map((attempt) => ({
          attempt,
          session: testSessions.find((session) => session.testSessionId === attempt.testSessionId)
        }))
        .filter((row) => row.session)
        .sort((a, b) => String(b.session.testDate || "").localeCompare(String(a.session.testDate || "")))
    : [];

  useEffect(() => {
    if (!selectedHistoryStudentId && activeStudents[0]) {
      setSelectedHistoryStudentId(activeStudents[0].studentId);
    }
  }, [activeStudents, selectedHistoryStudentId]);

  useEffect(() => {
    const attemptByStudent = new Map(currentTestAttempts.map((attempt) => [attempt.studentId, attempt]));
    setAttemptDrafts((current) => {
      const nextDrafts = {};
      attemptStudents.forEach((student) => {
        const attempt = attemptByStudent.get(student.studentId);
        const currentDraft = current[student.studentId] ?? {};
        nextDrafts[student.studentId] = {
          status: attempt?.status ?? currentDraft.status ?? "",
          correctCount: attempt?.correctCount ?? currentDraft.correctCount ?? "",
          notTakenReason: attempt?.notTakenReason ?? currentDraft.notTakenReason ?? "",
          memo: attempt?.memo ?? currentDraft.memo ?? ""
        };
      });
      return nextDrafts;
    });
    if (currentTestSession) setAttemptMemo(currentTestSession.memo ?? "");
    setAttemptError("");
  }, [attemptClassTemplateId, currentTestSessionId, testAttempts, students, currentTestSession?.memo]);

  function resetAttemptForm() {
    setEditingTestSessionId("");
    setAttemptDate(today);
    setAttemptClassTemplateId("all");
    setAttemptTestKind(testPaperKindOptions[0].id);
    setAttemptTitle("");
    setAttemptSubject(testPaperSubjectOptions[0]);
    setAttemptUnit("");
    setAttemptTotalQuestions("");
    setAttemptMemo("");
    setAttemptDrafts({});
    setAttemptError("");
  }

  function openTestSession(session) {
    setEditingTestSessionId(session.testSessionId);
    setAttemptDate(session.testDate || today);
    setAttemptClassTemplateId(session.classTemplateId || "all");
    setAttemptTestKind(session.testKind || testPaperKindOptions[0].id);
    setAttemptTitle(session.testTitle || "");
    setAttemptSubject(session.subject || testPaperSubjectOptions[0]);
    setAttemptUnit(session.unit || "");
    setAttemptTotalQuestions(session.totalQuestions === null || session.totalQuestions === undefined ? "" : String(session.totalQuestions));
    setAttemptMemo(session.memo || "");
    setAttemptError("");
    setActiveTab("attempts");
  }

  function updateAttemptDraft(studentId, field, value) {
    setAttemptDrafts((current) => ({
      ...current,
      [studentId]: {
        ...(current[studentId] ?? {}),
        [field]: value,
        ...(field === "correctCount" && value !== "" ? { status: "taken" } : {})
      }
    }));
    setAttemptError("");
  }

  async function saveAttemptSession() {
    const totalQuestions = Number(attemptTotalQuestions);
    if (!normalizedAttemptTitle) {
      setAttemptError("테스트명을 입력해 주세요.");
      return;
    }
    if (!Number.isFinite(totalQuestions) || totalQuestions <= 0) {
      setAttemptError("총 문항 수를 1 이상으로 입력해 주세요.");
      return;
    }

    const attempts = [];
    for (const student of attemptStudents) {
      const draft = attemptDrafts[student.studentId] ?? {};
      const status = draft.status || (draft.correctCount !== "" && draft.correctCount !== undefined ? "taken" : "");
      if (!["taken", "not_taken"].includes(status)) continue;
      const attempt = {
        testAttemptId: createTestAttemptId(currentTestSessionId, student.studentId),
        testSessionId: currentTestSessionId,
        studentId: student.studentId,
        status,
        correctCount: "",
        notTakenReason: "",
        memo: draft.memo ?? "",
        passStatus: ""
      };
      if (status === "taken") {
        const correctCount = Number(draft.correctCount);
        if (!Number.isFinite(correctCount) || correctCount < 0 || correctCount > totalQuestions) {
          setAttemptError(`${student.name} 학생의 정답 수를 0~${totalQuestions} 사이로 입력해 주세요.`);
          return;
        }
        attempt.correctCount = correctCount;
      }
      if (status === "not_taken") {
        const reason = String(draft.notTakenReason ?? "").trim();
        if (!reason) {
          setAttemptError(`${student.name} 학생의 미응시 사유를 입력해 주세요.`);
          return;
        }
        attempt.notTakenReason = reason;
      }
      attempts.push(attempt);
    }

    if (!attempts.length) {
      setAttemptError("응시 또는 미응시로 기록할 학생을 1명 이상 입력해 주세요.");
      return;
    }

    const testSession = {
      testSessionId: currentTestSessionId,
      problemBookId: "",
      testDate: attemptDate,
      classTemplateId: attemptClassTemplateId === "all" ? "" : attemptClassTemplateId,
      className: selectedAttemptTemplate?.name ?? (attemptClassTemplateId === "all" ? "전체 학생" : ""),
      testKind: attemptTestKind,
      testTitle: normalizedAttemptTitle,
      subject: attemptSubject,
      unit: attemptUnit,
      totalQuestions,
      passCorrectCount: "",
      source: "manual_test_result",
      memo: attemptMemo
    };

    try {
      const result = await onSaveTestSession?.(testSession, attempts);
      setEditingTestSessionId(result?.testSession?.testSessionId || currentTestSessionId);
      setAttemptError("");
    } catch (error) {
      setAttemptError(error.message);
    }
  }

  return (
    <section className="materialManagerPage">
      <TestManagerTabs activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === "attempts" ? (
        <section className="panel materialPanel testAttemptPanel">
          <TestAttemptPanelHeader testResultSaveState={testResultSaveState} />
          <TestAttemptFormGrid
            attemptClassTemplateId={attemptClassTemplateId}
            attemptDate={attemptDate}
            attemptMemo={attemptMemo}
            attemptSubject={attemptSubject}
            attemptTestKind={attemptTestKind}
            attemptTitle={attemptTitle}
            attemptTotalQuestions={attemptTotalQuestions}
            attemptUnit={attemptUnit}
            onAttemptClassTemplateIdChange={setAttemptClassTemplateId}
            onAttemptDateChange={setAttemptDate}
            onAttemptMemoChange={setAttemptMemo}
            onAttemptSubjectChange={setAttemptSubject}
            onAttemptTestKindChange={setAttemptTestKind}
            onAttemptTitleChange={setAttemptTitle}
            onAttemptTotalQuestionsChange={setAttemptTotalQuestions}
            onAttemptUnitChange={setAttemptUnit}
            subjectOptions={testPaperSubjectOptions}
            templates={templates}
            testKindOptions={testPaperKindOptions}
          />
          <TestAttemptMeta
            isEditing={Boolean(currentTestSession)}
            kindLabel={getTestPaperKindLabel(attemptTestKind)}
            subject={attemptSubject}
            totalQuestions={attemptTotalQuestions}
          />
          <TestAttemptTable
            attemptDrafts={attemptDrafts}
            onUpdateAttemptDraft={updateAttemptDraft}
            statusOptions={testAttemptStatusOptions}
            students={attemptStudents}
          />
          <TestAttemptActions
            attemptError={attemptError}
            canSave={Boolean(normalizedAttemptTitle)}
            currentTestSession={currentTestSession}
            isSaving={testResultSaveState === "saving"}
            onDeleteTestSession={onDeleteTestSession}
            onResetAttemptForm={resetAttemptForm}
            onSaveAttemptSession={saveAttemptSession}
          />
          <RecentTestSessionList
            getKindLabel={getTestPaperKindLabel}
            onOpenSession={openTestSession}
            sessions={recentTestSessions}
            totalCount={testSessions.length}
          />
        </section>
      ) : null}

      {activeTab === "history" ? (
        <StudentTestHistoryPanel
          getKindLabel={getTestPaperKindLabel}
          onStudentChange={setSelectedHistoryStudentId}
          rows={historyRows}
          selectedStudentId={historyStudent?.studentId ?? ""}
          students={activeStudents}
        />
      ) : null}
    </section>
  );
}

function CandidatePanel({ children, subtitle, title }) {
  return (
    <section className="panel candidatePanel">
      <h2>{title}</h2>
      <p className="muted">{subtitle}</p>
      <div className="candidateStack">{children}</div>
    </section>
  );
}

export function OverdueHomework({
  runtime,
  homeworks,
  lessons = [],
  materials = [],
  makeupTasks = [],
  records = [],
  reportSnapshots = [],
  scoreRecords = [],
  students,
  teacherHomeworkSaveStates = {},
  onTeacherVerifyHomework
}) {
  const {
    StudentPortalV2,
    dedupeActionableHomeworks,
    getHomeworkAction,
    isHomeworkActionRequired,
    isHomeworkMakeupCandidate,
    isHomeworkOverdue,
    today
  } = runtime;
  const makeupCandidateHomeworks = homeworks.filter((homework) => isHomeworkMakeupCandidate(homework, records, lessons));
  const actionableHomeworks = dedupeActionableHomeworks(makeupCandidateHomeworks);
  const unresolvedHomeworks = actionableHomeworks
    .filter((homework) => homework.title && isHomeworkActionRequired(homework))
    .sort((a, b) => String(a.assignedDate ?? "").localeCompare(String(b.assignedDate ?? "")));
  const [gradeFilter, setGradeFilter] = useState("전체");
  const [activeMetric, setActiveMetric] = useState("all");
  const [detailScope, setDetailScope] = useState("all");
  const [studentPreviewId, setStudentPreviewId] = useState("");
  const [selectedStudentId, setSelectedStudentId] = useState(students[0]?.studentId ?? "");
  const filteredStudents =
    gradeFilter === "전체" ? students : students.filter((student) => (student.grade || "미입력") === gradeFilter);
  const registeredStudentIds = new Set(actionableHomeworks.filter((homework) => homework.title).map((homework) => homework.studentId));
  const todayIncompleteStudentIds = new Set(unresolvedHomeworks.filter((homework) => homework.dueDate === today).map((homework) => homework.studentId));
  const overdueStudentIds = new Set(unresolvedHomeworks.filter((homework) => isHomeworkOverdue(homework)).map((homework) => homework.studentId));
  const metricLabels = {
    all: "보충 대상 전체",
    overdue: "지연 보충 학생",
    registered: "보충 대상 학생",
    today: "오늘 기준 보충"
  };
  const metricMeta = {
    all: {
      detailHint: "보충관리와 같은 기준의 숙제보충 대상",
      detailTitle: "보충 대상 숙제",
      emptyHomeworks: "보충 대상 숙제가 없습니다.",
      emptyStudents: "보충 대상 학생이 없습니다.",
      studentHint: "숙제보충이 필요한 학생을 확인합니다.",
      studentTitle: "보충 대상 전체"
    },
    overdue: {
      detailHint: "기준일이 지난 숙제보충 대상",
      detailTitle: "지연 보충 숙제",
      emptyHomeworks: "선택한 학생의 지연 보충 숙제가 없습니다.",
      emptyStudents: "지연 보충 학생이 없습니다.",
      studentHint: "기준일이 지난 숙제보충 대상 학생만 봅니다.",
      studentTitle: "지연 보충 학생"
    },
    registered: {
      detailHint: "수업일지 검사 결과 보충이 필요한 숙제",
      detailTitle: "보충 대상 숙제",
      emptyHomeworks: "선택한 학생의 보충 대상 숙제가 없습니다.",
      emptyStudents: "보충 대상 학생이 없습니다.",
      studentHint: "수업일지 검사 결과 숙제보충이 필요한 학생만 봅니다.",
      studentTitle: "보충 대상 학생"
    },
    today: {
      detailHint: "오늘 기준으로 처리해야 하는 숙제보충 대상",
      detailTitle: "오늘 기준 보충 숙제",
      emptyHomeworks: "선택한 학생의 오늘 기준 보충 숙제가 없습니다.",
      emptyStudents: "오늘 기준 보충 학생이 없습니다.",
      studentHint: "오늘 기준으로 처리해야 하는 숙제보충 학생만 봅니다.",
      studentTitle: "오늘 기준 보충"
    }
  };
  const activeMetricMeta = metricMeta[activeMetric] ?? metricMeta.all;
  const visibleStudents = filteredStudents.filter((student) => {
    if (activeMetric === "registered") return registeredStudentIds.has(student.studentId);
    if (activeMetric === "today") return todayIncompleteStudentIds.has(student.studentId);
    if (activeMetric === "overdue") return overdueStudentIds.has(student.studentId);
    return registeredStudentIds.has(student.studentId);
  });
  const visibleStudentIds = visibleStudents.map((student) => student.studentId).join("|");
  const firstVisibleStudentId = visibleStudents[0]?.studentId ?? "";
  const selectedStudent =
    detailScope === "student"
      ? visibleStudents.find((student) => student.studentId === selectedStudentId) ?? visibleStudents[0] ?? null
      : null;
  const selectedHomeworks =
    detailScope === "all"
      ? getHomeworksByMetricForStudents(visibleStudents.map((student) => student.studentId))
      : selectedStudent ? getStudentHomeworksByMetric(selectedStudent.studentId) : [];
  const registeredStudentCount = registeredStudentIds.size;
  const todayIncompleteCount = todayIncompleteStudentIds.size;
  const overdueStudentCount = overdueStudentIds.size;

  useEffect(() => {
    if (!visibleStudentIds) {
      if (selectedStudentId) setSelectedStudentId("");
      return;
    }
    if (detailScope === "all") return;
    if (!visibleStudentIds.split("|").includes(selectedStudentId)) {
      setSelectedStudentId(firstVisibleStudentId);
    }
  }, [detailScope, firstVisibleStudentId, selectedStudentId, visibleStudentIds]);

  function getStudentHomeworksByMetric(studentId) {
    return getHomeworksByMetricForStudents([studentId]);
  }

  function getHomeworksByMetricForStudents(studentIds) {
    const targetIds = new Set(studentIds);
    const sortByAssignedDate = (items) =>
      [...items].sort((a, b) =>
        String(a.assignedDate ?? a.dueDate ?? "").localeCompare(String(b.assignedDate ?? b.dueDate ?? ""))
      );
    if (activeMetric === "today") {
      return sortByAssignedDate(
        unresolvedHomeworks.filter((homework) => targetIds.has(homework.studentId) && homework.dueDate === today)
      );
    }
    if (activeMetric === "overdue") {
      return sortByAssignedDate(
        unresolvedHomeworks.filter((homework) => targetIds.has(homework.studentId) && isHomeworkOverdue(homework))
      );
    }
    return sortByAssignedDate(actionableHomeworks.filter((homework) => targetIds.has(homework.studentId) && homework.title));
  }

  function getStudentHomeworkSummary(student) {
    const studentHomeworks = actionableHomeworks.filter((homework) => homework.studentId === student.studentId);
    const unresolvedCount = unresolvedHomeworks.filter((homework) => homework.studentId === student.studentId).length;
    const todayCount = unresolvedHomeworks.filter(
      (homework) => homework.studentId === student.studentId && homework.dueDate === today
    ).length;
    const overdueCount = unresolvedHomeworks.filter(
      (homework) => homework.studentId === student.studentId && isHomeworkOverdue(homework)
    ).length;
    const doneCount = studentHomeworks.filter(
      (homework) => homework.teacherStatus === "verified" || homework.studentStatus === "checked_done"
    ).length;
    const progress = studentHomeworks.length ? Math.round((doneCount / studentHomeworks.length) * 100) : 0;
    return {
      hasRegisteredHomework: studentHomeworks.length > 0,
      overdueCount,
      progress,
      registeredCount: studentHomeworks.length,
      todayCount,
      unresolvedCount
    };
  }

  function getStudentMetricLine(summary) {
    if (activeMetric === "registered") return `보충 대상 ${summary.registeredCount}건 · 처리 ${summary.progress}%`;
    if (activeMetric === "today") return `오늘 기준 보충 ${summary.todayCount}건`;
    if (activeMetric === "overdue") return `지연 보충 ${summary.overdueCount}건`;
    return `오늘 기준 ${summary.todayCount}건 · 지연 ${summary.overdueCount}건`;
  }

  function handleMetricClick(metric) {
    setActiveMetric(metric);
    if (metric === "all") {
      setDetailScope("all");
      setSelectedStudentId("");
      return;
    }
    setDetailScope("student");
    const nextStudent = filteredStudents.find((student) => {
      if (metric === "registered") return registeredStudentIds.has(student.studentId);
      if (metric === "today") return todayIncompleteStudentIds.has(student.studentId);
      if (metric === "overdue") return overdueStudentIds.has(student.studentId);
      return true;
    });
    if (nextStudent) {
      setSelectedStudentId(nextStudent.studentId);
    }
  }

  function handleSelectStudent(studentId) {
    setDetailScope("student");
    setSelectedStudentId(studentId);
  }

  function handleShowAllStudents() {
    setActiveMetric("all");
    setDetailScope("all");
    setSelectedStudentId("");
  }

  function getHomeworkStudentName(homework) {
    return students.find((student) => student.studentId === homework.studentId)?.name ?? "학생 미입력";
  }

  return (
    <section className="homeworkStatusDashboard">
      <div className="homeworkStatusMetrics">
        <MetricCard active={activeMetric === "all"} icon="👥" label="보충 대상 전체" value={`${registeredStudentCount}명`} hint="보충관리 기준" onClick={() => handleMetricClick("all")} />
        <MetricCard active={activeMetric === "registered"} icon="📖" label="보충 대상 학생" value={`${registeredStudentCount}명`} hint="검사 결과 기준" onClick={() => handleMetricClick("registered")} />
        <MetricCard active={activeMetric === "today"} icon="⏰" label="오늘 기준 보충" value={`${todayIncompleteCount}명`} hint="오늘 처리 대상" onClick={() => handleMetricClick("today")} tone="warning" />
        <MetricCard active={activeMetric === "overdue"} icon="⚠️" label="지연 보충 학생" value={`${overdueStudentCount}명`} hint="클릭해서 목록 보기" onClick={() => handleMetricClick("overdue")} tone="warning" />
      </div>

      <div className="homeworkStatusContent">
        <section className="panel homeworkProgressPanel">
          <SectionHeader
            density="compact"
            description={activeMetricMeta.studentHint}
            title={activeMetricMeta.studentTitle}
          />
          <div className="homeworkMetricNotice">
            <strong>{metricLabels[activeMetric]}</strong>
            <span>{visibleStudents.length}명 표시 중</span>
          </div>
          <div className="homeworkGradeFilters">
            {["전체", "중1", "중2", "중3", "고1", "고2", "고3"].map((grade) => (
              <button
                className={gradeFilter === grade ? "active" : ""}
                key={grade}
                onClick={() => setGradeFilter(grade)}
                type="button"
              >
                {grade}
              </button>
            ))}
          </div>
          <div className="homeworkStudentGrid">
            {visibleStudents.length === 0 ? (
              <div className="emptyHomeworkBox compact">{activeMetricMeta.emptyStudents}</div>
            ) : null}
            {visibleStudents.map((student) => {
              const summary = getStudentHomeworkSummary(student);
              const isSelected = selectedStudent?.studentId === student.studentId;
              return (
                <button
                  className={isSelected ? "homeworkStudentTile active" : "homeworkStudentTile"}
                  key={student.studentId}
                  onClick={() => handleSelectStudent(student.studentId)}
                  type="button"
                >
                  <span className="homeworkStudentTop">
                    <strong>{student.name}</strong>
                    <small>{student.grade || "미입력"}</small>
                    <em>{summary.hasRegisteredHomework ? "대상" : "없음"}</em>
                    <b>{summary.progress}%</b>
                  </span>
                  <span className="homeworkProgressTrack">
                    <i style={{ width: `${summary.progress}%` }} />
                  </span>
                  <span className="homeworkStudentMeta">
                    {getStudentMetricLine(summary)}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="panel homeworkDetailPanel">
          <SectionHeader
            actions={(
              <>
              {selectedStudent ? (
                <button className="softButton" onClick={() => setStudentPreviewId(selectedStudent.studentId)} type="button">
                  👤 학생화면
                </button>
              ) : null}
              <button className="softButton" onClick={handleShowAllStudents} type="button">전체 대상</button>
              </>
            )}
            actionsClassName="detailActions"
            density="compact"
            description={detailScope === "all"
              ? `${visibleStudents.length}명 · ${activeMetricMeta.detailHint}`
              : selectedStudent ? `${selectedStudent.name} · ${activeMetricMeta.detailHint}` : "학생을 선택하세요"}
            title={activeMetricMeta.detailTitle}
          />
          {selectedHomeworks.length === 0 ? (
            <div className="emptyHomeworkBox">{activeMetricMeta.emptyHomeworks}</div>
          ) : null}
          <div className="homeworkDetailList">
            {selectedHomeworks.map((homework) => {
              const saveState = teacherHomeworkSaveStates[homework.homeworkId] ?? { message: "", state: "idle" };
              return (
                <article className="homeworkDetailCard" key={homework.homeworkId}>
                  <div>
                    <strong>{detailScope === "all" ? `${getHomeworkStudentName(homework)} · ${homework.title}` : homework.title}</strong>
                    <small>{homework.assignedDate} 배정 · {homework.dueDate || "-"} 마감</small>
                    <span className="homeworkProgressTrack">
                      <i style={{ width: homework.studentStatus === "checked_done" ? "100%" : "0%" }} />
                    </span>
                    <small>{homework.studentStatus === "checked_done" ? "학생 체크 완료" : "학생 체크 대기"}</small>
                  </div>
                  <div className="homeworkDetailControls">
                    <select
                      aria-label={`${getHomeworkStudentName(homework)} ${homework.title} 교사 확인 상태`}
                      disabled={saveState.state === "saving"}
                      value={homework.teacherStatus ?? "unverified"}
                      onChange={(event) => onTeacherVerifyHomework(homework.homeworkId, event.target.value)}
                    >
                      <option value="unverified">확인 대기</option>
                      <option value="verified">확인 완료</option>
                      <option value="partial">일부 완료</option>
                      <option value="missing">미완료</option>
                    </select>
                    <span className="actionHint">{getHomeworkAction(homework)}</span>
                    {saveState.state !== "idle" ? (
                      <div className={`teacherHomeworkSaveFeedback ${saveState.state}`} aria-live="polite" role="status">
                        <InlineSaveStatus label="교사 숙제 확인" saveState={saveState.state} />
                        {saveState.message ? <span>{saveState.message}</span> : null}
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      {studentPreviewId ? (
        <Modal
          backdropClassName="studentPortalPreviewBackdrop"
          className="studentPortalPreviewModal"
          title="학생 화면 미리보기"
          subtitle="숙제현황에서 선택한 학생 포털 화면입니다."
          onClose={() => setStudentPreviewId("")}
        >
          <StudentPortalV2
            homeworks={homeworks}
            lessons={lessons}
            materials={materials}
            makeupTasks={makeupTasks}
            records={records}
            reportSnapshots={reportSnapshots}
            scoreRecords={scoreRecords}
            sessionStudentId={studentPreviewId}
            students={students.filter((student) => student.studentId === studentPreviewId)}
            previewMode
            onLogout={() => setStudentPreviewId("")}
            onStudentCheckHomework={() => {}}
          />
        </Modal>
      ) : null}
    </section>
  );
}
