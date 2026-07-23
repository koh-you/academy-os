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
      <div className="noticeModeTabs compact">
        {noticeRecipientModes.map((mode) => (
          <button
            className={noticeRecipientMode === mode.id ? "active" : ""}
            key={mode.id}
            onClick={() => onNoticeRecipientModeChange(mode.id)}
            type="button"
          >
            <strong>{mode.label}</strong>
          </button>
        ))}
      </div>
      <div className="noticeFilterGrid">
        <label>
          반
          <select value={classFilter} onChange={(event) => onClassFilterChange(event.target.value)}>
            <option value="all">전체 반</option>
            {classTemplates.map((template) => (
              <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
            ))}
            <option value={noticeWithdrawnClassFilterId}>퇴원학생반 ({withdrawnStudentCount}명)</option>
          </select>
        </label>
        <label>
          학생 검색
          <input value={searchText} onChange={(event) => onSearchTextChange(event.target.value)} placeholder="이름, 학교, 전화번호" />
        </label>
      </div>

      <div className="noticeTargetSummary">
        <div>
          <span>대상 학생</span>
          <strong>{targetStudentCount}명</strong>
        </div>
        <div>
          <span>학부모</span>
          <strong>{parentRecipientCount}건</strong>
        </div>
        <div>
          <span>학생</span>
          <strong>{studentRecipientCount}건</strong>
        </div>
      </div>

      <div className="noticeStudentPicker">
        <div className="noticePickerActions noticeListHeader">
          <div>
            <strong>학생 선택</strong>
            <span>선택한 학생 {targetStudentCount}명 · 수신 {noticeRecipientCount}건</span>
          </div>
          <div>
            <button className="softButton compact" onClick={onSelectAllVisibleStudents} type="button">보이는 학생 전체</button>
            <button className="softButton compact subtle" onClick={onClearSelectedStudents} type="button">선택 해제</button>
          </div>
        </div>
        {visibleStudents.length ? (
          visibleStudents.map((student) => {
            const checked = selectedStudentIds.includes(student.studentId);
            return (
              <label className={checked ? "noticeStudentOption active" : "noticeStudentOption"} key={student.studentId}>
                <input checked={checked} onChange={() => onToggleStudentSelection(student.studentId)} type="checkbox" />
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
              </label>
            );
          })
        ) : (
          <div className="noticeStudentEmpty">조건에 맞는 학생이 없습니다.</div>
        )}
      </div>
    </div>
  );
}
