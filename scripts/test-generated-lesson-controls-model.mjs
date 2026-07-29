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
  ignoredLegacyField: ["CONTROL"]
};
const sourceSnapshot = structuredClone(source);
const normalized = normalizeGeneratedLessonControls(source);

assert.deepEqual(normalized, {
  manualOverrideKeys: ["generated:manual:keep"],
  suppressedKeys: [
    "generated:suppressed:remove",
    "generated:suppressed:keep"
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
assert.deepEqual(normalizeGeneratedLessonControls(), {
  manualOverrideKeys: [],
  suppressedKeys: []
});

const manualAdded = normalizeGeneratedLessonControls(
  addGeneratedLessonManualOverrideKey(
    normalized,
    "generated:manual:add"
  )
);
assert.deepEqual(manualAdded.manualOverrideKeys, [
  "generated:manual:keep",
  "generated:manual:add"
]);
assert.deepEqual(
  normalizeGeneratedLessonControls(
    addGeneratedLessonManualOverrideKey(
      manualAdded,
      "generated:manual:add"
    )
  ),
  manualAdded
);

const suppressedAdded = normalizeGeneratedLessonControls(
  addGeneratedLessonSuppressedKey(
    normalized,
    "generated:suppressed:add"
  )
);
assert.deepEqual(suppressedAdded.suppressedKeys, [
  "generated:suppressed:remove",
  "generated:suppressed:keep",
  "generated:suppressed:add"
]);
assert.deepEqual(
  normalizeGeneratedLessonControls(
    removeGeneratedLessonSuppressedKey(
      suppressedAdded,
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
    removeGeneratedLessonManualOverrideKey(
      manualAdded,
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
for (const appBoundary of [
  'from "../domains/lessons/generatedLessonControlsModel.js"',
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
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing generated lesson controls App boundary: ${appBoundary}`
  );
}
assert.ok(
  !appSource.includes(
    "function normalizeGeneratedLessonControls(value = {})"
  )
);
for (const helperExport of [
  "export function normalizeGeneratedLessonControls(",
  "export function addGeneratedLessonManualOverrideKey(",
  "export function addGeneratedLessonSuppressedKey(",
  "export function removeGeneratedLessonSuppressedKey(",
  "export function removeGeneratedLessonManualOverrideKey("
]) {
  assert.equal(
    helperSource.split(helperExport).length - 1,
    1,
    `generated lesson controls export count changed: ${helperExport}`
  );
}
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
    `generated lesson controls model crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated lesson controls model TARGET/CONTROL extraction fixtures passed"
);
