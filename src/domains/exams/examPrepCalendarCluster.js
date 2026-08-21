import { createStudentExamPrepRow } from "./studentExamPrepRow.js";
import { normalizeExamPrepRowReviewDraft } from "./examReviewDraft.js";
import { safeIdPart } from "../../shared/utils/id.js";
import {
  compactCalendarLabel,
  formatCalendarSummaryLabel,
  formatDateRangeText,
  getSchoolCalendarEventColor,
  getSchoolCalendarSchoolColor,
  isDateWithinEvent,
  joinCalendarLabel,
  normalizeGradeLabel,
  normalizeSchoolName,
  parseDateRangeText,
  schoolNamesMatch
} from "../schoolCalendar/schoolCalendarUtils.js";

export function createExamPrepCalendarCluster(today) {
  const examPrepTextbookBySchoolGrade = {
    "용화여고_고1": "천재(홍)",
    "상계고_고1": "천재(홍)",
    "자운고_고1": "미래엔",
    "정의여고_고1": "미래엔",
    "창동고_고1": "미래엔"
  };

  const currentExamCycle = getDefaultExamCycleForDate(today);

  function inferExamCycleFromPrepId(examPrepId = "") {
    const id = String(examPrepId);
    const explicitCycle = id.match(/(20\d{2})[-_](1|2)[-_](mid|final)/);
    if (explicitCycle) return `${explicitCycle[1]}-${explicitCycle[2]}-${explicitCycle[3]}`;
    const legacyYear = id.match(/(20\d{2})/);
    const year = legacyYear?.[1] ?? String(new Date(`${today}T00:00:00+09:00`).getFullYear());
    if (id.includes("_mid_") || id.endsWith("_mid") || id.includes("_mid")) return `${year}-1-mid`;
    if (id.includes("_final_") || id.endsWith("_final") || id.includes("_final")) return `${year}-1-final`;
    return "";
  }

  function getDefaultExamCycleForDate(dateString = today) {
    const [yearText, monthText] = String(dateString).split("-");
    const year = Number(yearText) || new Date().getFullYear();
    const month = Number(monthText) || 1;
    if (month <= 5) return `${year}-1-mid`;
    if (month <= 7) return `${year}-1-final`;
    if (month <= 10) return `${year}-2-mid`;
    return `${year}-2-final`;
  }

  function normalizeExamPrepRowCycle(row = {}) {
    const inferredCycle = inferExamCycleFromPrepId(row.examPrepId);
    if (inferredCycle && row.examCycle !== inferredCycle) {
      return { ...row, examCycle: inferredCycle, examTerm: inferredCycle };
    }
    if (!row.examCycle && !row.examTerm) {
      return { ...row, examCycle: currentExamCycle, examTerm: currentExamCycle };
    }
    if (!row.examCycle && row.examTerm) return { ...row, examCycle: row.examTerm };
    if (!row.examTerm && row.examCycle) return { ...row, examTerm: row.examCycle };
    return row;
  }

  function normalizeExamPrepRows(rows = []) {
    return rows.map((row) => ({
      ...normalizeExamPrepRowReviewDraft(normalizeExamPrepRowCycle(row)),
      isExcluded: Boolean(row.isExcluded)
    }));
  }

  function examCycleLabel(examCycle) {
    const [, semester, phase] = String(examCycle).match(/^20\d{2}-(1|2)-(mid|final)$/) ?? [];
    if (!semester || !phase) return examCycle;
    return `${semester}학기 ${phase === "mid" ? "중간고사" : "기말고사"}`;
  }

  function getDefaultExamPeriodRange(examCycle = currentExamCycle) {
    const [yearText, semester, phase] = String(examCycle).split("-");
    const year = Number(yearText) || new Date(`${today}T00:00:00+09:00`).getFullYear();
    const ranges = {
      "1-mid": { date: `${year}-04-27`, endDate: `${year}-05-08` },
      "1-final": { date: `${year}-06-29`, endDate: `${year}-07-03` },
      "2-mid": { date: `${year}-09-28`, endDate: `${year}-10-02` },
      "2-final": { date: `${year}-12-14`, endDate: `${year}-12-24` }
    };
    return ranges[`${semester}-${phase}`] ?? { date: today, endDate: today };
  }

  function getDefaultExamPeriodText(examCycle = currentExamCycle) {
    const range = getDefaultExamPeriodRange(examCycle);
    return formatDateRangeText(range.date, range.endDate);
  }

  function getSchoolGradeKey(schoolName = "", grade = "") {
    const schoolKey = normalizeSchoolName(schoolName);
    const gradeKey = compactCalendarLabel(normalizeGradeLabel(grade));
    if (!schoolKey || !gradeKey) return "";
    return `${schoolKey}_${gradeKey}`;
  }

  function getStudentSchoolGradeKey(student = {}) {
    return getSchoolGradeKey(student.schoolName, student.grade);
  }

  function getExamPrepSchoolGradeKey(row = {}) {
    return getSchoolGradeKey(row.schoolName, row.grade);
  }

  function getTextbookFromExamPrep(student) {
    const key = `${student.schoolName || ""}_${normalizeGradeLabel(student.grade)}`;
    return examPrepTextbookBySchoolGrade[key] ?? student.textbook ?? "";
  }

  function getDefaultMathExamDate(row, index = 0) {
    const fallbackBySchool = {
      "용화여고": "2026-06-24",
      "정의여고": "2026-06-25",
      "자운고": "2026-06-26",
      "상계고": "2026-06-27",
      "창동고": "2026-06-29"
    };
    return row.mathExamDate || fallbackBySchool[row.schoolName] || `2026-06-${String(24 + (index % 5)).padStart(2, "0")}`;
  }

  function normalizeMathSubject(subject = "") {
    const value = String(subject || "").trim();
    if (!value) return "수학";
    if (value === "공통수학1" || value === "공통수학2") return "수학";
    return value;
  }

  function createMathExamEntry(row = {}, index = 0) {
    const baseId = safeIdPart(row.examPrepId || `${row.schoolName}_${row.grade}_${row.subject}`);
    return {
      id: `math_${baseId}_${index}`,
      date: row.mathExamDate || "",
      grade: row.grade || "",
      subject: normalizeMathSubject(row.subject),
      label: ""
    };
  }

  function normalizeMathExamEntries(row = {}, { includeBlank = false } = {}) {
    const entries = Array.isArray(row.mathExamDates) ? row.mathExamDates : [];
    const normalized = entries
      .map((entry, index) => ({
        id: entry.id || `math_${safeIdPart(row.examPrepId || row.schoolName || "exam")}_${index}`,
        date: entry.date || "",
        grade: entry.grade || row.grade || "",
        subject: entry.subject || normalizeMathSubject(row.subject),
        label: entry.label || "",
        sourceSchoolEventId: entry.sourceSchoolEventId || ""
      }))
      .filter((entry) => includeBlank || entry.date || entry.label);
    if (normalized.length) return normalized;
    if (row.mathExamDate) return [createMathExamEntry(row, 0)];
    return [];
  }

  function formatShortDate(date = "") {
    return date ? date.slice(5).replace("-", ".") : "날짜 미입력";
  }

  function formatMathExamEntryLabel(row = {}, entry = {}) {
    const explicitLabel = String(entry.label || "").trim();
    if (explicitLabel) return joinCalendarLabel(row.schoolName, explicitLabel);
    const subject = entry.subject || normalizeMathSubject(row.subject);
    const grade = entry.grade || row.grade || "";
    const detail = [grade, subject].filter(Boolean).join(" ").trim();
    return joinCalendarLabel(row.schoolName || "학교 미입력", detail, row.examName || "수학시험");
  }

  function getExamPrepLogicalKey(row = {}) {
    return [
      row.examCycle || currentExamCycle,
      normalizeSchoolName(row.schoolName || "") || compactCalendarLabel(row.schoolName || "학교 미입력"),
      compactCalendarLabel(row.grade || "학년 미입력"),
      compactCalendarLabel(row.subject || "공통수학1")
    ].join("|");
  }

  function getExamPrepRowCompleteness(row = {}) {
    return [
      row.publisher,
      row.examPeriod,
      row.mathExamDate,
      row.scope,
      row.subTextbook,
      row.review,
      row.revisedReview,
      row.specialNote,
      row.memo,
      ...(normalizeMathExamEntries(row).flatMap((entry) => [entry.date, entry.subject, entry.label]))
    ].filter((value) => String(value ?? "").trim()).length;
  }

  function isPlaceholderExamPrepRow(row = {}) {
    return String(row.examPrepId || "").endsWith("_textbook") || !String(row.publisher || "").trim();
  }

  function chooseRepresentativeExamPrepRow(currentRow, candidateRow) {
    if (Boolean(currentRow.isExcluded) !== Boolean(candidateRow.isExcluded)) {
      return currentRow.isExcluded ? currentRow : candidateRow;
    }
    const currentScore = getExamPrepRowCompleteness(currentRow);
    const candidateScore = getExamPrepRowCompleteness(candidateRow);
    if (candidateScore !== currentScore) return candidateScore > currentScore ? candidateRow : currentRow;
    const currentPlaceholder = isPlaceholderExamPrepRow(currentRow);
    const candidatePlaceholder = isPlaceholderExamPrepRow(candidateRow);
    if (currentPlaceholder !== candidatePlaceholder) return candidatePlaceholder ? currentRow : candidateRow;
    return String(candidateRow.updatedAt || "") > String(currentRow.updatedAt || "") ? candidateRow : currentRow;
  }

  function dedupeExamPrepRowsForDisplay(rows = [], { includeExcluded = false } = {}) {
    const grouped = new Map();
    rows.filter((row) => includeExcluded || !row.isExcluded).forEach((row) => {
      const key = getExamPrepLogicalKey(row);
      const previous = grouped.get(key);
      grouped.set(key, previous ? chooseRepresentativeExamPrepRow(previous, row) : row);
    });
    return [...grouped.values()];
  }

  function syncPrimaryMathExamDate(entries = []) {
    return entries.find((entry) => entry.date)?.date || "";
  }

  function examCycleTermKey(examCycle = "") {
    const [year, semester] = String(examCycle).split("-");
    return [year || "", semester || ""].join("-");
  }

  function examPublisherLinkKey(row) {
    return [
      examCycleTermKey(row.examCycle),
      normalizeSchoolName(row.schoolName || "") || "학교미입력",
      compactCalendarLabel(normalizeGradeLabel(row.grade || "")) || "학년미입력",
      compactCalendarLabel(row.subject || "공통수학1")
    ].join("_");
  }

  function findLinkedPublisher(existingRows, draftRow) {
    const linkKey = examPublisherLinkKey(draftRow);
    return existingRows.find((row) => examPublisherLinkKey(row) === linkKey && row.publisher)?.publisher ?? "";
  }

  function syncPublisherAcrossExamTerm(rows, sourceRow) {
    if (!sourceRow?.publisher) return rows;
    const linkKey = examPublisherLinkKey(sourceRow);
    return rows.map((row) =>
      row.examPrepId !== sourceRow.examPrepId && examPublisherLinkKey(row) === linkKey
        ? { ...row, publisher: sourceRow.publisher }
        : row
    );
  }

  function buildExamPrepRowsFromStudents(students, examCycle, classTemplateId = "", existingRows = []) {
    const classStudents = classTemplateId
      ? students.filter((student) => (student.status ?? "active") === "active" && student.defaultClassTemplateId === classTemplateId)
      : students.filter((student) => (student.status ?? "active") === "active");
    const seen = new Set();

    return classStudents
      .map((student) => {
        const schoolName = student.schoolName || "학교 미입력";
        const grade = student.grade || "학년 미입력";
        const subject = "공통수학1";
        const draftRow = { examCycle, schoolName, grade, subject };
        const key = examPublisherLinkKey(draftRow);
        if (seen.has(key)) return null;
        seen.add(key);

        return createStudentExamPrepRow({
          examPrepId: `exam_prep_${safeIdPart(examCycle)}_${safeIdPart(schoolName)}_${safeIdPart(grade)}_${safeIdPart(subject)}`,
          examCycle,
          schoolName,
          grade,
          subject,
          publisher: findLinkedPublisher(existingRows, draftRow) || student.textbook || ""
        });
      })
      .filter(Boolean);
  }

  function createSchoolEventFromExamPrepRow(row, index = 0) {
    const schoolName = row.schoolName || "학교 미입력";
    return {
      eventId: `event_exam_${row.examPrepId ?? index}`,
      date: getDefaultMathExamDate(row, index),
      schoolName,
      title: `${examCycleLabel(row.examCycle ?? currentExamCycle)} 수학시험`,
      type: "mathExam",
      color: getSchoolCalendarSchoolColor(schoolName)
    };
  }

  function createDefaultSchoolEvents(rows) {
    return rows.filter((row) => !row.isExcluded).map((row, index) => createSchoolEventFromExamPrepRow(row, index));
  }

  function getSchoolCalendarTargetRows(rows = [], event = {}) {
    const eventGrade = normalizeGradeLabel(event.grade || "");
    const eventSubject = normalizeMathSubject(event.examSubject || event.subject || "");
    const hasSpecificSubject = event.type === "mathExam" && eventSubject && !["수학", "수학시험"].includes(eventSubject);
    return rows.filter((row) => {
      const rowSchool = row.schoolName || "";
      const eventSchool = event.schoolName || "";
      if ((rowSchool || eventSchool) && !schoolNamesMatch(rowSchool, eventSchool, { allowBlank: false })) return false;
      if (event.examCycle && row.examCycle !== event.examCycle) return false;
      if (!eventGrade) return true;
      if (normalizeGradeLabel(row.grade || "") !== eventGrade) return false;
      if (hasSpecificSubject && normalizeMathSubject(row.subject || "") !== eventSubject) return false;
      return true;
    });
  }

  function upsertMathExamEntryFromSchoolEvent(row = {}, event = {}) {
    const entries = normalizeMathExamEntries(row);
    const subject = normalizeMathSubject(event.examSubject || event.title || "수학");
    const sourceEventId = event.eventId || "";
    const existingIndex = entries.findIndex((entry) =>
      (sourceEventId && entry.sourceSchoolEventId === sourceEventId) ||
      (entry.date === event.date && normalizeMathSubject(entry.subject) === subject)
    );
    const nextEntry = {
      ...(existingIndex >= 0 ? entries[existingIndex] : {}),
      id: existingIndex >= 0
        ? entries[existingIndex].id
        : `math_${safeIdPart(row.examPrepId || row.schoolName || "exam")}_${safeIdPart(sourceEventId || event.date || "date")}`,
      date: event.date || "",
      grade: event.grade || row.grade || "",
      subject,
      label: event.examSubject || "수학시험",
      sourceSchoolEventId: sourceEventId
    };
    return existingIndex >= 0
      ? entries.map((entry, index) => (index === existingIndex ? nextEntry : entry))
      : [...entries, nextEntry];
  }

  function isExamLinkedCalendarEvent(event = {}) {
    return event.type === "examPeriod" || event.type === "mathExam";
  }

  function getExamPeriodGroupKey(row = {}) {
    const period = parseDateRangeText(row.examPeriod);
    return [
      row.schoolName || "학교 미입력",
      row.examCycle || currentExamCycle,
      period?.date || "",
      period?.endDate || ""
    ].join("|");
  }

  function groupExamPeriodEventsForMonth(events = []) {
    const grouped = new Map();
    events.forEach((event) => {
      if (event.type !== "examPeriod") return;
      const schoolKey = normalizeSchoolName(event.schoolName || "") || "학교미입력";
      const key = [
        event.examCycle || currentExamCycle,
        schoolKey,
        event.date || "",
        event.endDate || event.date || ""
      ].join("|");
      const existing = grouped.get(key) ?? {
        ...event,
        eventId: `month_period_${safeIdPart(key)}`,
        title: "",
        color: getSchoolCalendarEventColor(event),
        schoolNames: new Set(),
        type: "examPeriod"
      };
      if (event.schoolName) existing.schoolNames.add(event.schoolName);
      existing.title = `${event.schoolName || "학교 미입력"} ${examCycleLabel(event.examCycle || currentExamCycle)} 시험기간`;
      grouped.set(key, existing);
    });
    return [...grouped.values()].map((event) => ({
      ...event,
      schoolNames: [...event.schoolNames]
    }));
  }

  function getMonthDateRange(monthString = today) {
    const [yearText, monthText] = String(monthString).slice(0, 7).split("-");
    const year = Number(yearText) || new Date(`${today}T00:00:00+09:00`).getFullYear();
    const month = Number(monthText) || 1;
    const start = `${year}-${String(month).padStart(2, "0")}-01`;
    const endDate = new Date(Date.UTC(year, month, 0));
    const end = `${endDate.getUTCFullYear()}-${String(endDate.getUTCMonth() + 1).padStart(2, "0")}-${String(endDate.getUTCDate()).padStart(2, "0")}`;
    return { end, start };
  }

  function eventIntersectsDateRange(event = {}, start = "", end = "") {
    const eventStart = event.date || "";
    const eventEnd = event.endDate || event.date || "";
    if (!eventStart || !start || !end) return false;
    return eventStart <= end && eventEnd >= start;
  }

  function eventIntersectsMonth(event = {}, monthString = today) {
    const range = getMonthDateRange(monthString);
    return eventIntersectsDateRange(event, range.start, range.end);
  }

  function createSchoolCalendarPeriodCards(periodEvents = [], mathExamEvents = [], monthString = today) {
    return groupExamPeriodEventsForMonth(periodEvents.filter((event) => eventIntersectsMonth(event, monthString)))
      .map((event) => {
        const schools = Array.isArray(event.schoolNames) && event.schoolNames.length ? event.schoolNames : [event.schoolName].filter(Boolean);
        const relatedMathExamEvents = mathExamEvents
          .filter((mathEvent) => {
            const sameSchool = schools.length === 0 || schools.some((schoolName) => schoolNamesMatch(mathEvent.schoolName, schoolName, { allowBlank: false }));
            const sameCycle = !event.examCycle || !mathEvent.examCycle || event.examCycle === mathEvent.examCycle;
            return sameSchool && sameCycle && isDateWithinEvent(mathEvent.date, event);
          })
          .sort((a, b) => String(a.date || "").localeCompare(String(b.date || "")) || formatCalendarSummaryLabel(a).localeCompare(formatCalendarSummaryLabel(b)));
        return {
          ...event,
          relatedMathExamEvents
        };
      });
  }

  function buildExamCalendarEvents(rows) {
    const periodKeys = new Set();
    return dedupeExamPrepRowsForDisplay(rows).flatMap((row) => {
      const schoolName = row.schoolName || "학교 미입력";
      const schoolColor = getSchoolCalendarSchoolColor(schoolName);
      const base = {
        schoolName,
        grade: row.grade || "",
        examCycle: row.examCycle || currentExamCycle,
        examSubject: "수학",
        memo: "시험관리 탭에서 연동된 일정입니다.",
        derived: true,
        examPrepId: row.examPrepId
      };
      const events = [];
      const period = parseDateRangeText(row.examPeriod);
      if (period) {
        const periodKey = getExamPeriodGroupKey(row);
        if (!periodKeys.has(periodKey)) {
          periodKeys.add(periodKey);
          events.push({
            ...base,
            eventId: `derived_period_${safeIdPart(periodKey)}`,
            examPeriodGroupKey: periodKey,
            date: period.date,
            endDate: period.endDate,
            title: `${row.schoolName || "학교 미입력"} ${row.grade || ""} ${examCycleLabel(row.examCycle ?? currentExamCycle)} 시험기간`.trim(),
            type: "examPeriod",
            color: schoolColor
          });
        }
      }
      const mathEntries = normalizeMathExamEntries(row);
      const emittedMathKeys = new Set();
      const addMathExamEvent = (entry, index) => {
        if (!entry.date) return;
        const mathKey = `${entry.date}:${compactCalendarLabel(entry.label || entry.subject || "")}`;
        if (emittedMathKeys.has(mathKey)) return;
        emittedMathKeys.add(mathKey);
        events.push({
          ...base,
          grade: entry.grade || row.grade || "",
          examSubject: entry.label || entry.subject || row.subject || "수학",
          eventId: `derived_math_${row.examPrepId}_${entry.id || index}`,
          date: entry.date,
          endDate: "",
          title: formatMathExamEntryLabel(row, entry),
          type: "mathExam",
          mathExamEntryId: entry.id,
          mathExamEntryIndex: index,
          color: schoolColor
        });
      };
      mathEntries.forEach(addMathExamEvent);
      if (!emittedMathKeys.size && row.mathExamDate) {
        addMathExamEvent(createMathExamEntry(row, 0), 0);
      }
      return events;
    });
  }

  return Object.freeze({
    buildExamCalendarEvents,
    buildExamPrepRowsFromStudents,
    chooseRepresentativeExamPrepRow,
    createDefaultSchoolEvents,
    createMathExamEntry,
    createSchoolCalendarPeriodCards,
    createSchoolEventFromExamPrepRow,
    currentExamCycle,
    dedupeExamPrepRowsForDisplay,
    examCycleLabel,
    examCycleTermKey,
    examPrepTextbookBySchoolGrade,
    examPublisherLinkKey,
    eventIntersectsDateRange,
    eventIntersectsMonth,
    findLinkedPublisher,
    getDefaultExamCycleForDate,
    getDefaultExamPeriodRange,
    getDefaultExamPeriodText,
    getDefaultMathExamDate,
    getExamPeriodGroupKey,
    getExamPrepLogicalKey,
    getExamPrepRowCompleteness,
    getExamPrepSchoolGradeKey,
    getMonthDateRange,
    getSchoolCalendarTargetRows,
    getSchoolGradeKey,
    getStudentSchoolGradeKey,
    getTextbookFromExamPrep,
    groupExamPeriodEventsForMonth,
    inferExamCycleFromPrepId,
    isExamLinkedCalendarEvent,
    isPlaceholderExamPrepRow,
    normalizeExamPrepRowCycle,
    normalizeExamPrepRows,
    normalizeMathExamEntries,
    normalizeMathSubject,
    syncPrimaryMathExamDate,
    syncPublisherAcrossExamTerm,
    upsertMathExamEntryFromSchoolEvent,
    formatMathExamEntryLabel,
    formatShortDate
  });
}
