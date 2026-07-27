import assert from "node:assert/strict";
import { deleteExamPrepRowWithAudit } from "../api/domain/examPrepDeletion.js";
import {
  executeExamPrepDeleteOrchestration
} from "../src/domains/exams/examPrepDeleteOrchestration.js";

const originalRows = [
  { examPrepId: "REF-GATE-14C3-TARGET", schoolName: "가상학교" },
  { examPrepId: "REF-GATE-14C3-CONTROL", schoolName: "통제학교" }
];
const originalLessons = [
  { lessonId: "lesson-target", lessonType: "examPrep", sourceLabel: "TARGET" },
  { lessonId: "lesson-control", lessonType: "examPrep", sourceLabel: "CONTROL" },
  { lessonId: "lesson-regular", lessonType: "regular", sourceLabel: "REGULAR" }
];
const plan = {
  lessonIdsToDelete: ["lesson-target"],
  lessonsToSave: []
};

function clone(value) {
  return structuredClone(value);
}

function createClientFixture() {
  const state = {
    examPrepRows: clone(originalRows),
    lessons: clone(originalLessons)
  };
  return {
    state,
    readState: async () => clone(state),
    restoreRows: async (rows) => {
      rows.forEach((row) => {
        const index = state.examPrepRows.findIndex((item) => item.examPrepId === row.examPrepId);
        if (index >= 0) state.examPrepRows[index] = clone(row);
        else state.examPrepRows.push(clone(row));
      });
    },
    restoreLessons: async (lessons) => {
      lessons.forEach((lesson) => {
        const index = state.lessons.findIndex((item) => item.lessonId === lesson.lessonId);
        if (index >= 0) state.lessons[index] = clone(lesson);
        else state.lessons.push(clone(lesson));
      });
    }
  };
}

{
  const fixture = createClientFixture();
  const calls = [];
  const result = await executeExamPrepDeleteOrchestration({
    auditId: "audit-success",
    examPrepId: "REF-GATE-14C3-TARGET",
    originalRows,
    originalLessons,
    plan,
    deleteRow: async ({ examPrepId }) => {
      calls.push(`row:${examPrepId}`);
      fixture.state.examPrepRows = fixture.state.examPrepRows
        .filter((row) => row.examPrepId !== examPrepId);
      return { deletedExamPrepRowIds: [examPrepId] };
    },
    applyLessonPlan: async ({ plan: nextPlan }) => {
      calls.push(`lessons:${nextPlan.lessonIdsToDelete.join(",")}`);
      fixture.state.lessons = fixture.state.lessons
        .filter((lesson) => !nextPlan.lessonIdsToDelete.includes(lesson.lessonId));
    },
    readState: fixture.readState,
    restoreRows: fixture.restoreRows,
    restoreLessons: fixture.restoreLessons
  });
  assert.deepEqual(calls, [
    "row:REF-GATE-14C3-TARGET",
    "lessons:lesson-target"
  ]);
  assert.equal(result.verification.ok, true);
  assert.deepEqual(
    fixture.state.examPrepRows.map((row) => row.examPrepId),
    ["REF-GATE-14C3-CONTROL"]
  );
  assert.deepEqual(
    fixture.state.lessons.map((lesson) => lesson.lessonId),
    ["lesson-control", "lesson-regular"]
  );
}

{
  const fixture = createClientFixture();
  let lessonMutationCalled = false;
  await assert.rejects(
    executeExamPrepDeleteOrchestration({
      auditId: "audit-row-failure",
      examPrepId: "REF-GATE-14C3-TARGET",
      originalRows,
      originalLessons,
      plan,
      deleteRow: async () => {
        fixture.state.examPrepRows = [];
        throw new Error("가상 row DELETE 실패");
      },
      applyLessonPlan: async () => {
        lessonMutationCalled = true;
      },
      readState: fixture.readState,
      restoreRows: fixture.restoreRows,
      restoreLessons: fixture.restoreLessons
    }),
    (error) => {
      assert.equal(error.audit.failureStage, "delete-row");
      assert.equal(error.audit.rollback.verified, true);
      assert.deepEqual(
        new Set(error.audit.rollback.restoredRowIds),
        new Set(["REF-GATE-14C3-TARGET", "REF-GATE-14C3-CONTROL"])
      );
      return true;
    }
  );
  assert.equal(lessonMutationCalled, false);
  assert.deepEqual(
    new Set(fixture.state.examPrepRows.map((row) => row.examPrepId)),
    new Set(originalRows.map((row) => row.examPrepId))
  );
  assert.deepEqual(fixture.state.lessons, originalLessons);
}

{
  const fixture = createClientFixture();
  await assert.rejects(
    executeExamPrepDeleteOrchestration({
      auditId: "audit-lesson-failure",
      examPrepId: "REF-GATE-14C3-TARGET",
      originalRows,
      originalLessons,
      plan,
      deleteRow: async ({ examPrepId }) => {
        fixture.state.examPrepRows = fixture.state.examPrepRows
          .filter((row) => row.examPrepId !== examPrepId);
        return { deletedExamPrepRowIds: [examPrepId] };
      },
      applyLessonPlan: async () => {
        fixture.state.lessons = [];
        throw new Error("가상 lesson DELETE 실패");
      },
      readState: fixture.readState,
      restoreRows: fixture.restoreRows,
      restoreLessons: fixture.restoreLessons
    }),
    (error) => {
      assert.equal(error.audit.failureStage, "apply-lessons");
      assert.equal(error.audit.rollback.verified, true);
      assert.deepEqual(
        new Set(error.audit.rollback.restoredLessonIds),
        new Set(["lesson-target", "lesson-control", "lesson-regular"])
      );
      return true;
    }
  );
  assert.deepEqual(
    new Set(fixture.state.examPrepRows.map((row) => row.examPrepId)),
    new Set(originalRows.map((row) => row.examPrepId))
  );
  assert.deepEqual(
    new Set(fixture.state.lessons.map((lesson) => lesson.lessonId)),
    new Set(originalLessons.map((lesson) => lesson.lessonId))
  );
}

function createServerFixture() {
  const state = {
    rows: [
      { exam_prep_id: "REF-GATE-14C3-TARGET", school_name: "가상학교" },
      { exam_prep_id: "REF-GATE-14C3-CONTROL", school_name: "통제학교" }
    ]
  };
  return {
    state,
    listRows: async () => clone(state.rows),
    restoreRows: async (rows) => {
      rows.forEach((row) => {
        const index = state.rows.findIndex((item) => item.exam_prep_id === row.exam_prep_id);
        if (index >= 0) state.rows[index] = clone(row);
        else state.rows.push(clone(row));
      });
      return clone(rows);
    }
  };
}

{
  const fixture = createServerFixture();
  const result = await deleteExamPrepRowWithAudit({
    auditId: "server-success",
    examPrepId: "REF-GATE-14C3-TARGET",
    listRows: fixture.listRows,
    deleteTargetRow: async (targetId) => {
      const deleted = fixture.state.rows.filter((row) => row.exam_prep_id === targetId);
      fixture.state.rows = fixture.state.rows.filter((row) => row.exam_prep_id !== targetId);
      return deleted;
    },
    restoreRows: fixture.restoreRows
  });
  assert.deepEqual(result.deletedExamPrepRowIds, ["REF-GATE-14C3-TARGET"]);
  assert.deepEqual(
    fixture.state.rows.map((row) => row.exam_prep_id),
    ["REF-GATE-14C3-CONTROL"]
  );
}

{
  const fixture = createServerFixture();
  await assert.rejects(
    deleteExamPrepRowWithAudit({
      auditId: "server-broad-delete",
      examPrepId: "REF-GATE-14C3-TARGET",
      listRows: fixture.listRows,
      deleteTargetRow: async () => {
        const deleted = clone(fixture.state.rows);
        fixture.state.rows = [];
        return deleted;
      },
      restoreRows: fixture.restoreRows
    }),
    (error) => {
      assert.deepEqual(
        new Set(error.audit.deletedRowIds),
        new Set(["REF-GATE-14C3-TARGET", "REF-GATE-14C3-CONTROL"])
      );
      assert.equal(error.audit.rollback.verified, true);
      return true;
    }
  );
  assert.deepEqual(
    new Set(fixture.state.rows.map((row) => row.exam_prep_id)),
    new Set(["REF-GATE-14C3-TARGET", "REF-GATE-14C3-CONTROL"])
  );
}

{
  const fixture = createServerFixture();
  await assert.rejects(
    deleteExamPrepRowWithAudit({
      auditId: "server-uncertain-delete",
      examPrepId: "REF-GATE-14C3-TARGET",
      listRows: fixture.listRows,
      deleteTargetRow: async (targetId) => {
        fixture.state.rows = fixture.state.rows.filter((row) => row.exam_prep_id !== targetId);
        throw new Error("가상 Supabase 응답 유실");
      },
      restoreRows: fixture.restoreRows
    }),
    (error) => {
      assert.equal(error.audit.failureStage, "delete-target");
      assert.equal(error.audit.rollback.verified, true);
      return true;
    }
  );
  assert.deepEqual(
    new Set(fixture.state.rows.map((row) => row.exam_prep_id)),
    new Set(["REF-GATE-14C3-TARGET", "REF-GATE-14C3-CONTROL"])
  );
}

console.log("exam prep delete orchestration fixtures passed");
