import { useEffect, useMemo, useState } from "react";
import { copyTextToClipboard } from "../exams/outputPreview.js";
import { Modal } from "../../shared/components/Modal.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { apiUrl } from "../../shared/utils/apiClient.js";
import {
  createSpecialLectureEnrollmentId,
  createSpecialLectureLessonId,
  defaultSpecialLectureGuides,
  getSpecialLectureEnrollmentStatusLabel,
  getSpecialLectureApplicationStatusLabel,
  getSpecialLectureGuideSlug,
  getSpecialLectureLessonTrackId,
  getSpecialLectureSessionId,
  normalizeSpecialLectureEnrollment,
  normalizeSpecialLectureEnrollments,
  normalizeSpecialLectureApplications,
  normalizeSpecialLectureGuides,
  specialLectureApplicationStatusOptions
} from "./specialLectureGuideUtils.js";

function normalizePhoneNumber(value = "") {
  return String(value ?? "").replaceAll(/\D/g, "");
}

function formatKoreaTimeLabel(dateString) {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date(dateString));
}

export function doesSpecialLectureApplicationMatchGuide(application = {}, guide = null) {
  if (!guide) return true;
  const guideId = String(guide.specialLectureGuideId ?? "").trim();
  const guideSlug = getSpecialLectureGuideSlug(guide);
  return Boolean(
    (application.specialLectureGuideId && application.specialLectureGuideId === guideId) ||
    (application.guideSlug && application.guideSlug === guideSlug)
  );
}

function normalizeSpecialLectureMatchText(value = "") {
  return String(value ?? "").replace(/\s+/g, "").toLowerCase();
}

function normalizeSpecialLectureMatchPhone(value = "") {
  const digits = normalizePhoneNumber(value);
  if (digits.startsWith("82") && digits.length >= 11) return `0${digits.slice(2)}`;
  return digits;
}

function getSpecialLectureStudentPhones(student = {}) {
  return [student.studentPhone, student.parentPhone]
    .map(normalizeSpecialLectureMatchPhone)
    .filter(Boolean);
}

export function getSpecialLectureStudentMatch(application = {}, students = []) {
  const applicationPhones = [application.studentPhone, application.parentPhone]
    .map(normalizeSpecialLectureMatchPhone)
    .filter(Boolean);
  const phoneMatches = applicationPhones.length
    ? students.filter((student) => {
        const studentPhones = getSpecialLectureStudentPhones(student);
        return applicationPhones.some((phone) => studentPhones.includes(phone));
      })
    : [];
  if (phoneMatches.length === 1) {
    return { status: "matched", student: phoneMatches[0], candidates: phoneMatches, reason: "전화번호 일치" };
  }
  if (phoneMatches.length > 1) {
    return { status: "ambiguous", student: null, candidates: phoneMatches, reason: "전화번호 후보 복수" };
  }

  const applicationName = normalizeSpecialLectureMatchText(application.studentName);
  if (!applicationName) return { status: "unmatched", student: null, candidates: [], reason: "신청자 이름 없음" };

  const nameMatches = students.filter((student) => normalizeSpecialLectureMatchText(student.name) === applicationName);
  if (nameMatches.length === 0) return { status: "unmatched", student: null, candidates: [], reason: "기존 학생 이름 없음" };
  const schoolText = normalizeSpecialLectureMatchText(application.schoolName);
  const gradeText = normalizeSpecialLectureMatchText(application.grade);
  const contextualMatches = nameMatches.filter((student) => {
    const studentSchool = normalizeSpecialLectureMatchText(student.schoolName);
    const studentGrade = normalizeSpecialLectureMatchText(student.grade);
    const schoolMatches = !schoolText || !studentSchool || studentSchool === schoolText;
    const gradeMatches = !gradeText || !studentGrade || studentGrade === gradeText;
    return schoolMatches && gradeMatches;
  });
  const candidates = contextualMatches.length ? contextualMatches : nameMatches;
  if (candidates.length === 1) {
    return {
      status: "matched",
      student: candidates[0],
      candidates,
      reason: contextualMatches.length ? "이름/학교/학년 일치" : "이름 일치"
    };
  }
  return { status: "ambiguous", student: null, candidates, reason: "이름 후보 복수" };
}

export function buildSpecialLectureMatchRows(applications = [], guide = null, students = []) {
  const normalizedApplications = normalizeSpecialLectureApplications(applications);
  return normalizedApplications
    .filter((application) => application.status === "confirmed")
    .filter((application) => doesSpecialLectureApplicationMatchGuide(application, guide))
    .map((application) => ({
      application,
      ...getSpecialLectureStudentMatch(application, students)
    }));
}

function doesSpecialLectureEnrollmentMatchGuide(enrollment = {}, guide = null) {
  if (!guide) return true;
  const guideId = String(guide.specialLectureGuideId ?? "").trim();
  const guideSlug = getSpecialLectureGuideSlug(guide);
  return Boolean(
    (enrollment.specialLectureGuideId && enrollment.specialLectureGuideId === guideId) ||
    (enrollment.guideSlug && enrollment.guideSlug === guideSlug)
  );
}

function getSpecialLectureGuideSessions(guide = null) {
  if (!guide) return [];
  const sessions = Array.isArray(guide.sessions) ? guide.sessions : [];
  return sessions.map((session, index) => ({
    ...session,
    sessionId: getSpecialLectureSessionId(guide, session, index),
    sessionIndex: index
  }));
}

function getEnrollmentStudent(enrollment = {}, students = []) {
  return students.find((student) => student.studentId === enrollment.studentId) ?? null;
}

function getTodayDateKey() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function isActiveRosterStudent(student = {}) {
  return !["withdrawn", "paused"].includes(student.status ?? "active") && !student.withdrawnAt;
}

function getAttendanceLabel(status = "pending") {
  return {
    pending: "예정",
    present: "출석",
    late: "지각",
    absent: "결석",
    excused: "인정결석"
  }[status] ?? status;
}

function haveSameStudentIds(left = [], right = []) {
  return [...new Set(left)].sort().join("|") === [...new Set(right)].sort().join("|");
}

function haveSameSpecialLectureStudentSchedules(left = [], right = []) {
  const normalize = (items) => (Array.isArray(items) ? items : [])
    .map((item) => ({
      studentId: item.studentId || "",
      startTime: item.startTime || "",
      endTime: item.endTime || "",
      scheduleType: item.scheduleType === "adjusted" ? "adjusted" : "official",
      overrideReason: item.overrideReason || ""
    }))
    .sort((a, b) => a.studentId.localeCompare(b.studentId));
  return JSON.stringify(normalize(left)) === JSON.stringify(normalize(right));
}

function isAdditiveOnlySpecialLectureRosterChange(row = {}) {
  const existingLesson = row.existingLesson;
  if (!existingLesson || existingLesson.status === "completed") return false;
  if (existingLesson.date !== row.date || existingLesson.startTime !== row.startTime || existingLesson.endTime !== row.endTime) return false;
  const existingStudentIds = [...new Set(existingLesson.studentIds ?? [])];
  const nextStudentIds = new Set(row.studentIds ?? []);
  if (!existingStudentIds.every((studentId) => nextStudentIds.has(studentId))) return false;
  if (nextStudentIds.size <= existingStudentIds.length) return false;
  const existingStudentIdSet = new Set(existingStudentIds);
  const preservedSchedules = (row.specialLectureStudentSchedules ?? [])
    .filter((schedule) => existingStudentIdSet.has(schedule.studentId));
  return haveSameSpecialLectureStudentSchedules(existingLesson.specialLectureStudentSchedules, preservedSchedules);
}

function getSpecialLectureSessionPlanError(plan = {}, session = {}) {
  if (plan.status !== "active") return "";
  const effective = getEffectiveSpecialLectureSession(session, plan);
  if (!effective.startTime || !effective.endTime) return "실제 시간을 확인해 주세요.";
  if (effective.startTime >= effective.endTime) return "종료 시간은 시작 시간보다 늦어야 합니다.";
  return "";
}

function getEnrollmentPlansFromApplication(application = {}, guideSessions = []) {
  if (!application.requestedSessionPlans?.length) {
    if (application.source !== "tally") return null;
    return guideSessions.map((session) => ({
      sessionId: session.sessionId,
      status: "excluded",
      effectiveStartTime: "",
      effectiveEndTime: "",
      overrideReason: ""
    }));
  }
  const requestedPlanByIndex = new Map(application.requestedSessionPlans.map((plan) => [plan.sessionIndex, plan]));
  return guideSessions.map((session) => {
    const requestedPlan = requestedPlanByIndex.get(session.sessionIndex);
    if (!requestedPlan) {
      return {
        sessionId: session.sessionId,
        status: "excluded",
        effectiveStartTime: "",
        effectiveEndTime: "",
        overrideReason: ""
      };
    }
    const requestedStartTime = requestedPlan.requestedStartTime || session.startTime;
    const requestedEndTime = requestedPlan.requestedEndTime || session.endTime;
    const isOfficialTime = requestedStartTime === session.startTime && requestedEndTime === session.endTime;
    return {
      sessionId: session.sessionId,
      status: "active",
      effectiveStartTime: isOfficialTime ? "" : requestedPlan.requestedStartTime || "",
      effectiveEndTime: isOfficialTime ? "" : requestedPlan.requestedEndTime || "",
      overrideReason: isOfficialTime ? "" : requestedPlan.overrideReason || ""
    };
  });
}

function buildEnrollmentFromMatchRow(row, guide, guideSessions = [], existingEnrollment = null) {
  const studentId = row.student?.studentId ?? "";
  const requestedPlans = getEnrollmentPlansFromApplication(row.application, guideSessions);
  const defaultSessionIds = guideSessions.map((session) => session.sessionId);
  const sessionPlans = existingEnrollment?.sessionPlans?.length
    ? existingEnrollment.sessionPlans
    : requestedPlans ?? defaultSessionIds.map((sessionId) => ({
        sessionId,
        status: "excluded",
        effectiveStartTime: "",
        effectiveEndTime: "",
        overrideReason: ""
      }));
  return normalizeSpecialLectureEnrollment({
    ...(existingEnrollment ?? {}),
    enrollmentId: existingEnrollment?.enrollmentId || createSpecialLectureEnrollmentId(guide, studentId),
    specialLectureGuideId: guide.specialLectureGuideId,
    guideSlug: getSpecialLectureGuideSlug(guide),
    applicationId: row.application.applicationId,
    studentId,
    status: "active",
    sessionIds: sessionPlans.filter((plan) => plan.status === "active").map((plan) => plan.sessionId),
    sessionPlans,
    planSource: existingEnrollment?.planSource || (requestedPlans ? "tally_request" : "manual"),
    planReviewedAt: existingEnrollment?.planReviewedAt || "",
    memo: existingEnrollment?.memo || row.application.selectedSession || row.application.memo || "",
    createdAt: existingEnrollment?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
}

function getSpecialLectureEnrollmentSessionPlans(enrollment = {}, guideSessions = []) {
  const savedPlans = new Map((enrollment.sessionPlans ?? []).map((plan) => [plan.sessionId, plan]));
  const selectedSessionIds = new Set(enrollment.sessionIds ?? []);
  return guideSessions.map((session) => {
    const savedPlan = savedPlans.get(session.sessionId);
    return {
      sessionId: session.sessionId,
      status: savedPlan?.status === "excluded" || (!savedPlan && !selectedSessionIds.has(session.sessionId))
        ? "excluded"
        : "active",
      effectiveStartTime: savedPlan?.effectiveStartTime || "",
      effectiveEndTime: savedPlan?.effectiveEndTime || "",
      overrideReason: savedPlan?.overrideReason || ""
    };
  });
}

function getEffectiveSpecialLectureSession(session = {}, plan = {}) {
  return {
    startTime: plan.effectiveStartTime || session.startTime,
    endTime: plan.effectiveEndTime || session.endTime
  };
}

function buildSpecialLectureLessonDrafts({ enrollments = [], guide = null, lessons = [], students = [] } = {}) {
  if (!guide) return [];
  const guideSessions = getSpecialLectureGuideSessions(guide);
  const activeEnrollments = normalizeSpecialLectureEnrollments(enrollments)
    .filter((enrollment) => enrollment.status === "active")
    .filter((enrollment) => enrollment.planReviewedAt)
    .filter((enrollment) => getEnrollmentStudent(enrollment, students))
    .sort((left, right) => {
      const leftStudent = getEnrollmentStudent(left, students);
      const rightStudent = getEnrollmentStudent(right, students);
      const nameCompare = String(leftStudent?.name ?? "").localeCompare(String(rightStudent?.name ?? ""), "ko", {
        numeric: true,
        sensitivity: "base"
      });
      return nameCompare || String(left.studentId ?? "").localeCompare(String(right.studentId ?? ""));
    });
  const lessonTrackId = getSpecialLectureLessonTrackId(guide);
  return guideSessions.map((session) => {
    const specialLectureStudentSchedules = activeEnrollments.flatMap((enrollment) => {
      const plan = getSpecialLectureEnrollmentSessionPlans(enrollment, guideSessions)
        .find((item) => item.sessionId === session.sessionId);
      if (!plan || plan.status !== "active") return [];
      const effectiveSession = getEffectiveSpecialLectureSession(session, plan);
      if (!effectiveSession.startTime || !effectiveSession.endTime) return [];
      const isAdjusted = effectiveSession.startTime !== session.startTime || effectiveSession.endTime !== session.endTime;
      return [{
        studentId: enrollment.studentId,
        startTime: effectiveSession.startTime,
        endTime: effectiveSession.endTime,
        scheduleType: isAdjusted ? "adjusted" : "official",
        overrideReason: isAdjusted ? plan.overrideReason || "" : ""
      }];
    });
    const lessonId = createSpecialLectureLessonId(guide, session, session.sessionIndex);
    const existingLesson = lessons.find((lesson) => lesson.lessonId === lessonId);
    return {
      ...(existingLesson ?? {}),
      lessonId,
      classTemplateId: "",
      className: guide.title || "특강",
      lessonType: "specialLecture",
      lessonTopic: session.topic || guide.defaultSessionTopic || guide.title || "특강 수업",
      date: session.dateKey,
      startTime: session.startTime,
      endTime: session.endTime,
      color: existingLesson?.color || "#93c5fd",
      studentIds: specialLectureStudentSchedules.map((schedule) => schedule.studentId),
      specialLectureStudentSchedules,
      lessonTrackId,
      lessonTrackType: "specialLecture",
      specialLectureGuideId: guide.specialLectureGuideId,
      specialLectureSessionId: session.sessionId,
      specialLectureSessionIndex: session.sessionIndex,
      status: existingLesson?.status || "scheduled"
    };
  })
    .sort((left, right) => String(left.date).localeCompare(String(right.date)) || String(left.startTime).localeCompare(String(right.startTime)));
}

export function SpecialLectureApplicationPanel({
  applications = [],
  enrollments = [],
  guides = defaultSpecialLectureGuides,
  lessons = [],
  notificationJobs = [],
  records = [],
  isGuideSaved = false,
  manualIntakeRequest = 0,
  onCreateSpecialLectureLessons,
  onCreateStudent,
  onDeleteApplication,
  onOpenLesson,
  onSaveEnrollment,
  onSaveEnrollments,
  onUpdateApplication,
  selectedGuide = null,
  students = []
}) {
  const [panelMessage, setPanelMessage] = useState("");
  const [enrollmentDrafts, setEnrollmentDrafts] = useState({});
  const [lessonCreateState, setLessonCreateState] = useState({ state: "idle", message: "" });
  const [savingEnrollmentId, setSavingEnrollmentId] = useState("");
  const [updatingApplicationId, setUpdatingApplicationId] = useState("");
  const [deletingApplicationId, setDeletingApplicationId] = useState("");
  const [applicationGuideDrafts, setApplicationGuideDrafts] = useState({});
  const [manualPickerOpen, setManualPickerOpen] = useState(false);
  const [manualSearchText, setManualSearchText] = useState("");
  const [manualSelectedStudentIds, setManualSelectedStudentIds] = useState([]);
  const [matchApplication, setMatchApplication] = useState(null);
  const [matchSearchText, setMatchSearchText] = useState("");
  const [matchStudentId, setMatchStudentId] = useState("");
  const [planModalEnrollment, setPlanModalEnrollment] = useState(null);
  const [planSaveState, setPlanSaveState] = useState({ message: "", state: "idle" });
  const [commonSessionTimeDraft, setCommonSessionTimeDraft] = useState({ endTime: "", overrideReason: "", startTime: "" });
  const [editingSessionOverrideId, setEditingSessionOverrideId] = useState("");
  const [selectedPlanProgressSessionId, setSelectedPlanProgressSessionId] = useState("");
  const [progressModalEnrollment, setProgressModalEnrollment] = useState(null);
  const [isEnrollmentPanelOpen, setIsEnrollmentPanelOpen] = useState(false);
  const [isLessonPreviewOpen, setIsLessonPreviewOpen] = useState(false);
  const [hasDismissedNoLessonChanges, setHasDismissedNoLessonChanges] = useState(false);

  useEffect(() => {
    if (manualIntakeRequest > 0) setManualPickerOpen(true);
  }, [manualIntakeRequest]);

  useEffect(() => {
    setHasDismissedNoLessonChanges(false);
  }, [selectedGuide?.specialLectureGuideId]);

  const normalizedGuides = useMemo(() => normalizeSpecialLectureGuides(guides), [guides]);
  const normalizedApplications = useMemo(
    () => normalizeSpecialLectureApplications(applications)
      .sort((first, second) => new Date(second.createdAt).getTime() - new Date(first.createdAt).getTime()),
    [applications]
  );
  const activeApplications = normalizedApplications.filter((application) => application.status !== "canceled");
  const normalizedEnrollments = useMemo(
    () => normalizeSpecialLectureEnrollments(enrollments)
      .sort((first, second) => new Date(first.createdAt).getTime() - new Date(second.createdAt).getTime()),
    [enrollments]
  );
  const knownGuideKeys = useMemo(() => new Set(normalizedGuides.flatMap((guide) => [
    guide.specialLectureGuideId,
    getSpecialLectureGuideSlug(guide)
  ]).filter(Boolean)), [normalizedGuides]);
  const selectedGuideApplications = selectedGuide
    ? activeApplications.filter((application) => doesSpecialLectureApplicationMatchGuide(application, selectedGuide))
    : activeApplications;
  const selectedGuideEnrollments = selectedGuide
    ? normalizedEnrollments.filter((enrollment) => doesSpecialLectureEnrollmentMatchGuide(enrollment, selectedGuide))
    : normalizedEnrollments;
  const unmatchedApplications = activeApplications.filter((application) => {
    const keys = [application.specialLectureGuideId, application.guideSlug].filter(Boolean);
    return !keys.length || keys.every((key) => !knownGuideKeys.has(key));
  });
  const statusCounts = selectedGuideApplications.reduce((counts, application) => ({
    ...counts,
    [application.status]: (counts[application.status] ?? 0) + 1
  }), {});
  const statusSummary = specialLectureApplicationStatusOptions
    .filter((option) => option.value !== "canceled")
    .map((option) => ({
      ...option,
      count: statusCounts[option.value] ?? 0
    }));
  const enrollmentByStudentId = new Map(selectedGuideEnrollments.map((enrollment) => [enrollment.studentId, enrollment]));
  const enrollmentByApplicationId = new Map(selectedGuideEnrollments
    .filter((enrollment) => enrollment.applicationId)
    .map((enrollment) => [enrollment.applicationId, enrollment]));
  const automaticConfirmedMatchRows = useMemo(
    () => buildSpecialLectureMatchRows(activeApplications, selectedGuide, students),
    [activeApplications, selectedGuide, students]
  );
  const confirmedMatchRows = automaticConfirmedMatchRows.map((row) => {
    const linkedEnrollment = enrollmentByApplicationId.get(row.application.applicationId);
    const linkedStudent = linkedEnrollment ? getEnrollmentStudent(linkedEnrollment, students) : null;
    return linkedStudent ? {
      ...row,
      status: "matched",
      student: linkedStudent,
      candidates: [linkedStudent],
      reason: "선생님 직접 연결"
    } : row;
  });
  const matchedRows = confirmedMatchRows.filter((row) => row.status === "matched" && row.student);
  const needsReviewRows = confirmedMatchRows.filter((row) => row.status !== "matched" || !row.student);
  const needsReviewApplicationIds = new Set(needsReviewRows.map((row) => row.application.applicationId));
  const linkedApplicationIds = new Set(normalizedEnrollments.map((enrollment) => enrollment.applicationId).filter(Boolean));
  const attentionApplicationRows = [
    ...needsReviewRows.map((row) => ({ ...row, attentionType: "student_match" })),
    ...unmatchedApplications
      .filter((application) => !needsReviewApplicationIds.has(application.applicationId))
      .map((application) => ({
        application,
        attentionType: "guide_match",
        reason: "연결된 특강 안내문 없음"
      }))
  ].filter((row) => !linkedApplicationIds.has(row.application.applicationId));
  const visibleApplications = selectedGuideApplications.slice(0, 8);
  const visibleUnmatchedApplications = unmatchedApplications.slice(0, 3);
  const guideSessions = useMemo(() => getSpecialLectureGuideSessions(selectedGuide), [selectedGuide]);
  const guideSessionIds = guideSessions.map((session) => session.sessionId);
  const activeEnrollments = selectedGuideEnrollments.filter((enrollment) => enrollment.status === "active");
  const canceledEnrollments = selectedGuideEnrollments.filter((enrollment) => enrollment.status === "canceled");
  const duplicateEnrollmentIdentityRows = [...activeEnrollments.reduce((groups, enrollment) => {
    const student = getEnrollmentStudent(enrollment, students);
    const nameKey = normalizeSpecialLectureMatchText(student?.name);
    if (!nameKey) return groups;
    groups.set(nameKey, [...(groups.get(nameKey) ?? []), { enrollment, student }]);
    return groups;
  }, new Map()).values()].filter((rows) => rows.length > 1);
  const unreviewedEnrollmentRows = activeEnrollments.filter((enrollment) => !enrollment.planReviewedAt);
  const missingEnrollmentRows = matchedRows.filter((row) => row.student?.studentId &&
    !enrollmentByStudentId.has(row.student.studentId) &&
    !enrollmentByApplicationId.has(row.application.applicationId));
  const lessonDrafts = useMemo(
    () => buildSpecialLectureLessonDrafts({ enrollments: selectedGuideEnrollments, guide: selectedGuide, lessons, students }),
    [selectedGuideEnrollments, selectedGuide, lessons, students]
  );
  const lessonPreviewRows = lessonDrafts.map((draft) => ({
    ...draft,
    attendees: draft.studentIds.map((studentId) => students.find((student) => student.studentId === studentId)).filter(Boolean),
    existingLesson: lessons.find((lesson) => lesson.lessonId === draft.lessonId) ?? null
  }));
  const officialSessionAssignmentCounts = new Map(guideSessions.map((session) => [session.sessionId, 0]));
  activeEnrollments.forEach((enrollment) => {
    getSpecialLectureEnrollmentSessionPlans(enrollment, guideSessions).forEach((plan) => {
      if (plan.status === "active") officialSessionAssignmentCounts.set(plan.sessionId, (officialSessionAssignmentCounts.get(plan.sessionId) ?? 0) + 1);
    });
  });
  const emptySessionCount = [...officialSessionAssignmentCounts.values()].filter((count) => count === 0).length;
  const changedLessonRows = lessonPreviewRows.filter((row) => row.existingLesson && (
    row.existingLesson.date !== row.date ||
    row.existingLesson.startTime !== row.startTime ||
    row.existingLesson.endTime !== row.endTime ||
    !haveSameStudentIds(row.existingLesson.studentIds, row.studentIds) ||
    !haveSameSpecialLectureStudentSchedules(row.existingLesson.specialLectureStudentSchedules, row.specialLectureStudentSchedules)
  ));
  const staleLessonRows = lessons.filter((lesson) =>
    lesson.specialLectureGuideId === selectedGuide?.specialLectureGuideId &&
    !lessonDrafts.some((draft) => draft.lessonId === lesson.lessonId)
  );
  const allNewLessonDrafts = lessonDrafts.filter((draft) => !lessons.some((lesson) => lesson.lessonId === draft.lessonId));
  const invalidPlanRows = activeEnrollments.flatMap((enrollment) => {
    const plans = getSpecialLectureEnrollmentSessionPlans(enrollment, guideSessions);
    return plans.map((plan) => ({
      enrollment,
      plan,
      error: getSpecialLectureSessionPlanError(plan, guideSessions.find((session) => session.sessionId === plan.sessionId))
    })).filter((row) => row.error);
  });
  const todayDateKey = getTodayDateKey();
  const newLessonDrafts = allNewLessonDrafts.filter((draft) => draft.date >= todayDateKey);
  const pastMissingLessonRows = allNewLessonDrafts.filter((draft) => draft.date < todayDateKey);
  const pendingNotificationStatuses = new Set(["draft", "queued", "scheduled", "pending_send"]);
  const lockedLessonRows = changedLessonRows.filter((row) => {
    const hasRecords = records.some((record) => record.lessonId === row.lessonId);
    const hasPendingNotifications = notificationJobs.some((job) => job.lessonId === row.lessonId && pendingNotificationStatuses.has(job.status));
    return row.date <= todayDateKey || row.existingLesson?.status === "completed" || hasRecords || hasPendingNotifications;
  });
  const lockedLessonIds = new Set(lockedLessonRows.map((row) => row.lessonId));
  const syncableChangedRows = changedLessonRows.filter((row) => !lockedLessonIds.has(row.lessonId));
  const additiveLockedLessonRows = lockedLessonRows.filter((row) => {
    const hasPendingNotifications = notificationJobs.some((job) => job.lessonId === row.lessonId && pendingNotificationStatuses.has(job.status));
    return !hasPendingNotifications && isAdditiveOnlySpecialLectureRosterChange(row);
  });
  const protectedLockedLessonRows = lockedLessonRows.filter((row) => !additiveLockedLessonRows.some((candidate) => candidate.lessonId === row.lessonId));
  const lessonSyncDrafts = [...newLessonDrafts, ...syncableChangedRows];
  const canCreateLessons = Boolean(
    isGuideSaved && selectedGuide && guideSessions.length && lessonSyncDrafts.length && !invalidPlanRows.length && !duplicateEnrollmentIdentityRows.length
  );
  const availableManualStudents = students
    .filter(isActiveRosterStudent)
    .filter((student) => !enrollmentByStudentId.has(student.studentId))
    .filter((student) => {
      const query = manualSearchText.trim().toLowerCase();
      if (!query) return true;
      return [student.name, student.schoolName, student.grade, student.className]
        .some((value) => String(value ?? "").toLowerCase().includes(query));
    });
  const availableMatchStudents = students
    .filter(isActiveRosterStudent)
    .filter((student) => {
      const query = matchSearchText.trim().toLowerCase();
      if (!query) return true;
      return [student.name, student.schoolName, student.grade, student.className]
        .some((value) => String(value ?? "").toLowerCase().includes(query));
    });
  function getEnrollmentProgressRows(enrollment) {
    if (!enrollment) return [];
    const plans = getSpecialLectureEnrollmentSessionPlans(enrollment, guideSessions);
    return guideSessions.map((session) => {
      const lesson = lessons.find((item) => item.specialLectureGuideId === selectedGuide?.specialLectureGuideId && item.specialLectureSessionId === session.sessionId) ?? null;
      const plan = plans.find((item) => item.sessionId === session.sessionId);
      const record = lesson
        ? records.find((item) => item.lessonId === lesson.lessonId && item.studentId === enrollment.studentId) ?? null
        : null;
      return { lesson, plan, record, session };
    });
  }

  const progressEnrollment = progressModalEnrollment
    ? selectedGuideEnrollments.find((item) => item.enrollmentId === progressModalEnrollment.enrollmentId) ?? progressModalEnrollment
    : null;
  const progressStudent = progressEnrollment ? getEnrollmentStudent(progressEnrollment, students) : null;
  const progressPlans = progressEnrollment ? getSpecialLectureEnrollmentSessionPlans(progressEnrollment, guideSessions) : [];
  const progressRows = getEnrollmentProgressRows(progressEnrollment);
  const webhookUrl = apiUrl("/api/special-lecture-applications/tally");

  async function copyWebhookUrl() {
    setPanelMessage("");
    const copied = await copyTextToClipboard(webhookUrl);
    setPanelMessage(copied ? "Tally 웹훅 URL을 복사했습니다." : "웹훅 URL 복사에 실패했습니다.");
  }

  async function updateApplicationStatus(application, status) {
    if (!onUpdateApplication || !application.applicationId) return;
    setPanelMessage("");
    setUpdatingApplicationId(application.applicationId);
    try {
      const savedApplication = await onUpdateApplication(application.applicationId, { status });
      setPanelMessage(`${application.studentName || "신청자"} 상태를 ${getSpecialLectureApplicationStatusLabel(status)}(으)로 저장했습니다.`);
      return savedApplication ?? { ...application, status };
    } catch (error) {
      setPanelMessage(`신청자 상태 저장 실패: ${error.message}`);
    } finally {
      setUpdatingApplicationId("");
    }
  }

  async function confirmApplicationWithStudent(application, student) {
    if (!onUpdateApplication || !onSaveEnrollment || !selectedGuide || !isGuideSaved) return;
    const existingEnrollment = enrollmentByStudentId.get(student.studentId);
    if (existingEnrollment?.applicationId && existingEnrollment.applicationId !== application.applicationId) {
      setPanelMessage(`${student.name} 학생은 이미 다른 신청 원본으로 이 특강 명단에 연결되어 있습니다.`);
      return;
    }
    setUpdatingApplicationId(application.applicationId);
    setPanelMessage("");
    try {
      const confirmedApplication = application.status === "confirmed"
        ? application
        : await onUpdateApplication(application.applicationId, { status: "confirmed" });
      const enrollment = buildEnrollmentFromMatchRow(
        { application: confirmedApplication ?? { ...application, status: "confirmed" }, student },
        selectedGuide,
        guideSessions,
        existingEnrollment
      );
      const savedEnrollment = await onSaveEnrollment(enrollment);
      openPlanModal(savedEnrollment ?? enrollment);
      setMatchApplication(null);
      setMatchSearchText("");
      setMatchStudentId("");
      setPanelMessage(`${student.name} 학생을 확정 명단에 연결했습니다. 모달에서 수강 회차와 시간을 확인해 주세요.`);
    } catch (error) {
      setPanelMessage(`특강 확정 준비 실패: ${error.message}`);
    } finally {
      setUpdatingApplicationId("");
    }
  }

  async function confirmApplicationAndOpenPlan(application) {
    const linkedEnrollment = enrollmentByApplicationId.get(application.applicationId);
    if (linkedEnrollment) {
      openPlanModal(linkedEnrollment);
      return;
    }
    const match = getSpecialLectureStudentMatch(application, students);
    if (match.status === "matched" && match.student) {
      await confirmApplicationWithStudent(application, match.student);
      return;
    }
    setMatchApplication(application);
    setMatchStudentId(match.candidates?.length === 1 ? match.candidates[0].studentId : "");
    setMatchSearchText(application.studentName || "");
    setPanelMessage(`${application.studentName || "신청자"} 학생을 전체 학생 명단에서 직접 선택하거나 특강 전용 학생으로 등록해 주세요.`);
  }

  async function confirmManualStudentMatch() {
    if (!matchApplication || !matchStudentId) return;
    const student = students.find((item) => item.studentId === matchStudentId);
    if (!student) {
      setPanelMessage("연결할 학생을 찾지 못했습니다.");
      return;
    }
    await confirmApplicationWithStudent(matchApplication, student);
  }

  async function deleteErrorApplication(application) {
    if (!onDeleteApplication || !application?.applicationId) return;
    const studentName = application.studentName || "이름 미입력 신청자";
    const confirmed = window.confirm(
      `${studentName}의 Tally 특강 신청 원본을 삭제할까요?\n\n확정 명단에 연결된 신청은 삭제되지 않으며, 삭제한 오류 원본은 복구할 수 없습니다.`
    );
    if (!confirmed) return;
    setDeletingApplicationId(application.applicationId);
    setPanelMessage("");
    try {
      await onDeleteApplication(application.applicationId);
      if (matchApplication?.applicationId === application.applicationId) {
        setMatchApplication(null);
        setMatchSearchText("");
        setMatchStudentId("");
      }
      setPanelMessage(`${studentName}의 오류 신청 원본을 Supabase에서 삭제하고 재조회로 확인했습니다.`);
    } catch (error) {
      setPanelMessage(`특강 신청 원본 삭제 실패: ${error.message}`);
    } finally {
      setDeletingApplicationId("");
    }
  }

  async function registerSpecialLectureStudent() {
    if (!matchApplication || !onCreateStudent) return;
    setUpdatingApplicationId(matchApplication.applicationId);
    setPanelMessage("");
    try {
      const student = await onCreateStudent(matchApplication);
      await confirmApplicationWithStudent(matchApplication, student);
    } catch (error) {
      setPanelMessage(`특강 전용 학생 등록 실패: ${error.message}`);
    } finally {
      setUpdatingApplicationId("");
    }
  }

  async function updateApplicationGuide(application, targetGuide) {
    if (!onUpdateApplication || !application.applicationId || !targetGuide) return;
    const linkedEnrollment = normalizedEnrollments.find((enrollment) => enrollment.applicationId === application.applicationId);
    if (linkedEnrollment) {
      setPanelMessage(`${application.studentName || "신청자"} 신청은 이미 확정 명단에 추가되어 연결을 자동 변경할 수 없습니다. 수업일지·출결·알림톡 영향을 먼저 확인해 주세요.`);
      return;
    }
    const guideId = String(targetGuide.specialLectureGuideId ?? "").trim();
    const guideSlug = getSpecialLectureGuideSlug(targetGuide);
    if (!guideId || !guideSlug) {
      setPanelMessage("연결할 특강의 저장 식별자를 확인할 수 없습니다.");
      return;
    }
    const campaign = [
      targetGuide.year,
      targetGuide.season,
      targetGuide.title
    ].filter(Boolean).join("_").replace(/\s+/g, "_") || application.campaign || "special_lecture";
    setPanelMessage("");
    setUpdatingApplicationId(application.applicationId);
    try {
      await onUpdateApplication(application.applicationId, {
        specialLectureGuideId: guideId,
        guideSlug,
        campaign
      });
      setApplicationGuideDrafts((current) => {
        const next = { ...current };
        delete next[application.applicationId];
        return next;
      });
      setPanelMessage(`${application.studentName || "신청자"} 신청을 '${targetGuide.title || guideSlug}' 특강으로 수정했습니다.`);
    } catch (error) {
      setPanelMessage(`신청 특강 연결 수정 실패: ${error.message}`);
    } finally {
      setUpdatingApplicationId("");
    }
  }

  async function matchApplicationToCurrentGuide(application) {
    await updateApplicationGuide(application, selectedGuide);
  }

  function getApplicationGuideDraftId(application) {
    return applicationGuideDrafts[application.applicationId]
      ?? application.specialLectureGuideId
      ?? normalizedGuides.find((guide) => getSpecialLectureGuideSlug(guide) === application.guideSlug)?.specialLectureGuideId
      ?? "";
  }

  function saveApplicationGuideDraft(application) {
    const targetGuideId = getApplicationGuideDraftId(application);
    const targetGuide = normalizedGuides.find((guide) => guide.specialLectureGuideId === targetGuideId);
    return updateApplicationGuide(application, targetGuide);
  }

  function getEnrollmentDraft(enrollment) {
    return {
      memo: enrollment.memo,
      sessionIds: enrollment.sessionIds,
      sessionPlans: getSpecialLectureEnrollmentSessionPlans(enrollment, guideSessions),
      status: enrollment.status,
      ...(enrollmentDrafts[enrollment.enrollmentId] ?? {})
    };
  }

  function openPlanModal(enrollment) {
    const activeAdjustedPlans = getSpecialLectureEnrollmentSessionPlans(enrollment, guideSessions)
      .filter((plan) => plan.status === "active" && plan.effectiveStartTime && plan.effectiveEndTime);
    const commonTimeCounts = new Map();
    activeAdjustedPlans.forEach((plan) => {
      const key = `${plan.effectiveStartTime}|${plan.effectiveEndTime}|${plan.overrideReason || ""}`;
      commonTimeCounts.set(key, (commonTimeCounts.get(key) ?? 0) + 1);
    });
    const commonTimeKey = [...commonTimeCounts.entries()].sort((left, right) => right[1] - left[1])[0]?.[0] ?? "";
    const [startTime = "", endTime = "", overrideReason = ""] = commonTimeKey.split("|");
    setCommonSessionTimeDraft({ startTime, endTime, overrideReason });
    setEditingSessionOverrideId("");
    setSelectedPlanProgressSessionId("");
    setPlanModalEnrollment(enrollment);
    setPlanSaveState({ message: "", state: "idle" });
  }

  function closePlanModal() {
    setPlanModalEnrollment(null);
    setEditingSessionOverrideId("");
    setSelectedPlanProgressSessionId("");
    setPlanSaveState({ message: "", state: "idle" });
  }

  function updateEnrollmentDraft(enrollmentId, patch) {
    setEnrollmentDrafts((current) => ({
      ...current,
      [enrollmentId]: {
        ...(current[enrollmentId] ?? {}),
        ...patch
      }
    }));
    setPlanSaveState({ message: "수정한 회차 계획을 저장해 주세요.", state: "dirty" });
  }

  function toggleEnrollmentSession(enrollment, sessionId) {
    const draft = getEnrollmentDraft(enrollment);
    const sessionPlans = draft.sessionPlans.map((plan) => plan.sessionId === sessionId
      ? { ...plan, status: plan.status === "active" ? "excluded" : "active" }
      : plan);
    updateEnrollmentDraft(enrollment.enrollmentId, {
      sessionIds: sessionPlans.filter((plan) => plan.status === "active").map((plan) => plan.sessionId),
      sessionPlans
    });
  }

  function isEnrollmentSessionLocked(session) {
    return (session.dateKey || session.date) <= todayDateKey &&
      lessons.some((lesson) => lesson.specialLectureSessionId === session.sessionId);
  }

  function setAllEnrollmentSessions(enrollment, status) {
    const draft = getEnrollmentDraft(enrollment);
    const sessionPlans = draft.sessionPlans.map((plan) => ({ ...plan, status }));
    updateEnrollmentDraft(enrollment.enrollmentId, {
      sessionIds: sessionPlans.filter((plan) => plan.status === "active").map((plan) => plan.sessionId),
      sessionPlans
    });
  }

  function updateEnrollmentSessionPlan(enrollment, sessionId, patch) {
    const draft = getEnrollmentDraft(enrollment);
    const sessionPlans = draft.sessionPlans.map((plan) => plan.sessionId === sessionId ? { ...plan, ...patch } : plan);
    updateEnrollmentDraft(enrollment.enrollmentId, {
      sessionIds: sessionPlans.filter((plan) => plan.status === "active").map((plan) => plan.sessionId),
      sessionPlans
    });
  }

  function applyCommonTimeToSelectedSessions(enrollment) {
    const { startTime, endTime, overrideReason } = commonSessionTimeDraft;
    if (!startTime || !endTime || startTime >= endTime) {
      setPlanSaveState({ message: "공통 시작·종료 시간을 확인해 주세요.", state: "failed" });
      return;
    }
    const draft = getEnrollmentDraft(enrollment);
    const sessionPlans = draft.sessionPlans.map((plan) => {
      if (plan.status !== "active") return plan;
      const session = guideSessions.find((item) => item.sessionId === plan.sessionId);
      const usesOfficialTime = session?.startTime === startTime && session?.endTime === endTime;
      return {
        ...plan,
        effectiveStartTime: usesOfficialTime ? "" : startTime,
        effectiveEndTime: usesOfficialTime ? "" : endTime,
        overrideReason: usesOfficialTime ? "" : String(overrideReason).trim()
      };
    });
    updateEnrollmentDraft(enrollment.enrollmentId, { sessionPlans });
    setPlanSaveState({ message: `선택한 회차에 ${startTime}-${endTime}을 적용했습니다. 저장해 주세요.`, state: "dirty" });
  }

  function resetSelectedSessionsToOfficialTime(enrollment) {
    const draft = getEnrollmentDraft(enrollment);
    const sessionPlans = draft.sessionPlans.map((plan) => plan.status === "active"
      ? { ...plan, effectiveStartTime: "", effectiveEndTime: "", overrideReason: "" }
      : plan);
    updateEnrollmentDraft(enrollment.enrollmentId, { sessionPlans });
  }

  async function addMatchedRowsToEnrollmentSource() {
    if (!onSaveEnrollments || !isGuideSaved || !selectedGuide || !guideSessionIds.length || !missingEnrollmentRows.length) return;
    setPanelMessage("");
    setSavingEnrollmentId("bulk");
    try {
      const nextEnrollments = missingEnrollmentRows.map((row) =>
        buildEnrollmentFromMatchRow(row, selectedGuide, guideSessions)
      );
      await onSaveEnrollments(nextEnrollments);
      setPanelMessage(`확정 수강명단 ${nextEnrollments.length}건을 저장했습니다. 학생별 회차를 확인한 뒤 수업일지를 생성하세요.`);
    } catch (error) {
      setPanelMessage(`확정 수강명단 저장 실패: ${error.message}`);
    } finally {
      setSavingEnrollmentId("");
    }
  }

  async function addManualStudents() {
    if (!onSaveEnrollments || !selectedGuide || !isGuideSaved || !manualSelectedStudentIds.length) return;
    const selectedStudents = students.filter((student) => manualSelectedStudentIds.includes(student.studentId));
    const nowIso = new Date().toISOString();
    const enrollmentsToSave = selectedStudents.map((student) => normalizeSpecialLectureEnrollment({
      enrollmentId: createSpecialLectureEnrollmentId(selectedGuide, student.studentId),
      specialLectureGuideId: selectedGuide.specialLectureGuideId,
      guideSlug: getSpecialLectureGuideSlug(selectedGuide),
      applicationId: "",
      studentId: student.studentId,
      status: "active",
      sessionIds: [],
      sessionPlans: guideSessions.map((session) => ({
        sessionId: session.sessionId,
        status: "excluded",
        effectiveStartTime: "",
        effectiveEndTime: "",
        overrideReason: ""
      })),
      planSource: "manual",
      planReviewedAt: "",
      memo: "구두/수동 접수",
      createdAt: nowIso,
      updatedAt: nowIso
    }));
    setSavingEnrollmentId("manual");
    setPanelMessage("");
    try {
      const savedEnrollments = await onSaveEnrollments(enrollmentsToSave);
      const firstEnrollment = savedEnrollments?.[0] ?? enrollmentsToSave[0];
      setManualSelectedStudentIds([]);
      setManualPickerOpen(false);
      openPlanModal(firstEnrollment);
      setPanelMessage(`수동 접수 ${enrollmentsToSave.length}명을 추가했습니다. 학생별 회차 설정을 저장해 주세요.`);
    } catch (error) {
      setPanelMessage(`수동 접수 저장 실패: ${error.message}`);
    } finally {
      setSavingEnrollmentId("");
    }
  }

  async function saveEnrollmentDraft(enrollment) {
    if (!onSaveEnrollment || !isGuideSaved || !selectedGuide) return;
    const draft = getEnrollmentDraft(enrollment);
    const invalidPlan = draft.sessionPlans.find((plan) => getSpecialLectureSessionPlanError(
      plan,
      guideSessions.find((session) => session.sessionId === plan.sessionId)
    ));
    if (invalidPlan) {
      const message = `특강 회차 계획 저장 실패: ${getSpecialLectureSessionPlanError(invalidPlan, guideSessions.find((session) => session.sessionId === invalidPlan.sessionId))}`;
      setPanelMessage(message);
      setPlanSaveState({ message, state: "failed" });
      return;
    }
    const nextEnrollment = normalizeSpecialLectureEnrollment({
      ...enrollment,
      ...draft,
      specialLectureGuideId: selectedGuide.specialLectureGuideId,
      guideSlug: getSpecialLectureGuideSlug(selectedGuide),
      planReviewedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    setPanelMessage("");
    setSavingEnrollmentId(enrollment.enrollmentId);
    setPlanSaveState({ message: "Supabase에 회차 계획을 저장하고 있습니다.", state: "saving" });
    try {
      const savedEnrollment = await onSaveEnrollment(nextEnrollment);
      setEnrollmentDrafts((current) => {
        const nextDrafts = { ...current };
        delete nextDrafts[enrollment.enrollmentId];
        return nextDrafts;
      });
      setPlanModalEnrollment(savedEnrollment ?? nextEnrollment);
      const message = `${getEnrollmentStudent(enrollment, students)?.name || "학생"} 회차 계획을 저장했습니다. 새로고침 후에도 유지됩니다.`;
      setPanelMessage(message);
      setPlanSaveState({ message, state: "saved" });
    } catch (error) {
      const message = `특강 회차 계획 저장 실패: ${error.message}`;
      setPanelMessage(message);
      setPlanSaveState({ message, state: "failed" });
    } finally {
      setSavingEnrollmentId("");
    }
  }

  async function excludeRemainingSessions(enrollment) {
    if (!onSaveEnrollment || !selectedGuide || !isGuideSaved) return;
    const studentName = getEnrollmentStudent(enrollment, students)?.name || "학생";
    const confirmed = window.confirm(
      `${studentName} 학생의 오늘 이후 남은 회차만 취소할까요?\n\n이미 지난 회차와 오늘 수업, 기존 수업일지·출결 기록은 유지됩니다. 저장 후 아래 특강 수업일지 반영에서 미래 명단 변경을 확인해야 합니다.`
    );
    if (!confirmed) return;
    const plans = getSpecialLectureEnrollmentSessionPlans(enrollment, guideSessions).map((plan) => {
      const session = guideSessions.find((item) => item.sessionId === plan.sessionId);
      if (!session || (session.dateKey || session.date) <= todayDateKey) return plan;
      return {
        ...plan,
        status: "excluded",
        effectiveStartTime: "",
        effectiveEndTime: "",
        overrideReason: ""
      };
    });
    const nextEnrollment = normalizeSpecialLectureEnrollment({
      ...enrollment,
      sessionIds: plans.filter((plan) => plan.status === "active").map((plan) => plan.sessionId),
      sessionPlans: plans,
      planReviewedAt: enrollment.planReviewedAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    setSavingEnrollmentId(enrollment.enrollmentId);
    setPanelMessage("");
    try {
      await onSaveEnrollment(nextEnrollment);
      setPanelMessage(`${studentName}의 남은 회차 취소를 저장했습니다. 1/2 완료 · 아래 특강 수업일지 반영에서 미래 명단 변경을 확인해 주세요.`);
    } catch (error) {
      setPanelMessage(`남은 회차 취소 저장 실패: ${error.message}`);
    } finally {
      setSavingEnrollmentId("");
    }
  }

  async function cancelEnrollment(enrollment) {
    if (!onSaveEnrollment || !selectedGuide || !isGuideSaved) return;
    const studentName = getEnrollmentStudent(enrollment, students)?.name || "학생";
    const confirmed = window.confirm(
      `${studentName} 학생의 특강 신청 전체를 취소할까요?\n\n특강 신청과 학생별 회차 원본은 취소 기록으로 보존됩니다. 과거 수업일지·출결은 삭제하지 않으며, 저장 후 아래 특강 수업일지 반영에서 미래 명단 변경을 확인해야 합니다.`
    );
    if (!confirmed) return;
    const nextEnrollment = normalizeSpecialLectureEnrollment({
      ...enrollment,
      status: "canceled",
      planReviewedAt: enrollment.planReviewedAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    setSavingEnrollmentId(enrollment.enrollmentId);
    setPanelMessage("");
    try {
      await onSaveEnrollment(nextEnrollment);
      setEnrollmentDrafts((current) => {
        const nextDrafts = { ...current };
        delete nextDrafts[enrollment.enrollmentId];
        return nextDrafts;
      });
      if (planModalEnrollment?.enrollmentId === enrollment.enrollmentId) closePlanModal();
      setPanelMessage(`${studentName}의 특강 신청 취소를 Supabase 재조회로 확인했습니다. 1/2 완료 · 취소 기록은 보존되며, 아래 특강 수업일지 반영에서 미래 명단 변경을 확인해 주세요.`);
    } catch (error) {
      setPanelMessage(`특강 신청 취소 저장 실패: ${error.message}`);
    } finally {
      setSavingEnrollmentId("");
    }
  }

  async function createSpecialLectureLessons() {
    if (!onCreateSpecialLectureLessons || !canCreateLessons) return;
    setLessonCreateState({ state: "saving", message: "특강 개설/미래 명단을 반영하는 중입니다." });
    try {
      const savedLessons = await onCreateSpecialLectureLessons(lessonSyncDrafts, { openFirstLesson: newLessonDrafts.length > 0 });
      setLessonCreateState({
        state: "saved",
        message: `특강 수업 ${savedLessons.length}개를 반영했습니다. 신규 ${newLessonDrafts.length}개 · 미래 명단 변경 ${syncableChangedRows.length}개입니다.`
      });
    } catch (error) {
      setLessonCreateState({ state: "failed", message: `특강 수업일지 생성 실패: ${error.message}` });
    }
  }

  async function applyAdditiveLockedLessonRows() {
    if (!onCreateSpecialLectureLessons || !additiveLockedLessonRows.length || duplicateEnrollmentIdentityRows.length) return;
    const additions = additiveLockedLessonRows.reduce((count, row) => (
      count + Math.max(0, (row.studentIds?.length ?? 0) - (row.existingLesson?.studentIds?.length ?? 0))
    ), 0);
    const confirmed = window.confirm(
      `오늘/과거 특강 수업 ${additiveLockedLessonRows.length}개에 누락 학생 ${additions}명을 추가할까요?\n\n기존 학생, 시간, 출결 기록은 바꾸지 않고 명단에 학생만 추가합니다. 알림톡은 예약하거나 발송하지 않습니다.`
    );
    if (!confirmed) return;
    setLessonCreateState({ state: "saving", message: "잠긴 회차의 누락 학생을 Supabase 수업 명단에 반영하는 중입니다." });
    try {
      const savedLessons = await onCreateSpecialLectureLessons(additiveLockedLessonRows, { openFirstLesson: false });
      setLessonCreateState({
        state: "saved",
        message: `잠긴 회차 ${savedLessons.length}개에 누락 학생 명단을 추가하고 Supabase 재조회로 확인했습니다.`
      });
    } catch (error) {
      setLessonCreateState({ state: "failed", message: `잠긴 회차 명단 추가 실패: ${error.message}` });
    }
  }

  const hasActionableAttention = Boolean(
    attentionApplicationRows.length ||
    duplicateEnrollmentIdentityRows.length ||
    unreviewedEnrollmentRows.length ||
    invalidPlanRows.length ||
    lockedLessonRows.length ||
    pastMissingLessonRows.length ||
    staleLessonRows.length
  );
  const showNoLessonChangesNotice = !hasDismissedNoLessonChanges && !lessonSyncDrafts.length && !invalidPlanRows.length;
  const showAttentionPanel = hasActionableAttention || Boolean(panelMessage) || Boolean(lessonCreateState.message) || showNoLessonChangesNotice;

  return (
    <section className="specialLectureApplicationsPanel">
      {showAttentionPanel ? (
        <div className={hasActionableAttention ? "specialLectureAttentionPanel hasDanger" : "specialLectureAttentionPanel"}>
          <div className="specialLectureAttentionHeader">
            <strong>특강 상태 알림</strong>
            <span>Tally 신청, 학생 연결, 회차 설정과 수업일지 반영 상태를 먼저 확인해 주세요.</span>
          </div>
          {panelMessage ? (
            <div className="specialLectureDismissibleNotice">
              <p className={panelMessage.includes("실패") ? "inlineNotice danger" : "inlineNotice"}>{panelMessage}</p>
              <button className="softButton compact" onClick={() => setPanelMessage("")} type="button">확인</button>
            </div>
          ) : null}
          {attentionApplicationRows.length ? (
            <div className="specialLectureAttentionList">
              {attentionApplicationRows.map((row) => (
                <div className="specialLectureAttentionItem danger" key={`attention_${row.application.applicationId}`}>
                  <div>
                    <strong>{row.application.studentName || "이름 미입력 신청자"}</strong>
                    <span>{[row.application.schoolName, row.application.grade, row.reason, row.application.source === "tally" ? "Tally 신청" : "신청 원본"].filter(Boolean).join(" · ")}</span>
                  </div>
                  <div className="specialLectureAttentionActions">
                    {row.attentionType === "student_match" ? (
                      <button
                        className="primaryButton compact"
                        disabled={!isGuideSaved || updatingApplicationId === row.application.applicationId || deletingApplicationId === row.application.applicationId}
                        onClick={() => confirmApplicationAndOpenPlan(row.application)}
                        type="button"
                      >
                        학생 연결
                      </button>
                    ) : null}
                    <button
                      className="dangerSoftButton compact"
                      disabled={!onDeleteApplication || updatingApplicationId === row.application.applicationId || deletingApplicationId === row.application.applicationId}
                      onClick={() => deleteErrorApplication(row.application)}
                      type="button"
                    >
                      {deletingApplicationId === row.application.applicationId ? "삭제 확인 중" : "오류 신청 삭제"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          {unreviewedEnrollmentRows.map((enrollment) => {
            const student = getEnrollmentStudent(enrollment, students);
            return (
              <div className="specialLectureAttentionItem danger" key={`unreviewed_${enrollment.enrollmentId}`}>
                <div>
                  <strong>{student?.name || enrollment.studentId || "학생 미확인"}</strong>
                  <span>회차 미확정 · 수업일지 명단 반영 대상에서 제외됨</span>
                </div>
                <button className="primaryButton compact" disabled={!isGuideSaved} onClick={() => openPlanModal(enrollment)} type="button">회차 설정</button>
              </div>
            );
          })}
          {duplicateEnrollmentIdentityRows.map((rows) => (
            <div className="specialLectureAttentionItem danger" key={`duplicate_enrollment_${rows[0].student?.name}`}>
              <div>
                <strong>{rows[0].student?.name} 학생 연결이 {rows.length}건입니다.</strong>
                <span>{rows.map(({ student }) => [student?.schoolName, student?.grade].filter(Boolean).join(" · ") || student?.studentId).join(" / ")} · 회차 저장 전 올바른 학생을 확인해 주세요.</span>
              </div>
            </div>
          ))}
          {invalidPlanRows.length ? <p className="inlineNotice danger">시작·종료 시간을 확인해야 하는 학생별 회차가 {invalidPlanRows.length}건 있습니다.</p> : null}
          {additiveLockedLessonRows.length ? <p className="inlineNotice">오늘/과거 수업 중 기존 기록을 건드리지 않고 학생만 추가할 수 있는 회차가 {additiveLockedLessonRows.length}건 있습니다. 아래 `특강 수업일지 반영`에서 확인 후 추가하세요.</p> : null}
          {protectedLockedLessonRows.length ? <p className="inlineNotice danger">완료 수업, 기존 학생의 시간·명단 변경 또는 알림 예약이 포함된 {protectedLockedLessonRows.length}건은 자동 반영하지 않습니다.</p> : null}
          {pastMissingLessonRows.length ? <p className="inlineNotice danger">이미 지난 공식 회차 중 수업일지가 없는 {pastMissingLessonRows.length}건은 자동 생성하지 않습니다.</p> : null}
          {staleLessonRows.length ? <p className="inlineNotice danger">현재 공식 회차에서 빠졌지만 기존 달력에 남아 있는 특강 수업이 {staleLessonRows.length}건 있습니다.</p> : null}
          {lessonCreateState.message ? (
            <div className="specialLectureDismissibleNotice">
              <p className={lessonCreateState.state === "failed" ? "inlineNotice danger" : "inlineNotice"}>{lessonCreateState.message}</p>
              {lessonCreateState.state !== "saving" ? (
                <button
                  className="softButton compact"
                  onClick={() => setLessonCreateState({ state: "idle", message: "" })}
                  type="button"
                >
                  확인
                </button>
              ) : null}
            </div>
          ) : null}
          {showNoLessonChangesNotice ? (
            <div className="specialLectureDismissibleNotice">
              <p className="inlineNotice">현재 새로 만들 수업이나 안전하게 반영할 미래 명단 변경이 없습니다.</p>
              <button className="softButton compact" onClick={() => setHasDismissedNoLessonChanges(true)} type="button">확인</button>
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="specialLectureEnrollmentPanel">
        <div className="specialLectureGateHeader">
          <div>
            <strong>특강 명단 · 학생별 회차 관리</strong>
            <span>Tally 접수와 수동 접수를 하나의 확정 명단으로 관리합니다. 학생별 회차 설정 저장본이 미래 특강 수업 명단의 기준입니다.</span>
          </div>
          <div className="specialLectureGateStats">
            <span>수강 {activeEnrollments.length}</span>
            <span>취소 {canceledEnrollments.length}</span>
            <span>추가 필요 {missingEnrollmentRows.length}</span>
            <span className={needsReviewRows.length ? "danger" : ""}>연결 필요 {needsReviewRows.length}</span>
            <span>회차 {guideSessions.length}</span>
            <button
              aria-expanded={isEnrollmentPanelOpen}
              className="softButton compact"
              onClick={() => setIsEnrollmentPanelOpen((current) => !current)}
              type="button"
            >
              {isEnrollmentPanelOpen ? "접기" : "펼치기"}
            </button>
          </div>
        </div>
        {isEnrollmentPanelOpen ? (
          <>
        {!isGuideSaved ? (
          <p className="inlineNotice danger">현재 특강 안내문에 저장하지 않은 변경이 있습니다. `안내문 저장` 후 학생별 수강계획을 수정하세요.</p>
        ) : null}
        {missingEnrollmentRows.length ? (
          <div className="specialLectureEnrollmentSync">
            <span>기존 학생과 매칭된 확정 신청자 {missingEnrollmentRows.length}명을 아직 수강명단에 저장하지 않았습니다.</span>
            <button
              className="primaryButton compact"
              disabled={!onSaveEnrollments || !isGuideSaved || savingEnrollmentId === "bulk" || !guideSessionIds.length}
              onClick={addMatchedRowsToEnrollmentSource}
              type="button"
            >
              {savingEnrollmentId === "bulk" ? "저장 중" : "확정 명단에 추가"}
            </button>
          </div>
        ) : null}
        {activeEnrollments.length ? (
          <div className="specialLectureEnrollmentList">
            {activeEnrollments.map((enrollment) => {
              const student = getEnrollmentStudent(enrollment, students);
              const draft = getEnrollmentDraft(enrollment);
              const selectedSessionCount = draft.sessionPlans.filter((plan) => plan.status === "active").length;
              return (
                <article className="specialLectureEnrollmentCard" key={enrollment.enrollmentId}>
                  <div className="specialLectureEnrollmentIdentity">
                    <span className={`specialLectureEnrollmentStatus ${draft.status}`}>
                      {getSpecialLectureEnrollmentStatusLabel(draft.status)}
                    </span>
                    <strong>{student?.name || enrollment.studentId || "학생 미매칭"}</strong>
                    <small>{student ? [student.schoolName, student.grade].filter(Boolean).join(" · ") || "학교/학년 미입력" : "기존 학생 원천에서 찾지 못했습니다."}</small>
                    <small className="specialLectureEnrollmentSessionCount">총 {guideSessions.length}회 중 {selectedSessionCount}회 수강</small>
                    {enrollment.planSource === "tally_request" ? (
                      <small className={enrollment.planReviewedAt ? "specialLectureEnrollmentReviewStatus reviewed" : "specialLectureEnrollmentReviewStatus pending"}>
                        {enrollment.planReviewedAt ? "Tally 신청 · 선생님 검토 완료" : "Tally 신청 초안 · 회차 계획 저장 필요"}
                      </small>
                    ) : null}
                  </div>
                  <div className="specialLectureEnrollmentPlanSummary">
                    {draft.sessionPlans.filter((plan) => plan.status === "active").length ? (
                      draft.sessionPlans.filter((plan) => plan.status === "active").map((plan) => {
                        const session = guideSessions.find((item) => item.sessionId === plan.sessionId);
                        return (
                          <span key={`${enrollment.enrollmentId}_summary_${plan.sessionId}`}>
                            {session?.sessionIndex + 1}회차 · {plan.effectiveStartTime || session?.startTime}-{plan.effectiveEndTime || session?.endTime}
                            {plan.effectiveStartTime || plan.effectiveEndTime ? " · 조정" : ""}
                          </span>
                        );
                      })
                    ) : <span className="pending">수강 회차 미확정</span>}
                  </div>
                  <div className="specialLectureEnrollmentControls">
                    <button
                      className="primaryButton compact"
                      disabled={!isGuideSaved}
                      onClick={() => openPlanModal(enrollment)}
                      type="button"
                    >
                      {enrollment.planReviewedAt ? "회차·진행 관리" : "회차 설정"}
                    </button>
                    <details className="specialLectureCancellationActions">
                      <summary>취소 관리</summary>
                      <div>
                        <p>남은 회차만 취소하거나 특강 신청 전체를 취소할 수 있습니다.</p>
                        <button
                          className="softButton compact subtle"
                          disabled={!onSaveEnrollment || !isGuideSaved || savingEnrollmentId === enrollment.enrollmentId}
                          onClick={() => excludeRemainingSessions(enrollment)}
                          type="button"
                        >
                          {savingEnrollmentId === enrollment.enrollmentId ? "저장 중" : "남은 회차 취소"}
                        </button>
                        <button
                          className="dangerSoftButton compact"
                          disabled={!onSaveEnrollment || !isGuideSaved || savingEnrollmentId === enrollment.enrollmentId}
                          onClick={() => cancelEnrollment(enrollment)}
                          type="button"
                        >
                          {savingEnrollmentId === enrollment.enrollmentId ? "취소 저장 중" : "특강 신청 전체 취소"}
                        </button>
                      </div>
                    </details>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="specialLectureGateEmpty">현재 활성 수강명단이 없습니다. 확정 신청자를 기존 학생과 매칭한 뒤 명단에 추가하세요.</p>
        )}
        {canceledEnrollments.length ? (
          <details className="specialLectureCanceledEnrollments">
            <summary>취소·오입력 기록 {canceledEnrollments.length}건</summary>
            <p>활성 수강명단과 미래 특강 수업 반영에서는 제외되며, 신청 원본과 기존 수업 기록은 삭제하지 않습니다.</p>
            <div className="specialLectureCanceledEnrollmentList">
              {canceledEnrollments.map((enrollment) => {
                const student = getEnrollmentStudent(enrollment, students);
                return (
                  <article className="specialLectureCanceledEnrollmentCard" key={`canceled_${enrollment.enrollmentId}`}>
                    <div>
                      <span className="specialLectureEnrollmentStatus canceled">특강 취소</span>
                      <strong>{student?.name || enrollment.studentId || "학생 미매칭"}</strong>
                      <small>{student ? [student.schoolName, student.grade].filter(Boolean).join(" · ") || "학교/학년 미입력" : "기존 학생 원천에서 찾지 못했습니다."}</small>
                      <small>취소 저장 {formatKoreaTimeLabel(enrollment.updatedAt) || "시간 미확인"}</small>
                    </div>
                    <span>취소됨 · 기존 회차 계획과 과거 기록 보존</span>
                    <button className="softButton compact" onClick={() => setProgressModalEnrollment(enrollment)} type="button">기존 기록 보기</button>
                  </article>
                );
              })}
            </div>
          </details>
        ) : null}
          </>
        ) : null}
      </div>

      <div className="specialLectureLessonPreviewGate">
        <div className="specialLectureGateHeader">
          <div>
            <strong>특강 수업일지 반영</strong>
            <span>학생이 없어도 공식 회차별 특강 수업을 먼저 개설합니다. 이후 저장한 학생별 계획은 안전한 미래 회차에만 반영합니다.</span>
          </div>
          <div className="specialLectureGateStats">
            <span>신규 {newLessonDrafts.length}</span>
            <span>미래 변경 {syncableChangedRows.length}</span>
            <span className={additiveLockedLessonRows.length ? "danger" : ""}>확인 후 추가 {additiveLockedLessonRows.length}</span>
            <span className={protectedLockedLessonRows.length ? "danger" : ""}>보호 잠금 {protectedLockedLessonRows.length}</span>
            <span className={emptySessionCount ? "danger" : ""}>빈 회차 {emptySessionCount}</span>
            <span className={unreviewedEnrollmentRows.length ? "danger" : ""}>미검토 {unreviewedEnrollmentRows.length}</span>
            <span className={needsReviewRows.length ? "danger" : ""}>검토 {needsReviewRows.length}</span>
            <button
              aria-expanded={isLessonPreviewOpen}
              className="softButton compact"
              onClick={() => setIsLessonPreviewOpen((current) => !current)}
              type="button"
            >
              {isLessonPreviewOpen ? "접기" : "펼치기"}
            </button>
          </div>
        </div>
        {isLessonPreviewOpen ? (
          <>
        {lessonPreviewRows.length ? (
          <div className="specialLectureLessonPreviewList">
            {lessonPreviewRows.map((row) => (
              <article className={row.attendees.length ? "specialLectureLessonPreviewCard" : "specialLectureLessonPreviewCard empty"} key={row.lessonId}>
                <div>
                  <span>
                    {row.specialLectureSessionIndex + 1}회차
                    {row.specialLectureStudentSchedules.some((schedule) => schedule.scheduleType === "adjusted") ? " · 개별 시간 있음" : " · 전원 공식 시간"}
                    {row.existingLesson ? " · 생성됨" : " · 신규"}
                  </span>
                  <strong>{row.dateKey || row.date} {row.startTime}-{row.endTime}</strong>
                  <small>{row.topic || selectedGuide?.defaultSessionTopic || "특강 수업"}</small>
                </div>
                <p>
                  {row.attendees.length
                    ? row.attendees.map((student) => {
                        const schedule = row.specialLectureStudentSchedules.find((item) => item.studentId === student.studentId);
                        return `${student.name} ${schedule?.startTime || row.startTime}-${schedule?.endTime || row.endTime}${schedule?.scheduleType === "adjusted" ? "(조정)" : ""}`;
                      }).join(", ")
                    : "수강 학생 없음 · 빈 특강 수업으로 개설 가능"}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="specialLectureGateEmpty">회차별 계획을 먼저 저장해 주세요.</p>
        )}
        <div className="specialLectureLessonCreateActions">
          <button
            className="primaryButton"
            disabled={!onCreateSpecialLectureLessons || !canCreateLessons || lessonCreateState.state === "saving"}
            onClick={createSpecialLectureLessons}
            type="button"
          >
            {lessonCreateState.state === "saving" ? "수업일지 반영 중" : newLessonDrafts.length ? "특강 개설 및 수업일지 반영" : "수업일지 반영"}
          </button>
          {additiveLockedLessonRows.length ? (
            <button
              className="softButton"
              disabled={!onCreateSpecialLectureLessons || lessonCreateState.state === "saving" || duplicateEnrollmentIdentityRows.length > 0}
              onClick={applyAdditiveLockedLessonRows}
              type="button"
            >
              오늘/과거 회차 누락 학생 추가
            </button>
          ) : null}
          <span>저장 대상: Supabase `lessons` · 과거 수업/기록/출결/알림톡 예약은 자동 변경하지 않음</span>
        </div>
          </>
        ) : null}
      </div>
      {matchApplication ? (
        <Modal
          className="specialLectureRosterModal"
          onClose={() => {
            setMatchApplication(null);
            setMatchSearchText("");
            setMatchStudentId("");
          }}
          subtitle={`${matchApplication.studentName || "신청자"} · ${matchApplication.schoolName || "학교 미입력"} ${matchApplication.grade || ""}`}
          title="특강 신청 학생 연결"
        >
          <div className="specialLectureModalBody">
            <div className="noticeBox specialLectureNoticeBox">
              <strong>다른 반 학생도 연결할 수 있습니다.</strong>
              <p>현재 특강이나 정규반 소속과 관계없이 Academy OS 전체 학생에서 선택합니다. 목록에 없다면 아래 버튼으로 특강 전용 학생을 먼저 등록합니다.</p>
            </div>
            <div className="specialLectureRosterSearch">
              <label>
                전체 학생 검색
                <input
                  autoFocus
                  onChange={(event) => setMatchSearchText(event.target.value)}
                  placeholder="이름, 학교, 학년, 반"
                  value={matchSearchText}
                />
              </label>
              <span>{matchStudentId ? "학생 1명 선택" : "연결할 학생을 선택하세요."}</span>
            </div>
            <div className="specialLectureRosterPickerList">
              {availableMatchStudents.length ? availableMatchStudents.map((student) => (
                <label className="specialLectureRosterPickerItem" key={`match_${student.studentId}`}>
                  <input
                    checked={matchStudentId === student.studentId}
                    name={`special_lecture_match_${matchApplication.applicationId}`}
                    onChange={() => setMatchStudentId(student.studentId)}
                    type="radio"
                  />
                  <strong>{student.name}</strong>
                  <span>{[student.schoolName, student.grade, student.className].filter(Boolean).join(" · ") || "학생 정보 미입력"}</span>
                </label>
              )) : <p className="specialLectureGateEmpty">검색 결과가 없습니다. 신청자를 특강 전용 학생으로 등록할 수 있습니다.</p>}
            </div>
            <div className="specialLectureModalActions specialLectureMatchActions">
              <button
                className="softButton"
                disabled={!onCreateStudent || updatingApplicationId === matchApplication.applicationId}
                onClick={registerSpecialLectureStudent}
                type="button"
              >
                {updatingApplicationId === matchApplication.applicationId ? "등록 중" : "신청자를 특강 전용 학생으로 등록"}
              </button>
              <button
                className="primaryButton"
                disabled={!matchStudentId || updatingApplicationId === matchApplication.applicationId}
                onClick={confirmManualStudentMatch}
                type="button"
              >
                {updatingApplicationId === matchApplication.applicationId ? "연결 중" : "선택 학생 연결 및 회차 설정"}
              </button>
            </div>
          </div>
        </Modal>
      ) : null}

      {manualPickerOpen ? (
        <Modal
          className="specialLectureRosterModal"
          onClose={() => setManualPickerOpen(false)}
          subtitle={`${selectedGuide?.title || "특강"} · Tally 없이 구두/수동으로 접수한 학생`}
          title="학생 수동 접수"
        >
          <div className="specialLectureModalBody">
            <div className="specialLectureRosterSearch">
              <label>
                학생 검색
                <input
                  autoFocus
                  onChange={(event) => setManualSearchText(event.target.value)}
                  placeholder="이름, 학교, 학년, 반"
                  value={manualSearchText}
                />
              </label>
              <span>선택 {manualSelectedStudentIds.length}명 · 이미 등록된 학생은 목록에서 제외됩니다.</span>
            </div>
            <div className="specialLectureRosterPickerList">
              {availableManualStudents.length ? availableManualStudents.map((student) => (
                <label className="specialLectureRosterPickerItem" key={student.studentId}>
                  <input
                    checked={manualSelectedStudentIds.includes(student.studentId)}
                    onChange={() => setManualSelectedStudentIds((current) => current.includes(student.studentId)
                      ? current.filter((studentId) => studentId !== student.studentId)
                      : [...current, student.studentId])}
                    type="checkbox"
                  />
                  <strong>{student.name}</strong>
                  <span>{[student.schoolName, student.grade, student.className].filter(Boolean).join(" · ") || "학생 정보 미입력"}</span>
                </label>
              )) : <p className="specialLectureGateEmpty">추가할 수 있는 학생이 없습니다.</p>}
            </div>
            <div className="specialLectureModalActions">
              <button className="softButton" onClick={() => setManualPickerOpen(false)} type="button">취소</button>
              <button
                className="primaryButton"
                disabled={!manualSelectedStudentIds.length || savingEnrollmentId === "manual"}
                onClick={addManualStudents}
                type="button"
              >
                {savingEnrollmentId === "manual" ? "접수 저장 중" : `선택 학생 ${manualSelectedStudentIds.length}명 접수`}
              </button>
            </div>
          </div>
        </Modal>
      ) : null}

      {planModalEnrollment ? (() => {
        const enrollment = selectedGuideEnrollments.find((item) => item.enrollmentId === planModalEnrollment.enrollmentId) ?? planModalEnrollment;
        const student = getEnrollmentStudent(enrollment, students);
        const draft = getEnrollmentDraft(enrollment);
        const confirmedProgressRows = enrollment.planReviewedAt
          ? getEnrollmentProgressRows(enrollment).filter((row) => row.plan?.status === "active")
          : [];
        const selectedProgressRow = confirmedProgressRows.find((row) => row.session.sessionId === selectedPlanProgressSessionId) ?? null;
        return (
          <Modal
            className="specialLectureSessionModal"
            onClose={closePlanModal}
            subtitle={`${selectedGuide?.title || "특강"} · ${enrollment.planSource === "tally_request" ? "Tally 접수" : "수동 접수"}`}
            title={`${student?.name || "학생"} 회차·진행 관리`}
          >
            <div className="specialLectureModalBody">
              <div className="specialLectureSessionModalSummary">
                <strong>총 {guideSessions.length}회 중 {draft.sessionPlans.filter((plan) => plan.status === "active").length}회 수강</strong>
                <span>회차 신청 원천은 오늘/지난 회차도 수정할 수 있습니다. 이미 생성된 수업일지는 별도 확인 후 누락 학생만 안전하게 추가합니다.</span>
              </div>
              <section className="specialLecturePlanProgress">
                <div className="specialLecturePlanProgressHeader">
                  <div>
                    <strong>확정 수업 진행</strong>
                    <span>마지막으로 저장 완료한 회차 기준입니다. 수업 버튼을 눌러 진행상황을 확인하세요.</span>
                  </div>
                  {enrollment.planReviewedAt ? <small>회차 확정됨</small> : <small className="pending">회차 미확정</small>}
                </div>
                {confirmedProgressRows.length ? (
                  <>
                    <div className="specialLecturePlanProgressButtons">
                      {confirmedProgressRows.map(({ lesson, record, session }) => (
                        <button
                          className={selectedPlanProgressSessionId === session.sessionId ? "active" : ""}
                          key={`${enrollment.enrollmentId}_confirmed_progress_${session.sessionId}`}
                          onClick={() => setSelectedPlanProgressSessionId((current) => current === session.sessionId ? "" : session.sessionId)}
                          type="button"
                        >
                          <strong>{session.sessionIndex + 1}회차 수업</strong>
                          <span>{session.dateKey || session.date}</span>
                          <small>{lesson ? getAttendanceLabel(record?.attendanceStatus) : "수업 미개설"}</small>
                        </button>
                      ))}
                    </div>
                    {selectedProgressRow ? (
                      <article className="specialLecturePlanProgressDetail">
                        <div>
                          <span>{selectedProgressRow.session.sessionIndex + 1}회차 · {selectedProgressRow.session.dateKey || selectedProgressRow.session.date}</span>
                          <strong>{selectedProgressRow.plan?.effectiveStartTime || selectedProgressRow.session.startTime}-{selectedProgressRow.plan?.effectiveEndTime || selectedProgressRow.session.endTime}</strong>
                          <small>{selectedProgressRow.lesson ? getAttendanceLabel(selectedProgressRow.record?.attendanceStatus) : "아직 수업일지가 개설되지 않았습니다."}</small>
                        </div>
                        <div>
                          <p>{selectedProgressRow.record?.lessonProgress || selectedProgressRow.record?.progress || selectedProgressRow.record?.lessonContent || "아직 입력된 진행 기록이 없습니다."}</p>
                          {selectedProgressRow.record?.nextHomework ? <small>다음 과제 · {selectedProgressRow.record.nextHomework}</small> : null}
                        </div>
                        <button className="softButton compact" disabled={!selectedProgressRow.lesson || !onOpenLesson} onClick={() => onOpenLesson?.(selectedProgressRow.lesson)} type="button">수업일지 열기</button>
                      </article>
                    ) : (
                      <p className="specialLecturePlanProgressHint">확인할 수업을 선택해 주세요.</p>
                    )}
                  </>
                ) : (
                  <p className="specialLecturePlanProgressEmpty">회차 계획을 저장해 확정하면 수강하는 각 수업 버튼이 여기에 표시됩니다.</p>
                )}
              </section>
              <div className="specialLecturePlanEditHeader">
                <strong>회차 신청 수정</strong>
                <span>아래 변경은 `회차 계획 저장`을 눌러 Supabase 재조회가 끝난 뒤 확정됩니다.</span>
              </div>
              <div className="specialLectureSessionBulkActions">
                <span>체크한 회차가 수강 신청으로 저장됩니다.</span>
                <div>
                  <button
                    className="softButton compact"
                    disabled={savingEnrollmentId === enrollment.enrollmentId}
                    onClick={() => setAllEnrollmentSessions(enrollment, "active")}
                    type="button"
                  >
                    전체 선택
                  </button>
                  <button
                    className="softButton compact subtle"
                    disabled={savingEnrollmentId === enrollment.enrollmentId}
                    onClick={() => setAllEnrollmentSessions(enrollment, "excluded")}
                    type="button"
                  >
                    전체 해제
                  </button>
                </div>
              </div>
              <div className="specialLectureCommonTimePanel">
                <div>
                  <strong>선택 회차 공통 시간</strong>
                  <span>같은 시간으로 듣는 회차는 여기에서 한 번만 입력해 일괄 적용하세요.</span>
                </div>
                <label>
                  시작
                  <input type="time" value={commonSessionTimeDraft.startTime} onChange={(event) => setCommonSessionTimeDraft((current) => ({ ...current, startTime: event.target.value }))} />
                </label>
                <label>
                  종료
                  <input type="time" value={commonSessionTimeDraft.endTime} onChange={(event) => setCommonSessionTimeDraft((current) => ({ ...current, endTime: event.target.value }))} />
                </label>
                <label className="specialLectureCommonTimeReason">
                  조정 사유 (선택)
                  <input placeholder="필요한 경우에만 입력" value={commonSessionTimeDraft.overrideReason} onChange={(event) => setCommonSessionTimeDraft((current) => ({ ...current, overrideReason: event.target.value }))} />
                </label>
                <div className="specialLectureCommonTimeActions">
                  <button className="primaryButton compact" onClick={() => applyCommonTimeToSelectedSessions(enrollment)} type="button">선택 회차에 적용</button>
                  <button className="softButton compact" onClick={() => resetSelectedSessionsToOfficialTime(enrollment)} type="button">선택 회차 공식 시간</button>
                </div>
              </div>
              <div className="specialLectureSessionToggleGrid">
                {guideSessions.map((session) => {
                  const plan = draft.sessionPlans.find((item) => item.sessionId === session.sessionId);
                  const isActive = plan?.status === "active";
                  const hasOverride = Boolean(plan?.effectiveStartTime || plan?.effectiveEndTime);
                  const hasExistingLesson = isEnrollmentSessionLocked(session);
                  const effectiveSession = getEffectiveSpecialLectureSession(session, plan);
                  const isOverrideEditorOpen = editingSessionOverrideId === session.sessionId;
                  return (
                    <article className={`specialLectureSessionPlan ${isActive ? "active" : "excluded"} ${hasExistingLesson ? "linked" : ""}`} key={`${enrollment.enrollmentId}_${session.sessionId}`}>
                      <label className="specialLectureSessionToggle">
                        <input
                          checked={isActive}
                          onChange={() => toggleEnrollmentSession(enrollment, session.sessionId)}
                          type="checkbox"
                        />
                        <span>{session.sessionIndex + 1}회차 신청{hasExistingLesson ? " · 수업일지 생성됨" : ""}</span>
                        <small>공식 {session.dateKey || session.date} {session.startTime}-{session.endTime}</small>
                      </label>
                      {isActive ? (
                        <div className="specialLectureSessionTimeSummary">
                          <span>수강 {effectiveSession.startTime}-{effectiveSession.endTime}{hasOverride ? " · 조정" : " · 공식"}</span>
                          <button className="softButton compact" onClick={() => setEditingSessionOverrideId((current) => current === session.sessionId ? "" : session.sessionId)} type="button">
                            {isOverrideEditorOpen ? "개별 시간 닫기" : "이 회차만 다르게"}
                          </button>
                        </div>
                      ) : null}
                      {isActive && isOverrideEditorOpen ? (
                        <div className="specialLectureSessionOverrideGrid">
                          <label>
                            시작 (기본 {session.startTime})
                            <input type="time" value={plan?.effectiveStartTime || ""} onChange={(event) => updateEnrollmentSessionPlan(enrollment, session.sessionId, { effectiveStartTime: event.target.value })} />
                          </label>
                          <label>
                            종료 (기본 {session.endTime})
                            <input type="time" value={plan?.effectiveEndTime || ""} onChange={(event) => updateEnrollmentSessionPlan(enrollment, session.sessionId, { effectiveEndTime: event.target.value })} />
                          </label>
                          <label className="specialLectureSessionOverrideReason">
                            조정 사유 (선택)
                            <input placeholder="필요한 경우에만 입력" value={plan?.overrideReason || ""} onChange={(event) => updateEnrollmentSessionPlan(enrollment, session.sessionId, { overrideReason: event.target.value })} />
                          </label>
                          {hasOverride ? (
                            <button className="softButton compact" onClick={() => updateEnrollmentSessionPlan(enrollment, session.sessionId, { effectiveStartTime: "", effectiveEndTime: "", overrideReason: "" })} type="button">
                              공식 시간으로 되돌리기
                            </button>
                          ) : !hasOverride ? <span className="specialLectureSessionDefaultNotice">빈 값은 공식 시간을 사용합니다.</span> : null}
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>
              <div className="specialLectureEnrollmentControls specialLectureSessionModalControls">
                <label>
                  운영 메모
                  <textarea onChange={(event) => updateEnrollmentDraft(enrollment.enrollmentId, { memo: event.target.value })} value={draft.memo} />
                </label>
                <div className="specialLectureCancelGuide">
                  <strong>수강 취소</strong>
                  <span>일부 회차는 카드의 `남은 회차 취소`, 전체 신청은 `특강 신청 전체 취소`로 구분합니다.</span>
                </div>
              </div>
              <div className="specialLectureModalActions specialLecturePlanSaveActions">
                <div className={`specialLecturePlanSaveFeedback ${planSaveState.state}`} aria-live="polite" role="status">
                  <InlineSaveStatus label="회차 계획" saveState={planSaveState.state} />
                  <span>{planSaveState.message || "회차와 시간을 확인한 뒤 저장해 주세요."}</span>
                </div>
                <div className="specialLecturePlanSaveButtons">
                  <button className="softButton" onClick={closePlanModal} type="button">닫기</button>
                  <button className="primaryButton" disabled={!onSaveEnrollment || !isGuideSaved || savingEnrollmentId === enrollment.enrollmentId} onClick={() => saveEnrollmentDraft(enrollment)} type="button">
                    {savingEnrollmentId === enrollment.enrollmentId ? "회차 계획 저장 중" : planSaveState.state === "saved" ? "저장 완료" : "회차 계획 저장"}
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        );
      })() : null}

      {progressEnrollment ? (
        <Modal
          className="specialLectureProgressModal"
          onClose={() => setProgressModalEnrollment(null)}
          subtitle={`${selectedGuide?.title || "특강"} · 회차별 수업일지 기록`}
          title={`${progressStudent?.name || "학생"} 특강 진행`}
        >
          <div className="specialLectureModalBody">
            <div className="specialLectureProgressSummary">
              <span>신청 출처 <strong>{progressEnrollment.planSource === "tally_request" ? "Tally" : "수동"}</strong></span>
              <span>수강 회차 <strong>{progressPlans.filter((plan) => plan.status === "active").length}/{guideSessions.length}</strong></span>
              <span>기록 회차 <strong>{progressRows.filter((row) => row.record).length}</strong></span>
            </div>
            <div className="specialLectureProgressList">
              {progressRows.map(({ lesson, plan, record, session }) => {
                const isActive = plan?.status === "active";
                return (
                  <article className={`specialLectureProgressRow ${isActive ? "active" : "excluded"}`} key={`${progressEnrollment.enrollmentId}_progress_${session.sessionId}`}>
                    <div>
                      <span>{session.sessionIndex + 1}회차 · {session.dateKey || session.date}</span>
                      <strong>{plan?.effectiveStartTime || session.startTime}-{plan?.effectiveEndTime || session.endTime}</strong>
                      <small>{isActive ? lesson ? getAttendanceLabel(record?.attendanceStatus) : "수업 미개설" : "수강 제외"}</small>
                    </div>
                    <div>
                      <p>{record?.lessonProgress || record?.progress || record?.lessonContent || (isActive ? "아직 입력된 진행 기록이 없습니다." : "해당 회차를 수강하지 않습니다.")}</p>
                      {record?.nextHomework ? <small>다음 과제 · {record.nextHomework}</small> : null}
                    </div>
                    <button className="softButton compact" disabled={!lesson || !onOpenLesson} onClick={() => onOpenLesson?.(lesson)} type="button">수업일지 열기</button>
                  </article>
                );
              })}
            </div>
            <div className="specialLectureModalActions">
              <button className="softButton" onClick={() => setProgressModalEnrollment(null)} type="button">닫기</button>
              <button className="primaryButton" onClick={() => { setProgressModalEnrollment(null); openPlanModal(progressEnrollment); }} type="button">회차 계획 수정</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}
