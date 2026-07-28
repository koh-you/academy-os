function text(value = "") {
  return String(value ?? "").trim();
}

function escapeHtml(value = "") {
  return text(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function attendanceLabel(record = {}) {
  return ({ present: "출석", late: "지각", absent: "결석", excused: "인정결석", pending: "대기" })[record.attendanceStatus] ?? "기록 없음";
}

function homeworkLabel(record = {}, homework = null) {
  const status = record.assignmentStatus || record.homeworkStatus || homework?.status || "";
  if (["complete", "done", "completed", "verified", "complete_thorough"].includes(status)) return "완료";
  if (status === "partial_80") return "부분 완료 (80%)";
  if (status === "partial_50") return "부분 완료 (50%)";
  if (["partial", "partial_complete"].includes(status)) return "부분 완료";
  if (status === "too_hard") return "미완료 · 난이도 높음";
  if (["incomplete", "not_started", "missing", "failed", "not_done"].includes(status)) return "미완료";
  if (status === "not_checked") return "확인 필요";
  return homework?.title ? "확인 필요" : "미입력";
}

export function getStudentHandoverTitle(student = {}) {
  return student.withdrawalReason === "class_move" ? "반이동생 인수인계서" : "퇴원생 인수인계서";
}

export function buildStudentHandoverPdfModel({
  comment = "",
  homeworks = [],
  lessons = [],
  records = [],
  student = {}
} = {}) {
  const withdrawalDate = text(student.withdrawnAt).slice(0, 10);
  const lessonRows = lessons
    .filter((lesson) => (lesson.studentIds ?? []).includes(student.studentId))
    .filter((lesson) => !withdrawalDate || text(lesson.date) <= withdrawalDate)
    .sort((left, right) => text(left.date).localeCompare(text(right.date)))
    .map((lesson) => {
      const record = records.find((item) => item.lessonId === lesson.lessonId && item.studentId === student.studentId) ?? {};
      const homework = homeworks.find((item) => item.lessonId === lesson.lessonId && item.studentId === student.studentId && item.homeworkType === "next") ?? null;
      return {
        attendance: attendanceLabel(record),
        date: lesson.date,
        homework: homeworkLabel(record, homework),
        lesson: lesson.className || lesson.lessonTopic || lesson.lessonType || "수업",
        material: record.lessonMaterial || student.textbook || "-",
        nextHomework: homework?.title || record.nextHomework || "-",
        progress: record.lessonContent || record.lessonProgress || lesson.lessonTopic || "-"
      };
    });
  return { comment: text(comment), lessonRows, withdrawalDate };
}

export function openStudentHandoverPdf(model = {}, student = {}) {
  const popup = window.open("", "_blank", "width=960,height=760");
  if (!popup) throw new Error("PDF 인쇄 창을 열지 못했습니다. 팝업 차단을 해제한 뒤 다시 시도해 주세요.");
  popup.opener = null;
  const rowsHtml = model.lessonRows.length
    ? model.lessonRows.map((row) => `<tr><td>${escapeHtml(row.date)}</td><td>${escapeHtml(row.lesson)}</td><td>${escapeHtml(row.material)}</td><td>${escapeHtml(row.progress)}</td><td>${escapeHtml(row.attendance)}</td><td>${escapeHtml(row.homework)}</td><td>${escapeHtml(row.nextHomework)}</td></tr>`).join("")
    : "<tr><td colspan=\"7\">퇴원일까지 연결된 수업 기록이 없습니다.</td></tr>";
  const handoverTitle = getStudentHandoverTitle(student);
  popup.document.write(`<!doctype html><html lang="ko"><head><meta charset="utf-8"><title>${escapeHtml(student.name)} ${handoverTitle}</title><style>@page{size:A4;margin:16mm}body{font-family:Arial,'Malgun Gothic',sans-serif;color:#172554;font-size:11px;line-height:1.5}h1{font-size:22px;margin:0 0 4px}h2{font-size:14px;border-bottom:1px solid #bfdbfe;padding-bottom:4px;margin:22px 0 8px}.meta{display:grid;grid-template-columns:repeat(2,1fr);gap:5px 24px;background:#f8fbff;padding:12px;border:1px solid #dbeafe}.meta b{color:#1d4ed8}table{width:100%;border-collapse:collapse}th,td{border:1px solid #cbd5e1;padding:6px;vertical-align:top}th{background:#eff6ff}section{break-inside:avoid}.comment{white-space:pre-wrap;min-height:52px;background:#fffbeb;border:1px solid #fde68a;padding:10px}</style></head><body><h1>${handoverTitle}</h1><div class="meta"><div><b>학생</b> ${escapeHtml(student.name)}</div><div><b>학생 번호</b> ${escapeHtml(student.studentPhone || "미입력")}</div><div><b>학부모 번호</b> ${escapeHtml(student.parentPhone || "미입력")}</div><div><b>학교·학년</b> ${escapeHtml([student.schoolName, student.grade].filter(Boolean).join(" · ") || "미입력")}</div></div><section><h2>회차별 수업 및 숙제</h2><table><thead><tr><th>날짜</th><th>수업</th><th>교재</th><th>진도·강의 내용</th><th>출결</th><th>숙제</th><th>다음 숙제</th></tr></thead><tbody>${rowsHtml}</tbody></table></section><section><h2>교사 인계 코멘트</h2><div class="comment">${escapeHtml(model.comment || "코멘트 없음")}</div></section><script>window.onload=()=>window.print()</script></body></html>`);
  popup.document.close();
}
