import { lazy } from "react";

function lazyNamedExport(loadModule, exportName) {
  return lazy(async () => {
    const module = await loadModule();
    return { default: module[exportName] };
  });
}

export const lazyTeacherViewComponents = Object.freeze({
  ExamAnalysisPipelineCenter: lazyNamedExport(
    () => import("../domains/exams/ExamAnalysisPipelineCenter.jsx"),
    "ExamAnalysisPipelineCenter"
  ),
  FollowUpCenter: lazyNamedExport(
    () => import("../domains/teacher/LearningSupportCenters.jsx"),
    "FollowUpCenter"
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
  SupplementCenter: lazyNamedExport(
    () => import("../domains/supplements/SupplementCenter.jsx"),
    "SupplementCenter"
  ),
  TeacherLessonHubV2: lazyNamedExport(
    () => import("../domains/lessons/TeacherLessonHubV2.jsx"),
    "TeacherLessonHubV2"
  )
});
