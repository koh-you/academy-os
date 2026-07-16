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
