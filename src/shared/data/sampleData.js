const studentRows = [
  ["student_mwf710_001", "박수빈", "student", "2fd869dca33381cf9f67e6118c1561cd"],
  ["student_mwf710_002", "이진후", "student-mwf710-02", "2fd869dca33381b2a356ebd830be2d85"],
  ["student_mwf710_003", "서정원", "student-mwf710-03", "2fc869dca3338138b1f4ca1c62b40192"],
  ["student_mwf710_004", "박지현", "student-mwf710-04", "2fd869dca33381eb81f3dcd072da22de"],
  ["student_mwf710_005", "최선호", "student-mwf710-05", "314869dca33381f29497dc4f66cfa17d"],
  ["student_mwf710_006", "최원석", "student-mwf710-06", "312869dca33381078b1bfb937efbf215"],
  ["student_mwf710_007", "김룡기", "student-mwf710-07", "356869dca333810da4c2f52cc21e9e14"],
  ["student_mwf710_008", "김서윤", "student-mwf710-08", "35f869dca33381ab90c3cafcda1e4ea8"]
];

const studentIds = studentRows.map(([studentId]) => studentId);
const notionClassPageUrl = "https://app.notion.com/p/2f4869dca3338043b689c8bb8105d76d";

const notionLessonRows = [
  {
    notionPageId: "34f869dca3338016adf2eae34843a1f5",
    date: "2026-06-03",
    studentName: "박수빈",
    progress: "작년 6월 모의고사 대비",
    previousHomework: "RPM 844~874",
    nextHomework: "RPM 875~910",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "안녕하세요, 고태영T입니다.\n\n이번 주 주말부터 일요 보충 수업을 시작할 계획입니다. 구체적인 시간은 확정되는 대로 별도로 안내드리겠습니다.\n\n감사합니다.",
    reportSent: true
  },
  {
    notionPageId: "34f869dca3338013957ac05692c4346e",
    date: "2026-06-03",
    studentName: "이진후",
    progress: "작년 6월 모의고사 대비",
    previousHomework: "GRIP ~903",
    nextHomework: "GRIP ~911",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "지각",
    lateMinutes: "30분",
    attendanceReason: "낮잠",
    teacherComment: "안녕하세요, 고태영T입니다.\n\n이번 주 주말부터 일요 보충 수업을 시작할 계획입니다. 구체적인 시간은 확정되는 대로 별도로 안내드리겠습니다.\n\n감사합니다.",
    reportSent: true
  },
  {
    notionPageId: "34f869dca33380c6942dd0fa476abff7",
    date: "2026-06-03",
    studentName: "서정원",
    progress: "작년 6월 모의고사 대비",
    previousHomework: "GRIP ~903",
    nextHomework: "GRIP ~911",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "안녕하세요, 고태영T입니다.\n\n이번 주 주말부터 일요 보충 수업을 시작할 계획입니다. 구체적인 시간은 확정되는 대로 별도로 안내드리겠습니다.\n\n감사합니다.",
    reportSent: true
  },
  {
    notionPageId: "34f869dca333806d9273c5f3f33ccf45",
    date: "2026-06-03",
    studentName: "박지현",
    progress: "작년 6월 모의고사 대비",
    previousHomework: "GRIP ~903",
    nextHomework: "GRIP ~911",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "안녕하세요, 고태영T입니다.\n\n이번 주 주말부터 일요 보충 수업을 시작할 계획입니다. 구체적인 시간은 확정되는 대로 별도로 안내드리겠습니다.\n\n감사합니다.",
    reportSent: true
  },
  {
    notionPageId: "34f869dca33380d99067e95a0880828f",
    date: "2026-06-03",
    studentName: "최선호",
    progress: "작년 6월 모의고사 대비",
    previousHomework: "GRIP ~525번",
    nextHomework: "프린트 30문항",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "안녕하세요, 고태영T입니다.\n\n이번 주 주말부터 일요 보충 수업을 시작할 계획입니다. 구체적인 시간은 확정되는 대로 별도로 안내드리겠습니다.\n\n감사합니다.",
    reportSent: true
  },
  {
    notionPageId: "34f869dca33380c2a96cfbc383b8adb5",
    date: "2026-06-03",
    studentName: "최원석",
    progress: "작년 6월 모의고사 대비",
    previousHomework: "RPM 714~758",
    nextHomework: "",
    homeworkStatus: "결석",
    incompleteHomework: "",
    attendance: "결석",
    lateMinutes: "",
    attendanceReason: "가족모임",
    teacherComment: "안녕하세요, 고태영T입니다.\n\n이번 주 주말부터 일요 보충 수업을 시작할 계획입니다. 구체적인 시간은 확정되는 대로 별도로 안내드리겠습니다.\n\n감사합니다.",
    reportSent: true
  },
  {
    notionPageId: "379869dca33380a09967ee5aec68d7cb",
    date: "2026-06-08",
    studentName: "최선호",
    progress: "이차방정식과 이차함수",
    previousHomework: "오답 30문제 (RPM, GRIP, 바이블)",
    nextHomework: "",
    homeworkStatus: "결석",
    incompleteHomework: "",
    attendance: "결석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "안녕하세요, 고태영T입니다.\n\n오늘 최선호 학생이 수업에 참석하지 못하였으며, 수요일에 보충 수업을 진행할 예정입니다.\n\n감사합니다.",
    reportSent: true
  },
  {
    notionPageId: "379869dca333808ea961d4a009b1bcbd",
    date: "2026-06-08",
    studentName: "김룡기",
    progress: "이차방정식과 이차함수",
    previousHomework: "쎈 이차함수 924 ~ 969",
    nextHomework: "쎈 오답, 근의 위치 프린트",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "특별히 언급드릴 사항은 없습니다.",
    reportSent: true
  },
  {
    notionPageId: "379869dca3338027aa82cb5a0f4c0695",
    date: "2026-06-08",
    studentName: "서정원",
    progress: "경우의 수",
    previousHomework: "쎈 경우의 수 ~1125",
    nextHomework: "쎈 경우의 수 ~1180",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "특별히 언급드릴 사항은 없습니다.",
    reportSent: true
  },
  {
    notionPageId: "379869dca33380e7bae4dd25a01f03a0",
    date: "2026-06-08",
    studentName: "최원석",
    progress: "개별진도",
    previousHomework: "RPM 567~628",
    nextHomework: "RPM 629~668",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "특별히 언급드릴 사항은 없습니다.",
    reportSent: true
  },
  {
    notionPageId: "379869dca3338084a9e1fd3e21e88222",
    date: "2026-06-08",
    studentName: "김서윤",
    progress: "이차방정식과 이차함수",
    previousHomework: "쎈 614~642 오답",
    nextHomework: "쎈 689~733",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "특별히 언급드릴 사항은 없습니다.",
    reportSent: true
  },
  {
    notionPageId: "37a869dca3338095aea6c6be3dc82ef6",
    date: "2026-06-10",
    studentName: "최선호",
    progress: "여러가지 방부등식",
    previousHomework: "",
    nextHomework: "GRIP 928-957",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "특별히 언급드릴 사항은 없습니다.",
    reportSent: true
  },
  {
    notionPageId: "37a869dca3338043b071ce905e4c7fc9",
    date: "2026-06-10",
    studentName: "김룡기",
    progress: "개별진도",
    previousHomework: "쎈 오답, 근의 위치 프린트",
    nextHomework: "쎈 1231 - 1269",
    homeworkStatus: "미완료",
    incompleteHomework: "쎈 오답 숙제 미검사",
    attendance: "지각",
    lateMinutes: "30분",
    attendanceReason: "학교 동아리",
    teacherComment: "특별히 언급드릴 사항은 없습니다.",
    reportSent: true
  },
  {
    notionPageId: "37a869dca3338021a7b8edba5b2e8acf",
    date: "2026-06-10",
    studentName: "이진후",
    progress: "경우의 수",
    previousHomework: "쎈 경우의 수 ~1180",
    nextHomework: "GRIP 928-957",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "특별히 언급드릴 사항은 없습니다.",
    reportSent: true
  },
  {
    notionPageId: "37a869dca333804986b3fc2d7c4d9770",
    date: "2026-06-10",
    studentName: "서정원",
    progress: "경우의 수",
    previousHomework: "쎈 경우의 수 ~1180",
    nextHomework: "GRIP 928-957",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "특별히 언급드릴 사항은 없습니다.",
    reportSent: true
  },
  {
    notionPageId: "37a869dca3338002919cc397d43a205f",
    date: "2026-06-10",
    studentName: "박지현",
    progress: "경우의 수",
    previousHomework: "절대등급 B, C",
    nextHomework: "GRIP 928-957",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "특별히 언급드릴 사항은 없습니다.",
    reportSent: true
  },
  {
    notionPageId: "37a869dca333802692ddf0de1750385f",
    date: "2026-06-10",
    studentName: "최원석",
    progress: "개별진도",
    previousHomework: "RPM 629~668",
    nextHomework: "rpm 경우의 수",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "특별히 언급드릴 사항은 없습니다.",
    reportSent: true
  },
  {
    notionPageId: "37a869dca333809a99edcf66741640df",
    date: "2026-06-10",
    studentName: "김서윤",
    progress: "여러가지 방부등식",
    previousHomework: "쎈 689~733",
    nextHomework: "쎈 734-834",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "특별히 언급드릴 사항은 없습니다.",
    reportSent: true
  },
  {
    notionPageId: "37a869dca333807287f9cabcaa3e8305",
    date: "2026-06-12",
    studentName: "박수빈",
    progress: "경우의 수",
    previousHomework: "rpm 경우의 수",
    nextHomework: "rpm 순열과 조합",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "안녕하세요, 고태영T입니다.\n\n주말 여행으로 인해 진행하지 못한 보충수업은 다음 주 월요일 오후 4시에 보충 진행할 예정입니다.\n\n감사합니다.",
    reportSent: true
  },
  {
    notionPageId: "37a869dca33380b7a6b4d754fe944ad1",
    date: "2026-06-12",
    studentName: "이진후",
    progress: "행렬",
    previousHomework: "GRIP 928-957",
    nextHomework: "GRIP ~987",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "안녕하세요, 고태영T입니다.\n\n모레 오후 12시에 일요 시험대비 수업이 있습니다.\n\n감사합니다.",
    reportSent: true
  },
  {
    notionPageId: "37a869dca33380b2ad5cca2fc3c2bb40",
    date: "2026-06-12",
    studentName: "서정원",
    progress: "행렬",
    previousHomework: "GRIP 928-957",
    nextHomework: "GRIP ~987",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "안녕하세요, 고태영T입니다.\n\n모레 오후 12시에 일요 시험대비 수업이 있습니다.\n\n감사합니다.",
    reportSent: true
  },
  {
    notionPageId: "37a869dca333800db0d4f1b8f7b3a52b",
    date: "2026-06-12",
    studentName: "박지현",
    progress: "행렬",
    previousHomework: "GRIP 928-957",
    nextHomework: "GRIP ~987, 절대등급 C",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "안녕하세요, 고태영T입니다.\n\n모레 오후 12시에 일요 시험대비 수업이 있습니다.\n\n감사합니다.",
    reportSent: true
  },
  {
    notionPageId: "37a869dca33380fdb954c1225fb89e12",
    date: "2026-06-12",
    studentName: "최선호",
    progress: "행렬",
    previousHomework: "GRIP 928-957",
    nextHomework: "쎈 643-647",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "안녕하세요, 고태영T입니다.\n\n내일 오후 6시에 일요 시험대비 수업이 있습니다.\n\n감사합니다.",
    reportSent: true
  },
  {
    notionPageId: "37a869dca333809eb4b1c3bd3dd3afe8",
    date: "2026-06-12",
    studentName: "최원석",
    progress: "경우의 수",
    previousHomework: "rpm 경우의 수",
    nextHomework: "개념원리 ~p.266",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "안녕하세요, 고태영T입니다.\n\n모레 오후 12시에 일요 시험대비 수업이 있습니다.\n\n감사합니다.",
    reportSent: true
  },
  {
    notionPageId: "37a869dca3338013a3b5db119d530638",
    date: "2026-06-12",
    studentName: "김룡기",
    progress: "행렬",
    previousHomework: "쎈 1231 - 1269",
    nextHomework: "쎈 643-647",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "지각",
    lateMinutes: "10분",
    attendanceReason: "학교 동아리",
    teacherComment: "안녕하세요, 고태영T입니다.\n\n내일 오후 6시에 일요 시험대비 수업이 있습니다.\n\n감사합니다.",
    reportSent: true
  },
  {
    notionPageId: "37a869dca333803ca86bc46d5d25f160",
    date: "2026-06-12",
    studentName: "김서윤",
    progress: "행렬",
    previousHomework: "쎈 734-834",
    nextHomework: "쎈 643-647",
    homeworkStatus: "완료",
    incompleteHomework: "",
    attendance: "출석",
    lateMinutes: "",
    attendanceReason: "",
    teacherComment: "안녕하세요, 고태영T입니다.\n\n내일 오후 6시에 일요 시험대비 수업이 있습니다.\n\n감사합니다.",
    reportSent: true
  }
];

const lessonDates = [...new Set(notionLessonRows.map((row) => row.date))].sort();

function lessonIdForDate(date) {
  return `lesson_${date}_mwf-7-10`;
}

function getStudentByName(name) {
  return studentRows.find(([, studentName]) => studentName === name);
}

function toAttendanceStatus(attendance) {
  if (attendance === "출석") return "present";
  if (attendance === "지각") return "late";
  if (attendance === "결석") return "absent";
  return "pending";
}

function toHomeworkStatus(status) {
  if (status === "완료") return "verified";
  if (status === "미완료") return "missing";
  if (status === "결석") return "overdue";
  return "assigned";
}

function stripReportText(text) {
  return text.replaceAll("<br>", "\n").replaceAll("\\\\", "").trim();
}

export const sampleData = {
  classTemplates: [
    {
      classTemplateId: "template_mwf_7_10",
      name: "월수금 7-10반",
      days: ["mon", "wed", "fri"],
      timeLabel: "19:00-22:00",
      startTime: "19:00",
      endTime: "22:00",
      color: "#e5489b",
      track: "고1 내신",
      notionClassPageUrl
    }
  ],

  students: studentRows.map(([studentId, name, loginId, notionStudentPageId]) => ({
    studentId,
    name,
    loginId,
    pin: "1234",
    birthYear: "",
    schoolName: "",
    grade: "고1",
    textbook: "",
    specialNote: "노션 학생관리 페이지의 월수금 7-10반 실제 재원생",
    defaultClassTemplateId: "template_mwf_7_10",
    scheduleOverride: "",
    notionStudentPageId
  })),

  lessons: lessonDates.map((date) => {
    const rows = notionLessonRows.filter((row) => row.date === date);
    return {
      lessonId: lessonIdForDate(date),
      classTemplateId: "template_mwf_7_10",
      className: "월수금 7-10반",
      lessonTopic: [...new Set(rows.map((row) => row.progress).filter(Boolean))].join(" / "),
      lessonType: "class",
      date,
      dayOfWeek: new Date(`${date}T00:00:00+09:00`).toLocaleDateString("en-US", { weekday: "short" }).toLowerCase(),
      startTime: "19:00",
      endTime: "22:00",
      color: "#e5489b",
      teacherId: "instructor_owner_001",
      studentIds,
      status: "completed",
      notionSource: "수업 DB",
      notionClassPageUrl
    };
  }),

  lessonStudentRecords: notionLessonRows.map((row) => {
    const [studentId] = getStudentByName(row.studentName);
    const homeworkStatus = toHomeworkStatus(row.homeworkStatus);
    return {
      lessonStudentRecordId: `lsr_${row.date}_mwf-7-10_${studentId}`,
      lessonId: lessonIdForDate(row.date),
      studentId,
      attendanceStatus: toAttendanceStatus(row.attendance),
      behaviorTag: row.lateMinutes ? `지각 ${row.lateMinutes}` : "",
      homeworkStatus,
      teacherComment: stripReportText(row.teacherComment),
      studentComment: "",
      needsMakeup: homeworkStatus === "missing" || homeworkStatus === "overdue",
      needsRetest: false,
      notionPageId: row.notionPageId,
      attendanceReason: row.attendanceReason,
      reportSent: row.reportSent
    };
  }),

  homeworks: notionLessonRows.flatMap((row) => {
    const [studentId] = getStudentByName(row.studentName);
    const status = toHomeworkStatus(row.homeworkStatus);
    const items = [];

    if (row.previousHomework) {
      items.push({
        homeworkId: `homework_previous_${row.date}_${studentId}`,
        studentId,
        lessonId: lessonIdForDate(row.date),
        title: row.previousHomework,
        subject: "노션 수업 DB",
        homeworkType: "previous",
        totalProblems: null,
        status,
        studentStatus: status === "verified" ? "checked_done" : "not_started",
        teacherStatus: status === "verified" ? "verified" : status,
        assignedDate: row.date,
        dueDate: row.date,
        notionPageId: row.notionPageId,
        incompleteHomework: row.incompleteHomework
      });
    }

    if (row.nextHomework) {
      items.push({
        homeworkId: `homework_next_${row.date}_${studentId}`,
        studentId,
        lessonId: lessonIdForDate(row.date),
        title: row.nextHomework,
        subject: "노션 수업 DB",
        homeworkType: "next",
        totalProblems: null,
        status: "assigned",
        studentStatus: "not_started",
        teacherStatus: "unverified",
        assignedDate: row.date,
        dueDate: "",
        notionPageId: row.notionPageId
      });
    }

    return items;
  }),

  wrongProblems: [
    {
      wrongProblemId: "wrong_mwf710_kry_2026-06-10",
      studentId: "student_mwf710_007",
      source: "쎈",
      problemRange: "오답 숙제 미검사",
      status: "open",
      note: "2026-06-10 수업 DB 미완료 숙제"
    },
    {
      wrongProblemId: "wrong_mwf710_pjh_2026-06-12",
      studentId: "student_mwf710_004",
      source: "절대등급",
      problemRange: "C",
      status: "reviewing",
      note: "다음 숙제에 포함"
    }
  ],

  scoreRecords: [
    {
      scoreRecordId: "score_mwf710_mock_2026-06-03",
      studentId: "student_mwf710_002",
      examType: "모의고사",
      examDate: "2026-06-03",
      subject: "수학",
      score: "",
      grade: "",
      note: "작년 6월 모의고사 대비 수업"
    }
  ],

  academyTests: [
    {
      testId: "academy_test_mwf710_2026-06-12",
      testDate: "2026-06-12",
      title: "일요 시험대비 안내",
      scope: "행렬 / 경우의 수",
      averageScore: "",
      note: "노션 수업 DB 강사코멘트 기준"
    }
  ],

  reportTemplates: [
    {
      reportTemplateId: "report_template_daily_parent",
      name: "학부모 데일리 리포트",
      audience: "parent",
      body: "{studentName} 학생은 {lessonDate} {className} 수업에서 출결은 {attendance}, 숙제 상태는 {homework}입니다. 강사 코멘트: {teacherComment}"
    }
  ]
};

const realClassTemplates = [
  {
    classTemplateId: "template_mwf_4_7",
    name: "월수금 4-7반",
    days: ["mon", "wed", "fri"],
    timeLabel: "16:00-19:00",
    startTime: "16:00",
    endTime: "19:00",
    color: "#2563eb",
    track: "고1 내신",
    notionClassPageUrl
  },
  {
    classTemplateId: "template_mwf_7_10",
    name: "월수금 7-10반",
    days: ["mon", "wed", "fri"],
    timeLabel: "19:00-22:00",
    startTime: "19:00",
    endTime: "22:00",
    color: "#e5489b",
    track: "고1 내신",
    notionClassPageUrl
  },
  {
    classTemplateId: "template_tt_sat_front",
    name: "화목 4-7 / 토 10-1반",
    days: ["tue", "thu", "sat"],
    timeLabel: "화목 16:00-19:00 / 토 10:00-13:00",
    startTime: "16:00",
    endTime: "19:00",
    saturdayStartTime: "10:00",
    saturdayEndTime: "13:00",
    color: "#10b981",
    track: "내신",
    notionClassPageUrl: ""
  },
  {
    classTemplateId: "template_tt_sat_back",
    name: "화목 7-10 / 토 1-4반",
    days: ["tue", "thu", "sat"],
    timeLabel: "화목 19:00-22:00 / 토 13:00-16:00",
    startTime: "19:00",
    endTime: "22:00",
    saturdayStartTime: "13:00",
    saturdayEndTime: "16:00",
    color: "#7c3aed",
    track: "내신",
    notionClassPageUrl: ""
  }
];

const realStudentProfiles = {
  student_mwf710_001: { name: "박수빈", schoolName: "자운고", grade: "고1", parentPhone: "01057882748", studentPhone: "01074874390" },
  student_mwf710_002: { name: "이진후", schoolName: "정의여고", grade: "고1", parentPhone: "01057882748", studentPhone: "01096493812" },
  student_mwf710_003: { name: "서정원", schoolName: "정의여고", grade: "고1", parentPhone: "01057882748", studentPhone: "01053401390" },
  student_mwf710_004: { name: "박지현", schoolName: "용화여고", grade: "고1", parentPhone: "01057882748", studentPhone: "01053040456" },
  student_mwf710_005: { name: "최선호", schoolName: "창동고", grade: "고1", parentPhone: "01057882748", studentPhone: "01054657756" },
  student_mwf710_006: { name: "최원석", schoolName: "상계고", grade: "고1", parentPhone: "01057882748", studentPhone: "01030151668" },
  student_mwf710_007: { name: "김룡기", schoolName: "창동고", grade: "고1", parentPhone: "01057882748", studentPhone: "01056943770" },
  student_mwf710_008: { name: "김서윤", schoolName: "창동고", grade: "고1", parentPhone: "01057882748", studentPhone: "01084087521" }
};

sampleData.classTemplates = realClassTemplates;
sampleData.students = sampleData.students.map((student) => ({
  ...student,
  ...(realStudentProfiles[student.studentId] ?? {}),
  loginId: student.studentId === "student_mwf710_001" ? "student" : student.loginId,
  pin: "1234",
  defaultClassTemplateId: "template_mwf_7_10",
  specialNote: student.specialNote || "월수금 7-10반 실제 재원생",
  withdrawalComment: student.withdrawalComment ?? "",
  withdrawalReason: student.withdrawalReason ?? ""
}));

sampleData.lessons = sampleData.lessons.map((lesson) => ({
  ...lesson,
  className: "월수금 7-10반",
  classTemplateId: "template_mwf_7_10",
  color: "#e5489b"
}));

sampleData.examPrepRows = [
  {
    examPrepId: "exam_prep_yonghwa_2026_mid_1",
    examCycle: "2026-1-mid",
    schoolName: "용화여고",
    grade: "1학년",
    subject: "공통수학1",
    publisher: "천재(홍)",
    scope: "이차방정식과 이차함수",
    subTextbook: "없음",
    review: "객관식, 단답형, 서술형이 모두 있는 시험지. 교과서 문항 중 어려운 문항이 많이 출제됨.",
    revisedReview: "객관식, 단답형, 서술형이 모두 있는 시험지입니다. 교과서 문항들 가운데 어려운 문항들이 많이 출제되었습니다.",
    memo: "",
    notionPageUrl: "https://app.notion.com/p/331869dca3338185a672ec020fe67485"
  },
  {
    examPrepId: "exam_prep_sanggye_2026_mid_1",
    examCycle: "2026-1-mid",
    schoolName: "상계고",
    grade: "1학년",
    subject: "공통수학1",
    publisher: "천재(홍)",
    scope: "교과서 ~p.73, p.93,94 (1~3, 5~9번), 이차방정식과 이차함수",
    subTextbook: "없음",
    review: "평이하게 나왔음. 내신 시험지에 모의고사를 녹여서 나오는 상계 스타일이나 눈에 띄는 고난도 문항은 없음.",
    revisedReview: "평이하게 나왔습니다. 내신 시험지에 모의고사를 잘 녹여서 나오는 상계 스타일대로 만들었으나 눈에 띄는 고난도 문항은 없었습니다.",
    memo: "",
    notionPageUrl: "https://app.notion.com/p/331869dca33381c59ac6f642ce441207"
  },
  {
    examPrepId: "exam_prep_jaun_2026_mid_1",
    examCycle: "2026-1-mid",
    schoolName: "자운고",
    grade: "1학년",
    subject: "공통수학1",
    publisher: "미래엔",
    scope: "이차방정식과 이차함수",
    subTextbook: "없음",
    review: "예년에 비해 스타일이 확 바뀐 시험지. 고1 시험지 중 어려운 문제가 가장 많음.",
    revisedReview: "예년에 비해 스타일이 확 바뀐 시험지입니다. 고1 시험지 중 어려운 문제가 가장 많았습니다.",
    memo: "",
    notionPageUrl: "https://app.notion.com/p/331869dca33381e9b1c5d0bd2088115e"
  },
  {
    examPrepId: "exam_prep_jeongui_2026_mid_1",
    examCycle: "2026-1-mid",
    schoolName: "정의여고",
    grade: "1학년",
    subject: "공통수학1",
    publisher: "미래엔",
    scope: "이차방정식과 이차함수",
    subTextbook: "작년 6, 9, 10월 모의고사 27문항",
    review: "작년에 쉽게 나왔고 올해도 작년과 비슷하게 냈다는 학교 선생님의 말씀이 있었음.",
    revisedReview: "작년에 쉽게 나왔고, 올해도 작년과 비슷하게 냈다는 학교 선생님의 말씀이 있었습니다.",
    memo: "",
    notionPageUrl: "https://app.notion.com/p/331869dca333814ca420dbaac0f86733"
  },
  {
    examPrepId: "exam_prep_changdong_2026_mid_1",
    examCycle: "2026-1-mid",
    schoolName: "창동고",
    grade: "1학년",
    subject: "공통수학1",
    publisher: "미래엔",
    scope: "~이차방정식, 경우의 수",
    subTextbook: "없음",
    review: "수업이 A, B로 나뉘어서 앞부분~이차방정식, 경우의 수가 섞인 시험지.",
    revisedReview: "한 문항에 여러 가지를 물어봐서 22문항 시험지이지만 사실상 30문제 정도 되는 시험지였습니다.",
    memo: "수업이 A, B 나뉨. 경우의 수, 분할과 분배 제외.",
    notionPageUrl: "https://app.notion.com/p/331869dca33381949011c6df5ab29abc"
  },
  {
    examPrepId: "exam_prep_jeongui_2026_mid_geo",
    examCycle: "2026-1-mid",
    schoolName: "정의여고",
    grade: "3학년",
    subject: "기하",
    publisher: "신사고",
    scope: "기하 1단원",
    subTextbook: "없음",
    review: "교과서에서 모두 준 시험지. 교과서 전 문항과 기출 2회분 설명 후 모두 잘 봄.",
    revisedReview: "교과서에서 모두 출제된 시험지입니다. 교과서 전 문항을 풀고 기출 2회분을 설명했습니다.",
    memo: "",
    notionPageUrl: "https://app.notion.com/p/331869dca3338197a042db6b73180a72"
  },
  {
    examPrepId: "exam_prep_sanggye_2026_mid_probability",
    examCycle: "2026-1-mid",
    schoolName: "상계고",
    grade: "3학년",
    subject: "확통",
    publisher: "신사고",
    scope: "수학적 확률 (조건부 확률 전), 교과서 ~p.56",
    subTextbook: "없음",
    review: "시험시간 40분, 20문제의 특이한 시험지. 과거 기출 응용이 중요해 보임.",
    revisedReview: "시험 시간 40분, 20문제의 특이한 시험지입니다. 기출 문항 공부가 특히 중요해 보입니다.",
    memo: "",
    notionPageUrl: "https://app.notion.com/p/331869dca33381769a6fdf0daa34b4f9"
  },
  {
    examPrepId: "exam_prep_jaun_2026_mid_probability",
    examCycle: "2026-1-mid",
    schoolName: "자운고",
    grade: "3학년",
    subject: "확통",
    publisher: "미래엔",
    scope: "조건부확률 끝까지",
    subTextbook: "교과서 10~75, 수특 4~57(Level 3 제외)",
    review: "수능특강 반영이라고 했는데 수능특강 문제가 잘 보이지 않는 시험지.",
    revisedReview: "수능특강 반영이라고 했는데 수능특강 문제가 보이지 않는 시험지입니다.",
    memo: "",
    notionPageUrl: "https://app.notion.com/p/331869dca333818e8f7cc05a4f0f33dc"
  }
];
