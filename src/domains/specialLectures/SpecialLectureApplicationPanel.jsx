import { useMemo, useState } from "react";
import { copyTextToClipboard } from "../exams/outputPreview.js";
import { apiUrl } from "../../shared/utils/apiClient.js";
import {
  defaultSpecialLectureGuides,
  getSpecialLectureApplicationStatusLabel,
  getSpecialLectureGuideSlug,
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

export function SpecialLectureApplicationPanel({
  applications = [],
  guides = defaultSpecialLectureGuides,
  onUpdateApplication,
  selectedGuide = null,
  students = []
}) {
  const [panelMessage, setPanelMessage] = useState("");
  const [updatingApplicationId, setUpdatingApplicationId] = useState("");
  const normalizedGuides = useMemo(() => normalizeSpecialLectureGuides(guides), [guides]);
  const normalizedApplications = useMemo(
    () => normalizeSpecialLectureApplications(applications)
      .sort((first, second) => new Date(second.createdAt).getTime() - new Date(first.createdAt).getTime()),
    [applications]
  );
  const knownGuideKeys = useMemo(() => new Set(normalizedGuides.flatMap((guide) => [
    guide.specialLectureGuideId,
    getSpecialLectureGuideSlug(guide)
  ]).filter(Boolean)), [normalizedGuides]);
  const selectedGuideApplications = selectedGuide
    ? normalizedApplications.filter((application) => doesSpecialLectureApplicationMatchGuide(application, selectedGuide))
    : normalizedApplications;
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
