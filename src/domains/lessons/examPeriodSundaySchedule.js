import { createExamPrepStudentRows, getExamPrepSourceItems, groupExamPrepStudentsBySchool } from "./examPrepLessonPresentation.js";

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

function isSundayDate(date = "") {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text(date));
  if (!match) return false;
  const parsed = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  return parsed.getUTCDay() === 0;
}

function formatDateLabel(date = "") {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text(date));
  if (!match) return text(date) || "날짜 미입력";
  return `${Number(match[2])}.${Number(match[3])}(일)`;
}

export function buildExamPeriodSundayScheduleModel({ isExamPrepLesson, lessons = [], students = [] } = {}) {
  const sundayLessons = lessons
    .filter((lesson) => isExamPrepLesson(lesson) && isSundayDate(lesson.date))
    .sort((left, right) => text(left.date).localeCompare(text(right.date)) || text(left.startTime).localeCompare(text(right.startTime)));

  const dateOrder = [];
  const byDate = new Map();
  sundayLessons.forEach((lesson) => {
    if (!byDate.has(lesson.date)) {
      byDate.set(lesson.date, []);
      dateOrder.push(lesson.date);
    }
    byDate.get(lesson.date).push(lesson);
  });

  const dates = dateOrder.map((date) => {
    const lessonsForDate = byDate.get(date);
    const lessonBlocks = lessonsForDate.map((lesson) => {
      const rows = createExamPrepStudentRows(lesson, students);
      return {
        lessonId: lesson.lessonId,
        schoolGroups: groupExamPrepStudentsBySchool(rows),
        sourceLabel: getExamPrepSourceItems(lesson).join(" · ") || lesson.className || "시험대비",
        studentCount: rows.length,
        timeLabel: `${lesson.startTime || "--:--"}-${lesson.endTime || "--:--"}`
      };
    });
    return {
      date,
      dateLabel: formatDateLabel(date),
      lessons: lessonBlocks,
      studentCount: lessonBlocks.reduce((sum, block) => sum + block.studentCount, 0)
    };
  });

  const totalStudents = new Set(sundayLessons.flatMap((lesson) => Array.isArray(lesson.studentIds) ? lesson.studentIds : [])).size;

  return {
    dates,
    totalSessions: sundayLessons.length,
    totalStudents
  };
}

export function hasExamPeriodSundaySchedule({ isExamPrepLesson, lessons = [] } = {}) {
  return lessons.some((lesson) => isExamPrepLesson(lesson) && isSundayDate(lesson.date));
}

function schoolGroupsToHtml(schoolGroups = []) {
  if (!schoolGroups.length) {
    return '<tr><td colspan="2">배정된 학생이 없습니다.</td></tr>';
  }
  return schoolGroups
    .map((group) => `<tr><td>${escapeHtml(group.label)}</td><td>${group.students.map((student) => escapeHtml(student.name)).join(", ")}</td></tr>`)
    .join("");
}

export function openExamPeriodSundaySchedulePdf(model = {}, { title = "일요시험대비 일정표" } = {}) {
  const popup = window.open("", "_blank", "width=960,height=760");
  if (!popup) throw new Error("PDF 인쇄 창을 열지 못했습니다. 팝업 차단을 해제한 뒤 다시 시도해 주세요.");
  popup.opener = null;
  const dateSectionsHtml = model.dates?.length
    ? model.dates.map((day) => `<section><h2>${escapeHtml(day.dateLabel)} · ${day.studentCount}명</h2>${day.lessons.map((lesson) => `<div class="lessonBlock"><div class="lessonMeta"><b>${escapeHtml(lesson.timeLabel)}</b> ${escapeHtml(lesson.sourceLabel)} · ${lesson.studentCount}명</div><table><thead><tr><th>학교</th><th>학생</th></tr></thead><tbody>${schoolGroupsToHtml(lesson.schoolGroups)}</tbody></table></div>`).join("")}</section>`).join("")
    : '<p class="empty">등록된 일요시험대비 일정이 없습니다.</p>';
  popup.document.open();
  popup.document.write(`<!doctype html><html lang="ko"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title><style>@page{size:A4;margin:12mm}body{font-family:Arial,'Malgun Gothic',sans-serif;color:#172554;font-size:10px;line-height:1.45}h1{font-size:22px;margin:0 0 12px}.printActions{display:flex;justify-content:flex-end;margin:0 0 12px}.printActions button{background:#1d4ed8;border:0;border-radius:6px;color:#fff;font:inherit;font-weight:700;padding:8px 14px}.meta{background:#f8fbff;border:1px solid #dbeafe;color:#1d4ed8;font-weight:800;padding:8px 10px;margin:0 0 12px}h2{font-size:14px;border-bottom:1px solid #bfdbfe;padding-bottom:4px;margin:18px 0 7px}.lessonMeta{color:#1d4ed8;font-weight:800;margin:0 0 4px}table{width:100%;border-collapse:collapse;margin:0 0 10px}th,td{border:1px solid #cbd5e1;padding:6px;vertical-align:top}th{background:#eff6ff;width:110px}section{break-inside:avoid}.empty{color:#64748b}@media print{.printActions{display:none}}</style></head><body><div class="printActions"><button id="exam-period-sunday-schedule-print" type="button">인쇄하기</button></div><h1>${escapeHtml(title)}</h1><div class="meta">총 ${model.totalSessions ?? 0}회 · 연인원 ${model.totalStudents ?? 0}명</div>${dateSectionsHtml}</body></html>`);
  popup.document.close();
  popup.document.getElementById("exam-period-sunday-schedule-print")?.addEventListener("click", () => popup.print());
  popup.focus();
  popup.print();
  return popup;
}
