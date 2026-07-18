function normalizeRequestedClock(value = "") {
  const match = String(value ?? "").match(/(\d{1,2}):(\d{2})/);
  if (!match) return "";
  const hour = Math.max(0, Math.min(23, Number(match[1]) || 0));
  const minute = Math.max(0, Math.min(59, Number(match[2]) || 0));
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

export function getTallyRequestedSessionIndexes(value = "") {
  const text = String(value ?? "");
  const explicitIndexes = [...text.matchAll(/(\d{1,2})\s*(?:회차|회)(?!\s*분)/g)]
    .map((match) => Number(match[1]) - 1)
    .filter((index) => Number.isInteger(index) && index >= 0);
  return [...new Set(explicitIndexes)];
}

export function getTallyRequestedTimeRange(value = "") {
  const matches = [...String(value ?? "").matchAll(/(\d{1,2}:\d{2})/g)].map((match) => normalizeRequestedClock(match[1]));
  return matches.length >= 2 ? { requestedStartTime: matches[0], requestedEndTime: matches[1] } : null;
}

export function normalizeSpecialLectureTallySessionRequests(entries = []) {
  const normalizedEntries = entries.map((entry) => ({
    label: String(entry?.label ?? "").trim(),
    value: String(entry?.value ?? "").trim()
  }));
  const selectionEntry = normalizedEntries.find(({ label }) => /(?:수강|신청|희망).{0,12}회차|회차.{0,12}(?:선택|신청)/i.test(label));
  const selectedIndexes = getTallyRequestedSessionIndexes(selectionEntry?.value || "");
  const planByIndex = new Map(selectedIndexes.map((sessionIndex) => [sessionIndex, {
    sessionIndex,
    requestedStartTime: "",
    requestedEndTime: "",
    overrideReason: ""
  }]));

  normalizedEntries.forEach(({ label, value }) => {
    const [sessionIndex] = getTallyRequestedSessionIndexes(label);
    if (sessionIndex === undefined) return;
    if (selectionEntry && !planByIndex.has(sessionIndex)) return;
    if (!planByIndex.has(sessionIndex) && !value) return;
    const plan = planByIndex.get(sessionIndex) ?? {
      sessionIndex,
      requestedStartTime: "",
      requestedEndTime: "",
      overrideReason: ""
    };
    const range = getTallyRequestedTimeRange(value);
    if (/시작/i.test(label)) plan.requestedStartTime = normalizeRequestedClock(value);
    if (/종료/i.test(label)) plan.requestedEndTime = normalizeRequestedClock(value);
    if (/시간/i.test(label) && range) Object.assign(plan, range);
    if (/사유|이유|요청|특이/i.test(label)) plan.overrideReason = value;
    planByIndex.set(sessionIndex, plan);
  });

  const generalTimeEntry = normalizedEntries.find(({ label }) => /(?:희망|조정|실제).{0,8}(?:수강\s*)?시간/i.test(label) && getTallyRequestedSessionIndexes(label).length === 0);
  const generalReasonEntry = normalizedEntries.find(({ label }) => /시간.{0,8}(?:조정\s*)?(?:사유|이유)|조정.{0,8}(?:사유|이유)/i.test(label) && getTallyRequestedSessionIndexes(label).length === 0);
  const generalRange = getTallyRequestedTimeRange(generalTimeEntry?.value || "");
  if (generalRange && planByIndex.size) {
    planByIndex.forEach((plan) => Object.assign(plan, generalRange));
  }
  if (generalReasonEntry?.value && planByIndex.size) {
    planByIndex.forEach((plan) => {
      if (!plan.overrideReason) plan.overrideReason = generalReasonEntry.value;
    });
  }
  return [...planByIndex.values()].sort((left, right) => left.sessionIndex - right.sessionIndex);
}
