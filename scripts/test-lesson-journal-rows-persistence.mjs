import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { saveLessonJournalRowsAction } from "../src/domains/lessons/lessonJournalRowsSaveAction.js";
import {
  areLessonJournalRecordsEqual,
  createLessonJournalRowsSavePlan,
  rebaseLessonJournalHomeworkChange,
  rebaseLessonJournalRecordChange,
  verifyLessonJournalRowsSavePlan
} from "../src/domains/lessons/lessonJournalRowsPersistence.js";

const version0 = "2026-08-03T00:00:00.000Z";
const lesson = {
  lessonId: "safe-row-lesson",
  studentIds: ["safe-row-student-1", "safe-row-student-2"],
  updatedAt: version0
};
const homeworkBefore = {
  assignedDate: "2026-08-03",
  dueDate: "2026-08-05",
  homeworkId: "safe-row-homework",
  homeworkType: "next",
  lessonId: lesson.lessonId,
  status: "assigned",
  studentId: "safe-row-student-1",
  studentStatus: "not_started",
  teacherStatus: "unverified",
  title: "저장 전 숙제",
  updatedAt: version0
};
const homeworkAfter = { ...homeworkBefore, title: "저장 후 숙제", updatedAt: "draft-time" };
const recordBefore = {
  attendanceStatus: "present",
  checkInAt: "2026-08-03T07:00:00.000Z",
  checkInTime: "16:00",
  homeworkStatus: "not_started",
  lessonId: lesson.lessonId,
  lessonStudentRecordId: "safe-row-record",
  studentId: "safe-row-student-1",
  teacherComment: "저장 전 코멘트",
  updatedAt: version0
};
const recordAfter = { ...recordBefore, teacherComment: "저장 후 코멘트", updatedAt: "draft-time", updatedBy: "instructor_owner_001" };

assert.equal(areLessonJournalRecordsEqual(recordBefore, { ...recordBefore, updatedAt: "other" }), true);
assert.equal(areLessonJournalRecordsEqual(recordBefore, recordAfter), false);
const plan = createLessonJournalRowsSavePlan({
  changedHomeworks: [homeworkAfter],
  currentHomeworks: [homeworkBefore],
  currentRecords: [recordBefore],
  recordsToSave: [recordAfter]
});
assert.equal(plan.homeworkChanges[0].before.updatedAt, version0);
assert.equal(plan.recordChanges[0].before.updatedAt, version0);
const stableIdentityPlan = createLessonJournalRowsSavePlan({
  currentRecords: [recordBefore],
  recordsToSave: [{ ...recordAfter, lessonStudentRecordId: "derived-record-id" }]
});
assert.equal(stableIdentityPlan.recordChanges[0].after.lessonStudentRecordId, recordBefore.lessonStudentRecordId);
assert.equal(verifyLessonJournalRowsSavePlan(plan, {
  homeworks: [homeworkAfter],
  records: [recordAfter]
}).verified, true);

const homeworkRebase = rebaseLessonJournalHomeworkChange(plan.homeworkChanges[0], {
  ...homeworkBefore,
  teacherStatus: "verified",
  updatedAt: "2026-08-03T00:00:05.000Z"
});
assert.deepEqual(homeworkRebase.conflictingFields, []);
assert.equal(homeworkRebase.value.title, homeworkAfter.title);
assert.equal(homeworkRebase.value.teacherStatus, "verified");
const recordRebase = rebaseLessonJournalRecordChange(plan.recordChanges[0], {
  ...recordBefore,
  checkOutAt: "2026-08-03T09:00:00.000Z",
  checkOutTime: "18:00",
  updatedAt: "2026-08-03T00:00:05.000Z"
});
assert.deepEqual(recordRebase.conflictingFields, []);
assert.equal(recordRebase.value.teacherComment, recordAfter.teacherComment);
assert.equal(recordRebase.value.checkOutTime, "18:00");
assert.deepEqual(
  rebaseLessonJournalHomeworkChange(plan.homeworkChanges[0], {
    ...homeworkBefore,
    title: "다른 화면 제목",
    updatedAt: "2026-08-03T00:00:05.000Z"
  }).conflictingFields,
  ["title"]
);

let actionPayload;
await saveLessonJournalRowsAction({
  changedHomeworks: [homeworkAfter],
  currentHomeworks: [homeworkBefore],
  currentRecords: [recordBefore],
  recordsToSave: [recordAfter],
  request: async (path, payload, timeout) => {
    assert.equal(path, "/api/lesson-journal/rows/save");
    assert.equal(timeout, 30000);
    actionPayload = payload;
    return {
      auditId: payload.auditId,
      homeworks: [homeworkAfter],
      records: [recordAfter],
      source: "supabase",
      verified: true
    };
  }
});
assert.equal(actionPayload.recordChanges[0].before.updatedAt, version0);
assert.deepEqual(Object.keys(actionPayload).sort(), ["auditId", "homeworkChanges", "recordChanges"]);

await assert.rejects(
  saveLessonJournalRowsAction({
    changedHomeworks: [homeworkAfter],
    currentHomeworks: [homeworkBefore],
    currentRecords: [recordBefore],
    recordsToSave: [recordAfter],
    request: async () => ({
      auditId: "invalid-response",
      homeworks: [homeworkAfter],
      records: [recordAfter],
      source: "supabase",
      verified: "true"
    })
  }),
  (error) => error.code === "INVALID_API_PAYLOAD" && error.field === "verified"
);

const serverSource = await readFile(new URL("../api/server.js", import.meta.url), "utf8");
const routeStart = serverSource.indexOf('requestUrl.pathname === "/api/lesson-journal/rows/save"');
const routeEnd = serverSource.indexOf('requestUrl.pathname === "/api/exam-prep-rows"', routeStart);
const lessonJournalRowsRouteSource = serverSource.slice(routeStart, routeEnd);
assert.ok(routeStart >= 0 && routeEnd > routeStart);
assert.match(lessonJournalRowsRouteSource, /parseVersionedWriteRequest\(/);
assert.match(lessonJournalRowsRouteSource, /error\.field \? \{ field: error\.field \}/);
assert.match(
  lessonJournalRowsRouteSource,
  /error\.currentHomework \? \{ currentHomework: error\.currentHomework \}/
);

const originalEnv = {
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_URL: process.env.SUPABASE_URL
};
const originalFetch = globalThis.fetch;
process.env.SUPABASE_URL = "https://lesson-rows-fixture.supabase.test";
process.env.SUPABASE_ANON_KEY = "fixture-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "fixture-service-key";

function toHomeworkRow(homework) {
  return {
    assigned_date: homework.assignedDate || null,
    assignment_status: homework.assignmentStatus || null,
    checked_at: homework.checkedAt || null,
    due_date: homework.dueDate || null,
    homework_id: homework.homeworkId,
    homework_type: homework.homeworkType || "direct",
    incomplete_homework: homework.incompleteHomework || null,
    lesson_id: homework.lessonId || null,
    linked_from_date: homework.linkedFromDate || null,
    linked_from_lesson_id: homework.linkedFromLessonId || null,
    status: homework.status || null,
    student_id: homework.studentId,
    student_status: homework.studentStatus || "not_started",
    subject: homework.subject || null,
    teacher_status: homework.teacherStatus || "unverified",
    title: homework.title,
    total_problems: homework.totalProblems ?? null,
    updated_at: homework.updatedAt,
    verified_at: homework.verifiedAt || null
  };
}

function toRecordRow(record) {
  return {
    assignment_status: record.assignmentStatus || null,
    attendance_reason: record.attendanceReason || null,
    attendance_status: record.attendanceStatus || "pending",
    behavior_tag: record.behaviorTag || null,
    check_in_at: record.checkInAt || null,
    check_in_time: record.checkInTime || null,
    check_out_at: record.checkOutAt || null,
    check_out_time: record.checkOutTime || null,
    homework_followup_method: record.homeworkFollowupMethod || null,
    homework_followup_source_homework_id: record.homeworkFollowupSourceHomeworkId || null,
    homework_followup_text: record.homeworkFollowupText || null,
    homework_status: record.homeworkStatus || "not_started",
    incomplete_homework: record.incompleteHomework || null,
    late_minutes: record.lateMinutes || null,
    lesson_content: record.lessonContent || null,
    lesson_id: record.lessonId,
    lesson_material: record.lessonMaterial || null,
    lesson_student_record_id: record.lessonStudentRecordId,
    needs_makeup: Boolean(record.needsMakeup),
    needs_retest: Boolean(record.needsRetest),
    next_homework: record.nextHomework || null,
    notification_muted_parent: Boolean(record.notificationMutedParent),
    notification_muted_reason: record.notificationMutedReason || null,
    notification_muted_student: Boolean(record.notificationMutedStudent),
    prep_memo_checked_at: record.prepMemoCheckedAt || null,
    prep_memo_checked_source_date: record.prepMemoCheckedSourceDate || null,
    prep_memo_checked_source_record_id: record.prepMemoCheckedSourceRecordId || null,
    prep_parent_ai_status: record.prepParentAiStatus || null,
    prep_parent_notice: record.prepParentNotice || null,
    prep_parent_visible: Boolean(record.prepParentVisible),
    prep_student_ai_status: record.prepStudentAiStatus || null,
    prep_student_notice: record.prepStudentNotice || null,
    prep_student_visible: Boolean(record.prepStudentVisible),
    preparation_memo: record.preparationMemo || null,
    previous_homework: record.previousHomework || null,
    progress_note: record.lessonProgress || null,
    student_comment: record.studentComment || null,
    student_comment_ai_status: record.studentCommentAiStatus || null,
    student_comment_send_status: record.studentCommentSendStatus || null,
    student_id: record.studentId,
    teacher_comment: record.teacherComment || null,
    teacher_comment_ai_status: record.teacherCommentAiStatus || null,
    teacher_comment_send_status: record.teacherCommentSendStatus || null,
    updated_at: record.updatedAt
  };
}

let storedHomeworks;
let storedRecords;
let homeworkPatchCount;
let recordPatchCount;
let failNextRecordPatch;
let mutateHomeworkBeforeRecordFailure;

function resetFixture() {
  storedHomeworks = [toHomeworkRow(homeworkBefore)];
  storedRecords = [toRecordRow(recordBefore)];
  homeworkPatchCount = 0;
  recordPatchCount = 0;
  failNextRecordPatch = false;
  mutateHomeworkBeforeRecordFailure = false;
}

function getEq(searchParams, field) {
  return searchParams.get(field)?.replace(/^eq\./, "") ?? "";
}

function matchingRows(rows, requestUrl) {
  return rows.filter((row) => [...requestUrl.searchParams.entries()].every(([field, raw]) => {
    if (!["homework_id", "lesson_id", "student_id", "updated_at"].includes(field)) return true;
    return row[field] === raw.replace(/^eq\./, "");
  }));
}

globalThis.fetch = async (url, options = {}) => {
  const requestUrl = new URL(url);
  const table = requestUrl.pathname.split("/rest/v1/")[1];
  const method = options.method || "GET";
  if (method === "GET" && table === "lessons") {
    return Response.json([{ lesson_id: lesson.lessonId, student_ids: lesson.studentIds }]);
  }
  if (method === "GET" && table === "homeworks") return Response.json(matchingRows(storedHomeworks, requestUrl));
  if (method === "GET" && table === "lesson_student_records") return Response.json(matchingRows(storedRecords, requestUrl));
  if (method === "PATCH" && ["homeworks", "lesson_student_records"].includes(table)) {
    if (table === "lesson_student_records" && failNextRecordPatch) {
      failNextRecordPatch = false;
      if (mutateHomeworkBeforeRecordFailure) {
        storedHomeworks[0] = {
          ...storedHomeworks[0],
          title: "다른 화면의 후속 변경",
          updated_at: "2026-08-03T00:00:09.000Z"
        };
      }
      return new Response(JSON.stringify({ message: "forced record patch failure" }), { status: 409 });
    }
    const rows = table === "homeworks" ? storedHomeworks : storedRecords;
    const targets = matchingRows(rows, requestUrl);
    const body = JSON.parse(options.body || "{}");
    targets.forEach((target) => Object.assign(target, body));
    if (table === "homeworks") homeworkPatchCount += targets.length;
    else recordPatchCount += targets.length;
    return Response.json(targets);
  }
  if (method === "POST" && ["homeworks", "lesson_student_records"].includes(table)) {
    const body = JSON.parse(options.body || "[]");
    const rows = table === "homeworks" ? storedHomeworks : storedRecords;
    rows.push(...body);
    return Response.json(body);
  }
  if (method === "DELETE" && ["homeworks", "lesson_student_records"].includes(table)) {
    const rows = table === "homeworks" ? storedHomeworks : storedRecords;
    const deleted = matchingRows(rows, requestUrl);
    if (table === "homeworks") storedHomeworks = rows.filter((row) => !deleted.includes(row));
    else storedRecords = rows.filter((row) => !deleted.includes(row));
    return Response.json(deleted);
  }
  assert.fail(`unexpected Supabase fixture request: ${method} ${table} ${requestUrl.search}`);
};

try {
  const { saveLessonJournalRowsPlan } = await import("../api/routes/coreData.js");
  resetFixture();
  const saved = await saveLessonJournalRowsPlan({ auditId: "rows-save", ...plan });
  assert.equal(saved.verified, true);
  assert.equal(saved.homeworks[0].title, homeworkAfter.title);
  assert.equal(saved.records[0].teacherComment, recordAfter.teacherComment);
  assert.equal(homeworkPatchCount, 1);
  assert.equal(recordPatchCount, 1);
  await saveLessonJournalRowsPlan({ auditId: "rows-retry-after-unknown-response", ...plan });
  assert.equal(homeworkPatchCount, 1, "same desired homework retry must be idempotent");
  assert.equal(recordPatchCount, 1, "same desired record retry must be idempotent");

  resetFixture();
  storedHomeworks[0] = {
    ...storedHomeworks[0],
    teacher_status: "verified",
    updated_at: "2026-08-03T00:00:05.000Z"
  };
  const homeworkRebasedSave = await saveLessonJournalRowsPlan({ auditId: "rows-homework-nonoverlap-rebase", ...plan });
  assert.equal(homeworkRebasedSave.verified, true);
  assert.equal(storedHomeworks[0].title, homeworkAfter.title);
  assert.equal(storedHomeworks[0].teacher_status, "verified", "latest non-overlapping homework field must survive");
  await saveLessonJournalRowsPlan({ auditId: "rows-homework-nonoverlap-retry", ...plan });
  assert.equal(homeworkPatchCount, 1, "rebased homework retry must be idempotent");

  resetFixture();
  storedRecords[0] = {
    ...storedRecords[0],
    check_out_at: "2026-08-03T09:00:00.000Z",
    check_out_time: "18:00",
    updated_at: "2026-08-03T00:00:05.000Z"
  };
  const recordRebasedSave = await saveLessonJournalRowsPlan({ auditId: "rows-record-nonoverlap-rebase", ...plan });
  assert.equal(recordRebasedSave.verified, true);
  assert.equal(storedRecords[0].teacher_comment, recordAfter.teacherComment);
  assert.equal(storedRecords[0].check_out_time, "18:00", "latest non-overlapping attendance field must survive");
  await saveLessonJournalRowsPlan({ auditId: "rows-record-nonoverlap-retry", ...plan });
  assert.equal(recordPatchCount, 1, "rebased record retry must be idempotent");

  resetFixture();
  failNextRecordPatch = true;
  await assert.rejects(
    saveLessonJournalRowsPlan({ auditId: "rows-rollback", ...plan }),
    (error) => error.audit?.rollback?.verified === true
  );
  assert.equal(storedHomeworks[0].title, homeworkBefore.title);
  assert.equal(storedHomeworks[0].updated_at, version0);
  assert.equal(storedRecords[0].teacher_comment, recordBefore.teacherComment);

  resetFixture();
  storedRecords[0] = { ...storedRecords[0], teacher_comment: "다른 화면 변경", updated_at: "2026-08-03T00:00:05.000Z" };
  await assert.rejects(
    saveLessonJournalRowsPlan({ auditId: "rows-stale", ...plan }),
    (error) => error.code === "LESSON_JOURNAL_ROWS_SAVE_FAILED" && error.audit?.rollback?.verified === true
  );
  assert.equal(storedHomeworks[0].title, homeworkBefore.title, "record conflict must roll homework back");
  assert.equal(storedRecords[0].teacher_comment, "다른 화면 변경", "stale save must not overwrite current record");

  resetFixture();
  failNextRecordPatch = true;
  mutateHomeworkBeforeRecordFailure = true;
  await assert.rejects(
    saveLessonJournalRowsPlan({ auditId: "rows-concurrent-rollback", ...plan }),
    (error) => error.code === "LESSON_JOURNAL_ROWS_PARTIAL_FAILURE" && error.audit?.rollback?.verified === false
  );
  assert.equal(storedHomeworks[0].title, "다른 화면의 후속 변경", "rollback must not overwrite a newer homework version");
} finally {
  globalThis.fetch = originalFetch;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

console.log("lesson journal record/homework CAS, retry, rollback, and concurrent protection fixtures passed");
