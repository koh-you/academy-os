import { useState } from "react";
import { academyBrandName } from "../../app/appConfig.js";
import { Modal, ModalFooter } from "../../shared/components/Modal.jsx";
import { createAttendanceKioskDisplayModel } from "./attendanceKioskModel.js";

export function AttendanceKiosk({
  isLoading = false,
  isStandalone = false,
  lessons = [],
  records = [],
  students,
  formatLessonDisplayName,
  onAttendanceCheck,
  onAttendancePreview,
  onBack
}) {
  const [pin, setPin] = useState("");
  const [pendingPreview, setPendingPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function runAttendancePreview(nextPin) {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const nextPreview = await onAttendancePreview(nextPin);
      if (nextPreview.ok) {
        setPendingPreview({ ...nextPreview, pin: nextPin });
        setResult(null);
        setPin("");
      } else {
        setResult(nextPreview);
      }
    } catch (error) {
      setResult({ ok: false, message: error.message || "출결 확인에 실패했습니다." });
    } finally {
      setIsSubmitting(false);
    }
  }

  async function selectPendingPreviewLesson(candidate) {
    const lessonId = candidate?.lesson?.lessonId || candidate?.attendanceLesson?.lessonId;
    if (!pendingPreview?.pin || !lessonId || isSubmitting) return;
    setIsSubmitting(true);
    try {
      const nextPreview = await onAttendancePreview(pendingPreview.pin, {
        lessonId,
        studentId: pendingPreview.student?.studentId
      });
      if (nextPreview.ok) {
        setPendingPreview({ ...nextPreview, pin: pendingPreview.pin });
        setResult(null);
      } else {
        setResult(nextPreview);
        setPendingPreview(null);
      }
    } catch (error) {
      setResult({ ok: false, message: error.message || "수업 선택 확인에 실패했습니다." });
      setPendingPreview(null);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function confirmAttendanceCheck() {
    if (!pendingPreview || isSubmitting) return;
    if (pendingPreview.mode === "completed") {
      setPendingPreview(null);
      return;
    }
    setIsSubmitting(true);
    try {
      const nextResult = await onAttendanceCheck(pendingPreview.pin, {
        action: pendingPreview.action,
        attendanceStatus: pendingPreview.record?.attendanceStatus,
        checkInTime: pendingPreview.record?.checkInTime,
        checkOutTime: pendingPreview.record?.checkOutTime,
        lateMinutes: pendingPreview.record?.lateMinutes,
        lessonId: pendingPreview.lesson?.lessonId,
        studentId: pendingPreview.student?.studentId
      });
      setPendingPreview(null);
      if (!nextResult?.ok) {
        setResult(nextResult);
      } else {
        setResult(null);
      }
    } catch (error) {
      setResult({ ok: false, message: error.message || "출결 저장에 실패했습니다." });
      setPendingPreview(null);
    } finally {
      setIsSubmitting(false);
    }
  }

  function submitPin(event) {
    event?.preventDefault();
    if (isLoading || isSubmitting || pendingPreview) return;
    runAttendancePreview(pin);
  }

  function pressKey(value) {
    if (isLoading || isSubmitting || pendingPreview) return;
    if (value === "backspace") {
      setPin((current) => current.slice(0, -1));
      return;
    }
    if (value === "clear") {
      setPin("");
      return;
    }
    setPin((current) => `${current}${value}`.replaceAll(/\D/g, "").slice(0, 4));
  }

  const {
    previewActionLabel,
    previewDetail,
    previewLessonCandidates,
    previewRequiresLessonSelection,
    resultDetail,
    resultTitle
  } = createAttendanceKioskDisplayModel({
    formatLessonDisplayName,
    pendingPreview,
    result
  });

  return (
    <section className={isStandalone ? "attendanceKioskPage standalone" : "attendanceKioskPage"}>
      <div className="attendanceKioskCard">
        <div className="attendanceKioskHeader">
          <div>
            <p className="eyebrow">{academyBrandName} ATTENDANCE</p>
            <h1>출결 체크</h1>
            <p className="muted">{isLoading ? "출결 데이터를 불러오는 중입니다." : "학생 휴대폰 번호 뒤 4자리를 입력하세요."}</p>
          </div>
          {onBack ? <button aria-label="출결 화면 닫기" className="iconButton" onClick={onBack} type="button">×</button> : null}
        </div>
        <form className="attendancePinForm" onSubmit={submitPin}>
          <input
            aria-label="학생 휴대폰 번호 뒤 4자리"
            autoFocus
            inputMode="numeric"
            maxLength={4}
            disabled={isLoading || isSubmitting || Boolean(pendingPreview)}
            value={pin}
            onChange={(event) => {
              setPin(event.target.value.replaceAll(/\D/g, "").slice(0, 4));
            }}
            placeholder={isLoading || isSubmitting ? "대기" : "뒤 4자리"}
          />
          <button className="primaryButton" disabled={isLoading || isSubmitting || Boolean(pendingPreview) || pin.length !== 4} type="submit">
            {isSubmitting ? "확인 중" : "확인"}
          </button>
        </form>

        <div className={isLoading || isSubmitting || pendingPreview ? "attendanceNumberPad disabled" : "attendanceNumberPad"} aria-label="출결 번호 입력 키패드">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((value) => (
            <button disabled={isLoading || isSubmitting || Boolean(pendingPreview)} key={value} onClick={() => pressKey(value)} type="button">{value}</button>
          ))}
          <button className="secondaryKey" disabled={isLoading || isSubmitting || Boolean(pendingPreview)} onClick={() => pressKey("clear")} type="button">지움</button>
          <button disabled={isLoading || isSubmitting || Boolean(pendingPreview)} onClick={() => pressKey("0")} type="button">0</button>
          <button aria-label="한 자리 지우기" className="secondaryKey" disabled={isLoading || isSubmitting || Boolean(pendingPreview)} onClick={() => pressKey("backspace")} type="button">⌫</button>
        </div>
      </div>

      {pendingPreview ? (
        <Modal
          className="attendanceResultModal"
          hideCloseButton
          subtitle={previewDetail}
          title="출결 확인"
        >
          <div className="attendanceResultContent">
            <strong>{previewActionLabel}</strong>
            {previewRequiresLessonSelection ? (
              <>
                <p>오늘 수업이 2개 이상입니다. 등원 처리할 수업을 선택하세요.</p>
                <div className="attendanceLessonChoiceGrid">
                  {previewLessonCandidates.map((candidate) => {
                    const lesson = candidate.attendanceLesson || candidate.lesson || {};
                    const statusText = candidate.hasCheckout
                      ? "하원 완료"
                      : candidate.hasArrival
                        ? "등원 기록 있음"
                        : candidate.isLatest
                          ? "오늘 마지막 수업"
                          : "등원 대상";
                    return (
                      <button
                        className={candidate.isLatest ? "attendanceLessonChoiceButton latest" : "attendanceLessonChoiceButton"}
                        disabled={isSubmitting}
                        key={candidate.lesson?.lessonId || candidate.attendanceLesson?.lessonId}
                        onClick={() => selectPendingPreviewLesson(candidate)}
                        type="button"
                      >
                        <strong>{formatLessonDisplayName(lesson) || "수업"}</strong>
                        <small>{statusText}</small>
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <div className="attendancePreviewSummary">
                  <span><small>학생</small><b>{pendingPreview.student?.name ?? "-"}</b></span>
                  <span><small>수업</small><b>{formatLessonDisplayName(pendingPreview.lesson) || "-"}</b></span>
                  <span><small>시간</small><b>{pendingPreview.checkedTime || "-"}</b></span>
                </div>
                <div className="attendanceConfirmActions single">
                  <button className="primaryButton" disabled={isSubmitting} onClick={confirmAttendanceCheck} type="button">
                    {isSubmitting ? "저장 중..." : "확인"}
                  </button>
                </div>
              </>
            )}
          </div>
        </Modal>
      ) : null}

      {result ? (
        <Modal
          className={result.ok ? "attendanceResultModal success" : "attendanceResultModal error"}
          onClose={() => setResult(null)}
          subtitle={resultDetail}
          title={resultTitle}
        >
          <div className="attendanceResultContent">
            <strong>{result.message}</strong>
            <p>번호를 확인한 뒤 다시 입력해 주세요.</p>
            <ModalFooter align="center">
              <button className="primaryButton" onClick={() => setResult(null)} type="button">닫기</button>
            </ModalFooter>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}
