export function StudentEmptyTab({ message }) {
  return <div className="emptyPortalPanel">{message}</div>;
}

export function StudentEvaluationTab() {
  return (
    <div className="evaluationPanel">
      <strong>진단평가</strong>
      <strong>내신기출 모의평가</strong>
      <div className="emptyPortalPanel">배정된 시험이 없습니다.</div>
    </div>
  );
}
