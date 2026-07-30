import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { buildGeneratedLessonPlan } from "../src/domains/lessons/generatedLessonPlanBuilder.js";

function normalizeExistingGeneratedLessonControls(
  controls = {}
) {
  return {
    suppressedKeys: Array.isArray(
      controls.suppressedKeys
    )
      ? controls.suppressedKeys
      : [],
    manualOverrideKeys: Array.isArray(
      controls.manualOverrideKeys
    )
      ? controls.manualOverrideKeys
      : []
  };
}

function buildExistingExamCalendarEvents(
  rows = {}
) {
  return rows.events ?? [];
}

function createExistingPreExamLessonFromSchoolEvent(
  event = {}
) {
  return event.generatedLesson ?? null;
}

function createExistingPreExamGeneratedKey(
  event = {}
) {
  return event.generatedKey ?? "";
}

function buildExistingExamPrepLessonCandidates(
  rows = {}
) {
  return rows.examPrepCandidates ?? [];
}

function getExistingGeneratedLessonIdentityKeys(
  lesson = {}
) {
  return Array.isArray(lesson.identityKeys)
    ? lesson.identityKeys
    : [];
}

function areExistingGeneratedLessonPersistedFieldsEqual(
  candidate = {},
  existing = {}
) {
  return (
    candidate.persistedSignature ===
    existing.persistedSignature
  );
}

function buildExistingGeneratedLessonPlan({
  rows = [],
  lessons = [],
  students = [],
  controls = {}
}) {
  const safeControls =
    normalizeExistingGeneratedLessonControls(
      controls
    );
  const candidates = [];
  buildExistingExamCalendarEvents(rows)
    .filter(
      (event) => event.type === "mathExam"
    )
    .forEach((event) => {
      const lesson =
        createExistingPreExamLessonFromSchoolEvent(
          event,
          students
        );
      if (!lesson) return;
      const generatedKey =
        createExistingPreExamGeneratedKey(event);
      candidates.push({
        generatedKey,
        label:
          `${event.schoolName || "학교 미입력"} ${
            event.grade || ""
          } ${
            event.examSubject || "수학"
          } 직전수업`,
        reason: `${event.date} 수학시험 전날`,
        lesson: {
          ...lesson,
          generatedKey
        }
      });
    });
  candidates.push(
    ...buildExistingExamPrepLessonCandidates(
      rows
    )
  );

  return candidates.map((candidate) => {
    const candidateKeys = new Set(
      [
        candidate.generatedKey,
        ...getExistingGeneratedLessonIdentityKeys(
          candidate.lesson
        )
      ].filter(Boolean)
    );
    const existing = lessons.find(
      (lesson) =>
        getExistingGeneratedLessonIdentityKeys(
          lesson
        ).some((key) =>
          candidateKeys.has(key)
        ) ||
        lesson.sourceSchoolEventId ===
          candidate.lesson
            .sourceSchoolEventId ||
        lesson.lessonId ===
          candidate.lesson.lessonId
    );
    const controlKeys = [
      candidate.generatedKey,
      ...candidateKeys
    ].filter(Boolean);
    const suppressed = controlKeys.some(
      (key) =>
        safeControls.suppressedKeys.includes(
          key
        )
    );
    const manualOverride =
      existing &&
      controlKeys.some((key) =>
        safeControls.manualOverrideKeys.includes(
          key
        )
      );
    const needsUpdate =
      existing &&
      !areExistingGeneratedLessonPersistedFieldsEqual(
        candidate.lesson,
        existing
      );
    const status = suppressed
      ? "skipped"
      : manualOverride
        ? "protected"
        : !existing
          ? "create"
          : needsUpdate
            ? "update"
            : "synced";
    return {
      ...candidate,
      existingLesson: existing,
      status,
      lesson:
        existing && status === "update"
          ? {
              ...candidate.lesson,
              lessonId: existing.lessonId
            }
          : candidate.lesson
    };
  });
}

function createCandidate(
  key,
  {
    identityKeys = [`identity:${key}`],
    lessonId = `candidate_${key}`,
    persistedSignature = `signature:${key}`,
    sourceSchoolEventId = `source:${key}`
  } = {}
) {
  return {
    generatedKey: `generated:${key}`,
    label: `candidate ${key}`,
    reason: `reason ${key}`,
    lesson: {
      lessonId,
      sourceSchoolEventId,
      identityKeys,
      persistedSignature
    }
  };
}

const rows = {
  events: [
    {
      type: "schoolHoliday",
      generatedKey:
        "generated:CONTROL_NON_MATH"
    },
    {
      type: "mathExam",
      schoolName: "가상고",
      grade: "고2",
      examSubject: "미적분",
      date: "2026-08-05",
      generatedKey:
        "generated:pre_exam:create",
      generatedLesson: {
        lessonId: "candidate_pre_exam",
        sourceSchoolEventId:
          "source:pre_exam",
        identityKeys: [
          "identity:pre_exam:create"
        ],
        persistedSignature:
          "signature:pre_exam"
      }
    },
    {
      type: "mathExam",
      schoolName: "CONTROL_NULL",
      date: "2026-08-06",
      generatedKey:
        "generated:CONTROL_NULL",
      generatedLesson: null
    }
  ],
  examPrepCandidates: [
    createCandidate("create"),
    createCandidate("synced"),
    createCandidate("update", {
      identityKeys: [
        "identity:update:candidate"
      ],
      sourceSchoolEventId:
        "source:update:shared"
    }),
    createCandidate("skipped", {
      identityKeys: [
        "identity:skipped:control"
      ]
    }),
    createCandidate("protected", {
      identityKeys: [
        "identity:protected:control"
      ]
    }),
    createCandidate("lesson_id", {
      identityKeys: [],
      lessonId: "shared_lesson_id",
      sourceSchoolEventId:
        "source:lesson_id:candidate"
    }),
    createCandidate("priority", {
      identityKeys: [
        "identity:priority:control"
      ]
    })
  ]
};
const lessons = [
  {
    lessonId: "persisted_synced",
    sourceSchoolEventId:
      "source:synced:persisted",
    identityKeys: ["identity:synced"],
    persistedSignature:
      "signature:synced"
  },
  {
    lessonId: "persisted_update",
    sourceSchoolEventId:
      "source:update:shared",
    identityKeys: [
      "identity:update:persisted"
    ],
    persistedSignature:
      "signature:update:old"
  },
  {
    lessonId: "persisted_protected",
    sourceSchoolEventId:
      "source:protected:persisted",
    identityKeys: [
      "identity:protected:control"
    ],
    persistedSignature:
      "signature:protected:old"
  },
  {
    lessonId: "shared_lesson_id",
    sourceSchoolEventId:
      "source:lesson_id:persisted",
    identityKeys: [],
    persistedSignature:
      "signature:lesson_id"
  },
  {
    lessonId: "persisted_priority",
    sourceSchoolEventId:
      "source:priority:persisted",
    identityKeys: [
      "identity:priority:control"
    ],
    persistedSignature:
      "signature:priority:old"
  }
];
const students = [
  {
    studentId: "student_VIRTUAL"
  }
];
const controls = {
  suppressedKeys: [
    "identity:skipped:control",
    "identity:priority:control"
  ],
  manualOverrideKeys: [
    "identity:protected:control",
    "identity:priority:control"
  ]
};
const inputSnapshot = structuredClone({
  rows,
  lessons,
  students,
  controls
});

const oraclePlan = buildExistingGeneratedLessonPlan({
  rows,
  lessons,
  students,
  controls
});
const plan = buildGeneratedLessonPlan({
  rows,
  lessons,
  students,
  controls
}, {
  normalizeGeneratedLessonControls:
    normalizeExistingGeneratedLessonControls,
  buildExamCalendarEvents:
    buildExistingExamCalendarEvents,
  createPreExamLessonFromSchoolEvent:
    createExistingPreExamLessonFromSchoolEvent,
  createPreExamGeneratedKey:
    createExistingPreExamGeneratedKey,
  buildExamPrepLessonCandidates:
    buildExistingExamPrepLessonCandidates,
  getGeneratedLessonIdentityKeys:
    getExistingGeneratedLessonIdentityKeys,
  areGeneratedLessonPersistedFieldsEqual:
    areExistingGeneratedLessonPersistedFieldsEqual
});
assert.deepEqual(plan, oraclePlan);
assert.deepEqual(
  plan.map((item) => ({
    generatedKey: item.generatedKey,
    label: item.label,
    reason: item.reason,
    status: item.status,
    existingLessonId:
      item.existingLesson?.lessonId,
    outputLessonId: item.lesson.lessonId
  })),
  [
    {
      generatedKey:
        "generated:pre_exam:create",
      label:
        "가상고 고2 미적분 직전수업",
      reason: "2026-08-05 수학시험 전날",
      status: "create",
      existingLessonId: undefined,
      outputLessonId:
        "candidate_pre_exam"
    },
    {
      generatedKey: "generated:create",
      label: "candidate create",
      reason: "reason create",
      status: "create",
      existingLessonId: undefined,
      outputLessonId: "candidate_create"
    },
    {
      generatedKey: "generated:synced",
      label: "candidate synced",
      reason: "reason synced",
      status: "synced",
      existingLessonId:
        "persisted_synced",
      outputLessonId: "candidate_synced"
    },
    {
      generatedKey: "generated:update",
      label: "candidate update",
      reason: "reason update",
      status: "update",
      existingLessonId:
        "persisted_update",
      outputLessonId:
        "persisted_update"
    },
    {
      generatedKey: "generated:skipped",
      label: "candidate skipped",
      reason: "reason skipped",
      status: "skipped",
      existingLessonId: undefined,
      outputLessonId: "candidate_skipped"
    },
    {
      generatedKey:
        "generated:protected",
      label: "candidate protected",
      reason: "reason protected",
      status: "protected",
      existingLessonId:
        "persisted_protected",
      outputLessonId:
        "candidate_protected"
    },
    {
      generatedKey:
        "generated:lesson_id",
      label: "candidate lesson_id",
      reason: "reason lesson_id",
      status: "synced",
      existingLessonId:
        "shared_lesson_id",
      outputLessonId:
        "shared_lesson_id"
    },
    {
      generatedKey:
        "generated:priority",
      label: "candidate priority",
      reason: "reason priority",
      status: "skipped",
      existingLessonId:
        "persisted_priority",
      outputLessonId:
        "candidate_priority"
    }
  ]
);
assert.deepEqual(
  { rows, lessons, students, controls },
  inputSnapshot
);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const moduleSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonPlanBuilder.js",
    import.meta.url
  ),
  "utf8"
);
const startBoundary =
  "export function buildGeneratedLessonPlan(";
const startIndex = moduleSource.indexOf(startBoundary);
assert.ok(startIndex >= 0);
const helperSource = moduleSource.slice(startIndex);
const helperBoundaries = [
  "normalizeGeneratedLessonControls(controls)",
  "const candidates = []",
  "buildExamCalendarEvents(rows)",
  '.filter((event) => event.type === "mathExam")',
  "createPreExamLessonFromSchoolEvent(event, students)",
  "if (!lesson) return",
  "createPreExamGeneratedKey(event)",
  "candidates.push({",
  "generatedKey,",
  'event.schoolName || "학교 미입력"',
  'event.examSubject || "수학"',
  "lesson: { ...lesson, generatedKey }",
  "candidates.push(...buildExamPrepLessonCandidates(rows))",
  "return candidates.map((candidate) => {",
  "const candidateKeys = new Set(",
  "getGeneratedLessonIdentityKeys(candidate.lesson)",
  "const existing = lessons.find(",
  "getGeneratedLessonIdentityKeys(lesson).some(",
  "candidateKeys.has(key)",
  "lesson.sourceSchoolEventId === candidate.lesson.sourceSchoolEventId",
  "lesson.lessonId === candidate.lesson.lessonId",
  "const controlKeys = [candidate.generatedKey, ...candidateKeys].filter(Boolean)",
  "safeControls.suppressedKeys.includes(key)",
  "safeControls.manualOverrideKeys.includes(key)",
  "!areGeneratedLessonPersistedFieldsEqual(candidate.lesson, existing)",
  'suppressed ? "skipped"',
  'manualOverride ? "protected"',
  '!existing ? "create"',
  'needsUpdate ? "update" : "synced"',
  "existingLesson: existing",
  'existing && status === "update"',
  "lessonId: existing.lessonId",
  ": candidate.lesson"
];
let previousIndex = -1;
for (const boundary of helperBoundaries) {
  const boundaryIndex = helperSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `generated lesson plan order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.equal(
  moduleSource.split(startBoundary).length - 1,
  1
);
assert.equal(
  appSource.split(
    'from "../domains/lessons/generatedLessonPlanBuilder.js"'
  ).length - 1,
  1
);
assert.equal(
  appSource.split("buildGeneratedLessonPlan({").length - 1,
  1
);
assert.equal(
  appSource.split("function buildGeneratedLessonPlan(").length - 1,
  0
);
for (const forbiddenEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "setLessons",
  "setExamPrepRows",
  "persistExamPrepRows",
  "localStorage",
  "Supabase",
  "Solapi",
  "Date.now",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenEffect),
    `generated lesson plan crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "generated lesson plan builder inventory TARGET/CONTROL fixtures passed"
);
