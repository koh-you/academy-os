import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalNotificationCommentCellModel } from "../src/domains/lessons/lessonJournalNotificationCommentCellModel.js";

assert.deepEqual(
  createLessonJournalNotificationCommentCellModel({
    commentState: "sent",
    isLessonNotificationOff: false,
    isNotificationMuted: false
  }),
  {
    muteButtonClassName: "notificationMuteButton",
    muteButtonLabel: "알림 제외",
    muteButtonTitle: "",
    openButtonClassName: "commentOpenButton comment-sent",
    statusClassName: "commentStatusText comment-sent"
  }
);

assert.deepEqual(
  createLessonJournalNotificationCommentCellModel({
    commentState: "draft",
    isLessonNotificationOff: true,
    isNotificationMuted: false
  }),
  {
    muteButtonClassName: "notificationMuteButton planOff",
    muteButtonLabel: "알림 제외",
    muteButtonTitle: "현재 수업 발송 계획이 알림톡 없음입니다.",
    openButtonClassName: "commentOpenButton comment-draft notification-off",
    statusClassName: "commentStatusText comment-draft"
  }
);

assert.deepEqual(
  createLessonJournalNotificationCommentCellModel({
    commentState: "failed",
    isLessonNotificationOff: false,
    isNotificationMuted: true
  }),
  {
    muteButtonClassName: "notificationMuteButton active",
    muteButtonLabel: "제외 해제",
    muteButtonTitle: "",
    openButtonClassName: "commentOpenButton comment-failed notification-off",
    statusClassName: "commentStatusText comment-failed"
  }
);

const mutedPlanOffTarget = createLessonJournalNotificationCommentCellModel({
  commentState: "",
  isLessonNotificationOff: true,
  isNotificationMuted: true
});
assert.equal(mutedPlanOffTarget.openButtonClassName, "commentOpenButton comment-empty notification-off");
assert.equal(mutedPlanOffTarget.muteButtonClassName, "notificationMuteButton active");
assert.equal(mutedPlanOffTarget.muteButtonTitle, "현재 수업 발송 계획이 알림톡 없음입니다.");

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalNotificationCommentCell.jsx", import.meta.url),
  "utf8"
);
const rowSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalStudentRow.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.equal(
  (rowSource.match(/<LessonJournalNotificationCommentCell/g) ?? []).length,
  2,
  "parent and student notification cells must both use the extracted component"
);
assert.match(journalSource, /<LessonJournalStudentRow/);
assert.match(
  journalSource,
  /openCommentComposer\("parent", student, record, effectivePreviousHomework, effectiveNextHomework\)/
);
assert.match(
  journalSource,
  /openCommentComposer\("student", student, record, effectivePreviousHomework, effectiveNextHomework\)/
);
assert.match(journalSource, /onToggleStudentNotificationMute\?\.\(lesson, student, "parent"\)/);
assert.match(journalSource, /onToggleStudentNotificationMute\?\.\(lesson, student, "student"\)/);
assert.doesNotMatch(journalSource, /className="journalCommentCell"/);

for (const contract of [
  "createLessonJournalNotificationCommentCellModel",
  "model.openButtonClassName",
  "model.statusClassName",
  "model.muteButtonClassName",
  "onClick={onOpen}",
  "onClick={onToggleMute}"
]) {
  assert.ok(componentSource.includes(contract), `missing notification comment cell contract: ${contract}`);
}
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "useState", "useEffect"]) {
  assert.ok(
    !componentSource.includes(forbiddenSideEffect),
    `notification comment cell must stay callback-only: ${forbiddenSideEffect}`
  );
}

console.log("lesson journal notification comment cell TARGET/CONTROL fixtures passed");
