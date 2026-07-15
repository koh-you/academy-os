import { useMemo, useState } from "react";
import { copyTextToClipboard } from "../exams/outputPreview.js";
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
  specialLectureApplicationStatusOptions,
  specialLectureEnrollmentStatusOptions
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

function buildEnrollmentFromMatchRow(row, guide, sessionIds = [], existingEnrollment = null) {
  const studentId = row.student?.studentId ?? "";
  return normalizeSpecialLectureEnrollment({
    ...(existingEnrollment ?? {}),
    enrollmentId: existingEnrollment?.enrollmentId || createSpecialLectureEnrollmentId(guide, studentId),
    specialLectureGuideId: guide.specialLectureGuideId,
    guideSlug: getSpecialLectureGuideSlug(guide),
    applicationId: row.application.applicationId,
    studentId,
    status: "active",
    sessionIds: existingEnrollment?.sessionIds?.length ? existingEnrollment.sessionIds : sessionIds,
    memo: existingEnrollment?.memo || row.application.selectedSession || row.application.memo || "",
    createdAt: existingEnrollment?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
}

function buildSpecialLectureLessonDrafts({ enrollments = [], guide = null, lessons = [], students = [] } = {}) {
  const guideSessions = getSpecialLectureGuideSessions(guide);
  const activeEnrollments = normalizeSpecialLectureEnrollments(enrollments)
    .filter((enrollment) => enrollment.status === "active")
    .filter((enrollment) => getEnrollmentStudent(enrollment, students));
  const lessonTrackId = getSpecialLectureLessonTrackId(guide);
  return guideSessions
    .map((session) => {
      if (!session.dateKey) return null;
      const studentIds = activeEnrollments
        .filter((enrollment) => enrollment.sessionIds.includes(session.sessionId))
        .map((enrollment) => enrollment.studentId);
      if (!studentIds.length) return null;
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
        studentIds,
        lessonTrackId,
        lessonTrackType: "specialLecture",
        specialLectureGuideId: guide.specialLectureGuideId,
        specialLectureSessionId: session.sessionId,
        specialLectureSessionIndex: session.sessionIndex,
        status: existingLesson?.status || "scheduled"
      };
    })
    .filter(Boolean);
}

export function SpecialLectureApplicationPanel({
  applications = [],
  enrollments = [],
  guides = defaultSpecialLectureGuides,
  lessons = [],
  onCreateSpecialLectureLessons,
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
  const normalizedGuides = useMemo(() => normalizeSpecialLectureGuides(guides), [guides]);
  const normalizedApplications = useMemo(
    () => normalizeSpecialLectureApplications(applications)
      .sort((first, second) => new Date(second.createdAt).getTime() - new Date(first.createdAt).getTime()),
    [applications]
  );
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
    ? normalizedApplications.filter((application) => doesSpecialLectureApplicationMatchGuide(application, selectedGuide))
    : normalizedApplications;
  const selectedGuideEnrollments = selectedGuide
    ? normalizedEnrollments.filter((enrollment) => doesSpecialLectureEnrollmentMatchGuide(enrollment, selectedGuide))
    : normalizedEnrollments;
  const unmatchedApplications = normalizedApplications.filter((application) => {
    const keys = [application.specialLectureGuideId, application.guideSlug].filter(Boolean);
    return !keys.length || keys.every((key) => !knownGuideKeys.has(key));
  });
  const statusCounts = selectedGuideApplications.reduce((counts, application) => ({
    ...counts,
    [application.status]: (counts[application.status] ?? 0) + 1
  }), {});
  const statusSummary = specialLectureApplicationStatusOptions.map((option) => ({
    ...option,
    count: statusCounts[option.value] ?? 0
  }));
  const confirmedMatchRows = useMemo(
    () => buildSpecialLectureMatchRows(normalizedApplications, selectedGuide, students),
    [normalizedApplications, selectedGuide, students]
  );
  const matchedRows = confirmedMatchRows.filter((row) => row.status === "matched" && row.student);
  const needsReviewRows = confirmedMatchRows.filter((row) => row.status !== "matched" || !row.student);
  const visibleApplications = selectedGuideApplications.slice(0, 8);
  const visibleUnmatchedApplications = unmatchedApplications.slice(0, 3);
  const guideSessions = useMemo(() => getSpecialLectureGuideSessions(selectedGuide), [selectedGuide]);
  const guideSessionIds = guideSessions.map((session) => session.sessionId);
  const activeEnrollments = selectedGuideEnrollments.filter((enrollment) => enrollment.status === "active");
  const enrollmentByStudentId = new Map(selectedGuideEnrollments.map((enrollment) => [enrollment.studentId, enrollment]));
  const missingEnrollmentRows = matchedRows.filter((row) => row.student?.studentId && !enrollmentByStudentId.has(row.student.studentId));
  const lessonPreviewRows = guideSessions.map((session) => {
    const attendees = activeEnrollments
      .filter((enrollment) => enrollment.sessionIds.includes(session.sessionId))
      .map((enrollment) => ({
        enrollment,
        student: getEnrollmentStudent(enrollment, students)
      }))
      .filter((row) => row.student);
    const lessonId = createSpecialLectureLessonId(selectedGuide, session, session.sessionIndex);
    return {
      ...session,
      attendees,
      existingLesson: lessons.find((lesson) => lesson.lessonId === lessonId) ?? null,
      lessonId
    };
  });
  const lessonDrafts = useMemo(
    () => buildSpecialLectureLessonDrafts({ enrollments: selectedGuideEnrollments, guide: selectedGuide, lessons, students }),
    [selectedGuideEnrollments, selectedGuide, lessons, students]
  );
  const emptySessionCount = lessonPreviewRows.filter((row) => !row.attendees.length).length;
  const canCreateLessons = Boolean(selectedGuide && activeEnrollments.length && lessonDrafts.length && !needsReviewRows.length);
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
      await onUpdateApplication(application.applicationId, { status });
      setPanelMessage(`${application.studentName || "신청자"} 상태를 ${getSpecialLectureApplicationStatusLabel(status)}(으)로 저장했습니다.`);
    } catch (error) {
      setPanelMessage(`신청자 상태 저장 실패: ${error.message}`);
    } finally {
      setUpdatingApplicationId("");
    }
  }

  async function matchApplicationToCurrentGuide(application) {
    if (!onUpdateApplication || !application.applicationId || !selectedGuide) return;
    const guideId = String(selectedGuide.specialLectureGuideId ?? "").trim();
    const guideSlug = getSpecialLectureGuideSlug(selectedGuide);
    const campaign = [
      selectedGuide.year,
      selectedGuide.season,
      selectedGuide.title
    ].filter(Boolean).join("_").replace(/\s+/g, "_") || application.campaign || "special_lecture";
    setPanelMessage("");
    setUpdatingApplicationId(application.applicationId);
    try {
      await onUpdateApplication(application.applicationId, {
        specialLectureGuideId: guideId,
        guideSlug,
        campaign
      });
      setPanelMessage(`${application.studentName || "신청자"} 신청을 현재 안내문에 연결했습니다.`);
    } catch (error) {
      setPanelMessage(`신청자 안내문 연결 실패: ${error.message}`);
    } finally {
      setUpdatingApplicationId("");
    }
  }

  function getEnrollmentDraft(enrollment) {
    return {
      memo: enrollment.memo,
      sessionIds: enrollment.sessionIds,
      status: enrollment.status,
      ...(enrollmentDrafts[enrollment.enrollmentId] ?? {})
    };
  }

  function updateEnrollmentDraft(enrollmentId, patch) {
    setEnrollmentDrafts((current) => ({
      ...current,
      [enrollmentId]: {
        ...(current[enrollmentId] ?? {}),
        ...patch
      }
    }));
  }

  function toggleEnrollmentSession(enrollment, sessionId) {
    const draft = getEnrollmentDraft(enrollment);
    const hasSession = draft.sessionIds.includes(sessionId);
    updateEnrollmentDraft(enrollment.enrollmentId, {
      sessionIds: hasSession
        ? draft.sessionIds.filter((item) => item !== sessionId)
        : [...draft.sessionIds, sessionId]
    });
  }

  async function addMatchedRowsToEnrollmentSource() {
    if (!onSaveEnrollments || !selectedGuide || !guideSessionIds.length || !missingEnrollmentRows.length) return;
    setPanelMessage("");
    setSavingEnrollmentId("bulk");
    try {
      const nextEnrollments = missingEnrollmentRows.map((row) =>
        buildEnrollmentFromMatchRow(row, selectedGuide, guideSessionIds)
      );
      await onSaveEnrollments(nextEnrollments);
      setPanelMessage(`확정 수강명단 ${nextEnrollments.length}건을 저장했습니다. 학생별 회차를 확인한 뒤 수업일지를 생성하세요.`);
    } catch (error) {
      setPanelMessage(`확정 수강명단 저장 실패: ${error.message}`);
    } finally {
      setSavingEnrollmentId("");
    }
  }

  async function saveEnrollmentDraft(enrollment) {
    if (!onSaveEnrollment || !selectedGuide) return;
    const draft = getEnrollmentDraft(enrollment);
    const nextEnrollment = normalizeSpecialLectureEnrollment({
      ...enrollment,
      ...draft,
      specialLectureGuideId: selectedGuide.specialLectureGuideId,
      guideSlug: getSpecialLectureGuideSlug(selectedGuide),
      updatedAt: new Date().toISOString()
    });
    setPanelMessage("");
    setSavingEnrollmentId(enrollment.enrollmentId);
    try {
      await onSaveEnrollment(nextEnrollment);
      setEnrollmentDrafts((current) => {
        const nextDrafts = { ...current };
        delete nextDrafts[enrollment.enrollmentId];
        return nextDrafts;
      });
      setPanelMessage(`${getEnrollmentStudent(enrollment, students)?.name || "학생"} 특강 회차 계획을 저장했습니다.`);
    } catch (error) {
      setPanelMessage(`특강 회차 계획 저장 실패: ${error.message}`);
    } finally {
      setSavingEnrollmentId("");
    }
  }

  async function createSpecialLectureLessons() {
    if (!onCreateSpecialLectureLessons || !canCreateLessons) return;
    setLessonCreateState({ state: "saving", message: "특강 수업일지를 생성하는 중입니다." });
    try {
      const savedLessons = await onCreateSpecialLectureLessons(lessonDrafts);
      setLessonCreateState({
        state: "saved",
        message: `특강 수업일지 ${savedLessons.length}개를 생성/갱신했습니다. 첫 회차 수업일지를 열었습니다.`
      });
    } catch (error) {
      setLessonCreateState({ state: "failed", message: `특강 수업일지 생성 실패: ${error.message}` });
    }
  }

  return (
    <section className="specialLectureApplicationsPanel">
      <div className="sectionHeader slim">
        <div>
          <p className="eyebrow">APPLICATION SOURCE</p>
          <h3>특강 신청자</h3>
          <span>
            전체 {normalizedApplications.length}건 · 현재 안내문 {selectedGuideApplications.length}건
          </span>
        </div>
        <button className="softButton compact" onClick={copyWebhookUrl} type="button">Tally 웹훅 복사</button>
      </div>

      <div className="specialLectureWebhookBox">
        <div>
          <strong>별도 원천</strong>
          <span>Supabase `special_lecture_applications`에 저장합니다. 신입생 상담 접수와 섞지 않습니다.</span>
        </div>
        <code>{webhookUrl}</code>
      </div>

      <div className="specialLectureApplicationStatusSummary">
        {statusSummary.map((item) => (
          <span className={`specialLectureApplicationStatus ${item.value}`} key={item.value}>
            {item.label} {item.count}
          </span>
        ))}
        {unmatchedApplications.length ? (
          <span className="specialLectureApplicationStatus unmatched">미매칭 {unmatchedApplications.length}</span>
        ) : null}
      </div>

      <div className="specialLectureLessonGate">
        <div className="specialLectureGateHeader">
          <div>
            <strong>특강 확정 명단 매칭 gate</strong>
            <span>확정 신청자만 기존 학생과 매칭합니다. 미매칭/복수 후보가 있으면 저장을 막습니다.</span>
          </div>
          <div className="specialLectureGateStats">
            <span>확정 {confirmedMatchRows.length}</span>
            <span>매칭 {matchedRows.length}</span>
            <span className={needsReviewRows.length ? "danger" : ""}>검토 {needsReviewRows.length}</span>
          </div>
        </div>
        {confirmedMatchRows.length ? (
          <div className="specialLectureMatchGrid">
            {matchedRows.slice(0, 6).map((row) => (
              <article className="specialLectureMatchCard matched" key={row.application.applicationId}>
                <span>매칭</span>
                <strong>{row.application.studentName || "이름 미입력"} → {row.student.name}</strong>
                <small>{row.reason} · {row.student.schoolName || "-"} {row.student.grade || ""}</small>
              </article>
            ))}
            {needsReviewRows.slice(0, 6).map((row) => (
              <article className="specialLectureMatchCard review" key={row.application.applicationId}>
                <span>검토</span>
                <strong>{row.application.studentName || "이름 미입력"}</strong>
                <small>
                  {row.reason}
                  {row.candidates?.length ? ` · 후보 ${row.candidates.map((student) => student.name).join(", ")}` : ""}
                </small>
              </article>
            ))}
          </div>
        ) : (
          <p className="specialLectureGateEmpty">현재 안내문에 연결된 확정 신청자가 없습니다. 신청자 상태를 `확정`으로 바꾸면 이 gate에 나타납니다.</p>
        )}
      </div>

      <div className="specialLectureEnrollmentPanel">
        <div className="specialLectureGateHeader">
          <div>
            <strong>확정 수강명단 원천</strong>
            <span>신청자 원본과 분리된 `special_lecture_enrollments`에 저장합니다. 이 명단이 수업 생성의 기준입니다.</span>
          </div>
          <div className="specialLectureGateStats">
            <span>수강 {activeEnrollments.length}</span>
            <span>추가 필요 {missingEnrollmentRows.length}</span>
            <span>회차 {guideSessions.length}</span>
          </div>
        </div>
        {missingEnrollmentRows.length ? (
          <div className="specialLectureEnrollmentSync">
            <span>기존 학생과 매칭된 확정 신청자 {missingEnrollmentRows.length}명을 아직 수강명단에 저장하지 않았습니다.</span>
            <button
              className="primaryButton compact"
              disabled={!onSaveEnrollments || savingEnrollmentId === "bulk" || !guideSessionIds.length}
              onClick={addMatchedRowsToEnrollmentSource}
              type="button"
            >
              {savingEnrollmentId === "bulk" ? "저장 중" : "확정 명단에 추가"}
            </button>
          </div>
        ) : null}
        {selectedGuideEnrollments.length ? (
          <div className="specialLectureEnrollmentList">
            {selectedGuideEnrollments.map((enrollment) => {
              const student = getEnrollmentStudent(enrollment, students);
              const draft = getEnrollmentDraft(enrollment);
              return (
                <article className="specialLectureEnrollmentCard" key={enrollment.enrollmentId}>
                  <div className="specialLectureEnrollmentIdentity">
                    <span className={`specialLectureEnrollmentStatus ${draft.status}`}>
                      {getSpecialLectureEnrollmentStatusLabel(draft.status)}
                    </span>
                    <strong>{student?.name || enrollment.studentId || "학생 미매칭"}</strong>
                    <small>{student ? [student.schoolName, student.grade].filter(Boolean).join(" · ") || "학교/학년 미입력" : "기존 학생 원천에서 찾지 못했습니다."}</small>
                  </div>
                  <div className="specialLectureSessionToggleGrid">
                    {guideSessions.map((session) => (
                      <label className="specialLectureSessionToggle" key={`${enrollment.enrollmentId}_${session.sessionId}`}>
                        <input
                          checked={draft.sessionIds.includes(session.sessionId)}
                          onChange={() => toggleEnrollmentSession(enrollment, session.sessionId)}
                          type="checkbox"
                        />
                        <span>{session.sessionIndex + 1}회차</span>
                        <small>{session.dateKey || session.date} {session.startTime}</small>
                      </label>
                    ))}
                  </div>
                  <div className="specialLectureEnrollmentControls">
                    <label>
                      상태
                      <select
                        onChange={(event) => updateEnrollmentDraft(enrollment.enrollmentId, { status: event.target.value })}
                        value={draft.status}
                      >
                        {specialLectureEnrollmentStatusOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </label>
                    <label>
                      메모
                      <textarea
                        onChange={(event) => updateEnrollmentDraft(enrollment.enrollmentId, { memo: event.target.value })}
                        value={draft.memo}
                      />
                    </label>
                    <button
                      className="softButton compact"
                      disabled={!onSaveEnrollment || savingEnrollmentId === enrollment.enrollmentId}
                      onClick={() => saveEnrollmentDraft(enrollment)}
                      type="button"
                    >
                      {savingEnrollmentId === enrollment.enrollmentId ? "저장 중" : "회차 계획 저장"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="specialLectureGateEmpty">아직 저장된 확정 수강명단이 없습니다. 확정 신청자를 기존 학생과 매칭한 뒤 명단에 추가하세요.</p>
        )}
      </div>

      <div className="specialLectureLessonPreviewGate">
        <div className="specialLectureGateHeader">
          <div>
            <strong>특강 수업일지 생성 preview gate</strong>
            <span>저장된 확정 수강명단을 기준으로 회차별 `lessons`를 생성/갱신합니다. 버튼 전에는 저장하지 않습니다.</span>
          </div>
          <div className="specialLectureGateStats">
            <span>생성 {lessonDrafts.length}</span>
            <span className={emptySessionCount ? "danger" : ""}>빈 회차 {emptySessionCount}</span>
            <span className={needsReviewRows.length ? "danger" : ""}>검토 {needsReviewRows.length}</span>
          </div>
        </div>
        {lessonPreviewRows.length ? (
          <div className="specialLectureLessonPreviewList">
            {lessonPreviewRows.map((row) => (
              <article className={row.attendees.length ? "specialLectureLessonPreviewCard" : "specialLectureLessonPreviewCard empty"} key={row.sessionId}>
                <div>
                  <span>{row.sessionIndex + 1}회차 {row.existingLesson ? "· 갱신" : "· 신규"}</span>
                  <strong>{row.dateKey || row.date} {row.startTime}-{row.endTime}</strong>
                  <small>{row.topic || selectedGuide?.defaultSessionTopic || "특강 수업"}</small>
                </div>
                <p>
                  {row.attendees.length
                    ? row.attendees.map((item) => item.student.name).join(", ")
                    : "수강 학생 없음 - 저장 제외"}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="specialLectureGateEmpty">회차별 계획을 먼저 저장해 주세요.</p>
        )}
        {needsReviewRows.length ? (
          <p className="inlineNotice danger">확정 신청자 중 기존 학생 매칭이 필요한 건이 있어 수업일지 생성을 막았습니다.</p>
        ) : null}
        {lessonCreateState.message ? (
          <p className={lessonCreateState.state === "failed" ? "inlineNotice danger" : "inlineNotice"}>{lessonCreateState.message}</p>
        ) : null}
        <div className="specialLectureLessonCreateActions">
          <button
            className="primaryButton"
            disabled={!onCreateSpecialLectureLessons || !canCreateLessons || lessonCreateState.state === "saving"}
            onClick={createSpecialLectureLessons}
            type="button"
          >
            {lessonCreateState.state === "saving" ? "생성 중" : "특강 수업일지 생성/갱신"}
          </button>
          <span>저장 대상: Supabase `lessons` · 수업기록/출결/알림톡은 아직 만들지 않음</span>
        </div>
      </div>

      {visibleUnmatchedApplications.length ? (
        <div className="specialLectureApplicationUnmatched">
          <strong>미매칭 신청 {unmatchedApplications.length}건</strong>
          <p>Tally hidden field의 안내문 식별자가 비어 있거나 현재 안내문과 다른 제출입니다. 필요한 경우 현재 안내문에 연결한 뒤 상태를 확정으로 바꾸세요.</p>
          <div className="specialLectureApplicationUnmatchedList">
            {visibleUnmatchedApplications.map((application) => (
              <article className="specialLectureApplicationUnmatchedItem" key={`unmatched_${application.applicationId}`}>
                <span>
                  {application.studentName || "이름 미입력"} · {application.guideSlug || application.specialLectureGuideId || "guide 없음"}
                </span>
                {selectedGuide ? (
                  <button
                    className="softButton compact"
                    disabled={!onUpdateApplication || updatingApplicationId === application.applicationId}
                    onClick={() => matchApplicationToCurrentGuide(application)}
                    type="button"
                  >
                    {updatingApplicationId === application.applicationId ? "연결 중" : "현재 안내문에 연결"}
                  </button>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {visibleApplications.length ? (
        <div className="specialLectureApplicationList">
          {visibleApplications.map((application) => (
            <article className="specialLectureApplicationCard" key={application.applicationId}>
              <div>
                <span className={`specialLectureApplicationStatus ${application.status}`}>
                  {getSpecialLectureApplicationStatusLabel(application.status)}
                </span>
                <strong>{application.studentName || "이름 미입력"}</strong>
                <p>{[application.schoolName, application.grade].filter(Boolean).join(" · ") || "학교/학년 미입력"}</p>
                <small>
                  {application.selectedSession || "신청 회차 미입력"}
                  {application.createdAt ? ` · ${formatKoreaTimeLabel(application.createdAt)}` : ""}
                </small>
              </div>
              <div className="specialLectureApplicationMeta">
                <span>학생 {application.studentPhone || "-"}</span>
                <span>학부모 {application.parentPhone || "-"}</span>
                {application.memo ? <em>{application.memo}</em> : null}
              </div>
              <label>
                처리 상태
                <select
                  disabled={!onUpdateApplication || updatingApplicationId === application.applicationId}
                  onChange={(event) => updateApplicationStatus(application, event.target.value)}
                  value={application.status}
                >
                  {specialLectureApplicationStatusOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            </article>
          ))}
        </div>
      ) : (
        <div className="specialLectureApplicationEmpty">
          <strong>아직 연결된 특강 신청자가 없습니다.</strong>
          <p>SQL 적용 후 Tally Webhook에 위 URL을 연결하면 신청자가 이 영역에 쌓입니다.</p>
        </div>
      )}
      {panelMessage ? <p className={panelMessage.includes("실패") ? "inlineNotice danger" : "inlineNotice"}>{panelMessage}</p> : null}
    </section>
  );
}
