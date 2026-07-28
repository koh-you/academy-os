import { Component, useEffect, useState } from "react";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import { parseStudentScheduleOverride } from "../../shared/utils/studentSchedule.js";
import { buildStudentHandoverPdfModel, getStudentHandoverTitle, openStudentHandoverPdf } from "./studentHandoverPdf.js";
import { sortWithdrawnStudents } from "./studentListSort.js";

const withdrawalReasonOptions = [
  { value: "graduation", label: "졸업" },
  { value: "class_move", label: "반이동" },
  { value: "withdrawal", label: "퇴원" },
  { value: "other", label: "기타" }
];

const consultationTypeOptions = [
  { value: "student", label: "학생 상담" },
  { value: "parent", label: "학부모 상담" }
];

const studentReminderTypeOptions = [
  { value: "student_consultation", label: "학생 상담 일정" },
  { value: "parent_consultation", label: "학부모 상담 일정" },
  { value: "student_intake", label: "신입생 일정" },
  { value: "special_note", label: "특이사항 알림" },
  { value: "parent_contact", label: "학부모 연락" },
  { value: "custom", label: "운영 알림" }
];

const studentScheduleDayOptions = [
  { value: "mon", label: "월" },
  { value: "tue", label: "화" },
  { value: "wed", label: "수" },
  { value: "thu", label: "목" },
  { value: "fri", label: "금" },
  { value: "sat", label: "토" },
  { value: "sun", label: "일" }
];

const studentProfileFields = [
  "schoolName",
  "grade",
  "textbook",
  "studentPhone",
  "parentPhone",
  "loginId",
  "pin",
  "specialNote",
  "scheduleOverride"
];

function getTodayInputDate() {
  const now = new Date();
  const offsetMs = now.getTimezoneOffset() * 60 * 1000;
  return new Date(now.getTime() - offsetMs).toISOString().slice(0, 10);
}

function createScoreDraft(studentId) {
  return {
    studentId,
    examType: "내신",
    examDate: getTodayInputDate(),
    subject: "수학",
    score: "",
    grade: "",
    note: ""
  };
}

function createAcademyTestDraft(studentId) {
  return {
    studentId,
    testDate: getTodayInputDate(),
    title: "학원 테스트",
    scope: "",
    score: "",
    averageScore: "",
    note: ""
  };
}

function createConsultationDraft(studentId) {
  return {
    studentId,
    consultationType: "student",
    consultationDate: getTodayInputDate(),
    content: ""
  };
}

function createStudentReminderDraft(studentId) {
  return {
    studentId,
    reminderType: "student_consultation",
    reminderDate: getTodayInputDate(),
    reminderTime: "",
    title: "",
    content: "",
    priority: "normal",
    slackNotify: true,
    status: "pending",
    source: "student_profile"
  };
}

function createStudentProfileDraft(student = {}) {
  return studentProfileFields.reduce(
    (draft, field) => ({
      ...draft,
      [field]: student[field] ?? ""
    }),
    {}
  );
}

function createStudentScheduleRows(scheduleOverride = "") {
  return parseStudentScheduleOverride(scheduleOverride).map((rule, index) => ({
    days: rule.days.filter((day) => studentScheduleDayOptions.some((option) => option.value === day)),
    endTime: rule.endTime || "20:00",
    rowId: `student_schedule_${index}_${rule.days.join("")}_${rule.startTime}_${rule.endTime}`,
    startTime: rule.startTime || "17:00"
  }));
}

function getDefaultStudentScheduleRow(index = 0) {
  const presets = [
    { days: ["tue", "thu"], startTime: "17:00", endTime: "20:00" },
    { days: ["sat"], startTime: "10:00", endTime: "13:00" },
    { days: ["mon", "wed", "fri"], startTime: "17:00", endTime: "20:00" }
  ];
  const preset = presets[index] ?? presets[0];
  return {
    ...preset,
    rowId: `student_schedule_new_${Date.now()}_${index}`
  };
}

function formatStudentScheduleRows(rows = []) {
  return rows
    .map((row) => {
      const days = studentScheduleDayOptions
        .filter((option) => row.days.includes(option.value))
        .map((option) => option.label)
        .join("");
      if (!days || !row.startTime || !row.endTime) return "";
      return `${days} ${row.startTime}-${row.endTime}`;
    })
    .filter(Boolean)
    .join(" / ");
}

function hasStudentProfileDraftChanges(student = {}, draft = {}) {
  return studentProfileFields.some((field) => String(student[field] ?? "") !== String(draft[field] ?? ""));
}

function consultationTypeLabel(value) {
  return consultationTypeOptions.find((option) => option.value === value)?.label ?? "상담";
}

function studentReminderTypeLabel(value) {
  return studentReminderTypeOptions.find((option) => option.value === value)?.label ?? "운영 알림";
}

function studentReminderStatusLabel(value) {
  return { pending: "대기", done: "완료", canceled: "취소" }[value] ?? "대기";
}

function formatStudentReminderDateTime(reminder = {}) {
  return [reminder.reminderDate || reminder.date || "날짜 미입력", reminder.reminderTime || reminder.time || ""]
    .filter(Boolean)
    .join(" ");
}

function saveActionLabel(defaultLabel, saveState) {
  if (saveState === "saving") return "저장 중";
  if (saveState === "failed") return "저장 실패";
  if (saveState === "saved") return "저장 완료";
  return defaultLabel;
}

class StudentProfileErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.error("Student profile render failed", error);
  }

  render() {
    if (this.state.error) {
      const ModalComponent = this.props.ModalComponent;
      return (
        <ModalComponent
          className="wideModal"
          onClose={this.props.onClose}
          subtitle="학생 프로필 화면을 그리는 중 오류가 발생했습니다."
          title={`${this.props.studentName ?? "학생"} 학생 프로파일`}
        >
          <div className="profileSaveError" role="alert">
            학생 프로필 화면 오류 · {this.state.error?.message || "알 수 없는 오류"}
          </div>
        </ModalComponent>
      );
    }

    return this.props.children;
  }
}

function formatShortDate(date = "") {
  return date ? date.slice(5).replace("-", ".") : "날짜 미입력";
}

function isWithdrawnStudent(student = {}) {
  return (student.status ?? "active") !== "active" || Boolean(student.withdrawnAt);
}

function getTallySubmissionFieldRows(applicant = {}) {
  const fields = Array.isArray(applicant.rawPayload?.data?.fields) ? applicant.rawPayload.data.fields : [];
  const rows = fields.map((field, index) => {
    const label = String(field.label || field.title || field.name || field.key || `질문 ${index + 1}`).trim();
    const value = [field.value, field.answer, field.inputValue, field.text]
      .flatMap((item) => Array.isArray(item) ? item : [item])
      .filter((item) => item !== undefined && item !== null && String(item).trim())
      .map((item) => typeof item === "object" ? item.text || item.label || item.value || "" : item)
      .filter(Boolean)
      .join(", ");
    return { label, value: String(value).trim() };
  }).filter((row) => row.value);
  if (rows.length) return rows;
  return [
    ["재원생 여부", applicant.enrollmentStatus],
    ["현재 학습 과정", applicant.currentLearningProcess],
    ["직전학기 내신 성적", applicant.previousSemesterScore],
    ["특이사항", applicant.specialNote],
    ["추가 메모", applicant.memo]
  ].filter(([, value]) => String(value ?? "").trim()).map(([label, value]) => ({ label, value: String(value).trim() }));
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
  scoreRecords,
  scoreRecordSaveState = "idle",
  studentConsultationSaveState = "idle",
  studentConsultations = [],
  studentProfileSaveStates = {},
  homeworks = [],
  intakeApplicants = [],
  lessons = [],
  records = [],
  specialLectureApplications = [],
  students,
  templates,
  ModalComponent,
  onAddStudent,
  onDeleteAcademyTest,
  onDeleteAcademyReminder,
  onDeleteScore,
  onDeleteStudentConsultation,
  onSaveAcademyTest,
  onSaveAcademyReminder,
  onSaveScore,
  onSaveStudentProfile,
  onSaveStudentConsultation,
  onAuditWithdrawnStudentDeletion,
  onDeleteStudent,
  onPermanentlyDeleteWithdrawnStudent,
  onRestoreStudent,
  onSaveStudent,
  onUpdateStudent
}) {
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
    onDeleteStudent(deleteStudent.studentId, withdrawalDraft);
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
      <div className="sectionHeader">
        <div>
          <h1>학생 목록</h1>
          <p className="muted">총 {visibleStudents.length}명</p>
        </div>
        <div className="studentListToolbar">
          <button className="primaryButton" onClick={onAddStudent} type="button">+ 학생 추가</button>
          <span className="studentStatusPill">{title} · {visibleStudents.length}명</span>
          <span className="studentStatusPill mutedPill">퇴원생은 과거 기록 보존</span>
        </div>
      </div>

      <div className="studentManagerTabs">
        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => {
            setActiveTab("all");
            setSelectedStudentId("");
          }}
          type="button"
        >
          전체 학생 목록
        </button>
        <button
          className={activeTab === "class" ? "active" : ""}
          onClick={() => {
            setActiveTab("class");
            setSelectedStudentId("");
          }}
          type="button"
        >
          반별 학생 목록
        </button>
        <button
          className={activeTab === "withdrawn" ? "active" : ""}
          onClick={() => {
            setActiveTab("withdrawn");
            setSelectedStudentId("");
          }}
          type="button"
        >
          퇴원생 목록
        </button>
      </div>

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
        <div className="classTabList">
          {templates.map((template) => {
            const count = activeStudents.filter((student) => student.defaultClassTemplateId === template.classTemplateId).length;
            return (
              <button
                className={selectedClassTemplateId === template.classTemplateId ? "active" : ""}
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
            className={selectedClassTemplateId === "unassigned" ? "active" : ""}
            onClick={() => {
              setSelectedClassTemplateId("unassigned");
              setSelectedStudentId("");
            }}
            type="button"
          >
            <strong>미배정</strong>
            <span>{activeStudents.filter((student) => !student.defaultClassTemplateId).length}명</span>
          </button>
        </div>
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
          <div className="studentListTable">
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
            <div className="emptyState studentListEmpty">퇴원생이 없습니다.</div>
          ) : null}
          </div>
          <div className="withdrawnStudentBulkActions">
            <span>선택 {selectedWithdrawnStudents.length}명</span>
            <button className="softButton compact" onClick={selectAllVisibleWithdrawnStudents} type="button">전체 선택</button>
            <button className="softButton compact" onClick={() => setSelectedWithdrawnStudentIds(new Set())} type="button">선택 해제</button>
            <button className="primaryButton compact" disabled={!selectedWithdrawnStudents.some((student) => dirtyStudentIds.has(student.studentId))} onClick={saveSelectedWithdrawnStudents} type="button">선택 저장</button>
            <button className="studentRestoreButton" disabled={selectedWithdrawnStudents.length !== 1} onClick={() => { const student = getSingleSelectedWithdrawnStudent("퇴원 취소"); if (student) restoreStudent(student); }} type="button">퇴원 취소</button>
            <button className="studentPermanentDeleteButton" disabled={selectedWithdrawnStudents.length === 0} onClick={() => {
              if (selectedWithdrawnStudents.length === 1) openPermanentDeleteModal(selectedWithdrawnStudents[0]);
              else openBatchPermanentDeleteModal(selectedWithdrawnStudents);
            }} type="button">영구 삭제</button>
            <button className="softButton compact" disabled={selectedWithdrawnStudents.length !== 1} onClick={() => { const student = getSingleSelectedWithdrawnStudent("인수인계서 PDF"); if (student) openHandoverModal(student); }} type="button">인수인계서 PDF</button>
          </div>
        </>
      ) : (
        <div className="studentListTable">
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
            <div className="emptyState studentListEmpty">이 반에 배정된 학생이 없습니다.</div>
          ) : null}
        </div>
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
            onSaveStudentConsultation={onSaveStudentConsultation}
            scores={selectedScores}
            academyTestSaveState={academyTestSaveState}
            scoreRecordSaveState={scoreRecordSaveState}
            studentConsultationSaveState={studentConsultationSaveState}
            consultations={selectedConsultations}
            tallySubmissions={getStudentTallySubmissions(selectedStudent, intakeApplicants)}
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
          <div className="deleteConfirmActions">
            <button className="softButton" onClick={() => setDeleteStudentId("")} type="button">취소</button>
            <button className="dangerButton" onClick={confirmDeleteStudent} type="button">퇴원 처리</button>
          </div>
        </ModalComponent>
      ) : null}

      {handoverStudent ? (
        <ModalComponent className="studentHandoverModal" onClose={() => setHandoverStudentId("")} subtitle="수업·출결·숙제와 Tally 접수정보를 읽어 PDF 인쇄 창을 엽니다. 원천 데이터는 수정하지 않습니다." title={`${handoverStudent.name} ${getStudentHandoverTitle(handoverStudent)}`}>
          <div className="deleteConfirmBody">
            <p className="muted">등원일부터 퇴원일({String(handoverStudent.withdrawnAt || "").slice(0, 10) || "미입력"})까지의 수업만 포함합니다.</p>
            <label>교사 인계 코멘트<textarea value={handoverComment} onChange={(event) => setHandoverComment(event.target.value)} placeholder="재등록 시 참고사항, 보호자 전달사항 등을 입력하세요. 이 코멘트는 이번 PDF에만 포함되며 저장하지 않습니다." rows={7} /></label>
          </div>
          <div className="deleteConfirmActions"><button className="softButton" onClick={() => setHandoverStudentId("")} type="button">닫기</button><button className="primaryButton" onClick={printStudentHandover} type="button">PDF 인쇄 창 열기</button></div>
        </ModalComponent>
      ) : null}

      {permanentDeleteStudent ? (
        <ModalComponent
          className="studentPermanentDeleteModal"
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

          <div className="deleteConfirmActions">
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
          </div>
        </ModalComponent>
      ) : null}

      {batchPermanentDeleteStudents.length ? (
        <ModalComponent
          className="studentPermanentDeleteModal"
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
          <div className="deleteConfirmActions">
            <button className="softButton" disabled={batchPermanentDeleteAuditState === "saving"} onClick={closeBatchPermanentDeleteModal} type="button">닫기</button>
            <button className="dangerButton" disabled={batchPermanentDeleteAuditState !== "saved" || batchPermanentDeleteConfirmation.trim() !== "영구 삭제" || (batchPermanentDeleteStudents.some((student) => !batchPermanentDeleteAudits[student.studentId]?.allowed) && !batchForceDeleteWithReferences)} onClick={permanentlyDeleteSelectedWithdrawnStudents} type="button">선택 학생 영구 삭제</button>
          </div>
        </ModalComponent>
      ) : null}
    </section>
  );
}

function StudentProfileModal({
  academyTestSaveState = "idle",
  academyReminders = [],
  academyTests,
  className,
  consultations = [],
  ModalComponent,
  onClose,
  onDeleteAcademyTest,
  onDeleteAcademyReminder,
  onDeleteScore,
  onDeleteStudentConsultation,
  onSaveAcademyTest,
  onSaveAcademyReminder,
  onSaveScore,
  onSaveStudentProfile,
  onSaveStudentConsultation,
  scores,
  scoreRecordSaveState = "idle",
  studentConsultationSaveState = "idle",
  studentProfileSaveState = "idle",
  student,
  tallySubmissions = []
}) {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileDraft, setProfileDraft] = useState(() => createStudentProfileDraft(student));
  const [profileSaveError, setProfileSaveError] = useState("");
  const [profileActionError, setProfileActionError] = useState("");
  const [scoreDrafts, setScoreDrafts] = useState({});
  const [academyTestDrafts, setAcademyTestDrafts] = useState({});
  const [consultationDrafts, setConsultationDrafts] = useState({});
  const [newScoreDraft, setNewScoreDraft] = useState(() => createScoreDraft(student.studentId));
  const [newAcademyTestDraft, setNewAcademyTestDraft] = useState(() => createAcademyTestDraft(student.studentId));
  const [newConsultationDraft, setNewConsultationDraft] = useState(() => createConsultationDraft(student.studentId));
  const [newReminderDraft, setNewReminderDraft] = useState(() => createStudentReminderDraft(student.studentId));

  useEffect(() => {
    setIsEditingProfile(false);
    setProfileDraft(createStudentProfileDraft(student));
    setProfileSaveError("");
    setProfileActionError("");
    setScoreDrafts({});
    setAcademyTestDrafts({});
    setConsultationDrafts({});
    setNewScoreDraft(createScoreDraft(student.studentId));
    setNewAcademyTestDraft(createAcademyTestDraft(student.studentId));
    setNewConsultationDraft(createConsultationDraft(student.studentId));
    setNewReminderDraft(createStudentReminderDraft(student.studentId));
  }, [student.studentId]);

  useEffect(() => {
    if (!isEditingProfile) {
      setProfileDraft(createStudentProfileDraft(student));
    }
  }, [isEditingProfile, student]);

  function clearProfileErrors() {
    setProfileSaveError("");
    setProfileActionError("");
  }

  async function runProfileAction(label, action) {
    clearProfileErrors();
    try {
      await action();
    } catch (error) {
      setProfileActionError(`${label} 실패 · ${error?.message || "알 수 없는 오류"}`);
    }
  }

  function updateProfile(field, value) {
    clearProfileErrors();
    setProfileDraft((current) => ({ ...current, [field]: value }));
  }

  function updateProfileScheduleRows(rows) {
    updateProfile("scheduleOverride", formatStudentScheduleRows(rows));
  }

  function addProfileScheduleRow() {
    const rows = createStudentScheduleRows(profileDraft.scheduleOverride);
    updateProfileScheduleRows([...rows, getDefaultStudentScheduleRow(rows.length)]);
  }

  function removeProfileScheduleRow(rowIndex) {
    updateProfileScheduleRows(createStudentScheduleRows(profileDraft.scheduleOverride).filter((_, index) => index !== rowIndex));
  }

  function updateProfileScheduleRow(rowIndex, patch) {
    const rows = createStudentScheduleRows(profileDraft.scheduleOverride).map((row, index) =>
      index === rowIndex ? { ...row, ...patch } : row
    );
    updateProfileScheduleRows(rows);
  }

  function toggleProfileScheduleDay(rowIndex, dayValue) {
    const rows = createStudentScheduleRows(profileDraft.scheduleOverride);
    const row = rows[rowIndex];
    if (!row) return;
    const hasDay = row.days.includes(dayValue);
    const nextDays = hasDay
      ? row.days.filter((day) => day !== dayValue)
      : [...row.days, dayValue];
    if (nextDays.length === 0) return;
    updateProfileScheduleRow(rowIndex, { days: nextDays });
  }

  function clearProfileScheduleRows() {
    updateProfile("scheduleOverride", "");
  }

  async function saveProfileDraft() {
    clearProfileErrors();
    try {
      await onSaveStudentProfile?.({ ...student, ...profileDraft, studentId: student.studentId });
      const defaultScoreDraft = createScoreDraft(student.studentId);
      const defaultAcademyTestDraft = createAcademyTestDraft(student.studentId);
      const defaultConsultationDraft = createConsultationDraft(student.studentId);
      const defaultReminderDraft = createStudentReminderDraft(student.studentId);
      const hasOtherDraftChanges =
        Object.keys(scoreDrafts).length > 0 ||
        Object.keys(academyTestDrafts).length > 0 ||
        Object.keys(consultationDrafts).length > 0 ||
        JSON.stringify(newScoreDraft) !== JSON.stringify(defaultScoreDraft) ||
        JSON.stringify(newAcademyTestDraft) !== JSON.stringify(defaultAcademyTestDraft) ||
        JSON.stringify(newConsultationDraft) !== JSON.stringify(defaultConsultationDraft) ||
        JSON.stringify(newReminderDraft) !== JSON.stringify(defaultReminderDraft);
      if (!hasOtherDraftChanges) setIsEditingProfile(false);
    } catch (error) {
      setProfileSaveError(error?.message || "기본정보 저장에 실패했습니다.");
    }
  }

  function cancelProfileEdit() {
    clearProfileErrors();
    setProfileDraft(createStudentProfileDraft(student));
    setScoreDrafts({});
    setAcademyTestDrafts({});
    setConsultationDrafts({});
    setNewScoreDraft(createScoreDraft(student.studentId));
    setNewAcademyTestDraft(createAcademyTestDraft(student.studentId));
    setNewConsultationDraft(createConsultationDraft(student.studentId));
    setNewReminderDraft(createStudentReminderDraft(student.studentId));
    setIsEditingProfile(false);
  }

  function updateScoreDraft(scoreRecordId, field, value) {
    setProfileActionError("");
    setScoreDrafts((current) => ({
      ...current,
      [scoreRecordId]: {
        ...(current[scoreRecordId] ?? scores.find((item) => item.scoreRecordId === scoreRecordId) ?? {}),
        [field]: value
      }
    }));
  }

  function updateAcademyTestDraft(testId, field, value) {
    setProfileActionError("");
    setAcademyTestDrafts((current) => ({
      ...current,
      [testId]: {
        ...(current[testId] ?? academyTests.find((item) => item.testId === testId) ?? {}),
        [field]: value
      }
    }));
  }

  function updateConsultationDraft(consultationId, field, value) {
    setProfileActionError("");
    setConsultationDrafts((current) => ({
      ...current,
      [consultationId]: {
        ...(current[consultationId] ?? consultations.find((item) => item.consultationId === consultationId) ?? {}),
        [field]: value
      }
    }));
  }

  function updateNewScoreDraft(field, value) {
    setProfileActionError("");
    setNewScoreDraft((current) => ({ ...current, [field]: value }));
  }

  function updateNewAcademyTestDraft(field, value) {
    setProfileActionError("");
    setNewAcademyTestDraft((current) => ({ ...current, [field]: value }));
  }

  function updateNewConsultationDraft(field, value) {
    setProfileActionError("");
    setNewConsultationDraft((current) => ({ ...current, [field]: value }));
  }

  function updateNewReminderDraft(field, value) {
    setProfileActionError("");
    setNewReminderDraft((current) => ({ ...current, [field]: value }));
  }

  async function saveScoreDraft(score) {
    const draft = scoreDrafts[score.scoreRecordId] ?? score;
    await onSaveScore?.({ ...score, ...draft, studentId: student.studentId });
    setScoreDrafts((current) => {
      const next = { ...current };
      delete next[score.scoreRecordId];
      return next;
    });
  }

  async function saveNewScoreDraft() {
    await onSaveScore?.({ ...newScoreDraft, studentId: student.studentId });
    setNewScoreDraft(createScoreDraft(student.studentId));
  }

  async function saveAcademyTestDraft(test) {
    const draft = academyTestDrafts[test.testId] ?? test;
    await onSaveAcademyTest?.({ ...test, ...draft, studentId: student.studentId });
    setAcademyTestDrafts((current) => {
      const next = { ...current };
      delete next[test.testId];
      return next;
    });
  }

  async function saveNewAcademyTestDraft() {
    await onSaveAcademyTest?.({ ...newAcademyTestDraft, studentId: student.studentId });
    setNewAcademyTestDraft(createAcademyTestDraft(student.studentId));
  }

  async function saveConsultationDraft(consultation) {
    const draft = consultationDrafts[consultation.consultationId] ?? consultation;
    await onSaveStudentConsultation?.({ ...consultation, ...draft, studentId: student.studentId });
    setConsultationDrafts((current) => {
      const next = { ...current };
      delete next[consultation.consultationId];
      return next;
    });
  }

  async function saveNewConsultationDraft() {
    if (!String(newConsultationDraft.content ?? "").trim()) return;
    await onSaveStudentConsultation?.({ ...newConsultationDraft, studentId: student.studentId });
    setNewConsultationDraft(createConsultationDraft(student.studentId));
  }

  async function saveNewReminderDraft() {
    if (!String(newReminderDraft.title || newReminderDraft.content || "").trim()) return;
    await onSaveAcademyReminder?.({ ...newReminderDraft, studentId: student.studentId, source: "student_profile" });
    setNewReminderDraft(createStudentReminderDraft(student.studentId));
  }

  function renderProfileField(label, field, fallback = "-") {
    return (
      <div>
        <small>{label}</small>
        {isEditingProfile ? (
          <input
            className="profileEditInput"
            value={profileDraft[field] ?? ""}
            onChange={(event) => updateProfile(field, event.target.value)}
            placeholder={fallback}
          />
        ) : (
          <strong>{student[field] || fallback}</strong>
        )}
      </div>
    );
  }

  const defaultNewScoreDraft = createScoreDraft(student.studentId);
  const defaultNewAcademyTestDraft = createAcademyTestDraft(student.studentId);
  const defaultNewConsultationDraft = createConsultationDraft(student.studentId);
  const defaultNewReminderDraft = createStudentReminderDraft(student.studentId);
  const hasNewScoreDraftChanges = JSON.stringify(newScoreDraft) !== JSON.stringify(defaultNewScoreDraft);
  const hasNewAcademyTestDraftChanges = JSON.stringify(newAcademyTestDraft) !== JSON.stringify(defaultNewAcademyTestDraft);
  const hasNewConsultationDraftChanges = JSON.stringify(newConsultationDraft) !== JSON.stringify(defaultNewConsultationDraft);
  const hasNewConsultationContent = Boolean(String(newConsultationDraft.content ?? "").trim());
  const hasNewReminderDraftChanges = JSON.stringify(newReminderDraft) !== JSON.stringify(defaultNewReminderDraft);
  const hasNewReminderContent = Boolean(String(newReminderDraft.title || newReminderDraft.content || "").trim());
  const isProfileDirty = hasStudentProfileDraftChanges(student, profileDraft);
  const profileDirtyFieldCount = studentProfileFields.filter(
    (field) => String(student[field] ?? "") !== String(profileDraft[field] ?? "")
  ).length;
  const separateDirtyLabels = [
    hasNewReminderDraftChanges ? "운영 알림" : "",
    Object.keys(consultationDrafts).length > 0 || hasNewConsultationDraftChanges ? "상담" : "",
    Object.keys(scoreDrafts).length > 0 || hasNewScoreDraftChanges ? "성적" : "",
    Object.keys(academyTestDrafts).length > 0 || hasNewAcademyTestDraftChanges ? "테스트" : ""
  ].filter(Boolean);
  const hasRecordDraftChanges =
    Object.keys(scoreDrafts).length > 0 ||
    Object.keys(academyTestDrafts).length > 0 ||
    Object.keys(consultationDrafts).length > 0 ||
    hasNewScoreDraftChanges ||
    hasNewAcademyTestDraftChanges ||
    hasNewConsultationDraftChanges ||
    hasNewReminderDraftChanges;
  const hasAnyEditingDraftChanges = isProfileDirty || hasRecordDraftChanges;
  const effectiveProfileSaveState =
    studentProfileSaveState === "saving" || studentProfileSaveState === "failed"
      ? studentProfileSaveState
      : isProfileDirty
        ? "dirty"
        : studentProfileSaveState;
  const isProfileSaving = effectiveProfileSaveState === "saving";
  const profileScheduleRows = createStudentScheduleRows(profileDraft.scheduleOverride);
  const hasUnparsedScheduleText = Boolean(String(profileDraft.scheduleOverride ?? "").trim()) && profileScheduleRows.length === 0;

  return (
    <ModalComponent
      className="wideModal"
      title={`${student.name} 학생 프로파일`}
      subtitle="기본정보를 먼저 보고, 필요한 기록만 펼쳐서 확인합니다."
      onClose={onClose}
    >
      <div className="studentProfileModalWrap">
        <div className="sectionHeader slim">
          <div>
            <p className="eyebrow">STUDENT PROFILE</p>
            <h2>{student.name}</h2>
          </div>
          <div className="profileHeaderActions">
            {effectiveProfileSaveState !== "idle" ? <InlineSaveStatus label="기본정보" saveState={effectiveProfileSaveState} /> : null}
            <InlineSaveStatus label="상담기록" saveState={studentConsultationSaveState} />
            <InlineSaveStatus label="성적" saveState={scoreRecordSaveState} />
            <InlineSaveStatus label="테스트" saveState={academyTestSaveState} />
            <span className="countBadge">{className}</span>
            {isEditingProfile ? (
              <>
                <button className="softButton" onClick={cancelProfileEdit} type="button">
                  {hasAnyEditingDraftChanges ? "취소" : "수정 종료"}
                </button>
              </>
            ) : (
              <button className="softButton" onClick={() => setIsEditingProfile(true)} type="button">수정</button>
            )}
          </div>
        </div>
        {profileSaveError ? (
          <div className="profileSaveError" role="alert">
            기본정보 저장 실패 · {profileSaveError}
          </div>
        ) : null}
        {profileActionError ? (
          <div className="profileSaveError" role="alert">
            {profileActionError}
          </div>
        ) : null}
        <details className="studentProfileSection" open>
          <summary>
            <div>
              <strong>기본정보</strong>
              <p>연락처, 로그인, 개별 스케줄을 관리합니다.</p>
            </div>
          </summary>
          <div className="studentProfileSectionBody">
            <details className="studentTallySubmissionPanel">
              <summary>
                <strong>학생이 Tally로 제출한 데이터</strong>
                <span>{tallySubmissions.length ? `${tallySubmissions.length}건` : "제출 데이터 없음"}</span>
              </summary>
              {tallySubmissions.length ? tallySubmissions.map((submission) => (
                <article className="studentTallySubmissionCard" key={submission.applicantId}>
                  <p>{submission.formName || "Tally"} · {submission.createdAt ? new Date(submission.createdAt).toLocaleString("ko-KR") : "제출 시각 미확인"}</p>
                  <dl>
                    {getTallySubmissionFieldRows(submission).map((row) => <div key={`${submission.applicantId}_${row.label}`}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}
                  </dl>
                </article>
              )) : <p className="muted">이 학생과 이름·연락처 또는 학교·학년이 일치하는 Tally 제출 원천이 없습니다.</p>}
            </details>
            <div className="studentProfileGrid">
              {renderProfileField("학교", "schoolName")}
              {renderProfileField("학년", "grade")}
              {renderProfileField("교재", "textbook", "미입력")}
              {renderProfileField("학생 전화", "studentPhone", "미입력")}
              {renderProfileField("학부모 전화", "parentPhone", "미입력")}
              <div>
                <small>로그인</small>
                {isEditingProfile ? (
                  <div className="profileLoginEdit">
                    <input
                      className="profileEditInput"
                      value={profileDraft.loginId ?? ""}
                      onChange={(event) => updateProfile("loginId", event.target.value)}
                      placeholder="아이디"
                    />
                    <input
                      className="profileEditInput"
                      value={profileDraft.pin ?? ""}
                      onChange={(event) => updateProfile("pin", event.target.value)}
                      placeholder="PIN"
                    />
                  </div>
                ) : (
                  <strong>{student.loginId} / {student.pin}</strong>
                )}
              </div>
              <div className="wideProfileItem">
                <small>개별 스케줄</small>
                {isEditingProfile ? (
                  <div className="studentScheduleEditor">
                    {hasUnparsedScheduleText ? (
                      <div className="studentScheduleLegacyText">
                        <strong>기존 입력값을 시간표 행으로 해석하지 못했습니다.</strong>
                        <span>{profileDraft.scheduleOverride}</span>
                        <button className="softButton compact" onClick={clearProfileScheduleRows} type="button">초기화 후 다시 입력</button>
                      </div>
                    ) : null}
                    {profileScheduleRows.map((row, rowIndex) => (
                      <div className="studentScheduleRow" key={row.rowId}>
                        <div className="studentScheduleDayButtons" aria-label="개별 스케줄 요일">
                          {studentScheduleDayOptions.map((day) => (
                            <button
                              className={row.days.includes(day.value) ? "active" : ""}
                              key={day.value}
                              onClick={() => toggleProfileScheduleDay(rowIndex, day.value)}
                              type="button"
                            >
                              {day.label}
                            </button>
                          ))}
                        </div>
                        <label>
                          시작
                          <input
                            type="time"
                            value={row.startTime}
                            onChange={(event) => updateProfileScheduleRow(rowIndex, { startTime: event.target.value || row.startTime })}
                          />
                        </label>
                        <label>
                          종료
                          <input
                            type="time"
                            value={row.endTime}
                            onChange={(event) => updateProfileScheduleRow(rowIndex, { endTime: event.target.value || row.endTime })}
                          />
                        </label>
                        <button className="dangerSoftButton compact" onClick={() => removeProfileScheduleRow(rowIndex)} type="button">삭제</button>
                      </div>
                    ))}
                    {profileScheduleRows.length ? (
                      <div className="studentSchedulePreview">
                        저장값: <strong>{formatStudentScheduleRows(profileScheduleRows)}</strong>
                      </div>
                    ) : (
                      <div className="studentScheduleEmpty">개별 스케줄을 쓰지 않으면 기본 반 스케줄이 적용됩니다.</div>
                    )}
                    <div className="studentScheduleActions">
                      <button className="softButton compact" onClick={addProfileScheduleRow} type="button">시간표 추가</button>
                      <button className="softButton compact" disabled={!profileScheduleRows.length && !profileDraft.scheduleOverride} onClick={clearProfileScheduleRows} type="button">기본 반 스케줄 사용</button>
                    </div>
                  </div>
                ) : (
                  <strong>{student.scheduleOverride || "기본 반 스케줄"}</strong>
                )}
                <span className="muted">반 이름과 실제 등원 시간이 다를 때 설정합니다. 저장 후 출결 수업 매칭과 지각 판정에 반영됩니다.</span>
              </div>
            </div>
          </div>
        </details>

        <details className="studentProfileSection">
          <summary>
            <div>
              <strong>학생별 운영 알림</strong>
              <p>상담 일정, 학부모 연락, 특이사항 알림을 대시보드 원본과 같이 봅니다.</p>
            </div>
            <span className="saveState save-idle inlineSaveStatus">09:00 슬랙 원본</span>
          </summary>
          <div className="studentProfileSectionBody">
            {isEditingProfile ? (
              <section className="studentReminderComposer">
            <div className="studentReminderControls">
              <select
                value={newReminderDraft.reminderType}
                onChange={(event) => updateNewReminderDraft("reminderType", event.target.value)}
              >
                {studentReminderTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <input
                type="date"
                value={newReminderDraft.reminderDate}
                onChange={(event) => updateNewReminderDraft("reminderDate", event.target.value)}
              />
              <input
                type="time"
                value={newReminderDraft.reminderTime}
                onChange={(event) => updateNewReminderDraft("reminderTime", event.target.value)}
              />
              <select
                value={newReminderDraft.priority}
                onChange={(event) => updateNewReminderDraft("priority", event.target.value)}
              >
                <option value="normal">일반</option>
                <option value="high">중요</option>
                <option value="low">낮음</option>
              </select>
              <label className="studentReminderSlackToggle">
                <input
                  checked={newReminderDraft.slackNotify !== false}
                  onChange={(event) => updateNewReminderDraft("slackNotify", event.target.checked)}
                  type="checkbox"
                />
                09:00 슬랙 포함
              </label>
              <button
                className="primaryButton"
                disabled={!hasNewReminderContent}
                onClick={() => runProfileAction("운영 알림 저장", saveNewReminderDraft)}
                type="button"
              >
                운영 알림 저장
              </button>
            </div>
            <input
              value={newReminderDraft.title}
              onChange={(event) => updateNewReminderDraft("title", event.target.value)}
              placeholder="알림 제목"
            />
            <textarea
              value={newReminderDraft.content}
              onChange={(event) => updateNewReminderDraft("content", event.target.value)}
              placeholder="예: 상담에서 확인할 내용, 학부모 요청, 다음 수업 전 확인할 특이사항"
            />
              </section>
            ) : (
              <div className="profileEditHint">수정 버튼을 누르면 이 학생의 운영 알림을 추가할 수 있습니다.</div>
            )}
            <div className="studentReminderList">
              {academyReminders.length === 0 ? (
                <div className="emptyState">이 학생에게 연결된 운영 알림이 없습니다.</div>
              ) : (
                academyReminders.map((reminder) => (
                  <article className={`studentReminderItem status-${reminder.status || "pending"}`} key={reminder.reminderId}>
                <div className="studentConsultationMeta">
                  <span className="studentConsultationDate">{formatStudentReminderDateTime(reminder)}</span>
                  <span className="studentConsultationType">{studentReminderTypeLabel(reminder.reminderType ?? reminder.type)}</span>
                  <span className="studentConsultationType">{studentReminderStatusLabel(reminder.status)}</span>
                  {reminder.slackNotify === false ? <span className="studentConsultationType">슬랙 제외</span> : null}
                </div>
                <strong>{reminder.title || "운영 알림"}</strong>
                <p className="studentConsultationContent">{reminder.content || reminder.memo || "내용 없음"}</p>
                {isEditingProfile ? (
                  <div className="studentProfileRowActions">
                    <button
                      className="softButton primarySoft"
                      disabled={reminder.status === "done"}
                      onClick={() =>
                        runProfileAction("운영 알림 완료", () =>
                          onSaveAcademyReminder?.({ ...reminder, status: "done", completedAt: new Date().toISOString() }) ?? Promise.resolve()
                        )
                      }
                      type="button"
                    >
                      완료
                    </button>
                    <button
                      className="dangerSoftButton"
                      onClick={() =>
                        runProfileAction("운영 알림 삭제", () => onDeleteAcademyReminder?.(reminder.reminderId) ?? Promise.resolve())
                      }
                      type="button"
                    >
                      삭제
                    </button>
                  </div>
                ) : null}
                  </article>
                ))
              )}
            </div>
          </div>
        </details>

        <details className="studentProfileSection">
          <summary>
            <div>
              <strong>상담 기록</strong>
              <p>학생 상담과 학부모 상담을 날짜별로 구분해 남깁니다.</p>
            </div>
            <InlineSaveStatus label="상담기록" saveState={studentConsultationSaveState} />
          </summary>
          <div className="studentProfileSectionBody">
            {isEditingProfile ? (
              <section className="studentConsultationComposer">
            <div className="studentConsultationControls">
              <select
                value={newConsultationDraft.consultationType}
                onChange={(event) => updateNewConsultationDraft("consultationType", event.target.value)}
              >
                {consultationTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <input
                type="date"
                value={newConsultationDraft.consultationDate}
                onChange={(event) => updateNewConsultationDraft("consultationDate", event.target.value)}
              />
              <button
                className="primaryButton"
                disabled={!hasNewConsultationContent || studentConsultationSaveState === "saving"}
                onClick={() => runProfileAction("상담 저장", saveNewConsultationDraft)}
                type="button"
              >
                {hasNewConsultationContent ? saveActionLabel("상담 저장", studentConsultationSaveState) : "상담 저장"}
              </button>
            </div>
            <textarea
              value={newConsultationDraft.content}
              onChange={(event) => updateNewConsultationDraft("content", event.target.value)}
              placeholder="상담 내용을 정리하세요. 예: 학습 태도, 숙제 습관, 학부모 요청사항, 다음 조치"
            />
              </section>
            ) : (
              <div className="profileEditHint">수정 버튼을 누르면 새 상담 입력과 기존 상담 수정이 열립니다.</div>
            )}
            <div className="studentConsultationList">
              {consultations.length === 0 ? (
                <div className="emptyState">아직 상담 기록이 없습니다.</div>
              ) : (
                consultations.map((item) => {
              const draft = consultationDrafts[item.consultationId] ?? item;
              const isDirty = Boolean(consultationDrafts[item.consultationId]);
              return (
                <article className={isDirty ? "studentConsultationItem dirty" : "studentConsultationItem"} key={item.consultationId}>
                  <div className="studentConsultationMeta">
                    {isEditingProfile ? (
                      <>
                        <select
                          value={draft.consultationType}
                          onChange={(event) => updateConsultationDraft(item.consultationId, "consultationType", event.target.value)}
                        >
                          {consultationTypeOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                        <input
                          type="date"
                          value={draft.consultationDate ?? ""}
                          onChange={(event) => updateConsultationDraft(item.consultationId, "consultationDate", event.target.value)}
                        />
                      </>
                    ) : (
                      <span className="studentConsultationDate">{draft.consultationDate || "-"}</span>
                    )}
                    <span className="studentConsultationType">{consultationTypeLabel(draft.consultationType)}</span>
                  </div>
                  {isEditingProfile ? (
                    <textarea
                      value={draft.content ?? ""}
                      onChange={(event) => updateConsultationDraft(item.consultationId, "content", event.target.value)}
                    />
                  ) : (
                    <p className="studentConsultationContent">{draft.content || "내용 없음"}</p>
                  )}
                  {isEditingProfile ? (
                    <div className="studentProfileRowActions">
                      <button
                        className="softButton primarySoft"
                        disabled={!isDirty || studentConsultationSaveState === "saving"}
                        onClick={() => runProfileAction("상담 변경 저장", () => saveConsultationDraft(item))}
                        type="button"
                      >
                        {isDirty ? saveActionLabel("변경 저장", studentConsultationSaveState) : "저장됨"}
                      </button>
                      <button
                        className="dangerSoftButton"
                        onClick={() =>
                          runProfileAction("상담 삭제", () => onDeleteStudentConsultation?.(item.consultationId) ?? Promise.resolve())
                        }
                        type="button"
                      >
                        삭제
                      </button>
                    </div>
                  ) : null}
                </article>
              );
                })
              )}
            </div>
          </div>
        </details>

        <details className="studentProfileSection">
          <summary>
            <div>
              <strong>성적 기록</strong>
              <p>학교 내신 시험과 모의고사 성적을 초안으로 입력한 뒤 저장합니다.</p>
            </div>
            <InlineSaveStatus label="성적" saveState={scoreRecordSaveState} />
          </summary>
          <div className="studentProfileSectionBody">
            <div className="managementTable studentScoreModalTable">
              <div className="managementRow scoreRow managementHead">
            <span>구분</span>
            <span>날짜</span>
            <span>과목</span>
            <span>점수</span>
            <span>등급</span>
            <span>메모</span>
            <span>관리</span>
              </div>
              {isEditingProfile ? (
                <div className="managementRow studentScoreRow draftRow">
              <select value={newScoreDraft.examType} onChange={(event) => updateNewScoreDraft("examType", event.target.value)}>
                <option value="내신">내신</option>
                <option value="모의고사">모의고사</option>
              </select>
              <input type="date" value={newScoreDraft.examDate} onChange={(event) => updateNewScoreDraft("examDate", event.target.value)} />
              <input value={newScoreDraft.subject} onChange={(event) => updateNewScoreDraft("subject", event.target.value)} />
              <input value={newScoreDraft.score} onChange={(event) => updateNewScoreDraft("score", event.target.value)} placeholder="점수" />
              <input value={newScoreDraft.grade} onChange={(event) => updateNewScoreDraft("grade", event.target.value)} placeholder="등급" />
              <input value={newScoreDraft.note} onChange={(event) => updateNewScoreDraft("note", event.target.value)} placeholder="메모" />
              <button
                className="primaryButton compact"
                disabled={!hasNewScoreDraftChanges || scoreRecordSaveState === "saving"}
                onClick={() => runProfileAction("성적 저장", saveNewScoreDraft)}
                type="button"
              >
                {hasNewScoreDraftChanges ? saveActionLabel("성적 저장", scoreRecordSaveState) : "성적 저장"}
              </button>
                </div>
              ) : (
                <div className="profileEditHint">수정 버튼을 누르면 성적 입력과 기존 성적 수정이 열립니다.</div>
              )}
              {scores.length === 0 ? (
                <div className="emptyState">아직 저장된 성적이 없습니다.</div>
              ) : (
                scores.map((item) => {
              const draft = scoreDrafts[item.scoreRecordId] ?? item;
              const isDirty = Boolean(scoreDrafts[item.scoreRecordId]);
              return (
                <div className={isDirty ? "managementRow studentScoreRow dirty" : "managementRow studentScoreRow"} key={item.scoreRecordId}>
                  {isEditingProfile ? (
                    <>
                      <select value={draft.examType} onChange={(event) => updateScoreDraft(item.scoreRecordId, "examType", event.target.value)}>
                        <option value="내신">내신</option>
                        <option value="모의고사">모의고사</option>
                      </select>
                      <input type="date" value={draft.examDate ?? ""} onChange={(event) => updateScoreDraft(item.scoreRecordId, "examDate", event.target.value)} />
                      <input value={draft.subject ?? ""} onChange={(event) => updateScoreDraft(item.scoreRecordId, "subject", event.target.value)} />
                      <input value={draft.score ?? ""} onChange={(event) => updateScoreDraft(item.scoreRecordId, "score", event.target.value)} />
                      <input value={draft.grade ?? ""} onChange={(event) => updateScoreDraft(item.scoreRecordId, "grade", event.target.value)} />
                      <input value={draft.note ?? ""} onChange={(event) => updateScoreDraft(item.scoreRecordId, "note", event.target.value)} />
                      <div className="studentProfileRowActions">
                        <button
                          className="softButton primarySoft"
                          disabled={!isDirty || scoreRecordSaveState === "saving"}
                          onClick={() => runProfileAction("성적 변경 저장", () => saveScoreDraft(item))}
                          type="button"
                        >
                          {isDirty ? saveActionLabel("변경 저장", scoreRecordSaveState) : "저장됨"}
                        </button>
                        <button
                          className="dangerSoftButton"
                          onClick={() => runProfileAction("성적 삭제", () => onDeleteScore?.(item.scoreRecordId) ?? Promise.resolve())}
                          type="button"
                        >
                          삭제
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <span>{draft.examType || "-"}</span>
                      <span>{draft.examDate || "-"}</span>
                      <span>{draft.subject || "-"}</span>
                      <span>{draft.score || "-"}</span>
                      <span>{draft.grade || "-"}</span>
                      <span>{draft.note || "-"}</span>
                      <span className="profileSavedText">저장됨</span>
                    </>
                  )}
                </div>
              );
                })
              )}
            </div>
          </div>
        </details>

        <details className="studentProfileSection">
          <summary>
            <div>
              <strong>테스트 성적</strong>
              <p>학원 데일리/단원/누적 테스트 성적을 초안으로 입력한 뒤 저장합니다.</p>
            </div>
            <InlineSaveStatus label="테스트" saveState={academyTestSaveState} />
          </summary>
          <div className="studentProfileSectionBody">
            <div className="managementTable studentProfileDataTable">
              <div className="managementRow academyTestProfileRow managementHead">
            <span>날짜</span>
            <span>테스트명</span>
            <span>범위</span>
            <span>점수</span>
            <span>평균</span>
            <span>메모</span>
            <span>관리</span>
              </div>
              {isEditingProfile ? (
                <div className="managementRow academyTestProfileRow draftRow">
              <input type="date" value={newAcademyTestDraft.testDate} onChange={(event) => updateNewAcademyTestDraft("testDate", event.target.value)} />
              <input value={newAcademyTestDraft.title} onChange={(event) => updateNewAcademyTestDraft("title", event.target.value)} />
              <input value={newAcademyTestDraft.scope} onChange={(event) => updateNewAcademyTestDraft("scope", event.target.value)} placeholder="범위" />
              <input value={newAcademyTestDraft.score} onChange={(event) => updateNewAcademyTestDraft("score", event.target.value)} placeholder="점수" />
              <input value={newAcademyTestDraft.averageScore} onChange={(event) => updateNewAcademyTestDraft("averageScore", event.target.value)} placeholder="평균" />
              <input value={newAcademyTestDraft.note} onChange={(event) => updateNewAcademyTestDraft("note", event.target.value)} placeholder="메모" />
              <button
                className="primaryButton compact"
                disabled={!hasNewAcademyTestDraftChanges || academyTestSaveState === "saving"}
                onClick={() => runProfileAction("테스트 저장", saveNewAcademyTestDraft)}
                type="button"
              >
                {hasNewAcademyTestDraftChanges ? saveActionLabel("테스트 저장", academyTestSaveState) : "테스트 저장"}
              </button>
                </div>
              ) : (
                <div className="profileEditHint">수정 버튼을 누르면 테스트 입력과 기존 테스트 수정이 열립니다.</div>
              )}
              {academyTests.length === 0 ? (
                <div className="emptyState">아직 저장된 테스트 성적이 없습니다.</div>
              ) : (
                academyTests.map((item) => {
              const draft = academyTestDrafts[item.testId] ?? item;
              const isDirty = Boolean(academyTestDrafts[item.testId]);
              return (
                <div className={isDirty ? "managementRow academyTestProfileRow dirty" : "managementRow academyTestProfileRow"} key={item.testId}>
                  {isEditingProfile ? (
                    <>
                      <input type="date" value={draft.testDate ?? ""} onChange={(event) => updateAcademyTestDraft(item.testId, "testDate", event.target.value)} />
                      <input value={draft.title ?? ""} onChange={(event) => updateAcademyTestDraft(item.testId, "title", event.target.value)} />
                      <input value={draft.scope ?? ""} onChange={(event) => updateAcademyTestDraft(item.testId, "scope", event.target.value)} />
                      <input value={draft.score ?? ""} onChange={(event) => updateAcademyTestDraft(item.testId, "score", event.target.value)} placeholder="점수" />
                      <input value={draft.averageScore ?? ""} onChange={(event) => updateAcademyTestDraft(item.testId, "averageScore", event.target.value)} placeholder="평균" />
                      <input value={draft.note ?? ""} onChange={(event) => updateAcademyTestDraft(item.testId, "note", event.target.value)} />
                      <div className="studentProfileRowActions">
                        <button
                          className="softButton primarySoft"
                          disabled={!isDirty || academyTestSaveState === "saving"}
                          onClick={() => runProfileAction("테스트 변경 저장", () => saveAcademyTestDraft(item))}
                          type="button"
                        >
                          {isDirty ? saveActionLabel("변경 저장", academyTestSaveState) : "저장됨"}
                        </button>
                        <button
                          className="dangerSoftButton"
                          onClick={() => runProfileAction("테스트 삭제", () => onDeleteAcademyTest?.(item.testId) ?? Promise.resolve())}
                          type="button"
                        >
                          삭제
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <span>{draft.testDate || "-"}</span>
                      <span>{draft.title || "-"}</span>
                      <span>{draft.scope || "-"}</span>
                      <span>{draft.score || "-"}</span>
                      <span>{draft.averageScore || "-"}</span>
                      <span>{draft.note || "-"}</span>
                      <span className="profileSavedText">저장됨</span>
                    </>
                  )}
                </div>
              );
                })
              )}
            </div>
          </div>
        </details>
        {isEditingProfile ? (
          <StickySaveBar
            className="studentProfileStickySaveBar"
            label="기본정보"
            message={
              isProfileDirty
                ? `기본정보 변경 ${profileDirtyFieldCount}개 · 상담·성적·테스트·운영 알림은 각 영역에서 별도 저장`
                : separateDirtyLabels.length
                  ? `기본정보 변경 없음 · ${separateDirtyLabels.join("·")}은 각 영역에서 별도 저장 필요`
                  : "기본정보 변경 없음 · 상담·성적·테스트·운영 알림은 각 영역에서 별도 저장"
            }
            saveState={effectiveProfileSaveState}
          >
            <button
              className="saveButton"
              disabled={!isProfileDirty || isProfileSaving}
              onClick={saveProfileDraft}
              type="button"
            >
              {saveActionLabel("기본정보만 저장", effectiveProfileSaveState)}
            </button>
          </StickySaveBar>
        ) : null}
      </div>
    </ModalComponent>
  );
}
