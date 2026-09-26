import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { HelpTip } from "../../shared/components/HelpTip.jsx";
import { SearchField } from "../../shared/components/SearchField.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";

export function LessonModalStudentPicker({
  activeStudentCount,
  classTemplateId,
  filteredStudents,
  groupedStudents,
  initialStudentCount,
  isClosureConversion,
  isRosterLocked,
  onClassTemplateChange,
  onClearAll,
  onSearchChange,
  onSelectAll,
  onSelectVisible,
  onToggleStudent,
  search,
  selectedStudentIds,
  templates
}) {
  // 2026-09-26 · 「전체 선택/전체 해제」는 학년 그룹마다 두지 않고 이 헤더의 토글 하나로 모은다(docs/ui-row-actions.md R1).
  const isEverySelected = activeStudentCount > 0 && selectedStudentIds.length >= activeStudentCount;

  return (
    <div className="modalSection lessonModalSection lessonStudentPicker">
      <SectionHeader
        actions={(
          <div className="lessonRosterHeaderActions">
            {/* 2026-09-26 · 옛 「큰 수업 틀」 select 를 여기로 옮겼다. 고르면 수업명·시간·색상과 그 반 명단이 한 번에 채워진다. */}
            <label className="lessonRosterTemplatePicker">
              <span>반 불러오기</span>
              <select
                aria-label="반 불러오기"
                disabled={isRosterLocked}
                value={classTemplateId}
                onChange={(event) => onClassTemplateChange(event.target.value)}
              >
                <option value="">직접 입력 일정</option>
                {templates.map((template) => (
                  <option
                    key={template.classTemplateId}
                    value={template.classTemplateId}
                  >
                    {template.name}
                  </option>
                ))}
              </select>
            </label>
            <HelpTip
              label="반 불러오기"
              text="반을 고르면 수업명·시작/종료 시간·달력 색상과 그 반에 배정된 학생 명단이 한 번에 채워집니다. 채워진 뒤에도 학생은 하나씩 켜고 끌 수 있습니다."
            />
            <button
              className="softButton compact lessonRosterSelectAllButton"
              disabled={isRosterLocked}
              onClick={isEverySelected ? onClearAll : onSelectAll}
              type="button"
            >
              {isEverySelected ? "전체 해제" : "전체 선택"}
            </button>
          </div>
        )}
        meta={<span className="muted">선택 {selectedStudentIds.length}명</span>}
        title="포함 학생"
        titleAs="strong"
      />
      <div className="lessonStudentSearchRow">
        <SearchField
          disabled={isRosterLocked}
          label="포함 학생 검색"
          onChange={onSearchChange}
          placeholder="학생 이름 또는 반으로 검색"
          result={`${filteredStudents.length}명`}
          value={search}
        />
        {/* 2026-09-26 · 검색 중일 때만 렌더한다. 검색어가 없으면 이 버튼은 헤더의 「전체 선택」과 같은 일을 한다. */}
        {search.trim() ? (
          <button
            className="softButton"
            disabled={isRosterLocked}
            onClick={onSelectVisible}
            type="button"
          >
            검색 결과 {filteredStudents.length}명만 선택
          </button>
        ) : null}
      </div>
      <small className="muted">
        {isClosureConversion
          ? `휴강 전환 중에는 기존 명단 ${initialStudentCount}명을 고정합니다.`
          : `전체 ${activeStudentCount}명`}
      </small>
      <div className="lessonStudentGroups">
        {groupedStudents.length === 0 ? (
          <EmptyState
            action={search.trim() ? (
              <button
                className="softButton compact"
                disabled={isRosterLocked}
                onClick={() => onSearchChange("")}
                type="button"
              >
                검색어 지우기
              </button>
            ) : null}
            className="lessonStudentSearchEmpty"
            description={search.trim()
              ? "학생 이름·학년·학교를 다시 확인하세요."
              : "학생관리에서 재원생을 등록하면 명단에 표시됩니다."}
            title={search.trim() ? "검색 결과가 없습니다." : "선택 가능한 학생이 없습니다."}
          />
        ) : groupedStudents.map((group) => (
          <div className="lessonStudentGroup" key={group.grade}>
            <div>
              <strong>{group.grade}</strong>
              <span className="muted">{group.students.length}명</span>
            </div>
            <div className="studentChips">
              {group.students.map((student) => {
                const isSelected = selectedStudentIds.includes(student.studentId);
                return (
                  <button
                    className={isSelected ? "lessonStudentChip selected" : "lessonStudentChip"}
                    disabled={isRosterLocked}
                    key={student.studentId}
                    onClick={() => onToggleStudent(student.studentId, isSelected)}
                    type="button"
                  >
                    {student.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
