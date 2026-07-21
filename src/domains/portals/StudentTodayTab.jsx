import { StudentExamPostSubmissionPanel } from "./StudentExamPostSubmissionPanel.jsx";
import { StudentHomeworkActionCard } from "./StudentHomeworkActionCard.jsx";
import { StudentLessonHistoryCalendar } from "./StudentLessonHistoryCalendar.jsx";
import { StudentPrepNotices } from "./StudentPrepNotices.jsx";
import { StudentQuestionPanel } from "./StudentQuestionPanel.jsx";
import { StudentSupplementSchedules, StudentTopNotice } from "./StudentTodayReadOnlyPanels.jsx";

export function StudentTodayTab({
  buildCalendarDays,
  examPostTargets = [],
  getHomework,
  getHomeworkStatusLabel,
  getHomeworkStatusTone,
  getLessonContent,
  getLessonMaterial,
  getSupplementTypeLabel,
  homeworks = [],
  homeworkSaveStates = {},
  isHomeworkCompleted,
  lessons = [],
  overdueHomeworks = [],
  prepNotices = [],
  questionSaveState = { state: "idle", targetId: "" },
  questions = [],
  recordsWithLessons = [],
  referenceDate,
  selectedStudent,
  studentExamPostSaveStates = {},
  studentExamPostWriteEnabled = false,
  studentHomeworkWriteEnabled = false,
  studentNotice,
  studentQuestionWriteEnabled = false,
  supplementSchedules = [],
  todayHomeworks = [],
  onAddQuestion,
  onDeleteQuestion,
  onStudentCheckHomework,
  onSubmitExamPostSubmission,
  onUpdateQuestion
}) {
  return (
    <>
      <StudentTopNotice notice={studentNotice} />

      <StudentSupplementSchedules getTypeLabel={getSupplementTypeLabel} schedules={supplementSchedules} />

      <StudentExamPostSubmissionPanel
        onSubmitExamPostSubmission={onSubmitExamPostSubmission}
        referenceDate={referenceDate}
        saveStates={studentExamPostSaveStates}
        selectedStudent={selectedStudent}
        targets={examPostTargets}
        writeEnabled={studentExamPostWriteEnabled}
      />

      <StudentPrepNotices notices={prepNotices} />

      <StudentLessonHistoryCalendar
        buildCalendarDays={buildCalendarDays}
        getHomework={getHomework}
        getLessonContent={getLessonContent}
        getLessonMaterial={getLessonMaterial}
        homeworks={homeworks}
        lessons={lessons}
        recordsWithLessons={recordsWithLessons}
        referenceDate={referenceDate}
        selectedStudent={selectedStudent}
      />

      <StudentQuestionPanel
        onAddQuestion={onAddQuestion}
        onDeleteQuestion={onDeleteQuestion}
        onUpdateQuestion={onUpdateQuestion}
        questions={questions}
        saveState={questionSaveState}
        selectedStudent={selectedStudent}
        writeEnabled={studentQuestionWriteEnabled}
      />

      <div className="sectionHeader">
        <div>
          <h2>오늘 해야 할 숙제</h2>
          <p className="muted">저장 완료가 표시되면 선생님 화면과 새로고침 후에도 유지됩니다.</p>
        </div>
      </div>
      <div className="homeworkStack">
        {todayHomeworks.length === 0 ? <div className="emptyHomeworkBox">오늘 배정된 숙제가 없습니다.</div> : null}
        {todayHomeworks.map((homework) => (
          <StudentHomeworkActionCard
            completed={isHomeworkCompleted(homework)}
            homework={homework}
            key={homework.homeworkId}
            onComplete={onStudentCheckHomework}
            saveState={homeworkSaveStates[homework.homeworkId]}
            statusLabel={getHomeworkStatusLabel(homework, recordsWithLessons)}
            statusTone={getHomeworkStatusTone(homework, recordsWithLessons)}
            writeEnabled={studentHomeworkWriteEnabled}
          />
        ))}
      </div>
      {overdueHomeworks.length ? (
        <div className="warningBand">⚠️ 확인이 필요한 숙제가 있습니다. 선생님과 수업 시간에 확인하세요.</div>
      ) : null}
    </>
  );
}
