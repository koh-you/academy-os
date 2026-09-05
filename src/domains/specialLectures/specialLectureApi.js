import { apiFetch, postJson } from "../../shared/utils/apiClient.js";
import { isSpecialLectureStudentScheduleSynced } from "./specialLecturePlanSync.js";
import {
  createSpecialLectureSettlementStateWithDraft,
  getSpecialLectureSettlementSaveSnapshot,
  normalizeSpecialLectureSettlementState,
  specialLectureSettlementStateKey
} from "../settlements/specialLectureSettlement.js";
import {
  getSpecialLectureEnrollmentSaveSnapshot,
  normalizeSpecialLectureApplication,
  normalizeSpecialLectureApplications,
  normalizeSpecialLectureEnrollments
} from "./specialLectureGuideUtils.js";

async function readJsonResponse(response) {
  const result = await response.json();
  return { ...result, ok: response.ok && result.ok === true };
}

/**
 * Reads the current app_state, merges the teacher's settlement draft onto it,
 * saves, then re-reads and compares snapshots before returning the verified
 * persisted state. Throws on any HTTP/payload/verification failure.
 *
 * `postAppState` is injected (rather than calling POST /api/app-state
 * directly) because App.jsx's `postAppState` already owns the versioned
 * write payload construction and response parsing shared by every app_state
 * writer — this action only owns the special-lecture-specific merge/verify
 * logic, not app_state's own contract.
 */
export async function saveSpecialLectureSettlementStateAction(draftState, { postAppState }) {
  const currentResult = await readJsonResponse(await apiFetch("/api/app-state", { cache: "no-store" }));
  if (!currentResult.ok || currentResult.source !== "supabase") {
    throw new Error(currentResult.error || "Supabase의 현재 특강 정산 원천을 불러오지 못했습니다.");
  }
  const currentState = normalizeSpecialLectureSettlementState(currentResult.states?.[specialLectureSettlementStateKey]);
  const nextState = createSpecialLectureSettlementStateWithDraft(currentState, draftState);
  const saveResult = await postAppState({ [specialLectureSettlementStateKey]: nextState });
  if (!saveResult.ok || saveResult.source !== "supabase") {
    throw new Error(saveResult.error || "특강 정산이 Supabase에 저장되지 않았습니다.");
  }
  const verifyResult = await readJsonResponse(await apiFetch("/api/app-state", { cache: "no-store" }));
  if (!verifyResult.ok || verifyResult.source !== "supabase") {
    throw new Error(verifyResult.error || "특강 정산 저장 결과를 다시 확인하지 못했습니다.");
  }
  const persistedState = normalizeSpecialLectureSettlementState(verifyResult.states?.[specialLectureSettlementStateKey]);
  if (
    getSpecialLectureSettlementSaveSnapshot(persistedState) !==
    getSpecialLectureSettlementSaveSnapshot(nextState)
  ) {
    throw new Error("Supabase 재조회 값이 수정한 특강 정산과 다릅니다. 저장 완료로 처리하지 않았습니다.");
  }
  return persistedState;
}

/** Saves an already-computed application draft and returns the server-verified row. */
export async function updateSpecialLectureApplicationAction(nextApplication) {
  const result = await postJson("/api/special-lecture-applications", { application: nextApplication });
  if (!result.ok) throw new Error(result.error || "특강 신청자 저장 실패");
  return normalizeSpecialLectureApplication(result.application ?? nextApplication);
}

/** Deletes an application, then re-reads to confirm it's actually gone from Supabase. */
export async function deleteSpecialLectureApplicationAction(applicationId) {
  const normalizedApplicationId = String(applicationId ?? "").trim();
  if (!normalizedApplicationId) throw new Error("삭제할 특강 신청 원본 ID가 필요합니다.");
  const result = await readJsonResponse(
    await apiFetch(`/api/special-lecture-applications?id=${encodeURIComponent(normalizedApplicationId)}&confirm=true`, {
      method: "DELETE"
    })
  );
  if (!result.ok) throw new Error(result.error || "특강 신청 원본 삭제 실패");
  if (result.source !== "supabase" || !result.deleted) {
    throw new Error("Supabase에서 특강 신청 원본 삭제를 확인하지 못했습니다.");
  }

  const verifyResult = await readJsonResponse(await apiFetch("/api/special-lecture-applications", { cache: "no-store" }));
  if (!verifyResult.ok || verifyResult.source !== "supabase") {
    throw new Error(verifyResult.error || "삭제 후 특강 신청 원본을 다시 확인하지 못했습니다.");
  }
  const persistedApplications = normalizeSpecialLectureApplications(verifyResult.applications ?? []);
  if (persistedApplications.some((application) => application.applicationId === normalizedApplicationId)) {
    throw new Error("Supabase 재조회에서 삭제한 신청 원본이 남아 있습니다.");
  }
  return persistedApplications;
}

export async function readPersistedSpecialLectureEnrollments() {
  const result = await readJsonResponse(await apiFetch("/api/special-lecture-enrollments", { cache: "no-store" }));
  if (!result.ok) {
    throw new Error(result.error || "특강 회차 저장 결과를 다시 확인하지 못했습니다.");
  }
  if (result.source !== "supabase") {
    throw new Error("특강 회차가 Supabase가 아닌 임시 원천에 저장되어 완료할 수 없습니다.");
  }
  return normalizeSpecialLectureEnrollments(result.enrollments ?? []);
}

/**
 * Saves an already-computed enrollment draft and verifies it via re-read. On
 * a failure AFTER the POST succeeded, marks the error with
 * `specialLectureEnrollmentPostSucceeded` so the caller knows not to revert
 * its optimistic UI blindly (the source write did happen, only verification
 * failed). Takes `nextEnrollment` pre-computed by the caller (rather than
 * computing it here) so the same object — with the same `updatedAt` — is
 * used both for the caller's optimistic UI update and the POST body.
 */
export async function saveSpecialLectureEnrollmentAction(nextEnrollment) {
  let postSucceeded = false;
  try {
    const result = await postJson("/api/special-lecture-enrollments", { enrollment: nextEnrollment });
    if (!result.ok) throw new Error(result.error || "특강 수강명단 저장 실패");
    if (result.source !== "supabase") {
      throw new Error("특강 회차가 Supabase가 아닌 임시 원천에 저장되어 완료할 수 없습니다.");
    }
    postSucceeded = true;
    const persistedEnrollments = await readPersistedSpecialLectureEnrollments();
    const persistedEnrollment = persistedEnrollments.find((item) => item.enrollmentId === nextEnrollment.enrollmentId);
    if (!persistedEnrollment) {
      throw new Error("Supabase 재조회에서 저장한 학생의 회차 계획을 찾지 못했습니다.");
    }
    if (getSpecialLectureEnrollmentSaveSnapshot(persistedEnrollment) !== getSpecialLectureEnrollmentSaveSnapshot(nextEnrollment)) {
      throw new Error("Supabase 재조회 값이 수정한 회차 계획과 다릅니다. 저장 완료로 처리하지 않았습니다.");
    }
    return { nextEnrollment, persistedEnrollment, persistedEnrollments };
  } catch (error) {
    if (postSucceeded && error && typeof error === "object") {
      error.specialLectureEnrollmentPostSucceeded = true;
    }
    throw error;
  }
}

/**
 * Bulk-saves an already-computed list of enrollments in one request; no
 * per-item verification (matches prior behavior). Takes `nextEnrollments`
 * pre-computed by the caller for the same reason as
 * saveSpecialLectureEnrollmentAction above.
 */
export async function saveSpecialLectureEnrollmentsAction(nextEnrollments) {
  const result = await postJson("/api/special-lecture-enrollments/bulk", { enrollments: nextEnrollments });
  if (!result.ok) throw new Error(result.error || "특강 수강명단 저장 실패");
  return normalizeSpecialLectureEnrollments(result.enrollments ?? nextEnrollments);
}

function getSpecialLectureLessonSaveSnapshot(lesson = {}) {
  const schedules = (Array.isArray(lesson.specialLectureStudentSchedules) ? lesson.specialLectureStudentSchedules : [])
    .map((schedule) => ({
      endTime: schedule.endTime || "",
      overrideReason: schedule.overrideReason || "",
      scheduleType: schedule.scheduleType === "adjusted" ? "adjusted" : "official",
      startTime: schedule.startTime || "",
      studentId: schedule.studentId || ""
    }))
    .sort((left, right) => left.studentId.localeCompare(right.studentId));
  return JSON.stringify({
    date: lesson.date || "",
    endTime: lesson.endTime || "",
    lessonId: lesson.lessonId || "",
    specialLectureGuideId: lesson.specialLectureGuideId || "",
    specialLectureSessionId: lesson.specialLectureSessionId || "",
    specialLectureStudentSchedules: schedules,
    startTime: lesson.startTime || "",
    studentIds: [...new Set(lesson.studentIds ?? [])].sort()
  });
}

/**
 * Bulk-creates special lecture lessons, then verifies each one against a
 * fresh Supabase read. `normalizeLesson` lets the caller apply App-local
 * lesson shaping (color, default status) before the request is sent.
 */
export async function createSpecialLectureLessonsAction(lessonDrafts = [], { normalizeLesson = (lesson) => lesson } = {}) {
  const normalizedLessons = lessonDrafts
    .filter((lesson) => lesson?.lessonId && lesson?.date)
    .map(normalizeLesson);
  if (!normalizedLessons.length) throw new Error("생성할 특강 회차가 없습니다.");
  const result = await postJson("/api/lessons/bulk", { lessons: normalizedLessons });
  if (!result.ok) throw new Error(result.error || "특강 수업일지 생성 실패");
  const verification = await readJsonResponse(
    await apiFetch(`/api/lessons?verify=special-lecture-${Date.now()}`, { cache: "no-store" })
  );
  if (!verification.ok || verification.source !== "supabase") {
    throw new Error(verification.error || "특강 수업 저장 후 Supabase 재조회에 실패했습니다. 저장됐을 수 있으므로 다시 누르기 전에 확인해 주세요.");
  }
  const persistedLessons = Array.isArray(verification.lessons) ? verification.lessons : [];
  const verifiedLessons = normalizedLessons.map((expectedLesson) => {
    const persistedLesson = persistedLessons.find((lesson) => lesson.lessonId === expectedLesson.lessonId);
    if (!persistedLesson || getSpecialLectureLessonSaveSnapshot(persistedLesson) !== getSpecialLectureLessonSaveSnapshot(expectedLesson)) {
      throw new Error(`특강 수업 저장 후 Supabase 값이 일치하지 않습니다: ${expectedLesson.lessonId}`);
    }
    return persistedLesson;
  });
  return { persistedLessons, verifiedLessons };
}

/**
 * Applies each per-student schedule sync request in order (server enforces
 * atomicity per request), then verifies every request's lesson against one
 * fresh Supabase read.
 */
export async function syncSpecialLectureStudentSchedulesAction(syncRequests = []) {
  const normalizedRequests = syncRequests
    .filter((request) => request?.lessonId && request?.studentId)
    .map((request) => ({
      lessonId: request.lessonId,
      studentId: request.studentId,
      expectedSchedule: request.expectedSchedule ?? null
    }));
  if (!normalizedRequests.length) return { persistedLessons: [], verifiedLessons: [] };
  for (const request of normalizedRequests) {
    const result = await postJson("/api/lessons/special-lecture-student-schedule", request);
    if (result.source !== "supabase") {
      throw new Error("특강 학생별 시간이 Supabase가 아닌 임시 원천에 저장되어 완료할 수 없습니다.");
    }
    if (
      !result.lesson ||
      !isSpecialLectureStudentScheduleSynced({
        lesson: result.lesson,
        studentId: request.studentId,
        expectedSchedule: request.expectedSchedule
      })
    ) {
      throw new Error(`특강 학생별 시간 저장 응답이 계획과 일치하지 않습니다: ${request.lessonId}`);
    }
  }
  const verification = await readJsonResponse(
    await apiFetch(`/api/lessons?verify=special-lecture-student-${Date.now()}`, { cache: "no-store" })
  );
  if (!verification.ok || verification.source !== "supabase") {
    throw new Error(verification.error || "특강 학생별 시간 저장 후 Supabase 재조회에 실패했습니다.");
  }
  const persistedLessons = Array.isArray(verification.lessons) ? verification.lessons : [];
  const verifiedLessons = normalizedRequests.map((request) => {
    const persistedLesson = persistedLessons.find((lesson) => lesson.lessonId === request.lessonId);
    if (
      !persistedLesson ||
      !isSpecialLectureStudentScheduleSynced({
        lesson: persistedLesson,
        studentId: request.studentId,
        expectedSchedule: request.expectedSchedule
      })
    ) {
      throw new Error(`특강 학생별 시간 저장 후 Supabase 값이 계획과 일치하지 않습니다: ${request.lessonId}`);
    }
    return persistedLesson;
  });
  return { persistedLessons, verifiedLessons };
}
