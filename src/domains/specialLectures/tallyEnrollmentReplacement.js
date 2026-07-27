export function buildTallyEnrollmentReplacement({
  application = {},
  guideSessions = [],
  requestedPlans = null
} = {}) {
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
