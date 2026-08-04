import {
  defineApiPayloadContract,
  defineApiRouteContract
} from "./apiPayloadContract.js";

const verifiedWriteResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    auditId: { defaultValue: "", type: "string" },
    source: { allowEmpty: false, required: true, type: "string" },
    verified: { required: true, type: "boolean" }
  },
  name: "verified versioned write response"
});

const attendanceCheckResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    action: { allowEmpty: false, required: true, trim: true, type: "string" },
    alimtalk: { required: true, type: "object" },
    mode: { allowEmpty: false, required: true, trim: true, type: "string" },
    record: { required: true, type: "object" }
  },
  name: "attendance check response"
});

const appStateWriteResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    source: { allowEmpty: false, required: true, type: "string" },
    states: { required: true, type: "object" }
  },
  name: "app state write response"
});

const reportSnapshotWriteResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    recovered: { required: true, type: "boolean" },
    reportSnapshots: { required: true, type: "array" },
    snapshot: { required: true, type: "object" },
    source: { allowEmpty: false, required: true, type: "string" },
    verified: { required: true, type: "boolean" }
  },
  name: "report snapshot write response"
});

const resourceMaterialWriteResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    material: { required: true, type: "object" },
    recoveredDraft: { type: "boolean" },
    source: { allowEmpty: false, required: true, type: "string" },
    verified: { required: true, type: "boolean" }
  },
  name: "resource material write response"
});

const resourceMaterialFileWriteResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    fileReference: { allowEmpty: false, required: true, type: "string" },
    material: { required: true, type: "object" },
    previousFileCleanupFailed: { type: "boolean" },
    source: { allowEmpty: false, required: true, type: "string" },
    storagePath: { allowEmpty: false, required: true, type: "string" },
    verified: { required: true, type: "boolean" }
  },
  name: "resource material file write response"
});

const resourceMaterialFileDeleteResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    materialId: { allowEmpty: false, required: true, type: "string" },
    source: { allowEmpty: false, required: true, type: "string" },
    storageDeleted: { type: "boolean" },
    verified: { required: true, type: "boolean" }
  },
  name: "resource material file delete response"
});

const notificationJobWriteResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    notificationJob: { required: true, type: "object" },
    source: { allowEmpty: false, required: true, type: "string" }
  },
  name: "notification job write response"
});

const notificationJobReserveResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    notificationJob: { required: true, type: "object" },
    reserved: { required: true, type: "boolean" },
    source: { allowEmpty: false, required: true, type: "string" }
  },
  name: "notification job reserve response"
});

const notificationJobReconcileResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    checked: { required: true, type: "array" },
    checkedCount: { required: true, type: "number" },
    notificationJobs: { required: true, type: "array" },
    records: { required: true, type: "array" },
    source: { allowEmpty: false, required: true, type: "string" },
    updatedCount: { required: true, type: "number" }
  },
  name: "notification job reconcile response"
});

const notificationJobBulkReserveResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    failedCount: { required: true, type: "number" },
    notificationJobs: { required: true, type: "array" },
    reservedCount: { required: true, type: "number" },
    results: { required: true, type: "array" },
    reusedCount: { required: true, type: "number" }
  },
  name: "notification job bulk reserve response"
});

const notificationReadinessResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    checkedCount: { required: true, type: "number" },
    issueCount: { required: true, type: "number" },
    issues: { required: true, type: "array" },
    source: { allowEmpty: false, required: true, type: "string" },
    windowMinutes: { required: true, type: "number" }
  },
  name: "notification readiness response"
});

const notificationDispatchResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    automaticSolapiReconcile: { required: true, type: "object" },
    dryRun: { required: true, type: "boolean" },
    processed: { required: true, type: "array" },
    processedCount: { required: true, type: "number" },
    source: { allowEmpty: false, required: true, type: "string" }
  },
  name: "notification dispatch response"
});

const examAnalysisRunWriteResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    analysisRun: { required: true, type: "object" },
    source: { allowEmpty: false, required: true, type: "string" }
  },
  name: "exam analysis run write response"
});

const examAnalysisQuestionCountConfirmResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    analysisRun: { required: true, type: "object" },
    events: { required: true, type: "array" },
    insertedQuestionCount: { required: true, type: "number" },
    questions: { required: true, type: "array" },
    source: { allowEmpty: false, required: true, type: "string" }
  },
  name: "exam analysis question count confirm response"
});

const examAnalysisQuestionReviewsSaveResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    analysisRun: { required: true, type: "object" },
    events: { required: true, type: "array" },
    questions: { required: true, type: "array" },
    source: { allowEmpty: false, required: true, type: "string" },
    teacherReview: { required: true, type: "object" }
  },
  name: "exam analysis question reviews save response"
});

const examAnalysisPromptStudioSaveResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    analysisRun: { required: true, type: "object" },
    promptStudioDraft: { required: true, type: "object" },
    saveVerification: { required: true, type: "object" },
    source: { allowEmpty: false, required: true, type: "string" }
  },
  name: "exam analysis prompt studio save response"
});

function defineVersionedWriteRoute({
  domain,
  fields,
  key,
  method = "POST",
  path,
  response = verifiedWriteResponseContract,
  sources
}) {
  return defineApiRouteContract({
    domain,
    key,
    method,
    path,
    request: defineApiPayloadContract({ fields, name: `${key} request` }),
    response,
    sources
  });
}

export const versionedWriteRouteContracts = Object.freeze([
  defineVersionedWriteRoute({
    domain: "lesson",
    fields: {
      auditId: { defaultValue: "", trim: true, type: "string" },
      makeupTasks: { aliases: ["tasks"], defaultValue: [], type: "array" }
    },
    key: "lessonJournalMakeupTasksSave",
    path: "/api/lesson-journal/makeup-tasks/save",
    sources: ["makeup_tasks"]
  }),
  defineVersionedWriteRoute({
    domain: "supplement",
    fields: {
      auditId: { allowEmpty: false, required: true, trim: true, type: "string" },
      lessonChange: { required: true, type: "object" },
      taskChange: { required: true, type: "object" }
    },
    key: "supplementScheduleSave",
    path: "/api/supplement-schedules/save",
    sources: ["lessons", "makeup_tasks"]
  }),
  defineVersionedWriteRoute({
    domain: "student",
    fields: {
      auditId: { allowEmpty: false, required: true, trim: true, type: "string" },
      lessonChanges: { defaultValue: [], type: "array" },
      studentChanges: { defaultValue: [], type: "array" }
    },
    key: "classRosterSave",
    path: "/api/class-rosters/save",
    sources: ["students", "lessons"]
  }),
  defineVersionedWriteRoute({
    domain: "schoolCalendar",
    fields: {
      auditId: { allowEmpty: false, required: true, trim: true, type: "string" },
      examPrepChanges: { defaultValue: [], type: "array" },
      lessonChanges: { defaultValue: [], type: "array" }
    },
    key: "derivedSchoolCalendarSave",
    path: "/api/school-calendar/derived-save",
    sources: ["exam_prep_rows", "lessons"]
  }),
  defineVersionedWriteRoute({
    domain: "lesson",
    fields: {
      action: { allowEmpty: false, required: true, trim: true, type: "string" },
      auditId: { allowEmpty: false, required: true, trim: true, type: "string" },
      homeworkChanges: { defaultValue: [], type: "array" },
      lessonChange: { defaultValue: {}, type: "object" }
    },
    key: "lessonJournalHistoryAction",
    path: "/api/lesson-journal/history-action",
    sources: ["lessons", "homeworks"]
  }),
  defineVersionedWriteRoute({
    domain: "lesson",
    fields: {
      auditId: { allowEmpty: false, required: true, trim: true, type: "string" },
      homeworkChanges: { defaultValue: [], type: "array" },
      recordChanges: { defaultValue: [], type: "array" }
    },
    key: "lessonJournalRowsSave",
    path: "/api/lesson-journal/rows/save",
    sources: ["lesson_student_records", "homeworks"]
  }),
  defineVersionedWriteRoute({
    domain: "lesson",
    fields: {
      action: { trim: true, type: "string" },
      actorId: { trim: true, type: "string" },
      attendanceReason: { type: "string" },
      attendanceStatus: { trim: true, type: "string" },
      checkInTime: { trim: true, type: "string" },
      checkOutTime: { trim: true, type: "string" },
      date: { trim: true, type: "string" },
      lateGraceMinutes: { type: "number" },
      lateMinutes: { type: ["number", "string"] },
      lessonId: { trim: true, type: "string" },
      phoneLast4: { trim: true, type: "string" },
      sendAlimtalk: { type: "boolean" },
      source: { allowEmpty: false, required: true, trim: true, type: "string" },
      studentId: { trim: true, type: "string" }
    },
    key: "attendanceCheck",
    path: "/api/attendance/check",
    response: attendanceCheckResponseContract,
    sources: ["lessons", "lesson_student_records", "attendance_events", "notification_jobs"]
  }),
  defineVersionedWriteRoute({
    domain: "appState",
    fields: {
      expectedUpdatedAt: { type: "object" },
      states: { required: true, type: "object" }
    },
    key: "appStateWrite",
    path: "/api/app-state",
    response: appStateWriteResponseContract,
    sources: ["app_state"]
  }),
  defineVersionedWriteRoute({
    domain: "report",
    fields: {
      snapshot: { required: true, type: "object" }
    },
    key: "reportSnapshotWrite",
    path: "/api/report-snapshots",
    response: reportSnapshotWriteResponseContract,
    sources: ["app_state"]
  }),
  defineVersionedWriteRoute({
    domain: "resource",
    fields: {
      material: { required: true, type: "object" }
    },
    key: "resourceMaterialWrite",
    path: "/api/resource-materials",
    response: resourceMaterialWriteResponseContract,
    sources: ["resource_materials"]
  }),
  defineVersionedWriteRoute({
    domain: "resource",
    fields: {
      file: { required: true, type: "object" },
      material: { required: true, type: "object" }
    },
    key: "resourceMaterialFileWrite",
    path: "/api/resource-material-files",
    response: resourceMaterialFileWriteResponseContract,
    sources: ["resource_materials", "storage.resource-materials"]
  }),
  defineVersionedWriteRoute({
    domain: "resource",
    fields: {
      material: { required: true, type: "object" }
    },
    key: "resourceMaterialFileDelete",
    method: "DELETE",
    path: "/api/resource-material-files",
    response: resourceMaterialFileDeleteResponseContract,
    sources: ["resource_materials", "storage.resource-materials"]
  }),
  defineVersionedWriteRoute({
    domain: "notification",
    fields: {
      notificationJob: { required: true, type: "object" }
    },
    key: "notificationJobWrite",
    path: "/api/notification-jobs",
    response: notificationJobWriteResponseContract,
    sources: ["notification_jobs"]
  }),
  defineVersionedWriteRoute({
    domain: "notification",
    fields: {
      forceDryRun: { type: "boolean" },
      notificationJob: { required: true, type: "object" },
      reason: { trim: true, type: "string" }
    },
    key: "notificationJobReserve",
    path: "/api/notification-jobs/reserve",
    response: notificationJobReserveResponseContract,
    sources: ["notification_jobs", "provider.solapi"]
  }),
  defineVersionedWriteRoute({
    domain: "notification",
    fields: {
      cancelSolapi: { type: "boolean" },
      notificationJobId: {
        aliases: ["id"],
        allowEmpty: false,
        required: true,
        trim: true,
        type: "string"
      },
      reason: { trim: true, type: "string" }
    },
    key: "notificationJobCancel",
    path: "/api/notification-jobs/cancel",
    response: notificationJobWriteResponseContract,
    sources: ["notification_jobs", "provider.solapi"]
  }),
  defineVersionedWriteRoute({
    domain: "notification",
    fields: {
      date: { defaultValue: "", trim: true, type: "string" },
      lessonId: { defaultValue: "", trim: true, type: "string" },
      limit: { defaultValue: 500, type: "number" },
      notificationJobIds: { defaultValue: [], type: "array" },
      scheduledFrom: { defaultValue: "", trim: true, type: "string" },
      scheduledTo: { defaultValue: "", trim: true, type: "string" }
    },
    key: "notificationJobReconcile",
    path: "/api/notification-jobs/reconcile-solapi",
    response: notificationJobReconcileResponseContract,
    sources: ["notification_jobs", "lesson_student_records", "provider.solapi"]
  }),
  defineVersionedWriteRoute({
    domain: "notification",
    fields: {
      concurrency: { defaultValue: 4, type: "number" },
      forceDryRun: { type: "boolean" },
      notificationJobs: { aliases: ["jobs"], defaultValue: [], type: "array" },
      reason: { trim: true, type: "string" }
    },
    key: "notificationJobBulkReserve",
    path: "/api/notification-jobs/reserve-bulk",
    response: notificationJobBulkReserveResponseContract,
    sources: ["notification_jobs", "provider.solapi"]
  }),
  defineVersionedWriteRoute({
    domain: "notification",
    fields: {
      notifySlack: { defaultValue: false, type: "boolean" },
      now: { trim: true, type: "string" },
      windowMinutes: { defaultValue: 15, type: "number" }
    },
    key: "notificationReadinessCheck",
    path: "/api/notification-jobs/readiness-check",
    response: notificationReadinessResponseContract,
    sources: ["notification_jobs", "provider.slack"]
  }),
  defineVersionedWriteRoute({
    domain: "notification",
    fields: {
      dispatchToken: { trim: true, type: "string" },
      forceDryRun: { defaultValue: false, type: "boolean" },
      limit: { defaultValue: 20, type: "number" },
      now: { trim: true, type: "string" }
    },
    key: "notificationDispatchDue",
    path: "/api/notification-jobs/dispatch-due",
    response: notificationDispatchResponseContract,
    sources: ["notification_jobs", "provider.solapi"]
  }),
  defineVersionedWriteRoute({
    domain: "examAnalysis",
    fields: {
      analysisRun: { aliases: ["run"], required: true, type: "object" }
    },
    key: "examAnalysisRunWrite",
    path: "/api/exam-analysis-runs",
    response: examAnalysisRunWriteResponseContract,
    sources: ["exam_analysis_runs"]
  }),
  defineVersionedWriteRoute({
    domain: "examAnalysis",
    fields: {
      analysisRunId: { allowEmpty: false, required: true, trim: true, type: "string" },
      confirmedBy: { allowEmpty: false, defaultValue: "teacher", trim: true, type: "string" },
      detectedQuestionConfidence: { defaultValue: 1, type: "number" },
      detectedQuestionEvidence: { defaultValue: [], type: "array" },
      missingQuestionNumbers: { defaultValue: [], type: "array" },
      questionCount: { required: true, type: "number" }
    },
    key: "examAnalysisQuestionCountConfirm",
    path: "/api/exam-analysis-runs/confirm-question-count",
    response: examAnalysisQuestionCountConfirmResponseContract,
    sources: ["exam_analysis_runs", "exam_analysis_questions", "exam_analysis_events"]
  }),
  defineVersionedWriteRoute({
    domain: "examAnalysis",
    fields: {
      analysisRunId: { allowEmpty: false, required: true, trim: true, type: "string" },
      reviews: { required: true, type: "array" }
    },
    key: "examAnalysisQuestionReviewsSave",
    path: "/api/exam-analysis-runs/save-question-reviews",
    response: examAnalysisQuestionReviewsSaveResponseContract,
    sources: ["exam_analysis_runs", "exam_analysis_questions", "exam_analysis_events"]
  }),
  defineVersionedWriteRoute({
    domain: "examAnalysis",
    fields: {
      analysisRunId: { allowEmpty: false, required: true, trim: true, type: "string" },
      expectedRevision: { defaultValue: 0, type: "number" },
      promptStudioDraft: { required: true, type: "object" }
    },
    key: "examAnalysisPromptStudioSave",
    path: "/api/exam-analysis-runs/save-prompt-studio",
    response: examAnalysisPromptStudioSaveResponseContract,
    sources: ["exam_analysis_runs", "exam_analysis_events"]
  })
]);

const routeBySignature = new Map(
  versionedWriteRouteContracts.map((contract) => [`${contract.method} ${contract.path}`, contract])
);

export function getVersionedWriteRouteContract(method, path) {
  return routeBySignature.get(`${String(method ?? "").toUpperCase()} ${String(path ?? "")}`) ?? null;
}

export function parseVersionedWriteRequest(method, path, payload) {
  const contract = getVersionedWriteRouteContract(method, path);
  if (!contract) throw new Error(`등록되지 않은 versioned write route입니다: ${method} ${path}`);
  return contract.request.parse(payload);
}

export function parseVersionedWriteResponse(method, path, payload) {
  const contract = getVersionedWriteRouteContract(method, path);
  if (!contract) throw new Error(`등록되지 않은 versioned write route입니다: ${method} ${path}`);
  return contract.response.parse(payload);
}
