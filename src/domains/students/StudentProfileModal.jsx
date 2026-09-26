import { Component, useEffect, useMemo, useRef, useState } from "react";
import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { Disclosure } from "../../shared/components/Disclosure.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { HelpTip } from "../../shared/components/HelpTip.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { ListCard, ListCardActions } from "../../shared/components/ListCard.jsx";
import { ModalFooter } from "../../shared/components/Modal.jsx";
import { OverflowMenu } from "../../shared/components/OverflowMenu.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import { findStudentPartialDefaultLessonOverlaps, parseStudentScheduleOverride } from "../../shared/utils/studentSchedule.js";
import { getCurrentKoreaMonthKey } from "../settlements/monthlySettlement.js";
import { buildStudentMonthlyAttendanceSummary } from "../settlements/settlementAttendance.js";
import { StudentMonthlyReportModal } from "./StudentMonthlyReportModal.jsx";
import { getRosterEffectiveFromDate, hasStudentLessonRowOnDate } from "./rosterEffectiveDate.js";
import "./studentProfileModal.css";
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
  // 반 이동이 목록 인라인 편집에서 이 모달로 들어왔다(2026-09-18). 이 목록이 draft 초기값과
  // 변경 판정·저장 payload 를 한꺼번에 만들기 때문에 여기 없으면 반이 draft 에 실리지 않는다.
  "defaultClassTemplateId",
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

// 섹션 헤더·허브 타일에 보여줄 저장 상태. 버튼 라벨에 상태를 섞지 않고(R6) 이 값 하나를
// InlineSaveStatus 로 그린다. 진행 중·실패는 그대로, 아니면 초안 유무로 '변경됨' 을 판단한다.
function getSectionSaveState(saveState, hasDraftChanges) {
  if (saveState === "saving" || saveState === "verifying" || saveState === "failed") return saveState;
  if (hasDraftChanges) return "dirty";
  // 저장 직후는 '저장 완료', 그 밖(초기·알 수 없는 값)은 '저장 전' 으로 6종 어휘 안에 둔다.
  return saveState === "saved" ? "saved" : "idle";
}

export class StudentProfileErrorBoundary extends Component {
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

export function StudentProfileModal({
  academyTestSaveState = "idle",
  academyReminders = [],
  academyTests,
  className,
  consultations = [],
  lessons = [],
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
  onSaveTeacherOperatingMemo,
  onWithdraw,
  onSaveStudentConsultation,
  records = [],
  scores,
  scoreRecordSaveState = "idle",
  studentConsultationSaveState = "idle",
  studentProfileSaveState = "idle",
  student,
  templates = [],
  today = "",
  teacherOperatingMemo = "",
  teacherOperatingMemoSaveState = "idle",
  tallySubmissions = []
}) {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileDraft, setProfileDraft] = useState(() => createStudentProfileDraft(student));
  const profileDraftRevisionRef = useRef(0);
  const [profileSaveError, setProfileSaveError] = useState("");
  const [forceRosterReconcile, setForceRosterReconcile] = useState(false);
  const [rosterEffectiveMode, setRosterEffectiveMode] = useState("today");
  const [isPartialOverlapConfirmationOpen, setIsPartialOverlapConfirmationOpen] = useState(false);
  const [profileActionError, setProfileActionError] = useState("");
  const [isEditingTeacherOperatingMemo, setIsEditingTeacherOperatingMemo] = useState(false);
  const [teacherOperatingMemoDraft, setTeacherOperatingMemoDraft] = useState(teacherOperatingMemo);
  const [teacherOperatingMemoError, setTeacherOperatingMemoError] = useState("");
  const [scoreDrafts, setScoreDrafts] = useState({});
  const [academyTestDrafts, setAcademyTestDrafts] = useState({});
  const [consultationDrafts, setConsultationDrafts] = useState({});
  const [newScoreDraft, setNewScoreDraft] = useState(() => createScoreDraft(student.studentId));
  const [newAcademyTestDraft, setNewAcademyTestDraft] = useState(() => createAcademyTestDraft(student.studentId));
  const [newConsultationDraft, setNewConsultationDraft] = useState(() => createConsultationDraft(student.studentId));
  const [newReminderDraft, setNewReminderDraft] = useState(() => createStudentReminderDraft(student.studentId));
  const [attendanceMonth, setAttendanceMonth] = useState(getCurrentKoreaMonthKey);
  const [isMonthlyReportOpen, setIsMonthlyReportOpen] = useState(false);
  const [openSectionKey, setOpenSectionKey] = useState(null);
  const attendanceSummary = useMemo(() => buildStudentMonthlyAttendanceSummary({
    lessons,
    monthKey: attendanceMonth,
    records,
    student,
    studentId: student.studentId
  }), [attendanceMonth, lessons, records, student]);

  useEffect(() => {
    setIsEditingProfile(false);
    setProfileDraft(createStudentProfileDraft(student));
    profileDraftRevisionRef.current = 0;
    setProfileSaveError("");
    setForceRosterReconcile(false);
    setIsPartialOverlapConfirmationOpen(false);
    setProfileActionError("");
    setIsEditingTeacherOperatingMemo(false);
    setTeacherOperatingMemoDraft(teacherOperatingMemo);
    setTeacherOperatingMemoError("");
    setScoreDrafts({});
    setAcademyTestDrafts({});
    setConsultationDrafts({});
    setNewScoreDraft(createScoreDraft(student.studentId));
    setNewAcademyTestDraft(createAcademyTestDraft(student.studentId));
    setNewConsultationDraft(createConsultationDraft(student.studentId));
    setNewReminderDraft(createStudentReminderDraft(student.studentId));
    setAttendanceMonth(getCurrentKoreaMonthKey());
    setIsMonthlyReportOpen(false);
    setOpenSectionKey(null);
  }, [student.studentId]);

  useEffect(() => {
    if (!isEditingTeacherOperatingMemo) setTeacherOperatingMemoDraft(teacherOperatingMemo);
  }, [isEditingTeacherOperatingMemo, teacherOperatingMemo]);

  useEffect(() => {
    if (!isEditingProfile) {
      setProfileDraft(createStudentProfileDraft(student));
    }
  }, [isEditingProfile, student]);

  function clearProfileErrors() {
    setProfileSaveError("");
    setProfileActionError("");
  }

  async function saveTeacherOperatingMemo() {
    setTeacherOperatingMemoError("");
    try {
      await onSaveTeacherOperatingMemo?.(student.studentId, teacherOperatingMemoDraft);
      setIsEditingTeacherOperatingMemo(false);
    } catch (error) {
      setTeacherOperatingMemoError(error?.message || "강사 운영 메모 저장에 실패했습니다.");
    }
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
    if (field === "scheduleOverride" && String(value ?? "") !== String(student.scheduleOverride ?? "")) {
      setRosterEffectiveMode(hasTodayLessonRow ? "tomorrow" : "today");
    }
    profileDraftRevisionRef.current += 1;
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

  async function saveProfileDraft({ partialOverlapConfirmed = false } = {}) {
    if (hasRosterScheduleChanges && partialDefaultLessonOverlaps.length > 0 && !partialOverlapConfirmed) {
      setIsPartialOverlapConfirmationOpen(true);
      return;
    }
    const saveRevision = profileDraftRevisionRef.current;
    clearProfileErrors();
    try {
      await onSaveStudentProfile?.(
        { ...student, ...profileDraft, studentId: student.studentId },
        { forceRosterReconcile, rosterEffectiveMode }
      );
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
      if (profileDraftRevisionRef.current !== saveRevision) return;
      if (!hasOtherDraftChanges) setIsEditingProfile(false);
      setForceRosterReconcile(false);
      setIsPartialOverlapConfirmationOpen(false);
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
    setForceRosterReconcile(false);
    setIsPartialOverlapConfirmationOpen(false);
    setIsEditingProfile(false);
  }

  function startProfileEdit() {
    setRosterEffectiveMode(hasTodayLessonRow ? "tomorrow" : "today");
    setIsEditingProfile(true);
  }

  // 저장하지 않은 초안(기본정보·상담·성적·테스트·운영 알림)이 있을 때만 한 번 묻는다(2026-09-19).
  // 확인 창 한 겹만 더할 뿐 저장은 호출하지 않는다. 섹션 모달을 닫는 것은 초안을 버리지 않으므로 묻지 않는다.
  function confirmDiscardDrafts() {
    return !hasAnyEditingDraftChanges || window.confirm("저장하지 않은 변경이 있습니다. 닫을까요?");
  }

  function handleRequestClose() {
    if (!confirmDiscardDrafts()) return;
    onClose?.();
  }

  function requestCancelProfileEdit() {
    if (!confirmDiscardDrafts()) return;
    cancelProfileEdit();
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
            aria-label={`${student.name} ${label}`}
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
  const hasProfileValueChanges = hasStudentProfileDraftChanges(student, profileDraft);
  const isProfileDirty = hasProfileValueChanges || forceRosterReconcile;
  const profileDirtyFieldCount = studentProfileFields.filter(
    (field) => String(student[field] ?? "") !== String(profileDraft[field] ?? "")
  ).length;
  const hasConsultationDraftChanges = Object.keys(consultationDrafts).length > 0 || hasNewConsultationDraftChanges;
  const hasScoreDraftChanges = Object.keys(scoreDrafts).length > 0 || hasNewScoreDraftChanges;
  const hasAcademyTestDraftChanges = Object.keys(academyTestDrafts).length > 0 || hasNewAcademyTestDraftChanges;
  const separateDirtyLabels = [
    hasNewReminderDraftChanges ? "운영 알림" : "",
    hasConsultationDraftChanges ? "상담" : "",
    hasScoreDraftChanges ? "성적" : "",
    hasAcademyTestDraftChanges ? "테스트" : ""
  ].filter(Boolean);
  const hasRecordDraftChanges =
    hasScoreDraftChanges ||
    hasAcademyTestDraftChanges ||
    hasConsultationDraftChanges ||
    hasNewReminderDraftChanges;
  const hasAnyEditingDraftChanges = isProfileDirty || hasRecordDraftChanges;
  const effectiveProfileSaveState = getSectionSaveState(studentProfileSaveState, isProfileDirty);
  const consultationSectionSaveState = getSectionSaveState(studentConsultationSaveState, hasConsultationDraftChanges);
  const scoreSectionSaveState = getSectionSaveState(scoreRecordSaveState, hasScoreDraftChanges);
  const academyTestSectionSaveState = getSectionSaveState(academyTestSaveState, hasAcademyTestDraftChanges);
  const isProfileSaving = effectiveProfileSaveState === "saving";
  const profileScheduleRows = createStudentScheduleRows(profileDraft.scheduleOverride);
  const hasUnparsedScheduleText = Boolean(String(profileDraft.scheduleOverride ?? "").trim()) && profileScheduleRows.length === 0;
  // 반 이동은 목록 인라인 편집을 없애면서 이 모달로 들어왔다(2026-09-18). 저장 경로는 이미
  // defaultClassTemplateId 변경을 명단 재계산으로 처리하고 있어서 UI 만 붙이면 된다.
  const hasClassTemplateChange =
    String(student.defaultClassTemplateId ?? "") !== String(profileDraft.defaultClassTemplateId ?? "");
  const hasRosterScheduleChanges = forceRosterReconcile ||
    String(student.scheduleOverride ?? "") !== String(profileDraft.scheduleOverride ?? "") ||
    hasClassTemplateChange;
  const hasTodayLessonRow = hasStudentLessonRowOnDate({
    date: today,
    lessons,
    records,
    studentId: student.studentId
  });
  const rosterEffectiveFromDate = getRosterEffectiveFromDate({ mode: rosterEffectiveMode, today });
  const partialDefaultLessonOverlaps = findStudentPartialDefaultLessonOverlaps(
    lessons.filter((lesson) => String(lesson.date ?? "") >= rosterEffectiveFromDate),
    { ...student, ...profileDraft }
  );
  const pendingReminderCount = academyReminders.filter((reminder) => reminder.status !== "done").length;
  // saveState 가 있는 타일은 idle('저장 전')이면 상태 줄을 그리지 않는다(shots-03). 메타 타일은 항상 그린다.
  const profileTileConfig = [
    {
      key: "basic",
      saveState: effectiveProfileSaveState,
      status: <InlineSaveStatus label="기본정보" saveState={effectiveProfileSaveState} />,
      subtitle: "연락처 · 로그인 · 개별 스케줄",
      title: "기본정보"
    },
    {
      key: "attendance",
      status: <span className="studentProfileTileMeta">정규 {attendanceSummary.regular.total}회 · 특강 {attendanceSummary.special.total}회</span>,
      subtitle: "정규·특강 수업일지 출결",
      title: "월별 출결"
    },
    {
      key: "alerts",
      status: <span className="studentProfileTileMeta">{academyReminders.length ? `대기 ${pendingReminderCount}건` : "등록된 알림 없음"}</span>,
      subtitle: "상담·연락·특이사항 일정",
      title: "운영 알림"
    },
    {
      key: "consultation",
      saveState: consultationSectionSaveState,
      status: <InlineSaveStatus label="상담기록" saveState={consultationSectionSaveState} />,
      subtitle: "학생·학부모 상담",
      title: "상담기록"
    },
    {
      key: "score",
      saveState: scoreSectionSaveState,
      status: <InlineSaveStatus label="성적" saveState={scoreSectionSaveState} />,
      subtitle: "내신·모의고사",
      title: "성적"
    },
    {
      key: "test",
      saveState: academyTestSectionSaveState,
      status: <InlineSaveStatus label="테스트" saveState={academyTestSectionSaveState} />,
      subtitle: "학원 자체 테스트",
      title: "테스트"
    }
  ];

  // 허브와 각 섹션 모달이 같은 isEditingProfile 을 토글한다(modals-03). 섹션 모달은 자기 backdrop 으로
  // 허브 헤더를 덮기 때문에, 섹션 안에서도 같은 버튼이 있어야 닫았다 여는 왕복이 없다.
  function renderProfileEditToggle(buttonClassName = "softButton") {
    return isEditingProfile ? (
      <button className={buttonClassName} disabled={isProfileSaving} onClick={requestCancelProfileEdit} type="button">
        {hasAnyEditingDraftChanges ? "취소" : "수정 종료"}
      </button>
    ) : (
      <button className={buttonClassName} onClick={startProfileEdit} type="button">수정</button>
    );
  }

  function renderSectionToolbar(statusNode = null) {
    return (
      <div className="studentProfileSectionToolbar">
        {statusNode}
        {renderProfileEditToggle("softButton compact")}
      </div>
    );
  }

  // 저장·삭제 실패 배너는 한 곳에만 그린다: 섹션 모달이 열려 있으면 그 본문 최상단, 아니면 허브(students-02).
  function renderProfileErrorBanner() {
    if (!profileSaveError && !profileActionError) return null;
    return (
      <>
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
      </>
    );
  }

  return (
    <ModalComponent
      className="wideModal"
      closeDisabled={isProfileSaving}
      title={`${student.name} 학생 프로파일`}
      titleAdornment={(
        <HelpTip label="학생 프로파일" text="기본정보를 먼저 보고, 필요한 기록만 펼쳐서 확인합니다." />
      )}
      onClose={handleRequestClose}
      scrollable
    >
      <div className="studentProfileModalWrap">
        <SectionHeader
          actions={(
            <>
            <span className="countBadge">{className}</span>
            {renderProfileEditToggle()}
            {/* 목록의 ⋯ 메뉴를 없애고 퇴원을 이 모달로 옮겼다(2026-09-17 요청). 드물고
                되돌리기 어려운 작업이라 톤을 구분하고, 확인 모달은 종전대로 거친다. */}
            {!isEditingProfile && onWithdraw ? (
              <button className="dangerSoftButton" onClick={onWithdraw} type="button">퇴원 처리</button>
            ) : null}
            </>
          )}
          actionsClassName="profileHeaderActions"
          density="slim"
          eyebrow="STUDENT PROFILE"
          title={student.name}
        />
        {openSectionKey ? null : renderProfileErrorBanner()}
        <div aria-label={`${student.name} 프로필 섹션`} className="studentProfileTileGrid" role="group">
          {profileTileConfig.map((tile) => (
            <button className="studentProfileTile" key={tile.key} onClick={() => setOpenSectionKey(tile.key)} type="button">
              <strong>{tile.title}</strong>
              <p>{tile.subtitle}</p>
              {tile.saveState === "idle" ? null : tile.status}
            </button>
          ))}
        </div>

        {openSectionKey === "attendance" ? (
          <ModalComponent
            className="studentProfileSectionModal"
            onClose={() => setOpenSectionKey(null)}
            title={`${student.name} · 월별 출결`}
          >
            {renderProfileErrorBanner()}
            <div className="studentAttendanceSectionActions">
              <input
                aria-label={`${student.name} 출결 조회 월`}
                className="studentAttendanceMonthInput"
                onChange={(event) => setAttendanceMonth(event.target.value)}
                type="month"
                value={attendanceMonth}
              />
              {/* 저장이 아니라 다른 모달을 여는 이동 액션이라 primary 가 아니다(students-10). */}
              <button className="softButton compact" onClick={() => setIsMonthlyReportOpen(true)} type="button">
                수업일정표
              </button>
            </div>
            <div className="studentProfileSectionBody studentAttendanceSummaryGrid">
              {[
                ["정규 출결", attendanceSummary.regular],
                ["특강 출결", attendanceSummary.special]
              ].map(([label, counts]) => (
                <article className="studentAttendanceSummaryCard" key={label}>
                  <div><strong>{label}</strong><b>{counts.total}회</b></div>
                  <p>
                    출석 {counts.present} · 지각 {counts.late} ·
                    결석 {counts.absent + counts.excused} · 대기 {counts.pending}
                  </p>
                </article>
              ))}
            </div>
          </ModalComponent>
        ) : null}

        {openSectionKey === "basic" ? (
          <ModalComponent
            className="studentProfileSectionModal wideModal"
            closeDisabled={isProfileSaving}
            onClose={() => setOpenSectionKey(null)}
            scrollable
            title={`${student.name} · 기본정보`}
          >
            {renderProfileErrorBanner()}
            {/* 기본정보 상태 pill 은 편집 중 하단 StickySaveBar 가 그리므로 여기서는 토글만 둔다. */}
            {renderSectionToolbar()}
            <div className="studentProfileSectionBody">
            <Disclosure className="studentTallySubmissionPanel" trigger={(
              <>
                <strong>학생이 Tally로 제출한 데이터</strong>
                <span>{tallySubmissions.length ? `${tallySubmissions.length}건` : "제출 데이터 없음"}</span>
              </>
            )}>
              {tallySubmissions.length ? tallySubmissions.map((submission) => (
                <article className="studentTallySubmissionCard" key={submission.applicantId}>
                  <p>{submission.formName || "Tally"} · {submission.createdAt ? new Date(submission.createdAt).toLocaleString("ko-KR") : "제출 시각 미확인"}</p>
                  <dl>
                    {getTallySubmissionFieldRows(submission).map((row) => <div key={`${submission.applicantId}_${row.label}`}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}
                  </dl>
                </article>
              )) : <p className="muted">이 학생과 이름·연락처 또는 학교·학년이 일치하는 Tally 제출 원천이 없습니다.</p>}
            </Disclosure>
            <section className="teacherOperatingMemoPanel">
              <div className="teacherOperatingMemoHeader">
                <div className="helpTipTitleRow">
                  <strong>강사 운영 메모</strong>
                  <HelpTip label="강사 운영 메모" text="진도, 교재, 특이사항, 다음 수업 계획을 교사용으로만 기록합니다." />
                </div>
                <div className="teacherOperatingMemoActions">
                  {teacherOperatingMemoSaveState !== "idle" ? <InlineSaveStatus label="강사 메모" saveState={teacherOperatingMemoSaveState} /> : null}
                  {isEditingTeacherOperatingMemo ? (
                    <button className="softButton compact" disabled={teacherOperatingMemoSaveState === "saving"} onClick={() => { setTeacherOperatingMemoDraft(teacherOperatingMemo); setTeacherOperatingMemoError(""); setIsEditingTeacherOperatingMemo(false); }} type="button">취소</button>
                  ) : <button className="softButton compact" onClick={() => setIsEditingTeacherOperatingMemo(true)} type="button">메모 수정</button>}
                </div>
              </div>
              {isEditingTeacherOperatingMemo ? (
                <>
                  <textarea aria-label={`${student.name} 강사 운영 메모`} className="profileEditInput teacherOperatingMemoInput" rows="5" value={teacherOperatingMemoDraft} onChange={(event) => { setTeacherOperatingMemoDraft(event.target.value); setTeacherOperatingMemoError(""); }} placeholder="예) 3-2 진도: 개념플러스유형, 쎈 완료. 다음 수업은 RPM 진행." />
                  <div className="teacherOperatingMemoSaveRow">
                    <button className="softButton compact" disabled={teacherOperatingMemoSaveState === "saving"} onClick={saveTeacherOperatingMemo} type="button">강사 운영 메모 저장</button>
                    <span>학생·학부모 포털과 알림톡에는 노출되지 않습니다.</span>
                  </div>
                </>
              ) : <p className={teacherOperatingMemo ? "teacherOperatingMemoContent" : "teacherOperatingMemoEmpty"}>{teacherOperatingMemo || "작성된 강사 운영 메모가 없습니다."}</p>}
              {teacherOperatingMemoError ? <p className="profileSaveError" role="alert">강사 운영 메모 저장 실패 · {teacherOperatingMemoError}</p> : null}
            </section>
            <div className="studentProfileGrid">
              {renderProfileField("학교", "schoolName")}
              {renderProfileField("학년", "grade")}
              <div>
                <small>반</small>
                {isEditingProfile ? (
                  <>
                    <select
                      aria-label={`${student.name} 반`}
                      className="profileEditInput"
                      onChange={(event) => updateProfile("defaultClassTemplateId", event.target.value)}
                      value={profileDraft.defaultClassTemplateId ?? ""}
                    >
                      <option value="">미배정</option>
                      {templates.map((template) => (
                        <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
                      ))}
                    </select>
                    {/* 반을 옮기면 미래 수업 명단이 따라 바뀐다. 오늘 수업 행·기록이 이미 있으면
                        오늘치를 건드릴지 먼저 골라야 한다(예전 목록 인라인 편집과 같은 선택). */}
                    {hasClassTemplateChange && hasTodayLessonRow ? (
                      <label className="studentRosterEffectiveChoice">
                        <strong>오늘 수업일지 명단도 옮길까요?</strong>
                        <select
                          aria-label={`${student.name} 반 변경 적용 시점`}
                          onChange={(event) => setRosterEffectiveMode(event.target.value)}
                          value={rosterEffectiveMode}
                        >
                          <option value="tomorrow">내일부터 반 이동</option>
                          <option value="today">오늘부터 반 이동</option>
                        </select>
                      </label>
                    ) : null}
                  </>
                ) : (
                  <strong>{className || "미배정"}</strong>
                )}
              </div>
              {renderProfileField("교재", "textbook", "미입력")}
              {renderProfileField("학생 전화", "studentPhone", "미입력")}
              {renderProfileField("학부모 전화", "parentPhone", "미입력")}
              <div>
                <small>로그인</small>
                {isEditingProfile ? (
                  <div className="profileLoginEdit">
                    <input
                      aria-label={`${student.name} 로그인 아이디`}
                      className="profileEditInput"
                      value={profileDraft.loginId ?? ""}
                      onChange={(event) => updateProfile("loginId", event.target.value)}
                      placeholder="아이디"
                    />
                    <input
                      aria-label={`${student.name} 로그인 PIN`}
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
                <div className="helpTipTitleRow">
                  <small>개별 스케줄</small>
                  <HelpTip label="개별 스케줄" text="선택한 요일과 시간이 기본 반보다 우선합니다." />
                </div>
                {/* 2026-09-26 · 저장하면 무엇이 바뀌는지는 고치는 그 자리에 보여야 한다(물음표 뒤로 보내지 않는다). */}
                {isEditingProfile ? (
                  <small className="studentScheduleSaveEffect">저장 후 미래 정규수업 명단, 출결 매칭, 지각 판정에 반영됩니다.</small>
                ) : null}
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
                        <div className="workspaceTabs workspaceTabs-compact" aria-label="개별 스케줄 요일" role="group">
                          {studentScheduleDayOptions.map((day) => (
                            <button
                              aria-pressed={row.days.includes(day.value)}
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
                        <button aria-label={`${rowIndex + 1}번째 개별 일정 제거`} className="iconButton" onClick={() => removeProfileScheduleRow(rowIndex)} type="button">×</button>
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
                      <button
                        className="softButton compact"
                        onClick={() => {
                          setForceRosterReconcile(true);
                          setRosterEffectiveMode(hasTodayLessonRow ? "tomorrow" : "today");
                        }}
                        type="button"
                      >현재 시간표로 명단 재계산</button>
                    </div>
                    {hasRosterScheduleChanges && hasTodayLessonRow ? (
                      <label className="studentRosterEffectiveChoice">
                        <strong>오늘 수업일지 명단도 변경할까요?</strong>
                        <span>오늘 수업 행·기록이 있어 적용 시점을 선택해야 합니다.</span>
                        <select
                          aria-label={`${student.name} 개별 시간표 적용 시점`}
                          onChange={(event) => setRosterEffectiveMode(event.target.value)}
                          value={rosterEffectiveMode}
                        >
                          <option value="tomorrow">오늘 명단 유지 · 내일부터 적용</option>
                          <option value="today">오늘 명단 포함 · 오늘부터 적용</option>
                        </select>
                      </label>
                    ) : null}
                  </div>
                ) : (
                  <strong>{student.scheduleOverride || "기본 반 스케줄"}</strong>
                )}
              </div>
            </div>
            </div>
            {isEditingProfile ? (
              <StickySaveBar
                className="studentProfileStickySaveBar"
                label="기본정보"
                message={
                  effectiveProfileSaveState === "failed"
                    ? "저장 실패 · 현재 입력은 유지됩니다. 서버 저장본을 확인한 뒤 다시 시도해 주세요."
                    : isProfileDirty
                    ? forceRosterReconcile && profileDirtyFieldCount === 0
                      ? "현재 시간표로 명단 재계산 · 저장 후 서버 재조회 확인"
                      : `기본정보 변경 ${profileDirtyFieldCount}개 · 상담·성적·테스트·운영 알림은 각 영역에서 별도 저장`
                    : separateDirtyLabels.length
                      ? `기본정보 변경 없음 · ${separateDirtyLabels.join("·")}은 각 영역에서 별도 저장 필요`
                      : "기본정보 변경 없음 · 상담·성적·테스트·운영 알림은 각 영역에서 별도 저장"
                }
                saveState={effectiveProfileSaveState}
              >
                <button
                  className="primaryButton"
                  disabled={!isProfileDirty || isProfileSaving}
                  onClick={saveProfileDraft}
                  type="button"
                >
                  {forceRosterReconcile && profileDirtyFieldCount === 0 ? "명단 재계산 저장" : "기본정보만 저장"}
                </button>
              </StickySaveBar>
            ) : null}
          </ModalComponent>
        ) : null}

        {openSectionKey === "alerts" ? (
          <ModalComponent
            className="studentProfileSectionModal"
            onClose={() => setOpenSectionKey(null)}
            scrollable
            title={`${student.name} · 학생별 운영 알림`}
            titleAdornment={(
              <HelpTip
                label="학생별 운영 알림"
                text="상담 일정, 학부모 연락, 특이사항 알림을 대시보드 원본과 같이 봅니다. 이 알림은 매일 09:00 슬랙 메시지 원본과 같은 내용입니다."
              />
            )}
          >
            {renderProfileErrorBanner()}
            {renderSectionToolbar()}
            {isEditingProfile ? (
              <section className="studentReminderComposer">
            <div className="studentReminderControls">
              <select
                aria-label={`${student.name} 운영 알림 종류`}
                value={newReminderDraft.reminderType}
                onChange={(event) => updateNewReminderDraft("reminderType", event.target.value)}
              >
                {studentReminderTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <input
                aria-label={`${student.name} 운영 알림 날짜`}
                type="date"
                value={newReminderDraft.reminderDate}
                onChange={(event) => updateNewReminderDraft("reminderDate", event.target.value)}
              />
              <input
                aria-label={`${student.name} 운영 알림 시간`}
                type="time"
                value={newReminderDraft.reminderTime}
                onChange={(event) => updateNewReminderDraft("reminderTime", event.target.value)}
              />
              <select
                aria-label={`${student.name} 운영 알림 중요도`}
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
              aria-label={`${student.name} 운영 알림 제목`}
              value={newReminderDraft.title}
              onChange={(event) => updateNewReminderDraft("title", event.target.value)}
              placeholder="알림 제목"
            />
            <textarea
              aria-label={`${student.name} 운영 알림 내용`}
              value={newReminderDraft.content}
              onChange={(event) => updateNewReminderDraft("content", event.target.value)}
              placeholder="예: 상담에서 확인할 내용, 학부모 요청, 다음 수업 전 확인할 특이사항"
            />
              </section>
            ) : null}
            <div className="studentReminderList">
              {academyReminders.length === 0 ? (
                <EmptyState title="이 학생에게 연결된 운영 알림이 없습니다." />
              ) : (
                academyReminders.map((reminder) => (
                  <ListCard className={`studentReminderItem status-${reminder.status || "pending"}`} density="compact" key={reminder.reminderId}>
                <div className="studentConsultationMeta">
                  <span className="studentConsultationDate">{formatStudentReminderDateTime(reminder)}</span>
                  <span className="studentConsultationType">{studentReminderTypeLabel(reminder.reminderType ?? reminder.type)}</span>
                  <span className="studentConsultationType">{studentReminderStatusLabel(reminder.status)}</span>
                  {reminder.slackNotify === false ? <span className="studentConsultationType">슬랙 제외</span> : null}
                </div>
                <strong>{reminder.title || "운영 알림"}</strong>
                <p className="studentConsultationContent">{reminder.content || reminder.memo || "내용 없음"}</p>
                {isEditingProfile ? (
                  <ListCardActions className="studentProfileRowActions">
                    {/* 대시보드 AcademyReminderList 와 같은 배치: 완료는 done 이 아닐 때만, 삭제는 ⋯ 안(R1·R3). */}
                    {reminder.status !== "done" ? (
                      <button
                        className="softButton"
                        onClick={() =>
                          runProfileAction("운영 알림 완료", () =>
                            onSaveAcademyReminder?.({ ...reminder, status: "done", completedAt: new Date().toISOString() }) ?? Promise.resolve()
                          )
                        }
                        type="button"
                      >
                        완료
                      </button>
                    ) : null}
                    <OverflowMenu
                      items={[
                        {
                          key: "delete",
                          label: "삭제",
                          onSelect: () =>
                            runProfileAction("운영 알림 삭제", () => onDeleteAcademyReminder?.(reminder.reminderId) ?? Promise.resolve()),
                          tone: "danger"
                        }
                      ]}
                      label={`${reminder.title || "운영 알림"} 추가 작업`}
                    />
                  </ListCardActions>
                ) : null}
                  </ListCard>
                ))
              )}
            </div>
          </ModalComponent>
        ) : null}

        {openSectionKey === "consultation" ? (
          <ModalComponent
            className="studentProfileSectionModal"
            onClose={() => setOpenSectionKey(null)}
            scrollable
            title={`${student.name} · 상담 기록`}
            titleAdornment={(
              <HelpTip label="상담 기록" text="학생 상담과 학부모 상담을 날짜별로 구분해 남깁니다." />
            )}
          >
            {renderProfileErrorBanner()}
            {renderSectionToolbar(
              consultationSectionSaveState === "idle" ? null : <InlineSaveStatus label="상담기록" saveState={consultationSectionSaveState} />
            )}
            {isEditingProfile ? (
              <section className="studentConsultationComposer">
            <div className="studentConsultationControls">
              <select
                aria-label={`${student.name} 새 상담 구분`}
                value={newConsultationDraft.consultationType}
                onChange={(event) => updateNewConsultationDraft("consultationType", event.target.value)}
              >
                {consultationTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <input
                aria-label={`${student.name} 새 상담 날짜`}
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
                상담 저장
              </button>
            </div>
            <textarea
              aria-label={`${student.name} 새 상담 내용`}
              value={newConsultationDraft.content}
              onChange={(event) => updateNewConsultationDraft("content", event.target.value)}
              placeholder="상담 내용을 정리하세요. 예: 학습 태도, 숙제 습관, 학부모 요청사항, 다음 조치"
            />
              </section>
            ) : null}
            <div className="studentConsultationList">
              {consultations.length === 0 ? (
                <EmptyState title="아직 상담 기록이 없습니다." />
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
                          aria-label={`${student.name} ${item.consultationDate || "상담"} 구분`}
                          value={draft.consultationType}
                          onChange={(event) => updateConsultationDraft(item.consultationId, "consultationType", event.target.value)}
                        >
                          {consultationTypeOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                        <input
                          aria-label={`${student.name} ${item.consultationDate || "상담"} 날짜`}
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
                      aria-label={`${student.name} ${item.consultationDate || "상담"} 내용`}
                      value={draft.content ?? ""}
                      onChange={(event) => updateConsultationDraft(item.consultationId, "content", event.target.value)}
                    />
                  ) : (
                    <p className="studentConsultationContent">{draft.content || "내용 없음"}</p>
                  )}
                  {isEditingProfile ? (
                    <div className="studentProfileRowActions">
                      {/* 변경된 행에만 저장 버튼, 삭제는 ⋯ 안(R1·R3). 저장 상태는 섹션 상단 InlineSaveStatus 가 맡는다. */}
                      {isDirty ? (
                        <button
                          className="softButton"
                          disabled={studentConsultationSaveState === "saving"}
                          onClick={() => runProfileAction("상담 변경 저장", () => saveConsultationDraft(item))}
                          type="button"
                        >
                          변경 저장
                        </button>
                      ) : null}
                      <OverflowMenu
                        items={[
                          {
                            key: "delete",
                            label: "삭제",
                            onSelect: () =>
                              runProfileAction("상담 삭제", () => onDeleteStudentConsultation?.(item.consultationId) ?? Promise.resolve()),
                            tone: "danger"
                          }
                        ]}
                        label={`${student.name} ${item.consultationDate || "상담"} 상담 추가 작업`}
                      />
                    </div>
                  ) : null}
                </article>
              );
                })
              )}
            </div>
          </ModalComponent>
        ) : null}

        {openSectionKey === "score" ? (
          <ModalComponent
            className="studentProfileSectionModal"
            onClose={() => setOpenSectionKey(null)}
            scrollable
            title={`${student.name} · 성적 기록`}
            titleAdornment={(
              <HelpTip label="성적 기록" text="학교 내신 시험과 모의고사 성적을 초안으로 입력한 뒤 저장합니다." />
            )}
          >
            {renderProfileErrorBanner()}
            {renderSectionToolbar(
              scoreSectionSaveState === "idle" ? null : <InlineSaveStatus label="성적" saveState={scoreSectionSaveState} />
            )}
            <DataTableShell className="managementTable studentScoreModalTable" label="학생 성적 기록">
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
              <select aria-label={`${student.name} 새 성적 구분`} value={newScoreDraft.examType} onChange={(event) => updateNewScoreDraft("examType", event.target.value)}>
                <option value="내신">내신</option>
                <option value="모의고사">모의고사</option>
              </select>
              <input aria-label={`${student.name} 새 성적 날짜`} type="date" value={newScoreDraft.examDate} onChange={(event) => updateNewScoreDraft("examDate", event.target.value)} />
              <input aria-label={`${student.name} 새 성적 과목`} value={newScoreDraft.subject} onChange={(event) => updateNewScoreDraft("subject", event.target.value)} />
              <input aria-label={`${student.name} 새 성적 점수`} value={newScoreDraft.score} onChange={(event) => updateNewScoreDraft("score", event.target.value)} placeholder="점수" />
              <input aria-label={`${student.name} 새 성적 등급`} value={newScoreDraft.grade} onChange={(event) => updateNewScoreDraft("grade", event.target.value)} placeholder="등급" />
              <input aria-label={`${student.name} 새 성적 메모`} value={newScoreDraft.note} onChange={(event) => updateNewScoreDraft("note", event.target.value)} placeholder="메모" />
              <button
                className="primaryButton compact"
                disabled={!hasNewScoreDraftChanges || scoreRecordSaveState === "saving"}
                onClick={() => runProfileAction("성적 저장", saveNewScoreDraft)}
                type="button"
              >
                성적 저장
              </button>
                </div>
              ) : null}
              {scores.length === 0 ? (
                <EmptyState title="아직 저장된 성적이 없습니다." />
              ) : (
                scores.map((item) => {
              const draft = scoreDrafts[item.scoreRecordId] ?? item;
              const isDirty = Boolean(scoreDrafts[item.scoreRecordId]);
              return (
                <div className={isDirty ? "managementRow studentScoreRow dirty" : "managementRow studentScoreRow"} key={item.scoreRecordId}>
                  {isEditingProfile ? (
                    <>
                      <select aria-label={`${student.name} ${item.examDate || "성적"} 구분`} value={draft.examType} onChange={(event) => updateScoreDraft(item.scoreRecordId, "examType", event.target.value)}>
                        <option value="내신">내신</option>
                        <option value="모의고사">모의고사</option>
                      </select>
                      <input aria-label={`${student.name} ${item.examDate || "성적"} 날짜`} type="date" value={draft.examDate ?? ""} onChange={(event) => updateScoreDraft(item.scoreRecordId, "examDate", event.target.value)} />
                      <input aria-label={`${student.name} ${item.examDate || "성적"} 과목`} value={draft.subject ?? ""} onChange={(event) => updateScoreDraft(item.scoreRecordId, "subject", event.target.value)} />
                      <input aria-label={`${student.name} ${item.examDate || "성적"} 점수`} value={draft.score ?? ""} onChange={(event) => updateScoreDraft(item.scoreRecordId, "score", event.target.value)} />
                      <input aria-label={`${student.name} ${item.examDate || "성적"} 등급`} value={draft.grade ?? ""} onChange={(event) => updateScoreDraft(item.scoreRecordId, "grade", event.target.value)} />
                      <input aria-label={`${student.name} ${item.examDate || "성적"} 메모`} value={draft.note ?? ""} onChange={(event) => updateScoreDraft(item.scoreRecordId, "note", event.target.value)} />
                      <div className="studentProfileRowActions">
                        {isDirty ? (
                          <button
                            className="softButton"
                            disabled={scoreRecordSaveState === "saving"}
                            onClick={() => runProfileAction("성적 변경 저장", () => saveScoreDraft(item))}
                            type="button"
                          >
                            변경 저장
                          </button>
                        ) : null}
                        <OverflowMenu
                          items={[
                            {
                              key: "delete",
                              label: "삭제",
                              onSelect: () => runProfileAction("성적 삭제", () => onDeleteScore?.(item.scoreRecordId) ?? Promise.resolve()),
                              tone: "danger"
                            }
                          ]}
                          label={`${student.name} ${item.examDate || "성적"} 성적 추가 작업`}
                        />
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
                      <span aria-hidden="true" />
                    </>
                  )}
                </div>
              );
                })
              )}
            </DataTableShell>
          </ModalComponent>
        ) : null}

        {openSectionKey === "test" ? (
          <ModalComponent
            className="studentProfileSectionModal"
            onClose={() => setOpenSectionKey(null)}
            scrollable
            title={`${student.name} · 테스트 성적`}
            titleAdornment={(
              <HelpTip label="테스트 성적" text="학원 데일리/단원/누적 테스트 성적을 초안으로 입력한 뒤 저장합니다." />
            )}
          >
            {renderProfileErrorBanner()}
            {renderSectionToolbar(
              academyTestSectionSaveState === "idle" ? null : <InlineSaveStatus label="테스트" saveState={academyTestSectionSaveState} />
            )}
            <DataTableShell className="managementTable studentProfileDataTable" label="학생 학원 테스트 기록">
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
              <input aria-label={`${student.name} 새 테스트 날짜`} type="date" value={newAcademyTestDraft.testDate} onChange={(event) => updateNewAcademyTestDraft("testDate", event.target.value)} />
              <input aria-label={`${student.name} 새 테스트명`} value={newAcademyTestDraft.title} onChange={(event) => updateNewAcademyTestDraft("title", event.target.value)} />
              <input aria-label={`${student.name} 새 테스트 범위`} value={newAcademyTestDraft.scope} onChange={(event) => updateNewAcademyTestDraft("scope", event.target.value)} placeholder="범위" />
              <input aria-label={`${student.name} 새 테스트 점수`} value={newAcademyTestDraft.score} onChange={(event) => updateNewAcademyTestDraft("score", event.target.value)} placeholder="점수" />
              <input aria-label={`${student.name} 새 테스트 평균`} value={newAcademyTestDraft.averageScore} onChange={(event) => updateNewAcademyTestDraft("averageScore", event.target.value)} placeholder="평균" />
              <input aria-label={`${student.name} 새 테스트 메모`} value={newAcademyTestDraft.note} onChange={(event) => updateNewAcademyTestDraft("note", event.target.value)} placeholder="메모" />
              <button
                className="primaryButton compact"
                disabled={!hasNewAcademyTestDraftChanges || academyTestSaveState === "saving"}
                onClick={() => runProfileAction("테스트 저장", saveNewAcademyTestDraft)}
                type="button"
              >
                테스트 저장
              </button>
                </div>
              ) : null}
              {academyTests.length === 0 ? (
                <EmptyState title="아직 저장된 테스트 성적이 없습니다." />
              ) : (
                academyTests.map((item) => {
              const draft = academyTestDrafts[item.testId] ?? item;
              const isDirty = Boolean(academyTestDrafts[item.testId]);
              return (
                <div className={isDirty ? "managementRow academyTestProfileRow dirty" : "managementRow academyTestProfileRow"} key={item.testId}>
                  {isEditingProfile ? (
                    <>
                      <input aria-label={`${student.name} ${item.title || "테스트"} 날짜`} type="date" value={draft.testDate ?? ""} onChange={(event) => updateAcademyTestDraft(item.testId, "testDate", event.target.value)} />
                      <input aria-label={`${student.name} ${item.testDate || "테스트"} 테스트명`} value={draft.title ?? ""} onChange={(event) => updateAcademyTestDraft(item.testId, "title", event.target.value)} />
                      <input aria-label={`${student.name} ${item.title || "테스트"} 범위`} value={draft.scope ?? ""} onChange={(event) => updateAcademyTestDraft(item.testId, "scope", event.target.value)} />
                      <input aria-label={`${student.name} ${item.title || "테스트"} 점수`} value={draft.score ?? ""} onChange={(event) => updateAcademyTestDraft(item.testId, "score", event.target.value)} placeholder="점수" />
                      <input aria-label={`${student.name} ${item.title || "테스트"} 평균`} value={draft.averageScore ?? ""} onChange={(event) => updateAcademyTestDraft(item.testId, "averageScore", event.target.value)} placeholder="평균" />
                      <input aria-label={`${student.name} ${item.title || "테스트"} 메모`} value={draft.note ?? ""} onChange={(event) => updateAcademyTestDraft(item.testId, "note", event.target.value)} />
                      <div className="studentProfileRowActions">
                        {isDirty ? (
                          <button
                            className="softButton"
                            disabled={academyTestSaveState === "saving"}
                            onClick={() => runProfileAction("테스트 변경 저장", () => saveAcademyTestDraft(item))}
                            type="button"
                          >
                            변경 저장
                          </button>
                        ) : null}
                        <OverflowMenu
                          items={[
                            {
                              key: "delete",
                              label: "삭제",
                              onSelect: () => runProfileAction("테스트 삭제", () => onDeleteAcademyTest?.(item.testId) ?? Promise.resolve()),
                              tone: "danger"
                            }
                          ]}
                          label={`${student.name} ${item.title || "테스트"} 테스트 추가 작업`}
                        />
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
                      <span aria-hidden="true" />
                    </>
                  )}
                </div>
              );
                })
              )}
            </DataTableShell>
          </ModalComponent>
        ) : null}

        {isMonthlyReportOpen ? (
          <StudentMonthlyReportModal
            lessons={lessons}
            ModalComponent={ModalComponent}
            monthKey={attendanceMonth}
            onClose={() => setIsMonthlyReportOpen(false)}
            records={records}
            student={student}
          />
        ) : null}
        {isPartialOverlapConfirmationOpen ? (
          <ModalComponent
            className="studentPartialOverlapModal"
            onClose={() => setIsPartialOverlapConfirmationOpen(false)}
            subtitle="개별 시간이 기본 소속 반 시간 밖까지 이어집니다. 명단 표시 기준을 확인해 주세요."
            title="기본 반 명단에 계속 표시할까요?"
          >
            <div className="studentPartialOverlapList">
              {partialDefaultLessonOverlaps.map((overlap) => (
                <div key={`${overlap.className}_${overlap.lessonStartTime}_${overlap.scheduleStartTime}`}>
                  <strong>{overlap.className}</strong>
                  <span>반 {overlap.lessonStartTime}-{overlap.lessonEndTime}</span>
                  <span>학생 {overlap.scheduleStartTime}-{overlap.scheduleEndTime}</span>
                </div>
              ))}
            </div>
            <p className="studentPartialOverlapNotice">
              계속 표시하면 시간이 일부 겹치는 기본 소속 반 명단에 학생을 유지합니다. 다른 반 배치는 개별 시간이 수업시간 안에 완전히 포함될 때만 적용됩니다.
            </p>
            <ModalFooter>
              <button className="softButton" onClick={() => setIsPartialOverlapConfirmationOpen(false)} type="button">돌아가서 시간표 수정</button>
              <button className="primaryButton" onClick={() => saveProfileDraft({ partialOverlapConfirmed: true })} type="button">기본 반 명단에 표시하고 저장</button>
            </ModalFooter>
          </ModalComponent>
        ) : null}
      </div>
    </ModalComponent>
  );
}
