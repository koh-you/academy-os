import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";

export function ExamPostSubmissionManager({
  buildExamPostTargetsForStudent,
  confirmSaveStates = {},
  examCycleLabel,
  examPostTargetStudentIds = {},
  formatKoreanDateTime,
  formatMathExamEntryLabel,
  getExamPostFileOpenUrl,
  gradeMatchesStudent,
  normalizeMathExamEntries,
  rows = [],
  schoolMatchesStudent,
  selectedClass,
  selectedExamCycle,
  students = [],
  submissions = [],
  onConfirmExamPostSubmission,
  onSetExamPostTargetStudentIds
}) {
  const targets = students.flatMap((student) => buildExamPostTargetsForStudent(student, rows, submissions, examPostTargetStudentIds));
  const submittedTargets = targets.filter((target) => target.submission?.submittedAt);
  const missingTargets = targets.filter((target) => !target.submission?.submittedAt);
  const confirmedTargets = submittedTargets.filter((target) => target.submission?.teacherConfirmed);

  function getRowCandidateStudents(row) {
    return students.filter((student) => schoolMatchesStudent(row.schoolName, student.schoolName) && gradeMatchesStudent(row.grade, student.grade));
  }

  function getRowTargetStudentIds(row) {
    return Array.isArray(examPostTargetStudentIds[row.examPrepId]) ? examPostTargetStudentIds[row.examPrepId] : [];
  }

  function updateRowTargetStudentIds(row, nextIds) {
    onSetExamPostTargetStudentIds?.((current) => ({
      ...(current ?? {}),
      [row.examPrepId]: Array.from(new Set(nextIds))
    }));
  }

  function toggleRowTargetStudent(row, studentId) {
    const currentIds = getRowTargetStudentIds(row);
    updateRowTargetStudentIds(
      row,
      currentIds.includes(studentId)
        ? currentIds.filter((id) => id !== studentId)
        : [...currentIds, studentId]
    );
  }

  return (
    <section className="examPostManager">
      <div className="sectionHeader slim">
        <div>
          <h2>시험 후 제출 관리</h2>
          <p className="muted">{selectedClass?.name ?? "반 미선택"} · {examCycleLabel(selectedExamCycle)} · 학생 앱 제출 현황</p>
        </div>
      </div>
      <div className="tallyStats examPostStats">
        <article>
          <span>대상</span>
          <strong>{targets.length}명</strong>
        </article>
        <article>
          <span>제출 완료</span>
          <strong>{submittedTargets.length}명</strong>
        </article>
        <article>
          <span>미제출</span>
          <strong>{missingTargets.length}명</strong>
        </article>
        <article>
          <span>확인 완료</span>
          <strong>{confirmedTargets.length}명</strong>
        </article>
      </div>

      <div className="examPostTargetList">
        {rows.length === 0 ? (
          <EmptyState className="emptyState">현재 반에 연결된 시험정보가 없습니다.</EmptyState>
        ) : null}
        {rows.map((row) => {
          const candidates = getRowCandidateStudents(row);
          const selectedIds = getRowTargetStudentIds(row);
          const mathEntries = normalizeMathExamEntries(row).filter((entry) => entry.date);
          const mathLabel = mathEntries.length
            ? mathEntries.map((entry) => formatMathExamEntryLabel(row, entry)).join(", ")
            : row.subject || "수학";
          return (
            <article className="examPostTargetGroup" key={`targets_${row.examPrepId}`}>
              <div>
                <strong>{row.schoolName} {row.grade} 셀프체크 대상</strong>
                <span>{mathLabel} · 선택 {selectedIds.length}명 / 후보 {candidates.length}명</span>
              </div>
              <div className="examPostTargetActions">
                <button className="softButton compact" onClick={() => updateRowTargetStudentIds(row, candidates.map((student) => student.studentId))} type="button">전체 선택</button>
                <button className="softButton compact subtle" onClick={() => updateRowTargetStudentIds(row, [])} type="button">전체 해제</button>
              </div>
              <div className="examPostTargetStudents">
                {candidates.length === 0 ? <span className="muted">해당 학교/학년 학생이 없습니다.</span> : null}
                {candidates.map((student) => {
                  const checked = selectedIds.includes(student.studentId);
                  return (
                    <label className={checked ? "examPostTargetStudent active" : "examPostTargetStudent"} key={`${row.examPrepId}_${student.studentId}`}>
                      <input checked={checked} onChange={() => toggleRowTargetStudent(row, student.studentId)} type="checkbox" />
                      <span>{student.name}</span>
                    </label>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>

      <div className="examPostList">
        {targets.length === 0 ? (
          <EmptyState className="emptyState">선택된 셀프체크 대상이 없습니다. 위에서 제출 받을 학생을 체크하세요.</EmptyState>
        ) : null}
        {targets.map((target) => {
          const submission = target.submission;
          const confirmSaveState = submission
            ? confirmSaveStates[submission.submissionId] ?? { message: "", state: "idle" }
            : { message: "", state: "idle" };
          return (
            <article className={submission ? "examPostItem submitted" : "examPostItem missing"} key={target.targetId}>
              <div>
                <strong>{submission?.studentName || target.studentName || "학생"}</strong>
                <span>{target.schoolName} · {target.grade} · {target.subject} · {target.examDate}</span>
                <small>{submission ? `제출 ${formatKoreanDateTime(submission.submittedAt)}` : `미제출 · 마감 ${target.dueDate} 23:59`}</small>
              </div>
              {submission ? (
                <div className="examPostDetail">
                  <span>점수 <b>{submission.score || "-"}</b></span>
                  <span>난이도 <b>{submission.difficulty || "-"}</b></span>
                  <span>준비 <b>{submission.preparation || "-"}</b></span>
                  <span>전체 소감 <b>{submission.feeling || "-"}</b></span>
                  <span>학원 도움 <b>{submission.academyHelp || "-"}</b></span>
                  <p><b>잘 준비한 부분</b>{submission.goodPart || "-"}</p>
                  <p><b>실력 발휘 단원/유형</b>{submission.strongUnit || "-"}</p>
                  <p><b>아쉬웠던 이유</b>{submission.regretReason || "-"}</p>
                  <p><b>더 준비할 부분</b>{submission.neededMore || "-"}</p>
                  <p><b>시험장 아쉬운 순간</b>{submission.regretMoment || "-"}</p>
                  <p><b>공부 과정 어려움</b>{[...(submission.studyDifficulties ?? []), submission.studyDifficultyOther].filter(Boolean).join(", ") || "-"}</p>
                  <p><b>수업/자료 피드백</b>{submission.academyFeedback || "-"}</p>
                  <p><b>다음 목표</b>{submission.nextGoal || "-"}</p>
                  <p><b>바꾸고 싶은 것</b>{submission.changeForNextExam || "-"}</p>
                  <p><b>도움 요청</b>{submission.wantedHelp || "-"}</p>
                  <p><b>건의사항</b>{submission.freeComment || "-"}</p>
                  {submission.fileAttachments?.length ? (
                    <div className="examPostFileList">
                      {submission.fileAttachments.map((file, index) => (
                        <a
                          className={file.uploadStatus === "failed" ? "examPostFile failed" : "examPostFile"}
                          href={file.uploadStatus === "failed" ? undefined : getExamPostFileOpenUrl(file)}
                          key={`${submission.submissionId}_${file.fileName}_${index}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {file.uploadStatus === "failed" ? "업로드 실패" : "파일 보기"} · {file.fileName}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <small>첨부 파일 없음</small>
                  )}
                </div>
              ) : (
                <div className="examPostDetail muted">학생 앱에 제출 카드가 표시됩니다.</div>
              )}
              {submission ? (
                <div className="examPostConfirmAction">
                  <button
                    className={submission.teacherConfirmed ? "softButton" : "primaryButton compact"}
                    disabled={confirmSaveState.state === "saving"}
                    onClick={() => onConfirmExamPostSubmission?.(submission.submissionId, !submission.teacherConfirmed)}
                    type="button"
                  >
                    {confirmSaveState.state === "saving" ? "저장 중..." : submission.teacherConfirmed ? "확인 완료" : "확인 처리"}
                  </button>
                  {confirmSaveState.state !== "idle" ? (
                    <div className={`examPostConfirmSaveFeedback ${confirmSaveState.state}`} aria-live="polite" role="status">
                      <InlineSaveStatus label="제출 확인" saveState={confirmSaveState.state} />
                      {confirmSaveState.message ? <span>{confirmSaveState.message}</span> : null}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
