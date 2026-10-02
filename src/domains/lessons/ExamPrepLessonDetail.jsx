import { lazy, Suspense, useState } from "react";
import { HelpTip } from "../../shared/components/HelpTip.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";
import { getAttendanceDisplay, hasMissingCheckOut } from "./attendance.js";
import { defaultAttendanceSettings } from "./attendanceSettings.js";
import {
  createExamPrepAttendanceSummary,
  createExamPrepSchoolPlanRows,
  createExamPrepStudentRows,
  getExamPrepSourceItems,
  groupExamPrepStudentsBySchool,
  groupExamPrepStudentsByTime
} from "./examPrepLessonPresentation.js";
import { getLessonStudentIds } from "../students/lessonRosterSelectors.js";

const ExamPrepContentEditor = lazy(() => import("./ExamPrepContentEditor.jsx").then((module) => ({ default: module.ExamPrepContentEditor })));
// 2026-10-01 · 모달을 열 때만 쓰는 패널이라 초기 번들에서 뺀다(진행 내용 편집기와 같은 이유).
const ExamPrepNotificationBar = lazy(() => import("./ExamPrepNotificationBar.jsx").then((module) => ({ default: module.ExamPrepNotificationBar })));
const ExamPrepSchoolPlanPanel = lazy(() => import("./ExamPrepSchoolPlanPanel.jsx").then((module) => ({ default: module.ExamPrepSchoolPlanPanel })));

export function ExamPrepLessonDetail({ attendanceSettings = defaultAttendanceSettings, createEmptyRecord, examPrepExcludedSchools = [], examPrepNotificationEnabled = false, examPrepNotificationScheduledLabel = "", examPrepScheduleLessons = [], lesson, onApplyExamPrepNotificationPlan, onDeleteLesson, onOpenJournalView, onSaveExamPrepSchedule, onSaveExamPrepSchoolPlan, onSaveRecord, onToggleDailyJournal, persistedLessons = [], records = [], ScheduleModalComponent, students = [], templates = [] }) {
  const [rosterView, setRosterView] = useState("time");
  const [isScheduleEditorOpen, setIsScheduleEditorOpen] = useState(false);
  const sourceItems = getExamPrepSourceItems(lesson);
  const lessonStudentCount = getLessonStudentIds(lesson).length;
  const studentRows = createExamPrepStudentRows(lesson, students, records);
  const attendanceSummary = createExamPrepAttendanceSummary(studentRows);
  const studentGroups = rosterView === "school"
    ? groupExamPrepStudentsBySchool(studentRows)
    : groupExamPrepStudentsByTime(studentRows);
  const schoolPlanRows = createExamPrepSchoolPlanRows(studentRows);
  const schoolCount = new Set(studentRows.map((row) => row.schoolName).filter((name) => name !== "학교 미입력")).size;
  const displaySchoolCount = Math.max(schoolCount, sourceItems.length);
  return (
    <div className="examPrepLessonBody">
      {/* 2026-10-02 · 일정 수정·삭제는 이 날짜에 오는 학생 전체의 일정을 조율하는 일인데,
          스크롤하는 왼쪽 열 맨 아래에 있어 찾아 내려가야 보였다(요청). 요약 줄과 같은
          줄(= 스크롤 밖)으로 올려 항상 보이게 한다. */}
      <div className="examPrepLessonActionBar">
        <div className="helpTipTitleRow">
          <span className="eyebrow">시험대비 수업</span>
          <HelpTip
            label="시험대비 수업"
            text="저장된 실제 수업 기준으로 수업일지와 알림톡을 연결합니다. 날짜나 시간이 다르면 일정 수정에서 이 수업 자체를 조정합니다."
          />
        </div>
        <div aria-label="시험대비 수업 작업" className="examPrepActions" role="group">
          {onToggleDailyJournal && onApplyExamPrepNotificationPlan ? (
            <ExamPrepNotificationBar
              isEnabled={examPrepNotificationEnabled}
              lesson={lesson}
              onApplyPlan={onApplyExamPrepNotificationPlan}
              onToggleEnabled={onToggleDailyJournal}
              scheduledLabel={examPrepNotificationScheduledLabel}
            />
          ) : null}
          {/* 수업일지에는 숙제·과제 상태·코멘트 미리보기처럼 이 화면에 없는 것이 있다. 그리로
              가는 길은 남기되, 알림톡 체크 뒤에 숨기지 않고 제 이름으로 부른다(2026-10-02). */}
          {onOpenJournalView ? (
            <button className="softButton" onClick={() => onOpenJournalView(lesson.lessonId, true)} type="button">
              수업일지로 열기
            </button>
          ) : null}
          <button className="ghostButton" onClick={() => setIsScheduleEditorOpen(true)} type="button">
            일정 수정
          </button>
          <button className="dangerSoftButton" onClick={() => onDeleteLesson(lesson.lessonId)} type="button">
            일정 삭제
          </button>
        </div>
      </div>

      <div className="examPrepSummaryGrid">
        <MetricCard density="compact" hint="시험대비" label="수업일" value={lesson.date} />
        <MetricCard density="compact" hint={lesson.status === "canceled" ? "취소됨" : "진행 예정"} label="시간" value={`${lesson.startTime || "미정"}-${lesson.endTime || "미정"}`} />
        <MetricCard density="compact" hint={`${displaySchoolCount}개교 준비`} label="참여 학생" value={`${lessonStudentCount}명`} />
        <MetricCard
          density="compact"
          hint={attendanceSummary.total
            ? `하원 ${attendanceSummary.checkedOut}명 · 미등원 ${attendanceSummary.pending}명${attendanceSummary.absent ? ` · 결석 ${attendanceSummary.absent}명` : ""}`
            : "태블릿 출결이 연동됩니다"}
          label="출결"
          value={`${attendanceSummary.arrived}/${attendanceSummary.total}명 등원`}
        />
      </div>

      {/* 2026-10-01 · 가로 2열. 학생별 진행 내용이 학생 수만큼 아래로 이어져 모달을 넓혀도
          하단 스크롤이 길었다. 왼쪽은 이 수업을 정하는 것(학교별 참여·명단·일정), 오른쪽은
          오늘 적는 것(학생별 진행 내용)으로 나누고 오른쪽만 따로 스크롤한다. 수업 등록
          모달(2026-09-26)과 같은 패턴이다. */}
      <div className="examPrepLessonLayout">
        <div className="examPrepLessonMainColumn">
      {onSaveExamPrepSchoolPlan ? (
        <Suspense fallback={<p className="inlineNotice">학교별 참여를 불러오는 중입니다.</p>}>
        <ExamPrepSchoolPlanPanel
          excludedSchools={examPrepExcludedSchools}
          lesson={lesson}
          onSavePlan={(changes) => onSaveExamPrepSchoolPlan({ changes, lesson })}
          schoolRows={schoolPlanRows}
          studentRows={studentRows}
        />
        </Suspense>
      ) : null}

      <section className="panel examPrepRosterPanel">
        <div className="examPrepRosterHeader">
          <div>
            <span className="eyebrow">당일 시험대비 명단</span>
            <div className="helpTipTitleRow">
              <h3>{studentRows.length}명 · {displaySchoolCount}개교</h3>
              <HelpTip
                label="당일 시험대비 명단"
                text="개별 시간이 있으면 그 시간을, 없으면 시험대비 수업의 공통 시간을 표시합니다."
              />
            </div>
          </div>
          <WorkspaceTabs label="시험대비 명단 정렬" variant="compact">
            <button aria-selected={rosterView === "time"} className={rosterView === "time" ? "active" : ""} onClick={() => setRosterView("time")} role="tab" type="button">시간순</button>
            <button aria-selected={rosterView === "school"} className={rosterView === "school" ? "active" : ""} onClick={() => setRosterView("school")} role="tab" type="button">학교별</button>
          </WorkspaceTabs>
        </div>

        {studentGroups.length ? (
          <div className="examPrepRosterGroups">
            {studentGroups.map((group) => (
              <section className="examPrepRosterGroup" key={group.label}>
                <header>
                  <strong>{group.label}</strong>
                  <span>{group.students.length}명</span>
                </header>
                <div className="examPrepRosterRows">
                  {group.students.map((student) => {
                    const attendanceLesson = { ...lesson, endTime: student.endTime || lesson.endTime, startTime: student.startTime || lesson.startTime };
                    const attendanceDisplay = getAttendanceDisplay(student.record ?? {}, attendanceLesson, attendanceSettings.lateGraceMinutes);
                    const checkoutMissing = Boolean(student.record) && hasMissingCheckOut(student.record, attendanceLesson);
                    return (
                      <div className="examPrepRosterRow" key={student.studentId}>
                        <div>
                          <strong>{student.name}</strong>
                          <span className="examPrepStudentSchool">{student.schoolName}</span>
                        </div>
                        <div className="examPrepRosterRowMeta">
                          <span className={student.timeLabel === "시간 미정" ? "examPrepStudentTime missing" : "examPrepStudentTime"}>
                            {student.timeLabel}
                          </span>
                          <span
                            aria-label={`${student.name} 출결`}
                            className={`attendanceBadge examPrepAttendanceBadge attendance-${attendanceDisplay.statusClass}`}
                          >
                            <span>{attendanceDisplay.label}</span>
                            {attendanceDisplay.detail ? <small>{attendanceDisplay.detail}</small> : null}
                            {checkoutMissing ? <small className="checkoutMissingText">하원 미체크</small> : null}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <EmptyState description="일정 수정에서 학생 명단을 먼저 지정해 주세요." title="참여 학생이 없습니다." />
        )}
      </section>

        </div>

        <div className="examPrepLessonContentColumn">
          <Suspense fallback={<p className="inlineNotice">진행 내용 입력을 준비하는 중입니다.</p>}>
            <ExamPrepContentEditor
              createRecord={(student) => createEmptyRecord(lesson, student)}
              lesson={lesson}
              onSaveRecord={onSaveRecord}
              records={records}
              studentRows={studentRows}
            />
          </Suspense>
        </div>
      </div>

      {isScheduleEditorOpen ? (
        <ScheduleModalComponent
          lessons={examPrepScheduleLessons}
          onClose={() => setIsScheduleEditorOpen(false)}
          onSave={onSaveExamPrepSchedule}
          persistedLessons={persistedLessons}
          sourceLesson={lesson}
          students={students}
          templates={templates}
        />
      ) : null}
    </div>
  );
}
