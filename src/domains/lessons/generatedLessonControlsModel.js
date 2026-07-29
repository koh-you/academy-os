export function normalizeGeneratedLessonControls(value = {}) {
  return {
    manualOverrideKeys: Array.isArray(value.manualOverrideKeys)
      ? [...new Set(value.manualOverrideKeys)]
      : [],
    suppressedKeys: Array.isArray(value.suppressedKeys)
      ? [...new Set(value.suppressedKeys)]
      : []
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
