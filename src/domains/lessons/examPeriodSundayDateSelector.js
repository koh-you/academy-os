export function createExamPeriodSundayDateSelector({
  toKoreaDateString
}) {
  return function getSundayDatesForExamPeriod(
    period = {}
  ) {
    if (!period.endDate && !period.date) return [];
    const startDate =
      period.startDate ||
      period.date ||
      period.endDate;
    const endDate = period.endDate || period.date;
    const start = new Date(
      `${startDate}T00:00:00+09:00`
    );
    const end = new Date(
      `${endDate}T00:00:00+09:00`
    );
    if (
      Number.isNaN(start.getTime()) ||
      Number.isNaN(end.getTime())
    ) {
      return [];
    }
    const day = end.getDay();
    const lastSunday = new Date(end);
    lastSunday.setDate(end.getDate() - day);
    const prepSundays = [3, 2, 1, 0].map(
      (offset) => {
        const date = new Date(lastSunday);
        date.setDate(
          lastSunday.getDate() - offset * 7
        );
        return toKoreaDateString(date);
      }
    );
    const inPeriodSundays = [];
    const cursor = new Date(start);
    while (cursor <= end) {
      if (cursor.getDay() === 0) {
        inPeriodSundays.push(
          toKoreaDateString(cursor)
        );
      }
      cursor.setDate(cursor.getDate() + 1);
    }
    return [
      ...new Set([
        ...prepSundays,
        ...inPeriodSundays
      ])
    ].sort();
  };
}
