import { useState } from "react";
import {
  examPostAcademyHelpOptions,
  examPostFeelingOptions,
  examPostRegretReasonOptions,
  examPostScaleOptions,
  examPostStudyDifficultyOptions
} from "../exams/postSubmissionOptions.js";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { getExamPostFileOpenUrl } from "./examPostApi.js";

function getDateDiffInDays(fromDate, toDate) {
  const from = new Date(`${fromDate}T00:00:00+09:00`);
  const to = new Date(`${toDate}T00:00:00+09:00`);
  return Math.ceil((to.getTime() - from.getTime()) / (24 * 60 * 60 * 1000));
}

function formatKoreanDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "확정 기록 없음";
  return date.toLocaleString("ko-KR", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function examCycleLabel(examCycle) {
  const [, semester, phase] = String(examCycle).match(/^20\d{2}-(1|2)-(mid|final)$/) ?? [];
  if (!semester || !phase) return examCycle;
  return `${semester}학기 ${phase === "mid" ? "중간고사" : "기말고사"}`;
}

export function StudentExamPostSubmissionPanel({
  targets = [],
  selectedStudent,
  onSubmitExamPostSubmission,
  referenceDate,
  saveStates = {},
  writeEnabled = false
}) {
  const activeTargets = targets.filter((target) => !target.submission?.submittedAt);
  const completedTargets = targets.filter((target) => target.submission?.submittedAt);
  const [drafts, setDrafts] = useState({});
  const [filesByTarget, setFilesByTarget] = useState({});
  const [uploadStatus, setUploadStatus] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const target = activeTargets[0] ?? completedTargets[0] ?? null;

  if (!target) return null;

  const draft = {
    score: target.submission?.score ?? "",
    feeling: target.submission?.feeling ?? "",
    difficulty: target.submission?.difficulty ?? "5",
    preparation: target.submission?.preparation ?? "5",
    goodPart: target.submission?.goodPart ?? "",
    strongUnit: target.submission?.strongUnit ?? "",
    regretReason: target.submission?.regretReason ?? "",
    regretReasons: target.submission?.regretReasons ?? [],
    regretReasonOther: target.submission?.regretReasonOther ?? "",
    regretMoment: target.submission?.regretMoment ?? "",
    studyDifficulties: target.submission?.studyDifficulties ?? [],
    studyDifficultyOther: target.submission?.studyDifficultyOther ?? "",
    neededMore: target.submission?.neededMore ?? "",
    academyHelp: target.submission?.academyHelp ?? "",
    academyFeedback: target.submission?.academyFeedback ?? "",
    nextGoal: target.submission?.nextGoal ?? "",
    changeForNextExam: target.submission?.changeForNextExam ?? "",
    wantedHelp: target.submission?.wantedHelp ?? "",
    freeComment: target.submission?.freeComment ?? "",
    fileMemo: target.submission?.fileMemo ?? "",
    ...(drafts[target.targetId] ?? {})
  };
  const isSubmitted = Boolean(target.submission?.submittedAt);
  const isOpen = target.isOpen ?? getDateDiffInDays(referenceDate, target.examDate) <= 0;
  const saveState = saveStates[target.targetId] ?? { message: "", state: "idle" };
  const isSaving = saveState.state === "saving";
  const selectedFiles = filesByTarget[target.targetId] ?? [];
  const submittedFiles = target.submission?.fileAttachments ?? [];

  function updateDraft(field, value) {
    setValidationMessage("");
    setDrafts((current) => ({
      ...current,
      [target.targetId]: {
        ...(current[target.targetId] ?? {}),
        [field]: value
      }
    }));
  }

  function toggleDraftList(field, value) {
    const currentValues = Array.isArray(draft[field]) ? draft[field] : [];
    updateDraft(
      field,
      currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value]
    );
  }

  function updateFiles(fileList) {
    setValidationMessage("");
    const nextFiles = Array.from(fileList ?? []).slice(0, 8);
    setFilesByTarget((current) => ({ ...current, [target.targetId]: nextFiles }));
    setUploadStatus(nextFiles.length ? `${nextFiles.length}개 파일 선택됨` : "");
  }

  function getMissingRequiredFields() {
    const requiredTextFields = [
      ["score", "점수/등급"],
      ["feeling", "전체 소감"],
      ["difficulty", "난이도"],
      ["preparation", "준비 충분도"],
      ["goodPart", "잘 준비한 부분"],
      ["strongUnit", "실력을 발휘한 문제 유형/단원"],
      ["regretReasonOther", "아쉬웠던 다른 이유"],
      ["neededMore", "더 준비할 부분"],
      ["regretMoment", "시험장에서 아쉬웠던 순간"],
      ["studyDifficultyOther", "공부과정의 다른 어려움"],
      ["academyHelp", "학원 수업/자료 도움 정도"],
      ["academyFeedback", "수업/자료 피드백"],
      ["nextGoal", "다음 시험 목표"],
      ["changeForNextExam", "다음 시험을 위해 바꾸고 싶은 것"],
      ["wantedHelp", "선생님께 도움받고 싶은 부분"],
      ["freeComment", "선생님께 하고 싶은 말"],
      ["fileMemo", "시험지 제출 메모"]
    ];
    const missingFields = requiredTextFields
      .filter(([field]) => !String(draft[field] ?? "").trim())
      .map(([, label]) => label);
    if (!Array.isArray(draft.regretReasons) || draft.regretReasons.length === 0) {
      missingFields.push("아쉬웠던 이유");
    }
    if (!Array.isArray(draft.studyDifficulties) || draft.studyDifficulties.length === 0) {
      missingFields.push("수학 공부과정에서 힘들었던 것");
    }
    if (!selectedFiles.length && !submittedFiles.length) {
      missingFields.push("시험지 사진/PDF");
    }
    return missingFields;
  }

  async function submit(event) {
    event.preventDefault();
    if (!selectedStudent || !onSubmitExamPostSubmission || !writeEnabled || isSaving) return;
    const missingFields = getMissingRequiredFields();
    if (missingFields.length) {
      setValidationMessage(`아직 작성하지 않은 항목이 있습니다: ${missingFields.join(", ")}`);
      return;
    }
    const result = await onSubmitExamPostSubmission(target, selectedStudent, {
      ...draft,
      regretReason: [...(draft.regretReasons ?? []), draft.regretReasonOther].filter(Boolean).join(", ")
    }, selectedFiles);
    if (!result?.ok) {
      setValidationMessage(result?.message || "시험 후 제출 저장에 실패했습니다. 입력과 선택 파일은 유지됩니다.");
      return;
    }
    setDrafts((current) => {
      const next = { ...current };
      delete next[target.targetId];
      return next;
    });
    setFilesByTarget((current) => {
      const next = { ...current };
      delete next[target.targetId];
      return next;
    });
    setUploadStatus("");
  }

  return (
    <section className={`studentExamPostPanel ${target.isOverdue && !isSubmitted ? "overdue" : ""}`}>
      <div className="sectionHeader compact">
        <div>
          <h2>{isSubmitted ? "시험 후 제출 완료" : isOpen ? "시험 후 제출 필요" : "시험 후 제출 예정"}</h2>
          <p className="muted">
            {target.schoolName} · {target.grade} · {target.subject} · {target.examDate}
            {isSubmitted ? ` · 제출 ${formatKoreanDateTime(target.submission.submittedAt)}` : isOpen ? ` · 마감 ${target.dueDate} 23:59` : ` · 시험 후 마감 ${target.dueDate} 23:59`}
          </p>
        </div>
      </div>
      {isSubmitted ? (
        <div className="studentExamPostDone">
          <strong>{target.submission.score || "점수 미입력"}</strong>
          <span>{target.submission.feeling || "셀프체크 제출됨"}</span>
          <small>{target.submission.teacherConfirmed ? "선생님 확인 완료" : "선생님 확인 전"}</small>
          {submittedFiles.length ? (
            <div className="examPostFileList">
              {submittedFiles.map((file, index) => (
                <a
                  className={file.uploadStatus === "failed" ? "examPostFile failed" : "examPostFile"}
                  href={file.uploadStatus === "failed" ? undefined : getExamPostFileOpenUrl(file)}
                  key={`${file.fileName}_${index}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  {file.uploadStatus === "failed" ? "업로드 실패" : "파일 보기"} · {file.fileName}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <form className="studentExamPostForm" onSubmit={submit}>
          {validationMessage ? <div className="examPostValidationMessage">{validationMessage}</div> : null}
          {!writeEnabled ? (
            <p className="studentExamPostPreviewNotice">강사 미리보기에서는 시험 후 제출을 저장하지 않습니다.</p>
          ) : null}
          <fieldset className="studentExamPostFieldset" disabled={!writeEnabled || isSaving}>
            <div className="examPostAutoInfo">
              <span>이름 <b>{selectedStudent?.name ?? "-"}</b></span>
              <span>학년 <b>{selectedStudent?.grade ?? target.grade ?? "-"}</b></span>
              <span>학교 <b>{target.schoolName || selectedStudent?.schoolName || "-"}</b></span>
              <span>시험 <b>{target.label || examCycleLabel(target.examCycle)}</b></span>
              <span>과목 <b>{target.subject}</b></span>
              <span>시험일 <b>{target.examDate}</b></span>
            </div>
            <div className="fieldGrid two">
              <label>
                점수/등급
                <input required value={draft.score} onChange={(event) => updateDraft("score", event.target.value)} placeholder="예: 86점 또는 2등급" />
              </label>
              <label>
                전체 소감
                <select required value={draft.feeling} onChange={(event) => updateDraft("feeling", event.target.value)}>
                  <option value="">선택</option>
                  {examPostFeelingOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label>
                난이도 0~10
                <select required value={draft.difficulty} onChange={(event) => updateDraft("difficulty", event.target.value)}>
                  {examPostScaleOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label>
                준비 충분도 0~10
                <select required value={draft.preparation} onChange={(event) => updateDraft("preparation", event.target.value)}>
                  {examPostScaleOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
            </div>
            <label>
              스스로 잘 준비했다고 느낀 부분이 있다면?
              <textarea required value={draft.goodPart} onChange={(event) => updateDraft("goodPart", event.target.value)} rows="2" />
            </label>
            <label>
              실력을 발휘할 수 있었던 문제 유형이나 단원은?
              <textarea required value={draft.strongUnit} onChange={(event) => updateDraft("strongUnit", event.target.value)} rows="2" />
            </label>
            <div className="examPostChoiceGroup">
              <strong>아쉬웠던 이유가 있다면? (해당 모두 선택)</strong>
              <div>
                {examPostRegretReasonOptions.map((option) => (
                  <label key={option}>
                    <input
                      checked={(Array.isArray(draft.regretReasons) ? draft.regretReasons : []).includes(option)}
                      onChange={() => toggleDraftList("regretReasons", option)}
                      type="checkbox"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <label>
              다른 이유가 있다면?
              <textarea required value={draft.regretReasonOther} onChange={(event) => updateDraft("regretReasonOther", event.target.value)} rows="2" />
            </label>
            <label>
              더 준비할걸 했던 부분이 있다면?
              <textarea required value={draft.neededMore} onChange={(event) => updateDraft("neededMore", event.target.value)} rows="2" />
            </label>
            <label>
              시험장에서 가장 아쉬웠던 순간은?
              <textarea required value={draft.regretMoment} onChange={(event) => updateDraft("regretMoment", event.target.value)} rows="2" />
            </label>
            <div className="examPostChoiceGroup">
              <strong>수학 공부과정에서 가장 힘들었던 것은?</strong>
              <div>
                {examPostStudyDifficultyOptions.map((option) => (
                  <label key={option}>
                    <input
                      checked={(Array.isArray(draft.studyDifficulties) ? draft.studyDifficulties : []).includes(option)}
                      onChange={() => toggleDraftList("studyDifficulties", option)}
                      type="checkbox"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <label>
              다른 이유가 있다면? (2)
              <textarea required value={draft.studyDifficultyOther} onChange={(event) => updateDraft("studyDifficultyOther", event.target.value)} rows="2" />
            </label>
            <label>
              학원 수업과 자료가 도움이 됐나요?
              <select required value={draft.academyHelp} onChange={(event) => updateDraft("academyHelp", event.target.value)}>
                <option value="">선택</option>
                {examPostAcademyHelpOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>
              수업이나 자료에서 좋았던 점 / 아쉬운 점이 있다면?
              <textarea required value={draft.academyFeedback} onChange={(event) => updateDraft("academyFeedback", event.target.value)} rows="2" />
            </label>
            <label>
              다음 시험 목표 점수 또는 등급은?
              <input required value={draft.nextGoal} onChange={(event) => updateDraft("nextGoal", event.target.value)} placeholder="예: 90점, 1등급" />
            </label>
            <label>
              다음 시험을 위해 가장 바꾸고 싶은 것 한 가지는?
              <textarea required value={draft.changeForNextExam} onChange={(event) => updateDraft("changeForNextExam", event.target.value)} rows="2" />
            </label>
            <label>
              선생님께 꼭 도움받고 싶은 부분이 있다면?
              <textarea required value={draft.wantedHelp} onChange={(event) => updateDraft("wantedHelp", event.target.value)} rows="2" />
            </label>
            <label>
              선생님한테 하고 싶은 말, 건의사항, 뭐든 OK
              <textarea required value={draft.freeComment} onChange={(event) => updateDraft("freeComment", event.target.value)} rows="2" />
            </label>
            <label>
              시험지 제출 메모
              <input required value={draft.fileMemo} onChange={(event) => updateDraft("fileMemo", event.target.value)} placeholder="예: 종이 시험지 직접 제출, 사진은 수업 때 전달" />
            </label>
            <label className="examPostUploadBox">
              시험지 사진/PDF
              <input
                accept="image/*,application/pdf"
                capture="environment"
                multiple
                onChange={(event) => updateFiles(event.target.files)}
                type="file"
              />
              <span>{selectedFiles.length ? selectedFiles.map((file) => file.name).join(", ") : "사진을 찍거나 파일을 선택하세요."}</span>
            </label>
            {uploadStatus ? <small className="examPostUploadStatus">{uploadStatus}</small> : null}
            <button className="primaryButton" type="submit">{isSaving ? "저장 중..." : "시험 후 제출"}</button>
          </fieldset>
          {saveState.state !== "idle" ? (
            <div className={`studentExamPostSaveFeedback ${saveState.state}`} aria-live="polite" role="status">
              <InlineSaveStatus label="시험 후 제출" saveState={saveState.state} />
              {saveState.message ? <span>{saveState.message}</span> : null}
            </div>
          ) : null}
        </form>
      )}
    </section>
  );
}
