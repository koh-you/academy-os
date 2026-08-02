import { useRef, useState } from "react";
import { normalizeAssignmentStatusValue } from "./assignmentStatus.js";
import { createLessonJournalAssignmentStatusPlan } from "./lessonJournalAssignmentStatusPlan.js";
import {
  getLessonJournalEditableRecord,
  removeLessonJournalMakeupTaskDraft
} from "./lessonJournalDraftMap.js";
import { createLessonJournalDraftSaveRequest } from "./lessonJournalDraftSaveRequest.js";
import {
  createLessonJournalHomeworkDraft,
  createLessonJournalHomeworkDraftKey,
  getLessonJournalHomeworkDraftTitle
} from "./lessonJournalHomeworkDraft.js";
import { createLessonJournalHomeworkFollowupPlan } from "./lessonJournalHomeworkFollowupPlan.js";
import {
  createLessonJournalRecordDraft,
  createLessonJournalRecordFieldPatch
} from "./lessonJournalRecordDraft.js";
import { createLessonJournalSaveViewModel } from "./lessonJournalSaveViewModel.js";
import { useLessonJournalDraftLifecycle } from "./useLessonJournalDraftLifecycle.js";

export function createLessonJournalDraftSaveStateTransition(saved) {
  if (!saved?.ok) {
    return {
      message: saved?.message || "수업일지 · 저장 실패 · 수정본 유지",
      shouldClearDrafts: false
    };
  }
  return {
    message: saved.message || "수업일지 · 저장 완료",
    shouldClearDrafts: true
  };
}

export function resolveLessonJournalDraftSave({
  currentLessonId,
  currentRevision,
  saved,
  saveLessonId,
  saveRevision
} = {}) {
  const transition = createLessonJournalDraftSaveStateTransition(saved);
  if (currentLessonId !== saveLessonId) {
    return {
      ...transition,
      shouldApply: false,
      shouldClearDrafts: false
    };
  }
  if (transition.shouldClearDrafts && currentRevision !== saveRevision) {
    return {
      message: "수업일지 · 저장 완료 · 이후 변경 저장 필요",
      shouldApply: true,
      shouldClearDrafts: false
    };
  }
  return {
    ...transition,
    shouldApply: true
  };
}

export function useLessonJournalDraftController({
  createEmptyRecord,
  createLessonStudentRecordId,
  getHomeworkFollowupOptionsForAssignmentStatus,
  getHomeworkFollowupPatch,
  lesson,
  lessonStudents,
  onSaveLessonJournalDrafts,
  recordSaveStates
}) {
  const activeLessonIdRef = useRef(lesson.lessonId);
  const draftRevisionRef = useRef(0);
  const saveInFlightRef = useRef(null);
  const [journalDraftSaveInFlight, setJournalDraftSaveInFlight] = useState(false);
  if (activeLessonIdRef.current !== lesson.lessonId) {
    activeLessonIdRef.current = lesson.lessonId;
    draftRevisionRef.current += 1;
  }
  const {
    journalEditMode,
    journalHomeworkDrafts,
    journalMakeupTaskDrafts,
    journalManualSaveMessage,
    journalRecordDrafts,
    setJournalEditMode,
    setJournalHomeworkDrafts,
    setJournalMakeupTaskDrafts,
    setJournalManualSaveMessage,
    setJournalRecordDrafts
  } = useLessonJournalDraftLifecycle(lesson.lessonId);
  const {
    draftChangeCount: journalDraftChangeCount,
    hasDraftChanges: hasJournalDraftChanges,
    stickySaveMessage: journalStickySaveMessage,
    stickySaveState: journalStickySaveState
  } = createLessonJournalSaveViewModel({
    homeworkDrafts: journalHomeworkDrafts,
    makeupTaskDrafts: journalMakeupTaskDrafts,
    manualSaveMessage: journalManualSaveMessage,
    recordDrafts: journalRecordDrafts,
    recordSaveStates,
    isSaving: journalDraftSaveInFlight
  });
  const journalDraftSaveRequest = createLessonJournalDraftSaveRequest({
    hasDraftChanges: hasJournalDraftChanges,
    homeworkDrafts: journalHomeworkDrafts,
    makeupTaskDrafts: journalMakeupTaskDrafts,
    recordDrafts: journalRecordDrafts
  });

  function startJournalEditMode() {
    setJournalEditMode(true);
    setJournalManualSaveMessage("수업일지 · 편집 중");
    const firstStudent = lessonStudents[0];
    return firstStudent
      ? createLessonStudentRecordId(lesson.lessonId, firstStudent.studentId)
      : "";
  }

  function getEditableRecord(recordId, baseRecord) {
    return getLessonJournalEditableRecord({
      baseRecord,
      currentDrafts: journalRecordDrafts,
      recordId
    });
  }

  function updateJournalRecordDraft(student, baseRecord, field, value) {
    updateJournalRecordDraftPatch(
      student,
      baseRecord,
      createLessonJournalRecordFieldPatch({
        field,
        value
      })
    );
  }

  function handleAssignmentStatusChange(student, baseRecord, previousHomework, value) {
    const plan = createLessonJournalAssignmentStatusPlan({
      baseRecord,
      getFollowupOptions: getHomeworkFollowupOptionsForAssignmentStatus,
      getFollowupPatch: getHomeworkFollowupPatch,
      normalizeAssignmentStatus: normalizeAssignmentStatusValue,
      previousHomework,
      value
    });
    if (plan.removeMakeupTask) {
      removeJournalMakeupTaskDraft(student);
    }
    if (plan.recordUpdate.kind === "patch") {
      updateJournalRecordDraftPatch(student, baseRecord, plan.recordUpdate.patch);
    } else {
      updateJournalRecordDraft(
        student,
        baseRecord,
        plan.recordUpdate.field,
        plan.recordUpdate.value
      );
    }
    if (plan.message) {
      setJournalManualSaveMessage(plan.message);
    }
  }

  function updateJournalRecordDraftPatch(student, baseRecord, patch = {}) {
    if (!journalEditMode) return;
    draftRevisionRef.current += 1;
    const nowIso = new Date().toISOString();
    const { record, recordId } = createLessonJournalRecordDraft({
      baseRecord,
      createEmptyRecord,
      createRecordId: createLessonStudentRecordId,
      currentDrafts: journalRecordDrafts,
      lesson,
      patch,
      student,
      updatedAt: nowIso
    });
    setJournalRecordDrafts((current) => ({ ...current, [recordId]: record }));
    setJournalManualSaveMessage("수업일지 · 저장 필요");
  }

  function removeJournalMakeupTaskDraft(student) {
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    draftRevisionRef.current += 1;
    setJournalMakeupTaskDrafts((current) => (
      removeLessonJournalMakeupTaskDraft({
        currentDrafts: current,
        recordId
      })
    ));
  }

  function applyHomeworkFollowupMethod(student, baseRecord, previousHomework, method) {
    if (!journalEditMode || !previousHomework) return;
    const plan = createLessonJournalHomeworkFollowupPlan({
      baseRecord,
      getFollowupPatch: getHomeworkFollowupPatch,
      lesson,
      method,
      normalizeAssignmentStatus: normalizeAssignmentStatusValue,
      previousHomework,
      student
    });

    if (plan.makeupTask) {
      const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
      setJournalMakeupTaskDrafts((current) => ({
        ...current,
        [recordId]: plan.makeupTask
      }));
    } else if (plan.removeMakeupTask) {
      removeJournalMakeupTaskDraft(student);
    }

    updateJournalRecordDraftPatch(student, baseRecord, plan.recordPatch);
    setJournalManualSaveMessage(plan.message);
  }

  function getHomeworkDraftKey(student, homeworkType) {
    return createLessonJournalHomeworkDraftKey({
      createRecordId: createLessonStudentRecordId,
      homeworkType,
      lessonId: lesson.lessonId,
      studentId: student.studentId
    });
  }

  function getHomeworkDraftTitle(student, homeworkType, homework) {
    return getLessonJournalHomeworkDraftTitle({
      draft: journalHomeworkDrafts[getHomeworkDraftKey(student, homeworkType)],
      homework
    });
  }

  function updateJournalHomeworkDraft(student, homeworkType, title) {
    if (!journalEditMode) return;
    const key = getHomeworkDraftKey(student, homeworkType);
    draftRevisionRef.current += 1;
    setJournalHomeworkDrafts((current) => ({
      ...current,
      [key]: createLessonJournalHomeworkDraft({
        homeworkType,
        key,
        studentId: student.studentId,
        title
      })
    }));
    setJournalManualSaveMessage("수업일지 · 저장 필요");
  }

  async function saveJournalDrafts() {
    if (saveInFlightRef.current) return saveInFlightRef.current;
    if (!journalDraftSaveRequest.hasDraftChanges) {
      setJournalEditMode(false);
      setJournalManualSaveMessage("수업일지 · 변경 없음");
      return undefined;
    }
    const saveLessonId = lesson.lessonId;
    const saveRevision = draftRevisionRef.current;
    setJournalManualSaveMessage("수업일지 · 저장 중");
    setJournalDraftSaveInFlight(true);
    const savePromise = (async () => {
      const saved = await onSaveLessonJournalDrafts?.(
        lesson,
        journalDraftSaveRequest.recordDrafts,
        journalDraftSaveRequest.homeworkDrafts,
        journalDraftSaveRequest.makeupTaskDrafts
      );
      const resolution = resolveLessonJournalDraftSave({
        currentLessonId: activeLessonIdRef.current,
        currentRevision: draftRevisionRef.current,
        saved,
        saveLessonId,
        saveRevision
      });
      if (!resolution.shouldApply) return saved;
      if (!resolution.shouldClearDrafts) {
        setJournalManualSaveMessage(resolution.message);
        return saved;
      }
      setJournalRecordDrafts({});
      setJournalHomeworkDrafts({});
      setJournalMakeupTaskDrafts({});
      setJournalEditMode(false);
      setJournalManualSaveMessage(resolution.message);
      return saved;
    })();
    saveInFlightRef.current = savePromise;
    try {
      return await savePromise;
    } finally {
      if (saveInFlightRef.current === savePromise) {
        saveInFlightRef.current = null;
        setJournalDraftSaveInFlight(false);
      }
    }
  }

  return {
    applyHomeworkFollowupMethod,
    getEditableRecord,
    getHomeworkDraftTitle,
    handleAssignmentStatusChange,
    hasJournalDraftChanges,
    journalDraftChangeCount,
    journalEditMode,
    journalManualSaveMessage,
    journalStickySaveMessage,
    journalStickySaveState,
    saveJournalDrafts,
    setJournalManualSaveMessage,
    startJournalEditMode,
    updateJournalHomeworkDraft,
    updateJournalRecordDraft
  };
}
