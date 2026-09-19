import { useEffect, useRef, useState } from "react";
import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { FilterBar } from "../../shared/components/FilterBar.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";
import { buildStudentHandoverPdfModel, openStudentHandoverPdf } from "./studentHandoverPdf.js";
import { StudentLifecycleOverlays } from "./StudentLifecycleOverlays.jsx";
import { StudentProfileErrorBoundary, StudentProfileModal } from "./StudentProfileModal.jsx";
import { StudentWithdrawnList } from "./StudentWithdrawnList.jsx";
import { sortWithdrawnStudents } from "./studentListSort.js";
import { getDefaultRosterEffectiveMode, hasStudentLessonRowOnDate } from "./rosterEffectiveDate.js";
import { resolveDefaultClassTemplateId } from "../settings/tenantSettings.js";
import { isWithdrawnStudent } from "./lessonRosterSelectors.js";
import "./studentManager.css";

const withdrawalReasonOptions = [
  { value: "graduation", label: "졸업" },
  { value: "class_move", label: "반이동" },
  { value: "withdrawal", label: "퇴원" },
  { value: "other", label: "기타" }
];

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
  today = "",
  templates,
  tenantSettings = {},
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
  const [withdrawalDraft, setWithdrawalDraft] = useState({ comment: "", reason: "other", rosterEffectiveMode: "tomorrow" });
  const [withdrawalError, setWithdrawalError] = useState("");
  const [withdrawalSaveState, setWithdrawalSaveState] = useState("idle");
  // 처음 선택 반은 tenant 설정(운영 설정) → 첫 반 순. 예전엔 원장 반 id 가 박혀 있어
  // 다른 tenant 에서는 아무 반도 선택되지 않은 빈 목록이 떴다(2026-09-19).
  const [selectedClassTemplateId, setSelectedClassTemplateId] = useState(
    () => resolveDefaultClassTemplateId(tenantSettings, templates) || "unassigned"
  );
  const [dirtyStudentIds, setDirtyStudentIds] = useState(() => new Set());
  const [originalClassTemplateIds, setOriginalClassTemplateIds] = useState({});
  const [rosterEffectiveModes, setRosterEffectiveModes] = useState({});
  const studentSaveRevisionsRef = useRef({});
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

  // withdrawnStudents 는 렌더마다 새 배열이라 이 effect 가 매번 돌고, 매번 새 Set 을 넣으면
  // 다시 렌더 → "Maximum update depth exceeded" 무한 루프(학생관리 화면 CPU 100%, 2026-09-19
  // 발견). 실제로 빠지는 id 가 있을 때만 상태를 바꾼다.
  useEffect(() => {
    const validIds = new Set(withdrawnStudents.map((student) => student.studentId));
    setSelectedWithdrawnStudentIds((current) => {
      const kept = [...current].filter((studentId) => validIds.has(studentId));
      return kept.length === current.size ? current : new Set(kept);
    });
  }, [withdrawnStudents]);

  async function confirmDeleteStudent() {
    if (!deleteStudent) return;
    setWithdrawalError("");
    setWithdrawalSaveState("saving");
    try {
      await onWithdrawStudent(deleteStudent.studentId, withdrawalDraft);
      if (selectedStudentId === deleteStudent.studentId) {
        setSelectedStudentId("");
      }
      setDeleteStudentId("");
      setWithdrawalDraft({ comment: "", reason: "other", rosterEffectiveMode: "tomorrow" });
      setWithdrawalSaveState("saved");
    } catch (error) {
      console.error(error);
      setWithdrawalError(error.message);
      setWithdrawalSaveState("failed");
    }
  }

  function updateStudentField(studentId, field, value) {
    const currentStudent = students.find((student) => student.studentId === studentId);
    if (field === "defaultClassTemplateId" && !Object.prototype.hasOwnProperty.call(originalClassTemplateIds, studentId)) {
      setOriginalClassTemplateIds((current) => ({
        ...current,
        [studentId]: currentStudent?.defaultClassTemplateId ?? ""
      }));
    }
    onUpdateStudent(studentId, field, value, { persist: false });
    studentSaveRevisionsRef.current[studentId] = (studentSaveRevisionsRef.current[studentId] ?? 0) + 1;
    setDirtyStudentIds((current) => new Set(current).add(studentId));
  }

  async function saveStudentRow(studentId) {
    const saveRevision = studentSaveRevisionsRef.current[studentId] ?? 0;
    try {
      const saveOptions = Object.prototype.hasOwnProperty.call(originalClassTemplateIds, studentId)
        ? {
            previousClassTemplateId: originalClassTemplateIds[studentId],
            rosterEffectiveMode: rosterEffectiveModes[studentId] ?? "today"
          }
        : {};
      await onSaveStudent(studentId, saveOptions);
      if ((studentSaveRevisionsRef.current[studentId] ?? 0) !== saveRevision) {
        return;
      }
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
      setRosterEffectiveModes((current) => {
        const next = { ...current };
        delete next[studentId];
        return next;
      });
    } catch (error) {
      console.error(error);
    }
  }

  function forgetStudentDraft(studentId) {
    setDirtyStudentIds((current) => {
      const next = new Set(current);
      next.delete(studentId);
      return next;
    });
    for (const clearDraftMap of [setOriginalClassTemplateIds, setRosterEffectiveModes]) {
      clearDraftMap((current) => {
        const next = { ...current };
        delete next[studentId];
        return next;
      });
    }
  }

  function openWithdrawStudentModal(student) {
    const hasTodayLessonRow = hasStudentLessonRowOnDate({
      date: today,
      lessons,
      records,
      studentId: student.studentId
    });
    setWithdrawalDraft({
      comment: student.withdrawalComment ?? "",
      hasTodayLessonRow,
      reason: student.withdrawalReason || "other",
      rosterEffectiveMode: getDefaultRosterEffectiveMode({ date: today, lessons, records, studentId: student.studentId })
    });
    setWithdrawalError("");
    setWithdrawalSaveState("idle");
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
        <StudentWithdrawnList
          dirtyStudentIds={dirtyStudentIds}
          getSingleSelectedWithdrawnStudent={getSingleSelectedWithdrawnStudent}
          getStudentClassName={getStudentClassName}
          openBatchPermanentDeleteModal={openBatchPermanentDeleteModal}
          openHandoverModal={openHandoverModal}
          openPermanentDeleteModal={openPermanentDeleteModal}
          restoreStudent={restoreStudent}
          saveSelectedWithdrawnStudents={saveSelectedWithdrawnStudents}
          selectAllVisibleWithdrawnStudents={selectAllVisibleWithdrawnStudents}
          selectedStudentId={selectedStudentId}
          selectedWithdrawnStudentIds={selectedWithdrawnStudentIds}
          selectedWithdrawnStudents={selectedWithdrawnStudents}
          setSelectedStudentId={setSelectedStudentId}
          setSelectedWithdrawnStudentIds={setSelectedWithdrawnStudentIds}
          setWithdrawnStudentSort={setWithdrawnStudentSort}
          toggleWithdrawnStudentSelection={toggleWithdrawnStudentSelection}
          updateStudentField={updateStudentField}
          visibleStudents={visibleStudents}
          withdrawalReasonOptions={withdrawalReasonOptions}
          withdrawnStudentSort={withdrawnStudentSort}
        />
      ) : (
        <>
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
          </div>
          {visibleStudents.map((student, index) => (
            // 행 전체가 학생 정보 수정 모달을 여는 버튼이다. 목록 칸은 보기 전용이고,
            // 수정과 퇴원은 모두 모달 안에서 한다(2026-09-17 요청).
            <div
              aria-label={`${student.name} 정보 수정`}
              className="studentListRow studentListRowClickable"
              key={student.studentId}
              onClick={() => setSelectedStudentId(student.studentId)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedStudentId(student.studentId);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <span>{index + 1}</span>
              <span className="studentNameCell">
                <span className="studentInitial">{student.name?.[0] ?? "학"}</span>
                <strong>{student.name}</strong>
              </span>
              <span>{getStudentClassName(student) || "미배정"}</span>
              <span className="monoCell">{student.loginId || "-"}</span>
              <span className="monoCell">{student.pin || "-"}</span>
              <span>{student.grade || "-"}</span>
              <span>{student.schoolName || "-"}</span>
              <span className="monoCell">{student.studentPhone || "-"}</span>
              <span className="monoCell">{student.parentPhone || "-"}</span>
              <span>{student.birthYear ? `${student.birthYear}년` : "-"}</span>
            </div>
          ))}
          {visibleStudents.length === 0 ? (
            <EmptyState
              className="emptyState studentListEmpty"
              description={activeTab === "class" ? "다른 반 또는 전체 학생 탭을 확인하세요." : "학생 추가 후 목록에 표시됩니다."}
              title={activeTab === "class" ? "이 반에 배정된 학생이 없습니다." : "등록된 재원생이 없습니다."}
            />
          ) : null}
        </DataTableShell>
        </>
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
            onWithdraw={isWithdrawnStudent(selectedStudent) ? undefined : () => {
              // 프로필을 먼저 닫아야 퇴원 확인 모달이 그 위에 겹치지 않는다.
              // 이미 퇴원한 학생은 handleDeleteStudent 의 alreadyWithdrawn 분기가 저장된 퇴원 원천을 그대로
              // 돌려주므로(재시도 수렴) '퇴원 처리' 를 다시 내보내지 않는다. 사유·코멘트 수정은 퇴원생 목록에서 한다(2026-09-19).
              setSelectedStudentId("");
              openWithdrawStudentModal(selectedStudent);
            }}
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
            templates={templates}
            today={today}
          />
        </StudentProfileErrorBoundary>
      ) : null}

      <StudentLifecycleOverlays
        batchForceDeleteWithReferences={batchForceDeleteWithReferences}
        batchPermanentDeleteAuditState={batchPermanentDeleteAuditState}
        batchPermanentDeleteAudits={batchPermanentDeleteAudits}
        batchPermanentDeleteConfirmation={batchPermanentDeleteConfirmation}
        batchPermanentDeleteError={batchPermanentDeleteError}
        batchPermanentDeleteStudents={batchPermanentDeleteStudents}
        closeBatchPermanentDeleteModal={closeBatchPermanentDeleteModal}
        closePermanentDeleteModal={closePermanentDeleteModal}
        confirmDeleteStudent={confirmDeleteStudent}
        deleteStudent={deleteStudent}
        forceDeleteWithReferences={forceDeleteWithReferences}
        handoverComment={handoverComment}
        handoverStudent={handoverStudent}
        ModalComponent={ModalComponent}
        permanentDeleteAudit={permanentDeleteAudit}
        permanentDeleteAuditState={permanentDeleteAuditState}
        permanentDeleteConfirmation={permanentDeleteConfirmation}
        permanentDeleteError={permanentDeleteError}
        permanentDeleteStudent={permanentDeleteStudent}
        permanentlyDeleteSelectedWithdrawnStudents={permanentlyDeleteSelectedWithdrawnStudents}
        permanentlyDeleteWithdrawnStudent={permanentlyDeleteWithdrawnStudent}
        printStudentHandover={printStudentHandover}
        setBatchForceDeleteWithReferences={setBatchForceDeleteWithReferences}
        setBatchPermanentDeleteConfirmation={setBatchPermanentDeleteConfirmation}
        setDeleteStudentId={setDeleteStudentId}
        setForceDeleteWithReferences={setForceDeleteWithReferences}
        setHandoverComment={setHandoverComment}
        setHandoverStudentId={setHandoverStudentId}
        setPermanentDeleteConfirmation={setPermanentDeleteConfirmation}
        setWithdrawalDraft={setWithdrawalDraft}
        withdrawalDraft={withdrawalDraft}
        withdrawalError={withdrawalError}
        withdrawalReasonOptions={withdrawalReasonOptions}
        withdrawalSaveState={withdrawalSaveState}
      />
    </section>
  );
}
