function findStudentRecord(records = [], lessonId = "", studentId = "") {
  return records.find((record) => record.lessonId === lessonId && record.studentId === studentId) ?? null;
}

function getRecordContent(record = {}) {
  return String(record?.lessonProgress ?? record?.progress ?? record?.lessonContent ?? "");
}

export function getExamPrepLegacyCommonContent(lesson = {}) {
  const content = String(lesson.lessonTopic || "").trim();
  return content === "시험대비" ? "" : content;
}

/**
 * 2026-10-02 · 초안은 학생당 { lessonProgress, teacherComment, studentComment } 이다.
 *
 * 전에는 강의 내용만 적었고, 알림톡 코멘트를 쓰려면 체크박스로 화면을 일반 수업일지로
 * 바꿔야 했다 — 그러면 학교별 참여 관리 화면이 사라졌고, 다시 돌아올 자리도 없었다.
 * 시험대비 알림톡에 실제로 채워지는 블록은 출결·강의 내용·코멘트 세개뿐이라, 그 세개를
 * 여기서 다 적을 수 있게 했다.
 */
export function createExamPrepStudentContentDrafts({ lesson = {}, records = [], studentRows = [] } = {}) {
  return Object.fromEntries(studentRows.map((student) => {
    const record = findStudentRecord(records, lesson.lessonId, student.studentId);
    return [student.studentId, {
      lessonProgress: getRecordContent(record),
      studentComment: String(record?.studentComment ?? ""),
      teacherComment: String(record?.teacherComment ?? "")
    }];
  }));
}

export const examPrepStudentContentFields = [
  { ariaSuffix: "오늘 강의 내용", field: "lessonProgress" },
  { ariaSuffix: "학부모 코멘트", field: "teacherComment" },
  { ariaSuffix: "학생 코멘트", field: "studentComment" }
];

function getDraftValue(drafts = {}, studentId = "", field = "") {
  return String(drafts?.[studentId]?.[field] ?? "").trim();
}

export function createExamPrepStudentContentSaveItems({ createRecord, drafts = {}, lesson = {}, records = [], savedDrafts = {}, studentRows = [] } = {}) {
  return studentRows.flatMap((student) => {
    const changedFields = examPrepStudentContentFields
      .map((entry) => entry.field)
      .filter((field) => (
        getDraftValue(drafts, student.studentId, field) !== getDraftValue(savedDrafts, student.studentId, field)
      ));
    if (!changedFields.length) return [];
    const existing = findStudentRecord(records, lesson.lessonId, student.studentId);
    const baseRecord = existing ?? createRecord?.(student);
    if (!baseRecord?.lessonStudentRecordId) return [];
    // 바꾼 칸만 보낸다. 건드리지 않은 칸은 서버 값을 그대로 둔다 — 수업일지에서 먼저 적은
    // 코멘트를 이 화면이 빈 값으로 덮지 않는다.
    const record = changedFields.reduce(
      (next, field) => ({ ...next, [field]: getDraftValue(drafts, student.studentId, field) }),
      { ...baseRecord }
    );
    return [{ changedFields, record, student }];
  });
}
