import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  addGeneratedLessonManualOverrideKey,
  addGeneratedLessonSuppressedKey,
  normalizeGeneratedLessonControls,
  removeGeneratedLessonManualOverrideKey,
  removeGeneratedLessonSuppressedKey
} from "../src/domains/lessons/generatedLessonControlsModel.js";

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
  legacyControl: true
};
const sourceSnapshot = structuredClone(source);
const normalized = normalizeGeneratedLessonControls(source);
const manualAdded = normalizeGeneratedLessonControls(
  addGeneratedLessonManualOverrideKey(
    normalized,
    "generated:manual:add"
  )
);
const suppressedAdded = normalizeGeneratedLessonControls(
  addGeneratedLessonSuppressedKey(
    manualAdded,
    "generated:suppressed:add"
  )
);
const suppressedRemoved = normalizeGeneratedLessonControls(
  removeGeneratedLessonSuppressedKey(
    suppressedAdded,
    "generated:suppressed:remove"
  )
);
const manualRemoved = normalizeGeneratedLessonControls(
  removeGeneratedLessonManualOverrideKey(
    suppressedRemoved,
    "generated:manual:keep"
  )
);

assert.deepEqual(normalized, {
  manualOverrideKeys: ["generated:manual:keep"],
  suppressedKeys: [
    "generated:suppressed:remove",
    "generated:suppressed:keep"
  ]
});
assert.deepEqual(manualAdded.manualOverrideKeys, [
  "generated:manual:keep",
  "generated:manual:add"
]);
assert.deepEqual(suppressedAdded.suppressedKeys, [
  "generated:suppressed:remove",
  "generated:suppressed:keep",
  "generated:suppressed:add"
]);
assert.deepEqual(suppressedRemoved.suppressedKeys, [
  "generated:suppressed:keep",
  "generated:suppressed:add"
]);
assert.deepEqual(manualRemoved, {
  manualOverrideKeys: ["generated:manual:add"],
  suppressedKeys: [
    "generated:suppressed:keep",
    "generated:suppressed:add"
  ]
});
assert.deepEqual(source, sourceSnapshot);
assert.deepEqual(
  normalizeGeneratedLessonControls({
    manualOverrideKeys: "CONTROL",
    suppressedKeys: null
  }),
  {
    manualOverrideKeys: [],
    suppressedKeys: []
  }
);

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
const modulePath =
  'from "../domains/lessons/generatedLessonControlsModel.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
const helperExports = [
  "normalizeGeneratedLessonControls",
  "addGeneratedLessonManualOverrideKey",
  "addGeneratedLessonSuppressedKey",
  "removeGeneratedLessonSuppressedKey",
  "removeGeneratedLessonManualOverrideKey"
];
for (const helperExport of helperExports) {
  assert.equal(
    helperSource.split(
      `export function ${helperExport}(`
    ).length - 1,
    1,
    `generated lesson controls export count changed: ${helperExport}`
  );
}
for (const transitionCall of [
  "addGeneratedLessonManualOverrideKey(",
  "addGeneratedLessonSuppressedKey(",
  "removeGeneratedLessonSuppressedKey(",
  "removeGeneratedLessonManualOverrideKey("
]) {
  assert.equal(
    appSource.split(transitionCall).length - 1,
    1,
    `generated lesson controls App call count changed: ${transitionCall}`
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
let previousControlsIndex = -1;
for (const boundary of controlsBoundaries) {
  const boundaryIndex = controlsSource.indexOf(
    boundary,
    previousControlsIndex + 1
  );
  assert.ok(
    boundaryIndex > previousControlsIndex,
    `generated lesson controls App order changed: ${boundary}`
  );
  previousControlsIndex = boundaryIndex;
}
for (const ownershipBoundary of [
  "const [generatedLessonControls, setGeneratedLessonControls] = useStoredState(",
  '"academy-os.generatedLessonControls.v1"',
  "defaultGeneratedLessonControls",
  "const sharedAppState = useMemo(() => ({",
  "generatedLessonControls,",
  "setGeneratedLessonControls(normalizeGeneratedLessonControls(states.generatedLessonControls))",
  "setGeneratedLessonControls,"
]) {
  assert.ok(
    appSource.includes(ownershipBoundary),
    `missing generated lesson controls App ownership: ${ownershipBoundary}`
  );
}
assert.ok(
  !appSource.includes(
    "function normalizeGeneratedLessonControls(value = {})"
  )
);

for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "setGeneratedLessonControls",
  "setLessons",
  "localStorage",
  "Supabase",
  "Solapi",
  "new Date",
  "Date.now",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `generated lesson controls closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated lesson controls model boundary closeout passed"
);
