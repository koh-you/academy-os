import { useEffect, useMemo, useRef, useState } from "react";
import {
  applyMonthlySettlementJournalMode,
  buildMonthlySettlementSummary,
  buildStudentSettlementRow,
  getDefaultMonthlySettlementMonthKey,
  getFixedAmountAfterScheduleChange,
  getMonthRange,
  getMonthlySettlementStudents,
  normalizeMonthlySettlementStudentSetting
} from "./monthlySettlement.js";
import {
  buildMonthlySettlementReportModel,
  openMonthlySettlementReportPdf
} from "./monthlySettlementReport.js";

const localDraftPrefix = "academy-os.monthlyInstructorSettlementDraft.v1";

function getLocalDraftKey(monthKey) {
  return `${localDraftPrefix}.${monthKey}`;
}

function readLocalDraft(monthKey, savedUpdatedAt = "") {
  if (typeof window === "undefined") return null;
  try {
    const stored = JSON.parse(window.localStorage.getItem(getLocalDraftKey(monthKey)) || "null");
    if (!stored || stored.baseUpdatedAt !== savedUpdatedAt || stored.month?.monthKey !== monthKey) return null;
    return stored.month;
  } catch {
    return null;
  }
}

function writeLocalDraft(month, baseUpdatedAt = "") {
  if (typeof window === "undefined" || !month?.monthKey) return;
  try {
    window.localStorage.setItem(getLocalDraftKey(month.monthKey), JSON.stringify({
      baseUpdatedAt,
      month
    }));
  } catch {
    // localStorage is a recovery aid; explicit Supabase save remains authoritative.
  }
}

function clearLocalDraft(monthKey) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(getLocalDraftKey(monthKey));
  } catch {
    // Ignore unavailable localStorage.
  }
}

function createMonthDraft({
  classTemplates,
  lessons,
  monthKey,
  savedMonth,
  students
}) {
  const sourceSettings = savedMonth?.studentSettings && typeof savedMonth.studentSettings === "object"
    ? savedMonth.studentSettings
    : {};
  const visibleStudents = getMonthlySettlementStudents({
    lessons,
    monthKey,
    students
  });
  return {
    monthKey,
    studentSettings: {
      ...sourceSettings,
      ...Object.fromEntries(visibleStudents.map((student) => [
        student.studentId,
        applyMonthlySettlementJournalMode(sourceSettings[student.studentId], {
          classTemplates,
          lessons,
          monthKey,
          student
        })
      ]))
    },
    updatedAt: savedMonth?.updatedAt || ""
  };
}

export function resolveMonthlySettlementSave({
  currentMonthKey,
  currentRevision,
  error,
  persistedMonth,
  saveMonthKey,
  saveRevision
} = {}) {
  const shouldApply = currentMonthKey === saveMonthKey;
  if (persistedMonth && currentRevision !== saveRevision) {
    return {
      message: shouldApply ? "Supabase 저장 완료 · 이후 변경 저장 필요" : "",
      shouldApply,
      shouldClearLocalDraft: false,
      shouldRebaseRecovery: true,
      shouldReplaceDraft: false,
      shouldWriteRecovery: false
    };
  }
  if (persistedMonth) {
    return {
      message: shouldApply ? "Supabase 재조회 값이 현재 월별 정산과 일치합니다." : "",
      shouldApply,
      shouldClearLocalDraft: true,
      shouldRebaseRecovery: false,
      shouldReplaceDraft: shouldApply,
      shouldWriteRecovery: false
    };
  }
  return {
    message: shouldApply
      ? error?.message || "저장에 실패했습니다. 작업 내용은 이 기기의 임시 초안에 남아 있습니다."
      : "",
    shouldApply,
    shouldClearLocalDraft: false,
    shouldRebaseRecovery: false,
    shouldReplaceDraft: false,
    shouldWriteRecovery: currentRevision === saveRevision
  };
}

export function useMonthlySettlementController({
  classTemplates = [],
  lessons = [],
  onSaveMonth,
  records = [],
  saveState = "idle",
  settlementState,
  students = []
}) {
  const [selectedMonth, setSelectedMonthState] = useState(getDefaultMonthlySettlementMonthKey);
  const [draftMonth, setDraftMonth] = useState(null);
  const [isDirty, setIsDirty] = useState(false);
  const [selectedCalendarStudentId, setSelectedCalendarStudentId] = useState("");
  const [saveMessage, setSaveMessage] = useState("");
  const activeMonthRef = useRef(selectedMonth);
  const draftByMonthRef = useRef(new Map());
  const draftRevisionByMonthRef = useRef(new Map());
  const saveInFlightRef = useRef(null);
  const preservedSourceRef = useRef(null);
  const savedMonth = settlementState?.months?.[selectedMonth] ?? null;
  const savedUpdatedAt = savedMonth?.updatedAt || "";

  useEffect(() => {
    const preservedSource = preservedSourceRef.current;
    if (
      preservedSource?.monthKey === selectedMonth &&
      preservedSource.savedUpdatedAt === savedUpdatedAt
    ) {
      return;
    }
    const activeSave = saveInFlightRef.current;
    if (
      activeSave?.monthKey === selectedMonth &&
      savedUpdatedAt &&
      savedUpdatedAt !== activeSave.baseUpdatedAt
    ) {
      return;
    }
    preservedSourceRef.current = null;
    const baseDraft = createMonthDraft({
      classTemplates,
      lessons,
      monthKey: selectedMonth,
      savedMonth,
      students
    });
    const recoveredDraft = readLocalDraft(selectedMonth, savedUpdatedAt);
    const resolvedDraft = recoveredDraft
      ? createMonthDraft({
          classTemplates,
          lessons,
          monthKey: selectedMonth,
          savedMonth: recoveredDraft,
          students
        })
      : baseDraft;
    const hasNewStudents = Object.keys(baseDraft.studentSettings).some(
      (studentId) => !savedMonth?.studentSettings?.[studentId]
    );
    const hasJournalAutoModeChanges = Object.entries(resolvedDraft.studentSettings).some(
      ([studentId, setting]) =>
        setting.modeSource === "lesson_journal" &&
        (
          savedMonth?.studentSettings?.[studentId]?.mode !== setting.mode ||
          savedMonth?.studentSettings?.[studentId]?.modeSource !== "lesson_journal"
        )
    );
    activeMonthRef.current = selectedMonth;
    draftByMonthRef.current.set(selectedMonth, resolvedDraft);
    draftRevisionByMonthRef.current.set(
      selectedMonth,
      (draftRevisionByMonthRef.current.get(selectedMonth) ?? 0) + 1
    );
    setDraftMonth(resolvedDraft);
    setIsDirty(Boolean(recoveredDraft || !savedMonth || hasNewStudents || hasJournalAutoModeChanges));
    setSaveMessage(
      recoveredDraft
        ? hasJournalAutoModeChanges
          ? "저장하지 않은 월별 정산 작업을 복구하고, 수업일지·퇴원일 기준 정산 방식을 자동 반영했습니다."
          : "저장하지 않은 월별 정산 작업을 복구했습니다."
        : hasJournalAutoModeChanges
          ? "수업일지 최초 수업과 학생 퇴원일을 기준으로 신입·퇴원 정산 방식을 자동 반영했습니다. 확인 후 저장해 주세요."
        : !savedMonth
          ? "이 달의 기본 정산 스냅샷을 확인한 뒤 저장해 주세요."
          : hasNewStudents ? "이 달의 기존 스냅샷에 새 학생이 추가되었습니다. 확인 후 저장해 주세요." : ""
    );
  }, [classTemplates, lessons, savedMonth, savedUpdatedAt, selectedMonth, students]);

  useEffect(() => {
    setSelectedCalendarStudentId("");
  }, [selectedMonth]);

  const visibleStudents = useMemo(
    () => getMonthlySettlementStudents({
      lessons,
      monthKey: selectedMonth,
      students
    }),
    [lessons, selectedMonth, students]
  );
  const rows = useMemo(() => visibleStudents.map((student) => buildStudentSettlementRow({
    classTemplates,
    lessons,
    monthKey: selectedMonth,
    records,
    setting: draftMonth?.studentSettings?.[student.studentId],
    student
  })), [classTemplates, draftMonth, lessons, records, selectedMonth, visibleStudents]);
  const activeRows = useMemo(
    () => rows.filter((row) => !row.setting.excluded),
    [rows]
  );
  const excludedRows = useMemo(
    () => rows.filter((row) => row.setting.excluded),
    [rows]
  );
  const summary = useMemo(
    () => buildMonthlySettlementSummary(rows),
    [rows]
  );
  const selectedCalendarRow = rows.find((row) => row.student.studentId === selectedCalendarStudentId) ?? null;
  const effectiveSaveState = saveState === "saving"
    ? "saving"
    : saveState === "failed"
      ? "failed"
      : isDirty
        ? "dirty"
        : saveState === "saved" ? "saved" : "idle";

  function setSelectedMonth(nextMonth) {
    const resolvedMonth = typeof nextMonth === "function" ? nextMonth(activeMonthRef.current) : nextMonth;
    if (!resolvedMonth || resolvedMonth === activeMonthRef.current) return;
    activeMonthRef.current = resolvedMonth;
    preservedSourceRef.current = null;
    setSelectedMonthState(resolvedMonth);
  }

  function updateStudentSetting(studentId, field, value) {
    draftRevisionByMonthRef.current.set(
      selectedMonth,
      (draftRevisionByMonthRef.current.get(selectedMonth) ?? 0) + 1
    );
    setDraftMonth((current) => {
      if (!current) return current;
      const student = students.find((item) => item.studentId === studentId) ?? {};
      const currentSetting = normalizeMonthlySettlementStudentSetting(
        current.studentSettings?.[studentId],
        { classTemplates, monthKey: selectedMonth, student }
      );
      const nextSetting = {
        ...currentSetting,
        [field]: value
      };
      if (field === "mode") {
        nextSetting.modeSource = "teacher";
      }
      if (field === "scheduleText") {
        nextSetting.fixedAmount = getFixedAmountAfterScheduleChange({
          classTemplates,
          currentFixedAmount: currentSetting.fixedAmount,
          nextScheduleText: value,
          previousScheduleText: currentSetting.scheduleText,
          student
        });
      }
      const nextMonth = {
        ...current,
        studentSettings: {
          ...current.studentSettings,
          [studentId]: nextSetting
        }
      };
      draftByMonthRef.current.set(selectedMonth, nextMonth);
      writeLocalDraft(nextMonth, savedUpdatedAt);
      return nextMonth;
    });
    setIsDirty(true);
    setSaveMessage("변경사항이 있습니다. 월별 스냅샷으로 저장해 주세요.");
  }

  function handleModeChange(row, mode) {
    updateStudentSetting(row.student.studentId, "mode", mode);
  }

  function handleOpenReportPdf() {
    try {
      openMonthlySettlementReportPdf(buildMonthlySettlementReportModel({
        monthKey: selectedMonth,
        rows: activeRows
      }));
    } catch (error) {
      setSaveMessage(error?.message || "PDF 인쇄 창을 열지 못했습니다.");
    }
  }

  async function handleSave() {
    if (saveInFlightRef.current) return saveInFlightRef.current.promise;
    if (!draftMonth || !onSaveMonth || saveState === "saving") return undefined;
    const rowByStudentId = new Map(rows.map((row) => [row.student.studentId, row]));
    const monthRange = getMonthRange(selectedMonth);
    const normalizedStudentSettings = {
      ...draftMonth.studentSettings,
      ...Object.fromEntries(visibleStudents.map((student) => [
        student.studentId,
        (() => {
          const normalizedSetting = normalizeMonthlySettlementStudentSetting(
            draftMonth.studentSettings?.[student.studentId],
            { classTemplates, monthKey: selectedMonth, student }
          );
          const row = rowByStudentId.get(student.studentId);
          return {
            ...normalizedSetting,
            endDate: normalizedSetting.mode === "withdrawn" ||
              (normalizedSetting.mode === "new" && row?.isNewWithdrawnPeriod)
              ? row?.periodEnd || ""
              : monthRange.endDate,
            startDate: normalizedSetting.mode === "new"
              ? row?.periodStart || ""
              : monthRange.startDate
          };
        })()
      ]))
    };
    const nextMonth = {
      ...draftMonth,
      studentSettings: normalizedStudentSettings,
      updatedAt: new Date().toISOString()
    };
    const saveMonthKey = selectedMonth;
    const saveRevision = draftRevisionByMonthRef.current.get(saveMonthKey) ?? 0;
    const baseUpdatedAt = savedUpdatedAt;
    setSaveMessage("Supabase 저장 후 같은 월을 다시 조회해 확인하고 있습니다.");
    const savePromise = (async () => {
      try {
        const persistedMonth = await onSaveMonth(nextMonth);
        const resolution = resolveMonthlySettlementSave({
          currentMonthKey: activeMonthRef.current,
          currentRevision: draftRevisionByMonthRef.current.get(saveMonthKey) ?? 0,
          persistedMonth,
          saveMonthKey,
          saveRevision
        });
        if (resolution.shouldClearLocalDraft) clearLocalDraft(saveMonthKey);
        if (resolution.shouldRebaseRecovery) {
          const latestDraft = draftByMonthRef.current.get(saveMonthKey);
          if (latestDraft?.monthKey === saveMonthKey) {
            writeLocalDraft(latestDraft, persistedMonth.updatedAt || baseUpdatedAt);
          }
        }
        if (resolution.shouldClearLocalDraft) {
          draftByMonthRef.current.set(saveMonthKey, persistedMonth);
        }
        if (!resolution.shouldApply) return persistedMonth;
        if (resolution.shouldReplaceDraft) {
          preservedSourceRef.current = null;
          setDraftMonth(persistedMonth);
          setIsDirty(false);
        } else {
          preservedSourceRef.current = {
            monthKey: saveMonthKey,
            savedUpdatedAt: persistedMonth?.updatedAt || ""
          };
          setIsDirty(true);
        }
        setSaveMessage(resolution.message);
        return persistedMonth;
      } catch (error) {
        const resolution = resolveMonthlySettlementSave({
          currentMonthKey: activeMonthRef.current,
          currentRevision: draftRevisionByMonthRef.current.get(saveMonthKey) ?? 0,
          error,
          saveMonthKey,
          saveRevision
        });
        if (resolution.shouldWriteRecovery) writeLocalDraft(nextMonth, baseUpdatedAt);
        if (!resolution.shouldApply) return undefined;
        setIsDirty(true);
        setSaveMessage(resolution.message);
        return undefined;
      }
    })();
    saveInFlightRef.current = {
      baseUpdatedAt,
      monthKey: saveMonthKey,
      promise: savePromise
    };
    try {
      return await savePromise;
    } finally {
      if (saveInFlightRef.current?.promise === savePromise) {
        saveInFlightRef.current = null;
      }
    }
  }

  return {
    activeRows,
    effectiveSaveState,
    excludedRows,
    handleModeChange,
    handleOpenReportPdf,
    handleSave,
    isDirty,
    rows,
    saveMessage,
    selectedCalendarRow,
    selectedMonth,
    setSelectedCalendarStudentId,
    setSelectedMonth,
    summary,
    updateStudentSetting
  };
}
