import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  addGeneratedLessonManualOverrideKey,
  addGeneratedLessonSuppressedKey,
  normalizeGeneratedLessonControls,
  removeGeneratedLessonManualOverrideKey,
  removeGeneratedLessonSuppressedKey
} from "../src/domains/lessons/generatedLessonControlsModel.js";

function normalizeExistingGeneratedLessonControls(value = {}) {
  return {
    manualOverrideKeys: Array.isArray(value.manualOverrideKeys)
      ? [...new Set(value.manualOverrideKeys)]
      : [],
    suppressedKeys: Array.isArray(value.suppressedKeys)
      ? [...new Set(value.suppressedKeys)]
      : []
  };
}

function applyExistingGeneratedLessonControlUpdate(
  value,
  updater
) {
  return normalizeExistingGeneratedLessonControls(
    updater(normalizeExistingGeneratedLessonControls(value))
  );
}

function addExistingManualOverrideKey(controls, generatedKey) {
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

function addExistingSuppressedKey(controls, generatedKey) {
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

function removeExistingSuppressedKey(controls, generatedKey) {
  return {
    ...controls,
    suppressedKeys: (controls.suppressedKeys ?? []).filter(
      (key) => key !== generatedKey
    )
  };
}

function removeExistingManualOverrideKey(
  controls,
  generatedKey
) {
  return {
    ...controls,
    manualOverrideKeys: (
      controls.manualOverrideKeys ?? []
    ).filter((key) => key !== generatedKey)
  };
}

const source = {
  manualOverrideKeys: [
    "generated:manual:keep",
    "generated:manual:keep"
  ],
  suppressedKeys: [
    "generated:suppressed:remove",
    "generated:suppressed:remove",
    "generated:suppressed:keep"
  ],
  ignoredLegacyField: ["CONTROL"]
};
const sourceSnapshot = structuredClone(source);
const normalized =
  normalizeExistingGeneratedLessonControls(source);
const extractedNormalized =
  normalizeGeneratedLessonControls(source);

assert.deepEqual(normalized, {
  manualOverrideKeys: ["generated:manual:keep"],
  suppressedKeys: [
    "generated:suppressed:remove",
    "generated:suppressed:keep"
  ]
});
assert.deepEqual(extractedNormalized, normalized);
assert.deepEqual(source, sourceSnapshot);
assert.deepEqual(
  normalizeExistingGeneratedLessonControls({
    manualOverrideKeys: "CONTROL",
    suppressedKeys: null
  }),
  {
    manualOverrideKeys: [],
    suppressedKeys: []
  }
);
assert.deepEqual(
  normalizeExistingGeneratedLessonControls(),
  {
    manualOverrideKeys: [],
    suppressedKeys: []
  }
);

const manualAdded =
  applyExistingGeneratedLessonControlUpdate(
    source,
    (current) =>
      addExistingManualOverrideKey(
        current,
        "generated:manual:add"
      )
  );
const extractedManualAdded =
  normalizeGeneratedLessonControls(
    addGeneratedLessonManualOverrideKey(
      normalizeGeneratedLessonControls(source),
      "generated:manual:add"
    )
  );
assert.deepEqual(manualAdded, {
  manualOverrideKeys: [
    "generated:manual:keep",
    "generated:manual:add"
  ],
  suppressedKeys: [
    "generated:suppressed:remove",
    "generated:suppressed:keep"
  ]
});
assert.deepEqual(extractedManualAdded, manualAdded);
assert.deepEqual(
  applyExistingGeneratedLessonControlUpdate(
    manualAdded,
    (current) =>
      addExistingManualOverrideKey(
        current,
        "generated:manual:add"
      )
  ),
  manualAdded
);

const suppressedAdded =
  applyExistingGeneratedLessonControlUpdate(
    source,
    (current) =>
      addExistingSuppressedKey(
        current,
        "generated:suppressed:add"
      )
  );
const extractedSuppressedAdded =
  normalizeGeneratedLessonControls(
    addGeneratedLessonSuppressedKey(
      normalizeGeneratedLessonControls(source),
      "generated:suppressed:add"
    )
  );
assert.deepEqual(suppressedAdded.suppressedKeys, [
  "generated:suppressed:remove",
  "generated:suppressed:keep",
  "generated:suppressed:add"
]);
assert.deepEqual(extractedSuppressedAdded, suppressedAdded);
assert.deepEqual(
  applyExistingGeneratedLessonControlUpdate(
    suppressedAdded,
    (current) =>
      removeExistingSuppressedKey(
        current,
        "generated:suppressed:remove"
      )
  ).suppressedKeys,
  [
    "generated:suppressed:keep",
    "generated:suppressed:add"
  ]
);
assert.deepEqual(
  normalizeGeneratedLessonControls(
    removeGeneratedLessonSuppressedKey(
      extractedSuppressedAdded,
      "generated:suppressed:remove"
    )
  ).suppressedKeys,
  [
    "generated:suppressed:keep",
    "generated:suppressed:add"
  ]
);
assert.deepEqual(
  applyExistingGeneratedLessonControlUpdate(
    manualAdded,
    (current) =>
      removeExistingManualOverrideKey(
        current,
        "generated:manual:keep"
      )
  ).manualOverrideKeys,
  ["generated:manual:add"]
);
assert.deepEqual(
  normalizeGeneratedLessonControls(
    removeGeneratedLessonManualOverrideKey(
      extractedManualAdded,
      "generated:manual:keep"
    )
  ).manualOverrideKeys,
  ["generated:manual:add"]
);
assert.deepEqual(source, sourceSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonControlsModel.js",
    import.meta.url
  ),
  "utf8"
);
for (const normalizeBoundary of [
  "export function normalizeGeneratedLessonControls(value = {})",
  "manualOverrideKeys: Array.isArray(value.manualOverrideKeys)",
  "[...new Set(value.manualOverrideKeys)]",
  "suppressedKeys: Array.isArray(value.suppressedKeys)",
  "[...new Set(value.suppressedKeys)]"
]) {
  assert.ok(
    helperSource.includes(normalizeBoundary),
    `missing generated lesson controls normalize boundary: ${normalizeBoundary}`
  );
}
const controlsStart = appSource.indexOf(
  "  function updateGeneratedLessonControls(updater) {"
);
const controlsEnd = appSource.indexOf(
  "  function mergeGeneratedLessonsIntoState(",
  controlsStart
);
assert.ok(controlsStart >= 0 && controlsEnd > controlsStart);
const controlsSource = appSource.slice(
  controlsStart,
  controlsEnd
);
const controlsBoundaries = [
  "setGeneratedLessonControls((current) => normalizeGeneratedLessonControls(updater(normalizeGeneratedLessonControls(current))))",
  "function markGeneratedLessonManualOverride(lesson)",
  "const generatedKey = getGeneratedLessonKey(lesson)",
  "if (!generatedKey) return",
  "addGeneratedLessonManualOverrideKey(",
  "function suppressGeneratedLessonKey(generatedKey)",
  "addGeneratedLessonSuppressedKey(current, generatedKey)",
  "function unsuppressGeneratedLessonKey(generatedKey)",
  "removeGeneratedLessonSuppressedKey(",
  "function clearGeneratedLessonManualOverride(generatedKey)",
  "removeGeneratedLessonManualOverrideKey("
];
let previousIndex = -1;
for (const boundary of controlsBoundaries) {
  const boundaryIndex = controlsSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `generated lesson controls order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.ok(!controlsSource.includes("fetch("));
assert.ok(!controlsSource.includes("/api/"));
assert.ok(!controlsSource.includes("postJson"));
for (const helperBoundary of [
  "export function addGeneratedLessonManualOverrideKey(",
  "export function addGeneratedLessonSuppressedKey(",
  "export function removeGeneratedLessonSuppressedKey(",
  "export function removeGeneratedLessonManualOverrideKey("
]) {
  assert.ok(
    helperSource.includes(helperBoundary),
    `missing generated lesson controls helper: ${helperBoundary}`
  );
}

console.log(
  "generated lesson controls model inventory TARGET/CONTROL fixtures passed"
);
