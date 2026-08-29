import { useEffect, useState } from "react";
import { Modal } from "../../shared/components/Modal.jsx";
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

export function LessonModal({
  initialLesson = null,
  notificationJobs = [],
  records = [],
  runtime,
  students,
  templates,
  onClose,
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

  function handleClosureMakeupDateChange(nextDate) {
    setClosureMakeupDate(nextDate);
    setClosureMakeupDateTouched(true);
  }

  function selectVisibleLessonModalStudents() {
    setStudentIds(filteredStudents.map((student) => student.studentId));
  }

  function selectLessonModalStudentGroup(groupStudents) {
    const groupIds = groupStudents.map((student) => student.studentId);
    setStudentIds((current) => Array.from(new Set([...current, ...groupIds])));
  }

  function deselectLessonModalStudentGroup(groupStudents) {
    const groupIds = new Set(groupStudents.map((student) => student.studentId));
    setStudentIds((current) =>
      current.filter((studentId) => !groupIds.has(studentId))
    );
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

  return (
    <Modal className="lessonModal" title={initialLesson ? "수업 수정" : "수업 등록"} onClose={isSaving ? () => {} : onClose}>
      <LessonModalBasics
        classTemplateId={classTemplateId}
        color={color}
        date={date}
        endTime={endTime}
        isFormLocked={isFormLocked}
        isLessonTypeChoiceDisabled={isLessonTypeChoiceDisabled}
        lessonColorOptions={lessonColorOptions}
        lessonType={lessonType}
        name={name}
        onClassTemplateChange={handleTemplateChange}
        onColorOptionClick={handleColorOptionClick}
        onDateChange={handleDateChange}
        onEndTimeChange={setEndTime}
        onLessonTypeChange={handleLessonTypeChange}
        onNameChange={setName}
        onStartTimeChange={setStartTime}
        startTime={startTime}
        templates={normalizedTemplates}
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
            onOpenNotificationModal={() => setIsClosureMakeupNotificationModalOpen(true)}
            selectedStudentCount={studentIds.length}
          />
        ) : null}
      </LessonModalBasics>

      <LessonModalStudentPicker
        activeStudentCount={activeStudents.length}
        filteredStudents={filteredStudents}
        groupedStudents={groupedStudents}
        initialStudentCount={getLessonStudentIds(initialLesson).length}
        isClosureConversion={isClosureConversion}
        isRosterLocked={isStudentRosterLocked}
        onDeselectGroup={deselectLessonModalStudentGroup}
        onSearchChange={setStudentSearch}
        onSelectGroup={selectLessonModalStudentGroup}
        onSelectVisible={selectVisibleLessonModalStudents}
        onToggleStudent={toggleLessonModalStudent}
        search={studentSearch}
        selectedStudentIds={studentIds}
      />

      <LessonModalActions
        closureMakeupEnabled={closureMakeupEnabled}
        isEditing={Boolean(initialLesson)}
        isSaved={isSaved}
        isSaving={isSaving}
        lessonType={lessonType}
        notificationEnabled={notificationEnabled}
        onClose={onClose}
        onSave={submitLesson}
        saveMessage={saveMessage}
        saveState={saveState}
      />
      {isClosureMakeupNotificationModalOpen ? (
        <LessonModalClosureMakeupNotificationModal
          includeStudentReminder={includeStudentReminder}
          isSaving={isSaving}
          notificationAudiences={notificationAudiences}
          onClose={() => setIsClosureMakeupNotificationModalOpen(false)}
          onConfirm={confirmClosureMakeupNotification}
          onIncludeStudentReminderChange={setIncludeStudentReminder}
          onNotificationAudienceChange={setNotificationAudiences}
          selectedStudentCount={studentIds.length}
        />
      ) : null}
    </Modal>
  );
}
