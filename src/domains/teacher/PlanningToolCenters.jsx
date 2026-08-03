import { useMemo, useRef, useState } from "react";
import {
  SchoolAcademicOverviewPanel,
  SchoolCalendarFilterBar,
  SchoolCalendarHeader,
  SchoolCalendarSaveNotice,
  SchoolDateScheduleModal,
  SchoolEventFormModal,
  SchoolMonthGrid,
  SchoolMonthHeader
} from "../schoolCalendar/SchoolCalendarComponents.jsx";
import {
  formatCalendarEventLabel,
  formatDateRangeText,
  formatPeriodSummaryLabel,
  getSchoolCalendarEventColor,
  getSchoolCalendarFilterGroup,
  getSchoolCalendarSchoolColor,
  isDateWithinEvent,
  joinCalendarLabel
} from "../schoolCalendar/schoolCalendarUtils.js";
import { AutosaveRiskNotice } from "../../shared/components/AutosaveRiskNotice.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { FilterBar } from "../../shared/components/FilterBar.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { Modal, ModalFooter } from "../../shared/components/Modal.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { SelectionToolbar } from "../../shared/components/SelectionToolbar.jsx";
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";
import { safeIdPart } from "../../shared/utils/id.js";
import {
  lessonResearchCategories,
  lessonResearchStatuses,
  lessonResearchSubjects,
  schoolCalendarGradeOptions,
  schoolCalendarMathSubjectOptions,
  schoolCalendarSchoolColorPalette
} from "../../app/appConfig.js";

function createSchoolCalendarDraftId() {
  return `event_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function SchoolCalendarCenter({
  runtime,
  events,
  rows,
  onDeleteEvent,
  onSaveEvent,
  onSaveDerivedEvent
}) {
  const {
    buildExamCalendarEvents,
    buildMonthDays,
    createMathExamEntry,
    createSchoolCalendarPeriodCards,
    currentExamCycle,
    eventIntersectsMonth,
    examCycleLabel,
    formatMonthTitle,
    formatShortDate,
    getDefaultExamPeriodRange,
    getExamPeriodGroupKey,
    getSchoolCalendarTargetRows,
    isExamLinkedCalendarEvent,
    normalizeMathExamEntries,
    normalizeMathSubject,
    schoolCalendarAutosaveRisk,
    syncPrimaryMathExamDate,
    today,
    upsertMathExamEntryFromSchoolEvent
  } = runtime;
  const [selectedMonth, setSelectedMonth] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [schoolFilter, setSchoolFilter] = useState("전체 학교");
  const [calendarFilter, setCalendarFilter] = useState("all");
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [schoolCalendarSaveState, setSchoolCalendarSaveState] = useState({
    state: "idle",
    message: "등록/수정 후 저장 결과가 여기에 표시됩니다."
  });
  const schoolCalendarRequestRef = useRef(null);
  const [newEvent, setNewEvent] = useState(() => ({
    eventId: createSchoolCalendarDraftId(),
    schoolName: rows[0]?.schoolName ?? "",
    grade: schoolCalendarGradeOptions.includes(rows[0]?.grade) ? rows[0]?.grade : "고1",
    examCycle: currentExamCycle,
    date: today,
    endDate: "",
    title: "",
    type: "examPeriod",
    color: getSchoolCalendarSchoolColor(rows[0]?.schoolName ?? ""),
    examSubject: "",
    memo: "",
    mathExamItems: [
      {
        id: `math_item_${Date.now()}`,
        grade: schoolCalendarGradeOptions.includes(rows[0]?.grade) ? rows[0]?.grade : "고1",
        subject: schoolCalendarMathSubjectOptions.includes(rows[0]?.subject) ? rows[0]?.subject : "공통수학1",
        date: today,
        memo: ""
      }
    ]
  }));
  const schools = [...new Set(rows.map((row) => row.schoolName).filter(Boolean))];
  const examCycleOptions = [...new Set(rows.map((row) => row.examCycle).filter(Boolean))];
  const safeExamCycleOptions = examCycleOptions.length
    ? [currentExamCycle, ...examCycleOptions.filter((cycle) => cycle !== currentExamCycle)]
    : [currentExamCycle, "2026-1-mid", "2026-2-mid", "2026-2-final"];
  const eventTypeLabels = {
    examPeriod: "시험기간",
    mathExam: "수학시험 날짜",
    vacation: "방학/개학",
    schoolEvent: "학교행사",
    custom: "기타 학사일정"
  };
  const calendarFilters = [
    { id: "all", label: "전체" },
    { id: "mathExam", label: "수학시험" },
    { id: "vacation", label: "방학/개학" },
    { id: "schoolEvent", label: "학교행사" },
    { id: "custom", label: "기타" }
  ];
  const eventColorOptions = [...schoolCalendarSchoolColorPalette, "#c4b5fd", "#fecaca", "#bbf7d0"];
  const examEvents = buildExamCalendarEvents(rows);
  const manualEvents = events.filter((event) =>
    !String(event.eventId ?? "").startsWith("event_exam_") &&
    !isExamLinkedCalendarEvent(event)
  );
  const academicEvents = [...examEvents, ...manualEvents].sort((a, b) => a.date.localeCompare(b.date));
  const filteredEvents = academicEvents.filter(
    (event) => schoolFilter === "전체 학교" || event.schoolName === schoolFilter
  );
  const calendarEvents = filteredEvents.filter((event) => event.type !== "examPeriod");
  const calendarDisplayEvents = calendarEvents.filter((event) => (
    calendarFilter === "all" ? true : getSchoolCalendarFilterGroup(event) === calendarFilter
  ));
  const selectedDateEvents = calendarDisplayEvents.filter((event) => isDateWithinEvent(selectedDate, event));
  const monthDays = buildMonthDays(selectedMonth);
  const monthCalendarEvents = calendarEvents.filter((event) => eventIntersectsMonth(event, selectedMonth));
  const monthMathExamEvents = filteredEvents.filter((event) => event.type === "mathExam" && eventIntersectsMonth(event, selectedMonth));
  const monthAcademicEvents = monthCalendarEvents.filter((event) => event.type !== "mathExam");
  const examPeriodCards = createSchoolCalendarPeriodCards(
    filteredEvents.filter((event) => event.type === "examPeriod"),
    filteredEvents.filter((event) => event.type === "mathExam"),
    selectedMonth
  );
  const isEditingEvent = Boolean(editingEvent);
  const isEditingDerivedEvent = Boolean(editingEvent?.derived);
  const isSchoolCalendarSaving = schoolCalendarSaveState.state === "saving";

  function shiftMonth(amount) {
    const [year, month] = selectedMonth.split("-").map(Number);
    const next = new Date(Date.UTC(year, month - 1 + amount, 1));
    const nextDate = `${next.getUTCFullYear()}-${String(next.getUTCMonth() + 1).padStart(2, "0")}-01`;
    setSelectedMonth(nextDate);
  }

  function requireTargetRows(targetRows = []) {
    if (targetRows.length) return targetRows;
    throw new Error("저장할 시험관리 원본 행을 찾지 못했습니다. 학교/학년/시험구분을 먼저 확인하세요.");
  }

  function patchExamPrepRows(currentRows, targetRows, patchRow) {
    const targetIds = new Set(requireTargetRows(targetRows).map((row) => row.examPrepId));
    return currentRows.map((row) => targetIds.has(row.examPrepId) ? patchRow(row) : row);
  }

  function applyLinkedEventToRows(currentRows, event) {
    return patchExamPrepRows(currentRows, getSchoolCalendarTargetRows(currentRows, event), (row) => {
      if (event.type === "examPeriod") {
        return { ...row, examPeriod: formatDateRangeText(event.date, event.endDate || event.date) };
      }
      const nextEntries = upsertMathExamEntryFromSchoolEvent(row, event);
      return {
        ...row,
        mathExamDate: syncPrimaryMathExamDate(nextEntries),
        mathExamDates: nextEntries
      };
    });
  }

  function closeEventForm() {
    setIsFormModalOpen(false);
    setEditingEvent(null);
  }

  function createDraftFromCalendarEvent(event = {}) {
    return {
      eventId: event.eventId || event.schoolEventId || createSchoolCalendarDraftId(),
      createdAt: event.createdAt || "",
      updatedAt: event.updatedAt || "",
      schoolName: event.schoolName || event.schoolNames?.[0] || rows[0]?.schoolName || "",
      grade: event.grade || (schoolCalendarGradeOptions.includes(rows[0]?.grade) ? rows[0]?.grade : "고1"),
      examCycle: event.examCycle || currentExamCycle,
      date: event.date || selectedDate,
      endDate: event.endDate || "",
      title: event.title || "",
      type: event.type || "schoolEvent",
      color: getSchoolCalendarEventColor(event),
      examSubject: event.examSubject || "",
      memo: event.memo || "",
      mathExamItems: [
        {
          id: `math_item_${Date.now()}`,
          grade: event.grade || (schoolCalendarGradeOptions.includes(rows[0]?.grade) ? rows[0]?.grade : "고1"),
          subject: event.examSubject || "공통수학1",
          date: event.date || selectedDate,
          memo: event.memo || ""
        }
      ]
    };
  }

  async function runManualSchoolEventRequest({ request, savingMessage, successMessage }) {
    if (schoolCalendarRequestRef.current) return schoolCalendarRequestRef.current;
    setSchoolCalendarSaveState({ state: "saving", message: savingMessage });
    const requestPromise = Promise.resolve().then(request);
    schoolCalendarRequestRef.current = requestPromise;
    try {
      const result = await requestPromise;
      setSchoolCalendarSaveState({ state: "saved", message: successMessage(result) });
      return result;
    } catch (error) {
      setSchoolCalendarSaveState({
        state: "failed",
        message: error.message || "학사일정 저장에 실패했습니다."
      });
      throw error;
    } finally {
      if (schoolCalendarRequestRef.current === requestPromise) {
        schoolCalendarRequestRef.current = null;
      }
    }
  }

  function runDerivedSchoolEventRequest({ eventChanges, nextRows, successMessage }) {
    if (typeof onSaveDerivedEvent !== "function") {
      throw new Error("학사일정 연동 저장 callback이 필요합니다.");
    }
    return runManualSchoolEventRequest({
      request: () => onSaveDerivedEvent({ eventChanges, nextRows }),
      savingMessage: "시험관리 행과 직전수업을 함께 저장하는 중입니다.",
      successMessage: () => successMessage
    });
  }

  function openEventEditForm(event) {
    setEditingEvent(event);
    setSelectedDate(event.date || selectedDate);
    if (event.date) setSelectedMonth(event.date);
    setNewEvent(createDraftFromCalendarEvent(event));
    setIsDateModalOpen(false);
    setIsFormModalOpen(true);
  }

  async function saveAcademicEventDraft(originalEvent, draftEvent) {
    const nextEvent = {
      ...originalEvent,
      ...draftEvent,
      mathExamItems: undefined,
      endDate: draftEvent.type === "mathExam" ? "" : draftEvent.endDate,
      color: draftEvent.color || getSchoolCalendarSchoolColor(draftEvent.schoolName)
    };
    const editableFields = originalEvent.derived
      ? originalEvent.type === "examPeriod" ? ["date", "endDate"] : ["date", "examSubject"]
      : ["date", "endDate", "schoolName", "grade", "type", "title", "memo", "color", "examSubject"];
    const changedFields = editableFields.filter((field) => String(originalEvent[field] ?? "") !== String(nextEvent[field] ?? ""));
    if (!changedFields.length) {
      setSchoolCalendarSaveState({ state: "saved", message: "변경된 내용이 없습니다." });
      closeEventForm();
      return;
    }
    if (originalEvent.derived) {
      try {
        let nextRows;
        if (originalEvent.type === "examPeriod") {
          const targetRows = originalEvent.examPeriodGroupKey
            ? rows.filter((row) => getExamPeriodGroupKey(row) === originalEvent.examPeriodGroupKey)
            : rows.filter((row) => row.examPrepId === originalEvent.examPrepId);
          nextRows = patchExamPrepRows(rows, targetRows, (row) => ({
            ...row,
            examPeriod: formatDateRangeText(nextEvent.date, nextEvent.endDate || nextEvent.date)
          }));
        } else {
          const sourceRow = requireTargetRows(rows.filter((row) => row.examPrepId === originalEvent.examPrepId))[0];
          const entries = normalizeMathExamEntries(sourceRow);
          const fallbackEntries = entries.length ? entries : [createMathExamEntry(sourceRow, 0)];
          const targetIndex = typeof originalEvent.mathExamEntryIndex === "number"
            ? originalEvent.mathExamEntryIndex
            : fallbackEntries.findIndex((entry) => entry.id === originalEvent.mathExamEntryId);
          const safeIndex = targetIndex >= 0 ? targetIndex : 0;
          const nextEntries = fallbackEntries.map((entry, index) => (
            index === safeIndex
              ? {
                  ...entry,
                  date: nextEvent.date || "",
                  subject: normalizeMathSubject(nextEvent.examSubject || entry.subject),
                  label: nextEvent.examSubject || entry.label
                }
              : entry
          ));
          nextRows = patchExamPrepRows(rows, [sourceRow], (row) => ({
            ...row,
            mathExamDate: syncPrimaryMathExamDate(nextEntries),
            mathExamDates: nextEntries
          }));
        }
        await runDerivedSchoolEventRequest({
          eventChanges: [{ after: nextEvent, before: originalEvent }],
          nextRows,
          successMessage: "학사일정 · 시험관리 · 직전수업 저장 완료"
        });
        closeEventForm();
      } catch (error) {
        console.error(error);
        setSchoolCalendarSaveState({ state: "failed", message: error.message || "학사일정 연동 저장에 실패했습니다." });
      }
      return;
    }
    try {
      await runManualSchoolEventRequest({
        request: () => onSaveEvent?.(nextEvent),
        savingMessage: "수동 학사일정을 저장하는 중입니다.",
        successMessage: (savedEvent) => `${savedEvent?.title || nextEvent.title || "학사일정"} · 저장 완료`
      });
      closeEventForm();
    } catch (error) {
      console.error(error);
      setSchoolCalendarSaveState({
        state: "failed",
        message: error.message || "학사일정 저장에 실패했습니다."
      });
    }
  }

  async function deleteAcademicEvent(eventId) {
    try {
      await runManualSchoolEventRequest({
        request: () => onDeleteEvent?.(eventId),
        savingMessage: "수동 학사일정을 삭제하는 중입니다.",
        successMessage: () => "학사일정 · 삭제 완료"
      });
      return true;
    } catch (error) {
      console.error(error);
      setSchoolCalendarSaveState({
        state: "failed",
        message: error.message || "학사일정 삭제에 실패했습니다."
      });
      return false;
    }
  }

  async function deleteEditingAcademicEvent() {
    if (!editingEvent) return;
    const eventLabel = editingEvent.type === "examPeriod"
      ? `${formatPeriodSummaryLabel(editingEvent)} ${examCycleLabel(editingEvent.examCycle || currentExamCycle)} 시험기간`
      : formatCalendarEventLabel(editingEvent);
    if (typeof window !== "undefined" && !window.confirm(`${eventLabel}을 삭제할까요?`)) return;
    if (editingEvent.derived) {
      try {
        let nextRows;
        if (editingEvent.type === "examPeriod") {
          const targetRows = editingEvent.examPeriodGroupKey
            ? rows.filter((row) => getExamPeriodGroupKey(row) === editingEvent.examPeriodGroupKey)
            : rows.filter((row) => row.examPrepId === editingEvent.examPrepId);
          nextRows = patchExamPrepRows(rows, targetRows, (row) => ({ ...row, examPeriod: "" }));
        } else {
          const sourceRow = requireTargetRows(rows.filter((row) => row.examPrepId === editingEvent.examPrepId))[0];
          const entries = normalizeMathExamEntries(sourceRow);
          const targetIndex = typeof editingEvent.mathExamEntryIndex === "number"
            ? editingEvent.mathExamEntryIndex
            : entries.findIndex((entry) => entry.id === editingEvent.mathExamEntryId);
          const nextEntries = entries.filter((_, index) => index !== targetIndex);
          nextRows = patchExamPrepRows(rows, [sourceRow], (row) => ({
            ...row,
            mathExamDate: syncPrimaryMathExamDate(nextEntries),
            mathExamDates: nextEntries
          }));
        }
        await runDerivedSchoolEventRequest({
          eventChanges: [{ after: null, before: editingEvent }],
          nextRows,
          successMessage: "학사일정 · 시험관리 · 직전수업 삭제 완료"
        });
        closeEventForm();
      } catch (error) {
        console.error(error);
        setSchoolCalendarSaveState({ state: "failed", message: error.message || "학사일정 연동 삭제에 실패했습니다." });
      }
      return;
    }
    if (!await deleteAcademicEvent(editingEvent.eventId)) return;
    closeEventForm();
  }

  async function submitNewEvent() {
    const schoolName = newEvent.schoolName || schools[0] || "학교 미입력";
    const isMathExamType = newEvent.type === "mathExam";
    const subjectTitle = isMathExamType ? newEvent.examSubject.trim() || "수학시험" : "";
    const fallbackTitle = newEvent.type === "examPeriod"
      ? joinCalendarLabel(schoolName, examCycleLabel(newEvent.examCycle), "시험기간")
      : isMathExamType
        ? joinCalendarLabel(schoolName, [newEvent.grade, subjectTitle].filter(Boolean).join(" "), "수학시험")
        : joinCalendarLabel(schoolName, eventTypeLabels[newEvent.type] || "학사일정");
    const title = newEvent.title.trim() || fallbackTitle;
    if (!newEvent.date || !title) return;
    const nextEvent = {
      ...newEvent,
      mathExamItems: undefined,
      eventId: newEvent.eventId || createSchoolCalendarDraftId(),
      schoolName,
      title,
      examSubject: subjectTitle,
      endDate: isMathExamType ? "" : newEvent.endDate,
      color: newEvent.color || getSchoolCalendarSchoolColor(schoolName)
    };
    if (editingEvent) {
      await saveAcademicEventDraft(editingEvent, nextEvent);
      return;
    }
    const isLinkedEvent = isExamLinkedCalendarEvent(nextEvent);
    if (isLinkedEvent) {
      try {
        let nextRows = applyLinkedEventToRows(rows, nextEvent);
        const eventChanges = [{ after: nextEvent, before: null }];
        if (newEvent.type === "examPeriod") {
          newEvent.mathExamItems
            .filter((item) => item.date && (item.grade || item.subject))
            .forEach((item) => {
              const itemSubject = item.subject || "수학시험";
              const itemDetail = [item.grade, itemSubject].filter(Boolean).join(" ");
              const mathEvent = {
                ...newEvent,
                mathExamItems: undefined,
                eventId: `${nextEvent.eventId}_${item.id}`,
                type: "mathExam",
                date: item.date,
                endDate: "",
                grade: item.grade,
                schoolName,
                title: joinCalendarLabel(schoolName, itemDetail, "수학시험"),
                examSubject: itemSubject,
                memo: item.memo || newEvent.memo,
                color: getSchoolCalendarSchoolColor(schoolName)
              };
              nextRows = applyLinkedEventToRows(nextRows, mathEvent);
              eventChanges.push({ after: mathEvent, before: null });
            });
        }
        await runDerivedSchoolEventRequest({
          eventChanges,
          nextRows,
          successMessage: "학사일정 · 시험관리 · 직전수업 저장 완료"
        });
      } catch (error) {
        console.error(error);
        setSchoolCalendarSaveState({
          state: "failed",
          message: error.message || "학사일정 연동 저장에 실패했습니다."
        });
        return;
      }
    } else {
      try {
        await runManualSchoolEventRequest({
          request: () => onSaveEvent?.(nextEvent),
          savingMessage: "수동 학사일정을 저장하는 중입니다.",
          successMessage: (savedEvent) => `${savedEvent?.title || nextEvent.title || "학사일정"} · 저장 완료`
        });
      } catch (error) {
        console.error(error);
        setSchoolCalendarSaveState({
          state: "failed",
          message: error.message || "학사일정 저장에 실패했습니다."
        });
        return;
      }
    }
    setSelectedDate(newEvent.date);
    setSelectedMonth(newEvent.date);
    setNewEvent((current) => ({
      ...current,
      eventId: createSchoolCalendarDraftId(),
      createdAt: "",
      updatedAt: "",
      title: "",
      examSubject: "",
      memo: "",
      endDate: current.type === "mathExam" ? "" : current.endDate,
      mathExamItems: [{ id: `math_item_${Date.now()}`, grade: current.grade, subject: current.examSubject || "", date: current.date, memo: "" }]
    }));
    closeEventForm();
  }

  function updateMathExamItem(itemId, field, value) {
    setNewEvent((current) => ({
      ...current,
      mathExamItems: current.mathExamItems.map((item) => (item.id === itemId ? { ...item, [field]: value } : item))
    }));
  }

  function addMathExamItem() {
    setNewEvent((current) => ({
      ...current,
      mathExamItems: [
        ...current.mathExamItems,
        {
          id: `math_item_${Date.now()}_${current.mathExamItems.length}`,
          grade: current.grade || "고1",
          subject: current.examSubject || "공통수학1",
          date: current.date,
          memo: ""
        }
      ]
    }));
  }

  function removeMathExamItem(itemId) {
    setNewEvent((current) => ({
      ...current,
      mathExamItems: current.mathExamItems.length > 1
        ? current.mathExamItems.filter((item) => item.id !== itemId)
        : current.mathExamItems
    }));
  }

  function changeNewEventType(type) {
    setNewEvent((current) => {
      if (type !== "examPeriod") {
        return {
          ...current,
          type,
          endDate: type === "mathExam" ? "" : current.endDate || current.date,
          title: type === "mathExam" ? "" : current.title
        };
      }
      const range = getDefaultExamPeriodRange(current.examCycle);
      return {
        ...current,
        type,
        date: range.date,
        endDate: range.endDate,
        title: examCycleLabel(current.examCycle)
      };
    });
  }

  function changeNewEventExamCycle(examCycle) {
    setNewEvent((current) => {
      const range = getDefaultExamPeriodRange(examCycle);
      return {
        ...current,
        examCycle,
        date: current.type === "examPeriod" ? range.date : current.date,
        endDate: current.type === "examPeriod" ? range.endDate : current.endDate,
        title: current.type === "examPeriod" ? examCycleLabel(examCycle) : current.title
      };
    });
  }

  function openDateModal(date) {
    setSelectedDate(date);
    setIsDateModalOpen(true);
  }

  function openEventForm(date = selectedDate) {
    setEditingEvent(null);
    setSelectedDate(date);
    setSelectedMonth(date);
    setNewEvent((current) => ({
      ...current,
      eventId: createSchoolCalendarDraftId(),
      createdAt: "",
      updatedAt: "",
      date: current.type === "examPeriod" ? getDefaultExamPeriodRange(current.examCycle || currentExamCycle).date : date,
      endDate: current.type === "examPeriod"
        ? getDefaultExamPeriodRange(current.examCycle || currentExamCycle).endDate
        : current.type === "mathExam" ? "" : current.endDate || date,
      examCycle: current.examCycle || currentExamCycle,
      title: current.type === "examPeriod" && !current.title ? examCycleLabel(current.examCycle || currentExamCycle) : current.title,
      schoolName: schoolFilter === "전체 학교" ? current.schoolName : schoolFilter,
      color: schoolFilter === "전체 학교" ? current.color : getSchoolCalendarSchoolColor(schoolFilter),
      mathExamItems: current.mathExamItems.map((item, index) => ({
        ...item,
        id: item.id || `math_item_${Date.now()}_${index}`,
        date
      }))
    }));
    setIsDateModalOpen(false);
    setIsFormModalOpen(true);
  }

  return (
    <section className="schoolCalendarPage">
      <SchoolCalendarHeader
        onOpenEventForm={openEventForm}
        onSchoolFilterChange={setSchoolFilter}
        schoolFilter={schoolFilter}
        schools={schools}
        selectedDate={selectedDate}
      />

      <AutosaveRiskNotice className="autosaveRiskNoticeInline" {...schoolCalendarAutosaveRisk} />
      <SchoolCalendarSaveNotice saveState={schoolCalendarSaveState} />

      <div className="schoolCalendarLayout">
        {isFormModalOpen ? (
          <SchoolEventFormModal
            busy={isSchoolCalendarSaving}
            eventColorOptions={eventColorOptions}
            eventTypeLabels={eventTypeLabels}
            examCycleLabel={examCycleLabel}
            gradeOptions={schoolCalendarGradeOptions}
            isEditingDerivedEvent={isEditingDerivedEvent}
            isEditingEvent={isEditingEvent}
            mathSubjectOptions={schoolCalendarMathSubjectOptions}
            newEvent={newEvent}
            onAddMathExamItem={addMathExamItem}
            onChangeExamCycle={changeNewEventExamCycle}
            onChangeEventType={changeNewEventType}
            onClose={closeEventForm}
            onDeleteEditingEvent={deleteEditingAcademicEvent}
            onRemoveMathExamItem={removeMathExamItem}
            onSubmit={submitNewEvent}
            onUpdateEventDraft={setNewEvent}
            onUpdateMathExamItem={updateMathExamItem}
            safeExamCycleOptions={safeExamCycleOptions}
            schools={schools}
          />
        ) : null}

        <SchoolAcademicOverviewPanel
          currentExamCycle={currentExamCycle}
          examCycleLabel={examCycleLabel}
          examPeriodCards={examPeriodCards}
          formatPeriodSummaryLabel={formatPeriodSummaryLabel}
          formatShortDate={formatShortDate}
          getSchoolCalendarEventColor={getSchoolCalendarEventColor}
          monthAcademicEvents={monthAcademicEvents}
          monthMathExamEvents={monthMathExamEvents}
          onOpenEventEditForm={openEventEditForm}
        />

        <section className="panel schoolCalendarMainPanel">
          <SchoolMonthHeader
            formatMonthTitle={formatMonthTitle}
            onOpenEventForm={openEventForm}
            onShiftMonth={shiftMonth}
            selectedDate={selectedDate}
            selectedMonth={selectedMonth}
          />
          <SchoolCalendarFilterBar
            calendarFilter={calendarFilter}
            filters={calendarFilters}
            onChange={setCalendarFilter}
          />
          <SchoolMonthGrid
            calendarDisplayEvents={calendarDisplayEvents}
            monthDays={monthDays}
            onOpenDateModal={openDateModal}
            selectedDate={selectedDate}
          />
        </section>
      </div>
      {isDateModalOpen ? (
        <SchoolDateScheduleModal
          busy={isSchoolCalendarSaving}
          eventColorOptions={eventColorOptions}
          eventTypeLabels={eventTypeLabels}
          events={selectedDateEvents}
          gradeOptions={schoolCalendarGradeOptions}
          mathSubjectOptions={schoolCalendarMathSubjectOptions}
          normalizeMathSubject={normalizeMathSubject}
          onClose={() => setIsDateModalOpen(false)}
          onDeleteEvent={deleteAcademicEvent}
          onCreateEvent={openEventForm}
          onSaveEvent={saveAcademicEventDraft}
          schools={schools}
          selectedDate={selectedDate}
        />
      ) : null}
    </section>
  );
}

export function ClassManager({ runtime, students, templates, onUpdateClassRoster }) {
  const { isActiveStudent } = runtime;
  const [selectedTemplateId, setSelectedTemplateId] = useState(templates[1]?.classTemplateId ?? templates[0]?.classTemplateId ?? "");
  const [isRosterModalOpen, setIsRosterModalOpen] = useState(false);
  const [draftStudentIds, setDraftStudentIds] = useState([]);
  const [rosterSaveError, setRosterSaveError] = useState("");
  const [rosterSaveState, setRosterSaveState] = useState("idle");
  const selectedTemplate = templates.find((template) => template.classTemplateId === selectedTemplateId) ?? templates[0];
  const activeStudents = students.filter(isActiveStudent);
  const classStudents = activeStudents.filter((student) => student.defaultClassTemplateId === selectedTemplate?.classTemplateId);

  function openRosterModal() {
    setDraftStudentIds(classStudents.map((student) => student.studentId));
    setRosterSaveError("");
    setRosterSaveState("idle");
    setIsRosterModalOpen(true);
  }

  function toggleDraftStudent(studentId) {
    setDraftStudentIds((current) =>
      current.includes(studentId) ? current.filter((id) => id !== studentId) : [...current, studentId]
    );
  }

  async function saveRoster() {
    if (!selectedTemplate) return;
    setRosterSaveError("");
    setRosterSaveState("saving");
    try {
      await onUpdateClassRoster(selectedTemplate.classTemplateId, draftStudentIds);
      setRosterSaveState("saved");
      setIsRosterModalOpen(false);
    } catch (error) {
      console.error(error);
      setRosterSaveError(error.message);
      setRosterSaveState("failed");
    }
  }

  return (
    <section className="classManagerPage">
      <PageHeader
        className="classManagerTop"
        description="4개 기본 반을 기준으로 학생 배정과 수업 흐름을 관리합니다."
        title="반관리"
      />

      <div className="classBoardGrid">
        {templates.map((template) => {
          const count = activeStudents.filter((student) => student.defaultClassTemplateId === template.classTemplateId).length;
          return (
            <button
              className={selectedTemplateId === template.classTemplateId ? "classBoardCard active" : "classBoardCard"}
              key={template.classTemplateId}
              onClick={() => setSelectedTemplateId(template.classTemplateId)}
              type="button"
            >
              <span className="classColor" style={{ background: template.color }} />
              <strong>{template.name}</strong>
              <small>{template.track} · {template.timeLabel}</small>
              <b>{count}명</b>
            </button>
          );
        })}
      </div>

      <section className="panel classDetailPanel">
        <SectionHeader
          actions={<button className="softButton" onClick={openRosterModal} type="button">명단 수정</button>}
          description={`${selectedTemplate?.timeLabel} · 현재 배정 ${classStudents.length}명`}
          eyebrow="CLASS DETAIL"
          title={selectedTemplate?.name}
        />
        <div className="classStudentGrid">
          {classStudents.length === 0 ? (
            <EmptyState className="emptyState">아직 이 반에 배정된 학생이 없습니다.</EmptyState>
          ) : (
            classStudents.map((student) => (
              <div className="classStudentCard" key={student.studentId}>
                <strong>{student.name}</strong>
                <span>{student.schoolName || "-"} · {student.grade || "-"}</span>
                <small>{student.textbook || "교재 미입력"}</small>
              </div>
            ))
          )}
        </div>
      </section>

      {isRosterModalOpen ? (
        <Modal
          className="classRosterModal"
          closeDisabled={rosterSaveState === "saving"}
          onClose={() => {
            if (rosterSaveState !== "saving") setIsRosterModalOpen(false);
          }}
          scrollable
          subtitle="학생을 체크하면 이 반으로 배정되고, 체크를 해제하면 이 반 명단에서 제외됩니다."
          title={`${selectedTemplate?.name ?? "반"} 명단 수정`}
        >
          <div className="rosterSummaryBar">
            <span>현재 {classStudents.length}명</span>
            <strong>선택 {draftStudentIds.length}명</strong>
          </div>
          <div
            aria-label={`${selectedTemplate?.name ?? "반"} 학생 명단 선택 목록`}
            className="classRosterList"
            role="region"
            tabIndex={0}
          >
            {activeStudents.map((student) => {
              const checked = draftStudentIds.includes(student.studentId);
              const currentTemplate = templates.find((template) => template.classTemplateId === student.defaultClassTemplateId);
              return (
                <label className={checked ? "rosterStudentItem selected" : "rosterStudentItem"} key={student.studentId}>
                  <input
                    checked={checked}
                    disabled={rosterSaveState === "saving"}
                    onChange={() => toggleDraftStudent(student.studentId)}
                    type="checkbox"
                  />
                  <span className="studentInitial">{student.name?.[0] ?? "학"}</span>
                  <span>
                    <strong>{student.name}</strong>
                    <small>{student.schoolName || "학교 미입력"} · {student.grade || "-"} · {student.textbook || "교재 미입력"}</small>
                  </span>
                  <em>{currentTemplate?.name ?? "미배정"}</em>
                </label>
              );
            })}
          </div>
          {rosterSaveState === "saving" ? <p className="statusText">학생 반 배정 저장 후 미래 수업 명단을 확인하고 있습니다.</p> : null}
          {rosterSaveState === "failed" ? <p className="errorText" role="alert">{rosterSaveError || "반 명단 저장에 실패했습니다. 입력을 유지했으니 다시 시도해 주세요."}</p> : null}
          <div className="deleteConfirmActions">
            <button className="softButton" disabled={rosterSaveState === "saving"} onClick={() => setIsRosterModalOpen(false)} type="button">취소</button>
            <button className="primaryButton" disabled={rosterSaveState === "saving"} onClick={saveRoster} type="button">
              {rosterSaveState === "saving" ? "저장·확인 중" : rosterSaveState === "failed" ? "다시 저장" : "명단 저장"}
            </button>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}

export function LessonResearchCenter({ runtime, appStateSaveState = "idle", items, onAddItem, onDeleteItem, onUpdateItem }) {
  const { appStateAutosaveRisk, normalizeLessonResearchSubject, ssenTypeCatalog } = runtime;
  const [selectedSubject, setSelectedSubject] = useState(lessonResearchSubjects[0]);
  const [selectedItemId, setSelectedItemId] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("전체");
  const [statusFilter, setStatusFilter] = useState("전체");
  const catalogUnits = ssenTypeCatalog[selectedSubject] ?? [];

  const filteredItems = useMemo(
    () =>
      items.filter(
        (item) =>
          normalizeLessonResearchSubject(item.subject) === selectedSubject &&
          (categoryFilter === "전체" || item.category === categoryFilter) &&
          (statusFilter === "전체" || item.status === statusFilter)
      ),
    [categoryFilter, items, selectedSubject, statusFilter]
  );

  const selectedItem =
    items.find((item) => item.researchItemId === selectedItemId) ??
    filteredItems[0] ??
    items.find((item) => normalizeLessonResearchSubject(item.subject) === selectedSubject) ??
    null;

  const subjectCounts = useMemo(
    () =>
      lessonResearchSubjects.reduce((acc, subject) => {
        acc[subject] = items.filter((item) => normalizeLessonResearchSubject(item.subject) === subject).length;
        return acc;
      }, {}),
    [items]
  );

  function handleAddItem() {
    const researchItemId = `research_${Date.now()}`;
    onAddItem(selectedSubject, { researchItemId });
    setSelectedItemId(researchItemId);
  }

  function handleAddTypeLessonPlan(type, chapter, unit) {
    const researchItemId = `research_${Date.now()}_${safeIdPart(type.id || type.title || "type")}`;
    onAddItem(selectedSubject, {
      researchItemId,
      id: type.id,
      typeId: type.id,
      typeNo: type.typeNo,
      typeTitle: type.title,
      partName: chapter.title,
      unitName: unit.title
    });
    setCategoryFilter("전체");
    setStatusFilter("전체");
    setSelectedItemId(researchItemId);
  }

  return (
    <section className="lessonResearchPage">
      <PageHeader
        actions={(
          <>
          <InlineSaveStatus label="수업연구 자동저장" saveState={appStateSaveState} />
          <button className="primaryButton" onClick={handleAddItem} type="button">+ 교안 항목 추가</button>
          </>
        )}
        actionsClassName="researchTopActions"
        className="lessonResearchHero"
        description="유형별 강의 교안, 특정문항 설명 틀, 학생이 자주 막히는 지점을 과목별로 정리합니다."
        eyebrow="LESSON RESEARCH"
        title="수업연구"
      />

      <AutosaveRiskNotice className="autosaveRiskNoticeInline" {...appStateAutosaveRisk} />

      <FilterBar className="researchSubjectTabs" label="수업연구 과목 필터">
        {lessonResearchSubjects.map((subject) => (
          <button
            aria-pressed={selectedSubject === subject}
            className={`filterBarOption${selectedSubject === subject ? " active" : ""}`}
            key={subject}
            onClick={() => {
              setSelectedSubject(subject);
              setSelectedItemId("");
            }}
            type="button"
          >
            <strong>{subject}</strong>
            <span>{subjectCounts[subject] ?? 0}</span>
          </button>
        ))}
      </FilterBar>

      <div className="researchMetricGrid">
        <MetricCard label="전체 교안 항목" value={`${items.length}개`} hint="과목 전체 누적" />
        <MetricCard label="유형 연결 교안" value={`${items.filter((item) => item.linkedTypeId).length}개`} hint="유형트리와 연결됨" />
        <MetricCard label="상 우선순위" value={`${items.filter((item) => item.priority === "상").length}개`} hint="다음 수업 전 확인" />
      </div>

      <div className="researchLayout">
        <section className="panel researchListPanel">
          <div className="researchTypeTreePanel">
            <SectionHeader
              density="slim"
              description="유형을 골라 바로 강의 교안 항목을 만듭니다."
              eyebrow="TYPE TREE"
              title="유형트리"
            />
            <div
              aria-label={`${selectedSubject} 수업연구 유형트리`}
              className="researchTypeTree"
              role="region"
              tabIndex={0}
            >
              {catalogUnits.map((chapter) => (
                <details className="researchTypeChapter" key={chapter.id} open>
                  <summary>
                    <strong>{chapter.title}</strong>
                    <span>{chapter.units.reduce((sum, unit) => sum + unit.types.length, 0)}개 유형</span>
                  </summary>
                  <div className="researchTypeUnitList">
                    {chapter.units.map((unit) => (
                      <details className="researchTypeUnit" key={unit.id}>
                        <summary>
                          <b>{unit.title}</b>
                          <span>{unit.types.length}개</span>
                        </summary>
                        <div className="researchTypeNodeList">
                          {unit.types.map((type) => (
                            <button className="researchTypeNode" key={type.id} onClick={() => handleAddTypeLessonPlan(type, chapter, unit)} type="button">
                              <span>
                                <strong>{type.typeNo ? `${type.typeNo}. ${type.title}` : type.title}</strong>
                                <small>{type.id}</small>
                              </span>
                              <b>교안</b>
                            </button>
                          ))}
                        </div>
                      </details>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
          <SectionHeader
            actions={(
              <>
              <select aria-label="교안 카테고리 필터" value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}>
                {["전체", ...lessonResearchCategories].map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <select aria-label="교안 상태 필터" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                {["전체", ...lessonResearchStatuses].map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              </>
            )}
            actionsClassName="researchFilters"
            eyebrow="COLLECT"
            title="교안 목록"
          />

          <div
            aria-label={`${selectedSubject} 교안 목록`}
            className="researchCardList"
            role="region"
            tabIndex={0}
          >
            {filteredItems.length === 0 ? (
              <EmptyState className="emptyState">아직 이 과목에 정리된 연구 항목이 없습니다.</EmptyState>
            ) : (
              filteredItems.map((item) => (
                <button
                  className={selectedItem?.researchItemId === item.researchItemId ? "researchCard active" : "researchCard"}
                  key={item.researchItemId}
                  onClick={() => setSelectedItemId(item.researchItemId)}
                  type="button"
                >
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.source || "출처 미입력"}</span>
                  </div>
                  <div className="researchBadges">
                    {item.linkedTypeNo || item.linkedTypeTitle ? <span>{[item.linkedTypeNo, item.linkedTypeTitle].filter(Boolean).join(" · ")}</span> : null}
                    <span>{item.category}</span>
                    <span>{item.status}</span>
                    <b>{item.priority}</b>
                  </div>
                </button>
              ))
            )}
          </div>
        </section>

        <section className="panel researchEditor">
          {selectedItem ? (
            <>
              <SectionHeader
                actions={<button className="ghostButton dangerText" onClick={() => onDeleteItem(selectedItem.researchItemId)} type="button">삭제</button>}
                description={`마지막 수정일 ${selectedItem.updatedAt || selectedItem.createdAt}`}
                eyebrow="EDIT"
                title="강의 교안 정리"
              />

              <div className="researchMetaGrid">
                <label>
                  과목
                  <select value={normalizeLessonResearchSubject(selectedItem.subject)} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "subject", event.target.value)}>
                    {lessonResearchSubjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </label>
                <label>
                  분류
                  <select value={selectedItem.category} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "category", event.target.value)}>
                    {lessonResearchCategories.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label>
                  상태
                  <select value={selectedItem.status} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "status", event.target.value)}>
                    {lessonResearchStatuses.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label>
                  우선순위
                  <select value={selectedItem.priority} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "priority", event.target.value)}>
                    {["상", "중", "하"].map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="wideLabel">
                제목
                <input value={selectedItem.title} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "title", event.target.value)} />
              </label>
              <label className="wideLabel">
                출처 / 수업 맥락
                <input value={selectedItem.source} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "source", event.target.value)} placeholder="예: 6/12 월수금 7-10 질문, 창동고 기출, 자체교재 p.32" />
              </label>
              <div className="researchLinkedTypePanel">
                <div>
                  <span>연결 유형</span>
                  <strong>{selectedItem.linkedTypeTitle ? `${selectedItem.linkedTypeNo ? `${selectedItem.linkedTypeNo}. ` : ""}${selectedItem.linkedTypeTitle}` : "유형트리에서 교안 버튼을 눌러 연결"}</strong>
                  <small>{[selectedItem.linkedTypeChapter, selectedItem.linkedTypeUnit].filter(Boolean).join(" > ") || "유형을 연결하면 단원 경로가 표시됩니다."}</small>
                </div>
                {selectedItem.linkedTypeId ? (
                  <button
                    className="softButton"
                    onClick={() => {
                      ["linkedTypeId", "linkedTypeNo", "linkedTypeTitle", "linkedTypeUnit", "linkedTypeChapter"].forEach((field) =>
                        onUpdateItem(selectedItem.researchItemId, field, "")
                      );
                    }}
                    type="button"
                  >
                    연결 해제
                  </button>
                ) : null}
              </div>
              <label className="wideLabel">
                특정 문항 / 예시 상황
                <input value={selectedItem.specificProblem ?? ""} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "specificProblem", event.target.value)} placeholder="예: 상계고 2026 1학기 기말 17번, 쎈 B단계 유사문항, 학생 질문 사진" />
              </label>

              <div className="researchTextareaGrid">
                <label>
                  학생이 막히는 지점
                  <textarea value={selectedItem.studentDifficulty ?? ""} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "studentDifficulty", event.target.value)} placeholder="학생들이 어디서 멈추는지, 어떤 오개념이 반복되는지" />
                </label>
                <label>
                  설명 한 줄 목표
                  <textarea value={selectedItem.explanationGoal ?? ""} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "explanationGoal", event.target.value)} placeholder="이 유형을 설명한 뒤 학생이 무엇을 할 수 있어야 하는지" />
                </label>
                <label>
                  설명 틀 / 핵심 질문
                  <textarea value={selectedItem.explanationFrame ?? ""} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "explanationFrame", event.target.value)} placeholder="처음 던질 질문, 조건을 읽는 순서, 개념 연결 문장" />
                </label>
                <label>
                  판서 흐름
                  <textarea value={selectedItem.boardFlow ?? ""} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "boardFlow", event.target.value)} placeholder="1. 조건 분해 → 2. 대표식 세팅 → 3. 실수 방지 체크처럼 수업 순서로 작성" />
                </label>
                <label>
                  확인 질문
                  <textarea value={selectedItem.checkQuestions ?? ""} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "checkQuestions", event.target.value)} placeholder="설명 후 바로 물어볼 질문, 학생 답변 기준" />
                </label>
                <label>
                  연습/숙제 연결
                  <textarea value={selectedItem.practicePlan ?? ""} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "practicePlan", event.target.value)} placeholder="대표문항, 유제, 재시험/누적테스트로 연결할 방식" />
                </label>
                <label className="researchWideTextarea">
                  문항 관찰 메모
                  <textarea value={selectedItem.problemNote} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "problemNote", event.target.value)} placeholder="문항 조건, 학생 답안, 다시 풀어볼 포인트" />
                </label>
                <label className="researchWideTextarea">
                  설명 보완 메모
                  <textarea value={selectedItem.teachingNote} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "teachingNote", event.target.value)} placeholder="다음 수업에서 보완할 비유, 말 순서, 강조 포인트" />
                </label>
                <label className="researchWideTextarea">
                  수업/교재화 메모
                  <textarea value={selectedItem.materialPlan} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "materialPlan", event.target.value)} placeholder="개념 설명, 대표문항, 유제, 심화문항으로 발전시킬 방향" />
                </label>
              </div>
            </>
          ) : (
            <EmptyState className="emptyState">왼쪽에서 항목을 추가하거나 선택해주세요.</EmptyState>
          )}
        </section>
      </div>
    </section>
  );
}

export function AIVariantProblemCenter({ runtime, aiSettings = runtime.defaultAiSettings }) {
  const [activeTab, setActiveTab] = useState("variant");
  const [sourceProblem, setSourceProblem] = useState("");
  const [variantLevel, setVariantLevel] = useState("same");
  const [basicCount, setBasicCount] = useState("1");
  const [similarCount, setSimilarCount] = useState("1");
  const [advancedCount, setAdvancedCount] = useState("0");
  const [answerStyle, setAnswerStyle] = useState("fiveChoice");
  const [solutionStyle, setSolutionStyle] = useState("short");
  const [toneStyle, setToneStyle] = useState("auto");
  const [teacherPrompt, setTeacherPrompt] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [selectedVariantIds, setSelectedVariantIds] = useState([]);
  const [isHwpxExportOpen, setIsHwpxExportOpen] = useState(false);
  const variantFileInputRef = useRef(null);
  const [hwpxExportForm, setHwpxExportForm] = useState({
    includeAnswerSheet: false,
    includeInlineNotes: true,
    includeSolution: true,
    layout: "b4_2col",
    subject: "",
    title: "변형문항 시험지",
    typography: "compact"
  });
  const totalVariantCount = Number(basicCount || 0) + Number(similarCount || 0) + Number(advancedCount || 0);
  const generatedVariantCount = Math.max(1, Math.min(totalVariantCount || 1, 10));
  const generatedVariants = isGenerated
    ? Array.from({ length: generatedVariantCount }, (_, index) => {
        const variantNumber = index + 1;
        const type =
          index < Number(basicCount || 0)
            ? "숫자/조건 변형"
            : index < Number(basicCount || 0) + Number(similarCount || 0)
              ? "표현 변형"
              : "고난도 변형";
        return {
          id: `variant_${variantNumber}`,
          label: `변형 ${variantNumber}`,
          level: variantLevel === "same" ? "유사 난도" : variantLevel === "up" ? "심화" : "내신 실전",
          source: sourceProblem || "원본 문항을 입력하면 이 영역에 변형문항 결과가 표시됩니다.",
          type
        };
      })
    : [];
  const selectedVariantCount = selectedVariantIds.filter((id) =>
    generatedVariants.some((variant) => variant.id === id)
  ).length;

  async function appendVariantSourceFile(file) {
    if (!file) return;
    const header = `[첨부 파일] ${file.name} (${Math.round(file.size / 1024)}KB)`;
    let fileText = "";
    if (file.type.startsWith("text/") || /\.(txt|csv|md|json)$/i.test(file.name)) {
      try {
        fileText = await file.text();
      } catch (error) {
        fileText = `파일 내용을 읽지 못했습니다: ${error.message}`;
      }
    }
    setSourceProblem((current) => [current, header, fileText].filter(Boolean).join("\n\n"));
  }

  function handleVariantFileInput(event) {
    appendVariantSourceFile(event.target.files?.[0]);
    event.target.value = "";
  }

  function handleVariantFileDrop(event) {
    event.preventDefault();
    appendVariantSourceFile(event.dataTransfer.files?.[0]);
  }

  function handleGenerateVariant() {
    setIsGenerated(true);
    setSelectedVariantIds(
      Array.from({ length: Math.min(generatedVariantCount, 2) }, (_, index) => `variant_${index + 1}`)
    );
  }

  function handleToggleVariantSelection(variantId) {
    setSelectedVariantIds((current) =>
      current.includes(variantId)
        ? current.filter((id) => id !== variantId)
        : [...current, variantId]
    );
  }

  function updateHwpxExportForm(field, value) {
    setHwpxExportForm((current) => ({ ...current, [field]: value }));
  }

  function handleDownloadHwpx() {
    const selectedVariants = generatedVariants.filter((variant) => selectedVariantIds.includes(variant.id));
    const exportPayload = {
      createdAt: new Date().toISOString(),
      exportType: "hwpx-draft",
      note: "This is a frontend export draft. Backend HWPX packaging will replace this payload with a valid HWPX archive.",
      options: hwpxExportForm,
      variants: selectedVariants
    };
    const fileName = `${(hwpxExportForm.title || "variant-test").replace(/[\\/:*?"<>|]/g, "_")}.hwpx`;
    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], {
      type: "application/vnd.hancom.hwpx"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setIsHwpxExportOpen(false);
  }

  return (
    <section className="aiVariantPage">
      <PageHeader
        className="aiVariantHero"
        description="학원 수업자료 분석, 문제 변형, 문항 정리 작업을 한 곳에서 관리합니다."
        eyebrow="AI TOOLS"
        title="AI 도구"
      />

      <WorkspaceTabs className="studentManagerTabs aiTabs" label="AI 도구 작업 구분" variant="secondary">
        {[
          ["variant", "변형문항"]
        ].map(([id, label]) => (
          <button
            aria-selected={activeTab === id}
            className={activeTab === id ? "active" : ""}
            key={id}
            onClick={() => setActiveTab(id)}
            role="tab"
            type="button"
          >
            {label}
          </button>
        ))}
      </WorkspaceTabs>

      {activeTab === "variant" ? (
        <section className="aiVariantWorkspace">
          <div className="aiVariantWorkbench">
            <section className="panel aiToolCard aiVariantInputCard">
              <div className="aiToolCardTitle">
                <div>
                  <h2>문항 입력</h2>
                  <p className="muted">파일, 이미지, 텍스트로 받은 원본을 넣고 바로 변형 조건을 정합니다.</p>
                </div>
                <span className="readyPill">준비 완료</span>
              </div>

              <div className="aiVariantTopGrid">
                <div className="aiVariantInputColumn">
                  <div
                    className="aiUploadBox compact"
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={handleVariantFileDrop}
                  >
                    <strong>파일 선택 또는 드래그</strong>
                    <span>파일 1개 · 최대 50MB · Ctrl+V 붙여넣기</span>
                    <input
                      accept=".txt,.csv,.md,.json,image/*,.pdf"
                      aria-label="AI 변형 원본 파일 선택"
                      className="visuallyHiddenInput"
                      onChange={handleVariantFileInput}
                      ref={variantFileInputRef}
                      type="file"
                    />
                    <button className="softButton" onClick={() => variantFileInputRef.current?.click()} type="button">
                      파일 업로드
                    </button>
                  </div>
                  <label className="wideLabel">
                    원본 문항 / 오답 메모
                    <textarea
                      value={sourceProblem}
                      onChange={(event) => setSourceProblem(event.target.value)}
                      placeholder="원본 문제, 학생 풀이 오류, 원하는 조건을 붙여넣으세요."
                      rows="8"
                    />
                  </label>
                </div>

                <div className="aiVariantOptionColumn">
                  <div className="variantOptionGroup compact">
                    <strong>변형 종류 · 개수</strong>
                    <div className="variantCountGrid compact">
                      <label>
                        숫자/조건
                        <input min="0" type="number" value={basicCount} onChange={(event) => setBasicCount(event.target.value)} />
                      </label>
                      <label>
                        표현
                        <input min="0" type="number" value={similarCount} onChange={(event) => setSimilarCount(event.target.value)} />
                      </label>
                      <label>
                        고난도
                        <input min="0" type="number" value={advancedCount} onChange={(event) => setAdvancedCount(event.target.value)} />
                      </label>
                    </div>
                  </div>

                  <div className="variantSelectGrid compact">
                    <label>
                      변형 난도
                      <select value={variantLevel} onChange={(event) => setVariantLevel(event.target.value)}>
                        <option value="same">유사 난도</option>
                        <option value="up">한 단계 심화</option>
                        <option value="exam">내신 실전형</option>
                      </select>
                    </label>
                    <label>
                      답안 형식
                      <select value={answerStyle} onChange={(event) => setAnswerStyle(event.target.value)}>
                        <option value="auto">자동</option>
                        <option value="fiveChoice">5지선다 객관식</option>
                        <option value="shortAnswer">단답형</option>
                        <option value="fillBlank">빈칸 채우기</option>
                        <option value="stepProof">단계별 서술형</option>
                        <option value="mixed">혼합 서술형</option>
                      </select>
                    </label>
                    <label>
                      해설 형식
                      <select value={solutionStyle} onChange={(event) => setSolutionStyle(event.target.value)}>
                        <option value="short">일반 해설 한 단락</option>
                        <option value="step">단계별 해설</option>
                        <option value="auto">자동</option>
                      </select>
                    </label>
                    <label>
                      풀이 스타일
                      <select value={toneStyle} onChange={(event) => setToneStyle(event.target.value)}>
                        <option value="auto">자동</option>
                        <option value="standard">표준 정석</option>
                        <option value="quick">빠른 풀이</option>
                        <option value="concept">학생 친절형</option>
                        <option value="exam">시험 실전형</option>
                        <option value="reverse">반례 체크형</option>
                      </select>
                    </label>
                  </div>

                  <label className="wideLabel">
                    강사 코멘트
                    <textarea
                      value={teacherPrompt}
                      onChange={(event) => setTeacherPrompt(event.target.value)}
                      placeholder="예: 계산은 쉽게, 조건 해석은 조금 더 꼬아서 / 창동고 스타일 / 학생들이 자주 틀리는 포인트 반영"
                      rows="4"
                    />
                  </label>
                </div>
              </div>
            </section>

            <button className="primaryButton aiRunButton" onClick={handleGenerateVariant} type="button">AI 처리 시작</button>
          </div>

          <section className="panel aiVariantResultPanel">
            {isGenerated ? (
              <>
                <div className="resultStatus success">
                  <strong>완료</strong>
                  <span>변형 문제 생성 완료</span>
                </div>
                <SelectionToolbar
                  actions={(
                    <>
                      <button
                        className="primaryButton compact"
                        disabled={selectedVariantCount === 0}
                        onClick={() => setIsHwpxExportOpen(true)}
                        type="button"
                      >
                        HWPX 내보내기 ({selectedVariantCount})
                      </button>
                      <button className="softButton" onClick={handleGenerateVariant} type="button">다시 생성</button>
                    </>
                  )}
                  className="variantResultToolbar"
                  label="변형문항 선택"
                  selectedCount={selectedVariantCount}
                  totalCount={generatedVariants.length}
                  unit="개"
                />
                {generatedVariants.map((variant) => (
                  <article
                    className={selectedVariantIds.includes(variant.id) ? "variantResultCard selected" : "variantResultCard"}
                    key={variant.id}
                  >
                    <div className="variantResultMeta">
                      <label className="variantSelectCheck">
                        <input
                          checked={selectedVariantIds.includes(variant.id)}
                          onChange={() => handleToggleVariantSelection(variant.id)}
                          type="checkbox"
                        />
                        선택
                      </label>
                      <span>{variant.label}</span>
                      <b>{variant.level}</b>
                      <em>{variant.type}</em>
                    </div>
                    <strong>원본 문항의 핵심 조건을 유지한 변형 초안</strong>
                    <p>{variant.source}</p>
                    <div className="variantAnswerBox">
                      <span>정답</span>
                      <strong>AI 생성 후 표시</strong>
                    </div>
                    <div className="variantSolutionBox">
                      <span>해설</span>
                      <p>선택한 해설 형식과 풀이 스타일에 맞춰 풀이가 표시됩니다.</p>
                    </div>
                  </article>
                ))}
              </>
            ) : (
              <div className="variantResultEmpty">
                <span>✨</span>
                <strong>결과 대기 중</strong>
                <p>왼쪽 패널에서 파일 또는 문항을 입력하고 옵션을 설정한 후 AI 처리를 시작하세요.</p>
              </div>
            )}
          </section>
        </section>
      ) : null}

      {isHwpxExportOpen ? (
        <Modal
          className="hwpxExportModal"
          onClose={() => setIsHwpxExportOpen(false)}
          scrollable
          subtitle={`선택한 ${selectedVariantCount}개 문항을 한글 파일(.hwpx)로 다운로드합니다.`}
          title="HWPX 시험지 내보내기"
        >
          <div className="hwpxExportForm">
            <section className="hwpxExportSection">
              <SectionHeader
                density="slim"
                description="다운로드 파일에 들어갈 기본 정보를 정합니다."
                title="시험지 정보"
                titleAs="h3"
              />
              <label className="wideLabel">
                시험지 제목
                <input
                  value={hwpxExportForm.title}
                  onChange={(event) => updateHwpxExportForm("title", event.target.value)}
                  placeholder="예: 6월 3주차 변형문항"
                />
              </label>
              <label className="wideLabel">
                과목
                <input
                  value={hwpxExportForm.subject}
                  onChange={(event) => updateHwpxExportForm("subject", event.target.value)}
                  placeholder="예: 공통수학1, 미적분"
                />
              </label>
            </section>

            <section className="hwpxExportSection">
              <SectionHeader
                density="slim"
                description="수업용, 배부용, 해설용 시험지 형식을 나눠 저장할 수 있게 둡니다."
                title="정답 · 풀이"
                titleAs="h3"
              />
              <div className="hwpxCheckboxGrid">
                <label>
                  <input
                    checked={hwpxExportForm.includeAnswerSheet}
                    onChange={(event) => updateHwpxExportForm("includeAnswerSheet", event.target.checked)}
                    type="checkbox"
                  />
                  정답 포함
                </label>
                <label>
                  <input
                    checked={hwpxExportForm.includeSolution}
                    onChange={(event) => updateHwpxExportForm("includeSolution", event.target.checked)}
                    type="checkbox"
                  />
                  풀이 / 해설 포함
                </label>
                <label>
                  <input
                    checked={hwpxExportForm.includeInlineNotes}
                    onChange={(event) => updateHwpxExportForm("includeInlineNotes", event.target.checked)}
                    type="checkbox"
                  />
                  인라인 노트 포함
                </label>
              </div>
            </section>

            <section className="hwpxExportSection">
              <div className="hwpxExportGrid">
                <label>
                  페이지 레이아웃
                  <select value={hwpxExportForm.layout} onChange={(event) => updateHwpxExportForm("layout", event.target.value)}>
                    <option value="b4_2col">B4 · 2단</option>
                    <option value="a4_1col">A4 · 1단</option>
                    <option value="a4_2col">A4 · 2단</option>
                  </select>
                </label>
                <label>
                  타이포그래피
                  <select value={hwpxExportForm.typography} onChange={(event) => updateHwpxExportForm("typography", event.target.value)}>
                    <option value="compact">예비 · 본문 · 여백</option>
                    <option value="exam">시험지형</option>
                    <option value="solution">해설지형</option>
                  </select>
                </label>
              </div>
            </section>

            <p className="hwpxExportNote">
              현재 다운로드는 HWPX 내보내기 연결을 검수하기 위한 초안입니다. 한컴에서 바로 열리는 정식 HWPX 패키징은 백엔드 변환 모듈에서 완성합니다.
            </p>

            <ModalFooter>
              <button className="softButton" onClick={() => setIsHwpxExportOpen(false)} type="button">취소</button>
              <button className="primaryButton" disabled={selectedVariantCount === 0} onClick={handleDownloadHwpx} type="button">다운로드</button>
            </ModalFooter>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}
