import React from "react";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { SearchField } from "../../shared/components/SearchField.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";

export function LessonModalStudentPicker({
  activeStudentCount,
  filteredStudents,
  groupedStudents,
  initialStudentCount,
  isClosureConversion,
  isRosterLocked,
  onDeselectGroup,
  onSearchChange,
  onSelectGroup,
  onSelectVisible,
  onToggleStudent,
  search,
  selectedStudentIds
}) {
  return (
    <div className="modalSection lessonModalSection">
      <SectionHeader
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
        <button
          className="softButton"
          disabled={isRosterLocked}
          onClick={onSelectVisible}
          type="button"
        >
          보이는 학생 선택
        </button>
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
              <button
                className="softButton mini"
                disabled={isRosterLocked}
                onClick={() => onSelectGroup(group.students)}
                type="button"
              >
                전체 선택
              </button>
              <button
                className="softButton mini"
                disabled={isRosterLocked}
                onClick={() => onDeselectGroup(group.students)}
                type="button"
              >
                전체 해제
              </button>
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
