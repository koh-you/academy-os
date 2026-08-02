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
  SupplementCenter: lazyNamedExport(
    () => import("../domains/supplements/SupplementCenter.jsx"),
    "SupplementCenter"
  ),
  TeacherLessonHubV2: lazyNamedExport(
    () => import("../domains/lessons/TeacherLessonHubV2.jsx"),
    "TeacherLessonHubV2"
  )
});
