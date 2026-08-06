import {
  isMakeupSettlementLesson,
  isSpecialLectureSettlementLesson
} from "../settlements/monthlySettlement.js";
import {
  getStudentScheduleForLesson,
  isStudentScheduledForLesson
} from "../../shared/utils/studentSchedule.js";

const canceledStatuses = new Set(["canceled", "deleted"]);
const attendanceLabels = {
  absent: "결석",
  checkin: "출석",
  checkout: "출석",
  excused: "인정결석",
  late: "지각",
  pending: "출결 미입력",
  present: "출석",
  unexcused: "결석"
};
const weekdayLabels = ["일", "월", "화", "수", "목", "금", "토"];
const defaultPdfSections = { calendar: true, changes: true, table: true };

function text(value = "") {
  return String(value ?? "").trim();
}

function escapeHtml(value = "") {
  return text(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function formatStudentMonthlyReportAttendance(attendance = "") {
  return attendance === "출결 미입력" ? "" : text(attendance);
}

function getKoreaDateInput(now = new Date()) {
  const values = new Intl.DateTimeFormat("en-CA", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Seoul",
    year: "numeric"
  }).formatToParts(now).reduce((result, part) => ({ ...result, [part.type]: part.value }), {});
  return `${values.year}-${values.month}-${values.day}`;
}

function formatDateLabel(date = "") {
  const match = text(date).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return text(date) || "날짜 미입력";
  const parsed = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  return `${Number(match[2])}.${Number(match[3])}(${weekdayLabels[parsed.getUTCDay()]})`;
}

export function formatStudentMonthlyReportMonth(monthKey = "") {
  const match = text(monthKey).match(/^(\d{4})-(\d{2})$/);
  return match ? `${match[1]}년 ${Number(match[2])}월` : text(monthKey);
}

function getLessonTypeLabel(lesson = {}) {
  if (isSpecialLectureSettlementLesson(lesson)) return "특강";
  if (isMakeupSettlementLesson(lesson)) return "보강";
  return ({
    closure: "휴강",
    exam: "평가",
    examPrep: "시험대비",
    preExam: "직전수업",
    regular: "정규수업"
  })[lesson.lessonType] ?? "정규수업";
}

function getAttendanceLabel(record = null) {
  if (!record) return "출결 미입력";
  return attendanceLabels[text(record.attendanceStatus)] ?? "출결 미입력";
}

function getEffectiveTime(lesson = {}, student = {}) {
  const schedule = getStudentScheduleForLesson(lesson, student);
  return {
    changed: Boolean(schedule?.startTime && schedule?.endTime) &&
      (schedule.startTime !== lesson.startTime || schedule.endTime !== lesson.endTime),
    endTime: schedule?.endTime || lesson.endTime || "",
    startTime: schedule?.startTime || lesson.startTime || ""
  };
}

function buildChangeReason(lesson = {}, student = {}, effectiveTime = {}) {
  if (canceledStatuses.has(lesson.status)) return "취소된 수업";
  if (lesson.lessonType === "closure") return "휴강";
  if (isMakeupSettlementLesson(lesson)) return lesson.lessonTopic === "휴강 보충" ? "휴강 보충" : "보강·추가 수업";
  if (isSpecialLectureSettlementLesson(lesson)) return "특강 일정";
  if (["preExam", "examPrep"].includes(lesson.lessonType)) return "시험대비 일정";
  if (lesson.lessonType === "exam") return "평가 일정";
  if (lesson.classTemplateId && student.defaultClassTemplateId && lesson.classTemplateId !== student.defaultClassTemplateId) {
    return "다른 반·별도 수업";
  }
  if (!lesson.classTemplateId) return "별도 수업";
  if (effectiveTime.changed) return `개별 시간 ${effectiveTime.startTime}-${effectiveTime.endTime}`;
  return "";
}

function isStudentLesson(lesson = {}, student = {}) {
  return Array.isArray(lesson.studentIds) &&
    lesson.studentIds.includes(student.studentId) &&
    isStudentScheduledForLesson(lesson, student);
}

function compareRows(left, right) {
  return `${left.date} ${left.startTime} ${left.lessonId}`.localeCompare(`${right.date} ${right.startTime} ${right.lessonId}`, "ko");
}

function createAttendanceCounts(rows = []) {
  return rows.reduce((counts, row) => {
    counts.total += 1;
    if (row.attendance === "출석") counts.present += 1;
    else if (row.attendance === "지각") counts.late += 1;
    else if (["결석", "인정결석"].includes(row.attendance)) counts.absent += 1;
    else counts.pending += 1;
    return counts;
  }, { absent: 0, late: 0, pending: 0, present: 0, total: 0 });
}

function createCalendarWeeks(rows = [], monthKey = "") {
  const match = text(monthKey).match(/^(\d{4})-(\d{2})$/);
  if (!match) return [];
  const year = Number(match[1]);
  const monthIndex = Number(match[2]) - 1;
  const firstWeekday = new Date(Date.UTC(year, monthIndex, 1)).getUTCDay();
  const dayCount = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
  const rowMap = new Map();
  for (const row of rows) {
    const current = rowMap.get(row.date) ?? [];
    current.push(row);
    rowMap.set(row.date, current);
  }
  const cells = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: dayCount }, (_, index) => {
      const day = index + 1;
      const date = `${match[1]}-${match[2]}-${String(day).padStart(2, "0")}`;
      return { date, day, rows: rowMap.get(date) ?? [] };
    })
  ];
  while (cells.length % 7) cells.push(null);
  return Array.from({ length: cells.length / 7 }, (_, index) => cells.slice(index * 7, index * 7 + 7));
}

export function buildStudentMonthlyReportModel({
  lessons = [],
  monthKey = "",
  now = new Date(),
  records = [],
  student = {}
} = {}) {
  const today = getKoreaDateInput(now);
  const recordMap = new Map(records
    .filter((record) => record.studentId === student.studentId)
    .map((record) => [record.lessonId, record]));
  const rows = lessons
    .filter((lesson) => text(lesson.date).startsWith(`${monthKey}-`))
    .filter((lesson) => isStudentLesson(lesson, student))
    .map((lesson) => {
      const effectiveTime = getEffectiveTime(lesson, student);
      const record = recordMap.get(lesson.lessonId) ?? null;
      return {
        attendance: getAttendanceLabel(record),
        changeReason: buildChangeReason(lesson, student, effectiveTime),
        className: lesson.className || lesson.lessonTopic || getLessonTypeLabel(lesson),
        date: lesson.date,
        dateLabel: formatDateLabel(lesson.date),
        endTime: effectiveTime.endTime,
        hasRecord: Boolean(record),
        isCanceled: canceledStatuses.has(lesson.status),
        isFuture: text(lesson.date) > today,
        lessonId: lesson.lessonId,
        lessonType: lesson.lessonType || "class",
        startTime: effectiveTime.startTime,
        timeLabel: [effectiveTime.startTime, effectiveTime.endTime].filter(Boolean).join("-") || "시간 미입력",
        typeLabel: getLessonTypeLabel(lesson)
      };
    })
    .sort(compareRows);
  const plannedRows = rows.filter((row) => !row.isCanceled && row.lessonType !== "closure");
  const actualRows = plannedRows.filter((row) => row.hasRecord || !row.isFuture);
  const changeRows = rows.filter((row) => row.changeReason);
  const attendance = createAttendanceCounts(actualRows);
  return {
    actualRows,
    attendance,
    calendarWeeks: createCalendarWeeks(rows, monthKey),
    changeRows,
    monthKey,
    monthLabel: formatStudentMonthlyReportMonth(monthKey),
    plannedRows,
    rows,
    student: {
      grade: student.grade || "",
      name: student.name || "학생",
      schedule: student.scheduleOverride || "기본 반 스케줄",
      schoolName: student.schoolName || ""
    },
    summary: {
      actual: actualRows.filter((row) => row.hasRecord && row.attendance !== "출결 미입력").length,
      changes: changeRows.length,
      planned: plannedRows.length
    }
  };
}

function formatReportRow(row, { includeClassName = false } = {}) {
  const parts = [row.dateLabel, row.timeLabel, row.typeLabel];
  if (includeClassName && row.className !== row.typeLabel) parts.push(row.className);
  return parts.join(" · ");
}

export function buildStudentMonthlyReportText(model = {}, { audience = "parent", note = "" } = {}) {
  const director = audience === "director";
  const lines = [
    `[${model.student?.name || "학생"} ${model.monthLabel || "월간"} 수업 안내]`,
    "",
    "■ 예정 수업",
    ...(model.plannedRows?.length
      ? model.plannedRows.map((row) => [
          formatReportRow(row, { includeClassName: director }),
          director ? formatStudentMonthlyReportAttendance(row.attendance) : ""
        ].filter(Boolean).join(" · "))
      : ["예정된 수업이 없습니다."]),
    "",
    "■ 실제 출결",
    ...(model.actualRows?.length
      ? model.actualRows.map((row) => [
          formatReportRow(row, { includeClassName: director }),
          formatStudentMonthlyReportAttendance(row.attendance)
        ].filter(Boolean).join(" · "))
      : ["확인할 출결이 없습니다."]),
    "",
    "■ 변동사항",
    ...(model.changeRows?.length
      ? model.changeRows.map((row) => `${row.dateLabel} · ${row.changeReason} · ${row.timeLabel}`)
      : ["별도 변동사항이 없습니다."])
  ];
  if (text(note)) lines.push("", director ? "■ 원장님 공유 메모" : "■ 안내 메모", text(note));
  if (director) {
    lines.splice(1, 0, `${[model.student?.schoolName, model.student?.grade].filter(Boolean).join(" · ") || "학교·학년 미입력"} · ${model.student?.schedule || "기본 반 스케줄"}`);
  }
  return lines.join("\n");
}

function rowsToHtml(rows = [], { emptyText = "내역이 없습니다.", includeAttendance = false, includeClassName = false, includeReason = false } = {}) {
  if (!rows.length) return `<tr><td colspan="${3 + Number(includeAttendance) + Number(includeReason)}">${escapeHtml(emptyText)}</td></tr>`;
  return rows.map((row) => `<tr><td>${escapeHtml(row.dateLabel)}</td><td>${escapeHtml(row.timeLabel)}</td><td>${escapeHtml(`${row.typeLabel}${includeClassName && row.className !== row.typeLabel ? ` · ${row.className}` : ""}`)}</td>${includeAttendance ? `<td>${escapeHtml(formatStudentMonthlyReportAttendance(row.attendance))}</td>` : ""}${includeReason ? `<td>${escapeHtml(row.changeReason)}</td>` : ""}</tr>`).join("");
}

function calendarToHtml(model = {}, { includeClassName = false } = {}) {
  const weeks = model.calendarWeeks ?? [];
  if (!weeks.length) return '<p class="empty">달력을 만들 수 없습니다.</p>';
  const weekdayHeader = weekdayLabels.map((label) => `<div class="calendarWeekday">${label}</div>`).join("");
  const cells = weeks.flat().map((cell) => {
    if (!cell) return '<div class="calendarDay emptyDay"></div>';
    const lessons = cell.rows.map((row) => {
      const className = includeClassName && row.className !== row.typeLabel ? ` · ${row.className}` : "";
      const stateClass = row.isCanceled ? " canceled" : row.attendance === "출석" ? " present" : row.attendance === "지각" ? " late" : "";
      const attendance = formatStudentMonthlyReportAttendance(row.attendance);
      return `<div class="calendarLesson${stateClass}"><b>${escapeHtml(row.startTime || "--:--")}</b> ${escapeHtml(`${row.typeLabel}${className}`)}${attendance ? `<small>${escapeHtml(attendance)}</small>` : ""}</div>`;
    }).join("");
    return `<div class="calendarDay"><strong>${cell.day}</strong>${lessons}</div>`;
  }).join("");
  return `<div class="calendarGrid">${weekdayHeader}${cells}</div>`;
}

function normalizePdfSections(sections = {}) {
  return {
    calendar: sections.calendar ?? defaultPdfSections.calendar,
    changes: sections.changes ?? defaultPdfSections.changes,
    table: sections.table ?? defaultPdfSections.table
  };
}

export function openStudentMonthlyReportPdf(model = {}, { audience = "parent", note = "", sections = defaultPdfSections } = {}) {
  const popup = window.open("", "_blank", "width=960,height=760");
  if (!popup) throw new Error("PDF 인쇄 창을 열지 못했습니다. 팝업 차단을 해제한 뒤 다시 시도해 주세요.");
  popup.opener = null;
  const director = audience === "director";
  const included = normalizePdfSections(sections);
  const studentMeta = [model.student?.schoolName, model.student?.grade].filter(Boolean).join(" · ") || "학교·학년 미입력";
  const noteHtml = text(note) ? `<section><h2>${director ? "공유 메모" : "안내 메모"}</h2><div class="note">${escapeHtml(note)}</div></section>` : "";
  const calendarHtml = included.calendar ? `<section><h2>월간 달력</h2>${calendarToHtml(model, { includeClassName: director })}</section>` : "";
  const tableHtml = included.table ? `<section><h2>수업·출결 표</h2><table><thead><tr><th>날짜</th><th>시간</th><th>수업</th><th>출결</th></tr></thead><tbody>${rowsToHtml(model.rows, { emptyText: "표시할 수업이 없습니다.", includeAttendance: true, includeClassName: director })}</tbody></table></section>` : "";
  const changesHtml = included.changes ? `<section><h2>변동사항</h2><table><thead><tr><th>날짜</th><th>시간</th><th>수업</th><th>사유</th></tr></thead><tbody>${rowsToHtml(model.changeRows, { emptyText: "별도 변동사항이 없습니다.", includeClassName: director, includeReason: true })}</tbody></table></section>` : "";
  popup.document.write(`<!doctype html><html lang="ko"><head><meta charset="utf-8"><title>${escapeHtml(model.student?.name)} ${escapeHtml(model.monthLabel)} 월간 수업 안내</title><style>@page{size:A4;margin:12mm}body{font-family:Arial,'Malgun Gothic',sans-serif;color:#172554;font-size:10px;line-height:1.45}h1{font-size:22px;margin:0 0 12px}.meta{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;background:#f8fbff;border:1px solid #dbeafe;padding:10px}.meta b{color:#1d4ed8}h2{font-size:14px;border-bottom:1px solid #bfdbfe;padding-bottom:4px;margin:18px 0 7px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #cbd5e1;padding:6px;vertical-align:top}th{background:#eff6ff}section{break-inside:avoid}.calendarGrid{border-left:1px solid #cbd5e1;border-top:1px solid #cbd5e1;display:grid;grid-template-columns:repeat(7,1fr)}.calendarWeekday,.calendarDay{border-bottom:1px solid #cbd5e1;border-right:1px solid #cbd5e1}.calendarWeekday{background:#eff6ff;font-weight:800;padding:4px;text-align:center}.calendarDay{min-height:70px;padding:4px}.calendarDay>strong{display:block;margin-bottom:3px}.emptyDay{background:#f8fafc}.calendarLesson{background:#eff6ff;border-radius:3px;margin:2px 0;padding:2px 3px}.calendarLesson small{display:block;color:#64748b}.calendarLesson.present{background:#ecfdf5}.calendarLesson.late{background:#fff7ed}.calendarLesson.canceled{text-decoration:line-through}.note{white-space:pre-wrap;background:#fffbeb;border:1px solid #fde68a;padding:10px}</style></head><body><h1>${escapeHtml(model.student?.name)} ${escapeHtml(model.monthLabel)} 월간 수업 안내</h1><div class="meta"><div><b>학생</b> ${escapeHtml(model.student?.name)}</div><div><b>학교·학년</b> ${escapeHtml(studentMeta)}</div>${director ? `<div><b>개별 스케줄</b> ${escapeHtml(model.student?.schedule)}</div><div><b>출결 집계</b> 출석 ${model.attendance?.present ?? 0} · 지각 ${model.attendance?.late ?? 0} · 결석 ${model.attendance?.absent ?? 0}</div>` : ""}</div>${calendarHtml}${tableHtml}${changesHtml}${noteHtml}<script>window.onload=()=>window.print()</script></body></html>`);
  popup.document.close();
}
