import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { SelectionToolbar } from "../../shared/components/SelectionToolbar.jsx";

function formatShortDate(date = "") {
  return date ? date.slice(5).replace("-", ".") : "날짜 미입력";
}

export function StudentWithdrawnList({
  dirtyStudentIds,
  getSingleSelectedWithdrawnStudent,
  getStudentClassName,
  openBatchPermanentDeleteModal,
  openHandoverModal,
  openPermanentDeleteModal,
  restoreStudent,
  saveSelectedWithdrawnStudents,
  selectAllVisibleWithdrawnStudents,
  selectedStudentId,
  selectedWithdrawnStudentIds,
  selectedWithdrawnStudents,
  setSelectedStudentId,
  setSelectedWithdrawnStudentIds,
  setWithdrawnStudentSort,
  toggleWithdrawnStudentSelection,
  updateStudentField,
  visibleStudents,
  withdrawalReasonOptions,
  withdrawnStudentSort
}) {
  return (
    <>
          <div className="studentListToolbar withdrawnStudentSort">
            <label>
              정렬
              <select aria-label="퇴원생 정렬" onChange={(event) => setWithdrawnStudentSort(event.target.value)} value={withdrawnStudentSort}>
                <option value="name">이름순</option>
                <option value="withdrawn_date">퇴원일순 (최근)</option>
              </select>
            </label>
          </div>
          <DataTableShell className="studentListTable" label="퇴원생 목록">
          <div className="studentListRow studentListHead withdrawnStudentRow">
            <span>선택</span>
            <span>이름</span>
            <span>반</span>
            <span>학년</span>
            <span>학교</span>
            <span>학생전화번호</span>
            <span>학부모전화번호</span>
            <span>출생연도</span>
            <span>퇴원일</span>
            <span>퇴원 사유</span>
            <span>코멘트</span>
          </div>
          {visibleStudents.map((student, index) => {
            const isDirty = dirtyStudentIds.has(student.studentId);
            return (
              <div className={["studentListRow", "withdrawnStudentRow", isDirty ? "dirtyStudentRow" : ""].filter(Boolean).join(" ")} key={student.studentId}>
                <label className="withdrawnStudentSelect"><input checked={selectedWithdrawnStudentIds.has(student.studentId)} onChange={() => toggleWithdrawnStudentSelection(student.studentId)} type="checkbox" /></label>
                <button
                  className={selectedStudentId === student.studentId ? "studentNameButton active" : "studentNameButton"}
                  onClick={() => setSelectedStudentId(student.studentId)}
                  type="button"
                >
                  <span className="studentInitial">{student.name?.[0] ?? "학"}</span>
                  <strong>{student.name}</strong>
                </button>
                <span>{getStudentClassName(student)}</span>
                <span className="gradeBadge">{student.grade || "-"}</span>
                <span>{student.schoolName || "-"}</span>
                <span className="monoCell">{student.studentPhone || "-"}</span>
                <span className="monoCell">{student.parentPhone || "-"}</span>
                <span>{student.birthYear ? `${student.birthYear}년` : "-"}</span>
                <span>{student.withdrawnAt ? formatShortDate(String(student.withdrawnAt).slice(0, 10)) : "-"}</span>
                <select
                  aria-label={`${student.name} 퇴원 사유`}
                  className="withdrawalReasonSelect"
                  value={student.withdrawalReason || "other"}
                  onChange={(event) => updateStudentField(student.studentId, "withdrawalReason", event.target.value)}
                >
                  {withdrawalReasonOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <input
                  aria-label={`${student.name} 퇴원 코멘트`}
                  className="editableTextCell withdrawalCommentInput"
                  value={student.withdrawalComment ?? ""}
                  onChange={(event) => updateStudentField(student.studentId, "withdrawalComment", event.target.value)}
                  placeholder="퇴원 관련 코멘트"
                />
              </div>
            );
          })}
          {visibleStudents.length === 0 ? (
            <EmptyState className="emptyState studentListEmpty" title="퇴원생이 없습니다." />
          ) : null}
          </DataTableShell>
          <SelectionToolbar
            actions={(
              <>
                <button className="softButton compact" onClick={selectAllVisibleWithdrawnStudents} type="button">전체 선택</button>
                <button className="softButton compact" onClick={() => setSelectedWithdrawnStudentIds(new Set())} type="button">선택 해제</button>
                <button className="primaryButton compact" disabled={!selectedWithdrawnStudents.some((student) => dirtyStudentIds.has(student.studentId))} onClick={saveSelectedWithdrawnStudents} type="button">선택 저장</button>
                <button className="studentRestoreButton" disabled={selectedWithdrawnStudents.length !== 1} onClick={() => { const student = getSingleSelectedWithdrawnStudent("퇴원 취소"); if (student) restoreStudent(student); }} type="button">퇴원 취소</button>
                <button className="softButton compact" disabled={selectedWithdrawnStudents.length !== 1} onClick={() => { const student = getSingleSelectedWithdrawnStudent("인수인계서 PDF"); if (student) openHandoverModal(student); }} type="button">인수인계서 PDF</button>
              </>
            )}
            className="withdrawnStudentBulkActions"
            dangerActions={(
              <button className="studentPermanentDeleteButton" disabled={selectedWithdrawnStudents.length === 0} onClick={() => {
                if (selectedWithdrawnStudents.length === 1) openPermanentDeleteModal(selectedWithdrawnStudents[0]);
                else openBatchPermanentDeleteModal(selectedWithdrawnStudents);
              }} type="button">영구 삭제</button>
            )}
            label="퇴원생 선택"
            selectedCount={selectedWithdrawnStudents.length}
            totalCount={visibleStudents.length}
          />
    </>
  );
}
