import {
  calculateSpecialLectureTuition,
  getSpecialLectureSessionHours,
  normalizeSpecialLectureEnrollments,
  normalizeSpecialLectureGuides
} from "../specialLectures/specialLectureGuideUtils.js";
import { monthlySettlementFactor } from "./monthlySettlement.js";

export const specialLectureSettlementStateKey = "specialLectureInstructorSettlements";

const settlementModes = new Set(["auto", "sessionCount", "fixedAmount"]);

function normalizeText(value = "") {
  return String(value ?? "").trim();
}

function normalizeMoney(value, fallback = "") {
  if (value === "" || value === null || value === undefined) return fallback;
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(0, Math.round(number)) : fallback;
}

function normalizeCount(value, fallback = "") {
  if (value === "" || value === null || value === undefined) return fallback;
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(0, Math.round(number)) : fallback;
}

function roundHours(value) {
  return Math.round((Number(value) || 0) * 100) / 100;
}

export function createDefaultSpecialLectureSettlementState() {
  return {
    guideSettings: {},
    updatedAt: "",
    version: 1
  };
}

export function normalizeSpecialLectureSettlementSetting(setting = {}) {
  return {
    billableSessionCount: normalizeCount(setting.billableSessionCount, ""),
    fixedAmount: normalizeMoney(setting.fixedAmount, ""),
    mode: settlementModes.has(setting.mode) ? setting.mode : "auto",
    note: normalizeText(setting.note)
  };
}

export function normalizeSpecialLectureSettlementState(state = {}) {
  const sourceGuideSettings = state?.guideSettings && typeof state.guideSettings === "object"
    ? state.guideSettings
    : {};
  return {
    guideSettings: Object.fromEntries(
      Object.entries(sourceGuideSettings).map(([guideId, guideSetting]) => [
        guideId,
        {
          studentSettings: Object.fromEntries(
            Object.entries(
              guideSetting?.studentSettings && typeof guideSetting.studentSettings === "object"
                ? guideSetting.studentSettings
                : {}
            ).map(([studentId, setting]) => [
              studentId,
              normalizeSpecialLectureSettlementSetting(setting)
            ])
          )
        }
      ])
    ),
    updatedAt: normalizeText(state?.updatedAt),
    version: Math.max(1, Number(state?.version) || 1)
  };
}

export function createSpecialLectureSettlementStateWithDraft(currentState = {}, draftState = {}) {
  const current = normalizeSpecialLectureSettlementState(currentState);
  const draft = normalizeSpecialLectureSettlementState(draftState);
  const updatedAt = normalizeText(draft.updatedAt) || new Date().toISOString();
  const guideIds = new Set([
    ...Object.keys(current.guideSettings),
    ...Object.keys(draft.guideSettings)
  ]);
  return {
    guideSettings: Object.fromEntries(
      [...guideIds].map((guideId) => [
        guideId,
        {
          studentSettings: {
            ...(current.guideSettings[guideId]?.studentSettings ?? {}),
            ...(draft.guideSettings[guideId]?.studentSettings ?? {})
          }
        }
      ])
    ),
    updatedAt,
    version: current.version + 1
  };
}

export function getSpecialLectureSettlementSaveSnapshot(state = {}) {
  const normalized = normalizeSpecialLectureSettlementState(state);
  return JSON.stringify({
    guideSettings: Object.fromEntries(
      Object.entries(normalized.guideSettings)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([guideId, guideSetting]) => [
          guideId,
          {
            studentSettings: Object.fromEntries(
              Object.entries(guideSetting.studentSettings)
                .sort(([left], [right]) => left.localeCompare(right))
            )
          }
        ])
    ),
    updatedAt: normalized.updatedAt,
    version: normalized.version
  });
}

function getEnrollmentPlans(enrollment = {}) {
  if (Array.isArray(enrollment.sessionPlans) && enrollment.sessionPlans.length) {
    return enrollment.sessionPlans
      .filter((plan) => plan?.status !== "excluded")
      .map((plan) => ({
        effectiveEndTime: normalizeText(plan.effectiveEndTime),
        effectiveStartTime: normalizeText(plan.effectiveStartTime),
        sessionId: normalizeText(plan.sessionId)
      }))
      .filter((plan) => plan.sessionId);
  }
  return [...new Set(Array.isArray(enrollment.sessionIds) ? enrollment.sessionIds : [])]
    .map((sessionId) => ({
      effectiveEndTime: "",
      effectiveStartTime: "",
      sessionId: normalizeText(sessionId)
    }))
    .filter((plan) => plan.sessionId);
}

function getEnrollmentRecency(enrollment = {}) {
  return normalizeText(
    enrollment.planReviewedAt ||
    enrollment.updatedAt ||
    enrollment.createdAt
  );
}

export function buildSpecialLectureSettlementRows({
  settlementState,
  specialLectureEnrollments = [],
  specialLectureGuides = [],
  students = []
} = {}) {
  const normalizedState = normalizeSpecialLectureSettlementState(settlementState);
  const studentById = new Map(students.map((student) => [student.studentId, student]));
  const normalizedGuides = normalizeSpecialLectureGuides(specialLectureGuides);
  const guideById = new Map(normalizedGuides.map((guide) => [guide.specialLectureGuideId, guide]));
  const guideBySlug = new Map(normalizedGuides.map((guide) => [guide.slug, guide]));
  const enrollmentGroups = new Map();

  normalizeSpecialLectureEnrollments(specialLectureEnrollments)
    .filter((enrollment) => enrollment.status === "active")
    .forEach((enrollment) => {
      const guide = guideById.get(enrollment.specialLectureGuideId) ||
        guideBySlug.get(enrollment.guideSlug);
      if (!guide || !enrollment.studentId) return;
      const groupKey = `${guide.specialLectureGuideId}::${enrollment.studentId}`;
      enrollmentGroups.set(groupKey, [
        ...(enrollmentGroups.get(groupKey) ?? []),
        enrollment
      ]);
    });

  return [...enrollmentGroups.values()]
    .map((enrollments) => {
      const newestFirst = [...enrollments].sort((left, right) =>
        getEnrollmentRecency(right).localeCompare(getEnrollmentRecency(left))
      );
      const confirmedEnrollments = newestFirst.filter((enrollment) => enrollment.planReviewedAt);
      const sourceEnrollments = confirmedEnrollments.length ? confirmedEnrollments : newestFirst;
      const primaryEnrollment = sourceEnrollments[0];
      const guide = guideById.get(primaryEnrollment.specialLectureGuideId) ||
        guideBySlug.get(primaryEnrollment.guideSlug);
      const plansBySessionId = new Map();
      sourceEnrollments.forEach((enrollment) => {
        getEnrollmentPlans(enrollment).forEach((plan) => {
          if (!plansBySessionId.has(plan.sessionId)) {
            plansBySessionId.set(plan.sessionId, plan);
          }
        });
      });
      const guideSessionsById = new Map(
        (Array.isArray(guide?.sessions) ? guide.sessions : [])
          .map((session) => [session.sessionId, session])
      );
      const sessions = [...plansBySessionId.values()]
        .map((plan) => {
          const guideSession = guideSessionsById.get(plan.sessionId);
          if (!guideSession) return null;
          const effectiveSession = {
            ...guideSession,
            endTime: plan.effectiveEndTime || guideSession.endTime,
            startTime: plan.effectiveStartTime || guideSession.startTime
          };
          return {
            ...effectiveSession,
            durationHours: roundHours(getSpecialLectureSessionHours(effectiveSession))
          };
        })
        .filter(Boolean)
        .sort((left, right) =>
          String(left.dateKey).localeCompare(String(right.dateKey)) ||
          String(left.startTime).localeCompare(String(right.startTime))
        );
      if (!sessions.length) return null;

      const isConfirmed = confirmedEnrollments.length > 0;
      const totalHours = roundHours(
        sessions.reduce((sum, session) => sum + session.durationHours, 0)
      );
      const autoAmount = Math.round(calculateSpecialLectureTuition({
        pricePerHour: guide.pricePerHour,
        pricePerSession: guide.pricePerSession,
        pricingMode: guide.pricingMode,
        sessionCount: sessions.length,
        totalHours
      }));
      const setting = normalizeSpecialLectureSettlementSetting(
        normalizedState.guideSettings?.[guide.specialLectureGuideId]
          ?.studentSettings?.[primaryEnrollment.studentId]
      );
      const billableSessionCount = setting.mode === "sessionCount"
        ? Math.min(sessions.length, normalizeCount(setting.billableSessionCount, sessions.length))
        : sessions.length;
      const adjustedSessionAmount =
        guide.pricingMode === "perSession"
          ? Math.round(billableSessionCount * (Number(guide.pricePerSession) || 0))
          : autoAmount;
      const calculatedAmount = setting.mode === "fixedAmount"
        ? normalizeMoney(setting.fixedAmount, 0)
        : setting.mode === "sessionCount"
          ? adjustedSessionAmount
          : autoAmount;
      return {
        autoAmount,
        billableSessionCount,
        enrollment: primaryEnrollment,
        grossAmount: isConfirmed ? calculatedAmount : 0,
        guide,
        hasMissingReason: setting.mode !== "auto" && !setting.note,
        isConfirmed,
        sessionCount: sessions.length,
        sessions,
        setting,
        sourceEnrollmentCount: enrollments.length,
        student: studentById.get(primaryEnrollment.studentId) ?? {
          grade: "",
          name: "학생 연결 누락",
          schoolName: "",
          studentId: primaryEnrollment.studentId
        },
        totalHours
      };
    })
    .filter(Boolean)
    .sort((left, right) =>
      String(left.guide.title || "").localeCompare(String(right.guide.title || ""), "ko") ||
      String(left.student.name || "").localeCompare(String(right.student.name || ""), "ko")
    );
}

export function buildSpecialLectureSettlementSummary(rows = []) {
  const grossAmount = Math.round(
    rows.reduce((sum, row) => sum + row.grossAmount, 0)
  );
  return {
    confirmedStudentCount: rows.filter((row) => row.isConfirmed).length,
    grossAmount,
    manualOverrideCount: rows.filter((row) => row.setting.mode !== "auto").length,
    missingReasonCount: rows.filter((row) => row.hasMissingReason).length,
    netAmount: Math.round(grossAmount * monthlySettlementFactor),
    pendingStudentCount: rows.filter((row) => !row.isConfirmed).length
  };
}
