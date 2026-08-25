import { useState } from "react";
import {
  getDefaultTallyStudentId,
  getTallyStudentMergeCandidates,
  getTallyStudentMergeChanges,
  getTallyStudentReplacementChanges
} from "./tallyStudentMerge.js";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { Modal } from "../../shared/components/Modal.jsx";
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";
import "./studentModal.css";

const intakeStatusOptions = [
  { value: "received", label: "문의접수" },
  { value: "consulting", label: "상담중" },
  { value: "trial", label: "체험예정" },
  { value: "canceled", label: "등록취소" },
  { value: "paused", label: "보류" },
  { value: "lost", label: "연락두절" }
];

export function StudentModal({
  applicantSaveStates = {},
  applicantRegistrationMessages = {},
  applicantRegistrationStates = {},
  intakeApplicants = [],
  students = [],
  templates,
  inferGradeFromBirthYear,
  onClose,
  onRegisterApplicant,
  onSubmit,
  onUpdateApplicant
}) {
  const [mode, setMode] = useState("single");
  const [singleSaveState, setSingleSaveState] = useState("idle");
  const [singleSaveError, setSingleSaveError] = useState("");
  const [form, setForm] = useState({
    name: "",
    birthYear: "",
    schoolName: "",
    studentPhone: "",
    parentPhone: "",
    pin: "",
    grade: "고1",
    textbook: "",
    specialNote: "",
    defaultClassTemplateId: templates[0].classTemplateId,
    scheduleOverride: ""
  });
  const [applicantTargetStudentIds, setApplicantTargetStudentIds] = useState({});
  const activeApplicants = intakeApplicants.filter((applicant) => applicant.status !== "registered");
  const registeredApplicants = intakeApplicants.filter((applicant) => applicant.status === "registered");

  function update(field, value) {
    setSingleSaveError("");
    setForm((current) => {
      const next = { ...current, [field]: value };
      if (field === "birthYear") {
        next.grade = inferGradeFromBirthYear(value);
      }
      return next;
    });
  }

  async function saveSingleStudent() {
    if (singleSaveState === "saving") return;
    if (!String(form.name ?? "").trim()) {
      setSingleSaveState("failed");
      setSingleSaveError("학생 이름을 입력해 주세요.");
      return;
    }
    setSingleSaveState("saving");
    setSingleSaveError("");
    try {
      const submissionForm = form.studentId
        ? form
        : { ...form, studentId: `student_${Date.now()}` };
      if (!form.studentId) setForm(submissionForm);
      await onSubmit(submissionForm);
      setSingleSaveState("saved");
    } catch (error) {
      setSingleSaveState("failed");
      setSingleSaveError(error?.message || "학생 저장에 실패했습니다.");
    }
  }

  function updateApplicant(applicantId, field, value) {
    onUpdateApplicant(applicantId, { [field]: value });
  }

  function getApplicantRegisterValues(applicant) {
    return {
      name: applicant.name,
      birthYear: applicant.birthYear,
      schoolName: applicant.schoolName,
      studentPhone: applicant.studentPhone,
      parentPhone: applicant.parentPhone,
      pin: applicant.pin || "1234",
      grade: applicant.grade || inferGradeFromBirthYear(applicant.birthYear),
      textbook: "",
      specialNote: applicant.specialNote || applicant.memo || "",
      defaultClassTemplateId: applicant.defaultClassTemplateId || "",
      scheduleOverride: ""
    };
  }

  function getRegisteredStudentForApplicant(applicant) {
    const linkedStudentId = String(applicant.memo ?? "")
      .match(/정식 학생 등록:[^\n]*\((student_[^)]+)\)/)?.[1] ?? "";
    if (linkedStudentId) return students.find((student) => student.studentId === linkedStudentId) ?? null;
    return students.find((student) => (
      String(student.name ?? "").trim() === String(applicant.name ?? "").trim() &&
      String(student.schoolName ?? "").trim() === String(applicant.schoolName ?? "").trim() &&
      String(student.grade ?? "").trim() === String(applicant.grade ?? "").trim()
    )) ?? null;
  }

  function getApplicantTargetStudentId(applicant) {
    if (Object.prototype.hasOwnProperty.call(applicantTargetStudentIds, applicant.applicantId)) {
      return applicantTargetStudentIds[applicant.applicantId];
    }
    return getDefaultTallyStudentId(getApplicantRegisterValues(applicant), students);
  }

  function getApplicantTargetStudent(applicant) {
    const targetStudentId = getApplicantTargetStudentId(applicant);
    return students.find((student) => student.studentId === targetStudentId) ?? null;
  }

  async function registerApplicant(applicant, options = {}) {
    const registerValues = getApplicantRegisterValues(applicant);
    const targetStudent = getApplicantTargetStudent(applicant);
    if (targetStudent) {
      const changes = options.replaceExisting
        ? getTallyStudentReplacementChanges(targetStudent, registerValues)
        : getTallyStudentMergeChanges(targetStudent, registerValues);
      const changeLabels = changes.map((change) => change.label).join(", ") || "변경할 기본정보 없음";
      const clearedLabels = changes
        .filter((change) => change.clearsExistingValue)
        .map((change) => change.label)
        .join(", ");
      const confirmed = window.confirm(
        options.replaceExisting
          ? `${targetStudent.name} 기존 기본정보를 삭제하고 Tally 원본으로 덮어쓸까요?\n\n교체 항목: ${changeLabels}\n${clearedLabels ? `Tally가 비어 있어 삭제될 항목: ${clearedLabels}\n` : ""}학생 ID, 로그인 ID, PIN, 교재, 개별 시간표와 과거 수업·출결 기록은 유지됩니다. 정규반이 비어 있으면 안전한 미래 정규 수업 명단에서도 제외됩니다.`
          : `${targetStudent.name} 기존 학생에 Tally 정보를 보강할까요?\n\n반영 항목: ${changeLabels}\n학생 ID, 로그인 ID, PIN, 교재, 개별 시간표와 기존 수업·출결 기록은 유지됩니다. Tally의 빈 값은 기존 정보를 지우지 않습니다.`
      );
      if (!confirmed) return;
    }
    try {
      await onRegisterApplicant(applicant.applicantId, registerValues, {
        replaceExisting: Boolean(targetStudent && options.replaceExisting),
        targetStudentId: targetStudent?.studentId ?? ""
      });
    } catch {
      // The parent keeps the modal open and renders the detailed failure message.
    }
  }

  function renderApplicantMergeTarget(applicant) {
    const candidates = getTallyStudentMergeCandidates(getApplicantRegisterValues(applicant), students);
    const targetStudentId = getApplicantTargetStudentId(applicant);
    const targetStudent = students.find((student) => student.studentId === targetStudentId) ?? null;
    const changes = targetStudent
      ? getTallyStudentMergeChanges(targetStudent, getApplicantRegisterValues(applicant))
      : [];
    const replacementChanges = targetStudent
      ? getTallyStudentReplacementChanges(targetStudent, getApplicantRegisterValues(applicant))
      : [];
    const clearedLabels = replacementChanges
      .filter((change) => change.clearsExistingValue)
      .map((change) => change.label);
    return (
      <div className={targetStudent ? "studentIntakeMergeTarget matched" : "studentIntakeMergeTarget"}>
        <label>
          Tally 반영 대상
          <select
            disabled={applicantRegistrationStates[applicant.applicantId] === "saving"}
            value={targetStudentId}
            onChange={(event) => setApplicantTargetStudentIds((current) => ({
              ...current,
              [applicant.applicantId]: event.target.value
            }))}
          >
            <option value="">새 학생으로 등록</option>
            {candidates.map((student) => (
              <option key={`${applicant.applicantId}_target_${student.studentId}`} value={student.studentId}>
                {student.name} · {student.schoolName || "학교 미입력"} · {student.grade || "학년 미입력"} · {
                  student.defaultClassTemplateId
                    ? templates.find((template) => template.classTemplateId === student.defaultClassTemplateId)?.name || "정규반 배정"
                    : "정규반 미배정"
                }
              </option>
            ))}
          </select>
        </label>
        {targetStudent ? (
          <div>
            <strong>{targetStudent.name} 학생이 이미 등록되어 있습니다. Tally 답변을 어떻게 반영할까요?</strong>
            <span>
              {changes.length
                ? `기존 정보에 추가되는 내용: ${changes.map((change) => change.label).join(", ")}`
                : "학생 기본정보가 이미 Tally와 같습니다."}
            </span>
            <small>
              기본정보 교체 시 비워지는 항목: {clearedLabels.length ? clearedLabels.join(", ") : "없음"} · 학생 ID/로그인/PIN과 과거 수업·출결은 유지
            </small>
          </div>
        ) : (
          <div>
            <strong>새 학생 원천 생성</strong>
            <span>같은 학생이 이미 있다면 위 목록에서 먼저 선택해 중복 생성을 막아 주세요.</span>
          </div>
        )}
      </div>
    );
  }

  function renderTallyQuestionFields(applicant) {
    const disabled = applicantRegistrationStates[applicant.applicantId] === "saving";
    return (
      <>
        <label>재원생 여부<input disabled={disabled} value={applicant.enrollmentStatus ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "enrollmentStatus", event.target.value)} /></label>
        <label>현재 학습 과정<input disabled={disabled} value={applicant.currentLearningProcess ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "currentLearningProcess", event.target.value)} /></label>
        <label>직전학기 내신 성적<input disabled={disabled} value={applicant.previousSemesterScore ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "previousSemesterScore", event.target.value)} /></label>
        <label>특이사항<input disabled={disabled} value={applicant.specialNote ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "specialNote", event.target.value)} /></label>
        <label>추가 메모<input disabled={disabled} value={applicant.memo || applicant.desiredClass || ""} onChange={(event) => updateApplicant(applicant.applicantId, "memo", event.target.value)} /></label>
      </>
    );
  }

  return (
    <Modal
      className="studentAddModal"
      closeDisabled={singleSaveState === "saving"}
      title="학생 추가"
      subtitle="한 명씩 등록하거나 엑셀에서 복사한 목록을 일괄 등록합니다."
      onClose={onClose}
      scrollable
    >
      <WorkspaceTabs label="학생 추가 방식" variant="primary">
        <button className={mode === "single" ? "active" : ""} disabled={singleSaveState === "saving"} onClick={() => setMode("single")} type="button">한 명씩</button>
        <button className={mode === "bulk" ? "active" : ""} disabled={singleSaveState === "saving"} onClick={() => setMode("bulk")} type="button">엑셀 일괄 등록</button>
        <button className={mode === "intake" ? "active" : ""} disabled={singleSaveState === "saving"} onClick={() => setMode("intake")} type="button">Tally 접수</button>
      </WorkspaceTabs>

      {mode === "single" ? (
        <>
          <div className="studentAddGrid">
            <label>이름<input disabled={singleSaveState === "saving"} value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="박수빈" /></label>
            <label>
              출생연도
              <div className="birthYearWithGrade">
                <input disabled={singleSaveState === "saving"} value={form.birthYear} onChange={(event) => update("birthYear", event.target.value)} placeholder="2010" />
                <span>{form.grade || "학년"}</span>
              </div>
            </label>
            <label>학교<input disabled={singleSaveState === "saving"} value={form.schoolName} onChange={(event) => update("schoolName", event.target.value)} placeholder="자운고등학교" /></label>
            <label>PIN<input disabled={singleSaveState === "saving"} value={form.pin} onChange={(event) => update("pin", event.target.value)} placeholder="1234" /></label>
            <label>학생전화번호<input disabled={singleSaveState === "saving"} inputMode="tel" value={form.studentPhone} onChange={(event) => update("studentPhone", event.target.value)} placeholder="01012345678" /></label>
            <label>학부모전화번호<input disabled={singleSaveState === "saving"} inputMode="tel" value={form.parentPhone} onChange={(event) => update("parentPhone", event.target.value)} placeholder="01012345678" /></label>
            <label>
              반
              <select disabled={singleSaveState === "saving"} value={form.defaultClassTemplateId} onChange={(event) => update("defaultClassTemplateId", event.target.value)}>
                <option value="">미배정</option>
                {templates.map((template) => (
                  <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
                ))}
              </select>
            </label>
            <label>특이사항<input disabled={singleSaveState === "saving"} value={form.specialNote} onChange={(event) => update("specialNote", event.target.value)} placeholder="상담 메모 또는 주의사항" /></label>
          </div>
          {singleSaveState !== "idle" ? <InlineSaveStatus label="신규 학생" saveState={singleSaveState} /> : null}
          {singleSaveError ? <p className="profileSaveError" role="alert">학생 저장 실패 · {singleSaveError}</p> : null}
          <button className="primaryButton full studentAddSubmit" disabled={singleSaveState === "saving"} onClick={saveSingleStudent} type="button">
            {singleSaveState === "saving" ? "학생 저장 중" : "학생 저장"}
          </button>
        </>
      ) : mode === "bulk" ? (
        <div className="studentBulkPlaceholder">
          <strong>엑셀 일괄 등록</strong>
          <p className="muted">이름, 출생연도, 학교, PIN 순서로 복사한 목록을 붙여넣는 기능으로 확장 예정입니다.</p>
          <textarea aria-label="학생 엑셀 일괄 등록 원본" placeholder={"박수빈\t2010\t자운고등학교\t1234"} rows="6" />
          <button className="primaryButton full" disabled type="button">일괄 등록 준비 중</button>
        </div>
      ) : (
        <div className="studentIntakePanel">
          <div className="intakeEndpointBox">
            <strong>Tally 웹훅 연결 주소</strong>
            <code>https://koh-you-math-academy-os-api.onrender.com/api/intake/tally</code>
            <p className="muted">Tally 제출은 정식 학생이 아니라 입학 후보로 먼저 저장됩니다. 확인 후 정식 등록하세요.</p>
          </div>
          <div className="studentIntakeSummary">
            <span>확인 필요 {activeApplicants.length}명</span>
            <span>등록 완료 {registeredApplicants.length}명</span>
          </div>
          {activeApplicants.length === 0 ? (
            <EmptyState className="emptyState">아직 확인할 Tally 접수 후보가 없습니다.</EmptyState>
          ) : null}
          <div
            aria-label="Tally 접수·등록 후보 목록"
            className="studentIntakeList"
            role="region"
            tabIndex={0}
          >
            {activeApplicants.map((applicant) => (
              <article className="studentIntakeCard" key={applicant.applicantId}>
                <div className="studentIntakeCardHeader">
                  <div>
                    <strong>{applicant.name || "이름 미입력"}</strong>
                    <span>{[applicant.grade || inferGradeFromBirthYear(applicant.birthYear), applicant.schoolName].filter(Boolean).join(" · ") || "기본 정보 미입력"}</span>
                  </div>
                  <select
                    aria-label={`${applicant.name || "이름 미입력"} Tally 접수 상태`}
                    disabled={applicantRegistrationStates[applicant.applicantId] === "saving"}
                    value={applicant.status ?? "received"}
                    onChange={(event) => updateApplicant(applicant.applicantId, "status", event.target.value)}
                  >
                    {intakeStatusOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                <div className="studentIntakeGrid">
                  <label>이름<input disabled={applicantRegistrationStates[applicant.applicantId] === "saving"} value={applicant.name ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "name", event.target.value)} /></label>
                  <label>출생연도<input disabled={applicantRegistrationStates[applicant.applicantId] === "saving"} value={applicant.birthYear ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "birthYear", event.target.value)} /></label>
                  <label>학교<input disabled={applicantRegistrationStates[applicant.applicantId] === "saving"} value={applicant.schoolName ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "schoolName", event.target.value)} /></label>
                  <label>학년<input disabled={applicantRegistrationStates[applicant.applicantId] === "saving"} value={applicant.grade ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "grade", event.target.value)} /></label>
                  <label>학생전화<input disabled={applicantRegistrationStates[applicant.applicantId] === "saving"} value={applicant.studentPhone ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "studentPhone", event.target.value)} /></label>
                  <label>학부모전화<input disabled={applicantRegistrationStates[applicant.applicantId] === "saving"} value={applicant.parentPhone ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "parentPhone", event.target.value)} /></label>
                  <label>
                    배정 반
                    <select disabled={applicantRegistrationStates[applicant.applicantId] === "saving"} value={applicant.defaultClassTemplateId ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "defaultClassTemplateId", event.target.value)}>
                      <option value="">미배정</option>
                      {templates.map((template) => (
                        <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
                      ))}
                    </select>
                  </label>
                  {renderTallyQuestionFields(applicant)}
                </div>
                {renderApplicantMergeTarget(applicant)}
                <div className="studentIntakeActions">
                  <small>{applicant.formName || "Tally"} · {applicant.createdAt ? new Date(applicant.createdAt).toLocaleString("ko-KR") : "접수일 미확인"}</small>
                  {applicantSaveStates[applicant.applicantId] ? (
                    <InlineSaveStatus label="접수정보" saveState={applicantSaveStates[applicant.applicantId]} />
                  ) : null}
                  {getApplicantTargetStudent(applicant) ? (
                    <div className="studentIntakeActionButtons">
                      <button
                        className="softButton"
                        disabled={!applicant.name || applicantRegistrationStates[applicant.applicantId] === "saving"}
                        onClick={() => registerApplicant(applicant)}
                        type="button"
                      >
                        {applicantRegistrationStates[applicant.applicantId] === "saving" ? "추가 중" : "기존 정보에 Tally 내용 추가"}
                      </button>
                      <button
                        className="dangerButton"
                        disabled={!applicant.name || applicantRegistrationStates[applicant.applicantId] === "saving"}
                        onClick={() => registerApplicant(applicant, { replaceExisting: true })}
                        type="button"
                      >
                        {applicantRegistrationStates[applicant.applicantId] === "saving" ? "교체 중" : "Tally 내용으로 기본정보 교체"}
                      </button>
                    </div>
                  ) : (
                    <button
                      className="primaryButton"
                      disabled={!applicant.name || applicantRegistrationStates[applicant.applicantId] === "saving"}
                      onClick={() => registerApplicant(applicant)}
                      type="button"
                    >
                      {applicantRegistrationStates[applicant.applicantId] === "saving" ? "반영 중" : "새 학생으로 등록"}
                    </button>
                  )}
                </div>
                {applicantRegistrationStates[applicant.applicantId] ? (
                  <div className={`studentIntakeRegistrationStatus ${applicantRegistrationStates[applicant.applicantId]}`}>
                    <InlineSaveStatus label="학생 등록" saveState={applicantRegistrationStates[applicant.applicantId]} />
                    <span>{applicantRegistrationMessages[applicant.applicantId]}</span>
                  </div>
                ) : null}
              </article>
            ))}
            {registeredApplicants.length > 0 ? (
              <div className="studentIntakeRegisteredList">
                <strong>등록 완료 후보</strong>
                {registeredApplicants.map((applicant) => {
                  const registeredStudent = getRegisteredStudentForApplicant(applicant);
                  const registrationState = applicantRegistrationStates[applicant.applicantId];
                  return (
                    <article className={`studentIntakeCard registered ${registeredStudent ? "linked" : "unlinked"}`} key={applicant.applicantId}>
                      <div className="studentIntakeCardHeader">
                        <div>
                          <strong>{applicant.name || "이름 미입력"}</strong>
                          <span>{[applicant.grade || inferGradeFromBirthYear(applicant.birthYear), applicant.schoolName, applicant.defaultClassTemplateId ? templates.find((template) => template.classTemplateId === applicant.defaultClassTemplateId)?.name : "미배정"].filter(Boolean).join(" · ") || "기본 정보 미입력"}</span>
                        </div>
                        <span className={`statusPill ${registeredStudent ? "status-sent" : "status-failed"}`}>
                          {registeredStudent ? "학생명단 반영 완료" : "학생명단 미반영"}
                        </span>
                      </div>
                      <div className="studentIntakeAnswerList">
                        {[
                          ["재원생 여부", applicant.enrollmentStatus],
                          ["현재 학습 과정", applicant.currentLearningProcess],
                          ["직전학기 내신 성적", applicant.previousSemesterScore],
                          ["특이사항", applicant.specialNote],
                          ["추가 메모", applicant.memo]
                        ].filter(([, value]) => value).map(([label, value]) => (
                          <span key={label}><b>{label}</b>{value}</span>
                        ))}
                      </div>
                      {!registeredStudent ? (
                        <div className="studentIntakeRegistrationRecovery">
                          <strong>등록확정 상태만 저장되고 학생 원천에는 반영되지 않았습니다.</strong>
                          <span>반을 선택하지 않은 후보는 미배정 학생으로 등록되며, 반 배정 후 미래 수업 명단에 반영됩니다.</span>
                          <label>
                            복구 배정 반
                            <select
                              value={applicant.defaultClassTemplateId ?? ""}
                              onChange={(event) => updateApplicant(applicant.applicantId, "defaultClassTemplateId", event.target.value)}
                            >
                              <option value="">미배정</option>
                              {templates.map((template) => (
                                <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
                              ))}
                            </select>
                          </label>
                          <button
                            className="primaryButton"
                            disabled={registrationState === "saving"}
                            onClick={() => registerApplicant(applicant)}
                            type="button"
                          >
                            {registrationState === "saving" ? "학생명단 반영 중" : "학생명단에 반영"}
                          </button>
                        </div>
                      ) : null}
                      {registrationState ? (
                        <div className={`studentIntakeRegistrationStatus ${registrationState}`}>
                          <InlineSaveStatus label="학생 등록" saveState={registrationState} />
                          <span>{applicantRegistrationMessages[applicant.applicantId]}</span>
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </Modal>
  );
}

