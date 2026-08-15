import {
  createMonthlySettlementStateWithMonth,
  getMonthlySettlementMonthSaveSnapshot,
  monthlySettlementStateKey,
  normalizeMonthlySettlementState
} from "./monthlySettlement.js";
import { apiUrl } from "../../shared/utils/apiClient.js";

/**
 * Owns the read-modify-write-verify contract for saving one settlement
 * month: read current app-state, apply the month edit, save through the
 * injected postAppState (App.jsx's private versioned-write wrapper — not
 * reimplemented here since it also builds the CAS payload and validates
 * the response contract), then requery app-state and confirm the saved
 * snapshot matches what was intended before treating it as persisted.
 * Assumes month.monthKey has already been validated by the caller.
 */
export async function saveMonthlySettlementMonthAction(month, { postAppState }) {
  const monthKey = String(month?.monthKey ?? "").slice(0, 7);
  const currentResponse = await fetch(apiUrl("/api/app-state"), { cache: "no-store" });
  const currentResult = await currentResponse.json();
  if (!currentResponse.ok || !currentResult.ok || currentResult.source !== "supabase") {
    throw new Error(currentResult.error || "Supabase의 현재 월별 정산 원천을 불러오지 못했습니다.");
  }
  const currentState = normalizeMonthlySettlementState(currentResult.states?.[monthlySettlementStateKey]);
  const nextState = createMonthlySettlementStateWithMonth(currentState, month);
  const expectedMonth = nextState.months[monthKey];
  const saveResult = await postAppState({ [monthlySettlementStateKey]: nextState });
  if (!saveResult.ok || saveResult.source !== "supabase") {
    throw new Error(saveResult.error || "월별 정산이 Supabase에 저장되지 않았습니다.");
  }

  const verifyResponse = await fetch(apiUrl("/api/app-state"), { cache: "no-store" });
  const verifyResult = await verifyResponse.json();
  if (!verifyResponse.ok || !verifyResult.ok || verifyResult.source !== "supabase") {
    throw new Error(verifyResult.error || "월별 정산 저장 결과를 다시 확인하지 못했습니다.");
  }
  const persistedState = normalizeMonthlySettlementState(verifyResult.states?.[monthlySettlementStateKey]);
  const persistedMonth = persistedState.months[monthKey];
  if (!persistedMonth) {
    throw new Error("Supabase 재조회에서 저장한 정산월을 찾지 못했습니다.");
  }
  if (
    getMonthlySettlementMonthSaveSnapshot(persistedMonth) !==
    getMonthlySettlementMonthSaveSnapshot(expectedMonth)
  ) {
    throw new Error("Supabase 재조회 값이 수정한 월별 정산과 다릅니다. 저장 완료로 처리하지 않았습니다.");
  }
  return { persistedMonth, persistedState };
}
