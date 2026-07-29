import { EmptyState } from "../../shared/components/EmptyState.jsx";

export function StudentEmptyTab({ message }) {
  return <EmptyState className="emptyPortalPanel" title={message} />;
}

export function StudentEvaluationTab() {
  return (
    <div className="evaluationPanel">
      <strong>진단평가</strong>
      <strong>내신기출 모의평가</strong>
      <EmptyState className="emptyPortalPanel" title="배정된 시험이 없습니다." />
    </div>
  );
}
