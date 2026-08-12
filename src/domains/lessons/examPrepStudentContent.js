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

export function createExamPrepStudentContentDrafts({ lesson = {}, records = [], studentRows = [] } = {}) {
  return Object.fromEntries(studentRows.map((student) => [
    student.studentId,
    getRecordContent(findStudentRecord(records, lesson.lessonId, student.studentId))
  ]));
}

export function createExamPrepStudentContentSaveItems({ createRecord, drafts = {}, lesson = {}, records = [], savedDrafts = {}, studentRows = [] } = {}) {
  return studentRows.flatMap((student) => {
    const content = String(drafts[student.studentId] ?? "").trim();
    const savedContent = String(savedDrafts[student.studentId] ?? "").trim();
    if (content === savedContent) return [];
    const existing = findStudentRecord(records, lesson.lessonId, student.studentId);
    const baseRecord = existing ?? createRecord?.(student);
    if (!baseRecord?.lessonStudentRecordId) return [];
    return [{
      record: { ...baseRecord, lessonProgress: content },
      student
    }];
  });
}
