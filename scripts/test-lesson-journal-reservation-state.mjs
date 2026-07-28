import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalReservationInitialState } from "../src/domains/lessons/useLessonJournalReservationState.js";

const activeLessonState = {
  ...createLessonJournalReservationInitialState(),
  cancelingReservationJobId: "job_TARGET",
  reservationApplyState: "applying",
  reservationAudit: {
    message: "TARGET 조회 완료",
    osJobs: [{ notificationJobId: "job_TARGET" }],
    state: "saved"
  },
  reservationInspectMode: "issues",
  reservationModalOpen: true,
  solapiResultRefreshState: "loading"
};
const activeLessonSnapshot = structuredClone(activeLessonState);
const initialState = createLessonJournalReservationInitialState();

assert.deepEqual(initialState, {
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
});
assert.deepEqual(activeLessonState, activeLessonSnapshot);

const secondInitialState = createLessonJournalReservationInitialState();
assert.notEqual(secondInitialState.reservationAudit, initialState.reservationAudit);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const reservationStateSource = await readFile(
  new URL("../src/domains/lessons/useLessonJournalReservationState.js", import.meta.url),
  "utf8"
);
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction ", detailStart + 1);
const detailSource = appSource.slice(detailStart, detailEnd);
const localStateBoundaryEnd = detailSource.indexOf("const [editingMemoKey");
const localStateBoundary = detailSource.slice(0, localStateBoundaryEnd);

for (const binding of [
  'import { useLessonJournalReservationState } from "../domains/lessons/useLessonJournalReservationState.js"',
  "} = useLessonJournalReservationState({",
  "lessonId: lesson.lessonId,",
  "notificationPlanMode: lessonNotificationPlan?.mode,",
  "notificationPlanScheduledAt: lessonNotificationPlan?.scheduledAt"
]) {
  assert.ok(appSource.includes(binding), `missing App reservation state binding: ${binding}`);
}
for (const removedLocalState of [
  "const [reservationModalOpen, setReservationModalOpen] = useState(false)",
  "const [reservationAudit, setReservationAudit] = useState({",
  'const [reservationInspectMode, setReservationInspectMode] = useState("all")',
  'const [cancelingReservationJobId, setCancelingReservationJobId] = useState("")',
  'const [reservationApplyState, setReservationApplyState] = useState("idle")',
  'const [solapiResultRefreshState, setSolapiResultRefreshState] = useState("idle")'
]) {
  assert.ok(!localStateBoundary.includes(removedLocalState), `App must not retain reservation state: ${removedLocalState}`);
}
for (const hookContract of [
  "export function createLessonJournalReservationInitialState()",
  "export function useLessonJournalReservationState({",
  "const [reservationModalOpen, setReservationModalOpen] = useState(initialState.reservationModalOpen)",
  "const [reservationAudit, setReservationAudit] = useState(initialState.reservationAudit)",
  "const [reservationInspectMode, setReservationInspectMode] = useState(initialState.reservationInspectMode)",
  "const [cancelingReservationJobId, setCancelingReservationJobId] = useState(initialState.cancelingReservationJobId)",
  "const [reservationApplyState, setReservationApplyState] = useState(initialState.reservationApplyState)",
  "const [solapiResultRefreshState, setSolapiResultRefreshState] = useState(initialState.solapiResultRefreshState)",
  'setReservationApplyState("idle")',
  'setSolapiResultRefreshState("idle")',
  "}, [lessonId]);",
  "}, [notificationPlanMode, notificationPlanScheduledAt]);"
]) {
  assert.ok(reservationStateSource.includes(hookContract), `missing reservation hook contract: ${hookContract}`);
}
for (const AppOwnedAction of [
  "async function refreshReservationAudit()",
  "async function cancelReservationJob(job)",
  "async function applySolapiReservationPlan()",
  "async function refreshSolapiSendResults()",
  "getJsonWithTimeout(osPath,",
  "onCancelNotificationJob?.(",
  "onApplyLessonNotificationPlan(lesson.lessonId)",
  "onReconcileSolapiNotificationResults?.("
]) {
  assert.ok(detailSource.includes(AppOwnedAction), `reservation action must remain in App: ${AppOwnedAction}`);
  assert.ok(!reservationStateSource.includes(AppOwnedAction), `reservation hook must not own action: ${AppOwnedAction}`);
}
for (const forbiddenSideEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "Supabase",
  "localStorage",
  "notificationJobs"
]) {
  assert.ok(!reservationStateSource.includes(forbiddenSideEffect), `reservation hook must stay local: ${forbiddenSideEffect}`);
}

console.log("lesson journal reservation local state TARGET/CONTROL fixtures passed");
