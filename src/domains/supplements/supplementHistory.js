export function getSupplementHistoryDate(task = {}) {
  return String(
    task.completedAt ||
    task.passedAt ||
    task.lastScheduledAt ||
    task.touchedAt ||
    task.scheduledDate ||
    task.createdAt ||
    ""
  ).slice(0, 10) || "-";
}

export function getSupplementHistoryStatus(task = {}) {
  if (task.status === "done") return { label: "보충 완료", tone: "done" };
  if (task.status === "scheduled") return { label: "일정 확정", tone: "scheduled" };
  return { label: "진행 중", tone: "draft" };
}

export function createSupplementHistoryItems({
  getMethodLabel,
  getTypeLabel,
  query = "",
  students = [],
  tasks = []
} = {}) {
  const normalizedQuery = query.trim().toLowerCase();
  return tasks.flatMap((task) => {
    const student = students.find((item) => item.studentId === task.studentId);
    const typeLabel = getTypeLabel(task.taskType);
    const methodLabel = getMethodLabel(task);
    const haystack = [
      student?.name,
      student?.schoolName,
      student?.grade,
      typeLabel,
      task.sourceLabel,
      task.reason,
      methodLabel,
      task.status
    ].join(" ").toLowerCase();
    if (normalizedQuery && !haystack.includes(normalizedQuery)) return [];
    return [{
      historyDate: getSupplementHistoryDate(task),
      methodLabel,
      sourceLabel: task.sourceLabel || task.reason || "보충 항목",
      status: getSupplementHistoryStatus(task),
      student,
      task,
      typeLabel
    }];
  });
}
