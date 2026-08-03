const activeNotificationJobStatuses = new Set(["scheduled", "queued", "pending_send"]);

function normalizeTime(value = "") {
  return String(value).trim().slice(0, 5);
}

function getNotificationJobMakeupTaskId(job = {}) {
  const payload = job.payload ?? {};
  const result = job.result && typeof job.result === "object" ? job.result : {};
  return payload.makeupTaskId || result.makeupTaskId || "";
}

function isNotificationJobAlignedWithLesson(job = {}, lesson = {}) {
  const payload = job.payload ?? {};
  return Boolean(
    payload.scheduleDate &&
    payload.scheduleTime &&
    payload.scheduleDate === lesson.date &&
    normalizeTime(payload.scheduleTime) === normalizeTime(lesson.startTime)
  );
}

function createState({
  canApplySchedule,
  detail,
  lessonStatus,
  notificationBlockReason,
  scheduleActionLabel,
  scheduleBlockReason = "",
  state,
  statusLabel,
  statusTone
}) {
  return {
    canApplySchedule,
    detail,
    lessonStatus,
    notificationBlockReason,
    scheduleActionLabel,
    scheduleBlockReason,
    state,
    statusLabel,
    statusTone
  };
}

export function createSupplementSourceReconcileModel({
  lessons = [],
  notificationJobs = [],
  task = {}
} = {}) {
  const taskId = task.makeupTaskId || "";
  const linkedLessonId = task.linkedLessonId || "";
  const exactLinkedLesson = linkedLessonId
    ? lessons.find((lesson) => lesson?.lessonId === linkedLessonId) ?? null
    : null;
  const reverseLinkedLessons = taskId
    ? lessons.filter((lesson) => lesson?.sourceMakeupTaskId === taskId)
    : [];
  const distinctReverseLessons = reverseLinkedLessons.filter(
    (lesson, index, source) =>
      lesson?.lessonId &&
      source.findIndex((candidate) => candidate?.lessonId === lesson.lessonId) === index
  );
  const additionalReverseLessons = distinctReverseLessons.filter(
    (lesson) => lesson.lessonId !== exactLinkedLesson?.lessonId
  );
  const relatedNotificationJobs = taskId
    ? notificationJobs.filter((job) => getNotificationJobMakeupTaskId(job) === taskId)
    : [];
  const activeNotificationJobs = relatedNotificationJobs.filter((job) =>
    activeNotificationJobStatuses.has(job?.status)
  );

  let authoritativeLesson = exactLinkedLesson;
  let lessonState;

  if (!linkedLessonId && distinctReverseLessons.length === 0) {
    lessonState = "unlinked";
  } else if (!linkedLessonId && distinctReverseLessons.length === 1) {
    lessonState = "missing_task_link";
    authoritativeLesson = distinctReverseLessons[0];
  } else if (!linkedLessonId && distinctReverseLessons.length > 1) {
    lessonState = "duplicate_lessons";
    authoritativeLesson = distinctReverseLessons[0] ?? null;
  } else if (!exactLinkedLesson && distinctReverseLessons.length === 0) {
    lessonState = "missing_lesson";
  } else if (!exactLinkedLesson && distinctReverseLessons.length === 1) {
    lessonState = "stale_task_link";
    authoritativeLesson = distinctReverseLessons[0];
  } else if (!exactLinkedLesson && distinctReverseLessons.length > 1) {
    lessonState = "duplicate_lessons";
    authoritativeLesson = distinctReverseLessons[0] ?? null;
  } else if (additionalReverseLessons.length > 0) {
    lessonState = "duplicate_lessons";
  } else if (exactLinkedLesson?.status === "canceled") {
    lessonState = "canceled_lesson";
  } else if (
    exactLinkedLesson?.sourceMakeupTaskId &&
    exactLinkedLesson.sourceMakeupTaskId !== taskId
  ) {
    lessonState = "source_mismatch";
  } else {
    const expectedDate = task.linkedLessonDate || (!task.needsLessonResync ? task.scheduledDate : "");
    const expectedTime = task.linkedLessonTime || (!task.needsLessonResync ? task.scheduledTime : "");
    const hasExpectedSchedule = Boolean(expectedDate && expectedTime);
    const lessonScheduleMatches = !hasExpectedSchedule || (
      exactLinkedLesson.date === expectedDate &&
      normalizeTime(exactLinkedLesson.startTime) === normalizeTime(expectedTime)
    );
    lessonState = !lessonScheduleMatches
      ? "schedule_mismatch"
      : task.needsLessonResync
        ? "pending_resync"
        : exactLinkedLesson?.sourceMakeupTaskId
          ? "synced"
          : "linked_legacy";
  }

  const staleNotificationJobs = authoritativeLesson
    ? activeNotificationJobs.filter(
        (job) => !isNotificationJobAlignedWithLesson(job, authoritativeLesson)
      )
    : activeNotificationJobs;
  const staleNotificationDetail = staleNotificationJobs.length
    ? `현재 수업일지 일정과 다른 미발송 예약 ${staleNotificationJobs.length}건`
    : "";

  let stateModel;
  if (lessonState === "unlinked" && activeNotificationJobs.length === 0) {
    stateModel = createState({
      canApplySchedule: true,
      detail: "저장된 연결 수업일지가 없습니다.",
      lessonStatus: task.scheduledDate && task.scheduledTime ? "ready" : "empty",
      notificationBlockReason: "수업일지 일정을 먼저 만들어야 알림톡을 예약할 수 있습니다.",
      scheduleActionLabel: "수업일지 일정 만들기",
      state: lessonState,
      statusLabel: "수업일지 일정 미생성",
      statusTone: "draft"
    });
  } else if (lessonState === "unlinked") {
    stateModel = createState({
      canApplySchedule: false,
      detail: `수업일지 연결 없이 미발송 예약 ${activeNotificationJobs.length}건이 남아 있습니다.`,
      lessonStatus: "failed",
      notificationBlockReason: "연결 수업일지 없이 미발송 예약이 남아 있어 새 예약을 만들 수 없습니다.",
      scheduleActionLabel: "연결 상태 확인 필요",
      scheduleBlockReason: "연결 수업일지와 기존 미발송 예약을 먼저 대조해야 합니다.",
      state: "orphan_notifications",
      statusLabel: "수업일지·알림 연결 확인 필요",
      statusTone: "warning"
    });
  } else if (lessonState === "synced" || lessonState === "linked_legacy") {
    stateModel = createState({
      canApplySchedule: true,
      detail: staleNotificationDetail || (
        lessonState === "linked_legacy"
          ? "기존 연결 ID로 실제 수업일지를 확인했습니다."
          : `${authoritativeLesson?.date || "-"} ${normalizeTime(authoritativeLesson?.startTime)}`.trim()
      ),
      lessonStatus: "synced",
      notificationBlockReason: staleNotificationJobs.length
        ? "현재 수업일지 일정과 다른 미발송 예약이 남아 있어 새 예약을 만들 수 없습니다. 기존 예약을 먼저 확인해 주세요."
        : "",
      scheduleActionLabel: "수업일지 일정 변경",
      state: staleNotificationJobs.length ? "stale_notifications" : lessonState,
      statusLabel: staleNotificationJobs.length
        ? "알림 예약 일정 확인 필요"
        : "수업일지 연결 확인 완료",
      statusTone: staleNotificationJobs.length ? "warning" : "linked"
    });
  } else if (lessonState === "pending_resync") {
    stateModel = createState({
      canApplySchedule: true,
      detail: "저장한 보충 일정과 기존 수업일지 일정이 달라 변경 반영이 필요합니다.",
      lessonStatus: "changed",
      notificationBlockReason: "수업일지 일정 변경을 먼저 완료해야 현재 일정으로 알림톡을 예약할 수 있습니다.",
      scheduleActionLabel: "수업일지 일정 변경",
      state: lessonState,
      statusLabel: "수업일지 일정 변경 필요",
      statusTone: "warning"
    });
  } else {
    const issueByState = {
      canceled_lesson: ["연결 수업일지 취소됨", "연결된 수업일지가 취소 상태입니다."],
      duplicate_lessons: ["중복 수업일지 연결 확인 필요", `같은 보충 원천을 가리키는 수업일지가 ${distinctReverseLessons.length}건입니다.`],
      missing_lesson: ["연결 수업일지 없음", `저장된 연결 ID(${linkedLessonId})에 해당하는 수업일지가 없습니다.`],
      missing_task_link: ["보충 연결 ID 복구 필요", "수업일지는 보충 원천을 가리키지만 보충 항목의 연결 ID가 비어 있습니다."],
      schedule_mismatch: ["수업일지 일정 불일치", "보충 항목이 기억한 연결 일정과 실제 수업일지 일정이 다릅니다."],
      source_mismatch: ["수업일지 원천 불일치", "연결 수업일지가 다른 보충 항목을 원천으로 가리킵니다."],
      stale_task_link: ["보충 연결 ID 복구 필요", "보충 항목의 연결 ID와 역연결된 실제 수업일지 ID가 다릅니다."]
    };
    const [statusLabel, detail] = issueByState[lessonState] ?? ["수업일지 연결 확인 필요", "연결 원천을 확인해야 합니다."];
    stateModel = createState({
      canApplySchedule: false,
      detail: staleNotificationDetail ? `${detail} ${staleNotificationDetail}` : detail,
      lessonStatus: "failed",
      notificationBlockReason: "연결된 수업일지 원천이 확인되지 않아 새 알림톡 예약을 만들 수 없습니다. 연결 상태를 먼저 복구해 주세요.",
      scheduleActionLabel: "연결 상태 확인 필요",
      scheduleBlockReason: detail,
      state: lessonState,
      statusLabel,
      statusTone: "warning"
    });
  }

  return {
    ...stateModel,
    activeNotificationJobs,
    authoritativeLesson,
    canReserveNotifications: !stateModel.notificationBlockReason,
    exactLinkedLesson,
    isScheduleChangeMode: Boolean(authoritativeLesson),
    lessonState,
    relatedNotificationJobs,
    reverseLinkedLessons: distinctReverseLessons,
    staleNotificationJobs
  };
}
