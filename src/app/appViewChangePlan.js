export function createAppViewChangePlan(nextView) {
  return {
    activeView: nextView,
    mobileNavigationOpen: false,
    shouldScrollToTop: true,
    lessonJournalOpen: nextView === "lessons" ? false : null
  };
}
