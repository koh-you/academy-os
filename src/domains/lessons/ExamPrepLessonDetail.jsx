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

// 2026-10-02 · 모달을 열 때만 쓰는 패널이라 초기 번들에서 뻐다.
const ExamPrepSchoolPlanPanel = lazy(() => import("./ExamPrepSchoolPlanPanel.jsx").then((module) => ({ default: module.ExamPrepSchoolPlanPanel })));

export function ExamPrepLessonDetail({ attendanceSettings = defaultAttendanceSettings, examPrepExcludedSchools = [], examPrepScheduleLessons = [], lesson, onDeleteLesson, onOpenJournalView, onSaveExamPrepSchedule, onSaveExamPrepSchoolPlan, persistedLessons = [], records = [], ScheduleModalComponent, students = [], templates = [] }) {
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
            text="이 화면은 그 날짜에 누가 몇 시에 오는지를 정합니다. 학생별 강의 내용·코멘트와 알림톡 예약은 [수업일지 · 알림톡]에서 합니다. 날짜나 시간이 다르면 일정 수정에서 이 수업 자체를 조정합니다."
          />
        </div>
        <div aria-label="시험대비 수업 작업" className="examPrepActions" role="group">
          {/* 2026-10-02 · 학생별 기록과 알림톡은 수업일지가 맡는다. 같은 칸(record.lessonProgress
              ·teacherComment·studentComment)을 두 화면에서 적게 하니 어디에 쓰는 게 맞는지
              알 수 없었고, 액션이 한 줄에 일곱 개가 되어 넘쳤다(요청). 이 모달은 "이 날짜에
              누가 몇 시에 오는가" 만 맡고, 기록·알림톡은 수업일지로 넘긴다. */}
          {onOpenJournalView ? (
            <button className="primaryButton" onClick={() => onOpenJournalView(lesson.lessonId, true)} type="button">
              수업일지 · 알림톡
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

      {/* 2026-10-02 · 오른쪽 열(학생별 기록)을 수업일지로 넘기면서 2열을 접었다. 남은 것은
          학교별 참여·명단뿐이라 한 열로 충분하고, 모달도 그만큼 좁아진다. */}
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
