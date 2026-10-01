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
    // 기준은 **시험 첫날**이다. 첫날 직전(첫날이 일요일이면 그날) 일요일이 마지막 4회차가
    // 되고, 거기서 3주를 거슬러 올라가 4회를 만든다.
    //
    // 예전에는 종료일을 기준으로 삼고 시험기간 안의 일요일까지 더했다. 그래서 창동고처럼
    // 수학시험(10/08)이 끝난 뒤에도 다른 과목 때문에 시험기간이 주말을 넘기면, 이미 시험이
    // 시작된 뒤인 10/11 일요일까지 시험대비가 생겼다(2026-10-01 보고). 시험이 시작된 뒤의
    // 일요일은 대비가 아니므로 더 이상 만들지 않는다.
    const day = start.getDay();
    const lastPrepSunday = new Date(start);
    lastPrepSunday.setDate(start.getDate() - day);
    return [3, 2, 1, 0].map((offset) => {
      const date = new Date(lastPrepSunday);
      date.setDate(
        lastPrepSunday.getDate() - offset * 7
      );
      return toKoreaDateString(date);
    });
  };
}
