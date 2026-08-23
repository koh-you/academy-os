import { lazy, Suspense, useState } from "react";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";
import {
  createExamPrepStudentRows,
  getExamPrepSourceItems,
  groupExamPrepStudentsBySchool,
  groupExamPrepStudentsByTime
} from "./examPrepLessonPresentation.js";
import { getLessonStudentIds } from "../students/lessonRosterSelectors.js";

const ExamPrepContentEditor = lazy(() => import("./ExamPrepContentEditor.jsx").then((module) => ({ default: module.ExamPrepContentEditor })));

export function ExamPrepLessonDetail({ createEmptyRecord, examPrepScheduleLessons = [], lesson, onDeleteLesson, onSaveExamPrepSchedule, onSaveRecord, persistedLessons = [], records = [], ScheduleModalComponent, students = [], templates = [] }) {
  const [rosterView, setRosterView] = useState("time");
  const [isScheduleEditorOpen, setIsScheduleEditorOpen] = useState(false);
  const sourceItems = getExamPrepSourceItems(lesson);
  const scheduledTime = `${lesson.date} ${lesson.startTime || "미정"}-${lesson.endTime || "미정"}`;
  const lessonStudentCount = getLessonStudentIds(lesson).length;
  const studentRows = createExamPrepStudentRows(lesson, students);
  const studentGroups = rosterView === "school"
    ? groupExamPrepStudentsBySchool(studentRows)
    : groupExamPrepStudentsByTime(studentRows);
  const schoolCount = new Set(studentRows.map((row) => row.schoolName).filter((name) => name !== "학교 미입력")).size;
  const displaySchoolCount = Math.max(schoolCount, sourceItems.length);
  return (
    <div className="examPrepLessonBody">
      <div className="examPrepSummaryGrid">
        <MetricCard density="compact" hint="시험대비" label="수업일" value={lesson.date} />
        <MetricCard density="compact" hint={lesson.status === "canceled" ? "취소됨" : "진행 예정"} label="시간" value={`${lesson.startTime || "미정"}-${lesson.endTime || "미정"}`} />
        <MetricCard density="compact" hint={`${displaySchoolCount}개교 준비`} label="참여 학생" value={`${lessonStudentCount}명`} />
      </div>

      <section className="panel examPrepPanel">
        <SectionHeader
          actions={(
            <>
              <button className="ghostButton" onClick={() => setIsScheduleEditorOpen(true)} type="button">
                일정 수정
              </button>
              <button className="dangerButton" onClick={() => onDeleteLesson(lesson.lessonId)} type="button">
                일정 삭제
              </button>
            </>
          )}
          actionsClassName="examPrepActions"
          density="slim"
          descriptionNode={(
            <p className="muted">
              저장된 실제 수업 기준으로 수업일지와 알림톡을 연결합니다. 날짜나 시간이 다르면 일정 수정에서 이 수업 자체를 조정합니다.
            </p>
          )}
          eyebrow="시험대비 수업"
          title="시험대비"
          titleAs="h3"
        />

        {sourceItems.length ? (
          <div className="examPrepSourceList" aria-label="연결된 시험정보">
            {sourceItems.map((label) => (
              <div className="examPrepSourceItem" key={label}>
                <strong>{label}</strong>
                <small>{scheduledTime}</small>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState as="p" className="examPrepEmptyState">연결된 시험정보가 없습니다. 필요한 경우 일정 수정에서 수업명과 학생 명단을 직접 정리하세요.</EmptyState>
        )}

        <Suspense fallback={<p className="inlineNotice">진행 내용 입력을 준비하는 중입니다.</p>}>
          <ExamPrepContentEditor
            createRecord={(student) => createEmptyRecord(lesson, student)}
            lesson={lesson}
            onSaveRecord={onSaveRecord}
            records={records}
            studentRows={studentRows}
          />
        </Suspense>
      </section>

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

      <section className="panel examPrepRosterPanel">
        <div className="examPrepRosterHeader">
          <div>
            <span className="eyebrow">당일 시험대비 명단</span>
            <h3>{studentRows.length}명 · {displaySchoolCount}개교</h3>
            <p className="muted">개별 시간이 있으면 그 시간을, 없으면 시험대비 수업의 공통 시간을 표시합니다.</p>
          </div>
          <WorkspaceTabs label="시험대비 명단 정렬" variant="compact">
            <button aria-pressed={rosterView === "time"} className={rosterView === "time" ? "active" : ""} onClick={() => setRosterView("time")} type="button">시간순</button>
            <button aria-pressed={rosterView === "school"} className={rosterView === "school" ? "active" : ""} onClick={() => setRosterView("school")} type="button">학교별</button>
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
                  {group.students.map((student) => (
                    <div className="examPrepRosterRow" key={student.studentId}>
                      <div>
                        <strong>{student.name}</strong>
                        <span className="examPrepStudentSchool">{student.schoolName}</span>
                      </div>
                      <span className={student.timeLabel === "시간 미정" ? "examPrepStudentTime missing" : "examPrepStudentTime"}>
                        {student.timeLabel}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <EmptyState as="p" className="examPrepEmptyState">참여 학생이 없습니다. 일정 수정에서 학생 명단을 먼저 지정해 주세요.</EmptyState>
        )}
      </section>
    </div>
  );
}
