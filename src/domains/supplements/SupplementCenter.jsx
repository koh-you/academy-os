import { useState } from "react";
import { attendanceLabels } from "../lessons/labels.js";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { safeIdPart } from "../../shared/utils/id.js";
import {
  createAbsenceSupplementCandidateModel,
  createHomeworkSupplementItems,
  createRetestSupplementItems
} from "./supplementCenterCandidateModel.js";
import {
  createSupplementCenterModalActionHandlers,
  createSupplementCenterPassConfirmationHandler
} from "./supplementCenterModalActionController.js";
import {
  createPendingSupplementTask,
  createSelectedSupplementTasksViewModel,
  findSupplementTaskForCandidate,
  getSupplementActionKey
} from "./supplementCenterSelectionModel.js";
import {
  createSupplementCenterTabViewModel,
  sortSupplementCenterItems,
  supplementCenterSortOptions
} from "./supplementCenterTabModel.js";
import { SupplementCandidateRow } from "./SupplementCandidateRow.jsx";
import { SupplementHistoryModal } from "./SupplementHistoryModal.jsx";
import { selectRecentSupplementTasks } from "./supplementHistory.js";
import { SupplementPassConfirmModal } from "./SupplementPassConfirmModal.jsx";
import { SupplementStudentModal } from "./SupplementStudentModal.jsx";

export function SupplementCenter({
  dependencies,
  effects = {},
  homeworks,
  lessons,
  notificationTemplates = {},
  notificationJobs = [],
  records,
  students,
  tasks
}) {
  const {
    persistence: {
      onCancelAbsenceSource,
      onSaveTask,
      onUndoPassTask
    } = {},
    provider: {
      onCancelNotification,
      onReserveNotification
    } = {},
    orchestration: {
      onCancelAbsenceMakeup,
      onPassTask,
      onScheduleTask
    } = {}
  } = effects;
  const {
    addDaysInKorea,
    followUpTypeLabel,
    formatDdayLabel,
    futureAbsenceMakeupVisibleDays,
    getAbsenceHomeworkCheckLabel,
    getAbsenceMakeupAvailability,
    getHomeworkMakeupReason,
    getLessonContent,
    getLessonHomework,
    getRecordLesson,
    getRecordLessonDate,
    getRecordPreviousHomework,
    getRecordStudent,
    getSupplementTaskProgress,
    isAbsenceLikeAttendanceStatus,
    isHomeworkMakeupCandidate,
    shouldIgnoreLessonAttendance,
    supplementMethodLabel,
    supplementStudentModalDependencies,
    today
  } = dependencies;
  const [selectedSupplementStudentId, setSelectedSupplementStudentId] = useState("");
  const [activeSupplementTab, setActiveSupplementTab] = useState("homework_makeup");
  const [supplementSortMode, setSupplementSortMode] = useState("weekday");
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [historyQuery, setHistoryQuery] = useState("");
  const [passConfirmTask, setPassConfirmTask] = useState(null);
  const [passBusyTaskId, setPassBusyTaskId] = useState("");
  const [passActionError, setPassActionError] = useState("");
  const [pendingCandidateTask, setPendingCandidateTask] = useState(null);
  const [selectedSupplementTaskKey, setSelectedSupplementTaskKey] = useState("");
  const [supplementRowActions, setSupplementRowActions] = useState({});
  const [isFutureAbsenceOpen, setIsFutureAbsenceOpen] = useState(false);
  const makeupHomeworks = homeworks.filter((homework) => isHomeworkMakeupCandidate(homework, records, lessons));
  const absentRecords = records
    .filter((record) => isAbsenceLikeAttendanceStatus(record.attendanceStatus))
    .filter((record) => !shouldIgnoreLessonAttendance(getRecordLesson(record, lessons)));
  const retestRecords = records
    .filter((record) => record.needsRetest)
    .filter((record) => !shouldIgnoreLessonAttendance(getRecordLesson(record, lessons)));

  function studentName(studentId) {
    return students.find((student) => student.studentId === studentId)?.name ?? "미등록 학생";
  }

  function lessonLabel(lessonId) {
    const lesson = lessons.find((item) => item.lessonId === lessonId);
    return lesson ? `${lesson.date} ${lesson.className}` : "연결 수업 없음";
  }

  const {
    createItem: createAbsenceSupplementItem,
    hydrateTask: hydrateSupplementTask
  } = createAbsenceSupplementCandidateModel({
    attendanceLabels,
    formatDdayLabel,
    futureAbsenceMakeupVisibleDays,
    getAvailability: (record) => getAbsenceMakeupAvailability(record, lessons),
    getHomeworkCheckLabel: (record) => getAbsenceHomeworkCheckLabel(record, homeworks, lessons, students),
    getLesson: (record) => getRecordLesson(record, lessons),
    getLessonContent,
    getLessonDate: (record) => getRecordLessonDate(record, lessons),
    getLessonLabel: lessonLabel,
    getNextHomework: (lesson, student) => getLessonHomework(homeworks, lesson, student, "next", lessons),
    getPreviousHomework: (record) => getRecordPreviousHomework(record, homeworks, lessons, students),
    getStudent: (record) => getRecordStudent(record, students),
    records
  });

  function setSupplementRowAction(task, state, message) {
    const key = getSupplementActionKey(task);
    if (!key) return;
    setSupplementRowActions((current) => ({
      ...current,
      [key]: { message, state }
    }));
  }

  function createPendingMakeupTask(task) {
    const taskId = `makeup_${Date.now()}_${safeIdPart(task.taskType)}_${safeIdPart(task.studentId)}_${safeIdPart(task.sourceId)}`;
    const createdAt = new Date().toISOString();
    return createPendingSupplementTask(task, {
      createdAt,
      scheduledDate: today,
      taskId
    });
  }

  function openCandidateReview(item) {
    const existingTask = findSupplementTaskForCandidate(tasks, item.task);
    const selectedTaskKey = getSupplementActionKey(existingTask ?? item.task);
    setActiveSupplementTab(item.task.taskType);
    setSelectedSupplementStudentId(item.studentId);
    setSelectedSupplementTaskKey(selectedTaskKey);
    setPassActionError("");
    if (existingTask) {
      setPendingCandidateTask(null);
      setSupplementRowAction(existingTask, "idle", "기존 보충 항목을 상세 검토로 열었습니다.");
      return;
    }
    const pendingTask = createPendingMakeupTask(item.task);
    setPendingCandidateTask(pendingTask);
    setSupplementRowAction(item.task, "draft", "보충 생성 화면에서 보충 내용 저장을 눌러야 보충 항목이 생성됩니다.");
  }

  function clearPendingCandidateTask(savedTask) {
    if (!pendingCandidateTask) return;
    if (getSupplementActionKey(savedTask) === getSupplementActionKey(pendingCandidateTask)) {
      setPendingCandidateTask(null);
    }
  }

  const {
    handleCancelAbsenceMakeupFromModal,
    handleCancelAbsenceSourceFromModal,
    handlePassSupplementTaskFromModal,
    handleSaveSupplementTaskFromModal,
    handleScheduleSupplementTaskFromModal
  } = createSupplementCenterModalActionHandlers({
    clearPendingCandidateTask,
    getSupplementActionKey,
    onCancelAbsenceMakeup,
    onCancelAbsenceSource,
    onPassTask,
    onSaveTask,
    onScheduleTask,
    setPendingCandidateTask,
    setSupplementRowAction
  });

  function closeSupplementStudentModal() {
    setSelectedSupplementStudentId("");
    setSelectedSupplementTaskKey("");
    setPendingCandidateTask(null);
    setPassActionError("");
  }

  function openPassConfirm(existingTask, item) {
    if (!existingTask) {
      setSupplementRowAction(item.task, "blocked", "기존 보충 항목을 연 뒤 완료 처리할 수 있습니다.");
      return;
    }
    const task = existingTask;
    setPassActionError("");
    setPassConfirmTask({
      ...task,
      studentId: item.studentId,
      sourceLabel: task.sourceLabel || item.title
    });
  }

  const confirmPassTask = createSupplementCenterPassConfirmationHandler({
    onPassTask,
    passConfirmTask,
    setPassActionError,
    setPassBusyTaskId,
    setPassConfirmTask,
    setSupplementRowAction
  });

  function renderSupplementRow(item) {
    const existingTask = findSupplementTaskForCandidate(tasks, item.task);
    const taskProgress = getSupplementTaskProgress(existingTask, lessons);
    const rowAction = supplementRowActions[getSupplementActionKey(existingTask ?? item.task)];
    return (
      <SupplementCandidateRow
        existingTask={existingTask}
        isPassBusy={passBusyTaskId === (existingTask?.makeupTaskId || "")}
        item={item}
        key={item.id}
        onOpen={() => openCandidateReview(item)}
        onPass={() => openPassConfirm(existingTask, item)}
        rowAction={rowAction}
        studentName={studentName(item.studentId)}
        taskProgress={taskProgress}
      />
    );
  }

  const selectedSupplementStudent = students.find((student) => student.studentId === selectedSupplementStudentId);
  const {
    selectedTasks: selectedSupplementTasks
  } = createSelectedSupplementTasksViewModel({
    activeTaskType: activeSupplementTab,
    hydrateTask: hydrateSupplementTask,
    pendingTask: pendingCandidateTask,
    selectedStudentId: selectedSupplementStudentId,
    selectedTaskKey: selectedSupplementTaskKey,
    tasks
  });
  const absenceSupplementItems = absentRecords.map(createAbsenceSupplementItem);
  const visibleAbsenceSupplementItems = absenceSupplementItems.filter((item) => !item.isFutureDeferred);
  const deferredAbsenceSupplementItems = absenceSupplementItems.filter((item) => item.isFutureDeferred);
  const activeDeferredAbsenceItems = sortSupplementCenterItems(deferredAbsenceSupplementItems
    .filter((item) =>
      !["done", "canceled"].includes(findSupplementTaskForCandidate(tasks, item.task)?.status)
    ), {
      getStudentName: studentName,
      sortMode: supplementSortMode
    });
  const homeworkSupplementItems = createHomeworkSupplementItems(makeupHomeworks, {
    getReason: (homework) => getHomeworkMakeupReason(homework, records)
  });
  const retestSupplementItems = createRetestSupplementItems(retestRecords, {
    getLessonLabel: lessonLabel
  });
  const {
    activeTab: activeTabData,
    tabs: supplementTabs
  } = createSupplementCenterTabViewModel({
    absenceItems: visibleAbsenceSupplementItems,
    activeDeferredAbsenceCount: activeDeferredAbsenceItems.length,
    activeTabId: activeSupplementTab,
    getStudentName: studentName,
    homeworkItems: homeworkSupplementItems,
    retestItems: retestSupplementItems,
    sortMode: supplementSortMode,
    tasks
  });
  const recentSupplementTasks = selectRecentSupplementTasks({
    cutoffDate: addDaysInKorea(today, -30),
    tasks
  });

  return (
    <section className="followUpPage">
      <PageHeader
        actions={(
          <button className="primaryButton compact" onClick={() => setIsHistoryModalOpen(true)} type="button">
            최근 한 달 보충 내역
          </button>
        )}
        description="숙제보충, 결석보강, 재시험을 별도로 관리합니다."
        title="보충관리"
      />

      <div className="supplementOverviewGrid">
        {supplementTabs.map((tab) => (
          <button
            className={activeSupplementTab === tab.id ? "supplementMetric active" : "supplementMetric"}
            key={tab.id}
            onClick={() => setActiveSupplementTab(tab.id)}
            type="button"
          >
            <span>{tab.title}</span>
            <strong>{tab.count}건</strong>
            <small>{tab.subtitle}</small>
          </button>
        ))}
      </div>

      <section className="supplementTabPanel">
        <SectionHeader
          actions={(
            <label className="supplementSortControl">
              <span>정렬</span>
              <select
                aria-label="보충관리 정렬"
                onChange={(event) => setSupplementSortMode(event.target.value)}
                value={supplementSortMode}
              >
                {supplementCenterSortOptions.map((option) => (
                  <option key={option.id} value={option.id}>{option.label}</option>
                ))}
              </select>
            </label>
          )}
          density="slim"
          description={activeTabData.subtitle}
          meta={<span className="countBadge">{activeTabData.count}건</span>}
          title={activeTabData.title}
        />

        {activeTabData.items.length === 0 ? <div className="emptyHomeworkBox">{activeTabData.emptyText}</div> : null}

        {activeSupplementTab === "absence_makeup" && activeDeferredAbsenceItems.length > 0 ? (
          <section className="supplementDeferredPanel">
            <button
              aria-controls="future-absence-list"
              aria-expanded={isFutureAbsenceOpen}
              className="supplementDeferredToggle"
              onClick={() => setIsFutureAbsenceOpen((current) => !current)}
              type="button"
            >
              <span>
                <b>미래 결석 예정 {activeDeferredAbsenceItems.length}건</b>
                <small>{futureAbsenceMakeupVisibleDays}일 전부터 결석보강 기본 목록에 자동 표시됩니다.</small>
              </span>
              <strong>{isFutureAbsenceOpen ? "접기" : "펼치기"}</strong>
            </button>
            {isFutureAbsenceOpen ? (
              <div className="supplementItemList supplementDeferredList" id="future-absence-list">
                {activeDeferredAbsenceItems.map((item) => renderSupplementRow(item))}
              </div>
            ) : null}
          </section>
        ) : null}

        <div className="supplementItemList">
          {activeTabData.items.map((item) => renderSupplementRow(item))}
        </div>
      </section>

      {selectedSupplementStudent ? (
        <SupplementStudentModal
          dependencies={supplementStudentModalDependencies}
          notificationTemplates={notificationTemplates}
          onCancelAbsenceMakeup={handleCancelAbsenceMakeupFromModal}
          onCancelAbsenceSource={handleCancelAbsenceSourceFromModal}
          onCancelNotification={onCancelNotification}
          onClose={closeSupplementStudentModal}
          onPassTask={handlePassSupplementTaskFromModal}
          onReserveNotification={onReserveNotification}
          onSaveTask={handleSaveSupplementTaskFromModal}
          onScheduleTask={handleScheduleSupplementTaskFromModal}
          notificationJobs={notificationJobs}
          student={selectedSupplementStudent}
          tabTitle={activeTabData.title}
          tasks={selectedSupplementTasks}
        />
      ) : null}
      {isHistoryModalOpen ? (
        <SupplementHistoryModal
          getMethodLabel={supplementMethodLabel}
          getTypeLabel={followUpTypeLabel}
          onChangeQuery={setHistoryQuery}
          onClose={() => setIsHistoryModalOpen(false)}
          onUndoPassTask={onUndoPassTask}
          query={historyQuery}
          students={students}
          tasks={recentSupplementTasks}
        />
      ) : null}
      {passConfirmTask ? (
        <SupplementPassConfirmModal
          errorMessage={passActionError}
          getTypeLabel={followUpTypeLabel}
          isBusy={passBusyTaskId === (passConfirmTask.makeupTaskId || passConfirmTask.sourceId)}
          onCancel={() => setPassConfirmTask(null)}
          onConfirm={confirmPassTask}
          studentName={studentName(passConfirmTask.studentId)}
          task={passConfirmTask}
        />
      ) : null}
    </section>
  );
}
