import assert from "node:assert/strict";
import {
  defaultNotificationTemplates,
  normalizeNotificationTemplates,
  notificationTemplateRows
} from "../src/domains/notifications/notificationTemplateCatalog.js";

const expectedDefaults = {
  lessonNextHomeworkFollowup: "- 다음 수업 때 #{숙제}를 함께 확인하겠습니다.",
  lessonStayAfterHomeworkFollowup: "- 오늘 수업 후 #{숙제} 보충을 마무리합니다.",
  absenceMakeupStudentReminder: "#{학생명} 학생 결석 보강 안내입니다.\n\n#{보강일정}\n#{보강대상}\n#{결석사유줄}\n#{확인숙제줄}\n#{보충메모}",
  homeworkMakeupStudentReminder: "#{학생명} 학생 숙제 보충 안내입니다.\n\n#{보강일정}\n#{밀린숙제}\n#{보충메모}",
  supplementScheduleConfirmNotice: "#{안내제목}\n\n#{보강일정}\n#{보강대상}\n#{결석사유줄}\n#{확인숙제줄}\n#{보충메모}",
  supplementScheduleChangeNotice: "#{안내제목}\n\n#{보강일정}\n#{보강대상}\n#{결석사유줄}\n#{확인숙제줄}\n#{보충메모}\n#{변경사유}\n#{변경전}\n변경 후 일정: #{변경후일정}"
};

assert.deepEqual(defaultNotificationTemplates, expectedDefaults);
assert.deepEqual(notificationTemplateRows.map((row) => row.key), Object.keys(expectedDefaults));
assert.equal(notificationTemplateRows.every((row) => row.source === "Supabase app_state.aiSettings.notificationTemplates"), true);
assert.deepEqual(normalizeNotificationTemplates(), expectedDefaults);
assert.deepEqual(normalizeNotificationTemplates(null), expectedDefaults);

const custom = normalizeNotificationTemplates({
  lessonNextHomeworkFollowup: "직접 입력 #{숙제}",
  homeworkMakeupStudentReminder: "",
  ignoredTemplate: "저장 대상 아님"
});
assert.equal(custom.lessonNextHomeworkFollowup, "직접 입력 #{숙제}");
assert.equal(custom.homeworkMakeupStudentReminder, "");
assert.equal(Object.hasOwn(custom, "ignoredTemplate"), false);
assert.deepEqual(defaultNotificationTemplates, expectedDefaults);

const legacy = normalizeNotificationTemplates({
  supplementScheduleConfirmNotice: "#{일정제목} 일정이 확정되었습니다.\n\n#{보충내역}\n일정: #{보강일정}",
  supplementScheduleChangeNotice: "#{일정제목} 일정이 변경되었습니다.\n\n#{보충내역}\n#{변경사유}\n#{변경전}\n변경 후: #{보강일정}"
});
assert.equal(legacy.supplementScheduleConfirmNotice, expectedDefaults.supplementScheduleConfirmNotice);
assert.equal(legacy.supplementScheduleChangeNotice, expectedDefaults.supplementScheduleChangeNotice);

console.log("notification template catalog tests passed · defaults 6 · legacy migrations 2 · unknown keys ignored");
