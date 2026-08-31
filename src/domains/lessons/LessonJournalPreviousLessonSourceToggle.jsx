export function LessonJournalPreviousLessonSourceToggle({
  disabled = false,
  nearestLessonDateLabel = "",
  onSelect,
  regularLessonDateLabel = "",
  selectedMode = "nearest"
}) {
  return (
    <div className="journalPreviousLessonSourceToggle" role="group" aria-label="지난 숙제 참고 수업 선택">
      <button
        aria-pressed={selectedMode === "nearest"}
        className={selectedMode === "nearest" ? "ghostButton mini active" : "ghostButton mini"}
        disabled={disabled}
        onClick={() => onSelect("nearest")}
        type="button"
      >
        직전 {nearestLessonDateLabel}
      </button>
      <button
        aria-pressed={selectedMode === "regular"}
        className={selectedMode === "regular" ? "ghostButton mini active" : "ghostButton mini"}
        disabled={disabled}
        onClick={() => onSelect("regular")}
        type="button"
      >
        정규 {regularLessonDateLabel}
      </button>
    </div>
  );
}
