import assert from "node:assert/strict";
import {
  applyExamPrepLessonReconcilePlan,
  createExamPrepLessonReconcilePlan
} from "../src/domains/exams/examPrepLessonReconcilePlan.js";

const buildCandidates = () => [
  {
    generatedKey: "generated:keep",
    lesson: {
      lessonId: "candidate-keep",
      identityKeys: ["identity:keep"],
      isExamPrep: true,
      sourceLabel: "변경된 범위"
    }
  },
  {
    generatedKey: "generated:new",
    lesson: {
      lessonId: "candidate-new",
      identityKeys: ["identity:new"],
      isExamPrep: true,
      sourceLabel: "새 후보"
    }
  },
  {
    generatedKey: "generated:same",
    lesson: {
      lessonId: "lesson-same",
      identityKeys: ["identity:same"],
      isExamPrep: true,
      sourceLabel: "동일"
    }
  }
];
const getIdentityKeys = (lesson) => lesson.identityKeys ?? [];
const isExamPrepLesson = (lesson) => lesson.isExamPrep === true;
const lessons = [
  {
    lessonId: "persisted-keep",
    identityKeys: ["identity:keep"],
    isExamPrep: true,
    sourceLabel: "이전 범위"
  },
  {
    lessonId: "lesson-same",
    identityKeys: ["identity:same"],
    isExamPrep: true,
    sourceLabel: "동일"
  },
  {
    lessonId: "persisted-delete",
    identityKeys: ["identity:delete"],
    isExamPrep: true,
    sourceLabel: "삭제 대상"
  },
  {
    lessonId: "regular-lesson",
    identityKeys: ["identity:regular"],
    isExamPrep: false,
    sourceLabel: "정규 수업"
  }
];

const plan = createExamPrepLessonReconcilePlan({
  buildCandidates,
  getIdentityKeys,
  isExamPrepLesson,
  lessons,
  nextExamPrepRows: [{ examPrepId: "row-1" }]
});
assert.deepEqual(plan.lessonIdsToDelete, ["persisted-delete"]);
assert.deepEqual(plan.lessonsToSave, [
  {
    lessonId: "persisted-keep",
    identityKeys: ["identity:keep"],
    isExamPrep: true,
    sourceLabel: "변경된 범위"
  }
]);

const nextLessons = applyExamPrepLessonReconcilePlan(lessons, plan);
assert.equal(nextLessons.some((lesson) => lesson.lessonId === "persisted-delete"), false);
assert.equal(
  nextLessons.find((lesson) => lesson.lessonId === "persisted-keep")?.sourceLabel,
  "변경된 범위"
);
assert.equal(
  nextLessons.find((lesson) => lesson.lessonId === "regular-lesson")?.sourceLabel,
  "정규 수업"
);
assert.equal(nextLessons.some((lesson) => lesson.lessonId === "candidate-new"), false);
assert.notEqual(nextLessons, lessons);

const emptyPlan = createExamPrepLessonReconcilePlan({
  buildCandidates: () => [],
  getIdentityKeys,
  isExamPrepLesson,
  lessons: [{ lessonId: "regular-only", isExamPrep: false }],
  nextExamPrepRows: []
});
assert.deepEqual(emptyPlan, { lessonIdsToDelete: [], lessonsToSave: [] });

console.log("exam prep lesson reconcile plan fixtures passed");
