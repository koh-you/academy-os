import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalClosureNoticeModel } from "../src/domains/lessons/lessonJournalClosureNoticeModel.js";

const formatLessonTimeRange = (lesson) => `${lesson.startTime}~${lesson.endTime}`;
const linkedMakeup = {
  date: "2026-08-01",
  endTime: "17:00",
  lessonId: "makeup_target",
  startTime: "14:00"
};
const linkedClosure = {
  className: "월수금 4–7",
  date: "2026-07-28",
  lessonId: "closure_target"
};

assert.equal(
  createLessonJournalClosureNoticeModel({
    formatLessonTimeRange,
    isClosureLesson: false,
    isClosureMakeupLesson: false
  }),
  null
);

const closureWithMakeup = createLessonJournalClosureNoticeModel({
  formatLessonTimeRange,
  isClosureLesson: true,
  isClosureMakeupLesson: false,
  linkedClosureMakeupLesson: linkedMakeup
});
assert.equal(closureWithMakeup.title, "휴강 수업일지");
assert.equal(closureWithMakeup.linkText, "연결 보충 · 2026-08-01 14:00~17:00");
assert.equal(closureWithMakeup.className, "panel closureJournalNotice ");

assert.equal(
  createLessonJournalClosureNoticeModel({
    formatLessonTimeRange,
    isClosureLesson: true,
    isClosureMakeupLesson: false
  }).linkText,
  "연결 보충 없음"
);

const makeupWithClosure = createLessonJournalClosureNoticeModel({
  formatLessonTimeRange,
  isClosureLesson: false,
  isClosureMakeupLesson: true,
  linkedClosureLesson: linkedClosure
});
assert.equal(makeupWithClosure.title, "휴강 보충 수업일지");
assert.equal(makeupWithClosure.linkText, "원 휴강 · 2026-07-28 월수금 4–7");
assert.equal(makeupWithClosure.className, "panel closureJournalNotice makeup");

assert.equal(
  createLessonJournalClosureNoticeModel({
    formatLessonTimeRange,
    isClosureLesson: false,
    isClosureMakeupLesson: true
  }).linkText,
  "원 휴강 연결 확인 필요"
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalClosureNotice.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.match(journalSource, /<LessonJournalClosureNotice/);
assert.doesNotMatch(journalSource, /<section className=\{`panel closureJournalNotice/);
assert.match(componentSource, /if \(!model\) return null/);
assert.match(componentSource, /이 일정 생성만으로 알림톡·문자는 발송되거나 예약되지 않습니다\./);
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "onClick=", "useState", "useEffect"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `closure notice must stay display-only: ${forbiddenSideEffect}`);
}

console.log("lesson journal closure notice TARGET/CONTROL fixtures passed");
