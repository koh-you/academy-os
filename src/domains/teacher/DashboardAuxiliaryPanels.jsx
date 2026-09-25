import { useEffect, useMemo, useState } from "react";
import { HelpTip } from "../../shared/components/HelpTip.jsx";
import { SpecialLectureApplicationPanel } from "../specialLectures/SpecialLectureApplicationPanel.jsx";
import {
  SpecialLectureGuideBasicFields,
  SpecialLectureGuideLinkFields,
  SpecialLectureGuideSelector,
  SpecialLectureGuideTextFields,
  SpecialLectureHighlightEditor,
  SpecialLectureNoSelection,
  SpecialLectureNoticeMemoField,
  SpecialLectureScheduleCalculator,
  SpecialLectureSessionPlanEditor,
  SpecialLectureSpecialNotesField
} from "../specialLectures/SpecialLectureManagementPanel.jsx";
import {
  SpecialLectureNoticeActionPanel,
  SpecialLecturePreviewColumn
} from "../specialLectures/SpecialLecturePublicPage.jsx";
import {
  buildSpecialLectureNoticeText,
  calculateSpecialLectureTuition,
  createDateFromKey,
  createNextSpecialLectureSession,
  createSpecialLectureGuideFromTemplate,
  defaultSpecialLectureGuides,
  formatCurrencyWon,
  formatSpecialLectureDateLabel,
  formatSpecialLectureDaysFromRules,
  formatSpecialLectureHours,
  formatSpecialLectureLessonCount,
  formatSpecialLectureTimeFromRules,
  generateSpecialLectureSessions,
  getDefaultSpecialLectureGuideId,
  getSpecialLectureCalculatedFields,
  getSpecialLectureGuideSlug,
  getSpecialLecturePublicUrl,
  getSpecialLectureSeasonShortLabel,
  getSpecialLectureTotalHours,
  getSpecialLectureWeekdayCounts,
  getWeekdayLabel,
  isSpecialLectureArchived,
  isSpecialLecturePrimaryGuide,
  normalizeSpecialLectureGuide,
  normalizeSpecialLectureGuides,
  normalizeSpecialLectureScheduleRule,
  normalizeSpecialLectureScheduleRules,
  normalizeSpecialLectureSession,
  replaceSpecialLectureToken,
  replaceSpecialLectureYearInDateKey,
  replaceSpecialLectureYearToken
} from "../specialLectures/specialLectureGuideUtils.js";
import { copyTextToClipboard } from "../exams/outputPreview.js";
import { AsyncOperationStatus } from "../../shared/components/AsyncOperationStatus.jsx";
import { ConfirmDialog } from "../../shared/components/ConfirmDialog.jsx";
import { Disclosure, DisclosureChevron } from "../../shared/components/Disclosure.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { OverflowMenu } from "../../shared/components/OverflowMenu.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";
import "../specialLectures/specialLectureGuideWorkspace.css";
import {
  academyReminderPriorityOptions,
  academyReminderStatusLabels,
  academyReminderTypeOptions
} from "../../app/appConfig.js";

export function SpecialLectureNoticePanel({
  activeWorkspaceTab = "roster",
  applications = [],
  enrollments = [],
  guides = defaultSpecialLectureGuides,
  lessons = [],
  notificationJobs = [],
  notificationTemplates = {},
  onApplyToNotice,
  onCreateStudent,
  onCreateSpecialLectureLessons,
  onDeleteApplication,
  onReplaceStudent,
  onOpenLesson,
  onSaveEnrollment,
  onSaveEnrollments,
  onSyncSpecialLectureStudentSchedules,
  onUpdateApplication,
  onSaveGuides,
  records = [],
  saveState = "idle",
  students = []
}) {
  const normalizedGuides = useMemo(() => normalizeSpecialLectureGuides(guides), [guides]);
  const [copyFeedback, setCopyFeedbackState] = useState({ message: "", state: "idle" });
  const [draftGuides, setDraftGuides] = useState(normalizedGuides);
  // 2026-09-19 · U12(ops-08/15): 안내문 작업 결과는 {message, state} 로 들고 AsyncOperationStatus 가 그린다.
  // 문자열에 '실패' 가 들었는지로 색을 정하지 않고, 메시지를 만든 자리에서 state 를 함께 정한다.
  const [panelFeedback, setPanelFeedbackState] = useState({ message: "", state: "idle" });
  const [selectedGuideId, setSelectedGuideId] = useState(getDefaultSpecialLectureGuideId(normalizedGuides));
  const [showStoredGuides, setShowStoredGuides] = useState(false);
  const [managementGuideId, setManagementGuideId] = useState("");
  // 2026-09-19 · U12(ops-10): ⋯ 메뉴에서 고른 보관/보관 해제/삭제는 ConfirmDialog 를 거친다. { type, guideTitle } | null.
  const [pendingGuideAction, setPendingGuideAction] = useState(null);
  const [activeGuideEditorTab, setActiveGuideEditorTab] = useState("content");
  const [manualIntakeRequest, setManualIntakeRequest] = useState(0);
  const primaryGuides = draftGuides.filter(isSpecialLecturePrimaryGuide);
  const storedGuides = draftGuides.filter((guide) => !isSpecialLecturePrimaryGuide(guide));
  const selectedGuide = draftGuides.find((guide) => guide.specialLectureGuideId === selectedGuideId) ?? null;
  const savedSelectedGuide = normalizedGuides.find((guide) => guide.specialLectureGuideId === selectedGuideId) ?? null;
  const isSelectedGuideSaved = Boolean(
    selectedGuide && savedSelectedGuide && JSON.stringify(selectedGuide) === JSON.stringify(savedSelectedGuide)
  );
  // 2026-09-19 · U12(ops-09): 헤더 상태와 하단 저장 바가 같은 값을 쓴다. 저장 중이 아니고 초안이 저장본과 다르면 '변경됨'.
  const guideSaveState = saveState === "saving" ? "saving" : selectedGuide && !isSelectedGuideSaved ? "dirty" : saveState;
  // 2026-09-19 · U12(ops-10): 보관/삭제는 초안 배열 전체를 저장하므로, 다른 안내문의 저장하지 않은 변경 수를 확인 대화상자에 보여 준다.
  const unsavedOtherGuideCount = draftGuides.filter((guide) => {
    if (guide.specialLectureGuideId === selectedGuideId) return false;
    const savedGuide = normalizedGuides.find((item) => item.specialLectureGuideId === guide.specialLectureGuideId);
    return !savedGuide || JSON.stringify(guide) !== JSON.stringify(savedGuide);
  }).length;
  const selectedGuideUrl = selectedGuide ? getSpecialLecturePublicUrl(selectedGuide) : "";
  const noticeText = selectedGuide
    ? buildSpecialLectureNoticeText(selectedGuide, selectedGuideUrl, { notificationTemplates })
    : "";
  const selectedGuideSessions = selectedGuide ? (selectedGuide.sessions ?? []).map(normalizeSpecialLectureSession) : [];
  const generatedSessionsPreview = selectedGuide ? generateSpecialLectureSessions(selectedGuide) : [];
  const calculatedSessionCount = generatedSessionsPreview.length;
  const calculatedTotalHours = getSpecialLectureTotalHours(generatedSessionsPreview);
  const calculatedTuition = calculateSpecialLectureTuition({
    pricingMode: selectedGuide?.pricingMode,
    pricePerHour: selectedGuide?.pricePerHour,
    pricePerSession: selectedGuide?.pricePerSession,
    sessionCount: calculatedSessionCount,
    totalHours: calculatedTotalHours
  });
  const calculatedWeekdayCounts = getSpecialLectureWeekdayCounts(generatedSessionsPreview);
  const normalizedScheduleRules = selectedGuide ? normalizeSpecialLectureScheduleRules(selectedGuide.scheduleRules) : [];
  const calculatedWeekdaySummaryText = calculatedWeekdayCounts.length
    ? calculatedWeekdayCounts.map((item) => `${item.label} ${item.count}회`).join(" · ")
    : "기간과 요일을 선택하면 표시됩니다.";
  const selectedGuideHighlights = selectedGuide
    ? (Array.isArray(selectedGuide.highlights) && selectedGuide.highlights.length ? selectedGuide.highlights : [""])
    : [];
  const sessionPlanSummaryText = selectedGuideSessions.length
    ? `${selectedGuideSessions.length}회 · ${selectedGuide.lessonCount || formatSpecialLectureLessonCount(selectedGuideSessions.length, getSpecialLectureTotalHours(selectedGuideSessions))} · ${selectedGuideSessions[0]?.dateKey || selectedGuideSessions[0]?.date || "시작일 미입력"} ~ ${selectedGuideSessions[selectedGuideSessions.length - 1]?.dateKey || selectedGuideSessions[selectedGuideSessions.length - 1]?.date || "종료일 미입력"}`
    : "회차 일정이 없습니다.";

  useEffect(() => {
    setDraftGuides(normalizedGuides);
    setSelectedGuideId((current) =>
      normalizedGuides.some((guide) => guide.specialLectureGuideId === current)
        ? current
        : getDefaultSpecialLectureGuideId(normalizedGuides)
    );
  }, [normalizedGuides]);

  useEffect(() => {
    // 이미 비어 있으면 같은 객체를 돌려줘 불필요한 재렌더를 만들지 않는다(입력마다 draftGuides 가 바뀐다).
    setCopyFeedbackState((current) => (current.message ? { message: "", state: "idle" } : current));
  }, [draftGuides, selectedGuideId]);

  useEffect(() => {
    if (selectedGuide && !isSpecialLecturePrimaryGuide(selectedGuide)) setShowStoredGuides(true);
  }, [selectedGuide]);

  // state: AsyncOperationStatus 의 idle/loading/success/partial/error. 빈 메시지는 항상 idle 로 지운다.
  function setPanelFeedback(message, state = "idle") {
    setPanelFeedbackState({ message: String(message ?? ""), state: message ? state : "idle" });
  }

  function setCopyFeedback(message, state = "idle") {
    setCopyFeedbackState({ message: String(message ?? ""), state: message ? state : "idle" });
  }

  function selectSpecialLectureGuide(guideId) {
    const nextGuideId = String(guideId ?? "").trim();
    if (!nextGuideId || !draftGuides.some((guide) => guide.specialLectureGuideId === nextGuideId)) return;
    setSelectedGuideId(nextGuideId);
    setPanelFeedback("");
    setCopyFeedback("");
  }

  function updateSelectedGuide(field, value) {
    if (!selectedGuide) return;
    let nextSource = { ...selectedGuide, [field]: value, updatedAt: new Date().toISOString() };
    if (field === "year") {
      nextSource = {
        ...nextSource,
        title: replaceSpecialLectureYearToken(nextSource.title, selectedGuide.year, value),
        slug: replaceSpecialLectureYearToken(nextSource.slug, selectedGuide.year, value),
        periodStart: replaceSpecialLectureYearInDateKey(selectedGuide.periodStart, selectedGuide.year, value),
        periodEnd: replaceSpecialLectureYearInDateKey(selectedGuide.periodEnd, selectedGuide.year, value)
      };
    }
    if (field === "season") {
      const previousSeasonText = getSpecialLectureSeasonShortLabel(selectedGuide.season);
      const nextSeasonText = getSpecialLectureSeasonShortLabel(value);
      nextSource = {
        ...nextSource,
        title: replaceSpecialLectureToken(nextSource.title, previousSeasonText, nextSeasonText),
        slug: replaceSpecialLectureToken(nextSource.slug, selectedGuide.season, value)
      };
    }
    const nextGuide = normalizeSpecialLectureGuide(nextSource, selectedGuide);
    setDraftGuides((current) =>
      current.map((guide) =>
        guide.specialLectureGuideId === selectedGuide.specialLectureGuideId ? nextGuide : guide
      )
    );
  }

  function updateSpecialLectureHighlight(index, value) {
    if (!selectedGuide) return;
    const nextHighlights = selectedGuideHighlights.map((item, itemIndex) => (
      itemIndex === index ? value : item
    ));
    updateSelectedGuide("highlights", nextHighlights);
  }

  function addSpecialLectureHighlight() {
    if (!selectedGuide || selectedGuideHighlights.length >= 6) return;
    updateSelectedGuide("highlights", [...selectedGuideHighlights, ""]);
  }

  function removeSpecialLectureHighlight(index) {
    if (!selectedGuide) return;
    const nextHighlights = selectedGuideHighlights.filter((_, itemIndex) => itemIndex !== index);
    updateSelectedGuide("highlights", nextHighlights.length ? nextHighlights : [""]);
  }

  function replaceSelectedGuideSessions(sessions) {
    if (!selectedGuide) return;
    const normalizedSessions = sessions.map(normalizeSpecialLectureSession);
    const calculated = getSpecialLectureCalculatedFields({ ...selectedGuide, sessions: normalizedSessions });
    setDraftGuides((current) =>
      current.map((guide) =>
        guide.specialLectureGuideId === selectedGuide.specialLectureGuideId
          ? normalizeSpecialLectureGuide({
              ...guide,
              sessions: normalizedSessions,
              lessonCount: calculated.lessonCount,
              totalHours: calculated.totalHours,
              tuition: calculated.tuition,
              updatedAt: new Date().toISOString()
            }, guide)
          : guide
      )
    );
  }

  function updateSpecialLectureSessionCard(sessionIndex, field, value) {
    if (!selectedGuide) return;
    const sessions = selectedGuideSessions.map((session, index) => {
      if (index !== sessionIndex) return session;
      if (field === "dateKey") {
        const weekday = createDateFromKey(value)?.getDay();
        return normalizeSpecialLectureSession({
          ...session,
          dateKey: value,
          date: formatSpecialLectureDateLabel(value),
          day: getWeekdayLabel(weekday)
        }, index);
      }
      return normalizeSpecialLectureSession({ ...session, [field]: value }, index);
    });
    replaceSelectedGuideSessions(sessions);
  }

  function addSpecialLectureSessionCard() {
    if (!selectedGuide) return;
    replaceSelectedGuideSessions([
      ...selectedGuideSessions,
      createNextSpecialLectureSession(selectedGuideSessions, selectedGuide)
    ]);
  }

  function removeSpecialLectureSessionCard(sessionIndex) {
    if (!selectedGuide) return;
    replaceSelectedGuideSessions(selectedGuideSessions.filter((_, index) => index !== sessionIndex));
  }

  function createNewGuide() {
    const nextGuide = createSpecialLectureGuideFromTemplate(selectedGuide ?? defaultSpecialLectureGuides[0]);
    setDraftGuides((current) => [nextGuide, ...current]);
    setSelectedGuideId(nextGuide.specialLectureGuideId);
    setPanelFeedback("새 특강 초안을 만들었습니다. 일정 계산 후 저장하면 공개 링크가 유지됩니다.", "success");
  }

  async function persistGuideManagement(nextGuides, nextSelectedGuideId, successMessage) {
    const normalizedNextGuides = normalizeSpecialLectureGuides(nextGuides);
    setPanelFeedback("");
    setManagementGuideId(selectedGuide?.specialLectureGuideId || "all");
    try {
      const saved = onSaveGuides ? await onSaveGuides(normalizedNextGuides) : normalizedNextGuides;
      setDraftGuides(saved);
      setSelectedGuideId(nextSelectedGuideId && saved.some((guide) => guide.specialLectureGuideId === nextSelectedGuideId)
        ? nextSelectedGuideId
        : getDefaultSpecialLectureGuideId(saved));
      setPanelFeedback(successMessage, "success");
    } catch (error) {
      setPanelFeedback(`특강 관리 저장 실패: ${error.message}`, "error");
    } finally {
      setManagementGuideId("");
    }
  }

  function archiveSelectedGuide() {
    if (!selectedGuide) return;
    const nextGuides = draftGuides.map((guide) =>
      guide.specialLectureGuideId === selectedGuide.specialLectureGuideId
        ? normalizeSpecialLectureGuide({
            ...guide,
            archivedAt: new Date().toISOString(),
            status: "archived",
            updatedAt: new Date().toISOString()
          }, guide)
        : guide
    );
    return persistGuideManagement(nextGuides, getDefaultSpecialLectureGuideId(nextGuides), "특강을 보관했습니다. 진행/예정 카드 목록에서는 숨겨집니다.");
  }

  function restoreSelectedGuide() {
    if (!selectedGuide) return;
    const nextGuides = draftGuides.map((guide) =>
      guide.specialLectureGuideId === selectedGuide.specialLectureGuideId
        ? normalizeSpecialLectureGuide({
            ...guide,
            archivedAt: "",
            status: "active",
            updatedAt: new Date().toISOString()
          }, guide)
        : guide
    );
    return persistGuideManagement(nextGuides, selectedGuide.specialLectureGuideId, "보관된 특강을 복원했습니다.");
  }

  // 2026-09-19 · U12(ops-10): 삭제 확인은 브라우저 confirm 대신 ConfirmDialog(requestGuideAction → confirmPendingGuideAction)가 맡는다.
  function deleteSelectedGuide() {
    if (!selectedGuide) return;
    const nextGuides = draftGuides.filter((guide) => guide.specialLectureGuideId !== selectedGuide.specialLectureGuideId);
    return persistGuideManagement(nextGuides, getDefaultSpecialLectureGuideId(nextGuides), "특강 안내문을 삭제했습니다.");
  }

  function requestGuideAction(type) {
    if (!selectedGuide) return;
    setPendingGuideAction({ guideTitle: selectedGuide.title || "이 특강", type });
  }

  async function confirmPendingGuideAction() {
    const actionType = pendingGuideAction?.type;
    try {
      if (actionType === "delete") await deleteSelectedGuide();
      else if (actionType === "archive") await archiveSelectedGuide();
      else if (actionType === "restore") await restoreSelectedGuide();
    } finally {
      setPendingGuideAction(null);
    }
  }

  function updateScheduleRule(ruleIndex, patch) {
    if (!selectedGuide) return;
    const rules = normalizeSpecialLectureScheduleRules(selectedGuide.scheduleRules).map((rule, index) =>
      index === ruleIndex ? normalizeSpecialLectureScheduleRule({ ...rule, ...patch }) : rule
    );
    updateSelectedGuide("scheduleRules", rules);
  }

  function toggleScheduleRuleDay(ruleIndex, dayValue) {
    if (!selectedGuide) return;
    const rules = normalizeSpecialLectureScheduleRules(selectedGuide.scheduleRules);
    const rule = rules[ruleIndex] ?? normalizeSpecialLectureScheduleRule();
    const hasDay = rule.days.includes(dayValue);
    const nextDays = hasDay ? rule.days.filter((day) => day !== dayValue) : [...rule.days, dayValue];
    updateScheduleRule(ruleIndex, { days: nextDays });
  }

  function addScheduleRule() {
    if (!selectedGuide) return;
    updateSelectedGuide("scheduleRules", [
      ...normalizeSpecialLectureScheduleRules(selectedGuide.scheduleRules),
      { days: [], startTime: "13:00", endTime: "16:00" }
    ]);
  }

  function removeScheduleRule(ruleIndex) {
    if (!selectedGuide) return;
    const nextRules = normalizeSpecialLectureScheduleRules(selectedGuide.scheduleRules)
      .filter((_, index) => index !== ruleIndex);
    updateSelectedGuide("scheduleRules", nextRules.length ? nextRules : [{ days: [1], startTime: "13:00", endTime: "16:00" }]);
  }

  function applyCalculatedSchedule() {
    if (!selectedGuide) return;
    const generatedSessions = generateSpecialLectureSessions(selectedGuide);
    if (!generatedSessions.length) {
      setPanelFeedback("일정 계산 실패: 기간, 요일, 시작/종료 시간을 확인해 주세요.", "error");
      return;
    }
    const existingSessions = selectedGuide.sessions ?? [];
    const sessions = generatedSessions.map((session, index) => {
      const matchingSession = existingSessions.find((existing) =>
        existing.dateKey === session.dateKey &&
        existing.startTime === session.startTime &&
        existing.endTime === session.endTime
      ) || existingSessions[index];
      return {
        ...session,
        sessionId: matchingSession?.sessionId || "",
        topic: matchingSession?.topic || session.topic
      };
    });
    const totalHours = getSpecialLectureTotalHours(sessions);
    const tuition = calculateSpecialLectureTuition({
      pricingMode: selectedGuide.pricingMode,
      pricePerHour: selectedGuide.pricePerHour,
      pricePerSession: selectedGuide.pricePerSession,
      sessionCount: sessions.length,
      totalHours
    });
    const nextGuide = normalizeSpecialLectureGuide({
      ...selectedGuide,
      days: formatSpecialLectureDaysFromRules(normalizeSpecialLectureScheduleRules(selectedGuide.scheduleRules)),
      time: formatSpecialLectureTimeFromRules(normalizeSpecialLectureScheduleRules(selectedGuide.scheduleRules)),
      sessions,
      lessonCount: formatSpecialLectureLessonCount(sessions.length, totalHours),
      totalHours,
      tuition: formatCurrencyWon(tuition),
      updatedAt: new Date().toISOString()
    }, selectedGuide);
    setDraftGuides((current) =>
      current.map((guide) =>
        guide.specialLectureGuideId === selectedGuide.specialLectureGuideId ? nextGuide : guide
      )
    );
    setPanelFeedback(`일정 계산 완료: ${sessions.length}회, ${formatSpecialLectureHours(totalHours)}, ${formatCurrencyWon(tuition)}`, "success");
  }

  async function copyGuideUrl() {
    if (!selectedGuideUrl) return;
    setCopyFeedback("");
    const copied = await copyTextToClipboard(selectedGuideUrl);
    setCopyFeedback(copied ? "안내문 링크를 복사했습니다." : "링크 복사에 실패했습니다. 화면의 URL을 직접 복사해 주세요.", copied ? "success" : "error");
  }

  function buildGuidesSavePayload() {
    return draftGuides.map((guide) => normalizeSpecialLectureGuide({
      ...guide,
      updatedAt: new Date().toISOString()
    }, guide));
  }

  async function persistDraftGuides(successMessage = "특강 안내문을 저장했습니다. 공개 링크는 저장본을 읽습니다.") {
    const payload = buildGuidesSavePayload();
    if (!onSaveGuides) return payload;
    setPanelFeedback("");
    const saved = await onSaveGuides(payload);
    setDraftGuides(saved);
    if (successMessage) setPanelFeedback(successMessage, "success");
    return saved;
  }

  async function saveGuides() {
    try {
      await persistDraftGuides();
    } catch (error) {
      setPanelFeedback(`특강 안내문 저장 실패: ${error.message}`, "error");
    }
  }

  async function prepareSpecialLectureNotice() {
    if (!selectedGuide || !onApplyToNotice) return;
    setPanelFeedback("");
    try {
      const savedGuides = await persistDraftGuides("특강 안내문 저장 완료 후 알림톡 준비 화면으로 이동했습니다.");
      const savedGuide = savedGuides.find((guide) => guide.specialLectureGuideId === selectedGuide.specialLectureGuideId) ?? selectedGuide;
      const savedGuideUrl = getSpecialLecturePublicUrl(savedGuide);
      onApplyToNotice(
        savedGuide,
        buildSpecialLectureNoticeText(savedGuide, savedGuideUrl, { notificationTemplates }),
        savedGuideUrl
      );
    } catch (error) {
      setPanelFeedback(`알림톡 발송 준비 실패: ${error.message}`, "error");
    }
  }

  return (
    <section className="notificationPanel specialLecturePanel">
      <SectionHeader
        actions={(
          <>
          {activeWorkspaceTab === "guide" ? (
            <>
              <button className="softButton compact" onClick={createNewGuide} type="button">새 특강 만들기</button>
              <InlineSaveStatus label="특강 안내문" saveState={guideSaveState} />
              {/* 2026-09-19 · U12(ops-10): 보관/보관 해제·삭제 진입은 헤더 ⋯ 메뉴, 확인은 아래 ConfirmDialog. 상시 노출 관리 바는 뺐다. */}
              {selectedGuide ? (
                <OverflowMenu
                  items={[
                    isSpecialLectureArchived(selectedGuide)
                      ? { key: "restore", label: "보관 해제", onSelect: () => requestGuideAction("restore") }
                      : { key: "archive", label: "보관", onSelect: () => requestGuideAction("archive") },
                    { key: "delete", label: "삭제", onSelect: () => requestGuideAction("delete"), tone: "danger" }
                  ]}
                  label={`${selectedGuide.title || "이 특강"} 안내문 작업`}
                />
              ) : null}
            </>
          ) : (
            <>
              <span className="countBadge">확정 명단 {selectedGuide ? enrollments.filter((enrollment) =>
                enrollment.specialLectureGuideId === selectedGuide.specialLectureGuideId ||
                enrollment.guideSlug === getSpecialLectureGuideSlug(selectedGuide)
              ).length : 0}명</span>
              <button
                className="softButton compact"
                disabled={!selectedGuide || !isSelectedGuideSaved || !selectedGuideSessions.length}
                onClick={() => setManualIntakeRequest((current) => current + 1)}
                type="button"
              >
                학생 수동 접수
              </button>
            </>
          )}
          </>
        )}
        actionsClassName="specialLectureHeaderActions"
        density="slim"
        eyebrow="SPECIAL LECTURE"
        title={activeWorkspaceTab === "guide" ? "특강 안내문" : "특강 수업"}
      />

      <SpecialLectureGuideSelector
        onSelectGuide={selectSpecialLectureGuide}
        onToggleStoredGuides={() => setShowStoredGuides((current) => !current)}
        primaryGuides={primaryGuides}
        selectedGuideId={selectedGuideId}
        showStoredGuides={showStoredGuides}
        storedGuides={storedGuides}
      />

      {activeWorkspaceTab === "roster" ? (
        <SpecialLectureApplicationPanel
        applications={applications}
        enrollments={enrollments}
        guides={draftGuides}
        lessons={lessons}
        notificationJobs={notificationJobs}
        onCreateStudent={onCreateStudent}
        onCreateSpecialLectureLessons={onCreateSpecialLectureLessons}
        onDeleteApplication={onDeleteApplication}
        onReplaceStudent={onReplaceStudent}
        onOpenLesson={onOpenLesson}
        onSaveEnrollment={onSaveEnrollment}
        onSaveEnrollments={onSaveEnrollments}
        onSyncSpecialLectureStudentSchedules={onSyncSpecialLectureStudentSchedules}
        onUpdateApplication={onUpdateApplication}
        records={records}
        isGuideSaved={isSelectedGuideSaved}
        manualIntakeRequest={manualIntakeRequest}
        selectedGuide={selectedGuide}
        students={students}
      />
      ) : null}

      {activeWorkspaceTab === "guide" && selectedGuide ? (
      <div className="specialLectureGuideWorkspace">
        <WorkspaceTabs className="notificationSectionTabs specialLectureGuideTabs" label="특강 안내문 편집 항목" variant="secondary">
          {[
            ["content", "안내문 편집"],
            ["links", "링크 설정"],
            ["schedule", "일정 계산"],
            ["sessions", "회차별 일정"],
            ["notice", "알림톡 미리보기"]
          ].map(([id, label]) => (
            <button
              aria-selected={activeGuideEditorTab === id}
              className={activeGuideEditorTab === id ? "active" : ""}
              key={id}
              onClick={() => setActiveGuideEditorTab(id)}
              role="tab"
              type="button"
            >
              {label}
            </button>
          ))}
        </WorkspaceTabs>

        {/* 2026-09-19 · U12(ops-08): 저장·일정 계산·보관/삭제·링크 복사 결과는 탭 분기 밖에 두어 어느 탭에서든 보인다. */}
        {panelFeedback.message ? (
          <AsyncOperationStatus
            className="specialLectureGuideFeedback"
            description={panelFeedback.message}
            label="특강 안내문"
            state={panelFeedback.state}
          />
        ) : null}
        {copyFeedback.message ? (
          <AsyncOperationStatus
            className="specialLectureGuideFeedback"
            description={copyFeedback.message}
            label="링크 복사"
            state={copyFeedback.state}
          />
        ) : null}

        {activeGuideEditorTab === "content" ? (
        <div className="specialLectureEditorGrid">
          <div className="specialLectureEditor">
          <SpecialLectureGuideBasicFields
            guide={selectedGuide}
            onUpdateGuide={updateSelectedGuide}
          />

          <SpecialLectureGuideTextFields
            guide={selectedGuide}
            onUpdateGuide={updateSelectedGuide}
          />

          <SpecialLectureHighlightEditor
            highlights={selectedGuideHighlights}
            onAddHighlight={addSpecialLectureHighlight}
            onRemoveHighlight={removeSpecialLectureHighlight}
            onUpdateHighlight={updateSpecialLectureHighlight}
          />

          <SpecialLectureSpecialNotesField
            guide={selectedGuide}
            onUpdateGuide={updateSelectedGuide}
          />
          </div>

          <SpecialLecturePreviewColumn guide={selectedGuide} guideUrl={selectedGuideUrl} />
        </div>
        ) : null}

        {activeGuideEditorTab === "links" ? (
          <div className="specialLectureEditor specialLectureGuideTabPanel">
            <SpecialLectureGuideLinkFields guide={selectedGuide} onUpdateGuide={updateSelectedGuide} />
          </div>
        ) : null}

        {activeGuideEditorTab === "schedule" ? (
          <div className="specialLectureEditor specialLectureGuideTabPanel">
          <SpecialLectureScheduleCalculator
            calculatedSessionCount={calculatedSessionCount}
            calculatedTotalHours={calculatedTotalHours}
            calculatedTuition={calculatedTuition}
            calculatedWeekdaySummaryText={calculatedWeekdaySummaryText}
            generatedSessionsPreview={generatedSessionsPreview}
            guide={selectedGuide}
            isOpen
            normalizedScheduleRules={normalizedScheduleRules}
            onAddScheduleRule={addScheduleRule}
            onApplyCalculatedSchedule={applyCalculatedSchedule}
            onRemoveScheduleRule={removeScheduleRule}
            onToggleScheduleRuleDay={toggleScheduleRuleDay}
            onUpdateGuide={updateSelectedGuide}
            onUpdateScheduleRule={updateScheduleRule}
            showToggle={false}
          />
          </div>
        ) : null}

        {activeGuideEditorTab === "sessions" ? (
          <div className="specialLectureEditor specialLectureGuideTabPanel">
          <SpecialLectureSessionPlanEditor
            guide={selectedGuide}
            isOpen
            onAddSession={addSpecialLectureSessionCard}
            onRemoveSession={removeSpecialLectureSessionCard}
            onUpdateSession={updateSpecialLectureSessionCard}
            sessionPlanSummaryText={sessionPlanSummaryText}
            sessions={selectedGuideSessions}
            showToggle={false}
          />
          </div>
        ) : null}

        {activeGuideEditorTab === "notice" ? (
          <div className="specialLectureEditor specialLectureGuideTabPanel">
          <SpecialLectureNoticeMemoField
            guide={selectedGuide}
            onUpdateGuide={updateSelectedGuide}
          />

          <SpecialLectureNoticeActionPanel noticeText={noticeText} />
          </div>
        ) : null}

        {/* 2026-09-19 · U12(ops-08): 편집 탭 5개 공통 하단 저장 바. 콜백·인자는 미리보기 탭 버튼 시절 그대로다. */}
        <StickySaveBar
          className="specialLectureGuideSaveBar"
          label="특강 안내문"
          message={guideSaveState === "dirty" ? "공개 링크와 특강 수업 탭은 저장본을 읽습니다." : ""}
          saveState={guideSaveState}
        >
          <button className="softButton" onClick={copyGuideUrl} type="button">링크 복사</button>
          <button
            className="softButton"
            disabled={saveState === "saving"}
            onClick={prepareSpecialLectureNotice}
            type="button"
          >
            알림톡 발송 준비
          </button>
          <button className="primaryButton" disabled={saveState === "saving"} onClick={saveGuides} type="button">
            {saveState === "saving" ? "저장 중" : "안내문 저장"}
          </button>
        </StickySaveBar>
      </div>
      ) : activeWorkspaceTab === "guide" ? (
        <SpecialLectureNoSelection />
      ) : null}

      {/* 2026-09-19 · U12(ops-10): 보관/보관 해제/삭제 확인. 실행은 draft 배열 전체 저장(persistGuideManagement)이라 다른 안내문의 미저장 변경 수를 같이 알린다. */}
      <ConfirmDialog
        busy={Boolean(managementGuideId)}
        confirmLabel={{ archive: "보관", delete: "삭제", restore: "보관 해제" }[pendingGuideAction?.type] ?? "확인"}
        description={(
          <>
            <p>
              {pendingGuideAction?.type === "delete"
                ? "삭제하면 공개 링크도 더 이상 이 안내문을 찾을 수 없습니다."
                : pendingGuideAction?.type === "archive"
                  ? "진행/예정 카드 목록에서는 숨겨지고, 지난/보관 특강에서 다시 복원할 수 있습니다."
                  : "진행/예정 카드 목록에 다시 표시됩니다."}
            </p>
            {pendingGuideAction?.type !== "delete" && !isSelectedGuideSaved ? (
              <p>이 안내문의 저장하지 않은 변경도 함께 저장됩니다.</p>
            ) : null}
            {unsavedOtherGuideCount > 0 ? (
              <p>저장하지 않은 다른 안내문 변경 {unsavedOtherGuideCount}건도 함께 저장됩니다.</p>
            ) : null}
          </>
        )}
        onCancel={() => setPendingGuideAction(null)}
        onConfirm={confirmPendingGuideAction}
        open={Boolean(pendingGuideAction)}
        title={`${pendingGuideAction?.guideTitle ?? "이 특강"} 안내문을 ${
          { archive: "보관할까요?", delete: "삭제할까요?", restore: "보관 해제할까요?" }[pendingGuideAction?.type] ?? "변경할까요?"
        }`}
        tone={pendingGuideAction?.type === "delete" ? "danger" : "default"}
      />
    </section>
  );
}



export function AcademyReminderList({
  runtime,
  emptyText = "표시할 운영 알림이 없습니다.",
  onDeleteAcademyReminder,
  onEditAcademyReminder,
  onSaveAcademyReminder,
  reminders = [],
  showActions = false,
  students = [],
  templates = []
}) {
  const {
    formatAcademyReminderDateTime,
    getAcademyReminderClassName,
    getAcademyReminderPriorityLabel,
    getAcademyReminderStudentName,
    getAcademyReminderTypeLabel,
    normalizeAcademyReminderDraft,
    normalizeAcademyReminderStatus,
    sortAcademyReminders
  } = runtime;
  const [busyReminderId, setBusyReminderId] = useState("");
  const [actionError, setActionError] = useState("");
  const safeReminders = Array.isArray(reminders) ? reminders.filter(Boolean) : [];

  async function markDone(reminder) {
    const reminderId = reminder?.reminderId || reminder?.id || "";
    if (busyReminderId) return;
    if (!reminderId) {
      setActionError("운영 알림 ID가 없어 완료 처리할 수 없습니다. 새로고침 후 다시 시도해 주세요.");
      return;
    }
    setBusyReminderId(reminderId);
    setActionError("");
    try {
      await onSaveAcademyReminder?.(normalizeAcademyReminderDraft({
        ...reminder,
        reminderId,
        id: reminderId,
        status: "done",
        completedAt: new Date().toISOString()
      }));
    } catch (error) {
      console.error("Failed to mark academy reminder done", error);
      setActionError(`운영 알림 완료 실패 · ${error?.message || "알 수 없는 오류"}`);
    } finally {
      setBusyReminderId("");
    }
  }

  async function removeReminder(reminder) {
    const reminderId = reminder?.reminderId || reminder?.id || "";
    if (busyReminderId) return;
    if (!reminderId) {
      setActionError("운영 알림 ID가 없어 삭제할 수 없습니다. 새로고침 후 다시 시도해 주세요.");
      return;
    }
    setBusyReminderId(reminderId);
    setActionError("");
    try {
      await onDeleteAcademyReminder?.(reminderId);
    } catch (error) {
      console.error("Failed to delete academy reminder", error);
      setActionError(`운영 알림 삭제 실패 · ${error?.message || "알 수 없는 오류"}`);
    } finally {
      setBusyReminderId("");
    }
  }

  if (!safeReminders.length) {
    return <EmptyState className="emptyState academyReminderEmpty">{emptyText}</EmptyState>;
  }

  return (
    <div className="academyReminderList">
      {actionError ? <div className="academyReminderActionError">{actionError}</div> : null}
      {sortAcademyReminders(safeReminders).map((rawReminder) => {
        const reminderId = rawReminder.reminderId || rawReminder.id || "";
        const reminder = normalizeAcademyReminderDraft(reminderId ? { ...rawReminder, reminderId, id: reminderId } : rawReminder);
        const status = normalizeAcademyReminderStatus(reminder.status);
        const studentName = getAcademyReminderStudentName(reminder, students);
        const className = getAcademyReminderClassName(reminder, templates);
        return (
          <article className={`academyReminderItem status-${status} priority-${reminder.priority || "normal"}`} key={reminderId || reminder.reminderId}>
            <div className="academyReminderItemMain">
              <div className="academyReminderItemTop">
                <span className="academyReminderType">{getAcademyReminderTypeLabel(reminder.reminderType ?? reminder.type)}</span>
                <strong>{reminder.title || "운영 알림"}</strong>
                <span className="academyReminderDateTime">{formatAcademyReminderDateTime(reminder)}</span>
              </div>
              <p>{reminder.content || reminder.memo || "내용 없음"}</p>
              <div className="academyReminderMeta">
                {studentName ? <span>학생 {studentName}</span> : null}
                {className ? <span>반 {className}</span> : null}
                <span>{getAcademyReminderPriorityLabel(reminder.priority)}</span>
                <span>{academyReminderStatusLabels[status]}</span>
                <span>{reminder.slackNotify === false ? "슬랙 제외" : "09:00 슬랙 포함"}</span>
              </div>
            </div>
            {showActions ? (
              <div className="academyReminderActions">
                {busyReminderId === reminderId ? <InlineSaveStatus label="운영 알림" saveState="saving" /> : null}
                {status !== "done" && reminderId && busyReminderId !== reminderId ? (
                  <button className="softButton compact" onClick={() => markDone(reminder)} type="button">완료</button>
                ) : null}
                <OverflowMenu
                  items={reminderId && busyReminderId !== reminderId
                    ? [
                        { key: "edit", label: "알림 수정", onSelect: () => onEditAcademyReminder?.(reminder) },
                        { key: "delete", label: "알림 삭제", onSelect: () => removeReminder(reminder), tone: "danger" }
                      ]
                    : []}
                  label={`${reminder.title || "운영 알림"} 추가 작업`}
                />
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

export function AcademyReminderPanel({
  runtime,
  reminders = [],
  selectedDate = runtime.today,
  students = [],
  templates = [],
  onDeleteAcademyReminder,
  onSaveAcademyReminder
}) {
  const {
    createAcademyReminderDraft,
    getAcademyReminderClassTemplateId,
    getAcademyReminderSourcePayload,
    getAcademyRemindersForDate,
    isAcademyReminderOverdue,
    isActiveStudent,
    normalizeAcademyReminderDraft,
    normalizeAcademyReminderStatus,
    sortAcademyReminders,
    today
  } = runtime;
  const [draft, setDraft] = useState(() => createAcademyReminderDraft(selectedDate));
  const [editingReminderId, setEditingReminderId] = useState("");
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false);
  const [isReminderFormOpen, setIsReminderFormOpen] = useState(false);
  const [saveState, setSaveState] = useState("idle");
  const [saveMessage, setSaveMessage] = useState("");
  const isEditingReminder = Boolean(editingReminderId);
  const shouldShowReminderForm = isReminderFormOpen || isEditingReminder;
  const activeStudents = students.filter(isActiveStudent);
  const activeClassTemplates = templates.filter((template) => template?.classTemplateId);
  const isClassReminderDraft = draft.reminderType === "class_notice";
  const selectedClassTemplateId = getAcademyReminderClassTemplateId(draft);
  const overdueReminders = sortAcademyReminders(reminders).filter((reminder) => isAcademyReminderOverdue(reminder));
  const selectedDateReminders = getAcademyRemindersForDate(reminders, selectedDate)
    .filter((reminder) => !isAcademyReminderOverdue(reminder));
  const upcomingReminders = sortAcademyReminders(reminders)
    .filter((reminder) => normalizeAcademyReminderStatus(reminder.status) === "pending")
    .filter((reminder) => (reminder.reminderDate || reminder.date || "") >= today)
    .filter((reminder) => !isAcademyReminderOverdue(reminder))
    .slice(0, 8);

  useEffect(() => {
    if (editingReminderId) return;
    setDraft((current) => ({ ...current, reminderDate: selectedDate || today, date: selectedDate || today }));
  }, [editingReminderId, selectedDate]);

  function updateDraft(field, value) {
    setSaveState(isEditingReminder ? "dirty" : "idle");
    setSaveMessage(isEditingReminder ? "운영 알림 수정 중 · 저장 전" : "");
    setDraft((current) => ({ ...current, [field]: value }));
  }

  function updateReminderType(nextType) {
    setSaveState(isEditingReminder ? "dirty" : "idle");
    setSaveMessage(isEditingReminder ? "운영 알림 수정 중 · 저장 전" : "");
    setDraft((current) => {
      const sourcePayload = { ...getAcademyReminderSourcePayload(current) };
      if (nextType === "class_notice") {
        return {
          ...current,
          reminderType: nextType,
          studentId: "",
          sourcePayload
        };
      }
      delete sourcePayload.classTemplateId;
      delete sourcePayload.classId;
      delete sourcePayload.className;
      return {
        ...current,
        reminderType: nextType,
        classTemplateId: "",
        sourcePayload
      };
    });
  }

  function updateReminderStudentTarget(studentId) {
    setSaveState(isEditingReminder ? "dirty" : "idle");
    setSaveMessage(isEditingReminder ? "운영 알림 수정 중 · 저장 전" : "");
    setDraft((current) => {
      const sourcePayload = { ...getAcademyReminderSourcePayload(current) };
      delete sourcePayload.classTemplateId;
      delete sourcePayload.classId;
      delete sourcePayload.className;
      return {
        ...current,
        classTemplateId: "",
        studentId,
        sourcePayload
      };
    });
  }

  function updateReminderClassTarget(classTemplateId) {
    const selectedTemplate = activeClassTemplates.find((template) => template.classTemplateId === classTemplateId);
    setSaveState(isEditingReminder ? "dirty" : "idle");
    setSaveMessage(isEditingReminder ? "운영 알림 수정 중 · 저장 전" : "");
    setDraft((current) => {
      const sourcePayload = { ...getAcademyReminderSourcePayload(current) };
      if (classTemplateId) {
        sourcePayload.classTemplateId = classTemplateId;
        sourcePayload.className = selectedTemplate?.name ?? sourcePayload.className ?? "";
      } else {
        delete sourcePayload.classTemplateId;
        delete sourcePayload.classId;
        delete sourcePayload.className;
      }
      return {
        ...current,
        classTemplateId,
        studentId: "",
        sourcePayload
      };
    });
  }

  function startEditReminder(reminder) {
    const normalized = normalizeAcademyReminderDraft(reminder);
    setEditingReminderId(normalized.reminderId);
    setIsReminderFormOpen(true);
    setDraft(getAcademyReminderClassTemplateId(normalized) ? { ...normalized, reminderType: "class_notice" } : normalized);
    setSaveState("dirty");
    setSaveMessage("운영 알림 수정 중 · 저장 전");
  }

  function cancelEditReminder() {
    setEditingReminderId("");
    setIsReminderFormOpen(false);
    setDraft(createAcademyReminderDraft(selectedDate || today));
    setSaveState("idle");
    setSaveMessage("");
  }

  async function saveDraft() {
    const status = normalizeAcademyReminderStatus(draft.status);
    if (draft.reminderType === "class_notice" && !selectedClassTemplateId) {
      setSaveState("failed");
      setSaveMessage("반 알림 저장 실패 · 반을 선택하세요.");
      return;
    }
    const selectedTemplate = activeClassTemplates.find((template) => template.classTemplateId === selectedClassTemplateId);
    const sourcePayload = { ...getAcademyReminderSourcePayload(draft) };
    if (draft.reminderType === "class_notice" && selectedClassTemplateId) {
      sourcePayload.classTemplateId = selectedClassTemplateId;
      sourcePayload.className = selectedTemplate?.name ?? sourcePayload.className ?? "";
    } else {
      delete sourcePayload.classTemplateId;
      delete sourcePayload.classId;
      delete sourcePayload.className;
    }
    const reminderToSave = normalizeAcademyReminderDraft({
      ...draft,
      classTemplateId: draft.reminderType === "class_notice" ? selectedClassTemplateId : "",
      reminderId: editingReminderId || draft.reminderId,
      id: editingReminderId || draft.reminderId,
      sourcePayload,
      studentId: draft.reminderType === "class_notice" ? "" : draft.studentId,
      completedAt: status === "done" ? (draft.completedAt || new Date().toISOString()) : "",
      status
    });
    setSaveState("saving");
    setSaveMessage(isEditingReminder ? "운영 알림을 수정 저장하는 중입니다." : "운영 알림을 저장하는 중입니다.");
    try {
      const saved = await onSaveAcademyReminder?.(reminderToSave);
      const nextDate = saved?.reminderDate || reminderToSave.reminderDate || selectedDate || today;
      setEditingReminderId("");
      setIsReminderFormOpen(false);
      setSaveState("saved");
      setSaveMessage(isEditingReminder ? "운영 알림 · 수정 완료" : "운영 알림 · 저장 완료");
      setDraft(createAcademyReminderDraft(nextDate));
    } catch (error) {
      setSaveState("failed");
      setSaveMessage(`운영 알림 ${isEditingReminder ? "수정" : "저장"} 실패 · ${error?.message || "알 수 없는 오류"}`);
    }
  }

  return (
    <section className="panel academyReminderPanel">
      <SectionHeader
        actions={(
          <>
          <span className={`saveStateBadge ${saveState === "saved" ? "success" : saveState}`}>{saveMessage || "Supabase academy_reminders"}</span>
          <button
            className="softButton compact"
            disabled={isEditingReminder}
            onClick={() => {
              setIsPanelCollapsed(false);
              setIsReminderFormOpen((current) => !current);
            }}
            title={isEditingReminder ? "수정 중에는 수정 취소 또는 저장을 먼저 선택하세요." : undefined}
            type="button"
          >
            {shouldShowReminderForm ? "입력 접기" : "알림 입력 열기"}
          </button>
          <button
            aria-controls="academy-reminder-panel-body"
            aria-expanded={!isPanelCollapsed}
            className="ghostButton compact"
            onClick={() => setIsPanelCollapsed((current) => !current)}
            type="button"
          >
            {isPanelCollapsed ? "알림 펼치기" : "알림 접기"}
            <DisclosureChevron open={!isPanelCollapsed} />
          </button>
          </>
        )}
        actionsClassName="academyReminderHeaderActions"
        density="slim"
        eyebrow="OPERATIONS SOURCE"
        title="운영 알림 원본"
        titleAdornment={(
          <HelpTip
            label="운영 알림 원본"
            text="상담 일정, 신입생 일정, 특이사항 알림을 한 곳에 저장하고 각 화면과 09:00 슬랙 요약에서 읽습니다."
          />
        )}
      />
      <Disclosure
        hideTrigger
        bodyClassName="academyReminderPanelBody"
        id="academy-reminder-panel-body"
        open={!isPanelCollapsed}
        onToggle={(nextOpen) => setIsPanelCollapsed(!nextOpen)}
      >
      {overdueReminders.length > 0 ? (
        <section className="academyReminderOverdueSection">
          <div className="miniSectionHeader">
            <strong>처리 지연 알림</strong>
            <span>{overdueReminders.length}건 · 먼저 처리</span>
          </div>
          <AcademyReminderList
            runtime={runtime}
            emptyText="처리 지연 알림이 없습니다."
            onDeleteAcademyReminder={onDeleteAcademyReminder}
            onEditAcademyReminder={startEditReminder}
            onSaveAcademyReminder={onSaveAcademyReminder}
            reminders={overdueReminders}
            showActions
            students={students}
            templates={templates}
          />
        </section>
      ) : null}
      {isEditingReminder ? (
        <div className="academyReminderEditBanner">
          <div className="helpTipTitleRow">
            <strong>운영 알림 수정 중</strong>
            <HelpTip
              label="운영 알림 수정"
              text="같은 reminderId를 유지해 날짜, 시간, 내용만 수정 저장합니다."
            />
          </div>
          <button className="softButton compact" disabled={saveState === "saving"} onClick={cancelEditReminder} type="button">
            수정 취소
          </button>
        </div>
      ) : null}
      {shouldShowReminderForm ? (
        <div className="academyReminderForm">
          <select aria-label="운영 알림 종류" value={draft.reminderType} onChange={(event) => updateReminderType(event.target.value)}>
            {academyReminderTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {isClassReminderDraft ? (
            <select aria-label="운영 알림 대상 반" value={selectedClassTemplateId} onChange={(event) => updateReminderClassTarget(event.target.value)}>
              <option value="">반 선택</option>
              {activeClassTemplates.map((template) => (
                <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
              ))}
            </select>
          ) : (
            <select aria-label="운영 알림 대상 학생" value={draft.studentId} onChange={(event) => updateReminderStudentTarget(event.target.value)}>
              <option value="">학생 선택 없음</option>
              {activeStudents.map((student) => (
                <option key={student.studentId} value={student.studentId}>{student.name}</option>
              ))}
            </select>
          )}
          <input
            aria-label="운영 알림 제목"
            value={draft.title}
            onChange={(event) => updateDraft("title", event.target.value)}
            placeholder="알림 제목"
          />
          <input aria-label="운영 알림 날짜" type="date" value={draft.reminderDate} onChange={(event) => updateDraft("reminderDate", event.target.value)} />
          <input aria-label="운영 알림 시간" type="time" value={draft.reminderTime} onChange={(event) => updateDraft("reminderTime", event.target.value)} />
          <select aria-label="운영 알림 중요도" value={draft.priority} onChange={(event) => updateDraft("priority", event.target.value)}>
            {academyReminderPriorityOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <select aria-label="운영 알림 처리 상태" value={draft.status} onChange={(event) => updateDraft("status", event.target.value)}>
            {Object.entries(academyReminderStatusLabels).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          <label className="academyReminderSlackToggle">
            <input
              checked={draft.slackNotify !== false}
              onChange={(event) => updateDraft("slackNotify", event.target.checked)}
              type="checkbox"
            />
            09:00 슬랙 포함
          </label>
          <textarea
            aria-label="운영 알림 내용"
            value={draft.content}
            onChange={(event) => updateDraft("content", event.target.value)}
            placeholder="내용을 입력하세요. 예: 상담 주제, 학부모 요청, 신입생 준비물, 당일 확인할 특이사항"
            rows="3"
          />
          <button
            className="primaryButton"
            disabled={!String(draft.title || draft.content).trim() || saveState === "saving" || (isClassReminderDraft && !selectedClassTemplateId)}
            onClick={saveDraft}
            type="button"
          >
            {saveState === "saving" ? "저장 중" : isEditingReminder ? "수정 저장" : "운영 알림 저장"}
          </button>
        </div>
      ) : null}
      <div className="academyReminderColumns">
        <section>
          <div className="miniSectionHeader">
            <strong>{selectedDate} 알림</strong>
            <span>{selectedDateReminders.length}건</span>
          </div>
          <AcademyReminderList
            runtime={runtime}
            onDeleteAcademyReminder={onDeleteAcademyReminder}
            onEditAcademyReminder={startEditReminder}
            onSaveAcademyReminder={onSaveAcademyReminder}
            reminders={selectedDateReminders}
            showActions
            students={students}
            templates={templates}
          />
        </section>
        <section>
          <div className="miniSectionHeader">
            <strong>다가오는 알림</strong>
            <span>{upcomingReminders.length}건</span>
          </div>
          <AcademyReminderList
            runtime={runtime}
            emptyText="대기 중인 운영 알림이 없습니다."
            onDeleteAcademyReminder={onDeleteAcademyReminder}
            onEditAcademyReminder={startEditReminder}
            onSaveAcademyReminder={onSaveAcademyReminder}
            reminders={upcomingReminders}
            showActions
            students={students}
            templates={templates}
          />
        </section>
      </div>
      </Disclosure>
    </section>
  );
}
