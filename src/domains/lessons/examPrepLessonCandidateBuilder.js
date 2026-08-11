export function createExamPrepLessonCandidateBuilder({
  examCycleLabel,
  getExamPrepGeneratedKeyForDate,
  getExamPrepSchoolGradeKey = () => "",
  getStandardLessonColor,
  getStudentSchoolGradeKey = () => "",
  getSundayDatesForExamPeriod,
  isActiveStudent = () => false,
  parseDateRangeText
}) {
  return function buildExamPrepLessonCandidates(
    rows = [],
    students = []
  ) {
    const dateMap = new Map();
    rows.forEach((row) => {
      if (!row || typeof row !== "object") return;
      const period = parseDateRangeText(
        row.examPeriod
      );
      if (!period) return;
      if (!period.date) return;
      getSundayDatesForExamPeriod(
        period
      ).forEach((date) => {
        const key =
          getExamPrepGeneratedKeyForDate(date);
        const block = {
          schoolName:
            row.schoolName || "학교 미입력",
          examCycle: row.examCycle || "",
          examPrepId: row.examPrepId,
          schoolGradeKey:
            getExamPrepSchoolGradeKey(row),
          periodText: row.examPeriod
        };
        if (!dateMap.has(key)) {
          dateMap.set(key, {
            date,
            key,
            blocks: []
          });
        }
        const entry = dateMap.get(key);
        if (
          !entry.blocks.some(
            (item) =>
              item.schoolName ===
                block.schoolName &&
              item.examCycle ===
                block.examCycle
          )
        ) {
          entry.blocks.push(block);
        }
      });
    });
    return [...dateMap.values()].map(
      (entry) => {
        const schoolNames = entry.blocks
          .map(
            (block) => block.schoolName
          )
          .join(", ");
        const schoolGradeKeys = new Set(
          entry.blocks
            .map((block) => block.schoolGradeKey)
            .filter(Boolean)
        );
        const studentIds = students
          .filter((student) =>
            isActiveStudent(student) &&
            schoolGradeKeys.has(
              getStudentSchoolGradeKey(student)
            )
          )
          .map((student) => student.studentId)
          .filter(Boolean);
        return {
          generatedKey: entry.key,
          label: `${entry.date} 시험대비`,
          reason:
            `${schoolNames} 시험기간 전 시험대비`,
          lesson: {
            lessonId:
              `lesson_exam_prep_${entry.date}`,
            classTemplateId: "",
            className: "시험대비",
            lessonType: "examPrep",
            lessonTopic: "시험대비",
            sourceSchoolEventId: entry.key,
            sourceLabel: entry.blocks
              .map(
                (block) =>
                  `${block.schoolName} ${
                    examCycleLabel(
                      block.examCycle
                    )
                  }`
              )
              .join(" · "),
            date: entry.date,
            dayOfWeek: "sun",
            startTime: "13:00",
            endTime: "18:00",
            color:
              getStandardLessonColor({
                lessonType: "examPrep"
              }),
            teacherId:
              "instructor_owner_001",
            studentIds,
            status: "scheduled",
            generatedKey: entry.key
          }
        };
      }
    );
  };
}
