import { Component, useEffect, useState } from "react";

const withdrawalReasonOptions = [
  { value: "graduation", label: "졸업" },
  { value: "class_move", label: "반이동" },
  { value: "withdrawal", label: "퇴원" },
  { value: "other", label: "기타" }
];

const saveStateLabels = {
  idle: "저장 전",
  dirty: "변경됨",
  saving: "저장 중",
  saved: "저장 완료",
  failed: "저장 실패"
};

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

function InlineSaveStatus({ label = "", saveState = "idle" }) {
  const normalizedSaveState = Object.prototype.hasOwnProperty.call(saveStateLabels, saveState) ? saveState : "idle";
  return (
    <small className={`saveState save-${normalizedSaveState} inlineSaveStatus`}>
      {label ? `${label} · ` : ""}{saveStateLabels[normalizedSaveState]}
    </small>
  );
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

export function StudentManager({
  academyReminders = [],
  academyTests,
  academyTestSaveState = "idle",
  scoreRecords,
  scoreRecordSaveState = "idle",
  studentConsultationSaveState = "idle",
  studentConsultations = [],
  studentProfileSaveStates = {},
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
  onDeleteStudent,
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
  const selectedClassTemplate = templates.find(
    (template) => template.classTemplateId === selectedClassTemplateId
  );
  const selectedStudent = students.find((student) => student.studentId === selectedStudentId) ?? null;
  const deleteStudent = students.find((student) => student.studentId === deleteStudentId) ?? null;
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
  const visibleStudents =
    activeTab === "withdrawn"
      ? withdrawnStudents
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
        <div className="studentListTable">
          <div className="studentListRow studentListHead withdrawnStudentRow">
            <span>#</span>
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
            <span>저장</span>
          </div>
          {visibleStudents.map((student, index) => {
            const saveState = studentSaveStates[student.studentId];
            const isDirty = dirtyStudentIds.has(student.studentId);
            const isSaving = saveState === "saving";
            const isSaveDisabled = !isDirty || isSaving;
            return (
              <div className={["studentListRow", "withdrawnStudentRow", isDirty ? "dirtyStudentRow" : ""].filter(Boolean).join(" ")} key={student.studentId}>
                <span>{index + 1}</span>
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
                <button
                  className={`studentSaveButton ${saveState ?? "clean"}`}
                  disabled={isSaveDisabled}
                  onClick={() => saveStudentRow(student.studentId)}
                  type="button"
                >
                  {getStudentSaveLabel(student.studentId)}
                </button>
              </div>
            );
          })}
          {visibleStudents.length === 0 ? (
            <div className="emptyState studentListEmpty">퇴원생이 없습니다.</div>
          ) : null}
        </div>
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
            studentProfileSaveState={studentProfileSaveStates[selectedStudent.studentId] ?? "idle"}
            student={selectedStudent}
          />
        </StudentProfileErrorBoundary>
      ) : null}

      {deleteStudent ? (
        <ModalComponent
          className="studentDeleteModal"
          onClose={() => setDeleteStudentId("")}
          subtitle="퇴원 처리하면 학생 목록과 내일 이후 수업 명단에서는 제외되고, 오늘까지의 수업기록은 보존됩니다."
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
            <p className="dangerCopy">정말 이 학생을 퇴원 처리할까요? 오늘까지의 수업기록은 보존하고, 내일 이후 수업 명단에서만 제외합니다.</p>
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
  student
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

  async function saveProfileDraft() {
    clearProfileErrors();
    try {
      await onSaveStudentProfile?.({ ...student, ...profileDraft, studentId: student.studentId });
      const defaultScoreDraft = createScoreDraft(student.studentId);
      const defaultAcademyTestDraft = createAcademyTestDraft(student.studentId);
      const defaultConsultationDraft = createConsultationDraft(student.studentId);
      const hasOtherDraftChanges =
        Object.keys(scoreDrafts).length > 0 ||
        Object.keys(academyTestDrafts).length > 0 ||
        Object.keys(consultationDrafts).length > 0 ||
        JSON.stringify(newScoreDraft) !== JSON.stringify(defaultScoreDraft) ||
        JSON.stringify(newAcademyTestDraft) !== JSON.stringify(defaultAcademyTestDraft) ||
        JSON.stringify(newConsultationDraft) !== JSON.stringify(defaultConsultationDraft);
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

  return (
    <ModalComponent
      className="wideModal"
      title={`${student.name} 학생 프로파일`}
      subtitle="기본정보와 성적 기록을 한 번에 확인합니다."
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
                <button
                  className="saveButton"
                  disabled={!isProfileDirty || isProfileSaving}
                  onClick={saveProfileDraft}
                  type="button"
                >
                  {saveActionLabel("기본정보 저장", effectiveProfileSaveState)}
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
            <small>특이사항</small>
            {isEditingProfile ? (
              <textarea
                className="profileEditInput"
                value={profileDraft.specialNote ?? ""}
                onChange={(event) => updateProfile("specialNote", event.target.value)}
                placeholder="없음"
                rows="2"
              />
            ) : (
              <strong>{student.specialNote || "없음"}</strong>
            )}
          </div>
          <div className="wideProfileItem">
            <small>개별 스케줄</small>
            {isEditingProfile ? (
              <textarea
                className="profileEditInput"
                value={profileDraft.scheduleOverride ?? ""}
                onChange={(event) => updateProfile("scheduleOverride", event.target.value)}
                placeholder="기본 반 스케줄"
                rows="2"
              />
            ) : (
              <strong>{student.scheduleOverride || "기본 반 스케줄"}</strong>
            )}
          </div>
        </div>

        <div className="sectionHeader slim">
          <div>
            <h2>학생별 운영 알림</h2>
            <p className="muted">상담 일정, 학부모 연락, 특이사항 알림을 대시보드 원본과 같이 봅니다.</p>
          </div>
          <span className="saveState save-idle inlineSaveStatus">09:00 슬랙 원본</span>
        </div>
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

        <div className="sectionHeader slim">
          <div>
            <h2>상담 기록</h2>
            <p className="muted">학생 상담과 학부모 상담을 날짜별로 구분해 남깁니다.</p>
          </div>
          <InlineSaveStatus label="상담기록" saveState={studentConsultationSaveState} />
        </div>
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

        <div className="sectionHeader slim">
          <div>
            <h2>성적 기록</h2>
            <p className="muted">학교 내신 시험과 모의고사 성적을 초안으로 입력한 뒤 저장합니다.</p>
          </div>
          <InlineSaveStatus label="성적" saveState={scoreRecordSaveState} />
        </div>
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

        <div className="sectionHeader slim">
          <div>
            <h2>테스트 성적</h2>
            <p className="muted">학원 데일리/단원/누적 테스트 성적을 초안으로 입력한 뒤 저장합니다.</p>
          </div>
          <InlineSaveStatus label="테스트" saveState={academyTestSaveState} />
        </div>
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
    </ModalComponent>
  );
}
