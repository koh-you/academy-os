import { findSupplementTaskForCandidate } from "./supplementCenterSelectionModel.js";

export function createSupplementCenterTabViewModel({
  absenceItems = [],
  activeDeferredAbsenceCount = 0,
  activeTabId = "homework_makeup",
  homeworkItems = [],
  retestItems = [],
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
      (item) => findSupplementTaskForCandidate(tasks, item.task)?.status !== "done"
    );
    return {
      ...tab,
      count: items.length,
      items
    };
  });

  return {
    activeTab: tabs.find((tab) => tab.id === activeTabId) ?? tabs[0],
    tabs
  };
}
