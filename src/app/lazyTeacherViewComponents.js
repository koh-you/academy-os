import { lazy } from "react";

function lazyNamedExport(loadModule, exportName) {
  return lazy(async () => {
    const module = await loadModule();
    return { default: module[exportName] };
  });
}

export const lazyTeacherViewComponents = Object.freeze({
  AcademyReminderList: lazyNamedExport(
    () => import("../domains/teacher/DashboardAuxiliaryPanels.jsx"),
    "AcademyReminderList"
  ),
  AcademyReminderPanel: lazyNamedExport(
    () => import("../domains/teacher/DashboardAuxiliaryPanels.jsx"),
    "AcademyReminderPanel"
  ),
  AIVariantProblemCenter: lazyNamedExport(
    () => import("../domains/teacher/PlanningToolCenters.jsx"),
    "AIVariantProblemCenter"
  ),
  ClassManager: lazyNamedExport(
    () => import("../domains/teacher/PlanningToolCenters.jsx"),
    "ClassManager"
  ),
  ExamAnalysisPipelineCenter: lazyNamedExport(
    () => import("../domains/exams/ExamAnalysisPipelineCenter.jsx"),
    "ExamAnalysisPipelineCenter"
  ),
  ExamPrepCenter: lazyNamedExport(
    () => import("../domains/exams/ExamPrepCenter.jsx"),
    "ExamPrepCenter"
  ),
  FollowUpCenter: lazyNamedExport(
    () => import("../domains/teacher/LearningSupportCenters.jsx"),
    "FollowUpCenter"
  ),
  LessonResearchCenter: lazyNamedExport(
    () => import("../domains/teacher/PlanningToolCenters.jsx"),
    "LessonResearchCenter"
  ),
  MaterialManager: lazyNamedExport(
    () => import("../domains/teacher/LearningSupportCenters.jsx"),
    "MaterialManager"
  ),
  NotificationCenter: lazyNamedExport(
    () => import("../domains/notifications/NotificationCenter.jsx"),
    "NotificationCenter"
  ),
  SettlementWorkspace: lazyNamedExport(
    () => import("../domains/settlements/SettlementWorkspace.jsx"),
    "SettlementWorkspace"
  ),
  StudentManager: lazyNamedExport(
    () => import("../domains/students/StudentManager.jsx"),
    "StudentManager"
  ),
  OverdueHomework: lazyNamedExport(
    () => import("../domains/teacher/LearningSupportCenters.jsx"),
    "OverdueHomework"
  ),
  ResourceLibraryCenter: lazyNamedExport(
    () => import("../domains/teacher/LearningSupportCenters.jsx"),
    "ResourceLibraryCenter"
  ),
  SchoolCalendarCenter: lazyNamedExport(
    () => import("../domains/teacher/PlanningToolCenters.jsx"),
    "SchoolCalendarCenter"
  ),
  SettingsCenter: lazyNamedExport(
    () => import("../domains/settings/SettingsCenter.jsx"),
    "SettingsCenter"
  ),
  SpecialLectureNoticePanel: lazyNamedExport(
    () => import("../domains/teacher/DashboardAuxiliaryPanels.jsx"),
    "SpecialLectureNoticePanel"
  ),
  SupplementCenter: lazyNamedExport(
    () => import("../domains/supplements/SupplementCenter.jsx"),
    "SupplementCenter"
  ),
  TeacherLessonHubV2: lazyNamedExport(
    () => import("../domains/lessons/TeacherLessonHubV2.jsx"),
    "TeacherLessonHubV2"
  )
});
