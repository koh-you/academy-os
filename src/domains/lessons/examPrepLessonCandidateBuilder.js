import { scopeDeterministicId } from "../../shared/utils/tenantIdScope.js";
import { getSessionTeacherId } from "../../shared/utils/sessionActor.js";
import { isExamPrepSchoolExcluded } from "./examPrepSchoolPlan.js";

export function createExamPrepLessonCandidateBuilder({
  examCycleLabel,
  getExamPrepGeneratedKeyForDate,
  getExamPrepSchoolGradeKey = () => "",
  getMathExamDates = () => [],
  getStandardLessonColor,
  getStudentSchoolGradeKey = () => "",
  getSundayDatesForExamPeriod,
  isActiveStudent = () => false,
  parseDateRangeText
}) {
  return function buildExamPrepLessonCandidates(
    rows = [],
    students = [],
    schoolExclusions = []
  ) {
    const dateMap = new Map();
    rows.forEach((row) => {
      if (!row || typeof row !== "object") return;
      const period = parseDateRangeText(
        row.examPeriod
      );
      if (!period) return;
      if (!period.date) return;
      // 수학시험일은 주말 대비 여부를 가른다(examPeriodSundayDateSelector 주석 참고).
      getSundayDatesForExamPeriod(
        period,
        getMathExamDates(row)
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
        // 그 날짜에서 사람이 뺀 학교는 명단·표시 모두에서 빠진다. 수업 자체는 남는다 —
        // 같은 날짜의 다른 학교 대비는 그대로 해야 하기 때문이다(2026-10-01 요청).
        if (
          isExamPrepSchoolExcluded(
            schoolExclusions,
            key,
            block.schoolName
          )
        ) {
          return;
        }
        // 중복 제거는 **학교·학년**(+고사) 단위다.
        //
        // 예전에는 `학교명 + 고사` 로 묶어서, 같은 학교의 두 학년 시험정보가 같은 일요일에
        // 걸리면 먼저 온 학년의 block 하나만 남았다. 명단은 block 의 schoolGradeKey 에서
        // 뽑으므로 나머지 학년 학생이 그 일요일 시험대비에서 통째로 빠졌다(2026-10-01 발견).
        // 표시 문구는 아래에서 학교·고사 단위로 다시 묶어 "안전중 · 안전중" 이 되지 않게 한다.
        const blockIdentity =
          block.schoolGradeKey || block.schoolName;
        if (
          !entry.blocks.some(
            (item) =>
              (item.schoolGradeKey ||
                item.schoolName) ===
                blockIdentity &&
              item.examCycle ===
                block.examCycle
          )
        ) {
          entry.blocks.push(block);
        }
      });
    });
    return [...dateMap.values()]
      .filter((entry) => entry.blocks.length > 0)
      .map(
      (entry) => {
        // 학년이 여럿이어도 학교는 한 번만 적는다(명단은 학년별 block 전부를 본다).
        const schoolNames = [
          ...new Set(
            entry.blocks.map(
              (block) => block.schoolName
            )
          )
        ].join(", ");
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
              scopeDeterministicId(`lesson_exam_prep_${entry.date}`),
            classTemplateId: "",
            className: "시험대비",
            lessonType: "examPrep",
            lessonTopic: "시험대비",
            sourceSchoolEventId: entry.key,
            // 표시명도 학교·고사 단위로 묶는다 — 학년별 block 을 그대로 적으면
            // "안전중 2학기 중간 · 안전중 2학기 중간" 이 된다(2026-10-01).
            sourceLabel: [
              ...new Set(
                entry.blocks.map(
                  (block) =>
                    `${block.schoolName} ${
                      examCycleLabel(
                        block.examCycle
                      )
                    }`
                )
              )
            ].join(" · "),
            date: entry.date,
            dayOfWeek: "sun",
            startTime: "13:00",
            endTime: "18:00",
            color:
              getStandardLessonColor({
                lessonType: "examPrep"
              }),
            teacherId:
              getSessionTeacherId(),
            studentIds,
            status: "scheduled",
            generatedKey: entry.key
          }
        };
      }
    );
  };
}
