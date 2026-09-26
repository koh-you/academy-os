import { useEffect, useState } from "react";

export function createLessonJournalReservationInitialState() {
  return {
    cancelingReservationJobId: "",
    // 2026-09-19 · U11: 예약 1건 취소 확인 대화상자(ConfirmDialog)가 기다리는 job. null 이면 닫힘.
    pendingCancelReservationJob: null,
    reservationApplyState: "idle",
    reservationAudit: {
      message: "",
      osJobs: null,
      state: "idle"
    },
    reservationInspectMode: "all",
    reservationModalOpen: false,
    solapiResultRefreshState: "idle"
  };
}

export function useLessonJournalReservationState({
  lessonId,
  notificationPlanMode,
  notificationPlanScheduledAt
}) {
  const initialState = createLessonJournalReservationInitialState();
  const [reservationModalOpen, setReservationModalOpen] = useState(initialState.reservationModalOpen);
  const [reservationAudit, setReservationAudit] = useState(initialState.reservationAudit);
  const [reservationInspectMode, setReservationInspectMode] = useState(initialState.reservationInspectMode);
  const [cancelingReservationJobId, setCancelingReservationJobId] = useState(initialState.cancelingReservationJobId);
  const [pendingCancelReservationJob, setPendingCancelReservationJob] = useState(initialState.pendingCancelReservationJob);
  const [reservationApplyState, setReservationApplyState] = useState(initialState.reservationApplyState);
  const [solapiResultRefreshState, setSolapiResultRefreshState] = useState(initialState.solapiResultRefreshState);

  useEffect(() => {
    setReservationApplyState("idle");
    setSolapiResultRefreshState("idle");
  }, [lessonId]);

  useEffect(() => {
    setReservationApplyState("idle");
  }, [notificationPlanMode, notificationPlanScheduledAt]);

  return {
    cancelingReservationJobId,
    pendingCancelReservationJob,
    reservationApplyState,
    reservationAudit,
    reservationInspectMode,
    reservationModalOpen,
    setCancelingReservationJobId,
    setPendingCancelReservationJob,
    setReservationApplyState,
    setReservationAudit,
    setReservationInspectMode,
    setReservationModalOpen,
    setSolapiResultRefreshState,
    solapiResultRefreshState
  };
}
