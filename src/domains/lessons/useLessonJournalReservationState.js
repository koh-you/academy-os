import { useEffect, useState } from "react";

export function createLessonJournalReservationInitialState() {
  return {
    cancelingReservationJobId: "",
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
    reservationApplyState,
    reservationAudit,
    reservationInspectMode,
    reservationModalOpen,
    setCancelingReservationJobId,
    setReservationApplyState,
    setReservationAudit,
    setReservationInspectMode,
    setReservationModalOpen,
    setSolapiResultRefreshState,
    solapiResultRefreshState
  };
}
