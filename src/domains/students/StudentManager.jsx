import { useEffect, useState } from "react";

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

function InlineSaveStatus({ label = "", saveState = "idle" }) {
  const normalizedSaveState = Object.prototype.hasOwnProperty.call(saveStateLabels, saveState) ? saveState : "idle";
  return (
    <small className={`saveState save-${normalizedSaveState} inlineSaveStatus`}>
      {label ? `${label} · ` : ""}{saveStateLabels[normalizedSaveState]}
    </small>
  );
}

function formatShortDate(date = "") {
  return date ? date.slice(5).replace("-", ".") : "날짜 미입력";
}

function isWithdrawnStudent(student = {}) {
  return (student.status ?? "active") !== "active" || Boolean(student.withdrawnAt);
}

export function StudentManager({
  academyTests,
  appStateSaveState = "idle",
  scoreRecords,
  studentAutoSaveStates = {},
  students,
  templates,
  ModalComponent,
  onAddAcademyTest,
  onAddScore,
  onAddStudent,
  onUpdateAcademyTest,
  onUpdateScore,
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
            <span>정보확정</span>
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
                  className={student.confirmed === false ? "statusText danger" : "statusText"}
                  onClick={() => updateStudentField(student.studentId, "confirmed", student.confirmed === false)}
                  type="button"
                >
                  {student.confirmed === false ? "미확정" : "확정"}
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
        <StudentProfileModal
          appStateSaveState={appStateSaveState}
          academyTests={selectedAcademyTests}
          className={getStudentClassName(selectedStudent)}
          ModalComponent={ModalComponent}
          onAddAcademyTest={onAddAcademyTest}
          onAddScore={onAddScore}
          onClose={() => setSelectedStudentId("")}
          onUpdateAcademyTest={onUpdateAcademyTest}
          onUpdateScore={onUpdateScore}
          onUpdateStudent={onUpdateStudent}
          scores={selectedScores}
          studentAutoSaveState={studentAutoSaveStates[selectedStudent.studentId] ?? "idle"}
          student={selectedStudent}
        />
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
  appStateSaveState = "idle",
  academyTests,
  className,
  ModalComponent,
  onAddAcademyTest,
  onAddScore,
  onClose,
  onUpdateAcademyTest,
  onUpdateScore,
  onUpdateStudent,
  scores,
  studentAutoSaveState = "idle",
  student
}) {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  function updateProfile(field, value) {
    onUpdateStudent(student.studentId, field, value);
  }

  function renderProfileField(label, field, fallback = "-") {
    return (
      <div>
        <small>{label}</small>
        {isEditingProfile ? (
          <input
            className="profileEditInput"
            value={student[field] ?? ""}
            onChange={(event) => updateProfile(field, event.target.value)}
            placeholder={fallback}
          />
        ) : (
          <strong>{student[field] || fallback}</strong>
        )}
      </div>
    );
  }

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
            {studentAutoSaveState !== "idle" ? <InlineSaveStatus label="기본정보" saveState={studentAutoSaveState} /> : null}
            <InlineSaveStatus label="성적/테스트" saveState={appStateSaveState} />
            <span className="countBadge">{className}</span>
            <button
              className={isEditingProfile ? "saveButton" : "softButton"}
              onClick={() => setIsEditingProfile((current) => !current)}
              type="button"
            >
              {isEditingProfile ? "수정 완료" : "수정"}
            </button>
          </div>
        </div>
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
                  value={student.loginId ?? ""}
                  onChange={(event) => updateProfile("loginId", event.target.value)}
                  placeholder="아이디"
                />
                <input
                  className="profileEditInput"
                  value={student.pin ?? ""}
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
                value={student.specialNote ?? ""}
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
                value={student.scheduleOverride ?? ""}
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
            <h2>성적 기록</h2>
            <p className="muted">학교 내신 시험과 모의고사 성적을 학생별로 보관합니다.</p>
          </div>
          <button className="primaryButton" onClick={() => onAddScore(student.studentId)} type="button">+ 성적 추가</button>
        </div>
        <div className="managementTable studentScoreModalTable">
          <div className="managementRow scoreRow managementHead">
            <span>구분</span>
            <span>날짜</span>
            <span>과목</span>
            <span>점수</span>
            <span>등급</span>
            <span>메모</span>
          </div>
          {scores.length === 0 ? (
            <div className="emptyState">아직 입력된 성적이 없습니다.</div>
          ) : (
            scores.map((item) => (
              <div className="managementRow studentScoreRow" key={item.scoreRecordId}>
                <select value={item.examType} onChange={(event) => onUpdateScore(item.scoreRecordId, "examType", event.target.value)}>
                  <option value="내신">내신</option>
                  <option value="모의고사">모의고사</option>
                </select>
                <input type="date" value={item.examDate} onChange={(event) => onUpdateScore(item.scoreRecordId, "examDate", event.target.value)} />
                <input value={item.subject} onChange={(event) => onUpdateScore(item.scoreRecordId, "subject", event.target.value)} />
                <input value={item.score} onChange={(event) => onUpdateScore(item.scoreRecordId, "score", event.target.value)} />
                <input value={item.grade} onChange={(event) => onUpdateScore(item.scoreRecordId, "grade", event.target.value)} />
                <input value={item.note} onChange={(event) => onUpdateScore(item.scoreRecordId, "note", event.target.value)} />
              </div>
            ))
          )}
        </div>

        <div className="sectionHeader slim">
          <div>
            <h2>테스트 성적</h2>
            <p className="muted">학원 데일리/단원/누적 테스트 성적을 학생별로 보관합니다.</p>
          </div>
          <button className="primaryButton" onClick={() => onAddAcademyTest(student.studentId)} type="button">+ 테스트 추가</button>
        </div>
        <div className="managementTable studentProfileDataTable">
          <div className="managementRow academyTestProfileRow managementHead">
            <span>날짜</span>
            <span>테스트명</span>
            <span>범위</span>
            <span>점수</span>
            <span>평균</span>
            <span>메모</span>
          </div>
          {academyTests.length === 0 ? (
            <div className="emptyState">아직 입력된 테스트 성적이 없습니다.</div>
          ) : (
            academyTests.map((item) => (
              <div className="managementRow academyTestProfileRow" key={item.testId}>
                <input type="date" value={item.testDate} onChange={(event) => onUpdateAcademyTest(item.testId, "testDate", event.target.value)} />
                <input value={item.title} onChange={(event) => onUpdateAcademyTest(item.testId, "title", event.target.value)} />
                <input value={item.scope} onChange={(event) => onUpdateAcademyTest(item.testId, "scope", event.target.value)} />
                <input value={item.score ?? ""} onChange={(event) => onUpdateAcademyTest(item.testId, "score", event.target.value)} placeholder="점수" />
                <input value={item.averageScore ?? ""} onChange={(event) => onUpdateAcademyTest(item.testId, "averageScore", event.target.value)} placeholder="평균" />
                <input value={item.note} onChange={(event) => onUpdateAcademyTest(item.testId, "note", event.target.value)} />
              </div>
            ))
          )}
        </div>
      </div>
    </ModalComponent>
  );
}
