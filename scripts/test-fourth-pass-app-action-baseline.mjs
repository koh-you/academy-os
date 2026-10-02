import assert from "node:assert/strict";
import { isNpmScriptCoveredByProductionTests } from "./productionTestMembership.mjs";
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
// 2026-09-05: 인증 헤더 누락 버그 수정으로 `fetch(apiUrl(...))` 25곳이 전부
// `apiFetch(...)` 로 바뀌면서 45 → 20 으로 더 내려갔다. 래칫이므로 하향만 허용.
// 2026-09-07: 아무도 호출하지 않던 postSchoolEvents(postJson 직접 호출 1곳)를
// 죽은 코드로 지우면서 20 → 19.
const expectedDirectCallHandlers = [];

// 118: the 116 4-4a baseline plus handleSaveTestPaperLibrary (시험지 목록 tab)
// and handleToggleExamPrepDailyJournal (시험대비 수업의 데일리 알림톡 사용 여부).
// 둘 다 postAppState 만 호출하고 fetch/postJson* 은 쓰지 않으므로 direct-call
// 후보도, direct request call 도 늘리지 않는다.
// 119: 2026-09-16 handleSaveClassTemplate(반관리 반 개설·수정). 요청은
// domains/teacher/classTemplateApi.js 의 얇은 래퍼가 보내므로 direct request call 은 그대로.
// 120: 2026-10-01 날짜별 학교 단위 참여·시간. 처음에는 시간·제외·다시 포함 3개였는데,
// 화면을 "수정 -> 저장 하나" 로 묶으면서 handleSaveExamPrepSchoolPlan 한 개가 됐다. 저장은
// 기존 handleSaveExamPrepSchedule(= examPrepScheduleApi 래퍼)을 거치므로 direct request
// call 은 그대로.
assert.deepEqual(directCallHandlers, expectedDirectCallHandlers);
// 122: 2026-10-02 handleApplyExamPrepNotificationPlan 과 handleToggleExamPrepJournalView.
// 시험대비 화면에서 알림톡을 쓰고 예약까지 하도록 바뀌면서, 자동 생성 수업을 먼저 저장한 뒤
// 기존 applyLessonNotificationPlan 에 넘기는 얇은 래퍼가 하나 늘었다. 그리고 수업일지로 가는
// 화면 전환을 알림톡 설정과 분리하면서 전용 토글이 하나 더 생겼다(예전에는 `데일리 알림톡
// 사용` 체크가 겸했다). 둘 다 postAppState·기존 경로만 쓰므로 direct request call 은 그대로.
assert.equal(handlers.length, 122, `handle* count drifted from the baseline (122), now ${handlers.length}`);

const directRequestCallCount = (appSource.match(/\bfetch\(|\bpostJson[A-Za-z]*\(/g) || []).length;
assert.equal(directRequestCallCount, 19, `direct fetch/postJson call count drifted from the 4-4 closeout (19), now ${directRequestCallCount}`);

assert.ok(
  isNpmScriptCoveredByProductionTests("test:fourth-pass-app-action-baseline")
);

console.log(
  `fourth-pass app action baseline passed · handlers 117 · direct-call candidates 0 · thin wrappers ${handlers.length} · direct request calls ${directRequestCallCount}`
);
