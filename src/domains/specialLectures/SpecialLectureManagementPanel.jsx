import { EmptyState } from "../../shared/components/EmptyState.jsx";
import {
  getSpecialLectureStatusBadge,
  isSpecialLectureArchived,
  specialLectureSeasonOptions
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
        className={[
          guide.specialLectureGuideId === selectedGuideId ? "active" : "",
          extraClass
        ].filter(Boolean).join(" ")}
        key={guide.specialLectureGuideId}
        onClick={() => onSelectGuide?.(guide.specialLectureGuideId)}
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
