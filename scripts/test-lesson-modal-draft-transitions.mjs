import assert from "node:assert/strict";
import {
  createLessonModalColorOptions,
  createLessonModalDateChangePatch,
  createLessonModalStartTimeChangePatch,
  createLessonModalTemplateChangePatch,
  createLessonModalTypeChangePatch
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

// 2026-09-26 · 사용자가 시작 시간을 직접 바꾸면 종료는 기본 +3시간이다.
assert.deepEqual(
  createLessonModalStartTimeChangePatch({ nextStartTime: "16:00" }),
  { endTime: "19:00", startTime: "16:00" }
);
assert.deepEqual(
  createLessonModalStartTimeChangePatch({ nextStartTime: "09:30" }),
  { endTime: "12:30", startTime: "09:30" }
);

// 종료를 손으로 고친 뒤에 시작을 다시 바꾸면 다시 +3시간으로 맞춘다 — 패치가 순수함수라
// 이전 종료값과 무관하게 같은 결과가 나온다(예측 가능함을 우선한 선택).
assert.deepEqual(
  createLessonModalStartTimeChangePatch({ nextStartTime: "14:00" }),
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

// 시간이 비어 있거나 망가졌으면 종료를 건드리지 않는다(입력 중인 값을 덮지 않는다).
assert.deepEqual(createLessonModalStartTimeChangePatch({ nextStartTime: "" }), { startTime: "" });
assert.deepEqual(createLessonModalStartTimeChangePatch({ nextStartTime: "abc" }), { startTime: "abc" });

// 길이는 주입 가능하다 — 기본값 180분은 상수로 고정되지 않는다.
assert.deepEqual(
  createLessonModalStartTimeChangePatch({ lessonMinutes: 90, nextStartTime: "16:00" }),
  { endTime: "17:30", startTime: "16:00" }
);

console.log("lesson modal draft transition model passed");
