import { FilterBar } from "../../shared/components/FilterBar.jsx";
import { ListCard } from "../../shared/components/ListCard.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { SearchField } from "../../shared/components/SearchField.jsx";
import { SelectionToolbar } from "../../shared/components/SelectionToolbar.jsx";
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";

const noticeRecipientModes = [
  { id: "selected", label: "선택" },
  { id: "all", label: "전체" },
  { id: "parent", label: "학부모" },
  { id: "student", label: "학생" }
];

const noticeAudienceLabels = {
  parent: "학부모",
  student: "학생"
};

export function NotificationRecipientPanel({
  classFilter,
  classTemplates,
  getAudiencePhone,
  normalizePhoneNumber,
  noticeRecipientCount,
  noticeRecipientMode,
  noticeWithdrawnClassFilterId,
  onClassFilterChange,
  onClearSelectedStudents,
  onNoticeRecipientModeChange,
  onSearchTextChange,
  onSelectAllVisibleStudents,
  onToggleStudentSelection,
  parentRecipientCount,
  searchText,
  selectedStudentIds,
  studentRecipientCount,
  targetAudiences,
  targetStudentCount,
  visibleStudents,
  withdrawnStudentCount
}) {
  return (
    <div className="noticeTargetPanel">
      <WorkspaceTabs label="알림 수신 대상 범위" variant="secondary">
        {noticeRecipientModes.map((mode) => (
          <button
            aria-selected={noticeRecipientMode === mode.id}
            className={noticeRecipientMode === mode.id ? "active" : ""}
            key={mode.id}
            onClick={() => onNoticeRecipientModeChange(mode.id)}
            role="tab"
            type="button"
          >
            <strong>{mode.label}</strong>
          </button>
        ))}
      </WorkspaceTabs>
      <FilterBar className="noticeFilterGrid" label="알림 대상 반과 학생 검색">
        <label className="filterBarField">
          <span>반</span>
          <select value={classFilter} onChange={(event) => onClassFilterChange(event.target.value)}>
            <option value="all">전체 반</option>
            {classTemplates.map((template) => (
              <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
            ))}
            <option value={noticeWithdrawnClassFilterId}>퇴원학생반 ({withdrawnStudentCount}명)</option>
          </select>
        </label>
        <SearchField
          className="filterBarField"
          label="학생 검색"
          onChange={onSearchTextChange}
          placeholder="이름, 학교, 전화번호"
          result={`${visibleStudents.length}명`}
          value={searchText}
        />
      </FilterBar>

      <div className="noticeTargetSummary">
        <MetricCard density="compact" hint="현재 선택" label="대상 학생" value={`${targetStudentCount}명`} />
        <MetricCard density="compact" hint="학부모 수신" label="학부모" value={`${parentRecipientCount}건`} />
        <MetricCard density="compact" hint="학생 수신" label="학생" value={`${studentRecipientCount}건`} />
      </div>

      <div aria-label="알림 대상 학생 선택 목록" className="noticeStudentPicker" role="region" tabIndex={0}>
        <SelectionToolbar
          actions={(
            <>
            <button className="softButton compact" onClick={onSelectAllVisibleStudents} type="button">보이는 학생 전체</button>
            <button className="softButton compact subtle" onClick={onClearSelectedStudents} type="button">선택 해제</button>
            </>
          )}
          className="noticePickerActions noticeListHeader"
          description={`수신 ${noticeRecipientCount}건`}
          label="학생 선택"
          selectedCount={targetStudentCount}
          totalCount={visibleStudents.length}
        />
        {visibleStudents.length ? (
          visibleStudents.map((student) => {
            const checked = selectedStudentIds.includes(student.studentId);
            return (
              <ListCard
                active={checked}
                as="label"
                className="noticeStudentOption selectableListCard"
                density="compact"
                key={student.studentId}
              >
                <input
                  aria-label={`${student.name} 알림 대상 선택`}
                  checked={checked}
                  onChange={() => onToggleStudentSelection(student.studentId)}
                  type="checkbox"
                />
                <span>
                  <strong>{student.name}</strong>
                  <small>
                    {[
                      student.grade,
                      student.schoolName,
                      classFilter === noticeWithdrawnClassFilterId
                        ? `퇴원${student.withdrawnAt ? ` ${String(student.withdrawnAt).slice(0, 10)}` : ""}`
                        : ""
                    ].filter(Boolean).join(" · ") || "기본 정보 없음"}
                  </small>
                </span>
                <span className="noticeRecipientBadges">
                  {targetAudiences.map((audience) => {
                    const phone = getAudiencePhone(student, audience);
                    const hasPhone = Boolean(normalizePhoneNumber(phone));
                    return (
                      <small className={hasPhone ? "available" : "missing"} key={audience}>
                        {noticeAudienceLabels[audience]} {hasPhone ? "등록" : "번호 없음"}
                      </small>
                    );
                  })}
                </span>
              </ListCard>
            );
          })
        ) : (
          <div className="noticeStudentEmpty">조건에 맞는 학생이 없습니다.</div>
        )}
      </div>
    </div>
  );
}
