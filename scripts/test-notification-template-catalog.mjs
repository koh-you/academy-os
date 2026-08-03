import assert from "node:assert/strict";
import {
  defaultNotificationTemplates,
  normalizeNotificationTemplates,
  renderNotificationTemplate
} from "../src/domains/notifications/notificationTemplateCatalog.js";
import { notificationTemplateRows } from "../src/domains/settings/notificationTemplateSettingsCatalog.js";

const expectedDefaults = {
  lessonNextHomeworkFollowup: "- 다음 수업 때 #{숙제}를 함께 확인하겠습니다.",
  lessonStayAfterHomeworkFollowup: "- 오늘 수업 후 #{숙제} 보충을 마무리합니다.",
  absenceMakeupStudentReminder: "#{학생명} 학생 결석 보강 안내입니다.\n\n#{보강일정}\n#{보강대상}\n#{결석사유줄}\n#{확인숙제줄}\n#{보충메모}",
  homeworkMakeupStudentReminder: "#{학생명} 학생 숙제 보충 안내입니다.\n\n#{보강일정}\n#{밀린숙제}\n#{보충메모}",
  supplementScheduleConfirmNotice: "#{안내제목}\n\n#{보강일정}\n#{보강대상}\n#{결석사유줄}\n#{확인숙제줄}\n#{보충메모}",
  supplementScheduleChangeNotice: "#{안내제목}\n\n#{보강일정}\n#{보강대상}\n#{결석사유줄}\n#{확인숙제줄}\n#{보충메모}\n#{변경사유}\n#{변경전}\n변경 후 일정: #{변경후일정}",
  noticeMaterialPreset: "안녕하세요. 으뜸수학 고태영T입니다.\n\n다음 수업부터 사용할 교재를 안내드립니다.\n학생이 수업에 필요한 교재와 필기구를 준비할 수 있도록 확인 부탁드립니다.\n\n감사합니다.",
  noticeMakeupPreset: "안녕하세요. 으뜸수학 고태영T입니다.\n\n보강 수업 일정을 안내드립니다.\n가능한 시간 확인 후 회신 부탁드립니다.\n\n감사합니다.",
  noticeAnnouncementPreset: "안녕하세요. 으뜸수학 고태영T입니다.\n\n학원 공지사항을 안내드립니다.\n내용 확인 부탁드립니다.\n\n감사합니다.",
  specialLectureGuideNotice: "안녕하세요. #{학원명}입니다.\n#{특강명} 안내드립니다.\n\n대상: #{대상}\n요일: #{요일}\n시간: #{시간}\n\n#{특이사항블록}\n\n#{안내메모}\n\n#{안내문링크}"
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
assert.equal(
  renderNotificationTemplate(expectedDefaults.specialLectureGuideNotice, {
    "학원명": "가상 학원",
    "특강명": "가상 특강",
    "대상": "중3",
    "요일": "월·수",
    "시간": "18:00",
    "특이사항블록": "",
    "안내메모": "가상 안내",
    "안내문링크": "https://example.test/guide"
  }),
  "안녕하세요. 가상 학원입니다.\n가상 특강 안내드립니다.\n\n대상: 중3\n요일: 월·수\n시간: 18:00\n\n가상 안내\n\nhttps://example.test/guide"
);

const legacy = normalizeNotificationTemplates({
  supplementScheduleConfirmNotice: "#{일정제목} 일정이 확정되었습니다.\n\n#{보충내역}\n일정: #{보강일정}",
  supplementScheduleChangeNotice: "#{일정제목} 일정이 변경되었습니다.\n\n#{보충내역}\n#{변경사유}\n#{변경전}\n변경 후: #{보강일정}"
});
assert.equal(legacy.supplementScheduleConfirmNotice, expectedDefaults.supplementScheduleConfirmNotice);
assert.equal(legacy.supplementScheduleChangeNotice, expectedDefaults.supplementScheduleChangeNotice);

console.log("notification template catalog tests passed · defaults 10 · legacy migrations 2 · unknown keys ignored");
