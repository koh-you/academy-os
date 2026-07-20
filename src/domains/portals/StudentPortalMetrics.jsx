import { MetricCard } from "../../shared/components/MetricCard.jsx";

export function StudentPortalMetrics({ overdueCount, streakDays, todayCount }) {
  return (
    <div className="metricGrid">
      <MetricCard icon="📖" label="오늘 할 숙제" value={`${todayCount}개`} hint="오늘 배정된 숙제 수" />
      <MetricCard icon="⚠️" label="밀린 숙제" value={`${overdueCount}개`} hint="완료 못한 지난 날짜 숙제" tone="warning" />
      <MetricCard icon="🔥" label="연속 수행일" value={`${streakDays}일`} hint="매일 체크하는 습관 지표" tone="success" />
    </div>
  );
}
