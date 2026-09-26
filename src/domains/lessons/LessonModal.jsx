import { useEffect, useState } from "react";
import { ConfirmDialog } from "../../shared/components/ConfirmDialog.jsx";
import { Modal } from "../../shared/components/Modal.jsx";
import { createClosureMakeupNotificationDrafts } from "../notifications/closureMakeupNotification.js";
import {
  getLessonClosureBlockingNotificationJobs,
  isLessonClosureConversion,
  isLessonTypeChoiceDisabled as getIsLessonTypeChoiceDisabled
} from "./lessonClosure.js";
import {
  createLessonModalSubmitPayload,
  getLessonModalValidationError
} from "./lessonModalDraftModel.js";
import {
  createLessonModalColorOptions,
  createLessonModalDateChangePatch,
  createLessonModalStartTimeChangePatch,
  createLessonModalTemplateChangePatch,
  createLessonModalTypeChangePatch
} from "./lessonModalDraftTransitions.js";
import {
  createLessonModalClosureMakeupLessonId,
  createLessonModalDraftLessonId,
  createLessonModalInitialDraft
} from "./lessonModalInitialDraft.js";
import {
  createLessonModalFailedSaveState,
  createLessonModalSavedSaveState,
  createLessonModalSavingSaveState,
  createLessonModalValidationFailureSaveState,
  getLessonModalSaveMessageAfterDraftChange,
  getLessonModalSaveStateAfterDraftChange,
  lessonModalInitialSaveMessage
} from "./lessonModalSaveState.js";
import { createLessonModalStudentSelectionModel } from "./lessonModalStudentModel.js";
import { LessonModalActions } from "./LessonModalActions.jsx";
import { LessonModalBasics } from "./LessonModalBasics.jsx";
import { LessonModalClosurePanel } from "./LessonModalClosurePanel.jsx";
import {
  LessonModalClosureMakeupNotificationModal,
  LessonModalClosureMakeupPanel
} from "./LessonModalClosureMakeupPanel.jsx";
import { LessonModalNewStudentMakeupPanel } from "./LessonModalNewStudentMakeupPanel.jsx";
import { LessonModalStudentPicker } from "./LessonModalStudentPicker.jsx";
import "./lessonModal.css";
import "./lessonModalActions.css";

export function LessonModal({
  initialLesson = null,
  notificationJobs = [],
  records = [],
  runtime,
  students,
  templates,
  onClose,
  onDeleteLesson = null,
  onSubmit
}) {
  const {
    addDaysInKorea,
    createLessonId,
    getActiveStudentIdsFromSelection,
    getLessonStudentIds,
    getRegularLessonColor,
    getStandardLessonColor,
    getTemplateLessonTimes,
    isActiveStudent,
    lessonCalendarColors,
    normalizeClassTemplates,
    normalizeTimeInput,
    today
  } = runtime;
  const [studentSearch, setStudentSearch] = useState("");
  const {
    activeStudents,
    filteredStudents,
    groupedStudents
  } = createLessonModalStudentSelectionModel({
    isActiveStudent,
    search: studentSearch,
    students
  });
  const normalizedTemplates = normalizeClassTemplates(templates);
  const fallbackTemplate = normalizedTemplates[0] ?? { name: "", startTime: "16:00", endTime: "17:00", color: lessonCalendarColors.regular };
  const [classTemplateId, setClassTemplateId] = useState(initialLesson ? initialLesson.classTemplateId || "" : normalizedTemplates[0]?.classTemplateId || "");
  const activeTemplate = normalizedTemplates.find((template) => template.classTemplateId === classTemplateId) ?? fallbackTemplate;
  const initialDraft = createLessonModalInitialDraft({
    activeStudents,
    activeTemplate,
    addDaysInKorea,
    getActiveStudentIdsFromSelection,
    getStandardLessonColor,
    getTemplateLessonTimes,
    initialLesson,
    normalizeTimeInput,
    today
  });
  const [lessonType, setLessonType] = useState(initialDraft.lessonType);
  const [draftLessonId] = useState(() =>
    createLessonModalDraftLessonId({
      activeTemplate,
      createLessonId,
      initialDraft,
      initialLesson
    })
  );
  const [draftClosureMakeupLessonId] = useState(() =>
    createLessonModalClosureMakeupLessonId({
      activeTemplate,
      createLessonId,
      initialDraft,
      initialLesson
    })
  );
  const [name, setName] = useState(initialDraft.name);
  const [date, setDate] = useState(initialDraft.date);
  const [startTime, setStartTime] = useState(initialDraft.startTime);
  const [endTime, setEndTime] = useState(initialDraft.endTime);
  const [closureMakeupEnabled, setClosureMakeupEnabled] = useState(false);
  const [closureMakeupDate, setClosureMakeupDate] = useState(initialDraft.closureMakeupDate);
  const [closureMakeupDateTouched, setClosureMakeupDateTouched] = useState(false);
  const [closureMakeupStartTime, setClosureMakeupStartTime] = useState(initialDraft.closureMakeupStartTime);
  const [closureMakeupEndTime, setClosureMakeupEndTime] = useState(initialDraft.closureMakeupEndTime);
  const [color, setColor] = useState(initialDraft.color);
  const [studentIds, setStudentIds] = useState(initialDraft.studentIds);
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [notificationAudiences, setNotificationAudiences] = useState(["parent"]);
  const [includeStudentReminder, setIncludeStudentReminder] = useState(true);
  const [isClosureMakeupNotificationModalOpen, setIsClosureMakeupNotificationModalOpen] = useState(false);
  const [isGeneratedLessonCancelConfirmOpen, setIsGeneratedLessonCancelConfirmOpen] = useState(false);
  const [closureMakeupNotificationDrafts, setClosureMakeupNotificationDrafts] = useState({});
  const [saveState, setSaveState] = useState("idle");
  const [saveMessage, setSaveMessage] = useState(lessonModalInitialSaveMessage);
  const isSaving = saveState === "saving";
  const isSaved = saveState === "saved";
  const isFormLocked = isSaving || isSaved;
  const isPersistedClosure = initialLesson?.lessonType === "closure";
  const isClosureConversion = isLessonClosureConversion(initialLesson, lessonType);
  const isStudentRosterLocked = isFormLocked || isClosureConversion;
  const closureRecordCount = initialLesson?.lessonId
    ? records.filter((record) => record.lessonId === initialLesson.lessonId).length
    : 0;
  const closureBlockingNotificationJobs = initialLesson?.lessonId
    ? getLessonClosureBlockingNotificationJobs(notificationJobs, initialLesson.lessonId)
    : [];
  const lessonColorOptions = createLessonModalColorOptions({
    getRegularLessonColor,
    lessonCalendarColors,
    templates: normalizedTemplates
  });
  useEffect(() => {
    setSaveState(getLessonModalSaveStateAfterDraftChange);
    setSaveMessage((current) =>
      getLessonModalSaveMessageAfterDraftChange({
        currentMessage: current,
        saveState
      })
    );
  }, [
    classTemplateId,
    closureMakeupDate,
    closureMakeupEnabled,
    closureMakeupEndTime,
    closureMakeupStartTime,
    color,
    date,
    endTime,
    lessonType,
    name,
    startTime,
    studentIds,
    notificationEnabled,
    notificationAudiences,
    includeStudentReminder
  ]);

  function handleTemplateChange(nextTemplateId, nextLessonType = lessonType) {
    const patch = createLessonModalTemplateChangePatch({
      activeStudents,
      date,
      getStandardLessonColor,
      getTemplateLessonTimes,
      nextLessonType,
      nextTemplateId,
      templates: normalizedTemplates
    });
    setClassTemplateId(patch.classTemplateId);
    if (!patch.hasTemplate) return;
    setName(patch.name);
    setStartTime(patch.startTime);
    setEndTime(patch.endTime);
    setColor(patch.color);
    setStudentIds(patch.studentIds);
  }

  function handleLessonTypeChange(nextLessonType) {
    const patch = createLessonModalTypeChangePatch({
      classTemplateId,
      getStandardLessonColor,
      name,
      nextLessonType
    });
    setLessonType(patch.lessonType);
    setColor(patch.color);
    if (patch.classTemplateId !== undefined) setClassTemplateId(patch.classTemplateId);
    if (patch.name !== undefined) setName(patch.name);
    if (patch.studentIds !== undefined) setStudentIds(patch.studentIds);
  }

  function isLessonTypeChoiceDisabled(nextLessonType) {
    return getIsLessonTypeChoiceDisabled({
      initialLesson,
      isFormLocked,
      nextLessonType
    });
  }

  function handleColorOptionClick(item) {
    if (item.lessonType === "class" && item.classTemplateId) {
      setLessonType("class");
      handleTemplateChange(item.classTemplateId, "class");
      return;
    }
    handleLessonTypeChange(item.lessonType);
  }

  function handleDateChange(nextDate) {
    const patch = createLessonModalDateChangePatch({
      activeTemplate,
      addDaysInKorea,
      closureMakeupDateTouched,
      getTemplateLessonTimes,
      nextDate
    });
    setDate(patch.date);
    setStartTime(patch.startTime);
    setEndTime(patch.endTime);
    if (patch.closureMakeupDate !== undefined) {
      setClosureMakeupDate(patch.closureMakeupDate);
    }
  }

  // 2026-09-26 · 사용자가 시작 시간을 직접 바꿀 때만 종료를 +3시간으로 다시 맞춘다.
  // 모달을 열 때·반을 불러올 때·날짜를 바꿀 때는 각각의 기존 경로가 종료를 정한다.
  function handleStartTimeChange(nextStartTime) {
    const patch = createLessonModalStartTimeChangePatch({ nextStartTime });
    setStartTime(patch.startTime);
    if (patch.endTime !== undefined) setEndTime(patch.endTime);
  }

  function handleClosureMakeupDateChange(nextDate) {
    setClosureMakeupDate(nextDate);
    setClosureMakeupDateTouched(true);
  }

  function selectVisibleLessonModalStudents() {
    setStudentIds(filteredStudents.map((student) => student.studentId));
  }

  // 2026-09-26 · 학년 그룹별 선택/해제 대신 재원생 전체를 한 번에 켜고 끔다.
  function selectAllLessonModalStudents() {
    setStudentIds(activeStudents.map((student) => student.studentId));
  }

  function clearAllLessonModalStudents() {
    setStudentIds([]);
  }

  function toggleLessonModalStudent(studentId, isSelected) {
    setStudentIds((current) =>
      isSelected
        ? current.filter((currentStudentId) => currentStudentId !== studentId)
        : [...current, studentId]
    );
  }

  function applyLessonModalSaveState(nextSaveState) {
    setSaveState(nextSaveState.state);
    setSaveMessage(nextSaveState.message);
  }

  async function submitLesson(options = null) {
    if (isSaving || isSaved) return;
    const isClosureNotificationSubmit = options?.source === "closureMakeupNotificationModal";
    const effectiveNotificationEnabled = isClosureNotificationSubmit ? true : notificationEnabled;
    const validationError = getLessonModalValidationError({
      closureMakeupDate,
      closureMakeupEnabled,
      closureMakeupEndTime,
      closureMakeupStartTime,
      date,
      endTime,
      lessonType,
      name,
      notificationAudiences,
      notificationEnabled: effectiveNotificationEnabled,
      includeStudentReminder,
      normalizeTimeInput,
      startTime,
      studentIds
    });
    if (validationError) {
      applyLessonModalSaveState(
        createLessonModalValidationFailureSaveState(validationError)
      );
      return;
    }
    applyLessonModalSaveState(
      createLessonModalSavingSaveState({
        closureMakeupEnabled,
        lessonType
      })
    );
    try {
      const result = await onSubmit(createLessonModalSubmitPayload({
        classTemplateId,
        closureMakeupDate,
        closureMakeupEnabled,
        closureMakeupEndTime,
        closureMakeupLessonId: draftClosureMakeupLessonId,
        closureMakeupNotificationDrafts,
        closureMakeupStartTime,
        color,
        date,
        endTime,
        isPersistedClosure,
        includeStudentReminder,
        lessonType,
        lessonId: draftLessonId,
        name,
        notificationAudiences,
        notificationEnabled: effectiveNotificationEnabled,
        startTime,
        studentIds
      }), (nextState, nextMessage) => {
        setSaveState(nextState);
        setSaveMessage(nextMessage);
      });
      applyLessonModalSaveState(createLessonModalSavedSaveState(result));
      return result;
    } catch (error) {
      console.error(error);
      applyLessonModalSaveState(createLessonModalFailedSaveState(error));
      return null;
    }
  }

  async function confirmClosureMakeupNotification() {
    const result = await submitLesson({ source: "closureMakeupNotificationModal" });
    if (result) setIsClosureMakeupNotificationModalOpen(false);
  }

  function openClosureMakeupNotificationModal() {
    setClosureMakeupNotificationDrafts(createClosureMakeupNotificationDrafts({
      lesson: { date, endTime, startTime }
    }));
    setIsClosureMakeupNotificationModalOpen(true);
  }

  function updateClosureMakeupNotificationDraft(field, value) {
    setClosureMakeupNotificationDrafts((current) => ({ ...current, [field]: value }));
  }

  // 2026-09-19 · U11(lessons-10): 자동 생성 수업 취소는 브라우저 confirm 대신 ConfirmDialog 로 묻는다(문구 동일).
  // 일반 수업은 App 의 '수업 취소 확인' 모달이 맡으므로 여기서는 바로 onDeleteLesson 을 부른다(기존과 같음).
  function requestDeleteLesson() {
    if (!initialLesson?.lessonId || !onDeleteLesson) return;
    const isGeneratedLesson = initialLesson.isVirtualGeneratedLesson || initialLesson.isExamPrepAutoLesson;
    if (isGeneratedLesson) {
      setIsGeneratedLessonCancelConfirmOpen(true);
      return;
    }
    onDeleteLesson(initialLesson.lessonId);
  }

  function confirmGeneratedLessonCancel() {
    setIsGeneratedLessonCancelConfirmOpen(false);
    if (!initialLesson?.lessonId || !onDeleteLesson) return;
    onDeleteLesson(initialLesson.lessonId);
  }

  // 2026-09-19 · U13(modals-12): 저장 중 닫기 차단은 빈 함수 onClose 대신 공용 closeDisabled(× 비활성·Esc 무시·aria-busy)로 통일.
  // isSaving 계산·onClose 계약은 그대로.
  // 2026-09-26 · 가로 2열 모달: 왼쪽은 수업 정보, 오른쪽은 포함 학생(자체 스크롤).
  // 상태바·액션은 Modal 의 footer 슬롯으로 내려 본문 스크롤과 무관하게 항상 보이게 한다.
  return (
    <Modal
      className="lessonModal"
      closeDisabled={isSaving}
      footer={(
        <LessonModalActions
          closureMakeupEnabled={closureMakeupEnabled}
          isEditing={Boolean(initialLesson)}
          isSaved={isSaved}
          isSaving={isSaving}
          lessonType={lessonType}
          notificationEnabled={notificationEnabled}
          onClose={onClose}
          onDelete={initialLesson && onDeleteLesson ? requestDeleteLesson : null}
          onSave={submitLesson}
          saveMessage={saveMessage}
          saveState={saveState}
          selectedStudentCount={studentIds.length}
        />
      )}
      scrollable
      title={initialLesson ? "수업 수정" : "수업 등록"}
      onClose={onClose}
    >
      <div className="lessonModalLayout">
        <div className="lessonModalFormColumn">
          <LessonModalBasics
            color={color}
            date={date}
            endTime={endTime}
            isFormLocked={isFormLocked}
            isLessonTypeChoiceDisabled={isLessonTypeChoiceDisabled}
            lessonColorOptions={lessonColorOptions}
            lessonType={lessonType}
            name={name}
            onColorOptionClick={handleColorOptionClick}
            onDateChange={handleDateChange}
            onEndTimeChange={setEndTime}
            onLessonTypeChange={handleLessonTypeChange}
            onNameChange={setName}
            onStartTimeChange={handleStartTimeChange}
            startTime={startTime}
          >
            {lessonType === "closure" ? (
              <LessonModalClosurePanel
                blockingNotificationJobCount={closureBlockingNotificationJobs.length}
                closureMakeupDate={closureMakeupDate}
                closureMakeupEnabled={closureMakeupEnabled}
                closureMakeupEndTime={closureMakeupEndTime}
                closureMakeupStartTime={closureMakeupStartTime}
                closureRecordCount={closureRecordCount}
                initialStudentCount={getLessonStudentIds(initialLesson).length}
                isClosureConversion={isClosureConversion}
                isFormLocked={isFormLocked}
                isPersistedClosure={isPersistedClosure}
                onClosureMakeupDateChange={handleClosureMakeupDateChange}
                onClosureMakeupEnabledChange={setClosureMakeupEnabled}
                onClosureMakeupEndTimeChange={setClosureMakeupEndTime}
                onClosureMakeupStartTimeChange={setClosureMakeupStartTime}
              />
            ) : null}
            {lessonType === "newStudentMakeup" ? (
              <LessonModalNewStudentMakeupPanel
                isFormLocked={isFormLocked}
                notificationAudiences={notificationAudiences}
                notificationEnabled={notificationEnabled}
                onNotificationAudienceChange={setNotificationAudiences}
                onNotificationEnabledChange={setNotificationEnabled}
                selectedStudentCount={studentIds.length}
              />
            ) : null}
            {lessonType === "closureMakeup" ? (
              <LessonModalClosureMakeupPanel
                isFormLocked={isFormLocked}
                onOpenNotificationModal={openClosureMakeupNotificationModal}
                selectedStudentCount={studentIds.length}
              />
            ) : null}
          </LessonModalBasics>
        </div>

        <div className="lessonModalRosterColumn">
          <LessonModalStudentPicker
            activeStudentCount={activeStudents.length}
            classTemplateId={classTemplateId}
            filteredStudents={filteredStudents}
            groupedStudents={groupedStudents}
            initialStudentCount={getLessonStudentIds(initialLesson).length}
            isClosureConversion={isClosureConversion}
            isRosterLocked={isStudentRosterLocked}
            onClassTemplateChange={handleTemplateChange}
            onClearAll={clearAllLessonModalStudents}
            onSearchChange={setStudentSearch}
            onSelectAll={selectAllLessonModalStudents}
            onSelectVisible={selectVisibleLessonModalStudents}
            onToggleStudent={toggleLessonModalStudent}
            search={studentSearch}
            selectedStudentIds={studentIds}
            templates={normalizedTemplates}
          />
        </div>
      </div>
      {isClosureMakeupNotificationModalOpen ? (
        <LessonModalClosureMakeupNotificationModal
          includeStudentReminder={includeStudentReminder}
          isSaving={isSaving}
          notificationDrafts={closureMakeupNotificationDrafts}
          notificationAudiences={notificationAudiences}
          onClose={() => setIsClosureMakeupNotificationModalOpen(false)}
          onConfirm={confirmClosureMakeupNotification}
          onIncludeStudentReminderChange={setIncludeStudentReminder}
          onNotificationDraftChange={updateClosureMakeupNotificationDraft}
          onNotificationAudienceChange={setNotificationAudiences}
          selectedStudentCount={studentIds.length}
        />
      ) : null}
      <ConfirmDialog
        confirmLabel="수업 취소"
        description="이 자동 생성 수업을 취소할까요? 달력에서 바로 사라집니다."
        onCancel={() => setIsGeneratedLessonCancelConfirmOpen(false)}
        onConfirm={confirmGeneratedLessonCancel}
        open={isGeneratedLessonCancelConfirmOpen}
        title="자동 생성 수업 취소"
        tone="danger"
      />
    </Modal>
  );
}
