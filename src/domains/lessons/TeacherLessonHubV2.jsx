import { useEffect, useRef, useState } from "react";
import { Modal } from "../../shared/components/Modal.jsx";
import { formatKoreaTimeFromIso } from "./attendance.js";
import { defaultAttendanceSettings } from "./attendanceSettings.js";
import { LessonCalendarView } from "./LessonCalendarView.jsx";
import { createLessonCalendarViewModel } from "./lessonCalendarModel.js";
import { LessonJournalErrorBoundary } from "./LessonJournalErrorBoundary.jsx";
import { LessonJournalDetail } from "./LessonJournalDetail.jsx";
import { useLessonCalendarKeyboardNavigation } from "./useLessonCalendarKeyboardNavigation.js";

export function TeacherLessonHubV2({
  academyReminders = [],
  academyTests = [],
  aiSettings,
  allRecords = [],
  attendanceSettings = defaultAttendanceSettings,
  attendanceSyncStatus = { lastSyncedAt: "", message: "출결 서버 확인 대기", state: "idle" },
  generatedLessonSaveStatus = { lessons: [], message: "", state: "idle" },
  integrationStatus,
  isMonthlyRegularLessonOpened = false,
  lessonHistoryActionState = { message: "", state: "idle" },
  lessonJournalEffects,
  lessonNotificationPlans = {},
  monthlyRegularLessonOpenPlan = { errors: [], lessonsToCreate: [], rows: [] },
  clipboardCount,
  lessons,
  makeupTasks = [],
  materials = [],
  notificationJobs = [],
  records,
  runtime,
  saveStates,
  selectedDate,
  selectedLesson,
  selectedLessonId,
  students,
  templates = [],
  testAttempts = [],
  testSessions = [],
  homeworks,
  onAddLesson,
  onBackToCalendar,
  onCopyLesson,
  onDateSelect,
  onDeleteLesson,
  onDeleteAcademyReminder,
  onDeleteSelectedLesson,
  onEditLesson,
  onMoveDate,
  onOpenMonthlyRegularLessons,
  onOpenAttendance,
  onOpenExamPrep,
  onOpenLessonJournal,
  onOpenReport,
  onPasteLesson,
  onPassMakeupTask,
  onRetryGeneratedLessonSave,
  onScheduleMakeupTask,
  onSaveAcademyReminder,
  onSelectLesson,
  onUndoLessonAction,
  onUpdateMakeupTask,
  onShiftMonth,
  undoCount,
  isLessonJournalOpen
}) {
  const {
    AcademyReminderPanel,
    academyReminder,
    ExamPrepLessonDetail,
    LessonJournalFallback,
    SupplementMakeupLessonDetail,
    buildMonthDays,
    followUpTypeLabel,
    formatMonthTitle,
    getLessonStudentIds,
    isExamPrepLesson,
    isLegacyExamPrepLesson,
    isSupplementMakeupTaskLesson,
    lessonJournal,
    nestedPanels,
    sortByTime
  } = runtime;
  const [lessonTypeFilter, setLessonTypeFilter] = useState("all");
  const selectedCalendarDayRef = useRef(null);
  useLessonCalendarKeyboardNavigation({
    isHistoryActionBusy: lessonHistoryActionState.state === "saving",
    isLessonJournalOpen,
    onCopyLesson,
    onDeleteSelectedLesson,
    onMoveDate,
    onOpenLessonJournal,
    onPasteLesson,
    onUndoLessonAction,
    selectedLessonId
  });

  useEffect(() => {
    const selectedDay = selectedCalendarDayRef.current;
    const calendarGrid = selectedDay?.closest(".teacherCalendarGrid");
    if (calendarGrid?.contains(document.activeElement)) {
      selectedDay.focus();
    }
  }, [selectedDate]);

  const selectedMakeupTask = selectedLesson
    ? makeupTasks.find((task) => task.makeupTaskId === selectedLesson.sourceMakeupTaskId || task.linkedLessonId === selectedLesson.lessonId)
    : null;
  const isSupplementMakeupLesson = isSupplementMakeupTaskLesson(selectedLesson, selectedMakeupTask);
  const isHomeworkMakeupLesson = isSupplementMakeupLesson && selectedMakeupTask?.taskType === "homework_makeup";
  const isExamPrepLessonSelected = isExamPrepLesson(selectedLesson);
  const lessonJournalDialog = isLessonJournalOpen && selectedLesson ? (
    isHomeworkMakeupLesson ? (
      <Modal
        backdropClassName="homeworkMakeupModalBackdrop"
        className="homeworkMakeupScheduleModal"
        title={`${followUpTypeLabel(selectedMakeupTask?.taskType)} 일정`}
        subtitle="일반 수업일지가 아니라, 원 수업 참고와 보충 처리를 분리해 확인하는 전용 화면입니다."
        onClose={onBackToCalendar}
      >
        <SupplementMakeupLessonDetail
          runtime={nestedPanels}
          attendanceSettings={attendanceSettings}
          homeworks={homeworks}
          lesson={selectedLesson}
          lessons={lessons}
          onDeleteLesson={onDeleteLesson}
          onEditLesson={onEditLesson}
          onOpenAttendance={onOpenAttendance}
          onPassTask={onPassMakeupTask}
          onScheduleTask={onScheduleMakeupTask}
          onUpdateTask={onUpdateMakeupTask}
          records={records}
          students={students}
          task={selectedMakeupTask}
        />
      </Modal>
    ) : isExamPrepLessonSelected ? (
      <Modal
        backdropClassName="homeworkMakeupModalBackdrop"
        className="homeworkMakeupScheduleModal examPrepModal"
        title="시험대비"
        subtitle="시험기간 전후로 별도 개설한 시험대비 수업입니다."
        onClose={onBackToCalendar}
      >
        <ExamPrepLessonDetail
          lesson={selectedLesson}
          onDeleteLesson={onDeleteLesson}
          onEditLesson={onEditLesson}
        />
      </Modal>
    ) : (
      <Modal
        ariaLabel="수업일지"
        backdropClassName="lessonJournalModalBackdrop"
        className="lessonJournalModal"
        hideHeader
        onClose={onBackToCalendar}
      >
        <LessonJournalErrorBoundary
          key={selectedLesson.lessonId}
          fallback={(error) => (
            <LessonJournalFallback
              error={error}
              lesson={selectedLesson}
              onBack={onBackToCalendar}
              onDeleteLesson={onDeleteLesson}
              onEditLesson={onEditLesson}
              students={students}
            />
          )}
        >
          <LessonJournalDetail
            academyReminders={academyReminders}
            academyTests={academyTests}
            aiSettings={aiSettings}
            allRecords={allRecords}
            attendanceSettings={attendanceSettings}
            integrationStatus={integrationStatus}
            lessonNotificationPlan={lessonNotificationPlans[selectedLesson.lessonId] ?? { mode: "default" }}
            notificationJobs={notificationJobs}
            homeworks={homeworks}
            lesson={selectedLesson}
            lessons={lessons}
            materials={materials}
            makeupTasks={makeupTasks}
            effects={lessonJournalEffects}
            onBack={onBackToCalendar}
            onEditLesson={onEditLesson}
            onOpenAttendance={onOpenAttendance}
            onOpenExamPrep={onOpenExamPrep}
            onOpenReport={onOpenReport}
            records={records}
            runtime={lessonJournal}
            saveStates={saveStates}
            students={students}
            templates={templates}
            testAttempts={testAttempts}
            testSessions={testSessions}
          />
        </LessonJournalErrorBoundary>
      </Modal>
    )
  ) : null;
  const lessonCalendarViewModel = createLessonCalendarViewModel({
    days: buildMonthDays(selectedDate),
    getLessonStudentIds,
    isExamPrepLesson,
    isLegacyExamPrepLesson,
    lessons,
    lessonTypeFilter,
    selectedDate,
    selectedLessonId,
    sortLessons: sortByTime
  });
  const shouldShowGeneratedLessonSaveNotice = generatedLessonSaveStatus?.state && generatedLessonSaveStatus.state !== "idle";

  return (
    <>
      <AcademyReminderPanel
        runtime={academyReminder}
        onDeleteAcademyReminder={onDeleteAcademyReminder}
        onSaveAcademyReminder={onSaveAcademyReminder}
        reminders={academyReminders}
        selectedDate={selectedDate}
        students={students}
        templates={templates}
      />

      {shouldShowGeneratedLessonSaveNotice ? (
        <div className={`generatedLessonSaveNotice ${generatedLessonSaveStatus.state}`}>
          <span>{generatedLessonSaveStatus.message || "직전수업 자동 저장 상태를 확인해 주세요."}</span>
          {generatedLessonSaveStatus.state === "failed" ? (
            <button className="softButton compact" onClick={onRetryGeneratedLessonSave} type="button">
              다시 저장
            </button>
          ) : null}
        </div>
      ) : null}

      {lessonHistoryActionState.state !== "idle" ? (
        <div aria-live="polite" className={`generatedLessonSaveNotice ${lessonHistoryActionState.state}`}>
          {lessonHistoryActionState.message}
        </div>
      ) : null}

      <LessonCalendarView
        attendanceSyncLabel={attendanceSyncStatus.state === "syncing"
          ? "출결 확인 중"
          : attendanceSyncStatus.state === "failed"
            ? "출결 연결 지연"
            : attendanceSyncStatus.lastSyncedAt
              ? `출결 최신 ${formatKoreaTimeFromIso(attendanceSyncStatus.lastSyncedAt)}`
              : "출결 동기화 대기"}
        attendanceSyncStatus={attendanceSyncStatus}
        lessonTypeFilter={lessonTypeFilter}
        monthlyRegularLessonOpenLabel={`${formatMonthTitle(selectedDate)} 정규수업 열기`}
        monthTitle={formatMonthTitle(selectedDate)}
        onAddLesson={onAddLesson}
        onDateSelect={onDateSelect}
        onLessonTypeFilterChange={setLessonTypeFilter}
        onMoveDate={onMoveDate}
        onOpenMonthlyRegularLessons={onOpenMonthlyRegularLessons}
        onOpenLessonJournal={onOpenLessonJournal}
        onShiftMonth={onShiftMonth}
        selectedCalendarDayRef={selectedCalendarDayRef}
        showMonthlyRegularLessonOpen={!isMonthlyRegularLessonOpened && monthlyRegularLessonOpenPlan.lessonsToCreate.length > 0}
        viewModel={lessonCalendarViewModel}
      />
      {lessonJournalDialog}
    </>
  );
}
