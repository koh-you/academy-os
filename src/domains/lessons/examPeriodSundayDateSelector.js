export function createExamPeriodSundayDateSelector({
  toKoreaDateString
}) {
  return function getSundayDatesForExamPeriod(
    period = {},
    mathExamDates = []
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
    const prepSundays = [3, 2, 1, 0].map((offset) => {
      const date = new Date(lastPrepSunday);
      date.setDate(
        lastPrepSunday.getDate() - offset * 7
      );
      return toKoreaDateString(date);
    });
    // 수학시험일을 나중에 적으면 그걸로 주말 수업 여부가 정해진다. 시험기간이 주말을 끼고
    // 수학시험이 그 주말 **뒤** 평일이면, 직전 일요일에도 대비를 해야 한다 — 기본 4회를
    // 넘겨 5회가 되더라도 만든다(2026-10-01 요청).
    //
    // 수학시험이 주말 **앞**이면(창동고 10/08) 그 직전 일요일은 이미 기본 4회 안에 있으므로
    // 아무것도 늘지 않는다. 그래서 "주말을 끼면 무조건 추가"가 아니라 수학시험일이 판단한다.
    const mathExamSundays = (Array.isArray(mathExamDates) ? mathExamDates : [])
      .map((value) => new Date(`${String(value ?? "").trim()}T00:00:00+09:00`))
      .filter((date) => !Number.isNaN(date.getTime()))
      .map((date) => {
        const sunday = new Date(date);
        sunday.setDate(date.getDate() - date.getDay());
        return toKoreaDateString(sunday);
      });
    return [
      ...new Set([...prepSundays, ...mathExamSundays])
    ].sort();
  };
}
