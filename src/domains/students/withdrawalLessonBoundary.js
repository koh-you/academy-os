function normalizeDateKey(dateKey = "") {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(dateKey)) ? String(dateKey) : "";
}

export function getWithdrawalFutureLessonStartDate(withdrawalDate = "") {
  const normalizedDate = normalizeDateKey(withdrawalDate);
  if (!normalizedDate) return "";

  const base = new Date(`${normalizedDate}T00:00:00+09:00`);
  base.setUTCDate(base.getUTCDate() + 1);
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(base);
}
