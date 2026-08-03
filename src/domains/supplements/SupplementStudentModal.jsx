import { useMemo, useState } from "react";
import { getSupplementStudentReminderScheduledAt } from "../notifications/supplementJobBuilders.js";
import {
  canCancelNotificationJob,
  getSupplementNotificationControlJob
} from "../notifications/notificationJobSelectors.js";
import { createSupplementCancellationHandler } from "./supplementAbsenceCancelController.js";
import { createSupplementConfirmationSubmitHandlers } from "./supplementConfirmationSubmitController.js";
import { SupplementCancellationConfirmModal } from "./SupplementCancellationConfirmModal.jsx";
import { SupplementNotificationControlModal } from "./SupplementNotificationControlModal.jsx";
import {
  createSupplementNotificationBulkCancelHandler,
  createSupplementNotificationControlActionHandler
} from "./supplementNotificationControlController.js";
import { createSupplementNotificationControlModalViewModel } from "./supplementNotificationControlModel.js";
import { SupplementPassConfirmModal } from "./SupplementPassConfirmModal.jsx";
import { SupplementScheduleChangeConfirmModal } from "./SupplementScheduleChangeConfirmModal.jsx";
import { SupplementStudentModalShell } from "./SupplementStudentModalShell.jsx";
import { SupplementTaskCard } from "./SupplementTaskCard.jsx";
import { createSupplementSourceReconcileModel } from "./supplementSourceReconcileModel.js";
import {
  createSupplementNotificationDraftWorkspaceViewModel,
  createSupplementTaskCardViewModel
} from "./supplementTaskCardModel.js";
import { createSupplementTaskContentSaveHandler } from "./supplementTaskContentSaveController.js";
import { createSupplementTaskDraftChangeHandler } from "./supplementTaskDraftChangeController.js";
import { createSupplementTaskPassHandler } from "./supplementTaskPassController.js";
import { createSupplementTaskScheduleHandlers } from "./supplementTaskScheduleController.js";
import { supplementNotificationDraftConfigs } from "./supplementTaskDraft.js";
import { getSupplementImmediateNoticeSaveStatus } from "./supplementStatus.js";
import { useSupplementConfirmationState } from "./useSupplementConfirmationState.js";
import { useSupplementFeedbackState } from "./useSupplementFeedbackState.js";
import { useSupplementNotificationControlState } from "./useSupplementNotificationControlState.js";
import { useSupplementTaskBusyState } from "./useSupplementTaskBusyState.js";
import { useSupplementTaskDraftController } from "./useSupplementTaskDraftController.js";
import { useSupplementTaskSaveStatusState } from "./useSupplementTaskSaveStatusState.js";

export function SupplementStudentModal({
  dependencies,
  lessons = [],
  notificationTemplates = {},
  notificationJobs = [],
  onCancelAbsenceMakeup,
  onCancelAbsenceSource,
  onCancelNotification,
  onClose,
  onPassTask,
  onReserveNotification,
  onSaveTask,
  onScheduleTask,
  student,
  tabTitle,
  tasks
}) {
  const {
    createSupplementTaskDraft,
    followUpTypeLabel,
    formatKoreaTimeLabel,
    formatNotificationJobStatus,
    formatSupplementScheduleDateTime,
    getSolapiNotificationJobProviderReference,
    getSupplementNotificationControlDisplayForApp,
    getSupplementScheduleChangeDetailSeed,
    getSupplementScheduleNoticeDraft,
    getSupplementTaskDraftDiff,
    maskPhoneForDisplay,
    normalizeMessageText,
    normalizeNotificationTemplates,
    supplementMethodLabel,
    supplementMethodOptions,
    supplementTaskDraftDependencies
  } = dependencies;
  const normalizedNotificationTemplates = useMemo(
    () => normalizeNotificationTemplates(notificationTemplates),
    [notificationTemplates]
  );
  const [cancellationConfirm, setCancellationConfirm] = useState(null);
  const {
    dismissFeedback,
    feedback,
    showFeedback
  } = useSupplementFeedbackState();
  const {
    getTaskSaveStatus,
    setTaskSaveStatusPatch
  } = useSupplementTaskSaveStatusState();
  const {
    beginTaskAction,
    finishTaskAction,
    hasBusyTask,
    isTaskActionBusy,
    isTaskBusy
  } = useSupplementTaskBusyState();
  const {
    closePassConfirmation,
    closeScheduleConfirmation,
    getConfirmedScheduleTask,
    openPassConfirmation,
    openScheduleConfirmation,
    passConfirmTask,
    scheduleConfirmTask
  } = useSupplementConfirmationState();
  const {
    closeNotificationControl,
    notificationControl,
    notificationControlBusy,
    notificationControlFeedback,
    openNotificationControl,
    setNotificationControlBusy,
    setNotificationControlFeedback
  } = useSupplementNotificationControlState();
  const {
    buildTaskWithDraft,
    getTaskDraftState,
    markTaskDraftSaved,
    updateTaskDraftValues
  } = useSupplementTaskDraftController({
    dependencies: supplementTaskDraftDependencies,
    notificationTemplates: normalizedNotificationTemplates,
    student,
    tasks
  });

  const updateTaskDraft = createSupplementTaskDraftChangeHandler({
    getTaskSaveStatus,
    setTaskSaveStatusPatch,
    updateTaskDraftValues
  });

  const handleSaveTask = createSupplementTaskContentSaveHandler({
    beginTaskAction,
    buildTaskWithDraft,
    finishTaskAction,
    getTaskSaveStatus,
    hasBusyTask,
    markTaskDraftSaved,
    onSaveTask,
    setTaskSaveStatusPatch,
    showFeedback
  });

  const {
    handleApplyScheduleTask,
    requestApplyScheduleTask
  } = createSupplementTaskScheduleHandlers({
    beginTaskAction,
    buildTaskWithDraft,
    closeScheduleConfirmation,
    finishTaskAction,
    getImmediateNoticeStatus: getSupplementImmediateNoticeSaveStatus,
    hasBusyTask,
    markTaskDraftSaved,
    onScheduleTask,
    openScheduleConfirmation,
    setTaskSaveStatusPatch,
    showFeedback
  });

  const handleConfirmSupplementCancellation = createSupplementCancellationHandler({
    beginTaskAction,
    clearConfirmation: () => setCancellationConfirm(null),
    finishTaskAction,
    getCancellation: () => cancellationConfirm,
    hasBusyTask,
    onCancelAbsenceMakeup,
    onCancelAbsenceSource,
    onClose,
    showFeedback
  });

  const handlePassTask = createSupplementTaskPassHandler({
    beginTaskAction,
    buildTaskWithDraft,
    closePassConfirmation,
    finishTaskAction,
    hasBusyTask,
    onClose,
    onPassTask,
    showFeedback,
    studentName: student.name
  });

  const {
    confirmPassTask,
    confirmScheduleTask
  } = createSupplementConfirmationSubmitHandlers({
    getConfirmedScheduleTask,
    handleApplyScheduleTask,
    handlePassTask,
    passConfirmTask
  });

  const notificationControlViewModel = createSupplementNotificationControlModalViewModel({
    notificationControl,
    notificationJobs,
    student,
    tasks
  }, {
    canCancelJob: canCancelNotificationJob,
    getControlDisplay: getSupplementNotificationControlDisplayForApp,
    getControlJob: getSupplementNotificationControlJob,
    getCurrentPreview: (task, controlType) => controlType === "studentReminder"
      ? createSupplementTaskDraft(task, student, normalizedNotificationTemplates).notificationDraft
      : getSupplementScheduleNoticeDraft(
          task,
          controlType === "parentSchedule" ? "parent" : "student",
          "",
          normalizedNotificationTemplates,
          student
        ),
    getTaskDraftDiff: (task, draftValues) => getSupplementTaskDraftDiff(
      task,
      draftValues,
      student,
      normalizedNotificationTemplates
    ),
    getTaskDraftState,
    getSourceBlockReason: (task) => createSupplementSourceReconcileModel({
      lessons,
      notificationJobs,
      task
    }).notificationBlockReason,
    normalizeMessage: normalizeMessageText
  });
  const notificationControlTask = notificationControlViewModel.task;
  const notificationControls = notificationControlViewModel.controls.map((control) => ({
    ...control,
    jobStatusLabel: control.job ? formatNotificationJobStatus(control.job) : "예약 기록 없음",
    providerReferenceLabel: getSolapiNotificationJobProviderReference(control.job) || "연결된 Solapi 그룹 없음",
    recipientLabel: maskPhoneForDisplay(control.recipient),
    scheduledAtLabel: control.job?.scheduledAt
      ? formatKoreaTimeLabel(control.job.scheduledAt)
      : control.controlType === "studentReminder"
        ? formatKoreaTimeLabel(getSupplementStudentReminderScheduledAt(notificationControlTask))
        : "예약 버튼을 누른 뒤 다음 정각"
  }));

  function handleNotificationControlAction(controlType, action) {
    const control = notificationControls.find((item) => item.controlType === controlType);
    if (!control) return undefined;
    return createSupplementNotificationControlActionHandler({
      notificationControl: { ...notificationControl, controlType },
      notificationControlBusy,
      notificationControlConfig: control.config,
      notificationControlJob: control.job,
      notificationControlTask,
      onCancelNotification,
      onReserveNotification,
      setNotificationControlBusy,
      setNotificationControlFeedback,
      setTaskSaveStatusPatch
    })(action);
  }

  const handleNotificationBulkCancel = createSupplementNotificationBulkCancelHandler({
    controls: notificationControls,
    notificationControlBusy,
    notificationControlTask,
    onCancelNotification,
    setNotificationControlBusy,
    setNotificationControlFeedback,
    setTaskSaveStatusPatch
  });

  return (
    <SupplementStudentModalShell
      feedback={feedback}
      isEmpty={tasks.length === 0}
      onClose={onClose}
      onDismissFeedback={dismissFeedback}
      overlays={(
        <>
          {cancellationConfirm ? (
            <SupplementCancellationConfirmModal
              isBusy={
                isTaskActionBusy(cancellationConfirm.task.makeupTaskId, "cancelMakeup") ||
                isTaskActionBusy(cancellationConfirm.task.makeupTaskId, "cancelAbsence")
              }
              mode={cancellationConfirm.mode}
              onCancel={() => setCancellationConfirm(null)}
              onConfirm={handleConfirmSupplementCancellation}
              studentName={student.name}
              task={cancellationConfirm.task}
            />
          ) : null}
          {passConfirmTask ? (
            <SupplementPassConfirmModal
              getTypeLabel={followUpTypeLabel}
              isBusy={isTaskActionBusy(passConfirmTask.makeupTaskId, "pass")}
              onCancel={closePassConfirmation}
              onConfirm={confirmPassTask}
              studentName={student.name}
              task={passConfirmTask}
            />
          ) : null}
          {scheduleConfirmTask ? (
            <SupplementScheduleChangeConfirmModal
              getDetailSeed={getSupplementScheduleChangeDetailSeed}
              getTypeLabel={followUpTypeLabel}
              isBusy={isTaskActionBusy(scheduleConfirmTask.makeupTaskId, "schedule")}
              onCancel={closeScheduleConfirmation}
              onConfirmWithReminder={(noticePatch) => confirmScheduleTask(true, noticePatch)}
              onConfirmWithoutReminder={(noticePatch) => confirmScheduleTask(false, noticePatch)}
              studentName={student.name}
              task={scheduleConfirmTask}
            />
          ) : null}
          {notificationControlTask && notificationControls.length ? (
            <SupplementNotificationControlModal
              controls={notificationControls}
              feedback={notificationControlFeedback}
              isBusy={notificationControlBusy}
              onCancelAll={handleNotificationBulkCancel}
              onClose={closeNotificationControl}
              onReserve={(controlType) => handleNotificationControlAction(controlType, "reserve")}
              scheduleLabel={formatSupplementScheduleDateTime(notificationControlTask)}
              studentName={student.name}
            />
          ) : null}
        </>
      )}
      studentGrade={student.grade}
      studentName={student.name}
      studentSchool={student.schoolName}
      tabTitle={tabTitle}
    >
      {tasks.map((task) => {
        const taskDraftState = getTaskDraftState(task);
        const draftValues = taskDraftState.values;
        const draftDiff = getSupplementTaskDraftDiff(task, draftValues, student, normalizedNotificationTemplates);
        const methodOptions = supplementMethodOptions(task.taskType);
        const saveStatus = getTaskSaveStatus(task.makeupTaskId);
        const sourceReconcile = createSupplementSourceReconcileModel({
          lessons,
          notificationJobs,
          task
        });
        const taskCardViewModel = createSupplementTaskCardViewModel({
          draftDiff,
          draftValues,
          getMethodLabel: supplementMethodLabel,
          methodOptions,
          saveStatus,
          sourceReconcile,
          task
        });
        const taskBusy = isTaskBusy(task.makeupTaskId);
        const isContentBusy = isTaskActionBusy(task.makeupTaskId, "content");
        const isScheduleBusy = isTaskActionBusy(task.makeupTaskId, "schedule");
        const isLocalDraftTask = Boolean(task.isLocalDraftTask);
        const canCancelAbsenceSource = isLocalDraftTask && task.taskType === "absence_makeup";
        const canCancelAbsenceMakeup =
          task.taskType === "absence_makeup" &&
          !["done", "canceled"].includes(task.status);
        const isCancelAbsenceBusy = isTaskActionBusy(task.makeupTaskId, "cancelAbsence");
        const isCancelMakeupBusy = isTaskActionBusy(task.makeupTaskId, "cancelMakeup");
        const notificationDraftViewModel = createSupplementNotificationDraftWorkspaceViewModel({
          draftState: taskDraftState,
          notificationJobs,
          task
        }, {
          getControlDisplay: getSupplementNotificationControlDisplayForApp,
          getControlJob: getSupplementNotificationControlJob
        });
        return (
          <SupplementTaskCard
            actionProps={{
              ...taskCardViewModel.scheduleActionProps,
              hasScheduleDraft: taskCardViewModel.hasScheduleDraft,
              isContentBusy,
              isLocalDraftTask,
              isPassBusy: isTaskActionBusy(task.makeupTaskId, "pass"),
              isScheduleBusy,
              isTaskBusy: taskBusy,
              onPass: () => openPassConfirmation(buildTaskWithDraft(task)),
              onSave: () => handleSaveTask(task),
              onSchedule: () => requestApplyScheduleTask(task)
            }}
            cancellationSlot={canCancelAbsenceSource || canCancelAbsenceMakeup ? (
              <>
                {canCancelAbsenceMakeup ? (
                  <section className="supplementCancellationZone keepAbsence">
                    <div>
                      <strong>{isLocalDraftTask ? "보강만 취소 · 결석기록 유지" : "보강 일정만 취소"}</strong>
                      <span>
                        {isLocalDraftTask
                          ? "아직 일정이 없는 보강 후보를 취소 이력으로 저장해 다시 나타나지 않게 하고, 원 결석 상태·사유는 유지합니다."
                          : "원 수업일지의 결석 상태·사유는 유지하고, 보강 항목과 연결 일정 및 미발송 예약만 취소합니다."}
                      </span>
                    </div>
                    <button
                      className="dangerSoftButton"
                      disabled={taskBusy}
                      onClick={() => setCancellationConfirm({
                        mode: "cancelMakeupKeepAbsence",
                        task
                      })}
                      type="button"
                    >
                      {isCancelMakeupBusy ? "보강 취소 중" : "보강만 취소"}
                    </button>
                  </section>
                ) : null}
                {canCancelAbsenceSource ? (
                  <section className="supplementCancellationZone cancelAbsence">
                    <div>
                      <strong>결석 원본 자체를 취소</strong>
                      <span>결석 입력 자체가 잘못된 경우에만 원 수업일지의 결석을 대기 상태로 되돌립니다.</span>
                    </div>
                    <button
                      className="dangerSoftButton"
                      disabled={taskBusy}
                      onClick={() => setCancellationConfirm({
                        mode: "cancelAbsenceSource",
                        task
                      })}
                      type="button"
                    >
                      {isCancelAbsenceBusy ? "결석 취소 중" : "결석 기록 취소"}
                    </button>
                  </section>
                ) : null}
              </>
            ) : null}
            headerProps={{
              hasSavedNotificationDrafts: taskCardViewModel.hasSavedNotificationDrafts,
              sourceStatus: taskCardViewModel.sourceStatusProps,
              task,
              taskMeta: taskCardViewModel.taskMeta,
              typeLabel: followUpTypeLabel(task.taskType)
            }}
            key={task.makeupTaskId}
            notificationProps={{
              configs: notificationDraftViewModel.tabConfigs,
              hasUnsavedChanges: draftDiff.length > 0,
              isBusy: taskBusy,
              onChangeDraft: (field, value) => updateTaskDraft(task, field, value),
              onOpenControl: () => openNotificationControl(task, "all"),
              onSave: () => handleSaveTask(task),
              shouldLinkStudentDraft: task.taskType === "absence_makeup"
            }}
            saveSummaryProps={taskCardViewModel.saveSummaryProps}
            scheduleEditorProps={{
              ...taskCardViewModel.scheduleEditorProps,
              onChange: (field, value) => updateTaskDraft(task, field, value)
            }}
            scheduleGateProps={taskCardViewModel.scheduleGateProps}
            sourceContextProps={taskCardViewModel.sourceContextProps}
          />
        );
      })}
    </SupplementStudentModalShell>
  );
}
