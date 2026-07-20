import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { SpecialLectureCalendarPreview } from "./SpecialLecturePublicPage.jsx";
import {
  createDateFromKey,
  formatCurrencyWon,
  formatSpecialLectureHours,
  getSpecialLectureStatusBadge,
  getWeekdayLabel,
  isSpecialLectureArchived,
  specialLectureSeasonOptions,
  specialLectureWeekdayOptions
} from "./specialLectureGuideUtils.js";

export function SpecialLectureManagementBar({
  guide,
  isManaging = false,
  onArchive,
  onDelete,
  onRestore
}) {
  if (!guide) {
    return null;
  }

  const status = getSpecialLectureStatusBadge(guide);
  const archived = isSpecialLectureArchived(guide);

  return (
    <div className="specialLectureManagementBar">
      <div>
        <span>선택 안내문</span>
        <strong>{guide.title || "제목 미입력"}</strong>
        {status ? <small>{status.label} · {guide.periodStart || "시작일 미입력"} ~ {guide.periodEnd || "종료일 미입력"}</small> : null}
      </div>
      <div>
        {archived ? (
          <button className="softButton compact" disabled={isManaging} onClick={onRestore} type="button">
            {isManaging ? "저장 중" : "보관 해제"}
          </button>
        ) : (
          <button className="softButton compact" disabled={isManaging} onClick={onArchive} type="button">
            {isManaging ? "저장 중" : "보관"}
          </button>
        )}
        <button className="dangerSoftButton compact" disabled={isManaging} onClick={onDelete} type="button">
          {isManaging ? "삭제 중" : "삭제"}
        </button>
      </div>
    </div>
  );
}

export function SpecialLectureGuideBasicFields({
  guide,
  onUpdateGuide
}) {
  if (!guide) {
    return null;
  }

  function updateField(field) {
    return (event) => onUpdateGuide?.(field, event.target.value);
  }

  return (
    <div className="specialLectureFormGrid">
      <label>
        연도
        <input value={guide.year} onChange={updateField("year")} />
      </label>
      <label>
        방학
        <select value={guide.season} onChange={updateField("season")}>
          {specialLectureSeasonOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
      <label>
        안내문 제목
        <input value={guide.title} onChange={updateField("title")} />
      </label>
      <label>
        대상
        <input value={guide.audience} onChange={updateField("audience")} />
      </label>
      <label>
        담당
        <input value={guide.teacher} onChange={updateField("teacher")} />
      </label>
      <label>
        요일
        <input value={guide.days} onChange={updateField("days")} />
      </label>
      <label>
        시간
        <input value={guide.time} onChange={updateField("time")} />
      </label>
      <label>
        시수
        <input value={guide.lessonCount} onChange={updateField("lessonCount")} />
      </label>
      <label>
        수강료
        <input value={guide.tuition} onChange={updateField("tuition")} />
      </label>
      <label>
        기본 회차 주제
        <input value={guide.defaultSessionTopic} onChange={updateField("defaultSessionTopic")} />
      </label>
      <label>
        교재
        <input value={guide.textbook} onChange={updateField("textbook")} />
      </label>
      <label>
        공개 URL slug
        <input value={guide.slug} onChange={updateField("slug")} />
      </label>
      <label className="specialLectureFullInput">
        신청폼 URL
        <input value={guide.applicationUrl} onChange={updateField("applicationUrl")} />
      </label>
    </div>
  );
}

export function SpecialLectureGuideTextFields({
  guide,
  onUpdateGuide
}) {
  if (!guide) {
    return null;
  }

  function updateField(field) {
    return (event) => onUpdateGuide?.(field, event.target.value);
  }

  return (
    <>
      <label className="specialLectureWideField specialLectureGoalField">
        학습 목표
        <textarea rows="3" value={guide.goal} onChange={updateField("goal")} />
      </label>

      <label className="specialLectureWideField specialLectureSummaryField">
        수업 방향
        <textarea
          placeholder="예: 방학 동안 현재 진도 기준으로 빈틈을 정리하고 다음 학기 수업을 준비합니다."
          rows="3"
          value={guide.summary}
          onChange={updateField("summary")}
        />
      </label>
    </>
  );
}

export function SpecialLectureHighlightEditor({
  highlights = [],
  onAddHighlight,
  onRemoveHighlight,
  onUpdateHighlight
}) {
  return (
    <section className="specialLectureWideField specialLectureHighlightField">
      <div className="specialLectureFieldHeader">
        <strong>수업 방향 카드</strong>
        <button
          className="softButton compact"
          disabled={highlights.length >= 6}
          onClick={onAddHighlight}
          type="button"
        >
          카드 추가
        </button>
      </div>
      <div className="specialLectureHighlightEditorList">
        {highlights.map((highlight, index) => (
          <div className="specialLectureHighlightEditorCard" key={`special_lecture_highlight_${index}`}>
            <input
              aria-label={`수업 방향 카드 ${index + 1}`}
              placeholder={`수업 방향 카드 ${index + 1}`}
              value={highlight}
              onChange={(event) => onUpdateHighlight?.(index, event.target.value)}
            />
            <button
              className="dangerSoftButton compact"
              onClick={() => onRemoveHighlight?.(index)}
              type="button"
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SpecialLectureSpecialNotesField({
  guide,
  onUpdateGuide
}) {
  if (!guide) {
    return null;
  }

  return (
    <label className="specialLectureWideField specialLectureNotesField">
      특이사항
      <textarea
        placeholder="예: 창일중은 학교 일정상 5회만 수강합니다."
        rows="3"
        value={guide.specialNotes}
        onChange={(event) => onUpdateGuide?.("specialNotes", event.target.value)}
      />
    </label>
  );
}

export function SpecialLectureNoticeMemoField({
  guide,
  onUpdateGuide
}) {
  if (!guide) {
    return null;
  }

  return (
    <label className="specialLectureWideField">
      알림톡 링크 안내 문장
      <input value={guide.noticeMemo} onChange={(event) => onUpdateGuide?.("noticeMemo", event.target.value)} />
    </label>
  );
}

export function SpecialLectureScheduleCalculator({
  calculatedSessionCount = 0,
  calculatedTotalHours = 0,
  calculatedTuition = 0,
  calculatedWeekdaySummaryText = "",
  generatedSessionsPreview = [],
  guide,
  isOpen = false,
  normalizedScheduleRules = [],
  onAddScheduleRule,
  onApplyCalculatedSchedule,
  onRemoveScheduleRule,
  onToggleOpen,
  onToggleScheduleRuleDay,
  onUpdateGuide,
  onUpdateScheduleRule
}) {
  if (!guide) {
    return null;
  }

  return (
    <section className={`specialLectureCalculator ${isOpen ? "open" : "collapsed"}`}>
      <div className="sectionHeader slim specialLectureCalculatorHeader">
        <div>
          <p className="eyebrow">SCHEDULE BUILDER</p>
          <h3>일정 계산</h3>
          <p className="specialLectureCalculatorSummary">
            {calculatedSessionCount}회 · {formatSpecialLectureHours(calculatedTotalHours) || "0시간"} · {formatCurrencyWon(calculatedTuition)}
          </p>
        </div>
        <div className="specialLectureCalculatorHeaderActions">
          {isOpen ? (
            <button className="softButton compact" onClick={onApplyCalculatedSchedule} type="button">일정 계산 적용</button>
          ) : null}
          <button
            aria-expanded={isOpen}
            className="softButton compact"
            onClick={onToggleOpen}
            type="button"
          >
            {isOpen ? "접기" : "펼치기"}
          </button>
        </div>
      </div>

      {isOpen ? (
        <>
          <div className="specialLecturePeriodGrid">
            <label>
              기간 시작
              <input type="date" value={guide.periodStart} onChange={(event) => onUpdateGuide?.("periodStart", event.target.value)} />
            </label>
            <label>
              기간 종료
              <input type="date" value={guide.periodEnd} onChange={(event) => onUpdateGuide?.("periodEnd", event.target.value)} />
            </label>
          </div>
          <div className="specialLectureCalcStats">
            <div>
              <span>계산 회차</span>
              <strong>{calculatedSessionCount}회</strong>
            </div>
            <div>
              <span>총 시간</span>
              <strong>{formatSpecialLectureHours(calculatedTotalHours) || "-"}</strong>
            </div>
            <div>
              <span>계산 수강료</span>
              <strong>{formatCurrencyWon(calculatedTuition)}</strong>
            </div>
          </div>
          <div className="specialLectureWeekdaySummary">
            <span>요일별 회차</span>
            <strong>{calculatedWeekdaySummaryText}</strong>
          </div>
          <div className="specialLecturePriceGrid">
            <label>
              요금 기준
              <select value={guide.pricingMode} onChange={(event) => onUpdateGuide?.("pricingMode", event.target.value)}>
                <option value="perSession">회당 금액</option>
                <option value="perHour">시간당 금액</option>
              </select>
            </label>
            <label>
              회당 금액
              <input
                type="number"
                value={guide.pricePerSession}
                onChange={(event) => onUpdateGuide?.("pricePerSession", Number(event.target.value))}
              />
            </label>
            <label>
              시간당 금액
              <input
                type="number"
                value={guide.pricePerHour}
                onChange={(event) => onUpdateGuide?.("pricePerHour", Number(event.target.value))}
              />
            </label>
          </div>
          <div className="specialLectureRuleList">
            {normalizedScheduleRules.map((rule, index) => (
              <div className="specialLectureRuleRow" key={`${index}_${rule.startTime}_${rule.endTime}`}>
                <div className="specialLectureWeekdayToggles">
                  {specialLectureWeekdayOptions.map((day) => (
                    <button
                      className={rule.days.includes(day.value) ? "active" : ""}
                      key={day.value}
                      onClick={() => onToggleScheduleRuleDay?.(index, day.value)}
                      type="button"
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
                <label>
                  시작
                  <input type="time" value={rule.startTime} onChange={(event) => onUpdateScheduleRule?.(index, { startTime: event.target.value })} />
                </label>
                <label>
                  종료
                  <input type="time" value={rule.endTime} onChange={(event) => onUpdateScheduleRule?.(index, { endTime: event.target.value })} />
                </label>
                <button className="dangerSoftButton compact" onClick={() => onRemoveScheduleRule?.(index)} type="button">삭제</button>
              </div>
            ))}
          </div>
          <button className="softButton compact" onClick={onAddScheduleRule} type="button">요일/시간 추가</button>
          <SpecialLectureCalendarPreview guide={{ ...guide, sessions: generatedSessionsPreview }} />
        </>
      ) : (
        <div className="specialLectureCalculatorCollapsedSummary">
          <span>요일별 {calculatedWeekdaySummaryText}</span>
          <span>규칙 {normalizedScheduleRules.length}개</span>
          <span>달력과 요금 설정은 펼치면 보입니다.</span>
        </div>
      )}
    </section>
  );
}

export function SpecialLectureSessionPlanEditor({
  guide,
  isOpen = false,
  onAddSession,
  onRemoveSession,
  onToggleOpen,
  onUpdateSession,
  sessionPlanSummaryText = "",
  sessions = []
}) {
  if (!guide) {
    return null;
  }

  return (
    <section className="specialLectureSessionCards">
      <div className="sectionHeader slim">
        <div>
          <p className="eyebrow">SESSION PLAN</p>
          <h3>회차별 일정</h3>
          <span>카드 수정은 오른쪽 미리보기에 즉시 반영되고, 저장본/공개 링크에는 `안내문 저장` 후 반영됩니다.</span>
        </div>
        <div className="specialLectureSessionHeaderActions">
          <button
            aria-expanded={isOpen}
            className="softButton compact"
            onClick={onToggleOpen}
            type="button"
          >
            {isOpen ? "접기" : "펼치기"}
          </button>
          <button
            className="softButton compact"
            onClick={onAddSession}
            type="button"
          >
            회차 추가
          </button>
        </div>
      </div>
      {!isOpen ? (
        <div className="specialLectureSessionCollapsedSummary">
          <strong>{sessionPlanSummaryText}</strong>
          <span>세부 날짜/시간/주제는 펼치면 수정할 수 있습니다.</span>
        </div>
      ) : sessions.length ? (
        <div className="specialLectureSessionCardList">
          {sessions.map((session, index) => (
            <article className="specialLectureSessionCard" key={`${guide.specialLectureGuideId}_session_${index}`}>
              <div className="specialLectureSessionCardHeader">
                <strong>{index + 1}회차</strong>
                <span>{session.day || getWeekdayLabel(createDateFromKey(session.dateKey)?.getDay()) || "요일 없음"}</span>
                <button className="dangerSoftButton compact" onClick={() => onRemoveSession?.(index)} type="button">삭제</button>
              </div>
              <div className="specialLectureSessionCardGrid">
                <label>
                  날짜
                  <input
                    type="date"
                    value={session.dateKey || ""}
                    onChange={(event) => onUpdateSession?.(index, "dateKey", event.target.value)}
                  />
                </label>
                <label>
                  시작
                  <input
                    type="time"
                    value={session.startTime || ""}
                    onChange={(event) => onUpdateSession?.(index, "startTime", event.target.value)}
                  />
                </label>
                <label>
                  종료
                  <input
                    type="time"
                    value={session.endTime || ""}
                    onChange={(event) => onUpdateSession?.(index, "endTime", event.target.value)}
                  />
                </label>
                <label className="specialLectureSessionTopicInput">
                  회차 주제
                  <input
                    value={session.topic || ""}
                    onChange={(event) => onUpdateSession?.(index, "topic", event.target.value)}
                  />
                </label>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="specialLectureSessionEmpty">
          일정 계산을 펼쳐 요일/시간을 정한 뒤 `일정 계산 적용`을 누르거나, `회차 추가`로 직접 회차를 만드세요.
        </div>
      )}
    </section>
  );
}

export function SpecialLectureNoSelection() {
  return (
    <div className="specialLectureNoSelection">
      <strong>편집할 특강을 선택하세요.</strong>
      <p>진행/예정 특강이 없으면 `새 특강 만들기`로 새 방학 특강을 시작하거나, 지난/보관 특강을 펼쳐 기존 안내문을 복원할 수 있습니다.</p>
    </div>
  );
}

export function SpecialLectureGuideSelector({
  onSelectGuide,
  onToggleStoredGuides,
  primaryGuides = [],
  selectedGuideId = "",
  showStoredGuides = false,
  storedGuides = []
}) {
  function renderGuideCard(guide, extraClass = "") {
    const status = getSpecialLectureStatusBadge(guide);
    return (
      <button
        aria-pressed={guide.specialLectureGuideId === selectedGuideId}
        className={[
          guide.specialLectureGuideId === selectedGuideId ? "active" : "",
          extraClass
        ].filter(Boolean).join(" ")}
        key={guide.specialLectureGuideId}
        onClick={() => onSelectGuide?.(guide.specialLectureGuideId)}
        data-guide-id={guide.specialLectureGuideId}
        type="button"
      >
        <span className={`specialLectureStatusPill ${status.tone}`}>{status.label}</span>
        <strong>{guide.title}</strong>
        <span>{guide.days || "요일 미입력"} · {guide.time || "시간 미입력"}</span>
      </button>
    );
  }

  return (
    <div className="specialLectureSelectorStack">
      <div className="specialLectureSelectorHeader">
        <strong>진행/예정 특강</strong>
        <span>{primaryGuides.length}건</span>
      </div>
      {primaryGuides.length ? (
        <div className="specialLectureSelector">
          {primaryGuides.map((guide) => renderGuideCard(guide))}
        </div>
      ) : (
        <EmptyState className="specialLectureEmptyState">
          진행/예정 특강이 없습니다. 새 방학 특강을 만들거나 지난 특강을 펼쳐 복원하세요.
        </EmptyState>
      )}
      {storedGuides.length ? (
        <div className="specialLectureStoredPanel">
          <button className="specialLectureStoredToggle" onClick={onToggleStoredGuides} type="button">
            <span>지난/보관 특강</span>
            <strong>{storedGuides.length}건</strong>
            <em>{showStoredGuides ? "접기" : "펼치기"}</em>
          </button>
          {showStoredGuides ? (
            <div className="specialLectureSelector stored">
              {storedGuides.map((guide) => renderGuideCard(guide, "stored"))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
