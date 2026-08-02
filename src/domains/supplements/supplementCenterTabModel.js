import { findSupplementTaskForCandidate } from "./supplementCenterSelectionModel.js";

export const supplementCenterSortOptions = [
  { id: "weekday", label: "요일별" },
  { id: "name", label: "이름 가나다별" }
];

function getSupplementItemDate(item = {}) {
  const candidates = [
    item.lessonDate,
    item.task?.sourceDate,
    item.task?.sourceDueDate,
    item.task?.scheduledDate,
    item.title,
    item.task?.sourceLabel,
    item.meta
  ];
  for (const candidate of candidates) {
    const match = String(candidate || "").match(/\d{4}-\d{2}-\d{2}/);
    if (match) return match[0];
  }
  return "9999-12-31";
}

function getMondayFirstWeekdayIndex(dateString) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString) || dateString.startsWith("9999-")) return 7;
  const [year, month, day] = dateString.split("-").map(Number);
  const weekday = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return (weekday + 6) % 7;
}

export function sortSupplementCenterItems(
  items = [],
  {
    getStudentName = () => "",
    sortMode = "weekday"
  } = {}
) {
  return [...items].sort((left, right) => {
    const leftName = String(getStudentName(left.studentId) || "");
    const rightName = String(getStudentName(right.studentId) || "");
    const leftDate = getSupplementItemDate(left);
    const rightDate = getSupplementItemDate(right);
    const nameOrder = leftName.localeCompare(rightName, "ko");
    const dateOrder = leftDate.localeCompare(rightDate);

    if (sortMode === "name") {
      return nameOrder || dateOrder || String(left.id || "").localeCompare(String(right.id || ""));
    }

    return getMondayFirstWeekdayIndex(leftDate) - getMondayFirstWeekdayIndex(rightDate)
      || dateOrder
      || nameOrder
      || String(left.id || "").localeCompare(String(right.id || ""));
  });
}

export function createSupplementCenterTabViewModel({
  absenceItems = [],
  activeDeferredAbsenceCount = 0,
  activeTabId = "homework_makeup",
  homeworkItems = [],
  getStudentName = () => "",
  retestItems = [],
  sortMode = "weekday",
  tasks = []
} = {}) {
  const tabDefinitions = [
    {
      id: "homework_makeup",
      title: "숙제보충",
      subtitle: "미완료/부분완료 숙제를 보충 과제로 전환합니다.",
      emptyText: "미완료/부분완료 숙제가 없습니다.",
      items: homeworkItems
    },
    {
      id: "absence_makeup",
      title: "결석보강",
      subtitle: activeDeferredAbsenceCount
        ? `7일 초과 미래 결석 ${activeDeferredAbsenceCount}건은 접어두었습니다.`
        : "결석 기록을 보강 일정으로 전환합니다.",
      emptyText: "지금 처리할 결석 보강이 없습니다.",
      items: absenceItems
    },
    {
      id: "retest",
      title: "재시험",
      subtitle: "오답/평가 기준으로 재시험 일정을 잡습니다.",
      emptyText: "재시험이 없습니다.",
      items: retestItems
    }
  ];
  const tabs = tabDefinitions.map((tab) => {
    const items = tab.items.filter(
      (item) =>
        !["done", "canceled"].includes(findSupplementTaskForCandidate(tasks, item.task)?.status)
    );
    return {
      ...tab,
      count: items.length,
      items: sortSupplementCenterItems(items, { getStudentName, sortMode })
    };
  });

  return {
    activeTab: tabs.find((tab) => tab.id === activeTabId) ?? tabs[0],
    tabs
  };
}
