import {
  addExamPrepSchoolExclusion,
  normalizeExamPrepSchoolExclusions,
  removeExamPrepSchoolExclusion
} from "./examPrepSchoolPlan.js";

export function normalizeGeneratedLessonControls(value = {}) {
  return {
    // 2026-10-01 · 날짜 하나에서 학교 하나만 빼는 제외. 수업이 아니라 생성 제어에 남겨
    // 재생성해도 유지된다(examPrepSchoolPlan 주석 참고).
    examPrepSchoolExclusions: normalizeExamPrepSchoolExclusions(value.examPrepSchoolExclusions),
    manualOverrideKeys: Array.isArray(value.manualOverrideKeys)
      ? [...new Set(value.manualOverrideKeys)]
      : [],
    suppressedKeys: Array.isArray(value.suppressedKeys)
      ? [...new Set(value.suppressedKeys)]
      : []
  };
}

export function addGeneratedLessonExamPrepSchoolExclusion(
  controls = {},
  generatedKey,
  schoolName
) {
  return {
    ...controls,
    examPrepSchoolExclusions: addExamPrepSchoolExclusion(
      controls.examPrepSchoolExclusions ?? [],
      generatedKey,
      schoolName
    )
  };
}

export function removeGeneratedLessonExamPrepSchoolExclusion(
  controls = {},
  generatedKey,
  schoolName
) {
  return {
    ...controls,
    examPrepSchoolExclusions: removeExamPrepSchoolExclusion(
      controls.examPrepSchoolExclusions ?? [],
      generatedKey,
      schoolName
    )
  };
}

export function addGeneratedLessonManualOverrideKey(
  controls = {},
  generatedKey
) {
  return {
    ...controls,
    manualOverrideKeys: [
      ...new Set([
        ...(controls.manualOverrideKeys ?? []),
        generatedKey
      ])
    ]
  };
}

export function addGeneratedLessonSuppressedKey(
  controls = {},
  generatedKey
) {
  return {
    ...controls,
    suppressedKeys: [
      ...new Set([
        ...(controls.suppressedKeys ?? []),
        generatedKey
      ])
    ]
  };
}

export function removeGeneratedLessonSuppressedKey(
  controls = {},
  generatedKey
) {
  return {
    ...controls,
    suppressedKeys: (controls.suppressedKeys ?? []).filter(
      (key) => key !== generatedKey
    )
  };
}

export function removeGeneratedLessonManualOverrideKey(
  controls = {},
  generatedKey
) {
  return {
    ...controls,
    manualOverrideKeys: (
      controls.manualOverrideKeys ?? []
    ).filter((key) => key !== generatedKey)
  };
}
