import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  getLessonJournalCommentButtonState,
  getLessonJournalCommentSendState,
  getLessonJournalCommentStatusLabel,
  getLessonJournalDisplayCommentSendStatus
} from "../src/domains/lessons/lessonJournalCommentStatusModel.js";

const calls = [];
const normalizedControl = getLessonJournalDisplayCommentSendStatus({
  isSchedulePast() {
    calls.push("past");
    return true;
  },
  normalizeStatus(value) {
    calls.push(["normalize", value]);
    return "발송 완료";
  },
  parseScheduleLabel(value) {
    calls.push(["parse", value]);
    return new Date("2026-07-29T05:00:00.000Z");
  },
  sendStatus: "  발송 완료  "
});
assert.equal(normalizedControl, "발송 완료");
assert.deepEqual(calls, [["normalize", "  발송 완료  "]]);

calls.length = 0;
const invalidScheduleControl = getLessonJournalDisplayCommentSendStatus({
  isSchedulePast() {
    calls.push("past");
    return true;
  },
  normalizeStatus: (value) => value,
  parseScheduleLabel(value) {
    calls.push(["parse", value]);
    return null;
  },
  sendStatus: "예약 중 · 잘못된 시각"
});
assert.equal(invalidScheduleControl, "예약 중 · 잘못된 시각");
assert.deepEqual(calls, [["parse", "예약 중 · 잘못된 시각"]]);

const scheduleDate = new Date("2026-07-29T05:00:00.000Z");
calls.length = 0;
const futureScheduleControl = getLessonJournalDisplayCommentSendStatus({
  isSchedulePast(value) {
    calls.push(["past", value]);
    return false;
  },
  normalizeStatus: (value) => value,
  parseScheduleLabel(value) {
    calls.push(["parse", value]);
    return scheduleDate;
  },
  sendStatus: "예약 중 · 7. 29. 14:00"
});
assert.equal(futureScheduleControl, "예약 중 · 7. 29. 14:00");
assert.deepEqual(calls, [
  ["parse", "예약 중 · 7. 29. 14:00"],
  ["past", scheduleDate]
]);

const pastScheduleTarget = getLessonJournalDisplayCommentSendStatus({
  isSchedulePast: () => true,
  normalizeStatus: (value) => value,
  parseScheduleLabel: () => scheduleDate,
  sendStatus: "예약 중 · 7. 29. 14:00"
});
assert.equal(
  pastScheduleTarget,
  "예약 시각 지남 · 확인 필요 · 7. 29. 14:00"
);

const stateCases = [
  ["", ""],
  ["내용 없음", ""],
  ["확인 필요", "failed"],
  ["예약 시각 지남", "failed"],
  ["발송 실패", "failed"],
  ["발송 중", "pending"],
  ["예약 중", "pending"],
  ["발송 완료", "sent"],
  ["테스트 기록됨", "sent"],
  ["작성 중", "draft"]
];
for (const [sendStatus, expected] of stateCases) {
  assert.equal(
    getLessonJournalCommentSendState({
      getDisplayStatus: (value) => value,
      sendStatus
    }),
    expected,
    `unexpected comment state for ${sendStatus}`
  );
}

let normalizeCommentCalls = 0;
assert.equal(
  getLessonJournalCommentButtonState({
    comment: "가상 TARGET 코멘트",
    getSendState: () => "sent",
    normalizeText() {
      normalizeCommentCalls += 1;
      return "가상 TARGET 코멘트";
    },
    sendStatus: "발송 완료"
  }),
  "sent"
);
assert.equal(normalizeCommentCalls, 0);
assert.equal(
  getLessonJournalCommentButtonState({
    comment: " 가상 TARGET 코멘트 ",
    getSendState: () => "",
    normalizeText: (value) => value.trim(),
    sendStatus: ""
  }),
  "draft"
);
assert.equal(
  getLessonJournalCommentButtonState({
    comment: " ",
    getSendState: () => "",
    normalizeText: (value) => value.trim(),
    sendStatus: ""
  }),
  "empty"
);

const labelCases = [
  ["실패 상세", "failed", "", "실패 상세"],
  ["", "failed", "", "발송 실패"],
  ["예약 중 · 14:00", "pending", "", "예약 중 · 14:00"],
  ["발송 완료", "sent", "", "발송 완료"],
  ["임시", "draft", "가상 TARGET 코멘트", "작성됨 · 발송 전"],
  ["임시", "draft", " ", "미작성"]
];
for (const [displayStatus, sendState, comment, expected] of labelCases) {
  const labelCalls = [];
  const result = getLessonJournalCommentStatusLabel({
    comment,
    getDisplayStatus(value) {
      labelCalls.push(["display", value]);
      return displayStatus;
    },
    getSendState(value) {
      labelCalls.push(["state", value]);
      return sendState;
    },
    normalizeText(value) {
      labelCalls.push(["normalize", value]);
      return value.trim();
    },
    sendStatus: "저장 원문"
  });
  assert.equal(result, expected);
  assert.deepEqual(labelCalls.slice(0, 2), [
    ["display", "저장 원문"],
    ["state", displayStatus]
  ]);
  if (["failed", "pending", "sent"].includes(sendState)) {
    assert.equal(labelCalls.some(([kind]) => kind === "normalize"), false);
  }
}

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const modelSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalCommentStatusModel.js", import.meta.url),
  "utf8"
);

for (const binding of [
  "getLessonJournalDisplayCommentSendStatus({",
  "isSchedulePast: isNotificationSchedulePast",
  "normalizeStatus: normalizeMessageText",
  "parseScheduleLabel: parseKoreaShortScheduleLabel",
  "getLessonJournalCommentSendState({",
  "getDisplayStatus: getDisplayCommentSendStatus",
  "getLessonJournalCommentButtonState({",
  "getSendState: getCommentSendState",
  "getLessonJournalCommentStatusLabel({",
  "normalizeText: normalizeMessageText"
]) {
  assert.ok(appSource.includes(binding), `missing comment status model binding: ${binding}`);
}
for (const legacyInline of [
  'normalizedStatus.includes("확인 필요")',
  'sendState === "failed") return displayStatus',
  'return normalizeMessageText(comment) ? "draft" : "empty"'
]) {
  assert.ok(!appSource.includes(legacyInline), `legacy comment status logic remains: ${legacyInline}`);
}

for (const forbiddenSideEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "getJsonWithTimeout",
  "new Date",
  "Date.now",
  "/api/",
  "Supabase",
  "Solapi",
  "localStorage",
  "setJournal"
]) {
  assert.ok(
    !modelSource.includes(forbiddenSideEffect),
    `comment status model must stay pure: ${forbiddenSideEffect}`
  );
}

console.log("lesson journal comment status model TARGET/CONTROL fixtures passed");
