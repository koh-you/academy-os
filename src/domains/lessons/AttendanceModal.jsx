import React, { useState } from "react";
import { Modal } from "../../shared/components/Modal.jsx";
import {
  clearAttendanceFields,
  formatKoreaTimeFromIso,
  formatShortDateLabel,
  getAttendanceDateMismatch
} from "./attendance.js";
import {
  calculateLateMinutesFromLessonTime,
  getManualAttendanceInitialStatus,
  hasAttendanceModalChanges,
  hasTabletAttendanceRecord
} from "./attendanceModalModel.js";

export function AttendanceModal({ item, lateGraceMinutes = 5, onClose, onSave }) {
  const { lesson, record, student } = item;
  const attendanceDateMismatch = getAttendanceDateMismatch(record, lesson);
  const editableRecord = attendanceDateMismatch ? clearAttendanceFields(record) : record;
  const [attendanceStatus, setAttendanceStatus] = useState(getManualAttendanceInitialStatus(editableRecord));
  const [checkInTime, setCheckInTime] = useState(editableRecord.checkInTime || formatKoreaTimeFromIso(editableRecord.checkInAt) || "");
  const [checkOutTime, setCheckOutTime] = useState(editableRecord.checkOutTime || formatKoreaTimeFromIso(editableRecord.checkOutAt) || "");
  const [attendanceReason, setAttendanceReason] = useState(editableRecord.attendanceReason ?? "");
  const [pendingSave, setPendingSave] = useState(null);
  const [confirmStep, setConfirmStep] = useState("");
  const [saveError, setSaveError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const calculatedLateMinutes = attendanceStatus === "late"
    ? calculateLateMinutesFromLessonTime(lesson, checkInTime, lateGraceMinutes)
    : "";
  const effectiveLateMinutes = attendanceStatus !== "late"
    ? ""
    : calculatedLateMinutes !== ""
      ? calculatedLateMinutes
      : editableRecord.lateMinutes ?? "";
  const isWithinLateGrace = attendanceStatus === "late" && effectiveLateMinutes !== "" && Number(effectiveLateMinutes) <= 0;
  const effectiveAttendanceStatus = isWithinLateGrace ? "present" : attendanceStatus;
  const values = {
    attendanceStatus: effectiveAttendanceStatus,
    lateMinutes: effectiveAttendanceStatus === "late" ? effectiveLateMinutes : "",
    checkInTime,
    checkOutTime,
    attendanceReason
  };
  const hasKioskRecord = !attendanceDateMismatch && hasTabletAttendanceRecord(record);
  const hasChanged = hasAttendanceModalChanges(editableRecord, values);

  function requestSave() {
    setSaveError("");
    const nextSave = { values, options: {} };
    if (hasKioskRecord && hasChanged) {
      setPendingSave(nextSave);
      setConfirmStep("change");
      return;
    }
    setPendingSave(nextSave);
    setConfirmStep("saveMode");
  }

  function confirmManualChange() {
    setConfirmStep("saveMode");
  }

  async function finishConfirmedSave(sendAlimtalk) {
    if (isSaving) return;
    const nextSave = pendingSave ?? { values, options: {} };
    setIsSaving(true);
    setSaveError("");
    try {
      const saved = await onSave(lesson, student, nextSave.values, { ...nextSave.options, sendAlimtalk });
      if (!saved) {
        setSaveError("출결 저장에 실패했습니다. 잠시 후 다시 눌러 주세요.");
      }
    } catch (error) {
      setSaveError(
        String(error.message || "").startsWith("결석 출결은 저장됐지만")
          ? error.message
          : `출결 저장에 실패했습니다. ${error.message}`
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <Modal title={`${student.name} 출결 체크`} subtitle="지각/결석이면 시간과 사유를 남깁니다." onClose={onClose}>
      <div className="typeTabs">
        {[
          ["present", "등원"],
          ["late", "지각"],
          ["checkout", "하원"],
          ["absent", "결석"]
        ].map(([value, label]) => (
          <button className={attendanceStatus === value ? "active" : ""} key={value} onClick={() => setAttendanceStatus(value)} type="button">
            {label}
          </button>
        ))}
      </div>
      <div className="fieldGrid">
        <label>
          등원 시각
          <input
            type="time"
            value={checkInTime}
            onChange={(event) => setCheckInTime(event.target.value)}
          />
          <small>출결을 못 찍은 학생은 실제 등원 시각을 입력하세요. 지각 분은 수업 시작 기준으로 자동 계산됩니다.</small>
        </label>
        <label>
          하원 시각
          <input
            type="time"
            value={checkOutTime}
            onChange={(event) => setCheckOutTime(event.target.value)}
          />
          <small>하원 처리를 못 찍은 학생은 실제 하원 시각을 입력하세요.</small>
        </label>
        <label>
          사유
          <input value={attendanceReason} onChange={(event) => setAttendanceReason(event.target.value)} placeholder="예: 학교 동아리" />
        </label>
      </div>
      {isWithinLateGrace ? (
        <div className="attendanceSourceNotice">
          지각 유예시간 {lateGraceMinutes}분 안의 등원이라 저장 시 정상 등원으로 처리됩니다.
        </div>
      ) : null}
      {hasKioskRecord ? (
        <div className="attendanceSourceNotice">
          태블릿에서 기록된 출결입니다. 수동으로 바꾸면 확인 후 저장됩니다.
        </div>
      ) : null}
      {attendanceDateMismatch ? (
        <div className="attendanceSourceNotice warning">
          저장된 출결 날짜가 수업 날짜와 다릅니다. 출결 {attendanceDateMismatch.mismatchedDates.map(formatShortDateLabel).join(", ")} · 수업 {formatShortDateLabel(attendanceDateMismatch.lessonDate)}. 저장하면 이 수업 날짜 기준으로 새 출결을 기록합니다.
        </div>
      ) : null}
      {confirmStep === "change" ? (
        <div className="attendanceConfirmPanel">
          <strong>태블릿 출결 기록을 변경하시겠습니까?</strong>
          <p>실수 방지를 위해 한 번 더 확인합니다. 저장하면 현재 화면의 출결 상태와 사유로 덮어씁니다.</p>
          <div className="attendanceConfirmActions">
            <button className="softButton" onClick={() => setConfirmStep("")} type="button">
              취소
            </button>
            <button className="primaryButton" onClick={confirmManualChange} type="button">
              변경하기
            </button>
          </div>
        </div>
      ) : null}
      {confirmStep === "saveMode" ? (
        <div className="attendanceConfirmPanel">
          <strong>출결을 어떻게 저장할까요?</strong>
          <p>
            {values.attendanceStatus === "absent"
              ? "결석 기록만 저장하거나, 저장 후 학부모 결석 알림톡을 다음 예약 가능한 정각에 예약할 수 있습니다."
              : "출결 기록만 저장하거나, 저장 후 학부모에게 출결 알림톡까지 즉시 발송할 수 있습니다."}
          </p>
          {saveError ? <p className="apiErrorBox">{saveError}</p> : null}
          <div className="attendanceConfirmActions">
            <button className="softButton" disabled={isSaving} onClick={() => finishConfirmedSave(false)} type="button">
              {isSaving ? "저장 중..." : "저장만"}
            </button>
            <button className="primaryButton" disabled={isSaving} onClick={() => finishConfirmedSave(true)} type="button">
              {isSaving
                ? "저장 중..."
                : values.attendanceStatus === "absent"
                  ? "저장 후 다음 정각 알림톡 예약"
                  : "저장 후 출결 알림톡 즉시 발송"}
            </button>
          </div>
        </div>
      ) : null}
      {!confirmStep ? (
        <div className="attendanceModalActions">
          <button className="primaryButton full" onClick={() => requestSave()} type="button">
            출결 저장
          </button>
        </div>
      ) : null}
    </Modal>
  );
}
