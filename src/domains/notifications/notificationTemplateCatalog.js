const legacySupplementScheduleNotificationTemplates = {
  supplementScheduleConfirmNotice: [
    "#{일정제목} 일정이 확정되었습니다.",
    "",
    "#{보충내역}",
    "일정: #{보강일정}"
  ].join("\n"),
  supplementScheduleChangeNotice: [
    "#{일정제목} 일정이 변경되었습니다.",
    "",
    "#{보충내역}",
    "#{변경사유}",
    "#{변경전}",
    "변경 후: #{보강일정}"
  ].join("\n")
};

export const defaultNotificationTemplates = {
  lessonNextHomeworkFollowup: "- 다음 수업 때 #{숙제}를 함께 확인하겠습니다.",
  lessonStayAfterHomeworkFollowup: "- 오늘 수업 후 #{숙제} 보충을 마무리합니다.",
  absenceMakeupStudentReminder: [
    "#{학생명} 학생 결석 보강 안내입니다.",
    "",
    "#{보강일정}",
    "#{보강대상}",
    "#{결석사유줄}",
    "#{확인숙제줄}",
    "#{보충메모}"
  ].join("\n"),
  homeworkMakeupStudentReminder: [
    "#{학생명} 학생 숙제 보충 안내입니다.",
    "",
    "#{보강일정}",
    "#{밀린숙제}",
    "#{보충메모}"
  ].join("\n"),
  supplementScheduleConfirmNotice: [
    "#{안내제목}",
    "",
    "#{보강일정}",
    "#{보강대상}",
    "#{결석사유줄}",
    "#{확인숙제줄}",
    "#{보충메모}"
  ].join("\n"),
  supplementScheduleChangeNotice: [
    "#{안내제목}",
    "",
    "#{보강일정}",
    "#{보강대상}",
    "#{결석사유줄}",
    "#{확인숙제줄}",
    "#{보충메모}",
    "#{변경사유}",
    "#{변경전}",
    "변경 후 일정: #{변경후일정}"
  ].join("\n"),
  noticeMaterialPreset: [
    "안녕하세요. 으뜸수학 고태영T입니다.",
    "",
    "다음 수업부터 사용할 교재를 안내드립니다.",
    "학생이 수업에 필요한 교재와 필기구를 준비할 수 있도록 확인 부탁드립니다.",
    "",
    "감사합니다."
  ].join("\n"),
  noticeMakeupPreset: [
    "안녕하세요. 으뜸수학 고태영T입니다.",
    "",
    "보강 수업 일정을 안내드립니다.",
    "가능한 시간 확인 후 회신 부탁드립니다.",
    "",
    "감사합니다."
  ].join("\n"),
  noticeAnnouncementPreset: [
    "안녕하세요. 으뜸수학 고태영T입니다.",
    "",
    "학원 공지사항을 안내드립니다.",
    "내용 확인 부탁드립니다.",
    "",
    "감사합니다."
  ].join("\n"),
  specialLectureGuideNotice: [
    "안녕하세요. #{학원명}입니다.",
    "#{특강명} 안내드립니다.",
    "",
    "대상: #{대상}",
    "요일: #{요일}",
    "시간: #{시간}",
    "",
    "#{특이사항블록}",
    "",
    "#{안내메모}",
    "",
    "#{안내문링크}"
  ].join("\n")
};

export function renderNotificationTemplate(template = "", variables = {}) {
  const rendered = Object.entries(variables).reduce(
    (text, [key, value]) => text.replaceAll(`#{${key}}`, String(value ?? "").replace(/\r\n?/g, "\n")),
    String(template ?? "")
  );
  return rendered
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function normalizeNotificationTemplates(templates = {}) {
  const sourceTemplates = templates && typeof templates === "object" ? templates : {};
  return Object.keys(defaultNotificationTemplates).reduce((normalized, templateKey) => ({
    ...normalized,
    [templateKey]: sourceTemplates[templateKey] === legacySupplementScheduleNotificationTemplates[templateKey]
      ? defaultNotificationTemplates[templateKey]
      : sourceTemplates[templateKey] ?? defaultNotificationTemplates[templateKey]
  }), {});
}
