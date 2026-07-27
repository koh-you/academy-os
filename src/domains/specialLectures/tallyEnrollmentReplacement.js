export function buildTallyEnrollmentReplacement({
  application = {},
  existingEnrollment = null,
  guideSessions = [],
  requestedPlans = null
} = {}) {
  if (existingEnrollment) {
    const sessionPlans = Array.isArray(existingEnrollment.sessionPlans)
      ? existingEnrollment.sessionPlans.map((plan) => ({ ...plan }))
      : [];
    const sessionIds = Array.isArray(existingEnrollment.sessionIds) && existingEnrollment.sessionIds.length
      ? [...existingEnrollment.sessionIds]
      : sessionPlans
        .filter((plan) => plan.status === "active")
        .map((plan) => plan.sessionId);
    return {
      memo: existingEnrollment.memo ?? "",
      planReviewedAt: existingEnrollment.planReviewedAt ?? "",
      planSource: existingEnrollment.planSource ?? "",
      sessionIds,
      sessionPlans
    };
  }

  const emptySessionPlans = guideSessions.map((session) => ({
    sessionId: session.sessionId,
    status: "excluded",
    effectiveStartTime: "",
    effectiveEndTime: "",
    overrideReason: ""
  }));
  const sessionPlans = Array.isArray(requestedPlans) && requestedPlans.length
    ? requestedPlans
    : emptySessionPlans;
  return {
    memo: application.selectedSession || application.memo || "",
    planReviewedAt: "",
    planSource: "tally_request",
    sessionIds: sessionPlans
      .filter((plan) => plan.status === "active")
      .map((plan) => plan.sessionId),
    sessionPlans
  };
}
