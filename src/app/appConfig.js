export const storageKeys = {
  classTemplates: "academy-os.classTemplates.v1",
  lessons: "academy-os.lessons.v8",
  students: "academy-os.students.v12",
  studentIntakeApplicants: "academy-os.studentIntakeApplicants.v1",
  specialLectureApplications: "academy-os.specialLectureApplications.v1",
  specialLectureEnrollments: "academy-os.specialLectureEnrollments.v1",
  records: "academy-os.lessonStudentRecords.v7",
  homeworks: "academy-os.homeworks.v7",
  reportSnapshots: "academy-os.reportSnapshots.v1",
  makeupTasks: "academy-os.makeupTasks.v1",
  academyReminders: "academy-os.academyReminders.v1",
  notificationLogs: "academy-os.notificationLogs.v1",
  wrongProblems: "academy-os.wrongProblems.v1",
  problemBooks: "academy-os.problemBooks.v1",
  scoreRecords: "academy-os.scoreRecords.v1",
  academyTests: "academy-os.academyTests.v1",
  examPrepRows: "academy-os.examPrepRows.v2",
  tallySubmissions: "academy-os.tallySubmissions.v1",
  tallySummaries: "academy-os.tallySummaries.v1",
  examPostTargetStudentIds: "academy-os.examPostTargetStudentIds.v1",
  schoolEvents: "academy-os.schoolEvents.v1",
  studentQuestions: "academy-os.studentQuestions.v1",
  examPostSubmissions: "academy-os.examPostSubmissions.v1",
  studentConsultations: "academy-os.studentConsultations.v1",
  resourceMaterials: "academy-os.resourceMaterials.v1",
  lessonResearchItems: "academy-os.lessonResearchItems.v1",
  specialLectureGuides: "academy-os.specialLectureGuides.v1",
  aiSettings: "academy-os.aiSettings.v1",
  attendanceSettings: "academy-os.attendanceSettings.v1",
  lessonNotificationPlans: "academy-os.lessonNotificationPlans.v1",
  deletedLessonBundles: "academy-os.deletedLessonBundles.v1",
  teacherSession: "academy-os.teacherSession.v1"
};

export const legacySensitiveStorageKeys = ["academy-os.teacherAccountSettings.v1"];

export const academyBrandName = "으뜸수학 고태영T";
export const academyOperationalStartDate = "2026-06-19";
export const lessonDeleteRetentionMs = 7 * 24 * 60 * 60 * 1000;

export const lessonCalendarColors = {
  regular: "#bfdbfe",
  preExam: "#fed7aa",
  exam: "#fde68a",
  makeup: "#ddd6fe",
  homeworkMakeup: "#fecaca",
  absenceMakeup: "#e9d5ff",
  retest: "#fca5a5",
  examPrep: "#bae6fd",
  specialLecture: "#93c5fd"
};

export const regularLessonClassColors = {
  template_mwf_4_7: "#bfdbfe",
  template_mwf_7_10: "#c7d2fe",
  template_tt_sat_front: "#bbf7d0",
  template_tt_sat_back: "#fbcfe8"
};

export const fallbackRegularLessonColors = ["#bfdbfe", "#c7d2fe", "#bbf7d0", "#fbcfe8"];

export const classTemplateScheduleRules = {
  template_tt_sat_front: {
    days: ["tue", "thu", "sat"],
    endTime: "19:00",
    name: "화목 4-7 / 토 10-1반",
    saturdayEndTime: "13:00",
    saturdayStartTime: "10:00",
    startTime: "16:00",
    timeLabel: "화목 16:00-19:00 / 토 10:00-13:00"
  },
  template_tt_sat_back: {
    days: ["tue", "thu", "sat"],
    endTime: "22:00",
    name: "화목 7-10 / 토 1-4반",
    saturdayEndTime: "16:00",
    saturdayStartTime: "13:00",
    startTime: "19:00",
    timeLabel: "화목 19:00-22:00 / 토 13:00-16:00"
  }
};

export const academyReminderTypeOptions = [
  { value: "student_consultation", label: "학생 상담" },
  { value: "parent_consultation", label: "학부모 상담" },
  { value: "consultation", label: "상담 일정" },
  { value: "student_intake", label: "신입생 일정" },
  { value: "special_note", label: "특이사항" },
  { value: "parent_contact", label: "학부모 연락" },
  { value: "custom", label: "운영 알림" }
];

export const academyReminderPriorityOptions = [
  { value: "normal", label: "일반" },
  { value: "high", label: "중요" },
  { value: "low", label: "낮음" }
];

export const academyReminderStatusLabels = {
  pending: "대기",
  done: "완료",
  canceled: "취소"
};

export const schoolCalendarGradeOptions = ["중3", "고1", "고2", "고3"];
export const schoolCalendarMathSubjectOptions = ["공통수학1", "공통수학2", "대수", "미적분1", "확률과통계", "미적분2", "기하"];
export const schoolCalendarSchoolColorPalette = ["#7aa7ff", "#5fc8bd", "#a78bfa", "#fdba74", "#f9a8d4", "#67e8f9", "#93c5fd", "#86efac", "#fcd34d"];

export const schoolCalendarKnownColors = {
  상계고: "#7aa7ff",
  자운고: "#5fc8bd",
  정의여고: "#a78bfa",
  용화여고: "#f9a8d4",
  창동고: "#fdba74"
};

export const schoolCalendarLegacyColorMap = {
  "#2563eb": "#7aa7ff",
  "#0f766e": "#5fc8bd",
  "#7c3aed": "#a78bfa",
  "#ea580c": "#fdba74",
  "#db2777": "#f9a8d4",
  "#0891b2": "#67e8f9",
  "#4f46e5": "#93c5fd",
  "#65a30d": "#86efac",
  "#b45309": "#fcd34d"
};

export const testPaperKindOptions = [
  { id: "daily", label: "데일리 테스트", description: "오늘 배운 유형을 바로 확인" },
  { id: "cumulative", label: "누적테스트", description: "지난 유형을 섞어 망각 방지" },
  { id: "unit", label: "단원테스트", description: "중단원/대단원 마무리" }
];

export const testPaperPreparationOptions = [
  { id: "draft", label: "준비중" },
  { id: "review", label: "검토필요" },
  { id: "ready", label: "준비완료" },
  { id: "active", label: "사용중" },
  { id: "hold", label: "보류" }
];

export const testPaperProgressOptions = [
  { id: "waiting", label: "대기" },
  { id: "scheduled", label: "예정" },
  { id: "passed", label: "통과" },
  { id: "failed", label: "미통과" },
  { id: "retest1", label: "재시험1" },
  { id: "retest2", label: "재시험2" },
  { id: "hold", label: "강사확인" }
];

export const testAttemptStatusOptions = [
  { id: "", label: "미입력" },
  { id: "taken", label: "응시" },
  { id: "not_taken", label: "미응시" }
];

export const lessonResearchSubjects = ["공통수학1", "공통수학2", "대수", "미적분1", "확률과 통계", "기하"];
export const lessonResearchCategories = ["유형별 교안", "특정문항 교안", "못 푼 문제", "설명 아쉬움", "빈출 테마", "교재화 후보"];
export const lessonResearchStatuses = ["수집", "정리중", "교안작성", "교재후보", "완료"];

export const noticeWithdrawnClassFilterId = "withdrawn_students";
