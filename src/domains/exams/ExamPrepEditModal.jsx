import {
  getDateRangeField,
  updateDateRangeField
} from "../schoolCalendar/schoolCalendarUtils.js";
import { AutosaveRiskNotice } from "../../shared/components/AutosaveRiskNotice.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { Modal } from "../../shared/components/Modal.jsx";

export function ExamPrepEditModal({
  autosaveRisk = {},
  getEditableMathExamEntries,
  onAddMathExamEntry,
  onClose,
  onRemoveMathExamEntry,
  onUpdateMathExamEntry,
  onUpdateRow,
  row,
  saveState = "idle"
}) {
  const specialNote = row.specialNote ?? row.memo ?? "";

  return (
    <Modal
      className="examPrepEditModal"
      title={`${row.schoolName || "학교 미입력"} 시험정보 수정`}
      subtitle={[row.grade, row.subject, row.publisher].filter(Boolean).join(" · ") || "시험관리 상세 입력"}
      onClose={onClose}
    >
      <div className="examPrepEditForm">
        <AutosaveRiskNotice className="autosaveRiskNoticeInline" {...autosaveRisk} />
        <section className="examPrepEditSection">
          <h2>기본 정보</h2>
          <div className="examPrepEditGrid">
            <label>
              <span>학교명</span>
              <input value={row.schoolName ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "schoolName", event.target.value)} />
            </label>
            <label>
              <span>학년</span>
              <input value={row.grade ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "grade", event.target.value)} />
            </label>
            <label>
              <span>과목</span>
              <input value={row.subject ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "subject", event.target.value)} />
            </label>
            <label>
              <span>출판사</span>
              <input value={row.publisher ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "publisher", event.target.value)} />
            </label>
          </div>
        </section>

        <section className="examPrepEditSection">
          <h2>시험 일정</h2>
          <div className="examPrepDateGrid examDateRangeInputs">
            <label>
              <span>시험기간 시작일</span>
              <input
                type="date"
                value={getDateRangeField(row.examPeriod, "date")}
                onChange={(event) =>
                  onUpdateRow(row.examPrepId, "examPeriod", updateDateRangeField(row.examPeriod, "date", event.target.value))
                }
              />
            </label>
            <label>
              <span>시험기간 종료일</span>
              <input
                type="date"
                value={getDateRangeField(row.examPeriod, "endDate")}
                onChange={(event) =>
                  onUpdateRow(row.examPrepId, "examPeriod", updateDateRangeField(row.examPeriod, "endDate", event.target.value))
                }
              />
            </label>
          </div>
          <div className="mathExamEntryEditor modalMathExamEntryEditor">
            {getEditableMathExamEntries(row).map((entry, entryIndex) => (
              <div className="mathExamEntryRow" key={entry.id || entryIndex}>
                <label>
                  <span>수학시험 날짜</span>
                  <input
                    type="date"
                    value={entry.date ?? ""}
                    onChange={(event) => onUpdateMathExamEntry(row, entryIndex, "date", event.target.value)}
                  />
                </label>
                <label>
                  <span>학년</span>
                  <input
                    value={entry.grade ?? ""}
                    placeholder="예: 고3"
                    onChange={(event) => onUpdateMathExamEntry(row, entryIndex, "grade", event.target.value)}
                  />
                </label>
                <label>
                  <span>과목</span>
                  <input
                    value={entry.subject ?? ""}
                    placeholder="예: 미적분"
                    onChange={(event) => onUpdateMathExamEntry(row, entryIndex, "subject", event.target.value)}
                  />
                </label>
                <label>
                  <span>표시명</span>
                  <input
                    value={entry.label ?? ""}
                    placeholder="표시명 선택"
                    onChange={(event) => onUpdateMathExamEntry(row, entryIndex, "label", event.target.value)}
                  />
                </label>
                <button className="iconTinyButton" type="button" onClick={() => onRemoveMathExamEntry(row, entryIndex)}>
                  삭제
                </button>
              </div>
            ))}
            <button className="tinySoftButton" type="button" onClick={() => onAddMathExamEntry(row)}>
              + 수학시험 추가
            </button>
          </div>
        </section>

        <section className="examPrepEditSection">
          <h2>시험 내용</h2>
          <div className="examPrepTextareaGrid">
            <label>
              <span>특이사항</span>
              <textarea
                value={specialNote}
                onChange={(event) => onUpdateRow(row.examPrepId, "specialNote", event.target.value)}
                placeholder="학교별 특이사항"
              />
            </label>
            <label>
              <span>시험 범위</span>
              <textarea value={row.scope ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "scope", event.target.value)} />
            </label>
            <label>
              <span>부교재</span>
              <textarea value={row.subTextbook ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "subTextbook", event.target.value)} />
            </label>
          </div>
        </section>

        <div className="modalActionBar">
          {saveState !== "idle" ? <InlineSaveStatus label="시험정보" saveState={saveState} /> : null}
          <button className="primaryButton" onClick={onClose} type="button">닫기</button>
        </div>
      </div>
    </Modal>
  );
}
