import assert from "node:assert/strict";
import {
  createLessonModalColorOptions,
  createLessonModalDateChangePatch,
  createLessonModalStartTimeChangePatch,
  createLessonModalTemplateChangePatch,
  createLessonModalTypeChangePatch,
  getLessonModalFollowedEndTime
} from "../src/domains/lessons/lessonModalDraftTransitions.js";

const templates = [
  {
    classTemplateId: "class-a",
    name: "월수금 4-7",
    startTime: "16:00",
    endTime: "19:00",
    saturdayStartTime: "10:00",
    saturdayEndTime: "13:00"
  },
  {
    classTemplateId: "class-b",
    name: "화목 7-10",
    startTime: "19:00",
    endTime: "22:00"
  }
];
const activeStudents = [
  { studentId: "student-a", defaultClassTemplateId: "class-a" },
  { studentId: "student-b", defaultClassTemplateId: "class-b" },
  { studentId: "student-c", defaultClassTemplateId: "class-a" }
];
const lessonCalendarColors = {
  closure: "#closure",
  exam: "#exam",
  examPrep: "#exam-prep",
  makeup: "#makeup",
  preExam: "#pre-exam"
};
const getRegularLessonColor = (template) => `#regular-${template.classTemplateId}`;
const getStandardLessonColor = ({ lessonType, classTemplateId, className }) =>
  `#${lessonType}-${classTemplateId}-${className}`;
const getTemplateLessonTimes = (template, date) => date === "2026-08-01"
  ? {
      startTime: template.saturdayStartTime ?? template.startTime,
      endTime: template.saturdayEndTime ?? template.endTime
    }
  : {
      startTime: template.startTime,
      endTime: template.endTime
    };
const addDaysInKorea = (date, days) => `${date}+${days}`;

assert.deepEqual(
  createLessonModalColorOptions({
    getRegularLessonColor,
    lessonCalendarColors,
    templates
  }),
  [
    {
      id: "class-class-a",
      label: "월수금 4-7",
      lessonType: "class",
      classTemplateId: "class-a",
      color: "#regular-class-a"
    },
    {
      id: "class-class-b",
      label: "화목 7-10",
      lessonType: "class",
      classTemplateId: "class-b",
      color: "#regular-class-b"
    },
    { id: "preExam", label: "직전수업", lessonType: "preExam", color: "#pre-exam" },
    { id: "closure", label: "휴강", lessonType: "closure", color: "#closure" },
    { id: "makeup", label: "보충수업", lessonType: "makeup", color: "#makeup" },
    { id: "examPrep", label: "시험대비", lessonType: "examPrep", color: "#exam-prep" },
    { id: "exam", label: "평가", lessonType: "exam", color: "#exam" }
  ]
);

assert.deepEqual(
  createLessonModalTemplateChangePatch({
    activeStudents,
    date: "2026-08-01",
    getStandardLessonColor,
    getTemplateLessonTimes,
    nextLessonType: "class",
    nextTemplateId: "class-a",
    templates
  }),
  {
    classTemplateId: "class-a",
    color: "#class-class-a-월수금 4-7",
    endTime: "13:00",
    hasTemplate: true,
    name: "월수금 4-7",
    startTime: "10:00",
    studentIds: ["student-a", "student-c"]
  }
);
assert.deepEqual(
  createLessonModalTemplateChangePatch({
    activeStudents,
    date: "2026-07-31",
    getStandardLessonColor,
    getTemplateLessonTimes,
    nextLessonType: "class",
    nextTemplateId: "",
    templates
  }),
  {
    classTemplateId: "",
    hasTemplate: false
  },
  "direct-input selection must only clear the class template id"
);

assert.deepEqual(
  createLessonModalTypeChangePatch({
    classTemplateId: "class-a",
    getStandardLessonColor,
    name: "월수금 4-7",
    nextLessonType: "closure"
  }),
  {
    color: "#closure-class-a-월수금 4-7",
    lessonType: "closure"
  }
);

assert.deepEqual(
  createLessonModalDateChangePatch({
    activeTemplate: templates[0],
    addDaysInKorea,
    closureMakeupDateTouched: false,
    getTemplateLessonTimes,
    nextDate: "2026-08-01"
  }),
  {
    closureMakeupDate: "2026-08-01+7",
    date: "2026-08-01",
    endTime: "13:00",
    startTime: "10:00"
  }
);
assert.deepEqual(
  createLessonModalDateChangePatch({
    activeTemplate: templates[0],
    addDaysInKorea,
    closureMakeupDateTouched: true,
    getTemplateLessonTimes,
    nextDate: "2026-08-01"
  }),
  {
    date: "2026-08-01",
    endTime: "13:00",
    startTime: "10:00"
  },
  "a manually touched closure makeup date must be preserved"
);

// 2026-09-26 · 신규 등록은 시작 시간을 바꾸면 종료가 항상 +3시간이다.
assert.deepEqual(
  createLessonModalStartTimeChangePatch({ nextStartTime: "16:00" }),
  { endTime: "19:00", startTime: "16:00" }
);
assert.deepEqual(
  createLessonModalStartTimeChangePatch({ nextStartTime: "09:30" }),
  { endTime: "12:30", startTime: "09:30" }
);

// 신규 등록에서는 종료를 손으로 고친 뒤에 시작을 다시 바꿔도 +3시간으로 다시 맞춘다(사용자 요청 그대로).
assert.deepEqual(
  createLessonModalStartTimeChangePatch({
    currentEndTime: "11:00",
    nextStartTime: "14:00",
    previousStartTime: "09:30"
  }),
  { endTime: "17:00", startTime: "14:00" }
);

// 자정을 넘기는 시간은 23:59 로 묶는다. 저장 계약이 endTime > startTime 을 요구하므로
// 01:30 을 그대로 두면 사용자가 고칠 수 없는 검증 실패가 된다.
assert.deepEqual(
  createLessonModalStartTimeChangePatch({ nextStartTime: "22:30" }),
  { endTime: "23:59", startTime: "22:30" }
);
assert.deepEqual(
  createLessonModalStartTimeChangePatch({ nextStartTime: "21:00" }),
  { endTime: "23:59", startTime: "21:00" }
);
assert.deepEqual(
  createLessonModalStartTimeChangePatch({ nextStartTime: "20:59" }),
  { endTime: "23:59", startTime: "20:59" }
);

// 2026-09-26(검증 반영) · 클램프 결과가 시작보다 같거나 작으면 종료를 건드리지 않는다.
// 23:59 로 시작하면 종료도 23:59 가 되어 endTime > startTime 검증에 걸리는데,
// 종료 상한이 23:59 라 사용자가 고칠 방법이 없는 저장 실패가 된다.
assert.deepEqual(
  createLessonModalStartTimeChangePatch({ currentEndTime: "19:00", nextStartTime: "23:59" }),
  { startTime: "23:59" },
  "a 23:59 start must leave the previous end time alone"
);
assert.deepEqual(
  createLessonModalStartTimeChangePatch({ currentEndTime: "19:00", nextStartTime: "23:00" }),
  { endTime: "23:59", startTime: "23:00" },
  "a 23:00 start still clamps to 23:59 because it stays after the start"
);

// 시간이 비어 있거나 망가졌으면 종료를 건드리지 않는다(입력 중인 값을 덮지 않는다).
assert.deepEqual(createLessonModalStartTimeChangePatch({ nextStartTime: "" }), { startTime: "" });
assert.deepEqual(createLessonModalStartTimeChangePatch({ nextStartTime: "abc" }), { startTime: "abc" });

// 길이는 주입 가능하다 — 기본값 180분은 상수로 고정되지 않는다.
assert.deepEqual(
  createLessonModalStartTimeChangePatch({ lessonMinutes: 90, nextStartTime: "16:00" }),
  { endTime: "17:30", startTime: "16:00" }
);

// 2026-09-26(검증 반영) · 기존 수업 편집은 사람이 정해 둔 종료를 조용히 덮지 않는다.
// 실측 버그: 저장돼 있던 16:00-17:45 수업에서 시작만 16:30 으로 옮기니 종료가 19:30(3시간)이 됐다.
assert.deepEqual(
  createLessonModalStartTimeChangePatch({
    currentEndTime: "17:45",
    isEditingExistingLesson: true,
    nextStartTime: "16:30",
    previousStartTime: "16:00"
  }),
  { startTime: "16:30" },
  "an edited lesson must keep a human-chosen end time"
);

// 종료가 "직전 시작 + 3시간" 그대로였다면 편집 중에도 따라 움직인다.
assert.deepEqual(
  createLessonModalStartTimeChangePatch({
    currentEndTime: "19:00",
    isEditingExistingLesson: true,
    nextStartTime: "16:30",
    previousStartTime: "16:00"
  }),
  { endTime: "19:30", startTime: "16:30" },
  "an edited lesson that still matches start + 3h keeps following the start"
);

// 직전 시작이 비어 있으면(편집 중 입력이 망가진 상태) 종료를 건드리지 않는다.
assert.deepEqual(
  createLessonModalStartTimeChangePatch({
    currentEndTime: "19:00",
    isEditingExistingLesson: true,
    nextStartTime: "16:30",
    previousStartTime: ""
  }),
  { startTime: "16:30" },
  "an unreadable previous start must not move the end time"
);

// 직전 종료가 클램프된 23:59 였다면 같은 클램프 기준으로 비교한다(22:00 + 3시간 = 23:59).
assert.deepEqual(
  createLessonModalStartTimeChangePatch({
    currentEndTime: "23:59",
    isEditingExistingLesson: true,
    nextStartTime: "14:00",
    previousStartTime: "22:00"
  }),
  { endTime: "17:00", startTime: "14:00" },
  "a clamped end time still counts as following the start"
);

// 편집이어도 클램프 결과가 시작 이하이면 종료는 그대로 둔다.
assert.deepEqual(
  createLessonModalStartTimeChangePatch({
    currentEndTime: "19:00",
    isEditingExistingLesson: true,
    nextStartTime: "23:59",
    previousStartTime: "16:00"
  }),
  { startTime: "23:59" }
);

// 파생 헬퍼는 따로도 쓸 수 있어야 한다(같은 클램프 규칙을 비교와 계산이 공유한다).
assert.equal(getLessonModalFollowedEndTime("16:00"), "19:00");
assert.equal(getLessonModalFollowedEndTime("22:00"), "23:59");
assert.equal(getLessonModalFollowedEndTime(""), "");
assert.equal(getLessonModalFollowedEndTime("16:00", 105), "17:45");

console.log("lesson modal draft transition model passed");
