import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { getSpecialLectureStatusBadge } from "./specialLectureGuideUtils.js";

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
