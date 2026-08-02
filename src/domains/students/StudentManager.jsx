import { useEffect, useState } from "react";
import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { FilterBar } from "../../shared/components/FilterBar.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { ListCard, ListCardActions } from "../../shared/components/ListCard.jsx";
import { ModalFooter } from "../../shared/components/Modal.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SelectionToolbar } from "../../shared/components/SelectionToolbar.jsx";
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";
import { buildStudentHandoverPdfModel, getStudentHandoverTitle, openStudentHandoverPdf } from "./studentHandoverPdf.js";
import { StudentProfileErrorBoundary, StudentProfileModal } from "./StudentProfileModal.jsx";
import { sortWithdrawnStudents } from "./studentListSort.js";

const withdrawalReasonOptions = [
  { value: "graduation", label: "졸업" },
  { value: "class_move", label: "반이동" },
  { value: "withdrawal", label: "퇴원" },
  { value: "other", label: "기타" }
];

function formatShortDate(date = "") {
  return date ? date.slice(5).replace("-", ".") : "날짜 미입력";
}

function isWithdrawnStudent(student = {}) {
  return (student.status ?? "active") !== "active" || Boolean(student.withdrawnAt);
}

function getStudentTallySubmissions(student = {}, intakeApplicants = []) {
  return intakeApplicants.filter((applicant) => {
    if (applicant.source !== "tally" || applicant.name !== student.name) return false;
    const sameStudentPhone = applicant.studentPhone && applicant.studentPhone === student.studentPhone;
    const sameParentPhone = applicant.parentPhone && applicant.parentPhone === student.parentPhone;
    const sameSchoolAndGrade = applicant.schoolName && applicant.schoolName === student.schoolName && applicant.grade && applicant.grade === student.grade;
    return sameStudentPhone || sameParentPhone || sameSchoolAndGrade;
  }).sort((left, right) => String(right.createdAt || "").localeCompare(String(left.createdAt || "")));
}

export function StudentManager({
  academyReminders = [],
  academyTests,
  academyTestSaveState = "idle",
  effects = {},
  scoreRecords,
  scoreRecordSaveState = "idle",
  studentConsultationSaveState = "idle",
  studentConsultations = [],
  studentProfileSaveStates = {},
  teacherOperatingMemos = {},
  teacherOperatingMemoSaveStates = {},
  homeworks = [],
  intakeApplicants = [],
  lessons = [],
  records = [],
  specialLectureApplications = [],
  students,
  templates,
  ModalComponent,
  onAddStudent
}) {
  const {
    draft: { onUpdateStudent } = {},
    persistence: {
      onSaveAcademyReminder,
      onSaveAcademyTest,
      onSaveScore,
      onSaveStudent,
      onSaveStudentConsultation,
      onSaveStudentProfile,
      onSaveTeacherOperatingMemo
    } = {},
    deletion: {
      onDeleteAcademyReminder,
      onDeleteAcademyTest,
      onDeleteScore,
      onDeleteStudentConsultation,
      onPermanentlyDeleteWithdrawnStudent
    } = {},
    lifecycle: {
      onDeleteStudent: onWithdrawStudent,
      onRestoreStudent
    } = {},
    audit: { onAuditWithdrawnStudentDeletion } = {}
  } = effects;
  const [activeTab, setActiveTab] = useState("all");
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [deleteStudentId, setDeleteStudentId] = useState("");
  const [withdrawalDraft, setWithdrawalDraft] = useState({ comment: "", reason: "other" });
  const [selectedClassTemplateId, setSelectedClassTemplateId] = useState("template_mwf_7_10");
  const [dirtyStudentIds, setDirtyStudentIds] = useState(() => new Set());
  const [originalClassTemplateIds, setOriginalClassTemplateIds] = useState({});
  const [studentSaveStates, setStudentSaveStates] = useState({});
  const [studentRestoreStates, setStudentRestoreStates] = useState({});
  const [studentRestoreNotice, setStudentRestoreNotice] = useState(null);
  const [permanentDeleteStudentId, setPermanentDeleteStudentId] = useState("");
  const [permanentDeleteAuditState, setPermanentDeleteAuditState] = useState("idle");
  const [permanentDeleteAudit, setPermanentDeleteAudit] = useState(null);
  const [permanentDeleteError, setPermanentDeleteError] = useState("");
  const [permanentDeleteConfirmation, setPermanentDeleteConfirmation] = useState("");
  const [forceDeleteWithReferences, setForceDeleteWithReferences] = useState(false);
  const [batchPermanentDeleteStudentIds, setBatchPermanentDeleteStudentIds] = useState([]);
  const [batchPermanentDeleteAuditState, setBatchPermanentDeleteAuditState] = useState("idle");
  const [batchPermanentDeleteAudits, setBatchPermanentDeleteAudits] = useState({});
  const [batchPermanentDeleteConfirmation, setBatchPermanentDeleteConfirmation] = useState("");
  const [batchForceDeleteWithReferences, setBatchForceDeleteWithReferences] = useState(false);
  const [batchPermanentDeleteError, setBatchPermanentDeleteError] = useState("");
  const [studentPermanentDeleteNotice, setStudentPermanentDeleteNotice] = useState(null);
  const [handoverStudentId, setHandoverStudentId] = useState("");
  const [handoverComment, setHandoverComment] = useState("");
  const [selectedWithdrawnStudentIds, setSelectedWithdrawnStudentIds] = useState(() => new Set());
  const [withdrawnStudentSort, setWithdrawnStudentSort] = useState("name");
  const selectedClassTemplate = templates.find(
    (template) => template.classTemplateId === selectedClassTemplateId
  );
  const selectedStudent = students.find((student) => student.studentId === selectedStudentId) ?? null;
  const deleteStudent = students.find((student) => student.studentId === deleteStudentId) ?? null;
  const permanentDeleteStudent = students.find((student) => student.studentId === permanentDeleteStudentId) ?? null;
  const batchPermanentDeleteStudents = batchPermanentDeleteStudentIds
    .map((studentId) => students.find((student) => student.studentId === studentId))
    .filter(Boolean);
  const handoverStudent = students.find((student) => student.studentId === handoverStudentId) ?? null;
  const selectedScores = scoreRecords.filter((score) => score.studentId === selectedStudent?.studentId);
  const selectedAcademyTests = academyTests.filter((item) => item.studentId === selectedStudent?.studentId);
  const selectedConsultations = studentConsultations
    .filter((item) => item.studentId === selectedStudent?.studentId)
    .sort((a, b) => String(b.consultationDate ?? "").localeCompare(String(a.consultationDate ?? "")));
  const selectedAcademyReminders = academyReminders
    .filter((item) => item.studentId === selectedStudent?.studentId)
    .sort((a, b) => (
      String(a.reminderDate || a.date || "").localeCompare(String(b.reminderDate || b.date || "")) ||
      String(a.reminderTime || a.time || "").localeCompare(String(b.reminderTime || b.time || ""))
    ));
  const activeStudents = students.filter((student) => !isWithdrawnStudent(student));
  const withdrawnStudents = students.filter(isWithdrawnStudent);
  const sortedWithdrawnStudents = sortWithdrawnStudents(withdrawnStudents, withdrawnStudentSort);
  const selectedWithdrawnStudents = withdrawnStudents.filter((student) => selectedWithdrawnStudentIds.has(student.studentId));
  const visibleStudents =
    activeTab === "withdrawn"
      ? sortedWithdrawnStudents
      : activeTab === "class"
        ? selectedClassTemplateId === "unassigned"
          ? activeStudents.filter((student) => !student.defaultClassTemplateId)
          : activeStudents.filter((student) => student.defaultClassTemplateId === selectedClassTemplateId)
        : activeStudents;
  const title =
    activeTab === "withdrawn"
      ? "퇴원생 목록"
      : activeTab === "class"
        ? `${selectedClassTemplateId === "unassigned" ? "미배정" : selectedClassTemplate?.name ?? "반별"} 학생 목록`
        : "전체 학생 목록";

  function getStudentClassName(student) {
    return templates.find((template) => template.classTemplateId === student.defaultClassTemplateId)?.name ?? "미배정";
  }

  useEffect(() => {
    if (selectedStudentId && !visibleStudents.some((student) => student.studentId === selectedStudentId)) {
      setSelectedStudentId("");
    }
  }, [selectedStudentId, visibleStudents]);

  useEffect(() => {
    const validIds = new Set(withdrawnStudents.map((student) => student.studentId));
    setSelectedWithdrawnStudentIds((current) => new Set([...current].filter((studentId) => validIds.has(studentId))));
  }, [withdrawnStudents]);

  function confirmDeleteStudent() {
    if (!deleteStudent) return;
    onWithdrawStudent(deleteStudent.studentId, withdrawalDraft);
    if (selectedStudentId === deleteStudent.studentId) {
      setSelectedStudentId("");
    }
    setDeleteStudentId("");
    setWithdrawalDraft({ comment: "", reason: "other" });
  }

  function updateStudentField(studentId, field, value) {
    if (field === "defaultClassTemplateId" && !Object.prototype.hasOwnProperty.call(originalClassTemplateIds, studentId)) {
      const currentStudent = students.find((student) => student.studentId === studentId);
      setOriginalClassTemplateIds((current) => ({
        ...current,
        [studentId]: currentStudent?.defaultClassTemplateId ?? ""
      }));
    }
    onUpdateStudent(studentId, field, value, { persist: false });
    setDirtyStudentIds((current) => new Set(current).add(studentId));
    setStudentSaveStates((current) => ({ ...current, [studentId]: "dirty" }));
  }

  async function saveStudentRow(studentId) {
    setStudentSaveStates((current) => ({ ...current, [studentId]: "saving" }));
    try {
      const saveOptions = Object.prototype.hasOwnProperty.call(originalClassTemplateIds, studentId)
        ? { previousClassTemplateId: originalClassTemplateIds[studentId] }
        : {};
      await onSaveStudent(studentId, saveOptions);
      setDirtyStudentIds((current) => {
        const next = new Set(current);
        next.delete(studentId);
        return next;
      });
      setOriginalClassTemplateIds((current) => {
        const next = { ...current };
        delete next[studentId];
        return next;
      });
      setStudentSaveStates((current) => ({ ...current, [studentId]: "saved" }));
    } catch (error) {
      console.error(error);
      setStudentSaveStates((current) => ({ ...current, [studentId]: "failed" }));
    }
  }

  function getStudentSaveLabel(studentId) {
    const saveState = studentSaveStates[studentId];
    if (saveState === "saving") return "저장 중";
    if (saveState === "saved") return "저장됨";
    if (saveState === "failed") return "재시도";
    return "저장";
  }

  function openWithdrawStudentModal(student) {
    setWithdrawalDraft({
      comment: student.withdrawalComment ?? "",
      reason: student.withdrawalReason || "other"
    });
    setDeleteStudentId(student.studentId);
  }

  function openHandoverModal(student) {
    setHandoverStudentId(student.studentId);
    setHandoverComment("");
  }

  function toggleWithdrawnStudentSelection(studentId) {
    setSelectedWithdrawnStudentIds((current) => {
      const next = new Set(current);
      if (next.has(studentId)) next.delete(studentId);
      else next.add(studentId);
      return next;
    });
  }

  function selectAllVisibleWithdrawnStudents() {
    setSelectedWithdrawnStudentIds(new Set(visibleStudents.map((student) => student.studentId)));
  }

  function getSingleSelectedWithdrawnStudent(actionLabel) {
    if (selectedWithdrawnStudents.length !== 1) {
      setStudentRestoreNotice({ message: `${actionLabel}은 퇴원생 1명을 선택한 뒤 실행해 주세요.`, saveState: "failed" });
      return null;
    }
    return selectedWithdrawnStudents[0];
  }

  async function saveSelectedWithdrawnStudents() {
    const dirtyIds = selectedWithdrawnStudents
      .filter((student) => dirtyStudentIds.has(student.studentId))
      .map((student) => student.studentId);
    if (!dirtyIds.length) {
      setStudentRestoreNotice({ message: "선택한 퇴원생 중 저장할 변경이 없습니다.", saveState: "saved" });
      return;
    }
    for (const studentId of dirtyIds) await saveStudentRow(studentId);
  }

  function printStudentHandover() {
    if (!handoverStudent) return;
    const model = buildStudentHandoverPdfModel({
      comment: handoverComment,
      homeworks,
      intakeApplicants,
      lessons,
      records,
      specialLectureApplications,
      student: handoverStudent,
      templates
    });
    openStudentHandoverPdf(model, handoverStudent);
  }

  async function restoreStudent(student) {
    if (!student?.studentId || studentRestoreStates[student.studentId] === "saving") return;
    const shouldRestore = window.confirm(
      `${student.name} 학생의 퇴원 처리를 취소할까요?\n\n학생 상태만 재원으로 복원합니다. 퇴원 당시 제외된 반과 미래 수업 명단은 자동으로 되돌리지 않습니다.`
    );
    if (!shouldRestore) return;

    setStudentRestoreStates((current) => ({ ...current, [student.studentId]: "saving" }));
    setStudentRestoreNotice({
      message: `${student.name} 학생 원천 저장 중`,
      saveState: "saving"
    });
    try {
      await onRestoreStudent(student.studentId);
      setStudentRestoreStates((current) => ({ ...current, [student.studentId]: "saved" }));
      setStudentRestoreNotice({
        message: `${student.name} 학생의 퇴원 취소를 Supabase 재조회로 확인했습니다. 반·미래 수업 명단은 별도로 확인해 주세요.`,
        saveState: "saved"
      });
      if (selectedStudentId === student.studentId) {
        setSelectedStudentId("");
      }
    } catch (error) {
      console.error(error);
      setStudentRestoreStates((current) => ({ ...current, [student.studentId]: "failed" }));
      setStudentRestoreNotice({
        message: error.message || `${student.name} 학생의 퇴원 취소에 실패했습니다.`,
        saveState: "failed"
      });
    }
  }

  async function openPermanentDeleteModal(student) {
    if (!student?.studentId) return;
    setPermanentDeleteStudentId(student.studentId);
    setPermanentDeleteAuditState("saving");
    setPermanentDeleteAudit(null);
    setPermanentDeleteError("");
    setPermanentDeleteConfirmation("");
    setForceDeleteWithReferences(false);
    try {
      const audit = await onAuditWithdrawnStudentDeletion(student.studentId);
      setPermanentDeleteAudit(audit);
      setPermanentDeleteAuditState("saved");
    } catch (error) {
      console.error(error);
      setPermanentDeleteAudit(error.audit ?? null);
      setPermanentDeleteAuditState("failed");
      setPermanentDeleteError(error.message || "학생 연결 기록 점검에 실패했습니다.");
    }
  }

  async function openBatchPermanentDeleteModal(targetStudents) {
    if (!targetStudents.length) return;
    const studentIds = targetStudents.map((student) => student.studentId);
    setBatchPermanentDeleteStudentIds(studentIds);
    setBatchPermanentDeleteAuditState("saving");
    setBatchPermanentDeleteAudits({});
    setBatchPermanentDeleteConfirmation("");
    setBatchForceDeleteWithReferences(false);
    setBatchPermanentDeleteError("");
    try {
      const auditEntries = await Promise.all(targetStudents.map(async (student) => [
        student.studentId,
        await onAuditWithdrawnStudentDeletion(student.studentId)
      ]));
      setBatchPermanentDeleteAudits(Object.fromEntries(auditEntries));
      setBatchPermanentDeleteAuditState("saved");
    } catch (error) {
      console.error(error);
      setBatchPermanentDeleteAuditState("failed");
      setBatchPermanentDeleteError(error.message || "선택 학생의 연결 기록 점검에 실패했습니다. 삭제하지 않았습니다.");
    }
  }

  function closePermanentDeleteModal() {
    if (permanentDeleteAuditState === "saving") return;
    setPermanentDeleteStudentId("");
    setPermanentDeleteAuditState("idle");
    setPermanentDeleteAudit(null);
    setPermanentDeleteError("");
    setPermanentDeleteConfirmation("");
    setForceDeleteWithReferences(false);
  }

  function closeBatchPermanentDeleteModal() {
    if (batchPermanentDeleteAuditState === "saving") return;
    setBatchPermanentDeleteStudentIds([]);
    setBatchPermanentDeleteAuditState("idle");
    setBatchPermanentDeleteAudits({});
    setBatchPermanentDeleteConfirmation("");
    setBatchForceDeleteWithReferences(false);
    setBatchPermanentDeleteError("");
  }

  async function permanentlyDeleteWithdrawnStudent() {
    if (
      !permanentDeleteStudent?.studentId ||
      !permanentDeleteAudit ||
      (!permanentDeleteAudit.allowed && !forceDeleteWithReferences) ||
      permanentDeleteConfirmation.trim() !== permanentDeleteStudent.name?.trim()
    ) return;

    const blockingCount = (permanentDeleteAudit.blockingReferences ?? [])
      .reduce((sum, reference) => sum + Number(reference.count || 0), 0);
    const shouldDelete = window.confirm(
      permanentDeleteAudit.allowed
        ? `${permanentDeleteStudent.name} 학생 원천을 영구 삭제합니다.\n삭제 후 복구할 수 없습니다.\n\n그래도 삭제하시겠습니까?`
        : `${permanentDeleteStudent.name} 학생과 연결된 기록 ${blockingCount}건을 함께 정리하거나 삭제합니다.\n수업일지·출결·숙제·특강·알림·상담 기록 등이 영향을 받을 수 있고 복구할 수 없습니다.\n\n그래도 삭제하시겠습니까?`
    );
    if (!shouldDelete) return;

    setPermanentDeleteAuditState("saving");
    setPermanentDeleteError("");
    setStudentPermanentDeleteNotice({
      message: `${permanentDeleteStudent.name} 학생 삭제 중 · Supabase 재조회 전`,
      saveState: "saving"
    });
    try {
      await onPermanentlyDeleteWithdrawnStudent(
        permanentDeleteStudent.studentId,
        permanentDeleteConfirmation.trim(),
        {
          forceDeleteWithReferences: !permanentDeleteAudit.allowed,
          expectedReferenceFingerprint: permanentDeleteAudit.referenceFingerprint
        }
      );
      setStudentPermanentDeleteNotice({
        message: `${permanentDeleteStudent.name} 중복 학생 원천 삭제를 Supabase 재조회로 확인했습니다.${permanentDeleteAudit.allowed ? "" : " 정리된 연결 원천을 다시 불러오기 위해 화면을 새로고침합니다."}`,
        saveState: "saved"
      });
      if (selectedStudentId === permanentDeleteStudent.studentId) {
        setSelectedStudentId("");
      }
      setPermanentDeleteStudentId("");
      setPermanentDeleteAuditState("idle");
      setPermanentDeleteAudit(null);
      setPermanentDeleteConfirmation("");
      setForceDeleteWithReferences(false);
    } catch (error) {
      console.error(error);
      setPermanentDeleteAudit(error.audit ?? permanentDeleteAudit);
      setPermanentDeleteAuditState("failed");
      setPermanentDeleteError(error.message || "학생 영구 삭제에 실패했습니다.");
      setStudentPermanentDeleteNotice({
        message: error.message || `${permanentDeleteStudent.name} 학생 영구 삭제에 실패했습니다.`,
        saveState: "failed"
      });
    }
  }

  async function permanentlyDeleteSelectedWithdrawnStudents() {
    const audits = batchPermanentDeleteStudents.map((student) => batchPermanentDeleteAudits[student.studentId]);
    const hasBlockedReferences = audits.some((audit) => audit && !audit.allowed);
    if (
      batchPermanentDeleteStudents.length === 0 ||
      audits.some((audit) => !audit) ||
      (hasBlockedReferences && !batchForceDeleteWithReferences) ||
      batchPermanentDeleteConfirmation.trim() !== "영구 삭제"
    ) return;

    const studentNames = batchPermanentDeleteStudents.map((student) => student.name).join(", ");
    if (!window.confirm(`선택한 ${batchPermanentDeleteStudents.length}명(${studentNames})을 영구 삭제합니다.\n삭제 후 복구할 수 없습니다.\n\n그래도 삭제하시겠습니까?`)) return;

    setBatchPermanentDeleteAuditState("saving");
    setBatchPermanentDeleteError("");
    try {
      for (const student of batchPermanentDeleteStudents) {
        const audit = batchPermanentDeleteAudits[student.studentId];
        await onPermanentlyDeleteWithdrawnStudent(student.studentId, student.name?.trim(), {
          deferReload: true,
          forceDeleteWithReferences: !audit.allowed,
          expectedReferenceFingerprint: audit.referenceFingerprint
        });
      }
      setSelectedWithdrawnStudentIds(new Set());
      setStudentPermanentDeleteNotice({
        message: `선택한 ${batchPermanentDeleteStudents.length}명 삭제를 Supabase 재조회로 확인했습니다.${hasBlockedReferences ? " 연결 원천을 다시 불러오기 위해 화면을 새로고침합니다." : ""}`,
        saveState: "saved"
      });
      if (hasBlockedReferences) {
        window.setTimeout(() => window.location.reload(), 1200);
      }
      closeBatchPermanentDeleteModal();
    } catch (error) {
      console.error(error);
      setBatchPermanentDeleteAuditState("failed");
      setBatchPermanentDeleteError(error.message || "선택 학생 영구 삭제에 실패했습니다. 이미 삭제된 학생은 다시 실행하지 마세요.");
    }
  }

  return (
    <section className="panel fullPanel">
      <PageHeader
        actions={(
          <>
          <button className="primaryButton" onClick={onAddStudent} type="button">+ 학생 추가</button>
          <span className="studentStatusPill">{title} · {visibleStudents.length}명</span>
          <span className="studentStatusPill mutedPill">퇴원생은 과거 기록 보존</span>
          </>
        )}
        actionsClassName="studentListToolbar"
        as="div"
        className="domainPanelHeader studentManagerHeader"
        description={`현재 ${title} ${visibleStudents.length}명 · 학생 기본정보와 운영 기록을 관리합니다.`}
        title="학생관리"
      />

      <WorkspaceTabs className="studentManagerTabs" label="학생관리 목록 구분">
        <button
          aria-selected={activeTab === "all"}
          className={activeTab === "all" ? "active" : ""}
          onClick={() => {
            setActiveTab("all");
            setSelectedStudentId("");
          }}
          role="tab"
          type="button"
        >
          전체 학생 목록
        </button>
        <button
          aria-selected={activeTab === "class"}
          className={activeTab === "class" ? "active" : ""}
          onClick={() => {
            setActiveTab("class");
            setSelectedStudentId("");
          }}
          role="tab"
          type="button"
        >
          반별 학생 목록
        </button>
        <button
          aria-selected={activeTab === "withdrawn"}
          className={activeTab === "withdrawn" ? "active" : ""}
          onClick={() => {
            setActiveTab("withdrawn");
            setSelectedStudentId("");
          }}
          role="tab"
          type="button"
        >
          퇴원생 목록
        </button>
      </WorkspaceTabs>

      {studentRestoreNotice ? (
        <div className={`studentRestoreNotice ${studentRestoreNotice.saveState}`} role={studentRestoreNotice.saveState === "failed" ? "alert" : "status"}>
          <InlineSaveStatus label="퇴원 취소" saveState={studentRestoreNotice.saveState} />
          <span>{studentRestoreNotice.message}</span>
        </div>
      ) : null}

      {studentPermanentDeleteNotice ? (
        <div className={`studentRestoreNotice ${studentPermanentDeleteNotice.saveState}`} role={studentPermanentDeleteNotice.saveState === "failed" ? "alert" : "status"}>
          <InlineSaveStatus label="중복 학생 삭제" saveState={studentPermanentDeleteNotice.saveState} />
          <span>{studentPermanentDeleteNotice.message}</span>
        </div>
      ) : null}

      {activeTab === "class" ? (
        <FilterBar className="classTabList" label="학생 반 필터">
          {templates.map((template) => {
            const count = activeStudents.filter((student) => student.defaultClassTemplateId === template.classTemplateId).length;
            return (
              <button
                aria-pressed={selectedClassTemplateId === template.classTemplateId}
                className={`filterBarOption${selectedClassTemplateId === template.classTemplateId ? " active" : ""}`}
                key={template.classTemplateId}
                onClick={() => {
                  setSelectedClassTemplateId(template.classTemplateId);
                  setSelectedStudentId("");
                }}
                type="button"
              >
                <strong>{template.name}</strong>
                <span>{count}명</span>
              </button>
            );
          })}
          <button
            aria-pressed={selectedClassTemplateId === "unassigned"}
            className={`filterBarOption${selectedClassTemplateId === "unassigned" ? " active" : ""}`}
            onClick={() => {
              setSelectedClassTemplateId("unassigned");
              setSelectedStudentId("");
            }}
            type="button"
          >
            <strong>미배정</strong>
            <span>{activeStudents.filter((student) => !student.defaultClassTemplateId).length}명</span>
          </button>
        </FilterBar>
      ) : null}

      {activeTab === "withdrawn" ? (
        <>
          <div className="studentListToolbar withdrawnStudentSort">
            <label>
              정렬
              <select aria-label="퇴원생 정렬" onChange={(event) => setWithdrawnStudentSort(event.target.value)} value={withdrawnStudentSort}>
                <option value="name">이름순</option>
                <option value="withdrawn_date">퇴원일순 (최근)</option>
              </select>
            </label>
          </div>
          <DataTableShell className="studentListTable" label="퇴원생 목록">
          <div className="studentListRow studentListHead withdrawnStudentRow">
            <span>선택</span>
            <span>이름</span>
            <span>반</span>
            <span>학년</span>
            <span>학교</span>
            <span>학생전화번호</span>
            <span>학부모전화번호</span>
            <span>출생연도</span>
            <span>퇴원일</span>
            <span>퇴원 사유</span>
            <span>코멘트</span>
          </div>
          {visibleStudents.map((student, index) => {
            const isDirty = dirtyStudentIds.has(student.studentId);
            return (
              <div className={["studentListRow", "withdrawnStudentRow", isDirty ? "dirtyStudentRow" : ""].filter(Boolean).join(" ")} key={student.studentId}>
                <label className="withdrawnStudentSelect"><input checked={selectedWithdrawnStudentIds.has(student.studentId)} onChange={() => toggleWithdrawnStudentSelection(student.studentId)} type="checkbox" /></label>
                <button
                  className={selectedStudentId === student.studentId ? "studentNameButton active" : "studentNameButton"}
                  onClick={() => setSelectedStudentId(student.studentId)}
                  type="button"
                >
                  <span className="studentInitial">{student.name?.[0] ?? "학"}</span>
                  <strong>{student.name}</strong>
                </button>
                <span>{getStudentClassName(student)}</span>
                <span className="gradeBadge">{student.grade || "-"}</span>
                <span>{student.schoolName || "-"}</span>
                <span className="monoCell">{student.studentPhone || "-"}</span>
                <span className="monoCell">{student.parentPhone || "-"}</span>
                <span>{student.birthYear ? `${student.birthYear}년` : "-"}</span>
                <span>{student.withdrawnAt ? formatShortDate(String(student.withdrawnAt).slice(0, 10)) : "-"}</span>
                <select
                  aria-label={`${student.name} 퇴원 사유`}
                  className="withdrawalReasonSelect"
                  value={student.withdrawalReason || "other"}
                  onChange={(event) => updateStudentField(student.studentId, "withdrawalReason", event.target.value)}
                >
                  {withdrawalReasonOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <input
                  aria-label={`${student.name} 퇴원 코멘트`}
                  className="editableTextCell withdrawalCommentInput"
                  value={student.withdrawalComment ?? ""}
                  onChange={(event) => updateStudentField(student.studentId, "withdrawalComment", event.target.value)}
                  placeholder="퇴원 관련 코멘트"
                />
              </div>
            );
          })}
          {visibleStudents.length === 0 ? (
            <EmptyState className="emptyState studentListEmpty" title="퇴원생이 없습니다." />
          ) : null}
          </DataTableShell>
          <SelectionToolbar
            actions={(
              <>
                <button className="softButton compact" onClick={selectAllVisibleWithdrawnStudents} type="button">전체 선택</button>
                <button className="softButton compact" onClick={() => setSelectedWithdrawnStudentIds(new Set())} type="button">선택 해제</button>
                <button className="primaryButton compact" disabled={!selectedWithdrawnStudents.some((student) => dirtyStudentIds.has(student.studentId))} onClick={saveSelectedWithdrawnStudents} type="button">선택 저장</button>
                <button className="studentRestoreButton" disabled={selectedWithdrawnStudents.length !== 1} onClick={() => { const student = getSingleSelectedWithdrawnStudent("퇴원 취소"); if (student) restoreStudent(student); }} type="button">퇴원 취소</button>
                <button className="softButton compact" disabled={selectedWithdrawnStudents.length !== 1} onClick={() => { const student = getSingleSelectedWithdrawnStudent("인수인계서 PDF"); if (student) openHandoverModal(student); }} type="button">인수인계서 PDF</button>
              </>
            )}
            className="withdrawnStudentBulkActions"
            dangerActions={(
              <button className="studentPermanentDeleteButton" disabled={selectedWithdrawnStudents.length === 0} onClick={() => {
                if (selectedWithdrawnStudents.length === 1) openPermanentDeleteModal(selectedWithdrawnStudents[0]);
                else openBatchPermanentDeleteModal(selectedWithdrawnStudents);
              }} type="button">영구 삭제</button>
            )}
            label="퇴원생 선택"
            selectedCount={selectedWithdrawnStudents.length}
            totalCount={visibleStudents.length}
          />
        </>
      ) : (
        <DataTableShell className="studentListTable" label="학생 목록">
          <div className="studentListRow studentListHead">
            <span>#</span>
            <span>이름</span>
            <span>반</span>
            <span>아이디</span>
            <span>PIN</span>
            <span>학년</span>
            <span>학교</span>
            <span>학생전화번호</span>
            <span>학부모전화번호</span>
            <span>출생연도</span>
            <span>저장</span>
            <span>퇴원</span>
          </div>
          {visibleStudents.map((student, index) => {
            const saveState = studentSaveStates[student.studentId];
            const isDirty = dirtyStudentIds.has(student.studentId);
            const isSaving = saveState === "saving";
            const isSaveDisabled = !isDirty || isSaving;
            return (
              <div className={isDirty ? "studentListRow dirtyStudentRow" : "studentListRow"} key={student.studentId}>
                <span>{index + 1}</span>
                <button
                  className={selectedStudentId === student.studentId ? "studentNameButton active" : "studentNameButton"}
                  onClick={() => setSelectedStudentId(student.studentId)}
                  type="button"
                >
                  <span className="studentInitial">{student.name?.[0] ?? "학"}</span>
                  <strong>{student.name}</strong>
                </button>
                <select
                  aria-label={`${student.name} 반`}
                  className="studentClassSelect"
                  value={student.defaultClassTemplateId ?? ""}
                  onChange={(event) => updateStudentField(student.studentId, "defaultClassTemplateId", event.target.value)}
                >
                  <option value="">미배정</option>
                  {templates.map((template) => (
                    <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
                  ))}
                </select>
                <input
                  aria-label={`${student.name} 아이디`}
                  className="editableTextCell monoCell"
                  value={student.loginId ?? ""}
                  onChange={(event) => updateStudentField(student.studentId, "loginId", event.target.value)}
                />
                <input
                  aria-label={`${student.name} PIN`}
                  className="editableTextCell monoCell"
                  value={student.pin ?? ""}
                  onChange={(event) => updateStudentField(student.studentId, "pin", event.target.value)}
                />
                <input
                  aria-label={`${student.name} 학년`}
                  className="editableTextCell gradeBadgeInput"
                  value={student.grade || ""}
                  onChange={(event) => updateStudentField(student.studentId, "grade", event.target.value)}
                />
                <input
                  aria-label={`${student.name} 학교`}
                  className="editableTextCell"
                  value={student.schoolName || ""}
                  onChange={(event) => updateStudentField(student.studentId, "schoolName", event.target.value)}
                />
                <input
                  aria-label={`${student.name} 학생 전화번호`}
                  className="editableTextCell monoCell"
                  inputMode="tel"
                  value={student.studentPhone || ""}
                  onChange={(event) => updateStudentField(student.studentId, "studentPhone", event.target.value)}
                />
                <input
                  aria-label={`${student.name} 학부모 전화번호`}
                  className="editableTextCell monoCell"
                  inputMode="tel"
                  value={student.parentPhone || ""}
                  onChange={(event) => updateStudentField(student.studentId, "parentPhone", event.target.value)}
                />
                <select
                  aria-label={`${student.name} 출생연도`}
                  value={student.birthYear ?? ""}
                  onChange={(event) => updateStudentField(student.studentId, "birthYear", event.target.value)}
                >
                  <option value="">-</option>
                  {["2007", "2008", "2009", "2010", "2011", "2012", "2013"].map((year) => (
                    <option key={year} value={year}>{year}년</option>
                  ))}
                </select>
                <button
                  className={`studentSaveButton ${saveState ?? "clean"}`}
                  disabled={isSaveDisabled}
                  onClick={() => saveStudentRow(student.studentId)}
                  type="button"
                >
                  {getStudentSaveLabel(student.studentId)}
                </button>
                <button
                  aria-label={`${student.name} 퇴원 처리`}
                  className="trashButton"
                  onClick={() => openWithdrawStudentModal(student)}
                  type="button"
                >
                  퇴원
                </button>
              </div>
            );
          })}
          {visibleStudents.length === 0 ? (
            <EmptyState
              className="emptyState studentListEmpty"
              description={activeTab === "class" ? "다른 반 또는 전체 학생 탭을 확인하세요." : "학생 추가 후 목록에 표시됩니다."}
              title={activeTab === "class" ? "이 반에 배정된 학생이 없습니다." : "등록된 재원생이 없습니다."}
            />
          ) : null}
        </DataTableShell>
      )}

      {selectedStudent ? (
        <StudentProfileErrorBoundary
          key={selectedStudent.studentId}
          ModalComponent={ModalComponent}
          onClose={() => setSelectedStudentId("")}
          studentName={selectedStudent.name}
        >
          <StudentProfileModal
            academyTests={selectedAcademyTests}
            academyReminders={selectedAcademyReminders}
            className={getStudentClassName(selectedStudent)}
            ModalComponent={ModalComponent}
            onClose={() => setSelectedStudentId("")}
            onDeleteAcademyTest={onDeleteAcademyTest}
            onDeleteAcademyReminder={onDeleteAcademyReminder}
            onDeleteScore={onDeleteScore}
            onDeleteStudentConsultation={onDeleteStudentConsultation}
            onSaveAcademyTest={onSaveAcademyTest}
            onSaveAcademyReminder={onSaveAcademyReminder}
            onSaveScore={onSaveScore}
            onSaveStudentProfile={onSaveStudentProfile}
            onSaveTeacherOperatingMemo={onSaveTeacherOperatingMemo}
            onSaveStudentConsultation={onSaveStudentConsultation}
            scores={selectedScores}
            academyTestSaveState={academyTestSaveState}
            scoreRecordSaveState={scoreRecordSaveState}
            studentConsultationSaveState={studentConsultationSaveState}
            consultations={selectedConsultations}
            lessons={lessons}
            records={records}
            tallySubmissions={getStudentTallySubmissions(selectedStudent, intakeApplicants)}
            teacherOperatingMemo={teacherOperatingMemos[selectedStudent.studentId] ?? ""}
            teacherOperatingMemoSaveState={teacherOperatingMemoSaveStates[selectedStudent.studentId] ?? "idle"}
            studentProfileSaveState={studentProfileSaveStates[selectedStudent.studentId] ?? "idle"}
            student={selectedStudent}
          />
        </StudentProfileErrorBoundary>
      ) : null}

      {deleteStudent ? (
        <ModalComponent
          className="studentDeleteModal"
          onClose={() => setDeleteStudentId("")}
          subtitle="퇴원 처리하면 학생 목록과 다음 날 이후 수업 명단에서는 제외되고, 등원일부터 퇴원일까지의 수업기록은 보존됩니다."
          title="학생 퇴원 처리 확인"
        >
          <div className="deleteConfirmBody">
            <div className="deleteConfirmStudent">
              <span className="studentInitial">{deleteStudent.name?.[0] ?? "학"}</span>
              <div>
                <strong>{deleteStudent.name}</strong>
                <p className="muted">
                  {[deleteStudent.grade, deleteStudent.schoolName].filter(Boolean).join(" · ") || "기본 정보 없음"}
                </p>
              </div>
            </div>
            <div className="deleteWarningBox">
              <span>아이디</span>
              <strong>{deleteStudent.loginId || "-"}</strong>
              <span>PIN</span>
              <strong>{deleteStudent.pin || "-"}</strong>
            </div>
            <p className="dangerCopy">정말 이 학생을 퇴원 처리할까요? 등원일부터 퇴원일까지의 학생·수업·수업기록·출결·숙제는 보존하고, 다음 날 이후 수업 명단에서만 제외합니다.</p>
            <div className="withdrawalReasonGrid">
              <label>
                퇴원 사유
                <select
                  value={withdrawalDraft.reason}
                  onChange={(event) => setWithdrawalDraft((current) => ({ ...current, reason: event.target.value }))}
                >
                  {withdrawalReasonOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
              <label>
                코멘트
                <input
                  value={withdrawalDraft.comment}
                  onChange={(event) => setWithdrawalDraft((current) => ({ ...current, comment: event.target.value }))}
                  placeholder="예: 보호자 요청, 시간표 조정 등"
                />
              </label>
            </div>
          </div>
          <ModalFooter tone="danger">
            <button className="softButton" onClick={() => setDeleteStudentId("")} type="button">취소</button>
            <button className="dangerButton" onClick={confirmDeleteStudent} type="button">퇴원 처리</button>
          </ModalFooter>
        </ModalComponent>
      ) : null}

      {handoverStudent ? (
        <ModalComponent className="studentHandoverModal" onClose={() => setHandoverStudentId("")} scrollable subtitle="수업·출결·숙제와 Tally 접수정보를 읽어 PDF 인쇄 창을 엽니다. 원천 데이터는 수정하지 않습니다." title={`${handoverStudent.name} ${getStudentHandoverTitle(handoverStudent)}`}>
          <div className="deleteConfirmBody">
            <p className="muted">등원일부터 퇴원일({String(handoverStudent.withdrawnAt || "").slice(0, 10) || "미입력"})까지의 수업만 포함합니다.</p>
            <label>교사 인계 코멘트<textarea value={handoverComment} onChange={(event) => setHandoverComment(event.target.value)} placeholder="재등록 시 참고사항, 보호자 전달사항 등을 입력하세요. 이 코멘트는 이번 PDF에만 포함되며 저장하지 않습니다." rows={7} /></label>
          </div>
          <ModalFooter><button className="softButton" onClick={() => setHandoverStudentId("")} type="button">닫기</button><button className="primaryButton" onClick={printStudentHandover} type="button">PDF 인쇄 창 열기</button></ModalFooter>
        </ModalComponent>
      ) : null}

      {permanentDeleteStudent ? (
        <ModalComponent
          className="studentPermanentDeleteModal"
          closeDisabled={permanentDeleteAuditState === "saving"}
          onClose={closePermanentDeleteModal}
          subtitle="연결 기록을 먼저 확인합니다. 기록이 있어도 영향 범위를 확인한 뒤 강제 삭제할 수 있으며, 삭제 후에는 복구할 수 없습니다."
          title="퇴원 중복 데이터 영구 삭제"
        >
          <div className="permanentDeleteStudentSummary">
            <span className="studentInitial">{permanentDeleteStudent.name?.[0] ?? "학"}</span>
            <div>
              <strong>{permanentDeleteStudent.name}</strong>
              <p className="muted">
                {[permanentDeleteStudent.grade, permanentDeleteStudent.schoolName, permanentDeleteStudent.studentId]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </div>
          </div>

          {permanentDeleteAuditState === "saving" ? (
            <div className="permanentDeleteAuditStatus" role="status">
              <InlineSaveStatus label="연결 기록 점검 / 삭제" saveState="saving" />
              <p>Supabase의 수업·출결·숙제·특강·알림·운영 저장 데이터를 확인하고 있습니다.</p>
            </div>
          ) : null}

          {permanentDeleteAuditState !== "saving" && permanentDeleteAudit?.allowed ? (
            <div className="permanentDeleteSafeBox">
              <strong>삭제 가능 · 연결된 운영 기록 0건</strong>
              <p>학생 원천 행만 삭제하며, 삭제 뒤 Supabase 학생 목록을 다시 조회해 사라진 것을 확인합니다.</p>
            </div>
          ) : null}

          {permanentDeleteAuditState !== "saving" && permanentDeleteAudit && !permanentDeleteAudit.allowed ? (
            <div className="permanentDeleteBlockedBox" role="alert">
              <strong>주의 · 연결 기록이 있습니다</strong>
              <ul>
                {permanentDeleteAudit.blockingReferences.map((reference) => (
                  <li key={reference.table}>
                    {reference.label} {reference.count}건
                    {reference.matchedKeys?.length ? ` (${reference.matchedKeys.join(", ")})` : ""}
                  </li>
                ))}
              </ul>
              <p>강제 삭제하면 수업 명단·자료·운영 저장 참조를 정리하고, DB 정책에 따라 수업일지·숙제·성적·시험 제출 등 연결 기록이 함께 삭제되거나 학생 연결이 해제됩니다.</p>
            </div>
          ) : null}

          {permanentDeleteError ? (
            <div className="permanentDeleteError" role="alert">{permanentDeleteError}</div>
          ) : null}

          {permanentDeleteAuditState !== "saving" && permanentDeleteAudit && !permanentDeleteAudit.allowed ? (
            <label className="permanentDeleteForceField">
              <input
                checked={forceDeleteWithReferences}
                onChange={(event) => setForceDeleteWithReferences(event.target.checked)}
                type="checkbox"
              />
              <span>표시된 연결 기록이 함께 정리·삭제되거나 학생 연결이 해제될 수 있음을 확인했습니다.</span>
            </label>
          ) : null}

          {permanentDeleteAuditState !== "saving" && permanentDeleteAudit ? (
            <label className="permanentDeleteConfirmationField">
              영구 삭제하려면 학생 이름 <strong>{permanentDeleteStudent.name}</strong>을 정확히 입력
              <input
                autoComplete="off"
                value={permanentDeleteConfirmation}
                onChange={(event) => setPermanentDeleteConfirmation(event.target.value)}
                placeholder={permanentDeleteStudent.name}
              />
            </label>
          ) : null}

          <ModalFooter tone="danger">
            <button
              className="softButton"
              disabled={permanentDeleteAuditState === "saving"}
              onClick={closePermanentDeleteModal}
              type="button"
            >
              닫기
            </button>
            {permanentDeleteAudit ? (
              <button
                className="dangerButton"
                disabled={
                  permanentDeleteAuditState === "saving" ||
                  (!permanentDeleteAudit.allowed && !forceDeleteWithReferences) ||
                  permanentDeleteConfirmation.trim() !== permanentDeleteStudent.name?.trim()
                }
                onClick={permanentlyDeleteWithdrawnStudent}
                type="button"
              >
                {permanentDeleteAuditState === "saving"
                  ? "삭제 및 확인 중"
                  : permanentDeleteAudit.allowed
                    ? "학생 원천 영구 삭제"
                    : "연결 기록 포함 강제 삭제"}
              </button>
            ) : null}
          </ModalFooter>
        </ModalComponent>
      ) : null}

      {batchPermanentDeleteStudents.length ? (
        <ModalComponent
          className="studentPermanentDeleteModal"
          closeDisabled={batchPermanentDeleteAuditState === "saving"}
          onClose={closeBatchPermanentDeleteModal}
          subtitle="선택한 학생별 연결 기록을 Supabase에서 먼저 점검합니다. 실제 삭제는 아래 최종 확인 뒤에만 실행됩니다."
          title={`퇴원생 ${batchPermanentDeleteStudents.length}명 영구 삭제`}
        >
          {batchPermanentDeleteAuditState === "saving" ? (
            <div className="permanentDeleteAuditStatus" role="status"><InlineSaveStatus label="선택 학생 연결 기록 점검" saveState="saving" /></div>
          ) : null}
          {batchPermanentDeleteAuditState !== "saving" ? (
            <div className="batchPermanentDeleteTargetList">
              <strong>삭제 대상 및 연결 데이터</strong>
              <ul>{batchPermanentDeleteStudents.map((student) => {
                const audit = batchPermanentDeleteAudits[student.studentId];
                const references = audit?.blockingReferences ?? [];
                const referenceCount = references.reduce((sum, reference) => sum + Number(reference.count || 0), 0);
                return (
                  <li key={student.studentId}>
                    <div><strong>{student.name}</strong><span>{audit?.allowed ? "연결 기록 0건 · 학생 원천만 삭제 가능" : `연결 기록 ${referenceCount}건`}</span></div>
                    {!audit?.allowed ? <p>{references.map((reference) => `${reference.label} ${reference.count}건`).join(" · ")}</p> : null}
                  </li>
                );
              })}</ul>
            </div>
          ) : null}
          {batchPermanentDeleteError ? <div className="permanentDeleteError" role="alert">{batchPermanentDeleteError}</div> : null}
          {batchPermanentDeleteAuditState === "saved" ? (
            <>
              {batchPermanentDeleteStudents.some((student) => !batchPermanentDeleteAudits[student.studentId]?.allowed) ? (
                <label className="permanentDeleteForceField"><input checked={batchForceDeleteWithReferences} onChange={(event) => setBatchForceDeleteWithReferences(event.target.checked)} type="checkbox" /><span>표시된 연결 기록이 함께 정리·삭제되거나 학생 연결이 해제될 수 있음을 확인했습니다.</span></label>
              ) : null}
              <label className="permanentDeleteConfirmationField">선택한 {batchPermanentDeleteStudents.length}명을 영구 삭제하려면 <strong>영구 삭제</strong>를 정확히 입력<input autoComplete="off" onChange={(event) => setBatchPermanentDeleteConfirmation(event.target.value)} placeholder="영구 삭제" value={batchPermanentDeleteConfirmation} /></label>
            </>
          ) : null}
          <ModalFooter tone="danger">
            <button className="softButton" disabled={batchPermanentDeleteAuditState === "saving"} onClick={closeBatchPermanentDeleteModal} type="button">닫기</button>
            <button className="dangerButton" disabled={batchPermanentDeleteAuditState !== "saved" || batchPermanentDeleteConfirmation.trim() !== "영구 삭제" || (batchPermanentDeleteStudents.some((student) => !batchPermanentDeleteAudits[student.studentId]?.allowed) && !batchForceDeleteWithReferences)} onClick={permanentlyDeleteSelectedWithdrawnStudents} type="button">선택 학생 영구 삭제</button>
          </ModalFooter>
        </ModalComponent>
      ) : null}
    </section>
  );
}
