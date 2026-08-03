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
  ].join("\n")
};

export const notificationTemplateRows = [
  {
    audience: "학생/학부모",
    callSite: "수업일지 과제 상태 · 다음시간까지 · 수업 알림톡 별표 블록",
    key: "lessonNextHomeworkFollowup",
    source: "Supabase app_state.aiSettings.notificationTemplates",
    title: "다음 수업 숙제 확인 안내",
    variables: "#{숙제}"
  },
  {
    audience: "학생/학부모",
    callSite: "수업일지 과제 상태 · 남아서 하고 가기 · 수업 알림톡 별표 블록",
    key: "lessonStayAfterHomeworkFollowup",
    source: "Supabase app_state.aiSettings.notificationTemplates",
    title: "수업 후 숙제 보충 안내",
    variables: "#{숙제}"
  },
  {
    audience: "학생",
    callSite: "보충관리 결석보강 · 학생 당일 11시 리마인더",
    key: "absenceMakeupStudentReminder",
    source: "Supabase app_state.aiSettings.notificationTemplates",
    title: "결석보강 학생 11시 알림톡",
    variables: "#{학생명}, #{보강일정}, #{보강대상}, #{결석사유줄}, #{확인숙제줄}, #{보충메모}"
  },
  {
    audience: "학생",
    callSite: "보충관리 숙제보충 · 학생 당일 11시 리마인더",
    key: "homeworkMakeupStudentReminder",
    source: "Supabase app_state.aiSettings.notificationTemplates",
    title: "숙제보충 학생 11시 알림톡",
    variables: "#{학생명}, #{보강일정}, #{밀린숙제}, #{보충메모}"
  },
  {
    audience: "학생/학부모",
    callSite: "보충관리 수업일지 일정 만들기 · 다음 정각 확정 안내",
    key: "supplementScheduleConfirmNotice",
    source: "Supabase app_state.aiSettings.notificationTemplates",
    title: "보충 일정 확정 안내",
    variables: "#{안내제목}, #{보강일정}, #{보강대상}, #{결석사유줄}, #{확인숙제줄}, #{보충메모}"
  },
  {
    audience: "학생/학부모",
    callSite: "보충관리 수업일지 일정 변경 · 다음 정각 변경 안내",
    key: "supplementScheduleChangeNotice",
    source: "Supabase app_state.aiSettings.notificationTemplates",
    title: "보충 일정 변경 안내",
    variables: "#{안내제목}, #{보강일정}, #{보강대상}, #{결석사유줄}, #{확인숙제줄}, #{보충메모}, #{변경사유}, #{변경전}, #{변경후일정}"
  }
];

export function normalizeNotificationTemplates(templates = {}) {
  const sourceTemplates = templates && typeof templates === "object" ? templates : {};
  return Object.keys(defaultNotificationTemplates).reduce((normalized, templateKey) => ({
    ...normalized,
    [templateKey]: sourceTemplates[templateKey] === legacySupplementScheduleNotificationTemplates[templateKey]
      ? defaultNotificationTemplates[templateKey]
      : sourceTemplates[templateKey] ?? defaultNotificationTemplates[templateKey]
  }), {});
}
