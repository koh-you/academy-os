import assert from "node:assert/strict";
import {
  createLessonModalColorOptions,
  createLessonModalDateChangePatch,
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

console.log("lesson modal draft transition model passed");
