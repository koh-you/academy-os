function text(value = "") {
  return String(value ?? "").trim();
}

function escapeHtml(value = "") {
  return text(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function phone(value = "") {
  return text(value).replaceAll(/\D/g, "");
}

function matchesStudent(source = {}, student = {}) {
  if (source.studentId && source.studentId === student.studentId) return true;
  const sourceName = text(source.studentName ?? source.name);
  if (!sourceName || sourceName !== text(student.name)) return false;
  const sourcePhones = [phone(source.studentPhone), phone(source.parentPhone)].filter(Boolean);
  const studentPhones = [phone(student.studentPhone), phone(student.parentPhone)].filter(Boolean);
  return sourcePhones.length === 0 || sourcePhones.some((value) => studentPhones.includes(value));
}

function attendanceLabel(record = {}) {
  return ({ present: "출석", late: "지각", absent: "결석", excused: "인정결석", pending: "대기" })[record.attendanceStatus] ?? "기록 없음";
}

function homeworkLabel(record = {}, homework = null) {
  const status = record.assignmentStatus || record.homeworkStatus || homework?.status || "";
  if (["complete", "done", "completed", "verified"].includes(status)) return "완료";
  if (["incomplete", "not_started", "missing", "failed"].includes(status)) return "미완료";
  return homework?.title ? "확인 필요" : "미입력";
}

function tallyLines(student, intakeApplicants = [], specialLectureApplications = []) {
  const general = intakeApplicants.filter((item) => matchesStudent(item, student));
  const special = specialLectureApplications.filter((item) => matchesStudent(item, student));
  return [
    ...general.map((item) => ({
      label: `일반 Tally · ${item.formName || item.source || "접수"}`,
      values: [
        ["현재 학습", item.currentLearningProcess],
        ["전학기 성적", item.previousSemesterScore],
        ["희망 반", item.desiredClass],
        ["특이사항", item.specialNote],
        ["메모", item.memo]
      ]
    })),
    ...special.map((item) => ({
      label: `특강 Tally · ${item.formName || item.campaign || item.source || "접수"}`,
      values: [
        ["신청 회차", item.selectedSession],
        ["요청 시간", (item.requestedSessionPlans ?? []).map((plan) => `${plan.sessionIndex + 1}회차 ${plan.requestedStartTime}-${plan.requestedEndTime}`).join(", ")],
        ["메모", item.memo]
      ]
    }))
  ].filter((item) => item.values.some(([, value]) => text(value)));
}

export function buildStudentHandoverPdfModel({
  comment = "",
  homeworks = [],
  intakeApplicants = [],
  lessons = [],
  records = [],
  specialLectureApplications = [],
  student = {},
  templates = []
} = {}) {
  const withdrawalDate = text(student.withdrawnAt).slice(0, 10);
  const className = templates.find((item) => item.classTemplateId === student.defaultClassTemplateId)?.name || "미배정";
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
  return { className, comment: text(comment), lessonRows, tally: tallyLines(student, intakeApplicants, specialLectureApplications), withdrawalDate };
}

export function openStudentHandoverPdf(model = {}, student = {}) {
  const popup = window.open("", "_blank", "width=960,height=760");
  if (!popup) throw new Error("PDF 인쇄 창을 열지 못했습니다. 팝업 차단을 해제한 뒤 다시 시도해 주세요.");
  popup.opener = null;
  const tallyHtml = model.tally.length
    ? model.tally.map((item) => `<section><h2>${escapeHtml(item.label)}</h2><dl>${item.values.filter(([, value]) => text(value)).map(([label, value]) => `<dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd>`).join("")}</dl></section>`).join("")
    : "<section><h2>Tally 접수 정보</h2><p>연결된 Tally 접수 정보가 없습니다.</p></section>";
  const rowsHtml = model.lessonRows.length
    ? model.lessonRows.map((row) => `<tr><td>${escapeHtml(row.date)}</td><td>${escapeHtml(row.lesson)}</td><td>${escapeHtml(row.material)}</td><td>${escapeHtml(row.progress)}</td><td>${escapeHtml(row.attendance)}</td><td>${escapeHtml(row.homework)}</td><td>${escapeHtml(row.nextHomework)}</td></tr>`).join("")
    : "<tr><td colspan=\"7\">퇴원일까지 연결된 수업 기록이 없습니다.</td></tr>";
  popup.document.write(`<!doctype html><html lang="ko"><head><meta charset="utf-8"><title>${escapeHtml(student.name)} 퇴원생 인수인계서</title><style>@page{size:A4;margin:16mm}body{font-family:Arial,'Malgun Gothic',sans-serif;color:#172554;font-size:11px;line-height:1.5}h1{font-size:22px;margin:0 0 4px}h2{font-size:14px;border-bottom:1px solid #bfdbfe;padding-bottom:4px;margin:22px 0 8px}.meta{display:grid;grid-template-columns:repeat(2,1fr);gap:5px 24px;background:#f8fbff;padding:12px;border:1px solid #dbeafe}.meta b{color:#1d4ed8}table{width:100%;border-collapse:collapse}th,td{border:1px solid #cbd5e1;padding:6px;vertical-align:top}th{background:#eff6ff}section{break-inside:avoid}dl{display:grid;grid-template-columns:120px 1fr;gap:5px;margin:0}dt{font-weight:bold;color:#1d4ed8}dd{margin:0;white-space:pre-wrap}.comment{white-space:pre-wrap;min-height:52px;background:#fffbeb;border:1px solid #fde68a;padding:10px}.footer{margin-top:20px;color:#64748b;font-size:9px}</style></head><body><h1>퇴원생 인수인계서</h1><p>Academy OS · PDF 생성일 ${escapeHtml(new Date().toLocaleString("ko-KR"))}</p><div class="meta"><div><b>학생</b> ${escapeHtml(student.name)}</div><div><b>퇴원일</b> ${escapeHtml(model.withdrawalDate || "미입력")}</div><div><b>학생 번호</b> ${escapeHtml(student.studentPhone || "미입력")}</div><div><b>학부모 번호</b> ${escapeHtml(student.parentPhone || "미입력")}</div><div><b>학교·학년</b> ${escapeHtml([student.schoolName, student.grade].filter(Boolean).join(" · ") || "미입력")}</div><div><b>반</b> ${escapeHtml(model.className)}</div></div><section><h2>회차별 수업 및 숙제</h2><table><thead><tr><th>날짜</th><th>수업</th><th>교재</th><th>진도·강의 내용</th><th>출결</th><th>숙제</th><th>다음 숙제</th></tr></thead><tbody>${rowsHtml}</tbody></table></section>${tallyHtml}<section><h2>교사 인계 코멘트</h2><div class="comment">${escapeHtml(model.comment || "코멘트 없음")}</div></section><p class="footer">이 문서는 퇴원일까지의 Academy OS 원천을 읽어 생성한 읽기 전용 인수인계서입니다.</p><script>window.onload=()=>window.print()</script></body></html>`);
  popup.document.close();
}
