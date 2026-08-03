const source = "Supabase app_state.aiSettings.notificationTemplates";

export const notificationTemplateRows = [
  {
    audience: "학생/학부모",
    callSite: "수업일지 과제 상태 · 다음시간까지 · 수업 알림톡 별표 블록",
    key: "lessonNextHomeworkFollowup",
    source,
    title: "다음 수업 숙제 확인 안내",
    variables: "#{숙제}"
  },
  {
    audience: "학생/학부모",
    callSite: "수업일지 과제 상태 · 남아서 하고 가기 · 수업 알림톡 별표 블록",
    key: "lessonStayAfterHomeworkFollowup",
    source,
    title: "수업 후 숙제 보충 안내",
    variables: "#{숙제}"
  },
  {
    audience: "학생",
    callSite: "보충관리 결석보강 · 학생 당일 11시 리마인더",
    key: "absenceMakeupStudentReminder",
    source,
    title: "결석보강 학생 11시 알림톡",
    variables: "#{학생명}, #{보강일정}, #{보강대상}, #{결석사유줄}, #{확인숙제줄}, #{보충메모}"
  },
  {
    audience: "학생",
    callSite: "보충관리 숙제보충 · 학생 당일 11시 리마인더",
    key: "homeworkMakeupStudentReminder",
    source,
    title: "숙제보충 학생 11시 알림톡",
    variables: "#{학생명}, #{보강일정}, #{밀린숙제}, #{보충메모}"
  },
  {
    audience: "학생/학부모",
    callSite: "보충관리 수업일지 일정 만들기 · 다음 정각 확정 안내",
    key: "supplementScheduleConfirmNotice",
    source,
    title: "보충 일정 확정 안내",
    variables: "#{안내제목}, #{보강일정}, #{보강대상}, #{결석사유줄}, #{확인숙제줄}, #{보충메모}"
  },
  {
    audience: "학생/학부모",
    callSite: "보충관리 수업일지 일정 변경 · 다음 정각 변경 안내",
    key: "supplementScheduleChangeNotice",
    source,
    title: "보충 일정 변경 안내",
    variables: "#{안내제목}, #{보강일정}, #{보강대상}, #{결석사유줄}, #{확인숙제줄}, #{보충메모}, #{변경사유}, #{변경전}, #{변경후일정}"
  },
  {
    audience: "학생/학부모",
    callSite: "알림관리 공지 작성 · 교재문자 preset 선택",
    key: "noticeMaterialPreset",
    source,
    title: "교재 공지 초안",
    variables: "없음"
  },
  {
    audience: "학생/학부모",
    callSite: "알림관리 공지 작성 · 보강문자 preset 선택",
    key: "noticeMakeupPreset",
    source,
    title: "보강 공지 초안",
    variables: "없음"
  },
  {
    audience: "학생/학부모",
    callSite: "알림관리 공지 작성 · 공지문자 preset 선택",
    key: "noticeAnnouncementPreset",
    source,
    title: "일반 공지 초안",
    variables: "없음"
  },
  {
    audience: "학생/학부모",
    callSite: "특강관리 안내문 · 알림톡 미리보기와 발송 준비",
    key: "specialLectureGuideNotice",
    source,
    title: "특강 안내문 공지 초안",
    variables: "#{학원명}, #{특강명}, #{대상}, #{요일}, #{시간}, #{특이사항블록}, #{안내메모}, #{안내문링크}"
  }
];
