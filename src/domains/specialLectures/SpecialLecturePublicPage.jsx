import { useEffect, useState } from "react";

import { academyBrandName } from "../../app/appConfig.js";
import { apiUrl } from "../../shared/utils/apiClient.js";
import {
  createSpecialLectureCalendarMonths,
  defaultSpecialLectureGuides,
  getSpecialLectureApplicationUrl,
  getSpecialLectureGuideSlug,
  getSpecialLectureGuideSlugFromLocation,
  getSpecialLectureSeasonShortLabel,
  isSpecialLecturePrimaryGuide,
  normalizeSpecialLectureGuide,
  normalizeSpecialLectureGuides
} from "./specialLectureGuideUtils.js";

export function SpecialLectureCalendarPreview({ guide }) {
  const months = createSpecialLectureCalendarMonths(guide);
  if (!months.length) {
    return (
      <div className="specialLectureCalendarPreview empty">
        <strong>계산 달력</strong>
        <p>기간을 입력하면 특강 날짜가 달력으로 표시됩니다.</p>
      </div>
    );
  }

  return (
    <div className="specialLectureCalendarPreview">
      <div className="specialLectureCalendarHeader">
        <strong>계산 달력</strong>
        <span>파란 날짜가 특강 회차입니다.</span>
      </div>
      <div className="specialLectureMonthGrid">
        {months.map((month) => (
          <section className="specialLectureMonth" key={month.key}>
            <h4>{month.label}</h4>
            <div className="specialLectureCalendarWeekdays">
              {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
            <div className="specialLectureCalendarDays">
              {month.days.map((day) => {
                const hasSession = day.sessions.length > 0;
                return (
                  <div
                    className={[
                      "specialLectureCalendarDay",
                      day.isCurrentMonth ? "" : "muted",
                      day.inRange ? "inRange" : "",
                      hasSession ? "hasSession" : ""
                    ].filter(Boolean).join(" ")}
                    key={day.dateKey}
                  >
                    <span>{day.day}</span>
                    {hasSession ? (
                      <small>
                        {day.sessions.length > 1 ? `${day.sessions.length}회` : `${day.sessions[0].startTime || ""}${day.sessions[0].endTime ? `-${day.sessions[0].endTime}` : ""}`.trim()}
                      </small>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export function SpecialLectureGuidePreview({ guide, guideUrl = "" }) {
  const normalizedGuide = normalizeSpecialLectureGuide(guide);
  const applicationUrl = getSpecialLectureApplicationUrl(normalizedGuide);
  const summary = normalizedGuide.summary.trim();
  const highlightCards = normalizedGuide.highlights.map((highlight) => highlight.trim()).filter(Boolean);
  const specialNotes = normalizedGuide.specialNotes.trim();
  const hasOverview = Boolean(summary || highlightCards.length || specialNotes);
  const primaryFacts = [
    ["대상", normalizedGuide.audience],
    ["요일", normalizedGuide.days],
    ["시간", normalizedGuide.time],
    ["시수", normalizedGuide.lessonCount]
  ];
  const secondaryFacts = [
    ["교재", normalizedGuide.textbook],
    ["수강료", normalizedGuide.tuition]
  ];
  return (
    <article className="specialLectureGuidePreview">
      <header className="specialLectureHero">
        <div className="specialLectureHeroKicker">
          <p>{academyBrandName}</p>
          <span>{normalizedGuide.year} {getSpecialLectureSeasonShortLabel(normalizedGuide.season)} 특강</span>
        </div>
        <h1>{normalizedGuide.title}</h1>
        {normalizedGuide.goal ? <span>{normalizedGuide.goal}</span> : null}
      </header>

      <section className="specialLectureQuickFacts">
        {[...primaryFacts, ...secondaryFacts].map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value || "-"}</strong>
          </div>
        ))}
      </section>

      {hasOverview ? (
        <section className="specialLectureGuideSection specialLectureGuideOverview">
          <div className="specialLectureSectionTitle">
            <span>OVERVIEW</span>
            <h2>수업 방향</h2>
          </div>
          {summary ? <p>{summary}</p> : null}
          {highlightCards.length ? (
            <ul className="specialLectureDirectionCards">
              {highlightCards.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          ) : null}
          {specialNotes ? (
            <div className="specialLectureOverviewNote">
              <span>특이사항</span>
              <p>{specialNotes}</p>
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="specialLectureGuideSection">
        <div className="specialLectureSectionTitle">
          <span>SCHEDULE</span>
          <h2>회차별 계획</h2>
        </div>
        <div className="specialLectureTimeline">
          {normalizedGuide.sessions.map((session, index) => (
            <div className="specialLectureTimelineItem" key={`${session.date}_${session.topic}_${index}`}>
              <span>{index + 1}</span>
              <div>
                <strong>{session.date}{session.day ? ` (${session.day})` : ""}</strong>
                {session.startTime && session.endTime ? <small>{session.startTime}-{session.endTime}</small> : null}
                <p>{session.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="specialLectureGuideFooter">
        <div className="specialLectureTeacherBlock">
          <span>담당</span>
          <strong>{normalizedGuide.teacher}</strong>
        </div>
        <p>신청은 아래 버튼으로 접수하고, 세부 문의는 학원으로 회신해 주세요.</p>
        {applicationUrl ? (
          <a className="specialLectureApplyButton" href={applicationUrl} target="_blank" rel="noreferrer">
            특강 신청하기
          </a>
        ) : null}
        {guideUrl ? <small>{guideUrl}</small> : null}
      </section>
    </article>
  );
}

export function SpecialLecturePreviewColumn({ guide, guideUrl = "" }) {
  return (
    <div className="specialLecturePreviewColumn">
      <SpecialLectureGuidePreview guide={guide} guideUrl={guideUrl} />
    </div>
  );
}

export function SpecialLectureNoticeActionPanel({
  copyMessage = "",
  noticeText = "",
  onCopyGuideUrl,
  onPrepareNotice,
  onSaveGuides,
  panelMessage = "",
  saveState = "idle"
}) {
  return (
    <>
      <div className="specialLectureActionBar">
        <button className="softButton" onClick={onSaveGuides} type="button">
          {saveState === "saving" ? "저장 중" : "안내문 저장"}
        </button>
        <button
          className="sendButton"
          disabled={saveState === "saving"}
          onClick={onPrepareNotice}
          type="button"
        >
          {saveState === "saving" ? "저장 중" : "알림톡 발송 준비"}
        </button>
        <button className="softButton" onClick={onCopyGuideUrl} type="button">링크 복사</button>
      </div>
      {copyMessage ? <p className="inlineNotice">{copyMessage}</p> : null}
      {panelMessage ? <p className={panelMessage.includes("실패") ? "inlineNotice danger" : "inlineNotice"}>{panelMessage}</p> : null}

      <div className="specialLectureNoticePreview">
        <strong>알림톡 본문 미리보기</strong>
        <p>{noticeText}</p>
      </div>
    </>
  );
}

export function SpecialLecturePublicPage() {
  const [guides, setGuides] = useState(defaultSpecialLectureGuides);
  const [loadState, setLoadState] = useState("loading");
  const requestedSlug = getSpecialLectureGuideSlugFromLocation();
  const normalizedGuides = normalizeSpecialLectureGuides(guides);
  const selectedGuide = normalizedGuides.find((guide) => getSpecialLectureGuideSlug(guide) === requestedSlug)
    ?? normalizedGuides.find(isSpecialLecturePrimaryGuide)
    ?? normalizedGuides[0]
    ?? null;

  useEffect(() => {
    let isMounted = true;
    fetch(apiUrl("/api/special-lecture-guides"))
      .then((response) => response.json())
      .then((result) => {
        if (!isMounted) return;
        if (result.ok && Array.isArray(result.specialLectureGuides) && (result.hasSpecialLectureGuides || result.specialLectureGuides.length)) {
          setGuides(normalizeSpecialLectureGuides(result.specialLectureGuides));
        }
        setLoadState("loaded");
      })
      .catch(() => {
        if (isMounted) setLoadState("fallback");
      });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined" && selectedGuide?.title) {
      document.title = `${selectedGuide.title} - ${academyBrandName}`;
    }
  }, [selectedGuide?.title]);

  return (
    <main className="specialLecturePublicPage">
      {selectedGuide ? (
        <SpecialLectureGuidePreview guide={selectedGuide} />
      ) : (
        <section className="specialLecturePublicEmpty">
          <strong>현재 공개된 특강 안내문이 없습니다.</strong>
          <p>특강 일정이 확정되면 안내 링크를 다시 보내드리겠습니다.</p>
        </section>
      )}
      {loadState === "fallback" ? (
        <p className="specialLectureLoadNotice">저장본을 불러오지 못해 기본 안내문을 표시하고 있습니다.</p>
      ) : null}
    </main>
  );
}
