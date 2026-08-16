import { useEffect, useRef, useState } from "react";
import { Modal, ModalFooter } from "../../shared/components/Modal.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { getAttendanceDisplay, hasMissingCheckOut } from "./attendance.js";
import { defaultAttendanceSettings } from "./attendanceSettings.js";
import { createLessonJournalPreparationMemoModel } from "./lessonJournalPreparationMemoModel.js";
import { LessonJournalPreparationMemoView } from "./LessonJournalPreparationMemoView.jsx";

export function SupplementMakeupLessonDetail({
  runtime,
  attendanceSettings = defaultAttendanceSettings,
  homeworks = [],
  lesson,
  lessons = [],
  onDeleteLesson,
  onEditLesson,
  onOpenAttendance,
  onPassTask,
  onScheduleTask,
  onUpdateTask,
  records = [],
  students = [],
  task
}) {
  const {
    createEmptyRecord,
    findLessonStudentRecord,
    followUpTypeLabel,
    formatKoreanDateTime,
    getActiveLessonStudents,
    getLessonContent,
    getLessonHomework,
    getSupplementScheduleChangeDetailSeed,
    getSupplementTaskSourceLabel,
    normalizeTimeInput
  } = runtime;
  const [passConfirmMode, setPassConfirmMode] = useState("");
  const [passSaveState, setPassSaveState] = useState({ message: "", mode: "", state: "idle" });
  const [isScheduleEditOpen, setIsScheduleEditOpen] = useState(false);
  const [scheduleDraft, setScheduleDraft] = useState({
    scheduleChangeDetail: "",
    scheduleChangeReason: "",
    scheduledDate: task?.scheduledDate || lesson.date || "",
    scheduledTime: task?.scheduledTime || lesson.startTime || ""
  });
  const [scheduleSaveState, setScheduleSaveState] = useState({ message: "", state: "idle" });
  const lessonStudents = getActiveLessonStudents(lesson, students);
  const student = lessonStudents[0] ?? students.find((item) => item.studentId === task?.studentId);
  const isAbsenceMakeup = task?.taskType === "absence_makeup";
  const taskLabel = followUpTypeLabel(task?.taskType);
  const targetHomework =
    homeworks.find((homework) => homework.homeworkId === task?.sourceId) ??
    homeworks.find(
      (homework) =>
        homework.studentId === student?.studentId &&
        homework.title === (task?.sourceLabel ?? lesson.sourceLabel)
    );
  const absenceSourceRecord = isAbsenceMakeup
    ? records.find((record) => record.lessonStudentRecordId === task?.sourceId) ??
      records.find((record) => record.lessonId === task?.sourceLessonId && record.studentId === student?.studentId)
    : null;
  const homeworkSourceLesson = targetHomework?.lessonId
    ? lessons.find((item) => item.lessonId === targetHomework.lessonId)
    : null;
  const sourceLesson = isAbsenceMakeup
    ? lessons.find((item) => item.lessonId === absenceSourceRecord?.lessonId) ??
      lessons.find((item) => item.lessonId === task?.sourceLessonId) ??
      null
    : homeworkSourceLesson;
  const sourceDate =
    sourceLesson?.date ||
    (isAbsenceMakeup ? task?.lessonDate : "") ||
    targetHomework?.assignedDate ||
    targetHomework?.startDate ||
    targetHomework?.date ||
    "기록 없음";
  const dueDate = isAbsenceMakeup
    ? sourceDate
    : targetHomework?.dueDate ?? targetHomework?.endDate ?? "기록 없음";
  const sourceLessonLabel = sourceLesson?.className ?? sourceLesson?.lessonTopic ?? "원 수업 기록";
  const sourcePreviousHomework = sourceLesson && student
    ? getLessonHomework(homeworks, sourceLesson, student, "previous", lessons)
    : null;
  const sourceNextHomework = sourceLesson && student
    ? getLessonHomework(homeworks, sourceLesson, student, "next", lessons)
    : null;
  const sourceLessonMaterial = absenceSourceRecord?.lessonMaterial || "";
  const sourceLessonContent = absenceSourceRecord
    ? getLessonContent(absenceSourceRecord)
    : "";
  const sourcePreviousHomeworkText =
    sourcePreviousHomework?.title ||
    absenceSourceRecord?.previousHomework ||
    task?.supplementHomeworkNote ||
    "";
  const sourceNextHomeworkText =
    sourceNextHomework?.title ||
    absenceSourceRecord?.nextHomework ||
    "";
  const targetTitle =
    getSupplementTaskSourceLabel(task) ||
    targetHomework?.title ||
    lesson.sourceLabel ||
    `${taskLabel} 대상`;
  const originalHomeworkTitle = targetHomework?.title || task?.sourceLabel || lesson.sourceLabel || "";
  const originalHomeworkHint =
    originalHomeworkTitle && originalHomeworkTitle !== targetTitle ? `원본 숙제명: ${originalHomeworkTitle}` : sourceLessonLabel;
  const supplementAttendanceLesson = lesson;
  const supplementAttendanceRecord = student
    ? findLessonStudentRecord(records, lesson, student) ?? createEmptyRecord(lesson, student)
    : null;
  const supplementAttendanceDisplay = student && supplementAttendanceRecord
    ? getAttendanceDisplay(supplementAttendanceRecord, supplementAttendanceLesson, attendanceSettings.lateGraceMinutes)
    : null;
  const supplementCheckoutMissing = student && supplementAttendanceRecord
    ? hasMissingCheckOut(supplementAttendanceRecord, supplementAttendanceLesson)
    : false;
  const isTaskDone = task?.status === "done" || (passSaveState.state === "saved" && passSaveState.mode === "completed");
  const isPassSaving = passSaveState.state === "saving";
  const statusLabel =
    isTaskDone ? "보충 완료" : task?.status === "scheduled" ? "일정 확정" : "일정 미확정";
  const scheduledText = `${lesson.date} ${lesson.startTime || ""}`.trim();
  const confirmedText = task?.lastScheduledAt ? formatKoreanDateTime(task.lastScheduledAt) : "확정 기록 없음";
  const completedText = task?.completedAt || task?.passedAt ? formatKoreanDateTime(task.completedAt || task.passedAt) : "";
  const processStatus = isTaskDone ? "completed" : task?.supplementProcessStatus || "in_progress";
  const processMemo = task?.supplementProgressMemo || "";
  const nextSupplementPlan = task?.nextSupplementPlan || "";
  const passStateMessage =
    passSaveState.message ||
    (task?.status === "done"
      ? `보충 완료 처리 완료${completedText ? ` · ${completedText}` : ""}. 보충관리 active 목록에서는 제외됩니다.`
      : "");
  const normalizedScheduleDraftTime = normalizeTimeInput(scheduleDraft.scheduledTime) || scheduleDraft.scheduledTime;
  const canSaveScheduleDraft = Boolean(onScheduleTask && task?.makeupTaskId && scheduleDraft.scheduledDate && scheduleDraft.scheduledTime);
  const isScheduleSaving = scheduleSaveState.state === "saving";

  useEffect(() => {
    setScheduleDraft({
      scheduleChangeDetail: getSupplementScheduleChangeDetailSeed(task) || targetTitle,
      scheduleChangeReason: "",
      scheduledDate: task?.scheduledDate || lesson.date || "",
      scheduledTime: task?.scheduledTime || lesson.startTime || ""
    });
    setScheduleSaveState({ message: "", state: "idle" });
    setPassSaveState({ message: "", mode: "", state: "idle" });
    setIsScheduleEditOpen(false);
  }, [lesson.lessonId, task?.makeupTaskId]);

  function updateTaskField(field, value) {
    if (!task?.makeupTaskId || !onUpdateTask) return;
    onUpdateTask(task.makeupTaskId, field, value);
  }

  function handleProcessStatusChange(nextStatus) {
    updateTaskField("supplementProcessStatus", nextStatus);
    if (nextStatus === "needs_more") {
      updateTaskField("status", "scheduled");
    }
  }

  async function confirmPassTask() {
    if (!task || !onPassTask) return;
    const isNeedsMore = passConfirmMode === "needs_more";
    const completedMemo = [
      processMemo,
      isNeedsMore && nextSupplementPlan ? `추가 보충 필요: ${nextSupplementPlan}` : ""
    ].filter(Boolean).join("\n");
    setPassSaveState({
      message: isNeedsMore ? "추가 보충 필요 상태로 저장하는 중입니다." : "보충 완료 처리 중입니다.",
      mode: isNeedsMore ? "needs_more" : "completed",
      state: "saving"
    });
    try {
      const savedTask = await onPassTask({
        ...task,
        supplementProcessStatus: isNeedsMore ? "needs_more" : "completed",
        supplementProgressMemo: completedMemo,
        nextSupplementPlan: isNeedsMore ? nextSupplementPlan : task.nextSupplementPlan || "",
        completionDecision: isNeedsMore ? "needs_more" : "completed"
      });
      const savedAt = savedTask?.completedAt || savedTask?.passedAt ? formatKoreanDateTime(savedTask.completedAt || savedTask.passedAt) : "";
      setPassConfirmMode("");
      setPassSaveState({
        message: isNeedsMore
          ? "추가 보충 필요로 저장했습니다. 보충관리 목록에 계속 남습니다."
          : `보충 완료 처리 완료${savedAt ? ` · ${savedAt}` : ""}. 보충관리 active 목록에서는 제외됩니다.`,
        mode: isNeedsMore ? "needs_more" : "completed",
        state: "saved"
      });
    } catch (error) {
      setPassSaveState({
        message: error?.message || "보충 완료 처리를 저장하지 못했습니다.",
        mode: isNeedsMore ? "needs_more" : "completed",
        state: "failed"
      });
    }
  }

  async function saveScheduleDraft(updateStudentReminder) {
    if (!task?.makeupTaskId) {
      setScheduleSaveState({ message: "연결된 보충관리 항목을 찾지 못해 일정을 저장할 수 없습니다.", state: "failed" });
      return;
    }
    if (!scheduleDraft.scheduledDate || !scheduleDraft.scheduledTime) {
      setScheduleSaveState({ message: "배정일과 시간을 먼저 입력해주세요.", state: "failed" });
      return;
    }
    if (!onScheduleTask) {
      setScheduleSaveState({ message: "보충관리 일정 저장 경로가 연결되어 있지 않습니다.", state: "failed" });
      return;
    }

    setScheduleSaveState({
      message: updateStudentReminder
        ? "일정, 학생·학부모 다음 정각 안내, 학생 11시 알림톡 예약을 함께 갱신하는 중입니다."
        : "일정만 저장하는 중입니다. 학생 11시 알림톡 예약은 변경하지 않습니다.",
      state: "saving"
    });

    try {
      const result = await onScheduleTask({
        ...task,
        keepLessonJournalOpen: true,
        scheduleChangeDetail: scheduleDraft.scheduleChangeDetail,
        scheduleChangeReason: scheduleDraft.scheduleChangeReason,
        scheduledDate: scheduleDraft.scheduledDate,
        scheduledTime: normalizedScheduleDraftTime,
        skipStudentReminder: !updateStudentReminder
      });
      const nextTask = result?.makeupTask ?? {
        ...task,
        scheduleChangeDetail: scheduleDraft.scheduleChangeDetail,
        scheduleChangeReason: "",
        scheduledDate: scheduleDraft.scheduledDate,
        scheduledTime: normalizedScheduleDraftTime
      };
      const savedChangeDetail = Object.prototype.hasOwnProperty.call(nextTask, "scheduleChangeDetail")
        ? nextTask.scheduleChangeDetail
        : scheduleDraft.scheduleChangeDetail || getSupplementScheduleChangeDetailSeed(nextTask);
      setScheduleDraft({
        scheduleChangeDetail: savedChangeDetail,
        scheduleChangeReason: "",
        scheduledDate: nextTask.scheduledDate || scheduleDraft.scheduledDate,
        scheduledTime: nextTask.scheduledTime || normalizedScheduleDraftTime
      });
      if (result?.notificationFailed) {
        setScheduleSaveState({
          message: `일정은 서버 원천 저장·재확인을 완료했습니다. ${result.notificationFailureMessage || "알림톡 예약에 실패했습니다."} 예약 확인에서 실패한 알림만 다시 시도해 주세요.`,
          state: "saved"
        });
        return;
      }
      setScheduleSaveState({
        message: updateStudentReminder
          ? [
              result?.scheduleChangeNoticeSkipped ? "" : result?.scheduleChangeNoticeMessage,
              result?.parentScheduleChangeNoticeSkipped ? "" : result?.parentScheduleChangeNoticeMessage,
              result?.supplementReminderMessage || "학생 11시 알림톡 예약을 갱신했습니다."
            ].filter(Boolean).join(" ")
          : result?.supplementReminderMessage || "일정만 저장했습니다. 학생 11시 알림톡 예약은 변경하지 않았습니다.",
        state: "saved"
      });
    } catch (error) {
      setScheduleSaveState({
        message: error?.message || "보충 일정을 저장하지 못했습니다.",
        state: "failed"
      });
    }
  }

  return (
    <div className="homeworkMakeupModalBody">
      <div className="homeworkMakeupSummary">
        <div>
          <span>대상 학생</span>
          <strong>{student?.name ?? "미확인"}</strong>
          <small>{student?.grade ?? "-"} · {student?.schoolName ?? student?.school ?? "학교 미입력"}</small>
        </div>
        <div>
          <span>{isAbsenceMakeup ? "결석한 수업" : "해야 했던 날짜"}</span>
          <strong>{dueDate}</strong>
          <small>{isAbsenceMakeup ? sourceLessonLabel : `${sourceDate} 배정`}</small>
        </div>
        <div>
          <span>{isAbsenceMakeup ? "결석 보강 내용" : "안 한 숙제 내용"}</span>
          <strong>{targetTitle}</strong>
          <small>{isAbsenceMakeup ? task?.absenceReason || "결석 사유 미입력" : originalHomeworkHint}</small>
        </div>
        <div>
          <span>보충 확정 일정</span>
          <strong>{scheduledText}</strong>
          <small>확정 처리: {confirmedText}</small>
        </div>
      </div>

      <div className="homeworkMakeupModalActions">
        <span className="statusPill">{statusLabel}</span>
        <div>
          <button className="ghostButton scheduleEditButton" type="button" onClick={() => setIsScheduleEditOpen((current) => !current)}>
            {isScheduleEditOpen ? "수정 닫기" : "일정 수정"}
          </button>
          <button className="dangerButton" type="button" onClick={() => onDeleteLesson(lesson.lessonId)}>
            일정 삭제
          </button>
        </div>
      </div>

      {isScheduleEditOpen ? (
        <section className="homeworkMakeupScheduleEditor" aria-label="숙제보충 일정 수정">
          <div>
            <strong>보충 일정 수정</strong>
            <span>저장하면 보충관리와 수업일지 일정이 함께 갱신됩니다. 솔라피 발송과 예약 갱신 여부는 아래에서 선택합니다.</span>
          </div>
          <div className="fieldGrid two">
            <label>
              <strong>배정일</strong>
              <input
                type="date"
                value={scheduleDraft.scheduledDate}
                onChange={(event) => setScheduleDraft((current) => ({ ...current, scheduledDate: event.target.value }))}
              />
            </label>
            <label>
              <strong>시간</strong>
              <input
                type="time"
                value={scheduleDraft.scheduledTime}
                onChange={(event) => setScheduleDraft((current) => ({ ...current, scheduledTime: event.target.value }))}
              />
            </label>
          </div>
          <div className="fieldGrid two">
            <label className="homeworkMakeupScheduleTextField">
              <strong>보충 내역</strong>
              <textarea
                value={scheduleDraft.scheduleChangeDetail}
                onChange={(event) => setScheduleDraft((current) => ({ ...current, scheduleChangeDetail: event.target.value }))}
                placeholder="예: 쎈 C단계, 지난 숙제 확인, 결석 수업 보강 범위"
              />
            </label>
            <label className="homeworkMakeupScheduleTextField">
              <strong>변경 사유</strong>
              <textarea
                value={scheduleDraft.scheduleChangeReason}
                onChange={(event) => setScheduleDraft((current) => ({ ...current, scheduleChangeReason: event.target.value }))}
                placeholder="예: 학생 요청, 수업 시간 조정, 개인 일정 변경"
              />
            </label>
          </div>
          {scheduleSaveState.message ? (
            <p className={`homeworkMakeupScheduleState ${scheduleSaveState.state}`}>{scheduleSaveState.message}</p>
          ) : null}
          <div className="modalActions supplementSplitActions">
            <button className="softButton" disabled={!canSaveScheduleDraft || isScheduleSaving} onClick={() => saveScheduleDraft(false)} type="button">
              {isScheduleSaving ? "저장 중" : "일정만 저장"}
            </button>
            <button className="softButton scheduleApplyButton" disabled={!canSaveScheduleDraft || isScheduleSaving} onClick={() => saveScheduleDraft(true)} type="button">
              {isScheduleSaving ? "예약/갱신 중" : "다음 정각 예약 및 11시 갱신"}
            </button>
          </div>
          <p className="supplementScheduleActionHint">
            현재 일정의 학생·학부모 안내가 없으면 다음 정각으로 예약하고, 보강 당일 오전 11시 학생 알림톡 예약도 갱신합니다. 이미 같은 일정 안내가 있으면 중복 예약하지 않습니다.
          </p>
        </section>
      ) : null}

      <div className="homeworkMakeupHero">
        <section className="panel homeworkMakeupNotice">
          <h3>{isAbsenceMakeup ? "원 결석 수업" : "보충 대상"}</h3>
          <div className="makeupLinkedBox">
            <span>{isAbsenceMakeup ? "결석한 수업" : "보충 대상"}</span>
            <strong>{targetTitle}</strong>
            <small>{isAbsenceMakeup ? `원 결석 수업일: ${sourceDate}` : `원 수업일자: ${sourceDate} · 마감일: ${dueDate}`}</small>
            {!isAbsenceMakeup && originalHomeworkTitle && originalHomeworkTitle !== targetTitle ? (
              <small className="makeupOriginalHomework">수업일지 원본 숙제명: {originalHomeworkTitle}</small>
            ) : null}
          </div>
          {student && supplementAttendanceRecord ? (
            <div className="supplementAttendanceBox">
              <div>
                <span>보충 당일 출결</span>
                <strong>{lesson.date} {lesson.startTime || ""}</strong>
                <small>출결 저장/알림톡은 이 보충 수업의 lessonId 기준으로 처리됩니다.</small>
              </div>
              <button
                className={`attendanceBadge attendance-${supplementAttendanceDisplay?.statusClass ?? supplementAttendanceRecord.attendanceStatus ?? "pending"}`}
                disabled={!onOpenAttendance}
                onClick={() => onOpenAttendance?.({ lesson: supplementAttendanceLesson, record: supplementAttendanceRecord, student })}
                type="button"
              >
                <span>{supplementAttendanceDisplay?.label ?? "출결 입력"}</span>
                {supplementAttendanceDisplay?.detail ? <small>{supplementAttendanceDisplay.detail}</small> : null}
                {supplementCheckoutMissing ? <small className="checkoutMissingText">하원 미체크</small> : null}
              </button>
            </div>
          ) : null}
          {isAbsenceMakeup ? (
            <div className="absenceSourceJournalBox compact">
              <h4>원 결석 수업 맥락</h4>
              <p className="muted">오늘 보충 수업의 이전/다음 숙제가 아니라, 결석했던 수업의 저장본입니다.</p>
              <div className="absenceSourceJournalGrid compact">
                <div>
                  <span>그날 수업 교재</span>
                  <strong>{sourceLessonMaterial || "기록 없음"}</strong>
                </div>
                <div>
                  <span>그날 수업 내용</span>
                  <strong>{sourceLessonContent || "기록 없음"}</strong>
                </div>
                <div>
                  <span>그날 확인할 지난 숙제</span>
                  <strong>{sourcePreviousHomeworkText || "기록 없음"}</strong>
                </div>
                <div>
                  <span>그날 새로 나간 숙제</span>
                  <strong>{sourceNextHomeworkText || "기록 없음"}</strong>
                </div>
              </div>
            </div>
          ) : null}
        </section>
        <section className="panel homeworkMakeupProcess">
          <SectionHeader
            density="slim"
            description="오늘 무엇을 보충했고, 남은 보충이 있는지 기록합니다."
            title="보충 처리"
            titleAs="h3"
          />
          <div className="makeupProcessStatusGrid">
            {[
              { id: "in_progress", label: "진행 중", description: "보충을 진행했지만 아직 완료 판단 전" },
              { id: "needs_more", label: "추가 보충 필요", description: "오늘 다 끝나지 않아 다음 보충이 필요" },
              { id: "completed", label: "보충 완료", description: "이번 보충 항목을 통과 처리 가능" }
            ].map((option) => (
              <button
                className={processStatus === option.id ? "active" : ""}
                disabled={isPassSaving || isTaskDone}
                key={option.id}
                onClick={() => handleProcessStatusChange(option.id)}
                type="button"
              >
                <strong>{option.label}</strong>
                <span>{option.description}</span>
              </button>
            ))}
          </div>
          <div className="makeupProcessFormGrid">
            <label className="makeupProcessField">
              보충 진행 메모
              <textarea
                disabled={isPassSaving || isTaskDone}
                value={processMemo}
                onChange={(event) => updateTaskField("supplementProgressMemo", event.target.value)}
                placeholder="예: 쎈 오답 5문항 중 3문항 풀이 완료. 나머지 2문항은 계산 실수 반복으로 추가 확인 필요."
              />
            </label>
            <label className="makeupProcessField">
              추가 보충 내용
              <textarea
                disabled={isPassSaving || isTaskDone}
                value={nextSupplementPlan}
                onChange={(event) => updateTaskField("nextSupplementPlan", event.target.value)}
                placeholder="추가 보충이 필요할 때 다음에 진행할 숙제/문항/범위를 적어주세요."
              />
            </label>
          </div>
          {passStateMessage ? (
            <p className={`homeworkMakeupPassState ${passSaveState.state === "idle" && task?.status === "done" ? "saved" : passSaveState.state}`}>
              {passStateMessage}
            </p>
          ) : null}
          <div className="makeupProcessActions">
            <button className="softButton" disabled={isPassSaving || isTaskDone} onClick={() => setPassConfirmMode("needs_more")} type="button">
              {isPassSaving ? "처리 중" : "추가 보충 필요로 기록"}
            </button>
            <button className="primaryButton" disabled={!task || isTaskDone || isPassSaving} onClick={() => setPassConfirmMode("completed")} type="button">
              {isTaskDone ? "보충 완료됨" : isPassSaving ? "처리 중" : "보충 완료 처리"}
            </button>
          </div>
        </section>
      </div>
      {passConfirmMode ? (
        <Modal
          className="supplementPassConfirmModal"
          closeDisabled={isPassSaving}
          title={passConfirmMode === "needs_more" ? "추가 보충 필요 기록" : "보충 완료 처리"}
          subtitle="처리 내용은 보충관리 이력에 남습니다."
          onClose={() => {
            if (!isPassSaving) setPassConfirmMode("");
          }}
        >
          <div className="supplementPassConfirmBody">
            <p>
              <strong>{student?.name ?? "학생"}</strong> 학생의 보충을
              {passConfirmMode === "needs_more" ? " 추가 보충 필요 상태로 기록할까요?" : " 완료 처리할까요?"}
            </p>
            <dl className="supplementPassConfirmSummary">
              <div>
                <dt>보충 대상</dt>
                <dd>{targetTitle}</dd>
              </div>
              <div>
                <dt>진행 메모</dt>
                <dd>{processMemo || "메모 없음"}</dd>
              </div>
              {passConfirmMode === "needs_more" ? (
                <div>
                  <dt>추가 내용</dt>
                  <dd>{nextSupplementPlan || "추가 보충 내용을 입력하지 않았습니다."}</dd>
                </div>
              ) : null}
            </dl>
          </div>
          <ModalFooter className="confirmActions">
            <button className="softButton" disabled={isPassSaving} onClick={() => setPassConfirmMode("")} type="button">
              취소
            </button>
            <button className="primaryButton" disabled={isPassSaving} onClick={confirmPassTask} type="button">
              {isPassSaving ? "처리 중" : passConfirmMode === "needs_more" ? "추가 보충 필요 기록" : "보충 완료 처리"}
            </button>
          </ModalFooter>
          {passSaveState.message ? (
            <p className={`homeworkMakeupPassState modalState ${passSaveState.state}`}>{passSaveState.message}</p>
          ) : null}
        </Modal>
      ) : null}
    </div>
  );
}

export function PreparationMemoModal({
  runtime,
  acknowledgedMemoCutoff = null,
  homeworkFollowup = null,
  homeworkFollowupLesson = null,
  homeworkFollowupRecord = null,
  lesson,
  onChangeRecord,
  onClose,
  onSaveRecord,
  previousLesson = null,
  previousRecord = null,
  record,
  referenceLesson = null,
  referenceRecord = null,
  saveState = "idle",
  student
}) {
  const {
    createEmptyRecord,
    createLessonStudentRecordId,
    formatKoreaTimeLabel,
    getHomeworkFollowupPatch,
    getSaveButtonLabel
  } = runtime;
  const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
  const currentRecord = {
    ...createEmptyRecord(lesson, student),
    ...(record ?? {})
  };
  const [draftMemo, setDraftMemo] = useState(currentRecord.preparationMemo ?? "");
  const [draftStudentVisible, setDraftStudentVisible] = useState(Boolean(currentRecord.prepStudentVisible));
  const [draftParentVisible, setDraftParentVisible] = useState(Boolean(currentRecord.prepParentVisible));
  const [localCheckedMemo, setLocalCheckedMemo] = useState({
    checkedAt: currentRecord.prepMemoCheckedAt ?? "",
    sourceDate: currentRecord.prepMemoCheckedSourceDate ?? "",
    sourceRecordId: currentRecord.prepMemoCheckedSourceRecordId ?? ""
  });
  const [localSaveError, setLocalSaveError] = useState("");
  const [pendingHomeworkFollowup, setPendingHomeworkFollowup] = useState(homeworkFollowup);
  const [homeworkFollowupCheckState, setHomeworkFollowupCheckState] = useState("idle");
  const [homeworkFollowupCheckError, setHomeworkFollowupCheckError] = useState("");
  const [isClosingAfterSave, setIsClosingAfterSave] = useState(false);
  const preparationMemoModel = createLessonJournalPreparationMemoModel({
    acknowledgedMemoCutoff,
    currentRecord,
    localCheckedMemo,
    previousLesson,
    previousRecord,
    referenceLesson,
    referenceRecord
  });
  const {
    canCheckPriorMemo,
    priorMemoSourceDate,
    priorMemoSourceRecordId
  } = preparationMemoModel;

  function createMemoSnapshot(checkedMemo = localCheckedMemo) {
    return JSON.stringify({
      preparationMemo: draftMemo,
      prepMemoCheckedAt: checkedMemo.checkedAt || "",
      prepMemoCheckedSourceDate: checkedMemo.sourceDate || "",
      prepMemoCheckedSourceRecordId: checkedMemo.sourceRecordId || "",
      prepStudentVisible: draftStudentVisible,
      prepParentVisible: draftParentVisible
    });
  }

  const initialDraftSnapshot = JSON.stringify({
    preparationMemo: currentRecord.preparationMemo ?? "",
    prepMemoCheckedAt: currentRecord.prepMemoCheckedAt ?? "",
    prepMemoCheckedSourceDate: currentRecord.prepMemoCheckedSourceDate ?? "",
    prepMemoCheckedSourceRecordId: currentRecord.prepMemoCheckedSourceRecordId ?? "",
    prepStudentVisible: Boolean(currentRecord.prepStudentVisible),
    prepParentVisible: Boolean(currentRecord.prepParentVisible)
  });
  const lastSavedSnapshotRef = useRef(initialDraftSnapshot);

  function updateDraft(field, value) {
    if (field === "preparationMemo") setDraftMemo(value);
    if (field === "prepStudentVisible") setDraftStudentVisible(Boolean(value));
    if (field === "prepParentVisible") setDraftParentVisible(Boolean(value));
  }

  function saveMemo() {
    setLocalSaveError("");
    const draftSnapshot = createMemoSnapshot();
    if (draftSnapshot === lastSavedSnapshotRef.current && saveState !== "failed") {
      return Promise.resolve();
    }
    const nowIso = new Date().toISOString();
    return onSaveRecord(recordId, lesson, student, {
      ...currentRecord,
      preparationMemo: draftMemo,
      prepMemoCheckedAt: localCheckedMemo.checkedAt || currentRecord.prepMemoCheckedAt || "",
      prepMemoCheckedSourceDate: localCheckedMemo.sourceDate || currentRecord.prepMemoCheckedSourceDate || "",
      prepMemoCheckedSourceRecordId: localCheckedMemo.sourceRecordId || currentRecord.prepMemoCheckedSourceRecordId || "",
      prepStudentVisible: draftStudentVisible,
      prepParentVisible: draftParentVisible,
      updatedBy: "instructor_owner_001",
      updatedAt: nowIso
    }, { skipRelatedHomeworks: true, skipNotificationRefresh: true }).then((saved) => {
      if (saved !== false) lastSavedSnapshotRef.current = draftSnapshot;
      if (saved === false) setLocalSaveError("수업메모 저장 실패 · 내용을 유지한 채 다시 저장해 주세요.");
      return saved;
    });
  }

  function checkPriorMemo() {
    if (!canCheckPriorMemo) return Promise.resolve(false);
    const nowIso = new Date().toISOString();
    const checkedMemo = {
      checkedAt: nowIso,
      sourceDate: priorMemoSourceDate,
      sourceRecordId: priorMemoSourceRecordId
    };
    setLocalCheckedMemo(checkedMemo);
    const draftSnapshot = createMemoSnapshot(checkedMemo);
    return onSaveRecord(recordId, lesson, student, {
      ...currentRecord,
      preparationMemo: draftMemo,
      prepMemoCheckedAt: checkedMemo.checkedAt,
      prepMemoCheckedSourceDate: checkedMemo.sourceDate,
      prepMemoCheckedSourceRecordId: checkedMemo.sourceRecordId,
      prepStudentVisible: draftStudentVisible,
      prepParentVisible: draftParentVisible,
      updatedBy: "instructor_owner_001",
      updatedAt: nowIso
    }, { skipRelatedHomeworks: true, skipNotificationRefresh: true }).then((saved) => {
      if (saved === false) {
        setLocalCheckedMemo({
          checkedAt: currentRecord.prepMemoCheckedAt ?? "",
          sourceDate: currentRecord.prepMemoCheckedSourceDate ?? "",
          sourceRecordId: currentRecord.prepMemoCheckedSourceRecordId ?? ""
        });
        return false;
      }
      lastSavedSnapshotRef.current = draftSnapshot;
      return true;
    });
  }

  async function checkHomeworkFollowup() {
    if (
      !pendingHomeworkFollowup?.text ||
      !homeworkFollowupLesson?.lessonId ||
      !homeworkFollowupRecord ||
      homeworkFollowupCheckState === "saving"
    ) {
      return false;
    }
    setHomeworkFollowupCheckError("");
    setHomeworkFollowupCheckState("saving");
    const sourceRecordId = homeworkFollowupRecord.lessonStudentRecordId ||
      createLessonStudentRecordId(homeworkFollowupLesson.lessonId, student.studentId);
    const saved = await onSaveRecord(sourceRecordId, homeworkFollowupLesson, student, {
      ...homeworkFollowupRecord,
      ...getHomeworkFollowupPatch(homeworkFollowupRecord),
      updatedBy: "instructor_owner_001",
      updatedAt: new Date().toISOString()
    }, {
      skipNotificationRefresh: true,
      skipRelatedHomeworks: true,
      verifyFields: [
        "homeworkFollowupMethod",
        "homeworkFollowupText",
        "homeworkFollowupSourceHomeworkId",
        "preparationMemo"
      ]
    });
    if (saved === false) {
      setHomeworkFollowupCheckError("확인할 숙제 저장 실패 · 항목을 유지했습니다. 다시 시도해 주세요.");
      setHomeworkFollowupCheckState("failed");
      return false;
    }
    setPendingHomeworkFollowup(null);
    setHomeworkFollowupCheckState("saved");
    return true;
  }

  function closeMemo() {
    if (isClosingAfterSave || saveState === "saving") return;
    setIsClosingAfterSave(true);
    saveMemo().then((saved) => {
      setIsClosingAfterSave(false);
      if (saved === false) return;
      onClose();
    }).catch((error) => {
      setIsClosingAfterSave(false);
      setLocalSaveError(`수업메모 저장 실패 · ${error.message}`);
    });
  }

  return (
    <LessonJournalPreparationMemoView
      checkedMemoAtLabel={
        preparationMemoModel.checkedMemoAt
          ? formatKoreaTimeLabel(preparationMemoModel.checkedMemoAt)
          : ""
      }
      draftMemo={draftMemo}
      draftParentVisible={draftParentVisible}
      draftStudentVisible={draftStudentVisible}
      homeworkFollowup={pendingHomeworkFollowup}
      homeworkFollowupCheckError={homeworkFollowupCheckError}
      homeworkFollowupCheckState={homeworkFollowupCheckState}
      isClosingAfterSave={isClosingAfterSave}
      lesson={lesson}
      localSaveError={localSaveError}
      model={preparationMemoModel}
      onCheckPriorMemo={checkPriorMemo}
      onCheckHomeworkFollowup={checkHomeworkFollowup}
      onClose={closeMemo}
      onSave={saveMemo}
      onUpdateDraft={updateDraft}
      saveButtonLabel={isClosingAfterSave ? "저장 중" : getSaveButtonLabel(saveState)}
      saveState={saveState}
      student={student}
    />
  );
}
