import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));

const lines = appSource.split("\n");
const declRe = /^\s*(async\s+)?function (handle[A-Za-z0-9]+)\s*\(|^\s*const (handle[A-Za-z0-9]+) = /;

function classifyHandlers(sourceLines) {
  const results = [];
  for (let i = 0; i < sourceLines.length; i += 1) {
    const match = sourceLines[i].match(declRe);
    if (!match) continue;
    const name = match[2] || match[3];
    let depth = 0;
    let started = false;
    let end = i;
    for (let j = i; j < sourceLines.length; j += 1) {
      for (const character of sourceLines[j]) {
        if (character === "{") {
          depth += 1;
          started = true;
        }
        if (character === "}") depth -= 1;
      }
      if (started && depth <= 0) {
        end = j;
        break;
      }
      if (j - i > 400) {
        end = j;
        break;
      }
    }
    const body = sourceLines.slice(i, end + 1).join("\n");
    const hasDirectCall = /\bfetch\(|\bpostJson[A-Za-z]*\(/.test(body);
    results.push({ hasDirectCall, name });
  }
  return results;
}

const handlers = classifyHandlers(lines);
const directCallHandlers = handlers.filter((item) => item.hasDirectCall).map((item) => item.name).sort();

// 4-4 closeout: 4-4a locked in 15 `handle*` functions that still held inline
// fetch/postJson orchestration in App.jsx. 4-4b through 4-4h extracted every
// one of them into domain actions (special lecture cluster, absence makeup
// cancel, lesson comment, save record, monthly regular lesson open, exam
// prep row delete, monthly settlement month save) — none reimplemented,
// each verified independently before merge. This now locks the closeout
// state: zero remaining direct-call candidates. `handlers.length` stays at
// the 4-4a baseline (116) since no handler function was deleted, only
// thinned to a wrapper; the direct fetch/postJson* call count dropped from
// 66 to 44, meeting the fourth-pass plan's "45 or fewer" 4-4 exit target.
// A later thin request helper (patchLessonRecordRetestStatusRequest) moved
// the count to 45 — still within the stated target.
const expectedDirectCallHandlers = [];

assert.deepEqual(directCallHandlers, expectedDirectCallHandlers);
assert.equal(handlers.length, 116, `handle* count drifted from the 4-4a baseline (116), now ${handlers.length}`);

const directRequestCallCount = (appSource.match(/\bfetch\(|\bpostJson[A-Za-z]*\(/g) || []).length;
assert.equal(directRequestCallCount, 45, `direct fetch/postJson call count drifted from the 4-4 closeout (45), now ${directRequestCallCount}`);

assert.ok(
  packageJson.scripts["test:production"].includes("npm run test:fourth-pass-app-action-baseline")
);

console.log(
  `fourth-pass app action baseline passed · handlers 116 · direct-call candidates 0 · thin wrappers ${handlers.length} · direct request calls 45`
);
