import assert from "node:assert/strict";

import { defineApiPayloadContract } from "../src/shared/contracts/apiPayloadContract.js";
import {
  getVersionedWriteRouteContract,
  parseVersionedWriteRequest,
  parseVersionedWriteResponse,
  versionedWriteRouteContracts
} from "../src/shared/contracts/versionedWriteRouteContracts.js";

assert.equal(versionedWriteRouteContracts.length, 24);
assert.equal(new Set(versionedWriteRouteContracts.map(({ key }) => key)).size, 24);
assert.equal(new Set(versionedWriteRouteContracts.map(({ method, path }) => `${method} ${path}`)).size, 24);
assert.equal(versionedWriteRouteContracts.every(Object.isFrozen), true);
assert.equal(versionedWriteRouteContracts.every(({ request, response, sources }) => (
  Object.isFrozen(request) && Object.isFrozen(response) && Object.isFrozen(sources)
)), true);

const rowsPayload = parseVersionedWriteRequest("post", "/api/lesson-journal/rows/save", {
  auditId: "  lesson-rows-audit  ",
  homeworkChanges: [{ after: { homeworkId: "homework-1" }, before: null }],
  recordChanges: [{ after: { lessonStudentRecordId: "record-1" }, before: null }]
});
assert.equal(rowsPayload.auditId, "lesson-rows-audit");
assert.equal(rowsPayload.homeworkChanges.length, 1);
assert.equal(rowsPayload.recordChanges.length, 1);

const legacyMakeupPayload = parseVersionedWriteRequest("POST", "/api/lesson-journal/makeup-tasks/save", {
  tasks: [{ makeupTaskId: "task-legacy" }]
});
assert.deepEqual(legacyMakeupPayload, {
  auditId: "",
  makeupTasks: [{ makeupTaskId: "task-legacy" }]
});

const rosterPayload = parseVersionedWriteRequest("POST", "/api/class-rosters/save", {
  auditId: "class-roster-audit"
});
assert.deepEqual(rosterPayload.lessonChanges, []);
assert.deepEqual(rosterPayload.studentChanges, []);
assert.notEqual(rosterPayload.lessonChanges, rosterPayload.studentChanges);

const response = parseVersionedWriteResponse("POST", "/api/supplement-schedules/save", {
  auditId: "supplement-audit",
  lesson: { lessonId: "lesson-1" },
  makeupTask: { makeupTaskId: "task-1" },
  source: "supabase",
  verified: true
});

const attendancePayload = parseVersionedWriteRequest("POST", "/api/attendance/check", {
  action: " checkin ",
  lateMinutes: "",
  phoneLast4: " 1234 ",
  sendAlimtalk: true,
  source: " kiosk "
});
assert.deepEqual(attendancePayload, {
  action: "checkin",
  lateMinutes: "",
  phoneLast4: "1234",
  sendAlimtalk: true,
  source: "kiosk"
});
assert.equal(
  parseVersionedWriteRequest("POST", "/api/attendance/check", {
    lateMinutes: 7,
    source: "manual"
  }).lateMinutes,
  7
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/attendance/check", {
    action: "checkin",
    alimtalk: { status: "queued" },
    lesson: { lessonId: "lesson-1" },
    mode: "checkIn",
    record: { lessonStudentRecordId: "record-1" }
  }),
  {
    action: "checkin",
    alimtalk: { status: "queued" },
    mode: "checkIn",
    record: { lessonStudentRecordId: "record-1" }
  }
);
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/app-state", {
    expectedUpdatedAt: { aiSettings: null },
    states: { aiSettings: { model: "safe-fixture" } }
  }),
  {
    expectedUpdatedAt: { aiSettings: null },
    states: { aiSettings: { model: "safe-fixture" } }
  }
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/app-state", {
    source: "supabase",
    stateRows: [{ key: "aiSettings", updatedAt: "version-2" }],
    states: { aiSettings: { model: "safe-fixture" } }
  }),
  {
    source: "supabase",
    states: { aiSettings: { model: "safe-fixture" } }
  }
);
assert.throws(
  () => parseVersionedWriteRequest("POST", "/api/app-state", {
    aiSettings: { model: "legacy-direct" }
  }),
  (error) => error.field === "aiSettings" && error.statusCode === 400
);
const reportSnapshot = {
  body: "safe body",
  createdAt: "2026-08-05T00:00:00.000Z",
  lessonId: "lesson-1",
  reportId: "report-1",
  status: "snapshot_saved",
  studentId: "student-1",
  title: "safe title"
};
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/report-snapshots", { snapshot: reportSnapshot }),
  { snapshot: reportSnapshot }
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/report-snapshots", {
    recovered: false,
    reportSnapshots: [reportSnapshot],
    snapshot: reportSnapshot,
    source: "supabase",
    verified: true
  }),
  {
    recovered: false,
    reportSnapshots: [reportSnapshot],
    snapshot: reportSnapshot,
    source: "supabase",
    verified: true
  }
);
const resourceMaterial = {
  createdAt: "2026-08-05T00:00:00.000Z",
  materialId: "resource-1",
  title: "safe resource"
};
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/resource-materials", { material: resourceMaterial }),
  { material: resourceMaterial }
);
assert.throws(
  () => parseVersionedWriteRequest("POST", "/api/resource-materials", resourceMaterial),
  (error) => error.field === "createdAt" && error.statusCode === 400
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/resource-materials", {
    material: { ...resourceMaterial, updatedAt: "2026-08-05T00:00:01.000Z" },
    recoveredDraft: true,
    source: "supabase",
    verified: true
  }),
  {
    material: { ...resourceMaterial, updatedAt: "2026-08-05T00:00:01.000Z" },
    recoveredDraft: true,
    source: "supabase",
    verified: true
  }
);
const resourceFilePayload = {
  file: { dataUrl: "data:application/pdf;base64,c2FmZQ==", fileName: "safe.pdf" },
  material: resourceMaterial
};
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/resource-material-files", resourceFilePayload),
  resourceFilePayload
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/resource-material-files", {
    fileReference: "resource-storage://resource-materials/safe.pdf",
    material: { ...resourceMaterial, updatedAt: "2026-08-05T00:00:01.000Z" },
    previousFileCleanupFailed: false,
    source: "supabase",
    storagePath: "safe.pdf",
    verified: true
  }),
  {
    fileReference: "resource-storage://resource-materials/safe.pdf",
    material: { ...resourceMaterial, updatedAt: "2026-08-05T00:00:01.000Z" },
    previousFileCleanupFailed: false,
    source: "supabase",
    storagePath: "safe.pdf",
    verified: true
  }
);
assert.deepEqual(
  parseVersionedWriteRequest("DELETE", "/api/resource-material-files", { material: resourceMaterial }),
  { material: resourceMaterial }
);
assert.deepEqual(
  parseVersionedWriteResponse("DELETE", "/api/resource-material-files", {
    materialId: resourceMaterial.materialId,
    source: "supabase",
    storageDeleted: true,
    verified: true
  }),
  {
    materialId: resourceMaterial.materialId,
    source: "supabase",
    storageDeleted: true,
    verified: true
  }
);
const notificationJob = {
  notificationJobId: "notification-safe-1",
  notificationType: "notice_parent",
  status: "draft"
};
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/notification-jobs", { notificationJob }),
  { notificationJob }
);
assert.throws(
  () => parseVersionedWriteRequest("POST", "/api/notification-jobs", notificationJob),
  (error) => error.field === "notificationJobId" && error.statusCode === 400
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/notification-jobs", {
    notificationJob,
    source: "supabase"
  }),
  { notificationJob, source: "supabase" }
);
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/notification-jobs/reserve", {
    forceDryRun: true,
    notificationJob,
    reason: " safe reserve "
  }),
  { forceDryRun: true, notificationJob, reason: "safe reserve" }
);
assert.throws(
  () => parseVersionedWriteRequest("POST", "/api/notification-jobs/reserve", notificationJob),
  (error) => error.field === "notificationJobId" && error.statusCode === 400
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/notification-jobs/reserve", {
    notificationJob,
    reserved: false,
    reused: true,
    source: "supabase"
  }),
  { notificationJob, reserved: false, source: "supabase" }
);
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/notification-jobs/cancel", {
    cancelSolapi: false,
    notificationJobId: " cancel-safe-1 ",
    reason: " safe cancel "
  }),
  { cancelSolapi: false, notificationJobId: "cancel-safe-1", reason: "safe cancel" }
);
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/notification-jobs/cancel", {
    id: "legacy-cancel-safe-1"
  }),
  { notificationJobId: "legacy-cancel-safe-1" }
);
assert.throws(
  () => parseVersionedWriteRequest("POST", "/api/notification-jobs/cancel", {
    id: "legacy-cancel-safe-1",
    notificationJobId: "cancel-safe-1"
  }),
  (error) => error.field === "notificationJobId" && error.statusCode === 400
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/notification-jobs/cancel", {
    notificationJob: { ...notificationJob, status: "canceled" },
    solapiCancellation: null,
    source: "supabase"
  }),
  { notificationJob: { ...notificationJob, status: "canceled" }, source: "supabase" }
);
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/notification-jobs/reconcile-solapi", {
    lessonId: " lesson-safe-1 ",
    notificationJobIds: ["notification-safe-1"]
  }),
  {
    date: "",
    lessonId: "lesson-safe-1",
    limit: 500,
    notificationJobIds: ["notification-safe-1"],
    scheduledFrom: "",
    scheduledTo: ""
  }
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/notification-jobs/reconcile-solapi", {
    checked: [{ notificationJobId: "notification-safe-1", status: "sent" }],
    checkedCount: 1,
    notificationJobs: [{ ...notificationJob, status: "sent" }],
    records: [],
    source: "solapi",
    updatedCount: 1
  }),
  {
    checked: [{ notificationJobId: "notification-safe-1", status: "sent" }],
    checkedCount: 1,
    notificationJobs: [{ ...notificationJob, status: "sent" }],
    records: [],
    source: "solapi",
    updatedCount: 1
  }
);
assert.throws(
  () => parseVersionedWriteRequest("POST", "/api/notification-jobs/reconcile-solapi", {
    notificationJobIds: "notification-safe-1"
  }),
  (error) => error.field === "notificationJobIds" && error.statusCode === 400
);
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/notification-jobs/reserve-bulk", {
    forceDryRun: true,
    jobs: [notificationJob],
    reason: " safe bulk reserve "
  }),
  {
    concurrency: 4,
    forceDryRun: true,
    notificationJobs: [notificationJob],
    reason: "safe bulk reserve"
  }
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/notification-jobs/reserve-bulk", {
    failedCount: 0,
    notificationJobs: [notificationJob],
    reservedCount: 0,
    results: [{ notificationJob, reserved: false, source: "supabase" }],
    reusedCount: 1
  }),
  {
    failedCount: 0,
    notificationJobs: [notificationJob],
    reservedCount: 0,
    results: [{ notificationJob, reserved: false, source: "supabase" }],
    reusedCount: 1
  }
);
assert.throws(
  () => parseVersionedWriteRequest("POST", "/api/notification-jobs/reserve-bulk", {
    jobs: [],
    notificationJobs: []
  }),
  (error) => error.field === "notificationJobs" && error.statusCode === 400
);
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/notification-jobs/readiness-check", {
    now: " 2099-08-05T11:45:00.000Z ",
    windowMinutes: 60
  }),
  {
    notifySlack: false,
    now: "2099-08-05T11:45:00.000Z",
    windowMinutes: 60
  }
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/notification-jobs/readiness-check", {
    checkedCount: 1,
    issueCount: 1,
    issues: [{ notificationJobId: "notification-safe-1", missing: ["공지 본문"] }],
    slack: null,
    source: "supabase",
    windowMinutes: 60
  }),
  {
    checkedCount: 1,
    issueCount: 1,
    issues: [{ notificationJobId: "notification-safe-1", missing: ["공지 본문"] }],
    source: "supabase",
    windowMinutes: 60
  }
);
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/notification-jobs/dispatch-due", {
    limit: 7
  }),
  {
    forceDryRun: false,
    limit: 7
  }
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/notification-jobs/dispatch-due", {
    automaticSolapiReconcile: { checkedCount: 0, updatedCount: 0 },
    dryRun: true,
    ok: true,
    processed: [],
    processedCount: 0,
    source: "supabase"
  }),
  {
    automaticSolapiReconcile: { checkedCount: 0, updatedCount: 0 },
    dryRun: true,
    processed: [],
    processedCount: 0,
    source: "supabase"
  }
);
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/exam-analysis-runs", {
    run: { analysisRunId: "exam-run-safe-1", title: "안전 시험분석" }
  }),
  {
    analysisRun: { analysisRunId: "exam-run-safe-1", title: "안전 시험분석" }
  }
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/exam-analysis-runs", {
    analysisRun: { analysisRunId: "exam-run-safe-1", title: "안전 시험분석" },
    ok: true,
    source: "supabase"
  }),
  {
    analysisRun: { analysisRunId: "exam-run-safe-1", title: "안전 시험분석" },
    source: "supabase"
  }
);
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/exam-analysis-runs/confirm-question-count", {
    analysisRunId: " exam-run-safe-1 ",
    questionCount: 24
  }),
  {
    analysisRunId: "exam-run-safe-1",
    confirmedBy: "teacher",
    detectedQuestionConfidence: 1,
    detectedQuestionEvidence: [],
    missingQuestionNumbers: [],
    questionCount: 24
  }
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/exam-analysis-runs/confirm-question-count", {
    analysisRun: { analysisRunId: "exam-run-safe-1", confirmedQuestionCount: 24 },
    events: [{ eventType: "question_count_confirmed" }],
    insertedQuestionCount: 24,
    ok: true,
    questions: Array.from({ length: 24 }),
    source: "supabase"
  }),
  {
    analysisRun: { analysisRunId: "exam-run-safe-1", confirmedQuestionCount: 24 },
    events: [{ eventType: "question_count_confirmed" }],
    insertedQuestionCount: 24,
    questions: Array.from({ length: 24 }),
    source: "supabase"
  }
);
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/exam-analysis-runs/save-question-reviews", {
    analysisRunId: " exam-run-safe-1 ",
    reviews: [{ questionNumber: 1, reviewNote: "직접 검수" }]
  }),
  {
    analysisRunId: "exam-run-safe-1",
    reviews: [{ questionNumber: 1, reviewNote: "직접 검수" }]
  }
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/exam-analysis-runs/save-question-reviews", {
    analysisRun: { analysisRunId: "exam-run-safe-1" },
    events: [{ eventType: "question_teacher_review_saved" }],
    ok: true,
    questions: [{ questionNumber: 1, rowStatus: "teacher_edited" }],
    source: "supabase",
    teacherReview: { confirmedCount: 0, reviewedCount: 1, totalQuestionCount: 1 }
  }),
  {
    analysisRun: { analysisRunId: "exam-run-safe-1" },
    events: [{ eventType: "question_teacher_review_saved" }],
    questions: [{ questionNumber: 1, rowStatus: "teacher_edited" }],
    source: "supabase",
    teacherReview: { confirmedCount: 0, reviewedCount: 1, totalQuestionCount: 1 }
  }
);
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/exam-analysis-runs/save-prompt-studio", {
    analysisRunId: " exam-run-safe-1 ",
    promptStudioDraft: { revision: 0, roleInputs: {} }
  }),
  {
    analysisRunId: "exam-run-safe-1",
    expectedRevision: 0,
    promptStudioDraft: { revision: 0, roleInputs: {} }
  }
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/exam-analysis-runs/save-prompt-studio", {
    analysisRun: { analysisRunId: "exam-run-safe-1" },
    ok: true,
    promptStudioDraft: { revision: 1 },
    saveVerification: { revision: 1, verified: true },
    source: "supabase"
  }),
  {
    analysisRun: { analysisRunId: "exam-run-safe-1" },
    promptStudioDraft: { revision: 1 },
    saveVerification: { revision: 1, verified: true },
    source: "supabase"
  }
);
assert.deepEqual(
  parseVersionedWriteRequest("POST", "/api/exam-analysis-runs/save-output-drafts", {
    analysisRunId: " exam-run-safe-1 ",
    blogTeacherDraftEdited: true,
    blogTeacherDraft: "선생님 블로그 수정본",
    outputInputs: { oneLineReview: "한 줄 총평" }
  }),
  {
    analysisRunId: "exam-run-safe-1",
    blogTeacherDraft: "선생님 블로그 수정본",
    blogTeacherDraftEdited: true,
    instagramTeacherDraft: "",
    instagramTeacherDraftEdited: false,
    outputInputs: { oneLineReview: "한 줄 총평" }
  }
);
assert.deepEqual(
  parseVersionedWriteResponse("POST", "/api/exam-analysis-runs/save-output-drafts", {
    aiJobs: [],
    analysisRun: { analysisRunId: "exam-run-safe-1", auditSummary: { outputDrafts: {} } },
    events: [{ eventType: "exam_analysis_output_draft_saved" }],
    ok: true,
    questions: [{ questionNumber: 1 }],
    sources: [],
    source: "supabase"
  }),
  {
    aiJobs: [],
    analysisRun: { analysisRunId: "exam-run-safe-1", auditSummary: { outputDrafts: {} } },
    events: [{ eventType: "exam_analysis_output_draft_saved" }],
    questions: [{ questionNumber: 1 }],
    sources: [],
    source: "supabase"
  }
);
assert.deepEqual(response, {
  auditId: "supplement-audit",
  source: "supabase",
  verified: true
});

assert.equal(
  getVersionedWriteRouteContract("POST", "/api/school-calendar/derived-save")?.domain,
  "schoolCalendar"
);
assert.equal(getVersionedWriteRouteContract("GET", "/api/lesson-journal/rows/save"), null);

for (const [payload, expectedField] of [
  [null, ""],
  [{ auditId: "audit", recordChanges: {} }, "recordChanges"],
  [{ auditId: "audit", recordChanges: [], unexpected: true }, "unexpected"]
]) {
  assert.throws(
    () => parseVersionedWriteRequest("POST", "/api/lesson-journal/rows/save", payload),
    (error) => (
      error.name === "ApiPayloadContractError" &&
      error.code === "INVALID_API_PAYLOAD" &&
      error.statusCode === 400 &&
      error.field === expectedField
    )
  );
}

assert.throws(
  () => parseVersionedWriteRequest("POST", "/api/supplement-schedules/save", {
    auditId: "",
    lessonChange: {},
    taskChange: {}
  }),
  (error) => error.field === "auditId" && error.statusCode === 400
);
assert.throws(
  () => parseVersionedWriteResponse("POST", "/api/class-rosters/save", {
    source: "supabase",
    verified: "true"
  }),
  (error) => error.field === "verified" && error.statusCode === 400
);
assert.throws(
  () => parseVersionedWriteRequest("POST", "/api/not-in-inventory", {}),
  /등록되지 않은 versioned write route/
);
assert.throws(
  () => parseVersionedWriteRequest("POST", "/api/lesson-journal/makeup-tasks/save", {
    makeupTasks: [],
    tasks: []
  }),
  (error) => error.field === "makeupTasks" && error.statusCode === 400
);
assert.throws(
  () => defineApiPayloadContract({
    fields: {
      canonical: { aliases: ["shared"], type: "string" },
      other: { aliases: ["shared"], type: "string" }
    },
    name: "duplicate alias"
  }),
  /field\/alias가 중복/
);

console.log("versioned write route contracts passed · 24 routes · canonical keys and declared legacy alias only");
