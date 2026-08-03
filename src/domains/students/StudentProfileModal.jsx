import { Component, useEffect, useMemo, useRef, useState } from "react";
import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { ListCard, ListCardActions } from "../../shared/components/ListCard.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import { parseStudentScheduleOverride } from "../../shared/utils/studentSchedule.js";
import { getCurrentKoreaMonthKey } from "../settlements/monthlySettlement.js";
import { buildStudentMonthlyAttendanceSummary } from "../settlements/settlementAttendance.js";
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
  onSaveStudentConsultation,
  records = [],
  scores,
  scoreRecordSaveState = "idle",
  studentConsultationSaveState = "idle",
  studentProfileSaveState = "idle",
  student,
  teacherOperatingMemo = "",
  teacherOperatingMemoSaveState = "idle",
  tallySubmissions = []
}) {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileDraft, setProfileDraft] = useState(() => createStudentProfileDraft(student));
  const profileDraftRevisionRef = useRef(0);
  const [profileSaveError, setProfileSaveError] = useState("");
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
  const attendanceSummary = useMemo(() => buildStudentMonthlyAttendanceSummary({
    lessons,
    monthKey: attendanceMonth,
    records,
    studentId: student.studentId
  }), [attendanceMonth, lessons, records, student.studentId]);

  useEffect(() => {
    setIsEditingProfile(false);
    setProfileDraft(createStudentProfileDraft(student));
    profileDraftRevisionRef.current = 0;
    setProfileSaveError("");
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

  async function saveProfileDraft() {
    const saveRevision = profileDraftRevisionRef.current;
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
      if (profileDraftRevisionRef.current !== saveRevision) return;
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
      closeDisabled={isProfileSaving}
      title={`${student.name} 학생 프로파일`}
      subtitle="기본정보를 먼저 보고, 필요한 기록만 펼쳐서 확인합니다."
      onClose={onClose}
      scrollable
    >
      <div className="studentProfileModalWrap">
        <SectionHeader
          actions={(
            <>
            {effectiveProfileSaveState !== "idle" ? <InlineSaveStatus label="기본정보" saveState={effectiveProfileSaveState} /> : null}
            <InlineSaveStatus label="상담기록" saveState={studentConsultationSaveState} />
            <InlineSaveStatus label="성적" saveState={scoreRecordSaveState} />
            <InlineSaveStatus label="테스트" saveState={academyTestSaveState} />
            <span className="countBadge">{className}</span>
            {isEditingProfile ? (
              <>
                <button className="softButton" disabled={isProfileSaving} onClick={cancelProfileEdit} type="button">
                  {hasAnyEditingDraftChanges ? "취소" : "수정 종료"}
                </button>
              </>
            ) : (
              <button className="softButton" onClick={() => setIsEditingProfile(true)} type="button">수정</button>
            )}
            </>
          )}
          actionsClassName="profileHeaderActions"
          density="slim"
          eyebrow="STUDENT PROFILE"
          title={student.name}
        />
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
        <section className="studentProfileSection studentAttendanceSection">
          <div className="studentAttendanceSectionHeader">
            <div>
              <strong>월별 출결</strong>
              <p>정규 수업과 특강 수업일지 출결을 한곳에서 확인합니다.</p>
            </div>
            <input
              aria-label={`${student.name} 출결 조회 월`}
              className="studentAttendanceMonthInput"
              onClick={(event) => event.stopPropagation()}
              onChange={(event) => setAttendanceMonth(event.target.value)}
              type="month"
              value={attendanceMonth}
            />
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
        </section>
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
            <section className="teacherOperatingMemoPanel">
              <div className="teacherOperatingMemoHeader">
                <div>
                  <strong>강사 운영 메모</strong>
                  <p>진도, 교재, 특이사항, 다음 수업 계획을 교사용으로만 기록합니다.</p>
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
                    <button className="primaryButton compact" disabled={teacherOperatingMemoSaveState === "saving"} onClick={saveTeacherOperatingMemo} type="button">강사 운영 메모 저장</button>
                    <span>학생·학부모 포털과 알림톡에는 노출되지 않습니다.</span>
                  </div>
                </>
              ) : <p className={teacherOperatingMemo ? "teacherOperatingMemoContent" : "teacherOperatingMemoEmpty"}>{teacherOperatingMemo || "작성된 강사 운영 메모가 없습니다."}</p>}
              {teacherOperatingMemoError ? <p className="profileSaveError" role="alert">강사 운영 메모 저장 실패 · {teacherOperatingMemoError}</p> : null}
            </section>
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
            ) : (
              <div className="profileEditHint">수정 버튼을 누르면 이 학생의 운영 알림을 추가할 수 있습니다.</div>
            )}
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
                  </ListCardActions>
                ) : null}
                  </ListCard>
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
                {hasNewConsultationContent ? saveActionLabel("상담 저장", studentConsultationSaveState) : "상담 저장"}
              </button>
            </div>
            <textarea
              aria-label={`${student.name} 새 상담 내용`}
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
                {hasNewScoreDraftChanges ? saveActionLabel("성적 저장", scoreRecordSaveState) : "성적 저장"}
              </button>
                </div>
              ) : (
                <div className="profileEditHint">수정 버튼을 누르면 성적 입력과 기존 성적 수정이 열립니다.</div>
              )}
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
            </DataTableShell>
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
                {hasNewAcademyTestDraftChanges ? saveActionLabel("테스트 저장", academyTestSaveState) : "테스트 저장"}
              </button>
                </div>
              ) : (
                <div className="profileEditHint">수정 버튼을 누르면 테스트 입력과 기존 테스트 수정이 열립니다.</div>
              )}
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
            </DataTableShell>
          </div>
        </details>
        {isEditingProfile ? (
          <StickySaveBar
            className="studentProfileStickySaveBar"
            label="기본정보"
            message={
              effectiveProfileSaveState === "failed"
                ? "저장 실패 · 현재 입력은 유지됩니다. 서버 저장본을 확인한 뒤 다시 시도해 주세요."
                : isProfileDirty
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
